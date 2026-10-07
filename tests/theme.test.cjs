const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const palettes = [
    { id: 'light', name: '日间', mode: 'light', color: '#f3f5f2' },
    { id: 'blue', name: '雾蓝', mode: 'light', color: '#eef3f9' },
    { id: 'sand', name: '暖砂', mode: 'light', color: '#f5efe6' },
    { id: 'dark', name: '夜间', mode: 'dark', color: '#101214' },
    { id: 'paper', name: '纸白', mode: 'light', color: '#f5f4f0' },
    { id: 'sage', name: '松绿', mode: 'light', color: '#eef2ec' },
    { id: 'rose', name: '暮玫', mode: 'light', color: '#f5efef' },
    { id: 'ink', name: '墨蓝', mode: 'dark', color: '#121820' },
    { id: 'tatsumaki', name: '龙卷', mode: 'light', color: '#f3f3f0' }
];

function setup(saved, systemDark = false, blocked = false) {
    const store = new Map(saved ? [['workspace-theme', saved]] : []);
    const events = {}, root = { dataset: {} }, meta = {}, buttons = [];
    let document;
    const element = () => ({
        attrs: {}, dataset: {}, listeners: {},
        setAttribute(key, value) {
            this.attrs[key] = String(value);
            if (key.startsWith('data-')) {
                const name = key.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
                this.dataset[name] = String(value);
            }
        },
        getAttribute(key) { return this.attrs[key]; },
        addEventListener(name, fn) { this.listeners[name] = fn; },
        dispatch(name, event = {}) { this.listeners[name]?.(event); },
        focus() { document.activeElement = this; },
        scrollIntoView() {},
        closest(selector) { return matches(this, selector) ? this : null; },
        getBoundingClientRect() { return { left: 10, right: 340, top: 60, bottom: 440 }; }
    });
    const matches = (node, selector) => {
        const attribute = selector.match(/^\[([^=\]]+)(?:="([^"]*)")?\]$/);
        if (!attribute) return false;
        return Object.hasOwn(node.attrs, attribute[1]) &&
            (attribute[2] === undefined || node.attrs[attribute[1]] === attribute[2]);
    };
    const panel = Object.assign(element(), {
        open: false, children: [],
        showModal() { this.open = true; },
        close() { this.open = false; this.dispatch('close'); },
        querySelector(selector) { return this.children.find(node => matches(node, selector)) || null; },
        querySelectorAll(selector) { return this.children.filter(node => matches(node, selector)); }
    });
    Object.defineProperty(panel, 'innerHTML', {
        set(html) {
            this.markup = html;
            // Discover actual controls from the generated markup, just as a browser does.
            this.children = [...html.matchAll(/<(button|span)\b([^>]*)>([\s\S]*?)<\/\1>/g)]
                .filter(match => /data-theme-(?:choice|system|close|status)\b/.test(match[2]))
                .map(match => {
                    const node = element();
                    for (const attribute of match[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g)) {
                        node.setAttribute(attribute[1], attribute[2] || '');
                    }
                    node.textContent = match[3].replace(/<[^>]*>/g, '');
                    node.type = node.attrs.type;
                    return node;
                });
        },
        get() { return this.markup; }
    });
    const parent = { append: button => buttons.push(button) };
    const media = {
        matches: systemDark,
        addEventListener(name, fn) { events.system = event => { media.matches = event.matches; fn(event); }; }
    };
    document = {
        documentElement: root, activeElement: element(), body: { append() {} },
        querySelector: selector => selector.includes('theme-color') ? meta : parent,
        addEventListener: (name, fn) => { events[name] = fn; },
        createElement: tag => tag === 'dialog' ? panel : element()
    };
    const context = {
        document, matchMedia: () => media,
        localStorage: {
            getItem(key) { if (blocked) throw Error('blocked'); return store.get(key) ?? null; },
            setItem(key, value) { if (blocked) throw Error('blocked'); store.set(key, value); },
            removeItem(key) { if (blocked) throw Error('blocked'); store.delete(key); }
        },
        addEventListener: (name, fn) => { events[name] = fn; }
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../workspace-theme.js'), 'utf8'), context);
    const click = node => {
        assert.ok(node, 'requested theme control exists');
        const event = { target: node };
        node.dispatch('click', event);
        if (node !== panel) panel.dispatch('click', event);
    };
    const select = id => click(panel.querySelector(`[data-theme-choice="${id}"]`));
    const reset = () => click(panel.querySelector('[data-theme-system]'));
    const initialize = () => events.DOMContentLoaded();
    const open = (index = 0) => buttons[index].dispatch('click');
    const cancel = () => {
        const event = { defaultPrevented: false, preventDefault() { this.defaultPrevented = true; } };
        panel.dispatch('cancel', event);
        if (!event.defaultPrevented) panel.close();
    };
    return {
        store, events, root, meta, buttons, panel, document, click, select, reset, initialize, open, cancel,
        choices: () => panel.querySelectorAll('[data-theme-choice]'),
        systemControl: () => {
            const control = panel.querySelector('[data-theme-system]');
            assert.ok(control, 'system preference control exists');
            return control;
        },
        status: () => panel.querySelector('[data-theme-status]')
    };
}

test('all nine saved palettes set their color and light or dark mode before controls initialize', () => {
    for (const palette of palettes) {
        const app = setup(palette.id, palette.mode !== 'dark');
        assert.equal(app.root.dataset.theme, palette.id);
        assert.equal(app.root.dataset.themeMode, palette.mode);
        assert.equal(app.meta.content, palette.color);
        assert.equal(app.buttons.length, 0);
    }
});

test('system preference sets first-paint mode and invalid saved palettes fall back to the system', () => {
    const dark = setup(undefined, true), light = setup('invalid');
    assert.equal(dark.root.dataset.theme, 'dark');
    assert.equal(dark.root.dataset.themeMode, 'dark');
    assert.equal(light.root.dataset.theme, 'light');
    assert.equal(light.root.dataset.themeMode, 'light');
});

test('appearance opens nine direct theme buttons and any selection persists without closing', () => {
    const app = setup('light'); app.initialize(); app.open();
    assert.equal(app.root.dataset.theme, 'light');
    assert.equal(app.panel.open, true);
    assert.equal(app.buttons.length, 2);
    assert.deepEqual(app.choices().map(choice => choice.dataset.themeChoice).sort(), palettes.map(palette => palette.id).sort());
    assert.ok(app.choices().every(choice => choice.type === 'button'));
    for (const palette of palettes) {
        app.select(palette.id);
        assert.equal(app.root.dataset.theme, palette.id);
        assert.equal(app.root.dataset.themeMode, palette.mode);
        assert.equal(app.meta.content, palette.color);
        assert.equal(app.store.get('workspace-theme'), palette.id);
        assert.equal(app.panel.open, true);
        assert.ok(app.buttons.every(button => button.attrs['aria-label'].includes(palette.name)));
        assert.equal(app.choices().filter(choice => choice.attrs['aria-pressed'] === 'true').length, 1);
        assert.equal(app.choices().find(choice => choice.dataset.themeChoice === palette.id).attrs['aria-pressed'], 'true');
        assert.equal(app.systemControl().attrs['aria-pressed'], 'false');
        assert.match(app.status().textContent, new RegExp(palette.name));
    }
});

test('system control removes the saved choice, follows current OS preference, and permits a later manual choice', () => {
    for (const saved of ['ink', 'tatsumaki']) {
        const app = setup(saved); app.initialize(); app.open();
        assert.equal(app.root.dataset.theme, saved);
        assert.equal(app.systemControl().attrs['aria-pressed'], 'false');
        app.reset();
        assert.equal(app.store.has('workspace-theme'), false);
        assert.equal(app.root.dataset.theme, 'light');
        assert.equal(app.root.dataset.themeMode, 'light');
        assert.equal(app.systemControl().attrs['aria-pressed'], 'true');
        assert.match(app.status().textContent, /跟随系统.*日间/);
        app.events.system({ matches: true });
        assert.equal(app.root.dataset.theme, 'dark');
        assert.equal(app.root.dataset.themeMode, 'dark');
        assert.match(app.status().textContent, /跟随系统.*夜间/);
        app.select('paper'); app.events.system({ matches: false });
        assert.equal(app.root.dataset.theme, 'paper');
        assert.equal(app.systemControl().attrs['aria-pressed'], 'false');
        assert.equal(app.store.get('workspace-theme'), 'paper');
    }
});

test('system preference applies until a palette is chosen and initially focuses the system control', () => {
    const app = setup(); app.events.system({ matches: true });
    assert.equal(app.root.dataset.theme, 'dark');
    app.initialize(); app.open();
    assert.equal(app.systemControl().attrs['aria-pressed'], 'true');
    assert.equal(app.document.activeElement, app.systemControl());
    app.select('sage'); app.events.system({ matches: false });
    assert.equal(app.root.dataset.theme, 'sage');
});

test('closing and Escape restore the opening control without changing the theme', () => {
    const app = setup('sand'); app.initialize(); app.open(1);
    assert.equal(app.document.activeElement, app.choices().find(choice => choice.dataset.themeChoice === 'sand'));
    app.click(app.panel.querySelector('[data-theme-close]'));
    assert.equal(app.panel.open, false);
    assert.equal(app.document.activeElement, app.buttons[1]);
    assert.equal(app.root.dataset.theme, 'sand');
    assert.ok(app.buttons.every(button => button.attrs['aria-expanded'] === 'false'));
    app.open(); app.cancel();
    assert.equal(app.panel.open, false);
    assert.equal(app.document.activeElement, app.buttons[0]);
});

test('clicking the backdrop closes while clicking the dialog surface keeps it open', () => {
    const app = setup('rose'); app.initialize(); app.open();
    app.panel.dispatch('click', { target: app.panel, clientX: 100, clientY: 100 });
    assert.equal(app.panel.open, true);
    app.panel.dispatch('click', { target: app.panel, clientX: 5, clientY: 100 });
    assert.equal(app.panel.open, false);
    assert.equal(app.document.activeElement, app.buttons[0]);
    assert.equal(app.root.dataset.theme, 'rose');
});

test('storage restrictions do not block direct selection or restoring system mode', () => {
    const app = setup(undefined, true, true); app.initialize(); app.open(); app.select('ink');
    assert.equal(app.root.dataset.theme, 'ink');
    app.events.system({ matches: false });
    assert.equal(app.root.dataset.theme, 'ink');
    app.reset();
    assert.equal(app.root.dataset.theme, 'light');
    assert.equal(app.systemControl().attrs['aria-pressed'], 'true');
});

test('cross-tab choices update mode, controls and the open picker, including system reset', () => {
    const app = setup('blue', true); app.initialize(); app.open();
    app.events.storage({ key: 'workspace-theme', newValue: 'ink' });
    assert.equal(app.root.dataset.theme, 'ink');
    assert.equal(app.root.dataset.themeMode, 'dark');
    assert.equal(app.choices().find(choice => choice.dataset.themeChoice === 'ink').attrs['aria-pressed'], 'true');
    assert.equal(app.systemControl().attrs['aria-pressed'], 'false');
    assert.ok(app.buttons.every(button => button.attrs['aria-label'].includes('墨蓝')));
    app.events.storage({ key: 'workspace-theme', newValue: 'tatsumaki' });
    assert.equal(app.root.dataset.theme, 'tatsumaki');
    assert.equal(app.root.dataset.themeMode, 'light');
    assert.equal(app.meta.content, '#f3f3f0');
    assert.equal(app.choices().find(choice => choice.dataset.themeChoice === 'tatsumaki').attrs['aria-pressed'], 'true');
    assert.ok(app.buttons.every(button => button.attrs['aria-label'].includes('龙卷')));
    app.events.storage({ key: 'workspace-theme', newValue: null });
    assert.equal(app.root.dataset.theme, 'dark');
    assert.equal(app.systemControl().attrs['aria-pressed'], 'true');
    app.events.system({ matches: false });
    assert.equal(app.root.dataset.theme, 'light');
});

test('unrelated storage changes are ignored and clearing storage restores system mode', () => {
    const app = setup('paper', true); app.initialize();
    app.events.storage({ key: 'unrelated-setting', newValue: 'rose' });
    assert.equal(app.root.dataset.theme, 'paper');
    app.events.storage({ key: null, newValue: null });
    assert.equal(app.root.dataset.theme, 'dark');
    assert.equal(app.systemControl().attrs['aria-pressed'], 'true');
});
