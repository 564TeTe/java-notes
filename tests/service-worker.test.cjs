const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const script = fs.readFileSync(require('node:path').join(__dirname,'..','sw.js'),'utf8');

function setup(offline = false) {
    const handlers = {}, requests = [], stored = new Map();
    const cache = {
        async match(request, options) {
            const url = new URL(typeof request === 'string' ? request : request.url, 'https://example.test/java-notes/');
            return stored.get(url.href) || (options?.ignoreSearch ? stored.get(url.origin+url.pathname) : undefined);
        },
        async put(request, response) { stored.set(new URL(typeof request === 'string' ? request : request.url,'https://example.test/java-notes/').href,response); }
    };
    const self = {location:{origin:'https://example.test',href:'https://example.test/java-notes/sw.js'},addEventListener:(name,handler)=>handlers[name]=handler};
    vm.runInNewContext(script,{self,URL,Request,Response,caches:{open:async()=>cache,match:cache.match},fetch:async(request, options)=>{
        requests.push({request,options});
        if (offline) throw Error('offline');
        return new Response('new release');
    }});
    return {requests,stored,async get(path,mode='cors'){
        const event={request:{url:'https://example.test/java-notes/'+path,method:'GET',mode},respondWith(p){this.result=p;},waitUntil(){}};
        // A Request cannot be constructed in navigate mode outside a browser.
        event.request = new Request(event.request.url);
        Object.defineProperty(event.request,'mode',{value:mode});
        handlers.fetch(event); return await event.result;
    }};
}

test('online navigation revalidates HTML rather than reusing ten-minute HTTP cache', async()=>{
    const app=setup();await app.get('','navigate');
    assert.equal(app.requests[0].options?.cache || app.requests[0].request.cache,'no-cache');
});
test('a newly versioned script fetches its own release rather than a canonical old cache entry',async()=>{
    const app=setup();app.stored.set('https://example.test/java-notes/workspace-shell.js',new Response('old release'));
    assert.equal(await (await app.get('workspace-shell.js?v=new')).text(),'new release');
    assert.equal(app.requests.length,1);
});
test('release checks always bypass service-worker and HTTP caches',async()=>{
    const app=setup();app.stored.set('https://example.test/java-notes/version.json',new Response('{"version":"old"}'));
    assert.equal(await (await app.get('version.json')).text(),'new release');
    assert.equal(app.requests[0].options?.cache || app.requests[0].request.cache,'no-store');
});
test('offline versioned scripts retain access to the installed shell',async()=>{
    const app=setup(true);app.stored.set('https://example.test/java-notes/workspace-shell.js',new Response('installed release'));
    assert.equal(await (await app.get('workspace-shell.js?v=new')).text(),'installed release');
});
test('offline navigation still opens the saved app',async()=>{
    const app=setup(true);app.stored.set('https://example.test/java-notes/index.html',new Response('saved app'));
    assert.equal(await (await app.get('','navigate')).text(),'saved app');
});
