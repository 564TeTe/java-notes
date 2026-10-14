const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const Core=require('../xiaolin-core.js');
const catalog=require('../data/xiaolin/catalog.js');

test('reading index contains 945 lessons and keeps the resource guide separate',()=>{
    const index=Core.createIndex(catalog);
    assert.equal(index.topics.length,17);
    assert.equal(index.lessons.length,945);
    assert.equal(index.topics.find(t=>t.id==='win').count,0);
    assert.ok(index.sections.length>945);
    assert.equal(new Set(index.sections.map(s=>s.id)).size,index.sections.length);
    assert.ok(Core.search(index,'HashMap').some(s=>s.topicId==='collections'));
    assert.ok(Core.search(index,'不存在的知识点xyz').length===0);
});

test('reading state validates before use and progress counts only explicit completion',()=>{
    const index=Core.createIndex(catalog),id=index.lessons[0].id;
    const state=Core.normalizeSnapshot({version:1,last:{topicId:'java',chapterId:index.lessons[0].chapterId,sectionId:id},entries:{[id]:{done:true,starred:true,note:'自己的理解'}},fontSize:20});
    assert.equal(Core.progress(index,state,'java').done,1);
    assert.equal(Core.progress(index,state,'java').total,79);
    assert.equal(Core.normalizeSnapshot(state).entries[id].note,'自己的理解');
    assert.throws(()=>Core.normalizeSnapshot({version:99}),/小林/);
    assert.throws(()=>Core.normalizeSnapshot({version:1,entries:{bad:{done:'yes'}}}),/小林/);
    assert.throws(()=>Core.normalizeSnapshot(JSON.parse('{"version":1,"entries":{"__proto__":{"note":"bad"}}}')),/小林/);
    assert.throws(()=>Core.normalizeSnapshot({version:1,entries:{bad:{note:'x'.repeat(20001)}}}),/小林/);
    assert.equal(Core.progress(index,Core.normalizeSnapshot({version:1,last:state.last}),'java').done,0);
    assert.equal(Core.normalizeSnapshot({version:1,entries:{lesson:{note:'constructor'}}}).entries.lesson.note,'constructor');
});

test('generated content preserves every imported answer and renders actual rich content',()=>{
    let count=0,images=0,tables=0,code=0;
    for(const topic of catalog.topics){
        const data=JSON.parse(fs.readFileSync(path.join(__dirname,'..',topic.file),'utf8'));
        for(const chapter of data.chapters) for(const section of chapter.sections){
            if(section.kind==='lesson')count++;
            assert.ok(section.markdown.trim());
            assert.ok(section.html.trim());
            assert.doesNotMatch(section.html,/<script\b|\bon(?:error|load|click)\s*=|(?:href|src)="javascript:/i);
            images+=(section.html.match(/<img\b/g)||[]).length;
            tables+=(section.html.match(/<table\b/g)||[]).length;
            code+=(section.html.match(/<pre\b/g)||[]).length;
        }
    }
    assert.equal(count,945);assert.ok(images>700);assert.ok(tables>=30);assert.ok(code>=491);
});
