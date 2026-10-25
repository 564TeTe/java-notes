const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const Core = require('../java-learning-core.js');
const catalog = require('../data/xiaolin/catalog.js');
const mapping = require('../data/java-learning-xiaolin.js');
const concepts = Core.createIndex([
    require('../data/java-learning-language.js'),
    require('../data/java-learning-runtime.js')
]);
const atlasFile = path.join(__dirname, '..', 'java-learning-atlas.js');
const Atlas = fs.existsSync(atlasFile) ? require(atlasFile) : {};

function create(overrides = {}) {
    assert.equal(typeof Atlas.createIndex, 'function');
    return Atlas.createIndex(overrides.concepts || concepts, overrides.catalog || catalog, overrides.mapping || mapping);
}

test('the atlas exposes every Xiaolin section and every original concept without a curated cutoff', () => {
    const index = create();
    assert.equal(index.topics.length, 18);
    assert.equal(index.lessons.length, 1096);
    assert.equal(index.lessons.filter(item => item.sourceType === 'xiaolin').length, 956);
    assert.equal(index.lessons.filter(item => item.sourceType === 'concept').length, 140);
    assert.equal(index.byId.size, index.lessons.length);
    assert.equal(new Set(index.lessons.map(item => item.id)).size, index.lessons.length);
    for (const topic of catalog.topics) {
        const target = index.byTopic.get('xl-topic:' + topic.id);
        assert.equal(target.sourceTopicId, topic.id);
        for (const section of topic.sections) {
            const lesson = index.byId.get(section.id);
            assert.equal(lesson.sourceTopicId, topic.id);
            assert.equal(lesson.sourceSectionId, section.id);
            assert.equal(lesson.sourceType, 'xiaolin');
            assert.equal(lesson.title, section.title);
            assert.equal(lesson.source, section.source);
            assert.equal(lesson.kind, section.kind);
        }
    }
    assert.equal(index.lessons.filter(item => item.kind === 'reference').length, 11);
});

test('stable original concept IDs remain addressable in the appropriate complete topic', () => {
    const index = create();
    const targets = {
        language: 'java', oop: 'java', io: 'java', functional: 'java', collections: 'collections',
        concurrency: 'juc', jvm: 'jvm', 'data-access': 'mysql', 'web-spring': 'spring'
    };
    assert.equal(index.byId.has('java-root'), false);
    for (const topic of concepts.topics) {
        assert.equal(index.byId.has(topic.id), false);
        const targetId = topic.id === 'engineering' ? 'concept-topic:engineering' : 'xl-topic:' + targets[topic.id];
        const target = index.byTopic.get(targetId);
        assert.equal(Atlas.topicFor(index, topic.id), target);
        const chapter = target.chapters.find(item => item.id === 'concept-chapter:' + topic.id);
        assert.equal(chapter.title, topic.title);
        for (const id of chapter.lessonIds) {
            const lesson = index.byId.get(id);
            assert.equal(lesson.concept, concepts.byId.get(id));
            assert.equal(lesson.sourceType, 'concept');
            assert.equal(lesson.topicId, target.id);
            assert.equal(Atlas.topicFor(index, id), target);
        }
    }
});

test('all lessons occur once in a nonempty chapter and retain catalog chapter metadata', () => {
    const index = create();
    const grouped = [];
    for (const topic of index.topics) {
        assert.equal(Atlas.topicFor(index, topic.id), topic);
        assert.deepEqual(topic.lessonIds, topic.chapters.flatMap(chapter => chapter.lessonIds));
        for (const chapter of topic.chapters) {
            assert.ok(chapter.lessonIds.length > 0);
            for (const id of chapter.lessonIds) {
                grouped.push(id);
                assert.equal(index.byId.get(id).chapterId, chapter.id);
                assert.equal(index.byId.get(id).topicId, topic.id);
            }
        }
    }
    assert.equal(grouped.length, index.lessons.length);
    assert.equal(new Set(grouped).size, index.lessons.length);
    for (const source of catalog.topics) for (const chapter of source.chapters) {
        const target = index.byTopic.get('xl-topic:' + source.id).chapters.find(item => item.id === chapter.id);
        assert.equal(target.title, chapter.title);
        assert.equal(target.source, chapter.source);
        assert.equal(target.minutes, chapter.minutes);
        assert.deepEqual(target.lessonIds, chapter.sectionIds);
    }
});

test('five route stages reach every topic exactly once in the intended learning order', () => {
    const index = create();
    assert.deepEqual(index.stages.map(stage => stage.id), ['language', 'runtime', 'application', 'architecture', 'engineering']);
    assert.deepEqual(index.stages.map(stage => stage.title), ['基础', '运行', '应用', '架构', '工程']);
    assert.deepEqual(index.stages[0].topicIds, ['xl-topic:java', 'xl-topic:collections', 'xl-topic:data']);
    assert.deepEqual(index.stages[4].topicIds, ['concept-topic:engineering', 'xl-topic:linux', 'xl-topic:git', 'xl-topic:docker', 'xl-topic:win']);
    const reachable = index.stages.flatMap(stage => stage.topicIds);
    assert.equal(new Set(reachable).size, index.topics.length);
    assert.equal(reachable.length, index.topics.length);
    assert.deepEqual(index.topics.map(topic => topic.id), reachable);
    for (const stage of index.stages) for (const id of stage.topicIds) assert.equal(index.byTopic.get(id).stageId, stage.id);
});

test('source readings link only to explicitly mapped real concepts, without broad parent inference', () => {
    const alteredMapping = { ...mapping, language: [catalog.topics[0].sections[0].id], nonexistent: [catalog.topics[0].sections[0].id] };
    alteredMapping['language-types'] = [...mapping['language-types'], mapping['language-types'][0], 'missing-section'];
    const index = create({ mapping: alteredMapping });
    for (const lesson of index.lessons.filter(item => item.sourceType === 'xiaolin')) {
        const expected = concepts.nodes.filter(node => node.parentId && node.parentId !== 'java-root' &&
            alteredMapping[node.id]?.includes(lesson.id)).map(node => node.id);
        assert.deepEqual(lesson.conceptIds, expected);
        for (const id of lesson.conceptIds) assert.equal(index.byId.get(id).sourceType, 'concept');
    }
    assert.ok(index.byId.get(mapping['language-types'][0]).conceptIds.includes('language-types'));
});

test('explicit readingIds supplement valid mappings without duplicating or inventing links', () => {
    const sectionId = catalog.topics[0].sections[0].id;
    const nodes = concepts.nodes.map(node => node.id === 'language-types' ? { ...node,
        readingIds: [sectionId, sectionId, mapping['language-types'][0], 'missing-section'] } : node);
    const extended = { ...concepts, nodes, byId: new Map(nodes.map(node => [node.id, node])) };
    const index = create({ concepts: extended });
    assert.deepEqual(index.byId.get(sectionId).conceptIds, ['language-types']);
    assert.deepEqual(index.byId.get('language-types').readingIds, [...mapping['language-types'], sectionId]);
});

test('practice categories match existing bank categories, and unsupported categories remain null', () => {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'data/question-bank.js'), 'utf8'), sandbox);
    const categories = new Set(sandbox.window.QUESTION_BANK_DATA.questions.map(item => item.category));
    const index = create();
    for (const topic of index.topics) if (topic.category !== null) assert.ok(categories.has(topic.category), topic.category);
    assert.equal(index.byTopic.get('xl-topic:os').category, '操作系统 / Linux');
    assert.equal(index.byTopic.get('xl-topic:systemdesign').category, '场景题 / 故障排查');
    assert.equal(index.byTopic.get('xl-topic:git').category, null);
    assert.equal(index.byTopic.get('xl-topic:docker').category, null);
    assert.equal(index.byTopic.get('concept-topic:engineering').category, null);
});

test('search finds title, topic and concept explanations, without restricting results to selected essentials', () => {
    const index = create();
    assert.ok(Atlas.search(index, 'hashmap').some(item => item.id === 'collections-hashmap'));
    assert.ok(Atlas.search(index, 'HASHMAP').some(item => item.sourceType === 'xiaolin'));
    assert.ok(Atlas.search(index, 'Lambda').some(item => item.sourceType === 'concept'));
    assert.ok(Atlas.search(index, 'Git 版本管理').every(item => item.topicId === 'xl-topic:git'));
    assert.deepEqual(Atlas.search(index, '不存在的概念词条xyzzy'), []);
    assert.equal(Atlas.search(index, '  ').length, index.lessons.length);
    assert.ok(Atlas.search(index, 'Spring').length > 30);
});

test('previous and next traverse full topic chapters and stop at topic boundaries', () => {
    const index = create();
    const topic = index.byTopic.get('xl-topic:java');
    const first = Atlas.previousNext(index, topic.lessonIds[0]);
    assert.equal(first.previous, null);
    assert.equal(first.next.id, topic.lessonIds[1]);
    assert.equal(first.index, 0);
    assert.equal(first.total, topic.lessonIds.length);
    const last = Atlas.previousNext(index, topic.lessonIds.at(-1));
    assert.equal(last.previous.id, topic.lessonIds.at(-2));
    assert.equal(last.next, null);
    const boundary = topic.chapters[0].lessonIds.at(-1);
    assert.equal(Atlas.previousNext(index, boundary).next.id, topic.chapters[1].lessonIds[0]);
    assert.deepEqual(Atlas.previousNext(index, 'missing'), { previous: null, next: null, index: -1, total: 0 });
    assert.equal(Atlas.topicFor(index, 'missing'), null);
});

test('index construction leaves source catalog and mapping unchanged and is usable as a browser UMD', () => {
    const before = JSON.stringify({ catalog, mapping });
    create();
    assert.equal(JSON.stringify({ catalog, mapping }), before);
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(atlasFile, 'utf8'), sandbox);
    assert.equal(typeof sandbox.window.JavaLearningAtlas.createIndex, 'function');
    assert.equal(sandbox.window.JavaLearningAtlas.createIndex(concepts, catalog, mapping).lessons.length, 1096);
});
