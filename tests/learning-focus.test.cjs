const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
function setup(){
 const filename=path.join(__dirname,'../learning-focus.js');assert.ok(fs.existsSync(filename),'focus lifecycle exists');
 const handlers={};let doc;
 function el(tag='DIV'){
  const attrs=new Map();return {nodeType:1,tagName:tag,children:[],parentElement:null,isConnected:true,inert:false,style:{overflow:''},dataset:{},
   setAttribute(k,v){attrs.set(k,String(v));},getAttribute:k=>attrs.get(k)??null,removeAttribute:k=>attrs.delete(k),
   contains(n){return n===this||this.children.some(c=>c.contains(n));},querySelector:()=>null,querySelectorAll(){return this.buttons||[];},getClientRects:()=>[{}],closest:()=>null,
   focus(){doc.activeElement=this;},append(child){child.parentElement=this;this.children.push(child);return child;}};
 }
 const body=el('BODY'),header=body.append(el('HEADER')),main=body.append(el()),footer=body.append(el('FOOTER')),workspace=main.append(el()),sibling=main.append(el());sibling.inert=true;
 const first=workspace.append(el('BUTTON')),last=workspace.append(el('BUTTON'));workspace.buttons=[first,last];
 doc={body,activeElement:header,addEventListener:(name,fn)=>handlers[name]=fn};
 const ctx={document:doc,addEventListener(){},MutationObserver:class{observe(){}},console};ctx.window=ctx;vm.runInNewContext(fs.readFileSync(filename,'utf8'),ctx);
 return {api:ctx.LearningFocus,body,header,footer,workspace,sibling,first,last,doc,handlers,el,main};
}
test('focus isolates outside controls and restores their original inert and scroll states',()=>{
 const app=setup();app.body.style.overflow='auto';
 app.api.sync(app.workspace,true,{kind:'mindmap',onExit(){}});
 assert.equal(app.header.inert,true);assert.equal(app.footer.inert,true);
 assert.equal(app.workspace.inert,false);assert.equal(app.body.style.overflow,'hidden');
 assert.equal(app.body.dataset.learningFocus,'mindmap');
 app.api.sync(app.workspace,false);
 assert.equal(app.header.inert,false);assert.equal(app.footer.inert,false);assert.equal(app.sibling.inert,true);
 assert.equal(app.body.style.overflow,'auto');assert.equal(app.body.dataset.learningFocus,undefined);
});
test('reader focus keeps natural scrolling and disconnect cleanup restores navigation',()=>{
 const app=setup();app.api.sync(app.workspace,true,{kind:'xiaolin'});
 assert.equal(app.body.style.overflow,'');
 app.workspace.isConnected=false;app.api.prune();
 assert.equal(app.header.inert,false);assert.equal(app.body.dataset.learningFocus,undefined);
});

test('mounting an absent workspace does not release another workspace focus',()=>{
 const app=setup();app.api.sync(app.workspace,true,{kind:'mindmap'});
 app.api.sync(null,false,{kind:'xiaolin'});
 assert.equal(app.body.dataset.learningFocus,'mindmap');assert.equal(app.header.inert,true);
 app.api.sync(null,false,{kind:'mindmap'});assert.equal(app.header.inert,false);
});

test('Escape closes an open settings popup even after Tab leaves its contents',()=>{
 const app=setup();let exits=0;
 const detail=app.workspace.append(app.el('DETAILS')),summary=detail.append(app.el('SUMMARY'));
 detail.open=true;detail.querySelector=()=>summary;
 app.workspace.querySelector=selector=>selector.includes('.xl-reading-settings')&&detail.open?detail:null;
 app.api.sync(app.workspace,true,{kind:'xiaolin',onExit(){exits++;}});
 app.doc.activeElement=app.last;
 const escape=()=>app.handlers.keydown({key:'Escape',target:app.doc.activeElement,preventDefault(){},stopImmediatePropagation(){}});
 escape();assert.equal(detail.open,false);assert.equal(exits,0);assert.equal(app.doc.activeElement,summary);
 escape();assert.equal(exits,1);
});
test('Tab stays inside focus, Escape exits once, and hidden app shortcuts are intercepted',()=>{
 const app=setup();let exits=0,searches=0;
 app.api.sync(app.workspace,true,{kind:'mindmap',onExit(){exits++;},onSearch(){searches++;}});
 const key=(key,extra={})=>{let stopped=false;app.handlers.keydown({key,target:app.doc.activeElement,preventDefault(){stopped=true;},stopImmediatePropagation(){},...extra});return stopped;};
 app.doc.activeElement=app.last;assert.equal(key('Tab'),true);assert.equal(app.doc.activeElement,app.first);
 app.doc.activeElement=app.first;key('Tab',{shiftKey:true});assert.equal(app.doc.activeElement,app.last);
 assert.equal(key('k',{ctrlKey:true}),true);assert.equal(searches,1);
 assert.equal(key('b',{ctrlKey:true}),true);
 assert.equal(key('Escape'),true);assert.equal(exits,1);
 key('Escape',{isComposing:true});assert.equal(exits,1);
});
