const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const catalog=require('../data/xiaolin/catalog.js');
const Core=require('../java-learning-core.js');
const Atlas=require('../java-learning-atlas.js');
const files=['java-course-foundations.js','java-course-application.js','java-course-systems.js'];
const parts=()=>files.map(file=>require('../data/'+file));
const concepts=()=>Core.createIndex([require('../data/java-learning-language.js'),require('../data/java-learning-runtime.js')]);

test('authored teaching covers every substantive source chapter, with resources retained separately',()=>{
 const courses=parts().flat(),index=Atlas.createIndex(concepts(),catalog,require('../data/java-learning-xiaolin.js'),parts());
 assert.equal(new Set(courses.map(c=>c.id)).size,courses.length);
 for(const topic of catalog.topics){
  for(const chapter of topic.chapters){
   const substantive=topic.sections.some(section=>section.chapterId===chapter.id&&section.kind==='lesson');
   if(substantive)assert.ok(courses.some(c=>c.topicId===topic.id&&c.sourceChapters.includes(chapter.title)),topic.id+':'+chapter.title);
   for(const id of chapter.sectionIds)assert.equal(index.byId.get(id).sourceType,'xiaolin');
  }
 }
 assert.ok(courses.some(c=>c.topicId==='engineering'));
 for(const c of courses){
  assert.ok(c.explanation.length>=2,c.id+' needs connected explanation');
  assert.ok(c.flow.length>=3,c.id+' needs a process');
  assert.ok(c.followUps.length>=2,c.id+' needs follow-up answers');
  assert.ok(c.checks.length>=1,c.id+' needs an understanding check');
  assert.ok(c.sources.length>=1,c.id+' needs primary references');
 }
});
test('course data browser exports match Node exports and share no reference mutations',()=>{
 const context=vm.createContext({});context.window=context;
 for(const file of files)vm.runInContext(fs.readFileSync(path.join(__dirname,'../data',file),'utf8'),context);
 assert.deepEqual(JSON.parse(JSON.stringify(context.JAVA_COURSE_PARTS)),parts());
 const before=JSON.stringify({parts:parts(),catalog});
 Atlas.createIndex(concepts(),catalog,{},parts());
 assert.equal(JSON.stringify({parts:parts(),catalog}),before);
});
test('document-informed lessons distinguish the critical process and boundary questions',()=>{
 const courses=parts().flat(),find=id=>{
  const c=courses.find(c=>c.id===id);assert.ok(c,id);return JSON.stringify(c);
 };
 assert.match(find('course-java-reference-call'),/复制/);
 assert.match(find('course-spring-mvc'),/users\/5/);
 assert.match(find('course-spring-mapper'),/namespace/);
 assert.match(find('course-spring-mapper'),/#\{/);
 assert.match(find('course-spring-transaction'),/提交/);
 assert.match(find('course-redis-cache-aside'),/旧值/);
 assert.match(find('course-juc-executor'),/拒绝/);
 assert.match(find('course-mq-delivery'),/幂等/);
 assert.match(find('course-engineering-deploy'),/端口/);
});

test('new learning routes consist entirely of real authored courses across knowledge domains',()=>{
 const courses=new Map(parts().flat().map(c=>[c.id,c]));
 const routes=require('../data/java-course-routes.js');
 assert.equal(routes.length,6);
 for(const route of routes){
  assert.ok(route.steps.length>=6,route.id);
  assert.equal(new Set(route.steps.map(s=>s.id)).size,route.steps.length);
  for(const step of route.steps)assert.ok(courses.has(step.id),route.id+':'+step.id);
  assert.ok(new Set(route.steps.map(s=>courses.get(s.id).topicId)).size>=2,route.id);
 }
});
