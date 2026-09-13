window.QUESTION_BANK_DATA = {
  "date": "2026-09-13",
  "questions": [
    {
      "id": "bank-Q01-001",
      "number": "Q01-001",
      "question": "Java 为什么能跨平台？JDK、JRE、JVM 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJava 跨平台靠的是 JVM：源码先编译成统一的字节码，再由各操作系统上的 JVM 执行。JVM 是执行引擎；JRE 是传统意义上的运行环境；JDK 是开发工具包，在运行能力之外提供 javac 等开发工具。记住：开发用 JDK，执行靠 JVM，JRE 强调运行环境。\n\n**举个例子：**\n同一个 Hello.class 可以交给 Windows 和 Linux 上匹配的 JVM 执行。不是 JVM 自己跨平台，而是每个平台都有对应实现。\n\n**深入补充（选读）：**\nJava 源码经编译生成字节码，由不同平台的 JVM 实现执行，因此通常不必为每种操作系统重写业务代码。JVM 负责执行和内存管理，JRE 是传统意义上的运行环境，JDK 再加编译器和诊断工具。跨平台仍受本地库、文件路径、字符集、操作系统行为影响；现代 JDK 的发行打包不能简单理解成一定附带一个独立 JRE 目录。\n\n**追问 / 易错点：** 编译后有字节码，为什么运行时还需要 JIT？见 JVM 章。",
      "sourceIds": [
        "NI021"
      ],
      "keywords": [
        "Q01-001",
        "Java 基础",
        "阿里"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-002",
      "number": "Q01-002",
      "question": "面向对象的封装、继承、多态分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n封装是把数据保护起来，只允许通过规定的方法操作；继承是子类复用并扩展父类；多态是同一个父类型的方法调用，由实际对象决定执行哪个重写方法。分别记成：管好内部、复用父类、同一调用不同表现。\n\n**举个例子：**\n账户余额设为 private，通过 deposit/withdraw 修改，这是封装；Animal a = new Dog(); a.speak(); 执行 Dog 的重写方法，这是多态。\n\n**深入补充（选读）：**\n封装把状态和合法操作放在一起，例如余额只能通过校验后的扣款方法修改。继承描述 is-a 关系并复用行为；多态让父类型引用在运行时调用子类重写的方法。业务扩展常用接口加组合，避免为了复用几行代码建立不合理继承关系。\n\n**追问 / 易错点：** 为什么说组合通常比深层继承更灵活？组合可替换依赖，减少对父类实现的耦合。",
      "sourceIds": [
        "N010",
        "N013",
        "N032",
        "N052",
        "NI021"
      ],
      "keywords": [
        "Q01-002",
        "Java 基础",
        "京东",
        "百度",
        "招银云创",
        "快手",
        "阿里"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-003",
      "number": "Q01-003",
      "question": "方法重载和方法重写有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n重载是同名方法接收不同参数，由编译器选择调用哪个；重写是子类重新实现父类可继承的实例方法，运行时根据真实对象选择实现。重载看参数，重写看继承。只改返回值不算重载，static 同名方法属于隐藏，不是重写。\n\n**举个例子：**\nsend(String text) 和 send(String text, int times) 是重载；Dog 重写 Animal.speak() 是重写。\n\n**深入补充（选读）：**\n重载是同名方法具有不同的参数列表，主要在编译期选择；只改返回值不构成重载。重写是子类重新实现可继承的实例方法，运行时按对象实际类型分派；访问权限不能缩小，返回类型可协变，受检异常不能随意扩大。static 方法是隐藏，不是实例方法重写。\n\n**追问 / 易错点：** 传入 null 时多个重载是否可能编译失败？没有唯一最具体参数类型时会歧义。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [J02 · JLS 21：Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)。",
      "sourceIds": [
        "N001",
        "X08"
      ],
      "keywords": [
        "Q01-003",
        "Java 基础",
        "阿里",
        "美团"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-004",
      "number": "Q01-004",
      "question": "接口和抽象类怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n接口重点规定“要具备哪些能力”，适合多个不相关类遵守同一规范；抽象类重点提供“共同的基础实现”，适合共享字段、构造逻辑和部分方法。一个类能实现多个接口，但只能直接继承一个类。\n\n**举个例子：**\n支付宝和微信都实现 PayService 接口；多种报表共享导出步骤和配置时，可以继承 AbstractReport。\n\n**深入补充（选读）：**\n接口表达能力或契约，一个类可以实现多个接口；抽象类适合共享状态、构造过程和部分实现，一个类只能直接继承一个类。Java 8 接口允许 default/static 方法，Java 9 允许私有辅助方法，但接口不等于能拥有任意实例状态的抽象类。\n\n**追问 / 易错点：** 两个接口的 default 方法冲突怎么办？实现类显式覆盖并确定调用哪个实现。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N001",
        "N008",
        "X08"
      ],
      "keywords": [
        "Q01-004",
        "Java 基础",
        "阿里",
        "京东",
        "美团"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-005",
      "number": "Q01-005",
      "question": "四种访问权限有何区别？“同一包”是不是同一文件？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n同一包是 package 声明相同，不是同一个文件。public：外部可访问；默认权限：只在同包可访问；private：限制在所属类的封装边界；protected：同包可访问，跨包则受子类访问规则限制。先记普通场景，再补 protected 的跨包限制。\n\n**举个例子：**\nA.java 和 B.java 都声明 package com.demo，就属于同一包。跨包子类不能拿任意父类对象去访问它的 protected 成员。\n\n**深入补充（选读）：**\n同一包是 package 声明相同，不要求在同一文件。public 可跨包访问；默认权限限同包；private 限所属类的封装边界，嵌套类有相应访问规则；protected 可同包访问，也允许跨包子类按继承规则访问，不能理解成跨包子类能访问任意父类对象的 protected 成员。\n\n**追问 / 易错点：** 顶层类通常能用哪些权限？public 或默认；一个普通源码文件至多一个 public 顶层类。",
      "sourceIds": [],
      "keywords": [
        "Q01-005",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-006",
      "number": "Q01-006",
      "question": "static 属于类还是对象？this 什么时候能省略？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n实例字段和方法属于“某个对象”，static 成员属于“类”，this 就是“当前这个对象”。this.name = name 的左边是对象字段，右边是方法参数。静态方法没有当前对象，不能直接使用 this；调用静态方法应写类名。\n\n**举个例子：**\nPerson(String name) { this.name = name; } 才是给对象赋值；写 name = name 只是参数给自己赋值。没有同名变量遮挡时，实例方法里的 this.name 通常能简写成 name。\n\n**深入补充（选读）：**\n实例成员属于对象，static 成员属于类层面的状态或行为。this 指当前对象，常用来区分成员与同名参数，例如 this.name = name。静态上下文没有当前实例，不能直接使用 this 或访问实例字段；对象引用在语法上可以调用静态方法，但应使用类名，静态方法按编译期类型绑定。\n\n**追问 / 易错点：** 没有同名局部变量时 this.name 能省略吗？通常可以；name = name 则可能只是参数给自己赋值。\n\n**原始资料核对 / 延伸查阅：** [J02 · JLS 21：Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)。\n\n**原章示例（移至对应题目）：**\n```java\nclass Person {\n    String name;\n    Person(String name) { this.name = name; }\n    void sayHello() { System.out.println(\"我是\" + name); }\n    static void test() { System.out.println(\"静态方法\"); }\n}\n// this.name = name：左边是对象字段，右边是参数。\n// 如果写 name = name，只是参数给自己赋值，对象字段仍可能为null。\n// 实例方法没有同名参数时，name 与 this.name 通常等价。\n```",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q01-006",
        "Java 基础",
        "字节跳动"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-007",
      "number": "Q01-007",
      "question": "final、finally、finalize 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nfinal 用来限制修改：变量只能赋值一次、方法不能重写、类不能继承。finally 是异常处理后的清理代码块。finalize 是旧的对象终结方法，执行不可靠，不应拿它关闭连接或文件。三个词长得像，职责完全不同。\n\n**举个例子：**\nfinal List<String> list 固定的是 list 这个引用，所以不能让它指向另一个集合，但仍然可以 list.add(\"a\")。\n\n**深入补充（选读）：**\nfinal 修饰变量表示只能赋值一次，修饰方法禁止重写，修饰类禁止继承；final 引用指向的对象仍可能可变。finally 是异常控制流中的清理块。finalize 是历史终结机制，执行时机不可靠且已被弃用并计划移除，资源应使用 AutoCloseable、try-with-resources 等显式管理。\n\n**追问 / 易错点：** final List 为什么仍能 add？固定的是引用，不是集合内容。\n\n**原始资料核对 / 延伸查阅：** [J02 · JLS 21：Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)。",
      "sourceIds": [
        "N010",
        "N013"
      ],
      "keywords": [
        "Q01-007",
        "Java 基础",
        "京东",
        "百度"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-008",
      "number": "Q01-008",
      "question": "八种基本数据类型是什么？包装类有哪些使用注意点？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n八种基本类型是 byte、short、int、long、float、double、char、boolean。包装类把基本值变成对象，可以放进泛型集合，也可能是 null。整型注意溢出，浮点型注意精度，char 注意它表示一个 UTF-16 单元，不一定是一个完整字符。\n\n**举个例子：**\nlong x = 100000 * 100000 会先按 int 相乘并溢出；写成 100000L * 100000，才从一开始按 long 运算。\n\n**深入补充（选读）：**\n基本类型是 byte、short、int、long、float、double、char、boolean。char 表示 UTF-16 代码单元，不保证一个 char 就是一个完整汉字或 emoji。包装类可为 null、可作泛型参数；基本类型不行。整型运算注意溢出，例如先把一个操作数转 long 再乘，否则 int 溢出后转 long 已经晚了。\n\n**追问 / 易错点：** boolean 占多少字节？语言层面不能给所有场景一个统一对象布局答案。",
      "sourceIds": [],
      "keywords": [
        "Q01-008",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-009",
      "number": "Q01-009",
      "question": "自动装箱、拆箱和 Integer 缓存有什么坑？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n装箱是把基本值变成包装对象，拆箱是把包装对象取回基本值。Integer 的小整数缓存会影响两个引用用 == 的结果，所以比较数值不要依赖对象是否来自缓存。包装对象为 null 时，只要发生拆箱就会抛空指针异常。\n\n**举个例子：**\nInteger a = null; a == 0 不是简单比较，而是先把 a 拆成 int，因此会抛 NullPointerException。\n\n**深入补充（选读）：**\n装箱把基本值转包装对象，拆箱反过来。Integer.valueOf 至少缓存 -128 到 127，不能依赖缓存范围外对象的引用相等；比较数值使用 equals 或安全拆箱。Integer 为 null 时拆箱会抛 NPE，包括算术、比较、三元表达式触发的隐式拆箱。\n\n**追问 / 易错点：** Integer a = null; a == 0 会怎样？触发拆箱并抛 NPE。",
      "sourceIds": [
        "N010",
        "NI002"
      ],
      "keywords": [
        "Q01-009",
        "Java 基础",
        "京东",
        "招银网络科技"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-010",
      "number": "Q01-010",
      "question": "== 和 equals 有什么区别？重写 equals 为什么要重写 hashCode？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n== 比较基本类型时比较值，比较引用类型时看是不是同一个对象；equals 用来判断逻辑上是否相等，具体规则由类决定。重写 equals 就应同时重写 hashCode，因为哈希集合先按哈希找位置，再判断相等。\n\n**举个例子：**\n两个不同 User 对象的用户 ID 相同，可以规定 equals 为 true；这时它们的 hashCode 也必须相同，否则 HashSet 可能无法正确去重。\n\n**深入补充（选读）：**\n基本类型的 == 比较数值，引用类型的 == 比较是否同一对象。Object.equals 默认也是身份比较，但 String 等类型改成内容相等。equals 相等的对象必须有相同 hashCode，反过来不成立；否则 HashMap/HashSet 可能把逻辑相同对象放到不同桶，破坏查找和去重。\n\n**追问 / 易错点：** equals 要满足什么性质？自反、对称、传递、一致，对 null 返回 false。",
      "sourceIds": [
        "N054",
        "NI017",
        "NI024"
      ],
      "keywords": [
        "Q01-010",
        "Java 基础",
        "货拉拉",
        "深轻科技",
        "即时设计"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-011",
      "number": "Q01-011",
      "question": "Java 是值传递还是引用传递？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJava 只有值传递。传基本类型时，复制的是数值；传对象时，复制的是对象引用。两份引用指向同一对象，所以能修改对象内容；但在方法里让参数指向新对象，不会改变外面变量的指向。\n\n**举个例子：**\n把引用想成一张地址便条。方法拿到便条副本，照地址修改房间，外面能看到；把副本改成另一个地址，外面的便条不会跟着变。\n\n**深入补充（选读）：**\n始终是值传递。基本类型传递数值副本，对象参数传递引用的副本。方法里修改引用指向的对象，调用者能看到对象变化；给参数重新赋另一个对象，不会让调用者变量指向新对象。因此 swap(a,b) 只交换方法内两个引用通常无效。\n\n**追问 / 易错点：** 为什么 list.add 能影响外部，list = new ArrayList 却不能替换外部变量？两者分别修改对象和局部引用。\n\n**原章示例（移至对应题目）：**\n```java\nstatic void change(Person p) {\n    p.name = \"改了原对象\";\n    p = new Person(\"只改变局部引用\");\n}\n// Person p = new Person(\"原名字\"); change(p);\n// p.name 最后为“改了原对象”，不是“只改变局部引用”。\n```",
      "sourceIds": [],
      "keywords": [
        "Q01-011",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-012",
      "number": "Q01-012",
      "question": "String 为什么不可变？不可变有什么好处？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nString 不可变，是指一个 String 对象创建后，已有字符内容不能通过它的正常接口修改。拼接、替换等操作得到结果字符串，而不是原地改旧对象。这样便于共享、缓存哈希值和作为 Map 的键，也更方便并发读取。\n\n**举个例子：**\nString s = \"abc\"; s = s + \"d\"; 变的是 s 的指向，原来的 \"abc\" 没变。final 类只是不可继承，不代表所有 final 类都不可变。\n\n**深入补充（选读）：**\nString 对外不提供修改已有内容的接口，内部表示也受到封装保护。不可变方便共享、字符串常量池复用、缓存哈希值和并发读取，也避免作为 Map 键后内容变化。拼接、replace 等通常返回新字符串；String 类为 final 只是防止子类破坏契约，并非“所有 final 类都不可变”。\n\n**追问 / 易错点：** JDK 8 与较新 JDK 内部存储相同吗？典型实现由 char[] 演进到 byte[] 加编码标记。\n\n**原始资料核对 / 延伸查阅：** [J03 · Java 21 String API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)。",
      "sourceIds": [],
      "keywords": [
        "Q01-012",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-013",
      "number": "Q01-013",
      "question": "字符串常量池、new String 和 intern 怎么理解？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n字符串常量池用于复用相同内容的字符串。字面量通常取池中的对象；new String(\"ab\") 则创建一个新的 String 对象。intern() 返回同内容字符串在池中的统一引用。业务上比较字符串内容用 equals，不要靠常量池猜 ==。\n\n**举个例子：**\nString a=\"ab\", b=\"ab\", c=new String(\"ab\"); a==b 为 true，a==c 为 false，a.equals(c) 为 true。\n\n**深入补充（选读）：**\n字面量和编译期常量表达式会使用驻留字符串。new String(\"ab\") 在语义上创建新的 String 对象，字面量对应池对象是否早已存在要看上下文；不能脱离场景硬说每次创建两个对象。intern 返回与内容相等的规范化池引用。编译期拼接与包含运行时变量的拼接，引用相等结果可能不同。\n\n**追问 / 易错点：** 比较字符串业务值该用什么？equals；不要拿常量池和编译器优化当业务保证。\n\n**原始资料核对 / 延伸查阅：** [J03 · Java 21 String API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)。",
      "sourceIds": [
        "NI006"
      ],
      "keywords": [
        "Q01-013",
        "Java 基础",
        "携程"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-014",
      "number": "Q01-014",
      "question": "StringBuilder、StringBuffer 和字符串加号怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n少量普通拼接直接用 +，可读性最好；循环中反复追加内容，通常用 StringBuilder；需要共享一个拼接对象并进行同步访问时，可考虑 StringBuffer 或外部同步。StringBuffer 的方法同步，不等于一整段业务操作自动原子。\n\n**举个例子：**\n拼接一万行导出内容时，在循环外创建一个 StringBuilder，循环内 append，而不是每轮都 s = s + line。\n\n**深入补充（选读）：**\nBuilder 适合单线程多次拼接，Buffer 的常用方法有同步保护。循环内反复创建新 String 可能产生大量复制和临时对象，宜复用 Builder。较新 JDK 的加号拼接可使用 invokedynamic 优化，不能机械说所有加号都低效。Buffer 单方法同步也不代表整个业务组合操作原子。\n\n**追问 / 易错点：** 初始化 Builder 容量有什么价值？已知规模时减少扩容复制。\n\n**原始资料核对 / 延伸查阅：** [J03 · Java 21 String API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)。",
      "sourceIds": [],
      "keywords": [
        "Q01-014",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-015",
      "number": "Q01-015",
      "question": "金额为什么不用 double？BigDecimal 怎么正确使用？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\ndouble 不能精确表示很多十进制小数，金额通常用 BigDecimal 或“分”为单位的整数。BigDecimal 优先用字符串构造，运算后接收返回值，除法明确精度和舍入规则。比较金额大小用 compareTo；equals 还会比较小数位数。\n\n**举个例子：**\nnew BigDecimal(\"1.0\").equals(new BigDecimal(\"1.00\")) 为 false，但 compareTo 返回 0，表示数值相同。\n\n**深入补充（选读）：**\n浮点二进制不能精确表示许多十进制小数，金额一般用最小货币单位整数或 BigDecimal。优先 new BigDecimal(\"0.1\") 或 BigDecimal.valueOf，避免直接用有误差的 double 构造。除法明确精度和舍入规则；equals 比较值与 scale，compareTo 主要比较数值大小。\n\n**追问 / 易错点：** 1.0 与 1.00 用 equals 和 compareTo 结果分别如何？前者 false，后者 0。\n\n**原始资料核对 / 延伸查阅：** [J04 · Java 21 BigDecimal API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html)。\n\n**原章示例（移至对应题目）：**\n```java\nBigDecimal a = new BigDecimal(\"1.0\");\nBigDecimal b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));       // false：scale也参与\nSystem.out.println(a.compareTo(b));    // 0：数值相等\nInteger x = null;\n// int y = x;                         // 自动拆箱会NPE\n```",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q01-015",
        "Java 基础",
        "字节跳动"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-016",
      "number": "Q01-016",
      "question": "异常体系、受检异常和运行时异常怎么区分？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n异常的根是 Throwable，主要分 Error 和 Exception。Exception 中，RuntimeException 及其子类不用强制捕获或声明，其他受检异常需要。throw 是“现在抛出一个异常”，throws 是“声明这个方法可能抛什么异常”。\n\n**举个例子：**\n读文件可能抛 IOException，编译器要求处理；访问 null 抛 NullPointerException，编译器不会强制你提前 catch。\n\n**深入补充（选读）：**\nThrowable 下主要是 Error 与 Exception；RuntimeException 是 Exception 的子类。受检异常要求捕获或声明，运行时异常没有这个编译要求。Error 常表示严重运行环境问题，不宜普遍捕获后继续业务。异常处理要区分可恢复、需重试和业务拒绝，保留 cause 与上下文，避免只打印堆栈后返回成功。\n\n**追问 / 易错点：** throw 与 throws 的区别？一个实际抛出异常，一个在签名中声明可能抛出的异常。\n\n**原始资料核对 / 延伸查阅：** [J05 · JLS 21：Exceptions](https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html)。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q01-016",
        "Java 基础",
        "阿里"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-017",
      "number": "Q01-017",
      "question": "try、catch、finally 按什么顺序执行？为什么不建议在 finally 中 return？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先执行 try，出现匹配异常再执行 catch，离开这段流程前通常执行 finally。try 里 return 时，会先计算返回值，再执行 finally。不要在 finally 里 return，因为它会覆盖原返回值，甚至把本来要抛出的异常吞掉。\n\n**举个例子：**\ntry { return 1; } finally { return 2; } 最后返回 2。若 finally 只是修改一个基本类型局部变量，不会改掉已经计算好的返回值。\n\n**深入补充（选读）：**\n通常先执行 try，匹配 catch 后执行 finally；try 中 return 的值会先求出，再进入 finally。finally 再 return 会覆盖原返回值，也可能吞掉异常，因此应避免。进程被强制终止、JVM 崩溃或没有离开 try 等情况下，finally 不保证运行。\n\n**追问 / 易错点：** finally 修改返回对象字段会影响结果吗？可能影响，因为返回的是同一对象引用；修改基本局部变量则不同。\n\n**原始资料核对 / 延伸查阅：** [J05 · JLS 21：Exceptions](https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html)。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q01-017",
        "Java 基础",
        "得物"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-018",
      "number": "Q01-018",
      "question": "try-with-resources 为什么比手写关闭更可靠？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\ntry-with-resources 会自动关闭实现 AutoCloseable 的资源，省去容易漏写的 finally。多个资源按“后声明、先关闭”的顺序关闭。业务代码和关闭操作同时报错时，会保留主要异常，并把关闭异常附在 suppressed 中。\n\n**举个例子：**\ntry (InputStream in = new FileInputStream(path)) { ... } 无论正常结束还是抛异常，离开时都会尝试关闭 in。\n\n**深入补充（选读）：**\n实现 AutoCloseable 的资源可在离开语句时自动关闭，多资源按声明相反顺序关闭。业务异常与 close 异常同时出现时，通常保留业务异常，把关闭异常记录为 suppressed，避免错误覆盖。连接、流等应缩小持有范围；“用了 GC”不意味着系统资源会及时释放。\n\n**追问 / 易错点：** 如何查看被抑制异常？Throwable.getSuppressed()。\n\n**原始资料核对 / 延伸查阅：** [J05 · JLS 21：Exceptions](https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html)。",
      "sourceIds": [],
      "keywords": [
        "Q01-018",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-019",
      "number": "Q01-019",
      "question": "泛型解决什么问题？什么是类型擦除？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n泛型就是给容器或方法加上类型约束，让很多类型错误在编译期被发现。类型擦除是编译后把类型参数转换为上界或 Object，并在需要处加入类型转换；因此运行时不能简单判断一个 List 的元素类型是不是 String。\n\n**举个例子：**\nList<String> 编译时不允许 add(123)，但 List<String> 和 List<Integer> 通常并不是两个不同的运行时类。\n\n**深入补充（选读）：**\n泛型让类型错误更早在编译期暴露，减少强转。Java 多数泛型通过擦除实现，类型参数被替换为上界或 Object，并在必要位置加类型转换、桥接方法。并非全部泛型信息都消失，声明的签名信息可供反射读取；运行时通常不能用 instanceof List<String> 判断具体元素类型。\n\n**追问 / 易错点：** 为什么不能直接 new T() 或 new T[]？运行时无法直接确定所需具体类型。\n\n**原始资料核对 / 延伸查阅：** [J01 · JLS 21：Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html)。",
      "sourceIds": [
        "N043",
        "N049"
      ],
      "keywords": [
        "Q01-019",
        "Java 基础",
        "同程",
        "熙牛医疗"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-020",
      "number": "Q01-020",
      "question": "泛型中的 ? extends T 和 ? super T 分别适合读还是写？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n? extends T 表示“某种 T 或其子类型”，适合把元素读成 T；? super T 表示“某种 T 或其父类型”，适合写入 T 及其子类。记忆：主要从容器读，用 extends；主要向容器写，用 super。\n\n**举个例子：**\nList<? extends Number> 可能实际是 List<Integer>，所以不能随便放 Double。List<? super Integer> 能放 Integer，但读出来通常只能当 Object。\n\n**深入补充（选读）：**\nextends 表示未知的 T 子类型，适合读取为 T；除 null 外通常不能安全加入元素。super 表示某个 T 的父类型，可安全写入 T 及其子类，读出一般只能当 Object。PECS 的意思是生产者用 extends、消费者用 super。List<Integer> 不是 List<Number> 的子类型。\n\n**追问 / 易错点：** 写一个复制方法需要什么边界？源 List<? extends T>，目标 List<? super T>。\n\n**原始资料核对 / 延伸查阅：** [J01 · JLS 21：Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html)。",
      "sourceIds": [],
      "keywords": [
        "Q01-020",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-021",
      "number": "Q01-021",
      "question": "反射是什么？有什么代价与限制？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n反射就是运行时查看一个类有哪些字段、方法和构造器，并动态创建对象或调用方法。框架可以据此注入依赖、做对象映射。它更灵活，但错误可能推迟到运行时，还要遵守访问和模块限制。\n\n**举个例子：**\n正常调用是 user.getName()；反射调用是先找到名为 getName 的 Method，再 invoke(user)。不能因此认为任何 private 都能随意突破。\n\n**深入补充（选读）：**\n反射在运行时检查类、字段、构造器和方法并调用，框架常用于依赖注入、映射与扩展。代价包括类型检查推迟、封装和模块访问限制、调用与维护成本。反射不等于无条件突破 private，强封装模块可能要求显式开放；热点反射优化应根据测量决定。\n\n**追问 / 易错点：** Class.forName 与 ClassLoader.loadClass 一定都初始化类吗？默认行为不同：Class.forName(String) 会触发初始化，ClassLoader.loadClass 通常不会；见 Q04-020。",
      "sourceIds": [
        "N003",
        "N021",
        "NI021"
      ],
      "keywords": [
        "Q01-021",
        "Java 基础",
        "字节跳动",
        "快手",
        "阿里"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-022",
      "number": "Q01-022",
      "question": "注解为什么不会自己执行？谁来读取并处理注解？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n注解本身只是“贴在代码上的说明标签”，真正的行为由读取它的编译器或框架实现。@Retention 决定保留到什么时候，@Target 决定能贴在哪里。自己定义一个权限注解，并不会自动产生权限检查。\n\n**举个例子：**\n@RequireRole(\"admin\") 只是标记；还要有拦截器或切面读取标记、检查当前用户，才能真的拦住无权限请求。\n\n**深入补充（选读）：**\n注解本身是元数据，需要编译器、注解处理器或运行时框架读取并实施行为。@Retention 决定保留到源码、字节码还是运行时，@Target 限制使用位置。自定义一个运行时注解并不会自动产生权限检查，还要有拦截器、切面等处理逻辑。\n\n**追问 / 易错点：** @Inherited 会让方法注解或接口注解自动继承吗？不能这样泛化，它主要影响类注解沿父类链继承。",
      "sourceIds": [
        "N014",
        "N052"
      ],
      "keywords": [
        "Q01-022",
        "Java 基础",
        "百度",
        "快手"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-023",
      "number": "Q01-023",
      "question": "JDK 动态代理和 CGLIB 的基本区别？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJDK 动态代理通过实现接口来代理对象；CGLIB 通过生成目标类的子类来增强方法。因此类代理不能继承 final 类，也不能靠重写增强 final/private 方法。无论哪种代理，都要经过代理对象的调用路径才会生效。\n\n**举个例子：**\n把代理想成门口的检查员。外部经过门口会被检查，但对象内部 this.xxx() 通常没有再次经过代理。\n\n**深入补充（选读）：**\nJDK 动态代理围绕接口创建代理对象，通过 InvocationHandler 分发；CGLIB 等基于生成子类拦截可覆盖方法。final 类无法被子类代理，final/private 方法不能按重写机制增强。代理只能覆盖经过代理的调用路径，类内 this 调用常绕开切面。\n\n**追问 / 易错点：** 为什么使用代理后 getClass 与原类不同？运行时对象可能就是生成的代理类。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q01-023",
        "Java 基础",
        "招银网络科技"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-024",
      "number": "Q01-024",
      "question": "浅拷贝与深拷贝如何区分？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n浅拷贝只复制外层对象，里面的引用仍指向原来的对象；深拷贝会把需要独立的内部对象也复制出来。判断关键不是“是否 new 了外层”，而是修改内部对象时，另一份是否跟着变化。\n\n**举个例子：**\n复制 User 后，两份 User 还共用同一个 Address，就是浅拷贝；连 Address 也单独复制，才让地址修改相互独立。\n\n**深入补充（选读）：**\n浅拷贝复制对象字段，其中引用仍指向原来的嵌套对象；深拷贝复制需要独立的对象图。Object.clone 默认是浅拷贝。深拷贝需处理循环引用、共享引用和不可复制资源，不能只说“转 JSON 就总能复制”；显式复制构造器或映射通常更可控。\n\n**追问 / 易错点：** 不可变对象必须深拷贝吗？通常可以安全共享。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q01-024",
        "Java 基础",
        "得物"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-025",
      "number": "Q01-025",
      "question": "Java 序列化的作用与风险？transient 有什么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n序列化是把对象状态转换成字节或其他可保存、可传输的格式；反序列化是恢复对象。Java 原生序列化中，transient 字段默认不被保存，static 字段也不属于对象状态。不可信数据不能随意做原生反序列化。\n\n**举个例子：**\n保存用户对象时，缓存字段可以不序列化。跨服务传输通常用明确的 DTO 和 JSON/Protobuf，而不是直接暴露内部对象结构。\n\n**深入补充（选读）：**\n序列化把对象状态转为可传输或持久保存的表示，反序列化重建对象。Java 原生序列化需要 Serializable，serialVersionUID 影响兼容检查；transient 字段默认不参与常规序列化。跨服务更常用显式 DTO 与 JSON/Protobuf，避免把内部对象结构直接暴露。不可信输入不能任意原生反序列化。\n\n**追问 / 易错点：** static 字段会作为某个对象状态序列化吗？不会，属于类级状态。",
      "sourceIds": [],
      "keywords": [
        "Q01-025",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-026",
      "number": "Q01-026",
      "question": "字节流、字符流与乱码的关系？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n字节流按 byte 处理数据，图片、视频、压缩包都适用；字符流按指定字符集解释字节，适合文本。乱码最常见的原因是“写的时候一种编码，读的时候另一种编码”。读写文本应明确约定编码。\n\n**举个例子：**\n文件按 UTF-8 保存，读取时却按另一种编码解释，中文就可能乱码。图片不能先随意转字符串再写回。\n\n**深入补充（选读）：**\n字节流处理原始字节，适用于图片、压缩包等；字符流在字节和字符之间按字符集转换，适合文本。乱码常由写入与读取编码不一致造成，应显式指定 UTF-8 等编码，不能把任意二进制内容当字符串。缓冲流减少频繁小粒度系统调用，但需正确 flush/close。\n\n**追问 / 易错点：** Java 默认字符集一定相同吗？与版本和配置有关，不应依赖隐式默认值做协议约定。",
      "sourceIds": [],
      "keywords": [
        "Q01-026",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-027",
      "number": "Q01-027",
      "question": "BIO、NIO、AIO 的区别？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBIO 常见做法是线程阻塞等 IO；NIO 可以用非阻塞 Channel 和 Selector，让少量线程管理多个连接；AIO 则在操作完成后通过回调或 Future 告知结果。记住：NIO 的就绪通知不代表业务数据已全部读完。\n\n**举个例子：**\nBIO 像一个人守着一个窗口等结果；NIO 像先看哪些窗口能办，再去办理；AIO 像交完任务，办好后通知你。\n\n**深入补充（选读）：**\nBIO 常指线程进行阻塞 IO；Java NIO 提供 Buffer、Channel、Selector 等，可用非阻塞模式配合多路复用；AIO 通过 Future 或回调报告异步完成。阻塞关注调用等待方式，同步/异步关注完成通知与控制流程，两组概念不是同一个维度。NIO 并不是所有操作都非阻塞。\n\n**追问 / 易错点：** Selector 是否负责替应用读完业务数据？不负责，它主要报告就绪事件。",
      "sourceIds": [
        "N037",
        "N043",
        "N049"
      ],
      "keywords": [
        "Q01-027",
        "Java 基础",
        "腾讯",
        "同程",
        "熙牛医疗"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-028",
      "number": "Q01-028",
      "question": "NIO 的 Buffer、Channel、Selector 如何配合？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nChannel 是数据通道，Buffer 是装数据的缓冲区，Selector 负责告诉你哪些通道已就绪。把数据写进 Buffer 后，用 flip 切换到读取状态；clear 为下次写入重置位置；compact 保留尚未读完的部分。\n\n**举个例子：**\n收到半条消息时，先留下未读字节，compact 后继续接收。clear 只是重置索引，不是把内存中的每个字节都清零。\n\n**深入补充（选读）：**\nChannel 连接数据源与目标，Buffer 保存读写数据，Selector 监听多个可选择通道的就绪事件。写入 Buffer 后 flip 把 limit 设为原 position 并将 position 归零，供读取；clear 重置索引而不是擦除所有字节。网络协议还需处理半包、粘包和状态机。\n\n**追问 / 易错点：** compact 与 clear 区别？compact 保留未读字节，便于继续接收不完整消息。",
      "sourceIds": [],
      "keywords": [
        "Q01-028",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-029",
      "number": "Q01-029",
      "question": "Lambda、函数式接口、方法引用是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n函数式接口只有一个需要实现的抽象方法，Lambda 就是这个方法的简洁实现，方法引用则复用现成方法。常用接口：Predicate 做判断，Function 做转换，Consumer 接收并处理，Supplier 提供结果。\n\n**举个例子：**\nx -> x > 0 是判断；String::length 是转换。Lambda 捕获的局部变量不能随后重新赋值，但它指向的对象仍可能可变。\n\n**深入补充（选读）：**\n函数式接口有一个抽象方法，允许 default/static 等其他方法；Lambda 提供该抽象方法的实现，方法引用是兼容签名的简洁写法。捕获的局部变量要求 final 或 effectively final，但捕获引用所指对象仍可变。Lambda 内 this 与匿名内部类的 this 语义不同。\n\n**追问 / 易错点：** Predicate、Function、Consumer、Supplier 分别干什么？判断、转换、消费、供给。",
      "sourceIds": [],
      "keywords": [
        "Q01-029",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-030",
      "number": "Q01-030",
      "question": "Stream 的 map、flatMap、filter 和惰性执行是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nfilter 是筛选，map 是逐个转换，flatMap 是转换后把多层数据摊平。Stream 的中间操作通常先记录处理步骤，直到 collect、count 等终止操作才真正执行；同一条流通常只能消费一次。\n\n**举个例子：**\n一批用户先 filter 出成年人，再 map 成姓名。List<List<String>> 想变成一层姓名列表，可以用 flatMap。\n\n**深入补充（选读）：**\nmap 一对一转换，flatMap 把每项映射的流展开合并，filter 保留满足条件的元素。多数中间操作惰性执行，终止操作才触发流水线。Stream 通常只能消费一次，不是储存元素的容器；不宜在流水线里混入难控制的副作用。\n\n**追问 / 易错点：** parallelStream 一定更快吗？不一定，拆分合并、线程竞争与阻塞任务可能使它更慢。",
      "sourceIds": [],
      "keywords": [
        "Q01-030",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-031",
      "number": "Q01-031",
      "question": "Optional 应该怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nOptional 用来明确表示“这个返回值可能不存在”。有值时可以转换，没值时提供默认值或抛业务异常，不要直接 get。orElse 会提前计算默认值，orElseGet 只在没有值时调用生成函数。\n\n**举个例子：**\n查不到用户时，orElseGet(() -> loadDefaultUser()) 才会调用备用加载；orElse(loadDefaultUser()) 无论有没有值都会先调用。\n\n**深入补充（选读）：**\nOptional 表达可能不存在的返回值，配合 map、flatMap、orElseGet 等处理。不要先 get 再祈祷非空，也不要把所有实体字段、方法参数都强制改成 Optional。orElse 的实参会提前计算，orElseGet 的供应函数只在空值时调用，默认值计算昂贵时差别明显。\n\n**追问 / 易错点：** Optional.of(null) 和 ofNullable(null) 区别？前者抛 NPE，后者得到 empty。",
      "sourceIds": [],
      "keywords": [
        "Q01-031",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-032",
      "number": "Q01-032",
      "question": "如何设计一个不可变类？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n不可变类的关键是“创建后，对外能观察到的状态不再改变”。字段私有、构造时赋值、不提供修改方法，并且不要把内部可变对象直接交出去。final 字段只能固定引用，不能自动冻结内部 List。\n\n**举个例子：**\n构造器收到 List 时复制一份，getter 也不要返回可被外部修改的内部列表；否则别人还能绕过你的 setter 修改内容。\n\n**深入补充（选读）：**\n类不允许被不受控扩展，字段私有且在构造时完成初始化，不提供修改接口。对可变构造参数和返回值进行防御性复制，避免构造过程 this 逃逸。只有所有可观察状态都不可变才能安全共享，字段都 final 不足以保证深层不可变。\n\n**追问 / 易错点：** record 是否天然深度不可变？不是，组件引用的 List 等仍可能被修改。",
      "sourceIds": [],
      "keywords": [
        "Q01-032",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-033",
      "number": "Q01-033",
      "question": "Java 8、17、21 有哪些值得准备的特性？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先按版本记重点：Java 8 的 Lambda、Stream、Optional、新时间 API；Java 17 中已可使用的 record、密封类、文本块和 instanceof 模式匹配；Java 21 的虚拟线程、record 模式和 switch 模式匹配。注意“该版本能用”不等于“首次在该版本出现”。\n\n**深入补充（选读）：**\nJava 8 重点是 Lambda、Stream、Optional、时间 API 和 CompletableFuture。Java 17 可了解已正式引入的 record、密封类、文本块与 instanceof 模式匹配。Java 21 重点了解虚拟线程、record patterns 和 switch 模式匹配。回答时区分“该版本已有”和“首次在该版本发布”，预览特性还要确认编译运行开关。\n\n**追问 / 易错点：** 虚拟线程是否适合 CPU 密集任务？不会凭空增加 CPU，主要帮助大量阻塞等待任务。",
      "sourceIds": [],
      "keywords": [
        "Q01-033",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-034",
      "number": "Q01-034",
      "question": "Java 时间 API 如何避免时区与线程安全问题？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nInstant 表示全球时间线上的一个时刻；LocalDateTime 只表示年月日时分秒，没有时区；ZonedDateTime 把日期时间和时区放在一起。跨系统传时间必须约定时区或偏移。格式化优先使用线程安全的 DateTimeFormatter。\n\n**举个例子：**\n“9 月 13 日 10 点”在东京和伦敦不是同一时刻。只有 LocalDateTime，没有时区，就不能确定它对应全球哪一刻。\n\n**深入补充（选读）：**\nInstant 表示时间线上的时刻，LocalDate/LocalDateTime 不携带时区，ZonedDateTime 带时区规则。跨服务交换时间应明确时区或偏移，数据库字段也要统一口径。DateTimeFormatter 通常不可变且线程安全；共享 SimpleDateFormat 则可能产生并发问题。\n\n**追问 / 易错点：** LocalDateTime.now 能唯一表示全球同一时刻吗？不能，缺少时区或偏移信息。",
      "sourceIds": [],
      "keywords": [
        "Q01-034",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-035",
      "number": "Q01-035",
      "question": "常见设计模式怎么在后端落地？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n设计模式是把常见变化点组织好的办法。策略模式替换算法，工厂选择实现，模板方法固定流程，责任链按顺序处理，观察者发布通知。面试要说明“哪里会变、怎么扩展”，而不是只背模式名称。\n\n**举个例子：**\n支付方式新增一种时，增加一个 PayStrategy 实现，再注册到工厂，原来的下单主流程尽量不动。\n\n**深入补充（选读）：**\n策略模式把不同计费或审批规则封装成可替换实现，工厂负责根据类型选择策略；模板方法固定流程并让步骤变化；责任链用于逐级校验；装饰器逐层增加能力；观察者处理事件通知。面试应举项目中的具体变化点，并说明模式增加的抽象成本，而不是背名字。\n\n**追问 / 易错点：** 单例怎么写稳妥？静态内部类或枚举较简单；双重检查需要 volatile，且不要把可变业务状态随意放单例。",
      "sourceIds": [
        "N002",
        "N010",
        "N011",
        "N024",
        "N038",
        "N049",
        "NI001",
        "NI003",
        "NI007",
        "NI021"
      ],
      "keywords": [
        "Q01-035",
        "Java 基础",
        "美团",
        "京东",
        "阿里",
        "BIGO",
        "百度",
        "熙牛医疗",
        "招银网络科技"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-036",
      "number": "Q01-036",
      "question": "Object 常见方法有哪些？clone 为什么要小心？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nObject 是 Java 类层次的根类。常问的方法有 equals、hashCode、toString、getClass、wait/notify/notifyAll、clone。clone 默认浅拷贝；wait/notify 是线程协作方法，必须按对应对象锁的规则调用。\n\n**举个例子：**\ngetClass() 问“实际是什么类”；instanceof 问“能不能当作这个类型使用”。Dog 对象的精确类是 Dog，也可以 instanceof Animal。\n\n**深入补充（选读）：**\n常见有 equals、hashCode、toString、getClass、wait/notify/notifyAll 、clone，以及已弃用的 finalize 等。toString 适合可读诊断但需避免敏感信息；clone 是受保护方法且默认浅拷贝，通常还涉及 Cloneable 标记。业务复制常用显式构造器更清晰，线程等待方法必须遵守监视器要求。\n\n**追问 / 易错点：** getClass 与 instanceof 区别？前者获取精确运行类型，后者检查可赋值类型关系。",
      "sourceIds": [],
      "keywords": [
        "Q01-036",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-037",
      "number": "Q01-037",
      "question": "类初始化、实例初始化和构造器的顺序？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n按常见 Java 8/17/21 场景，先完成父类和子类的静态初始化，再创建对象：父类实例字段/代码块、父类构造器、子类实例字段/代码块、子类构造器。字段和代码块按源码顺序。静态初始化通常一次，实例初始化每个新对象都执行。\n\n**举个例子：**\n第一次 new Child() 会涉及静态初始化；第二次再 new，只重新走对象初始化，不会再执行已经成功执行过的静态块。\n\n**深入补充（选读）：**\n先满足相关父类的类初始化，再执行当前类的静态初始化；创建对象时先完成父类实例构造链，然后当前类的实例字段初始化/实例初始化块及构造器主体，字段与块按源码规定次序。构造器里调用可重写方法可能进入尚未完成初始化的子类，读到默认值，需避免。\n\n**追问 / 易错点：** new第二个对象会再执行静态块吗？同一已成功初始化的类通常不会，实例初始化会重新执行。\n\n**原始资料核对 / 延伸查阅：** [J02 · JLS 21：Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)。",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "Q01-037",
        "Java 基础",
        "快手"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-038",
      "number": "Q01-038",
      "question": "父类引用指向子类对象时，字段和方法分别按什么规则访问？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n父子类同名字段不具有方法那样的多态：通过哪个类型的引用访问，就按那个类型解析字段。被重写的实例方法则看对象的真实类型。记住：字段看引用类型，重写方法看实际对象。\n\n**举个例子：**\nParent p = new Child(); p.name 访问父类字段；p.getName() 则可能执行 Child 重写的方法。\n\n**深入补充（选读）：**\n字段访问主要按引用的编译期类型解析，同名字段可分别存在于父子对象布局中；重写的实例方法则按运行时实际类型分派。静态方法也不是实例动态分派。不要用同名字段隐藏来实现多态，容易让父类型调用和子类型调用看到不同状态。\n\n**追问 / 易错点：** Parent p=new Child(); p.name与p.getName()一定来自同一层吗？不一定。\n\n**原始资料核对 / 延伸查阅：** [J02 · JLS 21：Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)。",
      "sourceIds": [],
      "keywords": [
        "Q01-038",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-039",
      "number": "Q01-039",
      "question": "Java SPI 是什么？与反射、依赖注入什么关系？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSPI 是一种“先定义接口，再按约定发现实现”的扩展机制。Java 的 ServiceLoader 会读取服务注册信息来加载实现，应用不必把每个实现类都写死。反射是可能用到的技术，DI 是管理依赖的方式，三者不是同一个概念。\n\n**举个例子：**\n应用依赖 Driver 接口，具体驱动通过约定注册。只把实现类放进 jar、却没有正确注册，不代表一定能被发现。\n\n**深入补充（选读）：**\nSPI 是服务提供者扩展机制，应用面向服务接口，从约定注册信息发现实现；经典 ServiceLoader 可读取 META-INF/services，模块化环境还有相应声明。反射是可用于加载/调用的底层机制，DI 是管理依赖的方法，三者不互斥。插件需关注类加载器、版本兼容和加载失败。\n\n**追问 / 易错点：** SPI 只要放个实现类在classpath就能被发现吗？还需符合注册与构造等约定。",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q01-039",
        "Java 基础",
        "BIGO"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q01-040",
      "number": "Q01-040",
      "question": "枚举有什么优势？switch、单例场景怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n枚举用一个类型表示有限的合法选项，比散落的字符串和数字更不容易写错。枚举还可以带业务 code、说明和方法。持久化保存明确的业务 code，不要保存 ordinal，因为调整枚举顺序会改变 ordinal。\n\n**举个例子：**\n订单状态用 CREATED、PAID、CLOSED 表示。枚举能限制有哪些状态，但“已关闭能否转已支付”仍需要状态机规则。\n\n**深入补充（选读）：**\n枚举把有限合法取值放入类型系统，实例有稳定身份，可携带字段和行为，适合状态/策略。持久化优先显式业务code而不是ordinal，防止插入枚举项改变序号。枚举单例具有语言和序列化层面的优势，但可变字段仍需并发保护。状态机不能仅靠一个枚举就保证合法迁移。\n\n**追问 / 易错点：** 收到未来版本未知状态怎么办？协议应设计未知值与兼容处理，不能直接valueOf后崩溃。",
      "sourceIds": [],
      "keywords": [
        "Q01-040",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md"
    },
    {
      "id": "bank-Q02-001",
      "number": "Q02-001",
      "question": "Java 集合体系怎么划分？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n集合先分两条线：Collection 放一个个元素，Map 放键值对。Collection 下，List 有顺序且通常允许重复，Set 负责去重，Queue/Deque 负责排队或双端操作。选具体实现时，再考虑查找速度、排序和线程安全。\n\n**深入补充（选读）：**\nCollection 主要分 List、Set、Queue；Map 独立于 Collection，保存键值映射。List 常用于有序且允许重复的元素，Set 用于按相等规则去重，Queue/Deque 用于排队和双端操作。选择时还要考虑排序、随机访问、并发、null 支持和内存开销，不能只按接口名称选择。\n\n**追问 / 易错点：** HashSet 的“无序”是每次必然乱序吗？不是，意思是不保证迭代顺序。",
      "sourceIds": [
        "N028",
        "N049",
        "NI019"
      ],
      "keywords": [
        "Q02-001",
        "Java 集合",
        "熙牛医疗",
        "新蛋"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-002",
      "number": "Q02-002",
      "question": "ArrayList 与 LinkedList 的区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nArrayList 底层是动态数组，按下标查找快，但中间插入删除要移动元素；LinkedList 是双向链表，修改链接快，但找到目标位置可能要遍历。普通列表通常优先 ArrayList，不能只凭“插入多”就选 LinkedList。\n\n**举个例子：**\n在第 10000 个位置插入，LinkedList 得先找到那里，所以整次操作不一定比数组快。\n\n**深入补充（选读）：**\nArrayList 用动态数组，随机访问 O(1)，尾部添加均摊 O(1)，中间插入删除要移动元素。LinkedList 是双向链表，已知节点时链接修改 O(1)，但按下标找节点 O(n)，且节点对象开销大、局部性较差。一般列表优先考虑 ArrayList，队列常用 ArrayDeque。\n\n**追问 / 易错点：** “频繁插入就选 LinkedList”为什么不完整？定位成本和真实访问模式可能比链接修改更重要。",
      "sourceIds": [
        "N001",
        "N013",
        "N054",
        "NI017"
      ],
      "keywords": [
        "Q02-002",
        "Java 集合",
        "阿里",
        "百度",
        "货拉拉",
        "深轻科技"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-003",
      "number": "Q02-003",
      "question": "ArrayList 如何扩容？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nArrayList 装不下时，会申请更大的数组，再把旧元素复制过去。常见 OpenJDK 实现通常按约 1.5 倍增长，但不足时会满足实际所需容量。提前知道元素数量，可以指定初始容量，减少扩容复制。\n\n**举个例子：**\nsize 是现在放了几个元素，capacity 是底层数组能放几个。容量 10、size 3，不等于集合里有 10 个元素。\n\n**深入补充（选读）：**\n典型 OpenJDK 实现按需要分配更大数组并复制，常见增长约为原容量的 1.5 倍，但会考虑最小所需容量和极限。无参构造常采用延迟分配，不应说构造时立即分配十个元素。已知数据量可预设容量或 ensureCapacity，避免多次复制。\n\n**追问 / 易错点：** 容量与 size 有什么区别？容量是底层可容纳空间，size 是当前元素数量。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [C03 · Java 21 ArrayList API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q02-003",
        "Java 集合",
        "腾讯"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-004",
      "number": "Q02-004",
      "question": "ArrayList 为什么线程不安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nArrayList 的 add 不是一个不可分割的动作：要检查容量、写数组、修改 size。多个线程同时做这些步骤可能覆盖数据。需要并发访问时使用合适容器或统一加锁；给 size 加 volatile 也不能把整次 add 变成原子操作。\n\n**深入补充（选读）：**\n添加涉及容量判断、数组写入、size 更新等多步骤，并发可能覆盖数据或产生错误状态。用 synchronizedList 时每个包装方法通常同步，但遍历和复合操作还需按约定外部加锁。读多写少可考虑 CopyOnWriteArrayList，其他场景按并发容器语义选择。\n\n**追问 / 易错点：** 只给 size 加 volatile 能解决并发 add 吗？不能，复合操作仍非原子。\n\n**原始资料核对 / 延伸查阅：** [C03 · Java 21 ArrayList API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)。",
      "sourceIds": [
        "N042"
      ],
      "keywords": [
        "Q02-004",
        "Java 集合",
        "美团"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-005",
      "number": "Q02-005",
      "question": "HashMap 的底层结构？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nHashMap 可以理解为“先分桶，再在桶里找”。底层常见是数组加链表，冲突多且条件满足时改成红黑树。先根据 key 的哈希定位桶，再用 equals 判断是不是同一个键。平均查找快，但不保证顺序，也不保证线程安全。\n\n**举个例子：**\n像先按姓氏首字母分通讯录，再在对应分组里找具体姓名。哈希相同只表示进入同类位置，不代表两个 key 相等。\n\n**深入补充（选读）：**\n常见 JDK 8+ 实现用数组加桶内链表，碰撞严重时转红黑树。先由 key 的 hashCode 得到扰动哈希，再定位桶，比较哈希及 equals 找到键。平均查找、插入接近 O(1)，碰撞、扩容和键比较成本都会影响实际性能；无迭代顺序和线程安全保证。\n\n**追问 / 易错点：** null key 放在哪里？典型实现使用哈希 0 所在桶，HashMap 允许一个 null key。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [C01 · Java 21 HashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)。",
      "sourceIds": [
        "N002",
        "N003",
        "N010",
        "N021",
        "N025",
        "N028",
        "N029",
        "N033",
        "N048",
        "N049",
        "N050",
        "N054",
        "N055",
        "X04",
        "NI011",
        "NI015",
        "NI022"
      ],
      "keywords": [
        "Q02-005",
        "Java 集合",
        "美团",
        "字节跳动",
        "京东",
        "快手",
        "大疆",
        "熙牛医疗",
        "同程",
        "小米",
        "货拉拉",
        "网易",
        "综合",
        "BIGO",
        "腾讯",
        "得物"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-006",
      "number": "Q02-006",
      "question": "HashMap 的 put 流程？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nput 先算桶的位置。桶空就直接放；桶里已有相同 key 就替换 value；没有相同 key 就新增节点。新增后根据大小和桶内情况判断是否扩容或树化。覆盖已有 key 的值，不会让 size 增加。\n\n**举个例子：**\nmap.put(\"a\",1) 后再 put(\"a\",2)，最终只有一条映射，第二次 put 返回旧值 1。\n\n**深入补充（选读）：**\n先处理尚未初始化的表并计算桶下标。桶为空就插入；不为空则检查已有键，存在则更新值，否则沿链表或树定位插入位置。插入新映射后更新大小和结构修改计数，达到条件时树化或扩容。覆盖既有值通常不增加 size。\n\n**追问 / 易错点：** put 返回什么？旧值；若旧值为 null，则不能仅据返回 null 判定键原本不存在。",
      "sourceIds": [
        "N001",
        "NI018"
      ],
      "keywords": [
        "Q02-006",
        "Java 集合",
        "阿里",
        "实在智能"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-007",
      "number": "Q02-007",
      "question": "HashMap 为什么容量常为 2 的幂？为什么扰动哈希？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n容量取 2 的幂，能用 (n-1)&hash 快速算下标，也方便扩容时拆分桶。哈希扰动把高位信息混入低位，让下标分布更均匀。两者是 HashMap 配套的实现选择，不是所有哈希表必须遵守的规定。\n\n**举个例子：**\n扩容从 16 到 32，元素通常只会留在原位置，或移动到“原位置+16”。\n\n**深入补充（选读）：**\n2 的幂让下标可用 (n-1)&hash 计算，扩容翻倍时元素可按一个新增位分成原位置和原位置加旧容量。扰动把高位信息混入低位，降低只看低位时分布不均的问题。这是一组配套实现选择，并不表示所有哈希表都必须取 2 的幂。\n\n**追问 / 易错点：** 键的 hashCode 完全相同，扰动还能分散吗？不能创造原本没有的信息。",
      "sourceIds": [],
      "keywords": [
        "Q02-007",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-008",
      "number": "Q02-008",
      "question": "JDK 8 HashMap 的链表什么时候转红黑树？什么时候退化？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n记住三个关键数：树化阈值 8、允许树化的最小数组容量 64、扩容拆分时的退化阈值 6。桶很长但数组还小，优先扩容；数组够大才考虑树化。具体哪次插入或删除触发，还要看源码路径。\n\n**举个例子：**\n不要背成“插入第 8 个元素必定变树”或“删到 6 个必定退化”。阈值含义和触发时机不是同一句话。\n\n**深入补充（选读）：**\n常见实现树化阈值为 8，最小树化表容量为 64；桶过长但表小通常优先扩容。不要把阈值理解成“任何操作后第 8 个元素必立即变树”：要结合 put 的计数流程。扩容拆分时常以 6 作为退化阈值，普通删除还涉及树结构判断，不能一概而论。\n\n**追问 / 易错点：** 为什么阈值不是随便越小越好？树节点更大，少量碰撞链表更简单。\n\n**原始资料核对 / 延伸查阅：** [C05 · OpenJDK 8u HashMap 源码（AdoptOpenJDK镜像）](https://github.com/AdoptOpenJDK/openjdk-jdk8u/blob/master/jdk/src/share/classes/java/util/HashMap.java)。",
      "sourceIds": [
        "N018",
        "N054"
      ],
      "keywords": [
        "Q02-008",
        "Java 集合",
        "携程",
        "货拉拉"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-009",
      "number": "Q02-009",
      "question": "HashMap 如何扩容？负载因子为什么常是 0.75？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nHashMap 的元素数超过扩容阈值后，通常把数组扩大为原来的两倍，并重新分布节点。阈值通常等于容量乘负载因子；默认 0.75 是空间利用率和冲突概率之间的折中。\n\n**举个例子：**\n容量 16、负载因子 0.75，阈值是 12，通常新增第 13 条映射会触发扩容；修改旧 key 的 value 不算新增。\n\n**深入补充（选读）：**\n大小超过容量乘负载因子的阈值时，典型实现扩大表并重新分布节点。JDK 8 翻倍时利用 hash&旧容量 判断去低位桶还是高位桶，通常无需重新调用每个 key 的 hashCode。0.75 是空间与碰撞成本的折中，不是数学上对所有业务最优。\n\n**追问 / 易错点：** 预估一万个映射应如何设置初始容量？结合负载因子预留，再考虑容量取整，避免把映射数直接当表容量。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [C01 · Java 21 HashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)。",
      "sourceIds": [
        "N028",
        "N054",
        "X04",
        "NI011"
      ],
      "keywords": [
        "Q02-009",
        "Java 集合",
        "熙牛医疗",
        "货拉拉",
        "综合",
        "BIGO"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-010",
      "number": "Q02-010",
      "question": "HashMap 在多线程下会发生什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nHashMap 不适合没有同步保护的并发读写：可能丢数据、读不到更新或出现结构问题。JDK 8 修复了旧版本某些扩容风险，也不等于它线程安全。共享可变 Map 通常用 ConcurrentHashMap 或外部统一锁。\n\n**深入补充（选读）：**\n并发写可能丢更新、结构或可见性异常，读写也没有同步保证。JDK 7 的扩容头插曾有链表成环风险，JDK 8 改了迁移实现并不代表变成线程安全。共享可变映射通常用 ConcurrentHashMap 或外部统一锁。\n\n**追问 / 易错点：** 不写就一定安全？还要有安全发布，且 key/value 的可变状态需要单独管理。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [C01 · Java 21 HashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)。",
      "sourceIds": [
        "N035",
        "X04",
        "NI001",
        "NI008",
        "NI011",
        "NI017",
        "NI018",
        "NI022"
      ],
      "keywords": [
        "Q02-010",
        "Java 集合",
        "快手",
        "综合",
        "招银网络科技",
        "美团",
        "BIGO",
        "深轻科技",
        "实在智能",
        "得物"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-011",
      "number": "Q02-011",
      "question": "为什么不要用可变对象作 HashMap 键？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nHashMap 先按哈希找桶。如果 key 放进去后，参与 hashCode/equals 的字段变了，再查询就可能去错误的桶，导致“明明在里面却取不到”。key 应尽量用稳定 ID 或不可变对象。\n\n**举个例子：**\n用 User.name 计算哈希，放入后把 name 从 A 改成 B，get(user) 也可能找不到原记录。\n\n**深入补充（选读）：**\n如果入表后修改参与 hashCode/equals 的字段，再查找会按新哈希进入别的桶，原映射可能找不到，也可能留下逻辑重复键。应使用稳定 ID 或不可变键对象。若确需更改键，先按原键删除，再构建新键加入，而不是直接修改字段。\n\n**追问 / 易错点：** key 对象没换为什么 get 仍失败？哈希定位先于对象身份或 equals 比较。\n\n**原始资料核对 / 延伸查阅：** [C01 · Java 21 HashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)。",
      "sourceIds": [],
      "keywords": [
        "Q02-011",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-012",
      "number": "Q02-012",
      "question": "HashMap、Hashtable、ConcurrentHashMap 怎么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nHashMap：不保证线程安全，允许 null 键和值。Hashtable：老的同步容器，很多操作锁整个对象，不允许 null。ConcurrentHashMap：为并发访问设计，锁粒度更细，也提供原子复合操作，同样不允许 null。\n\n**深入补充（选读）：**\nHashMap 不提供并发保证且允许 null 键和值。Hashtable 是历史同步容器，很多操作锁整个对象且不允许 null。ConcurrentHashMap 提供并发访问和一些原子复合操作，不允许 null 键值；其遍历通常弱一致。选型要看复合语义，不能只比较“哪个用了锁”。\n\n**追问 / 易错点：** Collections.synchronizedMap 与 CHM 的差别？前者包装统一锁，后者用更细粒度并发设计。",
      "sourceIds": [
        "NI019",
        "NI024"
      ],
      "keywords": [
        "Q02-012",
        "Java 集合",
        "新蛋",
        "即时设计"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-013",
      "number": "Q02-013",
      "question": "ConcurrentHashMap 如何保证并发安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nJDK 8+ 的 ConcurrentHashMap 不是锁住整张表。空桶插入等操作会用 CAS，发生桶内竞争时用 synchronized 等方式协调；读取依靠相应可见性保证，通常不用抢桶锁。它能并发，不等于它完全没有锁。\n\n**举个例子：**\n不同桶的写入可以较少相互影响；但同一个热点 key 仍可能竞争，value 里面的 ArrayList 也不会自动变安全。\n\n**深入补充（选读）：**\n常见 JDK 8+ 用 CAS 处理部分初始化和空桶插入，冲突桶更新通过 synchronized 等协调，数组和节点字段配合可见性语义，扩容可以多线程协助。读取通常不需要获取桶锁。不要把旧版 Segment 分段锁套在所有现代实现上，也不要说它完全无锁。\n\n**追问 / 易错点：** 并发下 size 是不是业务快照？不应拿单次 size 当整张表严格一致的决策依据。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [C02 · Java 21 ConcurrentHashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html)。",
      "sourceIds": [
        "N001",
        "N002",
        "N003",
        "N010",
        "N024",
        "N028",
        "N043",
        "N046",
        "X04",
        "NI001",
        "NI011"
      ],
      "keywords": [
        "Q02-013",
        "Java 集合",
        "阿里",
        "美团",
        "字节跳动",
        "京东",
        "BIGO",
        "熙牛医疗",
        "同程",
        "综合",
        "招银网络科技"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-014",
      "number": "Q02-014",
      "question": "ConcurrentHashMap 已经线程安全，为什么先 get 再 put 仍可能出错？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nget 和 put 各自安全，不代表“先 get 再 put”整体安全。需要按旧值更新时，用 merge、compute、replace 或 putIfAbsent 等原子方法。容器只能保护自己的操作，不能自动保护 value 对象内部的修改。\n\n**举个例子：**\n两个线程都读到计数 5，再各自写回 6，结果少加一次。counts.merge(key,1,Integer::sum) 才能对同 key 原子合并。\n\n**深入补充（选读）：**\n两个单独线程安全操作拼接并不自动原子。首次初始化可用 putIfAbsent，按旧值替换可用 replace，聚合更新可用 compute/merge。计算函数应短小，避免在里面进行慢远程调用或递归修改同一映射，防止放大竞争或异常。\n\n**追问 / 易错点：** Map 中的 ArrayList 值会自动线程安全吗？不会，容器安全不等于值对象安全。\n\n**原始资料核对 / 延伸查阅：** [C02 · Java 21 ConcurrentHashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html)。\n\n**原章示例（移至对应题目）：**\n```java\nConcurrentHashMap<String, Integer> counts = new ConcurrentHashMap<>();\n// 竞态写法：counts.put(key, counts.getOrDefault(key, 0) + 1);\n// 对同一个key的原子合并：\ncounts.merge(\"order\", 1, Integer::sum);\n// 这里Integer计数仍可能溢出，长期指标可考虑Long/LongAdder及其语义。\n```",
      "sourceIds": [],
      "keywords": [
        "Q02-014",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-015",
      "number": "Q02-015",
      "question": "HashSet 如何去重？TreeSet 有什么不同？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nHashSet 主要按 hashCode 和 equals 判断重复；TreeSet 按排序规则判断，比较结果为 0 就视为同一元素。因此它们的去重结果不一定完全相同，尤其是比较器与 equals 规则不一致时。\n\n**举个例子：**\nBigDecimal 的 1.0 和 1.00：HashSet 常保留两个，使用自然顺序的 TreeSet 只保留一个。\n\n**深入补充（选读）：**\nHashSet 通常用 HashMap 保存元素，根据 hashCode 和 equals 去重。TreeSet 用有序树并由自然顺序或 Comparator 判断相等，比较结果为 0 的元素通常被视为重复。比较器应与 equals 一致，否则可能出现“equals 不等却被 Set 去重”的意外。\n\n**追问 / 易错点：** TreeSet 存 BigDecimal 的 1.0 和 1.00 会怎样？自然比较返回 0，通常只保留一个。",
      "sourceIds": [
        "N027"
      ],
      "keywords": [
        "Q02-015",
        "Java 集合",
        "车300"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-016",
      "number": "Q02-016",
      "question": "LinkedHashMap 如何保持顺序？如何实现 LRU？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nLinkedHashMap 在 HashMap 上额外维护双向链表，用来记录插入顺序或访问顺序。开启访问顺序后，最近访问的元素会移动；超过容量时删除最久未用的元素，就能实现简单 LRU。\n\n**举个例子：**\n容量 2，先放 A、B，再访问 A，最后放 C；LRU 应淘汰 B，因为它最久没用。这个简单实现仍需另做并发保护。\n\n**深入补充（选读）：**\n它在哈希表基础上维护双向链接，支持插入顺序或访问顺序。构造时开启 accessOrder，并在 removeEldestEntry 判断 size 是否超容量，可做简单 LRU。访问会改变顺序，因此读操作在访问序模式下也涉及结构变化；简单实现不适合直接当高并发生产缓存。\n\n**追问 / 易错点：** 为什么 LRU 需要哈希表加双向链表？哈希快速定位，链表支持 O(1) 移动和淘汰尾部或头部。\n\n**原始资料核对 / 延伸查阅：** [C04 · Java 21 LinkedHashMap API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html)。",
      "sourceIds": [],
      "keywords": [
        "Q02-016",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-017",
      "number": "Q02-017",
      "question": "TreeMap 的特点和适用场景？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nTreeMap 是按 key 排序的 Map，底层常用红黑树，查找、插入、删除一般是 O(log n)。它适合按键找上下界或查询一个范围；只按 key 精确查询且不要求排序时，HashMap 通常更直接。\n\n**深入补充（选读）：**\nTreeMap 基于红黑树，常见查找和更新为 O(log n)，按键排序，适合范围查询、floor/ceiling 等导航操作。HashMap 适合无需排序的点查。比较器要满足传递性与反对称性；不能用相减直接比较可能溢出的整型。\n\n**追问 / 易错点：** 自然排序 TreeMap 能用 null key 吗？通常不行，自定义比较器允许时另论。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q02-017",
        "Java 集合",
        "腾讯"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-018",
      "number": "Q02-018",
      "question": "Iterator、增强 for 与 fail-fast 是什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n增强 for 遍历集合通常依赖 Iterator。遍历过程中又通过集合本身增删元素，可能触发 fail-fast 并抛 ConcurrentModificationException。需要边遍历边删时，用 Iterator.remove 或合适的 removeIf。\n\n**举个例子：**\nfor (String x : list) { list.remove(x); } 有风险，哪怕只有一个线程。fail-fast 是帮助发现错误，不是线程安全机制。\n\n**深入补充（选读）：**\n增强 for 遍历集合通常基于迭代器。多数普通集合用结构修改计数检测意外并发修改并抛 ConcurrentModificationException，这只是尽力发现错误，不是并发正确性保证。遍历时删除应使用 Iterator.remove 或合适的 removeIf，不能一边增强 for 一边直接结构修改原集合。\n\n**追问 / 易错点：** 单线程也会触发吗？会，迭代期间通过集合自身修改即可触发。",
      "sourceIds": [],
      "keywords": [
        "Q02-018",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-019",
      "number": "Q02-019",
      "question": "CopyOnWriteArrayList 的原理与适用范围？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCopyOnWriteArrayList 是“写时复制，读旧快照”。写入时复制数组、修改新数组，再发布；迭代器继续读创建时拿到的那份数组。适合小集合、读多写少，例如监听器名单；频繁写会产生大量复制和 GC。\n\n**深入补充（选读）：**\n写入时在锁保护下复制数组并发布新数组，读者读取当前数组，迭代器持有快照而无需跟随之后修改。适合小规模、读远多于写且允许短暂旧读的集合，例如监听器列表。写成本 O(n)，频繁写、大对象列表会造成复制和 GC 压力。\n\n**追问 / 易错点：** 迭代器会实时看到新添加元素吗？不会，快照语义；通常也不支持迭代器 remove。",
      "sourceIds": [
        "N028",
        "N032"
      ],
      "keywords": [
        "Q02-019",
        "Java 集合",
        "熙牛医疗",
        "招银云创"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-020",
      "number": "Q02-020",
      "question": "Arrays.asList、List.of 和 unmodifiableList 分别能不能修改？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nArrays.asList 是固定大小列表，可以 set，不能 add/remove，并与原数组关联。List.of 返回不可修改且不允许 null 的列表。unmodifiableList 只是给原列表套只读视图，别人修改原列表，视图也会变化。\n\n**举个例子：**\nArrays.asList(new int[]{1,2}) 得到的通常是“只有一个 int[] 元素”的列表，不是两个 Integer。\n\n**深入补充（选读）：**\nArrays.asList 返回由原数组支持的固定大小列表，可 set，但不能增删，修改会相互影响。List.of 返回不可修改列表且不接受 null。unmodifiableList 是只读视图，底层原列表被别人修改仍可反映出来。它们都不意味着元素对象深度不可变。\n\n**追问 / 易错点：** Arrays.asList(int[]) 得到什么？通常是一个元素，该元素是 int[]，不是多个 Integer。\n\n**原章示例（移至对应题目）：**\n```java\nString[] array = {\"a\", \"b\"};\nList<String> view = Arrays.asList(array);\nview.set(0, \"x\");  // array[0]也变成x\n// view.add(\"c\"); // UnsupportedOperationException\nList<String> independent = new ArrayList<>(view);\n```",
      "sourceIds": [],
      "keywords": [
        "Q02-020",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-021",
      "number": "Q02-021",
      "question": "subList 是拷贝还是视图？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nsubList 通常是原列表的一段视图，不是独立副本。修改视图会影响关联数据，直接改父列表的结构也可能让视图失效。需要独立处理时，用 new ArrayList<>(list.subList(...)) 复制出来。\n\n**深入补充（选读）：**\nArrayList.subList 通常是原列表的视图，修改会作用到关联数据。若绕过视图结构修改父列表，后续操作可能抛异常。仅持有很小子列表也可能让整个底层数组长期存活，需要独立结果时 new ArrayList<>(原列表.subList(...))。\n\n**追问 / 易错点：** 并发处理多个 subList 安全吗？不要因区间不同就假定安全，底层结构仍共享。\n\n**原始资料核对 / 延伸查阅：** [C03 · Java 21 ArrayList API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)。",
      "sourceIds": [],
      "keywords": [
        "Q02-021",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-022",
      "number": "Q02-022",
      "question": "ArrayDeque、Stack、PriorityQueue 怎么选？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nArrayDeque 适合实现普通栈和双端队列；Stack 是较老的栈类；PriorityQueue 是优先队列，默认每次取出最小元素。PriorityQueue 只保证堆顶优先，不保证直接遍历时整个结果有序。\n\n**举个例子：**\n想从小到大取出全部元素，应反复 poll；不能把 PriorityQueue 的普通 for 遍历当成排序结果。\n\n**深入补充（选读）：**\nArrayDeque 适合栈和普通双端队列，通常比历史 Stack 更合适，且不允许 null。PriorityQueue 是堆，默认最小元素优先，入队和出队 O(log n)、看堆顶 O(1)，迭代不保证全局有序。线程间阻塞交接任务要选 BlockingQueue 实现。\n\n**追问 / 易错点：** 最大堆如何写比较器？使用 Comparator.reverseOrder 或安全的比较方法。",
      "sourceIds": [
        "N018",
        "N033"
      ],
      "keywords": [
        "Q02-022",
        "Java 集合",
        "携程",
        "同程"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-023",
      "number": "Q02-023",
      "question": "常见 BlockingQueue 有哪些？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBlockingQueue 会在队列满时让生产者等待、队列空时让消费者等待。ArrayBlockingQueue 有明确容量；LinkedBlockingQueue 要注意默认容量很大；SynchronousQueue 不保存元素，要求直接交接。put/take 可阻塞，offer/poll 可立即返回或限时等待。\n\n**深入补充（选读）：**\nArrayBlockingQueue 是有界数组队列；LinkedBlockingQueue 基于节点，未指定容量时上限很大；SynchronousQueue 不存储元素，直接交接；DelayQueue 按延迟到期取元素；PriorityBlockingQueue 按优先级，逻辑上无界。put/take 可以阻塞，offer/poll 有立即或限时版本。\n\n**追问 / 易错点：** 为什么线程池队列常要有界？把过载变成显式拒绝或背压，避免无限堆积耗尽内存。",
      "sourceIds": [
        "N001",
        "N052",
        "NI022"
      ],
      "keywords": [
        "Q02-023",
        "Java 集合",
        "阿里",
        "快手",
        "得物"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-024",
      "number": "Q02-024",
      "question": "Comparable 和 Comparator 有什么区别？排序稳定是什么意思？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nComparable 是对象自己定义默认排序规则，Comparator 是外部提供另一套规则。一个员工类可以默认按 ID 排序，也能另传比较器按工资排序。比较整数用 Integer.compare，不要直接相减，以免溢出。\n\n**举个例子：**\nComparator.comparingInt(Employee::getAge) 指定按年龄排序；是否稳定要看所用排序 API，不能概括所有 Java 排序。\n\n**深入补充（选读）：**\nComparable 在类型内部定义自然顺序，Comparator 在外部定义多种排序规则。比较要避免 a-b 溢出，常用 Integer.compare 或 comparing。稳定性取决于具体排序 API 和元素类型，不能说“Java 所有 sort 都稳定”；对象列表常见排序有稳定性保证。\n\n**追问 / 易错点：** 排序过程中改比较字段会怎样？可能破坏比较规则，产生不可靠结果甚至异常。",
      "sourceIds": [],
      "keywords": [
        "Q02-024",
        "Java 集合"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q02-025",
      "number": "Q02-025",
      "question": "如何处理大集合、去重与批处理的内存成本？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n处理大集合，关键是“别先把全部数据装进内存”。从数据源分批或流式读取，一批处理完再读下一批。精确去重可用唯一约束或合适的集合；数据超出内存，就考虑外部存储或外部排序。\n\n**举个例子：**\n一次查出一百万行，再用 subList 每次处理一千行，仍然保留了一百万行，不是真正的低内存批处理。\n\n**深入补充（选读）：**\n先估算元素本身、引用、节点和扩容临时副本，不只看记录文本大小。按分页或流式读取、固定批次处理，避免查出全量后再分批；去重选数据库唯一约束、HashSet 或外部排序等与规模匹配的方法。需要准确去重时不能只用有误判的布隆过滤器。\n\n**追问 / 易错点：** toMap 遇到重复键怎么办？明确合并策略或拒绝重复，不能默认覆盖业务数据。",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q02-025",
        "Java 集合",
        "美团"
      ],
      "sourceFile": "02_Java集合.md"
    },
    {
      "id": "bank-Q03-001",
      "number": "Q03-001",
      "question": "进程、线程、并发、并行分别是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n进程是资源管理和隔离的单位，线程是进程里的执行线路。同一进程的线程可以共享堆等资源，但各自有调用栈。并发是多个任务交替推进，并行是多个任务真正同时执行。线程多不代表一定更快。\n\n**举个例子：**\n一个厨师轮流做三道菜是并发；三个厨师同时做三道菜是并行。共享食材还需要协调，类似线程访问共享数据。\n\n**深入补充（选读）：**\n进程是资源隔离与管理单位，线程是执行路径，同进程线程共享堆等资源并保有各自栈。并发是多个任务交错推进，并行是同一时刻在多个执行单元运行。更多线程不等于更高性能，过多线程会增加调度、栈空间和资源竞争。\n\n**追问 / 易错点：** 单核能并发吗？可以时间片交替，但不能同时执行多个 CPU 指令流。",
      "sourceIds": [
        "N016",
        "N037",
        "N038"
      ],
      "keywords": [
        "Q03-001",
        "多线程 / 并发",
        "拼多多",
        "腾讯",
        "百度"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-002",
      "number": "Q03-002",
      "question": "创建线程有哪些方式？start 和 run 区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nstart 才会请求启动新线程，直接调用 run 只是当前线程执行普通方法。任务可以写成 Runnable 或能返回结果的 Callable，再交给 Thread 或线程池执行。同一个 Thread 对象只能 start 一次。\n\n**举个例子：**\nThread t = new Thread(task); t.run() 没有另开线程；t.start() 才让新线程执行 task。\n\n**深入补充（选读）：**\n可以给 Thread 提供 Runnable，也可以用线程池提交 Runnable/Callable，Callable 可返回结果并声明异常。start 请求启动新线程，之后由调度器执行 run；直接调用 run 只是当前线程的普通方法调用。继承 Thread 和实现 Runnable 是组织任务的方式，不是不同底层线程机制。\n\n**追问 / 易错点：** 一个 Thread 可以重复 start 吗？不能，终止后也不能重新启动同一实例。",
      "sourceIds": [
        "N001",
        "N029",
        "N046",
        "N051"
      ],
      "keywords": [
        "Q03-002",
        "多线程 / 并发",
        "阿里",
        "熙牛医疗",
        "美团",
        "京东"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-003",
      "number": "Q03-003",
      "question": "Java 线程有哪些状态？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJava 线程有六种状态：NEW 新建，RUNNABLE 可运行，BLOCKED 等待 synchronized 锁，WAITING 无期限等待，TIMED_WAITING 限时等待，TERMINATED 已结束。RUNNABLE 不保证此刻正在使用 CPU，必须结合线程栈判断。\n\n**举个例子：**\nsleep(1000) 是 TIMED_WAITING；抢不到 synchronized 监视器通常是 BLOCKED；ReentrantLock 中 park 等待常显示 WAITING。\n\n**深入补充（选读）：**\nThread.State 有 NEW、RUNNABLE、BLOCKED、WAITING、TIMED_WAITING、TERMINATED。RUNNABLE 包括 Java 视角的就绪与运行；BLOCKED 特指等待进入 synchronized 监视器，并非所有阻塞。等待 Lock/Condition 或其他同步器时经常显示 WAITING，分析线程转储必须结合栈。\n\n**追问 / 易错点：** sleep 进入什么状态？TIMED_WAITING，时间到后仍需等待调度。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q03-003",
        "多线程 / 并发",
        "BIGO"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-004",
      "number": "Q03-004",
      "question": "sleep、wait、join、yield 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nsleep 是“当前线程睡一会”，不释放已持有的锁；wait 是“等条件”，会释放调用对象的监视器，返回前再拿回；join 是“等另一个线程结束”；yield 只是“建议让出运行机会”。等待协作不能靠 sleep 猜时序。\n\n**举个例子：**\nsynchronized(lock) 里调用 lock.wait() 会释放 lock；Thread.sleep(...) 不会，所以别人可能一直拿不到这把锁。\n\n**深入补充（选读）：**\nsleep 暂停当前线程但不释放已持有的监视器。wait 要在持有对应对象监视器时调用，释放该监视器并等待通知；返回前重新竞争锁。join 等待目标线程结束，yield 只是调度提示。sleep/yield 不建立数据同步语义，不能用“睡一会儿”替代同步。\n\n**追问 / 易错点：** wait 会释放线程持有的所有锁吗？只释放调用 wait 的那个对象监视器。\n\n**原始资料核对 / 延伸查阅：** [T01 · JLS 21：Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。",
      "sourceIds": [
        "N007",
        "N023",
        "N054"
      ],
      "keywords": [
        "Q03-004",
        "多线程 / 并发",
        "腾讯",
        "BIGO",
        "货拉拉"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-005",
      "number": "Q03-005",
      "question": "如何正确停止线程？interrupt 会强制终止吗？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\ninterrupt 不是强制杀线程，而是发出“请停止”的信号。线程要在循环中检查中断，或响应可中断阻塞方法抛出的异常，再结束工作并释放资源。捕获 InterruptedException 后不能无条件忽略。\n\n**举个例子：**\nisInterrupted() 只查看标志；Thread.interrupted() 查看当前线程标志后还会清除它。远程请求仍需配置自身超时。\n\n**深入补充（选读）：**\ninterrupt 是协作取消信号，不是强杀。可中断阻塞方法可能抛 InterruptedException，计算循环则需主动检查中断标志。捕获异常后若不在本层处理取消，应重新抛出或恢复中断位，finally 释放资源。部分 IO/SDK 不响应中断，还需客户端超时、关闭连接或其取消接口。\n\n**追问 / 易错点：** interrupted 与 isInterrupted 区别？前者检查并清除当前线程标志，后者查询目标线程且不清除。",
      "sourceIds": [],
      "keywords": [
        "Q03-005",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-006",
      "number": "Q03-006",
      "question": "什么叫线程安全？加锁要保护一个字段还是一整段操作？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n线程安全就是多个线程一起访问时，业务结果仍然正确。重点保护共享的可变数据和完整业务规则，可以用不共享、不可变、锁或原子操作。不是每个变量都换成原子类，就能保证整个流程安全。\n\n**举个例子：**\n账户 A 扣钱和账户 B 加钱必须一起正确；只把两个余额各自变成 AtomicInteger，并不能保证一笔转账整体成功。\n\n**深入补充（选读）：**\n当多个线程访问共享可变状态时，程序仍满足约束，如余额不负、库存不超卖。实现方法包括不共享、不可变、锁、原子操作或串行处理。要定义整个不变量的边界，不能只把每个字段单独改成原子类型，就认为“转账两边一起成功”等复合条件也成立。\n\n**追问 / 易错点：** 线程安全类组合起来一定线程安全吗？不一定，组合步骤间仍有竞态窗口。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "N003",
        "N004",
        "N007",
        "N018",
        "N033",
        "X07",
        "NI024"
      ],
      "keywords": [
        "Q03-006",
        "多线程 / 并发",
        "字节跳动",
        "美团",
        "腾讯",
        "携程",
        "同程",
        "即时设计"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-007",
      "number": "Q03-007",
      "question": "JMM 是什么？原子性、可见性、有序性分别解决什么问题？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n原子性：一组操作不能只完成一半就被当作完成；可见性：一个线程的修改能按同步规则被另一个线程看到；有序性：必要的操作顺序不会被重排破坏。JMM 规定的是并发读写规则，不是堆、栈怎么分区。\n\n**举个例子：**\ni++ 包含读 i、加一、写回。两个线程都读到 0，再各写回 1，就说明这三个步骤不是天然原子的。\n\n**深入补充（选读）：**\n原子性是操作不可被观察为执行一半；可见性规定线程对写入结果的观察保证；有序性约束编译器、处理器和线程间允许的重排。JMM 描述合法执行和同步关系，不是 JVM 堆栈分区。正确同步才能让共享数据满足预期，不能靠某次机器运行“看起来没错”。\n\n**追问 / 易错点：** i++ 为什么不原子？它包含读、加一和写回。\n\n**原始资料核对 / 延伸查阅：** [T01 · JLS 21：Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。",
      "sourceIds": [
        "NI006"
      ],
      "keywords": [
        "Q03-007",
        "多线程 / 并发",
        "携程"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-008",
      "number": "Q03-008",
      "question": "happens-before 有哪些常见规则？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nhappens-before 可以理解为“前面的操作，对后面的操作具有可见性和顺序保证”。常见关系是：同线程先后顺序、解锁到后续加同一把锁、volatile 写到后续读、start 前到新线程、线程结束到 join 返回，以及这些关系的传递。\n\n**举个例子：**\n线程 A 在同一把锁内改数据并解锁，线程 B 随后加这把锁，就能依赖相应可见性保证；双方各睡一秒没有这种保证。\n\n**深入补充（选读）：**\n同一线程程序次序、同一监视器解锁到后续加锁、同一 volatile 变量写到后续读、Thread.start 前的动作到被启动线程动作、线程结束到成功 join 返回，以及传递性。它定义可见性与顺序保证，不要求物理执行时钟严格完全一致。\n\n**追问 / 易错点：** 两个线程各 sleep 一秒会建立 happens-before 吗？不会。\n\n**原始资料核对 / 延伸查阅：** [T01 · JLS 21：Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。",
      "sourceIds": [],
      "keywords": [
        "Q03-008",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-009",
      "number": "Q03-009",
      "question": "volatile 能解决什么，不能解决什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nvolatile 主要解决可见性，并限制相关重排；它不让多个步骤自动变成一个原子操作。适合停止标志等状态发布。volatile int 的 count++ 仍可能丢更新，需要原子类或锁。\n\n**举个例子：**\nvolatile boolean running 可以让工作线程观察停止信号；但 volatile List 只约束引用发布，不会让 list.add 自动线程安全。\n\n**深入补充（选读）：**\nvolatile 可用于状态发布和可见性，相关读写建立同步顺序并限制重排，但不提供多步骤互斥。volatile int count 的 count++ 仍会丢更新；volatile 引用只约束引用的读写，不会把对象内部所有后续变更自动变安全。适合单写多读标志或配合其他同步机制。\n\n**追问 / 易错点：** volatile 能修饰方法吗？不能，它用于字段。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [T01 · JLS 21：Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。",
      "sourceIds": [
        "N002",
        "X04",
        "X07",
        "NI001"
      ],
      "keywords": [
        "Q03-009",
        "多线程 / 并发",
        "美团",
        "综合",
        "腾讯",
        "招银网络科技"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-010",
      "number": "Q03-010",
      "question": "synchronized 锁的是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nsynchronized 必须看“锁的是哪个对象”。实例同步方法锁 this，静态同步方法锁对应的 Class 对象，同步块锁括号中的对象。只有使用同一把锁的线程，才会相互排斥。\n\n**举个例子：**\n两个不同实例分别调用 synchronized 实例方法，锁的是两个不同 this，通常不会互相阻塞。\n\n**深入补充（选读）：**\n实例同步方法锁 this，静态同步方法锁对应 Class 对象，同步块锁括号表达式得到的对象。只有竞争同一把锁的线程才互斥，且退出同步区域自动释放。锁住稳定、私有的锁对象，避免字符串常量或可替换引用导致意外共享或失去互斥。\n\n**追问 / 易错点：** 两个对象分别调用同步实例方法会互斥吗？通常不会，它们的 this 不同。\n\n**原始资料核对 / 延伸查阅：** [T01 · JLS 21：Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。",
      "sourceIds": [
        "N010",
        "N011",
        "N018",
        "N043",
        "NI011"
      ],
      "keywords": [
        "Q03-010",
        "多线程 / 并发",
        "京东",
        "阿里",
        "携程",
        "同程",
        "BIGO"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-011",
      "number": "Q03-011",
      "question": "synchronized 的底层和锁优化怎么说？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nsynchronized 的语义基础是对象监视器：进入时获取锁，退出时释放锁。同步块常对应 monitorenter/monitorexit，同步方法用标记表示。JVM 会按版本做轻量级锁、锁消除等优化，不要把旧的“偏向锁一路升级”当成所有版本的固定流程。\n\n**深入补充（选读）：**\n语言语义基于监视器，字节码常见 monitorenter/monitorexit，同步方法使用相应标记。HotSpot 可做轻量级锁、锁消除、锁粗化等优化，具体路径依版本而异。“偏向→轻量→重量”只是旧版本常见叙述，偏向锁在 JDK 15 已默认关闭，不能当现代 JDK 必经流程。\n\n**追问 / 易错点：** 锁消除为什么成立？逃逸分析等证明相关对象不被其他线程共享时，锁可能不再必要。\n\n**原始资料核对 / 延伸查阅：** [T07 · JEP 374：Deprecate and Disable Biased Locking](https://openjdk.org/jeps/374)。",
      "sourceIds": [
        "N028",
        "N032",
        "N039",
        "N048",
        "N054"
      ],
      "keywords": [
        "Q03-011",
        "多线程 / 并发",
        "熙牛医疗",
        "招银云创",
        "京东",
        "货拉拉"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-012",
      "number": "Q03-012",
      "question": "synchronized 与 ReentrantLock 如何选择？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n普通互斥优先考虑 synchronized，写法简单，异常退出也自动释放。需要尝试加锁、等待超时、可中断获取或多个 Condition 时，可选 ReentrantLock。它需要在成功加锁后，用 finally 确保 unlock。\n\n**举个例子：**\n需要“最多等锁 200ms，拿不到就返回繁忙”时，tryLock 比一直等 synchronized 更贴合需求。\n\n**深入补充（选读）：**\n两者都支持互斥、可重入与相应可见性保证。synchronized 简洁且异常退出自动释放；ReentrantLock 支持 tryLock、可中断等待、公平策略以及多个 Condition，需要 finally unlock。普通临界区可先选 synchronized，确有超时或多个等待条件时再选择显式锁。\n\n**追问 / 易错点：** 公平锁一定更快吗？通常不是，公平性可能降低吞吐量，也不是业务调度的绝对保证。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。",
      "sourceIds": [
        "N011",
        "N018",
        "N028",
        "N029",
        "N032",
        "N039",
        "X04",
        "NI001",
        "NI011",
        "NI017"
      ],
      "keywords": [
        "Q03-012",
        "多线程 / 并发",
        "阿里",
        "携程",
        "熙牛医疗",
        "招银云创",
        "京东",
        "综合",
        "招银网络科技",
        "BIGO",
        "深轻科技"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-013",
      "number": "Q03-013",
      "question": "CAS 是什么？ABA 问题怎么处理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCAS 就是“当前值还是我刚才看到的值，才更新；否则失败重试”。ABA 是值从 A 变 B 又变回 A，CAS 只看值就发现不了中间变化。需要识别这种变化时，可以把版本号和数据一起比较。\n\n**举个例子：**\n库存从 10 变 9 又变 10，只比较 10 看不出变化；比较“值 10、版本 3”就能发现版本已更新。\n\n**深入补充（选读）：**\nCAS 比较当前位置是否等于预期值，相等才原子更新，否则失败重试。A→B→A 后单看值仍是 A，可能遗漏中间变化，即 ABA。可加入版本戳，如 AtomicStampedReference。自旋在竞争激烈时耗 CPU，多个变量的不变量仍需锁或打包状态。\n\n**追问 / 易错点：** CAS 无锁是否意味着永不阻塞、所有线程都及时完成？不能这样推论，无锁不等于每个线程无等待上界。",
      "sourceIds": [
        "N001",
        "N003",
        "N018",
        "N052",
        "NI001"
      ],
      "keywords": [
        "Q03-013",
        "多线程 / 并发",
        "阿里",
        "字节跳动",
        "携程",
        "快手",
        "招银网络科技"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-014",
      "number": "Q03-014",
      "question": "AtomicInteger 和 LongAdder 的区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nAtomicInteger 围绕一个值做原子更新，适合需要精确单次结果的计数或序号。LongAdder 把高并发更新分散到多个格子，最后求和，适合统计。它并发求和不是严格瞬时快照，不适合直接控制库存。\n\n**举个例子：**\n统计一秒收到多少请求，可考虑 LongAdder；决定“还剩一件商品，谁能买到”，不能只看 LongAdder.sum()。\n\n**深入补充（选读）：**\nAtomicInteger 对单个值提供原子读改写，适合序号或需要精确线性化单值结果的场景。LongAdder 把竞争分散到多个单元，适合高并发统计，sum 在并发更新时不是严格原子快照。因此库存条件扣减、唯一序号不宜直接拿 LongAdder 实现。\n\n**追问 / 易错点：** 为什么 LongAdder 更适合 QPS 计数？统计容忍瞬时误差，降低热点原子变量争用更有价值。",
      "sourceIds": [],
      "keywords": [
        "Q03-014",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-015",
      "number": "Q03-015",
      "question": "AQS 是锁吗？它怎样管理状态、排队和唤醒？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nAQS 是实现锁和同步器的基础框架，不是一把具体锁。它维护一个 state 状态，以及拿不到资源时的等待队列。子类规定 state 代表什么、怎样获取和释放，AQS 负责排队、阻塞和唤醒。\n\n**举个例子：**\nReentrantLock 中 state 可表示重入次数；Semaphore 中代表许可数量；CountDownLatch 中代表还没完成的计数。\n\n**深入补充（选读）：**\nAQS 提供同步状态和线程排队、阻塞唤醒框架，子类定义如何获取与释放资源。常见结构是 volatile state 配合 CAS 和双向等待队列，支持独占与共享模式。ReentrantLock、Semaphore、CountDownLatch 等在此基础上赋予 state 不同含义，AQS 本身不是“一把具体锁”。\n\n**追问 / 易错点：** 排队的线程如何暂停？底层常通过 LockSupport.park/unpark 协调。\n\n**原始资料核对 / 延伸查阅：** [T03 · Java 21 AbstractQueuedSynchronizer API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html)。",
      "sourceIds": [
        "N014",
        "N032",
        "N048",
        "N054"
      ],
      "keywords": [
        "Q03-015",
        "多线程 / 并发",
        "百度",
        "招银云创",
        "熙牛医疗",
        "货拉拉"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-016",
      "number": "Q03-016",
      "question": "Condition 与 wait/notify 有什么联系？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCondition 是和 Lock 配套的“等待条件”。条件不满足就 await，释放关联锁并等待；状态改变后 signal 通知。被唤醒不代表条件一定还成立，所以必须用 while 重新判断，再继续执行。\n\n**举个例子：**\n队列为空时消费者 await；生产者放入数据后 signal。消费者醒来可能发现数据已被别人取走，因此不能只用 if 检查一次。\n\n**深入补充（选读）：**\nCondition 绑定显式 Lock，通过 await/signal 等操作等待某个业务条件；一个 Lock 可创建多个条件队列。await 释放所关联锁并在返回前重新获取。必须循环检查条件，因为可能虚假唤醒或条件已被其他线程消费。signal 是通知，不是立即把 CPU 和锁交给等待者。\n\n**追问 / 易错点：** 为什么 while(condition不满足) await，而不是 if？唤醒不意味着条件仍然成立。",
      "sourceIds": [],
      "keywords": [
        "Q03-016",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-017",
      "number": "Q03-017",
      "question": "死锁的条件和解决办法？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n死锁就是多个执行者互相等对方手里的资源，谁都不往前走。四个条件是互斥、持有并等待、不可剥夺、循环等待。常用防法是统一拿锁顺序、缩短持锁时间、避免持锁调远程接口，必要时超时退出。\n\n**举个例子：**\nA 拿锁 1 等锁 2，B 拿锁 2 等锁 1，就是循环等待。都按“先锁 1、后锁 2”获取，可打破这种顺序冲突。\n\n**深入补充（选读）：**\n常见四条件为互斥、持有并等待、不可剥夺、循环等待。工程上可统一多锁获取顺序，缩小锁范围，避免持锁调用外部服务，必要时使用超时获取并回退。排查结合线程转储中的持锁与等待关系，还要区分数据库死锁和应用线程死锁。\n\n**追问 / 易错点：** 活锁与饥饿是什么？前者线程一直重试却不推进，后者某个线程长期拿不到执行资源。",
      "sourceIds": [
        "N007",
        "N038",
        "NI011"
      ],
      "keywords": [
        "Q03-017",
        "多线程 / 并发",
        "腾讯",
        "百度",
        "BIGO"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-018",
      "number": "Q03-018",
      "question": "读写锁和 StampedLock 有什么用途？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n读写锁允许多个读者同时读，但写入时要排他，适合读多写少。StampedLock 还允许先不加读锁地乐观读取，再验证期间是否有写入；验证失败就加读锁重读。乐观读的关键是“读完必须验证”。\n\n**深入补充（选读）：**\n读写锁允许多个读者同时进入，但写操作排他，适合读多写少且临界区有一定成本的共享状态。StampedLock 还提供乐观读：先取 stamp 读取，再 validate，失败后退回读锁重读；不保证可重入。不能只验证一次后无限继续用会被并发修改的数据。\n\n**追问 / 易错点：** 读锁直接升级为写锁有什么问题？常见实现可能死锁，要按 API 支持的转换方式或释放后重查。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q03-018",
        "多线程 / 并发",
        "阿里"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-019",
      "number": "Q03-019",
      "question": "CountDownLatch、CyclicBarrier、Semaphore 怎么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCountDownLatch 是“等大家做完”，计数归零后放行，通常一次性；CyclicBarrier 是“大家到齐再一起走下一阶段”，可循环；Semaphore 是“同时最多放几个人进去”，限制并发数量。\n\n**举个例子：**\n主线程等三个查询完成用 Latch；多个线程每轮都汇合用 Barrier；最多十个任务同时调用第三方服务用 Semaphore。\n\n**深入补充（选读）：**\nLatch 等待计数归零，适合主任务等待若干子任务，通常一次性；Barrier 让固定参与者在阶段点会合，可重复使用；Semaphore 控制同时进入某资源的许可数量。获取许可后必须保证释放，不要把异常路径漏掉。动态分阶段协作可了解 Phaser。\n\n**追问 / 易错点：** 限流与信号量相同吗？信号量主要限制并发数，不直接限制每秒请求数。",
      "sourceIds": [
        "N014"
      ],
      "keywords": [
        "Q03-019",
        "多线程 / 并发",
        "百度"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-020",
      "number": "Q03-020",
      "question": "ThreadLocal 怎样隔离线程数据？为什么在线程池里要清理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nThreadLocal 给每个线程保存自己的变量槽位，不是把一个变量自动复制成全局线程安全对象。线程池会复用线程，忘记 remove 可能让下一次请求拿到上一次的数据。弱引用 key 被回收后，value 也可能仍被长期存活线程持有。\n\n**举个例子：**\n在线程里放 userId，处理完请求后在 finally 调 remove；否则同一个工作线程接到另一个用户请求时，可能残留旧身份。\n\n**深入补充（选读）：**\n每个线程保存自己的 ThreadLocalMap，ThreadLocal 是访问键，值属于该线程的槽位。常见实现键为弱引用，值为强引用；键被回收后值可能随长期存活线程继续保留，线程池还可能把上次请求数据带给下次请求。用 try-finally remove，且不要把共享可变对象放进去就当成隔离副本。\n\n**追问 / 易错点：** ThreadLocalMap 用链表解决冲突吗？常见实现使用开放寻址和线性探测。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [T04 · Java 21 ThreadLocal API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html)。\n\n**原章示例（移至对应题目）：**\n```java\ntry {\n    tenantContext.set(validatedTenantId);\n    executeBusiness();\n} finally {\n    tenantContext.remove();\n}\n```\n\n这里只展示控制结构，`validatedTenantId`、`tenantContext`、`executeBusiness` 是应用对象。若存在嵌套上下文，应保存并恢复旧值；事务和权限不能仅通过任意字符串复制获得。",
      "sourceIds": [
        "N022",
        "N028",
        "N032",
        "X03",
        "NI011"
      ],
      "keywords": [
        "Q03-020",
        "多线程 / 并发",
        "BIGO",
        "熙牛医疗",
        "招银云创",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-021",
      "number": "Q03-021",
      "question": "线程池如何传递用户、租户和 traceId？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n提交线程池任务时，用户、租户和 traceId 不会靠普通 ThreadLocal 自动跟过去。应在提交时捕获必要信息，执行前设置，结束后恢复或清理。InheritableThreadLocal 主要在线程创建时继承，不等于每个新任务都更新上下文。\n\n**深入补充（选读）：**\n普通 ThreadLocal 不会随任务自动传播，InheritableThreadLocal 主要在创建子线程时继承，不能可靠处理复用线程池的每个任务。可在提交时捕获必要上下文，在执行前设置，在 finally 恢复或清理；也可用成熟任务装饰器。权限必须来自可信上下文，不能直接相信客户端传来的租户 ID。\n\n**追问 / 易错点：** 只在任务结束 remove 是否足够？若嵌套上下文，往往应恢复原值而不是一律删除。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [T04 · Java 21 ThreadLocal API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html)。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q03-021",
        "多线程 / 并发",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-022",
      "number": "Q03-022",
      "question": "线程池七个参数是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n七个参数分三组记：人数是 corePoolSize、maximumPoolSize；等待是 keepAliveTime、unit、workQueue；管理是 threadFactory、handler。分别控制核心/最大线程数、空闲多久回收、排队放哪、线程怎么创建、任务满了怎么办。\n\n**举个例子：**\n可以联想为工厂：常驻工人、最多工人、临时工空闲时长、时间单位、待办区、招聘规则、超载处理规则。\n\n**深入补充（选读）：**\ncorePoolSize 核心线程数、maximumPoolSize 最大线程数、keepAliveTime 空闲存活时长、unit 时间单位、workQueue 等待队列、threadFactory 线程工厂、handler 拒绝策略。线程工厂应设置可识别名称，队列要显式考虑容量；核心线程默认不因普通空闲超时退出，开启允许核心超时后另论。\n\n**追问 / 易错点：** 为什么不要只背七个名字？还需解释每个参数如何限制并发、排队与内存占用。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)；[X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。\n\n**原章示例（移至对应题目）：**\n以下数值只是展示参数关系，不是推荐生产值。\n\n```java\nAtomicInteger seq = new AtomicInteger();\nThreadPoolExecutor pool = new ThreadPoolExecutor(\n    4, 8, 60L, TimeUnit.SECONDS,\n    new ArrayBlockingQueue<Runnable>(100),\n    r -> new Thread(r, \"business-io-\" + seq.incrementAndGet()),\n    new ThreadPoolExecutor.AbortPolicy()\n);\nFuture<Integer> f = pool.submit(() -> 1 + 2);\ntry {\n    System.out.println(f.get(1, TimeUnit.SECONDS));\n} catch (TimeoutException e) {\n    f.cancel(true); // 仅尝试取消；底层调用还需响应中断/超时\n    throw e;\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n    throw e;\n} finally {\n    pool.shutdown(); // 服务级线程池应在服务生命周期结束时关闭，不是每请求关闭\n}\n```\n\n片段应放入声明相应异常的方法中，并导入 `java.util.concurrent.*`、`java.util.concurrent.atomic.AtomicInteger`。实际代码还应处理 `ExecutionException`、拒绝异常以及限时等待池退出。",
      "sourceIds": [
        "N001",
        "N009",
        "N017",
        "N025",
        "N029",
        "N032",
        "N038",
        "N039",
        "N046",
        "N048",
        "N054",
        "N055",
        "X01",
        "X04",
        "X05",
        "X08",
        "NI003",
        "NI011"
      ],
      "keywords": [
        "Q03-022",
        "多线程 / 并发",
        "阿里",
        "京东",
        "滴滴",
        "大疆",
        "熙牛医疗",
        "招银云创",
        "百度",
        "美团",
        "货拉拉",
        "网易",
        "腾讯",
        "综合",
        "得物",
        "招银网络科技",
        "BIGO"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-023",
      "number": "Q03-023",
      "question": "ThreadPoolExecutor 提交任务的执行流程？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n任务进入线程池，通常按四步走：不到核心数就建线程；达到核心数就排队；队列满了才扩到最大数；仍放不下就执行拒绝策略。不是先开到最大线程数，再让任务排队。\n\n**举个例子：**\ncore=2、max=4、队列容量=3，且任务都没做完时：前 2 个交给线程，中间 3 个排队，再来的 2 个促使扩线程，随后才拒绝。\n\n**深入补充（选读）：**\n工作线程少于核心数时优先创建线程；达到核心后尝试入队；队列放不下再尝试扩到最大数；仍无法接收就拒绝。入队后还会重新检查池状态和必要的工作线程。无界队列通常使最大线程数难以发挥作用，SynchronousQueue 则倾向直接交接或扩线程。\n\n**追问 / 易错点：** core=4、max=8、队列=100，是否先开满8个再排队？通常不是，先到核心数再入队。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [
        "N052",
        "X08",
        "NI003",
        "NI011",
        "NI022"
      ],
      "keywords": [
        "Q03-023",
        "多线程 / 并发",
        "快手",
        "美团",
        "招银网络科技",
        "BIGO",
        "得物"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-024",
      "number": "Q03-024",
      "question": "线程池拒绝策略有哪些？怎么选？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n四种内置拒绝策略：AbortPolicy 抛异常，CallerRunsPolicy 让提交者自己做，DiscardPolicy 直接丢，DiscardOldestPolicy 丢队头再尝试提交。业务任务不能随便静默丢失，选择时必须说明用户如何知道失败。\n\n**举个例子：**\nCallerRuns 会拖慢提交者；若提交者是 Netty 事件循环，就可能把它负责的其他连接也拖慢。池关闭时该策略还会丢任务。\n\n**深入补充（选读）：**\nAbortPolicy 抛异常，CallerRunsPolicy 由提交线程执行，DiscardPolicy 丢弃，DiscardOldestPolicy 丢弃队头后再尝试。业务任务一般不能静默丢失；CallerRuns 可形成背压，但可能阻塞网关/事件循环线程，且关闭状态下不会执行任务。可自定义告警、快速失败或持久化补偿，但别无限重试。\n\n**追问 / 易错点：** 用了 submit 和静默丢弃可能有什么后果？Future 可能长期得不到完成结果。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [
        "N046",
        "N048",
        "X08",
        "NI017",
        "NI022"
      ],
      "keywords": [
        "Q03-024",
        "多线程 / 并发",
        "美团",
        "熙牛医疗",
        "深轻科技",
        "得物"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-025",
      "number": "Q03-025",
      "question": "线程池大小如何设置？为什么不能只套 CPU×2？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n先分 CPU 密集还是 IO 等待多，再看 CPU 配额、数据库连接数和下游限额，用压测调整线程数。CPU 密集任务通常从可用核心数附近起步；IO 密集可适当多开，但不能无限开。公式只是估算起点，不是最终配置。\n\n**举个例子：**\n每秒 100 个请求、每个平均占用线程 0.2 秒，平均约有 20 个在途任务；还需考虑峰值、排队和下游容量。\n\n**深入补充（选读）：**\nCPU 密集任务先按可用 CPU 配额附近起步，IO 密集可根据等待与计算时间估算并发，但必须受连接池、下游限额和内存约束。用吞吐、P95/P99、队列等待、活跃数和拒绝率压测修正。公式只是初值，不能直接把“CPU×2”当所有业务答案。\n\n**追问 / 易错点：** 接口平均200ms，目标100QPS，粗略在途量？稳定条件下约20，之后再评估分位延迟和余量。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)；[X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [
        "N003",
        "N017",
        "N035",
        "N051",
        "X01",
        "X02",
        "NI007"
      ],
      "keywords": [
        "Q03-025",
        "多线程 / 并发",
        "字节跳动",
        "滴滴",
        "快手",
        "京东",
        "腾讯",
        "拼多多",
        "美团"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-026",
      "number": "Q03-026",
      "question": "execute、submit 和 Future 异常处理有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nexecute 不返回 Future，任务异常通常走工作线程的未捕获异常处理；submit 返回 Future，异常会被存起来，调用 get 时才暴露。提交后不看 Future，错误可能被忽略。get 会阻塞，必要时设置等待超时。\n\n**深入补充（选读）：**\nexecute 执行 Runnable，异常通常进入工作线程的未捕获异常处理路径；submit 包装成 FutureTask，异常被保存，调用 Future.get 才以 ExecutionException 暴露。提交后不观察 Future 可能让错误悄悄消失。get 会阻塞，要配合限时等待和取消策略。\n\n**追问 / 易错点：** afterExecute 一定直接拿到 submit 的异常吗？不一定，需要检查任务是否为已完成 Future 并取结果。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [],
      "keywords": [
        "Q03-026",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-027",
      "number": "Q03-027",
      "question": "shutdown 与 shutdownNow 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nshutdown 是“停止收新任务，把已接收的做完”；shutdownNow 是“尝试中断正在做的，并返回没开始的”。后者不是强制杀死线程，任务不响应中断时仍可能继续。优雅关闭应先停接流量，再等待任务，最后释放资源。\n\n**深入补充（选读）：**\nshutdown 不再接收新任务，但尝试完成已接收任务；shutdownNow 尝试中断运行任务并返回未开始任务，不保证强制终止。通常先 shutdown、限时 awaitTermination，再视业务尝试进一步取消。关键任务还需持久化状态，防止进程退出后只剩内存队列。\n\n**追问 / 易错点：** 怎么优雅下线接口服务？先停止接流量，再等待在途请求和后台任务，最后释放连接等资源。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [],
      "keywords": [
        "Q03-027",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-028",
      "number": "Q03-028",
      "question": "线程池能动态调参吗？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n线程池可以调整核心数、最大数和空闲回收时间，但仍要满足最大数不小于核心数等约束。普通固定容量队列不能靠改一个配置就自动扩容。调参之前先判断瓶颈，加线程不能解决数据库锁住或下游限流。\n\n**举个例子：**\n先调大最大数，再把核心数提高到该范围；调小时注意反过来满足约束。变更要有监控和回滚。\n\n**深入补充（选读）：**\nThreadPoolExecutor 提供设置核心数、最大数和存活时间等方法，但约束仍要满足，如最大数不能小于核心数，调大调小顺序要正确。普通固定容量队列不能只靠改字段就安全扩容。动态配置需要校验、审计、监控和回滚，避免突增并发把下游打垮。\n\n**追问 / 易错点：** 为什么任务积压时不能总是加线程？瓶颈若是数据库锁或下游限流，加线程只增加排队和争用。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)。\n\n**原始资料核对 / 延伸查阅：** [T02 · Java 21 ThreadPoolExecutor API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。",
      "sourceIds": [
        "N051",
        "X01"
      ],
      "keywords": [
        "Q03-028",
        "多线程 / 并发",
        "京东",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-029",
      "number": "Q03-029",
      "question": "CompletableFuture 怎样编排并行调用？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCompletableFuture 用来组织异步任务的依赖关系。thenApply 转换结果，thenCompose 接上另一个异步任务，thenCombine 合并两个结果，allOf 等全部完成。独立调用才适合并行，阻塞 IO 通常要指定合适的独立执行器。\n\n**举个例子：**\n用户信息和积分互不依赖，可以同时查询后合并；必须先拿到订单号才能查物流，就不是直接并行的关系。\n\n**深入补充（选读）：**\nsupplyAsync 提交有返回值任务，thenApply 转换结果，thenCompose 展开后续异步任务，thenCombine 合并两个结果，allOf 等待全部完成。为阻塞 IO 指定专用有界执行器，避免污染公共 ForkJoinPool。并行只适用于没有前后依赖的调用，最后统一处理失败、超时与部分结果。\n\n**追问 / 易错点：** thenApply 返回 Future 与 thenCompose 差在哪？前者可能嵌套 Future，后者扁平组合。\n\n**原始资料核对 / 延伸查阅：** [T08 · Java 21 CompletableFuture API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html)。",
      "sourceIds": [],
      "keywords": [
        "Q03-029",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-030",
      "number": "Q03-030",
      "question": "CompletableFuture 超时或取消后，底层 HTTP、数据库调用会自动停止吗？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nFuture 超时完成，不等于底层工作已经停止。CompletableFuture 的 orTimeout 或 cancel 可能只是让结果变成失败，HTTP 请求还在占连接。要同时配置客户端超时、传递取消信号，并防止迟到结果继续产生副作用。\n\n**举个例子：**\n前端等了 3 秒后显示超时，后台下单可能第 4 秒成功；再次提交还必须使用幂等键，不能当作第一次肯定失败。\n\n**深入补充（选读）：**\n不保证。orTimeout 可让 Future 异常完成，但底层 HTTP 或数据库调用可能继续；CompletableFuture.cancel 也不意味着可靠中断实际执行线程。必须同时设置客户端连接/读取/调用超时，配合 SDK 取消与资源关闭，必要时丢弃迟到结果并做业务幂等。\n\n**追问 / 易错点：** whenComplete 里释放连接能替代所有取消吗？不能，需确认实际资源所有权和仍在执行的操作。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [T08 · Java 21 CompletableFuture API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html)。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q03-030",
        "多线程 / 并发",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-031",
      "number": "Q03-031",
      "question": "ForkJoinPool、工作窃取和 parallelStream 有什么特点？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nForkJoinPool 适合能拆成小块的计算任务。每个工作线程有自己的任务队列，空闲时可以从其他线程拿任务，这叫工作窃取。parallelStream 常使用公共池，把慢 IO 放进去可能拖累其他任务，小数据量并行也可能更慢。\n\n**深入补充（选读）：**\nForkJoinPool 适合可拆分的计算任务，工作线程有自己的任务队列，空闲线程可从别处窃取任务以平衡负载。parallelStream 常使用公共池，混入长时间阻塞操作可能影响其他任务。对小集合或不可高效拆分的数据，并行开销可能超过收益。\n\n**追问 / 易错点：** 递归任务怎么避免细分过头？设阈值，小任务直接计算，避免无意义调度。",
      "sourceIds": [],
      "keywords": [
        "Q03-031",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-032",
      "number": "Q03-032",
      "question": "什么是安全发布？双重检查单例为什么用 volatile？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n安全发布是让另一个线程看到对象引用时，也能看到正确初始化的对象状态。双重检查单例第一次读引用不加锁，因此实例字段需要 volatile，建立必要的发布保证。仅把构造器设成 private，只解决外部不能随便 new。\n\n**举个例子：**\n不能出现“另一个线程已经拿到对象引用，却看到对象内部仍是未完成初始化的状态”。静态内部类也可利用类初始化保证构造发布。\n\n**深入补充（选读）：**\n安全发布保证其他线程看到对象引用时，也看到构造完成的正确状态。可借助静态初始化、锁或 volatile 等建立关系。双重检查中第一次读不加锁，实例字段用 volatile 才能避免不安全发布和相关重排问题；写法要正确且构造中不能泄露 this。\n\n**追问 / 易错点：** 只把构造器设为 private 是否线程安全？不够，它只限制外部直接构造。",
      "sourceIds": [],
      "keywords": [
        "Q03-032",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-033",
      "number": "Q03-033",
      "question": "虚拟线程是什么？该不该池化？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n虚拟线程是由 JDK 调度的轻量线程，Java 21 正式引入，主要适合大量等待 IO 的任务。通常一个任务一个虚拟线程，不是建池反复复用。它能降低线程成本，但数据库连接数和下游容量仍要限制。\n\n**深入补充（选读）：**\nJava 21 正式引入虚拟线程，由 JDK 调度到平台线程，适合大量以等待 IO 为主的并发任务，降低一请求一平台线程的资源成本。通常一个任务一个虚拟线程，不应为了复用而像平台线程那样池化；对稀缺下游资源仍需信号量或连接池限制。\n\n**追问 / 易错点：** 换成虚拟线程后数据库连接数也能无限开吗？不能，下游容量没有改变。\n\n**原始资料核对 / 延伸查阅：** [T05 · JEP 444：Virtual Threads](https://openjdk.org/jeps/444)。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q03-033",
        "多线程 / 并发",
        "招银网络科技"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-034",
      "number": "Q03-034",
      "question": "虚拟线程为什么会占住载体线程？JDK 21 和 24 的限制有何不同？",
      "category": "多线程 / 并发",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "**直接回答：**\npinning 是虚拟线程在某些操作中不能卸载，只能占住承载它的平台线程，影响扩展性。Java 21 要留意 synchronized 中阻塞；JDK 24 的 JEP 491 改善了这类情况。回答必须带版本，不把旧限制当永久结论。\n\n**深入补充（选读）：**\n在一些操作中虚拟线程不能卸载，会占住承载它的平台线程，降低可扩展性。Java 21 的 synchronized 区域内阻塞是典型注意点；JDK 24 的 JEP 491 改善了 synchronized 导致的 pinning，不能把旧限制永久套用。native 等情况仍要按具体版本与调用路径分析。\n\n**追问 / 易错点：** 虚拟线程能让计算密集循环更快吗？不会，仍受 CPU 总量限制。\n\n**原始资料核对 / 延伸查阅：** [T06 · JEP 491：Synchronize Virtual Threads without Pinning](https://openjdk.org/jeps/491)。",
      "sourceIds": [],
      "keywords": [
        "Q03-034",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q03-035",
      "number": "Q03-035",
      "question": "怎样让两个线程交替输出，或实现生产者消费者？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n交替输出先定义“现在轮到谁”，用同一把锁保护检查和修改；不轮到自己就 while 等待，输出后切换状态并通知另一方。还要设计结束和中断条件。生产者消费者通常直接用 BlockingQueue 更稳妥。\n\n**举个例子：**\n只让 A sleep(100)、B sleep(200) 不能保证 A、B 交替，因为线程什么时候真正运行由调度决定。\n\n**深入补充（选读）：**\n先定义共享状态，如轮到哪一方或缓冲区数量，用同一锁保护条件判断与状态变化。条件不满足时 while 等待，执行后更新状态并通知对应等待者；处理中断和结束条件，避免最后一个线程永远等待。生产者消费者通常优先用 BlockingQueue，而不是从零手写同步器。\n\n**追问 / 易错点：** 为什么加 sleep 不算正确交替？它不提供顺序保证，也无法可靠处理调度变化。",
      "sourceIds": [
        "N039",
        "N052",
        "NI024"
      ],
      "keywords": [
        "Q03-035",
        "多线程 / 并发",
        "京东",
        "快手",
        "即时设计"
      ],
      "sourceFile": "03_多线程与并发.md"
    },
    {
      "id": "bank-Q04-001",
      "number": "Q04-001",
      "question": "JVM 运行时内存区域有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nJVM 运行时区域先分共享和私有。线程共享堆、方法区；线程私有程序计数器、虚拟机栈、本地方法栈。堆主要放对象，栈主要保存方法执行状态，方法区保存类相关信息。元空间是 HotSpot 对方法区相关内容的实现，不是另一个同层规范概念。\n\n**深入补充（选读）：**\n线程私有部分主要是程序计数器、虚拟机栈、本地方法栈；线程共享部分主要是堆和方法区，运行时常量池属于方法区的一部分。方法区是规范概念，HotSpot 的元空间是其实现相关内容，主要使用本地内存。直接内存不是 JVM 规范定义的上述运行时区域，但也占进程资源。\n\n**追问 / 易错点：** JMM 和 JVM 内存区域有什么区别？前者讨论并发读写规则，后者讨论运行时存储组织。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [V01 · JVMS 21：The Structure of the JVM](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html)。",
      "sourceIds": [
        "N011",
        "N017",
        "N023",
        "N049",
        "N055",
        "X04",
        "X08",
        "NI011",
        "NI017"
      ],
      "keywords": [
        "Q04-001",
        "JVM",
        "阿里",
        "滴滴",
        "BIGO",
        "熙牛医疗",
        "网易",
        "综合",
        "美团",
        "深轻科技"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-002",
      "number": "Q04-002",
      "question": "堆、栈、方法区各存什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n堆主要放对象和数组，栈帧放方法的局部变量、操作中间值和返回信息，方法区放类元数据等。局部变量保存对象引用，不等于对象本体就在栈上。先分清“变量里的引用”和“被引用的对象”。\n\n**举个例子：**\nvoid f(){ User u = new User(); } 中，u 是局部引用；new 出来的 User 按通常执行模型在堆上。JIT 还可能优化掉分配。\n\n**深入补充（选读）：**\n堆主要承载对象与数组；栈由栈帧组成，包含局部变量表、操作数栈和返回信息；方法区相关结构保存类元数据等。局部变量是对象引用时，引用在栈帧里不意味着整个对象都在栈上；JIT 还可能通过逃逸分析和标量替换消除分配。\n\n**追问 / 易错点：** 静态变量一定全部在元空间吗？不能简单对应，HotSpot 的 Class 镜像、静态字段等布局需按实现理解。\n\n**原始资料核对 / 延伸查阅：** [V01 · JVMS 21：The Structure of the JVM](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html)。",
      "sourceIds": [
        "N002",
        "N010",
        "N013",
        "N033",
        "NI001",
        "NI024"
      ],
      "keywords": [
        "Q04-002",
        "JVM",
        "美团",
        "京东",
        "百度",
        "同程",
        "招银网络科技",
        "即时设计"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-003",
      "number": "Q04-003",
      "question": "一个对象从 new 到可用经历什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nnew 对象可以按五步记：确认类可用、分配内存、赋默认值、设置对象头、执行实例初始化和构造器。分配空间与构造器赋业务值是不同步骤。TLAB 等机制用来减少多个线程分配对象时的竞争。\n\n**深入补充（选读）：**\n先检查并必要时加载和初始化类，再为对象分配空间，设置默认值与对象头，然后执行实例初始化和构造器等逻辑。HotSpot 常通过 TLAB 降低并发分配竞争，或在共享分配时用 CAS 等协调。源码顺序是语义模型，实际执行还受合法优化影响。\n\n**追问 / 易错点：** 分配空间和执行构造器是同一步吗？不是，默认值设置也先于普通构造器赋值。",
      "sourceIds": [
        "N014",
        "N036",
        "N052",
        "NI025"
      ],
      "keywords": [
        "Q04-003",
        "JVM",
        "百度",
        "腾讯",
        "快手",
        "阿里"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-004",
      "number": "Q04-004",
      "question": "对象头、压缩指针和内存对齐是什么？对象大小固定吗？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n对象内存通常由对象头、实例字段和对齐填充组成；数组还要保存长度。对象头记录锁、哈希及类信息等实现需要的数据。压缩指针用更短的表示节省空间。精确占多少字节，要看 JDK、参数和字段布局。\n\n**举个例子：**\n不能只背“所有对象头都是 16 字节”。需要精确数字时，用对应 JVM 配置运行 JOL 等工具测量。\n\n**深入补充（选读）：**\nHotSpot 对象通常有标记信息、类指针以及实例数据，数组还需长度信息；最终大小按对齐规则补齐。压缩指针用较短表示降低引用和类指针开销，受堆配置与实现限制。精确大小取决于 JDK、对象头方案、字段布局与参数，不能背一个固定字节数适用于所有版本。\n\n**追问 / 易错点：** 怎么确认真实对象大小？使用 JOL 等工具，并记录实际 JVM 配置。",
      "sourceIds": [],
      "keywords": [
        "Q04-004",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-005",
      "number": "Q04-005",
      "question": "TLAB 是什么？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nTLAB 是堆里临时划给一个线程使用的分配区。线程在自己这块区域里创建对象，通常不用每次都和其他线程抢同一个分配指针。它优化的是“分配内存”，不是“之后访问对象”的线程安全。\n\n**举个例子：**\n像大仓库给每个工人分一小片工位；工位仍属于仓库，放进去的物品也不因此禁止别人使用。\n\n**深入补充（选读）：**\nTLAB 是在线程共享堆中为某线程预留的一小块分配区域，让常见对象分配通过本地指针推进完成，减少每次都争抢堆分配指针。它不是独立于堆的私有内存，也不意味着分配在其中的对象永远不能被其他线程访问。大对象或区域不足时走其他分配路径。\n\n**追问 / 易错点：** TLAB 会导致共享对象不用同步吗？不会，它只优化分配，不改变业务访问的线程安全要求。",
      "sourceIds": [
        "N052",
        "N054",
        "NI025"
      ],
      "keywords": [
        "Q04-005",
        "JVM",
        "快手",
        "货拉拉",
        "阿里"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-006",
      "number": "Q04-006",
      "question": "对象不逃逸就一定在栈上分配吗？什么是标量替换？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n逃逸分析判断对象会不会跑到方法外、被其他线程使用。若不会，JIT 可能消除锁，或把对象拆成几个普通值，连对象分配都省掉，这叫标量替换。不逃逸不等于保证把整个对象放进栈里。\n\n**深入补充（选读）：**\n逃逸分析判断对象是否会被方法外或其他线程访问，JIT 可据此消除锁、做标量替换，把对象拆成若干值并消除实际对象分配。“不逃逸就一定分配到栈上”不准确，具体优化受编译器、代码形态和运行状态限制，HotSpot 常讨论的是标量替换。\n\n**追问 / 易错点：** 打开参数就保证每个局部对象被优化吗？不保证，需结合分析工具验证。",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "Q04-006",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-007",
      "number": "Q04-007",
      "question": "如何判断对象可以被回收？GC Roots 有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nGC 常从 GC Roots 出发沿引用找对象。能从根找到的通常保留，找不到的才进入回收判断。根包括活跃栈中的引用、类相关静态引用和 JNI 引用等。两个对象互相引用，也不代表它们永远不会被回收。\n\n**举个例子：**\nA 引用 B、B 引用 A，但程序其他地方都到不了它们，这一整组仍可能被回收。\n\n**深入补充（选读）：**\n主流收集器使用可达性分析，从根集合追踪引用，无法通过需要保留的引用路径到达的对象可进入回收判定。根来源包括活跃线程栈中的引用、JNI 引用、类相关静态引用等，具体枚举按实现。引用计数难处理环形引用，不能把它当 Java 堆的主要回收判据。\n\n**追问 / 易错点：** 两个对象只互相引用会永久存活吗？若从根不可达，通常可被回收。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "N032",
        "N038",
        "X07"
      ],
      "keywords": [
        "Q04-007",
        "JVM",
        "招银云创",
        "百度",
        "腾讯"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-008",
      "number": "Q04-008",
      "question": "强、软、弱、虚引用的区别？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n强引用正常可达时阻止回收；软引用在内存紧张时可能被回收；弱引用在弱可达性判定时可被清理；虚引用不能通过 get 取对象，主要配合引用队列跟踪回收相关通知。回收时机不能拿来当精准业务定时器。\n\n**深入补充（选读）：**\n强引用可达通常阻止回收；软引用用于内存敏感引用，但回收时机不适合作精确业务缓存策略；弱引用对象在相应可达性判定下可被回收；虚引用 get 返回 null，通常配合引用队列观察生命周期并清理资源。引用队列通知也不等于能依赖固定回收时刻。\n\n**追问 / 易错点：** WeakHashMap 的值引用了自己的键会怎样？可能形成根可达路径，使预期的弱键回收失效。",
      "sourceIds": [
        "N028"
      ],
      "keywords": [
        "Q04-008",
        "JVM",
        "熙牛医疗"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-009",
      "number": "Q04-009",
      "question": "常见 GC 算法及各自代价？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n标记清除：标出活对象，清掉垃圾，可能有碎片。复制：把存活对象搬到另一块连续区域，代价是预留空间。标记整理：把存活对象挤紧，减少碎片，但要移动对象。收集器可能组合这些思路。\n\n**举个例子：**\n新生代大多数对象很快死亡，复制少量活对象通常较划算；长期存活对象多时，复制成本就不同。\n\n**深入补充（选读）：**\n标记清除先标记再回收，可能留下碎片；复制把存活对象迁到另一块区域，分配紧凑但需要额外空间；标记整理压紧存活对象，减少碎片但移动成本较高。现代收集器会混合使用多种思路，还涉及并发标记和增量工作，不能简单“一收集器只对应一算法”。\n\n**追问 / 易错点：** 为什么新生代常适合复制？多数对象很快死亡，复制少量存活对象成本较低。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。",
      "sourceIds": [
        "N001",
        "N008",
        "N013",
        "N014",
        "N036",
        "N044",
        "X04",
        "NI001",
        "NI003",
        "NI007",
        "NI019"
      ],
      "keywords": [
        "Q04-009",
        "JVM",
        "阿里",
        "京东",
        "百度",
        "腾讯",
        "字节跳动",
        "综合",
        "招银网络科技",
        "美团",
        "新蛋"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-010",
      "number": "Q04-010",
      "question": "分代回收依据是什么？对象何时晋升？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n分代回收基于一个现象：多数对象很快不用，少数对象会活很久。所以把不同寿命对象分开处理。对象晋升与年龄、Survivor 空间和收集器策略有关，不是所有对象都必须经历 15 次 GC。\n\n**举个例子：**\n接口里临时拼接的对象常很快消失；长期缓存里的对象可能一直存活。两类对象用同样频率扫描不一定划算。\n\n**深入补充（选读）：**\n分代利用多数对象短命、较少对象长期存活的统计规律。对象经过回收仍存活可能增加年龄并在条件满足时晋升；Survivor 容量、动态年龄判定、大对象分配和具体收集器策略也会影响。不能背“所有对象都十五次后进入老年代”，也不是所有收集器都使用相同分代布局。\n\n**追问 / 易错点：** 大对象一定直接进老年代吗？要看收集器和配置，G1 有自己的 humongous 处理方式。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N052",
        "X08",
        "NI011"
      ],
      "keywords": [
        "Q04-010",
        "JVM",
        "快手",
        "美团",
        "BIGO"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-011",
      "number": "Q04-011",
      "question": "Minor GC、Major GC、Full GC、Mixed GC 怎么区分？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nYoung/Minor GC 通常收年轻代；Full GC 通常涉及全堆等更大范围；G1 的 Mixed GC 收年轻代加选中的老年代 Region。Major GC 在不同资料里叫法不统一，面试和排障最好按具体收集器日志说清楚。\n\n**深入补充（选读）：**\nMinor/Young GC 常指年轻代回收；Full GC 常指较广范围甚至全堆的回收。Major GC 的用法在资料中不统一，回答应结合具体日志。G1 Mixed GC 会同时处理年轻代和选定老年代 Region，不等同 Full GC。现场排查优先读收集器类型和日志事件名称。\n\n**追问 / 易错点：** “老年代满了必然每次 Full GC”准确吗？不准确，触发和回退行为受收集器及当前状态影响。",
      "sourceIds": [
        "NI001"
      ],
      "keywords": [
        "Q04-011",
        "JVM",
        "招银网络科技"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-012",
      "number": "Q04-012",
      "question": "STW、安全点和安全区域是什么？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSTW 是为了完成某些 JVM 操作而暂停应用线程。安全点是 JVM 能安全检查线程状态的位置；安全区域表示线程一段时间内状态足够稳定。并发 GC 也可能有短暂 STW，不等于整个回收过程都不暂停。\n\n**深入补充（选读）：**\nSTW 是暂停应用线程以完成需要一致状态的 GC 或其他 VM 操作。安全点是 JVM 能安全枚举状态的位置；进入暂停可能还需等线程到达相应状态，因此停顿不一定全花在回收动作本身。安全区域用于线程在一段时间内状态足够稳定的情况。\n\n**追问 / 易错点：** 并发收集器是不是完全没有 STW？不是，通常仍有短暂停顿阶段。",
      "sourceIds": [],
      "keywords": [
        "Q04-012",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-013",
      "number": "Q04-013",
      "question": "CMS 有哪些局限？为什么回答时要说明 JDK 版本？",
      "category": "JVM",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCMS 是旧的低停顿收集器，主要采用并发标记清除，但有内存碎片、浮动垃圾和并发失败等问题，也不是完全不暂停。CMS 已在 JDK 14 移除，适合理解旧系统，不能拿它当现代 JDK 的可用配置。\n\n**深入补充（选读）：**\nCMS 是历史上强调并发标记清除的老年代收集器，存在碎片、浮动垃圾和并发失败等问题，初始标记与重新标记仍有暂停。它已从现代 JDK 移除，适合理解旧项目与演进历史，不能推荐在现代 JDK 上直接配置 CMS 参数。\n\n**追问 / 易错点：** 为什么还可能被问？旧生产系统和历史面经仍会涉及，应先说清版本。\n\n**原始资料核对 / 延伸查阅：** [V06 · JEP 363：Remove CMS](https://openjdk.org/jeps/363)。",
      "sourceIds": [
        "N003",
        "N054"
      ],
      "keywords": [
        "Q04-013",
        "JVM",
        "字节跳动",
        "货拉拉"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-014",
      "number": "Q04-014",
      "question": "G1 的核心思路是什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nG1 把堆分成很多 Region，根据回收收益和暂停目标选择部分区域处理。它保留分代思想，用复制整理存活对象减少碎片，并通过记忆集记录跨区引用。暂停时间是优化目标，不是承诺绝不超时。\n\n**举个例子：**\n像把仓库分成小区，优先清理垃圾多、清理收益高的小区，而不是每次都把整个仓库翻一遍。\n\n**深入补充（选读）：**\nG1 把堆切成多个 Region，逻辑上区分年轻代和老年代，结合并发标记选择收益较高的区域回收，复制存活对象以减少碎片。年轻代回收、并发标记、Mixed 回收与极端时的 Full GC 需要区分。暂停目标是启发式目标，并非严格的实时上限。\n\n**追问 / 易错点：** Remembered Set 有什么用？帮助追踪跨区域引用，避免每次都扫描整个堆。\n\n**原始资料核对 / 延伸查阅：** [V03 · Java 21 G1 GC Guide](https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html)。",
      "sourceIds": [
        "N003",
        "N021",
        "N032",
        "N054"
      ],
      "keywords": [
        "Q04-014",
        "JVM",
        "字节跳动",
        "快手",
        "招银云创",
        "货拉拉"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-015",
      "number": "Q04-015",
      "question": "ZGC 解决什么问题？与 G1 如何选择？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nG1 更偏通用平衡，ZGC 更强调低停顿。选择时要看真实业务的延迟、吞吐、堆大小和 CPU/内存余量，不能只比宣传指标。ZGC 是否分代还要说明 JDK 版本，不能一直按早期实现回答。\n\n**深入补充（选读）：**\nZGC 主要面向低延迟，通过并发处理尽量降低长停顿，但存在 CPU、内存和版本相关成本。G1 通常是通用折中，选择需比较实际工作负载的延迟分位、吞吐、堆规模和资源余量。ZGC 的分代模式随 JDK 演进，回答前说明版本，不直接说“它永远不分代”。\n\n**追问 / 易错点：** 低停顿是否代表接口一定低延迟？不是，锁等待和外部依赖仍可能主导延迟。",
      "sourceIds": [
        "N021"
      ],
      "keywords": [
        "Q04-015",
        "JVM",
        "快手"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-016",
      "number": "Q04-016",
      "question": "三色标记和写屏障为什么存在？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n三色标记把对象分成未扫描、扫描中、已扫描。问题是 GC 扫描时，业务线程还可能修改引用关系，导致该保留的对象被漏掉。写屏障等机制记录这些变化，让收集器能补充处理，避免错误回收。\n\n**举个例子：**\nGC 刚扫过 A，业务又让 A 指向一个尚未扫描的 B；收集器需要知道这次引用变化，而不是假装扫描期间世界没变。\n\n**深入补充（选读）：**\n三色模型用于描述未访问、访问中、已访问对象；并发标记时应用仍修改引用，可能导致漏标或多保留。收集器用写屏障等记录关键变化，SATB 与增量更新是不同处理思路。屏障是 GC 与程序协作的机制，不能和业务锁或单一 CPU 内存屏障完全等同。\n\n**追问 / 易错点：** 浮动垃圾是什么？本轮标记快照中仍算存活、之后才失去引用，可能下一轮再回收。",
      "sourceIds": [],
      "keywords": [
        "Q04-016",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-017",
      "number": "Q04-017",
      "question": "类加载、验证、准备、解析、初始化分别做什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n类加载记为“加载、连接、初始化”；连接再分“验证、准备、解析”。加载读入类，验证检查合法性，准备设置必要静态存储和初值，解析处理符号引用，初始化执行静态字段赋值和静态代码块。\n\n**举个例子：**\nstatic int x = 10：普通情况下准备阶段先得到默认值 0，初始化阶段再执行赋 10。编译期常量有专门规则。\n\n**深入补充（选读）：**\n通常分加载、连接、初始化；连接包括验证、准备、解析。加载获取字节并建立运行时类表示；验证检查合法性；准备分配相关静态存储并设置默认或规范规定的常量值；解析把符号引用转为直接引用；初始化执行类初始化逻辑。解析具体时机可以按实现和使用需求推迟。\n\n**追问 / 易错点：** 准备阶段 int x=10 就变成10了吗？普通静态字段通常先为0，赋10在初始化阶段；常量情况需区分。\n\n**原始资料核对 / 延伸查阅：** [V02 · JVMS 21：Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html)。",
      "sourceIds": [
        "N028",
        "N032",
        "N036",
        "N054",
        "N056"
      ],
      "keywords": [
        "Q04-017",
        "JVM",
        "熙牛医疗",
        "招银云创",
        "腾讯",
        "货拉拉",
        "阿里"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-018",
      "number": "Q04-018",
      "question": "双亲委派模型是什么？可以打破吗？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n双亲委派是加载类时先问父加载器，父亲找不到自己再找。这样可复用基础类，减少重复加载。这里的父子是委托关系，不是 Java 类继承关系。自定义加载器可以改变策略，但要处理隔离和类冲突。\n\n**深入补充（选读）：**\n常见 ClassLoader 先检查是否已加载，再委托父加载器尝试，父无法处理时自身加载。这样有利于统一基础类型、减少重复加载。它是常见加载器协作模型，不是不可改变的 VM 硬规则；插件隔离等可以定制，但要控制类冲突和安全边界。\n\n**追问 / 易错点：** 类加载器的父子关系是继承关系吗？主要是委托关系，不能混为 Java 类继承。\n\n**原始资料核对 / 延伸查阅：** [V02 · JVMS 21：Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html)。",
      "sourceIds": [
        "N023",
        "N028",
        "N032",
        "N036",
        "NI019"
      ],
      "keywords": [
        "Q04-018",
        "JVM",
        "BIGO",
        "熙牛医疗",
        "招银云创",
        "腾讯",
        "新蛋"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-019",
      "number": "Q04-019",
      "question": "两个类包名和类名都相同，为什么强转仍可能失败？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n运行时判断是不是同一个类，不只看包名和类名，还看“哪个类加载器定义的”。两个加载器各自定义了同名 User，也可能是不同类型，互相强转会失败。排查时要同时看类名、加载器和 jar 来源。\n\n**深入补充（选读）：**\n运行时类身份通常由二进制类名和定义它的类加载器共同决定。两个加载器分别定义同名类，可能是不同类型，互相强转会失败。插件系统应把公共接口放到双方可共享的父加载器，把实现隔离在子加载器。\n\n**追问 / 易错点：** 排查该看什么？打印类名、ClassLoader 以及相关依赖来源，不只比较包名。\n\n**原始资料核对 / 延伸查阅：** [V02 · JVMS 21：Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html)。",
      "sourceIds": [],
      "keywords": [
        "Q04-019",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-020",
      "number": "Q04-020",
      "question": "Class.forName、loadClass 和类初始化触发条件？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nClass.forName(String) 默认会触发类初始化；ClassLoader.loadClass 通常只加载，不主动初始化。new、调用类声明的静态方法、访问非编译期常量的静态字段等会涉及初始化。类加载完成，不等于类初始化已经完成。\n\n**举个例子：**\n读取 static final int N=10 这种编译期常量，值可能已编进使用方，不一定触发定义类的初始化。\n\n**深入补充（选读）：**\nClass.forName(String) 默认会初始化目标类；ClassLoader.loadClass 一般不主动初始化。new、调用类声明的静态方法、访问非编译期常量静态字段等可能触发主动初始化，读取常量值可能已被编译到使用方，不触发原类初始化。具体必须考虑实际声明该字段的类。\n\n**追问 / 易错点：** 静态块执行几次？对同一加载器定义的类，成功初始化通常一次，并有并发协调。\n\n**原始资料核对 / 延伸查阅：** [V02 · JVMS 21：Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html)。",
      "sourceIds": [],
      "keywords": [
        "Q04-020",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-021",
      "number": "Q04-021",
      "question": "OOM 与 StackOverflowError 怎么定位？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nStackOverflowError 重点查调用栈是否过深，例如无限递归。OutOfMemoryError 要先看缺哪类内存：堆、元空间、直接内存，还是本地线程资源。容器还可能直接 OOMKill，没有机会输出 Java 异常。\n\n**举个例子：**\n堆还剩空间却无法创建线程，可能是线程栈、本地内存或系统线程限额耗尽，不应只增加 Xmx。\n\n**深入补充（选读）：**\nStackOverflowError 常见于递归过深或栈帧过大；OOM 要看消息区分 Java heap、Metaspace、direct buffer、native thread 等。先看容器内存、进程 RSS、堆使用和线程数，再选堆转储、NMT 或线程转储。容器 OOMKill 可能直接杀进程，未必抛 Java OOM。\n\n**追问 / 易错点：** 堆没满为什么进程仍被杀？直接内存、线程栈、元空间或其他本地分配也占内存。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [V04 · Java 21：Troubleshoot Memory Leaks](https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html)。",
      "sourceIds": [
        "N002",
        "N011",
        "N019",
        "N029",
        "X07",
        "NI009",
        "NI017",
        "NI024",
        "NI025"
      ],
      "keywords": [
        "Q04-021",
        "JVM",
        "美团",
        "阿里",
        "字节跳动",
        "熙牛医疗",
        "腾讯",
        "拼多多",
        "深轻科技",
        "即时设计"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-022",
      "number": "Q04-022",
      "question": "内存泄漏与内存溢出的区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n内存泄漏是“不再需要的对象仍被引用，回收不了”；内存溢出是“申请内存时已经不够”。泄漏可能导致溢出，但一次性加载太多数据也能直接溢出。定位泄漏要找是谁长期持有这些对象。\n\n**举个例子：**\n缓存从不删除旧用户，会逐渐泄漏；一次把几百万行读进 List，可能没有长期泄漏也会 OOM。\n\n**深入补充（选读）：**\n泄漏是已经不需要的对象仍被引用，导致不能回收；溢出是申请资源时超过可用容量。泄漏可能引发溢出，但一次全量查询、队列积压也可能没有长期泄漏就造成 OOM。看 GC 后存活量是否持续增长，并用 dominator tree 与 GC Roots 路径找持有者。\n\n**追问 / 易错点：** 最常见持有者有哪些？无界缓存、监听器、静态集合、线程池任务和未清理 ThreadLocal。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [V04 · Java 21：Troubleshoot Memory Leaks](https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html)。",
      "sourceIds": [
        "N003",
        "N038",
        "X05"
      ],
      "keywords": [
        "Q04-022",
        "JVM",
        "字节跳动",
        "百度",
        "得物"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-023",
      "number": "Q04-023",
      "question": "CPU 飙高如何从进程定位到 Java 代码？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先用 top 等找高 CPU 的进程，再用 top -H -p PID 找热点线程，把线程 ID 转为十六进制，与 jstack/jcmd 里的 nid 对上。连续采样确认它是在死循环、GC、正则还是正常计算，最后定位到代码和输入。\n\n**举个例子：**\n一份线程栈只是瞬间照片；同一线程连续多次停在相同热点，再结合 CPU 数据，判断才更可靠。\n\n**深入补充（选读）：**\n先确认目标进程和线程 CPU，使用 top -H -p PID 等定位热点 TID，再转换为十六进制并匹配 jstack/jcmd 线程转储里的 nid；对同一热点连续采样，区分死循环、正则回溯、GC 或正常计算。可用 JFR/采样剖析进一步确认，避免只凭一次栈下结论。\n\n**追问 / 易错点：** 线程栈显示 RUNNABLE 就一定耗 CPU 吗？不一定，需与线程 CPU 和具体栈联合看。\n\n**原始资料核对 / 延伸查阅：** [V05 · Java 21 jcmd 命令参考](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html)。",
      "sourceIds": [
        "NI002"
      ],
      "keywords": [
        "Q04-023",
        "JVM",
        "招银网络科技"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-024",
      "number": "Q04-024",
      "question": "常用 JVM 工具有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\njcmd 看 JVM 信息、线程和诊断命令；jstack 看线程栈；jstat 看部分运行指标；JFR 记录运行事件；堆 dump 配合 MAT 查对象是谁持有。先用轻量信息缩小范围，再决定是否采集成本更高的 dump。\n\n**深入补充（选读）：**\njcmd 可查询 VM 参数、线程与录制信息，jstack 查看线程栈，jstat 观察部分运行指标，JFR 记录低开销运行事件，堆 dump 配合 MAT 分析对象持有关系。命令能力随 JDK 变化。采集堆转储可能暂停、占磁盘并包含敏感数据，现场应选择合适时机和范围。\n\n**追问 / 易错点：** 为什么先留证再重启？重启会清除关键现场，且可能只暂时掩盖根因。\n\n**原始资料核对 / 延伸查阅：** [V05 · Java 21 jcmd 命令参考](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html)。\n\n**原章示例（移至对应题目）：**\n将 `12345` 替换为实际 Java 进程 PID；命令能力、权限与开销随版本和环境不同。不要把示例 PID 原样套到生产。\n\n```bash\ntop -H -p 12345\njcmd 12345 VM.version\njcmd 12345 VM.flags\njcmd 12345 Thread.print\njstat -gcutil 12345 1000 10\n# 仅当启动时开启了NativeMemoryTracking时有相应信息：\njcmd 12345 VM.native_memory summary\n```\n\n分析 CPU 的顺序：线程 CPU → 同一 TID/nid 的多次栈 → 热点代码或 GC → 业务参数 → 修复后同负载验证。\n\n分析内存的顺序：容器限额/RSS → 堆和本地分项 → GC 后存活曲线 → 必要时 dump → 根引用持有路径。堆转储、JFR 录制请先用 `jcmd PID help` 查看对应运行环境支持的操作。",
      "sourceIds": [
        "N011",
        "N033",
        "N049"
      ],
      "keywords": [
        "Q04-024",
        "JVM",
        "阿里",
        "同程",
        "熙牛医疗"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-025",
      "number": "Q04-025",
      "question": "JVM 调优的正确步骤？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJVM 调优先定目标、测基线、找瓶颈，再改代码或参数，最后在相同负载下验证。优先减少无意义对象、无限队列和长期引用，再考虑堆大小及收集器。容器内存不能全给 Xmx，要给堆外内存留余量。\n\n**深入补充（选读）：**\n先明确目标和基线：吞吐、P99、错误率、CPU、GC 暂停及内存上限。确认瓶颈后优先减少无效分配、长引用链和不合理队列，再调整堆、收集器与相关参数，一次只改少量因素并用同负载对比。给进程本地内存留余量，不能把容器内存全部分给 Xmx。\n\n**追问 / 易错点：** 把堆调大一定更好吗？可能降低频率却增加某些回收成本，也可能挤压本地内存。",
      "sourceIds": [
        "N054",
        "N056"
      ],
      "keywords": [
        "Q04-025",
        "JVM",
        "货拉拉",
        "阿里"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-026",
      "number": "Q04-026",
      "question": "解释执行、JIT、AOT 有什么区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n解释器按字节码执行；JIT 在运行中发现热点后，把它编译成机器码；AOT 提前编译。JIT 能结合实际运行情况优化，但需要预热；AOT 可改善某些启动场景，但动态能力和部署约束要单独考虑。\n\n**深入补充（选读）：**\n解释器逐条执行字节码，JIT 在运行中把热点代码编译为机器码并依据剖析信息优化；分层编译在启动和峰值性能间折中。AOT 事先编译部分或整体，可能改善启动与内存，但有部署、反射与动态能力约束。Java程序既能解释也能编译，不能把它简单归为纯解释语言。\n\n**追问 / 易错点：** 为什么压测要预热？类加载、JIT、缓存和连接池等在初期尚不稳定。",
      "sourceIds": [],
      "keywords": [
        "Q04-026",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-027",
      "number": "Q04-027",
      "question": "JIT 为什么可能去优化？内联有什么作用？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJIT 会根据“当前观察到的情况”做优化，例如内联一个常见方法。以后出现新类型或分支，原假设不成立，就可能退回更通用的执行方式，这叫去优化。微基准不能只测一次循环就认定真实性能。\n\n**深入补充（选读）：**\nJIT 依据观察到的类型、分支等做投机优化，假设失效时可去优化回到较通用执行方式。内联把小方法展开到调用处，减少调用开销并打开进一步优化空间，但过大代码也有成本。某次热点测试速度不等于任何输入和完整系统都同样快。\n\n**追问 / 易错点：** 微基准只测循环里一行代码为什么容易失真？可能被常量折叠、死代码消除或不合理测量方式影响。",
      "sourceIds": [],
      "keywords": [
        "Q04-027",
        "JVM"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-028",
      "number": "Q04-028",
      "question": "频繁 Young GC 和频繁 Full GC 分别如何排查？",
      "category": "JVM",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nYoung GC 频繁，先查对象分配太快、临时对象过多和年轻代空间；Full GC 频繁，再查长期存活对象、晋升、元空间和收集器回退。要看 GC 后还剩多少、暂停多久、是否影响接口，不是只看次数。\n\n**举个例子：**\nYoung GC 很多但每次很短、吞吐正常，不一定需要调；Full GC 后堆仍越来越高，更值得查持有链或容量问题。\n\n**深入补充（选读）：**\nYoung GC 先看分配速率、年轻代容量、临时大对象和突发流量；Full GC 再看老年代存活量、晋升压力、元空间、显式GC及收集器回退。使用日志时间线与业务/线程指标对齐，不把两种现象都只用“加堆”处理。修复后同时比较暂停总量和请求长尾。\n\n**追问 / 易错点：** Young GC很频繁但暂停极短且吞吐正常，要立即调吗？先确认是否真的违反目标。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [V04 · Java 21：Troubleshoot Memory Leaks](https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html)。",
      "sourceIds": [
        "N002",
        "N021",
        "N025",
        "X07",
        "NI011",
        "NI025"
      ],
      "keywords": [
        "Q04-028",
        "JVM",
        "美团",
        "快手",
        "大疆",
        "腾讯",
        "BIGO",
        "阿里"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-029",
      "number": "Q04-029",
      "question": "类卸载与元空间泄漏怎么理解？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n类元数据能否卸载，和定义它的类加载器是否还能被找到有关。热部署或动态生成类时，旧加载器被缓存、线程或监听器一直引用，元空间就可能持续增长。先找谁持有旧加载器，不要只把上限调大。\n\n**深入补充（选读）：**\n类元数据能否卸载与定义它的类加载器及相关可达性有关，动态生成类、频繁创建加载器却长期引用会造成元空间持续增长。用类加载统计、加载器数量和堆引用路径定位，检查线程上下文加载器、缓存与监听器。增大Metaspace上限只是延缓耗尽。\n\n**追问 / 易错点：** 热部署后类越来越多，最可能查什么？旧类加载器是否被长生命周期对象继续持有。\n\n**原始资料核对 / 延伸查阅：** [V02 · JVMS 21：Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html)。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q04-029",
        "JVM",
        "BIGO"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q04-030",
      "number": "Q04-030",
      "question": "直接内存和线程栈如何纳入容量预算？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nJava 进程内存不只有堆，还包括线程栈、元空间、代码缓存、直接缓冲和其他本地内存。Xmx 只管堆，不是进程总上限。做容量预算要结合线程数、RSS、NMT 和容器限制，给堆外保留空间。\n\n**深入补充（选读）：**\n进程内存除了Java堆，还包括线程栈、元空间、代码缓存、直接缓冲和其他本地分配。线程数乘Xss只能作粗略预算，实际保留与驻留不同；直接缓冲也要看池化和引用释放。容器内应给堆以外留空间，结合RSS、NMT与容器事件定位，不能只改Xmx。\n\n**追问 / 易错点：** 堆dump很小但RSS很大是否排除了泄漏？没有，可能是本地资源或分配器保留。\n\n**原始资料核对 / 延伸查阅：** [V04 · Java 21：Troubleshoot Memory Leaks](https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html)。",
      "sourceIds": [
        "N023",
        "N054"
      ],
      "keywords": [
        "Q04-030",
        "JVM",
        "BIGO",
        "货拉拉"
      ],
      "sourceFile": "04_JVM.md"
    },
    {
      "id": "bank-Q05-001",
      "number": "Q05-001",
      "question": "Spring、Spring MVC、Spring Boot 的关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSpring 是基础框架，提供 IoC、AOP、事务等能力；Spring MVC 是处理 Web 请求的一部分；Spring Boot 帮我们更方便地配置、启动和运行 Spring 应用。记住：Spring 提供能力，MVC 接请求，Boot 简化搭建。\n\n**深入补充（选读）：**\nSpring Framework 提供依赖注入、AOP、事务等基础设施；Spring MVC 是其 Web MVC 框架，处理请求映射与返回；Spring Boot 基于 Spring 通过约定、自动配置、Starter 和运行支持降低装配成本。Boot 并没有替代 Spring，也不是“一种新的 MVC 架构”。\n\n**追问 / 易错点：** Spring Cloud 又是什么？面向分布式应用的一组生态能力，具体组件和版本需单独确认。",
      "sourceIds": [
        "N020",
        "N056",
        "NI010",
        "NI021"
      ],
      "keywords": [
        "Q05-001",
        "Spring / Spring Boot",
        "用友",
        "阿里",
        "拼多多"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-002",
      "number": "Q05-002",
      "question": "IoC 和 DI 是什么？为什么不直接 new？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nIoC 是把对象创建和依赖管理交给容器；DI 是容器把需要的对象交给你。这样业务类不必写死依赖的实现，方便替换和测试。不是所有对象都禁止 new，普通数据对象仍然可以直接创建。\n\n**举个例子：**\nOrderService 不自己 new 某个支付实现，而是通过构造器接收 PayService，测试时就能换成假的支付服务。\n\n**深入补充（选读）：**\nIoC 是把对象创建和依赖管理交给容器，DI 是通过构造器、方法或字段把依赖注入对象。业务类依赖接口而不是写死具体实现，便于测试和替换。并不是禁止所有 new，简单值对象可直接创建；需要容器代理、生命周期与配置管理的服务才应由容器管理。\n\n**追问 / 易错点：** 依赖注入如何帮助单元测试？可传入替身实现而不必启动完整应用。\n\n**原始资料核对 / 延伸查阅：** [S01 · Spring：Dependency Injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html)。",
      "sourceIds": [
        "N001",
        "N010",
        "N033",
        "N049",
        "N050",
        "N054",
        "NI020"
      ],
      "keywords": [
        "Q05-002",
        "Spring / Spring Boot",
        "阿里",
        "京东",
        "同程",
        "熙牛医疗",
        "小米",
        "货拉拉",
        "新蛋"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-003",
      "number": "Q05-003",
      "question": "BeanFactory、ApplicationContext、FactoryBean 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nBeanFactory 是基础 Bean 工厂，负责获取和管理 Bean；ApplicationContext 在此基础上增加事件、资源、国际化等应用能力。平时 Spring Boot 用的是更完整的 ApplicationContext。注意 FactoryBean 是“制造其他对象的 Bean”，不是 BeanFactory。\n\n**深入补充（选读）：**\nBeanFactory 是核心对象工厂接口，ApplicationContext 在其基础上提供资源、事件、国际化和更完整应用上下文能力。常见上下文会预实例化非懒加载单例，但“BeanFactory 永远懒、Context 永远立即”过于绝对，要看容器使用与配置。Boot 应用通常以 ApplicationContext 作为运行基础。\n\n**追问 / 易错点：** FactoryBean 是 BeanFactory 吗？不是，FactoryBean 是一种生成其他对象的扩展接口。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q05-003",
        "Spring / Spring Boot",
        "腾讯"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-004",
      "number": "Q05-004",
      "question": "Bean 注册方式有哪些？@Component 与 @Bean 怎么选？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n自己的业务类通常加 @Component 或 @Service 等注解，让扫描器注册；第三方类或创建过程需要定制时，通常在配置类里写 @Bean 方法。@Bean 负责把方法返回对象交给容器管理，不是只能用于自己写的类。\n\n**深入补充（选读）：**\n组件扫描配合 @Component/@Service/@Repository/@Controller 注册应用类；@Configuration 中的 @Bean 适合显式配置第三方类或需要自定义创建逻辑的对象；还可使用 Import、注册器等扩展。角色注解不只是装饰名字，例如 Repository 可配合持久化异常转换。\n\n**追问 / 易错点：** 同名 Bean 冲突怎么处理？先查扫描范围和配置来源，不应第一步就打开覆盖掩盖问题。",
      "sourceIds": [],
      "keywords": [
        "Q05-004",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-005",
      "number": "Q05-005",
      "question": "为什么通常优先构造器注入？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n构造器注入能明确一个类必须依赖什么，方便使用 final 字段，也容易单元测试。字段注入虽然少写几行，但依赖被隐藏，脱离容器时不方便构造。依赖太多时，还要考虑是不是这个类负责的事情太多。\n\n**举个例子：**\nnew OrderService(fakeMapper) 就能测试业务，不必为了注入一个字段启动整个 Spring。\n\n**深入补充（选读）：**\n构造器让必需依赖明确，便于使用 final 字段和独立测试，对象构造成功即具备依赖。字段注入隐藏依赖且脱离容器测试不便。可选依赖、延迟获取或特定框架场景再用其他方式；构造器参数太多也提示类承担职责过多。\n\n**追问 / 易错点：** 只有一个构造器一定要写 @Autowired 吗？现代 Spring 通常可以省略。\n\n**原始资料核对 / 延伸查阅：** [S01 · Spring：Dependency Injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-005",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-006",
      "number": "Q05-006",
      "question": "@Autowired、@Resource、@Qualifier、@Primary 怎么区分？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n@Autowired 主要按类型找依赖；有多个候选时，用 @Qualifier 指定一个，或用 @Primary 设置默认优先项。@Resource 通常先按名称匹配，再按相应规则处理类型。多实现时显式说明选择，比依赖变量名碰巧匹配更清楚。\n\n**深入补充（选读）：**\nAutowired 主要按类型解析，再按限定信息等消除歧义；Qualifier 用于指定候选，Primary 标记默认优先候选。Resource 来自标准注解体系，常先考虑指定或默认名称，再按相应规则处理类型。多个实现时最好显式表达选择，不依赖难以发现的变量名巧合。\n\n**追问 / 易错点：** Boot 3 常见注解包变了什么？相关 Java EE API 向 jakarta 命名空间迁移，要匹配依赖版本。",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "Q05-006",
        "Spring / Spring Boot",
        "货拉拉"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-007",
      "number": "Q05-007",
      "question": "Bean 的作用域有哪些？单例是否线程安全？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSpring 默认 singleton，是同一容器中一个 Bean 定义通常对应一个实例；prototype 是每次向容器请求时创建。单例不等于线程安全：多个请求会使用同一个 Service，放在字段里的可变请求数据可能互相覆盖。\n\n**举个例子：**\n不要在单例 Service 中用成员变量 currentUserId 保存每次请求的用户；放方法参数里更合适。\n\n**深入补充（选读）：**\n常用 singleton 为容器内每个 Bean 定义一个实例，prototype 每次请求创建新实例；Web 还有 request、session 等。Spring 单例不等于整个 JVM 只能有一个，也不提供业务字段自动线程安全。单例 Service 通常保持无状态，请求数据放参数或适当上下文。\n\n**追问 / 易错点：** 把 prototype 注入 singleton 后每次调用都新建吗？普通一次性注入不会，需 Provider 或作用域代理等。",
      "sourceIds": [
        "N009",
        "NI008"
      ],
      "keywords": [
        "Q05-007",
        "Spring / Spring Boot",
        "京东",
        "美团"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-008",
      "number": "Q05-008",
      "question": "Bean 生命周期如何回答？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nBean 生命周期先记主线：实例化→注入依赖→初始化→使用→销毁。初始化前后会经过后置处理器，AOP 代理也常在相关阶段产生。@PostConstruct 属于初始化回调；prototype 的完整销毁通常不由容器统一负责。\n\n**举个例子：**\n字段注入要在构造对象之后发生，所以不要在构造器里直接使用尚未注入的字段。\n\n**深入补充（选读）：**\n概括为读取定义、实例化、填充依赖、执行感知回调与 BeanPostProcessor 的相关钩子、初始化、使用和销毁。初始化可包括 @PostConstruct、InitializingBean、自定义 init 方法；顺序和具体处理器参与要按实现理解。AOP 代理常在后处理阶段产生。prototype 的完整销毁不由容器自动统一管理。\n\n**追问 / 易错点：** 为什么不要在构造器里用未注入字段？此时属性注入尚未完成。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N006",
        "N009",
        "N025",
        "N050",
        "N056",
        "X08"
      ],
      "keywords": [
        "Q05-008",
        "Spring / Spring Boot",
        "美团",
        "京东",
        "大疆",
        "小米",
        "阿里"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-009",
      "number": "Q05-009",
      "question": "BeanPostProcessor 与 BeanFactoryPostProcessor 有何区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBeanFactoryPostProcessor 改的是“造对象之前的 Bean 定义”；BeanPostProcessor 处理的是“已经创建出来的对象”，可以返回代理或包装对象。记住：一个改图纸，一个加工成品。\n\n**举个例子：**\n修改配置元信息属于定义阶段；给 Service 包一层代理，属于实例处理阶段。\n\n**深入补充（选读）：**\nBeanFactoryPostProcessor 主要在普通 Bean 实例化前修改 Bean 定义等元信息；BeanPostProcessor 围绕实例初始化前后处理对象，可以返回包装对象或代理。前者适合配置定义层面的调整，后者适合实例增强。实现时要避免过早触发其他 Bean 创建。\n\n**追问 / 易错点：** AOP 代理通常属于哪一类扩展？实例后处理相关扩展。",
      "sourceIds": [],
      "keywords": [
        "Q05-009",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-010",
      "number": "Q05-010",
      "question": "循环依赖怎样形成？三级缓存能解决哪些情况？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nA 依赖 B、B 又依赖 A，就是循环依赖。某些单例属性注入场景，可以提前暴露尚未完全初始化的引用来打破循环：一级存完整对象，二级存早期引用，三级存获取早期引用的工厂。构造器循环等不能照搬这套办法。\n\n**举个例子：**\nA 对象先创建出来但还没填好属性，B 可以先获得 A 的早期引用；若创建 A 的构造器就必须先有完整 B，则会卡在更早的阶段。\n\n**深入补充（选读）：**\n常见单例属性注入循环可通过提前暴露引用处理：一级保存完整单例，二级保存早期引用，三级保存生成早期引用的工厂，以便和代理创建协作。它不是“所有循环都能解决”：构造器循环、prototype 循环通常不行。现代 Boot 默认不鼓励并限制循环引用，应优先拆职责和依赖。\n\n**追问 / 易错点：** 三级缓存的价值只是少放一个对象吗？重点是按需要获得早期引用并协调代理一致性。\n\n**原始资料核对 / 延伸查阅：** [S01 · Spring：Dependency Injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html)。",
      "sourceIds": [
        "N025",
        "N029",
        "N050"
      ],
      "keywords": [
        "Q05-010",
        "Spring / Spring Boot",
        "大疆",
        "熙牛医疗",
        "小米"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-011",
      "number": "Q05-011",
      "question": "AOP 用来解决什么问题？有哪些通知？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nAOP 是把多个业务方法都需要的公共处理抽出来，例如日志、权限和事务。通知分前置、返回后、异常后、最终后置和环绕。环绕通知可以在调用前后做处理，并通过 proceed 执行原方法。\n\n**举个例子：**\n统计接口耗时不必在每个 Service 手写开始结束计时，可以用匹配这些方法的切面统一处理。\n\n**深入补充（选读）：**\nAOP 把日志、权限、事务等横切逻辑从业务中抽出，围绕匹配方法执行增强。常见通知包括前置、后置返回、异常后、最终后置和环绕；环绕可决定是否及何时 proceed。切面顺序会影响事务、日志与异常处理，应明确 order，避免业务行为隐藏在过宽切点里。\n\n**追问 / 易错点：** 为什么切面里捕获所有异常并返回 null 危险？可能吞掉失败，影响事务回滚和调用方判断。",
      "sourceIds": [
        "N012",
        "N033",
        "N050",
        "N054",
        "N055",
        "NI010",
        "NI020"
      ],
      "keywords": [
        "Q05-011",
        "Spring / Spring Boot",
        "XTransfer",
        "同程",
        "小米",
        "货拉拉",
        "网易",
        "拼多多",
        "新蛋"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-012",
      "number": "Q05-012",
      "question": "Spring AOP 代理有哪些限制？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSpring AOP 的关键限制是“调用必须经过代理”。同一个对象内部 this 调另一个方法，通常绕过代理。类代理还不能通过重写增强 final/private 方法。需要让内部调用生效时，优先拆到另一个 Bean，再从代理调用。\n\n**深入补充（选读）：**\nJDK 代理围绕接口，类代理通过子类增强；final/private 等不能按常规子类重写方式拦截。核心限制是必须经过代理，自调用通常绕过拦截。Boot 与原生 Spring 的代理默认配置可能不同，不应脱离环境说“一定用 JDK”或“一定用 CGLIB”。\n\n**追问 / 易错点：** 怎样解决自调用？优先拆到另一个 Bean 由外部调用，或采用适合的编程式机制。\n\n**原始资料核对 / 延伸查阅：** [S02 · Spring：Proxying Mechanisms](https://docs.spring.io/spring-framework/reference/core/aop/proxying.html)。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q05-012",
        "Spring / Spring Boot",
        "得物"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-013",
      "number": "Q05-013",
      "question": "@Transactional 是怎样实现的？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n@Transactional 通常由代理实现：进入方法前开启或加入事务，方法成功后提交，出现符合规则的异常时回滚，最后清理资源。它管理的是指定数据库等资源，不能自动撤销远程接口、Redis 或已经发出的短信。\n\n**举个例子：**\n一个事务里写订单和扣本库库存，可以一起回滚；中间已经调用第三方发出的消息，不会随着数据库回滚自动收回。\n\n**深入补充（选读）：**\n代理拦截方法，根据事务属性通过事务管理器获取或加入事务，把数据库连接等资源与当前执行上下文关联，正常完成提交，异常时按回滚规则处理，最后释放资源。它管理的是具体资源事务，不能自动把所有远程调用和 Redis 操作一起回滚。\n\n**追问 / 易错点：** 为什么 private 内部方法加注解没有效果？常规代理调用路径拦截不到它。\n\n**原始资料核对 / 延伸查阅：** [S03 · Spring：Using @Transactional](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)。\n\n**原章示例（移至对应题目）：**\n```java\n@Service\nclass OrderService {\n    private final OrderMapper mapper;\n    OrderService(OrderMapper mapper) { this.mapper = mapper; }\n\n    @Transactional(rollbackFor = Exception.class)\n    public void createOrder(CreateOrderCommand cmd) {\n        // request_id上有数据库唯一约束；重复冲突由外层按已有状态返回结果。\n        mapper.insertOrder(cmd);\n        int changed = mapper.decreaseStockIfEnough(cmd.productId(), cmd.quantity());\n        if (changed != 1) throw new IllegalStateException(\"库存不足\");\n        mapper.insertOutbox(cmd); // 与订单在同库、同事务中写入\n    }\n}\n```\n\n这是**结构示例**，`OrderMapper`、命令对象和数据源需由项目实现；`cmd.productId()` 等用访问器表达，不限定必须采用record。还要校验数量为正、租户/产品归属和同一幂等键的参数摘要。只有外部通过代理调用，且Mapper确实参与同一事务，上述边界才成立。\n\n重复请求不能在同一个已被标记失败的事务里随意继续提交。可靠投递器与消费者也必须另做确认、重试和幂等。",
      "sourceIds": [
        "N014",
        "N025",
        "N043",
        "N051"
      ],
      "keywords": [
        "Q05-013",
        "Spring / Spring Boot",
        "百度",
        "大疆",
        "同程",
        "京东"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-014",
      "number": "Q05-014",
      "question": "@Transactional 为什么没有生效，或者生效了却没有回滚？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n事务不生效，先查四件事：对象是不是 Spring 管的、调用有没有经过代理、异常有没有触发回滚、数据库操作是不是同一事务资源。常见问题是自己 new、同类自调用、吞异常、跨线程或事务管理器选错。\n\n**举个例子：**\n不能只检查注解在不在。注解写对了，但方法由 this 调用、没有进入事务代理，也可能没开启事务。\n\n**深入补充（选读）：**\n对象不是容器管理、同类自调用、方法无法被对应代理拦截、异常被吞掉、异常不满足回滚规则、选错事务管理器、跨线程使用或数据库引擎不支持事务。不要简单说“非 public 永远失效”：Spring 6 类代理可支持 protected/包可见事务方法，接口代理仍有公共接口要求。\n\n**追问 / 易错点：** 最先怎么排查？确认调用对象是代理、调用确实穿过代理、连接属于预期事务资源。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [S03 · Spring：Using @Transactional](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)。",
      "sourceIds": [
        "N009",
        "N025",
        "X06",
        "NI024"
      ],
      "keywords": [
        "Q05-014",
        "Spring / Spring Boot",
        "京东",
        "大疆",
        "好未来",
        "即时设计"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-015",
      "number": "Q05-015",
      "question": "Spring 默认哪些异常回滚？checked 异常怎么办？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n默认情况下，Spring 通常对 RuntimeException 和 Error 回滚，对受检异常不自动回滚；需要时配置 rollbackFor。如果方法内部 catch 后正常返回，代理可能认为执行成功。要么正确抛出异常，要么明确标记回滚。\n\n**举个例子：**\n@Transactional(rollbackFor = Exception.class) 也不能弥补“异常已经被方法内部吞掉”或“根本没经过代理”。\n\n**深入补充（选读）：**\n常见默认规则对 RuntimeException 和 Error 回滚，受检异常通常不自动回滚；可用 rollbackFor 明确业务需要，新版本还可能配置全局规则。若在方法内部捕获异常后正常返回，代理可能看不到失败。不要一律把所有异常吞掉再期待框架回滚。\n\n**追问 / 易错点：** 配置 rollbackFor=Exception.class 是否等于失败一定回滚？还需注解生效、异常传播或显式标记 rollback-only。\n\n**原始资料核对 / 延伸查阅：** [S03 · Spring：Using @Transactional](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-015",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-016",
      "number": "Q05-016",
      "question": "七种事务传播行为是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n七种传播行为按“有没有外层事务”记：REQUIRED 有则加入、无则新建；REQUIRES_NEW 总是独立新建；SUPPORTS 有就用、无就不用；NOT_SUPPORTED 暂停外层后不用；MANDATORY 必须有；NEVER 必须没有；NESTED 通常用保存点局部回滚。\n\n**举个例子：**\n日常业务最常用 REQUIRED。要让内层结果独立提交，才考虑 REQUIRES_NEW，并评估额外连接开销。\n\n**深入补充（选读）：**\nREQUIRED 有则加入、无则新建；REQUIRES_NEW 挂起外层并独立新建；SUPPORTS 有则加入、无则非事务；NOT_SUPPORTED 挂起并非事务执行；MANDATORY 要求已有事务；NEVER 要求没有事务；NESTED 通常借保存点形成嵌套范围，支持程度取决于事务管理器和资源。\n\n**追问 / 易错点：** 最常用的是哪个？REQUIRED，其他应根据独立提交或局部回滚需求选择。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [S04 · Spring：Transaction Propagation](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html)。",
      "sourceIds": [
        "N051",
        "X06"
      ],
      "keywords": [
        "Q05-016",
        "Spring / Spring Boot",
        "京东",
        "好未来"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-017",
      "number": "Q05-017",
      "question": "REQUIRES_NEW 与 NESTED 有什么差别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nREQUIRES_NEW 是另一笔独立事务，内层提交后，外层回滚不会自动撤销它。NESTED 通常仍是一笔物理事务，只是设保存点，内层可退到保存点，外层整体回滚仍会全部撤销。\n\n**举个例子：**\n独立审计日志和主业务可考虑两笔事务；一个大事务里允许某一步失败后恢复到之前位置，则是保存点思路。\n\n**深入补充（选读）：**\nREQUIRES_NEW 使用独立物理事务，内层提交不随外层回滚自动撤销，且外层连接挂起时可能还要另取连接。NESTED 通常仍属于同一物理事务，用保存点局部回滚，外层最终回滚会影响整体。不能把它们都叫“开个小事务”而忽略连接和提交边界。\n\n**追问 / 易错点：** 为什么 REQUIRES_NEW 会耗尽连接池？大量外层持有连接又等待内层新连接，可能形成资源僵局。\n\n**原始资料核对 / 延伸查阅：** [S04 · Spring：Transaction Propagation](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-017",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-018",
      "number": "Q05-018",
      "question": "外层已经 catch 住异常，为什么还会出现 UnexpectedRollbackException？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n外层和内层使用 REQUIRED 时，可能共用同一事务。内层失败把事务标成“只能回滚”，外层即使 catch 后继续，最后提交仍会失败并抛 UnexpectedRollbackException。catch 异常不会自动清除回滚标记。\n\n**举个例子：**\n像整张订单已经盖上“作废”章，后面继续填写，也不能把它当有效订单提交。\n\n**深入补充（选读）：**\n内层 REQUIRED 参与外层事务，异常或显式操作将共享事务标记为 rollback-only。外层即使捕获异常继续运行，最终尝试提交时仍可能抛 UnexpectedRollbackException，表明实际只能回滚。修复需重新设计事务边界，不能只继续 catch 或禁用异常。\n\n**追问 / 易错点：** 想让审计日志独立落库怎么办？按需求独立事务或可靠事件，但说明一致性与连接成本。\n\n**原始资料核对 / 延伸查阅：** [S04 · Spring：Transaction Propagation](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-018",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-019",
      "number": "Q05-019",
      "question": "事务隔离级别和 readOnly 应怎么理解？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n隔离级别主要由数据库执行，Spring 在创建事务时传递相应设置；加入旧事务时不能想当然地重新指定一套。readOnly 主要是提示或优化配置，不是可靠的写权限控制。跨线程也不会自动继承 JDBC 事务。\n\n**深入补充（选读）：**\n隔离级别主要由数据库执行，Spring 可在新建事务时请求对应级别，加入已有事务时并非总能重新定义。readOnly 多是给事务管理器、驱动或数据库的提示/优化配置，不应当作任何环境下禁止写入的安全机制。业务只读权限要由数据库账号等保障。\n\n**追问 / 易错点：** 事务方法里新开线程能继承 JDBC 事务吗？通常不能，资源常绑定当前线程。\n\n**原始资料核对 / 延伸查阅：** [S03 · Spring：Using @Transactional](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-019",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-020",
      "number": "Q05-020",
      "question": "事务提交后发消息该怎么设计？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n数据库提交和发消息是两件事，先后顺序都有失败窗口。可靠做法之一是 Outbox：在同一事务里写业务记录和待发消息，再由后台投递并重试。提交后监听避免了提前发送，但不自动保证宕机后消息不丢。\n\n**举个例子：**\n数据库已提交，进程却在发消息前崩溃，普通内存事件就丢了；Outbox 记录还在，重启后还能补发。\n\n**深入补充（选读）：**\n直接在事务里发消息可能出现消息已发但数据库回滚；仅使用提交后回调，也有提交成功后进程崩溃而消息未发的窗口。可靠方案常用同一数据库事务写业务表与 Outbox，后台投递、确认和重试。提交后监听适合允许较弱可靠性或另有补偿的场景。\n\n**追问 / 易错点：** @TransactionalEventListener 自动等于可靠 MQ 吗？不是，普通进程内事件没有持久化交付保证。",
      "sourceIds": [
        "NI024"
      ],
      "keywords": [
        "Q05-020",
        "Spring / Spring Boot",
        "即时设计"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-021",
      "number": "Q05-021",
      "question": "Spring MVC 一次请求经过哪些组件？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n一次 MVC 请求的主线是：Filter→DispatcherServlet→找到处理方法→解析参数并调用 Controller→处理返回值或异常→写回响应。REST 接口通常由消息转换器把对象转成 JSON；拦截器位于 MVC 处理链内。\n\n**深入补充（选读）：**\n请求先过 Servlet Filter 等入口，再由 DispatcherServlet 查 HandlerMapping，找到 HandlerAdapter 调用控制器，期间完成参数解析、校验等。返回值交给相应处理器，REST 常由 HttpMessageConverter 序列化；异常可由异常解析器或 ControllerAdvice 处理，随后返回客户端。\n\n**追问 / 易错点：** Interceptor 和 Filter 哪个更靠前？Filter 在 Servlet 层，Interceptor 位于 MVC 处理链。",
      "sourceIds": [],
      "keywords": [
        "Q05-021",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-022",
      "number": "Q05-022",
      "question": "Filter、Interceptor、AOP 各适合什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nFilter 在 Servlet 层，适合通用 HTTP 处理；Interceptor 在 Spring MVC 里，能知道将执行哪个 handler；AOP 围绕代理方法工作，适合业务层公共逻辑。三者拦截位置不同，不是换个名字做同一件事。\n\n**举个例子：**\n请求编码可放 Filter；Controller 级处理可用 Interceptor；Service 耗时统计可用 AOP。完整鉴权还需覆盖所有入口。\n\n**深入补充（选读）：**\nFilter 适合通用 HTTP 处理，如编码和底层请求包装；Interceptor 了解 MVC handler，适合请求级拦截；AOP 作用于代理方法，适合服务层横切逻辑。认证授权优先使用成熟安全框架，不能只靠前端隐藏按钮或某一个控制器拦截器覆盖全部入口。\n\n**追问 / 易错点：** 异步请求、错误分派会重复经过过滤器吗？取决于注册和 dispatcher 配置，日志与清理逻辑要考虑。",
      "sourceIds": [],
      "keywords": [
        "Q05-022",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-023",
      "number": "Q05-023",
      "question": "@RequestParam、@PathVariable、@RequestBody 的区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n@RequestParam 取查询或表单参数，@PathVariable 取 URL 路径里的变量，@RequestBody 读取请求体，例如 JSON。前后端要约定字段、数据格式和 Content-Type，不要只看参数名字一样就认为能绑定。\n\n**举个例子：**\n/users/123 中的 123 用 PathVariable；?page=1 用 RequestParam；请求体 {\"name\":\"张三\"} 通常用 RequestBody 绑定 DTO。\n\n**深入补充（选读）：**\nRequestParam 绑定查询或表单参数，PathVariable 绑定路径变量，RequestBody 通过消息转换器解析请求体。JSON 请求需要正确 Content-Type；同一个请求体不能随意按多个独立对象重复消费。DTO 做边界校验，避免把数据库实体直接作为可任意赋值的入参。\n\n**追问 / 易错点：** HTTP 400、415 常分别查哪里？参数格式/校验失败，以及媒体类型或转换器不匹配。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q05-023",
        "Spring / Spring Boot",
        "招银网络科技"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-024",
      "number": "Q05-024",
      "question": "参数校验与统一异常处理怎么做？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先在 DTO 上声明参数约束，用 @Valid/@Validated 等触发校验；再用 @RestControllerAdvice 把异常统一转换成错误码、提示和合适 HTTP 状态。详细堆栈留在后端，用 traceId 关联，不直接暴露给用户。\n\n**深入补充（选读）：**\nDTO 用 Bean Validation 声明约束，配合 @Valid/@Validated 在支持的入口触发校验，嵌套对象需要级联校验。ControllerAdvice 将异常映射为稳定错误码和合适状态码，详细栈保留在服务端并关联 traceId。业务冲突和系统故障应区分，不把所有错误返回 HTTP 200。\n\n**追问 / 易错点：** 分组校验有什么用？新增和修改等场景对字段要求不同。",
      "sourceIds": [],
      "keywords": [
        "Q05-024",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-025",
      "number": "Q05-025",
      "question": "Spring Boot 自动配置原理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n自动配置就是 Spring Boot 根据“引了哪些依赖、配了哪些属性、有没有自定义 Bean”来决定装配哪些默认组件。它先发现候选配置，再按条件筛选。用户自定义 Bean 后，很多默认配置会通过条件判断主动让位。\n\n**举个例子：**\n引入数据库相关依赖并配置连接信息，Boot 才有条件装配对应组件；不是看到任何 jar 都无条件创建所有对象。\n\n**深入补充（选读）：**\n启动时从约定元数据发现自动配置候选，结合类路径、属性、已有 Bean 等条件决定是否生效，再注册默认基础设施。它是条件装配，不是扫描所有 jar 后随意 new。较新 Boot 使用 AutoConfiguration.imports 注册自动配置，旧资料的 spring.factories 机制要标版本。\n\n**追问 / 易错点：** 为什么自己定义 Bean 能替换默认配置？常见自动配置使用 ConditionalOnMissingBean 让位。\n\n**原始资料核对 / 延伸查阅：** [S05 · Spring Boot：Creating Your Own Auto-configuration](https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html)。",
      "sourceIds": [
        "N022",
        "N032",
        "N054"
      ],
      "keywords": [
        "Q05-025",
        "Spring / Spring Boot",
        "BIGO",
        "招银云创",
        "货拉拉"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-026",
      "number": "Q05-026",
      "question": "@SpringBootApplication 包含什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n@SpringBootApplication 主要组合三个注解：SpringBootConfiguration 声明配置类，EnableAutoConfiguration 开启自动配置，ComponentScan 扫描组件。启动类放的位置决定默认扫描范围，通常放在业务包的上层。\n\n**深入补充（选读）：**\n它组合 SpringBootConfiguration、EnableAutoConfiguration 和 ComponentScan，分别涉及配置类、自动配置入口和组件扫描。主类包位置影响默认扫描范围，把主类放在合理根包可减少遗漏；过宽扫描可能引入不需要的组件或名称冲突。\n\n**追问 / 易错点：** 启动类外包的 Service 没注入先查什么？包扫描边界、条件配置和组件注册。",
      "sourceIds": [
        "N056"
      ],
      "keywords": [
        "Q05-026",
        "Spring / Spring Boot",
        "阿里"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-027",
      "number": "Q05-027",
      "question": "自定义 Starter 怎么设计？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nStarter 的目标是让别人“引依赖、写少量配置就能用”。通常先定义配置属性和自动配置，再按条件注册默认 Bean，通过对应版本的元数据文件声明自动配置。必须允许用户覆盖默认值，并测试开关和依赖缺失场景。\n\n**深入补充（选读）：**\n把自动配置与依赖聚合分清：定义配置属性、基于条件注册默认 Bean，并通过对应版本要求的元数据声明自动配置。提供合理默认值、允许用户覆盖，避免无条件扫描用户包或执行外部副作用。测试有依赖/无依赖、开启/关闭、自定义覆盖等关键装配情形。\n\n**追问 / 易错点：** Starter 本质上是什么？便捷依赖入口加相应自动配置约定，并非新容器。\n\n**原始资料核对 / 延伸查阅：** [S05 · Spring Boot：Creating Your Own Auto-configuration](https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html)。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q05-027",
        "Spring / Spring Boot",
        "阿里"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-028",
      "number": "Q05-028",
      "question": "Boot 启动流程怎么概括？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBoot 启动先准备环境和配置，再创建、刷新 ApplicationContext，完成 Bean 装配和初始化；Web 应用同时按生命周期启动内嵌服务器，之后执行 Runner 等回调。记住主线：配置→容器→Bean→服务就绪。\n\n**深入补充（选读）：**\nSpringApplication 准备环境、创建应用上下文、加载配置定义并刷新上下文，期间完成自动配置和 Bean 初始化，Web 应用启动嵌入式服务器，之后执行相关 Runner 并发布生命周期事件。精确顺序随版本和应用类型不同，回答时应把握环境、容器、Bean、服务器和回调的关系。\n\n**追问 / 易错点：** 初始化数据库数据适合放构造器吗？通常不合适，应使用受控初始化或迁移机制。",
      "sourceIds": [
        "NI017"
      ],
      "keywords": [
        "Q05-028",
        "Spring / Spring Boot",
        "深轻科技"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-029",
      "number": "Q05-029",
      "question": "配置改了为什么没生效？如何检查覆盖顺序、绑定和刷新？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n配置是否生效，要看应用最终读到哪个值，不只看仓库里的 yaml。结构化配置用 ConfigurationProperties 绑定并校验。修改文件不等于已创建的连接池或 Bean 自动更新，热更新需要组件支持和明确刷新策略。\n\n**深入补充（选读）：**\n外部配置按明确优先级覆盖，排错时看实际 PropertySource 和最终绑定值，不只看仓库里的 yaml。ConfigurationProperties 适合结构化配置并配合校验。热更新不等于所有已创建对象自动重建，连接池等组件需要显式变更策略；敏感值不应写入日志。\n\n**追问 / 易错点：** 改了配置文件但 Bean 行为没变为什么？对象可能启动时只读取一次且无刷新机制。",
      "sourceIds": [],
      "keywords": [
        "Q05-029",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-030",
      "number": "Q05-030",
      "question": "@Async、@Scheduled 的常见坑？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n@Async 通常通过代理交给执行器，所以自调用可能无效，异常和上下文要另外处理。@Scheduled 在多实例部署时，可能每个实例都执行。定时任务要考虑重复、超时和幂等，单机 synchronized 不能锁住整个集群。\n\n**深入补充（选读）：**\nAsync 常通过代理切换执行器，自调用可能无效，返回 void 的异常需配置处理器；原线程事务和 ThreadLocal 通常不会自动传播。Scheduled 在多实例部署时可能每个实例都执行，需要任务分片、租约或分布式调度。任务还要处理重入、超时、幂等和停机。\n\n**追问 / 易错点：** 定时任务加 synchronized 能防集群重复执行吗？只能约束一个 JVM 的对应锁对象。",
      "sourceIds": [],
      "keywords": [
        "Q05-030",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-031",
      "number": "Q05-031",
      "question": "MyBatis 的 Mapper 接口为什么不用手写实现？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nMyBatis 会给 Mapper 接口创建代理，把“调用 Java 方法”转换成“执行映射 SQL 并封装结果”，所以不必手写实现类。数据值用 #{} 绑定；${} 是直接拼接，动态列名等位置必须用服务端白名单控制。\n\n**深入补充（选读）：**\nMyBatis 为 Mapper 创建代理，把方法调用映射到 MappedStatement，执行参数处理、SQL、结果映射等。SqlSession 与 Executor 管理会话和执行过程。#{x} 常走预编译占位参数，${x} 直接拼接，动态排序列等无法参数绑定的部分必须白名单校验。\n\n**追问 / 易错点：** 为什么不能用 ${userInput} 拼 where 值？容易产生 SQL 注入和语义错误。\n\n**原始资料核对 / 延伸查阅：** [S06 · MyBatis：Mapper XML Files](https://mybatis.org/mybatis-3/sqlmap-xml.html)。",
      "sourceIds": [
        "N009",
        "N049",
        "NI013"
      ],
      "keywords": [
        "Q05-031",
        "Spring / Spring Boot",
        "京东",
        "熙牛医疗",
        "腾讯"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-032",
      "number": "Q05-032",
      "question": "MyBatis 一级、二级缓存是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n一级缓存通常属于 SqlSession，二级缓存通常按 Mapper namespace 共享，需要相应配置。更新、提交和会话生命周期会影响缓存行为。缓存不能脱离 Spring 的会话管理来理解，也不能直接当成跨服务 Redis 的替代品。\n\n**深入补充（选读）：**\n一级缓存与 SqlSession 生命周期和配置相关，重复查询可能复用结果，写入等操作会触发失效；二级缓存通常在 Mapper namespace 级别，需要显式启用并注意提交、跨 namespace 更新和对象共享。实际 Web 项目还受 Spring 会话管理影响，不能假设每个请求必享有长生命周期缓存。\n\n**追问 / 易错点：** 二级缓存能代替 Redis 吗？通常不能，两者范围、共享能力与失效治理不同。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [S06 · MyBatis：Mapper XML Files](https://mybatis.org/mybatis-3/sqlmap-xml.html)。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q05-032",
        "Spring / Spring Boot",
        "腾讯"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-033",
      "number": "Q05-033",
      "question": "MyBatis 插件能做什么？分页和 N+1 查询怎样优化？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nN+1 是先查一次列表，再对每条记录各查一次关联数据，N 条就多 N 次 SQL。可改成批量查、合理 join 或批量映射。分页要让数据库只取需要的一页，不能先查全量，再在 Java 内存截取。\n\n**举个例子：**\n查 100 个订单后逐个查客户，会执行约 101 次 SQL；先收集客户 ID，一次批量查，再组装结果，通常能明显减少往返。\n\n**深入补充（选读）：**\n插件拦截有限的核心接口方法，适合分页、审计等，但要考虑执行顺序和版本兼容。分页应落到数据库 LIMIT 等语句，避免内存全量截断。N+1 是一次查列表又逐条查关联数据，可用批量查、合理 join 或批量映射优化，兼顾行数膨胀和分页语义。\n\n**追问 / 易错点：** 为什么一个接口 SQL 很快整体却慢？可能执行了成百上千次小查询。\n\n**原始资料核对 / 延伸查阅：** [S06 · MyBatis：Mapper XML Files](https://mybatis.org/mybatis-3/sqlmap-xml.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-033",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-034",
      "number": "Q05-034",
      "question": "连接池解决什么？为什么连接池满了不能只加容量？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n连接池复用数据库连接，也限制同时打到数据库的请求数。池满可能因为慢 SQL、长事务、连接没归还或流量过大。先看连接被谁占着，再决定是否扩容，盲目加连接可能让数据库更慢。\n\n**举个例子：**\n获取连接超时是“还没轮到你”；SQL 执行超时是“拿到连接后办事太慢”，排查方向不同。\n\n**深入补充（选读）：**\n连接池复用连接并限制对数据库并发访问，常配置最大池大小、获取等待和连接生命周期。耗尽可能由慢 SQL、长事务、连接泄漏或突发流量引起。先看活跃/等待连接、SQL 耗时和事务持有时间，再修根因；扩大池可能让数据库更拥挤。\n\n**追问 / 易错点：** 连接获取超时和 SQL 执行超时一样吗？前者还没拿到连接，后者已有连接正在执行或等待。",
      "sourceIds": [],
      "keywords": [
        "Q05-034",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-035",
      "number": "Q05-035",
      "question": "Spring Boot 2 与 3 迁移重点是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBoot 3 迁移重点是 Java 17 基线、Spring Framework 6，以及相关 Java EE API 从 javax 迁到 jakarta。还要检查第三方依赖、自动配置注册和废弃接口。不是全局替换包名就完成，必须跑业务和集成测试。\n\n**深入补充（选读）：**\nBoot 3 基于 Spring Framework 6，Java 最低基线为17，并涉及 javax 到 jakarta 的相关 API 迁移。需检查依赖兼容、Servlet/校验/JPA 包、自动配置注册以及已废弃接口。不能把包名全局替换就宣称迁移完成；业务、序列化和集成路径都需验证。\n\n**追问 / 易错点：** 学哪个版本准备面试？先讲共同原理，再按目标项目实际版本说明差异；不必假装所有公司已升级。\n\n**原始资料核对 / 延伸查阅：** [S07 · Spring Boot 3.0 Getting Started](https://docs.spring.io/spring-boot/docs/3.0.0/reference/html/getting-started.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-035",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-036",
      "number": "Q05-036",
      "question": "Maven 依赖冲突怎么定位和处理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n先用 mvn dependency:tree 找出冲突依赖从哪里引入，再用 dependencyManagement/BOM 统一版本，必要时排除多余传递依赖。要保证编译和运行时版本一致，不要随机换成最新版试运气。\n\n**举个例子：**\nNoSuchMethodError 常见于编译时有这个方法，运行时实际加载的旧 jar 却没有它。\n\n**深入补充（选读）：**\n使用 dependency:tree 找同一依赖不同版本的引入路径，理解直接声明、依赖管理和传递依赖的版本选择规则。dependencyManagement/BOM用于集中约束版本，但不会仅因声明就自动添加所有依赖；必要时排除冲突传递依赖，再检查二进制兼容。不能随机改到最新版本就宣称问题解决。\n\n**追问 / 易错点：** NoSuchMethodError常意味着什么？编译时与运行时使用的类版本不一致等链接问题。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [S10 · Maven：Dependency Mechanism](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html)。",
      "sourceIds": [
        "X08"
      ],
      "keywords": [
        "Q05-036",
        "Spring / Spring Boot",
        "美团"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-037",
      "number": "Q05-037",
      "question": "Spring Cache 注解与 Redis 是什么关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSpring Cache 是统一的缓存接口和注解机制，Redis 只是可能的底层实现。@Cacheable 通常先查缓存，@CachePut 执行方法后更新，@CacheEvict 删除缓存。它不会自动解决数据库一致性，key 也必须带上必要的租户和参数维度。\n\n**深入补充（选读）：**\nSpring Cache 是缓存抽象，可由不同CacheManager连接本地或远程实现，注解本身不等于Redis。Cacheable常先查缓存，CachePut执行方法后更新，CacheEvict负责失效；默认代理模式也有自调用限制。缓存键必须包含影响结果的用户/租户/参数维度，并考虑事务提交与失效顺序。\n\n**追问 / 易错点：** 给方法加缓存注解会自动解决数据库一致性吗？不会，仍需设计TTL、失效和故障窗口。\n\n**原始资料核对 / 延伸查阅：** [S08 · Spring：Annotation-based Caching](https://docs.spring.io/spring-framework/reference/integration/cache/annotations.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-037",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-038",
      "number": "Q05-038",
      "question": "Spring 事件是同步还是异步？可靠性怎样？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSpring 的普通事件监听通常在发布线程同步执行；要异步，需要显式配置。进程内事件不等于可靠 MQ：没有天然持久化、宕机补发和跨实例交付。需要可靠业务联动时，还要 Outbox、消息系统或其他补偿机制。\n\n**深入补充（选读）：**\n普通事件监听常在发布线程同步执行，异步需显式配置执行器或相关注解。同步监听抛异常可能影响发布者，异步监听需要单独错误处理；事务监听可绑定提交等阶段。进程内事件默认没有持久化、跨实例交付和宕机重放保证，不能当成可靠MQ使用。\n\n**追问 / 易错点：** 事件监听里执行很慢会怎样？同步模式会延长调用链，异步模式可能积压执行器。",
      "sourceIds": [],
      "keywords": [
        "Q05-038",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-039",
      "number": "Q05-039",
      "question": "MVC 与 WebFlux 的区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nMVC 常用请求线程和同步写法，WebFlux 强调响应式和非阻塞处理。WebFlux 的事件循环不适合直接跑阻塞 JDBC 或长计算，否则同一循环上的其他请求也会被拖慢。选型看依赖链和瓶颈，不是换框架就一定提速。\n\n**深入补充（选读）：**\nMVC 常使用Servlet请求线程与同步风格，WebFlux采用响应式处理和非阻塞能力，适合配套非阻塞依赖与流式背压场景。把JDBC阻塞调用直接放事件循环会削弱收益，需要隔离或使用匹配驱动。响应式不是所有业务性能更好，也增加调试和上下文管理复杂度。\n\n**追问 / 易错点：** 已有阻塞数据库项目是否必须改WebFlux？先测实际瓶颈与改造收益。",
      "sourceIds": [],
      "keywords": [
        "Q05-039",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q05-040",
      "number": "Q05-040",
      "question": "Actuator、健康检查和优雅停机怎么用？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nActuator 提供健康状态和运行指标。存活检查问“进程是否需要重启”，就绪检查问“现在是否适合接流量”。优雅停机先摘流量，再等已有请求完成，最后关资源。管理端点还要控制暴露范围和权限。\n\n**举个例子：**\n数据库短暂不可用时，服务可能暂时不适合接流量，但不一定该让所有实例反复重启。\n\n**深入补充（选读）：**\nActuator提供运行状态与指标等能力；存活检查判断进程是否需重启，就绪检查判断是否能接业务流量，两者不能混用。下线先摘流量、等待在途请求与任务，再关闭资源。管理端点应限制暴露和访问权限，避免泄露配置或可操作能力。\n\n**追问 / 易错点：** 数据库短暂异常就让存活检查失败合理吗？可能造成集群重启风暴，应按故障恢复语义设计。\n\n**原始资料核对 / 延伸查阅：** [S09 · Spring Boot：Actuator Endpoints](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html)。",
      "sourceIds": [],
      "keywords": [
        "Q05-040",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md"
    },
    {
      "id": "bank-Q06-001",
      "number": "Q06-001",
      "question": "一条 SELECT 的执行流程？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n一条 SELECT 大致经历：连接认证→解析 SQL→优化器选执行计划→执行器调用存储引擎取数据→返回结果。接口慢还可能慢在获取连接、网络传输和序列化。MySQL 8 已没有旧的查询缓存步骤。\n\n**深入补充（选读）：**\n客户端建立连接并认证后，服务器解析 SQL、处理名称与权限、优化执行计划，再由执行器通过存储引擎访问数据并返回。实际耗时也可能在连接获取、网络传输和结果序列化，不能只看 SQL 执行。MySQL 8 已移除历史查询缓存，不要把旧架构图里的查询缓存当现行必经步骤。\n\n**追问 / 易错点：** 优化器负责什么？比较候选访问路径、索引和连接顺序等，选择估算成本较低的计划。",
      "sourceIds": [],
      "keywords": [
        "Q06-001",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-002",
      "number": "Q06-002",
      "question": "InnoDB 与 MyISAM 的区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nInnoDB 支持事务、MVCC、行级锁和崩溃恢复，适合常见业务系统；MyISAM 是较老的引擎，主要用表级锁，不提供同样的事务保障。讨论 MySQL 的锁和事务前，要先确认表使用什么引擎。\n\n**深入补充（选读）：**\nInnoDB 支持事务、崩溃恢复、MVCC 和行级锁等，适合大多数事务业务；MyISAM 是历史常见引擎，主要表级锁，不提供同样的事务保障。不能仅凭历史 count(*) 快等局部特点选引擎。面试场景若未说明，通常先确认使用 InnoDB 再讨论锁和隔离。\n\n**追问 / 易错点：** “MySQL 支持事务”需要补充什么？具体表的存储引擎和事务配置。",
      "sourceIds": [
        "N021",
        "N053",
        "NI001"
      ],
      "keywords": [
        "Q06-002",
        "MySQL",
        "快手",
        "小鹅通",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-003",
      "number": "Q06-003",
      "question": "索引是什么？什么时候反而不划算？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n索引就像书的目录，帮助数据库少扫描一些数据。但目录本身占空间，每次新增、删除、修改相关字段也要维护。索引不是越多越好；查询要返回大部分行时，直接扫描全表可能更划算。\n\n**举个例子：**\n按订单号查一条记录，索引很有用；把几乎所有订单都读出来，走索引再大量回表未必更快。\n\n**深入补充（选读）：**\n索引维护一种额外的有序或特定检索结构，加快符合条件的数据定位、排序或覆盖读取。代价是占空间并增加写入、更新和维护成本。低选择性条件、返回表中大部分行或表很小时，全表扫描可能更便宜，优化器没有选索引不一定是故障。\n\n**追问 / 易错点：** 为什么不把所有列都加索引？写放大与存储开销增加，且很多索引没有实际收益。",
      "sourceIds": [
        "N015",
        "N021",
        "N033",
        "N047",
        "N049",
        "NI016"
      ],
      "keywords": [
        "Q06-003",
        "MySQL",
        "拼多多",
        "快手",
        "同程",
        "网易",
        "熙牛医疗",
        "滴滴"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-004",
      "number": "Q06-004",
      "question": "InnoDB 为什么常用 B+ 树？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nB+ 树一个节点能放很多键，所以树比较矮，查数据通常只需访问少量页；叶子按顺序连接，适合范围查询和排序。相比二叉树，它能减少页访问；相比哈希，它更擅长查区间。\n\n**举个例子：**\n查询价格在 100～200 的商品，找到起点后沿叶子向后扫描即可，不必挨个枚举所有可能价格。\n\n**深入补充（选读）：**\nB+ 树把更多键放在非叶节点，提高扇出、降低树高，适合按页读取。叶子包含记录或主键并按键有序相连，利于范围扫描；相比哈希适合排序和范围，相比普通二叉树通常更少页访问。不要断言所有高度和每页条数固定，实际取决于键宽、页大小和填充。\n\n**追问 / 易错点：** 为什么不用红黑树做磁盘主索引？扇出低，通常需要更多层随机页访问。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N001",
        "N004",
        "N012",
        "N024",
        "N025",
        "N042",
        "N054",
        "X04",
        "X08",
        "NI001",
        "NI003",
        "NI017",
        "NI021"
      ],
      "keywords": [
        "Q06-004",
        "MySQL",
        "阿里",
        "美团",
        "XTransfer",
        "BIGO",
        "大疆",
        "货拉拉",
        "综合",
        "招银网络科技",
        "深轻科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-005",
      "number": "Q06-005",
      "question": "聚簇索引和二级索引各存什么？什么情况下需要回表？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nInnoDB 主键通常组织聚簇索引，叶子保存整行；二级索引叶子主要保存索引列和主键。先查二级索引拿到主键，再去主键索引取其他字段，就是回表。主键越长，二级索引携带它的开销也越大。\n\n**举个例子：**\n用手机号索引查用户姓名：先找到手机号对应的 user_id，再按 user_id 找到整行取 name，这就是一次回表路径。\n\n**深入补充（选读）：**\nInnoDB 聚簇索引叶子保存整行，通常由主键组织；二级索引叶子保存索引列和主键值。若二级索引不包含所需字段，需要再按主键访问聚簇索引，即回表。没有显式主键时，InnoDB 会按规则选择唯一非空键或生成内部键。\n\n**追问 / 易错点：** 主键太长有什么影响？二级索引会携带更长主键，放大空间和缓存成本。\n\n**原始资料核对 / 延伸查阅：** [D05 · MySQL 8.4：Clustered and Secondary Indexes](https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html)。",
      "sourceIds": [
        "N013",
        "N036",
        "NI015",
        "NI018"
      ],
      "keywords": [
        "Q06-005",
        "MySQL",
        "百度",
        "腾讯",
        "实在智能"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-006",
      "number": "Q06-006",
      "question": "覆盖索引和索引下推有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n覆盖索引是“查询要的字段，索引里已经全有了，不必再取整行”；索引下推是“先在索引层筛掉不符合条件的记录，少去取整行”。一个减少取整行的必要性，一个减少取整行的次数。\n\n**举个例子：**\nExtra 中 Using index 常提示覆盖读取，Using index condition 才对应索引条件下推，不要把它们当成一回事。\n\n**深入补充（选读）：**\n覆盖索引是查询所需字段可由某个索引直接提供，从而减少回表。索引条件下推把能在索引层判断的条件交给引擎先过滤，减少不必要的行读取。二者不同：覆盖是“不必取整行”，下推是“先筛再少取整行”，是否启用取决于查询和引擎条件。\n\n**追问 / 易错点：** EXPLAIN 中 Using index 就是索引下推吗？不是，Using index condition 才是相关提示。\n\n**原始资料核对 / 延伸查阅：** [D05 · MySQL 8.4：Clustered and Secondary Indexes](https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html)。",
      "sourceIds": [
        "N012",
        "N036",
        "NI018"
      ],
      "keywords": [
        "Q06-006",
        "MySQL",
        "XTransfer",
        "腾讯",
        "实在智能"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-007",
      "number": "Q06-007",
      "question": "联合索引为什么强调最左前缀？WHERE 条件的书写顺序重要吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n联合索引 (a,b,c) 先按 a 排，同 a 再按 b，同 a、b 再按 c。所以按 a 或 a、b 查询更容易定位。WHERE 条件书写顺序不重要，索引列的排列顺序重要；没匹配最左前缀也不等于绝不访问索引。\n\n**举个例子：**\n像通讯录先按省、再按市、再按姓名排序。只给姓名，通常难直接定位连续范围；给省和市就容易得多。\n\n**深入补充（选读）：**\n索引 (a,b,c) 按 a 再 b 再 c 排序，连续前缀通常最利于定位范围。条件书写先后顺序不等于索引列顺序，优化器可调整；跳过首列通常难以按普通前缀精确定位，但覆盖扫描、skip scan 等可能仍用索引。不能把“未最左匹配”一律描述成完全不访问索引。\n\n**追问 / 易错点：** where b=? 一定全表扫吗？不一定，必须区分全索引扫描、特殊优化和真正高效范围定位。\n\n**原始资料核对 / 延伸查阅：** [D06 · MySQL 8.4：Multiple-Column Indexes](https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html)。",
      "sourceIds": [
        "N018",
        "N023",
        "N026",
        "N039",
        "NI001"
      ],
      "keywords": [
        "Q06-007",
        "MySQL",
        "携程",
        "BIGO",
        "顺丰",
        "京东",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-008",
      "number": "Q06-008",
      "question": "联合索引遇到范围条件后，后面的列就完全没用了吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n范围条件之后的列，通常难继续缩小连续扫描范围，但仍可能用于索引内过滤或覆盖读取。所以不要背“范围后面的索引全失效”，应说“连续定位能力受影响，后续列是否还能发挥作用要看计划”。\n\n**举个例子：**\n索引 (a,b,c)，条件 a=1 AND b>10 AND c=3：a、b 定位范围，c 仍可能先在索引里过滤。\n\n**深入补充（选读）：**\n范围条件常限制后续列进一步缩小索引扫描区间的能力，但后续列仍可能参与索引条件过滤、覆盖或某些边界构造。不同操作符和优化器策略也有差异。回答应说“主要影响连续定位能力”，再用具体 SQL 的 key、rows、Extra 验证，不能机械背范围之后全部失效。\n\n**追问 / 易错点：** a=? and b>? and c=? 在 (a,b,c) 上怎么分析？先看 a/b 的范围，再看 c 是否下推或覆盖。\n\n**原始资料核对 / 延伸查阅：** [D06 · MySQL 8.4：Multiple-Column Indexes](https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html)。",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q06-008",
        "MySQL",
        "腾讯"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-009",
      "number": "Q06-009",
      "question": "哪些写法容易妨碍索引使用？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n对索引列做函数或不合适的类型转换、LIKE 前面加通配符、一次取太多数据，都可能让索引难以高效定位。先改成可搜索的条件，再用 EXPLAIN 验证。OR、!=、IS NULL 不能一概判定为索引失效。\n\n**举个例子：**\nDATE(created_at)=某天，可考虑改为 created_at>=当天零点 AND created_at<次日零点，避免对每行做日期函数。\n\n**深入补充（选读）：**\n对索引列做函数运算、不合适的隐式类型/字符集转换、前导通配符 LIKE、低选择性大范围条件等可能让访问成本上升。可改成可搜索的范围条件、统一类型、使用适用的函数索引或全文检索。OR、!=、IS NULL 不是绝对不能用索引，要看分布与计划。\n\n**追问 / 易错点：** 日期过滤怎么改？避免 DATE(create_time)=某天，可用半开区间 >=当天且<次日。",
      "sourceIds": [
        "N005",
        "N035",
        "N055",
        "NI003",
        "NI010",
        "NI024"
      ],
      "keywords": [
        "Q06-009",
        "MySQL",
        "美团",
        "快手",
        "网易",
        "招银网络科技",
        "拼多多",
        "即时设计"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-010",
      "number": "Q06-010",
      "question": "如何给一个查询设计联合索引？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n设计联合索引先看真实 SQL：哪些列等值过滤、哪些做范围、按什么排序、返回哪些字段。再选能服务主要查询的列顺序，用实际数据和执行计划验证。不是永远把区分度最高的列放第一，也不是索引越宽越好。\n\n**深入补充（选读）：**\n先确定最常见查询、过滤选择性、连接条件、排序和分页方式，再考虑等值前缀、范围及 order by 的匹配。索引并非永远“选择性最高放最前”，还要复用多种查询与避免排序。用实际数据的 EXPLAIN/ANALYZE 和写入成本验证，删除重复冗余索引。\n\n**追问 / 易错点：** 查询 where tenant_id=? order by created_at,id 可考虑什么？以租户开头并配合排序列的索引，结合其他过滤评估。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [D06 · MySQL 8.4：Multiple-Column Indexes](https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html)。",
      "sourceIds": [
        "N053",
        "X04",
        "NI024"
      ],
      "keywords": [
        "Q06-010",
        "MySQL",
        "小鹅通",
        "综合",
        "即时设计"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-011",
      "number": "Q06-011",
      "question": "EXPLAIN 要看哪些字段？ANALYZE 有什么不同？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nEXPLAIN 主要看：用了什么索引、怎么访问、预计扫多少行、是否回表或排序。常看 type、key、rows、filtered、Extra。EXPLAIN ANALYZE 还会真正执行支持的查询，展示实际行数和耗时，不能当成无成本静态检查。\n\n**深入补充（选读）：**\n常看访问类型 type、可选/实际索引、key_len、估算 rows、filtered、Extra，以及连接顺序。key_len 不能独自解释所有过滤和排序行为。EXPLAIN ANALYZE 会实际执行支持的查询并给实际时长与行数，排错更有价值但不是无代价的静态分析。\n\n**追问 / 易错点：** rows 小就一定快吗？仍可能有重复循环、回表、排序、网络和锁等待。\n\n**原始资料核对 / 延伸查阅：** [D04 · MySQL 8.4：EXPLAIN Statement](https://dev.mysql.com/doc/refman/8.4/en/explain.html)。",
      "sourceIds": [
        "N023",
        "N025",
        "N026"
      ],
      "keywords": [
        "Q06-011",
        "MySQL",
        "BIGO",
        "大疆",
        "顺丰"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-012",
      "number": "Q06-012",
      "question": "慢 SQL 排查的完整步骤？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n慢 SQL 先找到“哪条 SQL、什么参数、慢在什么时候”，再区分执行慢、锁等待还是连接等待。然后看执行计划、扫描行数、索引、深分页、N+1 和排序。一次改一个主要问题，在相同数据量下比较效果。\n\n**深入补充（选读）：**\n先从 trace 和慢日志定位 SQL、参数、耗时及扫描/返回行数，确认是连接等待、执行还是锁等待。看执行计划与数据分布，检查索引、N+1、深分页、大排序和统计信息。选择一个改动对比同规模数据，记录 P95/P99 和写入影响，再上线观察。\n\n**追问 / 易错点：** 为什么测试库快生产慢？数据量、分布、缓存命中、并发和统计信息可能完全不同。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [D04 · MySQL 8.4：EXPLAIN Statement](https://dev.mysql.com/doc/refman/8.4/en/explain.html)。",
      "sourceIds": [
        "N003",
        "N005",
        "N008",
        "N009",
        "N010",
        "N017",
        "N029",
        "N038",
        "N046",
        "N054",
        "N056",
        "X08",
        "NI002",
        "NI003",
        "NI004",
        "NI008"
      ],
      "keywords": [
        "Q06-012",
        "MySQL",
        "字节跳动",
        "美团",
        "京东",
        "滴滴",
        "熙牛医疗",
        "百度",
        "货拉拉",
        "阿里",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-013",
      "number": "Q06-013",
      "question": "事务 ACID 分别是什么意思？数据库和业务各负责什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nACID：原子性是要么一起成功、要么撤销；一致性是事务前后满足规则；隔离性是并发事务按约定互相隔离；持久性是提交结果得到相应持久保障。InnoDB 用 undo、锁/MVCC、redo 等机制支撑，但业务规则仍要程序写对。\n\n**举个例子：**\n转账的“总金额不凭空变化”是业务一致性规则，数据库不会自动猜出你少写了一条加钱 SQL。\n\n**深入补充（选读）：**\n原子性保证事务操作整体成功或撤销，InnoDB 使用 undo 等支持回滚；一致性是业务约束和数据库机制共同维持合法状态；隔离性通过锁、MVCC 等控制并发观察；持久性通过 redo、刷盘及存储可靠性等保障。不能说数据库能自动保证所有业务一致性，规则还需正确编码。\n\n**追问 / 易错点：** 一笔转账两个账户不在一个事务中，数据库仍能自动补齐吗？不能。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。",
      "sourceIds": [
        "N010",
        "N028",
        "X06",
        "NI016"
      ],
      "keywords": [
        "Q06-013",
        "MySQL",
        "京东",
        "熙牛医疗",
        "好未来",
        "滴滴"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-014",
      "number": "Q06-014",
      "question": "脏读、不可重复读、幻读有什么区别？四种隔离级别如何对应？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n脏读：读到别人还没提交的数据；不可重复读：同一记录两次读到不同值；幻读：同样条件下结果集合变化。隔离级别从低到高是读未提交、读已提交、可重复读、串行化。InnoDB 的具体表现还要区分快照读和锁定读。\n\n**举个例子：**\nA 读到 B 尚未提交的新余额，B 随后回滚，这是脏读。A 两次读之间，B 提交修改导致余额变化，是不可重复读。\n\n**深入补充（选读）：**\n脏读读到未提交修改，不可重复读强调同一记录前后变化，幻读强调条件集合变化。RU 允许脏读，RC 主要保证读已提交，RR 加强重复读，Serializable 提供更强串行化约束。InnoDB 的 RR 结合快照读和锁策略，比单背标准异常表更细致，应分读类型回答。\n\n**追问 / 易错点：** InnoDB 默认隔离级别？通常 REPEATABLE READ，可配置改变。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)。\n\n**原始资料核对 / 延伸查阅：** [D01 · MySQL 8.4：Transaction Isolation Levels](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)。",
      "sourceIds": [
        "N002",
        "N003",
        "N010",
        "N013",
        "N017",
        "N033",
        "N034",
        "N035",
        "N037",
        "N046",
        "N049",
        "N054",
        "N055",
        "X04",
        "NI001",
        "NI008"
      ],
      "keywords": [
        "Q06-014",
        "MySQL",
        "美团",
        "字节跳动",
        "京东",
        "百度",
        "滴滴",
        "同程",
        "小米",
        "快手",
        "腾讯",
        "熙牛医疗",
        "货拉拉",
        "网易",
        "综合",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-015",
      "number": "Q06-015",
      "question": "MVCC 的实现与 Read View 怎么理解？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nMVCC 就是保留同一行的多个历史版本，让查询按自己的“可见时间范围”读取合适版本。InnoDB 用 undo 串起旧版本，用 Read View 判断哪个版本可见。RC 通常每次一致性读建新视图，RR 通常复用首次一致性读的视图。\n\n**举个例子：**\nA 建立快照时余额是 100，B 后来改成 80 并提交；A 的 RR 普通快照查询仍可能读到历史的 100。\n\n**深入补充（选读）：**\nInnoDB 通过记录版本信息和 undo 链保存可见历史，用 Read View 判断某事务版本是否可见：本事务写入通常可见，已提交且早于视图的版本通常可见，仍活跃或视图之后的事务版本不可见。不可见就沿版本链继续找。它主要服务一致性非锁定读，不代替所有锁。\n\n**追问 / 易错点：** RC 与 RR 创建视图时机？RC 通常每次一致性读建新视图，RR 通常复用首次一致性读的视图。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [D01 · MySQL 8.4：Transaction Isolation Levels](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)；[D03 · MySQL 8.4：InnoDB Multi-Versioning](https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html)。",
      "sourceIds": [
        "N003",
        "N006",
        "N012",
        "N021",
        "N028",
        "N032",
        "N037",
        "N049",
        "N054",
        "X04",
        "X06",
        "X08",
        "NI008"
      ],
      "keywords": [
        "Q06-015",
        "MySQL",
        "字节跳动",
        "美团",
        "XTransfer",
        "快手",
        "熙牛医疗",
        "招银云创",
        "腾讯",
        "货拉拉",
        "综合",
        "好未来"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-016",
      "number": "Q06-016",
      "question": "快照读与当前读有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n快照读按 Read View 读合适的历史版本，常见是普通 SELECT；当前读要读取并约束当前记录，常见有 SELECT FOR UPDATE、UPDATE、DELETE。当前读可能等锁，不能拿快照读规则去解释所有写操作。\n\n**举个例子：**\n事务已经 BEGIN，不代表快照必然已经建立；通常要到首次一致性读，或显式创建一致性快照时才确定。\n\n**深入补充（选读）：**\n普通一致性 SELECT 可按 Read View 读历史版本，通常不加行锁；SELECT ... FOR UPDATE/FOR SHARE 等锁定读，以及更新删除，需要读取并约束当前记录。当前读遇到冲突会等待锁。不能说“RR 下所有语句都只读事务开始时快照”。\n\n**追问 / 易错点：** 事务 BEGIN 就一定创建 RR 快照吗？普通开始通常不是，要看首次一致性读或显式一致性快照选项。\n\n**原始资料核对 / 延伸查阅：** [D01 · MySQL 8.4：Transaction Isolation Levels](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)。",
      "sourceIds": [],
      "keywords": [
        "Q06-016",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-017",
      "number": "Q06-017",
      "question": "InnoDB 的 RR 怎样处理幻读？为什么要区分快照读和当前读？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nInnoDB 的 RR 要分开说：普通快照读通常复用快照，所以看不到其他事务后插入的新行；合适的范围锁定读通过临键锁等阻止对应范围插入。混用快照读、当前读和自身写入时，不能承诺结果集合永远不变。\n\n**深入补充（选读）：**\n要分场景：同一 RR 事务的普通一致性读通常复用快照，不会随其他事务插入增加结果；范围锁定读借 next-key 等锁阻止相应范围插入。混用快照读、当前读与本事务写入时，不能简单宣称永远看不到集合变化。锁保护范围还由索引和实际扫描路径决定。\n\n**追问 / 易错点：** 为什么不能只答“MVCC 解决所有幻读”？它没有替代写操作和范围并发控制。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [D01 · MySQL 8.4：Transaction Isolation Levels](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)。",
      "sourceIds": [
        "N001",
        "N013",
        "N040",
        "N046",
        "N049",
        "X06"
      ],
      "keywords": [
        "Q06-017",
        "MySQL",
        "阿里",
        "百度",
        "帆软",
        "美团",
        "熙牛医疗",
        "好未来"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-018",
      "number": "Q06-018",
      "question": "记录锁、间隙锁、临键锁和意向锁分别锁什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n记录锁锁住已有索引记录；间隙锁限制两个记录之间插入；临键锁是“记录+它前面的间隙”；意向锁是表级标记，告诉其他操作这张表里面有人在加细粒度锁。到底锁多大范围，要看索引、条件和隔离级别。\n\n**举个例子：**\n索引里有 10 和 20，间隙锁可以阻止在二者之间插入 15；它和锁住现有的 10 不是同一件事。\n\n**深入补充（选读）：**\n记录锁锁索引记录；间隙锁限制某区间的插入；next-key 锁是记录加前方间隙；意向锁是表级标记，表明事务在更细粒度持锁，便于不同粒度协调。锁范围取决于唯一/非唯一索引、等值/范围、是否命中和隔离级别，不能仅按 where 字面判断。\n\n**追问 / 易错点：** InnoDB “行锁”实际锁在哪？主要作用于索引记录与相关范围。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [
        "N015",
        "N046",
        "N049",
        "NI016"
      ],
      "keywords": [
        "Q06-018",
        "MySQL",
        "拼多多",
        "美团",
        "熙牛医疗",
        "滴滴"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-019",
      "number": "Q06-019",
      "question": "唯一索引等值查询会加间隙锁吗？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n完整唯一键等值查到现有记录时，锁定查询通常只需记录锁。但查不存在的值、只用联合唯一键的一部分、或者查范围时，可能涉及间隙。还要说明 RC/RR，不能只凭“有唯一索引”就断言没有间隙锁。\n\n**深入补充（选读）：**\n在合适隔离级别下，对完整唯一键查到现有记录的锁定查询，通常只需记录锁；查不存在记录、只使用联合唯一索引的一部分、范围条件等可能涉及间隙或其他范围锁。RC 的间隙锁使用也与 RR 不同，外键/重复键检查还有特殊情况。\n\n**追问 / 易错点：** 为什么“用了唯一索引就永远只有行锁”不对？缺少是否命中、是否完整等值等条件。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [],
      "keywords": [
        "Q06-019",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-020",
      "number": "Q06-020",
      "question": "InnoDB 死锁如何形成和处理？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n数据库死锁是事务互相等对方的锁。InnoDB 检测到后可能回滚一个事务让另一个继续；应用要在幂等前提下有限重试整笔事务。预防主要靠统一更新顺序、缩短事务和合适索引。\n\n**举个例子：**\nA 先改订单 1 再改 2，B 先改 2 再改 1，就可能互相等待。统一按 ID 顺序修改可减少这种情况。\n\n**深入补充（选读）：**\n两个事务以相反顺序锁定多行，或锁范围互相依赖时可能形成循环等待。数据库可检测并回滚受害事务；应用要按业务幂等对整个事务做有限重试。优化统一锁顺序、缩短事务、完善索引，结合死锁日志和锁等待视图确认。\n\n**追问 / 易错点：** 锁等待超时与死锁相同吗？不相同，等待超时不一定存在循环依赖。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [
        "N015",
        "NI008"
      ],
      "keywords": [
        "Q06-020",
        "MySQL",
        "拼多多",
        "美团"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-021",
      "number": "Q06-021",
      "question": "乐观锁与悲观锁怎样防止库存变负？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n悲观方式先在事务里锁住库存，再检查修改；乐观方式在更新时检查版本或库存条件，成功才扣减。关键是让数据库原子判断，不能先普通 SELECT 再无条件 UPDATE。无论哪种写法，数据库实际更新仍会使用必要的锁。\n\n**举个例子：**\nUPDATE stock SET qty=qty-1 WHERE id=? AND qty>0；检查影响行数为 1 才算成功，0 行表示本次没扣成。\n\n**深入补充（选读）：**\n悲观方案在事务内用锁定读后校验并修改；乐观方案用版本号或条件更新，如 UPDATE stock SET qty=qty-1 WHERE id=? AND qty>0，再检查影响行数。真正约束应落到数据库原子条件，不能先普通 SELECT 再无条件 UPDATE。高冲突下乐观重试需限次数。\n\n**追问 / 易错点：** 影响0行意味着什么？库存不足、版本变化或目标不存在，需要按业务区分。\n\n**原章示例（移至对应题目）：**\n```sql\nUPDATE product_stock\nSET stock = stock - :qty\nWHERE product_id = :product_id\n  AND stock >= :qty;\n```\n\n`:qty` 为展示用绑定参数，不是可直接交给所有MySQL客户端执行的字面SQL。**应用层必须先验证 qty > 0，并检查影响行数恰好为1；和订单落库放在同一个事务中，失败抛异常/回滚。**只写这一条不能处理订单与跨系统结果。",
      "sourceIds": [
        "N032",
        "NI017"
      ],
      "keywords": [
        "Q06-021",
        "MySQL",
        "招银云创",
        "深轻科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-022",
      "number": "Q06-022",
      "question": "redo log、undo log、binlog 各做什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nredo 用来崩溃后“重做已经记录的修改”；undo 用来“撤销修改、读取旧版本”；binlog 记录服务器层的数据变更，用于复制和恢复。记忆：redo 重做，undo 撤销，binlog 复制与恢复。\n\n**举个例子：**\n事务失败要撤销，靠 undo；数据库崩溃后恢复已提交修改，涉及 redo；把变更同步给副本，主要靠 binlog。\n\n**深入补充（选读）：**\nredo 记录引擎恢复所需的修改信息，帮助崩溃后重做；undo 支持事务回滚和旧版本读取；binlog 是服务器层变更日志，服务复制与时间点恢复等。三者粒度和职责不同，binlog 不是 undo，开启 binlog 也不能替代 InnoDB redo 的崩溃恢复。\n\n**追问 / 易错点：** redo 是直接写整行 SQL 吗？不能这样理解，它更接近引擎页修改相关记录。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [D03 · MySQL 8.4：InnoDB Multi-Versioning](https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html)；[D07 · MySQL 8.4：Redo Log](https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html)。",
      "sourceIds": [
        "N003",
        "N014",
        "N036",
        "X06"
      ],
      "keywords": [
        "Q06-022",
        "MySQL",
        "字节跳动",
        "百度",
        "腾讯",
        "好未来"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-023",
      "number": "Q06-023",
      "question": "MySQL 的两阶段提交是什么？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n这里的两阶段提交通常是协调 InnoDB 的 redo 与 MySQL 的 binlog：先准备，再记录相应 binlog，最后完成引擎提交。目的是让崩溃恢复后两边对“这笔事务是否提交”的判断一致，不是指业务写了两条 UPDATE。\n\n**深入补充（选读）：**\n常见面试指 InnoDB redo 与服务器 binlog 的内部协调：事务先进入准备阶段，持久化相应 binlog 后再完成引擎提交，恢复时结合状态判断，以减少两类日志结果不一致。这不同于完整解释任意跨服务分布式事务的两阶段协议。\n\n**追问 / 易错点：** 业务 SQL 里写两个 UPDATE 就叫两阶段提交吗？不是。",
      "sourceIds": [],
      "keywords": [
        "Q06-023",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-024",
      "number": "Q06-024",
      "question": "刷盘参数对数据可靠性有什么影响？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n日志何时真正同步到磁盘，会影响性能和宕机丢失窗口。innodb_flush_log_at_trx_commit 和 sync_binlog 是常见相关参数；强调可靠性时常讨论“双 1”。但最终保障还受存储设备、操作系统和复制故障场景影响。\n\n**深入补充（选读）：**\ninnodb_flush_log_at_trx_commit 与 sync_binlog 等控制提交附近日志写入/同步策略，吞吐与故障窗口不同。常见强调可靠性时讨论双1，但实际保障仍依赖磁盘、控制器、操作系统和复制配置。要区分进程崩溃、系统断电和主从切换的丢失窗口，不能说任何参数组合绝对不丢。\n\n**追问 / 易错点：** 复制了三份是否就无需刷盘？不同故障模型下仍可能有共同丢失风险。",
      "sourceIds": [],
      "keywords": [
        "Q06-024",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-025",
      "number": "Q06-025",
      "question": "Buffer Pool 和 WAL 怎样配合？提交是否要立即刷完数据页？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBuffer Pool 是 InnoDB 的内存页缓存，数据读写通常先经过它；修改过还没落盘的页叫脏页。WAL 是先保证相关日志持久，再允许对应数据页落盘，用日志帮助崩溃恢复。提交不必把所有脏页立刻刷完。\n\n**举个例子：**\n像先把这次修改记到可靠账本，再逐步整理正式档案；中途断电，可以按账本恢复，而不必每次都把所有档案整理完。\n\n**深入补充（选读）：**\nBuffer Pool 缓存数据页和索引页，读写通常先作用于内存页，修改后形成脏页再适时刷盘。WAL 要求相关日志先持久到安全位置，再允许对应数据页落盘，以支持崩溃恢复。命中率高仍可能因锁、CPU 或日志同步而慢，缓存并非万能。\n\n**追问 / 易错点：** 提交是否要把事务修改的所有数据页立即写盘？通常不必，日志和页刷盘职责不同。\n\n**原始资料核对 / 延伸查阅：** [D07 · MySQL 8.4：Redo Log](https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html)。",
      "sourceIds": [],
      "keywords": [
        "Q06-025",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-026",
      "number": "Q06-026",
      "question": "主从复制流程与延迟问题？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n主库把变更写入 binlog，副本接收为 relay log，再重放到自己的数据中。复制可能有延迟，所以主库写完立刻读副本，可能看不到新数据。关键的写后读可读主库，或等待达到指定复制进度。\n\n**深入补充（选读）：**\n源库记录 binlog，副本接收并写 relay log，再由应用线程重放。异步复制允许延迟，主库写完立即读副本可能读旧数据。可按会话或关键业务读主、等待指定复制进度，结合并行复制、慢事务和硬件排查延迟；半同步也不等于读副本立刻可见。\n\n**追问 / 易错点：** 读写分离能提升写能力吗？主要分摊读，主库写瓶颈仍存在。",
      "sourceIds": [
        "N053"
      ],
      "keywords": [
        "Q06-026",
        "MySQL",
        "小鹅通"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-027",
      "number": "Q06-027",
      "question": "深分页为什么慢？游标分页怎么做？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n深分页慢在 offset 很大时，数据库通常仍要扫描并跳过前面的记录。连续翻页可改成“从上次最后一条之后继续查”，这叫游标分页。排序必须稳定，常用时间加唯一 ID；它不天然支持高效任意跳页。\n\n**举个例子：**\n不是查第 100 万行后 20 条，而是 WHERE id > 上页最后ID ORDER BY id LIMIT 20；具体索引和过滤条件也要匹配。\n\n**深入补充（选读）：**\nLIMIT 很大 offset 时通常仍需扫描并跳过前面的记录，回表和排序会加重成本。可用稳定排序键进行 seek 分页，例如条件 (created_at,id) 在上次位置之后，配合联合索引；也可延迟关联减少回表。游标要包含唯一 tie-breaker，且不能天然支持任意页跳转。\n\n**追问 / 易错点：** 只用 create_time 当游标行吗？时间相同的记录可能漏或重复，需加唯一 ID。\n\n**原章示例（移至对应题目）：**\n```sql\nSELECT id, created_at, amount\nFROM orders\nWHERE tenant_id = :tenant_id\n  AND (created_at > :last_time\n       OR (created_at = :last_time AND id > :last_id))\nORDER BY created_at ASC, id ASC\nLIMIT 100;\n```\n\n候选索引 `(tenant_id, created_at, id)`，用真实执行计划验证。需要快照式导出时再明确数据截止时间/快照机制。",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "Q06-027",
        "MySQL",
        "实在智能"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-028",
      "number": "Q06-028",
      "question": "order by、group by 慢怎么优化？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n排序、分组慢，先减少参与处理的数据，再看能否利用索引顺序，避免不必要的大字段和临时结果。聚合量很大时可考虑预聚合。Using filesort 表示额外排序，不代表一定写磁盘；盲目扩大排序缓冲可能撑高内存。\n\n**深入补充（选读）：**\n先看能否利用合适索引顺序减少额外排序，提前过滤并缩小处理集合，避免 SELECT * 与不必要的大字段。group by 可考虑预聚合或按业务粒度汇总。Using filesort 不必然真的落磁盘，但表示未直接按所需索引顺序完成排序，应结合数据量判断。\n\n**追问 / 易错点：** 把 sort_buffer_size 调巨大总是有益吗？并发下每连接开销可能放大内存风险。",
      "sourceIds": [],
      "keywords": [
        "Q06-028",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-029",
      "number": "Q06-029",
      "question": "count(*)、count(1)、count(列) 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\ncount(*) 和 count(1) 通常都数行；count(某列) 只数该列非 NULL 的行。InnoDB 一般要按当前事务可见数据统计，不能直接用一个全局行数回答所有查询。只问“是否存在”时，用存在性查询更贴切。\n\n**举个例子：**\n三行记录某列分别是 1、NULL、2：count(*)=3，count(该列)=2。\n\n**深入补充（选读）：**\ncount(*) 统计行数，count(1) 也对每行计数，count(列) 忽略该列的 NULL。InnoDB 在 MVCC 下通常不能直接用一个精确全局行数回答任意事务视图的 count。性能看可用索引与扫描，不要机械声称 count(1) 永远比 count(*) 快。\n\n**追问 / 易错点：** 业务只问是否存在，还需要 count 全部吗？通常 SELECT 1 ... LIMIT 1 更贴合需求。",
      "sourceIds": [],
      "keywords": [
        "Q06-029",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-030",
      "number": "Q06-030",
      "question": "数据库字段类型、字符集和主键怎么选？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n字段类型按业务选：金额用 DECIMAL 或最小单位整数，文本定义合理长度，时间明确时区语义，字符集和排序规则保持一致。主键要唯一、稳定、尽量紧凑，因为二级索引也会携带主键值。\n\n**深入补充（选读）：**\n金额用 DECIMAL 或明确定义的最小单位整数，时间类型明确时区语义，文本长度按真实边界设计；字符集通常选能完整支持 Unicode 的 utf8mb4 并确认排序规则。主键强调唯一、稳定、尽量紧凑；自增与分布式 ID 按规模、顺序性和生成依赖权衡。\n\n**追问 / 易错点：** 字符串大小写是否相等由什么决定？排序规则等会影响，不能只看字段类型。",
      "sourceIds": [],
      "keywords": [
        "Q06-030",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-031",
      "number": "Q06-031",
      "question": "NULL、索引和 SQL 三值逻辑有哪些坑？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nNULL 表示缺失或未知，不是普通的值。判断它用 IS NULL，不用 =NULL；WHERE 只保留判断为真的行。NOT IN 的集合含 NULL 时容易出现意外，应根据语义考虑 NOT EXISTS。MySQL 唯一键对 NULL 有特殊规则。\n\n**举个例子：**\nNULL=NULL 不会得到普通的 true，因为你不知道两边各是什么值；count(列) 也不会把 NULL 数进去。\n\n**深入补充（选读）：**\nNULL 表示缺失或未知，用 IS NULL 判断；x=NULL 不等同判断为空。where 只保留真，unknown 会被过滤；NOT IN 子查询含 NULL 时可能使结果出乎意料，可考虑相关 NOT EXISTS。NULL 是否可在唯一键出现多个要按数据库规则，MySQL 常允许多个含 NULL 的唯一键值。\n\n**追问 / 易错点：** 为什么 NULL=NULL 不是 true？它表示未知值之间不能直接判定相等。\n\n**原章示例（移至对应题目）：**\n```sql\nSELECT u.id\nFROM users AS u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders AS o WHERE o.user_id = u.id\n);\n```\n\n对比 `NOT IN` 含 NULL 的情况，解释为什么不能忽略SQL三值逻辑。",
      "sourceIds": [],
      "keywords": [
        "Q06-031",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-032",
      "number": "Q06-032",
      "question": "JOIN 的类型与常见错误？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nINNER JOIN 只保留两边匹配的行；LEFT JOIN 即使右边找不到，也保留左边，并给右边补 NULL。右表过滤条件放 ON 和放 WHERE，结果可能不同：WHERE 可能把补 NULL 的行再过滤掉。\n\n**举个例子：**\n想查所有用户及其有效订单，右表条件放错位置，可能把“没有有效订单的用户”也一起删掉。\n\n**深入补充（选读）：**\nINNER JOIN 只保留匹配行，LEFT JOIN 保留左表并对未匹配右侧补 NULL。把右表过滤从 ON 放到 WHERE 可能排除 NULL 补行，改变左连接语义。优化看连接键索引、驱动集合规模和执行计划，避免多对多关联导致行数膨胀后再粗暴去重。\n\n**追问 / 易错点：** 分页主表再关联子表有什么好处？可控制主记录页大小，但需明确一对多结果如何展开。",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "Q06-032",
        "MySQL",
        "实在智能"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-033",
      "number": "Q06-033",
      "question": "怎样查询每个部门薪资前三名？并列和只取三个人怎样区分？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先确认“前三”指三个人，还是前三个不同薪资档位。每部门只取三个人用 ROW_NUMBER，并加稳定排序；允许同薪资并列、取前三档用 DENSE_RANK。MySQL 8 可以先用窗口函数排名，再在外层筛选。\n\n**举个例子：**\n工资 100、100、90、80：ROW_NUMBER 取前三行；DENSE_RANK<=3 会把四个人都选中。\n\n**深入补充（选读）：**\nMySQL 8 可用窗口函数在部门内按薪资降序排名，再在外层过滤。要先确认“前三名”允许并列还是只取三个人：DENSE_RANK 处理前三个薪资档位，ROW_NUMBER 限定三行并需稳定次序。NULL 薪资是否参与也要定义。\n\n**追问 / 易错点：** RANK 和 DENSE_RANK 有何区别？并列后的名次前者跳号、后者不跳号。\n\n**原始资料核对 / 延伸查阅：** [D08 · MySQL 8.4：Window Functions](https://dev.mysql.com/doc/refman/8.4/en/window-function-descriptions.html)。\n\n**原章示例（移至对应题目）：**\n```sql\nSELECT id, department_id, salary\nFROM (\n  SELECT id, department_id, salary,\n         DENSE_RANK() OVER (\n           PARTITION BY department_id ORDER BY salary DESC\n         ) AS rk\n  FROM employee\n  WHERE salary IS NOT NULL\n) AS ranked\nWHERE rk <= 3;\n```\n\n若只取三个人，改用 `ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC, id ASC)`。",
      "sourceIds": [],
      "keywords": [
        "Q06-033",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-034",
      "number": "Q06-034",
      "question": "分库分表什么时候做，有哪些代价？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n分库分表是为了突破单库单表的容量或负载限制，但会增加跨片查询、事务、排序、唯一约束和扩容迁移的复杂度。先做索引、SQL、归档等优化，再判断是否真的需要分片，不要按固定行数机械决定。\n\n**深入补充（选读）：**\n在索引、SQL、归档、缓存和垂直拆分等优化仍不能满足容量或写入需求时再评估。分片键应兼顾均匀分布与主要查询局部性，跨片 join、事务、排序分页、唯一约束和扩容迁移都更复杂。不能用“数据过千万就必须分表”当统一阈值。\n\n**追问 / 易错点：** 按用户 ID 分片后按订单号怎么查？需订单号携带路由信息、路由表或二级检索等方案。",
      "sourceIds": [
        "N033",
        "N054",
        "NI017"
      ],
      "keywords": [
        "Q06-034",
        "MySQL",
        "同程",
        "货拉拉",
        "深轻科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q06-035",
      "number": "Q06-035",
      "question": "大批量导入、删数据、加字段怎么避免影响线上？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n大批量操作要拆批、限速、可恢复。导入分批事务，删除按可索引范围逐批清理，DDL 先确认版本和操作能否在线完成。在线 DDL 也可能等元数据锁，变更前还要检查长事务、磁盘空间和兼容方案。\n\n**深入补充（选读）：**\n导入按固定批次事务、校验与重试，避免一笔超长事务；历史清理按可索引范围小批删除并观察复制和锁。DDL 能否 INSTANT/INPLACE 受版本、操作和表结构限制，仍可能遇到元数据锁。变更前确认计划、空间、兼容窗口与回滚方式。\n\n**追问 / 易错点：** 为什么一个简单 ALTER 卡住？可能等待长期事务占用的元数据锁。",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q06-035",
        "MySQL",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md"
    },
    {
      "id": "bank-Q07-001",
      "number": "Q07-001",
      "question": "Redis 为什么快？是不是只有一个线程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nRedis 快主要因为数据在内存、常用结构高效、命令执行路径短，并使用事件驱动处理网络。常说的“单线程”主要指核心命令执行，不是整个 Redis 进程只有一个线程。慢命令、大 key、长脚本仍可能拖慢其他请求。\n\n**深入补充（选读）：**\n常见优势是数据主要在内存、命令路径短、合适数据结构和事件驱动网络处理。核心命令执行常讨论主线程串行，但持久化、异步删除和部分网络 IO 可有后台或其他线程，不能说整个 Redis 只有一个线程。大 key、慢命令与脚本仍可阻塞关键执行路径。\n\n**追问 / 易错点：** 单线程就没有并发问题了吗？客户端读后再写的多命令业务仍可发生竞态。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N021",
        "N025",
        "N038",
        "X08"
      ],
      "keywords": [
        "Q07-001",
        "Redis",
        "快手",
        "大疆",
        "百度",
        "美团"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-002",
      "number": "Q07-002",
      "question": "五种常用数据类型如何选择？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nString 放单值、缓存或计数；Hash 放对象字段；List 放有顺序的列表；Set 做去重和集合关系；ZSet 在去重基础上按分数排序。先按业务需求选类型，再考虑内部编码和数据规模。\n\n**举个例子：**\n验证码用 String，用户字段用 Hash，关注关系可用 Set，按积分排序的榜单用 ZSet。\n\n**深入补充（选读）：**\nString 适合简单缓存、计数和二进制值；Hash 适合对象字段；List 适合有序列表；Set 适合去重和集合运算；ZSet 适合带分数排序与范围查询。数据类型是接口语义，不等于只有一种底层编码，元素数量和大小等会触发不同编码选择。\n\n**追问 / 易错点：** 排行榜用 List 还是 ZSet？经常更新分数并查排名时通常选 ZSet。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [R01 · Redis：Data Types](https://redis.io/docs/latest/develop/data-types/)。",
      "sourceIds": [
        "N009",
        "N014",
        "N021",
        "N025",
        "N027",
        "N035",
        "X06",
        "NI002",
        "NI015",
        "NI017"
      ],
      "keywords": [
        "Q07-002",
        "Redis",
        "京东",
        "百度",
        "快手",
        "大疆",
        "车300",
        "好未来",
        "招银网络科技",
        "腾讯",
        "深轻科技"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-003",
      "number": "Q07-003",
      "question": "Redis 的 SDS 为什么不直接用 C 字符串？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nSDS 是 Redis 对字符串的封装，额外保存长度和可用空间。这样取长度不必每次从头找结尾，也能保存带零字节的二进制数据；预留空间还能减少部分追加时的重新分配。Redis String 不只是文本。\n\n**深入补充（选读）：**\nSDS 保存长度和空间等元信息，可 O(1) 获得长度，支持包含零字节的二进制内容，并通过预留空间降低部分追加成本。它仍要处理内存分配和边界检查，不能理解成永不扩容。具体头部布局随实现而变，面试抓住长度、二进制安全和扩容策略即可。\n\n**追问 / 易错点：** Redis String 只能保存文本吗？不是，可以存二进制数据。",
      "sourceIds": [],
      "keywords": [
        "Q07-003",
        "Redis"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-004",
      "number": "Q07-004",
      "question": "Redis 数据类型和底层编码有什么区别？编码为什么会变化？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n数据很小时，紧凑编码省内存；数据多或值变大时，换成更适合查找、更新的结构。外部类型没变，内部编码可能变。Redis 的编码也随版本演进，实际环境可用 OBJECT ENCODING 查看，别永远只背 ziplist。\n\n**深入补充（选读）：**\n小对象可用紧凑编码降低指针和节点开销，规模变大则使用适合查找或修改的结构。较新 Redis 中 listpack 等替代了不少旧 ziplist 场景，List 常涉及 quicklist；Set 等编码也有版本演进。回答应区分外部类型与内部编码，通过 OBJECT ENCODING 查实际结果。\n\n**追问 / 易错点：** 为什么不能照背“Hash 永远 ziplist 或 hashtable”？历史编码不适用于所有版本。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。",
      "sourceIds": [
        "X06"
      ],
      "keywords": [
        "Q07-004",
        "Redis",
        "好未来"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-005",
      "number": "Q07-005",
      "question": "ZSet 为什么同时需要排序结构与哈希索引？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n大型 ZSet 常用两套结构配合：哈希索引快速按成员找分数，跳表按分数维护顺序，方便排名和范围查询。小集合可能用紧凑编码。这是为了同时照顾“找一个成员”和“按顺序找一批成员”。\n\n**深入补充（选读）：**\n典型大规模编码使用跳表维护分数顺序，用哈希索引按成员快速找分数；跳表支持范围与排名相关遍历，哈希适合点查。小规模也可能使用紧凑表示。选择跳表是复杂度、实现维护等工程折中，不能说红黑树绝对无法实现有序集合。\n\n**追问 / 易错点：** 两个成员分数相同怎么排序？会按成员的字典序等规则进一步确定顺序。",
      "sourceIds": [
        "N022",
        "N036",
        "N046",
        "N054"
      ],
      "keywords": [
        "Q07-005",
        "Redis",
        "BIGO",
        "腾讯",
        "美团",
        "货拉拉"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-006",
      "number": "Q07-006",
      "question": "Bitmap、HyperLogLog、布隆过滤器分别适合什么问题？结果精确吗？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nBitmap 用每一位记录是否发生；HyperLogLog 估算有多少个不同元素；Bloom Filter 判断一个值“肯定没有”或“可能有”。HLL 有统计误差，布隆过滤器有误判，不能当精确业务去重集合。\n\n**举个例子：**\n签到可用位图；估算独立访客可用 HLL；先拦截明显不存在的商品 ID 可用布隆过滤器，判断可能存在后仍需查真实数据。\n\n**深入补充（选读）：**\nBitmap 用位记录状态，如签到；HyperLogLog 估算去重基数，省内存但有误差且不能列出全部成员；Bloom Filter 判断成员是否可能存在，允许误判存在，一般不误判正确加入且未损坏状态下的不存在。Bloom 的可用性与模块/发行版有关，不要假定所有环境默认都有。\n\n**追问 / 易错点：** 布隆过滤器能直接做资金记录精确去重吗？不能，误判可能丢掉合法操作。\n\n**原始资料核对 / 延伸查阅：** [R01 · Redis：Data Types](https://redis.io/docs/latest/develop/data-types/)。",
      "sourceIds": [
        "N017",
        "N041",
        "NI008",
        "NI015"
      ],
      "keywords": [
        "Q07-006",
        "Redis",
        "滴滴",
        "BIGO",
        "美团",
        "腾讯"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-007",
      "number": "Q07-007",
      "question": "过期删除和内存淘汰有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n过期删除是“时间到了，清理到期 key”；内存淘汰是“内存不够，按策略选 key 删除”。两者触发原因不同。到期不代表内存准点释放，没设 TTL 的 key 也可能被 allkeys 类策略淘汰。\n\n**深入补充（选读）：**\n过期删除针对已到 TTL 的 key，通常结合访问时检查与周期性采样清理；内存淘汰是在接近 maxmemory 时按策略释放数据。到期不代表物理空间在那个时刻立即全部释放，没设 TTL 的 key 也可能在 allkeys 策略下被淘汰。\n\n**追问 / 易错点：** TTL 能当精准定时器吗？不能依赖 key 删除事件在某个毫秒准点发生。\n\n**原始资料核对 / 延伸查阅：** [R02 · Redis：Key Eviction](https://redis.io/docs/latest/develop/reference/eviction/)。",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q07-007",
        "Redis",
        "美团"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-008",
      "number": "Q07-008",
      "question": "常见内存淘汰策略有哪些？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n先记策略范围，再记选谁：allkeys 面向全部可选 key，volatile 只面向设了过期时间的 key；LRU 偏向淘汰最近少用的，LFU 偏向淘汰低频的，random 随机，volatile-ttl 偏向更早过期的。noeviction 不主动淘汰，相关写入可能报错。\n\n**深入补充（选读）：**\n包括 noeviction、allkeys/volatile 范围的 LRU/LFU/random，以及 volatile-ttl 等。allkeys 面向所有可选 key，volatile 只考虑有过期设置的 key；候选不足时可能无法腾空间。LRU/LFU 常为近似实现，不是维护全库精确排序，选择要结合缓存价值、访问分布和写入可接受性。\n\n**追问 / 易错点：** noeviction 会怎么表现？部分需要分配内存的写命令可能报错，而不是自动删数据。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [R02 · Redis：Key Eviction](https://redis.io/docs/latest/develop/reference/eviction/)。",
      "sourceIds": [
        "N003",
        "N052",
        "X02",
        "NI015"
      ],
      "keywords": [
        "Q07-008",
        "Redis",
        "字节跳动",
        "快手",
        "拼多多",
        "腾讯"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-009",
      "number": "Q07-009",
      "question": "RDB 与 AOF 的区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nRDB 是某一时刻的数据快照，恢复方便，但快照后的修改可能丢失；AOF 记录写操作，按策略同步磁盘，通常能减少丢失窗口，但日志和回放有成本。可以组合使用，不能把任何一种简单说成绝不丢数据。\n\n**举个例子：**\nRDB 像定期拍照，AOF 像记录操作流水。只靠昨天的照片，当然恢复不了今天还没拍进去的变化。\n\n**深入补充（选读）：**\nRDB 是时间点快照，便于备份和恢复，间隔内的新修改可能在故障中丢失。AOF 记录写操作并按策略同步磁盘，恢复更接近近期状态，但有体积和回放成本。可结合使用；AOF everysec 常讨论约一秒级风险窗口，但实际故障与 IO 异常会影响，不能把它当绝对上界保证。\n\n**追问 / 易错点：** 缓存可重建还要不要持久化？按重建成本、恢复时间和是否保存权威状态决定。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [R03 · Redis：Persistence](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/)。",
      "sourceIds": [
        "N003",
        "N021",
        "N035",
        "N039",
        "N055",
        "X08",
        "NI019"
      ],
      "keywords": [
        "Q07-009",
        "Redis",
        "字节跳动",
        "快手",
        "京东",
        "网易",
        "美团",
        "新蛋"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-010",
      "number": "Q07-010",
      "question": "AOF 重写与 RDB 的 fork 有什么成本？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nAOF 重写是按当前数据生成更精简的恢复内容，不是照抄全部历史操作。后台任务常涉及 fork 和写时复制，业务持续修改数据时会额外占内存，还会竞争磁盘和 CPU。“后台执行”不等于前台完全没影响。\n\n**深入补充（选读）：**\n重写用当前状态生成更紧凑的恢复记录，不是把所有历史日志逐行删减。后台子进程创建涉及 fork 和写时复制，父进程持续写会增加额外内存页与 IO 压力。数据集大、内存余量小或磁盘忙时，后台任务也可能让前台延迟上升。\n\n**追问 / 易错点：** “后台执行完全不影响主线程”对吗？不对，fork、共享资源竞争和写时复制都有影响。\n\n**原始资料核对 / 延伸查阅：** [R03 · Redis：Persistence](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/)。",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q07-010",
        "Redis",
        "字节跳动"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-011",
      "number": "Q07-011",
      "question": "Redis 主从复制的流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nRedis 副本第一次追上主库时，可能需要全量同步；有可用历史偏移和积压缓冲时，可以只补增量。常见主从复制是异步的，主库回复成功时，副本不一定已经收到，因此切主仍可能丢掉已确认的写入。\n\n**深入补充（选读）：**\n初次或无法增量追赶时进行全量同步，传输快照并补齐期间增量；具备有效历史偏移和复制积压缓冲区时可部分重同步。常见复制是异步，主库成功响应后副本可能尚未接收，因此故障切换仍有丢失已确认写的窗口。\n\n**追问 / 易错点：** WAIT 就能得到强一致数据库吗？不能，它可提升复制确认程度，但不替代完整一致性协议和故障约束。\n\n**原始资料核对 / 延伸查阅：** [R04 · Redis：Replication](https://redis.io/docs/latest/operate/oss_and_stack/management/replication/)。",
      "sourceIds": [],
      "keywords": [
        "Q07-011",
        "Redis"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-012",
      "number": "Q07-012",
      "question": "Sentinel 的职责是什么？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nSentinel 负责监控主从、判断故障、组织切主，并告诉客户端新主是谁。它解决高可用，不负责把数据分片扩容。哨兵节点数量和主从复制可靠性是两件事，多哨兵不代表数据强一致。\n\n**深入补充（选读）：**\nSentinel 监控主从状态，协商故障判断并在满足条件时进行故障转移，通知客户端新主信息。它解决高可用管理，不负责把一份数据拆到多台提高容量。主观下线、客观下线、故障转移授权和副本晋升选择属于不同环节，不能只说“投票最多的从库变主”。\n\n**追问 / 易错点：** 部署三个 Sentinel 是否意味着主从数据强一致？不是，数据复制语义仍需单独分析。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。",
      "sourceIds": [
        "N032",
        "X02"
      ],
      "keywords": [
        "Q07-012",
        "Redis",
        "招银云创",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-013",
      "number": "Q07-013",
      "question": "Redis Cluster 如何分片和路由？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nRedis Cluster 把 key 映射到 16384 个槽，再把槽分配给不同节点，实现分片。客户端根据槽找到节点；多 key 操作通常要求同槽，可以用 hash tag 让相关 key 落在一起。Cluster 和 Sentinel 的用途不同。\n\n**举个例子：**\norder:{123}:info 与 order:{123}:lock 使用相同的 hash tag 123，可方便相关操作落在同一槽。\n\n**深入补充（选读）：**\n开源 Cluster 使用 16384 个哈希槽，key 经 CRC16 等规则映射到槽，再由节点承担槽。带 hash tag 的 key 可指定共同哈希部分，方便多 key 操作在同槽执行。客户端感知拓扑，节点故障与迁移通过集群机制处理，和 Sentinel 不是同一种架构。\n\n**追问 / 易错点：** 为什么多 key Lua 可能报 CROSSSLOT？脚本涉及的 key 不在同一个槽。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [R05 · Redis：Cluster Specification](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/)。",
      "sourceIds": [
        "N023",
        "X02",
        "NI005",
        "NI016"
      ],
      "keywords": [
        "Q07-013",
        "Redis",
        "BIGO",
        "拼多多",
        "携程",
        "滴滴"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-014",
      "number": "Q07-014",
      "question": "MOVED 与 ASK 的区别？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nMOVED 大致表示“这个槽现在归别的节点，你更新路由”；ASK 表示“迁移期间这次先去另一个节点”，通常不直接改永久路由。ASK 请求目标前需要按协议发送 ASKING。业务层仍要控制超时和重试。\n\n**深入补充（选读）：**\nMOVED 通常提示槽的稳定归属已改变，客户端可更新槽映射；ASK 常出现在槽迁移中的临时转向，客户端按协议先 ASKING 再请求目标节点，不应直接把它当永久归属更新。成熟 Cluster 客户端会处理重定向，但业务还要控制重试、幂等和超时。\n\n**追问 / 易错点：** 扩容会让所有 key 一瞬间重分布吗？通常通过槽迁移逐步完成，期间可能出现重定向。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [R05 · Redis：Cluster Specification](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/)。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q07-014",
        "Redis",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-015",
      "number": "Q07-015",
      "question": "什么是缓存穿透？一直查不存在的数据怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n缓存穿透是查本来就不存在的数据：缓存没有，数据库也没有，每次都压数据库。常见处理是入口校验、短时缓存空结果，或用布隆过滤器先排除明显不存在的键。新数据建立后要注意清除旧的空值缓存。\n\n**深入补充（选读）：**\n查询不存在的数据，每次缓存未命中又落到数据库，恶意随机 ID 会放大问题。入口校验明显非法值，对确实不存在结果短 TTL 缓存空值，或用布隆过滤器提前排除大部分不存在键。过滤器要跟随新增数据维护，避免新建记录被错误挡住。\n\n**追问 / 易错点：** 空值缓存有什么风险？新数据建立后旧空值仍有效，需要合理 TTL 或主动失效。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)；[X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N003",
        "N013",
        "N021",
        "N025",
        "N037",
        "N039",
        "N041",
        "X02",
        "X04",
        "X08",
        "NI002",
        "NI015"
      ],
      "keywords": [
        "Q07-015",
        "Redis",
        "字节跳动",
        "百度",
        "快手",
        "大疆",
        "腾讯",
        "京东",
        "BIGO",
        "拼多多",
        "综合",
        "美团",
        "招银网络科技"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-016",
      "number": "Q07-016",
      "question": "什么是缓存击穿？一个热点 key 失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n缓存击穿是某一个特别热的 key 失效，大量请求同时去数据库重建它。可以合并相同 key 的请求，让少数请求负责重建，其他限时等待或读允许的旧值。拿到重建权后还要再查一次缓存。\n\n**举个例子：**\n一万个请求同时查同一商品，不该每个人都查一次数据库；让一个人去查，再把结果共享给其他人。\n\n**深入补充（选读）：**\n极热 key 到期时，大量请求同时回源。可通过单飞合并/互斥重建、提前刷新或逻辑过期减少并发回源，并设置等待超时和失败降级。锁内重新检查缓存，避免排队线程再次重建；选逻辑过期时要明确允许读旧的业务边界。\n\n**追问 / 易错点：** 热点 key 永不过期就解决所有问题吗？仍有数据更新、节点故障、淘汰和热点集中问题。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N003",
        "N013",
        "N021",
        "N025",
        "N027",
        "N035",
        "N037",
        "N039",
        "N041",
        "X04",
        "X08",
        "NI001",
        "NI002",
        "NI015"
      ],
      "keywords": [
        "Q07-016",
        "Redis",
        "字节跳动",
        "百度",
        "快手",
        "大疆",
        "车300",
        "腾讯",
        "京东",
        "BIGO",
        "综合",
        "美团",
        "招银网络科技"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-017",
      "number": "Q07-017",
      "question": "什么是缓存雪崩？大量缓存同时失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n缓存雪崩是大量缓存一起失效，或缓存服务整体不可用，导致数据库突然承受巨量请求。过期时间加随机量只缓解同时到期，还需要限流、降级、分批预热和回源保护，才能处理整套缓存故障。\n\n**深入补充（选读）：**\n大量 key 同时失效或缓存集群不可用，导致数据库承受超量回源。可分散 TTL、分批预热、多级缓存，结合限流、熔断和降级保护数据库。随机 TTL 只缓解集中到期，无法解决整个集群宕机，因此必须有故障场景下的容量保护。\n\n**追问 / 易错点：** 缓存故障后能把所有请求直接打数据库吗？不能，需明确可承受回源流量上限。\n\n**面经线索：** [X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）](https://www.nowcoder.com/discuss/864594486704291840)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。",
      "sourceIds": [
        "N013",
        "N021",
        "N025",
        "N039",
        "N041",
        "X04",
        "X08",
        "NI002",
        "NI003",
        "NI015"
      ],
      "keywords": [
        "Q07-017",
        "Redis",
        "百度",
        "快手",
        "大疆",
        "京东",
        "BIGO",
        "综合",
        "美团",
        "招银网络科技",
        "腾讯"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-018",
      "number": "Q07-018",
      "question": "Cache Aside 的读取和写入流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nCache Aside 的读流程是先查缓存，没命中再查数据库并回填；写流程通常先提交数据库，再删除相关缓存，等下次读重建。它一般追求最终一致，不天然保证每次读都立即拿到最新值。\n\n**深入补充（选读）：**\n读先查缓存，未命中查数据库后回填；写通常先提交数据库，再使缓存失效，后续按需重建。它实现常见最终一致性而非天然强一致。并发读回填旧值、删除失败、副本延迟都要处理，关键查询可以走数据库或更强的版本约束。\n\n**追问 / 易错点：** 为什么通常删除而不是直接更新缓存？减少维护复杂查询视图的成本，但不是所有业务一律只能删除。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。",
      "sourceIds": [
        "N007",
        "X02"
      ],
      "keywords": [
        "Q07-018",
        "Redis",
        "腾讯",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-019",
      "number": "Q07-019",
      "question": "先更新数据库再删缓存就绝对一致了吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先更新数据库再删缓存，也存在旧数据回填、删缓存失败等窗口。可用可靠失效事件、重试、TTL、版本比较或按 key 协调减少问题。严格一致的查询要走权威数据源或更强协调，不能只靠延迟双删承诺绝对一致。\n\n**举个例子：**\n读线程刚读到旧值，写线程更新并删除缓存，读线程随后把旧值写回缓存，就又留下旧数据。\n\n**深入补充（选读）：**\n不是。读者先查到旧值，写者提交并删缓存后，读者可能再把旧值回填。删除失败也会留下旧缓存。可用短 TTL、版本检查、按 key 串行化、可靠失效消息及重试等降低窗口；严格一致需求要重新评估缓存使用方式。延迟双删同样没有脱离时序假设的绝对保证。\n\n**追问 / 易错点：** binlog 订阅有什么价值？可作为可靠失效链路的一部分，但也要处理延迟、重复与乱序。",
      "sourceIds": [
        "N002",
        "N026",
        "N027",
        "N031",
        "N037",
        "N041",
        "NI011",
        "NI024"
      ],
      "keywords": [
        "Q07-019",
        "Redis",
        "美团",
        "顺丰",
        "车300",
        "拼多多",
        "腾讯",
        "BIGO",
        "即时设计"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-020",
      "number": "Q07-020",
      "question": "如何确定缓存 TTL？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nTTL 按“数据多久变、最多允许旧多久、回源有多贵”来定，而不是全部设半小时。热点可提前刷新，过期时间适度打散，再观察命中率和回源压力调整。余额、权限等准确性要求高的数据不能随便读旧。\n\n**深入补充（选读）：**\n根据数据变化频率、容忍陈旧时间、回源成本和访问热度设计，必要时分层设置。热点可提前刷新，失败时在限定期限内返回旧值，TTL 加适量随机扰动。观察命中率、回源 QPS 与更新延迟后调整，不是所有 key 都设固定30分钟。\n\n**追问 / 易错点：** 金融余额等必须准确的值怎么缓存？把缓存定位为提示或加速，最终权威校验仍按强约束路径执行。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。",
      "sourceIds": [
        "N041",
        "X02"
      ],
      "keywords": [
        "Q07-020",
        "Redis",
        "BIGO",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-021",
      "number": "Q07-021",
      "question": "Redis 分布式锁最基本怎么写？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用 SET key 唯一标识 NX PX 超时 来原子加锁；成功才执行业务。释放时必须原子地判断标识仍是自己的，再删除，通常用 Lua。TTL 防止进程死后永久占锁，但也带来业务没做完锁却过期的风险。\n\n**举个例子：**\n锁值不能大家都写 1。A 超时后 B 拿到新锁，A 再直接 DEL 就可能把 B 的锁删掉。\n\n**深入补充（选读）：**\n用 SET key 随机唯一值 NX PX 超时 原子加锁，成功后执行业务。释放时在服务端原子比较 value 与自己的标识再删除，常用 Lua，不能先 GET 再 DEL。必须有过期避免持有者崩溃永久占锁，但过期时间本身又带来业务超时后多持有者重叠的风险。\n\n**追问 / 易错点：** 锁 value 为什么不能都写1？无法区分所有者，旧任务可能删掉新任务的锁。\n\n**原始资料核对 / 延伸查阅：** [R06 · Redis：Distributed Locks](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/)。\n\n**原章示例（移至对应题目）：**\n```text\nSET lock:order:123 <本次持有者唯一token> NX PX 10000\n```\n\n返回成功才获得锁；10秒仅为说明示例，不是适合所有业务的时长。\n\n释放使用服务端原子比较并删除（通用Lua形式）：\n\n```lua\nif redis.call('GET', KEYS[1]) == ARGV[1] then\n    return redis.call('DEL', KEYS[1])\nend\nreturn 0\n```\n\n脚本**只防误删别人的锁**，并不能阻止超时的旧持有者继续写数据库，也不能消除主从切换丢锁。关键副作用仍要唯一约束、版本校验或fencing。",
      "sourceIds": [
        "N012",
        "N025",
        "N037",
        "N040",
        "N054",
        "N055",
        "NI002",
        "NI004",
        "NI016"
      ],
      "keywords": [
        "Q07-021",
        "Redis",
        "XTransfer",
        "大疆",
        "腾讯",
        "帆软",
        "货拉拉",
        "网易",
        "招银网络科技",
        "滴滴"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-022",
      "number": "Q07-022",
      "question": "分布式锁已经过期，业务还在执行怎么办？续期能完全解决吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n可在租约到期前按持有者身份续期，但续期可能因网络或长暂停失败。旧任务此时可能仍继续写，所以关键操作还要数据库版本、唯一约束或 fencing token 保护。看门狗降低过期概率，不代表解决所有故障。\n\n**深入补充（选读）：**\n可按所有者条件续期并监控任务期限，但长 GC、网络隔离和续期失败仍会使旧任务继续执行而锁已被别人获得。关键写入需要数据库唯一/版本约束，或存储端校验递增 fencing token，拒绝过时持有者。看门狗减少过期风险，不是所有故障下的互斥证明。\n\n**追问 / 易错点：** 把 TTL 改成一天有什么问题？失败后恢复慢，而且仍无法证明最长业务时间。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [R06 · Redis：Distributed Locks](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/)。",
      "sourceIds": [
        "N013",
        "N035",
        "X02"
      ],
      "keywords": [
        "Q07-022",
        "Redis",
        "百度",
        "快手",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-023",
      "number": "Q07-023",
      "question": "Redis 锁遇到主从切换有什么风险？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n主库加锁成功但还没复制就宕机，新主上可能没有这把锁，另一个客户端又能加锁，出现两个持有者。单纯续期解决不了这种切主窗口。重要业务最终要靠资源端约束，而不只相信“我曾经拿到 Redis 锁”。\n\n**深入补充（选读）：**\n主节点收到加锁并响应后，锁可能尚未复制便故障；副本晋升后另一客户端能再次加锁，出现两个持有者。仅加重试和自动续期不能消除这个故障窗口。锁用于减少重复工作还是保护不可重复副作用，要求不同；后者需更强协调或资源端约束。\n\n**追问 / 易错点：** Redlock 能否一句话说绝对安全？不能，需说明时间、网络、故障模型和 fencing 等前提。\n\n**原始资料核对 / 延伸查阅：** [R04 · Redis：Replication](https://redis.io/docs/latest/operate/oss_and_stack/management/replication/)；[R06 · Redis：Distributed Locks](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/)。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q07-023",
        "Redis",
        "招银网络科技"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-024",
      "number": "Q07-024",
      "question": "Redis 事务、WATCH 和 Lua 有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nMULTI/EXEC 把一组命令排队后执行，WATCH 在执行前检测相关 key 是否变过；Lua 把判断和修改放到服务端一起执行。它们都不能简单等同数据库事务回滚：执行中报错，之前完成的写入可能还在。\n\n**深入补充（选读）：**\nMULTI/EXEC 把命令排队后顺序执行，但不提供数据库式自动回滚，某条执行错误不一定撤销前面命令。WATCH 做乐观并发检测，被监视键变化后 EXEC 可能失败。Lua 可在服务端原子组合操作，但原子性不等于执行报错会回滚已写内容；长脚本会阻塞其他工作。\n\n**追问 / 易错点：** Lua 能在脚本里随意调用外部 HTTP 吗？常规 Redis Lua 不能这样访问外部网络。\n\n**原始资料核对 / 延伸查阅：** [R07 · Redis：Transactions](https://redis.io/docs/latest/develop/using-commands/transactions/)。",
      "sourceIds": [
        "N023",
        "N026",
        "N040"
      ],
      "keywords": [
        "Q07-024",
        "Redis",
        "BIGO",
        "顺丰",
        "帆软"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-025",
      "number": "Q07-025",
      "question": "Pipeline 为什么能提高吞吐？它是不是事务？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nPipeline 是把多条命令一起发、一起收结果，减少网络往返，所以能提高吞吐。它是传输优化，不保证整批原子执行。批次太大也会占内存、拉长等待时间；读改写业务仍要用合适的原子机制。\n\n**深入补充（选读）：**\nPipeline 批量发送命令并批量读取响应，主要节省网络往返和系统调用，不保证整批命令互斥执行或事务原子性。批次太大会增加服务端响应缓冲、客户端内存和单批延迟；Cluster 还需按节点路由。适合独立命令批处理，不适合直接替代读改写原子逻辑。\n\n**追问 / 易错点：** Pipeline 与批量 MGET 完全一样吗？不是，一个是传输策略，一个是具体命令语义。",
      "sourceIds": [],
      "keywords": [
        "Q07-025",
        "Redis"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-026",
      "number": "Q07-026",
      "question": "big key 与 hot key 如何排查？",
      "category": "Redis",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nbig key 是“一个 key 的值太大或成员太多”，hot key 是“一个 key 被访问太频繁”。前者重在拆分、限大小和避免重操作，后者重在缓存、请求合并、分摊和限流。先看瓶颈是内存、CPU 还是带宽。\n\n**举个例子：**\n一个几十 MB 的列表是 big key；一个只有十几个字节却每秒访问很多次的计数器，也可以是 hot key。\n\n**深入补充（选读）：**\nbig key 是体积大或成员多，影响网络、删除和内存；hot key 是访问集中，可能压满单节点，即便值很小也会热点。结合采样扫描、命令/延迟统计、客户端指标与业务键分布定位，避免在线长时间用 KEYS 或重命令遍历全库。先明确是 CPU、带宽还是容量瓶颈。\n\n**追问 / 易错点：** 怎么治理？big key 拆分与限大小；hot key 本地缓存、请求合并或可接受的读副本分散。",
      "sourceIds": [
        "N003",
        "NI008"
      ],
      "keywords": [
        "Q07-026",
        "Redis",
        "字节跳动",
        "美团"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-027",
      "number": "Q07-027",
      "question": "SCAN 比 KEYS 好在哪里？UNLINK 呢？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nKEYS 一次扫描匹配键，大库上可能长时间阻塞；SCAN 分批迭代，单次压力更可控，但可能重复，也不是一致性快照。UNLINK 把部分内存释放工作放到后台，降低同步删除大对象的阻塞风险。\n\n**深入补充（选读）：**\nKEYS 一次扫描并返回匹配键，数据大时阻塞风险高。SCAN 以游标分批迭代，但不是一致性快照，可能重复、动态变更也会影响结果，需要去重和限速；COUNT 只是提示。UNLINK 把内存回收工作异步化，降低大对象同步删除的阻塞，不表示没有资源成本。\n\n**追问 / 易错点：** SCAN 返回游标0就一定这一批有数据吗？游标结束与结果条数要分别判断。\n\n**原始资料核对 / 延伸查阅：** [R08 · Redis：SCAN](https://redis.io/docs/latest/commands/scan/)。",
      "sourceIds": [],
      "keywords": [
        "Q07-027",
        "Redis"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-028",
      "number": "Q07-028",
      "question": "Redis 如何实现限流和排行榜？",
      "category": "Redis",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n限流时要把计数与过期设置一起原子完成，避免计数成功却没设 TTL；固定窗口可能有边界突刺，更平滑的需求可用滑动窗口或令牌桶。排行榜通常用 ZSet 更新分数、查名次，再明确同分规则和时间窗口。\n\n**深入补充（选读）：**\n计数限流需把计数与过期原子组合，避免 INCR 后没设置 TTL；固定窗口有边界突刺，滑动窗口或令牌桶可更平滑。排行榜通常用 ZSet 更新分数、查范围与名次，需定义同分、时间窗和热点键策略。分布式多实例要共享限额状态或分配额度。\n\n**追问 / 易错点：** 限流 Redis 不可用时放行还是拒绝？按接口价值和下游容量明确 fail-open/fail-closed。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原章示例（移至对应题目）：**\n```lua\nlocal count = redis.call('INCR', KEYS[1])\nif count == 1 then\n    redis.call('PEXPIRE', KEYS[1], ARGV[1])\nend\nreturn count\n```\n\n应用预先校验窗口时长为正且范围合理，再把返回计数与上限比较。本例是“首次请求开始计时的窗口”，仍有边界突刺；Lua运行中错误不提供数据库式回滚，不能把不合法TTL交给脚本后期待自动撤销INCR。",
      "sourceIds": [
        "N027",
        "X08"
      ],
      "keywords": [
        "Q07-028",
        "Redis",
        "车300",
        "美团"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-029",
      "number": "Q07-029",
      "question": "Redis Pub/Sub、List、Stream 能不能当 MQ？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nPub/Sub 像在线广播，断线期间的消息通常拿不回来；List 能做简单队列，但确认重试要自己补；Stream 有消息 ID、消费组和待确认记录，更适合可追踪消费。无论哪种，都要按实际持久化和故障语义设计。\n\n**深入补充（选读）：**\nPub/Sub 不提供离线积压和可靠消费确认，适合可丢通知；List 可做简单队列但确认、重试需补；Stream 有记录 ID、消费组、pending 等能力，更接近可追踪队列，但仍需处理 pending 回收、持久化和故障恢复。复杂可靠业务应比较专用 MQ 的成熟能力。\n\n**追问 / 易错点：** 只 XREADGROUP 收到就代表业务成功吗？不代表，完成业务后还要按设计确认并防重复。",
      "sourceIds": [],
      "keywords": [
        "Q07-029",
        "Redis"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q07-030",
      "number": "Q07-030",
      "question": "Redis 内存很高但 key 不多，怎么办？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nkey 少不代表占用小。要查值大小、对象编码、客户端缓冲、复制/AOF 缓冲、内存碎片和 fork 的额外占用。对比 used_memory 与 RSS，再用 MEMORY USAGE 等采样定位，别只看 DBSIZE 就判断内存正常。\n\n**深入补充（选读）：**\n检查 value 大小、对象编码、碎片率、复制/AOF 缓冲、客户端输出缓冲和 fork 写时复制等，而不是只看 DBSIZE。用 INFO memory、MEMORY USAGE 与业务采样分解开销；碎片治理可能涉及主动整理、升级或有计划重启，但必须先看真实内存压力及高可用条件。\n\n**追问 / 易错点：** used_memory 与进程 RSS 一样吗？不同，分配器碎片和其他进程内存会造成差距。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q07-030",
        "Redis",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md"
    },
    {
      "id": "bank-Q08-001",
      "number": "Q08-001",
      "question": "为什么使用 MQ？会引入什么代价？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nMQ 主要做三件事：解耦，让发送方不依赖所有下游；异步，先完成核心业务；削峰，把突发请求暂存起来慢慢处理。代价是消息可能重复、延迟、乱序，需要重试、幂等和监控。长期生产比消费快，MQ 也会堆满。\n\n**深入补充（选读）：**\nMQ 常用于解耦、异步和削峰，让生产者不必同步等待所有下游。代价是业务流程变成最终一致、错误定位更复杂，并需治理重复、顺序、积压和消息丢失。先说明同步接口的实际瓶颈，再判断是否需要 MQ；不是系统一加 MQ 就自然高并发。\n\n**追问 / 易错点：** 削峰能处理永远高于消费速度的流量吗？不能，长期入多出少仍会无限积压。",
      "sourceIds": [
        "N002",
        "N016",
        "N017",
        "N055",
        "NI008"
      ],
      "keywords": [
        "Q08-001",
        "消息队列 MQ",
        "美团",
        "拼多多",
        "滴滴",
        "网易"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-002",
      "number": "Q08-002",
      "question": "Kafka、RabbitMQ、RocketMQ 怎么选？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nKafka 更常用于高吞吐事件流和日志回放；RabbitMQ 强调灵活路由和工作队列；RocketMQ 常用于业务消息、事务消息和延时顺序场景。选型要说清自己的吞吐、延迟、顺序、可靠性和运维需求，而不是只说哪个最快。\n\n**深入补充（选读）：**\nKafka 常用于高吞吐日志流和可回放事件；RabbitMQ 提供丰富交换机路由、确认和工作队列能力；RocketMQ 常围绕业务消息、事务消息和延时/顺序能力使用。延迟、吞吐、运维、现有技术栈与具体版本都应实测比较，不能只背某产品“性能最好”。\n\n**追问 / 易错点：** 项目为什么选一种？说明消息规模、可靠性、路由/顺序需求和团队已有基础设施。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。",
      "sourceIds": [
        "N021",
        "N039",
        "N046",
        "X06",
        "NI017"
      ],
      "keywords": [
        "Q08-002",
        "消息队列 MQ",
        "快手",
        "京东",
        "美团",
        "好未来",
        "深轻科技"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-003",
      "number": "Q08-003",
      "question": "最多一次、至少一次、恰好一次交付分别意味着什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n最多一次：可能丢，但不靠重投补；至少一次：会重试，所以可能重复；恰好一次：必须说明保证到哪个边界。业务常采用“至少一次投递+幂等消费”，让消息可以多收，但同一业务结果只生效一次。\n\n**举个例子：**\n收到两次发货消息不一定有问题，真正要求的是同一个订单不能实际发两次货。\n\n**深入补充（选读）：**\n最多一次允许丢失但避免重投，至少一次通过重试避免部分丢失但可能重复，恰好一次必须限定在哪个处理边界实现。队列内部去重不等于向外部数据库写入只发生一次。多数业务采用至少一次交付加幂等消费，最终使同一业务效果只生效一次。\n\n**追问 / 易错点：** 网络超时是否表示消息没发出去？不表示，可能已存储但响应丢了。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-003",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-004",
      "number": "Q08-004",
      "question": "怎样保证消息尽量不丢？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n防消息丢失按三段检查：生产者确认发送结果并可靠重试；Broker 配好持久化和副本；消费者在业务落库成功后再 ACK 或提交位移。最后用对账发现缺口。只开一个持久化开关，不能保证整条链路可靠。\n\n**深入补充（选读）：**\n分三段：生产者使用确认、超时重试和必要的本地持久化；Broker 使用合适持久化与副本策略；消费者在业务持久提交后确认进度。每段仍要定义故障边界并监控重试与积压，关键链路再加业务对账和补偿。不能只说“开启持久化就永不丢”。\n\n**追问 / 易错点：** 先 ACK 再写数据库有什么风险？进程中途崩溃后消息不会再投，业务结果却没落地。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [M02 · RabbitMQ：Confirms and Acknowledgements](https://www.rabbitmq.com/docs/confirms)。",
      "sourceIds": [
        "N014",
        "N022",
        "N031",
        "N039",
        "N054",
        "N055",
        "X02"
      ],
      "keywords": [
        "Q08-004",
        "消息队列 MQ",
        "百度",
        "BIGO",
        "拼多多",
        "京东",
        "货拉拉",
        "网易"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-005",
      "number": "Q08-005",
      "question": "消息重复消费怎样处理？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n给消息一个稳定事件 ID，在同一数据库事务里完成“插入去重记录+业务修改”。重复事件命中唯一约束后，不再重复产生业务效果。数据库提交后再确认消息。不要先用 Redis 标成已消费，再慢慢写库。\n\n**举个例子：**\n扣款已经落库，但 ACK 前崩溃，消息会重来；去重记录和扣款同事务提交，重来时就知道已经处理过。\n\n**深入补充（选读）：**\n用稳定业务事件 ID 或业务唯一键去重，将去重记录与业务修改放同一个数据库事务。若去重记录已存在则核对已完成状态并返回。不能“先 Redis 标记已消费，再写库”，失败会误判完成；也不能写库成功后只依赖容易丢的短期缓存标记。\n\n**追问 / 易错点：** 消息有重复但业务结果不重复是否可以接受？通常正是至少一次加幂等的目标。\n\n**原章示例（移至对应题目）：**\n```text\nbegin database transaction\n  插入 processed_event(event_id)，event_id有唯一约束\n  若已存在：退出当前尝试，查询/确认已有业务完成状态\n  若首次：执行业务更新\ncommit database transaction\n确认MQ消息或推进连续已完成offset\n```\n\n去重记录和业务修改必须同事务成功。两个关键故障演练：\n\n1. 业务更新中途崩溃：事务回滚，重投后能够重新处理。\n2. 数据库提交后、MQ确认前崩溃：重投但唯一事件记录使业务不会再次生效。\n\n如果副作用是外部接口而不是本数据库，以上事务不能包住它，需要外部幂等键、持久状态和补偿/对账。",
      "sourceIds": [
        "N014",
        "N021",
        "N022",
        "N026",
        "N029",
        "N031",
        "N037",
        "N045",
        "NI003",
        "NI008",
        "NI020",
        "NI024"
      ],
      "keywords": [
        "Q08-005",
        "消息队列 MQ",
        "百度",
        "快手",
        "BIGO",
        "顺丰",
        "熙牛医疗",
        "拼多多",
        "腾讯",
        "字节跳动",
        "招银网络科技",
        "美团",
        "新蛋",
        "即时设计"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-006",
      "number": "Q08-006",
      "question": "消息顺序如何保证？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n先确定需要谁的顺序：通常只要求同一订单或用户内部有序。把相同业务 key 路由到同一分区/队列，再串行处理该 key；不同 key 可以并行。消息拿到的顺序，不等于开多线程后的完成顺序。\n\n**举个例子：**\n订单“创建→支付→发货”不能随意倒序；不同订单之间通常不必为了全局顺序一起排队。\n\n**深入补充（选读）：**\n先明确是全局顺序还是同一订单/用户内部顺序。常见做法按业务 key 固定到同一分区或顺序队列，同一 key 串行处理，失败不能让后续状态随意越过。不同 key 可以并行提升吞吐；多线程消费即使拉取有序，也可能完成乱序。\n\n**追问 / 易错点：** 全局有序为什么代价大？会压缩可并行处理能力，并使单个失败阻塞更多业务。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "N014",
        "N031",
        "N039",
        "X07",
        "NI001"
      ],
      "keywords": [
        "Q08-006",
        "消息队列 MQ",
        "百度",
        "拼多多",
        "京东",
        "腾讯",
        "招银网络科技"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-007",
      "number": "Q08-007",
      "question": "消息积压怎么排查和恢复？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n先看为什么积压：生产突然变多、消费变慢、反复失败，还是只有某个分区热点。下游有余量且有并行空间时才扩消费者；被数据库或顺序限制时，要先修瓶颈。恢复要限速、保幂等，不可直接跳过历史消息。\n\n**深入补充（选读）：**\n先看入队/出队速率、最老消息年龄、分区倾斜、消费者失败和下游耗时。若有可并行分区且下游有余量可扩消费者；若被数据库锁或热点阻塞，先修瓶颈。恢复时分批限速并保幂等，必要时隔离毒消息，不能直接跳过全部历史 offset。\n\n**追问 / 易错点：** 积压只看条数够吗？不够，消息大小、年龄、业务截止时间更能反映风险。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "N034",
        "N035",
        "N053",
        "X07"
      ],
      "keywords": [
        "Q08-007",
        "消息队列 MQ",
        "小米",
        "快手",
        "小鹅通",
        "腾讯"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-008",
      "number": "Q08-008",
      "question": "重试队列与死信队列有什么作用？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n临时故障进入有限重试，采用退避和抖动，别立刻反复轰炸下游。多次失败或确定格式错误的消息，进入死信/异常队列，保留原因并告警。死信队列还需要修复和受控回放，不是丢进去就不管。\n\n**深入补充（选读）：**\n瞬时错误可指数退避并加抖动，避免立即无限重投；达到次数或确认永久失败后转入死信/异常处理通道，保留原始消息、错误、次数和 traceId。死信不是最终垃圾桶，要有告警、修复与受控回放。重试必须遵守业务顺序和幂等条件。\n\n**追问 / 易错点：** 字段格式错误能不停重试吗？不能，通常是永久错误，应隔离并修正来源。",
      "sourceIds": [
        "N035"
      ],
      "keywords": [
        "Q08-008",
        "消息队列 MQ",
        "快手"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-009",
      "number": "Q08-009",
      "question": "延迟消息怎么实现？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n延迟消息是“到指定时间后允许处理”，可用 MQ 的对应功能，或用任务表扫描、时间轮等实现。到期不等于准点执行，消费积压还会延后。订单超时关闭必须重新检查当前状态，并有补偿扫描。\n\n**深入补充（选读）：**\n可以用产品原生延迟能力，或定时扫描到期任务、时间轮、延迟队列等。不同 MQ 的延迟语义与精度不同，不能把 RabbitMQ TTL、RocketMQ 定时消息和 Kafka 普通日志当完全一样的功能。到时只代表可以开始处理，消费积压仍可能使实际执行更晚。\n\n**追问 / 易错点：** 订单超时关闭能只靠延迟消息吗？还要核对当前订单状态，并有扫描兜底。",
      "sourceIds": [
        "N045"
      ],
      "keywords": [
        "Q08-009",
        "消息队列 MQ",
        "字节跳动"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-010",
      "number": "Q08-010",
      "question": "Outbox 模式怎样解决数据库和 MQ 双写？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nOutbox 是一张本地待发事件表。业务数据和事件在同一数据库事务里提交，后台再把事件发给 MQ。发成功后再标记，但中间崩溃可能造成重复，所以消费者仍需幂等。它主要解决“业务成功但消息没发”的双写窗口。\n\n**举个例子：**\n订单写入和“需要通知仓库”的事件一起保存。即使马上重启，后台也能从事件表继续发送。\n\n**深入补充（选读）：**\n在同一数据库事务里写业务变化与待发事件，事务提交后二者同时存在。投递器扫描或订阅 Outbox，向 MQ 发送并确认后标记。发送成功但标记前崩溃会重复，因此消费者仍需幂等。监控未发送年龄、重试次数和清理策略，防止本地事件表无限增长。\n\n**追问 / 易错点：** 先标记已发送再实际发送行吗？不行，中途崩溃会丢消息。",
      "sourceIds": [
        "NI008"
      ],
      "keywords": [
        "Q08-010",
        "消息队列 MQ",
        "美团"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-011",
      "number": "Q08-011",
      "question": "RocketMQ 事务消息如何工作？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nRocketMQ 事务消息先发暂不可见的半消息，再执行本地事务；本地成功就提交消息，失败就回滚消息。状态不明确时，Broker 回查生产者。回查必须看持久化业务事实，不能只依赖一个内存布尔值。\n\n**深入补充（选读）：**\n通常先发送暂不可投递的半消息，执行本地事务后提交或回滚消息状态；若状态不明，Broker 可回查生产者，本地事务结果决定最终可见性。它主要协调生产者本地事务与消息发布，不自动保证消费者数据库、第三方调用全链路强一致。\n\n**追问 / 易错点：** 回查应该依据什么？可持久查询的事务事实，不能依赖内存布尔值。\n\n**原始资料核对 / 延伸查阅：** [M03 · RocketMQ：Transaction Message](https://rocketmq.apache.org/docs/featureBehavior/04transactionmessage/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-011",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-012",
      "number": "Q08-012",
      "question": "Kafka 的 topic、partition、offset、consumer group 是什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nTopic 是消息主题，Partition 是主题下的有序日志分片，Offset 是该分片内的位置，Consumer Group 是一起分工消费的一组消费者。传统组内同一分区通常由一个消费者负责，不同组可以各自消费同一份日志。\n\n**举个例子：**\n一个主题 3 个分区，同组开 5 个消费者，通常有 2 个没有分区可处理；多开消费者不一定继续提速。\n\n**深入补充（选读）：**\nTopic 组织一类记录，partition 是有序追加日志单位，offset 是某分区内的位置，不是全局 ID。传统消费者组通过分区分配让组内消费者分担处理，不同组可独立消费同一 topic。分区数量影响并行度与运维开销，不能无限增加。\n\n**追问 / 易错点：** 同组消费者比一个 topic 的分区还多会怎样？在传统组语义下部分消费者可能没有分区可处理。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [
        "N006",
        "N014",
        "N034",
        "N042",
        "NI003",
        "NI015"
      ],
      "keywords": [
        "Q08-012",
        "消息队列 MQ",
        "美团",
        "百度",
        "小米",
        "招银网络科技",
        "腾讯"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-013",
      "number": "Q08-013",
      "question": "Kafka 为什么吞吐高？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nKafka 高吞吐主要来自顺序追加、批量处理、页缓存、压缩和分区并行，部分路径还有零拷贝优化。不是因为“消息完全不落盘”。批量越大可能吞吐更好，但等攒批也可能增加单条延迟。\n\n**深入补充（选读）：**\n常见原因是顺序追加、批量网络与磁盘操作、页缓存、压缩和分区并行，部分传输路径可利用零拷贝减少复制。不是“所有消息都只在内存所以快”。批次大小、等待时间、压缩 CPU 与端到端延迟需权衡，小流量也不一定能达到宣传峰值。\n\n**追问 / 易错点：** 高吞吐和低单条延迟必然一致吗？不一定，批量等待可能增加单条延迟。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [
        "X06",
        "NI003"
      ],
      "keywords": [
        "Q08-013",
        "消息队列 MQ",
        "好未来",
        "招银网络科技"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-014",
      "number": "Q08-014",
      "question": "Kafka 的 acks=all 就绝对不丢吗？ISR 和最小副本数怎样配合？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nacks 决定生产者等谁确认：0 不等，1 等 leader，all 等当前符合协议的同步副本。ISR 是跟得上的副本集合，min.insync.replicas 配合 acks=all 限制可写所需的同步副本下限。all 不是无条件等所有配置副本。\n\n**深入补充（选读）：**\nacks=0 不等响应，1 等 leader 确认，all 等符合协议的同步副本确认；ISR 是跟得上的副本集合。min.insync.replicas 配合 acks=all 限制可写时的同步副本下限，不能把 all 理解成“无论状态等全部配置副本”。副本数、ISR 变化与失败容忍要共同设计。\n\n**追问 / 易错点：** acks=all 但 ISR 只剩一个有什么风险？若最小 ISR 允许1，仍可能只在单副本确认。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-014",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-015",
      "number": "Q08-015",
      "question": "Kafka 生产者幂等与事务保证什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nKafka 生产者幂等主要防同一发送链路重试产生重复；Kafka 事务可协调其边界内的多分区写入和消费位移。它们不会自动让外部 MySQL 更新或支付接口也只执行一次。外部副作用仍要业务幂等键和事务设计。\n\n**深入补充（选读）：**\n生产者幂等通过生产者身份、序号等减少同一发送链路重试造成的重复；事务支持多个分区写入及消费位移等在 Kafka 边界内原子提交。消费者还需正确隔离级别读取已提交结果。重新构造业务消息、写外部 MySQL 或调用支付，不自动受到同样恰好一次保护。\n\n**追问 / 易错点：** 开启 enable.idempotence 就不需要业务唯一键吗？仍需要，保障层次不同。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-015",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-016",
      "number": "Q08-016",
      "question": "Kafka 什么时候提交 offset？多线程处理为什么不能跳过未完成消息？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先把业务持久处理成功，再提交已连续完成的位移。处理完却没提交就崩溃，会重复，需要幂等；先提交再处理就崩溃，可能漏做。并行处理时，不能让后完成的高位移越过前面未完成的消息。\n\n**举个例子：**\noffset 10 还没完成、11 已完成，不能直接提交到 12，否则重启后可能跳过没做完的 10。\n\n**深入补充（选读）：**\n先完成业务持久操作，再推进已完成的连续位移范围，以避免“位移已过但业务没做”。业务成功后提交前崩溃会重放，所以需要幂等。并行处理时不能看到后面的任务完成就越过前面未完成记录提交。Kafka 提交的通常是下一条要读取的位置。\n\n**追问 / 易错点：** 自动提交一定安全或一定丢消息吗？都不能绝对化，要结合 poll、处理线程模型和提交时机。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-016",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-017",
      "number": "Q08-017",
      "question": "Kafka Rebalance 的原因和影响？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nRebalance 是消费者组重新分配分区，常因消费者加入、退出、失败或分区变化触发。它可能暂停部分处理并导致重投。要控制处理耗时、及时 poll/心跳，并在分区撤销时处理好在途任务和位移。\n\n**深入补充（选读）：**\n消费者加入、离开、失败或订阅/分区变化会触发分配调整，期间可能暂停部分处理并出现重投。控制单批处理时间，正确 poll 和心跳，按版本评估静态成员、协作式分配等方案。撤销分区时处理在途任务和位移，避免旧消费者继续写造成乱序。\n\n**追问 / 易错点：** 为什么“心跳正常”也可能失去分区？消费循环时限等配置也影响组成员有效性。",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q08-017",
        "消息队列 MQ",
        "招银网络科技"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-018",
      "number": "Q08-018",
      "question": "Kafka retention、compaction 和消费确认有什么关系？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nKafka 通常按时间或大小保留日志，不是消费者确认后就删。消费者位移只表示自己读到哪里，所以保留期内可以回放。Compaction 按 key 清理历史版本，用于保留状态变化后的有效记录，也不是瞬间清完所有旧值。\n\n**深入补充（选读）：**\nKafka 日志通常按保留时长/大小清理，不是消费者 ACK 就删除所有对应消息。Compaction 针对 key 保留最终状态相关记录，适合变更流等，并非立刻删除所有旧版本。保留期短于消费停顿时间时，未消费数据也可能已被清理。\n\n**追问 / 易错点：** 为什么消费完还能重新读？日志保留与消费者位移是分开的。\n\n**原始资料核对 / 延伸查阅：** [M01 · Kafka 4.1：Design](https://kafka.apache.org/41/design/design/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-018",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-019",
      "number": "Q08-019",
      "question": "Kafka 的 ZooKeeper 和 KRaft 有何区别？4.x 还需要 ZooKeeper 吗？",
      "category": "消息队列 MQ",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "**直接回答：**\n旧 Kafka 常用 ZooKeeper 管理协调信息；KRaft 改由 Kafka 自己的控制器维护元数据。Kafka 4.x 已不再支持 ZooKeeper 模式。回答时先说明项目版本，不能继续概括“Kafka 必须搭 ZooKeeper”。\n\n**深入补充（选读）：**\n旧 Kafka 常使用 ZooKeeper 管理元数据协调，较新版本采用 KRaft 由 Kafka 自身的控制器仲裁集群维护元数据；Kafka 4.x 已不再支持 ZooKeeper 模式。面试时先说明项目版本，别把“Kafka 必须配 ZooKeeper”当现状。迁移还涉及控制器、仲裁与配置变更。\n\n**追问 / 易错点：** KRaft 是否就是业务消息分区的消费协议？不是，主要讨论集群元数据管理。\n\n**原始资料核对 / 延伸查阅：** [M05 · Kafka 4.1：KRaft vs ZooKeeper](https://kafka.apache.org/41/getting-started/zk2kraft/)。",
      "sourceIds": [],
      "keywords": [
        "Q08-019",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-020",
      "number": "Q08-020",
      "question": "RabbitMQ 的 exchange、queue、binding、routing key？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n生产者先把消息发到 Exchange，交换机按 Binding 和 Routing Key 路由到 Queue，消费者再从队列取。Direct 精确匹配，Topic 按模式匹配，Fanout 广播，Headers 按头匹配。发到交换机不代表一定路由进目标队列。\n\n**深入补充（选读）：**\n生产者把消息发到 exchange，根据其类型和 binding 规则路由到 queue，消费者从 queue 消费。Direct 常精确匹配，Topic 支持模式匹配，Fanout 广播到绑定队列，Headers 根据头条件路由。发到 exchange 成功不代表消息一定路由到想要的队列。\n\n**追问 / 易错点：** 一个消息能进多个队列吗？可以，取决于交换机与绑定规则。",
      "sourceIds": [
        "NI020"
      ],
      "keywords": [
        "Q08-020",
        "消息队列 MQ",
        "新蛋"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-021",
      "number": "Q08-021",
      "question": "RabbitMQ publisher confirm 与 consumer ACK 的区别？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nPublisher Confirm 回答生产者“Broker 是否接收处理了发布”；Consumer ACK 回答 Broker“消费者是否完成了这次交付”。前者不代表下游业务已经成功。还要单独处理无法路由的消息，不能只看发送调用没报错。\n\n**深入补充（选读）：**\nPublisher confirm 告诉生产者 Broker 对发布的接收处理结果，consumer ACK 告诉 Broker 某次交付已由消费者处理。二者独立：发布确认不代表消费者业务成功。还要处理无法路由情况，如 mandatory 返回，并使用合适队列持久与消息持久配置。\n\n**追问 / 易错点：** 收到 publish confirm 就能标订单业务完成吗？不能，它只对应发布阶段。\n\n**原始资料核对 / 延伸查阅：** [M02 · RabbitMQ：Confirms and Acknowledgements](https://www.rabbitmq.com/docs/confirms)。",
      "sourceIds": [],
      "keywords": [
        "Q08-021",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-022",
      "number": "Q08-022",
      "question": "RabbitMQ durable、persistent、quorum queue 各是什么？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\ndurable 主要让队列等定义重启后保留；persistent 是消息的持久化属性；quorum queue 是带复制仲裁能力的队列。它们作用不同，通常还要配合发布确认，才符合预期可靠性。队列持久不等于所有消息自动持久。\n\n**深入补充（选读）：**\ndurable 通常用于队列等元数据重启后保留，persistent 是消息持久化属性，quorum queue 提供基于复制仲裁的队列能力。需要组合确认和相应配置才形成预期保障；不能以“队列持久化”推导所有消息都持久，也不能把旧经典镜像队列当新版本默认推荐。\n\n**追问 / 易错点：** 为什么还需要确认？网络错误时生产者无法仅凭发起发送确认 Broker 已安全接收。\n\n**原始资料核对 / 延伸查阅：** [M04 · RabbitMQ：Quorum Queues](https://www.rabbitmq.com/docs/quorum-queues)。",
      "sourceIds": [],
      "keywords": [
        "Q08-022",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-023",
      "number": "Q08-023",
      "question": "prefetch 如何影响消费者吞吐和公平性？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nprefetch 控制可以提前交给消费者、但还没确认的消息数，不是线程数。值大能减少等待，也可能让慢消费者囤积大量消息；值小更利于分配和控制内存，但吞吐可能受影响。需要按处理速度和下游容量测试。\n\n**深入补充（选读）：**\nprefetch 限制消费者或通道未确认交付数量，值大可减少等待并提高批量处理效率，但慢消费者可能囤积消息，增加内存和恢复重投规模。处理时间差异大时适当减小有利于工作分配，最终按吞吐、延迟和下游并发压测确定。\n\n**追问 / 易错点：** prefetch=100 就会有100线程吗？不是，交付上限和业务执行线程数不同。\n\n**原始资料核对 / 延伸查阅：** [M02 · RabbitMQ：Confirms and Acknowledgements](https://www.rabbitmq.com/docs/confirms)。",
      "sourceIds": [],
      "keywords": [
        "Q08-023",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-024",
      "number": "Q08-024",
      "question": "消息格式如何演进且兼容老消费者？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n消息是长期契约，应包含事件 ID、版本、业务 key、时间和明确载荷。兼容更新优先新增可选字段，消费者容忍未知字段；改变原字段含义要特别谨慎。旧消息可能被回放，所以不能只保证新代码能读新格式。\n\n**深入补充（选读）：**\n明确事件名、版本、事件 ID、业务 key、时间和载荷，优先兼容式新增字段，消费者容忍未知字段并验证必需项。变更字段含义比改名称更危险；破坏性变更可用新版本事件并灰度切换。不要直接把内部数据库实体序列化当长期协议。\n\n**追问 / 易错点：** 回放旧消息为什么易出错？当前代码可能不再理解旧格式或其业务状态已变化。",
      "sourceIds": [],
      "keywords": [
        "Q08-024",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q08-025",
      "number": "Q08-025",
      "question": "MQ 系统需要监控和压测哪些指标？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n监控不仅看消息条数，还要看发布失败、确认延迟、消费速度、最老消息年龄、重试死信和副本磁盘状态。压测要包含消费者暂停、重启和回放，并核对业务结果，不能只看 MQ 每秒吞吐多少。\n\n**深入补充（选读）：**\n监控发布失败、确认延迟、消费速率、积压年龄、重试/死信、重复率、分区倾斜和 Broker 磁盘/副本状态。压测覆盖正常峰值、消费暂停、节点失败和恢复回放，检查业务结果而不只看消息吞吐。容量要预估故障期间可保留的消息量。\n\n**追问 / 易错点：** 怎样证明“不丢不重业务效果”？对比输入事件集合与持久业务结果并进行故障注入验证。",
      "sourceIds": [],
      "keywords": [
        "Q08-025",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md"
    },
    {
      "id": "bank-Q09-001",
      "number": "Q09-001",
      "question": "输入 URL 到页面或接口返回发生什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n输入 URL 后，通常先查 DNS 找地址，按需要建立连接，HTTPS 再做 TLS 握手，然后发 HTTP 请求。请求经过代理、网关和应用处理后返回，浏览器再解析渲染。缓存和连接可能复用，HTTP/3 也不走普通 TCP 握手路线。\n\n**深入补充（选读）：**\n解析 URL，按需要查询 DNS，建立到目标或代理的连接，HTTPS 进行 TLS 握手，再发送 HTTP 请求。请求可能经过 CDN、负载均衡、网关和应用，应用访问数据源后返回，浏览器再解析渲染。DNS/连接/缓存可复用，HTTP/3 使用 QUIC，不能每次都强制套 TCP 新建连接流程。\n\n**追问 / 易错点：** 排查慢在哪要分哪些耗时？DNS、建连、TLS、首字节、响应传输和服务端处理。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。",
      "sourceIds": [
        "N002",
        "N003",
        "N023",
        "N056",
        "X06",
        "NI006",
        "NI011",
        "NI015",
        "NI024"
      ],
      "keywords": [
        "Q09-001",
        "计算机网络",
        "美团",
        "字节跳动",
        "BIGO",
        "阿里",
        "好未来",
        "携程",
        "腾讯",
        "即时设计"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-002",
      "number": "Q09-002",
      "question": "OSI 七层与 TCP/IP 怎么对应？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nOSI 七层从下往上是物理、链路、网络、传输、会话、表示、应用；TCP/IP 通常简化成链路、网际、传输、应用。记核心职责：IP 找网络地址，TCP/UDP 做传输，HTTP/DNS 定义应用交互，端口区分传输端点。\n\n**深入补充（选读）：**\nOSI 常分物理、数据链路、网络、传输、会话、表示、应用七层；实际互联网常用链路、网际、传输、应用等 TCP/IP 抽象。IP 负责跨网络寻址路由，TCP/UDP 提供传输能力，HTTP/DNS 等是应用协议。模型帮助分层定位，不要求真实软件严格一层一程序。\n\n**追问 / 易错点：** MAC、IP、端口分别标识什么？链路接口、网络地址和主机上的传输端点等。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q09-002",
        "计算机网络",
        "BIGO"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-003",
      "number": "Q09-003",
      "question": "TCP 与 UDP 的区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nTCP 提供连接、可靠、有序的字节流，会处理重传和流量拥塞控制；UDP 直接传数据报，不内建同样的可靠有序保证，但保留报文边界。应用可以在 UDP 上再实现可靠协议，不能把 UDP 上的所有应用都叫不可靠。\n\n**深入补充（选读）：**\nTCP 提供有连接、可靠、有序字节流，包含重传、流量与拥塞控制等；UDP 提供数据报传输，不内建同样的可靠顺序保障，开销较小且保留报文边界。应用可在 UDP 之上实现可靠协议，如 QUIC，因此不能说“基于 UDP 的应用一定不可靠”。\n\n**追问 / 易错点：** 视频一定用 UDP、文件一定用 TCP 吗？不是绝对，取决于上层协议与场景。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N021",
        "N025",
        "N037",
        "N054",
        "X07",
        "NI015"
      ],
      "keywords": [
        "Q09-003",
        "计算机网络",
        "快手",
        "大疆",
        "腾讯",
        "货拉拉"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-004",
      "number": "Q09-004",
      "question": "TCP 为什么三次握手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n三次握手按 SYN→SYN+ACK→ACK 记。双方要交换并确认各自初始序号，第三次让服务端知道自己的序号已被对方确认，也帮助避免历史重复连接请求造成错误连接。不是只为简单“测试三次收发能力”。\n\n**举个例子：**\n客户端：我要连接，序号是 x；服务端：收到 x，我的序号是 y；客户端：收到 y。此时双方才完成这轮序号确认。\n\n**深入补充（选读）：**\n双方需要交换并确认初始序号及连接状态，典型过程 SYN、SYN+ACK、ACK。第三次确认让服务端知道自己发送的序号被对端接收，降低旧重复连接请求造成错误状态的风险。不能仅解释成“验证三次收发能力”，要关联序号同步和历史报文。\n\n**追问 / 易错点：** 第三次 ACK 能带数据吗？协议允许，具体发送行为看实现。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)；[X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N021",
        "N032",
        "N036",
        "N037",
        "N042",
        "N054",
        "X02",
        "X07",
        "NI009"
      ],
      "keywords": [
        "Q09-004",
        "计算机网络",
        "快手",
        "招银云创",
        "腾讯",
        "美团",
        "货拉拉",
        "拼多多"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-005",
      "number": "Q09-005",
      "question": "TCP 为什么通常四次挥手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nTCP 的两个发送方向可以独立关闭。一方 FIN 表示“我不再发”，对方先 ACK；对方还有数据就继续发，结束后再 FIN，最后得到 ACK，因此通常四次。若合适，ACK 和 FIN 也能合并。\n\n**举个例子：**\nA 说“我的话说完了”，不代表 B 也说完了，所以确认对方结束和宣布自己结束可能是两步。\n\n**深入补充（选读）：**\nTCP 是双向字节流，双方方向可以独立关闭。一方发送 FIN 表示不再发送数据，对方先 ACK，待自己也结束再发 FIN，最后由原方 ACK。确认对方关闭与本端关闭可能不是同一时刻，因此常见四段；条件合适时 ACK 和 FIN 可合并。\n\n**追问 / 易错点：** 收到 FIN 后还能发数据吗？另一方向尚未关闭时可以。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)；[X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N036",
        "N042",
        "X02",
        "X07",
        "NI011"
      ],
      "keywords": [
        "Q09-005",
        "计算机网络",
        "腾讯",
        "美团",
        "拼多多",
        "BIGO"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-006",
      "number": "Q09-006",
      "question": "TIME_WAIT 与 CLOSE_WAIT 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nTIME_WAIT 通常出现在主动关闭方，用来处理最后 ACK 丢失和旧报文影响；CLOSE_WAIT 表示已收到对方 FIN，但本地应用还没关闭。大量 CLOSE_WAIT 先查连接有没有正确关，大量 TIME_WAIT 先看短连接和端口压力。\n\n**深入补充（选读）：**\nTIME_WAIT 常由主动关闭的一端进入，等待旧报文消退并能应对最终 ACK 丢失后的 FIN 重传；CLOSE_WAIT 表示已收到对端关闭但本应用尚未关闭本端。大量 CLOSE_WAIT 优先排查连接/流未正确关闭，TIME_WAIT 多则结合短连接频率、端口与连接复用判断。\n\n**追问 / 易错点：** 看到 TIME_WAIT 就该调内核参数吗？先分析请求模式和是否真正资源不足。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N023",
        "X02",
        "NI011"
      ],
      "keywords": [
        "Q09-006",
        "计算机网络",
        "BIGO",
        "拼多多"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-007",
      "number": "Q09-007",
      "question": "TCP 怎么保证可靠和有序？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nTCP 用序号、确认、校验和、重传、重排和去重，尽量保证字节按序可靠到达。但“字节到达”不等于“业务已经成功”，网络超时也不等于服务器没做。应用仍需幂等和结果查询。\n\n**举个例子：**\n订单已保存，只是响应在路上丢了；客户端重试可能重复下单，不能指望 TCP 自动替业务去重。\n\n**深入补充（选读）：**\n使用序号和确认跟踪数据，校验和检测部分传输错误，超时或重复确认等触发重传，接收端重排与去重后按序交付字节流。可靠传输不等于业务已成功处理：连接断开前服务器可能已经写库，所以应用层仍需幂等和结果查询。\n\n**追问 / 易错点：** 客户端超时后重试下单为什么可能重复？原请求可能已完成，只是响应没到。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N003",
        "N007"
      ],
      "keywords": [
        "Q09-007",
        "计算机网络",
        "字节跳动",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-008",
      "number": "Q09-008",
      "question": "TCP 滑动窗口、流量控制、拥塞控制分别防什么问题？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n滑动窗口让发送方不用每发一点就等一次确认。流量控制照顾接收方，别让对方缓冲区装不下；拥塞控制照顾网络，别把传输路径塞满。实际发送量要同时考虑接收窗口和拥塞窗口。\n\n**深入补充（选读）：**\n滑动窗口允许多个数据段在确认前在途，提高利用率。流量控制依据接收端能力限制发送，避免接收缓冲耗尽；拥塞控制根据网络拥塞信号调节发送，避免压垮路径。实际可发送量受接收窗口与拥塞窗口等共同约束，不能把二者当同一机制。\n\n**追问 / 易错点：** 接收端很快是否就能无限加速发送？不能，中间网络仍可能拥塞。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N032",
        "NI015"
      ],
      "keywords": [
        "Q09-008",
        "计算机网络",
        "招银云创",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-009",
      "number": "Q09-009",
      "question": "TCP 粘包和拆包是什么？怎么解决？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nTCP 传的是连续字节，没有“每次 write 就对应一次 read”的保证。一次读取可能只有半条消息，也可能包含多条。应用必须定义消息边界，例如固定长度、分隔符或长度头，并缓存不完整部分。\n\n**举个例子：**\n发送 \"hello\" 和 \"world\" 两次，接收方可能一次读到 \"helloworld\"，也可能分成多次；这是字节流的正常行为。\n\n**深入补充（选读）：**\nTCP 只提供字节流，不保留应用 write 的消息边界，一次 read 可能得到半条或多条消息。应用协议应使用固定长度、分隔符加转义、长度字段等方式解码，并保留未完整部分等待下一次读取。不是 TCP 把正确消息“弄坏”，而是应用没有定义或正确解析边界。\n\n**追问 / 易错点：** 有长度头还要做什么？验证长度上限、处理不完整帧、防止异常长度导致内存耗尽。\n\n**原始资料核对 / 延伸查阅：** [N01 · RFC 9293：TCP](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "sourceIds": [
        "N055"
      ],
      "keywords": [
        "Q09-009",
        "计算机网络",
        "网易"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-010",
      "number": "Q09-010",
      "question": "HTTP 常见方法与幂等性怎么理解？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nGET/HEAD 主要用于安全读取；PUT/DELETE 按语义应幂等，重复请求不会继续改变预期资源效果；POST 通常不保证，PATCH 要看具体操作。幂等不是每次响应一样，而是重复操作后的预期资源效果相同。\n\n**举个例子：**\n第一次 DELETE 返回 200，第二次返回 404，资源最终都不存在，仍可满足幂等语义。\n\n**深入补充（选读）：**\nGET/HEAD 设计为安全读取，PUT/DELETE 等具有协议语义上的幂等性，POST 通常不保证幂等，PATCH 取决于具体补丁语义。幂等指重复相同请求的预期资源效果相同，不要求每次状态码相同，也不保证实现没有日志等附带效果。业务 POST 可用幂等键实现可重试。\n\n**追问 / 易错点：** DELETE 第一次200第二次404还可能幂等吗？可以，资源最终都处于已删除状态。\n\n**原始资料核对 / 延伸查阅：** [N02 · RFC 9110：HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)。",
      "sourceIds": [],
      "keywords": [
        "Q09-010",
        "计算机网络"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-011",
      "number": "Q09-011",
      "question": "常见 HTTP 状态码是什么意思？401/403、502/504 怎样区分？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n状态码先记大类：2xx 成功，3xx 重定向或缓存协商，4xx 请求相关问题，5xx 服务端或网关问题。常考 400 参数、401 未认证、403 无权限、404 不存在、409 冲突、429 限流、500 内部错误、502 上游异常、503 不可用、504 网关等上游超时。\n\n**深入补充（选读）：**\n2xx 成功，3xx 重定向/缓存协商，4xx 请求方相关问题，5xx 服务端或网关失败。重点区分 400 参数问题、401 认证不足、403 禁止、404 不存在、409 冲突、429 限流、500 应用错误、502 上游响应异常、503 不可用、504 网关等上游超时。\n\n**追问 / 易错点：** 接口失败都返回200有什么代价？网关、监控和通用客户端难以正确识别失败语义。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [N02 · RFC 9110：HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q09-011",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-012",
      "number": "Q09-012",
      "question": "HTTP 强缓存与协商缓存是什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n强缓存是在有效期内直接用本地副本；协商缓存是先问服务器“这份还能用吗”，没变则返回 304。常用 Cache-Control、ETag 和 Last-Modified。no-cache 不是不许保存，而是复用前要验证；no-store 才是不应存储。\n\n**深入补充（选读）：**\n新鲜度缓存依据 Cache-Control 等决定是否直接复用；需要验证时可发送 If-None-Match/If-Modified-Since，服务器确认未变更则返回304。ETag 是表示版本标识，不要求一定是文件 MD5。涉及用户数据要正确设置私有缓存与 Vary，避免共享缓存串用户。\n\n**追问 / 易错点：** no-cache 与 no-store 区别？前者通常要求复用前验证，后者要求不存储。\n\n**原始资料核对 / 延伸查阅：** [N04 · RFC 9111：HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html)。",
      "sourceIds": [],
      "keywords": [
        "Q09-012",
        "计算机网络"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-013",
      "number": "Q09-013",
      "question": "HTTP/1.1、HTTP/2、HTTP/3 有何变化？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nHTTP/1.1 可以复用连接；HTTP/2 加入二进制分帧、多路复用和头压缩，但底层 TCP 丢包仍会影响多个流；HTTP/3 基于 QUIC，减少这类跨流传输阻塞。协议更先进，不代表数据库和业务代码就自动变快。\n\n**深入补充（选读）：**\nHTTP/1.1 支持持久连接但同连接请求响应处理仍有局限；HTTP/2 用二进制分帧、多路复用和头压缩，不过同一 TCP 丢包可能影响多个流。HTTP/3 基于 QUIC，减少传输层跨流队头阻塞并支持连接迁移等。版本升级不自动解决应用慢 SQL。\n\n**追问 / 易错点：** HTTP/2 有多路复用就完全没有队头阻塞吗？不能忽略底层 TCP 的影响。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [N05 · RFC 9114：HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html)。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q09-013",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-014",
      "number": "Q09-014",
      "question": "HTTPS 与 TLS 保护什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nHTTPS 是 HTTP 加 TLS。TLS 主要保护传输的机密性、完整性和身份认证：证书帮助确认身份，握手建立密钥，正文通常用对称加密。不是所有数据都直接用服务器公钥加密，也不保证网站业务本身可靠。\n\n**深入补充（选读）：**\nTLS 对传输提供加密、完整性与身份认证相关保障。证书验证服务器身份，握手协商密钥，后续业务数据通常使用对称加密。HTTPS 不自动保证服务器业务正确，也不能隐藏所有网络元数据。不能把 HTTPS 概括成“所有数据都用服务器公钥加密”。\n\n**追问 / 易错点：** 为什么不用非对称加密所有正文？性能和协议设计上通常使用混合机制。\n\n**原始资料核对 / 延伸查阅：** [N03 · RFC 8446：TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8446)。",
      "sourceIds": [
        "N033",
        "N036",
        "NI001",
        "NI003",
        "NI014"
      ],
      "keywords": [
        "Q09-014",
        "计算机网络",
        "同程",
        "腾讯",
        "招银网络科技"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-015",
      "number": "Q09-015",
      "question": "TLS 握手、证书链与前向保密怎么解释？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nTLS 握手要协商参数、验证证书和域名、完成密钥交换，之后用会话密钥通信。临时密钥交换可提供前向保密，避免长期私钥后来泄露就直接解开过去会话。TLS 1.3 与旧版流程不同，0-RTT 还要考虑重放风险。\n\n**深入补充（选读）：**\n客户端与服务器协商参数并验证证书链、域名和有效期，通过密钥交换形成会话密钥。TLS 1.3 精简流程并使用现代机制，临时密钥交换有助于前向保密，使长期私钥以后泄露不必然解密历史会话。握手细节要标 TLS 版本，不照搬旧 RSA 密钥交换到1.3。\n\n**追问 / 易错点：** 0-RTT 有什么注意点？重放风险，不能随意承载有副作用且不可重放的业务操作。\n\n**原始资料核对 / 延伸查阅：** [N03 · RFC 8446：TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8446)。",
      "sourceIds": [
        "N016",
        "N023",
        "N036",
        "N041",
        "NI021"
      ],
      "keywords": [
        "Q09-015",
        "计算机网络",
        "拼多多",
        "BIGO",
        "腾讯",
        "阿里"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-016",
      "number": "Q09-016",
      "question": "DNS、CDN、负载均衡各起什么作用？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nDNS 负责把域名解析成地址等记录，CDN 把内容放到更靠近用户的节点，负载均衡把请求分配给后端实例。四层常按传输连接信息转发，七层能按 HTTP 路径或请求头路由。DNS 改动还受缓存影响。\n\n**深入补充（选读）：**\nDNS 把名称解析到地址等记录，并可缓存；CDN 把内容分发到更接近用户的边缘；负载均衡把请求分配到后端实例。DNS 缓存与 TTL 会影响切流生效速度，CDN 还要考虑缓存失效。四层按连接传输信息转发，七层可根据 HTTP 路径或头等路由。\n\n**追问 / 易错点：** DNS 改完为什么部分用户仍去旧地址？多级缓存和连接复用等影响。",
      "sourceIds": [
        "N016",
        "N021",
        "N038",
        "NI003"
      ],
      "keywords": [
        "Q09-016",
        "计算机网络",
        "拼多多",
        "快手",
        "百度",
        "招银网络科技"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-017",
      "number": "Q09-017",
      "question": "Cookie、Session、Token、JWT 的关系？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCookie 是浏览器保存并自动携带数据的机制；Session 是服务端保存会话状态；Token 是访问凭证的统称；JWT 是一种令牌格式。常见签名 JWT 能验证内容没被改，但内容通常可读，不是自动加密。\n\n**举个例子：**\nCookie 可以存 Session ID，也能承载某种令牌。它和 Session/Token 不处于同一个概念层次。\n\n**深入补充（选读）：**\nCookie 是浏览器保存并按规则发送的数据机制；Session 通常把登录状态放服务端，以会话 ID 关联；Token 是访问凭证的统称；JWT 是一种声明格式，常见签名 JWT 可验证完整性，但内容通常可解码并非自动加密。选型还要处理过期、撤销、跨端和权限变化。\n\n**追问 / 易错点：** JWT 无状态就不需要服务端任何状态吗？撤销、刷新和设备管理等可能仍需状态。",
      "sourceIds": [
        "N028",
        "N041",
        "N046",
        "N052",
        "N053",
        "NI009"
      ],
      "keywords": [
        "Q09-017",
        "计算机网络",
        "熙牛医疗",
        "BIGO",
        "美团",
        "快手",
        "小鹅通",
        "拼多多"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-018",
      "number": "Q09-018",
      "question": "CORS、CSRF、XSS 分别是什么？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCORS 管浏览器是否允许网页跨源读取响应；CSRF 是借浏览器自动带凭证来诱导操作；XSS 是把不可信内容当脚本执行。防法分别涉及跨源规则、CSRF token/SameSite、输出编码等，不能用“允许跨域”一起解决。\n\n**深入补充（选读）：**\nCORS 是浏览器跨源读取响应的控制机制，不是服务器接口鉴权；CSRF 利用浏览器自动附带凭证诱发操作，可用 SameSite、CSRF token 等防护；XSS 是不可信内容被当脚本执行，需正确输出编码和内容策略等。三者机制不同，不能靠“允许跨域”解决所有问题。\n\n**追问 / 易错点：** 后端允许任意 Origin 再带凭证合理吗？应按可信来源精确配置并独立鉴权。",
      "sourceIds": [
        "N038"
      ],
      "keywords": [
        "Q09-018",
        "计算机网络",
        "百度"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-019",
      "number": "Q09-019",
      "question": "HTTP Keep-Alive 与 TCP keepalive 是一回事吗？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nHTTP Keep-Alive 是复用连接来处理多个请求，省去重复建连；TCP keepalive 是探测空闲连接是否还活着。应用心跳又是另一层，能检查业务是否正常响应。三者不能混为同一个超时开关。\n\n**深入补充（选读）：**\nHTTP 持久连接用于多个请求复用连接，减少建连和 TLS 开销；TCP keepalive 是对空闲连接的探测机制，发现对端或路径可能失效。连接池还涉及最大空闲时长与生命周期，服务端和代理超时不一致会造成复用已失效连接。\n\n**追问 / 易错点：** 业务心跳还能有价值吗？可以检测应用层活性，不只是内核连接是否存在。",
      "sourceIds": [],
      "keywords": [
        "Q09-019",
        "计算机网络"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-020",
      "number": "Q09-020",
      "question": "长轮询、SSE 和 WebSocket 有什么区别？流式回答怎么选？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n长轮询是服务端等有消息再响应，客户端随后再发请求；SSE 是服务端向浏览器持续单向推事件；WebSocket 是持续双向通信。AI 文本输出常适合 SSE，需要双向实时控制时可选 WebSocket。恢复历史仍要服务端支持。\n\n**深入补充（选读）：**\n长轮询由服务端延迟一次响应，完成后客户端再发请求；SSE 适合服务端到浏览器的单向事件流，可利用事件 ID 重连；WebSocket 建立持续双向消息通道。聊天生成流式返回常可用 SSE，实时双向控制可用 WebSocket，均需心跳、鉴权、断线重连和背压。\n\n**追问 / 易错点：** SSE 断线后会自动恢复所有业务内容吗？需服务端保存可重放事件并处理 Last-Event-ID。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**原始资料核对 / 延伸查阅：** [N06 · WHATWG：Server-sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)。",
      "sourceIds": [
        "N022",
        "N038",
        "X08",
        "NI004",
        "NI011",
        "NI017"
      ],
      "keywords": [
        "Q09-020",
        "计算机网络",
        "BIGO",
        "百度",
        "美团",
        "招银网络科技",
        "深轻科技"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-021",
      "number": "Q09-021",
      "question": "一次 RPC 与普通 HTTP 调用有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nRPC 是“调用远程服务方法”的交互方式，HTTP 是一种应用层协议，RPC 可以基于 HTTP，所以二者不是对立选项。RPC 还需要契约、序列化、超时和服务治理；网络调用必须处理结果未知和部分失败。\n\n**深入补充（选读）：**\nRPC 强调像调用服务方法一样调用远程能力，通常涉及契约、序列化、服务发现、超时和治理；HTTP 是可作为传输基础的应用协议，二者不是完全对立。gRPC 使用 HTTP/2 等机制，其他 RPC 也可用自定义协议。跨网络调用必须处理部分失败，不能按本地方法假设。\n\n**追问 / 易错点：** 为什么 RPC 要设置 deadline？让整条调用链有时间预算，防止各层独立超时无限累加。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q09-021",
        "计算机网络",
        "得物"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-022",
      "number": "Q09-022",
      "question": "Netty 的 Reactor 模型是什么？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nReactor 用事件循环等 IO 就绪，再调用相应处理逻辑。Netty 常由 Boss 接连接、Worker 处理连接事件。一个 EventLoop 管多条连接，因此不能在上面长时间查数据库或做重计算，否则会一起拖慢其他连接。\n\n**深入补充（选读）：**\nReactor 用事件循环监听就绪事件并分发处理，Netty 常用 Boss 接收连接、Worker 处理连接上的 IO 与 pipeline 事件。一个 EventLoop 可管理多条连接，不能在上面执行长时间阻塞数据库或复杂计算，否则会拖慢它负责的多个连接。业务耗时工作需合适地转移执行。\n\n**追问 / 易错点：** 从业务线程返回结果为什么要关注线程模型？保持通道状态和回调顺序，避免破坏有序处理。\n\n**原始资料核对 / 延伸查阅：** [N07 · Linux man-pages：epoll(7)](https://man7.org/linux/man-pages/man7/epoll.7.html)。",
      "sourceIds": [
        "N055"
      ],
      "keywords": [
        "Q09-022",
        "计算机网络",
        "网易"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-023",
      "number": "Q09-023",
      "question": "零拷贝是什么？sendfile 与 mmap 怎么理解？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n零拷贝通常是尽量减少用户态与内核态之间的数据复制，不是物理上完全没有复制。sendfile 可用于文件到 socket 的适用传输路径，mmap 是把文件映射到地址空间。是否获益还要看 TLS、平台和具体实现。\n\n**深入补充（选读）：**\n零拷贝通常指减少用户态/内核态数据复制和上下文切换，不是全链路真的零次复制。sendfile 可在适用路径内从文件向 socket 传输，mmap 将文件映射到地址空间。是否受益取决于文件、网络、TLS 与实现路径，不能保证所有 Java IO 自动零拷贝。\n\n**追问 / 易错点：** TLS 场景还会有额外处理吗？加密可能改变可用路径和复制成本。",
      "sourceIds": [
        "N055",
        "NI009"
      ],
      "keywords": [
        "Q09-023",
        "计算机网络",
        "网易",
        "拼多多"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-024",
      "number": "Q09-024",
      "question": "连接失败、连接超时、读超时怎么排查？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n连接拒绝，先查服务是否监听正确地址和端口；连接超时，查网络、路由、防火墙及负载；读超时，查连接建立后对方处理或传输为什么慢。结合日志和分阶段耗时，不要只用 ping 通就断言接口正常。\n\n**深入补充（选读）：**\n连接拒绝常查端口是否监听、目标地址和代理；连接超时查网络、路由、防火墙和服务负载；读取超时则可能已建连但对端处理或传输慢。结合 curl 分阶段耗时、ss、DNS 结果、服务日志和 trace 对齐。ping 通不代表业务端口或 HTTPS 一定通。\n\n**追问 / 易错点：** 偶发超时能直接归咎网络吗？不能，还需连接池等待、GC、线程池和下游诊断。\n\n**原章示例（移至对应题目）：**\n```bash\ncurl -o /dev/null -sS --connect-timeout 3 --max-time 10 \\\n  -w 'dns=%{time_namelookup} connect=%{time_connect} tls=%{time_appconnect} first_byte=%{time_starttransfer} total=%{time_total}\\n' \\\n  https://example.com\n```\n\n这些多数是**从请求开始算的累计时间点**，不是互相独立的阶段时长。粗略阶段成本需相减，并考虑连接复用、代理、重定向与协议差异。目标域名是演示入口，实际排错替换成已授权的业务接口。",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q09-024",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q09-025",
      "number": "Q09-025",
      "question": "重试、超时、熔断怎么配合？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先给整次请求设总时间预算，再分配各层超时；只对可恢复且满足幂等要求的失败做有限重试；连续异常时熔断，恢复时小流量试探。各层都重试会放大流量，必须明确由哪一层负责。\n\n**举个例子：**\n三层每层最多尝试 3 次，最坏可能放大成 27 次下游调用，不是简单多了 3 次。\n\n**深入补充（选读）：**\n先定义整体时间预算，再给各跳合理超时；只对可恢复且幂等的失败有限重试，采用退避和抖动。连续失败时熔断减少继续施压，半开小流量探测恢复。多层都重试会乘法放大请求量，应指定重试责任层并传播取消。\n\n**追问 / 易错点：** 超时越长成功率一定越高吗？长等待可能耗尽线程和连接，导致整体雪崩。",
      "sourceIds": [
        "N031",
        "N048"
      ],
      "keywords": [
        "Q09-025",
        "计算机网络",
        "拼多多",
        "熙牛医疗"
      ],
      "sourceFile": "09_计算机网络.md"
    },
    {
      "id": "bank-Q10-001",
      "number": "Q10-001",
      "question": "用户态与内核态为什么分开？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用户态是普通应用运行的受限环境，内核态可以操作内存管理、设备等特权资源。应用通过系统调用受控地请求内核服务。这样能隔离错误和保护系统，但切换和数据处理也会有成本。\n\n**深入补充（选读）：**\n硬件和操作系统把普通应用与特权资源操作隔离，应用不能任意修改页表或访问设备。系统调用让程序受控进入内核完成 IO 等操作，中断和异常也可能引起切换。切换有开销，但不能把所有耗时都归因于“用了系统调用”，批量与缓存通常更关键。\n\n**追问 / 易错点：** 用户态线程和内核线程是简单同义词吗？不是，用户态调度机制与内核调度实体需要区分。",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q10-001",
        "操作系统 / Linux",
        "拼多多"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-002",
      "number": "Q10-002",
      "question": "进程与线程共享哪些资源？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n同一进程里的线程通常共享地址空间、堆和打开的文件描述符；每个线程有自己的栈、寄存器和执行状态。不同进程通常有独立地址空间，通信要靠 IPC。线程轻一些，但共享状态出错容易影响整个进程。\n\n**深入补充（选读）：**\n同进程线程通常共享地址空间、打开的文件描述符等，每个线程保有执行栈、寄存器上下文和线程局部状态。进程之间通常拥有独立虚拟地址空间，可通过 IPC 协作。线程创建更轻但错误隔离弱，一个线程破坏共享状态可能影响整个进程。\n\n**追问 / 易错点：** 多线程为什么还需各自栈？各自的方法调用和局部执行状态不同。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [L01 · Linux man-pages：pthreads(7)](https://man7.org/linux/man-pages/man7/pthreads.7.html)。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q10-002",
        "操作系统 / Linux",
        "拼多多"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-003",
      "number": "Q10-003",
      "question": "上下文切换保存什么？什么时候代价高？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n上下文切换是让出 CPU 前保存当前执行状态，再恢复另一个任务的状态。要保存寄存器、栈指针等，进程切换还可能影响地址转换缓存。切换太频繁会耗 CPU 和破坏缓存命中，所以线程数并非越多越好。\n\n**深入补充（选读）：**\n调度切换保存与恢复寄存器、栈指针等执行状态，进程间还可能影响地址空间和 TLB 等缓存。频繁切换会消耗 CPU 并损害缓存局部性；大量阻塞线程、锁竞争和过度并行都可能造成。测量切换数量要结合 CPU、吞吐和等待原因，而非越少越好。\n\n**追问 / 易错点：** 线程数很高、CPU不高却慢，可能是什么？等待资源、调度或锁队列造成延迟。",
      "sourceIds": [
        "N039"
      ],
      "keywords": [
        "Q10-003",
        "操作系统 / Linux",
        "京东"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-004",
      "number": "Q10-004",
      "question": "常见 IPC 方式与选择？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n进程通信常见有管道、消息队列、共享内存、信号和 socket。共享内存少复制，但必须自己协调并发；socket 可以同机或跨机器；信号适合有限通知。选型先看消息边界、数据规模和是否跨主机。\n\n**深入补充（选读）：**\n管道适合字节流传递，消息队列传递离散消息，共享内存减少数据复制但需同步，信号用于有限异步通知，socket 可本地或跨网络通信。选择看数据规模、边界、可靠性和跨主机需求。共享内存不是写进去就自动有正确并发顺序。\n\n**追问 / 易错点：** Unix domain socket 有什么特点？适合同机进程通信，不必走完整远程网络路径。",
      "sourceIds": [
        "N003",
        "NI015"
      ],
      "keywords": [
        "Q10-004",
        "操作系统 / Linux",
        "字节跳动",
        "腾讯"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-005",
      "number": "Q10-005",
      "question": "进程调度、时间片、抢占是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n调度就是决定下一刻让哪个可运行任务用 CPU。时间片让任务轮流运行，抢占允许系统暂停当前任务、换别人执行。sleep 时间到了只是有机会被调度，不保证立即执行；业务优先级还需要应用层队列和资源隔离。\n\n**深入补充（选读）：**\n调度器在可运行任务间分配 CPU，抢占允许中断当前执行，把机会给其他任务。调度策略兼顾公平、延迟和吞吐，实时策略与普通策略不同。业务高优先级不能仅靠提升 nice 或开更多线程实现，还需应用队列、隔离与资源配额。\n\n**追问 / 易错点：** sleep 到期就马上运行吗？只是变得可被调度，仍需等待 CPU。",
      "sourceIds": [],
      "keywords": [
        "Q10-005",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-006",
      "number": "Q10-006",
      "question": "虚拟内存为什么存在？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n虚拟内存让每个进程看到自己的地址空间，操作系统再把虚拟地址映射到物理内存或其他后备存储。它便于隔离和按需分配。申请了很大地址范围，不代表已经占用同样多物理内存，要看驻留量等指标。\n\n**深入补充（选读）：**\n每个进程看到自己的虚拟地址空间，页表把虚拟页映射到物理页或相应后备存储，支持隔离、按需分配、共享映射等。虚拟地址空间大不等于物理内存真实占用大；RSS 等指标更接近驻留情况，但也需考虑共享页和容器记账。\n\n**追问 / 易错点：** Java -Xmx 是整个进程内存上限吗？不是，只约束堆上限，其他内存另占。",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q10-006",
        "操作系统 / Linux",
        "腾讯"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-007",
      "number": "Q10-007",
      "question": "页表、TLB、缺页中断怎样配合？缺页一定是错误吗？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n页是内存管理的基本分块，页表记录虚拟页到物理页的映射，TLB 缓存常用映射。访问的页尚未就绪时会触发缺页处理，可能只是分配一页，也可能需要磁盘 IO。缺页不一定是程序错误。\n\n**深入补充（选读）：**\n分页按固定大小页管理映射，页表记录转换和权限，TLB 缓存近期地址转换。访问缺少有效驻留映射的页会触发缺页处理，可能只需分配/映射，也可能需要磁盘读取；因此缺页不总是严重错误。访问非法地址则可能导致进程收到错误信号。\n\n**追问 / 易错点：** minor fault 与 major fault 的区别？通常是否需要磁盘 IO 是重要区分。",
      "sourceIds": [],
      "keywords": [
        "Q10-007",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-008",
      "number": "Q10-008",
      "question": "内存碎片、伙伴系统、slab 怎么理解？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n内部碎片是“分给你的一块空间里没用完”，外部碎片是“空闲空间总量够，但分得太散”。Linux 伙伴系统管理页块，slab 类机制复用内核对象。应用还可能有分配器碎片，所以 RSS 高不一定全是 Java 对象泄漏。\n\n**深入补充（选读）：**\n外部碎片是可用空间分散、难满足连续分配，内部碎片是分配块中未用部分。Linux 伙伴系统管理页级块，slab 系列分配器帮助复用内核对象。应用还受用户态分配器碎片影响，Redis 或 JVM 进程 RSS 偏大不一定都是 Java 对象泄漏。\n\n**追问 / 易错点：** 有很多空闲内存为什么仍可能分配失败？连续性、配额、地址空间或特定资源限制都可能影响。",
      "sourceIds": [],
      "keywords": [
        "Q10-008",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-009",
      "number": "Q10-009",
      "question": "fork、exec、写时复制的区别？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nfork 创建子进程，父子最初可以共享物理页，写入时再复制，这叫写时复制；exec 是把当前进程换成另一个程序，不是再创建一个进程。fork 不会立即完整复制所有数据，但仍有页表和后续复制成本。\n\n**深入补充（选读）：**\nfork 创建子进程，起初可共享物理页并采用写时复制，某方修改页时再复制；exec 用新程序替换当前进程映像，而不是再多创建一个进程。fork 不等于立即完整复制全部内存，但页表复制与后续 COW 仍有成本。\n\n**追问 / 易错点：** Redis 后台持久化为何可能瞬时多占内存？父进程写入触发原共享页复制。\n\n**原始资料核对 / 延伸查阅：** [L03 · Linux man-pages：fork(2)](https://man7.org/linux/man-pages/man2/fork.2.html)。",
      "sourceIds": [],
      "keywords": [
        "Q10-009",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-010",
      "number": "Q10-010",
      "question": "阻塞 IO、非阻塞 IO、IO 多路复用如何区分？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n阻塞 IO 没数据时可以等着；非阻塞 IO 没数据时立即返回，让你稍后重试；IO 多路复用让一个线程同时等多个描述符，哪个就绪就处理哪个。就绪通知不是读取已经自动完成，应用还得真正 read/write。\n\n**深入补充（选读）：**\n阻塞 read 可等待数据；非阻塞模式在暂不可读时立即报告稍后重试；多路复用通过 select/poll/epoll 等统一等多个描述符就绪，减少一连接一线程的要求。就绪不是异步完成，应用仍需执行读写并正确处理部分读写。\n\n**追问 / 易错点：** 反复 nonblocking read 空轮询好不好？会耗 CPU，应配合就绪通知。\n\n**原始资料核对 / 延伸查阅：** [L02 · Linux man-pages：epoll(7)](https://man7.org/linux/man-pages/man7/epoll.7.html)。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q10-010",
        "操作系统 / Linux",
        "BIGO"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-011",
      "number": "Q10-011",
      "question": "select、poll、epoll 的差异？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nselect、poll 每轮都要处理传入的关注集合；epoll 在内核维护关注集合，并返回就绪事件，适合连接很多而活跃较少的情况。epoll 不是在任何场景都 O(1)、都最快，实际工作量还取决于活跃事件数。\n\n**深入补充（选读）：**\nselect 用描述符集合且常见实现有 FD_SETSIZE 约束，poll 用数组描述事件，二者每轮需要处理传入集合。epoll 维护关注集合并返回就绪事件，适合大量连接但少数活跃的场景。它不是任何负载下永远 O(1) 或永远更快，活跃数量、事件处理和调用方式也影响成本。\n\n**追问 / 易错点：** 一万个连接都活跃时业务处理成本会消失吗？不会，应用仍需逐个处理实际事件。\n\n**原始资料核对 / 延伸查阅：** [L02 · Linux man-pages：epoll(7)](https://man7.org/linux/man-pages/man7/epoll.7.html)。",
      "sourceIds": [
        "N003",
        "N021",
        "N023"
      ],
      "keywords": [
        "Q10-011",
        "操作系统 / Linux",
        "字节跳动",
        "快手",
        "BIGO"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-012",
      "number": "Q10-012",
      "question": "epoll 的 LT、ET 有什么区别？ET 为什么常要读到 EAGAIN？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nLT 是条件还满足就可以继续通知；ET 主要在状态变化时通知。所以 ET 通常配非阻塞 IO，收到事件后持续读写到 EAGAIN，避免剩下数据却等不到下一次通知。LT 更容易写对，ET 不等于天然更快。\n\n**深入补充（选读）：**\nLT 在条件仍满足时可继续报告，较易正确使用；ET 主要报告状态变化，通常配非阻塞 IO，收到事件后循环读写直到 EAGAIN 等条件，否则可能剩数据却不再收到期望通知。ET 不自动让业务更快，正确性和单连接公平性也要处理。\n\n**追问 / 易错点：** 读到0表示什么？对流 socket 常表示对端有序关闭读取方向相关状态，而非“暂时没数据”。\n\n**原始资料核对 / 延伸查阅：** [L02 · Linux man-pages：epoll(7)](https://man7.org/linux/man-pages/man7/epoll.7.html)。",
      "sourceIds": [],
      "keywords": [
        "Q10-012",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-013",
      "number": "Q10-013",
      "question": "文件描述符、inode、软链接和硬链接？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n文件描述符是进程用来访问文件、socket 等资源的编号；inode 保存文件元信息；硬链接是同一个文件的多个目录入口；软链接保存另一个路径。删除文件名不一定让已经打开的文件描述符失效。\n\n**深入补充（选读）：**\n文件描述符是进程引用打开文件/套接字等对象的整数句柄；inode 保存文件元数据并关联数据存储；硬链接是同一 inode 的不同目录项，软链接保存目标路径，可跨文件系统但目标可能失效。文件名与打开文件描述符分离，重命名或删目录项不一定让已打开句柄失效。\n\n**追问 / 易错点：** 为什么不能随意给目录创建硬链接？会破坏目录树管理等约束，普通接口通常禁止。",
      "sourceIds": [],
      "keywords": [
        "Q10-013",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-014",
      "number": "Q10-014",
      "question": "文件删除后磁盘空间为什么没释放？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n文件被删掉后，如果进程还开着它，磁盘空间可能要等最后一个引用关闭才释放。日志文件最常见。可用 lsof +L1 查谁持有，再让应用正确关闭或重新打开日志，不是多执行几次 rm。\n\n**举个例子：**\n你删了大日志文件，但 Java 进程还在往原打开句柄写，df 看到的空间就可能没有立刻回来。\n\n**深入补充（选读）：**\n若进程仍持有已删除文件的打开引用，数据块可能要等最后引用关闭才释放，日志文件常见。可用 lsof +L1 等找持有者，让应用按正确方式关闭或重新打开日志。仅重复 rm 没用，盲目截断打开文件还可能影响业务和证据。\n\n**追问 / 易错点：** 日志轮转为什么要配合应用？应用需要切换写入新文件，不能只改文件名假设它自动跟随。",
      "sourceIds": [],
      "keywords": [
        "Q10-014",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-015",
      "number": "Q10-015",
      "question": "Page Cache、buffered IO 与 fsync 是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nPage Cache 是内核的文件页缓存。write 成功可能只是数据进入缓存，不代表已经稳定落盘；fsync 请求同步相应数据。文件缓存占用大可能是正常可回收缓存，不要看到内存 used 高就立即清缓存。\n\n**深入补充（选读）：**\n普通文件 IO 常通过内核页缓存，write 成功可能只是写到缓存而非稳定存储。fsync 用于请求把相关数据与必要元信息同步，实际耐久性仍依赖存储栈。高缓存占用可能是可回收文件页，不等于应用泄漏，不能每次看到 used 高就清缓存。\n\n**追问 / 易错点：** 为什么掉电可能丢已 write 的数据？缺少对应持久化保证。\n\n**原始资料核对 / 延伸查阅：** [L04 · Linux man-pages：fsync(2)](https://man7.org/linux/man-pages/man2/fsync.2.html)。",
      "sourceIds": [],
      "keywords": [
        "Q10-015",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-016",
      "number": "Q10-016",
      "question": "僵尸进程与孤儿进程是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n僵尸进程是子进程已结束，但父进程还没收取退出状态；孤儿进程是父进程先结束，子进程由相应机制接管。僵尸本身已经不在运行，不能靠再杀它解决，应让父进程正确 wait/reap。\n\n**深入补充（选读）：**\n僵尸是子进程已退出但父进程尚未读取退出状态，保留少量内核记录；孤儿是父进程先退出，之后由相应机制接管。僵尸不能靠杀已退出的子进程解决，应让父进程正确 wait/reap 或处理父进程。大量僵尸会消耗进程表等资源。\n\n**追问 / 易错点：** 父进程忽略退出管理有什么风险？长期积累僵尸，最终影响新进程创建。",
      "sourceIds": [],
      "keywords": [
        "Q10-016",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-017",
      "number": "Q10-017",
      "question": "CPU 使用率、load average、iowait 分别反映什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCPU 使用率看处理器多忙；load average 看可运行和部分不可中断等待任务的负担；iowait 反映某些 IO 等待相关时间。高 load 不等于 CPU 一定满，可能许多任务在等磁盘。必须结合多项指标判断。\n\n**深入补充（选读）：**\nCPU 高表示处理器忙，但需区分 user、system 等；load 包含可运行和部分不可中断等待任务，不等于 CPU 百分比；iowait 与 IO 等待相关，也不能单独精确定位设备瓶颈。结合 top、vmstat、pidstat、iostat 和业务指标判断，不能只看一个数字。\n\n**追问 / 易错点：** load 很高但 CPU 低常见什么原因？大量不可中断 IO 等待等情况。",
      "sourceIds": [],
      "keywords": [
        "Q10-017",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-018",
      "number": "Q10-018",
      "question": "排查端口占用与网络连接常用什么命令？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先用 ss -lntp 看哪个进程监听端口，ss -antp 看连接状态，也可用 lsof -i 定位。再检查监听的是 127.0.0.1 还是对外地址，以及容器映射、防火墙和代理。只看到进程启动，不等于端口对外可达。\n\n**深入补充（选读）：**\n用 ss -lntp 查看 TCP 监听与进程信息，ss -antp 看连接状态，lsof -i 可从文件句柄角度定位。再确认监听地址是127.0.0.1还是对外地址、目标端口、容器映射与代理规则。命令能看到多少进程信息受权限限制。\n\n**追问 / 易错点：** 服务只监听 localhost 为什么别的机器连不上？它没有绑定对外可达接口。",
      "sourceIds": [],
      "keywords": [
        "Q10-018",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-019",
      "number": "Q10-019",
      "question": "如何看日志并定位某一次失败请求？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先拿失败时间、traceId 或业务单号缩小范围，再搜索对应日志，查看前后上下文，沿调用链找到第一次异常或失败码。tail -F 适合持续跟踪会轮转的文件；只搜 Exception 可能漏掉业务失败。\n\n**深入补充（选读）：**\n先用 traceId、业务 ID 和时间窗口缩小范围，rg/grep 搜错误，再向前后看上下文，必要时关联多个服务日志。tail -F 适合跟踪可能轮转的日志，journalctl 适合系统服务日志。不要仅搜索 Exception，因为业务失败可能记录为错误码或超时指标。\n\n**追问 / 易错点：** 多台机器时间不一致怎么办？统一时间同步和时区，跨服务优先用 trace 关联。",
      "sourceIds": [],
      "keywords": [
        "Q10-019",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-020",
      "number": "Q10-020",
      "question": "磁盘满了从哪里查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n磁盘满先看 df -h 的容量，再看 df -i 的 inode；用 du 找大目录，检查日志、临时文件和已删除但仍打开的文件。先确认哪些能清理并保留故障证据，不要盲删数据库或全部日志。\n\n**深入补充（选读）：**\ndf -h 看文件系统容量，df -i 看 inode，du 按目录看实际占用，再检查已删除但仍打开文件、日志、临时文件和容器层。先止住异常增长和保留关键证据，再按保留策略清理。磁盘满可能导致日志、数据库和持久化同时失败，应观察依赖恢复。\n\n**追问 / 易错点：** df 有空间但创建小文件失败可能为什么？inode 耗尽、配额或权限等问题。",
      "sourceIds": [],
      "keywords": [
        "Q10-020",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-021",
      "number": "Q10-021",
      "question": "权限 755、644、umask 分别表示什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n权限分属主、组、其他用户三组，r=4、w=2、x=1。755 是属主可读写执行，其他可读执行；644 是属主可读写，其他只读。目录的 x 表示能进入/穿越路径，遇到权限问题不应直接改 777。\n\n**深入补充（选读）：**\n权限按属主、组、其他用户分别组合 r=4、w=2、x=1；755 常表示属主可读写执行，其他可读执行；644 常用于普通数据文件。目录的 x 表示可穿越访问，不能简单等同执行文件。umask 从默认请求权限中屏蔽部分位。\n\n**追问 / 易错点：** 遇到 Permission denied 就 chmod 777 合理吗？先确定用户、目录权限、挂载和真实所需权限。",
      "sourceIds": [],
      "keywords": [
        "Q10-021",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-022",
      "number": "Q10-022",
      "question": "kill -15 与 kill -9 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nkill -15 发送 SIGTERM，请应用自行结束，可以做清理；kill -9 发送 SIGKILL，应用无法捕获，也来不及执行清理钩子。通常先停止流量并请求优雅关闭，再按明确策略处理超时未退出的进程。\n\n**深入补充（选读）：**\nSIGTERM 是可处理的终止请求，应用可执行清理和优雅下线；SIGKILL 无法被捕获，内核强制结束，应用清理钩子不会运行。通常先停止流量并 TERM，超过明确期限再视现场处理。仅因为名字叫 kill 并不代表所有信号都立即杀进程。\n\n**追问 / 易错点：** JVM shutdown hook 会在 kill -9 下运行吗？不会。\n\n**原始资料核对 / 延伸查阅：** [L06 · Linux man-pages：signal(7)](https://man7.org/linux/man-pages/man7/signal.7.html)。",
      "sourceIds": [],
      "keywords": [
        "Q10-022",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-023",
      "number": "Q10-023",
      "question": "nohup、后台运行、systemd 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n& 只是放到后台；nohup 主要减少终端挂断对进程的影响；systemd 才是完整服务管理，能管理启动、停止、重启和日志。长期服务不能只看命令返回，要确认进程、端口、日志和健康接口。\n\n**深入补充（选读）：**\n命令后的 & 放后台，但不自动提供可靠服务管理；nohup 主要处理终端挂断影响和默认输出；systemd 提供启动、重启策略、日志、依赖和停止等管理。长期服务应有可观测启动与退出状态，不只看 nohup 命令有没有返回。\n\n**追问 / 易错点：** 启动后端口没开该看什么？进程是否存活、启动日志、配置、工作目录、依赖与端口冲突。",
      "sourceIds": [],
      "keywords": [
        "Q10-023",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-024",
      "number": "Q10-024",
      "question": "容器与虚拟机的区别？cgroup、namespace 做什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n容器通常共享宿主内核，用 namespace 隔离看到的资源，用 cgroup 限制资源用量；虚拟机通常有自己的客户操作系统内核。容器不是一台无限资源的独立机器，Java 的内存和线程池配置要按实际配额评估。\n\n**深入补充（选读）：**\n容器常共享宿主内核，通过 namespace 隔离可见资源，通过 cgroup 约束 CPU、内存等；虚拟机通常运行独立客户内核并由虚拟化层管理。容器隔离不等于完全独立物理机器，容器内看到的可用 CPU 与内存应与实际配额核对。\n\n**追问 / 易错点：** Java 线程池为什么不能只按宿主CPU数设置？容器配额可能远小于宿主总核心数。\n\n**原始资料核对 / 延伸查阅：** [L05 · Linux man-pages：cgroups(7)](https://man7.org/linux/man-pages/man7/cgroups.7.html)。",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q10-024",
        "操作系统 / Linux",
        "BIGO"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q10-025",
      "number": "Q10-025",
      "question": "Linux OOMKill、ulimit、文件句柄不足怎么排查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n进程突然消失，先看系统/容器事件是否 OOMKill；报 Too many open files，查句柄上限和泄漏；建不了线程，查线程数量、系统限额和本地内存。提高上限只能暂时增加容量，不能修复资源一直不释放。\n\n**深入补充（选读）：**\n进程消失先看退出状态、系统/容器事件与内核日志，确认是否内存配额触发 OOMKill；Too many open files 查 ulimit 和实际 fd 数并追踪泄漏；无法创建线程还要看线程/进程限制与本地内存。提高上限只是容量调整，资源泄漏仍需修复。\n\n**追问 / 易错点：** OOMKill 与 Java heap OOM 为什么不同？一个可由内核直接终止进程，一个是 JVM 报告分配失败。\n\n**原始资料核对 / 延伸查阅：** [L05 · Linux man-pages：cgroups(7)](https://man7.org/linux/man-pages/man7/cgroups.7.html)。",
      "sourceIds": [],
      "keywords": [
        "Q10-025",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md"
    },
    {
      "id": "bank-Q11-001",
      "number": "Q11-001",
      "question": "接口从100ms变成2s，如何排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先确认从什么时候开始、哪些请求变慢、是否刚发布。再沿 trace 把耗时拆成排队、业务计算、SQL、缓存和第三方调用，找到新增的主要耗时。影响用户时先限流、降级或回滚，同时保留现场，不要一上来加线程。\n\n**深入补充（选读）：**\n先界定影响范围、开始时间、P95/P99和错误率，关联发布与流量变化。沿 trace 拆连接池等待、线程池排队、应用计算、SQL、缓存和第三方调用，找新增主要耗时；同时看 CPU、GC、锁、队列。影响用户时先限流、降级或回滚，再保存现场、验证根因。不能先盲目扩大线程池。\n\n**追问 / 易错点：** 只有少数请求慢？看长尾、热点参数、锁等待、冷缓存和重试，不只看平均值。",
      "sourceIds": [
        "N031",
        "NI012",
        "NI024"
      ],
      "keywords": [
        "Q11-001",
        "场景题 / 故障排查",
        "拼多多",
        "得物",
        "即时设计"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-002",
      "number": "Q11-002",
      "question": "CPU 100% 但请求量没涨怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n请求没涨但 CPU 满，说明单个请求变贵了，或后台有额外工作。先定位热点线程，再连续看栈或采样，排查死循环、正则回溯、序列化、GC 和异常重试。区分业务计算与 GC，不能只靠重启判断根因。\n\n**深入补充（选读）：**\n按进程和线程定位真实 CPU 消耗，连续采集热点线程栈和采样剖析，判断忙循环、复杂正则、序列化、GC、JIT或异常重试。若主要是 GC，再看分配速率和存活量；若某业务栈持续重复则检查数据规模和退出条件。先有证据再修改，重启只能缓解部分现场。\n\n**追问 / 易错点：** 只有一核满？单线程热点或锁持有者可能限制整体吞吐。",
      "sourceIds": [],
      "keywords": [
        "Q11-002",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-003",
      "number": "Q11-003",
      "question": "堆内存持续上涨，该如何区分泄漏与正常缓存？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n看多轮 GC 之后的内存最低点，而不是只看使用量往上走。缓存预热通常有容量上限并逐渐稳定；不再需要的对象仍不断累积，就要查持有链。用 dump 找大对象和根引用，修复后在同负载下继续观察。\n\n**深入补充（选读）：**\n观察多轮 GC 后的存活基线、缓存容量与业务量是否一起增长，使用堆转储看 dominator 和根引用。容量有界并趋稳可能是预热；无界 Map、积压任务或 ThreadLocal 持有已失效对象则像泄漏。还需看堆外/RSS与容器限制，避免把所有进程内存上涨都归咎 Java 堆。\n\n**追问 / 易错点：** 怎么证明修好了？同负载持续观察存活基线和持有对象数量，而不是重启后暂时下降。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05",
        "NI008"
      ],
      "keywords": [
        "Q11-003",
        "场景题 / 故障排查",
        "得物",
        "美团"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-004",
      "number": "Q11-004",
      "question": "线程池队列爆满、请求超时，怎么处理？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n队列满先判断任务来得太快，还是执行太慢。查活跃线程、排队时长、拒绝率和下游容量；已超时的无效任务要有退出机制。先限流和隔离慢依赖，只有 CPU、数据库和第三方都有余量时才扩线程。\n\n**深入补充（选读）：**\n先看任务到达率、服务时间、活跃线程、拒绝率及下游容量。排队预算已经超请求期限时应快速失败或取消无价值任务；按业务隔离线程池、防止慢依赖拖住全部任务。只有下游与 CPU 有余量才扩线程，必要时限流和降级。恢复过程中控制放量，避免积压任务瞬间冲击数据库。\n\n**追问 / 易错点：** 核心线程不忙但队列满？检查线程存活、任务阻塞位置和具体执行器状态。",
      "sourceIds": [],
      "keywords": [
        "Q11-004",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-005",
      "number": "Q11-005",
      "question": "一个接口依赖三个第三方接口，如何优化？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n把三个调用分成“有先后依赖”和“互不依赖”。互不依赖的并行执行，非关键结果允许明确降级；整次请求设置总时限，每个调用分配剩余预算。还要独立限并发，避免一个慢服务占满全部线程和连接。\n\n**举个例子：**\n三个互不依赖的调用分别耗时 100、200、300ms，串行约 600ms，并行理想情况下接近最慢的 300ms，加上调度和合并开销。\n\n**深入补充（选读）：**\n先区分依赖关系，无依赖部分可以并行，关键与非关键结果分开。给整请求设 deadline，每个调用从剩余预算分配超时，使用隔离执行器/连接池、有限重试和熔断。可选信息失败返回明确降级结果。Future 完成超时后还需取消底层调用，不能让无用任务继续占连接。\n\n**追问 / 易错点：** 第三方偶尔慢如何精确定位？按依赖名和调用阶段打 span，记录分位耗时、超时与连接等待。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)；[X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。\n\n**原始资料核对 / 延伸查阅：** [T08 · Java 21 CompletableFuture API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html)。",
      "sourceIds": [
        "N055",
        "X02",
        "X06"
      ],
      "keywords": [
        "Q11-005",
        "场景题 / 故障排查",
        "网易",
        "拼多多",
        "好未来"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-006",
      "number": "Q11-006",
      "question": "Redis 挂了，怎么避免数据库一起被打垮？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nRedis 故障时，不能把原本所有缓存流量原样打到数据库。按重要性限流，允许的场景使用本地缓存或旧数据，承受不了的请求明确返回繁忙。恢复后分批预热、逐步放量，防止数据库在恢复时再次被冲垮。\n\n**深入补充（选读）：**\n按业务优先级保留核心读写，缓存可用性异常时限制回源并发与速率，用短期本地缓存或允许的旧数据降级。对不可降级读返回明确繁忙，而非全量绕过缓存。恢复后分批预热、请求合并并控制流量，观察数据库和缓存负载后逐步恢复。\n\n**追问 / 易错点：** 多级缓存会引入什么？内存重复、失效传播、陈旧数据和实例间差异。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q11-006",
        "场景题 / 故障排查",
        "招银网络科技"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-007",
      "number": "Q11-007",
      "question": "一个极热商品缓存失效，如何避免并发回源？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n同一个热 key 失效时，合并相同查询或只让少数请求负责重建；其他请求限时等待或读取允许的旧值。拿到重建资格后再检查一次缓存，避免别人已经建好却又重复查询。不同 key 不要共用一把全局锁。\n\n**深入补充（选读）：**\n按商品 key 做 singleflight 或分布式互斥重建，拿到执行权后再次检查缓存，只允许少量请求访问数据库，其他请求限时等待或读允许的旧值。对失败设置短冷却，避免不断争锁。不同 key 的重建应并行，不能用一把全局锁卡全站。\n\n**追问 / 易错点：** 持锁进程崩溃？用租约/超时恢复，同时处理锁过期后旧任务迟到回填。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**原始资料核对 / 延伸查阅：** [R06 · Redis：Distributed Locks](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/)。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q11-007",
        "场景题 / 故障排查",
        "拼多多"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-008",
      "number": "Q11-008",
      "question": "缓存与数据库不一致，如何定位是哪条链路？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先把数据库版本、缓存版本和失效事件串起来，判断是没提交、删缓存失败、读副本落后、旧值回填，还是事件乱序。再对症处理：可靠重试、版本校验、回源策略。不能只加一次延迟双删就认定解决。\n\n**深入补充（选读）：**\n记录数据库版本、缓存版本、更新时间、失效事件 ID 和消费延迟，区分写库未提交、删缓存失败、读副本滞后、旧读回填或失效事件乱序。可在更新中携带单调版本并拒绝旧版本覆盖，失效事件可靠重试。若业务必须即时准确，读路径直接访问权威数据源或设计更强协调。\n\n**追问 / 易错点：** 延迟双删等1秒就稳了吗？只能在部分时序假设下减小窗口，不能证明全部并发情形。",
      "sourceIds": [],
      "keywords": [
        "Q11-008",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-009",
      "number": "Q11-009",
      "question": "秒杀系统如何防超卖和一人多单？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n防超卖靠库存的原子条件更新或受控预占；防一人多单靠活动+用户等业务唯一约束。订单和库存要在明确的事务或补偿边界内协调，入口再做鉴权、活动校验和限流。排队成功只能返回处理中，不等于已下单成功。\n\n**深入补充（选读）：**\n入口鉴权、活动校验和限流，预热只读信息；以库存条件更新或受控预扣减少竞争。订单有活动+用户唯一约束防重复，库存与订单在明确事务/补偿边界中协调。异步排队后返回处理中而非伪装已成功，失败要释放预占并对账。Redis 预扣成功不等于订单数据库已成功。\n\n**追问 / 易错点：** 扣库存后消息没发出去？用可靠事件或待处理记录回收，不能依赖客户端重新点击。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [
        "N002",
        "N004",
        "N027",
        "N035",
        "N041",
        "N055",
        "NI005"
      ],
      "keywords": [
        "Q11-009",
        "场景题 / 故障排查",
        "美团",
        "车300",
        "快手",
        "BIGO",
        "网易",
        "携程"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-010",
      "number": "Q11-010",
      "question": "支付回调重复或乱序，如何保证订单正确？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n支付回调先验签、核对商户、订单和金额，再按支付流水去重，用状态条件更新保证只发生合法迁移。业务修改和去重尽量同事务完成。重复通知正常返回已有结果，漏通知靠主动查单和对账补齐。\n\n**深入补充（选读）：**\n先验证签名、商户、金额、订单归属，再以支付流水/事件唯一键去重。状态机只允许合法迁移，用条件更新保护已支付等终态，业务修改与去重在同一事务中。失败可让支付方重试，定时主动查询对账；不能只信浏览器“支付成功”跳转。\n\n**追问 / 易错点：** 关单与支付成功同时到达？按支付事实和业务规则处理冲突，可能需退款或人工异常流程。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "N012",
        "X05"
      ],
      "keywords": [
        "Q11-010",
        "场景题 / 故障排查",
        "XTransfer",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-011",
      "number": "Q11-011",
      "question": "提交订单时用户双击，接口怎么幂等？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n前端防双击只改善体验，后端仍需稳定幂等键。把键与用户、操作和参数摘要绑定，用数据库唯一约束防并发重复，保存处理中或成功结果。相同键相同参数复用结果，相同键不同参数拒绝。\n\n**举个例子：**\n用户第一次下单超时，第二次仍带原 requestId，服务器应返回原订单或处理中状态，而不是重新创建订单。\n\n**深入补充（选读）：**\n客户端按钮禁用改善体验，服务端还需幂等键。幂等键绑定用户、操作和请求摘要，数据库唯一约束保证并发只接受一个，保存处理中/成功/失败及结果。相同键不同参数拒绝，处理中返回可查询状态。锁只能减少竞争，最终约束应在可靠存储中。\n\n**追问 / 易错点：** 请求超时但服务器成功，第二次返回什么？复用原结果或给查询入口，不能重新生成订单。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "N005",
        "X05",
        "NI016",
        "NI024"
      ],
      "keywords": [
        "Q11-011",
        "场景题 / 故障排查",
        "美团",
        "得物",
        "滴滴",
        "即时设计"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-012",
      "number": "Q11-012",
      "question": "如何设计一个分布式 ID？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n分布式 ID 先看要不要趋势递增、能否依赖中心服务、吞吐多大。可选数据库号段、雪花或 UUID 等。雪花常由时间、节点号、序列组成，必须保证节点号分配正确，并处理时钟回拨和序列用尽。\n\n**深入补充（选读）：**\n先要求唯一性、吞吐、趋势递增、信息暴露和离线生成。数据库号段便于集中治理，雪花算法组合时间、节点与序列，UUID 减少协调但可能影响索引局部性。雪花要保证节点号唯一、处理时钟回拨和序列耗尽；不能只写“64位所以永不重复”。\n\n**追问 / 易错点：** 时钟回拨怎么办？短回拨可等待，大回拨拒绝/切备用方案并告警，规则需一致。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "N041",
        "X05",
        "NI022"
      ],
      "keywords": [
        "Q11-012",
        "场景题 / 故障排查",
        "BIGO",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-013",
      "number": "Q11-013",
      "question": "百万行数据导入怎么设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n百万行导入应做成异步任务：保存文件、返回任务 ID、流式解析、分批校验和落库，记录进度与失败行。每批内存和事务有上限，重试按业务键幂等，并明确允许部分成功还是必须全部成功。\n\n**举个例子：**\n不能先把整份文件读进一百万行 List，再每次 subList 一千行，那只拆了写入，没有减少读取阶段的内存。\n\n**深入补充（选读）：**\n上传后生成任务 ID，流式解析并进行格式与业务校验，分固定批次写入，按业务唯一键幂等；记录进度、失败行和错误原因。限制上传大小、并发、单行长度及批次内存；明确全成功还是允许部分成功。不要先读全文件到 List，再假装通过 subList 实现低内存批处理。\n\n**追问 / 易错点：** 中断后恢复？持久化输入文件标识、检查点与批次结果，重跑安全且能继续。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "N017",
        "N056",
        "X05"
      ],
      "keywords": [
        "Q11-013",
        "场景题 / 故障排查",
        "滴滴",
        "阿里",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-014",
      "number": "Q11-014",
      "question": "百万行导出如何避免 OOM 和请求超时？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n百万行导出先创建异步任务，再按稳定游标分批读数据，边读边写文件，完成后提供授权下载。限制并发和磁盘占用，保存失败状态。还要说明数据按哪个时间点导出，避免翻页过程中新增修改导致漏行或重复。\n\n**深入补充（选读）：**\n采用异步任务，按稳定游标分批查询并流式写文件，生成后提供有时效的授权下载地址。控制并发、磁盘和内存，避免一次性构造整表。明确导出时点的一致性：长事务快照成本大，也可用业务截止时间/版本快照或专用读源。\n\n**追问 / 易错点：** 边导出边新增会漏吗？取决于分页与一致性规则，需稳定排序和截止边界。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q11-014",
        "场景题 / 故障排查",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-015",
      "number": "Q11-015",
      "question": "库存扣了但订单没落库，怎么修？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先按业务 ID 查清楚订单究竟没成功，还是只是响应丢失。库存与订单在同库时优先用事务；跨存储预占则记录预占状态，订单成功后确认，失败后幂等释放。补偿前先核对最终事实，不能看到超时就直接加库存。\n\n**深入补充（选读）：**\n先确认权威数据与失败窗口。如果在同一数据库应优先用事务把相关修改一起提交；跨存储预占则设计预占状态、过期释放、订单确认与补偿事件。通过业务 ID 找到悬挂预占并核对，不可按“失败日志”直接一律加回，原请求可能已在迟到成功。\n\n**追问 / 易错点：** 补偿会重复执行怎么办？补偿也要唯一键和状态条件，保证只释放一次。",
      "sourceIds": [],
      "keywords": [
        "Q11-015",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-016",
      "number": "Q11-016",
      "question": "订单“掉单”怎么排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n从请求 ID 一路查到订单、支付流水、待发事件、MQ 和消费结果，定位“断在哪一段”。列表没有不等于数据库没有，也可能是权限、状态筛选或副本延迟。根据持久状态补偿，再建立对账主动发现缺口。\n\n**深入补充（选读）：**\n从入口请求 ID 串到支付流水、订单表、Outbox、Broker 和消费结果，判断未创建、已创建未显示、消息未发、消息未消费或副本延迟。用各阶段持久状态对账，并提供可重放补偿。不能看到列表没有就认定数据库没单，权限过滤和状态筛选也会隐藏记录。\n\n**追问 / 易错点：** 怎么预防？关键阶段可观测、幂等和可靠事件，定期对账主动发现缺口。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q11-016",
        "场景题 / 故障排查",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-017",
      "number": "Q11-017",
      "question": "如何设计限流、熔断、降级、隔离？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n限流是少放请求进来；熔断是下游持续异常时暂时不再调用；降级是改成较简单但可接受的结果；隔离是给不同业务分开资源，防止互相拖垮。阈值应来自容量和时延目标，恢复时小流量试探。\n\n**举个例子：**\n库存主链路要保住，推荐列表可以降级；短信服务变慢时，不应把下单线程池也全部占满。\n\n**深入补充（选读）：**\n限流控制进入量或并发，熔断在失败率/慢调用达到阈值时停止部分调用，降级提供较弱但可接受结果，隔离限制某类故障占用的资源。按接口、用户、租户与依赖设计层次，保留核心链路。阈值来自容量和延迟目标，不能只给一个所有接口共用的 QPS。\n\n**追问 / 易错点：** 熔断恢复怎么做？半开有限探测，成功再放量，防止恢复瞬间再次压垮依赖。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)。",
      "sourceIds": [
        "N021",
        "N030",
        "N039",
        "N055",
        "X06",
        "NI025"
      ],
      "keywords": [
        "Q11-017",
        "场景题 / 故障排查",
        "快手",
        "科大讯飞",
        "京东",
        "网易",
        "好未来",
        "阿里"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-018",
      "number": "Q11-018",
      "question": "高并发转账如何保证正确？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n同库转账把扣款、加款和流水放在同一事务，用余额条件更新防负数，用唯一流水防重复，并按固定顺序锁账户减少死锁。跨系统则需要持久状态、可靠事件和对账，不能只加 Redis 锁就当成原子转账。\n\n**深入补充（选读）：**\n同一数据库内以事务保护两边账务，统一账户加锁顺序避免死锁，余额扣减用条件更新，流水号唯一。为每笔账记录可审计的借贷变化，失败整个事务有限重试。跨系统转账需状态机与可靠补偿/对账，不应只靠 Redis 锁加两次 UPDATE。\n\n**追问 / 易错点：** 审计余额为何还需流水？余额是状态，流水提供可重建与核对的业务事实。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [
        "N008"
      ],
      "keywords": [
        "Q11-018",
        "场景题 / 故障排查",
        "京东"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-019",
      "number": "Q11-019",
      "question": "如何设计短链接服务？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n短链接核心是“短码→原地址”的映射：生成不冲突短码并保存，访问时查询后重定向，热点映射可以缓存。还要处理到期、禁用、恶意目标和访问统计。哈希可能碰撞，序号可能被枚举，都要按需求处理。\n\n**深入补充（选读）：**\n生成不冲突短码并存目标地址，访问短码查询并重定向，可缓存热映射。若用哈希需解决碰撞，若用序号编码需考虑可枚举性。设计到期、禁用、恶意 URL 校验、访问统计异步化；重定向状态码与缓存策略应匹配是否允许修改目标。\n\n**追问 / 易错点：** 统计流量大怎么办？异步聚合、采样或流处理，避免每次跳转同步写同一行。",
      "sourceIds": [
        "N037"
      ],
      "keywords": [
        "Q11-019",
        "场景题 / 故障排查",
        "腾讯"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-020",
      "number": "Q11-020",
      "question": "如何设计排行榜和点赞功能？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n点赞先保证用户+内容关系唯一，取消点赞也要幂等；计数可同步维护或可靠异步汇总。排行榜常用 ZSet，另定义同分、时间窗和更新频率。关系数据与展示计数不一致时，要能从权威记录对账修复。\n\n**深入补充（选读）：**\n点赞以用户+内容唯一关系保证不重复，计数通过数据库或事件汇总，取消点赞也幂等。排行榜可用 ZSet 或周期聚合，但要明确实时性、窗口、同分规则和热点写入。展示计数允许短暂最终一致时可异步更新，定期从权威关系重算修正。\n\n**追问 / 易错点：** 数据库点赞成功但缓存计数没加？可靠事件重试和对账，不能靠用户刷新补齐。",
      "sourceIds": [
        "N022",
        "N052"
      ],
      "keywords": [
        "Q11-020",
        "场景题 / 故障排查",
        "BIGO",
        "快手"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-021",
      "number": "Q11-021",
      "question": "定时任务在集群中重复执行怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n多实例定时任务要有跨实例的领取规则，例如调度平台、分片或数据库条件抢占。领取后记录执行者、状态和心跳，失败可接管；真正业务效果仍需幂等，防止旧实例暂停后恢复继续执行。单机锁无法约束别的进程。\n\n**深入补充（选读）：**\n可用成熟调度系统、分片或带租约的任务领取机制。数据库任务表用状态+版本条件把任务从待执行抢到执行中，持久保存执行实例与心跳，过期可接管；关键副作用仍须业务幂等，防旧实例暂停后恢复继续执行。单机 synchronized 不能解决跨进程重复。\n\n**追问 / 易错点：** 租约到期能直接重跑吗？先考虑旧任务可能仍活着，需要 fencing 或存储层条件约束。",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q11-021",
        "场景题 / 故障排查",
        "拼多多"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-022",
      "number": "Q11-022",
      "question": "审批回调重复，怎样保证只生成一次台账？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先确认生成台账应该绑在哪个流程事件，再用源单据 ID 加必要业务版本作为稳定键，目标表加唯一约束。生成记录和处理状态尽量同事务完成，重复回调返回已有结果。撤回再审批要另定更新或冲销规则。\n\n**举个例子：**\n两个回调同时“先查都没有”，仍会各插一条；数据库唯一约束才能在并发下守住最后一道门。\n\n**深入补充（选读）：**\n先确认触发节点是提交、审批通过还是流程结束，提取稳定的源单据 ID 和业务版本。目标表加唯一约束，生成台账与消费状态尽量在同一事务中；回调重复命中已有记录则返回成功。不能只“先查询不存在再新增”，并发窗口仍会生成两条。\n\n**追问 / 易错点：** 审批撤回后重新通过怎么办？定义是更新原台账、冲销再生成还是新版本记录，不能无条件去重。",
      "sourceIds": [],
      "keywords": [
        "Q11-022",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-023",
      "number": "Q11-023",
      "question": "跨系统组织、员工数据同步如何设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n跨系统同步先统一稳定业务编码，不按姓名猜对应关系。事件带唯一 ID 和版本，重复可重试、旧版本不能覆盖新版本。组织父子关系先处理，再处理人员归属；失败单独记录，增量同步外再加定期全量对账。\n\n**深入补充（选读）：**\n用源系统稳定编码映射目标主键，接口验签鉴权，批次/事件有唯一 ID，按版本或更新时间避免旧消息覆盖新状态。先处理组织父子依赖，再处理员工归属，失败数据单独记录重试。全量对账与增量同步结合，离职/删除明确禁用、软删和历史保留规则。\n\n**追问 / 易错点：** 名字一样就当同一个部门可以吗？不行，要依赖业务编码和系统归属。",
      "sourceIds": [],
      "keywords": [
        "Q11-023",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-024",
      "number": "Q11-024",
      "question": "合同累计订单数量不能超最大值，怎么保证并发？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n合同额度不能只在前端相加判断。服务端用同一事务中的锁定校验，或数据库条件更新，原子增加已占用数量，再创建订单。修改按差量调整，撤销按状态只释放一次，历史订单统计口径也要统一。\n\n**举个例子：**\n合同剩 100，两个人同时各买 60。各自先查都可能看到 100；原子条件占用应只允许其中一个成功。\n\n**深入补充（选读）：**\n前端计算只作提示，服务端需在事务内锁定合同额度记录或用条件更新原子增加占用，例如 used+本次数量<=limit。订单创建与占用同事务，撤销/审批驳回按状态幂等释放；修改订单以差量调整。历史订单计入口径必须统一，金额/数量单位也必须一致。\n\n**追问 / 易错点：** 两个人同时各下60，合同只剩100？数据库条件更新使至多一个成功，不能各自查剩余100后都通过。\n\n**原始资料核对 / 延伸查阅：** [D02 · MySQL 8.4：InnoDB Locking](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。",
      "sourceIds": [],
      "keywords": [
        "Q11-024",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-025",
      "number": "Q11-025",
      "question": "附件从业务系统推到 OA，如何保证不重复、可追踪？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n附件同步用源单据 ID 和附件稳定 ID 等作为幂等标识，记录上传状态、目标 ID、重试次数和错误。上传后本地标记失败时，要能查目标或对账，避免重复上传。文件名一样不表示是同一个附件。\n\n**深入补充（选读）：**\n用源单据 ID+附件稳定 ID/内容校验标识作同步键，记录待传、上传中、成功、失败及目标附件 ID。校验权限、类型、大小和内容摘要，采用限次重试；提交、撤回、删除定义对应动作。外部系统成功而本地标记失败时，按同步键查询目标或做对账，避免重复上传。\n\n**追问 / 易错点：** 同名文件是否同一附件？不能只按文件名判断，内容与源 ID 可能不同。",
      "sourceIds": [],
      "keywords": [
        "Q11-025",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-026",
      "number": "Q11-026",
      "question": "业务数据明明新增过，列表里却看不到怎么查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先查数据库有没有这条主键，再查接口是否返回，最后查页面为什么不显示。依次排除回滚、副本延迟、权限、软删、状态筛选、分页和缓存。“刚出现又消失”还要查后续回调覆盖，不要先再插一条。\n\n**深入补充（选读）：**\n先用主键确认数据库是否存在，再检查事务是否回滚、读副本延迟、租户/部门权限、软删、状态过滤、分页排序和前端缓存。核对实际请求参数、接口响应与页面渲染三层，不先写第二次新增。若短暂出现后消失，检查后续回调覆盖、重复提交或刷新读源。\n\n**追问 / 易错点：** 没有报错是否等于成功？不等于，错误可能被吞、异步失败或返回了业务失败码。",
      "sourceIds": [
        "N053"
      ],
      "keywords": [
        "Q11-026",
        "场景题 / 故障排查",
        "小鹅通"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-027",
      "number": "Q11-027",
      "question": "如何做一次可信的接口压测？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n可信压测要固定环境、数据量、请求比例、预热和持续时间，同时看 QPS、延迟分位、错误率及资源占用。比较优化前后必须条件一致，还要验证数据正确、压测机没先到瓶颈，不能用一次最快响应倒推出吞吐。\n\n**深入补充（选读）：**\n先说明环境、数据规模、请求比例、并发模型、预热和持续时间，测吞吐、延迟分位、错误率与资源饱和。避免仅空接口、全缓存命中或本机单次结果冒充线上能力。加入热点、失败和恢复阶段，确认数据正确且负载发生器不是瓶颈。报告明确比较基线和改动。\n\n**追问 / 易错点：** QPS 提升50%怎么证明？相同硬件、数据和延迟/错误约束下的可复现对照。",
      "sourceIds": [
        "N002",
        "N026",
        "N027",
        "N035",
        "NI005"
      ],
      "keywords": [
        "Q11-027",
        "场景题 / 故障排查",
        "美团",
        "顺丰",
        "车300",
        "快手",
        "携程"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-028",
      "number": "Q11-028",
      "question": "怎么设计灰度发布和回滚？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n灰度是先让小部分流量使用新版本，确认正常再逐渐扩大。前提是新旧代码能同时兼容接口、配置和数据库结构。回滚时先切流量和代码，再按需要修复数据副作用；回滚代码不会自动撤销已经发生的业务操作。\n\n**深入补充（选读）：**\n先保证新旧代码能同时兼容配置、接口和数据库结构，再按小比例或租户路由灰度，观察错误率、延迟和业务转化/数据一致性。异常时快速切回，数据库变更采用兼容式先扩后缩。回滚代码不等于撤销已发生的业务副作用，需补偿与数据修复方案。\n\n**追问 / 易错点：** 先删旧字段再发布新代码有什么问题？灰度中旧实例仍可能访问，回滚也失去兼容性。",
      "sourceIds": [],
      "keywords": [
        "Q11-028",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-029",
      "number": "Q11-029",
      "question": "长时间运行的 Agent 任务如何取消与恢复？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nAgent 长任务要把状态、步骤和工具调用 ID 持久化。取消先进入取消中，在循环边界和底层调用检查信号；恢复从已确认检查点继续，不重复执行已完成副作用。连接断了不等于任务自动取消，取消也不等于回滚。\n\n**深入补充（选读）：**\n为任务持久化状态、步骤、工具调用 ID 和检查点；取消请求进入取消中，循环边界检查，并向在途 IO 传播 deadline/取消。对不可中断调用限制资源、拒绝迟到写入或安排补偿。恢复从已确认检查点继续，副作用工具用幂等键，不能只内存布尔标记或把取消当作已回滚。\n\n**追问 / 易错点：** 断网后用户重新打开如何看到进度？读取持久状态与事件序号，必要时重放事件。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [T08 · Java 21 CompletableFuture API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html)。",
      "sourceIds": [
        "N055",
        "X03"
      ],
      "keywords": [
        "Q11-029",
        "场景题 / 故障排查",
        "网易",
        "腾讯"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-030",
      "number": "Q11-030",
      "question": "海量日志中找高频 IP 或请求链路怎么做？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n日志放得进内存，就流式解析并按 IP 计数，再取 TopK；放不下，就按 IP 哈希分桶，分别统计后合并。请求链路靠 traceId/spanId 关联，不能只按时间接近拼。精确统计和近似统计的方案要分开。\n\n**深入补充（选读）：**\n先明确准确度、时间窗、数据规模与可用内存。单机可流式解析并计数，超内存时按哈希分区写临时桶再分别聚合，最后用小顶堆取 TopK；近似统计可选 sketch。请求链路依靠结构化日志中的 traceId/spanId，不能只靠时间相近拼接。\n\n**追问 / 易错点：** 只用每桶TopK合并一定正确吗？哈希按IP把同IP聚在同桶后可行；任意分时间块取TopK可能漏全局热点。",
      "sourceIds": [
        "N018"
      ],
      "keywords": [
        "Q11-030",
        "场景题 / 故障排查",
        "携程"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-031",
      "number": "Q11-031",
      "question": "CAP 与 BASE 怎么用在系统设计里？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nCAP 讨论的是网络发生分区时，不能同时完整保证线性一致性和可用性，不是平时随便三选二。BASE 是某些系统接受短暂不一致、最终收敛的设计思路。业务必须明确能旧多久、怎么补偿、什么时候报警。\n\n**深入补充（选读）：**\nCAP讨论网络分区存在时，线性一致性与可用性无法同时完全满足，不是平时随意三选二；这里可用性也有严格模型含义。BASE是对某些业务采用基本可用、软状态、最终一致的设计概括。回答要落到具体操作：比如余额扣减和商品详情展示可以采用不同约束。\n\n**追问 / 易错点：** 最终一致多久算最终？业务要明确可接受延迟、补偿和无法收敛时的处理。",
      "sourceIds": [
        "N055",
        "NI008"
      ],
      "keywords": [
        "Q11-031",
        "场景题 / 故障排查",
        "网易",
        "美团"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-032",
      "number": "Q11-032",
      "question": "分布式事务的2PC、TCC、Saga如何比较？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n2PC 让参与者先准备再统一提交，协调和等待成本较高；TCC 把业务拆成预留、确认、取消；Saga 是一串本地事务，失败时执行相应补偿。补偿不一定能精确倒回原状，选择要看资源支持和业务能否补偿。\n\n**深入补充（选读）：**\n2PC通过协调准备/提交管理参与者，但有阻塞和协调成本；TCC把业务拆成Try预留、Confirm确认、Cancel取消，各阶段要幂等；Saga用一串本地事务和补偿动作处理长流程，补偿不一定是数据库精确回滚。按资源是否支持协议、业务可补偿性和时延选择，Outbox则常解决消息发布协调的一部分。\n\n**追问 / 易错点：** TCC空回滚和悬挂？Cancel先到要记录取消事实，迟到Try不得再预留；回滚不能假定Try必已成功。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [M06 · Microservices.io：Saga](https://microservices.io/patterns/data/saga.html)。",
      "sourceIds": [
        "N003",
        "N055",
        "X05"
      ],
      "keywords": [
        "Q11-032",
        "场景题 / 故障排查",
        "字节跳动",
        "网易",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-033",
      "number": "Q11-033",
      "question": "Elasticsearch 与 MySQL 如何保持同步？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\nMySQL 作为权威数据源，通过 Outbox 或 binlog/CDC 把变更可靠送到 ES；事件带 ID 和版本，防重复和旧事件覆盖新数据，再定期对账。ES 搜索近实时，写成功不等于下一瞬间一定搜到。\n\n**深入补充（选读）：**\nMySQL做权威写入，使用Outbox或binlog/CDC驱动索引更新，事件带ID和版本防重复/乱序；定期对账与重建。ES是近实时搜索，写入确认不代表马上可搜索，refresh策略需权衡实时性和吞吐。索引更新失败应可重试，不能让搜索索引成为不可修复的唯一数据来源。\n\n**追问 / 易错点：** 为什么不每次事务里同步写ES？跨存储无法自动原子，且加长事务并耦合搜索故障。\n\n**原始资料核对 / 延伸查阅：** [E01 · Elasticsearch：Paginate Search Results](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/paginate-search-results)。",
      "sourceIds": [],
      "keywords": [
        "Q11-033",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-034",
      "number": "Q11-034",
      "question": "搜索服务如何做分词、召回与分页？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n搜索先用分词和倒排索引找候选，再按业务条件过滤和排序，必要时结合向量检索与重排。深分页可用 search_after 配稳定排序和一致性视图。权限过滤是硬条件，不能为了提高相关性把无权限资料返回出去。\n\n**深入补充（选读）：**\n倒排索引把词项映射到文档，分词与字段mapping决定可检索性；按业务结合关键词、结构化过滤和需要时的向量召回。深分页可用search_after配稳定排序及一致性视图，避免无限from+size。权限必须参与过滤，索引中也要保留租户和资源范围。\n\n**追问 / 易错点：** 搜索结果评分不准怎么办？用标注查询集分析分词、字段权重、召回和重排，而非盲调一个参数。\n\n**原始资料核对 / 延伸查阅：** [E01 · Elasticsearch：Paginate Search Results](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/paginate-search-results)；[E02 · Elasticsearch：Open a Point in Time](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-open-point-in-time)。",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q11-034",
        "场景题 / 故障排查",
        "百度"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q11-035",
      "number": "Q11-035",
      "question": "配置中心、服务发现和分布式协调分别解决什么？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n配置中心回答“参数是什么”，服务发现回答“服务现在在哪些实例”，协调系统帮助“谁当负责人、谁持有租约”。一个产品可能提供多种能力，但概念不同。更新还要带版本、校验和恢复机制，不能只靠一次推送。\n\n**深入补充（选读）：**\n配置中心分发配置，服务发现维护可调用实例，协调系统用于租约、选主或有序元数据等，能力可能由同一产品提供但不能混为一谈。客户端需处理缓存、连接断开、旧配置和实例变更。对配置采用版本、校验和灰度，下发成功也不等于业务对象已正确重建。\n\n**追问 / 易错点：** 配置推送丢了怎么办？版本比对、重新拉取和最终收敛机制，而不是只依赖一次通知。",
      "sourceIds": [
        "N001",
        "N017",
        "N055",
        "X01",
        "X02",
        "X03",
        "X04",
        "X05",
        "NI008",
        "NI025"
      ],
      "keywords": [
        "Q11-035",
        "场景题 / 故障排查",
        "阿里",
        "滴滴",
        "网易",
        "腾讯",
        "拼多多",
        "综合",
        "得物",
        "美团"
      ],
      "sourceFile": "11_场景题与故障排查.md"
    },
    {
      "id": "bank-Q12-001",
      "number": "Q12-001",
      "question": "用两分钟介绍你的项目，怎么说？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n按五句话介绍：项目给谁用，解决什么问题，主流程是什么，我负责什么，怎么验证效果。技术栈穿插在具体实现中，不要先报一串框架。所有规模和成绩用真实记录，没有压测就直接说未做系统压测。\n\n**举个例子：**\n表达模板：这个项目面向【真实用户】，处理【问题】；核心链路是【输入→处理→结果】；我负责【模块】，解决了【具体难点】，通过【真实测试或记录】验证。\n\n**深入补充（选读）：**\n按“服务对象与问题→主链路→技术栈→个人贡献→验证结果”组织：项目解决【真实业务问题】，核心流程是【输入到结果】，我负责【实际模块】，用【具体机制】解决【困难】，通过【日志/测试/上线记录】验证。数字没有记录就说清规模未知，不把开源项目整体能力算成个人贡献。\n\n**追问 / 易错点：** 你最希望面试官追问哪个点？准备一个能讲清取舍、实现与故障边界的真实细节。\n\n**原章示例（移至对应题目）：**\n以下空格是**个人经历替换项**，不是要求背诵的答案，也不表示你已拥有相应经历。\n\n| 项目事实 | 你的记录 |\n| --- | --- |\n| 谁使用、解决什么问题 | 待填写真实事实 |\n| 你负责的类/接口/流程 | 待填写真实事实 |\n| 关键表、业务主键、索引 | 待填写真实事实 |\n| 事务与权限边界 | 待填写真实事实 |\n| 一个明确Bug与证据链 | 待填写真实事实 |\n| 测试/压测环境与实际结果 | 未测就写未测 |\n| 失败、重复、撤回后的行为 | 待填写真实事实 |\n| 有记录的优化前后数据 | 没有记录就不编数字 |\n| 未实现但可考虑的改进 | 明确标为方案而非成果 |\n\n可以把项目介绍练成30秒、2分钟和5分钟三个版本，事实保持一致，仅调整展开程度。",
      "sourceIds": [
        "N035",
        "NI007",
        "NI010"
      ],
      "keywords": [
        "Q12-001",
        "项目 / 实习拷打",
        "快手",
        "美团",
        "拼多多"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-002",
      "number": "Q12-002",
      "question": "你在团队里到底负责什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n把团队原有能力和自己新增修改的内容分开说。说明实际负责的接口、表、回调或部署步骤，以及参与了需求、编码、联调、测试中的哪些环节。能讲清一段完整实现，比声称负责整个系统更可信。\n\n**深入补充（选读）：**\n明确团队已有平台和你的改动边界，例如负责某接口、流程回调或一致性修复，并说明需求澄清、编码、联调、测试和上线中实际参与的环节。最好能对应接口、类、表和提交记录。参与维护不等于从零设计全系统，讲清一段完整闭环比堆架构词更可信。\n\n**追问 / 易错点：** 如果去掉你做的模块，哪条业务链路受影响？说具体输入、输出和使用者。",
      "sourceIds": [
        "N028",
        "N030",
        "N034",
        "N036",
        "N044",
        "N045",
        "N051",
        "N056",
        "NI016"
      ],
      "keywords": [
        "Q12-002",
        "项目 / 实习拷打",
        "熙牛医疗",
        "科大讯飞",
        "小米",
        "腾讯",
        "字节跳动",
        "京东",
        "阿里",
        "滴滴"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-003",
      "number": "Q12-003",
      "question": "为什么采用这套技术栈？有没有替代方案？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n从业务要求和团队条件解释选型：现有系统用什么、哪些要求必须满足、引入新组件的成本是什么。再举一个替代方案及没选它的原因。不要只说“大家都这么用”，也不要为了丰富技术栈加没必要的组件。\n\n**深入补充（选读）：**\n从团队约束、已有系统、交付期限和业务特性解释。示例：既有 Spring/MySQL 基础减少维护成本，读热点才加缓存，跨系统异步才引入 MQ。列一个替代方案及不选原因，如一致性成本、运维开销或规模不足。不要把“大家都用”当唯一理由。\n\n**追问 / 易错点：** 如果数据规模增大十倍，哪个选择先需要重新评估？结合当前瓶颈回答。",
      "sourceIds": [
        "N005",
        "N046",
        "N053",
        "N056",
        "NI005",
        "NI011",
        "NI014",
        "NI025"
      ],
      "keywords": [
        "Q12-003",
        "项目 / 实习拷打",
        "美团",
        "小鹅通",
        "阿里",
        "携程",
        "BIGO",
        "腾讯"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-004",
      "number": "Q12-004",
      "question": "画出项目架构和一次请求完整链路？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n沿一次真实请求画：客户端→入口鉴权→Controller→Service→数据库/缓存/外部系统→响应。每步讲输入输出、失败表现和事务边界；异步任务另画提交、执行和查询状态。没部署的组件不要画成已使用。\n\n**深入补充（选读）：**\n从客户端、网关/认证、Controller、Service、数据库/缓存/外部系统到响应，说明每层输入输出、鉴权位置、事务边界和日志关联。异步任务单独标出入队、执行、状态查询。先用真实部署组件，未使用的注册中心、MQ、K8s不要为了图好看加进去。\n\n**追问 / 易错点：** 哪一步会失败，用户会看到什么？每个外部边界都准备超时与错误表现。",
      "sourceIds": [
        "N006",
        "N016",
        "N035",
        "NI007"
      ],
      "keywords": [
        "Q12-004",
        "项目 / 实习拷打",
        "美团",
        "拼多多",
        "快手"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-005",
      "number": "Q12-005",
      "question": "你的数据库表怎么设计？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先讲业务实体和它们的关系，再讲主键、业务唯一约束、状态字段和索引。用“哪些数据必须一起成功”和“最常查什么”解释设计，而不是照页面输入框建表。历史记录、软删除和并发规则也要说明。\n\n**深入补充（选读）：**\n先讲实体和一对多/多对多关系，再讲主键、业务唯一键、外键或应用约束、状态和审计字段。用主查询解释索引，用并发约束解释条件更新或版本字段，明确软删除后的唯一性处理。数据库字段不是只照页面每个输入框复制一遍。\n\n**追问 / 易错点：** 为什么这两张表分开？独立生命周期、基数、查询方式或事务边界要有依据。",
      "sourceIds": [
        "N010",
        "NI007",
        "NI009",
        "NI014",
        "NI018"
      ],
      "keywords": [
        "Q12-005",
        "项目 / 实习拷打",
        "京东",
        "美团",
        "拼多多",
        "腾讯",
        "实在智能"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-006",
      "number": "Q12-006",
      "question": "你如何划分 Controller、Service、DAO 和 DTO？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nController 负责接请求和返回响应；Service 负责业务规则、流程和事务；DAO/Mapper 负责访问数据库；DTO 负责传输需要的数据。记住：入口、业务、存储、传输。分层为了边界清晰，不是类越多越专业。\n\n**举个例子：**\n展示页要“用户名+订单数”，可以用 DTO 组合返回，不必因此给用户表硬加一个订单数字段。\n\n**深入补充（选读）：**\nController 做协议转换、入口校验与响应，Service 承担业务编排与事务，DAO/Mapper 负责持久访问，DTO 限定跨层/跨服务输入输出。不要让 Controller 堆满事务逻辑，也不要实体直接接收不受控字段。划分是为了可维护和边界清晰，不要求小项目无限增加 VO/BO 类。\n\n**追问 / 易错点：** 接口出参加字段是否要改表？不必，展示模型与存储模型可不同。",
      "sourceIds": [],
      "keywords": [
        "Q12-006",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-007",
      "number": "Q12-007",
      "question": "项目最大的难点是什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n选一个真实难点，按“现象→约束→定位证据→解决方案→验证”讲。重点说明你为什么判断出根因，以及为什么这个修复有效。第一次配置某个框架很费时间，也可以诚实讲，但别包装成大型架构突破。\n\n**深入补充（选读）：**\n选一个真实问题，按现象、约束、定位证据、尝试方案、最终修复和验证展开。例如重复回调生成两条记录，先用日志证实并发窗口，再用唯一约束与事务闭环修复。不要把“第一次用某框架”“配置环境很久”包装成大规模架构突破。\n\n**追问 / 易错点：** 有没有失败方案？说明为何失败及何种证据促使你改变。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。",
      "sourceIds": [
        "N009",
        "N019",
        "N029",
        "N030",
        "X07",
        "NI003",
        "NI006",
        "NI012",
        "NI016",
        "NI023"
      ],
      "keywords": [
        "Q12-007",
        "项目 / 实习拷打",
        "京东",
        "字节跳动",
        "熙牛医疗",
        "科大讯飞",
        "腾讯",
        "招银网络科技",
        "携程",
        "得物",
        "滴滴",
        "未具名公司"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-008",
      "number": "Q12-008",
      "question": "你做过哪些性能优化？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先说原来慢在哪里，再说改动为什么能减少成本，最后给真实测量。比如把逐条查询改批量、把全量加载改分页、给高频 SQL 加合适索引。没有可靠数据就说减少了哪些操作，不编造提升百分比。\n\n**深入补充（选读）：**\n拿真实基线说明慢在哪，例如一次请求执行N+1查询或全量拉取，再解释批量查询/索引/分页为何降低成本。报告实际记录的耗时与环境，没有测量就只说减少某类操作、未做系统压测。优化后还需验证结果一致与写入成本，不应只有单个漂亮数字。\n\n**追问 / 易错点：** 缓存命中造成的快还是 SQL 真快？分开测冷缓存、热缓存与数据库执行。",
      "sourceIds": [
        "N053",
        "NI012",
        "NI016"
      ],
      "keywords": [
        "Q12-008",
        "项目 / 实习拷打",
        "小鹅通",
        "得物",
        "滴滴"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-009",
      "number": "Q12-009",
      "question": "项目 QPS、数据量、用户量到底多少？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n把线上监控、本地压测和测试数据量分开回答。没有线上权限就说明不知道峰值，可以讲自己实际测过的环境和结果。QPS 必须同时看延迟、错误率和硬件，单次响应快不代表整体吞吐高。\n\n**深入补充（选读）：**\n回答已知且来源明确的数据：本地压测、测试库规模、线上监控应分开。若没有线上权限，直接说明无法确认线上峰值，可提供本地实验条件与结果。QPS 必须伴随响应延迟、失败率、并发和硬件，不能把单次最快耗时倒数当系统吞吐。\n\n**追问 / 易错点：** 没有高并发经验怎么回答？承认范围，再给出容量分析和可验证的改进方案。",
      "sourceIds": [
        "N015",
        "N026",
        "N046"
      ],
      "keywords": [
        "Q12-009",
        "项目 / 实习拷打",
        "拼多多",
        "顺丰",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-010",
      "number": "Q12-010",
      "question": "为什么这里需要 Redis？不用行不行？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先讲 Redis 缓存了什么、为何值得缓存、多久失效、出故障怎么办。访问量小或只需单实例缓存时，数据库或本地缓存可能足够。要明确谁是权威数据源，不要把 Redis 当每个项目必须出现的关键词。\n\n**深入补充（选读）：**\n先说缓存的具体对象、读取热度、可容忍陈旧与失效策略。如果只是小规模字典数据，本地缓存或数据库可能足够；跨实例共享且热点明显时 Redis 更有价值。说明缓存故障如何回源和保护数据库，不能把 Redis 当所有项目必备装饰。\n\n**追问 / 易错点：** 数据库与 Redis 谁是权威？通常业务数据有明确主存，避免双主真相。",
      "sourceIds": [
        "N046"
      ],
      "keywords": [
        "Q12-010",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-011",
      "number": "Q12-011",
      "question": "项目里的事务边界怎么定？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n事务边界围住必须一起成功的数据库操作，例如订单和库存；尽量缩短事务，不在里面等待慢远程调用。跨系统不能自动一起回滚，就用可靠事件、状态和补偿。还要说明异常怎样触发回滚，并实际测过失败路径。\n\n**深入补充（选读）：**\n按需要一起成功的业务不变量划定，如订单创建和本库库存占用；尽量缩短持锁时间，不在事务中长时间调用外部接口。跨系统通过可靠消息、状态机和对账处理，明确最终一致窗口。说明用哪个事务管理器、异常规则和实际代理调用路径。\n\n**追问 / 易错点：** 你怎么验证回滚？在关键步骤制造失败，检查所有相关表和副作用状态。",
      "sourceIds": [],
      "keywords": [
        "Q12-011",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-012",
      "number": "Q12-012",
      "question": "接口幂等在你的项目里怎么实现？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n选择真实的重复来源来讲，例如双击、请求重试、审批回调或 MQ 重投。再讲稳定业务键、唯一约束、处理状态和事务边界，最后说明重复请求返回什么。只有前端防抖，不等于后端已实现可靠幂等。\n\n**深入补充（选读）：**\n选一个实际重复来源：用户重试、MQ重投或审批回调。用稳定业务键、数据库唯一约束和事务记录完成状态；重复请求返回已有结果，失败区分可重试与终态。没有实现过就讲准备采用的方案，不能把前端防抖说成后端已经可靠幂等。\n\n**追问 / 易错点：** 先查再插是否安全？并发下不安全，唯一约束与冲突处理是最后保护。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q12-012",
        "项目 / 实习拷打",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-013",
      "number": "Q12-013",
      "question": "你项目中多线程用在哪里？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n说清哪几个任务能独立执行、为什么要异步或并行、用了什么线程池、队列多大，以及异常和超时怎么收集。没有实际使用就讲同步方案已经够用，不要把建了一个线程池当成已经做过性能优化。\n\n**深入补充（选读）：**\n适合独立远程查询、异步导入导出或并行计算等真实位置，说明任务是否独立、用哪个执行器、队列上限、异常收集和取消。若没有使用，坦诚说明当前同步链路足够。把线程池创建出来但从未提交业务任务，不能算性能优化经验。\n\n**追问 / 易错点：** 异步任务如何拿登录上下文？按必要字段显式传递，并确保清理与权限验证。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "N029",
        "N048",
        "N052",
        "X05"
      ],
      "keywords": [
        "Q12-013",
        "项目 / 实习拷打",
        "熙牛医疗",
        "快手",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-014",
      "number": "Q12-014",
      "question": "为什么要加 MQ？不发消息能不能完成？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先指出必须同步完成的核心步骤，再说哪些后续任务能延迟处理。引入 MQ 是为了避免下游耦合、缩短等待或吸收峰值，同时要承担消息可靠性、幂等和排障成本。规模很小时，同库事务可能更简单。\n\n**深入补充（选读）：**\n以真实场景说明同步耦合或峰值问题，例如审批后生成下游记录允许短暂延迟。指出哪些步骤必须同步返回、哪些可异步，设计消息可靠发布、消费幂等和异常队列。规模小且要求立即结果时，同库事务可能更简单。不要把普通内存事件当已部署独立 MQ。\n\n**追问 / 易错点：** 消息失败用户如何得知？任务状态、异常反馈与运维告警，不能只看日志。",
      "sourceIds": [],
      "keywords": [
        "Q12-014",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-015",
      "number": "Q12-015",
      "question": "认证、权限与多租户如何保证？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n认证确认你是谁，授权确认你能做什么，多租户隔离确认你能操作哪一家的数据。服务端根据可信身份检查资源归属，查询、导出和缓存都要带隔离维度。隐藏按钮、字段只读都不能替代后端权限检查。\n\n**深入补充（选读）：**\n认证确认身份，授权检查操作权限和资源归属。服务端把用户、角色、租户与目标记录关联，数据库访问必须带相应范围，缓存键也包含必要隔离维度。前端只读/隐藏是体验，不是防越权措施。不要仅按客户端传入 creator_id 判断可以修改。\n\n**追问 / 易错点：** 知道别人的单据ID能查到吗？需要对象级授权，避免水平越权。",
      "sourceIds": [
        "N022",
        "N038",
        "NI003"
      ],
      "keywords": [
        "Q12-015",
        "项目 / 实习拷打",
        "BIGO",
        "百度",
        "招银网络科技"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-016",
      "number": "Q12-016",
      "question": "项目日志如何设计和使用？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n日志围绕 traceId、业务单据 ID 和事件 ID 串起关键步骤：收到什么、处理到哪、结果是什么、为什么失败。异常保留根因和堆栈，敏感信息脱敏。指标用来发现异常，日志用来解释细节，别把整个大对象每次都打印。\n\n**深入补充（选读）：**\n按请求 traceId、业务单据ID、事件ID记录关键阶段和结果，异常保留堆栈与 cause，敏感字段脱敏。成功业务不必打印整份大对象，重复异常避免刷屏。跨服务传播 trace，异步消息携带关联信息，并用指标发现问题、日志解释细节。\n\n**追问 / 易错点：** 日志量太大怎么办？分级、采样、保留策略和结构化索引，核心审计不能随意丢。\n\n**面经线索：** [X05 · 得物后端一面9.1](https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post)。",
      "sourceIds": [
        "X05",
        "NI018"
      ],
      "keywords": [
        "Q12-016",
        "项目 / 实习拷打",
        "得物",
        "实在智能"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-017",
      "number": "Q12-017",
      "question": "你如何测试，而不只是“点了一下页面”？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n测试要覆盖正常、边界、权限、重复、并发、超时和回滚。接口测试不只看返回成功，还要查最终数据库和外部状态；修 Bug 后加原场景回归。按真实做过的测试回答，别把手工验证说成完整自动化体系。\n\n**深入补充（选读）：**\n围绕业务规则覆盖正常、边界、权限、重复、并发、超时和回滚。接口测试验证状态码与数据库结果，集成测试验证外部契约，回归测试保护修复过的关键行为。根据实际做过的内容回答，不把手工测试说成完整自动化平台。\n\n**追问 / 易错点：** 修复重复台账如何测？并发投同一事件、注入失败、再次重试，检查最终只有正确一条。",
      "sourceIds": [
        "N002",
        "N019",
        "N026",
        "N027",
        "N039",
        "NI019"
      ],
      "keywords": [
        "Q12-017",
        "项目 / 实习拷打",
        "美团",
        "字节跳动",
        "顺丰",
        "车300",
        "京东",
        "新蛋"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-018",
      "number": "Q12-018",
      "question": "怎么部署、回滚与定位线上问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n按实际流程讲清构建、保存旧版本、注入配置、停止接流量、启动、健康检查和回滚。只做过替换 jar 也可以讲具体命令和验证步骤，不必虚构 CI/CD。进程存在不等于发布成功，还要确认端口和核心接口。\n\n**深入补充（选读）：**\n说明真实流程：构建产物、配置注入、备份或版本保留、停止接流量、启动健康检查和日志验证。回滚需确认新旧配置与表结构兼容。若只是参与替换 jar，就讲清命令、工作目录、端口和检查步骤，不虚构流水线或集群灰度经验。\n\n**追问 / 易错点：** 启动进程存在就代表发布成功吗？还需就绪、依赖连接、核心接口和错误监控。",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "Q12-018",
        "项目 / 实习拷打",
        "实在智能"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-019",
      "number": "Q12-019",
      "question": "一次 Bug 修复你如何证明是根因？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先能复现或留下清晰证据，找到导致错误的最小条件，再解释代码为什么会在该条件下失败。修复后跑原用例、边界和回归。暂时没再出现只是现象，不足以单独证明根因已经修好。\n\n**深入补充（选读）：**\n先稳定复现并缩小最小条件，记录实际与预期差异，用请求、日志和数据证明出错位置。修改后验证原复现、相邻边界和回归路径，解释为什么此改动消除失败条件。不能只靠“改了几行之后暂时没再出现”证明根因。\n\n**追问 / 易错点：** 无法复现的偶发问题怎么办？增加有界观测、关联ID和关键状态，不凭猜测大范围重构。",
      "sourceIds": [
        "N008",
        "N024",
        "N026"
      ],
      "keywords": [
        "Q12-019",
        "项目 / 实习拷打",
        "京东",
        "BIGO",
        "顺丰"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-020",
      "number": "Q12-020",
      "question": "低代码项目如何体现后端技术而非仅拖表单？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n低代码经历的技术点要落在真正做过的后端工作：接口对接、流程事件、跨表一致性、权限、并发校验和部署排障。说明平台本来有什么、你写了什么。不要把平台自带的审批引擎算成自己从零实现。\n\n**深入补充（选读）：**\n如果确实做过，可讲服务端事件、跨表一致性、接口集成、权限校验、并发约束、事务与部署排查，明确配置工作和代码工作的比例。示例表达：围绕【流程结束事件】实现【稳定源ID映射与目标写入】，处理【重复/失败】。不能把平台自带能力全写成个人实现。\n\n**追问 / 易错点：** 哪部分代码你能现场解释？准备事件入参、接口、SQL和失败路径的真实实现。",
      "sourceIds": [],
      "keywords": [
        "Q12-020",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-021",
      "number": "Q12-021",
      "question": "为什么前端字段只读还要后端校验？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n前端只读只限制页面操作，请求仍可能从其他入口发来或被修改。后端必须重新校验权限、金额、数量和状态，派生字段由可信数据计算。前端负责及时提示，后端和数据库负责守住业务规则。\n\n**举个例子：**\n油卡可用金额应由充值、消费等可信记录计算，不能因为页面字段只读，就直接相信请求提交的余额。\n\n**深入补充（选读）：**\n只读只限制某个 UI，客户端可改请求或从其他入口提交，异步流程也可能绕开页面。服务端应对金额、数量、状态、权限和派生字段重新计算校验；前端用于及时提示，后端承担最终约束。对于油卡可用余额等派生值，应明确充值和消费流水的计算口径。\n\n**追问 / 易错点：** 编辑时允许把余额直接传进来覆盖吗？通常不该，应通过可审计业务动作改变。",
      "sourceIds": [],
      "keywords": [
        "Q12-021",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-022",
      "number": "Q12-022",
      "question": "审批通过、提交后、流程结束事件怎么区分？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n提交后只是进入流程，不等于审批完成；审批通过可能是一个节点通过；流程结束是否代表最终成功，要看平台明确的事件定义。先确认触发时机、重复和撤回行为，再绑定生成台账等副作用，不要只凭事件名字猜。\n\n**深入补充（选读）：**\n提交后表示请求进入流程，不等于审批已通过；审批通过可能只是某个节点通过；流程结束才可能代表整个流程达到终态，具体以平台契约为准。写下事件触发条件、执行次数、重试与撤回行为，再绑定副作用。不能从事件名字推测可靠执行和仅触发一次。\n\n**追问 / 易错点：** 事件触发了但没生成记录？检查条件、参数ID、异步状态、事务和目标权限。",
      "sourceIds": [],
      "keywords": [
        "Q12-022",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-023",
      "number": "Q12-023",
      "question": "产品关联唯一计件单价，历史工资如何避免被改动？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n产品用稳定 ID 关联计件单价，唯一约束或版本规则保证当前单价符合业务要求。生成工资时保存当次单价、数量、单位和金额快照；以后改单价，不应直接改掉已确认历史工资。重算和冲销要有明确流程。\n\n**深入补充（选读）：**\n产品用稳定业务ID关联单价，数据库唯一规则确保当前生效版本满足约束；生成工资明细时保存当次适用单价、单位、数量与金额快照。单价后续调整不能直接重算已确认历史工资，需版本或生效期设计。数量精度、舍入、冲销和重新审批也要定义。\n\n**追问 / 易错点：** 只关联单价表不存快照行吗？单价变动后历史解释可能失真。",
      "sourceIds": [],
      "keywords": [
        "Q12-023",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-024",
      "number": "Q12-024",
      "question": "跨系统接口如何处理超时、签名、重试？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先明确接口契约和鉴权，再设置连接、读取和整体超时。每次业务操作使用稳定请求 ID，超时视为结果未知，按幂等键查询或重试。日志保留脱敏摘要和状态，不要重试一次就换一个新业务 ID。\n\n**深入补充（选读）：**\n明确请求/响应契约与错误码，使用规范鉴权或签名并校验时间与重放规则；设置连接、读取和整体超时。稳定请求ID贯穿双方，超时先视为结果未知，按幂等键查询或重试。记录脱敏请求摘要与响应状态，避免每次重试生成新业务ID。\n\n**追问 / 易错点：** HTTP200但返回业务失败码算成功吗？必须按双方契约解析业务结果。",
      "sourceIds": [
        "NI007"
      ],
      "keywords": [
        "Q12-024",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-025",
      "number": "Q12-025",
      "question": "你如何理解 Agent 与普通问答、固定工作流？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n普通问答主要生成回复，工作流按程序预设步骤走，Agent 会根据目标和工具结果动态决定下一步。Agent 的灵活决策外面，仍需程序控制权限、状态、预算和停止条件。一次调用模型的接口，不自动等于完整 Agent。\n\n**举个例子：**\n固定审批是按既定节点流转；Agent 查资料后决定继续搜索还是调用计算工具，才体现根据反馈调整下一步。\n\n**深入补充（选读）：**\n普通问答主要生成回复，固定工作流由程序预设步骤，Agent 在约束范围内根据目标和工具反馈动态选择下一步。系统仍需确定性执行层、状态、权限与终止条件，不能只把一次 LLM 调用包成接口就称完整 Agent。固定流程适合可预测任务，两者可以组合。\n\n**追问 / 易错点：** 项目哪里发生自主决策？指出真实的工具选择、分支或迭代位置。\n\n**原始资料核对 / 延伸查阅：** [A02 · ReAct 原论文](https://arxiv.org/abs/2210.03629)。",
      "sourceIds": [
        "N004",
        "N011",
        "N015",
        "N026",
        "N027",
        "NI007",
        "NI009",
        "NI012",
        "NI021"
      ],
      "keywords": [
        "Q12-025",
        "项目 / 实习拷打",
        "美团",
        "阿里",
        "拼多多",
        "顺丰",
        "车300",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-026",
      "number": "Q12-026",
      "question": "Agent Loop 怎样终止，如何避免无限循环？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nAgent Loop 是“模型决定下一步→校验并执行工具→把结果交回模型→继续或结束”。程序要设置最大轮次、总时间、费用、重复动作和重试上限，不能只盼模型自己说完成。取消和失败也应是明确终态。\n\n**深入补充（选读）：**\n每轮获取模型响应，验证工具调用并执行，把结构化结果回填，直到完成、取消或达到限制。设置最大步数、总时长、费用/token预算、重复动作检测和错误重试上限。终止不仅靠模型输出某个字符串，执行层也必须强制约束并持久化状态。\n\n**追问 / 易错点：** 模型一直换参数重试同一失败工具怎么办？错误分类、重复模式检测和人工/失败出口。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)；[X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [A02 · ReAct 原论文](https://arxiv.org/abs/2210.03629)。",
      "sourceIds": [
        "X01",
        "X03"
      ],
      "keywords": [
        "Q12-026",
        "项目 / 实习拷打",
        "腾讯"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-027",
      "number": "Q12-027",
      "question": "工具调用如何设计协议？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n工具协议要讲清名称、用途、输入参数、输出、错误、权限和超时。模型只提出调用，服务端还要校验参数和授权；有副作用的调用要有稳定 ID 与幂等规则。大结果返回摘要和引用，不把整份日志硬塞给模型。\n\n**深入补充（选读）：**\n工具定义名称、用途、参数 Schema、权限、超时、输出结构和错误类型；执行前做服务端校验，不能只信模型生成JSON。给调用分配ID与幂等键，结果包含状态、摘要和必要引用，避免把大量无关内容全部塞回上下文。需要变更的数据操作还需审计与合理审批。\n\n**追问 / 易错点：** 工具返回超大日志怎么办？分页、截断摘要、持久引用和按需检索。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)。",
      "sourceIds": [
        "X01",
        "NI020"
      ],
      "keywords": [
        "Q12-027",
        "项目 / 实习拷打",
        "腾讯",
        "新蛋"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-028",
      "number": "Q12-028",
      "question": "MCP 是什么？项目为什么要用？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nMCP 是模型应用连接外部工具、资源等能力的标准协议，减少每个工具都单独设计接入方式的重复工作。它规定如何发现和交互，不替代鉴权、沙箱或业务幂等，也不保证模型一定选对工具。\n\n**深入补充（选读）：**\nMCP 定义模型应用与外部能力服务之间的标准交互，包括工具、资源等能力发现和调用相关协议。它减少每种工具都自定义接入的重复工作，但不替代权限、业务鉴权、幂等和执行沙箱。若项目只有一个内部接口，也可说明暂不用 MCP 的成本权衡。\n\n**追问 / 易错点：** MCP 是否决定模型一定调用哪个工具？不决定，选择还受模型、提示和应用策略影响。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)。\n\n**原始资料核对 / 延伸查阅：** [A01 · MCP Specification 2025-06-18](https://modelcontextprotocol.io/specification/2025-06-18)。",
      "sourceIds": [
        "N011",
        "N030",
        "X01",
        "NI011",
        "NI012"
      ],
      "keywords": [
        "Q12-028",
        "项目 / 实习拷打",
        "阿里",
        "科大讯飞",
        "腾讯",
        "BIGO",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-029",
      "number": "Q12-029",
      "question": "Java 后端与 Node/CLI 执行器如何分工？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n一种清晰分工是 Java 管用户、权限、任务和数据库状态，Node/CLI 执行器负责运行工具。两边通过带版本的任务和事件协议协作，用任务 ID 关联，支持取消、心跳和失败恢复。未落地的部分应明确说是设计方案。\n\n**深入补充（选读）：**\n一种可选架构是 Java 管账号、权限、任务和持久状态，独立执行器封装CLI或工具运行。定义带版本的任务、事件、取消与心跳协议，用任务ID关联并保证可重放，明确信任边界、超时和执行器故障接管。若实际项目没这样实现，应描述为设计方案。\n\n**追问 / 易错点：** 执行器重启后怎么知道哪些任务成功？依赖持久检查点和副作用ID，而非只看内存进程句柄。",
      "sourceIds": [],
      "keywords": [
        "Q12-029",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-030",
      "number": "Q12-030",
      "question": "Agent 为什么使用 SSE 或 WebSocket？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nAgent 任务耗时长，前端需要边执行边看进度，所以用 SSE 或 WebSocket。SSE 适合单向推事件，WebSocket 适合双向实时交互。事件带任务 ID 和序号，结果持久化，断线后查状态或补事件，而不是丢掉全部进度。\n\n**深入补充（选读）：**\n长任务要及时展示进度，SSE 适合单向事件，WebSocket 适合持续双向交互。事件带任务ID和递增序号，客户端按序去重；断线后查询当前状态并重放缺失事件。完成结果需持久化，连接断了不等于任务取消，前端收到结束事件也要与后端终态一致。\n\n**追问 / 易错点：** 慢客户端怎么办？限制缓冲、合并非关键事件或断开重连，不能无限积压。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。\n\n**原始资料核对 / 延伸查阅：** [N06 · WHATWG：Server-sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q12-030",
        "项目 / 实习拷打",
        "腾讯"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-031",
      "number": "Q12-031",
      "question": "RAG 的完整链路与评估怎么讲？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\nRAG 先把文档解析、切块、向量化并建索引；用户提问后检索相关片段，必要时重排，再让模型依据这些材料回答。排错时先查有没有召回正确证据，再查模型是否正确使用证据，不能所有错误都怪生成模型。\n\n**深入补充（选读）：**\n离线解析文档、切块、保留来源与权限元数据、生成向量并建索引；在线按问题召回、必要时重排，带来源上下文生成答案。评估拆为召回覆盖、排序效果、答案忠实度、引用正确性和延迟成本。只有上传文档调了某SDK，也应讲清自己实际完成的环节。\n\n**追问 / 易错点：** 回答错误一定是模型问题吗？可能检索没召回、切块丢上下文或权限过滤错误。\n\n**面经线索：** [X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)；[X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**原始资料核对 / 延伸查阅：** [A03 · RAG 原论文](https://arxiv.org/abs/2005.11401)。",
      "sourceIds": [
        "N005",
        "N022",
        "N030",
        "N041",
        "X03",
        "X07",
        "NI004",
        "NI005",
        "NI007",
        "NI008",
        "NI021",
        "NI023"
      ],
      "keywords": [
        "Q12-031",
        "项目 / 实习拷打",
        "美团",
        "BIGO",
        "科大讯飞",
        "腾讯",
        "招银网络科技",
        "携程",
        "阿里",
        "未具名公司"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-032",
      "number": "Q12-032",
      "question": "上下文过长、工具结果过大怎么处理？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n上下文先保留当前目标、硬约束、最近相关操作和未完成事项；历史压成结构化摘要，完整记录留在外部按需取。工具大输出先摘要或分页，并给生成答案留预算。订单号和授权等关键状态应单独存储，不能只靠摘要记住。\n\n**深入补充（选读）：**\n先做 token 预算，为输出和在途工具返回留空间，保留目标、约束、最近相关操作和未完成事项。旧历史可结构化摘要，原始轨迹存储后按需检索；大工具输出用分页与引用。摘要要保留事实来源，用户内容与工具内容保持低信任身份，不提升成系统指令。\n\n**追问 / 易错点：** 压缩后漏掉约束怎么办？关键约束结构化持久化并在每次执行前验证。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)；[X03 · 微信后端开发秋招一面](https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post)。",
      "sourceIds": [
        "X01",
        "X03",
        "NI021"
      ],
      "keywords": [
        "Q12-032",
        "项目 / 实习拷打",
        "腾讯",
        "阿里"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-033",
      "number": "Q12-033",
      "question": "Agent 执行代码怎样控制风险？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n执行代码要靠隔离环境和最小权限，限制文件路径、网络、CPU、内存、时长及进程数；高影响操作先获得应用层授权，再记录审计。工具输出只能当数据，不能升级成系统指令。提示词里写“不许乱来”不是沙箱。\n\n**深入补充（选读）：**\n使用隔离环境和最小权限，限制文件范围、网络、CPU、内存、运行时间与进程数，区分只读工具和有副作用工具。对高影响操作采用应用层授权与审计，工具结果视为数据而非可信指令。只把危险命令写进提示词黑名单不构成可靠沙箱。\n\n**追问 / 易错点：** 容器是否绝对安全？不是，仍需配置隔离、限制能力并考虑宿主边界。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)。",
      "sourceIds": [
        "N022",
        "X01",
        "NI007"
      ],
      "keywords": [
        "Q12-033",
        "项目 / 实习拷打",
        "BIGO",
        "腾讯",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-034",
      "number": "Q12-034",
      "question": "如何评价 Agent 的效果和成本？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n评价 Agent 先定义一批真实任务和成功标准，再测完成率、错误副作用、人工介入、步骤、延迟和成本。分析失败是路由、参数、工具还是检索问题。演示成功一次不能证明稳定，降低成本也要同步观察质量。\n\n**深入补充（选读）：**\n建立真实任务集，记录成功标准、完成率、人工介入率、错误副作用、步数、总延迟与token/工具成本。比较固定工作流与Agent方案，分析失败是在规划、参数、工具、检索还是权限。不能以“回答很像人”或一个演示成功证明可靠性。\n\n**追问 / 易错点：** 如何降低成本而不牺牲质量？缩小工具输出、缓存稳定结果、按任务分层模型并做对照评估。",
      "sourceIds": [
        "N031",
        "NI007"
      ],
      "keywords": [
        "Q12-034",
        "项目 / 实习拷打",
        "拼多多",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q12-035",
      "number": "Q12-035",
      "question": "不会的问题或未做过的技术怎么回答？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n不会或没做过时，先说清经验范围，再讲确定知道的原理和准备如何验证。可以说“这块没有实际落地，我理解是……，放到这个场景会先确认……”。不要编线上事故、流量或个人贡献，能讲透真实细节更重要。\n\n**深入补充（选读）：**\n先明确经验边界：“这块我没有实际落地，理解的原理是……；如果在当前业务实施，我会先确认……，再验证……”。给出有依据的设计和验证方法，不编真实流量、线上事故或个人贡献。反问可以问团队业务链路、技术挑战、实习生职责和评价方式，把面试转成双向确认。\n\n**追问 / 易错点：** 面试官继续深挖怎么办？把已知事实、推测和待验证点分开，承认暂时不能确认。",
      "sourceIds": [
        "N008",
        "N019",
        "N024",
        "N030",
        "N031",
        "N033",
        "X01",
        "X02",
        "X03",
        "X04",
        "X05"
      ],
      "keywords": [
        "Q12-035",
        "项目 / 实习拷打",
        "京东",
        "字节跳动",
        "BIGO",
        "科大讯飞",
        "拼多多",
        "同程",
        "腾讯",
        "综合",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md"
    },
    {
      "id": "bank-Q13-001",
      "number": "Q13-001",
      "question": "时间复杂度与空间复杂度怎么分析？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n时间复杂度看输入变大后，主要操作次数怎样增长；空间复杂度看额外需要多少存储。先确定 n 是什么，再统计循环和递归。两层循环不一定 O(n²)，关键看总推进次数；递归调用栈也要算空间。\n\n**深入补充（选读）：**\n先确定输入规模 n，计算主导循环/递归总工作量，忽略常数与低阶项。两层循环不必然 O(n²)，双指针总推进 n 次常为 O(n)；均摊 O(1) 不等于每次最坏 O(1)。递归空间需计栈深，输出空间最好单独说明。排序、哈希、比较器与子串复制的成本也要计入。\n\n**追问 / 易错点：** 边界：HashMap 操作常说平均 O(1)，别把退化风险或键比较成本完全忽略。",
      "sourceIds": [],
      "keywords": [
        "Q13-001",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-002",
      "number": "Q13-002",
      "question": "两数之和怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用哈希表记住前面见过的数字及下标。扫到 x 时，先找 target-x，找到就返回；没找到再保存 x。先查后存可避免重复使用当前元素。平均时间 O(n)，空间 O(n)。\n\n**举个例子：**\n数组 [2,7,11]，目标 9：看到 2 先记下；看到 7 时查 9-7=2，之前有 2，答案就是它们的下标。\n\n**深入补充（选读）：**\n遍历数组，用哈希表存之前元素到下标的映射，对当前值查 target-current，找到就返回两个下标，然后再把当前值放入表，避免同一元素用两次。平均时间 O(n)，额外空间 O(n)。若 int 差可能溢出，可按约束使用 long 键；先确认无解如何返回。\n\n**追问 / 易错点：** 边界：重复数如[3,3]、负数、无解与只有一个元素。Java 示例见代码02。\n\n**Java 核心代码02：**\n\n```java\nstatic int[] twoSum(int[] a, int target) {\n    Map<Long, Integer> seen = new HashMap<>();\n    for (int i = 0; i < a.length; i++) {\n        Integer j = seen.get((long) target - a[i]);\n        if (j != null) return new int[]{j, i};\n        seen.put((long) a[i], i);\n    }\n    return new int[]{-1, -1};\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-002",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-003",
      "number": "Q13-003",
      "question": "三数之和如何去重？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先排序，再固定一个数，用左右指针找另外两个。总和小了左指针右移，大了右指针左移，等于目标就记录；固定数和两端重复值都要跳过。时间 O(n²)，不要靠最后全部塞 Set 掩盖去重逻辑。\n\n**深入补充（选读）：**\n排序后固定一个位置，再用左右指针找相反和；和小则左指针右移、和大则右指针左移。固定值和找到答案后的两侧重复值都跳过，结果无需重复加入。时间 O(n²)，额外空间按排序实现和输出另计；求和用 long 防整型溢出。\n\n**追问 / 易错点：** 边界：[0,0,0,0]只输出一组，数组不足3个直接空。Java 示例见代码03。\n\n**Java 核心代码03：**\n\n```java\nstatic List<List<Integer>> threeSum(int[] input) {\n    int[] a = input.clone();\n    Arrays.sort(a);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i + 2 < a.length; i++) {\n        if (i > 0 && a[i] == a[i - 1]) continue;\n        int l = i + 1, r = a.length - 1;\n        while (l < r) {\n            long sum = (long) a[i] + a[l] + a[r];\n            if (sum < 0) l++;\n            else if (sum > 0) r--;\n            else {\n                ans.add(Arrays.asList(a[i], a[l], a[r]));\n                int lv = a[l], rv = a[r];\n                while (l < r && a[l] == lv) l++;\n                while (l < r && a[r] == rv) r--;\n            }\n        }\n    }\n    return ans;\n}\n```",
      "sourceIds": [
        "N041",
        "N050"
      ],
      "keywords": [
        "Q13-003",
        "算法与数据结构",
        "BIGO",
        "小米"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-004",
      "number": "Q13-004",
      "question": "最长无重复子串怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用滑动窗口维护“当前没有重复字符的一段”。右边不断加入字符，遇到重复，就把左边移到该字符上次位置之后，但左边不能后退。不断记录最大窗口长度，时间 O(n)。\n\n**举个例子：**\nabba：扫到第二个 b，左边移到它前一个 b 后面；最后看到 a 时，不能把左边重新退回开头。\n\n**深入补充（选读）：**\n滑动窗口维护无重复区间，可记录字符最近位置。右端加入字符时，把左端提升到 max(当前左端,上次位置+1)，更新最大长度。时间 O(n)，空间 O(字符种类)。按 Java char 写法处理 UTF-16 单元，若题目要求 Unicode 码点需先转换。\n\n**追问 / 易错点：** 边界：abba 中左指针不能后退。Java 示例见代码04。\n\n**Java 核心代码04：**\n\n```java\nstatic int longestUnique(String s) {\n    Map<Character, Integer> last = new HashMap<>();\n    int left = 0, best = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        Integer old = last.put(c, right);\n        if (old != null) left = Math.max(left, old + 1);\n        best = Math.max(best, right - left + 1);\n    }\n    return best;\n}\n```",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q13-004",
        "算法与数据结构",
        "百度"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-005",
      "number": "Q13-005",
      "question": "最小覆盖子串怎么求？",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先数目标字符串每个字符需要几个。右边扩窗口直到全部满足，再尽量收左边，同时记录最短答案；一旦少了某个必须字符，再继续扩。比较的是数量，不是仅看是否出现。时间 O(n+m)。\n\n**举个例子：**\n目标 AABC 需要两个 A，窗口 ABC 并不满足，所以只用 Set 判断字符种类不够。\n\n**深入补充（选读）：**\n统计目标字符频次，扩右边直到覆盖全部所需字符，再收左边到刚好不满足，记录最短区间。要按出现次数而非只按字符是否存在。每个指针最多推进 n 次，时间 O(n+m)，空间按字符集合。目标空串和无解先定义返回。\n\n**追问 / 易错点：** 边界：目标含重复字符如AABC，不能只维护Set。Java 示例见代码05。\n\n**Java 核心代码05：**\n\n```java\nstatic String minWindow(String s, String t) {\n    if (t.isEmpty() || s.length() < t.length()) return \"\";\n    int[] need = new int[65536]; // UTF-16代码单元；不是Unicode码点\n    for (int i = 0; i < t.length(); i++) need[t.charAt(i)]++;\n    int missing = t.length(), left = 0, start = 0, len = Integer.MAX_VALUE;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c]-- > 0) missing--;\n        while (missing == 0) {\n            if (right - left + 1 < len) {\n                len = right - left + 1;\n                start = left;\n            }\n            char out = s.charAt(left++);\n            if (++need[out] > 0) missing++;\n        }\n    }\n    return len == Integer.MAX_VALUE ? \"\" : s.substring(start, start + len);\n}\n```",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q13-005",
        "算法与数据结构",
        "字节跳动"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-006",
      "number": "Q13-006",
      "question": "和为 K 的连续子数组怎么数？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用前缀和把区间求和变成两次累计和相减。当前累计和是 s，前面每出现一次 s-k，就多一个和为 k 的区间；用哈希表保存次数。初始化和 0 出现一次，先查询再登记当前和。平均 O(n)。\n\n**举个例子：**\n[1,2,1]，k=3：前缀和走到 3，找到初始 0；走到 4，找到前面的 1，所以有两个区间。\n\n**深入补充（选读）：**\n维护前缀和 s，若此前有前缀和 s-k，则二者之间子数组和为 k。用哈希表累计每种前缀和出现次数，初始0出现一次；先查询再把当前和加入，避免把空区间算入。支持负数，平均时间 O(n)，空间 O(n)，总和及答案可用 long。\n\n**追问 / 易错点：** 边界：全零数组有 n(n+1)/2 个满足k=0的区间，普通正数滑窗不适用。Java 示例见代码06。\n\n**Java 核心代码06：**\n\n```java\nstatic long subarraySum(int[] a, long k) {\n    Map<Long, Long> freq = new HashMap<>();\n    freq.put(0L, 1L);\n    long sum = 0, answer = 0;\n    for (int x : a) {\n        sum += x;\n        answer += freq.getOrDefault(sum - k, 0L);\n        freq.put(sum, freq.getOrDefault(sum, 0L) + 1);\n    }\n    return answer;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-006",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-007",
      "number": "Q13-007",
      "question": "合并重叠区间怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先按区间起点排序。每次和结果中最后一个区间比较：重叠就把终点扩到更远，不重叠就另加一个区间。排序后只需扫一遍，总时间 O(n log n)。端点相接算不算重叠，要按题目边界定义。\n\n**举个例子：**\n闭区间 [1,3] 和 [2,6] 合成 [1,6]；再遇到 [8,10]，就新开一个区间。\n\n**深入补充（选读）：**\n先按起点升序排序，依次把当前区间和结果末尾比较，重叠则扩大末尾终点，否则新开区间。时间 O(n log n)，额外输出 O(n)。起点相同、端点相接是否算重叠要看闭区间/开区间题意，比较器用 Integer.compare 避免相减溢出。\n\n**追问 / 易错点：** 边界：空输入、包含关系、负端点。Java 示例见代码07。\n\n**Java 核心代码07：**\n\n```java\nstatic int[][] mergeIntervals(int[][] input) {\n    if (input.length == 0) return new int[0][];\n    int[][] a = new int[input.length][];\n    for (int i = 0; i < input.length; i++) a[i] = input[i].clone();\n    Arrays.sort(a, (x, y) -> Integer.compare(x[0], y[0]));\n    List<int[]> out = new ArrayList<>();\n    for (int[] cur : a) {\n        if (out.isEmpty() || out.get(out.size() - 1)[1] < cur[0]) {\n            out.add(cur);\n        } else {\n            int[] last = out.get(out.size() - 1);\n            last[1] = Math.max(last[1], cur[1]);\n        }\n    }\n    return out.toArray(new int[out.size()][]);\n}\n```",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q13-007",
        "算法与数据结构",
        "招银网络科技"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-008",
      "number": "Q13-008",
      "question": "二分查找如何避免死循环和越界？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n二分先选定一种边界写法，例如左闭右开 [left,right)。每轮根据 mid 判断，把不可能的半边排除；更新必须让区间变小。普通二分时间 O(log n)、空间 O(1)，不要混用 right=mid 与 right=mid-1 的不同模板。\n\n**深入补充（选读）：**\n选定一个区间不变量并从头保持，如左闭右开[lo,hi)。每次 mid=lo+(hi-lo)/2，按条件收缩为[lo,mid)或[mid+1,hi)，终止时lo==hi。不要混用闭区间模板；查找边界需明确找到相等后仍往哪边逼近。时间 O(log n)，空间 O(1)。\n\n**追问 / 易错点：** 边界：空数组、单元素、不存在、全部相等。Java 示例见代码08。\n\n**Java 核心代码08：**\n\n```java\nstatic int lowerBound(int[] a, int x) {\n    int lo = 0, hi = a.length;\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] < x) lo = mid + 1;\n        else hi = mid;\n    }\n    return lo;\n}\nstatic int binarySearch(int[] a, int x) {\n    int p = lowerBound(a, x);\n    return p < a.length && a[p] == x ? p : -1;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-008",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-009",
      "number": "Q13-009",
      "question": "怎样用二分查找有序数组中目标值的第一次和最后一次出现位置？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n做两次二分：找第一个大于等于 target 的位置，再找第一个大于 target 的位置。第二个位置减一就是最后一次出现。最后检查目标是否存在，不存在返回 [-1,-1]。时间 O(log n)。\n\n**举个例子：**\n[1,2,2,2,3] 查 2：第一个 >=2 在 1，第一个 >2 在 4，所以范围是 [1,3]。\n\n**深入补充（选读）：**\n分别求第一个>=target的位置和第一个>target的位置，后者减一即右边界。若左边界越界或元素不等则返回[-1,-1]。两次二分时间 O(log n)、空间 O(1)，不要通过 target+1 求上界而忽略 int 最大值溢出。\n\n**追问 / 易错点：** 边界：目标等于Integer.MAX_VALUE。Java 示例见代码09。\n\n**面经线索：** [X01 · 腾讯后端暑期实习面试记录](https://www.nowcoder.com/discuss/863532788627116032)。\n\n**Java 核心代码09：**\n\n```java\nstatic int[] searchRange(int[] a, int x) {\n    int left = lowerBound(a, x); // 复用代码08\n    if (left == a.length || a[left] != x) return new int[]{-1, -1};\n    int lo = left, hi = a.length;\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] <= x) lo = mid + 1;\n        else hi = mid;\n    }\n    return new int[]{left, lo - 1};\n}\n```",
      "sourceIds": [
        "X01"
      ],
      "keywords": [
        "Q13-009",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-010",
      "number": "Q13-010",
      "question": "搜索旋转有序数组怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n旋转有序数组没有重复值时，每轮至少有一半仍然有序。先判断哪半有序，再看 target 是否位于那半的数值范围，决定保留哪边。时间 O(log n)；允许重复时，某些情况只能逐步缩边，最坏 O(n)。\n\n**深入补充（选读）：**\n若元素互异，每轮至少有一半有序，先判断左半还是右半，再看目标是否落在该有序范围内以缩小搜索。时间 O(log n)、空间 O(1)。若允许大量重复，无法总靠端点判别，最坏可能退化 O(n)，必须区分题目版本。\n\n**追问 / 易错点：** 边界：未旋转、旋转一位、目标不存在。Java 示例见代码10。\n\n**Java 核心代码10：**\n\n```java\nstatic int searchRotated(int[] a, int x) { // 元素互异\n    int lo = 0, hi = a.length - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] == x) return mid;\n        if (a[lo] <= a[mid]) {\n            if (a[lo] <= x && x < a[mid]) hi = mid - 1;\n            else lo = mid + 1;\n        } else {\n            if (a[mid] < x && x <= a[hi]) lo = mid + 1;\n            else hi = mid - 1;\n        }\n    }\n    return -1;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-010",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-011",
      "number": "Q13-011",
      "question": "反转单链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n反转链表每步做三件事：先保存 next，再让当前节点指向 prev，最后把 prev 和 cur 往前推进。结束时 prev 是新头。迭代时间 O(n)、额外空间 O(1)，关键是别在改 next 时丢掉后半条链。\n\n**举个例子：**\n1→2→3：处理 2 前先记住 3，再改 2→1，之后才能继续处理 3。\n\n**深入补充（选读）：**\n用prev和cur迭代，每次先保存cur.next，再把cur.next指向prev，最后推进两个指针。时间 O(n)，额外空间 O(1)。递归也可，但栈深 O(n)，长链表可能栈溢出。返回新头prev，原头成为尾并应指向null。\n\n**追问 / 易错点：** 边界：空链表、单节点、不要先改next再丢掉后续链。Java 示例见代码11。\n\n**Java 核心代码11：**\n\n```java\nstatic ListNode reverse(ListNode head) {\n    ListNode prev = null, cur = head;\n    while (cur != null) {\n        ListNode next = cur.next;\n        cur.next = prev;\n        prev = cur;\n        cur = next;\n    }\n    return prev;\n}\n```",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q13-011",
        "算法与数据结构",
        "美团"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-012",
      "number": "Q13-012",
      "question": "如何判断链表有环并找到入口？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n快指针每次两步，慢指针一步；有环时会相遇。相遇后让一个回到头，两者都一次走一步，再次相遇的位置就是环入口。时间 O(n)、空间 O(1)，先做好 fast 和 fast.next 判空。\n\n**深入补充（选读）：**\n快慢指针每次走两步/一步，若相遇说明有环；随后一个指针回到头，两个都一步走，再次相遇即入口。依据路程差为环长倍数。时间 O(n)，空间 O(1)，注意 fast 和 fast.next 判空。\n\n**追问 / 易错点：** 边界：头就是环入口、一个节点自环、无环链。Java 示例见代码12。\n\n**Java 核心代码12：**\n\n```java\nstatic ListNode cycleEntry(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            ListNode p = head;\n            while (p != slow) {\n                p = p.next;\n                slow = slow.next;\n            }\n            return p;\n        }\n    }\n    return null;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-012",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-013",
      "number": "Q13-013",
      "question": "删除链表倒数第 N 个节点？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n加一个 dummy 节点。快指针先从 dummy 走 n 步，再让快慢一起走到快指针位于尾部；这时慢指针就在待删节点前面，跳过它即可。时间 O(L)、空间 O(1)，dummy 能统一删除头节点的情况。\n\n**深入补充（选读）：**\n加哑节点，快指针先从哑节点前进n步，再让快慢一起移动直到快指向尾，慢指向待删节点前驱，修改next。时间 O(L)，空间 O(1)。确认n有效，否则显式拒绝，不能直接空指针。哑节点统一删除头结点的处理。\n\n**追问 / 易错点：** 边界：删除唯一节点、n等于链长、n非法。Java 示例见代码13。\n\n**面经线索：** [X06 · 好未来Java面经（可见转发内容）](https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664)；[X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**Java 核心代码13：**\n\n```java\nstatic ListNode removeNthFromEnd(ListNode head, int n) {\n    if (n <= 0) throw new IllegalArgumentException(\"n must be positive\");\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i < n; i++) {\n        fast = fast.next;\n        if (fast == null) throw new IllegalArgumentException(\"n exceeds length\");\n    }\n    while (fast.next != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}\n```",
      "sourceIds": [
        "N042",
        "X06",
        "X08"
      ],
      "keywords": [
        "Q13-013",
        "算法与数据结构",
        "美团",
        "好未来"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-014",
      "number": "Q13-014",
      "question": "合并两个有序链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用 dummy 和尾指针，每次比较两条链表当前头，把较小节点接到结果尾部，并推进那条链。某一条用完，直接接上另一条剩余部分。时间 O(m+n)，复用节点时额外空间 O(1)。\n\n**深入补充（选读）：**\n哑节点加尾指针，每次从两个头中取较小节点接到尾后，推进对应链表；某条耗尽后接上另一条剩余部分。时间 O(m+n)，若复用原节点额外空间 O(1)。要说明会改变原链表连接关系，若要求不修改输入则需新建节点。\n\n**追问 / 易错点：** 边界：某条为空、重复值、两条链是否可能共享节点需按题目约束。Java 示例见代码14。\n\n**Java 核心代码14：**\n\n```java\nstatic ListNode mergeTwo(ListNode a, ListNode b) {\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (a != null && b != null) {\n        if (a.val <= b.val) { tail.next = a; a = a.next; }\n        else { tail.next = b; b = b.next; }\n        tail = tail.next;\n    }\n    tail.next = a != null ? a : b;\n    return dummy.next;\n}\n```",
      "sourceIds": [
        "N042",
        "NI025"
      ],
      "keywords": [
        "Q13-014",
        "算法与数据结构",
        "美团",
        "阿里"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-015",
      "number": "Q13-015",
      "question": "合并 K 个有序链表？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n把每条链表的头放进小顶堆。每次取最小节点接到答案，再把它的下一个节点放进堆，直到堆空。总节点数 N、链表数 k 时，时间 O(N log k)、额外空间 O(k)。\n\n**举个例子：**\n堆里始终只保留每条链当前的候选头，不需要一次放入所有节点。\n\n**深入补充（选读）：**\n小顶堆先放各非空头，每次取最小节点接到结果，再加入其后继。总节点数N时，时间 O(N log k)，额外空间 O(k)；也可两两分治合并达到同级复杂度。若每链m个节点则N=km，不应误写成O(m log k)。\n\n**追问 / 易错点：** 边界：k=0、空链混入、堆比较器溢出。Java 示例见代码15。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**Java 核心代码15：**\n\n```java\nstatic ListNode mergeK(ListNode[] lists) {\n    PriorityQueue<ListNode> heap = new PriorityQueue<>(\n        (a, b) -> Integer.compare(a.val, b.val));\n    for (ListNode node : lists) if (node != null) heap.offer(node);\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (!heap.isEmpty()) {\n        ListNode node = heap.poll();\n        if (node.next != null) heap.offer(node.next);\n        tail.next = node;\n        tail = node;\n    }\n    tail.next = null;\n    return dummy.next;\n}\n```",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q13-015",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-016",
      "number": "Q13-016",
      "question": "如何判断两个链表相交？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n两个指针分别走 A、B，走到末尾后切换到另一条链的头。这样两人走过的总长度一致，最终在相交节点或 null 相遇。比较节点引用，不是节点值；无环前提下时间 O(m+n)、空间 O(1)。\n\n**深入补充（选读）：**\n两个指针分别从两个头开始，走到null后切到另一条链表头；各走完相同总长度后，会在公共节点或null相遇。比较的是节点引用身份，不是节点值。无环前提下时间 O(m+n)、空间 O(1)，有环问题需另行分类。\n\n**追问 / 易错点：** 边界：值完全一样也不等于共享同一节点。Java 示例见代码16。\n\n**Java 核心代码16：**\n\n```java\nstatic ListNode intersection(ListNode a, ListNode b) { // 两链均无环\n    ListNode p = a, q = b;\n    while (p != q) {\n        p = p == null ? b : p.next;\n        q = q == null ? a : q.next;\n    }\n    return p;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-016",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-017",
      "number": "Q13-017",
      "question": "有效括号如何判断？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n左括号入栈，右括号检查栈顶是否是对应左括号，匹配才弹出。中途不匹配立即失败，最后栈为空才算合法。时间 O(n)、空间 O(n)，仅数量相同不能保证顺序正确。\n\n**举个例子：**\n([)] 虽然每种左右括号数量一样，但遇到 ) 时栈顶是 [，所以不合法。\n\n**深入补充（选读）：**\n遇左括号压栈，遇右括号要求栈非空且顶部类型匹配，最终栈为空才合法。时间 O(n)，空间 O(n)。若题目可能含其他字符，先定义忽略还是判非法；示例只接受括号字符。用ArrayDeque作栈比历史Stack更常见。\n\n**追问 / 易错点：** 边界：空串、先右括号、交叉嵌套([)]。Java 示例见代码17。\n\n**Java 核心代码17：**\n\n```java\nstatic boolean validBrackets(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '[' || c == '{') stack.push(c);\n        else {\n            if (c != ')' && c != ']' && c != '}') return false;\n            if (stack.isEmpty()) return false;\n            char open = stack.pop();\n            if ((c == ')' && open != '(') ||\n                (c == ']' && open != '[') ||\n                (c == '}' && open != '{')) return false;\n        }\n    }\n    return stack.isEmpty();\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-017",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-018",
      "number": "Q13-018",
      "question": "最小栈怎样做到 O(1) 查询最小值？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n一个栈存数据，另一个栈同步存“到这一层为止的最小值”。入栈时更新最小值，出栈时两个一起弹。这样 getMin 直接看辅助栈顶，所有基本操作都是 O(1)。重复最小值也必须处理。\n\n**举个例子：**\n依次压入 3、1、2，辅助栈存 3、1、1；弹出 2 后最小值仍然是 1。\n\n**深入补充（选读）：**\n数据栈记录元素，辅助栈同步记录每层对应的最小值，入栈取min(新值,上一层最小)，出栈两边一起弹。push/pop/top/getMin均O(1)，空间O(n)。也可只在<=最小时压辅助栈，但必须处理重复最小值。\n\n**追问 / 易错点：** 边界：压入两个相同最小值再弹一个后，最小值应仍存在。Java 示例见代码18。\n\n**Java 核心代码18：**\n\n```java\nstatic class MinStack {\n    private final Deque<Integer> data = new ArrayDeque<>();\n    private final Deque<Integer> mins = new ArrayDeque<>();\n    void push(int x) {\n        data.push(x);\n        mins.push(mins.isEmpty() ? x : Math.min(x, mins.peek()));\n    }\n    int pop() { int x = data.pop(); mins.pop(); return x; }\n    int top() {\n        if (data.isEmpty()) throw new NoSuchElementException();\n        return data.peek();\n    }\n    int getMin() {\n        if (mins.isEmpty()) throw new NoSuchElementException();\n        return mins.peek();\n    }\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-018",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-019",
      "number": "Q13-019",
      "question": "用单调栈解决每日温度？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用单调栈保存还没等到更高温度的下标。新温度更高时，把栈顶较低温度的下标弹出，答案就是当前下标减它的下标。每个下标最多进出一次，总时间 O(n)，没等到更高温度的保持 0。\n\n**深入补充（选读）：**\n维护下标栈，使对应温度从栈底到顶单调不增。扫描新温度时，弹出所有温度更低的下标，并记录当前位置减原下标为等待天数。每个元素入栈出栈至多一次，时间O(n)，空间O(n)，剩余位置默认0。\n\n**追问 / 易错点：** 边界：相等温度不能视为更暖。Java 示例见代码19。\n\n**Java 核心代码19：**\n\n```java\nstatic int[] dailyTemperatures(int[] t) {\n    int[] answer = new int[t.length];\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i < t.length; i++) {\n        while (!stack.isEmpty() && t[stack.peek()] < t[i]) {\n            int j = stack.pop();\n            answer[j] = i - j;\n        }\n        stack.push(i);\n    }\n    return answer;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-019",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-020",
      "number": "Q13-020",
      "question": "滑动窗口最大值怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n用双端队列保存可能成为最大值的下标：队头移走已过期的，队尾移走不比新元素大的，剩下按值递减。队头就是当前窗口最大值。每个下标最多进出一次，时间 O(n)、空间 O(k)。\n\n**举个例子：**\n存下标而不是只存值，才知道哪个元素已经离开窗口；重复最大值也能正确处理。\n\n**深入补充（选读）：**\n用双端队列存下标，先淘汰窗口外下标，再从尾部移除不比当前值大的候选，队头就是最大值。每个下标至多进出一次，时间O(n)，空间O(k)。保存下标才能判断是否过期，k必须在有效范围。\n\n**追问 / 易错点：** 边界：k=1、k=n、全部相等。Java 示例见代码20。\n\n**Java 核心代码20：**\n\n```java\nstatic int[] windowMax(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    int[] out = new int[a.length - k + 1];\n    Deque<Integer> dq = new ArrayDeque<>();\n    for (int i = 0; i < a.length; i++) {\n        while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();\n        while (!dq.isEmpty() && a[dq.peekLast()] <= a[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) out[i - k + 1] = a[dq.peekFirst()];\n    }\n    return out;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-020",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-021",
      "number": "Q13-021",
      "question": "手写 LRU 缓存的结构与操作？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nLRU 用哈希表快速找到节点，用双向链表记录最近使用顺序。访问或更新就移到最新位置，容量满时删最久没用的尾节点，同时删哈希映射。平均 get/put 都是 O(1)，仅一个普通队列不够快速移动任意节点。\n\n**深入补充（选读）：**\n哈希表把key映射到双向链表节点，链表按最近使用顺序排列。get命中与put更新都移动节点到头，新增超过容量从尾淘汰并删映射。平均get/put均O(1)，空间O(capacity)。哑头尾简化边界，生产并发版本还需锁或成熟缓存库。\n\n**追问 / 易错点：** 边界：容量0、覆盖既有key、尾节点被更新。Java 示例见代码21。\n\n**Java 核心代码21：**\n\n```java\nstatic class LRUCache {\n    private static class Node {\n        int key, value; Node prev, next;\n        Node(int key, int value) { this.key = key; this.value = value; }\n    }\n    private final int capacity;\n    private final Map<Integer, Node> map = new HashMap<>();\n    private final Node head = new Node(0, 0), tail = new Node(0, 0);\n    LRUCache(int capacity) {\n        if (capacity < 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    private void unlink(Node n) {\n        n.prev.next = n.next; n.next.prev = n.prev;\n    }\n    private void addFirst(Node n) {\n        n.next = head.next; n.prev = head;\n        head.next.prev = n; head.next = n;\n    }\n    int get(int key) {\n        Node n = map.get(key);\n        if (n == null) return -1; // 教学约定：-1表示未命中\n        unlink(n); addFirst(n); return n.value;\n    }\n    void put(int key, int value) {\n        Node n = map.get(key);\n        if (n != null) { n.value = value; unlink(n); addFirst(n); return; }\n        n = new Node(key, value); map.put(key, n); addFirst(n);\n        if (map.size() > capacity) {\n            Node old = tail.prev; unlink(old); map.remove(old.key);\n        }\n    }\n}\n```",
      "sourceIds": [
        "N024",
        "N052",
        "NI014",
        "NI025"
      ],
      "keywords": [
        "Q13-021",
        "算法与数据结构",
        "BIGO",
        "快手",
        "腾讯",
        "阿里"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-022",
      "number": "Q13-022",
      "question": "数组中第 K 大元素怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n找第 k 大，可以维护大小 k 的小顶堆，堆里始终留下最大的 k 个，堆顶就是其中最小的，也就是第 k 大。时间 O(n log k)、空间 O(k)。快速选择平均 O(n)，但最坏 O(n²)。\n\n**举个例子：**\n找最大的 3 个，用小顶堆便于踢掉“当前保留集合里最小的”；不要和找最小 k 个的大顶堆混淆。\n\n**深入补充（选读）：**\n可维护大小k的小顶堆，扫描时保留最大的k项，堆顶就是第k大，时间O(n log k)、空间O(k)。快速选择平均O(n)，最坏O(n²)，通常随机化并正确处理重复值。第k大一般按元素次数排名，不等于第k个不同值。\n\n**追问 / 易错点：** 边界：k=1、k=n、重复数。Java 示例见代码22。\n\n**Java 核心代码22：**\n\n```java\nstatic int kthLargest(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    PriorityQueue<Integer> heap = new PriorityQueue<>();\n    for (int x : a) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    return heap.peek();\n}\n```",
      "sourceIds": [
        "N002",
        "N005",
        "N054"
      ],
      "keywords": [
        "Q13-022",
        "算法与数据结构",
        "美团",
        "货拉拉"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-023",
      "number": "Q13-023",
      "question": "前 K 个高频元素怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n先用哈希表统计每个元素出现次数，再用大小 k 的小顶堆保留频率最高的 k 个，或按频次分桶。并列频率的输出规则要先说明。哈希+堆常为平均 O(n+u log k)，u 是不同元素数。\n\n**深入补充（选读）：**\n先哈希计数，再维护大小k的频次小顶堆，或按频次桶排序。哈希加堆平均时间O(n+u log k)，u为不同元素数，空间O(u+k)。必须明确并列频次的输出要求，不能让不稳定的哈希遍历顺序影响期望结果。\n\n**追问 / 易错点：** 边界：k超过不同元素数怎样处理？示例返回全部，顺序不保证。Java 示例见代码23。\n\n**Java 核心代码23：**\n\n```java\nstatic int[] topKFrequent(int[] a, int k) {\n    if (k < 0) throw new IllegalArgumentException();\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int x : a) freq.put(x, freq.getOrDefault(x, 0) + 1);\n    PriorityQueue<Integer> heap = new PriorityQueue<>((x, y) -> {\n        int c = Integer.compare(freq.get(x), freq.get(y));\n        return c != 0 ? c : Integer.compare(x, y);\n    });\n    for (int x : freq.keySet()) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    int[] out = new int[heap.size()];\n    for (int i = out.length - 1; i >= 0; i--) out[i] = heap.poll();\n    return out;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-023",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-024",
      "number": "Q13-024",
      "question": "二叉树前中后序遍历怎么写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n前序是根→左→右，中序是左→根→右，后序是左→右→根。记忆诀窍是看“根”出现在前、中还是后。递归时间 O(n)、栈空间 O(h)；迭代可用显式栈，极深树要留意递归溢出。\n\n**深入补充（选读）：**\n递归中在处理左子树前访问为前序，左右子树间访问为中序，之后访问为后序。时间O(n)，递归栈O(h)，退化链时h=n。面试可手写迭代中序：一路压左，弹出访问，再转右；不要混淆“左中右”其实是中序。\n\n**追问 / 易错点：** 边界：空树、只有右子树、极深树递归风险。Java 示例见代码24。\n\n**Java 核心代码24：**\n\n```java\nstatic List<Integer> inorder(TreeNode root) {\n    List<Integer> out = new ArrayList<>();\n    Deque<TreeNode> stack = new ArrayDeque<>();\n    TreeNode p = root;\n    while (p != null || !stack.isEmpty()) {\n        while (p != null) { stack.push(p); p = p.left; }\n        p = stack.pop(); out.add(p.val); p = p.right;\n    }\n    return out;\n}\n// 前序递归：先out.add(root.val)，再递归left/right；后序：放到两次递归之后。\n```",
      "sourceIds": [
        "N018",
        "N047",
        "N054"
      ],
      "keywords": [
        "Q13-024",
        "算法与数据结构",
        "携程",
        "网易",
        "货拉拉"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-025",
      "number": "Q13-025",
      "question": "二叉树层序遍历与锯齿遍历？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n层序遍历用队列。每层开始先记住队列大小，只处理这几个节点，并把孩子放进队列留给下一层。锯齿遍历按层交替记录方向即可。时间 O(n)，辅助空间与最大层宽有关。\n\n**举个例子：**\n不能一边加入孩子，一边重新拿 queue.size() 当本层次数，否则会把下一层也混进来。\n\n**深入补充（选读）：**\n用队列BFS，每层开始保存当前队列大小，只处理这一层节点并加入下一层。锯齿可按层交替把值放到双端队列头尾，避免每次向ArrayList头部插导致额外成本。时间O(n)，辅助空间O(w)，w为最大层宽，输出另计。\n\n**追问 / 易错点：** 边界：层大小必须在本层循环前保存，不能边加节点边动态扩大本层次数。Java 示例见代码25。\n\n**面经线索：** [X08 · 美团java后端日常实习一二面](https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052)。\n\n**Java 核心代码25：**\n\n```java\nstatic List<List<Integer>> levels(TreeNode root, boolean zigzag) {\n    List<List<Integer>> out = new ArrayList<>();\n    if (root == null) return out;\n    Queue<TreeNode> q = new ArrayDeque<>(); q.offer(root);\n    boolean reverse = false;\n    while (!q.isEmpty()) {\n        int size = q.size();\n        Deque<Integer> row = new ArrayDeque<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode n = q.poll();\n            if (reverse) row.addFirst(n.val); else row.addLast(n.val);\n            if (n.left != null) q.offer(n.left);\n            if (n.right != null) q.offer(n.right);\n        }\n        out.add(new ArrayList<>(row));\n        if (zigzag) reverse = !reverse;\n    }\n    return out;\n}\n```",
      "sourceIds": [
        "N006",
        "X08",
        "NI007"
      ],
      "keywords": [
        "Q13-025",
        "算法与数据结构",
        "美团"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-026",
      "number": "Q13-026",
      "question": "二叉树最大深度和直径分别怎么算？直径一定经过根吗？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n最大深度是 1+左右子树深度的较大值。直径则在求深度时，顺便用“左深度+右深度”更新最大路径边数，最大路径不一定经过根。一次 DFS 即可 O(n)，辅助空间 O(h)。\n\n**深入补充（选读）：**\n深度为1+max(左右深度)。直径常按边数定义，递归计算高度时更新左右高度之和的全局最大值，路径可不经过根。时间O(n)，栈空间O(h)。每次调用应重置结果，避免复用Solution对象留下上次状态。\n\n**追问 / 易错点：** 边界：单节点直径为0，先问清按边还是节点计数。Java 示例见代码26。\n\n**Java 核心代码26：**\n\n```java\nstatic int maxDepth(TreeNode n) {\n    return n == null ? 0 : 1 + Math.max(maxDepth(n.left), maxDepth(n.right));\n}\nstatic int diameter(TreeNode root) {\n    int[] best = {0};\n    heightForDiameter(root, best);\n    return best[0];\n}\nstatic int heightForDiameter(TreeNode n, int[] best) {\n    if (n == null) return 0;\n    int l = heightForDiameter(n.left, best), r = heightForDiameter(n.right, best);\n    best[0] = Math.max(best[0], l + r);\n    return 1 + Math.max(l, r);\n}\n```",
      "sourceIds": [
        "N034"
      ],
      "keywords": [
        "Q13-026",
        "算法与数据结构",
        "小米"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-027",
      "number": "Q13-027",
      "question": "验证二叉搜索树怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n验证 BST 要检查整棵子树的值域，不只比较父子。递归传上下界：左子树必须小于当前值，右子树必须大于当前值，同时继承祖先约束。时间 O(n)，边界可用 long，重复值规则按题意。\n\n**举个例子：**\n根是 10，左孩子是 5，但 5 的右孩子是 12。12 虽然大于 5，仍违反“整棵左子树都小于 10”。\n\n**深入补充（选读）：**\n为每个节点传递严格的上下界，左子树上界变成当前值，右子树下界变成当前值。不能只比较直接子节点，要保证整个子树满足范围。用long边界避免int最小/最大值冲突。时间O(n)，空间O(h)，重复值是否允许以题意为准。\n\n**追问 / 易错点：** 边界：左子树深处出现比根更大的数。Java 示例见代码27。\n\n**Java 核心代码27：**\n\n```java\nstatic boolean isBST(TreeNode root) {\n    return bstRange(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nstatic boolean bstRange(TreeNode n, long low, long high) {\n    if (n == null) return true;\n    if (n.val <= low || n.val >= high) return false;\n    return bstRange(n.left, low, n.val) && bstRange(n.right, n.val, high);\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-027",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-028",
      "number": "Q13-028",
      "question": "二叉树最近公共祖先怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n递归到 p 或 q 就返回该节点；左右都找到目标时，当前节点就是公共祖先；只有一边找到就把那边往上传。时间 O(n)、空间 O(h)。通常题目保证两点存在，否则还要额外确认是否真的都找到。\n\n**深入补充（选读）：**\n若当前节点为null或p/q则返回自身，递归找左右结果；两边都非空则当前为祖先，只有一边非空就返回该边。时间O(n)，空间O(h)。这是通常假定p和q都存在的题型，若不能保证存在还需统计找到的节点数。\n\n**追问 / 易错点：** 边界：一个目标节点是另一个的祖先，比较节点身份而非值。Java 示例见代码28。\n\n**Java 核心代码28：**\n\n```java\nstatic TreeNode lca(TreeNode root, TreeNode p, TreeNode q) { // 假定p、q都存在\n    if (root == null || root == p || root == q) return root;\n    TreeNode l = lca(root.left, p, q), r = lca(root.right, p, q);\n    if (l != null && r != null) return root;\n    return l != null ? l : r;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-028",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-029",
      "number": "Q13-029",
      "question": "岛屿数量怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n遍历网格，遇到没访问过的陆地就计数加一，再用 DFS/BFS 把它四方向连通的陆地全部标记。这样每片岛只数一次。时间 O(mn)，空间最坏 O(mn)，对角相邻通常不算连通。\n\n**深入补充（选读）：**\n扫描网格，发现未访问陆地就计数加一，并DFS/BFS标记与其四方向连通的所有陆地。每格至多访问常数次，时间O(mn)，空间最坏O(mn)。递归可能栈深过大，可用显式队列。是否允许修改原网格需说明。\n\n**追问 / 易错点：** 边界：对角相邻默认不连通；示例会把访问过的陆地改成水。Java 示例见代码29。\n\n**Java 核心代码29：**\n\n```java\nstatic int islands(char[][] g) { // 矩形网格；会修改输入\n    if (g.length == 0 || g[0].length == 0) return 0;\n    int m = g.length, n = g[0].length, count = 0;\n    int[] dr = {1, -1, 0, 0}, dc = {0, 0, 1, -1};\n    Queue<int[]> q = new ArrayDeque<>();\n    for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {\n        if (g[r][c] != '1') continue;\n        count++; g[r][c] = '0'; q.offer(new int[]{r, c});\n        while (!q.isEmpty()) {\n            int[] p = q.poll();\n            for (int d = 0; d < 4; d++) {\n                int rr = p[0] + dr[d], cc = p[1] + dc[d];\n                if (rr >= 0 && rr < m && cc >= 0 && cc < n && g[rr][cc] == '1') {\n                    g[rr][cc] = '0'; q.offer(new int[]{rr, cc});\n                }\n            }\n        }\n    }\n    return count;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-029",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-030",
      "number": "Q13-030",
      "question": "课程表如何判断能否学完？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n把先修课关系建成有向图。先把入度为 0 的课程入队，每学完一门就减少后续课的入度，新变 0 的继续入队。能处理全部课程就无环、可以学完，否则有循环依赖。时间 O(V+E)。\n\n**深入补充（选读）：**\n把先修关系构成有向图，计算入度，队列放入度0节点，不断移除并降低后继入度。若处理节点数等于课程数则无环，可完成。时间O(V+E)，空间O(V+E)。也可DFS三色检测环，但不能把普通visited单一布尔当递归栈状态。\n\n**追问 / 易错点：** 边界：孤立课程、自环、重复边处理的一致性。Java 示例见代码30。\n\n**Java 核心代码30：**\n\n```java\nstatic boolean canFinish(int n, int[][] prerequisites) {\n    List<List<Integer>> graph = new ArrayList<>();\n    for (int i = 0; i < n; i++) graph.add(new ArrayList<>());\n    int[] indegree = new int[n];\n    for (int[] p : prerequisites) { graph.get(p[1]).add(p[0]); indegree[p[0]]++; }\n    Queue<Integer> q = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) if (indegree[i] == 0) q.offer(i);\n    int visited = 0;\n    while (!q.isEmpty()) {\n        int u = q.poll(); visited++;\n        for (int v : graph.get(u)) if (--indegree[v] == 0) q.offer(v);\n    }\n    return visited == n;\n}\n```",
      "sourceIds": [
        "N007",
        "NI009",
        "NI010"
      ],
      "keywords": [
        "Q13-030",
        "算法与数据结构",
        "腾讯",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-031",
      "number": "Q13-031",
      "question": "并查集怎样判断连通性？路径压缩为什么能加速？",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "**直接回答：**\n并查集维护“哪些元素属于同一组”。find 找代表，union 合并两组；路径压缩和按大小/秩合并能让多次操作均摊接近常数。它适合判断连通性，不直接给最短路径，也不能随便替代有向图算法。\n\n**深入补充（选读）：**\n并查集维护不相交集合，find查代表元，union合并，可用于连通性、冗余边等。路径压缩配合按秩/大小合并，使多次操作均摊接近常数，常表述O(α(n))；空间O(n)。它不直接提供最短路径或有向可达关系。\n\n**追问 / 易错点：** 边界：重复合并同一集合不能把组件数量重复减一。Java 示例见代码31。\n\n**Java 核心代码31：**\n\n```java\nstatic class DSU {\n    final int[] parent, size;\n    int components;\n    DSU(int n) {\n        parent = new int[n]; size = new int[n]; components = n;\n        for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }\n    }\n    int find(int x) {\n        while (x != parent[x]) {\n            parent[x] = parent[parent[x]]; x = parent[x];\n        }\n        return x;\n    }\n    boolean union(int a, int b) {\n        int ra = find(a), rb = find(b);\n        if (ra == rb) return false;\n        if (size[ra] < size[rb]) { int tmp = ra; ra = rb; rb = tmp; }\n        parent[rb] = ra; size[ra] += size[rb]; components--; return true;\n    }\n}\n```",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q13-031",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-032",
      "number": "Q13-032",
      "question": "括号生成如何回溯？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n回溯时记录用了几个左括号、几个右括号。左括号没到 n 就能放；右括号只有少于左括号时才能放；放满 2n 个就保存答案。这样生成过程本身就不会有非法前缀，复杂度还要计入所有输出。\n\n**深入补充（选读）：**\n维护已放左括号left和右括号right，left<n可放左，right<left才可放右；长度2n时记录。这样从构造时避免非法前缀。输出有Catalan(n)个，时间可按O(n·Catalan(n))算，辅助递归O(n)，不能只写O(n²)。\n\n**追问 / 易错点：** 边界：n=0通常返回包含空串的列表，以题意为准。Java 示例见代码32。\n\n**面经线索：** [X02 · 拼多多服务端开发秋招面经](https://www.nowcoder.com/discuss/926155090849693696)。\n\n**Java 核心代码32：**\n\n```java\nstatic List<String> parentheses(int n) {\n    if (n < 0) throw new IllegalArgumentException();\n    List<String> out = new ArrayList<>();\n    parenDfs(n, 0, 0, new StringBuilder(), out);\n    return out;\n}\nstatic void parenDfs(int n, int left, int right, StringBuilder path, List<String> out) {\n    if (path.length() == 2 * n) { out.add(path.toString()); return; }\n    if (left < n) {\n        path.append('('); parenDfs(n, left + 1, right, path, out);\n        path.deleteCharAt(path.length() - 1);\n    }\n    if (right < left) {\n        path.append(')'); parenDfs(n, left, right + 1, path, out);\n        path.deleteCharAt(path.length() - 1);\n    }\n}\n```",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q13-032",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-033",
      "number": "Q13-033",
      "question": "全排列如何回溯？有重复元素怎么办？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n每层选一个还没用过的元素，放入路径，递归后撤销选择。有重复值时先排序，跳过同层重复选择；保存答案时复制路径，不能直接存同一个可变 List。互异 n 个数有 n! 个排列，输出本身就很大。\n\n**深入补充（选读）：**\n逐位置选择尚未使用元素，用used数组记录下标；回溯后恢复状态。若输入含重复值，先排序，并跳过“与前一个相同且前一个当前未使用”的选择以去重。n个互异元素有n!种输出，时间O(n·n!)，辅助O(n)，输出另计。\n\n**追问 / 易错点：** 边界：回溯时必须复制路径加入结果，不能所有结果共享同一个List。Java 示例见代码33。\n\n**Java 核心代码33：**\n\n```java\nstatic List<List<Integer>> permutations(int[] input) {\n    int[] a = input.clone(); Arrays.sort(a);\n    List<List<Integer>> out = new ArrayList<>();\n    permDfs(a, new boolean[a.length], new ArrayList<>(), out);\n    return out;\n}\nstatic void permDfs(int[] a, boolean[] used, List<Integer> path, List<List<Integer>> out) {\n    if (path.size() == a.length) { out.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < a.length; i++) {\n        if (used[i] || (i > 0 && a[i] == a[i - 1] && !used[i - 1])) continue;\n        used[i] = true; path.add(a[i]); permDfs(a, used, path, out);\n        path.remove(path.size() - 1); used[i] = false;\n    }\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-033",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-034",
      "number": "Q13-034",
      "question": "最大子数组和怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n每到一个数，决定“接在前一段后面”还是“从自己重新开始”，取更大的作为以当前结尾的最佳和，再更新全局答案。时间 O(n)、空间 O(1)。全负数组应取最大的那个负数，不能默认答案为 0。\n\n**深入补充（选读）：**\n维护以当前位置结尾的最佳和，取max(当前值,前一最佳和+当前值)，再更新全局最优。时间O(n)，空间O(1)。必须允许从当前值重新开始，且全负数组不能默认答案为0。若题目要求非空区间，空输入应明确拒绝。\n\n**追问 / 易错点：** 边界：全负、单元素、累计和溢出。Java 示例见代码34。\n\n**Java 核心代码34：**\n\n```java\nstatic long maxSubarray(int[] a) {\n    if (a.length == 0) throw new IllegalArgumentException();\n    long ending = a[0], best = a[0];\n    for (int i = 1; i < a.length; i++) {\n        ending = Math.max((long) a[i], ending + a[i]);\n        best = Math.max(best, ending);\n    }\n    return best;\n}\n```",
      "sourceIds": [
        "N031"
      ],
      "keywords": [
        "Q13-034",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-035",
      "number": "Q13-035",
      "question": "最长递增子序列怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n简单 DP 记录以每个位置结尾的最长递增长度，时间 O(n²)。优化版用 tails 记录“每种长度能达到的最小结尾”，每个数二分第一个 >= 它的位置替换，时间 O(n log n)。tails 不一定就是最终那条实际子序列。\n\n**深入补充（选读）：**\nO(n²)DP令dp[i]为以i结尾的长度；优化方法用tails[len]保存该长度递增子序列的最小尾值，对每个数二分第一个>=它的位置替换。严格递增情况下这样可处理重复数。时间O(n log n)、空间O(n)，tails不必直接是最终实际子序列。\n\n**追问 / 易错点：** 边界：若要求非严格递增，二分条件需要改变。Java 示例见代码35。\n\n**Java 核心代码35：**\n\n```java\nstatic int lisLength(int[] a) {\n    int[] tails = new int[a.length]; int size = 0;\n    for (int x : a) {\n        int lo = 0, hi = size;\n        while (lo < hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (tails[mid] < x) lo = mid + 1; else hi = mid;\n        }\n        tails[lo] = x;\n        if (lo == size) size++;\n    }\n    return size;\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-035",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-036",
      "number": "Q13-036",
      "question": "零钱兑换最少硬币数怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\ndp[x] 表示凑出金额 x 的最少硬币数。dp[0]=0，其他先设不可达；每个金额尝试最后放一种硬币，取 dp[x-coin]+1 的最小值。凑不出返回 -1，时间 O(金额×面额种类)，面额必须为正。\n\n**深入补充（选读）：**\ndp[x]表示金额x的最少枚数，dp[0]=0，其余设不可达，对每个金额尝试最后放一种正面额硬币。时间O(amount·种类数)，空间O(amount)。不可达返回-1；金额很大时此伪多项式算法成本明显，不应只说O(n)。\n\n**追问 / 易错点：** 边界：amount=0、无解、面额必须正数；无限次使用与0/1背包不同。Java 示例见代码36。\n\n**Java 核心代码36：**\n\n```java\nstatic int coinChange(int[] coins, int amount) {\n    if (amount < 0) throw new IllegalArgumentException();\n    for (int c : coins) if (c <= 0) throw new IllegalArgumentException();\n    int inf = Integer.MAX_VALUE / 2;\n    int[] dp = new int[amount + 1]; Arrays.fill(dp, inf); dp[0] = 0;\n    for (int x = 1; x <= amount; x++)\n        for (int c : coins) if (c <= x) dp[x] = Math.min(dp[x], dp[x - c] + 1);\n    return dp[amount] == inf ? -1 : dp[amount];\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-036",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-037",
      "number": "Q13-037",
      "question": "最小路径和与0/1背包的状态怎么设计？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "**直接回答：**\n最小路径和：到一格的最小成本等于自身值加“上边或左边较小的成本”。0/1 背包：每件物品最多一次，一维容量必须倒序更新，防止一轮反复使用同一件。先说清 dp 的含义，再写转移式。\n\n**深入补充（选读）：**\n网格最小路径和在只准向右/下时，当前位置成本等于自身值加上/左最小值，滚动数组时间O(mn)、空间O(n)。0/1背包每件最多选一次，一维dp按容量倒序更新避免重复选同一件；完全背包常正序。先明确状态含义再写转移。\n\n**追问 / 易错点：** 边界：单行/单列、负权是否允许、背包容量0。Java 示例见代码37。\n\n**面经线索：** [X07 · 腾讯后端开发岗面经-07](https://www.nowcoder.com/discuss/924809073185300480)。\n\n**Java 核心代码37：**\n\n```java\nstatic long minPathSum(int[][] grid) { // 非空矩形，只能向右/下\n    if (grid.length == 0 || grid[0].length == 0) throw new IllegalArgumentException();\n    int n = grid[0].length;\n    long[] dp = new long[n];\n    for (int r = 0; r < grid.length; r++) for (int c = 0; c < n; c++) {\n        if (r == 0 && c == 0) dp[c] = grid[r][c];\n        else if (r == 0) dp[c] = dp[c - 1] + grid[r][c];\n        else if (c == 0) dp[c] += grid[r][c];\n        else dp[c] = Math.min(dp[c], dp[c - 1]) + grid[r][c];\n    }\n    return dp[n - 1];\n}\nstatic long knapsack01(int[] weight, int[] value, int capacity) {\n    if (capacity < 0 || weight.length != value.length) throw new IllegalArgumentException();\n    long[] dp = new long[capacity + 1]; // 容量以内的最大价值，可不装满\n    for (int i = 0; i < weight.length; i++) {\n        if (weight[i] <= 0) throw new IllegalArgumentException();\n        for (int c = capacity; c >= weight[i]; c--)\n            dp[c] = Math.max(dp[c], dp[c - weight[i]] + value[i]);\n    }\n    return dp[capacity];\n}\n```",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q13-037",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-038",
      "number": "Q13-038",
      "question": "快排、归并、堆排序的取舍？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n快排分区后递归，平均 O(n log n)、最坏 O(n²)，通常不稳定；归并先分再合，O(n log n)，可稳定但数组版需额外空间；堆排序反复取堆顶，O(n log n)、可原地，通常不稳定。选型看稳定性、空间和最坏风险。\n\n**深入补充（选读）：**\n快排平均O(n log n)、最坏O(n²)，常原地但不稳定；归并O(n log n)，数组实现需O(n)辅助空间，合并相等时先取左侧可稳定；堆排序O(n log n)、可O(1)额外空间但通常不稳定。实际库实现随类型/版本变化，面试要能解释划分或合并过程。\n\n**追问 / 易错点：** 边界：全相等与已有序输入会考验朴素快排，示例提供稳定归并。Java 示例见代码38。\n\n**Java 核心代码38：**\n\n```java\nstatic void mergeSort(int[] a) { mergeSortRange(a, new int[a.length], 0, a.length); }\nstatic void mergeSortRange(int[] a, int[] temp, int lo, int hi) {\n    if (hi - lo <= 1) return;\n    int mid = lo + (hi - lo) / 2;\n    mergeSortRange(a, temp, lo, mid); mergeSortRange(a, temp, mid, hi);\n    int i = lo, j = mid, k = lo;\n    while (i < mid && j < hi) temp[k++] = a[i] <= a[j] ? a[i++] : a[j++];\n    while (i < mid) temp[k++] = a[i++];\n    while (j < hi) temp[k++] = a[j++];\n    System.arraycopy(temp, lo, a, lo, hi - lo);\n}\n```",
      "sourceIds": [
        "N018",
        "N042",
        "N047",
        "NI015",
        "NI019",
        "NI021"
      ],
      "keywords": [
        "Q13-038",
        "算法与数据结构",
        "携程",
        "美团",
        "网易",
        "腾讯",
        "新蛋",
        "阿里"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-039",
      "number": "Q13-039",
      "question": "接雨水怎么用双指针？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\n一格能装多少水，取决于左右最高墙中较低的那个。双指针维护左右已知最高值，每次处理较低边界一侧，把能确定的水量累加。每格处理一次，时间 O(n)、额外空间 O(1)。\n\n**举个例子：**\n[3,0,2] 中间那格两边最高墙是 3 和 2，所以最多装 2，不是 3。\n\n**深入补充（选读）：**\n维护左右已见最高值，从较低边界的一侧推进，当前柱子的可存水量由该侧可靠边界决定并累加。每个位置处理一次，时间O(n)、空间O(1)。也可前后缀最大值数组或单调栈。总水量使用long可降低大规模累计溢出风险。\n\n**追问 / 易错点：** 边界：长度不足3、单调数组、全平。Java 示例见代码39。\n\n**Java 核心代码39：**\n\n```java\nstatic long trap(int[] h) { // 非负高度\n    int l = 0, r = h.length - 1, leftMax = 0, rightMax = 0;\n    long water = 0;\n    while (l <= r) {\n        if (leftMax <= rightMax) {\n            leftMax = Math.max(leftMax, h[l]); water += leftMax - h[l++];\n        } else {\n            rightMax = Math.max(rightMax, h[r]); water += rightMax - h[r--];\n        }\n    }\n    return water;\n}\n```",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q13-039",
        "算法与数据结构",
        "字节跳动"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-Q13-040",
      "number": "Q13-040",
      "question": "ACM 输入输出模式怎么写得稳？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "**直接回答：**\nACM 模式要自己读输入、组织多组测试并输出答案。先确认第一项是不是测试组数、如何到 EOF、大输入用缓冲。通常类名为 Main，不输出“请输入”之类提示，多组之间重置状态，最后一行没有换行也要能读。\n\n**深入补充（选读）：**\n先按题意读清测试组数、n/m与EOF规则，大输入使用缓冲读入，输出可用StringBuilder小批汇总或缓冲写。Java在线评测通常要求public class Main；不要打印提示语。特别处理负数、空白、溢出与多组数据之间状态重置，算法正确但读错输入同样失败。\n\n**追问 / 易错点：** 边界：文件末尾没有换行、多个空格；Java 示例代码40给出整数流求和演示，需换成真实题目主流程。\n\n**Java 核心代码40：**\n\n```java\nimport java.io.*;\npublic class Main {\n    static class FastScanner {\n        private final InputStream in = System.in;\n        private final byte[] buffer = new byte[1 << 16];\n        private int ptr = 0, len = 0;\n        private int read() throws IOException {\n            if (ptr >= len) {\n                len = in.read(buffer); ptr = 0;\n                if (len < 0) return -1;\n            }\n            return buffer[ptr++] & 0xff;\n        }\n        Integer nextInt() throws IOException {\n            int c;\n            do { c = read(); } while (c != -1 && c <= ' ');\n            if (c == -1) return null;\n            int sign = 1;\n            if (c == '-') { sign = -1; c = read(); }\n            if (c < '0' || c > '9') throw new IOException(\"invalid integer\");\n            long value = 0;\n            while (c >= '0' && c <= '9') {\n                value = value * 10 + c - '0';\n                if (value > (sign == 1 ? 2147483647L : 2147483648L))\n                    throw new IOException(\"integer overflow\");\n                c = read();\n            }\n            if (c != -1 && c > ' ') throw new IOException(\"invalid delimiter\");\n            return (int) (sign * value);\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        FastScanner fs = new FastScanner();\n        // 演示：读到EOF并求和。实际比赛请替换成题目指定的T/n/m与求解逻辑。\n        long sum = 0;\n        Integer x;\n        while ((x = fs.nextInt()) != null) sum += x;\n        System.out.println(sum);\n    }\n}\n```",
      "sourceIds": [],
      "keywords": [
        "Q13-040",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md"
    },
    {
      "id": "bank-JX001",
      "number": "JX001",
      "question": "Lombok 注解和 Spring 注解，分别在什么时候生效？",
      "answer": "**直接回答：**\nLombok 常在编译阶段参与生成 getter、构造器等代码；Spring 的组件、注入、事务注解主要在运行时被容器和代理处理。注解只是标签，真正决定生效时机的是谁读取和处理它，不能统称为反射。\n\n**深入补充（选读）：**\nLombok 常在编译阶段参与处理，修改编译器中的语法树，使 getter、构造器等成员进入编译结果。Spring 常见的组件、注入和事务注解主要由容器扫描、后置处理器及代理机制在运行时解释。注解本身只是元数据，需要相应处理机制，不能把所有注解都概括成“靠反射运行”。\n\n**追问 / 易错点：** Lombok 的 javac 路径作为注解处理器启动，但不只是标准 APT 生成额外源码；IDE 支持与命令行编译配置要分别检查。\n\n**核对资料：** [官方资料](https://projectlombok.org/contributing/lombok-execution-path)。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "JX001",
        "Java 基础",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX002",
      "number": "JX002",
      "question": "不用 new，还能创建对象吗？都会调用构造器吗？",
      "answer": "**直接回答：**\n还可以通过反射、克隆、反序列化或工厂方法得到对象，但不一定都走普通构造过程。Constructor.newInstance 会调用对应构造器；clone 默认复制字段；工厂内部也可能只是返回已有对象。反序列化另有类型相关规则。\n\n**深入补充（选读）：**\n反射 Constructor.newInstance 会执行对应构造器；Object.clone 通常复制字段，不走该类通常的构造过程。普通 Serializable 类反序列化有特殊构造规则，不能说完全等价于 new；Externalizable、record 等需单独讨论。工厂方法只是封装入口，内部可能使用 new，也可能返回已有对象。\n\n**追问 / 易错点：** 克隆默认浅拷贝；反序列化不应接受不可信输入。得到 Class 对象不代表已创建业务实例。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "JX002",
        "Java 基础",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX003",
      "number": "JX003",
      "question": "对象内存分配时，指针碰撞和空闲列表各适用什么情况？",
      "answer": "**直接回答：**\n空闲内存是连续一片时，移动指针划一段即可，叫指针碰撞；空闲块分散时，要从空闲管理结构里找合适块，叫空闲列表思路。具体方案和收集器有关，TLAB 则减少线程争抢分配空间。\n\n**深入补充（选读）：**\n空闲空间连续时，可移动分配指针划出一段空间，即指针碰撞；空间零散时，可以按空闲块管理结构寻找可用块。实际方式与收集器、分区布局和分配路径有关。多线程争用同一分配区域时需要同步，TLAB 把一部分堆空间分给线程本地使用，降低常见分配路径上的竞争。\n\n**追问 / 易错点：** TLAB 仍是堆中的空间；TLAB 不够不代表对象必定进老年代。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "JX003",
        "JVM",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX004",
      "number": "JX004",
      "question": "Minor GC 为什么不会漏掉被老年代引用的年轻代对象？",
      "answer": "**直接回答：**\n年轻代回收不能漏掉“老年代还引用着”的年轻对象。JVM 会通过写屏障记录跨区引用，再用卡表、记忆集等结构快速找到这些引用，而不用每次完整扫描全部老年代。记忆集不是存活对象清单。\n\n**深入补充（选读）：**\n只扫描年轻代时仍需找到老年代等区域指向年轻代的引用。实现通常通过写屏障记录引用变化，借助卡表、记忆集等结构缩小扫描范围。G1 跟踪跨 Region 引用，使局部回收不必每次完整扫描所有其他 Region。具体维护策略随收集器和版本变化。\n\n**追问 / 易错点：** 记忆集追踪从区域外指向区域内的引用，不等于保存所有存活对象，维护它也有成本。\n\n**核对资料：** [官方资料](https://docs.oracle.com/en/java/javase/17/gctuning/garbage-first-garbage-collector-tuning.html)。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "JX004",
        "JVM",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX005",
      "number": "JX005",
      "question": "newFixedThreadPool 和 newCachedThreadPool 各有什么容量风险？",
      "answer": "**直接回答：**\nnewFixedThreadPool 限了线程数，但默认队列可能积压大量任务；newCachedThreadPool 直接交接任务，允许线程数量增长得很大。前者容易堆任务，后者容易堆线程。需要显式规划并发、队列和拒绝策略。\n\n**深入补充（选读）：**\nnewFixedThreadPool 线程数固定，但默认 LinkedBlockingQueue 可积压极多任务，可能撑满堆。newCachedThreadPool 使用 SynchronousQueue 交接任务，最大线程数很大，阻塞任务激增可能耗尽本地线程与内存。应按任务成本、并发预算和过载策略选择容量明确的执行器。\n\n**追问 / 易错点：** 不能一概说所有 Executors 工厂都不能用，也不能把固定线程数误认为所有资源都有界。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ThreadPoolExecutor.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N051",
        "N052"
      ],
      "keywords": [
        "JX005",
        "多线程 / 并发",
        "京东",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX006",
      "number": "JX006",
      "question": "CallerRunsPolicy 为什么不适合所有场景？",
      "answer": "**直接回答：**\nCallerRunsPolicy 让提交线程亲自做任务，能减慢提交速度，但也可能拖住 HTTP 线程、事件循环或持锁线程。它不是无损保证，池关闭时还会丢弃。先看提交者是什么，再决定是否适合把压力传回它。\n\n**深入补充（选读）：**\n它在池未关闭时让提交线程亲自执行任务，可以形成反压；但若调用者是 HTTP 请求线程、Netty 事件循环或持锁线程，会把阻塞传回关键链路。线程池关闭后它会丢弃任务，不能承诺用了它任务就不丢。选择策略时要明确失败返回、重试预算和业务补偿。\n\n**追问 / 易错点：** 这是从快手线程池配置题延伸的边界题；原帖建议不等于通用最佳方案。\n\n**核对资料：** [官方资料](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.CallerRunsPolicy.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经配置题延展",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "JX006",
        "多线程 / 并发",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX007",
      "number": "JX007",
      "question": "固定线程池中的父任务提交子任务并 get，为什么可能卡死？",
      "answer": "**直接回答：**\n父任务占满线程池后，又在同一个池里提交子任务并阻塞等待；子任务排队却没有线程可运行，父任务又不肯退出，于是卡死。要改依赖结构、用非阻塞组合或合适的独立执行器，单纯加线程只是延后暴露。\n\n**深入补充（选读）：**\n若所有工作线程都被父任务占据，每个父任务又阻塞等待同一池中排队的子任务，子任务就没有线程可执行，形成线程饥饿式死锁。可改为非阻塞组合、拆分执行器或调整依赖结构；单纯加线程只能推迟问题。超时可以止损，不能替代结构修复。\n\n**追问 / 易错点：** 是否出现取决于池大小、排队方式和同时运行的父任务数。先画出等待关系，再看线程转储。\n\n**Java 示例：**\n\n```java\nExecutorService pool = Executors.newFixedThreadPool(1);\nFuture<Integer> outer = pool.submit(() -> {\n    Future<Integer> inner = pool.submit(() -> 1);\n    return inner.get(); // 唯一工作线程等待队列中的任务，无法前进\n});\n// 反例：不要直接用于业务，应改造任务依赖。\n```",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX007",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX008",
      "number": "JX008",
      "question": "定时任务执行一次报错后，为什么再也不运行？",
      "answer": "**直接回答：**\nScheduledExecutorService 的周期任务一次抛异常，后续执行可能被取消。任务边界应处理可恢复错误、记录告警，并观察 ScheduledFuture 的失败。线程还活着不代表周期任务还会继续，不能把异常全部吞掉假装正常。\n\n**深入补充（选读）：**\nScheduledExecutorService 的周期任务若一次执行抛出异常，后续周期会被抑制。应在任务边界处理可恢复异常并告警，同时观察返回的 ScheduledFuture，不能只看调度线程还在。fixedRate 按计划周期启用，fixedDelay 从上次完成后计算间隔，同一周期任务不会因此自动重叠。\n\n**追问 / 易错点：** 不要无条件吞掉所有 Throwable；不可恢复故障应明确停止并告警。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX008",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX009",
      "number": "JX009",
      "question": "submit 配合 DiscardPolicy，Future.get 为什么可能一直等？",
      "answer": "**直接回答：**\nsubmit 返回 Future，但任务若被 DiscardPolicy 静默丢弃，就没人执行、没人完成这个 Future，get 可能一直等。拒绝时应明确失败或取消 Future，等待也要有超时。没抛异常不代表任务真正入池成功。\n\n**深入补充（选读）：**\nsubmit 通常把任务包装成 FutureTask。若拒绝策略静默丢弃任务，又没有取消或完成这个 Future，调用者可能拿到永远不进入完成状态的 Future。应明确拒绝时抛异常、取消 Future 或完成失败状态，并对等待设置超时。该结论基于 ThreadPoolExecutor 的这类组合。\n\n**追问 / 易错点：** DiscardOldestPolicy 也可能让先前排队任务的 Future 悬空；没抛异常不等于任务被接收。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ThreadPoolExecutor.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX009",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX010",
      "number": "JX010",
      "question": "ConcurrentHashMap.computeIfAbsent 里适合做耗时 RPC 吗？",
      "answer": "**直接回答：**\n不适合把很慢的 RPC 直接放在 computeIfAbsent 的计算函数里，因为计算期间相关更新可能被阻塞。可以先用轻量占位协调同 key 请求，再交给受控执行器加载；失败要清理占位，避免其他人永远等。\n\n**深入补充（选读）：**\n映射计算期间某些更新可能阻塞，计算函数应短小，避免长时间网络调用，也不要在函数中递归修改该映射。可用轻量 CompletableFuture 占位协调同 key 加载，再在受控执行器中完成请求；失败需清理占位、限制重试。也可采用加载缓存组件管理同 key 请求合并。\n\n**追问 / 易错点：** 同 key 协调不等于所有 key 都有独立锁，还要考虑冲突、超时、取消与占位泄漏。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)。",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX010",
        "Java 集合"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX011",
      "number": "JX011",
      "question": "BigDecimal 放进 HashSet 和 TreeSet，为什么去重结果可能不同？",
      "answer": "**直接回答：**\nHashSet 按 equals/hashCode 去重，TreeSet 按比较结果是否为 0 去重。BigDecimal 的 1.0 与 1.00 数值相同，但 equals 还看小数位数。因此 HashSet 常保留两个，自然排序的 TreeSet 常只保留一个。\n\n**深入补充（选读）：**\nBigDecimal.equals 比较数值和表示尺度，compareTo 按数值比较。1.0 与 1.00 的 equals 为 false，compareTo 为 0，因此常见 HashSet 保留两个，按自然顺序的 TreeSet 视作同一排序键。业务应统一金额规范，再选择相等和排序规则。\n\n**追问 / 易错点：** 不要为解决该问题转成 double；还要考虑数据库尺度和序列化后的比较。\n\n**Java 示例：**\n\n```java\nBigDecimal a = new BigDecimal(\"1.0\");\nBigDecimal b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));    // false\nSystem.out.println(a.compareTo(b)); // 0\nSystem.out.println(new HashSet<>(Arrays.asList(a, b)).size()); // 2\nSystem.out.println(new TreeSet<>(Arrays.asList(a, b)).size()); // 1\n```\n\n**核对资料：** [官方资料](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html)。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX011",
        "Java 基础"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX012",
      "number": "JX012",
      "question": "静态初始化失败后，下次使用这个类会重新初始化吗？",
      "answer": "**直接回答：**\n同一份 Class 的静态初始化失败后，会被标记为错误状态，后续使用通常不会自动再执行静态块，而是报 NoClassDefFoundError。排查要找第一次失败的根因；重新换一个定义类加载器是另一种情况。\n\n**深入补充（选读）：**\n同一个 Class 初始化失败后被标记为错误状态，后续需要初始化的使用通常抛出 NoClassDefFoundError，不会自动重跑静态块。首次失败若来自非 Error 异常，通常包装成 ExceptionInInitializerError。应找第一次失败的根因，而不是只检查依赖包。\n\n**追问 / 易错点：** 换定义类加载器得到新的 Class 是另一种情况；不要把不可靠远程调用随意放进 static 初始化。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/specs/jls/se21/html/jls-12.html#jls-12.4.2)。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX012",
        "Java 基础"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX013",
      "number": "JX013",
      "question": "JVM 栈帧里有哪些东西？局部变量都存对象本身吗？",
      "answer": "**直接回答：**\n一个方法的栈帧主要保存局部变量表、操作数栈，以及动态链接和返回需要的信息。局部变量可以是基本值，也可以是引用；保存一个 User 引用，不代表整个 User 对象都装进了栈帧。\n\n**深入补充（选读）：**\n栈帧包含局部变量表、操作数栈，以及支持动态链接和方法返回的信息。局部变量表可以保存基本类型值和对象引用，保存引用不代表对象本体一定在栈里。方法调用创建帧、返回后退出；JIT 优化可能改变实际机器层面的执行形态。\n\n**追问 / 易错点：** 区别 JVM 规范执行模型与优化后的机器代码，不能机械按源码数物理栈帧。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6)。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "JX013",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX014",
      "number": "JX014",
      "question": "运行时常量池就是字符串常量池吗？",
      "answer": "**直接回答：**\n不是。运行时常量池属于类/接口，包含常量及类、方法等符号引用；字符串常量池用于复用驻留的 String 对象。名字都带“常量池”，但用途和数据结构不同，不能把它们画成同一个东西。\n\n**深入补充（选读）：**\n不是。每个类或接口有运行时常量池，承载数值常量、类与成员的符号引用等；字符串驻留池用于规范化 String 实例身份。class 文件常量池、运行时常量池和驻留 String 对象有关联，但不是同一数据结构。\n\n**追问 / 易错点：** 不要因名字都含常量池，就把它们的存储位置和用途混为一谈。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.5)。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "JX014",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX015",
      "number": "JX015",
      "question": "对象引用通过句柄和直接指针访问，有什么取舍？",
      "answer": "**直接回答：**\n句柄访问像先找中转地址，再找对象；对象移动时可更新中转目标。直接指针访问路径短，但移动对象后要维护相关引用。JVM 规范不强制同一种表示，压缩指针又是另一个维度，不能混在一起。\n\n**深入补充（选读）：**\n句柄增加一层间接访问，对象移动时可主要更新句柄目标；直接指针路径较短，移动对象时需维护引用或使用收集器相关屏障。JVM 规范不强制一种对象表示方式，讲具体布局必须明确实现与版本。引用也不等于可由 Java 程序任意运算的 C 指针。\n\n**追问 / 易错点：** 压缩指针与句柄是不同维度的问题，不能只凭引用占用字节数判断方案。\n\n**核对资料：** [官方资料](https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.7)。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "JX015",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX016",
      "number": "JX016",
      "question": "用了 JNI 后，为什么可能没 Java 异常就整个进程崩溃？",
      "answer": "**直接回答：**\nJNI 运行本地代码，非法指针、越界和库不兼容可能直接让进程崩溃，没有普通 Java 异常可 catch。先保留 hs_err、core dump 和库版本，查看本地栈；还要检查 JNI 引用和本地内存泄漏。\n\n**深入补充（选读）：**\nJNI 执行本地代码，本地库越界访问、非法指针或 ABI 不兼容可能导致进程级故障。先保留 hs_err、本地栈和库版本，再结合 core dump 定位。还要检查 JNI 全局引用和本地内存是否泄漏；Java 堆不满不代表进程总内存安全。\n\n**追问 / 易错点：** 这是从 JNI 与本地方法栈考点延伸的排查题，不把所有本地崩溃都归因于 JVM 本身。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点延展",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "JX016",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX017",
      "number": "JX017",
      "question": "Bean 初始化前要加载远程属性，该选哪个扩展点？",
      "answer": "**直接回答：**\n先按需要生效的时机选扩展点：影响配置绑定和条件装配的，尽早放进 Environment；改 Bean 定义用 BeanFactoryPostProcessor；对象已创建后的处理再考虑 BeanPostProcessor。远程配置必须有超时和失败策略，不能每个 Bean 都单独拉。\n\n**深入补充（选读）：**\n先明确时机：影响条件装配或属性绑定的配置应尽量提前导入 Environment/配置源；修改 Bean 定义可用 BeanFactoryPostProcessor；对象创建、注入后且初始化回调前补字段，可评估 BeanPostProcessor。网络读取要有超时、缓存和失败策略，避免每个 Bean 各发一次远程请求。\n\n**追问 / 易错点：** 若构造器或 @PostConstruct 已需该属性，要核对更早的加载时机和回调顺序；避免工厂后处理器中提前 getBean。\n\n**核对资料：** [官方资料](https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html)。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N056"
      ],
      "keywords": [
        "JX017",
        "Spring / Spring Boot",
        "阿里"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX018",
      "number": "JX018",
      "question": "验证码校验后再删除，两个并发请求会不会都登录成功？",
      "answer": "**直接回答：**\n会。两个请求若都先读到验证码正确，再分别删除，就可能都通过。要把比较与消费放到同一个原子操作里，再建立会话，同时绑定手机号、用途、有效期并限制尝试次数。验证码只用一次和允许几个登录会话是两回事。\n\n**深入补充（选读）：**\n若读取、比较和删除分离，两个请求可能同时通过。应让匹配与消费在同一原子步骤完成，例如受控 Lua 或持久层条件更新；同时绑定手机号、用途、时效并限制尝试次数。发送端用手机号、IP、设备等多维限流和成本监控，校验成功后才能建立会话。\n\n**追问 / 易错点：** 多端登录是否允许是独立策略，一次性验证码不等于只能存在一个登录会话。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "登录场景追问延展",
      "sourceIds": [
        "N052",
        "N053"
      ],
      "keywords": [
        "JX018",
        "场景题 / 故障排查",
        "快手",
        "小鹅通"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX019",
      "number": "JX019",
      "question": "静态内部类单例能保证整个系统只有一个对象吗？",
      "answer": "**直接回答：**\n静态内部类单例通常只约束同一类加载器中那份类的静态实例。多个进程、节点或类加载器仍可能各有一个。单例也不自动保护可变字段的并发安全；跨节点唯一操作仍要共享协调或数据库约束。\n\n**深入补充（选读）：**\n通常只保证同一个定义类加载器中那份类有一个静态实例；多个类加载器、进程、节点都可能各有一份。Spring 单例常见语义是每容器、每 Bean 定义一个实例。对象唯一也不自动保证可变状态线程安全，跨节点唯一性要靠共享协调或数据库约束。\n\n**追问 / 易错点：** 原帖对全局唯一、线程安全概括过宽，本题补充单例的作用边界。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "单例原题边界延展",
      "sourceIds": [
        "N053"
      ],
      "keywords": [
        "JX019",
        "Java 基础",
        "小鹅通"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-JX020",
      "number": "JX020",
      "question": "最长连续序列如何做到 O(n)？怎么避免重复值和溢出？",
      "answer": "**直接回答：**\n先把数组放进 HashSet 去重，只从“没有前一个数”的位置开始往后数连续长度。这样每段只完整统计一次，平均时间 O(n)。遍历去重集合并注意整数边界，避免重复起点和加减溢出。\n\n**深入补充（选读）：**\n把数字放入 HashSet，只从不存在前驱的数字开始向后数。遍历去重后的集合，避免重复起点导致同一序列多次扫描；用 long 比较可避免 int 边界加减溢出。哈希操作平均 O(1)，总时间期望 O(n)，额外空间 O(n)。\n\n**追问 / 易错点：** 值连续不要求原数组位置相邻，也不同于最长递增子序列。\n\n**Java 示例：**\n\n```java\nstatic int longestConsecutive(int[] nums) {\n    Set<Long> values = new HashSet<>();\n    for (int n : nums) values.add((long) n);\n    int best = 0;\n    for (long start : values) {\n        if (values.contains(start - 1)) continue;\n        int length = 1;\n        long end = start;\n        while (values.contains(end + 1)) { end++; length++; }\n        best = Math.max(best, length);\n    }\n    return best;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写",
      "sourceIds": [
        "N055"
      ],
      "keywords": [
        "JX020",
        "算法与数据结构",
        "网易"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q01-041",
      "number": "Q01-041",
      "question": "按月份给一批姓名分组，Java 怎么实现？",
      "answer": "**直接回答：**\n先确认每条记录有姓名和日期，再按“年+月”分组，避免 2025 年 1 月和 2026 年 1 月混在一起。Java 可用 YearMonth 作 key，再用 groupingBy；需要月份有序可指定 TreeMap。重复姓名和空日期按业务规则处理。\n\n**深入补充（选读）：**\n先明确输入含姓名和日期，分组键使用 YearMonth，避免把不同年份的同一月份混在一起。用 stream().collect(groupingBy(x -> YearMonth.from(x.date()), TreeMap::new, mapping(x -> x.name(), toList()))) 可得到按月份排序的姓名列表；Java 8 用普通类和 getter 替换 record 风格访问器。空日期、重复姓名、时区转换要按业务约定处理，不能默认去重。\n\n**追问 / 易错点：** 数据量超过内存时，改成数据库聚合或分批归并，避免对海量记录直接 collect。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N020"
      ],
      "keywords": [
        "Q01-041",
        "Java 基础",
        "用友"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q01-042",
      "number": "Q01-042",
      "question": "项目如何体现开闭原则？继承、组合、依赖是什么关系？",
      "answer": "**直接回答：**\n开闭原则是尽量通过新增实现支持新需求，少改稳定主流程。继承表示“是一种”，组合表示“持有并组织”，依赖表示“需要使用”。选接口和策略是为真实变化服务，不是遇到一个 if 就必须拆出一套框架。\n\n**深入补充（选读）：**\n开闭原则强调让预计会变化的行为通过扩展实现，尽量少改稳定流程。例如审批流程依赖校验接口，新增规则实现接口并注册。继承表示 is-a，组合表示对象持有并组织其他对象，依赖表示使用另一组件的能力。是否采用模式取决于真实变化点，只有一个简单分支时不必提前建复杂层次。\n\n**追问 / 易错点：** 说出一次新增需求实际改了哪些文件、测试覆盖哪些旧行为。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N010"
      ],
      "keywords": [
        "Q01-042",
        "Java 基础",
        "京东"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q02-026",
      "number": "Q02-026",
      "question": "ConcurrentHashMap 能做有序范围查询吗？",
      "answer": "**直接回答：**\nConcurrentHashMap 按哈希组织，不适合直接做有序范围查询。需要并发且按 key 有序时，可考虑 ConcurrentSkipListMap；单线程或外部锁保护下可用 TreeMap。范围视图和弱一致遍历不等于某一刻的完整快照。\n\n**深入补充（选读）：**\n它按哈希组织数据，不能像有序索引一样高效查询某个键区间。单线程或外部加锁时可用 TreeMap；并发有序映射可考虑 ConcurrentSkipListMap，通过 subMap/headMap/tailMap 获取范围视图。弱一致遍历不代表整个范围查询是某一时刻的原子快照；严格快照需要额外同步或版本方案。\n\n**追问 / 易错点：** 键比较器应与业务相等语义一致，范围视图也不是自动复制出来的数据。",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N024"
      ],
      "keywords": [
        "Q02-026",
        "Java 集合",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q03-036",
      "number": "Q03-036",
      "question": "线程等 IO 时一定是 WAITING 吗？synchronized 与 Lock 阻塞状态有什么区别？",
      "answer": "**直接回答：**\n不一定。Java 状态和操作系统状态不是一一对应，阻塞 IO 在线程转储里可能仍显示 RUNNABLE。抢 synchronized 常是 BLOCKED，ReentrantLock 等待常是 WAITING/TIMED_WAITING。一定要结合栈和 CPU 看，不只看状态名。\n\n**深入补充（选读）：**\nJava Thread.State 与操作系统调度状态不是一一对应。线程执行本地阻塞 IO 时在 Java 线程转储中可能仍显示 RUNNABLE；抢占对象监视器通常是 BLOCKED；ReentrantLock 竞争中的 park 常显示 WAITING 或 TIMED_WAITING。判断卡住位置要看完整栈、锁拥有者和多次采样，不能只看一个状态名。\n\n**追问 / 易错点：** RUNNABLE 不能直接证明线程正在消耗 CPU，需结合线程 CPU 时间。\n\n**原始资料核对：** [官方文档](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.State.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q03-036",
        "多线程 / 并发",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q03-037",
      "number": "Q03-037",
      "question": "持锁代码抛异常，锁一定会自动释放吗？",
      "answer": "**直接回答：**\nsynchronized 异常退出会自动释放监视器；显式 Lock 要在成功加锁后用 finally 解锁，tryLock 失败则不能 unlock。分布式锁还要验证持有者。进程被强杀时 finally 可能没机会执行，所以还需要租约和业务恢复。\n\n**深入补充（选读）：**\n离开 synchronized 块时 JVM 会释放监视器，包括异常退出。显式 Lock 则应在成功加锁后用 try/finally 解锁；tryLock 返回 false 时不能 unlock。分布式锁还需校验持有者，不能假定本地 finally 必定运行：进程被杀或机器宕机时需要租约、业务幂等与恢复机制。\n\n**追问 / 易错点：** 不要把网络调用无限期放在临界区；InterruptedException 也不能被无条件吞掉。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N017"
      ],
      "keywords": [
        "Q03-037",
        "多线程 / 并发",
        "滴滴"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q04-031",
      "number": "Q04-031",
      "question": "循环不断调用一个普通方法，会导致栈溢出吗？",
      "answer": "**直接回答：**\n普通方法每次调用后正常返回，栈深不会因循环次数不断增加，所以循环不等于栈溢出。递归不断加深才可能 StackOverflowError。循环若持续保存新对象，可能撑爆的是堆；若什么也不等，只可能不断耗 CPU。\n\n**深入补充（选读）：**\n如果每次调用正常返回，栈帧会退出，调用深度不会随循环次数增长，因此不能仅凭循环次数断言 StackOverflowError。无限递归或互相调用造成深度增长才是典型栈溢出。循环也可能由于不断保存对象导致堆 OOM，或者只消耗 CPU；定位应区分栈深度、对象留存和线程数。\n\n**追问 / 易错点：** 递归转迭代可能把空间转移到显式栈，仍需估算内存上界。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N019"
      ],
      "keywords": [
        "Q04-031",
        "JVM",
        "字节跳动"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q04-032",
      "number": "Q04-032",
      "question": "classpath 里出现同名类，一定优先加载我写的类吗？",
      "answer": "**直接回答：**\n不一定。实际加载哪个类取决于类加载器委派、搜索路径和模块等规则。排查同名类要看定义加载器和代码来源，而不是只看 classpath 有自己那份。相同全限定名被不同加载器定义，也可能无法互相强转。\n\n**深入补充（选读）：**\n不一定。类身份由二进制名称和定义它的类加载器共同决定；最终加载哪个类还取决于委派关系、模块边界、搜索路径和加载器实现。父加载器已能提供的类通常先被复用。不要通过假冒核心包名覆盖 JDK 类；排查依赖冲突应查看类的加载器、代码来源和构建依赖树。\n\n**追问 / 易错点：** 相同全限定名被不同加载器定义，强制转换也可能失败。",
      "category": "JVM",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N032"
      ],
      "keywords": [
        "Q04-032",
        "JVM",
        "招银云创"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q05-041",
      "number": "Q05-041",
      "question": "带事务的方法调用普通方法，普通方法的数据库操作有事务吗？",
      "answer": "**直接回答：**\n通常有：外层已经通过代理开启事务，普通方法在同线程、同受管资源上操作数据库，就会参与已有事务。自调用的限制是“内层注解不会重新被代理处理”，不是“进入普通方法后原事务消失”。\n\n**举个例子：**\n外层有事务时调用普通 mapper 操作能回滚；外层没事务，却用 this 调带 @Transactional 的方法，通常不会因此新开事务。\n\n**深入补充（选读）：**\n如果外层确实经代理开启事务，普通方法在同一线程中通过同一受事务管理的数据访问资源执行，通常仍参与外层事务。自调用的限制是内层注解不会重新被代理解释，并不意味着已有事务凭空消失。若外层没有事务，再自调用带注解的方法，则通常不会新开事务。\n\n**追问 / 易错点：** 要同时交代外层是否生效、是否换线程、是否换数据源，以及内层传播行为是否被代理执行。\n\n**原始资料核对：** [官方文档](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q05-041",
        "Spring / Spring Boot",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q05-042",
      "number": "Q05-042",
      "question": "异步线程能开启新事务吗？为什么主线程回滚后异步数据还在？",
      "answer": "**直接回答：**\n异步线程能开自己的事务，但不会自动继承主线程的 JDBC 事务。它通过事务代理或 TransactionTemplate 开启并提交后，主线程再回滚也不会把它撤销。跨线程一致性需要事件、状态或补偿，不能靠复制 ThreadLocal 共享连接。\n\n**深入补充（选读）：**\n可以。传统 Spring 事务上下文通常绑定线程，主线程事务不会自动传给线程池。异步线程通过事务代理调用方法，或使用 TransactionTemplate，可在自己的线程中建立独立事务，因此主线程回滚不会自动撤销已提交的异步写入。跨线程工作流需用事件、Outbox、补偿或状态机协调。\n\n**追问 / 易错点：** 不要靠复制 ThreadLocal 来共享 JDBC 连接；异步任务读取主线程尚未提交的数据也可能读不到。\n\n**原始资料核对：** [官方文档](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-decl-explained.html)。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q05-042",
        "Spring / Spring Boot",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q05-043",
      "number": "Q05-043",
      "question": "MyBatis 的 #{} 与 ${} 有什么区别？动态排序怎么办？",
      "answer": "**直接回答：**\n#{} 把数据值作为绑定参数，${} 把内容原样拼进 SQL。值通常用 #{}；表名、列名、排序方向不能当普通值绑定，应由前端选项映射到后端固定白名单。不要直接把用户输入放进 ${}。\n\n**深入补充（选读）：**\n#{} 通常生成 PreparedStatement 参数绑定，适合数据值；${} 是原样文本替换，拼接外部输入可能造成 SQL 注入。表名、列名、排序方向通常不能用绑定参数替代，应把前端选项映射到服务端固定白名单 SQL 片段。使用 #{} 也不代表其他动态拼接位置自动安全。\n\n**追问 / 易错点：** LIKE 的通配符业务语义与 SQL 注入是两回事；需要按搜索规则处理 %、_。\n\n**原始资料核对：** [官方文档](https://mybatis.org/mybatis-3/sqlmap-xml.html)。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N035"
      ],
      "keywords": [
        "Q05-043",
        "Spring / Spring Boot",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q06-036",
      "number": "Q06-036",
      "question": "查出选课人数超过 5 人的课程，SQL 怎么写？",
      "answer": "**直接回答：**\n先按 course_id 分组，再用 HAVING 过滤人数大于 5 的课程。可能重复选课时用 COUNT(DISTINCT student_id)，已有唯一约束时可考虑 COUNT(*)。WHERE 先筛原始行，HAVING 再筛分组结果，退课等状态应先定义。\n\n**举个例子：**\nSELECT course_id FROM enrollment GROUP BY course_id HAVING COUNT(DISTINCT student_id) > 5;\n\n**深入补充（选读）：**\n假设 enrollment(course_id, student_id)，可以 SELECT course_id FROM enrollment GROUP BY course_id HAVING COUNT(DISTINCT student_id) > 5。若有唯一约束保证一人一课程只有一行，可用 COUNT(*)。需要课程名时先聚合再关联课程表，或者按明确字段分组；先说明退课、软删除、重复记录是否参与统计。\n\n**追问 / 易错点：** WHERE 在分组前过滤行，HAVING 在分组后过滤组。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q06-036",
        "MySQL",
        "百度"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q06-037",
      "number": "Q06-037",
      "question": "按关键词查文本，LIKE 查询怎么优化？",
      "answer": "**直接回答：**\nLIKE 'abc%' 有明确前缀，普通 B+ 树有机会缩小扫描范围；LIKE '%abc%' 通常难直接定位。先加合理业务过滤、减少返回列，再看计划。需要分词和相关性时评估全文检索，但它不等价于任意子串匹配。\n\n**深入补充（选读）：**\n普通 B+ 树通常更适合可利用前缀的 LIKE 'abc%'；前导通配符 LIKE '%abc%' 通常不能形成有效前缀范围。先限定业务过滤条件、减少扫描行和返回列，核对字符集与排序规则。需要分词、相关性排序和复杂检索时再评估全文索引或搜索引擎；它们的分词结果与任意子串匹配不完全等价。\n\n**追问 / 易错点：** 不要把强制索引当成通用修复，应比较执行计划和实际扫描成本。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N027"
      ],
      "keywords": [
        "Q06-037",
        "MySQL",
        "车300"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q07-031",
      "number": "Q07-031",
      "question": "一个 key 同时读热点和写热点，只加本地缓存够吗？",
      "answer": "**直接回答：**\n不够。本地缓存主要减少读 Redis 的压力，写热点仍集中在原 key。计数可在允许延迟时分桶汇总，强约束库存却不能随意拆成多个独立真值。先区分读写比例和一致性要求，再做限流、合并或数据拆分。\n\n**深入补充（选读）：**\n本地缓存主要分摊读请求，不能直接消除同一 Redis key 的高频写竞争。计数类可分桶并异步汇总，但需接受汇总延迟；强约束库存不能把每个副本当独立真值。可按业务实体拆分热点、在入口合并请求或限流，最终用持久层条件更新、唯一约束和对账保证不变量。\n\n**追问 / 易错点：** 先定义读写比例、一致性要求和热点对象，不能只凭 QPS 决定拆 key。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N039"
      ],
      "keywords": [
        "Q07-031",
        "Redis",
        "京东"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q07-032",
      "number": "Q07-032",
      "question": "逻辑过期的数据不设 TTL，会不会撑爆 Redis？",
      "answer": "**直接回答：**\n会有风险。逻辑过期只是业务判断“这个值旧了”，并不自动释放内存。仍需更长的物理 TTL、容量上限或清理策略，并限制重建并发。允许返回旧值的场景也要明确，权限和余额不能随便用同一套策略。\n\n**深入补充（选读）：**\n会有这个风险。逻辑过期只决定业务是否返回旧值或触发重建，并不自动回收物理内存。通常设置更长的物理 TTL、限制缓存规模、周期清理并监控内存，同时用互斥控制重建并对失败退避。返回旧值是否允许取决于业务：商品描述通常比余额、权限、支付状态更能容忍陈旧。\n\n**追问 / 易错点：** 物理 TTL 到期仍可能触发集中回源，需抖动、预热和回源限流。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N027",
        "N035"
      ],
      "keywords": [
        "Q07-032",
        "Redis",
        "车300",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q07-033",
      "number": "Q07-033",
      "question": "Lua 扣库存执行一半出错或 Redis 宕机，能保证什么？",
      "answer": "**直接回答：**\nLua 执行时不会被其他客户端命令插进来，但运行报错不会像数据库事务那样自动撤销之前的写入。宕机后的恢复还受持久化和复制影响。先校验再修改，配合业务幂等、持久订单状态和库存对账。\n\n**深入补充（选读）：**\n脚本执行期间不会与其他客户端命令交错，但这不等于数据库式自动回滚。脚本运行错误可能保留此前写入；节点崩溃后的恢复还取决于持久化和复制状态，不能承诺“用了 Lua 就绝不丢库存”。应先校验参数和类型再写，设置业务幂等键，持久记录订单结果并进行库存对账。\n\n**追问 / 易错点：** 脚本跨多个 key 时还要满足 Cluster 的同槽约束；Redis 与 MySQL 仍不是一个本地事务。\n\n**原始资料核对：** [官方文档](https://redis.io/docs/latest/develop/programmability/eval-intro/)。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N035"
      ],
      "keywords": [
        "Q07-033",
        "Redis",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q08-026",
      "number": "Q08-026",
      "question": "消息积压到业务过期，还要照常消费吗？",
      "answer": "**直接回答：**\n先看消息现在还有没有业务价值，不能一律继续或一律丢弃。过期营销通知可按规则跳过并记录；扣款、库存等关键事件要查当前事实，转补偿或异常处理。消息保留期与业务有效期是两回事。\n\n**深入补充（选读）：**\n先区分 broker 保留期限与业务截止时间。在消息中携带业务时间、状态版本和唯一标识，消费者根据持久状态判断是否仍可执行。过期营销通知可以记录原因后跳过，扣款与库存事件不能随意丢弃，应转查询确认、补偿或人工处理。记录过期率、最老消息年龄和补偿结果，避免恢复后造成二次业务事故。\n\n**追问 / 易错点：** “超过十分钟就丢弃”必须有业务授权和审计依据，不能当通用 MQ 策略。",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N034"
      ],
      "keywords": [
        "Q08-026",
        "消息队列 MQ",
        "小米"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q08-027",
      "number": "Q08-027",
      "question": "Kafka 按 userId 分区，一个大用户把分区打热怎么办？",
      "answer": "**直接回答：**\n先确认是不是同一个大用户压热一个分区。严格要求用户内顺序时，不能为了并行随便把它拆散；可以隔离热点、批处理或优化串行路径。若只要求订单内顺序，可以改更细业务 key，但迁移期顺序也要设计。\n\n**深入补充（选读）：**\n先看各分区吞吐、lag、处理耗时和 key 分布，确认是热点 key 还是坏消息。若必须保证单用户严格顺序，同一用户通常不能任意拆到多个分区；可独立隔离该用户、批处理或优化串行路径。若只需订单内顺序，可把分区键细化到订单。增加消费者不能突破单分区在同组内通常由一个消费者负责的约束。\n\n**追问 / 易错点：** 增加分区会影响 key 到分区的映射，迁移期间的顺序要单独设计。\n\n**原始资料核对：** [官方文档](https://kafka.apache.org/43/design/design/)。",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N006"
      ],
      "keywords": [
        "Q08-027",
        "消息队列 MQ",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q09-026",
      "number": "Q09-026",
      "question": "TCP 第三次握手 ACK 丢失后，两端是什么状态？",
      "answer": "**直接回答：**\n客户端发出第三次 ACK 后通常已进入 ESTABLISHED；服务端没收到时仍可能在 SYN-RECEIVED，并重发 SYN+ACK。客户端再次确认，后续带有效 ACK 的数据也可能完成握手。不是第三次丢包双方就立即断开。\n\n**深入补充（选读）：**\n客户端发出最终 ACK 后通常进入 ESTABLISHED，服务端若尚未收到则仍在 SYN-RECEIVED，并可重传 SYN+ACK；客户端收到后再次确认。携带数据的后续报文若具有有效确认，也可能使服务端完成建立。实际重试与超时由协议实现和配置决定，不能回答成“第三次丢了两边立刻断开”。\n\n**追问 / 易错点：** 仅有两次报文交换时，两端对连接是否已建立的认知可能不同。\n\n**原始资料核对：** [官方文档](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q09-026",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q09-027",
      "number": "Q09-027",
      "question": "服务器一个端口最多只能接 65535 个客户端吗？",
      "answer": "**直接回答：**\n不是。TCP 连接通过本地和远端的 IP、端口等组合区分，同一服务器监听端口可以接受大量不同连接。实际限制常是文件描述符、内存和处理能力；客户端连接同一目标时，源端口数量才可能先成为瓶颈。\n\n**深入补充（选读）：**\n不是。TCP 连接由本地 IP、端口和远端 IP、端口等信息区分，同一监听端口可承载大量不同连接。约束通常来自文件描述符、内存、连接跟踪、应用处理能力；客户端连接同一目标时，源端口空间可能先成为限制。扩展连接数要同时核对系统限额与应用容量，不能只改一个 ulimit。\n\n**追问 / 易错点：** TIME_WAIT 的影响与连接方向、源地址和端口复用策略有关。\n\n**原始资料核对：** [官方文档](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q09-027",
        "计算机网络",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q09-028",
      "number": "Q09-028",
      "question": "TCP 校验和能防止攻击者篡改数据吗？",
      "answer": "**直接回答：**\n不能。TCP 校验和主要发现偶然传输错误，不是密码学认证；攻击者能改报文时也可能重算校验和。防恶意篡改和认证身份要靠 TLS 等安全机制。可靠传输和安全传输不是同一个问题。\n\n**深入补充（选读）：**\n不能。TCP 校验和主要发现传输中的偶然错误，不是密码学消息认证；能修改报文的攻击者也可能重新计算校验和。抗篡改和身份认证通常由 TLS 等协议提供。可靠传输里的序号、确认、重传与安全传输里的认证、机密性是不同问题。\n\n**追问 / 易错点：** TCP 使用校验和，不应直接说成 CRC，更不能把校验通过当成来源可信。\n\n**原始资料核对：** [官方文档](https://datatracker.ietf.org/doc/html/rfc9293)。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q09-028",
        "计算机网络",
        "字节跳动"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q10-026",
      "number": "Q10-026",
      "question": "机器只有 4 GB 物理内存，申请 8 GB 内存一定失败吗？",
      "answer": "**直接回答：**\n不一定。申请虚拟地址空间和实际占用物理内存是两步，结果受地址位宽、过量承诺、交换空间和容器限额影响。真正访问内存时才可能暴露不足。申请成功不保证后续安全，Java 还受堆和本地内存限制。\n\n**深入补充（选读）：**\n不一定。进程看到的是虚拟地址空间，分配成功与实际物理页可用不是同一件事；是否允许过量承诺、是否有交换空间、地址位宽和容器限制都会影响结果。真正逐页写入时才可能触发回收、交换或 OOM。Java 还受最大堆、直接内存与本地内存预算约束。\n\n**追问 / 易错点：** 32 位与 64 位地址空间能力不同；malloc 成功也不能证明后续访问永不 OOM。\n\n**原始资料核对：** [官方文档](https://www.kernel.org/doc/html/v5.7/vm/overcommit-accounting.html)。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N038"
      ],
      "keywords": [
        "Q10-026",
        "操作系统 / Linux",
        "百度"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q10-027",
      "number": "Q10-027",
      "question": "Java 服务没有异常日志就退出，如何定位？",
      "answer": "**直接回答：**\n没有 Java 异常也可能是故障。先查退出码、systemd/容器事件和内核 OOM 记录，再看 hs_err、GC 日志和发布操作。SIGKILL/OOMKill 可能来不及写日志；本地库或 JVM 崩溃也不一定表现成普通 Exception。\n\n**深入补充（选读）：**\n先看进程退出码、容器或 systemd 事件、重启次数及内核 OOM 记录，再查 hs_err 文件、GC 日志和最近发布。被 SIGKILL/OOM killer 杀死时应用来不及写异常或执行 shutdown hook；JVM 崩溃也不等价于普通 Java Exception。把应用堆、直接内存、线程栈与容器实际内存限制放在一起分析。\n\n**追问 / 易错点：** 先保留现场和时间线，不能凭“没有 Java 堆栈”判定没故障。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q10-027",
        "操作系统 / Linux",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-036",
      "number": "Q11-036",
      "question": "支付成功回调与超时关单同时到达，怎么处理？",
      "answer": "**直接回答：**\n用状态机和条件更新控制本地迁移，但最终还要核对支付渠道是否真的扣款。不能因为本地先关单，就忽略后来确认的付款。根据业务恢复履约或退款，补偿也要幂等，重复通知和主动对账一起保证收敛。\n\n**深入补充（选读）：**\n用明确状态机和数据库条件更新限制合法迁移，例如只允许从待支付状态完成一次状态转换；业务流水号建立唯一约束。关单前后与支付渠道可能存在竞态，不能仅凭本地状态忽略已成功扣款：应主动查询渠道，按规则恢复履约或退款，并通过对账收敛。重复回调返回一致结果，补偿动作本身也需幂等。\n\n**追问 / 易错点：** 换支付渠道前先确定旧渠道状态；“请求超时”不等于“支付失败”。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N012",
        "N035",
        "N055"
      ],
      "keywords": [
        "Q11-036",
        "场景题 / 故障排查",
        "XTransfer",
        "快手",
        "网易"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-037",
      "number": "Q11-037",
      "question": "PHP 服务迁移到 Java，怎么证明功能等价？",
      "answer": "**直接回答：**\n先固定接口输入输出、错误码、数据修改和外部副作用，再用同一批案例比较新旧系统。读请求可影子比对，写操作要在隔离环境验证，避免真实扣款两次。覆盖空值、精度、时区和排序，再灰度发布并准备回滚。\n\n**深入补充（选读）：**\n先列接口契约、错误码、数据库写入和外部副作用，建立可回放样本，覆盖空值、精度、时区、排序及边界输入。对读请求可影子比对结果；写请求在隔离环境回放或比较决策，避免线上执行两次支付等副作用。按租户或流量灰度，监控正确率和延迟，提前准备回滚与数据兼容方案。\n\n**追问 / 易错点：** 返回 JSON 一样仍可能写错数据，需要核对状态变更与外部调用。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N005"
      ],
      "keywords": [
        "Q11-037",
        "场景题 / 故障排查",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-038",
      "number": "Q11-038",
      "question": "SQL 已走索引，为什么高峰期 MySQL CPU 仍高？",
      "answer": "**直接回答：**\n走索引只是访问方式，不代表工作量很小。高峰可能是 SQL 次数太多、索引扫描范围大、回表多、排序重或连接风暴。结合真实扫描量和查询摘要找热点，再减少查询、改覆盖索引或限流，不能只看 key 字段有值。\n\n**深入补充（选读）：**\n走索引并不等于成本低。先看总 QPS、慢日志摘要、扫描与返回行数、回表次数、排序聚合和执行计划变化；大量廉价查询也能累积成高 CPU。区分数据库计算、锁竞争、IO 等待和连接风暴，再优化索引覆盖、减少结果集、合并请求或限流。记录高峰前后同一指标，避免仅靠故障自行恢复下结论。\n\n**追问 / 易错点：** EXPLAIN 只是计划，需结合真实耗时、扫描量和业务访问分布。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N021"
      ],
      "keywords": [
        "Q11-038",
        "场景题 / 故障排查",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-039",
      "number": "Q11-039",
      "question": "RPC 成功率只有 70%，CPU 和内存都正常，怎么查？",
      "answer": "**直接回答：**\n资源均值正常，不代表每个调用链正常。按下游实例、错误码和阶段拆失败率，查坏节点、连接池等待、限流、DNS 和超时配置。沿 trace 比较客户端与服务端记录，先隔离故障点，再做有限且幂等的重试。\n\n**深入补充（选读）：**\n按目标实例、机房、错误码和调用阶段拆分失败率，查是否固定某个下游实例异常、连接池耗尽、DNS/路由变化、限流或超时配置不匹配。用 trace 对齐客户端、网关与服务端时间线，分别看连接建立、排队、服务处理和读响应耗时。先隔离坏实例或降级，重试需限制预算并保证幂等。\n\n**追问 / 易错点：** 整体资源均值正常不能排除局部热点、线程阻塞和下游故障。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N021"
      ],
      "keywords": [
        "Q11-039",
        "场景题 / 故障排查",
        "快手"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-040",
      "number": "Q11-040",
      "question": "百万粉丝作者发动态，推送与拉取怎么设计？",
      "answer": "**直接回答：**\n普通作者可推到粉丝收件箱，让读更快；百万粉丝大 V 全量推送写放大太大，可改读时拉取合并，或只推活跃粉丝。常用混合策略，并明确可见延迟。删除、权限变化和重复事件也要处理。\n\n**深入补充（选读）：**\n普通作者可写入粉丝收件箱，读取快但写放大；大 V 可保留发件箱，用户读时合并，或对活跃粉丝有限推送。采用混合策略，按活跃度分层并用消息分批扩散。时间排序需稳定游标，例如时间戳加唯一 ID，处理同分和新写入；删除、权限变化与重复投递也需校验。\n\n**追问 / 易错点：** 不要对百万粉丝在单次请求里同步逐个写 Redis；列出最终可见延迟目标。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q11-040",
        "场景题 / 故障排查",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-041",
      "number": "Q11-041",
      "question": "分片上传怎么去重、恢复和清理残留文件？",
      "answer": "**直接回答：**\n上传先建会话，保存文件大小、分片数、版本和校验信息。每片按会话+序号幂等写入，完成后校验完整性，再切成可见状态；失败可继续传，过期会话清残片。文件哈希帮助查重，但不能替代权限判断。\n\n**深入补充（选读）：**\n上传会话记录用户、文件大小、分片数、校验信息和状态，分片写入以会话加序号幂等，完成时校验后原子切换可见状态。内容哈希能做查重线索，但不能替代权限校验或把 MD5 当安全身份。分片大小通过网络重试成本、吞吐和内存测量确定。未完成会话按期限回收，合并失败可重试并清理孤立分片。\n\n**追问 / 易错点：** 已上传百分比不等于解析成功；前端应看到上传、合并、解析、失败等分阶段状态。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N035",
        "NI007"
      ],
      "keywords": [
        "Q11-041",
        "场景题 / 故障排查",
        "快手",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-042",
      "number": "Q11-042",
      "question": "忘记密码接口怎么设计？",
      "answer": "**直接回答：**\n重置密码用高熵、短时、一次性凭据，通过已验证渠道发给用户，服务端绑定用户和用途，成功后原子作废。请求响应不要泄露账号是否存在，并加限流。更新后按策略撤销旧会话，日志不得泄露重置令牌。\n\n**深入补充（选读）：**\n请求阶段给出一致响应，避免泄露账号是否存在；通过已验证渠道发送高熵、短时、一次性重置凭据，并对账号和来源限流。服务端绑定用途与用户，安全存储凭据，使用后原子作废；设置新密码后按策略撤销旧会话并通知用户。不要在 URL、日志或第三方资源中泄露重置凭据。\n\n**追问 / 易错点：** 重置令牌不是登录令牌；并发提交也必须只能成功使用一次。\n\n**原始资料核对：** [官方文档](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N027"
      ],
      "keywords": [
        "Q11-042",
        "场景题 / 故障排查",
        "车300"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q11-043",
      "number": "Q11-043",
      "question": "心跳间隔怎么定？没收到心跳就能认定节点死亡吗？",
      "answer": "**直接回答：**\n没收到心跳只能怀疑节点不可用，可能是网络抖动或长暂停，不一定真死。根据发现时限和误判成本设置间隔与阈值，恢复时检查实例世代或租约，防止旧节点继续写。强约束操作仍需协调和资源端保护。\n\n**深入补充（选读）：**\n网络延迟、暂停和丢包会造成误判，心跳只能给出故障怀疑。根据可接受发现时间、网络抖动和开销设置间隔与连续失败阈值，并允许恢复确认。状态改变应带实例世代或租约，避免旧节点恢复后继续写；强一致协调还需多数派或受保护资源端的 fencing，不能只靠定时任务删节点。\n\n**追问 / 易错点：** 说明误判成本和故障发现时延的取舍，不要随口给固定三秒。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q11-043",
        "场景题 / 故障排查",
        "拼多多"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-036",
      "number": "Q12-036",
      "question": "用了 Agent 后效率提升 30%，怎么证明是你的改动带来的？",
      "answer": "**直接回答：**\n先定义效率是完成时间、成功率还是人工成本，再固定任务集、模型版本、输入和人员条件比较改动前后。通过去掉某项改动的实验看它贡献多少，同时报告失败和成本。没有测量就不写“提升 30%”。\n\n**深入补充（选读）：**\n先定义任务完成、正确率和耗时的计算口径，固定任务集、模型版本、输入规模与人员经验。比较改动前后，并通过去掉缓存、检索或提示优化的消融实验估计各项贡献。报告样本量、失败类型、P50/P95 时延和成本，区分离线测试、内部试用与线上结果；没有测量就不给虚构百分比。\n\n**追问 / 易错点：** 模型升级或样本变简单也会改善指标，需要控制这些干扰因素。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N031",
        "N040"
      ],
      "keywords": [
        "Q12-036",
        "项目 / 实习拷打",
        "拼多多",
        "帆软"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-037",
      "number": "Q12-037",
      "question": "知识库如何防止错误知识越积越多？",
      "answer": "**直接回答：**\n知识入库要保留来源、版本、负责人、适用范围和生效时间；冲突、过期和错误信息应能标记、修正和回滚。定期用固定问答集验证检索和答案，不让模型生成的猜测直接变成权威知识。\n\n**深入补充（选读）：**\n为文档保留来源、负责人、版本、生效时间和适用范围，建立入库校验、冲突标记与过期清理。自动抽取结果先经过规则或抽样人工审核，高风险知识提高审核强度；用固定问答集验证更新效果并保留回滚能力。新旧知识冲突不能仅按向量相似度裁决，应按权威性和生效范围选择。\n\n**追问 / 易错点：** 检索命中率高不代表答案正确，需要分别评估检索、生成和引用是否支持结论。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N034"
      ],
      "keywords": [
        "Q12-037",
        "项目 / 实习拷打",
        "小米"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-038",
      "number": "Q12-038",
      "question": "主 Agent 选错子 Agent 或工具，工程上如何兜底？",
      "answer": "**直接回答：**\n先用工具契约和规则拦明显错误，执行后检查结果是否满足目标；失败只做有限重试、改路由或转人工。涉及真实副作用时，权限和状态必须由后端再次校验。把误路由样本加入回归集，别靠无限反思循环兜底。\n\n**深入补充（选读）：**\n给任务和工具明确输入输出契约，路由前做规则校验，记录置信信号与执行轨迹；路由失败或结果不满足约束时，允许有限重试、改路由或转人工。对扣款、发信等副作用先校验权限和业务状态，再执行幂等动作。用真实错误样本建立回归集，比较误路由率，不能用无限反思循环弥补不确定性。\n\n**追问 / 易错点：** Skill 通常指组织化流程或说明，Tool 指可调用能力，但具体含义取决于所用框架，先给出项目定义。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N034",
        "N041",
        "NI007"
      ],
      "keywords": [
        "Q12-038",
        "项目 / 实习拷打",
        "小米",
        "BIGO",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-039",
      "number": "Q12-039",
      "question": "对话压缩把多个订单号弄丢了，怎么办？",
      "answer": "**直接回答：**\n订单号、金额和当前选中对象应存结构化状态，摘要主要记背景。每个标识带来源、类型和版本，工具调用按明确状态取参数，而不是重新从摘要里猜。压缩前后验证关键字段，用户修改时同步更新状态。\n\n**深入补充（选读）：**\n关键业务标识存入结构化会话状态或业务存储，包含来源、实体类型、当前选择和版本；摘要主要保存讨论背景。模型要查询时按明确标识调用工具，不依赖长文本里重新猜订单号。对数量、金额和目标对象设置校验，并允许用户切换或纠正选择；日志记录状态变更方便追溯。\n\n**追问 / 易错点：** 上下文更长不能替代状态建模，租户和用户权限也不能由摘要决定。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N022",
        "N041"
      ],
      "keywords": [
        "Q12-039",
        "项目 / 实习拷打",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-040",
      "number": "Q12-040",
      "question": "用户把转账金额从 5000 改成 50000，Agent 怎么避免误付？",
      "answer": "**直接回答：**\n金额变更后，旧的支付确认必须失效。生成带版本的新草稿，展示收款人、金额、币种和费用，确认绑定当前版本；执行前后端再查权限、限额和状态，并使用幂等键。关键金额不明确就不能凭模型猜测执行。\n\n**深入补充（选读）：**\n金额使用精确十进制和明确币种，修改后失效旧确认，形成带版本的交易草稿。执行前向用户展示收款人、金额、币种与费用，确认必须绑定当前草稿；后台重新校验权限、限额和状态，生成幂等支付请求。解析不确定时追问，不能根据历史习惯补全关键金额。\n\n**追问 / 易错点：** 这里是工程设计题；实际支付规则以业务系统约束为准，模型不能绕过授权直接转账。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N041"
      ],
      "keywords": [
        "Q12-040",
        "项目 / 实习拷打",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-041",
      "number": "Q12-041",
      "question": "工具注册表为什么设计成单例？什么时候不该这样做？",
      "answer": "**直接回答：**\n工具注册表若只存稳定、无用户状态的元数据，单例能统一管理并避免重复构建。请求凭据、租户和会话状态不能放共享字段。需要动态更新时，可用不可变快照替换；单例本身并不自动保证并发安全。\n\n**深入补充（选读）：**\n若注册表存的是稳定、无用户状态的工具元数据，单例可避免重复构建并统一查找；初始化后不可变更便于并发读取。单例不是必须，也不自动线程安全。每次请求的用户凭据、租户与会话状态应显式传入或使用合适作用域，不能塞进共享字段。动态更新可用不可变快照原子替换。\n\n**追问 / 易错点：** 说明生命周期、更新频率和状态归属，比“Spring 默认单例”更能解释选择。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N005"
      ],
      "keywords": [
        "Q12-041",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-042",
      "number": "Q12-042",
      "question": "单实例服务用了 Caffeine、Redis、MySQL，Redis 能不能删？",
      "answer": "**直接回答：**\n可以评估删除，但先列清 Redis 承担哪些职责。若只有单实例的普通读缓存，本地缓存可能够；若承担共享会话、锁、限流或任务，不能直接用 Caffeine 等价替换。还要考虑重启冷启动和未来扩容。\n\n**深入补充（选读）：**\n可以评估，但要列清它承担的是缓存、分布式锁、会话、限流还是队列。纯读缓存且单实例可用本地缓存简化，代价是重启冷启动、容量限制与未来多实例一致性。若承担共享状态或独立生命周期的任务，本地缓存不等价。通过故障恢复、成本和扩容计划比较方案，而不是为了技术栈丰富保留组件。\n\n**追问 / 易错点：** Memcached 也是独立服务，不能当成进程内缓存的同义词。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N040"
      ],
      "keywords": [
        "Q12-042",
        "项目 / 实习拷打",
        "帆软"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q12-043",
      "number": "Q12-043",
      "question": "抽奖从单抽扩展到十连抽，如何设计？",
      "answer": "**直接回答：**\n十连抽先定义十次是否独立、有无保底、库存不足时是否整批失败。用唯一请求号代表一个批次，记录每次结果和发放状态；公共校验、抽取、库存和发奖分清职责。不能简单循环十次就忽略并发和部分失败。\n\n**深入补充（选读）：**\n先明确十次独立抽取还是存在保底、去重、整单回滚规则，再定义随机过程和库存预留。把通用校验、抽奖策略、奖品分配与发放拆开，十连抽作为有唯一请求号的批次，记录每次结果及整体状态。库存不足、部分发放失败需要确定补偿策略，不能简单循环十次并假设没有并发。\n\n**追问 / 易错点：** 概率效果用统计验证；并发正确性用库存守恒、唯一约束和故障注入验证。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N002"
      ],
      "keywords": [
        "Q12-043",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-041",
      "number": "Q13-041",
      "question": "下一个排列怎么做？",
      "answer": "**直接回答：**\n从右往左找第一个还能变大的位置，把它换成右侧刚好更大的数，再把后缀反转成最小顺序。若整段都是下降，已是最大排列，整体反转回最小。时间 O(n)、空间 O(1)。\n\n**举个例子：**\n[1,3,2] 中可变大的是 1，换成 2，再把后面降序部分反转，得到 [2,1,3]。\n\n**深入补充（选读）：**\n从右向左找到首个 a[i] < a[i+1] 的位置 i，再从右向左找首个大于 a[i] 的元素交换，最后反转 i+1 后的下降后缀。找不到 i 则整个数组已为最大排列，全部反转到最小排列。时间 O(n)、额外空间 O(1)。\n\n**追问 / 易错点：** 覆盖重复值、全降序、长度为 0 或 1；比较必须是严格大于。\n\n**核心代码：**\n\n```java\nstatic void nextPermutation(int[] a) {\n    int i = a.length - 2;\n    while (i >= 0 && a[i] >= a[i + 1]) i--;\n    if (i >= 0) {\n        int j = a.length - 1;\n        while (a[j] <= a[i]) j--;\n        int t = a[i]; a[i] = a[j]; a[j] = t;\n    }\n    for (int l = i + 1, r = a.length - 1; l < r; l++, r--) {\n        int t = a[l]; a[l] = a[r]; a[r] = t;\n    }\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q13-041",
        "算法与数据结构",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-042",
      "number": "Q13-042",
      "question": "132 模式怎么用单调栈判断？",
      "answer": "**直接回答：**\n从右往左扫，用栈维护可能的“3”，用 second 记录找到的最大可用“2”。新数比 second 小，就找到了“1”；新数更大时弹出栈顶并更新“2”。每个数最多进出一次，时间 O(n)。\n\n**举个例子：**\n132 指下标 i<j<k 且 a[i]<a[k]<a[j]，不是要求数字恰好是 1、3、2。\n\n**深入补充（选读）：**\n从右向左扫描，用单调栈保存可能的“3”，变量 second 保存已经找到的最大可用“2”。当前数小于 second 即找到“1”；当前数大于栈顶时不断弹栈并更新 second，再把当前数入栈。每个数进出一次，时间 O(n)、空间 O(n)。\n\n**追问 / 易错点：** 132 要求严格不等式；second 应用足够小的初值，整数边界要处理。\n\n**核心代码：**\n\n```java\nstatic boolean has132(int[] a) {\n    Deque<Integer> stack = new ArrayDeque<>();\n    long second = Long.MIN_VALUE;\n    for (int i = a.length - 1; i >= 0; i--) {\n        if (a[i] < second) return true;\n        while (!stack.isEmpty() && a[i] > stack.peek()) second = stack.pop();\n        stack.push(a[i]);\n    }\n    return false;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q13-042",
        "算法与数据结构",
        "字节跳动"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-043",
      "number": "Q13-043",
      "question": "LFU 缓存如何同时做到最低频率淘汰与同频率 LRU？",
      "answer": "**直接回答：**\nLFU 先淘汰用得最少的，频率相同再淘汰最久没用的。用 key→节点表、频率→双向链表，再记录 minFreq；每次命中提升频率，满容量时删最小频率桶的末尾。平均操作 O(1)。\n\n**深入补充（选读）：**\n使用 key 到节点映射，以及频率到双向链表映射，维护 minFreq。命中时从旧频率链表删除并加入新频率链表头；旧最小频率桶空了再更新 minFreq。容量满时删除 minFreq 桶尾的最久未使用节点。哈希表平均 O(1)，链表调整 O(1)。\n\n**追问 / 易错点：** 更新已有 key 是否增加频次按题目约定；容量为 0、删除空桶和 minFreq 变化最容易出错。\n\n**核心代码：**\n\n```java\n// LinkedHashSet 负责同频率下的访问顺序；平均 O(1)，非线程安全。\nstatic class LFU {\n    final int capacity;\n    int minFreq = 0;\n    final Map<Integer, Integer> values = new HashMap<>();\n    final Map<Integer, Integer> freqs = new HashMap<>();\n    final Map<Integer, LinkedHashSet<Integer>> buckets = new HashMap<>();\n    LFU(int capacity) { this.capacity = Math.max(0, capacity); }\n    int get(int key) {\n        if (!values.containsKey(key)) return -1;\n        touch(key); return values.get(key);\n    }\n    void touch(int key) {\n        int f = freqs.get(key);\n        LinkedHashSet<Integer> old = buckets.get(f);\n        old.remove(key);\n        if (old.isEmpty()) {\n            buckets.remove(f);\n            if (minFreq == f) minFreq++;\n        }\n        freqs.put(key, f + 1);\n        buckets.computeIfAbsent(f + 1, x -> new LinkedHashSet<>()).add(key);\n    }\n    void put(int key, int value) {\n        if (capacity == 0) return;\n        if (values.containsKey(key)) { values.put(key, value); touch(key); return; }\n        if (values.size() == capacity) {\n            LinkedHashSet<Integer> old = buckets.get(minFreq);\n            int victim = old.iterator().next();\n            old.remove(victim);\n            if (old.isEmpty()) buckets.remove(minFreq);\n            values.remove(victim); freqs.remove(victim);\n        }\n        values.put(key, value); freqs.put(key, 1); minFreq = 1;\n        buckets.computeIfAbsent(1, x -> new LinkedHashSet<>()).add(key);\n    }\n}\n// 面试题通常不考虑频次整型溢出；长期运行的产品实现需另定衰减策略。\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q13-043",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-044",
      "number": "Q13-044",
      "question": "从十万个数中找最小的 10 个，用什么堆？",
      "answer": "**直接回答：**\n找最小的 k 个，用大小 k 的大顶堆：堆顶是保留集合里最大的，遇到更小的就替换它。找最大的 k 个反过来用小顶堆。时间 O(n log k)、空间 O(k)，需要最终有序时再排序。\n\n**深入补充（选读）：**\n维护容量为 10 的大顶堆，堆顶是当前保留集合里最大的数；新数小于堆顶时替换，否则跳过。遍历后堆内就是最小的 10 个，时间 O(n log k)、空间 O(k)，需要有序输出再排序。若找最大的 k 个，才相应维护小顶堆。\n\n**追问 / 易错点：** 明确重复值是否算多个元素，以及 n 小于 k 时的输出。\n\n**核心代码：**\n\n```java\nstatic int[] smallestK(int[] a, int k) {\n    if (k <= 0) return new int[0];\n    k = Math.min(k, a.length);\n    if (k == 0) return new int[0];\n    PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());\n    for (int x : a) {\n        if (heap.size() < k) heap.offer(x);\n        else if (x < heap.peek()) { heap.poll(); heap.offer(x); }\n    }\n    int[] result = new int[k];\n    for (int i = k - 1; i >= 0; i--) result[i] = heap.poll();\n    return result;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N017"
      ],
      "keywords": [
        "Q13-044",
        "算法与数据结构",
        "滴滴"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-045",
      "number": "Q13-045",
      "question": "反转链表指定区间 left 到 right？",
      "answer": "**直接回答：**\n先用 dummy 找到 left 前驱，再在区间内不断把后面的节点摘下来，插到区间最前面。做 right-left 次后，区间反转，其余连接不变。时间 O(n)、空间 O(1)，left=1 也可统一处理。\n\n**深入补充（选读）：**\n用 dummy 找到 left 前驱，固定区间起点作为未来尾节点，反复把起点后一个节点摘下并插入前驱之后，执行 right-left 次。其余链表保持连接。时间 O(n)、空间 O(1)。\n\n**追问 / 易错点：** left=1 要靠 dummy 统一处理；修改 next 前先保存后继，检查区间是否合法。\n\n**核心代码：**\n\n```java\n// 前提：1 <= left <= right <= 链表长度。\nstatic ListNode reverseBetween(ListNode head, int left, int right) {\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    for (int i = 1; i < left; i++) pre = pre.next;\n    ListNode tail = pre.next;\n    for (int i = 0; i < right - left; i++) {\n        ListNode move = tail.next;\n        tail.next = move.next;\n        move.next = pre.next;\n        pre.next = move;\n    }\n    return dummy.next;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N002",
        "NI001"
      ],
      "keywords": [
        "Q13-045",
        "算法与数据结构",
        "美团",
        "招银网络科技"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-046",
      "number": "Q13-046",
      "question": "从链表尾部开始每 k 个一组反转，怎么做？",
      "answer": "**直接回答：**\n按“尾部每满 k 个一组，头部剩余不足 k 个不动”的题设，先算长度 n，跳过前 n%k 个节点，再从那里按普通 k 组反转。时间 O(n)、空间 O(1)。分组方向要先说清，不是把整个链表反转。\n\n**举个例子：**\n1→2→3→4→5，k=2，按尾部划分后得到 1→3→2→5→4。\n\n**深入补充（选读）：**\n先确认不满 k 个的部分位于头部且保持原样。计算长度 n，跳过前 n%k 个节点，再从该位置按常规 k 组反转，保留组前驱、组尾和下一组起点。时间 O(n)、空间 O(1)。若题目要求剩余部分也反转，则规则不同，要先澄清。\n\n**追问 / 易错点：** 例如 1→2→3→4→5，k=2，应得到 1→3→2→5→4。\n\n**核心代码：**\n\n```java\nstatic ListNode reverseGroupsFromTail(ListNode head, int k) {\n    if (k <= 0) throw new IllegalArgumentException(\"k must be positive\");\n    if (k == 1 || head == null) return head;\n    int n = 0;\n    for (ListNode p = head; p != null; p = p.next) n++;\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    for (int i = 0; i < n % k; i++) pre = pre.next;\n    for (int g = 0; g < n / k; g++) {\n        ListNode tail = pre.next;\n        for (int i = 1; i < k; i++) {\n            ListNode move = tail.next;\n            tail.next = move.next;\n            move.next = pre.next;\n            pre.next = move;\n        }\n        pre = tail;\n    }\n    return dummy.next;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q13-046",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-047",
      "number": "Q13-047",
      "question": "两个栈实现队列，怎样扩展成阻塞队列？",
      "answer": "**直接回答：**\n普通两栈队列：新元素进输入栈，输出栈空时把输入栈全部倒过去，均摊 O(1)。阻塞版再加同一把锁和 notEmpty/notFull 条件，空或满时 while 等待，成功操作后通知。两栈结构本身不保证并发安全。\n\n**深入补充（选读）：**\n普通队列用输入栈接收元素，输出栈为空时一次性把输入栈倒入输出栈，均摊 O(1)。阻塞版本还需一把锁保护两个栈和 size，容量满时等待 notFull，空时等待 notEmpty，条件等待必须在 while 中重新检查；入队/出队成功后唤醒对应等待者。\n\n**追问 / 易错点：** 并发正确性不来自“两栈”本身；应支持中断并定义关闭与超时语义。\n\n**核心代码：**\n\n```java\n// 需 import java.util.concurrent.locks.*; 不支持 null。\nstatic class TwoStackBlockingQueue<E> {\n    final Deque<E> in = new ArrayDeque<>(), out = new ArrayDeque<>();\n    final java.util.concurrent.locks.ReentrantLock lock =\n        new java.util.concurrent.locks.ReentrantLock();\n    final java.util.concurrent.locks.Condition notEmpty = lock.newCondition();\n    final java.util.concurrent.locks.Condition notFull = lock.newCondition();\n    final int capacity;\n    int size;\n    TwoStackBlockingQueue(int capacity) {\n        if (capacity <= 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n    }\n    void put(E e) throws InterruptedException {\n        Objects.requireNonNull(e);\n        lock.lockInterruptibly();\n        try {\n            while (size == capacity) notFull.await();\n            in.push(e); size++; notEmpty.signal();\n        } finally { lock.unlock(); }\n    }\n    E take() throws InterruptedException {\n        lock.lockInterruptibly();\n        try {\n            while (size == 0) notEmpty.await();\n            if (out.isEmpty()) while (!in.isEmpty()) out.push(in.pop());\n            E e = out.pop(); size--; notFull.signal(); return e;\n        } finally { lock.unlock(); }\n    }\n}\n// 教学实现仅给出 put/take；关闭、超时和公平性需按产品需求补充。\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N018",
        "N033"
      ],
      "keywords": [
        "Q13-047",
        "算法与数据结构",
        "携程",
        "同程"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-048",
      "number": "Q13-048",
      "question": "有序链表中重复的值全部删除，与保留一个有什么不同？",
      "answer": "**直接回答：**\n“保留一个”是删掉每段重复值里的多余节点；“重复值全删”是整段都跳过。后者用 dummy 和前驱，发现相邻相同就一直跳到下一种值，再接回。时间 O(n)、空间 O(1)。\n\n**举个例子：**\n[1,1,2]：保留一个得到 [1,2]；重复值全部删除得到 [2]。\n\n**深入补充（选读）：**\n使用 dummy 和前驱 pre。若当前节点与后继同值，记住该值并跳过整段，把 pre.next 指向第一个不同节点；否则 pre 前进。保留一个的版本只删除多余节点，不会删除该值的全部节点。时间 O(n)、额外空间 O(1)。\n\n**追问 / 易错点：** 先向面试官确认是 LeetCode 82 还是 83 语义；[1,1,2] 的结果分别是 [2] 与 [1,2]。\n\n**核心代码：**\n\n```java\nstatic ListNode removeAllDuplicates(ListNode head) {\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    while (pre.next != null) {\n        ListNode cur = pre.next;\n        if (cur.next != null && cur.val == cur.next.val) {\n            int value = cur.val;\n            while (cur != null && cur.val == value) cur = cur.next;\n            pre.next = cur;\n        } else pre = pre.next;\n    }\n    return dummy.next;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N046"
      ],
      "keywords": [
        "Q13-048",
        "算法与数据结构",
        "美团"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-049",
      "number": "Q13-049",
      "question": "一般图的直径能像树一样两次 BFS 得到吗？",
      "answer": "**直接回答：**\n树可以用两次 BFS/DFS 找直径，一般图不能直接套。无权连通图的直径是所有点对最短距离中的最大值，精确方法可对每个点做 BFS，时间 O(V(V+E))。它不是最长简单路径，非连通和带权要另定规则。\n\n**深入补充（选读）：**\n树中两次 BFS/DFS 可找直径，但一般图不能直接套用该结论。无权连通图的直径是所有点对最短距离的最大值，可从每个点 BFS，复杂度 O(V(V+E))；规模小也可用全源最短路。非连通图应先明确逐连通分量计算还是视为无穷。\n\n**追问 / 易错点：** 有权图根据边权用相应最短路算法；“最长简单路径”与“直径”不是同一问题。\n\n**核心代码：**\n\n```java\n// 无向、无权、连通图；空图返回 0，非连通图拒绝输入。\nstatic int graphDiameter(List<List<Integer>> graph) {\n    int n = graph.size(), answer = 0;\n    for (int source = 0; source < n; source++) {\n        int[] dist = new int[n]; Arrays.fill(dist, -1);\n        Deque<Integer> queue = new ArrayDeque<>();\n        queue.offer(source); dist[source] = 0;\n        int visited = 0;\n        while (!queue.isEmpty()) {\n            int u = queue.poll(); visited++;\n            answer = Math.max(answer, dist[u]);\n            for (int v : graph.get(u)) if (dist[v] < 0) {\n                dist[v] = dist[u] + 1; queue.offer(v);\n            }\n        }\n        if (visited != n) throw new IllegalArgumentException(\"disconnected graph\");\n    }\n    return answer;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q13-049",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-050",
      "number": "Q13-050",
      "question": "比较版本号，如何避免整数溢出？",
      "answer": "**直接回答：**\n把版本号按点拆成数字段，去掉每段前导零，先比较有效长度，再按字典序比较，缺失段当 0。这样不必把超长数字转 int/long，不会因此溢出。此方法针对纯数字点分版本，不直接覆盖 SemVer 标签。\n\n**深入补充（选读）：**\n按点分段，缺失段视为 0；每段去除前导零后先比较长度，再按字典序比较，直到出现差异。这样不用把任意长数字解析成 int 或 long。时间 O(m+n)，切片实现可能用 O(m+n) 空间，双指针比较可减少额外存储。\n\n**追问 / 易错点：** 说明题目是纯数字点分版本还是完整 SemVer；预发布标签需要另外的排序规则。\n\n**核心代码：**\n\n```java\n// 前提：输入是非空的纯数字点分版本，各段非空。\nstatic int compareVersion(String a, String b) {\n    String[] x = a.split(\"\\\\.\"), y = b.split(\"\\\\.\");\n    for (int i = 0; i < Math.max(x.length, y.length); i++) {\n        String p = i < x.length ? x[i].replaceFirst(\"^0+\", \"\") : \"\";\n        String q = i < y.length ? y[i].replaceFirst(\"^0+\", \"\") : \"\";\n        if (p.length() != q.length()) return Integer.compare(p.length(), q.length());\n        int cmp = p.compareTo(q);\n        if (cmp != 0) return Integer.signum(cmp);\n    }\n    return 0;\n}\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q13-050",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-051",
      "number": "Q13-051",
      "question": "二维字符矩阵中能否走出给定单词？",
      "answer": "**直接回答：**\n从每个可能起点 DFS，按单词顺序走四方向邻格。同一条路径不能重复用格子，递归回来要恢复访问标记。先匹配当前字符再走下一步，找到完整单词即成功；字符频次不足时可提前返回失败。\n\n**深入补充（选读）：**\n从每个匹配首字符的位置开始 DFS，递归匹配四邻域的下一字符；本路径访问过的格子不能重复使用，回溯时恢复标记。单词长度 L，宽松上界 O(mn·4^L)，递归与路径标记按实现计空间。可先比较字符频数快速排除不可能输入。\n\n**追问 / 易错点：** 若原题允许重复访问，状态定义会变化；本回答采用常见“不重复使用格子”的题设。\n\n**核心代码：**\n\n```java\nstatic boolean wordExists(char[][] board, String word) {\n    if (word.isEmpty()) return true;\n    if (board.length == 0 || board[0].length == 0) return false;\n    boolean[][] used = new boolean[board.length][board[0].length];\n    for (int r = 0; r < board.length; r++)\n        for (int c = 0; c < board[0].length; c++)\n            if (wordDfs(board, used, word, r, c, 0)) return true;\n    return false;\n}\nstatic boolean wordDfs(char[][] b, boolean[][] used, String w, int r, int c, int p) {\n    if (p == w.length()) return true;\n    if (r < 0 || r >= b.length || c < 0 || c >= b[0].length\n        || used[r][c] || b[r][c] != w.charAt(p)) return false;\n    used[r][c] = true;\n    boolean ok = wordDfs(b, used, w, r + 1, c, p + 1)\n        || wordDfs(b, used, w, r - 1, c, p + 1)\n        || wordDfs(b, used, w, r, c + 1, p + 1)\n        || wordDfs(b, used, w, r, c - 1, p + 1);\n    used[r][c] = false;\n    return ok;\n}\n// 前提：矩阵规则、字符按 char 比较；递归深度受目标长度限制。\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q13-051",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-Q13-052",
      "number": "Q13-052",
      "question": "旋转有序数组的最小值怎么找？",
      "answer": "**直接回答：**\n无重复的旋转升序数组，比较中间值和右端值：中间更大，最小值在右边，left=mid+1；否则保留 mid，right=mid。最后收敛到最小值，O(log n)。有重复且相等时可能只能 right--，最坏 O(n)。\n\n**深入补充（选读）：**\n对无重复元素的数组，比较 a[mid] 与 a[right]：大于则最小值在 mid 右侧，令 left=mid+1；否则最小值在包含 mid 的左侧，令 right=mid。收敛到一个位置，时间 O(log n)、空间 O(1)。\n\n**追问 / 易错点：** 有重复值且二者相等时常需 right--，最坏可退化到 O(n)；空数组需明确返回或报错。\n\n**核心代码：**\n\n```java\nstatic int rotatedMinimum(int[] a) {\n    if (a.length == 0) throw new IllegalArgumentException(\"empty array\");\n    int left = 0, right = a.length - 1;\n    while (left < right) {\n        int mid = left + (right - left) / 2;\n        if (a[mid] > a[right]) left = mid + 1;\n        else right = mid;\n    }\n    return a[left];\n}\n// 前提：元素互异。\n```",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "N037"
      ],
      "keywords": [
        "Q13-052",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "公司补充题库_2026-09-08"
    },
    {
      "id": "bank-LX001",
      "number": "LX001",
      "question": "两个 0～15、四个 0～200、一个 100～20000 的整数，如何无损编码、去重并按最后字段排序？",
      "answer": "**直接回答：**\n这题不是随便取哈希，而是把七个数按位装进一个 long，保证不同组合不会撞在一起。两个 0～15 各用 4 位，四个 0～200 各用 8 位，最后一个数减去 100 后用 15 位，共 55 位。把最后一个字段放高位，排序时就先按它排；全部编码后排序，相邻相同的编码只保留一份。\n\n**深入补充（选读）：**\n先按取值范围分配位数：两个 0～15 各占 4 位，四个 0～200 各占 8 位，100～20000 先减 100 后占 15 位，总计 55 位，能无损编码进一个 long。最高 15 位放最后一个标签，则按非负 long 排序也会按该标签排序。十万组先编码，再用 long 数组排序并线性去重，时间 O(n log n)、数组空间 O(n)；HashSet<Long> 平均 O(n) 去重，但装箱和哈希表有明显额外内存。\n\n**追问 / 易错点：** 必须校验范围；哈希值不能代替无碰撞编码。按最后字段计数分桶也可，但需保留组内其他字段。\n\n```java\nstatic long pack(int a, int b, int c, int d, int e, int f, int g) {\n    if (a < 0 || a > 15 || b < 0 || b > 15 ||\n        c < 0 || c > 200 || d < 0 || d > 200 ||\n        e < 0 || e > 200 || f < 0 || f > 200 ||\n        g < 100 || g > 20000) throw new IllegalArgumentException();\n    return ((long)(g - 100) << 40) | ((long)f << 32)\n         | ((long)e << 24) | ((long)d << 16) | ((long)c << 8)\n         | ((long)b << 4) | a;\n}\nstatic int lastTag(long packed) { return (int)(packed >>> 40) + 100; }\n// Arrays.sort(packedGroups); 相邻相等的编码仅保留一个。\n```\n\n关联面经：拼多多 R018。",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R018"
      ],
      "keywords": [
        "LX001",
        "算法与数据结构",
        "拼多多",
        "R018"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX002",
      "number": "LX002",
      "question": "SettableFuture 适合什么场景？",
      "answer": "**直接回答：**\nSettableFuture 可以理解成一个“结果先空着、以后由回调来填写”的盒子。请求成功时调用 set 填结果，失败时用 setException 填异常，调用方按 Future 的方式等待或监听。它本身不负责开线程，也不会因为 Future 被取消，就保证底层网络请求停止。\n\n**深入补充（选读）：**\n它是 Guava 中可以由外部完成的 ListenableFuture。把回调式 RPC 接口包装成 Future 时，成功回调调用 set，失败回调调用 setException，也可用 setFuture 关联另一个结果。完成、异常、取消竞争同一个终态，后续完成不会覆盖前一个结果。它不会自动创建线程，也不等于线程池。复杂编排可以选择 Guava 的组合工具或 JDK CompletableFuture。\n\n**追问 / 易错点：** 为回调丢失设置超时；取消 Future 后是否停止网络请求，要看底层客户端。避免在回调线程中执行耗时监听器。\n\n技术依据：[官方文档](https://guava.dev/releases/33.4.5-jre/api/docs/com/google/common/util/concurrent/SettableFuture.html)。\n\n关联面经：拼多多 R018。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R018"
      ],
      "keywords": [
        "LX002",
        "多线程 / 并发",
        "拼多多",
        "R018"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX003",
      "number": "LX003",
      "question": "ES 写成功后为什么搜索不到？",
      "answer": "**直接回答：**\nES 的“写入成功”和“能被搜索到”不是同一件事：写进去的数据还要经过 refresh，才会对搜索可见。需要写完马上搜索时，可用 refresh=wait_for 等待可见。不要每次都强制 refresh=true，它会增加刷新和合并开销；按 ID 的 GET 与普通 search 也要分开看。\n\n**深入补充（选读）：**\n写入确认与搜索可见是两个时点。搜索依赖 refresh 后可见的搜索段，因此近实时搜索可能暂时看不到刚写的数据。确实需要写后立刻搜索的流程可使用 refresh=wait_for，等待变更对搜索可见；refresh=true 会强制刷新，频繁使用增加小段和合并成本。按 ID 的实时 GET 与 search 的可见性也不同。\n\n**追问 / 易错点：** 不能把 refresh 当 fsync 或跨 MySQL、ES 的强一致事务。\n\n技术依据：[官方文档](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/refresh-parameter)。\n\n关联面经：拼多多 R018。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R018"
      ],
      "keywords": [
        "LX003",
        "场景题 / 故障排查",
        "拼多多",
        "R018"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX004",
      "number": "LX004",
      "question": "线程池中的某个线程会一直被认定为“核心线程”吗？",
      "answer": "**直接回答：**\n不会。线程池里的线程没有一张永久的“核心员工证”。所谓核心线程数，主要影响要保留多少线程，以及空闲线程取任务时是否允许超时退出。线程总数超过核心数时，原来较早创建的线程也可能在空闲超时后退出，并不是只清理后来创建的线程。\n\n**深入补充（选读）：**\nThreadPoolExecutor 的 Worker 没有永久的核心/非核心身份标签。取任务时依据当前工作线程数与 corePoolSize、allowCoreThreadTimeOut 决定使用限时 poll 还是阻塞 take；满足退出条件时递减线程数并退出。最初作为核心创建的线程，后续也可能走超时退出路径。\n\n**追问 / 易错点：** 回收的是空闲线程，不是强杀执行中的超时任务。开启核心线程超时需正的 keepAliveTime。\n\n技术依据：[官方文档](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/concurrent/ThreadPoolExecutor.java)。\n\n关联面经：BIGO R001。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001"
      ],
      "keywords": [
        "LX004",
        "多线程 / 并发",
        "BIGO",
        "R001"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX005",
      "number": "LX005",
      "question": "20 核心、2000 最大、2 万队列，流量到 8000 QPS 怎么调？",
      "answer": "**直接回答：**\n先别急着把最大线程数调大：队列能放两万条，任务会先在队列里等，未必很快触发扩到两千线程。先测单任务耗时、排队时间、CPU 和下游承受力，再一起调整核心数、队列容量、最大数和拒绝策略。8000 QPS、每次占线程 50ms，平均约需 400 个在途处理，这是估算起点，不是最终配置。\n\n**深入补充（选读）：**\n先看任务耗时、CPU 时间、队列等待和下游容量。这个队列未满时通常只有核心规模的线程工作，2000 的最大值不会提前生效；大队列可能先把请求拖超时。若每任务平均占线程 50ms，8000/s 对应约 400 个平均在途任务，这是容量估算，不是直接设 400 个线程的结论。用压测确定合理核心数和有界队列，并限制接入、隔离慢依赖、扩容实例。\n\n**追问 / 易错点：** 队列预算可按可接受排队时间估算；不能仅靠把最大线程数调到 8000。\n\n技术依据：[官方文档](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html)。\n\n关联面经：陌陌 R013。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R013"
      ],
      "keywords": [
        "LX005",
        "场景题 / 故障排查",
        "陌陌",
        "R013"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX006",
      "number": "LX006",
      "question": "MESI、内存屏障和 volatile 是同一个层面的概念吗？",
      "answer": "**直接回答：**\n不是一回事。MESI 是硬件管理缓存一致性的协议；内存屏障是限制某些读写重排、配合可见性的底层手段；volatile 是 Java 提供的语言规则。面试先说 volatile 保证相关读写的可见性和顺序，再讲底层可能怎样实现，不要背成“每次绕过缓存直接读内存”。\n\n**深入补充（选读）：**\nMESI 类协议处理缓存行的一致性，JMM 定义 Java 程序可依赖的可见性与有序性；两者层次不同。volatile 写与后续读同一变量建立 happens-before，编译器和运行时按目标架构选择相应屏障或指令。缓存一致并不等于复合操作原子，volatile int 的 i++ 仍可能丢更新。\n\n**追问 / 易错点：** 不要把 volatile 解释成每次直接读写主内存；可用锁、原子类或合适的数据结构保护复合不变量。\n\n关联面经：BIGO R001。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001"
      ],
      "keywords": [
        "LX006",
        "多线程 / 并发",
        "BIGO",
        "R001"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX007",
      "number": "LX007",
      "question": "两个进程中的地址数字相同，是否代表同一个对象？",
      "answer": "**直接回答：**\n两个进程里相同的地址数字，通常不代表同一个对象。进程看到的是各自的虚拟地址，要经过各自的页表才能找到实际物理内存；只有显式共享映射等情况才可能指向同一块物理页。另外，Java 默认 toString 后面的十六进制串通常是哈希值，不是可靠的对象地址。\n\n**深入补充（选读）：**\n不一定。普通进程看到的是各自虚拟地址空间，同一个虚拟地址可经不同页表映射到不同物理页。共享内存则可能把不同进程中的地址映射到相同物理页。页表、TLB 与缺页处理共同完成地址转换和按需映射。\n\n**追问 / 易错点：** Java 默认 Object.toString() 中的十六进制值通常与 hashCode 有关，不能直接当作可靠的内存地址。\n\n关联面经：BIGO R001。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001"
      ],
      "keywords": [
        "LX007",
        "操作系统 / Linux",
        "BIGO",
        "R001"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX008",
      "number": "LX008",
      "question": "RR 事务先查不到一行，另一个事务插入后，为什么自己 UPDATE 再查却能看到？",
      "answer": "**直接回答：**\n关键在于：普通查询看快照，UPDATE 找当前可更新的数据，而且事务能看到自己的修改。因此 A 先查不到、B 插入并提交后，A 的 UPDATE 可能更新到那条新记录，随后 A 又能查到自己更新后的结果。这不等于 RR 的所有读都改成了实时读，而是混用了不同读法。\n\n**深入补充（选读）：**\n示例：A 在 RR 下普通 SELECT 建立快照；B 插入并提交一行；A 同样普通 SELECT 通常仍看不到 B 的新行。但 A 的 UPDATE 属于当前读，可能找到并更新 B 已提交的行；A 能看见自己的更新，因此随后 SELECT 可能看见该行。不要把快照读与当前读混在一起推导“任何读都固定不变”。\n\n**追问 / 易错点：** 若一开始就使用合适索引范围的锁定读，临键锁可阻止相关插入。例子要说明 B 已提交以及 A 使用哪种读。\n\n技术依据：[官方文档](https://dev.mysql.com/doc/refman/8.4/en/innodb-consistent-read.html)。\n\n关联面经：BIGO R001、得物 R016。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001",
        "R016"
      ],
      "keywords": [
        "LX008",
        "MySQL",
        "BIGO",
        "得物",
        "R001",
        "R016"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX009",
      "number": "LX009",
      "question": "PDF 分片放 Redis，如何发现缺片并恢复？",
      "answer": "**直接回答：**\n先把“文件是否完整”设计清楚：记录文档版本、总片数、每片序号和校验值，全部到齐并验证后再标记可用。缺哪片就从可靠来源补哪片，不应拿残缺文件当成功结果。大文件通常放对象存储，Redis 用来加速；把所有分片塞进一个 Hash 也可能变成 big key。\n\n**深入补充（选读）：**\n先说明用途：完整原文件通常放对象存储，Redis 只缓存短期热点或解析结果。若确需分片，维护 documentId、版本、总片数、片序、长度、校验值与完成标记；所有片准备好后才发布当前版本。读取时验证版本、片数和校验，缺失则回源重建，不能把残缺文件返回用户。\n\n**追问 / 易错点：** 一个大 Hash 仍可能是大 key；多个 key 要处理部分写入与 TTL 不一致。片大小和并发读取数通过压测确定。\n\n关联面经：BIGO R001。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001"
      ],
      "keywords": [
        "LX009",
        "Redis",
        "BIGO",
        "R001"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX010",
      "number": "LX010",
      "question": "RAG 切片切断语义，跨片段问题怎样补全？",
      "answer": "**直接回答：**\n切片太短会把一句话、一个表格或一段规则拆散。可以按标题和段落切，保留适量重叠，并记录所属文档、章节和相邻片段；检索到小片后，再补相关父段或邻近片。目标是“找到得准、给模型的上下文完整”，不是一味把每个片段加长。\n\n**深入补充（选读）：**\n解析时保留章节、标题、段落、表格和代码块边界，再按长度切分并记录 documentId、sectionId、chunkIndex、parentId。检索用较小子块，命中后获取父段或相邻窗口；跨章节问题用查询拆分、多路检索，再去重和重排。每个扩展片段仍须检查权限。\n\n**追问 / 易错点：** 扩大上下文会增加噪声和成本，用固定评测集比较召回覆盖与答案忠实度。\n\n关联面经：BIGO R001、阿里 R011、去哪儿 R019。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001",
        "R011",
        "R019",
        "NI005"
      ],
      "keywords": [
        "LX010",
        "项目 / 实习拷打",
        "BIGO",
        "阿里",
        "去哪儿",
        "R001",
        "R011",
        "R019",
        "携程"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX011",
      "number": "LX011",
      "question": "保留最近五轮对话，再压缩历史，为什么能省 token？",
      "answer": "**直接回答：**\n“最近五轮加摘要”是一种压缩办法，不是固定标准。最近对话保留细节，较早内容提炼成事实、决定和未完成事项，再按上下文长度决定何时更新摘要。是否省钱，要同时算少传的历史内容和生成摘要的成本；短对话不一定值得先总结。\n\n**深入补充（选读）：**\n五轮只是可调参数，需根据任务完成率、关键事实保留率、延迟和 token 账单评测。滚动摘要保存稳定事实和未完成任务，保留最近对话原文；到阈值再增量压缩，避免每轮重写全部历史。收益是后续多轮少传旧上下文减去生成摘要的额外开销，短对话未必划算。\n\n**追问 / 易错点：** 订单号、金额、用户授权等关键状态应结构化保存；摘要必须可追溯，不能升级成高权限指令。\n\n关联面经：BIGO R001、腾讯 R020。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001",
        "R020"
      ],
      "keywords": [
        "LX011",
        "项目 / 实习拷打",
        "BIGO",
        "腾讯",
        "R001",
        "R020"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX012",
      "number": "LX012",
      "question": "数据权限怎样从 roleKey 硬编码改成可配置？",
      "answer": "**直接回答：**\n把“某角色能看什么数据”从写死的 if-else，改成受控的数据权限规则。例如本人、本部门、下级部门或指定范围。后端根据已登录用户算权限，并把限制真正加到查询里；列表、详情、导出和异步任务都要执行，不能只改页面按钮或相信前端传来的部门。\n\n**深入补充（选读）：**\n把“能否访问接口”和“能读哪些行”分开。角色关联权限规则，规则描述本人、部门、部门树、指定范围等；后端根据认证身份计算可访问范围，通过受控查询构造器、Mapper 参数或拦截器统一追加约束。租户条件必须强制加入，不能依赖客户端。上线前新旧规则影子比对、越权反例测试、分批灰度，缓存键包含租户和权限版本。\n\n**追问 / 易错点：** AOP 只是入口，不自动保证所有 SQL 正确；还要覆盖导出、统计、联表、异步任务和权限变更后的失效。\n\n关联面经：金证股份 R002、阿里 R011、得物 R016。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002",
        "R011",
        "R016"
      ],
      "keywords": [
        "LX012",
        "项目 / 实习拷打",
        "金证股份",
        "阿里",
        "得物",
        "R002",
        "R011",
        "R016"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX013",
      "number": "LX013",
      "question": "部门很多，数据权限产生超长 IN，怎么优化？",
      "answer": "**直接回答：**\n部门 ID 很多时，不要总把几千个 ID 拼成一个巨大 IN。可以把用户或角色的授权范围建成关系表，再用带索引的 JOIN 或 EXISTS 过滤；部门树也可按业务维护祖先关系。先在数据库过滤和分页，不要查出全量后在 Java 中删掉无权限行。\n\n**深入补充（选读）：**\n先评估部门基数、执行计划和索引。把可访问部门或授权关系规范化成关系表，用 EXISTS/JOIN 与业务表关联，并建立 tenantId、userId、departmentId 等合适组合索引；组织树可用闭包表等结构避免每次递归展开。短期可分批查询，但必须正确合并排序、去重和分页。\n\n**追问 / 易错点：** 不能为省 SQL 把数据先全查出再在 Java 过滤，那会破坏分页且扩大泄露风险。\n\n关联面经：金证股份 R002。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002"
      ],
      "keywords": [
        "LX013",
        "MySQL",
        "金证股份",
        "R002"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX014",
      "number": "LX014",
      "question": "授权码登录怎样换取令牌？JWT 验证成功是否就能访问所有资源？",
      "answer": "**直接回答：**\n授权码是登录授权流程里的“一次性交换凭证”，通常要由后端拿它换令牌。流程中校验 state、回调地址，并按客户端类型使用 PKCE；收到 JWT 后还要检查签名、签发方、接收方和有效期。拿到令牌不代表能访问所有订单，资源归属仍要单独检查。\n\n**深入补充（选读）：**\n用户跳转认证服务并携带 state，认证后回到预注册 redirect_uri，应用后端用短期授权码换令牌；PKCE 可把授权请求和换码请求绑定。业务请求中的 JWT 要校验签名、算法白名单、发行者、受众和有效期，再做资源授权。JWT 编码可读，不应装入明文秘密。身份登录通常结合 OIDC，不能把 OAuth2 本身等同身份认证协议。\n\n**追问 / 易错点：** 签名有效不代表具有某行数据权限；注销和权限撤销需考虑令牌有效期及服务端状态。\n\n关联面经：金证股份 R002。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002"
      ],
      "keywords": [
        "LX014",
        "计算机网络",
        "金证股份",
        "R002"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX015",
      "number": "LX015",
      "question": "反射创建对象一定比 new 慢很多吗？",
      "answer": "**直接回答：**\n反射有额外处理成本，但不能背成“永远慢固定多少倍”。缓存类和方法信息、JDK 实现以及调用频率都会改变结果；整个接口可能主要慢在数据库而不是反射。需要判断影响时，用合适的基准和真实调用链测，别用一次随手计时下结论。\n\n**深入补充（选读）：**\n反射增加动态查找、访问检查、参数处理等成本，也可能妨碍优化；但不能脱离 JDK、缓存方式和调用热度说固定慢多少倍。缓存 Constructor，避免重复查找，并用 JMH 分别测冷启动和稳态。JDK 18 的 JEP 416 改用 Method Handle 重实现核心反射，所以旧版本的实现细节不能直接套用。\n\n**追问 / 易错点：** 生产选型看端到端瓶颈，反射常不是网络/数据库型接口的主要耗时。\n\n技术依据：[官方文档](https://openjdk.org/jeps/416)。\n\n关联面经：多益网络 R005。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R005"
      ],
      "keywords": [
        "LX015",
        "Java 基础",
        "多益网络",
        "R005"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX016",
      "number": "LX016",
      "question": "Set<String> 能放 Integer 吗？如何安全存异构对象？",
      "answer": "**直接回答：**\n正常泛型代码里，Set<String> 只能放 String，放 Integer 会编译报错。用原始类型或反射绕过检查，可能把错误留到以后读取时，导致 ClassCastException。确实要混放不同类型，就明确用合适的公共类型，而不是偷偷绕过类型检查。\n\n**深入补充（选读）：**\n正常泛型调用不允许把 Integer 加进 Set<String>。通过原始类型或反射可能绕过编译期检查，但会产生堆污染，读取并隐式转型时可能抛 ClassCastException。确需不同类型应使用 Set<Object>，或定义共同接口/明确的封闭类型层次，并用 instanceof 安全分支处理。\n\n**追问 / 易错点：** Set<?> 表示未知元素类型，通常不能添加任何非 null 值；它不等于可随意写入的 Set<Object>。\n\n关联面经：多益网络 R005。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R005"
      ],
      "keywords": [
        "LX016",
        "Java 基础",
        "多益网络",
        "R005"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX017",
      "number": "LX017",
      "question": "同步框架为什么用模板方法？",
      "answer": "**直接回答：**\n模板方法适合“主流程相同、部分步骤不同”的同步任务。把读取、转换、校验、写入、更新进度和失败处理固定下来，让不同业务只实现变化步骤。这样不用复制整条同步流程；但失败不能被吞掉后还推进成功进度，否则下次会漏同步。\n\n**深入补充（选读）：**\n把读取批次、转换、校验、写入、记录进度、异常处理固定成主流程，让具体同步任务只实现业务差异。模板方法适合步骤顺序稳定的场景；策略模式适合某一步算法可替换。同步还需要稳定游标、幂等键、重试记录和监控，不能把公共代码抽成父类就称为可靠框架。\n\n**追问 / 易错点：** 继承过深会难扩展；差异较多时优先组合。父流程不能吞异常后仍推进成功位点。\n\n关联面经：金证股份 R002。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002"
      ],
      "keywords": [
        "LX017",
        "Java 基础",
        "金证股份",
        "R002"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX018",
      "number": "LX018",
      "question": "WHERE、GROUP BY、HAVING 和聚合函数怎么配合？",
      "answer": "**直接回答：**\nWHERE 是“先筛每一行”，GROUP BY 是“把剩下的行分组”，HAVING 是“再筛每一组”。例如先用 WHERE 选出已支付订单，再按用户分组，最后用 HAVING COUNT(*) >= 3 找出至少三单的用户。能提前筛掉的普通行条件，通常不必等分组后再处理。\n\n**深入补充（选读）：**\nWHERE 先过滤输入行；GROUP BY 形成分组；HAVING 过滤分组结果。例如 SELECT dept_id, COUNT(*) c FROM employee WHERE active=1 GROUP BY dept_id HAVING COUNT(*)>5。SUM/AVG 通常忽略 NULL，COUNT(列) 不数 NULL，COUNT(*) 数行。仅取组内非聚合字段时应遵守 ONLY_FULL_GROUP_BY 的规则。\n\n**追问 / 易错点：** LEFT JOIN 右表条件放 WHERE 可能过滤掉空匹配行，改变外连接语义。\n\n关联面经：金证股份 R002。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002"
      ],
      "keywords": [
        "LX018",
        "MySQL",
        "金证股份",
        "R002"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX019",
      "number": "LX019",
      "question": "前端看到 500，后端如何统一返回并定位？",
      "answer": "**直接回答：**\n前端收到 500，应该给用户可理解的失败提示，并保留可反馈的请求编号；后端则记录异常栈、参数摘要和 traceId，返回统一但不泄密的错误结构。先沿日志找到根因，再修复，不是把所有异常改成 HTTP 200，也不是把整个堆栈直接展示给用户。\n\n**深入补充（选读）：**\n定义稳定错误码、可展示信息和 requestId/traceId；参数错误、业务冲突与系统故障使用恰当 HTTP 状态。Spring MVC 可用 @RestControllerAdvice 集中映射异常。定位从接口、时间和 traceId 进入日志，查看首个根因堆栈与下游耗时，再在测试环境复现。\n\n**追问 / 易错点：** 不要向前端暴露堆栈、SQL、密钥；线上不要随意断点暂停。日志记录结构化上下文并脱敏。\n\n关联面经：金证股份 R002、益普科技 R012。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R002",
        "R012"
      ],
      "keywords": [
        "LX019",
        "Spring / Spring Boot",
        "金证股份",
        "益普科技",
        "R002",
        "R012"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX020",
      "number": "LX020",
      "question": "Git 回退用 revert 还是 reset？",
      "answer": "**直接回答：**\nrevert 是“新增一次反向提交”，保留之前的历史，适合已经共享出去的提交。reset 是“把当前分支指针挪回去”，适合整理本地历史；不同模式还会影响暂存区和工作区。共享分支通常优先 revert，尤其不要不看状态就 reset --hard。\n\n**深入补充（选读）：**\nrevert 为指定提交生成反向修改的新提交，保留已共享历史，适合撤销共享分支上的改动。reset 移动分支指针，并按 soft/mixed/hard 决定是否同时重置暂存区与工作区，适合整理本地历史。两者目的不同，不能简单说其中一个“记错了”。\n\n**追问 / 易错点：** reset --hard 可能丢失未提交内容；revert 合并提交需要明确主线，之后重新合并也要理解其语义。\n\n技术依据：[官方文档](https://git-scm.com/docs/git-revert)。\n\n关联面经：益普科技 R012。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R012"
      ],
      "keywords": [
        "LX020",
        "操作系统 / Linux",
        "益普科技",
        "R012"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX021",
      "number": "LX021",
      "question": "支持提前一年和代购的订票系统，如何拦重复订单？",
      "answer": "**直接回答：**\n防重复买票要按“实际乘车人＋具体班次或场次”判断，不能只按代买人的账号。请求幂等键解决一次操作的重复提交，持久业务唯一约束解决同一乘车人重复占用有效名额。取消、重新购买和库存释放也要设计清楚；短期 Redis 标记不能覆盖一年后的业务。\n\n**深入补充（选读）：**\n先明确重复对象：一般按实际乘客与具体班次/出行日期判断，而非按下单账户。短期请求幂等键防双击，持久业务唯一约束或有效预订占位防跨请求重复；占位与订单在事务中建立。取消/超时释放要用状态机和版本校验，支付回调不得复活已失效的占位。\n\n**追问 / 易错点：** 提前一年不能只靠短 TTL Redis key；同一天不同班次、多人订单、证件变更等规则要先确认。\n\n关联面经：去哪儿 R007。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R007"
      ],
      "keywords": [
        "LX021",
        "场景题 / 故障排查",
        "去哪儿",
        "R007"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX022",
      "number": "LX022",
      "question": "RC 下按完整唯一键更新一条已存在记录，会先锁整张表吗？",
      "answer": "**直接回答：**\nRC 下通过完整唯一键更新一条存在的记录，通常锁相关索引记录，不是先把整张表排他锁住。表上可能有意向锁，它是声明要持有行级锁，不等于其他行都不能写。具体还要看执行计划、二级索引维护和唯一约束检查，不能只看 UPDATE 这一个词。\n\n**深入补充（选读）：**\n不是。InnoDB 通过索引记录加行级锁，唯一索引等值定位已有记录时，通常锁定匹配记录；二级唯一索引还涉及相应聚簇记录。表级意向锁与独占锁表不是一回事。RC 通常不为普通搜索保留间隙锁，但外键、重复键检查等有例外；无合适索引会扫描并访问更多记录，不能据此概括为总是锁表。\n\n**追问 / 易错点：** 说明索引是否完整唯一、记录是否存在、是否修改索引列，以及隔离级别；用执行计划和 data_locks 核对。\n\n技术依据：[官方文档](https://dev.mysql.com/doc/refman/8.4/en/innodb-locks-set.html)。\n\n关联面经：去哪儿 R007。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R007"
      ],
      "keywords": [
        "LX022",
        "MySQL",
        "去哪儿",
        "R007"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX023",
      "number": "LX023",
      "question": "怎样证明 Canal→Kafka→目标库的同步延迟在 500ms 内？",
      "answer": "**直接回答：**\n“同步延迟小于 500ms”必须先定义从哪里计时、到哪里结束。可以记录源库提交、Canal 读取、发送 MQ、消费和目标库可查询等时点，再用事件 ID 串起来。最后报告负载、样本量和 P95/P99 等分布；只看一条日志或平均值，证明不了整个链路。\n\n**深入补充（选读）：**\n把链路拆成源事务提交、Canal 解析/投递、Kafka 排队、消费处理、目标可读五段，按 eventId 关联时间戳。端到端指标应以源提交到目标实际可读为准；跨机计时考虑时钟偏差，另可用同一探针写入并轮询确认。报告样本量、负载、P50/P95/P99、错误率和积压恢复，不用单次耗时代表稳定承诺。\n\n**追问 / 易错点：** 增加重复、乱序、进程重启和目标写失败测试；最终一致不等于“永远 500ms 内”。\n\n关联面经：传音控股 R003。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R003"
      ],
      "keywords": [
        "LX023",
        "项目 / 实习拷打",
        "传音控股",
        "R003"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX024",
      "number": "LX024",
      "question": "入口 10000 QPS、短信平台只有 100 QPS，MQ 能解决什么、不能解决什么？",
      "answer": "**直接回答：**\n入口每秒来一万条，短信平台每秒只能发一百条，MQ 只能暂时排队，不能凭空补足差额。要按业务决定哪些必须发、哪些合并或过期丢弃，并给所有发送实例统一限速。监控最老消息等了多久；失败消息也不能立刻无限重试，把有限额度耗光。\n\n**深入补充（选读）：**\nMQ 只能暂存，若长期流入大于处理能力，积压必然增长。入口先明确可延迟时间和过期规则，消费者按全局配额限速，拉模式可以控制拉取数量/节奏；推模式限制并发和预取。拿不到令牌应暂停或有界延后，避免立即重投形成风暴。监控最老消息年龄、剩余容量、失败重试和消费时效。\n\n**追问 / 易错点：** 发送超时不代表未发送；本地幂等与短信供应商请求去重都要考虑。\n\n关联面经：阿里 R011。",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R011"
      ],
      "keywords": [
        "LX024",
        "消息队列 MQ",
        "阿里",
        "R011"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX025",
      "number": "LX025",
      "question": "买家分库的订单，卖家账单任意跳页怎么做？",
      "answer": "**直接回答：**\n按买家分库后，卖家账单会散在多个库，逐页跨库拼装很麻烦。可单独维护按卖家组织的账单读模型，通过可靠事件同步必要字段。顺序翻页用游标；要求任意跳到很深的页，则要结合时间范围、分页锚点或限制跳页深度，不能说一个游标就解决所有分页。\n\n**深入补充（选读）：**\n先定义筛选、排序和时效要求。建立按卖家查询的读模型或索引表，记录查询所需字段和稳定排序键，通过 Outbox/CDC 异步维护并监控延迟。普通游标适合顺序翻页，不能直接高效跳到任意深页；可限制时间范围/最大深度，缓存页锚点，或异步生成账单。回源时按分片批量查，避免每条订单一次 RPC。\n\n**追问 / 易错点：** 读模型不必复制全部字段；双写失败靠可靠事件、幂等更新、补偿和对账恢复。强一致账单需要额外设计。\n\n关联面经：阿里 R011。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R011"
      ],
      "keywords": [
        "LX025",
        "场景题 / 故障排查",
        "阿里",
        "R011"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX026",
      "number": "LX026",
      "question": "RAG 的 topK 为什么是 6 或 8，越大越好吗？",
      "answer": "**直接回答：**\ntopK 就是先取多少条候选材料，越大不一定越好：少了可能漏证据，多了可能塞进噪声、拖慢响应。固定文档、模型和测试题，试不同 K，比较能否找全证据、答案是否正确以及耗时和成本，再配合重排和去重。6 或 8 都应是测试结果，不是背下来的标准值。\n\n**深入补充（选读）：**\n不能凭经验写死。固定文档、模型、提示词和评测集，仅改变 topK，比较证据召回率、答案正确性、忠实度、引用准确性、延迟和成本。召回不足可以扩查询、混合检索或改切块；候选多后用去重和重排控制最终上下文。证据不存在的题单独测拒答能力。\n\n**追问 / 易错点：** 相似度高不代表可信，权限不能当成可权衡的排名分数；无权限材料应先排除。\n\n关联面经：阿里 R011。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R011",
        "NI005"
      ],
      "keywords": [
        "LX026",
        "项目 / 实习拷打",
        "阿里",
        "R011",
        "携程"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX027",
      "number": "LX027",
      "question": "AI 写的代码能跑就直接合并吗？输出一直不对怎么办？",
      "answer": "**直接回答：**\n不能“能运行就合并”。先明确验收条件，再看代码差异是否碰了不该改的模块，以及权限、事务、并发、异常和资源释放是否正确，最后跑测试。反复生成错误时，找一个最小失败案例，把真正缺失的上下文补上，而不是一直重复“再改一下”。\n\n**深入补充（选读）：**\n先把需求变成验收条件，给出相关模块、接口契约、边界条件和禁止改动范围；一次处理可验证的小任务。生成后检查差异、依赖、权限、异常、并发、事务与资源释放，再跑具有业务意义的测试。反复出错时定位最小失败案例，补充缺失上下文或自己实现关键部分，而非重复一句“再改”。\n\n**追问 / 易错点：** 回答项目拷打时给自己的实际案例：原错误、你如何发现、如何验证修复；没有做过的不要编。\n\n关联面经：传音控股 R003、去哪儿 R007、阿里 R011、益普科技 R012、维他奶 R014。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R003",
        "R007",
        "R011",
        "R012",
        "R014",
        "NI005",
        "NI006",
        "NI007",
        "NI008",
        "NI012",
        "NI013",
        "NI014",
        "NI016",
        "NI018"
      ],
      "keywords": [
        "LX027",
        "项目 / 实习拷打",
        "传音控股",
        "去哪儿",
        "阿里",
        "益普科技",
        "维他奶",
        "R003",
        "R007",
        "R011",
        "R012",
        "R014",
        "携程",
        "美团",
        "得物",
        "腾讯",
        "滴滴",
        "实在智能"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX028",
      "number": "LX028",
      "question": "@Tool 允许模型查库，怎样防止越权？",
      "answer": "**直接回答：**\n模型只能提出“想调用什么工具”，不能决定自己有什么权限。工具入口必须用服务端可信的登录身份，检查租户、资源归属和参数，再执行受控查询。最好暴露“查我的订单”等业务操作，不直接给任意 SQL；模型传来的 userId 或 tenantId 不能直接当授权依据。\n\n**深入补充（选读）：**\n工具暴露受控业务操作而非任意 SQL。身份、租户和授权范围由服务端可信上下文注入，不能让模型自行声明；执行前校验参数和资源归属，查询强制加入权限条件，结果再脱敏并限制行数。文档内容、用户输入和工具返回都是数据，不能改变后端权限。\n\n**追问 / 易错点：** 敏感操作使用显式确认与幂等机制；提示词说“不要越权”不构成访问控制。\n\n技术依据：[官方文档](https://docs.spring.io/spring-ai/reference/api/tools.html)。\n\n关联面经：广东元海 R009、阿里 R011、去哪儿 R019。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R009",
        "R011",
        "R019"
      ],
      "keywords": [
        "LX028",
        "项目 / 实习拷打",
        "广东元海",
        "阿里",
        "去哪儿",
        "R009",
        "R011",
        "R019"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX030",
      "number": "LX030",
      "question": "长期记忆如何避免把错误信息永久记住？",
      "answer": "**直接回答：**\n长期记忆不是把所有聊天都存成事实。每条记忆要分清是用户明确说的、已验证事实，还是暂时猜测，并记录来源、时间、归属和必要的有效期。读的时候检查权限、过期和冲突；用户更正或删除后要同步生效，不能让错误摘要反复覆盖新事实。\n\n**深入补充（选读）：**\n只将有跨会话价值且有明确来源的事实作为候选，记录用户、类型、来源、时间和有效期。对新旧冲突标记版本或待确认状态；高风险信息不凭模型猜测入库。检索时先按用户和资源权限过滤，再按相关性和时效选取；允许用户查看、更正和删除。\n\n**追问 / 易错点：** 任务临时参数与稳定偏好分开，模型生成内容不能自动当作用户确认事实。\n\n关联面经：去哪儿 R019。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R019",
        "NI009",
        "NI023"
      ],
      "keywords": [
        "LX030",
        "项目 / 实习拷打",
        "去哪儿",
        "R019",
        "拼多多",
        "未具名公司"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX031",
      "number": "LX031",
      "question": "多模型网关如何做路由和故障隔离？",
      "answer": "**直接回答：**\n多模型网关不是简单随机选一个模型。先按工具、图片、上下文等能力筛选，再结合延迟、预算和可用额度路由；不同供应商分别做限流、超时和熔断。失败后可在兼容的模型间降级，但要控制重试总预算；已经输出半段内容时，不要无提示地拼接另一模型的回答。\n\n**深入补充（选读）：**\n按租户预算、模型能力、上下文长度、延迟和可用性路由；为供应商配置独立并发配额、连接池、超时和熔断。有限重试仅用于可恢复故障，结合退避和剩余请求预算。降级需检查结构化输出和工具调用能力是否兼容，流式输出开始后不能无提示拼接另一模型的结果。\n\n**追问 / 易错点：** 记录首 token/总延迟、成功率、token 成本和模型版本，效果不能只看响应快慢。\n\n关联面经：去哪儿 R019。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R019"
      ],
      "keywords": [
        "LX031",
        "场景题 / 故障排查",
        "去哪儿",
        "R019"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX032",
      "number": "LX032",
      "question": "模型需要返回固定 JSON，服务端怎么兜底？",
      "answer": "**直接回答：**\n先给明确的 JSON Schema，再用支持的结构化输出能力，收到结果后仍由程序解析和校验。格式正确不等于业务正确，还要检查必填值、类型、数量、权限和取值范围。遇到截断或不合法结果，可有限重试或返回失败，不要靠几个正则“修好”后直接执行重要操作。\n\n**深入补充（选读）：**\n优先使用支持的结构化输出能力，服务端仍做 JSON 解析、Schema 和业务规则校验。分别处理截断、拒答、错误类型、缺字段和越界值；仅对可修复格式错误做有限重试，失败进入明确的错误或人工流程。解析成功后仍不直接执行付款等敏感动作。\n\n**追问 / 易错点：** 正则不能可靠修复任意嵌套 JSON；格式正确也不代表金额、权限和状态合法。\n\n关联面经：去哪儿 R019。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R019"
      ],
      "keywords": [
        "LX032",
        "项目 / 实习拷打",
        "去哪儿",
        "R019"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX033",
      "number": "LX033",
      "question": "OpenFeign 从接口到网络请求经历什么？",
      "answer": "**直接回答：**\nOpenFeign 把远程 HTTP 调用包装成接口方法。你调用接口时，代理读取注解，拼地址、参数和请求体，经过拦截器发请求，再把响应解码成返回对象。它让写调用代码更方便，但网络超时、鉴权、服务发现和重试仍然要配置，不会变成本地调用一样可靠。\n\n**深入补充（选读）：**\n启用客户端扫描后，为声明式接口创建代理；调用时解析方法元数据，把路径、参数、请求体交给编码器并应用拦截器，按配置选取目标实例和 HTTP 客户端，发出请求后解码响应或映射异常。服务发现和负载均衡是否参与取决于是否启用了相应组件及 URL 配置。\n\n**追问 / 易错点：** 配置连接/读超时、连接池和可观测性；拦截器不能误把别的租户凭据跨请求复用。\n\n关联面经：广东元海 R009。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R009"
      ],
      "keywords": [
        "LX033",
        "Spring / Spring Boot",
        "广东元海",
        "R009"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX034",
      "number": "LX034",
      "question": "有两个 LIKE 就一定不走索引吗？",
      "answer": "**直接回答：**\n两个 LIKE 不代表索引一定失效，关键看怎么匹配。例如 'abc%' 有固定前缀，和 '%abc%' 的定位能力不同；还要看两个条件用 AND 还是 OR、索引列顺序和数据分布。必须拿具体 SQL 看执行计划，不能只数 LIKE 的个数就判断。\n\n**深入补充（选读）：**\n不能按 LIKE 数量判断。对于常见 B+ 树索引，前缀 LIKE 通常有机会形成范围，前置通配符通常难以直接定位范围；还要看 AND/OR、字段、联合索引顺序、字符集和选择性。即使不能范围定位，也可能扫描覆盖索引，因此“用了索引”和“高效定位”应区分。\n\n**追问 / 易错点：** 原帖没给完整 SQL 时不要臆造唯一原因；索要建表语句、SQL 和执行计划。\n\n关联面经：陌陌 R013。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R013"
      ],
      "keywords": [
        "LX034",
        "MySQL",
        "陌陌",
        "R013"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX035",
      "number": "LX035",
      "question": "Redisson 看门狗什么时候续期？锁到期后还能恢复原来的互斥吗？",
      "answer": "**直接回答：**\n看门狗正常是在锁到期前续期，不是锁已经丢了再“补回来”。续期要确认仍是自己的锁；网络故障或长暂停导致续不上，旧任务可能还在跑，因此数据库版本或唯一约束仍要兜底。是否自动续期也与 Redisson 使用的加锁方式、是否显式指定租期有关。\n\n**深入补充（选读）：**\n正常续期必须在租约到期前完成。Redisson 的看门狗在适用的加锁模式下周期延长租约，进程停止或长时间不可用后租约最终失效；显式指定 leaseTime 与自动续期模式要按使用的重载区分。过期后的旧持有者不能靠续期夺回锁。\n\n**追问 / 易错点：** GC 长暂停、网络分区可能让业务继续而锁已失效；关键写入需要版本校验、唯一约束或 fencing，不能只依赖看门狗。\n\n技术依据：[官方文档](https://redisson.pro/docs/data-and-services/locks-and-synchronizers/)。\n\n关联面经：广东元海 R009、陌陌 R013、得物 R016。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R009",
        "R013",
        "R016"
      ],
      "keywords": [
        "LX035",
        "Redis",
        "广东元海",
        "陌陌",
        "得物",
        "R009",
        "R013",
        "R016"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX036",
      "number": "LX036",
      "question": "数组循环右移 k 位怎么做到常数额外空间？",
      "answer": "**直接回答：**\n数组向右旋转 k 位，可以用三次反转：先反转整个数组，再反转前 k 个，最后反转剩余部分。先处理空数组，并把 k 归一化到数组长度以内。整个过程 O(n) 时间、O(1) 额外空间，不需要反复把最后一个数搬到最前面。\n\n**举个例子：**\n[1,2,3,4,5] 右移 2 位：整体反转成 [5,4,3,2,1]，分别反转两段，得到 [4,5,1,2,3]。\n\n**深入补充（选读）：**\n对非空数组先把 k 对 n 归一化；反转全数组，再反转前 k 个和余下部分。三次反转把原后 k 个元素搬到前面且恢复各自顺序，时间 O(n)，额外空间 O(1)。若 k 允许负数，可按 floorMod 定义反向移动。\n\n**追问 / 易错点：** 空数组必须先返回，避免模零；测试 k=0、k=n、k>n 和单元素。\n\n```java\nstatic void rotate(int[] a, int k) {\n    if (a == null || a.length < 2) return;\n    k = Math.floorMod(k, a.length);\n    rev(a, 0, a.length - 1);\n    rev(a, 0, k - 1);\n    rev(a, k, a.length - 1);\n}\nstatic void rev(int[] a, int l, int r) {\n    while (l < r) {\n        int v = a[l]; a[l++] = a[r]; a[r--] = v;\n    }\n}\n```\n\n关联面经：多益网络 R004。",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R004"
      ],
      "keywords": [
        "LX036",
        "算法与数据结构",
        "多益网络",
        "R004"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX037",
      "number": "LX037",
      "question": "声明式事务和编程式事务有什么区别？什么时候用 TransactionTemplate？",
      "answer": "**直接回答：**\n声明式事务是用 @Transactional 告诉框架事务放在哪，编程式事务是用 TransactionTemplate 等在代码里明确圈出范围。前者适合清楚的方法边界，后者适合只让一小段代码进事务。两者都要正确选择事务管理器、处理异常，也都不能自动包住任意远程调用。\n\n**深入补充（选读）：**\n@Transactional 常通过代理建立事务边界，要关注自调用、传播、回滚规则和数据源。TransactionTemplate 把事务边界显式放在回调内，适合避免把长 RPC 包进数据库事务，但仍要正确传播异常或标记 rollbackOnly。两者底层都依赖事务管理器，不会自动解决跨服务原子性。\n\n**追问 / 易错点：** 线程切换不继承原线程数据库事务；不能以“用了编程式”推断所有异常都会回滚。\n\n关联面经：XTransfer R015。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R015"
      ],
      "keywords": [
        "LX037",
        "Spring / Spring Boot",
        "XTransfer",
        "R015"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX038",
      "number": "LX038",
      "question": "Redis 淘汰后 RSS 仍很高，如何处理内存碎片？",
      "answer": "**直接回答：**\nRedis 删掉或淘汰 key 后，used_memory 可能下降，但进程 RSS 不一定马上降。因为内存分配器可能把释放的块留着复用，也可能还有碎片、客户端缓冲或写时复制开销。先对比这些指标，再判断是否泄漏；不要把“没立刻还给操作系统”直接等同“没删成功”。\n\n**深入补充（选读）：**\n先分清 used_memory、used_memory_rss、峰值、复制/AOF 缓冲和 fork 写时复制，不能只看一个比率。分配器可能保留空闲页，大小不均的对象增删也可能形成碎片。先控制大 key 与无界缓存、预留内存；在版本和分配器支持时评估主动碎片整理或内存回收，并观察 CPU 和延迟。\n\n**追问 / 易错点：** 不要因为 key 数下降就认为进程应立即归还所有内存；重启或切主需要可靠复制和容量评估。\n\n关联面经：拼多多 R018。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R018"
      ],
      "keywords": [
        "LX038",
        "Redis",
        "拼多多",
        "R018"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX039",
      "number": "LX039",
      "question": "MQ 消费者越多一定消费越快吗？",
      "answer": "**直接回答：**\n不一定。消费者加多，只有任务能拆开、分区够用、下游也扛得住时才可能更快。传统 Kafka 消费组里，同一分区同一时刻由组内一个消费者负责，加到超过分区数可能只是多出闲置实例。热点 key 或数据库锁才是瓶颈时，先解决瓶颈。\n\n**深入补充（选读）：**\n不是。Kafka 同组消费者的有效并行度受分区数限制，多余消费者可能空闲；热点分区、顺序要求、数据库锁和外部服务限额也会封顶。先定位消费耗时与积压分布，再考虑批处理、异步化、分区规划和资源隔离，扩容后观察 Rebalance 和端到端延迟。\n\n**追问 / 易错点：** 单纯增加消费实例可能放大数据库争用；不能为了速度提前提交还没完成业务的位移。\n\n关联面经：XTransfer R015。",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R015",
        "NI015"
      ],
      "keywords": [
        "LX039",
        "消息队列 MQ",
        "XTransfer",
        "R015",
        "腾讯"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX040",
      "number": "LX040",
      "question": "扫码支付从二维码到订单成功，后端如何串起来？",
      "answer": "**直接回答：**\n扫码支付先创建自己的业务订单和支付单，再生成绑定订单、金额和有效期的二维码。最终是否成功，要以后端验证过的支付通知或主动查询结果为准，不信前端一句“支付成功”。通知可能重复或晚到，所以验签、金额核对、幂等状态更新和关单对账缺一不可。\n\n**深入补充（选读）：**\n先创建待支付业务单，再向支付渠道申请支付会话/支付链接并生成二维码；二维码绑定订单且有有效期，不包含任意可篡改的金额。用户付款后，后端验签并核对商户、订单、币种和金额，以幂等状态机处理渠道通知。前端轮询或订阅服务端状态，不以扫码页面跳转当作支付成功。\n\n**追问 / 易错点：** 通知丢失要主动查单、定时对账；支付超时与关单竞争应先确认渠道最终状态，再补偿或退款。\n\n关联面经：得物 R017。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R017"
      ],
      "keywords": [
        "LX040",
        "场景题 / 故障排查",
        "得物",
        "R017"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX041",
      "number": "LX041",
      "question": "下单链路中哪些同步，哪些用 MQ？",
      "answer": "**直接回答：**\n下单时，用户必须马上得到可靠结论的部分要先做：价格与优惠校验、必要的库存预占、订单状态落地等。短信、积分发放等不影响当前承诺的后续工作可走 MQ；但积分若参与本次抵扣，就不能随便延后。同步还是异步由业务依赖决定，不是看哪个技术词更高级。\n\n**深入补充（选读）：**\n先维护用户承诺依赖的核心不变量：价格确认、优惠资格与占用、库存预占、订单创建应在可控事务或明确的业务状态机中完成。跨服务通常无法用一个本地事务包住，需要可靠事件和补偿。短信、积分到账等可异步，但积分若影响本次抵扣则属于核心链路；购物车清理一般可异步且幂等。\n\n**追问 / 易错点：** 优惠券是否同步取决于会不会影响应付金额和超发；支付是独立状态推进，不在数据库长事务里等待用户付款。\n\n关联面经：得物 R016。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R016"
      ],
      "keywords": [
        "LX041",
        "场景题 / 故障排查",
        "得物",
        "R016"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-LX042",
      "number": "LX042",
      "question": "跳表与平衡树怎么比较，最坏查找复杂度是多少？",
      "answer": "**直接回答：**\n跳表是在有序链表上加多层“快车道”，查找通常能跳过大量节点，平均复杂度 O(log n)，但随机结构有最坏情况。平衡树通过旋转等规则控制高度，能给出相应的最坏复杂度保证。选哪种要看查询、范围遍历和实现成本，不能说红黑树绝对做不了 Redis 的有序集合。\n\n**深入补充（选读）：**\n跳表利用随机层高形成多级索引，查找时从高层向右、向下，平均查找和更新 O(log n)，最坏可退化到 O(n)。平衡树能通过维护平衡提供 O(log n) 的最坏界。Redis 大型 ZSet 使用排序结构配合成员索引，以支持按分数排序、范围遍历和按成员定位；小集合可能采用紧凑编码。\n\n**追问 / 易错点：** 选择跳表不等于其任何情况都比树快；还要比较范围遍历、实现复杂度和内存常数。\n\n关联面经：BIGO R001。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写 / 延展",
      "sourceIds": [
        "R001"
      ],
      "keywords": [
        "LX042",
        "Redis",
        "BIGO",
        "R001"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md"
    },
    {
      "id": "bank-UX001",
      "number": "UX001",
      "question": "List<Integer> 的 remove(1) 删除下标还是数值？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n删除下标 1 的元素，也就是第二个元素。因为 remove 有重载：remove(int) 按位置删，remove(Object) 按值删。要删除数值 1，写 remove(Integer.valueOf(1))，让编译器选中按值删除的版本。\n\n**深入补充（选读）：**\n按位置删除返回被删元素；按值删除返回是否找到并删除。按值删除只删第一处匹配，下标越界则会报错。这里的核心是重载选择，不是 List 随机理解数字。\n\n**代码示例（本轮编写）：**\n```java\nList<Integer> list = new ArrayList<>(Arrays.asList(1, 5, 1));\nlist.remove(1);                    // [1, 1]：删掉下标 1 的 5\nlist.remove(Integer.valueOf(1));   // [1]：删掉第一个数值 1\n```\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Java 21 List API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)。",
      "sourceIds": [
        "OPT-S01"
      ],
      "keywords": [
        "UX001",
        "Java 集合",
        "remove",
        "方法重载",
        "Integer"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX002",
      "number": "UX002",
      "question": "Stream.collect(toMap) 遇到重复 key 怎么办？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n只给 key 和 value 两个转换函数时，toMap 遇到重复 key 会抛异常，不会默认替你覆盖。允许重复时，要明确合并规则：保留先来的、保留后来的、数值相加，或者改成 groupingBy 保存一组值。规则要由业务决定。\n\n**深入补充（选读）：**\n订单金额不能为了不报错就随意保留一个值；原本应唯一的数据，重复可能正是需要暴露的错误。收集后的 Map 也没有自动变成线程安全容器。\n\n**代码示例（本轮编写）：**\n```java\nMap<String, Integer> counts = Stream.of(\"apple\", \"pear\", \"apple\")\n    .collect(Collectors.toMap(s -> s, s -> 1, Integer::sum));\n// apple -> 2，pear -> 1。示例导入 java.util.* 和 java.util.stream.*。\n```\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Java 21 Collectors API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html)。",
      "sourceIds": [
        "OPT-S02"
      ],
      "keywords": [
        "UX002",
        "Java 基础",
        "Stream",
        "toMap",
        "重复键"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX003",
      "number": "UX003",
      "question": "@Configuration(proxyBeanMethods=false) 会让 @Bean 失效吗？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n不会，@Bean 仍然可以注册对象。false 关闭的是配置类中 Bean 方法之间的代理拦截：一个方法直接调用另一个 @Bean 方法时，可能只是普通 Java 调用，重新创建对象。需要依赖其他 Bean 时，用方法参数注入更清楚。\n\n**举个例子：**\n把 @Bean Service service() { return new Service(repository()); } 改为 @Bean Service service(Repository repository) { return new Service(repository); }，由容器注入依赖。\n\n**深入补充（选读）：**\n开启代理时，容器管理的配置实例可拦截相应方法调用，并按 Bean 的作用域处理；关闭后不要靠直接调用共享单例。false 并不是把所有 Bean 都变成 prototype。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Spring @Configuration 与 Bean 方法](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html)。\n\n**补充依据：** [Spring Configuration API：proxyBeanMethods](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html)。",
      "sourceIds": [
        "OPT-S03",
        "OPT-S26"
      ],
      "keywords": [
        "UX003",
        "Spring / Spring Boot",
        "Configuration",
        "Bean",
        "代理"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX004",
      "number": "UX004",
      "question": "thenApply 和 thenApplyAsync 到底在哪个线程执行？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\nthenApply 不保证切换线程，可能由完成前一步的线程执行；前一步已完成时，也可能在注册回调的线程执行。thenApplyAsync 把回调交给执行器，未指定时通常用公共 ForkJoinPool。需要控制执行位置，就传入明确的 Executor。\n\n**举个例子：**\n轻量的结果字段转换可用 thenApply；后续需要访问慢接口时，考虑 thenApplyAsync(value -> callRemote(value), ioExecutor)。\n\n**深入补充（选读）：**\nAsync 不等于每次新建线程，也不保证与前一步一定是不同的物理线程。慢 HTTP 或 JDBC 调用应放到受控执行器，避免占住公共计算池；线程上下文和事务不会因为换了方法名就自动传播。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Java 21 CompletableFuture API](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html)。",
      "sourceIds": [
        "OPT-S04"
      ],
      "keywords": [
        "UX004",
        "多线程 / 并发",
        "CompletableFuture",
        "线程池",
        "异步"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX005",
      "number": "UX005",
      "question": "MySQL 中 DELETE、TRUNCATE、DROP 有什么区别？能回滚吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\nDELETE 删除数据行，可以带 WHERE；TRUNCATE 清空整张表但保留可用的表结构；DROP 连表结构一起删除。在 MySQL 8.4 的常见 InnoDB 场景，显式事务内尚未提交的 DELETE 可回滚，TRUNCATE 和普通 DROP TABLE 会隐式提交，不能当普通行修改回滚。\n\n**举个例子：**\n只删除一批过期记录，应按条件小批 DELETE；TRUNCATE 没有 WHERE，不适合只清一部分数据。\n\n**深入补充（选读）：**\nTRUNCATE 还会重置自增计数，外键引用等可能阻止执行。已自动提交的 DELETE 也不是随时能 ROLLBACK。不要把 MySQL 的 DDL 语义套到所有数据库；实际删除前先确认对象、备份和影响范围。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [MySQL 8.4 TRUNCATE TABLE](https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html)。\n\n**补充依据：** [MySQL 8.4：隐式提交语句](https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html)。\n\n**补充依据：** [MySQL 8.4：DELETE](https://dev.mysql.com/doc/refman/8.4/en/delete.html)。",
      "sourceIds": [
        "OPT-S05",
        "OPT-S24",
        "OPT-S25"
      ],
      "keywords": [
        "UX005",
        "MySQL",
        "DELETE",
        "TRUNCATE",
        "DROP",
        "隐式提交"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX006",
      "number": "UX006",
      "question": "软删除后允许重建，唯一索引为什么可能再次冲突？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n只建 UNIQUE(业务编号, deleted)，第一次删除会留下“编号 A、deleted=1”。重建 A 后再删除，又要变成同一个组合，于是冲突。要保证“未删除记录唯一、历史记录可多条”，就得把这两种状态分开设计。\n\n**举个例子：**\n有效 A → 唯一键 A；历史 A → 唯一键 NULL。再次创建 A 仍只能有一条有效记录，但允许多条删除历史。\n\n**深入补充（选读）：**\n一种 MySQL 设计是：有效记录的派生键取业务编号，已删除记录的派生键取 NULL，再对租户和派生键建唯一索引。MySQL 的可空唯一索引允许多个 NULL。前提是有效业务编号和租户不能为 NULL，并明确大小写与排序规则；也可采用独立历史表等设计。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [MySQL 8.4 CREATE INDEX：唯一键与 NULL](https://dev.mysql.com/doc/refman/8.4/en/create-index.html)。",
      "sourceIds": [
        "OPT-S06"
      ],
      "keywords": [
        "UX006",
        "MySQL",
        "软删除",
        "唯一索引",
        "NULL"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX007",
      "number": "UX007",
      "question": "Redis 的 key 设置过期后，为什么更新值又变成永不过期？",
      "category": "Redis",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n普通 SET 成功覆盖值时，原来的过期时间会被清除。更新时仍要过期，就在 SET 中同时指定 EX/PX；需要保留原来的到期时刻，可用 Redis 6.0 起提供的 KEEPTTL。不要默认“第一次设过 TTL，以后都会自动保留”。\n\n**深入补充（选读）：**\nKEEPTTL 是保留已有过期时间，不是重新开始计时；key 已不存在或本来就没有 TTL 时，它不会替你生成过期时间。关键写入最好把赋值和过期作为一个原子命令执行。\n\n**代码示例（本轮编写）：**\n```text\nSET cache:demo v1 EX 60\nSET cache:demo v2 KEEPTTL\nTTL cache:demo\n# 第二条保留原到期时刻；换成 SET cache:demo v2 则会清除 TTL。\n```\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Redis SET：过期设置与 KEEPTTL](https://redis.io/docs/latest/commands/set/)。",
      "sourceIds": [
        "OPT-S07"
      ],
      "keywords": [
        "UX007",
        "Redis",
        "TTL",
        "SET",
        "KEEPTTL"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX008",
      "number": "UX008",
      "question": "SSE 的一次网络读取，为什么不一定是一条完整消息？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n网络把数据分批送来，分批边界不等于 SSE 事件边界：一批可能只有半条，也可能包含好几条。SSE 按文本行解析，用空行结束一个事件。自己处理流时，要先正确解码，再缓存未完成的内容，按协议拼出完整事件后处理。\n\n**举个例子：**\n一个事件是 data: {\"text\":\"你好\"} 后接空行；网络可能先送到 data: {\"te，下一批才送剩下的部分。\n\n**深入补充（选读）：**\nSSE 使用 UTF-8，连一个汉字的字节都可能分散在不同读取批次。标准解析还要处理 CR/LF 行结束、多行 data、注释和 id。不要把每次 reader.read() 得到的字符串直接当完整 JSON；可优先使用符合协议的事件流解析器。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [WHATWG Server-sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)。",
      "sourceIds": [
        "OPT-S08"
      ],
      "keywords": [
        "UX008",
        "计算机网络",
        "SSE",
        "流式解析",
        "UTF-8"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX009",
      "number": "UX009",
      "question": "后端明明在流式输出，为什么浏览器最后才一次显示？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n沿链路找“谁把数据攒住了”：模型是否真的流式返回、服务端是否及时发送、代理是否缓冲、前端是否在等完整响应。先直接连后端测试，再经过网关对比，能快速判断是不是代理层导致延迟。不要只在前端加打字动画伪装流式。\n\n**举个例子：**\n同一请求直连后端逐段到达，经过 Nginx 后集中到达，优先检查代理缓冲，而不是先怀疑模型生成速度。\n\n**深入补充（选读）：**\n在 Nginx 对应的流式接口位置可关闭 proxy_buffering；上游也可发送 X-Accel-Buffering: no，但须确认没有被代理配置忽略。前端不能等 response.text() 完成后才展示。还要设置合适的空闲超时与心跳；Nginx 的 proxy_read_timeout 约束相邻读取的间隔，不是整段生成总时长。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [Nginx HTTP Proxy：缓冲与读取超时](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)；[WHATWG Server-sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)。",
      "sourceIds": [
        "OPT-S09",
        "OPT-S08"
      ],
      "keywords": [
        "UX009",
        "场景题 / 故障排查",
        "SSE",
        "Nginx",
        "proxy_buffering"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX010",
      "number": "UX010",
      "question": "Docker 镜像、容器、数据卷分别是什么？删容器会丢数据吗？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n镜像是创建运行环境的模板，容器是基于镜像启动的隔离进程及其运行环境，数据卷用来保存需要独立于容器生命周期的数据。容器被删除后，它的可写层数据会丢失；正确挂载且未被删除的数据卷可以继续保留。停止容器和删除容器也不是同一个操作。\n\n**举个例子：**\n应用容器可以删掉重建；MySQL 的数据放在明确管理的数据卷中。重建时挂回同一个卷，而不是无意中创建一个空卷。\n\n**深入补充（选读）：**\n数据库数据目录不能只放容器可写层。更新镜像不等于自动更新数据库结构；重新创建容器时要挂回原数据卷。命名卷、匿名卷以及 --rm 等清理选项的行为有差异，删除前明确实际挂载和备份。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Docker：容器基础](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)；[Docker：Volumes](https://docs.docker.com/engine/storage/volumes/)。",
      "sourceIds": [
        "OPT-S10",
        "OPT-S11",
        "NI018"
      ],
      "keywords": [
        "UX010",
        "操作系统 / Linux",
        "Docker",
        "镜像",
        "容器",
        "Volume",
        "官方资料（补充题）",
        "实在智能"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX011",
      "number": "UX011",
      "question": "容器里访问 localhost，为什么连不到宿主机或另一个容器？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n在普通隔离网络模式下，容器里的 localhost 指这个容器自己，不是宿主机，也不是另一个容器。同一自定义网络内，可按服务名或容器网络别名访问对方；从宿主机访问容器，则通常要使用发布出来的端口。\n\n**深入补充（选读）：**\n例如 app 和 db 在同一 Compose 网络，可连 db:3306；不要把数据库地址写成 localhost:3306。-p 8080:80 表示宿主机 8080 映射到容器 80。host 网络模式等属于例外，访问宿主机的具体方式也要按运行环境配置。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Docker：Networking](https://docs.docker.com/engine/network/)。",
      "sourceIds": [
        "OPT-S12"
      ],
      "keywords": [
        "UX011",
        "操作系统 / Linux",
        "Docker",
        "localhost",
        "端口映射"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX012",
      "number": "UX012",
      "question": "修改建表 SQL 后，为什么同事的数据库不会自动跟着改？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\nGit 更新的是脚本文件，不会替你执行数据库变更。数据库已经建好后，要用新的迁移脚本明确写 ALTER、数据搬迁等步骤，并在目标库执行。使用 Flyway 时，已经应用过的版本迁移应保留，后续变更用新版本脚本追加。\n\n**举个例子：**\nV1__create_tables.sql 已执行；现在要新增备注列，就新增 V2__add_remark.sql。只改 V1，不代表同事已有的表会自动多一列。\n\n**深入补充（选读）：**\nFlyway 按版本记录已执行的迁移，并用校验和检查脚本是否被改动。直接修改旧脚本，可能让新库和老库产生不同结构或校验失败。删表、删列必须先处理依赖和数据备份；迁移成功也要验证新旧应用在发布窗口内是否兼容。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [Flyway：Versioned migrations](https://documentation.red-gate.com/flyway/flyway-concepts/migrations/versioned-migrations)。",
      "sourceIds": [
        "OPT-S13"
      ],
      "keywords": [
        "UX012",
        "场景题 / 故障排查",
        "Flyway",
        "数据库迁移",
        "Git"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX013",
      "number": "UX013",
      "question": "提示词、RAG、微调分别解决什么问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n提示词告诉模型这次该怎么回答；RAG 先从外部资料检索证据，再交给模型回答；微调通过训练调整模型参数，使它更适应某类任务或表达。它们能配合使用，不是三选一。企业资料经常变化时，通常先考虑检索和更新流程，而不是每次都重新训练。\n\n**深入补充（选读）：**\n例如固定输出格式先做好提示与结构化约束；回答公司最新制度需要可靠资料检索；稳定且可评测的特定任务再评估微调。RAG 不会自动保证答案正确，微调也不是把数据库内容永久准确地背进模型。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [Spring AI：AI Concepts](https://docs.spring.io/spring-ai/reference/concepts.html)。",
      "sourceIds": [
        "OPT-S14"
      ],
      "keywords": [
        "UX013",
        "项目 / 实习拷打",
        "RAG",
        "Prompt",
        "微调"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX014",
      "number": "UX014",
      "question": "Embedding 和 Reranker 有什么区别？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\nEmbedding 把文本变成向量，方便从大量材料中先找出可能相关的一批；Reranker 再结合问题和每条候选材料重新评分，把更相关的排前面。可以记成“先广泛找候选，再精细排顺序”。它们判断相关性，不等于证明内容真实。\n\n**深入补充（选读）：**\n查询和文档向量要使用兼容的模型与处理方式；两个模型即使输出维度一样，也不代表向量空间可混用。先召回 30 条再重排取 5 条只是说明流程，实际数量要评测。候选本身漏了关键证据，重排也无法凭空补回来。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Spring AI：Embedding Models](https://docs.spring.io/spring-ai/reference/api/embeddings.html)；[Cohere：Rerank 概念](https://docs.cohere.com/docs/rerank-overview)。",
      "sourceIds": [
        "OPT-S15",
        "OPT-S16",
        "NI007"
      ],
      "keywords": [
        "UX014",
        "项目 / 实习拷打",
        "Embedding",
        "Rerank",
        "向量检索",
        "官方资料（补充题）",
        "美团"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX015",
      "number": "UX015",
      "question": "RAG 文档或工具返回里出现“忽略规则”，Agent 应该怎么办？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n把这句话当外部数据，不当成更高权限的指令。检索文档、网页和工具返回都可能带有提示注入，试图诱导模型越权调用或泄露信息。除了在提示里区分指令和材料，还必须由服务端校验工具权限、参数和资源归属。\n\n**深入补充（选读）：**\n提示词防护不是可靠的权限边界。工具按最小权限开放，高风险动作需要明确授权和必要的人审，敏感凭证不要塞进模型上下文。测试时加入恶意文档，看系统是否仍拒绝不被授权的操作；检测注入也不代表能百分之百识别所有攻击。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [OWASP：LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)。",
      "sourceIds": [
        "OPT-S17"
      ],
      "keywords": [
        "UX015",
        "项目 / 实习拷打",
        "提示注入",
        "Agent安全",
        "RAG"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX016",
      "number": "UX016",
      "question": "模型 Tool Calling 和 MCP 是一回事吗？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n不是。Tool Calling 是让模型用结构化形式提出工具调用；MCP 是应用连接外部工具和资源的一套协议。可以先通过 MCP 发现工具，再把工具描述提供给模型，由应用执行模型提出的合法调用。没有 MCP，也可以调用本地注册的工具。\n\n**深入补充（选读）：**\n按 MCP 2025-06-18 的工具部分，客户端可用 tools/list 获取工具、用 tools/call 调用工具。模型本身不会因为输出一个工具名，就真的执行了业务；执行、授权、错误处理和结果回传仍由应用及工具服务负责。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [MCP 2025-06-18：Tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)；[Spring AI：Tool Calling](https://docs.spring.io/spring-ai/reference/api/tools.html)。",
      "sourceIds": [
        "OPT-S18",
        "OPT-S19",
        "NI008"
      ],
      "keywords": [
        "UX016",
        "项目 / 实习拷打",
        "MCP",
        "Tool Calling",
        "工具调用",
        "官方资料（补充题）",
        "美团"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX017",
      "number": "UX017",
      "question": "知识库文档删除或撤销权限后，怎样避免 AI 继续引用？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n不能只删原文件，还要让相关切片、向量索引、缓存和正在使用的上下文失效。更重要的是：检索和实际读取时按最新的可信权限判断，不能等后台清理完成才禁止访问。为每个切片保存文档 ID、版本和权限关联，才能准确找到需要处理的内容。\n\n**深入补充（选读）：**\n一种设计是先在权威元数据中标记失效或变更权限，查询立即按新状态过滤，再可靠地异步清理索引与缓存，并记录失败重试。旧会话和在途生成也需要按策略中止或重新校验；已发送给用户的内容不能通过后台删文档自动收回。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 方案与例子是基于上述机制的设计推导，不代表原题库或你的项目已经实现。\n\n**本轮查阅资料：** [Spring AI：Vector Databases](https://docs.spring.io/spring-ai/reference/api/vectordbs.html)；[OWASP：LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)。",
      "sourceIds": [
        "OPT-S20",
        "OPT-S17"
      ],
      "keywords": [
        "UX017",
        "项目 / 实习拷打",
        "知识库",
        "权限撤销",
        "向量删除"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX018",
      "number": "UX018",
      "question": "Spring AI 的 ChatClient、ChatModel、VectorStore 各负责什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "**直接回答：**\nChatModel 负责以统一接口调用对话模型；ChatClient 在其上提供更方便的请求构建和调用方式；VectorStore 负责向量化文档的存储、检索及相应管理。可以记成“模型调用层、对话使用入口、资料检索层”，别把它们都叫大模型。\n\n**深入补充（选读）：**\nRAG 中通常先检索有权限的资料，再把资料和问题交给对话调用；检索也可由配置好的 Advisor 等组件组织。VectorStore 不是替代所有业务数据库的通用容器。API 签名和自动配置随项目版本变化，学习职责与链路后，再对照实际依赖写代码。\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。\n\n**本轮查阅资料：** [Spring AI：ChatClient](https://docs.spring.io/spring-ai/reference/api/chatclient.html)；[Spring AI：Vector Databases](https://docs.spring.io/spring-ai/reference/api/vectordbs.html)。",
      "sourceIds": [
        "OPT-S21",
        "OPT-S20"
      ],
      "keywords": [
        "UX018",
        "Spring / Spring Boot",
        "Spring AI",
        "ChatClient",
        "ChatModel",
        "VectorStore"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX019",
      "number": "UX019",
      "question": "最长公共子序列怎么求？和最长公共子串有什么区别？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n子序列可以跳过字符，但不能改变顺序；子串必须连续。求最长公共子序列时，用 dp[i][j] 表示两个字符串前 i、前 j 个字符能得到的最长长度。末尾字符相同就接上去；不同就比较“少看左边一个”与“少看右边一个”的结果。\n\n**举个例子：**\n\"adce\" 和 \"ace\" 的最长公共子序列是 \"ace\"，长度 3；在第一个字符串里它并不连续，因此不叫公共子串。\n\n**深入补充（选读）：**\n转移：相等时 dp[i][j]=dp[i-1][j-1]+1；不等时取 max(dp[i-1][j],dp[i][j-1])。空前缀对应 0。下面时间 O(mn)、空间 O(mn)，返回长度而不是具体序列；按 Java char 比较，通常用于题目限定的英文字母字符串。\n\n**代码示例（本轮编写）：**\n```java\nstatic int longestCommonSubsequence(String a, String b) {\n    java.util.Objects.requireNonNull(a, \"a\");\n    java.util.Objects.requireNonNull(b, \"b\");\n    int m = a.length(), n = b.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (a.charAt(i - 1) == b.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}\n```\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 解题说明与代码为本轮独立编写，外部链接用于对应题意。\n\n**本轮查阅资料：** [LeetCode 1143：Longest Common Subsequence（题意）](https://leetcode.com/problems/longest-common-subsequence/description/)。",
      "sourceIds": [
        "OPT-S22"
      ],
      "keywords": [
        "UX019",
        "算法与数据结构",
        "动态规划",
        "LCS",
        "子序列"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-UX020",
      "number": "UX020",
      "question": "原地合并两个有序数组，为什么要从后往前写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "**直接回答：**\n第一个数组末尾有空位时，从后往前比较两个数组最大的剩余元素，把较大的放到最后一个空位。这样不会覆盖第一个数组里还没处理的数据。一直处理到第二个数组用完，第一个数组剩余部分原本就在正确位置。\n\n**举个例子：**\na=[1,4,8,0,0]，有效长度 3；b=[2,7]。从尾部依次放 8、7、4、2，结果是 [1,2,4,7,8]。\n\n**深入补充（选读）：**\n设有效长度分别为 m、n，指针 i=m-1、j=n-1、k=m+n-1。每次写完移动对应指针和 k。时间 O(m+n)，额外空间 O(1)。输入必须分别非降序，第一个数组容量至少 m+n，两个数组不共用同一个实例。\n\n**代码示例（本轮编写）：**\n```java\nstatic void mergeSorted(int[] a, int m, int[] b, int n) {\n    java.util.Objects.requireNonNull(a, \"a\");\n    java.util.Objects.requireNonNull(b, \"b\");\n    if (a == b || m < 0 || n < 0 || m > a.length ||\n        n > b.length || (long) m + n > a.length) {\n        throw new IllegalArgumentException(\"invalid arrays or lengths\");\n    }\n    int i = m - 1, j = n - 1, k = m + n - 1;\n    while (j >= 0) {\n        if (i >= 0 && a[i] > b[j]) a[k--] = a[i--];\n        else a[k--] = b[j--];\n    }\n}\n```\n\n**本轮补充说明：** 本题为补充知识题，不是新发现的公司面经。 解题说明与代码为本轮独立编写，外部链接用于对应题意。\n\n**本轮查阅资料：** [LeetCode 88：Merge Sorted Array（题意）](https://leetcode.com/problems/merge-sorted-array/description/)。",
      "sourceIds": [
        "OPT-S23"
      ],
      "keywords": [
        "UX020",
        "算法与数据结构",
        "双指针",
        "原地合并",
        "数组"
      ],
      "sourceFile": "2026-09-13_补充题.md"
    },
    {
      "id": "bank-RM001",
      "number": "RM001",
      "question": "一亿个 Redis key 中找固定前缀，能用 KEYS 吗？",
      "answer": "**直接回答：**\n线上不要用一次扫完的 KEYS。用 SCAN 配合 MATCH 分批迭代，保存返回的游标，直到游标为0。COUNT 是工作量提示，不保证每批刚好这么多条，也不保证每批有匹配结果。集群要覆盖相关主节点。\n\n**举个例子：**\n查 order: 开头的键，可从 SCAN 0 MATCH order:* COUNT 1000 开始，把返回游标放进下一次请求。扫描时限速，结果去重。\n\n**追问 / 易错点：**\nSCAN 不是快照，写入期间结果可能变化。前缀检索频繁时，应另建业务索引，不要每次全库扫描。普通扫描整体仍可能遍历全键空间。\n\n**技术依据：** [Redis SCAN](https://redis.io/docs/latest/commands/scan/)。\n\n**关联旧题：** Q07-027。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI002"
      ],
      "keywords": [
        "RM001",
        "Redis",
        "招银网络科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM002",
      "number": "RM002",
      "question": "ThreadLocalMap 的 key 为什么不是线程 ID？",
      "answer": "**直接回答：**\n因为 Map 已经放在每个线程内部了，先找当前线程，就已经知道是哪一个线程。这个线程还可能存 userId、tenantId、traceId 等多个独立变量，所以 key 要区分“哪一个 ThreadLocal”，而不是再区分线程。\n\n**举个例子：**\n把线程看成一个人的柜子，ThreadLocal 是柜子里不同抽屉的标签；线程ID只是柜子的名字。\n\n**追问 / 易错点：**\n不是所有线程共用一张 ThreadLocalMap。线程池复用时仍要在 finally 清理或恢复上下文，值也不会自动深拷贝。\n\n**技术依据：** [Java 21 ThreadLocal](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html)。\n\n**关联旧题：** Q03-020。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI011"
      ],
      "keywords": [
        "RM002",
        "多线程 / 并发",
        "BIGO"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM003",
      "number": "RM003",
      "question": "都有 ArrayBlockingQueue 了，为什么还需要 LinkedBlockingQueue？",
      "answer": "**直接回答：**\n它们是不同取舍，不是谁淘汰谁。前者是固定容量数组，节点分配少，空间更可预测，还可选择公平访问；后者按链式节点保存，也能设置容量，入队出队可采用分离协调，吞吐和内存特征不同。\n\n**举个例子：**\n内存预算严格、容量固定时先考虑数组队列；需要链式特征时也能用显式有界的 LinkedBlockingQueue。最终用实际生产消费比例压测。\n\n**追问 / 易错点：**\nLinkedBlockingQueue 不写容量时上限是 Integer.MAX_VALUE，不能当成安全的容量规划；不要背成“一个有界、另一个一定无界”。\n\n**技术依据：** [Java 21 ArrayBlockingQueue](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html)；[Java 21 LinkedBlockingQueue](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingQueue.html)。\n\n**关联旧题：** Q02-023。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI011"
      ],
      "keywords": [
        "RM003",
        "Java 集合",
        "BIGO"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM004",
      "number": "RM004",
      "question": "static 字段加 @Autowired 为什么不注入？怎么改？",
      "answer": "**直接回答：**\nSpring 常规依赖注入针对受管对象；注入后处理器会跳过标注在 static 字段或静态方法上的 @Autowired。最稳妥的改法是把调用者也交给 Spring 管理，使用实例字段和构造器注入。\n\n**举个例子：**\n不要写 static OrderService service 再等框架赋值；改成构造器接收 OrderService，然后通过这个实例调用。纯工具方法则让调用方显式传参。\n\n**追问 / 易错点：**\n可由受管实例的初始化方法给静态变量赋值，但会引入初始化顺序、多容器、测试污染等问题，只适合受控遗留适配，不是优先方案。\n\n**技术依据：** [Spring 6.2.0 注入后处理器源码](https://raw.githubusercontent.com/spring-projects/spring-framework/v6.2.0/spring-beans/src/main/java/org/springframework/beans/factory/annotation/AutowiredAnnotationBeanPostProcessor.java)。\n\n**关联旧题：** Q05-005。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "RM004",
        "Spring / Spring Boot",
        "招银网络科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM005",
      "number": "RM005",
      "question": "守护线程和普通线程有什么区别？",
      "answer": "**直接回答：**\n主要区别是会不会阻止 JVM 正常开始退出。当已启动的非守护线程都结束，JVM 可以进入关闭流程，不会为了守护线程的业务继续等下去。守护线程不是优先级更低，也不是自动负责垃圾回收。\n\n**举个例子：**\n后台统计任务可以考虑守护线程；重要文件写入、订单投递不能仅靠守护线程“应该会执行完”。要有等待退出或持久化保障。\n\n**追问 / 易错点：**\n普通平台线程的 daemon 状态要在启动前设好。Java 21 虚拟线程始终是守护线程，主线程退出前可能需要 join 等等待。\n\n**技术依据：** [Java 21 Thread](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html)。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI019"
      ],
      "keywords": [
        "RM005",
        "多线程 / 并发",
        "新蛋"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM006",
      "number": "RM006",
      "question": "CHAR 和 VARCHAR 怎么选？长度是字符数还是字节数？",
      "answer": "**直接回答：**\nCHAR 表达固定长度字符串，VARCHAR 表达可变长度字符串，并需要长度信息。声明中的长度通常按字符数理解，实际存储字节数受字符集影响。固定长度代码可考虑 CHAR；长度变化明显的名称描述通常用 VARCHAR。\n\n**举个例子：**\nVARCHAR(20) 不等于永远只占20字节；utf8mb4 下一个字符可能占多个字节。不要为了手机号固定11位，就把它当整数存储。\n\n**追问 / 易错点：**\nCHAR 的补空格和读取、比较时的尾空格规则要看类型与排序规则；不能笼统认为CHAR永远比VARCHAR快，也不能把声明字符数当索引字节限制。\n\n**技术依据：** [MySQL 8.4 CHAR与VARCHAR](https://dev.mysql.com/doc/refman/8.4/en/char.html)。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI019"
      ],
      "keywords": [
        "RM006",
        "MySQL",
        "新蛋"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM007",
      "number": "RM007",
      "question": "Disruptor 是什么？能替代 RabbitMQ 吗？",
      "answer": "**直接回答：**\nDisruptor 是同一进程内的高性能线程间事件传递库，常用环形缓冲区、序号和消费者依赖关系协调处理，并可预分配事件对象，减少分配压力。RabbitMQ 则用于跨进程消息传递及相应可靠交付，两者不是同一个层次。\n\n**举个例子：**\n同一服务内把采集事件交给多个处理步骤，可以评估 Disruptor；订单服务宕机后还要恢复投递，就不能只把事件放内存环形缓冲区。\n\n**追问 / 易错点：**\n等待策略有阻塞和忙等的取舍，不能概括成所有路径都完全无锁；慢消费者会限制生产进度，复用事件对象也不能被下游无限持有。\n\n**技术依据：** [LMAX Disruptor User Guide](https://lmax-exchange.github.io/disruptor/user-guide/index.html)。\n\n**关联旧题：** Q08-001。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI017"
      ],
      "keywords": [
        "RM007",
        "多线程 / 并发",
        "深轻科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM008",
      "number": "RM008",
      "question": "Tomcat 的 maxThreads、maxConnections、acceptCount 分别限制什么？",
      "answer": "**直接回答：**\n按Tomcat 10.1常规平台线程连接器理解：maxThreads限制请求处理线程，maxConnections限制连接器接收处理的连接数量，acceptCount关联操作系统等待接受的连接队列。连接、排队连接、正在执行业务的请求，不是同一个数。\n\n**举个例子：**\n像餐厅：服务员数量、店内已接待客人数、门口候位队列分别是不同限制。长连接即使空闲也可能占连接，但未必一直占业务线程。\n\n**追问 / 易错点：**\n配置共享Executor后，连接器的maxThreads会被忽略；HTTP/2、异步请求和其他执行器模式要另看。acceptCount不是线程池任务队列长度，也不能直接等同SYN半连接队列。\n\n**技术依据：** [Tomcat 10.1 HTTP Connector](https://tomcat.apache.org/tomcat-10.1-doc/config/http.html)。\n\n**关联旧题：** Q03-022。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI024"
      ],
      "keywords": [
        "RM008",
        "Spring / Spring Boot",
        "即时设计"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM009",
      "number": "RM009",
      "question": "MCP Session 和 Agent 对话 Session 是一回事吗？",
      "answer": "**直接回答：**\n不是。以MCP 2025-11-25为例，协议会话组织客户端和某个MCP服务端之间的相关交互；Agent对话会话保存用户消息、任务状态和记忆。它们的生命周期和标识可以不同，应用需要自己维护关联。\n\n**举个例子：**\n一次用户会话可能访问多个MCP Server，也就可能关联多个协议会话；协议连接恢复后，用户聊天记录不该因此被清空。\n\n**追问 / 易错点：**\nMCP-Session-Id不是登录凭证，更不是长期记忆数据库。2025-11-25是本题说明基线，不宣称是检索日最新规范。\n\n**技术依据：** [MCP 2025-11-25 Transports（固定版本）](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)。\n\n**关联旧题：** Q12-028。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI008"
      ],
      "keywords": [
        "RM009",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM010",
      "number": "RM010",
      "question": "MCP 有哪些传输方式？连上 MCP 就有资源访问权限吗？",
      "answer": "**直接回答：**\n以MCP 2025-11-25为基线，标准传输包括stdio和Streamable HTTP；更早还有旧式HTTP+SSE，不能把新旧机制混说。连通只表示能通信。HTTP授权验证访问凭据后，工具实现仍必须校验当前用户能否执行该操作、访问该租户和资源。\n\n**举个例子：**\n用户能调用查订单工具，不表示他能查任意订单。userId应来自可信身份上下文，不能直接相信模型给出的userId参数。\n\n**追问 / 易错点：**\n不要用会话ID代替授权，也不要把上游令牌原样透传到任意下游。写工具还需审批、幂等和审计；stdio凭据管理与HTTP的授权流不同。\n\n**技术依据：** [MCP 2025-11-25 Transports（固定版本）](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)；[MCP 2025-11-25 Authorization（固定版本）](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization)。\n\n**关联旧题：** UX016、LX028。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI008",
        "NI011"
      ],
      "keywords": [
        "RM010",
        "项目 / 实习拷打",
        "美团",
        "BIGO"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM011",
      "number": "RM011",
      "question": "本地缓存、Redis、数据库三层缓存，更新后怎样失效？",
      "answer": "**直接回答：**\n要处理的不只是Redis，还包括每个应用实例里的本地副本。一个参考方案是先提交数据库，再可靠发送失效事件；各实例删除相应本地缓存，并使Redis缓存失效。辅以TTL、数据版本和失败重试，避免漏通知后长期读旧值。\n\n**举个例子：**\nA实例修改商品后只删Redis，B实例仍可能从本地缓存返回旧价格。所以要通知B，或者让B识别版本、在可接受时间内过期。\n\n**追问 / 易错点：**\n普通Redis Pub/Sub会漏掉离线实例，不足以承诺可靠交付。严格准确的余额扣减走数据库条件更新；三层缓存不会自然形成强一致。此处是独立设计方案。\n\n**关联旧题：** Q07-019、Q12-042。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI007"
      ],
      "keywords": [
        "RM011",
        "场景题 / 故障排查",
        "美团"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM012",
      "number": "RM012",
      "question": "对话每 N 轮摘要，N 怎么确定？",
      "answer": "**直接回答：**\n轮数只能作简单触发器，因为一轮可能只有几句话，也可能有几万token。更合理的参考方案是先给系统提示、当前输入、工具返回和预期输出留预算，历史快超预算时再摘要或截断。订单号、金额、权限结论等放结构化状态，不只依赖摘要文本。\n\n**举个例子：**\n10轮短对话可能无需压缩；一次很长的日志工具返回就可能需要压缩。测摘要后关键信息召回率、任务成功率和成本，再决定阈值。\n\n**追问 / 易错点：**\n不要层层摘要后丢掉证据。保存原始记录与可检索指针，摘要中区分已确认事实、未完成任务和推测。具体阈值是实验结果，不是通用固定值。\n\n**技术依据：** [Anthropic：长任务Agent的运行框架](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)。\n\n**关联旧题：** LX011、Q12-039。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI005",
        "NI023"
      ],
      "keywords": [
        "RM012",
        "项目 / 实习拷打",
        "携程",
        "未具名公司"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM013",
      "number": "RM013",
      "question": "用了 Apache Tika，就能把所有文档正确切成 RAG 片段吗？",
      "answer": "**直接回答：**\n不能。Tika主要负责识别文件类型、提取文本与元数据，解析接口可输出XHTML事件，供上层保留结构。RAG还要处理标题、段落、表格、阅读顺序、噪声和切块。提取出文字不代表原文的关系也被完整保留。\n\n**举个例子：**\n表格里“产品—单价—生效日期”若被抽成无序文字，检索到了也可能答错。应保留表头、行关联、页码与文档版本，再按语义边界切分。\n\n**追问 / 易错点：**\n扫描件是否可识别取决于OCR等额外配置，不是Tika默认保证。用代表性文档验收缺字、跨页表格和结构完整性；本例为独立处理设计。\n\n**技术依据：** [Apache Tika 3.2 Parser interface](https://tika.apache.org/3.2.0/parser.html)。\n\n**关联旧题：** LX010。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI005"
      ],
      "keywords": [
        "RM013",
        "项目 / 实习拷打",
        "携程"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM014",
      "number": "RM014",
      "question": "RAG 知识库存在同一文档的多个版本，怎么避免混答？",
      "answer": "**直接回答：**\n每个片段至少关联稳定文档ID、版本、有效时间、权限和发布状态。普通查询默认只检索已生效版本；历史问题按指定时间检索。更新时先完成新版本解析与校验，再切换可见版本，旧片段按策略失效或保留为历史。\n\n**举个例子：**\n报销上限旧版500元、新版800元，不能只凭相似度把两段一起给模型。先判断用户问的是现在规则还是某个历史时期。\n\n**追问 / 易错点：**\n同一文件名不等于同一版本；失效要覆盖向量索引、检索缓存和已保存摘要。版本管理方案为本包推导，元数据过滤能力参考官方资料。\n\n**技术依据：** [Spring AI RAG](https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html)。\n\n**关联旧题：** UX017、Q12-037。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI008"
      ],
      "keywords": [
        "RM014",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM015",
      "number": "RM015",
      "question": "秒杀库存拆到多个 Redis 分片，怎么保证不超卖？",
      "answer": "**直接回答：**\n不能在每片都放一份完整库存再各自扣减。一个参考方案是先把总库存拆成有限配额，每片只卖自己的配额，用片内原子操作扣减。同一订单有幂等标识；跨片调拨要先冻结原配额，再确认转移，防止两边同时可售。\n\n**举个例子：**\n总库存1000件分成4份各250件。某片卖完、其他片还有货时，可换路由或受控调配，但不能直接给空片凭空补库存。\n\n**追问 / 易错点：**\n多key Lua不能跨任意槽原子执行；失败、回滚、配额回收和切换丢写仍需持久账本与对账。吞吐提升是待压测假设，不保证拆分后线性提升。\n\n**关联旧题：** Q11-009、Q07-013、Q07-023。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI005"
      ],
      "keywords": [
        "RM015",
        "场景题 / 故障排查",
        "携程"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM016",
      "number": "RM016",
      "question": "Agent Harness 和 Hooks 是什么？和模型本身有什么区别？",
      "answer": "**直接回答：**\nHarness通常指包围模型的运行框架：上下文管理、工具执行、权限、预算、状态保存、恢复和测试。它不是统一的协议名称。Hooks是框架在工具前后、会话开始结束等时机提供的扩展点，具体名字和语义依产品而异。\n\n**举个例子：**\n工具执行前校验路径和审批，执行后截断超长输出、记录结果；任务切换会话时用进度文件或检查点恢复。这些不是只靠换一个模型完成的。\n\n**追问 / 易错点：**\nHook不是天然安全边界：真正执行端仍要鉴权与隔离。面试先用你的实际调用链说明职责，不要只堆Harness、ReAct等名词。\n\n**技术依据：** [Anthropic：长任务Agent的运行框架](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)。\n\n**关联旧题：** Q12-026、Q12-033。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI007",
        "NI023"
      ],
      "keywords": [
        "RM016",
        "项目 / 实习拷打",
        "美团",
        "未具名公司"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM017",
      "number": "RM017",
      "question": "Agent 如何主动提醒或主动排障，而不是等用户发消息？",
      "answer": "**直接回答：**\n主动不是模型自己凭空醒来，而是外部事件或调度器触发任务。参考链路是：监控事件或定时器→队列→去重与权限检查→收集证据→Agent分析→按条件通知或提交审批。用户授权、打扰频率和成本上限要预先定义。\n\n**举个例子：**\n错误率连续超阈值才创建诊断任务；同一事故只建一个活动任务。只读诊断可以自动执行，重启、删数据等高风险操作必须受控。\n\n**追问 / 易错点：**\n重复事件、迟到事件、静默时段、任务失败和误报都要处理。实时通知能力来自整个系统，不来自模型训练参数。此处是参考设计，不是对某个产品现成功能的背书。\n\n**关联旧题：** Q11-021、Q11-029、Q12-038。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI007",
        "NI023"
      ],
      "keywords": [
        "RM017",
        "项目 / 实习拷打",
        "美团",
        "未具名公司"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM018",
      "number": "RM018",
      "question": "LangChain、LangGraph、自研 Agent Loop 怎么选择？",
      "answer": "**直接回答：**\n把它们看成不同抽象层。LangChain提供模型、工具和应用编排等集成；LangGraph更强调带状态的图执行、检查点和人机介入；自研Loop适合流程简单或需要强定制的情况，但要自己承担恢复、重试、状态与可观测性。\n\n**举个例子：**\n一个“检索后回答”的短链路不必先搭复杂图；需要跨进程恢复、长任务暂停审批的流程，图状态和持久检查点更值得评估。\n\n**追问 / 易错点：**\n它们可以组合使用，不是互斥产品。接口、实现与语言生态会变，回答应说明项目版本；不要把“框架能保存状态”误认为“外部副作用自动只执行一次”。\n\n**技术依据：** [LangGraph Overview](https://docs.langchain.com/oss/python/langgraph/overview)；[LangGraph Persistence](https://docs.langchain.com/oss/python/langgraph/persistence)。\n\n**关联旧题：** Q12-025。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI021",
        "NI023"
      ],
      "keywords": [
        "RM018",
        "项目 / 实习拷打",
        "阿里",
        "未具名公司"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM019",
      "number": "RM019",
      "question": "开放式 Agent 任务没有唯一标准答案，怎样评测？",
      "answer": "**直接回答：**\n没有唯一措辞，不等于没有验收标准。参考做法是按目标完成度、证据准确性、约束遵守、权限、成本和耗时分别评分。能自动校验的用测试或规则；主观质量用清晰评分量表、成对比较和人工抽检。保留失败轨迹便于定位。\n\n**举个例子：**\n“修复登录Bug”可检查复现用例是否通过、其他用例是否回归、是否改了禁止修改的文件，而不是只看解释文字流畅不流畅。\n\n**追问 / 易错点：**\nLLM裁判会有偏差，需与人工样本校准；固定测试集、模型配置和预算，不能把一次成功截图当总体成功率。此处是本包独立评估方案。\n\n**关联旧题：** Q12-034、Q12-036。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI023"
      ],
      "keywords": [
        "RM019",
        "项目 / 实习拷打",
        "未具名公司"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM020",
      "number": "RM020",
      "question": "密码用 MD5 加盐保存安全吗？忘记密码要解密吗？",
      "answer": "**直接回答：**\n密码不应保存为可恢复明文，也不该只用MD5这类快速哈希。优先采用专用、带随机盐和可调成本的密码哈希方案，如Argon2id；已有bcrypt等方案按环境评估迁移。登录时验证哈希，忘记密码走身份验证后的重置，不是把原密码解密出来。\n\n**举个例子：**\n每个账号独立随机盐，即使两个人密码相同，保存结果也应不同。盐可与哈希一起保存；可选pepper作为额外秘密分开管理。\n\n**追问 / 易错点：**\n加盐能阻止通用预计算复用，但不能把快速MD5变成高成本密码哈希。重置凭据还需短时、单次有效和防账号枚举。\n\n**技术依据：** [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)。\n\n**关联旧题：** Q11-042。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI009",
        "NI017"
      ],
      "keywords": [
        "RM020",
        "场景题 / 故障排查",
        "拼多多",
        "深轻科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM021",
      "number": "RM021",
      "question": "布隆过滤器误判是什么？为什么不能直接删除某一位？",
      "answer": "**直接回答：**\n标准布隆过滤器把一个元素映射到多个位。查到某位为0可判不存在；相关位全为1，只能说可能存在，因为不同元素可能共用位。删除一个元素就把这些位清零，可能误伤其他元素，造成错误的“不存在”。\n\n**举个例子：**\nA和B共用第5位。删除A时把第5位改0，B就可能再也查不到。可考虑重建、计数型过滤器或适合删除的其他结构，但需按实现约束选择。\n\n**追问 / 易错点：**\n误判存在不是“假阴性”。新增数据必须先保证能通过过滤器或有同步顺序保护；资金去重不能仅靠概率结构。删除部分是由共享位结构推导。\n\n**技术依据：** [Redis Bloom filter](https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/)。\n\n**关联旧题：** Q07-006。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI015"
      ],
      "keywords": [
        "RM021",
        "Redis",
        "腾讯"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM022",
      "number": "RM022",
      "question": "Kubernetes Pod 一直 Pending，怎么查？",
      "answer": "**直接回答：**\n先看Pod状态和事件，而不是盲目重启。Pending可能在等调度，也可能已调度但还没完成启动准备。检查是否已分配节点，再查requests是否超可用资源、亲和性、污点容忍、PVC绑定、镜像拉取等具体原因。\n\n**举个例子：**\nkubectl describe pod 名称 -n 命名空间，重点读Events和Node；若提示Insufficient cpu，核对节点可分配资源与各Pod的requests，不只看CPU当前利用率。\n\n**追问 / 易错点：**\n调度主要按请求资源等约束判断，不是看到机器“空闲”就一定能放下。kubectl的展示状态如ImagePullBackOff不等于Pod phase就叫这个名字。\n\n**技术依据：** [Kubernetes Pod Lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/)；[Kubernetes Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI015"
      ],
      "keywords": [
        "RM022",
        "操作系统 / Linux",
        "腾讯"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM023",
      "number": "RM023",
      "question": "不同 Kubernetes Namespace 天然互相隔离吗？",
      "answer": "**直接回答：**\nNamespace首先划分资源名称和管理范围，不自动提供完整的租户安全隔离。还需要RBAC控制API权限，NetworkPolicy配合支持它的网络插件限制流量，ResourceQuota等约束资源，并限制容器特权和宿主机访问。\n\n**举个例子：**\n两个Namespace里的同名Service可以分别存在，但只建Namespace不会自动阻止A里的Pod连接B的服务。\n\n**追问 / 易错点：**\n强不信任租户可能还需节点或集群层面的隔离。Namespace、容器进程隔离和网络防火墙不是一回事。\n\n**技术依据：** [Kubernetes Multi-tenancy](https://kubernetes.io/docs/concepts/security/multi-tenancy/)。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI015"
      ],
      "keywords": [
        "RM023",
        "操作系统 / Linux",
        "腾讯"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM024",
      "number": "RM024",
      "question": "WHERE id > 上次ID，ORDER BY create_time，这样的游标分页一定对吗？",
      "answer": "**直接回答：**\n不一定。筛选边界按id，排序却按create_time，两种顺序未必一致，可能漏行或重复。游标必须与稳定排序一致，比如按created_at、id升序，就记录两个值，筛选比这对值更靠后的行。\n\n**举个例子：**\n记录id=100创建得早，id=90创建得晚。第一批读到100后用id>100继续，就可能永远漏掉90。正确条件可写为时间更大，或时间相同且id更大。\n\n**追问 / 易错点：**\n需要配套索引并检查真实执行计划。排序字段要稳定且非空或明确空值规则；分页不是天然快照，处理期间更新排序字段仍会改变结果。此例为独立反例。\n\n**关联旧题：** Q06-027。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "RM024",
        "MySQL",
        "实在智能"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM025",
      "number": "RM025",
      "question": "并发调用十次接口，耗时不同，怎样求返回值的最大值？",
      "answer": "**直接回答：**\n先确认需要十次都成功，还是只取超时前成功结果。前者可用CompletableFuture.allOf后统一取值，或CompletionService按完成顺序收集十个结果；最大值不依赖完成顺序。线程池、整体deadline和单次客户端超时都要明确。\n\n**举个例子：**\n第10次很快返回最大值，也不能在要求“十次全部成功”的情况下立刻宣布最终结果，因为其他调用可能失败。用单线程汇总局部max就无需多人竞争同一个变量。\n\n**追问 / 易错点：**\n最大值初始化不要写0，否则全为负数会错；没有成功结果不能伪装最大值为0。Future超时不等于底层HTTP工作停止。\n\n**技术依据：** [Java 21 ExecutorCompletionService](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorCompletionService.html)。\n\n**关联旧题：** Q03-029、Q03-030、Q11-005。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI024"
      ],
      "keywords": [
        "RM025",
        "多线程 / 并发",
        "即时设计"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM026",
      "number": "RM026",
      "question": "用户提交 prompt 生成长视频，后端怎样设计任务表和流程？",
      "answer": "**直接回答：**\n不要把生成过程塞进一个长HTTP请求或数据库事务。参考方案是先鉴权和校验预算，在短事务里写任务与待发事件，返回taskId和处理中状态；后台执行器认领任务、调用生成服务，完成后保存文件位置、更新状态，客户端查询或订阅进度。\n\n**举个例子：**\n任务记录可含用户、幂等键、状态、版本、重试次数、外部jobId、结果地址和错误原因。状态按待处理→运行→成功/失败/取消推进，重复回调不能重复扣费。\n\n**追问 / 易错点：**\n同一幂等键要校验参数摘要；超时先查外部job状态，别盲目重新生成。结果访问要鉴权，取消、费用和迟到结果要有明确规则。这是独立参考设计。\n\n**关联旧题：** Q11-029、Q08-010、Q11-011。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI024"
      ],
      "keywords": [
        "RM026",
        "场景题 / 故障排查",
        "即时设计"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM027",
      "number": "RM027",
      "question": "MQ 消息有时效要求，排队过久怎么办？",
      "answer": "**直接回答：**\n消息中携带业务截止时间，发布前和消费前都校验。过期消息按业务规则丢弃、记录或进入补偿通道；重要时效流量与大批普通消息隔离，并监控最老消息年龄。Broker的TTL可以辅助清理，但不等于业务一定准时处理。\n\n**举个例子：**\n验证码有效5分钟，消费时已过期就不该照发，让用户收到无效验证码。订单自动关闭则先查当前状态，不应因为延迟就无条件关单。\n\n**追问 / 易错点：**\n发送成功、按时入队和按时完成是三个不同承诺。长期生产速度超过消费速度，MQ只能延缓，不会消灭积压；这里是参考设计。\n\n**关联旧题：** Q08-007、Q08-009、LX024。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI025"
      ],
      "keywords": [
        "RM027",
        "消息队列 MQ",
        "阿里"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM028",
      "number": "RM028",
      "question": "服务重启后，RPC 为什么还可能调用失败？",
      "answer": "**直接回答：**\n可能是客户端还缓存旧地址、连接池复用失效连接，或者服务虽然注册了但尚未就绪；正在执行的请求也可能被重启打断。结合注册中心时间线、实例版本、连接异常、readiness和trace定位是哪一层。\n\n**举个例子：**\n重启前摘流量并等待在途调用；重启后先完成依赖初始化再接流量。客户端更新地址、剔除坏连接，按整体时间预算对可重试且幂等的请求有限重试。\n\n**追问 / 易错点：**\n注册中心删除地址不会让所有客户端在同一毫秒更新。请求超时也不证明服务端没执行，需要幂等键或结果查询；本题是故障分析框架。\n\n**关联旧题：** Q11-035、Q09-025、Q05-040。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI025"
      ],
      "keywords": [
        "RM028",
        "场景题 / 故障排查",
        "阿里"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM029",
      "number": "RM029",
      "question": "历史日志怎么归档？如何避免把线上服务拖慢？",
      "answer": "**直接回答：**\n先分清检索日志和必须留存的审计记录，定义保留期、权限和删除规则。参考方案是近期日志保留在线检索，较老分区批量压缩转冷存储，保留时间段和对象位置索引；校验记录数和可读性后再清理原数据。\n\n**举个例子：**\n每天按日期封存已完成分区，限速上传并记录批次状态。归档任务失败可从批次继续，而不是每次重新扫描全历史。\n\n**追问 / 易错点：**\n归档不等于备份。需要验证恢复读取、加密与访问权限；文件轮转不能只改文件名就假设写入进程自动切换。此处不替用户决定合规保留年限。\n\n**关联旧题：** Q10-014、Q12-016。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "RM029",
        "场景题 / 故障排查",
        "招银网络科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM030",
      "number": "RM030",
      "question": "有序数组原地去重，每个不同数字只保留一次，怎么做？",
      "answer": "**直接回答：**\n用快慢指针。快指针遍历原数组，慢指针表示下一个写入位置；当前值与上一个已保留值不同，才写到慢指针位置。返回新长度，前面这段是答案，后面的旧内容不必清零。时间O(n)，额外空间O(1)。\n\n**举个例子：**\n[1,1,2,2,3]处理后前3个位置为[1,2,3]，返回3。空数组返回0。\n\n**追问 / 易错点：**\n本题假设数组已排序。如果要求每个值最多保留两次、或者数组无序，条件与复杂度要另谈；源帖只说有序数组去重，本包明确采用保留一个的版本。\n\n**Java 核心代码（本包练习）：**\n\n```java\n    static int deduplicate(int[] a) {\n        Objects.requireNonNull(a, \"array\");\n        int write = 0;\n        for (int read = 0; read < a.length; read++) {\n            if (write == 0 || a[read] != a[write - 1]) a[write++] = a[read];\n        }\n        return write;\n    }\n```\n\n完整类、节点定义及测试见资料包 code/InterviewPractice.java；单独片段需补齐相应上下文。",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI009"
      ],
      "keywords": [
        "RM030",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM031",
      "number": "RM031",
      "question": "从链表头部每 k 个节点反转，最后不足 k 个保留，怎么写？",
      "answer": "**直接回答：**\n每次先检查当前组是否有k个节点；不足就结束。有足够节点时记住下一组起点，在当前组内部反转链接，再把前一组尾接到新组头。使用哑节点统一处理头部变化。时间O(n)，额外空间O(1)。\n\n**举个例子：**\n1→2→3→4→5，k=2，结果2→1→4→3→5。k=1不变，k必须为正数。\n\n**追问 / 易错点：**\n这与旧题“从尾部分组反转”不一样。要先确认分组方向与不足k个节点的处理；这里为明确约定的从头版本。\n\n**关联旧题：** Q13-046。本题是具体追问补充，不代表与旧知识点完全独立。\n\n**Java 核心代码（本包练习）：**\n\n```java\n    static Node reverseKGroup(Node head, int k) {\n        if (k <= 0) throw new IllegalArgumentException(\"k must be positive\");\n        Node dummy = new Node(0); dummy.next = head;\n        Node before = dummy;\n        while (true) {\n            Node end = before;\n            for (int i = 0; i < k && end != null; i++) end = end.next;\n            if (end == null) return dummy.next;\n            Node after = end.next;\n            Node oldHead = before.next, current = oldHead, previous = after;\n            while (current != after) {\n                Node next = current.next;\n                current.next = previous;\n                previous = current;\n                current = next;\n            }\n            before.next = end;\n            before = oldHead;\n        }\n    }\n```\n\n完整类、节点定义及测试见资料包 code/InterviewPractice.java；单独片段需补齐相应上下文。",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI005"
      ],
      "keywords": [
        "RM031",
        "算法与数据结构",
        "携程"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM032",
      "number": "RM032",
      "question": "三个线程依次输出 ABC，循环100次，除信号量外还能怎么实现？",
      "answer": "**直接回答：**\n方案一：三个信号量初值为1、0、0，A输出后释放B，B释放C，C再释放A。方案二：同一把锁保护turn，A/B/C分别等turn为0/1/2，输出后推进turn并通知。必须while检查条件，不能靠sleep赌顺序。\n\n**举个例子：**\n每个线程只负责自己的字母，完成100轮得到300个字符。中断时通知其他参与者终止，避免一个退出、另两个永久等待。\n\n**追问 / 易错点：**\n普通volatile变量不能同时保证“检查轮次→输出→改轮次”的复合原子性。附文件用同一锁+条件等待实现，并给信号量实现；只测正常路径不能证明所有调度下都无故障。\n\n**技术依据：** [JLS 21 线程与锁](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)。\n\n**关联旧题：** Q03-035。本题是具体追问补充，不代表与旧知识点完全独立。\n\n**Java 核心代码（本包练习）：**\n\n```java\n// 监视器方案核心：turn、cancelled、out必须由同一把lock保护。\n// id=0/1/2分别属于A/B/C线程；每个线程循环100次。\nsynchronized (lock) {\n    while (turn != id && !cancelled) lock.wait();\n    if (cancelled) return;\n    out.append((char) ('A' + id));\n    turn = (turn + 1) % 3;\n    lock.notifyAll();\n}\n// 完整示例还处理InterruptedException、通知退出和join；见code/InterviewPractice.java。\n```\n\n完整类、节点定义及测试见资料包 code/InterviewPractice.java；单独片段需补齐相应上下文。",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI011"
      ],
      "keywords": [
        "RM032",
        "多线程 / 并发",
        "BIGO"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM033",
      "number": "RM033",
      "question": "公网传输数据必须有 HTTP 头吗？TCP 握手也有 HTTP 头吗？",
      "answer": "**直接回答：**\n不必。IP、TCP、HTTP分属不同层。网络传输可以承载DNS、SSH、数据库协议或自定义协议，不要求应用层一定是HTTP。TCP握手用TCP首部中的标志、序号等建立连接，不靠HTTP请求头。\n\n**举个例子：**\n浏览器访问HTTPS时，先有网络和传输连接，再按协议完成TLS及HTTP交换；SSH能跨公网连服务器，但不是通过HTTP头识别用户命令。\n\n**追问 / 易错点：**\n只有你声称这段数据是某种HTTP消息时，才需要符合该HTTP版本的格式。不要把某个公司的业务使用HTTP，误说成所有互联网通信都必须HTTP。\n\n**关联旧题：** Q09-002、Q09-004。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI006"
      ],
      "keywords": [
        "RM033",
        "计算机网络",
        "携程"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM034",
      "number": "RM034",
      "question": "哈希、加密、数字签名各解决什么问题？",
      "answer": "**直接回答：**\n哈希把数据映射为摘要，用于校验或索引等，本身通常不保密；加密用密钥保护内容，授权方可解密；数字签名用私钥签署、公钥验证，用来验证来源与完整性。普通哈希不能证明发送者身份，因为攻击者也能重算。\n\n**举个例子：**\n下载文件比对可信渠道的摘要是在查完整性；HTTPS会话保护传输；软件包签名帮助验证发布者。签名不是“用私钥把整个文件加密”。\n\n**追问 / 易错点：**\n签名验证还依赖可信公钥与正确上下文。密码存储另用专用慢哈希；不要因为“不可逆”就认为任何哈希都适合存密码。\n\n**技术依据：** [OWASP Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)；[OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)。\n\n**关联旧题：** Q09-014。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI013",
        "NI014"
      ],
      "keywords": [
        "RM034",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM035",
      "number": "RM035",
      "question": "向量检索的 HNSW 是怎么找近邻的？",
      "answer": "**直接回答：**\nHNSW把向量组织成分层近邻图。搜索先在稀疏高层快速接近目标，再逐层下降，在底层探索候选并返回近似近邻。它不是每次把全部向量逐一精确比较，速度、召回率和索引内存需要权衡。\n\n**举个例子：**\n可把高层看成跨区域的快速入口，底层做更细的邻居探索。增大搜索候选范围通常更有利于召回，但会增加工作量，要在固定数据集上测。\n\n**追问 / 易错点：**\n不能承诺总能找到精确最近邻或所有情况下都是O(log n)。元数据权限过滤、数据更新与索引参数会影响实际效果；图类比不代替数学保证。\n\n**技术依据：** [HNSW原始论文（摘要页）](https://arxiv.org/abs/1603.09320)。\n\n**关联旧题：** UX014。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI009"
      ],
      "keywords": [
        "RM035",
        "项目 / 实习拷打",
        "拼多多"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM036",
      "number": "RM036",
      "question": "模型总参数、激活参数、数值精度和 MoE 有什么关系？",
      "answer": "**直接回答：**\n总参数是模型保存的全部权重规模；MoE通过路由让每个token只使用部分专家，因此激活参数可能小于总参数。数值精度描述权重或计算使用的表示格式。三者共同影响显存、计算和精度，不能只看总参数判断每次推理成本。\n\n**举个例子：**\n一个大MoE模型并不意味着每个token都计算所有专家，但未参与本次计算的权重仍需要某种存储或装载安排。降低位宽也不保证时延同比例下降。\n\n**追问 / 易错点：**\n具体模型的激活数、量化方法和硬件吞吐需查模型卡并实测；本题不填任何未经核实的商业模型参数。MoE还带来路由和专家负载问题。\n\n**技术依据：** [Switch Transformers原始论文（摘要页）](https://arxiv.org/abs/2101.03961)。\n\n**关联旧题：** Q12-034。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI010"
      ],
      "keywords": [
        "RM036",
        "项目 / 实习拷打",
        "拼多多"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM037",
      "number": "RM037",
      "question": "首页慢在数据权限计算，能直接把权限结果缓存起来吗？",
      "answer": "**直接回答：**\n可以评估缓存，但必须先明确权限结果依赖用户、租户、角色、资源范围和规则版本。避免一条数据一次远程鉴权，改成批量决策或数据库可执行过滤。缓存键包含必要维度，权限变更使旧结果失效；高风险写操作在执行端再次校验。\n\n**举个例子：**\n同一个用户调到另一个部门后，旧部门可见清单不能继续沿用30分钟。可在权限版本变更后使用新缓存键，并清理旧结果。\n\n**追问 / 易错点：**\n不能用“平均延迟变快”掩盖越权风险。分别测权限计算耗时、业务查询耗时和端到端P95；此处为参考优化方案。\n\n**关联旧题：** LX012、LX013、Q12-015。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI012"
      ],
      "keywords": [
        "RM037",
        "场景题 / 故障排查",
        "得物"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM038",
      "number": "RM038",
      "question": "单例怎么写？反射和序列化会不会破坏它？",
      "answer": "**直接回答：**\n简单场景可用静态内部类或枚举；双重检查写法需要volatile。普通私有构造器主要阻止正常外部new，不自动抵御所有反射访问。实现Serializable的普通单例还要考虑反序列化创建新对象的问题，常用readResolve维护语义。\n\n**举个例子：**\n枚举单例可写enum Registry { INSTANCE }，但实例里的可变Map仍要做并发保护，单例不是“所有操作自动线程安全”。\n\n**追问 / 易错点：**\n不同类加载器定义的类可以各有实例，Spring singleton则是容器内某个Bean定义的范围。模块访问限制也会影响反射，不要笼统说任何私有构造器都能被任意代码绕过。\n\n**关联旧题：** Q01-035、Q01-040、Q05-007。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "RM038",
        "Java 基础",
        "招银网络科技"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM039",
      "number": "RM039",
      "question": "MySQL 和 PostgreSQL 怎么选？Redis又处在哪一层？",
      "answer": "**直接回答：**\nMySQL和PostgreSQL都是关系数据库，先按事务模型、查询复杂度、扩展需求、运维经验和已有生态选择，不要简单排名。PostgreSQL的jsonb及相应索引等能力可作为具体评估项，但不意味着MySQL不能处理JSON。Redis常用于缓存和其他内存数据结构需求，不是默认替代关系库。\n\n**举个例子：**\n团队已有稳定MySQL事务系统，不能为了“技术更新”盲目迁移；需要某些PostgreSQL扩展或复杂检索能力时，拿真实查询和数据验证收益。\n\n**追问 / 易错点：**\n不能说MySQL一定快、PG一定慢，或者Redis永不落盘。说明实际使用过哪一个，没有做过生产迁移就把结论标为选型分析。\n\n**技术依据：** [PostgreSQL JSON Types](https://www.postgresql.org/docs/current/datatype-json.html)。\n\n**关联旧题：** Q12-003、Q12-010。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI014",
        "NI021"
      ],
      "keywords": [
        "RM039",
        "项目 / 实习拷打",
        "腾讯",
        "阿里"
      ],
      "sourceFile": "recent-interviews-study.md"
    },
    {
      "id": "bank-RM040",
      "number": "RM040",
      "question": "付款方没网、收款方有网，如何讨论扫码支付？两边都没网呢？",
      "answer": "**直接回答：**\n先明确这是系统设计题，不直接断言某款支付产品支持什么。付款方离线并不必然要求后台也离线：在预先授权等前提下，付款端可展示短期凭据，在线收款端把凭据交给可信支付后台验证、风控和记账。最终结果仍由后台确认。\n\n**举个例子：**\n付款码可看成短期受限凭据而非永久账号密码，需要过期、一次性使用、金额或场景约束，以及服务端防重放。不能只凭扫码页面动画就认为已到账。\n\n**追问 / 易错点：**\n双方都离线时无法即时向同一权威账本确认余额和重复花费；只能在额外的安全硬件、预授权额度、信用与事后清算等假设下讨论，不能当成普通联网支付的同等保证。此处完全是参考设计。\n\n**关联旧题：** LX040、Q11-036。本题是具体追问补充，不代表与旧知识点完全独立。",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "面经具体追问 / 练习",
      "sourceIds": [
        "NI014"
      ],
      "keywords": [
        "RM040",
        "场景题 / 故障排查",
        "腾讯"
      ],
      "sourceFile": "recent-interviews-study.md"
    }
  ],
  "sources": [
    {
      "id": "X01",
      "title": "腾讯后端暑期实习面试记录",
      "url": "https://www.nowcoder.com/discuss/863532788627116032",
      "description": "候选人自述面经。正文时间线2.26投递、3.3/3.5技术面；未显式标完整年份。提取线程池、Agent工具返回、MCP和二分边界等考点。",
      "company": "腾讯",
      "questionIds": [
        "bank-Q03-022",
        "bank-Q03-025",
        "bank-Q03-028",
        "bank-Q12-026",
        "bank-Q12-027",
        "bank-Q12-028",
        "bank-Q12-032",
        "bank-Q12-033",
        "bank-Q13-009"
      ]
    },
    {
      "id": "X02",
      "title": "拼多多服务端开发秋招面经",
      "url": "https://www.nowcoder.com/discuss/926155090849693696",
      "description": "候选人自述面经。正文记8月底、9.3、9.6；未显式标完整年份。提取锁过期、TTL、RPC变慢、CLOSE_WAIT和合并K链等考点。",
      "company": "拼多多",
      "questionIds": [
        "bank-Q03-025",
        "bank-Q07-008",
        "bank-Q07-012",
        "bank-Q07-013",
        "bank-Q07-014",
        "bank-Q07-015",
        "bank-Q07-018",
        "bank-Q07-020",
        "bank-Q07-022",
        "bank-Q07-030",
        "bank-Q08-004",
        "bank-Q09-004",
        "bank-Q09-005",
        "bank-Q09-006",
        "bank-Q10-002",
        "bank-Q11-005",
        "bank-Q11-007",
        "bank-Q13-015",
        "bank-Q13-032"
      ]
    },
    {
      "id": "X03",
      "title": "微信后端开发秋招一面",
      "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
      "description": "候选人自述面经/解答混合。页面09-01，未显式标完整年份。提取Agent取消、ThreadLocal等考点；其中答案不是权威标准答案。",
      "company": "腾讯",
      "questionIds": [
        "bank-Q03-020",
        "bank-Q03-021",
        "bank-Q03-030",
        "bank-Q05-003",
        "bank-Q11-029",
        "bank-Q12-026",
        "bank-Q12-030",
        "bank-Q12-031",
        "bank-Q12-032"
      ]
    },
    {
      "id": "X04",
      "title": "2026 Java后端开发面试真题汇总（含AI工程方向）",
      "url": "https://www.nowcoder.com/discuss/864594486704291840",
      "description": "面试官自述考点汇总。标题明确2026；作者自述面试27/28届同学。只作HashMap、并发、数据库、缓存、AI方向线索，不据此推断行业频率。",
      "company": "综合",
      "questionIds": [
        "bank-Q02-005",
        "bank-Q02-009",
        "bank-Q02-010",
        "bank-Q02-013",
        "bank-Q03-009",
        "bank-Q03-012",
        "bank-Q03-022",
        "bank-Q04-001",
        "bank-Q04-009",
        "bank-Q06-004",
        "bank-Q06-010",
        "bank-Q06-014",
        "bank-Q06-015",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017"
      ]
    },
    {
      "id": "X05",
      "title": "得物后端一面9.1",
      "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
      "description": "候选人自述面经。标题9.1，页面检索时显示昨天，未显式标完整年份。提取幂等、百万导入导出、掉单、日志、线程池。",
      "company": "得物",
      "questionIds": [
        "bank-Q03-022",
        "bank-Q04-022",
        "bank-Q09-021",
        "bank-Q11-003",
        "bank-Q11-010",
        "bank-Q11-011",
        "bank-Q11-012",
        "bank-Q11-013",
        "bank-Q11-014",
        "bank-Q11-016",
        "bank-Q11-032",
        "bank-Q12-012",
        "bank-Q12-013",
        "bank-Q12-016"
      ]
    },
    {
      "id": "X06",
      "title": "好未来Java面经（可见转发内容）",
      "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
      "description": "可读转发面经。可见内容记8.20笔试、8.27面试，完整年份未确认；本链接是转发页，非已确认首发。",
      "company": "好未来",
      "questionIds": [
        "bank-Q05-014",
        "bank-Q05-016",
        "bank-Q06-013",
        "bank-Q06-015",
        "bank-Q06-017",
        "bank-Q06-022",
        "bank-Q07-002",
        "bank-Q07-004",
        "bank-Q08-002",
        "bank-Q08-013",
        "bank-Q09-001",
        "bank-Q11-005",
        "bank-Q11-017",
        "bank-Q13-013"
      ]
    },
    {
      "id": "X07",
      "title": "腾讯后端开发岗面经-07",
      "url": "https://www.nowcoder.com/discuss/924809073185300480",
      "description": "多场面经汇编。汇编明确列2026-02与2026-03多场面试。提取部分基础、GC、MQ和网络题，不把同一汇编里的条目当独立已验证原帖。",
      "company": "腾讯",
      "questionIds": [
        "bank-Q02-003",
        "bank-Q02-017",
        "bank-Q03-006",
        "bank-Q03-009",
        "bank-Q04-007",
        "bank-Q04-021",
        "bank-Q04-028",
        "bank-Q05-032",
        "bank-Q08-006",
        "bank-Q08-007",
        "bank-Q09-003",
        "bank-Q09-004",
        "bank-Q09-005",
        "bank-Q09-011",
        "bank-Q09-013",
        "bank-Q12-007",
        "bank-Q12-031",
        "bank-Q13-037"
      ]
    },
    {
      "id": "X08",
      "title": "美团java后端日常实习一二面",
      "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
      "description": "候选人自述面经。已打开原链接；另有2025-02-21汇编指向此帖，可判其不是2026新发面经。补充基础、缓存、Maven、Bean生命周期等。",
      "company": "美团",
      "questionIds": [
        "bank-Q01-003",
        "bank-Q01-004",
        "bank-Q03-022",
        "bank-Q03-023",
        "bank-Q03-024",
        "bank-Q04-001",
        "bank-Q04-010",
        "bank-Q05-008",
        "bank-Q05-036",
        "bank-Q06-004",
        "bank-Q06-012",
        "bank-Q06-015",
        "bank-Q07-001",
        "bank-Q07-009",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-028",
        "bank-Q09-020",
        "bank-Q13-013",
        "bank-Q13-025"
      ]
    },
    {
      "id": "X09",
      "title": "2025-02-19 Java面试题（美团/快手）汇编",
      "url": "https://www.nowcoder.com/discuss/722397808745033728",
      "description": "转述/AI解答汇编。页面发布2025-02-21，作者说明含AI辅助解答；仅用于追踪原始面经链接，不采用其答案作为技术依据。",
      "company": "美团 / 快手",
      "questionIds": []
    },
    {
      "id": "N001",
      "title": "阿里 · 阿里国际 Java 后端一面",
      "url": "https://www.nowcoder.com/discuss/729707786103214080",
      "company": "阿里",
      "description": "日期与阶段： 2025-03-13 发布；春招/实习。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q02-013",
        "bank-Q06-004",
        "bank-Q01-004",
        "bank-Q03-022",
        "bank-Q04-009",
        "bank-Q05-002",
        "bank-Q03-002",
        "bank-Q03-013",
        "bank-Q06-017",
        "bank-Q02-023",
        "bank-Q11-035",
        "bank-Q02-002",
        "bank-Q01-003",
        "bank-Q01-016",
        "bank-Q02-006",
        "bank-Q03-018",
        "bank-Q05-027"
      ]
    },
    {
      "id": "N002",
      "title": "美团 · 暑期实习一面、二面",
      "url": "https://www.nowcoder.com/discuss/732945501980565504",
      "company": "美团",
      "description": "日期与阶段： 2025-03-19、03-21；暑期实习。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q02-013",
        "bank-Q07-019",
        "bank-Q09-001",
        "bank-Q11-009",
        "bank-Q02-005",
        "bank-Q04-002",
        "bank-Q06-014",
        "bank-Q12-017",
        "bank-Q04-028",
        "bank-Q04-021",
        "bank-Q11-027",
        "bank-Q08-001",
        "bank-Q03-009",
        "bank-Q12-043",
        "bank-Q13-022",
        "bank-Q13-045"
      ]
    },
    {
      "id": "N003",
      "title": "字节跳动 · 剪映暑期一、二、三面",
      "url": "https://www.nowcoder.com/discuss/759490251755622400",
      "company": "字节跳动",
      "description": "日期与阶段： 2025-05-20、05-22、05-28；暑期实习。 可读范围： 正文题目可读。\n采集说明： 多轮问题按专题合并，非逐字转录；原帖 TCP 防篡改表述已纠正。",
      "questionIds": [
        "bank-Q02-013",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q09-001",
        "bank-Q10-011",
        "bank-Q06-015",
        "bank-Q02-005",
        "bank-Q06-012",
        "bank-Q06-014",
        "bank-Q07-009",
        "bank-Q03-025",
        "bank-Q03-006",
        "bank-Q01-021",
        "bank-Q03-013",
        "bank-Q04-013",
        "bank-Q04-014",
        "bank-Q04-022",
        "bank-Q06-022",
        "bank-Q07-008",
        "bank-Q07-010",
        "bank-Q07-026",
        "bank-Q09-007",
        "bank-Q09-028",
        "bank-Q10-004",
        "bank-Q11-032",
        "bank-Q13-039",
        "bank-Q13-042"
      ]
    },
    {
      "id": "N004",
      "title": "美团 · 秋招一面 9.4",
      "url": "https://www.nowcoder.com/feed/main/detail/ad00bf6f02784aafb4225aa0d3c06c8b",
      "company": "美团",
      "description": "日期与阶段： 9.4；页面未显示完整年份。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q06-004",
        "bank-Q11-009",
        "bank-Q03-006",
        "bank-Q12-025",
        "bank-Q02-025",
        "bank-Q07-007",
        "bank-Q13-011"
      ]
    },
    {
      "id": "N005",
      "title": "美团 · 零食杂售 AI 后端一面 9.2",
      "url": "https://www.nowcoder.com/feed/main/detail/9b94f595d15148869e0334029b5ddb67",
      "company": "美团",
      "description": "日期与阶段： 9.2；年份未核实。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q12-031",
        "bank-Q06-012",
        "bank-Q12-003",
        "bank-Q06-009",
        "bank-Q11-011",
        "bank-Q11-037",
        "bank-Q12-041",
        "bank-Q13-022"
      ]
    },
    {
      "id": "N006",
      "title": "美团 · AI 后端一面 9.2",
      "url": "https://www.nowcoder.com/discuss/924679647910993920",
      "company": "美团",
      "description": "日期与阶段： 9.2；年份未核实。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q06-015",
        "bank-Q05-008",
        "bank-Q08-012",
        "bank-Q12-004",
        "bank-Q08-027",
        "bank-Q13-025"
      ]
    },
    {
      "id": "N007",
      "title": "腾讯 · Java 一面",
      "url": "https://www.nowcoder.com/discuss/730082976414846976",
      "company": "腾讯",
      "description": "日期与阶段： 2025-03-14 发布。 可读范围： 正文题目可读。\n采集说明： 作者没记清的两道手撕题未补造题干；图论题仅按明确考点归纳。",
      "questionIds": [
        "bank-Q03-004",
        "bank-Q03-006",
        "bank-Q09-007",
        "bank-Q03-017",
        "bank-Q07-018",
        "bank-Q09-026",
        "bank-Q10-006",
        "bank-Q10-027",
        "bank-Q13-030",
        "bank-Q13-031",
        "bank-Q13-049"
      ]
    },
    {
      "id": "N008",
      "title": "京东 · 零售后端一面 8.10",
      "url": "https://www.nowcoder.com/feed/main/detail/01105dacc64e4c6cb3224193680a9733",
      "company": "京东",
      "description": "日期与阶段： 2025-08-13 发布；标题 8.10。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q12-019",
        "bank-Q12-035",
        "bank-Q01-004",
        "bank-Q04-009",
        "bank-Q06-012",
        "bank-Q11-018"
      ]
    },
    {
      "id": "N009",
      "title": "京东 · 后端一面",
      "url": "https://www.nowcoder.com/feed/main/detail/c1c736cf674a4d528701d818181d1857",
      "company": "京东",
      "description": "日期与阶段： 2025-08-19 发布。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q03-022",
        "bank-Q05-007",
        "bank-Q05-008",
        "bank-Q05-014",
        "bank-Q05-031",
        "bank-Q06-012",
        "bank-Q07-002",
        "bank-Q12-007"
      ]
    },
    {
      "id": "N010",
      "title": "京东 · 后端实习三面 8.11",
      "url": "https://www.nowcoder.com/discuss/792168748831481856",
      "company": "京东",
      "description": "日期与阶段： 2025-09-01 发布；实习。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q02-013",
        "bank-Q01-002",
        "bank-Q01-007",
        "bank-Q01-009",
        "bank-Q01-042",
        "bank-Q02-005",
        "bank-Q03-010",
        "bank-Q04-002",
        "bank-Q05-002",
        "bank-Q06-012",
        "bank-Q06-013",
        "bank-Q06-014",
        "bank-Q12-005"
      ]
    },
    {
      "id": "N011",
      "title": "阿里 · 淘天暑期电话一面",
      "url": "https://www.nowcoder.com/discuss/876113939245891584",
      "company": "阿里",
      "description": "日期与阶段： 04-21 发布；年份未核实。 可读范围： 正文题目可读。\n采集说明： 责任链编程未见完整题设，仅收录设计模式考点。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q04-001",
        "bank-Q03-010",
        "bank-Q03-012",
        "bank-Q04-024",
        "bank-Q04-021",
        "bank-Q12-025",
        "bank-Q12-028"
      ]
    },
    {
      "id": "N012",
      "title": "XTransfer · Java 一面",
      "url": "https://www.nowcoder.com/feed/main/detail/1cb7a9065a4447e5ab0effa9c1edb93b",
      "company": "XTransfer",
      "description": "日期与阶段： 2026-08-24。 可读范围： 正文题目可读。\n采集说明： 公司名来自作者评论；面试事实为作者自述。",
      "questionIds": [
        "bank-Q06-004",
        "bank-Q05-011",
        "bank-Q06-006",
        "bank-Q06-015",
        "bank-Q07-021",
        "bank-Q11-010",
        "bank-Q11-036"
      ]
    },
    {
      "id": "N013",
      "title": "百度 · Java 一面",
      "url": "https://www.nowcoder.com/discuss/797072111939428352",
      "company": "百度",
      "description": "日期与阶段： 2025-09-15 发布。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q01-002",
        "bank-Q01-007",
        "bank-Q04-002",
        "bank-Q04-009",
        "bank-Q06-014",
        "bank-Q06-017",
        "bank-Q07-022",
        "bank-Q02-002",
        "bank-Q06-005",
        "bank-Q06-036",
        "bank-Q11-034",
        "bank-Q13-004"
      ]
    },
    {
      "id": "N014",
      "title": "百度 · Java 日常实习面经",
      "url": "https://www.nowcoder.com/discuss/752682541152268288",
      "company": "百度",
      "description": "日期与阶段： 2025-05-16 发布；作者称为上一年面经，归入 2024 经验。 可读范围： 正文题目可读。\n采集说明： 原帖部分技术答案不严谨；本题库只使用其提问线索。",
      "questionIds": [
        "bank-Q08-004",
        "bank-Q08-005",
        "bank-Q04-009",
        "bank-Q07-002",
        "bank-Q08-006",
        "bank-Q05-013",
        "bank-Q06-022",
        "bank-Q08-012",
        "bank-Q04-003",
        "bank-Q01-022",
        "bank-Q03-015",
        "bank-Q03-019"
      ]
    },
    {
      "id": "N015",
      "title": "拼多多 · 服务端一面",
      "url": "https://www.nowcoder.com/discuss/735511676656553984",
      "company": "拼多多",
      "description": "日期与阶段： 2025-03 发布；面试具体日未核实。 可读范围： 正文题目可读。\n采集说明： 算法只写了滑窗、优先队列、二分等方向，没有足够题设，未冒充完整算法原题。",
      "questionIds": [
        "bank-Q06-003",
        "bank-Q06-018",
        "bank-Q06-020",
        "bank-Q12-009",
        "bank-Q12-025"
      ]
    },
    {
      "id": "N016",
      "title": "拼多多 · 2025 秋招服务端题目整理",
      "url": "https://www.nowcoder.com/discuss/797501882380845056",
      "company": "拼多多",
      "description": "日期与阶段： 2025-09-16 发布。 可读范围： 正文可读／整理稿。\n采集说明： 含整理及内推性质，不能验证为作者亲历的独立面试。",
      "questionIds": [
        "bank-Q09-015",
        "bank-Q09-016",
        "bank-Q12-004",
        "bank-Q03-001",
        "bank-Q08-001",
        "bank-Q10-001",
        "bank-Q11-021",
        "bank-Q11-043",
        "bank-Q13-043"
      ]
    },
    {
      "id": "N017",
      "title": "滴滴 · Java 一面",
      "url": "https://www.nowcoder.com/discuss/790995822635655168",
      "company": "滴滴",
      "description": "日期与阶段： 2025-08-29 发布。 可读范围： 正文题目可读。\n采集说明： 最小 10 个数应维护大顶堆，已纠正帖子中的方向错误。",
      "questionIds": [
        "bank-Q04-001",
        "bank-Q07-006",
        "bank-Q03-022",
        "bank-Q06-012",
        "bank-Q06-014",
        "bank-Q03-025",
        "bank-Q08-001",
        "bank-Q03-037",
        "bank-Q11-013",
        "bank-Q11-035",
        "bank-Q13-044"
      ]
    },
    {
      "id": "N018",
      "title": "携程 · Java 一面 8.14",
      "url": "https://www.nowcoder.com/feed/main/detail/f01205889237409fa60b67fb71082bc6",
      "company": "携程",
      "description": "日期与阶段： 8.14；年份未核实。 可读范围： 正文题目可读。\n采集说明： 海量收入汇总按分片聚合思路延展，不将原题人数当项目实测规模。",
      "questionIds": [
        "bank-Q06-007",
        "bank-Q03-010",
        "bank-Q03-012",
        "bank-Q02-022",
        "bank-Q03-006",
        "bank-Q13-047",
        "bank-Q03-013",
        "bank-Q02-008",
        "bank-Q11-030",
        "bank-Q13-024",
        "bank-Q13-038"
      ]
    },
    {
      "id": "N019",
      "title": "字节跳动 · 秋招二面 8.10",
      "url": "https://www.nowcoder.com/feed/main/detail/acca251c3e6e4d70a620110f5a3e5333",
      "company": "字节跳动",
      "description": "日期与阶段： 8.10；年份未核实。 可读范围： 正文题目可读。\n采集说明： 链表相加原题可见但本轮未补完整代码，未计入映射题数。",
      "questionIds": [
        "bank-Q12-035",
        "bank-Q12-007",
        "bank-Q12-017",
        "bank-Q04-021",
        "bank-Q04-031"
      ]
    },
    {
      "id": "N020",
      "title": "用友 · 浙江用友实习面经",
      "url": "https://www.nowcoder.com/discuss/768799306676436992",
      "company": "用友",
      "description": "日期与阶段： 2025-06-29 发布；实习。 可读范围： 付费文章免费预览。\n采集说明： 只使用免费可见部分；字符串 SQL 函数题未收录完整答案，不声称读取付费正文。",
      "questionIds": [
        "bank-Q01-041",
        "bank-Q05-001"
      ]
    },
    {
      "id": "N021",
      "title": "快手 · 日常实习一面 9.1",
      "url": "https://www.nowcoder.com/feed/main/detail/71b59c024d8340408d9bed352cc41429",
      "company": "快手",
      "description": "日期与阶段： 9.1；年份未核实。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q08-005",
        "bank-Q10-011",
        "bank-Q06-015",
        "bank-Q02-005",
        "bank-Q07-002",
        "bank-Q07-009",
        "bank-Q08-002",
        "bank-Q11-017",
        "bank-Q06-003",
        "bank-Q04-028",
        "bank-Q07-001",
        "bank-Q09-003",
        "bank-Q01-021",
        "bank-Q04-014",
        "bank-Q06-002",
        "bank-Q04-015",
        "bank-Q09-004",
        "bank-Q09-016",
        "bank-Q11-038",
        "bank-Q11-039"
      ]
    },
    {
      "id": "N022",
      "title": "BIGO · 后端二面",
      "url": "https://www.nowcoder.com/discuss/925381649154543616",
      "company": "BIGO",
      "description": "日期与阶段： 09-04 发布；年份未核实。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q01-039",
        "bank-Q03-020",
        "bank-Q05-025",
        "bank-Q05-041",
        "bank-Q05-042",
        "bank-Q07-005",
        "bank-Q08-004",
        "bank-Q08-005",
        "bank-Q09-020",
        "bank-Q10-024",
        "bank-Q11-020",
        "bank-Q11-040",
        "bank-Q12-015",
        "bank-Q12-031",
        "bank-Q12-033",
        "bank-Q12-039",
        "bank-Q13-041"
      ]
    },
    {
      "id": "N023",
      "title": "BIGO · 后端一面",
      "url": "https://www.nowcoder.com/discuss/922842303985614848",
      "company": "BIGO",
      "description": "日期与阶段： 08-28 发布；年份未核实。 可读范围： 正文题目可读。\n采集说明： 有序链表去重未明确保留一个还是全部删除，因此未指定其为 82 或 83。",
      "questionIds": [
        "bank-Q03-003",
        "bank-Q03-004",
        "bank-Q03-036",
        "bank-Q04-001",
        "bank-Q04-018",
        "bank-Q04-029",
        "bank-Q04-030",
        "bank-Q06-007",
        "bank-Q06-011",
        "bank-Q07-013",
        "bank-Q07-024",
        "bank-Q09-001",
        "bank-Q09-002",
        "bank-Q09-006",
        "bank-Q09-015",
        "bank-Q09-027",
        "bank-Q10-010",
        "bank-Q10-011"
      ]
    },
    {
      "id": "N024",
      "title": "BIGO · 二面 9.4（另一作者）",
      "url": "https://www.nowcoder.com/feed/main/detail/698a8216d7e8410eb158fbd1fe8dbd6f",
      "company": "BIGO",
      "description": "日期与阶段： 9.4；年份未核实。 可读范围： 正文题目可读。\n采集说明： 未记清的手撕题不计数；逻辑谜题不纳入 Java 主题。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q02-013",
        "bank-Q02-026",
        "bank-Q06-004",
        "bank-Q12-019",
        "bank-Q12-035",
        "bank-Q13-021"
      ]
    },
    {
      "id": "N025",
      "title": "大疆 · 后端面经 9.2",
      "url": "https://www.nowcoder.com/discuss/925412795951087616",
      "company": "大疆",
      "description": "日期与阶段： 9.2；年份未核实。 可读范围： 正文题目可读。\n采集说明： 短链接 discuss/1672970 与本帖为同页，不重复计数。",
      "questionIds": [
        "bank-Q06-004",
        "bank-Q06-011",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-021",
        "bank-Q02-005",
        "bank-Q03-022",
        "bank-Q05-008",
        "bank-Q05-014",
        "bank-Q07-002",
        "bank-Q05-013",
        "bank-Q04-028",
        "bank-Q05-010",
        "bank-Q07-001",
        "bank-Q09-003"
      ]
    },
    {
      "id": "N026",
      "title": "顺丰 · 科技 Java 秋招 9.3",
      "url": "https://www.nowcoder.com/feed/main/detail/ffd9a8d12a724e168eb4cdef8a6eca09",
      "company": "顺丰",
      "description": "日期与阶段： 9.3；年份未核实。 可读范围： 正文题目可读。\n采集说明： Canal 异步同步不等于即时强一致。",
      "questionIds": [
        "bank-Q06-007",
        "bank-Q06-011",
        "bank-Q07-019",
        "bank-Q07-024",
        "bank-Q08-005",
        "bank-Q12-019",
        "bank-Q12-017",
        "bank-Q11-027",
        "bank-Q12-009",
        "bank-Q12-025"
      ]
    },
    {
      "id": "N027",
      "title": "车300 · 南京 Java 实习 9.1",
      "url": "https://www.nowcoder.com/feed/main/detail/8b78085106ae45a4bada11cb75141d8f",
      "company": "车300",
      "description": "日期与阶段： 9.1；年份未核实。 可读范围： 正文题目可读。\n采集说明： 原帖漏记的 Agent 问题未补造。",
      "questionIds": [
        "bank-Q07-016",
        "bank-Q07-019",
        "bank-Q11-009",
        "bank-Q07-002",
        "bank-Q12-017",
        "bank-Q07-032",
        "bank-Q11-027",
        "bank-Q12-025",
        "bank-Q02-015",
        "bank-Q06-037",
        "bank-Q07-028",
        "bank-Q11-042"
      ]
    },
    {
      "id": "N028",
      "title": "熙牛医疗 · 杭州 Java 实习一面",
      "url": "https://www.nowcoder.com/feed/main/detail/6512d3ef462a49cbb0aa5167d57d372f",
      "company": "熙牛医疗",
      "description": "日期与阶段： 2026-09-03。 可读范围： 正文题目可读。\n采集说明： JWT 通常是签名而非默认加密；清理器问题原意不明确，未强行归类。",
      "questionIds": [
        "bank-Q02-013",
        "bank-Q03-020",
        "bank-Q04-018",
        "bank-Q09-017",
        "bank-Q06-015",
        "bank-Q02-005",
        "bank-Q03-011",
        "bank-Q03-012",
        "bank-Q06-013",
        "bank-Q12-002",
        "bank-Q02-019",
        "bank-Q04-017",
        "bank-Q02-001",
        "bank-Q02-009",
        "bank-Q04-008"
      ]
    },
    {
      "id": "N029",
      "title": "熙牛医疗 · Java 实习一面",
      "url": "https://www.nowcoder.com/feed/main/detail/8606bb3f333140f3aae34c97f56af884",
      "company": "熙牛医疗",
      "description": "日期与阶段： 08-31；年份未核实。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q08-005",
        "bank-Q02-005",
        "bank-Q03-012",
        "bank-Q03-022",
        "bank-Q06-012",
        "bank-Q12-007",
        "bank-Q03-002",
        "bank-Q05-010",
        "bank-Q04-021",
        "bank-Q12-013"
      ]
    },
    {
      "id": "N030",
      "title": "科大讯飞 · 秋招后端一面 8.26",
      "url": "https://www.nowcoder.com/feed/main/detail/29e1b066f1504f4f912df70b91c9dcaa",
      "company": "科大讯飞",
      "description": "日期与阶段： 8.26；年份未核实。 可读范围： 正文题目可读。\n采集说明： 求职意向等非技术问题不拆成题数。",
      "questionIds": [
        "bank-Q12-031",
        "bank-Q12-035",
        "bank-Q11-017",
        "bank-Q12-007",
        "bank-Q12-002",
        "bank-Q12-028"
      ]
    },
    {
      "id": "N031",
      "title": "拼多多 · 提前批秋招一面",
      "url": "https://www.nowcoder.com/feed/main/detail/d25578bc10b148129338c8c8016cd487",
      "company": "拼多多",
      "description": "日期与阶段： 07-30；年份未核实。 可读范围： 正文题目可读。\n采集说明： 自动售货机设计原题另有考点，未在本次补齐，不能称完整逐字面试。",
      "questionIds": [
        "bank-Q07-019",
        "bank-Q08-004",
        "bank-Q08-005",
        "bank-Q12-035",
        "bank-Q08-006",
        "bank-Q12-036",
        "bank-Q09-025",
        "bank-Q11-001",
        "bank-Q12-034",
        "bank-Q13-034"
      ]
    },
    {
      "id": "N032",
      "title": "招银云创 · Java 一面",
      "url": "https://www.nowcoder.com/discuss/834193249391628288",
      "company": "招银云创",
      "description": "日期与阶段： 面试 2025-09-19；编辑 2025-12-30。 可读范围： 正文题目可读。",
      "questionIds": [
        "bank-Q03-020",
        "bank-Q04-018",
        "bank-Q05-025",
        "bank-Q06-015",
        "bank-Q01-002",
        "bank-Q03-011",
        "bank-Q03-012",
        "bank-Q03-022",
        "bank-Q04-014",
        "bank-Q09-004",
        "bank-Q02-019",
        "bank-Q03-015",
        "bank-Q04-007",
        "bank-Q04-017",
        "bank-Q04-032",
        "bank-Q06-021",
        "bank-Q07-012",
        "bank-Q09-008"
      ]
    },
    {
      "id": "N033",
      "title": "同程 · 旅行 Java 面试 3.12",
      "url": "https://www.nowcoder.com/feed/main/detail/7b02714c828f40c2ba55831edbd88ee2",
      "company": "同程",
      "description": "日期与阶段： 2024-03-12；历史实习样本。 可读范围： 正文题目可读。\n采集说明： 机器学习和路由协议旁支未纳入；不能仅凭 500 QPS 判断需要分库。",
      "questionIds": [
        "bank-Q12-035",
        "bank-Q05-011",
        "bank-Q02-005",
        "bank-Q04-002",
        "bank-Q05-002",
        "bank-Q06-014",
        "bank-Q02-022",
        "bank-Q03-006",
        "bank-Q04-024",
        "bank-Q06-003",
        "bank-Q06-034",
        "bank-Q09-014",
        "bank-Q13-047"
      ]
    },
    {
      "id": "N034",
      "title": "小米 · Java 后端一面 8.26",
      "url": "https://www.nowcoder.com/feed/main/detail/ec9340e947aa4613a284688e00ec4f5d",
      "company": "小米",
      "description": "日期与阶段： 8.26；年份未核实。 可读范围： 正文题目可读。\n采集说明： 同题问法合并；求职进度未计入技术题。",
      "questionIds": [
        "bank-Q12-038",
        "bank-Q06-014",
        "bank-Q12-002",
        "bank-Q08-007",
        "bank-Q08-012",
        "bank-Q08-026",
        "bank-Q12-037",
        "bank-Q13-026"
      ]
    },
    {
      "id": "N035",
      "title": "快手 · Java 后端一面（作者称已过）",
      "url": "https://www.nowcoder.com/feed/main/detail/9d7e8d3b77ad46468791d3a60f4adb96",
      "company": "快手",
      "description": "日期与阶段： 04-06 发布；年份未核实。 可读范围： 正文题目可读。\n采集说明： 原帖未给算法完整题目，未编造。",
      "questionIds": [
        "bank-Q07-016",
        "bank-Q11-009",
        "bank-Q11-036",
        "bank-Q06-014",
        "bank-Q07-002",
        "bank-Q07-009",
        "bank-Q03-025",
        "bank-Q08-007",
        "bank-Q02-010",
        "bank-Q05-043",
        "bank-Q06-009",
        "bank-Q07-022",
        "bank-Q07-032",
        "bank-Q07-033",
        "bank-Q08-008",
        "bank-Q11-027",
        "bank-Q11-041",
        "bank-Q12-001",
        "bank-Q12-004"
      ]
    },
    {
      "id": "N036",
      "title": "腾讯 · 腾讯云后台一面",
      "url": "https://www.nowcoder.com/discuss/731572209101172736",
      "company": "腾讯",
      "description": "日期与阶段： 2025 年春招检索记录；具体面试日未核实。 可读范围： 正文可见题干。\n采集说明： 页面题目区可见，后有订阅提示；分布式读写锁未作为完整实现收录。",
      "questionIds": [
        "bank-Q04-018",
        "bank-Q07-005",
        "bank-Q09-015",
        "bank-Q06-006",
        "bank-Q04-009",
        "bank-Q12-002",
        "bank-Q09-014",
        "bank-Q06-022",
        "bank-Q09-004",
        "bank-Q04-003",
        "bank-Q04-017",
        "bank-Q06-005",
        "bank-Q09-005",
        "bank-Q06-008",
        "bank-Q09-024",
        "bank-Q13-046",
        "bank-Q13-050",
        "bank-Q13-051"
      ]
    },
    {
      "id": "N037",
      "title": "腾讯 · 腾讯视频后台一面",
      "url": "https://www.nowcoder.com/feed/main/detail/9e840c7107834ee6bd9946cf6fb9e58c",
      "company": "腾讯",
      "description": "日期与阶段： 2025-04-01。 可读范围： 正文题目可读。\n采集说明： 已定位原作者帖；discuss/742152164449017856 为转载，不另外计数。题干混淆穿透与击穿，两者分别看。",
      "questionIds": [
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-019",
        "bank-Q08-005",
        "bank-Q06-015",
        "bank-Q07-021",
        "bank-Q06-014",
        "bank-Q01-027",
        "bank-Q09-003",
        "bank-Q09-004",
        "bank-Q03-001",
        "bank-Q11-019",
        "bank-Q13-052"
      ]
    },
    {
      "id": "N038",
      "title": "百度 · 提前批 Java 二面",
      "url": "https://www.nowcoder.com/discuss/799949823049756672",
      "company": "百度",
      "description": "日期与阶段： 2025-09-23 发布（检索可见）。 可读范围： 搜索可见题目。\n采集说明： 详情正文未完整读取；局域网分发及几何题未有完整答案，不计入。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q09-020",
        "bank-Q12-015",
        "bank-Q03-022",
        "bank-Q06-012",
        "bank-Q07-001",
        "bank-Q04-022",
        "bank-Q09-016",
        "bank-Q04-007",
        "bank-Q03-001",
        "bank-Q03-017",
        "bank-Q09-018",
        "bank-Q10-026"
      ]
    },
    {
      "id": "N039",
      "title": "京东 · 后端一面 8.17",
      "url": "https://www.nowcoder.com/feed/main/detail/b18f8fa5192249009855921fa568421a",
      "company": "京东",
      "description": "日期与阶段： 8.17；年份未核实。 可读范围： 搜索可见题目。",
      "questionIds": [
        "bank-Q06-007",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q08-004",
        "bank-Q03-011",
        "bank-Q03-012",
        "bank-Q03-022",
        "bank-Q03-035",
        "bank-Q07-009",
        "bank-Q07-031",
        "bank-Q08-002",
        "bank-Q08-006",
        "bank-Q10-003",
        "bank-Q11-017",
        "bank-Q12-017"
      ]
    },
    {
      "id": "N040",
      "title": "帆软 · 后端二面",
      "url": "https://www.nowcoder.com/feed/main/detail/b22f8f811465486aa912b80efe8f5cd1",
      "company": "帆软",
      "description": "日期与阶段： 年份及面试日未核实。 可读范围： 搜索可见题目。\n采集说明： 只收可见的项目取舍与事务追问，不声称全文已读。",
      "questionIds": [
        "bank-Q07-024",
        "bank-Q07-021",
        "bank-Q06-017",
        "bank-Q12-036",
        "bank-Q12-042"
      ]
    },
    {
      "id": "N041",
      "title": "BIGO · 秋招 Java 一面（汇款 Agent 项目）",
      "url": "https://www.nowcoder.com/feed/main/detail/ee37b185f3b545f5abec5a722ad35d7e",
      "company": "BIGO",
      "description": "日期与阶段： 年份及面试日未核实。 可读范围： 列表页可见题干。\n采集说明： 题目从牛客列表页展示内容读取，详情页正文不可完整读取。",
      "questionIds": [
        "bank-Q07-006",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-019",
        "bank-Q07-020",
        "bank-Q09-015",
        "bank-Q09-017",
        "bank-Q11-009",
        "bank-Q11-012",
        "bank-Q12-031",
        "bank-Q12-038",
        "bank-Q12-039",
        "bank-Q12-040",
        "bank-Q13-003"
      ]
    },
    {
      "id": "N042",
      "title": "美团 · 暑期两轮面试",
      "url": "https://www.nowcoder.com/feed/main/detail/34c35c965d6e45cb99f7bf2ce84eb272",
      "company": "美团",
      "description": "日期与阶段： 3.20、3.21；评论显示 2025 年。 可读范围： 搜索可见题目。",
      "questionIds": [
        "bank-Q06-004",
        "bank-Q08-012",
        "bank-Q09-004",
        "bank-Q13-038",
        "bank-Q02-004",
        "bank-Q09-005",
        "bank-Q13-013",
        "bank-Q13-014"
      ]
    },
    {
      "id": "N043",
      "title": "同程 · 2026 届秋招面经",
      "url": "https://www.nowcoder.com/feed/main/detail/839ed2e962c845699980f2e755690881",
      "company": "同程",
      "description": "日期与阶段： 2026 届；文中投递和笔试为 2025 年。 可读范围： 搜索可见题目。\n采集说明： 校招届别不等于面试发生年份。",
      "questionIds": [
        "bank-Q02-013",
        "bank-Q03-010",
        "bank-Q05-013",
        "bank-Q01-019",
        "bank-Q01-027"
      ]
    },
    {
      "id": "N044",
      "title": "字节跳动 · 生活服务实习一面",
      "url": "https://www.nowcoder.com/discuss/719556376619470848",
      "company": "字节跳动",
      "description": "日期与阶段： 26 届实习；具体日未核实。 可读范围： 搜索可见题目。",
      "questionIds": [
        "bank-Q04-009",
        "bank-Q12-002",
        "bank-Q01-006",
        "bank-Q01-015",
        "bank-Q13-005"
      ]
    },
    {
      "id": "N045",
      "title": "字节跳动 · 互联网金融 Java 社招",
      "url": "https://www.nowcoder.com/discuss/807594637094318080",
      "company": "字节跳动",
      "description": "日期与阶段： 2025-10；社招补充。 可读范围： 搜索可见题目。\n采集说明： 社招样本只作进阶补充，不冒充秋招校招轮次。",
      "questionIds": [
        "bank-Q08-005",
        "bank-Q12-002",
        "bank-Q08-009"
      ]
    },
    {
      "id": "N046",
      "title": "美团 · 点评一面、二面",
      "url": "https://www.nowcoder.com/discuss/479217744458592256",
      "company": "美团",
      "description": "日期与阶段： 标题含 3.15、3.22；年份未可靠核实。 可读范围： 搜索可见题目。",
      "questionIds": [
        "bank-Q02-013",
        "bank-Q07-005",
        "bank-Q09-017",
        "bank-Q03-022",
        "bank-Q06-012",
        "bank-Q06-014",
        "bank-Q08-002",
        "bank-Q03-002",
        "bank-Q12-003",
        "bank-Q06-017",
        "bank-Q06-018",
        "bank-Q12-009",
        "bank-Q03-024",
        "bank-Q12-010",
        "bank-Q13-048"
      ]
    },
    {
      "id": "N047",
      "title": "网易 · Java 一面",
      "url": "https://www.nowcoder.com/discuss/730083237267013632",
      "company": "网易",
      "description": "日期与阶段： 2025-03-14 发布（检索可见）。 可读范围： 搜索可见题目。\n采集说明： Trie 与表建模仅有部分上下文，本轮未补完整答案，未计入。",
      "questionIds": [
        "bank-Q06-003",
        "bank-Q13-024",
        "bank-Q13-038"
      ]
    },
    {
      "id": "N048",
      "title": "熙牛医疗 · Java 面试 3.17",
      "url": "https://www.nowcoder.com/feed/main/detail/dbedca89a2e64c89a2de0bc6b54c40d7",
      "company": "熙牛医疗",
      "description": "日期与阶段： 3.17；年份未核实。 可读范围： 搜索可见题目。\n采集说明： EasyExcel 跨行合并问题未计入已回答题数。",
      "questionIds": [
        "bank-Q02-005",
        "bank-Q03-011",
        "bank-Q03-022",
        "bank-Q12-013",
        "bank-Q03-015",
        "bank-Q09-025",
        "bank-Q03-024"
      ]
    },
    {
      "id": "N049",
      "title": "熙牛医疗 · Java 实习面经（历史）",
      "url": "https://www.nowcoder.com/discuss/599352021463863296",
      "company": "熙牛医疗",
      "description": "日期与阶段： 2024-03-18 发布。 可读范围： 搜索可见题目。\n采集说明： 永久代等旧概念按 JVM 章版本说明纠正。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q04-001",
        "bank-Q06-015",
        "bank-Q02-005",
        "bank-Q05-002",
        "bank-Q05-031",
        "bank-Q06-014",
        "bank-Q01-019",
        "bank-Q01-027",
        "bank-Q04-024",
        "bank-Q06-003",
        "bank-Q06-017",
        "bank-Q06-018",
        "bank-Q02-001"
      ]
    },
    {
      "id": "N050",
      "title": "小米 · Java 日常实习一面",
      "url": "https://www.nowcoder.com/feed/main/detail/cfba4ee1a29b49a78ec36a41d250a9a5",
      "company": "小米",
      "description": "日期与阶段： 2024-03-04；历史实习。 可读范围： 搜索可见题目。",
      "questionIds": [
        "bank-Q13-003",
        "bank-Q05-011",
        "bank-Q02-005",
        "bank-Q05-002",
        "bank-Q05-008",
        "bank-Q05-010"
      ]
    },
    {
      "id": "N051",
      "title": "京东 · 京东一面、二面",
      "url": "https://www.nowcoder.com/discuss/867080660010266624",
      "company": "京东",
      "description": "03-27 发布；年份未核实。二面主要实习与性格交流，未将未给题干的交流虚构成新题。",
      "questionIds": [
        "bank-JX005",
        "bank-Q03-002",
        "bank-Q03-025",
        "bank-Q03-028",
        "bank-Q05-013",
        "bank-Q05-016",
        "bank-Q12-002"
      ]
    },
    {
      "id": "N052",
      "title": "快手 · 日常实习二面 8.29",
      "url": "https://www.nowcoder.com/discuss/791256786966708224",
      "company": "快手",
      "description": "2025-08-29 面试，08-30 发布。CPU×2、队列1000不能照抄；CallerRunsPolicy 与验证码原子消费为明确标注的延展。",
      "questionIds": [
        "bank-JX001",
        "bank-JX002",
        "bank-JX003",
        "bank-JX004",
        "bank-JX005",
        "bank-JX006",
        "bank-JX018",
        "bank-Q09-017",
        "bank-Q11-020",
        "bank-Q13-021",
        "bank-Q01-002",
        "bank-Q03-035",
        "bank-Q03-013",
        "bank-Q07-008",
        "bank-Q04-003",
        "bank-Q01-037",
        "bank-Q04-005",
        "bank-Q01-022",
        "bank-Q03-023",
        "bank-Q02-023",
        "bank-Q12-013",
        "bank-Q04-010"
      ]
    },
    {
      "id": "N053",
      "title": "小鹅通 · 后端一面（作者附答案）",
      "url": "https://www.nowcoder.com/discuss/726200276062924800",
      "company": "小鹅通",
      "description": "2025-03-03 发布。只归纳题目并独立作答；原帖答案结合工具和第三方资料整理。SQL成绩题未补齐，不计入。",
      "questionIds": [
        "bank-JX018",
        "bank-JX019",
        "bank-Q09-017",
        "bank-Q08-007",
        "bank-Q12-003",
        "bank-Q06-002",
        "bank-Q06-026",
        "bank-Q06-010",
        "bank-Q12-008",
        "bank-Q11-026"
      ]
    },
    {
      "id": "N054",
      "title": "货拉拉 · 2024–2025 面经记录",
      "url": "https://www.nowcoder.com/discuss/720340603761881088",
      "company": "货拉拉",
      "description": "2025-02-15 发布；正文面试为 2024-10-10/12 和 2024-03-26/29。一帖含多个部门与轮次，按一个来源计；含大数据平台岗，只抽 Java 后端相关部分。",
      "questionIds": [
        "bank-JX013",
        "bank-JX014",
        "bank-JX015",
        "bank-JX016",
        "bank-Q03-004",
        "bank-Q04-030",
        "bank-Q05-025",
        "bank-Q06-004",
        "bank-Q07-005",
        "bank-Q08-004",
        "bank-Q05-011",
        "bank-Q06-015",
        "bank-Q07-021",
        "bank-Q02-005",
        "bank-Q03-011",
        "bank-Q03-022",
        "bank-Q05-002",
        "bank-Q06-012",
        "bank-Q06-014",
        "bank-Q06-034",
        "bank-Q09-003",
        "bank-Q04-013",
        "bank-Q04-014",
        "bank-Q09-004",
        "bank-Q04-005",
        "bank-Q03-015",
        "bank-Q04-017",
        "bank-Q02-008",
        "bank-Q13-024",
        "bank-Q02-009",
        "bank-Q02-002",
        "bank-Q13-022",
        "bank-Q01-010",
        "bank-Q04-006",
        "bank-Q05-006",
        "bank-Q04-025"
      ]
    },
    {
      "id": "N055",
      "title": "网易 · 后端开发面试题解析",
      "url": "https://www.nowcoder.com/feed/main/detail/a328338744504b409164a8b7c837aaf6",
      "company": "网易",
      "description": "2025-09-05。标题为面试题解析，无法独立核实是否第一手经历；按可见题目归纳。",
      "questionIds": [
        "bank-JX020",
        "bank-Q04-001",
        "bank-Q08-004",
        "bank-Q11-009",
        "bank-Q05-011",
        "bank-Q07-021",
        "bank-Q11-036",
        "bank-Q02-005",
        "bank-Q03-022",
        "bank-Q06-014",
        "bank-Q07-009",
        "bank-Q11-017",
        "bank-Q11-032",
        "bank-Q06-009",
        "bank-Q08-001",
        "bank-Q11-035",
        "bank-Q11-031",
        "bank-Q11-005",
        "bank-Q09-009",
        "bank-Q09-022",
        "bank-Q09-023",
        "bank-Q11-029"
      ]
    },
    {
      "id": "N056",
      "title": "阿里 · 淘天研发工程师 Java 一面 8.22",
      "url": "https://www.nowcoder.com/feed/main/detail/70d920379c9b46e9adde80bc1fe6bc88",
      "company": "阿里",
      "description": "2025-08-22 面试；列表页显示 2025-08-26 编辑。已从话题页定位并读取详情，不将列表页另计成一个来源。",
      "questionIds": [
        "bank-JX017",
        "bank-Q09-001",
        "bank-Q05-008",
        "bank-Q06-012",
        "bank-Q12-002",
        "bank-Q12-003",
        "bank-Q04-017",
        "bank-Q11-013",
        "bank-Q05-001",
        "bank-Q04-025",
        "bank-Q05-026"
      ]
    },
    {
      "id": "R001",
      "company": "BIGO",
      "title": "BIGO · R001（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r001",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX004",
        "bank-LX006",
        "bank-LX007",
        "bank-LX008",
        "bank-LX009",
        "bank-LX010",
        "bank-LX011",
        "bank-LX042"
      ]
    },
    {
      "id": "R002",
      "company": "金证股份",
      "title": "金证股份 · R002（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r002",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX012",
        "bank-LX013",
        "bank-LX014",
        "bank-LX017",
        "bank-LX018",
        "bank-LX019"
      ]
    },
    {
      "id": "R003",
      "company": "传音控股",
      "title": "传音控股 · R003（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r003",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX023",
        "bank-LX027"
      ]
    },
    {
      "id": "R004",
      "company": "多益网络",
      "title": "多益网络 · R004（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r004",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX036"
      ]
    },
    {
      "id": "R005",
      "company": "多益网络",
      "title": "多益网络 · R005（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r005",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX015",
        "bank-LX016"
      ]
    },
    {
      "id": "R007",
      "company": "去哪儿",
      "title": "去哪儿 · R007（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r007",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX021",
        "bank-LX022",
        "bank-LX027"
      ]
    },
    {
      "id": "R009",
      "company": "广东元海",
      "title": "广东元海 · R009（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r009",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX028",
        "bank-LX033",
        "bank-LX035"
      ]
    },
    {
      "id": "R011",
      "company": "阿里",
      "title": "阿里 · R011（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r011",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX010",
        "bank-LX012",
        "bank-LX024",
        "bank-LX025",
        "bank-LX026",
        "bank-LX027",
        "bank-LX028"
      ]
    },
    {
      "id": "R012",
      "company": "益普科技",
      "title": "益普科技 · R012（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r012",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX019",
        "bank-LX020",
        "bank-LX027"
      ]
    },
    {
      "id": "R013",
      "company": "陌陌",
      "title": "陌陌 · R013（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r013",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX005",
        "bank-LX034",
        "bank-LX035"
      ]
    },
    {
      "id": "R014",
      "company": "维他奶",
      "title": "维他奶 · R014（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r014",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX027"
      ]
    },
    {
      "id": "R015",
      "company": "XTransfer",
      "title": "XTransfer · R015（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r015",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX037",
        "bank-LX039"
      ]
    },
    {
      "id": "R016",
      "company": "得物",
      "title": "得物 · R016（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r016",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX008",
        "bank-LX012",
        "bank-LX035",
        "bank-LX041"
      ]
    },
    {
      "id": "R017",
      "company": "得物",
      "title": "得物 · R017（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r017",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX040"
      ]
    },
    {
      "id": "R018",
      "company": "拼多多",
      "title": "拼多多 · R018（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r018",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX001",
        "bank-LX002",
        "bank-LX003",
        "bank-LX038"
      ]
    },
    {
      "id": "R019",
      "company": "去哪儿",
      "title": "去哪儿 · R019（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r019",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX010",
        "bank-LX028",
        "bank-LX030",
        "bank-LX031",
        "bank-LX032"
      ]
    },
    {
      "id": "R020",
      "company": "腾讯",
      "title": "腾讯 · R020（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r020",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX011"
      ]
    },
    {
      "id": "OPT-S01",
      "title": "Java 21 List API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX001"
      ]
    },
    {
      "id": "OPT-S02",
      "title": "Java 21 Collectors API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX002"
      ]
    },
    {
      "id": "OPT-S03",
      "title": "Spring @Configuration 与 Bean 方法",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX003"
      ]
    },
    {
      "id": "OPT-S04",
      "title": "Java 21 CompletableFuture API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX004"
      ]
    },
    {
      "id": "OPT-S05",
      "title": "MySQL 8.4 TRUNCATE TABLE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ]
    },
    {
      "id": "OPT-S06",
      "title": "MySQL 8.4 CREATE INDEX：唯一键与 NULL",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/create-index.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX006"
      ]
    },
    {
      "id": "OPT-S07",
      "title": "Redis SET：过期设置与 KEEPTTL",
      "url": "https://redis.io/docs/latest/commands/set/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX007"
      ]
    },
    {
      "id": "OPT-S08",
      "title": "WHATWG Server-sent Events",
      "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX008",
        "bank-UX009"
      ]
    },
    {
      "id": "OPT-S09",
      "title": "Nginx HTTP Proxy：缓冲与读取超时",
      "url": "https://nginx.org/en/docs/http/ngx_http_proxy_module.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX009"
      ]
    },
    {
      "id": "OPT-S10",
      "title": "Docker：容器基础",
      "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX010"
      ]
    },
    {
      "id": "OPT-S11",
      "title": "Docker：Volumes",
      "url": "https://docs.docker.com/engine/storage/volumes/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX010"
      ]
    },
    {
      "id": "OPT-S12",
      "title": "Docker：Networking",
      "url": "https://docs.docker.com/engine/network/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX011"
      ]
    },
    {
      "id": "OPT-S13",
      "title": "Flyway：Versioned migrations",
      "url": "https://documentation.red-gate.com/flyway/flyway-concepts/migrations/versioned-migrations",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX012"
      ]
    },
    {
      "id": "OPT-S14",
      "title": "Spring AI：AI Concepts",
      "url": "https://docs.spring.io/spring-ai/reference/concepts.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX013"
      ]
    },
    {
      "id": "OPT-S15",
      "title": "Spring AI：Embedding Models",
      "url": "https://docs.spring.io/spring-ai/reference/api/embeddings.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX014"
      ]
    },
    {
      "id": "OPT-S16",
      "title": "Cohere：Rerank 概念",
      "url": "https://docs.cohere.com/docs/rerank-overview",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX014"
      ]
    },
    {
      "id": "OPT-S17",
      "title": "OWASP：LLM Prompt Injection Prevention",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX015",
        "bank-UX017"
      ]
    },
    {
      "id": "OPT-S18",
      "title": "MCP 2025-06-18：Tools",
      "url": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX016"
      ]
    },
    {
      "id": "OPT-S19",
      "title": "Spring AI：Tool Calling",
      "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX016"
      ]
    },
    {
      "id": "OPT-S20",
      "title": "Spring AI：Vector Databases",
      "url": "https://docs.spring.io/spring-ai/reference/api/vectordbs.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX017",
        "bank-UX018"
      ]
    },
    {
      "id": "OPT-S21",
      "title": "Spring AI：ChatClient",
      "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX018"
      ]
    },
    {
      "id": "OPT-S22",
      "title": "LeetCode 1143：Longest Common Subsequence（题意）",
      "url": "https://leetcode.com/problems/longest-common-subsequence/description/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX019"
      ]
    },
    {
      "id": "OPT-S23",
      "title": "LeetCode 88：Merge Sorted Array（题意）",
      "url": "https://leetcode.com/problems/merge-sorted-array/description/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX020"
      ]
    },
    {
      "id": "OPT-S24",
      "title": "MySQL 8.4：隐式提交语句",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ]
    },
    {
      "id": "OPT-S25",
      "title": "MySQL 8.4：DELETE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/delete.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ]
    },
    {
      "id": "OPT-S26",
      "title": "Spring Configuration API：proxyBeanMethods",
      "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX003"
      ]
    },
    {
      "id": "NI001",
      "company": "招银网络科技",
      "title": "招银网络科技 · 9.10 招银网络科技一面",
      "url": "https://www.nowcoder.com/discuss/927652240695783424",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-10 19:59 已编辑；实际面试：9.10（原帖仅月日）。\n阶段：后端一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：JVM与Full GC、并发Map、CAS与锁、索引与隔离级别、设计模式、缓存、HTTPS、Kafka顺序、区间反转链表。\n边界：页面评论的年份不作为面试年份证明。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q02-010",
        "bank-Q02-013",
        "bank-Q03-009",
        "bank-Q03-012",
        "bank-Q03-013",
        "bank-Q04-002",
        "bank-Q04-009",
        "bank-Q04-011",
        "bank-Q06-002",
        "bank-Q06-004",
        "bank-Q06-007",
        "bank-Q06-014",
        "bank-Q07-016",
        "bank-Q08-006",
        "bank-Q09-014",
        "bank-Q13-045"
      ]
    },
    {
      "id": "NI002",
      "company": "招银网络科技",
      "title": "招银网络科技 · 招银网络科技9.11 一面",
      "url": "https://www.nowcoder.com/discuss/927904695018885120",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 12:41；实际面试：9.11（原帖仅月日）。\n阶段：后端一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：Redis结构与锁、海量key按前缀查找、缓存异常、SQL优化、Integer比较、CPU定位、字符串提取数字。\n边界：提取数字题缺少输入输出规则，只附明确假设的练习版本。",
      "questionIds": [
        "bank-Q01-009",
        "bank-Q04-023",
        "bank-Q06-012",
        "bank-Q07-002",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-021",
        "bank-RM001"
      ]
    },
    {
      "id": "NI003",
      "company": "招银网络科技",
      "title": "招银网络科技 · 9.11招银网科秋招一面",
      "url": "https://www.nowcoder.com/feed/main/detail/ce64c8083f5348f8ac5942bf7b18bc6c",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 15:40；实际面试：9.11（原帖仅月日）。\n阶段：秋招一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：越权、缓存雪崩、GC、HTTPS与DNS、Kafka、B+树与慢SQL、日志归档、批量导入、线程池、合并区间。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q03-022",
        "bank-Q03-023",
        "bank-Q04-009",
        "bank-Q06-004",
        "bank-Q06-009",
        "bank-Q06-012",
        "bank-Q06-035",
        "bank-Q07-017",
        "bank-Q08-005",
        "bank-Q08-012",
        "bank-Q08-013",
        "bank-Q08-017",
        "bank-Q09-014",
        "bank-Q09-016",
        "bank-RM029",
        "bank-Q12-007",
        "bank-Q12-015",
        "bank-Q13-007"
      ]
    },
    {
      "id": "NI004",
      "company": "招银网络科技",
      "title": "招银网络科技 · 招银网络科技一面",
      "url": "https://www.nowcoder.com/feed/main/detail/dc3f036646d14a0083b5175335ba365b",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 15:53；实际面试：9.11（正文仅月日）。\n阶段：秋招一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：动态代理、单例、SSE与WebSocket、虚拟线程、慢SQL、静态字段注入、Controller绑定、Redis锁与降级、RAG局限。",
      "questionIds": [
        "bank-Q01-023",
        "bank-RM038",
        "bank-Q03-033",
        "bank-Q05-023",
        "bank-RM004",
        "bank-Q06-012",
        "bank-Q07-021",
        "bank-Q07-023",
        "bank-Q09-020",
        "bank-Q11-006",
        "bank-Q12-031"
      ]
    },
    {
      "id": "NI005",
      "company": "携程",
      "title": "携程 · 携程后端一面",
      "url": "https://www.nowcoder.com/discuss/927876861525258240",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 10:51；实际面试：未写实际面试日。\n阶段：后端一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：RAG目标与评测、文档解析和切分、摘要触发、秒杀压测、Redis库存拆分、AI编码、每k个节点反转。\n边界：链表题为口述；正文未明确从尾分组，本包采用从头分组的练习题，并说明尾部不足k个的处理。",
      "questionIds": [
        "bank-Q12-031",
        "bank-Q07-013",
        "bank-Q11-009",
        "bank-Q11-027",
        "bank-RM015",
        "bank-Q12-003",
        "bank-LX010",
        "bank-LX026",
        "bank-LX027",
        "bank-RM012",
        "bank-RM013",
        "bank-RM031"
      ]
    },
    {
      "id": "NI006",
      "company": "携程",
      "title": "携程 · 携程一面-后端agent开发",
      "url": "https://www.nowcoder.com/feed/main/detail/d1f7488986444f50b9bd99894cd7cbf5",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 16:58；实际面试：未写实际面试日。\n阶段：后端Agent一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：实习、AI代码质量、count++丢更新的交错过程、字符串引用比较、URL协议分层、HTTP头是否必要。\n边界：与9月12日另一作者的同题题解合并，优先保留较早的题目记录；String变量完整声明缺失，不臆断原程序输出。",
      "questionIds": [
        "bank-Q12-007",
        "bank-Q01-013",
        "bank-Q03-007",
        "bank-Q09-001",
        "bank-RM033",
        "bank-LX027"
      ]
    },
    {
      "id": "NI007",
      "company": "美团",
      "title": "美团 · 美团AI后端一面9.10",
      "url": "https://www.nowcoder.com/discuss/927579574932705280",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 10:50 已编辑；实际面试：9.10（正文仅月日）。\n阶段：AI后端一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：故障诊断Skill、路由与幻觉、视频分片与RPC幂等、RAG定位、Agent边界、Harness与Hooks、三级缓存、线程池、树层序。\n边界：工程案例以原作者项目为背景，不写成用户本人已落地。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q04-009",
        "bank-Q12-031",
        "bank-LX027",
        "bank-Q03-025",
        "bank-Q11-041",
        "bank-RM011",
        "bank-Q12-001",
        "bank-Q12-004",
        "bank-Q12-005",
        "bank-Q12-024",
        "bank-Q12-025",
        "bank-Q12-034",
        "bank-UX014",
        "bank-Q12-033",
        "bank-Q12-038",
        "bank-RM016",
        "bank-RM017",
        "bank-Q13-025"
      ]
    },
    {
      "id": "NI008",
      "company": "美团",
      "title": "美团 · 美团容器平台JAVA开发",
      "url": "https://www.nowcoder.com/feed/main/detail/91e3b76eabd140bdbed20dc43724b396",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 11:41 已编辑；实际面试：一面9.2；二面9.7；结果9.12（正文仅月日）。\n阶段：实习面试；一面技术题为主。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：数据库诊断、MVCC、Redis热点、MQ双写、CAP、服务发现、MCP权限与会话、RAG版本、Controller审查、K8s。\n边界：作者称一面前15分钟未录到；二面题目不完整，不填造代码题。 K8s仅为泛问，未据此虚构具体Pod调度原题。",
      "questionIds": [
        "bank-Q02-010",
        "bank-Q06-012",
        "bank-Q06-014",
        "bank-Q08-005",
        "bank-Q12-031",
        "bank-LX027",
        "bank-Q05-007",
        "bank-Q06-015",
        "bank-Q06-020",
        "bank-Q07-026",
        "bank-Q07-006",
        "bank-Q08-001",
        "bank-Q08-010",
        "bank-Q11-003",
        "bank-Q11-031",
        "bank-Q11-035",
        "bank-UX016",
        "bank-RM009",
        "bank-RM010",
        "bank-RM014"
      ]
    },
    {
      "id": "NI009",
      "company": "拼多多",
      "title": "拼多多 · 9.12 pdd线下 一二三四面",
      "url": "https://www.nowcoder.com/feed/main/detail/9c22ace032b44a1b8ab1b8f47c96b10e",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 20:10 已编辑；实际面试：9.12（标题仅月日）。\n阶段：线下面试，含HR轮。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：拓扑排序变体、Agent记忆、数据库、密码与JWT、TCP、mmap、路由匹配、HNSW、有序数组去重。\n边界：四轮中包含HR轮，不称四轮技术面；树路径、路由通配符和Git题意不全，只登记缺失条件。 结构体对齐属于跨语言内容，此次没有把它改成Java原题。",
      "questionIds": [
        "bank-Q12-005",
        "bank-Q12-025",
        "bank-Q04-021",
        "bank-Q09-004",
        "bank-Q09-017",
        "bank-Q09-023",
        "bank-RM020",
        "bank-LX030",
        "bank-RM035",
        "bank-Q13-030",
        "bank-RM030"
      ]
    },
    {
      "id": "NI010",
      "company": "拼多多",
      "title": "拼多多 · 拼多多9.12正式批南京一面",
      "url": "https://www.nowcoder.com/feed/main/detail/912ae02efb854c5c99b763c8cd200a99",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：列表：昨天 22:52；实际面试：9.12（标题仅月日）。\n阶段：正式批后端一面。读取范围：仅列表公开摘要。日期等级：B。\n可见考点概括：拓扑排序、Agent项目、模型参数与精度及MoE、Spring Boot/AOP、索引未被选中。\n边界：详情页未成功返回正文；只使用Java面经列表公开摘要，不能视为全文。",
      "questionIds": [
        "bank-Q06-009",
        "bank-Q12-001",
        "bank-Q05-001",
        "bank-Q05-011",
        "bank-RM036",
        "bank-Q13-030"
      ]
    },
    {
      "id": "NI011",
      "company": "BIGO",
      "title": "BIGO · Bigo后端一面",
      "url": "https://www.nowcoder.com/feed/main/detail/329b5bc5a7fc44c89fad3631d028aeff",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 07:36；实际面试：未写实际面试日。\n阶段：秋招后端一面。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：HashMap与锁、ThreadLocal键设计、阻塞队列、GC与死锁、TCP、缓存覆盖竞态、SSE/MCP、内网Agent、ABC交替。",
      "questionIds": [
        "bank-Q02-010",
        "bank-Q02-013",
        "bank-Q03-012",
        "bank-Q03-022",
        "bank-Q03-023",
        "bank-Q09-020",
        "bank-Q09-001",
        "bank-Q12-003",
        "bank-RM010",
        "bank-Q02-005",
        "bank-Q02-009",
        "bank-RM003",
        "bank-Q03-010",
        "bank-Q03-017",
        "bank-Q03-020",
        "bank-RM032",
        "bank-RM002",
        "bank-Q04-001",
        "bank-Q04-010",
        "bank-Q04-028",
        "bank-Q07-019",
        "bank-Q09-005",
        "bank-Q09-006",
        "bank-Q12-028"
      ]
    },
    {
      "id": "NI012",
      "company": "得物",
      "title": "得物 · 得物Java二面",
      "url": "https://www.nowcoder.com/feed/main/detail/13fb5808e2fe4bb8b2117b6470dcb261",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 18:15 已编辑；实际面试：未写实际面试日。\n阶段：Java二面。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：首页延迟优化、权限计算与缓存、AI贯穿研发流程、项目困难与产出、Agent/MCP。\n边界：作者给出的1.5s、800ms是其项目背景，不是本用户的性能数据。",
      "questionIds": [
        "bank-Q12-007",
        "bank-LX027",
        "bank-Q12-025",
        "bank-Q12-028",
        "bank-Q11-001",
        "bank-RM037",
        "bank-Q12-008"
      ]
    },
    {
      "id": "NI013",
      "company": "腾讯",
      "title": "腾讯 · 腾讯WXG后台秋招一面",
      "url": "https://www.nowcoder.com/feed/main/detail/e2ab13283cbe47e8859c8280e3e5ad96",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：今天 02:55；实际面试：正文说两三周前；不把发帖日当面试日。\n阶段：WXG秋招一面。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：算法片段、哈希与加密及签名、SQL注入、数据库基础、AI协作。\n边界：球题、特殊树题、差1子序列均缺条件；不生成假原题。",
      "questionIds": [
        "bank-LX027",
        "bank-Q05-031",
        "bank-RM034"
      ]
    },
    {
      "id": "NI014",
      "company": "腾讯",
      "title": "腾讯 · 腾讯WXG后端一二面日常实习",
      "url": "https://www.nowcoder.com/feed/main/detail/8a21555d1a9947e3a45ced76ef586c29",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 23:45 已编辑；实际面试：技术面9.1、9.4（正文仅月日）。\n阶段：日常实习，两轮技术面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：LRU变体、通信安全、离线付款设计讨论、MySQL/PostgreSQL、Go/Java选型、项目表与键、AI与学习。\n边界：LRU只附标准版，未知变体不补写；离线付款仅给一般系统设计边界，不宣称微信当前具体产品能力。",
      "questionIds": [
        "bank-Q09-014",
        "bank-Q12-003",
        "bank-LX027",
        "bank-Q12-005",
        "bank-RM034",
        "bank-RM040",
        "bank-RM039",
        "bank-Q13-021"
      ]
    },
    {
      "id": "NI015",
      "company": "腾讯",
      "title": "腾讯 · 腾讯IEG运开面经",
      "url": "https://www.nowcoder.com/feed/main/detail/233455fc26174a98955784a653c8cd4a",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 09:19；实际面试：未写实际面试日。\n阶段：运开／Go背景，后端通用拓展。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：排序与哈希、数据库索引、Redis与布隆过滤器、Kafka组、网络、IPC/cgroups、Pod调度与命名空间。\n边界：Go语法细节不改编成Java原题；本包筛选可迁移后端与K8s考点。",
      "questionIds": [
        "bank-Q07-002",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q08-012",
        "bank-Q09-001",
        "bank-Q07-006",
        "bank-Q02-005",
        "bank-Q06-005",
        "bank-Q07-008",
        "bank-RM021",
        "bank-LX039",
        "bank-Q09-003",
        "bank-Q09-008",
        "bank-Q10-004",
        "bank-RM022",
        "bank-RM023",
        "bank-Q13-038"
      ]
    },
    {
      "id": "NI016",
      "company": "滴滴",
      "title": "滴滴 · 滴滴秋招后端一面",
      "url": "https://www.nowcoder.com/feed/main/detail/4b2ea79abe59488cbd845a4eb00bfbb7",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 14:15；实际面试：未写实际面试日。\n阶段：秋招后端一面；作者为Go背景。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：实习贡献与难点、AI提效落地、数据库索引事务锁、接口优化幂等、Redis锁与集群。",
      "questionIds": [
        "bank-Q07-021",
        "bank-Q12-007",
        "bank-Q07-013",
        "bank-LX027",
        "bank-Q12-008",
        "bank-Q06-003",
        "bank-Q06-013",
        "bank-Q06-018",
        "bank-Q11-011",
        "bank-Q12-002"
      ]
    },
    {
      "id": "NI017",
      "company": "深轻科技",
      "title": "深轻科技 · 9.9 深轻科技---Java后端方向（一面）",
      "url": "https://www.nowcoder.com/discuss/927618502473547776",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-10 17:44；实际面试：9.9（标题仅月日）。\n阶段：Java后端一面。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：集合、Redis、Boot启动、分库分表、Disruptor、线程池、锁、JVM、密码存储、WebSocket、RabbitMQ。",
      "questionIds": [
        "bank-Q02-010",
        "bank-Q03-012",
        "bank-Q06-004",
        "bank-Q07-002",
        "bank-Q09-020",
        "bank-Q04-021",
        "bank-RM020",
        "bank-Q04-001",
        "bank-Q03-024",
        "bank-Q01-010",
        "bank-Q02-002",
        "bank-RM007",
        "bank-Q05-028",
        "bank-Q06-021",
        "bank-Q06-034",
        "bank-Q08-002"
      ]
    },
    {
      "id": "NI018",
      "company": "实在智能",
      "title": "实在智能 · 2026.7.9 实在智能Java开发面经",
      "url": "https://www.nowcoder.com/feed/main/detail/06595dc27127476c9b544d20eb99cfe8",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：08-25 15:15 已编辑；实际面试：2026-07-09（标题明确完整日期）。\n阶段：Java开发面试，批次未明确。读取范围：正文题目区可读。日期等级：A。\n可见考点概括：HashMap源码、框架源码经验、Docker/K8s、日志、表设计与JOIN、深分页与回表、游标和排序不匹配、AI编码。\n边界：本包少量较早补充；不能用8月页面更新日期把7月面试说成8月新面试。",
      "questionIds": [
        "bank-Q02-010",
        "bank-LX027",
        "bank-Q12-005",
        "bank-Q06-005",
        "bank-Q02-006",
        "bank-Q06-006",
        "bank-Q06-027",
        "bank-Q06-032",
        "bank-RM024",
        "bank-UX010",
        "bank-Q12-016",
        "bank-Q12-018"
      ]
    },
    {
      "id": "NI019",
      "company": "新蛋",
      "title": "新蛋 · 新蛋Newegg一面",
      "url": "https://www.nowcoder.com/feed/main/detail/acb6147f9ad04249b655880801ece1a0",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 23:50；实际面试：未写实际面试日。\n阶段：后端一面，批次未明确。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：排序稳定性、CHAR/VARCHAR、类加载、集合与并发Map、守护线程、GC、Redis持久化、单元测试。",
      "questionIds": [
        "bank-Q04-009",
        "bank-Q13-038",
        "bank-Q02-001",
        "bank-Q02-012",
        "bank-RM005",
        "bank-Q04-018",
        "bank-RM006",
        "bank-Q07-009",
        "bank-Q12-017"
      ]
    },
    {
      "id": "NI020",
      "company": "新蛋",
      "title": "新蛋 · 新蛋Newegg二面",
      "url": "https://www.nowcoder.com/feed/main/detail/87a7e365d0544f829fdd88ce4b9f5ed5",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 23:41；实际面试：未写实际面试日。\n阶段：后端二面，与NI019同作者。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：Function Calling实现、项目收获、RabbitMQ与幂等、IoC和AOP。\n边界：原帖遗忘的项目追问不补造；仅提到还有三面，不补三面题单。 RabbitMQ与幂等是作者举的收获例子，复习题是围绕该例子展开，不是独立原问句。",
      "questionIds": [
        "bank-Q08-005",
        "bank-Q05-011",
        "bank-Q05-002",
        "bank-Q08-020",
        "bank-Q12-027"
      ]
    },
    {
      "id": "NI021",
      "company": "阿里",
      "title": "阿里（千问／飞猪） · 千问事业部一面 9.7",
      "url": "https://www.nowcoder.com/feed/main/detail/415f38423022461f87767cca1a0d48f2",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 00:02；实际面试：9.7（标题仅月日）。\n阶段：秋招／全栈背景，Java与Agent部分。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：JVM与面向对象、反射和模式、索引、MySQL/Redis、快排、TLS、Agent边界与框架。\n边界：原帖另有RN跨端与训练流程；本包未整理该部分，不当成Java岗位统一要求。随机基准不等于固定取中间元素。",
      "questionIds": [
        "bank-Q01-035",
        "bank-Q06-004",
        "bank-Q12-031",
        "bank-Q12-025",
        "bank-Q05-001",
        "bank-RM039",
        "bank-Q13-038",
        "bank-Q01-001",
        "bank-Q01-002",
        "bank-Q01-021",
        "bank-Q09-015",
        "bank-Q12-032",
        "bank-RM018"
      ]
    },
    {
      "id": "NI022",
      "company": "得物",
      "title": "得物 · 得物一面",
      "url": "https://www.nowcoder.com/feed/main/detail/21a1f8c1bea1472a858ffb7e35ae63c4",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：今天 10:55；实际面试：未写实际面试日。\n阶段：一面，批次未明确。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：拷贝、finally、AOP失效、CallerRuns、阻塞队列、线程池、HashMap冲突、分号器／雪花ID。\n边界：作者回忆“分号器”，按其明确关联的雪花算法准备ID生成；不推测缺失的具体分配规则。",
      "questionIds": [
        "bank-Q02-010",
        "bank-Q03-023",
        "bank-Q02-005",
        "bank-Q01-017",
        "bank-Q01-024",
        "bank-Q02-023",
        "bank-Q03-024",
        "bank-Q05-012",
        "bank-Q11-012"
      ]
    },
    {
      "id": "NI023",
      "company": "未具名公司",
      "title": "未具名公司 · 9.8 小厂 agent开发实习 面经",
      "url": "https://www.nowcoder.com/feed/main/detail/2f4e4cde4e524a16aae5f55a89c49273",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：09-11 11:54；实际面试：9.8（标题仅月日）。\n阶段：Agent开发实习。读取范围：正文题目区可读。日期等级：C。\n可见考点概括：代码图与RAG、项目迭代、框架与Harness、上下文和记忆、开放式评测、Agent主动触发。\n边界：公司未披露；正文小米是作者过往实习，不能误标为小米面经。具体产品名只保留为线索，不臆断版本能力。",
      "questionIds": [
        "bank-Q12-007",
        "bank-Q12-031",
        "bank-RM012",
        "bank-RM016",
        "bank-RM017",
        "bank-LX030",
        "bank-RM018",
        "bank-RM019"
      ]
    },
    {
      "id": "NI024",
      "company": "即时设计",
      "title": "即时设计 · 即时设计 Java后端社招二面",
      "url": "https://www.nowcoder.com/discuss/928253869648248832",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 11:49；实际面试：未写实际面试日。\n阶段：社招二面，进阶拓展。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：高并发读、缓存一致性、事务后回调、Tomcat参数与网络队列、并行取最大值、索引、OOM、长视频任务、幂等、奇偶交替。\n边界：社招独立标记，不冒充校招；视频任务解法为本包参考设计。",
      "questionIds": [
        "bank-Q04-002",
        "bank-Q06-009",
        "bank-Q08-005",
        "bank-Q09-001",
        "bank-Q04-021",
        "bank-Q07-019",
        "bank-Q11-001",
        "bank-Q11-011",
        "bank-Q01-010",
        "bank-Q02-012",
        "bank-Q03-006",
        "bank-Q03-035",
        "bank-RM025",
        "bank-Q05-014",
        "bank-Q05-020",
        "bank-RM008",
        "bank-Q06-010",
        "bank-RM026"
      ]
    },
    {
      "id": "NI025",
      "company": "阿里",
      "title": "阿里（千问／飞猪） · 飞猪-智能客服 Java后端社招一面",
      "url": "https://www.nowcoder.com/discuss/928250697634545664",
      "description": "检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n页面日期：昨天 11:36；实际面试：未写实际面试日。\n阶段：社招一面，进阶拓展。读取范围：正文题目区可读。日期等级：B。\n可见考点概括：平台化成本与可靠性、时效消息、RPC注册发现与重启、OOM/GC、并发分配、链表合并、LRU。\n边界：与千问分开标轮次和招聘阶段，合并文件仅为公司集团归档。",
      "questionIds": [
        "bank-Q12-003",
        "bank-Q11-035",
        "bank-Q04-021",
        "bank-Q04-028",
        "bank-Q13-021",
        "bank-Q04-003",
        "bank-Q04-005",
        "bank-RM027",
        "bank-Q11-017",
        "bank-RM028",
        "bank-Q13-014"
      ]
    }
  ],
  "supplements": [
    {
      "id": "company-2026-09-08",
      "companies": 25,
      "sources": 56,
      "companyEntries": 633,
      "uniqueCompanyQuestions": 282,
      "standaloneQuestions": 6,
      "questionIds": [
        "bank-JX001",
        "bank-JX002",
        "bank-JX003",
        "bank-JX004",
        "bank-JX005",
        "bank-JX006",
        "bank-JX007",
        "bank-JX008",
        "bank-JX009",
        "bank-JX010",
        "bank-JX011",
        "bank-JX012",
        "bank-JX013",
        "bank-JX014",
        "bank-JX015",
        "bank-JX016",
        "bank-JX017",
        "bank-JX018",
        "bank-JX019",
        "bank-JX020",
        "bank-Q01-002",
        "bank-Q01-003",
        "bank-Q01-004",
        "bank-Q01-006",
        "bank-Q01-007",
        "bank-Q01-009",
        "bank-Q01-010",
        "bank-Q01-015",
        "bank-Q01-016",
        "bank-Q01-019",
        "bank-Q01-021",
        "bank-Q01-022",
        "bank-Q01-027",
        "bank-Q01-035",
        "bank-Q01-037",
        "bank-Q01-039",
        "bank-Q01-041",
        "bank-Q01-042",
        "bank-Q02-001",
        "bank-Q02-002",
        "bank-Q02-004",
        "bank-Q02-005",
        "bank-Q02-006",
        "bank-Q02-008",
        "bank-Q02-009",
        "bank-Q02-010",
        "bank-Q02-013",
        "bank-Q02-015",
        "bank-Q02-019",
        "bank-Q02-022",
        "bank-Q02-023",
        "bank-Q02-025",
        "bank-Q02-026",
        "bank-Q03-001",
        "bank-Q03-002",
        "bank-Q03-003",
        "bank-Q03-004",
        "bank-Q03-006",
        "bank-Q03-009",
        "bank-Q03-010",
        "bank-Q03-011",
        "bank-Q03-012",
        "bank-Q03-013",
        "bank-Q03-015",
        "bank-Q03-017",
        "bank-Q03-018",
        "bank-Q03-019",
        "bank-Q03-020",
        "bank-Q03-022",
        "bank-Q03-023",
        "bank-Q03-024",
        "bank-Q03-025",
        "bank-Q03-028",
        "bank-Q03-035",
        "bank-Q03-036",
        "bank-Q03-037",
        "bank-Q04-001",
        "bank-Q04-002",
        "bank-Q04-003",
        "bank-Q04-005",
        "bank-Q04-006",
        "bank-Q04-007",
        "bank-Q04-008",
        "bank-Q04-009",
        "bank-Q04-010",
        "bank-Q04-013",
        "bank-Q04-014",
        "bank-Q04-015",
        "bank-Q04-017",
        "bank-Q04-018",
        "bank-Q04-021",
        "bank-Q04-022",
        "bank-Q04-024",
        "bank-Q04-025",
        "bank-Q04-028",
        "bank-Q04-029",
        "bank-Q04-030",
        "bank-Q04-031",
        "bank-Q04-032",
        "bank-Q05-001",
        "bank-Q05-002",
        "bank-Q05-006",
        "bank-Q05-007",
        "bank-Q05-008",
        "bank-Q05-010",
        "bank-Q05-011",
        "bank-Q05-013",
        "bank-Q05-014",
        "bank-Q05-016",
        "bank-Q05-025",
        "bank-Q05-026",
        "bank-Q05-027",
        "bank-Q05-031",
        "bank-Q05-041",
        "bank-Q05-042",
        "bank-Q05-043",
        "bank-Q06-002",
        "bank-Q06-003",
        "bank-Q06-004",
        "bank-Q06-005",
        "bank-Q06-006",
        "bank-Q06-007",
        "bank-Q06-008",
        "bank-Q06-009",
        "bank-Q06-010",
        "bank-Q06-011",
        "bank-Q06-012",
        "bank-Q06-013",
        "bank-Q06-014",
        "bank-Q06-015",
        "bank-Q06-017",
        "bank-Q06-018",
        "bank-Q06-020",
        "bank-Q06-021",
        "bank-Q06-022",
        "bank-Q06-026",
        "bank-Q06-034",
        "bank-Q06-036",
        "bank-Q06-037",
        "bank-Q07-001",
        "bank-Q07-002",
        "bank-Q07-005",
        "bank-Q07-006",
        "bank-Q07-007",
        "bank-Q07-008",
        "bank-Q07-009",
        "bank-Q07-010",
        "bank-Q07-012",
        "bank-Q07-013",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-018",
        "bank-Q07-019",
        "bank-Q07-020",
        "bank-Q07-021",
        "bank-Q07-022",
        "bank-Q07-024",
        "bank-Q07-026",
        "bank-Q07-028",
        "bank-Q07-031",
        "bank-Q07-032",
        "bank-Q07-033",
        "bank-Q08-001",
        "bank-Q08-002",
        "bank-Q08-004",
        "bank-Q08-005",
        "bank-Q08-006",
        "bank-Q08-007",
        "bank-Q08-008",
        "bank-Q08-009",
        "bank-Q08-012",
        "bank-Q08-026",
        "bank-Q08-027",
        "bank-Q09-001",
        "bank-Q09-002",
        "bank-Q09-003",
        "bank-Q09-004",
        "bank-Q09-005",
        "bank-Q09-006",
        "bank-Q09-007",
        "bank-Q09-008",
        "bank-Q09-009",
        "bank-Q09-014",
        "bank-Q09-015",
        "bank-Q09-016",
        "bank-Q09-017",
        "bank-Q09-018",
        "bank-Q09-020",
        "bank-Q09-022",
        "bank-Q09-023",
        "bank-Q09-024",
        "bank-Q09-025",
        "bank-Q09-026",
        "bank-Q09-027",
        "bank-Q09-028",
        "bank-Q10-001",
        "bank-Q10-003",
        "bank-Q10-004",
        "bank-Q10-006",
        "bank-Q10-010",
        "bank-Q10-011",
        "bank-Q10-024",
        "bank-Q10-026",
        "bank-Q10-027",
        "bank-Q11-001",
        "bank-Q11-005",
        "bank-Q11-009",
        "bank-Q11-010",
        "bank-Q11-011",
        "bank-Q11-012",
        "bank-Q11-013",
        "bank-Q11-017",
        "bank-Q11-018",
        "bank-Q11-019",
        "bank-Q11-020",
        "bank-Q11-021",
        "bank-Q11-026",
        "bank-Q11-027",
        "bank-Q11-029",
        "bank-Q11-030",
        "bank-Q11-031",
        "bank-Q11-032",
        "bank-Q11-034",
        "bank-Q11-035",
        "bank-Q11-036",
        "bank-Q11-037",
        "bank-Q11-038",
        "bank-Q11-039",
        "bank-Q11-040",
        "bank-Q11-041",
        "bank-Q11-042",
        "bank-Q11-043",
        "bank-Q12-001",
        "bank-Q12-002",
        "bank-Q12-003",
        "bank-Q12-004",
        "bank-Q12-005",
        "bank-Q12-007",
        "bank-Q12-008",
        "bank-Q12-009",
        "bank-Q12-010",
        "bank-Q12-013",
        "bank-Q12-015",
        "bank-Q12-017",
        "bank-Q12-019",
        "bank-Q12-025",
        "bank-Q12-028",
        "bank-Q12-031",
        "bank-Q12-033",
        "bank-Q12-034",
        "bank-Q12-035",
        "bank-Q12-036",
        "bank-Q12-037",
        "bank-Q12-038",
        "bank-Q12-039",
        "bank-Q12-040",
        "bank-Q12-041",
        "bank-Q12-042",
        "bank-Q12-043",
        "bank-Q13-003",
        "bank-Q13-004",
        "bank-Q13-005",
        "bank-Q13-011",
        "bank-Q13-013",
        "bank-Q13-014",
        "bank-Q13-021",
        "bank-Q13-022",
        "bank-Q13-024",
        "bank-Q13-025",
        "bank-Q13-026",
        "bank-Q13-030",
        "bank-Q13-031",
        "bank-Q13-034",
        "bank-Q13-038",
        "bank-Q13-039",
        "bank-Q13-041",
        "bank-Q13-042",
        "bank-Q13-043",
        "bank-Q13-044",
        "bank-Q13-045",
        "bank-Q13-046",
        "bank-Q13-047",
        "bank-Q13-048",
        "bank-Q13-049",
        "bank-Q13-050",
        "bank-Q13-051",
        "bank-Q13-052"
      ]
    },
    {
      "id": "lx-2026-09-08",
      "companies": 14,
      "sources": 17,
      "questionIds": [
        "bank-LX001",
        "bank-LX002",
        "bank-LX003",
        "bank-LX004",
        "bank-LX005",
        "bank-LX006",
        "bank-LX007",
        "bank-LX008",
        "bank-LX009",
        "bank-LX010",
        "bank-LX011",
        "bank-LX012",
        "bank-LX013",
        "bank-LX014",
        "bank-LX015",
        "bank-LX016",
        "bank-LX017",
        "bank-LX018",
        "bank-LX019",
        "bank-LX020",
        "bank-LX021",
        "bank-LX022",
        "bank-LX023",
        "bank-LX024",
        "bank-LX025",
        "bank-LX026",
        "bank-LX027",
        "bank-LX028",
        "bank-LX030",
        "bank-LX031",
        "bank-LX032",
        "bank-LX033",
        "bank-LX034",
        "bank-LX035",
        "bank-LX036",
        "bank-LX037",
        "bank-LX038",
        "bank-LX039",
        "bank-LX040",
        "bank-LX041",
        "bank-LX042"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "sha256": "58b781760b02951b59d2d55c00de7907632c443a4407029a8ef2d2a2d3395af6",
      "provenance": "attachment-only",
      "missingQuestionNumbers": [
        "LX029"
      ]
    },
    {
      "id": "recent-interviews-2026-09-13",
      "companies": 14,
      "sources": 25,
      "companyEntries": 286,
      "uniqueCompanyQuestions": 193,
      "questionIds": [
        "bank-LX010",
        "bank-LX026",
        "bank-LX027",
        "bank-LX030",
        "bank-LX039",
        "bank-Q01-001",
        "bank-Q01-002",
        "bank-Q01-009",
        "bank-Q01-010",
        "bank-Q01-013",
        "bank-Q01-017",
        "bank-Q01-021",
        "bank-Q01-023",
        "bank-Q01-024",
        "bank-Q01-035",
        "bank-Q02-001",
        "bank-Q02-002",
        "bank-Q02-005",
        "bank-Q02-006",
        "bank-Q02-009",
        "bank-Q02-010",
        "bank-Q02-012",
        "bank-Q02-013",
        "bank-Q02-023",
        "bank-Q03-006",
        "bank-Q03-007",
        "bank-Q03-009",
        "bank-Q03-010",
        "bank-Q03-012",
        "bank-Q03-013",
        "bank-Q03-017",
        "bank-Q03-020",
        "bank-Q03-022",
        "bank-Q03-023",
        "bank-Q03-024",
        "bank-Q03-025",
        "bank-Q03-033",
        "bank-Q03-035",
        "bank-Q04-001",
        "bank-Q04-002",
        "bank-Q04-003",
        "bank-Q04-005",
        "bank-Q04-009",
        "bank-Q04-010",
        "bank-Q04-011",
        "bank-Q04-018",
        "bank-Q04-021",
        "bank-Q04-023",
        "bank-Q04-028",
        "bank-Q05-001",
        "bank-Q05-002",
        "bank-Q05-007",
        "bank-Q05-011",
        "bank-Q05-012",
        "bank-Q05-014",
        "bank-Q05-020",
        "bank-Q05-023",
        "bank-Q05-028",
        "bank-Q05-031",
        "bank-Q06-002",
        "bank-Q06-003",
        "bank-Q06-004",
        "bank-Q06-005",
        "bank-Q06-006",
        "bank-Q06-007",
        "bank-Q06-009",
        "bank-Q06-010",
        "bank-Q06-012",
        "bank-Q06-013",
        "bank-Q06-014",
        "bank-Q06-015",
        "bank-Q06-018",
        "bank-Q06-020",
        "bank-Q06-021",
        "bank-Q06-027",
        "bank-Q06-032",
        "bank-Q06-034",
        "bank-Q06-035",
        "bank-Q07-002",
        "bank-Q07-006",
        "bank-Q07-008",
        "bank-Q07-009",
        "bank-Q07-013",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-019",
        "bank-Q07-021",
        "bank-Q07-023",
        "bank-Q07-026",
        "bank-Q08-001",
        "bank-Q08-002",
        "bank-Q08-005",
        "bank-Q08-006",
        "bank-Q08-010",
        "bank-Q08-012",
        "bank-Q08-013",
        "bank-Q08-017",
        "bank-Q08-020",
        "bank-Q09-001",
        "bank-Q09-003",
        "bank-Q09-004",
        "bank-Q09-005",
        "bank-Q09-006",
        "bank-Q09-008",
        "bank-Q09-014",
        "bank-Q09-015",
        "bank-Q09-016",
        "bank-Q09-017",
        "bank-Q09-020",
        "bank-Q09-023",
        "bank-Q10-004",
        "bank-Q11-001",
        "bank-Q11-003",
        "bank-Q11-006",
        "bank-Q11-009",
        "bank-Q11-011",
        "bank-Q11-012",
        "bank-Q11-017",
        "bank-Q11-027",
        "bank-Q11-031",
        "bank-Q11-035",
        "bank-Q11-041",
        "bank-Q12-001",
        "bank-Q12-002",
        "bank-Q12-003",
        "bank-Q12-004",
        "bank-Q12-005",
        "bank-Q12-007",
        "bank-Q12-008",
        "bank-Q12-015",
        "bank-Q12-016",
        "bank-Q12-017",
        "bank-Q12-018",
        "bank-Q12-024",
        "bank-Q12-025",
        "bank-Q12-027",
        "bank-Q12-028",
        "bank-Q12-031",
        "bank-Q12-032",
        "bank-Q12-033",
        "bank-Q12-034",
        "bank-Q12-038",
        "bank-Q13-007",
        "bank-Q13-014",
        "bank-Q13-021",
        "bank-Q13-025",
        "bank-Q13-030",
        "bank-Q13-038",
        "bank-Q13-045",
        "bank-RM001",
        "bank-RM002",
        "bank-RM003",
        "bank-RM004",
        "bank-RM005",
        "bank-RM006",
        "bank-RM007",
        "bank-RM008",
        "bank-RM009",
        "bank-RM010",
        "bank-RM011",
        "bank-RM012",
        "bank-RM013",
        "bank-RM014",
        "bank-RM015",
        "bank-RM016",
        "bank-RM017",
        "bank-RM018",
        "bank-RM019",
        "bank-RM020",
        "bank-RM021",
        "bank-RM022",
        "bank-RM023",
        "bank-RM024",
        "bank-RM025",
        "bank-RM026",
        "bank-RM027",
        "bank-RM028",
        "bank-RM029",
        "bank-RM030",
        "bank-RM031",
        "bank-RM032",
        "bank-RM033",
        "bank-RM034",
        "bank-RM035",
        "bank-RM036",
        "bank-RM037",
        "bank-RM038",
        "bank-RM039",
        "bank-RM040",
        "bank-UX010",
        "bank-UX014",
        "bank-UX016"
      ],
      "sourceIds": [
        "NI001",
        "NI002",
        "NI003",
        "NI004",
        "NI005",
        "NI006",
        "NI007",
        "NI008",
        "NI009",
        "NI010",
        "NI011",
        "NI012",
        "NI013",
        "NI014",
        "NI015",
        "NI016",
        "NI017",
        "NI018",
        "NI019",
        "NI020",
        "NI021",
        "NI022",
        "NI023",
        "NI024",
        "NI025"
      ]
    }
  ]
};
