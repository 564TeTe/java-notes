(function (root, factory) {
    const routes = factory();
    if (typeof module === 'object' && module.exports) module.exports = routes;
    else root.JavaLearningRoutes = routes;
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    // These are learning sequences across the full knowledge atlas, not runtime
    // execution diagrams or a reduced syllabus. Every step opens an existing lesson.
    const step = (id, label) => ({ id, label });

    return [
        {
            id: 'objects-and-spring', title: '对象与 Spring',
            steps: [
                step('language-references', '对象与引用'),
                step('oop-classes', '实例与构造器'),
                step('language-pass-by-value', '方法调用与传参'),
                step('web-spring-ioc', 'IoC 容器'),
                step('web-spring-di', '依赖注入'),
                step('web-spring-bean-lifecycle', 'Bean 生命周期'),
                step('web-spring-mvc', 'MVC 请求分发'),
                step('web-spring-proxy', '代理与方法调用'),
                step('xl-spring-ce7b922a2ba7e2f2', 'Mapper 代理与执行'),
                step('xl-spring-bee89a3e61593fa4', '查询结果与对象映射')
            ]
        },
        {
            id: 'concurrency-and-pools', title: '并发与线程池',
            steps: [
                step('concurrency-thread', '线程与任务'),
                step('concurrency-shared-state', '共享状态与竞态'),
                step('concurrency-jmm', 'Java 内存模型'),
                step('concurrency-happens-before', '可见性与有序性'),
                step('concurrency-monitor', '锁与原子性'),
                step('xl-spring-7e5b53ba1e15fe24', 'Bean 与线程安全'),
                step('concurrency-blocking-queue', '阻塞队列'),
                step('concurrency-executor', '线程池'),
                step('concurrency-executor-flow', '任务执行路径'),
                step('concurrency-executor-rejection', '拒绝与背压')
            ]
        },
        {
            id: 'queries-and-cache', title: '查询与缓存',
            steps: [
                step('data-access-sql', 'SQL 与关系查询'),
                step('xl-mysql-00b8e0361c31c5b9', 'SQL 执行过程'),
                step('data-access-index', '索引与查询成本'),
                step('data-access-transaction', '事务边界'),
                step('data-access-isolation', '隔离与并发异常'),
                step('xl-mysql-9865487e86c9766f', 'MVCC'),
                step('xl-redis-84438eb73eb8e81c', '本地缓存与 Redis'),
                step('xl-redis-636e00f3a8cd3ddb', '缓存对象的结构'),
                step('xl-redis-1eadb3e579d8186a', '数据库与缓存一致性'),
                step('xl-redis-2b969312c8856890', '缓存失效与保护')
            ]
        },
        {
            id: 'network-and-requests', title: '网络与请求处理',
            steps: [
                step('xl-network-061539835c44980d', '网络分层'),
                step('xl-network-01a462cc7a6b64fb', 'DNS 解析'),
                step('xl-network-f2677b2d990f130c', 'TCP 建立连接'),
                step('xl-network-d35593eaf8163df4', 'TCP 可靠传输'),
                step('web-spring-http', 'HTTP 请求与响应'),
                step('xl-network-988e4aea7b9245e1', 'HTTPS 握手'),
                step('xl-network-651933d458530dac', '反向代理'),
                step('web-spring-servlet', 'Servlet 与容器'),
                step('web-spring-mvc', 'MVC 请求分发'),
                step('xl-network-81b1ab3847551dff', '串联一次网页请求')
            ]
        },
        {
            id: 'jvm-and-diagnostics', title: 'JVM 与排障',
            steps: [
                step('jvm-class-loading', '类加载与链接'),
                step('jvm-runtime-areas', '运行时数据区'),
                step('jvm-heap', '堆与对象生命周期'),
                step('jvm-reachability', '对象可达性'),
                step('jvm-gc-roots', 'GC Roots'),
                step('jvm-gc-algorithms', '垃圾回收算法'),
                step('jvm-diagnostics', '线程与堆转储'),
                step('jvm-oom', 'OOM 分类与定位'),
                step('jvm-cpu-diagnosis', 'CPU 与等待瓶颈'),
                step('engineering-debugging', '证据与问题验证')
            ]
        },
        {
            id: 'messages-and-distribution', title: '消息与分布式',
            steps: [
                step('xl-cap-1cb43d31ff162374', '分布式系统'),
                step('xl-cap-f445c08142f92dfd', 'CAP 与取舍'),
                step('xl-cap-9d43da582227dfc9', '一致性模型'),
                step('xl-mq-dd636fd4abde657b', '消息队列的作用'),
                step('xl-mq-5cd27ed4171c6aea', '消息丢失与保障'),
                step('xl-mq-7a2e8b04eacf2ef2', '重复消费与幂等'),
                step('xl-mq-80c0011b0a1b5f3a', '失败重试与死信'),
                step('data-access-transaction', '本地事务边界'),
                step('xl-mq-eae761d8751f7d54', '本地消息表'),
                step('xl-mq-f9a7a0124fff1c9d', '消息积压与处理')
            ]
        }
    ];
}));
