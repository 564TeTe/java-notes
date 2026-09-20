// Import a curated edition without discarding the originals or company links.
const fs = require('node:fs');
const path = require('node:path');

function readBank(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')
        .replace(/^\s*window\.QUESTION_BANK_DATA\s*=\s*/, '').replace(/;\s*$/, ''));
}
function mergeEdition(previous, edition, archive) {
    const questions = edition.questions, archivedQuestions = archive.questions;
    if (!Array.isArray(questions) || !questions.length || !Array.isArray(archivedQuestions)) throw new Error('题库或归档格式无效');
    const all = [...questions, ...archivedQuestions], ids = new Set();
    for (const q of all) {
        if (!q.id?.startsWith('bank-') || !q.question?.trim() || !q.answer?.trim() || !Array.isArray(q.sourceIds) || ids.has(q.id)) throw new Error('题目缺少内容或题号重复：' + q.id);
        ids.add(q.id);
    }
    for (const q of [...previous.questions, ...(previous.archivedQuestions || [])]) {
        if (!ids.has(q.id)) throw new Error('旧题缺少归档，已停止导入：' + q.id);
    }
    const sources = new Map();
    for (const source of [...previous.sources, ...edition.sources]) {
        const prior = sources.get(source.id);
        sources.set(source.id, {
            ...prior, ...source,
            type: /^官方/.test(source.company || '') ? 'reference' : (source.type || prior?.type || 'interview'),
            questionIds: [...new Set([...(prior?.questionIds || []), ...source.questionIds])].filter(id => ids.has(id))
        });
    }
    for (const q of all) for (const id of q.sourceIds) {
        const source = sources.get(id);
        if (!source) throw new Error('题目来源缺失：' + q.id + ' / ' + id);
        if (!source.questionIds.includes(q.id)) source.questionIds.push(q.id);
    }
    const activeIds = new Set(questions.map(q => q.id));
    for (const set of edition.studySets || []) {
        if (!set.questionIds.every(id => activeIds.has(id))) throw new Error('学习分组引用了非主背题：' + set.id);
    }
    return {
        ...edition,
        sources: [...sources.values()],
        supplements: [...new Map([...(previous.supplements || []), ...(edition.supplements || [])].map(s => [s.id, s])).values()],
        archivedQuestions,
        archiveDate: archive.date,
        archiveDescription: '移出主背的原题保留在回收站，可恢复；个人笔记和复习记录按原题号继续关联。'
    };
}
if (require.main === module) {
    const [editionFile, archiveFile] = process.argv.slice(2);
    if (!editionFile || !archiveFile) throw new Error('用法：node scripts/import-optimized-question-bank.cjs <question-bank.js> <archive-original-questions.json>');
    const target = path.join(__dirname, '..', 'data', 'question-bank.js');
    const merged = mergeEdition(readBank(target), readBank(editionFile), JSON.parse(fs.readFileSync(archiveFile, 'utf8').replace(/^\uFEFF/, '')));
    fs.writeFileSync(target, 'window.QUESTION_BANK_DATA = ' + JSON.stringify(merged, null, 2) + ';\n');
    console.log(JSON.stringify({active: merged.questions.length, archived: merged.archivedQuestions.length, sources: merged.sources.length}));
}
module.exports = { readBank, mergeEdition };
