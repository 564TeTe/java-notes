const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const script = fs.readFileSync(path.join(__dirname,'../app-updates.js'),'utf8');
function setup(remote = '41') {
    const handlers = {}, notices = [], navigations = [], requests = [];
    let editing = false, activeVersion = remote;
    const worker = { postMessage(message,ports) { if (ports) ports[0].onmessage({data:{version:activeVersion}}); } };
    const registration = {active:worker,addEventListener(){},async update(){}};
    const button = () => ({addEventListener(name,handler){this[name]=handler;},focus(){}});
    const context = {
        console,URL,AbortSignal,setTimeout,clearTimeout,Date,
        location:{protocol:'https:',href:'https://example.test/?page=reading',replace:url=>navigations.push(url)},
        navigator:{serviceWorker:{controller:worker,addEventListener:(name,fn)=>handlers[name]=fn,async register(){return registration;}}},
        MessageChannel:class {constructor(){this.port1={close(){}};this.port2=this.port1;}},
        fetch:async()=>{requests.push(1);return {ok:true,json:async()=>({version:remote})};},
        document:{visibilityState:'visible',activeElement:{matches:()=>editing},
            querySelector(selector){return selector.startsWith('meta') ? {content:'40'} : null;},
            getElementById(){return null;},addEventListener:(name,fn)=>handlers[name]=fn,
            createElement(){const primary=button(),later=button();return {setAttribute(){},querySelector:s=>s.includes('later')?later:primary,remove(){notices.splice(notices.indexOf(this),1);},primary,later};},
            body:{append:notice=>notices.push(notice)}},
        addEventListener:(name,fn)=>handlers[name]=fn,toast(){}
    };
    context.window=context;vm.createContext(context);vm.runInContext(script,context);
    return {handlers,notices,navigations,requests,setEditing:v=>editing=v,setRemote:v=>remote=v,setActive:v=>activeVersion=v,check:()=>vm.runInContext('AppUpdates.check(true)',context),async start(){vm.runInContext('AppUpdates.start()',context);await vm.runInContext('AppUpdates.check()',context);}};
}
test('a ready update never refreshes a reading page without a click',async()=>{
    const app=setup();await app.start();
    assert.equal(app.navigations.length,0);
    assert.equal(app.notices.length,1);
    app.notices[0].primary.click();
    assert.equal(app.navigations.length,1);
});
test('same-version controller replacement does not interrupt the page',async()=>{
    const app=setup('40');await app.start();await app.handlers.controllerchange();
    assert.equal(app.navigations.length,0);assert.equal(app.notices.length,0);
});
test('update button protects unsaved editing and allows dismissing the notice',async()=>{
    const app=setup();app.setEditing(true);await app.start();
    app.notices[0].primary.click();assert.equal(app.navigations.length,0);
    app.notices[0].later.click();assert.equal(app.notices.length,0);
});
test('a later manually requested release is offered after its download completes',async()=>{
    const app=setup('41');await app.start();app.notices[0].later.click();
    app.setRemote('42');await app.check();assert.equal(app.notices.length,0);
    app.setActive('42');await app.handlers.controllerchange();
    assert.equal(app.notices.length,1);assert.equal(app.navigations.length,0);
});
