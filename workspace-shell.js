/* One global navigation; context directories contain only the current view's data. */
function workspaceIcon(name) {
    const paths = {
        bank:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v14"/>',
        personal:'<path d="M13 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8"/><path d="m16 3 5 5M10 14l-1 4 4-1 9-9a2 2 0 0 0-5-5Z"/>',
        interviews:'<path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-2-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z"/><path d="M7 8h8M7 12h5"/>',
        quiz:'<path d="M3 6h3c5 0 7 12 12 12h3M3 18h3c2 0 3-2 5-5m2-2c2-3 3-5 5-5h3"/><path d="m18 3 3 3-3 3m0 6 3 3-3 3"/>',
        more:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
        sync:'<path d="M6 17a4 4 0 1 1 0-8 6 6 0 0 1 12-1 4.5 4.5 0 0 1 1 9"/><path d="M9 14v7m-3-3 3 3 3-3m3-7v7m-3-4 3-3 3 3"/>',
        resume:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
        recruitment:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c6 4 12 4 18 0M12 12v4"/>',
        resources:'<path d="m10 13 4-4m-5 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 1 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 -1)"/>',
        trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
        marked:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
        close:'<path d="m6 6 12 12M6 18 18 6"/>'
    };
    return `<svg class="workspace-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.bank}</svg>`;
}
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
    WorkspaceControls.enhance();
}
function initWorkspaceShell() {
    const header = document.createElement('header');
    header.className = 'workspace-header';
    header.innerHTML = `<a class="workspace-brand" href="#" data-workspace-link="bank"><span><img src="./icon.svg?v=2" alt=""></span><strong>面试工作台<small>JAVA BACKEND</small></strong></a><nav aria-label="功能导航">${[['bank','题库'],['personal','我的笔记'],['interviews','公司面经'],['quiz','随机抽查'],['resume','简历准备'],['recruitment','秋招专区'],['resources','学习资源']].map(([id,label])=>`<button data-workspace-link="${id}">${label}</button>`).join('')}</nav><div class="workspace-tools"><button data-workspace-link="trash">回收站 <small id="workspaceTrashCount" hidden></small></button><button data-workspace-link="sync">数据同步</button></div>`;
    document.body.prepend(header);
    const sideTitle = document.createElement('div');
    sideTitle.className = 'workspace-directory-title'; sideTitle.innerHTML = `<span class="study-eyebrow">STUDY DIRECTORY</span><h2>知识目录</h2><button class="workspace-marked-link" data-workspace-link="marked">${workspaceIcon('marked')}重点复习</button>`;
    document.querySelector('.sidebar').prepend(sideTitle);
    const search = document.querySelector('.search-wrap');
    document.querySelector('.main-header').appendChild(search);
    const bottom = document.querySelector('.mobile-bottombar');
    bottom.innerHTML = [['bank','题库'],['personal','笔记'],['interviews','面经'],['quiz','抽查'],['more','更多']].map(([id,label])=>`<button class="nav-item" data-workspace-link="${id}"><span class="nav-icon" aria-hidden="true">${workspaceIcon(id)}</span>${label}${id==='more'?'<span id="mobileMoreBadge" class="nav-badge" hidden></span>':''}</button>`).join('');
    document.querySelector('.more-grid').innerHTML = [['resume','简历准备'],['recruitment','秋招专区'],['resources','学习资源'],['trash','回收站'],['marked','重点复习'],['sync','数据与同步']].map(([id,label])=>`<button data-workspace-link="${id}">${workspaceIcon(id)}${label}${id==='marked'?'<span id="mobileMarkedBadge" hidden></span>':''}</button>`).join('');
    document.addEventListener('click', e => {
        const button = e.target.closest('[data-workspace-link]');
        if (!button) return;
        e.preventDefault(); navigateWorkspace(button.dataset.workspaceLink);
    });
    document.getElementById('mobileSyncBtn').innerHTML = workspaceIcon('sync');
    document.getElementById('mobileSyncBtn').setAttribute('aria-label', '数据与同步');
    document.querySelector('.sync-status-icon').innerHTML = workspaceIcon('sync');
    const closeEditor = document.createElement('button');
    closeEditor.type = 'button'; closeEditor.className = 'editor-close';
    closeEditor.setAttribute('aria-label', '关闭编辑器');
    closeEditor.innerHTML = workspaceIcon('close');
    closeEditor.addEventListener('click', closeAddModal);
    document.querySelector('#addModal .modal').prepend(closeEditor);
    WorkspaceControls.init();
    updateMobileNavActive = renderWorkspaceShell;
    const previousRender = renderAll;
    renderAll = function() { previousRender(); renderWorkspaceShell(); };
    renderAll();
}
