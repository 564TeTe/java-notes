/* Runs in <head> so a saved night theme is applied before the first paint. */
(() => {
    const key = 'workspace-theme';
    const system = matchMedia('(prefers-color-scheme: dark)');
    const valid = value => value === 'light' || value === 'dark';
    let preference = null;
    try { const saved = localStorage.getItem(key); if (valid(saved)) preference = saved; } catch (_) {}

    function apply(theme) {
        const dark = theme === 'dark';
        document.documentElement.dataset.theme = theme;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = dark ? '#101214' : '#f5f7f3';
        document.querySelectorAll('[data-theme-toggle]').forEach(button => {
            button.textContent = dark ? '☀ 日间' : '☾ 夜间';
            button.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到黑色主题');
            button.setAttribute('aria-pressed', String(dark));
            button.title = dark ? '切换到浅色主题' : '切换到黑色主题';
        });
    }
    const current = () => preference || (system.matches ? 'dark' : 'light');
    apply(current());
    system.addEventListener('change', event => {
        if (!preference) apply(event.matches ? 'dark' : 'light');
    });
    addEventListener('storage', event => {
        if (event.key !== key && event.key !== null) return;
        preference = valid(event.newValue) ? event.newValue : null;
        apply(current());
    });
    document.addEventListener('DOMContentLoaded', () => {
        ['.workspace-tools', '.mobile-topbar'].forEach(selector => {
            const parent = document.querySelector(selector);
            if (!parent) return;
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'theme-toggle';
            button.setAttribute('data-theme-toggle', '');
            button.addEventListener('click', () => {
                preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
                try { localStorage.setItem(key, preference); } catch (_) {}
                apply(preference);
            });
            parent.append(button);
        });
        apply(current());
    });
})();
