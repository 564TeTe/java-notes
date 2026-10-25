const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
function setup(){
    const store=new Map();
    const el={value:'',textContent:'',innerHTML:'',style:{},dataset:{},classList:{add(){},remove(){},toggle(){}},setAttribute(){},querySelectorAll:()=>[],addEventListener(){}};
    const context=vm.createContext({console,URL,crypto:require('node:crypto').webcrypto,setTimeout,clearTimeout,requestAnimationFrame(){},addEventListener(){},scrollTo(){},
        localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},
        document:{body:el,getElementById:()=>el,querySelector:()=>el,querySelectorAll:()=>[],addEventListener(){}},matchMedia:()=>({matches:false}),GlossaryHighlighter:{close(){}}});
    context.window=context;
    const run=code=>vm.runInContext(code,context),load=file=>run(fs.readFileSync(path.join(root,file),'utf8'));
    for(const file of ['resume-data.js','resume-question-expansion.js','resume-claims.js','resume-workbench.js','resume-module.js','recruitment-module.js','data/question-bank.js','data/question-curation.js','study-core.js'])load(file);
    run([...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('const NOTES'))[1]);
    for(const file of ['study-module.js','interview-module.js','workspace-shell.js','glossary-data.js','glossary-core.js','glossary.js','annotation-data.js','annotation-core.js','annotation.js','xiaolin-core.js','data/xiaolin/catalog.js','xiaolin-view.js','xiaolin-module.js'])load(file);
    run('renderAll=buildCategoryBtns=toast=function(){}; loadState(); markLocalUpdated();');
    return {run,store,context};
}
test('all workspace navigation paths leave reader cleanly, including reference overlays',()=>{
    const {run}=setup();
    for(const page of ['bank','memorized','personal','quiz','interviews','resume','recruitment','resources','trash','marked','mindmap']){
        run('navigateWorkspace("xiaolin")');assert.equal(run('currentWorkspacePage()'),'xiaolin');
        run(`navigateWorkspace('${page}')`);assert.equal(run('showXiaolin'),false);assert.equal(run('currentWorkspacePage()'),page);
    }
    for(const ref of ['glossary','annotations']){
        run(`navigateWorkspace('xiaolin'); navigateWorkspace('${ref}')`);assert.equal(run('currentWorkspacePage()'),ref);
        run('navigateWorkspace("xiaolin")');assert.equal(run('currentWorkspacePage()'),'xiaolin');
    }
    run('selectCategory("Java 基础")');assert.equal(run('showXiaolin'),false);
});
test('reader activity never changes question counts or quiz pools',()=>{
    const {run,store}=setup();
    const before=run('JSON.stringify({pool:getStudyPool("bank"),memorized:[...memorizedIds],marked:[...markedIds],mastery,userNotes})');
    run('navigateWorkspace("xiaolin"); setXiaolinEntry(xiaolinIndex.lessons[0].id,{done:true,starred:true,note:"理解后复述"})');
    assert.equal(run('JSON.stringify({pool:getStudyPool("bank"),memorized:[...memorizedIds],marked:[...markedIds],mastery,userNotes})'),before);
    assert.ok(store.has('java-notes-xiaolin-v1'));
});

test('a failed read-state write restores the shared snapshot and the same patch can be retried',()=>{
    const {run,store,context}=setup(),key='java-notes-xiaolin-v1';
    run('const entryId=xiaolinIndex.lessons[0].id;window.entryToasts=[];toast=message=>entryToasts.push(message);');
    const before=run('JSON.stringify(getXiaolinSnapshot())'),write=context.localStorage.setItem;
    context.localStorage.setItem=(name,value)=>{if(name===key)throw Error('quota');write(name,value);};
    assert.equal(run('setXiaolinEntry(entryId,{done:true})'),false);
    assert.equal(run('JSON.stringify(getXiaolinSnapshot())'),before);
    assert.equal(store.has(key),false);
    assert.equal(run('xiaolinSaveError'),true);
    assert.equal(run('entryToasts.length'),1);
    assert.equal(run('setXiaolinEntry(entryId,{done:true})'),false);
    assert.equal(run('entryToasts.length'),1,'repeated failures keep the existing warning suppression');
    context.localStorage.setItem=write;
    assert.equal(run('setXiaolinEntry(entryId,{done:true})'),true);
    assert.equal(run('getXiaolinSnapshot().entries[entryId].done'),true);
    assert.equal(JSON.parse(store.get(key)).entries[run('entryId')].done,true);
    assert.equal(run('xiaolinSaveError'),false);
});

test('a failed shared note patch never enters a snapshot or overwrites earlier reading records',()=>{
    const {run,store,context}=setup(),key='java-notes-xiaolin-v1';
    run(`const noteId=xiaolinIndex.lessons[0].id,otherId=xiaolinIndex.lessons[1].id;
        setXiaolinEntry(noteId,{note:'已经保存的理解',done:true});
        setXiaolinEntry(otherId,{note:'另一条记录',starred:true});`);
    const before=run('JSON.stringify(getXiaolinSnapshot())'),stored=store.get(key),write=context.localStorage.setItem;
    context.localStorage.setItem=(name,value)=>{if(name===key)throw Error('quota');write(name,value);};
    assert.equal(run('setXiaolinEntry(noteId,{note:"尚未保存的新回答"})'),false);
    assert.equal(run('JSON.stringify(getXiaolinSnapshot())'),before);
    assert.equal(run('JSON.stringify(getStateSnapshot().xiaolin)'),before,'backups cannot report a failed shared-note patch as saved');
    assert.equal(store.get(key),stored);
    context.localStorage.setItem=write;
    assert.equal(run('setXiaolinEntry(noteId,{note:"尚未保存的新回答"})'),true);
    assert.equal(run('getXiaolinSnapshot().entries[noteId].note'),'尚未保存的新回答');
    assert.equal(run('getXiaolinSnapshot().entries[noteId].done'),true);
    assert.equal(run('getXiaolinSnapshot().entries[otherId].note'),'另一条记录');
    assert.equal(run('getXiaolinSnapshot().entries[otherId].starred'),true);
});

test('a rejected shared patch retains an existing reader draft for its normal debounced save',()=>{
    const {run,store,context}=setup(),key='java-notes-xiaolin-v1';
    run(`const draftId=xiaolinIndex.lessons[0].id;
        setXiaolinEntry(draftId,{done:false,note:'原笔记'});
        xiaolinState.entries[draftId].note='原阅读器正在输入的草稿';`);
    const write=context.localStorage.setItem;
    context.localStorage.setItem=(name,value)=>{if(name===key)throw Error('quota');write(name,value);};
    assert.equal(run('setXiaolinEntry(draftId,{done:true})'),false);
    assert.equal(run('getXiaolinSnapshot().entries[draftId].note'),'原阅读器正在输入的草稿');
    assert.equal(run('getXiaolinSnapshot().entries[draftId].done'),false);
    context.localStorage.setItem=write;
    assert.equal(run('persistXiaolin()'),true);
    assert.equal(JSON.parse(store.get(key)).entries[run('draftId')].note,'原阅读器正在输入的草稿');
    assert.equal(JSON.parse(store.get(key)).entries[run('draftId')].done,false);
});
test('concept handoff uses workspace navigation and restores the originating concept after a reader edit',()=>{
    const {run,store}=setup();
    run(`const linkedLesson=xiaolinIndex.lessons.find(s=>s.topicId==='collections');
        navigateWorkspace('mindmap');
        window.returnToMindMapLearning=id=>{window.restoredConcept=id;navigateWorkspace('mindmap');return true;};`);
    assert.equal(run(`openXiaolinFromMindMap(linkedLesson.id,{id:'hashmap',title:'HashMap'})`),true);
    assert.equal(run('currentWorkspacePage()'),'xiaolin');
    assert.equal(run('xiaolinUI.pendingJump'),run('linkedLesson.id'));
    run(`setXiaolinEntry(linkedLesson.id,{done:true,note:'读懂扩容后再看结构'});`);
    assert.equal(run('returnFromXiaolinToMindMap()'),true);
    assert.equal(run('currentWorkspacePage()'),'mindmap');
    assert.equal(run('window.restoredConcept'),'hashmap');
    const lesson=JSON.parse(store.get('java-notes-xiaolin-v1')).entries[run('linkedLesson.id')];
    assert.equal(lesson.done,true);
    assert.equal(lesson.note,'读懂扩容后再看结构');
    assert.equal(run('xiaolinUI.mindmapReturn'),null);
});
test('full backup round-trip preserves reading state and a legacy import retains it',()=>{
    const {run}=setup();
    run('setXiaolinEntry(xiaolinIndex.lessons[0].id,{note:"保存我的理解",done:true}); const exported=getStateSnapshot();');
    run('applyXiaolinSnapshot({version:1}); applyStateSnapshot(exported);');
    assert.equal(run('Object.values(getXiaolinSnapshot().entries)[0].note'),'保存我的理解');
    run('const old={...getStateSnapshot()};delete old.xiaolin;applyStateSnapshot(old)');
    assert.equal(run('Object.values(getXiaolinSnapshot().entries)[0].done'),true);
});
test('invalid reader field rejects the whole backup before any prior data changes',()=>{
    const {run,store}=setup();
    run('userNotes=[{id:"keep",question:"keep",answer:"keep"}]; const before=JSON.stringify(getStateSnapshot())');
    const saved=[...store];
    assert.throws(()=>run('applyStateSnapshot({...getStateSnapshot(),userNotes:[],xiaolin:{version:1,entries:{bad:{done:"wrong"}}}})'),/小林/);
    assert.equal(run('JSON.stringify(getStateSnapshot())'),run('before'));assert.deepEqual([...store],saved);
});
test('reader persistence failure does not replace other study records',()=>{
    const {run,context}=setup();
    run('userNotes=[{id:"keep",question:"keep",answer:"keep"}]; const before=JSON.stringify(getStateSnapshot())');
    const write=context.localStorage.setItem;
    context.localStorage.setItem=(k,v)=>{if(k==='java-notes-xiaolin-v1')throw Error('quota');write(k,v);};
    assert.throws(()=>run('applyStateSnapshot({...getStateSnapshot(),userNotes:[]})'),/quota/);
    assert.equal(run('JSON.stringify(getStateSnapshot())'),run('before'));
});
test('reader quota failure rolls back a real map import and its update timestamp',()=>{
    const {run,store,context}=setup();
    for(const file of ['mindmap-core.js','mindmap-module.js'])run(fs.readFileSync(path.join(root,file),'utf8'));
    run(`const originalMap=MindMapCore.createMap('原来的导图');
        applyMindMapSnapshot({version:1,activeMapId:originalMap.id,maps:[originalMap]});
        setXiaolinEntry(xiaolinIndex.lessons[0].id,{note:'原来的笔记'});
        const beforeImport=JSON.stringify(getStateSnapshot());
        const incomingMap=MindMapCore.createMap('不应写入的导图');
        const incoming={...getStateSnapshot(),userNotes:[],mindmaps:{version:1,activeMapId:incomingMap.id,maps:[incomingMap]}};`);
    const previous=[...store],write=context.localStorage.setItem;
    context.localStorage.setItem=(k,v)=>{if(k==='java-notes-xiaolin-v1')throw Error('quota');write(k,v);};
    assert.throws(()=>run('applyStateSnapshot(incoming)'),/quota/);
    assert.equal(run('JSON.stringify(getStateSnapshot())'),run('beforeImport'));
    assert.deepEqual([...store],previous);
});
test('explicitly malformed entries reject import and preserve existing reading notes',()=>{
    const {run,store}=setup();run('setXiaolinEntry(xiaolinIndex.lessons[0].id,{note:"不要清空"})');
    const before=[...store];
    for(const entries of [null,false,0,'']){
        assert.throws(()=>run(`applyStateSnapshot({...getStateSnapshot(),xiaolin:{version:1,entries:${JSON.stringify(entries)}}})`),/小林/);
        assert.deepEqual([...store],before);
    }
});
