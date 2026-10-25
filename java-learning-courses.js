/* Authored teaching units augment the complete atlas without migrating saved IDs. */
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory();
 else root.JavaLearningCourses=factory();
})(typeof window==='undefined'?globalThis:window,function(){
 'use strict';
 const fail=message=>{throw Error('Java 课程内容无效：'+message);};
 function text(value,key){if(typeof value!=='string'||!value.trim()||value.length>30000)fail(key);return value.trim();}
 function array(value,key,nonempty=false){if(!Array.isArray(value)||(nonempty&&!value.length))fail(key);return value;}
 function id(value){const result=text(value,'id');if(!/^course-[a-z0-9-]+$/.test(result))fail('课程 ID：'+result);return result;}
 function pairs(value,key,a,b,nonempty=false){return array(value,key,nonempty).map(item=>({[a]:text(item?.[a],key+'.'+a),[b]:text(item?.[b],key+'.'+b)}));}
 function normalize(raw){
  const lesson={id:id(raw?.id)};
  for(const key of ['topicId','chapter','title','intro','answer'])lesson[key]=text(raw[key],lesson.id+'.'+key);
  for(const key of ['explanation','boundaries'])lesson[key]=array(raw[key],key,true).map(v=>text(v,key));
  for(const key of ['conceptIds','readingIds','sourceChapters'])lesson[key]=[...new Set(array(raw[key],key).map(v=>text(v,key)))];
  lesson.flow=pairs(raw.flow,'flow','title','text',true);
  lesson.followUps=pairs(raw.followUps,'followUps','question','answer',true);
  lesson.checks=pairs(raw.checks,'checks','question','answer',true);
  lesson.prerequisites=pairs(raw.prerequisites,'prerequisites','id','why');
  lesson.related=pairs(raw.related,'related','id','why');
  lesson.example={};
  for(const key of ['language','code','output','explanation'])lesson.example[key]=text(raw.example?.[key],'example.'+key);
  lesson.sources=pairs(raw.sources,'sources','title','url',true).map(source=>{
   let url;try{url=new URL(source.url);}catch(_){fail('sources.url');}
   if(url.protocol!=='https:'||url.username||url.password)fail('sources.url');
   return {...source,url:url.href};
  });
  return lesson;
 }
 function attach(index,parts){
  if(!Array.isArray(parts))fail('课程分组');
  const courses=parts.flatMap(part=>array(part,'课程分组')).map(normalize);
  if(!courses.length)return index;
  for(const topic of index.topics){topic.referenceChapters=[...topic.chapters];topic.courseChapters=[];topic.courseLessonIds=[];}
  for(const course of courses){
   if(index.byId.has(course.id))fail('重复 ID：'+course.id);
   const topicId=course.topicId==='engineering'?'concept-topic:engineering':'xl-topic:'+course.topicId;
   const topic=index.byTopic.get(topicId);
   if(!topic)fail('不存在的专题：'+course.topicId);
   for(const title of course.sourceChapters)if(!topic.referenceChapters.some(ch=>ch.title===title))fail(course.id+' 的章节：'+title);
   let chapter=topic.courseChapters.find(ch=>ch.title===course.chapter);
   if(!chapter){chapter={id:'course-chapter:'+course.topicId+':'+course.chapter,title:course.chapter,kind:'course',lessonIds:[]};topic.courseChapters.push(chapter);}
   chapter.lessonIds.push(course.id);topic.courseLessonIds.push(course.id);
   index.byId.set(course.id,{id:course.id,title:course.title,topicId,chapterId:chapter.id,sourceType:'course',kind:'course',course,readingIds:course.readingIds});
  }
  for(const course of courses){
   for(const readingId of course.readingIds){
    const reading=index.byId.get(readingId);
    if(reading?.sourceType!=='xiaolin')fail(course.id+' 的原文：'+readingId);
    (reading.courseIds||=[]).push(course.id);
   }
   for(const conceptId of course.conceptIds){
    const concept=index.byId.get(conceptId);
    if(concept?.sourceType!=='concept')fail(course.id+' 的概念：'+conceptId);
    (concept.courseIds||=[]).push(course.id);
   }
   for(const link of [...course.prerequisites,...course.related]){
    if(link.id===course.id||!index.byId.has(link.id))fail(course.id+' 的知识联系：'+link.id);
   }
  }
  for(const topic of index.topics){
   topic.courseLessonIds=topic.courseChapters.flatMap(ch=>ch.lessonIds);
   topic.chapters=[...topic.courseChapters,...topic.referenceChapters];
   topic.lessonIds=topic.chapters.flatMap(ch=>ch.lessonIds);
  }
  index.lessons=index.topics.flatMap(topic=>topic.lessonIds.map(id=>index.byId.get(id)));
  index.courses=courses;
  for(const course of courses){
   const topic=index.byTopic.get(index.byId.get(course.id).topicId);
   index.searchText.set(course.id,[topic.title,course.chapter,course.title,course.intro,...course.explanation,
    ...course.flow.flatMap(v=>[v.title,v.text]),course.example.code,course.example.output,course.example.explanation,...course.boundaries,
    course.answer,...course.followUps.flatMap(v=>[v.question,v.answer]),...course.checks.flatMap(v=>[v.question,v.answer])].join(' ').normalize('NFKC').toLocaleLowerCase());
  }
  return index;
 }
 return {attach};
});
