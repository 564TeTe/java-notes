/* Complete learning workspace; source reading records and legacy concepts keep their stores. */
(function(root) {
'use strict';
const Core=root.MindMapCore, KEY='java-notes-mindmaps-v1', VIEW_KEY='java-notes-learning-view-v1';
const copy=v=>JSON.parse(JSON.stringify(v));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let snapshot,index,atlasIndex,loadError='',rawStorage='',saveLabel='';
let screen='home',topicId=null,selectedId=null,lastId=null,query='',focused=false;
let homeView='map',panel='read',routeId=null,activeChapterId=null;
let readingReturn=null,focusOrigin=null;
const contentCache=new Map(),contentErrors=new Map(),pendingLoads=new Set();
const curriculum=()=>index ||= root.JavaLearningCore.createIndex(root.JAVA_LEARNING_PARTS);
const atlas=()=>atlasIndex ||= root.JavaLearningAtlas.createIndex(curriculum(),root.XIAOLIN_CATALOG,root.JAVA_LEARNING_XIAOLIN,root.JAVA_COURSE_PARTS||[]);
const routes=()=>root.JavaCourseRoutes||root.JavaLearningRoutes||[];
const notify=message=>{if(typeof toast==='function')toast(message);};
const later=fn=>typeof requestAnimationFrame==='function'?requestAnimationFrame(fn):fn();
function read(){
 if(snapshot)return;
 snapshot=Core.normalizeSnapshot(undefined);
 try{rawStorage=localStorage.getItem(KEY)||'';if(rawStorage)snapshot=Core.normalizeSnapshot(JSON.parse(rawStorage));}
 catch(_){loadError='学习记录读取失败，原始数据已保留。请先下载原始数据，再从本地备份恢复。';}
 if(!snapshot.learning)snapshot.learning=Core.normalizeLearning(undefined);
 try{const state=JSON.parse(localStorage.getItem(VIEW_KEY)||'{}');if(root.JavaLearningAtlas&&root.XIAOLIN_CATALOG&&atlas().byId.has(state.lastId))lastId=state.lastId;}catch(_){}
}
function updateSaveLabel(){
 document.querySelectorAll?.('[data-learning-save]').forEach(el=>{el.textContent=saveLabel;el.setAttribute?.('data-error',String(/失败/.test(saveLabel)));});
}
function persist(next){
 if(loadError)throw Error(loadError);
 const normalized=Core.normalizeSnapshot(next);
 try{localStorage.setItem(KEY,JSON.stringify(normalized));}catch(_){throw Error('本地保存失败，请保留当前页面并释放浏览器存储空间后重试。');}
 snapshot=normalized;saveLabel='已保存到本机';
 try{if(typeof markLocalUpdated==='function')markLocalUpdated();}catch(_){}
 updateSaveLabel();return normalized;
}
function getMindMapSnapshot(){read();if(loadError)throw Error(loadError);return copy(snapshot);}
function applyMindMapSnapshot(value,commitCompanion){
 read();
 const incoming=Core.normalizeSnapshot(value);
 if(!incoming.learning&&snapshot.learning)incoming.learning=copy(snapshot.learning);
 const previous=snapshot,previousStorage=localStorage.getItem(KEY),previousError=loadError;
 const updatedKey=typeof LOCAL_UPDATED_KEY==='string'?LOCAL_UPDATED_KEY:null;
 const previousUpdated=updatedKey?localStorage.getItem(updatedKey):null;
 let next, wrote=false;
 try{loadError='';next=persist(incoming);wrote=true;if(typeof commitCompanion==='function')commitCompanion();}
 catch(error){
  snapshot=previous;loadError=previousError;
  if(localStorage.getItem(KEY)!==previousStorage){if(previousStorage===null)localStorage.removeItem(KEY);else localStorage.setItem(KEY,previousStorage);}
  if(wrote&&updatedKey){if(previousUpdated===null)localStorage.removeItem(updatedKey);else localStorage.setItem(updatedKey,previousUpdated);}
  saveLabel='导入失败，原记录已保留';throw error;
 }
 rawStorage='';readingReturn=null;return copy(next);
}
function topicFor(id){
 return root.JavaLearningAtlas.topicFor(atlas(),id)?.id||null;
}
function readingSnapshot(){return root.getXiaolinSnapshot?.()||{entries:{}};}
function ensureContent(){
 const lesson=atlas().byId.get(selectedId);
 if(screen!=='lesson'||lesson?.sourceType!=='xiaolin'||contentCache.has(lesson.id)||contentErrors.has(lesson.id)||pendingLoads.has(lesson.id))return;
 const id=lesson.id;
 if(typeof root.loadXiaolinTopic!=='function'){contentErrors.set(id,'讲解模块尚未加载');return;}
 pendingLoads.add(id);
 Promise.resolve().then(()=>root.loadXiaolinTopic(lesson.sourceTopicId)).then(data=>{
  if(data.id!==lesson.sourceTopicId)throw Error('专题不匹配');
  for(const chapter of data.chapters||[])for(const section of chapter.sections||[]){
   const known=atlas().byId.get(section.id);
   if(known?.sourceTopicId===data.id&&typeof section.html==='string'){contentCache.set(section.id,section);contentErrors.delete(section.id);}
  }
  if(!contentCache.has(id))throw Error('没有找到讲解');
 }).catch(()=>{if(!contentCache.has(id))contentErrors.set(id,'讲解加载失败，请重试。');}).finally(()=>{
  pendingLoads.delete(id);
  if(screen==='lesson'&&selectedId===id&&document.querySelector('.al-learning'))refresh();
 });
}
function model(){
 const category=atlas().byTopic.get(topicId)?.category||null,records=typeof getBankStudyRecords==='function'?getBankStudyRecords():[];
 const learning=copy(snapshot.learning),readingState=copy(readingSnapshot());
 return {screen,homeView,atlas:atlas(),index:curriculum(),routes:routes(),routeId,panel,topicId,selectedId,activeChapterId,query,learning,readingState,lastId,focused,
 content:contentCache.get(selectedId)||null,contentStatus:contentErrors.has(selectedId)?'error':contentCache.has(selectedId)?'ready':'loading',
 category,questionCount:category?records.filter(q=>q.category===category).length:0,saveLabel,loadError};
}
function renderMindMap(){
 read();
 if(loadError)return '<section class="mindmap-view al-learning"><div class="al-error" role="alert"><h2>学习记录读取失败</h2><p>'+esc(loadError)+'</p><button type="button" data-mm-action="export-raw" class="al-button">下载原始数据</button></div></section>';
 if(!root.JavaLearningView||!root.JavaLearningAtlas||!root.XIAOLIN_CATALOG)return '<section class="mindmap-view al-learning"><p role="alert">学习内容尚未加载，请刷新后重试。</p></section>';
 return '<section class="mindmap-view al-learning'+(focused?' mm-focus':'')+'" data-screen="'+screen+'" data-panel="'+panel+'" aria-label="Java 学习">'+root.JavaLearningView.render(model())+'</section>';
}
function mountMindMap(){
 const element=document.querySelector('.mindmap-view');
 root.LearningFocus?.sync(element,focused,{kind:'mindmap',onExit:()=>action('focus-exit'),onSearch:focusSearch});
 if(element&&root.JavaLearningAtlas&&root.XIAOLIN_CATALOG)ensureContent();
}
function focusSearch(){
 if(screen==='lesson')navigate('topic',topicId);
 later(()=>document.getElementById('mindmapSearch')?.focus());
}
function closeChapterSiblings(target){
 const directory=target?.parentElement;
 if(!target?.matches?.('details.al-chapter')||!directory?.matches?.('.al-directory'))return;
 for(const sibling of directory.children)if(sibling!==target&&sibling.matches?.('details.al-chapter'))sibling.open=false;
}
function restoreDetails(saved){
 const details=[...(document.querySelectorAll?.('.al-learning details')||[])];
 const entries=details.map(detail=>({detail,state:saved.find(([key])=>key&&(detail.dataset.detailKey||detail.id)===key)})).filter(entry=>entry.state);
 // Close first so native named accordions and the older-browser fallback restore the same chapter.
 for(const {detail} of entries)detail.open=false;
 for(const {detail,state} of entries)if(state[1]){closeChapterSiblings(detail);detail.open=true;}
}
function refresh({top=false,focusHeading=false,preserveDetails=!top}={}){
 const element=document.querySelector('.mindmap-view'),position=element?.scrollTop||0;
 const active=document.activeElement;
 const editing=!focusHeading&&active?.id==='mindmapSearch'&&active.tagName==='INPUT'&&element?.contains?.(active)
  ?{id:active.id,start:active.selectionStart,end:active.selectionEnd,direction:active.selectionDirection,scrollTop:active.scrollTop}:null;
 const details=preserveDetails?[...(document.querySelectorAll?.('.al-learning details')||[])].map(d=>[d.dataset.detailKey||d.id,d.open]):null;
 const directory=document.querySelector('.al-sidebar'),directoryScroll=directory?.scrollTop||0;
 if(element)element.outerHTML=renderMindMap();
 mountMindMap();
 const next=document.querySelector('.mindmap-view');if(next)next.scrollTop=top?0:position;
 if(details)restoreDetails(details);
 const nextDirectory=document.querySelector('.al-sidebar');if(nextDirectory)nextDirectory.scrollTop=directoryScroll;
 if(editing){const input=document.getElementById(editing.id);input?.focus({preventScroll:true});try{input?.setSelectionRange(editing.start,editing.end,editing.direction);}catch(_){}if(input)input.scrollTop=editing.scrollTop;}
 if(top&&!focused)root.scrollTo?.({top:0,behavior:'instant'});
 if(focusHeading)later(()=>document.querySelector('.al-learning h1')?.focus?.({preventScroll:true}));
}
function remember(id){lastId=id;try{localStorage.setItem(VIEW_KEY,JSON.stringify({lastId:id}));}catch(_){}}
function navigate(nextScreen,id){
 if(nextScreen==='home'){screen='home';focused=false;topicId=null;activeChapterId=null;query='';routeId=null;}
 else{
  if(nextScreen==='lesson'&&!atlas().byId.has(id)){if(topicFor(id))navigate('topic',id);else navigate('home');return;}
  if(!topicFor(id)){navigate('home');return;}
  const nextTopic=topicFor(id),next=copy(snapshot);next.learning.topicId=nextTopic;persist(next);
  if(nextScreen==='lesson')activeChapterId=atlas().byId.get(id).chapterId;
  else if(topicId!==nextTopic)activeChapterId=null;
  else if(screen==='lesson')activeChapterId=atlas().byId.get(selectedId)?.chapterId||activeChapterId;
  topicId=nextTopic;query='';screen=nextScreen;panel='read';saveLabel='';
  selectedId=nextScreen==='lesson'?id:null;
  if(nextScreen==='lesson'){
   if(routeId&&!routes().find(r=>r.id===routeId)?.steps.some(s=>s.id===id))routeId=null;
   remember(id);
  }else{focused=false;routeId=null;}
 }
 refresh({top:true,focusHeading:true});
}
function openReading(sectionId){
 const lesson=atlas().byId.get(selectedId),target=atlas().byId.get(sectionId);
 if(!lesson||target?.sourceType!=='xiaolin'||target.kind!=='lesson'||typeof root.openXiaolinFromMindMap!=='function')return;
 if(lesson.id!==sectionId&&!lesson.readingIds?.includes(sectionId))return;
 readingReturn={screen,selectedId,topicId,activeChapterId,query,focused,panel,routeId,scrollY:root.scrollY||0,scrollTop:document.querySelector('.mindmap-view')?.scrollTop||0,
 details:[...(document.querySelectorAll?.('.al-learning details')||[])].map(d=>[d.dataset.detailKey||d.id,d.open]),sectionId};
 if(!root.openXiaolinFromMindMap(sectionId,{id:selectedId,title:lesson.title,focused}))readingReturn=null;
}
function returnToMindMapLearning(id){
 if(!readingReturn||readingReturn.selectedId!==id||!atlas().byId.has(id))return false;
 const context=readingReturn;
 selectedId=id;topicId=context.topicId;activeChapterId=context.activeChapterId;query=context.query;focused=context.focused;screen=context.screen;panel=context.panel;routeId=context.routeId;
 root.navigateWorkspace('mindmap');readingReturn=null;
 later(()=>later(()=>{
  restoreDetails(context.details);
  root.scrollTo?.({top:context.scrollY,behavior:'instant'});
  const element=document.querySelector('.mindmap-view');if(element)element.scrollTop=context.scrollTop;
  [...(element?.querySelectorAll?.('[data-mm-action="read-xiaolin"]')||[])].find(el=>el.dataset.id===context.sectionId)?.focus?.({preventScroll:true});
 }));
 return true;
}
function action(name,control={dataset:{}}){
 read();
 if(name==='export-raw'){
  const url=URL.createObjectURL(new Blob([rawStorage],{type:'application/json'})),link=document.createElement('a');
  link.href=url;link.download='java-learning-recovery.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);return;
 }
 if(loadError){notify(loadError);return;}
 const id=control.dataset.id;
 if(name==='home')navigate('home');
 if(name==='home-mode'&&['map','routes'].includes(control.dataset.mode)){homeView=control.dataset.mode;refresh();}
 if(name==='lesson-topic')navigate('topic',id);
 if(name==='lesson-jump'){routeId=null;navigate(id==='java-root'?'home':'lesson',id);}
 if(name==='route-step'){
  const route=routes().find(r=>r.id===control.dataset.route);
  if(route?.steps.some(s=>s.id===id)){routeId=route.id;navigate('lesson',id);}
 }
 if(name==='jump-chapter'){
  const target=document.getElementById('al-chapter-'+id);if(target){closeChapterSiblings(target);target.open=true;activeChapterId=id;target.scrollIntoView?.({block:'start',behavior:'instant'});target.querySelector?.('summary')?.focus?.({preventScroll:true});}
 }
 if(name==='panel'&&['read','recall'].includes(control.dataset.panel)){panel=control.dataset.panel;refresh();}
 if(name==='retry'){contentErrors.delete(selectedId);refresh();}
 if(name==='lesson-state'&&['concept','course'].includes(atlas().byId.get(selectedId)?.sourceType)&&['new','learning','mastered'].includes(control.dataset.status)){
  const next=copy(snapshot);next.learning.entries[selectedId]={...(next.learning.entries[selectedId]||{note:''}),status:control.dataset.status};persist(next);
  refresh();
  document.querySelector('[data-mm-action="lesson-state"][data-status="'+control.dataset.status+'"]')?.focus?.({preventScroll:true});
 }
 if(name==='reading-state'&&atlas().byId.get(selectedId)?.sourceType==='xiaolin'){
  const done=readingSnapshot().entries[selectedId]?.done===true;
  if(root.setXiaolinEntry?.(selectedId,{done:!done})!==true)throw Error('阅读状态保存失败，请重试。');
  saveLabel='已保存';refresh();
 }
 if(name==='practice'){
  const category=atlas().byTopic.get(topicId)?.category;
  if(category&&root.openStudyCategory?.(category)===false)notify('这个分类暂时没有可用题目。');
 }
 if(name==='read-xiaolin'&&screen!=='home')openReading(id);
 if(name==='focus'&&screen==='lesson'){focusOrigin={scrollY:root.scrollY||0};focused=true;refresh({top:true,preserveDetails:true});}
 if(name==='focus-exit'){
  focused=false;refresh();const origin=focusOrigin;focusOrigin=null;
  if(origin)later(()=>root.scrollTo?.({top:origin.scrollY,behavior:'instant'}));
  document.querySelector('[data-mm-action="focus"]')?.focus?.({preventScroll:true});
 }
}
function safely(fn){try{fn();}catch(error){saveLabel=error.message;updateSaveLabel();notify(error.message);}}
document.addEventListener('click',event=>{
 if(!event.target.closest('.mindmap-view'))return;
 const control=event.target.closest('[data-mm-action]');if(control)safely(()=>action(control.dataset.mmAction,control));
});
document.addEventListener('input',event=>{
 const el=event.target;
 if(el.id==='mindmapSearch'&&!event.isComposing){
  query=el.value;const start=el.selectionStart,end=el.selectionEnd;
  refresh();const input=document.getElementById('mindmapSearch');input?.focus({preventScroll:true});
  try{input?.setSelectionRange(start,end);}catch(_){}
 }
});
document.addEventListener('compositionend',event=>{
 if(event.target.id==='mindmapSearch')event.target.dispatchEvent(new Event('input',{bubbles:true}));
});
document.addEventListener('toggle',event=>{
 const target=event.target;
 if(!target.open||target.isConnected===false||!target.matches?.('details.al-chapter')||!target.parentElement?.matches?.('.al-directory')||!target.closest?.('.al-learning'))return;
 closeChapterSiblings(target);
 if(atlas().byTopic.get(topicId)?.chapters.some(chapter=>chapter.id===target.dataset.chapterId))activeChapterId=target.dataset.chapterId;
},true);
document.addEventListener('keydown',event=>{
 if(event.defaultPrevented||event.isComposing||!(event.ctrlKey||event.metaKey)||event.key.toLowerCase()!=='k'||!document.querySelector('.mindmap-view'))return;
 event.preventDefault();event.stopImmediatePropagation();safely(focusSearch);
},true);
function getMindMapSVG(map){
 const expanded={...map,nodes:map.nodes.map(n=>({...n,collapsed:false}))},layout=Core.layout(expanded);
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+layout.width+'" height="'+(layout.height+50)+'"><rect width="100%" height="100%" fill="#f4f3ef"/><text x="24" y="28">'+esc(map.title)+'</text><g transform="translate(0,40)">'+layout.nodes.map(n=>'<g transform="translate('+n.x+','+n.y+')"><rect width="'+n.width+'" height="'+n.height+'" rx="8" fill="#e5ece6" stroke="#557460"/><text x="12" y="28" font-family="sans-serif" font-size="14">'+esc(n.title)+'</text></g>').join('')+'</g></svg>';
}
Object.assign(root,{renderMindMap,mountMindMap,getMindMapSnapshot,applyMindMapSnapshot,getMindMapSVG,returnToMindMapLearning});
})(window);
