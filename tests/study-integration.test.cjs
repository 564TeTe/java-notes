const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
function setup({ archivedEdition = false } = {}) {
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
    for (const name of ['resume-data.js', 'resume-question-expansion.js', 'resume-claims.js', 'resume-workbench.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'data/question-curation.js', 'study-core.js']) run(fs.readFileSync(path.join(root,name), 'utf8'));
    if (archivedEdition) run('QUESTION_BANK_CURATION.reasons=Object.fromEntries(QUESTION_BANK_DATA.questions.filter(q=>q.restoredToMainBank).map(q=>[q.id,"测试归档"])); QUESTION_BANK_CURATION.releases=[];');
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) if (match[1].includes('const NOTES')) run(match[1]);
    for (const name of ['study-module.js','interview-module.js']) run(fs.readFileSync(path.join(root,name), 'utf8'));
    run('renderAll = function() {}; buildCategoryBtns = function() {}; toast = function() {};');
    return { run, store };
}

test('recitation edition loads all 662 questions in the supplied order without automatic trash', () => {
    const { run } = setup();
    run('loadState();');
    assert.equal(run('getStudyPool("bank").length'), 662);
    assert.equal(run('getDeletedNotes().length'), 0);
    assert.equal(run('getStudyPool("bank")[0].id'), 'bank-Q01-001');
    assert.equal(run('getStudyPool("bank").filter(q=>q.restoredToMainBank).length'), 244);
    assert.ok(run('QUESTION_BANK_DATA.studySets.every(s => s.questionIds.every(id => getStudyPool("bank").some(q => q.id === id)))'));
    assert.equal(run('getStudyPool("bank").filter(q => q.isNew).length'), 71);
});

test('edition upgrade preserves manual deletions, restored originals, personal copies and mastery', () => {
    const { run, store } = setup();
    store.set('deleted-ids', run('JSON.stringify([...QUESTION_BANK_CURATION.releases[0].questionIds,"bank-Q01-001"])'));
    store.set('restored-curated-ids', JSON.stringify(['bank-LX001']));
    store.set('purged-ids', JSON.stringify(['bank-Q04-027']));
    run('userNotes=[{id:"user-edition",sourceId:"bank-LX001",question:"我的解法",answer:"我修改的笔记",category:"算法"}]; mastery["bank-LX001"]={level:"known"}; markedIds.add("bank-Q01-001"); saveUserNotes(); saveMastery(); saveMarked(); loadState(); loadUserNotes();');
    assert.ok(run('!getStudyPool("bank").some(q => q.id === "bank-Q01-001")'));
    assert.ok(run('getStudyPool("bank").some(q => q.id === "bank-LX001")'));
    assert.ok(run('!getDeletedNotes().some(q => q.id === "bank-Q04-027")'));
    assert.equal(run('getPersonalNotes()[0].answer'), '我修改的笔记');
    assert.equal(run('mastery["bank-LX001"].level'), 'known');
    assert.ok(run('markedIds.has("bank-Q01-001")'));
    assert.equal(run('getStudyPool("bank").length'), 660);
    assert.equal(run('getDeletedNotes().length'), 1);
    run('deleteNote("bank-LX001"); loadState(); const editionSnapshot=getStateSnapshot(); applyStateSnapshot(editionSnapshot); loadState();');
    assert.ok(run('getDeletedNotes().some(q => q.id === "bank-LX001")'));
    assert.equal(run('getStateSnapshot().appliedCurationReleases.length'), 1);
});

test('an old cloud backup releases automatic trash even after a fresh device has initialized', () => {
    const { run, store } = setup();
    run('loadState();');
    assert.equal(store.get(run('LOCAL_UPDATED_KEY')), undefined);
    run('applyStateSnapshot({userNotes:[],deletedIds:[...QUESTION_BANK_CURATION.releases[0].questionIds,"bank-Q01-001"],purgedIds:["bank-Q04-027"]});');
    assert.equal(run('getStudyPool("bank").length'), 660);
    assert.equal(run('getDeletedNotes().length'), 1);
    run('deleteNote("bank-LX001"); const newerBackup=JSON.parse(JSON.stringify(getStateSnapshot())); applyStateSnapshot(newerBackup); loadState();');
    assert.ok(run('deletedIds.has("bank-LX001")'));
    assert.ok(run('purgedIds.has("bank-Q04-027")'));
    assert.throws(() => run('applyStateSnapshot({userNotes:[],appliedCurationReleases:"bad"})'), /整理更新记录/);
    assert.ok(run('deletedIds.has("bank-LX001")'));
});

test('a v45 device round trip cannot revive a question manually deleted after migration', () => {
    const { run } = setup();
    run('loadState(); deleteNote("bank-LX001"); const throughV45=JSON.parse(JSON.stringify(getStateSnapshot())); delete throughV45.appliedCurationReleases; applyStateSnapshot(throughV45); loadState();');
    assert.ok(run('deletedIds.has("bank-LX001")'));
    assert.ok(run('!getStudyPool("bank").some(q=>q.id==="bank-LX001")'));
    assert.equal(run('appliedCurationReleases.size'), 1);
    assert.ok(run('QUESTION_BANK_CURATION.releases[0].questionIds.every(id => id === "bank-LX001" || restoredCuratedIds.has(id))'));
});

test('official references do not become company interviews', () => {
    const { run } = setup();
    assert.ok(run('!getInterviewCompanies().includes("官方文档")'));
    assert.ok(run('!getCompanyQuestions("all").some(q => q.id === "bank-Q09-029")'));
    assert.ok(run('!renderCompanyReferences().includes("本轮技术核对")'));
});

test('study answers render readable tables and lists while keeping code and HTML safe', () => {
    const { run } = setup();
    const render = text => run(`studyMarkdown(${JSON.stringify(text)})`);
    const table = render('| 对比项 | 答案 |\n| --- | --- |\n| **代码** | `a | b` |\n| 转义 | a \\| b |');
    assert.match(table, /<table>/);
    assert.equal((table.match(/<td>/g) || []).length, 4);
    assert.match(table, /<code>a \| b<\/code>/);
    assert.match(table, /<strong>代码<\/strong>/);
    assert.match(table, /tabindex="0"/);
    assert.match(render('- **`ON`：** 关联条件。\n- 下一点'), /<ul><li><strong><code>ON<\/code>：<\/strong>/);
    assert.match(render('1. 第一步\n2. 第二步'), /<ol><li>第一步<\/li><li>第二步<\/li><\/ol>/);
    const literal = render('```java\n// **不加粗**\nString x = "<script>";\n```');
    assert.match(literal, /&lt;script&gt;/);
    assert.doesNotMatch(literal, /<strong>/);
    const hostile = render('<img src=x onerror=alert(1)>\n\n[x](javascript:alert)\n\n[文档](https://example.com/)');
    assert.doesNotMatch(hostile, /<img|href="javascript:/);
    assert.match(hostile, /rel="noopener noreferrer"/);
});

test('full backups preserve and restore resume workbench records including legacy absence and explicit clearing', () => {
    const {run}=setup();
    run(`ResumeWorkbench.applySnapshot({claims:{'br-report':{responsibility:'审批完成后生成工资明细',verified:true}},pitches:{'self-60':{draft:'我自己的新版自我介绍'}}}); const workbenchBackup=getStateSnapshot();`);
    assert.equal(run('workbenchBackup.resumePrep.workbench.claims["br-report"].verified'),true);
    run('applyStateSnapshot({resumePrep:{mastery:{},checklist:{}}})');
    assert.equal(run('getResumePrepSnapshot().workbench.pitches["self-60"].draft'),'我自己的新版自我介绍');
    run('applyStateSnapshot({resumePrep:{workbench:{}}})');
    assert.equal(run('Object.keys(getResumePrepSnapshot().workbench.claims).length'),0);
    run('applyStateSnapshot(workbenchBackup)');
    assert.equal(run('getResumePrepSnapshot().workbench.claims["br-report"].responsibility'),'审批完成后生成工资明细');
    run('applyStateSnapshot({resumePrep:{workbench:"bad"}})');
    assert.equal(run('getResumePrepSnapshot().workbench.claims["br-report"].verified'),true);
    assert.equal(run('syncApplyingRemote'),false);
});
test('imported data has 662 unique active and archived questions, 13 categories, complete source references', () => {
    const { run } = setup();
    assert.equal(run('BANK.length'), 662);
    assert.equal(run('new Set(BANK.map(n=>n.id)).size'), 662);
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
    assert.equal(run('getQuizPool().length'), 662);
});
test('built-in legacy notes are no longer mixed into the personal notebook', () => {
    const { run } = setup();
    run('userNotes = [{id:"user-only",question:"我的记录",answer:"A",category:"自定义"}]');
    assert.equal(run('getPersonalNotes().map(n=>n.id).join()'), 'user-only');
    assert.equal(run('getStudyPool("bank").length'), 663);
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
    assert.equal(run('getStudyPool("bank").length'), 663);
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
    assert.equal(run('getStudyPool("bank").length'), 663);
    assert.equal(run('getStudyPool("bank").find(n=>n.id==="user-authored").answer'), 'A');
    run('userNotes[0].answer="edited";copyStudyNote(BANK[0].id);');
    assert.equal(run('getStudyPool("bank").length'), 663);
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
    assert.equal(run('getStudyPool("bank").length'), 663);
});

test('resume personal answers join full backups and retain local drafts when importing old backups', () => {
    const { run, store } = setup();
    run(`saveResumeDraft('q-zhishu-9', '同键不同语义应拒绝'); const resumeBackup = JSON.parse(JSON.stringify(getStateSnapshot()));`);
    assert.equal(run('resumeBackup.resumePrep.drafts["q-zhishu-9"]'), '同键不同语义应拒绝');
    assert.ok(store.get('java-notes-local-updated-at') || run('!!localStorage.getItem(LOCAL_UPDATED_KEY)'));
    run('applyResumePrepSnapshot({drafts:{}}); applyStateSnapshot(resumeBackup);');
    assert.equal(run('getResumePrepSnapshot().drafts["q-zhishu-9"]'), '同键不同语义应拒绝');
    run('delete resumeBackup.resumePrep.drafts; applyStateSnapshot(resumeBackup);');
    assert.equal(JSON.parse(store.get('resume-prep-drafts'))['q-zhishu-9'], '同键不同语义应拒绝');
});

test('deleting a personal note moves it to the bank and preserves content and study state after reload', () => {
    const { run } = setup();
    run('userNotes=[{id:"user-move",question:"Q",answer:"自己的答案",category:"Java"}]; mastery["user-move"]={level:"hard"}; markedIds.add("user-move"); studySource="personal"; deleteNote("user-move");');
    assert.equal(run('getPersonalNotes().length'), 0);
    assert.equal(run('getDeletedNotes().length'), 0);
    assert.equal(run('getStudyPool("bank").find(n=>n.id==="user-move").answer'), '自己的答案');
    run('loadUserNotes(); const movedSnapshot=getStateSnapshot(); applyStateSnapshot(movedSnapshot);');
    assert.equal(run('getPersonalNotes().length'), 0);
    assert.equal(run('mastery["user-move"].level'), 'hard');
    assert.ok(run('markedIds.has("user-move")'));
    run('quizSource="personal";');
    assert.equal(run('getQuizPool().length'), 0);
    run('studySource="bank";');
    assert.match(run('studyCard(getStudyPool().find(n=>n.id==="user-move"))'), /data-study="copy"[^>]*>[\s\S]*?记入笔记<\/button>/);
    run('copyStudyNote("user-move"); copyStudyNote("user-move");');
    assert.equal(run('getPersonalNotes().length'), 1);
    assert.equal(run('userNotes.length'), 1);
});

test('a saved copy moved to the bank retains edited answers and can pass through trash', () => {
    const { run } = setup();
    run('copyStudyNote(BANK[0].id); const movedId=userNotes[0].id; userNotes[0].answer="个人理解"; studySource="personal"; deleteNote(movedId);');
    assert.equal(run('getPersonalNotes().length'), 0);
    assert.equal(run('getDeletedNotes().length'), 0);
    assert.equal(run('getStudyPool("bank").find(n=>n.id===movedId).answer'), '个人理解');
    assert.ok(run('getStudyPool("bank").some(n=>n.id===BANK[0].id)'));
    run('studySource="bank"; deleteNote(movedId);');
    assert.equal(run('getDeletedNotes().length'), 1);
    assert.ok(run('!getStudyPool("bank").some(n=>n.id===movedId)'));
    run('restoreNote(movedId);');
    assert.equal(run('getPersonalNotes().length'), 0);
    assert.equal(run('getStudyPool("bank").find(n=>n.id===movedId).answer'), '个人理解');
    run('copyStudyNote(BANK[0].id);');
    assert.equal(run('getPersonalNotes().length'), 1);
    assert.equal(run('getPersonalNotes()[0].answer'), '个人理解');
});

test('deleting an automatically collected note in the bank restores only to the bank', () => {
    const { run } = setup();
    run('userNotes=[{id:"user-bank-delete",question:"Q",answer:"A",category:"Java"}]; studySource="bank"; deleteNote("user-bank-delete"); restoreNote("user-bank-delete");');
    assert.equal(run('getPersonalNotes().length'), 0);
    assert.ok(run('getStudyPool("bank").some(n=>n.id==="user-bank-delete")'));
});

test('interview extraction can return a moved question to the notebook without losing its answer', () => {
    const { run } = setup();
    run('applyInterviewSnapshot([{id:"interview-move",company:"公司",questions:"问题？"}]); extractInterviewNotes("interview-move"); const extractedId=userNotes[0].id; userNotes[0].answer="补充的回答"; studySource="personal"; deleteNote(extractedId);');
    assert.equal(run('getPersonalNotes().length'), 0);
    run('extractInterviewNotes("interview-move"); loadUserNotes();');
    assert.equal(run('getPersonalNotes().length'), 1);
    assert.equal(run('getPersonalNotes()[0].answer'), '补充的回答');
    assert.equal(run('userNotes.length'), 1);
});

test('Java backend curation moves only the selected built-in questions into recoverable trash', () => {
    const { run, store } = setup({ archivedEdition: true });
    run('userNotes=[{id:"user-safe-curation",sourceId:"bank-LX001",question:"我的理解",answer:"保留",category:"算法"}]; mastery["bank-LX001"]={level:"known"}; saveUserNotes(); saveMastery(); loadState(); loadUserNotes();');
    assert.equal(run('getStudyPool("bank").length'), 418);
    assert.equal(run('getDeletedNotes().length'), 244);
    assert.ok(run('getDeletedNotes().some(n=>n.id==="bank-LX001")'));
    assert.equal(run('getPersonalNotes()[0].answer'), '保留');
    assert.equal(run('mastery["bank-LX001"].level'), 'known');
    assert.ok(JSON.parse(store.get('deleted-ids')).includes('bank-LX001'));
    run('quizSource="bank";');
    assert.ok(run('!getQuizPool().some(n=>n.id==="bank-LX001")'));
    assert.ok(run('!getCompanyQuestions("all").some(n=>n.id==="bank-LX001")'));
});

test('restoring a curated question survives reload and snapshot import; deleting it again stays deleted', () => {
    const { run } = setup({ archivedEdition: true });
    run('loadState(); restoreNote("bank-LX001"); loadState();');
    assert.ok(run('getStudyPool("bank").some(n=>n.id==="bank-LX001")'));
    run('const curatedSnapshot=JSON.parse(JSON.stringify(getStateSnapshot())); applyStateSnapshot(curatedSnapshot);');
    assert.ok(run('getStudyPool("bank").some(n=>n.id==="bank-LX001")'));
    assert.equal(run('getDeletedNotes().length'), 243);
    run('studySource="bank";deleteNote("bank-LX001");loadState();');
    assert.equal(run('getDeletedNotes().length'), 244);
});

test('legacy cloud snapshots receive curated trash without erasing unrelated deleted records', () => {
    const { run } = setup({ archivedEdition: true });
    run('applyStateSnapshot({userNotes:[],deletedIds:[BANK[0].id]});');
    assert.equal(run('getDeletedNotes().length'), 245);
    run('restoreNote("bank-LX001"); applyStateSnapshot({userNotes:[],deletedIds:[BANK[0].id]});');
    assert.ok(run('getStudyPool("bank").some(n=>n.id==="bank-LX001")'));
    assert.equal(run('getDeletedNotes().length'), 244);
});

test('curation keeps a new device eligible to load newer cloud data during startup', () => {
    const { run, store } = setup({ archivedEdition: true });
    run('loadSyncSession=applySidebarState=bindEvents=initMobile=updateSyncUI=registerPWA=function(){};window.matchMedia=()=>({matches:false}); init();');
    assert.equal(run('getDeletedNotes().length'), 244);
    assert.equal(store.get(run('LOCAL_UPDATED_KEY')), undefined);
});

test('permanently deleted curated questions are not reintroduced after reload', () => {
    const { run } = setup({ archivedEdition: true });
    run('loadState(); permDelete("bank-LX001"); loadState();');
    assert.ok(run('!getStudyPool("bank").some(n=>n.id==="bank-LX001")'));
    assert.ok(run('!getDeletedNotes().some(n=>n.id==="bank-LX001")'));
});
test('permanent deletion and empty trash remove custom and built-in bank questions after reload', () => {
    const { run } = setup();
    run('loadState(); const custom=saveCustomBankQuestion({question:"Q",answer:"A",category:"Redis"});deleteNote(custom.id);deleteNote(BANK[0].id);emptyTrash();loadState();loadUserNotes();');
    assert.equal(run('getCustomBankQuestions().length'), 0);
    assert.ok(run('!getStudyPool("bank").some(n=>n.id===BANK[0].id)'));
    assert.equal(run('getDeletedNotes().length'), 0);
});

test('a saved copy does not resurrect its permanently deleted custom source in the bank', () => {
    const { run } = setup();
    run('const custom = saveCustomBankQuestion({question:"公司题",answer:"A",category:"Java 基础",company:"新公司"}); copyStudyNote(custom.id); deleteNote(custom.id); permDelete(custom.id);');
    assert.equal(run('getStudyPool("bank").length'), 662);
    assert.equal(run('getPersonalNotes().length'), 1);
    run('applyStateSnapshot(getStateSnapshot()); quizSource="bank";');
    assert.equal(run('getQuizPool().length'), 662);
});

test('company questions aggregate all sources, include custom questions, and respect shared trash', () => {
    const { run } = setup();
    assert.ok(run('getInterviewSources().every(s => s.questionIds.every(id => getCompanyQuestions(s.company).some(n => n.id === id)))'));
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
    assert.equal(run('QUESTION_BANK_DATA.sources.filter(s=>/^N[0-9]+$/.test(s.id)).length'), 56);
    assert.equal(run('new Set(QUESTION_BANK_DATA.sources.filter(s=>/^N[0-9]+$/.test(s.id)).map(s=>s.company)).size'), 25);
    assert.equal(run('BANK.filter(n=>n.number.startsWith("JX")).length'), 20);
    assert.equal(run('BANK.filter(n=>n.number.startsWith("JX")&&!n.sourceIds.length).length'), 6);
    assert.ok(run('BANK.filter(n=>n.number.startsWith("JX")&&!n.sourceIds.length).every(n=>!getCompanyQuestions("all").some(q=>q.id===n.id))'));
    assert.equal(run('getCompanyQuestions("小鹅通").length'), 10);
    assert.equal(run('getCompanyQuestions("货拉拉").length'), 36);
    assert.equal(run('getCompanyQuestions("京东").length'), 48);
    assert.ok(run('BANK.find(n=>n.number==="JX020").answerFormat === "numbered-paragraphs"'));
    assert.ok(run('BANK.every(n=>n.answer.trim() && (n.answer.match(/```/g)||[]).length%2===0)'));
    assert.ok(run('BANK.every(n=>n.sourceIds.filter(id=>id.startsWith("N")).every(id=>QUESTION_BANK_DATA.sources.some(s=>s.id===id&&s.questionIds.includes(n.id))))'));
    assert.ok(run('QUESTION_BANK_DATA.sources.every(s=>new Set(s.questionIds).size===s.questionIds.length)'));
});

test('recent interviews link existing topics and 40 new questions to the correct companies', () => {
    const { run } = setup();
    assert.equal(run('QUESTION_BANK_DATA.sources.filter(s => /^NI[0-9]{3}$/.test(s.id)).length'), 25);
    assert.equal(run('BANK.filter(q => /^RM[0-9]{3}$/.test(q.number)).length'), 40);
    assert.equal(run('QUESTION_BANK_DATA.supplements.find(s => s.id === "recent-interviews-2026-09-13").companyEntries'), 286);
    assert.equal(run('QUESTION_BANK_DATA.supplements.find(s => s.id === "recent-interviews-2026-09-13").uniqueCompanyQuestions'), 193);
    assert.ok(run('QUESTION_BANK_DATA.sources.filter(s => /^NI[0-9]{3}$/.test(s.id)).every(s => s.questionIds.every(id => getCompanyQuestions(s.company).some(q => q.id === id && q.sourceIds.includes(s.id))))'));
    assert.ok(run('getCompanyQuestions("招银网络科技").some(q => q.number === "RM001")'));
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s => s.id === "NI023").company'), '未具名公司');
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s => s.id === "NI021").company'), '阿里');
    assert.equal(run('QUESTION_BANK_DATA.sources.find(s => s.id === "NI025").company'), '阿里');
    run('applyStudyCuration()');
    assert.equal(run('getStudyPool("bank").length'), 662);
    assert.ok(run('BANK.filter(q => /^RM[0-9]{3}$/.test(q.number)).every(q => getStudyPool("bank").some(n => n.id === q.id) || getDeletedNotes().some(n => n.id === q.id))'));
});
