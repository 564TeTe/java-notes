const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');
const view = require('../java-learning-view.js');

function fixture(overrides = {}) {
    const make = (id, parentId, title, summary = '知识摘要') => ({id,parentId,title,summary,explanation:'概念讲解',example:'int n = 1;',pitfall:'常见误区',prerequisites:[],related:[],sources:[]});
    const nodes = [
        make('java-root',null,'Java 知识学习'),
        make('collections','java-root','集合与数据结构'),
        make('language','java-root','语言基础'),
        make('hashmap','collections','HashMap','数组、链表与红黑树'),
        make('list','collections','List','有序序列'),
        make('linked-list','list','LinkedList','双向链表'),
        make('hash','language','哈希','散列计算'),
        make('equals','language','equals','对象相等性')
    ];
    return {
        screen:'home', index:{nodes,byId:new Map(nodes.map(node => [node.id,node])),topics:nodes.slice(1,3)},
        paths:{topics:[
            {id:'collections',title:'Java 集合',goal:'说清常用集合的选择与实现',essentials:['hashmap','list']},
            {id:'language',title:'Java 基础',goal:'理解引用和相等性',essentials:['equals','hash']}
        ],concepts:{hashmap:{question:'HashMap 如何处理哈希冲突？',answer:['先说数组定位。','再说链表与红黑树。','最后说明扩容。'],followUps:[{question:'什么时候树化？',answer:'满足阈值还需要看数组容量。'},{question:'线程安全吗？',answer:'并发读写需要另外选择合适的方案。'}]}}},
        topicId:'collections',selectedId:'hashmap',query:'',learning:{entries:{}},lastId:null,focused:false,reading:null,category:'Java 集合',questionCount:8,saveLabel:'已保存到本机',loadError:null,...overrides
    };
}
const render = overrides => load(view.render(fixture(overrides)));

test('home replaces map tabs and canvas with one entry for every learning topic', () => {
    const $ = render();
    assert.equal($('h1').text(),'Java 面试学习');
    assert.equal($('h1').attr('tabindex'),'-1');
    assert.equal($('.il-topic-row').length,2);
    assert.deepEqual($('.il-topic-row').map((_,el) => $(el).attr('data-id')).get(),['collections','language']);
    assert.equal($('.il-topic-row').first().find('.il-row-copy > small').text(),'说清常用集合的选择与实现');
    assert.equal($('#mindmapSearch').attr('type'),'search');
    assert.equal($('svg, canvas, [data-mm-action="copy-branch"], [data-mm-action="new"]').length,0);
    assert.doesNotMatch($.text(),/我的导图|题库导航|安排计划/);
    assert.equal($('[data-learning-save]').text(),'已保存到本机');
});

test('home progress counts only core interview concepts and continues a valid lesson', () => {
    const $ = render({lastId:'hashmap',learning:{entries:{hashmap:{status:'mastered'},'linked-list':{status:'mastered'},'unknown-old':{status:'mastered'}}}});
    assert.match($('.il-topic-row').first().find('.il-progress').text(),/1 \/ 2 能讲清/);
    assert.equal($('.il-continue').attr('data-id'),'hashmap');
    assert.equal(render({lastId:'removed-concept'})('.il-continue').length,0);
    assert.equal(render({lastId:'java-root'})('.il-continue').length,0);
    assert.equal(render({lastId:'collections'})('.il-continue').length,0);
});

test('search matches concept titles, summaries and interview questions without case sensitivity', () => {
    const byTitle = render({query:'HaShMaP'});
    assert.equal(byTitle('.il-search-results .il-concept-row').length,1);
    assert.equal(byTitle('.il-concept-row').attr('data-id'),'hashmap');
    const bySummary = render({query:'双向链表'});
    assert.equal(bySummary('.il-concept-row').attr('data-id'),'linked-list');
    const byPrompt = render({query:'哈希冲突'});
    assert.equal(byPrompt('.il-concept-row').attr('data-id'),'hashmap');
    assert.equal(render({query:'不存在的问题'})('.il-empty').length,1);
});

test('topic search stays within that topic and keeps a way back to the topic list', () => {
    const $ = render({screen:'topic',query:'对象相等性'});
    assert.equal($('.il-concept-row').length,0);
    assert.equal($('[data-mm-action="home"]').length,1);
    assert.equal($('#mindmapSearch').val(),'对象相等性');
    assert.equal($('.il-structure').length,0);
});

test('topic places ordered essential questions before a collapsed complete knowledge structure', () => {
    const $ = render({screen:'topic'});
    assert.deepEqual($('.il-essential-list > .il-concept-row').map((_,el) => $(el).attr('data-id')).get(),['hashmap','list']);
    assert.equal($('.il-structure').is('details:not([open])'),true);
    assert.equal($('.il-structure [data-mm-action="lesson-jump"][data-id="linked-list"]').length,1);
    assert.equal($('.il-structure summary').first().text(),'展开完整知识结构3 个知识点');
    assert.equal($('.il-tree > li > details summary').text(),'List1 个分支');
    assert.equal($('h1').text(),'Java 集合');
});

test('topic essentials reject unknown and cross-topic IDs without losing real content', () => {
    const model = fixture({screen:'topic'});
    model.paths.topics[0].essentials = ['hashmap','hashmap','unknown','equals'];
    const $ = load(view.render(model));
    assert.deepEqual($('.il-essential-list > .il-concept-row').map((_,el) => $(el).attr('data-id')).get(),['hashmap']);
    assert.equal($('.il-structure [data-id="linked-list"]').length,1);
});

test('practice is a single category shortcut and disappears when no question exists', () => {
    const $ = render({screen:'topic'});
    assert.equal($('[data-mm-action="practice"]').length,1);
    assert.match($('.il-practice').text(),/Java 集合 · 8 道题/);
    assert.equal($('[data-mm-action="lesson-question"]').length,0);
    assert.equal(render({screen:'topic',questionCount:0})('.il-practice').length,0);
    assert.match(render({screen:'topic',category:null})('.il-practice').text(),/全部题型/);
});

test('lesson leads with the question, answer and follow-ups, retaining original explanations', () => {
    const $ = render({screen:'lesson'});
    assert.equal($('.il-question p').text(),'HashMap 如何处理哈希冲突？');
    assert.equal($('.il-answer').is('details[open]'),true);
    assert.deepEqual($('.il-answer li').map((_,el) => $(el).text()).get(),['先说数组定位。','再说链表与红黑树。','最后说明扩容。']);
    assert.equal($('.il-followups details:not([open])').length,2);
    assert.equal($('.il-understanding').is('details:not([open])'),true);
    assert.match($('.il-understanding').text(),/概念讲解/);
    assert.equal($('.il-example code').text(),'int n = 1;');
    assert.equal($('.il-pitfall p').text(),'常见误区');
    assert.equal($('#mindmapSearch').length,0);
    assert.equal($('[data-mm-action="focus"]').length,1);
});

test('supplemental concepts remain readable without invented follow-ups or empty reading panels', () => {
    const $ = render({screen:'lesson',selectedId:'linked-list'});
    assert.equal($('.il-lesson-heading .il-eyebrow').text(),'补充知识');
    assert.equal($('.il-question p').text(),'怎样解释LinkedList？');
    assert.deepEqual($('.il-answer li').map((_,el) => $(el).text()).get(),['双向链表','概念讲解']);
    assert.equal($('.il-followups, .il-readings').length,0);
    assert.equal($('#mindmapLearningNote').length,1);
});

test('lesson progress controls keep storage statuses and notes expose their full escaped content', () => {
    const $ = render({screen:'lesson',learning:{entries:{hashmap:{status:'learning',note:'</textarea><script>unsafe</script> & 我的回答'}}}});
    assert.deepEqual($('.il-states button').map((_,el) => $(el).attr('data-status')).get(),['new','learning','mastered']);
    assert.equal($('.il-states [aria-pressed="true"]').attr('data-status'),'learning');
    assert.equal($('.il-states [data-status="mastered"]').text(),'能讲清');
    assert.equal($('#mindmapLearningNote').val(),'</textarea><script>unsafe</script> & 我的回答');
    assert.equal($('script').length,0);
    assert.equal($('label[for="mindmapLearningNote"]').length,1);
});

test('core lesson navigation follows curated order and ends at its topic', () => {
    const first = render({screen:'lesson'});
    assert.equal(first('.il-lesson-nav [data-mm-action="lesson-jump"]').attr('data-id'),'list');
    assert.equal(first('.il-lesson-position').text(),'1 / 2');
    const last = render({screen:'lesson',selectedId:'list'});
    assert.equal(last('.il-lesson-nav [data-mm-action="lesson-jump"]').attr('data-id'),'hashmap');
    assert.equal(last('.il-lesson-nav [data-mm-action="lesson-topic"]').attr('data-id'),'collections');
    const supplemental = render({screen:'lesson',selectedId:'linked-list'});
    assert.equal(supplemental('.il-lesson-position').text(),'3 / 3');
    assert.equal(supplemental('.il-lesson-nav [data-mm-action="lesson-jump"]').attr('data-id'),'list');
});

test('focused lesson always exposes an explicit focus exit', () => {
    const $ = render({screen:'lesson',focused:true});
    assert.equal($('[data-mm-action="focus-exit"]').text(),'退出专注');
    assert.equal($('[data-mm-action="focus"]').length,0);
    assert.equal($('.il-answer').length,1);
});

test('Xiaolin sources retain reading states and hide extra links behind a details control', () => {
    const sections = Array.from({length:5},(_,i) => ({id:`section-${i}`,title:`HashMap 讲解 ${i}`,topicTitle:'Java 集合',chapterTitle:'Map',done:i<2}));
    const $ = render({screen:'lesson',reading:{sections,total:5,done:2,branchTotal:5,branchDone:2}});
    assert.equal($('.il-readings > .il-reading-row').length,3);
    assert.equal($('.il-reading-more:not([open]) .il-reading-row').length,2);
    assert.equal($('.il-reading-status.is-done').length,2);
    assert.match($('.il-readings > .il-section-heading').text(),/2 \/ 5 已读懂/);
    assert.equal($('[data-mm-action="read-xiaolin"]').first().attr('data-id'),'section-0');
    assert.equal($('.il-readings > .il-section-heading h2').text(),'小林原文 · 深入理解');
    const html = view.render(fixture({screen:'lesson',reading:{sections,total:5,done:2}}));
    assert.ok(html.indexOf('il-followups') < html.indexOf('class="il-section il-readings"'));
    assert.ok(html.indexOf('class="il-section il-readings"') < html.indexOf('class="il-details il-understanding"'));
    assert.equal(view.readings({sections:[],branchTotal:9}),'');
});

test('topic Xiaolin panel links exact sections or concept branches before the knowledge structure', () => {
    const reading = {sections:[],branchTotal:9,branchDone:3,branches:[{id:'hashmap',title:'HashMap',total:5,done:2},{id:'list',title:'List',total:4,done:1}]};
    const $ = render({screen:'topic',reading});
    assert.deepEqual($('.il-readings [data-mm-action="lesson-jump"]').map((_,el) => $(el).attr('data-id')).get(),['hashmap','list']);
    assert.match($('.il-readings').text(),/3 \/ 9 已读懂/);
    assert.match($('.il-readings .il-reading-row').first().text(),/2 \/ 5 已读懂/);
    const html = view.render(fixture({screen:'topic',reading}));
    assert.ok(html.indexOf('class="il-essential-list"') < html.indexOf('class="il-section il-readings"'));
    assert.ok(html.indexOf('class="il-section il-readings"') < html.indexOf('class="il-structure"'));
    const exact = render({screen:'topic',reading:{sections:[{id:'xiaolin-map',title:'Map 讲解',topicTitle:'集合',chapterTitle:'Map',done:false}],total:1,done:0}});
    assert.equal(exact('.il-readings [data-mm-action="read-xiaolin"]').attr('data-id'),'xiaolin-map');
});

test('all editable text is escaped and unsafe reference protocols are excluded', () => {
    const model = fixture({screen:'lesson'}), node = model.index.byId.get('hashmap');
    node.title = '<img src=x onerror=alert(1)>';
    node.sources = [{title:'Map <K,V>',url:'https://example.org/?a=1&b="map"'},{title:'Unsafe link',url:'javascript:alert(1)'}];
    model.paths.concepts.hashmap.question = '<script>bad</script>';
    const $ = load(view.render(model));
    assert.equal($('img, script').length,0);
    assert.equal($('h1').text(),'<img src=x onerror=alert(1)>');
    assert.equal($('.il-sources a').length,1);
    assert.equal($('.il-sources a').text(),'Map <K,V> ↗');
    assert.equal($('.il-sources a').attr('href'),'https://example.org/?a=1&b="map"');
    assert.equal($('.il-sources a').attr('rel'),'noopener noreferrer');
    const search = render({query:'"><svg onload=alert(1)>'});
    assert.equal(search('svg').length,0);
    assert.equal(search('#mindmapSearch').val(),'"><svg onload=alert(1)>');
});

test('invalid navigation falls back to the topic list and load errors remain visible', () => {
    const $ = render({screen:'lesson',selectedId:'missing',loadError:new Error('损坏的 <JSON>')});
    assert.equal($('h1').text(),'Java 面试学习');
    assert.equal($('.il-error[role="alert"]').length,1);
    assert.match($('.il-error').text(),/损坏的 <JSON>/);
    assert.equal($('.il-error JSON').length,0);
    assert.equal(render({screen:'topic',topicId:'hashmap'})('.il-topic-list').length,1);
});
