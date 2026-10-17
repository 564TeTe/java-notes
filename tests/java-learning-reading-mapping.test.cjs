const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const catalog = require('../data/xiaolin/catalog.js');
const lessons = [
    ...require('../data/java-learning-language.js'),
    ...require('../data/java-learning-runtime.js')
];
const mappingFile = path.join(__dirname, '../data/java-learning-xiaolin.js');
const mapping = fs.existsSync(mappingFile) ? require(mappingFile) : {};
const sections = new Map(catalog.topics.flatMap(topic => topic.sections.map(section => [section.id, { ...section, topicId: topic.id }])));
const payloads = new Map(catalog.topics.flatMap(topic => require('../data/xiaolin/' + topic.id + '.json').chapters.flatMap(chapter => chapter.sections).map(section => [section.id, section])));

test('curated readings resolve real concepts to available lesson bodies without duplicate links', () => {
    assert.ok(Object.keys(mapping).length, 'the curated mapping must exist');
    const conceptIds = new Set(lessons.map(node => node.id));
    for (const [conceptId, ids] of Object.entries(mapping)) {
        assert.ok(conceptIds.has(conceptId), 'unknown concept: ' + conceptId);
        assert.ok(Array.isArray(ids) && ids.length >= 1 && ids.length <= 5, conceptId);
        assert.equal(new Set(ids).size, ids.length, 'duplicate reading: ' + conceptId);
        for (const id of ids) {
            assert.equal(sections.get(id)?.kind, 'lesson', conceptId + ' -> ' + id);
            assert.equal(payloads.get(id)?.kind, 'lesson', 'missing offline lesson: ' + id);
            assert.ok(payloads.get(id).markdown.trim().length > 40, 'empty lesson: ' + id);
        }
    }
});

test('browser and CommonJS builds expose the same curated IDs', () => {
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(mappingFile, 'utf8'), context);
    assert.deepEqual(JSON.parse(JSON.stringify(context.window.JAVA_LEARNING_XIAOLIN)), mapping);
});

test('links are curated by subject and never drift into unrelated catalogs', () => {
    const allowedTopics = {
        language: ['java', 'jvm'], oop: ['java'], collections: ['collections', 'java'],
        io: ['java', 'jvm'], functional: ['java'], concurrency: ['juc', 'collections', 'java', 'os'],
        jvm: ['jvm', 'java'], 'data-access': ['mysql', 'spring'], 'web-spring': ['spring', 'network'], engineering: ['java', 'jvm']
    };
    for (const [conceptId, ids] of Object.entries(mapping)) {
        const family = Object.keys(allowedTopics).find(key => conceptId.startsWith(key + '-'));
        assert.ok(family, 'overview nodes aggregate descendants instead of attaching chapter dumps');
        for (const id of ids) assert.ok(allowedTopics[family].includes(sections.get(id).topicId), conceptId + ' -> ' + id);
    }
    for (const id of ['language-text', 'io-charset', 'io-files', 'oop-sealed', 'data-access-orm',
        'engineering-maven-dependencies', 'engineering-unit-tests', 'functional-capture', 'functional-lazy']) {
        assert.equal(mapping[id], undefined, 'unsupported concepts must not receive filler readings: ' + id);
    }
});

test('HashMap lookup, sizing and resizing have distinct exact supporting sections', () => {
    assert.ok(mapping['collections-hashmap'].includes('xl-collections-85bbf0955f431477'));
    assert.ok(mapping['collections-hashmap-lookup'].includes('xl-collections-c508a2deeca94341'));
    assert.ok(mapping['collections-hashmap-capacity'].includes('xl-collections-6287ff9e6647ad69'));
    assert.ok(mapping['collections-resize'].includes('xl-collections-aee02ec8ac4d3a6c'));
    assert.ok(mapping['concurrency-concurrent-map-resize'].includes('xl-collections-09eb239ca8ccfe5a'));
    assert.ok(mapping['concurrency-concurrent-map-atomic'].includes('xl-collections-4724cf7d1238a223'));
});

test('AQS subtopics link to text that actually explains state, queueing and parking', () => {
    for (const [conceptId, content] of [
        ['concurrency-aqs', /AbstractQueuedSynchronizer/],
        ['concurrency-aqs-state', /state/],
        ['concurrency-aqs-queue', /等待队列/],
        ['concurrency-park', /LockSupport\.park/],
        ['concurrency-aqs-shared', /共享模式/],
        ['concurrency-condition', /Condition/]
    ]) {
        assert.ok(mapping[conceptId]?.length, conceptId);
        assert.match(mapping[conceptId].map(id => payloads.get(id).markdown).join('\n'), content, conceptId);
    }
    assert.ok(mapping['concurrency-executor-flow'].includes('xl-juc-68ecbc23e7d40dfc'));
    assert.ok(mapping['concurrency-executor-rejection'].includes('xl-juc-0384d8c79c0c240c'));
    assert.ok(mapping['concurrency-executor-sizing'].includes('xl-juc-164587b1538717bf'));
});

test('JVM mechanisms and diagnostic concepts point to precise readings', () => {
    const expected = {
        'jvm-gc-roots': 'xl-jvm-f99ee6617a26a227',
        'jvm-remembered-set': 'xl-jvm-70014dcb1f392365',
        'jvm-concurrent-marking': 'xl-jvm-f1abcd36a1849989',
        'jvm-zgc': 'xl-jvm-1d70d9e7874547e4',
        'jvm-allocation': 'xl-jvm-c42bec61a8a1dc9e',
        'jvm-references': 'xl-jvm-0491da874c760dcb',
        'jvm-oom': 'xl-jvm-2edd0ab8c606cbdb',
        'jvm-cpu-diagnosis': 'xl-jvm-9a41c9ea95b56aaa'
    };
    for (const [conceptId, sectionId] of Object.entries(expected)) assert.ok(mapping[conceptId]?.includes(sectionId), conceptId);
});

test('database transactions and Spring transaction advice remain different readings', () => {
    assert.ok(mapping['data-access-transaction'].includes('xl-mysql-349b3941a4a4eab9'));
    assert.ok(mapping['web-spring-transaction'].includes('xl-spring-6cf00a2fd10d3c20'));
    assert.ok(mapping['web-spring-proxy'].includes('xl-spring-c55043ee6273a1ed'));
    assert.match(mapping['oop-erasure'].map(id => payloads.get(id).markdown).join('\n'), /类型擦除/);
    assert.match(mapping['oop-wildcards'].map(id => payloads.get(id).markdown).join('\n'), /\? super Integer/);
});
