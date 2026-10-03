/* Automatic locks never request fullscreen; the explicit action preserves user activation. */
window.MobileOrientation = (() => {
    let started = false, installedMode, activeLock, activeEnable, activeExit, exiting = false;
    let state = 'idle', errorName = null, generation = 0, lockedInFullscreen = false, manualFullscreen = false, activeLockFullscreen = false;
    const listeners = new Set();

    function isMobile() {
        const nav = window.navigator;
        if (typeof nav.userAgentData?.mobile === 'boolean') return nav.userAgentData.mobile;
        return /Android|iPhone|iPod|iPad/i.test(nav.userAgent || '') ||
            (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1);
    }

    function getStatus() {
        return { state, mobile: isMobile(), installed: !!(installedMode?.matches || window.navigator.standalone),
            fullscreen: !!document.fullscreenElement, errorName };
    }
    function notify() {
        listeners.forEach(listener => { try { listener(getStatus()); } catch (_) {} });
    }
    function update(next, error) {
        state = next; errorName = error ? error.name || 'Error' : null; notify();
    }
    function failure(error, phase) {
        update(error?.name === 'NotSupportedError' ? 'unsupported' :
            phase === 'lock' && error?.name === 'SecurityError' && !document.fullscreenElement ? 'requires-fullscreen' : 'failed', error);
    }
    function subscribe(listener) {
        listeners.add(listener);
        try { listener(getStatus()); } catch (_) {}
        return () => listeners.delete(listener);
    }
    function lock(token = generation) {
        if (activeLock) return activeLock;
        if (document.visibilityState !== 'visible') {
            update('failed', { name: 'InvalidStateError' }); return Promise.resolve(getStatus());
        }
        const orientation = window.screen?.orientation;
        if (typeof orientation?.lock !== 'function') {
            update('unsupported', { name: 'NotSupportedError' }); return Promise.resolve(getStatus());
        }
        activeLockFullscreen = !!document.fullscreenElement;
        update('locking');
        let result;
        try {
            result = orientation.lock('portrait-primary');
            if (!result || typeof result.then !== 'function') result = Promise.reject({ name: 'NotSupportedError' });
        }
        catch (error) { result = Promise.reject(error); }
        activeLock = Promise.resolve(result).then(() => {
            if (token !== generation) return;
            lockedInFullscreen = !!document.fullscreenElement;
            update('locked');
        }, error => { if (token === generation) failure(error, 'lock'); }).then(() => {
            activeLock = null; activeLockFullscreen = false; return getStatus();
        });
        return activeLock;
    }
    function attempt() {
        if (activeEnable || exiting || document.visibilityState !== 'visible' || !isMobile() ||
            !(installedMode?.matches || window.navigator.standalone)) return;
        lock();
    }
    function fullscreenChanged() {
        if (!document.fullscreenElement && (lockedInFullscreen || manualFullscreen || ((activeEnable || activeLockFullscreen) && state === 'locking'))) {
            generation++; lockedInFullscreen = manualFullscreen = false; update('idle');
        } else notify();
    }

    function start() {
        if (started) return;
        started = true;
        installedMode = window.matchMedia?.('(display-mode: standalone), (display-mode: fullscreen)');
        window.addEventListener('pageshow', attempt);
        document.addEventListener('visibilitychange', attempt);
        document.addEventListener('fullscreenchange', fullscreenChanged);
        window.screen?.orientation?.addEventListener?.('change', () => {
            if (window.screen.orientation.type?.startsWith('landscape')) attempt();
        });
        if (installedMode?.addEventListener) installedMode.addEventListener('change', attempt);
        else installedMode?.addListener?.(attempt);
        attempt();
    }

    function enable() {
        if (!started) start();
        if (activeEnable) return activeEnable;
        if (activeExit) return activeExit;
        if (!isMobile()) return Promise.resolve(getStatus());
        if (document.visibilityState !== 'visible') {
            update('failed', { name: 'InvalidStateError' }); return Promise.resolve(getStatus());
        }
        if (typeof window.screen?.orientation?.lock !== 'function' ||
            (!document.fullscreenElement && typeof document.documentElement.requestFullscreen !== 'function')) {
            update('unsupported', { name: 'NotSupportedError' }); return Promise.resolve(getStatus());
        }
        const enteredHere = !document.fullscreenElement, previousLock = activeLock, token = ++generation;
        let done, request;
        const operation = new Promise(resolve => { done = resolve; });
        activeEnable = operation; update('locking');
        try {
            // This call must precede every await, including an earlier automatic lock.
            if (enteredHere) request = document.documentElement.requestFullscreen();
        } catch (error) {
            failure(error, 'request'); activeEnable = null; done(getStatus()); return operation;
        }
        Promise.resolve(request).then(async () => {
            if (token !== generation) return;
            if (!document.fullscreenElement) { failure({ name: 'InvalidStateError' }, 'request'); return; }
            if (previousLock) await previousLock;
            if (token !== generation) return;
            await lock(token);
            if (token !== generation) return;
            if (state === 'locked') manualFullscreen = true;
            else if (enteredHere && document.fullscreenElement === document.documentElement) {
                // A failed lock may roll back only the fullscreen entered by this action.
                await document.exitFullscreen();
            }
        }, error => { if (token === generation) failure(error, 'request'); })
            .catch(error => { if (token === generation) failure(error, 'request'); })
            .then(() => { activeEnable = null; done(getStatus()); });
        return operation;
    }

    function exit() {
        if (activeExit) return activeExit;
        generation++; exiting = true; lockedInFullscreen = manualFullscreen = false;
        let request;
        update('locking');
        try {
            window.screen?.orientation?.unlock?.();
            if (document.fullscreenElement) request = document.exitFullscreen();
        } catch (error) {
            failure(error, 'exit'); exiting = false; return Promise.resolve(getStatus());
        }
        activeExit = Promise.resolve(request).then(() => {
            if (document.fullscreenElement) failure({ name: 'InvalidStateError' }, 'exit');
            else update('idle');
        }, error => failure(error, 'exit')).then(() => {
            activeExit = null; exiting = false; return getStatus();
        });
        return activeExit;
    }

    return { start, enable, exit, getStatus, subscribe };
})();
