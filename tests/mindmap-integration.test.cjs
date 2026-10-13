const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function setup() {
    const store = new Map(), elements = new Map(), listeners = new Map(), scrolls = [];
    const element = () => {
        const classes = new Set();
        return { value: '', textContent: '', innerHTML: '', style: {}, dataset: {}, attributes: {}, focused: false,
            classList: { add(...names) { names.forEach(name => classes.add(name)); }, remove(...names) { names.forEach(name => classes.delete(name)); }, toggle(name, on) { on ? classes.add(name) : classes.delete(name); }, contains: name => classes.has(name) },
            querySelectorAll: () => [], setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute() {},
            addEventListener() {}, focus() { this.focused = true; }, blur() {}, appendChild() {}, prepend() {}, insertAdjacentHTML() {},
        };
    };
    const get = name => { if (!elements.has(name)) elements.set(name, element()); return elements.get(name); };
    const links = ['bank', 'mindmap', 'more'].map(name => { const link = element(); link.dataset.workspaceLink = name; return link; });
    const context = vm.createContext({ console, URL, FormData, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value), removeItem: key => store.delete(key) },
        document: { body: element(), getElementById: get, querySelector: get, createElement: element,
            querySelectorAll: selector => selector === '[data-workspace-link]' ? links : [],
            addEventListener(name, handler) { if (!listeners.has(name)) listeners.set(name, []); listeners.get(name).push(handler); } },
        setTimeout() {}, clearTimeout() {}, requestAnimationFrame() {}, addEventListener() {}, confirm: () => true,
        scrollTo(value) { scrolls.push(value.top); }, matchMedia: () => ({ matches: false }),
        WorkspaceControls: { init() {}, enhance() {} }, GlossaryHighlighter: { close() {} },
    });
    context.window = context;
    const run = code => vm.runInContext(code, context);
    const load = name => run(fs.readFileSync(path.join(root, name), 'utf8'));
    for (const name of ['resume-data.js', 'resume-question-expansion.js', 'resume-claims.js', 'resume-workbench.js', 'resume-module.js', 'recruitment-module.js', 'data/question-bank.js', 'data/question-curation.js', 'study-core.js']) load(name);
    run([...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('const NOTES'))[1]);
    for (const name of ['study-module.js', 'interview-module.js', 'workspace-shell.js', 'glossary-data.js', 'glossary-core.js', 'glossary.js', 'annotation-data.js', 'annotation-core.js', 'annotation.js']) load(name);
    load('mindmap-core.js');
    // UI boundary functions keep these tests focused on app navigation and the
    // backup contract; the actual validator and all legacy state code run above.
    run(`
        let integrationMaps = { version: 1, activeMapId: 'map-one', maps: [{ id: 'map-one', title: 'Java 知识', rootId: 'root-one', nodes: [{ id: 'root-one', parentId: null, title: 'Java', note: '', status: 'new', questionId: null, collapsed: false }] }] };
        function getMindMapSnapshot() { return JSON.parse(JSON.stringify(integrationMaps)); }
        function applyMindMapSnapshot(value) { integrationMaps = JSON.parse(JSON.stringify(value)); localStorage.setItem('integration-maps', JSON.stringify(value)); }
        function renderMindMap() { return '<section id="mindmap-root">知识总览</section>'; }
        let mountCount = 0;
        function mountMindMap() { if (!document.getElementById('notesContainer').innerHTML.includes('mindmap-root')) throw new Error('mount called before render'); mountCount++; }
        renderAll = buildCategoryBtns = toast = function() {};
        loadState();
    `);
    return { run, store, elements, links, listeners, scrolls, context };
}

test('mindmap navigation replaces other modes and exits to each workspace cleanly', () => {
    const { run } = setup();
    for (const page of ['bank', 'personal', 'memorized', 'quiz', 'interviews', 'resume', 'recruitment', 'resources', 'trash', 'marked']) {
        run('navigateWorkspace("mindmap");');
        assert.equal(run('currentWorkspacePage()'), 'mindmap');
        assert.equal(run('showQuiz || showTrash || showMarkedOnly || showResources || showInterviewExp || showResumePrep || showRecruitment'), false);
        run(`navigateWorkspace(${JSON.stringify(page)});`);
        assert.equal(run('showMindMap'), false, `leaving for ${page} clears mindmap`);
        assert.equal(run('currentWorkspacePage()'), page);
    }
});

test('reference overlays round trip to mindmaps with the original scroll position', () => {
    const { run, scrolls } = setup();
    for (const reference of ['glossary', 'annotations']) {
        run(`navigateWorkspace('mindmap'); window.scrollY=380; navigateWorkspace('${reference}');`);
        assert.equal(run('currentWorkspacePage()'), reference);
        run('navigateWorkspace("mindmap");');
        assert.equal(run('currentWorkspacePage()'), 'mindmap');
        assert.equal(scrolls.at(-1), 380);
    }
    run('navigateWorkspace("annotations"); navigateWorkspace("resources");');
    assert.equal(run('showMindMap || showAnnotations || showGlossary'), false);
});

test('legacy category and mobile actions leave mindmaps instead of trapping navigation', () => {
    const { run } = setup();
    run('navigateWorkspace("mindmap"); selectCategory("Java 基础");');
    assert.equal(run('showMindMap'), false);
    assert.equal(run('currentWorkspacePage()'), 'bank');
    run('navigateWorkspace("mindmap"); handleMoreAction("trash");');
    assert.equal(run('showMindMap'), false);
    assert.equal(run('currentWorkspacePage()'), 'trash');
});

test('mindmap renders and mounts after markup, clears the study TOC and selects mobile More', () => {
    const { run, elements, links, context } = setup();
    run('navigateWorkspace("mindmap"); renderNotes([]); renderTOC([]); renderWorkspaceShell();');
    assert.equal(elements.get('mainTitle').textContent, '思维导图');
    assert.match(elements.get('notesContainer').innerHTML, /mindmap-root/);
    assert.equal(run('mountCount'), 1);
    assert.equal(elements.get('tocList').innerHTML, '');
    assert.equal(context.document.body.classList.contains('study-mode'), false);
    assert.equal(context.document.body.classList.contains('context-directory'), false);
    assert.equal(links.find(link => link.dataset.workspaceLink === 'more').attributes['aria-current'], 'page');
});

test('full backups round trip all custom mindmaps alongside learning records', () => {
    const { run, store } = setup();
    run('memorizedIds.add(BANK[0].id); const backup = getStateSnapshot();');
    assert.equal(run('backup.mindmaps?.maps[0].title'), 'Java 知识');
    run('integrationMaps = {version:1,activeMapId:"knowledge",maps:[]}; memorizedIds.clear(); applyStateSnapshot(backup);');
    assert.equal(run('integrationMaps.maps[0].title'), 'Java 知识');
    assert.ok(run('memorizedIds.has(BANK[0].id)'));
    assert.equal(JSON.parse(store.get('integration-maps')).activeMapId, 'map-one');
});

test('older backups without mindmaps preserve current maps and accept explicit empty maps', () => {
    const { run } = setup();
    run('const originalMaps = JSON.stringify(getMindMapSnapshot()); applyStateSnapshot({userNotes:[]});');
    assert.equal(run('JSON.stringify(getMindMapSnapshot())'), run('originalMaps'));
    run('applyStateSnapshot({userNotes:[],mindmaps:{version:1,activeMapId:"knowledge",maps:[]}});');
    assert.equal(run('integrationMaps.maps.length'), 0);
});

test('invalid mindmaps reject a full import before mutating learning records or storage', () => {
    const { run, store } = setup();
    run('userNotes=[{id:"user-original",question:"Keep",answer:"Me",category:"Java"}]; memorizedIds.add(BANK[0].id); saveMemorized(); const before=JSON.stringify(getStateSnapshot());');
    const persisted = [...store];
    for (const bad of [null, { version: 999, maps: [] }, { version: 1, activeMapId: 'missing', maps: [] }]) {
        assert.throws(() => run(`applyStateSnapshot({userNotes:[],memorizedIds:[],deletedIds:[BANK[0].id],mindmaps:${JSON.stringify(bad)}});`));
        assert.equal(run('JSON.stringify(getStateSnapshot())'), run('before'));
        assert.deepEqual([...store], persisted);
    }
});

test('mindmap storage quota failure leaves the full backup state untouched', () => {
    const { run, store, context } = setup();
    // Exercise the real UI persistence contract, replacing the navigation-only
    // fixture functions above. Only the map storage key runs out of quota.
    run(fs.readFileSync(path.join(root, 'mindmap-module.js'), 'utf8'));
    run(`
        const originalMap = MindMapCore.createMap('已有知识');
        applyMindMapSnapshot({version:1,activeMapId:originalMap.id,maps:[originalMap]});
        userNotes = [{id:'user-original',question:'Keep',answer:'Me',category:'Java'}];
        mastery = {[BANK[0].id]:{level:'known'}};
        memorizedIds.add(BANK[0].id);
        applyResumePrepSnapshot({mastery:{existing:'hard'},checklist:{retain:true}});
        applyRecruitmentSnapshot({applications:[],actionChecks:{retain:true}});
        const beforeQuotaImport = JSON.stringify(getStateSnapshot());
        const incomingMap = MindMapCore.createMap('新的导图');
        const quotaImport = {...getStateSnapshot(),userNotes:[],mastery:{},memorizedIds:[],
            resumePrep:{mastery:{},checklist:{}},recruitment:{applications:[],actionChecks:{}},
            mindmaps:{version:1,activeMapId:incomingMap.id,maps:[incomingMap]}};
    `);
    const persisted = [...store], writes = [];
    const originalWrite = context.localStorage.setItem;
    context.localStorage.setItem = (key, value) => {
        writes.push(key);
        if (key === 'java-notes-mindmaps-v1') {
            const error = new Error('storage quota exceeded');
            error.name = 'QuotaExceededError';
            throw error;
        }
        originalWrite(key, value);
    };
    assert.throws(() => run('applyStateSnapshot(quotaImport);'), /本地保存失败/);
    assert.equal(run('JSON.stringify(getStateSnapshot())'), run('beforeQuotaImport'));
    assert.deepEqual([...store], persisted);
    assert.deepEqual(writes, ['java-notes-mindmaps-v1'], 'no other module writes before map persistence succeeds');
});

test('Ctrl+K focuses the visible mindmap search and retains reference-overlay priority', () => {
    const { run, elements, listeners } = setup();
    run('bindEvents(); navigateWorkspace("mindmap");');
    const key = () => listeners.get('keydown').forEach(handler => handler({ ctrlKey: true, key: 'k', preventDefault() {} }));
    key();
    assert.equal(elements.get('mindmapSearch')?.focused, true);
    assert.equal(elements.get('searchInput').focused, false);
    run('navigateWorkspace("glossary");'); key();
    assert.equal(elements.get('glossarySearch')?.focused, true);
});

test('desktop and mobile navigation expose mindmaps and all new assets load before init', () => {
    const { run, elements, context } = setup();
    let header;
    context.document.body.prepend = value => { header = value; };
    run('initWorkspaceShell();');
    assert.match(header.innerHTML, /data-workspace-link="mindmap">思维导图/);
    assert.match(elements.get('.more-grid').innerHTML, /data-workspace-link="mindmap"/);
    const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(match => match[1]);
    assert.match(styles.at(-1), /mindmap\.css/);
    assert.match(html, /mindmap-core\.js\?v=69[^]*mindmap-module\.js\?v=69[^]*<script>initStudyWorkspace/);
    const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
    for (const name of ['mindmap-core.js', 'mindmap-module.js', 'mindmap.css', 'data/java-learning-language.js', 'data/java-learning-runtime.js', 'java-learning-core.js', 'java-learning-view.js']) assert.ok(sw.includes(`"./${name}"`));
});
