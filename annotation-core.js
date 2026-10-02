/* Pure annotation lookup: shared by the page and regression tests. */
(function(root, factory) {
    const core = factory();
    if (typeof module === 'object' && module.exports) module.exports = core;
    else root.AnnotationCore = core;
})(typeof window === 'undefined' ? globalThis : window, function() {
    function normalize(value) {
        return String(value || '').normalize('NFKC').replace(/\s+/g, '').replace(/^@+/, '').toLowerCase();
    }

    function createIndex(data) {
        const annotations = (data.annotations || []).slice();
        const categories = (data.categories || []).slice();
        const basics = (data.basics || []).slice();
        const byId = new Map(annotations.map(annotation => [annotation.id, annotation]));
        const searchable = annotations.map(annotation => ({
            annotation,
            name: normalize(annotation.name),
            aliases: (annotation.aliases || []).map(normalize),
            fields: [annotation.summary, annotation.packageName, annotation.phase,
                ...(annotation.targets || []), ...(annotation.attributes || []),
                annotation.example, ...(annotation.pitfalls || []),
                annotation.interview?.question, annotation.interview?.answer].map(normalize),
        }));

        function search(query, category = 'all', frequency = 'all') {
            const keyword = normalize(query);
            const ranked = [[], [], [], [], []];
            searchable.forEach(entry => {
                const annotation = entry.annotation;
                if (category && category !== 'all' && annotation.category !== category) return;
                if (frequency === 'high' && annotation.frequency !== 'high') return;
                if (!keyword || entry.name === keyword) ranked[0].push(annotation);
                else if (entry.aliases.includes(keyword)) ranked[1].push(annotation);
                else if (entry.name.includes(keyword)) ranked[2].push(annotation);
                else if (entry.aliases.some(alias => alias.includes(keyword))) ranked[3].push(annotation);
                else if (entry.fields.some(field => field.includes(keyword))) ranked[4].push(annotation);
            });
            return ranked.flat();
        }

        return { annotations, categories, basics, search, get: id => byId.get(id) };
    }

    return { createIndex };
});
