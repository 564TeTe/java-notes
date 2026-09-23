/* Study workspace. Loaded after the legacy app declarations and before init(). */
const BANK = [...window.QUESTION_BANK_DATA.questions, ...(window.QUESTION_BANK_DATA.archivedQuestions || [])];
function applyStudyCuration() {
    for (const release of window.QUESTION_BANK_CURATION?.releases || []) {
        // v45 discards new snapshot fields but preserves this older set. Keep a
        // marker and restored IDs so old devices neither repeat nor undo release.
        const marker = CURATION_RELEASE_PREFIX + release.id;
        if (!appliedCurationReleases.has(release.id) && !restoredCuratedIds.has(marker)) {
            for (const id of release.questionIds) {
                deletedIds.delete(id);
                restoredCuratedIds.add(id);
            }
        }
        appliedCurationReleases.add(release.id);
        restoredCuratedIds.add(marker);
    }
    // A new archive request supersedes earlier bulk restores only once. Later
    // manual restores remain effective across reloads and snapshot round trips.
    for (const archive of window.QUESTION_BANK_CURATION?.archives || []) {
        const marker = CURATION_RELEASE_PREFIX + archive.id;
        if (!appliedCurationReleases.has(archive.id) && !restoredCuratedIds.has(marker)) {
            for (const id of archive.questionIds) {
                restoredCuratedIds.delete(id);
                if (!purgedIds.has(id)) deletedIds.add(id);
            }
        }
        appliedCurationReleases.add(archive.id);
        restoredCuratedIds.add(marker);
    }
    const reasons = window.QUESTION_BANK_CURATION?.reasons || {};
    for (const note of BANK) {
        if (Object.hasOwn(reasons, note.id) && !restoredCuratedIds.has(note.id) && !purgedIds.has(note.id)) deletedIds.add(note.id);
    }
    // Do not change the sync timestamp during startup: a newer cloud snapshot
    // must still load before this same reversible selection is applied to it.
    localStorage.setItem('deleted-ids', JSON.stringify([...deletedIds]));
    localStorage.setItem('restored-curated-ids', JSON.stringify([...restoredCuratedIds]));
    localStorage.setItem('applied-curation-releases', JSON.stringify([...appliedCurationReleases]));
}
let customBankQuestions = [];
try { customBankQuestions = StudyCore.restoreBankQuestions(JSON.parse(localStorage.getItem('custom-bank-questions') || '[]')); } catch (_) {}
function getCustomBankQuestions() { return customBankQuestions; }
function applyCustomBankQuestionsSnapshot(value) {
    customBankQuestions = StudyCore.restoreBankQuestions(value, customBankQuestions);
    localStorage.setItem('custom-bank-questions', JSON.stringify(customBankQuestions));
}
function saveCustomBankQuestion(values, id) {
    const { question, answer } = StudyCore.normalizeContent(values.question, values.answer);
    const note = { id: id || 'custom-bank-' + crypto.randomUUID(), question, answer, titleMode: question ? 'manual' : 'none', category: values.category || 'Java 基础', priority: values.priority || 'P1', company: values.company || '', kind: '自己添加', keywords: [], updatedAt: new Date().toISOString() };
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
    // Imported questions are the canonical home for built-in questions.
    // The personal area contains only user-authored notes and saved copies.
    const merged = [...userNotes];
    return includeDeleted ? merged : StudyCore.pool('personal', BANK, merged.filter(n => !n.bankOnly), deletedIds, purgedIds);
}
function getAllStudyRecords() {
    return [...new Map([...BANK, ...customBankQuestions, ...userNotes].map(n => [n.id, n])).values()];
}
function getStudyPool(source = studySource) {
    if (source !== 'bank') return getPersonalNotes();
    // Authored notes share identity with the bank. Copies removed from the notebook
    // retain their personal wording as separate bank entries until saved again.
    const bank = [...customBankQuestions, ...BANK];
    const authored = userNotes.filter(n => !n.sourceId || n.bankOnly);
    return StudyCore.pool('personal', [], [...authored, ...bank], deletedIds, purgedIds);
}
getActiveNotes = function() { return getStudyPool(); };
getDeletedNotes = function() { return getAllStudyRecords().filter(n => deletedIds.has(n.id) && !purgedIds.has(n.id)); };
deleteNote = function(id) {
    if (!getAllStudyRecords().some(n => n.id === id) || deletedIds.has(id) || purgedIds.has(id)) return;
    const note = userNotes.find(n => n.id === id);
    const fromPersonal = studySource === 'personal' && !showInterviewExp;
    if (fromPersonal && (!note || note.bankOnly)) return;
    if (note) {
        // Keep identity, personal wording and learning history across both moves.
        note.bankOnly = true;
        note.updatedAt = new Date().toISOString();
        saveUserNotes();
    }
    if (fromPersonal) {
        renderAll(); toast('已移到题库，题目和学习记录已保留'); return;
    }
    restoredCuratedIds.delete(id);
    deletedIds.add(id); saveDeleted(); renderAll(); toast('已移入回收站，可恢复');
};
restoreNote = function(id) {
    if (Object.hasOwn(window.QUESTION_BANK_CURATION?.reasons || {}, id)) restoredCuratedIds.add(id);
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
    showGlossary = showQuiz = showTrash = showMarkedOnly = showResources = showInterviewExp = showResumePrep = showRecruitment = false;
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
function studyInline(text) {
    // Process tokens before escaping so code stays literal and links cannot add HTML.
    const pattern = /`([^`\n]+)`|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*/g;
    let html = '', start = 0;
    for (const match of text.matchAll(pattern)) {
        html += studyEsc(text.slice(start, match.index));
        if (match[1] !== undefined) html += `<code>${studyEsc(match[1])}</code>`;
        else if (match[2] !== undefined) html += `<a href="${studyEsc(match[3])}" target="_blank" rel="noopener noreferrer">${studyEsc(match[2])} ↗</a>`;
        else html += `<strong>${studyInline(match[4])}</strong>`;
        start = match.index + match[0].length;
    }
    return html + studyEsc(text.slice(start));
}
function studyTableCells(line) {
    const cells = []; let value = '', inCode = false;
    for (const char of line.trim().replace(/^\||\|$/g, '')) {
        if (char === '`') inCode = !inCode;
        if (char === '|' && value.endsWith('\\')) value = value.slice(0, -1) + '|';
        else if (char === '|' && !inCode) { cells.push(value.trim()); value = ''; }
        else value += char;
    }
    cells.push(value.trim());
    return cells;
}
function studyMarkdown(text) {
    const blocks = String(text || '').replace(/\r\n/g, '\n').split(/```[^\n]*\n([\s\S]*?)```/g);
    return blocks.map((block, index) => {
        if (index % 2) return `<pre><code>${studyEsc(block)}</code></pre>`;
        const lines = block.split('\n'), output = [];
        const listItem = line => line.match(/^\s*(-|\*|\d+[.)])\s+(.+)$/);
        const tableStart = i => /^\s*\|/.test(lines[i] || '') && /^\s*\|/.test(lines[i + 1] || '') &&
            studyTableCells(lines[i + 1]).every(cell => /^:?-{3,}:?$/.test(cell)) &&
            studyTableCells(lines[i]).length === studyTableCells(lines[i + 1]).length;
        for (let i = 0; i < lines.length;) {
            if (!lines[i].trim()) { i++; continue; }
            if (tableStart(i)) {
                const headers = studyTableCells(lines[i]), rows = [];
                for (i += 2; i < lines.length && /^\s*\|/.test(lines[i]); i++) {
                    const cells = studyTableCells(lines[i]);
                    rows.push(`<tr>${headers.map((_, j) => `<td>${studyInline(cells[j] || '')}</td>`).join('')}</tr>`);
                }
                output.push(`<div class="study-table-scroll" tabindex="0" role="region" aria-label="答案对比表，可横向滚动"><table><thead><tr>${headers.map(cell => `<th scope="col">${studyInline(cell)}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`);
                continue;
            }
            const item = listItem(lines[i]);
            if (item) {
                const ordered = /^\d/.test(item[1]), tag = ordered ? 'ol' : 'ul', items = [];
                const start = ordered && parseInt(item[1], 10) !== 1 ? ` start="${parseInt(item[1], 10)}"` : '';
                while (i < lines.length) {
                    const next = listItem(lines[i]);
                    if (!next || /^\d/.test(next[1]) !== ordered) break;
                    items.push(`<li>${studyInline(next[2])}</li>`); i++;
                }
                output.push(`<${tag}${start}>${items.join('')}</${tag}>`); continue;
            }
            const paragraph = [studyInline(lines[i++])];
            while (i < lines.length && lines[i].trim() && !tableStart(i) && !listItem(lines[i])) paragraph.push(studyInline(lines[i++]));
            output.push(`<p>${paragraph.join('<br>')}</p>`);
        }
        return output.join('');
    }).join('');
}
function studyRatings(note, index) {
    return `<div class="study-ratings" aria-label="掌握程度">${['hard', 'fuzzy', 'known'].map(level =>
        `<button data-study="rate" data-id="${studyEsc(note.id)}" data-level="${level}"${index == null ? '' : ` data-index="${index}"`} class="${mastery[note.id]?.level === level ? 'selected ' : ''}${level}" aria-pressed="${mastery[note.id]?.level === level}">${studyLevelNames[level]}</button>`).join('')}</div>`;
}
function studyCardIcon(name) {
    const paths = {
        chevron: '<path d="m6 9 6 6 6-6"/>',
        more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
        mark: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
        note: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'
    };
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}
function studyCard(n) {
    const isBank = studySource === 'bank' && !showTrash;
    const copied = getPersonalNotes().some(u => u.sourceId === n.id || u.id === n.id);
    const level = mastery[n.id]?.level || 'new';
    const title = StudyCore.questionTitle(n);
    const expanded = !title || !collapsedNotes.has(n.id);
    return `<article class="study-card note${markedIds.has(n.id) ? ' marked' : ''}" id="note-${studyEsc(n.id)}">
        ${title ? `<h3 class="study-card-heading"><button class="study-question" data-study="expand" data-id="${studyEsc(n.id)}" aria-expanded="${expanded}" aria-controls="answer-${studyEsc(n.id)}"><span class="study-question-title">${studyEsc(title)}</span><span class="study-status ${level}">${studyLevelNames[level]}</span><span class="study-chevron">${studyCardIcon('chevron')}</span></button></h3>` : ''}
        <div class="study-card-footer"><div class="study-card-meta"><span class="study-number">${studyEsc(n.number || n.sourceNumber || (n.id.startsWith('custom-bank-') ? '自建题目' : '个人笔记'))}</span><span>${studyEsc(n.category)}</span>${n.priority ? `<span class="study-priority" title="${studyEsc({ P0: 'P0 · 先掌握', P1: 'P1 · 第二轮', P2: 'P2 · 按岗位补充' }[n.priority] || n.priority)}">${studyEsc(n.priority)}</span>` : ''}</div><div class="study-card-actions">
            ${showTrash ? `<button data-action="restore" data-id="${studyEsc(n.id)}">恢复</button><button data-action="perm-delete" data-id="${studyEsc(n.id)}">永久删除</button>` : `
            <button data-study="mark" data-id="${studyEsc(n.id)}" aria-pressed="${markedIds.has(n.id)}" aria-label="${markedIds.has(n.id) ? '取消重点' : '标记重点'}：${studyEsc(title || '笔记')}">${studyCardIcon('mark')}${markedIds.has(n.id) ? '已标重点' : '重点'}</button>
            ${isBank ? `<button data-study="copy" data-id="${studyEsc(n.id)}" data-copied="${copied}" title="${copied ? '已存入笔记' : '记入笔记'}">${studyCardIcon('note')}${copied ? '已存笔记' : '记入笔记'}</button>` : `<button data-study="edit" data-id="${studyEsc(n.id)}">${studyCardIcon('note')}编辑笔记</button>`}
            <details class="study-card-more"><summary aria-label="更多操作：${studyEsc(title || '笔记')}">${studyCardIcon('more')}<span>更多</span></summary><div class="study-card-menu">
            ${isBank && n.id.startsWith('custom-bank-') ? `<button data-study="edit-bank" data-id="${studyEsc(n.id)}">编辑题目</button>` : isBank && userNotes.some(u => u.id === n.id) ? `<button data-study="edit" data-id="${studyEsc(n.id)}">编辑笔记</button>` : ''}
            <button data-action="delete" data-id="${studyEsc(n.id)}"${isBank ? '' : ` title="从我的笔记移到题库" aria-label="删除笔记并移到题库：${studyEsc(title || '笔记')}"`}>${isBank ? '删除题目' : '删除笔记'}</button></div></details>`}
        </div></div>
        <div class="study-answer answer${expanded ? '' : ' collapsed'}" id="answer-${studyEsc(n.id)}"><div class="study-card-source">来源：${showTrash ? (n.id.startsWith('bank-') ? '内置题库' : n.id.startsWith('custom-bank-') ? (n.company ? '公司面经 · ' + studyEsc(n.company) : '自建题库') : '我的笔记') : isBank ? studyEsc(n.kind || '我的笔记 · 自动收录') : n.sourceId ? '来自题库' : n.id.startsWith('user-') ? '我的记录' : '原有笔记'}</div>${showTrash && window.QUESTION_BANK_CURATION?.reasons[n.id] ? `<p class="study-linked">Java 后端复习整理：${studyEsc(window.QUESTION_BANK_CURATION.reasons[n.id])}</p>` : ''}${studyMarkdown(n.answer)}${studyRatings(n)}</div>
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
    if (!showTrash && !showMarkedOnly) html += `<section class="study-summary" aria-label="学习进度"><div class="study-summary-count"><span>共 <strong>${pool.length}</strong> ${bank ? '道题目' : '条笔记'}</span><span>已掌握 <b>${known}</b></span><span>待巩固 <b>${weak}</b></span></div><div class="study-summary-actions">${bank ? '<button class="study-text" data-study="add-bank">＋ 添加题目</button><button class="study-secondary" data-study="weak">练习薄弱题</button>' : '<button class="study-secondary" data-study="add">＋ 写笔记</button>'}<button class="study-primary" data-study="quiz" data-source="${studySource}" ${pool.length ? '' : 'disabled'}>${bank ? '开始抽查' : '复习笔记'} →</button></div></section>`;
    if (studyLinkedIds && !showTrash) html += `<div class="study-linked">面经关联：${studyEsc(studyLinkedTitle)}<button data-study="clear">查看全部题库 ×</button></div>`;
    html += `<div class="study-list-bar"><div class="study-list-heading"><h2>${showTrash ? '已删除' : showMarkedOnly ? '已标记' : activeCategory !== 'all' ? studyEsc(activeCategory) : bank ? '全部题目' : '全部笔记'} <span>${filtered.length}</span></h2>${!showTrash ? studyFilterToggle() : ''}${studyAnswerToggle(filtered)}</div>${filtered.length ? renderStudyPagination(filtered.length, 'top') : ''}${!showTrash ? studyFilters() : ''}</div>`;
    if (showTrash && filtered.length) html += '<button class="study-secondary" onclick="emptyTrash()">清空回收站</button>';
    if (!filtered.length) html += `<div class="study-empty"><span>⌕</span><h3>${showTrash ? (getDeletedNotes().length ? '没有匹配的已删除内容' : '回收站是空的') : !bank && !pool.length ? '暂无笔记' : '暂时没有符合条件的内容'}</h3><p>${showTrash ? '从题库删除的题目会显示在这里，可恢复或永久清除。' : bank ? '换一个关键词，或清空筛选继续学习。' : '写下第一条笔记，或从题库保存你想复习的问题。'}</p><button class="study-secondary" data-study="clear">清空筛选</button>${!bank && !showTrash ? '<button class="study-primary" data-study="add">写笔记</button>' : ''}</div>`;
    else html += pageItems.map(studyCard).join('');
    if (filtered.length) html += renderStudyPagination(filtered.length, 'bottom');
    return html;
}
function goStudyPage(value) {
    studyPage = StudyCore.pagination(getFilteredNotes().length, studyPageSize, value).page;
    renderAll(); document.querySelector('.study-list-heading')?.scrollIntoView({ block: 'start' });
}
function studyAnswerToggle(questions) {
    questions = questions.filter(n => StudyCore.questionTitle(n));
    if (!questions.length) return '';
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
    return `${studyHeader()}<div class="study-quiz-sources" role="group" aria-label="抽查来源">${[['bank', '题库'], ['personal', '我的笔记']].map(([source, title]) => `<button data-study="quiz-source" data-source="${source}" class="${quizSource === source ? 'active' : ''}" aria-pressed="${quizSource === source}"><strong>${title}<small>${getStudyPool(source).length} 道</small></strong></button>`).join('')}</div>
    <div class="study-filters quiz-config"><label>知识分类<select data-quiz-filter="category">${studyOptions([['all', '全部分类'], ...studyCategories(quizSource).map(c => [c, c])], quizCategory)}</select></label><label>练习范围<select data-quiz-filter="level">${studyOptions([['all', '全部内容'], ['weak', '只练不会 / 模糊'], ['new', '只练未复习']], quizLevel)}</select></label><label class="quiz-count-field">每组题数<select data-quiz-filter="count">${studyOptions([['3', '3 道'], ['5', '5 道'], ['10', '10 道']], String(quizCount))}</select></label><button class="study-primary" data-study="draw" ${pool.length ? '' : 'disabled'}>${quizStarted ? '换一组题' : '开始抽查'} →</button></div>
    ${quizLinkedIds ? `<div class="study-linked">面经关联：${studyEsc(quizLinkedTitle)}<button data-study="quiz-unlink">取消关联 ×</button></div>` : ''}
    <div class="study-list-heading"><p>当前可抽 ${pool.length} 道${pool.length < quizCount && pool.length ? ' · 数量不足时抽取全部，不重复' : ''}</p>${quizStarted ? `<span>${quizSource === 'bank' ? '全题库' : '我的笔记'} · 本组 ${quizNotes.length} 道 · 已自评 ${assessed} 道</span>` : ''}</div>
    ${!pool.length && !quizNotes.length ? `<div class="study-empty"><h3>当前范围没有可抽查的内容</h3><p>${quizLevel === 'weak' ? '标记为“不会”或“模糊”的题会出现在这里。' : '切换分类，或先添加笔记。'}</p><button class="study-secondary" data-study="quiz-reset">恢复全部范围</button><button class="study-secondary" data-study="source" data-source="personal">去我的笔记</button></div>` : ''}
    ${quizNotes.map((n, i) => { const title = StudyCore.questionTitle(n), revealed = !title || quizRevealed.has(i); return `<article class="study-quiz-card"><div class="study-card-meta"><span class="study-number">${String(i + 1).padStart(2, '0')}</span><span>${studyEsc(n.category)}</span><span>${studyEsc(n.number || '我的笔记')}</span></div>${title ? `<h3>${studyEsc(title)}</h3><button class="study-secondary" data-study="reveal" data-index="${i}" aria-expanded="${revealed}">${revealed ? '收起答案' : '查看答案'}</button>` : ''}${revealed ? `<div class="study-answer">${studyMarkdown(n.answer)}</div>${studyRatings(n, i)}` : ''}</article>`; }).join('')}`;
}
let studyQuizSession = Date.now();
const legacyRenderNotes = renderNotes;
renderNotes = function(filtered) {
    const special = showGlossary || showResumePrep || showRecruitment || showResources;
    document.body.classList.toggle('study-mode', !special);
    document.body.classList.toggle('interview-mode', showInterviewExp);
    if (showGlossary) {
        document.body.classList.remove('resume-mode', 'recruitment-mode', 'interview-mode');
        document.getElementById('mainTitle').textContent = '术语词典';
        document.getElementById('mainSubtitle').textContent = '';
        document.querySelector('.main-header .stats').style.display = 'none';
        document.getElementById('notesContainer').innerHTML = renderGlossary();
        return;
    }
    if (special) { legacyRenderNotes(filtered); return; }
    document.body.classList.remove('resume-mode', 'recruitment-mode');
    const title = showInterviewExp ? '公司面经' : showMarkedOnly ? '重点复习' : showQuiz ? '随机抽查' : showTrash ? '回收站' : studySource === 'bank' ? 'Java 后端题库' : '我的笔记';
    document.getElementById('mainTitle').textContent = title;
    document.getElementById('topbarTitle').textContent = title;
    document.getElementById('mainSubtitle').textContent = '';
    document.querySelector('.main-header .stats').style.display = 'none';
    document.getElementById('notesContainer').innerHTML = showInterviewExp ? renderInterviewWorkspace() : showQuiz ? renderStudyQuiz() : renderStudyLibrary(filtered);
};
const legacyRenderTOC = renderTOC;
renderTOC = function(filtered) {
    if (showGlossary || showInterviewExp || showQuiz || showResources || showTrash) {
        document.getElementById('tocList').innerHTML = '';
        document.getElementById('noResult').style.display = 'none'; return;
    }
    if (!showResumePrep && !showRecruitment) {
        const pages = StudyCore.pagination(filtered.length, studyPageSize, studyPage).pages;
        studyPage = Math.min(studyPage, pages);
        legacyRenderTOC(filtered.slice((studyPage - 1) * studyPageSize, studyPage * studyPageSize).map(n => ({...n, question: StudyCore.questionTitle(n) || n.category + ' · 笔记'})));
    } else legacyRenderTOC(filtered);
};
const legacyStudyBadges = updateBadges;
refreshNoteDisplay = function() { renderAll(); };
updateBadges = function() {
    legacyStudyBadges(); updateMobileNavActive();
    document.querySelectorAll('[data-study-nav]').forEach(btn => {
        const active = !showGlossary && !showQuiz && !showTrash && !showMarkedOnly && !showInterviewExp && !showResumePrep && !showRecruitment && !showResources && btn.dataset.studyNav === studySource;
        btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active);
    });
};
function copyStudyNote(id) {
    const source = getAllStudyRecords().find(n => n.id === id); if (!source) return;
    const existing = userNotes.find(n => n.id === id);
    if (existing && !existing.bankOnly && !deletedIds.has(id) && !purgedIds.has(id)) { toast('这条内容已在我的笔记中'); return; }
    const result = existing ? { note: existing, created: false } : StudyCore.copyNote(source, userNotes, () => 'user-' + crypto.randomUUID());
    const restored = result.note.bankOnly || deletedIds.has(result.note.id) || purgedIds.has(result.note.id);
    delete result.note.bankOnly;
    if (result.created) userNotes.unshift(result.note);
    deletedIds.delete(result.note.id); purgedIds.delete(result.note.id);
    saveUserNotes(); saveDeleted(); savePurged(); renderAll();
    toast(result.created || restored ? '已保存到我的笔记，可以编辑自己的理解' : '这道题已在我的笔记中');
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
    modal.querySelector('.modal-sub').textContent = '可以只写一段内容；题目留空时，直接显示正文。';
    document.getElementById('bankPriorityField').hidden = studyEditorSource !== 'bank';
    document.getElementById('bankPriority').value = note?.priority || 'P1';
    document.getElementById('bankCompany').value = note?.company || '';
    document.getElementById('bankCompany').required = false;
    modal.querySelector('.btn-primary').textContent = note ? '保存修改' : studyEditorSource === 'bank' ? '保存到题库' : '保存到我的笔记';
    document.getElementById('newCategory').innerHTML = studyOptions([['', '自动识别分类'], ...[...new Set([...getStudyPool('bank'), ...getPersonalNotes()].map(n => n.category))].map(c => [c, c])], note?.category || '');
    document.getElementById('newCategory').removeAttribute('data-auto');
    if (note) { document.getElementById('newQuestion').value = StudyCore.questionTitle(note); document.getElementById('newAnswer').value = note.answer; }
    document.getElementById('newQuestion').focus();
};
const legacyCloseAddModal = closeAddModal;
closeAddModal = function() { legacyCloseAddModal(); studyEditingId = null; studyModalFocus?.focus(); };
addNote = function() {
    let content;
    try { content = StudyCore.normalizeContent(document.getElementById('newQuestion').value, document.getElementById('newAnswer').value); }
    catch (error) { toast(error.message); document.getElementById('newAnswer').focus(); return; }
    const { question, answer } = content;
    const category = document.getElementById('newCategory').value || autoDetectCategory(question, answer) || 'Java基础';
    if (studyEditorSource === 'bank') {
        if (studyEditorReturnInterview && !document.getElementById('bankCompany').value.trim()) { toast('请填写公司名称'); document.getElementById('bankCompany').focus(); return; }
        const note = saveCustomBankQuestion({ question, answer, category, priority: document.getElementById('bankPriority').value, company: document.getElementById('bankCompany').value.trim() }, studyEditingId);
        const returnToInterview = studyEditorReturnInterview;
        closeAddModal();
        if (returnToInterview) { resetStudyModes(); showInterviewExp=true; interviewCompany=note.company; interviewTab='sources'; interviewKeyword=''; studyPage=1; } else openStudy('bank');
        collapsedNotes.delete(note.id); renderAll(); toast('内容已保存'); return;
    }
    const existing = studyEditingId && getPersonalNotes(true).find(n => n.id === studyEditingId);
    const note = { ...(existing || {}), id: existing?.id || 'user-' + crypto.randomUUID(), question, answer, titleMode: question ? 'manual' : 'none', category, keywords: existing?.keywords || [], updatedAt: new Date().toISOString() };
    const index = userNotes.findIndex(n => n.id === note.id);
    if (index >= 0) userNotes[index] = note; else userNotes.unshift(note);
    saveUserNotes(); closeAddModal(); openStudy(note.bankOnly ? 'bank' : 'personal');
    collapsedNotes.delete(note.id); renderAll(); toast(existing ? '笔记已更新' : '已保存笔记，并自动收录到题库');
};
function initStudyWorkspace() {
    getStudyPool('bank').forEach(n => collapsedNotes.add(n.id));
    // Native disclosures retain keyboard support; dismiss menus without changing study state.
    document.addEventListener('click', e => {
        document.querySelectorAll('.study-card-more[open]').forEach(menu => {
            if (!menu.contains(e.target) || e.target.closest('button')) menu.open = false;
        });
    });
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        document.querySelectorAll('.study-card-more[open]').forEach(menu => {
            menu.open = false; menu.querySelector('summary').focus();
        });
    });
    document.querySelectorAll('[data-study-nav]').forEach(b => b.addEventListener('click', () => openStudy(b.dataset.studyNav)));
    document.getElementById('notesContainer').addEventListener('click', e => {
        const btn = e.target.closest('[data-study]'); if (!btn) return;
        const { study: action, id } = btn.dataset;
        if (action === 'filters') {
            studyFiltersOpen = !studyFiltersOpen; renderAll();
            document.querySelector('[data-study="filters"]')?.focus({ preventScroll: true });
        }
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
            btn.setAttribute('aria-expanded', expanded);
            const chevron = btn.querySelector('.study-chevron');
            if (!chevron.querySelector('svg')) chevron.textContent = expanded ? '−' : '+';
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
