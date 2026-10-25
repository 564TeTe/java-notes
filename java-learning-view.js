/* Presentation only. Xiaolin HTML comes from the sanitized, local content build. */
(function (root, factory) {
    const view = factory();
    if (typeof module === 'object' && module.exports) module.exports = view;
    else root.JavaLearningView = view;
})(typeof window === 'undefined' ? globalThis : window, function () {
    'use strict';
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const get = (collection, id) => collection instanceof Map || typeof collection?.get === 'function' ? collection.get(id) : collection?.[id];
    const button = (action, text, attrs = '', classes = '') => `<button type="button" class="al-button${classes ? ' ' + classes : ''}" data-mm-action="${action}"${attrs ? ' ' + attrs : ''}>${text}</button>`;
    const lessonById = (model, id) => get(model.atlas?.byId, id);
    const topicById = (model, id) => get(model.atlas?.byTopic, id) || model.atlas?.topics?.find(topic => topic.id === id);
    const topicLessons = (model, topic) => (topic?.lessonIds || topic?.chapters?.flatMap(chapter => chapter.lessonIds || []) || []).map(id => lessonById(model, id)).filter(Boolean);
    const sourceEntry = (model, lesson) => model.readingState?.entries?.[lesson.sourceSectionId || lesson.id] || {};
    const conceptEntry = (model, lesson) => model.learning?.entries?.[lesson.id] || {};
    const statuses = {new:'未学',learning:'学习中',mastered:'已掌握'};
    const safeLink = (url, title, className = '') => /^https:\/\//i.test(String(url || '')) ? `<a${className ? ` class="${className}"` : ''} href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a>` : '';

    function search(model, topic) {
        return `<label class="al-search"><span class="al-sr">${topic ? '搜索当前专题' : '搜索全部知识'}</span><span aria-hidden="true">⌕</span><input id="mindmapSearch" type="search" autocomplete="off" placeholder="搜索知识" value="${esc(model.query || '')}"></label>`;
    }

    function progress(model, lesson) {
        if (lesson.sourceType === 'xiaolin') return sourceEntry(model, lesson).done ? '<span class="al-state is-mastered" aria-label="已读懂">✓</span>' : '';
        const status = conceptEntry(model, lesson).status;
        return status === 'mastered' ? '<span class="al-state is-mastered" aria-label="已掌握">✓</span>' : status === 'learning' ? '<span class="al-state is-learning" aria-label="学习中">◐</span>' : '';
    }

    function lessonLink(model, lesson, attrs = '', classes = '') {
        return button('lesson-jump', `<span>${esc(lesson.title)}</span>${progress(model, lesson)}`, `data-id="${esc(lesson.id)}"${lesson.id === model.selectedId && model.screen === 'lesson' ? ' aria-current="page"' : ''}${attrs ? ' ' + attrs : ''}`, `al-lesson-link${lesson.id === model.selectedId && model.screen === 'lesson' ? ' is-current' : ''}${classes ? ' ' + classes : ''}`);
    }

    function searchResults(model, topic) {
        const query = String(model.query || '').trim().toLocaleLowerCase();
        const pool = topic ? topicLessons(model, topic) : model.atlas?.lessons || [];
        const matches = pool.filter(lesson => {
            const parent = topicById(model, lesson.topicId), chapter = parent?.chapters?.find(item => item.id === lesson.chapterId), node = lesson.concept;
            const text = model.atlas?.searchText?.get(lesson.id) || [lesson.title, parent?.title, chapter?.title, node?.summary, node?.explanation, node?.example, node?.pitfall].filter(Boolean).join(' ').toLocaleLowerCase();
            return query.normalize('NFKC').split(/\s+/).every(term => text.includes(term));
        }).sort((a,b)=>Number(b.sourceType==='course')-Number(a.sourceType==='course'));
        return `<section class="al-search-results" aria-label="搜索结果">${matches.length ? `<ul class="al-result-list">${matches.map(lesson => `<li>${lessonLink(model, lesson)}<span class="al-result-topic">${esc(topicById(model, lesson.topicId)?.title || '')}</span></li>`).join('')}</ul>` : '<p class="al-empty">没有找到相关内容。</p>'}</section>`;
    }

    function stages(model) {
        const topics = model.atlas?.topics || [], covered = new Set();
        const result = (model.atlas?.stages || []).map(stage => {
            const ids = stage.topicIds || topics.filter(topic => topic.stageId === stage.id).map(topic => topic.id);
            const members = ids.map(id => topicById(model, id)).filter(topic => topic && !covered.has(topic.id));
            for (const topic of members) covered.add(topic.id);
            return {id:stage.id,title:stage.title,topics:members};
        }).filter(stage => stage.topics.length);
        for (const topic of topics) if (!covered.has(topic.id)) {
            let stage = result.find(item => item.id === topic.stageId);
            if (!stage) { stage = {id:topic.stageId || 'other',title:topic.stageTitle || '其他',topics:[]}; result.push(stage); }
            stage.topics.push(topic); covered.add(topic.id);
        }
        return result;
    }

    function knowledgeMap(model) {
        return `<nav class="al-map" aria-label="完整知识导图"><div class="al-map-root">Java</div><ol class="al-stage-list">${stages(model).map(stage => `<li class="al-stage" data-stage="${esc(stage.id)}"><h2 class="al-stage-title">${esc(stage.title)}</h2><ul class="al-map-topics">${stage.topics.map(topic => `<li>${button('lesson-topic',esc(topic.title),`data-id="${esc(topic.id)}"`,'al-topic')}</li>`).join('')}</ul></li>`).join('')}</ol></nav>`;
    }

    function routes(model) {
        return `<div class="al-routes">${(model.routes || []).map(route => `<section class="al-route${route.id === model.routeId ? ' is-current' : ''}" aria-labelledby="al-route-${esc(route.id)}"><h2 id="al-route-${esc(route.id)}">${esc(route.title)}</h2><ol class="al-route-steps">${(route.steps || []).map(step => {
            const item = lessonById(model,step.id);
            return item ? `<li>${button('route-step',esc(step.label || item.title),`data-route="${esc(route.id)}" data-id="${esc(step.id)}"`,'al-route-step')}</li>` : '';
        }).join('')}</ol></section>`).join('')}</div>`;
    }

    function home(model) {
        const last = lessonById(model,model.lastId), query = String(model.query || '').trim();
        return `<header class="al-header"><h1 tabindex="-1">Java 学习</h1>${search(model)}</header><div class="al-switch" role="group" aria-label="学习视图">${[['map','知识导图'],['routes','学习路线']].map(([mode,label]) => button('home-mode',label,`data-mode="${mode}" aria-pressed="${(model.homeView || 'map') === mode}"`)).join('')}</div>${query ? searchResults(model) : `${last ? `<div class="al-continue">${button('lesson-jump',`继续：${esc(last.title)}`,`data-id="${esc(last.id)}"`,'al-button-quiet')}</div>` : ''}${model.homeView === 'routes' ? routes(model) : knowledgeMap(model)}`}`;
    }

    function practice(model) {
        return Number(model.questionCount) > 0 ? button('practice','对应题型',model.category ? `title="${esc(model.category)}"` : '', 'al-practice') : '';
    }

    function directory(model, topic, location = '') {
        if (topic.courseChapters?.length) {
            const referenceActive = topic.referenceChapters.some(chapter => chapter.lessonIds.includes(model.selectedId));
            const primary = directory(model,{...topic,chapters:topic.courseChapters,courseChapters:null},location);
            const references = directory(model,{...topic,chapters:topic.referenceChapters,courseChapters:null},location+'-reference');
            return primary + `<details class="al-reference-directory" data-detail-key="${esc(location+'-references-'+topic.id)}"${referenceActive ? ' open' : ''}><summary>原文与概念查阅</summary>${references}</details>`;
        }
        const chapters = topic.chapters || [];
        const active = chapters.find(chapter => (chapter.lessonIds || []).includes(model.selectedId)) || chapters.find(chapter => chapter.id === model.activeChapterId) || chapters[0];
        const group = `${location}-directory-${topic.id}`;
        return `<nav class="al-directory" aria-label="${esc(topic.title)}完整目录">${chapters.map(chapter => `<details class="al-chapter" name="${esc(group)}" data-chapter-id="${esc(chapter.id)}" data-detail-key="${esc(`${location}-chapter-${topic.id}-${chapter.id}`)}"${location === 'topic' ? ` id="al-chapter-${esc(chapter.id)}"` : ''}${chapter === active ? ' open' : ''}><summary>${esc(chapter.title)}</summary><ul>${(chapter.lessonIds || []).map(id => lessonById(model,id)).filter(Boolean).map(lesson => `<li>${lessonLink(model,lesson)}</li>`).join('')}</ul></details>`).join('')}</nav>`;
    }

    function topic(model, current) {
        const query = String(model.query || '').trim();
        return `<div class="al-topbar">${button('home','‹ 知识导图','','al-back al-button-quiet')}${practice(model)}</div><header class="al-header"><h1 tabindex="-1">${esc(current.title)}</h1>${search(model,current)}</header>${query ? searchResults(model,current) : `<nav class="al-chapter-map" aria-label="${esc(current.title)}章节导图"><span class="al-chapter-root">${esc(current.title)}</span><ul>${(current.courseChapters?.length ? current.courseChapters : current.chapters || []).map(chapter => `<li>${button('jump-chapter',esc(chapter.title),`data-id="${esc(chapter.id)}"`,'al-chapter-node')}</li>`).join('')}</ul></nav>${directory(model,current,'topic')}`}`;
    }

    const paragraphs = values => values.map(value=>`<p>${esc(value)}</p>`).join('');
    function knowledgeLinks(model, selected) {
        const course = selected.course;
        const group = (label,links) => {
            const seen = new Set();
            const items = links.map(link=>{
                const target = lessonById(model,link.id);
                if (!target || target.id===selected.id || seen.has(target.id)) return '';
                seen.add(target.id);
                return `<li>${lessonLink(model,target)}<p>${esc(link.why)}</p></li>`;
            }).join('');
            return items ? `<section><h3>${label}</h3><ul>${items}</ul></section>` : '';
        };
        return `<details class="al-knowledge-links" data-detail-key="knowledge-${esc(selected.id)}"><summary>知识联系</summary>${group('前置知识',course.prerequisites)}${group('关联知识',course.related)}</details>`;
    }
    function questions(items,prefix) {
        return items.map((item,i)=>`<details class="al-question" data-detail-key="${esc(prefix+'-'+i)}"><summary>${esc(item.question)}</summary><p>${esc(item.answer)}</p></details>`).join('');
    }
    function courseBody(model, selected) {
        const course=selected.course, example=course.example;
        const references=(selected.readingIds||[]).map(id=>lessonById(model,id)).filter(Boolean);
        return `<div class="al-content al-course-content"><p>${esc(course.intro)}</p>${knowledgeLinks(model,selected)}${paragraphs(course.explanation)}<h2>过程</h2><ol class="al-course-flow">${course.flow.map(step=>`<li><strong>${esc(step.title)}</strong><p>${esc(step.text)}</p></li>`).join('')}</ol><h2>代码与结果</h2><pre><code>${esc(example.code)}</code></pre><div class="al-example-result"><h3>观察结果</h3><p>${esc(example.output)}</p></div><p>${esc(example.explanation)}</p><h2>容易混淆的地方</h2><ul>${course.boundaries.map(item=>`<li>${esc(item)}</li>`).join('')}</ul><h2>面试怎么讲</h2><p>${esc(course.answer)}</p><div class="al-followups">${questions(course.followUps,'followup-'+selected.id)}</div></div>${references.length ? `<details class="al-reading-links" data-detail-key="readings-${esc(selected.id)}"><summary>小林原文</summary><ul>${references.map(item=>`<li>${item.kind==='lesson' ? button('read-xiaolin',esc(item.title),`data-id="${esc(item.id)}"`,'al-lesson-link') : safeLink(item.source,item.title)}</li>`).join('')}</ul></details>` : ''}<details class="al-course-sources" data-detail-key="sources-${esc(selected.id)}"><summary>参考文档</summary>${course.sources.map(source=>safeLink(source.url,source.title)).join('')}</details>`;
    }
    function recall(model, selected) {
        const course=selected.course;
        return `<div class="al-recall">${course ? `<h2>试着讲清楚</h2>${questions(course.checks,'check-'+selected.id)}<h2>继续追问</h2>${questions(course.followUps,'recall-'+selected.id)}` : ''}${button('panel','查看讲解','data-panel="read"','al-button-quiet')}</div>`;
    }

    function conceptBody(model, node) {
        if (!node) return '';
        const relatedIds = [...new Set([...(node.prerequisites || []),...(node.related || [])])];
        const related = relatedIds.map(id => lessonById(model,id)).filter(lesson => lesson && lesson.id !== node.id);
        const text = node.explanation || node.summary || '';
        return `<div class="al-concept-body">${String(text).split(/\n\s*\n/).filter(Boolean).map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}${node.example ? `<h2>示例</h2><pre><code>${esc(node.example)}</code></pre>` : ''}${node.pitfall ? `<h2>易错点</h2><p>${esc(node.pitfall)}</p>` : ''}${related.length ? `<div class="al-related"><h2>相关知识</h2>${related.map(lesson => lessonLink(model,lesson)).join('')}</div>` : ''}${node.sources?.some(source => /^https:\/\//i.test(source.url)) ? `<div class="al-sources">${node.sources.map(source => safeLink(source.url,source.title || '参考资料')).join('')}</div>` : ''}</div>`;
    }

    function content(model, lesson) {
        if (lesson.sourceType === 'course') return courseBody(model,lesson);
        if (lesson.sourceType === 'concept') {
            const readings = (lesson.readingIds || []).map(id => lessonById(model,id)).filter(item => item?.sourceType === 'xiaolin');
            const courses=(lesson.courseIds||[]).map(id=>lessonById(model,id)).filter(Boolean);
            return `${courses.length ? `<div class="al-course-return">${courses.map(item=>lessonLink(model,item)).join('')}</div>` : ''}<div class="al-content">${conceptBody(model,lesson.concept || get(model.index?.byId,lesson.id))}</div>${readings.length ? `<section class="al-related al-reading-links"><h2>相关讲解</h2>${readings.map(item => lessonLink(model,item)).join('')}</section>` : ''}`;
        }
        if (model.contentStatus === 'error') return `<div class="al-content-error" role="alert"><p>内容未能加载。</p>${button('retry','重试')}</div>`;
        if (!model.content || model.contentStatus === 'loading') return '<div class="al-content-loading" role="status">正在加载…</div>';
        const supplements = (lesson.conceptIds || []).map(id => lessonById(model,id)?.concept || get(model.index?.byId,id)).filter(Boolean);
        const courses=(lesson.courseIds||[]).map(id=>lessonById(model,id)).filter(Boolean);
        return `${courses.length ? `<div class="al-course-return">${courses.map(item=>lessonLink(model,item)).join('')}</div>` : ''}<div class="al-content">${model.content.html || ''}</div>${supplements.length ? `<details class="al-supplement" data-detail-key="supplement-${esc(lesson.id)}"><summary>理解补充</summary>${supplements.map(node => `<section><h2>${esc(node.title)}</h2>${conceptBody(model,node)}</section>`).join('')}</details>` : ''}`;
    }

    function routeSequence(model) {
        const route = (model.routes || []).find(item => item.id === model.routeId);
        return route ? [...new Set((route.steps || []).map(step => step.id))].map(id => lessonById(model,id)).filter(Boolean) : null;
    }

    function currentRoute(model, selected) {
        const route = (model.routes || []).find(item => item.id === model.routeId);
        if (!route || !(route.steps || []).some(step => step.id === selected.id)) return '';
        return `<details class="al-current-route" data-detail-key="route-${esc(route.id)}"><summary>${esc(route.title)}</summary><ol class="al-route-steps">${(route.steps || []).map(step => {
            const item = lessonById(model,step.id);
            if (!item) return '';
            const active = item.id === selected.id;
            return `<li>${button('route-step',esc(step.label || item.title),`data-route="${esc(route.id)}" data-id="${esc(item.id)}"${active ? ' aria-current="step"' : ''}`,`al-route-step${active ? ' is-current' : ''}`)}</li>`;
        }).join('')}</ol></details>`;
    }

    function lessonNavigation(model, lesson, current) {
        const routed = routeSequence(model);
        const sequence = routed?.some(item => item.id === lesson.id) ? routed : lesson.sourceType==='course' ? current.courseLessonIds.map(id=>lessonById(model,id)) : topicLessons(model,current);
        const position = sequence.findIndex(item => item.id === lesson.id);
        if (position < 0) return '';
        const previous = sequence[position - 1], next = sequence[position + 1];
        const nav = (item,label) => button(routed === sequence ? 'route-step' : 'lesson-jump',`<span>${label}</span><strong>${esc(item.title)}</strong>`,`data-id="${esc(item.id)}"${routed === sequence ? ` data-route="${esc(model.routeId)}"` : ''}`);
        return `<nav class="al-lesson-nav" aria-label="阅读翻页">${previous ? nav(previous,'上一节') : '<span></span>'}${next ? nav(next,'下一节') : button('lesson-topic','返回目录',`data-id="${esc(current.id)}"`)}</nav>`;
    }

    function learningState(model, lesson) {
        const entry = lesson.sourceType === 'xiaolin' ? sourceEntry(model,lesson) : conceptEntry(model,lesson);
        const status = statuses[entry.status] ? entry.status : 'new';
        return `<section class="al-learning-state"><div class="al-study-state" role="group" aria-label="学习状态">${lesson.sourceType === 'xiaolin' ? button('reading-state',entry.done ? '✓ 已读懂' : '标记读懂',`aria-pressed="${!!entry.done}"`) : Object.entries(statuses).map(([value,label]) => button('lesson-state',label,`data-status="${value}" aria-pressed="${status === value}"`)).join('')}</div><span class="al-save" data-learning-save role="status">${esc(model.saveLabel || '')}</span></section>`;
    }

    function lesson(model, selected) {
        const current = topicById(model,selected.topicId);
        if (!current) return home(model);
        const source = selected.sourceType === 'xiaolin' ? selected.source || model.content?.source : '';
        return `<div class="al-topbar">${button('lesson-topic',`‹ ${esc(current.title)}`,`data-id="${esc(current.id)}"`,'al-back al-button-quiet')}<div class="al-topbar-actions">${practice(model)}${button(model.focused ? 'focus-exit' : 'focus',model.focused ? '退出专注' : '专注阅读',model.focused ? 'data-learning-focus-initial' : '', 'al-focus-toggle')}</div></div><div class="al-lesson-layout"><aside class="al-sidebar">${directory(model,current,'sidebar')}</aside><article class="al-article"><details class="al-mobile-directory" data-detail-key="mobile-directory-${esc(current.id)}"><summary>目录</summary>${directory(model,current,'mobile')}</details>${currentRoute(model,selected)}<header class="al-lesson-header"><h1 tabindex="-1">${esc(selected.title)}</h1><div class="al-lesson-tools"><div class="al-switch" role="group" aria-label="学习方式">${[['read','学习'],['recall','复述']].map(([panel,label]) => button('panel',label,`data-panel="${panel}" aria-pressed="${(model.panel || 'read') === panel}"`)).join('')}</div>${safeLink(source,'原文','al-source-link')}</div></header>${model.panel === 'recall' ? recall(model,selected) : content(model,selected)}${learningState(model,selected)}${lessonNavigation(model,selected,current)}</article></div>`;
    }

    // Kept for integrations that render concept-to-Xiaolin links independently.
    function readings(reading) {
        const sections = reading?.sections || [], branches = reading?.branches || [];
        if (!sections.length && !branches.length) return '';
        const row = item => button('read-xiaolin',`${item.done ? '<span aria-label="已读懂">✓</span>' : ''}${esc(item.title)}`,`data-id="${esc(item.id)}"`,'al-reading-link');
        return `<section class="al-readings"><h2>小林讲解</h2><span>${Number(sections.length ? reading.done : reading.branchDone) || 0} / ${Number(sections.length ? reading.total : reading.branchTotal) || sections.length} 已读懂</span>${sections.slice(0,3).map(row).join('')}${sections.length > 3 ? `<details data-detail-key="readings-${esc(sections.map(item => item.id).join('|'))}"><summary>其余 ${sections.length - 3} 篇</summary>${sections.slice(3).map(row).join('')}</details>` : ''}${!sections.length ? branches.map(item => button('lesson-jump',esc(item.title),`data-id="${esc(item.id)}"`,'al-reading-link')).join('') : ''}</section>`;
    }

    function render(model) {
        const selected = lessonById(model,model.selectedId), current = topicById(model,model.topicId);
        const screen = model.screen === 'lesson' && selected ? 'lesson' : model.screen === 'topic' && current ? 'topic' : 'home';
        const error = model.loadError ? `<div class="al-error" role="alert"><strong>学习记录暂时无法读取</strong><p>${esc(model.loadError.message || model.loadError)}</p></div>` : '';
        return error + (screen === 'lesson' ? lesson(model,selected) : screen === 'topic' ? topic(model,current) : home(model));
    }

    return {render,readings};
});
