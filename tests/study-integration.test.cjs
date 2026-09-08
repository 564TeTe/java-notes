const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
function setup() {
    const store = new Map();
    const element = { value: '', textContent: '', innerHTML: '', style: {}, dataset: {}, classList: { add(){}, remove(){}, toggle(){} },
        querySelectorAll: () => [], querySelector: () => element, setAttribute(){}, removeAttribute(){}, addEventListener(){}, focus(){}, appendChild(){} };
    const context = vm.createContext({ console, URL, FormData, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: k => store.get(k), setItem: (k,v) => store.set(k,v), removeItem: k => store.delete(k) },
        document: { getElementById: () => element, querySelector: () => element, querySelectorAll: () => [], addEventListener(){}, createElement: () => element },
        setTimeout(){}, clearTimeout(){}, confirm: () => true, requestAnimationFrame(){},
    });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    for (const name of ['resume-data.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'study-core.js']) run(fs.readFileSync(path.join(root,name), 'utf8'));
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) if (match[1].includes('const NOTES')) run(match[1]);
    for (const name of ['study-module.js','interview-module.js']) run(fs.readFileSync(path.join(root,name), 'utf8'));
    run('renderAll = function() {}; buildCategoryBtns = function() {}; toast = function() {};');
    return { run, store };
}
test('imported data has 531 unique questions, 13 categories, complete source references', () => {
    const { run } = setup();
    assert.equal(run('BANK.length'), 531);
    assert.equal(run('new Set(BANK.map(n=>n.id)).size'), 531);
    assert.equal(run('new Set(BANK.map(n=>n.category)).size'), 13);
    assert.ok(run('QUESTION_BANK_DATA.sources.every(s=>s.questionIds.every(id=>BANK.some(n=>n.id===id)))'));
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s=>s.id==="X02").company'), '拼多多');
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s=>s.id==="X03").company'), '腾讯');
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s=>s.id==="X05").company'), '得物');
});
test('legacy snapshots retain notes, deleted state and mastery; new snapshots round-trip interviews', () => {
    const { run } = setup();
    run(`applyStateSnapshot({ version:3, userNotes:[{id:'user-existing',question:'Mine',answer:'A',category:'Java'}], deletedIds:[NOTES[0].id], markedIds:['user-existing'], mastery:{'user-existing':{level:'hard'}}, purgedIds:[NOTES[1].id] });`);
    assert.equal(run('getPersonalNotes().filter(n=>n.id===\'user-existing\').length'), 1);
    assert.ok(run('!getPersonalNotes().some(n=>n.id===NOTES[0].id || n.id===NOTES[1].id)'));
    run(`applyInterviewSnapshot([{id:'r',company:'公司',questions:'Q?'}]); const snapshot = getStateSnapshot(); applyStateSnapshot(snapshot);`);
    assert.equal(run('getInterviewSnapshot()[0].company'), '公司');
    assert.equal(run('mastery["user-existing"].level'), 'hard');
    assert.equal(run('getStateSnapshot().version'), 4);
    run('delete snapshot.interviews; applyStateSnapshot(snapshot)');
    assert.equal(run('getInterviewSnapshot().length'), 1);
});
for (const operation of ['permDelete(NOTES[0].id)', 'emptyTrash()']) test(`edited original note does not reappear after ${operation}`, () => {
    const { run } = setup();
    run('userNotes = [{...NOTES[0],answer:"edited"}]; deletedIds.add(NOTES[0].id);');
    run(operation);
    assert.ok(run('!getPersonalNotes().some(n=>n.id===NOTES[0].id)'));
    run('loadState(); loadUserNotes();');
    assert.ok(run('!getPersonalNotes().some(n=>n.id===NOTES[0].id)'));
});
test('copying a deleted bank note restores exactly one personal copy', () => {
    const { run } = setup();
    run('copyStudyNote(BANK[0].id); const copiedId = userNotes[0].id; deletedIds.add(copiedId); copyStudyNote(BANK[0].id);');
    assert.equal(run('userNotes.filter(n=>n.sourceId===BANK[0].id).length'), 1);
    assert.ok(run('getPersonalNotes().some(n=>n.id===copiedId)'));
});
test('static and personal quiz pools remain separate despite saved bank copies', () => {
    const { run } = setup();
    run('copyStudyNote(BANK[0].id); quizSource="personal";');
    assert.ok(run('getQuizPool().every(n=>!n.id.startsWith("bank-"))'));
    run('quizSource="bank";');
    assert.equal(run('getQuizPool().length'), 531);
});
test('built-in legacy notes are no longer mixed into the personal notebook', () => {
    const { run } = setup();
    run('userNotes = [{id:"user-only",question:"我的记录",answer:"A",category:"自定义"}]');
    assert.equal(run('getPersonalNotes().map(n=>n.id).join()'), 'user-only');
    assert.equal(run('getStudyPool("bank").length'), 532);
});
test('an invalid imported interview cannot overwrite existing personal notes', () => {
    const { run } = setup();
    run('userNotes = [{id:"user-safe",question:"Q",answer:"A",category:"Java"}]');
    assert.throws(() => run('applyStateSnapshot({userNotes:[],interviews:[{id:"r",company:"公司",questions:[]}]})'), /格式/);
    assert.equal(run('userNotes[0].id'), 'user-safe');
});
test('custom questions stay in bank, can be edited and copied, and survive snapshot round trips', () => {
    const { run } = setup();
    run('const added = saveCustomBankQuestion({question:"自定义题",answer:"答案",category:"Redis",priority:"P0"});');
    assert.equal(run('getStudyPool("bank").length'), 532);
    assert.equal(run('getPersonalNotes().length'), 0);
    run('quizSource="bank"; quizCategory="Redis";');
    assert.ok(run('getQuizPool().some(n=>n.id===added.id)'));
    run('saveCustomBankQuestion({...added,answer:"修改"}, added.id); copyStudyNote(added.id);');
    assert.equal(run('getCustomBankQuestions().length'), 1);
    assert.equal(run('userNotes[0].answer'), '修改');
    run('const snap=getStateSnapshot(); applyCustomBankQuestionsSnapshot([]); applyStateSnapshot(snap);');
    assert.equal(run('getCustomBankQuestions()[0].answer'), '修改');
    run('delete snap.customBankQuestions; applyStateSnapshot(snap);');
    assert.equal(run('getCustomBankQuestions().length'), 1);
    assert.throws(() => run('applyStateSnapshot({userNotes:[],customBankQuestions:[{id:"bad"}]})'), /格式/);
    assert.equal(run('userNotes.length'), 1);
});
test('authored notes automatically join the bank while saved copies do not duplicate originals', () => {
    const { run } = setup();
    run('userNotes=[{id:"user-authored",question:"自己的问题",answer:"A",category:"Java 基础"}];');
    assert.equal(run('getStudyPool("bank").length'), 532);
    assert.equal(run('getStudyPool("bank").find(n=>n.id==="user-authored").answer'), 'A');
    run('userNotes[0].answer="edited";copyStudyNote(BANK[0].id);');
    assert.equal(run('getStudyPool("bank").length'), 532);
    assert.equal(run('getStudyPool("bank").find(n=>n.id==="user-authored").answer'), 'edited');
});
test('shared trash excludes deleted bank questions and authored notes from quiz and restores mastery', () => {
    const { run } = setup();
    run('userNotes=[{id:"user-authored",question:"Q",answer:"A",category:"Java"}]; mastery[BANK[0].id]={level:"hard"}; deleteNote(BANK[0].id);deleteNote("user-authored");quizSource="bank";');
    assert.equal(run('getDeletedNotes().length'), 2);
    assert.ok(run('!getQuizPool().some(n=>n.id===BANK[0].id || n.id==="user-authored")'));
    assert.equal(run('getPersonalNotes().length'), 0);
    run('restoreNote(BANK[0].id);restoreNote("user-authored");');
    assert.equal(run('mastery[BANK[0].id].level'), 'hard');
    assert.equal(run('getStudyPool("bank").length'), 532);
});
test('permanent deletion and empty trash remove custom and built-in bank questions after reload', () => {
    const { run } = setup();
    run('const custom=saveCustomBankQuestion({question:"Q",answer:"A",category:"Redis"});deleteNote(custom.id);deleteNote(BANK[0].id);emptyTrash();loadState();loadUserNotes();');
    assert.equal(run('getCustomBankQuestions().length'), 0);
    assert.ok(run('!getStudyPool("bank").some(n=>n.id===BANK[0].id)'));
    assert.equal(run('getDeletedNotes().length'), 0);
});

test('a saved copy does not resurrect its permanently deleted custom source in the bank', () => {
    const { run } = setup();
    run('const custom = saveCustomBankQuestion({question:"公司题",answer:"A",category:"Java 基础",company:"新公司"}); copyStudyNote(custom.id); deleteNote(custom.id); permDelete(custom.id);');
    assert.equal(run('getStudyPool("bank").length'), 531);
    assert.equal(run('getPersonalNotes().length'), 1);
    run('applyStateSnapshot(getStateSnapshot()); quizSource="bank";');
    assert.equal(run('getQuizPool().length'), 531);
});

test('company questions aggregate all sources, include custom questions, and respect shared trash', () => {
    const { run } = setup();
    assert.ok(run('QUESTION_BANK_DATA.sources.every(s => s.questionIds.every(id => getCompanyQuestions(s.company).some(n => n.id === id)))'));
    run('const custom = saveCustomBankQuestion({question:"公司题",answer:"答案",category:"Java 基础",company:"新公司"});');
    assert.equal(run('getCompanyQuestions("新公司").length'), 1);
    run('deleteNote(custom.id);');
    assert.equal(run('getCompanyQuestions("新公司").length'), 0);
    run('restoreNote(custom.id); applyStateSnapshot(getStateSnapshot());');
    assert.equal(run('getCompanyQuestions("新公司")[0].answer'), '答案');
    run('interviewCompany="美团 / 快手";');
    assert.ok(run('renderCompanyReferences().includes(QUESTION_BANK_DATA.sources.find(s=>s.id==="X09").url)'));
});

test('company supplement preserves 25-company membership and keeps six standalone exercises out of company lists', () => {
    const { run } = setup();
    assert.equal(run('QUESTION_BANK_DATA.sources.filter(s=>s.id.startsWith("N")).length'), 56);
    assert.equal(run('new Set(QUESTION_BANK_DATA.sources.filter(s=>s.id.startsWith("N")).map(s=>s.company)).size'), 25);
    assert.equal(run('BANK.filter(n=>n.number.startsWith("JX")).length'), 20);
    assert.equal(run('BANK.filter(n=>n.number.startsWith("JX")&&!n.sourceIds.length).length'), 6);
    assert.ok(run('BANK.filter(n=>n.number.startsWith("JX")&&!n.sourceIds.length).every(n=>!getCompanyQuestions("all").some(q=>q.id===n.id))'));
    assert.equal(run('getCompanyQuestions("小鹅通").length'), 10);
    assert.equal(run('getCompanyQuestions("货拉拉").length'), 36);
    assert.equal(run('getCompanyQuestions("京东").length'), 48);
    assert.ok(run('BANK.find(n=>n.number==="JX020").answer.includes("static int longestConsecutive")'));
    assert.ok(run('BANK.every(n=>n.answer.trim() && (n.answer.match(/```/g)||[]).length%2===0)'));
    assert.ok(run('BANK.every(n=>n.sourceIds.filter(id=>id.startsWith("N")).every(id=>QUESTION_BANK_DATA.sources.some(s=>s.id===id&&s.questionIds.includes(n.id))))'));
    assert.ok(run('QUESTION_BANK_DATA.sources.every(s=>new Set(s.questionIds).size===s.questionIds.length)'));
});
