const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// A small DOM surface keeps these annotation tests runnable with node --test.
function fixture() {
    const frames = [], observers = [];
    let document;
    class Node {
        constructor(tag = '', text = '') {
            this.nodeType = tag === '#text' ? 3 : tag === '#fragment' ? 11 : 1;
            this.tagName = tag.toUpperCase(); this.nodeValue = text;
            this.childNodes = []; this.parentElement = null; this.attrs = {};
            this.style = {}; this.listeners = {}; this.hidden = false;
        }
        get textContent() { return this.nodeType === 3 ? this.nodeValue : this.childNodes.map(n => n.textContent).join(''); }
        set textContent(value) { this.childNodes = []; if (String(value)) this.appendChild(new Node('#text', String(value))); }
        get className() { return this.attrs.class || ''; }
        set className(value) { this.attrs.class = value; }
        get id() { return this.attrs.id || ''; }
        set id(value) { this.attrs.id = value; }
        get isConnected() { return document.body.contains(this); }
        get previousSibling() { const items = this.parentElement?.childNodes || []; return items[items.indexOf(this) - 1] || null; }
        get nextSibling() { const items = this.parentElement?.childNodes || []; return items[items.indexOf(this) + 1] || null; }
        get firstChild() { return this.childNodes[0] || null; }
        get lastChild() { return this.childNodes[this.childNodes.length - 1] || null; }
        get dataset() { return Object.fromEntries(Object.entries(this.attrs).filter(([k]) => k.startsWith('data-')).map(([k, v]) => [k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v])); }
        appendChild(node) { if (node.nodeType === 11) { [...node.childNodes].forEach(n => this.appendChild(n)); return node; } node.parentElement = this; this.childNodes.push(node); return node; }
        append(...nodes) { nodes.forEach(n => this.appendChild(typeof n === 'string' ? new Node('#text', n) : n)); }
        replaceChild(replacement, old) { const i = this.childNodes.indexOf(old); const nodes = replacement.nodeType === 11 ? replacement.childNodes : [replacement]; nodes.forEach(n => n.parentElement = this); this.childNodes.splice(i, 1, ...nodes); old.parentElement = null; return old; }
        remove() { if (this.parentElement) { this.parentElement.childNodes = this.parentElement.childNodes.filter(n => n !== this); this.parentElement = null; } }
        contains(node) { return this === node || this.childNodes.some(n => n.contains(node)); }
        setAttribute(k, v) { this.attrs[k] = String(v); }
        getAttribute(k) { return this.attrs[k] ?? null; }
        removeAttribute(k) { delete this.attrs[k]; }
        matches(selector) { return selector.split(',').some(part => { const s = part.trim(); if (s.startsWith('.')) return this.className.split(/\s+/).includes(s.slice(1)); if (s.startsWith('[')) { const [k, v] = s.slice(1, -1).split('='); return k in this.attrs && (v === undefined || this.attrs[k] === v.replaceAll('"', '')); } return this.tagName.toLowerCase() === s; }); }
        closest(selector) { for (let n = this; n; n = n.parentElement) if (n.matches(selector)) return n; return null; }
        querySelectorAll(selector) { return this.childNodes.flatMap(n => [...(n.nodeType === 1 && n.matches(selector) ? [n] : []), ...n.querySelectorAll(selector)]); }
        querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
        addEventListener(type, listener) { (this.listeners[type] ||= []).push(listener); }
        removeEventListener(type, listener) { this.listeners[type] = (this.listeners[type] || []).filter(f => f !== listener); }
        dispatch(type, target = this, more = {}) { const event = { type, target, preventDefault() {}, stopPropagation() {}, stopImmediatePropagation() {}, ...more }; (this.listeners[type] || []).forEach(f => f(event)); }
        getBoundingClientRect() { return { left: 20, right: 90, top: 100, bottom: 120, width: 70, height: 20 }; }
        getClientRects() { return this.isConnected ? [this.getBoundingClientRect()] : []; }
        focus() { document.activeElement = this; }
    }
    document = new Node('document');
    document.body = new Node('body'); document.documentElement = new Node('html');
    document.documentElement.clientWidth = 390; document.documentElement.clientHeight = 844;
    document.createElement = tag => new Node(tag);
    document.createTextNode = text => new Node('#text', text);
    document.createDocumentFragment = () => new Node('#fragment');
    document.createTreeWalker = (root, what, filter) => { const list = []; const walk = node => { for (const child of node.childNodes) { if (child.nodeType === 3 && (!filter || filter.acceptNode(child) === 1)) list.push(child); walk(child); } }; walk(root); let i = 0; return { nextNode: () => list[i++] || null }; };
    const context = { document, console, NodeFilter: { SHOW_TEXT: 4, FILTER_ACCEPT: 1, FILTER_REJECT: 2 }, innerWidth: 390, innerHeight: 844,
        requestAnimationFrame: callback => { frames.push(callback); return frames.length; }, cancelAnimationFrame() {},
        addEventListener: (...args) => document.addEventListener(...args), removeEventListener: (...args) => document.removeEventListener(...args),
        MutationObserver: class { constructor(cb) { this.callback = cb; observers.push(this); } observe() {} disconnect() {} takeRecords() { return []; } }
    };
    context.window = context;
    const source = path.join(__dirname, '..', 'glossary-highlighter.js');
    if (fs.existsSync(source)) vm.runInNewContext(fs.readFileSync(source, 'utf8'), context);
    const el = (tag, text = '', className = '') => { const n = new Node(tag); n.className = className; n.textContent = text; return n; };
    const container = el('main'); document.body.appendChild(container);
    const terms = [{ id: 'txn', term: '事务', definition: '一组要么全部成功，要么全部失败的操作。' }, { id: 'aop', term: 'AOP', definition: '<img src=x onerror=alert(1)>只是文本。' }];
    const index = { get: id => terms.find(t => t.id === id), match: text => [...text.matchAll(/事务|AOP/g)].map(m => ({ start: m.index, end: m.index + m[0].length, termId: m[0] === '事务' ? 'txn' : 'aop' })) };
    const api = context.GlossaryHighlighter;
    return { api, el, container, document, index, observers, flush: () => { while (frames.length) frames.shift()(); } };
}

test('annotations preserve answer text, deduplicate each term and skip code, controls and metadata', () => {
    const f = fixture();
    assert.ok(f.api, 'GlossaryHighlighter is available');
    const answer = f.el('section', '', 'study-answer');
    for (const tag of ['code', 'pre', 'button', 'a', 'textarea', 'select', 'svg']) answer.appendChild(f.el(tag, '事务 AOP'));
    const editable = f.el('div', '事务 AOP'); editable.setAttribute('contenteditable', 'true'); answer.appendChild(editable);
    for (const cls of ['study-ratings', 'study-card-source', 'study-linked']) answer.appendChild(f.el('div', '事务 AOP', cls));
    const text = f.el('p', '事务也叫事务，AOP。'); answer.appendChild(text);
    f.container.appendChild(answer); f.container.appendChild(f.el('h2', '事务 AOP'));
    const before = f.container.textContent;
    f.api.init(f.index, f.container); f.api.enhance(f.container); f.api.enhance(answer);
    assert.equal(f.container.textContent, before);
    assert.equal(f.container.querySelectorAll('[data-glossary-term]').length, 2);
    assert.equal(text.querySelectorAll('[data-glossary-term]').length, 2);
    assert.equal(text.querySelectorAll('[data-glossary-term]')[0].getAttribute('role'), 'button');
});

test('popup renders data as text, supports keyboard close, and returns focus without editing the answer', () => {
    const f = fixture(); assert.ok(f.api, 'GlossaryHighlighter is available');
    const answer = f.el('div', 'AOP', 'study-answer'); f.container.appendChild(answer);
    f.api.init(f.index, f.container);
    const trigger = answer.querySelector('[data-glossary-term]'); trigger.focus();
    f.container.dispatch('keydown', trigger, { key: 'Enter' });
    const popup = f.document.body.querySelector('[role="dialog"]');
    assert.ok(popup && !popup.hidden);
    assert.match(popup.textContent, /<img src=x onerror=alert\(1\)>只是文本。/);
    assert.equal(popup.querySelector('img'), null);
    assert.equal(trigger.getAttribute('aria-expanded'), 'true');
    f.document.dispatch('keydown', popup, { key: 'Escape' });
    assert.ok(popup.hidden);
    assert.equal(f.document.activeElement, trigger);
    assert.equal(trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(answer.textContent, 'AOP');
});

test('changed answers are annotated and a removed active trigger closes its popup', () => {
    const f = fixture(); assert.ok(f.api, 'GlossaryHighlighter is available');
    f.api.init(f.index, f.container);
    const answer = f.el('div', '事务', 'study-answer'); f.container.appendChild(answer);
    f.observers[0].callback([{ type: 'childList', target: f.container, addedNodes: [answer], removedNodes: [] }]); f.flush();
    const trigger = answer.querySelector('[data-glossary-term]');
    assert.ok(trigger);
    f.container.dispatch('click', trigger);
    answer.remove();
    f.observers[0].callback([{ type: 'childList', target: f.container, addedNodes: [], removedNodes: [answer] }]); f.flush();
    assert.ok(f.document.body.querySelector('[role="dialog"]').hidden);
});

test('English word boundaries survive inline markup while separate paragraphs stay independent', () => {
    const f = fixture(); assert.ok(f.api, 'GlossaryHighlighter is available');
    const answer = f.el('div', '', 'study-answer');
    const compound = f.el('p', 'prefix'); compound.appendChild(f.el('strong', 'AOP')); compound.appendChild(f.document.createTextNode('suffix'));
    answer.append(compound, f.el('p', 'Java'), f.el('p', 'AOP'));
    f.container.appendChild(answer); f.api.init(f.index, f.container);
    assert.equal(compound.querySelectorAll('[data-glossary-term]').length, 0);
    assert.equal(answer.querySelectorAll('[data-glossary-term]').length, 1);
});

test('a line break nested inside adjacent inline markup remains a word boundary', () => {
    const f = fixture(); assert.ok(f.api, 'GlossaryHighlighter is available');
    const before = f.el('div', '', 'study-answer');
    const leading = f.el('strong'); const leadingInner = f.el('em', 'Java');
    leadingInner.appendChild(f.el('br')); leading.appendChild(leadingInner);
    before.append(leading, f.document.createTextNode('AOP'));
    const after = f.el('div', 'AOP', 'study-answer');
    const trailing = f.el('strong'); const trailingInner = f.el('em');
    trailingInner.append(f.el('br'), f.document.createTextNode('Java')); trailing.appendChild(trailingInner);
    after.appendChild(trailing); f.container.append(before, after);
    f.api.init(f.index, f.container);
    assert.equal(before.querySelectorAll('[data-glossary-term]').length, 1);
    assert.equal(after.querySelectorAll('[data-glossary-term]').length, 1);
});
