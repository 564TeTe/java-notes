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
