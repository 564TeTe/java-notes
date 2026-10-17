/* Exact reading references; reading evidence never writes concept mastery. */
(function(root,factory){
    if(typeof module==='object'&&module.exports)module.exports=factory();
    else root.JavaLearningReading=factory();
})(typeof window==='undefined'?globalThis:window,function(){
    'use strict';
    function createIndex(curriculum,catalog,mapping={}){
        const concepts=new Map(curriculum.nodes.map(n=>[n.id,n])),sections=new Map(),direct=new Map(),children=new Map(),branch=new Map();
        for(const topic of catalog.topics || []){
            const chapters=new Map((topic.chapters || []).map(c=>[c.id,c]));
            for(const section of topic.sections || []){
                const chapter=chapters.get(section.chapterId);
                if(section.kind!=='lesson'||!chapter)continue;
                sections.set(section.id,{id:section.id,title:section.title,chapterId:chapter.id,chapterTitle:chapter.title,topicId:topic.id,topicTitle:topic.title});
            }
        }
        for(const node of curriculum.nodes){
            const ids=Object.hasOwn(mapping,node.id)&&Array.isArray(mapping[node.id])?mapping[node.id]:[];
            direct.set(node.id,[...new Set(ids)].filter(id=>sections.has(id)));
            if(!children.has(node.parentId))children.set(node.parentId,[]);
            children.get(node.parentId).push(node.id);
        }
        function collect(id){
            if(branch.has(id))return branch.get(id);
            const ids=new Set(direct.get(id));branch.set(id,ids);
            for(const child of children.get(id)||[])for(const section of collect(child))ids.add(section);
            return ids;
        }
        for(const node of curriculum.nodes)collect(node.id);
        return {concepts,sections,direct,children,branch};
    }
    function forConcept(index,id,state={}){
        const entries=state?.entries || {};
        const done=ids=>ids.reduce((sum,id)=>sum+Number(entries[id]?.done===true),0);
        const direct=index.direct.get(id)||[],all=[...(index.branch.get(id)||[])];
        const branches=(index.children.get(id)||[]).map(child=>{
            const ids=[...(index.branch.get(child)||[])];
            return {id:child,title:index.concepts.get(child).title,total:ids.length,done:done(ids)};
        }).filter(b=>b.total);
        return {sections:direct.map(id=>({...index.sections.get(id),done:entries[id]?.done===true})),total:direct.length,done:done(direct),branchTotal:all.length,branchDone:done(all),branches};
    }
    return {createIndex,forConcept};
});
