(function (root, factory) {
  const nodes = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = nodes;
  } else {
    (root.JAVA_LEARNING_PARTS ||= []).push(nodes);
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Java 17 is the baseline. The virtual-thread node explicitly targets Java 21.
  // Spring examples describe Spring Framework 6.x proxy mode and Boot 3.x.
  const api = 'https://docs.oracle.com/en/java/javase/17/docs/api/';
  const tools = 'https://docs.oracle.com/en/java/javase/17/docs/specs/man/';
  const spring = 'https://docs.spring.io/spring-framework/reference/6.2/';
  const source = (title, url) => ({ title, url });
  const S = {
    concurrent: source('Java 17：并发包与内存一致性', api + 'java.base/java/util/concurrent/package-summary.html'),
    thread: source('Java 17：Thread', api + 'java.base/java/lang/Thread.html'),
    state: source('Java 17：Thread.State', api + 'java.base/java/lang/Thread.State.html'),
    jmm: source('JLS 17：线程、监视器与内存模型', 'https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html'),
    object: source('Java 17：Object 的等待与通知', api + 'java.base/java/lang/Object.html'),
    reentrant: source('Java 17：ReentrantLock', api + 'java.base/java/util/concurrent/locks/ReentrantLock.html'),
    atomic: source('Java 17：原子变量包', api + 'java.base/java/util/concurrent/atomic/package-summary.html'),
    concurrentMap: source('Java 17：ConcurrentHashMap', api + 'java.base/java/util/concurrent/ConcurrentHashMap.html'),
    queue: source('Java 17：BlockingQueue', api + 'java.base/java/util/concurrent/BlockingQueue.html'),
    executor: source('Java 17：ThreadPoolExecutor', api + 'java.base/java/util/concurrent/ThreadPoolExecutor.html'),
    service: source('Java 17：ExecutorService', api + 'java.base/java/util/concurrent/ExecutorService.html'),
    future: source('Java 17：CompletableFuture', api + 'java.base/java/util/concurrent/CompletableFuture.html'),
    local: source('Java 17：ThreadLocal', api + 'java.base/java/lang/ThreadLocal.html'),
    virtual: source('Java 21：虚拟线程及其固定行为', 'https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html'),
    vm: source('JVMS 17：虚拟机结构与运行时数据区', 'https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-2.html'),
    loading: source('JVMS 17：加载、链接与初始化', 'https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html'),
    loader: source('Java 17：ClassLoader', api + 'java.base/java/lang/ClassLoader.html'),
    initialization: source('JLS 17：类的初始化', 'https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html'),
    javac: source('JDK 17：javac 命令', tools + 'javac.html'),
    javap: source('JDK 17：javap 命令', tools + 'javap.html'),
    java: source('JDK 17：java 命令与运行选项', tools + 'java.html'),
    gc: source('HotSpot 17：垃圾收集实现', 'https://docs.oracle.com/en/java/javase/17/gctuning/garbage-collector-implementation.html'),
    g1: source('HotSpot 17：G1 收集器', 'https://docs.oracle.com/en/java/javase/17/gctuning/garbage-first-g1-garbage-collector1.html'),
    metaspace: source('HotSpot 17：元空间与其他内存考虑', 'https://docs.oracle.com/en/java/javase/17/gctuning/other-considerations.html'),
    reference: source('Java 17：引用类型与可达性', api + 'java.base/java/lang/ref/package-summary.html'),
    jcmd: source('JDK 17：jcmd 诊断命令', tools + 'jcmd.html'),
    jfr: source('JDK 17：JFR 记录分析', tools + 'jfr.html'),
    connection: source('Java 17：JDBC Connection', api + 'java.sql/java/sql/Connection.html'),
    prepared: source('Java 17：PreparedStatement', api + 'java.sql/java/sql/PreparedStatement.html'),
    dataSource: source('Java 17：DataSource', api + 'java.sql/javax/sql/DataSource.html'),
    isolation: source('PostgreSQL 17：事务隔离的实现示例', 'https://www.postgresql.org/docs/17/transaction-iso.html'),
    index: source('PostgreSQL 17：索引的作用与成本', 'https://www.postgresql.org/docs/17/indexes-intro.html'),
    sql: source('PostgreSQL 17：查询与表表达式', 'https://www.postgresql.org/docs/17/queries-table-expressions.html'),
    orm: source('Jakarta Persistence 3.1：对象关系映射规范', 'https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html'),
    http: source('RFC 9110：HTTP 语义', 'https://www.rfc-editor.org/rfc/rfc9110.html'),
    servlet: source('Servlet 6.0：HttpServlet', 'https://tomcat.apache.org/tomcat-10.1-doc/servletapi/jakarta/servlet/http/HttpServlet.html'),
    ioc: source('Spring 6.2：IoC 容器与 Bean', spring + 'core/beans/introduction.html'),
    di: source('Spring 6.2：依赖注入', spring + 'core/beans/dependencies/factory-collaborators.html'),
    lifecycle: source('Spring 6.2：Bean 生命周期回调', spring + 'core/beans/factory-nature.html'),
    proxy: source('Spring 6.2：代理机制与自调用', spring + 'core/aop/proxying.html'),
    mvc: source('Spring 6.2：DispatcherServlet', spring + 'web/webmvc/mvc-servlet.html'),
    transaction: source('Spring 6.2：声明式事务', spring + 'data-access/transaction/declarative/annotations.html'),
    boot: source('Spring Boot 3.4：自动配置', 'https://docs.spring.io/spring-boot/3.4/reference/using/auto-configuration.html'),
    mavenDeps: source('Maven：依赖机制', 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html'),
    mavenLifecycle: source('Maven：构建生命周期', 'https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html'),
    junit: source('JUnit 5.10：用户指南', 'https://docs.junit.org/5.10.0/user-guide/'),
    integration: source('Spring 6.2：集成测试', spring + 'testing/integration.html'),
    logging: source('SLF4J：日志门面与参数化日志', 'https://www.slf4j.org/manual.html'),
    closeable: source('Java 17：AutoCloseable', api + 'java.base/java/lang/AutoCloseable.html'),
    debugger: source('JDK 17：jdb 调试器', tools + 'jdb.html')
  };

  return [
    {
      id: 'concurrency', parentId: 'java-root', title: '并发与任务协作',
      summary: '并发正确性来自明确的共享与协作规则。',
      explanation: '并发让多个任务在时间上交错推进，可能提升吞吐量，也会让共享数据暴露在不同执行顺序下。学习时先确定哪些状态被多个线程访问，再选择隔离、不可变对象或同步机制，最后用执行器管理任务的数量与生命周期。',
      example: '订单服务同时处理两个扣库存请求：需要先定义库存更新的原子边界，再考虑线程数量。',
      pitfall: '增加线程只会增加并发机会，不能自动保证正确性，也不能保证计算任务更快。',
      prerequisites: ['language', 'oop'], related: ['jvm', 'web-spring'],
      terms: ['线程安全', '并发编程'], sources: [S.concurrent]
    },
    {
      id: 'concurrency-thread', parentId: 'concurrency', title: '线程与任务',
      summary: '任务描述工作，线程提供执行路径。',
      explanation: 'Runnable 描述一段没有返回值的工作，Thread 表示独立的执行路径。调用 start 才会启动新的线程并执行 run；直接调用 run 仍是普通方法调用。把任务与线程分离后，同一任务模型也可以交给执行器调度。',
      example: 'Runnable task = () -> System.out.println("done");\nThread worker = new Thread(task);\nworker.start();\nworker.join();',
      pitfall: '同一个 Thread 对象只能启动一次；任务对象若包含可变字段，交给多个线程后仍可能发生竞争。',
      prerequisites: ['concurrency'], related: ['concurrency-executor', 'functional'],
      terms: ['Thread', 'Runnable', 'start()', 'run()'], sources: [S.thread]
    },
    {
      id: 'concurrency-lifecycle', parentId: 'concurrency-thread', title: '线程生命周期',
      summary: '线程状态描述当前的执行或等待原因。',
      explanation: 'Java 线程有新建、可运行、阻塞、等待、限时等待和终止六种状态。RUNNABLE 包含正在执行与等待处理器的情况；BLOCKED 特指等待进入监视器。状态是瞬时观察值，分析问题时应结合调用栈和持锁关系。',
      example: '未 start 的线程是 NEW；sleep 中通常是 TIMED_WAITING；任务结束后是 TERMINATED。',
      pitfall: '操作系统状态与 Java 线程状态不是一一对应；看到 WAITING 不能直接判定死锁。',
      prerequisites: ['concurrency-thread'], related: ['concurrency-monitor', 'jvm-diagnostics'],
      terms: ['线程状态', 'BLOCKED', 'WAITING', 'TIMED_WAITING'], sources: [S.state]
    },
    {
      id: 'concurrency-interrupt', parentId: 'concurrency-thread', title: '中断与协作取消',
      summary: '中断表达取消请求，需要任务主动响应。',
      explanation: 'interrupt 通常设置线程的中断标记，而不是强制终止它。sleep、wait 等可中断阻塞会抛出 InterruptedException 并清除标记。任务应在合适的边界检查标记，释放资源后退出；不能向上抛出时，通常恢复标记并结束当前操作。',
      example: 'try { Thread.sleep(1000); }\ncatch (InterruptedException e) {\n  Thread.currentThread().interrupt();\n  return;\n}',
      pitfall: '空 catch 会丢失取消信号；isInterrupted 不清除标记，静态 Thread.interrupted 会清除当前线程标记。',
      prerequisites: ['concurrency-thread'], related: ['concurrency-executor-lifecycle'],
      terms: ['interrupt', 'InterruptedException', '线程中断'], sources: [S.thread]
    },
    {
      id: 'concurrency-shared-state', parentId: 'concurrency', title: '共享状态与竞态条件',
      summary: '共享可变状态让结果依赖线程交错顺序。',
      explanation: '两个线程访问同一变量且至少一个写入时，需要协调访问顺序。读后修改再写回不是天然的一个动作，因此即使单次读写正确，也可能丢失更新。优先减少共享；必须共享时，要把整个业务不变量放进同一个原子边界。',
      example: 'count 初始为 0；两个线程都读到 0，再各自写入 1，执行两次 count++ 最终仍可能为 1。',
      pitfall: '给读取和写入分别加锁仍可能暴露中间状态；不可变引用指向的对象也可能是可变对象。',
      prerequisites: ['concurrency-thread'], related: ['concurrency-monitor', 'concurrency-atomic'],
      terms: ['竞态条件', '线程安全', '原子性'], sources: [S.jmm, S.concurrent]
    },
    {
      id: 'concurrency-jmm', parentId: 'concurrency-shared-state', title: 'Java 内存模型',
      summary: '内存模型规定线程间允许观察到的结果。',
      explanation: 'JMM 描述共享变量读写与同步动作之间的关系，使程序不依赖某一种处理器或缓存结构。编译器和处理器可调整执行方式，但必须满足模型约束。没有建立正确同步关系时，另一个线程未必及时看到写入，也不能仅靠源码顺序推断结果。',
      example: '线程甲先写 data 再写 ready；线程乙若无同步直接读 ready，不能据此保证读到完整的 data。',
      pitfall: 'JMM 是并发语义规范，不是 JVM 堆、栈、元空间的内存区域划分。',
      prerequisites: ['concurrency-shared-state'], related: ['concurrency-happens-before', 'jvm-runtime-areas'],
      terms: ['JMM', 'Java内存模型', '内存可见性', '指令重排'], sources: [S.jmm]
    },
    {
      id: 'concurrency-happens-before', parentId: 'concurrency-jmm', title: 'happens-before',
      summary: '先行发生关系建立跨线程的可见性保证。',
      explanation: 'happens-before 是判断写入能否被后续操作正确观察的偏序关系。它包括线程内程序顺序、同一监视器的解锁到后续加锁、volatile 写到后续读，并具有传递性。线程 start 与成功 join 也能建立可见性边界。',
      example: '主线程先设置 task.name 再调用 worker.start()，新线程可以看到启动前的设置。',
      pitfall: '墙上时钟显示先执行，或调用 sleep 等待一会儿，都不能代替先行发生关系。',
      prerequisites: ['concurrency-jmm'], related: ['concurrency-volatile', 'concurrency-monitor'],
      terms: ['happens-before', '先行发生原则'], sources: [S.jmm, S.concurrent]
    },
    {
      id: 'concurrency-volatile', parentId: 'concurrency-jmm', title: 'volatile 可见性',
      summary: '易变字段提供发布语义而不包办复合操作。',
      explanation: 'volatile 字段的写与后续读建立同步关系，适合发布状态标记或替换一个完整的不可变快照。读线程通过该关系也能观察到写线程在发布前完成的写入。不过自增包含读取、计算和写回，仍需要锁或原子变量保护。',
      example: 'private volatile boolean stopping;\n// 工作线程循环检查 stopping；其他线程通过写 true 请求退出。',
      pitfall: 'volatile int count 的 count++ 仍可能丢失更新；volatile 引用也不保证对象后续内部修改安全。',
      prerequisites: ['concurrency-happens-before'], related: ['concurrency-atomic'],
      terms: ['volatile', '双重检查锁'], sources: [S.jmm]
    },
    {
      id: 'concurrency-monitor', parentId: 'concurrency', title: 'synchronized 与监视器',
      summary: '同一监视器把互斥与可见性结合起来。',
      explanation: '每个对象都可关联一个监视器。synchronized 在进入时获取该对象的监视器，退出时释放，包括异常退出；同一线程可以重入。同一监视器串行化临界区，并通过解锁与后续加锁发布数据，因此所有相关访问必须使用相同的保护规则。',
      example: 'synchronized (guard) {\n  if (stock > 0) stock--;\n}',
      pitfall: '实例同步方法锁 this，静态同步方法锁对应 Class 对象；它们不是同一把监视器。',
      prerequisites: ['concurrency-shared-state', 'concurrency-happens-before'], related: ['concurrency-reentrant-lock'],
      terms: ['synchronized', 'Monitor', '对象锁', '类锁'], sources: [S.jmm]
    },
    {
      id: 'concurrency-wait-notify', parentId: 'concurrency-monitor', title: '等待条件与通知',
      summary: '等待释放监视器，唤醒后仍需检查条件。',
      explanation: '调用对象的 wait 必须先持有它的监视器；等待时会释放该监视器，恢复执行前重新获取。notifyAll 只是让等待线程有机会继续竞争，不代表条件一定成立。因为竞争和虚假唤醒都可能发生，条件检查必须放在循环中。',
      example: 'synchronized (guard) {\n  while (!ready) guard.wait();\n  consume();\n}',
      pitfall: 'sleep 不释放监视器；在 if 中调用 wait，醒来后可能在条件已失效时继续执行。',
      prerequisites: ['concurrency-monitor', 'concurrency-interrupt'], related: ['concurrency-blocking-queue'],
      terms: ['wait', 'notifyAll', '虚假唤醒', 'wait和sleep'], sources: [S.object, S.thread]
    },
    {
      id: 'concurrency-reentrant-lock', parentId: 'concurrency', title: 'ReentrantLock 显式锁',
      summary: '显式锁提供可中断与限时获取能力。',
      explanation: 'ReentrantLock 与内置监视器一样支持互斥和重入，但把获取与释放暴露为方法，因此可实现 tryLock、限时等待和可中断获取。它还可创建多个 Condition 区分等待条件。获得锁后必须在 finally 中释放，保持资源边界完整。',
      example: 'lock.lock();\ntry { balance += amount; }\nfinally { lock.unlock(); }',
      pitfall: '公平锁不保证线程调度公平；无超时的 tryLock 即使在公平锁上也可以插队。',
      prerequisites: ['concurrency-monitor', 'concurrency-interrupt'], related: ['concurrency-wait-notify'],
      terms: ['ReentrantLock', 'Condition', '公平锁', 'tryLock'], sources: [S.reentrant]
    },
    {
      id: 'concurrency-cas', parentId: 'concurrency', title: 'CAS 比较并交换',
      summary: '比较并交换把条件更新变成原子动作。',
      explanation: 'CAS 将当前值与预期值比较，只在相同情况下写入新值，并把比较与写入作为一个原子操作。失败表示观察已过时，算法可重新读取再尝试。它适合单个状态的竞争更新，但重试成本与状态是否经历过中间变化都需考虑。',
      example: 'boolean changed = state.compareAndSet(0, 1);\n// 只有仍处于状态 0 的线程可以完成这次转换。',
      pitfall: 'A 改成 B 又改回 A 会形成 ABA；高竞争下反复重试也会消耗处理器时间。',
      prerequisites: ['concurrency-shared-state'], related: ['concurrency-atomic'],
      terms: ['CAS', 'ABA', 'compareAndSet'], sources: [S.atomic]
    },
    {
      id: 'concurrency-atomic', parentId: 'concurrency-cas', title: '原子变量',
      summary: '原子变量封装单个状态的安全更新。',
      explanation: 'AtomicInteger 等类型提供原子的读取修改写入操作，使计数与状态转换不必手写同步。它们保护的是各自的操作，不能自动维护多个变量间的不变量。更新函数可能因竞争被重新执行，所以函数应根据输入计算新值而不产生外部副作用。',
      example: 'AtomicInteger total = new AtomicInteger();\nint next = total.incrementAndGet();',
      pitfall: '先 get 再 set 不是一个原子操作；在 updateAndGet 的函数里发消息可能因重试而重复发送。',
      prerequisites: ['concurrency-cas'], related: ['concurrency-monitor'],
      terms: ['AtomicInteger', 'AtomicReference', '原子类'], sources: [S.atomic]
    },
    {
      id: 'concurrency-concurrent-map', parentId: 'concurrency', title: 'ConcurrentHashMap',
      summary: '并发映射通过原子方法保护单键操作。',
      explanation: 'ConcurrentHashMap 支持线程安全的读取与更新，并提供 putIfAbsent、compute 和 merge 表达复合的单键操作。把逻辑交给这些方法可避免先查询再修改之间被其他线程插入。遍历允许并发更新，但不提供整个映射的固定时刻快照。',
      example: 'ConcurrentHashMap<String, Integer> counts = new ConcurrentHashMap<>();\ncounts.merge("apple", 1, Integer::sum);',
      pitfall: '多个键之间的业务约束仍需协调；它不接受 null 键和值，映射中的可变对象也不会自动线程安全。',
      prerequisites: ['collections', 'concurrency-shared-state'], related: ['concurrency-atomic'],
      terms: ['ConcurrentHashMap', 'computeIfAbsent', 'putIfAbsent'], sources: [S.concurrentMap]
    },
    {
      id: 'concurrency-blocking-queue', parentId: 'concurrency', title: 'BlockingQueue 与背压',
      summary: '有界阻塞队列协调生产速度与消费速度。',
      explanation: 'BlockingQueue 把元素交接与等待条件封装起来。队列为空时消费者可等待，队列已满时生产者可阻塞或限时失败，这使有限容量能够向上游传递压力。入队前的操作对另一线程取得该元素后的操作可见，适合构建任务流水线。',
      example: 'BlockingQueue<String> jobs = new ArrayBlockingQueue<>(100);\njobs.put("report");\nString job = jobs.take();',
      pitfall: '无界队列无法限制积压内存；队列接口没有通用的关闭方法，需要约定取消或结束信号。',
      prerequisites: ['collections', 'concurrency-interrupt'], related: ['concurrency-executor'],
      terms: ['BlockingQueue', 'ArrayBlockingQueue', '生产者消费者', '背压'], sources: [S.queue]
    },
    {
      id: 'concurrency-executor', parentId: 'concurrency', title: '执行器与线程池',
      summary: '执行器把任务提交与执行资源管理分离。',
      explanation: 'ExecutorService 接收任务并返回 Future，线程池复用工作线程。ThreadPoolExecutor 在核心线程不足时创建线程，之后尝试入队，队列满时再扩展至最大线程数，仍无法接纳便触发拒绝策略。线程数、队列容量和任务类型共同决定负载行为。',
      example: 'ExecutorService pool = Executors.newFixedThreadPool(4);\ntry { Future<Integer> f = pool.submit(() -> 1 + 2); }\nfinally { pool.shutdown(); }',
      pitfall: 'newFixedThreadPool 使用无界队列，持续超负荷会积压；示例需要按实际负载配置容量和拒绝行为。',
      prerequisites: ['concurrency-thread', 'concurrency-blocking-queue'], related: ['concurrency-executor-lifecycle'],
      terms: ['ThreadPoolExecutor', '线程池', '核心线程数', '拒绝策略'], sources: [S.executor, S.service]
    },
    {
      id: 'concurrency-executor-lifecycle', parentId: 'concurrency-executor', title: '执行器关闭与任务结果',
      summary: '提交、取消和关闭必须有清晰的责任方。',
      explanation: 'shutdown 停止接收新任务，但会处理已提交任务；shutdownNow 尝试中断正在执行的任务并返回尚未启动的任务。关闭调用本身不等于任务已结束，需要 awaitTermination 等待。通过 submit 提交的异常通常保存在 Future 中，要读取结果才能观察失败。',
      example: 'pool.shutdown();\nif (!pool.awaitTermination(5, TimeUnit.SECONDS)) {\n  pool.shutdownNow();\n}',
      pitfall: 'Java 17 的 ExecutorService 不能放进 try-with-resources；任务忽略中断时 shutdownNow 也不能保证终止。',
      prerequisites: ['concurrency-executor', 'concurrency-interrupt'], related: ['engineering-resource-boundaries'],
      terms: ['shutdown', 'shutdownNow', 'Future', 'awaitTermination'], sources: [S.service]
    },
    {
      id: 'concurrency-completable-future', parentId: 'concurrency-executor', title: 'CompletableFuture 任务组合',
      summary: '完成阶段把异步结果连接成依赖关系。',
      explanation: 'CompletableFuture 用阶段描述任务依赖：thenApply 转换结果，thenCompose 连接返回阶段的操作，thenCombine 合并独立结果。普通延续可能由完成前一阶段的线程执行；异步方法可指定执行器。错误也是结果的一部分，应为失败路径安排处理。',
      example: 'CompletableFuture.supplyAsync(() -> "42", pool)\n  .thenApply(Integer::parseInt)\n  .exceptionally(error -> 0);',
      pitfall: '未指定执行器的异步方法通常使用公共池；大量阻塞操作可能挤占其他任务，join 也会阻塞调用线程。',
      prerequisites: ['concurrency-executor', 'functional'], related: ['concurrency-interrupt'],
      terms: ['CompletableFuture', 'thenCompose', 'thenApply'], sources: [S.future]
    },
    {
      id: 'concurrency-thread-local', parentId: 'concurrency', title: 'ThreadLocal 线程局部值',
      summary: '线程局部值隔离存储，生命周期仍需管理。',
      explanation: 'ThreadLocal 让同一个访问入口在不同线程中取得各自的值，常用于保存一次处理中的上下文。它不负责跨线程传播，也不使值本身不可变。在线程池中线程会复用，因此请求结束必须清理，否则下一次任务可能读到上一次留下的数据。',
      example: 'context.set(requestId);\ntry { handle(); }\nfinally { context.remove(); }',
      pitfall: '多个线程若 set 同一个可变对象，仍在共享该对象；切换异步线程后也不会自动保留普通 ThreadLocal 值。',
      prerequisites: ['concurrency-thread', 'concurrency-executor'], related: ['web-spring-transaction'],
      terms: ['ThreadLocal', 'ThreadLocal内存泄漏', 'remove()'], sources: [S.local]
    },
    {
      id: 'concurrency-virtual-threads', parentId: 'concurrency-thread', title: '虚拟线程（Java 21）',
      summary: '虚拟线程降低大量阻塞任务的线程成本。',
      explanation: 'Java 21 正式提供虚拟线程，由运行时把大量虚拟线程调度到平台线程上。许多阻塞操作可卸载虚拟线程，让承载线程执行别的任务，适合大量等待型工作。它不增加处理器核心数，也不消除数据库连接等外部资源的并发上限。',
      example: '// 仅 Java 21+\nThread task = Thread.startVirtualThread(() -> fetchRemote());\ntask.join();',
      pitfall: '在 Java 21 中，synchronized 内或 native 调用期间的阻塞可能固定承载线程；不要套用后续版本改进推断此版本。',
      prerequisites: ['concurrency-thread', 'concurrency-interrupt'], related: ['concurrency-executor', 'data-access-connection-pool'],
      terms: ['虚拟线程', 'VirtualThread', 'carrier thread'], sources: [S.virtual]
    },
    {
      id: 'jvm', parentId: 'java-root', title: 'JVM 与运行机制',
      summary: '虚拟机把字节码语义落实为程序执行。',
      explanation: 'Java 虚拟机负责加载类、执行指令、管理运行时数据与回收内存。规范定义必须满足的行为，HotSpot 等实现决定具体布局和优化策略。先建立编译、加载、执行和回收的完整路径，再用运行数据解释性能或故障，能避免只背参数。',
      example: '一次方法调用涉及已加载的类、当前线程的栈帧与可能位于堆上的对象。',
      pitfall: '某个 HotSpot 版本的对象布局或优化方式，不一定是所有 JVM 必须遵守的规则。',
      prerequisites: ['language', 'oop'], related: ['concurrency', 'engineering'],
      terms: ['JVM', 'HotSpot'], sources: [S.vm]
    },
    {
      id: 'jvm-execution-pipeline', parentId: 'jvm', title: '编译与执行链路',
      summary: '源码经字节码进入运行时再执行。',
      explanation: 'javac 将源码编译为 class 文件，运行时加载与链接这些类，再执行其中的方法。HotSpot 可先解释执行并收集运行信息，再把热点代码编译为机器码。编译目标版本与运行时版本需要兼容，因此构建成功并不保证能在更旧的运行时启动。',
      example: 'javac --release 17 Hello.java\njava Hello\n// --release 同时约束目标版本和可使用的标准 API。',
      pitfall: '即时编译依赖运行过程，单次冷启动耗时不能直接代表预热后的稳定吞吐量。',
      prerequisites: ['jvm'], related: ['jvm-bytecode', 'jvm-profiling'],
      terms: ['javac', 'JIT', '解释执行', '即时编译'], sources: [S.javac, S.java]
    },
    {
      id: 'jvm-bytecode', parentId: 'jvm-execution-pipeline', title: '字节码与操作数栈',
      summary: '字节码以虚拟机指令表达方法的操作。',
      explanation: 'class 文件不只是指令，还包含常量池、字段、方法与属性等结构。许多指令先把局部变量压入操作数栈，再计算并存回结果。理解这条数据流能解释方法调用和表达式执行，但字节码只是一层表示，运行时仍可能进行优化。',
      example: 'javap -c -p Calculator\n// 查看 add 方法如何加载参数、执行 iadd 并返回。',
      pitfall: '字节码指令数量不能直接换算运行耗时；即时编译可能合并、消除或重排实际机器指令。',
      prerequisites: ['jvm-execution-pipeline'], related: ['jvm-stack'],
      terms: ['字节码', 'javap', '操作数栈', '常量池'], sources: [S.javap, S.vm]
    },
    {
      id: 'jvm-class-loading', parentId: 'jvm', title: '类加载与链接',
      summary: '加载建立类，链接检查并连接运行依赖。',
      explanation: '加载阶段由类的二进制表示建立运行时类型。链接包含验证、准备与解析：验证检查合法性，准备为静态字段分配并设置初始默认值，解析把符号引用转为运行时可使用的引用。解析可以按需发生，初始化则负责执行类的初始化逻辑。',
      example: '加载 Order.class 并不意味着已经执行其 static 初始化块；首次主动使用可能随后触发初始化。',
      pitfall: '把准备阶段的默认值赋予和 static 初始化表达式执行混在一起，会误判静态字段的初始行为。',
      prerequisites: ['jvm-bytecode'], related: ['jvm-initialization', 'jvm-delegation'],
      terms: ['类加载', '验证', '准备阶段', '符号引用'], sources: [S.loading]
    },
    {
      id: 'jvm-delegation', parentId: 'jvm-class-loading', title: '类加载器与委派',
      summary: '类的身份同时由名字与定义加载器决定。',
      explanation: 'ClassLoader 的默认加载过程先检查已加载类，再委托父加载器，父级无法加载时才尝试自己查找。委派减少重复定义并帮助共享基础类型。运行时判断一个类的身份还要看定义它的加载器，所以相同全限定名并不一定代表同一类型。',
      example: '两个隔离插件加载器各自定义 com.example.User，它们的对象不能仅凭类名相同就互相强制转换。',
      pitfall: '父子关系通常通过引用委托，不是 Java 类继承；双亲委派是默认策略，也存在自定义加载策略。',
      prerequisites: ['jvm-class-loading'], related: ['jvm-metaspace'],
      terms: ['双亲委派', 'ClassLoader', '类加载器'], sources: [S.loader, S.loading]
    },
    {
      id: 'jvm-initialization', parentId: 'jvm-class-loading', title: '类初始化与静态成员',
      summary: '主动使用按规范触发一次类初始化。',
      explanation: '创建类实例、调用静态方法或使用非常量静态字段等主动使用会触发相应类的初始化。静态字段初始化表达式和静态块按声明顺序执行，通常先初始化父类。虚拟机协调并发初始化，使其他线程不会随意重复执行同一类的初始化过程。',
      example: 'static final int LIMIT = 10; // 编译期常量\nstatic int size = loadSize(); // 在类初始化中求值',
      pitfall: '读取编译期常量通常不触发声明类初始化；仅声明某类型的数组也不等于初始化该类。',
      prerequisites: ['jvm-class-loading'], related: ['concurrency-happens-before'],
      terms: ['类初始化', 'static代码块', 'clinit', '初始化顺序'], sources: [S.initialization]
    },
    {
      id: 'jvm-runtime-areas', parentId: 'jvm', title: '运行时数据区',
      summary: '数据区按存储职责和线程归属划分。',
      explanation: '虚拟机规范划分堆、方法区、线程栈、程序计数器和本地方法栈等运行时区域。堆与方法区由线程共享，线程栈保存各自的调用状态。这个划分描述逻辑职责；真实进程还包含代码缓存、直接内存及其他本地内存，不能只看堆使用量。',
      example: '局部变量 user 保存引用，引用指向堆中对象；对象所属类的元数据另有管理区域。',
      pitfall: '进程占用内存通常大于 -Xmx；JVM 内存区域与并发语义中的 JMM 不是同一概念。',
      prerequisites: ['jvm'], related: ['concurrency-jmm', 'jvm-heap', 'jvm-stack', 'jvm-metaspace'],
      terms: ['运行时数据区', '方法区', '程序计数器'], sources: [S.vm, S.java]
    },
    {
      id: 'jvm-heap', parentId: 'jvm-runtime-areas', title: '堆与对象生命周期',
      summary: '堆保存对象，其存活时间由可达性决定。',
      explanation: '从虚拟机抽象模型看，类实例和数组的内存由堆分配，垃圾收集器回收不再需要的对象。方法返回只会结束当前调用，不代表其中创建的对象立即消失：只要其他位置仍可访问它，它就可能继续存活。分配速度与存活比例共同影响回收压力。',
      example: '把请求对象放入长期存活的 static List 后，即使请求方法结束，对象仍可能一直保留。',
      pitfall: '局部引用离开作用域不等于对象立即回收；不要把某种收集器的分代布局当成所有 JVM 的固定结构。',
      prerequisites: ['jvm-runtime-areas'], related: ['jvm-reachability', 'jvm-g1'],
      terms: ['Java堆', '堆内存', '对象分配'], sources: [S.vm, S.gc]
    },
    {
      id: 'jvm-stack', parentId: 'jvm-runtime-areas', title: '线程栈与栈帧',
      summary: '每次方法调用通过栈帧保存执行上下文。',
      explanation: '线程调用方法时创建栈帧，其中包括局部变量表、操作数栈和动态链接等信息；方法正常返回或异常退出后栈帧结束。局部引用在线程栈中并不意味着对象只能由本线程访问。递归调用持续增加栈深度，超过允许范围会触发栈溢出。',
      example: 'void recurse() { recurse(); }\n// 缺少终止条件，最终可能抛出 StackOverflowError。',
      pitfall: '增大 -Xss 不能修复无限递归；大量线程也会消耗栈相关内存，并非只占用 Java 堆。',
      prerequisites: ['jvm-runtime-areas', 'jvm-bytecode'], related: ['concurrency-shared-state'],
      terms: ['栈帧', '虚拟机栈', 'StackOverflowError', '局部变量表'], sources: [S.vm, S.java]
    },
    {
      id: 'jvm-metaspace', parentId: 'jvm-runtime-areas', title: '元空间与类元数据',
      summary: '元空间是类元数据的实现存储区域。',
      explanation: '在 HotSpot 17 中，类元数据主要分配在本地内存中的元空间，与堆中的普通对象分开管理。类加载数量和类加载器生命周期会影响其占用。方法区是规范中的逻辑概念，元空间是特定实现的一部分，不能简单替换为完全相同的名词。',
      example: '持续生成动态代理类且保留其类加载器，可能让元空间持续增长。',
      pitfall: '把类加载器留在长期缓存中可能阻止卸载；加大 Java 堆上限通常不能直接解决元空间耗尽。',
      prerequisites: ['jvm-runtime-areas', 'jvm-delegation'], related: ['web-spring-proxy', 'jvm-diagnostics'],
      terms: ['Metaspace', '元空间', '类卸载'], sources: [S.metaspace]
    },
    {
      id: 'jvm-reachability', parentId: 'jvm-heap', title: '可达性与垃圾判定',
      summary: '可达路径决定对象能否继续被程序使用。',
      explanation: '回收器从仍可能被运行程序使用的根引用出发追踪对象。若一个对象群只在内部互相引用，却没有从根到达它们的有效保留路径，它们仍可被回收。强、软、弱与虚引用表达不同保留语义，回收时机则由收集器和运行条件决定。',
      example: 'A 引用 B、B 引用 A，但程序已无入口引用二者：这个环不必永远留在内存中。',
      pitfall: '对象不再需要但仍被缓存强引用，是逻辑内存泄漏；GC 无法理解业务上已经不需要它。',
      prerequisites: ['jvm-heap'], related: ['jvm-gc-algorithms', 'concurrency-thread-local'],
      terms: ['可达性分析', 'GC Roots', '强引用', '弱引用'], sources: [S.reference, S.gc]
    },
    {
      id: 'jvm-gc-algorithms', parentId: 'jvm-reachability', title: '垃圾回收基本算法',
      summary: '回收算法在移动成本与空间利用间取舍。',
      explanation: '标记清除先识别存活对象再回收空闲空间，可能留下碎片；复制将存活对象搬到另一片区域，便于连续分配但需要预留空间；整理把存活对象聚拢以减少碎片。实际收集器往往组合这些思想，并利用对象寿命差异安排不同区域的回收。',
      example: '一批临时解析对象只有少量存活时，复制存活对象可能比逐个处理所有空洞更合适。',
      pitfall: '算法是基本思想，收集器是完整实现；“分代”也不等于某一个固定回收算法。',
      prerequisites: ['jvm-reachability'], related: ['jvm-stw', 'jvm-g1'],
      terms: ['标记清除', '标记复制', '标记整理', '分代收集'], sources: [S.gc, S.g1]
    },
    {
      id: 'jvm-stw', parentId: 'jvm-gc-algorithms', title: '停顿与安全点',
      summary: '部分运行时操作需要暂停应用线程协作。',
      explanation: 'Stop-The-World 指应用线程在某段运行时操作期间暂停，以便虚拟机处理需要一致视图的工作。并发收集器可以把部分工作与应用重叠，但仍可能包含停顿阶段。观察延迟时要区分到达安全点的等待、实际停顿及应用自身耗时。',
      example: '使用 -Xlog:gc*,safepoint 记录信息，把接口延迟峰值与停顿时间轴对齐。',
      pitfall: '“并发回收”不等于“没有停顿”；一次接口变慢也不能仅凭猜测归因于 GC。',
      prerequisites: ['jvm-gc-algorithms'], related: ['jvm-profiling', 'jvm-g1'],
      terms: ['STW', 'Stop-The-World', 'Safepoint', '安全点'], sources: [S.g1, S.java]
    },
    {
      id: 'jvm-g1', parentId: 'jvm-gc-algorithms', title: 'G1 分区回收',
      summary: '分区回收结合存活信息安排回收工作。',
      explanation: 'HotSpot 17 的 G1 把堆划分为多个区域，并赋予年轻代或老年代等角色。它通过并发标记了解存活情况，在停顿中疏散所选区域的存活对象，再回收这些区域。混合回收可同时选择年轻区域和部分老年代区域，依据预测控制单次工作量。',
      example: '-XX:+UseG1GC -XX:MaxGCPauseMillis=200\n// 200 毫秒是期望的停顿目标，不是硬性保证。',
      pitfall: '过小的堆或过高的分配压力仍可能导致长停顿；只调整停顿目标不能替代分析存活数据。',
      prerequisites: ['jvm-heap', 'jvm-gc-algorithms', 'jvm-stw'], related: ['jvm-diagnostics'],
      terms: ['G1', 'Region', 'Mixed GC', '并发标记'], sources: [S.g1]
    },
    {
      id: 'jvm-diagnostics', parentId: 'jvm', title: '线程转储与堆转储',
      summary: '转储把故障时的执行和对象关系保留下来。',
      explanation: '线程转储展示线程调用栈、状态和部分持锁信息，适合分析等待、死锁或执行热点。堆转储记录对象与引用关系，适合分析谁保留了大量对象。先根据症状选择证据，再看多次采样或保留路径，比只看异常名称更接近根因。',
      example: 'jcmd <pid> Thread.print\njcmd <pid> GC.heap_dump heap.hprof\n// 先在目标环境评估命令影响和磁盘容量。',
      pitfall: '堆转储可能开销较大并包含敏感业务数据；单次线程快照不能证明某方法长期占用处理器。',
      prerequisites: ['jvm-runtime-areas', 'concurrency-lifecycle'], related: ['jvm-profiling'],
      terms: ['jcmd', '线程dump', '堆转储', 'heap dump'], sources: [S.jcmd]
    },
    {
      id: 'jvm-profiling', parentId: 'jvm-diagnostics', title: '性能剖析与 JFR',
      summary: '性能剖析用时间维度识别真实瓶颈。',
      explanation: '性能剖析持续采集执行、分配、锁竞争与 I/O 等信息，把观察从一个瞬间扩展到一段时间。JFR 是 JDK 的事件记录机制，可记录后再分析热点和延迟来源。先建立吞吐量、延迟与资源占用的基线，再用相同负载比较改动效果。',
      example: 'jcmd <pid> JFR.start name=study settings=profile duration=30s filename=study.jfr\njfr summary study.jfr',
      pitfall: '采样热点是调查线索，不等于全部时间因果；不同负载、预热状态和记录配置会影响比较结果。',
      prerequisites: ['jvm-diagnostics', 'jvm-execution-pipeline'], related: ['engineering-debugging'],
      terms: ['JFR', '性能分析', 'CPU热点', 'Flight Recorder'], sources: [S.jcmd, S.jfr]
    },
    {
      id: 'data-access', parentId: 'java-root', title: '数据访问与持久化',
      summary: '持久化把对象操作连接到数据库语义。',
      explanation: 'Java 程序通过驱动和连接发送 SQL，数据库负责存储、查询与事务控制。上层框架可以减少重复代码，但不会消除连接成本、隔离边界或查询开销。学习时按 SQL、JDBC、事务、连接池与映射框架的顺序理解每层负责的事情。',
      example: '保存订单：校验对象 → 获取连接 → 执行 SQL → 提交事务 → 归还连接。',
      pitfall: '内存中的对象修改不必然立刻成为数据库中的已提交数据，失败与回滚边界必须明确。',
      prerequisites: ['oop', 'io'], related: ['web-spring-transaction', 'engineering-resource-boundaries'],
      terms: ['JDBC', '持久化'], sources: [S.connection, S.orm]
    },
    {
      id: 'data-access-sql', parentId: 'data-access', title: 'SQL 与关系查询',
      summary: '关系查询声明结果，由数据库选择执行方式。',
      explanation: 'SQL 用表、行和关系表达数据操作。查询可通过连接组合表，用过滤减少候选行，再分组聚合得到统计结果；数据库优化器选择物理执行计划。先明确结果中一行代表什么，才能判断连接是否放大行数、聚合是否符合业务含义。',
      example: 'SELECT customer_id, COUNT(*)\nFROM orders\nWHERE status = \'PAID\'\nGROUP BY customer_id;',
      pitfall: '一对多连接可能放大行数并重复计数；没有 ORDER BY 时不能依赖返回行的固定顺序。',
      prerequisites: ['data-access'], related: ['data-access-index', 'data-access-prepared-statement'],
      terms: ['SQL', 'JOIN', 'GROUP BY', '执行计划'], sources: [S.sql]
    },
    {
      id: 'data-access-jdbc', parentId: 'data-access', title: 'JDBC 调用链',
      summary: '数据库连接承载语句执行与结果读取。',
      explanation: 'JDBC 提供统一接口，数据库驱动将调用转换为具体协议。Connection 表示数据库会话，Statement 或 PreparedStatement 执行语句，ResultSet 逐行读取结果。连接和结果集都可能占用外部资源，因此必须按清晰的作用域释放。',
      example: 'try (Connection c = dataSource.getConnection();\n     PreparedStatement ps = c.prepareStatement("SELECT id FROM orders");\n     ResultSet rs = ps.executeQuery()) {\n  while (rs.next()) System.out.println(rs.getLong(1));\n}',
      pitfall: 'ResultSet 初始位于第一行之前，需先调用 next；资源泄漏可能耗尽连接而非表现为堆内存不足。',
      prerequisites: ['data-access-sql', 'io'], related: ['data-access-connection-pool'],
      terms: ['JDBC', 'Connection', 'ResultSet'], sources: [S.connection, S.prepared]
    },
    {
      id: 'data-access-prepared-statement', parentId: 'data-access-jdbc', title: 'PreparedStatement 参数绑定',
      summary: '参数绑定把语句结构与输入值分开。',
      explanation: 'PreparedStatement 先描述带占位符的 SQL，再通过类型化方法绑定参数，使输入作为值参与执行而不是拼入语句结构。这样能够阻止该参数位置的输入改变 SQL 语义，也方便重复执行；实际预编译和缓存策略由驱动及数据库共同决定。',
      example: 'PreparedStatement ps = c.prepareStatement("SELECT name FROM users WHERE id = ?");\nps.setLong(1, userId);\n// 资源仍应置于 try-with-resources 中。',
      pitfall: '占位符不能代替表名、列名或排序方向；动态标识符需用明确的允许列表，不能继续拼接任意输入。',
      prerequisites: ['data-access-jdbc'], related: ['data-access-sql'],
      terms: ['PreparedStatement', 'SQL注入', '参数绑定'], sources: [S.prepared]
    },
    {
      id: 'data-access-transaction', parentId: 'data-access', title: '事务边界与提交',
      summary: '事务把一组数据库修改组成完成单元。',
      explanation: '事务让相关数据库操作一起提交或回滚，用以保护业务不变量。JDBC 连接通常默认自动提交，需关闭自动提交才能把多条语句纳入同一事务。成功时提交，失败时回滚，并正确清理连接状态；外部文件或网络动作不会因此自动回滚。',
      example: '转账时在同一连接上关闭自动提交，先扣款再入账；两条语句都成功才 commit，任一步失败则 rollback。',
      pitfall: '事务包裹的范围过大会长期占用连接或锁；捕获异常后仍继续提交可能保存半完成的业务状态。',
      prerequisites: ['data-access-jdbc'], related: ['data-access-isolation', 'web-spring-transaction'],
      terms: ['数据库事务', 'ACID', 'commit', 'rollback'], sources: [S.connection]
    },
    {
      id: 'data-access-isolation', parentId: 'data-access-transaction', title: '事务隔离与并发异常',
      summary: '隔离级别规定并发事务之间可见的边界。',
      explanation: '多个事务同时访问数据时，隔离机制约束彼此可见的修改和允许的异常。常见级别涉及脏读、不可重复读和幻读，但具体实现可采用锁或多版本机制，并可能强于标准最低要求。应结合具体数据库和业务不变量设计读写及重试策略。',
      example: '同一事务两次查询账户余额：读已提交下可能看到另一个已提交事务的新值，具体行为须按数据库验证。',
      pitfall: '不要把某数据库的可重复读行为套给所有产品；可串行化事务也可能因冲突失败，需要重试整个事务。',
      prerequisites: ['data-access-transaction', 'concurrency-shared-state'], related: ['data-access-index'],
      terms: ['事务隔离级别', '脏读', '不可重复读', '幻读', 'MVCC'], sources: [S.connection, S.isolation]
    },
    {
      id: 'data-access-connection-pool', parentId: 'data-access-jdbc', title: '连接池与容量边界',
      summary: '连接池复用会话并限制数据库并发入口。',
      explanation: '建立数据库连接涉及网络、认证与会话资源，连接池通过复用降低反复建立的成本。借用方获取一个逻辑连接，用完关闭以归还池中；池容量与等待超时共同限制并发访问。DataSource 是获取连接的接口，本身并不保证实现一定带池。',
      example: '池上限为 20，已有 20 个请求持有连接时，第 21 个请求通常等待、超时或被实现按策略拒绝。',
      pitfall: '池越大不代表吞吐量越高；长事务或连接未归还会导致排队，增加应用线程不能消除这个瓶颈。',
      prerequisites: ['data-access-jdbc', 'data-access-transaction'], related: ['concurrency-virtual-threads'],
      terms: ['数据库连接池', 'DataSource', 'HikariCP', '连接泄漏'], sources: [S.dataSource, S.connection]
    },
    {
      id: 'data-access-index', parentId: 'data-access-sql', title: '索引与查询成本',
      summary: '索引用额外维护成本换取更少的数据扫描。',
      explanation: '索引建立从键值到数据位置的辅助结构，可能加速过滤、连接与排序，但每次写入也要维护它并消耗存储。优化器会比较索引访问和全表扫描的成本，选择性、数据分布及返回行数都会影响决定。判断效果应查看执行计划和实际测量。',
      example: '为频繁按 customer_id 查询订单的场景创建索引，再比较计划中的扫描方式、估计行数和实际耗时。',
      pitfall: '存在索引并不保证查询会使用它；给每个字段都建索引可能拖慢写入而几乎不改善查询。',
      prerequisites: ['data-access-sql'], related: ['data-access-isolation', 'data-access-orm'],
      terms: ['数据库索引', 'B+树', '执行计划', '索引失效'], sources: [S.index]
    },
    {
      id: 'data-access-orm', parentId: 'data-access', title: 'ORM 与持久化上下文',
      summary: '对象关系映射连接对象身份与表中记录。',
      explanation: 'ORM 根据映射把对象属性和关联转换为表、列与关系。以 JPA 为例，持久化上下文管理实体身份与状态，并可在同步时把受管理对象的修改写入数据库。框架最终仍需执行 SQL，因此理解抓取策略、事务边界和生成查询是使用它的基础。',
      example: '查询 50 个订单后逐个访问延迟加载的客户，可能再发出多次 SQL，形成常见的 N+1 查询。',
      pitfall: '实体属性访问不一定是纯内存操作；上下文关闭后访问尚未加载的关联可能失败，具体行为依实现而定。',
      prerequisites: ['data-access-jdbc', 'data-access-transaction', 'oop'], related: ['data-access-index', 'web-spring-transaction'],
      terms: ['ORM', 'JPA', 'Hibernate', 'N+1', '持久化上下文'], sources: [S.orm]
    },
    {
      id: 'web-spring', parentId: 'java-root', title: 'Web 与 Spring 应用',
      summary: '请求处理由协议、容器和应用对象协作完成。',
      explanation: '一次 Web 请求先有 HTTP 语义，再由服务器与 Servlet 容器交给应用。Spring 容器组织业务对象，Spring MVC 协调请求分发，事务等横切功能通过相应基础设施加入调用链。本分支以 Spring 6.x 的稳定概念和默认代理模式为基线。',
      example: '请求 → Servlet 容器 → DispatcherServlet → Controller → Service → 数据访问 → 响应。',
      pitfall: '同属 Spring 生态不代表职责相同；请求映射、对象创建与数据库事务是不同的处理环节。',
      prerequisites: ['oop', 'io'], related: ['data-access', 'concurrency'],
      terms: ['Spring MVC', 'Spring Framework'], sources: [S.mvc, S.ioc]
    },
    {
      id: 'web-spring-http', parentId: 'web-spring', title: 'HTTP 请求与响应',
      summary: '请求方法和响应状态共同表达交互语义。',
      explanation: 'HTTP 请求使用方法、目标地址、首部和可选内容表达操作，响应使用状态码、首部和可选内容反馈结果。方法有安全性和幂等性等语义，内容类型描述数据如何解释。理解协议有助于设计接口的缓存、错误处理和重试行为。',
      example: 'GET /orders/42 请求订单表示；找到时返回 200 与 JSON，资源不存在时可返回 404。',
      pitfall: '幂等指重复请求的预期效果相同，不要求每次响应完全一致；业务若违背方法语义，客户端重试可能出错。',
      prerequisites: ['web-spring'], related: ['web-spring-servlet', 'web-spring-mvc'],
      terms: ['HTTP', '幂等性', 'HTTP状态码', 'Content-Type'], sources: [S.http]
    },
    {
      id: 'web-spring-servlet', parentId: 'web-spring-http', title: 'Servlet 与容器',
      summary: '容器把网络请求适配为应用方法调用。',
      explanation: 'Servlet 容器负责创建和管理 Servlet，把请求与响应包装成对象后调用处理逻辑。HttpServlet 的 service 按 HTTP 方法分派到 doGet、doPost 等方法。同一个 Servlet 实例通常会服务多个并发请求，因此每次请求的数据应放在适当的局部或请求作用域。',
      example: 'doGet 中从 request 读取参数，通过 response 设置状态、内容类型并写出响应体。',
      pitfall: '把当前用户或请求参数存入 Servlet 的可变实例字段，可能造成不同请求之间的数据混用。',
      prerequisites: ['web-spring-http', 'concurrency-shared-state'], related: ['web-spring-mvc'],
      terms: ['Servlet', 'HttpServlet', 'Tomcat', 'Servlet生命周期'], sources: [S.servlet]
    },
    {
      id: 'web-spring-ioc', parentId: 'web-spring', title: 'IoC 容器与 Bean',
      summary: '容器依据配置管理应用对象及其协作关系。',
      explanation: '控制反转把对象的创建与协作安排交给外部容器。在 Spring 中，由容器创建、组装或管理的对象称为 Bean，ApplicationContext 提供这些对象及相关设施。配置描述需要哪些对象，容器解析依赖关系并按相应生命周期管理它们。',
      example: '通过 @Bean 声明一个 PaymentService，由容器准备其需要的 Repository 并交给调用方。',
      pitfall: '给类加注解但未纳入扫描或配置不一定产生 Bean；手动 new 的普通对象不会自动获得容器增强。',
      prerequisites: ['oop', 'web-spring'], related: ['web-spring-di', 'web-spring-bean-lifecycle'],
      terms: ['IoC', 'ApplicationContext', 'BeanFactory', 'Spring Bean'], sources: [S.ioc]
    },
    {
      id: 'web-spring-di', parentId: 'web-spring-ioc', title: '依赖注入与构造器',
      summary: '依赖注入让对象显式接收所需的协作者。',
      explanation: '依赖注入是实现控制反转的一种方式：对象声明所需依赖，由外部提供，而不是在内部查找或创建。构造器注入能让必需依赖在对象建立时就明确，并方便测试替换。多个候选 Bean 时，需要通过限定条件或主候选规则消除歧义。',
      example: 'class OrderService {\n  private final OrderRepository repo;\n  OrderService(OrderRepository repo) { this.repo = repo; }\n}',
      pitfall: '构造器循环依赖无法靠先创建其中一方自然解决，通常应重新划分职责或引入合适的协作边界。',
      prerequisites: ['web-spring-ioc', 'oop'], related: ['engineering-unit-tests'],
      terms: ['依赖注入', '构造器注入', 'Autowired', '循环依赖'], sources: [S.di]
    },
    {
      id: 'web-spring-bean-lifecycle', parentId: 'web-spring-ioc', title: 'Bean 生命周期',
      summary: '容器分阶段完成对象构建、初始化与销毁。',
      explanation: 'Bean 通常经历实例创建、依赖填充、初始化回调和可用阶段，后处理器可在相关阶段检查或包装对象。容器关闭时会对其负责管理的适用 Bean 执行销毁回调。初始化适合检查配置和准备资源，销毁适合释放连接或停止后台任务。',
      example: '用 @PostConstruct 校验必要配置，用 @PreDestroy 释放该 Bean 自己持有的资源。',
      pitfall: '不要依赖初始化回调中的自调用触发事务代理；prototype Bean 的完整销毁管理也不能默认交给容器。',
      prerequisites: ['web-spring-di'], related: ['web-spring-proxy', 'engineering-resource-boundaries'],
      terms: ['Bean生命周期', 'BeanPostProcessor', 'PostConstruct', 'PreDestroy'], sources: [S.lifecycle, S.transaction]
    },
    {
      id: 'web-spring-aop', parentId: 'web-spring', title: 'AOP 与横切关注点',
      summary: '切面把跨越多个业务方法的行为集中表达。',
      explanation: '日志、度量和事务边界往往横跨多个业务对象。AOP 用切点选择需要增强的方法调用，用通知描述前后或环绕行为。在 Spring 的常见代理模式下，调用先经过代理，再进入目标方法，因此理解增强发生在哪里比记住注解名字更关键。',
      example: '用环绕通知记录 Service 方法耗时，在 finally 中结束计时，确保异常路径也留下度量。',
      pitfall: '切点范围过大可能重复统计或改变大量调用；环绕通知忘记继续调用目标方法会改变业务行为。',
      prerequisites: ['web-spring-ioc'], related: ['web-spring-proxy', 'web-spring-transaction'],
      terms: ['AOP', '切面', '切点', '环绕通知'], sources: [S.proxy]
    },
    {
      id: 'web-spring-proxy', parentId: 'web-spring-aop', title: '代理机制与自调用',
      summary: '代理增强只作用于经过代理入口的调用。',
      explanation: 'Spring 6.x 常见代理机制包括基于接口的 JDK 动态代理和基于子类的类代理。外部调用代理时可执行拦截器，再转给目标对象；目标对象内部用 this 调用另一个方法通常绕过代理。类代理也受继承规则限制，不能覆盖 final 或 private 方法。',
      example: '外部调用 service.place() 可经过代理；place 内部执行 this.save() 不会再次通过外层代理入口。',
      pitfall: '不能把“所有非 public 方法都一定不能事务增强”当成 Spring 6.x 通则；应按代理类型及配置判断。',
      prerequisites: ['web-spring-aop', 'oop'], related: ['web-spring-transaction'],
      terms: ['JDK动态代理', 'CGLIB', '自调用', '代理对象'], sources: [S.proxy, S.transaction]
    },
    {
      id: 'web-spring-mvc', parentId: 'web-spring-servlet', title: 'Spring MVC 请求分发',
      summary: '前端控制器协调请求映射与结果转换。',
      explanation: 'DispatcherServlet 是 Spring MVC 的统一入口，借助处理器映射寻找 Controller，再通过适配器执行它。参数解析把请求数据转换为方法输入，结果处理则渲染视图或通过消息转换器写入响应。异常解析也属于这条请求处理链。',
      example: '@GetMapping("/hello")\n@ResponseBody\npublic String hello() { return "hello"; }',
      pitfall: '普通 Controller 返回字符串可能被解释为视图名；是否写入响应体取决于注解和返回值处理机制。',
      prerequisites: ['web-spring-servlet', 'web-spring-ioc'], related: ['web-spring-http', 'web-spring-boot-auto-config'],
      terms: ['DispatcherServlet', 'Spring MVC', 'HandlerMapping', '消息转换器'], sources: [S.mvc]
    },
    {
      id: 'web-spring-transaction', parentId: 'web-spring-aop', title: 'Spring 声明式事务',
      summary: '事务拦截器围绕业务调用管理提交与回滚。',
      explanation: '启用事务支持后，@Transactional 提供事务属性，拦截器借助事务管理器在方法调用边界加入、建立或结束事务。在默认代理模式中需要经代理调用。常见命令式事务与当前线程绑定，传播行为决定如何处理已有事务，异常规则决定提交还是回滚。',
      example: '@Transactional(rollbackFor = Exception.class)\npublic void transfer() throws Exception {\n  debit();\n  credit();\n}',
      pitfall: '默认通常对 RuntimeException 和 Error 回滚；受检异常需配置。自调用、吞掉异常或切换新线程都可能偏离预期边界。',
      prerequisites: ['data-access-transaction', 'web-spring-proxy'], related: ['concurrency-thread-local', 'data-access-isolation'],
      terms: ['Transactional', '事务传播', '事务失效', 'rollbackFor'], sources: [S.transaction]
    },
    {
      id: 'web-spring-boot-auto-config', parentId: 'web-spring', title: 'Spring Boot 自动配置',
      summary: '自动配置按已有环境补充常用应用设施。',
      explanation: 'Spring Boot 3.x 根据类路径、已有 Bean 和配置属性等条件决定启用哪些自动配置，从而减少重复的基础设施配置。它建立在 Spring 容器之上，许多配置在用户提供替代 Bean 后会退让。排查时可查看条件评估报告，确认匹配与未匹配原因。',
      example: '引入相应 JDBC 依赖并配置数据库后，符合条件时 Boot 可配置 DataSource；提供自己的 Bean 可接管该部分。',
      pitfall: '添加依赖可能改变配置条件；不能把自动配置理解为无条件创建所有组件，也不能只凭 starter 名称推断最终行为。',
      prerequisites: ['web-spring-ioc', 'web-spring-mvc'], related: ['engineering-maven-dependencies'],
      terms: ['Spring Boot', '自动配置', 'SpringBootApplication', '条件装配'], sources: [S.boot]
    },
    {
      id: 'engineering', parentId: 'java-root', title: '构建、测试与工程实践',
      summary: '工程实践让程序能够复现、验证和维护。',
      explanation: '程序能运行只是起点，还需要可重复的构建、能验证行为的测试以及便于定位问题的运行证据。构建工具管理依赖和产物，测试保护约定，日志与调试解释实际执行，资源边界控制生命周期。把这些习惯融入开发过程，修改才更可控。',
      example: '一次功能修改应能通过固定构建命令生成产物，并用测试与运行证据说明它满足了哪些行为。',
      pitfall: '只在个人 IDE 中运行成功，不能证明其他机器能解析同样的依赖或重现同样的结果。',
      prerequisites: ['language', 'oop'], related: ['jvm-diagnostics', 'web-spring'],
      terms: ['Maven', '单元测试', '日志框架'], sources: [S.mavenLifecycle, S.junit, S.logging]
    },
    {
      id: 'engineering-maven-dependencies', parentId: 'engineering', title: 'Maven 依赖与作用域',
      summary: '依赖坐标和作用域共同确定构建类路径。',
      explanation: 'Maven 用 groupId、artifactId 和 version 等坐标定位构件，并沿依赖关系引入传递依赖。scope 决定依赖在哪些阶段可用，冲突时按依赖仲裁规则选择版本。dependencyManagement 管理版本等默认信息，但通常不会单凭声明就引入依赖。',
      example: 'mvn dependency:tree\n// 查看某个库为何被引入、最终选中哪个版本。',
      pitfall: '直接依赖版本与传递依赖可能冲突；test 作用域不能满足生产运行所需的库。',
      prerequisites: ['engineering'], related: ['engineering-maven-lifecycle', 'web-spring-boot-auto-config'],
      terms: ['Maven依赖', '依赖冲突', 'dependencyManagement', '依赖传递'], sources: [S.mavenDeps]
    },
    {
      id: 'engineering-maven-lifecycle', parentId: 'engineering-maven-dependencies', title: 'Maven 生命周期与插件',
      summary: '生命周期组织阶段，插件执行具体构建工作。',
      explanation: 'Maven 把构建组织为 compile、test、package、verify、install 等阶段，插件目标绑定到阶段执行。调用一个阶段会依次执行同一生命周期中它之前的阶段。阶段规定何时发生，插件规定具体做什么，因此相同阶段在不同项目中可有不同的附加检查。',
      example: 'mvn verify\n// 运行到验证阶段；是否包含集成测试取决于项目的插件绑定。',
      pitfall: 'package 只说明构建走到打包阶段，不代表已执行所有集成检查；clean 属于另一条生命周期。',
      prerequisites: ['engineering-maven-dependencies'], related: ['engineering-unit-tests', 'engineering-integration-tests'],
      terms: ['Maven生命周期', 'mvn package', 'mvn install', 'mvn verify'], sources: [S.mavenLifecycle]
    },
    {
      id: 'engineering-unit-tests', parentId: 'engineering', title: '单元测试与行为断言',
      summary: '单元测试用明确输入验证小范围行为。',
      explanation: '单元测试聚焦一个可控单元的输入、输出与必要副作用，通常隔离网络、数据库和系统时间。测试通过准备数据、执行操作和断言结果表达行为约定。边界值和失败路径比重复实现细节更有价值，良好的依赖设计会让测试更简单。',
      example: '@Test\nvoid addsTwoNumbers() {\n  assertEquals(5, calculator.add(2, 3));\n}',
      pitfall: '过度断言内部调用顺序会让合理重构破坏测试；测试通过只说明覆盖到的行为符合断言。',
      prerequisites: ['engineering', 'oop'], related: ['web-spring-di', 'engineering-integration-tests'],
      terms: ['JUnit', '单元测试', 'Mockito', '断言'], sources: [S.junit]
    },
    {
      id: 'engineering-integration-tests', parentId: 'engineering-unit-tests', title: '集成测试与系统边界',
      summary: '集成测试验证多个组件连接后的真实行为。',
      explanation: '单个类正确不能保证配置、序列化、SQL 或事务协作正确。集成测试让多个实际组件共同运行，检查它们的边界契约，例如启动 Spring 上下文、访问测试数据库或执行请求分发。环境与数据需要可重建，并根据风险选择合适的测试范围。',
      example: '向测试接口提交订单，断言响应、数据库记录和失败时的回滚结果，覆盖从请求到持久化的协作。',
      pitfall: '测试事务自动回滚可能掩盖真实提交问题；内存数据库的 SQL 与隔离行为也不一定等同生产数据库。',
      prerequisites: ['engineering-unit-tests', 'data-access-transaction'], related: ['web-spring-mvc', 'engineering-maven-lifecycle'],
      terms: ['集成测试', 'SpringBootTest', 'MockMvc', 'Testcontainers'], sources: [S.integration]
    },
    {
      id: 'engineering-logging', parentId: 'engineering', title: '日志门面与诊断上下文',
      summary: '有效日志把事件与排查所需上下文关联。',
      explanation: 'SLF4J 等日志门面把应用中的日志调用与具体日志实现分开，后者决定过滤、格式和输出位置。日志应记录有诊断意义的事件，并携带请求标识、对象标识与失败原因。参数化消息减少不必要的字符串拼接，异常对象则保留调用栈。',
      example: 'logger.info("Order {} created", orderId);\nlogger.error("Order {} failed", orderId, exception);',
      pitfall: '参数化日志不会阻止方法参数提前求值；不要记录密码或令牌，也不要在多层重复打印同一异常制造噪声。',
      prerequisites: ['engineering'], related: ['engineering-debugging', 'concurrency-thread-local'],
      terms: ['SLF4J', 'Logback', '日志级别', 'MDC'], sources: [S.logging]
    },
    {
      id: 'engineering-resource-boundaries', parentId: 'engineering', title: '资源所有权与释放边界',
      summary: '资源由明确的拥有者负责结束其生命周期。',
      explanation: '文件、连接和执行器可能占用堆以外的有限资源，不能把及时释放交给垃圾回收。应先确定谁创建、谁借用、谁关闭，再用作用域和 finally 保证异常路径也清理。支持 AutoCloseable 的资源可用 try-with-resources，按声明的逆序关闭。',
      example: 'try (BufferedReader reader = Files.newBufferedReader(path)) {\n  System.out.println(reader.readLine());\n}',
      pitfall: '借用容器管理的共享资源时不应擅自关闭整个资源池；Java 17 的线程池需显式安排关闭流程。',
      prerequisites: ['engineering', 'io'], related: ['data-access-connection-pool', 'concurrency-executor-lifecycle'],
      terms: ['try-with-resources', 'AutoCloseable', '资源泄漏'], sources: [S.closeable, S.service]
    },
    {
      id: 'engineering-debugging', parentId: 'engineering', title: '调试与证据驱动排错',
      summary: '调试把观察到的错误缩小到可验证原因。',
      explanation: '排错先固定复现输入和环境，再比较期望行为与实际结果。断点可观察变量、调用栈和分支，异常堆栈帮助找到失败传播路径，日志与剖析补充运行证据。每次只验证一个假设，修复后用原始复现步骤确认问题消失并保护相关行为。',
      example: '出现空指针时，从失败行确认哪个引用为 null，再沿其赋值路径找缺失条件，而不是直接包一层 catch。',
      pitfall: '暂停线程会改变并发时序，断点下问题消失不证明已修复；只压制异常可能把根因推迟到更难定位的位置。',
      prerequisites: ['engineering-logging'], related: ['jvm-diagnostics', 'jvm-profiling', 'engineering-unit-tests'],
      terms: ['断点调试', '异常堆栈', '根因分析', 'jdb'], sources: [S.debugger, S.jfr]
    }
  ];
});
