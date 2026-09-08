/* Study workspace. Loaded after the legacy app declarations and before init(). */
const BANK = window.QUESTION_BANK_DATA.questions;
let customBankQuestions = [];
try { customBankQuestions = StudyCore.restoreBankQuestions(JSON.parse(localStorage.getItem('custom-bank-questions') || '[]')); } catch (_) {}
function getCustomBankQuestions() { return customBankQuestions; }
function applyCustomBankQuestionsSnapshot(value) {
    customBankQuestions = StudyCore.restoreBankQuestions(value, customBankQuestions);
    localStorage.setItem('custom-bank-questions', JSON.stringify(customBankQuestions));
}
function saveCustomBankQuestion(values, id) {
    const question = String(values.question || '').trim(), answer = String(values.answer || '').trim();
    if (!question || !answer) throw new Error('请填写题目和答案');
    const note = { id: id || 'custom-bank-' + crypto.randomUUID(), question, answer, category: values.category || 'Java 基础', priority: values.priority || 'P1', company: values.company || '', kind: '自己添加', keywords: [], updatedAt: new Date().toISOString() };
    const updated = customBankQuestions.filter(n => n.id !== note.id);
    applyCustomBankQuestionsSnapshot([note, ...updated]);
    scheduleCloudSync(); return note;
}
let studyEditorSource = 'personal';
let studyEditorReturnInterview = false;
let studyPageSize = 20;
try { studyPageSize = StudyCore.pagination(0, localStorage.getItem('study-page-size')).size; } catch (_) {}
let studySource = 'bank';
let studyPage = 1;
let studyFiltersOpen = false;
let studyPriority = 'all';
let studyLevel = 'all';
let studyLinkedIds = null;
let studyLinkedTitle = '';
let studyEditingId = null;
let studyModalFocus = null;
let quizSource = 'bank';
let quizCategory = 'all';
let quizLevel = 'all';
let quizCount = 3;
let quizStarted = false;
let quizLinkedIds = null;
let quizLinkedTitle = '';

const studyEsc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const studyLevelNames = { new: '未复习', hard: '不会', fuzzy: '模糊', known: '已掌握' };

function getPersonalNotes(includeDeleted = false) {
    // Imported 420 questions are the canonical home for built-in questions.
    // The personal area contains only user-authored notes and saved copies.
    const merged = [...userNotes];
    return includeDeleted ? merged : StudyCore.pool('personal', BANK, merged, deletedIds, purgedIds);
}
function getAllStudyRecords() {
    return [...new Map([...BANK, ...customBankQuestions, ...userNotes].map(n => [n.id, n])).values()];
}
function getStudyPool(source = studySource) {
    if (source !== 'bank') return getPersonalNotes();
    // Authored notes share identity with the bank. Saved copies keep their personal
    // wording but do not create a second bank entry for the same source.
    const bank = [...customBankQuestions, ...BANK];
    const authored = userNotes.filter(n => !n.sourceId);
    return StudyCore.pool('personal', [], [...authored, ...bank], deletedIds, purgedIds);
}
getActiveNotes = function() { return getStudyPool(); };
getDeletedNotes = function() { return getAllStudyRecords().filter(n => deletedIds.has(n.id) && !purgedIds.has(n.id)); };
deleteNote = function(id) {
    if (!getAllStudyRecords().some(n => n.id === id)) return;
    deletedIds.add(id); saveDeleted(); renderAll(); toast('已移入回收站，可恢复');
};
restoreNote = function(id) {
    deletedIds.delete(id); saveDeleted(); renderAll(); toast('已恢复，学习记录已保留');
};
function purgeStudyRecord(id) {
    userNotes = userNotes.filter(n => n.id !== id);
    customBankQuestions = customBankQuestions.filter(n => n.id !== id);
    if (BANK.some(n => n.id === id) || NOTES.some(n => n.id === id)) purgedIds.add(id);
    deletedIds.delete(id); markedIds.delete(id); sunkIds.delete(id); delete mastery[id];
}
function persistStudyDeletion() {
    applyCustomBankQuestionsSnapshot(customBankQuestions);
    saveUserNotes(); saveDeleted(); savePurged(); saveMarked(); saveSunk(); saveMastery();
}
permDelete = function(id) {
    if (!confirm('永久删除这条内容？此操作不可恢复。')) return;
    purgeStudyRecord(id); persistStudyDeletion(); renderAll(); toast('已永久删除');
};
emptyTrash = function() {
    if (!deletedIds.size || !confirm('永久清空回收站？题库和笔记中已删除的内容都将清除。')) return;
    [...deletedIds].forEach(purgeStudyRecord); persistStudyDeletion(); renderAll(); toast('回收站已清空');
};
getFilteredNotes = function() {
    if (showQuiz) return quizNotes;
    if (showInterviewExp) return getInterviewFilteredQuestions();
    const pool = showTrash ? getDeletedNotes() : getStudyPool();
    return StudyCore.filter(pool, {
        category: showTrash || showMarkedOnly ? 'all' : activeCategory,
        keyword: document.getElementById('searchInput').value,
        priority: showTrash ? 'all' : studyPriority,
        level: showTrash ? 'all' : studyLevel,
        ids: showMarkedOnly ? pool.filter(n => markedIds.has(n.id)).map(n => n.id) : showTrash ? null : studyLinkedIds
    }, mastery).sort((a, b) => Number(sunkIds.has(a.id)) - Number(sunkIds.has(b.id)));
};
function resetStudyModes() {
    showQuiz = showTrash = showMarkedOnly = showResources = showInterviewExp = showResumePrep = showRecruitment = false;
    activeNoteId = null;
}
function clearStudyFilters() {
    activeCategory = 'all'; studyPriority = studyLevel = 'all'; studyPage = 1;
    studyLinkedIds = null; studyLinkedTitle = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('mobileSearchInput').value = '';
}
function openStudy(source) {
    resetStudyModes(); studySource = source === 'personal' ? 'personal' : 'bank';
    clearStudyFilters(); buildCategoryBtns(); renderAll();
    document.querySelector('.sidebar').classList.remove('drawer-open');
    document.getElementById('drawerOverlay').classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function studyOptions(values, selected) {
    return values.map(([value, label]) => `<option value="${studyEsc(value)}"${selected === value ? ' selected' : ''}>${studyEsc(label)}</option>`).join('');
}
function studyCategories(source = studySource) { return [...new Set(getStudyPool(source).map(n => n.category))]; }
buildCategoryBtns = function() {
    const container = document.getElementById('categoryBtns');
    container.innerHTML = [['all', '全部'], ...studyCategories().map(c => [c, c])].map(([value, label]) =>
        `<button class="cat-btn${activeCategory === value ? ' active' : ''}" data-cat="${studyEsc(value)}">${studyEsc(label)}</button>`).join('');
};
function studyHeader() {
    return '';
}
function studyFilterToggle() {
    const count = [activeCategory !== 'all', studyPriority !== 'all', studyLevel !== 'all'].filter(Boolean).length;
    return `<button class="study-filter-toggle" data-study="filters" aria-expanded="${studyFiltersOpen}" aria-controls="studyLibraryFilters">筛选${count ? ` <b>${count}</b>` : ''}</button>`;
}
function studyFilters() {
    return `<div id="studyLibraryFilters" class="study-filters${studyFiltersOpen ? ' filters-expanded' : ''}">
        <label>知识分类<select data-study-filter="category">${studyOptions([['all', '全部分类'], ...studyCategories().map(c => [c, c])], activeCategory)}</select></label>
        ${studySource === 'bank' ? `<label>学习顺序<select data-study-filter="priority">${studyOptions([['all', '全部优先级'], ['P0', 'P0 · 先掌握'], ['P1', 'P1 · 第二轮'], ['P2', 'P2 · 按岗位补充']], studyPriority)}</select></label>` : ''}
        <label>掌握程度<select data-study-filter="level">${studyOptions([['all', '全部状态'], ['new', '未复习'], ['weak', '不会 / 模糊'], ['known', '已掌握']], studyLevel)}</select></label>
        <button class="study-text" data-study="clear">重置筛选</button>
    </div>`;
}
function studyMarkdown(text) {
    // Escape raw HTML first. Only a small, safe Markdown subset is supported.
    const blocks = String(text || '').split(/```[^\n]*\n([\s\S]*?)```/g);
    return blocks.map((block, i) => {
        if (i % 2) return `<pre><code>${studyEsc(block)}</code></pre>`;
        let safe = studyEsc(block);
        safe = safe.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>');
        safe = safe.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`\n]+)`/g, '<code>$1</code>');
        return safe.split(/\n\s*\n/).filter(Boolean).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    }).join('');
}
function studyRatings(note, index) {
    return `<div class="study-ratings" aria-label="掌握程度">${['hard', 'fuzzy', 'known'].map(level =>
        `<button data-study="rate" data-id="${studyEsc(note.id)}" data-level="${level}"${index == null ? '' : ` data-index="${index}"`} class="${mastery[note.id]?.level === level ? 'selected ' : ''}${level}" aria-pressed="${mastery[note.id]?.level === level}">${studyLevelNames[level]}</button>`).join('')}</div>`;
}
function studyCard(n) {
    const isBank = studySource === 'bank' && !showTrash;
    const copied = userNotes.some(u => (u.sourceId === n.id || u.id === n.id) && !deletedIds.has(u.id));
    const level = mastery[n.id]?.level || 'new';
    const expanded = !collapsedNotes.has(n.id);
    return `<article class="study-card note${markedIds.has(n.id) ? ' marked' : ''}" id="note-${studyEsc(n.id)}">
        <div class="study-card-meta"><span class="study-number">${studyEsc(n.number || n.sourceNumber || (n.id.startsWith('custom-bank-') ? '自建题目' : '个人笔记'))}</span><span>${studyEsc(n.category)}</span>${n.priority ? `<span class="study-priority">${studyEsc(n.priority)}</span>` : ''}<span class="study-status ${level}">${studyLevelNames[level]}</span></div>
        <button class="study-question" data-study="expand" data-id="${studyEsc(n.id)}" aria-expanded="${expanded}" aria-controls="answer-${studyEsc(n.id)}"><span>${studyEsc(n.question)}</span><span class="study-chevron">${expanded ? '−' : '+'}</span></button>
        <div class="study-answer answer${expanded ? '' : ' collapsed'}" id="answer-${studyEsc(n.id)}">${studyMarkdown(n.answer)}${studyRatings(n)}</div>
        <footer class="study-card-footer"><span>${showTrash ? (n.id.startsWith('bank-') ? '内置题库' : n.id.startsWith('custom-bank-') ? (n.company ? '公司面经 · ' + studyEsc(n.company) : '自建题库') : '我的笔记') : isBank ? studyEsc(n.kind || '我的笔记 · 自动收录') : n.sourceId ? '来自题库 · 可编辑自己的理解' : n.id.startsWith('user-') ? '我的记录' : '原有笔记'}</span><div>
            ${showTrash ? `<button data-action="restore" data-id="${studyEsc(n.id)}">恢复</button><button data-action="perm-delete" data-id="${studyEsc(n.id)}">永久删除</button>` : `
            <button data-study="mark" data-id="${studyEsc(n.id)}" aria-pressed="${markedIds.has(n.id)}" aria-label="${markedIds.has(n.id) ? '取消重点' : '标记重点'}：${studyEsc(n.question)}">${markedIds.has(n.id) ? '★ 已标重点' : '☆ 重点'}</button>
            ${isBank ? `<button data-study="copy" data-id="${studyEsc(n.id)}">${copied ? '✓ 已存笔记' : '＋ 记入笔记'}</button>${n.id.startsWith('custom-bank-') ? `<button data-study="edit-bank" data-id="${studyEsc(n.id)}">编辑题目</button>` : userNotes.some(u => u.id === n.id) ? `<button data-study="edit" data-id="${studyEsc(n.id)}">编辑笔记</button>` : ''}<button data-action="delete" data-id="${studyEsc(n.id)}">删除</button>` : `<button data-study="edit" data-id="${studyEsc(n.id)}">编辑</button><button data-action="delete" data-id="${studyEsc(n.id)}" aria-label="删除笔记：${studyEsc(n.question)}">删除</button>`}`}
        </div></footer>
    </article>`;
}
function renderStudyLibrary(filtered) {
    const bank = studySource === 'bank';
    const pool = getStudyPool();
    const known = pool.filter(n => mastery[n.id]?.level === 'known').length;
    const weak = pool.filter(n => ['hard', 'fuzzy'].includes(mastery[n.id]?.level)).length;
    const pages = StudyCore.pagination(filtered.length, studyPageSize, studyPage).pages;
    studyPage = Math.min(studyPage, pages);
    const pageItems = filtered.slice((studyPage - 1) * studyPageSize, studyPage * studyPageSize);
    let html = studyHeader();
    if (!showTrash && !showMarkedOnly) html += `<section class="study-summary" aria-label="学习进度"><div class="study-summary-count"><strong>${pool.length}</strong><span>${bank ? '道题目' : '条笔记'}</span><i></i><span>已掌握 <b>${known}</b></span><span>待巩固 <b>${weak}</b></span></div><div class="study-summary-actions">${bank ? '<button class="study-primary" data-study="add-bank">＋ 添加题目</button><button class="study-secondary" data-study="weak">练习薄弱题</button>' : '<button class="study-primary" data-study="add">＋ 写笔记</button>'}<button class="study-secondary" data-study="quiz" data-source="${studySource}" ${pool.length ? '' : 'disabled'}>${bank ? '开始抽查' : '复习笔记'} →</button></div></section>`;
    if (studyLinkedIds && !showTrash) html += `<div class="study-linked">面经关联：${studyEsc(studyLinkedTitle)}<button data-study="clear">查看全部题库 ×</button></div>`;
    html += `<div class="study-list-heading"><h2>${showTrash ? '回收站' : showMarkedOnly ? '重点复习' : bank ? '全部题目' : '我的记录'} <span>${filtered.length}</span></h2>${!showTrash ? studyFilterToggle() : ''}${studyAnswerToggle(filtered)}</div>`;
    if (!showTrash) html += studyFilters();
    if (showTrash && filtered.length) html += '<button class="study-secondary" onclick="emptyTrash()">清空回收站</button>';
    if (!filtered.length) html += `<div class="study-empty"><span>⌕</span><h3>${showTrash ? (getDeletedNotes().length ? '没有匹配的已删除内容' : '回收站是空的') : !bank && !pool.length ? '从你的第一条笔记开始' : '暂时没有符合条件的内容'}</h3><p>${showTrash ? '删除的题目和笔记会显示在这里，可恢复或永久清除。' : bank ? '换一个关键词，或清空筛选继续学习。' : '写下第一条笔记，或从题库保存你想复习的问题。'}</p><button class="study-secondary" data-study="clear">清空筛选</button>${!bank && !showTrash ? '<button class="study-primary" data-study="add">写笔记</button>' : ''}</div>`;
    else html += renderStudyPagination(filtered.length, 'top') + pageItems.map(studyCard).join('');
    if (filtered.length) html += renderStudyPagination(filtered.length, 'bottom');
    return html;
}
function goStudyPage(value) {
    studyPage = StudyCore.pagination(getFilteredNotes().length, studyPageSize, value).page;
    renderAll(); document.querySelector('.study-list-heading')?.scrollIntoView({ block: 'start' });
}
function studyAnswerToggle(questions) {
    const expanded = questions.length > 0 && questions.every(n => !collapsedNotes.has(n.id));
    return `<div class="study-list-tools"><button data-study="${expanded ? 'collapse' : 'expand-all'}" aria-pressed="${expanded}">${expanded ? '收起答案' : '展开答案'}</button></div>`;
}
function renderStudyPagination(total, location) {
    const p = StudyCore.pagination(total, studyPageSize, studyPage);
    const arrow = direction => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${direction === 'left' ? 'm14 6-6 6 6 6' : 'm10 6 6 6-6 6'}"/></svg>`;
    return `<nav class="study-pagination pagination-compact" data-page-location="${location}" aria-label="${location === 'top' ? '顶部' : '底部'}题目分页"><span class="page-range">${p.start + 1}–${p.end} <span>/ ${total} 条</span></span><div class="page-steps"><button data-study="page" data-page="${p.page - 1}" aria-label="上一页" ${p.page === 1 ? 'disabled' : ''}>${arrow('left')}</button><span class="page-current" aria-label="第 ${p.page} 页，共 ${p.pages} 页">${p.page}<span> / ${p.pages}</span></span><button data-study="page" data-page="${p.page + 1}" aria-label="下一页" ${p.page === p.pages ? 'disabled' : ''}>${arrow('right')}</button></div><details class="page-settings"><summary aria-label="分页设置">设置</summary><div class="page-settings-content"><label>每页条数<select data-page-size aria-label="每页条数">${studyOptions([10,20,50,100].map(n => [String(n), n + ' 条']), String(p.size))}</select></label><form data-page-jump><label>跳至<input type="number" inputmode="numeric" name="page" value="${p.page}" min="1" max="${p.pages}" step="1" required aria-label="跳转页码">页</label><button type="submit">前往</button></form><div class="page-boundaries"><button data-study="page" data-page="1" ${p.page === 1 ? 'disabled' : ''}>首页</button><button data-study="page" data-page="${p.pages}" ${p.page === p.pages ? 'disabled' : ''}>末页</button></div></div></details></nav>`;
}
function getQuizPool() {
    return StudyCore.filter(getStudyPool(quizSource), { category: quizCategory, level: quizLevel, ids: quizLinkedIds }, mastery);
}
startQuiz = function(source) {
    resetStudyModes(); showQuiz = true;
    quizSource = source === 'bank' || source === 'personal' ? source : studySource;
    quizCategory = quizLevel = 'all'; quizLinkedIds = null; quizLinkedTitle = '';
    quizNotes = []; quizRevealed = new Set(); quizStarted = false;
    renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' });
};
function drawStudyQuiz() {
    quizNotes = StudyCore.sample(getQuizPool(), quizCount);
    quizRevealed = new Set(); quizStarted = true;
    renderAll();
}
function renderStudyQuiz() {
    const pool = getQuizPool();
    const assessed = quizNotes.filter(n => mastery[n.id]?.session === studyQuizSession).length;
    return `${studyHeader()}<section class="study-quiz-head"><h2>先回忆，再看答案。</h2></section>
    <div class="study-quiz-sources" aria-label="抽查来源">${[['bank', '全题库抽查', '覆盖 13 个主题，发现知识盲区。'], ['personal', '我的笔记抽查', '只练自己记录与主动保存的内容。']].map(([source, title, desc]) => `<button data-study="quiz-source" data-source="${source}" class="${quizSource === source ? 'active' : ''}" aria-pressed="${quizSource === source}"><span>${source === 'bank' ? '01' : '02'}</span><strong>${title}<small>${getStudyPool(source).length} 道</small></strong><p>${desc}</p></button>`).join('')}</div>
    <div class="study-filters quiz-config"><label>知识分类<select data-quiz-filter="category">${studyOptions([['all', '全部分类'], ...studyCategories(quizSource).map(c => [c, c])], quizCategory)}</select></label><label>练习范围<select data-quiz-filter="level">${studyOptions([['all', '全部内容'], ['weak', '只练不会 / 模糊'], ['new', '只练未复习']], quizLevel)}</select></label><label class="quiz-count-field">每组题数<select data-quiz-filter="count">${studyOptions([['3', '3 道 · 热身'], ['5', '5 道 · 日常'], ['10', '10 道 · 挑战']], String(quizCount))}</select></label><button class="study-primary" data-study="draw" ${pool.length ? '' : 'disabled'}>${quizStarted ? '换一组题' : '开始抽查'} →</button></div>
    ${quizLinkedIds ? `<div class="study-linked">面经关联：${studyEsc(quizLinkedTitle)}<button data-study="quiz-unlink">取消关联 ×</button></div>` : ''}
    <div class="study-list-heading"><p>当前可抽 ${pool.length} 道${pool.length < quizCount && pool.length ? ' · 数量不足时抽取全部，不重复' : ''}</p>${quizStarted ? `<span>${quizSource === 'bank' ? '全题库' : '我的笔记'} · 本组 ${quizNotes.length} 道 · 已自评 ${assessed} 道</span>` : ''}</div>
    ${!pool.length && !quizNotes.length ? `<div class="study-empty"><h3>当前范围没有可抽查的内容</h3><p>${quizLevel === 'weak' ? '答题后标记“不会”或“模糊”，即可在这里专门练习。' : '切换分类或先添加自己的笔记，再来开始抽查。'}</p><button class="study-secondary" data-study="quiz-reset">恢复全部范围</button><button class="study-secondary" data-study="source" data-source="personal">去我的笔记</button></div>` : !quizStarted ? '<div class="study-quiz-guide"><span>回忆作答</span><span>查看答案</span><span>标记掌握度</span></div>' : ''}
    ${quizNotes.map((n, i) => `<article class="study-quiz-card"><div class="study-card-meta"><span class="study-number">${String(i + 1).padStart(2, '0')}</span><span>${studyEsc(n.category)}</span><span>${studyEsc(n.number || '我的笔记')}</span></div><h3>${studyEsc(n.question)}</h3><button class="study-secondary" data-study="reveal" data-index="${i}" aria-expanded="${quizRevealed.has(i)}">${quizRevealed.has(i) ? '收起参考答案' : '我想好了，查看答案'}</button>${quizRevealed.has(i) ? `<div class="study-answer">${studyMarkdown(n.answer)}</div>${studyRatings(n, i)}` : '<p class="study-recall-hint">先说结论，再解释原理，最后举一个例子。</p>'}</article>`).join('')}`;
}
let studyQuizSession = Date.now();
const legacyRenderNotes = renderNotes;
renderNotes = function(filtered) {
    const special = showResumePrep || showRecruitment || showResources;
    document.body.classList.toggle('study-mode', !special);
    document.body.classList.toggle('interview-mode', showInterviewExp);
    if (special) { legacyRenderNotes(filtered); return; }
    document.body.classList.remove('resume-mode', 'recruitment-mode');
    const title = showInterviewExp ? '公司面经' : showMarkedOnly ? '重点复习' : showQuiz ? '随机抽查' : showTrash ? '回收站' : studySource === 'bank' ? 'Java 后端题库' : '我的笔记';
    document.getElementById('mainTitle').textContent = title;
    document.getElementById('topbarTitle').textContent = title;
    document.getElementById('mainSubtitle').textContent = showTrash ? '题库、笔记与公司问答的已删除内容。' : showMarkedOnly ? '集中复习已标记的重要知识点。' : showInterviewExp ? '按公司查题，逐题练习，也记录自己的面试经历。' : showQuiz ? '两种来源，按自己的节奏练习。' : studySource === 'personal' ? '自己的理解与答案，保存后自动收录到题库。' : '系统学习与自己的积累，都在一个题库里。';
    document.querySelector('.main-header .stats').style.display = 'none';
    document.getElementById('notesContainer').innerHTML = showInterviewExp ? renderInterviewWorkspace() : showQuiz ? renderStudyQuiz() : renderStudyLibrary(filtered);
};
const legacyRenderTOC = renderTOC;
renderTOC = function(filtered) {
    if (showInterviewExp || showQuiz || showResources || showTrash) {
        document.getElementById('tocList').innerHTML = '';
        document.getElementById('noResult').style.display = 'none'; return;
    }
    if (!showResumePrep && !showRecruitment) {
        const pages = StudyCore.pagination(filtered.length, studyPageSize, studyPage).pages;
        studyPage = Math.min(studyPage, pages);
        legacyRenderTOC(filtered.slice((studyPage - 1) * studyPageSize, studyPage * studyPageSize));
    } else legacyRenderTOC(filtered);
};
const legacyStudyBadges = updateBadges;
refreshNoteDisplay = function() { renderAll(); };
updateBadges = function() {
    legacyStudyBadges(); updateMobileNavActive();
    document.querySelectorAll('[data-study-nav]').forEach(btn => {
        const active = !showQuiz && !showTrash && !showMarkedOnly && !showInterviewExp && !showResumePrep && !showRecruitment && !showResources && btn.dataset.studyNav === studySource;
        btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active);
    });
};
function copyStudyNote(id) {
    const source = getAllStudyRecords().find(n => n.id === id); if (!source) return;
    if (userNotes.some(n => n.id === id)) { toast('这条内容已在我的笔记中'); return; }
    const result = StudyCore.copyNote(source, userNotes, () => 'user-' + crypto.randomUUID());
    if (result.created) userNotes.unshift(result.note);
    deletedIds.delete(result.note.id); purgedIds.delete(result.note.id);
    saveUserNotes(); saveDeleted(); savePurged(); renderAll();
    toast(result.created ? '已保存到我的笔记，可以编辑自己的理解' : '这道题已在我的笔记中');
}
const legacyOpenAddModal = openAddModal;
openAddModal = function(id, source) {
    studyEditorReturnInterview = false;
    studyEditorSource = source || (typeof id === 'string' ? 'personal' : studySource === 'bank' && !showResumePrep && !showRecruitment && !showInterviewExp ? 'bank' : 'personal');
    studyModalFocus = document.activeElement;
    studyEditingId = typeof id === 'string' ? id : null;
    legacyOpenAddModal();
    const note = studyEditingId && (studyEditorSource === 'bank' ? customBankQuestions : getPersonalNotes(true)).find(n => n.id === studyEditingId);
    const modal = document.getElementById('addModal');
    modal.querySelector('h3').textContent = studyEditorSource === 'bank' ? note ? '编辑题目' : '添加题目到题库' : note ? '编辑我的笔记' : '写一条笔记';
    modal.querySelector('.modal').setAttribute('aria-label', studyEditorSource === 'bank' ? '题库编辑器' : '我的笔记编辑器');
    modal.querySelector('.modal-sub').textContent = studyEditorSource === 'bank' ? '保存后可在题库中查找、抽查，也可记入个人笔记。' : '记录自己的理解与答案，保存后自动收录到题库。';
    document.getElementById('bankPriorityField').hidden = studyEditorSource !== 'bank';
    document.getElementById('bankPriority').value = note?.priority || 'P1';
    document.getElementById('bankCompany').value = note?.company || '';
    document.getElementById('bankCompany').required = false;
    modal.querySelector('.btn-primary').textContent = note ? '保存修改' : studyEditorSource === 'bank' ? '保存到题库' : '保存到我的笔记';
    document.getElementById('newCategory').innerHTML = studyOptions([['', '自动识别分类'], ...[...new Set([...getStudyPool('bank'), ...getPersonalNotes()].map(n => n.category))].map(c => [c, c])], note?.category || '');
    document.getElementById('newCategory').removeAttribute('data-auto');
    if (note) { document.getElementById('newQuestion').value = note.question; document.getElementById('newAnswer').value = note.answer; }
    document.getElementById('newQuestion').focus();
};
const legacyCloseAddModal = closeAddModal;
closeAddModal = function() { legacyCloseAddModal(); studyEditingId = null; studyModalFocus?.focus(); };
addNote = function() {
    const question = document.getElementById('newQuestion').value.trim();
    const answer = document.getElementById('newAnswer').value.trim();
    if (!question || !answer) { toast('请填写题目和自己的答案'); return; }
    const category = document.getElementById('newCategory').value || autoDetectCategory(question, answer) || 'Java基础';
    if (studyEditorSource === 'bank') {
        if (studyEditorReturnInterview && !document.getElementById('bankCompany').value.trim()) { toast('请填写公司名称'); document.getElementById('bankCompany').focus(); return; }
        const note = saveCustomBankQuestion({ question, answer, category, priority: document.getElementById('bankPriority').value, company: document.getElementById('bankCompany').value.trim() }, studyEditingId);
        const returnToInterview = studyEditorReturnInterview;
        closeAddModal();
        if (returnToInterview) { resetStudyModes(); showInterviewExp=true; interviewCompany=note.company; interviewTab='sources'; interviewKeyword=''; studyPage=1; } else openStudy('bank');
        collapsedNotes.delete(note.id); renderAll(); toast('题目已保存'); return;
    }
    const existing = studyEditingId && getPersonalNotes(true).find(n => n.id === studyEditingId);
    const note = { ...(existing || {}), id: existing?.id || 'user-' + crypto.randomUUID(), question, answer, category, keywords: existing?.keywords || [], updatedAt: new Date().toISOString() };
    const index = userNotes.findIndex(n => n.id === note.id);
    if (index >= 0) userNotes[index] = note; else userNotes.unshift(note);
    saveUserNotes(); closeAddModal(); openStudy('personal');
    collapsedNotes.delete(note.id); renderAll(); toast(existing ? '笔记已更新' : '已保存笔记，并自动收录到题库');
};
function initStudyWorkspace() {
    getStudyPool('bank').forEach(n => collapsedNotes.add(n.id));
    document.querySelectorAll('[data-study-nav]').forEach(b => b.addEventListener('click', () => openStudy(b.dataset.studyNav)));
    document.getElementById('notesContainer').addEventListener('click', e => {
        const btn = e.target.closest('[data-study]'); if (!btn) return;
        const { study: action, id } = btn.dataset;
        if (action === 'filters') { studyFiltersOpen = !studyFiltersOpen; renderAll(); }
        else if (action === 'source') openStudy(btn.dataset.source);
        else if (action === 'quiz') startQuiz(btn.dataset.source);
        else if (action === 'weak') { startQuiz(studySource); quizLevel = 'weak'; renderAll(); }
        else if (action === 'clear') { clearStudyFilters(); buildCategoryBtns(); renderAll(); }
        else if (action === 'add') openAddModal(null, 'personal');
        else if (action === 'add-bank') openAddModal(null, 'bank');
        else if (action === 'edit-bank') openAddModal(id, 'bank');
        else if (action === 'edit') openAddModal(id);
        else if (action === 'copy') copyStudyNote(id);
        else if (action === 'mark') toggleMark(id);
        else if (action === 'expand') {
            const expanded = collapsedNotes.has(id);
            expanded ? collapsedNotes.delete(id) : collapsedNotes.add(id);
            btn.setAttribute('aria-expanded', expanded); btn.querySelector('.study-chevron').textContent = expanded ? '−' : '+';
            document.getElementById('answer-' + id).classList.toggle('collapsed', !expanded);
            const toggle = document.querySelector('.study-list-heading .study-list-tools');
            if (toggle) toggle.outerHTML = studyAnswerToggle(showInterviewExp ? getInterviewFilteredQuestions() : getFilteredNotes());
        }
        else if (action === 'collapse' || action === 'expand-all') { (showInterviewExp ? getInterviewFilteredQuestions() : getFilteredNotes()).forEach(n => action === 'collapse' ? collapsedNotes.add(n.id) : collapsedNotes.delete(n.id)); renderAll(); }
        else if (action === 'page') goStudyPage(btn.dataset.page);
        else if (action === 'quiz-source') { quizSource = btn.dataset.source; quizCategory = quizLevel = 'all'; quizLinkedIds = null; quizNotes = []; quizStarted = false; renderAll(); }
        else if (action === 'draw') { studyQuizSession = Date.now(); drawStudyQuiz(); }
        else if (action === 'quiz-reset') { quizCategory = quizLevel = 'all'; quizNotes = []; quizStarted = false; quizLinkedIds = null; renderAll(); }
        else if (action === 'quiz-unlink') { quizLinkedIds = null; quizNotes = []; quizStarted = false; renderAll(); }
        else if (action === 'reveal') { const i = Number(btn.dataset.index); quizRevealed.has(i) ? quizRevealed.delete(i) : quizRevealed.add(i); renderAll(); }
        else if (action === 'rate') {
            mastery[id] = { level: btn.dataset.level, reviewedAt: new Date().toISOString(), session: studyQuizSession };
            if (btn.dataset.level === 'hard') markedIds.add(id);
            if (btn.dataset.level === 'known') markedIds.delete(id);
            saveMastery(); saveMarked(); renderAll(); toast('已记录：' + studyLevelNames[btn.dataset.level]);
        }
    });
    document.getElementById('notesContainer').addEventListener('change', e => {
        if (e.target.hasAttribute('data-page-size')) {
            studyPageSize = StudyCore.pagination(0, e.target.value).size;
            localStorage.setItem('study-page-size', String(studyPageSize));
            goStudyPage(1); return;
        }
        if (e.target.dataset.studyFilter) {
            const key = e.target.dataset.studyFilter;
            if (key === 'category') activeCategory = e.target.value;
            if (key === 'priority') studyPriority = e.target.value;
            if (key === 'level') studyLevel = e.target.value;
            studyPage = 1; buildCategoryBtns(); renderAll();
        }
        if (e.target.dataset.quizFilter) {
            const key = e.target.dataset.quizFilter;
            if (key === 'category') quizCategory = e.target.value;
            if (key === 'level') quizLevel = e.target.value;
            if (key === 'count') quizCount = Number(e.target.value);
            quizNotes = []; quizStarted = false; renderAll();
        }
    });
    document.getElementById('notesContainer').addEventListener('submit', e => {
        if (!e.target.matches('[data-page-jump]')) return;
        e.preventDefault(); goStudyPage(e.target.elements.page.value);
    });
    ['searchInput', 'mobileSearchInput'].forEach(id => document.getElementById(id).addEventListener('input', () => { studyPage = 1; renderAll(); }));
    document.getElementById('categoryBtns').addEventListener('click', () => { studyPage = 1; renderAll(); });
    const modal = document.querySelector('#addModal .modal');
    modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', '我的笔记编辑器');
    modal.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        const nodes = [...modal.querySelectorAll('button,input,textarea,select,summary')].filter(n => !n.closest('[hidden]') && n.getClientRects().length);
        const first = nodes[0], last = nodes.at(-1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    initInterviewWorkspace();
}
