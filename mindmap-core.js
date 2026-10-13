/* Pure mind-map data operations shared by the browser and regression tests. */
(function(root, factory) {
    const core = factory();
    if (typeof module === 'object' && module.exports) module.exports = core;
    else root.MindMapCore = core;
})(typeof window === 'undefined' ? globalThis : window, function() {
    'use strict';

    const LIMITS = Object.freeze({ maps: 30, nodes: 1200, depth: 32, title: 160, note: 10000 });
    const STATUSES = new Set(['new', 'learning', 'mastered']);
    const EDITABLE_FIELDS = ['title', 'note', 'status', 'questionId', 'collapsed'];
    const NODE_WIDTH = 220, NODE_HEIGHT = 72, HORIZONTAL_GAP = 76, VERTICAL_GAP = 20, PADDING = 48;
    let sequence = 0;

    function invalid(message) { throw new Error('导图数据无效：' + message); }
    function record(value, label) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) invalid(label + '格式错误');
        const prototype = Object.getPrototypeOf(value);
        if (prototype !== Object.prototype && prototype !== null) invalid(label + '必须是普通对象');
        return value;
    }
    // Read only own data properties. Imported accessors and inherited fields are never used.
    function field(value, key) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if (!descriptor || !Object.hasOwn(descriptor, 'value')) invalid('缺少字段或字段无效：' + key);
        return descriptor.value;
    }
    function identifier(value, label) {
        if (typeof value !== 'string' || !value.trim()) invalid(label + '不能为空');
        return value;
    }
    function content(value, label, maximum, required) {
        if (typeof value !== 'string') invalid(label + '必须是文本');
        if (Array.from(value).length > maximum) invalid(label + '不能超过 ' + maximum + ' 字');
        if (required && !value.trim()) invalid(label + '不能为空');
        return required ? value.trim() : value;
    }
    function cleanNode(value) {
        record(value, '节点');
        const parentId = field(value, 'parentId'), questionId = field(value, 'questionId');
        const status = field(value, 'status'), collapsed = field(value, 'collapsed');
        if (parentId !== null) identifier(parentId, '父节点 ID');
        if (questionId !== null) identifier(questionId, '关联题目 ID');
        if (!STATUSES.has(status)) invalid('学习状态错误');
        if (typeof collapsed !== 'boolean') invalid('折叠状态错误');
        return {
            id: identifier(field(value, 'id'), '节点 ID'), parentId,
            title: content(field(value, 'title'), '节点标题', LIMITS.title, true),
            note: content(field(value, 'note'), '笔记', LIMITS.note, false),
            status, questionId, collapsed
        };
    }
    function inspect(value, allowKnowledge = true) {
        record(value, '导图');
        const graph = {
            id: identifier(field(value, 'id'), '导图 ID'),
            title: content(field(value, 'title'), '导图标题', LIMITS.title, true),
            rootId: identifier(field(value, 'rootId'), '根节点 ID'),
            nodes: []
        };
        if (!allowKnowledge && ['knowledge', 'java-learning'].includes(graph.id)) invalid('内置总览不能作为自建导图保存');
        const rawNodes = field(value, 'nodes');
        if (!Array.isArray(rawNodes) || !rawNodes.length || rawNodes.length > LIMITS.nodes) invalid('每张导图应包含 1–' + LIMITS.nodes + ' 个节点');
        const byId = new Map(), children = new Map();
        for (let index = 0; index < rawNodes.length; index++) {
            const node = cleanNode(field(rawNodes, String(index)));
            if (byId.has(node.id)) invalid('节点 ID 重复');
            byId.set(node.id, node); children.set(node.id, []); graph.nodes.push(node);
        }
        if (!byId.has(graph.rootId) || byId.get(graph.rootId).parentId !== null) invalid('根节点不存在或父节点不为空');
        for (const node of graph.nodes) {
            if (node.id === graph.rootId) continue;
            if (node.parentId === null || !byId.has(node.parentId)) invalid('节点缺少有效父节点');
            children.get(node.parentId).push(node.id);
        }
        const order = [graph.rootId], depths = new Map([[graph.rootId, 0]]);
        for (let index = 0; index < order.length; index++) {
            const id = order[index], nextDepth = depths.get(id) + 1;
            for (const child of children.get(id)) {
                if (depths.has(child)) invalid('节点存在循环引用');
                if (nextDepth > LIMITS.depth) invalid('导图深度不能超过 ' + LIMITS.depth);
                depths.set(child, nextDepth); order.push(child);
            }
        }
        if (order.length !== graph.nodes.length) invalid('存在孤立节点或循环引用');
        return { graph, byId, children, order, depths };
    }
    function normalizeSnapshot(value) {
        if (value === undefined) return { version: 1, activeMapId: 'knowledge', maps: [] };
        record(value, '快照');
        if (field(value, 'version') !== 1) invalid('快照版本不支持');
        const rawMaps = field(value, 'maps');
        if (!Array.isArray(rawMaps) || rawMaps.length > LIMITS.maps) invalid('最多保存 ' + LIMITS.maps + ' 张导图');
        const seen = new Set(), maps = [];
        for (let index = 0; index < rawMaps.length; index++) {
            const graph = inspect(field(rawMaps, String(index)), false).graph;
            if (seen.has(graph.id)) invalid('导图 ID 重复');
            seen.add(graph.id); maps.push(graph);
        }
        const activeMapId = identifier(field(value, 'activeMapId'), '当前导图 ID');
        if (!['knowledge', 'java-learning'].includes(activeMapId) && !seen.has(activeMapId)) invalid('当前导图不存在');
        const snapshot = { version: 1, activeMapId, maps };
        if (Object.hasOwn(value, 'learning')) {
            const learning = field(value, 'learning');
            if (learning !== undefined) snapshot.learning = normalizeLearning(learning);
        }
        return snapshot;
    }
    function normalizeLearning(value) {
        if (value === undefined) return { version: 1, topicId: 'java-root', entries: {} };
        record(value, '知识学习记录');
        const version = Object.hasOwn(value, 'version') ? field(value, 'version') : 1;
        if (version !== 1) invalid('学习记录版本不支持');
        const topicId = identifier(Object.hasOwn(value, 'topicId') ? field(value, 'topicId') : 'java-root', '学习专题 ID');
        const rawEntries = Object.hasOwn(value, 'entries') ? field(value, 'entries') : {};
        record(rawEntries, '学习记录条目');
        const ids = Object.getOwnPropertyNames(rawEntries), entries = {};
        if (ids.length > 3000) invalid('学习记录不能超过 3000 条');
        for (const id of ids) {
            identifier(id, '学习节点 ID');
            if (['__proto__', 'prototype', 'constructor'].includes(id)) invalid('学习节点 ID 不安全');
            const entry = record(field(rawEntries, id), '学习记录条目');
            const status = Object.hasOwn(entry, 'status') ? field(entry, 'status') : 'new';
            if (!STATUSES.has(status)) invalid('学习状态错误');
            const note = content(Object.hasOwn(entry, 'note') ? field(entry, 'note') : '', '学习笔记', LIMITS.note, false);
            entries[id] = { status, note };
        }
        return { version: 1, topicId, entries };
    }
    function makeId() {
        if (typeof globalThis.crypto?.randomUUID === 'function') return 'mindmap-' + globalThis.crypto.randomUUID();
        return 'mindmap-' + Date.now().toString(36) + '-' + (++sequence).toString(36) + '-' + Math.random().toString(36).slice(2);
    }
    function allocate(factory, used) {
        if (typeof factory !== 'function') invalid('ID 生成器无效');
        const id = identifier(factory(), '新 ID');
        if (['knowledge', 'java-learning'].includes(id) || used.has(id)) invalid('新 ID 重复或保留');
        used.add(id); return id;
    }
    function newNode(id, parentId, title) {
        return { id, parentId, title, note: '', status: 'new', questionId: null, collapsed: false };
    }
    function createMap(title, idFactory = makeId) {
        title = content(title, '导图标题', LIMITS.title, true);
        const used = new Set(), id = allocate(idFactory, used), rootId = allocate(idFactory, used);
        return { id, title, rootId, nodes: [newNode(rootId, null, title)] };
    }
    function findNode(info, id) {
        if (!info.byId.has(id)) invalid('节点不存在');
        return info.byId.get(id);
    }
    function descendants(info, id) {
        findNode(info, id);
        const queue = [...info.children.get(id)];
        for (let index = 0; index < queue.length; index++) queue.push(...info.children.get(queue[index]));
        return queue;
    }
    function descendantIds(graph, id) { return descendants(inspect(graph), id); }
    function addNode(graph, parentId, title, idFactory = makeId) {
        const info = inspect(graph), parent = findNode(info, parentId);
        const used = new Set(info.byId.keys()); used.add(info.graph.id);
        const id = allocate(idFactory, used);
        parent.collapsed = false;
        info.graph.nodes.push(newNode(id, parentId, content(title, '节点标题', LIMITS.title, true)));
        return inspect(info.graph).graph;
    }
    function updateNode(graph, id, patch) {
        const info = inspect(graph), node = findNode(info, id);
        record(patch, '节点修改');
        for (const key of EDITABLE_FIELDS) {
            if (Object.hasOwn(patch, key)) node[key] = field(patch, key);
        }
        return inspect(info.graph).graph;
    }
    function removeNode(graph, id) {
        const info = inspect(graph);
        if (id === info.graph.rootId) invalid('根节点不能删除');
        const removed = new Set([id, ...descendants(info, id)]);
        info.graph.nodes = info.graph.nodes.filter(node => !removed.has(node.id));
        return info.graph;
    }
    function moveNode(graph, id, parentId, index) {
        const info = inspect(graph), node = findNode(info, id), parent = findNode(info, parentId);
        if (id === info.graph.rootId) invalid('根节点不能移动');
        if (id === parentId || descendants(info, id).includes(parentId)) invalid('不能移动到自身或后代节点');
        const siblings = info.children.get(parentId).filter(sibling => sibling !== id);
        if (index === undefined) index = siblings.length;
        if (!Number.isInteger(index) || index < 0 || index > siblings.length) invalid('同级位置无效');
        node.parentId = parentId; parent.collapsed = false;
        const others = info.graph.nodes.filter(item => item.id !== id);
        let insertion = others.length;
        if (index < siblings.length) insertion = others.findIndex(item => item.id === siblings[index]);
        else if (siblings.length) insertion = others.findIndex(item => item.id === siblings[siblings.length - 1]) + 1;
        else insertion = others.findIndex(item => item.id === parentId) + 1;
        others.splice(insertion, 0, node); info.graph.nodes = others;
        return inspect(info.graph).graph;
    }
    function cloneBranch(graph, nodeId, title, idFactory = makeId) {
        const info = inspect(graph), root = findNode(info, nodeId);
        title = content(title, '导图标题', LIMITS.title, true);
        const branchIds = [root.id, ...descendants(info, root.id)], selected = new Set(branchIds);
        const used = new Set([info.graph.id, ...info.byId.keys()]), id = allocate(idFactory, used), replacements = new Map();
        for (const oldId of branchIds) replacements.set(oldId, allocate(idFactory, used));
        const nodes = [root, ...info.graph.nodes.filter(node => node.id !== root.id && selected.has(node.id))].map(node => ({
            ...node, id: replacements.get(node.id), parentId: node.id === root.id ? null : replacements.get(node.parentId)
        }));
        nodes[0].title = title; nodes[0].collapsed = false;
        return inspect({ id, title, rootId: replacements.get(root.id), nodes }).graph;
    }
    function shortTitle(value, fallback) {
        const title = typeof value === 'string' || (typeof value === 'number' && Number.isFinite(value)) ? String(value).trim() : '';
        return Array.from(title || fallback).slice(0, LIMITS.title).join('');
    }
    function buildKnowledgeMap(questions = [], mastery = {}, memorizedIds = []) {
        if (!Array.isArray(questions)) invalid('题库格式错误');
        const graph = { id: 'knowledge', title: '知识总览', rootId: 'knowledge-root', nodes: [newNode('knowledge-root', null, '知识总览')] };
        const categories = new Map(), seen = new Set();
        for (const question of questions) {
            if (!question || typeof question.id !== 'string' || !question.id.trim() || seen.has(question.id)) continue;
            seen.add(question.id);
            const category = typeof question.category === 'string' && question.category.trim() ? question.category.trim() : '未分类';
            if (!categories.has(category)) {
                const categoryNode = newNode('category:' + category, graph.rootId, shortTitle(category, '未分类'));
                categoryNode.collapsed = true; categories.set(category, categoryNode.id); graph.nodes.push(categoryNode);
            }
            const title = shortTitle(question.question, shortTitle(question.answer, shortTitle(question.number, '未命名知识')));
            const node = newNode('question:' + question.id, categories.get(category), title);
            const level = mastery && Object.hasOwn(mastery, question.id) ? mastery[question.id]?.level : 'new';
            node.questionId = question.id;
            // Memorization records are independent from the learner's mastery rating.
            node.status = level === 'known' ? 'mastered' : ['hard', 'fuzzy'].includes(level) ? 'learning' : 'new';
            graph.nodes.push(node);
        }
        return inspect(graph).graph;
    }
    function statsByNode(graph) {
        const info = inspect(graph), results = new Map();
        // Reverse parent-first traversal visits every child before its parent.
        for (let index = info.order.length - 1; index >= 0; index--) {
            const id = info.order[index], children = info.children.get(id);
            const result = { total: 0, mastered: 0, learning: 0, new: 0, percent: 0 };
            if (!children.length) {
                result.total = 1; result[info.byId.get(id).status] = 1;
            } else {
                for (const child of children) {
                    const subtotal = results.get(child);
                    result.total += subtotal.total;
                    result.mastered += subtotal.mastered;
                    result.learning += subtotal.learning;
                    result.new += subtotal.new;
                }
            }
            result.percent = result.total ? Math.round(100 * result.mastered / result.total) : 0;
            results.set(id, result);
        }
        return results;
    }
    function stats(graph, nodeId) {
        const results = statsByNode(graph);
        const result = results.get(nodeId === undefined ? field(graph, 'rootId') : nodeId);
        if (!result) invalid('节点不存在');
        return result;
    }
    function layout(graph) {
        const info = inspect(graph), visible = [info.graph.rootId], children = new Map();
        for (let index = 0; index < visible.length; index++) {
            const id = visible[index];
            const ids = info.byId.get(id).collapsed ? [] : info.children.get(id);
            children.set(id, ids); visible.push(...ids);
        }
        const spans = new Map();
        for (let index = visible.length - 1; index >= 0; index--) {
            const id = visible[index], ids = children.get(id);
            spans.set(id, Math.max(NODE_HEIGHT, ids.reduce((height, child) => height + spans.get(child), 0) + Math.max(0, ids.length - 1) * VERTICAL_GAP));
        }
        const root = info.byId.get(info.graph.rootId);
        const nodes = [{ ...root, x: 0, y: 0, width: NODE_WIDTH, height: NODE_HEIGHT, depth: 0 }], edges = [];
        const sides = [[], []];
        children.get(root.id).forEach((id, index) => sides[index % 2].push(id));
        const queue = [];
        sides.forEach((ids, sideIndex) => {
            const height = ids.reduce((sum, id) => sum + spans.get(id), 0) + Math.max(0, ids.length - 1) * VERTICAL_GAP;
            let top = NODE_HEIGHT / 2 - height / 2;
            for (const id of ids) { queue.push({ id, side: sideIndex === 0 ? 1 : -1, top, depth: 1 }); top += spans.get(id) + VERTICAL_GAP; }
        });
        for (let index = 0; index < queue.length; index++) {
            const entry = queue[index], node = info.byId.get(entry.id);
            nodes.push({ ...node, x: entry.side * entry.depth * (NODE_WIDTH + HORIZONTAL_GAP), y: entry.top + (spans.get(entry.id) - NODE_HEIGHT) / 2, width: NODE_WIDTH, height: NODE_HEIGHT, depth: entry.depth });
            edges.push({ from: node.parentId, to: node.id });
            let top = entry.top;
            for (const id of children.get(entry.id)) { queue.push({ id, side: entry.side, top, depth: entry.depth + 1 }); top += spans.get(id) + VERTICAL_GAP; }
        }
        let minX = 0, maxX = 0, minY = 0, maxY = 0;
        for (const node of nodes) { minX = Math.min(minX, node.x); maxX = Math.max(maxX, node.x); minY = Math.min(minY, node.y); maxY = Math.max(maxY, node.y); }
        for (const node of nodes) { node.x += PADDING - minX; node.y += PADDING - minY; }
        return { nodes, edges, width: maxX - minX + NODE_WIDTH + PADDING * 2, height: maxY - minY + NODE_HEIGHT + PADDING * 2 };
    }
    return { LIMITS, normalizeSnapshot, normalizeLearning, createMap, addNode, updateNode, removeNode, moveNode, cloneBranch, buildKnowledgeMap, stats, statsByNode, layout, descendantIds };
});
