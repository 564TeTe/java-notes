const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
function setup(){
 const storage=new Map(),events={};let now=10000,interval;
 const context=vm.createContext({console,Date:class extends Date{static now(){return now;}},
  localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},
  document:{getElementById:()=>null,querySelector:()=>null,addEventListener:(name,fn)=>events[name]=fn},
  addEventListener:(name,fn)=>events[name]=fn,
  setInterval:f=>{interval=f;return 1;},clearInterval:()=>{interval=null;},renderAll(){},toast(){},
  RESUME_PREP_DATA:{sources:[{id:'beiruan',shortName:'北软'}],pitches:[{id:'pitch-60',source:'beiruan',duration:'1 分钟',title:'实习介绍',content:'参考内容'}],questions:[]},
  RESUME_CLAIMS:{date:'2026-09-16',items:[{id:'br-report',source:'beiruan',title:'报工',quote:'报工 ID 幂等',prompts:['职责','取舍','证据','疑问'],questionIds:[]}]}});
 context.window=context;
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../resume-workbench.js'),'utf8'),context);
 return {app:context,tick:ms=>{now+=ms;},storage,events};
}
test('claim notes save and changed content invalidates explicit verification',()=>{
 const {app,storage}=setup();
 app.saveResumeClaim('br-report','responsibility','由我实现');
 app.verifyResumeClaim('br-report',true);
 assert.equal(app.ResumeWorkbench.getSnapshot().claims['br-report'].verified,true);
 app.saveResumeClaim('br-report','evidence','补充重复回调记录');
 const claim=app.ResumeWorkbench.getSnapshot().claims['br-report'];
 assert.equal(claim.verified,false);
 assert.equal(claim.responsibility,'由我实现');
 assert.equal(JSON.parse(storage.get('resume-prep-workbench')).claims['br-report'].evidence,claim.evidence);
});
test('snapshot cleaning preserves legacy absence, supports explicit clearing, and escapes user text',()=>{
 const {app}=setup(),wb=app.ResumeWorkbench;
 app.saveResumeClaim('br-report','gaps','</textarea><script>alert(1)</script>');
 app.saveResumeOralDraft('pitch-60','自己的稿');
 wb.applySnapshot(undefined);assert.equal(wb.getSnapshot().pitches['pitch-60'].draft,'自己的稿');
 assert.match(wb.renderClaims('all'),/&lt;script&gt;/);
 assert.doesNotMatch(wb.renderClaims('all'),/<script>alert/);
 wb.applySnapshot({claims:{'br-report':{verified:'yes',responsibility:{x:1},evidence:'有效'},other:{verified:true}},pitches:{'pitch-60':{draft:'x'.repeat(7000),last:{seconds:Infinity,rating:'clear'}}}});
 assert.equal(wb.getSnapshot().claims['br-report'].verified,false);
 assert.equal(wb.getSnapshot().claims['br-report'].responsibility,'');
 assert.equal(wb.getSnapshot().claims.other,undefined);
 assert.equal(wb.getSnapshot().pitches['pitch-60'].draft.length,6000);
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last,undefined);
 wb.applySnapshot({claims:{},pitches:{}});
 assert.equal(JSON.stringify(wb.getSnapshot()),'{"claims":{},"pitches":{}}');
});
test('oral timer uses elapsed time, pauses on navigation, records only real practice',()=>{
 const {app,tick}=setup(),wb=app.ResumeWorkbench;
 wb.enterView('pitches');app.selectResumeOral('pitch-60');
 app.finishResumeOral('clear');assert.equal(wb.getSnapshot().pitches['pitch-60']?.last,undefined);
 app.toggleResumeOralTimer();tick(3500);app.toggleResumeOralTimer();
 tick(20000);app.toggleResumeOralTimer();tick(2500);
 wb.enterView('stories');tick(50000);
 app.finishResumeOral('hesitant');
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last.seconds,6);
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last.rating,'hesitant');
 assert.match(wb.renderPitches('beiruan'),/6 秒/);
});
test('invalid IDs and ratings cannot alter records; reset does not delete personal drafts',()=>{
 const {app,tick}=setup(),wb=app.ResumeWorkbench;
 app.saveResumeClaim('unknown','gaps','no');app.saveResumeClaim('br-report','__proto__','no');
 app.saveResumeOralDraft('pitch-60','保留');app.selectResumeOral('pitch-60');
 wb.enterView('pitches');app.toggleResumeOralTimer();tick(1000);app.finishResumeOral('wrong');
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last,undefined);
 app.resetResumeOralTimer();assert.equal(wb.getSnapshot().pitches['pitch-60'].draft,'保留');
 assert.equal(Object.keys(wb.getSnapshot().claims).length,0);
});
test('backgrounding and pagehide pause without adding hidden time or restarting automatically',()=>{
 const {app,tick,events}=setup(),wb=app.ResumeWorkbench;
 wb.enterView('pitches');app.selectResumeOral('pitch-60');app.toggleResumeOralTimer();tick(2000);
 app.document.hidden=true;events.visibilitychange();tick(30000);
 app.document.hidden=false;events.visibilitychange();tick(10000);
 app.toggleResumeOralTimer();tick(1000);events.pagehide();tick(10000);
 app.finishResumeOral('clear');
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last.seconds,3);
});
test('unavailable storage is reported without losing the in-memory draft',()=>{
 const {app}=setup();let status;
 app.document.getElementById=id=>id==='oral-save-status'?{set textContent(v){status=v;}}:null;
 app.localStorage.setItem=()=>{throw Error('quota');};
 app.saveResumeOralDraft('pitch-60','暂存的内容');
 assert.equal(app.ResumeWorkbench.getSnapshot().pitches['pitch-60'].draft,'暂存的内容');
 assert.match(status,/未保存/);
});
