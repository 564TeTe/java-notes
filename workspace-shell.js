/* One global navigation; context directories contain only the current view's data. */
function currentWorkspacePage() {
    if (showInterviewExp) return 'interviews';
    if (showResumePrep) return 'resume';
    if (showRecruitment) return 'recruitment';
    if (showResources) return 'resources';
    if (showTrash) return 'trash';
    if (showQuiz) return 'quiz';
    if (showMarkedOnly) return 'marked';
    return studySource;
}
function navigateWorkspace(page) {
    closeMorePanel(); closeCategoryPanel();
    document.querySelector('.sidebar').classList.remove('drawer-open');
    document.getElementById('drawerOverlay').classList.remove('show');
    if (page === 'more') { openMorePanel(); return; }
    if (page === 'sync') { openSyncModal(); return; }
    if (page === 'bank' || page === 'personal') { openStudy(page); return; }
    if (page === 'quiz') { startQuiz(studySource); return; }
    resetStudyModes(); clearStudyFilters();
    showInterviewExp = page === 'interviews'; showResumePrep = page === 'resume';
    showRecruitment = page === 'recruitment'; showResources = page === 'resources';
    showTrash = page === 'trash'; showMarkedOnly = page === 'marked';
    buildCategoryBtns(); renderAll(); window.scrollTo({ top: 0 });
}
function renderWorkspaceShell() {
    const page = currentWorkspacePage();
    document.body.dataset.workspace = page;
    document.body.classList.toggle('context-directory', page === 'bank' || page === 'personal' || page === 'marked');
    document.querySelectorAll('[data-workspace-link]').forEach(button => {
        const key = button.dataset.workspaceLink;
        const active = key === page || (key === 'more' && ['resume','recruitment','resources','trash','marked'].includes(page));
        button.classList.toggle('active', active);
        button.setAttribute('aria-current', active ? 'page' : 'false');
    });
    document.getElementById('topbarTitle').textContent = 'Java 面试工作台';
    const input = document.getElementById('searchInput');
    input.placeholder = showTrash ? '搜索回收站内容' : studySource === 'bank' ? '搜索题目、答案或题号' : '搜索我的笔记';
    input.setAttribute('aria-label', input.placeholder);
    const categoryTitle = document.querySelector('.category-wrap .label');
    categoryTitle.textContent = '知识分类';
    document.querySelectorAll('#categoryBtns [data-cat]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === activeCategory);
        btn.setAttribute('aria-current', btn.dataset.cat === activeCategory ? 'page' : 'false');
    });
    const badge = document.getElementById('workspaceTrashCount');
    if (badge) { badge.textContent = getDeletedNotes().length || ''; badge.hidden = !getDeletedNotes().length; }
}
function initWorkspaceShell() {
    const header = document.createElement('header');
    header.className = 'workspace-header';
    header.innerHTML = `<a class="workspace-brand" href="#" data-workspace-link="bank"><span>J</span><strong>面试工作台<small>JAVA BACKEND</small></strong></a><nav aria-label="功能导航">${[['bank','题库'],['personal','我的笔记'],['interviews','公司面经'],['quiz','随机抽查'],['resume','简历准备'],['recruitment','秋招专区'],['resources','学习资源']].map(([id,label])=>`<button data-workspace-link="${id}">${label}</button>`).join('')}</nav><div class="workspace-tools"><button data-workspace-link="trash">回收站 <small id="workspaceTrashCount" hidden></small></button><button data-workspace-link="sync">数据同步</button></div>`;
    document.body.prepend(header);
    const sideTitle = document.createElement('div');
    sideTitle.className = 'workspace-directory-title'; sideTitle.innerHTML = '<span class="study-eyebrow">STUDY DIRECTORY</span><h2>知识目录</h2><button class="workspace-marked-link" data-workspace-link="marked">☆ 重点复习</button>';
    document.querySelector('.sidebar').prepend(sideTitle);
    const search = document.querySelector('.search-wrap');
    document.querySelector('.main-header').appendChild(search);
    const bottom = document.querySelector('.mobile-bottombar');
    bottom.innerHTML = [['bank','题库','▤'],['personal','笔记','✎'],['interviews','面经','▥'],['quiz','抽查','◎'],['more','更多','•••']].map(([id,label,icon])=>`<button class="nav-item" data-workspace-link="${id}"><span class="nav-icon" aria-hidden="true">${icon}</span>${label}${id==='more'?'<span id="mobileMoreBadge" class="nav-badge" hidden></span>':''}</button>`).join('');
    document.querySelector('.more-grid').innerHTML = [['resume','简历准备'],['recruitment','秋招专区'],['resources','学习资源'],['trash','回收站'],['marked','重点复习'],['sync','数据与同步']].map(([id,label])=>`<button data-workspace-link="${id}">${label}${id==='marked'?'<span id="mobileMarkedBadge" hidden></span>':''}</button>`).join('');
    document.addEventListener('click', e => {
        const button = e.target.closest('[data-workspace-link]');
        if (!button) return;
        e.preventDefault(); navigateWorkspace(button.dataset.workspaceLink);
    });
    updateMobileNavActive = renderWorkspaceShell;
    const previousRender = renderAll;
    renderAll = function() { previousRender(); renderWorkspaceShell(); };
    renderAll();
}
