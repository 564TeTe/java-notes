const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const filename = path.join(__dirname, '..', 'mindmap-core.js');
const core = fs.existsSync(filename) ? require(filename) : {};

function check(name, behavior, fn) {
    test(behavior, () => {
        assert.equal(typeof core[name], 'function', name + ' must be exported');
        fn();
    });
}
function node(id, parentId = null, patch = {}) {
    return { id, parentId, title: id, note: '', status: 'new', questionId: null, collapsed: false, ...patch };
}
function map(nodes = [node('root')], patch = {}) {
    return { id: 'map-1', title: '学习知识', rootId: 'root', nodes, ...patch };
}
function snapshot(graph = map()) { return { version: 1, activeMapId: graph.id, maps: [graph] }; }
function ids(prefix = 'id') { let i = 0; return () => prefix + '-' + ++i; }
function branch() {
    return map([node('root'), node('a', 'root'), node('a1', 'a'), node('b', 'root'), node('b1', 'b'), node('c', 'root')]);
}

check('normalizeSnapshot', 'empty and valid snapshots are normalized into independent whitelisted data', () => {
    assert.deepEqual(core.normalizeSnapshot(undefined), { version: 1, activeMapId: 'knowledge', maps: [] });
    const original = snapshot();
    original.extra = 1; original.maps[0].extra = 2; original.maps[0].nodes[0].extra = 3;
    const clean = core.normalizeSnapshot(original);
    assert.deepEqual(clean, snapshot());
    clean.maps[0].nodes[0].title = 'changed';
    assert.equal(original.maps[0].nodes[0].title, 'root');
    assert.deepEqual(core.normalizeSnapshot({ version: 1, activeMapId: 'knowledge', maps: [] }), { version: 1, activeMapId: 'knowledge', maps: [] });
});

check('normalizeSnapshot', 'snapshot validation rejects unsupported structures and dangling active map IDs', () => {
    for (const value of [null, [], {}, { ...snapshot(), version: 2 }, { ...snapshot(), maps: {} }, { ...snapshot(), activeMapId: 'gone' }, { ...snapshot(), activeMapId: null }]) {
        assert.throws(() => core.normalizeSnapshot(value));
    }
    assert.throws(() => core.normalizeSnapshot({ ...snapshot(), maps: [map(), map()] }));
    assert.throws(() => core.normalizeSnapshot(snapshot(map(undefined, { id: 'knowledge' }))));
});

check('normalizeSnapshot', 'invalid node fields are rejected instead of silently coercing imported values', () => {
    for (const patch of [{id:''}, {title:''}, {title:'   '}, {note:2}, {status:'known'}, {questionId:2}, {collapsed:'true'}, {parentId:0}]) {
        assert.throws(() => core.normalizeSnapshot(snapshot(map([node('root', null, patch)]))), JSON.stringify(patch));
    }
    const missing = node('root'); delete missing.note;
    assert.throws(() => core.normalizeSnapshot(snapshot(map([missing]))));
});

check('normalizeSnapshot', 'validation rejects missing roots, multiple roots, duplicate IDs, orphans and cycles', () => {
    for (const graph of [
        map([]), map([node('other')]), map([node('root', 'a'), node('a', 'root')]),
        map([node('root'), node('a')]), map([node('root'), node('root', 'root')]),
        map([node('root'), node('a', 'gone')]), map([node('root'), node('a', 'b'), node('b', 'a')])
    ]) assert.throws(() => core.normalizeSnapshot(snapshot(graph)));
});

check('normalizeSnapshot', 'snapshot size and depth limits fail atomically', () => {
    const manyMaps = Array.from({length:31}, (_, i) => map(undefined, {id:'map-'+i}));
    assert.throws(() => core.normalizeSnapshot({version:1,activeMapId:'knowledge',maps:manyMaps}));
    const manyNodes = [node('root'), ...Array.from({length:1200}, (_,i)=>node('n'+i,'root'))];
    assert.throws(() => core.normalizeSnapshot(snapshot(map(manyNodes))));
    const deep = [node('root'), ...Array.from({length:33}, (_,i)=>node('n'+i,i===0?'root':'n'+(i-1)))];
    assert.throws(() => core.normalizeSnapshot(snapshot(map(deep))));
    assert.throws(() => core.normalizeSnapshot(snapshot(map([node('root',null,{title:'字'.repeat(161)})]))));
    assert.throws(() => core.normalizeSnapshot(snapshot(map([node('root',null,{note:'字'.repeat(10001)})]))));
    assert.throws(() => core.normalizeSnapshot(snapshot(map(undefined,{title:'字'.repeat(161)}))));
    const atLimit = deep.slice(0,33);
    assert.equal(core.normalizeSnapshot(snapshot(map(atLimit))).maps[0].nodes.length, 33);
});

check('normalizeSnapshot', 'untrusted property names are sanitized without prototype pollution', () => {
    const input = JSON.parse(JSON.stringify(snapshot()).replace('"version":1', '"version":1,"__proto__":{"polluted":true}'));
    input.maps[0].nodes[0].id = '__proto__'; input.maps[0].rootId = '__proto__';
    input.maps[0].nodes.push(node('constructor', '__proto__'));
    const result = core.normalizeSnapshot(input);
    assert.equal(Object.hasOwn(result,'__proto__'), false);
    assert.equal({}.polluted, undefined);
    assert.equal(result.maps[0].nodes[1].parentId, '__proto__');
});

check('createMap', 'new maps have a valid independent root and deterministic injected IDs', () => {
    const graph = core.createMap('  Java 学习  ', ids());
    assert.equal(graph.title, 'Java 学习');
    assert.equal(graph.nodes.length, 1);
    assert.equal(graph.nodes[0].id, graph.rootId);
    assert.equal(graph.nodes[0].title, 'Java 学习');
    assert.notEqual(graph.rootId, graph.id);
    assert.deepEqual(core.normalizeSnapshot(snapshot(graph)).maps[0], graph);
    assert.throws(()=>core.createMap(''));
    assert.throws(()=>core.createMap('bad',()=>''));
});

check('addNode', 'adding children preserves the input and unfolds the parent', () => {
    const original = map([node('root',null,{collapsed:true})]);
    const added = core.addNode(original,'root','子知识',ids());
    assert.equal(original.nodes.length,1);
    assert.equal(original.nodes[0].collapsed,true);
    assert.equal(added.nodes.length,2);
    assert.equal(added.nodes[0].collapsed,false);
    assert.deepEqual(added.nodes[1],node('id-1','root',{title:'子知识'}));
    assert.throws(()=>core.addNode(original,'absent','知识',ids()));
    assert.throws(()=>core.addNode(original,'root','知识',()=> 'root'));
});

check('updateNode', 'node edits permit only content and learning fields', () => {
    const original = branch();
    const changed = core.updateNode(original,'a',{title:' JVM ',note:'笔记',status:'learning',questionId:'bank-1',collapsed:true,id:'x',parentId:'b',unknown:'x'});
    assert.deepEqual(changed.nodes.find(n=>n.id==='a'), node('a','root',{title:'JVM',note:'笔记',status:'learning',questionId:'bank-1',collapsed:true}));
    assert.equal(original.nodes.find(n=>n.id==='a').title,'a');
    assert.throws(()=>core.updateNode(original,'missing',{title:'x'}));
    assert.throws(()=>core.updateNode(original,'a',{status:'invalid'}));
    assert.throws(()=>core.updateNode(original,'a',{title:''}));
});

check('descendantIds', 'descendants are deterministic and exclude the requested parent', () => {
    assert.deepEqual(core.descendantIds(branch(),'a'),['a1']);
    assert.deepEqual(new Set(core.descendantIds(branch(),'root')),new Set(['a','a1','b','b1','c']));
    assert.deepEqual(core.descendantIds(branch(),'c'),[]);
    assert.throws(()=>core.descendantIds(branch(),'missing'));
});

check('removeNode', 'removal deletes an entire branch and protects the root', () => {
    const original=branch();
    const changed=core.removeNode(original,'a');
    assert.deepEqual(changed.nodes.map(n=>n.id),['root','b','b1','c']);
    assert.equal(original.nodes.length,6);
    assert.throws(()=>core.removeNode(original,'root'));
    assert.throws(()=>core.removeNode(original,'missing'));
});

check('moveNode', 'moving nodes changes parent and sibling order without losing descendants', () => {
    const original=branch();
    const changed=core.moveNode(original,'a','b',0);
    assert.deepEqual(changed.nodes.filter(n=>n.parentId==='b').map(n=>n.id),['a','b1']);
    assert.equal(changed.nodes.find(n=>n.id==='a1').parentId,'a');
    assert.equal(original.nodes.find(n=>n.id==='a').parentId,'root');
    const reordered=core.moveNode(original,'c','root',0);
    assert.deepEqual(reordered.nodes.filter(n=>n.parentId==='root').map(n=>n.id),['c','a','b']);
    assert.deepEqual(core.moveNode(reordered,'c','root').nodes.filter(n=>n.parentId==='root').map(n=>n.id),['a','b','c']);
    assert.throws(()=>core.moveNode(original,'root','b'));
    assert.throws(()=>core.moveNode(original,'a','a1'));
    assert.throws(()=>core.moveNode(original,'a','a'));
    assert.throws(()=>core.moveNode(original,'a','missing'));
    assert.throws(()=>core.moveNode(original,'a','root',-1));
});

check('cloneBranch', 'copying a branch rekeys every node into a valid independent map', () => {
    const original=branch(); original.nodes[1].note='保留内容'; original.nodes[2].questionId='bank-1';
    const copied=core.cloneBranch(original,'a','JVM 副本',ids('copy'));
    assert.equal(copied.title,'JVM 副本');
    assert.equal(copied.nodes.length,2);
    assert.equal(copied.nodes[0].parentId,null);
    assert.equal(copied.nodes[0].note,'保留内容');
    assert.equal(copied.nodes[1].questionId,'bank-1');
    assert.equal(copied.nodes[1].parentId,copied.rootId);
    assert.ok(copied.nodes.every(n=>!original.nodes.some(o=>o.id===n.id)));
    assert.deepEqual(core.normalizeSnapshot(snapshot(copied)).maps[0],copied);
    assert.throws(()=>core.cloneBranch(original,'missing','副本',ids()));
    assert.throws(()=>core.cloneBranch(original,'a','副本',()=> 'same'));
});

check('buildKnowledgeMap', 'knowledge maps group all questions and keep stable IDs independent of input order', () => {
    const questions=[{id:'q1',category:'Java',question:'JVM 是什么？'},{id:'q2',category:'SQL',question:'索引'},{id:'q3',category:'Java',question:'线程'}];
    const graph=core.buildKnowledgeMap(questions,{},[]);
    assert.equal(graph.id,'knowledge');
    assert.equal(graph.nodes.length,6);
    assert.equal(graph.nodes.find(n=>n.id===graph.rootId).collapsed,false);
    assert.equal(graph.nodes.find(n=>n.id==='question:q1').questionId,'q1');
    assert.ok(graph.nodes.filter(n=>n.parentId===graph.rootId).every(n=>n.collapsed));
    assert.deepEqual(new Set(core.buildKnowledgeMap([...questions].reverse(),{},[]).nodes.map(n=>n.id)),new Set(graph.nodes.map(n=>n.id)));
    assert.equal(core.buildKnowledgeMap([],{},[]).nodes.length,1);
});

check('buildKnowledgeMap', 'knowledge mastery remains independent from memorized records', () => {
    const questions=['known','hard','fuzzy','new','memorized'].map(id=>({id,question:id,category:'学习'}));
    const graph=core.buildKnowledgeMap(questions,{known:{level:'known'},hard:{level:'hard'},fuzzy:{level:'fuzzy'}},['memorized']);
    assert.deepEqual(graph.nodes.filter(n=>n.questionId).map(n=>n.status),['mastered','learning','learning','new','new']);
    assert.deepEqual(core.stats(graph),{total:5,mastered:1,learning:2,new:2,percent:20});
});

check('buildKnowledgeMap', 'knowledge input deduplicates IDs and handles absent categories and long text', () => {
    const graph=core.buildKnowledgeMap([{id:'q',question:'字'.repeat(200)},{id:'q',question:'重复'},{id:'other',answer:'仅内容'}],{},[]);
    assert.equal(graph.nodes.filter(n=>n.questionId).length,2);
    assert.equal(graph.nodes.find(n=>n.id==='question:q').title.length,160);
    assert.ok(graph.nodes.find(n=>n.id==='question:other').title);
    assert.equal(graph.nodes.filter(n=>n.parentId===graph.rootId)[0].title,'未分类');
});

check('stats', 'progress counts all terminal nodes even inside folded branches', () => {
    const graph=map([node('root',null,{status:'mastered'}),node('a','root',{collapsed:true,status:'new'}),node('a1','a',{status:'mastered'}),node('b','root',{status:'learning'}),node('c','root')]);
    assert.deepEqual(core.stats(graph),{total:3,mastered:1,learning:1,new:1,percent:33});
    assert.deepEqual(core.stats(graph,'a'),{total:1,mastered:1,learning:0,new:0,percent:100});
    assert.deepEqual(core.stats(map()),{total:1,mastered:0,learning:0,new:1,percent:0});
    assert.throws(()=>core.stats(graph,'missing'));
});

check('layout', 'layout renders a balanced two-sided tree with nonnegative bounded coordinates', () => {
    const graph=branch(); const result=core.layout(graph);
    assert.equal(result.nodes.length,6); assert.equal(result.edges.length,5);
    const root=result.nodes.find(n=>n.id==='root');
    const first=result.nodes.find(n=>n.id==='a'); const second=result.nodes.find(n=>n.id==='b');
    assert.ok((first.x-root.x)*(second.x-root.x)<0);
    assert.equal(Math.abs(first.x-root.x),296);
    for(const placed of result.nodes){
        assert.equal(placed.width,220); assert.equal(placed.height,72);
        assert.ok(placed.x>=40); assert.ok(placed.y>=40);
        assert.ok(placed.x+placed.width+40<=result.width);
        assert.ok(placed.y+placed.height+40<=result.height);
        assert.equal(placed.depth,placed.id==='root'?0:['a','b','c'].includes(placed.id)?1:2);
    }
    for(const edge of result.edges){assert.ok(result.nodes.some(n=>n.id===edge.from));assert.ok(result.nodes.some(n=>n.id===edge.to));}
    assert.ok(graph.nodes.every(n=>n.x===undefined));
});

check('layout', 'folded descendants and edges are excluded from canvas layout', () => {
    const graph=branch(); graph.nodes[1].collapsed=true;
    const result=core.layout(graph);
    assert.equal(result.nodes.length,5);
    assert.equal(result.nodes.some(n=>n.id==='a1'),false);
    assert.equal(result.edges.some(e=>e.from==='a'||e.to==='a1'),false);
    graph.nodes[0].collapsed=true;
    assert.equal(core.layout(graph).nodes.length,1);
});

check('layout', 'large uneven branches do not overlap and layout stays deterministic', () => {
    const graph=map([node('root'),...Array.from({length:12},(_,i)=>node('b'+i,'root')),
        ...Array.from({length:80},(_,i)=>node('leaf'+i,'b'+i%12))]);
    const result=core.layout(graph);
    assert.deepEqual(core.layout(graph),result);
    for(let i=0;i<result.nodes.length;i++) for(let j=i+1;j<result.nodes.length;j++){
        const a=result.nodes[i], b=result.nodes[j];
        if(a.x===b.x) assert.ok(Math.abs(a.y-b.y)>=92, a.id+' overlaps '+b.id);
    }
});

check('normalizeSnapshot', 'accessor and inherited import fields are rejected without running getters', () => {
    const value=snapshot(); let reads=0;
    Object.defineProperty(value.maps[0].nodes[0],'title',{get(){reads++;return 'unsafe';},enumerable:true});
    assert.throws(()=>core.normalizeSnapshot(value));
    assert.equal(reads,0);
    const inherited=Object.create(node('root'));
    assert.throws(()=>core.normalizeSnapshot(snapshot(map([inherited]))));
});

check('addNode', 'node and depth limits also apply to edits without modifying the original map', () => {
    const full=map([node('root'),...Array.from({length:1199},(_,i)=>node('n'+i,'root'))]);
    assert.throws(()=>core.addNode(full,'root','too many',ids()));
    assert.equal(full.nodes.length,1200);
    const deep=map([node('root'),...Array.from({length:32},(_,i)=>node('n'+i,i===0?'root':'n'+(i-1)))]);
    assert.throws(()=>core.addNode(deep,'n31','too deep',ids()));
    assert.equal(deep.nodes.length,33);
    deep.nodes.push(node('extra','root'),node('leaf','extra'));
    assert.throws(()=>core.moveNode(deep,'extra','n30'));
    assert.equal(deep.nodes.find(n=>n.id==='extra').parentId,'root');
});

check('normalizeSnapshot', 'maximum valid Unicode titles and node counts survive snapshot round trips', () => {
    const graph=map([node('root',null,{title:'😀'.repeat(160),note:'字'.repeat(10000)}),...Array.from({length:1199},(_,i)=>node('n'+i,'root'))]);
    const serialized=JSON.stringify(snapshot(graph));
    assert.deepEqual(core.normalizeSnapshot(JSON.parse(serialized)),snapshot(graph));
});

check('normalizeSnapshot', 'sparse map lists are rejected before they can persist as null entries', () => {
    assert.throws(()=>core.normalizeSnapshot({version:1,activeMapId:'knowledge',maps:Array(2)}));
});

check('buildKnowledgeMap', 'questions with numeric numbers and empty text still have readable node titles', () => {
    const graph=core.buildKnowledgeMap([{id:'q1',number:1},{id:'q0',number:0}],{},[]);
    assert.equal(graph.nodes.find(n=>n.questionId==='q1').title,'1');
    assert.equal(graph.nodes.find(n=>n.questionId==='q0').title,'0');
});

check('statsByNode', 'all-node progress aggregates terminal descendants in one result map', () => {
    const graph=map([node('root',null,{status:'mastered'}),node('a','root',{collapsed:true,status:'new'}),node('a1','a',{status:'mastered'}),node('b','root',{status:'learning'}),node('c','root')]);
    const result=core.statsByNode(graph);
    assert.ok(result instanceof Map);
    assert.equal(result.size,graph.nodes.length);
    assert.deepEqual(result.get('root'),{total:3,mastered:1,learning:1,new:1,percent:33});
    assert.deepEqual(result.get('a'),{total:1,mastered:1,learning:0,new:0,percent:100});
    assert.deepEqual(result.get('a1'),{total:1,mastered:1,learning:0,new:0,percent:100});
    assert.deepEqual(result.get('b'),{total:1,mastered:0,learning:1,new:0,percent:0});
    assert.deepEqual(result.get('c'),{total:1,mastered:0,learning:0,new:1,percent:0});
    assert.notEqual(result.get('a'),result.get('a1'));
    for(const item of graph.nodes) assert.deepEqual(result.get(item.id),core.stats(graph,item.id));
    assert.equal(graph.nodes[1].collapsed,true);
});

check('statsByNode', 'all-node progress supports singleton and unordered trees while validating its input', () => {
    assert.deepEqual(core.statsByNode(map()).get('root'),{total:1,mastered:0,learning:0,new:1,percent:0});
    const graph=branch(); graph.nodes.reverse();
    assert.deepEqual(core.statsByNode(graph).get('root'),{total:3,mastered:0,learning:0,new:3,percent:0});
    assert.throws(()=>core.statsByNode(map([node('root'),node('bad','missing')])));
});

check('statsByNode', 'all-node progress counts a full-sized map without losing category subtotals', () => {
    const graph=map([node('root'),node('category','root'),...Array.from({length:1198},(_,i)=>node('leaf'+i,'category',{status:['mastered','learning','new'][i%3]}))]);
    const result=core.statsByNode(graph);
    assert.equal(result.size,1200);
    assert.deepEqual(result.get('root'),{total:1198,mastered:400,learning:399,new:399,percent:33});
    assert.deepEqual(result.get('category'),result.get('root'));
});

check('normalizeLearning', 'concept learning progress defaults missing fields and sanitizes independent copies', () => {
    const empty={version:1,topicId:'java-root',entries:{}};
    assert.deepEqual(core.normalizeLearning(undefined),empty);
    assert.deepEqual(core.normalizeLearning({}),empty);
    const input={topicId:'language',entries:{language:{note:'我的笔记',extra:true},oop:{status:'mastered'}},extra:true};
    const clean=core.normalizeLearning(input);
    assert.deepEqual(clean,{version:1,topicId:'language',entries:{language:{status:'new',note:'我的笔记'},oop:{status:'mastered',note:''}}});
    clean.entries.language.note='change'; assert.equal(input.entries.language.note,'我的笔记');
});

check('normalizeLearning', 'concept learning imports reject malformed versions, fields and dangerous keys', () => {
    for(const value of [null,[],{version:2},{version:'1'},{topicId:''},{topicId:1},{entries:[]},{entries:null},
        {entries:{a:null}},{entries:{a:{status:'known'}}},{entries:{a:{note:1}}},{entries:{a:{note:'字'.repeat(10001)}}},
        JSON.parse('{"entries":{"__proto__":{"status":"new"}}}'),{entries:{constructor:{status:'new'}}}]) assert.throws(()=>core.normalizeLearning(value));
    let read=false; const entry={}; Object.defineProperty(entry,'note',{get(){read=true;return 'bad';}});
    assert.throws(()=>core.normalizeLearning({entries:{a:entry}})); assert.equal(read,false);
    assert.equal({}.polluted,undefined);
    assert.throws(()=>core.normalizeLearning({entries:Object.fromEntries(Array.from({length:3001},(_,i)=>['n'+i,{}]))}));
});

check('normalizeSnapshot', 'snapshots optionally preserve concept learning state and reserve its navigation ID', () => {
    const value={version:1,activeMapId:'java-learning',maps:[],learning:{entries:{language:{status:'learning'}}}};
    assert.deepEqual(core.normalizeSnapshot(value),{version:1,activeMapId:'java-learning',maps:[],learning:{version:1,topicId:'java-root',entries:{language:{status:'learning',note:''}}}});
    assert.deepEqual(core.normalizeSnapshot({version:1,activeMapId:'java-learning',maps:[]}),{version:1,activeMapId:'java-learning',maps:[]});
    assert.equal(Object.hasOwn(core.normalizeSnapshot(snapshot()),'learning'),false);
    assert.throws(()=>core.normalizeSnapshot({...value,learning:{version:2}}));
    assert.throws(()=>core.normalizeSnapshot(snapshot(map(undefined,{id:'java-learning'}))));
    assert.throws(()=>core.createMap('Java',()=> 'java-learning'));
});
