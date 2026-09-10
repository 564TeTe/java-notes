const CACHE_NAME = "java-notes-v33";
const APP_SHELL = [
    "./data/question-curation.js",
    "./workspace-theme.js", "./workspace-theme.css",
    "./workspace-shell.js", "./workspace-shell.css",
    "./workspace-controls.js", "./workspace-controls.css",
    "./app-updates.js", "./update.html",
    "./data/question-bank.js", "./study-core.js", "./study-module.js", "./interview-module.js", "./study-workspace.css",
    "./assets/interviews/lx-2026-09-08.html", "./assets/interviews/lx-2026-09-08.md",
    "./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png",
    "./sync-config.js", "./resume-data.js", "./resume-module.js", "./recruitment.css", "./career-workspace.css", "./recruitment-module.js", "./data/recruitment-jobs.json",
    "./assets/resume/sun-te-resume.pdf",
    "./assets/resume/zhishu-interview-guide.docx",
    "./assets/resume/yonyou-interview-guide.docx",
    "./assets/resume/beiruan-interview-guide.docx"
];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(
        APP_SHELL.map(asset => new Request(asset, { cache: "reload" }))
    )).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("message", event => {
    if (event.data?.type === "APP_VERSION") event.ports[0]?.postMessage({ version: CACHE_NAME.replace("java-notes-v", "") });
    if (event.data?.type === "SKIP_WAITING") event.waitUntil(self.skipWaiting());
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;

    const requestUrl = new URL(event.request.url);
    if (requestUrl.pathname.endsWith("/version.json")) {
        event.respondWith(fetch(event.request, { cache: "no-store" }));
        return;
    }
    if (requestUrl.pathname.endsWith("/data/recruitment-jobs.json")) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response.ok) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put("./data/recruitment-jobs.json", copy));
                    }
                    return response;
                })
                .catch(() => caches.match("./data/recruitment-jobs.json"))
        );
        return;
    }

    // Precached documents must open their own content, including while offline.
    const isCachedAsset = APP_SHELL.some(asset => asset !== "./" && asset !== "./index.html" &&
        new URL(asset, self.location.href).pathname === requestUrl.pathname);
    if (event.request.mode === "navigate" && !isCachedAsset) {
        event.respondWith(
            fetch(event.request, { cache: "no-cache" })
                .then(response => {
                    if (response.ok) event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put("./index.html", response.clone())));
                    return response;
                })
                .catch(() => caches.match("./index.html"))
        );
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(async cache => {
            const exact = await cache.match(event.request);
            if (exact) return exact;
            try {
                const response = await fetch(event.request, { cache: "no-cache" });
                if (response.ok) event.waitUntil(cache.put(event.request, response.clone()));
                return response;
            } catch (error) {
                // An offline, newly versioned URL can still use the installed shell.
                const fallback = isCachedAsset && await cache.match(event.request, { ignoreSearch: true });
                if (fallback) return fallback;
                throw error;
            }
        })
    );
});
