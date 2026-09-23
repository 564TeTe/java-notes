/* Pure glossary operations shared by the browser and regression tests. */
(function(root, factory) {
    const core = factory();
    if (typeof module === 'object' && module.exports) module.exports = core;
    else root.GlossaryCore = core;
})(typeof window === 'undefined' ? globalThis : window, function() {
    function normalize(value) {
        return String(value || '').normalize('NFKC').replace(/\s+/g, '').toLowerCase();
    }

    function isIdentifierCharacter(value) {
        return !!value && /[A-Za-z0-9_$]/.test(value);
    }

    function createIndex(data) {
        const terms = data.terms.slice();
        const categories = data.categories.slice();
        const byId = new Map(terms.map(term => [term.id, term]));
        const searchable = terms.map(term => ({
            term,
            name: normalize(term.term),
            aliases: (term.aliases || []).map(normalize),
            definition: normalize(term.definition),
        }));
        const ambiguous = new Set(Object.keys(data.ambiguousLookup || {}).map(normalize));
        const labels = new Map();
        const owners = new Map();

        terms.forEach(term => {
            [term.term, ...(term.aliases || [])].forEach(value => {
                const label = String(value || '').trim();
                const key = normalize(label);
                if (!key) return;
                if (!owners.has(key)) owners.set(key, new Set());
                owners.get(key).add(term.id);
                labels.set(label, term.id);
            });
        });
        owners.forEach((ids, key) => {
            if (ids.size > 1) ambiguous.add(key);
        });

        // A literal trie needs no regular-expression interpolation: +, {}, (),
        // and annotation prefixes retain their original meaning and offsets.
        // Keep matching case-sensitive so GET does not explain an ordinary get.
        const trie = new Map();
        labels.forEach((termId, label) => {
            if (Array.from(label).length < 2 || ambiguous.has(normalize(label))) return;
            let node = trie;
            for (let i = 0; i < label.length; i++) {
                if (!node.has(label[i])) node.set(label[i], new Map());
                node = node.get(label[i]);
            }
            node.termId = termId;
        });

        function search(query, category) {
            const keyword = normalize(query);
            const ranked = [[], [], [], [], []];
            searchable.forEach(entry => {
                if (category && category !== 'all' && entry.term.category !== category) return;
                if (!keyword || entry.name === keyword) ranked[0].push(entry.term);
                else if (entry.aliases.includes(keyword)) ranked[1].push(entry.term);
                else if (entry.name.includes(keyword)) ranked[2].push(entry.term);
                else if (entry.aliases.some(alias => alias.includes(keyword))) ranked[3].push(entry.term);
                else if (entry.definition.includes(keyword)) ranked[4].push(entry.term);
            });
            return ranked.flat();
        }

        function match(value) {
            const text = String(value || '');
            const matches = [];
            let start = 0;
            while (start < text.length) {
                if (isIdentifierCharacter(text[start]) && isIdentifierCharacter(text[start - 1])) {
                    start++;
                    continue;
                }
                let node = trie;
                let longest = null;
                for (let end = start; end < text.length; end++) {
                    node = node.get(text[end]);
                    if (!node) break;
                    if (node.termId !== undefined &&
                        !(isIdentifierCharacter(text[end]) && isIdentifierCharacter(text[end + 1]))) {
                        longest = { start, end: end + 1, termId: node.termId };
                    }
                }
                if (longest) {
                    matches.push(longest);
                    start = longest.end;
                } else start++;
            }
            return matches;
        }

        return { terms, categories, search, match, get: id => byId.get(id) };
    }

    return { createIndex };
});
