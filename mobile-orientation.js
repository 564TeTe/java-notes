/* Keep an installed mobile workbench upright without changing ordinary browsing. */
window.MobileOrientation = (() => {
    let started = false, pending = false, installedMode;

    function isMobile() {
        const nav = window.navigator;
        if (typeof nav.userAgentData?.mobile === 'boolean') return nav.userAgentData.mobile;
        return /Android|iPhone|iPod|iPad/i.test(nav.userAgent || '') ||
            (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1);
    }

    function attempt() {
        const orientation = window.screen?.orientation;
        if (pending || document.visibilityState !== 'visible' || !isMobile() ||
            !(installedMode?.matches || window.navigator.standalone) ||
            typeof orientation?.lock !== 'function') return;
        pending = true;
        const finish = () => { pending = false; };
        try {
            Promise.resolve(orientation.lock('portrait-primary')).then(finish, finish);
        } catch (_) {
            // Browser restrictions and unsupported locks leave the app usable.
            finish();
        }
    }

    function start() {
        if (started) return;
        started = true;
        installedMode = window.matchMedia?.('(display-mode: standalone), (display-mode: fullscreen)');
        window.addEventListener('pageshow', attempt);
        document.addEventListener('visibilitychange', attempt);
        window.screen?.orientation?.addEventListener?.('change', () => {
            if (window.screen.orientation.type?.startsWith('landscape')) attempt();
        });
        if (installedMode?.addEventListener) installedMode.addEventListener('change', attempt);
        else installedMode?.addListener?.(attempt);
        attempt();
    }

    return { start };
})();
