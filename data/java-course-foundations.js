(function (root, factory) {
  const courses = factory();
  if (typeof module === 'object' && module.exports) module.exports = courses;
  else (root.JAVA_COURSE_PARTS ||= []).push(courses);
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Independently authored teaching. Java 17 is the baseline; newer features are labeled.
  const api = (path, title) => ({ title: 'Java 17 API · ' + title, url: 'https://docs.oracle.com/en/java/javase/17/docs/api/' + path + '.html' });
  const jls = (chapter, section, title) => ({ title: 'JLS 17 · ' + title, url: 'https://docs.oracle.com/javase/specs/jls/se17/html/jls-' + chapter + '.html#jls-' + section });
  const src = (title, url) => ({ title, url });
  const steps = pairs => pairs.map(([title, text]) => ({ title, text }));
  const qa = pairs => pairs.map(([question, answer]) => ({ question, answer }));
  const links = pairs => pairs.map(([id, why]) => ({ id, why }));
  const example = (code, output, explanation, language = 'java') => ({ language, code, output, explanation });
  const S = {
    object: api('java.base/java/lang/Object', 'Object'),
    hash: api('java.base/java/util/HashMap', 'HashMap'),
    hashSource: src('OpenJDK 17u · HashMap 源码', 'https://github.com/openjdk/jdk17u/blob/master/src/java.base/share/classes/java/util/HashMap.java'),
    chm: api('java.base/java/util/concurrent/ConcurrentHashMap', 'ConcurrentHashMap'),
    jmm: jls(17, '17.4.5', 'happens-before'),
    thread: api('java.base/java/lang/Thread', 'Thread'),
    pool: api('java.base/java/util/concurrent/ThreadPoolExecutor', 'ThreadPoolExecutor'),
    future: api('java.base/java/util/concurrent/CompletableFuture', 'CompletableFuture'),
    vm: src('JVMS 17 · 运行时结构', 'https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-2.html'),
    loading: src('JVMS 17 · 加载、链接与初始化', 'https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html'),
    g1: src('HotSpot 17 · G1 收集器', 'https://docs.oracle.com/en/java/javase/17/gctuning/garbage-first-g1-garbage-collector1.html'),
    jcmd: src('JDK 17 · jcmd', 'https://docs.oracle.com/en/java/javase/17/docs/specs/man/jcmd.html'),
    algorithms: src('Princeton Algorithms · 作者维护的教材配套实现', 'https://github.com/kevin-wayne/algs4'),
  };

  return [
    {
      id: 'course-java-execution', topicId: 'java', chapter: '语言如何运行', title: '从源文件到运行中的 Java 程序',
      intro: '同一份 .class 为什么能在 Windows 和 Linux 运行，而一个错误的 JDK 版本仍会让程序启动失败？',
      explanation: [
        'Java 源文件先经过 javac 的语法、类型检查并生成 class 文件。class 保存字节码和类的结构，不是直接交给 CPU 的某种平台机器码。运行时由具体平台上的 JVM 加载、验证并执行它。因此可移植的是符合规范的程序和字节码约定，操作系统、处理器及本地库的差异由运行时实现承担。',
        'JVM 是执行抽象机器的实现；JDK 还提供 javac、javap、jcmd 等开发诊断工具和运行库。JRE 常被用来指运行环境这一概念，现代发行版怎样打包运行时不能只沿用旧的独立 JRE 安装包印象。HotSpot 通常先解释部分代码，收集执行信息，再把热点编译成机器码；预热、编译和垃圾回收都可能影响服务的延迟。',
        '跨平台也有边界：class 文件版本、依赖库、默认编码、文件路径、本地方法都可能限制部署。用 --release 17 编译，是同时约束语言、目标 class 版本和公开 API；只把文件后缀改成 .class 并不会获得兼容性。'
      ],
      flow: steps([['编译', 'javac 读取源码和依赖，做类型检查，输出 class；编译失败时还没有进入 main。'], ['加载与验证', 'JVM 找到入口类，加载所需类并检查字节码结构，按需完成链接和初始化。'], ['调用 main', '主线程创建栈帧，执行方法，按需分配对象、调用其他方法。'], ['运行期优化', '热点可能被 JIT 编译；优化依赖假设失效时可回到解释或重新编译。']]),
      example: example('/* 保存为 Hello.java */\npublic class Hello {\n  public static void main(String[] args) {\n    System.out.println("hello " + args[0]);\n  }\n}\n// 命令：javac --release 17 Hello.java\n// 命令：java Hello Java\n// 命令：javap -c Hello', 'java Hello Java 输出 hello Java。javap -c 显示 main 的字节码指令；具体字符串拼接指令由编译器版本决定。', 'javac 的产物是 Hello.class；java 接收类名 Hello，而不是 Hello.java 的编译命令。args[0] 来自命令行参数，未传参数会在执行 main 后抛出数组越界异常。'),
      boundaries: ['Java 17 class 通常不能由更旧的 JVM 执行；向新版本运行时迁移也要验证依赖和行为兼容性。', 'JIT 是常见 JVM 实现策略，不能把“每个方法必定先解释固定次数”当语言规范。'],
      answer: '我把 Java 的执行分为源码编译与运行期执行。javac 生成平台无关的 class，目标平台上的 JVM 再加载、验证和执行。JDK 包含开发工具及运行环境；HotSpot 可用解释器快速启动，再由 JIT 优化热点。跨平台仍受 class 版本、API 和本地依赖限制，部署时需要明确编译目标和运行 JDK。',
      followUps: qa([['为什么启动后第一次请求常更慢？', '类加载、类初始化、连接建立和 JIT 预热都可能参与，必须用启动日志和性能记录判断，不能一概归因于 JIT。'], ['--release 与只设置目标版本有什么区别？', '--release 同时限制指定版本的语言、class 格式和受支持 API，能避免编出旧格式却调用新 API 的代码。']]),
      checks: qa([['找不到 main 属于编译阶段还是启动阶段？', '一个普通类可以没有 main 并成功编译；以它作为应用入口启动时才会失败。']]),
      prerequisites: [], related: links([['jvm-execution-pipeline', '继续追踪解释器、JIT 与字节码。']]), conceptIds: ['jvm-execution-pipeline', 'jvm-bytecode'], readingIds: ['xl-java-9ed0a0fc525d94d2', 'xl-java-112552792d8b7b92', 'xl-java-f771737dc5225814'], sourceChapters: ['概念'], sources: [S.vm, src('JDK 17 · javac --release', 'https://docs.oracle.com/en/java/javase/17/docs/specs/man/javac.html')]
    },
    {
      id: 'course-java-reference-call', topicId: 'java', chapter: '值、对象与调用', title: '对象先创建，方法调用再复制参数值',
      intro: '方法改了 user.name，调用方能看到；方法把 user 换成 new User，调用方却没换。两次操作究竟改的是哪里？',
      explanation: [
        '变量和对象是两层东西。new User("Lin") 创建对象并运行构造器，表达式的结果是引用值；局部变量 user 保存这个值。另一个变量赋值为 user，只复制引用值，于是两个变量可访问同一对象。引用不是可以由 Java 程序任意运算的裸内存地址，画图时把它看成通往对象的连接更准确。',
        '调用方法会先求出实参值，再把这些值复制到新栈帧的形参中。基本类型复制数字或布尔值，引用类型复制引用值。形参 p 和调用方 user 是两个变量，却暂时指向同一对象。p.name 的赋值修改共享对象；p = new User(...) 只修改方法里的 p，调用方的 user 完全没有被重新赋值。',
        '对象准备和业务调用也应分开追踪。构造器可以接收依赖、校验数据并建立初始状态；普通方法随后借助这些已存在的对象执行业务。框架在启动时创建 Service，不意味着启动时就执行了每一次查询请求。'
      ],
      flow: steps([['创建', 'new 分配并初始化 User，构造器保存 name；main 的 user 得到引用。'], ['传参', 'edit(user, count) 为 p 和 n 分别复制引用值、整数值。'], ['修改与重绑定', '先经 p 修改原对象，再令 p 指向新对象；两个操作的目标不同。'], ['返回', 'edit 的局部变量退出调用；main 仍持有原对象和原整数值。']]),
      example: example('public class PassDemo {\n  static class User {\n    String name;\n    User(String name) { this.name = name; }\n  }\n  static void edit(User p, int n) {\n    p.name = "Chen";\n    p = new User("Wang");\n    n = 99;\n  }\n  public static void main(String[] args) {\n    User user = new User("Lin");\n    int count = 3;\n    edit(user, count);\n    System.out.println(user.name + ":" + count);\n  }\n}', 'Chen:3', '原 User 的 name 被改为 Chen；新建的 Wang 对象没有返回也没有存入其他可达位置。形参 n 的修改不会反向修改 count。这同时说明 Java 始终按值传递，不能由“对象被修改”推出按引用传递。'),
      boundaries: ['给形参加 final 只限制形参重新赋值，仍可修改它指向的可变对象。', '作用域结束不等于对象立即回收；其他引用仍可保持对象可达，回收时机由运行时决定。'],
      answer: 'Java 只有值传递。调用时把实参值复制给形参，引用类型复制的也是引用值，因此两边可能访问同一对象。方法修改对象字段，调用方能看到；方法给形参重新赋值，只换了自己的副本，不能替换调用方变量。创建对象发生在 new 和构造器执行阶段，随后调用方法是另一条执行过程。',
      followUps: qa([['能写 void swap(User a, User b) 交换调用方两个变量吗？', '只交换形参不能。可以返回包含两个引用的结果，让调用方重新赋值，或修改调用方明确传入的可变容器。'], ['返回一个局部变量指向的对象会失效吗？', '不会。返回的引用值由调用方接收，对象只要仍可达就可继续使用，局部变量的栈帧结束不销毁该对象。']]),
      checks: qa([['在 edit 里先 p = new User("Wang")，再 p.name = "Chen"，主程序输出什么？', 'Lin:3，因为两个操作都只影响新对象及局部形参。']]),
      prerequisites: links([['language-types', '先分清基本类型和引用类型。']]), related: links([['web-spring-di', '用对象准备与调用的区分理解依赖注入。'], ['course-jvm-loading', '继续追踪创建前的类初始化。']]), conceptIds: ['language-references', 'language-pass-by-value', 'oop-classes', 'jvm-heap'], readingIds: ['xl-java-a1aba84b7b64c7cb', 'xl-java-00d1445912836dc1', 'xl-java-aeea6529c0ec99ad'], sourceChapters: ['概念', '对象'], sources: [jls(15, '15.12.4.5', '调用帧与参数值'), jls(15, '15.9.4', '创建实例的运行期求值')]
    },
    {
      id: 'course-java-numbers', topicId: 'java', chapter: '值、对象与调用', title: '整数、包装类型与金额精度',
      intro: '为什么 long total = price * count 仍可能溢出，而 0.1 + 0.2 又不等于预想的小数？',
      explanation: [
        '数值表达式先按操作数的类型求值，再转换到赋值目标。两个 int 相乘得到的仍是 int；若这一步溢出，赋给 long 只是扩大已经错误的结果。byte、short、char 在多数算术表达式中会提升为 int；扩大到浮点类型也可能损失整数精度。char 保存 UTF-16 代码单元，并不代表任意完整 Unicode 字符。',
        'Integer 等包装类型让基本数值参与泛型和对象 API，但增加了 null 这一状态。拆箱实际要从对象取出数值，null 会导致 NullPointerException。包装对象之间用 == 比较身份，装箱缓存只解释某些身份相同的现象，不能成为值比较方案。',
        'double 使用二进制浮点表示，不适合直接表达要求精确十进制规则的账务金额。BigDecimal 从字符串或受控的十进制输入构造，并明确 scale 和 RoundingMode；它不是自动替你决定币种精度或舍入制度。equals 还比较 scale，数值大小判断通常使用 compareTo。'
      ],
      flow: steps([['确定范围', '用最大金额、数量和中间结果判断 int、long 或任意精度是否足够。'], ['提前提升', '在乘法之前把一个操作数转为 long，或使用 Math.multiplyExact 及时发现溢出。'], ['界定缺失', '包装值允许 null 时先处理缺失，避免隐式拆箱。'], ['定义十进制规则', '从字符串构造 BigDecimal，并在除法、结算等明确边界选择舍入。']]),
      example: example('// JShell 可直接执行；或放入 main 并导入 java.math.*\nint price = 1_500_000_000;\nSystem.out.println((long) price * 2);\nSystem.out.println(0.1 + 0.2);\nvar amount = new java.math.BigDecimal("0.1")\n    .add(new java.math.BigDecimal("0.2"));\nSystem.out.println(amount);\nSystem.out.println(new java.math.BigDecimal("1.0")\n    .equals(new java.math.BigDecimal("1.00")));\nSystem.out.println(new java.math.BigDecimal("1.0")\n    .compareTo(new java.math.BigDecimal("1.00")));', '3000000000\n0.30000000000000004\n0.3\nfalse\n0', '强转发生在乘法之前；十进制字符串避免先经历 double 近似值。1.0 和 1.00 数值相等，但 BigDecimal 的表示精度不同。'),
      boundaries: ['BigDecimal 并不保证所有除法有限结束；1 除以 3 若未提供合适舍入规则会抛异常。', 'int 固定为 32 位、long 为 64 位，与运行系统是 32 位还是 64 位无关。'],
      answer: '我先看数值范围与运算发生的类型，不能以最终变量是 long 判断中间结果安全。包装类型服务于泛型、对象接口和可空语义，拆箱前要处理 null，值比较不用身份缓存。对金额使用明确的十进制表示和舍入规则，例如字符串构造 BigDecimal，并区分 equals 的表示相等和 compareTo 的数值相等。',
      followUps: qa([['为什么 new BigDecimal(0.1) 不推荐用于表达十进制 0.1？', 'double 参数已经是二进制近似值，构造器忠实保留该值，不能恢复原始十进制意图。'], ['既然有 Integer，为什么保留 int？', 'int 的运算和存储语义直接，无 null 和装箱开销；Integer 提供对象语义，两者解决不同需求。']]),
      checks: qa([['long x = 2_000_000_000 * 2 的问题在哪里？', '右边先按 int 运算并溢出，随后才转换。可写 2_000_000_000L * 2。']]),
      prerequisites: links([['language-types', '数值运算建立在静态类型上。']]), related: links([['language-boxing', '理解自动装箱和拆箱。']]), conceptIds: ['language-primitives', 'language-conversions', 'language-boxing', 'language-text'], readingIds: ['xl-java-cc5fbc84faa87441', 'xl-java-e44aa3c11baded20', 'xl-java-8dfea3b5881a420d', 'xl-java-726d584888a1928c'], sourceChapters: ['数据类型'], sources: [jls(5, '5.6', '数值提升'), api('java.base/java/math/BigDecimal', 'BigDecimal')]
    },
    {
      id: 'course-java-polymorphism', topicId: 'java', chapter: '对象如何合作', title: '封装、接口与动态分派怎样减少修改范围',
      intro: '新增一种折扣方式时，为什么依赖 Discount 接口的结算逻辑可以保持不变？',
      explanation: [
        '封装的重点是维护不变量，而不只是把字段改成 private。例如账户余额不能随意写入负数，应通过验证过的行为改变它。接口则把调用方需要的能力和某个具体实现分开：结算只需要“根据原价计算应付金额”，不必知道优惠券或会员规则的内部数据。',
        '重载与重写发生在不同阶段。编译器根据实参的静态类型选择重载签名；运行时再根据接收对象的实际类型选择该实例方法的重写实现。把父类变量指向子类对象不会让所有重载选择也自动改成子类版本。static 方法不按实例的动态类型分派。',
        '抽象类适合共享受控状态、构造流程和部分实现，接口适合表达跨类的能力契约。Java 17 接口可有抽象、default、static 和 private 方法，但没有实例构造器。继承需要满足可替换性；仅为复用一段逻辑，组合和委托通常更容易保持边界。'
      ],
      flow: steps([['定义契约', 'Discount 接口规定输入原价、返回应付金额，统一金额单位。'], ['选择对象', '调用前创建具体策略对象并交给结算方，选择发生在组装阶段。'], ['编译调用', '编译器确认接口有 apply(int) 方法，检查入参和返回类型。'], ['动态分派', '执行时找到当前策略对象的实现，以同一调用入口完成不同业务规则。']]),
      example: example('public class PricingDemo {\n  interface Discount { int apply(int cents); }\n  static class Member implements Discount {\n    public int apply(int cents) { return cents * 9 / 10; }\n  }\n  static int checkout(Discount rule, int cents) {\n    if (cents < 0) throw new IllegalArgumentException();\n    return rule.apply(cents);\n  }\n  public static void main(String[] args) {\n    Discount rule = new Member();\n    System.out.println(checkout(rule, 1000));\n  }\n}', '900', 'Member 对象在 checkout 之前已经创建。checkout 的形参类型是接口，执行 apply 时分派到 Member。示例金额是整数分，仅演示结构；生产计算还须处理溢出和舍入。'),
      boundaries: ['字段访问、静态方法隐藏和实例方法重写的规则不同，不能统称为多态。', '抽象类不能直接实例化，也不能同时 final；它的构造器仍会在具体子类实例的构造链中执行。'],
      answer: '封装让对象自己维护合法状态，接口把调用需求与实现分离，多态使同一调用入口运行不同实现。重载在编译期按静态类型决定签名，重写在运行期按对象实际类型分派。抽象类承载共享状态和部分实现，接口定义能力；我会优先围绕可替换契约设计，并用组合减少不必要的继承关系。',
      followUps: qa([['接口有 default 方法后是否等同于抽象类？', '不等同。接口仍没有实例字段和构造链，也支持类实现多个接口；默认实现还需处理继承冲突。'], ['如何判断继承是否合理？', '子类应能出现在父类承诺的使用场景里，不加强前置条件或破坏结果契约；否则更适合组合。']]),
      checks: qa([['把 Discount rule 改成 Member rule，会改变 Member.apply 的执行吗？', '这个调用仍执行 Member.apply；静态变量类型主要影响编译期可用成员与重载选择。']]),
      prerequisites: links([['course-java-reference-call', '先分清对象创建与方法调用。']]), related: links([['course-java-patterns', '将这些边界应用到策略、代理和责任链。']]), conceptIds: ['oop-encapsulation', 'oop-polymorphism', 'oop-interfaces', 'oop-abstract', 'oop-composition'], readingIds: ['xl-java-0c3a8078607c1372', 'xl-java-ef8040e5e0216332', 'xl-java-f55ad5a895dd6aa9', 'xl-java-669ab1e2a01d357e'], sourceChapters: ['面向对象'], sources: [jls(15, '15.12', '方法调用'), jls(9, '9.4', '接口方法')]
    },
    {
      id: 'course-java-final-static', topicId: 'java', chapter: '值、对象与调用', title: 'final 固定什么，static 又共享什么',
      intro: 'final List 仍能 add，static 计数器却被所有实例一起修改：这两个关键字分别约束了什么？',
      explanation: [
        'final 修饰变量，约束它在允许的初始化后不能再次赋值。引用变量保存的引用不能换，但对象内部状态是否可变取决于对象设计。final 修饰方法禁止重写，修饰类禁止继承，它们都不意味着整个对象图自动不可变。不可变对象还需要约束可变成员的暴露和复制。',
        'static 字段属于声明它的类，而不是每个实例各有一份；准确地说，不同定义类加载器加载的同名类也可以拥有各自的静态状态。static 方法没有当前实例 this，不能直接访问某个实例字段，却可以通过明确传入的实例引用操作它。',
        '普通成员内部类通常与一个外部实例关联，因此能使用外部实例字段；静态嵌套类不隐式携带这种关联。选择静态嵌套类可避免不必要地保留外部大对象。static 只说明归属关系，并不提供线程安全保证。'
      ],
      flow: steps([['识别变量归属', '实例字段跟随每个对象，static 字段跟随类，局部变量跟随每次调用。'], ['检查 final', '判断被限制的是变量重新赋值、方法重写还是类继承。'], ['继续追踪对象', '引用固定后仍要检查集合及集合元素能否被其他代码修改。']]),
      example: example('public class ScopeDemo {\n  static int total;\n  final java.util.List<String> tags = new java.util.ArrayList<>();\n  ScopeDemo() { total++; }\n  public static void main(String[] args) {\n    ScopeDemo a = new ScopeDemo();\n    ScopeDemo b = new ScopeDemo();\n    a.tags.add("java");\n    System.out.println(a.tags + " / " + b.tags);\n    System.out.println(total);\n  }\n}', '[java] / []\n2', 'a.tags 和 b.tags 分别指向两个列表；final 没有阻止 a.tags 内容变化。total 是共享静态字段，两个构造调用都修改同一位置；此示例只在单线程执行。'),
      boundaries: ['static final List 仍可能是全局共享的可变列表，容易同时带来状态污染和并发问题。', '常量变量被编译期内联可能影响初始化观察；不能说任何读取 static 字段都会初始化声明类。'],
      answer: 'final 对变量限制重新赋值，对方法和类限制扩展；它不冻结引用指向的对象。static 表示成员属于类，没有当前实例 this，也不代表线程安全。设计共享数据时我会继续检查对象是否可变、谁能持有引用以及并发更新怎样同步，不能仅凭 static final 就认定安全。',
      followUps: qa([['为什么 static 方法不能直接使用 this？', '静态调用不需要某个实例，因而没有自动绑定的接收对象。'], ['成员内部类为何可能导致外部对象存活更久？', '它可能保留关联外部实例的引用；只要内部对象仍可达，外部实例也可能沿此路径可达。']]),
      checks: qa([['final int[] a = {1}; a[0] = 2 合法吗？', '合法，数组元素赋值没有重新给变量 a 赋引用。']]),
      prerequisites: links([['course-java-reference-call', 'final 必须放在变量与对象两层模型中理解。']]), related: links([['jvm-initialization', '静态初始化何时发生。'], ['collections-immutable', '学习不可修改与不可变的区别。']]), conceptIds: ['language-variables', 'oop-classes', 'oop-encapsulation'], readingIds: ['xl-java-983ee2fac1f5dc2c', 'xl-java-f0cfb23db9c9b4fc', 'xl-java-bc06adb8b20564d5'], sourceChapters: ['关键字', '面向对象'], sources: [jls(4, '4.12.4', 'final 变量'), jls(8, '8.3.1.1', '静态字段'), jls(8, '8.1.3', '内部类')]
    },
    {
      id: 'course-java-copy', topicId: 'java', chapter: '对象如何合作', title: '浅拷贝保留哪些共享关系，深拷贝如何确定边界',
      intro: '把订单列表复制一份后，为什么改副本中的订单地址，原列表看到的地址也变了？',
      explanation: [
        '复制容器和复制容器里的对象是两件事。new ArrayList<>(old) 创建新的列表存储，但每个元素保存的仍是原来的引用值。副本增删元素通常不改变原列表结构，副本中的某个可变元素却仍与原列表共享。数组 clone 和 Object.clone 的默认字段复制也有同类边界。',
        '深拷贝应先由业务定义需要独立的对象图范围。例如生成订单快照，要复制可变地址和明细；不可变的 String 可以安全共享，无须追求每一个对象都有新身份。若对象图有环或重复引用，递归复制还要记录旧对象到新对象的映射，既防无限递归，又保留应有的共享关系。',
        '显式复制构造器、工厂或映射代码可把边界写清楚。通过序列化再反序列化虽然能复制某些图，却受序列化协议、类型支持、性能和安全约束，不能成为不加判断的万能方法。'
      ],
      flow: steps([['画出原对象图', '列表指向订单，订单再指向地址，标记哪些节点可变。'], ['决定独立范围', '快照必须独立的地址要复制；不可变标识可共享。'], ['复制并验证', '分别修改副本的结构和嵌套字段，检查原数据是否受到影响。']]),
      example: example('// JShell 示例\nclass Address { String city; Address(String c) { city = c; } }\nvar original = new java.util.ArrayList<Address>();\noriginal.add(new Address("杭州"));\nvar shallow = new java.util.ArrayList<>(original);\nvar deep = new java.util.ArrayList<Address>();\nfor (Address a : original) deep.add(new Address(a.city));\nshallow.get(0).city = "南京";\nSystem.out.println(original.get(0).city);\nSystem.out.println(deep.get(0).city);', '南京\n杭州', 'shallow 与 original 的第一个槽位存同一个 Address 引用；deep 的 Address 是另外构造的，因此原图后续变化不影响这份城市快照。'),
      boundaries: ['本例只复制一层 Address，若地址再持有可变子对象，需要继续按业务边界复制。', 'List.copyOf 保护列表结构，不会自动深拷贝可变元素。'],
      answer: '浅拷贝建立新的外层对象，但引用字段仍指向原来的子对象；深拷贝让约定范围内的可变子对象也独立。我会先明确快照需要隔离哪些状态，再用显式复制代码实现，处理环和共享引用。复制集合不等于复制集合元素，不可修改集合也不等于整个对象图不可变。',
      followUps: qa([['深拷贝 String 字段需要 new String 吗？', '通常不需要。String 不可变，安全共享就能满足状态隔离，额外对象身份没有价值。'], ['有环的对象图如何复制？', '使用按对象身份记录的映射，创建新节点后先登记，再递归填充字段，遇到已复制节点直接复用。']]),
      checks: qa([['只给 shallow 添加一个新 Address，会增加 original 的长度吗？', '不会。两者外层列表独立，共享的是原有元素对象。']]),
      prerequisites: links([['course-java-reference-call', '先理解引用赋值不复制对象。']]), related: links([['course-collections-views', '进一步区分视图与结构快照。']]), conceptIds: ['language-references', 'oop-encapsulation', 'collections-immutable'], readingIds: ['xl-java-9660342334c0430a', 'xl-java-042f8a00e0d3f4a1'], sourceChapters: ['深拷贝和浅拷贝'], sources: [S.object, api('java.base/java/util/ArrayList', 'ArrayList'), api('java.base/java/util/List', 'List.copyOf')]
    },
    {
      id: 'course-java-generics', topicId: 'java', chapter: '对象如何合作', title: '泛型把错误提前到编译期，通配符表达读写能力',
      intro: '为什么 List<Integer> 不是 List<Number>，却能作为 List<? extends Number> 传入？',
      explanation: [
        '泛型把类型参数纳入编译期约束，使容器能承诺取出元素的类型。若 List<Integer> 可直接当 List<Number>，调用方就能放入 Double，破坏原列表“只有 Integer”的约定，因此这两个参数化类型不是继承关系。类型参数只能是引用类型，List<int> 不合法，常用 List<Integer> 通过装箱衔接。',
        '? extends Number 表示元素是某种未知的 Number 子类型，读取时可安全当 Number，用它写入任意 Integer 却不安全，因为实际列表可能是 Double。? super Integer 表示元素类型是 Integer 的某个父类型，所以写入 Integer 安全，读取只保证 Object。PECS 的含义是围绕当前方法的数据方向选择约束，而不是死记两个单词。',
        'Java 主要通过类型擦除实现泛型，类型检查、必要的强转与桥接方法由编译器协作完成。运行期的 ArrayList<String> 与 ArrayList<Integer> 通常是同一个 Class；反射可读取某些声明上的泛型信息，但不能据此说每个对象都保存完整实参类型。'
      ],
      flow: steps([['声明读端', '源只生产 Integer，使用 extends Integer 允许具体子类型来源。'], ['声明写端', '目标消费 Integer，用 super Integer 允许 List<Integer>、List<Number> 等。'], ['编译检查', '编译器验证每次 get 与 add 的类型能力，阻止污染容器。']]),
      example: example('// JShell 可定义方法并执行\nstatic void copyInts(java.util.List<? extends Integer> from,\n                     java.util.List<? super Integer> to) {\n  for (Integer value : from) to.add(value);\n}\nvar source = java.util.List.of(2, 3);\nvar target = new java.util.ArrayList<Number>();\ncopyInts(source, target);\nSystem.out.println(target);\nvar words = new java.util.ArrayList<String>();\nSystem.out.println(target.getClass() == words.getClass());', '[2, 3]\ntrue', '复制方法的读写约束在编译期生效。Number 列表与 String 列表的具体实现都是 ArrayList，运行时 Class 相同；这不允许把两者在源码里随意互换。'),
      boundaries: ['原始类型 List 会绕开部分泛型检查，并可能把异常推迟到读取时；不应靠忽略 unchecked 警告修复设计。', '泛型数组创建与 instanceof List<String> 受运行期类型可验证性限制，不能照搬普通类语法。'],
      answer: '泛型让可复用代码带着编译期类型约束，避免取值时到处手动强转。参数化类型默认不协变，因为允许任意写入会破坏原容器约定。方法只读取来源可用 extends，只写入目标可用 super；Java 主要以擦除实现泛型，因此运行期检查不能随意恢复所有类型实参。',
      followUps: qa([['List<? extends Number> 完全不能修改吗？', '不能安全添加任意非 null 数值，但可调用 clear、remove 等方法；“不能写入具体元素”不等于不可修改。'], ['泛型擦除后还有意义吗？', '有。最主要价值正是编译期阻止类型错误；擦除是实现和兼容策略，不等于检查不存在。']]),
      checks: qa([['List<? super Integer> 取出的值为什么只能保证为 Object？', '实际列表可能是 List<Object>，其中可已有字符串等非 Number 对象。']]),
      prerequisites: links([['language-types', '理解静态类型与运行类型。']]), related: links([['oop-wildcards', '继续练习 PECS 读写边界。']]), conceptIds: ['oop-generics', 'oop-wildcards', 'oop-erasure'], readingIds: ['xl-java-153370a580d5f1d9', 'xl-collections-99e36216c7cd6fbe'], sourceChapters: ['泛型'], sources: [jls(4, '4.5.1', '类型参数与通配符'), jls(4, '4.6', '类型擦除')]
    },
    {
      id: 'course-java-reflection-annotations', topicId: 'java', chapter: '对象如何合作', title: '反射读取结构，注解提供元数据，谁来执行行为',
      intro: '方法上写一个 @Route 就会自动处理请求吗？注解、扫描器和方法调用各自做了什么？',
      explanation: [
        '反射让程序在运行时获得 Class、Constructor、Method、Field 等结构信息，并按 API 执行构造、读取和调用。框架可先扫描类与方法，再建立路径到处理方法的映射，真正收到请求时才选择对象并调用。扫描到了方法，不代表已经执行过该方法；拿到 Class 也不等于一定有该类的实例。',
        '注解是有类型的元数据，行为来自读取它的工具或框架。Retention 决定信息保留到源码、class 还是运行期；只有 RUNTIME 注解能按运行时反射方案读取。Target 限制可标注的位置。SOURCE 注解仍可由编译器或注解处理器发挥作用，不能把“运行期读不到”理解成“无效”。',
        '反射仍受访问控制和模块封装约束。Java 17 下 setAccessible 或 trySetAccessible 不是万能突破口；模块是否开放包会影响深度反射。需要调用公开构造器或方法时优先使用公开契约，把动态能力集中在明确的边界，而不是让业务逻辑失去编译期检查。'
      ],
      flow: steps([['声明元数据', '定义保留到运行期的方法注解，并标注处理方法。'], ['扫描建表', '反射得到方法，读取注解值，将路径与方法关联。'], ['准备实例', '建立 Handler 对象；这一步独立于选择具体请求参数。'], ['执行调用', 'invoke 把 receiver 和参数交给目标方法，并返回方法结果。']]),
      example: example('import java.lang.annotation.*;\npublic class RouteDemo {\n  @Retention(RetentionPolicy.RUNTIME)\n  @Target(ElementType.METHOD)\n  @interface Route { String value(); }\n  static class Handler {\n    @Route("/hello") public String hello(String name) {\n      return "hello " + name;\n    }\n  }\n  public static void main(String[] args) throws Exception {\n    var method = Handler.class.getMethod("hello", String.class);\n    System.out.println(method.getAnnotation(Route.class).value());\n    System.out.println(method.invoke(new Handler(), "Lin"));\n  }\n}', '/hello\nhello Lin', '读取注解只得到 /hello 文本。hello Lin 来自随后明确执行的 method.invoke；注解本身没有启动路由器，也没有创建 HTTP 服务。'),
      boundaries: ['Method.invoke 包装目标方法抛出的异常为 InvocationTargetException，需要查看 cause 才能定位业务根因。', '运行时生成的代理对象、扫描得到的方法元数据和最终业务返回值是三种不同对象。'],
      answer: '反射提供运行时查看与调用类结构的能力，注解则提供结构化元数据。框架通过扫描器或编译期处理器解释注解，注解自身不会执行行为。要说明保留策略、处理时机和真正调用者；在 Java 17 还要注意模块访问限制，以及反射调用对异常的包装。',
      followUps: qa([['把 Retention 改成 CLASS 会怎样？', '注解仍可写入 class，但本例的 getAnnotation 不会得到它，继续调用 value 会出现空引用错误。'], ['为什么依赖注入框架常用反射？', '它需要按配置和类型元数据创建、组装对象，业务代码无需把所有实现选择写死；具体实现也可能使用生成代码或方法句柄。']]),
      checks: qa([['删除 method.invoke，程序会执行 hello 方法体吗？', '不会，只剩读取并输出路由元数据。']]),
      prerequisites: links([['course-java-reference-call', '区分类、对象准备和方法执行。']]), related: links([['web-spring-proxy', '把扫描与代理调用连到框架行为。']]), conceptIds: ['oop-classes', 'web-spring-ioc', 'web-spring-proxy'], readingIds: ['xl-java-ad12657faf15ec83', 'xl-java-21540d7e77f4f9db', 'xl-java-20b2409c09ebe991', 'xl-java-f4b369202eef3dc1', 'xl-java-9999961d9fab1ece'], sourceChapters: ['反射', '注解', '对象'], sources: [api('java.base/java/lang/reflect/Method', 'Method.invoke'), api('java.base/java/lang/reflect/AccessibleObject', 'AccessibleObject'), api('java.base/java/lang/annotation/RetentionPolicy', 'RetentionPolicy')]
    },
    {
      id: 'course-java-exceptions', topicId: 'java', chapter: '失败与资源边界', title: '异常如何传播，资源如何可靠关闭',
      intro: '读取文件失败时，catch、finally 和 close 按什么顺序执行？关闭再次失败会把原异常盖掉吗？',
      explanation: [
        'throw 在当前执行路径抛出异常对象；throws 在方法签名声明可能向调用方传播的异常。异常沿调用栈寻找可匹配的 catch，途中执行相应清理逻辑。受检异常需要捕获或声明；RuntimeException 及其子类、Error 及其子类不受这种编译期强制约束。未受检查不代表业务可以忽略它们。',
        'finally 用于无论正常还是异常退出都应做的清理，但 finally 自己 return 或抛异常会覆盖先前的完成原因，常导致根因丢失。对 AutoCloseable 资源，try-with-resources 按创建的逆序关闭：若主体先失败，关闭异常记为 suppressed，主体异常仍是主要异常，因而更适合保留诊断证据。',
        '捕获异常应形成有意义的边界：能恢复就恢复，不能恢复就附加上下文继续传播，最终由统一入口转换为响应或失败记录。既吞掉异常又返回成功，会把确定的失败变成难以解释的数据缺失。'
      ],
      flow: steps([['进入资源作用域', '成功构造的资源依次被登记，后续初始化失败也会关闭此前资源。'], ['执行主体', '正常返回或抛异常，决定暂时的完成结果。'], ['逆序关闭', '先关后创建的资源；主体失败时把关闭失败保留为 suppressed。'], ['边界处理', '在有恢复能力的层处理，或带着 cause 继续传播。']]),
      example: example('public class CloseDemo {\n  static class R implements AutoCloseable {\n    public void close() { throw new IllegalStateException("close"); }\n  }\n  public static void main(String[] args) {\n    try (R r = new R()) {\n      throw new IllegalArgumentException("body");\n    } catch (Exception e) {\n      System.out.println(e.getMessage());\n      System.out.println(e.getSuppressed()[0].getMessage());\n    }\n  }\n}', 'body\nclose', '主要异常来自业务主体，关闭失败仍可查到。若手写 finally 并直接抛 close，通常会丢失主体异常的主导位置。'),
      boundaries: ['finally 并非在进程被强制终止、操作系统崩溃等情况下仍必定执行。', 'Error 通常意味着严重运行问题，不应通过 catch(Throwable) 一律转成正常成功。'],
      answer: '异常是沿调用栈传播的失败结果，throw 是实际抛出，throws 是传播契约。受检异常需要显式捕获或声明。资源清理优先用 try-with-resources，它逆序关闭并保留 suppressed 异常；避免 finally 返回值覆盖原返回或根因。捕获位置应有恢复、转换或补充上下文的职责。',
      followUps: qa([['try 返回 a，finally 返回 b，返回哪个？', '返回 b，因为 finally 的 return 覆盖了先前完成结果，因此不应这样写清理代码。'], ['为何只记录 e.getMessage() 不足以排查？', '它丢掉堆栈、cause 和 suppressed 等证据，应把异常对象交给日志设施并附加必要业务上下文。']]),
      checks: qa([['throws IOException 会主动抛出 IOException 吗？', '不会，它只是签名声明；真正失败来自执行过程中的 throw 或被调用方法。']]),
      prerequisites: links([['course-java-reference-call', '异常通过一次次方法调用向外传播。']]), related: links([['engineering-resource-boundaries', '把资源生命周期与方法责任放在一起。']]), conceptIds: ['io-exceptions', 'io-checked', 'io-handling', 'io-resources'], readingIds: ['xl-java-9f11a931177ae386', 'xl-java-d39f0633cd836a76', 'xl-java-4ed01c88f59e1e0d'], sourceChapters: ['异常'], sources: [jls(14, '14.20.3', 'try-with-resources'), jls(11, '11.2', '异常检查')]
    },
    {
      id: 'course-java-equality-text', topicId: 'java', chapter: '值、对象与调用', title: '相等、哈希与字符串的不可变性',
      intro: '两个内容一样的对象为何在 HashSet 中留下两份？为什么修改 String 看起来又像生成了新内容？',
      explanation: [
        '对象有身份，也可有业务定义的值。引用的 == 判断是否同一个对象；Object.equals 默认也是身份判断，String、record 等才定义更适合它们的值相等。自定义 equals 要维持自反、对称、传递和一致，并约定与 null 比较为 false。相等对象必须给出相等 hashCode；不同对象哈希相同允许发生。',
        'String 内容创建后不可改变，replace、substring、toUpperCase 等返回结果；变量能重新指向结果不代表旧字符串被改写。不可变内容有利于共享与哈希键稳定。StringBuilder 适合局部连续追加；StringBuffer 的单次方法同步仍不能自动保证多个调用组成的业务动作原子。',
        'Object 还提供 getClass、toString、wait/notify 等基础能力，但不能把默认 toString 当稳定业务标识。字符串索引按 UTF-16 代码单元工作，length 不总等于显示字数，涉及用户输入截断时须明确长度单位。'
      ],
      flow: steps([['定义相等语义', '确认用对象身份，还是编号、金额等组成的值来判等。'], ['成对实现', 'equals 使用哪些稳定字段，hashCode 就基于相容字段计算。'], ['观察文本结果', '每次字符串变换显式接收返回值，需要大量追加时改用局部缓冲。']]),
      example: example('// JShell，record 自 Java 16 正式支持\nrecord UserKey(long tenantId, long userId) {}\nvar keys = new java.util.HashSet<UserKey>();\nkeys.add(new UserKey(1, 5));\nkeys.add(new UserKey(1, 5));\nSystem.out.println(keys.size());\nString name = "java";\nname.toUpperCase(java.util.Locale.ROOT);\nSystem.out.println(name);\nSystem.out.println(name.toUpperCase(java.util.Locale.ROOT));', '1\njava\nJAVA', 'record 为这两个基本类型组件生成相等与哈希逻辑，使两个新对象按值去重。toUpperCase 没有修改原 String，打印返回值才看到 JAVA。'),
      boundaries: ['record 只保证组件引用不可重新赋值；组件若是可变集合，并不自动深度不可变。', '把参与 equals/hashCode 的字段在入表后改掉，可能导致键查找失败。'],
      answer: '== 比较引用身份，equals 表达类型自己的逻辑相等。覆盖 equals 必须同时遵守 hashCode 契约：相等必同哈希，同哈希未必相等。String 是不可变对象，变换返回结果；局部循环拼接可用 StringBuilder。用作集合键时，还要保证参与判等的状态在存储期间稳定。',
      followUps: qa([['哈希码相同为什么还要 equals？', '哈希空间有限，多个不同键必然可能碰撞，equals 才完成逻辑判等。'], ['两个数组调用 equals 会比较元素吗？', '数组继承身份语义；内容比较应选择 Arrays.equals 或适合嵌套数组的 deepEquals。']]),
      checks: qa([['new String("ok") 与字面量 "ok" 用 equals 比较呢？', '内容相同则 true；是否同一对象要另用 == 判断。']]),
      prerequisites: links([['course-java-reference-call', '区分引用身份与对象内容。']]), related: links([['course-collections-hashmap', '跟随判等契约进入桶内查找。']]), conceptIds: ['language-equality', 'language-string', 'language-builder', 'collections-key-contract'], readingIds: ['xl-java-aea869f7245d2db0', 'xl-java-2e34a78e5b0bc122', 'xl-java-393418751df2a13a', 'xl-java-ca4b23fce8c8fb00'], sourceChapters: ['object'], sources: [S.object, api('java.base/java/lang/String', 'String'), api('java.base/java/lang/Record', 'Record')]
    },
    {
      id: 'course-java-streams', topicId: 'java', chapter: '表达数据转换', title: 'Lambda 与 Stream：描述转换，终结时执行',
      intro: '写完 filter 和 map 后为何还没有结果？把 stream 改成 parallelStream 就一定更快吗？',
      explanation: [
        'Lambda 为函数式接口提供实现，把一段行为作为参数传递。它捕获的局部变量必须 final 或 effectively final，但捕获的引用指向的对象仍可能可变。Stream 建立数据处理流水线：来源给元素，中间操作描述筛选和转换，终结操作驱动求值。流本身不是存储容器，使用一次终结操作后不能再重复消费。',
        'map 将一个元素映射为一个结果，flatMap 将每个元素产生的流展开；collect 可分组汇总，reduce 要谨慎选择单位值和满足结合律的运算。副作用会让惰性、短路和并行处理更难推理，因此不要用共享 ArrayList.add 作为并行流的收集方案。',
        'Java 17 可使用 Java 8 的 Lambda、Stream、CompletableFuture，以及正式的 record 和 sealed 类等特性。Java 21 的虚拟线程、record patterns、模式 switch 等需明确版本；虚拟线程解决大量阻塞任务的承载方式，不是让 CPU 计算本身更快。选择新语法应服务于模型和运行需求。'
      ],
      flow: steps([['建立来源', '从订单列表取得流，此时原列表仍是数据所有者。'], ['描述流水线', '筛选有效订单，再映射金额；中间操作通常尚未处理元素。'], ['终结求值', 'sum、collect、toList 等触发遍历并产生结果。'], ['评估并行', '仅在工作量、拆分成本、无共享副作用等条件合适时实测并行收益。']]),
      example: example('// JShell；Java 17\nrecord Order(String state, int cents) {}\nvar orders = java.util.List.of(\n    new Order("PAID", 300), new Order("NEW", 900),\n    new Order("PAID", 500));\nvar paid = orders.stream().filter(o -> o.state().equals("PAID"));\nint total = paid.mapToInt(Order::cents).sum();\nSystem.out.println(total);\nvar byState = orders.stream().collect(\n    java.util.stream.Collectors.groupingBy(Order::state,\n      java.util.stream.Collectors.counting()));\nSystem.out.println(byState.get("PAID"));', '800\n2', 'paid 保存尚未消费的流水线；sum 才触发筛选和求和。第二次统计重新创建流，避免复用已经消费的 paid。'),
      boundaries: ['Stream.toList 在 Java 16 加入，返回不可修改列表；不要假定它等同于 Collectors.toList 的所有实现行为。', '并行流的线程与资源策略不适合无评估地承载阻塞数据库或远程调用。'],
      answer: 'Lambda 把行为赋给函数式接口，Stream 把处理写成来源、中间操作和终结操作。中间操作通常惰性，终结操作驱动执行；流只能消费一次。我会尽量保持函数无共享副作用，用适合的 collector 汇总。并行化需要测量拆分成本与负载，不能仅靠换成 parallelStream 保证提速。',
      followUps: qa([['为什么 parallelStream().forEach(list::add) 危险？', '多个线程共享非线程安全列表，修改存在竞争；应使用流提供的安全收集过程。'], ['Optional 能替代一切 null 吗？', '它适合表达某些返回结果的缺失，不消除所有可空字段和边界校验；也不应通过 get 无条件取值。']]),
      checks: qa([['filter 后没有终结操作，能依赖谓词中的日志一定打印吗？', '不能。流水线可能从未执行，副作用也不是可靠业务机制。']]),
      prerequisites: links([['course-java-generics', '函数式接口与集合流都使用泛型约束。']]), related: links([['course-juc-futures', '把同步数据转换扩展到异步结果组合。'], ['concurrency-virtual-threads', '区分 Java 21 的阻塞并发方案。']]), conceptIds: ['functional-lambda', 'functional-stream', 'functional-lazy', 'functional-collect', 'functional-side-effects', 'oop-records', 'oop-sealed'], readingIds: ['xl-java-b973719022d2689b', 'xl-java-1728febe5f435a68', 'xl-java-8a86e8c74109401f', 'xl-java-1122c3a72e769328', 'xl-java-ea8acda3c7959c4a'], sourceChapters: ['Java 新特性'], sources: [api('java.base/java/util/stream/package-summary', 'Stream 包'), src('Oracle · Java 21 语言变化', 'https://docs.oracle.com/en/java/javase/21/language/java-language-changes-release.html')]
    },
    {
      id: 'course-java-serialization', topicId: 'java', chapter: '失败与资源边界', title: '跨进程传对象：传的是协议数据，不是堆地址',
      intro: '两个 JVM 各有自己的堆，服务 A 的 User 对象怎样才能成为服务 B 可理解的数据？',
      explanation: [
        '进程中的引用只有本进程运行时意义，跨网络发送一个地址无法让另一个 JVM 访问原对象。序列化把约定的状态编码成字节，反序列化按协议重建接收方的数据结构。双方必须约定字段含义、类型、编码、版本和缺失值处理；得到的通常是另一个对象，而不是共享同一个实例。',
        'Java 原生 ObjectOutputStream 可遍历可序列化对象图，维护重复引用关系，并写入类型相关信息；transient 字段不按默认机制写出，static 状态也不是每个对象的序列化字段。serialVersionUID 用于版本兼容检查，但设成相同值不代表任意字段变化都能业务兼容。',
        '公开接口通常更适合明确的数据传输结构和经过治理的格式。反序列化不可信输入可能触发危险类型的行为，需限制允许类型、资源大小和嵌套深度；JSON 等格式也仍需字段校验，不能仅换格式就忽略输入边界。'
      ],
      flow: steps([['定义协议', '只传需要的状态，写清单位、编码、版本与必填规则。'], ['编码', '把对象状态转换成独立的字节序列，不发送引用地址。'], ['传输与解码', '接收方验证长度与格式，再构造自己的数据。'], ['校验语义', '检查范围与业务不变量，不能把成功解析等同于合法请求。']]),
      example: example('// JShell：一个刻意简化的版本化二进制协议\nvar bytes = new java.io.ByteArrayOutputStream();\ntry (var out = new java.io.DataOutputStream(bytes)) {\n  out.writeInt(1); // 协议版本\n  out.writeLong(5L);\n  out.writeUTF("Lin");\n}\ntry (var in = new java.io.DataInputStream(\n    new java.io.ByteArrayInputStream(bytes.toByteArray()))) {\n  int version = in.readInt();\n  if (version != 1) throw new java.io.IOException("version");\n  System.out.println(in.readLong() + ":" + in.readUTF());\n}', '5:Lin', '写入和读取严格遵循同一字段顺序。writeUTF/readUTF 使用 Java 规定的 modified UTF-8，存在长度限制；该示例不是通用跨语言协议，应明确告知其他语言实现方。'),
      boundaries: ['默认 Java 反序列化并不等同于正常调用每个可序列化类的无参构造器。', '跨服务数据应包含足够的协议版本和验证策略，不能依赖双方类名刚好相同。'],
      answer: '跨 JVM 传递的是序列化后的状态和协议，不是原对象的内存地址。接收方解码后建立自己的对象。我会先定义字段、单位、版本和兼容策略，再选择编码格式。Java 原生序列化方便表达对象图，但与类结构耦合且需要严格控制不可信反序列化；成功解析后仍要做业务校验。',
      followUps: qa([['为什么 static 字段不随每个实例传输？', '它属于类的共享状态，默认实例序列化关注对象的非静态状态。'], ['深拷贝为什么不能无脑用序列化？', '类型可能不支持、资源句柄不可复制、性能成本较高，协议还可能丢弃 transient 状态。']]),
      checks: qa([['接收方先 readUTF 再 readLong 可以吗？', '不可以，本协议没有自描述字段表，必须遵守发送方约定的字节顺序。']]),
      prerequisites: links([['course-java-reference-call', '理解引用值只在当前对象空间里有意义。']]), related: links([['course-java-copy', '区分图复制与跨进程协议。']]), conceptIds: ['io-bytes', 'io-resources', 'language-references'], readingIds: ['xl-java-a1913127fe39fd12', 'xl-java-152d793c558adef6', 'xl-java-554dfad7fdbca7c9'], sourceChapters: ['序列化'], sources: [api('java.base/java/io/ObjectInputStream', 'ObjectInputStream'), api('java.base/java/io/DataInputStream', 'DataInputStream'), src('Java 17 · 序列化过滤', 'https://docs.oracle.com/en/java/javase/17/core/serialization-filtering1.html')]
    },
    {
      id: 'course-java-patterns', topicId: 'java', chapter: '对象如何合作', title: '策略、代理、适配器和责任链各自隔离什么变化',
      intro: '日志、支付渠道差异和多道校验都想从主流程拆出来，为什么不能把它们一律叫作代理？',
      explanation: [
        '设计模式的价值是表达变化方向。策略把可替换算法放在同一契约后，例如选择一条运费计算规则。代理保持目标能力的入口，在调用前后加入访问控制、日志或事务等；适配器则转换不匹配的接口，让旧服务满足调用方需要的契约。它们都可能使用委托，但解决的问题不同。',
        '责任链把处理分为可组合步骤，每一步决定继续、拒绝或处理完成，适合校验和过滤。必须定义顺序、终止条件以及异常责任，否则只是把一个难读的方法分散到更多类。单例则控制实例数量，Java 可以利用类初始化的同步保证延迟创建；单例对象内部的可变状态仍需独立解决线程安全。'
      ],
      flow: steps([['找变化点', '先确认变化的是算法、外围行为、接口形状还是步骤组合。'], ['定义契约', '明确输入、输出、失败与继续执行的语义。'], ['组合对象', '在组装处选择策略、包装代理或排列责任链。'], ['执行与观察', '跟踪每一次委托，确认核心行为调用次数和顺序。']]),
      example: example('// JShell：代理保持接口；并非生产支付代码\ninterface Pay { String pay(int cents); }\nclass Channel implements Pay {\n  public String pay(int cents) { return "paid:" + cents; }\n}\nclass LoggedPay implements Pay {\n  private final Pay target;\n  LoggedPay(Pay target) { this.target = target; }\n  public String pay(int cents) {\n    System.out.println("before:" + cents);\n    return target.pay(cents);\n  }\n}\nPay service = new LoggedPay(new Channel());\nSystem.out.println(service.pay(500));', 'before:500\npaid:500', 'LoggedPay 接口没有变化，日志后明确委托一次给 Channel。若适配的是第三方 charge(amount, currency)，还需要转换接口形状和单位，那部分才是适配责任。'),
      boundaries: ['代理对象和被代理对象是不同角色，代理并不自动意味着异步或另起线程。', '双重检查单例在 Java 中需正确发布，例如 volatile；直接用 holder 或枚举可减少手写同步复杂度。'],
      answer: '我先按变化点选模式：策略隔离可替换算法，代理围绕同一能力增加行为，适配器转换接口，责任链组织可继续或终止的处理步骤。它们不靠类名区分，而靠调用关系和契约区分。单例只控制实例数量，发布安全和对象内部线程安全还要分别说明。',
      followUps: qa([['策略与责任链最大的调用差别是什么？', '策略通常先选择一个实现执行；责任链按约定顺序经过多个处理器，并允许中途终止。'], ['Spring 事务代理意味着 SQL 一定提交吗？', '不意味着。代理提供事务边界，最终提交还取决于方法完成情况、回滚标记、数据库和资源管理器。']]),
      checks: qa([['包装器把接口 A 转成接口 B，是代理还是适配器的主要职责？', '主要是适配器；它可能同时附加代理行为，但应把两个责任说清。']]),
      prerequisites: links([['course-java-polymorphism', '模式依靠接口和委托形成边界。']]), related: links([['web-spring-proxy', '认识框架中的实际代理边界。'], ['course-juc-jmm', '理解安全发布与双重检查。']]), conceptIds: ['oop-composition', 'oop-interfaces', 'web-spring-proxy'], readingIds: ['xl-java-8077246a5a26e19b', 'xl-java-5e91d8e881d4142a', 'xl-java-aaa8f9876a246853', 'xl-java-4ce053f3c5e66d2c'], sourceChapters: ['设计模式'], sources: [api('java.base/java/lang/reflect/Proxy', 'Proxy'), jls(12, '12.4.2', '类初始化同步')]
    },
    {
      id: 'course-java-io', topicId: 'java', chapter: '失败与资源边界', title: '字节、字符与 NIO：数据准备好后怎样读完',
      intro: '读一次 Socket 就得到完整请求吗？切到 NIO 后，阻塞、缓冲区和消息边界分别由谁处理？',
      explanation: [
        'I/O 首先在传输字节。Reader/Writer 在字符集规则下把字节和文本相互转换；编码不一致可能产生乱码。read 返回的是本次读到的数量，不保证一次得到一整条业务消息，网络流也不保留应用的一次 write 边界。必须用长度、分隔符或协议定义解析完整消息。',
        '传统阻塞 I/O 在数据未就绪时让调用线程等待。NIO 提供 Channel、Buffer 和 Selector，支持非阻塞通道：少量线程等待多个通道就绪，再处理读写。就绪不等于完整消息已到达，也不等于后续操作永不返回 0。AIO 的异步 API 将完成结果通过回调或 Future 交付，底层实现取决于平台。',
        'Buffer 的 position 表示下一操作位置，limit 表示当前可操作边界。写入后 flip 把已写部分切换为待读范围，读完后 clear 重置边界以便复用；clear 不清零底层数据。高并发网络程序还要限制每次事件处理时长、排队长度和连接占用，不能让事件循环执行长时间阻塞业务。'
      ],
      flow: steps([['接收字节', '根据返回数量处理数据，正确处理 EOF 和暂时无数据。'], ['切换 Buffer', '写入时推进 position，flip 后按 limit 读取有效区间。'], ['协议组帧', '累计半包，拆分多个消息，限制声明的消息长度。'], ['调度业务', '将耗时工作交给适合的执行器，并对输出积压施加背压。']]),
      example: example('// JShell：Buffer 状态的最小实验\nvar b = java.nio.ByteBuffer.allocate(8);\nb.put((byte) 65).put((byte) 66);\nSystem.out.println(b.position() + ":" + b.limit());\nb.flip();\nSystem.out.println(b.position() + ":" + b.limit());\nwhile (b.hasRemaining()) System.out.print((char) b.get());\nSystem.out.println();\nb.clear();\nSystem.out.println(b.position() + ":" + b.limit());', '2:8\n0:2\nAB\n0:8', 'flip 不复制数据，只把可读范围限制到写入的两个字节。clear 恢复整个容量供下一次写入，AB 的旧字节可能仍在底层数组中。'),
      boundaries: ['NIO 是 API 体系，不等同于所有 NIO 调用都是非阻塞；文件通道等有不同语义。', 'Selector 管理就绪事件，业务消息解析和完整写出仍是应用责任。'],
      answer: '我先区分字节传输、字符解码和业务协议组帧。阻塞 I/O 让调用线程等待，NIO 可用非阻塞 Channel 配合 Selector 处理多个连接，AIO 则按完成结果通知。NIO 的就绪不是消息完整，读写必须处理部分完成；Buffer 通过 position、limit 和 flip 管理有效数据范围。',
      followUps: qa([['为什么网络写一次不代表对端读一次？', 'TCP 提供字节流，分段、缓冲和调度不保留应用调用边界，需要应用协议组帧。'], ['UTF-8 中文字符跨两次读取怎么办？', '使用可保留解码状态的 CharsetDecoder 或合适 Reader，不把每个字节块独立强行解码。']]),
      checks: qa([['忘记 flip，直接 get 为什么读不到刚写的开头？', 'position 仍在写入末尾，读取会从错误位置开始且 limit 仍是容量。']]),
      prerequisites: links([['course-java-exceptions', 'I/O 失败与资源关闭必须有清晰边界。']]), related: links([['io-charset', '进一步处理字符编码。'], ['course-juc-executor', '为阻塞业务规划独立容量。']]), conceptIds: ['io-bytes', 'io-chars', 'io-charset', 'io-buffer', 'io-channel'], readingIds: ['xl-java-cd30b24bb56affb6', 'xl-java-5660b5304cc1d326', 'xl-java-ba0bf0e1f8041c4f'], sourceChapters: ['I/O'], sources: [api('java.base/java/nio/Buffer', 'Buffer'), api('java.base/java/nio/channels/Selector', 'Selector'), api('java.base/java/io/InputStream', 'InputStream.read')]
    },
    {
      id: 'course-java-comparator', topicId: 'java', chapter: '表达数据转换', title: '多字段排序与比较器契约',
      intro: '按分数降序、学号升序排序，为什么直接返回 b.score - a.score 可能让结果出错？',
      explanation: [
        '比较器返回负数、零、正数，描述前后关系，不需要返回实际差值。两个极端整数相减可能溢出，使大小关系反转。应使用 Integer.compare、Long.compare 或 comparingInt 等 API，并用 thenComparing 明确同分时的次级规则。',
        '排序规则必须自洽，尤其要保持符号反对称和传递性。排序稳定性只保证比较结果为零时保留原相对顺序，不会替你补充学号规则。TreeSet、TreeMap 更把 compare 返回零当作键等价，因此“仅按分数比较”可能直接把两个学生合并为同一个键。'
      ],
      flow: steps([['写清业务次序', '分数越高越靠前；同分时学号越小越靠前。'], ['组合比较器', '只逆转分数比较器，再接升序学号，避免把整条规则一起反转。'], ['验证相同与极端值', '测试同分、不同学号、边界整数以及空值策略。']]),
      example: example('// JShell\nrecord Student(int id, int score) {}\nvar rows = new java.util.ArrayList<>(java.util.List.of(\n    new Student(3, 90), new Student(1, 90), new Student(2, 95)));\nrows.sort(java.util.Comparator.comparingInt(Student::score)\n    .reversed().thenComparingInt(Student::id));\nrows.forEach(s -> System.out.println(s.id() + ":" + s.score()));', '2:95\n1:90\n3:90', 'reversed 只作用于已经建立的分数比较器，之后追加的学号规则仍升序。若在最后整体 reversed，会连学号顺序一起逆转。'),
      boundaries: ['null 不应靠碰巧触发异常来定义顺序，需要明确拒绝或使用 nullsFirst/nullsLast。', '排序期间修改参与比较的字段会破坏算法对固定顺序的假设。'],
      answer: '多字段排序先明确方向与平局规则，再通过 comparing 和 thenComparing 组合。我避免用减法返回比较值，以免整数溢出，且检查传递性与 null 策略。排序稳定性不等于多字段排序；在树形集合里比较为零还决定键是否重复，必须与业务唯一性相容。',
      followUps: qa([['Comparable 与 Comparator 如何选？', 'Comparable 放在类型中表达自然顺序；Comparator 是外部可替换策略，适合不同页面或业务口径。'], ['只按 score 的 TreeSet 能存两个同分学生吗？', '若比较结果为零，后者会被判为重复；需要加入学号等唯一性维度或选其他结构。']]),
      checks: qa([['把 reversed 放在 thenComparing 后，学号仍升序吗？', '不会，整条组合顺序都反转，同分时学号也变成降序。']]),
      prerequisites: links([['course-java-numbers', '比较器减法同样受到整数溢出约束。']]), related: links([['course-collections-set', '比较器影响树形集合的判重。']]), conceptIds: ['functional-interface', 'collections-treemap', 'collections-set'], readingIds: ['xl-java-e87e1fafffc33097'], sourceChapters: ['其他'], sources: [api('java.base/java/util/Comparator', 'Comparator'), api('java.base/java/util/List', 'List.sort')]
    },
    {
      id: 'course-java-native-process', topicId: 'java', chapter: '语言如何运行', title: 'Java 如何跨过 JVM 与操作系统的边界',
      intro: '文件、网络和进程不是纯 Java 对象，JVM 怎样把 Java 调用变成操作系统行为？',
      explanation: [
        'Java 标准库把操作系统资源包装为对象和接口。文件流最终需要系统文件操作，线程需要运行时调度与平台支持，Socket 需要网络栈。native 方法表示方法体由本地代码实现；JNI 是 Java 与本地代码交互的一种规范接口。它和“启动外部进程”不同：JNI 代码运行在本进程内，错误可能直接破坏 JVM 进程。',
        'ProcessBuilder 启动另一个操作系统进程，并通过参数、环境、工作目录及标准输入输出交互。子进程的退出码、输出消费和超时都要由调用方管理；它不会因为被封装成 Process 就自动成为安全、无资源成本的调用。若 stdout 或 stderr 没被消费，管道缓冲区填满也可能让子进程停住。'
      ],
      flow: steps([['选择边界', '需要库内能力时优先标准 API；必须调用本地库或工具时明确进程内/进程外方式。'], ['传递结构化参数', 'ProcessBuilder 用参数列表而非拼接 shell 文本，保持参数边界。'], ['消费并等待', '处理输出、超时和退出状态，再关闭相关资源。']]),
      example: example('// JShell：使用当前 Java 安装中的可执行程序\nString exe = System.getProperty("os.name").startsWith("Windows")\n    ? "java.exe" : "java";\nvar javaBin = java.nio.file.Path.of(System.getProperty("java.home"), "bin", exe);\nvar p = new ProcessBuilder(javaBin.toString(), "-version")\n    .redirectErrorStream(true).start();\ntry (var in = p.getInputStream()) {\n  System.out.print(new String(in.readAllBytes(),\n      java.nio.charset.StandardCharsets.UTF_8));\n}\nSystem.out.println("exit=" + p.waitFor());', '输出当前运行时的版本文本，成功时最后一行为 exit=0；具体版本、厂商和构建号因环境而异。', '这是启动新 Java 进程，而不是在当前 JVM 内调用另一个 main。合并错误输出后一起消费；真实服务还需并行处理输出与超时，不能对任意外部程序无限等待。'),
      boundaries: ['本例假定运行环境包含可启动的 java，可裁剪运行镜像和受限环境需要另行验证。', 'JNI、子进程和远程调用的故障隔离程度不同，不能都当作普通无失败方法。'],
      answer: 'Java 通过运行时和标准库对接操作系统资源，本地实现可通过 native/JNI 进入当前进程；ProcessBuilder 则启动独立进程。两者的故障隔离和生命周期不同。调用外部程序时需要结构化参数、输出消费、超时、退出码及资源管理，不能只调用 start 就认为工作完成。',
      followUps: qa([['native 方法为什么没有 Java 方法体？', '实现由绑定的本地代码提供，声明描述 Java 一侧签名。'], ['子进程卡住但 CPU 很低，可能是什么？', '可能等待输入、输出管道未消费、外部锁或资源；结合进程状态与 I/O 证据排查。']]),
      checks: qa([['Process 对象被垃圾回收能代替显式管理子进程吗？', '不能，应明确等待、超时处理与必要的终止策略。']]),
      prerequisites: links([['course-java-execution', '先理解 JVM 是一个运行中的进程。']]), related: links([['engineering-resource-boundaries', '跨边界对象需要明确资源所有权。']]), conceptIds: ['jvm-execution-pipeline', 'io-bytes', 'engineering-resource-boundaries'], readingIds: ['xl-java-a70a1a6d5cafc623', 'xl-java-72c3d34892009bab'], sourceChapters: ['其他'], sources: [api('java.base/java/lang/ProcessBuilder', 'ProcessBuilder'), src('Java 17 · JNI 规范', 'https://docs.oracle.com/en/java/javase/17/docs/specs/jni/index.html')]
    },
    {
      id: 'course-collections-views', topicId: 'collections', chapter: '集合契约', title: '集合、视图和快照：拿到的到底是哪一份数据',
      intro: '返回 Collections.unmodifiableList 后，调用方看到的内容为何仍会变化？',
      explanation: [
        'Collection 描述一组元素的操作，List 加上顺序与索引，Set 表达唯一性，Queue 表达队列操作；Map 独立描述键值映射，并不继承 Collection。Collections 是工具类，提供排序、包装等操作。选择集合时先确定顺序、重复、查找方式及并发读写需求，再选择实现。',
        '视图把另一份数据暴露为不同操作接口，并未复制其存储。unmodifiableList 禁止通过包装器增删改，却仍观察底层列表变化；subList、Map 的 keySet/values/entrySet 也常是关联视图。List.copyOf 则提供独立的不可修改结构快照，但元素对象仍可共享。',
        '迭代语义也不等于线程安全。普通集合的 fail-fast 只尽力发现不合规结构修改，不能作为并发保护；CopyOnWriteArrayList 的迭代器固定在创建时的数组版本，ConcurrentHashMap 的迭代是弱一致，都不承诺每次看到全局最新快照。'
      ],
      flow: steps([['判定接口', '根据顺序、唯一性和映射需要选 List、Set、Queue 或 Map。'], ['追踪所有权', '确认返回值是原对象、关联视图还是结构复制。'], ['确定迭代语义', '说明是否允许修改、是否需外部锁，以及观察哪一时刻的数据。']]),
      example: example('// JShell\nvar original = new java.util.ArrayList<>(java.util.List.of("A"));\nvar view = java.util.Collections.unmodifiableList(original);\nvar snapshot = java.util.List.copyOf(original);\noriginal.add("B");\nSystem.out.println(view);\nSystem.out.println(snapshot);\n// view.add("C"); // UnsupportedOperationException', '[A, B]\n[A]', 'view 只是限制一条修改入口，原列表仍可改变它所展示的结构。snapshot 的结构与后续增删隔离，但本例元素是不可变 String，才无需再讨论元素修改。'),
      boundaries: ['synchronizedList 的单次方法同步不自动覆盖“遍历期间不能变”的整个动作；遍历需按文档使用同一个锁。', 'List.of 和 List.copyOf 不允许 null，不能把它们当所有旧集合包装的无差别替换。'],
      answer: '集合接口定义语义，实现决定成本与并发特性。我会特别区分原集合、视图和快照：不可修改包装只禁用该入口的修改，底层改变仍会被看到；复制结构也不自动复制元素。fail-fast 是诊断机制，不是线程安全保证，并发集合的遍历还要分别说明快照或弱一致语义。',
      followUps: qa([['Map.keySet().remove(k) 会删除映射吗？', '对支持该操作的关联视图会删除底层映射，它不是无关副本。'], ['为什么线程安全集合未必看到最新数据？', '线程安全约束操作的合法性和可见性关系，迭代可以依法使用旧快照或弱一致观察。']]),
      checks: qa([['需要把列表结构固定为服务响应快照，unmodifiableList(original) 足够吗？', '若 original 仍可变则不足，应复制结构，且继续检查元素的可变性。']]),
      prerequisites: links([['course-java-copy', '先理解复制层次。']]), related: links([['collections-iteration', '选择正确迭代和删除方式。']]), conceptIds: ['collections-interfaces', 'collections-immutable', 'collections-iteration'], readingIds: ['xl-collections-79e4d54caf4bd606', 'xl-collections-daadc70a64d91a95', 'xl-collections-b36ca5dd1aed214d', 'xl-collections-faa5a91e6ca2b4b8'], sourceChapters: ['概念'], sources: [api('java.base/java/util/Collections', 'Collections'), api('java.base/java/util/List', 'List'), S.chm]
    },
    {
      id: 'course-collections-list', topicId: 'collections', chapter: '列表与唯一性', title: 'ArrayList 的搬移成本与列表修改边界',
      intro: 'ArrayList 删除中间元素为什么需要搬移，而 LinkedList 按下标删除也不一定更快？',
      explanation: [
        'ArrayList 用连续引用数组存储元素，按下标可直接定位；尾部添加通常只填一个槽位，空间不足才复制到更大数组。倍数增长使一串尾部添加的总复制量与元素数同阶，所以均摊 O(1)，但某一次扩容仍是 O(n)。删除中间元素需要把后半段左移，并清理多余引用。',
        'LinkedList 用节点链接元素，已知节点位置的插删可以很快，但公开的 remove(index) 必须先遍历找位置，查找本身就是 O(n)。节点对象、指针访问与缓存局部性也有成本；不能只背“链表增删快”。CopyOnWriteArrayList 则让写入复制数组、读取旧版本，适合读远多于写且允许快照迭代的场景。',
        'List 的 remove(int) 删除下标，remove(Object) 删除匹配元素，Integer 列表特别容易误用。增强 for 使用迭代器，遍历中直接结构修改原列表可能破坏迭代；可用迭代器自身 remove、removeIf 或分阶段收集待删项。'
      ],
      flow: steps([['定位', '数组按索引直接找槽位；链表先沿链接走到目标。'], ['修改结构', '数组移动后续引用，链表更新相邻节点链接。'], ['处理容量', '只在需要时扩容；预估数量可减少复制，但不必过度预留。'], ['保护遍历', '使用匹配当前迭代机制的删除 API，不依赖是否碰巧抛异常。']]),
      example: example('// JShell\nvar values = new java.util.ArrayList<>(java.util.List.of(1, 2, 1, 3));\nvalues.remove(1);\nSystem.out.println(values);\nvalues.remove(Integer.valueOf(1));\nSystem.out.println(values);\nvalues.removeIf(v -> v % 2 != 0);\nSystem.out.println(values);', '[1, 1, 3]\n[1, 3]\n[]', '第一次命中 remove(int) 删除下标 1 处的 2；第二次传入 Integer 对象，删除第一个值为 1 的元素。removeIf 明确按谓词修改结构。'),
      boundaries: ['OpenJDK 17 ArrayList 常见增长策略约为旧容量的 1.5 倍，但这是实现细节，零容量和最小需求会影响实际容量。', 'Arrays.asList 是固定大小且关联数组的列表，不支持增删；subList 也是视图，原列表不当结构修改会使其语义失效。'],
      answer: 'ArrayList 随机访问快，尾插均摊常数，但扩容和中间删除会复制引用。LinkedList 只有定位后更新链接快，按下标操作仍要遍历，还承担节点和局部性成本。并发读多写少可评估 CopyOnWriteArrayList。修改时注意 remove 的重载与迭代器规则，避免把结构视图当独立副本。',
      followUps: qa([['删除时不要求保持顺序，数组列表可以优化吗？', '可把末尾元素移动到目标位置后删尾，减少搬移，但改变顺序，必须是业务允许的语义。'], ['CopyOnWrite 迭代器能 remove 吗？', '不能，它迭代旧数组快照，迭代器修改操作会抛 UnsupportedOperationException。']]),
      checks: qa([['LinkedList.get(n/2) 是 O(1) 吗？', '不是，需要沿节点遍历，渐进复杂度 O(n)。']]),
      prerequisites: links([['course-collections-views', '理解列表接口和视图。']]), related: links([['course-data-linear', '推导动态数组的均摊复杂度。']]), conceptIds: ['collections-list', 'collections-arraylist', 'collections-linkedlist', 'collections-iteration'], readingIds: ['xl-collections-a6bfc3e031cbeff1', 'xl-collections-89090a56f463a6ce', 'xl-collections-fede1d8f4019dc40', 'xl-collections-dc660e7e0030b3b3', 'xl-collections-185e62c5a5d1f2f4'], sourceChapters: ['List'], sources: [api('java.base/java/util/ArrayList', 'ArrayList'), api('java.base/java/util/LinkedList', 'LinkedList'), api('java.base/java/util/concurrent/CopyOnWriteArrayList', 'CopyOnWriteArrayList')]
    },
    {
      id: 'course-collections-set', topicId: 'collections', chapter: '列表与唯一性', title: 'Set 的唯一性由什么规则决定',
      intro: 'HashSet 保留两个同分学生，TreeSet 却只剩一个：它们究竟在比较什么？',
      explanation: [
        'Set 表达元素不重复，但具体实现寻找重复元素的路径不同。HashSet 基于哈希结构，先用 hashCode 缩小范围，再用 equals 判等；自定义值对象只覆盖 equals 不覆盖 hashCode，可能落在不同桶中而去重失败。LinkedHashSet 额外维护插入顺序，这种顺序不是按值排序。',
        'TreeSet 基于有序树，以自然顺序或 Comparator 的比较结果定位，比较为零就视作同一元素。若只比较分数，同分的不同学号也会被视为重复。要让 Set 的通用相等契约成立，排序等价应与 equals 一致；否则需明确接受并理解这种偏差，而不能只认为排序器改变展示顺序。'
      ],
      flow: steps([['定义唯一性', '例如用租户号和学号共同标识一个学生。'], ['选择顺序', '无序选哈希，保留插入选链接哈希，范围/排序选有序树。'], ['统一比较契约', '哈希集合配对 equals/hashCode，树集合检查 compare 为零的含义。']]),
      example: example('// JShell\nrecord Student(int id, int score) {}\nvar byScore = new java.util.TreeSet<Student>(\n    java.util.Comparator.comparingInt(Student::score));\nSystem.out.println(byScore.add(new Student(1, 90)));\nSystem.out.println(byScore.add(new Student(2, 90)));\nSystem.out.println(byScore.size());\nvar insertion = new java.util.LinkedHashSet<>(java.util.List.of("B", "A", "B"));\nSystem.out.println(insertion);', 'true\nfalse\n1\n[B, A]', 'TreeSet 的比较器只看 score，因此第二个学生比较为零，无法加入。LinkedHashSet 按首次插入顺序去重，不会自动把 A 放到 B 前面。'),
      boundaries: ['修改存入 Set 的元素判等字段会破坏哈希定位；修改树集合排序字段也会破坏树内顺序。', '需要“按分数排序且保留全部同分记录”，可排序 List 或使用含唯一维度的比较器，不应强行靠 Set。'],
      answer: 'HashSet 依靠 hashCode 定位再用 equals 判等；LinkedHashSet 还保留插入顺序；TreeSet 按比较器排序，并把比较为零当重复。因此先定义业务唯一性，再选择结构，保持哈希和比较契约一致，并避免入表后修改参与判等或排序的字段。',
      followUps: qa([['HashSet 可以排序吗？', '它没有排序遍历契约，可复制到 List 排序，或在确需有序唯一集合时使用 TreeSet。'], ['为什么要强调稳定键？', '集合的索引是在插入时建立的，字段变化不会自动把该元素搬到新桶或新树位置。']]),
      checks: qa([['给上述比较器加 thenComparingInt(Student::id) 后能存两个学生吗？', '能，因为同分时学号不同，比较结果不再为零。']]),
      prerequisites: links([['course-java-equality-text', '理解 equals 与 hashCode。'], ['course-java-comparator', '理解比较为零的含义。']]), related: links([['course-collections-hashmap', '继续看哈希桶内部。']]), conceptIds: ['collections-set', 'collections-key-contract', 'collections-treemap'], readingIds: ['xl-collections-b1c1aa85e0134bf4', 'xl-collections-09880940c9f4064d', 'xl-collections-550366de723cd2a4'], sourceChapters: ['Set'], sources: [api('java.base/java/util/HashSet', 'HashSet'), api('java.base/java/util/TreeSet', 'TreeSet'), api('java.base/java/util/LinkedHashSet', 'LinkedHashSet')]
    },
    {
      id: 'course-collections-hashmap', topicId: 'collections', chapter: '映射的查找过程', title: 'HashMap 从哈希定位到桶内判等',
      intro: '两个键的 hashCode 一样，后一次 put 会覆盖前一次吗？',
      explanation: [
        '哈希表把“到哪里找”与“是不是同一个键”分成两步。OpenJDK 17 HashMap 对键的哈希做扰动，再用容量掩码计算桶下标。不同哈希可能映射到同一个桶，相同哈希更不意味着逻辑相等；桶内仍要比较键身份或 equals。只有找到相等键才替换值，找到碰撞但不相等的键则继续查找或插入新节点。',
        '桶内元素少时用链表，碰撞多且容量达到条件时可树化，缓解长链查找成本。OpenJDK 17 的 TREEIFY_THRESHOLD 为 8，MIN_TREEIFY_CAPACITY 为 64；触发检查发生在具体插入路径，容量小常优先扩容。删除退化有结构判断，扩容拆分又有阈值，不能把“8 变树、6 变链”当所有操作的完整规则。',
        'HashMap 允许 null 键和值且无遍历顺序保证。它不提供并发修改安全，get 方法通常不写结构也不意味着和其他线程的 put 并发就安全；共享可变映射应使用正确同步或并发实现。'
      ],
      flow: steps([['求哈希并定位桶', '计算 key.hashCode 的扰动值，再与容量减一按位与。'], ['桶内比较', '比哈希、引用身份或 equals，区分冲突和已有键。'], ['更新或新增', '相等键替换值并返回旧值；新键增加节点和 size。'], ['维护结构', '按条件树化或扩容，保持后续查找可用。']]),
      example: example('public class HashKeyDemo {\n  record Key(int id) {\n    @Override public int hashCode() { return 7; }\n  }\n  public static void main(String[] args) {\n    var map = new java.util.HashMap<Key, String>();\n    map.put(new Key(1), "A");\n    map.put(new Key(2), "B");\n    System.out.println(map.put(new Key(1), "C"));\n    System.out.println(map.size());\n    System.out.println(map.get(new Key(2)));\n  }\n}', 'A\n2\nB', '两个不同 id 的键故意产生相同哈希，但 equals 不同，能同时存在。第三次插入与第一个键相等，替换 A 并返回旧值，元素数量不增加。'),
      boundaries: ['常数时间建立在哈希分散等条件上，不能保证恶劣碰撞下所有操作始终 O(1)。', '红黑树与阈值属于特定实现版本；公开 Map 契约没有承诺内部必须使用这些结构。'],
      answer: 'HashMap 先根据哈希定位桶，再在桶里用相等性确认键。哈希冲突不是覆盖条件，equals 相等才会更新旧映射。OpenJDK 17 用数组、链表和条件树化处理碰撞，并在负载超过阈值时扩容。键的哈希与相等字段要稳定，且 HashMap 不能承担无同步的并发读写。',
      followUps: qa([['所有键 hashCode 都相同还正确吗？', '只要 equals/hashCode 契约成立，逻辑仍可正确，但性能会严重下降；树化也不是设计坏哈希的理由。'], ['为什么 String 常适合作 key？', '内容不可变且定义了稳定的值相等与哈希，减少入表后键语义变化的问题。']]),
      checks: qa([['本例把 Key.equals 也改为总 true，结果如何变化？', '所有键会被当同一个键，不断覆盖；这已破坏按 id 区分的业务语义。']]),
      prerequisites: links([['course-java-equality-text', '先理解相等与哈希合约。']]), related: links([['course-collections-resize', '继续追踪节点如何迁移到更大数组。']]), conceptIds: ['collections-hashmap', 'collections-buckets', 'collections-hashmap-lookup', 'collections-key-contract'], readingIds: ['xl-collections-85bbf0955f431477', 'xl-collections-207c501b90bb1732', 'xl-collections-c508a2deeca94341', 'xl-collections-15f7adddc532484f'], sourceChapters: ['Map'], sources: [S.hash, S.hashSource]
    },
    {
      id: 'course-collections-resize', topicId: 'collections', chapter: '映射的查找过程', title: '扩容、容量预估与有序 Map 的代价',
      intro: '预计保存 20 个元素，new HashMap<>(20) 会不会扩容？扩大数组后为什么节点只需要分成两组？',
      explanation: [
        'HashMap 的容量是桶数组长度，size 是映射数量，阈值通常约为容量乘负载因子。OpenJDK 17 把请求容量向上规整为 2 的幂，并延迟到首次使用时分配。请求 20 得到的首个容量通常是 32，默认阈值为 24，因此放入 20 个正常分散的新键不会因负载触发再次扩容；不要把构造参数 20 误认为阈值 20。',
        '容量从 n 翻倍到 2n 时，新掩码比旧掩码多一位。原来在桶 i 的节点，如果 hash & n 为零，仍去 i；否则去 i+n。保存的哈希可直接用于拆分，不必重新调用每个键的 hashCode。扩容需要迁移节点并分配数组，预估合理容量可以避免请求路径上的集中成本。',
        '有顺序需求时再增加结构。LinkedHashMap 用链表维护插入或访问顺序，访问顺序模式可支持 LRU；TreeMap 用有序树支持范围和邻近键查询，常见基本操作为 O(log n)。HashMap 的 entrySet 等视图关联底层映射，遍历键和值时优先直接遍历 entry，避免重复查询。'
      ],
      flow: steps([['预估映射数', '依据实际数据量与默认负载因子推算所需桶容量，预留适度余量。'], ['检查插入阈值', '新增键让 size 超过阈值时进入容量维护；替换值不增加 size。'], ['按新位拆分', '原桶节点分到 i 或 i+n，重新组织链或树。'], ['选择顺序结构', '需要 LRU 用访问顺序链，需要范围检索用树，不能依赖 HashMap 偶然输出顺序。']]),
      example: example('public class ResizeDemo {\n  public static void main(String[] args) {\n    int oldCapacity = 16;\n    for (int hash : new int[]{1, 17, 33, 49}) {\n      int oldIndex = hash & (oldCapacity - 1);\n      int newIndex = hash & (2 * oldCapacity - 1);\n      System.out.println(hash + ":" + oldIndex + "->" + newIndex);\n    }\n    var map = new java.util.HashMap<Integer, Integer>(20);\n    for (int i = 0; i < 20; i++) map.put(i, i);\n    System.out.println("size=" + map.size());\n  }\n}', '1:1->1\n17:1->17\n33:1->1\n49:1->17\nsize=20', '前四行模拟已经扰动后的哈希值如何拆分，不是反射读取内部数组。size=20 只验证映射数量，不能凭公开 size 推断扩容次数；容量 32、阈值 24 的结论来自所述 OpenJDK 17 实现。'),
      boundaries: ['碰撞导致的树化尝试也可能优先触发扩容，容量推算应明确正常哈希分布与具体实现前提。', '访问顺序 LinkedHashMap 的 get 可能修改链表顺序，不能把它视为完全不改变结构的只读操作。'],
      answer: '容量、size 和扩容阈值是三件事。OpenJDK 17 用 2 的幂容量，默认阈值约为容量的 0.75；请求容量 20 通常规整到 32，正常放 20 个键不因负载再次扩容。翻倍时每个旧桶按哈希新增加的一位拆到原下标或原下标加旧容量。需要顺序和范围能力时再选 LinkedHashMap 或 TreeMap。',
      followUps: qa([['为何不把初始容量开得越大越好？', '桶数组占内存，HashMap 遍历成本还与容量有关，过度预留会造成空间和扫描浪费。'], ['LRU 怎样使用 LinkedHashMap？', '启用 accessOrder，并在 removeEldestEntry 中按容量淘汰最老条目；生产缓存还需并发、过期、加载失败和权重策略。']]),
      checks: qa([['旧容量 16，旧桶 3 的节点扩容后只能在哪里？', '只能在 3 或 19，由保存哈希的第 16 位是否置位决定。']]),
      prerequisites: links([['course-collections-hashmap', '先理解桶下标与哈希。']]), related: links([['course-data-indexes', '比较哈希和有序索引适用的查询。']]), conceptIds: ['collections-resize', 'collections-hashmap-capacity', 'collections-treemap', 'collections-map'], readingIds: ['xl-collections-aee02ec8ac4d3a6c', 'xl-collections-b351a893d55d321a', 'xl-collections-6287ff9e6647ad69', 'xl-collections-e48f6851b50221e6', 'xl-collections-7dfca5d9031c7614'], sourceChapters: ['Map'], sources: [S.hashSource, api('java.base/java/util/LinkedHashMap', 'LinkedHashMap'), api('java.base/java/util/TreeMap', 'TreeMap')]
    },
    {
      id: 'course-collections-concurrent-map', topicId: 'collections', chapter: '并发容器的边界', title: 'ConcurrentHashMap 的单次安全与业务原子性',
      intro: '容器已经线程安全，为什么先 get 再 put 统计次数仍会丢更新？',
      explanation: [
        '线程安全的容器保证其规定操作的并发语义，不会自动把调用方的多次操作合并。两个线程都 get 到 0，各算出 1 再 put，单次 get 与 put 都合法，最终却只记录一次。需要用 merge、compute 或 putIfAbsent 表达单键原子更新，或在业务范围内使用额外同步。',
        'OpenJDK 17 ConcurrentHashMap 常在空桶插入时使用 CAS，在非空桶更新时进行桶级同步，读取依赖经过设计的可见性访问通常不阻塞。扩容用转发节点连接新旧表，并可由多个线程协作迁移；看到扩容标记的操作按算法转向新表。这不是 JDK 7 固定 Segment 分段锁模型。',
        '它禁止 null 键和值，get 返回 null 因而能表达当前没有映射。size 和遍历在并发修改期间反映动态状态，不能拿“size 小于上限，然后 put”实现严格容量控制。compute 回调也应短小，不在里面长时间访问远程服务或递归修改同一映射。'
      ],
      flow: steps([['定义原子范围', '明确是单键累加、首次安装，还是跨键不变量。'], ['选择 API', '单键用 merge/compute/putIfAbsent，跨键另行设计事务式锁定或数据模型。'], ['更新与发布', '容器同步结构写入，并让读取到该更新的线程获得对应可见性。'], ['独立处理值对象', '映射安全发布之后，值对象后续的可变状态仍需自身同步。']]),
      example: example('public class ConcurrentCountDemo {\n  public static void main(String[] args) throws Exception {\n    var counts = new java.util.concurrent.ConcurrentHashMap<String, Integer>();\n    Runnable task = () -> {\n      for (int i = 0; i < 1000; i++) counts.merge("hits", 1, Integer::sum);\n    };\n    Thread a = new Thread(task), b = new Thread(task);\n    a.start(); b.start();\n    a.join(); b.join();\n    System.out.println(counts.get("hits"));\n  }\n}', '2000', 'merge 将读取旧值、计算和写回纳入这个键的原子操作。join 确保输出发生在两个线程结束之后；容器本身不会替主线程等待任务完成。'),
      boundaries: ['get 返回一个 ArrayList 不代表对该列表的后续 add 自动线程安全。', 'computeIfAbsent 可避免同一键某次建立过程的竞争，但 null 返回、异常、删除或不同进程仍可能使加载再次发生。'],
      answer: 'ConcurrentHashMap 保证规定的容器操作安全，不保证调用方的 get-计算-put 组合原子。单键更新用 merge 或 compute，跨键约束要额外设计。Java 17 实现结合 CAS、桶级同步和协作扩容，读取通常不阻塞；并发 size、遍历和值对象后续修改都有独立边界。',
      followUps: qa([['CAS 与 synchronized 为什么同时出现？', '空桶安装适合一次比较交换，复杂链表或树的修改用局部互斥更易维护一致结构，不是二选一。'], ['Hashtable 与它有什么关键差异？', 'Hashtable 主要通过对象级同步串行化方法；ConcurrentHashMap 允许更细粒度并发，并提供明确的单键原子复合 API。']]),
      checks: qa([['if (!map.containsKey(k)) map.put(k,v) 原子吗？', '不是，应根据意图用 putIfAbsent 或 computeIfAbsent。']]),
      prerequisites: links([['course-collections-hashmap', '先掌握桶与键查找。'], ['concurrency-shared-state', '认识复合动作的竞争。']]), related: links([['course-juc-jmm', '容器可见性依靠内存模型关系。'], ['course-juc-atomics', '比较 CAS 和分散计数。']]), conceptIds: ['concurrency-concurrent-map', 'concurrency-concurrent-map-atomic', 'concurrency-concurrent-map-resize'], readingIds: ['xl-collections-8a0b6fe9185f6321', 'xl-collections-09eb239ca8ccfe5a', 'xl-collections-4724cf7d1238a223', 'xl-collections-ad502c6dea949d0a', 'xl-collections-2436ea4b136f678e'], sourceChapters: ['Map'], sources: [S.chm, src('OpenJDK 17u · ConcurrentHashMap 源码', 'https://github.com/openjdk/jdk17u/blob/master/src/java.base/share/classes/java/util/concurrent/ConcurrentHashMap.java')]
    },
    {
      id: 'course-collections-queue', topicId: 'collections', chapter: '并发容器的边界', title: '队列的顺序、等待与容量策略',
      intro: '队列满时应该抛错、返回 false 还是等待？这些区别如何影响生产者和线程池？',
      explanation: [
        'Queue 规定一端加入、从队头取得的接口，但队头由实现定义：普通 FIFO 按到达顺序，PriorityQueue 按优先级。Deque 支持两端，可实现栈或双端队列；现代代码常使用 ArrayDeque 处理局部栈。PriorityQueue 底层是堆，只保证队头最小或最优，迭代内部数组不等于有序输出。',
        'BlockingQueue 为生产者消费者提供等待语义：offer/poll 立即返回失败标记，put/take 等待条件满足，带超时版本限制等待。ArrayBlockingQueue 有固定容量，LinkedBlockingQueue 可指定容量；SynchronousQueue 不存放普通排队元素，每次交接需要匹配接收方。选择的是过载行为，不只是容器名称。',
        '队列让对象从生产者安全发布给消费者，但不会自动解决总量失控。容量应与可接受排队时间、内存和消费速度对应；生产长期快于消费时，只增加队列容量会延迟暴露过载。'
      ],
      flow: steps([['确定队头含义', '按到达、优先级或时间决定谁先被消费。'], ['设定容量', '用可承受延迟与每个元素占用估计上界。'], ['选择失败策略', '明确立即拒绝、有限等待还是无限等待，并传播给上游。'], ['消费并释放', '取出后处理任务，失败、重试与结束信号另行定义。']]),
      example: example('// JShell\nvar q = new java.util.concurrent.ArrayBlockingQueue<String>(1);\nSystem.out.println(q.offer("first"));\nSystem.out.println(q.offer("second"));\nSystem.out.println(q.poll());\nSystem.out.println(q.poll());\nvar priority = new java.util.PriorityQueue<>(java.util.List.of(7, 2, 5));\nwhile (!priority.isEmpty()) System.out.print(priority.poll() + " ");', 'true\nfalse\nfirst\nnull\n2 5 7 ', '容量为 1 时第二次 offer 不会等待。连续 poll PriorityQueue 才产生优先级顺序；不能用其普通遍历顺序代替排序。'),
      boundaries: ['BlockingQueue 的队列方法安全不代表任意多个方法组成的动作原子，先查 remainingCapacity 再插入仍会竞争。', '标准 BlockingQueue 没有统一 close 方法，结束消费需要中断、约定消息或更高层生命周期机制。'],
      answer: '队列要同时解释顺序、容量和满空行为。Deque 支持两端，PriorityQueue 只保证队头优先，BlockingQueue 提供立即返回、阻塞和超时三类选择。有界队列能把过载及时传递给上游；无限排队不能提高长期吞吐，只会增加延迟和内存占用。',
      followUps: qa([['线程池使用 BlockingQueue，提交就会自动阻塞吗？', '不会。ThreadPoolExecutor 的常规提交路径使用非阻塞 offer，满了按扩线程和拒绝策略继续处理。'], ['为什么 BlockingQueue 不允许 null？', 'poll 用 null 表示暂时没有元素，禁用 null 元素避免结果歧义。']]),
      checks: qa([['把示例第二次 offer 改成 put，在没有消费者时会怎样？', '主线程等待可用空间，后面的 poll 也无法执行，程序会停在 put。']]),
      prerequisites: links([['course-collections-views', '先知道集合接口各自的语义。']]), related: links([['course-juc-executor', '队列策略直接决定线程池提交路径。']]), conceptIds: ['collections-queue', 'concurrency-blocking-queue'], readingIds: ['xl-collections-336f4bb2396acefb', 'xl-collections-534cfe2988ec27d4', 'xl-collections-5bdbce2247272361'], sourceChapters: ['Queue'], sources: [api('java.base/java/util/concurrent/BlockingQueue', 'BlockingQueue'), api('java.base/java/util/PriorityQueue', 'PriorityQueue'), api('java.base/java/util/Deque', 'Deque')]
    },
    {
      id: 'course-juc-thread', topicId: 'juc', chapter: '任务与线程', title: '启动、等待与中断：线程为什么需要协作退出',
      intro: '调用 run 没有并发，调用 interrupt 又没有立刻停止：线程 API 实际承诺了什么？',
      explanation: [
        'Runnable 描述任务，Thread 表示执行线程。直接 run 是当前线程的一次普通方法调用，start 才请求启动新线程并在其上下文运行任务；同一 Thread 对象只能启动一次。Java 的 RUNNABLE 同时涵盖可运行和正在执行等情况，不能直接等同于操作系统瞬间正在占用 CPU。Java 17 常见 HotSpot 平台线程依托操作系统线程，Java 21 虚拟线程则改变了大量阻塞任务的承载方式。',
        '中断是一种协作取消协议。interrupt 通常设置状态；sleep、wait、join 等可中断阻塞会以 InterruptedException 响应，并清除中断状态。任务应在合适位置检查并退出，或把异常继续传播；若在无法继续抛出的边界捕获，通常恢复中断状态再结束。强制停止会在对象状态更新一半时破坏不变量，所以不能以 Thread.stop 代替退出设计。',
        'sleep 暂停当前线程但不释放它持有的监视器；wait 必须持有目标监视器，并释放该监视器等待条件。BLOCKED 主要表示等待进入监视器，WAITING/TIMED_WAITING 还可能来自 wait、join、park、sleep 等，诊断时要同时看堆栈。'
      ],
      flow: steps([['创建任务', '把需要做的动作与执行线程区分，明确取消和资源释放协议。'], ['启动', 'start 建立新的执行路径；主线程与子线程调度先后不固定。'], ['请求取消', '发送中断，任务在中断点或检查点响应。'], ['等待结束', 'join 或 Future 观察实际结束，不能把发送中断当成已完成退出。']]),
      example: example('public class InterruptDemo {\n  public static void main(String[] args) throws Exception {\n    Thread worker = new Thread(() -> {\n      try {\n        Thread.sleep(60_000);\n      } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n        System.out.println("cancelled");\n      }\n    });\n    worker.start();\n    worker.interrupt();\n    worker.join();\n    System.out.println(worker.getState());\n  }\n}', 'cancelled\nTERMINATED', '即使中断先于 sleep 执行，sleep 也会检测已设置的中断状态。join 保证打印最终状态时子线程已经结束；不是靠 sleep 猜测执行进度。'),
      boundaries: ['并非所有阻塞 API 都以相同方式响应中断，Socket、通道、锁等要核对各自契约。', 'Thread.interrupted() 查询并清除当前线程状态；isInterrupted() 查询目标线程状态而不清除。'],
      answer: '任务和线程分开看：run 是普通调用，start 才启动新的执行路径。中断是请求取消，不是强杀；任务需要在可中断阻塞或检查点合作响应，并释放资源。诊断线程状态还要结合堆栈，因为 RUNNABLE 不代表一直占 CPU，sleep 与 wait 的锁释放行为也不同。',
      followUps: qa([['捕获 InterruptedException 后什么都不做有何问题？', '它已清除状态，若继续循环就可能吞掉取消请求，导致上层无法停止任务。'], ['虚拟线程会让 CPU 密集任务更快吗？', '通常不会增加处理器能力；其主要价值是低成本承载大量等待型任务，仍应限制下游资源并发。']]),
      checks: qa([['调用 interrupt 后可以马上假定连接已经关闭吗？', '不可以，仍需等待任务响应并完成 finally 等清理。']]),
      prerequisites: links([['course-java-exceptions', '理解中断异常的传播和清理。']]), related: links([['concurrency-virtual-threads', '了解明确标注为 Java 21 的线程模型。']]), conceptIds: ['concurrency-thread', 'concurrency-lifecycle', 'concurrency-interrupt', 'concurrency-wait-notify'], readingIds: ['xl-juc-ae3d769156a5ba0b', 'xl-juc-68b5767311272aa3', 'xl-juc-39c0b1b013c675ef', 'xl-juc-21d16ed082b05218'], sourceChapters: ['多线程'], sources: [S.thread, api('java.base/java/lang/Thread.State', 'Thread.State'), src('Oracle · Java 21 虚拟线程', 'https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html')]
    },
    {
      id: 'course-juc-jmm', topicId: 'juc', chapter: '共享状态与同步', title: 'JMM：先证明可见，再讨论原子',
      intro: '一个线程把 data 改成 42 再设置 ready，另一个线程看到 ready 后，为什么还要证明 data 可见？',
      explanation: [
        'Java 内存模型规定并发读写可以观察到哪些结果，不是把堆、栈和元空间画出来。单线程代码顺序并不自动形成跨线程同步；编译器和处理器的优化只需满足相应语义，存在数据竞争时不能以“时间上应该执行过了”证明可见性。happens-before 提供推理关系，包括线程 start、join、同一监视器解锁到后续加锁，以及 volatile 写到后续读。',
        'volatile 适合发布状态与单变量通知。写线程先完成普通字段写入，再写 volatile 标记；读线程若读到该发布写，通过传递关系可见此前数据。但 count++ 仍是读取、计算、写回的复合动作，volatile 不把它变成不可分割的操作。原子性、可见性和顺序约束必须分别检查。',
        '安全发布对象还要求构造期不让 this 提前逃逸。双重检查单例的 volatile 用来安全发布引用及已构造状态，synchronized 则控制竞争创建；仅在慢路径加锁，不能自动保护没有加锁的快路径读取。更简单的 holder 方案可利用类初始化保证。'
      ],
      flow: steps([['列出共享变量', '标注谁写 data、谁读 data，以及用于协调的 ready。'], ['寻找同步边', '确定读方读到哪个 volatile 写，或获取哪个已释放的锁。'], ['连接传递关系', '普通写先于发布写，发布写先于读取标记，再先于读取数据。'], ['单独检查复合动作', '即使可见，读改写和跨字段不变量仍需互斥或原子 API。']]),
      example: example('public class PublicationDemo {\n  static int data;\n  static volatile boolean ready;\n  public static void main(String[] args) throws Exception {\n    Thread writer = new Thread(() -> { data = 42; ready = true; });\n    Thread reader = new Thread(() -> {\n      while (!ready) Thread.onSpinWait();\n      System.out.println(data);\n    });\n    reader.start(); writer.start();\n    writer.join(); reader.join();\n  }\n}', '42（假定线程得到调度并执行完成）', '关键不是循环等了多久，而是 reader 观察到 ready=true 这一 volatile 发布。示例为了显露关系才自旋，实际长时间等待应使用阻塞同步器。'),
      boundaries: ['happens-before 是允许观察行为的规则，不要求把所有操作按同样物理时间顺序执行。', '去掉 volatile 后，某次测试仍输出 42 不能证明程序正确，也不能依赖日志调用偶然增加同步。'],
      answer: 'JMM 用 happens-before 说明跨线程可见性与顺序约束，和 JVM 堆栈布局不同。我先找线程启动、结束、锁或 volatile 建立的同步边，再检查复合更新是否原子。volatile 可发布已完成的数据写入，但不能让 ++ 原子，也不能独立维护多个字段的不变量。',
      followUps: qa([['join 为什么能让主线程读到任务结果？', '被等待线程中的动作 happens-before 另一个线程成功检测它终止后的动作。'], ['双重检查为什么锁和 volatile 都有作用？', '锁避免同时创建，volatile 支持无锁快路径的安全发布与可见性，二者解决不同问题。']]),
      checks: qa([['两个线程各对 volatile int 加 50 次，是否保证得到 100？', '不保证，读取与写回可交错丢更新，应使用锁或 AtomicInteger。']]),
      prerequisites: links([['course-java-reference-call', '知道哪些对象被多个线程共享。']]), related: links([['course-juc-locks', '用互斥保护复合不变量。'], ['course-jvm-memory', '区分内存模型与内存区域。']]), conceptIds: ['concurrency-jmm', 'concurrency-happens-before', 'concurrency-volatile', 'concurrency-shared-state'], readingIds: ['xl-juc-0b32ef4151b90c28', 'xl-juc-3cf54a2ca8a1a8b4', 'xl-juc-69411483131d70ba', 'xl-juc-9bd74be9ff0711e6'], sourceChapters: ['多线程', '并发安全', '场景'], sources: [S.jmm, jls(17, '17.5', 'final 字段语义')]
    },
    {
      id: 'course-juc-locks', topicId: 'juc', chapter: '共享状态与同步', title: '锁保护不变量，AQS 管理等待与重新竞争',
      intro: '库存检查与扣减各自都很短，为什么必须放在同一把锁里？排队被唤醒后为何还要重新抢锁？',
      explanation: [
        '锁应保护一条必须整体成立的状态规则。例如“库存大于零才扣减”，检查和扣减分开加锁仍可能被其他线程插入。所有访问该不变量的路径必须使用同一同步约定。synchronized 实例方法锁 this，静态方法锁对应 Class；不同对象上的锁不会互相排斥。它支持重入，并在正常或异常离开时释放。',
        'ReentrantLock 提供可中断获取、超时尝试和多个 Condition 等能力，必须在成功获取后通过 finally 解锁。公平模式倾向照顾等待较久者，但不能保证操作系统调度公平，某些 tryLock 形式也不遵循排队公平。非公平模式允许新到线程抢占，可能减少唤醒交接成本，却有饥饿风险。',
        'AQS 不是一种具体锁，而是以原子 state、等待队列和阻塞唤醒为基础的同步器骨架。子类定义 state 的含义：可重入锁可记录持有次数，信号量可表示许可。获取失败入队，释放时通知后继重新尝试；unpark 只是让线程有机会运行，不把资源所有权直接交给它。固定锁顺序、缩小持锁范围和避免持锁外部调用能降低死锁风险。'
      ],
      flow: steps([['定义不变量', '库存不得为负，判断和扣减属于一个受保护动作。'], ['获取同一把锁', '成功后才能观察与修改受保护字段。'], ['执行或等待', 'AQS 获取失败的线程排队阻塞，唤醒后重新检查条件。'], ['可靠释放', 'finally 解锁，把后续获取者需要看到的状态发布出去。']]),
      example: example('public class StockDemo {\n  static class Stock {\n    private int left = 1;\n    private final java.util.concurrent.locks.ReentrantLock lock =\n        new java.util.concurrent.locks.ReentrantLock();\n    boolean buy() {\n      lock.lock();\n      try {\n        if (left == 0) return false;\n        left--; return true;\n      } finally { lock.unlock(); }\n    }\n  }\n  public static void main(String[] args) {\n    Stock stock = new Stock();\n    System.out.println(stock.buy());\n    System.out.println(stock.buy());\n  }\n}', 'true\nfalse；若两个线程并发调用，仍只允许一个成功，成功线程身份不确定。', '示例把判断和扣减放在同一临界区。返回发生时 finally 仍执行，因此不会因提前 return 漏解锁。'),
      boundaries: ['锁的互斥只覆盖约定使用这把锁的代码，另一个路径直接写 left 会破坏保证。', '偏向锁、轻量锁、膨胀等属于具体 HotSpot 版本实现；Java 17 不应照搬旧版默认开启偏向锁的固定升级叙述。'],
      answer: '我围绕不变量确定临界区，而不是逐行随意加锁。synchronized 提供可重入互斥和可见性，ReentrantLock 在此基础上提供超时、中断及条件队列等控制。AQS 管理 state 和等待，具体同步器定义资源语义；释放后唤醒的线程还要重新竞争。设计时同时检查锁对象一致、finally 释放和多锁顺序。',
      followUps: qa([['可重入解决什么问题？', '同一线程已持有锁时可以继续进入同锁保护的内部调用，用持有计数配对释放，避免自己等待自己。'], ['死锁如何定位？', '查看线程转储的持锁与等待对象形成的循环，再检查获取顺序、外部调用和超时退出路径。']]),
      checks: qa([['两个 Stock 实例各自的 lock 能保护一个共享 static 库存吗？', '不能，两把不同锁没有互斥关系，应为共享库存采用共同同步机制。']]),
      prerequisites: links([['course-juc-jmm', '先理解锁同时建立可见性关系。']]), related: links([['course-juc-coordination', '学习等待条件与通知。']]), conceptIds: ['concurrency-monitor', 'concurrency-reentrant-lock', 'concurrency-aqs', 'concurrency-aqs-state', 'concurrency-aqs-queue', 'concurrency-lock-fairness'], readingIds: ['xl-juc-05a4ffc42d5507a4', 'xl-juc-0ccda1fcc7e33a57', 'xl-juc-40766382817ef25c', 'xl-juc-f77a3de717d80b4a', 'xl-juc-abec7c002ec0cd33'], sourceChapters: ['并发安全'], sources: [api('java.base/java/util/concurrent/locks/ReentrantLock', 'ReentrantLock'), api('java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer', 'AQS'), jls(17, '17.1', '监视器同步')]
    },
    {
      id: 'course-juc-atomics', topicId: 'juc', chapter: '共享状态与同步', title: 'CAS 重试、ABA 与 AtomicLong / LongAdder 的选择',
      intro: '不用互斥锁也能扣减库存吗？为什么统计计数器快，并不代表它适合判断最后一张票？',
      explanation: [
        'CAS 把“当前位置仍是预期值吗”与“若是就写入新值”作为原子操作。线程先读旧值，计算新值，再比较交换；失败说明竞争者已改变状态，应重新读取和判断业务条件。它是一种乐观更新机制，而不是保证整个方法只执行一次；计算函数可能被重复求值，因此不应把发送消息等副作用放进可重试函数。',
        'CAS 的问题包括竞争激烈时反复重试、只能直接协调受支持的单个位置，以及 ABA：值从 A 变成 B 又变回 A，单看当前值检测不到中间变化。是否有害取决于业务语义，需要时使用版本号或带标记引用，但仍要处理版本范围和对象生命周期。',
        'AtomicLong 提供可用于细粒度同步控制的单个原子数值；LongAdder 在竞争时分散到多个计数单元，减少同一位置争用，以更多空间换统计吞吐。sum 并不是并发期间对所有单元的原子快照，所以适合监控累计，不适合“若总数小于阈值则预订”的严格决策。'
      ],
      flow: steps([['读取快照', '获得当前库存，先判断是否满足扣减条件。'], ['计算候选值', '只进行可安全重试的纯计算。'], ['比较交换', '成功则该次扣减成立，失败则回到读取并重验。'], ['选择冲突策略', '竞争严重时衡量退避、锁或分散统计，而非无限认为 CAS 更快。']]),
      example: example('// JShell\nvar stock = new java.util.concurrent.atomic.AtomicInteger(1);\nstatic boolean reserve(java.util.concurrent.atomic.AtomicInteger s) {\n  for (;;) {\n    int old = s.get();\n    if (old == 0) return false;\n    if (s.compareAndSet(old, old - 1)) return true;\n  }\n}\nSystem.out.println(reserve(stock));\nSystem.out.println(reserve(stock));\nSystem.out.println(stock.get());', 'true\nfalse\n0', '每次失败都重新读取并检查库存，防止用过时的 old 无限重试。成功后再执行需要恰好一次控制的后续业务；跨系统副作用仍需独立的幂等或事务设计。'),
      boundaries: ['锁也可能内部使用 CAS，乐观与悲观不是严格对应两个互不重叠的实现家族。', '多字段约束可封装成不可变状态对象再 CAS 引用，但每次失败会产生重算和分配成本。'],
      answer: 'CAS 原子比较并更新一个位置，失败后必须重新读取和校验，因此适合低冲突的短更新。要考虑重试成本、ABA 和副作用重复。AtomicLong 适合精确原子控制，LongAdder 分散热点以提高统计吞吐，但并发 sum 不是原子快照，不能直接承担严格配额判断。',
      followUps: qa([['AtomicInteger.updateAndGet 的函数能发邮件吗？', '不应如此，竞争可能让函数重试多次；状态更新和外部副作用要按明确协议连接。'], ['CAS 是否无饥饿？', '不能保证某个线程总能成功，其他线程不断获胜可能使它反复失败。']]),
      checks: qa([['给 CAS 循环只读一次 old，失败后不刷新，会怎样？', '若当前值不再等于 old，就可能永远失败自旋，还忽略了新的业务状态。']]),
      prerequisites: links([['course-juc-jmm', '原子性不能由可见性替代。']]), related: links([['course-collections-concurrent-map', '容器中的 CAS 与桶锁各有用途。']]), conceptIds: ['concurrency-cas', 'concurrency-atomic'], readingIds: ['xl-juc-a5f7ec0b08f00331', 'xl-juc-f8e57a35a7ef1edb', 'xl-juc-bffa47ddbefdadf4'], sourceChapters: ['并发安全'], sources: [api('java.base/java/util/concurrent/atomic/AtomicInteger', 'AtomicInteger'), api('java.base/java/util/concurrent/atomic/AtomicStampedReference', 'AtomicStampedReference'), api('java.base/java/util/concurrent/atomic/LongAdder', 'LongAdder')]
    },
    {
      id: 'course-juc-threadlocal', topicId: 'juc', chapter: '任务与线程', title: 'ThreadLocal 跟随线程，不能代表请求生命周期',
      intro: '线程池处理完用户 A 后，用户 B 为什么可能读到 A 的上下文？异步任务又为何读不到请求线程的值？',
      explanation: [
        'ThreadLocal 提供按线程隔离的槽位。同一个 ThreadLocal 实例，在不同线程里 get/set 访问各自的值；它不是在共享对象外面自动加锁。若两个线程存入的是同一个可变对象引用，对象本身依然共享。线程池复用的是线程，任务结束并不意味着线程的槽位被自动清除。',
        'OpenJDK 的 ThreadLocalMap 条目弱引用 key，而 value 仍可被存活线程强引用。key 被回收不等于 value 立即释放，清理依赖相关访问等机会；长期工作线程会放大残留风险。即使 key 是 static 不会消失，忘记清理也会让下一任务读到上一任务数据。',
        '异步执行切换到另一线程时不会自然继承普通 ThreadLocal。InheritableThreadLocal 在创建子线程时复制关系，也不能正确表达线程池每次任务提交的上下文。应在任务边界显式捕获必要数据、在工作线程安装，并在 finally 清除或恢复原值；事务和安全上下文还需遵守框架专门约束。'
      ],
      flow: steps([['进入请求', '建立最小必要上下文，不把完整请求对象长期挂在线程上。'], ['同步使用', '同一线程的下游读取自己的槽位。'], ['异步交接', '明确复制哪些值，不能假设换线程仍得到相同上下文。'], ['退出清理', '在 finally remove；嵌套作用域需恢复进入前的值。']]),
      example: example('public class LocalDemo {\n  public static void main(String[] args) throws Exception {\n    var local = new ThreadLocal<String>();\n    var pool = java.util.concurrent.Executors.newSingleThreadExecutor();\n    try {\n      pool.submit(() -> {\n        local.set("user-A");\n        try { System.out.println(local.get()); }\n        finally { local.remove(); }\n      }).get();\n      pool.submit(() -> System.out.println(local.get())).get();\n    } finally { pool.shutdown(); }\n  }\n}', 'user-A\nnull', '单工作线程确保两个任务使用同一线程；remove 让第二个任务不继承上一次任务数据。删掉 remove 后第二次会读到 user-A，形成上下文串用。'),
      boundaries: ['remove 清理的是当前线程对应槽位，在请求线程 remove 不会替工作线程清理。', '不要把 JDBC 连接或未明确可共享的事务资源作为普通上下文随意跨线程传递。'],
      answer: 'ThreadLocal 隔离的是线程槽位，生命周期跟线程走。在线程池中请求结束而线程继续存活，因此必须在任务边界 finally 清理，否则可能残留内存或串用上下文。异步任务换线程不会自动得到原值，需要显式、安全地传播必要信息；InheritableThreadLocal 也不等于线程池任务上下文传播。',
      followUps: qa([['key 用弱引用为什么还会泄漏？', '存活线程的 map 仍可能强持有 value，失效条目未及时清除时对象仍可达。'], ['ThreadLocal 能保证放进去的 ArrayList 线程安全吗？', '只有每线程确实持有不同列表时才形成隔离；存入同一列表引用仍需同步。']]),
      checks: qa([['第二个任务运行在同一线程，为什么还能得到 null？', '前一任务调用 remove 删除该线程的值，下一次 get 重新按初始规则取得 null。']]),
      prerequisites: links([['course-juc-thread', '分清任务和线程的生命周期。']]), related: links([['web-spring-transaction', '事务上下文与线程边界相连。'], ['course-jvm-reachability', '沿引用链解释残留对象。']]), conceptIds: ['concurrency-thread-local', 'engineering-resource-boundaries'], readingIds: ['xl-juc-4d9f3d906282ed45'], sourceChapters: ['并发安全'], sources: [api('java.base/java/lang/ThreadLocal', 'ThreadLocal'), src('OpenJDK 17u · ThreadLocal 源码', 'https://github.com/openjdk/jdk17u/blob/master/src/java.base/share/classes/java/lang/ThreadLocal.java')]
    },
    {
      id: 'course-juc-coordination', topicId: 'juc', chapter: '共享状态与同步', title: '等条件与等完成：wait、Latch 和 Barrier',
      intro: '两个线程轮流打印数字靠 sleep 为什么不可靠？等待三个任务完成又应该使用哪种同步器？',
      explanation: [
        '等待应围绕可判断的条件，而不是猜测时间。监视器方案要在同一锁内检查条件，不满足时 while 循环 wait；wait 释放该监视器，唤醒后先重新获取它，再重新检查条件。通知只是提示条件可能变化，notify 不保证选择哪个等待者，notifyAll 让所有等待者有机会重新判断。',
        'CountDownLatch 适合一次性等待若干动作完成，计数到零后不能重置。CyclicBarrier 适合多个参与者反复在阶段边界会合；Semaphore 控制同时使用有限资源的数量。选择同步器要问“等一个状态、等所有结束、等所有到齐，还是等一个许可”，这些问题不同。',
        '用完成信号还要定义失败路径。任务异常也应在 finally countDown，否则协调线程可能永远等待；但倒计时归零只说明约定的动作发过完成信号，不代表所有任务成功，结果和错误还需要另外收集。'
      ],
      flow: steps([['写出条件', '轮流打印用 next 的奇偶性；等待完成用尚未结束的任务数。'], ['原子检查与等待', '条件判断与 wait 在同一把锁内，避免丢失通知。'], ['更新并通知', '改变状态后通知等待者，等待者重新验证而非直接假定满足。'], ['覆盖失败退出', '任何结束路径都释放应释放的许可或发出完成信号。']]),
      example: example('public class LatchDemo {\n  public static void main(String[] args) throws Exception {\n    var done = new java.util.concurrent.CountDownLatch(3);\n    int[] results = new int[3];\n    for (int i = 0; i < 3; i++) {\n      final int index = i;\n      new Thread(() -> {\n        try { results[index] = index + 1; }\n        finally { done.countDown(); }\n      }).start();\n    }\n    done.await();\n    System.out.println(java.util.Arrays.toString(results));\n  }\n}', '[1, 2, 3]', '每个线程写独立槽位，再 countDown。成功 await 返回后能看到这些之前的写入；输出顺序来自数组下标，不依赖线程完成顺序。'),
      boundaries: ['虚假唤醒、其他线程抢先消耗条件等都要求 while 重查，不能把 wait 放在单次 if 中。', 'Latch 不会自动取消未完成任务，实际协调需要超时、失败收集与取消策略。'],
      answer: '我按等待的含义选工具。等共享条件可用锁与 while-wait 或 Condition，通知后必须重新检查；等一组任务一次完成用 CountDownLatch，反复阶段会合用 CyclicBarrier，限制并发数用 Semaphore。完成通知和任务成功分开记录，异常路径也要释放资源或倒计时，不能用 sleep 猜顺序。',
      followUps: qa([['轮流打印如何组织？', '共享 next，奇偶线程在同一锁下 while 检查是否轮到自己，不满足就 wait；打印后递增 next 并 notifyAll，结束时也通知避免遗留等待。'], ['CyclicBarrier 有线程失败意味着什么？', '会合可能被破坏，其他线程可能收到 BrokenBarrierException，应协调失败恢复，而不是继续假定下一阶段条件成立。']]),
      checks: qa([['把 countDown 放在 try 最后一行而不在 finally 有何风险？', '此前抛异常就跳过倒计时，使 await 无法按预期结束。']]),
      prerequisites: links([['course-juc-locks', '条件等待需要统一的锁与状态。']]), related: links([['course-juc-futures', '用异步结果组合同时表达结果和失败。']]), conceptIds: ['concurrency-wait-notify', 'concurrency-condition', 'concurrency-aqs-shared'], readingIds: ['xl-juc-0f62508ddd076a1a', 'xl-juc-b7522e4a9f97f6b8', 'xl-juc-40bd517fba66717c', 'xl-juc-253932e751b28701', 'xl-juc-6d5dab4a5ad30b93'], sourceChapters: ['并发安全', '场景'], sources: [api('java.base/java/util/concurrent/CountDownLatch', 'CountDownLatch'), api('java.base/java/util/concurrent/CyclicBarrier', 'CyclicBarrier'), S.object]
    },
    {
      id: 'course-juc-executor', topicId: 'juc', chapter: '执行器与结果', title: '线程池提交：核心线程、排队、扩线程、拒绝',
      intro: 'maximumPoolSize 明明很大，为何任务只排队不扩线程？队列满后，一个新任务到底去哪儿？',
      explanation: [
        'ThreadPoolExecutor 先看工作线程是否少于 corePoolSize，少则尝试创建线程执行新任务；达到核心数后优先向队列 offer。入队失败才尝试增加到 maximumPoolSize，再失败或池已关闭则拒绝。无界队列通常让任务持续入队，因此最大线程数很难发挥作用；它并不代表系统可以无限承压。',
        '队列容量把资源成本和等待时间连接起来：任务占内存，排队占延迟。容量估算应围绕到达速率、任务耗时、CPU 配额和数据库/HTTP 连接等下游上限，再通过压测看吞吐、排队、超时和拒绝。CPU 密集与阻塞任务有不同起点，但经验公式不是最终答案。核心数可以为零，执行器会保证有工作者处理已入队任务；核心线程也默认按需创建。',
        'AbortPolicy 抛异常使失败显式可见；CallerRunsPolicy 在池未关闭时让提交者执行，能形成反馈却可能阻塞请求或事件循环；Discard 类策略可能静默丢任务，尤其不能让等待结果的调用方无限挂起。shutdown 停止接收并处理已提交任务，shutdownNow 尝试中断正在执行者并返回尚未开始的任务，二者都不保证不合作的任务立刻终止。'
      ],
      flow: steps([['不足核心数', '尝试创建工作线程直接执行新任务。'], ['达到核心数', '调用队列 offer；成功排队后还需重新检查池状态与工作者。'], ['队列已满', '尝试创建额外线程，但总工作者不能超过最大数。'], ['无法接纳', '执行拒绝策略，调用方必须明确知道任务结果或采取补偿。'], ['关闭与观察', '关闭后等待终止，记录活跃线程、队列长度、任务耗时和拒绝数。']]),
      example: example('public class PoolDemo {\n  public static void main(String[] args) throws Exception {\n    var gate = new java.util.concurrent.CountDownLatch(1);\n    var pool = new java.util.concurrent.ThreadPoolExecutor(1, 2, 1,\n        java.util.concurrent.TimeUnit.SECONDS,\n        new java.util.concurrent.ArrayBlockingQueue<>(1));\n    Runnable blocked = () -> {\n      try { gate.await(); }\n      catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n    };\n    try {\n      pool.execute(blocked); // 核心线程\n      pool.execute(blocked); // 唯一排队槽位\n      pool.execute(blocked); // 第二个工作线程\n      try { pool.execute(blocked); }\n      catch (java.util.concurrent.RejectedExecutionException e) {\n        System.out.println("rejected");\n      }\n      System.out.println(pool.getPoolSize() + ":" + pool.getQueue().size());\n    } finally {\n      gate.countDown(); pool.shutdown();\n      pool.awaitTermination(5, java.util.concurrent.TimeUnit.SECONDS);\n    }\n  }\n}', 'rejected\n2:1', '闸门让已接纳任务停在运行中，形成可重复的饱和状态，第四个任务不能入队也不能新增线程。输出后释放闸门，让已接纳任务真正结束。'),
      boundaries: ['线程池中的 BlockingQueue 不意味着 execute 用 put 阻塞提交；标准路径是 offer。', '线程池只管理进程内执行，不提供任务持久化；进程退出会丢失未持久化工作。'],
      answer: '线程池按不足核心数建线程、达到核心数先排队、队列满再扩到最大、最后拒绝的路径接纳任务。因此无界队列常让最大线程数失效。我会用有限资源预算、服务时间和压测确定线程及队列容量，并让拒绝、超时和关闭行为显式可观察；shutdownNow 也是协作中断，不是强制结束。',
      followUps: qa([['execute 与 submit 的异常如何不同？', 'submit 通常把任务失败保存到 Future，get 时通过 ExecutionException 观察；忽略 Future 可能漏掉失败。execute 的未捕获异常走工作线程异常处理路径。'], ['@Async 是否等于自动使用合适线程池？', '不等于。它依赖框架代理、执行器选择和返回结果边界；同类自调用可能绕过代理，容量与异常观察仍要设计。']]),
      checks: qa([['把示例队列改成无容量限制的 LinkedBlockingQueue，第四次通常会拒绝吗？', '不会，任务持续入队，通常只有一个核心工作线程；这会改变延迟和内存风险。']]),
      prerequisites: links([['course-collections-queue', '队列容量和 offer 语义决定接纳路径。'], ['course-juc-thread', '执行器关闭依赖任务中断响应。']]), related: links([['course-juc-futures', '接纳成功后还需管理任务结果。'], ['web-spring-proxy', '@Async 的线程切换还受代理调用边界约束。']]), conceptIds: ['concurrency-executor', 'concurrency-executor-flow', 'concurrency-executor-rejection', 'concurrency-executor-sizing', 'concurrency-executor-lifecycle'], readingIds: ['xl-juc-68ecbc23e7d40dfc', 'xl-juc-7b9baa87c49be20f', 'xl-juc-0384d8c79c0c240c', 'xl-juc-164587b1538717bf', 'xl-juc-d518b3307b15f915', 'xl-juc-340bb9b0bb91a425'], sourceChapters: ['线程池'], sources: [S.pool, api('java.base/java/util/concurrent/ExecutorService', 'ExecutorService')]
    },
    {
      id: 'course-juc-futures', topicId: 'juc', chapter: '执行器与结果', title: 'Future 与 CompletableFuture：结果、依赖和失败传播',
      intro: '并行查用户和积分后再拼装结果，为什么不能在每次提交后马上 get？超时返回时后台任务停了吗？',
      explanation: [
        'Future 表示稍后取得的结果，可检查完成、等待和请求取消。若提交第一个任务后立刻 get，再提交第二个，两个本可并行的请求会被人为串行。CompletableFuture 进一步把依赖写成阶段：thenApply 转换结果，thenCompose 连接返回另一个异步结果的操作，thenCombine 汇合两个独立结果。',
        '非 Async 的后续阶段可能在完成上游的线程执行；带 Async 且未给执行器的阶段通常使用 commonPool，阻塞调用容易挤占共享资源。应给独立业务明确执行器与容量，并在边界观察异常。exceptionally 可以恢复值，但恢复必须符合业务语义，不能把数据库故障一律变成“查无此人”。',
        '超时完成和底层工作停止是两件事。orTimeout 让结果以超时异常完成，远程 I/O 可能仍在运行；CompletableFuture.cancel 主要是异常完成，不保证中断其背后的计算。要限制资源占用，还需底层客户端超时、取消协议和幂等处理。'
      ],
      flow: steps([['同时提交独立工作', '先启动用户与积分查询，不在提交中途阻塞等结果。'], ['表达依赖', '用 thenCombine 汇合；如果第二步依赖第一步结果，用 thenCompose。'], ['定义失败边界', '决定整体失败、局部降级或重试，并保留根因。'], ['回收执行资源', '测试或独立程序关闭自建执行器；服务中由其生命周期所有者管理。']]),
      example: example('public class FutureDemo {\n  public static void main(String[] args) {\n    var pool = java.util.concurrent.Executors.newFixedThreadPool(2);\n    try {\n      var name = java.util.concurrent.CompletableFuture\n          .supplyAsync(() -> "Lin", pool);\n      var points = java.util.concurrent.CompletableFuture\n          .supplyAsync(() -> 80, pool);\n      var result = name.thenCombine(points, (n, p) -> n + ":" + p);\n      System.out.println(result.join());\n    } finally { pool.shutdown(); }\n  }\n}', 'Lin:80', '两个来源互相独立，先分别提交，再建立汇合阶段。thenCombine 返回新的结果阶段，main 最后只等待一次；线程实际调度顺序不影响字符串结果。'),
      boundaries: ['allOf 只返回完成信号，不自动聚合成带类型的结果列表，需要在全部成功后取各自结果。', 'get 抛受检 ExecutionException，join 通常抛非受检 CompletionException；包装方式不同不改变任务失败事实。'],
      answer: 'Future 代表异步结果，CompletableFuture 还能表达阶段依赖与失败处理。独立任务先提交再汇合，串行依赖用 compose，纯结果变换用 apply。我会明确每阶段在哪个执行器运行，并区分结果超时与底层任务停止；不能因为 Future 已失败就认为网络调用或副作用已经取消。',
      followUps: qa([['thenApply 返回 CompletableFuture 会怎样？', '结果会嵌套成 CompletableFuture<CompletableFuture<T>>；需要自动展开时用 thenCompose。'], ['@Async 方法返回 void 的失败如何观察？', '不能由调用方等待结果直接取得，需框架异步异常处理和监控；需要可组合结果时应设计 Future 类返回值。']]),
      checks: qa([['orTimeout 后仍看到外部请求执行成功，是否矛盾？', '不矛盾，超时只完成了结果阶段，底层工作必须有独立取消和超时机制。']]),
      prerequisites: links([['course-juc-executor', '先明确任务在哪儿运行与何时被拒绝。']]), related: links([['course-java-streams', '对比同步映射与异步阶段变换。'], ['web-spring-proxy', '框架异步入口需要实际经过代理。']]), conceptIds: ['concurrency-completable-future', 'concurrency-executor-lifecycle'], readingIds: ['xl-juc-957015a67138d1f2', 'xl-juc-c49a169315a9eeac', 'xl-java-3e9350dc6f5156c4'], sourceChapters: ['线程池'], sources: [S.future, api('java.base/java/util/concurrent/Future', 'Future')]
    },
    {
      id: 'course-jvm-memory', topicId: 'jvm', chapter: '运行时区域与对象', title: '堆、栈、元空间与进程内存不是同一张账',
      intro: '堆只用了 500 MB，操作系统却看到 Java 进程占用 1 GB，剩下的内存在哪里？',
      explanation: [
        'JVM 规范描述运行时数据区域：线程有自己的程序计数器、Java 栈和栈帧，栈帧包含局部变量、操作数栈等；对象和数组从语义上由堆承载，方法区保存类相关结构。局部变量可以保存对象引用，不是“引用在栈里，所以对象也在栈里”。JMM 则讨论跨线程可见性，两者回答的问题不同。',
        'HotSpot 17 的元空间承载大量类元数据，主要使用本地内存；堆外还包括线程栈、代码缓存、直接缓冲区以及本地库分配等。-Xmx 只是 Java 堆上限，不是进程总内存上限。元空间取代永久代并不等于无限容量，动态生成类或类加载器无法回收也可能导致问题。',
        'String 对象本身是普通对象，变量持有其引用；字符串池描述规范化引用的共享机制，不是“所有字符串都在另一个独立内存世界”。intern 返回相同内容的规范引用，不能替代业务 equals。对象分配的物理布局还可能受逃逸分析与标量替换影响，不应把示意图当所有优化后的实现事实。'
      ],
      flow: steps([['追踪一次调用', '方法进入创建栈帧，局部变量记录数值或对象引用。'], ['追踪对象', 'new 数组得到对象引用，多个栈帧可通过引用共享它。'], ['追踪运行时成本', '线程、类、编译代码和直接内存分别记账。'], ['对齐监控口径', '区分堆已用、堆已提交、保留地址空间与进程驻留内存。']]),
      example: example('public class MemoryDemo {\n  static int first(int[] values) {\n    int[] alias = values;\n    alias[0] = 9;\n    return alias[0];\n  }\n  public static void main(String[] args) {\n    int[] a = {1};\n    System.out.println(first(a));\n    System.out.println(a[0]);\n    String s = new String("java");\n    System.out.println(s == "java");\n    System.out.println(s.intern() == "java");\n  }\n}', '9\n9\nfalse\ntrue', 'first 的栈帧结束后，main 仍持有数组引用，所以修改保留。new String 创建不同身份的对象；intern 返回内容相同的规范引用。输出并不能直接测量这些对象的实际物理布局。'),
      boundaries: ['堆、线程栈、元空间、直接内存不足可表现为不同错误，要根据错误文本与证据分类。', 'StackOverflowError 通常与调用深度有关，增大堆上限无法直接修复无限递归。'],
      answer: '运行时区域描述数据放在哪些抽象区域，JMM 描述并发如何观察数据。栈帧保存局部值和引用，对象语义上在堆；HotSpot 还使用元空间、代码缓存、线程栈和直接内存。因此进程内存远不止 -Xmx，排查必须对齐已用、提交、保留和 RSS 等口径。',
      followUps: qa([['直接内存为什么用于 NIO？', '可降低某些本地 I/O 交互中的额外复制，但分配和释放成本、容量预算与生命周期仍需考虑，不能一概认为更快。'], ['元空间持续增长先查什么？', '检查加载类数量、类加载器数量及保留关系，特别是动态代理、脚本生成和热部署后的类加载器残留。']]),
      checks: qa([['一个对象被两个线程的局部变量引用，有两份对象吗？', '没有，两个栈中的引用可以指向同一对象，所以仍可能有共享状态竞争。']]),
      prerequisites: links([['course-java-reference-call', '先分清变量、引用和对象。']]), related: links([['course-jvm-diagnostics', '把各内存口径转成诊断证据。']]), conceptIds: ['jvm-runtime-areas', 'jvm-stack', 'jvm-metaspace', 'jvm-heap', 'concurrency-jmm'], readingIds: ['xl-jvm-5ea47a446b389834', 'xl-jvm-84f5cb90f373602f', 'xl-jvm-eabdbf536168dd04', 'xl-jvm-154c0959522dea9f', 'xl-jvm-ea7be49adc8d01b9', 'xl-jvm-849cf9f83b3fae05'], sourceChapters: ['内存结构'], sources: [S.vm, api('java.base/java/lang/String', 'String.intern'), src('HotSpot 17 · 其他内存考虑', 'https://docs.oracle.com/en/java/javase/17/gctuning/other-considerations.html')]
    },
    {
      id: 'course-jvm-loading', topicId: 'jvm', chapter: '运行时区域与对象', title: '类加载、类初始化与一次 new 的完整准备过程',
      intro: '读取编译期常量没有打印 static 日志，第一次 new 却打印了：加载和初始化为什么要分开？',
      explanation: [
        '类生命周期中，加载取得并定义类的二进制表示，链接包含验证、准备和解析，初始化执行类初始化逻辑。准备阶段为静态字段建立默认值等状态，不能简单等同于执行源码中的所有赋值。解析可按需发生，因此阶段图表达逻辑职责，不应理解为所有 JVM 都一次性急切执行完全部解析。',
        'new、调用声明类的静态方法、读取或写入非编译期常量静态字段等主动使用会触发相应初始化。读取编译期常量可能被内联，不触发其声明类初始化。初始化过程有同步控制，其他线程通常等待同一类完成初始化；但在初始化中启动线程再互相等待仍可能造成死锁。',
        '常见类加载器采用先委派父加载器的策略，帮助统一核心类身份；自定义加载器、插件隔离等可以采用特定加载规则。类身份由二进制名和定义它的加载器共同决定。类已准备好后，new 才建立实例、默认字段值与构造链；HotSpot 常用 TLAB 减少分配竞争，逃逸分析可优化掉某些对象分配，但不改变可观察语义。'
      ],
      flow: steps([['取得并验证类', '查找 class、定义类并校验其结构与引用约束。'], ['链接与初始化', '准备静态状态；主动使用时按规范执行初始化并处理父类顺序。'], ['分配实例', '为实例字段建立默认状态，常见实现可使用线程本地分配缓冲。'], ['运行构造链', '执行父类与本类构造过程，形成合法实例后返回引用。']]),
      example: example('public class InitDemo {\n  static class Item {\n    static final int CONSTANT = 7;\n    static int count = init();\n    static int init() { System.out.println("class init"); return 1; }\n    Item() { System.out.println("constructor"); }\n  }\n  public static void main(String[] args) {\n    System.out.println(Item.CONSTANT);\n    new Item();\n    new Item();\n  }\n}', '7\nclass init\nconstructor\nconstructor', '常量使用没有触发 Item 初始化；第一次 new 触发类初始化一次，再构造实例。第二次 new 创建另一个实例，只再执行构造器。'),
      boundaries: ['“类初始化一次”以具体类身份为边界；同名类由不同定义加载器定义时不是同一个类。', '不能把逃逸分析概括为 HotSpot 必定把所有未逃逸对象放进栈，标量替换可能直接消除对象表示。'],
      answer: '加载取得类，链接验证并准备结构，初始化执行静态初始化逻辑；这些与每次实例构造不同。主动使用可能触发初始化，编译期常量读取可能不会。类身份还包含定义加载器。new 在类满足要求后建立实例并执行构造链，TLAB 和逃逸分析属于运行时分配优化，不改变语言层行为。',
      followUps: qa([['两份同名 class 为什么可能强转失败？', '若定义加载器不同，运行时类型身份不同，即使类名和字节相同也不必可互相强转。'], ['类初始化失败后再使用会怎样？', '该类会被标记为错误状态，后续主动使用通常导致 NoClassDefFoundError，而不是自动正常重跑一次。']]),
      checks: qa([['把 CONSTANT 改成 static final Integer 会保持同样效果吗？', '不会，它不是这里的基本类型或 String 编译期常量变量，读取会触发相应类初始化。']]),
      prerequisites: links([['course-java-execution', '先了解 class 到执行的链路。'], ['course-java-final-static', '理解静态成员和常量。']]), related: links([['jvm-allocation', '继续理解 TLAB 与实例分配。']]), conceptIds: ['jvm-class-loading', 'jvm-initialization', 'jvm-delegation', 'jvm-allocation'], readingIds: ['xl-jvm-4a06195d21af5be4', 'xl-jvm-2f19c3e92adb77e0', 'xl-jvm-e4e822173217103f', 'xl-jvm-83433e2ac7df5af9', 'xl-jvm-c42bec61a8a1dc9e', 'xl-jvm-84ae1dd5c7ba2477'], sourceChapters: ['类初始化和类加载'], sources: [S.loading, jls(12, '12.4', '类初始化'), jls(12, '12.5', '实例创建')]
    },
    {
      id: 'course-jvm-reachability', topicId: 'jvm', chapter: '垃圾回收', title: '可达性、引用强度与对象为什么一直活着',
      intro: '业务已经不用对象了，GC 为什么仍不回收？两个对象互相引用又会不会永远活着？',
      explanation: [
        '垃圾回收关注从运行时根集合出发能否到达对象，而不是业务是否“觉得用完”。活动线程可访问的引用、静态状态等会形成保留路径；缓存或监听器注册表只要还强引用对象，它就仍可达。循环引用本身不是可达性算法的障碍：一整个环若从根不可达，仍可回收。',
        '普通引用形成强可达关系。SoftReference 面向内存敏感缓存但回收时机不适合作精确缓存策略；WeakReference 不阻止弱可达对象被回收；PhantomReference 的 get 始终返回 null，常结合 ReferenceQueue 或 Cleaner 处理后续清理通知。引用对象自己也要保持可达，队列不会替应用永久保留所有注册引用。',
        '标记清除先识别存活再释放空洞，可能留下碎片；复制把存活对象搬到新区域，整理则集中存活对象以得到连续空间。它们是构建收集器的算法工具，不是一组必须严格二选一的产品。资源关闭还需显式生命周期，不能让文件句柄或连接池归还等待不可预测的 GC。'
      ],
      flow: steps([['寻找根路径', '从线程、类静态状态等根出发追踪强引用到目标对象。'], ['判断必要性', '区分业务仍需要的数据与遗忘清理的缓存、监听器或 ThreadLocal。'], ['解除多余连接', '删除注册、淘汰条目或清理上下文，让不再需要的图失去强可达路径。'], ['观察回收证据', '比较 GC 后存活集与保留路径，不依赖 System.gc 的一次演示。']]),
      example: example('// JShell：确定性展示引用关系，不强迫 GC 时机\nvar cache = new java.util.HashMap<String, byte[]>();\nbyte[] payload = new byte[1024];\ncache.put("job", payload);\nvar weak = new java.lang.ref.WeakReference<>(payload);\npayload = null;\nSystem.out.println(cache.containsKey("job"));\nSystem.out.println(weak.get() == cache.get("job"));\ncache.remove("job");\n// 此后若没有其他强引用，该数组可被回收；时机不确定。', 'true\ntrue', '局部变量置 null 没有去掉 cache 中的强引用，弱引用因此仍可读到同一数组。remove 只是使回收条件可能成立，不是立即执行析构。'),
      boundaries: ['WeakHashMap 的弱键不保证值也弱；值若强引用键，可能让预期回收失效。', '内存泄漏是本不需要的对象仍被保留；内存溢出是分配需求无法满足，二者有联系但不等同。'],
      answer: 'GC 通过根到对象的可达性判断存活，循环引用若整体不可达仍可回收。业务不用却仍被缓存、监听器或线程上下文引用，就可能泄漏。软弱虚引用改变可达性与通知规则，但不提供精确释放时间。排查应找保留路径和 GC 后存活趋势，资源则用显式 close 等机制管理。',
      followUps: qa([['把变量设 null 就一定能回收吗？', '不一定，可能还有其他强引用，即使已不可达也不保证马上发生收集。'], ['强引用路径分析为什么比只看大对象数量有效？', '对象大只说明占用，路径才能解释谁让它持续存活以及应在哪里解除。']]),
      checks: qa([['A 引 B、B 引 A，根集合没有路径到它们，能回收吗？', '可以，可达性分析不依赖简单引用计数。']]),
      prerequisites: links([['course-jvm-memory', '先明确对象与引用所在的运行时结构。']]), related: links([['course-juc-threadlocal', '理解线程上下文为何延长对象寿命。'], ['course-jvm-diagnostics', '将保留路径用于堆快照分析。']]), conceptIds: ['jvm-reachability', 'jvm-gc-roots', 'jvm-references', 'jvm-gc-algorithms'], readingIds: ['xl-jvm-f99ee6617a26a227', 'xl-jvm-0491da874c760dcb', 'xl-jvm-dc303cd4f57bf26f', 'xl-jvm-40a0d616599ddae3', 'xl-jvm-da65f9b7afed2207'], sourceChapters: ['内存结构', '垃圾回收'], sources: [api('java.base/java/lang/ref/package-summary', '引用与可达性'), api('java.base/java/util/WeakHashMap', 'WeakHashMap'), src('HotSpot 17 · 收集器实现', 'https://docs.oracle.com/en/java/javase/17/gctuning/garbage-collector-implementation.html')]
    },
    {
      id: 'course-jvm-g1', topicId: 'jvm', chapter: '垃圾回收', title: 'G1 如何在区域、并发标记和暂停之间分配工作',
      intro: 'G1 已经并发标记，为什么 GC 日志中还会出现暂停？Mixed GC 又为什么不是 Full GC？',
      explanation: [
        'G1 将堆划成大小相同的 Region，区域可承载 Eden、Survivor、Old 等角色，分代不必是连续物理段。年轻代收集选择年轻区域，把存活对象疏散到其他区域；根据年龄和空间等条件进入 Survivor 或 Old。G1 对达到巨型对象阈值的对象有特殊分配和回收路径，因此“大对象都先进入 Eden”不是普遍规律。',
        '并发标记估计老年代区域的存活情况，为后续挑选回收集合提供依据；它可与应用和年轻代收集交错。完成标记后，Mixed GC 在年轻区域之外选取部分老区域回收，分多次降低老年代占用。空间不足等情况下还可能退化到 Full GC。并发只表示部分阶段与应用一起执行，并不取消 STW 的疏散、Remark 等工作。',
        '跨区引用由卡表、记忆集等辅助结构追踪，使回收局部区域时无需每次扫描整个其他区域。并发标记期间应用会修改引用，G1 的 SATB 机制通过写屏障保存必要旧引用等信息，避免漏掉开始时快照中应存活的对象。降低暂停目标会影响工作分配和吞吐，目标不是实时硬保证。',
        '收集器比较必须标注版本：CMS 已不在 Java 17 可用收集器中；Java 17 的 ZGC 以低暂停为目标并执行更多并发工作，不能直接套用后续分代 ZGC 的特征。选型看延迟目标、堆大小、分配速率、CPU 余量与实测数据。'
      ],
      flow: steps([['分配与年轻收集', '普通对象主要在 Eden 区域分配，年轻收集疏散仍存活对象。'], ['启动并发标记', '达到启发式条件后建立存活信息，期间应用继续运行。'], ['完成标记', 'Remark 等暂停阶段补齐一致性工作并确定候选区域。'], ['混合回收', '年轻区加部分高收益老区进入收集集合，逐批回收。']]),
      example: example('# 在独立测试服务启动命令中加入；不是运行生产诊断的请求\njava -Xms256m -Xmx256m -XX:+UseG1GC \\\n  -Xlog:gc*,safepoint:file=gc.log:time,uptime,level,tags \\\n  -jar demo.jar\n# 查看实际日志中的事件类型、暂停耗时、回收前后占用\n# 示例类别：Pause Young、Concurrent Mark Cycle、Pause Remark、Pause Young (Mixed)', '具体出现哪些事件取决于应用负载、对象存活与堆占用；不能保证短程序必定经历完整并发标记和 Mixed 周期。', '命令展示 POSIX shell 换行形式，在 PowerShell 可写成一行执行。观察时把事件类型、前后占用和时间关联，不能只数出现了几个 GC 字样。', 'shell'),
      boundaries: ['Minor、Major、Full 等术语在不同收集器和资料中可能含义不同，应回到具体日志事件。', '安全点用于建立运行时可安全执行某些操作的状态；到达安全点的耗时也可能影响整体暂停观察。'],
      answer: 'G1 按 Region 管理分代，通过并发标记估计存活，再在年轻收集和 Mixed 收集中逐批疏散对象。Mixed 只选择部分老区，不等于全堆 Full GC。记忆集帮助处理跨区引用，SATB 支持并发标记正确性。它仍有暂停，暂停目标也不是硬保证，调优必须结合版本、负载和 GC 日志。',
      followUps: qa([['Young GC 为什么不扫描所有老年代？', '通过写屏障维护跨区引用信息，扫描相关记忆集等边界引用即可定位年轻对象的外部引用。'], ['GC 很频繁就一定要换收集器吗？', '不一定，可能是分配速率高、堆小、存活集过大或内存泄漏，先用日志区分频率、暂停和回收收益。']]),
      checks: qa([['并发标记完成是否等于老年代对象都已经回收？', '不是，标记主要提供存活信息，后续 Mixed 等阶段才承担相应空间回收。']]),
      prerequisites: links([['course-jvm-reachability', '先理解标记与疏散的对象含义。']]), related: links([['course-jvm-diagnostics', '将日志事件与延迟、内存趋势关联。']]), conceptIds: ['jvm-g1', 'jvm-stw', 'jvm-remembered-set', 'jvm-concurrent-marking', 'jvm-zgc'], readingIds: ['xl-jvm-4418c49cddef31a6', 'xl-jvm-82dcc95a555eb9e9', 'xl-jvm-70014dcb1f392365', 'xl-jvm-f1abcd36a1849989', 'xl-jvm-1d70d9e7874547e4'], sourceChapters: ['垃圾回收'], sources: [S.g1, src('HotSpot 17 · 可用收集器', 'https://docs.oracle.com/en/java/javase/17/gctuning/available-collectors.html'), src('Oracle JDK 17 迁移指南 · 已移除组件（含 CMS）', 'https://docs.oracle.com/en/java/javase/17/migrate/removed-tools-and-components.html')]
    },
    {
      id: 'course-jvm-diagnostics', topicId: 'jvm', chapter: '证据驱动排障', title: '从 CPU、GC 和内存现象建立可验证的排障链',
      intro: '接口变慢时，是 CPU 算不过来、锁等待、GC 暂停还是下游慢？先扩大堆可能掩盖什么？',
      explanation: [
        '先把症状量化：受影响接口、开始时间、请求量、错误、CPU、进程内存和延迟分位数。CPU 高时定位热线程及其堆栈或 JFR 执行采样；CPU 低却延迟高时关注锁、连接池、队列和网络等待。线程转储是一瞬间的状态，间隔采样和性能记录更能区分短暂经过与长期卡住。',
        '频繁 GC 要同时看分配速率、回收后存活量和暂停时间。GC 后占用长期增长，继续查堆快照中的大保留集合及到 GC Roots 的路径；大量短命对象则可能来自无效中间对象或重复序列化。堆没满而 RSS 高，要检查线程数、直接内存、元空间、代码缓存以及本地分配，不能把所有内存都算给 Java 堆。',
        'JIT 会根据热点执行情况编译，预热、反优化或代码缓存问题也可能影响 CPU 与延迟。工具选择应匹配问题：jcmd 看配置、线程和堆信息，JFR 关联 CPU、分配、锁与 I/O，堆转储用于分析对象保留。先提出可证伪假设，再做一项改动并在同负载下复测吞吐和尾延迟。'
      ],
      flow: steps([['建立时间线', '关联部署、流量变化与资源指标，先定位现象范围。'], ['取低成本证据', '检查 JVM 参数、线程状态、队列与 GC 日志。'], ['聚焦采样', '按假设获取 JFR 或必要的堆转储，解释热点和保留路径。'], ['验证修复', '相同负载、相同观测口径比较改动前后，避免只看平均值。']]),
      example: example('# 将 <pid> 替换为测试进程编号；先确认命令支持\njcmd <pid> help\njcmd <pid> VM.flags\njcmd <pid> Thread.print -l\njcmd <pid> GC.heap_info\njcmd <pid> JFR.start name=slow settings=profile duration=60s filename=slow.jfr\n# 需要分析保留对象时再评估磁盘、停顿与敏感内容\njcmd <pid> GC.heap_dump heap.hprof', '产生 JVM 参数、线程转储、堆概况及 JFR/HPROF 文件；实际线程名、对象数和耗时来自目标负载，没有固定示例数值。', '这些是排障操作说明，本课不会对当前机器的未知服务执行。GC.heap_dump 为高影响操作，默认请求 Full GC；应确认目标、容量和采样时机。NMT 需在启动时启用，且不能覆盖一切第三方本地分配。', 'shell'),
      boundaries: ['看到 HashMap 占用大不是结论，要继续查谁持有它、业务上是否有上限和淘汰。', '堆转储可能包含业务数据且带来停顿和磁盘占用，工具的观测成本属于诊断设计的一部分。'],
      answer: '我先建立症状和时间线，再按 CPU 忙、等待多、GC 暂停或内存增长分别取证。热线程与 JFR 帮助定位执行和等待，GC 日志看分配与回收收益，堆快照通过保留路径解释对象为何存活。若 RSS 高而堆正常，还要查本地内存。每次调整都围绕假设，并用同负载的吞吐、错误和尾延迟验证。',
      followUps: qa([['只把 -Xmx 调大能治好泄漏吗？', '可能推迟溢出，却不解除多余引用，还可能改变停顿和容器内存压力，需要先确认保留原因。'], ['线程转储显示 RUNNABLE 就能认定它是 CPU 热点吗？', '不能，某些本地等待也呈 RUNNABLE，要与操作系统线程 CPU 或 JFR 采样对照。']]),
      checks: qa([['同一列表每请求增长一次且 GC 后不下降，下一步看什么？', '查看列表的持有者、条目保留路径和预期淘汰机制，验证增长是否超出业务必要存活集。']]),
      prerequisites: links([['course-jvm-memory', '知道进程内存由哪些部分组成。'], ['course-jvm-g1', '能读懂回收事件而非只背名称。']]), related: links([['engineering-debugging', '复用假设、证据和复测的排错方法。']]), conceptIds: ['jvm-diagnostics', 'jvm-oom', 'jvm-cpu-diagnosis', 'jvm-profiling', 'jvm-execution-pipeline'], readingIds: ['xl-jvm-d921ff697359a94d', 'xl-jvm-df829b784d3fe9f3', 'xl-jvm-57ad0f2a9c2d36b2', 'xl-jvm-38067b1186492e6a', 'xl-jvm-9a41c9ea95b56aaa', 'xl-jvm-00dea2a90859e01d', 'xl-jvm-5ad2b921e46bacfd'], sourceChapters: ['执行与性能排查'], sources: [S.jcmd, src('JDK 17 · JFR 性能排查', 'https://docs.oracle.com/en/java/javase/17/troubleshoot/troubleshoot-performance-issues-using-jfr.html')]
    },
    {
      id: 'course-data-linear', topicId: 'data', chapter: '结构与操作成本', title: '数组、链表、栈和队列：用访问路径推导复杂度',
      intro: '为什么两个栈组成的队列会偶尔搬运全部元素，却仍能说每次操作均摊 O(1)？',
      explanation: [
        '复杂度描述输入规模增长时操作数量的变化。数组知道起始位置和元素宽度，可直接计算下标位置；链表必须沿链接走到目标。数组插入中间要移动后半段，链表已知节点后的插入只更新少量链接，但寻找节点仍可能是线性。把定位和修改分开计算，才能避免“链表所有插入都 O(1)”这类不完整结论。',
        '栈是后进先出，队列是先进先出，它们是操作语义，可由数组或链实现。动态数组倍增时复制成本为 1+2+4+…，到 n 个元素的总量是 O(n)，所以一串追加均摊 O(1)。两栈队列也类似：元素进输入栈一次，转到输出栈最多一次，最后弹出一次；单次转移可达 O(n)，整段序列成本却线性。',
        '循环数组队列用 head、tail 和取模复用槽位。必须明确如何区分空满：额外记录 size、额外状态位，或保留一个槽位。空间复杂度还要计算辅助数组和递归调用栈，不把输入本身和新增空间混为一谈。'
      ],
      flow: steps([['给操作计数', '先确认一次比较、链接访问或数组槽位移动的基本成本。'], ['拆出定位成本', '找到位置和完成修改分别分析。'], ['分析整段序列', '将每个元素一生经历的入栈、转移和出栈次数累计。'], ['说明复杂度类型', '区分最坏一次、平均情况和均摊序列，不能互相替代。']]),
      example: example('// JShell：两个栈实现整数队列\nclass TwoStackQueue {\n  java.util.Deque<Integer> in = new java.util.ArrayDeque<>();\n  java.util.Deque<Integer> out = new java.util.ArrayDeque<>();\n  void add(int x) { in.push(x); }\n  int remove() {\n    if (out.isEmpty()) while (!in.isEmpty()) out.push(in.pop());\n    return out.pop();\n  }\n}\nvar q = new TwoStackQueue();\nq.add(1); q.add(2);\nSystem.out.println(q.remove());\nq.add(3);\nSystem.out.println(q.remove());\nSystem.out.println(q.remove());', '1\n2\n3', '首次 remove 翻转输入栈，把最先到达的 1 放到输出栈顶。输出栈还有旧元素时不转移新元素，因此新到的 3 不会插到 2 前面。空队列调用 remove 会抛异常。'),
      boundaries: ['均摊 O(1) 不保证每次请求低延迟，延迟敏感场景还要考虑扩容尖峰。', 'O(1) 不是固定一纳秒，缓存局部性、分配和常数开销仍影响实测。'],
      answer: '我从访问路径分析结构：数组按下标直接定位，链表沿链接寻找；定位和修改成本分别算。栈和队列是顺序语义，两栈队列中每个元素只转移一次，所以整体均摊常数，单次仍可能线性。分析时明确最坏、平均和均摊，并计入辅助空间和调用栈。',
      followUps: qa([['循环队列保留一个槽位怎样判满？', '(tail+1)%capacity==head 判满，head==tail 判空，实际可存容量比数组长度少一。'], ['数组按值查找也是 O(1) 吗？', '不是，按下标直接访问才是 O(1)；无索引的任意值查找通常需要扫描。']]),
      checks: qa([['输出栈非空时还把输入栈整体倒进去有什么问题？', '会让后到元素位于先到元素之前，破坏 FIFO。']]),
      prerequisites: links([['course-java-reference-call', '链结构由对象引用建立。']]), related: links([['course-collections-list', '把分析方法应用到 Java 列表实现。']]), conceptIds: ['collections-arraylist', 'collections-linkedlist', 'collections-queue'], readingIds: ['xl-data-79abbc7416229204', 'xl-data-fa94170195c96d6d', 'xl-data-cb425c85ff56080c', 'xl-data-fed2b087ade43173', 'xl-data-30cc976210012ced'], sourceChapters: ['数据结构', '经典算法与思想'], sources: [api('java.base/java/util/ArrayDeque', 'ArrayDeque'), api('java.base/java/util/ArrayList', 'ArrayList'), S.algorithms]
    },
    {
      id: 'course-data-indexes', topicId: 'data', chapter: '结构与操作成本', title: '有序树、跳表、B+ 树与前缀树怎样缩小搜索范围',
      intro: '为什么点查可用哈希表，价格范围检索更适合有序结构，磁盘索引又偏好高扇出的树？',
      explanation: [
        '普通二叉搜索树用“小的在左、大的在右”逐层排除范围，但按有序输入插入可能退化成链，查找最坏 O(n)。AVL 要求每个节点两侧高度差不超过 1；红黑树则要求红节点不相邻、各条到空叶子的路径黑节点数相同，并有黑色根及黑色空叶等约束，使最长路径受最短路径约束。它们通过旋转及状态维护保持 O(log n) 高度。不能脱离更新方式、实现和负载，断言某一个永远查询快或插入快。',
        '跳表在有序底层链表上建立随机层级索引，先跨大步，再向下细查，期望查找 O(log n)，但最坏可线性。B/B+ 树提高每个节点的分支数量，使一次页访问排除更大范围。常见 B+ 树把完整记录或记录定位信息放在叶子层，内部页保存分隔键和子页指针，叶子按序链接便于范围扫描；数据库具体叶子内容取决于聚簇或二级索引设计。',
        'Trie 按字符或其他符号逐层展开，查找步数主要与键长相关，适合前缀匹配和自动补全，但稀疏子节点与长键会增加空间。它不是按整键大小比较的搜索树。选择索引要先确定点查、区间、前缀以及内存/页访问的成本模型。'
      ],
      flow: steps([['确定查询形状', '精确键、价格区间、下一个更大的键或文本前缀需要不同能力。'], ['选择排除规则', '哈希定位桶，有序树缩小值域，Trie 消费前缀符号。'], ['控制结构高度', '用平衡、随机索引或多路分页避免逐个线性扫描。'], ['评估空间与更新', '维护索引也有节点、页分裂或层级调整成本。']]),
      example: example('// JShell：使用有序索引做闭开区间查询\nvar prices = new java.util.TreeMap<Integer, String>();\nprices.put(100, "A"); prices.put(180, "B"); prices.put(250, "C");\nSystem.out.println(prices.subMap(120, true, 250, false));\nSystem.out.println(prices.ceilingKey(181));\nSystem.out.println(prices.floorKey(181));', '{180=B}\n250\n180', '有序索引能直接定位区间起点和邻近键。subMap 是关联视图，并没有复制所有记录；哈希表没有这种顺序导航契约。'),
      boundaries: ['B+ 树内部节点“没有数据”应解释为不存完整叶子记录载荷，不能说它没有键和指针。', '跳表的 O(log n) 是期望性质；随机层高和实现策略必须作为前提。'],
      answer: '索引围绕查询形状选择。哈希适合等值定位，有序平衡树支持范围和邻近查询，跳表以随机多层链取得期望对数搜索。B+ 树用高扇出减少页访问，并用有序叶子支持扫描；Trie 按键的符号逐层匹配前缀。每种结构都要同时看查询、更新、空间和访问介质。',
      followUps: qa([['二叉树中序遍历为什么能得到有序序列？', '对满足搜索树顺序规则的树，先左子树、当前键、右子树，恰好按小到大访问；任意二叉树不保证有序。'], ['数据库不直接用红黑树做所有磁盘索引为什么？', '二叉树扇出低，较高树高可能增加随机页访问；多路页结构能让一次 I/O 处理更多键。']]),
      checks: qa([['查所有以 java 开头的单词，Trie 与普通 HashMap 各有什么差异？', 'Trie 可先走前缀路径再枚举子树；普通 HashMap 没有前缀顺序索引，通常需要扫描或另建索引。']]),
      prerequisites: links([['course-data-linear', '先从访问路径推导成本。']]), related: links([['collections-treemap', '有序索引在 Java 中的直接接口。'], ['data-access-index', '继续理解数据库页索引。']]), conceptIds: ['collections-treemap', 'data-access-index', 'collections-hashmap'], readingIds: ['xl-data-b50a1d339a74167c', 'xl-data-500bd347c7c783cb', 'xl-data-d8e4f3ad8dccff3c', 'xl-data-340a466576b5751d', 'xl-data-5d587491ec24f985'], sourceChapters: ['数据结构'], sources: [api('java.base/java/util/TreeMap', 'TreeMap'), api('java.base/java/util/concurrent/ConcurrentSkipListMap', 'ConcurrentSkipListMap'), src('Princeton · 红黑树实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/RedBlackBST.java'), src('Princeton · Trie 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/TrieST.java')]
    },
    {
      id: 'course-data-cache-structures', topicId: 'data', chapter: '结构与操作成本', title: 'LRU 保留最近访问，布隆过滤器排除必然不存在',
      intro: '一个结构决定缓存该淘汰谁，另一个结构判断值是否可能存在，为什么不能互相替代？',
      explanation: [
        'LRU 用最近访问顺序近似未来价值：命中后移到最近端，容量超限时淘汰最久未访问者。哈希表负责 O(1) 期望定位节点，双向链表负责 O(1) 移动和摘除，两种结构需要维护一致。只用链表找键会退化为 O(n)，只用哈希表又缺少访问顺序。',
        '布隆过滤器存位数组和多组哈希位置，不保存元素本身。加入元素时将 k 个位置为 1；查询若存在任一位置为 0，就能判定这个元素没有按同一规则加入；全为 1 只表示可能存在，因为这些位可能由其他元素共同设置。随着容量超出设计量，误判率会上升。普通布隆过滤器不能直接把一项对应位清零删除，否则会误伤别的元素。',
        '两者在系统里可能配合：布隆过滤器挡住明显不存在的查询，LRU 限制实际值缓存的容量。但过滤器与真实数据同步滞后会产生系统层的错误拒绝，更新时序必须设计；LRU 也可能被一次性扫描污染，因此不是所有访问分布下的最佳策略。'
      ],
      flow: steps([['访问定位', '哈希找到缓存节点，命中后更新访问顺序。'], ['新增与淘汰', '新节点入最近端，超过容量时同时删除链表尾部与哈希映射。'], ['过滤不存在', '布隆查询检查全部哈希位，任何零位直接排除。'], ['确认可能存在', '所有位为 1 时继续查权威数据，不能当作确认命中。']]),
      example: example('// JShell：单线程容量为 2 的 LRU 示意\nvar cache = new java.util.LinkedHashMap<String, Integer>(4, 0.75f, true) {\n  protected boolean removeEldestEntry(java.util.Map.Entry<String, Integer> e) {\n    return size() > 2;\n  }\n};\ncache.put("A", 1); cache.put("B", 2);\ncache.get("A");\ncache.put("C", 3);\nSystem.out.println(cache.keySet());\nSystem.out.println(cache.containsKey("B"));', '[A, C]\nfalse', '访问 A 后，B 成为最久未访问者；加入 C 触发容量淘汰 B。这个示例没有过期、并发合并加载、统计等生产缓存能力。'),
      boundaries: ['普通布隆过滤器的无假阴性依赖插入、哈希和位数组正确且完整，不能忽略分布式同步延迟。', '布隆插入与查询时间为 O(k)，把 k 视作固定配置时才简写为 O(1)。'],
      answer: 'LRU 解决容量内保留谁，常用哈希表定位加双向链表维护访问顺序；布隆过滤器解决元素是否可能存在，用多个哈希位换取空间效率。布隆的否定可直接排除，肯定仍需查真实数据，而且普通实现不能随便删位。两者都有更新一致性和负载适用边界。',
      followUps: qa([['布隆误判意味着什么？', '一个从未插入的元素碰巧所有对应位都为 1，被回答为可能存在；不会凭空提供真实值。'], ['为什么扫描大量一次性数据会伤害 LRU？', '这些新访问会把原本频繁使用的热条目逐出，最近访问未必代表未来价值。']]),
      checks: qa([['删除元素时清除它的全部哈希位安全吗？', '不安全，其他元素可能共享这些位，会造成原本存在元素被错误判不存在。']]),
      prerequisites: links([['course-collections-hashmap', '先理解哈希定位与碰撞。']]), related: links([['course-collections-resize', '访问顺序 LinkedHashMap 的具体语义。']]), conceptIds: ['collections-hashmap', 'collections-linkedlist', 'collections-key-contract'], readingIds: ['xl-data-7ee2e2c902eeccc7', 'xl-data-705b3e7358e033a6'], sourceChapters: ['数据结构'], sources: [api('java.base/java/util/LinkedHashMap', 'LinkedHashMap'), src('Redis 官方 · Bloom filter', 'https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/')]
    },
    {
      id: 'course-data-heap-topk', topicId: 'data', chapter: '选择与排序', title: '用小顶堆维护最大的 K 个值',
      intro: '一千万条数据只要最大的 100 条，为什么不必把全部数据排序？',
      explanation: [
        '二叉堆维护父子之间的局部优先关系：小顶堆的父节点不大于孩子，因此根就是最小值；左右子树之间并无整体顺序。用数组表示完全二叉树，可由下标算父子位置。插入末尾后向上调整，删除根用末尾补位再向下调整，基本调整路径长度 O(log n)。',
        '找最大的 K 个值时，保留容量 K 的小顶堆，让根成为当前入选者中最小的门槛。新值不大于门槛可直接丢弃，更大就替换根。扫描 N 个值成本 O(N log K)，额外空间 O(K)，最后若要从大到小输出再排序这 K 个值。',
        '从数组自底向上建堆是 O(n)，不是每个节点都走树高：大量节点靠近叶子，向下距离很短，各层成本按数量与高度加权后线性。反复插入建堆则通常计 O(n log n)，两种构建方式不能混淆。'
      ],
      flow: steps([['填满候选', '不足 K 个时直接入堆。'], ['比较门槛', '新值与堆顶比较，判断能否进入当前前 K。'], ['替换并恢复堆', '更大值替换最小候选，再恢复局部堆序。'], ['输出需要的次序', '堆内遍历无序；连续取出或对 K 个结果单独排序。']]),
      example: example('// JShell；K 必须大于 0\nint k = 3;\nint[] data = {5, 1, 9, 3, 8, 2, 7};\nvar top = new java.util.PriorityQueue<Integer>();\nfor (int x : data) {\n  if (top.size() < k) top.offer(x);\n  else if (x > top.peek()) { top.poll(); top.offer(x); }\n}\nwhile (!top.isEmpty()) System.out.print(top.poll() + " ");', '7 8 9 ', '保留的是最大三个值，使用小顶堆是为了快速踢掉入选者中最小值。输出通过连续 poll 得到升序；如需降序展示，可反转结果。'),
      boundaries: ['相同值是否算多条必须先定义，本例按输入次数保留重复值，不做去重。', '如果只需第 K 大且数据已全在内存，可评估快速选择的期望线性成本及最坏情况。'],
      answer: '堆只保证根是当前最优元素，不保证全部遍历有序。求最大 K 个值时维护 K 大小的小顶堆，以最小入选值为门槛，每个新值最多做对数 K 调整，总成本 O(N log K)、空间 O(K)。建堆若自底向上下沉是 O(n)，不能按每个节点都走整树高来估算。',
      followUps: qa([['为什么不用大顶堆保存 K 个候选？', '大顶堆容易得到最大值，却不便快速找到并淘汰入选者中最小值；维护门槛需要小顶堆。'], ['堆排序稳定吗？', '标准原地堆排序不稳定，根尾交换可能跨越相同键的相对位置。']]),
      checks: qa([['数据 9、8、7 后又来 6，需要改动容量 3 的堆吗？', '不需要，6 不超过当前最小候选 7。']]),
      prerequisites: links([['course-data-linear', '理解数组下标与复杂度累计。']]), related: links([['course-collections-queue', 'Java PriorityQueue 对应堆语义。']]), conceptIds: ['collections-queue', 'collections-arraylist'], readingIds: ['xl-data-a78315d5d79faee8', 'xl-data-b6f74494a53ab8f1', 'xl-data-1c8ec5a9ab13cff3'], sourceChapters: ['数据结构', '排序算法'], sources: [api('java.base/java/util/PriorityQueue', 'PriorityQueue'), src('Princeton · MinPQ 实现与分析', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/MinPQ.java')]
    },
    {
      id: 'course-data-sorting', topicId: 'data', chapter: '选择与排序', title: '快排、归并与外部排序：代价取决于拆分和合并',
      intro: '快排通常很快，为何最坏是平方级？数据装不进内存时，排序步骤如何变化？',
      explanation: [
        '快排围绕基准值分区，让两侧满足大小关系，再递归处理两边。分区平衡时每层工作约 O(n)、深度约 log n；如果连续只排除一个元素，工作量变为 n+(n-1)+…，最坏 O(n²)。随机化或改进选轴降低坏分区概率，重复值多时三路分区减少无效递归，但不能把期望保证写成绝对最坏保证。',
        '归并排序先拆成子序列，再线性合并两份已有序数据。数组实现通常需要 O(n) 辅助空间，可保证 O(n log n) 时间；相等时先取左侧元素可维持稳定性。冒泡相邻比较交换，典型最坏 O(n²)，有序检测可提前结束；堆排序最坏 O(n log n)、常见原地实现空间低，但不稳定。稳定性是相等键原有相对顺序是否保留，不是算法结果是否正确。',
        '外部排序把内存能承受的数据块先分别排序写成有序段，再用有限缓冲区与小顶堆进行多路归并。主要成本从比较次数转向磁盘读写和归并趟数，因此要限制并发打开文件与缓冲内存，尽量顺序访问。'
      ],
      flow: steps([['选择策略', '明确稳定性、最坏时间、额外空间和数据是否能入内存。'], ['分治处理', '快排先分区再递归，归并先递归再合并，顺序决定成本来源。'], ['合并有序段', '每次选择两端或多路当前最小头部，保持输出前缀有序。'], ['验证边界', '空输入、全相等、有序/逆序、极端值和重复键都要覆盖。']]),
      example: example('// JShell：归并的核心过程，两个输入都必须有序\nint[] a = {1, 4, 7}, b = {2, 4, 8};\nint[] out = new int[a.length + b.length];\nint i = 0, j = 0, k = 0;\nwhile (i < a.length && j < b.length) {\n  out[k++] = a[i] <= b[j] ? a[i++] : b[j++];\n}\nwhile (i < a.length) out[k++] = a[i++];\nwhile (j < b.length) out[k++] = b[j++];\nSystem.out.println(java.util.Arrays.toString(out));', '[1, 2, 4, 4, 7, 8]', '每个元素只被推进一次，所以合并是 O(a.length+b.length)。<= 在相等时优先左段，若元素携带原始顺序标识，这是稳定归并的重要条件。'),
      boundaries: ['标准快排通常不稳定，额外稳定分区会改变空间和实现成本。', '递归栈也是辅助空间：快排平衡时约 O(log n)，朴素坏分区递归可到 O(n)。'],
      answer: '我按分区与合并来解释排序。快排均衡分区时 O(n log n)，连续极端分区会退化平方；归并通过线性合并保证对数层总成本，数组版本通常用线性辅助空间且可稳定。堆排序提供最坏对数层时间但不稳定。外部排序先生成有序段再多路归并，重点控制 I/O 趟数与内存。',
      followUps: qa([['稳定排序对多字段排序有何帮助？', '可先按次要字段排，再稳定地按主要字段排，主要字段相等时保留次要字段次序。'], ['全相等输入为何值得单独测试快排？', '某些双路分区会产生重复工作或极端切分，三路分区可把等于基准的一段一次处理完。']]),
      checks: qa([['归并代码把 <= 改成 <，数值结果还排序吗？', '仍按数值排序，但相等时右段先出，携带身份的记录可能失去稳定性。']]),
      prerequisites: links([['course-data-linear', '能累计每层操作和辅助空间。']]), related: links([['course-data-heap-topk', '小顶堆也能维护多路归并的候选头部。']]), conceptIds: ['collections-arraylist', 'functional-interface'], readingIds: ['xl-data-681ed7abf5b968f5', 'xl-data-a554e2e9168c97c2', 'xl-data-e119abbdfa5394ba', 'xl-data-6ebbb89fec4bdfb3', 'xl-data-61be13f815641242', 'xl-data-1f2bbf2693ccfb18'], sourceChapters: ['排序算法', '经典算法与思想'], sources: [src('Princeton · Quick 实现与复杂度', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/Quick.java'), src('Princeton · Merge 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/Merge.java'), api('java.base/java/util/Arrays', 'Arrays 排序契约')]
    },
    {
      id: 'course-data-binary-search', topicId: 'data', chapter: '算法中的不变量', title: '二分不是猜 mid，而是维护候选区间',
      intro: '有重复值时找到一个目标很容易，找到第一个大于等于目标的位置为何总差一位？',
      explanation: [
        '二分需要可排除半边的单调性，不局限于查找某个数组值。对有序数组求 lower_bound，可以维护左闭右开区间 [lo,hi)：lo 左侧都小于 target，hi 及其右侧都大于等于 target，答案仍在边界之间。每一步只需判断 mid 是否已达到门槛。',
        '若 a[mid] 小于 target，mid 不可能是答案，应令 lo=mid+1；否则 mid 仍可能是第一个满足者，应令 hi=mid。循环在 lo==hi 结束，该位置就是边界，也可能等于数组长度表示没有满足元素。mid 用 lo+(hi-lo)/2 避免直接加法溢出。',
        '复杂度来自区间每次近似减半，O(log n) 次比较。把相同逻辑套到链表，若定位 mid 需要线性走节点，就失去数组随机访问前提。二分答案还需检查判定函数是否真单调，以及每次判定本身的成本。'
      ],
      flow: steps([['定义答案', '寻找第一个 >= target 的位置，未找到返回 n。'], ['写出不变量', '左侧已证明不足，右侧已证明满足，中间尚待判定。'], ['严格缩小', '每轮令 lo 增大或 hi 减小，确保不会停在同一区间。'], ['解释终点', 'lo==hi 时不是失败，而是目标边界已经被唯一确定。']]),
      example: example('// JShell\nstatic int lowerBound(int[] a, int target) {\n  int lo = 0, hi = a.length;\n  while (lo < hi) {\n    int mid = lo + (hi - lo) / 2;\n    if (a[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\nint[] a = {1, 3, 3, 3, 8};\nSystem.out.println(lowerBound(a, 3));\nSystem.out.println(lowerBound(a, 4));\nSystem.out.println(lowerBound(a, 9));', '1\n4\n5', '相等时保留 mid 并继续向左缩，才能找到第一个 3。返回 5 是合法的边界位置，读取 a[5] 前必须判断是否小于长度。'),
      boundaries: ['数组必须满足相同排序规则；无序数组不能仅凭运行结果碰巧正确就使用二分。', '标准 Arrays.binarySearch 在有多个相等元素时不承诺返回第一个，不能替代 lower_bound 契约。'],
      answer: '二分的核心是单调性与区间不变量。我用 [lo,hi) 寻找第一个 >= target，mid 不足就排除到 mid，满足就保留 mid 并收缩右端。终止位置可等于 n，代表没有满足元素。明确边界含义后，重复值、空数组和不存在目标都能用同一规则处理。',
      followUps: qa([['如何改为第一个严格大于 target？', '把不足条件改成 a[mid] <= target，其余区间规则保持一致。'], ['为什么 lo=mid 可能死循环？', '当只剩两个位置且 mid==lo 时，lo 不变，候选区间无法缩小。']]),
      checks: qa([['空数组的 lowerBound 返回什么？', '0，等于长度，表示唯一合法插入边界。']]),
      prerequisites: links([['course-data-linear', '知道随机访问的成本。']]), related: links([['course-data-indexes', '有序结构把边界搜索推广到动态数据。']]), conceptIds: ['collections-arraylist', 'collections-treemap'], readingIds: ['xl-data-fd7c069a32679caa', 'xl-data-2b237e319f9dc817'], sourceChapters: ['经典算法与思想'], sources: [api('java.base/java/util/Arrays', 'Arrays.binarySearch'), src('Princeton · BinarySearch 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/BinarySearch.java')]
    },
    {
      id: 'course-data-pointer-patterns', topicId: 'data', chapter: '算法中的不变量', title: '链表指针、滑动窗口与单调栈如何避免重复工作',
      intro: '代码里出现嵌套循环就一定是 O(n²) 吗？反转链表为什么先改 next 就可能丢掉后半段？',
      explanation: [
        '链表反转的关键是保存尚未处理的入口。用 prev 指向已反转前缀、cur 指向未处理节点，先保存 next=cur.next，再令 cur.next=prev，最后同时推进 prev 和 cur。快慢指针则用速度差判断环：有环时会相遇；相遇后一个回到头部，两者同速推进可定位入口。这里的不变量是路径长度关系，而非记住变量名字。',
        '滑动窗口维护连续区间及其统计，右端加入新元素，违反条件时推进左端直到恢复。若两个指针都只向前走，每个元素进入和离开最多一次，即使有内层 while，总操作仍 O(n)。但“和达到阈值就缩左端”的规则常依赖元素非负；负数可能破坏单调性。',
        '单调栈保留尚未找到答案、并按值有序的候选。找右侧第一个更大值时，新元素可解决所有比它小的栈顶，再把自己入栈。每个下标最多入栈和出栈一次，整体 O(n)。相等值是否弹出取决于要找严格更大还是大于等于。'
      ],
      flow: steps([['定义未解决集合', '链表是未处理后缀，窗口是当前区间，单调栈是尚无答案的下标。'], ['保存推进信息', '改链接前保存 next；移动窗口时同步更新计数。'], ['只前进不回退', '用每个元素处理次数证明总成本。'], ['核对相等与边界', '明确严格比较、空输入和无答案哨兵。']]),
      example: example('// JShell：右侧第一个严格更大值\nint[] a = {2, 1, 3, 3};\nint[] next = new int[a.length];\njava.util.Arrays.fill(next, -1);\nvar stack = new java.util.ArrayDeque<Integer>();\nfor (int i = 0; i < a.length; i++) {\n  while (!stack.isEmpty() && a[stack.peek()] < a[i]) {\n    next[stack.pop()] = a[i];\n  }\n  stack.push(i);\n}\nSystem.out.println(java.util.Arrays.toString(next));', '[3, 3, -1, -1]', '读到第一个 3 时连续解决 1 和 2；两个相等的 3 不互相满足“严格更大”。栈里的剩余下标没有答案，保留 -1。'),
      boundaries: ['单调栈解的是某类邻近比较问题，不是维护全体元素排序的通用替代。', '快慢指针找环要求链接稳定，不能在另一个线程任意修改链时仍沿用证明。'],
      answer: '我先定义未处理部分及不变量。链表反转先保存后继再改方向；窗口的两端只前进，能按每个元素进出次数证明线性；单调栈让新元素一次解决若干旧候选，每个下标也只入出一次。嵌套循环不直接等于平方复杂度，关键是总推进次数和单调性前提。',
      followUps: qa([['反转链表为什么先保存 next？', 'cur.next 即将改成 prev，若未保存原后继，就失去通往尚未处理后缀的路径。'], ['窗口题存在负数为何危险？', '扩张或收缩窗口对和的影响不再单调，按阈值移动端点可能错过合法答案，需改用前缀和等方法。']]),
      checks: qa([['示例把 < 改成 <=，第三个位置的结果会怎样？', '会被最后一个相等的 3 解决，变成 3；问题已经变成找右侧第一个大于等于值。']]),
      prerequisites: links([['course-data-linear', '能够按元素一生的处理次数分析均摊成本。']]), related: links([['course-data-binary-search', '同样先证明单调性再设计推进规则。']]), conceptIds: ['collections-linkedlist', 'collections-queue', 'language-references'], readingIds: ['xl-data-577c365f7b7f89a3', 'xl-data-a113d7f402655edb', 'xl-data-1c202a34c463582d', 'xl-data-83622358f65ebbbe'], sourceChapters: ['经典算法与思想'], sources: [api('java.base/java/util/Deque', 'Deque'), S.algorithms]
    },
    {
      id: 'course-data-graph', topicId: 'data', chapter: '算法中的不变量', title: '图遍历、拓扑排序与并查集分别回答什么问题',
      intro: '判断任务依赖能否执行，与判断两个点是否已经连通，为什么应选不同算法？',
      explanation: [
        '邻接表为每个顶点保存相邻边，适合稀疏图，空间 O(V+E)；邻接矩阵用 O(V²) 空间换取直接查询两点间边的便利。DFS 沿一条路径深入再回退，适合可达性、结构探索；BFS 按层扩张，在无权或等权图中得到按边数最短路径。树的前中后序属于访问时机选择，层序则对应 BFS。',
        '有向依赖图的拓扑排序要求每条边的前驱都在后继前面。Kahn 算法统计入度，把所有零入度顶点入队，取出顶点后删除其出边并更新后继入度。若最终处理数小于顶点数，剩余部分存在有向环，不能仅靠任意调整遍历顺序解决。',
        '并查集维护无向连通分量：find 找代表，union 合并两个分量。路径压缩让访问路径扁平化，按大小或秩合并限制树高度，长序列操作具有近乎常数的摊还成本。它不直接返回路径，也不能直接替代有向图环检测或支持任意删边。'
      ],
      flow: steps([['确定图语义', '明确边是否有向、带权，以及查询是路径、次序还是连通性。'], ['建立合适存储', '稀疏依赖用邻接表，并为拓扑排序记录入度。'], ['处理可执行顶点', '零入度入队，每完成一个顶点更新后继的剩余依赖。'], ['验证覆盖数量', '全部处理才有完整拓扑序，否则继续定位环和依赖来源。']]),
      example: example('// JShell：0 与 1 都必须先于 2\nvar graph = java.util.List.of(java.util.List.of(2),\n    java.util.List.of(2), java.util.List.<Integer>of());\nint[] degree = {0, 0, 2};\nvar queue = new java.util.ArrayDeque<Integer>();\nfor (int v = 0; v < 3; v++) if (degree[v] == 0) queue.add(v);\nvar order = new java.util.ArrayList<Integer>();\nwhile (!queue.isEmpty()) {\n  int v = queue.remove(); order.add(v);\n  for (int w : graph.get(v)) if (--degree[w] == 0) queue.add(w);\n}\nSystem.out.println(order);\nSystem.out.println(order.size() == graph.size());', '[0, 1, 2]\ntrue', '0 和 1 的入队顺序由本例扫描顺序决定，二者也可交换，拓扑序通常不唯一。2 只有在两个前驱都处理后才入队。'),
      boundaries: ['BFS 的最少边数不等于不同权重下的最短总成本；带权图需按权重性质选算法。', 'DFS 递归深度可达 O(V)，深图要考虑显式栈或调用栈上限。'],
      answer: '图算法先看问题语义。DFS 探索路径结构，BFS 在无权图按层给出最少边路径；拓扑排序用入度管理有向依赖，并通过处理数量检测环。并查集维护无向连通分量，靠路径压缩和按秩/大小合并降低成本，但不保存具体路径，也不适合直接判断有向依赖环。',
      followUps: qa([['为什么零入度队列为空但仍有顶点说明有环？', '剩余每个顶点都有未处理前驱，沿前驱不断追踪必然在有限顶点中重复，形成有向环。'], ['BFS 为什么要在入队时标记访问？', '避免多个前驱把同一顶点反复入队，并保持首次发现层数的含义。']]),
      checks: qa([['依赖 0→1、1→0 时初始零入度队列有元素吗？', '没有，处理数为 0 小于 2，可判断存在环。']]),
      prerequisites: links([['course-data-linear', '栈和队列决定遍历推进方式。']]), related: links([['course-data-dp', '无环依赖也可为状态转移提供顺序。']]), conceptIds: ['collections-queue', 'collections-map'], readingIds: ['xl-data-91af575ef4282a1e', 'xl-data-ccff871ce91c7380', 'xl-data-5db8d70907e8a5c2', 'xl-data-31464c86eb7bc311', 'xl-data-ee78fa308d408596'], sourceChapters: ['经典算法与思想'], sources: [src('Princeton · TopologicalX 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/TopologicalX.java'), src('Princeton · UF 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/UF.java'), src('Princeton · BreadthFirstPaths 实现', 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/BreadthFirstPaths.java')]
    },
    {
      id: 'course-data-dp', topicId: 'data', chapter: '算法中的不变量', title: '动态规划先定义状态，再决定遍历方向',
      intro: '同一段一维背包代码只把循环方向反过来，为什么从每件只能取一次变成允许重复取？',
      explanation: [
        '动态规划把有重叠的子问题按明确状态保存，利用最优子结构计算更大问题。状态必须说明“已经考虑了哪些选择”与“当前资源或位置是什么”，再写转移、初值和答案位置。没有状态含义，写出一个 max 公式也无法知道取的是上一层还是当前层。',
        '0-1 背包的二维状态 dp[i][c] 表示只考虑前 i 件、容量不超过 c 的最大价值。取当前物品时依赖上一层 dp[i-1][c-w]。压成一维后容量从大到小遍历，使较小容量仍保留上一层值，避免重复使用当前物品。完全背包允许重复，容量从小到大让转移使用本轮已更新状态。',
        '贪心每一步直接做局部选择，必须证明该选择能保留某个全局最优解；动态规划保留多种子状态再比较。单看例子成功不能证明贪心正确。背包的 O(NC) 中 C 是数值容量，不是输入位数，因此属于伪多项式复杂度，大容量时需换建模或算法。'
      ],
      flow: steps([['写状态句子', '明确 dp[c] 在当前轮代表哪些物品与容量限制。'], ['列两种决策', '不取保留旧值；取则从 c-w 的合法状态加价值。'], ['安排依赖顺序', '0-1 倒序保留上一轮，完全背包正序允许复用本轮。'], ['检查初值与答案', '容量不超过与恰好装满的初始化不同，不能混用零值。']]),
      example: example('// JShell：一件重量 2、价值 3 的物品，容量为 4\nint weight = 2, value = 3, capacity = 4;\nint[] once = new int[capacity + 1];\nfor (int c = capacity; c >= weight; c--)\n  once[c] = Math.max(once[c], once[c - weight] + value);\nint[] unlimited = new int[capacity + 1];\nfor (int c = weight; c <= capacity; c++)\n  unlimited[c] = Math.max(unlimited[c], unlimited[c - weight] + value);\nSystem.out.println(once[4]);\nSystem.out.println(unlimited[4]);', '3\n6', '倒序计算 once[4] 时 once[2] 还是上一轮的 0，因此只能取一件；正序先把 unlimited[2] 更新为 3，计算容量 4 时再用它，可取两件。'),
      boundaries: ['若要求恰好填满，应把不可达状态设为负无穷等哨兵，并避免哨兵加法溢出。', '状态压缩只有在依赖关系允许时才能做；压缩后若需要恢复选择方案，还须额外记录决策。'],
      answer: '动态规划先定义状态、决策和依赖，再写循环。0-1 背包取物品依赖上一层，压缩为一维时倒序容量，防止本轮重复取；完全背包允许复用当前物品，所以正序。贪心则必须有局部选择正确性的证明。我会说明初值、不可达状态和 O(NC) 的容量维度，而不只背公式。',
      followUps: qa([['零钱 1、3、4 凑 6，优先最大币值一定最优吗？', '不一定，贪心取 4+1+1 需三枚，3+3 只需两枚；这展示需要证明或改用 DP。'], ['哪些问题常见 DP？', '背包、编辑距离、最长公共子序列、路径计数等，但都必须分别定义状态，不能直接套同一转移式。']]),
      checks: qa([['0-1 背包正序遍历为什么错误？', 'c-w 可能已经包含当前物品，再加一次价值就把一次性选择变成重复选择。']]),
      prerequisites: links([['course-data-linear', '理解数组空间与循环工作量。']]), related: links([['course-data-graph', '把状态依赖看成按顺序求值的图。']]), conceptIds: ['collections-arraylist', 'language-primitives'], readingIds: ['xl-data-e9d735158eee0122', 'xl-data-10a2f68fee846fb0', 'xl-data-4a8c1c212c7dcb86'], sourceChapters: ['经典算法与思想'], sources: [src('MIT 6.006 · Dynamic Programming', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/lecture-notes/'), S.algorithms]
    }
  ];
}));
