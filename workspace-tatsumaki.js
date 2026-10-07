/* Scene controller for the six Tatsumaki illustrations. */
(() => {
    const key = 'workspace-tatsumaki-scene';
    const scenes = [
        { id: 'action', src: './assets/themes/tatsumaki-action.png', position: '50% 38%', label: '念动力' },
        { id: 'cover', src: './assets/themes/tatsumaki-cover.jpg', position: '50% 15%', label: '冷冽' },
        { id: 'seated', src: './assets/themes/tatsumaki-seated.jpg', position: '50% 50%', label: '浮空' },
        { id: 'portrait', src: './assets/themes/tatsumaki-portrait.jpg', position: '50% 12%', label: '静默' },
        { id: 'storm', src: './assets/themes/tatsumaki-storm.jpg', position: '50% 28%', label: '风起' },
        { id: 'avatar', src: './assets/themes/tatsumaki-avatar.png', position: '50% 35%', label: '凝视' }
    ];
    const findScene = id => scenes.find(scene => scene.id === id);

    function initialize() {
        const hero = document.querySelector('#tatsumakiScene');
        if (!hero) return;
        const main = hero.querySelector('[data-tatsumaki-main]');
        const caption = hero.querySelector('[data-tatsumaki-caption]');
        const buttons = hero.querySelectorAll('[data-tatsumaki-scene]');
        if (!main || !caption) return;

        function apply(scene) {
            main.src = scene.src;
            main.style.objectPosition = scene.position;
            hero.dataset.scene = scene.id;
            caption.textContent = scene.label;
            buttons.forEach(button => {
                button.setAttribute('aria-pressed', String(button.dataset.tatsumakiScene === scene.id));
            });
            document.documentElement.style.setProperty('--tatsumaki-scene-image', `url('${scene.src}')`);
        }

        let saved;
        try { saved = localStorage.getItem(key); } catch (_) {}
        apply(findScene(saved) || scenes[0]);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const scene = findScene(button.dataset.tatsumakiScene);
                if (!scene) return;
                apply(scene);
                try { localStorage.setItem(key, scene.id); } catch (_) {}
            });
        });
        addEventListener('storage', event => {
            if (event.key !== key && event.key !== null) return;
            apply(findScene(event.newValue) || scenes[0]);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
