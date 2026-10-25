const {test} = require('node:test');
const assert = require('node:assert/strict');
const Atlas = require('../java-learning-atlas.js');
const Core = require('../java-learning-core.js');
const catalog = require('../data/xiaolin/catalog.js');
const mapping = require('../data/java-learning-xiaolin.js');
const concepts = Core.createIndex([require('../data/java-learning-language.js'),require('../data/java-learning-runtime.js')]);
const source = catalog.topics.find(t=>t.id==='spring');
const reading = source.sections.find(s=>s.kind==='lesson');
function course(overrides={}) { return {
 id:'course-test-request',topicId:'spring',chapter:'请求与对象',title:'追踪一次请求',intro:'参数何时进入对象？',
 explanation:['对象准备与执行方法有不同的时间点。'],flow:[{title:'启动',text:'先准备依赖。'},{title:'请求',text:'再调用已有对象的方法。'}],
 example:{language:'java',code:'service.find(5);',output:'查询 id 为 5 的记录',explanation:'这是调用片段，依赖已准备好。'},
 boundaries:['没有查到记录需要单独处理。'],answer:'先区分准备依赖和执行请求，再追踪参数与返回值。',
 followUps:[{question:'是否每次创建 Service？',answer:'取决于作用域。'}],checks:[{question:'传入的是哪个值？',answer:'5。'}],
 prerequisites:[{id:'language-references',why:'区分对象与引用。'}],related:[],conceptIds:['web-spring-mvc'],
 readingIds:[reading.id],sourceChapters:[source.chapters[0].title],sources:[{title:'Spring',url:'https://docs.spring.io/spring-framework/reference/web/webmvc.html'}],...overrides
}; }
const create = lessons=>Atlas.createIndex(concepts,catalog,mapping,[lessons]);

test('authored courses lead the topic while all existing lessons and identifiers remain available',()=>{
 const old=Atlas.createIndex(concepts,catalog,mapping),index=create([course()]);
 assert.equal(index.byId.get('course-test-request')?.sourceType,'course');
 assert.equal(index.lessons.length,old.lessons.length+1);
 for(const item of old.lessons)assert.equal(index.byId.get(item.id).sourceType,item.sourceType);
 const topic=index.byTopic.get('xl-topic:spring');
 assert.deepEqual(topic.courseLessonIds,['course-test-request']);
 assert.equal(topic.chapters[0].kind,'course');
 assert.equal(topic.lessonIds[0],'course-test-request');
 assert.ok(topic.referenceChapters.some(ch=>ch.lessonIds.includes(reading.id)));
});
test('course references and original concepts have reciprocal precise links',()=>{
 const index=create([course()]);
 assert.deepEqual(index.byId.get(reading.id).courseIds,['course-test-request']);
 assert.deepEqual(index.byId.get('web-spring-mvc').courseIds,['course-test-request']);
 assert.deepEqual(index.byId.get('course-test-request').readingIds,[reading.id]);
 assert.deepEqual(index.byId.get('course-test-request').course.prerequisites,[{id:'language-references',why:'区分对象与引用。'}]);
});
test('bad reference and prerequisite IDs fail instead of rendering dead links',()=>{
 assert.throws(()=>create([course({readingIds:['missing']})]),/missing/);
 assert.throws(()=>create([course({prerequisites:[{id:'missing',why:'dependency'}]})]),/missing/);
 assert.throws(()=>create([course({sourceChapters:['missing']})]),/missing/);
 assert.throws(()=>create([course(),course()]),/course-test-request/);
});
test('teaching prose is searchable and course neighbours stay in the course sequence',()=>{
 const index=create([course(),course({id:'course-test-next',title:'继续追踪',explanation:['返回路径包含序列化。']})]);
 assert.equal(Atlas.search(index,'返回路径包含序列化')[0]?.id,'course-test-next');
 assert.equal(Atlas.previousNext(index,'course-test-next').next,null);
 assert.equal(Atlas.previousNext(index,'course-test-next').previous.id,'course-test-request');
});
test('structured course content rejects missing teaching and unsafe URLs',()=>{
 assert.throws(()=>create([course({answer:''})]),/answer/);
 assert.throws(()=>create([course({checks:[]})]),/checks/);
 assert.throws(()=>create([course({sources:[{title:'bad',url:'javascript:alert(1)'}]})]),/url/);
 assert.throws(()=>create([course({id:'constructor'})]),/ID|id/);
});
test('course next and previous follow the visible grouped chapter order',()=>{
 const index=create([course(),course({id:'course-test-other',chapter:'下一章'}),course({id:'course-test-followup'})]);
 const topic=index.byTopic.get('xl-topic:spring');
 assert.deepEqual(topic.courseLessonIds,topic.courseChapters.flatMap(c=>c.lessonIds));
 assert.equal(Atlas.previousNext(index,'course-test-request').next.id,'course-test-followup');
});
