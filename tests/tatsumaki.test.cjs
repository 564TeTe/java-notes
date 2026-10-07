const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const profiles = [
    { module: 'bank', scene: 'study', file: 'tatsumaki-study.jpg', layout: 'index', chapter: '01 / STUDY FILES', title: '题库', caption: '分类索引 · 逐题复习', position: '50% 25%' },
    { module: 'interviews', scene: 'dossier', file: 'tatsumaki-dossier.jpg', layout: 'dossier', chapter: '02 / FIELD NOTES', title: '公司面经', caption: '面试记录 · 公司档案', position: '40% 42%' },
    { module: 'quiz', scene: 'power', file: 'tatsumaki-power.jpg', layout: 'impact', chapter: '03 / PRACTICE', title: '随机抽查', caption: '抽题练习 · 回顾薄弱项', position: '55% 32%' },
    { module: 'resume', scene: 'calm', file: 'tatsumaki-calm.jpg', layout: 'profile', chapter: '04 / PROFILE', title: '简历准备', caption: '项目经历 · 面试表达', position: '50% 20%' },
    { module: 'recruitment', scene: 'reach', file: 'tatsumaki-reach.jpg', layout: 'poster', chapter: '05 / OPPORTUNITIES', title: '秋招专区', caption: '招聘信息 · 投递进展', position: '65% 24%' },
    { module: 'resources', scene: 'welcome', file: 'tatsumaki-welcome.jpg', layout: 'catalog', chapter: '06 / REFERENCE', title: '学习资源', caption: '常用命令 · 学习资料', position: '50% 22%' },
    { module: 'personal', scene: 'wink', file: 'tatsumaki-wink.jpg', layout: 'note', chapter: '07 / MY NOTES', title: '我的笔记', caption: '记录想法 · 整理所学', position: '50% 40%' },
    { module: 'memorized', scene: 'panorama', file: 'tatsumaki-panorama.png', layout: 'panorama', chapter: '08 / REVIEW', title: '已背会', caption: '复习巩固 · 温故知新', position: '50% 50%' },
    { module: 'marked', scene: 'avatar', file: 'tatsumaki-avatar.png', layout: 'bookmark', chapter: '09 / BOOKMARKS', title: '重点收藏', caption: '值得再看一遍', position: '50% 35%' },
    { module: 'glossary', scene: 'uniform', file: 'tatsumaki-uniform.jpg', layout: 'lexicon', chapter: '10 / GLOSSARY', title: '术语词典', caption: '概念速查 · 理清术语', position: '50% 20%' }
];

function setup({ module = 'bank', saved = 'storm', theme = 'tatsumaki', readyState = 'complete', missing } = {}) {
    const store = new Map([['workspace-tatsumaki-scene', saved], ['workspace-theme', theme]]);
    const storageAccess = [], sourceWrites = [], styleWrites = [], events = {}, observers = [];
    const element = () => ({ dataset: {}, style: {}, textContent: '' });
    const main = element(), chapter = element(), title = element(), caption = element();
    let source = '';
    Object.defineProperty(main, 'src', {
        get() { return source; },
        set(value) { source = value; sourceWrites.push(value); }
    });
    const nodes = { main, chapter, title, caption };
    const hero = Object.assign(element(), {
        hidden: false,
        querySelector(selector) {
            const name = selector.match(/^\[data-tatsumaki-(main|chapter|title|caption)\]$/)?.[1];
            return name && name !== missing ? nodes[name] : null;
        },
        querySelectorAll() { return []; }
    });
    const body = Object.assign(element(), { dataset: { workspace: module } });
    const root = {
        dataset: { theme, themeMode: theme === 'ink' ? 'dark' : 'light' },
        style: { setProperty(name, value) { styleWrites.push([name, value]); } }
    };
    const document = {
        readyState, body, documentElement: root,
        querySelector(selector) { return selector === '#tatsumakiScene' && missing !== 'hero' ? hero : null; },
        addEventListener(name, handler) { events[name] = handler; }
    };
    class MutationObserver {
        constructor(callback) { this.callback = callback; observers.push(this); }
        observe(target, options) { this.target = target; this.options = options; }
    }
    const context = {
        document, MutationObserver,
        localStorage: {
            getItem(key) { storageAccess.push(['get', key]); return store.get(key) ?? null; },
            setItem(key, value) { storageAccess.push(['set', key]); store.set(key, value); },
            removeItem(key) { storageAccess.push(['remove', key]); store.delete(key); }
        },
        addEventListener(name, handler) { events[name] = handler; }
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../workspace-tatsumaki.js'), 'utf8'), context);
    const notifyAttribute = attributeName => {
        for (const observer of observers) {
            if (observer.target !== body || !observer.options.attributes) continue;
            if (observer.options.attributeFilter && !observer.options.attributeFilter.includes(attributeName)) continue;
            observer.callback([{ type: 'attributes', target: body, attributeName }]);
        }
    };
    return {
        store, root, body, hero, main, chapter, title, caption, sourceWrites, storageAccess, styleWrites,
        initialize: () => events.DOMContentLoaded?.(),
        storage: event => events.storage?.(event),
        notifyAttribute,
        navigate(next) { body.dataset.workspace = next; notifyAttribute('data-workspace'); }
    };
}

function assertProfile(app, module) {
    const profile = profiles.find(profile => profile.module === module);
    assert.equal(app.hero.hidden, false);
    assert.equal(app.body.dataset.tatsumakiArt, 'on');
    assert.equal(app.hero.dataset.module, module);
    assert.equal(app.hero.dataset.scene, profile.scene);
    assert.equal(app.hero.dataset.layout, profile.layout);
    assert.equal(app.main.src, `./assets/themes/${profile.file}`);
    assert.equal(app.main.style.objectPosition, profile.position);
    assert.equal(app.chapter.textContent, profile.chapter);
    assert.equal(app.title.textContent, profile.title);
    assert.equal(app.caption.textContent, profile.caption);
}

test('ten illustrated modules each receive a unique main image and their own chapter, title and layout', () => {
    const sources = [];
    for (const profile of profiles) {
        const app = setup({ module: profile.module });
        assertProfile(app, profile.module);
        sources.push(app.main.src);
    }
    assert.equal(new Set(sources).size, 10);
});

test('workspace navigation updates the module image and complete heading', () => {
    const app = setup();
    for (const profile of profiles) {
        app.navigate(profile.module);
        assertProfile(app, profile.module);
    }
});

test('utility modules hide the art without assigning a duplicate image and core navigation restores it', () => {
    const app = setup();
    for (const module of ['trash', 'annotations']) {
        app.navigate(module);
        assert.equal(app.hero.hidden, true);
        assert.equal(app.body.dataset.tatsumakiArt, 'off');
        assert.equal(app.sourceWrites.length, 1);
    }
    app.navigate('quiz');
    assertProfile(app, 'quiz');
});

test('unknown or absent modules hide the hero and cannot load an arbitrary image', () => {
    for (const module of ['', undefined, 'unknown', '__proto__', 'constructor', 'https://example.com/image.png']) {
        const app = setup({ module: '' });
        app.navigate(module);
        assert.equal(app.hero.hidden, true);
        assert.equal(app.body.dataset.tatsumakiArt, 'off');
        assert.equal(app.sourceWrites.length, 0);
    }
});

test('repeated workspace notifications and a return from utility views preserve the same image resource', () => {
    const app = setup();
    assertProfile(app, 'bank');
    app.navigate('bank'); app.navigate('bank');
    app.notifyAttribute('data-unrelated');
    assert.equal(app.sourceWrites.length, 1);
    app.navigate('trash'); app.navigate('bank');
    assertProfile(app, 'bank');
    assert.equal(app.sourceWrites.length, 1);
});

test('legacy scene storage and cross-tab storage events do not influence module art or theme preferences', () => {
    const app = setup({ module: 'resume', saved: 'avatar', theme: 'ink' });
    app.storage({ key: 'workspace-tatsumaki-scene', newValue: 'action' });
    app.storage({ key: 'workspace-theme', newValue: 'dark' });
    app.storage({ key: null, newValue: null });
    assertProfile(app, 'resume');
    assert.deepEqual(app.storageAccess, []);
    assert.equal(app.store.get('workspace-tatsumaki-scene'), 'avatar');
    assert.equal(app.store.get('workspace-theme'), 'ink');
    assert.equal(app.root.dataset.theme, 'ink');
    assert.equal(app.root.dataset.themeMode, 'dark');
    assert.deepEqual(app.styleWrites, []);
});

test('two tabs display their own current module despite sharing the old scene preference', () => {
    const bank = setup({ module: 'bank', saved: 'action' });
    const quiz = setup({ module: 'quiz', saved: 'action' });
    bank.storage({ key: 'workspace-tatsumaki-scene', newValue: 'storm' });
    quiz.storage({ key: 'workspace-tatsumaki-scene', newValue: 'storm' });
    assertProfile(bank, 'bank');
    assertProfile(quiz, 'quiz');
});

test('initialization waits for the DOM and uses the latest current module', () => {
    const app = setup({ module: 'bank', readyState: 'loading' });
    assert.equal(app.main.src, '');
    app.navigate('interviews');
    app.initialize();
    assertProfile(app, 'interviews');
    app.navigate('resources');
    assertProfile(app, 'resources');
});

test('missing hero or required heading nodes safely skip initialization', () => {
    for (const missing of ['hero', 'main', 'chapter', 'title', 'caption']) {
        const app = setup({ missing });
        assert.equal(app.sourceWrites.length, 0);
        assert.deepEqual(app.storageAccess, []);
        app.navigate('quiz');
        assert.equal(app.sourceWrites.length, 0);
    }
});
