/* Interview learning workspace; historical maps remain in site backups. */
(function(root) {
'use strict';
const Core=root.MindMapCore, KEY='java-notes-mindmaps-v1', VIEW_KEY='java-notes-learning-view-v1';
const copy=v=>JSON.parse(JSON.stringify(v));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categories={language:'Java 基础',oop:'Java 基础',collections:'Java 集合',io:'Java 基础',functional:'Java 基础',concurrency:'多线程 / 并发',jvm:'JVM','data-access':'MySQL','web-spring':'Spring / Spring Boot'};
let snapshot,index,readingIndex,loadError='',rawStorage='',saveLabel='本地自动保存';
let screen='home',topicId='java-root',selectedId=null,lastId=null,query='',focused=false;
let pendingEdit=null,editTimer,readingReturn=null,focusOrigin=null;
const curriculum=()=>index ||= root.JavaLearningCore.createIndex(root.JAVA_LEARNING_PARTS);
const notify=message=>{if(typeof toast==='function')toast(message);};
const later=fn=>typeof requestAnimationFrame==='function'?requestAnimationFrame(fn):fn();
function read(){
 if(snapshot)return;
 snapshot=Core.normalizeSnapshot(undefined);
 try{rawStorage=localStorage.getItem(KEY)||'';if(rawStorage)snapshot=Core.normalizeSnapshot(JSON.parse(rawStorage));}
 catch(_){loadError='学习记录读取失败，原始数据已保留。请先下载原始数据，再从本地备份恢复。';}
 if(!snapshot.learning)snapshot.learning=Core.normalizeLearning(undefined);
 try{const state=JSON.parse(localStorage.getItem(VIEW_KEY)||'{}');if(root.JavaLearningCore&&root.JAVA_LEARNING_PARTS?.length&&curriculum().byId.has(state.lastId)&&state.lastId!=='java-root')lastId=state.lastId;}catch(_){}
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
function flushEdit(){
 clearTimeout(editTimer);if(!pendingEdit)return true;
 try{const next=copy(snapshot),edit=pendingEdit;next.learning.entries[edit.id]={...(next.learning.entries[edit.id]||{status:'new'}),note:edit.note};persist(next);pendingEdit=null;return true;}
 catch(error){saveLabel=error.message;updateSaveLabel();return false;}
}
function getMindMapSnapshot(){read();if(loadError)throw Error(loadError);if(!flushEdit())throw Error(saveLabel);return copy(snapshot);}
function applyMindMapSnapshot(value,commitCompanion){
 read();if(!flushEdit())throw Error(saveLabel);
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
 rawStorage='';pendingEdit=null;clearTimeout(editTimer);readingReturn=null;return copy(next);
}
function topicFor(id){
 let node=curriculum().byId.get(id);
 while(node&&node.parentId&&node.parentId!=='java-root')node=curriculum().byId.get(node.parentId);
 return node?.id||'java-root';
}
function conceptReadings(id){
 if(!id||!root.JavaLearningReading||!root.XIAOLIN_CATALOG||!root.JAVA_LEARNING_XIAOLIN)return null;
 if(!readingIndex){
  const mapping={...root.JAVA_LEARNING_XIAOLIN};
  for(const topic of root.JavaInterviewPaths?.topics||[])mapping[topic.id]=[...(mapping[topic.id]||[]),...(topic.readings||[])];
  readingIndex=root.JavaLearningReading.createIndex(curriculum(),root.XIAOLIN_CATALOG,mapping);
 }
 return root.JavaLearningReading.forConcept(readingIndex,id,root.getXiaolinSnapshot?.()||{});
}
function model(){
 const category=categories[topicId]||null,records=typeof getBankStudyRecords==='function'?getBankStudyRecords():[];
 // An app rerender must not replace a debouncing or failed-save draft with old text.
 const learning=copy(snapshot.learning);
 if(pendingEdit)learning.entries[pendingEdit.id]={...(learning.entries[pendingEdit.id]||{status:'new'}),note:pendingEdit.note};
 return {screen,index:curriculum(),paths:root.JavaInterviewPaths,topicId,selectedId,query,learning,lastId,focused,
 reading:screen!=='home'?conceptReadings(selectedId):null,category,questionCount:category?records.filter(q=>q.category===category).length:0,saveLabel,loadError};
}
function renderMindMap(){
 read();
 if(loadError)return '<section class="mindmap-view il-learning"><div class="il-error" role="alert"><h2>学习记录读取失败</h2><p>'+esc(loadError)+'</p><button type="button" data-mm-action="export-raw" class="il-button">下载原始数据</button></div></section>';
 if(!root.JavaLearningView||!root.JavaLearningCore||!root.JAVA_LEARNING_PARTS?.length)return '<section class="mindmap-view il-learning"><p role="alert">Java 学习内容尚未加载，请刷新后重试。</p></section>';
 return '<section class="mindmap-view il-learning'+(focused?' mm-focus':'')+'" data-screen="'+screen+'" aria-label="Java 面试学习">'+root.JavaLearningView.render(model())+'</section>';
}
function mountMindMap(){
 const element=document.querySelector('.mindmap-view');
 root.LearningFocus?.sync(element,focused,{kind:'mindmap',onExit:()=>action('focus-exit'),onSearch:focusSearch});
}
function focusSearch(){
 if(!flushEdit()){notify(saveLabel);return;}
 if(screen==='lesson')navigate('topic',topicId);
 later(()=>document.getElementById('mindmapSearch')?.focus());
}
function refresh({top=false,focusHeading=false,preserveDetails=!top}={}){
 const element=document.querySelector('.mindmap-view'),position=element?.scrollTop||0;
 const details=preserveDetails?[...(document.querySelectorAll?.('.il-learning details')||[])].map(d=>d.open):null;
 if(element)element.outerHTML=renderMindMap();
 mountMindMap();
 const next=document.querySelector('.mindmap-view');if(next)next.scrollTop=top?0:position;
 if(details)[...(document.querySelectorAll?.('.il-learning details')||[])].forEach((d,i)=>{if(i<details.length)d.open=details[i];});
 if(top&&!focused)root.scrollTo?.({top:0,behavior:'instant'});
 if(focusHeading)later(()=>document.querySelector('.il-learning h1, .il-learning h2')?.focus?.({preventScroll:true}));
}
function remember(id){lastId=id;try{localStorage.setItem(VIEW_KEY,JSON.stringify({lastId:id}));}catch(_){}}
function navigate(nextScreen,id){
 if(!flushEdit()){notify(saveLabel);return;}
 if(nextScreen==='home'){screen='home';focused=false;topicId='java-root';query='';}
 else{
  if(!curriculum().byId.has(id)||id==='java-root'){navigate('home');return;}
  const nextTopic=topicFor(id),next=copy(snapshot);next.learning.topicId=nextTopic;persist(next);
  topicId=nextTopic;query='';screen=nextScreen;
  selectedId=id;
  if(nextScreen==='lesson')remember(id);else focused=false;
 }
 refresh({top:true,focusHeading:true});
}
function openReading(sectionId){
 if(!conceptReadings(selectedId)?.sections.some(s=>s.id===sectionId)||typeof root.openXiaolinFromMindMap!=='function')return;
 readingReturn={screen,selectedId,topicId,query,focused,scrollY:root.scrollY||0,scrollTop:document.querySelector('.mindmap-view')?.scrollTop||0,
 details:[...(document.querySelectorAll?.('.il-learning details')||[])].map(d=>d.open),sectionId};
 if(!root.openXiaolinFromMindMap(sectionId,{id:selectedId,title:curriculum().byId.get(selectedId).title,focused}))readingReturn=null;
}
function returnToMindMapLearning(id){
 if(!readingReturn||readingReturn.selectedId!==id||!curriculum().byId.has(id)||!flushEdit())return false;
 const context=readingReturn;
 selectedId=id;topicId=context.topicId;query=context.query;focused=context.focused;screen=context.screen;
 root.navigateWorkspace('mindmap');readingReturn=null;
 later(()=>later(()=>{
  [...(document.querySelectorAll?.('.il-learning details')||[])].forEach((d,i)=>{d.open=!!context.details[i];});
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
 if(loadError||!flushEdit()){notify(loadError||saveLabel);return;}
 const id=control.dataset.id;
 if(name==='home')navigate('home');
 if(name==='lesson-topic')navigate('topic',id);
 if(name==='lesson-jump')navigate(id==='java-root'?'home':'lesson',id);
 if(name==='lesson-state'&&selectedId&&['new','learning','mastered'].includes(control.dataset.status)){
  const next=copy(snapshot);next.learning.entries[selectedId]={...(next.learning.entries[selectedId]||{note:''}),status:control.dataset.status};persist(next);
  document.querySelectorAll?.('[data-mm-action="lesson-state"]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.status===control.dataset.status)));
 }
 if(name==='practice'&&categories[topicId]){if(root.openStudyCategory?.(categories[topicId])===false)notify('这个分类暂时没有可用题目。');}
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
  if(!flushEdit())return;
  query=el.value;const start=el.selectionStart,end=el.selectionEnd;
  refresh();const input=document.getElementById('mindmapSearch');input?.focus({preventScroll:true});
  try{input?.setSelectionRange(start,end);}catch(_){}
 }
 if(el.id==='mindmapLearningNote'&&selectedId&&!loadError){
  pendingEdit={id:selectedId,note:el.value};saveLabel='正在编辑…';updateSaveLabel();clearTimeout(editTimer);
  if(!event.isComposing)editTimer=setTimeout(flushEdit,450);
 }
});
document.addEventListener('compositionend',event=>{
 if(['mindmapSearch','mindmapLearningNote'].includes(event.target.id))event.target.dispatchEvent(new Event('input',{bubbles:true}));
});
document.addEventListener('keydown',event=>{
 if(event.defaultPrevented||event.isComposing||!(event.ctrlKey||event.metaKey)||event.key.toLowerCase()!=='k'||!document.querySelector('.mindmap-view'))return;
 event.preventDefault();event.stopImmediatePropagation();safely(focusSearch);
},true);
document.addEventListener('click',event=>{
 if(event.target.closest('[data-workspace-link]')&&!flushEdit()){event.preventDefault();event.stopImmediatePropagation();notify(saveLabel);}
},true);
root.addEventListener('pagehide',flushEdit);
root.addEventListener('beforeunload',event=>{if(!flushEdit()){event.preventDefault();event.returnValue='';}});
function getMindMapSVG(map){
 const expanded={...map,nodes:map.nodes.map(n=>({...n,collapsed:false}))},layout=Core.layout(expanded);
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+layout.width+'" height="'+(layout.height+50)+'"><rect width="100%" height="100%" fill="#f4f3ef"/><text x="24" y="28">'+esc(map.title)+'</text><g transform="translate(0,40)">'+layout.nodes.map(n=>'<g transform="translate('+n.x+','+n.y+')"><rect width="'+n.width+'" height="'+n.height+'" rx="8" fill="#e5ece6" stroke="#557460"/><text x="12" y="28" font-family="sans-serif" font-size="14">'+esc(n.title)+'</text></g>').join('')+'</g></svg>';
}
Object.assign(root,{renderMindMap,mountMindMap,getMindMapSnapshot,applyMindMapSnapshot,getMindMapSVG,returnToMindMapLearning});
})(window);
