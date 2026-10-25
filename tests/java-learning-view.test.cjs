const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');
const view = require('../java-learning-view.js');

function fixture(overrides = {}) {
    const node = {id:'hashmap',title:'HashMap',summary:'数组、链表与红黑树',explanation:'通过哈希值确定桶的位置。\n\n冲突的键需要比较相等性。',example:'Map<String, Integer> map = new HashMap<>();',pitfall:'并发写入需要同步措施。',related:['list'],prerequisites:[],sources:[{title:'Map 文档',url:'https://example.org/map'}]};
    const other = {...node,id:'list',title:'List',explanation:'有序序列。',example:'List<String> values = new ArrayList<>();',related:[],sources:[]};
    const lessons = [
        {id:'xl-hash',title:'HashMap 的结构',topicId:'collections',chapterId:'map',sourceType:'xiaolin',sourceTopicId:'collections',sourceSectionId:'xl-hash',source:'https://example.org/hash',kind:'lesson',conceptIds:['hashmap']},
        {id:'xl-expand',title:'扩容过程',topicId:'collections',chapterId:'map',sourceType:'xiaolin',sourceTopicId:'collections',sourceSectionId:'xl-expand',kind:'lesson',conceptIds:[]},
        {id:'xl-list',title:'ArrayList 和 LinkedList',topicId:'collections',chapterId:'sequence',sourceType:'xiaolin',sourceTopicId:'collections',sourceSectionId:'xl-list',kind:'lesson',conceptIds:[]},
        {id:'hashmap',title:'HashMap',topicId:'collections',chapterId:'concepts',sourceType:'concept',concept:node,readingIds:['xl-hash','xl-expand']},
        {id:'list',title:'List',topicId:'collections',chapterId:'concepts',sourceType:'concept',concept:other},
        {id:'xl-redis',title:'缓存穿透',topicId:'redis',chapterId:'cache',sourceType:'xiaolin',sourceTopicId:'redis',sourceSectionId:'xl-redis',kind:'lesson',conceptIds:[]}
    ];
    const topics = [
        {id:'collections',title:'Java 集合',stageId:'language',category:'Java 集合',chapters:[{id:'map',title:'Map',lessonIds:['xl-hash','xl-expand']},{id:'sequence',title:'线性集合',lessonIds:['xl-list']},{id:'concepts',title:'集合概念',lessonIds:['hashmap','list']}]},
        {id:'redis',title:'Redis',stageId:'data',category:'Redis',chapters:[{id:'cache',title:'缓存',lessonIds:['xl-redis']}]}
    ];
    topics.forEach(topic => topic.lessonIds = topic.chapters.flatMap(chapter => chapter.lessonIds));
    return {
        screen:'home',homeView:'map',atlas:{topics,byTopic:new Map(topics.map(topic=>[topic.id,topic])),lessons,byId:new Map(lessons.map(lesson=>[lesson.id,lesson])),stages:[{id:'language',title:'基础',topicIds:['collections']},{id:'data',title:'数据',topicIds:['redis']}]},
        index:{nodes:[node,other],byId:new Map([[node.id,node],[other.id,other]])},routes:[{id:'request',title:'一次请求',steps:[{id:'xl-redis',label:'缓存'},{id:'hashmap',label:'集合'},{id:'xl-expand',label:'扩容'}]}],routeId:null,topicId:'collections',selectedId:'xl-hash',query:'',learning:{entries:{}},readingState:{entries:{}},lastId:null,focused:false,panel:'read',content:{html:'<p>完整的小林讲解。</p><pre><code>int capacity = 16;</code></pre>',title:'HashMap 的结构'},contentStatus:'ready',saveLabel:'已保存',loadError:null,questionCount:8,category:'Java 集合',...overrides
    };
}
const render = overrides => load(view.render(fixture(overrides)));

test('home is a connected complete topic hierarchy with a separate learning route view', () => {
    const $ = render();
    assert.equal($('h1').text(),'Java 学习');
    assert.equal($('h1').attr('tabindex'),'-1');
    assert.equal($('.al-map-root').text(),'Java');
    assert.deepEqual($('.al-stage').map((_,el)=>$(el).attr('data-stage')).get(),['language','data']);
    assert.deepEqual($('.al-map-topics .al-topic').map((_,el)=>$(el).attr('data-id')).get(),['collections','redis']);
    assert.deepEqual($('.al-switch [data-mm-action="home-mode"]').map((_,el)=>$(el).text()).get(),['知识导图','学习路线']);
    assert.equal($('[data-mode="map"]').attr('aria-pressed'),'true');
    assert.equal($('#mindmapSearch').attr('type'),'search');
    assert.equal($('.mindmap-view').length,0,'controller owns the single outer root');
    assert.equal($('[data-learning-save]').length,0,'save state belongs next to learning state controls');
    assert.doesNotMatch($.text(),/先掌握这些|核心问题|我的导图|题库导航|从理解到|个专题|个知识点/);
});

test('home includes topics omitted from stage metadata instead of hiding their content', () => {
    const model = fixture();
    model.atlas.stages.pop();
    const $ = load(view.render(model));
    assert.equal($('.al-map-topics .al-topic[data-id="redis"]').length,1);
    assert.equal($('.al-topic').length,2);
});

test('continue row only links a known lesson and does not add a descriptive subtitle', () => {
    assert.equal(render({lastId:'hashmap'})('.al-continue button').attr('data-id'),'hashmap');
    assert.equal(render({lastId:'removed'})('.al-continue').length,0);
    assert.equal(render({lastId:'collections'})('.al-continue').length,0);
    assert.equal(render({lastId:'hashmap'})('.al-continue small').length,0);
});

test('routes display actual connected lesson steps in their given order', () => {
    const $ = render({homeView:'routes'});
    assert.equal($('.al-map').length,0);
    assert.equal($('.al-route h2').text(),'一次请求');
    assert.deepEqual($('.al-route-step').map((_,el)=>[$(el).attr('data-route')+':'+$(el).attr('data-id')]).get(),['request:xl-redis','request:hashmap','request:xl-expand']);
    assert.deepEqual($('.al-route-step').map((_,el)=>$(el).text()).get(),['缓存','集合','扩容']);
});

test('search covers source lessons and concepts with case-insensitive titles and explanations', () => {
    const title = render({query:'hAsHmAp'});
    assert.deepEqual(title('.al-search-results .al-lesson-link').map((_,el)=>title(el).attr('data-id')).get(),['xl-hash','hashmap']);
    assert.equal(render({query:'确定桶的位置'})('.al-search-results .al-lesson-link').attr('data-id'),'hashmap');
    assert.equal(render({query:'缓存穿透'})('.al-search-results .al-lesson-link').attr('data-id'),'xl-redis');
    assert.equal(render({query:'不存在的标题'})('.al-empty').length,1);
});

test('topic search is scoped and the complete directory opens one chapter by default', () => {
    const $ = render({screen:'topic'});
    assert.equal($('h1').text(),'Java 集合');
    assert.equal($('.al-chapter-map [data-mm-action="jump-chapter"]').length,3);
    assert.deepEqual($('.al-chapter-map button').map((_,el)=>$(el).attr('data-id')).get(),['map','sequence','concepts']);
    assert.equal($('.al-directory > details[open]').length,1);
    assert.equal($('.al-directory > details[open]').attr('id'),'al-chapter-map');
    assert.deepEqual($('.al-directory .al-lesson-link').map((_,el)=>$(el).attr('data-id')).get(),['xl-hash','xl-expand','xl-list','hashmap','list']);
    assert.equal($('#al-chapter-map').length,1);
    assert.equal(render({screen:'topic',query:'缓存穿透'})('.al-search-results .al-lesson-link').length,0);
    assert.equal(render({screen:'topic',query:'LinkedList'})('.al-search-results .al-lesson-link').attr('data-id'),'xl-list');
});

test('practice stays a single category shortcut and hides when the category has no questions', () => {
    const $ = render({screen:'topic'});
    assert.equal($('[data-mm-action="practice"]').length,1);
    assert.equal($('.al-practice').text(),'对应题型');
    assert.equal($('.al-practice').attr('title'),'Java 集合');
    assert.equal(render({screen:'topic',questionCount:0})('.al-practice').length,0);
});

test('source lesson displays full built HTML inline, with source content before optional concept supplements', () => {
    const $ = render({screen:'lesson'});
    assert.equal($('h1').text(),'HashMap 的结构');
    assert.equal($('.al-content > p').text(),'完整的小林讲解。');
    assert.equal($('.al-content pre code').text(),'int capacity = 16;');
    assert.equal($('.al-supplement').is('details:not([open])'),true);
    assert.equal($('.al-supplement > summary').text(),'理解补充');
    assert.match($('.al-supplement').text(),/通过哈希值确定桶的位置/);
    assert.equal($('.al-source-link').attr('href'),'https://example.org/hash');
    assert.equal($('.al-source-link').attr('rel'),'noopener noreferrer');
    const html = view.render(fixture({screen:'lesson'}));
    assert.ok(html.indexOf('class="al-content"') < html.indexOf('class="al-supplement"'));
    assert.equal($('.al-content.xl-prose').length,0,'reading typography is controlled by atlas styles');
});

test('lesson desktop and mobile directories both preserve every topic lesson and current location', () => {
    const $ = render({screen:'lesson'});
    for (const parent of ['.al-sidebar','.al-mobile-directory']) {
        assert.equal($(parent+' .al-lesson-link').length,5);
        assert.equal($(parent+' [aria-current="page"]').attr('data-id'),'xl-hash');
        assert.equal($(parent+' .al-chapter[open]').length,1);
        assert.ok($(parent+' .al-chapter[open]').find('[aria-current="page"]').length);
    }
    assert.equal($('.al-mobile-directory').is('details:not([open])'),true);
    assert.equal($('.al-mobile-directory > summary').text(),'目录');
    const ids = $('[id]').map((_,el)=>$(el).attr('id')).get();
    assert.equal(ids.length,new Set(ids).size,'desktop/mobile copies do not duplicate IDs');
    assert.equal($('[data-mm-action="focus"]').length,1);
    assert.equal($('#mindmapSearch').length,0);
});

test('chapter accordions use independent native groups and keep the selected chapter open', () => {
    const $ = render({screen:'lesson',selectedId:'hashmap'});
    const groups = [];
    for (const parent of ['.al-sidebar','.al-mobile-directory']) {
        const chapters = $(parent+' .al-directory > .al-chapter');
        const names = new Set(chapters.map((_,el)=>$(el).attr('name')).get());
        assert.equal(names.size,1);
        groups.push([...names][0]);
        assert.equal(chapters.filter('[open]').length,1);
        assert.equal(chapters.filter('[open]').attr('data-chapter-id'),'concepts');
        assert.ok(chapters.filter('[open]').attr('data-detail-key').endsWith('-concepts'));
        assert.equal(chapters.find('.al-lesson-link').length,5);
    }
    assert.deepEqual(groups,['sidebar-directory-collections','mobile-directory-collections']);
    const topic = render({screen:'topic',selectedId:null,activeChapterId:'sequence'});
    assert.equal(topic('.al-chapter[open]').attr('id'),'al-chapter-sequence');
    assert.equal(topic('.al-chapter[open]').attr('name'),'topic-directory-collections');
    assert.ok(!groups.includes(topic('.al-chapter[open]').attr('name')));
    const selectedWins = render({screen:'topic',selectedId:'hashmap',activeChapterId:'sequence'});
    assert.equal(selectedWins('.al-chapter[open]').attr('id'),'al-chapter-concepts');
    const unknown = render({screen:'topic',selectedId:'missing',activeChapterId:'removed'});
    assert.equal(unknown('.al-chapter[open]').attr('id'),'al-chapter-map');
    const otherTopic = render({screen:'topic',topicId:'redis',selectedId:'hashmap',activeChapterId:'sequence'});
    assert.equal(otherTopic('.al-chapter[open]').attr('id'),'al-chapter-cache');
});

test('details have stable unique keys across duplicate directories and content updates', () => {
    const before = render({screen:'lesson'});
    const keys = before('details').map((_,el)=>before(el).attr('data-detail-key')).get();
    assert.equal(keys.length,before('details').length);
    assert.equal(keys.length,new Set(keys).size);
    assert.equal(before('.al-mobile-directory').attr('data-detail-key'),'mobile-directory-collections');
    assert.equal(before('.al-sidebar .al-chapter').first().attr('data-detail-key'),'sidebar-chapter-collections-map');
    assert.equal(before('.al-mobile-directory .al-chapter').first().attr('data-detail-key'),'mobile-chapter-collections-map');
    assert.equal(before('.al-supplement').attr('data-detail-key'),'supplement-xl-hash');
    const after = render({screen:'lesson',focused:true,readingState:{entries:{'xl-hash':{done:true,note:'新笔记'}}}});
    assert.deepEqual(after('details').map((_,el)=>after(el).attr('data-detail-key')).get(),keys);
    const topic = render({screen:'topic'});
    assert.equal(topic('.al-chapter').first().attr('data-detail-key'),'topic-chapter-collections-map');
    assert.ok(topic('.al-chapter').toArray().every(el=>!keys.includes(topic(el).attr('data-detail-key'))));
    const next = render({screen:'lesson',selectedId:'xl-list'});
    assert.equal(next('.al-mobile-directory').attr('data-detail-key'),before('.al-mobile-directory').attr('data-detail-key'));
});

test('native disclosure labels and button semantics remain accessible without the removed note editor', () => {
    const $ = render({screen:'lesson'});
    for (const element of $('details').toArray()) {
        assert.equal($(element).children('summary').length,1);
        assert.ok($(element).children('summary').text().trim());
    }
    for (const element of $('button').toArray()) {
        assert.equal($(element).attr('type'),'button');
        assert.ok($(element).text().trim() || $(element).attr('aria-label'));
    }
    assert.equal($('label[for="mindmapLearningNote"],textarea').length,0);
    assert.equal($('[aria-current="page"]').length,2);
    assert.equal($('.al-switch').attr('role'),'group');
});

test('loading and retry states retain the directory and progress controls without a note editor', () => {
    const loading = render({screen:'lesson',content:null,contentStatus:'loading'});
    assert.equal(loading('.al-content-loading[role="status"]').length,1);
    assert.equal(loading('.al-content').length,0);
    assert.equal(loading('#mindmapLearningNote,textarea').length,0);
    assert.equal(loading('[data-mm-action="reading-state"]').length,1);
    const error = render({screen:'lesson',content:null,contentStatus:'error'});
    assert.equal(error('.al-content-error[role="alert"]').length,1);
    assert.equal(error('[data-mm-action="retry"]').text(),'重试');
    assert.equal(error('.al-sidebar .al-lesson-link').length,5);
});

test('concept lessons retain full explanations, code, pitfalls and valid related knowledge', () => {
    const $ = render({screen:'lesson',selectedId:'hashmap'});
    assert.deepEqual($('.al-content .al-concept-body > p').map((_,el)=>$(el).text()).get(),['通过哈希值确定桶的位置。','冲突的键需要比较相等性。','并发写入需要同步措施。']);
    assert.equal($('.al-content pre code').text(),'Map<String, Integer> map = new HashMap<>();');
    assert.equal($('.al-content .al-related button').attr('data-id'),'list');
    assert.deepEqual($('.al-reading-links button').map((_,el)=>$(el).attr('data-id')).get(),['xl-hash','xl-expand']);
    assert.equal($('.al-content .al-sources a').attr('href'),'https://example.org/map');
    assert.equal($('.al-supplement').length,0);
});

test('source done state uses its Xiaolin record while saved notes remain untouched and hidden', () => {
    const model = fixture({screen:'lesson',readingState:{entries:{'xl-hash':{done:true,note:'我的小林笔记'}}},learning:{entries:{'xl-hash':{note:'错误的记录'},hashmap:{status:'mastered'}}}});
    const before = JSON.stringify({readingState:model.readingState,learning:model.learning});
    const $ = load(view.render(model));
    assert.equal($('#mindmapLearningNote,textarea,.al-notes').length,0);
    assert.doesNotMatch($.text(),/我的理解|我的小林笔记|错误的记录/);
    assert.equal(JSON.stringify({readingState:model.readingState,learning:model.learning}),before);
    assert.equal($('[data-mm-action="reading-state"]').attr('aria-pressed'),'true');
    assert.equal($('[data-mm-action="lesson-state"]').length,0);
    assert.equal($('.al-learning-state [data-learning-save]').text(),'已保存');
    assert.equal($('.al-sidebar [data-id="xl-hash"] .al-state').attr('aria-label'),'已读懂');
});

test('concept mastery preserves storage values and never exposes or edits existing note text', () => {
    const note = '</textarea><script>unsafe</script> & 我的回答';
    const model = fixture({screen:'lesson',selectedId:'hashmap',learning:{entries:{hashmap:{status:'learning',note}}}});
    const before = JSON.stringify(model.learning);
    const $ = load(view.render(model));
    assert.equal($('#mindmapLearningNote,textarea,.al-notes').length,0);
    assert.doesNotMatch($.text(),/unsafe|我的回答|我的理解/);
    assert.equal(JSON.stringify(model.learning),before);
    assert.equal($('script').length,0);
    assert.deepEqual($('.al-study-state button').map((_,el)=>$(el).attr('data-status')).get(),['new','learning','mastered']);
    assert.equal($('.al-study-state [aria-pressed="true"]').attr('data-status'),'learning');
    assert.equal($('[data-mm-action="reading-state"]').length,0);
});

test('learning state keeps compact save or error feedback escaped', () => {
    const $ = render({screen:'lesson',saveLabel:'保存失败：<存储空间不足>'});
    assert.equal($('.al-learning-state [data-learning-save][role="status"]').text(),'保存失败：<存储空间不足>');
    assert.equal($('.al-learning-state [data-learning-save]').children().length,0);
    assert.equal($('.al-learning-state [data-mm-action="reading-state"]').text(),'标记读懂');
    assert.equal($('.al-learning-state textarea').length,0);
});

test('oral recall hides explanation and notes and offers a compact return to the explanation', () => {
    const $ = render({screen:'lesson',panel:'recall',readingState:{entries:{'xl-hash':{note:'我来复述'}}}});
    assert.equal($('h1').text(),'HashMap 的结构');
    assert.equal($('.al-content, .al-supplement, .al-content-loading').length,0);
    assert.equal($('#mindmapLearningNote,textarea').length,0);
    assert.doesNotMatch($.text(),/我来复述|我的理解/);
    assert.equal($('.al-recall [data-mm-action="panel"]').text(),'查看讲解');
    assert.equal($('.al-recall [data-mm-action="panel"]').attr('data-panel'),'read');
    assert.equal($('[data-panel="recall"]').attr('aria-pressed'),'true');
    assert.equal($('.al-lesson-nav').length,1);
    assert.doesNotMatch($.text(),/参考答案|模板|试着自己讲/);
});

test('ordinary previous/next includes every lesson and crosses full chapter boundaries', () => {
    const $ = render({screen:'lesson',selectedId:'xl-expand'});
    assert.deepEqual($('.al-lesson-nav button').map((_,el)=>$(el).attr('data-id')).get(),['xl-hash','xl-list']);
    const last = render({screen:'lesson',selectedId:'list'});
    assert.equal(last('.al-lesson-nav [data-mm-action="lesson-jump"]').attr('data-id'),'hashmap');
    assert.equal(last('.al-lesson-nav [data-mm-action="lesson-topic"]').attr('data-id'),'collections');
});

test('route navigation retains route order across topics without replacing the complete directory', () => {
    const $ = render({screen:'lesson',selectedId:'hashmap',routeId:'request'});
    assert.deepEqual($('.al-lesson-nav button').map((_,el)=>$(el).attr('data-id')).get(),['xl-redis','xl-expand']);
    assert.equal($('.al-lesson-nav [data-mm-action="route-step"][data-route="request"]').length,2);
    assert.equal($('.al-sidebar .al-lesson-link').length,5);
    const unrelated = render({screen:'lesson',selectedId:'xl-list',routeId:'request'});
    assert.equal(unrelated('.al-lesson-nav [data-mm-action="route-step"]').length,0);
    assert.equal(unrelated('.al-lesson-nav [data-mm-action="lesson-jump"]').length,2);
});

test('an active route exposes all ordered steps and current position above the lesson heading', () => {
    const $ = render({screen:'lesson',selectedId:'hashmap',routeId:'request'});
    assert.equal($('.al-current-route').is('details:not([open])'),true);
    assert.equal($('.al-current-route').attr('data-detail-key'),'route-request');
    assert.equal($('.al-current-route > summary').text(),'一次请求');
    assert.deepEqual($('.al-current-route .al-route-step').map((_,el)=>$(el).attr('data-id')).get(),['xl-redis','hashmap','xl-expand']);
    assert.equal($('.al-current-route [aria-current="step"]').attr('data-id'),'hashmap');
    assert.equal($('.al-current-route .is-current').length,1);
    assert.equal($('.al-current-route .is-current').attr('data-route'),'request');
    assert.equal($('.al-mobile-directory').next().is('.al-current-route'),true);
    assert.equal($('.al-current-route').next().is('.al-lesson-header'),true);
    const focused = render({screen:'lesson',selectedId:'hashmap',routeId:'request',focused:true});
    assert.equal(focused('.al-current-route').attr('data-detail-key'),'route-request');
    assert.equal(focused('.al-current-route [aria-current="step"]').attr('data-id'),'hashmap');
    const keys = focused('details').map((_,el)=>focused(el).attr('data-detail-key')).get();
    assert.equal(keys.length,new Set(keys).size);
    assert.equal(render({screen:'lesson',selectedId:'xl-list',routeId:'request'})('.al-current-route').length,0);
    assert.equal(render({screen:'lesson',selectedId:'hashmap',routeId:'missing'})('.al-current-route').length,0);
});

test('route disclosure escapes route labels and attributes', () => {
    const model = fixture({screen:'lesson',selectedId:'hashmap'});
    model.routeId = model.routes[0].id = 'request" onclick="unsafe';
    model.routes[0].title = '<img src=x>';
    model.routes[0].steps[1].label = '<script>unsafe</script>';
    const $ = load(view.render(model));
    assert.equal($('.al-current-route > summary').text(),'<img src=x>');
    assert.equal($('.al-current-route [aria-current="step"]').text(),'<script>unsafe</script>');
    assert.equal($('.al-current-route').attr('data-detail-key'),'route-request" onclick="unsafe');
    assert.equal($('.al-current-route img,.al-current-route script,.al-current-route [onclick]').length,0);
});

test('focused reading exposes one explicit exit in the direct top toolbar', () => {
    const $ = render({screen:'lesson',focused:true});
    assert.equal($('body > .al-topbar').length,1);
    assert.equal($('[data-mm-action="focus-exit"]').text(),'退出专注');
    assert.equal($('[data-learning-focus-initial]').length,1);
    assert.equal($('[data-mm-action="focus"]').length,0);
});

test('dynamic labels and unsafe source links are escaped while trusted built prose remains HTML', () => {
    const model = fixture({screen:'lesson',selectedId:'hashmap'});
    const node = model.atlas.byId.get('hashmap').concept;
    model.atlas.byId.get('hashmap').title = '<img src=x onerror=alert(1)>';
    node.sources.push({title:'unsafe',url:'javascript:alert(1)'});
    node.example = '<script>bad</script>';
    const $ = load(view.render(model));
    assert.equal($('img,script').length,0);
    assert.equal($('h1').text(),'<img src=x onerror=alert(1)>');
    assert.equal($('.al-content pre code').text(),'<script>bad</script>');
    assert.equal($('.al-sources a').length,1);
    const sourceModel = fixture({screen:'lesson'});
    sourceModel.atlas.byId.get('xl-hash').source = 'javascript:alert(1)';
    assert.equal(load(view.render(sourceModel))('.al-source-link').length,0);
    const searched = render({query:'"><svg onload=alert(1)>'});
    assert.equal(searched('svg').length,0);
    assert.equal(searched('#mindmapSearch').val(),'"><svg onload=alert(1)>');
});

test('invalid navigation falls back to the full map and errors remain visible', () => {
    const $ = render({screen:'lesson',selectedId:'missing',loadError:new Error('损坏的 <JSON>')});
    assert.equal($('.al-map .al-topic').length,2);
    assert.equal($('.al-error[role="alert"]').length,1);
    assert.match($('.al-error').text(),/损坏的 <JSON>/);
    assert.equal($('.al-error JSON').length,0);
    assert.equal(render({screen:'topic',topicId:'missing'})('.al-map').length,1);
});

test('real curriculum view exposes all 18 topics and all 1096 lessons with no curated cutoff', () => {
    const Core = require('../java-learning-core.js');
    const Atlas = require('../java-learning-atlas.js');
    const index = Core.createIndex([require('../data/java-learning-language.js'),require('../data/java-learning-runtime.js')]);
    const atlas = Atlas.createIndex(index,require('../data/xiaolin/catalog.js'),require('../data/java-learning-xiaolin.js'));
    const model = fixture({atlas,index});
    const home = load(view.render(model));
    assert.equal(home('.al-map .al-topic').length,18);
    const ids = [];
    for (const topic of atlas.topics) {
        const $ = load(view.render({...model,screen:'topic',topicId:topic.id}));
        assert.equal($('.al-chapter').length,topic.chapters.length);
        assert.equal($('.al-chapter[open]').length,1);
        ids.push(...$('.al-directory .al-lesson-link').map((_,el)=>$(el).attr('data-id')).get());
    }
    assert.equal(ids.length,1096);
    assert.equal(new Set(ids).size,1096);
    assert.equal(ids.filter(id=>atlas.byId.get(id).sourceType==='xiaolin').length,956);
    for (const route of require('../data/java-learning-routes.js')) {
        const $ = load(view.render({...model,routes:[route],routeId:route.id,screen:'lesson',selectedId:route.steps[0].id}));
        assert.deepEqual($('.al-current-route .al-route-step').map((_,el)=>$(el).attr('data-id')).get(),route.steps.map(step=>step.id));
        assert.equal($('.al-current-route .al-route-step').length,10);
    }
});
