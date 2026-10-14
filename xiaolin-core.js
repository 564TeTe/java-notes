(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.XiaolinCore=factory();})(typeof window==='undefined'?globalThis:window,function(){
    'use strict';
    const BAD = new Set(['__proto__','prototype','constructor']);
    function invalid(){throw new Error('小林java 阅读记录格式无效');}
    function object(value){if(!value || typeof value!=='object' || Array.isArray(value))invalid();return value;}
    function string(value,max=300){if(typeof value!=='string'||value.length>max)invalid();return value;}
    function normalizeSnapshot(value={version:1}){
        object(value);if(value.version!==1)invalid();
        const entries={};
        for(const [id,entry] of Object.entries(object(value.entries === undefined ? {} : value.entries))){
            string(id);if(BAD.has(id))invalid();object(entry);
            if(entry.done!==undefined&&typeof entry.done!=='boolean'||entry.starred!==undefined&&typeof entry.starred!=='boolean')invalid();
            entries[id]={done:entry.done===true,starred:entry.starred===true,note:string(entry.note === undefined ? '' : entry.note,20000)};
        }
        if(Object.keys(entries).length>5000)invalid();
        let last=null;
        if(value.last!=null){object(value.last);last={topicId:string(value.last.topicId),chapterId:string(value.last.chapterId),sectionId:string(value.last.sectionId === undefined ? '' : value.last.sectionId)};}
        if(value.fontSize!==undefined&&![16,18,20,22].includes(value.fontSize))invalid();
        return {version:1,entries,last,fontSize:value.fontSize || 18};
    }
    function createIndex(catalog){
        const topics=catalog.topics,sections=topics.flatMap(topic=>topic.sections.map(section=>({...section,topicId:topic.id,topicTitle:topic.title,chapterTitle:topic.chapters.find(c=>c.id===section.chapterId)?.title || ''})));
        const byId=new Map(sections.map(s=>[s.id,s])),byTopic=new Map(topics.map(t=>[t.id,t]));
        if(byId.size!==sections.length)throw Error('重复的小林java 小节');
        return {topics,sections,lessons:sections.filter(s=>s.kind==='lesson'),byId,byTopic,groups:catalog.groups};
    }
    function search(index,query,filter='all',snapshot={entries:{}}){
        const terms=String(query || '').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
        return index.sections.filter(section=>{
            const entry=snapshot.entries[section.id] || {};
            if(filter==='starred'&&!entry.starred||filter==='notes'&&!entry.note?.trim())return false;
            const text=[section.title,section.chapterTitle,section.topicTitle,filter==='notes'?entry.note:''].join(' ').toLocaleLowerCase();
            return terms.every(term=>text.includes(term));
        });
    }
    function progress(index,state,topicId){
        const lessons=topicId?index.lessons.filter(s=>s.topicId===topicId):index.lessons;
        return {done:lessons.filter(s=>state.entries[s.id]?.done).length,total:lessons.length};
    }
    return {normalizeSnapshot,createIndex,search,progress};
});
