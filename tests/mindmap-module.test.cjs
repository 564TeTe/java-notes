const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function setup(saved, failWrites = false) {
    const store = new Map(saved === undefined ? [] : [['java-notes-mindmaps-v1', saved]]);
    const handlers = {};
    const context = vm.createContext({ console, crypto: require('node:crypto').webcrypto,
        localStorage: { getItem: k => store.get(k) ?? null, setItem(k,v) { if(failWrites) throw Error('quota'); store.set(k,v); } },
        document: { addEventListener(name,handler,options) { if (!options) handlers[name] = handler; }, getElementById: () => null, querySelector: () => null },
        getBankStudyRecords: () => [{id:'bank-a',category:'Java',question:'集合',answer:'答案'}],
        mastery: {}, memorizedIds: new Set(), setTimeout, clearTimeout, markLocalUpdated() {},
        addEventListener() {}, confirm: () => true });
    context.window = context;
    for (const file of ['mindmap-core.js', 'mindmap-module.js']) vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'), context);
    return { store, handlers, run: code => vm.runInContext(code,context) };
}
test('mindmap snapshots persist and reload without changing linked question IDs', () => {
    const app = setup();
    app.run(`const m=MindMapCore.createMap('测试'); const linked=MindMapCore.updateNode(m,m.rootId,{questionId:'bank-a',note:'理解'}); applyMindMapSnapshot({version:1,activeMapId:linked.id,maps:[linked]});`);
    const reloaded=setup(app.store.get('java-notes-mindmaps-v1'));
    assert.equal(reloaded.run('getMindMapSnapshot().maps[0].nodes[0].questionId'),'bank-a');
    assert.equal(reloaded.run('getMindMapSnapshot().maps[0].nodes[0].note'),'理解');
});
test('invalid imported snapshots cannot overwrite valid saved data', () => {
    const app=setup();
    app.run(`const m=MindMapCore.createMap('已有'); applyMindMapSnapshot({version:1,activeMapId:m.id,maps:[m]});`);
    const before=app.store.get('java-notes-mindmaps-v1');
    assert.throws(()=>app.run('applyMindMapSnapshot({version:999,maps:[]})'));
    assert.equal(app.store.get('java-notes-mindmaps-v1'),before);
});
test('corrupt storage is surfaced and preserved instead of silently overwritten', () => {
    const app=setup('{broken');
    assert.match(app.run('renderMindMap()'),/读取失败/);
    assert.equal(app.store.get('java-notes-mindmaps-v1'),'{broken');
    const control = { dataset: { mmAction: 'knowledge' } };
    app.handlers.click({ target: { closest: selector => selector === '[data-mm-action]' ? control : selector === '.mindmap-view' ? {} : null } });
    assert.equal(app.store.get('java-notes-mindmaps-v1'),'{broken');
    assert.throws(() => app.run('getMindMapSnapshot()'), /读取失败/);
});
test('storage errors do not claim success or change the in-memory snapshot', () => {
    const app=setup(undefined,true);
    assert.throws(()=>app.run(`const m=MindMapCore.createMap('未保存'); applyMindMapSnapshot({version:1,activeMapId:m.id,maps:[m]});`));
    assert.equal(app.run('getMindMapSnapshot().maps.length'),0);
});
test('SVG exports escape imported text and include nodes hidden by collapse', () => {
    const app=setup();
    const svg=app.run(`let m=MindMapCore.createMap('<script>alert(1)</script>'); m=MindMapCore.addNode(m,m.rootId,'A & B'); m=MindMapCore.updateNode(m,m.rootId,{collapsed:true}); getMindMapSVG(m);`);
    assert.ok(svg.startsWith('<svg'));
    assert.doesNotMatch(svg,/<script>/);
    assert.match(svg,/A &amp; B/);
});
