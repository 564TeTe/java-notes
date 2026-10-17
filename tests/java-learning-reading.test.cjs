const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const file=require('node:path').join(__dirname,'../java-learning-reading.js');
function core(){assert.ok(fs.existsSync(file),'reading resolver exists');return require(file);}
const concepts={nodes:[{id:'root',parentId:null,title:'知识'},{id:'map',parentId:'root',title:'Map'},{id:'hash',parentId:'map',title:'HashMap'},{id:'new',parentId:'root',title:'新概念'}]};
const catalog={topics:[{id:'collections',title:'集合',chapters:[{id:'ch',title:'Map'}],sections:[{id:'s1',title:'扩容',chapterId:'ch',kind:'lesson'},{id:'s2',title:'查找',chapterId:'ch',kind:'lesson'},{id:'external',title:'外链',chapterId:'ch',kind:'resource'}]}]};
test('resolves only exact valid sections and preserves curated order',()=>{
 const R=core(),index=R.createIndex(concepts,catalog,{hash:['s2','bad','s1','s2','external'],unknown:['s1']});
 const result=R.forConcept(index,'hash',{});
 assert.deepEqual(result.sections.map(s=>s.id),['s2','s1']);
 assert.deepEqual(result.sections[0],{id:'s2',title:'查找',chapterId:'ch',chapterTitle:'Map',topicId:'collections',topicTitle:'集合',done:false});
 assert.equal(R.forConcept(index,'new',{}).total,0);
 assert.equal(R.forConcept(index,'missing',{}).total,0);
});
test('deduplicates branch reading evidence and never changes concept mastery or reading state',()=>{
 const R=core(),index=R.createIndex(concepts,catalog,{map:['s1'],hash:['s1','s2']});
 const state={entries:{s1:{done:true},s2:{done:false}}};const before=JSON.stringify(state);
 const result=R.forConcept(index,'map',state);
 assert.equal(result.total,1);assert.equal(result.done,1);
 assert.equal(result.branchTotal,2);assert.equal(result.branchDone,1);
 assert.deepEqual(result.branches,[{id:'hash',title:'HashMap',total:2,done:1}]);
 assert.equal(JSON.stringify(state),before);
 assert.equal(R.forConcept(index,'root',{entries:{s1:{done:true},s2:{done:true}}}).branchDone,2);
 assert.equal(R.forConcept(index,'root',{entries:{s1:{done:false}}}).branchDone,0);
});
test('view shows reading evidence separately, escapes source titles, and hides empty reading cards',()=>{
 const ctx=vm.createContext({});vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../java-learning-view.js'),'utf8'),ctx);
 assert.equal(typeof ctx.JavaLearningView.readings,'function');
 const view=ctx.JavaLearningView.readings;
 const sections=Array.from({length:5},(_,i)=>({id:'s'+i,title:i===0?'<b>标题</b>':'标题'+i,topicTitle:'集合',chapterTitle:'Map',done:i===0}));
 const html=view({sections,total:5,done:1,branchTotal:5,branchDone:1,branches:[]});
 assert.match(html,/已读懂 1 \/ 5/);assert.match(html,/其余 2 篇/);
 assert.doesNotMatch(html,/<b>标题/);assert.match(html,/data-mm-action="read-xiaolin"/);
 assert.equal(view({sections:[],total:0,branches:[],branchTotal:0,branchDone:0}), '');
});
