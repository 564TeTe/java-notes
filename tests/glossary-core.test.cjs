const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const corePath = path.join(__dirname, '..', 'glossary-core.js');
const core = require(corePath);
const term = (id, name, aliases = [], category = 'java', definition = name + '的一句话解释。') => ({
    id, term: name, aliases, category, definition,
});
const fixture = {
    categories: [{ id: 'java', name: 'Java 基础' }, { id: 'spring', name: 'Spring' }],
    terms: [
        term('transaction', '事务', ['Transaction'], 'java', '把一组数据库操作作为一个整体提交或回滚。'),
        term('aop', 'AOP', ['面向切面编程'], 'spring'),
        term('ioc', 'IoC', ['控制反转', 'Inversion of Control'], 'spring'),
        term('pool', '线程池', ['Thread Pool']),
        term('thread', '线程', ['Thread']),
        term('class', '类', ['Class']),
    ],
};

test('provides the same createIndex API in Node and a browser without changing its input', () => {
    assert.equal(typeof core.createIndex, 'function');
    const input = JSON.parse(JSON.stringify(fixture));
    const before = JSON.stringify(input);
    const index = core.createIndex(input);
    assert.deepEqual(index.terms, fixture.terms);
    assert.deepEqual(index.categories, fixture.categories);
    assert.equal(index.get('aop').term, 'AOP');
    assert.equal(index.get('unknown'), undefined);
    index.search('thread');
    index.match('线程池和 AOP');
    assert.equal(JSON.stringify(input), before);
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(corePath, 'utf8'), sandbox);
    assert.equal(typeof sandbox.window.GlossaryCore.createIndex, 'function');
    assert.equal(sandbox.window.GlossaryCore.createIndex(fixture).get('ioc').term, 'IoC');
});

test('searches names, aliases and explanations with case and full-width normalization', () => {
    const index = core.createIndex(fixture);
    assert.deepEqual(index.search(' ａｏｐ ').map(t => t.id), ['aop']);
    assert.deepEqual(index.search('threadpool').map(t => t.id), ['pool']);
    assert.deepEqual(index.search('控制反转').map(t => t.id), ['ioc']);
    assert.deepEqual(index.search('数据库操作').map(t => t.id), ['transaction']);
    assert.deepEqual(index.search(''), fixture.terms);
    assert.deepEqual(index.search('not found'), []);
});

test('category filtering combines with search without changing the original ordering', () => {
    const index = core.createIndex(fixture);
    assert.deepEqual(index.search('', 'spring').map(t => t.id), ['aop', 'ioc']);
    assert.deepEqual(index.search('aop', 'java'), []);
    assert.deepEqual(index.search('', 'all'), fixture.terms);
    assert.deepEqual(index.search('', 'unknown'), []);
});

test('search ranks exact names, exact aliases, partial names, partial aliases, then definitions', () => {
    const terms = [
        term('definition-first', 'Spring', [], 'spring', 'Spring 提供 AOP 支持。'),
        term('partial-alias', '代理', ['AOP Proxy'], 'spring', '为对象提供代理。'),
        term('partial-name', 'Spring AOP', [], 'spring', '方法增强。'),
        term('exact-alias', '面向切面编程', ['AOP'], 'spring', '抽取公共逻辑。'),
        term('exact-name', 'AOP', [], 'spring', '切面编程。'),
        term('definition-second', '通知', [], 'spring', 'AOP 增强逻辑。'),
        term('unrelated', 'IoC', [], 'spring', '控制反转。'),
    ];
    const index = core.createIndex({ categories: [], terms });
    assert.deepEqual(index.search(' ａｏｐ ').map(t => t.id), [
        'exact-name', 'exact-alias', 'partial-name', 'partial-alias', 'definition-first', 'definition-second',
    ]);
    assert.deepEqual(index.search(''), terms, 'blank search preserves the supplied order');
    assert.deepEqual(index.terms, terms, 'ranking never reorders the source list');
    assert.deepEqual(index.search('AOP', 'java'), [], 'category filtering still applies');
});

test('selects longer terms before their prefixes and returns disjoint UTF-16 ranges', () => {
    const index = core.createIndex({ categories: [], terms: [
        term('thread', '线程'), term('pool', '线程池'),
        term('serialize', '序列化'), term('deserialize', '反序列化'),
        term('mybatis', 'MyBatis'), term('plus', 'MyBatis-Plus'),
    ] });
    const text = '😀线程池、线程、反序列化、序列化、MyBatis-Plus/MyBatis';
    const matches = index.match(text);
    assert.deepEqual(matches.map(m => text.slice(m.start, m.end)), [
        '线程池', '线程', '反序列化', '序列化', 'MyBatis-Plus', 'MyBatis',
    ]);
    assert.equal(matches[0].start, 2);
    assert.deepEqual(matches.map(m => m.termId), ['pool', 'thread', 'deserialize', 'serialize', 'plus', 'mybatis']);
    assert.ok(matches.every((m, i) => i === 0 || matches[i - 1].end <= m.start));
    assert.deepEqual(index.match(text), matches, 'repeated calls reset the matcher position');
});

test('Latin identifiers require boundaries while Chinese prose can adjoin abbreviations', () => {
    const index = core.createIndex(fixture);
    const text = 'AOP 和 IoC、支持AOP；XAOP AOPConfig AOP2 _AOP AOP_ $AOP AOP$ XAOPConfig';
    assert.deepEqual(index.match(text).map(m => text.slice(m.start, m.end)), ['AOP', 'IoC', 'AOP']);
});

test('preserves identifier casing so ordinary words do not become SQL or HTTP terms', () => {
    const index = core.createIndex({ categories: [], terms: [term('get', 'GET'), term('select', 'SELECT'), term('bean', 'Bean')] });
    const text = 'get select bean GET SELECT Bean';
    assert.deepEqual(index.match(text).map(m => text.slice(m.start, m.end)), ['GET', 'SELECT', 'Bean']);
    assert.deepEqual(index.search('get').map(t => t.id), ['get']);
});

test('escapes regex syntax, resolves long annotations, and retains literal punctuation', () => {
    const index = core.createIndex({ categories: [], terms: [
        term('binding', '#{}'), term('replacement', '${}'), term('tree', 'B+Tree'),
        term('object', 'equals', ['equals()']), term('controller', 'Controller'),
        term('annotation', '@Controller'), term('nplus', 'N+1 查询', ['N+1']),
    ] });
    const text = '#{} ${} B+Tree equals() @Controller Controller N+1 查询 N+1 BBBTree';
    assert.deepEqual(index.match(text).map(m => [m.termId, text.slice(m.start, m.end)]), [
        ['binding', '#{}'], ['replacement', '${}'], ['tree', 'B+Tree'], ['object', 'equals()'],
        ['annotation', '@Controller'], ['controller', 'Controller'], ['nplus', 'N+1 查询'], ['nplus', 'N+1'],
    ]);
});

test('omits one-character labels and ambiguous lookup keys from automatic matching only', () => {
    const index = core.createIndex({ categories: [], ambiguousLookup: { set: ['set', 'tag'], '接口': ['interface', 'api'] }, terms: [
        term('class', '类', ['Class']), term('lock', '锁', ['Lock']), term('table', '表', ['Table']),
        term('one-alias', '甲乙', ['甲']), term('set', 'Set'), term('tag', 'set 标签', ['MyBatis set']),
        term('interface', '接口', ['Java 接口']), term('api', 'API', ['应用程序接口']),
    ] });
    const text = '类 锁 表 甲 Set set 接口 甲乙 MyBatis set Java 接口 API Class';
    assert.deepEqual(index.match(text).map(m => text.slice(m.start, m.end)), ['甲乙', 'MyBatis set', 'Java 接口', 'API', 'Class']);
    assert.equal(index.search('类')[0].id, 'class');
    assert.ok(index.search('set').some(t => t.id === 'set'));
});

test('does not arbitrarily pick aliases that collide across entries even without metadata', () => {
    const index = core.createIndex({ categories: [], terms: [
        term('security', '访问令牌', ['Token']), term('model', '模型词元', ['token']),
        term('first', '甲概念', ['共有别名']), term('second', '乙概念', ['共有别名']),
        term('duplicate', '事务', ['事务', 'Transaction']),
    ] });
    const text = 'Token token 共有别名 访问令牌 模型词元 事务 Transaction';
    assert.deepEqual(index.match(text).map(m => m.termId), ['security', 'model', 'duplicate', 'duplicate']);
});

test('empty datasets and empty text are safe and prototype-like IDs remain retrievable', () => {
    const empty = core.createIndex({ categories: [], terms: [] });
    assert.deepEqual(empty.search(''), []);
    assert.deepEqual(empty.match('AOP 事务'), []);
    assert.deepEqual(core.createIndex(fixture).match(''), []);
    const index = core.createIndex({ categories: [], terms: [term('__proto__', '事务')] });
    assert.equal(index.get('__proto__').term, '事务');
});
