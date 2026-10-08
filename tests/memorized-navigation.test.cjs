const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const shell = fs.readFileSync(path.join(__dirname, '..', 'workspace-shell.js'), 'utf8');

function setup(source = 'bank') {
    const elements = new Map(), headers = [], classes = new Set();
    const element = (tagName = 'div') => ({
        tagName, children: [], parentNode: null,
        textContent: '', placeholder: '', dataset: {}, attributes: {},
        classList: { add() {}, remove() {}, toggle() {} },
        get innerHTML() { return this.children.map(child => child.outerHTML).join(''); },
        set innerHTML(html) { this.children = html ? [{ outerHTML: html, parentNode: this }] : []; },
        get outerHTML() {
            const attributes = Object.entries(this.attributes).map(([name, value]) => ` ${name}="${value}"`).join('');
            return `<${this.tagName}${attributes}>${this.innerHTML || this.textContent}</${this.tagName}>`;
        },
        setAttribute(name, value) { this.attributes[name] = value; },
        appendChild(child) {
            if (child.parentNode) child.parentNode.children.splice(child.parentNode.children.indexOf(child), 1);
            child.parentNode = this; this.children.push(child); return child;
        },
        prepend(child) { this.appendChild(child); this.children.unshift(this.children.pop()); },
        insertAdjacentHTML(position, html) {
            assert.ok(['beforebegin', 'afterbegin', 'beforeend', 'afterend'].includes(position));
            const adjacent = position === 'beforebegin' || position === 'afterend';
            const parent = adjacent ? this.parentNode : this;
            assert.ok(parent, 'adjacent insertion requires an attached element');
            const index = adjacent ? parent.children.indexOf(this) + (position === 'afterend' ? 1 : 0)
                : position === 'afterbegin' ? 0 : parent.children.length;
            parent.children.splice(index, 0, { outerHTML: html, parentNode: parent });
        },
        addEventListener() {}, querySelectorAll() { return []; }
    });
    const get = key => {
        if (!elements.has(key)) elements.set(key, element());
        return elements.get(key);
    };
    const body = element('body'), mobileTopbar = get('.mobile-topbar'), mobileTitle = get('topbarTitle');
    mobileTitle.setAttribute('id', 'topbarTitle');
    mobileTopbar.appendChild(mobileTitle); body.appendChild(mobileTopbar);
    body.dataset = {};
    body.classList.toggle = (name, active) => { active ? classes.add(name) : classes.delete(name); };
    const prepend = body.prepend;
    body.prepend = function(child) { headers.push(child); prepend.call(this, child); };
    const links = ['bank', 'memorized', 'more'].map(key => {
        const link = element();
        link.dataset.workspaceLink = key;
        link.classList.toggle = (name, active) => { link[name] = active; };
        return link;
    });
    const context = {
        showGlossary: false, showInterviewExp: false, showResumePrep: false,
        showRecruitment: false, showResources: false, showTrash: false,
        showQuiz: false, showMarkedOnly: false, studySource: source, activeCategory: 'all',
        closeMorePanel() {}, closeCategoryPanel() {}, clearStudyFilters() {},
        resetStudyModes() {}, buildCategoryBtns() {}, renderAll() {}, scrollTo() {},
        openStudy(next) { context.studySource = next; }, getDeletedNotes: () => [],
        getStudyPool: next => next === 'memorized' ? [{ id: 'bank-test' }] : [],
        openBackupModal() { context.backupOpened = true; },
        closeAddModal() {}, WorkspaceControls: { init() {}, enhance() {} },
        document: {
            body,
            querySelector: get, getElementById: get, createElement: element,
            querySelectorAll: selector => selector === '[data-workspace-link]' ? links : [],
            addEventListener() {}
        }
    };
    context.window = context;
    vm.createContext(context); vm.runInContext(shell, context);
    return { context, elements, headers, links, classes, run: code => vm.runInContext(code, context) };
}

test('memorized navigation opens the archived question source', () => {
    const app = setup();
    app.run('navigateWorkspace("memorized")');
    assert.equal(app.context.studySource, 'memorized');
    assert.equal(app.run('currentWorkspacePage()'), 'memorized');
});

test('memorized questions retain a searchable category directory and mobile More selection', () => {
    const app = setup('memorized');
    app.run('renderWorkspaceShell()');
    assert.ok(app.classes.has('context-directory'));
    assert.equal(app.elements.get('searchInput').placeholder, '搜索已背题目、答案或题号');
    assert.equal(app.links.find(link => link.dataset.workspaceLink === 'memorized').attributes['aria-current'], 'page');
    assert.equal(app.links.find(link => link.dataset.workspaceLink === 'more').attributes['aria-current'], 'page');
});

test('desktop navigation and the mobile More panel expose the memorized area', () => {
    const app = setup();
    app.run('initWorkspaceShell()');
    assert.match(app.headers[0].innerHTML, /data-workspace-link="bank"[^]*data-workspace-link="memorized">已背区/);
    assert.match(app.elements.get('.more-grid').innerHTML, /data-workspace-link="memorized"[^]*已背区/);
});

test('desktop and mobile topbars display the panorama before their tools and title', () => {
    const app = setup();
    app.run('initWorkspaceShell()');
    const desktop = app.headers[0].innerHTML, mobile = app.elements.get('.mobile-topbar').innerHTML;
    for (const html of [desktop, mobile]) {
        assert.equal((html.match(/class="workspace-top-art"/g) || []).length, 1);
        assert.match(html, /class="workspace-top-art" aria-hidden="true"><img src="\.\/assets\/themes\/tatsumaki-panorama\.png" alt=""/);
        assert.match(html, /width="3840" height="1600"/);
    }
    assert.match(desktop, /<\/nav>[^]*class="workspace-top-art"[^]*class="workspace-tools"/);
    assert.match(mobile, /class="workspace-top-art"[^]*id="topbarTitle"/);
    assert.equal(app.elements.get('topbarTitle').parentNode, app.elements.get('.mobile-topbar'));
});

test('desktop navigation and the mobile More panel offer local backup without cloud sync', () => {
    const app = setup('memorized');
    app.run('initWorkspaceShell()');
    for (const html of [app.headers[0].innerHTML, app.elements.get('.more-grid').innerHTML]) {
        assert.match(html, /data-workspace-link="backup"[^]*本地备份/);
        assert.doesNotMatch(html, /data-workspace-link="sync"|数据同步|数据与同步/);
    }
    app.run('navigateWorkspace("backup")');
    assert.equal(app.context.backupOpened, true);
    assert.equal(app.context.studySource, 'memorized');
});
