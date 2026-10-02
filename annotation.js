/* A reading overlay with state separate from the question bank and glossary. */
const annotationIndex = AnnotationCore.createIndex(window.ANNOTATION_DATA);
const annotationState = {
    search: '', category: 'all', frequency: 'all',
    returnPage: 'bank', returnScroll: 0, openIds: new Set(), basicsOpen: false,
};

function annotationEsc(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
}

function annotationSources(sources) {
    return (sources || []).filter(source => {
        if (!/^https:\/\//i.test(String(source.url || ''))) return false;
        try { return new URL(source.url).protocol === 'https:'; }
        catch (_) { return false; }
    }).map(source => `<a href="${annotationEsc(source.url)}" target="_blank" rel="noopener noreferrer">${annotationEsc(source.label)}<span aria-hidden="true"> ↗</span></a>`).join('');
}

function annotationList(items) {
    return `<ul>${(items || []).map(item => `<li>${annotationEsc(item)}</li>`).join('')}</ul>`;
}

function renderAnnotationCard(annotation) {
    const sources = annotationSources(annotation.sources);
    const interview = annotation.interview || {};
    return `<details class="annotation-card" data-annotation-id="${annotationEsc(annotation.id)}"${annotationState.openIds.has(annotation.id) ? ' open' : ''}>
        <summary class="annotation-card-summary"><span class="annotation-card-name"><code class="annotation-name">${annotationEsc(annotation.name)}</code>${annotation.frequency === 'high' ? '<span class="annotation-high">高频</span>' : ''}</span><span class="annotation-card-purpose">${annotationEsc(annotation.summary)}</span><span class="annotation-chevron" aria-hidden="true"></span></summary>
        <div class="annotation-detail">
            <dl class="annotation-meta"><div class="annotation-package"><dt>完整包名</dt><dd><code>${annotationEsc(annotation.packageName)}</code></dd></div><div><dt>作用位置</dt><dd>${annotationEsc((annotation.targets || []).join('、'))}</dd></div><div><dt>处理阶段</dt><dd>${annotationEsc(annotation.phase)}</dd></div></dl>
            <section class="annotation-detail-section"><h3>常用参数</h3>${annotationList(annotation.attributes)}</section>
            <section class="annotation-detail-section"><h3>代码示例</h3><pre class="annotation-code"><code>${annotationEsc(annotation.example)}</code></pre></section>
            <section class="annotation-detail-section annotation-pitfalls"><h3>易错点</h3>${annotationList(annotation.pitfalls)}</section>
            <section class="annotation-detail-section annotation-interview"><h3>面试追问</h3><p class="annotation-question">${annotationEsc(interview.question)}</p><p>${annotationEsc(interview.answer)}</p></section>
            ${sources ? `<footer class="annotation-sources"><span>官方文档</span>${sources}</footer>` : ''}
        </div>
    </details>`;
}

function renderAnnotationResults() {
    const matches = annotationIndex.search(annotationState.search, annotationState.category, annotationState.frequency);
    const count = `<p class="annotation-count" role="status" aria-live="polite">${matches.length} / ${annotationIndex.annotations.length} 个注解<span>展开查看用法与易错点</span></p>`;
    if (!matches.length) return count + `<div class="annotation-empty"><h2>没有匹配的注解</h2><p>试试注解名、用途或包名，也可以放宽分类与高频筛选。</p><button type="button" class="annotation-button" data-annotation-clear>清空筛选</button></div>`;

    // Search keeps global relevance order; browsing keeps whole category groups.
    const searching = !!String(annotationState.search || '').normalize('NFKC').replace(/\s+/g, '').replace(/^@+/, '');
    const groups = [];
    const byCategory = new Map();
    const seenCategories = new Set();
    matches.forEach(annotation => {
        let group = searching ? groups[groups.length - 1] : byCategory.get(annotation.category);
        if (!group || group.id !== annotation.category) {
            group = { id: annotation.category, annotations: [], continued: seenCategories.has(annotation.category) };
            groups.push(group);
            byCategory.set(annotation.category, group);
            seenCategories.add(annotation.category);
        }
        group.annotations.push(annotation);
    });
    return count + `<div class="annotation-groups">${groups.map(({ id, annotations, continued }) => {
        const category = annotationIndex.categories.find(item => item.id === id);
        const name = category?.name || id;
        return `<section class="annotation-group" aria-label="${annotationEsc(name + (continued ? '（续）' : ''))}"><header class="annotation-group-heading"><h2>${annotationEsc(name)}<span>${continued ? '续 · ' : ''}${annotations.length}</span></h2>${category?.description ? `<p>${annotationEsc(category.description)}</p>` : ''}</header><div class="annotation-list">${annotations.map(renderAnnotationCard).join('')}</div></section>`;
    }).join('')}</div>`;
}

function renderAnnotationBasics() {
    return `<details class="annotation-basics" data-annotation-basic${annotationState.basicsOpen ? ' open' : ''}><summary><span>基础入门<span class="annotation-basics-hint">先理解注解怎样生效</span></span><span class="annotation-chevron" aria-hidden="true"></span></summary><div class="annotation-basics-content">${annotationIndex.basics.map(basic => `<article><h3>${annotationEsc(basic.title)}</h3><p>${annotationEsc(basic.body)}</p>${basic.example ? `<pre class="annotation-code"><code>${annotationEsc(basic.example)}</code></pre>` : ''}</article>`).join('')}</div></details>`;
}

function renderAnnotations() {
    return `<section class="annotation-view" aria-label="Java 后端注解专区">
        <div class="annotation-intro"><div><p class="annotation-eyebrow">JAVA 后端 · 注解手册</p><p class="annotation-intro-text">弄清每个注解的作用、参数、生效条件与常见陷阱。</p></div><button type="button" class="annotation-return" data-annotation-return>← 返回刚才的页面</button></div>
        <p class="annotation-route"><span>学习路线</span>先读基础 <i aria-hidden="true">→</i> 再看高频 <i aria-hidden="true">→</i> 最后查易错点</p>
        ${renderAnnotationBasics()}
        <p class="annotation-version">示例以 Java 17+、Spring Boot 3 / Spring 6 为主；旧项目的 javax 与 jakarta 包名差异，请结合条目说明。</p>
        <div class="annotation-toolbar"><label class="annotation-search" for="annotationSearch"><span>搜索注解</span><input id="annotationSearch" type="search" aria-label="搜索注解" placeholder="如 @Autowired、事务、校验" autocomplete="off" value="${annotationEsc(annotationState.search)}" aria-controls="annotationResults"></label><label class="annotation-category" for="annotationCategory"><span>分类</span><select id="annotationCategory" aria-label="注解分类" aria-controls="annotationResults"><option value="all"${annotationState.category === 'all' ? ' selected' : ''}>全部分类</option>${annotationIndex.categories.map(category => `<option value="${annotationEsc(category.id)}"${annotationState.category === category.id ? ' selected' : ''}>${annotationEsc(category.name)}</option>`).join('')}</select></label><label class="annotation-frequency" for="annotationFrequency"><span>学习范围</span><select id="annotationFrequency" aria-label="注解学习范围" aria-controls="annotationResults"><option value="all"${annotationState.frequency === 'all' ? ' selected' : ''}>全部注解</option><option value="high"${annotationState.frequency === 'high' ? ' selected' : ''}>只看高频</option></select></label><button type="button" class="annotation-clear" data-annotation-clear>清空筛选</button></div>
        <div id="annotationResults">${renderAnnotationResults()}</div>
    </section>`;
}

function openAnnotations() {
    if (!showAnnotations) {
        annotationState.returnPage = currentWorkspacePage();
        annotationState.returnScroll = window.scrollY;
    }
    showAnnotations = true;
    window.GlossaryHighlighter?.close();
    renderAll();
    window.scrollTo({ top: 0 });
}

function returnFromAnnotations() {
    showAnnotations = false;
    renderAll();
    window.scrollTo({ top: annotationState.returnScroll });
}

function refreshAnnotationResults() {
    const target = document.getElementById('annotationResults');
    if (target) target.innerHTML = renderAnnotationResults();
}

document.addEventListener('input', event => {
    if (event.target.id !== 'annotationSearch' || event.isComposing) return;
    annotationState.search = event.target.value;
    refreshAnnotationResults();
});
document.addEventListener('compositionend', event => {
    if (event.target.id !== 'annotationSearch') return;
    annotationState.search = event.target.value;
    refreshAnnotationResults();
});
document.addEventListener('change', event => {
    if (event.target.id === 'annotationCategory') annotationState.category = event.target.value;
    else if (event.target.id === 'annotationFrequency') annotationState.frequency = event.target.value;
    else return;
    refreshAnnotationResults();
});
document.addEventListener('click', event => {
    if (event.target.closest('[data-annotation-return]')) returnFromAnnotations();
    if (event.target.closest('[data-annotation-clear]')) {
        annotationState.search = '';
        annotationState.category = annotationState.frequency = 'all';
        const search = document.getElementById('annotationSearch');
        if (search) search.value = '';
        const category = document.getElementById('annotationCategory');
        if (category) category.value = 'all';
        const frequency = document.getElementById('annotationFrequency');
        if (frequency) frequency.value = 'all';
        refreshAnnotationResults();
        if (typeof WorkspaceControls !== 'undefined') WorkspaceControls.enhance();
        search?.focus();
    }
});
document.addEventListener('toggle', event => {
    const target = event.target;
    const id = target.dataset?.annotationId;
    if (id !== undefined) {
        if (target.open) annotationState.openIds.add(id);
        else annotationState.openIds.delete(id);
    }
    if (target.dataset?.annotationBasic !== undefined) annotationState.basicsOpen = target.open;
}, true);
