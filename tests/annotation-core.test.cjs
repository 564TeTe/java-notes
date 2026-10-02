const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const corePath = path.join(__dirname, '..', 'annotation-core.js');
const core = fs.existsSync(corePath) ? require(corePath) : {};
const entry = (id, name, changes = {}) => ({
    id, name, category: 'container', summary: '注册组件', packageName: 'org.example.' + name.replace('@', ''),
    targets: ['类'], phase: '运行时', frequency: 'normal', attributes: ['value：指定名称'],
    example: '@' + name.replace('@', '') + '\nclass Demo {}', pitfalls: ['需要框架扫描'],
    interview: { question: '如何生效？', answer: '由框架读取元数据。' }, sources: [], ...changes,
});
const fixture = {
    categories: [{ id: 'container', name: 'Spring 容器' }, { id: 'web', name: 'Web' }],
    basics: [{ id: 'first', title: '注解是什么', body: '提供元数据。' }],
    annotations: [
        entry('description', '@Service', { summary: '自动注入 Autowired 依赖', frequency: 'high' }),
        entry('partial-alias', '@Resource', { aliases: ['Autowired 替代'], frequency: 'high' }),
        entry('partial-name', '@AutowiredLike'),
        entry('exact-alias', '@Inject', { aliases: ['Autowired'], packageName: 'jakarta.inject.Inject' }),
        entry('exact-name', '@Autowired', { frequency: 'high', attributes: ['required：是否必须存在候选 Bean'], pitfalls: ['多个候选 Bean 时需要消歧'], example: '@Autowired(required = false)\nUserService service;' }),
        entry('web', '@RequestBody', { category: 'web', frequency: 'high', summary: '读取 JSON 请求体', targets: ['参数'], phase: '请求处理时' }),
    ],
};

test('exposes a browser and Node API without mutating the data', () => {
    assert.equal(typeof core.createIndex, 'function', 'annotation index must be available');
    const data = JSON.parse(JSON.stringify(fixture));
    const before = JSON.stringify(data);
    const index = core.createIndex(data);
    assert.deepEqual(index.annotations, fixture.annotations);
    assert.deepEqual(index.categories, fixture.categories);
    assert.deepEqual(index.basics, fixture.basics);
    assert.equal(index.get('exact-name').name, '@Autowired');
    assert.equal(index.get('missing'), undefined);
    index.search('autowired');
    assert.equal(JSON.stringify(data), before);
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(corePath, 'utf8'), context);
    assert.equal(typeof context.window.AnnotationCore.createIndex, 'function');
    assert.equal(context.window.AnnotationCore.createIndex(fixture).get('web').name, '@RequestBody');
});

test('ranks names before aliases and explanatory text, with optional @ and full-width normalization', () => {
    assert.equal(typeof core.createIndex, 'function');
    const index = core.createIndex(fixture);
    const expected = ['exact-name', 'exact-alias', 'partial-name', 'partial-alias', 'description'];
    for (const query of ['Autowired', '@Autowired', ' ＠Ａｕｔｏｗｉｒｅｄ ']) {
        assert.deepEqual(index.search(query).map(item => item.id), expected);
    }
    assert.deepEqual(index.search(''), fixture.annotations);
    assert.deepEqual(index.annotations, fixture.annotations, 'ranking preserves source order');
});

test('searches parameters, pitfalls, package names, examples, targets, phase and interview answers', () => {
    assert.equal(typeof core.createIndex, 'function');
    const index = core.createIndex(fixture);
    for (const query of ['required', '多个候选', 'org.example.Autowired', 'required = false']) {
        assert.ok(index.search(query).some(item => item.id === 'exact-name'), query);
    }
    assert.deepEqual(index.search('JSON请求体').map(item => item.id), ['web']);
    assert.deepEqual(index.search('请求处理时').map(item => item.id), ['web']);
    assert.deepEqual(index.search('参数').map(item => item.id), ['web']);
    assert.equal(index.search('读取元数据').length, fixture.annotations.length);
    assert.deepEqual(index.search('完全不存在'), []);
});

test('combines search, category and high-frequency filters without resetting other criteria', () => {
    assert.equal(typeof core.createIndex, 'function');
    const index = core.createIndex(fixture);
    assert.deepEqual(index.search('Autowired', 'container', 'high').map(item => item.id), ['exact-name', 'partial-alias', 'description']);
    assert.deepEqual(index.search('', 'web', 'high').map(item => item.id), ['web']);
    assert.deepEqual(index.search('Autowired', 'web', 'high'), []);
    assert.deepEqual(index.search('', 'all', 'all'), fixture.annotations);
    assert.deepEqual(index.search('', 'unknown', 'all'), []);
});

test('handles empty input and prototype-like IDs safely', () => {
    assert.equal(typeof core.createIndex, 'function');
    const empty = core.createIndex({ categories: [], annotations: [], basics: [] });
    assert.deepEqual(empty.search(''), []);
    const unusual = core.createIndex({ categories: [], annotations: [entry('__proto__', '@Marker')] });
    assert.equal(unusual.get('__proto__').name, '@Marker');
    assert.deepEqual(unusual.basics, []);
});
