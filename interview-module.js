/* Interview sources are imported references, not verified company question lists. */
let interviewTab = 'sources';
let interviewCompany = 'all';
let interviewKeyword = '';
let interviewRecords = [];
let interviewEditingId = null;
let interviewReturnFocus = null;
try { interviewRecords = StudyCore.restoreInterviews(JSON.parse(localStorage.getItem('interview-records') || '[]')); } catch (_) { /* Keep the app available if a local record is malformed. */ }

function saveInterviewRecords() {
    localStorage.setItem('interview-records', JSON.stringify(interviewRecords));
    scheduleCloudSync();
}
function getInterviewSnapshot() { return interviewRecords; }
function applyInterviewSnapshot(value) {
    interviewRecords = StudyCore.restoreInterviews(value, interviewRecords);
    localStorage.setItem('interview-records', JSON.stringify(interviewRecords));
}
function interviewRecordsHTML() {
    const records = [...interviewRecords].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    return `<section class="interview-record-intro"><div><h2>把一次面试，变成下一次的底气。</h2><p>记下实际被问的问题、当时的回答与需要补上的知识。</p></div><button class="study-primary" data-interview="new">＋ 记录面试</button></section>
    ${records.length ? records.map(r => `<article class="interview-record"><div class="study-card-meta"><span>${studyEsc(r.date || '日期未填')}</span><span>${studyEsc(r.round || '轮次未填')}</span><span class="study-status">${studyEsc(r.result || '待反馈')}</span></div><h3>${studyEsc(r.company)} <small>${studyEsc(r.role || 'Java 后端')}</small></h3><dl><dt>实际问题</dt><dd>${studyEsc(r.questions || '还没有记录问题')}</dd><dt>我的回答与复盘</dt><dd>${studyEsc(r.reflection || '面试后补充：哪里卡住了，如何答得更好？')}</dd>${r.nextStep ? `<dt>下一步行动</dt><dd>${studyEsc(r.nextStep)}</dd>` : ''}</dl><footer><span>${(r.questions || '').split('\n').filter(q => q.trim()).length} 条问题</span><div><button data-interview="extract" data-id="${studyEsc(r.id)}">问题存入笔记</button><button data-interview="edit" data-id="${studyEsc(r.id)}">编辑复盘</button><button data-interview="delete" data-id="${studyEsc(r.id)}">删除</button></div></footer></article>`).join('') : `<div class="study-empty"><span>✎</span><h3>你的第一份面试复盘，从这里开始</h3><p>按公司和轮次记录真实面试，把不会的问题加入自己的笔记。</p><button class="study-secondary" data-interview="new">记录一次面试</button></div>`}`;
}
function getInterviewCompanies() {
    return [...new Set([...window.QUESTION_BANK_DATA.sources.map(s => s.company), ...customBankQuestions.map(n => n.company).filter(Boolean), ...interviewRecords.map(r => r.company)])];
}
function getCompanyQuestions(company = interviewCompany) {
    const sources = window.QUESTION_BANK_DATA.sources.filter(s => company === 'all' || s.company === company);
    const ids = new Set(sources.flatMap(s => s.questionIds));
    return getStudyPool('bank').filter(n => ids.has(n.id) || (n.company && (company === 'all' || n.company === company)));
}
function getInterviewFilteredQuestions() {
    return StudyCore.filter(getCompanyQuestions(), { keyword: interviewKeyword }, mastery);
}
function openInterviewQuestionEditor(company, id) {
    openAddModal(id || null, 'bank');
    document.getElementById('bankCompany').value = company === 'all' ? '' : company;
    studyEditorReturnInterview = true;
    document.getElementById('bankCompany').required = true;
    document.querySelector('#addModal .modal-sub').textContent = '按公司记录实际问题和答案，保存后也会收录到题库。';
}
function renderInterviewQuestion(n) {
    const sources = window.QUESTION_BANK_DATA.sources.filter(s => (interviewCompany === 'all' || s.company === interviewCompany) && s.questionIds.includes(n.id));
    const open = !collapsedNotes.has(n.id);
    return `<article class="study-card interview-question-card" id="note-${studyEsc(n.id)}"><div class="study-card-meta"><span class="study-number">${studyEsc(n.number || '自建面经')}</span><span>${studyEsc(n.category)}</span><span>${studyEsc(n.company || [...new Set(sources.map(s=>s.company))].join(' / '))}</span><span class="study-status">${studyLevelNames[mastery[n.id]?.level || 'new']}</span></div><button class="study-question" data-study="expand" data-id="${studyEsc(n.id)}" aria-expanded="${open}" aria-controls="answer-${studyEsc(n.id)}"><span>${studyEsc(n.question)}</span><span class="study-chevron">${open ? '−' : '+'}</span></button><div class="study-answer answer${open ? '' : ' collapsed'}" id="answer-${studyEsc(n.id)}">${studyMarkdown(n.answer)}${studyRatings(n)}</div><footer class="study-card-footer"><span>${n.company ? '自己记录的面经' : '面经考点改写 / 延展'}</span><div><button data-study="copy" data-id="${studyEsc(n.id)}">记入笔记</button>${n.id.startsWith('custom-bank-') ? `<button data-interview="edit-question" data-id="${studyEsc(n.id)}" data-company="${studyEsc(n.company || '')}">编辑</button>` : ''}<button data-action="delete" data-id="${studyEsc(n.id)}">删除</button></div></footer>${sources.length ? `<details class="interview-citations"><summary>题目来源 · ${sources.length} 条面经</summary>${sources.map(s=>`<p><a href="${studyEsc(s.url)}" target="_blank" rel="noopener noreferrer">${studyEsc(s.title)} ↗</a><small>${studyEsc(s.description)}</small></p>`).join('')}</details>` : ''}</article>`;
}
function renderCompanyReferences() {
    const sources = window.QUESTION_BANK_DATA.sources.filter(s => interviewCompany === 'all' || s.company === interviewCompany);
    if (!sources.length) return '';
    return `<details class="interview-citations company-references"><summary>参考面经与来源说明 · ${sources.length} 篇</summary>${sources.map(s => `<p><a href="${studyEsc(s.url)}" target="_blank" rel="noopener noreferrer">${studyEsc(s.title)} ↗</a><small>${studyEsc(s.description)}</small></p>`).join('')}</details>`;
}
function renderInterviewWorkspace() {
    const companies = getInterviewCompanies();
    const filtered = getInterviewFilteredQuestions();
    const p = StudyCore.pagination(filtered.length, studyPageSize, studyPage); studyPage = p.page;
    const journal = interviewTab === 'records';
    const selected = interviewCompany === 'all' ? '全部公司' : interviewCompany;
    return `<section class="interview-workspace interview-company-layout"><aside class="interview-company-nav" aria-label="公司导航"><div class="interview-nav-title"><span class="study-eyebrow">INTERVIEWS</span><h2>公司目录</h2></div><button data-interview="company" data-company="all" class="${interviewCompany === 'all' && !journal ? 'active' : ''}" aria-current="${interviewCompany === 'all' && !journal ? 'page' : 'false'}"><span>全部公司</span><small>${getCompanyQuestions('all').length}</small></button>${companies.map(c => `<button data-interview="company" data-company="${studyEsc(c)}" class="${c === interviewCompany && !journal ? 'active' : ''}" aria-current="${c === interviewCompany && !journal ? 'page' : 'false'}"><span>${studyEsc(c)}</span><small>${getCompanyQuestions(c).length}</small></button>`).join('')}<div class="company-nav-tools"><button data-interview="new-company">＋ 新建公司面经</button><button data-interview="tab" data-tab="records" class="${journal ? 'active' : ''}">我的面试复盘 <small>${interviewRecords.length}</small></button></div></aside><div class="interview-company-main"><div class="interview-mobile-tools"><label>公司<select id="interviewCompany">${studyOptions([['all','全部公司'], ...companies.map(c=>[c,c])],interviewCompany)}</select></label><button class="study-secondary" data-interview="tab" data-tab="${journal ? 'sources' : 'records'}">${journal ? '返回公司问答' : '我的复盘'}</button></div>${journal ? interviewRecordsHTML() : `<header class="interview-company-head"><div><span class="study-eyebrow">COMPANY QUESTIONS</span><h2>${studyEsc(selected)}</h2><p>逐题练习答案，补充自己的面试记录。</p></div><div class="interview-company-actions"><button class="study-primary" data-interview="add-company" data-company="${studyEsc(interviewCompany)}">＋ 添加面经题</button><button class="study-secondary" data-interview="company-practice" data-company="${studyEsc(interviewCompany)}" ${filtered.length ? '' : 'disabled'}>抽查这些题</button></div></header>${renderCompanyReferences()}<div class="interview-search-row"><input id="interviewSearch" type="search" aria-label="搜索公司面经问答" value="${studyEsc(interviewKeyword)}" placeholder="搜索这个公司的问题或答案"><button class="study-text" data-interview="reset-search">清空</button></div><div class="study-list-heading"><span>${filtered.length} 道题目 · 参考答案可展开</span><div class="study-list-tools"><button data-study="collapse">收起答案</button><button data-study="expand-all">展开答案</button></div></div>${filtered.length ? renderStudyPagination(filtered.length,'top') + filtered.slice(p.start,p.end).map(renderInterviewQuestion).join('') + renderStudyPagination(filtered.length,'bottom') : '<div class="study-empty"><h3>暂无匹配的公司问答</h3><p>可以清空搜索，或添加这个公司的实际问题与答案。</p></div>'}`}</div></section>`;
}
function openInterviewEditor(id) {
    interviewReturnFocus = document.activeElement;
    interviewEditingId = id || null;
    const record = interviewRecords.find(r => r.id === id) || {};
    const form = document.getElementById('interviewForm'); form.reset();
    ['company', 'role', 'date', 'round', 'result', 'questions', 'reflection', 'nextStep'].forEach(key => {
        form.elements[key].value = record[key] || (key === 'role' ? 'Java 后端' : key === 'result' ? '待反馈' : '');
    });
    if (!record.date) {
        const now = new Date();
        form.elements.date.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }
    document.getElementById('interviewEditorTitle').textContent = id ? '编辑面试复盘' : '记录一次面试';
    document.getElementById('interviewDialog').showModal(); form.elements.company.focus();
}
function closeInterviewEditor() { document.getElementById('interviewDialog').close(); interviewReturnFocus?.focus(); }
function extractInterviewNotes(id) {
    const record = interviewRecords.find(r => r.id === id); if (!record) return;
    const questions = [...new Set((record.questions || '').split('\n').map(q => q.replace(/^\s*(?:[-*•]|\d+[.、)])\s*/, '').trim()).filter(Boolean))];
    if (!questions.length) { toast('先在复盘里填写实际问题，每行一道'); return; }
    let added = 0;
    questions.forEach(question => {
        const existing = userNotes.find(n => n.interviewId === id && n.question === question);
        if (existing) { deletedIds.delete(existing.id); return; }
        userNotes.unshift({ id: 'user-' + crypto.randomUUID(), interviewId: id, question, category: autoDetectCategory(question, '') || '面试复盘',
            answer: `来自 ${record.company} · ${record.round || '面试'}（${record.date || '日期未填'}）\n\n待补充：我的回答、遗漏的原理、正确思路与举例。`, keywords: [record.company], updatedAt: new Date().toISOString() });
        added++;
    });
    saveUserNotes(); saveDeleted(); toast(added ? `已将 ${added} 道问题存入我的笔记，请补充自己的答案` : '这些问题已在我的笔记中');
}
function initInterviewWorkspace() {
    const dialog = document.createElement('dialog');
    dialog.id = 'interviewDialog'; dialog.className = 'interview-dialog'; dialog.setAttribute('aria-labelledby', 'interviewEditorTitle');
    dialog.innerHTML = `<form id="interviewForm"><header><div><span class="study-eyebrow">INTERVIEW JOURNAL</span><h2 id="interviewEditorTitle">记录一次面试</h2></div><button type="button" class="study-text" data-interview-close aria-label="关闭面试记录">×</button></header><div class="interview-form-grid"><label>公司 <span>必填</span><input name="company" required maxlength="120" placeholder="例如：腾讯"></label><label>岗位<input name="role" maxlength="120" placeholder="Java 后端"></label><label>面试日期<input name="date" type="date"></label><label>轮次<input name="round" maxlength="60" placeholder="例如：技术一面"></label><label>面试进展<select name="result">${studyOptions(['待反馈', '进入下一轮', '通过', '未通过', '已结束'].map(v => [v, v]), '待反馈')}</select></label></div><label>实际被问的问题 <span>每行一道，便于存入笔记</span><textarea name="questions" rows="5" placeholder="HashMap 的扩容机制？&#10;项目中如何保证消息不丢失？"></textarea></label><label>我的回答与复盘<textarea name="reflection" rows="4" placeholder="当时怎么答的？哪里卡住了？下次怎么讲？"></textarea></label><label>下一步行动<textarea name="nextStep" rows="2" placeholder="例如：补充线程池拒绝策略，重新口述项目难点"></textarea></label><footer><button type="button" class="study-secondary" data-interview-close>取消</button><button type="submit" class="study-primary">保存复盘</button></footer></form>`;
    document.body.appendChild(dialog);
    dialog.querySelectorAll('[data-interview-close]').forEach(b => b.addEventListener('click', closeInterviewEditor));
    document.getElementById('interviewForm').addEventListener('submit', e => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target));
        Object.keys(values).forEach(key => values[key] = values[key].trim());
        if (!values.company) { toast('请填写公司名称'); return; }
        const record = { ...values, id: interviewEditingId || 'interview-' + crypto.randomUUID(), updatedAt: new Date().toISOString() };
        const idx = interviewRecords.findIndex(r => r.id === record.id);
        if (idx >= 0) interviewRecords[idx] = record; else interviewRecords.unshift(record);
        saveInterviewRecords(); closeInterviewEditor(); renderAll(); toast('面试复盘已保存');
    });
    document.getElementById('notesContainer').addEventListener('click', e => {
        const btn = e.target.closest('[data-interview]'); if (!btn) return;
        const { interview: action, id } = btn.dataset;
        if (action === 'tab') { interviewTab = btn.dataset.tab; renderAll(); }
        else if (action === 'company') { interviewCompany = btn.dataset.company; interviewTab = 'sources'; interviewKeyword = ''; studyPage = 1; renderAll(); window.scrollTo({top:0}); }
        else if (action === 'new-company') openInterviewQuestionEditor('');
        else if (action === 'edit-question') openInterviewQuestionEditor(btn.dataset.company, id);
        else if (action === 'reset-search') { interviewKeyword = ''; studyPage = 1; renderAll(); }
        else if (action === 'company-practice') { const c=btn.dataset.company; const ids=getInterviewFilteredQuestions().map(n=>n.id); startQuiz('bank'); quizLinkedIds=ids; quizLinkedTitle=(c==='all'?'全部公司':c)+' 面经'; renderAll(); }
        else if (action === 'add-company') { openInterviewQuestionEditor(btn.dataset.company); }
        else if (action === 'reset') { interviewCompany = 'all'; interviewKeyword = ''; renderAll(); }
        else if (action === 'new') openInterviewEditor();
        else if (action === 'edit') openInterviewEditor(id);
        else if (action === 'extract') extractInterviewNotes(id);
        else if (action === 'delete') {
            if (!confirm('删除这条面试复盘？已经存入笔记的问题会保留。')) return;
            interviewRecords = interviewRecords.filter(r => r.id !== id); saveInterviewRecords(); renderAll();
        }
        else if (action === 'questions' || action === 'practice') {
            const source = window.QUESTION_BANK_DATA.sources.find(s => s.id === id); if (!source) return;
            if (action === 'questions') { openStudy('bank'); studyLinkedIds = source.questionIds; studyLinkedTitle = source.title; renderAll(); }
            else { startQuiz('bank'); quizLinkedIds = source.questionIds; quizLinkedTitle = source.title; renderAll(); }
        }
        else if (action === 'guide') {
            resetStudyModes(); showResumePrep = true;
            setResumePrepSource(id); setResumePrepTab(id === 'resume' ? 'overview' : 'questions'); renderAll();
        }
    });
    document.getElementById('notesContainer').addEventListener('change', e => {
        if (e.target.id === 'interviewCompany') { interviewCompany = e.target.value; interviewTab='sources'; studyPage=1; interviewKeyword=''; renderAll(); }
    });
    document.getElementById('notesContainer').addEventListener('input', e => {
        if (e.target.id !== 'interviewSearch') return;
        interviewKeyword = e.target.value; studyPage = 1;
        const position = e.target.selectionStart;
        renderAll();
        const input = document.getElementById('interviewSearch'); input.focus();
        if (position != null) input.setSelectionRange(position, position);
    });
}
