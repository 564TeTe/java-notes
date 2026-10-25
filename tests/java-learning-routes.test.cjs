const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const routes = require('../data/java-learning-routes.js');
const coreLessons = [
    ...require('../data/java-learning-language.js'),
    ...require('../data/java-learning-runtime.js')
];
const coreById = new Map(coreLessons.map(lesson => [lesson.id, lesson]));
const catalog = require('../data/xiaolin/catalog.js');
const sections = new Map(catalog.topics.flatMap(topic => topic.sections.map(section => [section.id, { ...section, topicId: topic.id }])));

function domain(id) {
    if (sections.has(id)) return `xiaolin:${sections.get(id).topicId}`;
    let node = coreById.get(id);
    while (node && node.parentId !== 'java-root') node = coreById.get(node.parentId);
    return node && `core:${node.id}`;
}

test('learning routes open real lessons and use unique, concise identifiers and labels', () => {
    assert.equal(routes.length, 6);
    assert.equal(new Set(routes.map(route => route.id)).size, routes.length);
    for (const route of routes) {
        assert.match(route.id, /^[a-z][a-z-]+$/);
        assert.ok(route.title.length > 1 && route.title.length <= 16, route.id);
        assert.ok(route.steps.length >= 6 && route.steps.length <= 10, route.id);
        assert.equal(new Set(route.steps.map(step => step.id)).size, route.steps.length, route.id);
        for (const step of route.steps) {
            assert.ok(coreById.has(step.id) || sections.has(step.id), `${route.id}: unknown ${step.id}`);
            if (sections.has(step.id)) assert.equal(sections.get(step.id).kind, 'lesson', step.id);
            if (coreById.has(step.id)) assert.notEqual(coreById.get(step.id).parentId, 'java-root', step.id);
            assert.ok(step.label.length > 1 && step.label.length <= 18, step.id);
            assert.doesNotMatch(step.label, /<|>|必考|命中率|先掌握|计划|\d+%/);
        }
    }
});

test('each route connects knowledge domains and the collection includes both core and Xiaolin lessons', () => {
    for (const route of routes) {
        assert.ok(new Set(route.steps.map(step => domain(step.id))).size >= 2, route.id);
    }
    const ids = routes.flatMap(route => route.steps.map(step => step.id));
    assert.ok(ids.some(id => coreById.has(id)));
    assert.ok(ids.some(id => sections.has(id)));
    for (const topic of ['spring', 'mysql', 'redis', 'network', 'mq', 'cap']) {
        assert.ok(ids.some(id => sections.get(id)?.topicId === topic), topic);
    }
});

test('routes teach prerequisites before the concepts that directly use them', () => {
    const before = (routeId, first, second) => {
        const ids = routes.find(route => route.id === routeId).steps.map(step => step.id);
        assert.ok(ids.indexOf(first) >= 0 && ids.indexOf(second) > ids.indexOf(first), `${first} before ${second}`);
        assert.ok(coreById.get(second).prerequisites.includes(first), `${first} is an existing prerequisite of ${second}`);
    };
    before('objects-and-spring', 'web-spring-ioc', 'web-spring-di');
    before('objects-and-spring', 'web-spring-di', 'web-spring-bean-lifecycle');
    before('concurrency-and-pools', 'concurrency-thread', 'concurrency-shared-state');
    before('concurrency-and-pools', 'concurrency-shared-state', 'concurrency-jmm');
    before('concurrency-and-pools', 'concurrency-blocking-queue', 'concurrency-executor');
    before('queries-and-cache', 'data-access-transaction', 'data-access-isolation');
    before('jvm-and-diagnostics', 'jvm-heap', 'jvm-reachability');
    before('jvm-and-diagnostics', 'jvm-reachability', 'jvm-gc-roots');
});

test('object and Spring route distinguishes references, construction, invocation, injection and mapping', () => {
    const steps = routes.find(route => route.id === 'objects-and-spring').steps;
    for (const id of ['language-references', 'oop-classes', 'language-pass-by-value', 'web-spring-di', 'web-spring-proxy', 'xl-spring-ce7b922a2ba7e2f2', 'xl-spring-bee89a3e61593fa4']) {
        assert.ok(steps.some(step => step.id === id), id);
    }
    assert.ok(steps.findIndex(step => step.id === 'web-spring-proxy') < steps.findIndex(step => step.id === 'xl-spring-ce7b922a2ba7e2f2'));
});

test('browser export matches CommonJS without modifying the source curriculum or catalog', () => {
    const before = JSON.stringify({ coreLessons, catalog });
    const window = {};
    const file = path.join(__dirname, '../data/java-learning-routes.js');
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), { window });
    assert.deepEqual(JSON.parse(JSON.stringify(window.JavaLearningRoutes)), routes);
    assert.equal(JSON.stringify({ coreLessons, catalog }), before);
});
