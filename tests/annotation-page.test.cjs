const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const fixture = {
    categories: [{ id: 'container', name: 'Spring 容器', description: '依赖与组件' }, { id: 'web', name: 'Web', description: '请求处理' }],
    basics: [{ id: 'metadata', title: '注解是元数据', body: '需要编译器或框架读取才会生效。', example: '@Retention(RetentionPolicy.RUNTIME)' }],
    annotations: [
        { id: 'autowired', name: '@Autowired', category: 'container', summary: '按类型注入依赖', packageName: 'org.springframework.beans.factory.annotation.Autowired', targets: ['构造器', '字段', '方法'], phase: 'Bean 创建时', frequency: 'high', attributes: ['required：是否要求依赖存在'], example: '@Autowired\nprivate List<User> users;', pitfalls: ['多个候选 Bean 会产生歧义'], interview: { question: '如何选择候选？', answer: '先匹配类型，再消歧。' }, sources: [{ label: 'Spring 官方文档', url: 'https://docs.spring.io/example?x=1&y=2' }] },
        { id: 'request-body', name: '@RequestBody', category: 'web', summary: '读取请求体', packageName: 'org.springframework.web.bind.annotation.RequestBody', targets: ['参数'], phase: '请求时', frequency: 'normal', attributes: ['required：是否允许空请求体'], example: '@RequestBody User user', pitfalls: ['不处理查询参数'], interview: { question: '能读表单吗？', answer: '由消息转换器决定。' }, sources: [] },
    ],
};

function setup(data = fixture) {
    const listeners = new Map();
    const elements = new Map([
        ['annotationResults', { innerHTML: '' }],
        ['annotationSearch', { value: '', focused: false, focus() { this.focused = true; } }],
        ['annotationCategory', { value: 'all' }],
        ['annotationFrequency', { value: 'all' }],
    ]);
    const calls = { renders: 0, scrolls: [], closes: 0, controlSyncs: 0 };
    const context = vm.createContext({
        console, URL,
        document: { addEventListener(name, fn) { listeners.set(name, fn); }, getElementById(id) { return elements.get(id); } },
        ANNOTATION_DATA: JSON.parse(JSON.stringify(data)),
        showAnnotations: false, showGlossary: false, studySource: 'bank', studyPage: 3, activeCategory: 'Java', searchQuery: '线程', glossaryState: { search: 'AOP', category: 'spring' },
        scrollY: 620, scrollTo(value) { calls.scrolls.push(value.top); },
        currentWorkspacePage() { return context.showAnnotations ? 'annotations' : context.showGlossary ? 'glossary' : context.studySource; },
        renderAll() { calls.renders++; }, GlossaryHighlighter: { close() { calls.closes++; } },
        WorkspaceControls: { enhance() { calls.controlSyncs++; } },
    });
    context.window = context;
    if (fs.existsSync(path.join(root, 'annotation-core.js'))) vm.runInContext(fs.readFileSync(path.join(root, 'annotation-core.js'), 'utf8'), context);
    if (fs.existsSync(path.join(root, 'annotation.js'))) vm.runInContext(fs.readFileSync(path.join(root, 'annotation.js'), 'utf8'), context);
    return { run: code => vm.runInContext(code, context), listeners, elements, calls, context };
}

test('provides accessible independent filters, a learning route, collapsed basics, version guidance and grouped cards', () => {
    const { run } = setup();
    assert.equal(run('typeof renderAnnotations'), 'function', 'annotation page must exist');
    const html = run('renderAnnotations()');
    assert.match(html, /id="annotationSearch"/);
    assert.match(html, /id="annotationCategory"/);
    assert.match(html, /id="annotationFrequency"/);
    assert.match(html, /role="status"/);
    assert.match(html, /Java 17\+.*Spring Boot 3.*Spring 6/);
    assert.match(html, /javax/);
    assert.match(html, /先读基础/);
    assert.match(html, /再看高频/);
    assert.match(html, /易错点/);
    assert.match(html, /data-annotation-basic/);
    assert.match(html, /data-annotation-id="autowired"/);
    assert.match(html, /data-annotation-id="request-body"/);
    assert.match(html, /Spring 容器/);
    assert.doesNotMatch(html, /<details[^>]+\bopen(?:\s|>)/, 'cards begin collapsed');
    assert.match(html, /data-annotation-return/);
    assert.match(html, /data-annotation-clear/);
});

test('detail markup includes the package, targets, phase, parameters, example, pitfalls, interview and safe official links', () => {
    const { run } = setup();
    assert.equal(run('typeof renderAnnotationResults'), 'function');
    const html = run('renderAnnotationResults()');
    assert.match(html, /org\.springframework\.beans\.factory\.annotation\.Autowired/);
    assert.match(html, /构造器.*字段.*方法/);
    assert.match(html, /Bean 创建时/);
    assert.match(html, /required：是否要求依赖存在/);
    assert.match(html, /private List&lt;User&gt; users;/);
    assert.match(html, /多个候选 Bean 会产生歧义/);
    assert.match(html, /如何选择候选？/);
    assert.match(html, /target="_blank" rel="noopener noreferrer"/);
    assert.match(html, /href="https:\/\/docs\.spring\.io\/example\?x=1&amp;y=2"/);
});

test('escapes every supplied field and rejects non-HTTPS source URLs', () => {
    const payload = '<img src=x onerror=alert(1)>';
    const data = { categories: [{ id: 'evil"', name: payload, description: payload }], basics: [{ id: payload, title: payload, body: payload, example: payload }], annotations: [{ id: payload, name: payload, category: 'evil"', summary: payload, packageName: payload, targets: [payload], phase: payload, frequency: 'high', attributes: [payload], example: '<script>alert(1)</script>', pitfalls: [payload], interview: { question: payload, answer: payload }, sources: [{ label: payload, url: 'javascript:alert(1)' }, { label: payload, url: 'http://example.com' }, { label: payload, url: 'https://example.com/?q="test"' }] }] };
    const { run } = setup(data);
    assert.equal(run('typeof renderAnnotations'), 'function');
    const html = run('renderAnnotations()');
    assert.doesNotMatch(html, /<img|<script|href="javascript:|href="http:/);
    assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.match(html, /href="https:\/\/example\.com\/\?q=&quot;test&quot;"/);
});

test('combines filters and gives an actionable empty result', () => {
    const { run } = setup();
    assert.equal(run('typeof renderAnnotationResults'), 'function');
    run('annotationState.search="@Autowired"; annotationState.category="container"; annotationState.frequency="high";');
    let html = run('renderAnnotationResults()');
    assert.match(html, /@Autowired/);
    assert.doesNotMatch(html, /data-annotation-id="request-body"/);
    assert.match(html, /1\s*\/\s*2 个注解/);
    run('annotationState.category="web";');
    html = run('renderAnnotationResults()');
    assert.match(html, /没有匹配的注解/);
    assert.match(html, /data-annotation-clear/);
});

test('rendered search results preserve global name ranking across repeated category segments', () => {
    const template = fixture.annotations[0];
    const data = {
        categories: [{ id: 'container', name: 'Spring 容器' }, { id: 'boot', name: 'Spring Boot' }],
        basics: [],
        annotations: [
            { ...template, id: 'container-text', name: '@Autowired', summary: '注入 Bean', category: 'container' },
            { ...template, id: 'boot-name', name: '@ConditionalOnMissingBean', summary: '缺少组件才生效', category: 'boot' },
            { ...template, id: 'exact-name', name: '@Bean', summary: '声明组件', category: 'container' },
            { ...template, id: 'boot-text', name: '@SpringBootApplication', summary: '扫描 Bean', category: 'boot' },
        ],
    };
    const { run } = setup(data);
    const expected = ['exact-name', 'boot-name', 'container-text', 'boot-text'];
    for (const query of ['Bean', ' ＠Ｂｅａｎ ']) {
        run(`annotationState.search=${JSON.stringify(query)};`);
        assert.deepEqual(Array.from(run('annotationIndex.search(annotationState.search).map(item => item.id)')), expected, 'the core ranks names before explanatory matches');
        const html = run('renderAnnotationResults()');
        assert.deepEqual([...html.matchAll(/data-annotation-id="([^"]+)"/g)].map(match => match[1]), expected, 'rendering must keep the same global rank');
        assert.equal([...html.matchAll(/class="annotation-group"/g)].length, 4, 'each contiguous category segment has a heading');
        assert.match(html, /aria-label="Spring 容器（续）"/);
        assert.match(html, /aria-label="Spring Boot（续）"/);
    }
    for (const query of ['', ' ＠ ']) {
        run(`annotationState.search=${JSON.stringify(query)};`);
        const html = run('renderAnnotationResults()');
        assert.deepEqual([...html.matchAll(/data-annotation-id="([^"]+)"/g)].map(match => match[1]), ['container-text', 'exact-name', 'boot-name', 'boot-text']);
        assert.equal([...html.matchAll(/class="annotation-group"/g)].length, 2, 'blank normalized queries retain complete category groups');
        assert.doesNotMatch(html, /（续）/);
    }
});

test('entering twice preserves the original return location and leaves learning and glossary state intact', () => {
    const { run, context, calls } = setup();
    assert.equal(run('typeof openAnnotations'), 'function');
    const before = run('JSON.stringify([studySource,studyPage,activeCategory,searchQuery,glossaryState])');
    run('openAnnotations()');
    assert.equal(context.showAnnotations, true);
    assert.equal(run('annotationState.returnPage'), 'bank');
    assert.equal(run('annotationState.returnScroll'), 620);
    context.scrollY = 100;
    run('openAnnotations()');
    assert.equal(run('annotationState.returnScroll'), 620);
    run('returnFromAnnotations()');
    assert.equal(context.showAnnotations, false);
    assert.equal(calls.scrolls.at(-1), 620);
    assert.equal(calls.renders, 3);
    assert.equal(calls.closes, 2);
    assert.equal(run('JSON.stringify([studySource,studyPage,activeCategory,searchQuery,glossaryState])'), before);
});

test('search waits for IME composition and refreshes only results so the input retains focus', () => {
    const { run, listeners, elements, calls } = setup();
    assert.equal(typeof listeners.get('input'), 'function');
    listeners.get('input')({ target: { id: 'annotationSearch', value: '请求' }, isComposing: true });
    assert.equal(run('annotationState.search'), '');
    listeners.get('compositionend')({ target: { id: 'annotationSearch', value: '请求' } });
    assert.equal(run('annotationState.search'), '请求');
    assert.match(elements.get('annotationResults').innerHTML, /@RequestBody/);
    assert.doesNotMatch(elements.get('annotationResults').innerHTML, /data-annotation-id="autowired"/);
    listeners.get('input')({ target: { id: 'annotationSearch', value: 'Autowired' } });
    assert.equal(run('annotationState.search'), 'Autowired');
    assert.equal(calls.renders, 0, 'typing must not rebuild the page');
});

test('select events apply both filters and clear resets all independent controls', () => {
    const { run, listeners, elements, calls } = setup();
    assert.equal(typeof listeners.get('change'), 'function');
    listeners.get('change')({ target: { id: 'annotationCategory', value: 'web' } });
    listeners.get('change')({ target: { id: 'annotationFrequency', value: 'high' } });
    assert.equal(run('annotationState.category'), 'web');
    assert.equal(run('annotationState.frequency'), 'high');
    assert.match(elements.get('annotationResults').innerHTML, /没有匹配的注解/);
    run('annotationState.search="请求";');
    listeners.get('click')({ target: { closest(selector) { return selector === '[data-annotation-clear]' ? {} : null; } } });
    assert.equal(run('annotationState.search'), '');
    assert.equal(run('annotationState.category'), 'all');
    assert.equal(run('annotationState.frequency'), 'all');
    assert.equal(elements.get('annotationSearch').value, '');
    assert.equal(elements.get('annotationSearch').focused, true);
    assert.equal(elements.get('annotationCategory').value, 'all');
    assert.equal(elements.get('annotationFrequency').value, 'all');
    assert.equal(calls.controlSyncs, 1, 'mobile select labels must reflect cleared native values');
});

test('expanded cards retain their state when a query hides and reveals them', () => {
    const { run, listeners } = setup();
    assert.equal(typeof listeners.get('toggle'), 'function');
    listeners.get('toggle')({ target: { dataset: { annotationId: 'autowired' }, open: true } });
    run('annotationState.search="RequestBody"; renderAnnotationResults(); annotationState.search="";');
    assert.match(run('renderAnnotationResults()'), /<details[^>]*data-annotation-id="autowired"[^>]*\sopen(?:\s|>)/);
    listeners.get('toggle')({ target: { dataset: { annotationId: 'autowired' }, open: false } });
    assert.doesNotMatch(run('renderAnnotationResults()'), /<details[^>]*data-annotation-id="autowired"[^>]*\sopen(?:\s|>)/);
});
