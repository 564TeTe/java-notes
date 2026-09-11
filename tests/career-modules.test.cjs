const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function setup(module) {
    const storage = new Map();
    const context = vm.createContext({
        localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
        document: { querySelectorAll: () => [], querySelector: () => null, getElementById: () => null, addEventListener: () => {} },
        renderAll() {}, scrollTo() {}, requestAnimationFrame() {}, setTimeout() {},
        showRecruitment: true, URL, FormData, console
    });
    context.window = context;
    for (const file of module === 'resume' ? ['resume-data.js', 'resume-module.js'] : ['recruitment-module.js']) {
        vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
    }
    return context;
}

test('resume search survives source changes and reports an actionable empty state', () => {
    const app = setup('resume');
    app.setResumePrepTab('questions');
    app.filterResumeQuestions('no-match-987654');
    app.setResumePrepSource('zhishu');
    const html = app.renderResumePrep();
    assert.match(html, /value="no-match-987654"/);
    assert.match(html, /没有匹配的问题/);
    assert.match(html, /清空筛选/);
});

test('weak review excludes known and unreviewed questions; reset restores the full list', () => {
    const app = setup('resume');
    const [weak, known, unreviewed] = app.RESUME_PREP_DATA.questions;
    app.applyResumePrepSnapshot({ mastery: { [weak.id]: 'hard', [known.id]: 'known' }, checklist: {} });
    app.setResumePrepTab('questions');
    app.setResumePrepMastery('weak');
    const html = app.renderResumePrep();
    assert.ok(html.includes(`id="resume-${weak.id}"`));
    assert.ok(!html.includes(`id="resume-${known.id}"`));
    assert.ok(!html.includes(`id="resume-${unreviewed.id}"`));
    app.resetResumeFilters();
    assert.ok(app.renderResumePrep().includes(`id="resume-${unreviewed.id}"`));
});

test('recommended question opens the exact card and clears stale filters and its answer', () => {
    const app = setup('resume');
    const id = 'q-zhishu-3';
    app.toggleResumeAnswer(id);
    app.filterResumeQuestions('no-match-987654');
    app.setResumePrepMastery('known');
    app.practiceResumeQuestion(id);
    const html = app.renderResumePrep();
    assert.match(html, new RegExp(`class="resume-qa-card mock-focus" id="resume-${id}"`));
    assert.doesNotMatch(html, /no-match-987654/);
    assert.match(html, /option value="all" selected/);
});

test('random practice avoids immediate repetition when another eligible question exists', () => {
    const app = setup('resume');
    vm.runInContext('Math.random = () => 0', app);
    app.startResumePractice();
    const selected = () => app.renderResumePrep().match(/mock-focus" id="resume-([^"]+)"/)[1];
    const first = selected();
    app.randomResumeQuestion();
    assert.notEqual(selected(), first);
    app.applyResumePrepSnapshot({mastery: Object.fromEntries(app.RESUME_PREP_DATA.questions.map(q => [q.id, q.id === first ? 'hard' : 'known']))});
    app.randomResumeQuestion();
    assert.equal(selected(), first, 'priority still goes to the only weak question');
});

test('personal answers save, round-trip, escape HTML, and survive legacy snapshots', () => {
    const app = setup('resume');
    const id = 'q-zhishu-3';
    const answer = '</textarea><script>alert(1)</script>\n我的复盘';
    let syncs = 0;
    app.scheduleCloudSync = () => syncs++;
    app.saveResumeDraft(id, answer);
    assert.equal(syncs, 1);
    assert.equal(JSON.parse(app.localStorage.getItem('resume-prep-drafts'))[id], answer);
    const snapshot = JSON.parse(JSON.stringify(app.getResumePrepSnapshot()));
    app.applyResumePrepSnapshot({mastery:{}, checklist:{}});
    assert.equal(app.getResumePrepSnapshot().drafts[id], answer);
    app.applyResumePrepSnapshot({drafts:{}});
    assert.equal(app.getResumePrepSnapshot().drafts[id], undefined);
    app.applyResumePrepSnapshot(snapshot);
    app.setResumePrepTab('questions');
    assert.match(app.renderResumePrep(), /&lt;\/textarea&gt;&lt;script&gt;/);
    assert.doesNotMatch(app.renderResumePrep(), /<script>alert/);
    app.saveResumeDraft(id, '');
    assert.equal(app.getResumePrepSnapshot().drafts[id], undefined);
});

test('malformed drafts cannot render objects or pollute other questions', () => {
    const app = setup('resume');
    app.saveResumeDraft('q-zhishu-3', '保留');
    app.applyResumePrepSnapshot({drafts:null});
    assert.equal(app.getResumePrepSnapshot().drafts['q-zhishu-3'], '保留');
    app.applyResumePrepSnapshot({drafts:{'q-zhishu-3': {}, 'unknown': '忽略', 'q-zhishu-4': '有效'}});
    assert.equal(JSON.stringify(app.getResumePrepSnapshot().drafts), '{"q-zhishu-4":"有效"}');
    app.saveResumeDraft('unknown', '忽略');
    assert.equal(app.getResumePrepSnapshot().drafts.unknown, undefined);
});

test('application stages filter records without changing saved data', () => {
    const app = setup('recruitment');
    app.applyRecruitmentSnapshot({ applications: [
        { id: 'a', company: '目标甲', role: 'Java', stage: '待投递' },
        { id: 'b', company: '目标乙', role: 'Java', stage: '一面' }
    ] });
    app.setRecruitmentTab('applications');
    app.setRecruitmentStageFilter('一面');
    assert.match(app.renderRecruitment(), /目标乙/);
    assert.doesNotMatch(app.renderRecruitment(), /目标甲/);
    assert.equal(app.getRecruitmentSnapshot().applications.length, 2);
    app.setRecruitmentStageFilter('Offer');
    assert.match(app.renderRecruitment(), /这个阶段还没有记录/);
    app.setRecruitmentStageFilter('全部');
    assert.match(app.renderRecruitment(), /目标甲/);
});
test('recruitment resource hub includes all requested campus job links', () => {
    const app = setup('recruitment');
    app.setRecruitmentTab('resources');
    const html = app.renderRecruitment();
    for (const url of [
        'xixicc186.github.io/xixicc2027', 'offernotes.cn', 'gankinterview.cn/campus',
        'nowcoder.com/jobs/school/schedule', 'hub.offercontext.cn', 'offer-cat.com',
        'campus2027.top', 'offercoming.cn', 'www.yingjiesheng.com', '101.132.173.68/campus/campus_recruit.html'
    ]) assert.ok(html.includes(url), `missing resource: ${url}`);
});
