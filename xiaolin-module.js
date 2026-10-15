/* Independent library: never writes to question, memorized, or quiz stores. */
const XIAOLIN_KEY='java-notes-xiaolin-v1';
const xiaolinIndex=XiaolinCore.createIndex(window.XIAOLIN_CATALOG);
let xiaolinState=XiaolinCore.normalizeSnapshot(),xiaolinLoadWarning=false,xiaolinSaveError=false;
try {const saved=localStorage.getItem(XIAOLIN_KEY);if(saved)xiaolinState=XiaolinCore.normalizeSnapshot(JSON.parse(saved));}
catch (_) {xiaolinLoadWarning=true;}
const xiaolinUI={topicId:null,chapterId:null,search:'',filter:'all',page:1,focused:false,mobile:false,error:'',pendingJump:null};
const xiaolinCache=new Map(),xiaolinPending=new Map();
let xiaolinNoteTimer,xiaolinScrollTimer,xiaolinObserver;
function persistXiaolin(){
    clearTimeout(xiaolinNoteTimer);
    if(xiaolinLoadWarning){toast('原阅读记录无法读取，已保留原数据。请先导出原记录，再恢复阅读记录。');return false;}
    try {localStorage.setItem(XIAOLIN_KEY,JSON.stringify(xiaolinState));xiaolinSaveError=false;markLocalUpdated();document.querySelectorAll('.xl-note-status').forEach(status=>{status.textContent='已保存到当前浏览器';});return true;}
    catch (_){if(!xiaolinSaveError)toast('阅读记录保存失败，请先导出本地备份；本次输入仍在页面中。');xiaolinSaveError=true;return false;}
}
function getXiaolinSnapshot(){return XiaolinCore.normalizeSnapshot(xiaolinState);}
function applyXiaolinSnapshot(value){
    if(value===undefined)return;
    const validated=XiaolinCore.normalizeSnapshot(value);
    localStorage.setItem(XIAOLIN_KEY,JSON.stringify(validated));
    xiaolinState=validated;xiaolinLoadWarning=false;xiaolinSaveError=false;
    clearTimeout(xiaolinNoteTimer);
}
function setXiaolinEntry(id,patch){
    if(!xiaolinIndex.byId.has(id))return false;
    const entry={done:false,starred:false,note:'',...xiaolinState.entries[id],...patch};
    xiaolinState=XiaolinCore.normalizeSnapshot({...xiaolinState,entries:{...xiaolinState.entries,[id]:entry}});
    return persistXiaolin();
}
function renderXiaolin(){
    xiaolinUI.mobile=window.matchMedia?.('(max-width: 860px)').matches || false;
    const warning=xiaolinLoadWarning?'<div class="xl-warning" role="alert">原阅读记录无法读取，已暂停覆盖保存。请导出原记录后，通过本地备份导入有效记录。<button type="button" data-xl-action="export-raw">导出原记录</button></div>':'';
    return warning+(xiaolinUI.topicId?XiaolinView.reader(xiaolinIndex,xiaolinState,xiaolinUI,xiaolinCache.get(xiaolinUI.topicId)):XiaolinView.shelf(xiaolinIndex,xiaolinState,xiaolinUI));
}
function updateXiaolinFont(){
    const size=xiaolinState.fontSize-(xiaolinUI.mobile?2:0);
    document.querySelector('.xl-reader')?.style.setProperty('--xl-font-size',size+'px');
    const output=document.getElementById('xiaolinFontSize');if(output)output.textContent=size;
}
function loadXiaolinTopic(id){
    if(xiaolinCache.has(id))return Promise.resolve(xiaolinCache.get(id));
    if(xiaolinPending.has(id))return xiaolinPending.get(id);
    const topic=xiaolinIndex.byTopic.get(id);
    const task=fetch('./'+topic.file+'?v=70').then(response=>{if(!response.ok)throw Error('Load failed');return response.json();}).then(data=>{
        if(data.id!==id||!Array.isArray(data.chapters)||data.chapters.length!==topic.chapters.length)throw Error('Invalid topic');
        xiaolinCache.set(id,data);return data;
    }).finally(()=>xiaolinPending.delete(id));
    xiaolinPending.set(id,task);return task;
}
function mountXiaolin(){
    xiaolinObserver?.disconnect();
    if(!showXiaolin || showGlossary || showAnnotations)return;
    const id=xiaolinUI.topicId;
    if(!id)return;
    if(!xiaolinCache.has(id)){
        if(xiaolinUI.error)return;
        loadXiaolinTopic(id).then(()=>{if(showXiaolin&&xiaolinUI.topicId===id)renderAll();}).catch(()=>{if(showXiaolin&&xiaolinUI.topicId===id){xiaolinUI.error='load';renderAll();}});
        return;
    }
    document.querySelectorAll('.xl-prose pre').forEach(pre=>{
        if(pre.querySelector('[data-xl-copy]'))return;
        const button=document.createElement('button');button.type='button';button.dataset.xlCopy='';button.className='xl-copy';button.textContent='复制';button.setAttribute('aria-label','复制代码');pre.appendChild(button);
    });
    if(xiaolinUI.pendingJump!==null){const target=xiaolinUI.pendingJump;xiaolinUI.pendingJump=null;requestAnimationFrame(()=>jumpXiaolin(target,true));}
    if(typeof IntersectionObserver!=='undefined'){
        xiaolinObserver=new IntersectionObserver(entries=>{
            if(!showXiaolin||showGlossary||showAnnotations)return;
            const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
            if(visible[0])rememberXiaolinSection(visible[0].target.closest('[data-xl-section]').dataset.xlSection);
        },{rootMargin:'-90px 0px -65% 0px',threshold:0});
        document.querySelectorAll('.xl-section>header').forEach(header=>xiaolinObserver.observe(header));
    }
}
function rememberXiaolinSection(sectionId){
    const section=xiaolinIndex.byId.get(sectionId);
    if(!section || section.topicId!==xiaolinUI.topicId || section.chapterId!==xiaolinUI.chapterId)return;
    xiaolinState.last={topicId:section.topicId,chapterId:section.chapterId,sectionId};
    clearTimeout(xiaolinScrollTimer);xiaolinScrollTimer=setTimeout(persistXiaolin,450);
}
function jumpXiaolin(id,focus=false){
    const target=document.getElementById(id || 'xiaolinChapterTop');
    if(!target)return;
    target.scrollIntoView({block:'start',behavior:'instant'});
    if(focus)(target.querySelector?.('h2') || target).focus?.({preventScroll:true});
    if(id)rememberXiaolinSection(id);
}
function openXiaolinChapter(topicId,chapterId,sectionId=''){
    const topic=xiaolinIndex.byTopic.get(topicId);if(!topic)return;
    const chapter=topic.chapters.find(c=>c.id===chapterId) || topic.chapters[0];
    xiaolinUI.topicId=topicId;xiaolinUI.chapterId=chapter.id;xiaolinUI.error='';
    xiaolinUI.pendingJump=chapter.sectionIds.includes(sectionId)?sectionId:'';
    xiaolinState.last={topicId,chapterId:chapter.id,sectionId:xiaolinUI.pendingJump};persistXiaolin();
    renderAll();
}
function refreshXiaolinResults(){const target=document.getElementById('xiaolinLibrary');if(target)target.innerHTML=xiaolinUI.search.trim()||xiaolinUI.filter!=='all'?XiaolinView.results(xiaolinIndex,xiaolinState,xiaolinUI):XiaolinView.books(xiaolinIndex,xiaolinState);}
function updateXiaolinProgress(){
    const target=document.getElementById('xiaolinTopicProgress'),progress=XiaolinCore.progress(xiaolinIndex,xiaolinState,xiaolinUI.topicId);
    if(target&&progress.total)target.textContent=`已读懂 ${progress.done} / ${progress.total} 小节`;
}
document.addEventListener('input',event=>{
    const target=event.target;
    if(target.id==='xiaolinSearch'&&!event.isComposing){xiaolinUI.search=target.value;xiaolinUI.page=1;refreshXiaolinResults();}
    if(!target.dataset?.xlNote)return;
    const id=target.dataset.xlNote;if(!xiaolinIndex.byId.has(id))return;
    xiaolinState.entries[id]={done:false,starred:false,...xiaolinState.entries[id],note:target.value.slice(0,20000)};
    const status=target.parentElement.querySelector('.xl-note-status');status.textContent='正在保存…';
    clearTimeout(xiaolinNoteTimer);xiaolinNoteTimer=setTimeout(()=>{const saved=persistXiaolin();status.textContent=saved?'已保存到当前浏览器':'保存失败，请导出本地备份保留输入';},450);
});
document.addEventListener('compositionend',event=>{if(event.target.id==='xiaolinSearch'){xiaolinUI.search=event.target.value;xiaolinUI.page=1;refreshXiaolinResults();}});
document.addEventListener('change',event=>{if(event.target.id==='xiaolinTopicSelect')openXiaolinChapter(event.target.value);});
document.addEventListener('click',async event=>{
    const copy=event.target.closest('[data-xl-copy]');
    if(copy){try{await navigator.clipboard.writeText(copy.parentElement.querySelector('code').textContent);copy.textContent='已复制';setTimeout(()=>{copy.textContent='复制';},1500);}catch(_){toast('复制失败，请选中代码手动复制。');}return;}
    const button=event.target.closest('[data-xl-action]');if(!button)return;
    const {xlAction:action,id}=button.dataset;
    if(action==='topic')openXiaolinChapter(id);
    else if(action==='chapter')openXiaolinChapter(button.dataset.topic,id);
    else if(action==='section'){const s=xiaolinIndex.byId.get(id);if(s)openXiaolinChapter(s.topicId,s.chapterId,id);}
    else if(action==='resume'&&xiaolinState.last){const last=xiaolinState.last;openXiaolinChapter(last.topicId,last.chapterId,last.sectionId);}
    else if(action==='home'){persistXiaolin();xiaolinUI.topicId=null;xiaolinUI.error='';renderAll();window.scrollTo({top:0});}
    else if(action==='filter'){xiaolinUI.filter=button.dataset.filter;xiaolinUI.page=1;renderAll();document.getElementById('xiaolinLibrary')?.scrollIntoView({block:'start'});}
    else if(action==='results-prev'||action==='results-next'){xiaolinUI.page+=action==='results-next'?1:-1;refreshXiaolinResults();document.getElementById('xiaolinLibrary')?.scrollIntoView({block:'start'});}
    else if(action==='jump')jumpXiaolin(id,true);
    else if(action==='top')jumpXiaolin('',true);
    else if(action==='directory'){
        xiaolinUI.focused=false;document.querySelector('.xl-reader')?.classList.remove('xl-focused');
        const focus=document.querySelector('[data-xl-action="focus"]');if(focus){focus.textContent='专注阅读';focus.setAttribute('aria-pressed','false');}
        const panel=document.querySelector('.xl-directory-panel');if(panel){panel.open=true;panel.scrollIntoView({block:'start',behavior:'instant'});panel.querySelector('summary')?.focus({preventScroll:true});}
    }
    else if(action==='retry'){xiaolinUI.error='';renderAll();}
    else if(action==='focus'){xiaolinUI.focused=!xiaolinUI.focused;document.querySelector('.xl-reader')?.classList.toggle('xl-focused',xiaolinUI.focused);button.textContent=xiaolinUI.focused?'显示目录':'专注阅读';button.setAttribute('aria-pressed',xiaolinUI.focused);}
    else if(action==='font-down'||action==='font-up'){
        xiaolinState.fontSize=Math.min(22,Math.max(16,xiaolinState.fontSize+(action==='font-up'?2:-2)));persistXiaolin();
        updateXiaolinFont();
        document.querySelector('[data-xl-action="font-down"]').disabled=xiaolinState.fontSize===16;
        document.querySelector('[data-xl-action="font-up"]').disabled=xiaolinState.fontSize===22;
    }else if(action==='done'||action==='star'){
        const key=action==='done'?'done':'starred';const on=!xiaolinState.entries[id]?.[key];
        setXiaolinEntry(id,{[key]:on});button.setAttribute('aria-pressed',on);
        button.textContent=action==='done'?(on?'✓ 已读懂':'○ 标记读懂'):(on?'★ 已收藏':'☆ 收藏');updateXiaolinProgress();
    }else if(action==='export-raw'){
        const url=URL.createObjectURL(new Blob([localStorage.getItem(XIAOLIN_KEY)||''],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='xiaolin-reading-original.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }
});
document.addEventListener('error',event=>{
    const img=event.target;if(img.tagName!=='IMG'||!img.closest('.xl-prose')||img.dataset.failed)return;
    img.dataset.failed='true';const notice=document.createElement('a');notice.className='xl-image-fallback';notice.href=img.src;notice.target='_blank';notice.rel='noopener noreferrer';notice.textContent='图解暂时无法加载 · 查看原图 ↗';img.hidden=true;img.after(notice);
},true);
window.addEventListener('pagehide',()=>{if(xiaolinNoteTimer||xiaolinScrollTimer)persistXiaolin();});
window.matchMedia?.('(max-width: 860px)').addEventListener?.('change',event=>{
    xiaolinUI.mobile=event.matches;
    updateXiaolinFont();
    const panel=document.querySelector('.xl-directory-panel');
    if(panel)panel.open=!event.matches;
});
