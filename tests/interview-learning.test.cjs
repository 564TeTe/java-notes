const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');

function setup(store = new Map()) {
    const elements = new Map();
    const getElement = id => {
        if (!elements.has(id)) {
            const listeners = new Map();
            const element = {
                value: '', textContent: '', innerHTML: '', style: {}, dataset: {},
                classList: { add() {}, remove() {}, toggle() {} },
                querySelectorAll: () => [], querySelector: () => element,
                setAttribute() {}, removeAttribute() {}, appendChild() {}, focus() {},
                addEventListener(type, callback) {
                    listeners.set(type, [...(listeners.get(type) || []), callback]);
                },
                click(dataset) {
                    const button = { dataset, disabled: false };
                    const event = { target: { closest: selector =>
                        selector === '[data-interview]' && dataset.interview ||
                        selector === '[data-study]' && dataset.study ? button : null } };
                    for (const listener of listeners.get('click') || []) listener(event);
                }
            };
            elements.set(id, element);
        }
        return elements.get(id);
    };
    const context = vm.createContext({
        console, URL, FormData, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value), removeItem: key => store.delete(key) },
        document: { body: getElement('body'), getElementById: getElement, querySelector: getElement, querySelectorAll: () => [], addEventListener() {}, createElement: () => getElement('dialog') },
        setTimeout() {}, clearTimeout() {}, confirm: () => true, requestAnimationFrame() {}, scrollTo() {}
    });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    for (const name of ['resume-data.js', 'resume-question-expansion.js', 'resume-claims.js', 'resume-workbench.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'data/question-curation.js', 'study-core.js']) run(fs.readFileSync(path.join(root, name), 'utf8'));
    for (const match of fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)) if (match[1].includes('const NOTES')) run(match[1]);
    for (const name of ['study-module.js', 'interview-module.js']) run(fs.readFileSync(path.join(root, name), 'utf8'));
    run('renderAll = function() {}; buildCategoryBtns = function() {}; toast = function() {}; loadState(); initStudyWorkspace();');
    const click = dataset => getElement('notesContainer').click(dataset);
    return { run, click, store };
}

test('company practice immediately draws only the filtered company questions', () => {
    const { run, click } = setup();
    run('interviewCompany=getInterviewCompanies()[0]; interviewKeyword=getCompanyQuestions()[0].question; showInterviewExp=true; const expectedIds=getInterviewFilteredQuestions().map(n=>n.id);');
    assert.ok(run('expectedIds.length > 0'));
    click({ interview: 'company-practice', company: run('interviewCompany') });
    assert.equal(run('showQuiz'), true);
    assert.equal(run('showInterviewExp'), false);
    assert.equal(run('quizStarted'), true, 'one click must show questions rather than another empty start screen');
    assert.ok(run('quizNotes.length > 0 && quizNotes.every(n=>expectedIds.includes(n.id))'));
    assert.equal(run('quizLinkedTitle'), run('interviewCompany + " 面经"'));
    assert.match(run('renderStudyQuiz()'), /class="study-quiz-card"/);
});

test('the shared quiz navigation from a company dossier starts that company instead of an empty notebook', () => {
    const { run } = setup();
    run(fs.readFileSync(path.join(root, 'workspace-shell.js'), 'utf8'));
    run('studySource="personal"; showInterviewExp=true; interviewCompany=getInterviewCompanies()[0]; interviewKeyword=getCompanyQuestions()[0].question; const expectedIds=getInterviewFilteredQuestions().map(n=>n.id); navigateWorkspace("quiz");');
    assert.equal(run('quizStarted'), true);
    assert.equal(run('quizSource'), 'bank');
    assert.ok(run('quizNotes.length>0 && quizNotes.every(n=>expectedIds.includes(n.id))'));
});

test('source practice also draws an immediately usable group', () => {
    const { run, click } = setup();
    run('const source=getInterviewSources().find(s=>s.questionIds.some(id=>getBankStudyRecords().some(n=>n.id===id)));');
    click({ interview: 'practice', id: run('source.id') });
    assert.equal(run('quizStarted'), true);
    assert.ok(run('quizNotes.length > 0 && quizNotes.every(n=>source.questionIds.includes(n.id))'));
});

test('interview questions expose memorized and priority actions with the canonical ID', () => {
    const { run, click, store } = setup();
    run('const target=getCompanyQuestions()[0]; const original=JSON.stringify(target); showInterviewExp=true;');
    const id = run('target.id');
    assert.match(run('renderInterviewQuestion(target)'), new RegExp(`data-study="memorize" data-id="${id}"`));
    assert.match(run('renderInterviewQuestion(target)'), new RegExp(`data-study="mark" data-id="${id}"`));
    click({ study: 'mark', id });
    click({ study: 'memorize', id });
    assert.ok(run('memorizedIds.has(target.id) && markedIds.has(target.id)'));
    assert.equal(run('JSON.stringify(getStudyPool("memorized").find(n=>n.id===target.id))'), run('original'));
    assert.deepEqual(JSON.parse(store.get('memorized-ids')), [id]);
    assert.deepEqual(JSON.parse(store.get('marked-ids')), [id]);
    const restored = setup(store);
    assert.ok(restored.run(`memorizedIds.has(${JSON.stringify(id)}) && markedIds.has(${JSON.stringify(id)})`));
    assert.match(restored.run(`renderInterviewQuestion(getBankStudyRecords().find(n=>n.id===${JSON.stringify(id)}))`), /data-study="restore-memorized"[^]*aria-pressed="true"/);
});

test('memorized company questions remain in their company dossier and can be practiced again', () => {
    const { run, click } = setup();
    run('interviewCompany=getInterviewCompanies()[0]; const target=getCompanyQuestions()[0]; memorizeStudyNote(target.id); interviewKeyword=target.question; const expected=getInterviewFilteredQuestions();');
    assert.ok(run('expected.some(n=>n.id===target.id)'), 'moving to the memorized area must not erase the source dossier');
    click({ interview: 'company-practice', company: run('interviewCompany') });
    assert.ok(run('quizNotes.some(n=>n.id===target.id)'));
    assert.ok(run('getQuizPool().some(n=>n.id===target.id)'));
    run('startQuiz("bank");');
    assert.ok(run('!getQuizPool().some(n=>n.id===target.id)'), 'ordinary bank practice retains its existing archived exclusion');
});

test('deleted company questions are never returned or drawn through interview links', () => {
    const { run, click } = setup();
    run('interviewCompany=getInterviewCompanies()[0]; const target=getCompanyQuestions()[0]; showInterviewExp=true; deleteNote(target.id); const remaining=getInterviewFilteredQuestions().map(n=>n.id);');
    assert.ok(run('!getCompanyQuestions().some(n=>n.id===target.id)'));
    click({ interview: 'company-practice', company: run('interviewCompany') });
    assert.ok(run('quizNotes.every(n=>remaining.includes(n.id) && n.id!==target.id)'));
});

test('an empty company practice keeps the dossier open and explains the empty range', () => {
    const { run, click } = setup();
    run('showInterviewExp=true; interviewKeyword="no-such-interview-987654321"; let message=""; toast=function(text){message=text;};');
    click({ interview: 'company-practice', company: 'all' });
    assert.equal(run('showInterviewExp'), true);
    assert.equal(run('showQuiz'), false);
    assert.match(run('message'), /没有可抽查/);
});

test('custom company questions retain their answer and learning state after reload and returning to the bank', () => {
    const { run, click, store } = setup();
    run('const target=saveCustomBankQuestion({question:"自建公司的问题？",answer:"自己的完整回答",category:"Java 基础",company:"自建公司甲"}); showInterviewExp=true;');
    const id = run('target.id');
    click({ study: 'mark', id });
    click({ study: 'memorize', id });
    const restored = setup(store);
    assert.ok(restored.run(`getCompanyQuestions("自建公司甲").some(n=>n.id===${JSON.stringify(id)} && n.answer==="自己的完整回答")`));
    restored.click({ study: 'restore-memorized', id });
    assert.ok(restored.run(`!memorizedIds.has(${JSON.stringify(id)}) && markedIds.has(${JSON.stringify(id)}) && getStudyPool("bank").some(n=>n.id===${JSON.stringify(id)})`));
    assert.deepEqual(JSON.parse(store.get('memorized-ids')), []);
});
