const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mergeEdition } = require('../scripts/import-optimized-question-bank.cjs');
const question = (id, sourceIds = []) => ({ id, question: '问题', answer: '答案', sourceIds });
function fixture() {
    const previous = {
        questions: [question('bank-keep', ['company']), question('bank-retire', ['company'])],
        sources: [{ id: 'company', company: '腾讯', questionIds: ['bank-keep', 'bank-retire'] }],
        supplements: [{ id: 'history', companyEntries: 2 }]
    };
    const edition = {
        questions: [question('bank-new', ['docs']), { ...question('bank-keep', ['company']), answer: '新版答案' }],
        sources: [{ id: 'company', company: '腾讯', questionIds: ['bank-keep'] }, { id: 'docs', company: '官方文档', questionIds: ['bank-new'] }],
        supplements: [{ id: 'new', standaloneQuestions: 1 }],
        studySets: [{ id: 'starter', questionIds: ['bank-new'] }]
    };
    return { previous, edition, archive: { date: '2026-09-20', questions: [previous.questions[1]] } };
}
test('edition import keeps answers and order, preserves archive sources and is repeatable', () => {
    const { previous, edition, archive } = fixture();
    const merged = mergeEdition(previous, edition, archive);
    assert.deepEqual(merged.questions, edition.questions);
    assert.deepEqual(merged.archivedQuestions, archive.questions);
    assert.deepEqual(merged.sources[0].questionIds, ['bank-keep', 'bank-retire']);
    assert.equal(merged.sources[1].type, 'reference');
    assert.deepEqual(merged.supplements.map(s => s.id), ['history', 'new']);
    assert.deepEqual(mergeEdition(merged, edition, archive), merged);
    assert.equal(previous.questions[0].answer, '答案');
});
test('edition import refuses missing originals or overlapping active and archived IDs', () => {
    const { previous, edition, archive } = fixture();
    assert.throws(() => mergeEdition(previous, edition, { questions: [] }), /旧题缺少归档/);
    assert.throws(() => mergeEdition(previous, edition, { questions: [...archive.questions, edition.questions[0]] }), /题号重复/);
});
test('edition import refuses missing sources and inactive study-set members', () => {
    const { previous, edition, archive } = fixture();
    assert.throws(() => mergeEdition(previous, { ...edition, sources: [] }, archive), /题目来源缺失/);
    assert.throws(() => mergeEdition(previous, { ...edition, studySets: [{ id: 'bad', questionIds: ['bank-retire'] }] }, archive), /非主背题/);
});
