const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function setup(saved, systemDark = false, blocked = false) {
    const store = new Map(saved ? [['workspace-theme', saved]] : []);
    const events = {}, root = { dataset: {} }, meta = {};
    const buttons = [];
    const parent = { append: b => buttons.push(b) };
    const media = { matches: systemDark, addEventListener: (name, fn) => events.system = event => { media.matches = event.matches; fn(event); } };
    const document = {
        documentElement: root,
        querySelector: selector => selector.includes('theme-color') ? meta : parent,
        querySelectorAll: () => buttons,
        addEventListener: (name, fn) => events[name] = fn,
        createElement: () => ({ attrs: {}, setAttribute(k,v) { this.attrs[k]=v; }, addEventListener(name, fn) { this[name]=fn; } })
    };
    const context = { document, matchMedia: () => media, localStorage: {
        getItem: k => { if (blocked) throw Error('blocked'); return store.get(k); },
        setItem: (k,v) => { if (blocked) throw Error('blocked'); store.set(k,v); }
    }, addEventListener: (name, fn) => events[name] = fn };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../workspace-theme.js'), 'utf8'), context);
    return { store, events, root, meta, buttons };
}

test('saved theme takes precedence over the system before page controls initialize', () => {
    const app = setup('light', true);
    assert.equal(app.root.dataset.theme, 'light');
    assert.equal(setup('dark').root.dataset.theme, 'dark');
    assert.equal(setup('blue', true).root.dataset.theme, 'blue');
    assert.equal(setup(undefined, true).root.dataset.theme, 'dark');
    assert.equal(setup('invalid').root.dataset.theme, 'light');
});

test('desktop and mobile switches stay in sync and persist the selected theme', () => {
    const app = setup('light');
    app.events.DOMContentLoaded();
    assert.equal(app.buttons.length, 2);
    app.buttons[0].click();
    assert.equal(app.root.dataset.theme, 'blue');
    assert.equal(app.meta.content, '#eef3f9');
    assert.equal(app.store.get('workspace-theme'), 'blue');
    assert.ok(app.buttons.every(b => b.attrs['aria-label'].includes('当前雾蓝')));
    app.buttons[1].click();
    assert.equal(app.root.dataset.theme, 'dark');
    assert.equal(app.meta.content, '#101214');
    assert.equal(app.store.get('workspace-theme'), 'dark');
    assert.ok(app.buttons.every(b => b.attrs['aria-label'].includes('当前夜间')));
    app.buttons[1].click();
    assert.equal(app.root.dataset.theme, 'light');
    assert.equal(app.store.get('workspace-theme'), 'light');
});

test('storage restrictions do not prevent switching themes', () => {
    const app = setup(undefined, false, true);
    app.events.DOMContentLoaded();
    app.buttons[0].click();
    assert.equal(app.root.dataset.theme, 'blue');
});

test('system changes apply until an explicit preference is selected', () => {
    const app = setup();
    app.events.system({matches: true});
    assert.equal(app.root.dataset.theme, 'dark');
    app.events.DOMContentLoaded();
    app.buttons[0].click();
    app.events.system({matches: true});
    assert.equal(app.root.dataset.theme, 'light');
});

test('a theme selected in another tab updates both controls', () => {
    const app = setup('light');
    app.events.DOMContentLoaded();
    app.events.storage({key:'workspace-theme',newValue:'dark'});
    assert.equal(app.root.dataset.theme, 'dark');
    assert.ok(app.buttons.every(b => b.attrs['aria-label'].includes('当前夜间')));
    app.events.storage({key:'workspace-theme',newValue:'blue'});
    assert.equal(app.root.dataset.theme,'blue');
    assert.ok(app.buttons.every(b => b.attrs['aria-label'].includes('当前雾蓝')));
});
