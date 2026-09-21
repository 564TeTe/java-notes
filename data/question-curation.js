/* Editions can archive originals or return them to study; personal purges remain final. */
window.QUESTION_BANK_CURATION = {
    date: window.QUESTION_BANK_DATA.date,
    reasons: {
        ...Object.fromEntries((window.QUESTION_BANK_DATA.archivedQuestions || [])
            .map(q => [q.id, q.archiveReason || '已移出主背题库，可按需恢复。'])),
        ...Object.fromEntries(window.QUESTION_BANK_DATA.questions.filter(q => ['P1', 'P2'].includes(q.priority))
            .map(q => [q.id, `${q.priority} 题目暂移回收站，主背先保留 P0；可随时恢复。`]))
    },
    releases: window.QUESTION_BANK_DATA.curationReleases || [],
    archives: [{
        id: 'priority-p1-p2-2026-09-21',
        questionIds: window.QUESTION_BANK_DATA.questions.filter(q => ['P1', 'P2'].includes(q.priority)).map(q => q.id)
    }]
};
