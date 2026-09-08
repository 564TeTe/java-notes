const { test } = require('node:test');
const assert = require('node:assert/strict');
const core = require('../study-core.js');
const bank = [{ id: 'bank-Q01-001', category: 'Java', priority: 'P0' }, { id: 'bank-Q01-002', category: 'SQL', priority: 'P1' }];
const notes = [{ id: 'old' }, { id: 'user-1' }, { id: 'deleted' }];

test('question bank and personal notes are isolated and deleted notes are excluded', () => {
    assert.deepEqual(core.pool('bank', bank, notes, ['deleted']), bank);
    assert.deepEqual(core.pool('personal', bank, notes, ['deleted']).map(n => n.id), ['old', 'user-1']);
});
test('sampling supports zero, one and small pools without duplicates or mutation', () => {
    assert.deepEqual(core.sample([], 3), []);
    assert.equal(core.sample(bank, 10).length, 2);
    assert.equal(new Set(core.sample(bank, 10).map(n => n.id)).size, 2);
    assert.equal(core.sample([notes[0]], 3).length, 1);
    assert.equal(bank[0].id, 'bank-Q01-001');
});
test('weak filtering includes only hard and fuzzy, with category and priority restrictions', () => {
    const mastery = { [bank[0].id]: { level: 'hard' }, [bank[1].id]: { level: 'known' } };
    assert.deepEqual(core.filter(bank, { level: 'weak' }, mastery), [bank[0]]);
    assert.deepEqual(core.filter(bank, { category: 'SQL', priority: 'P0' }, mastery), []);
    assert.deepEqual(core.filter(bank, { level: 'new' }, {}), bank);
});
test('copying into personal notes is idempotent and restores a deleted source copy', () => {
    const source = { ...bank[0], question: 'Question', answer: 'Answer' };
    const a = core.copyNote(source, [], () => 'user-copy');
    assert.equal(a.note.sourceId, source.id);
    const b = core.copyNote(source, [a.note], () => 'user-other');
    assert.equal(b.created, false);
    assert.equal(b.note.id, 'user-copy');
});
test('review records are validated and legacy backup does not erase newly supported records', () => {
    const records = [{ id: 'r1', company: '公司', questions: 'Java?', reflection: '复盘' }];
    assert.deepEqual(core.restoreInterviews(undefined, records), records);
    assert.deepEqual(core.restoreInterviews([], records), []);
    assert.deepEqual(core.restoreInterviews([null, { id: 'bad' }, records[0]], []), records);
});
test('malformed interview text fields are rejected before persistence', () => {
    assert.throws(() => core.restoreInterviews([{ id: 'r', company: '公司', questions: [], date: 42 }]), /格式/);
});
test('pagination clamps pages and normalizes page size', () => {
    assert.deepEqual(core.pagination(421, 50, 99), { size: 50, pages: 9, page: 9, start: 400, end: 421 });
    assert.equal(core.pagination(0, 20, -5).page, 1);
    assert.equal(core.pagination(420, 7, 2).size, 20);
    assert.equal(core.pagination(420, 100, 1.5).page, 1);
});
test('custom bank questions validate before importing and preserve old backups', () => {
    const items = [{id:'custom-bank-1',question:'Q',answer:'A',category:'Java 基础'}];
    assert.deepEqual(core.restoreBankQuestions(undefined, items), items);
    assert.deepEqual(core.restoreBankQuestions(items), [{...items[0], keywords:[]}]);
    assert.throws(() => core.restoreBankQuestions([{...items[0],answer:[]}]), /格式/);
    assert.throws(() => core.restoreBankQuestions([{...items[0],id:'bank-Q01-001'}]), /格式/);
    assert.throws(() => core.restoreBankQuestions([{...items[0],priority:'<img src=x onerror=alert(1)>'}]), /格式/);
});
