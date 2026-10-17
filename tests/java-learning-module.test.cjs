const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function setup(saved, phone=false) {
    const store=new Map(saved ? [['java-notes-mindmaps-v1',JSON.stringify(saved)]] : []);
    const handlers={};
    const context=vm.createContext({console,URL,crypto:require('node:crypto').webcrypto,setTimeout,clearTimeout,
        localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},
        document:{addEventListener:(name,fn,options)=>{if(!options)handlers[name]=fn;},getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[]},
        getBankStudyRecords:()=>[],mastery:{},memorizedIds:new Set(),markLocalUpdated(){},addEventListener(){},confirm:()=>true,matchMedia:()=>({matches:phone})});
    context.window=context;
    const run=code=>vm.runInContext(code,context);
    for(const file of ['mindmap-core.js','data/java-learning-language.js','data/java-learning-runtime.js','java-learning-core.js','java-learning-view.js','mindmap-module.js']) run(fs.readFileSync(path.join(__dirname,'..',file),'utf8'));
    const click=(action,dataset={})=>{
        const control={dataset:{mmAction:action,...dataset}};
        handlers.click({target:{closest:selector=>selector==='[data-mm-action]'?control:selector==='.mindmap-view'?{}:null}});
    };
    return {store,run,click,handlers,context};
}
test('Java learning is the default and works with an entirely empty question bank',()=>{
    const app=setup();
    const html=app.run('renderMindMap()');
    assert.match(html,/Java 学习/); assert.match(html,/题库导航/); assert.match(html,/我的导图/);
    assert.equal(app.run('getMindMapSnapshot().activeMapId'),'java-learning');
    const index=app.run('JavaLearningCore.createIndex(JAVA_LEARNING_PARTS)');
    assert.ok(index.nodes.length>100);
});
test('upgrading preserves existing personal maps and makes course content independent',()=>{
    const core=require('../mindmap-core.js'), map=core.createMap('我的旧导图');
    const app=setup({version:1,activeMapId:map.id,maps:[map]});
    app.run('renderMindMap()');
    assert.equal(app.run('getMindMapSnapshot().maps[0].title'),'我的旧导图');
    assert.equal(app.run('getMindMapSnapshot().activeMapId'),'java-learning');
    app.click('knowledge');
    assert.equal(app.run('getMindMapSnapshot().activeMapId'),'knowledge');
    app.click('learning');
    assert.equal(app.run('getMindMapSnapshot().activeMapId'),'java-learning');
});
test('course progress is independent from question mastery and survives backup round trips',()=>{
    const app=setup();
    app.run('renderMindMap()');
    app.click('lesson-state',{status:'mastered'});
    assert.equal(app.run('getMindMapSnapshot().learning.entries["java-root"].status'),'mastered');
    assert.equal(app.run('Object.keys(mastery).length'),0);
    const saved=JSON.parse(app.store.get('java-notes-mindmaps-v1'));
    const restored=setup(saved);
    assert.equal(restored.run('getMindMapSnapshot().learning.entries["java-root"].status'),'mastered');
    restored.run('applyMindMapSnapshot({version:1,activeMapId:"knowledge",maps:[]})');
    assert.equal(restored.run('getMindMapSnapshot().learning.entries["java-root"].status'),'mastered','legacy map backups preserve course progress');
});
test('learning inspector teaches the concept before showing practice questions and escapes notes',()=>{
    const app=setup();
    const html=app.run(`const idx=JavaLearningCore.createIndex(JAVA_LEARNING_PARTS); const n=idx.nodes.find(n=>n.id==='collections-hashmap'); JavaLearningView.inspector({node:n,index:idx,entry:{status:'new',note:'<img src=x onerror=alert(1)>'},questions:[],hasChildren:true});`);
    assert.match(html,/理解原理/);assert.match(html,/示例/);assert.match(html,/易错点/);assert.match(html,/官方资料/);
    assert.doesNotMatch(html,/<img src=x/);
    assert.doesNotMatch(html,/练习巩固/,'empty practice does not interrupt the lesson');
});

test('concept notes flush before switching mode and copied branches carry explanations',()=>{
    const app=setup(); app.run('renderMindMap()');
    app.click('lesson-topic',{id:'collections'}); app.run('renderMindMap()');
    app.handlers.input({target:{id:'mindmapLearningNote',value:'先理解接口，再比较实现'},isComposing:false});
    app.click('knowledge');
    assert.equal(app.run('getMindMapSnapshot().learning.entries.collections.note'),'先理解接口，再比较实现');
    app.click('learning'); app.run('renderMindMap()');
    app.click('copy-branch');
    assert.match(app.run('getMindMapSnapshot().maps[0].nodes[0].note'),/先理解接口，再比较实现/);
    assert.match(app.run('getMindMapSnapshot().maps[0].nodes[0].note'),/知识讲解/);
    assert.ok(app.run('getMindMapSnapshot().maps[0].nodes.length')>10);
    assert.equal(app.run('getMindMapSnapshot().maps[0].nodes.some(n=>n.questionId!==null)'),false);
});

test('an unknown saved topic falls back to the overview while preserving unknown notes',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'removed-topic',entries:{'removed-concept':{status:'learning',note:'历史笔记'}}}});
    const html=app.run('renderMindMap()');
    assert.match(html,/全部知识/);
    assert.equal(app.run('getMindMapSnapshot().learning.entries["removed-concept"].note'),'历史笔记');
});

test('copying a lesson preserves maximum length notes without blocking unrelated branches',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'learning',note:'长'.repeat(10000)},'collections-arraylist':{status:'new',note:'另'.repeat(10000)}}}});
    app.run('renderMindMap()');
    app.click('lesson-jump',{id:'collections-hashmap'});
    app.click('copy-branch');
    assert.equal(app.run('getMindMapSnapshot().maps.length'),1);
    assert.equal(app.run('getMindMapSnapshot().maps[0].nodes.find(n=>n.title==="我的理解").note.length'),10000);
    assert.equal(app.run('getMindMapSnapshot().maps[0].nodes.some(n=>n.note==="另".repeat(10000))'),false);
});

test('a personal map with a curriculum-like ID renders and exports as a personal map',()=>{
    const core=require('../mindmap-core.js'),map=core.createMap('自建的 Java 图');
    map.id='java-learning:custom';
    const app=setup({version:1,activeMapId:map.id,maps:[map],learning:{version:1,topicId:'java-root',entries:{}}});
    assert.match(app.run('renderMindMap()'),/data-mode="personal"/);
    assert.match(app.run('getMindMapSVG(getMindMapSnapshot().maps[0])'),/自建的 Java 图/);
});

test('phone opens with the map and saves a pending note before returning from reading',()=>{
    const app=setup(undefined,true);
    assert.match(app.run('renderMindMap()'),/data-view="canvas" data-reading="false"/);
    app.click('read-concept');
    assert.match(app.run('renderMindMap()'),/data-reading="true"/);
    app.handlers.input({target:{id:'mindmapLearningNote',value:'在手机记录的理解'},isComposing:false});
    app.click('back-to-map');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["java-root"].note'),'在手机记录的理解');
    assert.match(app.run('renderMindMap()'),/data-reading="false"/);
});

test('phone topic selector changes the lesson scope and returns to the map',()=>{
    const app=setup(undefined,true);app.run('renderMindMap()');app.click('read-concept');
    app.handlers.change({target:{id:'mindmapTopicSelect',value:'collections'}});
    assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'collections');
    assert.match(app.run('renderMindMap()'),/data-reading="false"/);
    app.click('lesson-jump',{id:'collections-hashmap'});
    assert.match(app.run('renderMindMap()'),/data-reading="true"/);
});

test('phone drilling and going up keep the read-concept target on the visible branch',()=>{
    const app=setup(undefined,true);app.run('renderMindMap()');
    app.click('toggle',{id:'language'});
    assert.match(app.run('renderMindMap()'),/id="mindmapSelectedTitle">语言基础</);
    app.click('branch-up');
    assert.match(app.run('renderMindMap()'),/id="mindmapSelectedTitle">Java 知识学习</);
});

function readingSetup(phone=true){
    const app=setup(undefined,phone);
    app.run(fs.readFileSync(path.join(__dirname,'../java-learning-reading.js'),'utf8'));
    app.run(`window.XIAOLIN_CATALOG={topics:[{id:'collections',title:'集合',chapters:[{id:'map',title:'Map'}],sections:[{id:'hash-section',title:'HashMap原理',chapterId:'map',kind:'lesson'}]}]};
        window.JAVA_LEARNING_XIAOLIN={'collections-hashmap':['hash-section']};
        window.readState={entries:{}};window.getXiaolinSnapshot=()=>readState;
        window.handoffs=[];window.openXiaolinFromMindMap=(id,concept)=>{handoffs.push({id,concept});return true;};
        window.returnPages=[];window.navigateWorkspace=page=>returnPages.push(page);
        window.requestAnimationFrame=fn=>fn();window.scrollTo=()=>{};`);
    app.run('renderMindMap()');app.click('lesson-topic',{id:'collections'});app.run('renderMindMap()');
    app.click('lesson-jump',{id:'collections-hashmap'});
    return app;
}
test('curated reading opens exact section, flushes pending notes and restores phone concept context',()=>{
    const app=readingSetup();
    app.handlers.input({target:{id:'mindmapLearningNote',value:'读前的疑问'},isComposing:false});
    app.click('read-xiaolin',{id:'hash-section'});
    assert.equal(app.run('handoffs.length'),1);
    assert.equal(app.run('handoffs[0].concept.id'),'collections-hashmap');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].note'),'读前的疑问');
    app.run('readState.entries["hash-section"]={done:true}');
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
    assert.equal(app.run('returnPages.at(-1)'),'mindmap');
    const html=app.run('renderMindMap()');
    assert.match(html,/data-reading="true"/);
    const inspector={innerHTML:'',querySelectorAll:()=>[]};
    app.context.document.getElementById=id=>id==='mindmapInspector'?inspector:id==='mindmapViewport'?{clientWidth:390,clientHeight:400,addEventListener(){},isConnected:false}:null;
    app.run('mountMindMap()');
    assert.match(inspector.innerHTML,/已读懂 1 \/ 1/);
    assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'collections');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'new');
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),false,'return context consumed');
});
test('invalid or unrelated reading references cannot navigate and return IDs must match',()=>{
    const app=readingSetup();app.click('read-xiaolin',{id:'missing'});
    assert.equal(app.run('handoffs.length'),0);
    app.click('read-xiaolin',{id:'hash-section'});
    assert.equal(app.run('returnToMindMapLearning("language")'),false);
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
});

test('hidden phone reading canvas keeps its last measured width for return navigation',()=>{
    const app=readingSetup();
    const viewport={clientWidth:370,clientHeight:400,addEventListener(){},isConnected:false};
    app.context.document.getElementById=id=>id==='mindmapViewport'?viewport:null;
    app.run('const measured=[];const originalLayout=JavaLearningCore.layoutMobile;JavaLearningCore.layoutMobile=(map,id,width)=>{measured.push(width);return originalLayout(map,id,width)};mountMindMap()');
    viewport.clientWidth=0;viewport.clientHeight=0;
    app.click('read-concept');app.run('mountMindMap()');
    assert.deepEqual(JSON.parse(app.run('JSON.stringify(measured)')),[370,370]);
});

test('desktop focused reading and map are separate surfaces and edits survive transitions',()=>{
 const app=setup();app.run('renderMindMap()');app.click('lesson-topic',{id:'collections'});app.run('renderMindMap()');
 app.handlers.input({target:{id:'mindmapLearningNote',value:'聚焦理解集合接口'},isComposing:false});
 app.click('focus-reading');
 assert.match(app.run('renderMindMap()'),/class="mindmap-view mm-focus"/);
 assert.match(app.run('renderMindMap()'),/data-focus-surface="reading"/);
 app.click('focus-map');assert.match(app.run('renderMindMap()'),/data-focus-surface="map"/);
 app.click('focus-exit');assert.doesNotMatch(app.run('renderMindMap()'),/class="mindmap-view mm-focus"/);
 assert.equal(app.run('getMindMapSnapshot().learning.entries.collections.note'),'聚焦理解集合接口');
});

test('focused Xiaolin handoff restores the concept reading surface',()=>{
 const app=readingSetup(false);app.click('focus-reading');app.click('read-xiaolin',{id:'hash-section'});
 assert.equal(app.run('handoffs[0].concept.focused'),true);
 assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
 assert.match(app.run('renderMindMap()'),/data-focus-surface="reading"/);
});
