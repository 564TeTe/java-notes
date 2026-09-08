(function () {
    const MASTERY_KEY = "resume-prep-mastery";
    const CHECKLIST_KEY = "resume-prep-checklist";
    const TABS = [
        { id: "overview", icon: "🧭", label: "准备概览" },
        { id: "pitches", icon: "🎙️", label: "口述练习" },
        { id: "stories", icon: "🧩", label: "经历深挖" },
        { id: "questions", icon: "🎯", label: "模拟问答" },
        { id: "checklist", icon: "✅", label: "冲刺清单" },
        { id: "sources", icon: "📚", label: "原始资料" }
    ];

    function loadJSON(key) {
        try { return JSON.parse(localStorage.getItem(key) || "{}"); }
        catch (error) { return {}; }
    }

    const state = {
        tab: "overview",
        source: "all",
        search: "",
        level: "all",
        openStory: null,
        mastery: loadJSON(MASTERY_KEY),
        checklist: loadJSON(CHECKLIST_KEY),
        revealed: new Set(),
        mockId: null
    };

    const data = () => window.RESUME_PREP_DATA;
    const sourceName = id => data().sources.find(source => source.id === id)?.shortName || "全部";
    const escape = value => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    function saveProgress() {
        localStorage.setItem(MASTERY_KEY, JSON.stringify(state.mastery));
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state.checklist));
        if (typeof scheduleCloudSync === "function") scheduleCloudSync();
    }

    function getProgress() {
        const questions = data().questions;
        const checklist = data().checklist;
        const known = questions.filter(item => state.mastery[item.id] === "known").length;
        const fuzzy = questions.filter(item => state.mastery[item.id] === "fuzzy").length;
        const hard = questions.filter(item => state.mastery[item.id] === "hard").length;
        const checked = checklist.filter(item => state.checklist[item.id]).length;
        const score = known + checked;
        const total = questions.length + checklist.length;
        return { known, fuzzy, hard, checked, questionTotal: questions.length, checklistTotal: checklist.length, percent: Math.round(score / total * 100) };
    }

    function renderTabs() {
        return `<div class="prep-navigation"><nav class="resume-tabs" aria-label="简历准备模块导航">${TABS.slice(0, 4).map(tab => `
            <button class="resume-tab${state.tab === tab.id ? " active" : ""}" aria-current="${state.tab === tab.id ? "page" : "false"}" type="button" onclick="setResumePrepTab('${tab.id}')">${tab.label}</button>`).join("")}</nav>
            <div class="prep-utilities">${TABS.slice(4).map(tab => `<button class="${state.tab === tab.id ? "active" : ""}" aria-current="${state.tab === tab.id ? "page" : "false"}" onclick="setResumePrepTab('${tab.id}')">${tab.label === "原始资料" ? "资料库" : tab.label}</button>`).join("")}</div></div>`;
    }

    function renderSourceFilters(allowed = ["resume", "zhishu", "yonyou", "beiruan"]) {
        const sources = data().sources.filter(source => allowed.includes(source.id));
        return `<div class="resume-filters">
            <span class="prep-filter-label">经历</span><button aria-pressed="${state.source === "all"}" class="resume-filter${state.source === "all" ? " active" : ""}" onclick="setResumePrepSource('all')">全部</button>
            ${sources.map(source => `<button aria-pressed="${state.source === source.id}" class="resume-filter${state.source === source.id ? " active" : ""}" onclick="setResumePrepSource('${source.id}')">${source.shortName}</button>`).join("")}
        </div>`;
    }

    function renderOverview() {
        const progress = getProgress();
        const weak = progress.fuzzy + progress.hard;
        return `<section class="prep-start">
            <div class="prep-start-copy"><span class="prep-kicker">面试练习台</span><h2>从一段经历，开始今天的准备。</h2><p>讲清做了什么、为什么这样做，以及如何验证。</p>
                <div class="prep-start-actions"><button class="career-primary" onclick="startResumePractice()">开始练习 <span aria-hidden="true">→</span></button><button class="career-secondary" onclick="reviewResumeWeak()">复习薄弱题${weak ? ` · ${weak}` : ""}</button></div></div>
            <div class="prep-progress"><span>练习进度</span><strong>${progress.known}<small> / ${progress.questionTotal}</small></strong><span>道问答已掌握</span><div class="resume-mini-progress"><span style="width:${progress.questionTotal ? Math.round(progress.known / progress.questionTotal * 100) : 0}%"></span></div><button onclick="setResumePrepTab('checklist')">冲刺清单 ${progress.checked}/${progress.checklistTotal} <span aria-hidden="true">↗</span></button></div>
        </section>
        <div class="resume-section-heading"><div><h2>按经历准备</h2><p>先练口述，再深入技术细节。</p></div><span class="prep-count">${data().sources.length} 份材料</span></div>
        <section class="resume-source-grid">${data().sources.map((source, index) => {
            const questions = data().questions.filter(item => item.source === source.id);
            const known = questions.filter(item => state.mastery[item.id] === "known").length;
            const percent = questions.length ? Math.round(known / questions.length * 100) : 0;
            return `<article class="resume-source-card"><div class="resume-source-head"><span class="prep-source-number">0${index + 1}</span><span class="resume-file-badge">${source.id === "resume" ? "个人介绍" : source.id === "zhishu" ? "项目经历" : "实习经历"}</span></div><h3>${escape(source.shortName)}</h3><p class="resume-source-role">${escape(source.role)}</p><p>${escape(source.summary)}</p><div class="resume-mini-progress"><span style="width:${percent}%"></span></div><div class="resume-source-foot"><span>已掌握 ${known}/${questions.length}</span><button onclick="openResumeSource('${source.id}')">${source.id === "resume" ? "练自我介绍" : "准备这段经历"} →</button></div></article>`;
        }).join("")}</section>
        <div class="prep-bottom-note"><span>建议顺序：口述练习 → 经历深挖 → 模拟问答 → 冲刺核对</span><button onclick="setResumePrepTab('sources')">查看原始资料 ↗</button></div>`;
    }

    function renderPitches() {
        const pitches = data().pitches.filter(item => state.source === "all" || item.source === state.source);
        return `${renderSourceFilters()}
            <div class="resume-section-heading"><div><h2>先讲顺，再压缩时间</h2></div><small>选一个时长，尝试脱稿复述</small></div>
            <section class="resume-pitch-list">${pitches.map(item => `
                <article class="resume-pitch-card">
                    <header><div><span class="resume-duration">${item.duration}</span><span class="resume-source-chip">${sourceName(item.source)}</span></div><button onclick="copyResumePitch('${item.id}')">复制话术</button></header>
                    <h3>${escape(item.title)}</h3>
                    <p>${escape(item.content)}</p>
                </article>`).join("") || '<p class="resume-empty">这个来源暂时没有独立口述稿。</p>'}</section>`;
    }

    function renderStories() {
        const stories = data().stories.filter(item => state.source === "all" || item.source === state.source);
        return `<div class="resume-section-heading"><div><h2>把经历讲清楚</h2><p>背景 → 目标 → 行动 → 结果，点击展开一段故事。</p></div></div>${renderSourceFilters(["zhishu", "yonyou", "beiruan"])}
            <section class="resume-story-list">${stories.map(item => `
                <details class="resume-story-card" ${state.openStory === item.id ? "open" : ""} ontoggle="rememberResumeStory('${item.id}',this.open)">
                    <summary><span class="resume-source-chip">${sourceName(item.source)}</span><h3>${escape(item.title)}</h3><span class="prep-story-toggle" aria-hidden="true">＋</span></summary>
                    <div class="prep-story-content"><div class="prep-story-tags">${item.tags.map(tag => `<span>${escape(tag)}</span>`).join("")}</div><dl>
                        <div><dt>S</dt><dd><strong>背景</strong>${escape(item.situation)}</dd></div>
                        <div><dt>T</dt><dd><strong>目标</strong>${escape(item.task)}</dd></div>
                        <div><dt>A</dt><dd><strong>行动</strong>${escape(item.action)}</dd></div>
                        <div><dt>R</dt><dd><strong>结果</strong>${escape(item.result)}</dd></div>
                    </dl><p class="resume-boundary"><b>表达边界</b>${escape(item.boundary)}</p><button class="career-secondary" onclick="practiceResumeSource('${item.source}')">练这段经历的追问 →</button></div>
                </details>`).join("") || '<p class="resume-empty">这段经历暂时没有故事。</p>'}</section>`;
    }

    function filteredQuestions() {
        const query = state.search.trim().toLowerCase();
        return data().questions.filter(item => {
            const level = state.mastery[item.id] || "new";
            return (state.source === "all" || item.source === state.source)
                && (state.level === "all" || (state.level === "weak" ? ["hard", "fuzzy"].includes(level) : level === state.level))
                && (!query || `${item.question} ${item.answer} ${item.followup} ${sourceName(item.source)}`.toLowerCase().includes(query));
        });
    }

    function questionCardsHTML(questions) {
        if (!questions.length) return `<div class="career-empty"><span aria-hidden="true">⌕</span><h3>没有匹配的问题</h3><p>${state.level === "weak" ? "标记为“不会”或“模糊”的题会出现在这里。" : "换个关键词，或清空筛选再试。"}</p><button class="career-secondary" onclick="resetResumeFilters()">清空筛选</button></div>`;
        return questions.map(item => {
            const level = state.mastery[item.id] || "new";
            const revealed = state.revealed.has(item.id);
            const labels = { new: "未练习", known: "已掌握", fuzzy: "模糊", hard: "不会" };
            return `<article class="resume-qa-card${revealed ? " revealed" : ""}${state.mockId === item.id ? " mock-focus" : ""}" id="resume-${item.id}">
                <button class="resume-question" aria-expanded="${revealed}" aria-controls="answer-${item.id}" onclick="toggleResumeAnswer('${item.id}')"><span class="resume-q-mark">Q</span><span><small>${sourceName(item.source)} · <em class="prep-level ${level}">${labels[level]}</em></small>${escape(item.question)}</span><i>${revealed ? "收起" : "看答案"}</i></button>
                <div class="resume-answer" id="answer-${item.id}"><p>${escape(item.answer)}</p><div class="resume-followup"><b>继续追问</b>${escape(item.followup)}</div><div class="resume-mastery"><span>掌握程度</span>${["hard", "fuzzy", "known"].map(value => `<button aria-pressed="${level === value}" class="${value}${level === value ? " selected" : ""}" onclick="rateResumeQuestion('${item.id}','${value}')">${labels[value]}</button>`).join("")}</div></div>
            </article>`;
        }).join("");
    }

    function renderQuestions() {
        const questions = filteredQuestions();
        return `<div class="resume-section-heading"><div><h2>模拟问答</h2><p>先口答，再看参考答案；优先抽取尚未掌握的问题。</p></div><button class="career-primary" onclick="randomResumeQuestion()" ${questions.length ? "" : "disabled"}>随机抽题 ↗</button></div>
            <section class="prep-question-filters">${renderSourceFilters()}<div class="prep-question-toolbar"><label class="career-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="搜索简历问题" value="${escape(state.search)}" placeholder="搜索问题、技术词…" oninput="filterResumeQuestions(this.value)"></label><select aria-label="按掌握程度筛选" onchange="setResumePrepMastery(this.value)">${[["all", "全部掌握程度"], ["new", "未练习"], ["weak", "薄弱题（不会 / 模糊）"], ["known", "已掌握"]].map(([id, label]) => `<option value="${id}" ${state.level === id ? "selected" : ""}>${label}</option>`).join("")}</select><button class="career-text" onclick="resetResumeFilters()">清空筛选</button></div></section>
            <div class="prep-results-count" id="resume-result-count" role="status">${questions.length} 道问题</div><section class="resume-question-list" id="resume-question-results">${questionCardsHTML(questions)}</section>`;
    }

    function renderChecklist() {
        const groups = {};
        data().checklist.forEach(item => { (groups[item.group] ||= []).push(item); });
        const progress = getProgress();
        return `<section class="resume-check-head"><div><span>面试冲刺</span><h2>完成一项，勾掉一项</h2><p>进度会保存在本机；登录后可随其他数据同步。</p></div><strong>${progress.checked}/${progress.checklistTotal}</strong></section>
            <div class="resume-check-progress"><span style="width:${Math.round(progress.checked / progress.checklistTotal * 100)}%"></span></div>
            <section class="resume-check-groups">${Object.entries(groups).map(([group, items]) => `
                <article><h3>${escape(group)}<span>${items.filter(item => state.checklist[item.id]).length}/${items.length}</span></h3>
                    ${items.map(item => `<button aria-pressed="${!!state.checklist[item.id]}" class="resume-check-item${state.checklist[item.id] ? " checked" : ""}" onclick="toggleResumeChecklist('${item.id}')"><i>${state.checklist[item.id] ? "✓" : ""}</i><span>${escape(item.text)}</span></button>`).join("")}
                </article>`).join("")}</section>`;
    }

    function renderSources() {
        return `<section class="resume-library-head"><span>REFERENCE LIBRARY</span><h2>原始资料库</h2><p>网页内容已经按面试场景整理；需要核对原文时，可直接打开或下载原文件。</p></section>
            <section class="resume-library-grid">${data().sources.map(source => `
                <a class="resume-library-card" href="${source.file}" target="_blank" rel="noopener">
                    <div><span>${source.icon}</span><i>${source.fileType}</i></div>
                    <h3>${escape(source.name)}</h3>
                    <p>${escape(source.summary)}</p>
                    <ul>${source.highlights.map(item => `<li>${escape(item)}</li>`).join("")}</ul>
                    <b>${source.fileType === "PDF" ? "打开简历" : "下载手册"} →</b>
                </a>`).join("")}</section>
            <p class="resume-privacy-note">这些资料位于公开的 GitHub Pages 站点。简历包含个人信息，请只在你接受公开访问的前提下分享网站地址。</p>`;
    }

    window.renderResumePrep = function () {
        const views = {
            overview: renderOverview,
            pitches: renderPitches,
            stories: renderStories,
            questions: renderQuestions,
            checklist: renderChecklist,
            sources: renderSources
        };
        return `<div class="resume-prep">${renderTabs()}<div class="resume-view">${(views[state.tab] || renderOverview)()}</div></div>`;
    };

    window.renderResumePrepTOC = function () {
        return TABS.map(tab => `<li><button class="toc-item resume-toc${state.tab === tab.id ? " active" : ""}" onclick="setResumePrepTab('${tab.id}')"><span class="cat-dot" style="background:#4A6CF7"></span><span class="q-text">${tab.icon} ${tab.label}</span></button></li>`).join("");
    };

    window.setResumePrepTab = function (tab) {
        state.tab = TABS.some(item => item.id === tab) ? tab : "overview";
        state.mockId = null;
        if (state.tab === "stories" && state.source === "resume") state.source = "all";
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.setResumePrepSource = function (source) {
        state.source = source;
        state.mockId = null;
        renderAll();
    };

    window.openResumeSource = function (source) {
        state.source = source;
        state.tab = source === "resume" ? "pitches" : "stories";
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.toggleResumeAnswer = function (id) {
        if (state.revealed.has(id)) state.revealed.delete(id);
        else state.revealed.add(id);
        const card = document.getElementById(`resume-${id}`);
        if (card) {
            card.classList.toggle("revealed", state.revealed.has(id));
            const indicator = card.querySelector(".resume-question i");
            if (indicator) indicator.textContent = state.revealed.has(id) ? "收起" : "看答案";
            card.querySelector(".resume-question")?.setAttribute("aria-expanded", String(state.revealed.has(id)));
        }
    };

    window.rateResumeQuestion = function (id, level) {
        state.mastery[id] = level;
        saveProgress();
        updateQuestionResults();
        const nextFocus = document.querySelector(`#resume-${id} .resume-mastery .${level}`)
            || document.querySelector("#resume-question-results .resume-question")
            || document.getElementById("resume-result-count");
        if (nextFocus) {
            if (nextFocus.id === "resume-result-count") nextFocus.setAttribute("tabindex", "-1");
            nextFocus.focus({ preventScroll: true });
        }
        if (typeof toast === "function") toast(level === "known" ? "已标记为掌握" : level === "fuzzy" ? "已加入模糊题" : "已加入重点复习");
    };

    window.toggleResumeChecklist = function (id) {
        state.checklist[id] = !state.checklist[id];
        saveProgress();
        renderAll();
    };

    window.randomResumeQuestion = function () {
        const pool = filteredQuestions();
        if (!pool.length) return;
        const weaker = pool.filter(item => state.mastery[item.id] !== "known");
        const candidates = weaker.length ? weaker : pool;
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        state.mockId = picked.id;
        state.revealed.delete(picked.id);
        renderAll();
        requestAnimationFrame(() => document.getElementById(`resume-${picked.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    };

    function updateQuestionResults() {
        const questions = filteredQuestions();
        const list = document.getElementById("resume-question-results");
        if (list) list.innerHTML = questionCardsHTML(questions);
        const count = document.getElementById("resume-result-count");
        if (count) count.textContent = `${questions.length} 道问题`;
        const random = document.querySelector(".resume-section-heading .career-primary");
        if (random) random.disabled = !questions.length;
    }
    window.filterResumeQuestions = function (value) { state.search = String(value || ""); state.mockId = null; updateQuestionResults(); };
    window.setResumePrepMastery = function (value) { state.level = ["all", "new", "weak", "known"].includes(value) ? value : "all"; state.mockId = null; renderAll(); };
    window.resetResumeFilters = function () { state.source = "all"; state.search = ""; state.level = "all"; state.mockId = null; renderAll(); };
    window.startResumePractice = function () { state.tab = "questions"; state.source = "all"; state.search = ""; state.level = "all"; window.randomResumeQuestion(); };
    window.reviewResumeWeak = function () { state.tab = "questions"; state.source = "all"; state.search = ""; state.level = "weak"; state.mockId = null; renderAll(); window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.practiceResumeSource = function (source) { state.source = source; state.level = "all"; state.search = ""; window.setResumePrepTab("questions"); };
    window.rememberResumeStory = function (id, open) { if (open) state.openStory = id; else if (state.openStory === id) state.openStory = null; };

    window.copyResumePitch = async function (id) {
        const pitch = data().pitches.find(item => item.id === id);
        if (!pitch) return;
        try {
            await navigator.clipboard.writeText(pitch.content);
            if (typeof toast === "function") toast("话术已复制");
        } catch (error) {
            if (typeof toast === "function") toast("复制失败，请手动选择文本");
        }
    };

    window.getResumePrepSnapshot = function () {
        return { mastery: state.mastery, checklist: state.checklist };
    };

    window.applyResumePrepSnapshot = function (snapshot) {
        if (!snapshot || typeof snapshot !== "object") return;
        state.mastery = snapshot.mastery && typeof snapshot.mastery === "object" ? snapshot.mastery : {};
        state.checklist = snapshot.checklist && typeof snapshot.checklist === "object" ? snapshot.checklist : {};
        localStorage.setItem(MASTERY_KEY, JSON.stringify(state.mastery));
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state.checklist));
    };
})();
