const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
function setup(){
    const context=vm.createContext({console,document:{addEventListener(){}},window:{},GlossaryCore:require('../glossary-core.js')});
    context.window=context;
    for(const file of ['glossary-data.js','glossary.js']) vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
    return code=>vm.runInContext(code,context);
}
test('glossary renders only names and definitions and combines independent filters',()=>{
    const run=setup();
    assert.equal(run('glossaryIndex.terms.length'),443);
    assert.equal(run('glossaryIndex.categories.length'),15);
    run('glossaryState.search="AOP"; glossaryState.category="spring";');
    const html=run('renderGlossaryResults()');
    assert.match(html,/AOP/);
    assert.doesNotMatch(html,/sourceIds|selectionOrigin|来源|参考文献/);
    run('glossaryState.search="zzzz不存在";');
    assert.match(run('renderGlossaryResults()'),/没有匹配的术语/);
});
test('glossary markup escapes supplied names and definitions',()=>{
    const run=setup();
    run('glossaryState.search=""; glossaryState.category="all"; glossaryIndex.search=()=>[{id:"test",term:"<img>",definition:"<script>alert(1)</script>"}];');
    const html=run('renderGlossaryResults()');
    assert.ok(html.includes('&lt;img&gt;'));
    assert.ok(html.includes('&lt;script&gt;'));
    assert.doesNotMatch(html,/<img>|<script>/);
});
