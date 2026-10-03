const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const scriptPath = path.join(__dirname, '..', 'mobile-orientation.js');
const androidUA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36';
const flush = () => new Promise(resolve => setImmediate(resolve));
const namedError = name => Object.assign(new Error(name), { name });

function eventTarget(values = {}) {
    const events = new Map();
    return Object.assign(values, {
        events,
        addEventListener(type, handler) { if (!events.has(type)) events.set(type, []); events.get(type).push(handler); },
        fire(type) { (events.get(type) || []).slice().forEach(handler => handler({ type })); },
    });
}

function setup(options = {}) {
    const calls = [], mediaQueries = [], effects = { fullscreen: 0, ui: 0 };
    const fullscreenCalls = { requests: 0, exits: 0, unlocks: 0 };
    const mode = options.mode === undefined ? 'standalone' : options.mode;
    const media = eventTarget({ matches: mode === 'standalone' || mode === 'fullscreen' });
    const orientation = eventTarget({ type: options.type || 'portrait-primary',
        lock(value) {
            calls.push(value);
            if (options.requiresFullscreen && !document.fullscreenElement) return Promise.reject(namedError('SecurityError'));
            return options.lock ? options.lock(value) : Promise.resolve();
        },
        unlock() { fullscreenCalls.unlocks++; },
    });
    if (options.api === 'missing-lock') delete orientation.lock;
    if (options.legacyMedia) {
        delete media.addEventListener;
        media.addListener = handler => { if (!media.events.has('change')) media.events.set('change', []); media.events.get('change').push(handler); };
    }
    const document = eventTarget({ visibilityState: options.visibility || 'visible',
        fullscreenElement: options.existingFullscreen ? { existing: true } : null,
        createElement() { effects.ui++; throw Error('No UI may be created'); },
        documentElement: { requestFullscreen() {
            effects.fullscreen++; fullscreenCalls.requests++;
            if (options.requestFullscreen) return options.requestFullscreen(document);
            document.fullscreenElement = document.documentElement;
            document.fire('fullscreenchange');
            return Promise.resolve();
        } },
        exitFullscreen() {
            fullscreenCalls.exits++;
            if (options.exitFullscreen) return options.exitFullscreen(document);
            document.fullscreenElement = null; document.fire('fullscreenchange');
            return Promise.resolve();
        },
    });
    if (options.api === 'missing-fullscreen') delete document.documentElement.requestFullscreen;
    const navigator = { userAgent: options.ua === undefined ? androidUA : options.ua,
        platform: options.platform || 'Linux armv8l', maxTouchPoints: options.touchPoints || 0,
        standalone: !!options.navigatorStandalone,
    };
    if (options.uaMobile !== undefined) navigator.userAgentData = { mobile: options.uaMobile };
    const context = eventTarget({ document, navigator, innerWidth: options.width || 1366,
        screen: options.api === 'missing-screen' ? undefined : { orientation: options.api === 'missing-orientation' ? undefined : orientation },
        matchMedia(query) { mediaQueries.push(query); return media; },
        console: { log() { throw Error('Must degrade quietly'); }, warn() { throw Error('Must degrade quietly'); }, error() { throw Error('Must degrade quietly'); } },
        localStorage: { setItem() { throw Error('Must not alter learning data'); } },
    });
    if (options.noMatchMedia) delete context.matchMedia;
    context.window = context;
    if (fs.existsSync(scriptPath)) vm.runInNewContext(fs.readFileSync(scriptPath, 'utf8'), context);
    function start() { assert.equal(typeof context.MobileOrientation?.start, 'function', 'orientation module must expose start'); context.MobileOrientation.start(); }
    return { start, context, media, document, orientation, calls, effects, mediaQueries, fullscreenCalls, api: context.MobileOrientation };
}

test('installed Android locks portrait-primary from either portrait or landscape regardless of viewport width', async () => {
    for (const type of ['portrait-primary', 'landscape-primary']) {
        const app = setup({ type, width: 1366, uaMobile: true });
        app.start();
        assert.deepEqual(app.calls, ['portrait-primary']);
        await flush();
        assert.deepEqual(app.effects, { fullscreen: 0, ui: 0 });
    }
});

test('ordinary browser pages and desktop installations never lock even at phone viewport width', async () => {
    for (const options of [
        { mode: 'browser', uaMobile: true },
        { mode: 'standalone', uaMobile: false, width: 360 },
        { mode: 'standalone', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', width: 360 },
        { mode: 'fullscreen', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel', touchPoints: 0, width: 360 },
    ]) {
        const app = setup(options);
        app.start();
        app.context.fire('pageshow');
        app.orientation.type = 'landscape-primary'; app.orientation.fire('change');
        await flush();
        assert.deepEqual(app.calls, []);
        assert.deepEqual(app.effects, { fullscreen: 0, ui: 0 });
    }
});

test('UA fallback recognizes Android, iOS and iPad desktop UA, including navigator.standalone', async () => {
    for (const options of [
        { ua: androidUA },
        { ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)' },
        { ua: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 18_0 like Mac OS X)' },
        { ua: 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)' },
        { ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel', touchPoints: 5, mode: 'browser', navigatorStandalone: true },
        { ua: androidUA, mode: 'fullscreen' },
        { ua: androidUA, mode: 'browser', navigatorStandalone: true, noMatchMedia: true },
    ]) {
        const app = setup(options); app.start(); await flush();
        assert.deepEqual(app.calls, ['portrait-primary']);
    }
});

test('missing screen, orientation or lock API does not block startup or lifecycle events', async () => {
    for (const api of ['missing-screen', 'missing-orientation', 'missing-lock']) {
        const app = setup({ api });
        assert.doesNotThrow(app.start);
        assert.doesNotThrow(() => app.context.fire('pageshow'));
        assert.doesNotThrow(() => app.document.fire('visibilitychange'));
        await flush();
        assert.deepEqual(app.calls, []);
    }
});

test('synchronous errors and rejected promises degrade quietly and allow later attempts', async () => {
    for (const lock of [() => { throw Error('unsupported'); }, () => Promise.reject(Error('permission denied'))]) {
        const app = setup({ lock });
        assert.doesNotThrow(app.start);
        await flush();
        assert.doesNotThrow(() => app.context.fire('pageshow'));
        await flush();
        assert.deepEqual(app.calls, ['portrait-primary', 'portrait-primary']);
        assert.deepEqual(app.effects, { fullscreen: 0, ui: 0 });
    }
});

test('hidden pages wait for visibility and retry on visible resumes and pageshow', async () => {
    const app = setup({ visibility: 'hidden' });
    app.start(); app.context.fire('pageshow'); app.document.fire('visibilitychange');
    assert.deepEqual(app.calls, []);
    app.document.visibilityState = 'visible'; app.document.fire('visibilitychange');
    assert.deepEqual(app.calls, ['portrait-primary']);
    await flush(); app.context.fire('pageshow'); await flush();
    assert.equal(app.calls.length, 2);
    app.document.visibilityState = 'hidden'; app.document.fire('visibilitychange');
    assert.equal(app.calls.length, 2);
    app.document.visibilityState = 'visible'; app.document.fire('visibilitychange'); await flush();
    assert.equal(app.calls.length, 3);
});

test('only landscape orientation changes retry so a successful portrait change cannot loop', async () => {
    const app = setup(); app.start(); await flush();
    for (const type of ['portrait-primary', 'portrait-secondary']) { app.orientation.type = type; app.orientation.fire('change'); }
    assert.equal(app.calls.length, 1);
    app.orientation.type = 'landscape-primary'; app.orientation.fire('change'); await flush();
    assert.equal(app.calls.length, 2);
    app.orientation.type = 'landscape-secondary'; app.orientation.fire('change'); await flush();
    assert.equal(app.calls.length, 3);
});

test('display-mode changes retry after installation and stop attempts outside installed mode', async () => {
    for (const legacyMedia of [false, true]) {
        const app = setup({ mode: 'browser', legacyMedia }); app.start();
        assert.equal(app.calls.length, 0);
        app.media.matches = true; app.media.fire('change'); await flush();
        assert.deepEqual(app.calls, ['portrait-primary']);
        assert.ok(app.mediaQueries.some(query => query.includes('standalone')));
        assert.ok(app.mediaQueries.some(query => query.includes('fullscreen')));
        app.media.matches = false; app.media.fire('change'); app.context.fire('pageshow'); await flush();
        assert.equal(app.calls.length, 1);
    }
});

test('start is idempotent and lifecycle signals cannot overlap a pending lock', async () => {
    let finish;
    const app = setup({ lock: () => new Promise(resolve => { finish = resolve; }) });
    app.start(); app.start(); app.start();
    app.context.fire('pageshow'); app.document.fire('visibilitychange');
    app.orientation.type = 'landscape-primary'; app.orientation.fire('change'); app.media.fire('change');
    assert.deepEqual(app.calls, ['portrait-primary']);
    assert.equal(app.context.events.get('pageshow').length, 1);
    assert.equal(app.document.events.get('visibilitychange').length, 1);
    assert.equal(app.orientation.events.get('change').length, 1);
    assert.equal(app.media.events.get('change').length, 1);
    finish(); await flush();
    app.start(); assert.equal(app.calls.length, 1, 'repeated start stays idempotent after completion');
    app.context.fire('pageshow'); assert.equal(app.calls.length, 2);
    finish(); await flush();
});

test('automatic fullscreen restrictions are observable without entering fullscreen or claiming success', async () => {
    const app = setup({ requiresFullscreen: true }); app.start(); await flush();
    assert.equal(typeof app.api.getStatus, 'function');
    const status = app.api.getStatus();
    assert.equal(status.state, 'requires-fullscreen');
    assert.equal(status.errorName, 'SecurityError');
    assert.equal(status.mobile, true); assert.equal(status.installed, true); assert.equal(status.fullscreen, false);
    assert.equal(app.fullscreenCalls.requests, 0);
});

test('explicit enable enters fullscreen synchronously before locking, including a normal mobile browser', async () => {
    const app = setup({ mode: 'browser', requiresFullscreen: true }); app.start();
    assert.equal(typeof app.api.enable, 'function');
    const result = app.api.enable();
    assert.equal(app.fullscreenCalls.requests, 1, 'fullscreen must start inside the click call stack');
    assert.equal(app.api.getStatus().state, 'locking');
    const status = await result;
    assert.equal(status.state, 'locked'); assert.equal(status.fullscreen, true);
    assert.equal(status.installed, false); assert.equal(status.errorName, null);
    assert.deepEqual(app.calls, ['portrait-primary']);
});

test('enable does not wait for a pending automatic lock before consuming user activation', async () => {
    let failAutomatic, lockNumber = 0;
    const app = setup({ lock: () => ++lockNumber === 1 ? new Promise((_, reject) => { failAutomatic = reject; }) : Promise.resolve() });
    app.start();
    assert.equal(typeof app.api.enable, 'function');
    const enabled = app.api.enable();
    assert.equal(app.fullscreenCalls.requests, 1, 'the earlier lock must not delay requestFullscreen');
    assert.equal(app.calls.length, 1, 'locks remain serialized');
    failAutomatic(namedError('SecurityError'));
    const status = await enabled;
    assert.equal(status.state, 'locked'); assert.equal(app.calls.length, 2);
});

test('manual operations are deduplicated and existing fullscreen does not request fullscreen again', async () => {
    let finish;
    const app = setup({ mode: 'browser', existingFullscreen: true, lock: () => new Promise(resolve => { finish = resolve; }) });
    app.start(); assert.equal(typeof app.api.enable, 'function');
    const first = app.api.enable(), second = app.api.enable();
    assert.equal(first, second);
    await flush(); assert.equal(app.calls.length, 1); assert.equal(app.fullscreenCalls.requests, 0);
    finish(); assert.equal((await first).state, 'locked');
});

test('lock failures roll back only fullscreen entered by that enable operation', async () => {
    for (const existingFullscreen of [false, true]) {
        const app = setup({ mode: 'browser', existingFullscreen, lock: () => Promise.reject(namedError('NotSupportedError')) });
        app.start(); assert.equal(typeof app.api.enable, 'function');
        const status = await app.api.enable();
        assert.equal(status.state, 'unsupported'); assert.equal(status.errorName, 'NotSupportedError');
        assert.equal(status.fullscreen, existingFullscreen);
        assert.equal(app.fullscreenCalls.exits, existingFullscreen ? 0 : 1);
    }
});

test('missing APIs, denied fullscreen requests and desktop actions report failure without false success', async () => {
    for (const options of [
        { api: 'missing-lock', expected: 'unsupported' },
        { api: 'missing-fullscreen', expected: 'unsupported' },
        { requestFullscreen: () => Promise.reject(namedError('NotAllowedError')), expected: 'failed' },
        { requestFullscreen: () => { throw namedError('SecurityError'); }, expected: 'failed' },
        { uaMobile: false, expected: 'idle' },
    ]) {
        const app = setup({ mode: 'browser', ...options }); app.start();
        assert.equal(typeof app.api.enable, 'function');
        const status = await app.api.enable();
        assert.equal(status.state, options.expected); assert.equal(status.fullscreen, false);
        assert.equal(app.calls.length, 0);
    }
});

test('status subscriptions expose pending and resolved states without letting listeners alter or block state', async () => {
    let finish;
    const app = setup({ mode: 'browser', lock: () => new Promise(resolve => { finish = resolve; }) }); app.start();
    assert.equal(typeof app.api.subscribe, 'function');
    const states = [], stop = app.api.subscribe(status => states.push(status.state));
    app.api.subscribe(() => { throw Error('Bad listener'); });
    const enabled = app.api.enable(); await flush();
    assert.equal(app.api.getStatus().state, 'locking'); assert.ok(!states.includes('locked'));
    const snapshot = app.api.getStatus(); snapshot.state = 'locked';
    assert.equal(app.api.getStatus().state, 'locking', 'status snapshots are detached');
    finish(); await enabled;
    assert.ok(states.includes('idle')); assert.ok(states.includes('locking')); assert.ok(states.includes('locked'));
    stop(); const count = states.length;
    app.document.fullscreenElement = null; app.document.fire('fullscreenchange');
    assert.equal(app.api.getStatus().state, 'idle'); assert.equal(app.api.getStatus().fullscreen, false);
    assert.equal(states.length, count, 'unsubscribed listeners receive no more changes');
});

test('fullscreen exit invalidates an in-flight lock so a late resolution cannot claim locked', async () => {
    let finish;
    const app = setup({ mode: 'browser', lock: () => new Promise(resolve => { finish = resolve; }) }); app.start();
    assert.equal(typeof app.api.enable, 'function');
    const enabled = app.api.enable(); await flush();
    app.document.fullscreenElement = null; app.document.fire('fullscreenchange');
    finish(); const status = await enabled;
    assert.equal(status.state, 'idle'); assert.equal(status.fullscreen, false);
});

test('fullscreen exit also invalidates an automatic lock that started in fullscreen', async () => {
    let finish;
    const app = setup({ existingFullscreen: true, lock: () => new Promise(resolve => { finish = resolve; }) }); app.start();
    assert.equal(app.api.getStatus().state, 'locking');
    app.document.fullscreenElement = null; app.document.fire('fullscreenchange');
    finish(); await flush();
    assert.equal(app.api.getStatus().state, 'idle');
    assert.equal(app.api.getStatus().fullscreen, false);
});

test('a non-Promise lock result is unsupported and cannot report locked', async () => {
    const app = setup({ mode: 'browser', lock: () => undefined }); app.start();
    const status = await app.api.enable();
    assert.equal(status.state, 'unsupported'); assert.equal(status.fullscreen, false);
    assert.equal(app.fullscreenCalls.exits, 1);
});

test('hidden pages cannot start manual fullscreen or orientation operations', async () => {
    const app = setup({ mode: 'browser', visibility: 'hidden' }); app.start();
    const status = await app.api.enable();
    assert.equal(status.state, 'failed'); assert.equal(status.errorName, 'InvalidStateError');
    assert.equal(app.fullscreenCalls.requests, 0); assert.equal(app.calls.length, 0);
});

test('a page hidden while entering fullscreen skips the later lock and rolls back fullscreen', async () => {
    const app = setup({ mode: 'browser' }); app.start();
    const enabled = app.api.enable();
    app.document.visibilityState = 'hidden';
    const status = await enabled;
    assert.equal(status.state, 'failed'); assert.equal(status.errorName, 'InvalidStateError');
    assert.equal(status.fullscreen, false); assert.equal(app.calls.length, 0);
    assert.equal(app.fullscreenCalls.exits, 1);
});

test('explicit exit unlocks and exits manual fullscreen, while exit failures remain visible', async () => {
    const app = setup({ mode: 'browser', requiresFullscreen: true }); app.start();
    assert.equal(typeof app.api.exit, 'function');
    await app.api.enable(); const status = await app.api.exit();
    assert.equal(status.state, 'idle'); assert.equal(status.fullscreen, false);
    assert.equal(app.fullscreenCalls.unlocks, 1); assert.equal(app.fullscreenCalls.exits, 1);
    const denied = setup({ mode: 'browser', exitFullscreen: () => Promise.reject(namedError('NotAllowedError')) }); denied.start();
    await denied.api.enable(); const failed = await denied.api.exit();
    assert.equal(failed.state, 'failed'); assert.equal(failed.fullscreen, true); assert.equal(failed.errorName, 'NotAllowedError');
});
