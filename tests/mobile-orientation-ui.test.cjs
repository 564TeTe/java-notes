const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setup(state = 'requires-fullscreen') {
    const button = { hidden: false, disabled: false };
    const label = { textContent: '' };
    const hint = { hidden: false, textContent: '' };
    const calls = [], messages = [];
    const status = { state, mobile: true, fullscreen: state === 'locked', errorName: null };
    const controller = {
        getStatus() { return { ...status }; },
        enable() { calls.push('enable'); return Promise.resolve({ ...status }); },
        exit() { calls.push('exit'); return Promise.resolve({ ...status, state: 'idle', fullscreen: false }); },
    };
    const context = {
        window: { MobileOrientation: controller },
        document: { getElementById(id) { return ({ mobileOrientationBtn: button, mobileOrientationLabel: label, mobileOrientationStatus: hint })[id]; } },
        toast(message) { messages.push(message); },
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'workspace-shell.js'), 'utf8'), context);
    return { context, controller, status, button, label, hint, calls, messages };
}

test('orientation controls explain fullscreen and report rejection without saying locked', async () => {
    const app = setup();
    assert.equal(typeof app.context.renderMobileOrientation, 'function');
    app.context.renderMobileOrientation(app.status);
    assert.equal(app.label.textContent, '锁定竖屏');
    assert.match(app.hint.textContent, /全屏/);
    app.controller.enable = () => { app.calls.push('enable'); return Promise.resolve({ ...app.status, state: 'failed' }); };
    await app.context.controlMobileOrientation();
    assert.deepEqual(app.calls, ['enable']);
    assert.match(app.messages[0], /未能|失败/);
    assert.doesNotMatch(app.messages[0], /已锁定/);
});

test('successful locks provide an exit action and clear the success label when fullscreen ends', async () => {
    const app = setup('locked');
    app.context.renderMobileOrientation(app.status);
    assert.equal(app.label.textContent, '退出全屏');
    await app.context.controlMobileOrientation();
    assert.deepEqual(app.calls, ['exit']);
    assert.equal(app.label.textContent, '锁定竖屏');
    assert.match(app.messages[0], /退出全屏/);
});

test('pending and unsupported states cannot invite duplicate or unavailable operations', () => {
    const app = setup('locking');
    app.context.renderMobileOrientation(app.status);
    assert.equal(app.button.disabled, true);
    app.context.renderMobileOrientation({ ...app.status, state: 'unsupported' });
    assert.equal(app.button.disabled, true);
    assert.match(app.hint.textContent, /不支持/);
    app.context.renderMobileOrientation({ ...app.status, state: 'idle', mobile: false });
    assert.equal(app.button.hidden, true);
    assert.equal(app.hint.hidden, true);
});
