const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const shell = fs.readFileSync(path.join(__dirname, '..', 'workspace-shell.js'), 'utf8');

function setup(source = 'bank') {
    const elements = new Map(), headers = [], classes = new Set();
    const element = () => ({
        innerHTML: '', textContent: '', placeholder: '', dataset: {}, attributes: {},
        classList: { add() {}, remove() {}, toggle() {} },
        setAttribute(name, value) { this.attributes[name] = value; },
        addEventListener() {}, appendChild() {}, prepend() {}, querySelectorAll() { return []; }
    });
    const get = key => {
        if (!elements.has(key)) elements.set(key, element());
        return elements.get(key);
    };
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
        closeAddModal() {}, WorkspaceControls: { init() {}, enhance() {} },
        document: {
            body: { dataset: {}, classList: { toggle(name, active) { active ? classes.add(name) : classes.delete(name); } }, prepend(el) { headers.push(el); } },
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
