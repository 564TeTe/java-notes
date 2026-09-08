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
function interviewSourcesHTML() {
    const sources = window.QUESTION_BANK_DATA.sources.filter(s => (interviewCompany === 'all' || s.company === interviewCompany) &&
        [s.title, s.description, ...s.questionIds.map(id => BANK.find(n => n.id === id)?.question || '')].join(' ').toLowerCase().includes(interviewKeyword.toLowerCase()));
    return `<div class="study-filters"><label>公司<select id="interviewCompany">${studyOptions([['all', '全部公司'], ...[...new Set(window.QUESTION_BANK_DATA.sources.map(s => s.company))].map(c => [c, c])], interviewCompany)}</select></label><label class="study-search-label">查找面经<input id="interviewSearch" type="search" value="${studyEsc(interviewKeyword)}" placeholder="搜索公司、考点或标题"></label><button class="study-text" data-interview="reset">清空筛选</button></div>
    <div class="study-list-heading"><h2>面经来源 <span>${sources.length}</span></h2><span>资料整理于 2026.09.07</span></div>
    <p class="interview-source-note">保留候选人自述、转载与汇编的区别。关联题目为考点改写或延展；以下日期和来源说明沿用附件，未重新核验网页。</p>
    <div class="interview-source-grid">${sources.map(s => `<article class="interview-source-card"><div class="study-card-meta"><span class="study-number">${s.id}</span><span class="interview-company">${studyEsc(s.company)}</span><span>${s.questionIds.length ? s.questionIds.length + ' 道关联题' : '追溯来源'}</span></div><h3>${studyEsc(s.title)}</h3><p>${studyEsc(s.description)}</p><div class="interview-topics">${[...new Set(s.questionIds.map(id => BANK.find(n => n.id === id)?.category).filter(Boolean))].slice(0, 5).map(c => `<span>${studyEsc(c)}</span>`).join('')}</div><footer><a href="${studyEsc(s.url)}" target="_blank" rel="noopener noreferrer">阅读原文 ↗</a>${s.questionIds.length ? `<button data-interview="questions" data-id="${s.id}">查看关联题</button><button class="study-primary" data-interview="practice" data-id="${s.id}">抽题练习 →</button>` : ''}</footer></article>`).join('')}</div>
    ${!sources.length ? '<div class="study-empty"><h3>没有找到相关面经</h3><p>试试“线程池”“腾讯”等关键词，或清空公司筛选。</p><button class="study-secondary" data-interview="reset">清空筛选</button></div>' : ''}
    <details class="interview-platforms"><summary>继续查找面经 · 常用平台</summary><div>${INTERVIEW_EXP.map(r => `<a href="${studyEsc(r.url)}" target="_blank" rel="noopener noreferrer">${studyEsc(r.name)} ↗</a>`).join('')}</div></details>`;
}
function interviewRecordsHTML() {
    const records = [...interviewRecords].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    return `<section class="interview-record-intro"><div><h2>把一次面试，变成下一次的底气。</h2><p>记下实际被问的问题、当时的回答与需要补上的知识。</p></div><button class="study-primary" data-interview="new">＋ 记录面试</button></section>
    ${records.length ? records.map(r => `<article class="interview-record"><div class="study-card-meta"><span>${studyEsc(r.date || '日期未填')}</span><span>${studyEsc(r.round || '轮次未填')}</span><span class="study-status">${studyEsc(r.result || '待反馈')}</span></div><h3>${studyEsc(r.company)} <small>${studyEsc(r.role || 'Java 后端')}</small></h3><dl><dt>实际问题</dt><dd>${studyEsc(r.questions || '还没有记录问题')}</dd><dt>我的回答与复盘</dt><dd>${studyEsc(r.reflection || '面试后补充：哪里卡住了，如何答得更好？')}</dd>${r.nextStep ? `<dt>下一步行动</dt><dd>${studyEsc(r.nextStep)}</dd>` : ''}</dl><footer><span>${(r.questions || '').split('\n').filter(q => q.trim()).length} 条问题</span><div><button data-interview="extract" data-id="${studyEsc(r.id)}">问题存入笔记</button><button data-interview="edit" data-id="${studyEsc(r.id)}">编辑复盘</button><button data-interview="delete" data-id="${studyEsc(r.id)}">删除</button></div></footer></article>`).join('') : `<div class="study-empty"><span>✎</span><h3>你的第一份面试复盘，从这里开始</h3><p>按公司和轮次记录真实面试，把不会的问题加入自己的笔记。</p><button class="study-secondary" data-interview="new">记录一次面试</button></div>`}`;
}
function interviewGuidesHTML() {
    return `<div class="study-list-heading"><div><h2>围绕简历，准备能展开讲的故事。</h2><p>你的原始资料与已有的简历专项练习，集中在这里。</p></div></div><div class="interview-source-grid">${window.RESUME_PREP_DATA.sources.map(s => `<article class="interview-source-card"><span class="study-eyebrow">${studyEsc(s.fileType)} / 面试准备资料</span><h3>${studyEsc(s.name)}</h3><p>${studyEsc(s.summary)}</p><div class="interview-topics">${s.highlights.map(h => `<span>${studyEsc(h)}</span>`).join('')}</div><footer><a href="${studyEsc(s.file)}" target="_blank" rel="noopener">查看原始资料 ↗</a><button class="study-primary" data-interview="guide" data-id="${studyEsc(s.id)}">进入专项准备 →</button></footer></article>`).join('')}</div>`;
}
function renderInterviewWorkspace() {
    return `<section class="interview-workspace"><nav class="study-switch" aria-label="面经内容">${[['sources', '面经与考点', window.QUESTION_BANK_DATA.sources.length], ['records', '我的面试复盘', interviewRecords.length], ['guides', '准备手册', 4]].map(([tab, label, count]) => `<button data-interview="tab" data-tab="${tab}" class="${interviewTab === tab ? 'active' : ''}" aria-pressed="${interviewTab === tab}">${label}<span>${count}</span></button>`).join('')}</nav>${interviewTab === 'sources' ? interviewSourcesHTML() : interviewTab === 'records' ? interviewRecordsHTML() : interviewGuidesHTML()}</section>`;
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
        if (e.target.id === 'interviewCompany') { interviewCompany = e.target.value; renderAll(); }
    });
    document.getElementById('notesContainer').addEventListener('input', e => {
        if (e.target.id !== 'interviewSearch') return;
        interviewKeyword = e.target.value;
        const position = e.target.selectionStart;
        renderAll();
        const input = document.getElementById('interviewSearch'); input.focus();
        if (position != null) input.setSelectionRange(position, position);
    });
}
