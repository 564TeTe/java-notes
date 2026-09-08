/* Progressive enhancement: native values and form events, inline mobile choices. */
const WorkspaceControls = (() => {
    const records = new WeakMap();
    let installed = false;
    const mobile = () => matchMedia('(max-width: 768px)').matches;
    const visible = node => !!node.getClientRects().length && !node.closest('[hidden]');

    function labelFor(select) {
        const label = select.labels?.[0];
        return select.getAttribute('aria-label') || (label && [...label.childNodes]
            .filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim()) || '选择选项';
    }
    function keyFor(select) {
        const scope = select.closest('[data-page-location]')?.dataset.pageLocation || select.closest('form')?.id || '';
        return [scope, select.id || select.name || select.dataset.studyFilter || select.dataset.quizFilter ||
            (select.hasAttribute('data-page-size') ? 'page-size' : select.getAttribute('aria-label'))].join(':');
    }
    function closeChoices(except) {
        document.querySelectorAll('details.mobile-choice[open]').forEach(d => { if (d !== except) d.open = false; });
    }
    function enhance(root = document) {
        root.querySelectorAll('select:not([multiple])').forEach(select => {
            const existing = records.get(select);
            if (existing) { existing.sync(); return; }
            const label = labelFor(select), key = keyFor(select);
            const segmented = select.dataset.quizFilter === 'count';
            const wrapper = document.createElement('div');
            wrapper.className = 'choice-control';
            wrapper.dataset.choiceKey = key;
            select.before(wrapper); wrapper.append(select);
            select.classList.add('choice-native');
            const panel = document.createElement(segmented ? 'div' : 'details');
            panel.className = segmented ? 'mobile-choice-segments' : 'mobile-choice';
            let trigger;
            if (!segmented) {
                trigger = document.createElement('summary');
                trigger.className = 'choice-trigger';
                panel.append(trigger);
            } else {
                panel.setAttribute('role', 'group'); panel.setAttribute('aria-label', label);
            }
            const body = document.createElement('div'); body.className = 'choice-body';
            const search = document.createElement('input');
            search.type = 'search'; search.className = 'choice-search';
            search.placeholder = '搜索选项'; search.setAttribute('aria-label', '搜索' + label);
            const options = document.createElement('div'); options.className = 'choice-options';
            options.setAttribute('role', 'group'); options.setAttribute('aria-label', label);
            const empty = document.createElement('p'); empty.className = 'choice-empty';
            empty.textContent = '没有匹配的选项'; empty.hidden = true;
            body.append(search, options, empty); panel.append(body); wrapper.append(panel);
            let signature = '';
            function filter() {
                const term = search.value.trim().toLocaleLowerCase();
                [...options.children].forEach(button => { button.hidden = !button.textContent.toLocaleLowerCase().includes(term); });
                empty.hidden = [...options.children].some(button => !button.hidden);
            }
            function sync() {
                const title = select.selectedOptions[0]?.textContent || '请选择';
                if (trigger && trigger.textContent !== title) trigger.textContent = title;
                if (trigger) {
                    trigger.setAttribute('aria-label', label + '：' + title);
                    trigger.setAttribute('aria-disabled', String(select.disabled));
                }
                search.hidden = segmented || select.options.length <= 8;
                const next = JSON.stringify([select.matches(':disabled'), ...[...select.options].map(o => [o.value, o.textContent, o.disabled, o.hidden, o.selected])]);
                if (signature === next) return;
                signature = next; options.replaceChildren();
                [...select.options].filter(o => !o.hidden).forEach(option => {
                    const button = document.createElement('button'); button.type = 'button';
                    button.dataset.choiceValue = option.value;
                    button.textContent = segmented ? option.value + ' 道' : option.textContent;
                    button.disabled = select.matches(':disabled') || option.disabled || !!option.closest('optgroup:disabled');
                    button.setAttribute('aria-pressed', String(option.selected));
                    button.className = 'choice-option'; options.append(button);
                });
                filter();
            }
            function restoreFocus(value) {
                const target = [...document.querySelectorAll('.choice-control')].find(w => w.dataset.choiceKey === key);
                if (target && !visible(target)) {
                    target.closest('.page-settings')?.querySelector('summary').focus({preventScroll:true});
                    return;
                }
                const button = segmented ? [...(target?.querySelectorAll('.choice-option') || [])].find(b => b.dataset.choiceValue === value) : target?.querySelector('summary');
                button?.focus({preventScroll:true});
            }
            options.addEventListener('click', event => {
                const button = event.target.closest('.choice-option');
                if (!button || button.disabled) return;
                event.preventDefault();
                const value = button.dataset.choiceValue, changed = select.value !== value;
                select.value = value;
                if (!segmented) panel.open = false;
                if (changed) {
                    select.dispatchEvent(new Event('input', {bubbles:true}));
                    select.dispatchEvent(new Event('change', {bubbles:true}));
                }
                enhance();
                restoreFocus(value);
            });
            search.addEventListener('input', event => { event.stopPropagation(); filter(); });
            panel.addEventListener('keydown', event => {
                if (select.matches(':disabled')) return;
                const buttons = [...options.querySelectorAll('button:not(:disabled)')].filter(visible);
                if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    if (!segmented && !panel.open) panel.open = true;
                    const all = [...options.querySelectorAll('button:not(:disabled)')].filter(b => !b.hidden);
                    const current = all.indexOf(document.activeElement);
                    const next = current < 0 ? (event.key === 'ArrowDown' ? 0 : all.length - 1) :
                        (current + (event.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length;
                    all[next]?.focus();
                } else if (buttons.includes(document.activeElement) && (event.key === 'Home' || event.key === 'End')) {
                    event.preventDefault(); (event.key === 'Home' ? buttons[0] : buttons.at(-1))?.focus();
                }
            });
            if (trigger) {
                trigger.addEventListener('click', event => { if (select.disabled) event.preventDefault(); });
                panel.addEventListener('toggle', () => {
                    trigger.setAttribute('aria-expanded', String(panel.open));
                    if (panel.open) { closeChoices(panel); search.value = ''; sync(); filter(); }
                });
            }
            select.addEventListener('change', sync);
            records.set(select, {sync}); sync();
        });
    }
    function init() {
        if (installed) return;
        installed = true;
        enhance();
        // Editor option lists are rebuilt after opening; observe additions, not our attributes.
        let pending = false;
        new MutationObserver(() => {
            if (pending) return;
            pending = true;
            queueMicrotask(() => { pending = false; enhance(); });
        }).observe(document.body, {childList:true, subtree:true});
        document.addEventListener('reset', () => queueMicrotask(() => enhance()));
        document.addEventListener('click', event => { if (!event.target.closest('.mobile-choice')) closeChoices(); });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && mobile()) {
                const opened = [...document.querySelectorAll('details.mobile-choice[open]')].find(visible);
                if (!opened) return;
                event.preventDefault(); event.stopImmediatePropagation();
                opened.open = false; opened.querySelector('summary').focus();
            } else if (event.key === 'Tab') {
                const modal = document.querySelector('dialog[open],.modal-overlay.open .modal,.recruit-modal-backdrop .recruit-form');
                if (!modal) return;
                const nodes = [...modal.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea,select,summary,a[href]')].filter(visible);
                const first = nodes[0], last = nodes.at(-1);
                if (event.shiftKey && document.activeElement === first || !event.shiftKey && document.activeElement === last) {
                    event.preventDefault(); event.stopImmediatePropagation();
                    (event.shiftKey ? last : first)?.focus();
                }
            }
        }, true);
        document.addEventListener('focusin', event => {
            if (event.target.matches('select.choice-native') && mobile()) event.target.parentElement.querySelector('summary,button')?.focus();
        });
    }
    return {enhance, init};
})();
