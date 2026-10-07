/* Apply the saved palette before the first paint, without reloading the page. */
(() => {
    const key = 'workspace-theme';
    const system = matchMedia('(prefers-color-scheme: dark)');
    const themes = [
        { id:'light', name:'日间', description:'灰绿 · 白色卡片', mode:'light', color:'#f3f5f2', panel:'#ffffff', accent:'#2f5d50', ink:'#22312d' },
        { id:'paper', name:'纸白', description:'纸白 · 石灰色', mode:'light', color:'#f5f4f0', panel:'#fffefa', accent:'#555b52', ink:'#30342f' },
        { id:'sand', name:'暖砂', description:'米白 · 陶棕色', mode:'light', color:'#f5efe6', panel:'#fffdf8', accent:'#975533', ink:'#44352b' },
        { id:'sage', name:'松绿', description:'浅绿 · 林木色', mode:'light', color:'#eef2ec', panel:'#fafcf8', accent:'#46634f', ink:'#29372d' },
        { id:'blue', name:'雾蓝', description:'蓝灰 · 冷色调', mode:'light', color:'#eef3f9', panel:'#ffffff', accent:'#3664ae', ink:'#20324d' },
        { id:'rose', name:'暮玫', description:'淡粉 · 灰玫色', mode:'light', color:'#f5efef', panel:'#fffafa', accent:'#865b64', ink:'#433237' },
        { id:'tatsumaki', name:'龙卷', description:'黑白漫画 · 六幕切换', mode:'light', color:'#141414', panel:'#ffffff', accent:'#252525', ink:'#191919' },
        { id:'dark', name:'夜间', description:'深灰 · 暗色调', mode:'dark', color:'#101214', panel:'#191c1f', accent:'#8cd5b3', ink:'#e0e5e3' },
        { id:'ink', name:'墨蓝', description:'深蓝 · 墨色调', mode:'dark', color:'#121820', panel:'#1b2430', accent:'#a7bdcf', ink:'#e1e7ed' }
    ];
    const valid = value => themes.some(theme => theme.id === value);
    const controls = [];
    let preference = null, picker, returnFocus;
    try { const saved = localStorage.getItem(key); if (valid(saved)) preference = saved; } catch (_) {}

    function apply(theme) {
        const selected = themes.find(item => item.id === theme);
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.themeMode = selected.mode;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = selected.color;
        controls.forEach(button => {
            button.setAttribute('aria-label', `外观设置，${preference === null ? '跟随系统，' : ''}当前${selected.name}主题`);
            button.title = `外观 · ${preference === null ? '跟随系统 · ' : ''}当前${selected.name}`;
        });
        picker?.querySelectorAll('[data-theme-choice]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
        });
        if (picker) {
            picker.querySelector('[data-theme-system]').setAttribute('aria-pressed', String(preference === null));
            picker.querySelector('[data-theme-status]').textContent = `${preference === null ? '跟随系统 · ' : ''}当前：${selected.name}`;
        }
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
        picker = document.createElement('dialog');
        picker.id = 'themePicker'; picker.className = 'theme-picker';
        picker.setAttribute('aria-labelledby', 'themePickerTitle');
        picker.innerHTML = `<header class="theme-picker-head"><div><h2 id="themePickerTitle">外观</h2><p>选择适合阅读的配色</p></div><button type="button" class="theme-picker-close" data-theme-close aria-label="关闭外观设置">×</button></header>
            <button type="button" class="theme-system" data-theme-system aria-pressed="false"><span class="theme-system-copy"><strong>跟随系统</strong><span>根据设备自动切换日间与夜间</span></span><span class="theme-system-check" aria-hidden="true">✓</span></button>
            <div class="theme-options" role="group" aria-label="主题配色">${themes.map(theme => `<button type="button" class="theme-option" data-theme-choice="${theme.id}" aria-pressed="false" aria-label="${theme.name}：${theme.description}" style="--preview-bg:${theme.color};--preview-panel:${theme.panel};--preview-accent:${theme.accent};--preview-ink:${theme.ink}">
                <span class="theme-preview${theme.id === 'tatsumaki' ? ' theme-preview-tatsumaki' : ''}" aria-hidden="true"><span class="theme-preview-top"><span class="theme-preview-title">Aa</span><span class="theme-preview-accent"></span></span><span class="theme-preview-body"><span class="theme-preview-sidebar"><i></i><i></i><i></i></span><span class="theme-preview-content"><span class="theme-preview-heading"></span><span class="theme-preview-line"></span><span class="theme-preview-line"></span><span class="theme-preview-note"></span></span></span></span>
                <span class="theme-option-title"><strong>${theme.name}</strong><span class="theme-option-check" aria-hidden="true">✓</span></span><span class="theme-option-description">${theme.description}</span></button>`).join('')}</div>
            <footer class="theme-picker-foot"><span data-theme-status role="status" aria-live="polite"></span><span>自动保存</span></footer>`;
        document.body.append(picker);
        picker.querySelector('[data-theme-close]').addEventListener('click', () => picker.close());
        picker.addEventListener('close', () => {
            controls.forEach(button => button.setAttribute('aria-expanded', 'false'));
            returnFocus?.focus({preventScroll:true});
        });
        picker.addEventListener('click', event => {
            const choice = event.target.closest('[data-theme-choice]');
            if (event.target.closest('[data-theme-system]')) {
                preference = null;
                try { localStorage.removeItem(key); } catch (_) {}
                apply(current());
            } else if (choice && valid(choice.dataset.themeChoice)) {
                preference = choice.dataset.themeChoice;
                try { localStorage.setItem(key, preference); } catch (_) {}
                apply(preference);
            } else if (event.target === picker) {
                const bounds = picker.getBoundingClientRect();
                if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) picker.close();
            }
        });
        ['.workspace-tools', '.mobile-topbar'].forEach(selector => {
            const parent = document.querySelector(selector);
            if (!parent) return;
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'theme-toggle';
            button.setAttribute('data-theme-toggle', '');
            button.setAttribute('aria-haspopup', 'dialog');
            button.setAttribute('aria-controls', 'themePicker');
            button.setAttribute('aria-expanded', 'false');
            button.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.5-3.3 1.5 1.5 0 0 1 1.1-2.5H17A4 4 0 0 0 21 11a8 8 0 0 0-9-8Z"/><circle cx="7.5" cy="10" r=".7"/><circle cx="11" cy="7" r=".7"/><circle cx="16" cy="8.5" r=".7"/></svg><span>外观</span>';
            button.addEventListener('click', () => {
                returnFocus = button;
                picker.showModal();
                controls.forEach(control => control.setAttribute('aria-expanded', 'true'));
                const selected = picker.querySelector(preference === null ? '[data-theme-system]' : `[data-theme-choice="${current()}"]`);
                selected?.focus({preventScroll:true});
                if (preference !== null) selected?.scrollIntoView({block:'nearest', inline:'nearest'});
            });
            controls.push(button);
            parent.append(button);
        });
        apply(current());
    });
})();
