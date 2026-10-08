const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');

test('focused review includes memorized questions and personal copies regardless of the previous workspace', () => {
    const { run } = setup();
    run('const focused=saveCustomBankQuestion({question:"面经重点",answer:"原始答案",category:"公司分类",company:"测试公司"}); userNotes=[{id:"user-focused-copy",sourceId:focused.id,question:"个人理解",answer:"我的理解",category:"笔记分类"}]; markedIds.add(focused.id); markedIds.add("user-focused-copy"); memorizeStudyNote(focused.id); showMarkedOnly=true;');
    for (const source of ['bank', 'personal', 'memorized']) {
        run(`studySource=${JSON.stringify(source)};`);
        assert.deepEqual(Array.from(run('getFilteredNotes().map(n=>n.id).sort()')), [run('focused.id'), 'user-focused-copy'].sort());
        assert.ok(run('studyCategories().includes("公司分类") && studyCategories().includes("笔记分类")'));
    }
    run('deletedIds.add(focused.id);');
    assert.deepEqual(Array.from(run('getFilteredNotes().map(n=>n.id)')), ['user-focused-copy']);
});

test('focused cards restore memorized questions and keep personal copies editable', () => {
    const { run } = setup();
    run('const focused=getStudyPool("bank")[0]; memorizeStudyNote(focused.id); showMarkedOnly=true; studySource="personal";');
    assert.match(run('studyCard(focused)'), /data-study="restore-memorized"/);
    assert.match(run('studyCard(focused)'), /study-status known">已背/);
    const copy = run('studyCard({id:"user-copy",sourceId:focused.id,question:"个人理解",answer:"笔记",category:"Java 基础"})');
    assert.match(copy, /data-study="edit"/);
    assert.doesNotMatch(copy, /data-study="memorize"/);
});

test('focused review deletes questions and moves personal copies according to their own source', () => {
    const { run } = setup();
    run('const target=getStudyPool("bank")[0]; userNotes=[{id:"user-focused-copy",sourceId:target.id,question:"个人理解",answer:"笔记",category:"笔记分類"}]; markedIds.add(target.id); markedIds.add("user-focused-copy"); showMarkedOnly=true; studySource="personal"; deleteNote(target.id);');
    assert.ok(run('deletedIds.has(target.id)'));
    run('studySource="bank"; deleteNote("user-focused-copy");');
    assert.ok(run('!deletedIds.has("user-focused-copy")'));
    assert.ok(run('getBankStudyRecords().some(n=>n.id==="user-focused-copy")'));
    assert.ok(run('!getPersonalNotes().some(n=>n.id==="user-focused-copy")'));
});

test('focused review applies its category filter to the combined collection', () => {
    const { run } = setup();
    run('const target=getStudyPool("bank")[0]; userNotes=[{id:"user-focused-copy",sourceId:target.id,question:"个人理解",answer:"笔记",category:"笔记分类"}]; markedIds.add(target.id); markedIds.add("user-focused-copy"); showMarkedOnly=true; activeCategory="笔记分类";');
    assert.deepEqual(Array.from(run('getFilteredNotes().map(n=>n.id)')), ['user-focused-copy']);
    run('activeCategory="不存在的分类";');
    assert.equal(run('getFilteredNotes().length'), 0);
});

test('desktop category clicks keep the focused collection open', () => {
    const { run } = setup();
    run('const categoryControl=document.getElementById("categoryBtns"); categoryControl.addEventListener=(type,listener)=>{if(type==="click") categoryControl.listener=listener;}; bindEvents(); showMarkedOnly=true; categoryControl.listener({target:{classList:{contains:value=>value==="cat-btn",add(){}},dataset:{cat:"Java 基础"}}});');
    assert.equal(run('showMarkedOnly'), true);
    assert.equal(run('activeCategory'), 'Java 基础');
});

test('linked interview quiz includes memorized questions and uses the linked categories and count', () => {
    const { run } = setup();
    run('const linked=saveCustomBankQuestion({question:"已背面经",answer:"完整答案",category:"面经唯一分类",company:"测试公司"}); memorizeStudyNote(linked.id); startQuiz("bank");');
    assert.ok(run('!getQuizPool().some(n=>n.id===linked.id)'));
    run('quizLinkedIds=[linked.id]; quizLinkedTitle="测试公司";');
    assert.deepEqual(Array.from(run('getQuizPool().map(n=>n.id)')), [run('linked.id')]);
    const html = run('renderStudyQuiz()');
    assert.match(html, /面经题目<small>1 道/);
    assert.match(html, /<option value="面经唯一分类">/);
    assert.doesNotMatch(html, /<option value="MySQL">/);
    run('drawStudyQuiz();');
    assert.equal(run('quizNotes[0].id'), run('linked.id'));
});

function setup() {
    const store = new Map();
    const element = { value: '', textContent: '', innerHTML: '', style: {}, dataset: {},
        classList: { add(){}, remove(){}, toggle(){} }, querySelectorAll: () => [],
        querySelector: () => element, setAttribute(){}, removeAttribute(){}, addEventListener(){}, focus(){} };
    const elements = new Map();
    const getElement = id => {
        if (!elements.has(id)) elements.set(id, { ...element, style: {}, dataset: {} });
        return elements.get(id);
    };
    const context = vm.createContext({ console, URL, FormData, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: k => store.get(k), setItem: (k,v) => store.set(k,v), removeItem: k => store.delete(k) },
        document: { getElementById: getElement, querySelector: () => element, querySelectorAll: () => [], addEventListener(){} },
        setTimeout(){}, clearTimeout(){}, confirm: () => true, requestAnimationFrame(){}, scrollTo(){}, addEventListener(){} });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    for (const name of ['resume-data.js', 'resume-question-expansion.js', 'resume-claims.js', 'resume-workbench.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'data/question-curation.js', 'study-core.js']) run(fs.readFileSync(path.join(root, name), 'utf8'));
    for (const match of fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)) if (match[1].includes('const NOTES')) run(match[1]);
    for (const name of ['study-module.js', 'interview-module.js']) run(fs.readFileSync(path.join(root, name), 'utf8'));
    run('renderAll = function() {}; buildCategoryBtns = function() {}; toast = function() {}; loadState();');
    return { run, store, elements };
}

test('marking a question moves it out of the bank and quiz without changing its content or learning history', () => {
    const { run, store } = setup();
    run('const target = getStudyPool("bank")[0]; const original = JSON.stringify(target); const total = getStudyPool("bank").length; mastery[target.id] = {level:"hard"}; markedIds.add(target.id); memorizeStudyNote(target.id);');
    assert.equal(run('getStudyPool("bank").length'), run('total - 1'));
    assert.equal(run('getStudyPool("memorized").length'), 1);
    assert.equal(run('JSON.stringify(getStudyPool("memorized")[0])'), run('original'));
    assert.equal(run('mastery[target.id].level'), 'hard');
    assert.ok(run('markedIds.has(target.id)'));
    assert.ok(run('!getQuizPool().some(n => n.id === target.id)'));
    assert.deepEqual(JSON.parse(store.get('memorized-ids')), [run('target.id')]);
    run('memorizeStudyNote(target.id);');
    assert.equal(run('getStudyPool("memorized").length'), 1);
});

test('returning a memorized question restores bank eligibility and retains its prior rating', () => {
    const { run } = setup();
    run('const target = getStudyPool("bank")[0]; mastery[target.id] = {level:"known"}; memorizeStudyNote(target.id); restoreMemorizedNote(target.id);');
    assert.ok(run('getStudyPool("bank").some(n => n.id === target.id)'));
    assert.equal(run('getStudyPool("memorized").length'), 0);
    assert.equal(run('mastery[target.id].level'), 'known');
    assert.ok(run('getQuizPool().some(n => n.id === target.id)'));
});

test('custom questions and authored notes can be memorized while saved personal copies remain available', () => {
    const { run } = setup();
    run('const target = saveCustomBankQuestion({question:"自建",answer:"完整答案",category:"Java 基础"}); userNotes=[{id:"user-original",question:"原创",answer:"正文",category:"Java 基础"},{id:"user-copy",sourceId:target.id,question:"个人副本",answer:"我的理解",category:"Java 基础"}]; memorizeStudyNote(target.id); memorizeStudyNote("user-original");');
    assert.equal(run('getStudyPool("memorized").length'), 2);
    assert.ok(run('getPersonalNotes().some(n => n.id === "user-copy")'));
    assert.ok(run('getPersonalNotes().some(n => n.id === "user-original")'));
    assert.ok(run('!getStudyPool("bank").some(n => [target.id,"user-original"].includes(n.id))'));
});

test('trash temporarily hides memorized questions and restore returns them to the memorized area', () => {
    const { run } = setup();
    run('const target=getStudyPool("bank")[0]; memorizeStudyNote(target.id); studySource="memorized"; deleteNote(target.id);');
    assert.equal(run('getStudyPool("memorized").length'), 0);
    assert.ok(run('memorizedIds.has(target.id) && deletedIds.has(target.id)'));
    run('restoreNote(target.id);');
    assert.equal(run('getStudyPool("memorized").length'), 1);
    assert.ok(run('!getStudyPool("bank").some(n => n.id === target.id)'));
    run('permDelete(target.id);');
    assert.ok(run('!memorizedIds.has(target.id)'));
});

test('memorized navigation clears previous filters and cards keep bank operations', () => {
    const { run } = setup();
    run('const target = getStudyPool("bank")[0]; memorizeStudyNote(target.id); studyPriority="P2"; activeCategory="不存在"; studyPage=99; openStudy("memorized");');
    assert.equal(run('studySource'), 'memorized');
    assert.equal(run('studyPage'), 1);
    assert.equal(run('getFilteredNotes().length'), 1);
    const card = run('studyCard(target)');
    assert.match(card, /data-study="restore-memorized"/);
    assert.match(card, /移回题库/);
    assert.match(card, /删除题目/);
    assert.doesNotMatch(card, /删除笔记并移到题库/);
    assert.match(run('renderStudyLibrary(getFilteredNotes())'), /已背题目/);
    run('startQuiz("memorized");');
    assert.equal(run('quizSource'), 'bank');
});

test('known ratings do not automatically move questions and unknown IDs cannot enter the memorized area', () => {
    const { run } = setup();
    run('const target = getStudyPool("bank")[0]; mastery[target.id] = {level:"known"}; memorizeStudyNote("missing");');
    assert.equal(run('getStudyPool("memorized").length'), 0);
    assert.ok(run('getStudyPool("bank").some(n => n.id === target.id)'));
});

test('editing a memorized custom question retains its unique category and returns to the memorized area', () => {
    const { run, elements } = setup();
    run('const target=saveCustomBankQuestion({question:"自建题目",answer:"完整答案",category:"唯一自建分类"}); memorizeStudyNote(target.id); openStudy("memorized"); openAddModal(target.id,"bank");');
    assert.match(elements.get('newCategory').innerHTML, /<option value="唯一自建分类" selected>唯一自建分类<\/option>/);
    elements.get('newCategory').value = '唯一自建分类';
    elements.get('newAnswer').value = '更新后的完整答案';
    run('addNote();');
    assert.equal(run('studySource'), 'memorized');
    assert.equal(run('getStudyPool("memorized")[0].answer'), '更新后的完整答案');
    assert.equal(run('getStudyPool("memorized")[0].category'), '唯一自建分类');
    assert.ok(run('!getStudyPool("bank").some(n=>n.id===target.id)'));
});

test('saving a memorized former notebook copy does not remove it from the memorized area', () => {
    const { run } = setup();
    run('const original=getStudyPool("bank")[0]; copyStudyNote(original.id); const moved=userNotes.find(n=>n.sourceId===original.id); studySource="personal"; deleteNote(moved.id); studySource="bank"; memorizeStudyNote(moved.id); openStudy("memorized"); copyStudyNote(moved.id);');
    assert.ok(run('getStudyPool("memorized").some(n=>n.id===moved.id)'));
    assert.ok(run('getPersonalNotes().some(n=>n.sourceId===moved.id || n.id===moved.id)'));
    run('copyStudyNote(moved.id);');
    assert.equal(run('getPersonalNotes().filter(n=>n.sourceId===moved.id || n.id===moved.id).length'), 1);
    run('openStudy("bank"); copyStudyNote(original.id);');
    assert.ok(run('getStudyPool("memorized").some(n=>n.id===moved.id)'));
    assert.ok(run('getPersonalNotes().some(n=>n.sourceId===original.id)'));
    run('restoreMemorizedNote(moved.id);');
    assert.ok(run('getStudyPool("bank").some(n=>n.id===moved.id)'));
    assert.ok(run('getPersonalNotes().some(n=>n.sourceId===moved.id || n.id===moved.id)'));
});
