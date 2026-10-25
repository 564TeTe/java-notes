const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const lessons = [
    ...require('../data/java-learning-language.js'),
    ...require('../data/java-learning-runtime.js')
];
const byId = new Map(lessons.map(lesson => [lesson.id, lesson]));
const xiaolinCatalog = require('../data/xiaolin/catalog.js');
const xiaolinSections = new Map(xiaolinCatalog.topics.flatMap(topic => topic.sections.map(section => [section.id, section])));
const pathsFile = path.join(__dirname, '../data/java-interview-paths.js');
const loadPaths = () => require(pathsFile);

test('interview learning covers every existing topic with a deliberate, valid concept sequence', () => {
    const data = loadPaths();
    const topicIds = lessons.filter(lesson => lesson.parentId === 'java-root').map(lesson => lesson.id);
    assert.deepEqual(data.topics.map(topic => topic.id).sort(), topicIds.sort());
    const essentials = [];
    for (const topic of data.topics) {
        assert.ok(topic.title.trim());
        assert.ok(topic.description.length >= 8 && topic.description.length <= 45, topic.id);
        assert.ok(topic.goal.length >= 12, topic.id);
        assert.ok(topic.essentials.length >= 2, topic.id);
        for (const id of topic.essentials) {
            assert.ok(byId.has(id), `${id} must be an existing concept`);
            let node = byId.get(id);
            while (node && node.parentId !== 'java-root') node = byId.get(node.parentId);
            assert.equal(node?.id, topic.id, `${id} must belong to ${topic.id}`);
            assert.ok(data.concepts[id], `${id} needs an interview card`);
            essentials.push(id);
        }
    }
    assert.equal(new Set(essentials).size, essentials.length, 'a concept occurs once in the learning path');
    assert.deepEqual(Object.keys(data.concepts).sort(), essentials.sort(), 'all cards are reachable from a topic');
    assert.ok(essentials.length >= 24 && essentials.length <= 32);
});

test('each interview card offers an explicit question, concise answer points and two answered follow-ups', () => {
    for (const [id, card] of Object.entries(loadPaths().concepts)) {
        assert.match(card.question, /[？?]$/, id);
        assert.ok(card.answer.length >= 3 && card.answer.length <= 5, id);
        assert.equal(new Set(card.answer).size, card.answer.length, id);
        card.answer.forEach(point => assert.ok(typeof point === 'string' && point.length >= 12, id));
        assert.equal(card.followUps.length, 2, id);
        assert.notEqual(card.followUps[0].question, card.followUps[1].question, id);
        card.followUps.forEach(followUp => {
            assert.match(followUp.question, /[？?]$/, id);
            assert.ok(followUp.answer.length >= 15, id);
        });
    }
});

test('topic reading entrances target real Xiaolin lessons without inventing engineering coverage', () => {
    const topics = loadPaths().topics;
    for (const topic of topics) {
        assert.ok(Array.isArray(topic.readings), topic.id);
        assert.equal(new Set(topic.readings).size, topic.readings.length, topic.id);
        for (const id of topic.readings) {
            const section = xiaolinSections.get(id);
            assert.equal(section?.kind, 'lesson', `${topic.id}: ${id} must open an actual lesson`);
            const owner = xiaolinCatalog.topics.find(item => item.sections.some(item => item.id === id));
            assert.ok(owner.chapters.some(chapter => chapter.id === section.chapterId && chapter.sectionIds.includes(id)));
        }
        if (topic.id === 'engineering') assert.deepEqual(topic.readings, []);
        else assert.ok(topic.readings.length > 0, topic.id);
    }
    const io = topics.find(topic => topic.id === 'io');
    const chapters = io.readings.map(id => {
        const section = xiaolinSections.get(id);
        return xiaolinCatalog.topics.flatMap(topic => topic.chapters).find(chapter => chapter.id === section.chapterId).title;
    });
    assert.deepEqual(chapters.sort(), ['I/O', '异常'].sort(), 'the combined topic supports both exceptions and I/O');
});

test('interview metadata is plain text and does not claim unsupported question frequency', () => {
    const walk = value => {
        if (typeof value === 'string') {
            assert.doesNotMatch(value, /<\/?[a-z][^>]*>|javascript:|\bon\w+\s*=/i);
            assert.doesNotMatch(value, /必考|命中率|面试频率|\d+%/);
        } else if (Array.isArray(value)) value.forEach(walk);
        else if (value && typeof value === 'object') Object.values(value).forEach(walk);
    };
    walk(loadPaths());
});

test('browser and CommonJS exports provide the same interview paths without changing existing lessons', () => {
    const before = JSON.stringify(lessons);
    const window = {};
    vm.runInNewContext(fs.readFileSync(pathsFile, 'utf8'), { window });
    assert.deepEqual(JSON.parse(JSON.stringify(window.JavaInterviewPaths)), loadPaths());
    assert.equal(JSON.stringify(lessons), before);
});
