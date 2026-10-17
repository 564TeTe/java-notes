const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

function view(){
    const context=vm.createContext({});
    vm.runInContext(fs.readFileSync(path.join(__dirname,'../java-learning-view.js'),'utf8'),context);
    return context.JavaLearningView;
}
function fixture(){
    const make=(id,parentId,title)=>({id,parentId,title,summary:'知识摘要',explanation:'概念讲解',example:'int n = 1;',pitfall:'常见误区',prerequisites:[],related:[],sources:[]});
    const nodes=[make('java-root',null,'Java 知识学习'),make('collections','java-root','集合'),make('language','java-root','语言基础'),make('hashmap','collections','HashMap'),make('hash','language','哈希'),make('tree','language','树')];
    return {nodes,byId:new Map(nodes.map(node=>[node.id,node]))};
}
const countId=(html,id)=>(html.match(new RegExp(`data-id="${id}"`,'g'))||[]).length;
const branchReading={sections:[],total:0,done:0,branchTotal:8,branchDone:3,branches:[{id:'collections',title:'集合',total:5,done:2},{id:'language',title:'语言基础',total:3,done:1}]};

test('overview offers one entry per topic with reading evidence rather than a fictional root lesson',()=>{
    const index=fixture();
    const html=view().inspector({node:index.byId.get('java-root'),index,reading:branchReading});
    assert.match(html,/mm-overview-topics/);
    assert.equal(countId(html,'collections'),1);
    assert.equal(countId(html,'language'),1);
    assert.match(html,/已读懂 2 \/ 5/);
    assert.match(html,/已读懂 3 \/ 8/);
    assert.doesNotMatch(html,/lesson-state|理解原理|易错点|练习巩固|mindmapLearningNote|lesson-topic|copy-branch/);
});

test('an existing overview note remains editable in an optional collapsed section',()=>{
    const index=fixture();
    const html=view().inspector({node:index.byId.get('java-root'),index,entry:{status:'mastered',note:'已有的 <理解> & 笔记'}});
    assert.match(html,/<details[^>]*>\s*<summary>我的理解<\/summary>[\s\S]*id="mindmapLearningNote"/);
    assert.doesNotMatch(html,/<details[^>]*\bopen\b/);
    assert.match(html,/已有的 &lt;理解&gt; &amp; 笔记/);
    assert.equal((html.match(/id="mindmapLearningNote"/g)||[]).length,1);
    assert.doesNotMatch(html,/lesson-state/);
});

test('lesson relationships show each concept once while retaining branch reading evidence',()=>{
    const index=fixture(),node=index.byId.get('collections');
    node.prerequisites=['java-root','hashmap','hash'];
    node.related=['java-root','collections','hashmap','hash','tree','tree'];
    const reading={sections:[],total:0,done:0,branchTotal:5,branchDone:2,branches:[{id:'hashmap',title:'HashMap',total:5,done:2}]};
    const html=view().inspector({node,index,reading});
    for(const id of ['java-root','hashmap','hash','tree'])assert.equal(countId(html,id),1,`${id} has one concept link`);
    assert.match(html,/已读懂 2 \/ 5/);
    assert.match(html,/先理解这些/);
    assert.match(html,/关联与对比/);
});

test('empty practice is omitted and real practice stays after the lesson',()=>{
    const index=fixture(),node=index.byId.get('hashmap');
    assert.doesNotMatch(view().inspector({node,index}),/练习巩固|查找相关题目|没有匹配的练习/);
    const html=view().inspector({node,index,questions:[{id:'question-1',number:12,question:'如何扩容？'}]});
    assert.match(html,/练习巩固/);
    assert.match(html,/data-mm-action="lesson-question" data-id="question-1"/);
    assert.ok(html.indexOf('理解原理')<html.indexOf('练习巩固'));
});

test('copy and official sources live in collapsed utilities while notes stay directly available',()=>{
    const index=fixture(),node=index.byId.get('hashmap');
    node.sources=[{title:'Map <K,V>',url:'https://example.org/?a=1&b="map"'}];
    const html=view().inspector({node,index,entry:{status:'learning',note:'</textarea><script>oops</script>'}});
    assert.match(html,/<details class="mm-lesson-utilities">\s*<summary>整理与参考<\/summary>[\s\S]*data-mm-action="copy-branch"[\s\S]*官方资料/);
    assert.ok(html.indexOf('id="mindmapLearningNote"')<html.indexOf('<details class="mm-lesson-utilities">'));
    assert.match(html,/aria-pressed="true"/);
    assert.match(html,/&lt;\/textarea&gt;&lt;script&gt;oops&lt;\/script&gt;/);
    assert.match(html,/Map &lt;K,V&gt;/);
    assert.match(html,/href="https:\/\/example.org\/\?a=1&amp;b=&quot;map&quot;"/);
    assert.doesNotMatch(html,/<script>/);
});

test('lesson provides focus reading and a direct reading shortcut without decorative labels',()=>{
    const index=fixture(),node=index.byId.get('hashmap');
    const reading={sections:[{id:'section-1',title:'HashMap 扩容',topicTitle:'集合',chapterTitle:'Map',done:true}],total:1,done:1,branchTotal:1,branchDone:1,branches:[]};
    const html=view().inspector({node,index,reading});
    assert.match(html,/class="mm-lesson-actions"[\s\S]*data-mm-action="focus-reading"[^>]*>专注阅读/);
    assert.match(html,/data-mm-action="show-readings"/);
    assert.match(html,/data-mm-action="read-xiaolin"[^>]*data-id="section-1"/);
    assert.doesNotMatch(html,/LEARN \/|READ \/|随时回到这个概念|概念掌握度由你独立标记/);
});
