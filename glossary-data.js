window.GLOSSARY_DATA = {
  "schemaVersion": 1,
  "title": "Java 后端面试术语词典",
  "language": "zh-CN",
  "updatedAt": "2026-09-23",
  "termCount": 443,
  "categoryCount": 15,
  "selectionBasis": {
    "type": "用户提供的术语词典作为选词参考，再补充常用后端概念",
    "fileName": "index(2).html",
    "section": "const TERMS",
    "originalDictionaryTermCount": 147,
    "note": "不是原文摘录；所有定义均为本轮重述，新增内容与修正依据为 sourceIds 所指资料。"
  },
  "categories": [
    {
      "id": "java",
      "name": "Java 基础与面向对象",
      "count": 33,
      "sourceIds": [
        "J01",
        "J02",
        "J03",
        "J07"
      ]
    },
    {
      "id": "io",
      "name": "字符串、异常、IO 与序列化",
      "count": 30,
      "sourceIds": [
        "J01",
        "J04",
        "J06",
        "J07",
        "J08",
        "J17",
        "N02"
      ]
    },
    {
      "id": "collections",
      "name": "集合与常用数据结构",
      "count": 30,
      "sourceIds": [
        "J09",
        "J10"
      ]
    },
    {
      "id": "concurrency",
      "name": "多线程与并发",
      "count": 47,
      "sourceIds": [
        "J05",
        "J07",
        "J10",
        "J11",
        "J12",
        "J18",
        "J19"
      ]
    },
    {
      "id": "jvm",
      "name": "JVM 与垃圾回收",
      "count": 34,
      "sourceIds": [
        "J07",
        "J13",
        "J14",
        "J15",
        "J16"
      ]
    },
    {
      "id": "spring",
      "name": "Spring、分层与 AOP",
      "count": 34,
      "sourceIds": [
        "S01",
        "S02",
        "S03",
        "S07",
        "S08",
        "S09",
        "S10"
      ]
    },
    {
      "id": "annotations",
      "name": "常用注解与事务管理",
      "count": 25,
      "sourceIds": [
        "S03",
        "S04",
        "S05",
        "S06",
        "S09",
        "S10"
      ]
    },
    {
      "id": "mybatis",
      "name": "MyBatis 与数据库访问",
      "count": 23,
      "sourceIds": [
        "M01",
        "M02",
        "M03",
        "M04",
        "N05"
      ]
    },
    {
      "id": "sql",
      "name": "SQL 与数据库基础",
      "count": 26,
      "sourceIds": [
        "D01",
        "D02",
        "D07",
        "D08"
      ]
    },
    {
      "id": "database",
      "name": "索引、事务与数据库锁",
      "count": 36,
      "sourceIds": [
        "D01",
        "D03",
        "D04",
        "D05",
        "D06",
        "D09"
      ]
    },
    {
      "id": "redis",
      "name": "Redis 与缓存",
      "count": 24,
      "sourceIds": [
        "R01",
        "R02",
        "R03",
        "R04",
        "R05"
      ]
    },
    {
      "id": "network",
      "name": "网络、HTTP 与接口安全",
      "count": 38,
      "sourceIds": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "N06",
        "N07",
        "N08",
        "N09"
      ]
    },
    {
      "id": "reliability",
      "name": "消息队列与服务可靠性",
      "count": 21,
      "sourceIds": [
        "Q01",
        "Q02",
        "Q03",
        "N01",
        "E06",
        "E07"
      ]
    },
    {
      "id": "engineering",
      "name": "工程工具与排障",
      "count": 20,
      "sourceIds": [
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "J07",
        "J13"
      ]
    },
    {
      "id": "ai",
      "name": "AI 应用与 Agent",
      "count": 22,
      "sourceIds": [
        "A01",
        "A02",
        "A03",
        "A04",
        "A05",
        "A06",
        "A07"
      ]
    }
  ],
  "terms": [
    {
      "id": "java-001",
      "term": "类",
      "aliases": [
        "Class"
      ],
      "category": "java",
      "definition": "定义一类对象共同具有的属性和行为，相当于创建对象的模板。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-002",
      "term": "对象",
      "aliases": [
        "Object Instance",
        "实例"
      ],
      "category": "java",
      "definition": "根据类创建出来的具体实例，拥有自己的状态并能调用相应方法。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-003",
      "term": "实例化",
      "aliases": [
        "Instantiation"
      ],
      "category": "java",
      "definition": "根据类创建对象的过程，例如使用 new 创建一个 User 对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-004",
      "term": "构造方法",
      "aliases": [
        "构造器",
        "Constructor"
      ],
      "category": "java",
      "definition": "创建对象时用于初始化对象的方法，与类同名且没有返回类型。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J02"
      ]
    },
    {
      "id": "java-005",
      "term": "成员变量",
      "aliases": [
        "字段",
        "Field"
      ],
      "category": "java",
      "definition": "声明在类中、方法外的变量，用来保存对象或类的状态。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-006",
      "term": "局部变量",
      "aliases": [
        "Local Variable"
      ],
      "category": "java",
      "definition": "声明在方法、构造器或代码块内的变量，只能在规定的作用范围内使用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-007",
      "term": "成员方法",
      "aliases": [
        "Method"
      ],
      "category": "java",
      "definition": "定义在类中的行为，用来完成计算、操作数据或提供某项功能。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-008",
      "term": "封装",
      "aliases": [
        "Encapsulation"
      ],
      "category": "java",
      "definition": "把数据和操作数据的方法放在一起，并通过访问控制隐藏不应直接暴露的细节。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-009",
      "term": "继承",
      "aliases": [
        "Inheritance"
      ],
      "category": "java",
      "definition": "子类在父类基础上复用和扩展能力，Java 的一个类只能直接继承一个父类。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-010",
      "term": "多态",
      "aliases": [
        "Polymorphism"
      ],
      "category": "java",
      "definition": "同一个父类或接口引用调用被重写的方法时，会执行实际对象对应的实现。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "多态"
    },
    {
      "id": "java-011",
      "term": "重载",
      "aliases": [
        "方法重载",
        "Overload"
      ],
      "category": "java",
      "definition": "同名方法使用不同的参数列表，由编译器根据调用参数选择具体方法。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "重载"
    },
    {
      "id": "java-012",
      "term": "重写",
      "aliases": [
        "方法重写",
        "Override"
      ],
      "category": "java",
      "definition": "子类重新实现父类可继承的实例方法，使相同调用表现出不同的行为。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "重写"
    },
    {
      "id": "java-013",
      "term": "接口",
      "aliases": [
        "interface",
        "Java 接口"
      ],
      "category": "java",
      "definition": "定义一组能力约定，让不同类通过实现同一接口提供可以替换的实现。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "接口"
    },
    {
      "id": "java-014",
      "term": "抽象类",
      "aliases": [
        "abstract class"
      ],
      "category": "java",
      "definition": "不能直接实例化、可以包含抽象方法和已有实现的类，常作为子类的公共基础。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "抽象类"
    },
    {
      "id": "java-015",
      "term": "this",
      "aliases": [],
      "category": "java",
      "definition": "表示当前对象，常用于访问对象成员或区分同名的成员变量和参数。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-016",
      "term": "super",
      "aliases": [],
      "category": "java",
      "definition": "用于访问父类成员或调用父类构造器，不代表创建了另一个父类对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-017",
      "term": "static",
      "aliases": [
        "静态成员"
      ],
      "category": "java",
      "definition": "把字段或方法定义为类级成员，而不是某一个对象单独拥有的成员。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-018",
      "term": "final",
      "aliases": [],
      "category": "java",
      "definition": "限制变量重复赋值、方法重写或类继承，但不会自动让引用指向的对象不可变。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-019",
      "term": "访问修饰符",
      "aliases": [
        "访问权限"
      ],
      "category": "java",
      "definition": "通过 public、protected、private 或默认包访问控制类和成员能被哪些代码访问。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-020",
      "term": "引用",
      "aliases": [
        "Reference"
      ],
      "category": "java",
      "definition": "用于访问某个对象的值，复制引用不会复制它所指向的对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-021",
      "term": "值传递",
      "aliases": [
        "Pass by Value"
      ],
      "category": "java",
      "definition": "调用方法时传入参数值的副本，传对象时复制的是引用而不是对象本身。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-022",
      "term": "基本数据类型",
      "aliases": [
        "Primitive Type"
      ],
      "category": "java",
      "definition": "Java 内置的 byte、short、int、long、float、double、char、boolean 八种值类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-023",
      "term": "包装类",
      "aliases": [
        "Wrapper Class"
      ],
      "category": "java",
      "definition": "把基本类型的值表示为对象的类，例如 int 对应 Integer。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-024",
      "term": "自动装箱",
      "aliases": [
        "装箱",
        "Boxing"
      ],
      "category": "java",
      "definition": "编译器在需要对象的地方自动把基本类型值转换为对应的包装对象。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "装箱"
    },
    {
      "id": "java-025",
      "term": "自动拆箱",
      "aliases": [
        "拆箱",
        "Unboxing"
      ],
      "category": "java",
      "definition": "编译器自动从包装对象中取出基本类型值，包装对象为 null 时会抛空指针异常。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "拆箱"
    },
    {
      "id": "java-026",
      "term": "泛型",
      "aliases": [
        "Generics"
      ],
      "category": "java",
      "definition": "把类型作为参数使用，让集合、类和方法能复用逻辑并在编译期检查类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-027",
      "term": "类型擦除",
      "aliases": [
        "Type Erasure"
      ],
      "category": "java",
      "definition": "Java 编译器把泛型类型参数转换为上界或 Object，并补上必要类型转换的处理方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-028",
      "term": "反射",
      "aliases": [
        "Reflection"
      ],
      "category": "java",
      "definition": "在程序运行时获取类、字段、方法和构造器的信息，并按访问规则操作它们。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "反射"
    },
    {
      "id": "java-029",
      "term": "注解",
      "aliases": [
        "Annotation"
      ],
      "category": "java",
      "definition": "附加在代码上的元数据，需要编译器、框架或其他程序读取后才产生相应作用。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "注解"
    },
    {
      "id": "java-030",
      "term": "枚举",
      "aliases": [
        "Enum"
      ],
      "category": "java",
      "definition": "用一个类型表示有限的一组固定选项，例如订单的待支付、已支付和已关闭状态。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-031",
      "term": "Lambda 表达式",
      "aliases": [
        "Lambda"
      ],
      "category": "java",
      "definition": "为函数式接口提供简洁实现的语法，例如用 x -> x + 1 表示一个转换操作。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-032",
      "term": "函数式接口",
      "aliases": [
        "Functional Interface"
      ],
      "category": "java",
      "definition": "只有一个需要实现的抽象方法的接口，可以用 Lambda 表达式或方法引用来实现。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "java-033",
      "term": "不可变对象",
      "aliases": [
        "Immutable Object"
      ],
      "category": "java",
      "definition": "创建完成后可观察状态不再改变的对象，适合在多个使用方之间安全共享。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-001",
      "term": "String",
      "aliases": [
        "字符串"
      ],
      "category": "io",
      "definition": "Java 中表示字符序列的不可变类，拼接或替换不会原地修改已有字符串的内容。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J01",
        "J07"
      ]
    },
    {
      "id": "io-002",
      "term": "StringBuilder",
      "aliases": [],
      "category": "io",
      "definition": "用于反复拼接或修改字符内容的可变类，本身不提供线程安全保证。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-003",
      "term": "StringBuffer",
      "aliases": [],
      "category": "io",
      "definition": "常用方法带有同步保护的可变字符串类，但多次方法调用组合起来仍需考虑并发安全。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-004",
      "term": "字符串常量池",
      "aliases": [
        "String Pool"
      ],
      "category": "io",
      "definition": "复用相同内容字符串的机制，让字面量等符合规则的字符串共享规范化引用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-005",
      "term": "equals",
      "aliases": [
        "equals()"
      ],
      "category": "io",
      "definition": "判断两个对象是否符合某种相等规则的方法，Object 默认实现比较是否为同一对象。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "equals"
    },
    {
      "id": "io-006",
      "term": "hashCode",
      "aliases": [
        "hashCode()"
      ],
      "category": "io",
      "definition": "为对象计算哈希值的方法，按 equals 判断相等的对象必须具有相同哈希值。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "hashCode"
    },
    {
      "id": "io-007",
      "term": "BigDecimal",
      "aliases": [],
      "category": "io",
      "definition": "表示十进制数并支持明确精度和舍入规则的类，常用于金额等需要精确小数计算的场景。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-008",
      "term": "异常",
      "aliases": [
        "Exception Mechanism"
      ],
      "category": "io",
      "definition": "程序执行过程中出现的异常情况，可以通过抛出、捕获和传播机制进行处理。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-009",
      "term": "Throwable",
      "aliases": [],
      "category": "io",
      "definition": "Java 异常体系的根类，Error 和 Exception 都继承自它。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-010",
      "term": "受检异常",
      "aliases": [
        "Checked Exception"
      ],
      "category": "io",
      "definition": "编译器要求调用方捕获或在方法签名中声明的异常，例如 IOException。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "受检异常"
    },
    {
      "id": "io-011",
      "term": "运行时异常",
      "aliases": [
        "RuntimeException"
      ],
      "category": "io",
      "definition": "不要求调用方在编译期强制捕获或声明的一类异常，例如空指针和数组越界异常。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "运行时异常"
    },
    {
      "id": "io-012",
      "term": "Error",
      "aliases": [],
      "category": "io",
      "definition": "通常表示严重运行环境问题的一类异常，不适合像普通业务异常一样捕获后继续执行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-013",
      "term": "空指针异常",
      "aliases": [
        "NullPointerException",
        "NPE"
      ],
      "category": "io",
      "definition": "把 null 当成可用对象访问，或对 null 包装对象拆箱时抛出的异常。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-014",
      "term": "throw",
      "aliases": [],
      "category": "io",
      "definition": "在当前代码位置实际抛出一个异常对象的关键字。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-015",
      "term": "throws",
      "aliases": [],
      "category": "io",
      "definition": "在方法签名中声明该方法可能向调用方抛出哪些异常的关键字。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-016",
      "term": "finally",
      "aliases": [],
      "category": "io",
      "definition": "离开关联的 try 或 catch 时通常都会执行的代码块，常用于清理资源。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-017",
      "term": "try-with-resources",
      "aliases": [],
      "category": "io",
      "definition": "在代码块退出时自动关闭实现 AutoCloseable 的资源，减少忘记关闭连接或文件的问题。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-018",
      "term": "字节流",
      "aliases": [
        "Byte Stream"
      ],
      "category": "io",
      "definition": "按字节读写数据的流，既能处理文本，也能处理图片、音频等二进制内容。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J06",
        "J17"
      ]
    },
    {
      "id": "io-019",
      "term": "字符流",
      "aliases": [
        "Character Stream"
      ],
      "category": "io",
      "definition": "按字符读写文本的流，与字节相互转换时需要使用相应的字符编码。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J06",
        "J17"
      ]
    },
    {
      "id": "io-020",
      "term": "缓冲流",
      "aliases": [
        "Buffered Stream"
      ],
      "category": "io",
      "definition": "先在内存缓冲区集中处理数据，再批量读写底层资源，以减少频繁的小量 IO。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-021",
      "term": "字符编码",
      "aliases": [
        "Character Encoding"
      ],
      "category": "io",
      "definition": "规定字符与字节之间如何对应和转换，读写两端不一致时可能出现乱码。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-022",
      "term": "字符集",
      "aliases": [
        "Character Set"
      ],
      "category": "io",
      "definition": "规定可以表示哪些字符的集合，字符如何转换成字节则由具体编码方案确定。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-023",
      "term": "UTF-8",
      "aliases": [],
      "category": "io",
      "definition": "一种用一到四个字节编码一个 Unicode 码点的可变长度字符编码。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-024",
      "term": "序列化",
      "aliases": [
        "Serialization"
      ],
      "category": "io",
      "definition": "把对象或数据结构转换成便于存储、传输的字节或文本表示。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J08",
        "J06"
      ]
    },
    {
      "id": "io-025",
      "term": "反序列化",
      "aliases": [
        "Deserialization"
      ],
      "category": "io",
      "definition": "把已序列化的字节或文本按约定格式还原成对象或数据结构。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J08",
        "J06"
      ]
    },
    {
      "id": "io-026",
      "term": "Serializable",
      "aliases": [],
      "category": "io",
      "definition": "标记一个类可以参与 Java 原生对象序列化的接口，本身不要求实现方法。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-027",
      "term": "transient",
      "aliases": [],
      "category": "io",
      "definition": "标记某个实例字段默认不参与 Java 原生序列化，但不等于对字段内容进行了加密。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-028",
      "term": "浅拷贝",
      "aliases": [
        "Shallow Copy"
      ],
      "category": "io",
      "definition": "复制外层对象的字段，但其中的引用字段仍可能指向原来的内部对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-029",
      "term": "深拷贝",
      "aliases": [
        "Deep Copy"
      ],
      "category": "io",
      "definition": "把需要独立的内部可变对象也复制出来，避免两份数据因共享这些对象而相互影响。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "io-030",
      "term": "JSON",
      "aliases": [],
      "category": "io",
      "definition": "用对象、数组和基本值表达数据的轻量文本格式，常用于前后端交换数据。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-001",
      "term": "集合",
      "aliases": [
        "Collections Framework"
      ],
      "category": "collections",
      "definition": "用于组织和操作一组对象的接口与实现体系，常见有 List、Set 和 Map。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-002",
      "term": "Collection",
      "aliases": [],
      "category": "collections",
      "definition": "Java 集合体系中表示一组元素的基础接口，List、Set 和 Queue 都属于这一分支。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-003",
      "term": "Collections",
      "aliases": [],
      "category": "collections",
      "definition": "提供集合排序、查找和同步包装等静态工具方法的类，不是 Collection 接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-004",
      "term": "List",
      "aliases": [],
      "category": "collections",
      "definition": "按位置保存元素、通常允许重复并支持下标访问的集合接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-005",
      "term": "Set",
      "aliases": [],
      "category": "collections",
      "definition": "按照具体实现的相等规则保存不重复元素的集合接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-006",
      "term": "Map",
      "aliases": [],
      "category": "collections",
      "definition": "保存键值映射的数据结构，一个键最多对应一个值，且它不继承 Collection。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-007",
      "term": "ArrayList",
      "aliases": [],
      "category": "collections",
      "definition": "底层使用可扩容数组的 List 实现，按下标访问快，中间插入或删除通常需要移动元素。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-008",
      "term": "LinkedList",
      "aliases": [],
      "category": "collections",
      "definition": "底层使用双向链表的集合，适合两端操作，但按下标定位元素需要遍历。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-009",
      "term": "HashMap",
      "aliases": [],
      "category": "collections",
      "definition": "通过哈希定位键值对的 Map 实现，不保证遍历顺序，也不提供并发读写安全保证。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-010",
      "term": "HashSet",
      "aliases": [],
      "category": "collections",
      "definition": "通常基于 HashMap 按 hashCode 和 equals 去重的 Set 实现，不保证遍历顺序。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-011",
      "term": "LinkedHashMap",
      "aliases": [],
      "category": "collections",
      "definition": "在哈希映射上维护链接顺序的 Map 实现，可以按插入顺序或访问顺序遍历。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-012",
      "term": "LinkedHashSet",
      "aliases": [],
      "category": "collections",
      "definition": "在去重基础上维护元素顺序的 Set 实现，普通 add 操作保留首次插入顺序。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-013",
      "term": "TreeMap",
      "aliases": [],
      "category": "collections",
      "definition": "按键的自然顺序或比较器排序的 Map 实现，适合有序遍历和范围查询。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-014",
      "term": "TreeSet",
      "aliases": [],
      "category": "collections",
      "definition": "按自然顺序或比较器排序的 Set 实现，比较结果为零时视为同一个元素。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-015",
      "term": "迭代器",
      "aliases": [
        "Iterator"
      ],
      "category": "collections",
      "definition": "按顺序访问集合元素的对象，支持时可以通过自身的 remove 方法删除刚访问的元素。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "迭代器"
    },
    {
      "id": "collections-016",
      "term": "Comparable",
      "aliases": [],
      "category": "collections",
      "definition": "由元素类型自身定义自然排序规则的接口，核心方法是 compareTo。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-017",
      "term": "Comparator",
      "aliases": [],
      "category": "collections",
      "definition": "从外部提供元素比较规则的接口，可以为同一种对象定义不同排序方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-018",
      "term": "Queue",
      "aliases": [
        "队列"
      ],
      "category": "collections",
      "definition": "用于排队和取出元素的接口，具体取出顺序由先进先出或优先级等实现规则决定。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-019",
      "term": "栈（数据结构）",
      "aliases": [
        "Stack",
        "后进先出栈"
      ],
      "category": "collections",
      "definition": "只在一端放入和取出元素、后放入者先取出的数据结构，不等于 JVM 虚拟机栈。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-020",
      "term": "ArrayDeque",
      "aliases": [],
      "category": "collections",
      "definition": "基于可扩容数组实现的双端队列，常用于普通队列或栈，不提供线程安全保证。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-021",
      "term": "Deque",
      "aliases": [
        "双端队列"
      ],
      "category": "collections",
      "definition": "允许从头部和尾部插入、取出元素的队列，也能用来实现后进先出的栈。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-022",
      "term": "PriorityQueue",
      "aliases": [
        "优先队列"
      ],
      "category": "collections",
      "definition": "根据自然顺序或比较器优先取出元素的队列，不保证普通遍历结果整体有序。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-023",
      "term": "数组",
      "aliases": [
        "Array"
      ],
      "category": "collections",
      "definition": "长度在创建后固定、可以按下标访问元素的数据结构，能存基本类型值或对象引用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "collections-024",
      "term": "链表",
      "aliases": [
        "链式结构"
      ],
      "category": "collections",
      "definition": "通过节点之间的引用组织数据的结构，修改链接方便，但查找指定位置通常需要遍历。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "链表"
    },
    {
      "id": "collections-025",
      "term": "哈希",
      "aliases": [
        "Hash"
      ],
      "category": "collections",
      "definition": "把输入映射成固定范围或长度的值，常用于查找定位、校验或分组。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "哈希"
    },
    {
      "id": "collections-026",
      "term": "哈希冲突",
      "aliases": [
        "Hash Collision"
      ],
      "category": "collections",
      "definition": "不同输入得到相同哈希值，或在哈希表中映射到同一个桶的情况。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "哈希冲突"
    },
    {
      "id": "collections-027",
      "term": "扩容",
      "aliases": [
        "Resize"
      ],
      "category": "collections",
      "definition": "现有存储容量不足时分配更大空间并迁移数据，具体增长倍数取决于实现。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "扩容"
    },
    {
      "id": "collections-028",
      "term": "负载因子",
      "aliases": [
        "Load Factor"
      ],
      "category": "collections",
      "definition": "衡量哈希表填充程度并影响扩容阈值的参数，例如 HashMap 默认值为 0.75。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "负载因子"
    },
    {
      "id": "collections-029",
      "term": "红黑树",
      "aliases": [
        "Red-Black Tree"
      ],
      "category": "collections",
      "definition": "通过颜色和结构约束保持大致平衡的二叉搜索树，使查找和更新保持对数级复杂度。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "红黑树"
    },
    {
      "id": "collections-030",
      "term": "fail-fast",
      "aliases": [
        "快速失败"
      ],
      "category": "collections",
      "definition": "普通集合在迭代时尽力检测不符合约定的结构修改并抛异常的机制，不是线程安全保证。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-001",
      "term": "进程",
      "aliases": [
        "Process"
      ],
      "category": "concurrency",
      "definition": "正在运行的程序实例，是操作系统进行资源管理和隔离的重要单位。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "进程"
    },
    {
      "id": "concurrency-002",
      "term": "线程",
      "aliases": [
        "Thread"
      ],
      "category": "concurrency",
      "definition": "进程中的一条执行路径，同一进程的线程可以共享堆等资源并各有自己的执行栈。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "线程"
    },
    {
      "id": "concurrency-003",
      "term": "并发",
      "aliases": [
        "Concurrency"
      ],
      "category": "concurrency",
      "definition": "多个任务在同一段时间内交错推进，不要求它们在同一时刻同时运行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-004",
      "term": "并行",
      "aliases": [
        "Parallelism"
      ],
      "category": "concurrency",
      "definition": "多个任务在同一时刻由不同执行单元真正同时运行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-005",
      "term": "同步",
      "aliases": [
        "同步调用",
        "Synchronous"
      ],
      "category": "concurrency",
      "definition": "调用方按调用顺序等待操作完成，再继续依赖该结果的后续逻辑。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-006",
      "term": "异步",
      "aliases": [
        "异步调用",
        "Asynchronous"
      ],
      "category": "concurrency",
      "definition": "调用方发起操作后不必原地等待完成，通过回调、事件或 Future 等方式获取结果。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-007",
      "term": "阻塞",
      "aliases": [
        "Blocking"
      ],
      "category": "concurrency",
      "definition": "线程因等待数据、资源或某个条件而暂时不能继续执行当前操作。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-008",
      "term": "非阻塞",
      "aliases": [
        "Non-blocking IO"
      ],
      "category": "concurrency",
      "definition": "IO 条件暂不满足时调用也能及时返回，而不是一直让调用线程等待。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-009",
      "term": "线程安全",
      "aliases": [
        "Thread Safety"
      ],
      "category": "concurrency",
      "definition": "多个线程按约定同时访问时，程序仍能保持正确的数据状态和业务结果。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "线程安全"
    },
    {
      "id": "concurrency-010",
      "term": "共享变量",
      "aliases": [
        "Shared Variable"
      ],
      "category": "concurrency",
      "definition": "可能被多个线程访问的变量，其中可变状态需要考虑并发协调。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-011",
      "term": "临界区",
      "aliases": [
        "Critical Section"
      ],
      "category": "concurrency",
      "definition": "访问共享可变资源、需要与其他相关操作协调执行的一段代码。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-012",
      "term": "锁",
      "aliases": [
        "Lock"
      ],
      "category": "concurrency",
      "definition": "限制哪些线程可以同时访问某个共享资源的同步机制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-013",
      "term": "synchronized",
      "aliases": [],
      "category": "concurrency",
      "definition": "通过同一对象的监视器实现互斥访问并提供相应可见性保证的 Java 关键字。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "synchronized"
    },
    {
      "id": "concurrency-014",
      "term": "volatile",
      "aliases": [],
      "category": "concurrency",
      "definition": "让字段读写具有相应可见性和有序性保证的关键字，但不能让 count++ 等复合操作自动原子化。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "volatile"
    },
    {
      "id": "concurrency-015",
      "term": "JMM",
      "aliases": [
        "Java 内存模型"
      ],
      "category": "concurrency",
      "definition": "规定 Java 多线程如何读写共享数据，以及同步操作提供哪些可见性和顺序保证的规则。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JMM"
    },
    {
      "id": "concurrency-016",
      "term": "原子性",
      "aliases": [
        "并发原子性"
      ],
      "category": "concurrency",
      "definition": "一个操作不可被其他线程观察为拆开的中间步骤，不等于操作失败后会自动回滚。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "原子性"
    },
    {
      "id": "concurrency-017",
      "term": "可见性",
      "aliases": [
        "Visibility"
      ],
      "category": "concurrency",
      "definition": "一个线程的修改能按照同步规则被另一个线程观察到的保证。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "可见性"
    },
    {
      "id": "concurrency-018",
      "term": "有序性",
      "aliases": [
        "Ordering"
      ],
      "category": "concurrency",
      "definition": "通过同步规则约束可观察的执行顺序，避免不允许的重排破坏并发结果。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-019",
      "term": "指令重排",
      "aliases": [
        "Reordering"
      ],
      "category": "concurrency",
      "definition": "编译器或处理器在不违反语言规则的前提下调整操作执行顺序的优化。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "指令重排"
    },
    {
      "id": "concurrency-020",
      "term": "happens-before",
      "aliases": [
        "先行发生关系"
      ],
      "category": "concurrency",
      "definition": "用来判断前一个操作的结果对后一个操作是否具有可见性和顺序保证的关系。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-021",
      "term": "CAS",
      "aliases": [
        "Compare and Set",
        "比较并交换"
      ],
      "category": "concurrency",
      "definition": "原子地比较当前值与预期值，只有相同时才写入新值的更新操作。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "CAS"
    },
    {
      "id": "concurrency-022",
      "term": "ABA 问题",
      "aliases": [
        "ABA"
      ],
      "category": "concurrency",
      "definition": "某个值从 A 变为 B 后又变回 A，导致只比较当前值的 CAS 无法发现中间变化。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "ABA"
    },
    {
      "id": "concurrency-023",
      "term": "ReentrantLock",
      "aliases": [],
      "category": "concurrency",
      "definition": "需要显式加锁和解锁的可重入互斥锁，支持公平模式、限时获取和可中断等待。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-024",
      "term": "可重入锁",
      "aliases": [
        "锁重入"
      ],
      "category": "concurrency",
      "definition": "允许持锁线程再次获取同一把锁，并要求与获取次数对应地释放。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-025",
      "term": "公平锁",
      "aliases": [
        "Fair Lock"
      ],
      "category": "concurrency",
      "definition": "在竞争时倾向于让等待更久的线程先获得锁，但不保证线程调度本身严格公平。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "J12"
      ]
    },
    {
      "id": "concurrency-026",
      "term": "非公平锁",
      "aliases": [
        "Nonfair Lock"
      ],
      "category": "concurrency",
      "definition": "不保证按等待先后分配锁，允许后来者在某些情况下先获得锁。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-027",
      "term": "死锁",
      "aliases": [
        "Deadlock"
      ],
      "category": "concurrency",
      "definition": "多个线程或事务互相等待对方持有的资源，导致相关参与者都无法继续推进。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "死锁",
      "sourceIds": [
        "J18",
        "D04"
      ]
    },
    {
      "id": "concurrency-028",
      "term": "ThreadLocal",
      "aliases": [],
      "category": "concurrency",
      "definition": "为每个线程保存独立的变量槽位，在线程池中使用后通常需要清理以免数据残留。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "ThreadLocal"
    },
    {
      "id": "concurrency-029",
      "term": "线程池",
      "aliases": [
        "Thread Pool"
      ],
      "category": "concurrency",
      "definition": "统一管理并复用一组工作线程来执行任务，减少反复创建线程并控制资源使用。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "线程池",
      "sourceIds": [
        "J11"
      ]
    },
    {
      "id": "concurrency-030",
      "term": "核心线程数",
      "aliases": [
        "corePoolSize"
      ],
      "category": "concurrency",
      "definition": "ThreadPoolExecutor 优先创建线程所依据的数量阈值，核心线程默认不会仅因空闲而回收。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-031",
      "term": "最大线程数",
      "aliases": [
        "maximumPoolSize"
      ],
      "category": "concurrency",
      "definition": "ThreadPoolExecutor 允许同时存在的工作线程数量上限。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-032",
      "term": "工作队列",
      "aliases": [
        "workQueue"
      ],
      "category": "concurrency",
      "definition": "在线程池中暂存尚未开始执行任务的队列，其容量影响排队时间和内存占用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-033",
      "term": "拒绝策略",
      "aliases": [
        "RejectedExecutionHandler"
      ],
      "category": "concurrency",
      "definition": "线程池关闭或容量饱和无法接收任务时，决定抛异常、丢弃或交给提交者执行等行为的规则。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "拒绝策略"
    },
    {
      "id": "concurrency-034",
      "term": "Runnable",
      "aliases": [],
      "category": "concurrency",
      "definition": "表示一段可执行任务的接口，其 run 方法不返回结果。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-035",
      "term": "Callable",
      "aliases": [],
      "category": "concurrency",
      "definition": "表示可以返回结果并声明抛出异常的任务接口，通常交给执行器运行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-036",
      "term": "Future",
      "aliases": [],
      "category": "concurrency",
      "definition": "代表一个可能尚未完成的任务结果，可用于等待结果、查询状态或尝试取消。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-037",
      "term": "CompletableFuture",
      "aliases": [],
      "category": "concurrency",
      "definition": "既能保存异步结果，也能组合任务依赖、结果转换和异常处理的工具类。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-038",
      "term": "ConcurrentHashMap",
      "aliases": [],
      "category": "concurrency",
      "definition": "支持并发访问和部分原子复合操作的 Map 实现，但不会自动保护值对象内部的修改。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-039",
      "term": "CopyOnWriteArrayList",
      "aliases": [],
      "category": "concurrency",
      "definition": "写入时复制数组、遍历时读取快照的并发列表，适合读多写少的场景。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-040",
      "term": "BlockingQueue",
      "aliases": [
        "阻塞队列"
      ],
      "category": "concurrency",
      "definition": "提供可等待的放入和取出操作的线程安全队列接口，等待行为取决于所用方法。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "阻塞队列"
    },
    {
      "id": "concurrency-041",
      "term": "CountDownLatch",
      "aliases": [],
      "category": "concurrency",
      "definition": "让线程等待计数归零后继续执行的一次性同步工具，常用于等待多个任务完成。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-042",
      "term": "Semaphore",
      "aliases": [
        "信号量"
      ],
      "category": "concurrency",
      "definition": "通过许可证数量限制同时进入某段逻辑或使用某项资源的任务数量。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-043",
      "term": "AQS",
      "aliases": [
        "AbstractQueuedSynchronizer"
      ],
      "category": "concurrency",
      "definition": "提供同步状态和等待队列的基础框架，供锁与其他同步器实现获取、排队和唤醒逻辑。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "AQS"
    },
    {
      "id": "concurrency-044",
      "term": "sleep",
      "aliases": [
        "Thread.sleep"
      ],
      "category": "concurrency",
      "definition": "让当前线程暂停指定时长的方法，等待期间不会释放已经持有的对象监视器。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-045",
      "term": "wait",
      "aliases": [
        "Object.wait"
      ],
      "category": "concurrency",
      "definition": "让持有对象监视器的线程释放该监视器并等待，返回前需要重新获取它。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-046",
      "term": "Thread.join",
      "aliases": [
        "等待线程结束"
      ],
      "category": "concurrency",
      "definition": "让当前线程等待目标线程结束的方法，也可以指定最长等待时间。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "concurrency-047",
      "term": "interrupt",
      "aliases": [
        "线程中断"
      ],
      "category": "concurrency",
      "definition": "向线程发出协作中断信号的方法，是否停止仍取决于线程及其调用是否响应中断。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-001",
      "term": "JVM",
      "aliases": [
        "Java 虚拟机"
      ],
      "category": "jvm",
      "definition": "执行 Java 字节码并管理运行时内存等资源的虚拟机，不同平台需要对应的实现。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JVM",
      "sourceIds": [
        "J13"
      ]
    },
    {
      "id": "jvm-002",
      "term": "JDK",
      "aliases": [
        "Java Development Kit"
      ],
      "category": "jvm",
      "definition": "用于开发 Java 程序的工具包，提供编译器、运行能力及诊断工具等。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JDK"
    },
    {
      "id": "jvm-003",
      "term": "JRE",
      "aliases": [
        "Java Runtime Environment"
      ],
      "category": "jvm",
      "definition": "传统意义上的 Java 运行环境，包括 JVM 和运行所需的类库，不等于开发工具包。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JRE"
    },
    {
      "id": "jvm-004",
      "term": "字节码",
      "aliases": [
        "Bytecode"
      ],
      "category": "jvm",
      "definition": "Java 等语言编译后交给 JVM 执行的指令表示，通常保存在 class 文件中。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-005",
      "term": "类加载器",
      "aliases": [
        "ClassLoader"
      ],
      "category": "jvm",
      "definition": "负责查找类的字节表示并把类加载到 JVM 中的组件。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "类加载器"
    },
    {
      "id": "jvm-006",
      "term": "双亲委派",
      "aliases": [
        "Parent Delegation"
      ],
      "category": "jvm",
      "definition": "类加载时通常先委托父加载器尝试，父加载器无法加载时再由当前加载器处理的机制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "双亲委派"
    },
    {
      "id": "jvm-007",
      "term": "堆",
      "aliases": [
        "Java Heap"
      ],
      "category": "jvm",
      "definition": "JVM 中用于分配对象和数组的共享运行时内存区域，也是垃圾回收的主要管理范围。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "堆"
    },
    {
      "id": "jvm-008",
      "term": "虚拟机栈",
      "aliases": [
        "Java 栈",
        "JVM Stack"
      ],
      "category": "jvm",
      "definition": "每个线程用于保存方法调用栈帧的内存区域，方法调用和返回对应栈帧的进入和退出。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-009",
      "term": "栈帧",
      "aliases": [
        "Stack Frame"
      ],
      "category": "jvm",
      "definition": "一次方法调用的执行记录，包含局部变量、操作数栈和返回所需的信息。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-010",
      "term": "方法区",
      "aliases": [
        "Method Area"
      ],
      "category": "jvm",
      "definition": "JVM 规范中保存类结构、方法信息和运行时常量池等数据的共享区域。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "方法区"
    },
    {
      "id": "jvm-011",
      "term": "元空间",
      "aliases": [
        "Metaspace"
      ],
      "category": "jvm",
      "definition": "HotSpot 使用本地内存保存类元数据的实现，不能简单等同于整个方法区的全部内容。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-012",
      "term": "程序计数器",
      "aliases": [
        "PC Register"
      ],
      "category": "jvm",
      "definition": "记录当前线程所执行 JVM 指令位置的运行时区域，执行 native 方法时其值未定义。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "程序计数器"
    },
    {
      "id": "jvm-013",
      "term": "本地方法栈",
      "aliases": [
        "Native Method Stack"
      ],
      "category": "jvm",
      "definition": "用于支持 native 方法执行的栈，其具体组织方式由 JVM 实现决定。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-014",
      "term": "直接内存",
      "aliases": [
        "Direct Memory"
      ],
      "category": "jvm",
      "definition": "由直接缓冲区等使用的堆外内存，也占进程资源，不受 Java 堆大小上限直接约束。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-015",
      "term": "GC",
      "aliases": [
        "垃圾回收",
        "Garbage Collection"
      ],
      "category": "jvm",
      "definition": "自动识别并回收不再需要保留的对象内存的机制，不代替文件和连接等资源的及时关闭。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "GC"
    },
    {
      "id": "jvm-016",
      "term": "GC Roots",
      "aliases": [],
      "category": "jvm",
      "definition": "可达性分析的起点集合，垃圾回收器从这些起点沿引用判断哪些对象仍需保留。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "GC Roots"
    },
    {
      "id": "jvm-017",
      "term": "可达性分析",
      "aliases": [
        "Reachability Analysis"
      ],
      "category": "jvm",
      "definition": "从 GC Roots 出发遍历引用关系，以判断对象是否仍然可访问的分析方法。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-018",
      "term": "新生代",
      "aliases": [
        "Young Generation"
      ],
      "category": "jvm",
      "definition": "分代收集器中主要容纳新分配对象的区域，利用多数对象存活时间短的特点进行回收。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-019",
      "term": "老年代",
      "aliases": [
        "Old Generation"
      ],
      "category": "jvm",
      "definition": "分代收集器中主要容纳存活较久对象的区域，具体晋升规则取决于收集器和配置。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-020",
      "term": "Young GC",
      "aliases": [
        "Minor GC"
      ],
      "category": "jvm",
      "definition": "主要针对年轻代进行的垃圾回收，具体日志名称和行为取决于所用收集器。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-021",
      "term": "Full GC",
      "aliases": [],
      "category": "jvm",
      "definition": "通常涉及全堆等较大范围的垃圾回收，实际处理范围和停顿行为需要结合收集器判断。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-022",
      "term": "STW",
      "aliases": [
        "Stop The World"
      ],
      "category": "jvm",
      "definition": "JVM 为完成某些操作而暂停应用线程的现象，并发垃圾回收也可能包含短暂停顿。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-023",
      "term": "标记清除",
      "aliases": [
        "标记-清除",
        "Mark and Sweep"
      ],
      "category": "jvm",
      "definition": "先识别存活对象，再回收未标记对象占用的内存，通常不会主动整理内存碎片。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "标记-清除"
    },
    {
      "id": "jvm-024",
      "term": "复制算法",
      "aliases": [
        "标记复制",
        "标记-复制",
        "Copying GC"
      ],
      "category": "jvm",
      "definition": "把存活对象复制到另一片区域后回收原区域，适合存活对象相对较少的回收场景。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "标记-复制"
    },
    {
      "id": "jvm-025",
      "term": "标记整理",
      "aliases": [
        "标记-整理",
        "Mark and Compact"
      ],
      "category": "jvm",
      "definition": "先标记存活对象，再移动它们以集中空闲空间，减少内存碎片。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "标记-整理"
    },
    {
      "id": "jvm-026",
      "term": "G1",
      "aliases": [],
      "category": "jvm",
      "definition": "把堆分成多个 Region 并结合回收收益和暂停目标选择区域处理的垃圾收集器。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-027",
      "term": "强引用",
      "aliases": [
        "Strong Reference"
      ],
      "category": "jvm",
      "definition": "从活动程序状态可达的普通对象引用，会使被引用对象继续保留。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "jvm-028",
      "term": "软引用",
      "aliases": [
        "SoftReference"
      ],
      "category": "jvm",
      "definition": "在内存紧张时可以由垃圾回收器清理的引用，不适合用来保证精确的业务缓存期限。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "软引用"
    },
    {
      "id": "jvm-029",
      "term": "弱引用",
      "aliases": [
        "WeakReference"
      ],
      "category": "jvm",
      "definition": "不会阻止对象回收的引用，对象被判定为弱可达时对应的弱引用会被清理。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "弱引用"
    },
    {
      "id": "jvm-030",
      "term": "虚引用",
      "aliases": [
        "PhantomReference"
      ],
      "category": "jvm",
      "definition": "不能通过 get 取得对象、通常配合引用队列接收对象生命周期相关通知的引用。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "虚引用"
    },
    {
      "id": "jvm-031",
      "term": "JIT",
      "aliases": [
        "即时编译器",
        "Just-In-Time"
      ],
      "category": "jvm",
      "definition": "在运行过程中把热点字节码编译成机器码，并结合执行情况进行优化的机制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JIT"
    },
    {
      "id": "jvm-032",
      "term": "内存泄漏",
      "aliases": [
        "Memory Leak"
      ],
      "category": "jvm",
      "definition": "已经不再需要的数据或资源仍被长期持有，导致它们无法正常回收或释放。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "内存泄漏"
    },
    {
      "id": "jvm-033",
      "term": "OOM",
      "aliases": [
        "OutOfMemoryError",
        "内存溢出"
      ],
      "category": "jvm",
      "definition": "JVM 无法满足某类内存或相关资源申请时出现的错误，不一定只表示 Java 堆已满。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "OOM"
    },
    {
      "id": "jvm-034",
      "term": "StackOverflowError",
      "aliases": [
        "栈溢出"
      ],
      "category": "jvm",
      "definition": "方法调用层次过深等原因导致线程栈空间不足的错误，常见于无限递归。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-001",
      "term": "Spring",
      "aliases": [
        "Spring Framework"
      ],
      "category": "spring",
      "definition": "提供依赖注入、AOP、事务和 Web 支持等能力的 Java 应用开发框架。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-002",
      "term": "Spring MVC",
      "aliases": [],
      "category": "spring",
      "definition": "Spring 中基于 Servlet 处理 Web 请求、调用控制器并组织响应的框架。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-003",
      "term": "Spring Boot",
      "aliases": [],
      "category": "spring",
      "definition": "通过自动配置、起步依赖和运行支持简化 Spring 应用搭建与部署的框架。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-004",
      "term": "Spring 容器",
      "aliases": [
        "IoC 容器"
      ],
      "category": "spring",
      "definition": "根据配置创建、装配和管理 Bean 及其生命周期的运行环境。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-005",
      "term": "Bean",
      "aliases": [
        "Spring Bean"
      ],
      "category": "spring",
      "definition": "由 Spring 容器创建或接管并管理的对象，不等于任意通过 new 创建的普通对象。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "Bean"
    },
    {
      "id": "spring-006",
      "term": "BeanFactory",
      "aliases": [],
      "category": "spring",
      "definition": "Spring 容器的基础接口，提供 Bean 获取和依赖管理等核心能力。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-007",
      "term": "ApplicationContext",
      "aliases": [],
      "category": "spring",
      "definition": "在 BeanFactory 基础上增加事件、资源和国际化等能力的应用上下文接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-008",
      "term": "IoC",
      "aliases": [
        "控制反转",
        "Inversion of Control"
      ],
      "category": "spring",
      "definition": "在 Spring 中指把对象创建和依赖管理交给容器，而不是由业务对象自行控制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "IoC",
      "sourceIds": [
        "S01"
      ]
    },
    {
      "id": "spring-009",
      "term": "DI",
      "aliases": [
        "依赖注入",
        "Dependency Injection"
      ],
      "category": "spring",
      "definition": "由容器把一个对象需要的其他对象通过构造器、方法或字段提供给它。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "DI"
    },
    {
      "id": "spring-010",
      "term": "构造器注入",
      "aliases": [
        "Constructor Injection"
      ],
      "category": "spring",
      "definition": "通过构造器参数传入对象所需依赖，使必需依赖在创建对象时就明确下来。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-011",
      "term": "AOP",
      "aliases": [
        "面向切面编程",
        "Aspect-Oriented Programming"
      ],
      "category": "spring",
      "definition": "把日志、权限、事务等多个业务方法共用的处理抽出来，在指定位置统一执行。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "AOP",
      "sourceIds": [
        "S02"
      ]
    },
    {
      "id": "spring-012",
      "term": "切面",
      "aliases": [
        "Aspect"
      ],
      "category": "spring",
      "definition": "把某一类公共处理逻辑及其适用范围组织在一起的模块，例如日志切面。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "切面"
    },
    {
      "id": "spring-013",
      "term": "连接点",
      "aliases": [
        "JoinPoint"
      ],
      "category": "spring",
      "definition": "程序执行中可应用增强的位置，在 Spring AOP 中表示方法执行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-014",
      "term": "切入点",
      "aliases": [
        "Pointcut"
      ],
      "category": "spring",
      "definition": "匹配哪些连接点需要执行增强逻辑的规则，例如选择某个包下的 Service 方法。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-015",
      "term": "通知",
      "aliases": [
        "Advice"
      ],
      "category": "spring",
      "definition": "在匹配的方法执行前、执行后或执行周围运行的具体增强逻辑。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-016",
      "term": "动态代理",
      "aliases": [
        "Dynamic Proxy"
      ],
      "category": "spring",
      "definition": "在运行时创建代理对象，代替目标对象接收调用并加入额外处理的机制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "动态代理"
    },
    {
      "id": "spring-017",
      "term": "JDK 动态代理",
      "aliases": [
        "JDK Proxy"
      ],
      "category": "spring",
      "definition": "通过实现接口生成代理对象，并由 InvocationHandler 处理调用的代理方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-018",
      "term": "CGLIB",
      "aliases": [],
      "category": "spring",
      "definition": "通过生成目标类的子类实现代理的技术，因此不能靠重写增强 final 或 private 方法。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "CGLIB"
    },
    {
      "id": "spring-019",
      "term": "Controller",
      "aliases": [
        "控制器",
        "控制层"
      ],
      "category": "spring",
      "definition": "负责接收请求、处理输入输出并调用业务层的组件，通常不承担复杂业务逻辑。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "S03"
      ]
    },
    {
      "id": "spring-020",
      "term": "Service",
      "aliases": [
        "业务层",
        "服务层"
      ],
      "category": "spring",
      "definition": "组织业务规则和处理流程的组件，通常调用持久层或其他服务完成业务。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-021",
      "term": "DAO",
      "aliases": [
        "数据访问层",
        "Data Access Object"
      ],
      "category": "spring",
      "definition": "封装数据库等数据源访问细节的对象或层，使业务代码不必直接处理底层访问过程。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-022",
      "term": "Entity",
      "aliases": [
        "实体类"
      ],
      "category": "spring",
      "definition": "表示业务实体、在持久化场景中常与数据库记录对应的类。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-023",
      "term": "DTO",
      "aliases": [
        "数据传输对象",
        "Data Transfer Object"
      ],
      "category": "spring",
      "definition": "专门承载接口或分层之间传输的数据，避免直接暴露完整内部实体。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-024",
      "term": "VO",
      "aliases": [
        "视图对象",
        "View Object"
      ],
      "category": "spring",
      "definition": "在常见 Web 分层命名中表示按页面或接口展示需要组织的返回对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-025",
      "term": "单例作用域",
      "aliases": [
        "singleton",
        "Spring 单例",
        "单例"
      ],
      "category": "spring",
      "definition": "同一个 Spring 容器中的同一 Bean 定义通常只创建一个共享实例，不代表该实例自动线程安全。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "单例"
    },
    {
      "id": "spring-026",
      "term": "Bean 生命周期",
      "aliases": [],
      "category": "spring",
      "definition": "Bean 从实例化、依赖注入、初始化到使用和销毁的完整过程。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-027",
      "term": "循环依赖",
      "aliases": [
        "Circular Dependency"
      ],
      "category": "spring",
      "definition": "两个或多个 Bean 的依赖形成闭环，例如 A 需要 B，而 B 又需要 A。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "循环依赖"
    },
    {
      "id": "spring-028",
      "term": "三级缓存",
      "aliases": [
        "Spring 三级缓存"
      ],
      "category": "spring",
      "definition": "用完整单例、早期引用和早期引用工厂协调部分单例循环依赖及代理一致性的机制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "三级缓存"
    },
    {
      "id": "spring-029",
      "term": "自动配置",
      "aliases": [
        "Auto-configuration",
        "Spring Boot 自动配置"
      ],
      "category": "spring",
      "definition": "Spring Boot 根据依赖、配置属性和已有 Bean 等条件装配合适组件的机制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-030",
      "term": "Starter",
      "aliases": [
        "起步依赖"
      ],
      "category": "spring",
      "definition": "把某项功能常用依赖组织成便捷入口，通常与相应自动配置配合使用。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "Starter"
    },
    {
      "id": "spring-031",
      "term": "DispatcherServlet",
      "aliases": [
        "前端控制器"
      ],
      "category": "spring",
      "definition": "Spring MVC 接收请求后协调处理器查找、方法调用和返回值处理的核心 Servlet。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-032",
      "term": "Filter",
      "aliases": [
        "过滤器",
        "Servlet Filter"
      ],
      "category": "spring",
      "definition": "在 Servlet 层处理请求和响应的组件，常用于编码、请求包装和通用入口处理。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "spring-033",
      "term": "Interceptor",
      "aliases": [
        "拦截器",
        "HandlerInterceptor"
      ],
      "category": "spring",
      "definition": "在 Spring MVC 处理链中围绕目标处理器执行逻辑的组件，可用于请求检查和耗时记录。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "拦截器"
    },
    {
      "id": "spring-034",
      "term": "WebFlux",
      "aliases": [],
      "category": "spring",
      "definition": "Spring 的响应式 Web 框架，提供非阻塞处理模型，但业务和依赖也需要正确配合。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "WebFlux"
    },
    {
      "id": "annotations-001",
      "term": "@Component",
      "aliases": [],
      "category": "annotations",
      "definition": "把类标记为可被 Spring 组件扫描发现和注册的通用组件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-002",
      "term": "@Service",
      "aliases": [],
      "category": "annotations",
      "definition": "标记业务层组件的注解，在组件扫描中作为 Spring Bean 注册。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-003",
      "term": "@Repository",
      "aliases": [],
      "category": "annotations",
      "definition": "标记持久层组件的注解，并可配合 Spring 的持久化异常转换机制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-004",
      "term": "@Controller",
      "aliases": [],
      "category": "annotations",
      "definition": "标记 Spring MVC 控制器的注解，其方法可以返回视图或按配置返回响应体。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-005",
      "term": "@RestController",
      "aliases": [],
      "category": "annotations",
      "definition": "组合 @Controller 与 @ResponseBody，使控制器方法的返回值默认按响应体处理。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-006",
      "term": "@Autowired",
      "aliases": [],
      "category": "annotations",
      "definition": "让 Spring 按类型及限定条件解析并注入依赖的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-007",
      "term": "@Qualifier",
      "aliases": [],
      "category": "annotations",
      "definition": "为依赖注入添加限定条件，用于从同类型的多个候选 Bean 中确定合适对象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-008",
      "term": "@Bean",
      "aliases": [],
      "category": "annotations",
      "definition": "把配置方法返回的对象交给 Spring 容器管理的注解，常用于第三方类或自定义创建过程。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-009",
      "term": "@Configuration",
      "aliases": [],
      "category": "annotations",
      "definition": "标记 Spring Java 配置类的注解，常与 @Bean 方法配合定义组件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-010",
      "term": "@RequestMapping",
      "aliases": [],
      "category": "annotations",
      "definition": "把请求路径、HTTP 方法等条件映射到控制器或处理方法的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-011",
      "term": "@GetMapping",
      "aliases": [],
      "category": "annotations",
      "definition": "把符合指定路径等条件的 HTTP GET 请求映射到处理方法的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-012",
      "term": "@PostMapping",
      "aliases": [],
      "category": "annotations",
      "definition": "把符合指定路径等条件的 HTTP POST 请求映射到处理方法的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-013",
      "term": "@RequestParam",
      "aliases": [],
      "category": "annotations",
      "definition": "把查询参数或表单参数绑定到控制器方法参数的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-014",
      "term": "@PathVariable",
      "aliases": [],
      "category": "annotations",
      "definition": "把 URL 路径中的变量值绑定到控制器方法参数的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-015",
      "term": "@RequestBody",
      "aliases": [],
      "category": "annotations",
      "definition": "通过消息转换器读取请求体并绑定到 Java 参数的注解，常用于接收 JSON。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-016",
      "term": "@ResponseBody",
      "aliases": [],
      "category": "annotations",
      "definition": "让方法返回值经消息转换器写入 HTTP 响应体，而不是作为视图名称处理的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-017",
      "term": "@RestControllerAdvice",
      "aliases": [],
      "category": "annotations",
      "definition": "集中处理多个控制器的异常等逻辑，并默认按响应体返回处理结果的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-018",
      "term": "@ExceptionHandler",
      "aliases": [],
      "category": "annotations",
      "definition": "声明由某个方法处理指定异常类型的注解。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-019",
      "term": "@Valid",
      "aliases": [],
      "category": "annotations",
      "definition": "在支持的入口触发 Bean Validation 校验，并用于标记嵌套对象需要级联校验。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-020",
      "term": "@Transactional",
      "aliases": [],
      "category": "annotations",
      "definition": "声明方法或类的事务规则，由 Spring 事务基础设施按调用路径管理事务边界。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-021",
      "term": "rollbackFor",
      "aliases": [],
      "category": "annotations",
      "definition": "@Transactional 中指定哪些异常类型应触发回滚的属性，需要事务生效且能感知到失败。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-022",
      "term": "事务传播行为",
      "aliases": [
        "Propagation"
      ],
      "category": "annotations",
      "definition": "一个方法遇到已有事务时，决定加入、挂起、新建或不使用事务的规则。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-023",
      "term": "REQUIRED",
      "aliases": [],
      "category": "annotations",
      "definition": "有事务就加入、没有就新建的传播行为，是 Spring 常见的默认选择。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-024",
      "term": "REQUIRES_NEW",
      "aliases": [],
      "category": "annotations",
      "definition": "挂起外层事务并使用独立新事务的传播行为，内层提交不会随外层回滚自动撤销。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "annotations-025",
      "term": "NESTED",
      "aliases": [],
      "category": "annotations",
      "definition": "在支持的事务管理器下通常借助保存点局部回滚，外层整体回滚仍会撤销内层结果。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-001",
      "term": "JDBC",
      "aliases": [
        "Java Database Connectivity"
      ],
      "category": "mybatis",
      "definition": "Java 访问关系数据库的标准 API，提供连接、语句执行和结果读取等接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-002",
      "term": "MyBatis",
      "aliases": [],
      "category": "mybatis",
      "definition": "封装 JDBC 的持久层框架，帮助完成 SQL 映射、参数绑定和结果到对象的转换。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "M01",
        "M03"
      ]
    },
    {
      "id": "mybatis-003",
      "term": "MyBatis-Plus",
      "aliases": [],
      "category": "mybatis",
      "definition": "基于 MyBatis 提供通用增删改查等增强能力的工具，复杂 SQL 和业务规则仍需自行设计。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "M04"
      ]
    },
    {
      "id": "mybatis-004",
      "term": "ORM",
      "aliases": [
        "对象关系映射"
      ],
      "category": "mybatis",
      "definition": "在程序对象与关系数据库记录之间建立映射，减少手工组织数据转换的工作。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-005",
      "term": "Mapper",
      "aliases": [],
      "category": "mybatis",
      "definition": "MyBatis 中定义数据库操作的映射接口，通常由框架创建代理并关联到具体 SQL。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-006",
      "term": "Mapper XML",
      "aliases": [],
      "category": "mybatis",
      "definition": "保存 MyBatis SQL、结果映射和动态 SQL 配置的 XML 文件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-007",
      "term": "namespace",
      "aliases": [],
      "category": "mybatis",
      "definition": "MyBatis XML 中区分映射命名空间的标识，绑定 Mapper 接口时通常使用接口全限定名。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-008",
      "term": "SqlSession",
      "aliases": [],
      "category": "mybatis",
      "definition": "MyBatis 执行 SQL、获取 Mapper 和管理会话级状态的接口，普通实例不应被多线程共享。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-009",
      "term": "SqlSessionFactory",
      "aliases": [],
      "category": "mybatis",
      "definition": "用于创建 SqlSession 的工厂，通常在应用初始化后复用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-010",
      "term": "resultType",
      "aliases": [],
      "category": "mybatis",
      "definition": "直接指定查询结果映射到哪种 Java 类型的配置，集合查询时填写单个元素的类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-011",
      "term": "resultMap",
      "aliases": [],
      "category": "mybatis",
      "definition": "描述数据库列与 Java 属性及关联关系如何映射的配置，适合复杂结果结构。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-012",
      "term": "动态 SQL",
      "aliases": [
        "Dynamic SQL"
      ],
      "category": "mybatis",
      "definition": "根据输入条件生成不同 SQL 片段的能力，常用于可选筛选条件和批量查询。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "动态SQL"
    },
    {
      "id": "mybatis-013",
      "term": "if 标签",
      "aliases": [
        "MyBatis if"
      ],
      "category": "mybatis",
      "definition": "在 test 条件成立时才加入对应 SQL 片段的动态 SQL 标签。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-014",
      "term": "where 标签",
      "aliases": [
        "MyBatis where"
      ],
      "category": "mybatis",
      "definition": "有内容时才生成 WHERE，并处理开头多余 AND 或 OR 的动态 SQL 标签。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-015",
      "term": "foreach 标签",
      "aliases": [
        "MyBatis foreach"
      ],
      "category": "mybatis",
      "definition": "遍历集合生成 SQL 片段的标签，常用于 IN 条件或批量插入。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-016",
      "term": "set 标签",
      "aliases": [
        "MyBatis set"
      ],
      "category": "mybatis",
      "definition": "生成 UPDATE 的 SET 部分并处理末尾多余逗号的动态 SQL 标签。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-017",
      "term": "#{}",
      "aliases": [
        "MyBatis 参数绑定"
      ],
      "category": "mybatis",
      "definition": "MyBatis 用于把输入作为参数值绑定到 SQL 的写法，通常对应 PreparedStatement 的问号占位符。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-018",
      "term": "${}",
      "aliases": [
        "MyBatis 字符串替换"
      ],
      "category": "mybatis",
      "definition": "MyBatis 把内容直接替换进 SQL 的写法，接收不可信输入时容易产生 SQL 注入风险。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-019",
      "term": "一级缓存",
      "aliases": [
        "MyBatis 一级缓存"
      ],
      "category": "mybatis",
      "definition": "通常在同一 SqlSession 内复用查询结果的缓存，更新、提交和配置等因素会影响其有效性。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "一级缓存"
    },
    {
      "id": "mybatis-020",
      "term": "二级缓存",
      "aliases": [
        "MyBatis 二级缓存"
      ],
      "category": "mybatis",
      "definition": "按 Mapper 命名空间配置并跨 SqlSession 复用结果的缓存，需要显式配置及正确的失效管理。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "二级缓存"
    },
    {
      "id": "mybatis-021",
      "term": "延迟加载",
      "aliases": [
        "懒加载",
        "Lazy Loading"
      ],
      "category": "mybatis",
      "definition": "把关联数据的读取推迟到实际访问时触发，避免一开始查询暂时用不到的数据。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "延迟加载"
    },
    {
      "id": "mybatis-022",
      "term": "N+1 查询",
      "aliases": [
        "N+1"
      ],
      "category": "mybatis",
      "definition": "先执行一次列表查询，再为每条记录分别查询关联数据，导致额外产生 N 次查询的问题。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "mybatis-023",
      "term": "连接池",
      "aliases": [
        "Connection Pool"
      ],
      "category": "mybatis",
      "definition": "复用并限制数据库连接数量的组件，用于减少建连开销并控制对数据库的并发访问。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-001",
      "term": "关系数据库",
      "aliases": [
        "关系型数据库",
        "RDBMS"
      ],
      "category": "sql",
      "definition": "主要用表、行和列组织数据，并通过键和约束描述数据关系的数据库系统。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-002",
      "term": "MySQL",
      "aliases": [],
      "category": "sql",
      "definition": "一种关系数据库管理系统，业务中的事务和锁行为还取决于表使用的存储引擎。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-003",
      "term": "Oracle",
      "aliases": [
        "Oracle Database"
      ],
      "category": "sql",
      "definition": "一种关系数据库管理系统，与 MySQL 在数据类型、SQL 方言和事务细节上存在差异。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-004",
      "term": "InnoDB",
      "aliases": [],
      "category": "sql",
      "definition": "MySQL 中支持事务、行级锁、MVCC 和崩溃恢复等能力的存储引擎。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-005",
      "term": "SQL",
      "aliases": [
        "结构化查询语言"
      ],
      "category": "sql",
      "definition": "用于定义、查询和修改关系数据库数据及结构的语言。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-006",
      "term": "CRUD",
      "aliases": [
        "增删改查"
      ],
      "category": "sql",
      "definition": "创建、读取、更新和删除数据这四类基本操作的统称。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-007",
      "term": "主键",
      "aliases": [
        "Primary Key"
      ],
      "category": "sql",
      "definition": "唯一标识表中一行记录的列或列组合，其值必须唯一且不能为 NULL。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-008",
      "term": "外键",
      "aliases": [
        "Foreign Key"
      ],
      "category": "sql",
      "definition": "要求某些列的值与被引用表的键相对应，用来维护表之间引用关系的约束。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-009",
      "term": "唯一约束",
      "aliases": [
        "Unique Constraint"
      ],
      "category": "sql",
      "definition": "限制指定列或列组合不得出现违反数据库唯一性规则的重复值。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-010",
      "term": "NULL",
      "aliases": [
        "数据库空值"
      ],
      "category": "sql",
      "definition": "SQL 中表示缺失或未知的特殊标记，判断时使用 IS NULL 而不是等号比较。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-011",
      "term": "SELECT",
      "aliases": [],
      "category": "sql",
      "definition": "从表或其他查询结果中读取满足条件数据的 SQL 语句。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-012",
      "term": "INSERT",
      "aliases": [],
      "category": "sql",
      "definition": "向数据库表新增数据行的 SQL 语句。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-013",
      "term": "UPDATE",
      "aliases": [],
      "category": "sql",
      "definition": "修改表中符合条件的数据行的 SQL 语句，遗漏限制条件可能影响全部记录。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-014",
      "term": "DELETE",
      "aliases": [],
      "category": "sql",
      "definition": "按条件删除数据行的 SQL 语句，是否可回滚取决于事务、引擎及是否已经提交。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-015",
      "term": "TRUNCATE",
      "aliases": [],
      "category": "sql",
      "definition": "清空整张表的操作，在 MySQL 常见 InnoDB 场景中会隐式提交，不能当普通 DELETE 回滚。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "D08"
      ]
    },
    {
      "id": "sql-016",
      "term": "DROP",
      "aliases": [],
      "category": "sql",
      "definition": "删除表等数据库对象定义的操作，对普通表执行时会连同其中的数据一起删除。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-017",
      "term": "WHERE",
      "aliases": [],
      "category": "sql",
      "definition": "在查询或数据修改中指定行过滤条件的 SQL 子句。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-018",
      "term": "GROUP BY",
      "aliases": [],
      "category": "sql",
      "definition": "按照指定列或表达式把记录分组，常与 COUNT、SUM 等聚合函数配合使用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-019",
      "term": "HAVING",
      "aliases": [],
      "category": "sql",
      "definition": "对分组或聚合后的结果进行筛选的 SQL 子句。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-020",
      "term": "ORDER BY",
      "aliases": [],
      "category": "sql",
      "definition": "明确指定查询结果排序规则的 SQL 子句，不写时不能依赖某次返回的顺序。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-021",
      "term": "JOIN",
      "aliases": [
        "关联查询"
      ],
      "category": "sql",
      "definition": "根据关联条件把两个或多个数据来源的记录组合起来进行查询。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-022",
      "term": "INNER JOIN",
      "aliases": [
        "内连接"
      ],
      "category": "sql",
      "definition": "只返回两侧满足连接条件的记录组合，不保留未匹配的记录。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-023",
      "term": "LEFT JOIN",
      "aliases": [
        "左连接"
      ],
      "category": "sql",
      "definition": "保留左侧全部记录及其匹配结果，右侧没有匹配时用 NULL 补齐右侧列。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-024",
      "term": "RIGHT JOIN",
      "aliases": [
        "右连接"
      ],
      "category": "sql",
      "definition": "保留右侧全部记录及其匹配结果，左侧没有匹配时用 NULL 补齐左侧列。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-025",
      "term": "分页",
      "aliases": [
        "Pagination"
      ],
      "category": "sql",
      "definition": "按一定数量分段返回查询结果，需要结合稳定排序避免翻页时漏读或重复。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "sql-026",
      "term": "逻辑删除",
      "aliases": [
        "软删除",
        "Soft Delete"
      ],
      "category": "sql",
      "definition": "用状态或删除标记表示记录已删除，而不立即移除实际数据行的方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-001",
      "term": "索引",
      "aliases": [
        "Index"
      ],
      "category": "database",
      "definition": "为加快数据定位等操作维护的辅助结构，会增加存储和写入维护成本。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-002",
      "term": "B+ 树",
      "aliases": [
        "B+Tree"
      ],
      "category": "database",
      "definition": "把记录条目集中在叶子并按键连接叶子的多路平衡树，适合范围查询和按序扫描。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "B+树"
    },
    {
      "id": "database-003",
      "term": "聚簇索引",
      "aliases": [
        "Clustered Index"
      ],
      "category": "database",
      "definition": "在 InnoDB 中按键组织整行数据的索引，通常使用主键建立。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "聚簇索引"
    },
    {
      "id": "database-004",
      "term": "二级索引",
      "aliases": [
        "Secondary Index",
        "非聚簇索引"
      ],
      "category": "database",
      "definition": "InnoDB 中除聚簇索引外的索引，叶子保存索引列和主键等定位信息。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "非聚簇索引"
    },
    {
      "id": "database-005",
      "term": "回表",
      "aliases": [],
      "category": "database",
      "definition": "通过二级索引得到主键后，再访问聚簇索引读取所需其他字段的过程。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "回表"
    },
    {
      "id": "database-006",
      "term": "联合索引",
      "aliases": [
        "Composite Index"
      ],
      "category": "database",
      "definition": "把多个列按照指定先后顺序组织在同一个索引中的结构。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-007",
      "term": "最左前缀",
      "aliases": [
        "Leftmost Prefix"
      ],
      "category": "database",
      "definition": "联合索引通常从最左列连续匹配才能高效定位，跳过前导列不等于绝不可能访问该索引。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "最左前缀"
    },
    {
      "id": "database-008",
      "term": "覆盖索引",
      "aliases": [
        "Covering Index"
      ],
      "category": "database",
      "definition": "某次查询需要的字段都能从选用的索引获得，从而减少回表读取的情况。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "覆盖索引"
    },
    {
      "id": "database-009",
      "term": "索引下推",
      "aliases": [
        "ICP",
        "Index Condition Pushdown"
      ],
      "category": "database",
      "definition": "在索引层先判断可判断的条件，减少读取不符合条件的完整数据行。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-010",
      "term": "执行计划",
      "aliases": [
        "Execution Plan"
      ],
      "category": "database",
      "definition": "数据库准备采用的访问路径、索引和连接方式等执行安排，通常通过 EXPLAIN 查看。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "执行计划"
    },
    {
      "id": "database-011",
      "term": "慢查询",
      "aliases": [
        "Slow Query"
      ],
      "category": "database",
      "definition": "执行时间超过设定阈值的查询，可以通过日志和执行计划定位原因。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "慢查询"
    },
    {
      "id": "database-012",
      "term": "事务",
      "aliases": [
        "Transaction"
      ],
      "category": "database",
      "definition": "把一组数据库操作作为一个工作单元提交或回滚，避免只完成其中一部分。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "事务"
    },
    {
      "id": "database-013",
      "term": "提交",
      "aliases": [
        "COMMIT"
      ],
      "category": "database",
      "definition": "确认当前事务的修改，使结果按数据库的持久化规则保存。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-014",
      "term": "回滚",
      "aliases": [
        "ROLLBACK"
      ],
      "category": "database",
      "definition": "撤销事务尚未提交的相关修改，或退回到事务中的某个保存点。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-015",
      "term": "ACID",
      "aliases": [],
      "category": "database",
      "definition": "事务的原子性、一致性、隔离性和持久性四项性质的统称。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "ACID"
    },
    {
      "id": "database-016",
      "term": "事务原子性",
      "aliases": [
        "Atomicity"
      ],
      "category": "database",
      "definition": "同一事务中的修改作为整体成功或撤销，不留下只提交一部分的结果。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-017",
      "term": "事务一致性",
      "aliases": [
        "Consistency"
      ],
      "category": "database",
      "definition": "事务执行前后应满足定义好的数据约束和业务规则，需要数据库与业务代码共同保证。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-018",
      "term": "事务隔离性",
      "aliases": [
        "Isolation"
      ],
      "category": "database",
      "definition": "限制并发事务之间可以观察和影响哪些数据，具体保证由隔离级别决定。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-019",
      "term": "事务持久性",
      "aliases": [
        "Durability"
      ],
      "category": "database",
      "definition": "事务提交后，其结果按数据库配置和存储系统的保障保留下来。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-020",
      "term": "隔离级别",
      "aliases": [
        "Isolation Level"
      ],
      "category": "database",
      "definition": "规定并发事务能读取哪些版本以及如何相互隔离的一组规则。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "隔离级别"
    },
    {
      "id": "database-021",
      "term": "脏读",
      "aliases": [
        "Dirty Read"
      ],
      "category": "database",
      "definition": "一个事务读到了另一个事务尚未提交、之后可能回滚的数据。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "脏读"
    },
    {
      "id": "database-022",
      "term": "不可重复读",
      "aliases": [
        "Non-repeatable Read"
      ],
      "category": "database",
      "definition": "同一事务再次读取同一记录时，因为其他事务提交了修改而读到不同结果。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "不可重复读"
    },
    {
      "id": "database-023",
      "term": "幻读",
      "aliases": [
        "Phantom Read"
      ],
      "category": "database",
      "definition": "同一事务按相同条件再次查询时，因其他事务提交的变化而看到不同的匹配记录集合。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "幻读"
    },
    {
      "id": "database-024",
      "term": "MVCC",
      "aliases": [
        "多版本并发控制"
      ],
      "category": "database",
      "definition": "保存并选择数据的可见版本，让符合条件的读取可以使用历史版本而减少与写入直接冲突。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "MVCC"
    },
    {
      "id": "database-025",
      "term": "Read View",
      "aliases": [
        "读视图"
      ],
      "category": "database",
      "definition": "InnoDB 一致性读用来判断哪些事务版本对当前读取可见的一组信息。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-026",
      "term": "快照读",
      "aliases": [
        "Snapshot Read"
      ],
      "category": "database",
      "definition": "按照一致性视图读取可见版本的查询方式，常见于 InnoDB 的普通一致性 SELECT。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "快照读"
    },
    {
      "id": "database-027",
      "term": "当前读",
      "aliases": [
        "锁定读",
        "Current Read"
      ],
      "category": "database",
      "definition": "常见于锁定查询和更新操作，基于当前记录及必要锁进行处理，而不是只读取旧快照。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-028",
      "term": "行锁",
      "aliases": [
        "Row Lock"
      ],
      "category": "database",
      "definition": "限制冲突访问特定记录的锁，在 InnoDB 中通常作用于索引记录。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "行锁"
    },
    {
      "id": "database-029",
      "term": "表锁",
      "aliases": [
        "Table Lock"
      ],
      "category": "database",
      "definition": "以整张表为保护范围的锁，可能限制其他会话对表的并发操作。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "表锁"
    },
    {
      "id": "database-030",
      "term": "间隙锁",
      "aliases": [
        "Gap Lock"
      ],
      "category": "database",
      "definition": "在 InnoDB 中限制向某段索引间隙插入记录的锁，不等于锁住一条已有记录。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "间隙锁"
    },
    {
      "id": "database-031",
      "term": "临键锁",
      "aliases": [
        "Next-Key Lock"
      ],
      "category": "database",
      "definition": "InnoDB 中把索引记录锁与其前方间隙锁结合起来的范围锁。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-032",
      "term": "乐观锁",
      "aliases": [
        "Optimistic Locking"
      ],
      "category": "database",
      "definition": "更新时检查版本或条件是否仍满足，不满足就失败或重试的并发控制方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-033",
      "term": "悲观锁",
      "aliases": [
        "Pessimistic Locking"
      ],
      "category": "database",
      "definition": "先锁住需要保护的数据，再进行检查和修改的并发控制方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "database-034",
      "term": "redo log",
      "aliases": [
        "重做日志"
      ],
      "category": "database",
      "definition": "InnoDB 用来记录恢复所需修改信息的日志，支持崩溃后的重做恢复。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "redo log"
    },
    {
      "id": "database-035",
      "term": "undo log",
      "aliases": [
        "回滚日志"
      ],
      "category": "database",
      "definition": "保存撤销修改和构造旧版本所需信息的日志，服务于事务回滚与 MVCC。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "undo log"
    },
    {
      "id": "database-036",
      "term": "binlog",
      "aliases": [
        "二进制日志"
      ],
      "category": "database",
      "definition": "MySQL 服务器层记录数据变更的日志，常用于复制和基于备份的时间点恢复。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "binlog"
    },
    {
      "id": "redis-001",
      "term": "Redis",
      "aliases": [],
      "category": "redis",
      "definition": "主要在内存中操作数据的键值数据结构服务，常用于缓存、计数和消息等场景。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-002",
      "term": "缓存",
      "aliases": [
        "Cache"
      ],
      "category": "redis",
      "definition": "保存可复用数据副本以减少重复计算或回源读取的机制，需要考虑更新和失效。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-003",
      "term": "缓存命中",
      "aliases": [
        "Cache Hit"
      ],
      "category": "redis",
      "definition": "一次读取直接在缓存中找到可用结果，而不必继续访问后端数据源。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-004",
      "term": "Redis String",
      "aliases": [],
      "category": "redis",
      "definition": "Redis 的二进制安全字符串类型，可保存文本、序列化数据或用于数值计数。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-005",
      "term": "Redis Hash",
      "aliases": [],
      "category": "redis",
      "definition": "在一个 Redis 键下保存多个字段和值的类型，常用于组织对象属性。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-006",
      "term": "Redis List",
      "aliases": [],
      "category": "redis",
      "definition": "按照顺序保存字符串元素并支持两端操作的 Redis 类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-007",
      "term": "Redis Set",
      "aliases": [],
      "category": "redis",
      "definition": "保存不重复字符串成员并支持交集、并集等操作的 Redis 类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-008",
      "term": "ZSet",
      "aliases": [
        "Sorted Set",
        "有序集合"
      ],
      "category": "redis",
      "definition": "为不重复成员关联分数并支持按分数排序、排名和范围查询的 Redis 类型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-009",
      "term": "TTL",
      "aliases": [
        "Time To Live",
        "生存时间"
      ],
      "category": "redis",
      "definition": "缓存键等数据的有效时长设置，不保证到期瞬间就完成物理内存释放。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-010",
      "term": "过期删除",
      "aliases": [],
      "category": "redis",
      "definition": "针对已经到达过期时间的数据进行清理，与内存不足时触发的淘汰不是同一机制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-011",
      "term": "内存淘汰",
      "aliases": [
        "淘汰策略",
        "Eviction"
      ],
      "category": "redis",
      "definition": "内存达到限制时按策略选择数据移除，以便控制缓存容量。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "淘汰策略"
    },
    {
      "id": "redis-012",
      "term": "LRU",
      "aliases": [
        "最近最少使用"
      ],
      "category": "redis",
      "definition": "优先淘汰较长时间未被访问的数据的策略，实际系统可能采用近似实现。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-013",
      "term": "LFU",
      "aliases": [
        "最不经常使用"
      ],
      "category": "redis",
      "definition": "优先淘汰访问频率较低的数据的策略，具体频次统计方式取决于实现。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-014",
      "term": "缓存穿透",
      "aliases": [],
      "category": "redis",
      "definition": "反复查询缓存和数据库中都不存在的数据，导致无效请求持续访问数据库。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "缓存穿透"
    },
    {
      "id": "redis-015",
      "term": "缓存击穿",
      "aliases": [],
      "category": "redis",
      "definition": "某个热点缓存失效后，大量请求同时访问后端并重建同一份缓存。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "缓存击穿"
    },
    {
      "id": "redis-016",
      "term": "缓存雪崩",
      "aliases": [],
      "category": "redis",
      "definition": "大量缓存同时失效或缓存服务整体故障，使后端在短时间内承受大量回源请求。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "缓存雪崩"
    },
    {
      "id": "redis-017",
      "term": "Cache Aside",
      "aliases": [
        "旁路缓存"
      ],
      "category": "redis",
      "definition": "读取时先查缓存、未命中再查库回填，写入时通常先提交数据库再使相关缓存失效的模式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "redis-018",
      "term": "热 key",
      "aliases": [
        "Hot Key",
        "热点键"
      ],
      "category": "redis",
      "definition": "被大量请求集中访问的缓存键，可能使其所在节点成为瓶颈。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "热key"
    },
    {
      "id": "redis-019",
      "term": "大 key",
      "aliases": [
        "Big Key",
        "大键"
      ],
      "category": "redis",
      "definition": "值体积过大或集合成员过多的缓存键，可能加重内存、网络和处理开销。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "大key"
    },
    {
      "id": "redis-020",
      "term": "持久化",
      "aliases": [
        "Persistence"
      ],
      "category": "redis",
      "definition": "把需要保留的数据写入持久存储，以便进程重启或故障后按相应保障恢复。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "持久化"
    },
    {
      "id": "redis-021",
      "term": "RDB",
      "aliases": [],
      "category": "redis",
      "definition": "Redis 把某个时点的数据保存成快照的持久化方式，快照之后的变化可能尚未保存。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "RDB"
    },
    {
      "id": "redis-022",
      "term": "AOF",
      "aliases": [],
      "category": "redis",
      "definition": "Redis 记录写操作并按策略同步日志的持久化方式，故障丢失窗口取决于刷盘等配置。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "AOF"
    },
    {
      "id": "redis-023",
      "term": "布隆过滤器",
      "aliases": [
        "Bloom Filter"
      ],
      "category": "redis",
      "definition": "以少量空间判断元素是否可能存在的结构，正常维护时不会漏判已加入的元素，但可能误判未加入的元素。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "R04"
      ]
    },
    {
      "id": "redis-024",
      "term": "分布式锁",
      "aliases": [
        "Distributed Lock"
      ],
      "category": "redis",
      "definition": "让多个进程协调访问共享资源的锁机制，是否可靠取决于租约、故障处理和资源端校验。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "分布式锁",
      "sourceIds": [
        "R05"
      ]
    },
    {
      "id": "network-001",
      "term": "HTTP",
      "aliases": [],
      "category": "network",
      "definition": "规定客户端与服务端如何交换请求和响应的应用层协议，本身不自动保存用户登录状态。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-002",
      "term": "HTTPS",
      "aliases": [],
      "category": "network",
      "definition": "使用 TLS 保护 HTTP 通信的方式，提供传输加密、完整性校验和对端身份验证能力。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "HTTPS"
    },
    {
      "id": "network-003",
      "term": "TLS",
      "aliases": [
        "Transport Layer Security"
      ],
      "category": "network",
      "definition": "保护网络通信机密性和完整性并支持身份验证的安全协议。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "TLS"
    },
    {
      "id": "network-004",
      "term": "TCP",
      "aliases": [],
      "category": "network",
      "definition": "提供可靠、有序字节流传输的传输层协议，应用仍需定义消息边界。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "TCP"
    },
    {
      "id": "network-005",
      "term": "UDP",
      "aliases": [],
      "category": "network",
      "definition": "按数据报发送内容的传输层协议，本身不保证可靠交付、顺序或去重。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "UDP"
    },
    {
      "id": "network-006",
      "term": "IP 地址",
      "aliases": [
        "IP Address"
      ],
      "category": "network",
      "definition": "网络层用于标识和寻址网络接口的地址，不等于具体应用服务的身份。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-007",
      "term": "端口",
      "aliases": [
        "Port"
      ],
      "category": "network",
      "definition": "与网络地址和协议配合定位通信端点的编号，例如服务可监听某个 TCP 端口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-008",
      "term": "DNS",
      "aliases": [
        "域名系统"
      ],
      "category": "network",
      "definition": "把域名等名称解析为相应网络记录的系统，常用于查找服务器 IP 地址。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "DNS"
    },
    {
      "id": "network-009",
      "term": "URL",
      "aliases": [],
      "category": "network",
      "definition": "描述资源访问位置和方式的地址，通常包含协议、主机、路径及可选查询参数。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-010",
      "term": "API",
      "aliases": [
        "应用程序接口"
      ],
      "category": "network",
      "definition": "规定软件之间如何调用能力或交换数据的接口约定，不限于 HTTP 接口。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-011",
      "term": "请求参数",
      "aliases": [],
      "category": "network",
      "definition": "客户端提交给接口的输入，可位于路径、查询串、请求头或请求体中。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-012",
      "term": "请求头",
      "aliases": [
        "Request Header"
      ],
      "category": "network",
      "definition": "HTTP 请求中携带方法和目标之外的元信息字段，例如认证信息和可接受的数据格式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-013",
      "term": "请求体",
      "aliases": [
        "Request Body"
      ],
      "category": "network",
      "definition": "HTTP 请求承载的内容部分，常用于提交 JSON、表单或文件数据。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-014",
      "term": "Content-Type",
      "aliases": [
        "媒体类型"
      ],
      "category": "network",
      "definition": "说明请求体或响应体采用什么媒体格式的 HTTP 字段，例如 application/json。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-015",
      "term": "GET",
      "aliases": [],
      "category": "network",
      "definition": "用于获取目标资源表示的 HTTP 方法，协议语义要求安全且幂等。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-016",
      "term": "POST",
      "aliases": [],
      "category": "network",
      "definition": "请求目标资源按自身规则处理所提交内容的 HTTP 方法，协议不保证它具有幂等性。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-017",
      "term": "PUT",
      "aliases": [],
      "category": "network",
      "definition": "请求创建或替换目标资源状态的 HTTP 方法，协议语义具有幂等性。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-018",
      "term": "DELETE 方法",
      "aliases": [
        "HTTP DELETE"
      ],
      "category": "network",
      "definition": "请求移除目标资源关联的 HTTP 方法，重复请求的状态码可以不同但语义仍具有幂等性。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-019",
      "term": "HTTP 状态码",
      "aliases": [
        "Status Code",
        "状态码"
      ],
      "category": "network",
      "definition": "服务端用三位数字说明请求处理结果的标记，例如 200、404 和 500。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "状态码"
    },
    {
      "id": "network-020",
      "term": "RESTful",
      "aliases": [
        "REST"
      ],
      "category": "network",
      "definition": "按资源和统一接口组织交互并遵守无状态等约束的架构风格，不等于必须使用 JSON 或 JWT。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "RESTful"
    },
    {
      "id": "network-021",
      "term": "Cookie",
      "aliases": [],
      "category": "network",
      "definition": "浏览器保存并按域、路径及安全规则随请求发送的数据，常用于携带会话标识。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "Cookie"
    },
    {
      "id": "network-022",
      "term": "Session",
      "aliases": [
        "会话"
      ],
      "category": "network",
      "definition": "服务端为一段交互保存的用户状态，通常通过会话标识与客户端请求关联。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "Session"
    },
    {
      "id": "network-023",
      "term": "访问令牌",
      "aliases": [
        "Access Token",
        "鉴权 Token"
      ],
      "category": "network",
      "definition": "客户端提交给服务端用于访问受保护资源的凭证，可以是随机标识或结构化令牌。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-024",
      "term": "JWT",
      "aliases": [
        "JSON Web Token"
      ],
      "category": "network",
      "definition": "用紧凑结构携带声明的令牌格式，常见签名形式可校验完整性但不自动隐藏内容。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "JWT",
      "sourceIds": [
        "N09"
      ]
    },
    {
      "id": "network-025",
      "term": "认证",
      "aliases": [
        "Authentication"
      ],
      "category": "network",
      "definition": "验证访问者身份的过程，回答的是访问者是谁。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-026",
      "term": "授权",
      "aliases": [
        "Authorization"
      ],
      "category": "network",
      "definition": "判断已识别的访问者能否执行某项操作或访问某项资源的过程。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-027",
      "term": "越权",
      "aliases": [
        "Broken Access Control"
      ],
      "category": "network",
      "definition": "访问者突破应有权限范围，读取或操作了原本不被允许访问的资源。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-028",
      "term": "跨域",
      "aliases": [
        "Cross-origin"
      ],
      "category": "network",
      "definition": "浏览器访问与当前页面协议、主机或端口不同的源，相关读取行为会受到同源策略限制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-029",
      "term": "CORS",
      "aliases": [
        "跨源资源共享"
      ],
      "category": "network",
      "definition": "通过 HTTP 响应头等规则控制浏览器是否允许跨源脚本读取响应的机制，不代替身份校验。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-030",
      "term": "SQL 注入",
      "aliases": [
        "SQL Injection"
      ],
      "category": "network",
      "definition": "不可信输入被拼接成可执行 SQL 的一部分，从而改变原查询意图的攻击方式。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "SQL注入"
    },
    {
      "id": "network-031",
      "term": "XSS",
      "aliases": [
        "跨站脚本"
      ],
      "category": "network",
      "definition": "攻击者把恶意脚本注入页面，使其在其他用户的浏览器中执行的攻击方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-032",
      "term": "CSRF",
      "aliases": [
        "跨站请求伪造"
      ],
      "category": "network",
      "definition": "诱导浏览器带着已有身份凭证向目标站点发起非本人意愿操作的攻击方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "network-033",
      "term": "SSE",
      "aliases": [
        "Server-Sent Events"
      ],
      "category": "network",
      "definition": "基于 HTTP 以 text/event-stream 格式向客户端持续发送文本事件的单向推送机制。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "SSE",
      "sourceIds": [
        "N07"
      ]
    },
    {
      "id": "network-034",
      "term": "WebSocket",
      "aliases": [],
      "category": "network",
      "definition": "建立后允许客户端和服务端在同一连接上双向发送消息的通信协议。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "WebSocket"
    },
    {
      "id": "network-035",
      "term": "三次握手",
      "aliases": [
        "TCP 握手"
      ],
      "category": "network",
      "definition": "TCP 通过 SYN、SYN-ACK 和 ACK 等交互建立连接并同步双方初始序列号的过程。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "三次握手"
    },
    {
      "id": "network-036",
      "term": "四次挥手",
      "aliases": [
        "TCP 连接关闭"
      ],
      "category": "network",
      "definition": "TCP 双方分别发送 FIN 并确认以关闭两个传输方向的典型过程，部分报文可以合并。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "四次挥手"
    },
    {
      "id": "network-037",
      "term": "粘包与拆包",
      "aliases": [
        "粘包",
        "拆包"
      ],
      "category": "network",
      "definition": "TCP 不保留应用消息边界，导致一次读取可能包含多条消息或只有一条消息的一部分。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "粘包"
    },
    {
      "id": "network-038",
      "term": "IO 多路复用",
      "aliases": [],
      "category": "network",
      "definition": "通过一次等待监听多个 IO 通道的就绪状态，再处理可读或可写的通道。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "IO多路复用"
    },
    {
      "id": "reliability-001",
      "term": "MQ",
      "aliases": [
        "消息队列",
        "Message Queue"
      ],
      "category": "reliability",
      "definition": "在发送方和处理方之间传递消息的中间组件，常用于异步处理、解耦和缓冲流量。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-002",
      "term": "生产者",
      "aliases": [
        "Producer"
      ],
      "category": "reliability",
      "definition": "负责向消息系统发送消息的程序或组件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-003",
      "term": "消费者",
      "aliases": [
        "Consumer"
      ],
      "category": "reliability",
      "definition": "从消息系统接收消息并执行业务处理的程序或组件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-004",
      "term": "Topic",
      "aliases": [
        "主题"
      ],
      "category": "reliability",
      "definition": "用于组织和分类消息的逻辑名称，生产者和消费者通过它确定消息所属范围。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-005",
      "term": "消息确认",
      "aliases": [
        "ACK",
        "消费确认"
      ],
      "category": "reliability",
      "definition": "消费者通知消息系统已完成指定消息处理的机制，需与业务实际完成时点匹配。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-006",
      "term": "重复消费",
      "aliases": [],
      "category": "reliability",
      "definition": "同一逻辑消息被再次交给业务处理的情况，消费者需要防止重复产生业务副作用。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-007",
      "term": "消息积压",
      "aliases": [],
      "category": "reliability",
      "definition": "消息进入速度长期超过处理速度，导致待处理消息不断增加的现象。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-008",
      "term": "死信队列",
      "aliases": [
        "Dead Letter Queue",
        "DLQ"
      ],
      "category": "reliability",
      "definition": "接收因拒绝、过期或重试耗尽等原因转出的消息，具体触发条件取决于消息系统。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-009",
      "term": "Kafka",
      "aliases": [],
      "category": "reliability",
      "definition": "通过主题、分区和持久化日志组织数据的分布式事件流平台，支持发布、订阅和重放事件。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-010",
      "term": "RabbitMQ",
      "aliases": [],
      "category": "reliability",
      "definition": "支持队列、路由和消息确认等能力的消息代理，用于在应用之间可靠传递消息。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-011",
      "term": "幂等",
      "aliases": [
        "Idempotency"
      ],
      "category": "reliability",
      "definition": "同一逻辑操作重复执行不会比执行一次产生额外业务影响，不要求每次响应完全相同。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "幂等"
    },
    {
      "id": "reliability-012",
      "term": "幂等键",
      "aliases": [
        "Idempotency Key"
      ],
      "category": "reliability",
      "definition": "用于识别同一次逻辑操作的稳定标识，使服务能够识别重试并避免重复处理。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-013",
      "term": "重试",
      "aliases": [
        "Retry"
      ],
      "category": "reliability",
      "definition": "操作失败或结果未知时再次尝试，必须结合次数上限、等待间隔和幂等要求。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-014",
      "term": "超时",
      "aliases": [
        "Timeout"
      ],
      "category": "reliability",
      "definition": "在规定时间内没有等到期望结果，不代表对方一定没有执行成功。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-015",
      "term": "限流",
      "aliases": [
        "Rate Limiting"
      ],
      "category": "reliability",
      "definition": "按速率或并发量限制进入系统的请求，避免流量超过服务承受能力。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-016",
      "term": "熔断",
      "aliases": [
        "Circuit Breaker"
      ],
      "category": "reliability",
      "definition": "下游持续失败时暂时停止正常调用，并在合适时机试探恢复的保护机制。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "E07"
      ]
    },
    {
      "id": "reliability-017",
      "term": "降级",
      "aliases": [
        "Fallback"
      ],
      "category": "reliability",
      "definition": "主流程不可用或资源紧张时，改用备用结果、简化功能或明确拒绝部分服务。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-018",
      "term": "负载均衡",
      "aliases": [
        "Load Balancing"
      ],
      "category": "reliability",
      "definition": "按一定规则把请求分配给多个服务实例，分散单个实例的处理压力。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-019",
      "term": "最终一致性",
      "aliases": [
        "Eventual Consistency"
      ],
      "category": "reliability",
      "definition": "在没有持续新更新且同步能够完成的前提下，各数据副本最终会达到一致状态。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "reliability-020",
      "term": "Outbox",
      "aliases": [
        "事务发件箱"
      ],
      "category": "reliability",
      "definition": "把业务修改和待发送事件写入同一数据库事务，再由后台可靠投递并配合消费端幂等的模式。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "E06"
      ]
    },
    {
      "id": "reliability-021",
      "term": "状态机",
      "aliases": [
        "State Machine"
      ],
      "category": "reliability",
      "definition": "用明确状态和允许的迁移规则表达业务过程，例如订单只能按规定从待支付变为已支付。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-001",
      "term": "Maven",
      "aliases": [],
      "category": "engineering",
      "definition": "通过项目配置管理依赖、编译、测试和打包等构建过程的 Java 工具。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-002",
      "term": "pom.xml",
      "aliases": [
        "POM"
      ],
      "category": "engineering",
      "definition": "Maven 项目的配置文件，用于声明项目信息、依赖、插件和构建规则。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-003",
      "term": "依赖",
      "aliases": [
        "Dependency"
      ],
      "category": "engineering",
      "definition": "项目需要调用的外部库或模块，通常需要明确版本和引入范围。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-004",
      "term": "依赖冲突",
      "aliases": [
        "Dependency Conflict"
      ],
      "category": "engineering",
      "definition": "同一库被引入不兼容版本或运行时加载版本不符合预期，导致编译或运行异常的问题。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-005",
      "term": "Git",
      "aliases": [],
      "category": "engineering",
      "definition": "记录文件变更历史并支持分支协作的分布式版本控制系统。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-006",
      "term": "分支",
      "aliases": [
        "Branch"
      ],
      "category": "engineering",
      "definition": "Git 中指向一条开发历史的可移动引用，可用于并行开发不同功能。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-007",
      "term": "Git 提交",
      "aliases": [
        "Git Commit"
      ],
      "category": "engineering",
      "definition": "Git 对某一时点项目内容及其元信息的记录，用于保存和追踪变更历史。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-008",
      "term": "合并冲突",
      "aliases": [
        "Merge Conflict"
      ],
      "category": "engineering",
      "definition": "Git 无法自动协调不同改动，需要开发者确认最终内容的情况。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-009",
      "term": "Git Worktree",
      "aliases": [
        "Worktree"
      ],
      "category": "engineering",
      "definition": "让同一仓库拥有多个独立工作目录的机制，方便并行处理不同分支或任务。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-010",
      "term": "Docker",
      "aliases": [],
      "category": "engineering",
      "definition": "围绕容器镜像构建、分发和运行应用的工具与平台。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-011",
      "term": "Docker 容器",
      "aliases": [
        "Container"
      ],
      "category": "engineering",
      "definition": "根据镜像启动的隔离进程环境，通常共享运行它的宿主系统内核。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-012",
      "term": "镜像",
      "aliases": [
        "Image"
      ],
      "category": "engineering",
      "definition": "包含运行应用所需文件和配置的只读模板，可据此创建容器。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-013",
      "term": "环境变量",
      "aliases": [
        "Environment Variable"
      ],
      "category": "engineering",
      "definition": "由运行环境提供给进程的配置值，常用于传入端口、路径和服务连接配置。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-014",
      "term": "日志",
      "aliases": [
        "Log"
      ],
      "category": "engineering",
      "definition": "程序记录的运行事件与上下文信息，用于排查故障和了解系统行为。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-015",
      "term": "traceId",
      "aliases": [
        "链路追踪标识"
      ],
      "category": "engineering",
      "definition": "关联一次请求在不同组件或服务中执行记录的标识，便于串联日志和定位问题。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-016",
      "term": "线程转储",
      "aliases": [
        "Thread Dump"
      ],
      "category": "engineering",
      "definition": "记录某一时刻线程调用栈及状态等信息的诊断数据，常用于分析阻塞和死锁。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-017",
      "term": "堆转储",
      "aliases": [
        "Heap Dump"
      ],
      "category": "engineering",
      "definition": "记录堆中对象及引用关系等信息的诊断数据，常用于分析内存占用和对象持有者。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-018",
      "term": "单元测试",
      "aliases": [
        "Unit Test"
      ],
      "category": "engineering",
      "definition": "针对较小代码单元验证其行为的测试，通常通过替身隔离外部依赖。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-019",
      "term": "集成测试",
      "aliases": [
        "Integration Test"
      ],
      "category": "engineering",
      "definition": "验证多个组件或外部系统组合后是否能正确协作的测试。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "engineering-020",
      "term": "回归测试",
      "aliases": [
        "Regression Test"
      ],
      "category": "engineering",
      "definition": "在代码变更后重新验证既有行为，检查是否引入原来不存在的问题。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-001",
      "term": "LLM",
      "aliases": [
        "大语言模型",
        "Large Language Model"
      ],
      "category": "ai",
      "definition": "通过大量数据训练、能够根据上下文理解和生成语言等内容的模型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-002",
      "term": "Prompt",
      "aliases": [
        "提示词"
      ],
      "category": "ai",
      "definition": "提交给模型的任务指令和相关上下文，用于说明希望它完成什么以及遵守哪些要求。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-003",
      "term": "Token（模型）",
      "aliases": [
        "词元",
        "模型 Token"
      ],
      "category": "ai",
      "definition": "模型处理文本时使用的切分单位，可能是一个字、词的一部分或其他字符组合。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "A01"
      ]
    },
    {
      "id": "ai-004",
      "term": "上下文窗口",
      "aliases": [
        "Context Window"
      ],
      "category": "ai",
      "definition": "模型单次处理能够容纳的输入与输出等 token 数量范围，具体计算规则取决于模型。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-005",
      "term": "流式输出",
      "aliases": [
        "Streaming",
        "流式"
      ],
      "category": "ai",
      "definition": "在模型生成过程中逐步发送结果，让使用者不必等全部生成完才看到内容。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "流式"
    },
    {
      "id": "ai-006",
      "term": "Embedding",
      "aliases": [
        "嵌入向量",
        "向量化"
      ],
      "category": "ai",
      "definition": "把文本等输入转换为数值向量，使应用能用距离或相似度比较其特征。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "Embedding"
    },
    {
      "id": "ai-007",
      "term": "向量检索",
      "aliases": [
        "Vector Search"
      ],
      "category": "ai",
      "definition": "将问题和资料表示为向量后，按相似度寻找候选资料的检索方式。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "向量检索"
    },
    {
      "id": "ai-008",
      "term": "向量数据库",
      "aliases": [
        "Vector Database"
      ],
      "category": "ai",
      "definition": "提供向量存储、相似度检索和相关元数据过滤能力的数据管理系统。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-009",
      "term": "RAG",
      "aliases": [
        "检索增强生成"
      ],
      "category": "ai",
      "definition": "先检索与问题相关的资料，再将资料作为上下文交给模型生成回答的流程。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "RAG"
    },
    {
      "id": "ai-010",
      "term": "文档切分",
      "aliases": [
        "Chunking",
        "分块"
      ],
      "category": "ai",
      "definition": "把长文档拆成适合索引和检索的片段，同时尽量保留片段所需的上下文。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-011",
      "term": "重排序",
      "aliases": [
        "Rerank",
        "重排"
      ],
      "category": "ai",
      "definition": "对初步检索出的候选资料再次评估相关性，把更合适的内容排到前面。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-012",
      "term": "模型幻觉",
      "aliases": [
        "Hallucination"
      ],
      "category": "ai",
      "definition": "模型生成看似可信但与事实、给定资料或实际执行结果不符的内容。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-013",
      "term": "Tool Calling",
      "aliases": [
        "Function Calling",
        "工具调用"
      ],
      "category": "ai",
      "definition": "模型提出结构化的工具名称和参数，再由应用校验并执行相应工具的机制。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-014",
      "term": "Agent",
      "aliases": [
        "智能体",
        "AI Agent"
      ],
      "category": "ai",
      "definition": "围绕目标使用模型进行判断，并结合工具调用和反馈推进任务的应用系统。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-015",
      "term": "MCP",
      "aliases": [
        "Model Context Protocol"
      ],
      "category": "ai",
      "definition": "为 AI 应用与外部工具、资源等建立统一连接方式的协议，不等于模型本身的工具调用能力。",
      "selectionOrigin": "本轮补充概念",
      "sourceIds": [
        "A04"
      ]
    },
    {
      "id": "ai-016",
      "term": "会话记忆",
      "aliases": [
        "Chat Memory"
      ],
      "category": "ai",
      "definition": "为后续模型调用保留必要历史信息的机制，可以使用窗口、摘要和持久化存储等方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-017",
      "term": "滑动窗口",
      "aliases": [
        "会话滑动窗口"
      ],
      "category": "ai",
      "definition": "在会话上下文中只保留最近一段消息或 token 内容，以控制持续增长的上下文长度。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "滑动窗口"
    },
    {
      "id": "ai-018",
      "term": "提示注入",
      "aliases": [
        "Prompt Injection"
      ],
      "category": "ai",
      "definition": "不可信文本试图被模型当作指令执行，从而改变任务或诱导越权行为的攻击方式。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-019",
      "term": "人工审批",
      "aliases": [
        "Human in the Loop"
      ],
      "category": "ai",
      "definition": "在敏感或重要动作执行前取得人的有效确认，并把确认与具体待执行操作关联起来。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-020",
      "term": "Spring AI",
      "aliases": [],
      "category": "ai",
      "definition": "为 Spring 应用提供模型调用、工具调用和检索增强等开发抽象的框架。",
      "selectionOrigin": "本轮补充概念"
    },
    {
      "id": "ai-021",
      "term": "LangChain4j",
      "aliases": [],
      "category": "ai",
      "definition": "为 Java 应用封装模型调用、会话记忆、工具与检索等能力的开发库。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "LangChain4j",
      "sourceIds": [
        "A06"
      ]
    },
    {
      "id": "ai-022",
      "term": "NL2SQL",
      "aliases": [
        "Text-to-SQL",
        "自然语言转 SQL"
      ],
      "category": "ai",
      "definition": "把自然语言问题转换成 SQL 或结构化查询计划，再经权限和安全校验后查询数据库。",
      "selectionOrigin": "原词典概念重述",
      "referenceTerm": "NL2SQL"
    }
  ],
  "lookupNormalization": "Unicode NFKC + 去掉空白 + 大小写不敏感；lookup 的值是 terms 中的 id。",
  "lookup": {
    "#{}": "mybatis-017",
    "${}": "mybatis-018",
    "@autowired": "annotations-006",
    "@bean": "annotations-008",
    "@component": "annotations-001",
    "@configuration": "annotations-009",
    "@controller": "annotations-004",
    "@exceptionhandler": "annotations-018",
    "@getmapping": "annotations-011",
    "@pathvariable": "annotations-014",
    "@postmapping": "annotations-012",
    "@qualifier": "annotations-007",
    "@repository": "annotations-003",
    "@requestbody": "annotations-015",
    "@requestmapping": "annotations-010",
    "@requestparam": "annotations-013",
    "@responsebody": "annotations-016",
    "@restcontroller": "annotations-005",
    "@restcontrolleradvice": "annotations-017",
    "@service": "annotations-002",
    "@transactional": "annotations-020",
    "@valid": "annotations-019",
    "aba": "concurrency-022",
    "aba问题": "concurrency-022",
    "abstractclass": "java-014",
    "abstractqueuedsynchronizer": "concurrency-043",
    "accesstoken": "network-023",
    "acid": "database-015",
    "ack": "reliability-005",
    "advice": "spring-015",
    "agent": "ai-014",
    "aiagent": "ai-014",
    "annotation": "java-029",
    "aof": "redis-022",
    "aop": "spring-011",
    "api": "network-010",
    "applicationcontext": "spring-007",
    "aqs": "concurrency-043",
    "array": "collections-023",
    "arraydeque": "collections-020",
    "arraylist": "collections-007",
    "aspect": "spring-012",
    "aspect-orientedprogramming": "spring-011",
    "asynchronous": "concurrency-006",
    "atomicity": "database-016",
    "authentication": "network-025",
    "authorization": "network-026",
    "auto-configuration": "spring-029",
    "b+tree": "database-002",
    "b+树": "database-002",
    "bean": "spring-005",
    "beanfactory": "spring-006",
    "bean生命周期": "spring-026",
    "bigdecimal": "io-007",
    "bigkey": "redis-019",
    "binlog": "database-036",
    "blocking": "concurrency-007",
    "blockingqueue": "concurrency-040",
    "bloomfilter": "redis-023",
    "boxing": "java-024",
    "branch": "engineering-006",
    "brokenaccesscontrol": "network-027",
    "bufferedstream": "io-020",
    "bytecode": "jvm-004",
    "bytestream": "io-018",
    "cache": "redis-002",
    "cacheaside": "redis-017",
    "cachehit": "redis-003",
    "callable": "concurrency-035",
    "cas": "concurrency-021",
    "cglib": "spring-018",
    "characterencoding": "io-021",
    "characterset": "io-022",
    "characterstream": "io-019",
    "chatmemory": "ai-016",
    "checkedexception": "io-010",
    "chunking": "ai-010",
    "circuitbreaker": "reliability-016",
    "circulardependency": "spring-027",
    "class": "java-001",
    "classloader": "jvm-005",
    "clusteredindex": "database-003",
    "collection": "collections-002",
    "collections": "collections-003",
    "collectionsframework": "collections-001",
    "commit": "database-013",
    "comparable": "collections-016",
    "comparator": "collections-017",
    "compareandset": "concurrency-021",
    "completablefuture": "concurrency-037",
    "compositeindex": "database-006",
    "concurrency": "concurrency-003",
    "concurrenthashmap": "concurrency-038",
    "connectionpool": "mybatis-023",
    "consistency": "database-017",
    "constructor": "java-004",
    "constructorinjection": "spring-010",
    "consumer": "reliability-003",
    "container": "engineering-011",
    "content-type": "network-014",
    "contextwindow": "ai-004",
    "controller": "spring-019",
    "cookie": "network-021",
    "copyinggc": "jvm-024",
    "copyonwritearraylist": "concurrency-039",
    "corepoolsize": "concurrency-030",
    "cors": "network-029",
    "countdownlatch": "concurrency-041",
    "coveringindex": "database-008",
    "criticalsection": "concurrency-011",
    "cross-origin": "network-028",
    "crud": "sql-006",
    "csrf": "network-032",
    "currentread": "database-027",
    "dao": "spring-021",
    "dataaccessobject": "spring-021",
    "datatransferobject": "spring-023",
    "deadletterqueue": "reliability-008",
    "deadlock": "concurrency-027",
    "deepcopy": "io-029",
    "delete": "sql-014",
    "delete方法": "network-018",
    "dependency": "engineering-003",
    "dependencyconflict": "engineering-004",
    "dependencyinjection": "spring-009",
    "deque": "collections-021",
    "deserialization": "io-025",
    "di": "spring-009",
    "directmemory": "jvm-014",
    "dirtyread": "database-021",
    "dispatcherservlet": "spring-031",
    "distributedlock": "redis-024",
    "dlq": "reliability-008",
    "dns": "network-008",
    "docker": "engineering-010",
    "docker容器": "engineering-011",
    "drop": "sql-016",
    "dto": "spring-023",
    "durability": "database-019",
    "dynamicproxy": "spring-016",
    "dynamicsql": "mybatis-012",
    "embedding": "ai-006",
    "encapsulation": "java-008",
    "entity": "spring-022",
    "enum": "java-030",
    "environmentvariable": "engineering-013",
    "equals": "io-005",
    "equals()": "io-005",
    "error": "io-012",
    "eventualconsistency": "reliability-019",
    "eviction": "redis-011",
    "exceptionmechanism": "io-008",
    "executionplan": "database-010",
    "fail-fast": "collections-030",
    "fairlock": "concurrency-025",
    "fallback": "reliability-017",
    "field": "java-005",
    "filter": "spring-032",
    "final": "java-018",
    "finally": "io-016",
    "foreach标签": "mybatis-015",
    "foreignkey": "sql-008",
    "fullgc": "jvm-021",
    "functionalinterface": "java-032",
    "functioncalling": "ai-013",
    "future": "concurrency-036",
    "g1": "jvm-026",
    "gaplock": "database-030",
    "garbagecollection": "jvm-015",
    "gc": "jvm-015",
    "gcroots": "jvm-016",
    "generics": "java-026",
    "get": "network-015",
    "git": "engineering-005",
    "gitcommit": "engineering-007",
    "gitworktree": "engineering-009",
    "git提交": "engineering-007",
    "groupby": "sql-018",
    "hallucination": "ai-012",
    "handlerinterceptor": "spring-033",
    "happens-before": "concurrency-020",
    "hash": "collections-025",
    "hashcode": "io-006",
    "hashcode()": "io-006",
    "hashcollision": "collections-026",
    "hashmap": "collections-009",
    "hashset": "collections-010",
    "having": "sql-019",
    "heapdump": "engineering-017",
    "hotkey": "redis-018",
    "http": "network-001",
    "httpdelete": "network-018",
    "https": "network-002",
    "http状态码": "network-019",
    "humanintheloop": "ai-019",
    "icp": "database-009",
    "idempotency": "reliability-011",
    "idempotencykey": "reliability-012",
    "if标签": "mybatis-013",
    "image": "engineering-012",
    "immutableobject": "java-033",
    "index": "database-001",
    "indexconditionpushdown": "database-009",
    "inheritance": "java-009",
    "innerjoin": "sql-022",
    "innodb": "sql-004",
    "insert": "sql-012",
    "instantiation": "java-003",
    "integrationtest": "engineering-019",
    "interceptor": "spring-033",
    "interface": "java-013",
    "interrupt": "concurrency-047",
    "inversionofcontrol": "spring-008",
    "ioc": "spring-008",
    "ioc容器": "spring-004",
    "io多路复用": "network-038",
    "ipaddress": "network-006",
    "ip地址": "network-006",
    "isolation": "database-018",
    "isolationlevel": "database-020",
    "iterator": "collections-015",
    "javadatabaseconnectivity": "mybatis-001",
    "javadevelopmentkit": "jvm-002",
    "javaheap": "jvm-007",
    "javaruntimeenvironment": "jvm-003",
    "java内存模型": "concurrency-015",
    "java接口": "java-013",
    "java栈": "jvm-008",
    "java虚拟机": "jvm-001",
    "jdbc": "mybatis-001",
    "jdk": "jvm-002",
    "jdkproxy": "spring-017",
    "jdk动态代理": "spring-017",
    "jit": "jvm-031",
    "jmm": "concurrency-015",
    "joinpoint": "spring-013",
    "jre": "jvm-003",
    "json": "io-030",
    "jsonwebtoken": "network-024",
    "just-in-time": "jvm-031",
    "jvm": "jvm-001",
    "jvmstack": "jvm-008",
    "jwt": "network-024",
    "kafka": "reliability-009",
    "lambda": "java-031",
    "lambda表达式": "java-031",
    "langchain4j": "ai-021",
    "largelanguagemodel": "ai-001",
    "lazyloading": "mybatis-021",
    "leftjoin": "sql-023",
    "leftmostprefix": "database-007",
    "lfu": "redis-013",
    "linkedhashmap": "collections-011",
    "linkedhashset": "collections-012",
    "linkedlist": "collections-008",
    "list": "collections-004",
    "llm": "ai-001",
    "loadbalancing": "reliability-018",
    "loadfactor": "collections-028",
    "localvariable": "java-006",
    "lock": "concurrency-012",
    "log": "engineering-014",
    "lru": "redis-012",
    "map": "collections-006",
    "mapper": "mybatis-005",
    "mapperxml": "mybatis-006",
    "markandcompact": "jvm-025",
    "markandsweep": "jvm-023",
    "maven": "engineering-001",
    "maximumpoolsize": "concurrency-031",
    "mcp": "ai-015",
    "memoryleak": "jvm-032",
    "mergeconflict": "engineering-008",
    "messagequeue": "reliability-001",
    "metaspace": "jvm-011",
    "method": "java-007",
    "methodarea": "jvm-010",
    "minorgc": "jvm-020",
    "modelcontextprotocol": "ai-015",
    "mq": "reliability-001",
    "mvcc": "database-024",
    "mybatis": "mybatis-002",
    "mybatis-plus": "mybatis-003",
    "mybatisforeach": "mybatis-015",
    "mybatisif": "mybatis-013",
    "mybatisset": "mybatis-016",
    "mybatiswhere": "mybatis-014",
    "mybatis一级缓存": "mybatis-019",
    "mybatis二级缓存": "mybatis-020",
    "mybatis参数绑定": "mybatis-017",
    "mybatis字符串替换": "mybatis-018",
    "mysql": "sql-002",
    "n+1": "mybatis-022",
    "n+1查询": "mybatis-022",
    "namespace": "mybatis-007",
    "nativemethodstack": "jvm-013",
    "nested": "annotations-025",
    "next-keylock": "database-031",
    "nl2sql": "ai-022",
    "non-blockingio": "concurrency-008",
    "non-repeatableread": "database-022",
    "nonfairlock": "concurrency-026",
    "npe": "io-013",
    "null": "sql-010",
    "nullpointerexception": "io-013",
    "object.wait": "concurrency-045",
    "objectinstance": "java-002",
    "oldgeneration": "jvm-019",
    "oom": "jvm-033",
    "optimisticlocking": "database-032",
    "oracle": "sql-003",
    "oracledatabase": "sql-003",
    "orderby": "sql-020",
    "ordering": "concurrency-018",
    "orm": "mybatis-004",
    "outbox": "reliability-020",
    "outofmemoryerror": "jvm-033",
    "overload": "java-011",
    "override": "java-012",
    "pagination": "sql-025",
    "parallelism": "concurrency-004",
    "parentdelegation": "jvm-006",
    "passbyvalue": "java-021",
    "pcregister": "jvm-012",
    "persistence": "redis-020",
    "pessimisticlocking": "database-033",
    "phantomread": "database-023",
    "phantomreference": "jvm-030",
    "pointcut": "spring-014",
    "polymorphism": "java-010",
    "pom": "engineering-002",
    "pom.xml": "engineering-002",
    "port": "network-007",
    "post": "network-016",
    "primarykey": "sql-007",
    "primitivetype": "java-022",
    "priorityqueue": "collections-022",
    "process": "concurrency-001",
    "producer": "reliability-002",
    "prompt": "ai-002",
    "promptinjection": "ai-018",
    "propagation": "annotations-022",
    "put": "network-017",
    "queue": "collections-018",
    "rabbitmq": "reliability-010",
    "rag": "ai-009",
    "ratelimiting": "reliability-015",
    "rdb": "redis-021",
    "rdbms": "sql-001",
    "reachabilityanalysis": "jvm-017",
    "readview": "database-025",
    "red-blacktree": "collections-029",
    "redis": "redis-001",
    "redishash": "redis-005",
    "redislist": "redis-006",
    "redisset": "redis-007",
    "redisstring": "redis-004",
    "redolog": "database-034",
    "reentrantlock": "concurrency-023",
    "reference": "java-020",
    "reflection": "java-028",
    "regressiontest": "engineering-020",
    "rejectedexecutionhandler": "concurrency-033",
    "reordering": "concurrency-019",
    "requestbody": "network-013",
    "requestheader": "network-012",
    "required": "annotations-023",
    "requires_new": "annotations-024",
    "rerank": "ai-011",
    "resize": "collections-027",
    "rest": "network-020",
    "restful": "network-020",
    "resultmap": "mybatis-011",
    "resulttype": "mybatis-010",
    "retry": "reliability-013",
    "rightjoin": "sql-024",
    "rollback": "database-014",
    "rollbackfor": "annotations-021",
    "rowlock": "database-028",
    "runnable": "concurrency-034",
    "runtimeexception": "io-011",
    "secondaryindex": "database-004",
    "select": "sql-011",
    "semaphore": "concurrency-042",
    "serializable": "io-026",
    "serialization": "io-024",
    "server-sentevents": "network-033",
    "service": "spring-020",
    "servletfilter": "spring-032",
    "session": "network-022",
    "set标签": "mybatis-016",
    "shallowcopy": "io-028",
    "sharedvariable": "concurrency-010",
    "singleton": "spring-025",
    "sleep": "concurrency-044",
    "slowquery": "database-011",
    "snapshotread": "database-026",
    "softdelete": "sql-026",
    "softreference": "jvm-028",
    "sortedset": "redis-008",
    "spring": "spring-001",
    "springai": "ai-020",
    "springbean": "spring-005",
    "springboot": "spring-003",
    "springboot自动配置": "spring-029",
    "springframework": "spring-001",
    "springmvc": "spring-002",
    "spring三级缓存": "spring-028",
    "spring单例": "spring-025",
    "spring容器": "spring-004",
    "sql": "sql-005",
    "sqlinjection": "network-030",
    "sqlsession": "mybatis-008",
    "sqlsessionfactory": "mybatis-009",
    "sql注入": "network-030",
    "sse": "network-033",
    "stack": "collections-019",
    "stackframe": "jvm-009",
    "stackoverflowerror": "jvm-034",
    "starter": "spring-030",
    "statemachine": "reliability-021",
    "static": "java-017",
    "statuscode": "network-019",
    "stoptheworld": "jvm-022",
    "streaming": "ai-005",
    "string": "io-001",
    "stringbuffer": "io-003",
    "stringbuilder": "io-002",
    "stringpool": "io-004",
    "strongreference": "jvm-027",
    "stw": "jvm-022",
    "super": "java-016",
    "synchronized": "concurrency-013",
    "synchronous": "concurrency-005",
    "tablelock": "database-029",
    "tcp": "network-004",
    "tcp握手": "network-035",
    "tcp连接关闭": "network-036",
    "text-to-sql": "ai-022",
    "this": "java-015",
    "thread": "concurrency-002",
    "thread.join": "concurrency-046",
    "thread.sleep": "concurrency-044",
    "threaddump": "engineering-016",
    "threadlocal": "concurrency-028",
    "threadpool": "concurrency-029",
    "threadsafety": "concurrency-009",
    "throw": "io-014",
    "throwable": "io-009",
    "throws": "io-015",
    "timeout": "reliability-014",
    "timetolive": "redis-009",
    "tls": "network-003",
    "token(模型)": "ai-003",
    "toolcalling": "ai-013",
    "topic": "reliability-004",
    "traceid": "engineering-015",
    "transaction": "database-012",
    "transient": "io-027",
    "transportlayersecurity": "network-003",
    "treemap": "collections-013",
    "treeset": "collections-014",
    "truncate": "sql-015",
    "try-with-resources": "io-017",
    "ttl": "redis-009",
    "typeerasure": "java-027",
    "udp": "network-005",
    "unboxing": "java-025",
    "undolog": "database-035",
    "uniqueconstraint": "sql-009",
    "unittest": "engineering-018",
    "update": "sql-013",
    "url": "network-009",
    "utf-8": "io-023",
    "vectordatabase": "ai-008",
    "vectorsearch": "ai-007",
    "viewobject": "spring-024",
    "visibility": "concurrency-017",
    "vo": "spring-024",
    "volatile": "concurrency-014",
    "wait": "concurrency-045",
    "weakreference": "jvm-029",
    "webflux": "spring-034",
    "websocket": "network-034",
    "where": "sql-017",
    "where标签": "mybatis-014",
    "workqueue": "concurrency-032",
    "worktree": "engineering-009",
    "wrapperclass": "java-023",
    "xss": "network-031",
    "younggc": "jvm-020",
    "younggeneration": "jvm-018",
    "zset": "redis-008",
    "一级缓存": "mybatis-019",
    "三次握手": "network-035",
    "三级缓存": "spring-028",
    "上下文窗口": "ai-004",
    "不可变对象": "java-033",
    "不可重复读": "database-022",
    "业务层": "spring-020",
    "临界区": "concurrency-011",
    "临键锁": "database-031",
    "主键": "sql-007",
    "主题": "reliability-004",
    "乐观锁": "database-032",
    "事务": "database-012",
    "事务一致性": "database-017",
    "事务传播行为": "annotations-022",
    "事务原子性": "database-016",
    "事务发件箱": "reliability-020",
    "事务持久性": "database-019",
    "事务隔离性": "database-018",
    "二级索引": "database-004",
    "二级缓存": "mybatis-020",
    "二进制日志": "database-036",
    "人工审批": "ai-019",
    "优先队列": "collections-022",
    "会话": "network-022",
    "会话滑动窗口": "ai-017",
    "会话记忆": "ai-016",
    "依赖": "engineering-003",
    "依赖冲突": "engineering-004",
    "依赖注入": "spring-009",
    "信号量": "concurrency-042",
    "值传递": "java-021",
    "元空间": "jvm-011",
    "先行发生关系": "concurrency-020",
    "公平锁": "concurrency-025",
    "共享变量": "concurrency-010",
    "关系型数据库": "sql-001",
    "关系数据库": "sql-001",
    "关联查询": "sql-021",
    "内存泄漏": "jvm-032",
    "内存淘汰": "redis-011",
    "内存溢出": "jvm-033",
    "内连接": "sql-022",
    "函数式接口": "java-032",
    "分块": "ai-010",
    "分布式锁": "redis-024",
    "分支": "engineering-006",
    "分页": "sql-025",
    "切入点": "spring-014",
    "切面": "spring-012",
    "前端控制器": "spring-031",
    "动态sql": "mybatis-012",
    "动态代理": "spring-016",
    "包装类": "java-023",
    "单例": "spring-025",
    "单例作用域": "spring-025",
    "单元测试": "engineering-018",
    "即时编译器": "jvm-031",
    "原子性": "concurrency-016",
    "双亲委派": "jvm-006",
    "双端队列": "collections-021",
    "反射": "java-028",
    "反序列化": "io-025",
    "受检异常": "io-010",
    "可见性": "concurrency-017",
    "可达性分析": "jvm-017",
    "可重入锁": "concurrency-024",
    "右连接": "sql-024",
    "合并冲突": "engineering-008",
    "同步": "concurrency-005",
    "同步调用": "concurrency-005",
    "后进先出栈": "collections-019",
    "向量化": "ai-006",
    "向量数据库": "ai-008",
    "向量检索": "ai-007",
    "哈希": "collections-025",
    "哈希冲突": "collections-026",
    "唯一约束": "sql-009",
    "四次挥手": "network-036",
    "回归测试": "engineering-020",
    "回滚": "database-014",
    "回滚日志": "database-035",
    "回表": "database-005",
    "垃圾回收": "jvm-015",
    "域名系统": "network-008",
    "基本数据类型": "java-022",
    "堆": "jvm-007",
    "堆转储": "engineering-017",
    "增删改查": "sql-006",
    "复制算法": "jvm-024",
    "外键": "sql-008",
    "多态": "java-010",
    "多版本并发控制": "database-024",
    "大key": "redis-019",
    "大语言模型": "ai-001",
    "大键": "redis-019",
    "媒体类型": "network-014",
    "字段": "java-005",
    "字符串": "io-001",
    "字符串常量池": "io-004",
    "字符流": "io-019",
    "字符编码": "io-021",
    "字符集": "io-022",
    "字节流": "io-018",
    "字节码": "jvm-004",
    "实体类": "spring-022",
    "实例": "java-002",
    "实例化": "java-003",
    "对象": "java-002",
    "对象关系映射": "mybatis-004",
    "封装": "java-008",
    "局部变量": "java-006",
    "嵌入向量": "ai-006",
    "工作队列": "concurrency-032",
    "工具调用": "ai-013",
    "左连接": "sql-023",
    "布隆过滤器": "redis-023",
    "幂等": "reliability-011",
    "幂等键": "reliability-012",
    "并发": "concurrency-003",
    "并发原子性": "concurrency-016",
    "并行": "concurrency-004",
    "幻读": "database-023",
    "序列化": "io-024",
    "应用程序接口": "network-010",
    "延迟加载": "mybatis-021",
    "异常": "io-008",
    "异步": "concurrency-006",
    "异步调用": "concurrency-006",
    "引用": "java-020",
    "弱引用": "jvm-029",
    "强引用": "jvm-027",
    "当前读": "database-027",
    "循环依赖": "spring-027",
    "快照读": "database-026",
    "快速失败": "collections-030",
    "悲观锁": "database-033",
    "慢查询": "database-011",
    "懒加载": "mybatis-021",
    "成员变量": "java-005",
    "成员方法": "java-007",
    "执行计划": "database-010",
    "扩容": "collections-027",
    "抽象类": "java-014",
    "拆包": "network-037",
    "拆箱": "java-025",
    "拒绝策略": "concurrency-033",
    "拦截器": "spring-033",
    "持久化": "redis-020",
    "指令重排": "concurrency-019",
    "授权": "network-026",
    "控制反转": "spring-008",
    "控制器": "spring-019",
    "控制层": "spring-019",
    "提示注入": "ai-018",
    "提示词": "ai-002",
    "数据传输对象": "spring-023",
    "数据库空值": "sql-010",
    "数据访问层": "spring-021",
    "数组": "collections-023",
    "文档切分": "ai-010",
    "新生代": "jvm-018",
    "方法区": "jvm-010",
    "方法重写": "java-012",
    "方法重载": "java-011",
    "旁路缓存": "redis-017",
    "日志": "engineering-014",
    "智能体": "ai-014",
    "最不经常使用": "redis-013",
    "最大线程数": "concurrency-031",
    "最左前缀": "database-007",
    "最终一致性": "reliability-019",
    "最近最少使用": "redis-012",
    "有序性": "concurrency-018",
    "有序集合": "redis-008",
    "服务层": "spring-020",
    "本地方法栈": "jvm-013",
    "构造器": "java-004",
    "构造器注入": "spring-010",
    "构造方法": "java-004",
    "枚举": "java-030",
    "标记-复制": "jvm-024",
    "标记-整理": "jvm-025",
    "标记-清除": "jvm-023",
    "标记复制": "jvm-024",
    "标记整理": "jvm-025",
    "标记清除": "jvm-023",
    "栈(数据结构)": "collections-019",
    "栈帧": "jvm-009",
    "栈溢出": "jvm-034",
    "核心线程数": "concurrency-030",
    "检索增强生成": "ai-009",
    "模型token": "ai-003",
    "模型幻觉": "ai-012",
    "死信队列": "reliability-008",
    "死锁": "concurrency-027",
    "比较并交换": "concurrency-021",
    "泛型": "java-026",
    "注解": "java-029",
    "流式": "ai-005",
    "流式输出": "ai-005",
    "浅拷贝": "io-028",
    "消息确认": "reliability-005",
    "消息积压": "reliability-007",
    "消息队列": "reliability-001",
    "消费确认": "reliability-005",
    "消费者": "reliability-003",
    "淘汰策略": "redis-011",
    "深拷贝": "io-029",
    "滑动窗口": "ai-017",
    "热key": "redis-018",
    "热点键": "redis-018",
    "熔断": "reliability-016",
    "状态机": "reliability-021",
    "状态码": "network-019",
    "环境变量": "engineering-013",
    "生产者": "reliability-002",
    "生存时间": "redis-009",
    "直接内存": "jvm-014",
    "程序计数器": "jvm-012",
    "空指针异常": "io-013",
    "端口": "network-007",
    "等待线程结束": "concurrency-046",
    "类": "java-001",
    "类加载器": "jvm-005",
    "类型擦除": "java-027",
    "粘包": "network-037",
    "粘包与拆包": "network-037",
    "索引": "database-001",
    "索引下推": "database-009",
    "红黑树": "collections-029",
    "线程": "concurrency-002",
    "线程中断": "concurrency-047",
    "线程安全": "concurrency-009",
    "线程池": "concurrency-029",
    "线程转储": "engineering-016",
    "结构化查询语言": "sql-005",
    "继承": "java-009",
    "缓冲流": "io-020",
    "缓存": "redis-002",
    "缓存击穿": "redis-015",
    "缓存命中": "redis-003",
    "缓存穿透": "redis-014",
    "缓存雪崩": "redis-016",
    "老年代": "jvm-019",
    "联合索引": "database-006",
    "聚簇索引": "database-003",
    "脏读": "database-021",
    "自动拆箱": "java-025",
    "自动装箱": "java-024",
    "自动配置": "spring-029",
    "自然语言转sql": "ai-022",
    "虚引用": "jvm-030",
    "虚拟机栈": "jvm-008",
    "行锁": "database-028",
    "表锁": "database-029",
    "装箱": "java-024",
    "覆盖索引": "database-008",
    "视图对象": "spring-024",
    "认证": "network-025",
    "访问令牌": "network-023",
    "访问修饰符": "java-019",
    "访问权限": "java-019",
    "词元": "ai-003",
    "请求体": "network-013",
    "请求参数": "network-011",
    "请求头": "network-012",
    "读视图": "database-025",
    "负载因子": "collections-028",
    "负载均衡": "reliability-018",
    "起步依赖": "spring-030",
    "超时": "reliability-014",
    "越权": "network-027",
    "跨域": "network-028",
    "跨源资源共享": "network-029",
    "跨站脚本": "network-031",
    "跨站请求伪造": "network-032",
    "软删除": "sql-026",
    "软引用": "jvm-028",
    "过期删除": "redis-010",
    "过滤器": "spring-032",
    "运行时异常": "io-011",
    "进程": "concurrency-001",
    "连接池": "mybatis-023",
    "连接点": "spring-013",
    "迭代器": "collections-015",
    "通知": "spring-015",
    "逻辑删除": "sql-026",
    "重做日志": "database-034",
    "重写": "java-012",
    "重复消费": "reliability-006",
    "重排": "ai-011",
    "重排序": "ai-011",
    "重试": "reliability-013",
    "重载": "java-011",
    "鉴权token": "network-023",
    "链式结构": "collections-024",
    "链表": "collections-024",
    "链路追踪标识": "engineering-015",
    "锁": "concurrency-012",
    "锁定读": "database-027",
    "锁重入": "concurrency-024",
    "镜像": "engineering-012",
    "间隙锁": "database-030",
    "队列": "collections-018",
    "阻塞": "concurrency-007",
    "阻塞队列": "concurrency-040",
    "降级": "reliability-017",
    "限流": "reliability-015",
    "隔离级别": "database-020",
    "集合": "collections-001",
    "集成测试": "engineering-019",
    "静态成员": "java-017",
    "非公平锁": "concurrency-026",
    "非聚簇索引": "database-004",
    "非阻塞": "concurrency-008",
    "面向切面编程": "spring-011"
  },
  "ambiguousLookup": {
    "join": [
      "concurrency-046",
      "sql-021"
    ],
    "set": [
      "collections-005",
      "mybatis-016"
    ],
    "token": [
      "network-023",
      "ai-003"
    ],
    "栈": [
      "jvm-008",
      "collections-019"
    ],
    "容器": [
      "spring-004",
      "engineering-011"
    ],
    "接口": [
      "java-013",
      "network-010"
    ],
    "提交": [
      "database-013",
      "engineering-007"
    ]
  },
  "sources": [
    {
      "id": "J01",
      "title": "Java 21 语言规范：类型、值与变量",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J02",
      "title": "Java 21 语言规范：类、方法与构造器",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J03",
      "title": "Java 21 语言规范：接口与注解",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-9.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J04",
      "title": "Java 21 语言规范：异常",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J05",
      "title": "Java 21 语言规范：线程与锁",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J06",
      "title": "Java 21：java.io API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/package-summary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J07",
      "title": "Java 21：java.lang API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/package-summary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J08",
      "title": "Java 21 对象序列化规范",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/serialization/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J09",
      "title": "Java 21：java.util API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/package-summary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J10",
      "title": "Java 21：java.util.concurrent API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J11",
      "title": "Java 21：ThreadPoolExecutor API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J12",
      "title": "Java 21：ReentrantLock API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J13",
      "title": "Java 21 虚拟机规范：运行时结构",
      "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J14",
      "title": "Java 21：G1 垃圾回收指南",
      "url": "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J15",
      "title": "Java 21：引用类型与可达性",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/package-summary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J16",
      "title": "Oracle：从 JDK 8 迁移到较新版本",
      "url": "https://docs.oracle.com/en/java/javase/21/migrate/migrating-jdk-8-later-jdk-releases.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J17",
      "title": "Oracle Java 教程：IO 流",
      "url": "https://docs.oracle.com/javase/tutorial/essential/io/streams.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J18",
      "title": "Oracle Java 教程：死锁",
      "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "J19",
      "title": "Oracle Java 教程：进程与线程",
      "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S01",
      "title": "Spring：IoC 容器与 Bean",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/introduction.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S02",
      "title": "Spring：AOP 概念",
      "url": "https://docs.spring.io/spring-framework/reference/core/aop/introduction-defn.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S03",
      "title": "Spring MVC：注解控制器",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S04",
      "title": "Spring MVC：方法参数",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/arguments.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S05",
      "title": "Spring：声明式事务注解",
      "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S06",
      "title": "Spring：事务传播行为",
      "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S07",
      "title": "Spring Boot：自动配置",
      "url": "https://docs.spring.io/spring-boot/reference/using/auto-configuration.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S08",
      "title": "Spring：WebFlux",
      "url": "https://docs.spring.io/spring-framework/reference/web/webflux.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S09",
      "title": "Spring：注解式容器配置",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/annotation-config.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "S10",
      "title": "Spring：组件扫描与角色注解",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "M01",
      "title": "MyBatis：XML 映射器",
      "url": "https://mybatis.org/mybatis-3/zh_CN/sqlmap-xml.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "M02",
      "title": "MyBatis：动态 SQL",
      "url": "https://mybatis.org/mybatis-3/zh_CN/dynamic-sql.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "M03",
      "title": "MyBatis：Java API",
      "url": "https://mybatis.org/mybatis-3/zh_CN/java-api.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "M04",
      "title": "MyBatis-Plus：介绍",
      "url": "https://baomidou.com/en/introduce/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D01",
      "title": "MySQL 8.4：术语表",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/glossary.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D02",
      "title": "MySQL 8.4：JOIN",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D03",
      "title": "MySQL 8.4：聚簇索引与二级索引",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D04",
      "title": "MySQL 8.4：InnoDB 锁",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D05",
      "title": "MySQL 8.4：多版本机制",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D06",
      "title": "MySQL 8.4：事务隔离级别",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D07",
      "title": "MySQL 8.4：SELECT",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D08",
      "title": "MySQL 8.4：TRUNCATE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "D09",
      "title": "MySQL 8.4：联合索引",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "R01",
      "title": "Redis：数据类型",
      "url": "https://redis.io/docs/latest/develop/data-types/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "R02",
      "title": "Redis：持久化",
      "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "R03",
      "title": "Redis：内存淘汰",
      "url": "https://redis.io/docs/latest/develop/reference/eviction/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "R04",
      "title": "Redis：布隆过滤器",
      "url": "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "R05",
      "title": "Redis：分布式锁",
      "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N01",
      "title": "IETF RFC 9110：HTTP 语义",
      "url": "https://datatracker.ietf.org/doc/html/rfc9110",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N02",
      "title": "MDN：Web 术语表",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N03",
      "title": "MDN：HTTP Cookie",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N04",
      "title": "MDN：CORS",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N05",
      "title": "OWASP：SQL 注入防护",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N06",
      "title": "OWASP：授权",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N07",
      "title": "WHATWG：Server-Sent Events",
      "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N08",
      "title": "IETF RFC 9293：TCP",
      "url": "https://datatracker.ietf.org/doc/html/rfc9293",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "N09",
      "title": "IETF RFC 7519：JWT",
      "url": "https://datatracker.ietf.org/doc/html/rfc7519",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "Q01",
      "title": "RabbitMQ：消费者",
      "url": "https://www.rabbitmq.com/docs/consumers",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "Q02",
      "title": "RabbitMQ：消费确认与发布确认",
      "url": "https://www.rabbitmq.com/docs/confirms",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "Q03",
      "title": "Apache Kafka：介绍",
      "url": "https://kafka.apache.org/intro/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E01",
      "title": "Git：术语表",
      "url": "https://git-scm.com/docs/gitglossary",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E02",
      "title": "Maven：依赖机制",
      "url": "https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E03",
      "title": "Docker：容器",
      "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E04",
      "title": "Docker：镜像",
      "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E05",
      "title": "OpenTelemetry：链路追踪",
      "url": "https://opentelemetry.io/docs/concepts/signals/traces/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E06",
      "title": "AWS：事务 Outbox 模式",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "E07",
      "title": "AWS：熔断器模式",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/circuit-breaker.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A01",
      "title": "Spring AI：AI 概念",
      "url": "https://docs.spring.io/spring-ai/reference/concepts.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A02",
      "title": "Spring AI：工具调用",
      "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A03",
      "title": "Spring AI：RAG",
      "url": "https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A04",
      "title": "MCP：协议介绍",
      "url": "https://modelcontextprotocol.io/docs/getting-started/intro",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A05",
      "title": "Spring AI：会话记忆",
      "url": "https://docs.spring.io/spring-ai/reference/api/chat-memory.html",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A06",
      "title": "LangChain4j：介绍",
      "url": "https://docs.langchain4j.dev/",
      "accessedAt": "2026-09-23"
    },
    {
      "id": "A07",
      "title": "OWASP：提示注入防护",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html",
      "accessedAt": "2026-09-23"
    }
  ]
};
