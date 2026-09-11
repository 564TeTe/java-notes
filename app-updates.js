/* Check a resumed mobile page as well as a newly opened page. Never clear user data. */
const AppUpdates = (() => {
    const version = document.querySelector('meta[name="app-version"]')?.content || '34';
    let registration, checking, handled = false, started = false, lastCheck = 0;
    const watched = new WeakSet();
    const isEditing = () => !!document.querySelector('.modal-overlay.open,dialog[open],.recruit-modal-backdrop') ||
        document.activeElement?.matches('input,textarea,[contenteditable="true"]');

    function reload() {
        const url = new URL(location.href);
        url.searchParams.set('updated', Date.now());
        location.replace(url.href);
    }
    function ready() {
        if (handled) return;
        handled = true;
        if (!isEditing()) { reload(); return; }
        const notice = document.createElement('div');
        notice.className = 'app-update-notice'; notice.setAttribute('role', 'status');
        notice.innerHTML = '<span>新版本已就绪，保存后刷新</span><button type="button">刷新</button>';
        notice.querySelector('button').addEventListener('click', () => {
            if (isEditing()) { toast('请先保存或关闭正在编辑的内容'); return; }
            reload();
        });
        document.body.append(notice);
    }
    function workerVersion(worker) {
        return new Promise(resolve => {
            if (!worker) { resolve(null); return; }
            const channel = new MessageChannel();
            const finish = value => { clearTimeout(timer); channel.port1.close(); resolve(value); };
            const timer = setTimeout(() => finish(null), 2000);
            channel.port1.onmessage = event => finish(event.data?.version);
            worker.postMessage({type:'APP_VERSION'}, [channel.port2]);
        });
    }
    function activate(reg) {
        const install = () => {
            reg.waiting?.postMessage({type:'SKIP_WAITING'});
            const worker = reg.installing;
            worker?.addEventListener('statechange', () => {
                if (worker.state === 'installed') worker.postMessage({type:'SKIP_WAITING'});
            }, {once:true});
        };
        if (!watched.has(reg)) { watched.add(reg); reg.addEventListener('updatefound', install); }
        install();
    }
    async function check(manual = false, resumed = false) {
        if (checking) {
            if (resumed || manual) { await checking; return check(manual, true); }
            return checking;
        }
        if (!manual && !resumed && (document.visibilityState === 'hidden' || Date.now() - lastCheck < 15000)) return;
        lastCheck = Date.now();
        checking = (async () => {
            const button = document.getElementById('checkAppUpdateBtn');
            if (manual && button) { button.disabled = true; button.textContent = '正在检查…'; }
            try {
                const response = await fetch('./version.json?t=' + Date.now(), {cache:'no-store',signal:AbortSignal.timeout(10000)});
                if (!response.ok) throw Error('version unavailable');
                const remote = await response.json();
                if (!/^\d+$/.test(remote.version)) throw Error('invalid version');
                if ('serviceWorker' in navigator) {
                    registration = await navigator.serviceWorker.register('./sw.js?release=' + remote.version, {updateViaCache:'none'});
                    activate(registration);
                    await registration.update();
                    activate(registration);
                }
                if (Number(remote.version) > Number(version)) {
                    // Covers a stale open document whose controller upgraded while it was suspended.
                    if (!registration || await workerVersion(registration.active) === remote.version) ready();
                    else if (manual) toast('正在下载新版，完成后会自动切换');
                } else if (manual) toast('已是最新版本');
            } catch (_) {
                if (manual) toast('暂时无法检查更新，请联网后重试');
            } finally {
                if (button) { button.disabled = false; button.textContent = '检查更新'; }
            }
        })();
        try { await checking; } finally { checking = null; }
    }
    function start() {
        if (started || location.protocol === 'file:') return;
        started = true;
        if ('serviceWorker' in navigator) {
            const wasControlled = !!navigator.serviceWorker.controller;
            navigator.serviceWorker.addEventListener('controllerchange', async () => {
                if (wasControlled || Number(await workerVersion(navigator.serviceWorker.controller)) > Number(version)) ready();
            });
            navigator.serviceWorker.register('./sw.js?release=' + version, {updateViaCache:'none'})
                .then(r => { registration = r; activate(r); return r.update(); }).catch(() => {});
        }
        document.getElementById('checkAppUpdateBtn')?.addEventListener('click', () => check(true));
        const label = document.getElementById('appVersion');
        if (label) label.textContent = '当前版本 ' + version;
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') check(false, true); });
        window.addEventListener('pageshow', () => check(false, true));
        window.addEventListener('online', () => check(false, true));
        check();
    }
    return {start, check};
})();
