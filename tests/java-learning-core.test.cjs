const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const MindMapCore = require('../mindmap-core.js');
const filename = path.join(__dirname, '..', 'java-learning-core.js');
const core = fs.existsSync(filename) ? require(filename) : {};
function check(api, name, fn) { test(name, () => { assert.equal(typeof core[api], 'function', api+' must be exported'); fn(); }); }
function node(id, parentId = 'java-root', patch = {}) {
    return { id, parentId, title: id, summary:'一句话理解 '+id, explanation:'详细解释 '+id, example:'示例 '+id, pitfall:'注意 '+id,
        prerequisites:[], related:[], terms:[id], sources:[{title:'Java 官方文档',url:'https://dev.java/learn/'}], ...patch };
}
function parts() {
    return [[node('language'),node('language.types','language',{related:['oop']})],
        [node('oop','java-root',{prerequisites:['language.types']}),node('oop.objects','oop',{terms:['对象','Object']})]];
}

check('createIndex', 'the learning index combines content parts with an introductory root and topic nodes', () => {
    const input=parts(), index=core.createIndex(input);
    assert.equal(index.nodes.length,5);
    assert.ok(index.byId instanceof Map);
    assert.equal(index.byId.size,5);
    assert.equal(index.byId.get('java-root').parentId,null);
    assert.ok(index.byId.get('java-root').summary);
    assert.ok(index.byId.get('java-root').explanation);
    assert.deepEqual(index.topics.map(n=>n.id),['language','oop']);
    assert.equal(index.byId.get('language.types'),index.nodes.find(n=>n.id==='language.types'));
    input[0][0].title='changed'; input[0][0].sources[0].title='changed';
    assert.equal(index.byId.get('language').title,'language');
    assert.equal(index.byId.get('language').sources[0].title,'Java 官方文档');
    assert.equal(core.createIndex([]).nodes.length,1);
});

check('createIndex', 'lesson validation rejects duplicate roots, orphan parents, cycles and dangling references', () => {
    for(const input of [
        [[node('java-root')]], [[node('language'),node('language')]], [[node('a','missing')]],
        [[node('a','b'),node('b','a')]], [[node('a','java-root',{related:['missing']})]],
        [[node('a','java-root',{prerequisites:['missing']})]], [[node('a',null)]]
    ]) assert.throws(()=>core.createIndex(input));
});

check('createIndex', 'lesson fields and source links are checked and unsafe protocols never reach the UI', () => {
    for(const patch of [{summary:1},{explanation:[]},{terms:'Java'},{related:[1]},{sources:[{title:'bad',url:'javascript:alert(1)'}]},
        {sources:[{title:'bad',url:'http://dev.java/'}]},{sources:[{title:'bad',url:'https://user:pass@dev.java/'}]},
        {sources:[{title:'bad',url:'not a URL'}]}]) assert.throws(()=>core.createIndex([[node('a','java-root',patch)]]));
    assert.throws(()=>core.createIndex({}));
    assert.throws(()=>core.createIndex([Array(1)]));
    const input=node('a'); let read=false;
    Object.defineProperty(input,'title',{get(){read=true;return 'bad';}});
    assert.throws(()=>core.createIndex([[input]])); assert.equal(read,false);
});

check('buildMap', 'the overview creates compatible concept nodes and retains lesson content when copied', () => {
    const index=core.createIndex(parts());
    const graph=core.buildMap(index,{entries:{'language.types':{status:'mastered',note:'个人笔记'}}});
    assert.equal(graph.id,'java-learning:java-root'); assert.equal(graph.rootId,'java-root');
    assert.equal(graph.nodes.length,5);
    assert.ok(graph.nodes.every(n=>n.questionId===null));
    assert.equal(graph.nodes.find(n=>n.id==='java-root').collapsed,false);
    assert.equal(graph.nodes.find(n=>n.id==='language').collapsed,true);
    const lesson=graph.nodes.find(n=>n.id==='language.types');
    assert.equal(lesson.status,'mastered');
    for(const key of ['summary','explanation','example','pitfall']) assert.ok(lesson.note.includes(index.byId.get(lesson.id)[key]));
    const copied=MindMapCore.cloneBranch(graph,'language','语言学习副本');
    assert.ok(copied.nodes.find(n=>n.status==='mastered').note.includes('详细解释 language.types'));
    assert.equal(MindMapCore.layout(graph).nodes.length,3);
});

check('buildMap', 'topic maps include only their subtree and reset the selected root parent', () => {
    const index=core.createIndex(parts()), graph=core.buildMap(index,undefined,'language');
    assert.equal(graph.id,'java-learning:language'); assert.equal(graph.rootId,'language');
    assert.deepEqual(graph.nodes.map(n=>n.id),['language','language.types']);
    assert.equal(graph.nodes[0].parentId,null); assert.equal(graph.nodes[0].collapsed,false);
    assert.equal(graph.nodes[1].collapsed,false);
    assert.equal(index.byId.get('language').parentId,'java-root');
    assert.throws(()=>core.buildMap(index,{},'missing'));
    assert.throws(()=>core.buildMap(index,{entries:{language:{status:'known'}}}));
});

check('relatedQuestions', 'question matches use distinct precise terms and stable relevance ordering', () => {
    const topic=node('collections.set','java-root',{terms:['Set','去重','SET']});
    const questions=[
        {id:'noise',question:'ResultSet 是什么？',keywords:[],answer:'Set 去重'},
        {id:'weak',question:'Set 的基本用法',keywords:[]},
        {id:'strong',question:'set 如何去重？',keywords:['Set']},
        {id:'keyword',question:'集合题',keywords:['SET','去重']},
        {id:'answer-only',question:'数据库查询',keywords:[],answer:'Set 去重'}
    ];
    assert.deepEqual(core.relatedQuestions(topic,questions).map(q=>q.id),['strong','keyword','weak']);
    assert.equal(core.relatedQuestions(topic,questions,1)[0],questions[2]);
    assert.deepEqual(core.relatedQuestions(topic,questions,0),[]);
    assert.deepEqual(core.relatedQuestions(node('none','java-root',{terms:['nonexistent']}),questions),[]);
    assert.deepEqual(core.relatedQuestions(node('none','java-root',{terms:[]}),questions),[]);
});

check('relatedQuestions', 'literal punctuation and Chinese terms are matched without treating terms as regex', () => {
    const topic=node('functional','java-root',{terms:['Stream<T>','O(n)','函数式接口']});
    const questions=[{id:'a',question:'Stream<T> 与函数式接口的关系'},{id:'b',question:'时间复杂度 O(n)'},{id:'c',question:'StreamT 是什么'}];
    assert.deepEqual(core.relatedQuestions(topic,questions).map(q=>q.id),['a','b']);
});

check('normalizeLearning', 'learning normalization wraps the same canonical persistence validation', () => {
    assert.deepEqual(core.normalizeLearning(undefined),{version:1,topicId:'java-root',entries:{}});
    const input={entries:{language:{status:'learning',note:'笔记',extra:true}},extra:true};
    assert.deepEqual(core.normalizeLearning(input),{version:1,topicId:'java-root',entries:{language:{status:'learning',note:'笔记'}}});
    assert.deepEqual(core.normalizeLearning(input),MindMapCore.normalizeLearning(input));
});

check('createIndex', 'content indexing stays bounded and rejects excessive depth or oversized combined lessons', () => {
    const deep=Array.from({length:33},(_,i)=>node('depth'+i,i===0?'java-root':'depth'+(i-1)));
    assert.throws(()=>core.createIndex([deep]));
    assert.throws(()=>core.createIndex([[node('large','java-root',{explanation:'字'.repeat(10000)})]]));
    assert.throws(()=>core.createIndex([[node('__proto__')]]));
    assert.throws(()=>core.createIndex([Array.from({length:1200},(_,i)=>node('n'+i))]));
});

test('browser script loading exposes both cores without CommonJS or extra globals', () => {
    const vm=require('node:vm'), context=vm.createContext({URL}); context.window=context;
    vm.runInContext(fs.readFileSync(path.join(__dirname,'..','mindmap-core.js'),'utf8'),context);
    vm.runInContext(fs.readFileSync(filename,'utf8'),context);
    const result=vm.runInContext(`JSON.stringify(JavaLearningCore.buildMap(JavaLearningCore.createIndex(${JSON.stringify(parts())})))`,context);
    assert.equal(JSON.parse(result).nodes.length,5);
    assert.equal(vm.runInContext('typeof MindMapCore.normalizeLearning',context),'function');
});

check('createIndex', 'bundled Java lessons form ten complete topics with valid cross-topic references and maps', () => {
    const language=require('../data/java-learning-language.js'), runtime=require('../data/java-learning-runtime.js');
    const index=core.createIndex([language,runtime]);
    assert.equal(index.nodes.length,language.length+runtime.length+1);
    assert.deepEqual(index.topics.map(n=>n.id),['language','oop','collections','io','functional','concurrency','jvm','data-access','web-spring','engineering']);
    for(const topic of [index.byId.get('java-root'),...index.topics]) {
        const graph=core.buildMap(index,undefined,topic.id), placed=MindMapCore.layout(graph);
        assert.equal(graph.rootId,topic.id);
        assert.ok(graph.nodes.every(n=>n.questionId===null));
        assert.ok(MindMapCore.statsByNode(graph).get(graph.rootId).total>0);
        assert.ok(placed.nodes.length>1);
        assert.ok(graph.nodes.every(n=>n.note.includes(index.byId.get(n.id).explanation)));
    }
});

test('bundled content scripts register browser parts and produce precise practice links to the real bank', () => {
    const vm=require('node:vm'), context=vm.createContext({URL}); context.window=context;
    for(const filename of ['mindmap-core.js','data/java-learning-language.js','data/java-learning-runtime.js','java-learning-core.js','data/question-bank.js']) {
        vm.runInContext(fs.readFileSync(path.join(__dirname,'..',filename),'utf8'),context);
    }
    assert.equal(vm.runInContext('JAVA_LEARNING_PARTS.length',context),2);
    const result=vm.runInContext(`
        const contentIndex=JavaLearningCore.createIndex(JAVA_LEARNING_PARTS);
        const hashMapNode=contentIndex.nodes.find(n=>n.title.includes('HashMap'));
        const practice=JavaLearningCore.relatedQuestions(hashMapNode,QUESTION_BANK_DATA.questions);
        JSON.stringify({topics:contentIndex.topics.length,practice:practice.map(q=>q.id)});
    `,context);
    assert.equal(JSON.parse(result).topics,10);
    assert.ok(JSON.parse(result).practice.length>0);
    assert.ok(JSON.parse(result).practice.length<=8);
});

check('layoutMobile', 'mobile layouts show the focus and immediate children regardless of folded state', () => {
    const graph=core.buildMap(core.createIndex(parts()),{entries:{'language.types':{status:'mastered'}}});
    graph.nodes[0].collapsed=true;
    const before=JSON.stringify(graph), result=core.layoutMobile(graph,'language',320);
    assert.equal(result.mobile,true); assert.equal(result.rootId,'language'); assert.equal(result.width,320);
    assert.deepEqual(result.nodes.map(n=>n.id),['language','language.types']);
    assert.equal(result.nodes[0].parentId,null); assert.equal(result.nodes[0].collapsed,false);
    assert.equal(result.nodes[0].depth,0); assert.equal(result.nodes[1].depth,1);
    assert.equal(result.nodes[1].collapsed,true); assert.equal(result.nodes[1].status,'mastered');
    assert.equal(result.nodes[1].note,graph.nodes.find(n=>n.id==='language.types').note);
    assert.deepEqual(result.edges,[{from:'language',to:'language.types'}]);
    assert.equal(result.nodes[0].x+result.nodes[0].width/2,result.width/2);
    assert.equal(JSON.stringify(graph),before);
    const rootView=core.layoutMobile(graph,'java-root',320);
    assert.deepEqual(rootView.nodes.map(n=>n.id),['java-root','language','oop']);
});

check('layoutMobile', 'two-column mobile cards stay readable, separated and contained across phone widths', () => {
    const graph=core.buildMap(core.createIndex([Array.from({length:11},(_,i)=>node('topic'+i))]));
    for(const width of [280,300,320,390,740]) {
        const result=core.layoutMobile(graph,'java-root',width);
        assert.equal(result.width,Math.max(296,width));
        assert.equal(result.nodes.length,12); assert.equal(result.edges.length,11);
        assert.ok(result.height>600);
        assert.deepEqual(core.layoutMobile(graph,'java-root',width),result);
        for(const item of result.nodes) {
            assert.ok(item.width>=128); assert.equal(item.height,84);
            assert.ok(item.x>=12); assert.ok(item.y>=12);
            assert.ok(item.x+item.width+12<=result.width);
            assert.ok(item.y+item.height+12<=result.height);
        }
        for(let i=0;i<result.nodes.length;i++) for(let j=i+1;j<result.nodes.length;j++) {
            const a=result.nodes[i], b=result.nodes[j];
            assert.ok(a.x+a.width<=b.x||b.x+b.width<=a.x||a.y+a.height<=b.y||b.y+b.height<=a.y);
        }
        const children=result.nodes.slice(1);
        assert.equal(new Set(children.map(n=>n.x)).size,2);
        assert.equal(children[1].x-children[0].x-children[0].width,16);
        for(const edge of result.edges) { assert.equal(edge.from,result.rootId); assert.ok(result.nodes.some(n=>n.id===edge.to)); }
    }
});

check('layoutMobile', 'leaf focus produces one centered card and built-in knowledge maps remain supported', () => {
    const graph=core.buildMap(core.createIndex(parts()));
    const result=core.layoutMobile(graph,'language.types',390);
    assert.equal(result.nodes.length,1); assert.deepEqual(result.edges,[]);
    assert.equal(result.height,108); assert.equal(result.nodes[0].collapsed,false);
    const knowledge=MindMapCore.buildKnowledgeMap([{id:'q',category:'Java',question:'JVM'}]);
    assert.equal(core.layoutMobile(knowledge,knowledge.rootId,320).nodes.length,2);
});

check('layoutMobile', 'mobile layouts reject invalid graphs, unknown focus and invalid viewport widths', () => {
    const graph=core.buildMap(core.createIndex(parts()));
    assert.throws(()=>core.layoutMobile(graph,'missing',320),/专题|节点|焦点/);
    assert.throws(()=>core.layoutMobile(graph,undefined,320));
    assert.throws(()=>core.layoutMobile({...graph,id:1},graph.rootId,320));
    const orphan=JSON.parse(JSON.stringify(graph)); orphan.nodes[1].parentId='absent';
    assert.throws(()=>core.layoutMobile(orphan,graph.rootId,320));
    const cycle=JSON.parse(JSON.stringify(graph)); cycle.nodes[0].parentId=cycle.nodes[1].id;
    assert.throws(()=>core.layoutMobile(cycle,graph.rootId,320));
    for(const width of [undefined,null,'320',NaN,Infinity,0,-1]) assert.throws(()=>core.layoutMobile(graph,graph.rootId,width));
});
