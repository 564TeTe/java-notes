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
        addEventListener(){},toast:message=>messages.push(message),markLocalUpdated(){},showXiaolin:false});
    ctx.window=ctx;
    for(const file of ['xiaolin-core.js','data/xiaolin/catalog.js','xiaolin-view.js','xiaolin-module.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),ctx);
    return {run:code=>vm.runInContext(code,ctx),store,events,messages};
}
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
