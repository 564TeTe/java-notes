/* Complete learning navigation over Xiaolin readings and the original Java concepts. */
(function(root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory(require('./java-learning-courses.js'));
    else root.JavaLearningAtlas = factory(root.JavaLearningCourses);
})(typeof window === 'undefined' ? globalThis : window, function(Courses) {
    'use strict';

    const ENGINEERING_ID = 'concept-topic:engineering';
    const CONCEPT_TOPICS = Object.freeze({
        language: 'java', oop: 'java', io: 'java', functional: 'java',
        collections: 'collections', concurrency: 'juc', jvm: 'jvm',
        'data-access': 'mysql', 'web-spring': 'spring'
    });
    const CATEGORIES = Object.freeze({
        java: 'Java 基础', collections: 'Java 集合', juc: '多线程 / 并发', jvm: 'JVM',
        spring: 'Spring / Spring Boot', mysql: 'MySQL', redis: 'Redis', mq: '消息队列 MQ',
        network: '计算机网络', os: '操作系统 / Linux', linux: '操作系统 / Linux',
        data: '算法与数据结构', cap: '场景题 / 故障排查', systemdesign: '场景题 / 故障排查'
    });
    const ROUTE = [
        { id: 'language', title: '基础', topics: ['java', 'collections', 'data'] },
        { id: 'runtime', title: '运行', topics: ['juc', 'jvm', 'os', 'network'] },
        { id: 'application', title: '应用', topics: ['spring', 'mysql', 'redis', 'mq'] },
        { id: 'architecture', title: '架构', topics: ['cap', 'systemdesign'] },
        { id: 'engineering', title: '工程', topics: [ENGINEERING_ID, 'linux', 'git', 'docker', 'win'] }
    ];

    function topicId(id) { return id === ENGINEERING_ID ? id : 'xl-topic:' + id; }
    function invalid(message) { throw new Error('Java 学习目录无效：' + message); }
    function normalize(value) { return String(value || '').normalize('NFKC').toLocaleLowerCase().trim(); }

    function createIndex(conceptIndex, catalog, mapping = {}, courseParts = []) {
        if (!conceptIndex || !Array.isArray(conceptIndex.nodes) || !conceptIndex.byId || !Array.isArray(conceptIndex.topics)) invalid('缺少概念目录');
        if (!catalog || !Array.isArray(catalog.topics)) invalid('缺少小林目录');
        const byTopic = new Map(), byId = new Map(), originalTopics = new Map();
        const addLesson = lesson => {
            if (!lesson.id || byId.has(lesson.id)) invalid('重复或缺失的内容 ID：' + lesson.id);
            byId.set(lesson.id, lesson);
        };

        for (const sourceTopic of catalog.topics) {
            const id = topicId(sourceTopic.id);
            if (byTopic.has(id)) invalid('重复的专题 ID：' + sourceTopic.id);
            const { sections = [], chapters = [], ...metadata } = sourceTopic;
            const topic = { ...metadata, id, sourceTopicId: sourceTopic.id, category: CATEGORIES[sourceTopic.id] || null,
                stageId: '', chapters: [], lessonIds: [] };
            byTopic.set(id, topic);
            const sectionIds = new Set();
            for (const section of sections) {
                const lesson = { ...section, id: section.id, title: section.title, topicId: id,
                    chapterId: section.chapterId, sourceType: 'xiaolin', sourceTopicId: sourceTopic.id,
                    sourceSectionId: section.id, conceptIds: [] };
                addLesson(lesson);
                sectionIds.add(section.id);
            }

            const grouped = new Set();
            for (const sourceChapter of chapters) {
                // Keep the authored sequence, then include any catalog sections omitted from that list.
                const ids = [...(sourceChapter.sectionIds || []), ...sections.filter(section => section.chapterId === sourceChapter.id).map(section => section.id)];
                const lessonIds = [];
                for (const sectionId of ids) {
                    if (!sectionIds.has(sectionId) || grouped.has(sectionId)) continue;
                    const lesson = byId.get(sectionId);
                    if (lesson.chapterId !== sourceChapter.id) continue;
                    grouped.add(sectionId);
                    lessonIds.push(sectionId);
                }
                if (lessonIds.length) topic.chapters.push({ ...sourceChapter, sectionIds: [...lessonIds], lessonIds });
            }
            // Future catalog additions should remain visible even if their chapter metadata is incomplete.
            for (const section of sections) {
                if (grouped.has(section.id)) continue;
                const chapterId = section.chapterId || 'xl-ch-unfiled:' + sourceTopic.id;
                let chapter = topic.chapters.find(item => item.id === chapterId);
                if (!chapter) {
                    chapter = { id: chapterId, title: '其他', sectionIds: [], lessonIds: [] };
                    topic.chapters.push(chapter);
                }
                chapter.sectionIds.push(section.id);
                chapter.lessonIds.push(section.id);
                byId.get(section.id).chapterId = chapterId;
                grouped.add(section.id);
            }
        }

        byTopic.set(ENGINEERING_ID, { id: ENGINEERING_ID, title: '工程实践', category: null,
            stageId: 'engineering', sourceTopicId: null, chapters: [], lessonIds: [] });

        const conceptChapters = new Map();
        for (const sourceTopic of conceptIndex.topics) {
            const id = sourceTopic.id === 'engineering' ? ENGINEERING_ID : topicId(CONCEPT_TOPICS[sourceTopic.id]);
            const topic = byTopic.get(id);
            if (!topic) invalid('概念专题没有对应目录：' + sourceTopic.id);
            originalTopics.set(sourceTopic.id, id);
            conceptChapters.set(sourceTopic.id, { id: 'concept-chapter:' + sourceTopic.id, title: sourceTopic.title, lessonIds: [] });
        }

        for (const node of conceptIndex.nodes) {
            if (!node.parentId || node.parentId === 'java-root') continue;
            let ancestor = node;
            const visited = new Set();
            while (ancestor && ancestor.parentId !== 'java-root') {
                if (visited.has(ancestor.id)) invalid('概念父节点循环：' + node.id);
                visited.add(ancestor.id);
                ancestor = conceptIndex.byId.get(ancestor.parentId);
            }
            const chapter = ancestor && conceptChapters.get(ancestor.id);
            if (!chapter) invalid('概念缺少上级专题：' + node.id);
            const targetTopicId = originalTopics.get(ancestor.id);
            addLesson({ id: node.id, title: node.title, topicId: targetTopicId, chapterId: chapter.id,
                sourceType: 'concept', kind: 'concept', concept: node, conceptIds: [], originalTopicId: ancestor.id });
            chapter.lessonIds.push(node.id);
        }

        for (const [originalId, chapter] of conceptChapters) {
            if (chapter.lessonIds.length) byTopic.get(originalTopics.get(originalId)).chapters.push(chapter);
        }

        // Only explicit concept-to-section mappings create connections; parent topics do not broaden them.
        for (const node of conceptIndex.nodes) {
            const conceptLesson = byId.get(node.id);
            if (!conceptLesson || conceptLesson.sourceType !== 'concept') continue;
            const mapped = Object.prototype.hasOwnProperty.call(mapping || {}, node.id) ? mapping[node.id] : [];
            const ids = new Set([...(Array.isArray(mapped) ? mapped : []), ...(Array.isArray(node.readingIds) ? node.readingIds : [])]);
            conceptLesson.readingIds = [];
            for (const sectionId of ids) {
                const source = byId.get(sectionId);
                if (!source || source.sourceType !== 'xiaolin') continue;
                source.conceptIds.push(node.id);
                conceptLesson.readingIds.push(sectionId);
            }
        }

        const seen = new Set();
        const stages = ROUTE.map(stage => {
            const topicIds = stage.topics.map(topicId).filter(id => byTopic.has(id));
            for (const id of topicIds) { seen.add(id); byTopic.get(id).stageId = stage.id; }
            return { id: stage.id, title: stage.title, topicIds };
        });
        for (const [id, topic] of byTopic) {
            if (seen.has(id)) continue;
            stages[stages.length - 1].topicIds.push(id);
            topic.stageId = 'engineering';
        }
        const topics = stages.flatMap(stage => stage.topicIds.map(id => byTopic.get(id)));
        for (const topic of topics) topic.lessonIds = topic.chapters.flatMap(chapter => chapter.lessonIds);
        const lessons = topics.flatMap(topic => topic.lessonIds.map(id => byId.get(id)));
        const searchText = new Map();
        for (const lesson of lessons) {
            const topic = byTopic.get(lesson.topicId);
            const chapter = topic.chapters.find(item => item.id === lesson.chapterId);
            const node = lesson.concept;
            searchText.set(lesson.id, normalize([lesson.title, topic.title, chapter?.title,
                node?.summary, node?.explanation, node?.example, node?.pitfall, ...(node?.terms || [])].filter(Boolean).join(' ')));
        }
        const index = { topics, byTopic, lessons, byId, stages, originalTopics, searchText };
        return courseParts.length ? Courses.attach(index, courseParts) : index;
    }

    function topicFor(index, id) {
        return index.byTopic.get(id) || index.byTopic.get(index.byId.get(id)?.topicId) ||
            index.byTopic.get(index.originalTopics?.get(id)) || null;
    }

    function search(index, query) {
        const terms = normalize(query).split(/\s+/).filter(Boolean);
        if (!terms.length) return [...index.lessons];
        return index.lessons.filter(lesson => terms.every(term => index.searchText.get(lesson.id).includes(term)));
    }

    function previousNext(index, id) {
        const topic = topicFor(index, id);
        const sequence = index.byId.get(id)?.sourceType === 'course' ? topic?.courseLessonIds : topic?.lessonIds;
        const position = sequence ? sequence.indexOf(id) : -1;
        if (position < 0) return { previous: null, next: null, index: -1, total: 0 };
        return { previous: index.byId.get(sequence[position - 1]) || null,
            next: index.byId.get(sequence[position + 1]) || null, index: position, total: sequence.length };
    }

    return { createIndex, topicFor, search, previousNext };
});
