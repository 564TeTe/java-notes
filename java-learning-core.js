/* Concept lessons, progress, and precise practice links for Java learning. */
(function(root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory(require('./mindmap-core.js'));
    else root.JavaLearningCore = factory(root.MindMapCore);
})(typeof window === 'undefined' ? globalThis : window, function(MindMapCore) {
    'use strict';
    if (!MindMapCore) throw new Error('Java 知识学习需要先加载 MindMapCore');
    const ROOT_ID = 'java-root';
    const DANGEROUS_IDS = new Set(['__proto__', 'constructor', 'prototype']);

    function invalid(message) { throw new Error('Java 学习内容无效：' + message); }
    function record(value, label) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) invalid(label + '必须是普通对象');
        const proto = Object.getPrototypeOf(value);
        if (proto !== Object.prototype && proto !== null) invalid(label + '必须是普通对象');
        return value;
    }
    function field(value, key) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if (!descriptor || !Object.hasOwn(descriptor, 'value')) invalid('缺少字段或字段无效：' + key);
        return descriptor.value;
    }
    function text(value, label, limit, required = false) {
        if (typeof value !== 'string' || Array.from(value).length > limit || (required && !value.trim())) invalid(label + '格式或长度错误');
        return required ? value.trim() : value;
    }
    function id(value) {
        const result = text(value, '节点 ID', 300, true);
        if (DANGEROUS_IDS.has(result)) invalid('节点 ID 不安全');
        return result;
    }
    function list(value, label, transform) {
        if (!Array.isArray(value)) invalid(label + '必须是数组');
        const result = [];
        for (let index = 0; index < value.length; index++) result.push(transform(field(value, String(index))));
        return result;
    }
    function source(value) {
        record(value, '来源');
        const title = text(field(value, 'title'), '来源标题', 300, true);
        const rawUrl = text(field(value, 'url'), '来源地址', 2000, true);
        let url;
        try { url = new URL(rawUrl); } catch (_) { invalid('来源地址不是有效 URL'); }
        if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) invalid('来源必须使用无凭据的 HTTPS 地址');
        return { title, url: url.href };
    }
    function lesson(value) {
        record(value, '知识节点');
        return {
            id: id(field(value, 'id')), parentId: id(field(value, 'parentId')),
            title: text(field(value, 'title'), '标题', MindMapCore.LIMITS.title, true),
            summary: text(field(value, 'summary'), '摘要', 10000),
            explanation: text(field(value, 'explanation'), '知识讲解', 10000),
            example: text(field(value, 'example'), '示例', 10000),
            pitfall: text(field(value, 'pitfall'), '常见误区', 10000),
            prerequisites: [...new Set(list(field(value, 'prerequisites'), '前置知识', id))],
            related: [...new Set(list(field(value, 'related'), '相关知识', id))],
            terms: [...new Set(list(field(value, 'terms'), '关联术语', value => text(value, '关联术语', 160, true)))],
            sources: list(field(value, 'sources'), '参考来源', source)
        };
    }
    function introduction() {
        return {
            id: ROOT_ID, parentId: null, title: 'Java 知识学习',
            summary: '从语言与对象模型出发，理解集合、并发和运行时，再连接数据访问与工程实践。',
            explanation: '选择专题查看概念、示例和常见误区。先理解前置知识，再比较相关概念；学习状态与个人笔记按知识点保存。',
            example: '', pitfall: '记住题目答案只是起点。尝试自己解释概念、预测示例结果，并用代码验证理解。',
            prerequisites: [], related: [], terms: ['Java'], sources: []
        };
    }
    function lessonNote(node) {
        return [node.summary, node.explanation && '## 知识讲解\n' + node.explanation,
            node.example && '## 示例\n' + node.example, node.pitfall && '## 常见误区\n' + node.pitfall].filter(Boolean).join('\n\n');
    }
    function createIndex(parts) {
        if (!Array.isArray(parts)) invalid('内容分组必须是数组');
        const nodes = [introduction()], byId = new Map([[ROOT_ID, nodes[0]]]), children = new Map([[ROOT_ID, []]]);
        for (let partIndex = 0; partIndex < parts.length; partIndex++) {
            const part = field(parts, String(partIndex));
            if (!Array.isArray(part)) invalid('每组内容必须是节点数组');
            for (let index = 0; index < part.length; index++) {
                if (nodes.length >= MindMapCore.LIMITS.nodes) invalid('知识节点数量超出导图上限');
                const node = lesson(field(part, String(index)));
                if (byId.has(node.id)) invalid('节点 ID 重复：' + node.id);
                if (Array.from(lessonNote(node)).length > MindMapCore.LIMITS.note) invalid('节点教学内容超出笔记上限：' + node.id);
                byId.set(node.id, node); children.set(node.id, []); nodes.push(node);
            }
        }
        for (const node of nodes) {
            if (node.id !== ROOT_ID) {
                if (!byId.has(node.parentId)) invalid('父节点不存在：' + node.id);
                children.get(node.parentId).push(node.id);
            }
            for (const relatedId of [...node.prerequisites, ...node.related]) {
                if (!byId.has(relatedId)) invalid('关联节点不存在：' + node.id + ' → ' + relatedId);
            }
        }
        const order = [ROOT_ID], depths = new Map([[ROOT_ID, 0]]);
        for (let index = 0; index < order.length; index++) {
            const parentId = order[index];
            for (const childId of children.get(parentId)) {
                if (depths.has(childId)) invalid('父子关系存在循环');
                const depth = depths.get(parentId) + 1;
                if (depth > MindMapCore.LIMITS.depth) invalid('知识节点层级超出导图上限');
                depths.set(childId, depth); order.push(childId);
            }
        }
        if (order.length !== nodes.length) invalid('存在无法到达根节点的知识节点');
        return { nodes, byId, topics: children.get(ROOT_ID).map(nodeId => byId.get(nodeId)) };
    }
    function normalizeLearning(value) { return MindMapCore.normalizeLearning(value); }
    function buildMap(index, learning, topicId = ROOT_ID) {
        if (!index || !Array.isArray(index.nodes) || !(index.byId instanceof Map) || !index.byId.has(topicId)) invalid('学习专题不存在');
        const state = normalizeLearning(learning), topic = index.byId.get(topicId);
        const children = new Map(index.nodes.map(node => [node.id, []]));
        for (const node of index.nodes) {
            if (node.parentId !== null) children.get(node.parentId).push(node.id);
        }
        const queue = [{ id: topicId, depth: 0 }], nodes = [];
        for (let cursor = 0; cursor < queue.length; cursor++) {
            const item = queue[cursor], node = index.byId.get(item.id);
            const descendants = children.get(node.id);
            const saved = Object.hasOwn(state.entries, node.id) ? state.entries[node.id] : null;
            nodes.push({ id: node.id, parentId: node.id === topicId ? null : node.parentId, title: node.title,
                note: lessonNote(node), status: saved?.status || 'new', questionId: null,
                collapsed: descendants.length > 0 && (topicId === ROOT_ID ? item.depth >= 1 : item.depth >= 2) });
            for (const childId of descendants) queue.push({ id: childId, depth: item.depth + 1 });
        }
        const graph = { id: 'java-learning:' + topicId, title: topic.title, rootId: topicId, nodes };
        return MindMapCore.normalizeSnapshot({ version: 1, activeMapId: graph.id, maps: [graph] }).maps[0];
    }
    function layoutMobile(map, focusId, width) {
        record(map, '导图');
        const mapId = field(map, 'id');
        if (typeof mapId !== 'string' || !mapId.trim()) invalid('导图 ID 无效');
        if (typeof width !== 'number' || !Number.isFinite(width) || width <= 0) invalid('手机画布宽度必须是有效正数');
        // A temporary ID allows the same strict tree validator to inspect built-in
        // maps, whose reserved navigation IDs cannot be persisted as custom maps.
        const candidate = { id: 'mobile-layout-validation', title: field(map, 'title'), rootId: field(map, 'rootId'), nodes: field(map, 'nodes') };
        const graph = MindMapCore.normalizeSnapshot({ version: 1, activeMapId: candidate.id, maps: [candidate] }).maps[0];
        const focus = graph.nodes.find(node => node.id === focusId);
        if (!focus) invalid('手机导图焦点节点不存在');
        const children = graph.nodes.filter(node => node.parentId === focusId);
        const padding = 12, gap = 16, cardHeight = 84, branchGap = 48;
        const canvasWidth = Math.max(width, padding * 2 + gap + 128 * 2);
        const cardWidth = (canvasWidth - padding * 2 - gap) / 2;
        const firstRowY = padding + cardHeight + branchGap;
        const nodes = [{ ...focus, parentId: null, collapsed: false, depth: 0,
            x: (canvasWidth - cardWidth) / 2, y: padding, width: cardWidth, height: cardHeight }];
        const edges = [];
        children.forEach((node, index) => {
            nodes.push({ ...node, collapsed: true, depth: 1,
                x: padding + (index % 2) * (cardWidth + gap),
                y: firstRowY + Math.floor(index / 2) * (cardHeight + gap), width: cardWidth, height: cardHeight });
            edges.push({ from: focusId, to: node.id });
        });
        const rows = Math.ceil(children.length / 2);
        const height = rows ? firstRowY + rows * cardHeight + (rows - 1) * gap + padding : padding * 2 + cardHeight;
        return { nodes, edges, width: canvasWidth, height, rootId: focusId, mobile: true };
    }
    function containsTerm(value, term) {
        const asciiWord = /[a-z0-9_$]/;
        let from = 0;
        while (from <= value.length - term.length) {
            const start = value.indexOf(term, from);
            if (start < 0) return false;
            const end = start + term.length;
            const startsAtBoundary = !asciiWord.test(term[0]) || start === 0 || !asciiWord.test(value[start - 1]);
            const endsAtBoundary = !asciiWord.test(term[term.length - 1]) || end === value.length || !asciiWord.test(value[end]);
            if (startsAtBoundary && endsAtBoundary) return true;
            from = start + 1;
        }
        return false;
    }
    function relatedQuestions(node, questions, limit = 8) {
        if (!node || !Array.isArray(node.terms) || !Array.isArray(questions)) invalid('关联题目输入格式错误');
        if (!Number.isInteger(limit) || limit < 0) invalid('关联题目数量无效');
        const terms = [...new Set(node.terms.filter(value => typeof value === 'string' && value.trim()).map(value => value.trim().toLowerCase()))];
        if (!terms.length || !limit) return [];
        const matches = [];
        questions.forEach((question, order) => {
            if (!question || typeof question !== 'object') return;
            const segments = [question.question, ...(Array.isArray(question.keywords) ? question.keywords : [])]
                .filter(value => typeof value === 'string').map(value => value.toLowerCase());
            const score = terms.filter(term => segments.some(value => containsTerm(value, term))).length;
            if (score) matches.push({ question, score, order });
        });
        return matches.sort((left, right) => right.score - left.score || left.order - right.order).slice(0, limit).map(item => item.question);
    }
    return { createIndex, buildMap, layoutMobile, relatedQuestions, normalizeLearning };
});
