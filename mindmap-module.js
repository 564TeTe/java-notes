/* Offline knowledge atlas. Question progress stays owned by the study module. */
(function (root) {
    'use strict';
    const Core = root.MindMapCore;
    const KEY = 'java-notes-mindmaps-v1';
    const names = { new: '未学习', learning: '学习中', mastered: '已掌握' };
    const colors = { new: '#84918b', learning: '#b7863e', mastered: '#397454' };
    const copy = value => JSON.parse(JSON.stringify(value));
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const uid = () => 'mm-' + crypto.randomUUID();
    let snapshot, loadError = '', rawStorage = '', savedLabel = '本地自动保存';
    let selected = null, query = '', view = 'canvas', focusMode = false, mobileReading = false;
    let focusSurface = 'map', focusSearchOpen = false, focusOrigin = null;
    let focusedReadingPosition = {id:null,top:0};
    const onPhone = () => !!root.matchMedia?.('(max-width: 768px)')?.matches;
    let knowledgeFolds = new Map(), transforms = new Map(), undo = [], redo = [];
    let resizeObserver, activeLayout, activeMap, currentRecords = [], drag = null, activeStats;
    let pendingEdit, editTimer, activePointers = new Map(), pinch = null;
    let lessonIndex, lessonFolds = new Map(), showRelations = false, mobileBranch = null;
    let readingIndex, readingReturn = null, restoringReadingView = false, mobileCanvasWidth = 340;
    const hasLessons = () => !!(root.JavaLearningCore && root.JAVA_LEARNING_PARTS?.length);
    const isLearning = () => snapshot?.activeMapId === 'java-learning' && hasLessons();
    function curriculum() { return lessonIndex ||= root.JavaLearningCore.createIndex(root.JAVA_LEARNING_PARTS); }
    function conceptReadings(id) {
        if (!root.JavaLearningReading || !root.XIAOLIN_CATALOG || !root.JAVA_LEARNING_XIAOLIN) return null;
        readingIndex ||= root.JavaLearningReading.createIndex(curriculum(), root.XIAOLIN_CATALOG, root.JAVA_LEARNING_XIAOLIN);
        return root.JavaLearningReading.forConcept(readingIndex,id,root.getXiaolinSnapshot?.() || {});
    }
    function openConceptReading(sectionId) {
        if (!isLearning() || typeof root.openXiaolinFromMindMap !== 'function') return;
        if (!conceptReadings(selected)?.sections.some(s=>s.id===sectionId)) return;
        const context={id:selected,topicId:snapshot.learning.topicId,query,view,focusMode,focusSurface,mobileReading,mobileBranch,
            folds:[...lessonFolds],transforms:[...transforms].map(([id,value])=>[id,{...value}]),
            scrollY:root.scrollY || 0,workspaceScroll:document.querySelector('.mindmap-view')?.scrollTop || 0,
            inspectorScroll:document.getElementById('mindmapInspector')?.scrollTop || 0,
            outlineScroll:document.getElementById('mindmapOutline')?.scrollTop || 0,
            moreOpen:!!document.querySelector('.mm-reading-more')?.open,sectionId};
        readingReturn=context;
        if (!root.openXiaolinFromMindMap(sectionId,{id:selected,title:curriculum().byId.get(selected).title,focused:focusMode})) readingReturn=null;
    }
    function returnToMindMapLearning(id) {
        if (!readingReturn || readingReturn.id!==id || !curriculum().byId.has(id) || !flushEdit()) return false;
        const context=readingReturn,next=copy(snapshot);
        next.activeMapId='java-learning';next.learning.topicId=context.topicId;
        try { persist(next); } catch(error) { notify(error.message); return false; }
        selected=id;query=context.query;view=context.view;focusMode=context.focusMode;mobileReading=context.mobileReading;
        focusSurface=context.focusSurface;focusSearchOpen=false;
        mobileBranch=context.mobileBranch;lessonFolds=new Map(context.folds);transforms=new Map(context.transforms);
        // Workspace CSS is applied after mount. Restore only once that layout settles.
        restoringReadingView=true;
        root.navigateWorkspace('mindmap');
        readingReturn=null;
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
            paintCanvas();
            transforms=new Map(context.transforms.map(([id,value])=>[id,{...value}]));paintTransform();
            root.scrollTo?.({top:context.scrollY,behavior:'instant'});
            const workspace=document.querySelector('.mindmap-view');if(workspace)workspace.scrollTop=context.workspaceScroll;
            const inspector=document.getElementById('mindmapInspector'),outline=document.getElementById('mindmapOutline');
            const more=document.querySelector('.mm-reading-more');if(more)more.open=context.moreOpen;
            if(inspector)inspector.scrollTop=context.inspectorScroll;
            if(outline)outline.scrollTop=context.outlineScroll;
            const link=[...(inspector?.querySelectorAll('[data-mm-action="read-xiaolin"]') || [])].find(el=>el.dataset.id===context.sectionId);
            link?.focus?.({preventScroll:true});
            restoringReadingView=false;
        }));
        return true;
    }

    function notify(message) { if (typeof toast === 'function') toast(message); }
    function read() {
        if (snapshot) return;
        snapshot = Core.normalizeSnapshot(undefined);
        try {
            rawStorage = localStorage.getItem(KEY) || '';
            if (rawStorage) snapshot = Core.normalizeSnapshot(JSON.parse(rawStorage));
        } catch (_) { loadError = '导图读取失败，原始数据已保留。请先导出原始数据，再重新初始化。'; }
        // The new learning atlas opens on first upgrade; personal maps remain intact.
        if (hasLessons() && !snapshot.learning) {
            snapshot.learning = Core.normalizeLearning(undefined);
            snapshot.activeMapId = 'java-learning';
        }
    }
    function persist(next) {
        const normalized = Core.normalizeSnapshot(next);
        try { localStorage.setItem(KEY, JSON.stringify(normalized)); }
        catch (_) { savedLabel = '保存失败，请导出备份'; throw new Error('本地保存失败，可能是存储空间不足或浏览器禁止存储。'); }
        snapshot = normalized;
        savedLabel = '已保存到本机';
        try { if (typeof markLocalUpdated === 'function') markLocalUpdated(); } catch (_) { /* The map itself is safely persisted. */ }
        return normalized;
    }
    function getMindMapSnapshot() { read(); if (loadError) throw new Error(loadError); if (!flushEdit()) throw new Error(savedLabel); return copy(snapshot); }
    function applyMindMapSnapshot(value, commitCompanion) {
        read();
        const incoming = Core.normalizeSnapshot(value);
        if (!incoming.learning && snapshot.learning) incoming.learning = copy(snapshot.learning);
        // A combined backup must not replace maps if its companion store fails.
        const previous = snapshot, previousStorage = localStorage.getItem(KEY);
        const updatedKey = typeof LOCAL_UPDATED_KEY === 'string' ? LOCAL_UPDATED_KEY : null;
        const previousUpdated = updatedKey ? localStorage.getItem(updatedKey) : null;
        const next = persist(incoming);
        try { if (typeof commitCompanion === 'function') commitCompanion(); }
        catch (error) {
            snapshot = previous;
            if (previousStorage === null) localStorage.removeItem(KEY);
            else localStorage.setItem(KEY, previousStorage);
            if (updatedKey) {
                if (previousUpdated === null) localStorage.removeItem(updatedKey);
                else localStorage.setItem(updatedKey, previousUpdated);
            }
            savedLabel = '导入失败，已保留原导图';
            throw error;
        }
        loadError = ''; rawStorage = ''; undo = []; redo = []; selected = null;
        transforms.clear(); pendingEdit = null; clearTimeout(editTimer);
        return copy(next);
    }
    function records() { return typeof getBankStudyRecords === 'function' ? getBankStudyRecords() : []; }
    function levelFor(id) {
        const level = typeof mastery === 'undefined' ? null : mastery[id]?.level;
        return level === 'known' ? 'mastered' : ['hard', 'fuzzy'].includes(level) ? 'learning' : 'new';
    }
    function isMemorized(id) { return typeof memorizedIds !== 'undefined' && memorizedIds.has(id); }
    function mapNow() {
        read(); currentRecords = records();
        const ids = new Set(currentRecords.map(q => q.id));
        let map;
        if (isLearning()) {
            const index = curriculum(), topic = index.byId.has(snapshot.learning.topicId) ? snapshot.learning.topicId : 'java-root';
            map = root.JavaLearningCore.buildMap(index, snapshot.learning, topic);
            map.nodes = map.nodes.map(n => lessonFolds.has(n.id) ? {...n,collapsed:lessonFolds.get(n.id)} : n);
        } else if (snapshot.activeMapId === 'knowledge') {
            map = Core.buildKnowledgeMap(currentRecords, typeof mastery === 'undefined' ? {} : mastery, typeof memorizedIds === 'undefined' ? [] : memorizedIds);
            map.title = '题库导航';
            map.nodes.find(n => n.id === map.rootId).title = '题库导航';
            map.nodes = map.nodes.map(n => knowledgeFolds.has(n.id) ? { ...n, collapsed: knowledgeFolds.get(n.id) } : n);
        } else map = copy(snapshot.maps.find(m => m.id === snapshot.activeMapId));
        if (!map) { snapshot.activeMapId = 'knowledge'; return mapNow(); }
        map.nodes = map.nodes.map(n => n.questionId && ids.has(n.questionId) ? { ...n, status: levelFor(n.questionId) } : n);
        activeMap = map;
        activeStats = Core.statsByNode ? Core.statsByNode(map) : null;
        if (!map.nodes.some(n => n.id === selected)) selected = map.rootId;
        return map;
    }
    function selection() { return activeMap.nodes.find(n => n.id === selected) || activeMap.nodes[0]; }
    function editable() { return !['knowledge','java-learning'].includes(snapshot.activeMapId); }
    function commit(next, options = {}) {
        if (loadError) throw new Error('请先导出原始数据并重新初始化导图。');
        const before = copy(snapshot);
        persist(next);
        if (options.history !== false) { undo.push(before); if (undo.length > 40) undo.shift(); redo = []; }
        if (options.refresh !== false) refresh();
        else { mapNow(); paintCanvas(); paintProgress(); updateSaveLabel(); paintHistory(); }
    }
    function changeMap(fn, options) {
        const next = copy(snapshot), index = next.maps.findIndex(m => m.id === next.activeMapId);
        if (index < 0) return;
        next.maps[index] = fn(next.maps[index]);
        commit(next, options);
    }
    function updateSaveLabel() {
        const el = document.getElementById('mindmapSave');
        if (el) el.textContent = savedLabel;
        const intro=document.querySelector('.mm-intro');
        if(intro)intro.classList.toggle('mm-save-error',!['本地自动保存','已保存到本机'].includes(savedLabel));
    }
    function paintHistory() {
        const backward = document.querySelector('[data-mm-action="undo"]'), forward = document.querySelector('[data-mm-action="redo"]');
        if (backward) backward.disabled = !undo.length;
        if (forward) forward.disabled = !redo.length;
        const picker = document.getElementById('mindmapSelect');
        if (picker) for (const option of picker.options) {
            const map = snapshot.maps.find(m => m.id === option.value);
            if (map) option.textContent = map.title;
        }
        if (picker && typeof WorkspaceControls !== 'undefined') WorkspaceControls.enhance(picker.parentElement);
    }
    function flushEdit() {
        clearTimeout(editTimer);
        if (!pendingEdit) return true;
        const edit = pendingEdit;
        try {
            if (edit.kind === 'learning') {
                const next = copy(snapshot);
                next.learning.entries[edit.id] = {...(next.learning.entries[edit.id] || {status:'new'}),note:edit.note};
                commit(next, {refresh:false}); pendingEdit = null; return true;
            }
            if (!edit.title.trim()) throw new Error('节点名称不能为空。');
            changeMap(map => {
                const result = Core.updateNode(map, edit.id, { title: edit.title.trim(), note: edit.note });
                if (edit.id === result.rootId) result.title = edit.title.trim();
                return result;
            }, { refresh: false });
            pendingEdit = null; return true;
        } catch (error) { savedLabel = error.message; updateSaveLabel(); return false; }
    }
    function progressMarkup(map, id) {
        let s = activeStats?.get(id || map.rootId) || Core.stats(map, id);
        const included = id ? new Set([id, ...Core.descendantIds(map, id)]) : null;
        if (isLearning()) {
            const concepts = map.nodes.filter(n => n.id !== 'java-root' && (!included || included.has(n.id)));
            const mastered = concepts.filter(n => n.status === 'mastered').length;
            s = {total:concepts.length,mastered,learning:concepts.filter(n=>n.status==='learning').length,percent:concepts.length ? Math.round(mastered/concepts.length*100) : 0};
            return `<span><strong>${s.total}</strong> 个概念</span><span class="mm-progress-track" role="progressbar" aria-label="概念掌握比例" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.percent}"><i style="width:${s.percent}%"></i></span><span><strong>${s.mastered}</strong> 已掌握</span><span class="mm-progress-detail">学习中 ${s.learning} · 概念独立记录</span>`;
        }
        const memorized = map.nodes.filter(n => n.questionId && isMemorized(n.questionId) && (!included || included.has(n.id))).length;
        return `<span><strong>${s.total}</strong> 个知识点</span><span class="mm-progress-track" role="progressbar" aria-label="掌握比例" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.percent}"><i style="width:${s.percent}%"></i></span><span><strong>${s.percent}%</strong> 已掌握</span><span class="mm-progress-detail">学习中 ${s.learning} · 已背 ${memorized}</span>`;
    }
    function paintProgress() {
        const el = document.getElementById('mindmapProgress');
        if (el) el.innerHTML = progressMarkup(activeMap);
    }
    function button(action, label, attrs = '') {
        const extraClass = attrs.match(/class="([^"]*)"/)?.[1] || '';
        return `<button type="button" class="mm-btn ${extraClass}" data-mm-action="${action}" ${attrs.replace(/class="[^"]*"/, '')}>${label}</button>`;
    }
    function renderMindMap() {
        if (pendingEdit) flushEdit();
        const map = mapNow();
        const error = loadError ? `<div class="mm-error" role="alert">${esc(loadError)}<div>${button('raw-export', '导出原始数据')}${button('reset-storage', '重新初始化')}</div></div>` : '';
        const topics = isLearning() ? [{id:'java-root',title:'全部知识'},...curriculum().topics] : [];
        if (isLearning() && !topics.some(n=>n.id===map.rootId)) topics.push(curriculum().byId.get(map.rootId));
        return `<section class="mindmap-view${focusMode ? ' mm-focus' : ''}" data-view="${view}" data-reading="${isLearning() && mobileReading}" data-mode="${isLearning() ? 'learning' : editable() ? 'personal' : 'questions'}" data-focus-surface="${focusSurface}" data-focus-search="${focusSearchOpen}" aria-label="思维导图工作区">
            <header class="mm-focusbar"><strong id="mindmapFocusTitle">${esc(selection().title)}</strong><div>${isLearning() ? button('focus-map','看图',`aria-pressed="${focusSurface==='map'}"`)+button('focus-read','阅读',`aria-pressed="${focusSurface==='reading'}"`) : ''}${button('focus-search','查找','aria-label="查找概念 Ctrl+K"')}${button('focus-exit','退出专注','title="退出专注 Esc"')}</div></header>
            <div class="mm-intro${!['本地自动保存','已保存到本机'].includes(savedLabel)?' mm-save-error':''}"><span id="mindmapSave" class="mm-save" role="status">${esc(savedLabel)}</span></div>
            ${error}
            <div class="mm-library"><div class="mm-tabs" role="group" aria-label="导图来源">${hasLessons() ? button('learning', 'Java 学习', `aria-pressed="${isLearning()}"`) : ''}${button('knowledge', '题库导航', `aria-pressed="${snapshot.activeMapId === 'knowledge'}"`)}${button('personal', '我的导图 <small>' + snapshot.maps.length + '</small>', `aria-pressed="${editable()}"`)}</div>
                <div class="mm-library-tools">${editable() ? `<label class="mm-map-picker"><span class="mm-sr">切换导图</span><select id="mindmapSelect" aria-label="切换导图">${snapshot.maps.map(m => `<option value="${esc(m.id)}"${m.id === map.id ? ' selected' : ''}>${esc(m.title)}</option>`).join('')}</select></label>` : ''}
                ${editable() ? button('new', '＋ 新建导图', 'class="mm-primary"') : ''}
                <details class="mm-menu"><summary aria-label="导图操作"><span class="mm-menu-label">导图操作</span><span class="mm-menu-compact" aria-hidden="true">···</span></summary><div>${button('new','＋ 新建导图','class="mm-mobile-new"')}${isLearning() ? button('lesson-relations','知识关联',`aria-pressed="${showRelations}"`)+button('expand-all','展开全部分支')+button('collapse-all','收起分支') : ''}${button('template', '新建知识梳理模板')}${button('duplicate', editable() ? '复制当前导图' : '复制总览到我的导图')}${button('json-export', '导出 JSON 备份')}${button('svg-export', '导出 SVG 图片')}${button('import', '导入 JSON')}${editable() ? button('delete-map', '删除当前导图', 'class="mm-danger"') : ''}</div></details></div>
            </div>
            ${isLearning() ? `<div class="mm-topic-picker"><label for="mindmapTopicSelect">学习专题</label><select id="mindmapTopicSelect" aria-label="学习专题">${topics.map(n=>`<option value="${esc(n.id)}"${map.rootId===n.id?' selected':''}>${esc(n.title)}</option>`).join('')}</select></div>` : ''}
            <div class="mm-progress" id="mindmapProgress">${progressMarkup(map)}</div>
            <div class="mm-toolbar"><label class="mm-search"><span class="mm-sr">搜索导图节点</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="m15 15 5 5"/></svg><input id="mindmapSearch" type="search" placeholder="${onPhone() ? '搜索概念' : isLearning() ? '搜索全部 Java 概念、原理或笔记…' : '搜索知识点或笔记…'}" value="${esc(query)}" autocomplete="off" aria-controls="mindmapResults"></label><div class="mm-view-switch" role="group" aria-label="显示方式">${button('canvas', '导图', `aria-pressed="${view === 'canvas'}"`)}${button('outline', '大纲', `aria-pressed="${view === 'outline'}"`)}</div>${editable() ? `<div class="mm-history">${button('undo', '↶', `aria-label="撤销" title="撤销 Ctrl+Z"${!undo.length ? ' disabled' : ''}`)}${button('redo', '↷', `aria-label="重做" title="重做 Ctrl+Shift+Z"${!redo.length ? ' disabled' : ''}`)}</div>` : ''}${button('focus', focusMode ? '退出专注' : '专注模式', `aria-pressed="${focusMode}"`)}</div>
            <div id="mindmapResults" class="mm-results" aria-live="polite"></div>
            <div class="mm-workspace"><div class="mm-board">${isLearning() ? '<div id="mindmapMobilePath" class="mm-mobile-path" aria-label="当前知识层级"></div>' : ''}<div id="mindmapViewport" class="mm-viewport" tabindex="0" aria-label="思维导图画布，可拖动平移，使用加减按钮缩放"${view === 'outline' ? ' hidden' : ''}><svg id="mindmapSvg" xmlns="http://www.w3.org/2000/svg" aria-label="知识节点关系"><g id="mindmapTransform"></g></svg></div><div id="mindmapOutline" class="mm-outline" tabindex="0" aria-label="知识大纲"${view !== 'outline' ? ' hidden' : ''}></div><div class="mm-board-footer"><span class="mm-gesture-hint">拖动画布 · 双击节点展开 · Ctrl + 滚轮缩放</span><div class="mm-zoom">${button('zoom-out', '−', 'aria-label="缩小"')}<output id="mindmapZoom">100%</output>${button('zoom-in', '＋', 'aria-label="放大"')}${button('fit', '适应')}${button('center', '定位')}${!isLearning() ? button('expand-all', '展开')+button('collapse-all', '收起') : ''}</div></div>${isLearning() ? `<button type="button" class="mm-reading-launch" data-mm-action="read-concept" aria-controls="mindmapInspector"><span id="mindmapSelectedTitle">${esc(selection().title)}</span><span>阅读讲解 →</span></button>` : ''}</div><aside id="mindmapInspector" class="mm-inspector" aria-label="节点详情" tabindex="-1"></aside></div>
            <p class="mm-footnote"><span class="mm-dot new"></span>未学习 <span class="mm-dot learning"></span>学习中 <span class="mm-dot mastered"></span>已掌握 <span>${isLearning() ? '实线：知识层级 · 虚线：概念关联 · 学习笔记保存在本机' : '已背与掌握分别统计 · 数据仅保存在当前浏览器'}</span></p>
            <input id="mindmapImport" type="file" accept=".json,application/json" hidden>
            <dialog id="mindmapNewDialog" class="mm-dialog"><form id="mindmapNewForm"><h2>新建思维导图</h2><p>从一个主题开始，慢慢建立自己的知识体系。</p><label>中心主题<input name="title" id="mindmapNewTitle" maxlength="160" required placeholder="例如：Java 并发知识梳理" autocomplete="off"></label><div>${button('cancel-new', '取消')}<button type="submit" class="mm-btn mm-primary">创建导图</button></div></form></dialog>
        </section>`;
    }
    function wrapTitle(text, maxUnits = 24) {
        const lines = []; let line = '', units = 0;
        for (const ch of String(text)) {
            const width = ch.charCodeAt(0) > 255 ? 2 : 1;
            if (units + width > maxUnits) { lines.push(line); line = ''; units = 0; }
            line += ch; units += width;
        }
        if (line) lines.push(line);
        if (lines.length > 2) return [lines[0], lines[1].slice(0, -1) + '…'];
        return lines;
    }
    function svgContent(map, layout, exporting = false, learning = false) {
        const positioned = new Map(layout.nodes.map(n => [n.id, n]));
        const statistics = map === activeMap ? activeStats : Core.statsByNode?.(map);
        const children = new Map(); map.nodes.forEach(n => { if(n.parentId) children.set(n.parentId, (children.get(n.parentId) || 0) + 1); });
        const edges = layout.edges.map(edge => {
            const a = positioned.get(edge.from), b = positioned.get(edge.to); if (!a || !b) return '';
            if(layout.mobile) return `<path d="M ${a.x+a.width/2} ${a.y+a.height} V ${b.y-12} H ${b.x+b.width/2} V ${b.y}" fill="none" stroke="var(--mm-edge)" stroke-width="1.5"/>`;
            const right = b.x > a.x, x1 = a.x + (right ? a.width : 0), x2 = b.x + (right ? 0 : b.width);
            const y1 = a.y + a.height / 2, y2 = b.y + b.height / 2, mid = (x1 + x2) / 2;
            return `<path d="M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}" fill="none" stroke="${exporting ? '#b6c9bb' : 'var(--mm-edge)'}" stroke-width="2"/>`;
        }).join('');
        const relations = [];
        if (learning && showRelations) {
            const seen = new Set();
            for (const n of layout.nodes) {
                const lesson = curriculum().byId.get(n.id);
                for (const id of [...lesson.prerequisites, ...lesson.related]) {
                    const other = positioned.get(id), key = [n.id,id].sort().join('|');
                    if (!other || seen.has(key) || n.parentId === id || other.parentId === n.id) continue;
                    seen.add(key);
                    const x1=n.x+n.width/2, y1=n.y+n.height, x2=other.x+other.width/2, y2=other.y+other.height;
                    relations.push(`<path class="mm-relation" d="M ${x1} ${y1} Q ${(x1+x2)/2} ${Math.max(y1,y2)+24} ${x2} ${y2}" fill="none" stroke="${exporting ? '#9d804d' : 'var(--mm-relation)'}" stroke-width="1.5" stroke-dasharray="5 5" opacity=".65"><title>${esc(n.title+' ↔ '+other.title)}</title></path>`);
                }
            }
        }
        return edges + relations.join('') + layout.nodes.map(n => {
            const s = statistics?.get(n.id) || Core.stats(map, n.id), childCount = children.get(n.id) || 0;
            const rootNode = n.id === (layout.rootId || map.rootId), isSelected = !exporting && selected === n.id;
            const fill = exporting ? rootNode ? '#294737' : '#faf9f5' : rootNode ? 'var(--mm-accent)' : 'var(--mm-panel)';
            const ink = rootNode ? exporting ? '#fff' : 'var(--mm-solid-ink)' : exporting ? '#24382b' : 'var(--mm-ink)';
            const summary = learning ? curriculum().byId.get(n.id).summary : '';
            const summaryLimit = layout.mobile ? Math.floor((n.width-32)/10) : 19;
            const subtitle = learning ? layout.mobile && childCount ? `${childCount} 个分支 · 点＋深入` : summary.slice(0,summaryLimit)+(summary.length>summaryLimit?'…':'') : childCount ? `${s.mastered}/${s.total} 已掌握 · ${childCount} 个分支` : names[n.status] + (n.questionId ? ' · 关联题目' : n.note ? ' · 有笔记' : '');
            const lines = wrapTitle(n.title,layout.mobile?Math.floor((n.width-32)/6.5):24);
            return `<g transform="translate(${n.x},${n.y})"${exporting ? '' : ` class="mm-node${isSelected ? ' selected' : ''}" data-mm-node="${esc(n.id)}" role="button" tabindex="0" aria-label="${esc(n.title + '，' + subtitle)}"${childCount ? ` aria-expanded="${!n.collapsed}"` : ''}`}>
                <title>${esc(n.title)}</title><rect width="${n.width}" height="${n.height}" rx="8" fill="${fill}" stroke="${isSelected ? 'var(--mm-accent)' : exporting ? '#cbd4cb' : 'var(--mm-line)'}" stroke-width="${isSelected ? 3 : 1}"/>
                ${!rootNode ? `<rect x="0" y="15" width="4" height="${n.height - 30}" rx="2" fill="${colors[n.status]}"/>` : ''}
                <text fill="${ink}" font-family="Microsoft YaHei, sans-serif" font-size="13" font-weight="${rootNode ? 700 : 500}">${lines.map((line, i) => `<tspan x="16" y="${lines.length === 1 ? 29 : 23 + i * 17}">${esc(line)}</tspan>`).join('')}</text>
                <text x="16" y="${n.height - 12}" fill="${rootNode ? exporting ? '#d8eadb' : 'var(--mm-solid-muted)' : exporting ? '#66766b' : 'var(--mm-muted)'}" font-family="Microsoft YaHei, sans-serif" font-size="10">${esc(subtitle)}</text>
                ${childCount && !exporting && (!layout.mobile || !rootNode) ? `<g data-mm-action="toggle" data-id="${esc(n.id)}" role="button" tabindex="0" aria-label="${n.collapsed ? '展开' : '收起'} ${esc(n.title)}" class="mm-fold" transform="translate(${n.width - 9},9)"><circle r="${layout.mobile?16:12}" fill="var(--mm-panel)" stroke="var(--mm-line)"/><path d="M -4 0 H 4${n.collapsed ? ' M 0 -4 V 4' : ''}" stroke="var(--mm-accent)" stroke-width="1.5"/></g>` : ''}</g>`;
        }).join('');
    }
    function getMindMapSVG(map) {
        const expanded = { ...map, nodes: map.nodes.map(n => ({ ...n, collapsed: false })) }, layout = Core.layout(expanded);
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${layout.width}" height="${layout.height + 56}" viewBox="0 0 ${layout.width} ${layout.height + 56}"><rect width="100%" height="100%" fill="#f4f3ef"/><text x="32" y="30" fill="#294737" font-family="Microsoft YaHei, sans-serif" font-size="16">${esc(map.title)} · 知识导图</text><g transform="translate(0,40)">${svgContent(expanded, layout, true, map === activeMap && isLearning())}</g></svg>`;
    }
    function transform() {
        const key=activeLayout?.mobile?activeMap.id+':phone:'+activeLayout.rootId:activeMap.id;
        if (!transforms.has(key)) transforms.set(key, { x: 0, y: 0, z: 1, initialized: false });
        return transforms.get(key);
    }
    function paintTransform() {
        const t = transform(), el = document.getElementById('mindmapTransform');
        if (el) el.setAttribute('transform', `translate(${t.x},${t.y}) scale(${t.z})`);
        const output = document.getElementById('mindmapZoom'); if (output) output.textContent = Math.round(t.z * 100) + '%';
    }
    function fit() {
        const el = document.getElementById('mindmapViewport'); if (!el || el.hidden || !activeLayout) return;
        const t = transform(), w = el.clientWidth, h = el.clientHeight;
        if (!w || !h) return;
        if (activeLayout.mobile) {
            t.z=Math.min(1,w/activeLayout.width);t.x=(w-activeLayout.width*t.z)/2;t.y=12;t.initialized=true;paintTransform();return;
        }
        t.z = Math.max(.001, Math.min(1.15, (w - 48) / activeLayout.width, (h - 48) / activeLayout.height));
        t.x = (w - activeLayout.width * t.z) / 2; t.y = (h - activeLayout.height * t.z) / 2; t.initialized = true; paintTransform();
    }
    function centerNode(id = selected) {
        if (view === 'outline') { document.querySelector('[data-mm-outline-selected="true"]')?.scrollIntoView({ block: 'nearest' }); return; }
        if (!activeLayout) return;
        const el = document.getElementById('mindmapViewport'), node = activeLayout.nodes.find(n => n.id === id); if (!node || !el) return;
        if (!el.clientWidth || !el.clientHeight) return;
        const t = transform(); t.z = Math.max(.75, t.z); t.x = el.clientWidth / 2 - (node.x + node.width / 2) * t.z; t.y = el.clientHeight / 2 - (node.y + node.height / 2) * t.z; paintTransform();
    }
    function zoom(factor, x, y) {
        const el = document.getElementById('mindmapViewport'); if (!el || el.hidden) return;
        const t = transform(), old = t.z; t.z = Math.max(.001, Math.min(2.5, old * factor));
        x ??= el.clientWidth / 2; y ??= el.clientHeight / 2;
        t.x = x - (x - t.x) * t.z / old; t.y = y - (y - t.y) * t.z / old; t.initialized = true; paintTransform();
    }
    function paintCanvas() {
        const viewport=document.getElementById('mindmapViewport');
        const mobile = onPhone() && isLearning() && root.JavaLearningCore.layoutMobile;
        // Reading hides the canvas; its zero width must not replace the last layout.
        if(mobile && viewport?.clientWidth) mobileCanvasWidth=viewport.clientWidth;
        if (!activeMap.nodes.some(n=>n.id===mobileBranch)) mobileBranch=activeMap.rootId;
        activeLayout = mobile ? root.JavaLearningCore.layoutMobile(activeMap,mobileBranch,mobileCanvasWidth) : Core.layout(activeMap);
        const group = document.getElementById('mindmapTransform'); if (group) group.innerHTML = svgContent(activeMap, activeLayout, false, isLearning());
        const path=document.getElementById('mindmapMobilePath');
        if(path) path.innerHTML=button('branch-up','← 上一级',mobileBranch===activeMap.rootId?'disabled':'')+`<span>${esc(activeMap.nodes.find(n=>n.id===mobileBranch)?.title || activeMap.title)}</span>`;
        paintTransform(); paintOutline();
    }
    function paintOutline() {
        const el = document.getElementById('mindmapOutline'); if (!el || view !== 'outline') return;
        const children = new Map(); activeMap.nodes.forEach(n => { if (!children.has(n.parentId)) children.set(n.parentId, []); children.get(n.parentId).push(n); });
        const rows = [];
        function visit(id, depth) {
            const n = activeMap.nodes.find(n => n.id === id), child = children.get(id) || [];
            rows.push(`<div class="mm-outline-row" style="--depth:${Math.min(depth, 7)}" data-mm-outline-selected="${selected === id}">${child.length ? button('toggle', n.collapsed ? '＋' : '−', `data-id="${esc(id)}" aria-label="${n.collapsed ? '展开' : '收起'} ${esc(n.title)}" aria-expanded="${!n.collapsed}"`) : '<span class="mm-outline-spacer"></span>'}<button type="button" data-mm-node="${esc(id)}"><span class="mm-dot ${n.status}"></span><span>${esc(n.title)}${isLearning() ? `<em>${esc(curriculum().byId.get(id).summary)}</em>` : ''}</span><small>${!isLearning() && child.length ? (activeStats?.get(id) || Core.stats(activeMap,id)).percent + '%' : names[n.status]}</small></button></div>`);
            if (!n.collapsed) child.forEach(c => visit(c.id, depth + 1));
        }
        visit(activeMap.rootId, 0); el.innerHTML = rows.join('');
    }
    function inspector() {
        const node = selection(), isRoot = node.id === activeMap.rootId, childCount = activeMap.nodes.filter(n => n.parentId === node.id).length;
        if (isLearning()) {
            const lesson = curriculum().byId.get(node.id);
            return root.JavaLearningView.inspector({node:lesson,index:curriculum(),entry:snapshot.learning.entries[node.id],questions:root.JavaLearningCore.relatedQuestions(lesson,currentRecords),hasChildren:!!childCount,reading:conceptReadings(node.id)});
        }
        const q = currentRecords.find(q => q.id === node.questionId), descendants = new Set([node.id, ...Core.descendantIds(activeMap, node.id)]);
        const breadcrumb = []; let parent = activeMap.nodes.find(n => n.id === node.parentId);
        while (parent) { breadcrumb.unshift(parent.title); parent = activeMap.nodes.find(n => n.id === parent.parentId); }
        return `<div class="mm-inspector-heading"><span class="mm-eyebrow">${editable() ? 'NODE / 节点编辑' : 'EXPLORE / 知识观察'}</span><span class="mm-node-count">${childCount ? childCount + ' 个分支' : '知识点'}</span></div>${breadcrumb.length ? `<p class="mm-breadcrumb">${esc(breadcrumb.join(' / '))}</p>` : ''}
            ${editable() ? `<label class="mm-field">${isRoot ? '中心主题 / 导图名称' : '节点名称'}<input id="mindmapNodeTitle" maxlength="160" value="${esc(node.title)}" autocomplete="off"></label><label class="mm-field">学习笔记<textarea id="mindmapNodeNote" rows="5" maxlength="10000" placeholder="用自己的话记录理解、例子和易错点…">${esc(node.note)}</textarea></label><p class="mm-field-hint">编辑后自动保存；中心主题即导图名称。</p><label class="mm-field">学习状态<select id="mindmapNodeStatus" aria-label="节点学习状态"${q ? ' disabled' : ''}>${Object.entries(names).map(([v,l])=>`<option value="${v}"${v === node.status ? ' selected' : ''}>${l}</option>`).join('')}</select></label>${q ? '<p class="mm-field-hint">已关联题库，状态随下方题目熟练度同步。</p>' : ''}<div class="mm-node-actions">${button('add-child', '＋ 子节点')}${button('add-sibling', '＋ 同级节点', isRoot ? 'disabled' : '')}</div><details class="mm-structure"><summary>调整结构</summary>${!isRoot ? `<label class="mm-field">所属节点<select id="mindmapParent" aria-label="所属节点">${activeMap.nodes.filter(n => !descendants.has(n.id)).map(n => `<option value="${esc(n.id)}"${n.id === node.parentId ? ' selected' : ''}>${esc(n.title)}</option>`).join('')}</select></label><div class="mm-node-actions">${button('move-up', '向前移动')}${button('move-down', '向后移动')}${button('delete-node', '删除分支', 'class="mm-danger"')}</div>` : '<p>中心主题不能移动或删除。</p>'}</details>` : `<h2>${esc(node.title)}</h2><div class="mm-branch-progress">${progressMarkup(activeMap, node.id)}</div><p class="mm-field-hint">题库总览随题目和学习记录更新。复制分支后，可以自由补充笔记和知识点。</p>${button('copy-branch', isRoot ? '复制总览到我的导图' : '复制这个分支到我的导图', 'class="mm-primary"')}`}
            ${childCount ? `<div class="mm-node-actions">${button('toggle', node.collapsed ? '展开分支' : '收起分支', `data-id="${esc(node.id)}"`)}${button('center', '在画布中定位')}</div>` : ''}
            <section class="mm-question-section"><h3>关联题目</h3>${q ? `<span class="mm-question-meta">${esc(q.category)}${q.number ? ' · ' + esc(q.number) : ''}${isMemorized(q.id) ? ' · 已背' : ''}</span><h4>${esc(q.question || '无标题笔记')}</h4><div class="mm-ratings" role="group" aria-label="题目熟练度">${[['hard','不会'],['fuzzy','模糊'],['known','掌握']].map(([v,l])=>button('rate', l, `data-level="${v}" aria-pressed="${typeof mastery !== 'undefined' && mastery[q.id]?.level === v}"`)).join('')}</div><details class="mm-answer"><summary>展开答案</summary><div>${typeof studyMarkdown === 'function' ? studyMarkdown(q.answer) : esc(q.answer)}</div></details>${button('open-question', '在题库中打开 ↗')}${editable() ? button('unlink', '取消关联') : ''}` : node.questionId ? '<p class="mm-field-hint">关联题目已删除或当前题库中不存在，导图内容仍保留。</p>' : '<p class="mm-field-hint">将知识点和实际题目联系起来。</p>'}
            ${editable() ? `<label class="mm-field mm-question-search">${q ? '更换关联题目' : '查找题库内容'}<input id="mindmapQuestionSearch" type="search" placeholder="输入题目、分类或题号" autocomplete="off"></label><div id="mindmapQuestionResults" class="mm-question-results"></div>${node.questionId && !q ? button('unlink', '取消失效关联') : ''}` : ''}</section>`;
    }
    function paintInspector() {
        const el = document.getElementById('mindmapInspector'); if (el) el.innerHTML = (isLearning() ? `<div class="mm-reading-back">${button('back-to-map','← 返回导图')}<span>知识讲解</span></div>` : '') + inspector();
        if(el?.dataset)el.dataset.conceptId=selected;
        if (typeof WorkspaceControls !== 'undefined') WorkspaceControls.enhance(el);
        for(const id of ['mindmapSelectedTitle','mindmapFocusTitle']) {const title=document.getElementById(id);if(title)title.textContent=selection().title;}
    }
    function readingMode(open, moveFocus = true) {
        mobileReading=open;
        const workspace=document.querySelector('.mindmap-view');
        if(workspace) workspace.dataset.reading=String(open && isLearning());
        if(focusMode) {
            if(!open&&focusSurface==='reading'&&workspace)focusedReadingPosition={id:selected,top:workspace.scrollTop};
            focusSurface=open?'reading':'map';focusSearchOpen=false;
            if(workspace){workspace.dataset.focusSurface=focusSurface;workspace.dataset.focusSearch='false';workspace.scrollTop=open&&focusedReadingPosition.id===selected?focusedReadingPosition.top:0;}
            workspace?.querySelectorAll('[data-mm-action="focus-map"],[data-mm-action="focus-read"]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.mmAction===(open?'focus-read':'focus-map'))));
        }
        if((onPhone() || focusMode) && moveFocus) {
            const target=document.getElementById(open?'mindmapInspector':'mindmapViewport');
            const visibleTarget=!open && view==='outline'?document.getElementById('mindmapOutline'):target;
            if(!focusMode)visibleTarget?.scrollIntoView?.({block:'start'});
            visibleTarget?.focus?.({preventScroll:true});
        }
    }
    function setFocus(enabled, surface) {
        if(!flushEdit())return;
        if(enabled&&!focusMode) focusOrigin={mobileReading,scrollY:root.scrollY||0,inspectorScroll:document.getElementById('mindmapInspector')?.scrollTop||0};
        focusMode=enabled;focusSearchOpen=false;
        if(enabled){focusSurface=surface||(isLearning()&&mobileReading?'reading':'map');mobileReading=focusSurface==='reading';}
        else mobileReading=focusOrigin?.mobileReading||false;
        refresh();
        if(!enabled) {
            root.scrollTo?.({top:focusOrigin?.scrollY||0,behavior:'instant'});
            const inspector=document.getElementById('mindmapInspector');if(inspector)inspector.scrollTop=focusOrigin?.inspectorScroll||0;
            const selector=isLearning()&&mobileReading?'[data-mm-action="focus-reading"]':'[data-mm-action="focus"]';
            document.querySelector(selector)?.focus?.({preventScroll:true});focusOrigin=null;
        }
    }
    function showFocusSearch() {
        if(!focusMode)return;
        readingMode(false,false);focusSearchOpen=true;
        const workspace=document.querySelector('.mindmap-view');if(workspace)workspace.dataset.focusSearch='true';
        document.getElementById('mindmapSearch')?.focus();
    }
    function paintSearch() {
        const el = document.getElementById('mindmapResults'); if (!el) return;
        if (!query.trim()) { el.innerHTML = ''; return; }
        const needle = query.trim().toLowerCase(), matches = (isLearning() ? curriculum().nodes : activeMap.nodes).filter(n => (n.title + ' ' + (isLearning() ? n.summary+' '+n.explanation+' '+(snapshot.learning.entries[n.id]?.note || '') : n.note)).toLowerCase().includes(needle));
        matches.sort((a,b)=>Number(b.title.toLowerCase().includes(needle))-Number(a.title.toLowerCase().includes(needle)));
        el.innerHTML = `<span class="mm-result-count">${matches.length ? matches.length + ' 个匹配，点击定位' + (matches.length > 50 ? '（显示前 50 个）' : '') : '没有找到匹配的知识点'}</span><div>${matches.slice(0,50).map(n => button('search-hit', esc(n.title), `data-id="${esc(n.id)}"`)).join('')}</div>`;
    }
    function refresh() {
        const target = document.querySelector('.mindmap-view'); if (!target) return;
        const offsets=['mindmapInspector','mindmapOutline'].map(id=>[id,document.getElementById(id)?.scrollTop||0]);
        const top=target.scrollTop;
        const sameConcept=document.getElementById('mindmapInspector')?.dataset.conceptId===selected;
        const openDetails=sameConcept?[...target.querySelectorAll('.mm-reading-more[open],.mm-lesson-utilities[open],.mm-lesson-practice[open]')].map(el=>el.className):[];
        target.outerHTML = renderMindMap(); mountMindMap();
        if (typeof WorkspaceControls !== 'undefined') WorkspaceControls.enhance(document.querySelector('.mindmap-view'));
        const current=document.querySelector('.mindmap-view');
        for(const name of openDetails){const detail=current?.getElementsByClassName(name)[0];if(detail)detail.open=true;}
        if(current&&sameConcept)current.scrollTop=top;
        if(sameConcept)for(const [id,offset] of offsets){const el=document.getElementById(id);if(el)el.scrollTop=offset;}
    }
    function setFolds(ids, collapsed) {
        if (editable()) changeMap(m => ({ ...m, nodes: m.nodes.map(n => ids.includes(n.id) ? { ...n, collapsed } : n) }), { history: false });
        else { const folds = isLearning() ? lessonFolds : knowledgeFolds; ids.forEach(id => folds.set(id, collapsed)); refresh(); }
    }
    function select(id, reveal = false) {
        if (!flushEdit()) return;
        selected = id;
        if (reveal) {
            if(onPhone() && isLearning()) mobileBranch=activeMap.nodes.find(n=>n.id===id)?.parentId || activeMap.rootId;
            const ids = []; let node = activeMap.nodes.find(n => n.id === id);
            while (node?.parentId) { ids.push(node.parentId); node = activeMap.nodes.find(n => n.id === node.parentId); }
            setFolds(ids, false);
        } else {
            document.querySelectorAll('.mm-node').forEach(el => {
                const active = el.dataset.mmNode === selected;
                el.classList.toggle('selected', active);
                const rect = el.querySelector('rect');
                rect.setAttribute('stroke', active ? 'var(--mm-accent)' : 'var(--mm-line)');
                rect.setAttribute('stroke-width', active ? '3' : '1');
            });
            paintOutline(); paintInspector();
        }
        if (reveal) centerNode(id);
        if (isLearning() && (onPhone() || focusMode)) readingMode(true);
    }
    function switchMap(id) {
        if (loadError) throw new Error(loadError);
        const next = copy(snapshot); next.activeMapId = id; persist(next);
        query = ''; selected = null; mobileReading=false; mobileBranch=null; refresh();
    }
    function learningTopic(id) {
        if (!curriculum().byId.has(id)) return;
        const next=copy(snapshot); next.activeMapId='java-learning'; next.learning.topicId=id;
        lessonFolds.set(id,false);
        selected=id; query=''; mobileReading=false; mobileBranch=id;focusSurface='map';focusSearchOpen=false; commit(next,{history:false});
    }
    function jumpConcept(id) {
        if (!curriculum().byId.has(id)) return;
        if (!activeMap.nodes.some(n=>n.id===id)) {
            let topic=curriculum().byId.get(id);
            while (topic.parentId && topic.parentId!=='java-root') topic=curriculum().byId.get(topic.parentId);
            learningTopic(topic.id);
            mapNow();
        }
        select(id,true);
    }
    function appendMap(map) {
        const next = copy(snapshot); next.maps.push(map); next.activeMapId = map.id;
        selected = map.rootId; query = ''; commit(next);
    }
    function newMap(title, template = false) {
        let map = Core.createMap(title, uid);
        if (template) for (const label of ['核心概念', '实现原理', '应用场景', '易错与对比']) map = Core.addNode(map, map.rootId, label, uid);
        appendMap(map);
    }
    function download(content, filename, type) {
        const url = URL.createObjectURL(new Blob([content], { type })), anchor = document.createElement('a');
        anchor.href = url; anchor.download = filename; document.body.appendChild(anchor); anchor.click(); anchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    async function importFile(file) {
        if (!file) return;
        if (file.size > 8 * 1024 * 1024) throw new Error('文件过大，请选择小于 8 MB 的导图 JSON。');
        const parsed = JSON.parse(await file.text());
        const incoming = Core.normalizeSnapshot(parsed.mindmaps || parsed);
        if (!incoming.maps.length && !incoming.learning) throw new Error('文件中没有可导入的个人导图或 Java 学习记录。');
        const next = copy(snapshot);
        // Imports append copies; they never silently replace existing maps or their IDs.
        for (const map of incoming.maps) next.maps.push(Core.cloneBranch(map, map.rootId, map.title, uid));
        if (incoming.learning) {
            const current = next.learning || Core.normalizeLearning(undefined);
            next.learning = {...current,entries:{...incoming.learning.entries,...current.entries}};
        }
        next.activeMapId = incoming.maps.length ? next.maps[next.maps.length - 1].id : 'java-learning'; selected = null; query = ''; commit(next);
        notify('已导入 '+incoming.maps.length+' 张导图'+(incoming.learning?'及 Java 学习记录':'')+'，原有内容已保留');
    }
    function action(name, el) {
        if (name !== 'raw-export' && name !== 'reset-storage' && !flushEdit()) { notify(savedLabel); return; }
        const node = selection();
        switch (name) {
            case 'focus-reading': setFocus(true,'reading'); break;
            case 'focus-map': readingMode(false); break;
            case 'focus-read': readingMode(true); break;
            case 'focus-search': showFocusSearch(); break;
            case 'focus-exit': setFocus(false); break;
            case 'read-concept': readingMode(true); break;
            case 'back-to-map': readingMode(false); break;
            case 'branch-up': {
                const parent=activeMap.nodes.find(n=>n.id===mobileBranch)?.parentId;
                if(parent) {mobileBranch=parent;selected=parent;paintCanvas();paintInspector();fit();} break;
            }
            case 'learning': switchMap('java-learning'); break;
            case 'lesson-topic': learningTopic(el.dataset.id); break;
            case 'lesson-jump': jumpConcept(el.dataset.id); break;
            case 'read-xiaolin': openConceptReading(el.dataset.id); break;
            case 'show-readings': {
                const target=document.querySelector('.mm-reading-sources');
                target?.scrollIntoView?.({block:'start',behavior:'instant'});target?.focus?.({preventScroll:true});break;
            }
            case 'lesson-state': {
                const next=copy(snapshot);
                next.learning.entries[node.id]={...(next.learning.entries[node.id] || {note:''}),status:el.dataset.status};
                commit(next); break;
            }
            case 'lesson-relations': showRelations=!showRelations; refresh(); break;
            case 'knowledge': switchMap('knowledge'); break;
            case 'personal': if (snapshot.maps.length) switchMap(snapshot.maps[0].id); else document.getElementById('mindmapNewDialog').showModal(); break;
            case 'new': document.getElementById('mindmapNewDialog').showModal(); break;
            case 'cancel-new': document.getElementById('mindmapNewDialog').close(); break;
            case 'template': newMap('我的知识梳理', true); break;
            case 'duplicate': case 'copy-branch': {
                const id = name === 'copy-branch' ? node.id : activeMap.rootId;
                let source = activeMap;
                if (isLearning()) {
                    const included = new Set([id,...Core.descendantIds(activeMap,id)]);
                    source = {...activeMap,rootId:id,nodes:activeMap.nodes.filter(n=>included.has(n.id)).map(n=>({...n,parentId:n.id===id?null:n.parentId}))};
                    for (const n of [...source.nodes]) {
                        const note = snapshot.learning.entries[n.id]?.note;
                        if (!note) continue;
                        const combined = n.note+'\n\n我的理解\n'+note;
                        if (Array.from(combined).length <= Core.LIMITS.note) n.note=combined;
                        else source.nodes.push({id:uid(),parentId:n.id,title:'我的理解',note,status:n.status,questionId:null,collapsed:false});
                    }
                }
                appendMap(Core.cloneBranch(source, id, (name === 'copy-branch' ? node.title : activeMap.title).slice(0,150) + ' · 副本', uid)); break;
            }
            case 'delete-map': if (confirm('删除“' + activeMap.title + '”？可通过撤销恢复。')) { const next = copy(snapshot); next.maps = next.maps.filter(m => m.id !== activeMap.id); next.activeMapId = next.maps[0]?.id || 'knowledge'; selected = null; commit(next); } break;
            case 'add-child': case 'add-sibling': {
                if (!editable() || (name === 'add-sibling' && !node.parentId)) break;
                const parentId = name === 'add-child' ? node.id : node.parentId;
                changeMap(m => { const before = new Set(m.nodes.map(n => n.id)); let result = Core.addNode(m, parentId, '新知识点', uid); result = Core.updateNode(result, parentId, { collapsed: false }); selected = result.nodes.find(n => !before.has(n.id)).id; return result; });
                centerNode(); const title = document.getElementById('mindmapNodeTitle'); title?.focus(); title?.select(); break;
            }
            case 'delete-node': if (node.parentId && confirm('删除“' + node.title + '”及其所有子节点？可通过撤销恢复。')) changeMap(m => { selected = node.parentId; return Core.removeNode(m, node.id); }); break;
            case 'move-up': case 'move-down': {
                const siblings = activeMap.nodes.filter(n => n.parentId === node.parentId), index = siblings.findIndex(n => n.id === node.id), next = index + (name === 'move-up' ? -1 : 1);
                if (next >= 0 && next < siblings.length) changeMap(m => Core.moveNode(m, node.id, node.parentId, next)); break;
            }
            case 'toggle': {
                const target = activeMap.nodes.find(n => n.id === (el?.dataset.id || selected));
                if(target && onPhone() && isLearning() && view==='canvas') {mobileBranch=target.id;selected=target.id;paintCanvas();paintInspector();fit();}
                else if(target) setFolds([target.id], !target.collapsed); break;
            }
            case 'expand-all': setFolds(activeMap.nodes.map(n => n.id), false); fit(); break;
            case 'collapse-all': setFolds(activeMap.nodes.filter(n => n.id !== activeMap.rootId).map(n => n.id), true); setFolds([activeMap.rootId], false); fit(); break;
            case 'search-hit': if(isLearning()) jumpConcept(el.dataset.id); else select(el.dataset.id, true); break;
            case 'canvas': case 'outline': view = name; refresh(); break;
            case 'zoom-in': zoom(1.2); break;
            case 'zoom-out': zoom(1 / 1.2); break;
            case 'fit': fit(); break;
            case 'center': centerNode(); break;
            case 'focus': setFocus(!focusMode); break;
            case 'undo': case 'redo': {
                const from = name === 'undo' ? undo : redo, to = name === 'undo' ? redo : undo;
                if (!from.length) break;
                const next = from[from.length - 1], before = copy(snapshot); persist(next); from.pop(); to.push(before); selected = null; refresh(); break;
            }
            case 'json-export': download(JSON.stringify(getMindMapSnapshot(), null, 2), '知识导图备份.json', 'application/json'); notify('已导出全部个人导图和 Java 学习记录'); break;
            case 'svg-export': download(getMindMapSVG(activeMap), activeMap.title.replace(/[\\/:*?"<>|]/g, '_') + '.svg', 'image/svg+xml'); break;
            case 'import': document.getElementById('mindmapImport').click(); break;
            case 'raw-export': download(rawStorage, '导图原始数据.txt', 'text/plain'); break;
            case 'reset-storage': if(confirm('请确认已导出原始数据。重新初始化将清除无法读取的导图数据，其他学习记录不受影响。')) { applyMindMapSnapshot(Core.normalizeSnapshot(undefined)); refresh(); } break;
            case 'link': changeMap(m => Core.updateNode(m, node.id, { questionId: el.dataset.id })); break;
            case 'unlink': changeMap(m => Core.updateNode(m, node.id, { questionId: null })); break;
            case 'rate': {
                const q = currentRecords.find(q => q.id === node.questionId); if (!q) break;
                const old = mastery[q.id]; mastery[q.id] = { level: el.dataset.level, reviewedAt: new Date().toISOString() };
                try { saveMastery(); } catch (error) { if (old) mastery[q.id] = old; else delete mastery[q.id]; throw error; }
                refresh(); notify('已同步题目熟练度'); break;
            }
            case 'lesson-question': case 'open-question': {
                const q = currentRecords.find(q => q.id === (name==='lesson-question' ? el.dataset.id : node.questionId)); if (!q) break;
                focusMode = false; openStudy(isMemorized(q.id) ? 'memorized' : 'bank');
                studyLinkedIds = [q.id]; studyLinkedTitle = (isLearning() ? 'Java 学习 · ' : '思维导图 · ') + node.title;
                collapsedNotes.delete(q.id); renderAll(); scrollToNote(q.id); break;
            }
        }
    }
    function safely(fn) { try { fn(); } catch (error) { notify(error.message || '操作失败，请检查导图数据'); updateSaveLabel(); } }
    function mountMindMap() {
        root.LearningFocus?.sync(document.querySelector('.mindmap-view'),focusMode,{kind:'mindmap',onExit:()=>safely(()=>setFocus(false)),onSearch:showFocusSearch,onEscape:()=>safely(()=>{
            if(focusSearchOpen){readingMode(false);return;}setFocus(false);
        })});
        const viewport = document.getElementById('mindmapViewport'); if (!viewport) return;
        mapNow(); paintCanvas(); paintInspector(); paintSearch();
        resizeObserver?.disconnect();
        if (typeof ResizeObserver !== 'undefined') {
            let lastWidth = viewport.clientWidth, lastHeight = viewport.clientHeight;
            resizeObserver = new ResizeObserver(() => {
                const w = viewport.clientWidth, h = viewport.clientHeight;
                if (!w || !h) return;
                if(restoringReadingView){lastWidth=w;lastHeight=h;return;}
                const mobile = onPhone() && isLearning();
                if (!!activeLayout.mobile !== mobile || (mobile && activeLayout.width !== Math.max(296,w))) {
                    paintCanvas();fit();lastWidth=w;lastHeight=h;return;
                }
                const t = transform();
                if (!t.initialized) fit();
                else if (lastWidth && lastHeight) { t.x += (w - lastWidth) / 2; t.y += (h - lastHeight) / 2; paintTransform(); }
                lastWidth = w; lastHeight = h;
            });
            resizeObserver.observe(viewport);
        }
        requestAnimationFrame(() => { if (viewport.isConnected && !transform().initialized) fit(); });
        viewport.addEventListener('wheel', event => {
            if (!event.ctrlKey && !event.metaKey) return;
            event.preventDefault(); const box = viewport.getBoundingClientRect(); zoom(event.deltaY < 0 ? 1.12 : 1 / 1.12, event.clientX - box.left, event.clientY - box.top);
        }, { passive: false });
        viewport.addEventListener('pointerdown', event => {
            if (event.button !== 0 || event.target.closest('[data-mm-node], [data-mm-action]')) return;
            activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); viewport.setPointerCapture(event.pointerId);
            const t = transform(); drag = { x: event.clientX, y: event.clientY, tx: t.x, ty: t.y };
            if (activePointers.size === 2) { const [a,b] = [...activePointers.values()]; pinch = { distance: Math.hypot(a.x-b.x,a.y-b.y), z: t.z }; }
            viewport.classList.add('dragging');
        });
        viewport.addEventListener('pointermove', event => {
            if (!activePointers.has(event.pointerId)) return;
            activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
            if (activePointers.size === 2 && pinch) {
                const [a,b] = [...activePointers.values()], box = viewport.getBoundingClientRect(), distance = Math.hypot(a.x-b.x,a.y-b.y);
                if (pinch.distance > 0) zoom((pinch.z * distance / pinch.distance) / transform().z, (a.x+b.x)/2-box.left, (a.y+b.y)/2-box.top);
            } else if (drag) { const t = transform(); t.x = drag.tx + event.clientX - drag.x; t.y = drag.ty + event.clientY - drag.y; t.initialized = true; paintTransform(); }
        });
        const end = event => { activePointers.delete(event.pointerId); pinch = null; drag = null; viewport.classList.remove('dragging'); };
        viewport.addEventListener('pointerup', end); viewport.addEventListener('pointercancel', end);
    }
    document.addEventListener('click', event => {
        if (!event.target.closest('.mindmap-view')) return;
        const control = event.target.closest('[data-mm-action]'), node = event.target.closest('[data-mm-node]');
        if (control) safely(() => action(control.dataset.mmAction, control));
        else if (node) safely(() => select(node.dataset.mmNode));
    });
    document.addEventListener('dblclick', event => {
        const node = event.target.closest('.mm-node');
        if (node && !event.target.closest('[data-mm-action]')) safely(() => action('toggle', { dataset: { id: node.dataset.mmNode } }));
    });
    document.addEventListener('input', event => {
        const el = event.target;
        if (el.id === 'mindmapSearch' && !event.isComposing) { query = el.value; paintSearch(); }
        if (el.id === 'mindmapLearningNote') {
            pendingEdit={kind:'learning',id:selected,note:el.value};
            savedLabel='正在编辑…'; updateSaveLabel(); clearTimeout(editTimer);
            if(!event.isComposing) editTimer=setTimeout(flushEdit,450);
        }
        if (el.id === 'mindmapQuestionSearch' && !event.isComposing) {
            const needle = el.value.trim().toLowerCase(), results = document.getElementById('mindmapQuestionResults');
            const matches = needle ? currentRecords.filter(q => [q.question,q.category,q.number].join(' ').toLowerCase().includes(needle)) : [];
            results.innerHTML = needle ? `<p>${matches.length ? '找到 ' + matches.length + ' 题，显示前 20 题' : '没有匹配的题目'}</p>` + matches.slice(0,20).map(q => button('link', `<small>${esc(q.category)} · ${esc(q.number || '')}</small>${esc(q.question || '无标题笔记')}`, `data-id="${esc(q.id)}"`)).join('') : '';
        }
        if (['mindmapNodeTitle', 'mindmapNodeNote'].includes(el.id)) {
            pendingEdit = { id: selected, title: document.getElementById('mindmapNodeTitle').value, note: document.getElementById('mindmapNodeNote').value };
            savedLabel = '正在编辑…'; updateSaveLabel(); clearTimeout(editTimer);
            if (!event.isComposing) editTimer = setTimeout(flushEdit, 450);
        }
    });
    document.addEventListener('compositionend', event => {
        if (event.target.closest('.mindmap-view')) event.target.dispatchEvent(new Event('input', { bubbles: true }));
    });
    document.addEventListener('change', event => {
        const el = event.target;
        if (el.id === 'mindmapImport') { const file = el.files[0]; el.value = ''; if (flushEdit()) importFile(file).catch(error => notify('导入失败：' + error.message)); return; }
        if (!['mindmapSelect','mindmapTopicSelect','mindmapNodeStatus','mindmapParent'].includes(el.id)) return;
        safely(() => {
            if (!flushEdit()) return;
            if (el.id === 'mindmapSelect') switchMap(el.value);
            if (el.id === 'mindmapTopicSelect') learningTopic(el.value);
            if (el.id === 'mindmapNodeStatus') changeMap(m => Core.updateNode(m, selected, { status: el.value }));
            if (el.id === 'mindmapParent') changeMap(m => Core.moveNode(m, selected, el.value));
        });
    });
    document.addEventListener('submit', event => {
        if (event.target.id !== 'mindmapNewForm') return;
        event.preventDefault(); safely(() => newMap(document.getElementById('mindmapNewTitle').value.trim()));
    });
    document.addEventListener('keydown', event => {
        if (event.defaultPrevented || event.isComposing || !event.target.closest('.mindmap-view')) return;
        const editing = event.target.closest('input,textarea,select,[contenteditable="true"],dialog');
        if (editing) return;
        const control = event.target.closest('[data-mm-action]'), node = event.target.closest('[data-mm-node]');
        if ((event.key === 'Enter' || event.key === ' ') && event.target instanceof SVGElement && (control || node)) {
            event.preventDefault(); safely(() => control ? action(control.dataset.mmAction, control) : select(node.dataset.mmNode)); return;
        }
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); safely(() => action(event.shiftKey ? 'redo' : 'undo')); }
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'y') { event.preventDefault(); safely(() => action('redo')); }
        if (event.key === 'Escape' && onPhone() && mobileReading) { readingMode(false); return; }
        if (event.key === 'Escape' && focusMode) { setFocus(false); }
        if (event.target.id === 'mindmapViewport') {
            if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) { event.preventDefault(); const t = transform(); t.x += event.key === 'ArrowLeft' ? 40 : event.key === 'ArrowRight' ? -40 : 0; t.y += event.key === 'ArrowUp' ? 40 : event.key === 'ArrowDown' ? -40 : 0; paintTransform(); }
            if (event.key === '+' || event.key === '=') zoom(1.2);
            if (event.key === '-') zoom(1 / 1.2);
        }
    });
    // Flush pending edits before leaving this workspace or exporting a site backup.
    document.addEventListener('click', event => { if (event.target.closest('[data-workspace-link]')) flushEdit(); }, true);
    root.addEventListener('pagehide', flushEdit);
    root.addEventListener('beforeunload', event => { if (!flushEdit()) { event.preventDefault(); event.returnValue = ''; } });
    root.renderMindMap = renderMindMap;
    root.mountMindMap = mountMindMap;
    root.getMindMapSnapshot = getMindMapSnapshot;
    root.applyMindMapSnapshot = applyMindMapSnapshot;
    root.getMindMapSVG = getMindMapSVG;
    root.returnToMindMapLearning = returnToMindMapLearning;
})(window);
