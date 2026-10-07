/* Give each core workspace its own illustration and heading. */
(() => {
    const profiles = [
        { module: 'bank', scene: 'study', src: './assets/themes/tatsumaki-study.jpg', layout: 'index', chapter: '01 / STUDY FILES', title: '题库', caption: '分类索引 · 逐题复习', position: '50% 25%' },
        { module: 'interviews', scene: 'dossier', src: './assets/themes/tatsumaki-dossier.jpg', layout: 'dossier', chapter: '02 / FIELD NOTES', title: '公司面经', caption: '面试记录 · 公司档案', position: '40% 42%' },
        { module: 'quiz', scene: 'power', src: './assets/themes/tatsumaki-power.jpg', layout: 'impact', chapter: '03 / PRACTICE', title: '随机抽查', caption: '抽题练习 · 回顾薄弱项', position: '55% 32%' },
        { module: 'resume', scene: 'calm', src: './assets/themes/tatsumaki-calm.jpg', layout: 'profile', chapter: '04 / PROFILE', title: '简历准备', caption: '项目经历 · 面试表达', position: '50% 20%' },
        { module: 'recruitment', scene: 'reach', src: './assets/themes/tatsumaki-reach.jpg', layout: 'poster', chapter: '05 / OPPORTUNITIES', title: '秋招专区', caption: '招聘信息 · 投递进展', position: '65% 24%' },
        { module: 'resources', scene: 'welcome', src: './assets/themes/tatsumaki-welcome.jpg', layout: 'catalog', chapter: '06 / REFERENCE', title: '学习资源', caption: '常用命令 · 学习资料', position: '50% 22%' },
        { module: 'personal', scene: 'wink', src: './assets/themes/tatsumaki-wink.jpg', layout: 'note', chapter: '07 / MY NOTES', title: '我的笔记', caption: '记录想法 · 整理所学', position: '50% 40%' },
        { module: 'memorized', scene: 'panorama', src: './assets/themes/tatsumaki-panorama.png', layout: 'panorama', chapter: '08 / REVIEW', title: '已背会', caption: '复习巩固 · 温故知新', position: '50% 50%' },
        { module: 'marked', scene: 'avatar', src: './assets/themes/tatsumaki-avatar.png', layout: 'bookmark', chapter: '09 / BOOKMARKS', title: '重点收藏', caption: '值得再看一遍', position: '50% 35%' },
        { module: 'glossary', scene: 'uniform', src: './assets/themes/tatsumaki-uniform.jpg', layout: 'lexicon', chapter: '10 / GLOSSARY', title: '术语词典', caption: '概念速查 · 理清术语', position: '50% 20%' }
    ];

    function initialize() {
        const body = document.body;
        const hero = document.querySelector('#tatsumakiScene');
        if (!body || !hero) return;
        const main = hero.querySelector('[data-tatsumaki-main]');
        const chapter = hero.querySelector('[data-tatsumaki-chapter]');
        const title = hero.querySelector('[data-tatsumaki-title]');
        const caption = hero.querySelector('[data-tatsumaki-caption]');
        if (!main || !chapter || !title || !caption) return;
        let renderedModule = null, renderedSource = null;

        function updateModule() {
            const module = body.dataset.workspace || '';
            if (module === renderedModule) return;
            renderedModule = module;
            const profile = profiles.find(profile => profile.module === module);
            hero.hidden = !profile;
            body.dataset.tatsumakiArt = profile ? 'on' : 'off';
            hero.dataset.module = module;
            if (!profile) {
                delete hero.dataset.layout;
                delete hero.dataset.scene;
                return;
            }
            hero.dataset.layout = profile.layout;
            hero.dataset.scene = profile.scene;
            if (profile.src !== renderedSource) {
                main.src = profile.src;
                renderedSource = profile.src;
            }
            main.style.objectPosition = profile.position;
            chapter.textContent = profile.chapter;
            title.textContent = profile.title;
            caption.textContent = profile.caption;
        }

        updateModule();
        const observer = new MutationObserver(updateModule);
        observer.observe(body, { attributes: true, attributeFilter: ['data-workspace'] });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
