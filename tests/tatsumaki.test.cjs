const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const scenes = [
    { id: 'action', file: 'tatsumaki-action.png', position: '50% 38%', label: '念动力' },
    { id: 'cover', file: 'tatsumaki-cover.jpg', position: '50% 15%', label: '冷冽' },
    { id: 'seated', file: 'tatsumaki-seated.jpg', position: '50% 50%', label: '浮空' },
    { id: 'portrait', file: 'tatsumaki-portrait.jpg', position: '50% 12%', label: '静默' },
    { id: 'storm', file: 'tatsumaki-storm.jpg', position: '50% 28%', label: '风起' },
    { id: 'avatar', file: 'tatsumaki-avatar.png', position: '50% 35%', label: '凝视' }
];

function setup({ saved, blocked = false, readyState = 'complete', theme = 'tatsumaki', missingHero = false } = {}) {
    const key = 'workspace-tatsumaki-scene';
    const store = new Map([['workspace-theme', theme]]);
    if (saved !== undefined) store.set(key, saved);
    const events = {};
    const element = () => ({
        dataset: {}, attrs: {}, style: {}, listeners: {},
        setAttribute(name, value) { this.attrs[name] = String(value); },
        addEventListener(name, handler) { this.listeners[name] = handler; },
        dispatch(name) { this.listeners[name]?.({ target: this }); }
    });
    const main = Object.assign(element(), { src: '' }), caption = Object.assign(element(), { textContent: '' });
    const buttons = scenes.map(scene => {
        const button = element();
        button.dataset.tatsumakiScene = scene.id;
        button.setAttribute('aria-pressed', 'false');
        return button;
    });
    const hero = Object.assign(element(), {
        querySelector(selector) {
            return selector === '[data-tatsumaki-main]' ? main : selector === '[data-tatsumaki-caption]' ? caption : null;
        },
        querySelectorAll(selector) { return selector === '[data-tatsumaki-scene]' ? buttons : []; }
    });
    const properties = new Map();
    const root = {
        dataset: { theme, themeMode: theme === 'ink' ? 'dark' : 'light' },
        style: {
            setProperty(name, value) { properties.set(name, value); },
            getPropertyValue(name) { return properties.get(name) || ''; }
        }
    };
    const document = {
        readyState,
        documentElement: root,
        querySelector(selector) { return selector === '#tatsumakiScene' && !missingHero ? hero : null; },
        addEventListener(name, handler) { events[name] = handler; }
    };
    const context = {
        document,
        localStorage: {
            getItem(name) { if (blocked) throw Error('storage unavailable'); return store.get(name) ?? null; },
            setItem(name, value) { if (blocked) throw Error('storage unavailable'); store.set(name, value); }
        },
        addEventListener(name, handler) { events[name] = handler; }
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../workspace-tatsumaki.js'), 'utf8'), context);
    return {
        store, root, hero, main, caption, buttons,
        initialize: () => events.DOMContentLoaded?.(),
        storage: event => events.storage?.(event),
        select(id) {
            const button = buttons.find(button => button.dataset.tatsumakiScene === id);
            assert.ok(button, `scene button ${id} exists`);
            button.dispatch('click');
        }
    };
}

function assertScene(app, id) {
    const scene = scenes.find(scene => scene.id === id);
    const source = `./assets/themes/${scene.file}`;
    assert.equal(app.hero.dataset.scene, id);
    assert.equal(app.main.src, source);
    assert.equal(app.main.style.objectPosition, scene.position);
    assert.equal(app.caption.textContent, scene.label);
    assert.equal(app.root.style.getPropertyValue('--tatsumaki-scene-image'), `url('${source}')`);
    assert.equal(app.buttons.filter(button => button.attrs['aria-pressed'] === 'true').length, 1);
    assert.equal(app.buttons.find(button => button.dataset.tatsumakiScene === id).attrs['aria-pressed'], 'true');
}

test('each of the six saved scenes initializes its image, caption and selected button', () => {
    for (const scene of scenes) assertScene(setup({ saved: scene.id }), scene.id);
});

test('scene initialization waits for the DOM when the script runs before the hero is ready', () => {
    const app = setup({ saved: 'storm', readyState: 'loading' });
    assert.equal(app.main.src, '');
    app.initialize();
    assertScene(app, 'storm');
});

test('missing or unrecognized preferences use action and never render an arbitrary image URL', () => {
    for (const saved of [undefined, '', 'missing', '__proto__', 'https://example.com/image.png', 'javascript:alert(1)']) {
        assertScene(setup({ saved }), 'action');
    }
});

test('all six scene buttons switch directly and persist without changing the selected theme', () => {
    const app = setup({ theme: 'ink' });
    for (const scene of scenes) {
        app.select(scene.id);
        assertScene(app, scene.id);
        assert.equal(app.store.get('workspace-tatsumaki-scene'), scene.id);
        assert.equal(app.store.get('workspace-theme'), 'ink');
        assert.equal(app.root.dataset.theme, 'ink');
        assert.equal(app.root.dataset.themeMode, 'dark');
    }
});

test('blocked storage falls back to action and leaves scene selection usable', () => {
    const app = setup({ saved: 'cover', blocked: true });
    assertScene(app, 'action');
    app.select('portrait');
    assertScene(app, 'portrait');
});

test('cross-tab scene changes update the image, crop, caption and all button states', () => {
    const app = setup({ saved: 'action' });
    for (const scene of scenes) {
        app.storage({ key: 'workspace-tatsumaki-scene', newValue: scene.id });
        assertScene(app, scene.id);
    }
});

test('removing or clearing the scene preference restores action in other tabs', () => {
    for (const key of ['workspace-tatsumaki-scene', null]) {
        const app = setup({ saved: 'avatar' });
        app.storage({ key, newValue: null });
        assertScene(app, 'action');
    }
    const invalid = setup({ saved: 'portrait' });
    invalid.storage({ key: 'workspace-tatsumaki-scene', newValue: 'not-a-scene' });
    assertScene(invalid, 'action');
});

test('unrelated storage events leave the current scene and theme unchanged', () => {
    const app = setup({ saved: 'seated', theme: 'sage' });
    app.storage({ key: 'workspace-theme', newValue: 'dark' });
    assertScene(app, 'seated');
    assert.equal(app.root.dataset.theme, 'sage');
});

test('a button with an unknown scene ID cannot load an arbitrary source', () => {
    const app = setup();
    app.buttons[5].dataset.tatsumakiScene = 'https://example.com/other.png';
    app.buttons[5].dispatch('click');
    assertScene(app, 'action');
    assert.equal(app.store.has('workspace-tatsumaki-scene'), false);
});

test('pages without the scene hero can load the controller safely', () => {
    assert.doesNotThrow(() => setup({ missingHero: true }));
});
