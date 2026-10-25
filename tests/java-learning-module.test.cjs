const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const SNAPSHOT_KEY='java-notes-mindmaps-v1', VIEW_KEY='java-notes-learning-view-v1';

function setup(saved, {phone=false, storage=[], questions=[]}={}) {
    const store=new Map(storage);
    if(saved)store.set(SNAPSHOT_KEY,JSON.stringify(saved));
    const handlers={},captured={},lifecycle={},timers=new Map(),toasts=[],practices=[],scrolls=[];
    let nextTimer=0,storageFails=false;
    const context=vm.createContext({console,URL,crypto:require('node:crypto').webcrypto,
        setTimeout:fn=>{timers.set(++nextTimer,fn);return nextTimer;},clearTimeout:id=>timers.delete(id),
        localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>{if(storageFails)throw Error('QuotaExceededError');store.set(k,String(v));},removeItem:k=>store.delete(k)},
        document:{addEventListener:(name,fn,options)=>{(options?captured:handlers)[name]=fn;},getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[]},
        getBankStudyRecords:()=>questions,mastery:{},memorizedIds:new Set(),markLocalUpdated(){},toast:message=>toasts.push(message),
        addEventListener:(name,fn)=>{lifecycle[name]=fn;},matchMedia:()=>({matches:phone}),
        requestAnimationFrame:fn=>fn(),scrollTo:value=>scrolls.push(value),
        openStudyCategory:category=>{practices.push(category);return true;}});
    context.window=context;
    const run=code=>vm.runInContext(code,context);
    for(const file of ['mindmap-core.js','data/java-learning-language.js','data/java-learning-runtime.js','data/java-interview-paths.js','java-learning-core.js','java-learning-view.js','mindmap-module.js'])run(fs.readFileSync(path.join(__dirname,'..',file),'utf8'));
    const click=(action,dataset={})=>{
        const control={dataset:{mmAction:action,...dataset}};
        handlers.click({target:{closest:selector=>selector==='[data-mm-action]'?control:selector==='.mindmap-view'?{}:null}});
    };
    const input=(value,id='mindmapLearningNote',isComposing=false)=>{
        const target={id,value};handlers.input({target,isComposing});return target;
    };
    return {store,run,click,input,handlers,captured,lifecycle,context,toasts,practices,scrolls,
        failSaves:value=>{storageFails=value;}, flushTimers:()=>{const pending=[...timers.values()];timers.clear();pending.forEach(fn=>fn());}};
}
const html=app=>app.run('renderMindMap()');
const savedEntry=(app,id)=>JSON.parse(app.store.get(SNAPSHOT_KEY)).learning.entries[id];
function openHashMap(app){html(app);app.click('lesson-topic',{id:'collections'});app.click('lesson-jump',{id:'collections-hashmap'});}

for(const phone of [false,true])test(`${phone?'phone':'desktop'} opens interview topics without a canvas or separate map libraries`,()=>{
    const app=setup(undefined,{phone}),markup=html(app);
    assert.match(markup,/data-screen="home"/);
    assert.match(markup,/Java 面试学习/);
    assert.equal((markup.match(/data-mm-action="lesson-topic"/g)||[]).length,10);
    assert.doesNotMatch(markup,/题库导航|我的导图|mindmapViewport|<svg/);
    app.click('lesson-topic',{id:'collections'});
    assert.match(html(app),/data-screen="topic"/);
    assert.match(html(app),/data-mm-action="lesson-jump" data-id="collections-hashmap"/);
    app.click('lesson-jump',{id:'collections-hashmap'});
    assert.match(html(app),/data-screen="lesson"/);
    assert.match(html(app),/面试怎么问/);
    assert.match(html(app),/回答要点/);
    assert.match(html(app),/接着可能会追问/);
});

test('legacy personal maps survive while the workspace opens the new learning home',()=>{
    const core=require('../mindmap-core.js'),map=core.createMap('我的旧导图');
    map.id='java-learning:custom';
    const app=setup({version:1,activeMapId:map.id,maps:[map]});
    assert.match(html(app),/data-screen="home"/);
    assert.doesNotMatch(html(app),/我的旧导图|我的导图/);
    openHashMap(app);app.input('这里开始按面试问题学');app.click('home');
    const stored=JSON.parse(app.run('JSON.stringify(getMindMapSnapshot())'));
    assert.equal(stored.activeMapId,map.id);
    assert.deepEqual(stored.maps,[map]);
    assert.equal(stored.learning.entries['collections-hashmap'].note,'这里开始按面试问题学');
});

test('unknown historical entries survive learning and legacy snapshot imports',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'removed-topic',entries:{'removed-concept':{status:'learning',note:'历史笔记'}}}});
    assert.match(html(app),/data-screen="home"/);
    openHashMap(app);app.click('lesson-state',{status:'mastered'});
    app.run('applyMindMapSnapshot({version:1,activeMapId:"knowledge",maps:[]})');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["removed-concept"].note'),'历史笔记');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'mastered');
    const imported=JSON.parse(app.run('JSON.stringify(getMindMapSnapshot())'));
    const restart=setup(imported);
    assert.equal(restart.run('getMindMapSnapshot().learning.entries["removed-concept"].status'),'learning');
});

test('concept mastery is independent from question ratings and survives backup round trips',()=>{
    const app=setup(undefined,{questions:[{id:'question-hashmap',category:'Java 集合'}]});
    app.run('mastery["question-hashmap"]={level:"hard"};memorizedIds.add("question-hashmap");');
    openHashMap(app);app.click('lesson-state',{status:'mastered'});
    assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'mastered');
    assert.equal(app.run('mastery["question-hashmap"].level'),'hard');
    assert.equal(app.run('memorizedIds.size'),1);
    const restored=setup(JSON.parse(app.store.get(SNAPSHOT_KEY)));
    assert.equal(restored.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'mastered');
});

for(const [action,dataset,target] of [['home',{},'home'],['lesson-topic',{id:'language'},'topic'],['lesson-jump',{id:'collections-arraylist'},'lesson'],['practice',{},'lesson']])test(`pending notes save before ${action}`,()=>{
    const app=setup(undefined,{questions:[{id:'hash-question',category:'Java 集合'}]});
    openHashMap(app);app.input('先说明哈希定位，再说明键是否相等');app.click(action,dataset);
    assert.equal(savedEntry(app,'collections-hashmap').note,'先说明哈希定位，再说明键是否相等');
    assert.match(html(app),new RegExp(`data-screen="${target}"`));
    if(action==='practice')assert.deepEqual(app.practices,['Java 集合']);
    if(action==='lesson-jump'){
        app.input('数组连续存储');app.flushTimers();
        assert.equal(savedEntry(app,'collections-arraylist').note,'数组连续存储');
        assert.equal(savedEntry(app,'collections-hashmap').note,'先说明哈希定位，再说明键是否相等');
    }
});

test('rerendering retains unsaved textarea edits before debounce and after quota failure without changing stored records',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'collections',entries:{
        'collections-hashmap':{status:'mastered',note:'之前保存的回答'},
        'collections-arraylist':{status:'learning',note:'其他知识点的笔记'}
    }}});
    openHashMap(app);
    const storedBefore=app.store.get(SNAPSHOT_KEY),draft='新回答：先定位 <key>，再判断相等 & 继续追问';
    const renderedNote=()=>html(app).match(/<textarea\b[^>]*id="mindmapLearningNote"[^>]*>([\s\S]*?)<\/textarea>/)[1];
    app.input(draft);
    assert.equal(renderedNote(),'新回答：先定位 &lt;key&gt;，再判断相等 &amp; 继续追问');
    assert.equal(app.store.get(SNAPSHOT_KEY),storedBefore,'rendering the pending draft does not persist or mutate saved records');
    app.failSaves(true);app.flushTimers();
    assert.equal(renderedNote(),'新回答：先定位 &lt;key&gt;，再判断相等 &amp; 继续追问');
    assert.equal(app.store.get(SNAPSHOT_KEY),storedBefore,'a failed save retains the exact previous snapshot');
    app.failSaves(false);app.input(draft+'，补充了一个例子');app.flushTimers();
    assert.equal(savedEntry(app,'collections-hashmap').note,draft+'，补充了一个例子');
    assert.equal(savedEntry(app,'collections-hashmap').status,'mastered');
    assert.equal(savedEntry(app,'collections-arraylist').note,'其他知识点的笔记');
});

test('failed note saves block every learning transition and retain the draft for a later retry',()=>{
    const app=readingSetup();
    const draft=app.input('尚未落盘的重要面试回答');app.failSaves(true);
    for(const [action,dataset] of [['home',{}],['lesson-topic',{id:'language'}],['practice',{}],['read-xiaolin',{id:'hash-section'}],['focus',{}]])app.click(action,dataset);
    assert.match(html(app),/data-screen="lesson"/);
    assert.doesNotMatch(html(app),/mm-focus/);
    assert.equal(draft.value,'尚未落盘的重要面试回答');
    assert.equal(app.run('handoffs.length'),0);
    assert.equal(app.practices.length,0);
    assert.equal(JSON.parse(app.store.get(SNAPSHOT_KEY)).learning.entries['collections-hashmap'],undefined);
    assert.ok(app.toasts.some(message=>message.includes('本地保存失败')));
    assert.throws(()=>app.run('getMindMapSnapshot()'),/本地保存失败/);
    app.failSaves(false);app.click('home');
    assert.match(html(app),/data-screen="home"/);
    assert.equal(savedEntry(app,'collections-hashmap').note,'尚未落盘的重要面试回答');
});

test('practice hands the topic category to the bank without selecting individual question IDs',()=>{
    const app=setup(undefined,{questions:[{id:'hash-question',category:'Java 集合'},{id:'jdbc-question',category:'MySQL'}]});
    openHashMap(app);
    assert.match(html(app),/data-mm-action="practice"/);
    app.click('practice');assert.deepEqual(app.practices,['Java 集合']);
    app.click('lesson-topic',{id:'data-access'});app.click('practice');
    assert.deepEqual(app.practices,['Java 集合','MySQL']);
    assert.equal(app.run('Object.keys(mastery).length'),0);
});

test('empty categories and engineering do not show unusable practice entries',()=>{
    const empty=setup();openHashMap(empty);
    assert.doesNotMatch(html(empty),/data-mm-action="practice"/);
    const app=setup(undefined,{questions:[{id:'hash-question',category:'Java 集合'}]});html(app);
    app.click('lesson-topic',{id:'engineering'});
    assert.doesNotMatch(html(app),/data-mm-action="practice"/);
    app.click('lesson-jump',{id:'engineering-unit-tests'});
    assert.doesNotMatch(html(app),/data-mm-action="practice"/);
    app.click('practice');assert.equal(app.practices.length,0);
});

function readingSetup(phone=true){
    const app=setup(undefined,{phone,questions:[{id:'hash-question',category:'Java 集合'}]});
    app.run(fs.readFileSync(path.join(__dirname,'../java-learning-reading.js'),'utf8'));
    app.run(`window.XIAOLIN_CATALOG={topics:[{id:'collections',title:'集合',chapters:[{id:'map',title:'Map'}],sections:[{id:'hash-section',title:'HashMap原理',chapterId:'map',kind:'lesson'},{id:'other-section',title:'其他问题',chapterId:'map',kind:'lesson'}]}]};
        window.JAVA_LEARNING_XIAOLIN={'collections-hashmap':['hash-section']};
        window.readState={entries:{}};window.getXiaolinSnapshot=()=>readState;
        window.handoffs=[];window.openXiaolinFromMindMap=(id,concept)=>{handoffs.push({id,concept});return true;};
        window.returnPages=[];window.navigateWorkspace=page=>returnPages.push(page);`);
    openHashMap(app);return app;
}

test('Xiaolin opens the exact linked section after saving and returns to the focused lesson',()=>{
    const app=readingSetup();
    app.click('focus');app.input('读前的疑问');
    app.click('read-xiaolin',{id:'hash-section'});
    assert.equal(app.run('handoffs.length'),1);
    assert.equal(app.run('handoffs[0].id'),'hash-section');
    assert.equal(app.run('handoffs[0].concept.id'),'collections-hashmap');
    assert.equal(app.run('handoffs[0].concept.focused'),true);
    assert.equal(savedEntry(app,'collections-hashmap').note,'读前的疑问');
    app.run('readState.entries["hash-section"]={done:true}');
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
    assert.equal(app.run('returnPages.at(-1)'),'mindmap');
    assert.match(html(app),/mm-focus/);
    assert.match(html(app),/data-screen="lesson"/);
    assert.match(html(app),/1 \/ 1 已读懂/);
    assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'collections');
    assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'new');
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),false);
});

test('unmapped reading IDs cannot navigate and mismatched return IDs cannot consume the saved context',()=>{
    const app=readingSetup();
    app.click('read-xiaolin',{id:'missing'});app.click('read-xiaolin',{id:'other-section'});
    assert.equal(app.run('handoffs.length'),0);
    app.click('read-xiaolin',{id:'hash-section'});
    assert.equal(app.run('returnToMindMapLearning("language")'),false);
    assert.equal(app.run('returnPages.length'),0);
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
});

function topicReadingSetup(){
    const app=setup();
    app.run(fs.readFileSync(path.join(__dirname,'../java-learning-reading.js'),'utf8'));
    app.run(`const topicEntryId=JavaInterviewPaths.topics.find(topic=>topic.id==='collections').readings[0];
        JavaInterviewPaths.topics.find(topic=>topic.id==='collections').readings.push('missing-topic-section');
        window.XIAOLIN_CATALOG={topics:[{id:'collections',title:'集合',chapters:[{id:'map',title:'Map'}],sections:[
            {id:topicEntryId,title:'集合章节入口',chapterId:'map',kind:'lesson'},
            {id:'topic-curated-section',title:'专题已有讲解',chapterId:'map',kind:'lesson'},
            {id:'hash-section',title:'HashMap 原理',chapterId:'map',kind:'lesson'},
            {id:'unwired-section',title:'未关联章节',chapterId:'map',kind:'lesson'}]}]};
        window.JAVA_LEARNING_XIAOLIN={collections:['topic-curated-section'],'collections-hashmap':['hash-section']};
        window.readState={entries:{}};window.getXiaolinSnapshot=()=>readState;
        window.handoffs=[];window.openXiaolinFromMindMap=(id,concept)=>{handoffs.push({id,concept});return true;};
        window.returnPages=[];window.navigateWorkspace=page=>returnPages.push(page);`);
    html(app);app.click('lesson-topic',{id:'collections'});return app;
}

test('a topic opens its path chapter entry and returns to the topic without creating concept mastery',()=>{
    const app=topicReadingSetup(),entryId=app.run('topicEntryId');
    assert.match(html(app),/data-screen="topic"/);
    assert.ok(html(app).includes(`data-mm-action="read-xiaolin" data-id="${entryId}"`));
    app.click('read-xiaolin',{id:entryId});
    assert.equal(app.run('handoffs.length'),1);
    assert.equal(app.run('handoffs[0].id'),entryId);
    assert.equal(app.run('handoffs[0].concept.id'),'collections');
    assert.equal(app.run('handoffs[0].concept.focused'),false);
    app.run('readState.entries[topicEntryId]={done:true}');
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),false);
    assert.equal(app.run('returnToMindMapLearning("collections")'),true);
    assert.equal(app.run('returnPages.at(-1)'),'mindmap');
    assert.match(html(app),/data-screen="topic"/);
    assert.match(html(app),/1 \/ 2 已读懂/);
    assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'collections');
    assert.equal(app.run('Object.keys(getMindMapSnapshot().learning.entries).length'),0);
    assert.equal(app.store.get(VIEW_KEY),undefined);
    assert.equal(app.run('returnToMindMapLearning("collections")'),false);
});

test('topic readings merge existing curated references while rejecting unavailable or unrelated entries',()=>{
    const app=topicReadingSetup();
    assert.match(html(app),/data-mm-action="read-xiaolin" data-id="topic-curated-section"/);
    assert.doesNotMatch(html(app),/data-mm-action="read-xiaolin" data-id="missing-topic-section"/);
    for(const id of ['missing-topic-section','unwired-section','hash-section'])app.click('read-xiaolin',{id});
    assert.equal(app.run('handoffs.length'),0);
    app.click('read-xiaolin',{id:'topic-curated-section'});
    assert.equal(app.run('handoffs[0].id'),'topic-curated-section');
    assert.equal(app.run('returnToMindMapLearning("collections")'),true);
    app.click('lesson-jump',{id:'collections-hashmap'});
    app.click('read-xiaolin',{id:app.run('topicEntryId')});
    assert.equal(app.run('handoffs.length'),1,'topic entries are not automatically attached to each concept');
    app.click('read-xiaolin',{id:'hash-section'});
    assert.equal(app.run('handoffs[1].id'),'hash-section');
    assert.equal(app.run('handoffs[1].concept.id'),'collections-hashmap');
});

test('focus only applies to a lesson, saves pending drafts and exits back to the existing reading position',()=>{
    const app=setup();html(app);app.click('focus');assert.doesNotMatch(html(app),/mm-focus/);
    openHashMap(app);app.run('scrollY=480');app.input('聚焦理解集合接口');app.click('focus');
    assert.match(html(app),/mm-focus/);
    assert.equal(savedEntry(app,'collections-hashmap').note,'聚焦理解集合接口');
    app.input('补充键稳定性');app.click('focus-exit');
    assert.doesNotMatch(html(app),/mm-focus/);
    assert.match(html(app),/data-screen="lesson"/);
    assert.equal(savedEntry(app,'collections-hashmap').note,'补充键稳定性');
    assert.equal(app.scrolls.at(-1).top,480);
});

test('continue learning survives restart in its separate view key without changing concept mastery',()=>{
    const app=setup();openHashMap(app);
    assert.deepEqual(JSON.parse(app.store.get(VIEW_KEY)),{lastId:'collections-hashmap'});
    assert.deepEqual(JSON.parse(app.store.get(SNAPSHOT_KEY)).learning.entries,{});
    const restart=setup(undefined,{storage:[...app.store]});
    const markup=html(restart);
    assert.match(markup,/data-screen="home"/);
    assert.match(markup,/il-continue[^>]*data-mm-action="lesson-jump" data-id="collections-hashmap"/);
    restart.click('lesson-jump',{id:'collections-hashmap'});
    assert.match(html(restart),/data-screen="lesson"/);
    assert.equal(restart.run('getMindMapSnapshot().learning.topicId'),'collections');
});

test('an unavailable last-read concept is ignored and invalid lesson links return safely to the overview',()=>{
    const app=setup(undefined,{storage:[[VIEW_KEY,JSON.stringify({lastId:'removed-concept'})]]});
    assert.doesNotMatch(html(app),/class="[^"]*il-continue/);
    app.click('lesson-jump',{id:'removed-concept'});
    assert.match(html(app),/data-screen="home"/);
});
