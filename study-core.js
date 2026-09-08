/* Pure data operations shared by the browser and regression tests. */
(function(root, factory) {
    const core = factory();
    if (typeof module === 'object' && module.exports) module.exports = core;
    else root.StudyCore = core;
})(typeof window === 'undefined' ? globalThis : window, function() {
    function pool(source, bank, personal, deleted = [], purged = []) {
        if (source === 'bank') return [...bank];
        const excluded = new Set([...deleted, ...purged]);
        return [...new Map(personal.map(n => [n.id, n])).values()].filter(n => !excluded.has(n.id));
    }
    function filter(items, options = {}, mastery = {}) {
        const keyword = String(options.keyword || '').trim().toLowerCase();
        return items.filter(n => {
            if (options.category && options.category !== 'all' && n.category !== options.category) return false;
            if (options.priority && options.priority !== 'all' && n.priority !== options.priority) return false;
            if (options.ids && !options.ids.includes(n.id)) return false;
            const level = mastery[n.id]?.level || 'new';
            if (options.level === 'weak' && !['hard', 'fuzzy'].includes(level)) return false;
            if (options.level && !['all', 'weak'].includes(options.level) && options.level !== level) return false;
            return !keyword || [n.question, n.answer, n.category, n.number, ...(n.keywords || [])].join(' ').toLowerCase().includes(keyword);
        });
    }
    function sample(items, count, random = Math.random) {
        const shuffled = [...new Map(items.map(n => [n.id, n])).values()];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, Math.max(0, Math.floor(Number(count) || 0)));
    }
    function copyNote(source, notes, makeId) {
        const existing = notes.find(n => n.sourceId === source.id);
        if (existing) return { note: existing, created: false };
        return { created: true, note: { id: makeId(), question: source.question, answer: source.answer,
            category: source.category, sourceId: source.id, sourceNumber: source.number || '',
            keywords: [], updatedAt: new Date().toISOString() } };
    }
    function restoreInterviews(value, current = []) {
        if (value === undefined) return current;
        if (!Array.isArray(value)) throw new Error('面试复盘数据格式无效');
        return value.filter(r => r && typeof r.id === 'string' && typeof r.company === 'string' && r.company.trim())
            .map(r => {
                for (const key of ['date', 'questions', 'round', 'role', 'result', 'reflection', 'nextStep', 'updatedAt']) {
                    if (r[key] !== undefined && typeof r[key] !== 'string') throw new Error('面试复盘字段格式无效：' + key);
                }
                return { ...r, company: r.company.slice(0, 120) };
            });
    }
    return { pool, filter, sample, copyNote, restoreInterviews };
});
