const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
function setup(){
 const store=new Map();
 const app=vm.createContext({console,localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)},
  document:{getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},
  renderAll(){},scrollTo(){},requestAnimationFrame(){},setTimeout(){},clearTimeout(){}});
 app.window=app;
 for(const file of ['resume-data.js','resume-question-expansion.js','resume-claims.js','resume-workbench.js','resume-module.js']){
  const full=path.join(__dirname,'..',file);if(fs.existsSync(full))vm.runInContext(fs.readFileSync(full,'utf8'),app);
 }
 return app;
}
test('resume opens on readable answers without preparation forms or timers',()=>{
 const app=setup(),html=app.renderResumePrep();
 assert.match(html,/id="resume-question-results"/);
 assert.equal((html.match(/class="resume-qa-card revealed/g)||[]).length,20);
 assert.doesNotMatch(html,/textarea|resumeOralClock|本次用时|逐条准备|冲刺清单|我的回答与复盘/);
 for(const tab of ['pitches','stories','sources']){
  app.setResumePrepTab(tab);const page=app.renderResumePrep();
  assert.doesNotMatch(page,/textarea|type="checkbox"|resumeOralClock|结束并记录/);
 }
 app.setResumePrepTab('pitches');
 assert.match(app.renderResumePrep(),/面试官您好/);
 assert.doesNotMatch(app.renderResumePrep(),/查看参考稿/);
});
test('reading pagination and filters stay consistent, including the skills source',()=>{
 const app=setup();app.setResumeReadingPage(2);
 assert.match(app.renderResumePrep(),/21–40/);
 app.setResumePrepSource('beiruan');assert.match(app.renderResumePrep(),/1–20/);
 app.filterResumeQuestions('no-such-question-xxxxx');assert.match(app.renderResumePrep(),/没有匹配的问题/);
 app.resetResumeFilters();app.setResumePrepSource('skills');
 assert.match(app.renderResumePrep(),/技术基础/);
 assert.doesNotMatch(app.renderResumePrep(),/id="resume-q-zhishu-/);
 app.setResumePriority('must');
 const html=app.renderResumePrep();assert.doesNotMatch(html,/data-priority="deep"/);
});
test('linked questions clear unrelated filters and select the right page with the answer visible',()=>{
 const app=setup();const target=app.RESUME_PREP_DATA.questions.at(-1);
 app.filterResumeQuestions('no-such-question');app.setResumePriority('must');app.setResumeTopic('不存在');
 app.practiceResumeQuestion(target.id);
 const html=app.renderResumePrep();
 assert.ok(html.includes(`revealed mock-focus" id="resume-${target.id}"`));
 assert.ok(html.includes(target.answer));
 assert.doesNotMatch(html,/no-such-question/);
});
test('answers can be hidden for recall and random questions remain within the current filter',()=>{
 const app=setup();app.toggleResumeAllAnswers();assert.doesNotMatch(app.renderResumePrep(),/class="resume-qa-card revealed/);
 app.setResumePrepSource('zhishu');app.randomResumeQuestion();
 assert.match(app.renderResumePrep(),/class="resume-qa-card mock-focus" id="resume-q-zhishu-/);
 app.toggleResumeAllAnswers();assert.match(app.renderResumePrep(),/resume-qa-card revealed/);
});
test('every question has substantive direct and follow-up answers with a study category',()=>{
 const app=setup(),qs=app.RESUME_PREP_DATA.questions;
 assert.equal(qs.length,140);assert.equal(new Set(qs.map(q=>q.id)).size,140);
 assert.equal(new Set(qs.map(q=>q.question)).size,140);
 for(const q of qs){
  assert.ok(q.answer.length>=60,`${q.id} needs an answer`);
  assert.ok(q.followupAnswer?.length>=25,`${q.id} needs an answered follow-up`);
  assert.ok(q.topic&&['must','deep'].includes(q.priority),`${q.id} needs classification`);
 }
});
