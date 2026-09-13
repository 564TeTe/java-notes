/* Reading resources are deliberately independent of questions, notes and quiz state. */
const commandGuideState = { resource: 'commands', mode: 'core', search: '', selected: '' };
function commandEsc(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function commandCopyButton(code, label = '复制', className = 'guide-copy') {
    return `<button type="button" class="${className}" data-guide-copy="${commandEsc(code)}" title="复制命令" aria-label="复制：${commandEsc(code)}">${label}</button>`;
}
function commandInline(text) {
    const pattern = /`([^`]+)`|\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*|\[(S\d{2})\]/g;
    let html = '', start = 0;
    for (const match of text.matchAll(pattern)) {
        html += commandEsc(text.slice(start, match.index));
        if (match[1] !== undefined) html += commandCopyButton(match[1], `<code>${commandEsc(match[1])}</code>`, 'guide-inline-code');
        else if (match[2] !== undefined) {
            html += /^https?:\/\//i.test(match[3])
                ? `<a href="${commandEsc(match[3])}" target="_blank" rel="noopener noreferrer">${commandEsc(match[2])} ↗</a>`
                : commandEsc(match[2]);
        } else if (match[4] !== undefined) {
            const source = match[4].match(/^(S\d{2}) ·/);
            html += `<strong${source ? ` id="guide-${source[1]}" tabindex="-1"` : ''}>${commandEsc(match[4])}</strong>`;
        } else html += `<button type="button" class="guide-reference" data-guide-reference="${match[5]}" aria-label="查看参考文档 ${match[5]}">[${match[5]}]</button>`;
        start = match.index + match[0].length;
    }
    return html + commandEsc(text.slice(start));
}
function commandMarkdown(text) {
    const lines = String(text).split(/\r?\n/);
    const cells = line => line.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|'));
    let html = '', i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i++; continue; }
        if (/^```/.test(line)) {
            const language = line.slice(3).trim();
            const code = [];
            for (i++; i < lines.length && !/^```/.test(lines[i]); i++) code.push(lines[i]);
            const value = code.join('\n');
            html += `<div class="guide-code-block"><div class="guide-code-bar"><span>${commandEsc(language || '命令')}</span>${commandCopyButton(value)}</div><pre><code>${commandEsc(value)}</code></pre></div>`;
            i++; continue;
        }
        if (/^\|/.test(line) && /^\|[\s:|-]+\|\s*$/.test(lines[i + 1] || '')) {
            html += `<div class="guide-table-scroll" tabindex="0" role="region" aria-label="命令参考表，可横向滚动"><table><thead><tr>${cells(line).map(cell => `<th scope="col">${commandInline(cell)}</th>`).join('')}</tr></thead><tbody>`;
            for (i += 2; i < lines.length && /^\|/.test(lines[i]); i++) html += `<tr>${cells(lines[i]).map(cell => `<td>${commandInline(cell)}</td>`).join('')}</tr>`;
            html += '</tbody></table></div>'; continue;
        }
        const heading = line.match(/^(#{1,6}) (.+)$/);
        if (heading) {
            const level = Math.min(heading[1].length, 6);
            html += `<h${level}>${commandInline(heading[2])}</h${level}>`; i++; continue;
        }
        if (/^---+$/.test(line)) { html += '<hr>'; i++; continue; }
        if (/^>/.test(line)) {
            const quote = [];
            while (i < lines.length && /^>/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ''));
            html += `<blockquote>${commandInline(quote.join(' '))}</blockquote>`; continue;
        }
        if (/^(?:[-*]|\d+\.) /.test(line)) {
            const ordered = /^\d+\./.test(line), tag = ordered ? 'ol' : 'ul';
            const matcher = ordered ? /^\d+\. / : /^[-*] /;
            html += `<${tag}>`;
            while (i < lines.length && matcher.test(lines[i])) html += `<li>${commandInline(lines[i++].replace(matcher, ''))}</li>`;
            html += `</${tag}>`; continue;
        }
        const paragraph = [line]; i++;
        while (i < lines.length && lines[i].trim() && !/^(?:#|```|\||>|[-*] |\d+\. |---)/.test(lines[i])) paragraph.push(lines[i++]);
        html += `<p>${commandInline(paragraph.join(' '))}</p>`;
    }
    return html;
}
function commandMatches(item, query) {
    const text = Object.values(item).join(' ').toLocaleLowerCase();
    return query.trim().toLocaleLowerCase().split(/\s+/).every(word => text.includes(word));
}
function commandResults() {
    const state = commandGuideState, data = window.COMMAND_GUIDE_DATA;
    const items = (state.mode === 'core' ? data.core : state.mode === 'manual' ? data.chapters : data.scenarios).filter(item => commandMatches(item, state.search));
    if (!items.length) return '<div class="guide-empty"><h2>没有匹配内容</h2><p>试试命令名、用途或环境，如 curl、端口、PowerShell。</p><button type="button" data-guide-clear>清空搜索</button></div>';
    if (state.mode === 'core') return `<p class="guide-result-count" role="status">${state.search ? `找到 ${items.length} 条` : '40 条常用命令'}<span>点击命令或“复制”即可复制</span></p><div class="guide-core-grid">${items.map(item => `<article class="guide-core-card"><div class="guide-core-meta"><span>${item.id} / ${commandEsc(item.environment)}</span>${commandCopyButton(item.command)}</div><h2>${commandEsc(item.purpose)}</h2>${commandCopyButton(item.command, `<code>${commandEsc(item.command)}</code>`, 'guide-command')}</article>`).join('')}</div>`;
    const selected = items.find(item => item.id === state.selected) || items[0];
    state.selected = selected.id;
    return `<div class="guide-reading-layout"><aside class="guide-directory" aria-label="阅读目录"><p>${state.mode === 'manual' ? '分类手册' : '排查场景'} <span>${items.length}</span></p>${items.map(item => `<button type="button" data-guide-section="${item.id}" aria-current="${item.id === selected.id ? 'true' : 'false'}">${commandEsc(item.title)}</button>`).join('')}</aside><div class="guide-mobile-directory"><label for="guideSection">${state.mode === 'manual' ? '选择分类' : '选择场景'}</label><select id="guideSection">${items.map(item => `<option value="${item.id}"${item.id === selected.id ? ' selected' : ''}>${commandEsc(item.title)}</option>`).join('')}</select></div><article class="guide-article" id="guideArticle"><header><span>${state.mode === 'manual' ? '分类手册' : '排查场景'} / ${items.findIndex(item => item.id === selected.id) + 1} · ${items.length}</span><h2 tabindex="-1" id="guideArticleTitle">${commandEsc(selected.title)}</h2></header><div class="guide-prose">${commandMarkdown(selected.content)}</div></article></div>`;
}
function renderLearningResources() {
    const state = commandGuideState;
    const navigation = `<div class="learning-resource-tabs" aria-label="学习资源类型"><button type="button" data-guide-resource="commands" aria-pressed="${state.resource === 'commands'}">命令指南</button><button type="button" data-guide-resource="websites" aria-pressed="${state.resource === 'websites'}">常用网站</button></div>`;
    if (state.resource === 'websites') return navigation + `<div class="resource-grid">${RESOURCES.map(r => `<a href="${commandEsc(r.url)}" target="_blank" rel="noopener noreferrer" class="resource-card"><span class="res-icon">${commandEsc(r.icon)}</span><span class="res-name">${commandEsc(r.name)}</span><span class="res-desc">${commandEsc(r.desc)}</span><div class="guide-site-meta"><span class="res-domain">${commandEsc(new URL(r.url).hostname)}</span><span class="res-tag">${commandEsc(r.tag)}</span></div></a>`).join('')}</div>`;
    return navigation + `<section class="command-guide" aria-label="常见命令指南"><div class="guide-toolbar"><div class="guide-modes" aria-label="阅读方式">${[['core','核心 40 条'],['manual','分类手册'],['scenarios','排查场景']].map(([key, title]) => `<button type="button" data-guide-mode="${key}" aria-pressed="${state.mode === key}">${title}</button>`).join('')}</div><label class="guide-search"><span class="sr-only">搜索当前阅读分类</span><input type="search" id="guideSearch" placeholder="搜索命令、用途或环境" value="${commandEsc(state.search)}"></label></div><div class="guide-reading-note"><span>示例中的 PID、路径和地址，使用前请替换。</span><button type="button" data-guide-basics>环境与符号说明 ↗</button><details class="guide-downloads"><summary>下载原文</summary><a href="./assets/guides/core-40.md" download>核心 40 条 Markdown</a><a href="./assets/guides/java-backend-commands.md" download>完整手册 Markdown</a></details></div><div id="guideResults">${commandResults()}</div><span class="guide-copy-status" id="guideCopyStatus" role="status" aria-live="polite"></span></section>`;
}
function refreshCommandGuide() {
    document.getElementById('notesContainer').innerHTML = renderLearningResources();
}
function selectCommandSection(id, focus = false) {
    commandGuideState.selected = id;
    document.getElementById('guideResults').innerHTML = commandResults();
    if (focus) {
        document.getElementById('guideArticleTitle')?.focus({ preventScroll: true });
        document.getElementById('guideArticle')?.scrollIntoView({ block: 'start' });
    }
}
document.addEventListener('input', event => {
    if (event.target.id !== 'guideSearch') return;
    commandGuideState.search = event.target.value;
    document.getElementById('guideResults').innerHTML = commandResults();
});
document.addEventListener('change', event => {
    if (event.target.id === 'guideSection') selectCommandSection(event.target.value, true);
});
document.addEventListener('click', async event => {
    const button = event.target.closest('button');
    if (!button) return;
    const attr = button.dataset;
    if ('guideResource' in attr) {
        commandGuideState.resource = attr.guideResource; refreshCommandGuide();
        document.querySelector(`[data-guide-resource="${commandGuideState.resource}"]`)?.focus({ preventScroll: true });
    } else if ('guideMode' in attr) {
        commandGuideState.mode = attr.guideMode; commandGuideState.selected = ''; refreshCommandGuide();
        document.querySelector(`[data-guide-mode="${commandGuideState.mode}"]`)?.focus({ preventScroll: true });
    }
    else if ('guideSection' in attr) selectCommandSection(attr.guideSection, true);
    else if ('guideClear' in attr) { commandGuideState.search = ''; refreshCommandGuide(); document.getElementById('guideSearch').focus(); }
    else if ('guideBasics' in attr || 'guideReference' in attr) {
        commandGuideState.mode = 'manual'; commandGuideState.search = ''; commandGuideState.selected = attr.guideReference ? 'c28' : 'c00';
        refreshCommandGuide();
        if (attr.guideReference) {
            const reference = document.getElementById(`guide-${attr.guideReference}`);
            reference?.focus({ preventScroll: true }); reference?.scrollIntoView({ block: 'center' });
        }
        else document.getElementById('guideArticleTitle')?.focus({ preventScroll: true });
    } else if ('guideCopy' in attr) {
        const status = document.getElementById('guideCopyStatus');
        try {
            await navigator.clipboard.writeText(attr.guideCopy);
            if (status) status.textContent = '已复制';
            const label = button.textContent;
            if (button.classList.contains('guide-copy')) { button.textContent = '已复制'; setTimeout(() => { button.textContent = label; }, 1600); }
        } catch (_) { if (status) status.textContent = '复制未成功，请选中命令后手动复制'; }
        if (status) {
            clearTimeout(status.commandTimer);
            status.commandTimer = setTimeout(() => { status.textContent = ''; }, 3500);
        }
    }
});
