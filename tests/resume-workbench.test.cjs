const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
function setup(){
 const storage=new Map();
 const context=vm.createContext({console,
  localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},
  toast(){},
  RESUME_PREP_DATA:{sources:[{id:'beiruan',shortName:'北软'}],pitches:[{id:'pitch-60',source:'beiruan',duration:'1 分钟',title:'实习介绍',content:'参考内容'}],questions:[]},
  RESUME_CLAIMS:{date:'2026-09-16',items:[{id:'br-report',source:'beiruan',title:'报工',quote:'报工 ID 幂等',prompts:['职责','取舍','证据','疑问'],questionIds:[]}]}});
 context.window=context;
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../resume-workbench.js'),'utf8'),context);
 return {app:context,storage};
}
test('v43 records remain available without any retired editor or timer APIs',()=>{
 const {app}=setup(),wb=app.ResumeWorkbench;
 wb.applySnapshot({claims:{'br-report':{responsibility:'原有职责',verified:true}},pitches:{'pitch-60':{draft:'原有口述稿',last:{seconds:60,rating:'clear',at:'2026-09-16T08:00:00Z'}}}});
 const original=JSON.stringify(wb.getSnapshot());
 wb.applySnapshot(undefined);wb.applySnapshot(null);wb.applySnapshot('bad');
 assert.equal(JSON.stringify(wb.getSnapshot()),original);
 assert.equal(app.toggleResumeOralTimer,undefined);
 assert.equal(app.saveResumeClaim,undefined);
 assert.equal(wb.renderPitches,undefined);
});
test('legacy snapshot sanitation drops invalid records and supports explicit clearing',()=>{
 const {app}=setup(),wb=app.ResumeWorkbench;
 wb.applySnapshot({claims:{'br-report':{responsibility:{bad:true},verified:'yes'},unknown:{verified:true}},pitches:{'pitch-60':{draft:'x'.repeat(7000),last:{seconds:Infinity,rating:'clear'}}}});
 assert.equal(wb.getSnapshot().claims['br-report'].responsibility,'');
 assert.equal(wb.getSnapshot().claims['br-report'].verified,false);
 assert.equal(wb.getSnapshot().claims.unknown,undefined);
 assert.equal(wb.getSnapshot().pitches['pitch-60'].draft.length,6000);
 assert.equal(wb.getSnapshot().pitches['pitch-60'].last,undefined);
 wb.applySnapshot({});assert.equal(JSON.stringify(wb.getSnapshot()),'{"claims":{},"pitches":{}}');
});
test('exported legacy snapshots cannot mutate local records by reference',()=>{
 const {app}=setup(),wb=app.ResumeWorkbench;
 wb.applySnapshot({claims:{'br-report':{gaps:'保留'}}});
 const copy=wb.getSnapshot();copy.claims['br-report'].gaps='外部修改';
 assert.equal(wb.getSnapshot().claims['br-report'].gaps,'保留');
});
