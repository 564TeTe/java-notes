/* Apply the saved palette before the first paint, without reloading the page. */
(() => {
    const key = 'workspace-theme';
    const system = matchMedia('(prefers-color-scheme: dark)');
    const themes = [
        { id:'light', name:'日间', icon:'☀', color:'#f3f5f2' },
        { id:'blue', name:'雾蓝', icon:'◈', color:'#eef3f9' },
        { id:'dark', name:'夜间', icon:'☾', color:'#101214' }
    ];
    const valid = value => themes.some(theme => theme.id === value);
    const nextTheme = value => themes[(themes.findIndex(theme => theme.id === value) + 1) % themes.length];
    let preference = null;
    try { const saved = localStorage.getItem(key); if (valid(saved)) preference = saved; } catch (_) {}

    function apply(theme) {
        const selected = themes.find(item => item.id === theme);
        const next = nextTheme(theme);
        document.documentElement.dataset.theme = theme;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = selected.color;
        document.querySelectorAll('[data-theme-toggle]').forEach(button => {
            button.textContent = `${next.icon} ${next.name}`;
            button.setAttribute('aria-label', `当前${selected.name}，切换到${next.name}主题`);
            button.title = `当前${selected.name} · 点击切换${next.name}`;
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
                preference = nextTheme(document.documentElement.dataset.theme).id;
                try { localStorage.setItem(key, preference); } catch (_) {}
                apply(preference);
            });
            parent.append(button);
        });
        apply(current());
    });
})();
