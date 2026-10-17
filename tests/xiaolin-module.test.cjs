const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
function setup(saved,failWrite=false){
    const store=new Map(saved?[['java-notes-xiaolin-v1',JSON.stringify(saved)]]:[]),events={},messages=[];
    const ctx=vm.createContext({console,URL,setTimeout,clearTimeout,requestAnimationFrame:fn=>fn(),
        document:{addEventListener:(name,fn)=>{events[name]=fn;},getElementById:()=>null,querySelectorAll:()=>[],querySelector:()=>null},
        localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>{if(failWrite)throw Error('quota');store.set(k,v);}},
        addEventListener(){},toast:message=>messages.push(message),markLocalUpdated(){},renderAll(){},scrollTo(){},showXiaolin:false,showGlossary:false,showAnnotations:false});
    ctx.window=ctx;
    for(const file of ['xiaolin-core.js','data/xiaolin/catalog.js','xiaolin-view.js','xiaolin-module.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),ctx);
    return {run:code=>vm.runInContext(code,ctx),store,events,messages,context:ctx};
}
test('mind map handoff opens the exact lesson and keeps return context transient',()=>{
    const app=setup();
    app.run('window.navigateWorkspace=page=>{showXiaolin=page==="xiaolin"}; const linked=xiaolinIndex.lessons.find(s=>s.topicId==="juc");');
    assert.equal(app.run('typeof openXiaolinFromMindMap'),'function');
    assert.equal(app.run('openXiaolinFromMindMap(linked.id,{id:"aqs",title:"AQS 同步器"})'),true);
    assert.equal(app.run('showXiaolin'),true);
    assert.equal(app.run('xiaolinUI.topicId'),app.run('linked.topicId'));
    assert.equal(app.run('xiaolinUI.chapterId'),app.run('linked.chapterId'));
    assert.equal(app.run('xiaolinUI.pendingJump'),app.run('linked.id'));
    assert.deepEqual(JSON.parse(app.run('JSON.stringify(xiaolinUI.mindmapReturn)')),{id:'aqs',title:'AQS 同步器',previousFocused:false});
    const saved=JSON.parse(app.store.get('java-notes-xiaolin-v1'));
    assert.equal(saved.last.sectionId,app.run('linked.id'));
    assert.equal('mindmapReturn' in saved,false);
});
test('invalid handoffs never navigate or retain an old concept return target',()=>{
    const app=setup();app.run('window.navigateWorkspace=()=>{throw Error("must not navigate")};');
    assert.equal(app.run('typeof openXiaolinFromMindMap'),'function');
    for(const [section,concept] of [['"missing"','{id:"aqs",title:"AQS"}'],['xiaolinIndex.sections.find(s=>s.kind!=="lesson").id','{id:"aqs",title:"AQS"}'],['xiaolinIndex.lessons[0].id','null'],['xiaolinIndex.lessons[0].id','{id:"",title:"AQS"}'],['xiaolinIndex.lessons[0].id','{id:"aqs",title:23}']]){
        app.run('xiaolinUI.mindmapReturn={id:"old",title:"Old"}');
        assert.equal(app.run(`openXiaolinFromMindMap(${section},${concept})`),false);
        assert.equal(app.run('xiaolinUI.mindmapReturn'),null);
    }
});
test('return flushes pending reader notes and timers before restoring the concept',async()=>{
    const app=setup();
    assert.equal(app.run('typeof returnFromXiaolinToMindMap'),'function');
    const id=app.run('xiaolinIndex.lessons[0].id'),status={textContent:''};
    app.events.input({target:{dataset:{xlNote:id},value:'尚未等到自动保存的笔记',parentElement:{querySelector:()=>status}}});
    app.run('xiaolinUI.mindmapReturn={id:"hashmap",title:"HashMap"}; xiaolinScrollTimer=setTimeout(()=>{throw Error("stale timer")},1000); window.returnToMindMapLearning=id=>{window.returnedId=id; window.flushedNote=JSON.parse(localStorage.getItem(XIAOLIN_KEY)).entries[xiaolinIndex.lessons[0].id].note; return true};');
    await app.events.click({target:{closest:selector=>selector==='[data-xl-action]'?{dataset:{xlAction:'return-mindmap'}}:null}});
    assert.equal(app.context.returnedId,'hashmap');
    assert.equal(app.context.flushedNote,'尚未等到自动保存的笔记');
    assert.equal(app.run('xiaolinNoteTimer'),null);
    assert.equal(app.run('xiaolinScrollTimer'),null);
    assert.equal(app.run('xiaolinUI.mindmapReturn'),null);
});
test('failed storage retains the latest draft in memory while returning to the map',()=>{
    const app=setup(undefined,true);
    assert.equal(app.run('typeof returnFromXiaolinToMindMap'),'function');
    const id=app.run('xiaolinIndex.lessons[0].id');
    app.context.document.querySelectorAll=selector=>selector==='[data-xl-note]'?[{dataset:{xlNote:id},value:'保存失败也不丢的理解'}]:[];
    app.run('xiaolinUI.mindmapReturn={id:"aqs",title:"AQS"}; window.returnToMindMapLearning=()=>true');
    assert.equal(app.run('returnFromXiaolinToMindMap()'),true);
    assert.equal(app.run('getXiaolinSnapshot().entries[xiaolinIndex.lessons[0].id].note'),'保存失败也不丢的理解');
    assert.ok(app.messages.some(message=>message.includes('保存')));
});
test('unavailable map return leaves the reader context available for retry',()=>{
    const app=setup();
    assert.equal(app.run('typeof returnFromXiaolinToMindMap'),'function');
    app.run('xiaolinUI.mindmapReturn={id:"aqs",title:"AQS"}; window.returnToMindMapLearning=()=>false');
    assert.equal(app.run('returnFromXiaolinToMindMap()'),false);
    assert.equal(app.run('xiaolinUI.mindmapReturn.id'),'aqs');
});
test('contextual return remains accessible while loading or failed, including long mobile titles',()=>{
    const app=setup(),{load}=require('cheerio');
    const title='AQS <同步器> & 等待队列'.repeat(8);
    for(const error of ['', 'load']){
        const $=load(app.run(`XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:'java',mobile:true,error:${JSON.stringify(error)},mindmapReturn:{id:'aqs',title:${JSON.stringify(title)}}})`));
        assert.equal($('.xl-reader-toolbar [data-xl-action="return-mindmap"]').text(),'← 返回知识导图');
        assert.equal($('.xl-mindmap-context .xl-mindmap-concept').text(),title);
        assert.equal($('.xl-mindmap-context .xl-mindmap-concept').attr('title'),title);
        assert.equal($('.xl-mindmap-context script').length,0);
    }
    const $=load(app.run('XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:"java",mobile:false})'));
    assert.equal($('[data-xl-action="return-mindmap"]').length,0);
});
test('reader notes and completion persist under an independent key',()=>{
    const app=setup();
    app.run('setXiaolinEntry(xiaolinIndex.lessons[0].id,{done:true,starred:true,note:"用自己的话复述"})');
    const saved=JSON.parse(app.store.get('java-notes-xiaolin-v1'));
    assert.equal(Object.values(saved.entries)[0].note,'用自己的话复述');
    assert.deepEqual([...app.store.keys()],['java-notes-xiaolin-v1']);
    assert.equal(setup(saved).run('Object.values(getXiaolinSnapshot().entries)[0].done'),true);
});
test('legacy backup preserves reader data and invalid import rejects before persistence',()=>{
    const app=setup();app.run('setXiaolinEntry(xiaolinIndex.lessons[0].id,{note:"保留"})');
    const before=app.store.get('java-notes-xiaolin-v1');
    app.run('applyXiaolinSnapshot(undefined)');assert.equal(app.store.get('java-notes-xiaolin-v1'),before);
    assert.throws(()=>app.run('applyXiaolinSnapshot({version:1,entries:{bad:{done:"yes"}}})'),/小林/);
    assert.equal(app.store.get('java-notes-xiaolin-v1'),before);
});
test('write failures keep the latest note in memory and show a recoverable warning',()=>{
    const app=setup(undefined,true);
    assert.equal(app.run('setXiaolinEntry(xiaolinIndex.lessons[0].id,{note:"不能丢失"})'),false);
    assert.equal(app.run('Object.values(getXiaolinSnapshot().entries)[0].note'),'不能丢失');
    assert.ok(app.messages.some(message=>message.includes('保存')));
});
test('continuous chapter renders answers immediately, safely escapes personal notes',()=>{
    const app=setup();
    const html=app.run(`XiaolinView.chapter({topic:xiaolinIndex.topics[0],chapter:{id:'chapter',title:'概念',introduction:{html:''},sections:[{id:'one',title:'Java 的特点',source:'https://xiaolincoding.com',kind:'lesson',html:'<p>跨平台与面向对象</p>'}]},state:{entries:{one:{note:'<script>alert(1)</script>'}}}})`);
    assert.match(html,/跨平台与面向对象/);assert.match(html,/&lt;script&gt;/);assert.doesNotMatch(html,/<script>|查看答案|data-study=/);
});

test('mobile reader uses a smaller visible font without changing saved desktop preference',()=>{
    const app=setup({version:1,entries:{},fontSize:18});
    const mobile=app.run(`XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:'java',mobile:true})`);
    assert.match(mobile,/--xl-font-size:16px/);
    assert.match(mobile,/<output id="xiaolinFontSize">16<\/output>/);
    const desktop=app.run(`XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:'java',mobile:false})`);
    assert.match(desktop,/--xl-font-size:18px/);
    assert.equal(app.run('getXiaolinSnapshot().fontSize'),18);
});

test('library directory exposes every chapter under its topic with a direct reading action',()=>{
    const app=setup(),{load}=require('cheerio');
    const $=load(app.run('XiaolinView.books(xiaolinIndex,xiaolinState)'));
    const topics=JSON.parse(app.run('JSON.stringify(xiaolinIndex.topics)'));
    assert.equal($('details').length,topics.length);
    for(const topic of topics){
        const node=$(`details[data-xl-topic="${topic.id}"]`);
        assert.ok(node.children('summary').text().includes(topic.title));
        for(const chapter of topic.chapters){
            const button=node.find(`button[data-xl-action="chapter"][data-id="${chapter.id}"]`);
            assert.equal(button.attr('data-topic'),topic.id);
            assert.ok(button.text().includes(chapter.title));
        }
    }
    app.run('xiaolinState.last={topicId:"java",chapterId:xiaolinIndex.topics[0].chapters[0].id,sectionId:""}');
    const resumed=load(app.run('XiaolinView.books(xiaolinIndex,xiaolinState)'));
    assert.equal(resumed('details[open]').attr('data-xl-topic'),'java');
    assert.equal(resumed('[aria-current="location"]').length,1);
});

test('sections expose accessible collapse controls while keeping notes in the DOM',()=>{
    const app=setup(),{load}=require('cheerio');
    const $=load(app.run(`XiaolinView.chapter({topic:xiaolinIndex.topics[0],chapter:{id:'chapter',title:'概念',sections:[{id:'one',title:'Java 的特点',source:'https://xiaolincoding.com',kind:'lesson',html:'<p>正文</p>'}]},state:{entries:{one:{note:'保留笔记'}}},collapsed:new Set(['one'])})`));
    const button=$('[data-xl-action="toggle-section"]');
    assert.equal(button.attr('aria-expanded'),'false');
    assert.equal($('#'+button.attr('aria-controls')).is('[hidden]'),true);
    assert.equal($('textarea').text(),'保留笔记');
    assert.equal($('[data-xl-action="expand-all"]').length,1);
    assert.equal($('[data-xl-action="collapse-all"]').length,1);
});

test('mobile quick navigation lives in the toolbar and displays chapter length',()=>{
    const app=setup(),{load}=require('cheerio');
    const data=fs.readFileSync(path.join(__dirname,'../data/xiaolin/java.json'),'utf8');
    const $=load(app.run(`XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:'java',chapterId:xiaolinIndex.topics[0].chapters[0].id,mobile:true},${data})`));
    assert.equal($('.xl-reader-toolbar>.xl-quick-nav').length,1);
    assert.equal($('.xl-quick-nav>summary').text(),'1/10 ▾');
    assert.equal($('.xl-quick-nav').is('[open]'),false);
});

test('focused reader keeps reading controls on demand and a visible exit for mobile',()=>{
    const app=setup(),{load}=require('cheerio');
    const data=fs.readFileSync(path.join(__dirname,'../data/xiaolin/java.json'),'utf8');
    const $=load(app.run(`XiaolinView.reader(xiaolinIndex,xiaolinState,{topicId:'java',chapterId:xiaolinIndex.topics[0].chapters[0].id,mobile:true,focused:true,mindmapReturn:{id:'java',title:'Java'}},${data})`));
    assert.equal($('.xl-reader').hasClass('xl-focused'),true);
    assert.equal($('.xl-reader-toolbar [data-xl-action="focus"]').text(),'退出专注');
    assert.equal($('.xl-reader-toolbar [data-xl-action="return-mindmap"]').length,1);
    assert.equal($('.xl-reading-settings>summary').text(),'阅读设置');
    assert.equal($('.xl-reading-settings').is('[open]'),false);
    assert.equal($('.xl-reading-settings [data-xl-action="font-up"]').length,1);
    assert.equal($('.xl-reading-settings [data-xl-action="jump"]').length,10);
    assert.equal($('.xl-reader-toolbar>.xl-quick-nav').length,0);
    assert.equal($('.xl-section').length,10);
    assert.equal($('[data-xl-note]').length,10);
});

test('focus handoff inherits atlas focus and restores reader preference only after successful return',()=>{
    for(const previous of [false,true]){
        const app=setup();
        app.run(`xiaolinUI.focused=${previous};window.navigateWorkspace=()=>{};window.returnToMindMapLearning=()=>false;`);
        assert.equal(app.run('openXiaolinFromMindMap(xiaolinIndex.lessons[0].id,{id:"aqs",title:"AQS",focused:true})'),true);
        assert.equal(app.run('xiaolinUI.focused'),true);
        assert.equal(app.run('xiaolinUI.mindmapReturn.previousFocused'),previous);
        assert.equal(app.run('returnFromXiaolinToMindMap()'),false);
        assert.equal(app.run('xiaolinUI.focused'),true);
        app.run('window.returnToMindMapLearning=()=>true');
        assert.equal(app.run('returnFromXiaolinToMindMap()'),true);
        assert.equal(app.run('xiaolinUI.focused'),previous);
        assert.equal(app.run('xiaolinUI.mindmapReturn'),null);
    }
});

test('reader registers focus containment even while the chapter is unavailable',()=>{
    const app=setup(),calls=[],reader={};
    app.context.document.querySelector=selector=>selector==='.xl-reader'?reader:null;
    app.context.LearningFocus={sync:(...args)=>calls.push(args)};
    app.run('showXiaolin=true;xiaolinUI.topicId="java";xiaolinUI.error="load";xiaolinUI.focused=true;mountXiaolin()');
    assert.equal(calls.length,1);
    assert.equal(calls[0][0],reader);
    assert.equal(calls[0][1],true);
    assert.equal(calls[0][2].kind,'xiaolin');
    assert.equal(typeof calls[0][2].onExit,'function');
    calls[0][2].onExit();
    assert.equal(app.run('xiaolinUI.focused'),false);
});

test('changing reader focus flushes notes and keeps the visible paragraph below its toolbar',()=>{
    const app=setup(),scrolls=[];
    app.run('showXiaolin=true');
    const id=app.run('xiaolinIndex.lessons[0].id');
    let focused=false;
    const paragraph={getBoundingClientRect:()=>({top:focused?260:120,bottom:focused?380:240})};
    app.context.document.querySelectorAll=selector=>selector==='[data-xl-note]'?[{dataset:{xlNote:id},value:'切换专注前的笔记'}]:selector.includes('.xl-section > header')?[paragraph]:[];
    app.context.document.querySelector=selector=>selector==='.xl-reader-toolbar'?{getBoundingClientRect:()=>({bottom:focused?60:100})}:null;
    app.context.scrollY=400;
    app.context.scrollTo=position=>scrolls.push(position);
    app.context.renderAll=()=>{focused=app.run('xiaolinUI.focused');};
    assert.equal(app.run('typeof setXiaolinFocus'),'function');
    app.run('setXiaolinFocus(true)');
    assert.equal(app.run('xiaolinUI.focused'),true);
    assert.equal(JSON.parse(app.store.get('java-notes-xiaolin-v1')).entries[id].note,'切换专注前的笔记');
    assert.equal(scrolls.at(-1).top,580);
    assert.equal(app.run('xiaolinUI.pendingJump'),null);
});

test('a queued focus scroll restoration cannot move the page after leaving the reader',()=>{
    const app=setup(),frames=[],scrolls=[];
    app.context.requestAnimationFrame=callback=>frames.push(callback);
    app.context.scrollTo=position=>scrolls.push(position);
    app.run('showXiaolin=true;setXiaolinFocus(true);showXiaolin=false');
    frames.forEach(callback=>callback());
    assert.equal(scrolls.length,0);
});

test('Escape closes reading settings and respects a key handled by the shared focus layer',()=>{
    const app=setup();let focused=false,prevented=false;
    const settings={open:true,querySelector:()=>({focus:()=>{focused=true;}})};
    app.context.document.querySelector=selector=>selector==='.xl-reading-settings'?settings:null;
    app.events.keydown({key:'Escape',defaultPrevented:true});
    assert.equal(settings.open,true);
    app.events.keydown({key:'Escape',defaultPrevented:false,preventDefault:()=>{prevented=true;}});
    assert.equal(settings.open,false);
    assert.equal(focused,true);
    assert.equal(prevented,true);
});

test('opening the chapter directory closes its settings popup before scrolling and focuses the directory',async()=>{
    const app=setup();let popupAtScroll,focused=false;
    const settings={open:true,contains:()=>true};
    const panel={open:false,scrollIntoView:()=>{popupAtScroll=settings.open;},querySelector:()=>({focus:()=>{focused=true;}})};
    app.context.document.querySelector=selector=>selector==='.xl-reading-settings'?settings:selector==='.xl-directory-panel'?panel:null;
    await app.events.click({target:{closest:selector=>selector==='[data-xl-action]'?{dataset:{xlAction:'directory'}}:null}});
    assert.equal(popupAtScroll,false);
    assert.equal(settings.open,false);
    assert.equal(panel.open,true);
    assert.equal(focused,true);
});
