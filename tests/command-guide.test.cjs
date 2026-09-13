const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function setup() {
    const context = vm.createContext({ document: { addEventListener() {} }, console });
    context.window = context;
    for (const file of ['data/command-guide.js', 'command-guide.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
    return code => vm.runInContext(code, context);
}
test('guide data has exactly 40 core commands and independently readable scenes', () => {
    const run = setup();
    assert.equal(run('COMMAND_GUIDE_DATA.core.length'), 40);
    assert.equal(run('COMMAND_GUIDE_DATA.scenarios.length'), 14);
    assert.equal(run('COMMAND_GUIDE_DATA.chapters.length'), 27);
    assert.ok(run('COMMAND_GUIDE_DATA.scenarios.every(s => s.content && s.title && s.id)'));
    assert.ok(run('COMMAND_GUIDE_DATA.chapters.find(s => s.id === "c14").content.includes("tail -n 100 -F")'));
    assert.equal(run('typeof QUESTION_BANK_DATA'), 'undefined');
});
test('reader keeps code literal, escapes HTML and rejects executable links', () => {
    const run = setup();
    const render = text => run(`commandMarkdown(${JSON.stringify(text)})`);
    const code = render('```bash\n# comment, not heading\nprintf "<script>" | cat\n```');
    assert.ok(code.includes('&lt;script&gt;'));
    assert.ok(!code.includes('<h'));
    assert.ok(code.includes('data-guide-copy='));
    const hostile = render('<img src=x onerror=alert(1)>\n\n[x](javascript:alert)');
    assert.ok(!hostile.includes('<img'));
    assert.ok(!hostile.includes('href="javascript:'));
    assert.ok(render('[文档](https://example.com/a)').includes('rel="noopener noreferrer"'));
});
test('tables preserve escaped pipes and copyable code exactly', () => {
    const run = setup();
    const rendered = run('commandMarkdown("| 命令 | 说明 |\\n|---|---|\\n| `ps -ef \\\\| grep java` | 查进程 |")');
    assert.equal((rendered.match(/<td>/g) || []).length, 2);
    assert.ok(rendered.includes('ps -ef | grep java'));
});
test('search matches command text and purpose with case insensitive words', () => {
    const run = setup();
    assert.equal(run('commandMatches({command:"Get-Process -Id 12345", purpose:"查 PID"}, "PID get-process")'), true);
    assert.equal(run('commandMatches({title:"Redis",content:"SCAN"}, "mysql")'), false);
});
test('import preserves every fenced command block from the full reference', () => {
    const run = setup();
    const original = fs.readFileSync(path.join(__dirname, '../assets/guides/java-backend-commands.md'), 'utf8').replace(/\r\n/g, '\n');
    const imported = JSON.parse(run('JSON.stringify([...COMMAND_GUIDE_DATA.chapters, ...COMMAND_GUIDE_DATA.scenarios].map(item => item.content))')).join('\n');
    const blocks = text => [...text.matchAll(/^```[^\n]*\n([\s\S]*?)^```/gm)].map(match => match[1]).sort();
    assert.equal(blocks(original).length, 63);
    assert.deepEqual(blocks(imported), blocks(original));
});
