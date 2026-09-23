/* Independent reading state; never persists into questions or learning records. */
const glossaryIndex = GlossaryCore.createIndex(window.GLOSSARY_DATA);
const glossaryState = { search: '', category: 'all', returnPage: 'bank', returnScroll: 0 };
function glossaryEsc(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderGlossaryResults() {
    const terms = glossaryIndex.search(glossaryState.search, glossaryState.category);
    return `<p class="glossary-count" role="status">${terms.length} 个术语</p>` + (terms.length
        ? `<div class="glossary-list">${terms.map(term => `<article class="glossary-entry"><h2>${glossaryEsc(term.term)}</h2><p>${glossaryEsc(term.definition)}</p></article>`).join('')}</div>`
        : '<div class="study-empty"><h2>没有匹配的术语</h2><p>换个关键词或分类试试。</p><button type="button" class="study-secondary" data-glossary-clear>清空筛选</button></div>');
}
function renderGlossary() {
    return `<section class="glossary-view" aria-label="术语词典"><div class="glossary-toolbar"><label class="glossary-search" for="glossarySearch"><span>搜索术语</span><input id="glossarySearch" type="search" placeholder="如事务、AOP、线程池" autocomplete="off" value="${glossaryEsc(glossaryState.search)}" aria-controls="glossaryResults"></label><label class="glossary-category" for="glossaryCategory"><span>分类</span><select id="glossaryCategory" aria-controls="glossaryResults"><option value="all"${glossaryState.category === 'all' ? ' selected' : ''}>全部分类</option>${glossaryIndex.categories.map(category => `<option value="${glossaryEsc(category.id)}"${category.id === glossaryState.category ? ' selected' : ''}>${glossaryEsc(category.name)}</option>`).join('')}</select></label><button type="button" class="study-text glossary-return" data-glossary-return>返回刚才的页面</button></div><div id="glossaryResults">${renderGlossaryResults()}</div></section>`;
}
function openGlossary() {
    if (!showGlossary) {
        glossaryState.returnPage = currentWorkspacePage();
        glossaryState.returnScroll = window.scrollY;
    }
    showGlossary = true;
    window.GlossaryHighlighter?.close();
    renderAll(); window.scrollTo({top:0});
}
function returnFromGlossary() {
    showGlossary = false;
    renderAll(); window.scrollTo({top:glossaryState.returnScroll});
}
function refreshGlossaryResults() {
    const target = document.getElementById('glossaryResults');
    if (target) target.innerHTML = renderGlossaryResults();
}
document.addEventListener('input', event => {
    if (event.target.id !== 'glossarySearch' || event.isComposing) return;
    glossaryState.search = event.target.value;
    refreshGlossaryResults();
});
document.addEventListener('compositionend', event => {
    if (event.target.id !== 'glossarySearch') return;
    glossaryState.search = event.target.value; refreshGlossaryResults();
});
document.addEventListener('change', event => {
    if (event.target.id !== 'glossaryCategory') return;
    glossaryState.category = event.target.value; refreshGlossaryResults();
});
document.addEventListener('click', event => {
    if (event.target.closest('[data-glossary-return]')) returnFromGlossary();
    if (event.target.closest('[data-glossary-clear]')) {
        glossaryState.search = ''; glossaryState.category = 'all';
        renderAll(); document.getElementById('glossarySearch')?.focus();
    }
});
