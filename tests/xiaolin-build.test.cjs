const {test}=require('node:test');
const assert=require('node:assert/strict');
const {createRenderer}=require('../scripts/build-xiaolin.cjs');

test('build rendering keeps nested lists, fenced code, tables and safe images',()=>{
    const render=createRenderer();
    const html=render('- Parent\n  - Child\n\n```java\nList<String> values;\n```\n\n|a|b|\n|-|-|\n|1|2|\n\n![图](<https://example.org/a.png>)','https://xiaolincoding.com/interview/java.html');
    assert.match(html,/<ul>[\s\S]*<ul>/);assert.match(html,/language-java/);assert.match(html,/List&lt;String&gt;/);assert.match(html,/<table>/);assert.match(html,/<img[^>]*loading="lazy"/);
});
test('raw HTML fallback is sanitized without executing active content',()=>{
    const render=createRenderer();
    const html=render('<div onclick="bad()"><script>bad()</script><iframe src="https://bad.test"></iframe><img src="javascript:bad()" onerror="bad()"><a href="javascript:bad()">bad link</a><table><tr><td colspan="2">正文</td></tr></table></div>','https://xiaolincoding.com/interview/java.html');
    assert.doesNotMatch(html,/onclick|script|iframe|javascript:|onerror/);assert.match(html,/colspan="2"/);assert.match(html,/正文/);
});
