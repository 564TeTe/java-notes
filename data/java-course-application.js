(function (root, factory) {
  'use strict';
  var courses = factory();
  if (typeof module === 'object' && module.exports) module.exports = courses;
  else (root.JAVA_COURSE_PARTS = root.JAVA_COURSE_PARTS || []).push(courses);
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  // Original teaching examples. Framework fragments state their required context.
  var spring = 'https://docs.spring.io/spring-framework/reference/';
  var mysql = 'https://dev.mysql.com/doc/refman/8.4/en/';
  var redis = 'https://redis.io/docs/latest/';
  function ref(title, url) { return { title: title, url: url }; }
  function link(id, why) { return { id: id, why: why }; }
  function step(title, text) { return { title: title, text: text }; }
  function qa(question, answer) { return { question: question, answer: answer }; }
  return [
    {
      id: 'course-spring-ioc', topicId: 'spring', chapter: '对象准备与请求执行', title: 'IoC 与依赖注入：先把对象接好，再处理请求',
      intro: '把 UserService 注入 UserController，并不意味着已经查过用户。先分清应用启动时准备的对象与每次请求携带的数据，才能读懂 Spring 项目。',
      explanation: [
        '普通 Java 程序中，调用者可以自己 new UserService，再把 Mapper 传进去。IoC 把这些对象的创建、装配和生命周期管理交给容器；DI 是容器把依赖引用传给对象的具体方式。依赖倒置则是代码设计原则：业务依赖 UserRepository 这样的抽象，而不是固定某个数据库实现，三者处于不同层面。',
        '容器先读取组件扫描、@Bean 等产生的 BeanDefinition，再按依赖关系创建对象。构造器接收到的是可调用的协作者引用，可能是普通对象，也可能是事务或 Mapper 代理。此时还没有 HTTP 路径中的 5。到请求到达后，Controller 的方法参数才得到 5，并沿已经建立的引用链传递。',
        '构造器注入让必需依赖显式化，final 字段可以避免之后被替换；单构造器在常用 Spring 配置下无需再写 @Autowired。多个同类型候选要通过 @Qualifier、@Primary 等明确选择。容器自动装配解决的是“给谁哪个对象”，不是替业务选择 SQL，也不会把所有 new 出来的对象自动变成 Bean。'
      ],
      flow: [step('登记定义', '扫描到 Controller、Service 和 Mapper 的注册配置，保存对象名称、类型、作用域等元数据。'), step('解析依赖', '创建 Controller 前先取得 UserService；创建 Service 前先取得 UserMapper 代理。'), step('完成装配', '通过构造器把引用传入并完成初始化，需要增强的 Bean 可能以代理形式暴露。'), step('接受调用', 'GET /users/5 到达后，MVC 调用已存在的 Controller；5 是方法参数，而不是注入的 Bean。')],
      example: { language: 'java', code: '// Spring 项目片段：UserMapper 已注册为 Mapper Bean\n@Service\nclass UserService {\n  private final UserMapper mapper;\n  UserService(UserMapper mapper) { this.mapper = mapper; }\n  User find(long id) { return mapper.findById(id); }\n}\n// 在单元测试中同样可直接传入替身：\n// UserService service = new UserService(fakeMapper);', output: '启动阶段创建并连接对象；调用 service.find(5L) 时才执行 findById(5L)。仅完成依赖注入不会查询 users 表。', explanation: 'mapper 字段保存的是可执行查询的对象引用，id 是一次调用的值。测试可以替换依赖而不启动整个容器，说明 DI 本质上仍是普通 Java 引用传递。' },
      boundaries: ['默认单例是每个容器、每个 Bean 定义一个实例，不是整个 JVM 永远只有一个该类型对象。', '不要把请求用户 ID 放在单例 Service 的可变字段中；多个请求线程可能共享同一实例。', '构造器循环依赖暴露出对象职责纠缠；优先拆分职责或引入协调者，不把允许循环引用当设计方案。'],
      answer: '我会先区分准备对象和执行请求。Spring 启动时登记 Bean 定义，创建实例并解析依赖，DI 把协作者引用传进去。这样 Controller 可以调用 Service，Service 可以调用 Mapper。请求到达时，路径里的用户 ID 才进入方法参数，沿引用链调用，注入本身不会触发这个查询。构造器注入能明确必需依赖，也方便直接传替身做测试。单例只是共享实例，线程安全还需要业务避免共享可变状态。',
      followUps: [qa('Spring 容器里只有对象吗？', '不只有对象。BeanDefinition 保存创建规则，单例注册表保存已创建实例，容器还维护后处理器、作用域、类型与依赖等管理信息。'), qa('UserMapper 是接口，怎么注入？', 'MyBatis-Spring 注册用于创建 Mapper 的 FactoryBean，容器得到的是实现接口的代理。接口是调用约定，代理把方法调用转换成映射语句执行。')],
      checks: [qa('启动成功后没有任何请求，findById 会自动执行吗？', '不会，除非另有初始化、定时任务等代码主动调用它。Bean 的创建和查询方法的调用是两件事。'), qa('两个同类型 Bean 都能注入时应该怎么处理？', '明确配置 @Qualifier 或首选 Bean，而不是依赖不清晰的偶然匹配。')],
      prerequisites: [link('web-spring-di', '先认识构造器和对象引用')], related: [link('course-spring-mvc', '观察请求参数如何进入已装配对象'), link('course-spring-mapper', '解释接口代理从哪里来')],
      conceptIds: ['web-spring-ioc', 'web-spring-di'], readingIds: ['xl-spring-6d4acaca43367b97', 'xl-spring-a7b49e6e7dce7e77', 'xl-spring-a9219a8ac7735c67', 'xl-spring-177f3998ca1441b7'], sourceChapters: ['Spring'],
      sources: [ref('Spring：依赖注入', spring + 'core/beans/dependencies/factory-collaborators.html'), ref('MyBatis-Spring：注入 Mapper', 'https://mybatis.org/spring/mappers.html')]
    },
    {
      id: 'course-spring-lifecycle', topicId: 'spring', chapter: '对象准备与请求执行', title: 'Bean 生命周期、作用域与循环依赖',
      intro: '一个连接池要在提供服务前初始化，在应用关闭时释放；一个请求用户对象却不应全局共享。生命周期与作用域共同决定对象何时可用、由谁回收。',
      explanation: [
        'BeanDefinition 描述“怎样创建”，Bean 实例才是“创建出来的东西”。BeanFactoryPostProcessor 处理定义层，例如修改属性配置；BeanPostProcessor 围绕实例初始化工作，可以返回包装后的代理。把这两个扩展点混为一谈，会误以为读到定义时对象已经可调用。',
        '一般单例经历实例化、依赖填充、初始化前处理、初始化回调、初始化后处理，之后交给业务使用，容器正常关闭时执行销毁回调。singleton 在容器中复用，prototype 每次向容器获取时创建；单例构造时只注入一次 prototype 引用，并不会每次调用方法自动换新对象。要动态获取可使用 ObjectProvider。',
        '某些单例的 setter/字段循环依赖可以借助提前暴露引用解决。所谓三级缓存分别涉及完整对象、提前引用和创建提前引用的工厂；工厂让后处理器在需要时提供恰当的早期代理。但构造器循环依赖在实例都无法创建时就卡住，prototype 也没有同样的自动解法。是否允许循环依赖还取决于应用配置，应把“机制能处理部分情况”和“设计值得采用”分开。'
      ],
      flow: [step('先读定义', '定义后处理器修改创建规则，此时不应把所有业务 Bean 提前实例化。'), step('创建与注入', '调用构造器并填充依赖；必需依赖缺失应尽早失败。'), step('初始化与包装', '@PostConstruct 等回调完成对象准备，后处理器可能暴露代理。'), step('按作用域使用和销毁', '单例复用到容器关闭；prototype 的后续清理由获取方负责，不能假定容器回调其销毁。')],
      example: { language: 'java', code: '// Spring 配置片段；Ticket 为普通类\n@Bean @Scope("prototype")\nTicket ticket() { return new Ticket(); }\n\n@Component\nclass TicketFactory {\n  private final ObjectProvider<Ticket> tickets;\n  TicketFactory(ObjectProvider<Ticket> tickets) { this.tickets = tickets; }\n  Ticket next() { return tickets.getObject(); }\n}', output: '在 prototype 配置下，连续两次 next() 得到不同 Ticket 实例。若直接在单例构造器中注入 Ticket，则该单例一直持有当时那一个 Ticket。', explanation: '创建频率由向容器获取对象的时机决定。Provider 延迟了获取动作，单纯注入 prototype 类型不会重写 Java 字段的使用规则。' },
      boundaries: ['@PostConstruct 不是可靠的外部代理调用入口，不应依赖初始化期间自调用触发事务增强。', '生命周期顺序是教学主线；FactoryBean、作用域代理、延迟初始化等会增加分支。', '销毁回调依赖正常关闭流程，进程被强制终止时必须依靠可恢复的外部资源协议。'],
      answer: '我会先分定义和实例：BeanFactoryPostProcessor 改定义，BeanPostProcessor 处理实例并可能生成代理。普通 Bean 创建后注入依赖，执行初始化，再交给调用方，单例在容器关闭时销毁。作用域决定复用范围，prototype 注入单例时只获取一次，动态创建要使用 Provider 等机制。循环依赖的提前引用只解决部分单例装配场景，不能解决构造器循环，所以我会先调整职责，而不是先打开循环依赖开关。',
      followUps: [qa('FactoryBean 和 BeanFactory 有什么区别？', 'BeanFactory 是容器接口；FactoryBean 是交给容器管理的特殊工厂对象，其 getObject 提供另一种产品对象，Mapper 工厂就是典型应用。'), qa('单例中有 int count++ 为什么不安全？', '多个请求线程共享这个字段，读改写可能交错。生命周期管理不自动给字段加锁；应消除请求状态或选择正确并发控制。')],
      checks: [qa('修改 BeanDefinition 和给 Bean 包事务代理，分别属于哪个扩展层？', '前者是定义后处理层，后者通常是实例后处理层。')],
      prerequisites: [link('course-spring-ioc', '先理解定义与依赖装配')], related: [link('course-spring-aop', '理解初始化后可能拿到代理'), link('concurrency-shared-state', '检查单例中的共享状态')],
      conceptIds: ['web-spring-bean-lifecycle', 'web-spring-ioc'], readingIds: ['xl-spring-bc44119982080c91', 'xl-spring-7a6a7e45d0fab73b', 'xl-spring-3818882853532cbc', 'xl-spring-ee0786c1a5b1c2b0', 'xl-spring-a33cbde75810dd5a'], sourceChapters: ['Spring'],
      sources: [ref('Spring：Bean 作用域', spring + 'core/beans/factory-scopes.html'), ref('Spring：容器扩展点', spring + 'core/beans/factory-extension.html')]
    },
    {
      id: 'course-spring-aop', topicId: 'spring', chapter: '对象准备与请求执行', title: 'AOP：代理包住哪一次方法调用',
      intro: '同一个 save() 方法，从另一个 Bean 调用有事务，从 this 调用却没有新事务。决定增强是否执行的关键，是调用有没有经过代理入口。',
      explanation: [
        '日志、计时、权限、事务等逻辑会横跨多个业务方法。Spring AOP 把这部分逻辑组成拦截器链，调用者先进入代理，代理执行前置或环绕逻辑，再调用目标对象，最后处理返回值和异常。切点负责选择方法，通知负责执行额外行为，目标方法仍负责业务。',
        'JDK 动态代理通过接口暴露方法，基于类的代理通过生成子类工作。二者都会影响调用边界：基于类的代理不能通过覆盖 final 方法来增强，private 方法也不能按普通可覆盖方法处理。不要只看类上有没有注解，要看实际暴露给调用者的是哪个对象，以及该方法能否被当前代理方式拦截。',
        '目标对象内部 this.save() 直接调用自身方法，不会重新绕回外面的代理，因此不会触发 save 上新增的事务或异步增强。但若外层本来已经开启事务，内部普通调用仍可能使用同一线程上的现有事务；“注解没被拦截”与“此刻完全没有事务”是不同结论。常用修复是把需要独立边界的方法拆到另一个 Bean。'
      ],
      flow: [step('取得代理引用', '调用者注入到的是容器暴露的对象，可能与原始目标对象不是同一个实例。'), step('匹配方法与切点', '代理检查本次方法调用需要哪些拦截器。'), step('围绕目标执行', '事务、计时等环绕逻辑执行 proceed，目标方法返回或抛出异常。'), step('完成增强', '提交或回滚、记录耗时，再把结果交还调用者；内部 this 调用不会自动再走这一圈。')],
      example: { language: 'java', code: '// Spring 项目示意；已启用事务管理\n@Service\nclass ImportService {\n  public void importAll() { this.saveOne(); }\n  @Transactional\n  public void saveOne() { /* mapper.insert(...) */ }\n}\n// 由其他 Bean 调用 importService.importAll()\n// 与由其他 Bean 直接调用 importService.saveOne() 不同。', output: '默认代理模式下，importAll 内部的 this.saveOne() 不因 saveOne 的注解新建事务；外部经代理调用 saveOne() 才能触发该事务拦截器。', explanation: '这个例子不声称 importAll 一定没有任何事务；调用它的上层可能已开启事务。观察点是 saveOne 上的事务属性有没有在该调用处被应用。' },
      boundaries: ['AspectJ 编织与 Spring 默认代理模式不同，不能把默认自调用结论不加条件地推广给所有 AOP 实现。', '不要靠强制类型转换猜代理类型，注入接口或明确公开契约更稳妥。', '环绕通知吞掉异常会改变上层事务与错误处理行为，记录完应按契约继续传播。'],
      answer: 'Spring AOP 的核心是代理拦截调用：调用方进入代理，执行匹配的通知链，随后执行目标方法并处理结果。JDK 代理基于接口，类代理依靠子类，因此 final、private 等情况受限制。排查增强失效时，我先看对象是否由容器管理、调用是否从代理进入。this 自调用绕开代理，所以内部方法上的新增事务属性不生效，但它仍可能运行在外层已经建立的事务中。',
      followUps: [qa('静态代理也能实现类似 AOP 的效果吗？', '可以手写包装对象在调用前后加逻辑；动态代理与框架主要减少大量重复包装代码，并提供可配置的切点和通知链。'), qa('怎样证明确实经过代理？', '结合容器取得的对象类型、事务状态日志和调用栈观察；仅凭源代码注解不能证明某次运行经过增强。')],
      checks: [qa('外层有 REQUIRED 事务，内部 this 调用的 REQUIRES_NEW 会开新事务吗？', '默认代理模式下不会应用内部的 REQUIRES_NEW，但内部数据库操作通常仍参加外层事务。')],
      prerequisites: [link('course-spring-ioc', '理解容器暴露的对象引用')], related: [link('course-spring-transaction', '把代理边界落实到提交回滚'), link('course-spring-async', '异步也依赖代理入口')],
      conceptIds: ['web-spring-aop', 'web-spring-proxy'], readingIds: ['xl-spring-55e2648171f5f6c2', 'xl-spring-62b8256ea984518f', 'xl-spring-c55043ee6273a1ed', 'xl-spring-067014d7d43650c6'], sourceChapters: ['Spring'],
      sources: [ref('Spring：代理机制与自调用', spring + 'core/aop/proxying.html')]
    },
    {
      id: 'course-spring-mvc', topicId: 'spring', chapter: '对象准备与请求执行', title: '跟踪 /users/5：参数怎样进入，User 怎样成为 JSON',
      intro: '用同一个数字 5 走完 HTTP、Controller、Service、Mapper、SQL 和响应链路，比背一串组件名更能说明 Spring MVC 做了什么。',
      explanation: [
        '浏览器发送 GET /users/5，Servlet 容器接收请求并调用 DispatcherServlet。HandlerMapping 找到路径和方法匹配的处理器，HandlerAdapter 负责以适合的方式调用它。参数解析器依据 @PathVariable 把路径文本“5”转换成 long 5；@RequestParam 通常取查询或表单参数，@RequestBody 则通过消息转换器读取请求体，三者不是三种依赖注入。',
        'Controller 调用 service.find(5)，Service 决定业务规则，Mapper 代理把 findById(5) 对应到 SQL 并绑定参数。数据库返回一行后，MyBatis 按映射构造 User 数据对象。Mapper 代理是负责执行方法的长期协作者，User 是这次查询产生的数据，不能把两者理解成同一个对象。',
        '@RestController 的返回值通常经 HttpMessageConverter 写入响应体；在配置 Jackson 等转换器后，User 被序列化为 JSON。查单个资源不存在时，可以明确返回 404；查用户列表没有匹配项时通常返回 200 和 []。Java 方法返回 null 本身不等于已经设计好了 404 契约，必须让控制器或统一异常处理明确表达。'
      ],
      flow: [step('匹配请求', 'GET /users/5 → DispatcherServlet → HandlerMapping 找到 get(long id)。'), step('解析与校验', '@PathVariable("id") 解析字符串并转换为 5L，非法类型在调用业务前就可能形成 400。'), step('调用业务和数据访问', 'Controller → Service → UserMapper.findById(5L) → SELECT id,name FROM users WHERE id=?。'), step('装配返回值', 'ResultSet 的 id=5、name=Lin 被映射成 User；无记录得到约定的空结果。'), step('形成 HTTP 响应', '存在则转换为 JSON 并返回 200；不存在经 ResponseEntity 返回 404；异常按统一契约转换。')],
      example: { language: 'java', code: '// Spring MVC 项目片段；service 已由构造器注入\n@GetMapping("/users/{id}")\nResponseEntity<User> get(@PathVariable("id") long id) {\n  User user = service.find(id);\n  return user == null\n      ? ResponseEntity.notFound().build()\n      : ResponseEntity.ok(user);\n}\n// 数据层示意：SELECT id, name FROM users WHERE id = ?\n// 第 1 个绑定参数 = 5L', output: '已有 id=5,name=Lin 且 JSON 转换器配置正常时：HTTP 200，响应体 {"id":5,"name":"Lin"}。不存在 id=5 时：HTTP 404，空响应体。', explanation: '路径值、Java 参数、JDBC 绑定值属于同一条数据传递链。返回对象在 Web 层才转换为响应格式，Mapper 不负责产生 HTTP 状态码。' },
      boundaries: ['示例省略 User 定义、依赖、扫描和数据库配置，是分层片段，不是独立可运行的 Java 文件。', '@Controller 返回 String 默认可能被解释为视图名；@ResponseBody 或 @RestController 才明确按响应体处理。', 'Filter 属于 Servlet 链，Interceptor 属于 MVC 处理器链；不要把 MVC 拦截器当成覆盖所有请求的安全边界。'],
      answer: '我会跟一个具体请求解释。GET /users/5 先由 Servlet 容器交给 DispatcherServlet，Mapping 找方法，Adapter 配合参数解析器把路径中的 5 转成 long。Controller 调 Service，Service 调 Mapper 代理，代理执行带绑定参数的 SQL。结果集映射成 User 后沿调用栈返回，消息转换器再把它写成 JSON。Mapper 代理是执行器，User 是数据。不存在的单个资源由接口契约返回 404，空列表通常是 200 加空数组。',
      followUps: [qa('统一异常处理应该负责什么？', '用 @RestControllerAdvice 和 @ExceptionHandler 把领域异常、参数错误等映射成一致的状态码与响应体；不应吞掉日志证据或把所有异常都返回 200。'), qa('拿到 /users/abc 会进入 SQL 吗？', '当 id 声明为 long 且默认转换失败时，通常在参数解析阶段就失败，业务方法不执行，错误由 MVC 异常处理转为客户端错误。')],
      checks: [qa('UserMapper 能直接作为查询的 User 结果返回吗？', '不能。前者是代理协作者，后者是结果集映射出的领域或传输对象。'), qa('注入 UserService 时，路径中的 5 在哪里？', '那时还没有本次请求参数。5 在每次请求处理时由参数解析器取得。')],
      prerequisites: [link('course-spring-ioc', '已有对象引用链是请求执行的基础')], related: [link('course-spring-mapper', '继续拆解 Mapper 和 SQL 的对应关系')],
      conceptIds: ['web-spring-mvc', 'web-spring-servlet', 'web-spring-http'], readingIds: ['xl-spring-bf50223ad7fda36d', 'xl-spring-6ac13677b1fac240', 'xl-spring-df1923a5e3911d8e', 'xl-spring-5261e366613ba4f3', 'xl-spring-9e11e2a7dd8a1056'], sourceChapters: ['SpringMVC'],
      sources: [ref('Spring MVC：DispatcherServlet', spring + 'web/webmvc/mvc-servlet.html'), ref('Spring MVC：ResponseBody', spring + 'web/webmvc/mvc-controller/ann-methods/responsebody.html')]
    },
    {
      id: 'course-spring-mapper', topicId: 'spring', chapter: 'SQL 映射与事务边界', title: 'Mapper 代理、namespace.id 与安全参数绑定',
      intro: '接口里只有 User findById(long id)，没有方法体，为什么仍能执行 SQL？答案分为启动时登记映射与运行时解释调用两段。',
      explanation: [
        '启动时 MyBatis 读取 XML 或注解，构造 MappedStatement 等配置；namespace 通常对应 Mapper 接口全限定名，statement 的 id 对应方法名。MyBatis-Spring 扫描 Mapper 并注册工厂，让 Service 注入可调用的代理。注册成功只表示调用通道准备好，不表示每条 SQL 已经执行或业务数据已缓存。',
        '运行时代理捕获接口方法与实参，解析对应的 statement，把 @Param 标注的名称组织为参数映射，交给 SqlSession 和执行器。#{id} 产生 JDBC 占位符并按类型绑定值，所以用户提供的字符串作为数据处理。${column} 则直接拼接 SQL 文本，列名等语法位置确实不能靠普通值占位符替换，但必须由服务端白名单决定，不能接收任意输入。',
        '结果处理是另一条规则：resultType 适合简单自动映射，resultMap 能显式指定列与属性、关联和集合。返回 List<User> 时 XML 的 resultType 仍是单个元素类型 User。单对象查询多行通常报错，无行通常返回 null；更新方法返回 int 表示影响行数，不是 User、更不是事务提交证明。'
      ],
      flow: [step('登记语句', '将 demo.UserMapper.findById 与 SQL、参数和结果映射保存到配置。'), step('登记并注入代理', 'Mapper 扫描创建可实现接口的代理，Service 持有它。'), step('解释调用', 'findById(5L) 产生名为 id 的参数，通过 namespace.id 找到 statement。'), step('绑定并执行', '#{id} 变为 ?，TypeHandler 把 5L 绑定到 PreparedStatement，数据库执行 SQL。'), step('映射结果', 'ResultSet 的列值构成 User，返回给 Service；代理本身继续留在容器中复用。')],
      example: { language: 'java / XML', code: '// 接口与 XML 片段；假设已配置 Mapper 扫描和数据源\npackage demo;\ninterface UserMapper {\n  User findById(@Param("id") long id);\n}\n\n<mapper namespace="demo.UserMapper">\n  <select id="findById" resultType="demo.User">\n    SELECT id, user_name AS name FROM users WHERE id = #{id}\n  </select>\n</mapper>', output: '调用 findById(5L) 时，逻辑 SQL 为 SELECT id, user_name AS name FROM users WHERE id = ?，参数为 5。列别名 name 对应 User 的 name 属性。', explanation: '这是接口与 XML 的并列展示，不是能编译成一个文件的源码。改 namespace 或 id 会破坏语句定位，改 @Param 名称而不改 #{id} 会破坏参数解析；能找到代理不代表映射配置必然正确。' },
      boundaries: ['数据库预编译是否在服务端完成受 JDBC 驱动设置影响；参数化绑定的语义不能简单等同于服务器一定缓存了执行计划。', '动态 SQL 的条件与集合必须覆盖空输入场景，尤其 UPDATE/DELETE 要防止遗漏 WHERE。', 'MyBatis-Plus 提供常见 CRUD 等便利，仍然需要检查最终 SQL、条件与事务，不会自动证明业务正确。'],
      answer: 'Mapper 接口靠代理执行。启动时先解析 SQL 映射并注册 Mapper，运行时代理再根据接口方法找到 namespace 加 id 对应的 MappedStatement，将实参交给执行器。@Param 明确参数名称，#{} 生成占位符并绑定值，${} 直接拼接文本，只有经过白名单校验的语法片段才适合使用。结果集通过 resultType 或 resultMap 映射成数据对象。代理、SQL 元数据和每次查询返回的 User 是三个不同角色。',
      followUps: [qa('为什么 ORDER BY #{column} 通常不能选列？', '占位符表示一个值，不是 SQL 标识符。应把外部排序选项映射到服务端预定义列名和方向，再生成合法 SQL。'), qa('更新用户时返回 0，应该怎样解释？', '结合语句条件和 JDBC 行数语义判断：可能用户不存在、版本条件冲突，也可能设置为原值且配置返回实际改变行数。不能无条件宣告成功。')],
      checks: [qa('XML namespace 写成其他接口，Mapper 注入成功就够了吗？', '不够。运行时可能找不到对应 statement，要核对接口全限定名、方法名、XML 加载位置。')],
      prerequisites: [link('course-spring-mvc', '已经看到完整请求链路')], related: [link('data-access-prepared-statement', '进一步理解值与 SQL 文本的区别'), link('course-spring-transaction', '影响行数后还要判断提交结果')],
      conceptIds: ['data-access-jdbc', 'data-access-prepared-statement', 'data-access-orm'], readingIds: ['xl-spring-ce7b922a2ba7e2f2', 'xl-spring-0d14ac47cd09d69a', 'xl-spring-bee89a3e61593fa4', 'xl-spring-f0e480ae942ab1b9'], sourceChapters: ['Mybatis'],
      sources: [ref('MyBatis：SQL 映射、参数和结果', 'https://mybatis.org/mybatis-3/sqlmap-xml.html'), ref('MyBatis：Java API 与 Mapper', 'https://mybatis.org/mybatis-3/java-api.html'), ref('MyBatis-Spring：Mapper 注册', 'https://mybatis.org/spring/mappers.html')]
    },
    {
      id: 'course-spring-mapper-cache', topicId: 'spring', chapter: 'SQL 映射与事务边界', title: 'MyBatis 缓存：会话复用与 Redis 不是一回事',
      intro: '同一个方法第二次查询没有发 SQL，可能是 MyBatis 本地缓存；多个服务节点都命中用户缓存，才可能是 Redis。先定位缓存的所有者，再讨论失效。',
      explanation: [
        'MyBatis 一级缓存属于 SqlSession 的本地缓存，默认会话作用域下，相同语句、参数等组成的缓存键可复用结果。更新、提交、回滚和关闭等操作会按规则清理本地缓存。它既减少重复查询，也参与处理循环关联；返回对象可能被复用，因此修改查询结果对象会影响同一会话后续读取的观察。',
        '二级缓存要显式配置，通常按 Mapper namespace 组织，可跨 SqlSession 复用，并在会话提交等边界协调写入和失效。这不是按数据库表自动追踪所有变更：另一个 namespace、其他应用或手工 SQL 改表，都可能不在该缓存的失效路径里。需要理解更新发生在哪里，而不是看到“二级”就认为更一致。',
        'Redis 是独立进程的数据服务，键命名、序列化、TTL、跨实例共享与失效策略由应用设计。MyBatis-Spring 的 SqlSessionTemplate 会把调用关联到事务中的 SqlSession；没有同一事务时，不能假定两次 Mapper 调用一定共享同一个一级缓存。排查重复查询或旧数据，应同时记录 SQL、事务边界和 Redis 命中情况。'
      ],
      flow: [step('明确范围', '先问是同一 SqlSession、同一 namespace，还是多个应用共享的 Redis。'), step('形成查询键', 'MyBatis 根据语句和参数等查找本地缓存，未命中才继续查询或查二级缓存。'), step('发生修改', '检查修改由哪个会话、哪个 Mapper、哪个应用执行，确认哪些缓存能感知。'), step('验证失效', '清理或关闭会话后重查并观察 SQL；Redis 则按其独立键与 TTL 验证。')],
      example: { language: 'java', code: '// 原生 MyBatis 片段；factory 已初始化，一级缓存为默认 SESSION\ntry (SqlSession session = factory.openSession()) {\n  UserMapper m = session.getMapper(UserMapper.class);\n  User first = m.findById(5L);\n  User second = m.findById(5L);\n  session.clearCache();\n  User third = m.findById(5L);\n}', output: '在未配置二级缓存且期间无修改的假设下，first 查询发 SQL，second 通常复用本地结果；clearCache 后 third 再发 SQL。这里完全不需要 Redis。', explanation: '用明确的 SqlSession 寿命控制变量，避免把 HTTP 请求次数直接当作一级缓存的生存期。观察 SQL 次数比猜测“缓存一定生效”更可靠。' },
      boundaries: ['示例仅演示查询缓存，不将缓存命中视为数据库隔离级别的替代品。', '原生 SqlSession 不是可让多个请求线程随意共享的线程安全会话；Spring 集成应使用其管理的模板或 Mapper。', '跨表关联与多 namespace 更新使二级缓存失效复杂，启用前要有明确所有权与一致性要求。'],
      answer: 'MyBatis 一级缓存是 SqlSession 本地缓存，二级缓存通常按 namespace 配置并跨会话共享；它们的失效依赖 MyBatis 能观察到的操作。Redis 是独立共享缓存，TTL、键与失效由应用设计，所以不能把它叫成 MyBatis 的下一层就认为语义相同。Spring 中 SqlSession 又与事务绑定，判断是否复用要看真实事务边界。遇到旧数据我会定位命中的缓存层，再追踪所有修改路径是否触发失效。',
      followUps: [qa('别人用 JDBC 更新了同一张表，MyBatis 二级缓存必然失效吗？', '不必然。它不会天然监听所有数据库写入，必须设计跨入口失效或选择不缓存该查询。'), qa('为什么返回的 User 不应随意改字段？', '同一会话可能复用本地缓存里的对象；改字段可能使之后读取看到没有落库的本地变更。可使用不可变 DTO 或明确复制与更新流程。')],
      checks: [qa('一次请求查两次就一定只发一次 SQL 吗？', '不一定，要确认是否同一 SqlSession、缓存作用域、参数以及中间是否清理缓存。')],
      prerequisites: [link('course-spring-mapper', '先理解会话与映射执行')], related: [link('course-redis-cache-aside', '学习独立 Redis 缓存的一致性协议')],
      conceptIds: ['data-access-orm', 'data-access-transaction'], readingIds: ['xl-spring-711c39138646545e', 'xl-spring-3197093a6eed3788', 'xl-redis-84438eb73eb8e81c'], sourceChapters: ['Mybatis'],
      sources: [ref('MyBatis：本地缓存与 SqlSession', 'https://mybatis.org/mybatis-3/java-api.html'), ref('MyBatis：二级缓存配置', 'https://mybatis.org/mybatis-3/sqlmap-xml.html#cache'), ref('MyBatis-Spring：事务', 'https://mybatis.org/spring/transactions.html')]
    },
    {
      id: 'course-spring-transaction', topicId: 'spring', chapter: 'SQL 映射与事务边界', title: 'UPDATE 返回 1 之后，事务才来到提交边界',
      intro: '扣库存 SQL 返回 1，随后创建订单失败，库存应恢复。若把 SQL 成功等同于业务成功，就解释不了为什么数据库最终没有变化。',
      explanation: [
        '声明式事务在业务方法外围放置事务拦截器。外部调用进入代理时，事务管理器根据传播属性获取或创建事务，把数据库连接等资源绑定到当前执行上下文；Mapper 在同一数据源和正确集成下使用该事务的连接。方法中的多条 SQL 因而属于一个提交单元。',
        'UPDATE 返回影响行数，说明这条语句完成了相应修改，并不意味着外层事务已经提交。方法后续可能抛异常、被标记 rollback-only，提交本身也可能失败。代理完成事务边界后，调用者才能获得正常返回；如果请求发送响应前连接断开，客户端还可能不知道已经提交，这又是另一层不确定性。',
        '默认配置下 RuntimeException 和 Error 通常触发回滚，检查型异常需要按业务明确 rollbackFor 等规则。若业务把异常 catch 后当正常结果返回，拦截器可能看不到失败；但参与的内部事务也可能已标记 rollback-only，最终仍回滚。合理做法是检查影响行数，把业务失败表达成明确异常或状态，并在代理外部按契约处理。'
      ],
      flow: [step('代理建立事务', '外部调用 OrderService.place，事务管理器准备同一数据源连接。'), step('执行条件更新', '扣库存 UPDATE 返回 1；返回 0 时抛售罄异常，不继续创建订单。'), step('完成业务写入', '插入订单；若违反约束或其他错误则向事务边界传播。'), step('提交或回滚', '正常且未标记回滚才尝试 commit，失败则异常返回；任一步业务失败可 rollback。'), step('回复客户端', '事务代理正常返回之后，Web 层形成响应；超时重试还需要业务幂等键。')],
      example: { language: 'java', code: '// Spring + MyBatis 项目片段；mapper 与 orders 使用同一事务数据源\n@Transactional\npublic long place(long sku, String requestId) {\n  int changed = stockMapper.deduct(sku);\n  if (changed != 1) throw new SoldOutException();\n  return orders.insertAndReturnId(sku, requestId);\n}\n// deduct SQL：UPDATE stock SET qty=qty-1 WHERE sku=#{sku} AND qty>0\n// SoldOutException 继承 RuntimeException；requestId 有唯一约束。', output: '扣减返回 1 后若订单插入抛出运行时异常，整个事务回滚，库存不应永久减少。正常返回需要两次写入完成且提交成功。', explanation: '影响行数用于判断条件修改是否成立，事务提交用于判断这组操作是否正式生效。唯一请求号还可处理客户端超时后重试，事务本身不会自动去重。' },
      boundaries: ['此处讨论阻塞式 JDBC 本地事务；响应式事务使用的上下文传播机制不同。', '事务无法自动撤回已经发送的邮件或外部 HTTP 副作用，跨资源协作需要额外协议。', 'readOnly 多为优化提示及事务属性，不可把它当成通用的防写安全机制。'],
      answer: 'SQL 返回和事务提交是两个时间点。事务代理先准备事务连接，业务里的 Mapper 在这条连接上执行多条 SQL。UPDATE 返回 1 只能证明语句影响了目标行，后续插入失败仍会回滚；只有业务方法正常完成、没有回滚标记，并且事务管理器提交成功，调用才正常结束。我会检查代理入口、数据源一致性、异常是否被吞掉和回滚规则，再用数据库最终状态验证，而不只看 mapper 的返回值。',
      followUps: [qa('怎么证明两个 Mapper 在同一事务里？', '核对数据源和事务管理器绑定，观察事务日志或连接标识，并制造第二步失败验证第一步是否回滚。仅看两个方法都有注解不够。'), qa('客户端超时后能直接再次下单吗？', '第一次可能已提交。应使用稳定请求号、数据库唯一约束及查询已有结果的策略，不能把超时当作一定未执行。')],
      checks: [qa('deduct 返回 0，还能继续插入订单吗？', '不应该。必须把条件未成立作为业务失败处理，否则会生成无库存保障的订单。')],
      prerequisites: [link('course-spring-aop', '明确事务拦截发生在哪里'), link('course-spring-mapper', '理解 Mapper 返回值')], related: [link('course-mysql-stock', '在 SQL 层保证条件扣减'), link('course-spring-propagation', '多个事务方法如何组合')],
      conceptIds: ['web-spring-transaction', 'data-access-transaction'], readingIds: ['xl-spring-6cf00a2fd10d3c20', 'xl-spring-85de96c8468ccf0f', 'xl-spring-24ab0632bf79ddd1', 'xl-mysql-5b071faf58e80742'], sourceChapters: ['Spring'],
      sources: [ref('Spring：声明式事务注解', spring + 'data-access/transaction/declarative/annotations.html'), ref('MyBatis-Spring：事务集成', 'https://mybatis.org/spring/transactions.html')]
    },
    {
      id: 'course-spring-propagation', topicId: 'spring', chapter: 'SQL 映射与事务边界', title: 'REQUIRED、REQUIRES_NEW 与 NESTED 的失败边界',
      intro: '主业务失败时，审计记录是跟着回滚，还是必须保留？先回答这个业务问题，再选择事务传播属性。',
      explanation: [
        '传播行为决定一个方法进入时如何处理已有事务。REQUIRED 有事务就加入，没有才创建，所以多个逻辑方法可能共用同一个物理事务。内部 REQUIRED 调用抛出异常并使事务标记回滚后，即使外层捕获异常，最终提交时仍可能得到 UnexpectedRollbackException，避免调用者误以为已提交。',
        'REQUIRES_NEW 挂起外部事务，创建独立物理事务，内部可单独提交或回滚。外层仍占着资源时，内层常常还需要额外连接，高并发下可能把连接池耗尽。独立审计事务只能保证自身数据库写入的事务边界，仍需考虑主业务锁阻塞、审计失败以及哪些事实值得记录。',
        'NESTED 在支持的事务管理器和资源中通常利用同一物理事务的保存点。内部失败可以回滚到保存点，外层继续，但外层最终回滚时内部成功部分也不会保留。它与 REQUIRES_NEW 最大差别是没有独立提交能力。传播属性只有通过代理调用时才会应用，不能靠 this 调用创建边界。'
      ],
      flow: [step('识别现有事务', '外层事务 T1 已建立，内层方法由另一个 Bean 的代理进入。'), step('选择参与方式', 'REQUIRED 加入 T1；REQUIRES_NEW 建 T2；NESTED 在 T1 建保存点。'), step('处理局部失败', '共享事务可能被标记回滚，独立事务仅回滚 T2，嵌套事务回到保存点。'), step('处理最终结果', 'T1 回滚时，只有已独立提交的 T2 可能保留；NESTED 成功部分仍跟随 T1。')],
      example: { language: 'text', code: '时序实验（假设每次均从代理进入）\nT1: 写入订单 A\n内部: 写入审计 B，并正常结束\nT1: 抛 RuntimeException，回滚\n\n内部为 REQUIRED      → A、B 都回滚\n内部为 REQUIRES_NEW  → A 回滚，B 已独立提交\n内部为 NESTED        → A、B 都回滚', output: 'REQUIRES_NEW 的 B 是否保留取决于 T2 是否真的成功提交；NESTED 不会因为内部方法返回就独立持久化。', explanation: '用外层最终失败这个实验，可以直接区分逻辑方法返回与物理事务提交。示意假设两个写入无相互锁阻塞，实际系统还需验证连接池和锁。' },
      boundaries: ['NESTED 支持取决于事务管理器和数据库能力，不能假设所有 JPA、JTA 或响应式场景都具有相同保存点语义。', '隔离级别、超时和只读属性在加入现有事务时可能不能改变外层物理事务，需要理解验证配置。', 'REQUIRES_NEW 不是“更安全的默认值”，会增加资源消耗并改变业务原子性。'],
      answer: 'REQUIRED 优先复用当前物理事务，所以内部失败可能把整个事务标记回滚，外层 catch 并不能清除这个事实。REQUIRES_NEW 挂起外层并开启独立事务，内部提交可在外层失败后保留，但可能多占一个连接。NESTED 通常用同一物理事务的保存点，支持局部回滚，最终仍由外层提交或回滚。我会按业务要共同成败还是独立保留来选，并验证实际代理入口和事务管理器支持。',
      followUps: [qa('catch 了异常为什么还回滚？', '内部参与者可能已把共享事务标记为 rollback-only，外层正常返回无法把它恢复成可提交，最终提交会失败。'), qa('内层独立事务能看见外层未提交的订单吗？', '通常不能按普通已提交读取看到；若尝试修改外层持锁的记录还可能等待，所以审计参数最好传入已知事实而非依赖读取未提交记录。')],
      checks: [qa('只希望撤回批次中的一条失败记录，但整个批次最后仍统一提交，更接近哪个语义？', '在资源支持下更接近 NESTED 保存点；仍需明确业务失败的处理和最终外层回滚行为。')],
      prerequisites: [link('course-spring-transaction', '先掌握物理事务提交边界')], related: [link('data-access-connection-pool', '独立事务会影响连接池容量')],
      conceptIds: ['web-spring-transaction', 'data-access-transaction'], readingIds: ['xl-spring-4577871bf03c27be', 'xl-spring-dfc106364c565c50', 'xl-spring-e2def10d59477d6a'], sourceChapters: ['Spring'],
      sources: [ref('Spring：事务传播', spring + 'data-access/transaction/declarative/tx-propagation.html')]
    },
    {
      id: 'course-spring-async', topicId: 'spring', chapter: '应用配置与运行边界', title: '@Async 换了线程，也换了上下文与失败路径',
      intro: '在下单事务里异步发送任务，不意味着任务继承了下单事务。线程切换后必须重新确认：能看到什么数据、谁接收异常、队列满了怎么办。',
      explanation: [
        '在通常的代理模式下，@Async 拦截外部调用并把任务提交给执行器，调用线程继续向前运行。方法被投递到另一个线程不是“让同一调用栈跑得更快”，而是创建独立执行路径；若是 this 自调用，可能根本没有经过异步拦截器。',
        '阻塞式 Spring 事务通常把连接资源绑定到当前线程，不自动传播到线程池任务。任务即使在自己的方法上新建事务，也是在新线程上独立开启，可能早于原事务提交而查询不到新订单。MDC、用户上下文等 ThreadLocal 同样不能假定自动继承；需要显式传递必要、不可变的数据，装饰任务时在 finally 清理，避免池线程复用串数据。',
        '异步错误也不会像普通同步异常那样自动回到原调用栈。CompletableFuture 等结果要被观察，void 异步方法需要相应异常处理。线程池应定义核心容量、队列、拒绝策略和监控；无界积压只是把超时延后。对“提交后必须可靠执行”的工作，仅内存任务队列不够，常用事务内记录待办事件，再由可靠投递流程处理。'
      ],
      flow: [step('确认调用入口', '其他 Bean 通过代理调用异步 Bean，@EnableAsync 与执行器配置已生效。'), step('提交任务', '调用线程把显式业务参数交给执行器，检查是否被拒绝。'), step('独立执行', '工作线程使用自己的上下文和事务，不能假定看见尚未提交的订单。'), step('收集与清理', '消费 Future 结果或异常，清理线程局部信息，记录队列与执行耗时。')],
      example: { language: 'java', code: '// Spring 项目片段；mailTasks 为另一个已代理 Bean\n@Transactional\npublic void place(Order order) {\n  orderMapper.insert(order);\n  mailTasks.send(order.getId()); // 可能在本事务 commit 之前运行\n}\n\n@Async("mailExecutor")\npublic CompletableFuture<Void> send(long orderId) {\n  // 此处不能假定调用方事务中的数据已经可见\n  return CompletableFuture.completedFuture(null);\n}', output: '可能先出现工作线程的 send 日志，后出现下单事务提交日志；若工作线程立刻查询订单，可能查询不到。具体先后由调度决定。', explanation: '代码用于展示竞态，不是可靠通知方案。提交后事件监听可调整触发时机，但若进程在提交后崩溃仍可能丢任务；必须送达的事件应有可恢复的持久化记录。' },
      boundaries: ['不要把数据库 Connection 或仍可变的请求对象直接交给线程池长期使用。', '上下文复制应只复制必要字段；安全身份和事务资源不能用通用 ThreadLocal 拷贝代替完整协议。', 'Future 返回成功不等于外部邮件服务已经确认送达，应根据真正的副作用结果定义成功。'],
      answer: '@Async 的本质是经代理把调用投递到执行器，新线程有自己的执行路径。JDBC 事务和普通 ThreadLocal 不会自然继承，因此异步任务可能早于原事务提交并读不到数据。我会显式传业务标识，定义任务自身事务、异常收集、队列和拒绝策略，并清理上下文。若业务要求提交后可靠执行，还需要持久化事件和重试机制；单纯加 @Async 只能解决调度方式，不能保证可靠交付。',
      followUps: [qa('异步方法内部加 @Transactional 就能和外层一起回滚吗？', '不能。它可能建立自己的事务，但通常不会与原线程的本地事务共享一个原子提交边界。'), qa('线程池执行器拒绝任务时 HTTP 请求应该怎样？', '按业务契约处理：及时失败、降级或可靠记录后延迟执行；不能记录一条日志就宣称任务已成功提交。')],
      checks: [qa('异步任务需要 traceId，应该怎样传？', '显式参数或正确的任务装饰器传递，并在任务完成的 finally 中恢复或清理上下文，防止线程复用污染。')],
      prerequisites: [link('course-spring-aop', '代理决定异步是否生效'), link('concurrency-thread-local', '理解线程局部上下文')], related: [link('course-spring-transaction', '事务提交与任务启动的先后关系'), link('concurrency-executor-rejection', '队列满时的行为')],
      conceptIds: ['concurrency-executor', 'concurrency-thread-local', 'web-spring-transaction'], readingIds: ['xl-spring-85de96c8468ccf0f', 'xl-spring-c55043ee6273a1ed'], sourceChapters: ['Spring'],
      sources: [ref('Spring：异步执行与调度', spring + 'integration/scheduling.html'), ref('Spring：事务注解', spring + 'data-access/transaction/declarative/annotations.html')]
    },
    {
      id: 'course-spring-boot', topicId: 'spring', chapter: '应用配置与运行边界', title: 'Spring Boot 自动配置：条件成立才创建默认组件',
      intro: '引入 starter 之后 Web 服务能启动，是依赖、条件配置与容器启动共同作用；不是 jar 文件自己执行了业务代码。',
      explanation: [
        'Spring Framework 提供容器、AOP、事务等基础，Spring MVC 是其中处理 Servlet Web 请求的框架，Spring Boot 负责约定、自动配置、依赖管理和方便启动。Boot 可以运行非 Web 程序，所以 Boot 与 MVC 不是同义词。starter 主要把一组兼容依赖聚合起来，自动配置类再根据类路径、属性和现有 Bean 决定是否提供默认组件。',
        '例如类路径有相应数据访问依赖，并满足连接配置等条件时，Boot 可以创建 DataSource；如果应用已经明确提供 DataSource，相关默认配置通常会退让。自动配置不是无条件扫描所有对象，而是一系列条件判断。较新 Boot 的自动配置候选登记机制与旧版本细节不同，排查时应对照项目实际版本。',
        '启动大致经过环境与属性准备、创建上下文、加载定义、刷新容器、启动相应运行基础设施和执行启动回调。配置值还可能来自命令行、环境变量、外部文件等多处。单个简单值可以用 @Value，成组配置更适合 @ConfigurationProperties 并结合校验。排查“配置没生效”要观察最终属性来源与条件报告，不能只盯 application.yml。'
      ],
      flow: [step('确定依赖', 'starter 把 Web、JSON 等需要的库带入类路径，版本由依赖管理协调。'), step('准备环境', '解析配置来源、profile 和外部属性，得到运行时环境。'), step('评估条件', '自动配置检查所需类、属性以及是否已有同类 Bean，成立才登记默认组件。'), step('刷新并启动', '容器创建 Bean、完成生命周期，再启动 Web 运行能力并处理请求。')],
      example: { language: 'text', code: '# Spring Boot 项目的配置片段\nserver.port=8081\n\n# 在项目已有可运行 jar 的前提下启动\njava -jar app.jar --server.port=9090 --debug\n\n# 查看启动日志中的实际监听端口与条件评估报告', output: '在通常的 Boot 属性优先级下，命令行 --server.port=9090 覆盖文件中的 8081；应用应监听 9090。--debug 可帮助查看哪些自动配置匹配或未匹配。', explanation: '这不是生成 app.jar 的完整教程。实验只改变一个外部属性，验证“文件里写了某值”与“运行时最终使用某值”之间还存在属性来源优先级。' },
      boundaries: ['自动配置能被排除或被自定义 Bean 替代，但应先查条件报告，避免盲目排除导致关键基础设施缺失。', '命令行属性优先级实验建立在默认属性源设置上；自定义环境处理可能改变行为。', '不要在公共诊断输出中打印数据库密码等敏感配置，观察属性来源与脱敏值即可。'],
      answer: 'Spring 是基础框架，MVC 负责 Web 请求，Boot 通过 starter、自动配置和约定简化应用搭建。starter 解决依赖组合，自动配置根据类路径、配置属性和现有 Bean 判断是否提供默认组件，并不是导入后无条件生效。排查时我先看版本和依赖，再看条件报告与最终配置来源，最后检查自定义 Bean 是否使默认配置退让。这样能解释为什么相同代码在不同环境启动行为不同。',
      followUps: [qa('自己写 starter 的关键是什么？', '明确可复用能力，提供受条件控制的自动配置、可绑定的配置属性和默认实现，允许用户通过自定义 Bean 覆盖，并按所用 Boot 版本正确登记候选。'), qa('为什么生产端口和 application.yml 不同？', '可能被环境变量、命令行或外部配置覆盖。应查实际启动参数、激活 profile 和最终属性来源。')],
      checks: [qa('项目有 Spring Boot 就一定经过 DispatcherServlet 吗？', '不一定。Boot 可以运行非 Web 应用，也可能采用其他 Web 栈；DispatcherServlet 属于 Servlet MVC 路径。')],
      prerequisites: [link('course-spring-ioc', '自动配置最终仍然创建 Bean 定义')], related: [link('course-spring-cloud', '分布式组件在 Boot 应用之上组合')],
      conceptIds: ['web-spring-boot-auto-config', 'engineering-maven-dependencies'], readingIds: ['xl-spring-dc155633e2e39313', 'xl-spring-aeb018a7d5d8be45', 'xl-spring-52eef6477c9839ba', 'xl-spring-0f007fb74abcc52d', 'xl-spring-445b3125b95c1f37'], sourceChapters: ['SpringBoot'],
      sources: [ref('Spring Boot：自动配置', 'https://docs.spring.io/spring-boot/reference/using/auto-configuration.html'), ref('Spring Boot：外部配置', 'https://docs.spring.io/spring-boot/reference/features/external-config.html')]
    },
    {
      id: 'course-spring-cloud', topicId: 'spring', chapter: '应用配置与运行边界', title: '服务调用：发现、均衡、超时、熔断与重试',
      intro: '订单服务调用库存服务不再是一次普通 Java 方法调用。网络会超时，远端可能已经完成扣减，组件选型必须围绕这些失败事实。',
      explanation: [
        'Spring Cloud 是围绕分布式应用的一组项目与集成能力，服务发现、客户端负载均衡、网关和熔断是常见角色。它通常建立在 Boot 应用之上；Boot 帮助启动单个应用，MVC 处理该应用的 Web 请求，Cloud 解决多个应用之间的协作问题。具体组件和兼容版本需要按项目选型，不能把已经过时的组件列表当永久架构。',
        '发现得到可用实例列表，负载均衡从中选择目标。轮询强调轮流分配，随机简单分散，权重可考虑容量；会话粘滞或一致性散列让某类键倾向同一实例，但实例变更、故障和热点会破坏直觉上的“永远均衡”。应用最好减少必须粘住某实例的本地状态。',
        '限流控制进入的速率，熔断根据远端失败暂时阻止调用，降级提供可接受的替代结果，它们解决不同问题。重试会放大流量，而且超时只表示本地没有及时得到响应，不表示远端没执行。读取可以按策略重试；扣款、下单等写操作要有稳定幂等键、结果查询与重试预算，并限制总超时与退避抖动。'
      ],
      flow: [step('设定调用预算', '从接口总期限中划出连接、执行和有限重试的时间。'), step('选择目标实例', '发现健康实例并按负载策略选择一个，记录目标与 traceId。'), step('执行并判断失败', '区分可重试的瞬时错误、业务拒绝和结果未知的超时。'), step('控制扩散', '达到失败阈值触发熔断，按业务降级；重试必须受次数、幂等和总期限约束。')],
      example: { language: 'text', code: '请求：POST /reservations，Idempotency-Key: order-2026-001\n第一次：库存服务已提交 reservation=R7，响应在网络中丢失\n调用方：等待 800ms 超时\n第二次：使用同一个幂等键重试\n库存服务：唯一约束命中，返回已存在的 R7', output: '两次网络请求对应一次业务预留；若每次生成新幂等键，两个请求可能各扣一次库存。', explanation: '负载均衡可能把两次调用送到不同实例，因此去重事实应保存在共享且可靠的存储中，不能只靠某实例的内存集合。该时序是协议示例，不是假定框架自动实现了幂等。' },
      boundaries: ['熔断只控制是否继续调用，不自动恢复已丢失响应的业务结果。', '降级库存为“总是有货”会破坏正确性；替代结果必须符合业务容许范围。', '多层都自动重试会乘法放大请求量，需要统一调用预算。'],
      answer: 'Boot 解决单应用搭建，MVC 处理 Web 请求，Cloud 提供多个应用之间的发现、均衡和容错能力。一次远程调用要先发现并选择实例，再用明确超时执行。限流控制入口速率，熔断阻断持续失败，降级给业务可接受的替代结果。重试不能只看异常类型：超时可能已经执行成功，写操作必须有共享幂等记录和结果查询，并限制重试次数、退避和总时间预算。',
      followUps: [qa('固定一个用户访问同一实例就没有分布式状态问题吗？', '没有。实例故障、扩缩容和路由变化仍会发生，粘滞只是路由倾向，重要状态仍需可靠共享或恢复。'), qa('为什么短超时可能使故障更严重？', '若远端仍继续执行而调用方立即重试，系统同时做原请求和重试请求，负载上升又导致更多超时。')],
      checks: [qa('熔断打开时应继续对同一个下游立即重试十次吗？', '不应该。这样绕开了保护目的并放大负载，应按熔断与重试预算设计统一策略。')],
      prerequisites: [link('course-spring-boot', '明确单应用与分布式组件的分工')], related: [link('course-mysql-schema', '唯一约束可承载共享幂等事实')],
      conceptIds: ['web-spring-http', 'web-spring-boot-auto-config'], readingIds: ['xl-spring-f4986d71ea3ca781', 'xl-spring-edc3134e94b86dcf', 'xl-spring-b9b85c70feaad7e3', 'xl-spring-660322327dd054e0'], sourceChapters: ['SpringCloud'],
      sources: [ref('Spring Cloud：负载均衡', 'https://docs.spring.io/spring-cloud-commons/reference/spring-cloud-commons/loadbalancer.html'), ref('Spring Cloud：熔断抽象', 'https://docs.spring.io/spring-cloud-circuitbreaker/reference/index.html')]
    },
    {
      id: 'course-mysql-schema', topicId: 'mysql', chapter: '关系模型与执行基础', title: '表结构与约束：让数据库表达业务事实',
      intro: '“同一请求只能生成一张订单”不能只靠先查一次。把类型、唯一性和关联关系落在表结构里，数据库才有机会在并发下守住规则。',
      explanation: [
        '关系模型把实体与事实组织为表，通过键表达身份和关联。规范化的目标是减少更新异常，例如用户手机号只存用户表，不让每张订单都承担修改手机号的责任。但订单成交价是历史事实，应随订单保存，不能日后直接拿商品当前价格代替；冗余是否合理取决于语义和更新规则，而不只是“是否重复”。',
        '类型决定可表示的范围和运算语义。金额常用 DECIMAL(p,s) 或经过约定的最小货币单位整数，避免二进制浮点近似影响精确金额计算。VARCHAR(n) 的 n 是字符数量上限，实际字节数还受字符集和内容影响；NULL 表示缺失或未知，空字符串是一个已知值，两者在比较和聚合中表现不同。',
        '并发防重复应交给数据库唯一约束。两个线程都可能在 SELECT 时查不到，随后同时 INSERT；唯一索引才是在竞争写入时做最终裁决的地方。请求号应明确 NOT NULL，因为唯一索引对 NULL 的语义并不等同于“只能有一个未知值”。外键可以保护引用完整性，但仍需评估删除规则、索引和跨分片限制。'
      ],
      flow: [step('识别事实', '区分用户当前资料、订单身份、成交价格与请求幂等号。'), step('选择表达', '为金额、标识、文本选择精度和长度，明确哪些字段必填。'), step('落地约束', '用主键唯一标识记录，用 NOT NULL 与 UNIQUE 表达请求号不可重复。'), step('处理竞争结果', '插入发生唯一键冲突时查询原结果或返回明确冲突，不把检查放在应用层就结束。')],
      example: { language: 'sql', code: "-- 在实验数据库执行；MySQL 8.4\nCREATE TABLE demo_orders (\n  id BIGINT PRIMARY KEY,\n  request_id VARCHAR(64) NOT NULL UNIQUE,\n  amount DECIMAL(12,2) NOT NULL\n) ENGINE=InnoDB;\nINSERT INTO demo_orders VALUES (1, 'req-001', 19.90);\nINSERT INTO demo_orders VALUES (2, 'req-001', 19.90);", output: '第一条插入成功；第二条因 request_id 唯一约束冲突失败，不能产生两张同请求号订单。', explanation: '金额按定义保留两位小数。示例没有使用 INSERT IGNORE 掩盖错误，方便观察数据库如何裁决并发唯一性；生产代码应检查冲突是否确实对应同一业务请求。' },
      boundaries: ['唯一约束只能保证所定义键的唯一性，无法代替“同请求号但金额不同”的参数一致性校验。', '规范化与适当冗余是取舍，保留历史成交价不是随意复制当前商品资料。', 'DELETE、TRUNCATE、DROP 的事务与隐式提交行为不同，不能把清空数据的 DDL 当成可随意回滚的普通删除。'],
      answer: '设计表时我先确定每个字段表达什么事实，再选类型和约束。金额需要精确语义，通常用 DECIMAL 或约定的最小单位整数；缺失值与空字符串要分开。订单请求去重不能只先查后插，因为并发下两个请求都可能查不到，必须用 NOT NULL 的唯一请求号让数据库裁决，再把冲突映射成幂等返回或业务冲突。规范化减少更新异常，历史成交价等独立事实则应随订单保存。',
      followUps: [qa('为什么先查后插不能保证唯一？', '查询和插入之间有竞争窗口；两个事务都能在对方提交前查到不存在，最终需要唯一约束阻止重复落库。'), qa('SQL 与 NoSQL 应该按什么选择？', '按关系查询、事务边界、访问模式、规模和运维能力选择，不能简单说一种严格、一种快；具体产品支持的事务与索引能力不同。')],
      checks: [qa('订单金额应实时从商品表读取吗？', '订单历史成交金额通常应保存当时事实，否则商品调价会改变历史订单的解释。')],
      prerequisites: [link('data-access-sql', '认识行、列和键')], related: [link('course-spring-cloud', '把唯一约束用于跨实例幂等')],
      conceptIds: ['data-access-sql'], readingIds: ['xl-mysql-adb21e879b9a91c9', 'xl-mysql-b568fe8f1ad82ee4', 'xl-mysql-a4f84b040dcf42b6', 'xl-mysql-59993f9775230acd', 'xl-mysql-249a9a7312f1e5eb'], sourceChapters: ['SQL基础'],
      sources: [ref('MySQL：精确数值类型', mysql + 'fixed-point-types.html'), ref('MySQL：主键与唯一约束', mysql + 'constraint-primary-key.html')]
    },
    {
      id: 'course-mysql-query', topicId: 'mysql', chapter: '关系模型与执行基础', title: 'JOIN、聚合与 NULL：先说明结果中的一行代表什么',
      intro: '“列出所有用户和订单数”容易被一个 WHERE 条件写成“只列出有订单的用户”。理解关系操作的中间结果，才能写出正确查询。',
      explanation: [
        'JOIN 产生的是行组合，不会自动理解业务实体。一个用户有三张订单，连接后就可能出现三行该用户。LEFT JOIN 保留左表没有匹配的行，并用 NULL 补右表列；若随后 WHERE 要求右表金额大于零，补出的 NULL 行不会满足条件，效果就丢掉了原本想保留的无订单用户。过滤右表匹配条件常应放在 ON 中。',
        '逻辑上可以按 FROM/JOIN、WHERE、GROUP BY、HAVING、SELECT、ORDER BY、LIMIT 理解语义，但这不是数据库必须逐步照搬的物理执行顺序。COUNT(*) 统计组里的行，包括补出的行；COUNT(o.id) 只统计非 NULL 的订单 ID，所以能得到无订单用户的 0。SUM 在无非空输入时可能为 NULL，需要按业务决定是否 COALESCE 为 0。',
        '存在性问题常用 EXISTS/NOT EXISTS 表达，避免为判断有无而制造重复连接结果。排名要先说清并列规则：ROW_NUMBER 每行给不同序号，RANK 对并列留空位，DENSE_RANK 不留空位。“第 5 到 10 名”没有明确并列规则时，SQL 语法再正确也可能回答错问题。'
      ],
      flow: [step('确定粒度', '输出一行代表一个用户，因此按用户 ID 分组，而非把每张订单当输出行。'), step('保留无匹配项', '从 users LEFT JOIN orders，把只限制匹配订单的条件放在 ON。'), step('正确聚合', '用 COUNT(o.id) 统计真实订单，而不是补出的连接行。'), step('稳定展示', '按明确列排序，再分页；分页排序最好带唯一键打破并列。')],
      example: { language: 'sql', code: '-- MySQL 8+ 可执行查询：使用 CTE 内置样例行\nWITH users AS (SELECT 1 id UNION ALL SELECT 2),\norders AS (SELECT 10 id, 1 user_id UNION ALL SELECT 11, 1)\nSELECT u.id, COUNT(o.id) AS order_count, COUNT(*) AS joined_rows\nFROM users u LEFT JOIN orders o ON o.user_id = u.id\nGROUP BY u.id\nORDER BY u.id;', output: 'id=1：order_count=2，joined_rows=2；id=2：order_count=0，joined_rows=1。', explanation: '用户 2 没有订单，但 LEFT JOIN 保留了一行右侧为 NULL 的记录。COUNT(*) 数的是这行，COUNT(o.id) 则忽略 NULL。' },
      boundaries: ['不要把逻辑执行顺序当成执行计划；优化器可以重排连接或下推过滤，结果语义应保持一致。', 'NOT IN 子查询包含 NULL 时可能得到 UNKNOWN，反连接需求常用 NOT EXISTS 更便于准确表达。', 'COUNT(1) 与 COUNT(*) 都是统计行数，不能靠把星号换成 1 获得普遍性能收益。'],
      answer: '写多表 SQL 时我先定义输出粒度，再检查连接是否放大行数。LEFT JOIN 保留无匹配的左表行，右侧变成 NULL，所以 COUNT(*) 和 COUNT(右表主键) 的结果不同。右表过滤放到 WHERE 还可能把这些行排除，因此要区分匹配条件与最终结果过滤。排序分页要稳定，排名要明确并列规则。最后再看执行计划，不能用性能优化掩盖查询语义错误。',
      followUps: [qa('为什么 WHERE o.status=1 可能破坏 LEFT JOIN 的保留效果？', '无匹配行的 o.status 是 NULL，比较结果不是 TRUE，因此被 WHERE 过滤。若要求保留所有用户但只数状态为 1 的订单，可把条件放在 ON。'), qa('先按订单 JOIN 后 SUM 用户余额会怎样？', '一个用户匹配多张订单时，余额会被重复累加。应先按正确粒度聚合，或避免把不可重复的用户属性在放大后的行上求和。')],
      checks: [qa('找“有课程 02、没有课程 01”的学生适合怎么写？', '按学生关联 EXISTS 课程 02 与 NOT EXISTS 课程 01，直接表达存在性，避免多个成绩行造成重复。')],
      prerequisites: [link('course-mysql-schema', '知道主键与关联的语义')], related: [link('course-mysql-performance', '在语义正确后检查物理计划')],
      conceptIds: ['data-access-sql'], readingIds: ['xl-mysql-4a1c41629c1296fb', 'xl-mysql-d3041c3be5055113', 'xl-mysql-99c96ef07445b064', 'xl-mysql-fb29898937e4a0d3', 'xl-mysql-5d3582e656f03f6b'], sourceChapters: ['SQL基础'],
      sources: [ref('MySQL：JOIN 语法', mysql + 'join.html'), ref('MySQL：聚合函数', mysql + 'aggregate-functions.html'), ref('MySQL：窗口函数', mysql + 'window-functions.html')]
    },
    {
      id: 'course-mysql-engine', topicId: 'mysql', chapter: '关系模型与执行基础', title: '一条 SQL 如何到达 InnoDB 页面',
      intro: '查询快慢不仅由 SQL 长度决定。优化器选择访问路径，存储引擎沿索引取页，Buffer Pool 决定多少访问可以在内存里完成。',
      explanation: [
        '应用通过 JDBC 连接把 SQL 交给 MySQL，服务端验证语法与对象，优化器基于统计信息比较访问路径，执行器按计划向存储引擎请求记录。连接池复用的是连接资源，不是 SQL 查询结果；SQL 解析、优化、锁等待和返回大量数据都可能成为耗时来源。',
        'InnoDB 以页为基本存储和缓存单位，Buffer Pool 缓存数据页与索引页。读一个用户时，不是只从磁盘取几个字段字节，而是把相关页读入内存，再在页中查找记录。热点页已缓存时可以减少物理 I/O，但 CPU、锁竞争和结果传输仍有成本。',
        '更新一般先修改内存页，页因此变成脏页，之后由刷盘机制写回数据文件；同时遵守日志先行等恢复规则。事务成功不要求每一个改过的数据页立即写回原位置。InnoDB 提供事务、行级锁和崩溃恢复；讨论与 MyISAM 的区别时应围绕这些能力及实际版本，而不是只背“一个快一个慢”。'
      ],
      flow: [step('连接与检查', '服务端收到语句，确认语法、表和权限等条件。'), step('优化访问路径', '根据索引与统计信息选择扫描、连接和排序策略。'), step('引擎取页取行', '先查 Buffer Pool，缺页时读磁盘，再沿索引定位并取记录。'), step('处理与返回', '执行器完成过滤、聚合等处理，编码结果，经网络返回应用。')],
      example: { language: 'sql', code: '-- 只读观察命令；权限和部署配置可能限制可见项\nSHOW VARIABLES LIKE ' + "'default_storage_engine'" + ';\nSHOW GLOBAL STATUS LIKE ' + "'Innodb_buffer_pool_read_requests'" + ';\nSHOW GLOBAL STATUS LIKE ' + "'Innodb_buffer_pool_reads'" + ';\nEXPLAIN SELECT id, name FROM users WHERE id = 5;', output: '默认引擎常见为 InnoDB。前两个计数分别帮助观察逻辑页读请求与实际读入 Buffer Pool 的次数；应比较同一采样区间的增量，而不是把启动以来累计值直接当本次查询表现。', explanation: 'users 表为项目既有表，需自行提供。示例刻意不承诺固定计数或执行计划，因为缓存温度、并发负载和数据分布都会改变观察值。' },
      boundaries: ['较新的 MySQL 已移除旧查询缓存，不能把 Buffer Pool 解释成按 SQL 文本缓存结果。', '高缓存命中率不证明查询一定快；扫描大量内存页和返回大结果集仍可能很慢。', '冷缓存和热缓存压测应区分，不能用一次重复查询代表线上全部负载。'],
      answer: 'SQL 到 MySQL 后先经过解析和优化，执行器按照计划调用存储引擎。InnoDB 按页管理数据，Buffer Pool 缓存数据和索引页，缺页才需要读磁盘。更新先形成脏页并配合日志保证恢复，提交并不要求所有数据页立即回写。排查慢查询时我会区分连接等待、执行计划、页读取、锁等待和网络返回，不能把所有慢都归因于没有索引。',
      followUps: [qa('连接池和 Buffer Pool 有什么区别？', '连接池在客户端或应用侧复用数据库连接；Buffer Pool 在 InnoDB 内缓存页面，两者资源、位置和命中语义不同。'), qa('事务已提交但数据页还在内存，崩溃后怎么办？', '依赖提交时的日志持久化与崩溃恢复规则重做已提交修改，具体保障取决于日志刷盘配置和存储可靠性。')],
      checks: [qa('第二次同样的 SQL 快，是不是一定命中了 SQL 结果缓存？', '不是。更常见的解释可能是索引和数据页已经在 Buffer Pool，也可能有其他应用层缓存，需要证据区分。')],
      prerequisites: [link('course-spring-mapper', '连接应用调用与数据库执行')], related: [link('course-mysql-logs', '继续解释脏页与日志的恢复关系')],
      conceptIds: ['data-access-jdbc', 'data-access-connection-pool'], readingIds: ['xl-mysql-00b8e0361c31c5b9', 'xl-mysql-cbdfa1317995c86c', 'xl-mysql-796236c4a04307b0'], sourceChapters: ['存储引擎'],
      sources: [ref('MySQL：InnoDB Buffer Pool', mysql + 'innodb-buffer-pool.html'), ref('MySQL：InnoDB 架构', mysql + 'innodb-architecture.html')]
    },
    {
      id: 'course-mysql-index-tree', topicId: 'mysql', chapter: '索引与查询证据', title: 'B+ 树、聚簇索引与回表：一次查询走几棵树',
      intro: '按用户 ID 查姓名与按邮箱查姓名都可能用索引，但在 InnoDB 中它们通常走不同的访问路径。先画出叶子节点保存什么，再讨论快慢。',
      explanation: [
        'B+ 树把有序键组织在多层页面中，非叶子页提供分隔键和子页入口，叶子页保存记录并按键序相连。一个页能容纳多个入口，使树的扇出较大、层数相对较少；范围查询定位起点后可以沿叶子页继续扫描，避免每条记录都从根重新查找。',
        'InnoDB 聚簇索引的叶子保存整行数据，显式主键通常作为聚簇键。二级索引叶子保存二级键与主键值；通过 email 找到主键 5 后，若还要索引里没有的 name，就再去主键树读取整行，这叫回表。若查询需要的列都能从二级索引得到，则可形成覆盖索引访问。',
        '主键选择会影响所有二级索引，因为它们都携带主键。较短、稳定且有序增长的键通常有利于存储与插入局部性；随机长 UUID 可能增加空间与页面分裂，但具体有序 UUID 方案和业务需求要单独比较。索引也要随写入维护，不是免费副本；自增主键有空洞是正常现象，不能当连续业务序号。'
      ],
      flow: [step('判断入口树', 'id=5 可以进入聚簇树；email=某值可能进入 email 二级索引。'), step('定位叶子', '沿根和中间页缩小范围，到叶子得到主键或完整行。'), step('检查所需列', '二级叶子有 email 与 id；如果还要 name，通常需要回表。'), step('评估成本', '把扫描叶子数量、回表次数、缓存命中和写入维护共同计入，而不是只看有没有索引。')],
      example: { language: 'sql', code: '-- 假设 users 的主键为 id，并已有 INDEX ix_email(email)\nEXPLAIN SELECT id FROM users WHERE email = ' + "'lin@example.test'" + ';\nEXPLAIN SELECT id, name FROM users WHERE email = ' + "'lin@example.test'" + ';\n\n-- 第一条所需列为 email(过滤) 与 id(输出)\n-- 第二条还需要不在 ix_email 中的 name', output: '若优化器选择 ix_email，第一条可利用二级索引携带的主键形成覆盖；第二条通常还要通过 id 回表。实际选择以 EXPLAIN 为准。', explanation: '本例说明索引叶子保存内容如何决定访问路径，不承诺任何数据规模下优化器都会选相同计划。小表或低选择性条件可能选择其他路径。' },
      boundaries: ['聚簇索引不等于数据文件永远按逻辑键在磁盘连续排放，页面分配与物理布局还受存储管理影响。', '覆盖索引是某个查询与索引的关系，不是索引永久固定的类型。', '前缀索引只保留值的前缀，通常无法据此完整覆盖要求完整原值的查询。'],
      answer: 'InnoDB 的聚簇索引叶子保存整行，二级索引叶子保存索引列和主键。按主键查可以直接到行，按二级键查若需要其他列，还要拿主键再查聚簇树，就是回表。B+ 树通过大扇出降低层数，叶子有序相连适合范围扫描。是否覆盖要看本次查询需要哪些列，是否高效还要看扫描量和回表量。主键长度会放大所有二级索引的空间，所以主键和索引都要考虑写入成本。',
      followUps: [qa('为什么哈希结构不直接替代所有 B+ 树？', '哈希适合等值定位，但一般不保留可用于范围和排序的键序；数据库的页访问、范围查询与排序需求使有序树有价值。'), qa('更新主键为什么代价可能很大？', '它影响聚簇记录的位置和携带该主键的二级索引项，且可能引起页面调整，所以业务标识若可变，不宜轻易作为聚簇主键。')],
      checks: [qa('二级索引(email) 能覆盖 SELECT id,email 吗？', '在 InnoDB 且 id 为主键的前提下通常能，因为二级叶子本来就携带主键；仍要确认实际执行计划。')],
      prerequisites: [link('course-mysql-engine', '知道数据库以页读取数据')], related: [link('course-mysql-index-query', '联合索引怎样缩小扫描范围')],
      conceptIds: ['data-access-index'], readingIds: ['xl-mysql-7f358c5927b2ebee', 'xl-mysql-8b09c1a49d1971d6', 'xl-mysql-52f9b9a925a03211', 'xl-mysql-461e5218b0d97eb5', 'xl-mysql-d4bf272c1959af68'], sourceChapters: ['索引'],
      sources: [ref('MySQL：聚簇与二级索引', mysql + 'innodb-index-types.html'), ref('MySQL：索引物理结构', mysql + 'innodb-physical-structure.html')]
    },
    {
      id: 'course-mysql-index-query', topicId: 'mysql', chapter: '索引与查询证据', title: '联合索引：定位范围、索引过滤与覆盖是三个问题',
      intro: '索引 (tenant_id, created_at, status) 遇到等值加时间范围后，status 是不是就“完全失效”？要分清它还能不能缩小范围、过滤记录或覆盖结果。',
      explanation: [
        '联合索引按列顺序形成字典序。索引 (a,b,c) 先按 a 排，a 相同再按 b，最后按 c。a 等值时可以进入该 a 的连续区域，再用 b 范围确定一段扫描区间；c 在每个 b 组内有序，却通常无法把跨多个 b 的条件压成更窄的单段范围。这是理解左前缀和范围的基础，不取决于 WHERE 文本里条件的书写先后。',
        '“没有继续用于范围定位”不等于后续列毫无作用。引擎可能通过索引条件下推，在二级索引记录上先判断 c，从而减少回表；查询若只要索引已有列，又可能直接覆盖。范围定位减少扫描的索引项，索引下推减少不必要的回表，覆盖则避免为取输出列回表，三者解决的成本不同。',
        '函数、隐式类型转换、前导通配符等可能让普通索引难以按期望定位，但不能把所有情况写成永恒的“索引失效口诀”：函数索引、生成列、跳跃扫描与优化器选择会改变具体计划。应先写出可搜索的条件，再通过 EXPLAIN 或 EXPLAIN ANALYZE 检查使用的键、扫描行数和过滤位置。'
      ],
      flow: [step('展开键序', '把索引想成 tenant_id 相同的一组里，created_at 有序，再按 status 排序。'), step('确定扫描区间', 'tenant_id=7 与时间上下界定义本次需要访问的索引范围。'), step('判断剩余过滤', 'status=1 可在有条件时于索引层过滤，但一般不再把时间范围内记录直接缩成单个更小区间。'), step('核对输出列', '若输出只有 id、created_at 等已有列，可覆盖；输出长文本则可能仍回表。'), step('取得执行证据', '结合计划和实际扫描量验证推断，检查数据分布变化后的表现。')],
      example: { language: 'sql', code: '-- 已有 INDEX ix_tenant_time_status(tenant_id, created_at, status)\nEXPLAIN SELECT id, created_at\nFROM orders\nWHERE tenant_id = 7\n  AND created_at >= ' + "'2026-10-01'" + '\n  AND created_at < ' + "'2026-11-01'" + '\n  AND status = 1;\n-- 观察 key、key_len、rows、filtered、Extra；不要只看 key 是否非空。', output: '在该索引被选中时，tenant_id 与时间条件可限制扫描范围；status 仍可能参与过滤，查询可能覆盖。key_len、Extra 等具体值取决于表定义、版本和计划。', explanation: '不编造固定 EXPLAIN 数字。实验应比较同数据集下去掉 status、加入不在索引中的输出列时的扫描与回表行为。' },
      boundaries: ['最左前缀是理解常见 B-tree 访问的基础，但特定优化不应被忽略；最终以所用版本的真实计划为证。', '低区分度字段不代表绝对不能建索引，少量目标值、组合过滤、排序与覆盖都可能让它有价值。', '增加覆盖列会加大索引和写放大，不应为了消灭所有回表把整张表复制到多个索引。'],
      answer: '我把联合索引拆成三个问题：哪些列用于范围定位，哪些剩余条件能在索引上过滤，输出是否被覆盖。比如 tenant 等值加时间范围能限定有序区间，后面的 status 通常不能继续显著缩小这个范围，但仍可能通过索引条件下推减少回表。覆盖索引则是所需列都在索引里。判断是否优化成功不能只看 key 非空，要看真实扫描量、回表、排序和耗时，并考虑增加索引的写成本。',
      followUps: [qa('WHERE b>10 AND a=1 和 WHERE a=1 AND b>10 有本质差别吗？', '对同一 (a,b) 索引，条件在 SQL 文本中的先后通常不决定可用前缀；优化器会分析条件，索引列顺序才是结构关键。'), qa('Using index 与 Using index condition 相同吗？', '不相同。前者常表示覆盖访问，后者表示索引条件下推；后者仍可能需要回表取其他列。')],
      checks: [qa('范围条件后面的列“不用于进一步定位”意味着不能过滤吗？', '不意味着。它仍可能参与索引层过滤或覆盖，需要区分访问范围与过滤位置。')],
      prerequisites: [link('course-mysql-index-tree', '先知道二级叶子与回表')], related: [link('course-mysql-performance', '用实际计划验证访问推理')],
      conceptIds: ['data-access-index'], readingIds: ['xl-mysql-9960e8665249097c', 'xl-mysql-6630b99f52db5250', 'xl-mysql-0e1b5ccc26c50e3f', 'xl-mysql-119eea3d83fbe9a9', 'xl-mysql-b6507b8a8d2e28c8'], sourceChapters: ['索引'],
      sources: [ref('MySQL：多列索引', mysql + 'multiple-column-indexes.html'), ref('MySQL：索引条件下推', mysql + 'index-condition-pushdown-optimization.html')]
    },
    {
      id: 'course-mysql-mvcc', topicId: 'mysql', chapter: '并发事务与恢复', title: 'MVCC 与隔离：同一事务为什么可能读到不同的时间',
      intro: '事务 A 查到余额 100，事务 B 改成 80 并提交，A 再查是 100 还是 80？答案取决于隔离级别、读方式，以及快照何时建立。',
      explanation: [
        '事务隔离在并发正确性与吞吐之间取舍。InnoDB 的普通一致性读取借助版本链和可见性判断读取合适版本，不必为每次 SELECT 都锁住当前行。更新产生的新版本通过 undo 保留回溯历史的线索，Read View 用事务可见性规则选择版本；它不是给整库复制一份数据。',
        'READ COMMITTED 的普通一致性读通常为每条语句建立新快照，因此第二次读可能看到 B 新提交的 80。REPEATABLE READ 的普通一致性读通常复用首次建立的一致性快照，所以 A 还可能看到 100；仅 START TRANSACTION 不一定已经建立普通读快照，WITH CONSISTENT SNAPSHOT 等行为需另看。事务自己的修改又是可见的，因此不能把快照想成完全冻结的外部照片。',
        'SELECT ... FOR UPDATE、UPDATE 等属于锁定或修改当前数据的路径，行为不同于普通快照读。可重复读下，普通快照读避免同一快照中的集合变化；锁定范围读则可能借助 next-key 锁阻止相关插入。不要从“RR 解决幻读”直接推导出所有混合读写时序都像串行执行，更不能把有事务等同于自动防止业务丢失更新。'
      ],
      flow: [step('建立实验条件', '同一 InnoDB 表，余额初始 100；两个独立连接，明确设置隔离级别。'), step('A 创建快照', 'A 开事务并执行普通 SELECT，读到 100。'), step('B 修改并提交', 'B 将余额改为 80，提交后新版本对符合规则的读取可见。'), step('A 再次读取', 'RR 普通快照读可仍得 100；RC 新语句快照可得 80；锁定读要单独分析。')],
      example: { language: 'sql', code: '-- 实验前 accounts(id=1,balance=100)，使用两个连接\n-- 连接 A\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSTART TRANSACTION;\nSELECT balance FROM accounts WHERE id=1; -- 100，建立快照\n-- 连接 B\nUPDATE accounts SET balance=80 WHERE id=1; -- autocommit=1\n-- 回到连接 A\nSELECT balance FROM accounts WHERE id=1; -- 通常仍为 100\nSELECT balance FROM accounts WHERE id=1 FOR UPDATE; -- 当前锁定读为 80\nROLLBACK;', output: '在上述假设下，A 的普通读保持 100，而锁定读读取并锁住当前版本 80。两种读混用会产生不同观察，不能把所有 SELECT 都当同一种读取。', explanation: '示例假设 B 已提交且没有其他竞争事务。若 B 未提交，锁定读可能等待；若 A 自己修改过该行，观察还要包含自身写入。' },
      boundaries: ['隔离级别的具体实现属于存储引擎行为，这里聚焦 MySQL 8.4 InnoDB。', '长事务持有旧快照会延迟历史版本清理，增加 undo 压力，即使它看上去只是读。', '序列化级别也不能代替处理死锁、超时和业务重试。'],
      answer: 'MVCC 让普通一致性读通过版本链和可见性规则读取历史版本，从而减少读写互相阻塞。RC 通常每条语句取新快照，RR 通常复用首次一致性读建立的快照，所以另一个事务提交后是否可见要看级别和快照时机。锁定读和 UPDATE 又读当前数据并涉及锁，不能与普通 SELECT 混为一谈。我会用两个连接画时序，明确每步是否提交、是否建立快照、是否锁定，再判断结果。',
      followUps: [qa('RR 事务一开始就必然固定快照吗？', '普通 START TRANSACTION 通常不是，首次一致性读才建立相应快照；显式一致性快照选项需按隔离级别与文档理解。'), qa('MVCC 有了旧版本，就不需要 undo 回滚了吗？', 'undo 同时承担事务回滚和版本读取相关作用，MVCC 与回滚不是互相替代的两个部件。')],
      checks: [qa('A 的快照读得到 100，能直接按 100-10 写回并防止丢失更新吗？', '不能。另一个事务可能已修改余额，必须使用条件更新、版本校验或合适锁来保护业务读改写。')],
      prerequisites: [link('course-spring-transaction', '区分事务与单条语句')], related: [link('course-mysql-stock', '处理业务层读改写竞争'), link('course-mysql-locks', '理解当前读的锁范围')],
      conceptIds: ['data-access-isolation', 'data-access-transaction'], readingIds: ['xl-mysql-9865487e86c9766f', 'xl-mysql-3917b7541eedbe21', 'xl-mysql-ade65df4820a66b0', 'xl-mysql-a5fcad7f229ce55a'], sourceChapters: ['事务'],
      sources: [ref('MySQL：一致性非锁定读', mysql + 'innodb-consistent-read.html'), ref('MySQL：事务隔离级别', mysql + 'innodb-transaction-isolation-levels.html')]
    },
    {
      id: 'course-mysql-stock', topicId: 'mysql', chapter: '并发事务与恢复', title: '扣库存与乐观锁：把判断和修改放在同一条原子条件里',
      intro: '库存只剩 1，两条请求都先查到 1，再各自写回 0，数据库可能没有负数，却已经卖了两件。正确性取决于完整业务条件是否被原子保护。',
      explanation: [
        '单条 UPDATE 在事务引擎中具有相应原子性，不代表分成 SELECT、Java 计算、UPDATE 的业务过程天然原子。两个请求都读取 qty=1，各自认为可以购买，随后都把值写成 0，这就是丢失更新的一种表现。事务隔离不自动知道“最多卖一件”这个业务不变量。',
        '把条件与修改合并：UPDATE stock SET qty=qty-1 WHERE sku=? AND qty>0。竞争写同一记录时，InnoDB 锁协调执行，后续更新根据当前记录重新判断条件；第一个扣成 0 后，第二个条件不满足，返回 0。应用必须检查影响行数，把 0 转为售罄或冲突，而不是继续创建订单。',
        '对于更复杂的编辑，可以使用 version：UPDATE ... SET value=?,version=version+1 WHERE id=? AND version=?，影响行数 0 表示读取后版本发生变化，需要重新读取并决策。悲观方式则在事务内 SELECT ... FOR UPDATE 后计算与修改。两种方法都要缩短事务、明确失败重试，并确保订单写入与库存修改属于设计好的提交边界。'
      ],
      flow: [step('写出不变量', '每个 SKU 库存不得少于 0；每个请求只能生成一次有效订单。'), step('选择原子判断', '用 qty>0 条件更新，或对复杂修改使用 version 条件。'), step('检查行数', '1 表示本次条件修改成立；0 触发冲突处理，不继续假装成功。'), step('完成同事务写入', '创建订单并提交；失败要回滚库存，超时重试使用相同请求号。')],
      example: { language: 'sql', code: '-- 实验表 stock(sku PRIMARY KEY, qty)，已有 (7,1)\n-- 连接 A\nSTART TRANSACTION;\nUPDATE stock SET qty=qty-1 WHERE sku=7 AND qty>0; -- 1 行\n-- 连接 B 同时执行，先等待 A 的行锁\nUPDATE stock SET qty=qty-1 WHERE sku=7 AND qty>0;\n-- A 执行 COMMIT 后，B 继续判断 qty>0，影响 0 行', output: 'A 提交后库存为 0，B 不能再次扣减。若 A 回滚，B 获锁后则可能成功扣减，因此影响行数必须在真实执行完成后判断。', explanation: '锁保护记录更新，WHERE 表达业务条件，两者共同起作用。单纯在 Java 中判断 qty>0 再无条件写回，无法得到相同保证。' },
      boundaries: ['示例库存用非负业务域，qty>0 的条件更新确实改变值；一般 UPDATE 的行数语义还可能受驱动是否返回匹配行数影响。', '数据库扣减正确不代表 Redis 预扣、消息与支付自动一致，跨资源仍需状态机与补偿。', '乐观冲突不是必须无限重试的异常；高冲突时重试可能放大负载，应限次并重新评估业务条件。'],
      answer: '避免超卖不能只靠先查库存，因为查与改之间存在竞争窗口。我会把判断放进 UPDATE 的 WHERE，使用 qty=qty-1 且 qty>0，检查影响行数是否为 1。复杂编辑可以通过 version 条件检测过期读取，也可以在短事务内锁定读取。库存扣减和订单插入需要在合适事务边界共同成败，客户端重试还要请求号唯一约束。单条 SQL 原子、整笔业务原子和跨系统一致是三个层次。',
      followUps: [qa('事务里 SELECT 后 UPDATE 就一定安全了吗？', '不一定。普通快照读不自动保护业务计算；要锁定读取、条件更新或版本校验，使读取依据与修改之间有并发控制。'), qa('version 冲突后能把 WHERE version 条件删掉重试吗？', '不能，这会绕过并发保护。应重读最新值，重新应用业务规则，必要时向用户报告冲突。')],
      checks: [qa('UPDATE 成功后订单插入失败，应做什么？', '若设计为同一本地事务，应回滚整体；不能只把库存更新返回 1 当最终成功。')],
      prerequisites: [link('course-mysql-mvcc', '普通读取不等于锁住业务条件')], related: [link('course-spring-transaction', '把数据库条件与应用提交边界接起来')],
      conceptIds: ['data-access-transaction', 'data-access-isolation'], readingIds: ['xl-mysql-42db098abde0be5b', 'xl-mysql-c17112d3d7973f07', 'xl-mysql-5b071faf58e80742', 'xl-mysql-1aa63525b511e529'], sourceChapters: ['事务'],
      sources: [ref('MySQL：锁定读取', mysql + 'innodb-locking-reads.html'), ref('MySQL：各类语句设置的锁', mysql + 'innodb-locks-set.html')]
    },
    {
      id: 'course-mysql-locks', topicId: 'mysql', chapter: '并发事务与恢复', title: '行锁、间隙锁、死锁与元数据锁：锁住的是哪段资源',
      intro: '两条 SQL 修改不同用户，也可能互相等待。需要看访问的索引范围、事务持锁时间和表结构操作，不能只比较 WHERE 里的最终 ID。',
      explanation: [
        'InnoDB 的行级锁落实在索引记录上，精确唯一键命中与范围扫描的锁范围不同。记录锁保护具体索引记录，间隙锁约束区间里的插入，next-key 锁组合记录与前面的间隙。RR 下某些锁定范围读使用这些机制；RC 下间隙锁的使用更有限，但外键和重复键检查等仍有特殊情形。',
        '缺少合适索引时，语句可能扫描并锁住比最终修改行多得多的记录，两个看似无交集的业务条件也可能竞争。锁一般保持到事务结束，事务中远程调用、用户等待或大批量循环会延长占用。分析“为什么锁表了”时，应先看实际计划和锁等待，不能直接推断引擎把所有行锁升级成表锁。',
        '死锁是循环等待：A 持有 1 等 2，B 持有 2 等 1。数据库会选择牺牲者回滚，应用应按可重试业务边界重新执行，而不是只重试失败的最后一条 SQL。元数据锁则保护表定义；长事务使用表时可能阻挡 ALTER，排队的 DDL 又可能让后续请求等待，形成与行锁不同的堵塞链。'
      ],
      flow: [step('确定锁资源', '看引擎、隔离级别和索引访问路径，定位是记录、间隙还是表定义。'), step('定位持有者', '检查谁阻塞谁，持锁事务开始时间及其已执行语句。'), step('判断等待关系', '区分单向等待与循环等待，关联慢请求和应用事务日志。'), step('缩小风险', '统一修改顺序、缩短事务、补充合适索引，并为可恢复死锁设计有限重试。')],
      example: { language: 'sql', code: '-- accounts 中已有 id=1 与 id=2；两个连接交错执行\n-- A: START TRANSACTION;\n-- A: UPDATE accounts SET balance=balance-1 WHERE id=1;\n-- B: START TRANSACTION;\n-- B: UPDATE accounts SET balance=balance-1 WHERE id=2;\n-- A: UPDATE accounts SET balance=balance+1 WHERE id=2; -- 等 B\n-- B: UPDATE accounts SET balance=balance+1 WHERE id=1; -- 形成环\nSHOW ENGINE INNODB STATUS;', output: '启用死锁检测时，通常有一个事务收到死锁错误并被回滚，另一个得以继续。具体牺牲者不应写死为 A 或 B。', explanation: '两次转账按不同顺序拿锁形成循环。统一按较小账户 ID 先锁定，可减少此类死锁，但仍要保留死锁处理，因为索引和其他访问路径也可能参与竞争。' },
      boundaries: ['锁等待超时与死锁检测不同，回滚范围受场景和配置影响；应用需明确废弃并结束失败事务。', '不要把所有范围锁规则简化成固定口诀，唯一性、匹配结果和隔离级别都会改变锁范围。', '诊断时避免直接终止未知长事务；先确认业务、回滚成本及允许的处置流程。'],
      answer: 'InnoDB 行锁实际依附索引记录，锁范围由索引访问、条件和隔离级别共同决定。范围读可能涉及间隙或 next-key 锁，缺少索引会放大扫描与锁影响。死锁是循环等待，数据库回滚牺牲事务，应用要按完整业务事务有限重试，并用统一加锁顺序和短事务减少发生。ALTER 阻塞还可能是元数据锁，要检查持锁事务与等待链，而不能只看某条 UPDATE 最终改了几行。',
      followUps: [qa('不同主键记录一定不阻塞吗？', '精确命中不同唯一记录通常竞争较少，但还需看二级索引、外键、范围和其他语句；不能脱离完整事务断言。'), qa('为什么先修慢事务，再考虑加锁超时更合理？', '放长超时可能只是延长排队，锁仍被长事务持有。缩短事务和定位阻塞源才能减少占用。')],
      checks: [qa('一个事务更新 1 再更新 2，另一个更新 2 再更新 1，最直接的改进是什么？', '让同类事务按一致顺序访问资源，同时保留死锁重试与超时处理。')],
      prerequisites: [link('course-mysql-index-tree', '锁与索引路径有关'), link('course-mysql-mvcc', '区分快照读和锁定读')], related: [link('course-mysql-performance', '执行计划影响锁扫描范围')],
      conceptIds: ['data-access-isolation', 'data-access-transaction'], readingIds: ['xl-mysql-5fee37636c65e6a5', 'xl-mysql-4fbd8856de738717', 'xl-mysql-317b6aeecad1c796', 'xl-mysql-1da561e8b1cf5a7b'], sourceChapters: ['锁'],
      sources: [ref('MySQL：InnoDB 锁', mysql + 'innodb-locking.html'), ref('MySQL：死锁处理', mysql + 'innodb-deadlocks-handling.html'), ref('MySQL：元数据锁', mysql + 'metadata-locking.html')]
    },
    {
      id: 'course-mysql-logs', topicId: 'mysql', chapter: '并发事务与恢复', title: 'undo、redo、binlog 与崩溃恢复各负责什么',
      intro: '数据库刚返回提交成功就断电，修改为什么还能恢复？要分别说明如何撤销、如何重做，以及复制系统记录了什么。',
      explanation: [
        'undo 保留撤销修改所需的信息，也参与构建历史版本；redo 记录 InnoDB 恢复页面修改所需的信息，让崩溃后能够恢复尚未写回数据文件的变更；binlog 位于 MySQL 服务层，记录用于复制和按时间恢复的变更事件。这些日志解决不同问题，不能拿 binlog 简单替代页面级崩溃恢复，也不能把 undo 叫成 redo 的备份。',
        '更新先作用于 Buffer Pool 中的页，同时生成相应日志。提交时依据配置把所需日志写入并刷到持久介质，脏数据页可以稍后批量刷新，这体现日志先行的思路。checkpoint 推进意味着更早的修改已经具备可恢复基础，相关 redo 空间可以循环复用；如果脏页刷新追不上，写入可能被迫等待。',
        '开启 binlog 的 InnoDB 提交需要协调引擎与 binlog 的最终结果，常用内部两阶段提交描述 prepare、binlog 记录与 commit 的关系。组提交可以把多笔事务的部分刷盘成本合并。innodb_flush_log_at_trx_commit 的不同值与 sync_binlog 等参数改变故障下丢失窗口，必须连同操作系统和存储设备的真实持久化保证一起评估。'
      ],
      flow: [step('修改并记日志', '在内存页上更新记录，生成 undo 与 redo 等恢复信息。'), step('协调提交记录', '引擎准备阶段与 binlog 提交路径协调，避免两份日志对事务命运产生不可恢复矛盾。'), step('满足持久化策略', '按配置完成日志写入和必要刷盘，再返回提交结果。'), step('后台刷页与检查点', '把脏页逐步写回数据文件，推进 checkpoint 并释放可复用的 redo 空间。'), step('崩溃后恢复', '依据日志和事务状态重做必要修改、撤销未提交工作，而不是只相信数据页当前内容。')],
      example: { language: 'sql', code: '-- 只读检查当前实例配置，不修改生产参数\nSHOW VARIABLES WHERE Variable_name IN (\n  ' + "'innodb_flush_log_at_trx_commit', 'sync_binlog', 'log_bin'" + '\n);\n-- 分析实验时序：\n-- UPDATE 返回 → COMMIT 完成 → 数据页尚未全刷盘 → 进程崩溃', output: '即使数据页未全部回写，满足相应日志持久化条件的已提交修改仍可通过恢复重建。若日志也未持久化，则不能仅因应用曾收到成功就推断所有故障下绝不丢失。', explanation: '这里是故障模型推演，不建议用线上断电验证。应在隔离环境以明确的进程崩溃、系统崩溃或存储故障模型进行恢复实验。' },
      boundaries: ['值为 1 的 redo 刷盘策略也依赖底层存储诚实完成 flush，不是对所有硬件故障的绝对承诺。', 'doublewrite 主要应对数据页部分写等问题，不能替代 redo，也不是备库。', '备份必须与日志保留、恢复演练配套，复制副本并不天然等于不会同步误删的备份。'],
      answer: 'undo 负责撤销并支持历史版本，redo 帮 InnoDB 在崩溃后恢复页面变更，binlog 用于复制和时间点恢复，三者职责不同。更新先修改内存页并记日志，提交按持久化策略处理日志，数据页可以稍后刷盘。开启 binlog 时还要协调两份日志的提交结果。持久性必须说明刷盘配置和故障模型，我不会只说“有 redo 就永远不丢”，还会看 sync_binlog、存储可靠性、备份及恢复验证。',
      followUps: [qa('为什么不每次修改都同步写完整数据页？', '随机小修改直接同步刷页代价高；日志先行允许以较顺序的日志持久化配合后续批量刷页，但要严格遵守恢复顺序。'), qa('redo 写满为什么会影响业务？', '循环空间不能覆盖尚未安全推进检查点所需的记录，系统可能等待脏页刷新，写入延迟因而上升。')],
      checks: [qa('应用收到 UPDATE 行数 1 是否说明 redo 已满足提交持久化条件？', '不说明，若仍在显式事务里，提交尚未发生；即使提交成功也要结合刷盘配置判断故障保证。')],
      prerequisites: [link('course-mysql-engine', '理解脏页与 Buffer Pool'), link('course-spring-transaction', '明确提交时间点')], related: [link('course-mysql-architecture', 'binlog 继续进入复制链路')],
      conceptIds: ['data-access-transaction'], readingIds: ['xl-mysql-6e417cd35d5d5ee3', 'xl-mysql-04577d381e4b178f', 'xl-mysql-418de34ce6395406', 'xl-mysql-283bc1f65ae17bdd', 'xl-mysql-1d4f3322f672180d', 'xl-mysql-8e1b450a5f536262'], sourceChapters: ['日志'],
      sources: [ref('MySQL：redo 日志', mysql + 'innodb-redo-log.html'), ref('MySQL：undo 日志', mysql + 'innodb-undo-logs.html'), ref('MySQL：InnoDB 启动参数', mysql + 'innodb-parameters.html'), ref('MySQL：二进制日志', mysql + 'binary-log.html')]
    },
    {
      id: 'course-mysql-performance', topicId: 'mysql', chapter: '索引与查询证据', title: 'EXPLAIN 与深分页：用证据说明慢在哪里',
      intro: '“用了索引但仍然慢”并不矛盾。一个查询可能扫描一百万条索引记录，只返回二十条；优化目标应是减少实际工作量。',
      explanation: [
        '先取得真实 SQL、绑定参数、表结构、索引和数据分布，再看 EXPLAIN。key 表示选择了哪个索引，rows、filtered 是估计信息，Extra 可提示覆盖、索引条件下推、排序等。估计不是测量；EXPLAIN ANALYZE 会实际执行支持的语句并提供实际行数、循环和耗时，使用前必须考虑负载与副作用。',
        'LIMIT 1000000,20 通常仍要找到并跳过前一百万条匹配记录，不会因为只返回二十条就只处理二十条。如果查询还要回表取宽列，成本更大。按稳定排序键保存上一页位置，使用 id>lastId 或复合游标，可以让索引从边界附近继续取下一页，但不能直接满足任意跳页需求。',
        '优化还包括减少返回列、避免不必要关联、调整复合索引、减少排序或临时数据、维护统计信息，以及检查锁等待和连接池。强制索引只是控制访问路径，数据分布变化后可能反而更差。每次改动应对照同样参数和代表性数据，比较扫描量、延迟分位数与写入代价，而不是只展示“Extra 少了一个词”。'
      ],
      flow: [step('固定问题样本', '记录慢请求时间、SQL 指纹、参数、返回行数与调用链，区分数据库执行和应用等待。'), step('读估计计划', '检查连接顺序、索引、预计扫描量和排序，形成可证伪的瓶颈假设。'), step('安全测量', '在合适环境执行 EXPLAIN ANALYZE 或压测，比较实际行数与估计偏差。'), step('实施并复核', '改写查询或索引后复测，同时确认排序、分页和结果语义没有变化。')],
      example: { language: 'sql', code: '-- 假设 posts(id PRIMARY KEY, title)，按 id 升序浏览\nEXPLAIN SELECT id,title FROM posts ORDER BY id LIMIT 1000000,20;\n\n-- 已知上一页最后 id=1357900，使用位置继续\nEXPLAIN SELECT id,title FROM posts\nWHERE id > 1357900 ORDER BY id LIMIT 20;\n-- 在允许实际执行的实验环境，可再使用 EXPLAIN ANALYZE。', output: '第一条可能扫描并跳过大量行；第二条在索引可用时从指定键之后继续，工作量更接近本页大小。两者不是任意场景下完全等价：第二条依赖前页游标，不能直接跳到未知的第 N 页。', explanation: '若按 created_at 排序且时间重复，应使用 (created_at,id) 作为稳定游标，并匹配索引，否则翻页可能遗漏或重复。' },
      boundaries: ['EXPLAIN ANALYZE 的实际执行不是只读的“看一下计划”同义词，应确认语句支持、负载与执行后果。', 'filesort 是排序算法路径标记，不自动意味着一定落磁盘；需看数据量和实际执行指标。', '索引选择正确仍可能被锁等待或大结果集拖慢，诊断必须覆盖端到端时间。'],
      answer: '我先收集真实 SQL、参数、索引和数据分布，用 EXPLAIN 判断预计访问路径，再用适合环境里的实际执行证据验证。用了索引不等于扫描少，比如深分页仍会跳过大量记录。连续浏览可以改成稳定键的游标分页，减少跳过工作，但要承认不能任意跳页。优化完成还要比较结果正确性、实际扫描量和延迟，并检查锁与连接等待，避免把所有问题都归结为加索引。',
      followUps: [qa('估计行数与实际相差很大意味着什么？', '可能是统计信息不足、数据倾斜或条件相关性估计不准，应先研究分布与统计，再考虑改写或索引，不宜立即强制某计划。'), qa('按时间分页为什么还要带 id？', '时间值可能相同，增加唯一 id 形成确定顺序，才能把“下一页从哪里开始”表达成稳定边界。')],
      checks: [qa('key 有值、返回 20 行，能证明只读取 20 条记录吗？', '不能。扫描、过滤、排序、跳过和回表可能处理远多于返回行数的记录。')],
      prerequisites: [link('course-mysql-index-query', '知道索引每个阶段降低什么成本')], related: [link('course-mysql-locks', '慢可能是等待而非扫描')],
      conceptIds: ['data-access-index', 'engineering-debugging'], readingIds: ['xl-mysql-67026108142cfaf1', 'xl-mysql-6422b92b3ab3f62f', 'xl-mysql-e873d28acc67a413', 'xl-mysql-7bf2ef53009a83f4', 'xl-mysql-3deb62113e978920'], sourceChapters: ['性能调优'],
      sources: [ref('MySQL：EXPLAIN', mysql + 'explain.html'), ref('MySQL：LIMIT 优化', mysql + 'limit-optimization.html')]
    },
    {
      id: 'course-mysql-architecture', topicId: 'mysql', chapter: '复制与数据规模', title: '主从延迟、GTID 与分片：拆开可用性和扩展性',
      intro: '写入成功后立刻从副本查询却没有数据，不一定是丢失；可能只是复制尚未应用。增加副本和拆分数据解决的是不同瓶颈。',
      explanation: [
        '复制把源端变更传送到副本，再由副本应用。异步复制不要求所有副本应用完成后才返回源端提交，因此读写分离可能出现写后读旧值。半同步通常等待至少一个副本接收并记录到相应日志阶段的确认，不等于所有副本已经执行完，也不自动提供任意副本的强一致读取。',
        'GTID 为事务提供全局标识，便于追踪执行集合、续接复制与故障切换，不能使网络传输或应用速度自动变快。需要写后读一致时，可将相关读取路由主库，或根据事务位置等待目标副本追上，并设置超时和回退；简单“睡 100ms”无法在所有负载下保证追平。',
        '分库分表则把不同数据分配到不同分片，以分散存储与读写压力。分片键应服务主要访问路径与数据分布，如按 tenant_id 路由租户订单；代价是跨分片 JOIN、聚合、分页、唯一约束与事务变复杂。逻辑分表若仍在同一瓶颈实例上，未必解决总写吞吐，扩容迁移还要处理双写、回填、核对与切流。'
      ],
      flow: [step('区分瓶颈', '读压力可考虑副本，单实例存储或写入瓶颈可能需要分片，先取得容量证据。'), step('描述复制状态', '区分已发送、已接收、已应用，标出当前读路由的节点。'), step('保障读语义', '关键写后读走主库或等待目标复制位置，超时按业务回退。'), step('规划分片边界', '选择路由键，枚举跨片查询、唯一性和事务，再设计迁移与核对。')],
      example: { language: 'text', code: 't0 主库提交订单 O7，提交标识记为 G\nt1 应用收到成功\nt2 请求读副本 R：R 已接收 G，但尚未应用 → 可能查不到 O7\nt3 R 应用 G\nt4 再读 R → 能看到 O7（还需满足读取事务自身可见性规则）\n\n按 tenant_id 分片：查询 tenant=7 的订单可定向；\n查询全部租户今日总额需要跨分片汇总。', output: '副本已接收不等于已应用；按租户路由改善单租户请求，却不能消除全局汇总的协调成本。', explanation: '这是复制与路由的时序示意。G 代表可追踪的事务位置或 GTID，实际等待与路由要依所用复制拓扑实现。' },
      boundaries: ['切主不自动解决结果未知的客户端请求，仍需要幂等请求标识与提交结果核对。', '复制不是备份，误删也可能迅速传播到所有副本。', '分片后的全局唯一性不能继续假设由某一张本地表的 UNIQUE 自动覆盖所有分片。'],
      answer: '复制主要复制同一份数据以支持可用性和读扩展，分片把不同数据分散到多个存储节点。读写分离要面对副本延迟，半同步确认也不等于所有副本已经应用。GTID 帮助标识和追踪事务，不消除延迟。关键写后读可走主库或等待指定复制位置。分片则要按访问路径选择键，并提前解决跨片查询、唯一性、事务及迁移核对，否则只是把单库问题换成更复杂的协调问题。',
      followUps: [qa('写成功后等待固定 100ms 再读副本可靠吗？', '不可靠。复制延迟随负载和故障变化，应观察目标事务是否已应用或采用明确主库回退。'), qa('按 user_id 分片后，按 order_id 单独查订单怎么办？', '要有可从订单号导出路由的设计、全局路由索引或受控广播查询；分片键选择时就应枚举这种访问。')],
      checks: [qa('半同步提交成功，任意副本是否一定立即读到新订单？', '不一定。确认范围与副本应用进度不同，还要考虑读取路由与事务快照。')],
      prerequisites: [link('course-mysql-logs', '理解 binlog 的复制用途')], related: [link('course-redis-cache-aside', '缓存回填读副本会延长旧数据窗口')],
      conceptIds: ['data-access-transaction', 'data-access-sql'], readingIds: ['xl-mysql-9cddf503f80aa60e', 'xl-mysql-a97fb586ee0341d5', 'xl-mysql-5255c43e9ab81ee7', 'xl-mysql-f478069249589ced', 'xl-mysql-249b65d13e95463c'], sourceChapters: ['架构'],
      sources: [ref('MySQL：半同步复制', mysql + 'replication-semisync.html'), ref('MySQL：GTID 复制', mysql + 'replication-gtids.html')]
    },
    {
      id: 'course-redis-types', topicId: 'redis', chapter: '数据结构与执行模型', title: 'String、Hash、Set 与 ZSet：按访问动作选择结构',
      intro: '缓存用户资料、去重用户 ID、按积分取前十名，需要的操作不同。先选择能直接表达这些操作的数据类型，再研究底层编码如何节省内存。',
      explanation: [
        'Redis 的公开数据类型是命令契约，底层编码是实现选择。String 可以存文本、序列化对象或整数计数；Hash 适合按字段读写对象；Set 表达不重复成员；ZSet 在成员唯一的基础上增加分数，可按分数范围和排名读取。把所有内容塞成一个 JSON 字符串会简化整体读取，但局部更新需要读改写并处理并发。',
        '底层并不是每种类型永远只有一种结构。小对象可能用紧凑编码，大对象可能切换结构，阈值随版本与配置变化。字符串相关实现会记录长度和容量，避免反复扫描结束符，也可容纳二进制数据；整数值、短字符串和较长字符串的内存布局可以不同。listpack 等紧凑结构以较少指针换取局部访问成本，不能一概说操作都为 O(1)。',
        '较大 ZSet 的典型实现结合字典与跳表：字典便于按成员找到分数，跳表通过多层索引在有序成员中跳跃定位并支持范围遍历。层高随机化让平均查找效率较好；相同分数还要有确定的成员排序。Hash 的扩容可渐进迁移，迁移期查询要兼顾新旧表，这解释了为何编码与负载会影响延迟。'
      ],
      flow: [step('列出访问动作', '用户资料要整读还是改一字段；积分榜要查某人分数还是取排名区间。'), step('选择公开类型', '字段更新用 Hash，成员去重用 Set，分数排序用 ZSet，整体快照可用 String。'), step('定义键和生命周期', '约定 user:5 或 rank:weekly 等键，明确整键 TTL 与数据更新方式。'), step('观察实际成本', '结合元素数量、大小、编码和命令复杂度评估内存与延迟。')],
      example: { language: 'redis', code: 'HSET demo:user:5 name Lin score 90\nHINCRBY demo:user:5 score 5\nHGET demo:user:5 score\nZADD demo:rank 95 u5 88 u7 95 u9\nZRANGE demo:rank 0 1 REV WITHSCORES', output: 'HGET 返回 95。排行榜按分数降序返回两位 95 分成员；同分时使用成员的反向字典序，因此在这些成员名下 u9 在 u5 前。', explanation: 'Hash 的字段计数与 ZSet 的排名是两个独立结构，修改其中一个不会自动更新另一个。若业务需要同步，必须用合适的原子操作或一致性流程。' },
      boundaries: ['不要背固定编码阈值当跨版本事实，应以所用 Redis 版本、配置和 OBJECT ENCODING 观察为准。', 'Hash 的字段过期能力具有版本边界，不能假设所有部署都支持；传统整键 TTL 作用于整个 Hash。', 'Redis 有序集合分数使用浮点表示，不宜直接拿任意精度货币金额当无误差计算器。'],
      answer: '我先按操作选类型：整体快照可用 String，字段读写用 Hash，去重用 Set，按分数排名用 ZSet。公开类型与内部编码不同，小对象可能用紧凑结构，大对象再切换。ZSet 的常见大对象实现结合字典与跳表，分别服务按成员访问与有序范围访问。选型还要看每个键的大小、TTL、更新原子性和命令复杂度，不能只背“Redis 在内存所以都很快”。',
      followUps: [qa('用户资料存 JSON String 还是 Hash？', '若总是整体读写且版本替换简单，String 较直接；若常独立更新字段，Hash 更自然。还要看内存、序列化、TTL、并发修改与客户端成本。'), qa('ZSet 已有跳表为什么还要字典？', '按成员直接找分数和按分数有序扫描是不同访问路径，组合结构可以同时支持两类常见操作。')],
      checks: [qa('HINCRBY 更新用户积分后，排行榜一定自动变化吗？', '不会。两个键没有自动联动，必须由应用或脚本明确维护。')],
      prerequisites: [link('course-mysql-schema', '先用访问语义而非产品名称选模型')], related: [link('course-redis-atomic', '多结构一起修改需要原子边界')],
      conceptIds: ['data-access-sql'], readingIds: ['xl-redis-636e00f3a8cd3ddb', 'xl-redis-4df3eda4878c7137', 'xl-redis-0d47583c895da76b', 'xl-redis-485e98aa305b12bf', 'xl-redis-8adc7997f0bf6c8d'], sourceChapters: ['数据结构'],
      sources: [ref('Redis：数据类型', redis + 'develop/data-types/'), ref('Redis：Sorted Sets', redis + 'develop/data-types/sorted-sets/'), ref('Redis：OBJECT ENCODING', redis + 'commands/object-encoding/')]
    },
    {
      id: 'course-redis-io', topicId: 'redis', chapter: '数据结构与执行模型', title: '事件循环、I/O 多路复用与 Pipeline 的边界',
      intro: 'Redis 能服务许多客户端，不代表每条业务命令都并行执行。高并发连接、网络读写和核心命令执行需要分开讨论。',
      explanation: [
        '常见 Redis 核心命令处理采用事件循环：操作系统通知哪些 socket 已就绪，事件循环处理读写和命令。I/O 多路复用让一个线程无需为每个空闲连接阻塞等待，适合大量连接中只有部分就绪的情况。单线程执行某些核心路径减少共享数据加锁成本，但大命令或长脚本仍会延迟其他请求。',
        '“Redis 是单线程”是过度简化。不同版本和配置可使用 I/O 线程处理网络相关工作，也有后台任务处理持久化或释放内存等；不能把后台存在多线程推导成同一个键的命令任意并行。性能来自内存访问、数据结构、简单执行路径与较少调度成本的组合，网络往返和客户端序列化也可能主导延迟。',
        'Pipeline 让客户端连续发送多个命令，再批量读取响应，减少逐条等待的 RTT 成本。服务端仍按命令语义执行，它不建立事务原子边界，其他客户端的命令可能穿插在业务多命令之间。批量太大还会增加客户端和服务端缓冲、尾延迟与公平性问题，应按字节、条数和耗时限制批次。'
      ],
      flow: [step('连接就绪', '多路复用监听可读或可写事件，而不是逐个连接阻塞读取。'), step('读取与解析', '读取请求并解析命令，具体网络任务是否并行依版本配置。'), step('执行命令', '核心数据操作按其执行模型完成，大范围遍历会占用处理时间。'), step('批量返回', 'Pipeline 可减少往返等待，但响应缓冲与批量大小仍要受控。')],
      example: { language: 'text', code: '网络往返 RTT 假设为 2ms，执行一个简单命令约 0.05ms\n逐条等待 100 次：仅 RTT 部分约 100 × 2ms = 200ms\n一次 pipeline 发送 100 条：不必为每条都等待完整 RTT\n\n业务步骤仍是：GET balance → 在客户端计算 → SET balance\n把这些命令放进 pipeline，并没有自动消除读改写竞态。', output: 'Pipeline 可以显著减少串行网络等待，但吞吐提升比例受网络、批次与执行成本影响；不能保证固定倍数，也不能赋予跨命令原子性。', explanation: '数值是教学假设，不是产品基准。读改写依赖前一条结果时，普通预先发送的 pipeline 甚至不能直接表达完整判断，应考虑原子命令或脚本。' },
      boundaries: ['核心线程模型随版本演进，应核对实际版本，不把某篇旧文章的线程数当永久规则。', 'I/O 多路复用不是每个命令在多个 CPU 上同时执行的同义词。', '单线程执行单条命令不等于客户端任意多步操作天然原子。'],
      answer: 'Redis 的事件循环通过 I/O 多路复用服务大量连接，避免为每个空闲连接阻塞一个线程。常见核心命令路径仍需按其顺序执行模型理解，网络 I/O 和后台任务可能使用其他线程，所以单线程这个说法要限定范围。Pipeline 主要减少逐条等待网络往返，不保证多命令原子，也不能挽救大命令造成的阻塞。我会同时观察服务端执行、网络与客户端耗时。',
      followUps: [qa('增加 I/O 线程能解决一个长 Lua 脚本吗？', '通常不能直接解决脚本占用核心执行路径的问题，应缩短脚本、减少工作量或改变数据模型。'), qa('Redis 和 MySQL 谁更快？', '要比较同一访问模式和一致性要求。内存键值操作与关系扫描、持久化提交不是同一种工作，不能用单一 QPS 数字概括。')],
      checks: [qa('Pipeline 中先 GET 后 SET 就像数据库事务吗？', '不是。它只优化传输方式，没有自动保护读改写期间的条件。')],
      prerequisites: [link('course-redis-types', '命令成本由数据结构与操作决定')], related: [link('course-redis-atomic', '选择真正的命令原子边界')],
      conceptIds: ['concurrency-thread', 'web-spring-http'], readingIds: ['xl-redis-9c6a8e08ad47c965', 'xl-redis-88f052a023a47eb7', 'xl-redis-d4ba89c48f20657e', 'xl-redis-e2875f035a02f511'], sourceChapters: ['线程模型'],
      sources: [ref('Redis：Pipeline', redis + 'develop/using-commands/pipelining/'), ref('Redis：延迟诊断', redis + 'operate/oss_and_stack/management/optimization/latency/')]
    },
    {
      id: 'course-redis-atomic', topicId: 'redis', chapter: '数据结构与执行模型', title: '原子命令、WATCH、MULTI 与 Lua：原子不等于回滚',
      intro: '给计数器加一用 INCR 就够；“库存大于零才扣减”需要条件逻辑。正确选择原子边界，同时说明运行错误发生后会留下什么。',
      explanation: [
        'Redis 的单条命令具有它定义的原子执行语义，例如 INCR 把读取、加一和写回合为一个命令，避免客户端 GET 后再 SET 的竞争。多个命令的组合则需要另行保护，不能因为服务端核心执行路径常常顺序处理，就认为两次网络请求之间没人插入。',
        'MULTI/EXEC 把一组命令排队后集中执行，执行期间不会穿插其他客户端命令，但它不具备关系数据库那样的自动回滚机制。排队时的语法错误与执行时类型错误处理不同；执行阶段某条命令报错，其他命令仍可能执行。WATCH 监视键是否被修改，让 EXEC 在观察条件失效时放弃执行，是乐观并发控制，客户端必须处理失败并重新读取。',
        'Lua 把读取、判断、修改放在服务端一次执行中，适合库存条件扣减、带过期的计数等。原子执行意味着脚本期间不被其他命令穿插，不意味着脚本后半段报错会撤销前半段写入。应先验证参数、键类型和业务条件，再进行修改，同时限制脚本运行时间。Cluster 下还必须遵守键声明和同槽等约束。'
      ],
      flow: [step('选择最小原语', '能用 INCR、SET NX 等单命令表达就优先使用，减少协议复杂度。'), step('识别条件依赖', '需要读后判断时，选择 WATCH 重试或服务端脚本。'), step('先校验再修改', '脚本先检查不存在、类型和范围，避免发生部分写入后才报错。'), step('处理执行结果', '区分成功、条件不满足、WATCH 冲突和运行错误，必要时查询状态。')],
      example: { language: 'lua', code: '-- Redis Lua 脚本：KEYS[1] 是字符串库存键，ARGV[1] 是正整数数量\nlocal need = tonumber(ARGV[1])\nif not need or need <= 0 or need % 1 ~= 0 then return -2 end\nlocal raw = redis.call("GET", KEYS[1])\nlocal stock = tonumber(raw)\nif not stock or stock % 1 ~= 0 then return -1 end\nif stock < need then return 0 end\nredis.call("DECRBY", KEYS[1], need)\nreturn 1', output: '初始库存为 1、need=1 时，并发两次执行只有一次返回 1，另一次返回 0；键缺失或值非法返回 -1，数量非法返回 -2。', explanation: '检查与扣减在同一次脚本中进行，避免两个客户端同时通过检查。示例假设库存处于 Redis 整数命令可表示范围内；成功只代表 Redis 的这次修改，不代表 MySQL 订单已提交。' },
      boundaries: ['Lua 和 MULTI 的原子执行不等于自动撤销已发生的写入，脚本仍可能运行时出错。', 'WATCH 冲突重试需要次数和退避限制，热点键上无限重试会放大压力。', '原子性与持久性、主从故障后的数据保留是不同维度。'],
      answer: '我会先看是否能用单条原子命令，比如 INCR；如果有读后判断，则用 WATCH 做乐观校验，或用 Lua 把条件和修改放在服务端执行。MULTI/EXEC 和 Lua 能保证相应执行期间不被其他客户端穿插，但都不能当成数据库式自动回滚。脚本要先校验后修改，控制时长，并处理 Cluster 同槽约束。最终还要区分 Redis 修改成功、持久化完成与数据库业务提交，不能把它们混为一个成功。',
      followUps: [qa('WATCH 后别人把值从 1 改成 2 又改回 1，会怎样？', 'WATCH 关注键的修改事件，而不只是最终值相等；观察到被修改后 EXEC 会按冲突规则放弃，需要重新读取。'), qa('Lua 已写了 key A，后面操作 key B 类型错误，A 自动恢复吗？', '不会因为脚本报错就自动回滚前面写入，所以需要在写之前完成必要校验，或者设计可修复的状态转换。')],
      checks: [qa('库存脚本返回 1 后 MySQL 插单失败，Redis 会自动补回吗？', '不会。跨系统步骤需要明确补偿、重试和幂等状态，脚本的原子范围只在 Redis 内。')],
      prerequisites: [link('course-redis-io', '顺序执行不等于多次请求原子')], related: [link('course-redis-rate-limit', '把短脚本用于限流'), link('course-mysql-stock', '比较数据库的条件更新')],
      conceptIds: ['concurrency-shared-state', 'data-access-transaction'], readingIds: ['xl-redis-a7a92de8003a3356', 'xl-redis-27c74133f664e64c', 'xl-redis-116bb8967a2b5641', 'xl-redis-e2875f035a02f511'], sourceChapters: ['事务'],
      sources: [ref('Redis：事务与 WATCH', redis + 'develop/using-commands/transactions/'), ref('Redis：Lua 原子执行', redis + 'develop/programmability/eval-intro/')]
    },
    {
      id: 'course-redis-persistence', topicId: 'redis', chapter: '持久化、过期与集群', title: 'RDB、AOF 与重写：恢复点离故障有多远',
      intro: 'Redis 写入返回成功后宕机，能恢复多少数据取决于持久化策略。缓存可重建与业务唯一数据应采用不同的丢失容忍度。',
      explanation: [
        'RDB 保存某个时点的数据快照，文件紧凑，适合快速恢复与备份，但快照之后的写入可能在故障时丢失。后台快照通常通过 fork 子进程进行；父进程仍可处理写入，操作系统的写时复制会在页面修改时复制相关内存，因此“后台执行”不等于没有暂停、CPU 或内存开销。',
        'AOF 记录用于重建数据的写操作，何时 fsync 决定性能与故障丢失窗口的取舍。everysec 常用于将刷盘成本摊开，但不能把“一秒”当作任何系统停顿下的绝对最大损失证明。AOF 重写根据当前数据构造更精简的恢复表示，不是机械地压缩原文件；较新版本使用多部件 AOF 等机制，细节应按实际版本理解。',
        '同时启用 RDB 与 AOF 时，恢复通常优先采用更完整的 AOF 路径，混合格式和配置还会影响文件内容。持久化与复制互补：本地日志解决本机恢复，副本处理部分节点故障，但异步复制和故障切换仍可能丢失已确认写入。对重要数据还需要备份、恢复演练及可接受丢失量和恢复时间目标。'
      ],
      flow: [step('定义恢复目标', '先说明最多允许丢多少秒或多少笔数据，以及允许恢复多久。'), step('选择持久化组合', 'RDB 提供时间点快照，AOF 缩短写入恢复窗口，配置 fsync 策略。'), step('评估后台成本', '监控 fork 时延、写时复制内存、重写期间 I/O 和磁盘余量。'), step('做恢复验证', '在隔离环境按实际配置重启并核对数据，验证备份可读和恢复路径。')],
      example: { language: 'text', code: '假设仅每 5 分钟成功生成一次 RDB\n12:00:00 快照完成，包含订单计数 100\n12:03:00 内存计数增加到 130\n12:03:10 节点故障，内存丢失\n从该 RDB 恢复：计数可能回到 100\n\n若使用 AOF，结果要看哪些写入已按 fsync 策略持久化。', output: '最近一次成功快照决定仅 RDB 模式的恢复基线，故障前内存的 130 不会因为客户端曾收到成功就自动存在于快照里。', explanation: '时间点是示意。真实恢复还受复制、备份、AOF 和存储可靠性影响，不能只观察 Redis 命令返回值推断故障保证。' },
      boundaries: ['缓存可以从数据库重建，不代表锁、计数、Stream 等所有 Redis 数据都能接受相同丢失窗口。', 'fork 后写时复制可能造成显著额外内存，容量不能只按平稳时 used_memory 估算。', '备份文件存在不等于能恢复，应验证文件完整、版本兼容与恢复时间。'],
      answer: 'RDB 是时间点快照，恢复快而紧凑，但之后的写入可能丢失；AOF 通过写入记录恢复，fsync 策略决定更多持久性与性能取舍。后台快照和重写也有 fork、写时复制和 I/O 成本。重写是用当前数据生成精简恢复内容，不是简单删旧日志。方案要从可接受丢失窗口和恢复时间出发，并与复制、备份和恢复演练配合，不能只说“开了持久化就不丢数据”。',
      followUps: [qa('BGSAVE 时还可以写吗？', '通常可以，父进程继续处理请求；但 fork 暂停和写时复制增加内存、CPU 成本，写密集时尤其要留余量。'), qa('为什么 AOF 重写不能理解为直接清空旧文件？', '旧文件仍承担恢复保障，新内容和期间增量要按协议完成切换，直接清空会破坏可恢复性。')],
      checks: [qa('AOF everysec 是否让 Redis 写与 MySQL 事务原子提交？', '不会。它只是 Redis 自己的持久化策略，不负责两个系统的原子提交。')],
      prerequisites: [link('course-redis-atomic', '把原子执行与持久性分开')], related: [link('course-redis-cluster', '复制增加另一条故障边界')],
      conceptIds: ['data-access-transaction'], readingIds: ['xl-redis-d3bf90b564c5082b', 'xl-redis-a0c86cfdc7055dbb', 'xl-redis-cf306dfdb68131c5', 'xl-redis-31ce9ff479886905'], sourceChapters: ['日志'],
      sources: [ref('Redis：持久化', redis + 'operate/oss_and_stack/management/persistence/')]
    },
    {
      id: 'course-redis-expiry', topicId: 'redis', chapter: '持久化、过期与集群', title: '过期与淘汰：一个管时间，一个管内存',
      intro: '设置 60 秒 TTL 并不是预约一个精确的物理删除动作。键何时对读取不可见、何时释放内存，以及内存满时删谁，是不同问题。',
      explanation: [
        '过期针对时间有效性。Redis 记录过期时间，访问到已过期键时按过期规则处理，同时通过主动过期工作清理一部分到期键。它不会为每个键创建一个精确到点执行的系统定时器；因此逻辑到期与物理内存立即释放不能完全等同。常规主节点读取不会因为物理清理滞后就把已过期值当有效缓存返回。',
        '淘汰针对内存压力。达到 maxmemory 相关约束后，按配置策略选择候选键，可能从所有键或仅有 TTL 的键中近似按 LRU、LFU 等规则淘汰；noeviction 则拒绝相应的新增写入，而不是自动无限扩容。LRU 关注最近访问，LFU 关注带衰减的访问频率，Redis 使用近似方法控制维护成本。',
        '更新命令对 TTL 的影响要逐条判断。普通 SET 覆盖一个键通常会移除原 TTL，除非指定新的过期或 KEEPTTL；对已有数值执行 INCR 等原地修改通常保留 TTL。缓存实现如果只在首次写入设过期，后续 SET 意外清除 TTL，就可能把本应短暂的旧数据留存很久。'
      ],
      flow: [step('定义数据有效期', '按业务可接受陈旧时间设置 TTL，必要时加入抖动分散过期。'), step('核对写入语义', '每次写值时明确是重置、保留还是取消 TTL。'), step('设置内存策略', '按缓存或重要状态用途选择淘汰范围，并留出复制与持久化额外内存。'), step('观察失效原因', '区分 expired_keys 与 evicted_keys、命中率与写入拒绝，避免把两种删除混为一谈。')],
      example: { language: 'redis', code: 'SET demo:ttl 10 EX 60\nINCR demo:ttl\nTTL demo:ttl\nSET demo:ttl 20\nTTL demo:ttl\nSET demo:ttl 30 EX 60\nSET demo:ttl 40 KEEPTTL\nTTL demo:ttl', output: '第一次 TTL 仍接近 60；普通 SET 20 后 TTL 返回 -1，表示键存在但没有过期时间；重新设 EX 再 KEEPTTL 后，TTL 仍为剩余秒数。', explanation: 'TTL 的具体秒数会随执行耗时减少。示例要求支持 KEEPTTL 的 Redis 版本，展示的是命令语义，不依赖精确的瞬时计时。' },
      boundaries: ['TTL 返回 -2 表示键不存在，-1 表示存在但没有过期，不能都解释成“还没设置好”。', '淘汰策略不适合无区别地应用于缓存和不能丢失的业务状态，应通过实例与数据设计隔离需求。', 'TTL 只能限制单个缓存版本的存活，无法单独证明数据库与缓存始终一致。'],
      answer: '过期解决数据时间有效性，淘汰解决内存容量，两者触发条件不同。过期采用访问检查与主动清理，逻辑过期不等于立即释放全部物理内存。内存到阈值后按 LRU、LFU 等近似策略选键，或在 noeviction 下拒绝写入。我还会检查更新命令是否保留 TTL，普通 SET 会清掉原过期时间，容易造成长期旧缓存。监控时分别看过期、淘汰、命中率和写入拒绝。',
      followUps: [qa('设置了 TTL，内存满时就一定不会淘汰未到期键吗？', '不一定。淘汰依据内存策略，可以在 TTL 尚未到期时删除候选缓存。'), qa('LRU 与 LFU 对突发热点有什么差别？', 'LRU 更看重最近访问，LFU 更看重带时间衰减的频率；具体命中效果取决于访问分布，应实测而不是预设一种永远最好。')],
      checks: [qa('GET 返回空能否确定键是自然过期？', '不能，也可能被主动删除、内存淘汰、从未存在或发生故障丢失，应结合指标和写入链路判断。')],
      prerequisites: [link('course-redis-types', '明确键的内容与生命周期')], related: [link('course-redis-cache-aside', 'TTL 是一致性补救的一部分')],
      conceptIds: ['data-access-orm'], readingIds: ['xl-redis-ddd03d1050bdb701', 'xl-redis-440655642bd6c4c4', 'xl-redis-ff45ffcd3d877ca2', 'xl-redis-54fa56c0846d65f0', 'xl-redis-66f3ffe697ec726f'], sourceChapters: ['缓存淘汰和过期删除'],
      sources: [ref('Redis：键淘汰', redis + 'develop/reference/eviction/'), ref('Redis：EXPIRE', redis + 'commands/expire/'), ref('Redis：SET', redis + 'commands/set/')]
    },
    {
      id: 'course-redis-cluster', topicId: 'redis', chapter: '持久化、过期与集群', title: '复制、Sentinel 与 Cluster：故障切换并不等于强一致',
      intro: '一个节点故障后服务恢复了，刚写入的值却没有了。高可用回答“能否继续服务”，一致性还要回答“谁确认过哪些写入”。',
      explanation: [
        'Redis 复制通常异步传播主节点变更。首次或无法续接时可进行全量同步，若复制标识和偏移等条件满足，可利用积压缓冲继续部分同步。主节点已经回复客户端而副本尚未收到的写入，在切换到该副本时可能丢失。WAIT 等手段能改善某些确认条件，但不把整个系统自动变成任意故障下的强一致存储。',
        'Sentinel 监控实例、判断主观与客观故障并协调故障转移，客户端需要发现新主节点。监控判断与故障转移授权涉及不同的法定数量语义，不应把一个 quorum 参数当作全部选举过程。网络分区时旧主可能暂时仍接受部分客户端写入，限制缺少足够副本时的写入可降低风险，却不能消除全部分区与延迟问题。',
        'Redis Cluster 还把键分配到 16384 个哈希槽，以扩展数据容量和负载。客户端维护槽到节点的映射，遇到 MOVED 更新路由，迁移期间 ASK 有不同的临时转向语义。多键操作常要求同槽，hash tag 可让 {order:7}:stock 与 {order:7}:result 按同一标签计算槽，但把所有键塞进同一标签又会制造热点。'
      ],
      flow: [step('写入与复制', '主节点执行并回复，复制流继续发给副本，跟踪复制偏移和延迟。'), step('检测与切换', '监控与集群机制判断故障，符合条件后提升副本并通知客户端。'), step('核对数据窗口', '检查新主是否包含已确认写入，重要业务按幂等与对账流程恢复。'), step('按槽路由', 'Cluster 客户端查槽映射并处理重定向，多键操作提前设计同槽边界。')],
      example: { language: 'redis', code: '# Redis Cluster 环境中的只读槽号检查\nCLUSTER KEYSLOT {order:7}:stock\nCLUSTER KEYSLOT {order:7}:result\nCLUSTER KEYSLOT {order:8}:stock\n\n# 前两键可用于需要同槽的脚本设计；第三键通常在其他槽。', output: '前两个键由于非空 hash tag 相同，槽号相同。不同标签不保证必然不同槽，但通常会分散；真正结果应由 KEYSLOT 验证。', explanation: '同槽只解决命令路由与原子操作可用范围，不解决故障切换时写入丢失，也不意味着键的业务生命周期自动一致。' },
      boundaries: ['Cluster 分片与主从复制是两层能力；分片内仍然可能有复制延迟与切换损失。', 'MOVED 与 ASK 不能都当永久路由更新，客户端应采用正确的 Cluster 协议实现。', '借助 hash tag 获得多键原子性会集中负载，必须在原子边界和扩展性之间取舍。'],
      answer: '主从复制负责传播数据，Sentinel 负责监控与故障转移，Cluster 还增加哈希槽分片。异步复制意味着主节点已确认而副本未收到的写入可能在切换时丢失，所以可用性恢复不等于强一致。Cluster 客户端维护槽路由并处理 MOVED、ASK；多键脚本通常要求同槽，可以用 hash tag 设计局部原子边界，但也要防热点。关键业务仍需明确丢失容忍度、幂等和对账恢复。',
      followUps: [qa('WAIT 返回满足副本数就绝不丢了吗？', '不能作这样的绝对保证。它加强复制确认，但持久化、故障选择和拓扑变化仍影响数据保留，官方也不把它等同于强一致。'), qa('所有订单都用 {orders} 标签怎样？', '会落到同一槽，虽然方便多键操作，却失去数据分散效果，容易把某个分片变成热点。')],
      checks: [qa('只加 Sentinel 能把一个数据集分成多个主节点分别承载吗？', '不能。Sentinel 主要管理高可用，分片能力需要 Cluster 或应用层路由等方案。')],
      prerequisites: [link('course-redis-persistence', '区分本地恢复与副本接管')], related: [link('course-redis-lock', '异步复制影响分布式锁安全')],
      conceptIds: ['data-access-transaction'], readingIds: ['xl-redis-6541570fd7d76213', 'xl-redis-76799697a6814f57', 'xl-redis-9129fdb10ce7bc62', 'xl-redis-65cbba4a31944708', 'xl-redis-bec1db7ae0e8e5d6'], sourceChapters: ['集群'],
      sources: [ref('Redis：复制', redis + 'operate/oss_and_stack/management/replication/'), ref('Redis：Sentinel', redis + 'operate/oss_and_stack/management/sentinel/'), ref('Redis：Cluster 规范', redis + 'operate/oss_and_stack/reference/cluster-spec/')]
    },
    {
      id: 'course-redis-cache-aside', topicId: 'redis', chapter: '缓存与业务一致性', title: 'Cache Aside：提交后删缓存仍然可能回填旧值',
      intro: '用户把姓名从 Lin 改为 Chen，数据库已经提交，缓存也删过，为什么几秒后又读到 Lin？答案藏在另一个更早开始、较晚回填的读取里。',
      explanation: [
        'Cache Aside 的常见读路径是先读缓存，未命中再查数据库并回填；写路径通常先提交数据库修改，再使对应缓存失效。这样数据库作为事实来源，缓存作为可丢弃副本。删除通常比直接更新缓存更容易管理复杂派生结果，也避免两个写请求直接把缓存按错误先后覆盖，但不代表删除顺序本身能证明强一致。',
        '旧值回填竞态可以发生在“先更新数据库再删缓存”之后：读请求 R 缓存未命中，从数据库读到旧值 v1 后暂停；写请求 W 提交 v2 并删除缓存；R 恢复后把早先拿到的 v1 写入缓存。所有单步都成功，最终缓存仍旧。若回源读取副本或长期快照，陈旧窗口还可能被进一步放大。',
        '另一类问题是失效失败：数据库已经提交，但删除 Redis 超时或服务崩溃，旧缓存继续存在。提交事务和删除缓存属于两个系统，普通本地事务不能把它们原子化。可在数据库事务中持久化待失效事件，经可靠投递和幂等重试完成删除，并监控积压与失败；TTL 提供有限的陈旧兜底，但重复旧回填可能重新开始 TTL，不能把它当全局一致性证明。',
        '若业务需要更严格保证，可让所有相关读写遵守同一版本或协调协议，例如维护不会随缓存删除一起丢失的版本栅栏，对回填做原子版本校验，或在读写双方都参与的互斥范围中重新读取最新值。只给回填加锁、只比较当前缓存版本、延迟双删，都各有剩余窗口和假设。必须先定义允许多旧、失败多久必须修复，再选择复杂度。'
      ],
      flow: [step('读未命中', 'R 读取数据库 v1，把值保存在自己的调用栈中，尚未写回 Redis。'), step('写事务提交', 'W 将数据库改为 v2，真正提交后才触发失效，避免提前删除又读到未提交前的旧值。'), step('删除缓存', 'W 删除成功并不阻止正在进行的旧读取，删除失败则需要持久化重试。'), step('旧读取回填', 'R 稍后 SET v1，使旧值重新出现；通过时序日志可复现而不是归咎于 Redis 随机错误。'), step('按一致性目标补强', '选择 TTL、可靠失效事件、版本栅栏或读写共同协调，并对失败窗口和延迟建立监控。')],
      example: { language: 'text', code: '初始数据库 user:5 = v1(Lin)，缓存为空\nR: GET user:5 → miss\nR: SELECT → v1；暂停\nW: UPDATE → v2(Chen)；COMMIT 成功\nW: DEL user:5 → 成功\nR: SET user:5 v1 EX 60\n下一位读者: GET user:5 → v1(Lin)', output: '最终数据库为 v2，缓存为 v1，尽管写方严格执行了“提交数据库，再删除缓存”。不一致来自交错时序，而不是某个单独命令没有原子性。', explanation: '这个最小反例是评估方案的基准。加入重试只能补救删除失败，不自动阻止本例中的旧回填；加入锁或版本时，应再次推演同一时序以及进程崩溃情形。' },
      boundaries: ['“先数据库后删除”是常见工程基础策略，不是线性一致性的证明。', '延迟双删的延迟难以覆盖所有慢查询、调度暂停和副本延迟，不能声称完全解决竞态。', '对强一致余额等请求，可直接读取权威存储或采用经过完整定义的协调协议，不能仅依赖缓存存在。'],
      answer: '我采用 Cache Aside 时会明确数据库是事实来源，读取未命中再回源，写入先提交数据库再失效缓存。但这仍可能有旧值回填：早先读到 v1 的请求在 v2 提交和删除之后才回填 v1。删除失败则是另一条故障路径，需要持久化失效事件、幂等重试与监控。TTL 只是陈旧兜底。若一致性要求更高，要设计读写双方共同遵守的版本栅栏或协调协议，并用具体并发与崩溃时序验证，而不只背一个更新顺序。',
      followUps: [qa('为什么不直接把新值写缓存？', '并发写完成顺序可能与数据库提交顺序不同，复杂派生缓存还难以准确更新。删除可减少维护负担，但也必须处理旧回填与删除失败。'), qa('缓存里的版本小才覆盖，大就拒绝，足够吗？', '只比较当前缓存通常不够。缓存被删除后较新版本信息也没了，旧回填可能再次被接受；需要保留可校验的版本栅栏及明确故障、过期和原子校验规则。')],
      checks: [qa('可靠重试删除能单独解决示例中的旧值回填吗？', '不能。示例删除已经成功，旧值在之后写入；还需处理并发回填的版本或协调问题。'), qa('能在 @Transactional 方法中 UPDATE 之后立即删缓存就说“数据库先更新”吗？', '不能。SQL 执行完成与事务提交不同；删除应考虑真正提交后的触发，并另行解决提交到失效之间的失败窗口。')],
      prerequisites: [link('course-spring-transaction', '先区分 SQL 返回与提交'), link('course-mysql-mvcc', '回源可能读到旧快照')], related: [link('course-spring-mapper-cache', '不要混淆 MyBatis 与 Redis 缓存'), link('course-redis-stampede', '再处理大规模未命中的流量问题')],
      conceptIds: ['data-access-transaction', 'data-access-isolation', 'data-access-orm'], readingIds: ['xl-redis-1eadb3e579d8186a', 'xl-redis-182ce876245d9fb8', 'xl-redis-cfbc5165668ba407', 'xl-spring-711c39138646545e'], sourceChapters: ['场景'],
      sources: [ref('Redis：缓存一致性问题', 'https://redis.io/blog/three-ways-to-maintain-cache-consistency/'), ref('Spring：事务事件与提交阶段', spring + 'data-access/transaction/event.html'), ref('MySQL：一致性读的快照', mysql + 'innodb-consistent-read.html')]
    },
    {
      id: 'course-redis-stampede', topicId: 'redis', chapter: '缓存与业务一致性', title: '穿透、击穿与雪崩：保护回源通道',
      intro: '缓存命中率从 99% 下降到 90%，数据库流量可能变成十倍。缓存故障治理的重点，是限制未命中后的总工作量。',
      explanation: [
        '穿透是请求长期查不存在的数据，缓存也总为空，导致每次都回源；击穿通常指热点键失效后大量请求同时重建；雪崩是很多键集中失效或缓存整体不可用，使回源压力成片上升。三者名字相近，触发原因与治理对象不同，必须先判断是非法输入、单热点还是基础设施故障。',
        '不存在的数据可以短 TTL 缓存明确的空标记，但新增数据时要考虑如何使空标记失效。布隆过滤器把元素映射到多个位，查询某位为 0 可判定不在已构建集合中，全部为 1 只代表可能存在，仍需查询权威数据；误判会带来额外回源，正常模型中已正确加入的元素不应被判不存在，但同步遗漏或错误删除会破坏应用保证。',
        '热点重建可以使用请求合并，让少量请求负责回源，其余等待、有界重试或读取允许陈旧的值；拿到重建资格后必须二次检查缓存。TTL 抖动分散同批过期，预热与分批刷新减少冷启动冲击。缓存不可用时需要限流、熔断、隔离和回源预算，不能让所有请求“兜底查库”把数据库也拖垮。'
      ],
      flow: [step('识别模式', '观察不存在键比例、单键 QPS、过期分布、Redis 可用性与数据库压力。'), step('缩减无效请求', '先做参数和权限校验，再按需求用空值缓存或布隆过滤器挡住部分不存在查询。'), step('合并热点回源', '争取有限重建名额，拿到后再查一次缓存，只让必要请求访问数据库。'), step('给故障设置上限', '限制并发回源与等待队列，允许的场景返回旧值或降级，不允许无限排队。')],
      example: { language: 'text', code: '入口 10000 请求/秒\n命中率 99% → 理想情况下约 100 次/秒回源\n命中率 90% → 理想情况下约 1000 次/秒回源\n命中率 0%  → 可能达到 10000 次/秒回源\n\n一个热点键失效：\nR1 得到重建资格 → 二次检查 → 查库 → 回填\nR2...Rn 有界等待或读取允许陈旧的旧副本，不全部查库。', output: '命中率只下降 9 个百分点，回源量却可放大十倍。请求合并降低重复回源，但数据库整体容量仍需独立预算。', explanation: '算式忽略重试和请求分布，实际故障可能更糟。持有重建资格不等于与写方完全一致，旧回填竞态仍需上一课的失效或版本协议处理。' },
      boundaries: ['空值缓存必须与合法的空对象区分，并设合理 TTL，避免长时间挡住后来创建的数据。', '布隆过滤器不能替代数据库唯一约束，也不能直接返回“存在”这个强结论。', '热点重建互斥主要控制流量，不自动提供数据库与缓存的强一致。'],
      answer: '穿透是大量不存在请求，击穿是热点失效导致集中回源，雪崩是大量失效或缓存不可用。治理要保护回源通道：先校验输入，再用短期空值或布隆过滤器减少无效查询；热点用请求合并并在获取资格后二次检查；批量过期用 TTL 抖动和刷新。缓存整体故障时必须有限流、隔离和回源预算，不能让全量流量直接压数据库。还要区分流量保护与缓存一致性，它们不是同一个问题。',
      followUps: [qa('布隆过滤器说可能存在，为什么还要查库？', '多个元素可能把相同位设为 1，全部位命中存在误判，所以只能快速排除一定不在已构建集合中的元素。'), qa('重建锁拿到后为什么再次查缓存？', '等待锁期间别的请求可能已完成回填，二次检查可避免重复查询数据库。')],
      checks: [qa('Redis 故障时所有请求自动查数据库是否是可靠兜底？', '不一定，数据库通常按缓存命中后的流量设计，必须限制回源并按业务提供可接受降级。')],
      prerequisites: [link('course-redis-cache-aside', '先理解正常未命中与回填路径')], related: [link('course-redis-rate-limit', '给入口和回源设置速率预算')],
      conceptIds: ['concurrency-executor-rejection', 'data-access-connection-pool'], readingIds: ['xl-redis-2b969312c8856890', 'xl-redis-4c5909b40e739401', 'xl-redis-bb8f89acd749f469', 'xl-redis-db75b6cda9db48d6'], sourceChapters: ['场景'],
      sources: [ref('Redis：布隆过滤器', redis + 'develop/data-types/probabilistic/bloom-filter/'), ref('Redis：键淘汰与缓存', redis + 'develop/reference/eviction/')]
    },
    {
      id: 'course-redis-lock', topicId: 'redis', chapter: '缓存与业务一致性', title: '分布式锁：所有权、租约与过期后的旧持有者',
      intro: '给锁加过期时间可以避免进程崩溃后永久占用，却带来另一个问题：业务还没完成，锁已过期，第二个执行者进来了。',
      explanation: [
        '单实例常见获取方式是 SET lock:key token NX PX ttl，使用唯一 token 标识本次持有者，NX 保证不存在才设置，过期防止永久占用。不能把 SETNX 与 EXPIRE 分成两个独立步骤，否则中间崩溃可能留下无期限锁。释放必须原子比较 token 再删除，避免旧持有者误删新持有者的锁。',
        '租约到期并不会停止原业务线程。A 因长 GC 或网络暂停超过 TTL，B 获得新锁后开始执行，A 恢复仍可能向数据库写入。自动续约能降低意外到期概率，但续约也会失败，不能作为绝对互斥证明。对不能容忍旧持有者写入的资源，可以使用单调递增的 fencing token，由下游存储拒绝旧序号；普通随机所有权 token 本身没有这个顺序能力。',
        '异步主从还带来切换窗口：主节点刚授予 A 锁、尚未复制就故障，新主可能再次给 B 授锁。多节点算法也有时间、网络与故障模型假设，不能把某个锁库名称等同于任何场景都安全。对防重复扣款等关键不变量，优先让数据库条件、唯一约束或下游版本校验承担最终防线，锁只负责减少竞争。'
      ],
      flow: [step('原子获取', '用 NX 与过期在一次 SET 中设置唯一所有权 token，失败则按策略等待或退出。'), step('执行业务', '在租约预算内工作，必要时续约，并把锁丢失作为可发生事件处理。'), step('保护下游', '重要写入携带版本或 fencing 序号，让下游拒绝迟到旧持有者。'), step('比较后释放', '用脚本在一次原子操作中核对 token，只删除自己仍然拥有的锁。')],
      example: { language: 'lua', code: '-- 释放锁脚本：KEYS[1] 为锁键，ARGV[1] 为本次随机 token\nif redis.call("GET", KEYS[1]) == ARGV[1] then\n  return redis.call("DEL", KEYS[1])\nend\nreturn 0\n\n-- 获取示意：SET lock:order:7 unique-token-A NX PX 10000', output: '锁仍由 A 持有时返回 1 并删除；锁已过期或被 B 重新获得时返回 0，不会删除 B 的锁。', explanation: '比较和删除必须在一次服务端原子操作中执行，GET 后在客户端判断再 DEL 仍有竞争窗口。该脚本防误删，但不能阻止 A 在失去锁后继续写数据库。' },
      boundaries: ['随机 token 证明“是我”，fencing token 还表达“我的任期比谁新”，二者不能互相替代。', '锁键的 TTL、续约、重试与等待队列都需要容量限制，不能在失败时无限抢锁。', 'Redis 锁不能自动让 Redis 与 MySQL 成为同一个事务。'],
      answer: 'Redis 锁至少要原子获取、设置租约、唯一标识所有权，并在释放时原子比较 token 再删除。但租约过期不会停止旧线程，续约也可能失败，所以关键写入还要由下游版本或 fencing token 拒绝旧持有者。异步复制切换可能丢失锁记录，也必须纳入故障模型。我通常让唯一约束、条件更新等守住最终业务不变量，把锁当减少竞争的工具，而不是仅凭拿到锁就宣布全链路绝对安全。',
      followUps: [qa('把 TTL 设置一天是否解决业务超时？', '只是减少到期概率，却让崩溃后的资源长时间不可用，仍不能消除暂停或分区。应基于时长预算、续约失败和下游校验设计。'), qa('A 释放时发现 token 不同，说明什么？', '它已经不拥有该锁，不能删除当前锁；还应检查此前业务是否在丢锁后继续执行，必要时由下游校验拒绝结果。')],
      checks: [qa('比较 token 再释放能防止租约过期后的双执行吗？', '不能，它防止误删别人的锁；双执行风险需要租约失效处理和下游不变量保护。')],
      prerequisites: [link('course-redis-atomic', '需要比较删除的原子操作'), link('course-redis-cluster', '理解复制切换的锁丢失窗口')], related: [link('course-mysql-stock', '数据库条件是关键业务的最终防线')],
      conceptIds: ['concurrency-reentrant-lock', 'data-access-transaction'], readingIds: ['xl-redis-d6b52c356a3bba56', 'xl-redis-0cfb63ab85652d2e', 'xl-redis-8e36d1d81f8d2507'], sourceChapters: ['场景'],
      sources: [ref('Redis：分布式锁模式与安全假设', redis + 'develop/clients/patterns/distributed-locks/')]
    },
    {
      id: 'course-redis-operations', topicId: 'redis', chapter: '缓存与业务一致性', title: '大键、热键与慢请求：从延迟证据定位',
      intro: '一个键只有几字节也能是热键；一个很少访问的集合也能是大键。容量和访问集中度是两条不同的诊断轴。',
      explanation: [
        '大键通常指单值字节大或集合元素过多，可能放大网络传输、序列化、删除与迁移成本；热键是访问高度集中，可能把某节点或客户端连接打满。Cluster 按键分片，一个热键不会因为增加许多其他分片就自然被均匀拆开。应分别观察键大小、元素数与每键请求分布。',
        'KEYS 遍历整个键空间，数据多时会占用处理路径；SCAN 通过游标分批迭代，降低单次阻塞，但不是某时刻的完整快照。完整迭代对持续存在的元素有其保证，期间新增删除的结果不确定，可能返回重复，也可能一批为空但游标未结束。COUNT 是工作量提示，不是严格每批条数，客户端要去重并直到游标回到 0。',
        '诊断端到端延迟应拆成客户端队列、连接池、网络、服务端命令执行、响应传输与反序列化。SLOWLOG 主要反映命令执行时间，不包含完整网络往返，所以“慢日志没有慢命令”不能证明 Redis 调用没慢。还要看长脚本、大范围命令、fork、AOF I/O、内存换页、淘汰和输出缓冲等证据，再选择拆键、有界读取、本地热点副本或异步释放。'
      ],
      flow: [step('采样请求', '记录客户端总耗时、命令类型、结果字节数和目标节点，避免只看平均值。'), step('查服务端证据', '关联 SLOWLOG、延迟监控、内存和持久化指标，判断执行慢还是排队与传输慢。'), step('定位键特征', '用受控 SCAN 和类型对应的长度、内存命令抽样，区分大键与热键。'), step('调整访问形态', '拆分不受控大集合、分页读取、限制响应体，热点适当本地缓存并明确失效策略。')],
      example: { language: 'redis', code: '# 只读诊断示例；权限与实例配置可能限制命令\nSLOWLOG GET 10\nINFO commandstats\nSCAN 0 MATCH user:* COUNT 100\nMEMORY USAGE user:5\n# 后续 SCAN 使用上次返回的 cursor，直到 cursor=0；不要固定只查一页。', output: 'SCAN 可能返回少于或多于 100 个匹配项，也可能返回空列表但游标仍非 0。完整诊断需持续迭代、限速并处理重复键。', explanation: '命令展示观察方法，不应把全量扫描频繁运行在繁忙实例上。针对 String、Hash、List 等应再使用合适的长度或抽样方法，避免为了查大键反而整键拉取。' },
      boundaries: ['UNLINK 等异步释放手段可以降低部分删除阻塞，但并不消除内存回收的总成本。', '本地缓存减少热键请求，也引入每实例副本失效与内存成本。', '性能数值必须附带硬件、数据、连接、持久化和命令分布，不能给单节点固定万能 QPS。'],
      answer: '我先分大键和热键：大键是单键体积或元素多，热键是访问集中，两者可独立出现。慢请求要拆客户端等待、网络、执行和返回成本，SLOWLOG 只覆盖其中一部分。扫描键空间用受控 SCAN，记住它不是快照，可能重复，COUNT 也不是精确条数。定位后再选择拆键、有界读取、异步删除或本地热点缓存，并验证新方案的失效与容量代价。',
      followUps: [qa('增加 Cluster 分片为什么可能不改善热键？', '一个普通键仍归一个槽和对应节点，访问不会自动拆到所有分片。需要改变访问模型或增加读侧缓存等。'), qa('SCAN 遍历中能否把重复键当数据库重复记录？', '不能。迭代允许重复，客户端需要按任务去重或设计幂等处理。')],
      checks: [qa('SLOWLOG 很干净而接口仍慢，下一步查什么？', '查连接池与客户端队列、网络 RTT、响应大小与反序列化、输出缓冲，以及请求是否真正发到了所观察节点。')],
      prerequisites: [link('course-redis-io', '区分命令执行与网络等待')], related: [link('course-redis-stampede', '诊断热点失效带来的回源压力')],
      conceptIds: ['engineering-debugging', 'concurrency-executor-sizing'], readingIds: ['xl-redis-f865154da3813ed5', 'xl-redis-88aa2877b3e73fd7', 'xl-redis-66fe980b74478da7', 'xl-redis-bb8f89acd749f469', 'xl-redis-638b3bf77f2f59dc'], sourceChapters: ['场景'],
      sources: [ref('Redis：SCAN 保证与限制', redis + 'commands/scan/'), ref('Redis：延迟诊断', redis + 'operate/oss_and_stack/management/optimization/latency/'), ref('Redis：SLOWLOG', redis + 'commands/slowlog/')]
    },
    {
      id: 'course-redis-streams', topicId: 'redis', chapter: '消息与流量控制', title: 'Stream 消费组：读到、处理完与确认是三件事',
      intro: '消费者拿到消息后进程崩溃，系统怎样知道还欠一次处理？Stream 消费组用待确认记录追踪交付，但业务幂等仍由应用负责。',
      explanation: [
        'Stream 保存带 ID 的条目，消费组维护组内消费进度和 pending entries。XREADGROUP 把消息交给消费者后，未确认条目留在待处理记录中；XACK 表示消费者声明处理完成，清理相应 pending 状态。确认不是删除 Stream 数据本身，也不是自动证明外部数据库已经提交。',
        '消费者宕机后，其他消费者可检查 pending，并通过 XAUTOCLAIM 等机制接管超过空闲时间的消息。空闲时间只是恢复线索，不是原消费者绝对死亡的证明：原消费者也可能在慢任务或暂停中，接管会带来重复执行。需要业务幂等键、处理记录或数据库唯一约束，让重复交付不会重复扣款或重复落单。',
        '如果先 XACK 再做业务，之后崩溃会留下“已确认但没完成”的丢失；如果先提交业务再 XACK，之间崩溃会造成重投，但可以通过幂等化处理。可靠性设计通常选择可重试的后一类窗口，并监控 pending 数量、最长等待、重试次数和坏消息隔离。日志持久化、复制与裁剪策略也会影响消息是否还可恢复。'
      ],
      flow: [step('写入条目', '生产者 XADD，业务消息携带稳定订单号或事件号。'), step('组内交付', 'XREADGROUP 向消费者分配条目并形成 pending 记录。'), step('幂等处理', '在业务数据库确认事件尚未处理，完成业务效果并提交。'), step('确认与恢复', '成功后 XACK；宕机残留由其他消费者在合适空闲阈值后接管，重复时返回已有结果。')],
      example: { language: 'redis', code: '# 空实验键上执行；自动生成的消息 ID 在后续确认时原样使用\nXGROUP CREATE demo:events workers 0 MKSTREAM\nXADD demo:events * event_id E7 order_id O7\nXREADGROUP GROUP workers c1 COUNT 1 STREAMS demo:events >\nXPENDING demo:events workers\n# 假设 c1 超过 60 秒未确认，由 c2 接管\nXAUTOCLAIM demo:events workers c2 60000 0-0 COUNT 10\n# 业务处理成功后：XACK demo:events workers <实际消息ID>', output: '读取后 pending 增加，尚未 ACK 的消息可在满足空闲时间条件后被接管。XACK 后该组对应 pending 被移除，Stream 条目仍可能保留。', explanation: '示例明确要求等待真实空闲阈值，立即执行 XAUTOCLAIM 不应期待一定拿到消息。Redis 6.2+ 支持该命令，具体返回格式需按部署版本处理。' },
      boundaries: ['消费组不自动提供跨 Redis 与业务数据库的 exactly-once 效果。', '裁剪 Stream 时要考虑慢消费者与 pending，不能只控制长度而忽略尚需处理的数据。', '坏消息需要有界重试与隔离通道，不能让一个永久失败任务无限占用恢复流程。'],
      answer: 'Stream 消费组把已交付未确认消息放入 pending，读取、业务完成和 XACK 是三个时间点。消费者宕机后可用 pending 与 XAUTOCLAIM 恢复，但慢消费者也可能被接管，所以业务必须幂等。通常先完成并提交业务再确认，这样崩溃窗口造成的是可去重的重复，而不是先确认后的丢失。还要监控 pending、重试与裁剪，并结合 Redis 持久化和复制判断真正的恢复保证。',
      followUps: [qa('XACK 会把消息从所有消费者组里删除吗？', '不会。它确认指定消费组的 pending 记录，Stream 条目和其他组的处理状态是另一回事。'), qa('接管后原消费者恢复并继续处理怎么办？', '依靠业务幂等记录或条件更新防止副作用重复，不能把空闲超时当成旧消费者已被强制终止。')],
      checks: [qa('数据库已提交但 ACK 前崩溃，恢复时应如何处理？', '消息可能再次交付，消费者通过稳定事件号发现已处理，返回已有结果并完成确认。')],
      prerequisites: [link('course-redis-persistence', '消息是否保留还依赖持久化'), link('course-mysql-schema', '数据库唯一约束支持幂等处理')], related: [link('course-redis-cluster', '复制切换影响消息保留')],
      conceptIds: ['data-access-transaction', 'concurrency-executor-lifecycle'], readingIds: ['xl-redis-39adcb7153db2ab7', 'xl-redis-1f34e4351f8bf656'], sourceChapters: ['场景'],
      sources: [ref('Redis：XREADGROUP', redis + 'commands/xreadgroup/'), ref('Redis：XACK', redis + 'commands/xack/'), ref('Redis：XAUTOCLAIM', redis + 'commands/xautoclaim/')]
    },
    {
      id: 'course-redis-rate-limit', topicId: 'redis', chapter: '消息与流量控制', title: '限流与秒杀：控制进入量，再保护最终库存',
      intro: '一万个请求争一百件商品，Redis 可以提前挡掉大部分流量，但“通过限流”和“下单成功”仍是不同状态。',
      explanation: [
        '固定窗口计数把请求按时间桶归类，在一个桶内超过额度就拒绝，结构简单，但窗口边界两侧可短时聚集两倍额度。滑动窗口按时间范围统计，更平滑但可能需要更多存储与清理；令牌桶按速率补充令牌并允许有限突发，漏桶更强调稳定输出。应先确定是限制平均速率、瞬时并发还是突发大小。',
        '用 Redis 做固定窗口时，INCR 和首次设置过期应在同一脚本中完成，避免两条命令之间崩溃留下永久计数键。限制维度可按用户、IP、接口或租户组合，但选择错误可能误伤共享出口用户或被换 ID 绕过。分布式限流还要定义 Redis 故障时放行还是拒绝，并把选择与业务损失联系起来。',
        '秒杀需要多道边界：入口限流保护容量，Redis 条件预扣减少回源，排队削峰，数据库条件更新和订单唯一约束守住最终事实。预扣后进程故障、消息失败、支付超时都可能让预扣与实际订单分离，必须有状态机、幂等重试和补偿核对。前端显示“排队中”比把预扣成功立即宣称付款订单完成更准确。'
      ],
      flow: [step('定义流量契约', '明确每个用户每分钟允许多少次，以及是否允许短时突发。'), step('原子计数', '在脚本里递增并在首次计数时设置 TTL，返回允许或拒绝。'), step('分离业务阶段', '通过限流后才进入库存预留与排队，生成稳定请求 ID。'), step('最终落库核对', '数据库条件扣减、唯一订单与状态流转完成后才确认业务成功，失败按状态补偿。')],
      example: { language: 'lua', code: '-- 固定窗口示意；KEYS[1] 含服务端确定的分钟桶\n-- ARGV[1]=额度，ARGV[2]=保留秒数，调用前校验为正整数\nlocal n = redis.call("INCR", KEYS[1])\nif n == 1 then\n  redis.call("EXPIRE", KEYS[1], tonumber(ARGV[2]))\nend\nif n > tonumber(ARGV[1]) then return 0 end\nreturn 1\n-- 同一新桶额度=3，连续调用四次：1, 1, 1, 0', output: '同一窗口前 3 次放行，第 4 次拒绝；进入新桶会重新计数，因此窗口边界附近仍可能出现短时突发。', explanation: '这是固定窗口算法片段，不是完整网关实现。键名应由受信服务按统一时间和维度构造，参数必须预先验证，不能让客户端随意换桶或提高额度。' },
      boundaries: ['限流器返回 1 仅代表准入，不代表库存扣减、订单提交或支付成功。', '脚本原子计数不消除复制切换丢失计数的可能，严格配额要明确更强的持久性要求。', '库存补偿不能无条件加回；应根据稳定预留 ID 的状态原子地执行一次，防止重复补偿增加库存。'],
      answer: '限流先要定义维度和目标，固定窗口简单但边界会突发，滑动窗口与令牌桶分别用不同成本改善时间分布。Redis 计数和首次设置 TTL 应原子完成，并明确故障时的放行策略。秒杀中限流只负责准入，预扣只代表预留，最终订单还需数据库条件更新与唯一约束。跨阶段失败要靠状态机、幂等和补偿核对，不能把一个 Lua 返回成功当成整笔交易成功。',
      followUps: [qa('一秒限制 100 次，为什么边界附近能短时通过 200 次？', '前一秒末尾通过 100 次，下一秒开始又有 100 次额度，固定窗口并未约束任意滑动的一秒区间。'), qa('收到两次超时补偿消息可以直接 INCR 两次吗？', '不能。应按预留 ID 检查状态，只有从已预留转为取消的一次状态变更才归还库存，重复消息返回已有结果。')],
      checks: [qa('Redis 预扣成功，但订单一直没创建，应盯哪个指标？', '监控预留到落单的时间、未完成预留数量、消息积压与补偿失败，并按状态核对，不能只看 Redis 扣减成功率。')],
      prerequisites: [link('course-redis-atomic', '限流脚本需要原子条件'), link('course-mysql-stock', '数据库保护最终库存')], related: [link('course-redis-streams', '排队后的确认与重试'), link('course-redis-stampede', '回源通道也要有容量预算')],
      conceptIds: ['concurrency-executor-rejection', 'data-access-transaction'], readingIds: ['xl-redis-fb118fb3a337bb75', 'xl-redis-32c4523ceee90cad', 'xl-redis-a7a92de8003a3356'], sourceChapters: ['场景'],
      sources: [ref('Redis：INCR 计数与限流模式', redis + 'commands/incr/'), ref('Redis：Lua 脚本', redis + 'develop/programmability/eval-intro/')]
    }
  ];
}));
