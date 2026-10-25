const {test}=require('node:test');
const assert=require('node:assert/strict');
const {load}=require('cheerio');
const View=require('../java-learning-view.js');
const Atlas=require('../java-learning-atlas.js');
const Core=require('../java-learning-core.js');
const catalog=require('../data/xiaolin/catalog.js');
const concepts=Core.createIndex([require('../data/java-learning-language.js'),require('../data/java-learning-runtime.js')]);
const source=catalog.topics.find(t=>t.id==='spring');
const reading=source.sections.find(s=>s.kind==='lesson');
const course={id:'course-view-request',topicId:'spring',chapter:'一次请求',title:'请求的来回',intro:'追踪输入 5。',explanation:['依赖对象先准备，收到请求后再调用。'],flow:[{title:'准备对象',text:'容器创建依赖。'},{title:'调用方法',text:'请求参数进入方法。'}],example:{language:'java',code:'service.find(5); // <unsafe>',output:'id = 5',explanation:'已有 service 的调用片段。'},boundaries:['结果为空需要单独处理。'],answer:'先交代对象准备，再按参数与返回值讲调用过程。',followUps:[{question:'Mapper 是数据吗？',answer:'代理与查询结果是不同的对象。'}],checks:[{question:'id 在哪里变成 SQL 参数？',answer:'参数绑定时。'}],prerequisites:[{id:'language-references',why:'分清引用和对象。'}],related:[],conceptIds:['web-spring-mvc'],readingIds:[reading.id],sourceChapters:[source.chapters[0].title],sources:[{title:'官方资料',url:'https://docs.spring.io/spring-framework/reference/web/webmvc.html'}]};
function model(overrides={}){return {screen:'lesson',atlas:Atlas.createIndex(concepts,catalog,{},[[course]]),index:concepts,topicId:'xl-topic:spring',selectedId:course.id,learning:{entries:{}},readingState:{entries:{}},panel:'read',routes:[],...overrides};}
test('course reader shows a real process, worked result, boundaries and answer without source-copy body',()=>{
 const $=load(View.render(model()));
 assert.equal($('.al-course-flow li').length,2);
 assert.match($('.al-content').text(),/id = 5/);
 assert.match($('.al-content').text(),/先交代对象准备/);
 assert.equal($('.al-content pre code').first().text(),course.example.code);
 assert.equal($('unsafe').length,0);
 assert.equal($('.al-content-loading').length,0);
 assert.equal($('textarea').length,0);
 assert.equal($('.al-reading-links [data-mm-action="read-xiaolin"]').attr('data-id'),reading.id);
 assert.match($('.al-knowledge-links').text(),/分清引用和对象/);
});
test('course recall asks concrete questions and keeps answers collapsed',()=>{
 const $=load(View.render(model({panel:'recall'})));
 assert.match($('.al-recall').text(),/id 在哪里变成 SQL 参数/);
 assert.equal($('.al-recall details[open]').length,0);
 assert.equal($('.al-recall details').length,2);
 assert.equal($('.al-course-flow').length,0);
 assert.equal($('.al-recall [data-mm-action="panel"]').attr('data-panel'),'read');
});
test('topic and mobile directory put courses first and keep full references collapsed',()=>{
 const $=load(View.render(model({screen:'topic',selectedId:null})));
 assert.equal($('.al-directory').first().children('.al-chapter').length,1);
 assert.equal($('.al-reference-directory[open]').length,0);
 assert.equal($('.al-reference-directory [data-id="'+reading.id+'"]').length,1);
 assert.equal($('.al-chapter-map button').length,1);
 const reader=load(View.render(model()));
 assert.equal(reader('.al-mobile-directory .al-reference-directory[open]').length,0);
});
test('source navigation reveals its reference directory and points back to teaching',()=>{
 const $=load(View.render(model({selectedId:reading.id,contentStatus:'ready',content:{html:'<p>原文</p>'}})));
 assert.equal($('.al-sidebar .al-reference-directory[open]').length,1);
 assert.equal($('.al-course-return [data-id="'+course.id+'"]').length,1);
});
test('last course does not navigate into a reference question on next',()=>{
 const $=load(View.render(model()));
 assert.equal($('.al-lesson-nav [data-mm-action="lesson-jump"]').length,0);
 assert.equal($('.al-lesson-nav [data-mm-action="lesson-topic"]').length,1);
});
test('prerequisites keep their authored target instead of an inferred related course',()=>{
 const m=model();
 const extra={...course,id:'course-view-advanced',title:'高级引用排障',conceptIds:['language-references'],prerequisites:[]};
 m.atlas=Atlas.createIndex(concepts,catalog,{},[[course,extra]]);
 const $=load(View.render(m));
 assert.equal($('.al-knowledge-links [data-mm-action="lesson-jump"]').first().attr('data-id'),'language-references');
});
