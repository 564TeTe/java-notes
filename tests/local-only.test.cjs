const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function setup(store = new Map()) {
    const requests = [], timers = [];
    const element = { value: '', textContent: '', innerHTML: '', style: {}, dataset: {},
        classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {},
        querySelectorAll: () => [], addEventListener() {} };
    const context = vm.createContext({ console, URL, FormData, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value), removeItem: key => store.delete(key) },
        document: { getElementById: () => element, querySelector: () => element, querySelectorAll: () => [], addEventListener() {} },
        matchMedia: () => ({ matches: false }),
        setTimeout(callback) { timers.push(callback); }, clearTimeout() {},
        SYNC_CONFIG: { supabaseUrl: 'https://legacy-project.supabase.co', supabasePublishableKey: 'legacy-public-key-long-enough' },
        fetch: async url => { requests.push(url); return { ok: true, text: async () => '[]' }; }
    });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    for (const name of ['resume-data.js', 'resume-question-expansion.js', 'resume-claims.js', 'resume-workbench.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'data/question-curation.js', 'study-core.js']) {
        run(fs.readFileSync(path.join(root, name), 'utf8'));
    }
    for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) if (match[1].includes('const NOTES')) run(match[1]);
    for (const name of ['study-module.js', 'interview-module.js']) run(fs.readFileSync(path.join(root, name), 'utf8'));
    run('renderAll = buildCategoryBtns = toast = bindEvents = initMobile = registerPWA = applySidebarState = function() {};');
    return { run, store, requests, timers };
}

test('startup ignores a previously saved cloud login and makes no cloud requests', async () => {
    const session = JSON.stringify({ access_token: 'old-access', refresh_token: 'old-refresh', expires_at: Date.now() / 1000 + 3600, user: { id: 'old-user' } });
    const app = setup(new Map([['java-notes-sync-session', session], ['user-notes', JSON.stringify([{ id: 'user-local', question: '本地题目', answer: '原有内容', category: 'Java' }])]]));
    app.run('init();');
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(app.requests, []);
    assert.equal(app.run('userNotes[0].answer'), '原有内容');
    assert.equal(app.store.get('java-notes-sync-session'), session, 'retiring sync must not clear existing local storage');
});

test('the app loader and rendered HTML retain local backups without cloud controls', () => {
    const sources = [...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map(match => match[1]);
    assert.ok(sources.every(source => !/sync-config|supabase/i.test(source)));
    assert.doesNotMatch(html, /id="(?:syncModal|syncBtn|mobileSyncBtn|syncEmail|syncPassword|loginBtn|registerBtn|logoutBtn|syncNowBtn)"|data-more-action="sync"/);
    for (const id of ['backupModal', 'importFile', 'importBtn', 'exportBtn', 'appVersion', 'checkAppUpdateBtn']) {
        assert.ok(html.includes(`id="${id}"`), `${id} remains available independently of cloud sync`);
    }
    assert.doesNotMatch(html, /\b(?:scheduleCloudSync|loadSyncSession|supabaseRequest|syncNow|syncApplyingRemote|SYNC_SESSION_KEY)\b/);
});

test('notes and review state remain local and reload without scheduling network work', () => {
    const app = setup();
    app.run('userNotes=[{id:"user-local",question:"问题",answer:"笔记内容",category:"Java"}]; saveUserNotes(); markedIds.add("user-local"); saveMarked(); memorizedIds.add("user-local"); saveMemorized(); deletedIds.add("user-trash"); saveDeleted(); sunkIds.add("user-sunk"); saveSunk(); purgedIds.add("user-purged"); savePurged(); mastery["user-local"]={level:"hard"}; saveMastery(); saveResumeDraft("q-zhishu-3", "我的复盘");');
    assert.deepEqual(app.requests, []);
    assert.deepEqual(app.timers, []);
    const reloaded = setup(app.store);
    reloaded.run('loadState(); loadUserNotes();');
    assert.equal(reloaded.run('userNotes[0].answer'), '笔记内容');
    assert.ok(reloaded.run('markedIds.has("user-local") && memorizedIds.has("user-local")'));
    assert.equal(reloaded.run('mastery["user-local"].level'), 'hard');
    assert.ok(reloaded.run('deletedIds.has("user-trash") && sunkIds.has("user-sunk") && purgedIds.has("user-purged")'));
    assert.equal(reloaded.run('getResumePrepSnapshot().drafts["q-zhishu-3"]'), '我的复盘');
});

test('importing an existing backup restores local records without cloud work', async () => {
    const app = setup();
    const payload = { app: 'java-notes', data: { userNotes: [{id:'user-backup',question:'备份题目',answer:'备份内容',category:'Java'}],
        markedIds:['user-backup'], memorizedIds:['user-backup'], deletedIds:['user-trash'],
        sunkIds:['user-sunk'], purgedIds:['user-purged'], mastery:{'user-backup':{level:'known'}} } };
    await app.run(`importBackup({text:async()=>${JSON.stringify(JSON.stringify(payload))}})`);
    assert.equal(app.run('userNotes[0].answer'), '备份内容');
    assert.ok(app.run('markedIds.has("user-backup") && memorizedIds.has("user-backup") && deletedIds.has("user-trash") && sunkIds.has("user-sunk") && purgedIds.has("user-purged")'));
    assert.equal(app.run('mastery["user-backup"].level'), 'known');
    assert.deepEqual(app.requests, []);
    assert.deepEqual(app.timers, []);
});
