const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');

const root = path.join(__dirname, '..');
function loadContent() {
    const app = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(path.join(root, 'resume-data.js'), 'utf8'), app);
    const claimsFile = path.join(root, 'resume-claims.js');
    if (fs.existsSync(claimsFile)) vm.runInContext(fs.readFileSync(claimsFile, 'utf8'), app);
    return app.window;
}

test('current resume has fourteen prepared claims with valid source and question links', () => {
    const { RESUME_PREP_DATA: data, RESUME_CLAIMS: claims } = loadContent();
    assert.ok(claims, 'the claim workbench needs its resume claim data');
    assert.equal(claims.date, '2026-09-16');
    assert.equal(claims.items.length, 14);
    assert.equal(new Set(claims.items.map(item => item.id)).size, 14);
    const questions = new Map(data.questions.map(question => [question.id, question]));
    const counts = {};
    for (const claim of claims.items) {
        assert.match(claim.id, /^(yy|br|zs)-[a-z-]+$/);
        counts[claim.source] = (counts[claim.source] || 0) + 1;
        assert.ok(claim.title.trim() && claim.quote.trim());
        assert.equal(claim.prompts.length, 4, `${claim.id}: one prompt for each preparation field`);
        assert.equal(new Set(claim.prompts).size, 4, `${claim.id}: prompts must be distinct`);
        assert.ok(claim.prompts.every(prompt => typeof prompt === 'string' && prompt.trim()));
        assert.ok(claim.questionIds.length > 0, `${claim.id}: needs a practice entry`);
        for (const id of claim.questionIds) {
            assert.ok(questions.has(id), `${claim.id}: missing ${id}`);
            assert.equal(questions.get(id).source, claim.source, `${claim.id}: wrong question source`);
        }
    }
    assert.deepEqual(counts, { yonyou: 4, beiruan: 4, zhishu: 6 });
});

test('existing question and pitch IDs remain available to saved personal records', () => {
    const { RESUME_PREP_DATA: data } = loadContent();
    for (const list of [data.sources, data.questions, data.pitches, data.stories, data.checklist]) {
        assert.equal(new Set(list.map(item => item.id)).size, list.length, 'IDs must stay unique');
    }
    const ids = new Set(data.questions.map(question => question.id));
    for (const [source, count] of [['general', 5], ['zhishu', 14], ['yonyou', 9], ['beiruan', 10]]) {
        for (let index = 1; index <= count; index++) assert.ok(ids.has(`q-${source}-${index}`));
    }
    for (const id of ['self-60', 'self-30', 'zhishu-15', 'zhishu-60', 'yonyou-30', 'yonyou-60', 'beiruan-60']) {
        assert.ok(data.pitches.some(pitch => pitch.id === id));
    }
    for (const id of ['check-br-regression', 'check-br-notifications', 'check-br-boundary']) {
        assert.ok(data.checklist.some(item => item.id === id));
    }
});

test('new production and sales claims lead to evidence-oriented follow-up practice', () => {
    const { RESUME_PREP_DATA: data, RESUME_CLAIMS: claims } = loadContent();
    assert.ok(claims, 'new production and sales work must be represented as claims');
    const report = claims.items.find(claim => claim.id === 'br-report');
    const sales = claims.items.find(claim => claim.id === 'br-sales');
    assert.ok(report && sales);
    assert.match(report.quote, /报工ID.*幂等/);
    assert.match(sales.quote, /销售订单、开票、回款/);
    assert.ok(report.questionIds.length >= 3 && sales.questionIds.length >= 3);
    for (const id of [...report.questionIds, ...sales.questionIds, 'q-yonyou-10', 'q-yonyou-11']) {
        const question = data.questions.find(item => item.id === id);
        assert.ok(question, `missing grounded follow-up ${id}`);
        assert.ok(question.outline && question.evidence, `${id}: needs an answer framework and evidence prompt`);
    }
    for (const id of ['self-60', 'self-30', 'beiruan-60']) {
        const content = data.pitches.find(pitch => pitch.id === id).content;
        assert.match(content, /报工/);
        assert.match(content, /销售/);
    }
});

test('legacy handbooks and off-resume Beiruan material are clearly supplemental', () => {
    const { RESUME_PREP_DATA: data } = loadContent();
    for (const source of data.sources.filter(item => item.file.endsWith('.docx'))) {
        assert.match(source.fileType, /补充/);
    }
    for (const id of ['q-beiruan-5', 'q-beiruan-6', 'q-beiruan-9']) {
        assert.match(data.questions.find(item => item.id === id).question, /补充/);
    }
    const source = data.sources.find(item => item.id === 'beiruan');
    assert.match(source.summary, /报工/);
    assert.match(source.summary, /销售/);
    assert.doesNotMatch(source.highlights.join(' '), /17/);
});

test('the downloadable PDF is the exact resume supplied on 2026-09-16', () => {
    const { RESUME_PREP_DATA: data } = loadContent();
    const file = data.sources.find(source => source.id === 'resume').file.split('?')[0];
    const bytes = fs.readFileSync(path.join(root, file));
    assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
    assert.equal(createHash('sha256').update(bytes).digest('hex'),
        '042b4efda7d3b81525a4a7a908a39ca652aaabac00154658e84c5911f8b59c39');
});
