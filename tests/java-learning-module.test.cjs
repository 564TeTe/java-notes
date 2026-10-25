const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {load}=require('cheerio');
const catalog=require('../data/xiaolin/catalog.js');
const mapping=require('../data/java-learning-xiaolin.js');
const routes=require('../data/java-learning-routes.js');
const SNAPSHOT_KEY='java-notes-mindmaps-v1', VIEW_KEY='java-notes-learning-view-v1';
const root=path.join(__dirname,'..');
const sectionIds=new Set(catalog.topics.flatMap(topic=>topic.sections.map(section=>section.id)));
const HASH_SECTION=mapping['collections-hashmap'][0];
const JAVA_SECTION=catalog.topics.find(topic=>topic.id==='java').sections[0].id;
const clone=value=>JSON.parse(JSON.stringify(value));

function setup(saved,{phone=false,storage=[],questions=[],readingState={entries:{}},loader,courses}={}) {
    const store=new Map(storage),reads=clone(readingState);
    if(saved)store.set(SNAPSHOT_KEY,JSON.stringify(saved));
    const handlers={},captured={},lifecycle={},timers=new Map(),toasts=[],practices=[],scrolls=[],loads=[],readingWrites=[],handoffs=[],returnPages=[];
    let nextTimer=0,storageFails=false,readingFails=false,renderCount=0;
    const element={scrollTop:0,querySelectorAll:()=>[],get outerHTML(){return this.markup||'';},set outerHTML(value){this.markup=value;renderCount++;}};
    const context=vm.createContext({console,URL,crypto:require('node:crypto').webcrypto,
        setTimeout:fn=>{timers.set(++nextTimer,fn);return nextTimer;},clearTimeout:id=>timers.delete(id),
        localStorage:{getItem:key=>store.get(key)??null,setItem:(key,value)=>{if(storageFails)throw Error('QuotaExceededError');store.set(key,String(value));},removeItem:key=>store.delete(key)},
        document:{addEventListener:(name,fn,options)=>{(options?captured:handlers)[name]=fn;},getElementById:()=>null,
            querySelector:selector=>['.mindmap-view','.al-learning'].includes(selector)?element:null,querySelectorAll:()=>[]},
        getBankStudyRecords:()=>questions,mastery:{},memorizedIds:new Set(),markLocalUpdated(){},toast:message=>toasts.push(message),
        addEventListener:(name,fn)=>{lifecycle[name]=fn;},matchMedia:()=>({matches:phone}),
        requestAnimationFrame:fn=>fn(),scrollTo:value=>scrolls.push(value),
        openStudyCategory:category=>{practices.push(category);return questions.some(question=>question.category===category);},
        getXiaolinSnapshot:()=>clone(reads),setXiaolinEntry:(id,patch)=>{
            if(readingFails||storageFails||!sectionIds.has(id))return false;
            reads.entries[id]={...(reads.entries[id]||{}),...clone(patch)};readingWrites.push({id,patch:clone(patch)});return true;
        },
        loadXiaolinTopic:id=>{loads.push(id);return loader?loader(id):Promise.resolve(clone(require(path.join(root,'data/xiaolin',id+'.json'))));},
        openXiaolinFromMindMap:(id,concept)=>{handoffs.push({id,concept:clone(concept)});return true;},
        navigateWorkspace:page=>returnPages.push(page)});
    context.window=context;
    const run=code=>vm.runInContext(code,context);
    if(courses)run('JAVA_COURSE_PARTS='+JSON.stringify([courses]));
    for(const file of ['mindmap-core.js','data/java-learning-language.js','data/java-learning-runtime.js','data/xiaolin/catalog.js',
        'data/java-learning-xiaolin.js','data/java-learning-routes.js','java-learning-core.js','java-learning-courses.js','java-learning-atlas.js','java-learning-view.js','mindmap-module.js'])run(fs.readFileSync(path.join(root,file),'utf8'));
    const click=(action,dataset={})=>{
        const control={dataset:{mmAction:action,...dataset}};
        handlers.click({target:{closest:selector=>selector==='[data-mm-action]'?control:selector==='.mindmap-view'?element:null}});
    };
    const input=(value,id='mindmapSearch',isComposing=false)=>{
        const target={id,value};handlers.input({target,isComposing});return target;
    };
    return {store,run,click,input,handlers,captured,lifecycle,context,toasts,practices,scrolls,loads,reads,readingWrites,handoffs,returnPages,element,
        renderCount:()=>renderCount,failSaves:value=>{storageFails=value;},failReadings:value=>{readingFails=value;},
        flushTimers:()=>{const pending=[...timers.values()];timers.clear();pending.forEach(fn=>fn());}};
}
const html=app=>app.run('renderMindMap()');
const savedEntry=(app,id)=>JSON.parse(app.store.get(SNAPSHOT_KEY)).learning.entries[id];
const settle=async()=>{for(let i=0;i<4;i++)await new Promise(resolve=>setImmediate(resolve));};
const courseFixture=()=>({id:'course-module-map',topicId:'collections',chapter:'键与相等性',title:'键如何匹配',intro:'比较两个键。',explanation:['哈希决定候选位置。','相等性决定是否匹配。'],flow:[{title:'定位',text:'先算哈希。'},{title:'比较',text:'再比较键。'}],example:{language:'java',code:'map.get(key);',output:'对应的值',explanation:'调用片段。'},boundaries:['键的相等性不可随意变化。'],answer:'先定位再匹配。',followUps:[{question:'相同哈希一定相等吗？',answer:'不一定。'}],checks:[{question:'改变键有什么影响？',answer:'可能定位不到原条目。'}],prerequisites:[],related:[],conceptIds:['collections-hashmap'],readingIds:[HASH_SECTION],sourceChapters:['Map'],sources:[{title:'HashMap',url:'https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html'}]});
function openConcept(app,id='collections-hashmap'){html(app);app.click('lesson-jump',{id});}
function openSource(app,id=HASH_SECTION){html(app);app.click('lesson-jump',{id});}
function deferred(){let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no;});return {promise,resolve,reject};}
function topicContent(id,sectionId,text){return {id,chapters:[{sections:[{id:sectionId,html:`<p>${text}</p>`}]}]};}
function mockDirectory(app,ids,location='topic'){
    const directory={children:[],matches:selector=>selector==='.al-directory'};
    directory.children=ids.map((id,i)=>({id:'al-chapter-'+id,dataset:{chapterId:id,detailKey:location+'-'+id},open:i===0,isConnected:true,parentElement:directory,
        matches:selector=>selector==='details.al-chapter',closest:selector=>selector==='.al-learning'?app.element:null,
        scrollIntoView(options){this.scrollOptions=options;},querySelector:()=>({focus(options){directory.focusOptions=options;}})}));
    return directory;
}

for(const phone of [false,true])test(`${phone?'phone':'desktop'} opens all 18 knowledge topics with the five-stage graph and learning routes`,()=>{
    const app=setup(undefined,{phone}),markup=html(app);
    assert.match(markup,/data-screen="home"/);assert.match(markup,/>Java 学习<\/h1>/);
    assert.equal((markup.match(/data-mm-action="lesson-topic"/g)||[]).length,18);
    assert.equal((markup.match(/class="al-stage"/g)||[]).length,5);assert.match(markup,/完整知识导图/);
    assert.doesNotMatch(markup,/题库导航|我的导图|先掌握这些|mindmapViewport/);
    app.click('home-mode',{mode:'routes'});
    for(const route of routes){assert.ok(html(app).includes(route.title));for(const step of route.steps)assert.ok(html(app).includes(`data-route="${route.id}" data-id="${step.id}"`));}
});

test('each full topic directory includes every source section and all supplemental concepts',()=>{
    const app=setup();html(app);
    const index=app.run('JavaLearningAtlas.createIndex(JavaLearningCore.createIndex(JAVA_LEARNING_PARTS),XIAOLIN_CATALOG,JAVA_LEARNING_XIAOLIN)');
    for(const topic of index.topics){
        app.click('lesson-topic',{id:topic.id});const markup=html(app);assert.match(markup,/data-screen="topic"/);
        for(const id of topic.lessonIds)assert.ok(markup.includes(`data-mm-action="lesson-jump" data-id="${id}"`),id);
        assert.equal((markup.match(/data-mm-action="lesson-jump"/g)||[]).length,topic.lessonIds.length);
    }
    const reference=catalog.topics.flatMap(topic=>topic.sections).find(section=>section.kind==='reference');
    app.click('lesson-jump',{id:reference.id});assert.match(html(app),/data-screen="lesson"/);
});

test('legacy personal maps and hidden concept notes survive status changes and backup round trips',()=>{
    const core=require('../mindmap-core.js'),map=core.createMap('我的旧导图');map.id='java-learning:custom';
    const app=setup({version:1,activeMapId:map.id,maps:[map],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'learning',note:'先理解原理，再练习解释'}}}});
    assert.doesNotMatch(html(app),/我的旧导图|我的导图/);openConcept(app);app.click('lesson-state',{status:'mastered'});app.click('home');
    const stored=JSON.parse(app.run('JSON.stringify(getMindMapSnapshot())'));
    assert.equal(stored.activeMapId,map.id);assert.deepEqual(stored.maps,[map]);assert.equal(stored.learning.entries['collections-hashmap'].note,'先理解原理，再练习解释');
    const restored=setup(stored);openConcept(restored);assert.equal(restored.run('getMindMapSnapshot().learning.entries["collections-hashmap"].note'),'先理解原理，再练习解释');
    assert.doesNotMatch(html(restored),/先理解原理，再练习解释|mindmapLearningNote|<textarea/);
});

test('unknown historical entries and original concept mastery survive backup imports and restarts',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'removed-topic',entries:{'removed-concept':{status:'learning',note:'历史笔记'}}}});
    openConcept(app);app.click('lesson-state',{status:'mastered'});app.run('applyMindMapSnapshot({version:1,activeMapId:"knowledge",maps:[]})');
    const restored=setup(JSON.parse(app.run('JSON.stringify(getMindMapSnapshot())')));
    assert.equal(restored.run('getMindMapSnapshot().learning.entries["removed-concept"].note'),'历史笔记');
    assert.equal(restored.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'mastered');
});

test('a failed companion import rolls the learning snapshot and stored bytes back',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'learning',note:'导入前的笔记'}}}});openConcept(app);const previous=app.store.get(SNAPSHOT_KEY);
    assert.throws(()=>app.run('applyMindMapSnapshot({version:1,activeMapId:"java-learning",maps:[],learning:{version:1,topicId:"all",entries:{}}},()=>{throw Error("companion rejected");})'),/companion rejected/);
    assert.equal(app.store.get(SNAPSHOT_KEY),previous);assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].note'),'导入前的笔记');
});

test('concept mastery stays independent of source reading progress and question ratings',()=>{
    const app=setup(undefined,{questions:[{id:'hash-question',category:'Java 集合'}]});
    app.run('mastery["hash-question"]={level:"hard"};memorizedIds.add("hash-question")');openConcept(app);app.click('lesson-state',{status:'mastered'});
    assert.equal(savedEntry(app,'collections-hashmap').status,'mastered');assert.deepEqual(app.readingWrites,[]);
    assert.equal(app.run('mastery["hash-question"].level'),'hard');assert.equal(app.run('memorizedIds.size'),1);
});



test('failed concept status writes preserve stored notes and can be retried safely',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'learning',note:'之前保存的回答'},'collections-arraylist':{status:'learning',note:'其他笔记'}}}});
    openConcept(app);const previous=app.store.get(SNAPSHOT_KEY);app.failSaves(true);app.click('lesson-state',{status:'mastered'});
    assert.equal(app.store.get(SNAPSHOT_KEY),previous);assert.equal(app.run('getMindMapSnapshot().learning.entries["collections-hashmap"].status'),'learning');
    assert.ok(app.toasts.some(message=>message.includes('本地保存失败')));app.failSaves(false);app.click('lesson-state',{status:'mastered'});
    assert.equal(savedEntry(app,'collections-hashmap').status,'mastered');assert.equal(savedEntry(app,'collections-hashmap').note,'之前保存的回答');assert.equal(savedEntry(app,'collections-arraylist').note,'其他笔记');
});

test('source lessons load local HTML inline, cache the topic and do not navigate away',async()=>{
    const app=setup();openSource(app);assert.match(html(app),/正在加载/);await settle();
    assert.doesNotMatch(html(app),/正在加载|内容未能加载/);assert.match(html(app),/class="al-content"/);assert.deepEqual(app.loads,['collections']);assert.equal(app.handoffs.length,0);
    app.click('lesson-jump',{id:mapping['collections-hashmap'][1]});await settle();assert.deepEqual(app.loads,['collections']);assert.doesNotMatch(html(app),/正在加载/);
});

test('a slow old topic response cannot replace the currently selected lesson',async()=>{
    const slow=deferred(),fast=deferred(),app=setup(undefined,{loader:id=>id==='collections'?slow.promise:fast.promise});
    openSource(app);await settle();app.click('lesson-jump',{id:JAVA_SECTION});await settle();fast.resolve(topicContent('java',JAVA_SECTION,'当前 Java 讲解'));await settle();
    assert.match(html(app),/当前 Java 讲解/);const renders=app.renderCount();slow.resolve(topicContent('collections',HASH_SECTION,'较慢的集合讲解'));await settle();
    assert.match(html(app),/当前 Java 讲解/);assert.doesNotMatch(html(app),/较慢的集合讲解/);assert.equal(app.renderCount(),renders);
    app.click('lesson-jump',{id:HASH_SECTION});assert.match(html(app),/较慢的集合讲解/);
});

test('a late response never reopens a reader after returning to the map',async()=>{
    const pending=deferred(),app=setup(undefined,{loader:()=>pending.promise});openSource(app);await settle();app.click('home');const renders=app.renderCount();
    pending.resolve(topicContent('collections',HASH_SECTION,'已缓存内容'));await settle();assert.match(html(app),/data-screen="home"/);assert.equal(app.renderCount(),renders);
});

test('mismatched source content is retryable and never renders foreign HTML',async()=>{
    let attempts=0;const app=setup(undefined,{loader:()=>++attempts===1?Promise.resolve(topicContent('java',HASH_SECTION,'错误专题')):Promise.resolve(topicContent('collections',HASH_SECTION,'重试后的讲解'))});
    openSource(app);await settle();assert.match(html(app),/内容未能加载/);assert.doesNotMatch(html(app),/错误专题/);
    app.click('retry');await settle();assert.match(html(app),/重试后的讲解/);assert.equal(attempts,2);
});

test('a later successful topic load clears a previous section error when its content is now cached',async()=>{
    let attempts=0;const app=setup(undefined,{loader:id=>++attempts===1?Promise.reject(Error('offline')):Promise.resolve(clone(require(path.join(root,'data/xiaolin',id+'.json'))))});
    openSource(app);await settle();assert.match(html(app),/内容未能加载/);
    app.click('lesson-jump',{id:mapping['collections-hashmap'][1]});await settle();assert.doesNotMatch(html(app),/内容未能加载/);
    app.click('lesson-jump',{id:HASH_SECTION});assert.doesNotMatch(html(app),/内容未能加载/);assert.equal(attempts,2);
});

test('an older failing request cannot hide content populated by a newer successful topic request',async()=>{
    const old=deferred(),newer=deferred();let attempts=0;const app=setup(undefined,{loader:()=>++attempts===1?old.promise:newer.promise});
    openSource(app);await settle();app.click('lesson-jump',{id:mapping['collections-hashmap'][1]});await settle();
    newer.resolve(clone(require('../data/xiaolin/collections.json')));await settle();old.reject(Error('older request failed'));await settle();
    app.click('lesson-jump',{id:HASH_SECTION});assert.equal(html(app).includes('内容未能加载'),false);assert.equal(attempts,2);
});

test('source read status shares the Xiaolin record while leaving its original notes untouched',async()=>{
    const app=setup(undefined,{readingState:{entries:{[HASH_SECTION]:{done:true,note:'小林里原来的理解',starred:true}}}});openSource(app);await settle();
    assert.doesNotMatch(html(app),/小林里原来的理解|mindmapLearningNote|<textarea/);assert.match(html(app),/✓ 已读懂/);
    app.click('reading-state');assert.deepEqual(app.reads.entries[HASH_SECTION],{done:false,note:'小林里原来的理解',starred:true});
    assert.deepEqual(app.readingWrites,[{id:HASH_SECTION,patch:{done:false}}]);
    assert.equal(app.run('getMindMapSnapshot().learning.entries['+JSON.stringify(HASH_SECTION)+']'),undefined);
    app.reads.entries[HASH_SECTION]={done:true,note:'原小林模块重新修改'};assert.match(html(app),/✓ 已读懂/);assert.doesNotMatch(html(app),/原小林模块重新修改/);
});



test('source status failure leaves the old shared read status visible',()=>{
    const app=setup();openSource(app);app.failReadings(true);app.click('reading-state');assert.equal(app.reads.entries[HASH_SECTION],undefined);
    assert.ok(app.toasts.some(message=>message.includes('阅读状态保存失败')));assert.match(html(app),/>标记读懂<\/button>/);
});

test('learning and recall panels have no editor and never change existing reading notes',async()=>{
    const app=setup(undefined,{readingState:{entries:{[HASH_SECTION]:{done:false,note:'保留原笔记'}}}});openSource(app);await settle();
    assert.match(html(app),/class="al-content"/);assert.doesNotMatch(html(app),/mindmapLearningNote|<textarea/);
    app.click('panel',{panel:'recall'});assert.match(html(app),/data-panel="recall"/);assert.doesNotMatch(html(app),/class="al-content"|正在加载|mindmapLearningNote|<textarea/);
    app.click('panel',{panel:'read'});assert.match(html(app),/class="al-content"/);assert.equal(app.reads.entries[HASH_SECTION].note,'保留原笔记');assert.deepEqual(app.readingWrites,[]);
});

test('practice uses topic categories and unsupported topics hide its action',()=>{
    const app=setup(undefined,{questions:[{id:'hash-question',category:'Java 集合'},{id:'jdbc-question',category:'MySQL'}]});openConcept(app);
    assert.match(html(app),/data-mm-action="practice"/);app.click('practice');app.click('lesson-topic',{id:'xl-topic:mysql'});app.click('practice');assert.deepEqual(app.practices,['Java 集合','MySQL']);
    app.click('lesson-topic',{id:'concept-topic:engineering'});assert.doesNotMatch(html(app),/data-mm-action="practice"/);app.click('practice');assert.equal(app.practices.length,2);
    const empty=setup();openConcept(empty);assert.doesNotMatch(html(empty),/data-mm-action="practice"/);
});

test('external Xiaolin bridge retains exact references and restores focused context',()=>{
    const app=setup();openConcept(app);app.click('focus');app.click('read-xiaolin',{id:JAVA_SECTION});assert.equal(app.handoffs.length,0);
    app.click('read-xiaolin',{id:HASH_SECTION});assert.equal(app.handoffs.length,1);assert.equal(app.handoffs[0].id,HASH_SECTION);
    assert.equal(app.handoffs[0].concept.id,'collections-hashmap');assert.equal(app.handoffs[0].concept.focused,true);
    assert.equal(app.run('returnToMindMapLearning("language")'),false);assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
    assert.equal(app.returnPages.at(-1),'mindmap');assert.match(html(app),/mm-focus/);assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),false);
});

test('routes cross topics and unrelated lesson selection restores topic sequencing',()=>{
    const app=setup(),route=routes[0],cross=route.steps.find(step=>step.id.startsWith('web-spring'));html(app);app.click('route-step',{route:route.id,id:cross.id});
    assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'xl-topic:spring');assert.match(html(app),new RegExp(`data-mm-action="route-step"[^>]*data-route="${route.id}"`));
    app.click('lesson-jump',{id:'collections-hashmap'});assert.doesNotMatch(html(app),/data-mm-action="route-step"/);assert.match(html(app),/data-mm-action="lesson-jump"/);
});

test('selecting a directory lesson exits route sequencing even when that lesson is also a route step',()=>{
    const app=setup(),route=routes[0];html(app);app.click('route-step',{route:route.id,id:'language-references'});
    app.click('lesson-jump',{id:'oop-classes'});
    assert.doesNotMatch(html(app),/data-mm-action="route-step"/);
    assert.match(html(app),/data-mm-action="lesson-jump"[^>]*data-id="oop-encapsulation"/);
});

test('search rerenders preserve search input focus and selection',()=>{
    const app=setup();html(app);
    const active={id:'mindmapSearch',tagName:'INPUT',selectionStart:2,selectionEnd:5,selectionDirection:'backward',scrollTop:14};
    const restored={focus(options){this.focusOptions=options;},setSelectionRange(...args){this.selection=args;}};
    app.context.document.activeElement=active;app.element.contains=value=>value===active;app.context.document.getElementById=id=>id===active.id?restored:null;
    app.handlers.input({target:{...active,value:'HashMap'},isComposing:false});
    assert.deepEqual(restored.selection.slice(0,2),[2,5]);assert.equal(restored.focusOptions.preventScroll,true);assert.equal(restored.scrollTop,14);assert.match(html(app),/al-search-results/);
});

test('Chinese search composition only filters after composition ends',()=>{
    const app=setup();html(app);app.context.Event=class {constructor(type){this.type=type;}};
    const target={id:'mindmapSearch',value:'并发',dispatchEvent(){app.handlers.input({target:this,isComposing:false});}};
    app.handlers.input({target,isComposing:true});assert.doesNotMatch(html(app),/al-search-results/);
    app.handlers.compositionend({target});assert.match(html(app),/al-search-results/);assert.match(html(app),/value="并发"/);
});

test('focus applies only to lessons and restores the reading scroll position',()=>{
    const app=setup();html(app);app.click('focus');assert.doesNotMatch(html(app),/mm-focus/);openConcept(app);app.run('scrollY=480');app.click('focus');
    assert.match(html(app),/mm-focus/);app.click('focus-exit');assert.doesNotMatch(html(app),/mm-focus/);assert.equal(app.scrolls.at(-1).top,480);
});

for(const id of ['collections-hashmap',HASH_SECTION])test(`continue restores stable lesson ${id} without changing mastery`,()=>{
    const app=setup();html(app);app.click('lesson-jump',{id});assert.deepEqual(JSON.parse(app.store.get(VIEW_KEY)),{lastId:id});assert.deepEqual(JSON.parse(app.store.get(SNAPSHOT_KEY)).learning.entries,{});
    const restart=setup(undefined,{storage:[...app.store]});assert.match(html(restart),/al-continue/);assert.ok(html(restart).includes(`data-id="${id}"`));restart.click('lesson-jump',{id});
    assert.match(html(restart),/data-screen="lesson"/);assert.equal(restart.run('getMindMapSnapshot().learning.topicId'),'xl-topic:collections');
});

test('authored courses render offline and persist independent progress without touching existing records',async()=>{
    const course=courseFixture(),app=setup({version:1,activeMapId:'knowledge',maps:[],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'mastered',note:'保留旧笔记'}}}}, {courses:[course]});
    html(app);app.click('lesson-jump',{id:course.id});await settle();
    assert.match(html(app),/键如何匹配/);assert.match(html(app),/哈希决定候选位置/);assert.deepEqual(app.loads,[]);
    app.click('lesson-state',{status:'learning'});assert.equal(savedEntry(app,course.id).status,'learning');
    assert.equal(load(app.element.outerHTML)('.al-sidebar .is-current .is-learning').length,1,'visible directory state updates immediately');
    assert.deepEqual(savedEntry(app,'collections-hashmap'),{status:'mastered',note:'保留旧笔记'});
    app.click('panel',{panel:'recall'});assert.match(html(app),/改变键有什么影响/);assert.doesNotMatch(html(app),/哈希决定候选位置/);
    const saved=JSON.parse(app.store.get(SNAPSHOT_KEY)),restored=setup(saved,{courses:[course]});html(restored);restored.click('lesson-jump',{id:course.id});
    assert.equal(savedEntry(restored,course.id).status,'learning');
});

test('course source reference round trip restores focus and the same course and rejects unrelated references',()=>{
    const course=courseFixture(),app=setup(undefined,{courses:[course]});html(app);app.click('lesson-jump',{id:course.id});app.click('focus');
    app.click('read-xiaolin',{id:JAVA_SECTION});assert.equal(app.handoffs.length,0);
    app.click('read-xiaolin',{id:HASH_SECTION});assert.equal(app.handoffs.length,1);assert.equal(app.handoffs[0].concept.id,course.id);
    assert.equal(app.run('returnToMindMapLearning("'+course.id+'")'),true);
    assert.match(html(app),/mm-focus/);assert.match(html(app),/键如何匹配/);
});

test('authored learning routes take precedence and keep course sequence across navigation',()=>{
    const first=courseFixture(),second={...courseFixture(),id:'course-module-next',title:'扩容后的定位'},app=setup(undefined,{courses:[first,second]});
    app.run('JavaCourseRoutes='+JSON.stringify([{id:'course-route',title:'键的执行过程',steps:[{id:first.id,label:first.title},{id:second.id,label:second.title}]}]));
    html(app);app.click('home-mode',{mode:'routes'});assert.match(html(app),/键的执行过程/);
    app.click('route-step',{route:'course-route',id:first.id});assert.match(html(app),/data-route="course-route"/);
    app.click('route-step',{route:'course-route',id:second.id});assert.match(html(app),/扩容后的定位/);
    assert.equal(load(html(app))('.al-lesson-nav [data-id="'+first.id+'"]').attr('data-mm-action'),'route-step');
});

test('legacy topic links remain usable and missing lesson links return safely home',()=>{
    const app=setup(undefined,{storage:[[VIEW_KEY,JSON.stringify({lastId:'removed-concept'})]]});assert.doesNotMatch(html(app),/class="al-continue"/);
    app.click('lesson-jump',{id:'collections'});assert.match(html(app),/data-screen="topic"/);assert.equal(app.run('getMindMapSnapshot().learning.topicId'),'xl-topic:collections');
    app.click('lesson-jump',{id:'removed-concept'});assert.match(html(app),/data-screen="home"/);
});

test('obsolete editor events cannot write concept or Xiaolin notes and add no unload blocker',()=>{
    const app=setup({version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'collections',entries:{'collections-hashmap':{status:'learning',note:'原概念笔记'}}}}, {readingState:{entries:{[HASH_SECTION]:{note:'原小林笔记'}}}});
    openConcept(app);const before=app.store.get(SNAPSHOT_KEY);app.input('意外的旧编辑事件','mindmapLearningNote');app.flushTimers();assert.equal(app.store.get(SNAPSHOT_KEY),before);
    openSource(app);app.input('意外的小林旧编辑事件','mindmapLearningNote');app.flushTimers();assert.equal(app.reads.entries[HASH_SECTION].note,'原小林笔记');assert.deepEqual(app.readingWrites,[]);
    assert.equal(app.lifecycle.beforeunload,undefined);assert.equal(app.lifecycle.pagehide,undefined);assert.equal(app.captured.click,undefined);
});

test('corrupt legacy storage stays untouched and prevents accidental replacement during navigation',()=>{
    const raw='{invalid-json',app=setup(undefined,{storage:[[SNAPSHOT_KEY,raw]]});
    assert.match(html(app),/学习记录读取失败/);app.click('lesson-jump',{id:'collections-hashmap'});
    assert.equal(app.store.get(SNAPSHOT_KEY),raw);assert.throws(()=>app.run('getMindMapSnapshot()'),/学习记录读取失败/);
});

test('chapter toggles close only their own directory siblings and ignore closed or detached events',()=>{
    const app=setup();html(app);app.click('lesson-topic',{id:'xl-topic:collections'});
    const ids=catalog.topics.find(topic=>topic.id==='collections').chapters.slice(0,3).map(chapter=>chapter.id);
    const directory=mockDirectory(app,ids),other=mockDirectory(app,ids,'mobile');
    const [first,second,third]=directory.children;second.open=true;app.captured.toggle({target:second});
    assert.deepEqual(directory.children.map(chapter=>chapter.open),[false,true,false]);assert.equal(other.children[0].open,true);
    let $=load(html(app));assert.equal($('.al-directory > details[open]').attr('data-chapter-id'),ids[1]);
    first.open=false;app.captured.toggle({target:first});assert.equal(second.open,true);
    third.open=true;third.isConnected=false;app.captured.toggle({target:third});assert.equal(second.open,true);
    $=load(html(app));assert.equal($('.al-directory > details[open]').attr('data-chapter-id'),ids[1]);
});

test('chapter quick jumps open the target and close siblings even without native accordion support',()=>{
    const app=setup();html(app);app.click('lesson-topic',{id:'xl-topic:java'});
    const ids=catalog.topics.find(topic=>topic.id==='java').chapters.slice(0,3).map(chapter=>chapter.id),directory=mockDirectory(app,ids);
    app.context.document.getElementById=id=>directory.children.find(chapter=>chapter.id===id)||null;
    app.click('jump-chapter',{id:ids[2]});assert.deepEqual(directory.children.map(chapter=>chapter.open),[false,false,true]);
    assert.equal(directory.children[2].scrollOptions.block,'start');assert.equal(directory.focusOptions.preventScroll,true);
    assert.equal(load(html(app))('.al-directory > details[open]').attr('data-chapter-id'),ids[2]);
});

test('same-page rerenders restore separate directory groups after closing their initial open chapters',()=>{
    const app=setup();openConcept(app);
    const ids=catalog.topics.find(topic=>topic.id==='collections').chapters.slice(0,3).map(chapter=>chapter.id);
    const sidebar=mockDirectory(app,ids,'sidebar'),mobile=mockDirectory(app,ids,'mobile'),details=[...sidebar.children,...mobile.children],writes=[];
    sidebar.children[0].open=false;sidebar.children[1].open=true;mobile.children[0].open=false;mobile.children[2].open=true;
    for(const detail of details){let open=detail.open;Object.defineProperty(detail,'open',{get:()=>open,set:value=>{open=value;writes.push([detail.dataset.detailKey,value]);}});}
    app.context.document.querySelectorAll=selector=>selector==='.al-learning details'?details:[];
    const descriptor=Object.getOwnPropertyDescriptor(app.element,'outerHTML');
    Object.defineProperty(app.element,'outerHTML',{get:descriptor.get,set(value){descriptor.set.call(this,value);for(const directory of [sidebar,mobile])directory.children.forEach((detail,i)=>{detail.open=i===0;});writes.length=0;}});
    app.click('panel',{panel:'recall'});
    assert.deepEqual(sidebar.children.map(chapter=>chapter.open),[false,true,false]);assert.deepEqual(mobile.children.map(chapter=>chapter.open),[false,false,true]);
    assert.deepEqual(writes.slice(0,details.length).map(([,open])=>open),Array(details.length).fill(false));
});

test('returning from a lesson opens its chapter while changing topics starts with the first chapter',()=>{
    const app=setup();openSource(app);
    const collections=catalog.topics.find(topic=>topic.id==='collections'),chapterId=collections.sections.find(section=>section.id===HASH_SECTION).chapterId;
    app.click('lesson-topic',{id:'xl-topic:collections'});let $=load(html(app));
    assert.equal($('.al-directory > details[open]').length,1);assert.equal($('.al-directory > details[open]').attr('data-chapter-id'),chapterId);
    app.click('lesson-topic',{id:'xl-topic:java'});$=load(html(app));
    assert.equal($('.al-directory > details[open]').length,1);assert.equal($('.al-directory > details[open]').attr('data-chapter-id'),catalog.topics.find(topic=>topic.id==='java').chapters[0].id);
});

test('the Xiaolin return bridge restores expanded chapters independently in each directory',()=>{
    const app=setup();openConcept(app);const ids=catalog.topics.find(topic=>topic.id==='collections').chapters.slice(0,2).map(chapter=>chapter.id);
    const sidebar=mockDirectory(app,ids,'sidebar'),mobile=mockDirectory(app,ids,'mobile'),details=[...sidebar.children,...mobile.children];
    sidebar.children[0].open=false;sidebar.children[1].open=true;app.context.document.querySelectorAll=selector=>selector==='.al-learning details'?details:[];
    app.click('read-xiaolin',{id:HASH_SECTION});sidebar.children[0].open=true;sidebar.children[1].open=false;mobile.children[0].open=false;
    assert.equal(app.run('returnToMindMapLearning("collections-hashmap")'),true);
    assert.deepEqual(sidebar.children.map(chapter=>chapter.open),[false,true]);assert.deepEqual(mobile.children.map(chapter=>chapter.open),[true,false]);
});

test('Ctrl K leaves a focused lesson for its chapter directory and focuses search',()=>{
    const app=setup();openConcept(app);app.click('focus');let focused=false,prevented=false,stopped=false;
    app.context.document.getElementById=id=>id==='mindmapSearch'?{focus(){focused=true;}}:null;
    app.captured.keydown({key:'k',ctrlKey:true,preventDefault(){prevented=true;},stopImmediatePropagation(){stopped=true;}});
    assert.match(html(app),/data-screen="topic"/);assert.doesNotMatch(html(app),/mm-focus/);assert.equal(focused,true);assert.equal(prevented,true);assert.equal(stopped,true);
});
