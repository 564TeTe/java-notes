/* Editions can archive originals or return them to study; personal purges remain final. */
window.QUESTION_BANK_CURATION = {
    date: window.QUESTION_BANK_DATA.date,
    reasons: Object.fromEntries((window.QUESTION_BANK_DATA.archivedQuestions || [])
        .map(q => [q.id, q.archiveReason || '已移出主背题库，可按需恢复。'])),
    releases: window.QUESTION_BANK_DATA.curationReleases || []
};
