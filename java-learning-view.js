/* Pure, mobile-first views for interview learning. Storage and navigation live in the controller. */
(function (root, factory) {
    const view = factory();
    if (typeof module === 'object' && module.exports) module.exports = view;
    else root.JavaLearningView = view;
})(typeof window === 'undefined' ? globalThis : window, function () {
    'use strict';
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const statuses = {new:'还没学',learning:'再巩固',mastered:'能讲清'};
    const button = (action, content, attrs = '', classes = '') => `<button type="button" class="il-button${classes ? ' ' + classes : ''}" data-mm-action="${action}"${attrs ? ' ' + attrs : ''}>${content}</button>`;
    const entryFor = (model, id) => model.learning?.entries?.[id] || {status:'new',note:''};
    const getNode = (model, id) => model.index.byId.get(id);
    const getPath = (model, id) => (model.paths?.topics || []).find(path => path.id === id);
    const children = (model, id) => model.index.nodes.filter(node => node.parentId === id);

    function topicFor(model, node) {
        let current = node;
        const seen = new Set();
        while (current && current.parentId !== 'java-root' && !seen.has(current.id)) {
            seen.add(current.id);
            current = getNode(model, current.parentId);
        }
        return current?.parentId === 'java-root' ? current : null;
    }

    function descendants(model, id) {
        const result = [], visit = [id], seen = new Set([id]);
        while (visit.length) {
            const parentId = visit.shift();
            for (const node of children(model, parentId)) {
                if (seen.has(node.id)) continue;
                seen.add(node.id); result.push(node); visit.push(node.id);
            }
        }
        return result;
    }

    function essentials(model, topicId) {
        const allowed = new Set(descendants(model, topicId).map(node => node.id));
        const ids = [...new Set(getPath(model, topicId)?.essentials || [])].filter(id => allowed.has(id));
        return ids.length ? ids.map(id => getNode(model, id)) : descendants(model, topicId).filter(node => !children(model, node.id).length);
    }

    function saveStatus(model) {
        return `<span class="il-save" data-learning-save role="status">${esc(model.saveLabel || '学习记录保存在本机')}</span>`;
    }

    function search(model, topic) {
        return `<label class="il-search"><span class="il-sr">${topic ? '搜索当前专题' : '搜索 Java 面试知识'}</span><span aria-hidden="true">⌕</span><input id="mindmapSearch" type="search" autocomplete="off" placeholder="${topic ? '搜索这个专题的知识点' : '搜索知识点，例如 HashMap'}" value="${esc(model.query || '')}"></label>`;
    }

    function readingShortcut(reading) {
        const first = reading?.sections?.[0];
        if (!first) return '';
        return `<div class="il-reading-shortcut">${button('read-xiaolin', '读小林讲解 ↗', `data-id="${esc(first.id)}" title="${esc(first.title)}"`, 'il-button-quiet')}<span>${Number(reading.total) || reading.sections.length} 篇对应原文 · ${Number(reading.done) || 0} 篇已读懂</span></div>`;
    }

    function conceptRow(model, node, number, className = '') {
        const card = model.paths?.concepts?.[node.id], status = entryFor(model, node.id).status;
        return button('lesson-jump', `${number ? `<span class="il-topic-number" aria-hidden="true">${String(number).padStart(2, '0')}</span>` : ''}<span class="il-row-copy"><strong>${esc(node.title)}</strong><small>${esc(card?.question || node.summary)}</small></span><span class="il-row-meta"><span class="il-status-dot is-${esc(statuses[status] ? status : 'new')}" aria-hidden="true"></span><span>${statuses[status] || statuses.new}</span><span aria-hidden="true">›</span></span>`, `data-id="${esc(node.id)}"`, `il-concept-row ${className}`.trim());
    }

    function searchResults(model, topic) {
        const query = String(model.query || '').trim().toLocaleLowerCase();
        if (!query) return '';
        const pool = topic ? descendants(model, topic.id) : model.index.nodes.filter(node => node.parentId && node.parentId !== 'java-root');
        const matches = pool.filter(node => `${node.title} ${node.summary} ${model.paths?.concepts?.[node.id]?.question || ''}`.toLocaleLowerCase().includes(query));
        return `<section class="il-section il-search-results" aria-label="搜索结果"><div class="il-section-heading"><h2>搜索结果</h2><span>${matches.length} 个知识点</span></div>${matches.length ? `<div class="il-essential-list">${matches.map(node => conceptRow(model, node)).join('')}</div>` : '<p class="il-empty">没有找到相关知识点，试试更短的关键词。</p>'}</section>`;
    }

    function home(model) {
        const topics = model.paths?.topics?.length ? model.paths.topics : (model.index.topics || children(model, 'java-root'));
        const last = getNode(model, model.lastId), lastTopic = topicFor(model, last);
        const query = String(model.query || '').trim();
        return `<div class="il-topbar">${saveStatus(model)}</div><header class="il-heading"><p class="il-eyebrow">从理解到讲清楚</p><h1 tabindex="-1">Java 面试学习</h1><p class="il-description">选一个专题，理清回答要点，再练对应题型。</p></header>${search(model)}
            ${query ? searchResults(model) : `${last && lastTopic && last.id !== lastTopic.id ? button('lesson-jump', `<span class="il-row-copy"><small>接着上次学 · ${esc(getPath(model, lastTopic.id)?.title || lastTopic.title)}</small><strong>${esc(last.title)}</strong></span><span aria-hidden="true">继续 →</span>`, `data-id="${esc(last.id)}"`, 'il-continue') : ''}
            <section class="il-section"><div class="il-section-heading"><h2>选择面试专题</h2><span>${topics.length} 个专题</span></div><div class="il-topic-list">${topics.map((path, position) => {
                const node = getNode(model, path.id);
                if (!node) return '';
                const focus = essentials(model, path.id), mastered = focus.filter(item => entryFor(model, item.id).status === 'mastered').length;
                return button('lesson-topic', `<span class="il-topic-number" aria-hidden="true">${String(position + 1).padStart(2,'0')}</span><span class="il-row-copy"><strong>${esc(path.title || node.title)}</strong><small>${esc(path.goal || path.description || node.summary)}</small><span class="il-progress"><span>${focus.length} 个核心问题</span><span>${mastered} / ${focus.length} 能讲清</span></span></span><span class="il-row-arrow" aria-hidden="true">›</span>`, `data-id="${esc(node.id)}"`, 'il-topic-row');
            }).join('')}</div></section>`}`;
    }

    function practice(model) {
        if (!(Number(model.questionCount) > 0)) return '';
        return button('practice', `<span class="il-row-copy"><strong>练${model.category ? '这个专题的题' : '题库里的题'}</strong><small>${esc(model.category || '全部题型')} · ${Number(model.questionCount)} 道题</small></span><span aria-hidden="true">进入题库 →</span>`, '', 'il-practice');
    }

    function structure(model, topicId) {
        function branch(node, ancestors = new Set()) {
            if (ancestors.has(node.id)) return '';
            const next = new Set([...ancestors, node.id]), nested = children(model, node.id);
            const status = entryFor(model, node.id).status;
            const link = button('lesson-jump', `<span>${esc(node.title)}</span><span class="il-status-dot is-${esc(statuses[status] ? status : 'new')}" aria-label="${statuses[status] || statuses.new}"></span>`, `data-id="${esc(node.id)}"`, 'il-tree-link');
            if (!nested.length) return `<li>${link}</li>`;
            return `<li><details><summary>${esc(node.title)}<span>${nested.length} 个分支</span></summary>${button('lesson-jump', '先读概念概览', `data-id="${esc(node.id)}"`, 'il-button-quiet')}<ul>${nested.map(child => branch(child, next)).join('')}</ul></details></li>`;
        }
        return `<details class="il-structure"><summary>展开完整知识结构<span>${descendants(model, topicId).length} 个知识点</span></summary><p class="il-description">核心问题之外，按需要补充这些知识。</p><ul class="il-tree">${children(model, topicId).map(node => branch(node)).join('')}</ul></details>`;
    }

    function topic(model, node) {
        const path = getPath(model, node.id), focus = essentials(model, node.id), query = String(model.query || '').trim();
        return `<div class="il-topbar">${button('home','‹ 全部专题','','il-back il-button-quiet')}${saveStatus(model)}</div><header class="il-heading"><p class="il-eyebrow">面试专题</p><h1 tabindex="-1">${esc(path?.title || node.title)}</h1><p class="il-description">${esc(path?.goal || node.summary)}</p></header>${search(model, node)}
            ${query ? searchResults(model, node) : `<section class="il-section"><div class="il-section-heading"><h2>先掌握这些</h2><span>${focus.length} 个核心问题</span></div><p class="il-description">看问法、讲要点，再检查能否接住追问。</p><div class="il-essential-list">${focus.map((item, position) => conceptRow(model, item, position + 1)).join('')}</div></section>${readings(model.reading)}${practice(model)}${structure(model, node.id)}`}`;
    }

    function readings(reading) {
        const sections = reading?.sections || [], branches = reading?.branches || [];
        if (!sections.length && !branches.length) return '';
        const row = item => button('read-xiaolin', `<span class="il-reading-status${item.done ? ' is-done' : ''}" aria-label="${item.done ? '已读懂' : '未标记读懂'}">${item.done ? '✓' : '○'}</span><span class="il-row-copy"><strong>${esc(item.title)}</strong><small>${esc(item.topicTitle)} · ${esc(item.chapterTitle)}</small></span><span aria-hidden="true">↗</span>`, `data-id="${esc(item.id)}"`, 'il-reading-row');
        const total = sections.length ? Number(reading.total) || sections.length : Number(reading.branchTotal) || 0;
        const done = Number(sections.length ? reading.done : reading.branchDone) || 0;
        const branchRows = !sections.length ? branches.map(item => button('lesson-jump', `<span class="il-row-copy"><strong>${esc(item.title)}</strong><small>小林讲解 · ${Number(item.done) || 0} / ${Number(item.total) || 0} 已读懂</small></span><span aria-hidden="true">查看 →</span>`, `data-id="${esc(item.id)}"`, 'il-reading-row')).join('') : '';
        return `<section class="il-section il-readings" aria-label="小林深入阅读"><div class="il-section-heading"><h2>小林原文 · 深入理解</h2><span>${done} / ${total} 已读懂</span></div>${sections.slice(0, 3).map(row).join('')}${sections.length > 3 ? `<details class="il-details il-reading-more"><summary>其余 ${sections.length - 3} 篇讲解</summary>${sections.slice(3).map(row).join('')}</details>` : ''}${branchRows}</section>`;
    }

    function lessonNavigation(model, node, topicNode) {
        if (!topicNode) return '';
        const main = essentials(model, topicNode.id);
        const sequence = main.some(item => item.id === node.id) ? main : descendants(model, topicNode.id);
        const position = sequence.findIndex(item => item.id === node.id);
        if (position < 0) return '';
        const previous = sequence[position - 1], next = sequence[position + 1];
        return `<nav class="il-lesson-nav" aria-label="知识点导航">${previous ? button('lesson-jump', `<small>上一问</small><strong>${esc(previous.title)}</strong>`, `data-id="${esc(previous.id)}"`) : '<span></span>'}<span class="il-lesson-position">${position + 1} / ${sequence.length}</span>${next ? button('lesson-jump', `<small>下一问 →</small><strong>${esc(next.title)}</strong>`, `data-id="${esc(next.id)}"`) : button('lesson-topic', '<small>这组看完了</small><strong>回到专题 →</strong>', `data-id="${esc(topicNode.id)}"`)}</nav>`;
    }

    function lesson(model, node) {
        const topicNode = topicFor(model, node), path = getPath(model, topicNode?.id), card = model.paths?.concepts?.[node.id], entry = entryFor(model, node.id);
        const answer = card?.answer?.length ? card.answer : [...new Set([node.summary, node.explanation].filter(Boolean))];
        const related = [...new Set([...(node.prerequisites || []), ...(node.related || [])])].map(id => getNode(model, id)).filter(item => item && item.id !== node.id && item.id !== 'java-root' && item.parentId !== 'java-root').slice(0, 4);
        const sources = (node.sources || []).filter(source => /^https:\/\//i.test(source.url));
        return `<div class="il-topbar">${topicNode ? button('lesson-topic', `‹ ${esc(path?.title || topicNode.title)}`, `data-id="${esc(topicNode.id)}"`, 'il-back il-button-quiet') : button('home','‹ 全部专题','','il-back il-button-quiet')}${button(model.focused ? 'focus-exit' : 'focus', model.focused ? '退出专注' : '专注阅读', '', 'il-focus-toggle')}</div>
            <header class="il-heading il-lesson-heading"><p class="il-eyebrow">${card ? '面试核心问题' : '补充知识'}</p><h1 tabindex="-1">${esc(node.title)}</h1>${saveStatus(model)}${readingShortcut(model.reading)}</header>
            <section class="il-question" aria-label="面试问法"><h2>面试怎么问</h2><p>${esc(card?.question || `怎样解释${node.title}？`)}</p></section>
            <details class="il-answer" open><summary>回答要点<span>合上后，试着自己讲一遍</span></summary><ol>${answer.map(point => `<li>${esc(point)}</li>`).join('')}</ol></details>
            ${card?.followUps?.length ? `<section class="il-section il-followups"><div class="il-section-heading"><h2>接着可能会追问</h2></div>${card.followUps.map(item => `<details class="il-details"><summary>${esc(item.question)}</summary><p>${esc(item.answer)}</p></details>`).join('')}</section>` : ''}
            ${readings(model.reading)}
            <details class="il-details il-understanding"><summary>理解原理与示例<span>把答案讲明白</span></summary><div class="il-detail-body"><p>${esc(node.explanation || node.summary)}</p>${node.example ? `<h3>结合代码看</h3><pre class="il-example"><code>${esc(node.example)}</code></pre>` : ''}${node.pitfall ? `<aside class="il-pitfall"><h3>别在这里答错</h3><p>${esc(node.pitfall)}</p></aside>` : ''}${related.length ? `<div class="il-related"><h3>联系起来理解</h3>${related.map(item => button('lesson-jump', esc(item.title), `data-id="${esc(item.id)}"`, 'il-button-quiet')).join('')}</div>` : ''}${sources.length ? `<div class="il-sources"><h3>官方参考</h3>${sources.map(source => `<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)} ↗</a>`).join('')}</div>` : ''}</div></details>
            ${practice(model)}
            <section class="il-section il-notes"><div class="il-section-heading"><h2>用自己的话讲一遍</h2><span>自动保存</span></div><label for="mindmapLearningNote" class="il-sr">这个知识点的面试回答和笔记</label><textarea id="mindmapLearningNote" rows="3" maxlength="10000" placeholder="写下你的回答，或者还容易卡住的地方…">${esc(entry.note || '')}</textarea></section>
            <section class="il-section il-mastery"><h2>现在能讲清楚吗？</h2><div class="il-states" role="group" aria-label="这个知识点的掌握状态">${Object.entries(statuses).map(([value, label]) => button('lesson-state', label, `data-status="${value}" aria-pressed="${entry.status === value}"`)).join('')}</div></section>
            ${lessonNavigation(model, node, topicNode)}`;
    }

    function render(model) {
        const error = model.loadError ? `<div class="il-error" role="alert"><strong>学习记录暂时无法读取</strong><p>${esc(model.loadError?.message || model.loadError)}</p><p>请先备份原始记录，再恢复数据。</p></div>` : '';
        const selected = getNode(model, model.selectedId), topicNode = getNode(model, model.topicId);
        if (model.screen === 'lesson' && selected && selected.id !== 'java-root') return error + lesson(model, selected);
        if (model.screen === 'topic' && topicNode && topicNode.parentId === 'java-root') return error + topic(model, topicNode);
        return error + home(model);
    }

    return {render, readings};
});
