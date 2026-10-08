const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');

// Exercise the persisted state and legacy deletion paths without the UI modules
// that replace them at startup. The study workspace has its own integration suite.
function setup(store = new Map()) {
    const element = { value: '', textContent: '', style: {}, classList: { add(){}, remove(){}, toggle(){} } };
    const context = vm.createContext({ console, URL, setTimeout(){}, clearTimeout(){}, confirm: () => true,
        localStorage: { getItem: k => store.get(k), setItem: (k, v) => store.set(k, v), removeItem: k => store.delete(k) },
        document: { getElementById: () => element, querySelector: () => element },
        matchMedia: () => ({ matches: false }),
    });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    run(fs.readFileSync(path.join(root, 'study-core.js'), 'utf8'));
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const legacy = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('const NOTES'));
    run(legacy[1]);
    run(`
        function applyStudyCuration() {}
        function getResumePrepSnapshot() { return {}; }
        function getRecruitmentSnapshot() { return {}; }
        function getInterviewSnapshot() { return []; }
        function getCustomBankQuestions() { return []; }
        function applyResumePrepSnapshot() {}
        function applyRecruitmentSnapshot() {}
        function applyInterviewSnapshot() {}
        function applyCustomBankQuestionsSnapshot() {}
        renderAll = buildCategoryBtns = toast = bindEvents = initMobile = registerPWA = applySidebarState = function() {};
    `);
    return { run, store };
}

test('memorized question IDs persist across fresh app state', () => {
    const { run, store } = setup();
    run('memorizedIds.add("bank-Q01-001"); saveMemorized();');
    assert.deepEqual(JSON.parse(store.get('memorized-ids')), ['bank-Q01-001']);
    assert.ok(store.get(run('LOCAL_UPDATED_KEY')));
    const reloaded = setup(store);
    reloaded.run('loadState();');
    assert.equal(reloaded.run('memorizedIds.size'), 1);
    assert.ok(reloaded.run('memorizedIds.has("bank-Q01-001")'));
});

test('corrupt local memorized records cannot replace valid in-memory records', () => {
    const { run, store } = setup();
    run('memorizedIds.add("bank-Q01-001");');
    store.set('memorized-ids', '["bank-Q01-002",42]');
    run('loadState();');
    assert.equal(run('memorizedIds.size'), 1);
    assert.ok(run('memorizedIds.has("bank-Q01-001")'));
});

test('state snapshots round trip memorized records and accept old backups', () => {
    const { run } = setup();
    run('memorizedIds.add("bank-Q01-001"); const backup = getStateSnapshot();');
    assert.equal(run('JSON.stringify(backup.memorizedIds)'), '["bank-Q01-001"]');
    run('applyStateSnapshot({ userNotes: [], memorizedIds: [] });');
    assert.equal(run('memorizedIds.size'), 0);
    run('applyStateSnapshot(backup);');
    assert.ok(run('memorizedIds.has("bank-Q01-001")'));
    run('applyStateSnapshot({ userNotes: [], mastery: {} });');
    assert.ok(run('memorizedIds.has("bank-Q01-001")'));
    run('applyStateSnapshot({ memorizedIds: ["bank-Q01-002", "bank-Q01-002"] });');
    assert.equal(run('memorizedIds.size'), 1);
});

test('invalid memorized snapshot records reject the entire snapshot before mutation', () => {
    const { run, store } = setup();
    run('userNotes=[{id:"user-original",question:"Q",answer:"A",category:"Java"}]; memorizedIds.add("bank-Q01-001"); saveMemorized();');
    const before = run('JSON.stringify(getStateSnapshot())');
    const persisted = [...store];
    assert.throws(() => run('applyStateSnapshot({userNotes:[],deletedIds:["bank-Q01-001"],memorizedIds:["bank-Q01-002",5]});'), /已背.*格式/);
    assert.equal(run('JSON.stringify(getStateSnapshot())'), before);
    assert.deepEqual([...store], persisted);
});

test('legacy permanent deletion and empty trash remove memorized records', () => {
    const { run, store } = setup();
    run('const first=NOTES[0].id; const second=NOTES[1].id; memorizedIds.add(first); memorizedIds.add(second); deletedIds.add(first); deletedIds.add(second); permDelete(first);');
    assert.ok(run('!memorizedIds.has(first) && memorizedIds.has(second)'));
    run('emptyTrash();');
    assert.equal(run('memorizedIds.size'), 0);
    assert.deepEqual(JSON.parse(store.get('memorized-ids')), []);
});

test('initialization treats memorized-only local state as a local update', () => {
    const store = new Map([['memorized-ids', '["bank-Q01-001"]']]);
    const { run } = setup(store);
    run('init();');
    assert.ok(store.get(run('LOCAL_UPDATED_KEY')));
});
