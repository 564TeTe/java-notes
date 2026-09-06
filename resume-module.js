(function () {
    const MASTERY_KEY = "resume-prep-mastery";
    const CHECKLIST_KEY = "resume-prep-checklist";
    const TABS = [
        { id: "overview", icon: "🧭", label: "准备总览" },
        { id: "pitches", icon: "🎙️", label: "口述稿" },
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
        return `<nav class="resume-tabs" aria-label="简历准备模块导航">${TABS.map(tab => `
            <button class="resume-tab${state.tab === tab.id ? " active" : ""}" type="button" onclick="setResumePrepTab('${tab.id}')">
                <span>${tab.icon}</span>${tab.label}
            </button>`).join("")}</nav>`;
    }

    function renderSourceFilters(allowed = ["resume", "zhishu", "yonyou", "beiruan"]) {
        const sources = data().sources.filter(source => allowed.includes(source.id));
        return `<div class="resume-filters">
            <button class="resume-filter${state.source === "all" ? " active" : ""}" onclick="setResumePrepSource('all')">全部</button>
            ${sources.map(source => `<button class="resume-filter${state.source === source.id ? " active" : ""}" onclick="setResumePrepSource('${source.id}')">${source.icon} ${source.shortName}</button>`).join("")}
        </div>`;
    }

    function renderOverview() {
        const progress = getProgress();
        const sourceCards = data().sources.map(source => {
            const sourceQuestions = data().questions.filter(item => item.source === source.id);
            const known = sourceQuestions.filter(item => state.mastery[item.id] === "known").length;
            const percent = sourceQuestions.length ? Math.round(known / sourceQuestions.length * 100) : 0;
            return `<article class="resume-source-card">
                <div class="resume-source-head"><span class="resume-source-icon">${source.icon}</span><span class="resume-file-badge">${sourceQuestions.length} 道题</span></div>
                <h3>${escape(source.name)}</h3>
                <p class="resume-source-role">${escape(source.role)}</p>
                <p>${escape(source.summary)}</p>
                <div class="resume-mini-progress"><span style="width:${percent}%"></span></div>
                <div class="resume-source-foot"><span>已掌握 ${known}/${sourceQuestions.length}</span><button onclick="openResumeSource('${source.id}')">开始准备 →</button></div>
            </article>`;
        }).join("");

        return `<section class="resume-hero">
            <div class="resume-hero-copy">
                <span class="resume-eyebrow">RESUME INTERVIEW LAB</span>
                <h2>把简历上的每一句，都准备到能继续追问五层</h2>
                <p>围绕个人简历、知枢项目、用友实习和北软实习，完成口述、深挖、问答与边界核对。</p>
                <div class="resume-hero-actions">
                    <button class="resume-primary-btn" onclick="setResumePrepTab('questions')">开始模拟问答</button>
                    <button class="resume-ghost-btn" onclick="setResumePrepTab('pitches')">练习自我介绍</button>
                </div>
            </div>
            <div class="resume-score" aria-label="总体准备进度">
                <strong>${progress.percent}%</strong>
                <span>总体准备度</span>
                <div><i style="width:${progress.percent}%"></i></div>
            </div>
        </section>

        <section class="resume-stat-grid">
            <article><span>🎯</span><strong>${progress.known}/${progress.questionTotal}</strong><small>问答已掌握</small></article>
            <article><span>🟡</span><strong>${progress.fuzzy}</strong><small>仍然模糊</small></article>
            <article><span>🔴</span><strong>${progress.hard}</strong><small>需要补课</small></article>
            <article><span>✅</span><strong>${progress.checked}/${progress.checklistTotal}</strong><small>清单已完成</small></article>
        </section>

        <div class="resume-section-heading"><div><span>准备地图</span><h2>按经历逐个击破</h2></div><button onclick="setResumePrepTab('checklist')">查看冲刺清单</button></div>
        <section class="resume-source-grid">${sourceCards}</section>

        <section class="resume-route">
            <div class="resume-section-heading"><div><span>推荐顺序</span><h2>一轮完整准备只走四步</h2></div></div>
            <ol>
                <li><b>01</b><div><strong>先把故事讲顺</strong><span>练熟 30 秒和 1 分钟口述稿，形成稳定主线。</span></div></li>
                <li><b>02</b><div><strong>再把项目讲深</strong><span>每段经历至少准备一个 3 分钟 STAR 故事。</span></div></li>
                <li><b>03</b><div><strong>随机追问验真</strong><span>先口答再看参考答案，并标记掌握程度。</span></div></li>
                <li><b>04</b><div><strong>最后核对边界</strong><span>测试数字、个人贡献和未上线能力都保持准确。</span></div></li>
            </ol>
        </section>`;
    }

    function renderPitches() {
        const pitches = data().pitches.filter(item => state.source === "all" || item.source === state.source);
        return `${renderSourceFilters()}
            <div class="resume-section-heading"><div><span>口述训练</span><h2>先讲顺，再压缩时间</h2></div><small>建议录音回听，删掉口头禅和无效技术名词</small></div>
            <section class="resume-pitch-list">${pitches.map(item => `
                <article class="resume-pitch-card">
                    <header><div><span class="resume-duration">${item.duration}</span><span class="resume-source-chip">${sourceName(item.source)}</span></div><button onclick="copyResumePitch('${item.id}')">复制话术</button></header>
                    <h3>${escape(item.title)}</h3>
                    <p>${escape(item.content)}</p>
                </article>`).join("") || '<p class="resume-empty">这个来源暂时没有独立口述稿。</p>'}</section>`;
    }

    function renderStories() {
        const stories = data().stories.filter(item => state.source === "all" || item.source === state.source);
        return `${renderSourceFilters(["zhishu", "yonyou", "beiruan"])}
            <div class="resume-section-heading"><div><span>STAR 深挖</span><h2>每个故事都能讲清因果与验证</h2></div><small>回答顺序：现象 → 目标 → 定位与修改 → 结果 → 边界</small></div>
            <section class="resume-story-list">${stories.map(item => `
                <article class="resume-story-card">
                    <header><div><span class="resume-source-chip">${sourceName(item.source)}</span><h3>${escape(item.title)}</h3></div><div>${item.tags.map(tag => `<span>${escape(tag)}</span>`).join("")}</div></header>
                    <dl>
                        <div><dt>S</dt><dd><strong>背景</strong>${escape(item.situation)}</dd></div>
                        <div><dt>T</dt><dd><strong>目标</strong>${escape(item.task)}</dd></div>
                        <div><dt>A</dt><dd><strong>行动</strong>${escape(item.action)}</dd></div>
                        <div><dt>R</dt><dd><strong>结果</strong>${escape(item.result)}</dd></div>
                    </dl>
                    <p class="resume-boundary"><b>真实性边界</b>${escape(item.boundary)}</p>
                </article>`).join("")}</section>`;
    }

    function renderQuestions() {
        const questions = data().questions.filter(item => state.source === "all" || item.source === state.source);
        return `<section class="resume-mock-banner">
                <div><span>MOCK INTERVIEW</span><h2>随机抽一道简历追问</h2><p>先完整口答，再展开参考答案并标记掌握程度。</p></div>
                <button onclick="randomResumeQuestion()">🎲 随机抽题</button>
            </section>
            ${renderSourceFilters()}
            <div class="resume-question-tools"><label>🔍 <input type="search" placeholder="搜索问题、技术词或经历…" oninput="filterResumeQuestions(this.value)"></label><span>共 ${questions.length} 道</span></div>
            <section class="resume-question-list">${questions.map(item => {
                const level = state.mastery[item.id] || "";
                const revealed = state.revealed.has(item.id);
                const search = `${item.question} ${item.answer} ${item.followup} ${sourceName(item.source)}`.toLowerCase();
                return `<article class="resume-qa-card${revealed ? " revealed" : ""}${state.mockId === item.id ? " mock-focus" : ""}" id="resume-${item.id}" data-search="${escape(search)}">
                    <button class="resume-question" onclick="toggleResumeAnswer('${item.id}')"><span class="resume-q-mark">Q</span><span><small>${sourceName(item.source)}</small>${escape(item.question)}</span><i>${revealed ? "收起" : "展开"}</i></button>
                    <div class="resume-answer">
                        <p>${escape(item.answer)}</p>
                        <div class="resume-followup"><b>继续追问</b>${escape(item.followup)}</div>
                        <div class="resume-mastery"><span>这题目前：</span>
                            <button class="hard${level === "hard" ? " selected" : ""}" onclick="rateResumeQuestion('${item.id}','hard')">不会</button>
                            <button class="fuzzy${level === "fuzzy" ? " selected" : ""}" onclick="rateResumeQuestion('${item.id}','fuzzy')">模糊</button>
                            <button class="known${level === "known" ? " selected" : ""}" onclick="rateResumeQuestion('${item.id}','known')">掌握</button>
                        </div>
                    </div>
                </article>`;
            }).join("")}</section>`;
    }

    function renderChecklist() {
        const groups = {};
        data().checklist.forEach(item => { (groups[item.group] ||= []).push(item); });
        const progress = getProgress();
        return `<section class="resume-check-head"><div><span>面试冲刺</span><h2>完成一项，勾掉一项</h2><p>进度会保存在本机；登录后可随其他数据同步。</p></div><strong>${progress.checked}/${progress.checklistTotal}</strong></section>
            <div class="resume-check-progress"><span style="width:${Math.round(progress.checked / progress.checklistTotal * 100)}%"></span></div>
            <section class="resume-check-groups">${Object.entries(groups).map(([group, items]) => `
                <article><h3>${escape(group)}<span>${items.filter(item => state.checklist[item.id]).length}/${items.length}</span></h3>
                    ${items.map(item => `<button class="resume-check-item${state.checklist[item.id] ? " checked" : ""}" onclick="toggleResumeChecklist('${item.id}')"><i>${state.checklist[item.id] ? "✓" : ""}</i><span>${escape(item.text)}</span></button>`).join("")}
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
            if (indicator) indicator.textContent = state.revealed.has(id) ? "收起" : "展开";
        }
    };

    window.rateResumeQuestion = function (id, level) {
        state.mastery[id] = level;
        saveProgress();
        const card = document.getElementById(`resume-${id}`);
        card?.querySelectorAll(".resume-mastery button").forEach(button => button.classList.remove("selected"));
        card?.querySelector(`.resume-mastery .${level}`)?.classList.add("selected");
        if (typeof toast === "function") toast(level === "known" ? "已标记为掌握" : level === "fuzzy" ? "已加入模糊题" : "已加入重点复习");
    };

    window.toggleResumeChecklist = function (id) {
        state.checklist[id] = !state.checklist[id];
        saveProgress();
        renderAll();
    };

    window.randomResumeQuestion = function () {
        const pool = data().questions.filter(item => state.source === "all" || item.source === state.source);
        if (!pool.length) return;
        const weaker = pool.filter(item => state.mastery[item.id] !== "known");
        const candidates = weaker.length ? weaker : pool;
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        state.mockId = picked.id;
        state.revealed.delete(picked.id);
        renderAll();
        requestAnimationFrame(() => document.getElementById(`resume-${picked.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    };

    window.filterResumeQuestions = function (value) {
        const query = String(value || "").trim().toLowerCase();
        document.querySelectorAll(".resume-qa-card").forEach(card => {
            card.hidden = !!query && !card.dataset.search.includes(query);
        });
    };

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
