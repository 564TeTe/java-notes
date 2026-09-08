(function () {
    "use strict";

    const LOCAL_FEED_URL = "./data/recruitment-jobs.json";
    const FEED_URLS = [
        "https://xixicc186.github.io/xixicc2027/jobs.json",
        "https://cdn.jsdelivr.net/gh/xixicc186/xixicc2027@main/jobs.json",
        "https://raw.githubusercontent.com/xixicc186/xixicc2027/main/jobs.json"
    ];
    const FEED_PAGE = "https://xixicc186.github.io/xixicc2027/";
    const APP_KEY = "recruitment-applications";
    const ACTION_KEY = "recruitment-actions";
    const CACHE_KEY = "recruitment-feed-cache";
    const STAGES = ["待投递", "已投递", "笔试", "一面", "二/终面", "Offer", "暂停"];
    const TABS = [
        { id: "radar", icon: "📡", label: "找岗位" },
        { id: "applications", icon: "📮", label: "我的投递" },
        { id: "timeline", icon: "🗓️", label: "招聘日程" },
        { id: "resources", icon: "🔗", label: "常用入口" }
    ];
    const TIMELINE = [
        { id: "prepare", start: "2026-03-01", end: "2026-05-31", date: "3—5 月", title: "基础准备", desc: "确定岗位方向，完成简历初版、项目深挖和算法基础。", action: "每周至少一次模拟面试，形成可复用的项目口述。" },
        { id: "early", start: "2026-06-01", end: "2026-07-31", date: "6—7 月", title: "提前批", desc: "关注大厂技术专项、提前批和实习转正机会。", action: "小批量投递并校准简历，别把所有目标公司一次投完。" },
        { id: "peak", start: "2026-08-01", end: "2026-09-30", date: "8—9 月", title: "正式批高峰", desc: "互联网、科技、制造和部分央国企集中开放。", action: "每天查新增与截止岗位，优先投递匹配度高且刚开放的职位。" },
        { id: "interview", start: "2026-10-01", end: "2026-11-15", date: "10—11 月", title: "笔面试密集期", desc: "笔试、技术面和 HR 面集中，部分公司开始发 Offer。", action: "当天复盘面试题；超过 7 个工作日无反馈可礼貌跟进。" },
        { id: "supplement", start: "2026-11-16", end: "2027-01-31", date: "11 月下—1 月", title: "补录与签约", desc: "关注补录、毁约释放名额与 Offer 比较。", action: "核对三方、薪资结构、工作地点和违约条款，谨慎做决定。" },
        { id: "spring", start: "2027-02-01", end: "2027-05-31", date: "次年 2—5 月", title: "春招补位", desc: "未定去向或希望升级 Offer，可继续参加春招和补录。", action: "复盘秋招漏斗，只补最影响结果的短板。" }
    ];
    const WEEKLY_ACTIONS = [
        { id: "scan", text: "查看最近 3 天新增岗位和临近截止项" },
        { id: "target", text: "新增 5 家目标公司，并按 A/B/C 档排序" },
        { id: "apply", text: "完成本周高匹配岗位投递，不为凑数海投" },
        { id: "mail", text: "检查邮箱、短信、招聘官网状态和垃圾箱" },
        { id: "review", text: "当天复盘笔试/面试，并更新下一步动作" }
    ];
    const RESOURCES = [
        { name: "2027 届秋招实时聚合", url: FEED_PAGE, icon: "📡", tag: "每日更新", desc: "跨行业岗位聚合，可按行业、关键词和截止时间筛选；社区维护，投递前需官网核验。" },
        { name: "牛客校招日程", url: "https://www.nowcoder.com/jobs/school/schedule?tab=3", icon: "🐮", tag: "24h 更新", desc: "集中查看 27 届秋招、校招与实习信息，适合快速发现新开放岗位。" },
        { name: "国家大学生就业服务平台", url: "https://www.ncss.cn/", icon: "🏛️", tag: "官方平台", desc: "教育部主管就业服务入口，适合关注地方、国企、事业单位和专场招聘。" },
        { name: "字节跳动校园招聘", url: "https://jobs.bytedance.com/campus", icon: "🎵", tag: "企业官网", desc: "校园职位、应聘记录和招聘 FAQ；最终岗位状态以官网为准。" },
        { name: "腾讯校园招聘", url: "https://join.qq.com/", icon: "🐧", tag: "企业官网", desc: "腾讯校园招聘长期入口，可查看中国区校园职位和个人投递状态。" },
        { name: "阿里巴巴校园招聘", url: "https://campus-talent.alibaba.com/", icon: "🟠", tag: "企业官网", desc: "阿里巴巴校招项目与职位入口，适合直接搜索后端、Java 与 AI 应用岗位。" },
        { name: "美团招聘", url: "https://career.meituan.com/", icon: "🟡", tag: "企业官网", desc: "校园招聘、北斗计划、转正实习和日常实习的统一入口。" },
        { name: "华为校园招聘", url: "https://career.huawei.com/reccampportal/portal5/index.html", icon: "🌺", tag: "企业官网", desc: "华为应届生与实习生职位入口，适合关注软件开发和云服务方向。" }
    ];

    const state = {
        tab: "radar",
        feed: null,
        loading: false,
        error: "",
        // Information coverage is the default; users can narrow to Java/backend on demand.
        fitOnly: false,
        industry: "全部",
        search: "",
        limit: 12,
        formOpen: false,
        editingId: null,
        stageFilter: "全部",
        feedSource: "",
        attempted: false,
        sort: "latest",
        cohort: "全部届次",
        batch: "全部批次"
    };
    let applications = readJSON(APP_KEY, []);
    let actionChecks = readJSON(ACTION_KEY, {});

    function readJSON(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; }
        catch (_) { return fallback; }
    }
    function esc(value) {
        return String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    }
    function safeUrl(value) {
        try { const url = new URL(value); return /^https?:$/.test(url.protocol) ? url.href : ""; }
        catch (_) { return ""; }
    }
    function rerender() {
        if (typeof showRecruitment !== "undefined" && showRecruitment && typeof renderAll === "function") renderAll();
    }
    function persist() {
        localStorage.setItem(APP_KEY, JSON.stringify(applications));
        localStorage.setItem(ACTION_KEY, JSON.stringify(actionChecks));
        if (typeof scheduleCloudSync === "function") scheduleCloudSync();
    }
    function notify(message) {
        if (typeof toast === "function") toast(message);
    }
    function formatDate(value) {
        if (!value) return "未注明";
        const date = new Date(`${value}T00:00:00`);
        if (Number.isNaN(date.getTime())) return value;
        return `${date.getMonth() + 1}月${date.getDate()}日`;
    }
    function currentPhase() {
        const now = new Date();
        const found = TIMELINE.find(item => now >= new Date(`${item.start}T00:00:00`) && now <= new Date(`${item.end}T23:59:59`));
        if (found) return found;
        if (now < new Date(`${TIMELINE[0].start}T00:00:00`)) return TIMELINE[0];
        return TIMELINE[TIMELINE.length - 1];
    }
    function isTargetPosition(value) {
        const text = String(value || "").toLowerCase();
        if (/(嵌入式|固件|芯片|ic后端|ic设计|版图|模拟电路|数字电路|射频|纯前端)/i.test(text)) return false;
        return /(java|后端开发|服务端|平台研发|全栈开发|软件研发|软件开发岗|ai应用|agent|云计算|大数据开发)/i.test(text);
    }
    function isFit(job) {
        return (job.positions || []).some(isTargetPosition) || isTargetPosition(job.program);
    }
    function normalizeJobs(data) {
        const jobs = Array.isArray(data) ? data : (data?.jobs || data?.data || []);
        const asArray = value => Array.isArray(value) ? value : value == null || value === '' ? [] : [String(value)];
        const unique = new Map();
        // Keep every campus/recruiting record supplied by the feed. Cohort is a
        // user filter, so older or open-ended batches must remain discoverable.
        jobs.filter(job => job)
            .forEach(job => {
                const normalized = { ...job, positions: asArray(job.positions), locations: asArray(job.locations) };
                const key = [normalized.company, normalized.program, normalized.batch, normalized.positions.join(","), normalized.locations.join(","), normalized.apply_url].join("|");
                if (!unique.has(key)) unique.set(key, normalized);
            });
        return [...unique.values()].sort((a, b) => String(b.last_seen || b.first_seen || "").localeCompare(String(a.last_seen || a.first_seen || "")));
    }

    async function loadFeed(force) {
        if (state.loading || (state.feed && !force)) return;
        state.loading = true;
        state.attempted = true;
        state.error = "";
        rerender();
        // Try the live aggregators first so the radar is actually current. The
        // local snapshot remains a reliable fallback for offline or blocked networks.
        const sources = [...FEED_URLS, LOCAL_FEED_URL];
        let loaded = false;
        for (const source of sources) {
            try {
                const separator = source.includes("?") ? "&" : "?";
                const response = await fetch(`${source}${separator}t=${force ? Date.now() : "latest"}`, { cache: "no-store", signal: AbortSignal.timeout(6000) });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const jobs = normalizeJobs(await response.json());
                if (jobs.length < 20) throw new Error("岗位数据不完整");
                state.feed = jobs;
                state.feedSource = source === LOCAL_FEED_URL ? "本站快照" : "在线数据";
                localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: new Date().toISOString(), jobs: jobs.slice(0, 2000) }));
                loaded = true;
                break;
            } catch (_) {
                // 手机网络可能无法访问部分 GitHub/CDN 域名，继续尝试下一来源。
            }
        }
        if (!loaded) {
            const cached = readJSON(CACHE_KEY, null);
            if (cached?.jobs?.length) { state.feed = cached.jobs; state.feedSource = "离线缓存"; state.error = "更新暂不可用，正在显示已保存的岗位。"; }
            else state.error = "实时岗位暂时加载失败，请稍后刷新或使用下方可靠入口。";
        }
        state.loading = false;
        // A background feed response must not replace an in-progress form.
        if (!state.formOpen) rerender();
    }

    function tabsHTML() {
        return `<nav class="recruit-tabs" aria-label="秋招专区导航">${TABS.map(tab => `<button aria-current="${state.tab === tab.id ? "page" : "false"}" class="recruit-tab${state.tab === tab.id ? " active" : ""}" onclick="setRecruitmentTab('${tab.id}')">${tab.label}</button>`).join("")}</nav>`;
    }
    function applicationStats() {
        const count = name => applications.filter(item => item.stage === name).length;
        return { total: applications.length, sent: applications.filter(item => item.stage !== "待投递" && item.stage !== "暂停").length, interview: count("一面") + count("二/终面"), offer: count("Offer") };
    }
    function heroHTML() {
        const phase = currentPhase();
        const stats = applicationStats();
        const feedCount = state.feed?.length || 0;
        const fresh = state.feed?.filter(job => String(job.last_seen || job.first_seen || '').slice(0,10) >= new Date(Date.now()-3*86400000).toISOString().slice(0,10)).length || 0;
        return `<section class="recruit-overview"><div class="recruit-overview-main"><span class="recruit-kicker">JOB RADAR · 2027 CAMPUS</span><h2>今天有哪些新岗位？</h2><p>集中浏览校招、提前批和实习转正机会。岗位信息按更新时间更新，投递前请回到官网核验。</p><div class="recruit-overview-actions"><button class="career-primary" onclick="refreshRecruitmentFeed()">↻ 更新岗位</button><button class="career-secondary" onclick="setRecruitmentFit(true)">只看 Java / 后端 / AI</button></div></div><div class="recruit-overview-stats"><div><strong>${feedCount}</strong><span>已收录岗位</span></div><div><strong>${fresh}</strong><span>近 3 天更新</span></div><div><strong>${stats.total}</strong><span>我的投递</span></div><small>当前：${phase.title} · ${phase.date}</small></div></section>`;
    }

    function filteredJobs() {
        if (!state.feed) return [];
        const keyword = state.search.trim().toLowerCase();
        const results = state.feed.map((job, index) => ({ job, index })).filter(({ job }) => {
            if (state.fitOnly && !isFit(job)) return false;
            if (state.industry !== "全部" && job.industry !== state.industry) return false;
            if (state.cohort !== "全部届次" && job.cohort !== state.cohort) return false;
            if (state.batch !== "全部批次" && job.batch !== state.batch) return false;
            if (!keyword) return true;
            return [job.company, job.program, job.industry, ...(job.positions || []), ...(job.locations || [])].join(" ").toLowerCase().includes(keyword);
        });
        return results.sort((a, b) => {
            const ad = String(a.job.last_seen || a.job.first_seen || ""), bd = String(b.job.last_seen || b.job.first_seen || "");
            if (state.sort === "deadline") return String(a.job.deadline || "9999").localeCompare(String(b.job.deadline || "9999"));
            if (state.sort === "company") return String(a.job.company).localeCompare(String(b.job.company));
            return bd.localeCompare(ad);
        });
    }
    function jobCard(job, index) {
        const allPositions = job.positions || [];
        const matchedPositions = allPositions.filter(isTargetPosition);
        const positions = (state.fitOnly && matchedPositions.length ? matchedPositions : allPositions).slice(0, 3);
        const locations = (job.locations || []).slice(0, 4).join(" · ") || "地点待确认";
        const applyUrl = safeUrl(job.apply_url);
        const sourceKey = [job.company, job.program, job.batch, allPositions.join(','), (job.locations || []).join(','), job.apply_url || ''].join('|');
        const added = applications.some(item => item.sourceKey === sourceKey);
        return `<article class="recruit-job-card">
            <header><div><span class="recruit-company-icon">${esc(String(job.company || "岗").slice(0, 1))}</span><div><h3>${esc(job.company)}</h3><p>${esc(job.program || job.batch || "校园招聘")}</p></div></div><span class="recruit-batch">${esc(job.batch || "校招")}</span></header>
            <div class="recruit-job-tags">${positions.length ? positions.map(item => `<span>${esc(item)}</span>`).join("") : "<span>岗位以公告为准</span>"}</div>
            <p class="recruit-job-meta">📍 ${esc(locations)}</p>
            <p class="recruit-job-meta">🕒 更新 ${esc(formatDate(job.last_seen || job.first_seen))}${job.deadline ? ` · <b class="recruit-deadline">截止 ${esc(formatDate(job.deadline))}</b>` : ""}</p><p class="recruit-job-source">${job.confirmed_by ? `✓ ${esc(job.confirmed_by)} 个来源核对` : "线索待官网核验"}</p>
            <footer>${applyUrl ? `<a href="${esc(applyUrl)}" target="_blank" rel="noopener">查看岗位 ↗</a>` : `<a href="${FEED_PAGE}" target="_blank" rel="noopener">查看来源 ↗</a>`}<button${added ? " disabled" : ""} onclick="addRecruitmentJob(${index})">${added ? "已加入" : "＋ 加入投递"}</button></footer>
        </article>`;
    }
    function radarHTML() {
        if (!state.feed && !state.loading && !state.attempted) setTimeout(() => loadFeed(false), 0);
        const industries = state.feed ? ["全部", ...new Set(state.feed.map(item => item.industry).filter(Boolean))] : ["全部"];
        const jobs = filteredJobs();
        const feedState = state.loading && !state.feed ? `<div class="recruit-feed-state"><span class="recruit-loader"></span><b>正在获取最新秋招信息…</b><small>首次加载约需几秒</small></div>`
            : state.error && !state.feed ? `<div class="recruit-feed-state error"><b>${state.error}</b><button onclick="refreshRecruitmentFeed()">重新加载</button></div>`
            : jobs.length ? `<div class="recruit-job-grid">${jobs.slice(0, state.limit).map(({ job, index }) => jobCard(job, index)).join("")}</div>${jobs.length > state.limit ? `<button class="recruit-load-more" onclick="loadMoreRecruitmentJobs()">再看 ${Math.min(12, jobs.length - state.limit)} 条</button>` : ""}`
            : `<div class="recruit-feed-state"><b>没有匹配结果</b><small>换个关键词或查看全部岗位。</small><button onclick="resetRecruitmentFilters()">清空筛选</button></div>`;
        return `${heroHTML()}<section class="recruit-panel">
            <div class="recruit-panel-head"><div><h2>发现下一份机会</h2><p>按方向找岗位，感兴趣就加入投递记录。</p></div><button onclick="refreshRecruitmentFeed()" ${state.loading ? "disabled" : ""}>${state.loading ? "更新中…" : "↻ 更新岗位"}</button></div>
            <div class="recruit-toolbar"><div class="recruit-toggle"><button class="${state.fitOnly ? "active" : ""}" onclick="setRecruitmentFit(true)">Java / 后端 / AI</button><button class="${!state.fitOnly ? "active" : ""}" onclick="setRecruitmentFit(false)">全部岗位</button></div>
            <form onsubmit="searchRecruitment(event)"><input aria-label="搜索公司、岗位或城市" type="search" name="keyword" value="${esc(state.search)}" placeholder="公司、岗位、城市、关键词…"><button>搜索</button></form>
            <select aria-label="按行业筛选" onchange="setRecruitmentIndustry(this.value)">${industries.map(item => `<option${state.industry === item ? " selected" : ""}>${esc(item)}</option>`).join("")}</select><select aria-label="按届次筛选" onchange="setRecruitmentCohort(this.value)">${['全部届次', ...new Set((state.feed || []).map(item => item.cohort).filter(Boolean))].map(item => `<option${state.cohort === item ? ' selected' : ''}>${esc(item)}</option>`).join('')}</select><select aria-label="按批次筛选" onchange="setRecruitmentBatch(this.value)">${['全部批次', ...new Set((state.feed || []).map(item => item.batch).filter(Boolean))].map(item => `<option${state.batch === item ? ' selected' : ''}>${esc(item)}</option>`).join('')}</select><select aria-label="按截止日期排序" onchange="setRecruitmentSort(this.value)"><option value="latest"${state.sort === 'latest' ? ' selected' : ''}>最新更新</option><option value="deadline"${state.sort === 'deadline' ? ' selected' : ''}>即将截止</option><option value="company"${state.sort === 'company' ? ' selected' : ''}>按公司</option></select></div>
            <div class="recruit-feed-summary">${state.feed ? `<span><b>${jobs.length}</b> 个匹配岗位 · ${esc(state.feedSource)}${latestFeedDate() ? ` · 数据日期 ${esc(formatDate(latestFeedDate()))}` : ""}</span><button class="career-text" onclick="resetRecruitmentFilters()">清空筛选</button>` : "等待数据"}</div>${state.error && state.feed ? `<p class="recruit-data-note" role="status">${esc(state.error)}</p>` : ""}${feedState}<p class="recruit-data-note">岗位是否开放、截止时间及要求，请以企业官网为准。</p>
        </section>`;
    }

    function formHTML() {
        if (!state.formOpen) return "";
        const item = applications.find(app => app.id === state.editingId) || {};
        return `<div class="recruit-modal-backdrop" onclick="closeRecruitmentForm(event)"><form class="recruit-form" role="dialog" aria-modal="true" aria-labelledby="recruit-form-title" onclick="event.stopPropagation()" onsubmit="saveRecruitmentApplication(event)">
            <header><div><span>${item.id ? "编辑投递" : "新增投递"}</span><h2 id="recruit-form-title">${item.id ? esc(item.company) : "记录一个目标岗位"}</h2></div><button type="button" aria-label="关闭投递表单" onclick="closeRecruitmentForm()">×</button></header>
            <div class="recruit-form-grid"><label>公司<input required name="company" value="${esc(item.company || "")}" placeholder="例如：美团"></label><label>岗位<input required name="role" value="${esc(item.role || "")}" placeholder="Java 后端开发"></label>
            <label>当前状态<select name="stage">${STAGES.map(stage => `<option${item.stage === stage ? " selected" : ""}>${stage}</option>`).join("")}</select></label><label>投递/计划日期<input name="date" type="date" value="${esc(item.date || new Date().toISOString().slice(0, 10))}"></label>
            <label>截止日期<input name="deadline" type="date" value="${esc(item.deadline || "")}"></label><label>投递链接<input name="url" type="url" value="${esc(item.url || "")}" placeholder="https://…"></label></div>
            <label>下一步 / 备注<textarea name="note" placeholder="例如：9 月 10 日前补完项目介绍后投递">${esc(item.note || "")}</textarea></label>
            <footer><button type="button" onclick="closeRecruitmentForm()">取消</button><button type="submit">保存记录</button></footer>
        </form></div>`;
    }
    function applicationCard(item) {
        const url = safeUrl(item.url);
        return `<article class="recruit-application-card">
            <div class="recruit-app-main"><span>${esc(item.company.slice(0, 1))}</span><div><h3>${esc(item.company)}</h3><p>${esc(item.role)}</p></div></div>
            <div class="recruit-app-controls"><select aria-label="更新 ${esc(item.company)} 状态" onchange="updateRecruitmentStage('${esc(item.id)}', this.value)">${STAGES.map(stage => `<option${item.stage === stage ? " selected" : ""}>${stage}</option>`).join("")}</select><small>${esc(formatDate(item.date))}</small></div>
            ${item.deadline ? `<p class="recruit-app-deadline">截止 ${esc(formatDate(item.deadline))}</p>` : ""}<p class="recruit-app-note">${esc(item.note || "还没有记录下一步动作")}</p>
            <footer>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener">打开投递页 ↗</a>` : "<span>未添加链接</span>"}<div><button onclick="openRecruitmentForm('${esc(item.id)}')">编辑</button><button class="danger" onclick="deleteRecruitmentApplication('${esc(item.id)}')">删除</button></div></footer>
        </article>`;
    }
    function applicationsHTML() {
        const visible = applications.filter(item => state.stageFilter === "全部" || item.stage === state.stageFilter);
        return `<section class="recruit-panel"><div class="recruit-panel-head"><div><h2>我的投递</h2><p>记录当前进展，让每次投递都有下一步。</p></div><button class="primary" onclick="openRecruitmentForm()">＋ 新增投递</button></div>
        <div class="recruit-pipeline" aria-label="按投递阶段筛选">${["全部", ...STAGES].map(stage => `<button aria-pressed="${state.stageFilter === stage}" class="${state.stageFilter === stage ? "active" : ""}" onclick="setRecruitmentStageFilter('${stage}')"><span>${stage}</span><strong>${stage === "全部" ? applications.length : applications.filter(item => item.stage === stage).length}</strong></button>`).join("")}</div>
        ${visible.length ? `<div class="recruit-application-grid">${visible.slice().sort((a, b) => String(b.date).localeCompare(String(a.date))).map(applicationCard).join("")}</div>` : applications.length ? `<div class="career-empty"><span aria-hidden="true">◷</span><h3>这个阶段还没有记录</h3><p>选择其他阶段，或查看全部投递。</p><button class="career-secondary" onclick="setRecruitmentStageFilter('全部')">查看全部投递</button></div>` : `<div class="career-empty"><span aria-hidden="true">＋</span><h3>从第一个目标岗位开始</h3><p>发现心仪岗位后点“加入投递”，也可以手动记录。</p><button class="career-primary" onclick="setRecruitmentTab('radar')">去找岗位 →</button></div>`}</section>${formHTML()}`;
    }

    function timelineHTML() {
        const phase = currentPhase();
        const completed = WEEKLY_ACTIONS.filter(item => actionChecks[item.id]).length;
        return `<section class="recruit-panel"><div class="recruit-panel-head"><div><h2>2027 届秋招时间线</h2><p>时间以常见校招节奏为参考，不同企业会提前或延后；当前阶段由日期自动定位。</p></div><div class="recruit-current-pill">现在：${phase.title}</div></div>
        <div class="recruit-timeline">${TIMELINE.map((item, index) => `<article class="${item.id === phase.id ? "current" : ""}"><div class="recruit-time-marker"><i>${index + 1}</i><span></span></div><div><small>${item.date}</small><h3>${item.title}${item.id === phase.id ? " <b>进行中</b>" : ""}</h3><p>${item.desc}</p><em>${item.action}</em></div></article>`).join("")}</div>
        <div class="recruit-weekly"><div class="recruit-weekly-head"><div><span>本周执行</span><h2>把阶段目标落到五个动作</h2></div><strong>${completed}/${WEEKLY_ACTIONS.length}</strong></div><div class="recruit-weekly-progress"><span style="width:${completed / WEEKLY_ACTIONS.length * 100}%"></span></div>
        ${WEEKLY_ACTIONS.map(item => `<button class="${actionChecks[item.id] ? "checked" : ""}" onclick="toggleRecruitmentAction('${item.id}')"><i>${actionChecks[item.id] ? "✓" : ""}</i><span>${item.text}</span></button>`).join("")}</div></section>`;
    }
    function resourcesHTML() {
        return `<section class="recruit-panel recruit-resource-panel"><div class="recruit-panel-head"><div><h2>常用招聘入口</h2><p>聚合站负责发现机会，企业官网负责确认岗位、截止时间和投递状态。</p></div></div>
        <div class="recruit-resource-grid">${RESOURCES.map(item => `<a href="${item.url}" target="_blank" rel="noopener"><header><span>${item.icon}</span><i>${item.tag}</i></header><h3>${item.name}</h3><p>${item.desc}</p><b>${new URL(item.url).hostname} ↗</b></a>`).join("")}</div>
        <div class="recruit-source-note">信息校验原则：聚合页、群聊和公众号只能作为线索；涉及网申、截止日期、笔试安排和个人状态时，一律回到企业招聘官网确认。不要为内推付费。</div></section>`;
    }

    window.renderRecruitment = function () {
        const body = state.tab === "applications" ? applicationsHTML() : state.tab === "timeline" ? timelineHTML() : state.tab === "resources" ? resourcesHTML() : radarHTML();
        return `<div class="recruitment-hub">${tabsHTML()}${body}</div>`;
    };
    window.renderRecruitmentTOC = function () {
        return TABS.map(tab => `<li><button class="toc-item recruitment-toc${state.tab === tab.id ? " active" : ""}" onclick="setRecruitmentTab('${tab.id}')"><span class="q-text">${tab.icon} ${tab.label}</span></button></li>`).join("");
    };
    window.setRecruitmentTab = function (tab) {
        if (!TABS.some(item => item.id === tab)) return;
        state.tab = tab;
        state.formOpen = false;
        rerender();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    function latestFeedDate() { return state.feed?.reduce((latest, item) => { const date = String(item.last_seen || item.first_seen || ""); return date > latest ? date : latest; }, "") || ""; }
    window.resetRecruitmentFilters = function () { state.search = ""; state.industry = "全部"; state.cohort = "全部届次"; state.batch = "全部批次"; state.fitOnly = false; state.sort = "latest"; state.limit = 12; rerender(); };
    window.setRecruitmentStageFilter = function (stage) { state.stageFilter = ["全部", ...STAGES].includes(stage) ? stage : "全部"; rerender(); };
    window.refreshRecruitmentFeed = function () { state.limit = 12; loadFeed(true); };
    window.setRecruitmentFit = function (value) { state.fitOnly = value; state.limit = 12; rerender(); };
    window.setRecruitmentIndustry = function (value) { state.industry = value; state.limit = 12; rerender(); };
    window.setRecruitmentSort = function (value) { state.sort = ['latest','deadline','company'].includes(value) ? value : 'latest'; state.limit = 12; rerender(); };
    window.setRecruitmentCohort = function (value) { state.cohort = value || '全部届次'; state.limit = 12; rerender(); };
    window.setRecruitmentBatch = function (value) { state.batch = value || '全部批次'; state.limit = 12; rerender(); };
    window.searchRecruitment = function (event) { event.preventDefault(); state.search = new FormData(event.currentTarget).get("keyword") || ""; state.limit = 12; rerender(); };
    window.loadMoreRecruitmentJobs = function () { state.limit += 12; rerender(); };
    window.addRecruitmentJob = function (index) {
        const job = state.feed?.[index];
        if (!job) return;
        const sourceKey = [job.company, job.program, job.batch, ...(Array.isArray(job.positions) ? [job.positions.join(',')] : [job.positions || '']), ...(Array.isArray(job.locations) ? [job.locations.join(',')] : [job.locations || '']), job.apply_url || ''].join('|');
        if (applications.some(item => item.sourceKey === sourceKey)) return;
        const positions = Array.isArray(job.positions) ? job.positions : [];
        const role = positions.find(isTargetPosition) || positions[0] || job.program || "待确认岗位";
        applications.unshift({ id: `app-${Date.now()}`, company: job.company || "未命名公司", role, stage: "待投递", date: new Date().toISOString().slice(0, 10), deadline: job.deadline || "", url: safeUrl(job.apply_url) || FEED_PAGE, note: "核对官网 JD 与届次后投递", sourceKey });
        persist();
        notify("已加入我的投递看板");
        rerender();
    };
    window.openRecruitmentForm = function (id) { state.formOpen = true; state.editingId = id || null; if (state.tab !== "applications") state.tab = "applications"; rerender(); requestAnimationFrame(() => document.querySelector('.recruit-form input[name="company"]')?.focus()); };
    window.closeRecruitmentForm = function (event) { if (event && event.target !== event.currentTarget) return; state.formOpen = false; state.editingId = null; rerender(); requestAnimationFrame(() => document.querySelector(".recruit-panel-head .primary")?.focus()); };
    window.saveRecruitmentApplication = function (event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        const item = { id: state.editingId || `app-${Date.now()}`, company: String(data.company).trim(), role: String(data.role).trim(), stage: STAGES.includes(data.stage) ? data.stage : "待投递", date: data.date || "", deadline: data.deadline || "", url: safeUrl(data.url), note: String(data.note || "").trim() };
        if (!item.company || !item.role) { notify("请填写公司和岗位名称"); return; }
        const index = applications.findIndex(app => app.id === item.id);
        if (index >= 0) applications[index] = { ...applications[index], ...item }; else applications.unshift(item);
        state.formOpen = false; state.editingId = null; state.stageFilter = "全部"; persist(); notify("投递记录已保存"); rerender();
    };
    window.updateRecruitmentStage = function (id, stage) { const item = applications.find(app => app.id === id); if (!item || !STAGES.includes(stage)) return; item.stage = stage; persist(); notify(`已更新为${stage}`); rerender(); };
    window.deleteRecruitmentApplication = function (id) { if (!confirm("删除这条投递记录？")) return; applications = applications.filter(item => item.id !== id); persist(); notify("投递记录已删除"); rerender(); };
    window.toggleRecruitmentAction = function (id) { actionChecks[id] = !actionChecks[id]; persist(); rerender(); };
    document.addEventListener("keydown", event => {
        if (!state.formOpen) return;
        if (event.key === "Escape") { event.preventDefault(); window.closeRecruitmentForm(); }
        if (event.key !== "Tab") return;
        const controls = document.querySelectorAll(".recruit-form button, .recruit-form input, .recruit-form select, .recruit-form textarea");
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    });
    window.getRecruitmentSnapshot = function () { return { applications, actionChecks }; };
    window.applyRecruitmentSnapshot = function (snapshot) {
        if (!snapshot || typeof snapshot !== "object") return;
        applications = Array.isArray(snapshot.applications) ? snapshot.applications : [];
        actionChecks = snapshot.actionChecks && typeof snapshot.actionChecks === "object" ? snapshot.actionChecks : {};
        localStorage.setItem(APP_KEY, JSON.stringify(applications));
        localStorage.setItem(ACTION_KEY, JSON.stringify(actionChecks));
    };
})();
