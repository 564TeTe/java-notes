/* Reading cards for the concept atlas; practice is deliberately secondary. */
(function (root) {
    'use strict';
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const button = (action, title, attrs = '') => `<button type="button" class="mm-btn" data-mm-action="${action}" ${attrs}>${title}</button>`;
    const statuses = {new:'未学习',learning:'学习中',mastered:'已掌握'};
    function conceptLinks(ids, index) {
        return ids.map(id => index.byId.get(id)).filter(Boolean).map(node => button('lesson-jump', esc(node.title) + ' <span aria-hidden="true">↗</span>', `data-id="${esc(node.id)}"`)).join('');
    }
    function inspector({node, index, entry = {status:'new',note:''}, questions = [], hasChildren = false}) {
        const ancestors = []; let parent = index.byId.get(node.parentId);
        while (parent) { ancestors.unshift(parent); parent = index.byId.get(parent.parentId); }
        const children = index.nodes.filter(n => n.parentId === node.id);
        return `<div class="mm-inspector-heading"><span class="mm-eyebrow">LEARN / 理解知识</span><span class="mm-node-count">${children.length ? children.length + ' 个分支' : '核心概念'}</span></div>
            <nav class="mm-lesson-breadcrumb" aria-label="知识路径">${ancestors.map(n => button('lesson-jump', esc(n.title), `data-id="${esc(n.id)}"`)).join('<span>/</span>')}</nav>
            <h2>${esc(node.title)}</h2><p class="mm-concept-summary">${esc(node.summary)}</p>
            <div class="mm-lesson-states" role="group" aria-label="这个概念的学习状态">${Object.entries(statuses).map(([value,label])=>button('lesson-state',label,`data-status="${value}" aria-pressed="${entry.status===value}"`)).join('')}</div>
            <section class="mm-lesson-section"><h3>理解原理</h3><p>${esc(node.explanation)}</p></section>
            ${node.example ? `<section class="mm-lesson-section"><h3>示例 · 联系实际</h3><pre class="mm-lesson-example"><code>${esc(node.example)}</code></pre></section>` : ''}
            ${node.pitfall ? `<section class="mm-lesson-section mm-lesson-pitfall"><h3>易错点</h3><p>${esc(node.pitfall)}</p></section>` : ''}
            ${children.length ? `<section class="mm-lesson-section"><h3>继续展开</h3><div class="mm-concept-links">${conceptLinks(children.map(n=>n.id),index)}</div><div class="mm-node-actions">${button('lesson-topic','只看这一支',`data-id="${esc(node.id)}"`)}</div></section>` : ''}
            ${node.prerequisites.length ? `<section class="mm-lesson-section"><h3>先理解这些</h3><div class="mm-concept-links">${conceptLinks(node.prerequisites,index)}</div></section>` : ''}
            ${node.related.length ? `<section class="mm-lesson-section"><h3>关联与对比</h3><div class="mm-concept-links">${conceptLinks(node.related,index)}</div></section>` : ''}
            <section class="mm-lesson-section"><h3>我的理解</h3><label class="mm-field"><span class="mm-sr">这个概念的学习笔记</span><textarea id="mindmapLearningNote" rows="4" maxlength="10000" placeholder="用自己的话解释它，记下还没弄懂的地方…">${esc(entry.note)}</textarea></label><p class="mm-field-hint">自动保存；概念掌握度与刷题记录分别统计。</p>${button('copy-branch','复制知识与讲解到我的导图')}</section>
            <details class="mm-lesson-practice"><summary>练习巩固 <span>${questions.length ? questions.length + ' 道相关题' : '查找相关题目'}</span></summary><p class="mm-field-hint">先理解概念，再用题目检查是否能讲清楚。</p>${questions.length ? questions.map(q=>button('lesson-question',`<small>${esc(q.number || q.category || '题库')}</small><span>${esc(q.question || '查看题目')}</span><b aria-hidden="true">↗</b>`,`data-id="${esc(q.id)}"`)).join('') : '<p class="mm-field-hint">当前题库还没有匹配的练习，知识讲解仍可完整学习。</p>'}</details>
            <section class="mm-lesson-sources"><h3>官方资料</h3>${node.sources.map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)} <span aria-hidden="true">↗</span></a>`).join('')}</section>`;
    }
    root.JavaLearningView = {inspector};
})(typeof window === 'undefined' ? globalThis : window);
