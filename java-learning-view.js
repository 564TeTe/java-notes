/* Reading cards for the concept atlas; practice is deliberately secondary. */
(function (root) {
    'use strict';
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const button = (action, title, attrs = '') => `<button type="button" class="mm-btn" data-mm-action="${action}" ${attrs}>${title}</button>`;
    const statuses = {new:'未学习',learning:'学习中',mastered:'已掌握'};
    function conceptLinks(ids, index, branches = []) {
        const evidence = new Map(branches.map(branch => [branch.id, branch]));
        return [...new Set(ids)].map(id => index.byId.get(id)).filter(Boolean).map(node => {
            const reading = evidence.get(node.id);
            return button('lesson-jump', `<span>${esc(node.title)}</span>${reading?.total ? `<small>小林 · 已读懂 ${reading.done} / ${reading.total}</small>` : ''} <span aria-hidden="true">↗</span>`, `data-id="${esc(node.id)}"`);
        }).join('');
    }
    function readings(reading) {
        if(!reading?.branchTotal)return '';
        const sections=reading.sections || [];
        const row=s=>button('read-xiaolin',`<span class="mm-reading-status${s.done?' is-done':''}" aria-label="${s.done?'已读懂':'未标记读懂'}">${s.done?'✓':'○'}</span><span><strong>${esc(s.title)}</strong><small>${esc(s.topicTitle)} · ${esc(s.chapterTitle)}</small></span><span aria-hidden="true">↗</span>`,`data-id="${esc(s.id)}"`);
        const total=sections.length?reading.total:reading.branchTotal,done=sections.length?reading.done:reading.branchDone;
        return `<section class="mm-reading-sources" aria-label="小林深入阅读" tabindex="-1"><header><h3>小林深入讲解</h3><span>已读懂 ${done} / ${total}</span></header>
            ${sections.slice(0,3).map(row).join('')}${sections.length>3?`<details class="mm-reading-more"><summary>其余 ${sections.length-3} 篇相关讲解</summary>${sections.slice(3).map(row).join('')}</details>`:''}
            ${!sections.length?`<div class="mm-reading-branches">${(reading.branches || []).map(b=>button('lesson-jump',`<span>${esc(b.title)}</span><small>已读懂 ${b.done} / ${b.total} <span aria-hidden="true">→</span></small>`,`data-id="${esc(b.id)}"`)).join('')}</div>`:''}</section>`;
    }
    function noteField(note) {
        return `<label class="mm-field"><span class="mm-sr">这个概念的学习笔记</span><textarea id="mindmapLearningNote" rows="4" maxlength="10000" placeholder="用自己的话解释它，记下还没弄懂的地方…">${esc(note)}</textarea></label><p class="mm-field-hint">自动保存</p>`;
    }
    function inspector({node, index, entry = {status:'new',note:''}, questions = [], hasChildren = false, reading = null}) {
        const ancestors = []; let parent = index.byId.get(node.parentId);
        while (parent) { ancestors.unshift(parent); parent = index.byId.get(parent.parentId); }
        const children = index.nodes.filter(n => n.parentId === node.id);
        const heading = `${ancestors.length ? `<nav class="mm-lesson-breadcrumb" aria-label="知识路径">${ancestors.map(n => button('lesson-jump', esc(n.title), `data-id="${esc(n.id)}"`)).join('<span>/</span>')}</nav>` : ''}
            <div class="mm-lesson-actions"><h2>${esc(node.title)}</h2>${button('focus-reading','专注阅读')}</div><p class="mm-concept-summary">${esc(node.summary)}</p>`;
        if (node.id === 'java-root') {
            return `${heading}<section class="mm-lesson-section"><h3>选择专题</h3>${reading?.branchTotal ? `<p class="mm-field-hint">小林讲解 · 已读懂 ${reading.branchDone} / ${reading.branchTotal}</p>` : ''}<div class="mm-overview-topics">${conceptLinks(children.map(n=>n.id),index,reading?.branches)}</div></section>
                ${entry.note ? `<details class="mm-lesson-utilities"><summary>我的理解</summary>${noteField(entry.note)}</details>` : ''}`;
        }
        const shown = new Set([node.id,...ancestors.map(n=>n.id),...children.map(n=>n.id)]);
        const remaining = ids => [...new Set(ids)].filter(id => {
            if (shown.has(id) || !index.byId.has(id)) return false;
            shown.add(id); return true;
        });
        const prerequisites = remaining(node.prerequisites), related = remaining(node.related);
        return `${heading}
            ${reading?.total?`<div class="mm-reading-shortcut">${button('show-readings',`小林讲解 · ${reading.total} 篇 <span>深入阅读 ↓</span>`)}</div>`:''}
            <div class="mm-lesson-states" role="group" aria-label="这个概念的学习状态">${Object.entries(statuses).map(([value,label])=>button('lesson-state',label,`data-status="${value}" aria-pressed="${entry.status===value}"`)).join('')}</div>
            <section class="mm-lesson-section"><h3>理解原理</h3><p>${esc(node.explanation)}</p></section>
            ${node.example ? `<section class="mm-lesson-section"><h3>示例 · 联系实际</h3><pre class="mm-lesson-example"><code>${esc(node.example)}</code></pre></section>` : ''}
            ${node.pitfall ? `<section class="mm-lesson-section mm-lesson-pitfall"><h3>易错点</h3><p>${esc(node.pitfall)}</p></section>` : ''}
            ${reading?.sections?.length ? readings(reading) : ''}
            ${children.length ? `<section class="mm-lesson-section"><h3>继续展开</h3><div class="mm-concept-links">${conceptLinks(children.map(n=>n.id),index,reading?.branches)}</div><div class="mm-node-actions">${button('lesson-topic','在图中展开',`data-id="${esc(node.id)}"`)}</div></section>` : ''}
            ${prerequisites.length ? `<section class="mm-lesson-section"><h3>先理解这些</h3><div class="mm-concept-links">${conceptLinks(prerequisites,index)}</div></section>` : ''}
            ${related.length ? `<section class="mm-lesson-section"><h3>关联与对比</h3><div class="mm-concept-links">${conceptLinks(related,index)}</div></section>` : ''}
            <section class="mm-lesson-section"><h3>我的理解</h3>${noteField(entry.note)}</section>
            ${questions.length ? `<details class="mm-lesson-practice"><summary>练习巩固 <span>${questions.length} 道相关题</span></summary>${questions.map(q=>button('lesson-question',`<small>${esc(q.number || q.category || '题库')}</small><span>${esc(q.question || '查看题目')}</span><b aria-hidden="true">↗</b>`,`data-id="${esc(q.id)}"`)).join('')}</details>` : ''}
            <details class="mm-lesson-utilities"><summary>整理与参考</summary>${button('copy-branch','复制知识与讲解到我的导图')}
            ${node.sources.length ? `<section class="mm-lesson-sources"><h3>官方资料</h3>${node.sources.map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)} <span aria-hidden="true">↗</span></a>`).join('')}</section>` : ''}</details>`;
    }
    root.JavaLearningView = {inspector,readings};
})(typeof window === 'undefined' ? globalThis : window);
