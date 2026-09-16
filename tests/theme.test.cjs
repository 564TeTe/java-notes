const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function setup(saved, systemDark = false, blocked = false) {
    const store = new Map(saved ? [['workspace-theme', saved]] : []);
    const events = {}, root = { dataset: {} }, meta = {}, buttons = [];
    const element = () => ({attrs:{},setAttribute(k,v){this.attrs[k]=v;},addEventListener(name,fn){this[name]=fn;},focus(){this.focused=true;},getBoundingClientRect(){return {left:10,right:340,top:60,bottom:440};}});
    const choices = ['light','blue','sand','dark'].map(id => Object.assign(element(),{dataset:{themeChoice:id}}));
    const close = element(), status = element();
    const panel = Object.assign(element(), {open:false,showModal(){this.open=true;},close(){this.open=false;this.onClose?.();},
        addEventListener(name,fn){if(name==='close')this.onClose=fn;else this[name]=fn;},
        querySelector(selector){return selector.includes('data-theme-choice') ? choices.find(c=>selector.includes(c.dataset.themeChoice)) : selector.includes('close') ? close : status;},
        querySelectorAll(){return choices;}
    });
    const parent = { append: b => buttons.push(b) };
    const media = { matches: systemDark, addEventListener:(name,fn)=>events.system=e=>{media.matches=e.matches;fn(e);} };
    const document = {documentElement:root,activeElement:element(),body:{append(){}},
        querySelector:s=>s.includes('theme-color')?meta:parent,
        querySelectorAll:s=>s.includes('data-theme-choice')?choices:buttons,
        addEventListener:(name,fn)=>events[name]=fn,
        createElement:tag=>tag==='dialog'?panel:element()
    };
    const context={document,matchMedia:()=>media,localStorage:{
        getItem:k=>{if(blocked)throw Error('blocked');return store.get(k);},
        setItem:(k,v)=>{if(blocked)throw Error('blocked');store.set(k,v);}
    },addEventListener:(name,fn)=>events[name]=fn};
    vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../workspace-theme.js'),'utf8'),context);
    const select=id=>panel.click({target:{closest:selector=>selector.includes('data-theme-choice')?choices.find(c=>c.dataset.themeChoice===id):null}});
    return {store,events,root,meta,buttons,panel,choices,close,select};
}
test('all four saved palettes apply before controls initialize, including warm sand',()=>{
    for(const theme of ['light','blue','sand','dark'])assert.equal(setup(theme,true).root.dataset.theme,theme);
    assert.equal(setup(undefined,true).root.dataset.theme,'dark');
    assert.equal(setup('invalid').root.dataset.theme,'light');
});
test('appearance opens a picker without cycling and any palette can be selected directly',()=>{
    const app=setup('light');app.events.DOMContentLoaded();app.buttons[0].click();
    assert.equal(app.root.dataset.theme,'light');assert.equal(app.panel.open,true);assert.equal(app.buttons.length,2);
    assert.equal(app.choices.find(c=>c.dataset.themeChoice==='light').attrs['aria-pressed'],'true');
    app.select('sand');assert.equal(app.root.dataset.theme,'sand');assert.equal(app.meta.content,'#f5efe6');
    assert.equal(app.store.get('workspace-theme'),'sand');assert.equal(app.panel.open,true);
    assert.ok(app.buttons.every(b=>b.attrs['aria-label'].includes('暖砂')));
    assert.equal(app.choices.filter(c=>c.attrs['aria-pressed']==='true').length,1);
    app.select('blue');assert.equal(app.root.dataset.theme,'blue');
});
test('closing the picker restores the opening control without changing the theme',()=>{
    const app=setup('sand');app.events.DOMContentLoaded();app.buttons[1].click();app.close.click();
    assert.equal(app.panel.open,false);assert.equal(app.buttons[1].focused,true);assert.equal(app.root.dataset.theme,'sand');
    assert.ok(app.buttons.every(b=>b.attrs['aria-expanded']==='false'));
});
test('storage restrictions do not block direct theme selection',()=>{
    const app=setup(undefined,false,true);app.events.DOMContentLoaded();app.buttons[0].click();app.select('sand');
    assert.equal(app.root.dataset.theme,'sand');
});
test('system preference applies until a palette is chosen',()=>{
    const app=setup();app.events.system({matches:true});assert.equal(app.root.dataset.theme,'dark');
    app.events.DOMContentLoaded();app.buttons[0].click();app.select('sand');
    app.events.system({matches:false});assert.equal(app.root.dataset.theme,'sand');
});
test('cross-tab choices update controls and the open picker selection',()=>{
    const app=setup('blue');app.events.DOMContentLoaded();app.buttons[0].click();
    app.events.storage({key:'workspace-theme',newValue:'sand'});assert.equal(app.root.dataset.theme,'sand');
    assert.equal(app.choices.find(c=>c.dataset.themeChoice==='sand').attrs['aria-pressed'],'true');
    assert.ok(app.buttons.every(b=>b.attrs['aria-label'].includes('暖砂')));
});
