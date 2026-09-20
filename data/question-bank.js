window.QUESTION_BANK_DATA = {
  "date": "2026-09-20",
  "questions": [
    {
      "id": "bank-Q01-001",
      "number": "Q01-001",
      "question": "Java 为什么能跨平台？JDK、JRE、JVM 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Java 源码先编译成字节码，再由不同操作系统上的 JVM 执行，因此可以跨平台。\n\n2. JVM 是 Java 虚拟机，负责执行字节码、内存管理和垃圾回收。\n\n3. JRE 是传统意义上的 Java 运行环境，包含 JVM 和运行库；JDK 是开发工具包，还提供 javac 等开发工具。\n\n4. 跨平台的是字节码，不是同一个 JVM 程序；不同平台需要对应的 JVM 实现。",
      "sourceIds": [
        "NI021"
      ],
      "keywords": [
        "Q01-001",
        "Java 基础",
        "阿里",
        "基础起步",
        "Java",
        "JDK",
        "JRE",
        "JVM"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 1,
      "originalQuestion": "Java 为什么能跨平台？JDK、JRE、JVM 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-002",
      "number": "Q01-002",
      "question": "面向对象的封装、继承、多态分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 封装是隐藏对象内部状态，通过方法提供受控访问。例如余额设为 private，通过存取款方法修改。\n\n2. 继承是子类复用并扩展父类的能力，例如 `Dog extends Animal`。\n\n3. 多态是同一个父类型引用调用方法时，执行实际对象重写后的实现。例如 `Animal a = new Dog()`，调用 `a.speak()` 执行 Dog 的实现。",
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
        "阿里",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 2,
      "originalQuestion": "面向对象的封装、继承、多态分别是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-003",
      "number": "Q01-003",
      "question": "方法重载和方法重写有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 重载是方法名相同、参数列表不同，由编译器根据参数选择调用哪个方法。\n\n2. 重写是子类重新实现父类可继承的实例方法，运行时根据实际对象类型选择实现。\n\n3. 只改变返回值不算重载；static 同名方法属于隐藏，不是重写。",
      "sourceIds": [
        "N001",
        "X08"
      ],
      "keywords": [
        "Q01-003",
        "Java 基础",
        "阿里",
        "美团",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 3,
      "originalQuestion": "方法重载和方法重写有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-004",
      "number": "Q01-004",
      "question": "接口和抽象类怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 接口用于定义能力和规范，一个类可以实现多个接口，适合不同类遵守同一约定。\n\n2. 抽象类用于共享基础实现和状态，可以有实例字段、构造器、抽象方法和普通方法；一个类只能直接继承一个类。\n\n3. 接口也可以有 default、static 等方法，但没有普通实例字段。\n\n4. 不同支付方式统一实现 PayService，适合用接口；多种报表复用同一导出流程，可以使用抽象类。",
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
        "美团",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 4,
      "originalQuestion": "接口和抽象类怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-005",
      "number": "Q01-005",
      "question": "四种访问权限有何区别？“同一包”是不是同一文件？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. private 限制在所属类的封装边界内访问；默认权限只允许同包访问。\n\n2. protected 允许同包访问，跨包时要遵守子类访问规则；public 提供公开访问，仍受类型可见性等约束。\n\n3. 同一个包指 package 声明相同，不是同一个文件。\n\n4. 跨包子类不能通过任意父类对象访问其 protected 成员。",
      "sourceIds": [],
      "keywords": [
        "Q01-005",
        "Java 基础",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 5,
      "originalQuestion": "四种访问权限有何区别？“同一包”是不是同一文件？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-006",
      "number": "Q01-006",
      "question": "static 属于类还是对象？this 什么时候能省略？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. static 成员属于类，通常通过“类名.成员”访问；实例成员属于具体对象。\n\n2. this 表示当前对象。静态方法没有当前对象，不能直接使用 this 或访问实例成员。\n\n3. 没有同名变量遮挡时，实例方法中的 this 通常可以省略；参数与字段同名时，需要用 this 区分。\n\n4. 例如 `this.name = name`，左边是当前对象的字段，右边是方法参数。",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q01-006",
        "Java 基础",
        "字节跳动",
        "基础起步",
        "static",
        "this"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nclass Person {\n    String name;\n    Person(String name) { this.name = name; }\n    void sayHello() { System.out.println(\"我是\" + name); }\n    static void test() { System.out.println(\"静态方法\"); }\n}\n// this.name = name：左边是对象字段，右边是参数。\n// 如果写 name = name，只是参数给自己赋值，对象字段仍可能为null。\n// 实例方法没有同名参数时，name 与 this.name 通常等价。\n```",
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 6,
      "originalQuestion": "static 属于类还是对象？this 什么时候能省略？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-007",
      "number": "Q01-007",
      "question": "final、finally、finalize 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. `final`： 变量只能赋值一次；方法不能被重写；类不能被继承。\n\n2. `finally`： 异常处理中的清理代码块，退出 `try/catch` 时通常执行。\n\n3. `finalize()`： 历史对象终结机制，不可靠，不应依赖它释放资源。\n\n4. `final List` 固定的是引用，不禁止 `add()`；释放流和连接优先用 `try-with-resources`。",
      "sourceIds": [
        "N010",
        "N013"
      ],
      "keywords": [
        "Q01-007",
        "Java 基础",
        "京东",
        "百度",
        "基础起步",
        "final",
        "finally",
        "finalize"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 7,
      "originalQuestion": "final、finally、finalize 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-008",
      "number": "Q01-008",
      "question": "八种基本数据类型是什么？包装类有哪些使用注意点？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 整数类型有 byte、short、int、long；浮点类型有 float、double；字符类型是 char，布尔类型是 boolean。\n\n2. 对应包装类是 Byte、Short、Integer、Long、Float、Double、Character、Boolean。\n\n3. 基本类型不能取 null，也不能直接作为泛型参数；包装类是对象，可以取 null，可以放进泛型集合。\n\n4. 包装类为 null 时拆箱会抛空指针异常。double 不能精确表示很多十进制小数；char 表示一个 UTF-16 代码单元，不保证是完整字符。",
      "sourceIds": [],
      "keywords": [
        "Q01-008",
        "Java 基础",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 8,
      "originalQuestion": "八种基本数据类型是什么？包装类有哪些使用注意点？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-009",
      "number": "Q01-009",
      "question": "自动装箱、拆箱和 Integer 缓存有什么坑？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 装箱： 基本类型转包装类型，如 `Integer x = 10`。\n\n2. 拆箱： 包装类型转基本类型，如 `int y = x`。\n\n3. 缓存： `Integer.valueOf` 至少缓存 `-128～127`，不能依赖缓存比较业务数值。\n\n4. 比较： 包装对象通常用 `equals()` 比较值，不用 `==` 猜对象是否相同。\n\n5. `Integer x = null; int y = x;` 会因拆箱抛出空指针异常。",
      "sourceIds": [
        "N010",
        "NI002"
      ],
      "keywords": [
        "Q01-009",
        "Java 基础",
        "京东",
        "招银网络科技",
        "基础起步",
        "Integer"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 9,
      "originalQuestion": "自动装箱、拆箱和 Integer 缓存有什么坑？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-010",
      "number": "Q01-010",
      "question": "== 和 equals 有什么区别？重写 equals 为什么要重写 hashCode？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. `==` 比较基本类型时比较值，比较引用类型时判断是否指向同一个对象。\n\n2. Object 的 equals 默认也是比较对象身份，String 等类重写后可以比较内容。\n\n3. 重写 equals 时也要重写 hashCode，因为哈希容器先按 hashCode 定位，再用 equals 判断是否相等。\n\n4. equals 相等的对象，hashCode 必须相同；hashCode 相同的对象，equals 不一定相等。",
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
        "即时设计",
        "基础起步",
        "equals",
        "hashCode"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 10,
      "originalQuestion": "== 和 equals 有什么区别？重写 equals 为什么要重写 hashCode？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-011",
      "number": "Q01-011",
      "question": "Java 是值传递还是引用传递？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Java 只有值传递。\n\n2. 传基本类型： 复制基本值，修改形参不影响外部变量。\n\n3. 传对象： 复制引用，两个引用仍可指向同一对象。\n\n4. 改对象内容： 例如 `list.add(...)`，外部能看到变化。\n\n5. 改形参指向： 例如 `list = new ArrayList<>()`，不会替换外部引用。",
      "sourceIds": [],
      "keywords": [
        "Q01-011",
        "Java 基础",
        "基础起步",
        "Java"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic void change(Person p) {\n    p.name = \"改了原对象\";\n    p = new Person(\"只改变局部引用\");\n}\n// Person p = new Person(\"原名字\"); change(p);\n// p.name 最后为“改了原对象”，不是“只改变局部引用”。\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 11,
      "originalQuestion": "Java 是值传递还是引用传递？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-012",
      "number": "Q01-012",
      "question": "String 为什么不可变？不可变有什么好处？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 不可变的含义： `String` 创建后，不能通过正常接口修改这个对象原有的字符内容。\n\n2. 实现保障： 内部数据被封装，不提供原地修改接口；类为 `final`，禁止继承破坏约定。\n\n3. 便于字符串共享、哈希缓存、作为 Map 的键和并发读取。\n\n4. `s = s + \"a\"` 改变的是变量 `s` 指向的字符串，不是把旧字符串原地改掉。",
      "sourceIds": [],
      "keywords": [
        "Q01-012",
        "Java 基础",
        "基础起步",
        "String"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J03 · Java 21 String API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 12,
      "originalQuestion": "String 为什么不可变？不可变有什么好处？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-014",
      "number": "Q01-014",
      "question": "StringBuilder、StringBuffer 和字符串加号怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. String 不可变，拼接得到结果字符串，而不是直接修改原对象。\n\n2. StringBuilder 可变，不保证线程安全，适合单线程反复拼接。\n\n3. StringBuffer 可变，常用方法有同步保护，但多步组合操作不一定整体原子。\n\n4. 少量拼接直接用 `+`；循环中大量追加，通常使用 StringBuilder。",
      "sourceIds": [],
      "keywords": [
        "Q01-014",
        "Java 基础",
        "基础起步",
        "StringBuilder",
        "StringBuffer"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J03 · Java 21 String API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 13,
      "originalQuestion": "StringBuilder、StringBuffer 和字符串加号怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-015",
      "number": "Q01-015",
      "question": "金额为什么不用 double？BigDecimal 怎么正确使用？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 不用 `double`： 很多十进制小数不能被二进制浮点数精确表示。\n\n2. 正确创建： 优先 `new BigDecimal(\"0.1\")` 或 `BigDecimal.valueOf(...)`。\n\n3. 正确运算： 接收运算返回值；除法明确精度和舍入规则。\n\n4. 正确比较： 金额大小用 `compareTo()`；`equals()` 还比较小数位数。\n\n5. `1.0` 与 `1.00` 用 `compareTo()` 得到 `0`，用 `equals()` 得到 `false`。",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q01-015",
        "Java 基础",
        "字节跳动",
        "基础起步",
        "double",
        "BigDecimal"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nBigDecimal a = new BigDecimal(\"1.0\");\nBigDecimal b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));       // false：scale也参与\nSystem.out.println(a.compareTo(b));    // 0：数值相等\nInteger x = null;\n// int y = x;                         // 自动拆箱会NPE\n```",
      "references": [
        {
          "title": "J04 · Java 21 BigDecimal API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 14,
      "originalQuestion": "金额为什么不用 double？BigDecimal 怎么正确使用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-016",
      "number": "Q01-016",
      "question": "异常体系、受检异常和运行时异常怎么区分？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 根类型： `Throwable` 主要分为 `Error` 和 `Exception`。\n\n2. Error： 常表示严重的运行环境问题，不宜普遍捕获后继续业务。\n\n3. 受检异常： 编译器要求捕获或声明，如 `IOException`。\n\n4. 运行时异常： `RuntimeException` 及其子类，不强制捕获或声明，如 `NullPointerException`。\n\n5. “不强制处理”不等于运行时异常可以不排查。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q01-016",
        "Java 基础",
        "阿里",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 15,
      "originalQuestion": "异常体系、受检异常和运行时异常怎么区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-019",
      "number": "Q01-019",
      "question": "泛型解决什么问题？什么是类型擦除？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 泛型： 用类型参数约束容器或方法，让类型错误尽早在编译期暴露。\n\n2. 提高类型安全，减少手工强制转换。\n\n3. 类型擦除： 编译时把类型参数按上界或 `Object` 处理，并插入必要的类型转换。\n\n4. `List<String>` 不允许直接 `add(123)`；但它与 `List<Integer>` 通常不是两个不同的运行时类。\n\n5. 并非所有泛型声明信息都消失，部分签名仍可通过反射读取。",
      "sourceIds": [
        "N043",
        "N049"
      ],
      "keywords": [
        "Q01-019",
        "Java 基础",
        "同程",
        "熙牛医疗",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J01 · JLS 21：Types, Values, and Variables",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 16,
      "originalQuestion": "泛型解决什么问题？什么是类型擦除？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-021",
      "number": "Q01-021",
      "question": "反射是什么？有什么代价与限制？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "1. 反射是在运行时读取类、字段、方法和构造器信息，并动态操作对象的机制。\n\n2. 动态创建对象、调用方法、读取或设置字段。\n\n3. 依赖注入、对象映射、框架扩展。\n\n4. 错误可能推迟到运行时，也要考虑访问权限、模块限制与维护成本。",
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
        "阿里",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 17,
      "originalQuestion": "反射是什么？有什么代价与限制？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-022",
      "number": "Q01-022",
      "question": "注解为什么不会自己执行？谁来读取并处理注解？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 注解是什么： 附加在类、方法、字段等位置的元数据，不会自己执行业务。\n\n2. 谁处理： 编译器、注解处理器或运行时框架。\n\n3. `@Target`： 规定能标注在哪些位置。\n\n4. `@Retention`： 规定保留到源码、字节码还是运行时。\n\n5. 自定义一个权限注解，还必须有切面或拦截器读取它，才会真正检查权限。",
      "sourceIds": [
        "N014",
        "N052"
      ],
      "keywords": [
        "Q01-022",
        "Java 基础",
        "百度",
        "快手",
        "基础起步"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 18,
      "originalQuestion": "注解为什么不会自己执行？谁来读取并处理注解？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-043",
      "number": "Q01-043",
      "question": "类和对象分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 类： 描述一类事物的数据和行为，是创建对象的模板。\n\n2. 对象： 类的具体实例，拥有自己的状态。\n\n3. 字段： 保存对象或类的数据。\n\n4. 方法： 定义可以执行的操作。\n\n5. `User` 是类；`new User()` 创建一个用户对象。",
      "sourceIds": [],
      "keywords": [
        "Q01-043",
        "Java 基础",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-002",
          "bank-Q01-006"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 19,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-044",
      "number": "Q01-044",
      "question": "构造方法是什么？和普通方法有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 构造方法用于初始化新对象，名称必须与类名相同，不写返回类型，连 void 也不写。\n\n2. 普通方法用于执行具体行为，需要声明返回类型或 void，通过方法调用执行。\n\n3. 构造方法可以重载，但不能被继承或重写；完全没有声明构造器时，编译器才会提供默认构造器。",
      "sourceIds": [],
      "keywords": [
        "Q01-044",
        "Java 基础",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-003",
          "bank-Q01-037"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 20,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-045",
      "number": "Q01-045",
      "question": "成员变量和局部变量有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 成员变量定义在类中、方法外；局部变量定义在方法、代码块或参数列表中。\n\n2. 成员变量有默认值；局部变量使用前必须明确赋值。\n\n3. 成员变量随所属对象或类管理；局部变量受当前调用和作用域限制。\n\n4. 共享的可变成员变量可能有线程安全问题；局部引用指向的对象也可能被多个线程共享。",
      "sourceIds": [],
      "keywords": [
        "Q01-045",
        "Java 基础",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-006",
          "bank-Q04-002",
          "bank-Q03-006"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V01 · JVMS 21：The Structure of the JVM",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 21,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-046",
      "number": "Q01-046",
      "question": "throw 和 throws 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. `throw`： 写在方法体中，实际抛出一个异常对象。\n\n2. `throws`： 写在方法签名中，声明可能抛出的异常类型。\n\n```java\nvoid read() throws IOException {\n    throw new IOException(\"读取失败\");\n}\n```\n\n3. throw 是动作，throws 是声明；受检异常需要捕获或声明。",
      "sourceIds": [],
      "keywords": [
        "Q01-046",
        "Java 基础",
        "基础补充",
        "基础起步",
        "throw",
        "throws"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-016"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 22,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-047",
      "number": "Q01-047",
      "question": "常见的运行时异常有哪些？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. NullPointerException：使用了 null 引用。\n\n2. IndexOutOfBoundsException：访问下标越界。\n\n3. ClassCastException：强制转换成对象不支持的类型。\n\n4. NumberFormatException：字符串无法转换成指定数字。\n\n5. ArithmeticException：例如整数除以零。\n\n6. IllegalArgumentException：传入参数不符合要求。",
      "sourceIds": [],
      "keywords": [
        "Q01-047",
        "Java 基础",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-016",
          "bank-Q01-009",
          "bank-Q01-024"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 23,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-048",
      "number": "Q01-048",
      "question": "Java 为什么不允许一个类继承多个类？接口可以实现多个吗？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 类继承： 一个类只能直接继承一个父类，避免多父类状态和实现之间的复杂冲突。\n\n2. 接口实现： 一个类可以实现多个接口，用于组合多种能力。\n\n3. 默认方法冲突： 两个接口的 default 方法冲突时，实现类需要显式处理。\n\n4. 一个类可以同时实现“可支付”和“可退款”接口，但不能同时 extends 两个类。",
      "sourceIds": [],
      "keywords": [
        "Q01-048",
        "Java 基础",
        "基础补充",
        "基础起步",
        "Java"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-004"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 24,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-049",
      "number": "Q01-049",
      "question": "字符串比较为什么通常用 equals，而不是 ==？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. `==`： 判断两个引用是否指向同一对象。\n\n2. `equals()`： String 已重写它，用来比较字符串内容。\n\n3. 常量池： 可能使部分相同字面量共享对象，但不能当作业务判断依据。\n\n```java\nString a = new String(\"java\");\nString b = new String(\"java\");\n// a == b 为 false；a.equals(b) 为 true\n```\n\n4. 接收方可能为 null 时先判空，或使用 `Objects.equals(a, b)`。",
      "sourceIds": [],
      "keywords": [
        "Q01-049",
        "Java 基础",
        "基础补充",
        "基础起步",
        "equals"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-010",
          "bank-Q01-013"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J03 · Java 21 String API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 25,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-050",
      "number": "Q01-050",
      "question": "序列化和反序列化分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 序列化： 把对象状态转换成可传输或可存储的表示。\n\n2. 反序列化： 从这些数据恢复对象或数据结构。\n\n3. 接口传输、消息传递、数据保存。\n\n4. 常见形式： JSON、Protobuf、Java 原生序列化等。\n\n5. 不可信输入不能随意进行 Java 原生反序列化；对象中的密码等敏感信息不应直接输出。",
      "sourceIds": [],
      "keywords": [
        "Q01-050",
        "Java 基础",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-025"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 26,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-013",
      "number": "Q01-013",
      "question": "字符串常量池、new String 和 intern 怎么理解？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 常量池： 复用相同内容的字符串。\n\n2. 字面量： 相同字符串字面量通常使用同一个驻留对象。\n\n3. new String： 创建新的 String 对象，不等于取同一个池引用。\n\n4. intern()： 返回同内容字符串的规范化池引用。\n\n```java\nString a = \"ab\", b = \"ab\", c = new String(\"ab\");\n// a == b：true；a == c：false；a.equals(c)：true\n```\n\n5. 比较内容用 equals，不要通过创建对象数或常量池猜业务相等。",
      "sourceIds": [
        "NI006"
      ],
      "keywords": [
        "Q01-013",
        "Java 基础",
        "携程",
        "new",
        "String",
        "intern"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J03 · Java 21 String API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 27,
      "originalQuestion": "字符串常量池、new String 和 intern 怎么理解？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-017",
      "number": "Q01-017",
      "question": "try、catch、finally 按什么顺序执行？为什么不建议在 finally 中 return？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 执行 `try`： 正常执行主逻辑。\n\n2. 匹配 `catch`： 发生匹配的异常时执行异常处理。\n\n3. 执行 `finally`： 离开上述流程前通常执行清理。\n\n4. 返回规则： `try` 中先计算返回值，再执行 `finally`。\n\n```java\ntry { return 1; }\nfinally { return 2; } // 返回 2，不建议这样写\n```\n\n5. `finally` 中 `return` 会覆盖返回值，甚至吞掉异常；进程被强制终止时也不保证执行 `finally`。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q01-017",
        "Java 基础",
        "得物",
        "try",
        "catch",
        "finally",
        "return"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 28,
      "originalQuestion": "try、catch、finally 按什么顺序执行？为什么不建议在 finally 中 return？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-018",
      "number": "Q01-018",
      "question": "try-with-resources 为什么比手写关闭更可靠？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. try-with-resources 会自动关闭实现 AutoCloseable 的资源，省去容易漏写的 finally。\n\n2. 多个资源按“后声明、先关闭”的顺序关闭。\n\n3. 业务代码和关闭操作同时报错时，会保留主要异常，并把关闭异常附在 suppressed 中。\n\n4. try (InputStream in = new FileInputStream(path)) { ... } 无论正常结束还是抛异常，离开时都会尝试关闭 in。",
      "sourceIds": [],
      "keywords": [
        "Q01-018",
        "Java 基础",
        "try",
        "with",
        "resources"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 29,
      "originalQuestion": "try-with-resources 为什么比手写关闭更可靠？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-023",
      "number": "Q01-023",
      "question": "JDK 动态代理和 CGLIB 的基本区别？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. JDK 动态代理通过实现接口创建代理对象，主要围绕接口方法进行增强。\n\n2. CGLIB 通过生成目标类的子类实现代理，因此不能继承 final 类，也不能靠重写增强 final、private 方法。\n\n3. 两者都要求调用经过代理。对象内部直接使用 `this.xxx()` 调用，通常会绕过代理增强。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q01-023",
        "Java 基础",
        "招银网络科技",
        "JDK",
        "CGLIB"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 30,
      "originalQuestion": "JDK 动态代理和 CGLIB 的基本区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-024",
      "number": "Q01-024",
      "question": "浅拷贝与深拷贝如何区分？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 浅拷贝只复制外层对象，里面的引用仍指向原来的对象。\n\n2. 深拷贝会把需要独立的内部对象也复制出来。\n\n3. 判断关键不是“是否 new 了外层”，而是修改内部对象时，另一份是否跟着变化。\n\n4. 复制 User 后，两份 User 还共用同一个 Address，就是浅拷贝；连 Address 也单独复制，才让地址修改相互独立。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q01-024",
        "Java 基础",
        "得物"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 31,
      "originalQuestion": "浅拷贝与深拷贝如何区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-025",
      "number": "Q01-025",
      "question": "Java 序列化的作用与风险？transient 有什么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 序列化是把对象状态转换成字节或其他可保存、可传输的格式。\n\n2. 反序列化是恢复对象。\n\n3. Java 原生序列化中，transient 字段默认不被保存，static 字段也不属于对象状态。\n\n4. 不可信数据不能随意做原生反序列化。\n\n5. 保存用户对象时，缓存字段可以不序列化。跨服务传输通常用明确的 DTO 和 JSON/Protobuf，而不是直接暴露内部对象结构。",
      "sourceIds": [],
      "keywords": [
        "Q01-025",
        "Java 基础",
        "Java",
        "transient"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 32,
      "originalQuestion": "Java 序列化的作用与风险？transient 有什么用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-026",
      "number": "Q01-026",
      "question": "字节流、字符流与乱码的关系？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 字节流按 byte 处理数据，图片、视频、压缩包都适用。\n\n2. 字符流按指定字符集解释字节，适合文本。\n\n3. 乱码最常见的原因是“写的时候一种编码，读的时候另一种编码”。\n\n4. 读写文本应明确约定编码。\n\n5. 文件按 UTF-8 保存，读取时却按另一种编码解释，中文就可能乱码。图片不能先随意转字符串再写回。",
      "sourceIds": [],
      "keywords": [
        "Q01-026",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 33,
      "originalQuestion": "字节流、字符流与乱码的关系？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-029",
      "number": "Q01-029",
      "question": "Lambda、函数式接口、方法引用是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 函数式接口只有一个需要实现的抽象方法；Lambda 是这个方法的简洁实现，例如 `x -> x > 0`。\n\n2. 方法引用用于复用已有方法，例如 `String::length`。\n\n3. 常用函数式接口中，Predicate 做判断，Function 做转换，Consumer 接收并处理数据，Supplier 提供结果。\n\n4. Lambda 捕获的局部变量必须是 final，或事实上不再重新赋值。",
      "sourceIds": [],
      "keywords": [
        "Q01-029",
        "Java 基础",
        "Lambda"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-029",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 34,
      "originalQuestion": "Lambda、函数式接口、方法引用是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-030",
      "number": "Q01-030",
      "question": "Stream 的 map、flatMap、filter 和惰性执行是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. filter 用于筛选元素，例如留下成年用户。\n\n2. map 用于逐个转换，例如把用户对象转换成姓名。\n\n3. flatMap 用于转换后展开多层数据，例如把多个姓名列表合成一个流。\n\n4. 中间操作通常是惰性的，直到 collect、count 等终止操作才触发执行。同一条流通常只能消费一次。",
      "sourceIds": [],
      "keywords": [
        "Q01-030",
        "Java 基础",
        "Stream",
        "map",
        "flatMap",
        "filter"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q01-030",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 35,
      "originalQuestion": "Stream 的 map、flatMap、filter 和惰性执行是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-031",
      "number": "Q01-031",
      "question": "Optional 应该怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. Optional 用来明确表示“这个返回值可能不存在”。\n\n2. 有值时可以转换，没值时提供默认值或抛业务异常，不要直接 get。\n\n3. orElse 会提前计算默认值，orElseGet 只在没有值时调用生成函数。\n\n4. 查不到用户时，orElseGet(() -> loadDefaultUser()) 才会调用备用加载；orElse(loadDefaultUser()) 无论有没有值都会先调用。",
      "sourceIds": [],
      "keywords": [
        "Q01-031",
        "Java 基础",
        "Optional"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-031",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 36,
      "originalQuestion": "Optional 应该怎么用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-035",
      "number": "Q01-035",
      "question": "常见设计模式怎么在后端落地？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 设计模式是把常见变化点组织好的办法。\n\n2. 策略模式替换算法，工厂选择实现，模板方法固定流程，责任链按顺序处理，观察者发布通知。\n\n3. 面试要说明“哪里会变、怎么扩展”，而不是只背模式名称。\n\n4. 支付方式新增一种时，增加一个 PayStrategy 实现，再注册到工厂，原来的下单主流程尽量不动。",
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
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-035",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 37,
      "originalQuestion": "常见设计模式怎么在后端落地？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-036",
      "number": "Q01-036",
      "question": "Object 常见方法有哪些？clone 为什么要小心？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Object 是 Java 类层次的根类。\n\n2. 常问的方法有 equals、hashCode、toString、getClass、wait/notify/notifyAll、clone。\n\n3. clone 默认浅拷贝。\n\n4. wait/notify 是线程协作方法，必须按对应对象锁的规则调用。\n\n5. getClass() 问“实际是什么类”；instanceof 问“能不能当作这个类型使用”。Dog 对象的精确类是 Dog，也可以 instanceof Animal。",
      "sourceIds": [],
      "keywords": [
        "Q01-036",
        "Java 基础",
        "Object",
        "clone"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-036",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 38,
      "originalQuestion": "Object 常见方法有哪些？clone 为什么要小心？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-037",
      "number": "Q01-037",
      "question": "类初始化、实例初始化和构造器的顺序？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 按常见 Java 8/17/21 场景，先完成父类和子类的静态初始化，再创建对象：父类实例字段/代码块、父类构造器、子类实例字段/代码块、子类构造器。\n\n2. 字段和代码块按源码顺序。\n\n3. 静态初始化通常一次，实例初始化每个新对象都执行。\n\n4. 第一次 new Child() 会涉及静态初始化；第二次再 new，只重新走对象初始化，不会再执行已经成功执行过的静态块。",
      "sourceIds": [
        "N052"
      ],
      "keywords": [
        "Q01-037",
        "Java 基础",
        "快手"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-037",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 39,
      "originalQuestion": "类初始化、实例初始化和构造器的顺序？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-040",
      "number": "Q01-040",
      "question": "枚举有什么优势？switch、单例场景怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 枚举用一个类型表示有限的合法选项，比散落的字符串和数字更不容易写错。\n\n2. 枚举还可以带业务 code、说明和方法。\n\n3. 持久化保存明确的业务 code，不要保存 ordinal，因为调整枚举顺序会改变 ordinal。\n\n4. 订单状态用 CREATED、PAID、CLOSED 表示。枚举能限制有哪些状态，但“已关闭能否转已支付”仍需要状态机规则。",
      "sourceIds": [],
      "keywords": [
        "Q01-040",
        "Java 基础",
        "switch"
      ],
      "sourceFile": "01_Java基础.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q01-040",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 40,
      "originalQuestion": "枚举有什么优势？switch、单例场景怎么用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-051",
      "number": "Q01-051",
      "question": "什么是深拷贝、浅拷贝？为什么只复制引用不算深拷贝？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 复制引用： 两个变量指向同一个外层对象。\n\n2. 浅拷贝： 创建新的外层对象，但内部引用仍指向原来的嵌套对象。\n\n3. 深拷贝： 把需要独立的内部可变对象也复制出来。\n\n4. 复制 User 后仍共享 Address，修改地址会同时影响两份 User，这不是独立的深拷贝。",
      "sourceIds": [],
      "keywords": [
        "Q01-051",
        "Java 基础",
        "基础补充"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-024"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 41,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-RM038",
      "number": "RM038",
      "question": "单例怎么写？反射和序列化会不会破坏它？",
      "answer": "1. 简单场景可用静态内部类或枚举。\n\n2. 双重检查写法需要volatile。\n\n3. 普通私有构造器主要阻止正常外部new，不自动抵御所有反射访问。\n\n4. 实现Serializable的普通单例还要考虑反序列化创建新对象的问题，常用readResolve维护语义。\n\n5. 枚举单例可写enum Registry { INSTANCE }，但实例里的可变Map仍要做并发保护，单例不是“所有操作自动线程安全”。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "RM038",
        "Java 基础",
        "招银网络科技"
      ],
      "sourceFile": "recent-interviews-study.md",
      "originalKind": "面经具体追问 / 练习",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-RM038",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 42,
      "originalQuestion": "单例怎么写？反射和序列化会不会破坏它？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX002",
      "number": "UX002",
      "question": "Stream.collect(toMap) 遇到重复 key 怎么办？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 只给 key 和 value 两个转换函数时，toMap 遇到重复 key 会抛异常，不会默认替你覆盖。\n\n2. 允许重复时，要明确合并规则：保留先来的、保留后来的、数值相加，或者改成 groupingBy 保存一组值。\n\n3. 规则要由业务决定。",
      "sourceIds": [
        "OPT-S02"
      ],
      "keywords": [
        "UX002",
        "Java 基础",
        "Stream",
        "toMap",
        "重复键",
        "collect",
        "key"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nMap<String, Integer> counts = Stream.of(\"apple\", \"pear\", \"apple\")\n    .collect(Collectors.toMap(s -> s, s -> 1, Integer::sum));\n// apple -> 2，pear -> 1。示例导入 java.util.* 和 java.util.stream.*。\n```",
      "references": [
        {
          "title": "Java 21 Collectors API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 43,
      "originalQuestion": "Stream.collect(toMap) 遇到重复 key 怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q01-020",
      "number": "Q01-020",
      "question": "泛型中的 ? extends T 和 ? super T 分别适合读还是写？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. `? extends T` 表示某种 T 或其子类型，适合把元素读取为 T；除 null 外，通常不能安全加入元素。\n\n2. `? super T` 表示某种 T 的父类型，可以写入 T 及其子类，读出时通常只能当 Object。\n\n3. 例如 `List<? extends Number>` 可能实际是 `List<Integer>`，不能随便添加 Double。",
      "sourceIds": [],
      "keywords": [
        "Q01-020",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "泛型中的 ? extends T 和 ? super T 分别适合读还是写？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "J01 · JLS 21：Types, Values, and Variables",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 44
    },
    {
      "id": "bank-Q01-027",
      "number": "Q01-027",
      "question": "BIO、NIO、AIO 的区别？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. BIO 常见做法是线程阻塞等待 IO 完成。\n\n2. NIO 提供 Channel、Buffer、Selector，可以通过非阻塞和多路复用，让少量线程管理多个连接。\n\n3. AIO 在操作完成后，通过回调或 Future 通知结果。\n\n4. NIO 的就绪通知不代表已经读完业务数据，也不是所有 NIO 操作都非阻塞。",
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
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "BIO、NIO、AIO 的区别？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 45
    },
    {
      "id": "bank-Q01-028",
      "number": "Q01-028",
      "question": "NIO 的 Buffer、Channel、Selector 如何配合？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Channel 是数据通道，Buffer 是存放读写数据的缓冲区，Selector 负责监听哪些通道已经就绪。\n\n2. 把数据写入 Buffer 后，用 flip 切换到读取状态；clear 重置索引，准备重新写入。\n\n3. compact 会保留尚未读取的数据，适合继续接收不完整消息。clear 只是重置索引，不会把所有字节清零。",
      "sourceIds": [],
      "keywords": [
        "Q01-028",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "NIO 的 Buffer、Channel、Selector 如何配合？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 46
    },
    {
      "id": "bank-Q01-032",
      "number": "Q01-032",
      "question": "如何设计一个不可变类？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 不可变类的关键是“创建后，对外能观察到的状态不再改变”。字段私有、构造时赋值、不提供修改方法，并且不要把内部可变对象直接交出去。final 字段只能固定引用，不能自动冻结内部 List。\n\n2. 例如，构造器收到 List 时复制一份，getter 也不要返回可被外部修改的内部列表；否则别人还能绕过你的 setter 修改内容。",
      "sourceIds": [],
      "keywords": [
        "Q01-032",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "如何设计一个不可变类？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-032",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 47
    },
    {
      "id": "bank-Q01-033",
      "number": "Q01-033",
      "question": "Java 8、17、21 有哪些值得准备的特性？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Java 8 常见特性有 Lambda、Stream、Optional、新时间 API 和 CompletableFuture。\n\n2. Java 17 中可以使用 record、密封类、文本块和 instanceof 模式匹配等特性。\n\n3. Java 21 正式引入虚拟线程、record 模式和 switch 模式匹配等。\n\n4. 某版本中可以使用，不代表所有特性都首次出现在这个版本；预览特性还需要对应的编译和运行配置。",
      "sourceIds": [],
      "keywords": [
        "Q01-033",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "Java 8、17、21 有哪些值得准备的特性？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-033",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 48
    },
    {
      "id": "bank-Q01-034",
      "number": "Q01-034",
      "question": "Java 时间 API 如何避免时区与线程安全问题？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Instant 表示时间线上的一个时刻；LocalDateTime 只有年月日时分秒，不带时区。\n\n2. ZonedDateTime 带有时区规则，跨系统交换时间时需要明确时区或偏移。\n\n3. 格式化优先使用不可变且线程安全的 DateTimeFormatter；共享 SimpleDateFormat 可能产生并发问题。\n\n4. 只有 LocalDateTime，没有时区或偏移，不能唯一确定全球时间线上的时刻。",
      "sourceIds": [],
      "keywords": [
        "Q01-034",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "Java 时间 API 如何避免时区与线程安全问题？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 49
    },
    {
      "id": "bank-Q01-038",
      "number": "Q01-038",
      "question": "父类引用指向子类对象时，字段和方法分别按什么规则访问？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 同名字段按引用的编译期类型解析，不具有实例方法那样的多态。\n\n2. 被重写的实例方法按对象的实际运行时类型执行。\n\n3. 例如 `Parent p = new Child()`，`p.name` 访问父类字段，`p.getName()` 可能执行 Child 重写的方法。",
      "sourceIds": [],
      "keywords": [
        "Q01-038",
        "Java 基础"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "父类引用指向子类对象时，字段和方法分别按什么规则访问？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-038",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "J02 · JLS 21：Classes",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 50
    },
    {
      "id": "bank-Q01-039",
      "number": "Q01-039",
      "question": "Java SPI 是什么？与反射、依赖注入什么关系？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. SPI 是服务提供者扩展机制：先定义接口，再按约定发现并加载实现。\n\n2. Java 的 ServiceLoader 可以读取服务注册信息，应用不需要把每个实现类写死。\n\n3. 反射是可能用到的底层技术，DI 是依赖管理方式，三者不是同一个概念。\n\n4. 实现类仅放进 jar 不一定能被发现，还需要符合服务注册等约定。",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q01-039",
        "Java 基础",
        "BIGO"
      ],
      "sourceFile": "01_Java基础.md",
      "isNew": false,
      "originalQuestion": "Java SPI 是什么？与反射、依赖注入什么关系？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 51
    },
    {
      "id": "bank-JX001",
      "number": "JX001",
      "question": "Lombok 注解和 Spring 注解，分别在什么时候生效？",
      "answer": "1. Lombok 常在编译阶段参与生成 getter、构造器等代码；Spring 的组件、注入、事务注解主要在运行时被容器和代理处理。注解只是标签，真正决定生效时机的是谁读取和处理它，不能统称为反射。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Lombok 注解和 Spring 注解，分别在什么时候生效？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX001",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://projectlombok.org/contributing/lombok-execution-path",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 52
    },
    {
      "id": "bank-JX002",
      "number": "JX002",
      "question": "不用 new，还能创建对象吗？都会调用构造器吗？",
      "answer": "1. 还可以通过反射、克隆、反序列化或工厂方法得到对象，但不一定都走普通构造过程。\n\n2. Constructor.newInstance 会调用对应构造器。\n\n3. clone 默认复制字段；工厂内部也可能只是返回已有对象。反序列化另有类型相关规则。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "不用 new，还能创建对象吗？都会调用构造器吗？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX002",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 53
    },
    {
      "id": "bank-JX011",
      "number": "JX011",
      "question": "BigDecimal 放进 HashSet 和 TreeSet，为什么去重结果可能不同？",
      "answer": "1. HashSet 按 equals/hashCode 去重，TreeSet 按比较结果是否为 0 去重。\n\n2. BigDecimal 的 1.0 与 1.00 数值相同，但 equals 还看小数位数。\n\n3. 因此 HashSet 常保留两个，自然排序的 TreeSet 常只保留一个。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX011",
        "Java 基础"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "BigDecimal 放进 HashSet 和 TreeSet，为什么去重结果可能不同？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX011",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "practiceCode": "```java\nBigDecimal a = new BigDecimal(\"1.0\");\nBigDecimal b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));    // false\nSystem.out.println(a.compareTo(b)); // 0\nSystem.out.println(new HashSet<>(Arrays.asList(a, b)).size()); // 2\nSystem.out.println(new TreeSet<>(Arrays.asList(a, b)).size()); // 1\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 54
    },
    {
      "id": "bank-JX012",
      "number": "JX012",
      "question": "静态初始化失败后，下次使用这个类会重新初始化吗？",
      "answer": "1. 同一份 Class 的静态初始化失败后，会被标记为错误状态，后续使用通常不会自动再执行静态块，而是报 NoClassDefFoundError。排查要找第一次失败的根因；重新换一个定义类加载器是另一种情况。",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX012",
        "Java 基础"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "静态初始化失败后，下次使用这个类会重新初始化吗？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX012",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-12.html#jls-12.4.2",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 55
    },
    {
      "id": "bank-JX019",
      "number": "JX019",
      "question": "静态内部类单例能保证整个系统只有一个对象吗？",
      "answer": "1. 静态内部类单例通常只约束同一类加载器中那份类的静态实例。\n\n2. 多个进程、节点或类加载器仍可能各有一个。\n\n3. 单例也不自动保护可变字段的并发安全。\n\n4. 跨节点唯一操作仍要共享协调或数据库约束。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "静态内部类单例能保证整个系统只有一个对象吗？",
      "originalKind": "单例原题边界延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 56
    },
    {
      "id": "bank-Q01-041",
      "number": "Q01-041",
      "question": "按月份给一批姓名分组，Java 怎么实现？",
      "answer": "1. 先确认每条记录有姓名和日期，再按“年+月”分组，避免 2025 年 1 月和 2026 年 1 月混在一起。\n\n2. Java 可用 YearMonth 作 key，再用 groupingBy。\n\n3. 需要月份有序可指定 TreeMap。\n\n4. 重复姓名和空日期按业务规则处理。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "按月份给一批姓名分组，Java 怎么实现？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-041",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 57
    },
    {
      "id": "bank-Q01-042",
      "number": "Q01-042",
      "question": "项目如何体现开闭原则？继承、组合、依赖是什么关系？",
      "answer": "1. 开闭原则是尽量通过新增实现支持新需求，少改稳定主流程。继承表示“是一种”，组合表示“持有并组织”，依赖表示“需要使用”。选接口和策略是为真实变化服务，不是遇到一个 if 就必须拆出一套框架。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "项目如何体现开闭原则？继承、组合、依赖是什么关系？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q01-042",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 58
    },
    {
      "id": "bank-LX015",
      "number": "LX015",
      "question": "反射创建对象一定比 new 慢很多吗？",
      "answer": "1. 反射有额外处理成本，但不能背成“永远慢固定多少倍”。\n\n2. 缓存类和方法信息、JDK 实现以及调用频率都会改变结果。\n\n3. 整个接口可能主要慢在数据库而不是反射。\n\n4. 需要判断影响时，用合适的基准和真实调用链测，别用一次随手计时下结论。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "反射创建对象一定比 new 慢很多吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://openjdk.org/jeps/416",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 59
    },
    {
      "id": "bank-LX016",
      "number": "LX016",
      "question": "Set<String> 能放 Integer 吗？如何安全存异构对象？",
      "answer": "1. 正常泛型代码里，Set<String> 只能放 String，放 Integer 会编译报错。\n\n2. 用原始类型或反射绕过检查，可能把错误留到以后读取时，导致 ClassCastException。\n\n3. 确实要混放不同类型，就明确用合适的公共类型，而不是偷偷绕过类型检查。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "Set<String> 能放 Integer 吗？如何安全存异构对象？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 60
    },
    {
      "id": "bank-LX017",
      "number": "LX017",
      "question": "同步框架为什么用模板方法？",
      "answer": "1. 模板方法适合“主流程相同、部分步骤不同”的同步任务。把读取、转换、校验、写入、更新进度和失败处理固定下来，让不同业务只实现变化步骤。这样不用复制整条同步流程；但失败不能被吞掉后还推进成功进度，否则下次会漏同步。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "同步框架为什么用模板方法？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 61
    },
    {
      "id": "bank-Q02-001",
      "number": "Q02-001",
      "question": "Java 集合体系怎么划分？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Java 集合分为 Collection 和 Map 两条主线；Collection 存单个元素，Map 存键值对。\n\n2. Collection 下主要有 List、Set、Queue。List 按位置组织，允许重复；Set 去重；Queue 和 Deque 用于队列及双端操作。\n\n3. 常见实现有 ArrayList、LinkedList、HashSet、TreeSet、ArrayDeque、HashMap、TreeMap。\n\n4. Map 不继承 Collection。集合“有顺序”不一定表示按大小排序。",
      "sourceIds": [
        "N028",
        "N049",
        "NI019"
      ],
      "keywords": [
        "Q02-001",
        "Java 集合",
        "熙牛医疗",
        "新蛋",
        "基础起步",
        "Java"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 62,
      "originalQuestion": "Java 集合体系怎么划分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-002",
      "number": "Q02-002",
      "question": "ArrayList 与 LinkedList 的区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. ArrayList 底层是动态数组，按下标访问是 O(1)，中间插入和删除通常需要移动元素。\n\n2. LinkedList 底层是双向链表，按下标访问是 O(n)；定位节点后修改链接较快，但查找位置也有成本。\n\n3. ArrayList 通常更紧凑；LinkedList 的节点和前后指针有额外空间开销。\n\n4. 普通列表通常优先考虑 ArrayList，不能只因为插入多就认定 LinkedList 更快。",
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
        "深轻科技",
        "基础起步",
        "ArrayList",
        "LinkedList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 63,
      "originalQuestion": "ArrayList 与 LinkedList 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-005",
      "number": "Q02-005",
      "question": "HashMap 的底层结构？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 结构： JDK 8+ 常见实现为数组 + 链表 + 红黑树。\n\n2. 定位： 先根据键的哈希找到桶，再比较哈希和 `equals()` 找到具体键。\n\n3. 冲突： 多个键落入同一桶；桶内冲突较多且满足条件时可树化。\n\n4. 特点： 平均查询较快；不保证迭代顺序，也不保证线程安全。\n\n5. 哈希相同不代表键相等；HashMap 允许一个 `null` 键。",
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
        "得物",
        "基础起步",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C01 · Java 21 HashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 64,
      "originalQuestion": "HashMap 的底层结构？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-012",
      "number": "Q02-012",
      "question": "HashMap、Hashtable、ConcurrentHashMap 怎么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. HashMap 不保证线程安全，允许 null 键和值，适合单线程或外部同步场景。\n\n2. Hashtable 是较老的同步容器，常用方法有同步保护，锁粒度较粗，不允许 null 键和值。\n\n3. ConcurrentHashMap 为并发访问设计，提供更细粒度的并发控制和原子复合方法，也不允许 null 键和值。\n\n4. 容器线程安全，不代表先 get、修改、再 put 这一整段操作自动安全。",
      "sourceIds": [
        "NI019",
        "NI024"
      ],
      "keywords": [
        "Q02-012",
        "Java 集合",
        "新蛋",
        "即时设计",
        "基础起步",
        "HashMap",
        "Hashtable",
        "ConcurrentHashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 65,
      "originalQuestion": "HashMap、Hashtable、ConcurrentHashMap 怎么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-027",
      "number": "Q02-027",
      "question": "List、Set、Map 有什么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. List 保存单个元素，允许重复，按位置组织，适合返回列表和顺序处理。\n\n2. Set 保存不重复的元素，按相等规则去重，适合保存唯一 ID 集合。\n\n3. Map 保存键值对，键不能重复，值可以重复，适合按 ID 查找对象。",
      "sourceIds": [],
      "keywords": [
        "Q02-027",
        "Java 集合",
        "基础补充",
        "基础起步",
        "List",
        "Set",
        "Map"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q02-001"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 66,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-028",
      "number": "Q02-028",
      "question": "什么是哈希冲突？HashMap 怎么处理？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 哈希冲突： 不同的键经过哈希定位后落到同一桶。\n\n2. 判断真正相等： 不能只看哈希，还要按 `equals()` 等规则比较。\n\n3. 处理方式： 常见 JDK 8+ HashMap 在桶内使用链表，满足条件时转红黑树。\n\n4. 减少冲突影响： 合理容量、扩容及良好的键哈希分布。\n\n5. 冲突不等于自动覆盖；只有匹配到同一个键才替换对应值。",
      "sourceIds": [],
      "keywords": [
        "Q02-028",
        "Java 集合",
        "基础补充",
        "基础起步",
        "HashMap"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q02-005",
          "bank-Q02-008"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C01 · Java 21 HashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C05 · OpenJDK 8u HashMap 源码（AdoptOpenJDK镜像）",
          "url": "https://github.com/AdoptOpenJDK/openjdk-jdk8u/blob/master/jdk/src/share/classes/java/util/HashMap.java",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 67,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-029",
      "number": "Q02-029",
      "question": "Collection 和 Collections 有什么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Collection： 集合接口，List、Set、Queue 等从它扩展。\n\n2. Collections： 工具类，提供排序、反转、只读或同步包装等静态方法。\n\n3. Map： 不属于 Collection 的子接口。",
      "sourceIds": [
        "REV20-COLLECTIONS"
      ],
      "keywords": [
        "Q02-029",
        "Java 集合",
        "基础补充",
        "基础起步",
        "Collection",
        "Collections"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q02-001",
          "bank-Q02-020"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "Java 21：Collections API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 68,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-003",
      "number": "Q02-003",
      "question": "ArrayList 如何扩容？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 容量不够： 申请更大的底层数组。\n\n2. 复制元素： 把旧数组中的元素复制过去。\n\n3. 更新引用： 后续操作使用新数组。\n\n4. 常见 OpenJDK 实现按约 1.5 倍增长，必要时满足更大的实际需求。\n\n5. size 是元素个数；capacity 是数组容量。\n\n6. 已知数据量时可预设容量，减少扩容。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q02-003",
        "Java 集合",
        "腾讯",
        "ArrayList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C03 · Java 21 ArrayList API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 69,
      "originalQuestion": "ArrayList 如何扩容？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-004",
      "number": "Q02-004",
      "question": "ArrayList 为什么线程不安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. ArrayList 的 add 不是一个不可分割的动作：要检查容量、写数组、修改 size。\n\n2. 多个线程同时做这些步骤可能覆盖数据。\n\n3. 需要并发访问时使用合适容器或统一加锁。\n\n4. 给 size 加 volatile 也不能把整次 add 变成原子操作。",
      "sourceIds": [
        "N042"
      ],
      "keywords": [
        "Q02-004",
        "Java 集合",
        "美团",
        "ArrayList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "C03 · Java 21 ArrayList API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 70,
      "originalQuestion": "ArrayList 为什么线程不安全？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-006",
      "number": "Q02-006",
      "question": "HashMap 的 put 流程？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 算位置： 表未初始化则先初始化，再计算哈希和桶下标。\n\n2. 看桶： 空桶直接插入。\n\n3. 找键： 已有相同键就替换值，否则新增节点。\n\n4. 调结构： 按条件树化、更新大小或扩容。\n\n5. 覆盖旧键不会增加 `size`；`put()` 返回旧值。",
      "sourceIds": [
        "N001",
        "NI018"
      ],
      "keywords": [
        "Q02-006",
        "Java 集合",
        "阿里",
        "实在智能",
        "HashMap",
        "put"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 71,
      "originalQuestion": "HashMap 的 put 流程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-007",
      "number": "Q02-007",
      "question": "HashMap 为什么容量常为 2 的幂？为什么扰动哈希？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 容量取 2 的幂，能用 (n-1)&hash 快速算下标，也方便扩容时拆分桶。\n\n2. 哈希扰动把高位信息混入低位，让下标分布更均匀。\n\n3. 两者是 HashMap 配套的实现选择，不是所有哈希表必须遵守的规定。\n\n4. 扩容从 16 到 32，元素通常只会留在原位置，或移动到“原位置+16”。",
      "sourceIds": [],
      "keywords": [
        "Q02-007",
        "Java 集合",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 72,
      "originalQuestion": "HashMap 为什么容量常为 2 的幂？为什么扰动哈希？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-008",
      "number": "Q02-008",
      "question": "JDK 8 HashMap 的链表什么时候转红黑树？什么时候退化？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 常见 JDK 8 实现中，树化阈值是 8，允许树化的最小数组容量是 64。\n\n2. 桶内链表较长但数组容量不足 64 时，通常先扩容；数组容量足够才考虑树化。\n\n3. 扩容拆分时，退化为链表的阈值是 6；普通删除还要看树结构和具体执行路径。\n\n4. 这些是阈值，不等于插入第 8 个元素一定树化，或删到 6 个一定退化。",
      "sourceIds": [
        "N018",
        "N054"
      ],
      "keywords": [
        "Q02-008",
        "Java 集合",
        "携程",
        "货拉拉",
        "JDK",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "C05 · OpenJDK 8u HashMap 源码（AdoptOpenJDK镜像）",
          "url": "https://github.com/AdoptOpenJDK/openjdk-jdk8u/blob/master/jdk/src/share/classes/java/util/HashMap.java",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 73,
      "originalQuestion": "JDK 8 HashMap 的链表什么时候转红黑树？什么时候退化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-009",
      "number": "Q02-009",
      "question": "HashMap 如何扩容？负载因子为什么常是 0.75？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 触发： 新增映射后，大小超过扩容阈值，通常触发扩容。\n\n2. 阈值： 通常为 `容量 × 负载因子`；默认负载因子 0.75。\n\n3. 扩容： 常见实现扩大为原来的 2 倍，重新分布节点。\n\n4. 75 的含义： 空间利用率与冲突成本的折中，并非所有场景的最优值。\n\n5. 容量 16、负载因子 0.75，阈值 12；通常新增第 13 个键时扩容。",
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
        "BIGO",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C01 · Java 21 HashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 74,
      "originalQuestion": "HashMap 如何扩容？负载因子为什么常是 0.75？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-010",
      "number": "Q02-010",
      "question": "HashMap 在多线程下会发生什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. HashMap 不适合没有同步保护的并发读写：可能丢数据、读不到更新或出现结构问题。\n\n2. JDK 8 修复了旧版本某些扩容风险，也不等于它线程安全。\n\n3. 共享可变 Map 通常用 ConcurrentHashMap 或外部统一锁。",
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
        "得物",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C01 · Java 21 HashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 75,
      "originalQuestion": "HashMap 在多线程下会发生什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-011",
      "number": "Q02-011",
      "question": "为什么不要用可变对象作 HashMap 键？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. HashMap 先按哈希找桶。\n\n2. 如果 key 放进去后，参与 hashCode/equals 的字段变了，再查询就可能去错误的桶，导致“明明在里面却取不到”。\n\n3. key 应尽量用稳定 ID 或不可变对象。\n\n4. 用 User.name 计算哈希，放入后把 name 从 A 改成 B，get(user) 也可能找不到原记录。",
      "sourceIds": [],
      "keywords": [
        "Q02-011",
        "Java 集合",
        "HashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "C01 · Java 21 HashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 76,
      "originalQuestion": "为什么不要用可变对象作 HashMap 键？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-013",
      "number": "Q02-013",
      "question": "ConcurrentHashMap 如何保证并发安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 空桶等更新： 使用 CAS 协调部分并发操作。\n\n2. 冲突桶更新： 使用 `synchronized` 等机制，不是整张表一把大锁。\n\n3. 读操作： 配合节点、数组访问等可见性保证，通常不需争抢桶锁。\n\n4. 版本： JDK 8+ 不应继续套用 JDK 7 的 Segment 分段锁解释。\n\n5. 它不是完全无锁；放进去的可变 `value` 仍需单独保证线程安全。",
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
        "招银网络科技",
        "ConcurrentHashMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "C02 · Java 21 ConcurrentHashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 77,
      "originalQuestion": "ConcurrentHashMap 如何保证并发安全？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-014",
      "number": "Q02-014",
      "question": "ConcurrentHashMap 已经线程安全，为什么先 get 再 put 仍可能出错？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. get 和 put 各自安全，不代表“先 get 再 put”整体安全。\n\n2. 需要按旧值更新时，用 merge、compute、replace 或 putIfAbsent 等原子方法。\n\n3. 容器只能保护自己的操作，不能自动保护 value 对象内部的修改。\n\n4. 两个线程都读到计数 5，再各自写回 6，结果少加一次。counts.merge(key,1,Integer::sum) 才能对同 key 原子合并。",
      "sourceIds": [],
      "keywords": [
        "Q02-014",
        "Java 集合",
        "ConcurrentHashMap",
        "get",
        "put"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nConcurrentHashMap<String, Integer> counts = new ConcurrentHashMap<>();\n// 竞态写法：counts.put(key, counts.getOrDefault(key, 0) + 1);\n// 对同一个key的原子合并：\ncounts.merge(\"order\", 1, Integer::sum);\n// 这里Integer计数仍可能溢出，长期指标可考虑Long/LongAdder及其语义。\n```",
      "references": [
        {
          "title": "C02 · Java 21 ConcurrentHashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 78,
      "originalQuestion": "ConcurrentHashMap 已经线程安全，为什么先 get 再 put 仍可能出错？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-015",
      "number": "Q02-015",
      "question": "HashSet 如何去重？TreeSet 有什么不同？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. HashSet 通过 hashCode 和 equals 判断重复，不保证迭代顺序。\n\n2. TreeSet 通过自然排序或 Comparator 判断重复，比较结果为 0 就视为同一元素，并按排序规则迭代。\n\n3. 例如 BigDecimal 的 1.0 和 1.00，equals 不相等，但自然比较结果为 0，因此两种 Set 的去重结果可能不同。\n\n4. TreeSet 的比较规则应尽量与 equals 保持一致。",
      "sourceIds": [
        "N027"
      ],
      "keywords": [
        "Q02-015",
        "Java 集合",
        "车300",
        "HashSet",
        "TreeSet"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 79,
      "originalQuestion": "HashSet 如何去重？TreeSet 有什么不同？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-016",
      "number": "Q02-016",
      "question": "LinkedHashMap 如何保持顺序？如何实现 LRU？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. LinkedHashMap 在 HashMap 上额外维护双向链表，用来记录插入顺序或访问顺序。\n\n2. 开启访问顺序后，最近访问的元素会移动。\n\n3. 超过容量时删除最久未用的元素，就能实现简单 LRU。\n\n4. 容量 2，先放 A、B，再访问 A，最后放 C；LRU 应淘汰 B，因为它最久没用。这个简单实现仍需另做并发保护。",
      "sourceIds": [],
      "keywords": [
        "Q02-016",
        "Java 集合",
        "LinkedHashMap",
        "LRU"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "C04 · Java 21 LinkedHashMap API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 80,
      "originalQuestion": "LinkedHashMap 如何保持顺序？如何实现 LRU？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-017",
      "number": "Q02-017",
      "question": "TreeMap 的特点和适用场景？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. TreeMap 是按 key 排序的 Map，底层常用红黑树，查找、插入、删除一般是 O(log n)。\n\n2. 它适合按键找上下界或查询一个范围。\n\n3. 只按 key 精确查询且不要求排序时，HashMap 通常更直接。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q02-017",
        "Java 集合",
        "腾讯",
        "TreeMap"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 81,
      "originalQuestion": "TreeMap 的特点和适用场景？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-018",
      "number": "Q02-018",
      "question": "Iterator、增强 for 与 fail-fast 是什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Iterator： 迭代器，用来依次访问集合元素。\n\n2. 增强 for： 遍历集合时通常依赖迭代器。\n\n3. fail-fast： 发现不符合约定的结构修改时，可能抛出 `ConcurrentModificationException`。\n\n4. 正确删除： 使用 `Iterator.remove()`，或合适的 `removeIf()`。\n\n5. 单线程边增强 for、边 `list.remove()` 也可能触发；fail-fast 不是线程安全机制。",
      "sourceIds": [],
      "keywords": [
        "Q02-018",
        "Java 集合",
        "Iterator",
        "for",
        "fail",
        "fast"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 82,
      "originalQuestion": "Iterator、增强 for 与 fail-fast 是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-019",
      "number": "Q02-019",
      "question": "CopyOnWriteArrayList 的原理与适用范围？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. CopyOnWriteArrayList 是“写时复制，读旧快照”。\n\n2. 写入时复制数组、修改新数组，再发布。\n\n3. 迭代器继续读创建时拿到的那份数组。\n\n4. 适合小集合、读多写少，例如监听器名单。\n\n5. 频繁写会产生大量复制和 GC。",
      "sourceIds": [
        "N028",
        "N032"
      ],
      "keywords": [
        "Q02-019",
        "Java 集合",
        "熙牛医疗",
        "招银云创",
        "CopyOnWriteArrayList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 83,
      "originalQuestion": "CopyOnWriteArrayList 的原理与适用范围？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-020",
      "number": "Q02-020",
      "question": "Arrays.asList、List.of 和 unmodifiableList 分别能不能修改？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Arrays.asList 是固定大小列表，可以 set，不能 add/remove，并与原数组关联。\n\n2. List.of 返回不可修改且不允许 null 的列表。\n\n3. unmodifiableList 只是给原列表套只读视图，别人修改原列表，视图也会变化。\n\n4. Arrays.asList(new int[]{1,2}) 得到的通常是“只有一个 int[] 元素”的列表，不是两个 Integer。",
      "sourceIds": [],
      "keywords": [
        "Q02-020",
        "Java 集合",
        "Arrays",
        "asList",
        "List",
        "of",
        "unmodifiableList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nString[] array = {\"a\", \"b\"};\nList<String> view = Arrays.asList(array);\nview.set(0, \"x\");  // array[0]也变成x\n// view.add(\"c\"); // UnsupportedOperationException\nList<String> independent = new ArrayList<>(view);\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 84,
      "originalQuestion": "Arrays.asList、List.of 和 unmodifiableList 分别能不能修改？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-021",
      "number": "Q02-021",
      "question": "subList 是拷贝还是视图？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. subList 通常是原列表的一段视图，不是独立副本。\n\n2. 修改视图会影响关联数据，直接改父列表的结构也可能让视图失效。\n\n3. 需要独立处理时，用 new ArrayList<>(list.subList(...)) 复制出来。",
      "sourceIds": [],
      "keywords": [
        "Q02-021",
        "Java 集合",
        "subList"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "C03 · Java 21 ArrayList API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 85,
      "originalQuestion": "subList 是拷贝还是视图？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-022",
      "number": "Q02-022",
      "question": "ArrayDeque、Stack、PriorityQueue 怎么选？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. ArrayDeque 适合实现普通栈和双端队列。\n\n2. Stack 是较老的栈类。\n\n3. PriorityQueue 是优先队列，默认每次取出最小元素。\n\n4. PriorityQueue 只保证堆顶优先，不保证直接遍历时整个结果有序。\n\n5. 想从小到大取出全部元素，应反复 poll；不能把 PriorityQueue 的普通 for 遍历当成排序结果。",
      "sourceIds": [
        "N018",
        "N033"
      ],
      "keywords": [
        "Q02-022",
        "Java 集合",
        "携程",
        "同程",
        "ArrayDeque",
        "Stack",
        "PriorityQueue"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 86,
      "originalQuestion": "ArrayDeque、Stack、PriorityQueue 怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-023",
      "number": "Q02-023",
      "question": "常见 BlockingQueue 有哪些？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. ArrayBlockingQueue 是有界数组队列，需要指定容量。\n\n2. LinkedBlockingQueue 是链表队列，可以指定容量；不指定时上限很大，容易积压任务。\n\n3. SynchronousQueue 不保存元素，需要生产者和消费者直接交接。\n\n4. put、take 可以阻塞等待；offer、poll 有立即返回或限时等待的版本，不是所有队列方法都会阻塞。",
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
        "得物",
        "BlockingQueue"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q02-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 87,
      "originalQuestion": "常见 BlockingQueue 有哪些？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-024",
      "number": "Q02-024",
      "question": "Comparable 和 Comparator 有什么区别？排序稳定是什么意思？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. Comparable 由类自身实现，用来定义对象的默认排序规则。\n\n2. Comparator 是外部提供的比较器，可以为同一个类定义多套排序规则，例如按年龄或工资排序。\n\n3. 排序稳定是指排序前后，相等元素的相对顺序保持不变。具体排序是否稳定，要看所使用的算法或 API。\n\n4. 比较整数应使用 Integer.compare 等方法，不直接相减，避免溢出导致结果错误。",
      "sourceIds": [],
      "keywords": [
        "Q02-024",
        "Java 集合",
        "Comparable",
        "Comparator"
      ],
      "sourceFile": "02_Java集合.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q02-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 88,
      "originalQuestion": "Comparable 和 Comparator 有什么区别？排序稳定是什么意思？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX001",
      "number": "UX001",
      "question": "List<Integer> 的 remove(1) 删除下标还是数值？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 删除下标 1 的元素，也就是第二个元素。\n\n2. 因为 remove 有重载：remove(int) 按位置删，remove(Object) 按值删。\n\n3. 要删除数值 1，写 remove(Integer.valueOf(1))，让编译器选中按值删除的版本。",
      "sourceIds": [
        "OPT-S01"
      ],
      "keywords": [
        "UX001",
        "Java 集合",
        "remove",
        "方法重载",
        "Integer",
        "List"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nList<Integer> list = new ArrayList<>(Arrays.asList(1, 5, 1));\nlist.remove(1);                    // [1, 1]：删掉下标 1 的 5\nlist.remove(Integer.valueOf(1));   // [1]：删掉第一个数值 1\n```",
      "references": [
        {
          "title": "Java 21 List API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 89,
      "originalQuestion": "List<Integer> 的 remove(1) 删除下标还是数值？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q02-025",
      "number": "Q02-025",
      "question": "如何处理大集合、去重与批处理的内存成本？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 处理大集合，关键是“别先把全部数据装进内存”。从数据源分批或流式读取，一批处理完再读下一批。精确去重可用唯一约束或合适的集合；数据超出内存，就考虑外部存储或外部排序。\n\n2. 例如，一次查出一百万行，再用 subList 每次处理一千行，仍然保留了一百万行，不是真正的低内存批处理。",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q02-025",
        "Java 集合",
        "美团"
      ],
      "sourceFile": "02_Java集合.md",
      "isNew": false,
      "originalQuestion": "如何处理大集合、去重与批处理的内存成本？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q02-025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 90
    },
    {
      "id": "bank-JX010",
      "number": "JX010",
      "question": "ConcurrentHashMap.computeIfAbsent 里适合做耗时 RPC 吗？",
      "answer": "1. 不适合把很慢的 RPC 直接放在 computeIfAbsent 的计算函数里，因为计算期间相关更新可能被阻塞。可以先用轻量占位协调同 key 请求，再交给受控执行器加载；失败要清理占位，避免其他人永远等。",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX010",
        "Java 集合"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "ConcurrentHashMap.computeIfAbsent 里适合做耗时 RPC 吗？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX010",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 91
    },
    {
      "id": "bank-Q02-026",
      "number": "Q02-026",
      "question": "ConcurrentHashMap 能做有序范围查询吗？",
      "answer": "1. ConcurrentHashMap 按哈希组织，不适合直接做有序范围查询。\n\n2. 需要并发且按 key 有序时，可考虑 ConcurrentSkipListMap。\n\n3. 单线程或外部锁保护下可用 TreeMap。\n\n4. 范围视图和弱一致遍历不等于某一刻的完整快照。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "ConcurrentHashMap 能做有序范围查询吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q02-026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 92
    },
    {
      "id": "bank-RM003",
      "number": "RM003",
      "question": "都有 ArrayBlockingQueue 了，为什么还需要 LinkedBlockingQueue？",
      "answer": "1. 它们是不同取舍，不是谁淘汰谁。前者是固定容量数组，节点分配少，空间更可预测，还可选择公平访问；后者按链式节点保存，也能设置容量，入队出队可采用分离协调，吞吐和内存特征不同。\n\n2. 例如，内存预算严格、容量固定时先考虑数组队列；需要链式特征时也能用显式有界的 LinkedBlockingQueue。最终用实际生产消费比例压测。\n\n3. LinkedBlockingQueue 不写容量时上限是 Integer.MAX_VALUE，不能当成安全的容量规划；不要背成“一个有界、另一个一定无界”。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "都有 ArrayBlockingQueue 了，为什么还需要 LinkedBlockingQueue？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM003",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Java 21 ArrayBlockingQueue",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "Java 21 LinkedBlockingQueue",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingQueue.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 93
    },
    {
      "id": "bank-Q03-001",
      "number": "Q03-001",
      "question": "进程、线程、并发、并行分别是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 进程是资源管理和隔离的单位；线程是进程内的一条执行路径。\n\n2. 同一进程的线程共享堆等资源，但各自有调用栈。\n\n3. 并发是多个任务在一段时间内交错推进；并行是多个任务在同一时刻真正执行。\n\n4. 一个厨师交替做几道菜是并发，多个厨师同时做菜是并行。",
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
        "百度",
        "基础起步"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 94,
      "originalQuestion": "进程、线程、并发、并行分别是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-002",
      "number": "Q03-002",
      "question": "创建线程有哪些方式？start 和 run 区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 可以继承 Thread 并重写 run，也可以实现 Runnable，把任务交给 Thread 或线程池执行。\n\n2. 任务需要返回值时，可以实现 Callable，配合 FutureTask 或线程池获取结果。\n\n3. start() 请求启动一个新线程；直接调用 run() 只是当前线程执行普通方法，不会创建新线程。\n\n4. 同一个 Thread 对象只能 start 一次，结束后也不能再次启动。",
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
        "京东",
        "基础起步",
        "start",
        "run"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 95,
      "originalQuestion": "创建线程有哪些方式？start 和 run 区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-003",
      "number": "Q03-003",
      "question": "Java 线程有哪些状态？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. NEW：线程已创建，还没有调用 start。\n\n2. RUNNABLE：可运行，包括就绪和正在执行，不保证此刻正在占用 CPU。\n\n3. BLOCKED：等待进入 synchronized 监视器锁。\n\n4. WAITING：无限期等待，例如不带超时的 wait、join。\n\n5. TIMED_WAITING：限时等待，例如 sleep、带超时的 wait。\n\n6. TERMINATED：线程执行结束。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q03-003",
        "多线程 / 并发",
        "BIGO",
        "基础起步",
        "Java"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 96,
      "originalQuestion": "Java 线程有哪些状态？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-004",
      "number": "Q03-004",
      "question": "sleep、wait、join、yield 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. sleep 让当前线程暂停一段时间，不释放已经持有的锁。\n\n2. wait 用于等待条件变化，必须持有对应对象的监视器；等待时只释放这把监视器锁，返回前重新获取。\n\n3. join 让当前线程等待另一个线程结束。\n\n4. yield 只是建议调度器让出执行机会，可能被忽略。\n\n5. wait 的条件要用 while 重新检查。sleep 不能代替线程同步，也不能用来保证执行顺序。",
      "sourceIds": [
        "N007",
        "N023",
        "N054",
        "REV20-THREAD",
        "REV20-OBJECT"
      ],
      "keywords": [
        "Q03-004",
        "多线程 / 并发",
        "腾讯",
        "BIGO",
        "货拉拉",
        "基础起步",
        "sleep",
        "wait",
        "join",
        "yield"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Java 21：Thread API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Java 21：Object API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 97,
      "originalQuestion": "sleep、wait、join、yield 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-007",
      "number": "Q03-007",
      "question": "JMM 是什么？原子性、可见性、有序性分别解决什么问题？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. JMM 是 Java 内存模型，规定多线程访问共享变量时的可见性和执行顺序规则，不是 JVM 的堆、栈分区。\n\n2. 原子性是操作不能被其他线程观察为只完成一部分；i++ 包含读、加、写，不天然原子。\n\n3. 可见性是一个线程的修改能够按同步规则被其他线程看到。\n\n4. 有序性是必要的执行先后关系不会被重排破坏。",
      "sourceIds": [
        "NI006"
      ],
      "keywords": [
        "Q03-007",
        "多线程 / 并发",
        "携程",
        "基础起步",
        "JMM"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 98,
      "originalQuestion": "JMM 是什么？原子性、可见性、有序性分别解决什么问题？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-009",
      "number": "Q03-009",
      "question": "volatile 能解决什么，不能解决什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 保证可见性： 对变量的写入能通过相应同步规则被后续读取看到。\n\n2. 约束重排： 保证相关操作的必要顺序。\n\n3. 不提供互斥： 不会让一整段代码只由一个线程执行。\n\n4. 不保证复合操作原子： `volatile int count` 的 `count++` 仍可能丢更新。\n\n5. 停止标志、状态发布；计数自增用原子类或锁。",
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
        "招银网络科技",
        "基础起步",
        "volatile"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 99,
      "originalQuestion": "volatile 能解决什么，不能解决什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-010",
      "number": "Q03-010",
      "question": "synchronized 锁的是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. synchronized 通过对象监视器实现互斥，并提供相应可见性保证。\n\n2. 实例同步方法锁的是当前对象 this；静态同步方法锁的是对应的 Class 对象。\n\n3. 同步代码块锁的是括号中指定的对象，例如 `synchronized(lock)` 锁住 lock。\n\n4. 只有竞争同一把锁的线程才互斥。退出同步区域会自动释放锁，异常退出也会释放。",
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
        "BIGO",
        "基础起步",
        "synchronized"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 100,
      "originalQuestion": "synchronized 锁的是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-013",
      "number": "Q03-013",
      "question": "CAS 是什么？ABA 问题怎么处理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. CAS： 比较并交换；当前值等于预期值才原子更新，否则失败。\n\n2. 常见用法： 更新失败后重新读取，再按条件重试。\n\n3. ABA： A 变成 B 又变回 A，只比较值看不出中间变化。\n\n4. 处理： 需要识别变化时，把版本号或戳与值一起比较。\n\n5. 高竞争下反复重试会消耗 CPU；CAS 不自动保证多个变量组成的业务规则。",
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
        "招银网络科技",
        "基础起步",
        "CAS",
        "ABA"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 101,
      "originalQuestion": "CAS 是什么？ABA 问题怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-017",
      "number": "Q03-017",
      "question": "死锁的条件和解决办法？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 死锁：多个线程互相等待对方持有的资源，谁都无法继续。\n\n2. 四个必要条件： 互斥、持有并等待、不可剥夺、循环等待。\n\n3. 预防： 统一拿锁顺序；缩短持锁时间；避免持锁执行慢远程调用。\n\n4. 处理： 必要时使用超时获取锁并回退；结合线程转储定位等待关系。\n\n5. A 拿锁 1 等锁 2，B 拿锁 2 等锁 1。",
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
        "BIGO",
        "基础起步"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 102,
      "originalQuestion": "死锁的条件和解决办法？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-022",
      "number": "Q03-022",
      "question": "线程池七个参数是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. corePoolSize：核心线程数，核心线程默认不因普通空闲超时而回收。\n\n2. maximumPoolSize：最大线程数。\n\n3. keepAliveTime：空闲线程的回收等待时间；unit：这个时间的单位。\n\n4. workQueue：保存等待执行任务的队列。\n\n5. threadFactory：创建线程的工厂，可以设置线程名称等。\n\n6. handler：任务无法接收时使用的拒绝策略。",
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
        "BIGO",
        "基础起步"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "以下数值只是展示参数关系，不是推荐生产值。\n\n```java\nAtomicInteger seq = new AtomicInteger();\nThreadPoolExecutor pool = new ThreadPoolExecutor(\n    4, 8, 60L, TimeUnit.SECONDS,\n    new ArrayBlockingQueue<Runnable>(100),\n    r -> new Thread(r, \"business-io-\" + seq.incrementAndGet()),\n    new ThreadPoolExecutor.AbortPolicy()\n);\nFuture<Integer> f = pool.submit(() -> 1 + 2);\ntry {\n    System.out.println(f.get(1, TimeUnit.SECONDS));\n} catch (TimeoutException e) {\n    f.cancel(true); // 仅尝试取消；底层调用还需响应中断/超时\n    throw e;\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n    throw e;\n} finally {\n    pool.shutdown(); // 服务级线程池应在服务生命周期结束时关闭，不是每请求关闭\n}\n```\n\n片段应放入声明相应异常的方法中，并导入 `java.util.concurrent.*`、`java.util.concurrent.atomic.AtomicInteger`。实际代码还应处理 `ExecutionException`、拒绝异常以及限时等待池退出。",
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 103,
      "originalQuestion": "线程池七个参数是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-038",
      "number": "Q03-038",
      "question": "synchronized 和 volatile 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. synchronized 用于方法或代码块，通过锁实现互斥；volatile 用于字段，主要保证可见性并约束相关重排。\n\n2. synchronized 正确保护同一段操作时，可以保证这段操作的互斥和相应原子性；volatile 不提供互斥。\n\n3. 例如 count++ 有读、加、写三个步骤，只加 volatile 仍可能丢失更新，需要锁或原子类。\n\n4. 停止标记、状态发布可以使用 volatile；多步骤修改共享状态通常使用 synchronized 等同步机制。",
      "sourceIds": [
        "REV20-JLS"
      ],
      "keywords": [
        "Q03-038",
        "多线程 / 并发",
        "基础补充",
        "基础起步",
        "synchronized",
        "volatile"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-009",
          "bank-Q03-010"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 104,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-039",
      "number": "Q03-039",
      "question": "线程池是什么？为什么要使用线程池？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 线程池管理一组工作线程，让多个任务复用线程执行。\n\n2. 减少开销： 避免每个任务都创建、销毁线程。\n\n3. 控制资源： 限制并发线程数，避免无限创建。\n\n4. 统一管理： 管理排队、拒绝、关闭和运行指标。\n\n5. 线程池和队列都需要容量边界；线程越多不一定越快。",
      "sourceIds": [],
      "keywords": [
        "Q03-039",
        "多线程 / 并发",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-022",
          "bank-Q03-023",
          "bank-Q03-025"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 105,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-040",
      "number": "Q03-040",
      "question": "Runnable 和 Callable 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Runnable 的核心方法是 run，没有返回值，也不能声明受检异常。\n\n2. Callable 的核心方法是 call，可以返回结果，也可以声明受检异常。\n\n3. Runnable 可以交给 Thread 或线程池执行；Callable 通常配合 FutureTask 或线程池使用。\n\n4. 不需要结果的任务常用 Runnable，需要返回结果的任务常用 Callable。",
      "sourceIds": [],
      "keywords": [
        "Q03-040",
        "多线程 / 并发",
        "基础补充",
        "基础起步",
        "Runnable",
        "Callable"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-002",
          "bank-Q03-026"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 106,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-041",
      "number": "Q03-041",
      "question": "什么是共享变量？什么情况下需要考虑线程安全？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 共享变量： 可以被多个线程访问的同一份数据。\n\n2. 风险组合： 多线程 + 共享数据 + 可变状态。\n\n3. 常见问题： 丢失更新、读到旧值、多个字段组合状态不一致。\n\n4. 处理方式： 不共享、使用不可变对象、正确加锁或原子操作。\n\n5. 两个线程都读到库存 1，再分别扣减，会产生竞态，必须保护完整判断和更新。",
      "sourceIds": [],
      "keywords": [
        "Q03-041",
        "多线程 / 并发",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-006",
          "bank-Q03-007"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 107,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-042",
      "number": "Q03-042",
      "question": "什么是可重入锁？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 可重入：同一线程已经持有某把锁时，可以再次获取这把锁。\n\n2. 典型支持： synchronized 和 ReentrantLock。\n\n3. 意义： 同一线程调用另一个使用同一锁的方法，不会因为自己持锁而把自己卡住。\n\n4. 释放规则： 显式锁重入几次，通常就需要对应释放几次。\n\n5. 可重入不能防止多线程之间按不同顺序拿多把锁造成死锁。",
      "sourceIds": [],
      "keywords": [
        "Q03-042",
        "多线程 / 并发",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-012",
          "bank-Q03-017"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 108,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-044",
      "number": "Q03-044",
      "question": "notify 和 notifyAll 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. notify： 从该对象等待集里选择一个等待线程进行通知。\n\n2. notifyAll： 通知该对象等待集中的所有线程。\n\n3. 调用方必须持有同一个对象的监视器锁。\n\n4. 唤醒后： 等待线程仍需重新竞争锁，并在 while 中检查条件。\n\n5. 通知不等于立即把锁交出去，也不保证被通知线程立刻运行。",
      "sourceIds": [
        "REV20-OBJECT"
      ],
      "keywords": [
        "Q03-044",
        "多线程 / 并发",
        "基础补充",
        "基础起步",
        "notify",
        "notifyAll"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-004",
          "bank-Q03-016"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Java 21：Object API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 109,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-JX005",
      "number": "JX005",
      "question": "newFixedThreadPool 和 newCachedThreadPool 各有什么容量风险？",
      "answer": "1. newFixedThreadPool 限了线程数，但默认队列可能积压大量任务。\n\n2. newCachedThreadPool 直接交接任务，允许线程数量增长得很大。\n\n3. 前者容易堆任务，后者容易堆线程。\n\n4. 需要显式规划并发、队列和拒绝策略。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "N051",
        "N052"
      ],
      "keywords": [
        "JX005",
        "多线程 / 并发",
        "京东",
        "快手",
        "newFixedThreadPool",
        "newCachedThreadPool"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-JX005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 110,
      "originalQuestion": "newFixedThreadPool 和 newCachedThreadPool 各有什么容量风险？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-005",
      "number": "Q03-005",
      "question": "如何正确停止线程？interrupt 会强制终止吗？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. interrupt 不是强制杀线程，而是发出“请停止”的信号。\n\n2. 线程要在循环中检查中断，或响应可中断阻塞方法抛出的异常，再结束工作并释放资源。\n\n3. 捕获 InterruptedException 后不能无条件忽略。\n\n4. isInterrupted() 只查看标志；Thread.interrupted() 查看当前线程标志后还会清除它。远程请求仍需配置自身超时。",
      "sourceIds": [],
      "keywords": [
        "Q03-005",
        "多线程 / 并发",
        "interrupt"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 111,
      "originalQuestion": "如何正确停止线程？interrupt 会强制终止吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-006",
      "number": "Q03-006",
      "question": "什么叫线程安全？加锁要保护一个字段还是一整段操作？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 线程安全就是多个线程一起访问时，业务结果仍然正确。\n\n2. 重点保护共享的可变数据和完整业务规则，可以用不共享、不可变、锁或原子操作。\n\n3. 不是每个变量都换成原子类，就能保证整个流程安全。\n\n4. 账户 A 扣钱和账户 B 加钱必须一起正确；只把两个余额各自变成 AtomicInteger，并不能保证一笔转账整体成功。",
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
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 112,
      "originalQuestion": "什么叫线程安全？加锁要保护一个字段还是一整段操作？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-008",
      "number": "Q03-008",
      "question": "happens-before 有哪些常见规则？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. happens-before 可以理解为“前面的操作，对后面的操作具有可见性和顺序保证”。\n\n2. 常见关系是：同线程先后顺序、解锁到后续加同一把锁、volatile 写到后续读、start 前到新线程、线程结束到 join 返回，以及这些关系的传递。\n\n3. 线程 A 在同一把锁内改数据并解锁，线程 B 随后加这把锁，就能依赖相应可见性保证；双方各睡一秒没有这种保证。",
      "sourceIds": [],
      "keywords": [
        "Q03-008",
        "多线程 / 并发",
        "happens",
        "before"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 113,
      "originalQuestion": "happens-before 有哪些常见规则？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-011",
      "number": "Q03-011",
      "question": "synchronized 的底层和锁优化怎么说？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. synchronized 的语义基础是对象监视器：进入时获取锁，退出时释放锁。\n\n2. 同步块常对应 monitorenter/monitorexit，同步方法用标记表示。\n\n3. JVM 会按版本做轻量级锁、锁消除等优化，不要把旧的“偏向锁一路升级”当成所有版本的固定流程。",
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
        "货拉拉",
        "synchronized"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T07 · JEP 374：Deprecate and Disable Biased Locking",
          "url": "https://openjdk.org/jeps/374",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 114,
      "originalQuestion": "synchronized 的底层和锁优化怎么说？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-012",
      "number": "Q03-012",
      "question": "synchronized 与 ReentrantLock 如何选择？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 两者都支持互斥、可重入和相应的可见性保证。\n\n2. synchronized 是 Java 关键字，退出同步区域时自动释放锁，写法简单。\n\n3. ReentrantLock 是显式锁，需要成功加锁后在 finally 中 unlock；支持 tryLock、超时等待、可中断获取、公平策略和多个 Condition。\n\n4. 普通互斥可以先用 synchronized；确实需要超时、可中断等能力时，再选择 ReentrantLock。",
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
        "深轻科技",
        "synchronized",
        "ReentrantLock"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 115,
      "originalQuestion": "synchronized 与 ReentrantLock 如何选择？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-014",
      "number": "Q03-014",
      "question": "AtomicInteger 和 LongAdder 的区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. AtomicInteger 围绕一个值做原子更新，适合需要精确单次结果的计数或序号。\n\n2. LongAdder 把高并发更新分散到多个格子，最后求和，适合统计。\n\n3. 它并发求和不是严格瞬时快照，不适合直接控制库存。\n\n4. 统计一秒收到多少请求，可考虑 LongAdder；决定“还剩一件商品，谁能买到”，不能只看 LongAdder.sum()。",
      "sourceIds": [],
      "keywords": [
        "Q03-014",
        "多线程 / 并发",
        "AtomicInteger",
        "LongAdder"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 116,
      "originalQuestion": "AtomicInteger 和 LongAdder 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-015",
      "number": "Q03-015",
      "question": "AQS 是锁吗？它怎样管理状态、排队和唤醒？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. AQS： 实现锁和同步器的基础框架，不是一把具体锁。\n\n2. 核心组成： 同步状态 `state` + 等待队列。\n\n3. 职责分工： 子类定义如何获取/释放资源；AQS 协调排队、阻塞、唤醒。\n\n4. 常见实现： ReentrantLock、Semaphore、CountDownLatch。\n\n5. state 在锁中可表示重入次数，在信号量中可表示许可数量。",
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
        "货拉拉",
        "AQS"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T03 · Java 21 AbstractQueuedSynchronizer API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 117,
      "originalQuestion": "AQS 是锁吗？它怎样管理状态、排队和唤醒？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-016",
      "number": "Q03-016",
      "question": "Condition 与 wait/notify 有什么联系？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Condition 是和 Lock 配套的“等待条件”。\n\n2. 条件不满足就 await，释放关联锁并等待。\n\n3. 状态改变后 signal 通知。\n\n4. 被唤醒不代表条件一定还成立，所以必须用 while 重新判断，再继续执行。\n\n5. 队列为空时消费者 await；生产者放入数据后 signal。消费者醒来可能发现数据已被别人取走，因此不能只用 if 检查一次。",
      "sourceIds": [],
      "keywords": [
        "Q03-016",
        "多线程 / 并发",
        "Condition",
        "wait",
        "notify"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 118,
      "originalQuestion": "Condition 与 wait/notify 有什么联系？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-019",
      "number": "Q03-019",
      "question": "CountDownLatch、CyclicBarrier、Semaphore 怎么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. CountDownLatch 等待若干任务完成，计数归零后放行，通常是一次性的。\n\n2. CyclicBarrier 让多个线程在同一个阶段点等待，到齐后再一起继续，可以分轮复用。\n\n3. Semaphore 用许可数量限制同时访问资源的任务数；成功获取许可后，要保证释放。\n\n4. 例如等三个查询完成用 CountDownLatch，每轮任务到齐再继续用 CyclicBarrier，限制同时调用第三方接口的数量用 Semaphore。",
      "sourceIds": [
        "N014"
      ],
      "keywords": [
        "Q03-019",
        "多线程 / 并发",
        "百度",
        "CountDownLatch",
        "CyclicBarrier",
        "Semaphore"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 119,
      "originalQuestion": "CountDownLatch、CyclicBarrier、Semaphore 怎么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-020",
      "number": "Q03-020",
      "question": "ThreadLocal 怎样隔离线程数据？为什么在线程池里要清理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 作用： 为每个线程提供独立的数据槽位，常保存用户上下文、traceId 等。\n\n2. 原理： 数据放在当前线程的 ThreadLocalMap 中，以 ThreadLocal 为键。\n\n3. 线程池复用线程，旧值可能串到下一个任务；长期持有 value 也可能造成内存问题。\n\n4. 处理： 不再使用时，在 `finally` 中 `remove()`；嵌套上下文需考虑恢复旧值。\n\n5. 存入同一个可变对象不等于复制出独立对象，也不自动变得线程安全。",
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
        "腾讯",
        "ThreadLocal"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\ntry {\n    tenantContext.set(validatedTenantId);\n    executeBusiness();\n} finally {\n    tenantContext.remove();\n}\n```\n\n这里只展示控制结构，`validatedTenantId`、`tenantContext`、`executeBusiness` 是应用对象。若存在嵌套上下文，应保存并恢复旧值；事务和权限不能仅通过任意字符串复制获得。",
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T04 · Java 21 ThreadLocal API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 120,
      "originalQuestion": "ThreadLocal 怎样隔离线程数据？为什么在线程池里要清理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-023",
      "number": "Q03-023",
      "question": "ThreadPoolExecutor 提交任务的执行流程？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 线程池正常运行时，工作线程数小于核心数，就创建线程执行新任务。\n\n2. 达到核心数后，先把任务放入队列，不是立即扩到最大线程数。\n\n3. 队列满了且线程数小于最大数，才继续创建线程。\n\n4. 队列已满、线程数也到上限，或者线程池不再接受任务时，执行拒绝策略。",
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
        "得物",
        "ThreadPoolExecutor"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 121,
      "originalQuestion": "ThreadPoolExecutor 提交任务的执行流程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-024",
      "number": "Q03-024",
      "question": "线程池拒绝策略有哪些？怎么选？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. AbortPolicy：抛出拒绝异常，是默认策略。\n\n2. CallerRunsPolicy：线程池没有关闭时，由提交任务的线程执行；可能拖慢请求线程或事件循环。\n\n3. DiscardPolicy：直接丢弃新任务。\n\n4. DiscardOldestPolicy：丢弃队头任务，再尝试提交新任务。\n\n5. 重要业务不能随意静默丢弃。线程池关闭时，CallerRunsPolicy 也不会替你执行任务。",
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
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 122,
      "originalQuestion": "线程池拒绝策略有哪些？怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-025",
      "number": "Q03-025",
      "question": "线程池大小如何设置？为什么不能只套 CPU×2？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先分 CPU 密集还是 IO 等待多，再看 CPU 配额、数据库连接数和下游限额，用压测调整线程数。\n\n2. CPU 密集任务通常从可用核心数附近起步。\n\n3. IO 密集可适当多开，但不能无限开。\n\n4. 公式只是估算起点，不是最终配置。\n\n5. 每秒 100 个请求、每个平均占用线程 0.2 秒，平均约有 20 个在途任务；还需考虑峰值、排队和下游容量。",
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
        "美团",
        "CPU"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 123,
      "originalQuestion": "线程池大小如何设置？为什么不能只套 CPU×2？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-026",
      "number": "Q03-026",
      "question": "execute、submit 和 Future 异常处理有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. execute 接收 Runnable，不返回 Future；任务异常通常进入工作线程的未捕获异常处理流程。\n\n2. submit 可以接收 Runnable 或 Callable，返回 Future；异常保存在 Future 中，调用 get 时才暴露。\n\n3. 忽略 Future 可能漏掉任务异常。get 会等待任务结果，必要时设置超时。",
      "sourceIds": [],
      "keywords": [
        "Q03-026",
        "多线程 / 并发",
        "execute",
        "submit",
        "Future"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q03-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 124,
      "originalQuestion": "execute、submit 和 Future 异常处理有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-027",
      "number": "Q03-027",
      "question": "shutdown 与 shutdownNow 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. shutdown 是“停止收新任务，把已接收的做完”。\n\n2. shutdownNow 是“尝试中断正在做的，并返回没开始的”。\n\n3. 后者不是强制杀死线程，任务不响应中断时仍可能继续。\n\n4. 优雅关闭应先停接流量，再等待任务，最后释放资源。",
      "sourceIds": [],
      "keywords": [
        "Q03-027",
        "多线程 / 并发",
        "shutdown",
        "shutdownNow"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 125,
      "originalQuestion": "shutdown 与 shutdownNow 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-029",
      "number": "Q03-029",
      "question": "CompletableFuture 怎样编排并行调用？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. CompletableFuture 用来组织异步任务的依赖关系。\n\n2. thenApply 转换结果，thenCompose 接上另一个异步任务，thenCombine 合并两个结果，allOf 等全部完成。\n\n3. 独立调用才适合并行，阻塞 IO 通常要指定合适的独立执行器。\n\n4. 用户信息和积分互不依赖，可以同时查询后合并；必须先拿到订单号才能查物流，就不是直接并行的关系。",
      "sourceIds": [],
      "keywords": [
        "Q03-029",
        "多线程 / 并发",
        "CompletableFuture"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-029",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T08 · Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 126,
      "originalQuestion": "CompletableFuture 怎样编排并行调用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-032",
      "number": "Q03-032",
      "question": "什么是安全发布？双重检查单例为什么用 volatile？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 安全发布是让另一个线程看到对象引用时，也能看到正确初始化的对象状态。\n\n2. 双重检查单例第一次读引用不加锁，因此实例字段需要 volatile，建立必要的发布保证。\n\n3. 仅把构造器设成 private，只解决外部不能随便 new。\n\n4. 不能出现“另一个线程已经拿到对象引用，却看到对象内部仍是未完成初始化的状态”。静态内部类也可利用类初始化保证构造发布。",
      "sourceIds": [],
      "keywords": [
        "Q03-032",
        "多线程 / 并发",
        "volatile"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 127,
      "originalQuestion": "什么是安全发布？双重检查单例为什么用 volatile？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-033",
      "number": "Q03-033",
      "question": "虚拟线程是什么？该不该池化？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "1. 虚拟线程是由 JDK 调度的轻量线程，Java 21 正式引入，主要适合大量等待 IO 的任务。\n\n2. 通常一个任务一个虚拟线程，不是建池反复复用。\n\n3. 它能降低线程成本，但数据库连接数和下游容量仍要限制。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q03-033",
        "多线程 / 并发",
        "招银网络科技"
      ],
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-033",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "T05 · JEP 444：Virtual Threads",
          "url": "https://openjdk.org/jeps/444",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 128,
      "originalQuestion": "虚拟线程是什么？该不该池化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-035",
      "number": "Q03-035",
      "question": "怎样让两个线程交替输出，或实现生产者消费者？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 交替输出先定义“现在轮到谁”，用同一把锁保护检查和修改。\n\n2. 不轮到自己就 while 等待，输出后切换状态并通知另一方。\n\n3. 还要设计结束和中断条件。\n\n4. 生产者消费者通常直接用 BlockingQueue 更稳妥。\n\n5. 只让 A sleep(100)、B sleep(200) 不能保证 A、B 交替，因为线程什么时候真正运行由调度决定。",
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
      "sourceFile": "03_多线程与并发.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q03-035",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 129,
      "originalQuestion": "怎样让两个线程交替输出，或实现生产者消费者？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-043",
      "number": "Q03-043",
      "question": "sleep 和 wait 都能让线程等待，为什么不能互相替代？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. sleep： 让当前线程暂停一定时间，不释放监视器锁。\n\n2. wait： 在持有指定对象监视器时调用，释放该监视器并等待；返回前重新获取。\n\n3. 目的不同： sleep 主要是时间等待；wait 用于条件协作。\n\n4. 消费者等队列有数据，需要检查条件并等待通知，不能只睡一秒就假设数据准备好了。",
      "sourceIds": [
        "REV20-THREAD",
        "REV20-OBJECT"
      ],
      "keywords": [
        "Q03-043",
        "多线程 / 并发",
        "基础补充",
        "sleep",
        "wait"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-004",
          "bank-Q03-016"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "T01 · JLS 21：Threads and Locks",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Java 21：Thread API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Java 21：Object API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 130,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-RM005",
      "number": "RM005",
      "question": "守护线程和普通线程有什么区别？",
      "answer": "1. 主要区别是会不会阻止 JVM 正常开始退出。\n\n2. 当已启动的非守护线程都结束，JVM 可以进入关闭流程，不会为了守护线程的业务继续等下去。\n\n3. 守护线程不是优先级更低，也不是自动负责垃圾回收。\n\n4. 后台统计任务可以考虑守护线程；重要文件写入、订单投递不能仅靠守护线程“应该会执行完”。要有等待退出或持久化保障。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见对比",
      "sourceIds": [
        "NI019"
      ],
      "keywords": [
        "RM005",
        "多线程 / 并发",
        "新蛋"
      ],
      "sourceFile": "recent-interviews-study.md",
      "originalKind": "面经具体追问 / 练习",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-RM005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Java 21 Thread",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 131,
      "originalQuestion": "守护线程和普通线程有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q03-018",
      "number": "Q03-018",
      "question": "读写锁和 StampedLock 有什么用途？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 读写锁允许多个线程同时读，但写操作排他，适合读多写少的共享数据。\n\n2. StampedLock 还支持乐观读：先获取 stamp 并读取数据，再 validate 检查期间是否发生写入。\n\n3. 验证失败后要加读锁重新读取，不能把未经验证的结果当作一致数据。\n\n4. StampedLock 不保证可重入；锁升级或转换要遵守对应 API 的规则。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q03-018",
        "多线程 / 并发",
        "阿里"
      ],
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "读写锁和 StampedLock 有什么用途？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 132
    },
    {
      "id": "bank-Q03-021",
      "number": "Q03-021",
      "question": "线程池如何传递用户、租户和 traceId？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. 提交线程池任务时，用户、租户和 traceId 不会靠普通 ThreadLocal 自动跟过去。\n\n2. 应在提交时捕获必要信息，执行前设置，结束后恢复或清理。\n\n3. InheritableThreadLocal 主要在线程创建时继承，不等于每个新任务都更新上下文。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q03-021",
        "多线程 / 并发",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "线程池如何传递用户、租户和 traceId？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-021",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "T04 · Java 21 ThreadLocal API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 133
    },
    {
      "id": "bank-Q03-028",
      "number": "Q03-028",
      "question": "线程池能动态调参吗？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. ThreadPoolExecutor 可以调整核心线程数、最大线程数和空闲回收时间。\n\n2. 调整时必须满足最大线程数不小于核心线程数；同时增大两者时，先提高最大值再提高核心值。\n\n3. 普通固定容量队列不会因为改一项线程池配置就自动扩容。\n\n4. 任务积压时先查瓶颈；数据库锁等待、下游限流等问题，不能单靠增加线程解决。",
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
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "线程池能动态调参吗？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "T02 · Java 21 ThreadPoolExecutor API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 134
    },
    {
      "id": "bank-Q03-030",
      "number": "Q03-030",
      "question": "CompletableFuture 超时或取消后，底层 HTTP、数据库调用会自动停止吗？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "1. CompletableFuture 超时或取消，不保证底层 HTTP、数据库操作立即停止。\n\n2. orTimeout 可能只是让 Future 异常完成，底层调用仍然占用连接或线程。\n\n3. 需要同时配置客户端超时，并在支持时传递取消信号、释放资源、处理迟到结果。\n\n4. 请求超时也不代表业务没有成功，重试下单等操作仍要使用幂等键或查询已有结果。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q03-030",
        "多线程 / 并发",
        "腾讯"
      ],
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "CompletableFuture 超时或取消后，底层 HTTP、数据库调用会自动停止吗？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "T08 · Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 135
    },
    {
      "id": "bank-Q03-031",
      "number": "Q03-031",
      "question": "ForkJoinPool、工作窃取和 parallelStream 有什么特点？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. ForkJoinPool 适合能拆成小块的计算任务。\n\n2. 每个工作线程有自己的任务队列，空闲时可以从其他线程拿任务，这叫工作窃取。\n\n3. parallelStream 常使用公共池，把慢 IO 放进去可能拖累其他任务，小数据量并行也可能更慢。",
      "sourceIds": [],
      "keywords": [
        "Q03-031",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "ForkJoinPool、工作窃取和 parallelStream 有什么特点？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 136
    },
    {
      "id": "bank-Q03-034",
      "number": "Q03-034",
      "question": "虚拟线程为什么会占住载体线程？JDK 21 和 24 的限制有何不同？",
      "category": "多线程 / 并发",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "1. pinning 指虚拟线程在某些操作中无法卸载，持续占用承载它的平台线程，影响扩展性。\n\n2. Java 21 中要留意 synchronized 区域内的阻塞；JDK 24 的 JEP 491 改善了这类 pinning。\n\n3. native 等调用仍要结合具体版本和路径分析；虚拟线程也不会增加 CPU 算力，不能直接加速计算密集循环。",
      "sourceIds": [],
      "keywords": [
        "Q03-034",
        "多线程 / 并发"
      ],
      "sourceFile": "03_多线程与并发.md",
      "isNew": false,
      "originalQuestion": "虚拟线程为什么会占住载体线程？JDK 21 和 24 的限制有何不同？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "T06 · JEP 491：Synchronize Virtual Threads without Pinning",
          "url": "https://openjdk.org/jeps/491",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 137
    },
    {
      "id": "bank-JX006",
      "number": "JX006",
      "question": "CallerRunsPolicy 为什么不适合所有场景？",
      "answer": "1. CallerRunsPolicy 让提交线程亲自做任务，能减慢提交速度，但也可能拖住 HTTP 线程、事件循环或持锁线程。它不是无损保证，池关闭时还会丢弃。先看提交者是什么，再决定是否适合把压力传回它。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "CallerRunsPolicy 为什么不适合所有场景？",
      "originalKind": "面经配置题延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX006",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.CallerRunsPolicy.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 138
    },
    {
      "id": "bank-JX007",
      "number": "JX007",
      "question": "固定线程池中的父任务提交子任务并 get，为什么可能卡死？",
      "answer": "1. 父任务占满线程池后，又在同一个池里提交子任务并阻塞等待；子任务排队却没有线程可运行，父任务又不肯退出，于是卡死。要改依赖结构、用非阻塞组合或合适的独立执行器，单纯加线程只是延后暴露。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX007",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "固定线程池中的父任务提交子任务并 get，为什么可能卡死？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX007",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nExecutorService pool = Executors.newFixedThreadPool(1);\nFuture<Integer> outer = pool.submit(() -> {\n    Future<Integer> inner = pool.submit(() -> 1);\n    return inner.get(); // 唯一工作线程等待队列中的任务，无法前进\n});\n// 反例：不要直接用于业务，应改造任务依赖。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 139
    },
    {
      "id": "bank-JX008",
      "number": "JX008",
      "question": "定时任务执行一次报错后，为什么再也不运行？",
      "answer": "1. ScheduledExecutorService 的周期任务一次抛异常，后续执行可能被取消。\n\n2. 任务边界应处理可恢复错误、记录告警，并观察 ScheduledFuture 的失败。\n\n3. 线程还活着不代表周期任务还会继续，不能把异常全部吞掉假装正常。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX008",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "定时任务执行一次报错后，为什么再也不运行？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 140
    },
    {
      "id": "bank-JX009",
      "number": "JX009",
      "question": "submit 配合 DiscardPolicy，Future.get 为什么可能一直等？",
      "answer": "1. submit 返回 Future，但任务若被 DiscardPolicy 静默丢弃，就没人执行、没人完成这个 Future，get 可能一直等。\n\n2. 拒绝时应明确失败或取消 Future，等待也要有超时。\n\n3. 没抛异常不代表任务真正入池成功。",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "体系补全／延伸练习",
      "sourceIds": [],
      "keywords": [
        "JX009",
        "多线程 / 并发"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "submit 配合 DiscardPolicy，Future.get 为什么可能一直等？",
      "originalKind": "体系补全／延伸练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 141
    },
    {
      "id": "bank-Q03-036",
      "number": "Q03-036",
      "question": "线程等 IO 时一定是 WAITING 吗？synchronized 与 Lock 阻塞状态有什么区别？",
      "answer": "1. 不一定。Java 状态和操作系统状态不是一一对应，阻塞 IO 在线程转储里可能仍显示 RUNNABLE。\n\n2. 抢 synchronized 常是 BLOCKED，ReentrantLock 等待常是 WAITING/TIMED_WAITING。\n\n3. 一定要结合栈和 CPU 看，不只看状态名。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "线程等 IO 时一定是 WAITING 吗？synchronized 与 Lock 阻塞状态有什么区别？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-036",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.State.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 142
    },
    {
      "id": "bank-Q03-037",
      "number": "Q03-037",
      "question": "持锁代码抛异常，锁一定会自动释放吗？",
      "answer": "1. synchronized 异常退出会自动释放监视器。\n\n2. 显式 Lock 要在成功加锁后用 finally 解锁，tryLock 失败则不能 unlock。\n\n3. 分布式锁还要验证持有者。进程被强杀时 finally 可能没机会执行，所以还需要租约和业务恢复。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "持锁代码抛异常，锁一定会自动释放吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q03-037",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 143
    },
    {
      "id": "bank-LX002",
      "number": "LX002",
      "question": "SettableFuture 适合什么场景？",
      "answer": "1. SettableFuture 可以理解成一个“结果先空着、以后由回调来填写”的盒子。\n\n2. 请求成功时调用 set 填结果，失败时用 setException 填异常，调用方按 Future 的方式等待或监听。\n\n3. 它本身不负责开线程，也不会因为 Future 被取消，就保证底层网络请求停止。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "SettableFuture 适合什么场景？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX002",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://guava.dev/releases/33.4.5-jre/api/docs/com/google/common/util/concurrent/SettableFuture.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 144
    },
    {
      "id": "bank-LX004",
      "number": "LX004",
      "question": "线程池中的某个线程会一直被认定为“核心线程”吗？",
      "answer": "1. 不会。ThreadPoolExecutor 的工作线程没有永久的核心、非核心身份。\n\n2. 核心线程数主要影响保留多少线程，以及空闲取任务时是否允许超时退出。\n\n3. 线程总数超过核心数时，较早创建的线程也可能空闲超时退出，不是只回收后来创建的线程。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "线程池中的某个线程会一直被认定为“核心线程”吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/concurrent/ThreadPoolExecutor.java",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 145
    },
    {
      "id": "bank-LX006",
      "number": "LX006",
      "question": "MESI、内存屏障和 volatile 是同一个层面的概念吗？",
      "answer": "1. MESI 是硬件管理缓存一致性的协议；内存屏障是约束部分读写重排、配合可见性的底层手段。\n\n2. volatile 是 Java 语言提供的字段修饰符，保证相关读写的可见性和顺序。\n\n3. 三者处于不同层次，不能把 volatile 简化成每次绕过缓存、直接访问主内存。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "MESI、内存屏障和 volatile 是同一个层面的概念吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX006",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 146
    },
    {
      "id": "bank-UX004",
      "number": "UX004",
      "question": "thenApply 和 thenApplyAsync 到底在哪个线程执行？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "1. thenApply 不保证切换线程，可能由完成前一步的线程执行。\n\n2. 前一步已完成时，也可能在注册回调的线程执行。\n\n3. thenApplyAsync 把回调交给执行器，未指定时通常用公共 ForkJoinPool。\n\n4. 需要控制执行位置，就传入明确的 Executor。\n\n5. 例如，轻量的结果字段转换可用 thenApply；后续需要访问慢接口时，考虑 thenApplyAsync(value -> callRemote(value), ioExecutor)。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "thenApply 和 thenApplyAsync 到底在哪个线程执行？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 147
    },
    {
      "id": "bank-RM002",
      "number": "RM002",
      "question": "ThreadLocalMap 的 key 为什么不是线程 ID？",
      "answer": "1. 因为 Map 已经放在每个线程内部了，先找当前线程，就已经知道是哪一个线程。\n\n2. 这个线程还可能存 userId、tenantId、traceId 等多个独立变量，所以 key 要区分“哪一个 ThreadLocal”，而不是再区分线程。\n\n3. 不是所有线程共用一张 ThreadLocalMap。线程池复用时仍要在 finally 清理或恢复上下文，值也不会自动深拷贝。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "ThreadLocalMap 的 key 为什么不是线程 ID？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM002",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Java 21 ThreadLocal",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 148
    },
    {
      "id": "bank-RM007",
      "number": "RM007",
      "question": "Disruptor 是什么？能替代 RabbitMQ 吗？",
      "answer": "1. Disruptor 是同一进程内的高性能线程间事件传递库，常用环形缓冲区、序号和消费者依赖关系协调处理，并可预分配事件对象，减少分配压力。RabbitMQ 则用于跨进程消息传递及相应可靠交付，两者不是同一个层次。\n\n2. 例如，同一服务内把采集事件交给多个处理步骤，可以评估 Disruptor；订单服务宕机后还要恢复投递，就不能只把事件放内存环形缓冲区。\n\n3. 等待策略有阻塞和忙等的取舍，不能概括成所有路径都完全无锁；慢消费者会限制生产进度，复用事件对象也不能被下游无限持有。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "Disruptor 是什么？能替代 RabbitMQ 吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM007",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "LMAX Disruptor User Guide",
          "url": "https://lmax-exchange.github.io/disruptor/user-guide/index.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 149
    },
    {
      "id": "bank-RM025",
      "number": "RM025",
      "question": "并发调用十次接口，耗时不同，怎样求返回值的最大值？",
      "answer": "1. 先确认需要十次都成功，还是只取超时前成功结果。\n\n2. 前者可用CompletableFuture.allOf后统一取值，或CompletionService按完成顺序收集十个结果。\n\n3. 最大值不依赖完成顺序。线程池、整体deadline和单次客户端超时都要明确。\n\n4. 例如，第10次很快返回最大值，也不能在要求“十次全部成功”的情况下立刻宣布最终结果，因为其他调用可能失败。用单线程汇总局部max就无需多人竞争同一个变量。\n\n5. 最大值初始化不要写0，否则全为负数会错；没有成功结果不能伪装最大值为0。Future超时不等于底层HTTP工作停止。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "并发调用十次接口，耗时不同，怎样求返回值的最大值？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Java 21 ExecutorCompletionService",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorCompletionService.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 150
    },
    {
      "id": "bank-RM032",
      "number": "RM032",
      "question": "三个线程依次输出 ABC，循环100次，除信号量外还能怎么实现？",
      "answer": "1. 可以用同一把锁和条件等待实现：定义 turn，A、B、C 分别在 turn 为 0、1、2 时输出。\n\n2. 每次在锁内检查 turn，不轮到自己就用 while 等待；输出后更新 turn，再通知其他线程。\n\n3. 每个线程输出 100 次，总共得到 100 组 ABC。发生中断时要通知其他线程结束，避免一直等待。\n\n4. volatile 只能提供相应可见性，不能让“检查轮次、输出、修改轮次”整体原子；sleep 也不能保证执行顺序。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "三个线程依次输出 ABC，循环100次，除信号量外还能怎么实现？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM032",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "JLS 21 线程与锁",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "practiceCode": "```java\n// 监视器方案核心：turn、cancelled、out必须由同一把lock保护。\n// id=0/1/2分别属于A/B/C线程；每个线程循环100次。\nsynchronized (lock) {\n    while (turn != id && !cancelled) lock.wait();\n    if (cancelled) return;\n    out.append((char) ('A' + id));\n    turn = (turn + 1) % 3;\n    lock.notifyAll();\n}\n// 完整示例还处理InterruptedException、通知退出和join；见code/InterviewPractice.java。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 151
    },
    {
      "id": "bank-Q04-001",
      "number": "Q04-001",
      "question": "JVM 运行时内存区域有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 堆是线程共享的，主要保存对象和数组。\n\n2. 方法区是线程共享的，保存类相关元数据，运行时常量池属于其中；HotSpot 的元空间是相关实现概念。\n\n3. 虚拟机栈是线程私有的，保存 Java 方法的栈帧；本地方法栈保存本地方法调用相关状态。\n\n4. 程序计数器是线程私有的，记录当前线程的执行位置相关信息。",
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
        "深轻科技",
        "基础起步"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q04-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V01 · JVMS 21：The Structure of the JVM",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 152,
      "originalQuestion": "JVM 运行时内存区域有哪些？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-007",
      "number": "Q04-007",
      "question": "如何判断对象可以被回收？GC Roots 有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 主要方法： 可达性分析，从 GC Roots 沿引用关系查找对象。\n\n2. 可达对象： 通常需要保留。\n\n3. 不可达对象： 可进入垃圾回收判定，不代表马上释放内存。\n\n4. 常见根： 活跃线程栈中的引用、类相关静态引用、JNI 引用等。\n\n5. A 与 B 互相引用，但从任何根都到不了它们，仍可能一起被回收。",
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
        "腾讯",
        "基础起步",
        "GC",
        "Roots"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q04-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 153,
      "originalQuestion": "如何判断对象可以被回收？GC Roots 有哪些？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-018",
      "number": "Q04-018",
      "question": "双亲委派模型是什么？可以打破吗？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 双亲委派：加载类时，通常先委托父加载器，父加载器找不到再由自己尝试。\n\n2. 先检查是否已经加载。\n\n3. 未加载则向父加载器委托。\n\n4. 父加载器无法完成时，当前加载器尝试加载。\n\n5. 作用： 复用基础类，减少重复加载和类型冲突。\n\n6. “双亲”是委托关系，不是类继承；自定义加载器可以调整策略。",
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
        "新蛋",
        "基础起步"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q04-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V02 · JVMS 21：Loading, Linking, and Initializing",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 154,
      "originalQuestion": "双亲委派模型是什么？可以打破吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-033",
      "number": "Q04-033",
      "question": "JVM 是什么？垃圾回收 GC 又是什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. JVM： Java 虚拟机，负责执行字节码并提供运行时管理能力。\n\n2. GC： 垃圾回收，识别并回收符合条件的、不再需要保留的对象内存。\n\n3. GC 是 JVM 内存管理的一部分，不是 JVM 的全部功能。\n\n4. GC 不代表文件、连接等外部资源一定及时关闭，仍需显式管理。",
      "sourceIds": [],
      "keywords": [
        "Q04-033",
        "JVM",
        "基础补充",
        "基础起步",
        "GC"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q01-001",
          "bank-Q01-018",
          "bank-Q04-007"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "J05 · JLS 21：Exceptions",
          "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 155,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-034",
      "number": "Q04-034",
      "question": "堆和栈有什么区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 堆主要保存对象和数组，由线程共享，对象通常由垃圾回收器管理。\n\n2. 虚拟机栈保存方法调用的栈帧，是线程私有的，随方法调用入栈、结束出栈。\n\n3. 堆空间不足可能出现 OutOfMemoryError；调用层次过深可能出现 StackOverflowError。\n\n4. 局部变量可以在栈帧中保存对象引用，但不代表整个对象也在栈中。",
      "sourceIds": [],
      "keywords": [
        "Q04-034",
        "JVM",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q04-001",
          "bank-Q04-002",
          "bank-Q04-021"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V01 · JVMS 21：The Structure of the JVM",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V04 · Java 21：Troubleshoot Memory Leaks",
          "url": "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 156,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-002",
      "number": "Q04-002",
      "question": "堆、栈、方法区各存什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 堆主要放对象和数组，栈帧放方法的局部变量、操作中间值和返回信息，方法区放类元数据等。\n\n2. 局部变量保存对象引用，不等于对象本体就在栈上。\n\n3. 先分清“变量里的引用”和“被引用的对象”。\n\n4. void f(){ User u = new User(); } 中，u 是局部引用；new 出来的 User 按通常执行模型在堆上。JIT 还可能优化掉分配。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V01 · JVMS 21：The Structure of the JVM",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 157,
      "originalQuestion": "堆、栈、方法区各存什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-003",
      "number": "Q04-003",
      "question": "一个对象从 new 到可用经历什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. new 对象可以按五步记：确认类可用、分配内存、赋默认值、设置对象头、执行实例初始化和构造器。\n\n2. 分配空间与构造器赋业务值是不同步骤。\n\n3. TLAB 等机制用来减少多个线程分配对象时的竞争。",
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
        "阿里",
        "new"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 158,
      "originalQuestion": "一个对象从 new 到可用经历什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-008",
      "number": "Q04-008",
      "question": "强、软、弱、虚引用的区别？",
      "category": "JVM",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. 强引用：对象正常强可达时，不会被回收。\n\n2. 软引用：适合内存敏感引用，内存紧张时可能被回收。\n\n3. 弱引用：对象处于弱可达状态时，可以被垃圾回收器清理。\n\n4. 虚引用：get 返回 null，通常配合引用队列跟踪回收相关通知。\n\n5. 这些引用都不能保证精确的回收时间，不能作为业务定时器。",
      "sourceIds": [
        "N028"
      ],
      "keywords": [
        "Q04-008",
        "JVM",
        "熙牛医疗"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q04-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 159,
      "originalQuestion": "强、软、弱、虚引用的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-009",
      "number": "Q04-009",
      "question": "常见 GC 算法及各自代价？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 标记清除：标记存活对象，再清理垃圾；缺点是可能产生内存碎片。\n\n2. 复制：把存活对象复制到另一块区域，再回收原区域；缺点是需要额外空间。\n\n3. 标记整理：标记后移动存活对象，使内存紧凑；缺点是移动对象有成本。\n\n4. 实际垃圾收集器可以组合使用这些算法，不是一种收集器只能对应一种算法。",
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
        "新蛋",
        "GC"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q04-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 160,
      "originalQuestion": "常见 GC 算法及各自代价？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-010",
      "number": "Q04-010",
      "question": "分代回收依据是什么？对象何时晋升？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 分代回收基于一个现象：多数对象很快不用，少数对象会活很久。\n\n2. 所以把不同寿命对象分开处理。\n\n3. 对象晋升与年龄、Survivor 空间和收集器策略有关，不是所有对象都必须经历 15 次 GC。\n\n4. 接口里临时拼接的对象常很快消失；长期缓存里的对象可能一直存活。两类对象用同样频率扫描不一定划算。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 161,
      "originalQuestion": "分代回收依据是什么？对象何时晋升？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-011",
      "number": "Q04-011",
      "question": "Minor GC、Major GC、Full GC、Mixed GC 怎么区分？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Young/Minor GC 通常收年轻代。\n\n2. Full GC 通常涉及全堆等更大范围。\n\n3. G1 的 Mixed GC 收年轻代加选中的老年代 Region。\n\n4. Major GC 在不同资料里叫法不统一，面试和排障最好按具体收集器日志说清楚。",
      "sourceIds": [
        "NI001"
      ],
      "keywords": [
        "Q04-011",
        "JVM",
        "招银网络科技",
        "Minor",
        "GC",
        "Major",
        "Full",
        "Mixed"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 162,
      "originalQuestion": "Minor GC、Major GC、Full GC、Mixed GC 怎么区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-014",
      "number": "Q04-014",
      "question": "G1 的核心思路是什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. G1 把堆分成很多 Region，根据回收收益和暂停目标选择部分区域处理。\n\n2. 它保留分代思想，用复制整理存活对象减少碎片，并通过记忆集记录跨区引用。\n\n3. 暂停时间是优化目标，不是承诺绝不超时。\n\n4. 像把仓库分成小区，优先清理垃圾多、清理收益高的小区，而不是每次都把整个仓库翻一遍。",
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
        "货拉拉",
        "G1"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V03 · Java 21 G1 GC Guide",
          "url": "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 163,
      "originalQuestion": "G1 的核心思路是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-017",
      "number": "Q04-017",
      "question": "类加载、验证、准备、解析、初始化分别做什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 类加载记为“加载、连接、初始化”。\n\n2. 连接再分“验证、准备、解析”。\n\n3. 加载读入类，验证检查合法性，准备设置必要静态存储和初值，解析处理符号引用，初始化执行静态字段赋值和静态代码块。\n\n4. static int x = 10：普通情况下准备阶段先得到默认值 0，初始化阶段再执行赋 10。编译期常量有专门规则。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V02 · JVMS 21：Loading, Linking, and Initializing",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 164,
      "originalQuestion": "类加载、验证、准备、解析、初始化分别做什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-020",
      "number": "Q04-020",
      "question": "Class.forName、loadClass 和类初始化触发条件？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Class.forName(String) 默认会触发类初始化。\n\n2. ClassLoader.loadClass 通常只加载，不主动初始化。\n\n3. new、调用类声明的静态方法、访问非编译期常量的静态字段等会涉及初始化。\n\n4. 类加载完成，不等于类初始化已经完成。\n\n5. 读取 static final int N=10 这种编译期常量，值可能已编进使用方，不一定触发定义类的初始化。",
      "sourceIds": [],
      "keywords": [
        "Q04-020",
        "JVM",
        "Class",
        "forName",
        "loadClass"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V02 · JVMS 21：Loading, Linking, and Initializing",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 165,
      "originalQuestion": "Class.forName、loadClass 和类初始化触发条件？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-021",
      "number": "Q04-021",
      "question": "OOM 与 StackOverflowError 怎么定位？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. StackOverflowError 重点查调用栈是否过深，例如无限递归。\n\n2. OutOfMemoryError 要先看缺哪类内存：堆、元空间、直接内存，还是本地线程资源。\n\n3. 容器还可能直接 OOMKill，没有机会输出 Java 异常。\n\n4. 堆还剩空间却无法创建线程，可能是线程栈、本地内存或系统线程限额耗尽，不应只增加 Xmx。",
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
        "即时设计",
        "OOM",
        "StackOverflowError"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V04 · Java 21：Troubleshoot Memory Leaks",
          "url": "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 166,
      "originalQuestion": "OOM 与 StackOverflowError 怎么定位？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-022",
      "number": "Q04-022",
      "question": "内存泄漏与内存溢出的区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 内存泄漏是“不再需要的对象仍被引用，回收不了”。\n\n2. 内存溢出是“申请内存时已经不够”。\n\n3. 泄漏可能导致溢出，但一次性加载太多数据也能直接溢出。\n\n4. 定位泄漏要找是谁长期持有这些对象。\n\n5. 缓存从不删除旧用户，会逐渐泄漏；一次把几百万行读进 List，可能没有长期泄漏也会 OOM。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V04 · Java 21：Troubleshoot Memory Leaks",
          "url": "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 167,
      "originalQuestion": "内存泄漏与内存溢出的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-023",
      "number": "Q04-023",
      "question": "CPU 飙高如何从进程定位到 Java 代码？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先用 top 等找高 CPU 的进程，再用 top -H -p PID 找热点线程，把线程 ID 转为十六进制，与 jstack/jcmd 里的 nid 对上。\n\n2. 连续采样确认它是在死循环、GC、正则还是正常计算，最后定位到代码和输入。\n\n3. 一份线程栈只是瞬间照片；同一线程连续多次停在相同热点，再结合 CPU 数据，判断才更可靠。",
      "sourceIds": [
        "NI002"
      ],
      "keywords": [
        "Q04-023",
        "JVM",
        "招银网络科技",
        "CPU",
        "Java"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "V05 · Java 21 jcmd 命令参考",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 168,
      "originalQuestion": "CPU 飙高如何从进程定位到 Java 代码？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-024",
      "number": "Q04-024",
      "question": "常用 JVM 工具有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. jcmd 看 JVM 信息、线程和诊断命令。\n\n2. jstack 看线程栈。\n\n3. jstat 看部分运行指标。\n\n4. JFR 记录运行事件。\n\n5. 堆 dump 配合 MAT 查对象是谁持有。\n\n6. 先用轻量信息缩小范围，再决定是否采集成本更高的 dump。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "将 `12345` 替换为实际 Java 进程 PID；命令能力、权限与开销随版本和环境不同。不要把示例 PID 原样套到生产。\n\n```bash\ntop -H -p 12345\njcmd 12345 VM.version\njcmd 12345 VM.flags\njcmd 12345 Thread.print\njstat -gcutil 12345 1000 10\n# 仅当启动时开启了NativeMemoryTracking时有相应信息：\njcmd 12345 VM.native_memory summary\n```\n\n分析 CPU 的顺序：线程 CPU → 同一 TID/nid 的多次栈 → 热点代码或 GC → 业务参数 → 修复后同负载验证。\n\n分析内存的顺序：容器限额/RSS → 堆和本地分项 → GC 后存活曲线 → 必要时 dump → 根引用持有路径。堆转储、JFR 录制请先用 `jcmd PID help` 查看对应运行环境支持的操作。",
      "references": [
        {
          "title": "V05 · Java 21 jcmd 命令参考",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 169,
      "originalQuestion": "常用 JVM 工具有哪些？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-025",
      "number": "Q04-025",
      "question": "JVM 调优的正确步骤？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. JVM 调优先定目标、测基线、找瓶颈，再改代码或参数，最后在相同负载下验证。\n\n2. 优先减少无意义对象、无限队列和长期引用，再考虑堆大小及收集器。\n\n3. 容器内存不能全给 Xmx，要给堆外内存留余量。",
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
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 170,
      "originalQuestion": "JVM 调优的正确步骤？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-026",
      "number": "Q04-026",
      "question": "解释执行、JIT、AOT 有什么区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 解释器按字节码执行。\n\n2. JIT 在运行中发现热点后，把它编译成机器码。\n\n3. AOT 提前编译。JIT 能结合实际运行情况优化，但需要预热。\n\n4. AOT 可改善某些启动场景，但动态能力和部署约束要单独考虑。",
      "sourceIds": [],
      "keywords": [
        "Q04-026",
        "JVM",
        "JIT",
        "AOT"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 171,
      "originalQuestion": "解释执行、JIT、AOT 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-028",
      "number": "Q04-028",
      "question": "频繁 Young GC 和频繁 Full GC 分别如何排查？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Young GC 频繁，先查对象分配太快、临时对象过多和年轻代空间。\n\n2. Full GC 频繁，再查长期存活对象、晋升、元空间和收集器回退。\n\n3. 要看 GC 后还剩多少、暂停多久、是否影响接口，不是只看次数。\n\n4. Young GC 很多但每次很短、吞吐正常，不一定需要调；Full GC 后堆仍越来越高，更值得查持有链或容量问题。",
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
        "阿里",
        "Young",
        "GC",
        "Full"
      ],
      "sourceFile": "04_JVM.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q04-028",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "V04 · Java 21：Troubleshoot Memory Leaks",
          "url": "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 172,
      "originalQuestion": "频繁 Young GC 和频繁 Full GC 分别如何排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q04-004",
      "number": "Q04-004",
      "question": "对象头、压缩指针和内存对齐是什么？对象大小固定吗？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 对象内存通常包括对象头、实例字段和对齐填充，数组还保存长度。\n\n2. 对象头记录锁、哈希和类信息等；压缩指针用更短的表示减少引用开销。\n\n3. 对象大小与 JDK、参数、字段布局和对齐规则有关，不是固定字节数。\n\n4. 需要精确大小时，在对应 JVM 配置下使用 JOL 等工具测量。",
      "sourceIds": [],
      "keywords": [
        "Q04-004",
        "JVM"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "对象头、压缩指针和内存对齐是什么？对象大小固定吗？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 173
    },
    {
      "id": "bank-Q04-005",
      "number": "Q04-005",
      "question": "TLAB 是什么？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. TLAB 是堆中为某个线程预留的一小块对象分配区域，仍然属于共享堆。\n\n2. 线程在自己的 TLAB 中分配对象，通常不必每次争抢公共分配指针，可以减少竞争。\n\n3. 它优化的是内存分配，不是对象访问；对象被其他线程共享后，仍需要正常的线程安全措施。",
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
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "TLAB 是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-005",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 174
    },
    {
      "id": "bank-Q04-006",
      "number": "Q04-006",
      "question": "对象不逃逸就一定在栈上分配吗？什么是标量替换？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 逃逸分析判断对象是否会被方法外部或其他线程访问。\n\n2. 对象不逃逸时，JIT 可能消除相关锁，或把对象拆成几个普通值，省掉对象分配，这叫标量替换。\n\n3. 不逃逸不等于保证把整个对象放到栈上，具体优化取决于编译器和代码形态。",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "Q04-006",
        "JVM",
        "货拉拉"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "对象不逃逸就一定在栈上分配吗？什么是标量替换？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-006",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 175
    },
    {
      "id": "bank-Q04-012",
      "number": "Q04-012",
      "question": "STW、安全点和安全区域是什么？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. STW 指为了完成某些 JVM 操作，暂停应用线程。\n\n2. 安全点是 JVM 可以安全检查和枚举线程状态的位置；进入暂停时可能需要等待线程到达安全点。\n\n3. 安全区域表示一段时间内线程状态足够稳定，可以安全处理。\n\n4. 并发垃圾收集器也可能存在短暂 STW，并不代表整个回收过程完全不暂停。",
      "sourceIds": [],
      "keywords": [
        "Q04-012",
        "JVM"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "STW、安全点和安全区域是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-012",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 176
    },
    {
      "id": "bank-Q04-013",
      "number": "Q04-013",
      "question": "CMS 有哪些局限？为什么回答时要说明 JDK 版本？",
      "category": "JVM",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "1. CMS 是旧的低停顿收集器，主要采用并发标记清除，但有内存碎片、浮动垃圾和并发失败等问题，也不是完全不暂停。CMS 已在 JDK 14 移除，适合理解旧系统，不能拿它当现代 JDK 的可用配置。",
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
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "CMS 有哪些局限？为什么回答时要说明 JDK 版本？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-013",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "V06 · JEP 363：Remove CMS",
          "url": "https://openjdk.org/jeps/363",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 177
    },
    {
      "id": "bank-Q04-015",
      "number": "Q04-015",
      "question": "ZGC 解决什么问题？与 G1 如何选择？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. G1 偏向通用的吞吐和停顿平衡；ZGC 更强调低停顿。\n\n2. 选择时比较实际业务的延迟、吞吐、堆大小以及 CPU、内存余量，而不是只看单个指标。\n\n3. ZGC 的分代模式随 JDK 演进，需要说明版本；低 GC 停顿也不能消除锁等待和下游调用造成的接口延迟。",
      "sourceIds": [
        "N021"
      ],
      "keywords": [
        "Q04-015",
        "JVM",
        "快手"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "ZGC 解决什么问题？与 G1 如何选择？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 178
    },
    {
      "id": "bank-Q04-016",
      "number": "Q04-016",
      "question": "三色标记和写屏障为什么存在？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 三色标记把对象分成未扫描、扫描中、已扫描。问题是 GC 扫描时，业务线程还可能修改引用关系，导致该保留的对象被漏掉。写屏障等机制记录这些变化，让收集器能补充处理，避免错误回收。\n\n2. 例如，GC 刚扫过 A，业务又让 A 指向一个尚未扫描的 B；收集器需要知道这次引用变化，而不是假装扫描期间世界没变。",
      "sourceIds": [],
      "keywords": [
        "Q04-016",
        "JVM"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "三色标记和写屏障为什么存在？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 179
    },
    {
      "id": "bank-Q04-019",
      "number": "Q04-019",
      "question": "两个类包名和类名都相同，为什么强转仍可能失败？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 运行时判断是不是同一个类，不只看包名和类名，还看“哪个类加载器定义的”。两个加载器各自定义了同名 User，也可能是不同类型，互相强转会失败。排查时要同时看类名、加载器和 jar 来源。",
      "sourceIds": [],
      "keywords": [
        "Q04-019",
        "JVM"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "两个类包名和类名都相同，为什么强转仍可能失败？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "V02 · JVMS 21：Loading, Linking, and Initializing",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 180
    },
    {
      "id": "bank-Q04-027",
      "number": "Q04-027",
      "question": "JIT 为什么可能去优化？内联有什么作用？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. JIT 会根据运行时观察到的类型和分支等做投机优化；假设失效后退回更通用的执行方式，叫去优化。\n\n2. 内联是把方法展开到调用处，减少调用开销，并为进一步优化创造条件。\n\n3. 内联也有代码体积成本。评估性能要考虑预热、输入和完整调用链，不能只测一次循环。",
      "sourceIds": [],
      "keywords": [
        "Q04-027",
        "JVM"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "JIT 为什么可能去优化？内联有什么作用？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 181
    },
    {
      "id": "bank-Q04-029",
      "number": "Q04-029",
      "question": "类卸载与元空间泄漏怎么理解？",
      "category": "JVM",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 类元数据能否卸载，和定义它的类加载器是否还能被找到有关。热部署或动态生成类时，旧加载器被缓存、线程或监听器一直引用，元空间就可能持续增长。先找谁持有旧加载器，不要只把上限调大。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q04-029",
        "JVM",
        "BIGO"
      ],
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "类卸载与元空间泄漏怎么理解？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "V02 · JVMS 21：Loading, Linking, and Initializing",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 182
    },
    {
      "id": "bank-Q04-030",
      "number": "Q04-030",
      "question": "直接内存和线程栈如何纳入容量预算？",
      "category": "JVM",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Java 进程内存不只有堆，还包括线程栈、元空间、代码缓存、直接缓冲和其他本地内存。Xmx 只管堆，不是进程总上限。做容量预算要结合线程数、RSS、NMT 和容器限制，给堆外保留空间。",
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
      "sourceFile": "04_JVM.md",
      "isNew": false,
      "originalQuestion": "直接内存和线程栈如何纳入容量预算？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "V04 · Java 21：Troubleshoot Memory Leaks",
          "url": "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshooting-memory-leaks.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 183
    },
    {
      "id": "bank-JX003",
      "number": "JX003",
      "question": "对象内存分配时，指针碰撞和空闲列表各适用什么情况？",
      "answer": "1. 空闲内存是连续一片时，移动指针划一段即可，叫指针碰撞；空闲块分散时，要从空闲管理结构里找合适块，叫空闲列表思路。具体方案和收集器有关，TLAB 则减少线程争抢分配空间。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "对象内存分配时，指针碰撞和空闲列表各适用什么情况？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX003",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 184
    },
    {
      "id": "bank-JX004",
      "number": "JX004",
      "question": "Minor GC 为什么不会漏掉被老年代引用的年轻代对象？",
      "answer": "1. 年轻代回收不能漏掉“老年代还引用着”的年轻对象。JVM 会通过写屏障记录跨区引用，再用卡表、记忆集等结构快速找到这些引用，而不用每次完整扫描全部老年代。记忆集不是存活对象清单。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Minor GC 为什么不会漏掉被老年代引用的年轻代对象？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/en/java/javase/17/gctuning/garbage-first-garbage-collector-tuning.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 185
    },
    {
      "id": "bank-JX013",
      "number": "JX013",
      "question": "JVM 栈帧里有哪些东西？局部变量都存对象本身吗？",
      "answer": "1. 一个方法的栈帧主要保存局部变量表、操作数栈，以及动态链接和返回需要的信息。局部变量可以是基本值，也可以是引用；保存一个 User 引用，不代表整个 User 对象都装进了栈帧。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "JVM 栈帧里有哪些东西？局部变量都存对象本身吗？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX013",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 186
    },
    {
      "id": "bank-JX014",
      "number": "JX014",
      "question": "运行时常量池就是字符串常量池吗？",
      "answer": "1. 不是。运行时常量池属于类/接口，包含常量及类、方法等符号引用；字符串常量池用于复用驻留的 String 对象。名字都带“常量池”，但用途和数据结构不同，不能把它们画成同一个东西。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "运行时常量池就是字符串常量池吗？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX014",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.5",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 187
    },
    {
      "id": "bank-JX015",
      "number": "JX015",
      "question": "对象引用通过句柄和直接指针访问，有什么取舍？",
      "answer": "1. 句柄访问像先找中转地址，再找对象；对象移动时可更新中转目标。直接指针访问路径短，但移动对象后要维护相关引用。JVM 规范不强制同一种表示，压缩指针又是另一个维度，不能混在一起。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "对象引用通过句柄和直接指针访问，有什么取舍？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.7",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 188
    },
    {
      "id": "bank-JX016",
      "number": "JX016",
      "question": "用了 JNI 后，为什么可能没 Java 异常就整个进程崩溃？",
      "answer": "1. JNI 运行本地代码，非法指针、越界和库不兼容可能直接让进程崩溃，没有普通 Java 异常可 catch。先保留 hs_err、core dump 和库版本，查看本地栈；还要检查 JNI 引用和本地内存泄漏。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "用了 JNI 后，为什么可能没 Java 异常就整个进程崩溃？",
      "originalKind": "面经考点延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 189
    },
    {
      "id": "bank-Q04-031",
      "number": "Q04-031",
      "question": "循环不断调用一个普通方法，会导致栈溢出吗？",
      "answer": "1. 普通方法每次调用后正常返回，栈深不会因循环次数不断增加，所以循环不等于栈溢出。\n\n2. 递归不断加深才可能 StackOverflowError。\n\n3. 循环若持续保存新对象，可能撑爆的是堆。\n\n4. 若什么也不等，只可能不断耗 CPU。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "循环不断调用一个普通方法，会导致栈溢出吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 190
    },
    {
      "id": "bank-Q04-032",
      "number": "Q04-032",
      "question": "classpath 里出现同名类，一定优先加载我写的类吗？",
      "answer": "1. 不一定。实际加载哪个类取决于类加载器委派、搜索路径和模块等规则。排查同名类要看定义加载器和代码来源，而不是只看 classpath 有自己那份。相同全限定名被不同加载器定义，也可能无法互相强转。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "classpath 里出现同名类，一定优先加载我写的类吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q04-032",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 191
    },
    {
      "id": "bank-Q05-044",
      "number": "Q05-044",
      "question": "Spring／Spring MVC 开发接口时，常用的注解有哪些？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. `@RestController` 声明返回数据的控制器；`@Controller` 也可以处理视图，配合 `@ResponseBody` 返回数据。\n\n2. `@RequestMapping` 配置请求路径等条件；`@GetMapping`、`@PostMapping` 分别处理 GET、POST 请求。\n\n3. `@RequestParam` 接收查询或表单参数；`@PathVariable` 接收路径变量；`@RequestBody` 接收 JSON 等请求体。\n\n4. `@Service`、`@Repository`、`@Component` 注册组件；`@Bean` 注册方法返回的对象；`@Autowired` 注入依赖，`@Qualifier` 指定候选。\n\n5. `@Valid`、`@Validated` 在相应入口触发参数校验；`@RestControllerAdvice` 配合 `@ExceptionHandler` 统一处理异常。\n\n6. `@Transactional` 声明事务边界和回滚规则。返回数据的具体格式由消息转换器等决定，不一定只能是 JSON。",
      "sourceIds": [
        "REV20-MVC",
        "REV20-BODY",
        "REV20-REQBODY"
      ],
      "keywords": [
        "Q05-044",
        "Spring / Spring Boot",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步",
        "Spring",
        "MVC"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-004",
          "bank-Q05-006",
          "bank-Q05-013",
          "bank-Q05-023",
          "bank-Q05-024"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Spring MVC：Mapping Requests",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Spring MVC：@ResponseBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Spring MVC：@RequestBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 192,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-014",
      "number": "Q05-014",
      "question": "@Transactional 事务在哪些情况下会失效？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 对象没有交给 Spring 管理，例如自己 `new` Service，没有使用事务代理。\n\n2. 同类内部直接调用事务方法，绕过代理，被调方法的事务配置不生效；已有的外层事务不会因此消失。\n\n3. 方法无法被代理拦截，例如 private 方法、类代理中的 final 方法。其他非 public 方法要结合 Spring 版本和代理方式判断。\n\n4. 异常被 catch 后吞掉，或者异常类型不符合回滚规则，导致事务没有按预期回滚。\n\n5. 新线程没有继承原 JDBC 事务，或者数据源、事务管理器不匹配，数据库操作没有参与预期事务。\n\n6. 没有启用事务管理、数据库引擎不支持事务，或者传播配置明确要求不使用事务。",
      "sourceIds": [
        "N009",
        "N025",
        "X06",
        "NI024",
        "REV20-TX"
      ],
      "keywords": [
        "Q05-014",
        "Spring / Spring Boot",
        "京东",
        "大疆",
        "好未来",
        "即时设计",
        "本次面试",
        "面试复盘",
        "基础起步",
        "@Transactional"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 193,
      "originalQuestion": "@Transactional 为什么没有生效，或者生效了却没有回滚？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-045",
      "number": "Q05-045",
      "question": "如果要指定某类异常发生时回滚事务，应该怎么配置？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 在 Spring 的事务注解中配置 `rollbackFor`，例如 `@Transactional(rollbackFor = IOException.class)`。\n\n2. 指定多个异常，写 `rollbackFor = {IOException.class, SQLException.class}`；要求所有 Exception 都触发回滚，写 `rollbackFor = Exception.class`。\n\n3. 配置会匹配指定异常及其子类。其他异常仍按有效回滚规则处理，不是只能对指定类型回滚。\n\n4. 调用必须经过事务代理，异常需要抛出方法或显式标记回滚；在内部 catch 后吞掉，单靠这项配置不会自动回滚。",
      "sourceIds": [
        "REV20-TXA",
        "REV20-TX"
      ],
      "keywords": [
        "Q05-045",
        "Spring / Spring Boot",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-014",
          "bank-Q05-015"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Spring：@Transactional API",
          "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 194,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-001",
      "number": "Q05-001",
      "question": "Spring、Spring MVC、Spring Boot 的关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Spring 是基础框架，提供 IoC、AOP、事务等能力。\n\n2. Spring MVC 是 Spring 中处理 Web 请求的框架，负责请求映射、调用控制器和返回响应。\n\n3. Spring Boot 基于 Spring，通过自动配置、Starter 和运行支持简化应用搭建与启动。\n\n4. Spring Boot 没有替代 Spring，Spring MVC 也不是 Spring Boot 的另一种叫法。",
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
        "拼多多",
        "基础起步",
        "Spring",
        "MVC",
        "Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 195,
      "originalQuestion": "Spring、Spring MVC、Spring Boot 的关系？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-002",
      "number": "Q05-002",
      "question": "IoC 和 DI 是什么？为什么不直接 new？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. IoC（控制反转）： 把对象创建、管理和依赖组织交给容器。\n\n2. DI（依赖注入）： 容器把对象需要的依赖通过构造器等方式传进去。\n\n3. DI 是实现 IoC 的常见方式。\n\n4. 降低实现耦合，方便替换依赖和单元测试。\n\n5. OrderService 接收 PayService，而不是在内部写死某个支付实现。\n\n6. 普通数据对象仍可 `new`；需要容器生命周期或代理的服务由容器管理。",
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
        "新蛋",
        "基础起步",
        "IoC",
        "DI",
        "new"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S01 · Spring：Dependency Injection",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 196,
      "originalQuestion": "IoC 和 DI 是什么？为什么不直接 new？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-004",
      "number": "Q05-004",
      "question": "Bean 注册方式有哪些？@Component 与 @Bean 怎么选？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. @Component、@Service、@Repository、@Controller 等放在类上，通过组件扫描注册 Bean，常用于自己编写的业务类。\n\n2. @Bean 放在配置方法上，把方法返回的对象交给容器管理，适合第三方类或需要定制创建过程的对象。\n\n3. 例如 UserService 使用 @Service；配置第三方客户端时，可以在配置类中用 @Bean 创建并注册。",
      "sourceIds": [],
      "keywords": [
        "Q05-004",
        "Spring / Spring Boot",
        "基础起步",
        "Bean",
        "@Component",
        "@Bean"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 197,
      "originalQuestion": "Bean 注册方式有哪些？@Component 与 @Bean 怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-007",
      "number": "Q05-007",
      "question": "Bean 的作用域有哪些？单例是否线程安全？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. singleton 是默认作用域，同一容器中一个 Bean 定义通常对应一个实例。\n\n2. prototype 表示每次向容器请求时创建实例；Web 环境还有 request、session 等作用域。\n\n3. 单例不等于线程安全。多个请求可能访问同一个 Service，共享可变字段会产生竞争。\n\n4. Service 尽量保持无状态，用户 ID 等请求数据放在方法参数或合适上下文中。",
      "sourceIds": [
        "N009",
        "NI008"
      ],
      "keywords": [
        "Q05-007",
        "Spring / Spring Boot",
        "京东",
        "美团",
        "基础起步",
        "Bean"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 198,
      "originalQuestion": "Bean 的作用域有哪些？单例是否线程安全？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-011",
      "number": "Q05-011",
      "question": "AOP 用来解决什么问题？有哪些通知？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. AOP 是面向切面编程，把日志、权限、事务等公共逻辑从业务代码中抽出，围绕方法统一执行。\n\n2. 通知有五种：前置、返回后、异常后、最终后置和环绕。\n\n3. 前置在方法调用前执行；返回后在正常返回时执行；异常后在抛异常时执行；最终后置在方法结束时执行。\n\n4. 环绕通知可以控制方法调用前后的行为，通过 proceed() 执行原方法。Spring AOP 通常基于代理，同类自调用可能绕过增强。",
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
        "新蛋",
        "基础起步",
        "AOP"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 199,
      "originalQuestion": "AOP 用来解决什么问题？有哪些通知？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-015",
      "number": "Q05-015",
      "question": "Spring 默认哪些异常回滚？checked 异常怎么办？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 未自定义回滚规则时：\n\n2. RuntimeException 及其子类： 回滚。\n\n3. Error 及其子类： 回滚。\n\n4. 受检异常： 默认不自动回滚，需要按业务配置 `rollbackFor`。\n\n```java\n@Transactional(rollbackFor = Exception.class)\n```\n\n5. Spring 新版本可配置全局默认规则；方法内部吞异常、没有走代理，不能靠这一行注解补救。",
      "sourceIds": [
        "REV20-TX",
        "REV20-TXA"
      ],
      "keywords": [
        "Q05-015",
        "Spring / Spring Boot",
        "基础起步",
        "Spring",
        "checked"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Spring：@Transactional API",
          "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 200,
      "originalQuestion": "Spring 默认哪些异常回滚？checked 异常怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-023",
      "number": "Q05-023",
      "question": "@RequestParam、@PathVariable、@RequestBody 的区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. @RequestParam 接收查询参数或表单参数，例如 `/users?page=1` 中的 page。\n\n2. @PathVariable 接收 URL 路径变量，例如 `/users/123` 中的 123。\n\n3. @RequestBody 通过消息转换器读取请求体，例如把 JSON 转成 DTO。\n\n4. 请求格式要与 Content-Type 匹配；不能用多个独立的 @RequestBody 随意重复消费同一请求体。",
      "sourceIds": [
        "NI004",
        "REV20-REQBODY"
      ],
      "keywords": [
        "Q05-023",
        "Spring / Spring Boot",
        "招银网络科技",
        "基础起步",
        "@RequestParam",
        "@PathVariable",
        "@RequestBody"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Spring MVC：@RequestBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 201,
      "originalQuestion": "@RequestParam、@PathVariable、@RequestBody 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-026",
      "number": "Q05-026",
      "question": "@SpringBootApplication 包含什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. @SpringBootConfiguration 声明 Spring Boot 配置类，基于 @Configuration。\n\n2. @EnableAutoConfiguration 开启自动配置。\n\n3. @ComponentScan 扫描组件并注册 Bean。\n\n4. @SpringBootApplication 主要组合以上三个注解。启动类的位置影响默认扫描范围，通常放在业务根包。",
      "sourceIds": [
        "N056"
      ],
      "keywords": [
        "Q05-026",
        "Spring / Spring Boot",
        "阿里",
        "基础起步",
        "@SpringBootApplication"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 202,
      "originalQuestion": "@SpringBootApplication 包含什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-031",
      "number": "Q05-031",
      "question": "MyBatis 的 Mapper 接口为什么不用手写实现？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. MyBatis 的职责： 将 Java 方法、SQL、参数和结果映射连接起来。\n\n2. Mapper 不写实现： 框架创建接口代理，把方法调用转成对应 SQL 执行。\n\n3. 执行步骤： 找映射语句 → 绑定参数 → 执行 SQL → 映射结果。\n\n4. Mapper 代理不意味着 SQL 自动最优；数据值用 `#{}` 绑定，动态拼接位置必须受控。",
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
        "腾讯",
        "基础起步",
        "MyBatis",
        "Mapper"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-031",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S06 · MyBatis：Mapper XML Files",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 203,
      "originalQuestion": "MyBatis 的 Mapper 接口为什么不用手写实现？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-043",
      "number": "Q05-043",
      "question": "MyBatis 的 #{} 与 ${} 有什么区别？动态排序怎么办？",
      "answer": "1. `#{value}` 使用预编译参数占位并绑定数据值，适合普通查询参数，可以防止该参数位置的 SQL 注入。\n\n2. `${value}` 把文本直接拼进 SQL，直接接收用户输入会有注入风险。\n\n3. 表名、列名和 SQL 关键字不能用 `#{}` 当成普通参数替换。动态排序应由服务端白名单把选项映射为合法列名。\n\n4. 例如条件使用 `WHERE name = #{name}`；排序列只允许预先定义的几个选项，不能直接拼接任意 sort 参数。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见对比",
      "sourceIds": [
        "N035",
        "REV20-MAPPER"
      ],
      "keywords": [
        "Q05-043",
        "Spring / Spring Boot",
        "快手",
        "基础起步",
        "MyBatis"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-043",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MyBatis：Mapper XML",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 204,
      "originalQuestion": "MyBatis 的 #{} 与 ${} 有什么区别？动态排序怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-046",
      "number": "Q05-046",
      "question": "Spring Bean 是什么？普通对象和 Bean 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Bean 是由 Spring 容器创建、配置或管理的对象。\n\n2. 管理能力： 可参与依赖注入、生命周期回调和配置装配。\n\n3. 增强能力： 满足条件时可被事务、AOP 等代理增强。\n\n4. 普通对象： 手工 new 的对象不会仅因类上有注解就自动参与容器管理。\n\n5. 用 `@Bean` 方法创建对象时也可能用 new；关键不是有没有 new，而是对象是否被交给容器管理。",
      "sourceIds": [
        "REV20-IOC"
      ],
      "keywords": [
        "Q05-046",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "Spring",
        "Bean"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-002",
          "bank-Q05-004",
          "bank-Q05-008"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "S01 · Spring：Dependency Injection",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Spring：IoC Container",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/introduction.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 205,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-047",
      "number": "Q05-047",
      "question": "@Controller 和 @RestController 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. @Controller 声明控制器，可以返回视图；需要返回数据时，通常配合 @ResponseBody。\n\n2. @RestController 相当于组合 @Controller 和 @ResponseBody，默认把方法返回值写入响应体。\n\n3. 普通 Controller 返回字符串可能表示视图名；RestController 返回对象通常由消息转换器序列化，具体格式不一定是 JSON。",
      "sourceIds": [
        "REV20-BODY"
      ],
      "keywords": [
        "Q05-047",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "@Controller",
        "@RestController"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-021",
          "bank-Q05-023"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "Spring MVC：@ResponseBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 206,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-048",
      "number": "Q05-048",
      "question": "@RequestMapping 和 @GetMapping、@PostMapping 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. @RequestMapping： 通用请求映射，可配置路径、HTTP 方法、媒体类型等。\n\n2. @GetMapping： 专门映射 GET 请求，是组合注解。\n\n3. @PostMapping： 专门映射 POST 请求，也是组合注解。\n\n4. 类上写公共路径，方法上写具体路径与方法。\n\n```java\n@RestController\n@RequestMapping(\"/users\")\nclass UserController {\n    @GetMapping(\"/ping\")\n    public String ping() { return \"ok\"; }\n}\n```\n\n5. 结果： `GET /users/ping` 返回 `ok`。",
      "sourceIds": [
        "REV20-MVC",
        "REV20-BODY"
      ],
      "keywords": [
        "Q05-048",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "@RequestMapping",
        "@GetMapping",
        "@PostMapping"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-021",
          "bank-Q05-023"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "Spring MVC：Mapping Requests",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Spring MVC：@ResponseBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 207,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-049",
      "number": "Q05-049",
      "question": "Controller、Service、Mapper／DAO 三层分别负责什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Controller 接收请求，进行参数绑定和校验，组织返回响应。\n\n2. Service 实现业务规则，协调多个操作，并确定事务边界。\n\n3. Mapper 或 DAO 负责访问数据库，执行查询和更新。\n\n4. 常见调用顺序是 Controller → Service → Mapper/DAO → 数据库，避免把所有业务都堆在 Controller 中。",
      "sourceIds": [],
      "keywords": [
        "Q05-049",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "Controller",
        "Service",
        "Mapper",
        "DAO"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q12-006",
          "bank-Q05-013",
          "bank-Q05-031"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S06 · MyBatis：Mapper XML Files",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 208,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-050",
      "number": "Q05-050",
      "question": "DTO、VO、实体类分别是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 实体类： 通常对应业务持久化结构或数据库记录。\n\n2. DTO： 在接口或层之间传输数据，明确输入输出边界。\n\n3. VO： 常指面向页面或响应的展示对象；具体命名以团队约定为准。\n\n4. 新增用户 DTO 只接收允许修改的字段，返回 VO 不携带密码等内部字段。\n\n5. 不应直接把数据库实体当成用户可任意赋值的请求参数。",
      "sourceIds": [],
      "keywords": [
        "Q05-050",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "DTO",
        "VO"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q12-006",
          "bank-Q05-023"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 209,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-052",
      "number": "Q05-052",
      "question": "什么是本地事务？为什么转账要放在同一个事务里？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 本地事务把同一个资源上的一组操作作为整体提交或回滚。\n\n2. 转账步骤： A 账户扣钱，B 账户加钱。\n\n3. 不在同一事务： 可能扣钱成功、加钱失败，留下不一致。\n\n4. 在正确事务中： 失败按规则回滚，避免只完成一半。\n\n5. 同时涉及不同数据库或远程接口时，单个本地事务不自动覆盖所有副作用。",
      "sourceIds": [],
      "keywords": [
        "Q05-052",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-013",
          "bank-Q05-013"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 210,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-053",
      "number": "Q05-053",
      "question": "事务传播行为是什么？和隔离级别有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 传播行为： 一个事务方法调用另一个方法时，如何使用已有事务或创建新事务。\n\n2. 隔离级别： 多个并发事务之间，能看到彼此哪些修改。\n\n3. 常见默认： Spring 传播是 REQUIRED；隔离通常沿用数据库默认值。\n\n4. 传播看“方法调用时怎么用事务”，隔离看“并发事务之间怎么看数据”。",
      "sourceIds": [],
      "keywords": [
        "Q05-053",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-016",
          "bank-Q05-019",
          "bank-Q06-014"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S04 · Spring：Transaction Propagation",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D01 · MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 211,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-054",
      "number": "Q05-054",
      "question": "MyBatis 是什么？它和 JDBC 有什么关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. JDBC： Java 访问关系数据库的标准接口体系。\n\n2. MyBatis： 在 JDBC 等能力之上组织 SQL、参数绑定和结果映射的持久层框架。\n\n3. 省掉的工作： 减少重复的会话、参数和结果处理代码。\n\n4. 仍要负责： 开发者通常仍需编写或控制 SQL，并处理索引、事务和业务规则。\n\n5. 使用框架不等于可以忽略数据库执行行为。",
      "sourceIds": [
        "REV20-MAPPER"
      ],
      "keywords": [
        "Q05-054",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "MyBatis",
        "JDBC"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-031",
          "bank-Q05-034"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MyBatis：Mapper XML",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 212,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-055",
      "number": "Q05-055",
      "question": "Spring Boot 的 Starter 是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Starter 是便捷的依赖入口，用来聚合同一类功能所需的依赖。\n\n2. 用途： 引入一个 Starter，减少手工逐个配依赖。\n\n3. 与自动配置： Starter 带来依赖，自动配置根据条件装配组件，两者不是同一概念。\n\n4. Web 场景使用相应 Web Starter 搭建 Web 应用。\n\n5. 并非引入 Starter 后，所有功能都不需要配置。",
      "sourceIds": [],
      "keywords": [
        "Q05-055",
        "Spring / Spring Boot",
        "基础补充",
        "基础起步",
        "Spring",
        "Boot",
        "Starter"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-025",
          "bank-Q05-027"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "S05 · Spring Boot：Creating Your Own Auto-configuration",
          "url": "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 213,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-LX037",
      "number": "LX037",
      "question": "声明式事务和编程式事务有什么区别？什么时候用 TransactionTemplate？",
      "answer": "1. 声明式事务是用 @Transactional 告诉框架事务放在哪，编程式事务是用 TransactionTemplate 等在代码里明确圈出范围。\n\n2. 前者适合清楚的方法边界，后者适合只让一小段代码进事务。\n\n3. 两者都要正确选择事务管理器、处理异常，也都不能自动包住任意远程调用。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见对比",
      "sourceIds": [
        "R015"
      ],
      "keywords": [
        "LX037",
        "Spring / Spring Boot",
        "XTransfer",
        "R015",
        "TransactionTemplate"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-LX037",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 214,
      "originalQuestion": "声明式事务和编程式事务有什么区别？什么时候用 TransactionTemplate？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-003",
      "number": "Q05-003",
      "question": "BeanFactory、ApplicationContext、FactoryBean 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. BeanFactory 是基础 Bean 工厂，负责获取和管理 Bean。\n\n2. ApplicationContext 在此基础上增加事件、资源、国际化等应用能力。\n\n3. 平时 Spring Boot 用的是更完整的 ApplicationContext。\n\n4. 注意 FactoryBean 是“制造其他对象的 Bean”，不是 BeanFactory。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q05-003",
        "Spring / Spring Boot",
        "腾讯",
        "BeanFactory",
        "ApplicationContext",
        "FactoryBean"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 215,
      "originalQuestion": "BeanFactory、ApplicationContext、FactoryBean 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-005",
      "number": "Q05-005",
      "question": "为什么通常优先构造器注入？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 构造器注入能明确一个类必须依赖什么，方便使用 final 字段，也容易单元测试。\n\n2. 字段注入虽然少写几行，但依赖被隐藏，脱离容器时不方便构造。\n\n3. 依赖太多时，还要考虑是不是这个类负责的事情太多。\n\n4. new OrderService(fakeMapper) 就能测试业务，不必为了注入一个字段启动整个 Spring。",
      "sourceIds": [],
      "keywords": [
        "Q05-005",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S01 · Spring：Dependency Injection",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 216,
      "originalQuestion": "为什么通常优先构造器注入？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-006",
      "number": "Q05-006",
      "question": "@Autowired、@Resource、@Qualifier、@Primary 怎么区分？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. @Autowired 主要按类型解析并注入依赖。\n\n2. @Qualifier 在多个候选中进一步指定要注入哪一个，例如 `@Qualifier(\"wechatPayService\")`。\n\n3. @Primary 在多个候选中设置默认优先项。\n\n4. @Resource 通常先按名称匹配，再按相应规则处理类型；多实现时应明确选择，相关注解包要匹配项目版本。",
      "sourceIds": [
        "N054"
      ],
      "keywords": [
        "Q05-006",
        "Spring / Spring Boot",
        "货拉拉",
        "@Autowired",
        "@Resource",
        "@Qualifier",
        "@Primary"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 217,
      "originalQuestion": "@Autowired、@Resource、@Qualifier、@Primary 怎么区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-008",
      "number": "Q05-008",
      "question": "Bean 生命周期如何回答？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Bean 的主要生命周期是实例化、注入依赖、初始化、使用、销毁。\n\n2. 实例化先创建对象，再填充依赖，因此构造器中不能使用尚未完成字段注入的依赖。\n\n3. 初始化时执行 @PostConstruct 等回调，相关后置处理器参与处理，AOP 代理也可能在这些阶段产生。\n\n4. 容器关闭时执行相应销毁回调；prototype Bean 的完整销毁通常不由容器统一管理。",
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
        "阿里",
        "Bean"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 218,
      "originalQuestion": "Bean 生命周期如何回答？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-010",
      "number": "Q05-010",
      "question": "循环依赖怎样形成？三级缓存能解决哪些情况？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. A 依赖 B，B 又依赖 A，就形成循环依赖。\n\n2. 一级缓存保存完整单例，二级缓存保存早期引用，三级缓存保存获取早期引用的工厂。\n\n3. 部分单例属性注入循环可以通过提前暴露引用解决；三级缓存还能配合代理，协调早期引用与最终对象。\n\n4. 构造器循环、prototype 循环不能照搬这套机制。更合适的处理是拆分职责，消除不合理的依赖关系。",
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S01 · Spring：Dependency Injection",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 219,
      "originalQuestion": "循环依赖怎样形成？三级缓存能解决哪些情况？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-012",
      "number": "Q05-012",
      "question": "Spring AOP 代理有哪些限制？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Spring AOP 的关键限制是“调用必须经过代理”。\n\n2. 同一个对象内部 this 调另一个方法，通常绕过代理。\n\n3. 类代理还不能通过重写增强 final/private 方法。\n\n4. 需要让内部调用生效时，优先拆到另一个 Bean，再从代理调用。",
      "sourceIds": [
        "NI022"
      ],
      "keywords": [
        "Q05-012",
        "Spring / Spring Boot",
        "得物",
        "Spring",
        "AOP"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S02 · Spring：Proxying Mechanisms",
          "url": "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 220,
      "originalQuestion": "Spring AOP 代理有哪些限制？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-013",
      "number": "Q05-013",
      "question": "@Transactional 是怎样实现的？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 常见实现：AOP 代理 + 事务拦截器 + 事务管理器。\n\n2. 调用进入代理： 读取 `@Transactional` 的事务配置。\n\n3. 执行前： 开启新事务，或按传播规则加入现有事务。\n\n4. 执行后： 正常完成则提交；异常按回滚规则处理。\n\n5. 最后： 清理事务资源。\n\n6. 一个本地数据库事务不会自动撤销远程接口、Redis 修改或已经发出的短信。",
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
        "京东",
        "@Transactional"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\n@Service\nclass OrderService {\n    private final OrderMapper mapper;\n    OrderService(OrderMapper mapper) { this.mapper = mapper; }\n\n    @Transactional(rollbackFor = Exception.class)\n    public void createOrder(CreateOrderCommand cmd) {\n        // request_id上有数据库唯一约束；重复冲突由外层按已有状态返回结果。\n        mapper.insertOrder(cmd);\n        int changed = mapper.decreaseStockIfEnough(cmd.productId(), cmd.quantity());\n        if (changed != 1) throw new IllegalStateException(\"库存不足\");\n        mapper.insertOutbox(cmd); // 与订单在同库、同事务中写入\n    }\n}\n```\n\n这是**结构示例**，`OrderMapper`、命令对象和数据源需由项目实现；`cmd.productId()` 等用访问器表达，不限定必须采用record。还要校验数量为正、租户/产品归属和同一幂等键的参数摘要。只有外部通过代理调用，且Mapper确实参与同一事务，上述边界才成立。\n\n重复请求不能在同一个已被标记失败的事务里随意继续提交。可靠投递器与消费者也必须另做确认、重试和幂等。",
      "references": [
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 221,
      "originalQuestion": "@Transactional 是怎样实现的？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-016",
      "number": "Q05-016",
      "question": "七种事务传播行为是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. REQUIRED：有事务就加入，没有就新建，是默认传播行为。\n\n2. REQUIRES_NEW：挂起已有事务，独立开启新事务。\n\n3. SUPPORTS：有事务就加入，没有就不使用事务。\n\n4. NOT_SUPPORTED：挂起已有事务，以非事务方式执行。\n\n5. MANDATORY：必须已有事务，否则报错；NEVER：必须没有事务，否则报错。\n\n6. NESTED：有事务时通常通过保存点形成嵌套范围，没有则新建；是否支持取决于事务管理器和资源。",
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S04 · Spring：Transaction Propagation",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 222,
      "originalQuestion": "七种事务传播行为是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-019",
      "number": "Q05-019",
      "question": "事务隔离级别和 readOnly 应怎么理解？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 隔离级别主要由数据库执行，Spring 在创建事务时传递相应设置。\n\n2. 加入旧事务时不能想当然地重新指定一套。\n\n3. readOnly 主要是提示或优化配置，不是可靠的写权限控制。\n\n4. 跨线程也不会自动继承 JDBC 事务。",
      "sourceIds": [],
      "keywords": [
        "Q05-019",
        "Spring / Spring Boot",
        "readOnly"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S03 · Spring：Using @Transactional",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 223,
      "originalQuestion": "事务隔离级别和 readOnly 应怎么理解？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-021",
      "number": "Q05-021",
      "question": "Spring MVC 一次请求经过哪些组件？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 请求先经过 Filter，再进入前端控制器 DispatcherServlet。\n\n2. HandlerMapping 找到对应的处理方法，HandlerAdapter 完成适配调用，期间进行参数解析和校验。\n\n3. Controller 处理请求并返回结果。REST 接口通常由消息转换器把返回对象转换成 JSON 等响应内容。\n\n4. 发生异常时，由异常解析器、ControllerAdvice 等处理并返回响应；拦截器位于 MVC 处理链内。",
      "sourceIds": [],
      "keywords": [
        "Q05-021",
        "Spring / Spring Boot",
        "Spring",
        "MVC"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 224,
      "originalQuestion": "Spring MVC 一次请求经过哪些组件？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-022",
      "number": "Q05-022",
      "question": "Filter、Interceptor、AOP 各适合什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. Filter 在 Servlet 层，适合通用 HTTP 处理。\n\n2. Interceptor 在 Spring MVC 里，能知道将执行哪个 handler。\n\n3. AOP 围绕代理方法工作，适合业务层公共逻辑。\n\n4. 三者拦截位置不同，不是换个名字做同一件事。\n\n5. 请求编码可放 Filter；Controller 级处理可用 Interceptor；Service 耗时统计可用 AOP。完整鉴权还需覆盖所有入口。",
      "sourceIds": [],
      "keywords": [
        "Q05-022",
        "Spring / Spring Boot",
        "Filter",
        "Interceptor",
        "AOP"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 225,
      "originalQuestion": "Filter、Interceptor、AOP 各适合什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-024",
      "number": "Q05-024",
      "question": "参数校验与统一异常处理怎么做？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 声明约束： DTO 字段上配置非空、长度等校验注解。\n\n2. 触发校验： 在适用入口使用 `@Valid` / `@Validated`；嵌套对象要级联校验。\n\n3. 统一处理： `@RestControllerAdvice` + `@ExceptionHandler` 转换异常响应。\n\n4. 记录现场： 返回稳定错误码和提示，后端记录堆栈与 traceId。\n\n5. 不直接暴露异常堆栈；业务失败与系统错误应区分，不能全部伪装成成功。",
      "sourceIds": [],
      "keywords": [
        "Q05-024",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 226,
      "originalQuestion": "参数校验与统一异常处理怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-025",
      "number": "Q05-025",
      "question": "Spring Boot 自动配置原理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 自动配置是“条件满足时，提供默认组件”，不是无条件创建所有 Bean。\n\n2. 发现候选： 从约定的自动配置元数据中找到配置类。\n\n3. 判断条件： 检查类路径、配置属性、已有 Bean 等。\n\n4. 注册组件： 满足条件才装配所需 Bean。\n\n5. 允许覆盖： 例如 `@ConditionalOnMissingBean` 在用户已有 Bean 时让位。\n\n6. 新旧 Boot 的自动配置注册文件不同，回答时按项目版本说明。",
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
        "货拉拉",
        "Spring",
        "Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q05-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S05 · Spring Boot：Creating Your Own Auto-configuration",
          "url": "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 227,
      "originalQuestion": "Spring Boot 自动配置原理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-030",
      "number": "Q05-030",
      "question": "@Async、@Scheduled 的常见坑？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. @Async 通常通过代理交给执行器，所以自调用可能无效，异常和上下文要另外处理。\n\n2. @Scheduled 在多实例部署时，可能每个实例都执行。\n\n3. 定时任务要考虑重复、超时和幂等，单机 synchronized 不能锁住整个集群。",
      "sourceIds": [],
      "keywords": [
        "Q05-030",
        "Spring / Spring Boot",
        "@Async",
        "@Scheduled"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-030",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 228,
      "originalQuestion": "@Async、@Scheduled 的常见坑？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-032",
      "number": "Q05-032",
      "question": "MyBatis 一级、二级缓存是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "1. 一级缓存通常属于 SqlSession，二级缓存通常按 Mapper namespace 共享，需要相应配置。\n\n2. 更新、提交和会话生命周期会影响缓存行为。\n\n3. 缓存不能脱离 Spring 的会话管理来理解，也不能直接当成跨服务 Redis 的替代品。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q05-032",
        "Spring / Spring Boot",
        "腾讯",
        "MyBatis"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S06 · MyBatis：Mapper XML Files",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 229,
      "originalQuestion": "MyBatis 一级、二级缓存是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-033",
      "number": "Q05-033",
      "question": "MyBatis 插件能做什么？分页和 N+1 查询怎样优化？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. N+1 是先查一次列表，再对每条记录各查一次关联数据，N 条就多 N 次 SQL。\n\n2. 可改成批量查、合理 join 或批量映射。\n\n3. 分页要让数据库只取需要的一页，不能先查全量，再在 Java 内存截取。\n\n4. 查 100 个订单后逐个查客户，会执行约 101 次 SQL；先收集客户 ID，一次批量查，再组装结果，通常能明显减少往返。",
      "sourceIds": [],
      "keywords": [
        "Q05-033",
        "Spring / Spring Boot",
        "MyBatis",
        "N"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-033",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "S06 · MyBatis：Mapper XML Files",
          "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 230,
      "originalQuestion": "MyBatis 插件能做什么？分页和 N+1 查询怎样优化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-034",
      "number": "Q05-034",
      "question": "连接池解决什么？为什么连接池满了不能只加容量？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 连接池复用数据库连接，也限制同时打到数据库的请求数。\n\n2. 池满可能因为慢 SQL、长事务、连接没归还或流量过大。\n\n3. 先看连接被谁占着，再决定是否扩容，盲目加连接可能让数据库更慢。\n\n4. 获取连接超时是“还没轮到你”；SQL 执行超时是“拿到连接后办事太慢”，排查方向不同。",
      "sourceIds": [],
      "keywords": [
        "Q05-034",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-034",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 231,
      "originalQuestion": "连接池解决什么？为什么连接池满了不能只加容量？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-036",
      "number": "Q05-036",
      "question": "Maven 依赖冲突怎么定位和处理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先用 mvn dependency:tree 找出冲突依赖从哪里引入，再用 dependencyManagement/BOM 统一版本，必要时排除多余传递依赖。\n\n2. 要保证编译和运行时版本一致，不要随机换成最新版试运气。\n\n3. NoSuchMethodError 常见于编译时有这个方法，运行时实际加载的旧 jar 却没有它。",
      "sourceIds": [
        "X08"
      ],
      "keywords": [
        "Q05-036",
        "Spring / Spring Boot",
        "美团",
        "Maven"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-036",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S10 · Maven：Dependency Mechanism",
          "url": "https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 232,
      "originalQuestion": "Maven 依赖冲突怎么定位和处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-041",
      "number": "Q05-041",
      "question": "带事务的方法调用普通方法，普通方法的数据库操作有事务吗？",
      "answer": "1. 通常有：外层已经通过代理开启事务，普通方法在同线程、同受管资源上操作数据库，就会参与已有事务。\n\n2. 自调用的限制是“内层注解不会重新被代理处理”，不是“进入普通方法后原事务消失”。\n\n3. 外层有事务时调用普通 mapper 操作能回滚；外层没事务，却用 this 调带 @Transactional 的方法，通常不会因此新开事务。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q05-041",
        "Spring / Spring Boot",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-041",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "官方文档",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 233,
      "originalQuestion": "带事务的方法调用普通方法，普通方法的数据库操作有事务吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-042",
      "number": "Q05-042",
      "question": "异步线程能开启新事务吗？为什么主线程回滚后异步数据还在？",
      "answer": "1. 异步线程能开自己的事务，但不会自动继承主线程的 JDBC 事务。\n\n2. 它通过事务代理或 TransactionTemplate 开启并提交后，主线程再回滚也不会把它撤销。\n\n3. 跨线程一致性需要事件、状态或补偿，不能靠复制 ThreadLocal 共享连接。",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q05-042",
        "Spring / Spring Boot",
        "BIGO"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q05-042",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "官方文档",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-decl-explained.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 234,
      "originalQuestion": "异步线程能开启新事务吗？为什么主线程回滚后异步数据还在？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-051",
      "number": "Q05-051",
      "question": "什么是依赖注入？常见的注入方式有哪些？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 依赖注入：由容器把一个对象所需的依赖传给它，而不是在内部写死实现。\n\n2. 构造器注入： 必需依赖在创建对象时传入，便于 final 字段和测试。\n\n3. Setter / 方法注入： 通过方法设置依赖。\n\n4. 字段注入： 直接向字段注入，写法短，但隐藏依赖、独立测试不便。\n\n5. 通常优先： 必需依赖使用构造器注入。",
      "sourceIds": [],
      "keywords": [
        "Q05-051",
        "Spring / Spring Boot",
        "基础补充"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-002",
          "bank-Q05-005"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "S01 · Spring：Dependency Injection",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 235,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q05-009",
      "number": "Q05-009",
      "question": "BeanPostProcessor 与 BeanFactoryPostProcessor 有何区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. BeanFactoryPostProcessor 主要在普通 Bean 实例化之前修改 Bean 定义等元信息。\n\n2. BeanPostProcessor 处理已经创建的 Bean，围绕初始化前后执行处理，也可以返回代理或包装对象。\n\n3. 前者处理定义，后者处理实例；给 Service 创建 AOP 代理属于实例后处理相关扩展。",
      "sourceIds": [],
      "keywords": [
        "Q05-009",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "BeanPostProcessor 与 BeanFactoryPostProcessor 有何区别？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 236
    },
    {
      "id": "bank-Q05-017",
      "number": "Q05-017",
      "question": "REQUIRES_NEW 与 NESTED 有什么差别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. REQUIRES_NEW 挂起外层事务，开启独立物理事务；内层提交后，外层回滚不会自动撤销它。\n\n2. NESTED 通常仍使用同一个物理事务，通过保存点实现局部回滚；外层整体回滚时，内层结果也会撤销。\n\n3. REQUIRES_NEW 可能需要额外数据库连接；NESTED 的支持取决于事务管理器和资源。",
      "sourceIds": [],
      "keywords": [
        "Q05-017",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "REQUIRES_NEW 与 NESTED 有什么差别？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S04 · Spring：Transaction Propagation",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 237
    },
    {
      "id": "bank-Q05-018",
      "number": "Q05-018",
      "question": "外层已经 catch 住异常，为什么还会出现 UnexpectedRollbackException？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 外层和内层使用 REQUIRED 时，可能共享同一事务。\n\n2. 内层失败后把事务标记为 rollback-only，表示这笔事务只能回滚。\n\n3. 外层即使 catch 住异常，提交时仍可能抛 UnexpectedRollbackException，因为 catch 不会清除回滚标记。\n\n4. 需要重新设计事务边界，不能只增加 catch；要求独立提交的操作，应按业务评估独立事务或可靠事件。",
      "sourceIds": [],
      "keywords": [
        "Q05-018",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "外层已经 catch 住异常，为什么还会出现 UnexpectedRollbackException？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S04 · Spring：Transaction Propagation",
          "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 238
    },
    {
      "id": "bank-Q05-020",
      "number": "Q05-020",
      "question": "事务提交后发消息该怎么设计？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 数据库提交和发送消息是两个操作，直接先后执行都会留下失败窗口。\n\n2. Outbox 方案是在同一数据库事务中写业务数据和待发事件，再由后台投递消息、确认并重试。\n\n3. 这样进程重启后仍可根据事件表补发；可能重复投递，因此消费者还要保证幂等。\n\n4. 普通提交后监听可以避免提前发送，但没有天然持久化保障，不能自动保证宕机后消息不丢。",
      "sourceIds": [
        "NI024"
      ],
      "keywords": [
        "Q05-020",
        "Spring / Spring Boot",
        "即时设计"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "事务提交后发消息该怎么设计？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 239
    },
    {
      "id": "bank-Q05-027",
      "number": "Q05-027",
      "question": "自定义 Starter 怎么设计？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Starter 的目标是让别人“引依赖、写少量配置就能用”。通常先定义配置属性和自动配置，再按条件注册默认 Bean，通过对应版本的元数据文件声明自动配置。必须允许用户覆盖默认值，并测试开关和依赖缺失场景。",
      "sourceIds": [
        "N001"
      ],
      "keywords": [
        "Q05-027",
        "Spring / Spring Boot",
        "阿里"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "自定义 Starter 怎么设计？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S05 · Spring Boot：Creating Your Own Auto-configuration",
          "url": "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 240
    },
    {
      "id": "bank-Q05-028",
      "number": "Q05-028",
      "question": "Boot 启动流程怎么概括？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Boot 启动先准备环境和配置，再创建、刷新 ApplicationContext，完成 Bean 装配和初始化。\n\n2. Web 应用同时按生命周期启动内嵌服务器，之后执行 Runner 等回调。\n\n3. 配置→容器→Bean→服务就绪。",
      "sourceIds": [
        "NI017"
      ],
      "keywords": [
        "Q05-028",
        "Spring / Spring Boot",
        "深轻科技"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "Boot 启动流程怎么概括？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 241
    },
    {
      "id": "bank-Q05-029",
      "number": "Q05-029",
      "question": "配置改了为什么没生效？如何检查覆盖顺序、绑定和刷新？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 配置是否生效，要看应用最终读到哪个值，不只看仓库里的 yaml。结构化配置用 ConfigurationProperties 绑定并校验。修改文件不等于已创建的连接池或 Bean 自动更新，热更新需要组件支持和明确刷新策略。",
      "sourceIds": [],
      "keywords": [
        "Q05-029",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "配置改了为什么没生效？如何检查覆盖顺序、绑定和刷新？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 242
    },
    {
      "id": "bank-Q05-035",
      "number": "Q05-035",
      "question": "Spring Boot 2 与 3 迁移重点是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Boot 3 迁移重点是 Java 17 基线、Spring Framework 6，以及相关 Java EE API 从 javax 迁到 jakarta。\n\n2. 还要检查第三方依赖、自动配置注册和废弃接口。\n\n3. 不是全局替换包名就完成，必须跑业务和集成测试。",
      "sourceIds": [],
      "keywords": [
        "Q05-035",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "Spring Boot 2 与 3 迁移重点是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-035",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S07 · Spring Boot 3.0 Getting Started",
          "url": "https://docs.spring.io/spring-boot/docs/3.0.0/reference/html/getting-started.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 243
    },
    {
      "id": "bank-Q05-037",
      "number": "Q05-037",
      "question": "Spring Cache 注解与 Redis 是什么关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Spring Cache 是统一的缓存接口和注解机制，Redis 只是可能的底层实现。\n\n2. @Cacheable 通常先查缓存，@CachePut 执行方法后更新，@CacheEvict 删除缓存。\n\n3. 它不会自动解决数据库一致性，key 也必须带上必要的租户和参数维度。",
      "sourceIds": [],
      "keywords": [
        "Q05-037",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "Spring Cache 注解与 Redis 是什么关系？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-037",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S08 · Spring：Annotation-based Caching",
          "url": "https://docs.spring.io/spring-framework/reference/integration/cache/annotations.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 244
    },
    {
      "id": "bank-Q05-038",
      "number": "Q05-038",
      "question": "Spring 事件是同步还是异步？可靠性怎样？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Spring 的普通事件监听通常在发布线程同步执行；要异步，需要显式配置。进程内事件不等于可靠 MQ：没有天然持久化、宕机补发和跨实例交付。需要可靠业务联动时，还要 Outbox、消息系统或其他补偿机制。",
      "sourceIds": [],
      "keywords": [
        "Q05-038",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "Spring 事件是同步还是异步？可靠性怎样？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-038",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 245
    },
    {
      "id": "bank-Q05-039",
      "number": "Q05-039",
      "question": "MVC 与 WebFlux 的区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. MVC 常用请求线程和同步写法，WebFlux 强调响应式和非阻塞处理。WebFlux 的事件循环不适合直接跑阻塞 JDBC 或长计算，否则同一循环上的其他请求也会被拖慢。选型看依赖链和瓶颈，不是换框架就一定提速。",
      "sourceIds": [],
      "keywords": [
        "Q05-039",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "MVC 与 WebFlux 的区别？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 246
    },
    {
      "id": "bank-Q05-040",
      "number": "Q05-040",
      "question": "Actuator、健康检查和优雅停机怎么用？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Actuator 提供健康状态和运行指标。\n\n2. 存活检查问“进程是否需要重启”，就绪检查问“现在是否适合接流量”。\n\n3. 优雅停机先摘流量，再等已有请求完成，最后关资源。\n\n4. 管理端点还要控制暴露范围和权限。\n\n5. 例如，数据库短暂不可用时，服务可能暂时不适合接流量，但不一定该让所有实例反复重启。",
      "sourceIds": [],
      "keywords": [
        "Q05-040",
        "Spring / Spring Boot"
      ],
      "sourceFile": "05_Spring与SpringBoot.md",
      "isNew": false,
      "originalQuestion": "Actuator、健康检查和优雅停机怎么用？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q05-040",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "S09 · Spring Boot：Actuator Endpoints",
          "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 247
    },
    {
      "id": "bank-JX017",
      "number": "JX017",
      "question": "Bean 初始化前要加载远程属性，该选哪个扩展点？",
      "answer": "1. 先按需要生效的时机选扩展点：影响配置绑定和条件装配的，尽早放进 Environment。\n\n2. 改 Bean 定义用 BeanFactoryPostProcessor。\n\n3. 对象已创建后的处理再考虑 BeanPostProcessor。\n\n4. 远程配置必须有超时和失败策略，不能每个 Bean 都单独拉。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Bean 初始化前要加载远程属性，该选哪个扩展点？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方资料",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 248
    },
    {
      "id": "bank-LX019",
      "number": "LX019",
      "question": "前端看到 500，后端如何统一返回并定位？",
      "answer": "1. 前端收到 500，应该给用户可理解的失败提示，并保留可反馈的请求编号。\n\n2. 后端则记录异常栈、参数摘要和 traceId，返回统一但不泄密的错误结构。\n\n3. 先沿日志找到根因，再修复，不是把所有异常改成 HTTP 200，也不是把整个堆栈直接展示给用户。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "前端看到 500，后端如何统一返回并定位？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 249
    },
    {
      "id": "bank-LX033",
      "number": "LX033",
      "question": "OpenFeign 从接口到网络请求经历什么？",
      "answer": "1. OpenFeign 把远程 HTTP 调用包装成接口方法。\n\n2. 你调用接口时，代理读取注解，拼地址、参数和请求体，经过拦截器发请求，再把响应解码成返回对象。\n\n3. 它让写调用代码更方便，但网络超时、鉴权、服务发现和重试仍然要配置，不会变成本地调用一样可靠。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "OpenFeign 从接口到网络请求经历什么？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX033",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 250
    },
    {
      "id": "bank-UX003",
      "number": "UX003",
      "question": "@Configuration(proxyBeanMethods=false) 会让 @Bean 失效吗？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "1. 不会。proxyBeanMethods=false 不会让 @Bean 失效，方法返回的对象仍然可以注册到容器。\n\n2. 它关闭的是配置类中 Bean 方法之间的代理拦截。直接调用另一个 @Bean 方法时，可能变成普通方法调用，重新创建对象。\n\n3. 需要其他 Bean 时，优先通过 @Bean 方法的参数注入，让容器提供依赖，不直接调用另一个创建方法。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "@Configuration(proxyBeanMethods=false) 会让 @Bean 失效吗？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX003",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Spring @Configuration 与 Bean 方法",
          "url": "https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "Spring Configuration API：proxyBeanMethods",
          "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 251
    },
    {
      "id": "bank-UX018",
      "number": "UX018",
      "question": "Spring AI 的 ChatClient、ChatModel、VectorStore 各负责什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "1. ChatModel 提供统一的模型调用接口，负责与对话模型交互。\n\n2. ChatClient 在 ChatModel 之上提供更方便的请求构建和调用入口。\n\n3. VectorStore 负责向量化文档的存储、检索和管理，常用于 RAG，不是通用业务数据库的替代品。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "Spring AI 的 ChatClient、ChatModel、VectorStore 各负责什么？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Spring AI：ChatClient",
          "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "Spring AI：Vector Databases",
          "url": "https://docs.spring.io/spring-ai/reference/api/vectordbs.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 252
    },
    {
      "id": "bank-RM004",
      "number": "RM004",
      "question": "static 字段加 @Autowired 为什么不注入？怎么改？",
      "answer": "1. Spring 常规依赖注入针对受管对象；注入后处理器会跳过标注在 static 字段或静态方法上的 @Autowired。最稳妥的改法是把调用者也交给 Spring 管理，使用实例字段和构造器注入。\n\n2. 例如，不要写 static OrderService service 再等框架赋值；改成构造器接收 OrderService，然后通过这个实例调用。纯工具方法则让调用方显式传参。\n\n3. 可由受管实例的初始化方法给静态变量赋值，但会引入初始化顺序、多容器、测试污染等问题，只适合受控遗留适配，不是优先方案。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "static 字段加 @Autowired 为什么不注入？怎么改？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Spring 6.2.0 注入后处理器源码",
          "url": "https://raw.githubusercontent.com/spring-projects/spring-framework/v6.2.0/spring-beans/src/main/java/org/springframework/beans/factory/annotation/AutowiredAnnotationBeanPostProcessor.java",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 253
    },
    {
      "id": "bank-RM008",
      "number": "RM008",
      "question": "Tomcat 的 maxThreads、maxConnections、acceptCount 分别限制什么？",
      "answer": "1. 按Tomcat 10.1常规平台线程连接器理解：maxThreads限制请求处理线程，maxConnections限制连接器接收处理的连接数量，acceptCount关联操作系统等待接受的连接队列。\n\n2. 连接、排队连接、正在执行业务的请求，不是同一个数。\n\n3. 配置共享Executor后，连接器的maxThreads会被忽略；HTTP/2、异步请求和其他执行器模式要另看。acceptCount不是线程池任务队列长度，也不能直接等同SYN半连接队列。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "Tomcat 的 maxThreads、maxConnections、acceptCount 分别限制什么？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Tomcat 10.1 HTTP Connector",
          "url": "https://tomcat.apache.org/tomcat-10.1-doc/config/http.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 254
    },
    {
      "id": "bank-Q06-038",
      "number": "Q06-038",
      "question": "Oracle 和 MySQL 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 两者都是关系型数据库，但 SQL 写法、字段语义和事务默认设置存在差异。以下以 Oracle 19c 和 MySQL 8.4 的 InnoDB 为例。\n\n2. Oracle 默认隔离级别是读已提交；InnoDB 默认是可重复读，两者都可以调整。\n\n3. Oracle 常用序列生成编号，也支持 identity 列；MySQL 常用 `AUTO_INCREMENT`。\n\n4. Oracle 支持 `OFFSET ... FETCH` 分页，旧代码常见 ROWNUM；MySQL 常用 `LIMIT ... OFFSET ...`。\n\n5. Oracle 通常把空字符串当作 NULL；MySQL 区分空字符串和 NULL。迁移时还要检查函数、驱动和空值处理，不能直接照搬全部 SQL。",
      "sourceIds": [
        "REV20-ONULL",
        "REV20-OISO",
        "REV20-OSELECT",
        "REV20-OCREATE",
        "REV20-MISO",
        "REV20-MAUTO",
        "REV20-SQL"
      ],
      "keywords": [
        "Q06-038",
        "MySQL",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步",
        "Oracle"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-014",
          "bank-Q06-030",
          "bank-Q06-031"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Oracle 19c：Nulls",
          "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Nulls.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Oracle 19c：Data Concurrency and Consistency",
          "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/cncpt/data-concurrency-and-consistency.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Oracle 19c：SELECT / row_limiting_clause",
          "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/SELECT.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "Oracle 19c：CREATE TABLE / identity_clause",
          "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-TABLE.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "MySQL 8.4：AUTO_INCREMENT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/example-auto-increment.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "MySQL 8.4：SELECT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 255,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-039",
      "number": "Q06-039",
      "question": "两张表的数据需要关联查询时，你会怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 使用 JOIN 关联两张表，在 ON 后写关联条件。例如员工表的 department_id 对应部门表的 id：\n\n```sql\nSELECT e.id, e.name, d.name AS department_name\nFROM employee AS e\nINNER JOIN department AS d\n    ON e.department_id = d.id;\n```\n\n2. INNER JOIN 只返回匹配成功的记录。需要保留没有匹配部门的员工时，把 INNER JOIN 改为 LEFT JOIN。\n\n3. 一对多关联可能让一条主表记录对应多行结果；遗漏关联条件可能产生笛卡尔积。",
      "sourceIds": [
        "REV20-JOIN"
      ],
      "keywords": [
        "Q06-039",
        "MySQL",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：JOIN Clause",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 256,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-032",
      "number": "Q06-032",
      "question": "INNER JOIN、LEFT JOIN 和 RIGHT JOIN 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. INNER JOIN 是内连接，只返回两张表满足关联条件的记录。\n\n2. LEFT JOIN 是左连接，保留左表全部记录；右表没有匹配时，右表字段补 NULL。\n\n3. RIGHT JOIN 是右连接，保留右表全部记录；左表没有匹配时，左表字段补 NULL。\n\n4. 左右按 SQL 中表的位置区分。LEFT JOIN 后若在 WHERE 中过滤右表字段，可能把补 NULL 的记录过滤掉。",
      "sourceIds": [
        "NI018",
        "REV20-JOIN"
      ],
      "keywords": [
        "Q06-032",
        "MySQL",
        "实在智能",
        "本次面试",
        "面试复盘",
        "基础起步",
        "INNER",
        "JOIN",
        "LEFT",
        "RIGHT"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MySQL 8.4：JOIN Clause",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 257,
      "originalQuestion": "JOIN 的类型与常见错误？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-040",
      "number": "Q06-040",
      "question": "主表数据必须全部展示，即使从表没有匹配，也要展示，使用什么连接？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 使用 LEFT JOIN，把需要全部展示的主表放在左边。没有匹配的从表记录时，从表字段显示为 NULL。\n\n2. 例如查询所有用户及其已支付订单：\n\n```sql\nSELECT u.id, u.name, o.id AS order_id\nFROM users AS u\nLEFT JOIN orders AS o\n    ON o.user_id = u.id\n   AND o.status = 'PAID';\n```\n\n3. 从表的支付状态条件放在 ON 中，才能保留没有已支付订单的用户；放在 WHERE 中可能把这些用户过滤掉。\n\n4. 一名用户有多个匹配订单时会返回多行，左连接不保证每个用户只出现一次。",
      "sourceIds": [
        "REV20-JOIN"
      ],
      "keywords": [
        "Q06-040",
        "MySQL",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：JOIN Clause",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 258,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-009",
      "number": "Q06-009",
      "question": "哪些情况会导致数据库索引失效？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. 对普通索引列使用函数或计算，例如 `YEAR(created_at)=2026`，可能无法直接利用原索引定位。\n\n2. 发生不合适的隐式类型转换，例如字符串索引列与数字比较，可能需要转换列值。\n\n3. LIKE 以通配符开头，例如 `LIKE '%abc'`，通常不能利用普通 B+ 树索引做前缀范围定位。\n\n4. 联合索引跳过最左列，例如索引 `(a,b)` 只按 b 查询，常规定位能力受影响。\n\n5. OR 的某个分支缺少可用索引，或匹配数据太多、回表成本太高，优化器可能选择全表扫描。\n\n6. 最终用 EXPLAIN 确认。`!=`、`IS NULL`、OR 不是必然失效，函数索引等也可能支持表达式查询。",
      "sourceIds": [
        "N005",
        "N035",
        "N055",
        "NI003",
        "NI010",
        "NI024",
        "REV20-RANGE",
        "REV20-CONVERT"
      ],
      "keywords": [
        "Q06-009",
        "MySQL",
        "美团",
        "快手",
        "网易",
        "招银网络科技",
        "拼多多",
        "即时设计",
        "本次面试",
        "面试复盘",
        "基础起步"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MySQL 8.4：Range Optimization",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/range-optimization.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "MySQL 8.4：Type Conversion",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/type-conversion.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 259,
      "originalQuestion": "哪些写法容易妨碍索引使用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-LX018",
      "number": "LX018",
      "question": "WHERE、GROUP BY、HAVING 和聚合函数怎么配合？",
      "answer": "1. 顺序记忆：先筛行 → 再分组 → 后筛组。\n\n2. WHERE： 过滤分组前的记录。\n\n3. GROUP BY： 按指定字段形成分组。\n\n4. HAVING： 根据聚合结果等条件过滤分组。\n\n```sql\nSELECT department_id, COUNT(*) AS employee_count\nFROM employee\nWHERE active = 1\nGROUP BY department_id\nHAVING COUNT(*) > 5;\n```\n\n5. 查询在职人数大于 5 的部门。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "R002"
      ],
      "keywords": [
        "LX018",
        "MySQL",
        "金证股份",
        "R002",
        "基础起步",
        "WHERE",
        "GROUP",
        "BY",
        "HAVING"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-LX018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 260,
      "originalQuestion": "WHERE、GROUP BY、HAVING 和聚合函数怎么配合？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-003",
      "number": "Q06-003",
      "question": "索引是什么？什么时候反而不划算？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 索引是帮助数据库更快定位数据的检索结构，可以类比书的目录。\n\n2. 减少扫描；合适时还能帮助排序和覆盖读取。\n\n3. 占空间；插入、删除和修改相关字段时要维护。\n\n4. 设计： 根据查询条件、连接、排序和数据分布选择。\n\n5. 不是越多越好： 返回大部分记录时，全表扫描可能更划算。",
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
        "滴滴",
        "基础起步"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 261,
      "originalQuestion": "索引是什么？什么时候反而不划算？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-013",
      "number": "Q06-013",
      "question": "事务 ACID 分别是什么意思？数据库和业务各负责什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 原子性：事务中的操作要么整体成功，要么失败后撤销，例如转账的扣款和加款一起完成。\n\n2. 一致性：事务前后满足数据库约束和业务规则，例如转账不能让总金额凭空变化。\n\n3. 隔离性：并发事务按照隔离级别互相隔离，控制能看到哪些数据。\n\n4. 持久性：事务提交后，结果获得相应的持久化保障。\n\n5. 数据库提供机制，业务仍要正确编写；漏写加款操作，不会被数据库自动补上。",
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
        "滴滴",
        "基础起步",
        "ACID"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 262,
      "originalQuestion": "事务 ACID 分别是什么意思？数据库和业务各负责什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-014",
      "number": "Q06-014",
      "question": "脏读、不可重复读、幻读有什么区别？四种隔离级别如何对应？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 脏读是读到其他事务尚未提交的数据；不可重复读是同一记录前后读到不同值；幻读是同一查询条件的结果集合发生变化。\n\n2. 读未提交可能发生脏读；读已提交避免脏读；可重复读加强同一事务重复读取的一致性；串行化提供更强的串行化约束。\n\n3. InnoDB 默认使用可重复读，也可以配置其他级别。\n\n4. InnoDB 的 RR 要区分快照读和锁定读：普通快照读通常复用快照，合适的范围锁定读通过临键锁等限制插入。",
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
        "招银网络科技",
        "基础起步"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D01 · MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 263,
      "originalQuestion": "脏读、不可重复读、幻读有什么区别？四种隔离级别如何对应？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-029",
      "number": "Q06-029",
      "question": "count(*)、count(1)、count(列) 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. COUNT(*) 统计结果行数，即使某列为 NULL，这一行也会计数。\n\n2. COUNT(1) 也是对每行计数，通常与 COUNT(*) 同义。\n\n3. COUNT(列) 只统计该列非 NULL 的行。例如三行值为 1、NULL、2，COUNT(*) 是 3，COUNT(列) 是 2。\n\n4. COUNT(1) 不一定比 COUNT(*) 快，性能要看实际执行计划；只判断是否存在时，不必统计全部行。",
      "sourceIds": [],
      "keywords": [
        "Q06-029",
        "MySQL",
        "基础起步",
        "count"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-029",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 264,
      "originalQuestion": "count(*)、count(1)、count(列) 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-041",
      "number": "Q06-041",
      "question": "什么是关系型数据库？表、行、列分别是什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 关系型数据库： 以关系模型组织数据，业务中通常表现为相互关联的表。\n\n2. 表： 保存某一类记录，如员工表。\n\n3. 行： 一条具体记录，如某个员工。\n\n4. 列： 一个属性，如姓名、部门 ID。\n\n5. 员工表用 department_id 与部门表的 id 建立关联，再通过 JOIN 查询。",
      "sourceIds": [
        "REV20-PK"
      ],
      "keywords": [
        "Q06-041",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-030",
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：CREATE TABLE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 265,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-042",
      "number": "Q06-042",
      "question": "主键、唯一键、外键有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 主键唯一标识一行，不能为 NULL；一张表最多一组主键，可以包含多列。\n\n2. 唯一键约束某列或一组列不能出现重复键值；NULL 的处理要看数据库规则。\n\n3. 外键约束表之间的引用关系，避免引用不存在的关联记录。\n\n4. 例如员工 id 是主键，员工编号可设唯一键，department_id 可作为部门外键。写 JOIN 并不要求一定声明外键。",
      "sourceIds": [
        "REV20-PK"
      ],
      "keywords": [
        "Q06-042",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-030",
          "bank-Q06-031",
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：CREATE TABLE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 266,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-043",
      "number": "Q06-043",
      "question": "SQL 的增删改查分别怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "```sql\n-- 查\nSELECT id, name FROM users WHERE id = 1;\n-- 增\nINSERT INTO users (id, name) VALUES (1, '张三');\n-- 改\nUPDATE users SET name = '李四' WHERE id = 1;\n-- 删\nDELETE FROM users WHERE id = 1;\n```\n\n1. SELECT 查，INSERT 增，UPDATE 改，DELETE 删。\n\n2. 这些是语法示例，不要照抄到生产；UPDATE / DELETE 先确认 WHERE 和影响范围，应用传值用绑定参数。",
      "sourceIds": [
        "REV20-SQL"
      ],
      "keywords": [
        "Q06-043",
        "MySQL",
        "基础补充",
        "基础起步",
        "SQL"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-001",
          "bank-Q06-021",
          "bank-UX005"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4 TRUNCATE TABLE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：隐式提交语句",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：DELETE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/delete.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：SELECT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 267,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-044",
      "number": "Q06-044",
      "question": "WHERE 和 HAVING 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. WHERE： 对输入行进行过滤，逻辑上在分组前。\n\n2. HAVING： 对分组结果进行过滤，可使用聚合条件。\n\n```sql\nSELECT department_id, COUNT(*) AS total\nFROM employee\nWHERE active = 1\nGROUP BY department_id\nHAVING COUNT(*) >= 3;\n```\n\n3. 从在职员工中，找出人数至少 3 的部门。",
      "sourceIds": [],
      "keywords": [
        "Q06-044",
        "MySQL",
        "基础补充",
        "基础起步",
        "WHERE",
        "HAVING"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-LX018",
          "bank-Q06-036"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 268,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-045",
      "number": "Q06-045",
      "question": "GROUP BY 和 ORDER BY 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. GROUP BY： 把数据分组，通常配合 COUNT、SUM、AVG 等聚合函数。\n\n2. ORDER BY： 给结果排序，ASC 升序、DESC 降序。\n\n3. 两者可一起用： 先得到各部门人数，再按人数排序。\n\n```sql\nSELECT department_id, COUNT(*) AS total\nFROM employee\nGROUP BY department_id\nORDER BY total DESC, department_id ASC;\n```\n\n4. GROUP BY 不应被当作自动保证输出顺序，排序需求要明确写 ORDER BY。",
      "sourceIds": [
        "REV20-SQL"
      ],
      "keywords": [
        "Q06-045",
        "MySQL",
        "基础补充",
        "基础起步",
        "GROUP",
        "BY",
        "ORDER"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-028",
          "bank-LX018"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：SELECT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 269,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-046",
      "number": "Q06-046",
      "question": "SQL 常见聚合函数有哪些？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. COUNT 用于计数，SUM 求和，AVG 求平均值，MAX 求最大值，MIN 求最小值。\n\n2. 这些函数可以配合 GROUP BY，对每组分别统计。例如 `SELECT department_id, AVG(salary) FROM employee GROUP BY department_id;`。\n\n3. COUNT(*) 统计行数，COUNT(列) 忽略 NULL；SUM、AVG、MAX、MIN 通常也忽略 NULL 值。",
      "sourceIds": [
        "REV20-SQL"
      ],
      "keywords": [
        "Q06-046",
        "MySQL",
        "基础补充",
        "基础起步",
        "SQL"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-029",
          "bank-LX018"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：SELECT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 270,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-047",
      "number": "Q06-047",
      "question": "UNION 和 UNION ALL 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. UNION 和 UNION ALL 都用于合并多个查询的结果，要求对应列数相同、类型兼容。\n\n2. UNION 会去除重复行；UNION ALL 保留重复行，不进行去重。\n\n3. 不需要去重时可用 UNION ALL，避免额外去重成本。\n\n4. UNION 是纵向合并行，JOIN 是按关联条件横向组合列，两者用途不同。",
      "sourceIds": [
        "REV20-UNION"
      ],
      "keywords": [
        "Q06-047",
        "MySQL",
        "基础补充",
        "基础起步",
        "UNION",
        "ALL"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：UNION",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/union.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 271,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-048",
      "number": "Q06-048",
      "question": "MySQL 普通索引、唯一索引、主键索引有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 普通索引主要加速查询，不限制重复值。\n\n2. 唯一索引约束键值唯一，MySQL 对 NULL 有特殊处理规则。\n\n3. 主键索引要求主键唯一且非空，InnoDB 通常用主键组织聚簇索引。\n\n4. 普通、唯一描述的是约束；联合索引描述的是包含多列，两者不是同一个分类维度。",
      "sourceIds": [
        "REV20-PK"
      ],
      "keywords": [
        "Q06-048",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-003",
          "bank-Q06-005",
          "bank-Q06-031"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "D05 · MySQL 8.4：Clustered and Secondary Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：CREATE TABLE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 272,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-049",
      "number": "Q06-049",
      "question": "什么是联合索引？什么是覆盖索引？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 联合索引： 一个索引包含多列，例如 `(user_id, created_at)`。\n\n2. 覆盖索引： 某次查询需要的字段都能由索引提供，无需再取整行。\n\n3. 区别： 联合索引看索引的组成；覆盖看索引能否满足这条查询。\n\n4. 索引含 user_id、created_at，查询只需要这些字段时，可能形成覆盖读取。\n\n5. 联合索引不代表任何查询都被覆盖。",
      "sourceIds": [],
      "keywords": [
        "Q06-049",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-006",
          "bank-Q06-007"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "D05 · MySQL 8.4：Clustered and Secondary Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D06 · MySQL 8.4：Multiple-Column Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 273,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-050",
      "number": "Q06-050",
      "question": "MySQL 分页查询怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "```sql\nSELECT id, name\nFROM users\nORDER BY id ASC\nLIMIT 10 OFFSET 20;\n```\n\n1. LIMIT 10： 最多取 10 行。\n\n2. OFFSET 20： 跳过前 20 行，即每页 10 条时查询第 3 页。\n\n3. 计算： `offset = (page - 1) × pageSize`，并校验页码与上限。\n\n4. 分页要有稳定排序；偏移量很大时可考虑游标分页。",
      "sourceIds": [
        "REV20-SQL"
      ],
      "keywords": [
        "Q06-050",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-027"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：SELECT",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 274,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-051",
      "number": "Q06-051",
      "question": "如何找出主表中没有对应从表记录的数据？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 可以用 LEFT JOIN 后检查从表的非空主键，也可以用 NOT EXISTS。\n\n```sql\nSELECT u.id, u.name\nFROM users AS u\nLEFT JOIN orders AS o ON o.user_id = u.id\nWHERE o.id IS NULL;\n```\n\n2. 找出没有任何订单的用户。\n\n3. 假设 `orders.id` 是非空主键；不能随便检查一个本来就允许 NULL 的业务字段，否则可能误判。",
      "sourceIds": [
        "REV20-JOIN"
      ],
      "keywords": [
        "Q06-051",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-031",
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：JOIN Clause",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 275,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-054",
      "number": "Q06-054",
      "question": "什么是乐观锁、悲观锁？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 悲观锁先控制并发访问再处理业务，例如在事务中使用 SELECT ... FOR UPDATE 锁定记录。\n\n2. 乐观锁在更新时检查是否发生冲突，例如 WHERE 中校验 version，更新成功后增加版本号。\n\n3. 乐观更新后必须检查影响行数；失败时按业务决定重试或返回冲突。\n\n4. 乐观锁不代表数据库底层完全不加锁，实际更新仍会使用必要的锁。",
      "sourceIds": [],
      "keywords": [
        "Q06-054",
        "MySQL",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-021"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 276,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-001",
      "number": "Q06-001",
      "question": "一条 SELECT 的执行流程？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 一条 SELECT 大致经历：连接认证→解析 SQL→优化器选执行计划→执行器调用存储引擎取数据→返回结果。\n\n2. 接口慢还可能慢在获取连接、网络传输和序列化。\n\n3. MySQL 8 已没有旧的查询缓存步骤。",
      "sourceIds": [],
      "keywords": [
        "Q06-001",
        "MySQL",
        "SELECT"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 277,
      "originalQuestion": "一条 SELECT 的执行流程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-002",
      "number": "Q06-002",
      "question": "InnoDB 与 MyISAM 的区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. InnoDB 支持事务、MVCC、行级锁和崩溃恢复，适合常见业务系统。\n\n2. MyISAM 是较老的引擎，主要用表级锁，不提供同样的事务保障。\n\n3. 讨论 MySQL 的锁和事务前，要先确认表使用什么引擎。",
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
        "招银网络科技",
        "InnoDB",
        "MyISAM"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 278,
      "originalQuestion": "InnoDB 与 MyISAM 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-004",
      "number": "Q06-004",
      "question": "InnoDB 为什么常用 B+ 树？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 树矮： 一个节点能放多个键，扇出较高，通常只需访问少量页。\n\n2. 查询稳定： 记录集中在叶子层，定位路径较稳定。\n\n3. 范围友好： 叶子按键有序连接，方便区间扫描与顺序访问。\n\n4. 对比： 二叉树层数通常更多；哈希不擅长按大小查范围。\n\n5. 查价格 100～200，定位起点后顺着叶子扫描。",
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
        "深轻科技",
        "InnoDB",
        "B"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 279,
      "originalQuestion": "InnoDB 为什么常用 B+ 树？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-005",
      "number": "Q06-005",
      "question": "聚簇索引和二级索引各存什么？什么情况下需要回表？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. InnoDB 的聚簇索引通常按主键组织，叶子节点保存整行数据。\n\n2. 二级索引的叶子节点保存索引列和主键值。\n\n3. 通过二级索引找到主键，再到聚簇索引获取其他字段，就是回表。例如按手机号索引查询用户姓名。\n\n4. 主键过长会增加二级索引的空间开销，因为二级索引也需要保存主键值。",
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
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D05 · MySQL 8.4：Clustered and Secondary Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 280,
      "originalQuestion": "聚簇索引和二级索引各存什么？什么情况下需要回表？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-006",
      "number": "Q06-006",
      "question": "覆盖索引和索引下推有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 覆盖索引是“查询要的字段，索引里已经全有了，不必再取整行”。\n\n2. 索引下推是“先在索引层筛掉不符合条件的记录，少去取整行”。\n\n3. 一个减少取整行的必要性，一个减少取整行的次数。\n\n4. Extra 中 Using index 常提示覆盖读取，Using index condition 才对应索引条件下推，不要把它们当成一回事。",
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
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D05 · MySQL 8.4：Clustered and Secondary Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 281,
      "originalQuestion": "覆盖索引和索引下推有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-007",
      "number": "Q06-007",
      "question": "联合索引为什么强调最左前缀？WHERE 条件的书写顺序重要吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 联合索引 `(a,b,c)` 先按 a 排序，相同 a 再按 b，相同 a、b 再按 c，因此强调从最左列开始匹配。\n\n2. 按 a 查询，或按 a、b 查询，可以利用相应前缀定位；按 a、c 查询时，a 能定位，但跳过 b 会影响 c 的连续定位。\n\n3. 只按 b 查询时，通常不能利用普通最左前缀高效定位，但可能采用覆盖扫描、跳跃扫描等方式访问索引。\n\n4. 重要的是索引列顺序，不是 WHERE 条件书写顺序；最终用执行计划判断。",
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
        "招银网络科技",
        "WHERE"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D06 · MySQL 8.4：Multiple-Column Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 282,
      "originalQuestion": "联合索引为什么强调最左前缀？WHERE 条件的书写顺序重要吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-008",
      "number": "Q06-008",
      "question": "联合索引遇到范围条件后，后面的列就完全没用了吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 范围条件之后的列，通常难继续缩小连续扫描范围，但仍可能用于索引内过滤或覆盖读取。\n\n2. 所以不要背“范围后面的索引全失效”，应说“连续定位能力受影响，后续列是否还能发挥作用要看计划”。\n\n3. 索引 (a,b,c)，条件 a=1 AND b>10 AND c=3：a、b 定位范围，c 仍可能先在索引里过滤。",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q06-008",
        "MySQL",
        "腾讯"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D06 · MySQL 8.4：Multiple-Column Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 283,
      "originalQuestion": "联合索引遇到范围条件后，后面的列就完全没用了吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-010",
      "number": "Q06-010",
      "question": "如何给一个查询设计联合索引？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 设计联合索引先看真实 SQL：哪些列等值过滤、哪些做范围、按什么排序、返回哪些字段。\n\n2. 再选能服务主要查询的列顺序，用实际数据和执行计划验证。\n\n3. 不是永远把区分度最高的列放第一，也不是索引越宽越好。",
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
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D06 · MySQL 8.4：Multiple-Column Indexes",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 284,
      "originalQuestion": "如何给一个查询设计联合索引？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-011",
      "number": "Q06-011",
      "question": "EXPLAIN 要看哪些字段？ANALYZE 有什么不同？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. type 表示访问方式；key 表示实际使用的索引。\n\n2. rows 表示估算扫描行数；filtered 表示估算过滤后比例。\n\n3. Extra 可以看到覆盖索引、索引条件下推、额外排序等信息。\n\n4. EXPLAIN ANALYZE 会实际执行支持的查询，提供真实行数和耗时，不是没有执行成本的静态检查。",
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
        "顺丰",
        "EXPLAIN",
        "ANALYZE"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D04 · MySQL 8.4：EXPLAIN Statement",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/explain.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 285,
      "originalQuestion": "EXPLAIN 要看哪些字段？ANALYZE 有什么不同？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-012",
      "number": "Q06-012",
      "question": "慢 SQL 排查的完整步骤？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 慢 SQL 先找到“哪条 SQL、什么参数、慢在什么时候”，再区分执行慢、锁等待还是连接等待。\n\n2. 然后看执行计划、扫描行数、索引、深分页、N+1 和排序。\n\n3. 一次改一个主要问题，在相同数据量下比较效果。",
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
        "招银网络科技",
        "SQL"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D04 · MySQL 8.4：EXPLAIN Statement",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/explain.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 286,
      "originalQuestion": "慢 SQL 排查的完整步骤？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-015",
      "number": "Q06-015",
      "question": "MVCC 的实现与 Read View 怎么理解？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. MVCC（多版本并发控制）让查询按可见性规则读取合适的历史版本。\n\n2. 版本链： InnoDB 借助 undo 等保留记录的旧版本。\n\n3. Read View： 判断某个版本对当前查询是否可见。\n\n4. RC： 通常每次一致性读创建新视图。\n\n5. RR： 通常复用首次一致性读建立的视图。\n\n6. MVCC 主要服务一致性非锁定读，不代表更新、删除也都不用锁。",
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
        "好未来",
        "MVCC",
        "Read",
        "View"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D01 · MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D03 · MySQL 8.4：InnoDB Multi-Versioning",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 287,
      "originalQuestion": "MVCC 的实现与 Read View 怎么理解？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-016",
      "number": "Q06-016",
      "question": "快照读与当前读有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 快照读按 Read View 读合适的历史版本，常见是普通 SELECT。\n\n2. 当前读要读取并约束当前记录，常见有 SELECT FOR UPDATE、UPDATE、DELETE。\n\n3. 当前读可能等锁，不能拿快照读规则去解释所有写操作。\n\n4. 事务已经 BEGIN，不代表快照必然已经建立；通常要到首次一致性读，或显式创建一致性快照时才确定。",
      "sourceIds": [],
      "keywords": [
        "Q06-016",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D01 · MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 288,
      "originalQuestion": "快照读与当前读有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-017",
      "number": "Q06-017",
      "question": "InnoDB 的 RR 怎样处理幻读？为什么要区分快照读和当前读？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. InnoDB 的 RR 要分开说：普通快照读通常复用快照，所以看不到其他事务后插入的新行。\n\n2. 合适的范围锁定读通过临键锁等阻止对应范围插入。\n\n3. 混用快照读、当前读和自身写入时，不能承诺结果集合永远不变。",
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
        "好未来",
        "InnoDB",
        "RR"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D01 · MySQL 8.4：Transaction Isolation Levels",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 289,
      "originalQuestion": "InnoDB 的 RR 怎样处理幻读？为什么要区分快照读和当前读？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-018",
      "number": "Q06-018",
      "question": "记录锁、间隙锁、临键锁和意向锁分别锁什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 记录锁锁住已有索引记录。\n\n2. 间隙锁限制两个记录之间插入。\n\n3. 临键锁是“记录+它前面的间隙”。\n\n4. 意向锁是表级标记，告诉其他操作这张表里面有人在加细粒度锁。\n\n5. 到底锁多大范围，要看索引、条件和隔离级别。\n\n6. 索引里有 10 和 20，间隙锁可以阻止在二者之间插入 15；它和锁住现有的 10 不是同一件事。",
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
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 290,
      "originalQuestion": "记录锁、间隙锁、临键锁和意向锁分别锁什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-020",
      "number": "Q06-020",
      "question": "InnoDB 死锁如何形成和处理？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 数据库死锁是事务互相等对方的锁。\n\n2. InnoDB 检测到后可能回滚一个事务让另一个继续。\n\n3. 应用要在幂等前提下有限重试整笔事务。\n\n4. 预防主要靠统一更新顺序、缩短事务和合适索引。\n\n5. A 先改订单 1 再改 2，B 先改 2 再改 1，就可能互相等待。统一按 ID 顺序修改可减少这种情况。",
      "sourceIds": [
        "N015",
        "NI008"
      ],
      "keywords": [
        "Q06-020",
        "MySQL",
        "拼多多",
        "美团",
        "InnoDB"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 291,
      "originalQuestion": "InnoDB 死锁如何形成和处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-021",
      "number": "Q06-021",
      "question": "乐观锁与悲观锁怎样防止库存变负？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 悲观方式先在事务里锁住库存，再检查修改。\n\n2. 乐观方式在更新时检查版本或库存条件，成功才扣减。\n\n3. 关键是让数据库原子判断，不能先普通 SELECT 再无条件 UPDATE。\n\n4. 无论哪种写法，数据库实际更新仍会使用必要的锁。\n\n5. UPDATE stock SET qty=qty-1 WHERE id=? AND qty>0；检查影响行数为 1 才算成功，0 行表示本次没扣成。",
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
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```sql\nUPDATE product_stock\nSET stock = stock - :qty\nWHERE product_id = :product_id\n  AND stock >= :qty;\n```\n\n`:qty` 为展示用绑定参数，不是可直接交给所有MySQL客户端执行的字面SQL。**应用层必须先验证 qty > 0，并检查影响行数恰好为1；和订单落库放在同一个事务中，失败抛异常/回滚。**只写这一条不能处理订单与跨系统结果。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 292,
      "originalQuestion": "乐观锁与悲观锁怎样防止库存变负？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-022",
      "number": "Q06-022",
      "question": "redo log、undo log、binlog 各做什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. redo log 是重做日志，用于引擎崩溃恢复，重做已记录的修改。\n\n2. undo log 是回滚日志，用于撤销事务修改，也为 MVCC 提供历史版本。\n\n3. binlog 是服务器层的变更日志，主要用于复制和时间点恢复。\n\n4. 三者职责不同，不能相互替代；binlog 不是普通事务回滚所用的 undo log。",
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
        "好未来",
        "redo",
        "log",
        "undo",
        "binlog"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q06-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D03 · MySQL 8.4：InnoDB Multi-Versioning",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "D07 · MySQL 8.4：Redo Log",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 293,
      "originalQuestion": "redo log、undo log、binlog 各做什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-026",
      "number": "Q06-026",
      "question": "主从复制流程与延迟问题？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 主库把变更写入 binlog，副本接收为 relay log，再重放到自己的数据中。\n\n2. 复制可能有延迟，所以主库写完立刻读副本，可能看不到新数据。\n\n3. 关键的写后读可读主库，或等待达到指定复制进度。",
      "sourceIds": [
        "N053"
      ],
      "keywords": [
        "Q06-026",
        "MySQL",
        "小鹅通"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 294,
      "originalQuestion": "主从复制流程与延迟问题？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-027",
      "number": "Q06-027",
      "question": "深分页为什么慢？游标分页怎么做？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 深分页慢在 offset 很大时，数据库通常仍要扫描并跳过前面的记录。\n\n2. 连续翻页可改成“从上次最后一条之后继续查”，这叫游标分页。\n\n3. 排序必须稳定，常用时间加唯一 ID。\n\n4. 它不天然支持高效任意跳页。\n\n5. 不是查第 100 万行后 20 条，而是 WHERE id > 上页最后ID ORDER BY id LIMIT 20；具体索引和过滤条件也要匹配。",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "Q06-027",
        "MySQL",
        "实在智能"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```sql\nSELECT id, created_at, amount\nFROM orders\nWHERE tenant_id = :tenant_id\n  AND (created_at > :last_time\n       OR (created_at = :last_time AND id > :last_id))\nORDER BY created_at ASC, id ASC\nLIMIT 100;\n```\n\n候选索引 `(tenant_id, created_at, id)`，用真实执行计划验证。需要快照式导出时再明确数据截止时间/快照机制。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 295,
      "originalQuestion": "深分页为什么慢？游标分页怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-028",
      "number": "Q06-028",
      "question": "order by、group by 慢怎么优化？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 排序、分组慢，先减少参与处理的数据，再看能否利用索引顺序，避免不必要的大字段和临时结果。\n\n2. 聚合量很大时可考虑预聚合。\n\n3. Using filesort 表示额外排序，不代表一定写磁盘。\n\n4. 盲目扩大排序缓冲可能撑高内存。",
      "sourceIds": [],
      "keywords": [
        "Q06-028",
        "MySQL",
        "order",
        "by",
        "group"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-028",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 296,
      "originalQuestion": "order by、group by 慢怎么优化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-030",
      "number": "Q06-030",
      "question": "数据库字段类型、字符集和主键怎么选？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 字段类型按业务选：金额用 DECIMAL 或最小单位整数，文本定义合理长度，时间明确时区语义，字符集和排序规则保持一致。\n\n2. 主键要唯一、稳定、尽量紧凑，因为二级索引也会携带主键值。",
      "sourceIds": [],
      "keywords": [
        "Q06-030",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-030",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 297,
      "originalQuestion": "数据库字段类型、字符集和主键怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-031",
      "number": "Q06-031",
      "question": "NULL、索引和 SQL 三值逻辑有哪些坑？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. NULL 表示缺失或未知，不是普通的值。\n\n2. 判断它用 IS NULL，不用 =NULL。\n\n3. WHERE 只保留判断为真的行。\n\n4. NOT IN 的集合含 NULL 时容易出现意外，应根据语义考虑 NOT EXISTS。\n\n5. MySQL 唯一键对 NULL 有特殊规则。\n\n6. NULL=NULL 不会得到普通的 true，因为你不知道两边各是什么值；count(列) 也不会把 NULL 数进去。",
      "sourceIds": [],
      "keywords": [
        "Q06-031",
        "MySQL",
        "NULL",
        "SQL"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-031",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```sql\nSELECT u.id\nFROM users AS u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders AS o WHERE o.user_id = u.id\n);\n```\n\n对比 `NOT IN` 含 NULL 的情况，解释为什么不能忽略SQL三值逻辑。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 298,
      "originalQuestion": "NULL、索引和 SQL 三值逻辑有哪些坑？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-033",
      "number": "Q06-033",
      "question": "怎样查询每个部门薪资前三名？并列和只取三个人怎样区分？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先确认“前三”指三个人，还是前三个不同薪资档位。\n\n2. 每部门只取三个人用 ROW_NUMBER，并加稳定排序。\n\n3. 允许同薪资并列、取前三档用 DENSE_RANK。\n\n4. MySQL 8 可以先用窗口函数排名，再在外层筛选。\n\n5. 工资 100、100、90、80：ROW_NUMBER 取前三行；DENSE_RANK<=3 会把四个人都选中。",
      "sourceIds": [],
      "keywords": [
        "Q06-033",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-033",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```sql\nSELECT id, department_id, salary\nFROM (\n  SELECT id, department_id, salary,\n         DENSE_RANK() OVER (\n           PARTITION BY department_id ORDER BY salary DESC\n         ) AS rk\n  FROM employee\n  WHERE salary IS NOT NULL\n) AS ranked\nWHERE rk <= 3;\n```\n\n若只取三个人，改用 `ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC, id ASC)`。",
      "references": [
        {
          "title": "D08 · MySQL 8.4：Window Functions",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/window-function-descriptions.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 299,
      "originalQuestion": "怎样查询每个部门薪资前三名？并列和只取三个人怎样区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-036",
      "number": "Q06-036",
      "question": "查出选课人数超过 5 人的课程，SQL 怎么写？",
      "answer": "1. 先按 course_id 分组，再用 HAVING 筛选选课人数超过 5 人的课程。\n\n2. 可能重复选课时，用 COUNT(DISTINCT student_id) 统计不同学生；已保证一人一课只有一条记录时，可以使用 COUNT(*)。\n\n```sql\nSELECT course_id\nFROM enrollment\nGROUP BY course_id\nHAVING COUNT(DISTINCT student_id) > 5;\n```\n\n3. 需要排除退课记录等情况时，先用 WHERE 过滤原始记录，再进行分组统计。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q06-036",
        "MySQL",
        "百度",
        "SQL"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-036",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 300,
      "originalQuestion": "查出选课人数超过 5 人的课程，SQL 怎么写？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-037",
      "number": "Q06-037",
      "question": "按关键词查文本，LIKE 查询怎么优化？",
      "answer": "1. LIKE 'abc%' 有明确前缀，普通 B+ 树有机会缩小扫描范围。\n\n2. LIKE '%abc%' 通常难直接定位。\n\n3. 先加合理业务过滤、减少返回列，再看计划。\n\n4. 需要分词和相关性时评估全文检索，但它不等价于任意子串匹配。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "N027"
      ],
      "keywords": [
        "Q06-037",
        "MySQL",
        "车300",
        "LIKE"
      ],
      "sourceFile": "公司补充题库_2026-09-08",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q06-037",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 301,
      "originalQuestion": "按关键词查文本，LIKE 查询怎么优化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-052",
      "number": "Q06-052",
      "question": "LEFT JOIN 的 ON 条件和 WHERE 条件有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. ON： 决定右表哪些记录算匹配；不匹配时仍可保留左表并补 NULL。\n\n2. WHERE： 对关联后的结果再次筛选；条件不为真就不保留。\n\n3. 常见坑： `WHERE o.status = 'PAID'` 会过滤掉无匹配订单的用户。\n\n4. 正确思路： 要保留全部用户，又只展示已支付订单，把 `o.status = 'PAID'` 放在 ON；只要有已支付订单的用户，则可明确使用 INNER JOIN。\n\n5. 不是“右表条件一律不能放 WHERE”，而是取决于期望结果。",
      "sourceIds": [
        "REV20-JOIN"
      ],
      "keywords": [
        "Q06-052",
        "MySQL",
        "基础补充",
        "LEFT",
        "JOIN",
        "ON",
        "WHERE"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q06-032"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "MySQL 8.4：JOIN Clause",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 302,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-053",
      "number": "Q06-053",
      "question": "数据库三大范式是什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 第一范式： 每个字段保存关系模型下的单一值，避免在一个字段中塞多个同类属性。\n\n2. 第二范式： 在第一范式基础上，非主属性完全依赖整个候选键，消除部分依赖。\n\n3. 第三范式： 在第二范式基础上，消除非主属性对候选键的传递依赖。\n\n4. 员工表保存部门 ID，部门名称放部门表，避免每个员工都重复存一份部门名称。\n\n5. 业务可为性能做有意识的冗余，但要额外处理一致性。",
      "sourceIds": [
        "REV20-NORMAL"
      ],
      "keywords": [
        "Q06-053",
        "MySQL",
        "基础补充"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q12-005"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "Microsoft：Database normalization description",
          "url": "https://learn.microsoft.com/en-us/previous-versions/troubleshoot/microsoft-365/microsoft-365-apps/access/database-normalization-description",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 303,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-RM006",
      "number": "RM006",
      "question": "CHAR 和 VARCHAR 怎么选？长度是字符数还是字节数？",
      "answer": "1. CHAR 表达固定长度字符串，VARCHAR 表达可变长度字符串，并需要长度信息。\n\n2. 声明中的长度通常按字符数理解，实际存储字节数受字符集影响。\n\n3. 固定长度代码可考虑 CHAR。\n\n4. 长度变化明显的名称描述通常用 VARCHAR。\n\n5. VARCHAR(20) 不等于永远只占20字节；utf8mb4 下一个字符可能占多个字节。不要为了手机号固定11位，就把它当整数存储。",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见对比",
      "sourceIds": [
        "NI019"
      ],
      "keywords": [
        "RM006",
        "MySQL",
        "新蛋",
        "CHAR",
        "VARCHAR"
      ],
      "sourceFile": "recent-interviews-study.md",
      "originalKind": "面经具体追问 / 练习",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-RM006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MySQL 8.4 CHAR与VARCHAR",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/char.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 304,
      "originalQuestion": "CHAR 和 VARCHAR 怎么选？长度是字符数还是字节数？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX005",
      "number": "UX005",
      "question": "MySQL 中 DELETE、TRUNCATE、DROP 有什么区别？能回滚吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. DELETE 删除数据行，可以带 WHERE，保留表结构。MySQL 8.4 的 InnoDB 显式事务中，尚未提交的 DELETE 可以回滚。\n\n2. TRUNCATE 清空整张表，不能带 WHERE，保留表结构并可重置自增计数；会隐式提交，不能按普通 DML 回滚。\n\n3. 普通 DROP TABLE 删除整张表及其结构，也会隐式提交。\n\n4. 已经提交的 DELETE 也不能随意 ROLLBACK。外键约束等可能限制 TRUNCATE，具体以数据库规则为准。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-UX005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MySQL 8.4 TRUNCATE TABLE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：隐式提交语句",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "MySQL 8.4：DELETE",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/delete.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 305,
      "originalQuestion": "MySQL 中 DELETE、TRUNCATE、DROP 有什么区别？能回滚吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q06-019",
      "number": "Q06-019",
      "question": "唯一索引等值查询会加间隙锁吗？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 完整唯一键等值查到现有记录时，锁定查询通常只需记录锁。但查不存在的值、只用联合唯一键的一部分、或者查范围时，可能涉及间隙。还要说明 RC/RR，不能只凭“有唯一索引”就断言没有间隙锁。",
      "sourceIds": [],
      "keywords": [
        "Q06-019",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "唯一索引等值查询会加间隙锁吗？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 306
    },
    {
      "id": "bank-Q06-023",
      "number": "Q06-023",
      "question": "MySQL 的两阶段提交是什么？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 这里的两阶段提交通常是协调 InnoDB 的 redo 与 MySQL 的 binlog：先准备，再记录相应 binlog，最后完成引擎提交。\n\n2. 目的是让崩溃恢复后两边对“这笔事务是否提交”的判断一致，不是指业务写了两条 UPDATE。",
      "sourceIds": [],
      "keywords": [
        "Q06-023",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "MySQL 的两阶段提交是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 307
    },
    {
      "id": "bank-Q06-024",
      "number": "Q06-024",
      "question": "刷盘参数对数据可靠性有什么影响？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 日志何时真正同步到磁盘，会影响性能和宕机丢失窗口。\n\n2. innodb_flush_log_at_trx_commit 和 sync_binlog 是常见相关参数。\n\n3. 强调可靠性时常讨论“双 1”。但最终保障还受存储设备、操作系统和复制故障场景影响。",
      "sourceIds": [],
      "keywords": [
        "Q06-024",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "刷盘参数对数据可靠性有什么影响？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-024",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 308
    },
    {
      "id": "bank-Q06-025",
      "number": "Q06-025",
      "question": "Buffer Pool 和 WAL 怎样配合？提交是否要立即刷完数据页？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Buffer Pool 是 InnoDB 的内存页缓存，数据读写通常先经过它；修改过还没落盘的页叫脏页。WAL 是先保证相关日志持久，再允许对应数据页落盘，用日志帮助崩溃恢复。提交不必把所有脏页立刻刷完。",
      "sourceIds": [],
      "keywords": [
        "Q06-025",
        "MySQL"
      ],
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "Buffer Pool 和 WAL 怎样配合？提交是否要立即刷完数据页？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "D07 · MySQL 8.4：Redo Log",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 309
    },
    {
      "id": "bank-Q06-034",
      "number": "Q06-034",
      "question": "分库分表什么时候做，有哪些代价？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 分库分表是为了突破单库单表的容量或负载限制，但会增加跨片查询、事务、排序、唯一约束和扩容迁移的复杂度。先做索引、SQL、归档等优化，再判断是否真的需要分片，不要按固定行数机械决定。",
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
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "分库分表什么时候做，有哪些代价？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 310
    },
    {
      "id": "bank-Q06-035",
      "number": "Q06-035",
      "question": "大批量导入、删数据、加字段怎么避免影响线上？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 大批量操作要拆批、限速、可恢复。导入分批事务，删除按可索引范围逐批清理，DDL 先确认版本和操作能否在线完成。在线 DDL 也可能等元数据锁，变更前还要检查长事务、磁盘空间和兼容方案。",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q06-035",
        "MySQL",
        "招银网络科技"
      ],
      "sourceFile": "06_MySQL.md",
      "isNew": false,
      "originalQuestion": "大批量导入、删数据、加字段怎么避免影响线上？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q06-035",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 311
    },
    {
      "id": "bank-LX008",
      "number": "LX008",
      "question": "RR 事务先查不到一行，另一个事务插入后，为什么自己 UPDATE 再查却能看到？",
      "answer": "1. 关键在于：普通查询看快照，UPDATE 找当前可更新的数据，而且事务能看到自己的修改。\n\n2. 因此 A 先查不到、B 插入并提交后，A 的 UPDATE 可能更新到那条新记录，随后 A 又能查到自己更新后的结果。\n\n3. 这不等于 RR 的所有读都改成了实时读，而是混用了不同读法。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "RR 事务先查不到一行，另一个事务插入后，为什么自己 UPDATE 再查却能看到？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-consistent-read.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 312
    },
    {
      "id": "bank-LX013",
      "number": "LX013",
      "question": "部门很多，数据权限产生超长 IN，怎么优化？",
      "answer": "1. 部门 ID 很多时，不要总把几千个 ID 拼成一个巨大 IN。\n\n2. 可以把用户或角色的授权范围建成关系表，再用带索引的 JOIN 或 EXISTS 过滤。\n\n3. 部门树也可按业务维护祖先关系。先在数据库过滤和分页，不要查出全量后在 Java 中删掉无权限行。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "部门很多，数据权限产生超长 IN，怎么优化？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX013",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 313
    },
    {
      "id": "bank-LX022",
      "number": "LX022",
      "question": "RC 下按完整唯一键更新一条已存在记录，会先锁整张表吗？",
      "answer": "1. RC 下通过完整唯一键更新一条存在的记录，通常锁相关索引记录，不是先把整张表排他锁住。\n\n2. 表上可能有意向锁，它是声明要持有行级锁，不等于其他行都不能写。\n\n3. 具体还要看执行计划、二级索引维护和唯一约束检查，不能只看 UPDATE 这一个词。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "RC 下按完整唯一键更新一条已存在记录，会先锁整张表吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX022",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locks-set.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 314
    },
    {
      "id": "bank-LX034",
      "number": "LX034",
      "question": "有两个 LIKE 就一定不走索引吗？",
      "answer": "1. 两个 LIKE 不代表索引一定失效，关键看怎么匹配。\n\n2. 例如 'abc%' 有固定前缀，和 '%abc%' 的定位能力不同。\n\n3. 还要看两个条件用 AND 还是 OR、索引列顺序和数据分布。\n\n4. 必须拿具体 SQL 看执行计划，不能只数 LIKE 的个数就判断。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "有两个 LIKE 就一定不走索引吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 315
    },
    {
      "id": "bank-UX006",
      "number": "UX006",
      "question": "软删除后允许重建，唯一索引为什么可能再次冲突？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "1. 只建 UNIQUE(业务编号, deleted)，第一次删除会留下“编号 A、deleted=1”。重建 A 后再删除，又要变成同一个组合，于是冲突。要保证“未删除记录唯一、历史记录可多条”，就得把这两种状态分开设计。\n\n2. 例如，有效 A → 唯一键 A；历史 A → 唯一键 NULL。再次创建 A 仍只能有一条有效记录，但允许多条删除历史。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "软删除后允许重建，唯一索引为什么可能再次冲突？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX006",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "MySQL 8.4 CREATE INDEX：唯一键与 NULL",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/create-index.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 316
    },
    {
      "id": "bank-RM024",
      "number": "RM024",
      "question": "WHERE id > 上次ID，ORDER BY create_time，这样的游标分页一定对吗？",
      "answer": "1. 不一定。筛选边界按id，排序却按create_time，两种顺序未必一致，可能漏行或重复。游标必须与稳定排序一致，比如按created_at、id升序，就记录两个值，筛选比这对值更靠后的行。\n\n2. 例如，记录id=100创建得早，id=90创建得晚。第一批读到100后用id>100继续，就可能永远漏掉90。正确条件可写为时间更大，或时间相同且id更大。\n\n3. 需要配套索引并检查真实执行计划。排序字段要稳定且非空或明确空值规则；分页不是天然快照，处理期间更新排序字段仍会改变结果。此例为独立反例。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "WHERE id > 上次ID，ORDER BY create_time，这样的游标分页一定对吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM024",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 317
    },
    {
      "id": "bank-Q07-002",
      "number": "Q07-002",
      "question": "五种常用数据类型如何选择？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. String 保存单值、计数或二进制数据，例如验证码和缓存对象。\n\n2. Hash 保存对象的多个字段，例如用户信息。\n\n3. List 保存有顺序、可以重复的元素，例如消息列表。\n\n4. Set 保存不重复成员，适合关注关系和去重。\n\n5. ZSet 保存成员及分数，按分数排序，适合积分排行榜。外部数据类型与底层编码不是同一回事。",
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
        "深轻科技",
        "基础起步"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R01 · Redis：Data Types",
          "url": "https://redis.io/docs/latest/develop/data-types/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 318,
      "originalQuestion": "五种常用数据类型如何选择？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-015",
      "number": "Q07-015",
      "question": "什么是缓存穿透？一直查不存在的数据怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 缓存穿透：查询的数据本来就不存在，缓存和数据库都查不到。\n\n2. 问题： 每次都绕过缓存查询数据库。\n\n3. 入口校验： 拦住明显非法参数。\n\n4. 缓存空值： 对确认不存在的数据设置较短 TTL。\n\n5. 布隆过滤器： 先排除明显不存在的键，可能存在时仍查真实数据。\n\n6. 新数据创建后要处理旧的空值缓存，并维护过滤器。",
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
        "招银网络科技",
        "基础起步"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 319,
      "originalQuestion": "什么是缓存穿透？一直查不存在的数据怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-016",
      "number": "Q07-016",
      "question": "什么是缓存击穿？一个热点 key 失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 缓存击穿：一个热点 key 失效，很多请求同时回源数据库。\n\n2. 互斥重建： 让少量请求负责加载，其余限时等待。\n\n3. 二次检查： 获得重建资格后再次检查缓存，避免重复查询。\n\n4. 提前刷新： 在到期前更新热点数据。\n\n5. 逻辑过期： 允许读旧值的业务，可后台刷新。\n\n6. 需要等待上限、失败降级，不能让其他请求无限等锁。",
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
        "招银网络科技",
        "基础起步",
        "key"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 320,
      "originalQuestion": "什么是缓存击穿？一个热点 key 失效怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-017",
      "number": "Q07-017",
      "question": "什么是缓存雪崩？大量缓存同时失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 缓存雪崩：大量缓存同时失效，或整个缓存服务不可用，数据库承受集中回源。\n\n2. 分散到期： TTL 加随机扰动，分批预热。\n\n3. 保护数据库： 限流、熔断、降级，限制回源量。\n\n4. 提高可用性： 合理部署缓存高可用或多级缓存。\n\n5. 随机 TTL 只能缓解同时到期，不能解决整套 Redis 故障。",
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
        "腾讯",
        "基础起步"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 321,
      "originalQuestion": "什么是缓存雪崩？大量缓存同时失效怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-034",
      "number": "Q07-034",
      "question": "Redis 是什么？和 MySQL 有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Redis 是以内存为主的数据结构存储，按 key 组织数据，常用于缓存、计数和排行榜。\n\n2. MySQL 是关系型数据库，用表、行、列组织数据，适合业务数据存储、关联查询和事务处理。\n\n3. Redis 可以配置 RDB、AOF 持久化，不是只放内存而不能落盘。\n\n4. 两者经常配合使用，Redis 不默认替代 MySQL 的关系查询和事务语义。",
      "sourceIds": [],
      "keywords": [
        "Q07-034",
        "Redis",
        "基础补充",
        "基础起步",
        "MySQL"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q07-001",
          "bank-Q07-002",
          "bank-Q07-009",
          "bank-Q06-013"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R01 · Redis：Data Types",
          "url": "https://redis.io/docs/latest/develop/data-types/",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R03 · Redis：Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 322,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-035",
      "number": "Q07-035",
      "question": "缓存是什么？为什么使用缓存？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 缓存把访问频繁、可复用的数据放在更快的位置，减少重复计算或访问慢数据源。\n\n2. 降低延迟，减轻数据库压力。\n\n3. 占额外资源，还要维护过期、失效和一致性。\n\n4. 典型流程： 先查缓存 → 未命中查数据库 → 回填缓存。\n\n5. 不是所有数据都适合容忍陈旧；缓存不可用时仍需限制回源压力。",
      "sourceIds": [],
      "keywords": [
        "Q07-035",
        "Redis",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q07-018",
          "bank-Q07-019",
          "bank-Q07-020"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 323,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-036",
      "number": "Q07-036",
      "question": "缓存命中、缓存未命中、TTL 分别是什么？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 缓存命中： 缓存中有可使用的结果。\n\n2. 缓存未命中： 缓存没有结果或结果已不可用，需要回源等处理。\n\n3. TTL： 键的剩余生存时间或有效期设置。\n\n4. 命中率： 命中请求占缓存查询请求的比例。\n\n5. TTL 到期不代表内存会在同一毫秒被物理释放，也不能当作精确定时器。",
      "sourceIds": [],
      "keywords": [
        "Q07-036",
        "Redis",
        "基础补充",
        "基础起步",
        "TTL"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q07-007",
          "bank-Q07-020"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "R02 · Redis：Key Eviction",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 324,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-037",
      "number": "Q07-037",
      "question": "缓存穿透、击穿、雪崩怎么快速区分？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 缓存穿透：查询的数据在缓存和数据库中都不存在，请求反复落到数据库；可用参数校验、空值缓存、布隆过滤器处理。\n\n2. 缓存击穿：一个热点 key 失效，大量请求同时回源；可用互斥重建、合并请求或提前刷新处理。\n\n3. 缓存雪崩：大量 key 同时失效，或缓存服务整体故障；需要打散过期时间，并配合限流、降级保护数据库。",
      "sourceIds": [],
      "keywords": [
        "Q07-037",
        "Redis",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q07-015",
          "bank-Q07-016",
          "bank-Q07-017"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X04 · 2026 Java后端开发面试真题汇总（含AI工程方向）",
          "url": "https://www.nowcoder.com/discuss/864594486704291840",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 325,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-001",
      "number": "Q07-001",
      "question": "Redis 为什么快？是不是只有一个线程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 内存读写： 大部分常见数据访问在内存完成。\n\n2. 结构合适： 为不同操作提供高效数据结构。\n\n3. 事件驱动： 高效管理网络连接，减少不必要的等待。\n\n4. 执行路径短： 核心命令常按主线程串行执行，减少相应竞争。\n\n5. “单线程”不是指整个进程只有一个线程；慢命令、大 key、长脚本仍可能拖慢请求。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 326,
      "originalQuestion": "Redis 为什么快？是不是只有一个线程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-005",
      "number": "Q07-005",
      "question": "ZSet 为什么同时需要排序结构与哈希索引？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 大型 ZSet 常用两套结构配合：哈希索引快速按成员找分数，跳表按分数维护顺序，方便排名和范围查询。\n\n2. 小集合可能用紧凑编码。\n\n3. 这是为了同时照顾“找一个成员”和“按顺序找一批成员”。",
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
        "货拉拉",
        "ZSet"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 327,
      "originalQuestion": "ZSet 为什么同时需要排序结构与哈希索引？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-006",
      "number": "Q07-006",
      "question": "Bitmap、HyperLogLog、布隆过滤器分别适合什么问题？结果精确吗？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. Bitmap 用每一位记录是否发生。\n\n2. HyperLogLog 估算有多少个不同元素。\n\n3. Bloom Filter 判断一个值“肯定没有”或“可能有”。\n\n4. HLL 有统计误差，布隆过滤器有误判，不能当精确业务去重集合。\n\n5. 签到可用位图；估算独立访客可用 HLL；先拦截明显不存在的商品 ID 可用布隆过滤器，判断可能存在后仍需查真实数据。",
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
        "腾讯",
        "Bitmap",
        "HyperLogLog"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "R01 · Redis：Data Types",
          "url": "https://redis.io/docs/latest/develop/data-types/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 328,
      "originalQuestion": "Bitmap、HyperLogLog、布隆过滤器分别适合什么问题？结果精确吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-007",
      "number": "Q07-007",
      "question": "过期删除和内存淘汰有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 过期删除是“时间到了，清理到期 key”。\n\n2. 内存淘汰是“内存不够，按策略选 key 删除”。\n\n3. 两者触发原因不同。到期不代表内存准点释放，没设 TTL 的 key 也可能被 allkeys 类策略淘汰。",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q07-007",
        "Redis",
        "美团"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "R02 · Redis：Key Eviction",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 329,
      "originalQuestion": "过期删除和内存淘汰有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-008",
      "number": "Q07-008",
      "question": "常见内存淘汰策略有哪些？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 先记策略范围，再记选谁：allkeys 面向全部可选 key，volatile 只面向设了过期时间的 key。\n\n2. LRU 偏向淘汰最近少用的，LFU 偏向淘汰低频的，random 随机，volatile-ttl 偏向更早过期的。\n\n3. noeviction 不主动淘汰，相关写入可能报错。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R02 · Redis：Key Eviction",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 330,
      "originalQuestion": "常见内存淘汰策略有哪些？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-009",
      "number": "Q07-009",
      "question": "RDB 与 AOF 的区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. RDB 保存某个时刻的数据快照，适合备份和恢复，但快照之后的修改可能在故障中丢失。\n\n2. AOF 记录写操作，按刷盘策略缩小数据丢失窗口，但日志存储、重写和回放有成本。\n\n3. 两者可以组合使用。数据可靠性还取决于刷盘、存储和故障情况，不能简单承诺绝不丢数据。",
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
        "新蛋",
        "RDB",
        "AOF"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q07-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R03 · Redis：Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 331,
      "originalQuestion": "RDB 与 AOF 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-011",
      "number": "Q07-011",
      "question": "Redis 主从复制的流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Redis 副本第一次追上主库时，可能需要全量同步。\n\n2. 有可用历史偏移和积压缓冲时，可以只补增量。\n\n3. 常见主从复制是异步的，主库回复成功时，副本不一定已经收到，因此切主仍可能丢掉已确认的写入。",
      "sourceIds": [],
      "keywords": [
        "Q07-011",
        "Redis"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "R04 · Redis：Replication",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/replication/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 332,
      "originalQuestion": "Redis 主从复制的流程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-012",
      "number": "Q07-012",
      "question": "Sentinel 的职责是什么？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Sentinel 负责监控主从、判断故障、组织切主，并告诉客户端新主是谁。\n\n2. 它解决高可用，不负责把数据分片扩容。\n\n3. 哨兵节点数量和主从复制可靠性是两件事，多哨兵不代表数据强一致。",
      "sourceIds": [
        "N032",
        "X02"
      ],
      "keywords": [
        "Q07-012",
        "Redis",
        "招银云创",
        "拼多多",
        "Sentinel"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 333,
      "originalQuestion": "Sentinel 的职责是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-013",
      "number": "Q07-013",
      "question": "Redis Cluster 如何分片和路由？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Redis Cluster 把 key 映射到 16384 个槽，再把槽分配给不同节点，实现分片。\n\n2. 客户端根据槽找到节点。\n\n3. 多 key 操作通常要求同槽，可以用 hash tag 让相关 key 落在一起。\n\n4. Cluster 和 Sentinel 的用途不同。\n\n5. order:{123}:info 与 order:{123}:lock 使用相同的 hash tag 123，可方便相关操作落在同一槽。",
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
        "滴滴",
        "Cluster"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R05 · Redis：Cluster Specification",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 334,
      "originalQuestion": "Redis Cluster 如何分片和路由？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-018",
      "number": "Q07-018",
      "question": "Cache Aside 的读取和写入流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Cache Aside 的读流程是先查缓存，没命中再查数据库并回填。\n\n2. 写流程通常先提交数据库，再删除相关缓存，等下次读重建。\n\n3. 它一般追求最终一致，不天然保证每次读都立即拿到最新值。",
      "sourceIds": [
        "N007",
        "X02"
      ],
      "keywords": [
        "Q07-018",
        "Redis",
        "腾讯",
        "拼多多",
        "Cache",
        "Aside"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 335,
      "originalQuestion": "Cache Aside 的读取和写入流程？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-019",
      "number": "Q07-019",
      "question": "先更新数据库再删缓存就绝对一致了吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先更新数据库再删缓存，也存在旧数据回填、删缓存失败等窗口。\n\n2. 可用可靠失效事件、重试、TTL、版本比较或按 key 协调减少问题。\n\n3. 严格一致的查询要走权威数据源或更强协调，不能只靠延迟双删承诺绝对一致。\n\n4. 读线程刚读到旧值，写线程更新并删除缓存，读线程随后把旧值写回缓存，就又留下旧数据。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 336,
      "originalQuestion": "先更新数据库再删缓存就绝对一致了吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-020",
      "number": "Q07-020",
      "question": "如何确定缓存 TTL？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. TTL 按“数据多久变、最多允许旧多久、回源有多贵”来定，而不是全部设半小时。\n\n2. 热点可提前刷新，过期时间适度打散，再观察命中率和回源压力调整。\n\n3. 余额、权限等准确性要求高的数据不能随便读旧。",
      "sourceIds": [
        "N041",
        "X02"
      ],
      "keywords": [
        "Q07-020",
        "Redis",
        "BIGO",
        "拼多多",
        "TTL"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 337,
      "originalQuestion": "如何确定缓存 TTL？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-021",
      "number": "Q07-021",
      "question": "Redis 分布式锁最基本怎么写？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 用 SET key 唯一标识 NX PX 超时 来原子加锁。\n\n2. 成功才执行业务。释放时必须原子地判断标识仍是自己的，再删除，通常用 Lua。\n\n3. TTL 防止进程死后永久占锁，但也带来业务没做完锁却过期的风险。\n\n4. 锁值不能大家都写 1。A 超时后 B 拿到新锁，A 再直接 DEL 就可能把 B 的锁删掉。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```text\nSET lock:order:123 <本次持有者唯一token> NX PX 10000\n```\n\n返回成功才获得锁；10秒仅为说明示例，不是适合所有业务的时长。\n\n释放使用服务端原子比较并删除（通用Lua形式）：\n\n```lua\nif redis.call('GET', KEYS[1]) == ARGV[1] then\n    return redis.call('DEL', KEYS[1])\nend\nreturn 0\n```\n\n脚本**只防误删别人的锁**，并不能阻止超时的旧持有者继续写数据库，也不能消除主从切换丢锁。关键副作用仍要唯一约束、版本校验或fencing。",
      "references": [
        {
          "title": "R06 · Redis：Distributed Locks",
          "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 338,
      "originalQuestion": "Redis 分布式锁最基本怎么写？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-022",
      "number": "Q07-022",
      "question": "分布式锁已经过期，业务还在执行怎么办？续期能完全解决吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 可在租约到期前按持有者身份续期，但续期可能因网络或长暂停失败。\n\n2. 旧任务此时可能仍继续写，所以关键操作还要数据库版本、唯一约束或 fencing token 保护。\n\n3. 看门狗降低过期概率，不代表解决所有故障。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "R06 · Redis：Distributed Locks",
          "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 339,
      "originalQuestion": "分布式锁已经过期，业务还在执行怎么办？续期能完全解决吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-024",
      "number": "Q07-024",
      "question": "Redis 事务、WATCH 和 Lua 有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. MULTI/EXEC 把一组命令排队后执行，WATCH 在执行前检测相关 key 是否变过。\n\n2. Lua 把判断和修改放到服务端一起执行。\n\n3. 它们都不能简单等同数据库事务回滚：执行中报错，之前完成的写入可能还在。",
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
        "帆软",
        "WATCH",
        "Lua"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "R07 · Redis：Transactions",
          "url": "https://redis.io/docs/latest/develop/using-commands/transactions/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 340,
      "originalQuestion": "Redis 事务、WATCH 和 Lua 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-026",
      "number": "Q07-026",
      "question": "big key 与 hot key 如何排查？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. big key 是“一个 key 的值太大或成员太多”，hot key 是“一个 key 被访问太频繁”。\n\n2. 前者重在拆分、限大小和避免重操作，后者重在缓存、请求合并、分摊和限流。\n\n3. 先看瓶颈是内存、CPU 还是带宽。\n\n4. 一个几十 MB 的列表是 big key；一个只有十几个字节却每秒访问很多次的计数器，也可以是 hot key。",
      "sourceIds": [
        "N003",
        "NI008"
      ],
      "keywords": [
        "Q07-026",
        "Redis",
        "字节跳动",
        "美团",
        "big",
        "key",
        "hot"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 341,
      "originalQuestion": "big key 与 hot key 如何排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-027",
      "number": "Q07-027",
      "question": "SCAN 比 KEYS 好在哪里？UNLINK 呢？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. KEYS 一次扫描匹配键，大库上可能长时间阻塞。\n\n2. SCAN 分批迭代，单次压力更可控，但可能重复，也不是一致性快照。\n\n3. UNLINK 把部分内存释放工作放到后台，降低同步删除大对象的阻塞风险。",
      "sourceIds": [],
      "keywords": [
        "Q07-027",
        "Redis",
        "SCAN",
        "KEYS",
        "UNLINK"
      ],
      "sourceFile": "07_Redis.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "R08 · Redis：SCAN",
          "url": "https://redis.io/docs/latest/commands/scan/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 342,
      "originalQuestion": "SCAN 比 KEYS 好在哪里？UNLINK 呢？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-028",
      "number": "Q07-028",
      "question": "Redis 如何实现限流和排行榜？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 限流时要把计数与过期设置一起原子完成，避免计数成功却没设 TTL。\n\n2. 固定窗口可能有边界突刺，更平滑的需求可用滑动窗口或令牌桶。\n\n3. 排行榜通常用 ZSet 更新分数、查名次，再明确同分规则和时间窗口。",
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
      "sourceFile": "07_Redis.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q07-028",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```lua\nlocal count = redis.call('INCR', KEYS[1])\nif count == 1 then\n    redis.call('PEXPIRE', KEYS[1], ARGV[1])\nend\nreturn count\n```\n\n应用预先校验窗口时长为正且范围合理，再把返回计数与上限比较。本例是“首次请求开始计时的窗口”，仍有边界突刺；Lua运行中错误不提供数据库式回滚，不能把不合法TTL交给脚本后期待自动撤销INCR。",
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 343,
      "originalQuestion": "Redis 如何实现限流和排行榜？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX007",
      "number": "UX007",
      "question": "Redis 的 key 设置过期后，为什么更新值又变成永不过期？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 普通 SET 成功覆盖值时，原来的过期时间会被清除。\n\n2. 更新时仍要过期，就在 SET 中同时指定 EX/PX。\n\n3. 需要保留原来的到期时刻，可用 Redis 6.0 起提供的 KEEPTTL。\n\n4. 不要默认“第一次设过 TTL，以后都会自动保留”。",
      "sourceIds": [
        "OPT-S07"
      ],
      "keywords": [
        "UX007",
        "Redis",
        "TTL",
        "SET",
        "KEEPTTL",
        "key"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```text\nSET cache:demo v1 EX 60\nSET cache:demo v2 KEEPTTL\nTTL cache:demo\n# 第二条保留原到期时刻；换成 SET cache:demo v2 则会清除 TTL。\n```",
      "references": [
        {
          "title": "Redis SET：过期设置与 KEEPTTL",
          "url": "https://redis.io/docs/latest/commands/set/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 344,
      "originalQuestion": "Redis 的 key 设置过期后，为什么更新值又变成永不过期？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q07-003",
      "number": "Q07-003",
      "question": "Redis 的 SDS 为什么不直接用 C 字符串？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. SDS 是 Redis 对字符串的封装，额外保存长度和可用空间。\n\n2. 这样取长度不必每次从头找结尾，也能保存带零字节的二进制数据。\n\n3. 预留空间还能减少部分追加时的重新分配。\n\n4. Redis String 不只是文本。",
      "sourceIds": [],
      "keywords": [
        "Q07-003",
        "Redis"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Redis 的 SDS 为什么不直接用 C 字符串？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-003",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 345
    },
    {
      "id": "bank-Q07-004",
      "number": "Q07-004",
      "question": "Redis 数据类型和底层编码有什么区别？编码为什么会变化？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. 数据很小时，紧凑编码省内存；数据多或值变大时，换成更适合查找、更新的结构。外部类型没变，内部编码可能变。Redis 的编码也随版本演进，实际环境可用 OBJECT ENCODING 查看，别永远只背 ziplist。",
      "sourceIds": [
        "X06"
      ],
      "keywords": [
        "Q07-004",
        "Redis",
        "好未来"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Redis 数据类型和底层编码有什么区别？编码为什么会变化？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-004",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 346
    },
    {
      "id": "bank-Q07-010",
      "number": "Q07-010",
      "question": "AOF 重写与 RDB 的 fork 有什么成本？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. AOF 重写是按当前数据生成更精简的恢复内容，不是照抄全部历史操作。后台任务常涉及 fork 和写时复制，业务持续修改数据时会额外占内存，还会竞争磁盘和 CPU。“后台执行”不等于前台完全没影响。",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q07-010",
        "Redis",
        "字节跳动"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "AOF 重写与 RDB 的 fork 有什么成本？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-010",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "R03 · Redis：Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 347
    },
    {
      "id": "bank-Q07-014",
      "number": "Q07-014",
      "question": "MOVED 与 ASK 的区别？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. MOVED 大致表示“这个槽现在归别的节点，你更新路由”；ASK 表示“迁移期间这次先去另一个节点”，通常不直接改永久路由。ASK 请求目标前需要按协议发送 ASKING。业务层仍要控制超时和重试。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q07-014",
        "Redis",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "MOVED 与 ASK 的区别？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-014",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "R05 · Redis：Cluster Specification",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 348
    },
    {
      "id": "bank-Q07-023",
      "number": "Q07-023",
      "question": "Redis 锁遇到主从切换有什么风险？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 主库加锁成功但还没复制就宕机，新主上可能没有这把锁，另一个客户端又能加锁，出现两个持有者。单纯续期解决不了这种切主窗口。重要业务最终要靠资源端约束，而不只相信“我曾经拿到 Redis 锁”。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q07-023",
        "Redis",
        "招银网络科技"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Redis 锁遇到主从切换有什么风险？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "R04 · Redis：Replication",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/replication/",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "R06 · Redis：Distributed Locks",
          "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 349
    },
    {
      "id": "bank-Q07-025",
      "number": "Q07-025",
      "question": "Pipeline 为什么能提高吞吐？它是不是事务？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Pipeline 是把多条命令一起发、一起收结果，减少网络往返，所以能提高吞吐。它是传输优化，不保证整批原子执行。批次太大也会占内存、拉长等待时间；读改写业务仍要用合适的原子机制。",
      "sourceIds": [],
      "keywords": [
        "Q07-025",
        "Redis"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Pipeline 为什么能提高吞吐？它是不是事务？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 350
    },
    {
      "id": "bank-Q07-029",
      "number": "Q07-029",
      "question": "Redis Pub/Sub、List、Stream 能不能当 MQ？",
      "category": "Redis",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Pub/Sub 像在线广播，断线期间的消息通常拿不回来。\n\n2. List 能做简单队列，但确认重试要自己补。\n\n3. Stream 有消息 ID、消费组和待确认记录，更适合可追踪消费。\n\n4. 无论哪种，都要按实际持久化和故障语义设计。",
      "sourceIds": [],
      "keywords": [
        "Q07-029",
        "Redis"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Redis Pub/Sub、List、Stream 能不能当 MQ？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 351
    },
    {
      "id": "bank-Q07-030",
      "number": "Q07-030",
      "question": "Redis 内存很高但 key 不多，怎么办？",
      "category": "Redis",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. key 少不代表占用小。要查值大小、对象编码、客户端缓冲、复制/AOF 缓冲、内存碎片和 fork 的额外占用。\n\n2. 对比 used_memory 与 RSS，再用 MEMORY USAGE 等采样定位，别只看 DBSIZE 就判断内存正常。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q07-030",
        "Redis",
        "拼多多"
      ],
      "sourceFile": "07_Redis.md",
      "isNew": false,
      "originalQuestion": "Redis 内存很高但 key 不多，怎么办？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 352
    },
    {
      "id": "bank-Q07-031",
      "number": "Q07-031",
      "question": "一个 key 同时读热点和写热点，只加本地缓存够吗？",
      "answer": "1. 不够。本地缓存主要减少读 Redis 的压力，写热点仍集中在原 key。计数可在允许延迟时分桶汇总，强约束库存却不能随意拆成多个独立真值。先区分读写比例和一致性要求，再做限流、合并或数据拆分。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "一个 key 同时读热点和写热点，只加本地缓存够吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 353
    },
    {
      "id": "bank-Q07-032",
      "number": "Q07-032",
      "question": "逻辑过期的数据不设 TTL，会不会撑爆 Redis？",
      "answer": "1. 会有风险。逻辑过期只是业务判断“这个值旧了”，并不自动释放内存。仍需更长的物理 TTL、容量上限或清理策略，并限制重建并发。允许返回旧值的场景也要明确，权限和余额不能随便用同一套策略。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "逻辑过期的数据不设 TTL，会不会撑爆 Redis？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-032",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 354
    },
    {
      "id": "bank-Q07-033",
      "number": "Q07-033",
      "question": "Lua 扣库存执行一半出错或 Redis 宕机，能保证什么？",
      "answer": "1. Lua 执行时不会被其他客户端命令插进来，但运行报错不会像数据库事务那样自动撤销之前的写入。宕机后的恢复还受持久化和复制影响。先校验再修改，配合业务幂等、持久订单状态和库存对账。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Lua 扣库存执行一半出错或 Redis 宕机，能保证什么？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q07-033",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://redis.io/docs/latest/develop/programmability/eval-intro/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 355
    },
    {
      "id": "bank-LX009",
      "number": "LX009",
      "question": "PDF 分片放 Redis，如何发现缺片并恢复？",
      "answer": "1. 先把“文件是否完整”设计清楚：记录文档版本、总片数、每片序号和校验值，全部到齐并验证后再标记可用。\n\n2. 缺哪片就从可靠来源补哪片，不应拿残缺文件当成功结果。\n\n3. 大文件通常放对象存储，Redis 用来加速。\n\n4. 把所有分片塞进一个 Hash 也可能变成 big key。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "PDF 分片放 Redis，如何发现缺片并恢复？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 356
    },
    {
      "id": "bank-LX035",
      "number": "LX035",
      "question": "Redisson 看门狗什么时候续期？锁到期后还能恢复原来的互斥吗？",
      "answer": "1. 看门狗正常是在锁到期前续期，不是锁已经丢了再“补回来”。\n\n2. 续期要确认仍是自己的锁；网络故障或长暂停导致续不上，旧任务可能还在跑，因此数据库版本或唯一约束仍要兜底。\n\n3. 是否自动续期也与 Redisson 使用的加锁方式、是否显式指定租期有关。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "Redisson 看门狗什么时候续期？锁到期后还能恢复原来的互斥吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX035",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://redisson.pro/docs/data-and-services/locks-and-synchronizers/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 357
    },
    {
      "id": "bank-LX038",
      "number": "LX038",
      "question": "Redis 淘汰后 RSS 仍很高，如何处理内存碎片？",
      "answer": "1. Redis 删掉或淘汰 key 后，used_memory 可能下降，但进程 RSS 不一定马上降。\n\n2. 因为内存分配器可能把释放的块留着复用，也可能还有碎片、客户端缓冲或写时复制开销。\n\n3. 先对比这些指标，再判断是否泄漏；不要把“没立刻还给操作系统”直接等同“没删成功”。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "Redis 淘汰后 RSS 仍很高，如何处理内存碎片？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX038",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 358
    },
    {
      "id": "bank-LX042",
      "number": "LX042",
      "question": "跳表与平衡树怎么比较，最坏查找复杂度是多少？",
      "answer": "1. 跳表在有序链表上增加多层索引，查找时从高层向右、向下定位。\n\n2. 跳表查找平均为 O(log n)，但随机层高不能保证最坏情况，最坏可退化为 O(n)。\n\n3. 平衡树通过维护平衡控制高度，查找的最坏复杂度可以保持 O(log n)。\n\n4. 两者都支持有序访问。选择时还要考虑范围查询、更新和实现成本。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "跳表与平衡树怎么比较，最坏查找复杂度是多少？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX042",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 359
    },
    {
      "id": "bank-RM001",
      "number": "RM001",
      "question": "一亿个 Redis key 中找固定前缀，能用 KEYS 吗？",
      "answer": "1. 线上不要用一次扫完的 KEYS。用 SCAN 配合 MATCH 分批迭代，保存返回的游标，直到游标为0。COUNT 是工作量提示，不保证每批刚好这么多条，也不保证每批有匹配结果。集群要覆盖相关主节点。\n\n2. 例如，查 order: 开头的键，可从 SCAN 0 MATCH order:* COUNT 1000 开始，把返回游标放进下一次请求。扫描时限速，结果去重。\n\n3. SCAN 不是快照，写入期间结果可能变化。前缀检索频繁时，应另建业务索引，不要每次全库扫描。普通扫描整体仍可能遍历全键空间。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "一亿个 Redis key 中找固定前缀，能用 KEYS 吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM001",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Redis SCAN",
          "url": "https://redis.io/docs/latest/commands/scan/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 360
    },
    {
      "id": "bank-RM021",
      "number": "RM021",
      "question": "布隆过滤器误判是什么？为什么不能直接删除某一位？",
      "answer": "1. 标准布隆过滤器把一个元素映射到多个位。查到某位为0可判不存在；相关位全为1，只能说可能存在，因为不同元素可能共用位。删除一个元素就把这些位清零，可能误伤其他元素，造成错误的“不存在”。\n\n2. 例如，A和B共用第5位。删除A时把第5位改0，B就可能再也查不到。可考虑重建、计数型过滤器或适合删除的其他结构，但需按实现约束选择。\n\n3. 误判存在不是“假阴性”。新增数据必须先保证能通过过滤器或有同步顺序保护；资金去重不能仅靠概率结构。删除部分是由共享位结构推导。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "布隆过滤器误判是什么？为什么不能直接删除某一位？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM021",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Redis Bloom filter",
          "url": "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 361
    },
    {
      "id": "bank-Q08-001",
      "number": "Q08-001",
      "question": "为什么使用 MQ？会引入什么代价？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. MQ（消息队列）让生产者和消费者通过消息异步协作。\n\n2. 异步： 非关键后续步骤不阻塞主链路。\n\n3. 解耦： 生产者不需要直接知道所有消费者。\n\n4. 削峰： 高峰任务先排队，在下游承受范围内处理。\n\n5. 要处理消息丢失、重复、顺序、积压和一致性问题。\n\n6. 队列不能无限堆积，也不能凭空提高下游处理能力。",
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
        "网易",
        "基础起步",
        "MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q08-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 362,
      "originalQuestion": "为什么使用 MQ？会引入什么代价？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-028",
      "number": "Q08-028",
      "question": "消息生产者、消费者、队列分别是什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 生产者： 发送消息的一方。\n\n2. 消息服务： 接收、保存或分发消息的服务端。\n\n3. 队列 / Topic： 组织消息的通道；具体模型因产品而异。\n\n4. 消费者： 接收消息并执行业务的一方。\n\n5. 下单服务发送“订单已支付”，积分服务消费消息后发积分。\n\n6. 接收消息不等于业务已成功完成，确认时机要设计好。",
      "sourceIds": [],
      "keywords": [
        "Q08-028",
        "消息队列 MQ",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q08-001",
          "bank-Q08-012",
          "bank-Q08-020",
          "bank-Q08-021"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "M02 · RabbitMQ：Confirms and Acknowledgements",
          "url": "https://www.rabbitmq.com/docs/confirms",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 363,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-029",
      "number": "Q08-029",
      "question": "同步调用和异步调用有什么区别？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 同步调用： 调用方通常等待操作完成，再继续处理依赖其结果的逻辑。\n\n2. 异步调用： 提交后可先处理其他工作，结果由回调、Future 或消息等方式取得。\n\n3. 异步可减少阻塞、拆开执行时机。\n\n4. 错误处理、状态跟踪、超时和一致性更复杂。\n\n5. 异步不一定更快，也不代表任务一定执行在新线程里。",
      "sourceIds": [],
      "keywords": [
        "Q08-029",
        "消息队列 MQ",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q03-029",
          "bank-Q08-001"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "T08 · Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 364,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-002",
      "number": "Q08-002",
      "question": "Kafka、RabbitMQ、RocketMQ 怎么选？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Kafka 更常用于高吞吐事件流和日志回放。\n\n2. RabbitMQ 强调灵活路由和工作队列。\n\n3. RocketMQ 常用于业务消息、事务消息和延时顺序场景。\n\n4. 选型要说清自己的吞吐、延迟、顺序、可靠性和运维需求，而不是只说哪个最快。",
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
        "深轻科技",
        "Kafka",
        "RabbitMQ",
        "RocketMQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 365,
      "originalQuestion": "Kafka、RabbitMQ、RocketMQ 怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-003",
      "number": "Q08-003",
      "question": "最多一次、至少一次、恰好一次交付分别意味着什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 最多一次：可能丢，但不靠重投补。\n\n2. 至少一次：会重试，所以可能重复。\n\n3. 恰好一次：必须说明保证到哪个边界。\n\n4. 业务常采用“至少一次投递+幂等消费”，让消息可以多收，但同一业务结果只生效一次。\n\n5. 收到两次发货消息不一定有问题，真正要求的是同一个订单不能实际发两次货。",
      "sourceIds": [],
      "keywords": [
        "Q08-003",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 366,
      "originalQuestion": "最多一次、至少一次、恰好一次交付分别意味着什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-004",
      "number": "Q08-004",
      "question": "怎样保证消息尽量不丢？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 生产者： 确认发送结果，失败使用可追踪的可靠重试。\n\n2. 消息服务： 按产品配置持久化、副本和确认机制。\n\n3. 消费者： 业务可靠落库后，再 ACK 或提交消费位移。\n\n4. 兜底： 监控失败与积压，用对账、补偿发现遗漏。\n\n5. 确认丢失时仍可能重复投递，所以要配合幂等；只开启持久化不能保证整条链路不丢。",
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
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q08-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "M02 · RabbitMQ：Confirms and Acknowledgements",
          "url": "https://www.rabbitmq.com/docs/confirms",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 367,
      "originalQuestion": "怎样保证消息尽量不丢？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-005",
      "number": "Q08-005",
      "question": "消息重复消费怎样处理？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 给消息一个稳定事件 ID，在同一数据库事务里完成“插入去重记录+业务修改”。\n\n2. 重复事件命中唯一约束后，不再重复产生业务效果。\n\n3. 数据库提交后再确认消息。\n\n4. 不要先用 Redis 标成已消费，再慢慢写库。\n\n5. 扣款已经落库，但 ACK 前崩溃，消息会重来；去重记录和扣款同事务提交，重来时就知道已经处理过。",
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
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```text\nbegin database transaction\n  插入 processed_event(event_id)，event_id有唯一约束\n  若已存在：退出当前尝试，查询/确认已有业务完成状态\n  若首次：执行业务更新\ncommit database transaction\n确认MQ消息或推进连续已完成offset\n```\n\n去重记录和业务修改必须同事务成功。两个关键故障演练：\n\n1. 业务更新中途崩溃：事务回滚，重投后能够重新处理。\n2. 数据库提交后、MQ确认前崩溃：重投但唯一事件记录使业务不会再次生效。\n\n如果副作用是外部接口而不是本数据库，以上事务不能包住它，需要外部幂等键、持久状态和补偿/对账。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 368,
      "originalQuestion": "消息重复消费怎样处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-006",
      "number": "Q08-006",
      "question": "消息顺序如何保证？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先确定需要谁的顺序：通常只要求同一订单或用户内部有序。\n\n2. 把相同业务 key 路由到同一分区/队列，再串行处理该 key。\n\n3. 不同 key 可以并行。\n\n4. 消息拿到的顺序，不等于开多线程后的完成顺序。\n\n5. 订单“创建→支付→发货”不能随意倒序；不同订单之间通常不必为了全局顺序一起排队。",
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
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 369,
      "originalQuestion": "消息顺序如何保证？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-007",
      "number": "Q08-007",
      "question": "消息积压怎么排查和恢复？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先看为什么积压：生产突然变多、消费变慢、反复失败，还是只有某个分区热点。\n\n2. 下游有余量且有并行空间时才扩消费者。\n\n3. 被数据库或顺序限制时，要先修瓶颈。\n\n4. 恢复要限速、保幂等，不可直接跳过历史消息。",
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
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 370,
      "originalQuestion": "消息积压怎么排查和恢复？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-008",
      "number": "Q08-008",
      "question": "重试队列与死信队列有什么作用？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 临时故障进入有限重试，采用退避和抖动，别立刻反复轰炸下游。\n\n2. 多次失败或确定格式错误的消息，进入死信/异常队列，保留原因并告警。\n\n3. 死信队列还需要修复和受控回放，不是丢进去就不管。",
      "sourceIds": [
        "N035"
      ],
      "keywords": [
        "Q08-008",
        "消息队列 MQ",
        "快手"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 371,
      "originalQuestion": "重试队列与死信队列有什么作用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-009",
      "number": "Q08-009",
      "question": "延迟消息怎么实现？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 延迟消息是“到指定时间后允许处理”，可用 MQ 的对应功能，或用任务表扫描、时间轮等实现。\n\n2. 到期不等于准点执行，消费积压还会延后。\n\n3. 订单超时关闭必须重新检查当前状态，并有补偿扫描。",
      "sourceIds": [
        "N045"
      ],
      "keywords": [
        "Q08-009",
        "消息队列 MQ",
        "字节跳动"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 372,
      "originalQuestion": "延迟消息怎么实现？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-012",
      "number": "Q08-012",
      "question": "Kafka 的 topic、partition、offset、consumer group 是什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Topic 是消息主题，Partition 是主题下的有序日志分片，Offset 是该分片内的位置，Consumer Group 是一起分工消费的一组消费者。\n\n2. 传统组内同一分区通常由一个消费者负责，不同组可以各自消费同一份日志。\n\n3. 一个主题 3 个分区，同组开 5 个消费者，通常有 2 个没有分区可处理；多开消费者不一定继续提速。",
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
        "腾讯",
        "Kafka",
        "topic",
        "partition",
        "offset",
        "consumer",
        "group"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 373,
      "originalQuestion": "Kafka 的 topic、partition、offset、consumer group 是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-013",
      "number": "Q08-013",
      "question": "Kafka 为什么吞吐高？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Kafka 高吞吐主要来自顺序追加、批量处理、页缓存、压缩和分区并行，部分路径还有零拷贝优化。\n\n2. 不是因为“消息完全不落盘”。\n\n3. 批量越大可能吞吐更好，但等攒批也可能增加单条延迟。",
      "sourceIds": [
        "X06",
        "NI003"
      ],
      "keywords": [
        "Q08-013",
        "消息队列 MQ",
        "好未来",
        "招银网络科技",
        "Kafka"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 374,
      "originalQuestion": "Kafka 为什么吞吐高？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-020",
      "number": "Q08-020",
      "question": "RabbitMQ 的 exchange、queue、binding、routing key？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 生产者先把消息发到 Exchange，交换机按 Binding 和 Routing Key 路由到 Queue，消费者再从队列取。\n\n2. Direct 精确匹配，Topic 按模式匹配，Fanout 广播，Headers 按头匹配。\n\n3. 发到交换机不代表一定路由进目标队列。",
      "sourceIds": [
        "NI020"
      ],
      "keywords": [
        "Q08-020",
        "消息队列 MQ",
        "新蛋",
        "RabbitMQ",
        "exchange",
        "queue",
        "binding",
        "routing",
        "key"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 375,
      "originalQuestion": "RabbitMQ 的 exchange、queue、binding、routing key？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-021",
      "number": "Q08-021",
      "question": "RabbitMQ publisher confirm 与 consumer ACK 的区别？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Publisher Confirm 回答生产者“Broker 是否接收处理了发布”。\n\n2. Consumer ACK 回答 Broker“消费者是否完成了这次交付”。\n\n3. 前者不代表下游业务已经成功。\n\n4. 还要单独处理无法路由的消息，不能只看发送调用没报错。",
      "sourceIds": [],
      "keywords": [
        "Q08-021",
        "消息队列 MQ",
        "RabbitMQ",
        "publisher",
        "confirm",
        "consumer",
        "ACK"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q08-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "M02 · RabbitMQ：Confirms and Acknowledgements",
          "url": "https://www.rabbitmq.com/docs/confirms",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 376,
      "originalQuestion": "RabbitMQ publisher confirm 与 consumer ACK 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q08-010",
      "number": "Q08-010",
      "question": "Outbox 模式怎样解决数据库和 MQ 双写？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Outbox 是一张本地待发事件表。\n\n2. 业务数据和事件在同一数据库事务里提交，后台再把事件发给 MQ。\n\n3. 发成功后再标记，但中间崩溃可能造成重复，所以消费者仍需幂等。\n\n4. 它主要解决“业务成功但消息没发”的双写窗口。\n\n5. 例如，订单写入和“需要通知仓库”的事件一起保存。即使马上重启，后台也能从事件表继续发送。",
      "sourceIds": [
        "NI008"
      ],
      "keywords": [
        "Q08-010",
        "消息队列 MQ",
        "美团"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Outbox 模式怎样解决数据库和 MQ 双写？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-010",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 377
    },
    {
      "id": "bank-Q08-011",
      "number": "Q08-011",
      "question": "RocketMQ 事务消息如何工作？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. RocketMQ 事务消息先发暂不可见的半消息，再执行本地事务。\n\n2. 本地成功就提交消息，失败就回滚消息。\n\n3. 状态不明确时，Broker 回查生产者。\n\n4. 回查必须看持久化业务事实，不能只依赖一个内存布尔值。",
      "sourceIds": [],
      "keywords": [
        "Q08-011",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "RocketMQ 事务消息如何工作？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-011",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M03 · RocketMQ：Transaction Message",
          "url": "https://rocketmq.apache.org/docs/featureBehavior/04transactionmessage/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 378
    },
    {
      "id": "bank-Q08-014",
      "number": "Q08-014",
      "question": "Kafka 的 acks=all 就绝对不丢吗？ISR 和最小副本数怎样配合？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. acks 决定生产者等谁确认：0 不等，1 等 leader，all 等当前符合协议的同步副本。\n\n2. ISR 是跟得上的副本集合，min.insync.replicas 配合 acks=all 限制可写所需的同步副本下限。\n\n3. all 不是无条件等所有配置副本。",
      "sourceIds": [],
      "keywords": [
        "Q08-014",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka 的 acks=all 就绝对不丢吗？ISR 和最小副本数怎样配合？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-014",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 379
    },
    {
      "id": "bank-Q08-015",
      "number": "Q08-015",
      "question": "Kafka 生产者幂等与事务保证什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Kafka 生产者幂等主要防同一发送链路重试产生重复。\n\n2. Kafka 事务可协调其边界内的多分区写入和消费位移。\n\n3. 它们不会自动让外部 MySQL 更新或支付接口也只执行一次。\n\n4. 外部副作用仍要业务幂等键和事务设计。",
      "sourceIds": [],
      "keywords": [
        "Q08-015",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka 生产者幂等与事务保证什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 380
    },
    {
      "id": "bank-Q08-016",
      "number": "Q08-016",
      "question": "Kafka 什么时候提交 offset？多线程处理为什么不能跳过未完成消息？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 先把业务持久处理成功，再提交已连续完成的位移。处理完却没提交就崩溃，会重复，需要幂等；先提交再处理就崩溃，可能漏做。并行处理时，不能让后完成的高位移越过前面未完成的消息。\n\n2. 例如，offset 10 还没完成、11 已完成，不能直接提交到 12，否则重启后可能跳过没做完的 10。",
      "sourceIds": [],
      "keywords": [
        "Q08-016",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka 什么时候提交 offset？多线程处理为什么不能跳过未完成消息？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 381
    },
    {
      "id": "bank-Q08-017",
      "number": "Q08-017",
      "question": "Kafka Rebalance 的原因和影响？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Rebalance 是消费者组重新分配分区，常因消费者加入、退出、失败或分区变化触发。它可能暂停部分处理并导致重投。要控制处理耗时、及时 poll/心跳，并在分区撤销时处理好在途任务和位移。",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q08-017",
        "消息队列 MQ",
        "招银网络科技"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka Rebalance 的原因和影响？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 382
    },
    {
      "id": "bank-Q08-018",
      "number": "Q08-018",
      "question": "Kafka retention、compaction 和消费确认有什么关系？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Kafka 通常按时间或大小保留日志，不是消费者确认后就删。消费者位移只表示自己读到哪里，所以保留期内可以回放。Compaction 按 key 清理历史版本，用于保留状态变化后的有效记录，也不是瞬间清完所有旧值。",
      "sourceIds": [],
      "keywords": [
        "Q08-018",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka retention、compaction 和消费确认有什么关系？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M01 · Kafka 4.1：Design",
          "url": "https://kafka.apache.org/41/design/design/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 383
    },
    {
      "id": "bank-Q08-019",
      "number": "Q08-019",
      "question": "Kafka 的 ZooKeeper 和 KRaft 有何区别？4.x 还需要 ZooKeeper 吗？",
      "category": "消息队列 MQ",
      "priority": "P2",
      "kind": "体系补全",
      "answer": "1. 旧 Kafka 常用 ZooKeeper 管理协调信息。\n\n2. KRaft 改由 Kafka 自己的控制器维护元数据。\n\n3. Kafka 4.x 已不再支持 ZooKeeper 模式。\n\n4. 回答时先说明项目版本，不能继续概括“Kafka 必须搭 ZooKeeper”。",
      "sourceIds": [],
      "keywords": [
        "Q08-019",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "Kafka 的 ZooKeeper 和 KRaft 有何区别？4.x 还需要 ZooKeeper 吗？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M05 · Kafka 4.1：KRaft vs ZooKeeper",
          "url": "https://kafka.apache.org/41/getting-started/zk2kraft/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 384
    },
    {
      "id": "bank-Q08-022",
      "number": "Q08-022",
      "question": "RabbitMQ durable、persistent、quorum queue 各是什么？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. durable 主要让队列等定义重启后保留。\n\n2. persistent 是消息的持久化属性。\n\n3. quorum queue 是带复制仲裁能力的队列。\n\n4. 它们作用不同，通常还要配合发布确认，才符合预期可靠性。\n\n5. 队列持久不等于所有消息自动持久。",
      "sourceIds": [],
      "keywords": [
        "Q08-022",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "RabbitMQ durable、persistent、quorum queue 各是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-022",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M04 · RabbitMQ：Quorum Queues",
          "url": "https://www.rabbitmq.com/docs/quorum-queues",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 385
    },
    {
      "id": "bank-Q08-023",
      "number": "Q08-023",
      "question": "prefetch 如何影响消费者吞吐和公平性？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. prefetch 控制可以提前交给消费者、但还没确认的消息数，不是线程数。\n\n2. 值大能减少等待，也可能让慢消费者囤积大量消息。\n\n3. 值小更利于分配和控制内存，但吞吐可能受影响。\n\n4. 需要按处理速度和下游容量测试。",
      "sourceIds": [],
      "keywords": [
        "Q08-023",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "prefetch 如何影响消费者吞吐和公平性？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "M02 · RabbitMQ：Confirms and Acknowledgements",
          "url": "https://www.rabbitmq.com/docs/confirms",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 386
    },
    {
      "id": "bank-Q08-024",
      "number": "Q08-024",
      "question": "消息格式如何演进且兼容老消费者？",
      "category": "消息队列 MQ",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 消息是长期契约，应包含事件 ID、版本、业务 key、时间和明确载荷。兼容更新优先新增可选字段，消费者容忍未知字段；改变原字段含义要特别谨慎。旧消息可能被回放，所以不能只保证新代码能读新格式。",
      "sourceIds": [],
      "keywords": [
        "Q08-024",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "消息格式如何演进且兼容老消费者？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-024",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 387
    },
    {
      "id": "bank-Q08-025",
      "number": "Q08-025",
      "question": "MQ 系统需要监控和压测哪些指标？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 监控不仅看消息条数，还要看发布失败、确认延迟、消费速度、最老消息年龄、重试死信和副本磁盘状态。压测要包含消费者暂停、重启和回放，并核对业务结果，不能只看 MQ 每秒吞吐多少。",
      "sourceIds": [],
      "keywords": [
        "Q08-025",
        "消息队列 MQ"
      ],
      "sourceFile": "08_消息队列MQ.md",
      "isNew": false,
      "originalQuestion": "MQ 系统需要监控和压测哪些指标？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 388
    },
    {
      "id": "bank-Q08-026",
      "number": "Q08-026",
      "question": "消息积压到业务过期，还要照常消费吗？",
      "answer": "1. 先看消息现在还有没有业务价值，不能一律继续或一律丢弃。过期营销通知可按规则跳过并记录；扣款、库存等关键事件要查当前事实，转补偿或异常处理。消息保留期与业务有效期是两回事。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "消息积压到业务过期，还要照常消费吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 389
    },
    {
      "id": "bank-Q08-027",
      "number": "Q08-027",
      "question": "Kafka 按 userId 分区，一个大用户把分区打热怎么办？",
      "answer": "1. 先确认是不是同一个大用户压热一个分区。\n\n2. 严格要求用户内顺序时，不能为了并行随便把它拆散。\n\n3. 可以隔离热点、批处理或优化串行路径。\n\n4. 若只要求订单内顺序，可以改更细业务 key，但迁移期顺序也要设计。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Kafka 按 userId 分区，一个大用户把分区打热怎么办？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q08-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://kafka.apache.org/43/design/design/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 390
    },
    {
      "id": "bank-LX024",
      "number": "LX024",
      "question": "入口 10000 QPS、短信平台只有 100 QPS，MQ 能解决什么、不能解决什么？",
      "answer": "1. 入口每秒来一万条，短信平台每秒只能发一百条，MQ 只能暂时排队，不能凭空补足差额。要按业务决定哪些必须发、哪些合并或过期丢弃，并给所有发送实例统一限速。监控最老消息等了多久；失败消息也不能立刻无限重试，把有限额度耗光。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "入口 10000 QPS、短信平台只有 100 QPS，MQ 能解决什么、不能解决什么？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX024",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 391
    },
    {
      "id": "bank-LX039",
      "number": "LX039",
      "question": "MQ 消费者越多一定消费越快吗？",
      "answer": "1. 不一定。消费者加多，只有任务能拆开、分区够用、下游也扛得住时才可能更快。传统 Kafka 消费组里，同一分区同一时刻由组内一个消费者负责，加到超过分区数可能只是多出闲置实例。热点 key 或数据库锁才是瓶颈时，先解决瓶颈。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "MQ 消费者越多一定消费越快吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 392
    },
    {
      "id": "bank-RM027",
      "number": "RM027",
      "question": "MQ 消息有时效要求，排队过久怎么办？",
      "answer": "1. 消息中携带业务截止时间，发布前和消费前都校验。\n\n2. 过期消息按业务规则丢弃、记录或进入补偿通道。\n\n3. 重要时效流量与大批普通消息隔离，并监控最老消息年龄。\n\n4. Broker的TTL可以辅助清理，但不等于业务一定准时处理。\n\n5. 例如，验证码有效5分钟，消费时已过期就不该照发，让用户收到无效验证码。订单自动关闭则先查当前状态，不应因为延迟就无条件关单。\n\n6. 发送成功、按时入队和按时完成是三个不同承诺。长期生产速度超过消费速度，MQ只能延缓，不会消灭积压。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "MQ 消息有时效要求，排队过久怎么办？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 393
    },
    {
      "id": "bank-Q09-029",
      "number": "Q09-029",
      "question": "GET 和 POST 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "1. GET 用于获取资源，通常是查询；POST 用于提交数据，可能新增或修改资源。\n\n2. GET 的参数通常放在 URL 中；POST 的数据通常放在请求体中，也可以带 URL 参数。\n\n3. GET 按语义应当幂等，重复请求不应产生额外的资源修改；POST 默认不保证幂等，需要业务另外处理。\n\n4. GET 常用于缓存；POST 满足协议条件时也可以缓存，并非绝对不能。\n\n5. POST 不天然比 GET 更保密，敏感数据都需要 HTTPS。请求大小由客户端和服务器等限制，不是 GET 固定 2 KB、POST 无限大。",
      "sourceIds": [
        "REV20-HTTP"
      ],
      "keywords": [
        "Q09-029",
        "计算机网络",
        "基础补充",
        "本次面试",
        "面试复盘",
        "基础起步",
        "GET",
        "POST"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-010",
          "bank-Q09-014"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "N03 · RFC 8446：TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/html/rfc8446",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": true,
      "isStarter": true,
      "studyOrder": 394,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-003",
      "number": "Q09-003",
      "question": "TCP 与 UDP 的区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. TCP 面向连接，提供可靠、有序的字节流，但不保留应用消息边界。\n\n2. UDP 无连接，保留报文边界，但不保证送达和顺序，协议头部较小。\n\n3. TCP 需要连接管理和可靠性控制；UDP 适合允许丢失，或由上层自行实现可靠性的应用。\n\n4. UDP 不等于应用一定不可靠，上层协议仍可以补充可靠性机制。",
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
        "货拉拉",
        "基础起步",
        "TCP",
        "UDP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 395,
      "originalQuestion": "TCP 与 UDP 的区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-010",
      "number": "Q09-010",
      "question": "HTTP 常见方法与幂等性怎么理解？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. GET 获取资源，HEAD 获取响应头而不返回响应内容，两者具有幂等语义。\n\n2. POST 提交数据给资源处理，默认不保证幂等；业务可以另外实现去重。\n\n3. PUT 用于创建或整体替换目标资源，DELETE 用于删除目标资源，两者具有幂等语义。\n\n4. PATCH 用于部分修改，是否幂等取决于具体补丁语义。\n\n5. 幂等指重复相同请求的预期资源效果相同，不要求每次返回的状态码都一样。",
      "sourceIds": [],
      "keywords": [
        "Q09-010",
        "计算机网络",
        "基础起步",
        "HTTP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N02 · RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 396,
      "originalQuestion": "HTTP 常见方法与幂等性怎么理解？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-011",
      "number": "Q09-011",
      "question": "常见 HTTP 状态码是什么意思？401/403、502/504 怎样区分？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 200 表示成功，201 表示已创建，204 表示成功但没有响应内容。\n\n2. 301 是永久重定向，302 是临时重定向，304 表示协商缓存中的资源未修改。\n\n3. 400 是请求有误，404 是资源未找到，405 是请求方法不支持。\n\n4. 401 表示缺少有效认证，403 表示拒绝访问，两者不是一回事。\n\n5. 409 是资源状态冲突，415 是媒体类型不支持，429 是请求过多。\n\n6. 500 是服务器内部错误，502 是网关收到无效上游响应，503 是服务暂不可用，504 是等待上游响应超时。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q09-011",
        "计算机网络",
        "腾讯",
        "基础起步",
        "HTTP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "concept",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N02 · RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 397,
      "originalQuestion": "常见 HTTP 状态码是什么意思？401/403、502/504 怎样区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-017",
      "number": "Q09-017",
      "question": "Cookie、Session、Token、JWT 的关系？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Cookie 是浏览器保存并按规则随请求携带的数据。\n\n2. Session 是服务端保存的会话状态，客户端通常通过 Cookie 保存会话 ID。\n\n3. Token 是身份或授权凭证，请求时由客户端携带；JWT 是一种令牌格式，不等于所有 Token。\n\n4. JWT 的载荷通常可以解码读取，签名不等于加密。验签通过后还要检查有效期和资源访问权限。",
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
        "拼多多",
        "基础起步",
        "Cookie",
        "Session",
        "Token",
        "JWT"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 398,
      "originalQuestion": "Cookie、Session、Token、JWT 的关系？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-030",
      "number": "Q09-030",
      "question": "HTTP 是什么？为什么说 HTTP 是无状态的？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. HTTP： 应用层的请求—响应协议，用于访问资源和传输表示。\n\n2. 无状态： 协议语义不要求服务端自动保存前后请求的会话关系。\n\n3. 保存登录态： 可通过 Cookie、Session、Token 等机制额外实现。\n\n4. 无状态不等于不能登录，也不等于每个请求必须新建 TCP 连接。",
      "sourceIds": [
        "REV20-HTTP"
      ],
      "keywords": [
        "Q09-030",
        "计算机网络",
        "基础补充",
        "基础起步",
        "HTTP"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-010",
          "bank-Q09-017",
          "bank-Q09-019"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 399,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-031",
      "number": "Q09-031",
      "question": "HTTP 请求和响应通常由哪些部分组成？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 按 HTTP/1.1 的文本形式理解：\n\n2. 请求行： 请求方法、请求目标、协议版本。\n\n3. 请求头： Host、Content-Type、Authorization 等元信息。\n\n4. 请求体： 按请求语义携带数据，例如 JSON。\n\n5. 响应： 状态行、响应头，以及可选响应内容。\n\n6. HTTP/2、HTTP/3 使用不同的帧和字段表示，不能把 HTTP/1.1 文本格式当成所有版本的线缆格式。",
      "sourceIds": [
        "REV20-HTTP"
      ],
      "keywords": [
        "Q09-031",
        "计算机网络",
        "基础补充",
        "基础起步",
        "HTTP"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-010",
          "bank-Q09-011",
          "bank-Q09-013"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N05 · RFC 9114：HTTP/3",
          "url": "https://www.rfc-editor.org/rfc/rfc9114.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 400,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-032",
      "number": "Q09-032",
      "question": "HTTP 和 HTTPS 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. HTTP： 未加 TLS 的 HTTP 通信不提供传输层加密保护。\n\n2. HTTPS： 使用 TLS 保护 HTTP 通信。\n\n3. 主要保障： 传输机密性、完整性，以及基于证书的服务端身份验证。\n\n4. HTTPS 不替代业务鉴权、输入校验和数据库权限；服务端内部日志也仍需避免泄露敏感信息。",
      "sourceIds": [],
      "keywords": [
        "Q09-032",
        "计算机网络",
        "基础补充",
        "基础起步",
        "HTTP",
        "HTTPS"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "compare",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-014",
          "bank-Q09-015"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "N03 · RFC 8446：TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/html/rfc8446",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 401,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-033",
      "number": "Q09-033",
      "question": "什么是接口幂等？GET、POST 和业务幂等有什么关系？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 幂等：重复执行同一请求，产生的预期业务效果与执行一次相同。\n\n2. HTTP 语义： GET、PUT、DELETE 等有幂等语义；POST 默认不保证。\n\n3. 业务实现： POST 也可以通过幂等键、唯一约束等避免重复副作用。\n\n4. 常见场景： 重复提交订单、重复支付回调、消息重试。\n\n5. 幂等不要求每次状态码或返回文本完全一样；不能只靠前端禁用按钮。",
      "sourceIds": [],
      "keywords": [
        "Q09-033",
        "计算机网络",
        "基础补充",
        "基础起步",
        "GET",
        "POST"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-010",
          "bank-Q11-010",
          "bank-Q11-011"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "N02 · RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 402,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-035",
      "number": "Q09-035",
      "question": "Content-Type 有什么作用？常见值有哪些？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Content-Type 声明消息内容的媒体类型，帮助接收方选择解析方式。\n\n2. application/json 表示 JSON；application/x-www-form-urlencoded 常用于表单键值。\n\n3. multipart/form-data 常用于文件和字段组合上传；text/plain 表示纯文本。\n\n4. 实际内容、格式和类型不匹配，可能导致参数解析失败或 415 错误。",
      "sourceIds": [
        "REV20-REQBODY",
        "REV20-HTTP"
      ],
      "keywords": [
        "Q09-035",
        "计算机网络",
        "基础补充",
        "基础起步",
        "Content",
        "Type"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-023"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "Spring MVC：@RequestBody",
          "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        },
        {
          "title": "RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 403,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-001",
      "number": "Q09-001",
      "question": "输入 URL 到页面或接口返回发生什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 输入 URL 后，通常先查 DNS 找地址，按需要建立连接，HTTPS 再做 TLS 握手，然后发 HTTP 请求。\n\n2. 请求经过代理、网关和应用处理后返回，浏览器再解析渲染。\n\n3. 缓存和连接可能复用，HTTP/3 也不走普通 TCP 握手路线。",
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
        "即时设计",
        "URL"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 404,
      "originalQuestion": "输入 URL 到页面或接口返回发生什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-002",
      "number": "Q09-002",
      "question": "OSI 七层与 TCP/IP 怎么对应？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. OSI 七层从下往上是物理、链路、网络、传输、会话、表示、应用。\n\n2. TCP/IP 通常简化成链路、网际、传输、应用。\n\n3. 记核心职责：IP 找网络地址，TCP/UDP 做传输，HTTP/DNS 定义应用交互，端口区分传输端点。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q09-002",
        "计算机网络",
        "BIGO",
        "OSI",
        "TCP",
        "IP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 405,
      "originalQuestion": "OSI 七层与 TCP/IP 怎么对应？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-004",
      "number": "Q09-004",
      "question": "TCP 为什么三次握手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 客户端 → 服务端： 发送 SYN，发起连接并同步初始序列号。\n\n2. 服务端 → 客户端： 返回 SYN + ACK，确认客户端并同步自己的序列号。\n\n3. 客户端 → 服务端： 返回 ACK，确认服务端的序列号。\n\n4. 为什么是三次： 双方要完成序列号确认，并避免历史连接请求轻易建立无效连接。\n\n5. SYN → SYN+ACK → ACK。",
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
        "拼多多",
        "TCP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 406,
      "originalQuestion": "TCP 为什么三次握手？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-005",
      "number": "Q09-005",
      "question": "TCP 为什么通常四次挥手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. TCP 的两个发送方向可以独立关闭。\n\n2. 一方 FIN 表示“我不再发”，对方先 ACK。\n\n3. 对方还有数据就继续发，结束后再 FIN，最后得到 ACK，因此通常四次。\n\n4. 若合适，ACK 和 FIN 也能合并。\n\n5. A 说“我的话说完了”，不代表 B 也说完了，所以确认对方结束和宣布自己结束可能是两步。",
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
        "BIGO",
        "TCP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 407,
      "originalQuestion": "TCP 为什么通常四次挥手？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-006",
      "number": "Q09-006",
      "question": "TIME_WAIT 与 CLOSE_WAIT 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. TIME_WAIT 通常出现在主动关闭方，用来处理最后 ACK 丢失和旧报文影响。\n\n2. CLOSE_WAIT 表示已收到对方 FIN，但本地应用还没关闭。\n\n3. 大量 CLOSE_WAIT 先查连接有没有正确关，大量 TIME_WAIT 先看短连接和端口压力。",
      "sourceIds": [
        "N023",
        "X02",
        "NI011"
      ],
      "keywords": [
        "Q09-006",
        "计算机网络",
        "BIGO",
        "拼多多",
        "TIME_WAIT",
        "CLOSE_WAIT"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 408,
      "originalQuestion": "TIME_WAIT 与 CLOSE_WAIT 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-007",
      "number": "Q09-007",
      "question": "TCP 怎么保证可靠和有序？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. TCP 用序号、确认、校验和、重传、重排和去重，尽量保证字节按序可靠到达。\n\n2. 但“字节到达”不等于“业务已经成功”，网络超时也不等于服务器没做。\n\n3. 应用仍需幂等和结果查询。\n\n4. 订单已保存，只是响应在路上丢了；客户端重试可能重复下单，不能指望 TCP 自动替业务去重。",
      "sourceIds": [
        "N003",
        "N007"
      ],
      "keywords": [
        "Q09-007",
        "计算机网络",
        "字节跳动",
        "腾讯",
        "TCP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 409,
      "originalQuestion": "TCP 怎么保证可靠和有序？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-008",
      "number": "Q09-008",
      "question": "TCP 滑动窗口、流量控制、拥塞控制分别防什么问题？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 滑动窗口让发送方不用每发一点就等一次确认。\n\n2. 流量控制照顾接收方，别让对方缓冲区装不下。\n\n3. 拥塞控制照顾网络，别把传输路径塞满。\n\n4. 实际发送量要同时考虑接收窗口和拥塞窗口。",
      "sourceIds": [
        "N032",
        "NI015"
      ],
      "keywords": [
        "Q09-008",
        "计算机网络",
        "招银云创",
        "腾讯",
        "TCP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 410,
      "originalQuestion": "TCP 滑动窗口、流量控制、拥塞控制分别防什么问题？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-009",
      "number": "Q09-009",
      "question": "TCP 粘包和拆包是什么？怎么解决？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. TCP 传的是连续字节，没有“每次 write 就对应一次 read”的保证。\n\n2. 一次读取可能只有半条消息，也可能包含多条。\n\n3. 应用必须定义消息边界，例如固定长度、分隔符或长度头，并缓存不完整部分。\n\n4. 发送 \"hello\" 和 \"world\" 两次，接收方可能一次读到 \"helloworld\"，也可能分成多次；这是字节流的正常行为。",
      "sourceIds": [
        "N055"
      ],
      "keywords": [
        "Q09-009",
        "计算机网络",
        "网易",
        "TCP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N01 · RFC 9293：TCP",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 411,
      "originalQuestion": "TCP 粘包和拆包是什么？怎么解决？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-012",
      "number": "Q09-012",
      "question": "HTTP 强缓存与协商缓存是什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 强缓存是在有效期内直接用本地副本。\n\n2. 协商缓存是先问服务器“这份还能用吗”，没变则返回 304。\n\n3. 常用 Cache-Control、ETag 和 Last-Modified。\n\n4. no-cache 不是不许保存，而是复用前要验证。\n\n5. no-store 才是不应存储。",
      "sourceIds": [],
      "keywords": [
        "Q09-012",
        "计算机网络",
        "HTTP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "concept",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N04 · RFC 9111：HTTP Caching",
          "url": "https://www.rfc-editor.org/rfc/rfc9111.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 412,
      "originalQuestion": "HTTP 强缓存与协商缓存是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-013",
      "number": "Q09-013",
      "question": "HTTP/1.1、HTTP/2、HTTP/3 有何变化？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. HTTP/1.1 可以复用连接。\n\n2. HTTP/2 加入二进制分帧、多路复用和头压缩，但底层 TCP 丢包仍会影响多个流。\n\n3. HTTP/3 基于 QUIC，减少这类跨流传输阻塞。\n\n4. 协议更先进，不代表数据库和业务代码就自动变快。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q09-013",
        "计算机网络",
        "腾讯",
        "HTTP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N05 · RFC 9114：HTTP/3",
          "url": "https://www.rfc-editor.org/rfc/rfc9114.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 413,
      "originalQuestion": "HTTP/1.1、HTTP/2、HTTP/3 有何变化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-014",
      "number": "Q09-014",
      "question": "HTTPS 与 TLS 保护什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. HTTPS 是 HTTP 加 TLS。\n\n2. TLS 主要保护传输的机密性、完整性和身份认证：证书帮助确认身份，握手建立密钥，正文通常用对称加密。\n\n3. 不是所有数据都直接用服务器公钥加密，也不保证网站业务本身可靠。",
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
        "招银网络科技",
        "HTTPS",
        "TLS"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "N03 · RFC 8446：TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/html/rfc8446",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 414,
      "originalQuestion": "HTTPS 与 TLS 保护什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-016",
      "number": "Q09-016",
      "question": "DNS、CDN、负载均衡各起什么作用？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. DNS 负责把域名解析成地址等记录，CDN 把内容放到更靠近用户的节点，负载均衡把请求分配给后端实例。\n\n2. 四层常按传输连接信息转发，七层能按 HTTP 路径或请求头路由。\n\n3. DNS 改动还受缓存影响。",
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
        "招银网络科技",
        "DNS",
        "CDN"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 415,
      "originalQuestion": "DNS、CDN、负载均衡各起什么作用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-018",
      "number": "Q09-018",
      "question": "CORS、CSRF、XSS 分别是什么？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "1. CORS 管浏览器是否允许网页跨源读取响应。\n\n2. CSRF 是借浏览器自动带凭证来诱导操作。\n\n3. XSS 是把不可信内容当脚本执行。\n\n4. 防法分别涉及跨源规则、CSRF token/SameSite、输出编码等，不能用“允许跨域”一起解决。",
      "sourceIds": [
        "N038"
      ],
      "keywords": [
        "Q09-018",
        "计算机网络",
        "百度",
        "CORS",
        "CSRF",
        "XSS"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 416,
      "originalQuestion": "CORS、CSRF、XSS 分别是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-020",
      "number": "Q09-020",
      "question": "长轮询、SSE 和 WebSocket 有什么区别？流式回答怎么选？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 长轮询由客户端发起请求，服务端等到事件或超时后响应，客户端收到后需要再次请求。\n\n2. SSE 用于服务端向客户端单向推送文本事件，适合逐步返回模型答案。\n\n3. WebSocket 支持持续双向通信，适合聊天、实时协作等场景。\n\n4. 主要是单向推送时可以使用 SSE；需要频繁双向交互时可以考虑 WebSocket。",
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
        "深轻科技",
        "SSE",
        "WebSocket"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q09-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N06 · WHATWG：Server-sent Events",
          "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 417,
      "originalQuestion": "长轮询、SSE 和 WebSocket 有什么区别？流式回答怎么选？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-021",
      "number": "Q09-021",
      "question": "一次 RPC 与普通 HTTP 调用有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. RPC 是“调用远程服务方法”的交互方式，HTTP 是一种应用层协议，RPC 可以基于 HTTP，所以二者不是对立选项。\n\n2. RPC 还需要契约、序列化、超时和服务治理。\n\n3. 网络调用必须处理结果未知和部分失败。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q09-021",
        "计算机网络",
        "得物",
        "RPC",
        "HTTP"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 418,
      "originalQuestion": "一次 RPC 与普通 HTTP 调用有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-024",
      "number": "Q09-024",
      "question": "连接失败、连接超时、读超时怎么排查？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 连接拒绝，先查服务是否监听正确地址和端口。\n\n2. 连接超时，查网络、路由、防火墙及负载。\n\n3. 读超时，查连接建立后对方处理或传输为什么慢。\n\n4. 结合日志和分阶段耗时，不要只用 ping 通就断言接口正常。",
      "sourceIds": [
        "N036"
      ],
      "keywords": [
        "Q09-024",
        "计算机网络",
        "腾讯"
      ],
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```bash\ncurl -o /dev/null -sS --connect-timeout 3 --max-time 10 \\\n  -w 'dns=%{time_namelookup} connect=%{time_connect} tls=%{time_appconnect} first_byte=%{time_starttransfer} total=%{time_total}\\n' \\\n  https://example.com\n```\n\n这些多数是**从请求开始算的累计时间点**，不是互相独立的阶段时长。粗略阶段成本需相减，并考虑连接复用、代理、重定向与协议差异。目标域名是演示入口，实际排错替换成已授权的业务接口。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 419,
      "originalQuestion": "连接失败、连接超时、读超时怎么排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-025",
      "number": "Q09-025",
      "question": "重试、超时、熔断怎么配合？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先给整次请求设总时间预算，再分配各层超时。\n\n2. 只对可恢复且满足幂等要求的失败做有限重试。\n\n3. 连续异常时熔断，恢复时小流量试探。\n\n4. 各层都重试会放大流量，必须明确由哪一层负责。\n\n5. 三层每层最多尝试 3 次，最坏可能放大成 27 次下游调用，不是简单多了 3 次。",
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
      "sourceFile": "09_计算机网络.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q09-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 420,
      "originalQuestion": "重试、超时、熔断怎么配合？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-034",
      "number": "Q09-034",
      "question": "什么是跨域？后端通常怎么处理？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 同源： 浏览器按协议、主机和端口判断是否同源。\n\n2. 跨域问题： 跨源访问受到浏览器同源策略限制，并非两个服务器之间不能通信。\n\n3. 常见处理： 后端按受信任来源配置 CORS，或通过同源网关/反向代理访问。\n\n4. 预检： 某些请求会先发送 OPTIONS 检查是否允许。\n\n5. 不能不加判断地反射任意 Origin；CORS 也不是用户权限校验机制。",
      "sourceIds": [],
      "keywords": [
        "Q09-034",
        "计算机网络",
        "基础补充"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-018"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 421,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q09-015",
      "number": "Q09-015",
      "question": "TLS 握手、证书链与前向保密怎么解释？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. TLS 握手要协商参数、验证证书和域名、完成密钥交换，之后用会话密钥通信。临时密钥交换可提供前向保密，避免长期私钥后来泄露就直接解开过去会话。TLS 1.3 与旧版流程不同，0-RTT 还要考虑重放风险。",
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
      "sourceFile": "09_计算机网络.md",
      "isNew": false,
      "originalQuestion": "TLS 握手、证书链与前向保密怎么解释？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "N03 · RFC 8446：TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/html/rfc8446",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 422
    },
    {
      "id": "bank-Q09-019",
      "number": "Q09-019",
      "question": "HTTP Keep-Alive 与 TCP keepalive 是一回事吗？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. HTTP Keep-Alive 是复用连接来处理多个请求，省去重复建连；TCP keepalive 是探测空闲连接是否还活着。应用心跳又是另一层，能检查业务是否正常响应。三者不能混为同一个超时开关。",
      "sourceIds": [],
      "keywords": [
        "Q09-019",
        "计算机网络"
      ],
      "sourceFile": "09_计算机网络.md",
      "isNew": false,
      "originalQuestion": "HTTP Keep-Alive 与 TCP keepalive 是一回事吗？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 423
    },
    {
      "id": "bank-Q09-022",
      "number": "Q09-022",
      "question": "Netty 的 Reactor 模型是什么？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Reactor 用事件循环等 IO 就绪，再调用相应处理逻辑。\n\n2. Netty 常由 Boss 接连接、Worker 处理连接事件。\n\n3. 一个 EventLoop 管多条连接，因此不能在上面长时间查数据库或做重计算，否则会一起拖慢其他连接。",
      "sourceIds": [
        "N055"
      ],
      "keywords": [
        "Q09-022",
        "计算机网络",
        "网易"
      ],
      "sourceFile": "09_计算机网络.md",
      "isNew": false,
      "originalQuestion": "Netty 的 Reactor 模型是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-022",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "N07 · Linux man-pages：epoll(7)",
          "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 424
    },
    {
      "id": "bank-Q09-023",
      "number": "Q09-023",
      "question": "零拷贝是什么？sendfile 与 mmap 怎么理解？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 零拷贝通常是尽量减少用户态与内核态之间的数据复制，不是物理上完全没有复制。sendfile 可用于文件到 socket 的适用传输路径，mmap 是把文件映射到地址空间。是否获益还要看 TLS、平台和具体实现。",
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
      "sourceFile": "09_计算机网络.md",
      "isNew": false,
      "originalQuestion": "零拷贝是什么？sendfile 与 mmap 怎么理解？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 425
    },
    {
      "id": "bank-Q09-026",
      "number": "Q09-026",
      "question": "TCP 第三次握手 ACK 丢失后，两端是什么状态？",
      "answer": "1. 客户端发出第三次 ACK 后通常已进入 ESTABLISHED。\n\n2. 服务端没收到时仍可能在 SYN-RECEIVED，并重发 SYN+ACK。\n\n3. 客户端再次确认，后续带有效 ACK 的数据也可能完成握手。\n\n4. 不是第三次丢包双方就立即断开。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "TCP 第三次握手 ACK 丢失后，两端是什么状态？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 426
    },
    {
      "id": "bank-Q09-027",
      "number": "Q09-027",
      "question": "服务器一个端口最多只能接 65535 个客户端吗？",
      "answer": "1. 不是。TCP 连接通过本地和远端的 IP、端口等组合区分，同一服务器监听端口可以接受大量不同连接。实际限制常是文件描述符、内存和处理能力；客户端连接同一目标时，源端口数量才可能先成为瓶颈。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "服务器一个端口最多只能接 65535 个客户端吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 427
    },
    {
      "id": "bank-Q09-028",
      "number": "Q09-028",
      "question": "TCP 校验和能防止攻击者篡改数据吗？",
      "answer": "1. 不能。TCP 校验和主要发现偶然传输错误，不是密码学认证；攻击者能改报文时也可能重算校验和。防恶意篡改和认证身份要靠 TLS 等安全机制。可靠传输和安全传输不是同一个问题。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "TCP 校验和能防止攻击者篡改数据吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q09-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://datatracker.ietf.org/doc/html/rfc9293",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 428
    },
    {
      "id": "bank-LX014",
      "number": "LX014",
      "question": "授权码登录怎样换取令牌？JWT 验证成功是否就能访问所有资源？",
      "answer": "1. 授权码是登录授权流程里的“一次性交换凭证”，通常要由后端拿它换令牌。\n\n2. 流程中校验 state、回调地址，并按客户端类型使用 PKCE。\n\n3. 收到 JWT 后还要检查签名、签发方、接收方和有效期。\n\n4. 拿到令牌不代表能访问所有订单，资源归属仍要单独检查。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "授权码登录怎样换取令牌？JWT 验证成功是否就能访问所有资源？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX014",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 429
    },
    {
      "id": "bank-UX008",
      "number": "UX008",
      "question": "SSE 的一次网络读取，为什么不一定是一条完整消息？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "1. 网络把数据分批送来，分批边界不等于 SSE 事件边界：一批可能只有半条，也可能包含好几条。SSE 按文本行解析，用空行结束一个事件。自己处理流时，要先正确解码，再缓存未完成的内容，按协议拼出完整事件后处理。\n\n2. 例如，一个事件是 data: {\"text\":\"你好\"} 后接空行；网络可能先送到 data: {\"te，下一批才送剩下的部分。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "SSE 的一次网络读取，为什么不一定是一条完整消息？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "WHATWG Server-sent Events",
          "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 430
    },
    {
      "id": "bank-RM033",
      "number": "RM033",
      "question": "公网传输数据必须有 HTTP 头吗？TCP 握手也有 HTTP 头吗？",
      "answer": "1. 不必。IP、TCP、HTTP分属不同层。网络传输可以承载DNS、SSH、数据库协议或自定义协议，不要求应用层一定是HTTP。TCP握手用TCP首部中的标志、序号等建立连接，不靠HTTP请求头。\n\n2. 例如，浏览器访问HTTPS时，先有网络和传输连接，再按协议完成TLS及HTTP交换；SSH能跨公网连服务器，但不是通过HTTP头识别用户命令。\n\n3. 只有你声称这段数据是某种HTTP消息时，才需要符合该HTTP版本的格式。不要把某个公司的业务使用HTTP，误说成所有互联网通信都必须HTTP。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "公网传输数据必须有 HTTP 头吗？TCP 握手也有 HTTP 头吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM033",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 431
    },
    {
      "id": "bank-RM034",
      "number": "RM034",
      "question": "哈希、加密、数字签名各解决什么问题？",
      "answer": "1. 哈希把数据映射为摘要，用于校验或索引等，本身通常不保密；加密用密钥保护内容，授权方可解密；数字签名用私钥签署、公钥验证，用来验证来源与完整性。普通哈希不能证明发送者身份，因为攻击者也能重算。\n\n2. 例如，下载文件比对可信渠道的摘要是在查完整性；HTTPS会话保护传输；软件包签名帮助验证发布者。签名不是“用私钥把整个文件加密”。\n\n3. 签名验证还依赖可信公钥与正确上下文。密码存储另用专用慢哈希；不要因为“不可逆”就认为任何哈希都适合存密码。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "哈希、加密、数字签名各解决什么问题？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "OWASP Cryptographic Storage",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "OWASP Password Storage",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 432
    },
    {
      "id": "bank-Q10-018",
      "number": "Q10-018",
      "question": "排查端口占用与网络连接常用什么命令？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. `ss -lntp` 查看监听端口和对应进程；`lsof -i :8080` 查看指定端口。\n\n2. `ps -ef`、`ps aux` 查看进程；`top` 查看资源占用。\n\n3. `curl -i http://localhost:8080/health` 可以测试 HTTP 接口并查看响应头。\n\n4. 进程信息能否显示取决于权限和环境。停止进程前先确认 PID 和用途。",
      "sourceIds": [],
      "keywords": [
        "Q10-018",
        "操作系统 / Linux",
        "基础起步"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q10-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 433,
      "originalQuestion": "排查端口占用与网络连接常用什么命令？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-019",
      "number": "Q10-019",
      "question": "如何看日志并定位某一次失败请求？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 看最近日志： `tail -n 100 app.log`。\n\n2. 实时跟踪： `tail -f app.log`。\n\n3. 定位关键字： `grep -n 'ERROR' app.log`。\n\n4. 查看前后文： `grep -n -C 5 'traceId值' app.log`。\n\n5. 串起链路： 按时间、请求 ID、业务 ID 找到输入、调用和异常原因。\n\n6. 避免打印密码、令牌和客户隐私；别只看到最后一行报错就断定根因。",
      "sourceIds": [],
      "keywords": [
        "Q10-019",
        "操作系统 / Linux",
        "基础起步"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q10-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 434,
      "originalQuestion": "如何看日志并定位某一次失败请求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-028",
      "number": "Q10-028",
      "question": "Linux 中查看目录、切换目录、查看文件的常用命令有哪些？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. pwd 查看当前目录；ls 列出文件，ls -al 查看包含隐藏文件的详细信息。\n\n2. `cd 目录` 切换目录，`cd ..` 返回上级；`mkdir 目录` 新建目录。\n\n3. `cat 文件` 查看短文件，`less 文件` 分页查看。\n\n4. head 查看文件开头，tail 查看文件末尾。修改或删除前先确认路径。",
      "sourceIds": [],
      "keywords": [
        "Q10-028",
        "操作系统 / Linux",
        "基础补充",
        "基础起步",
        "Linux"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q10-019",
          "bank-Q10-020"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 435,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-029",
      "number": "Q10-029",
      "question": "Git 的 add、commit、push、pull 分别做什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. add： 把当前修改加入暂存区。\n\n2. commit： 把暂存内容记录为本地提交。\n\n3. push： 把本地提交推送到远端分支。\n\n4. pull： 获取远端更新并按配置合并或变基。\n\n5. 改文件 → add → commit → push；pull 不等于“无条件覆盖本地”。\n\n6. 冲突需要检查并解决，不要随意丢弃他人的修改。",
      "sourceIds": [
        "REV20-GIT"
      ],
      "keywords": [
        "Q10-029",
        "操作系统 / Linux",
        "基础补充",
        "基础起步",
        "Git",
        "add",
        "commit",
        "push",
        "pull"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-LX020"
        ],
        "reviewedOn": "2026-09-20",
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://git-scm.com/docs/git-revert",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Git：命令参考",
          "url": "https://git-scm.com/docs/git",
          "origin": "本轮官方文档核对",
          "reviewedOn": "2026-09-20"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 436,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-030",
      "number": "Q10-030",
      "question": "Maven 是什么？pom.xml 有什么作用？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. Maven： Java 项目常用的构建与依赖管理工具。\n\n2. pom.xml： 描述项目坐标、依赖、插件与构建配置。\n\n3. 依赖管理： 解析直接依赖及传递依赖，协调版本。\n\n4. 常见命令： `mvn test` 测试，`mvn package` 打包，`mvn dependency:tree` 查看依赖树。\n\n5. dependencyManagement 管理版本约束，不是声明后就自动引入所有依赖。",
      "sourceIds": [],
      "keywords": [
        "Q10-030",
        "操作系统 / Linux",
        "基础补充",
        "基础起步",
        "Maven",
        "pom",
        "xml"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q05-036"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "S10 · Maven：Dependency Mechanism",
          "url": "https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 437,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-LX020",
      "number": "LX020",
      "question": "Git 回退用 revert 还是 reset？",
      "answer": "1. revert 是“新增一次反向提交”，保留之前的历史，适合已经共享出去的提交。\n\n2. reset 是“把当前分支指针挪回去”，适合整理本地历史。\n\n3. 不同模式还会影响暂存区和工作区。\n\n4. 共享分支通常优先 revert，尤其不要不看状态就 reset --hard。",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "常见应用",
      "sourceIds": [
        "R012"
      ],
      "keywords": [
        "LX020",
        "操作系统 / Linux",
        "益普科技",
        "R012",
        "Git",
        "revert",
        "reset"
      ],
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "originalKind": "面经考点改写 / 延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-LX020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "官方文档",
          "url": "https://git-scm.com/docs/git-revert",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 438,
      "originalQuestion": "Git 回退用 revert 还是 reset？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-001",
      "number": "Q10-001",
      "question": "用户态与内核态为什么分开？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 用户态是普通应用运行的受限环境，内核态可以操作内存管理、设备等特权资源。\n\n2. 应用通过系统调用受控地请求内核服务。\n\n3. 这样能隔离错误和保护系统，但切换和数据处理也会有成本。",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q10-001",
        "操作系统 / Linux",
        "拼多多"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 439,
      "originalQuestion": "用户态与内核态为什么分开？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-002",
      "number": "Q10-002",
      "question": "进程与线程共享哪些资源？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 同一进程里的线程通常共享地址空间、堆和打开的文件描述符。\n\n2. 每个线程有自己的栈、寄存器和执行状态。\n\n3. 不同进程通常有独立地址空间，通信要靠 IPC。\n\n4. 线程轻一些，但共享状态出错容易影响整个进程。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q10-002",
        "操作系统 / Linux",
        "拼多多"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "L01 · Linux man-pages：pthreads(7)",
          "url": "https://man7.org/linux/man-pages/man7/pthreads.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 440,
      "originalQuestion": "进程与线程共享哪些资源？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-003",
      "number": "Q10-003",
      "question": "上下文切换保存什么？什么时候代价高？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 上下文切换是让出 CPU 前保存当前执行状态，再恢复另一个任务的状态。\n\n2. 要保存寄存器、栈指针等，进程切换还可能影响地址转换缓存。\n\n3. 切换太频繁会耗 CPU 和破坏缓存命中，所以线程数并非越多越好。",
      "sourceIds": [
        "N039"
      ],
      "keywords": [
        "Q10-003",
        "操作系统 / Linux",
        "京东"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 441,
      "originalQuestion": "上下文切换保存什么？什么时候代价高？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-004",
      "number": "Q10-004",
      "question": "常见 IPC 方式与选择？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "1. 进程通信常见有管道、消息队列、共享内存、信号和 socket。\n\n2. 共享内存少复制，但必须自己协调并发。\n\n3. socket 可以同机或跨机器。\n\n4. 信号适合有限通知。选型先看消息边界、数据规模和是否跨主机。",
      "sourceIds": [
        "N003",
        "NI015"
      ],
      "keywords": [
        "Q10-004",
        "操作系统 / Linux",
        "字节跳动",
        "腾讯",
        "IPC"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 442,
      "originalQuestion": "常见 IPC 方式与选择？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-006",
      "number": "Q10-006",
      "question": "虚拟内存为什么存在？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 虚拟内存让每个进程看到自己的地址空间，操作系统再把虚拟地址映射到物理内存或其他后备存储。\n\n2. 它便于隔离和按需分配。\n\n3. 申请了很大地址范围，不代表已经占用同样多物理内存，要看驻留量等指标。",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q10-006",
        "操作系统 / Linux",
        "腾讯"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 443,
      "originalQuestion": "虚拟内存为什么存在？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-010",
      "number": "Q10-010",
      "question": "阻塞 IO、非阻塞 IO、IO 多路复用如何区分？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 阻塞 IO 没数据时可以等着。\n\n2. 非阻塞 IO 没数据时立即返回，让你稍后重试。\n\n3. IO 多路复用让一个线程同时等多个描述符，哪个就绪就处理哪个。\n\n4. 就绪通知不是读取已经自动完成，应用还得真正 read/write。",
      "sourceIds": [
        "N023"
      ],
      "keywords": [
        "Q10-010",
        "操作系统 / Linux",
        "BIGO",
        "IO"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "L02 · Linux man-pages：epoll(7)",
          "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 444,
      "originalQuestion": "阻塞 IO、非阻塞 IO、IO 多路复用如何区分？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-011",
      "number": "Q10-011",
      "question": "select、poll、epoll 的差异？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. select、poll 每轮都要处理传入的关注集合。\n\n2. epoll 在内核维护关注集合，并返回就绪事件，适合连接很多而活跃较少的情况。\n\n3. epoll 不是在任何场景都 O(1)、都最快，实际工作量还取决于活跃事件数。",
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
        "BIGO",
        "select",
        "poll",
        "epoll"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "L02 · Linux man-pages：epoll(7)",
          "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 445,
      "originalQuestion": "select、poll、epoll 的差异？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-014",
      "number": "Q10-014",
      "question": "文件删除后磁盘空间为什么没释放？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 文件被删掉后，如果进程还开着它，磁盘空间可能要等最后一个引用关闭才释放。\n\n2. 日志文件最常见。可用 lsof +L1 查谁持有，再让应用正确关闭或重新打开日志，不是多执行几次 rm。\n\n3. 你删了大日志文件，但 Java 进程还在往原打开句柄写，df 看到的空间就可能没有立刻回来。",
      "sourceIds": [],
      "keywords": [
        "Q10-014",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 446,
      "originalQuestion": "文件删除后磁盘空间为什么没释放？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-017",
      "number": "Q10-017",
      "question": "CPU 使用率、load average、iowait 分别反映什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. CPU 使用率看处理器多忙。\n\n2. load average 看可运行和部分不可中断等待任务的负担。\n\n3. iowait 反映某些 IO 等待相关时间。\n\n4. 高 load 不等于 CPU 一定满，可能许多任务在等磁盘。\n\n5. 必须结合多项指标判断。",
      "sourceIds": [],
      "keywords": [
        "Q10-017",
        "操作系统 / Linux",
        "CPU",
        "load",
        "average",
        "iowait"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 447,
      "originalQuestion": "CPU 使用率、load average、iowait 分别反映什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-020",
      "number": "Q10-020",
      "question": "磁盘满了从哪里查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 磁盘满先看 df -h 的容量，再看 df -i 的 inode。\n\n2. 用 du 找大目录，检查日志、临时文件和已删除但仍打开的文件。\n\n3. 先确认哪些能清理并保留故障证据，不要盲删数据库或全部日志。",
      "sourceIds": [],
      "keywords": [
        "Q10-020",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 448,
      "originalQuestion": "磁盘满了从哪里查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-021",
      "number": "Q10-021",
      "question": "权限 755、644、umask 分别表示什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. Linux 权限分为属主、所属组和其他用户三组，每组中读 r=4、写 w=2、执行 x=1。\n\n2. 755 表示属主可读、写、执行，所属组和其他用户可读、执行；644 表示属主可读、写，所属组和其他用户只读。\n\n3. umask 用于屏蔽新建文件或目录的部分默认权限，不是直接修改已有文件权限。\n\n4. 目录的 x 表示能够进入或穿越该目录。遇到权限问题要检查需要的权限，不应直接改成 777。",
      "sourceIds": [],
      "keywords": [
        "Q10-021",
        "操作系统 / Linux",
        "umask"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 449,
      "originalQuestion": "权限 755、644、umask 分别表示什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-022",
      "number": "Q10-022",
      "question": "kill -15 与 kill -9 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. kill -15 发送 SIGTERM，请应用自行结束，可以做清理。\n\n2. kill -9 发送 SIGKILL，应用无法捕获，也来不及执行清理钩子。\n\n3. 通常先停止流量并请求优雅关闭，再按明确策略处理超时未退出的进程。",
      "sourceIds": [],
      "keywords": [
        "Q10-022",
        "操作系统 / Linux",
        "kill"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "L06 · Linux man-pages：signal(7)",
          "url": "https://man7.org/linux/man-pages/man7/signal.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 450,
      "originalQuestion": "kill -15 与 kill -9 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-023",
      "number": "Q10-023",
      "question": "nohup、后台运行、systemd 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. & 只是放到后台。nohup 主要减少终端挂断对进程的影响。\n\n2. systemd 才是完整服务管理，能管理启动、停止、重启和日志。\n\n3. 长期服务不能只看命令返回，要确认进程、端口、日志和健康接口。",
      "sourceIds": [],
      "keywords": [
        "Q10-023",
        "操作系统 / Linux",
        "nohup",
        "systemd"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 451,
      "originalQuestion": "nohup、后台运行、systemd 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-024",
      "number": "Q10-024",
      "question": "容器与虚拟机的区别？cgroup、namespace 做什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 容器通常共享宿主内核，用 namespace 隔离看到的资源，用 cgroup 限制资源用量。\n\n2. 虚拟机通常有自己的客户操作系统内核。\n\n3. 容器不是一台无限资源的独立机器，Java 的内存和线程池配置要按实际配额评估。",
      "sourceIds": [
        "N022"
      ],
      "keywords": [
        "Q10-024",
        "操作系统 / Linux",
        "BIGO",
        "cgroup",
        "namespace"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "L05 · Linux man-pages：cgroups(7)",
          "url": "https://man7.org/linux/man-pages/man7/cgroups.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 452,
      "originalQuestion": "容器与虚拟机的区别？cgroup、namespace 做什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-025",
      "number": "Q10-025",
      "question": "Linux OOMKill、ulimit、文件句柄不足怎么排查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 进程突然消失，先看系统/容器事件是否 OOMKill。\n\n2. 报 Too many open files，查句柄上限和泄漏。\n\n3. 建不了线程，查线程数量、系统限额和本地内存。\n\n4. 提高上限只能暂时增加容量，不能修复资源一直不释放。",
      "sourceIds": [],
      "keywords": [
        "Q10-025",
        "操作系统 / Linux",
        "Linux",
        "OOMKill",
        "ulimit"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q10-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "L05 · Linux man-pages：cgroups(7)",
          "url": "https://man7.org/linux/man-pages/man7/cgroups.7.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 453,
      "originalQuestion": "Linux OOMKill、ulimit、文件句柄不足怎么排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX010",
      "number": "UX010",
      "question": "Docker 镜像、容器、数据卷分别是什么？删容器会丢数据吗？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "1. 镜像是创建运行环境的模板，容器是基于镜像启动的隔离进程及其运行环境，数据卷用来保存需要独立于容器生命周期的数据。\n\n2. 容器被删除后，它的可写层数据会丢失。\n\n3. 正确挂载且未被删除的数据卷可以继续保留。\n\n4. 停止容器和删除容器也不是同一个操作。\n\n5. 应用容器可以删掉重建；MySQL 的数据放在明确管理的数据卷中。重建时挂回同一个卷，而不是无意中创建一个空卷。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "compare",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Docker：容器基础",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Docker：Volumes",
          "url": "https://docs.docker.com/engine/storage/volumes/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 454,
      "originalQuestion": "Docker 镜像、容器、数据卷分别是什么？删容器会丢数据吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX011",
      "number": "UX011",
      "question": "容器里访问 localhost，为什么连不到宿主机或另一个容器？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 在普通隔离网络模式下，容器里的 localhost 指这个容器自己，不是宿主机，也不是另一个容器。\n\n2. 同一自定义网络内，可按服务名或容器网络别名访问对方。\n\n3. 从宿主机访问容器，则通常要使用发布出来的端口。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Docker：Networking",
          "url": "https://docs.docker.com/engine/network/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 455,
      "originalQuestion": "容器里访问 localhost，为什么连不到宿主机或另一个容器？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q10-005",
      "number": "Q10-005",
      "question": "进程调度、时间片、抢占是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 调度就是决定下一刻让哪个可运行任务用 CPU。\n\n2. 时间片让任务轮流运行，抢占允许系统暂停当前任务、换别人执行。\n\n3. sleep 时间到了只是有机会被调度，不保证立即执行。\n\n4. 业务优先级还需要应用层队列和资源隔离。",
      "sourceIds": [],
      "keywords": [
        "Q10-005",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "进程调度、时间片、抢占是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-005",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 456
    },
    {
      "id": "bank-Q10-007",
      "number": "Q10-007",
      "question": "页表、TLB、缺页中断怎样配合？缺页一定是错误吗？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 页是内存管理的基本分块，页表记录虚拟页到物理页的映射，TLB 缓存常用映射。访问的页尚未就绪时会触发缺页处理，可能只是分配一页，也可能需要磁盘 IO。缺页不一定是程序错误。",
      "sourceIds": [],
      "keywords": [
        "Q10-007",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "页表、TLB、缺页中断怎样配合？缺页一定是错误吗？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-007",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 457
    },
    {
      "id": "bank-Q10-008",
      "number": "Q10-008",
      "question": "内存碎片、伙伴系统、slab 怎么理解？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 内部碎片是“分给你的一块空间里没用完”，外部碎片是“空闲空间总量够，但分得太散”。Linux 伙伴系统管理页块，slab 类机制复用内核对象。应用还可能有分配器碎片，所以 RSS 高不一定全是 Java 对象泄漏。",
      "sourceIds": [],
      "keywords": [
        "Q10-008",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "内存碎片、伙伴系统、slab 怎么理解？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 458
    },
    {
      "id": "bank-Q10-009",
      "number": "Q10-009",
      "question": "fork、exec、写时复制的区别？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. fork 创建子进程，父子最初可以共享物理页，写入时再复制，这叫写时复制；exec 是把当前进程换成另一个程序，不是再创建一个进程。fork 不会立即完整复制所有数据，但仍有页表和后续复制成本。",
      "sourceIds": [],
      "keywords": [
        "Q10-009",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "fork、exec、写时复制的区别？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "L03 · Linux man-pages：fork(2)",
          "url": "https://man7.org/linux/man-pages/man2/fork.2.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 459
    },
    {
      "id": "bank-Q10-012",
      "number": "Q10-012",
      "question": "epoll 的 LT、ET 有什么区别？ET 为什么常要读到 EAGAIN？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. LT 是条件还满足就可以继续通知；ET 主要在状态变化时通知。所以 ET 通常配非阻塞 IO，收到事件后持续读写到 EAGAIN，避免剩下数据却等不到下一次通知。LT 更容易写对，ET 不等于天然更快。",
      "sourceIds": [],
      "keywords": [
        "Q10-012",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "epoll 的 LT、ET 有什么区别？ET 为什么常要读到 EAGAIN？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-012",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "L02 · Linux man-pages：epoll(7)",
          "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 460
    },
    {
      "id": "bank-Q10-013",
      "number": "Q10-013",
      "question": "文件描述符、inode、软链接和硬链接？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 文件描述符是进程用来访问文件、socket 等资源的编号；inode 保存文件元信息；硬链接是同一个文件的多个目录入口；软链接保存另一个路径。删除文件名不一定让已经打开的文件描述符失效。",
      "sourceIds": [],
      "keywords": [
        "Q10-013",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "文件描述符、inode、软链接和硬链接？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-013",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 461
    },
    {
      "id": "bank-Q10-015",
      "number": "Q10-015",
      "question": "Page Cache、buffered IO 与 fsync 是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. Page Cache 是内核的文件页缓存。write 成功可能只是数据进入缓存，不代表已经稳定落盘；fsync 请求同步相应数据。文件缓存占用大可能是正常可回收缓存，不要看到内存 used 高就立即清缓存。",
      "sourceIds": [],
      "keywords": [
        "Q10-015",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "Page Cache、buffered IO 与 fsync 是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "L04 · Linux man-pages：fsync(2)",
          "url": "https://man7.org/linux/man-pages/man2/fsync.2.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 462
    },
    {
      "id": "bank-Q10-016",
      "number": "Q10-016",
      "question": "僵尸进程与孤儿进程是什么？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 僵尸进程是子进程已结束，但父进程还没收取退出状态；孤儿进程是父进程先结束，子进程由相应机制接管。僵尸本身已经不在运行，不能靠再杀它解决，应让父进程正确 wait/reap。",
      "sourceIds": [],
      "keywords": [
        "Q10-016",
        "操作系统 / Linux"
      ],
      "sourceFile": "10_操作系统与Linux.md",
      "isNew": false,
      "originalQuestion": "僵尸进程与孤儿进程是什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 463
    },
    {
      "id": "bank-Q10-026",
      "number": "Q10-026",
      "question": "机器只有 4 GB 物理内存，申请 8 GB 内存一定失败吗？",
      "answer": "1. 不一定。申请虚拟地址空间和实际占用物理内存是两步，结果受地址位宽、过量承诺、交换空间和容器限额影响。真正访问内存时才可能暴露不足。申请成功不保证后续安全，Java 还受堆和本地内存限制。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "机器只有 4 GB 物理内存，申请 8 GB 内存一定失败吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://www.kernel.org/doc/html/v5.7/vm/overcommit-accounting.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 464
    },
    {
      "id": "bank-Q10-027",
      "number": "Q10-027",
      "question": "Java 服务没有异常日志就退出，如何定位？",
      "answer": "1. 没有 Java 异常也可能是故障。先查退出码、systemd/容器事件和内核 OOM 记录，再看 hs_err、GC 日志和发布操作。\n\n2. SIGKILL/OOMKill 可能来不及写日志。\n\n3. 本地库或 JVM 崩溃也不一定表现成普通 Exception。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "Java 服务没有异常日志就退出，如何定位？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q10-027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 465
    },
    {
      "id": "bank-LX007",
      "number": "LX007",
      "question": "两个进程中的地址数字相同，是否代表同一个对象？",
      "answer": "1. 两个进程里相同的地址数字，通常不代表同一个对象。\n\n2. 进程看到的是各自的虚拟地址，要经过各自的页表才能找到实际物理内存。\n\n3. 只有显式共享映射等情况才可能指向同一块物理页。\n\n4. 另外，Java 默认 toString 后面的十六进制串通常是哈希值，不是可靠的对象地址。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "两个进程中的地址数字相同，是否代表同一个对象？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX007",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 466
    },
    {
      "id": "bank-RM022",
      "number": "RM022",
      "question": "Kubernetes Pod 一直 Pending，怎么查？",
      "answer": "1. 先看Pod状态和事件，而不是盲目重启。Pending可能在等调度，也可能已调度但还没完成启动准备。检查是否已分配节点，再查requests是否超可用资源、亲和性、污点容忍、PVC绑定、镜像拉取等具体原因。\n\n2. 例如，kubectl describe pod 名称 -n 命名空间，重点读Events和Node；若提示Insufficient cpu，核对节点可分配资源与各Pod的requests，不只看CPU当前利用率。\n\n3. 调度主要按请求资源等约束判断，不是看到机器“空闲”就一定能放下。kubectl的展示状态如ImagePullBackOff不等于Pod phase就叫这个名字。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "Kubernetes Pod 一直 Pending，怎么查？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM022",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Kubernetes Pod Lifecycle",
          "url": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "Kubernetes Resource Management",
          "url": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 467
    },
    {
      "id": "bank-RM023",
      "number": "RM023",
      "question": "不同 Kubernetes Namespace 天然互相隔离吗？",
      "answer": "1. Namespace首先划分资源名称和管理范围，不自动提供完整的租户安全隔离。\n\n2. 还需要RBAC控制API权限，NetworkPolicy配合支持它的网络插件限制流量，ResourceQuota等约束资源，并限制容器特权和宿主机访问。\n\n3. 例如，两个Namespace里的同名Service可以分别存在，但只建Namespace不会自动阻止A里的Pod连接B的服务。\n\n4. 强不信任租户可能还需节点或集群层面的隔离。Namespace、容器进程隔离和网络防火墙不是一回事。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "不同 Kubernetes Namespace 天然互相隔离吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Kubernetes Multi-tenancy",
          "url": "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 468
    },
    {
      "id": "bank-Q11-044",
      "number": "Q11-044",
      "question": "接口返回 400、404、405、415、500，分别先查什么？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 400 先检查参数是否缺失、格式是否错误、校验是否失败。\n\n2. 404 检查请求路径、部署上下文和资源是否存在。\n\n3. 405 检查 GET、POST 等请求方法是否与接口映射匹配。\n\n4. 415 检查 Content-Type、实际请求体和消息转换器是否匹配。\n\n5. 500 按 traceId 查后端异常堆栈和依赖调用。先复现请求，再核对路径、方法、请求头和参数，不应把状态码改成 200 掩盖错误。",
      "sourceIds": [],
      "keywords": [
        "Q11-044",
        "场景题 / 故障排查",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "application",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q09-011",
          "bank-Q05-023",
          "bank-Q05-024"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N02 · RFC 9110：HTTP Semantics",
          "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 469,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-045",
      "number": "Q11-045",
      "question": "什么是限流、熔断、降级？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 限流是控制请求进入的速度或数量，超过配额时拒绝或返回繁忙，避免系统过载。\n\n2. 熔断是下游持续故障时暂时停止调用，避免继续等待故障服务。\n\n3. 降级是在压力或故障时提供可接受的简化结果，例如暂停推荐功能、保留核心业务。\n\n4. 是否允许旧值或简化结果由业务决定，不能把重要操作失败伪装成成功。",
      "sourceIds": [],
      "keywords": [
        "Q11-045",
        "场景题 / 故障排查",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q11-017"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 470,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-001",
      "number": "Q11-001",
      "question": "接口从100ms变成2s，如何排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先确认从什么时候开始、哪些请求变慢、是否刚发布。\n\n2. 再沿 trace 把耗时拆成排队、业务计算、SQL、缓存和第三方调用，找到新增的主要耗时。\n\n3. 影响用户时先限流、降级或回滚，同时保留现场，不要一上来加线程。",
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
        "即时设计",
        "ms",
        "s"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 471,
      "originalQuestion": "接口从100ms变成2s，如何排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-002",
      "number": "Q11-002",
      "question": "CPU 100% 但请求量没涨怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 请求没涨但 CPU 满，说明单个请求变贵了，或后台有额外工作。\n\n2. 先定位热点线程，再连续看栈或采样，排查死循环、正则回溯、序列化、GC 和异常重试。\n\n3. 区分业务计算与 GC，不能只靠重启判断根因。",
      "sourceIds": [],
      "keywords": [
        "Q11-002",
        "场景题 / 故障排查",
        "CPU"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 472,
      "originalQuestion": "CPU 100% 但请求量没涨怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-003",
      "number": "Q11-003",
      "question": "堆内存持续上涨，该如何区分泄漏与正常缓存？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 看多轮 GC 之后的内存最低点，而不是只看使用量往上走。\n\n2. 缓存预热通常有容量上限并逐渐稳定。\n\n3. 不再需要的对象仍不断累积，就要查持有链。\n\n4. 用 dump 找大对象和根引用，修复后在同负载下继续观察。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 473,
      "originalQuestion": "堆内存持续上涨，该如何区分泄漏与正常缓存？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-004",
      "number": "Q11-004",
      "question": "线程池队列爆满、请求超时，怎么处理？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 队列满先判断任务来得太快，还是执行太慢。\n\n2. 查活跃线程、排队时长、拒绝率和下游容量。\n\n3. 已超时的无效任务要有退出机制。\n\n4. 先限流和隔离慢依赖，只有 CPU、数据库和第三方都有余量时才扩线程。",
      "sourceIds": [],
      "keywords": [
        "Q11-004",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 474,
      "originalQuestion": "线程池队列爆满、请求超时，怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-005",
      "number": "Q11-005",
      "question": "一个接口依赖三个第三方接口，如何优化？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 把三个调用分成“有先后依赖”和“互不依赖”。\n\n2. 互不依赖的并行执行，非关键结果允许明确降级。\n\n3. 整次请求设置总时限，每个调用分配剩余预算。\n\n4. 还要独立限并发，避免一个慢服务占满全部线程和连接。\n\n5. 三个互不依赖的调用分别耗时 100、200、300ms，串行约 600ms，并行理想情况下接近最慢的 300ms，加上调度和合并开销。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "T08 · Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 475,
      "originalQuestion": "一个接口依赖三个第三方接口，如何优化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-009",
      "number": "Q11-009",
      "question": "秒杀系统如何防超卖和一人多单？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 防超卖靠库存的原子条件更新或受控预占。\n\n2. 防一人多单靠活动+用户等业务唯一约束。\n\n3. 订单和库存要在明确的事务或补偿边界内协调，入口再做鉴权、活动校验和限流。\n\n4. 排队成功只能返回处理中，不等于已下单成功。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 476,
      "originalQuestion": "秒杀系统如何防超卖和一人多单？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-010",
      "number": "Q11-010",
      "question": "支付回调重复或乱序，如何保证订单正确？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 支付回调先验签、核对商户、订单和金额，再按支付流水去重，用状态条件更新保证只发生合法迁移。\n\n2. 业务修改和去重尽量同事务完成。\n\n3. 重复通知正常返回已有结果，漏通知靠主动查单和对账补齐。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 477,
      "originalQuestion": "支付回调重复或乱序，如何保证订单正确？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-011",
      "number": "Q11-011",
      "question": "提交订单时用户双击，接口怎么幂等？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 前端防双击只改善体验，后端仍需稳定幂等键。\n\n2. 把键与用户、操作和参数摘要绑定，用数据库唯一约束防并发重复，保存处理中或成功结果。\n\n3. 相同键相同参数复用结果，相同键不同参数拒绝。\n\n4. 用户第一次下单超时，第二次仍带原 requestId，服务器应返回原订单或处理中状态，而不是重新创建订单。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 478,
      "originalQuestion": "提交订单时用户双击，接口怎么幂等？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-012",
      "number": "Q11-012",
      "question": "如何设计一个分布式 ID？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 分布式 ID 先看要不要趋势递增、能否依赖中心服务、吞吐多大。\n\n2. 可选数据库号段、雪花或 UUID 等。\n\n3. 雪花常由时间、节点号、序列组成，必须保证节点号分配正确，并处理时钟回拨和序列用尽。",
      "sourceIds": [
        "N041",
        "X05",
        "NI022"
      ],
      "keywords": [
        "Q11-012",
        "场景题 / 故障排查",
        "BIGO",
        "得物",
        "ID"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 479,
      "originalQuestion": "如何设计一个分布式 ID？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-013",
      "number": "Q11-013",
      "question": "百万行数据导入怎么设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 百万行导入应做成异步任务：保存文件、返回任务 ID、流式解析、分批校验和落库，记录进度与失败行。\n\n2. 每批内存和事务有上限，重试按业务键幂等，并明确允许部分成功还是必须全部成功。\n\n3. 不能先把整份文件读进一百万行 List，再每次 subList 一千行，那只拆了写入，没有减少读取阶段的内存。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 480,
      "originalQuestion": "百万行数据导入怎么设计？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-014",
      "number": "Q11-014",
      "question": "百万行导出如何避免 OOM 和请求超时？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 百万行导出先创建异步任务，再按稳定游标分批读数据，边读边写文件，完成后提供授权下载。\n\n2. 限制并发和磁盘占用，保存失败状态。\n\n3. 还要说明数据按哪个时间点导出，避免翻页过程中新增修改导致漏行或重复。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q11-014",
        "场景题 / 故障排查",
        "得物",
        "OOM"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 481,
      "originalQuestion": "百万行导出如何避免 OOM 和请求超时？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-015",
      "number": "Q11-015",
      "question": "库存扣了但订单没落库，怎么修？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先按业务 ID 查清楚订单究竟没成功，还是只是响应丢失。\n\n2. 库存与订单在同库时优先用事务。\n\n3. 跨存储预占则记录预占状态，订单成功后确认，失败后幂等释放。\n\n4. 补偿前先核对最终事实，不能看到超时就直接加库存。",
      "sourceIds": [],
      "keywords": [
        "Q11-015",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 482,
      "originalQuestion": "库存扣了但订单没落库，怎么修？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-016",
      "number": "Q11-016",
      "question": "订单“掉单”怎么排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 从请求 ID 一路查到订单、支付流水、待发事件、MQ 和消费结果，定位“断在哪一段”。\n\n2. 列表没有不等于数据库没有，也可能是权限、状态筛选或副本延迟。\n\n3. 根据持久状态补偿，再建立对账主动发现缺口。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q11-016",
        "场景题 / 故障排查",
        "得物"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 483,
      "originalQuestion": "订单“掉单”怎么排查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-017",
      "number": "Q11-017",
      "question": "如何设计限流、熔断、降级、隔离？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 限流是少放请求进来。\n\n2. 熔断是下游持续异常时暂时不再调用。\n\n3. 降级是改成较简单但可接受的结果。\n\n4. 隔离是给不同业务分开资源，防止互相拖垮。\n\n5. 阈值应来自容量和时延目标，恢复时小流量试探。\n\n6. 库存主链路要保住，推荐列表可以降级；短信服务变慢时，不应把下单线程池也全部占满。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 484,
      "originalQuestion": "如何设计限流、熔断、降级、隔离？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-021",
      "number": "Q11-021",
      "question": "定时任务在集群中重复执行怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 多实例定时任务要有跨实例的领取规则，例如调度平台、分片或数据库条件抢占。\n\n2. 领取后记录执行者、状态和心跳，失败可接管。\n\n3. 真正业务效果仍需幂等，防止旧实例暂停后恢复继续执行。\n\n4. 单机锁无法约束别的进程。",
      "sourceIds": [
        "N016"
      ],
      "keywords": [
        "Q11-021",
        "场景题 / 故障排查",
        "拼多多"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 485,
      "originalQuestion": "定时任务在集群中重复执行怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-022",
      "number": "Q11-022",
      "question": "审批回调重复，怎样保证只生成一次台账？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先确认生成台账应该绑在哪个流程事件，再用源单据 ID 加必要业务版本作为稳定键，目标表加唯一约束。\n\n2. 生成记录和处理状态尽量同事务完成，重复回调返回已有结果。\n\n3. 撤回再审批要另定更新或冲销规则。\n\n4. 两个回调同时“先查都没有”，仍会各插一条；数据库唯一约束才能在并发下守住最后一道门。",
      "sourceIds": [],
      "keywords": [
        "Q11-022",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 486,
      "originalQuestion": "审批回调重复，怎样保证只生成一次台账？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-023",
      "number": "Q11-023",
      "question": "跨系统组织、员工数据同步如何设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 跨系统同步先统一稳定业务编码，不按姓名猜对应关系。\n\n2. 事件带唯一 ID 和版本，重复可重试、旧版本不能覆盖新版本。\n\n3. 组织父子关系先处理，再处理人员归属。\n\n4. 失败单独记录，增量同步外再加定期全量对账。",
      "sourceIds": [],
      "keywords": [
        "Q11-023",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 487,
      "originalQuestion": "跨系统组织、员工数据同步如何设计？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-024",
      "number": "Q11-024",
      "question": "合同累计订单数量不能超最大值，怎么保证并发？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 合同额度不能只在前端相加判断。\n\n2. 服务端用同一事务中的锁定校验，或数据库条件更新，原子增加已占用数量，再创建订单。\n\n3. 修改按差量调整，撤销按状态只释放一次，历史订单统计口径也要统一。\n\n4. 合同剩 100，两个人同时各买 60。各自先查都可能看到 100；原子条件占用应只允许其中一个成功。",
      "sourceIds": [],
      "keywords": [
        "Q11-024",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 488,
      "originalQuestion": "合同累计订单数量不能超最大值，怎么保证并发？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-026",
      "number": "Q11-026",
      "question": "业务数据明明新增过，列表里却看不到怎么查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 先查数据库有没有这条主键，再查接口是否返回，最后查页面为什么不显示。\n\n2. 依次排除回滚、副本延迟、权限、软删、状态筛选、分页和缓存。\n\n3. “刚出现又消失”还要查后续回调覆盖，不要先再插一条。",
      "sourceIds": [
        "N053"
      ],
      "keywords": [
        "Q11-026",
        "场景题 / 故障排查",
        "小鹅通"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 489,
      "originalQuestion": "业务数据明明新增过，列表里却看不到怎么查？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-027",
      "number": "Q11-027",
      "question": "如何做一次可信的接口压测？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 可信压测要固定环境、数据量、请求比例、预热和持续时间，同时看 QPS、延迟分位、错误率及资源占用。\n\n2. 比较优化前后必须条件一致，还要验证数据正确、压测机没先到瓶颈，不能用一次最快响应倒推出吞吐。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 490,
      "originalQuestion": "如何做一次可信的接口压测？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-031",
      "number": "Q11-031",
      "question": "CAP 与 BASE 怎么用在系统设计里？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. CAP 讨论的是网络发生分区时，不能同时完整保证线性一致性和可用性，不是平时随便三选二。\n\n2. BASE 是某些系统接受短暂不一致、最终收敛的设计思路。\n\n3. 业务必须明确能旧多久、怎么补偿、什么时候报警。",
      "sourceIds": [
        "N055",
        "NI008"
      ],
      "keywords": [
        "Q11-031",
        "场景题 / 故障排查",
        "网易",
        "美团",
        "CAP",
        "BASE"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "体系补全",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-031",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 491,
      "originalQuestion": "CAP 与 BASE 怎么用在系统设计里？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-032",
      "number": "Q11-032",
      "question": "分布式事务的2PC、TCC、Saga如何比较？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. 2PC 让参与者先准备再统一提交，协调和等待成本较高。\n\n2. TCC 把业务拆成预留、确认、取消。\n\n3. Saga 是一串本地事务，失败时执行相应补偿。\n\n4. 补偿不一定能精确倒回原状，选择要看资源支持和业务能否补偿。",
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
        "得物",
        "PC",
        "TCC",
        "Saga"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q11-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "M06 · Microservices.io：Saga",
          "url": "https://microservices.io/patterns/data/saga.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 492,
      "originalQuestion": "分布式事务的2PC、TCC、Saga如何比较？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX012",
      "number": "UX012",
      "question": "修改建表 SQL 后，为什么同事的数据库不会自动跟着改？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. Git 更新的是脚本文件，不会替你执行数据库变更。\n\n2. 数据库已经建好后，要用新的迁移脚本明确写 ALTER、数据搬迁等步骤，并在目标库执行。\n\n3. 使用 Flyway 时，已经应用过的版本迁移应保留，后续变更用新版本脚本追加。\n\n4. V1__create_tables.sql 已执行；现在要新增备注列，就新增 V2__add_remark.sql。只改 V1，不代表同事已有的表会自动多一列。",
      "sourceIds": [
        "OPT-S13"
      ],
      "keywords": [
        "UX012",
        "场景题 / 故障排查",
        "Flyway",
        "数据库迁移",
        "Git",
        "SQL"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "application",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Flyway：Versioned migrations",
          "url": "https://documentation.red-gate.com/flyway/flyway-concepts/migrations/versioned-migrations",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 493,
      "originalQuestion": "修改建表 SQL 后，为什么同事的数据库不会自动跟着改？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q11-006",
      "number": "Q11-006",
      "question": "Redis 挂了，怎么避免数据库一起被打垮？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. Redis 故障时，不能把原本所有缓存流量原样打到数据库。按重要性限流，允许的场景使用本地缓存或旧数据，承受不了的请求明确返回繁忙。恢复后分批预热、逐步放量，防止数据库在恢复时再次被冲垮。",
      "sourceIds": [
        "NI004"
      ],
      "keywords": [
        "Q11-006",
        "场景题 / 故障排查",
        "招银网络科技"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "Redis 挂了，怎么避免数据库一起被打垮？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-006",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 494
    },
    {
      "id": "bank-Q11-007",
      "number": "Q11-007",
      "question": "一个极热商品缓存失效，如何避免并发回源？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "1. 同一个热 key 失效时，合并相同查询或只让少数请求负责重建；其他请求限时等待或读取允许的旧值。拿到重建资格后再检查一次缓存，避免别人已经建好却又重复查询。不同 key 不要共用一把全局锁。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q11-007",
        "场景题 / 故障排查",
        "拼多多"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "一个极热商品缓存失效，如何避免并发回源？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-007",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "R06 · Redis：Distributed Locks",
          "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 495
    },
    {
      "id": "bank-Q11-008",
      "number": "Q11-008",
      "question": "缓存与数据库不一致，如何定位是哪条链路？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 先把数据库版本、缓存版本和失效事件串起来，判断是没提交、删缓存失败、读副本落后、旧值回填，还是事件乱序。再对症处理：可靠重试、版本校验、回源策略。不能只加一次延迟双删就认定解决。",
      "sourceIds": [],
      "keywords": [
        "Q11-008",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "缓存与数据库不一致，如何定位是哪条链路？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-008",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 496
    },
    {
      "id": "bank-Q11-018",
      "number": "Q11-018",
      "question": "高并发转账如何保证正确？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 同库转账把扣款、加款和流水放在同一事务，用余额条件更新防负数，用唯一流水防重复，并按固定顺序锁账户减少死锁。跨系统则需要持久状态、可靠事件和对账，不能只加 Redis 锁就当成原子转账。",
      "sourceIds": [
        "N008"
      ],
      "keywords": [
        "Q11-018",
        "场景题 / 故障排查",
        "京东"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "高并发转账如何保证正确？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "D02 · MySQL 8.4：InnoDB Locking",
          "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 497
    },
    {
      "id": "bank-Q11-019",
      "number": "Q11-019",
      "question": "如何设计短链接服务？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 短链接核心是“短码→原地址”的映射：生成不冲突短码并保存，访问时查询后重定向，热点映射可以缓存。还要处理到期、禁用、恶意目标和访问统计。哈希可能碰撞，序号可能被枚举，都要按需求处理。",
      "sourceIds": [
        "N037"
      ],
      "keywords": [
        "Q11-019",
        "场景题 / 故障排查",
        "腾讯"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "如何设计短链接服务？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 498
    },
    {
      "id": "bank-Q11-020",
      "number": "Q11-020",
      "question": "如何设计排行榜和点赞功能？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 点赞先保证用户+内容关系唯一，取消点赞也要幂等；计数可同步维护或可靠异步汇总。排行榜常用 ZSet，另定义同分、时间窗和更新频率。关系数据与展示计数不一致时，要能从权威记录对账修复。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "如何设计排行榜和点赞功能？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 499
    },
    {
      "id": "bank-Q11-025",
      "number": "Q11-025",
      "question": "附件从业务系统推到 OA，如何保证不重复、可追踪？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 附件同步用源单据 ID 和附件稳定 ID 等作为幂等标识，记录上传状态、目标 ID、重试次数和错误。上传后本地标记失败时，要能查目标或对账，避免重复上传。文件名一样不表示是同一个附件。",
      "sourceIds": [],
      "keywords": [
        "Q11-025",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "附件从业务系统推到 OA，如何保证不重复、可追踪？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 500
    },
    {
      "id": "bank-Q11-028",
      "number": "Q11-028",
      "question": "怎么设计灰度发布和回滚？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 灰度是先让小部分流量使用新版本，确认正常再逐渐扩大。\n\n2. 前提是新旧代码能同时兼容接口、配置和数据库结构。\n\n3. 回滚时先切流量和代码，再按需要修复数据副作用。\n\n4. 回滚代码不会自动撤销已经发生的业务操作。",
      "sourceIds": [],
      "keywords": [
        "Q11-028",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "怎么设计灰度发布和回滚？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 501
    },
    {
      "id": "bank-Q11-029",
      "number": "Q11-029",
      "question": "长时间运行的 Agent 任务如何取消与恢复？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "面经考点改写/延展",
      "answer": "1. Agent 长任务要把状态、步骤和工具调用 ID 持久化。\n\n2. 取消先进入取消中，在循环边界和底层调用检查信号。\n\n3. 恢复从已确认检查点继续，不重复执行已完成副作用。\n\n4. 连接断了不等于任务自动取消，取消也不等于回滚。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "长时间运行的 Agent 任务如何取消与恢复？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "T08 · Java 21 CompletableFuture API",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 502
    },
    {
      "id": "bank-Q11-030",
      "number": "Q11-030",
      "question": "海量日志中找高频 IP 或请求链路怎么做？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 日志放得进内存，就流式解析并按 IP 计数，再取 TopK。\n\n2. 放不下，就按 IP 哈希分桶，分别统计后合并。\n\n3. 请求链路靠 traceId/spanId 关联，不能只按时间接近拼。\n\n4. 精确统计和近似统计的方案要分开。",
      "sourceIds": [
        "N018"
      ],
      "keywords": [
        "Q11-030",
        "场景题 / 故障排查",
        "携程"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "海量日志中找高频 IP 或请求链路怎么做？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 503
    },
    {
      "id": "bank-Q11-033",
      "number": "Q11-033",
      "question": "Elasticsearch 与 MySQL 如何保持同步？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. MySQL 作为权威数据源，通过 Outbox 或 binlog/CDC 把变更可靠送到 ES；事件带 ID 和版本，防重复和旧事件覆盖新数据，再定期对账。ES 搜索近实时，写成功不等于下一瞬间一定搜到。",
      "sourceIds": [],
      "keywords": [
        "Q11-033",
        "场景题 / 故障排查"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "Elasticsearch 与 MySQL 如何保持同步？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-033",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "E01 · Elasticsearch：Paginate Search Results",
          "url": "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/paginate-search-results",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 504
    },
    {
      "id": "bank-Q11-034",
      "number": "Q11-034",
      "question": "搜索服务如何做分词、召回与分页？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 搜索先用分词和倒排索引找候选，再按业务条件过滤和排序，必要时结合向量检索与重排。深分页可用 search_after 配稳定排序和一致性视图。权限过滤是硬条件，不能为了提高相关性把无权限资料返回出去。",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q11-034",
        "场景题 / 故障排查",
        "百度"
      ],
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "搜索服务如何做分词、召回与分页？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-034",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "E01 · Elasticsearch：Paginate Search Results",
          "url": "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/paginate-search-results",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "E02 · Elasticsearch：Open a Point in Time",
          "url": "https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-open-point-in-time",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 505
    },
    {
      "id": "bank-Q11-035",
      "number": "Q11-035",
      "question": "配置中心、服务发现和分布式协调分别解决什么？",
      "category": "场景题 / 故障排查",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 配置中心回答“参数是什么”，服务发现回答“服务现在在哪些实例”，协调系统帮助“谁当负责人、谁持有租约”。一个产品可能提供多种能力，但概念不同。更新还要带版本、校验和恢复机制，不能只靠一次推送。",
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
      "sourceFile": "11_场景题与故障排查.md",
      "isNew": false,
      "originalQuestion": "配置中心、服务发现和分布式协调分别解决什么？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-035",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 506
    },
    {
      "id": "bank-JX018",
      "number": "JX018",
      "question": "验证码校验后再删除，两个并发请求会不会都登录成功？",
      "answer": "1. 会。两个请求若都先读到验证码正确，再分别删除，就可能都通过。要把比较与消费放到同一个原子操作里，再建立会话，同时绑定手机号、用途、有效期并限制尝试次数。验证码只用一次和允许几个登录会话是两回事。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "验证码校验后再删除，两个并发请求会不会都登录成功？",
      "originalKind": "登录场景追问延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 507
    },
    {
      "id": "bank-Q11-036",
      "number": "Q11-036",
      "question": "支付成功回调与超时关单同时到达，怎么处理？",
      "answer": "1. 用状态机和条件更新控制本地迁移，但最终还要核对支付渠道是否真的扣款。不能因为本地先关单，就忽略后来确认的付款。根据业务恢复履约或退款，补偿也要幂等，重复通知和主动对账一起保证收敛。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "支付成功回调与超时关单同时到达，怎么处理？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-036",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 508
    },
    {
      "id": "bank-Q11-037",
      "number": "Q11-037",
      "question": "PHP 服务迁移到 Java，怎么证明功能等价？",
      "answer": "1. 先固定接口输入输出、错误码、数据修改和外部副作用，再用同一批案例比较新旧系统。读请求可影子比对，写操作要在隔离环境验证，避免真实扣款两次。覆盖空值、精度、时区和排序，再灰度发布并准备回滚。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "PHP 服务迁移到 Java，怎么证明功能等价？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-037",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 509
    },
    {
      "id": "bank-Q11-038",
      "number": "Q11-038",
      "question": "SQL 已走索引，为什么高峰期 MySQL CPU 仍高？",
      "answer": "1. 走索引只是访问方式，不代表工作量很小。高峰可能是 SQL 次数太多、索引扫描范围大、回表多、排序重或连接风暴。结合真实扫描量和查询摘要找热点，再减少查询、改覆盖索引或限流，不能只看 key 字段有值。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "SQL 已走索引，为什么高峰期 MySQL CPU 仍高？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-038",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 510
    },
    {
      "id": "bank-Q11-039",
      "number": "Q11-039",
      "question": "RPC 成功率只有 70%，CPU 和内存都正常，怎么查？",
      "answer": "1. 资源均值正常，不代表每个调用链正常。按下游实例、错误码和阶段拆失败率，查坏节点、连接池等待、限流、DNS 和超时配置。沿 trace 比较客户端与服务端记录，先隔离故障点，再做有限且幂等的重试。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "RPC 成功率只有 70%，CPU 和内存都正常，怎么查？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 511
    },
    {
      "id": "bank-Q11-040",
      "number": "Q11-040",
      "question": "百万粉丝作者发动态，推送与拉取怎么设计？",
      "answer": "1. 普通作者可推到粉丝收件箱，让读更快；百万粉丝大 V 全量推送写放大太大，可改读时拉取合并，或只推活跃粉丝。常用混合策略，并明确可见延迟。删除、权限变化和重复事件也要处理。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "百万粉丝作者发动态，推送与拉取怎么设计？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-040",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 512
    },
    {
      "id": "bank-Q11-041",
      "number": "Q11-041",
      "question": "分片上传怎么去重、恢复和清理残留文件？",
      "answer": "1. 上传先建会话，保存文件大小、分片数、版本和校验信息。每片按会话+序号幂等写入，完成后校验完整性，再切成可见状态；失败可继续传，过期会话清残片。文件哈希帮助查重，但不能替代权限判断。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "分片上传怎么去重、恢复和清理残留文件？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-041",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 513
    },
    {
      "id": "bank-Q11-042",
      "number": "Q11-042",
      "question": "忘记密码接口怎么设计？",
      "answer": "1. 重置密码用高熵、短时、一次性凭据，通过已验证渠道发给用户，服务端绑定用户和用途，成功后原子作废。请求响应不要泄露账号是否存在，并加限流。更新后按策略撤销旧会话，日志不得泄露重置令牌。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "忘记密码接口怎么设计？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-042",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 514
    },
    {
      "id": "bank-Q11-043",
      "number": "Q11-043",
      "question": "心跳间隔怎么定？没收到心跳就能认定节点死亡吗？",
      "answer": "1. 没收到心跳只能怀疑节点不可用，可能是网络抖动或长暂停，不一定真死。根据发现时限和误判成本设置间隔与阈值，恢复时检查实例世代或租约，防止旧节点继续写。强约束操作仍需协调和资源端保护。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "心跳间隔怎么定？没收到心跳就能认定节点死亡吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q11-043",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 515
    },
    {
      "id": "bank-LX003",
      "number": "LX003",
      "question": "ES 写成功后为什么搜索不到？",
      "answer": "1. ES 的“写入成功”和“能被搜索到”不是同一件事：写进去的数据还要经过 refresh，才会对搜索可见。\n\n2. 需要写完马上搜索时，可用 refresh=wait_for 等待可见。\n\n3. 不要每次都强制 refresh=true，它会增加刷新和合并开销。\n\n4. 按 ID 的 GET 与普通 search 也要分开看。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "ES 写成功后为什么搜索不到？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX003",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/refresh-parameter",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 516
    },
    {
      "id": "bank-LX005",
      "number": "LX005",
      "question": "20 核心、2000 最大、2 万队列，流量到 8000 QPS 怎么调？",
      "answer": "1. 不要直接把最大线程数调大：队列能放两万条，任务会先在队列里等，未必很快触发扩到两千线程。\n\n2. 先测单任务耗时、排队时间、CPU 和下游承受力，再一起调整核心数、队列容量、最大数和拒绝策略。\n\n3. 8000 QPS、每次占线程 50ms，平均约需 400 个在途处理，这是估算起点，不是最终配置。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "20 核心、2000 最大、2 万队列，流量到 8000 QPS 怎么调？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX005",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 517
    },
    {
      "id": "bank-LX021",
      "number": "LX021",
      "question": "支持提前一年和代购的订票系统，如何拦重复订单？",
      "answer": "1. 防重复买票要按“实际乘车人＋具体班次或场次”判断，不能只按代买人的账号。\n\n2. 请求幂等键解决一次操作的重复提交，持久业务唯一约束解决同一乘车人重复占用有效名额。\n\n3. 取消、重新购买和库存释放也要设计清楚。\n\n4. 短期 Redis 标记不能覆盖一年后的业务。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "支持提前一年和代购的订票系统，如何拦重复订单？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX021",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 518
    },
    {
      "id": "bank-LX025",
      "number": "LX025",
      "question": "买家分库的订单，卖家账单任意跳页怎么做？",
      "answer": "1. 按买家分库后，卖家账单会散在多个库，逐页跨库拼装很麻烦。\n\n2. 可单独维护按卖家组织的账单读模型，通过可靠事件同步必要字段。\n\n3. 顺序翻页用游标；要求任意跳到很深的页，则要结合时间范围、分页锚点或限制跳页深度，不能说一个游标就解决所有分页。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "买家分库的订单，卖家账单任意跳页怎么做？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX025",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 519
    },
    {
      "id": "bank-LX031",
      "number": "LX031",
      "question": "多模型网关如何做路由和故障隔离？",
      "answer": "1. 多模型网关不是简单随机选一个模型。先按工具、图片、上下文等能力筛选，再结合延迟、预算和可用额度路由。\n\n2. 不同供应商分别做限流、超时和熔断。失败后可在兼容的模型间降级，但要控制重试总预算。\n\n3. 已经输出半段内容时，不要无提示地拼接另一模型的回答。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "多模型网关如何做路由和故障隔离？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 520
    },
    {
      "id": "bank-LX040",
      "number": "LX040",
      "question": "扫码支付从二维码到订单成功，后端如何串起来？",
      "answer": "1. 扫码支付先创建自己的业务订单和支付单，再生成绑定订单、金额和有效期的二维码。\n\n2. 最终是否成功，要以后端验证过的支付通知或主动查询结果为准，不信前端一句“支付成功”。\n\n3. 通知可能重复或晚到，所以验签、金额核对、幂等状态更新和关单对账缺一不可。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "扫码支付从二维码到订单成功，后端如何串起来？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX040",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 521
    },
    {
      "id": "bank-LX041",
      "number": "LX041",
      "question": "下单链路中哪些同步，哪些用 MQ？",
      "answer": "1. 下单时，用户必须马上得到可靠结论的部分要先做：价格与优惠校验、必要的库存预占、订单状态落地等。\n\n2. 短信、积分发放等不影响当前承诺的后续工作可走 MQ。\n\n3. 但积分若参与本次抵扣，就不能随便延后。\n\n4. 同步还是异步由业务依赖决定，不是看哪个技术词更高级。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "下单链路中哪些同步，哪些用 MQ？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX041",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 522
    },
    {
      "id": "bank-UX009",
      "number": "UX009",
      "question": "后端明明在流式输出，为什么浏览器最后才一次显示？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "1. 沿链路找“谁把数据攒住了”：模型是否真的流式返回、服务端是否及时发送、代理是否缓冲、前端是否在等完整响应。先直接连后端测试，再经过网关对比，能快速判断是不是代理层导致延迟。不要只在前端加打字动画伪装流式。\n\n2. 例如，同一请求直连后端逐段到达，经过 Nginx 后集中到达，优先检查代理缓冲，而不是先怀疑模型生成速度。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "后端明明在流式输出，为什么浏览器最后才一次显示？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Nginx HTTP Proxy：缓冲与读取超时",
          "url": "https://nginx.org/en/docs/http/ngx_http_proxy_module.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "WHATWG Server-sent Events",
          "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 523
    },
    {
      "id": "bank-RM011",
      "number": "RM011",
      "question": "本地缓存、Redis、数据库三层缓存，更新后怎样失效？",
      "answer": "1. 可以先提交数据库，再可靠发送缓存失效事件，让各实例删除本地缓存，同时使 Redis 缓存失效。\n\n2. 只删除 Redis 不够，因为其他实例仍可能读到各自的本地旧缓存。\n\n3. 配合 TTL、数据版本和失败重试，处理通知遗漏、重复或乱序，避免旧数据长期残留。\n\n4. 普通 Redis Pub/Sub 可能漏掉离线实例，不能单靠它保证可靠交付。严格准确的余额扣减仍由数据库条件更新等机制保障。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "本地缓存、Redis、数据库三层缓存，更新后怎样失效？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM011",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 524
    },
    {
      "id": "bank-RM015",
      "number": "RM015",
      "question": "秒杀库存拆到多个 Redis 分片，怎么保证不超卖？",
      "answer": "1. 可以先把总库存拆成有限配额，每个分片只出售自己的配额，不能每个分片都保存一份完整库存并独立扣减。\n\n2. 分片内部使用原子操作扣减，同一订单使用幂等标识，避免重复扣减。\n\n3. 跨片调拨时先冻结原配额，再确认转移，防止两边同时可售。例如总量 1000 件，可先分成 4 份，每份 250 件。\n\n4. 多 key Lua 不能在任意 Redis 槽之间原子执行。失败恢复、配额回收和切换丢写仍需要持久账本和对账，效果要通过压测确认。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "秒杀库存拆到多个 Redis 分片，怎么保证不超卖？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 525
    },
    {
      "id": "bank-RM020",
      "number": "RM020",
      "question": "密码用 MD5 加盐保存安全吗？忘记密码要解密吗？",
      "answer": "1. 密码不应保存为可恢复明文，也不该只用MD5这类快速哈希。\n\n2. 优先采用专用、带随机盐和可调成本的密码哈希方案，如Argon2id。\n\n3. 已有bcrypt等方案按环境评估迁移。\n\n4. 登录时验证哈希，忘记密码走身份验证后的重置，不是把原密码解密出来。\n\n5. 例如，每个账号独立随机盐，即使两个人密码相同，保存结果也应不同。盐可与哈希一起保存；可选pepper作为额外秘密分开管理。\n\n6. 加盐能阻止通用预计算复用，但不能把快速MD5变成高成本密码哈希。重置凭据还需短时、单次有效和防账号枚举。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "密码用 MD5 加盐保存安全吗？忘记密码要解密吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "OWASP Password Storage",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 526
    },
    {
      "id": "bank-RM026",
      "number": "RM026",
      "question": "用户提交 prompt 生成长视频，后端怎样设计任务表和流程？",
      "answer": "1. 采用异步任务，不把长视频生成放在一个长 HTTP 请求或数据库事务中。\n\n2. 先鉴权并校验预算，在短事务中写任务和待发事件，返回 taskId；后台认领任务并调用生成服务，客户端查询或订阅进度。\n\n3. 任务表保存用户、幂等键、状态、版本、重试次数、外部 jobId、结果地址和错误原因。\n\n4. 完成后保存文件位置并更新状态；重复回调不能重复扣费，同一幂等键还要校验参数是否一致。\n\n5. 超时后先查询外部任务状态，不盲目重新生成。结果访问、取消、费用和迟到回调都要有明确处理规则。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "用户提交 prompt 生成长视频，后端怎样设计任务表和流程？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 527
    },
    {
      "id": "bank-RM028",
      "number": "RM028",
      "question": "服务重启后，RPC 为什么还可能调用失败？",
      "answer": "1. 可能是客户端还缓存旧地址、连接池复用失效连接，或者服务虽然注册了但尚未就绪；正在执行的请求也可能被重启打断。结合注册中心时间线、实例版本、连接异常、readiness和trace定位是哪一层。\n\n2. 例如，重启前摘流量并等待在途调用；重启后先完成依赖初始化再接流量。客户端更新地址、剔除坏连接，按整体时间预算对可重试且幂等的请求有限重试。\n\n3. 注册中心删除地址不会让所有客户端在同一毫秒更新。请求超时也不证明服务端没执行，需要幂等键或结果查询。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "服务重启后，RPC 为什么还可能调用失败？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 528
    },
    {
      "id": "bank-RM029",
      "number": "RM029",
      "question": "历史日志怎么归档？如何避免把线上服务拖慢？",
      "answer": "1. 先区分普通日志和审计记录，确定各自保留期限、访问权限和删除规则。\n\n2. 可以保留近期日志供在线检索，把较老分区分批压缩到冷存储，并保留时间段和文件位置索引。\n\n3. 归档要限速、记录批次进度，失败后从断点继续，避免反复扫描全部历史数据。\n\n4. 确认记录完整且能够恢复读取后，再清理原数据。归档不能代替备份，还要处理加密、权限和文件轮转。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "历史日志怎么归档？如何避免把线上服务拖慢？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 529
    },
    {
      "id": "bank-RM037",
      "number": "RM037",
      "question": "首页慢在数据权限计算，能直接把权限结果缓存起来吗？",
      "answer": "1. 可以缓存，但先明确权限结果依赖的用户、租户、角色、资源范围和规则版本，缓存键必须包含必要维度。\n\n2. 权限变更后及时使旧结果失效，不能让用户继续使用已经撤销的权限。\n\n3. 避免每条记录都进行一次远程鉴权，可以改为批量决策或数据库过滤；高风险写操作还要在执行端校验。\n\n4. 分别观察权限计算、业务查询和接口整体耗时，同时测试越权情况，不能只看平均响应变快。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "首页慢在数据权限计算，能直接把权限结果缓存起来吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM037",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 530
    },
    {
      "id": "bank-RM040",
      "number": "RM040",
      "question": "付款方没网、收款方有网，如何讨论扫码支付？两边都没网呢？",
      "answer": "1. 在预先授权等条件下，付款方离线时可以展示短期凭据，由在线收款端提交给可信支付后台验证、风控和记账。\n\n2. 凭据需要有效期、一次性使用、金额或场景约束，服务端还要防重放；支付成功以后台确认为准。\n\n3. 双方都离线时，无法即时向同一权威账本核实余额和重复支付，需要额外的安全硬件、预授权额度、信用或事后清算等假设。\n\n4. 这是系统设计方案，不代表任何具体支付产品都支持，也不能当作普通联网支付的同等保证。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "付款方没网、收款方有网，如何讨论扫码支付？两边都没网呢？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM040",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 531
    },
    {
      "id": "bank-Q12-001",
      "number": "Q12-001",
      "question": "用两分钟介绍你的项目，怎么说？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 按五句话介绍：项目给谁用，解决什么问题，主流程是什么，我负责什么，怎么验证效果。\n\n2. 技术栈穿插在具体实现中，不要先报一串框架。\n\n3. 所有规模和成绩用真实记录，没有压测就直接说未做系统压测。\n\n4. 表达模板：这个项目面向【真实用户】，处理【问题】；核心链路是【输入→处理→结果】；我负责【模块】，解决了【具体难点】，通过【真实测试或记录】验证。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 532,
      "originalQuestion": "用两分钟介绍你的项目，怎么说？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-002",
      "number": "Q12-002",
      "question": "你在团队里到底负责什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 把团队原有能力和自己新增修改的内容分开说。\n\n2. 说明实际负责的接口、表、回调或部署步骤，以及参与了需求、编码、联调、测试中的哪些环节。\n\n3. 能讲清一段完整实现，比声称负责整个系统更可信。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 533,
      "originalQuestion": "你在团队里到底负责什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-003",
      "number": "Q12-003",
      "question": "为什么采用这套技术栈？有没有替代方案？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 从业务要求和团队条件解释选型：现有系统用什么、哪些要求必须满足、引入新组件的成本是什么。\n\n2. 再举一个替代方案及没选它的原因。\n\n3. 不要只说“大家都这么用”，也不要为了丰富技术栈加没必要的组件。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 534,
      "originalQuestion": "为什么采用这套技术栈？有没有替代方案？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-004",
      "number": "Q12-004",
      "question": "画出项目架构和一次请求完整链路？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 沿一次真实请求画：客户端→入口鉴权→Controller→Service→数据库/缓存/外部系统→响应。\n\n2. 每步讲输入输出、失败表现和事务边界。\n\n3. 异步任务另画提交、执行和查询状态。\n\n4. 没部署的组件不要画成已使用。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 535,
      "originalQuestion": "画出项目架构和一次请求完整链路？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-005",
      "number": "Q12-005",
      "question": "你的数据库表怎么设计？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先讲业务实体和它们的关系，再讲主键、业务唯一约束、状态字段和索引。\n\n2. 用“哪些数据必须一起成功”和“最常查什么”解释设计，而不是照页面输入框建表。\n\n3. 历史记录、软删除和并发规则也要说明。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-005",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 536,
      "originalQuestion": "你的数据库表怎么设计？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-006",
      "number": "Q12-006",
      "question": "你如何划分 Controller、Service、DAO 和 DTO？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. Controller 接收请求、处理参数并返回响应，不承担复杂业务逻辑。\n\n2. Service 负责业务规则、流程组织和事务边界。\n\n3. DAO 或 Mapper 负责访问数据库，DTO 负责层与层之间或接口之间的数据传输。\n\n4. 例如页面需要用户名和订单数，可以用 DTO 组合返回，不必为展示需求直接修改用户表结构。",
      "sourceIds": [],
      "keywords": [
        "Q12-006",
        "项目 / 实习拷打",
        "Controller",
        "Service",
        "DAO",
        "DTO"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 537,
      "originalQuestion": "你如何划分 Controller、Service、DAO 和 DTO？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-007",
      "number": "Q12-007",
      "question": "项目最大的难点是什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 选一个真实难点，按“现象→约束→定位证据→解决方案→验证”讲。\n\n2. 重点说明你为什么判断出根因，以及为什么这个修复有效。\n\n3. 第一次配置某个框架很费时间，也可以诚实讲，但别包装成大型架构突破。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 538,
      "originalQuestion": "项目最大的难点是什么？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-008",
      "number": "Q12-008",
      "question": "你做过哪些性能优化？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先说原来慢在哪里，再说改动为什么能减少成本，最后给真实测量。\n\n2. 比如把逐条查询改批量、把全量加载改分页、给高频 SQL 加合适索引。\n\n3. 没有可靠数据就说减少了哪些操作，不编造提升百分比。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 539,
      "originalQuestion": "你做过哪些性能优化？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-009",
      "number": "Q12-009",
      "question": "项目 QPS、数据量、用户量到底多少？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 把线上监控、本地压测和测试数据量分开回答。\n\n2. 没有线上权限就说明不知道峰值，可以讲自己实际测过的环境和结果。\n\n3. QPS 必须同时看延迟、错误率和硬件，单次响应快不代表整体吞吐高。",
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
        "美团",
        "QPS"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 540,
      "originalQuestion": "项目 QPS、数据量、用户量到底多少？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-010",
      "number": "Q12-010",
      "question": "为什么这里需要 Redis？不用行不行？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先讲 Redis 缓存了什么、为何值得缓存、多久失效、出故障怎么办。\n\n2. 访问量小或只需单实例缓存时，数据库或本地缓存可能足够。\n\n3. 要明确谁是权威数据源，不要把 Redis 当每个项目必须出现的关键词。",
      "sourceIds": [
        "N046"
      ],
      "keywords": [
        "Q12-010",
        "项目 / 实习拷打",
        "美团",
        "Redis"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 541,
      "originalQuestion": "为什么这里需要 Redis？不用行不行？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-011",
      "number": "Q12-011",
      "question": "项目里的事务边界怎么定？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 事务边界围住必须一起成功的数据库操作，例如订单和库存。\n\n2. 尽量缩短事务，不在里面等待慢远程调用。\n\n3. 跨系统不能自动一起回滚，就用可靠事件、状态和补偿。\n\n4. 还要说明异常怎样触发回滚，并实际测过失败路径。",
      "sourceIds": [],
      "keywords": [
        "Q12-011",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 542,
      "originalQuestion": "项目里的事务边界怎么定？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-012",
      "number": "Q12-012",
      "question": "接口幂等在你的项目里怎么实现？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 选择真实的重复来源来讲，例如双击、请求重试、审批回调或 MQ 重投。\n\n2. 再讲稳定业务键、唯一约束、处理状态和事务边界，最后说明重复请求返回什么。\n\n3. 只有前端防抖，不等于后端已实现可靠幂等。",
      "sourceIds": [
        "X05"
      ],
      "keywords": [
        "Q12-012",
        "项目 / 实习拷打",
        "得物"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 543,
      "originalQuestion": "接口幂等在你的项目里怎么实现？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-013",
      "number": "Q12-013",
      "question": "你项目中多线程用在哪里？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 说清哪几个任务能独立执行、为什么要异步或并行、用了什么线程池、队列多大，以及异常和超时怎么收集。\n\n2. 没有实际使用就讲同步方案已经够用，不要把建了一个线程池当成已经做过性能优化。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 544,
      "originalQuestion": "你项目中多线程用在哪里？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-014",
      "number": "Q12-014",
      "question": "为什么要加 MQ？不发消息能不能完成？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先指出必须同步完成的核心步骤，再说哪些后续任务能延迟处理。\n\n2. 引入 MQ 是为了避免下游耦合、缩短等待或吸收峰值，同时要承担消息可靠性、幂等和排障成本。\n\n3. 规模很小时，同库事务可能更简单。",
      "sourceIds": [],
      "keywords": [
        "Q12-014",
        "项目 / 实习拷打",
        "MQ"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 545,
      "originalQuestion": "为什么要加 MQ？不发消息能不能完成？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-015",
      "number": "Q12-015",
      "question": "认证、权限与多租户如何保证？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 认证确认你是谁，授权确认你能做什么，多租户隔离确认你能操作哪一家的数据。\n\n2. 服务端根据可信身份检查资源归属，查询、导出和缓存都要带隔离维度。\n\n3. 隐藏按钮、字段只读都不能替代后端权限检查。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 546,
      "originalQuestion": "认证、权限与多租户如何保证？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-016",
      "number": "Q12-016",
      "question": "项目日志如何设计和使用？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 日志围绕 traceId、业务单据 ID 和事件 ID 串起关键步骤：收到什么、处理到哪、结果是什么、为什么失败。\n\n2. 异常保留根因和堆栈，敏感信息脱敏。\n\n3. 指标用来发现异常，日志用来解释细节，别把整个大对象每次都打印。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X05 · 得物后端一面9.1",
          "url": "https://www.nowcoder.com/discuss/926058684231225344?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 547,
      "originalQuestion": "项目日志如何设计和使用？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-017",
      "number": "Q12-017",
      "question": "你如何测试，而不只是“点了一下页面”？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 测试要覆盖正常、边界、权限、重复、并发、超时和回滚。\n\n2. 接口测试不只看返回成功，还要查最终数据库和外部状态。\n\n3. 修 Bug 后加原场景回归。\n\n4. 按真实做过的测试回答，别把手工验证说成完整自动化体系。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 548,
      "originalQuestion": "你如何测试，而不只是“点了一下页面”？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-018",
      "number": "Q12-018",
      "question": "怎么部署、回滚与定位线上问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 按实际流程讲清构建、保存旧版本、注入配置、停止接流量、启动、健康检查和回滚。\n\n2. 只做过替换 jar 也可以讲具体命令和验证步骤，不必虚构 CI/CD。\n\n3. 进程存在不等于发布成功，还要确认端口和核心接口。",
      "sourceIds": [
        "NI018"
      ],
      "keywords": [
        "Q12-018",
        "项目 / 实习拷打",
        "实在智能"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 549,
      "originalQuestion": "怎么部署、回滚与定位线上问题？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-019",
      "number": "Q12-019",
      "question": "一次 Bug 修复你如何证明是根因？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先能复现或留下清晰证据，找到导致错误的最小条件，再解释代码为什么会在该条件下失败。\n\n2. 修复后跑原用例、边界和回归。\n\n3. 暂时没再出现只是现象，不足以单独证明根因已经修好。",
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
        "顺丰",
        "Bug"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 550,
      "originalQuestion": "一次 Bug 修复你如何证明是根因？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-021",
      "number": "Q12-021",
      "question": "为什么前端字段只读还要后端校验？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 前端只读只限制页面操作，请求仍可能从其他入口发来或被修改。\n\n2. 后端必须重新校验权限、金额、数量和状态，派生字段由可信数据计算。\n\n3. 前端负责及时提示，后端和数据库负责守住业务规则。\n\n4. 油卡可用金额应由充值、消费等可信记录计算，不能因为页面字段只读，就直接相信请求提交的余额。",
      "sourceIds": [],
      "keywords": [
        "Q12-021",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 551,
      "originalQuestion": "为什么前端字段只读还要后端校验？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-024",
      "number": "Q12-024",
      "question": "跨系统接口如何处理超时、签名、重试？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 先明确接口契约和鉴权，再设置连接、读取和整体超时。\n\n2. 每次业务操作使用稳定请求 ID，超时视为结果未知，按幂等键查询或重试。\n\n3. 日志保留脱敏摘要和状态，不要重试一次就换一个新业务 ID。",
      "sourceIds": [
        "NI007"
      ],
      "keywords": [
        "Q12-024",
        "项目 / 实习拷打",
        "美团"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 552,
      "originalQuestion": "跨系统接口如何处理超时、签名、重试？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-025",
      "number": "Q12-025",
      "question": "你如何理解 Agent 与普通问答、固定工作流？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 普通问答主要生成回复，工作流按程序预设步骤走，Agent 会根据目标和工具结果动态决定下一步。\n\n2. Agent 的灵活决策外面，仍需程序控制权限、状态、预算和停止条件。\n\n3. 一次调用模型的接口，不自动等于完整 Agent。\n\n4. 固定审批是按既定节点流转；Agent 查资料后决定继续搜索还是调用计算工具，才体现根据反馈调整下一步。",
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
        "得物",
        "Agent"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "A02 · ReAct 原论文",
          "url": "https://arxiv.org/abs/2210.03629",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 553,
      "originalQuestion": "你如何理解 Agent 与普通问答、固定工作流？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-026",
      "number": "Q12-026",
      "question": "Agent Loop 怎样终止，如何避免无限循环？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. Agent Loop 是“模型决定下一步→校验并执行工具→把结果交回模型→继续或结束”。\n\n2. 程序要设置最大轮次、总时间、费用、重复动作和重试上限，不能只盼模型自己说完成。\n\n3. 取消和失败也应是明确终态。",
      "sourceIds": [
        "X01",
        "X03"
      ],
      "keywords": [
        "Q12-026",
        "项目 / 实习拷打",
        "腾讯",
        "Agent",
        "Loop"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "A02 · ReAct 原论文",
          "url": "https://arxiv.org/abs/2210.03629",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 554,
      "originalQuestion": "Agent Loop 怎样终止，如何避免无限循环？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-027",
      "number": "Q12-027",
      "question": "工具调用如何设计协议？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 工具协议要讲清名称、用途、输入参数、输出、错误、权限和超时。\n\n2. 模型只提出调用，服务端还要校验参数和授权。\n\n3. 有副作用的调用要有稳定 ID 与幂等规则。\n\n4. 大结果返回摘要和引用，不把整份日志硬塞给模型。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 555,
      "originalQuestion": "工具调用如何设计协议？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-030",
      "number": "Q12-030",
      "question": "Agent 为什么使用 SSE 或 WebSocket？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. Agent 任务耗时长，前端需要边执行边看进度，所以用 SSE 或 WebSocket。\n\n2. SSE 适合单向推事件，WebSocket 适合双向实时交互。\n\n3. 事件带任务 ID 和序号，结果持久化，断线后查状态或补事件，而不是丢掉全部进度。",
      "sourceIds": [
        "X03"
      ],
      "keywords": [
        "Q12-030",
        "项目 / 实习拷打",
        "腾讯",
        "Agent",
        "SSE",
        "WebSocket"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-030",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "N06 · WHATWG：Server-sent Events",
          "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 556,
      "originalQuestion": "Agent 为什么使用 SSE 或 WebSocket？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-031",
      "number": "Q12-031",
      "question": "RAG 的完整链路与评估怎么讲？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. RAG 先把文档解析、切块、向量化并建索引。\n\n2. 用户提问后检索相关片段，必要时重排，再让模型依据这些材料回答。\n\n3. 排错时先查有没有召回正确证据，再查模型是否正确使用证据，不能所有错误都怪生成模型。",
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
        "未具名公司",
        "RAG"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-031",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "A03 · RAG 原论文",
          "url": "https://arxiv.org/abs/2005.11401",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 557,
      "originalQuestion": "RAG 的完整链路与评估怎么讲？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-032",
      "number": "Q12-032",
      "question": "上下文过长、工具结果过大怎么处理？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 上下文先保留当前目标、硬约束、最近相关操作和未完成事项。\n\n2. 历史压成结构化摘要，完整记录留在外部按需取。\n\n3. 工具大输出先摘要或分页，并给生成答案留预算。\n\n4. 订单号和授权等关键状态应单独存储，不能只靠摘要记住。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X03 · 微信后端开发秋招一面",
          "url": "https://www.nowcoder.com/discuss/924429259429421056?sourceSSR=post",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 558,
      "originalQuestion": "上下文过长、工具结果过大怎么处理？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-033",
      "number": "Q12-033",
      "question": "Agent 执行代码怎样控制风险？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "项目表达",
      "answer": "1. 执行代码要靠隔离环境和最小权限，限制文件路径、网络、CPU、内存、时长及进程数。\n\n2. 高影响操作先获得应用层授权，再记录审计。\n\n3. 工具输出只能当数据，不能升级成系统指令。\n\n4. 提示词里写“不许乱来”不是沙箱。",
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
        "美团",
        "Agent"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-033",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 559,
      "originalQuestion": "Agent 执行代码怎样控制风险？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-034",
      "number": "Q12-034",
      "question": "如何评价 Agent 的效果和成本？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 评价 Agent 先定义一批真实任务和成功标准，再测完成率、错误副作用、人工介入、步骤、延迟和成本。\n\n2. 分析失败是路由、参数、工具还是检索问题。\n\n3. 演示成功一次不能证明稳定，降低成本也要同步观察质量。",
      "sourceIds": [
        "N031",
        "NI007"
      ],
      "keywords": [
        "Q12-034",
        "项目 / 实习拷打",
        "拼多多",
        "美团",
        "Agent"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-034",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 560,
      "originalQuestion": "如何评价 Agent 的效果和成本？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-035",
      "number": "Q12-035",
      "question": "不会的问题或未做过的技术怎么回答？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 不会或没做过时，先说清经验范围，再讲确定知道的原理和准备如何验证。\n\n2. 可以说“这块没有实际落地，我理解是……，放到这个场景会先确认……”。\n\n3. 不要编线上事故、流量或个人贡献，能讲透真实细节更重要。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "originalKind": "体系补全",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q12-035",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 561,
      "originalQuestion": "不会的问题或未做过的技术怎么回答？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX013",
      "number": "UX013",
      "question": "提示词、RAG、微调分别解决什么问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 提示词告诉模型这次该怎么回答。\n\n2. RAG 先从外部资料检索证据，再交给模型回答。\n\n3. 微调通过训练调整模型参数，使它更适应某类任务或表达。\n\n4. 它们能配合使用，不是三选一。\n\n5. 企业资料经常变化时，通常先考虑检索和更新流程，而不是每次都重新训练。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Spring AI：AI Concepts",
          "url": "https://docs.spring.io/spring-ai/reference/concepts.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 562,
      "originalQuestion": "提示词、RAG、微调分别解决什么问题？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX014",
      "number": "UX014",
      "question": "Embedding 和 Reranker 有什么区别？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. Embedding 把文本转换成向量，用来从大量材料中检索可能相关的候选内容。\n\n2. Reranker 结合问题和每条候选内容重新评分，把更相关的结果排在前面。\n\n3. 两者通常先检索、后重排：前者负责找候选，后者负责精排；相关性高并不等于内容一定真实。",
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
        "美团",
        "Reranker"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "Spring AI：Embedding Models",
          "url": "https://docs.spring.io/spring-ai/reference/api/embeddings.html",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Cohere：Rerank 概念",
          "url": "https://docs.cohere.com/docs/rerank-overview",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 563,
      "originalQuestion": "Embedding 和 Reranker 有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX016",
      "number": "UX016",
      "question": "模型 Tool Calling 和 MCP 是一回事吗？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "1. 不是。Tool Calling 是让模型用结构化形式提出工具调用。\n\n2. MCP 是应用连接外部工具和资源的一套协议。\n\n3. 可以先通过 MCP 发现工具，再把工具描述提供给模型，由应用执行模型提出的合法调用。\n\n4. 没有 MCP，也可以调用本地注册的工具。",
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
        "美团",
        "Tool",
        "Calling"
      ],
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "project",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [
        {
          "title": "MCP 2025-06-18：Tools",
          "url": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "Spring AI：Tool Calling",
          "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 564,
      "originalQuestion": "模型 Tool Calling 和 MCP 是一回事吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q12-020",
      "number": "Q12-020",
      "question": "低代码项目如何体现后端技术而非仅拖表单？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 低代码经历的技术点要落在真正做过的后端工作：接口对接、流程事件、跨表一致性、权限、并发校验和部署排障。说明平台本来有什么、你写了什么。不要把平台自带的审批引擎算成自己从零实现。",
      "sourceIds": [],
      "keywords": [
        "Q12-020",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "isNew": false,
      "originalQuestion": "低代码项目如何体现后端技术而非仅拖表单？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 565
    },
    {
      "id": "bank-Q12-022",
      "number": "Q12-022",
      "question": "审批通过、提交后、流程结束事件怎么区分？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 提交后只是进入流程，不等于审批完成；审批通过可能是一个节点通过；流程结束是否代表最终成功，要看平台明确的事件定义。先确认触发时机、重复和撤回行为，再绑定生成台账等副作用，不要只凭事件名字猜。",
      "sourceIds": [],
      "keywords": [
        "Q12-022",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "isNew": false,
      "originalQuestion": "审批通过、提交后、流程结束事件怎么区分？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-022",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 566
    },
    {
      "id": "bank-Q12-023",
      "number": "Q12-023",
      "question": "产品关联唯一计件单价，历史工资如何避免被改动？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 产品用稳定 ID 关联计件单价，唯一约束或版本规则保证当前单价符合业务要求。生成工资时保存当次单价、数量、单位和金额快照；以后改单价，不应直接改掉已确认历史工资。重算和冲销要有明确流程。",
      "sourceIds": [],
      "keywords": [
        "Q12-023",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "isNew": false,
      "originalQuestion": "产品关联唯一计件单价，历史工资如何避免被改动？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 567
    },
    {
      "id": "bank-Q12-028",
      "number": "Q12-028",
      "question": "MCP 是什么？项目为什么要用？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "面经考点改写/延展",
      "answer": "1. MCP 是模型应用连接外部工具、资源等能力的标准协议，减少每个工具都单独设计接入方式的重复工作。它规定如何发现和交互，不替代鉴权、沙箱或业务幂等，也不保证模型一定选对工具。",
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
      "sourceFile": "12_项目与实习拷打.md",
      "isNew": false,
      "originalQuestion": "MCP 是什么？项目为什么要用？",
      "originalKind": "面经考点改写/延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "A01 · MCP Specification 2025-06-18",
          "url": "https://modelcontextprotocol.io/specification/2025-06-18",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 568
    },
    {
      "id": "bank-Q12-029",
      "number": "Q12-029",
      "question": "Java 后端与 Node/CLI 执行器如何分工？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 一种清晰分工是 Java 管用户、权限、任务和数据库状态，Node/CLI 执行器负责运行工具。两边通过带版本的任务和事件协议协作，用任务 ID 关联，支持取消、心跳和失败恢复。未落地的部分应明确说是设计方案。",
      "sourceIds": [],
      "keywords": [
        "Q12-029",
        "项目 / 实习拷打"
      ],
      "sourceFile": "12_项目与实习拷打.md",
      "isNew": false,
      "originalQuestion": "Java 后端与 Node/CLI 执行器如何分工？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-029",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 569
    },
    {
      "id": "bank-Q12-036",
      "number": "Q12-036",
      "question": "用了 Agent 后效率提升 30%，怎么证明是你的改动带来的？",
      "answer": "1. 先定义效率是完成时间、成功率还是人工成本，再固定任务集、模型版本、输入和人员条件比较改动前后。通过去掉某项改动的实验看它贡献多少，同时报告失败和成本。没有测量就不写“提升 30%”。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "用了 Agent 后效率提升 30%，怎么证明是你的改动带来的？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-036",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 570
    },
    {
      "id": "bank-Q12-037",
      "number": "Q12-037",
      "question": "知识库如何防止错误知识越积越多？",
      "answer": "1. 知识入库要保留来源、版本、负责人、适用范围和生效时间；冲突、过期和错误信息应能标记、修正和回滚。定期用固定问答集验证检索和答案，不让模型生成的猜测直接变成权威知识。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "知识库如何防止错误知识越积越多？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-037",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 571
    },
    {
      "id": "bank-Q12-038",
      "number": "Q12-038",
      "question": "主 Agent 选错子 Agent 或工具，工程上如何兜底？",
      "answer": "1. 先用工具契约和规则拦明显错误，执行后检查结果是否满足目标；失败只做有限重试、改路由或转人工。涉及真实副作用时，权限和状态必须由后端再次校验。把误路由样本加入回归集，别靠无限反思循环兜底。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "主 Agent 选错子 Agent 或工具，工程上如何兜底？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-038",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 572
    },
    {
      "id": "bank-Q12-039",
      "number": "Q12-039",
      "question": "对话压缩把多个订单号弄丢了，怎么办？",
      "answer": "1. 订单号、金额和当前选中对象应存结构化状态，摘要主要记背景。每个标识带来源、类型和版本，工具调用按明确状态取参数，而不是重新从摘要里猜。压缩前后验证关键字段，用户修改时同步更新状态。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "对话压缩把多个订单号弄丢了，怎么办？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 573
    },
    {
      "id": "bank-Q12-040",
      "number": "Q12-040",
      "question": "用户把转账金额从 5000 改成 50000，Agent 怎么避免误付？",
      "answer": "1. 金额变更后，旧的支付确认必须失效。生成带版本的新草稿，展示收款人、金额、币种和费用，确认绑定当前版本；执行前后端再查权限、限额和状态，并使用幂等键。关键金额不明确就不能凭模型猜测执行。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "用户把转账金额从 5000 改成 50000，Agent 怎么避免误付？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-040",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 574
    },
    {
      "id": "bank-Q12-041",
      "number": "Q12-041",
      "question": "工具注册表为什么设计成单例？什么时候不该这样做？",
      "answer": "1. 工具注册表若只存稳定、无用户状态的元数据，单例能统一管理并避免重复构建。\n\n2. 请求凭据、租户和会话状态不能放共享字段。\n\n3. 需要动态更新时，可用不可变快照替换。\n\n4. 单例本身并不自动保证并发安全。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "工具注册表为什么设计成单例？什么时候不该这样做？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-041",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 575
    },
    {
      "id": "bank-Q12-042",
      "number": "Q12-042",
      "question": "单实例服务用了 Caffeine、Redis、MySQL，Redis 能不能删？",
      "answer": "1. 可以评估删除，但先列清 Redis 承担哪些职责。\n\n2. 若只有单实例的普通读缓存，本地缓存可能够。\n\n3. 若承担共享会话、锁、限流或任务，不能直接用 Caffeine 等价替换。\n\n4. 还要考虑重启冷启动和未来扩容。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "单实例服务用了 Caffeine、Redis、MySQL，Redis 能不能删？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-042",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 576
    },
    {
      "id": "bank-Q12-043",
      "number": "Q12-043",
      "question": "抽奖从单抽扩展到十连抽，如何设计？",
      "answer": "1. 十连抽先定义十次是否独立、有无保底、库存不足时是否整批失败。\n\n2. 用唯一请求号代表一个批次，记录每次结果和发放状态。\n\n3. 公共校验、抽取、库存和发奖分清职责。\n\n4. 不能简单循环十次就忽略并发和部分失败。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "抽奖从单抽扩展到十连抽，如何设计？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q12-043",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 577
    },
    {
      "id": "bank-LX010",
      "number": "LX010",
      "question": "RAG 切片切断语义，跨片段问题怎样补全？",
      "answer": "1. 切片太短会把一句话、一个表格或一段规则拆散。\n\n2. 可以按标题和段落切，保留适量重叠，并记录所属文档、章节和相邻片段。\n\n3. 检索到小片后，再补相关父段或邻近片。\n\n4. 目标是“找到得准、给模型的上下文完整”，不是一味把每个片段加长。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "RAG 切片切断语义，跨片段问题怎样补全？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX010",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 578
    },
    {
      "id": "bank-LX011",
      "number": "LX011",
      "question": "保留最近五轮对话，再压缩历史，为什么能省 token？",
      "answer": "1. “最近五轮加摘要”是一种压缩办法，不是固定标准。最近对话保留细节，较早内容提炼成事实、决定和未完成事项，再按上下文长度决定何时更新摘要。是否省钱，要同时算少传的历史内容和生成摘要的成本；短对话不一定值得先总结。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "保留最近五轮对话，再压缩历史，为什么能省 token？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX011",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 579
    },
    {
      "id": "bank-LX012",
      "number": "LX012",
      "question": "数据权限怎样从 roleKey 硬编码改成可配置？",
      "answer": "1. 把“某角色能看什么数据”从写死的 if-else，改成受控的数据权限规则。\n\n2. 例如本人、本部门、下级部门或指定范围。\n\n3. 后端根据已登录用户算权限，并把限制真正加到查询里。\n\n4. 列表、详情、导出和异步任务都要执行，不能只改页面按钮或相信前端传来的部门。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "数据权限怎样从 roleKey 硬编码改成可配置？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX012",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 580
    },
    {
      "id": "bank-LX023",
      "number": "LX023",
      "question": "怎样证明 Canal→Kafka→目标库的同步延迟在 500ms 内？",
      "answer": "1. “同步延迟小于 500ms”必须先定义从哪里计时、到哪里结束。\n\n2. 可以记录源库提交、Canal 读取、发送 MQ、消费和目标库可查询等时点，再用事件 ID 串起来。\n\n3. 最后报告负载、样本量和 P95/P99 等分布。\n\n4. 只看一条日志或平均值，证明不了整个链路。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "怎样证明 Canal→Kafka→目标库的同步延迟在 500ms 内？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX023",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 581
    },
    {
      "id": "bank-LX026",
      "number": "LX026",
      "question": "RAG 的 topK 为什么是 6 或 8，越大越好吗？",
      "answer": "1. topK 就是先取多少条候选材料，越大不一定越好：少了可能漏证据，多了可能塞进噪声、拖慢响应。\n\n2. 固定文档、模型和测试题，试不同 K，比较能否找全证据、答案是否正确以及耗时和成本，再配合重排和去重。\n\n3. 6 或 8 都应是测试结果，不是背下来的标准值。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "RAG 的 topK 为什么是 6 或 8，越大越好吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX026",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 582
    },
    {
      "id": "bank-LX027",
      "number": "LX027",
      "question": "AI 写的代码能跑就直接合并吗？输出一直不对怎么办？",
      "answer": "1. 不能“能运行就合并”。先明确验收条件，再看代码差异是否碰了不该改的模块，以及权限、事务、并发、异常和资源释放是否正确，最后跑测试。反复生成错误时，找一个最小失败案例，把真正缺失的上下文补上，而不是一直重复“再改一下”。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "AI 写的代码能跑就直接合并吗？输出一直不对怎么办？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX027",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 583
    },
    {
      "id": "bank-LX028",
      "number": "LX028",
      "question": "@Tool 允许模型查库，怎样防止越权？",
      "answer": "1. 模型只能提出“想调用什么工具”，不能决定自己有什么权限。\n\n2. 工具入口必须用服务端可信的登录身份，检查租户、资源归属和参数，再执行受控查询。\n\n3. 最好暴露“查我的订单”等业务操作，不直接给任意 SQL。\n\n4. 模型传来的 userId 或 tenantId 不能直接当授权依据。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "@Tool 允许模型查库，怎样防止越权？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX028",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "官方文档",
          "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 584
    },
    {
      "id": "bank-LX030",
      "number": "LX030",
      "question": "长期记忆如何避免把错误信息永久记住？",
      "answer": "1. 长期记忆不是把所有聊天都存成事实。每条记忆要分清是用户明确说的、已验证事实，还是暂时猜测，并记录来源、时间、归属和必要的有效期。读的时候检查权限、过期和冲突；用户更正或删除后要同步生效，不能让错误摘要反复覆盖新事实。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "长期记忆如何避免把错误信息永久记住？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 585
    },
    {
      "id": "bank-LX032",
      "number": "LX032",
      "question": "模型需要返回固定 JSON，服务端怎么兜底？",
      "answer": "1. 先给明确的 JSON Schema，再用支持的结构化输出能力，收到结果后仍由程序解析和校验。\n\n2. 格式正确不等于业务正确，还要检查必填值、类型、数量、权限和取值范围。\n\n3. 遇到截断或不合法结果，可有限重试或返回失败，不要靠几个正则“修好”后直接执行重要操作。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "模型需要返回固定 JSON，服务端怎么兜底？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX032",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 586
    },
    {
      "id": "bank-UX015",
      "number": "UX015",
      "question": "RAG 文档或工具返回里出现“忽略规则”，Agent 应该怎么办？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "本轮补充",
      "answer": "1. 把这句话当外部数据，不当成更高权限的指令。检索文档、网页和工具返回都可能带有提示注入，试图诱导模型越权调用或泄露信息。除了在提示里区分指令和材料，还必须由服务端校验工具权限、参数和资源归属。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "RAG 文档或工具返回里出现“忽略规则”，Agent 应该怎么办？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX015",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "OWASP：LLM Prompt Injection Prevention",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 587
    },
    {
      "id": "bank-UX017",
      "number": "UX017",
      "question": "知识库文档删除或撤销权限后，怎样避免 AI 继续引用？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "本轮补充",
      "answer": "1. 不能只删原文件，还要让相关切片、向量索引、缓存和正在使用的上下文失效。更重要的是：检索和实际读取时按最新的可信权限判断，不能等后台清理完成才禁止访问。为每个切片保存文档 ID、版本和权限关联，才能准确找到需要处理的内容。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "isNew": false,
      "originalQuestion": "知识库文档删除或撤销权限后，怎样避免 AI 继续引用？",
      "originalKind": "本轮补充",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-UX017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Spring AI：Vector Databases",
          "url": "https://docs.spring.io/spring-ai/reference/api/vectordbs.html",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "OWASP：LLM Prompt Injection Prevention",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 588
    },
    {
      "id": "bank-RM009",
      "number": "RM009",
      "question": "MCP Session 和 Agent 对话 Session 是一回事吗？",
      "answer": "1. 不是同一回事。以 MCP 2025-11-25 为例，协议会话组织客户端与某个 MCP 服务端的交互；Agent 对话会话保存用户消息、任务状态和记忆。\n\n2. 它们的生命周期和标识可以不同，由应用维护关联。一次用户对话可能访问多个 MCP Server。\n\n3. 协议连接恢复不应清空用户聊天记录；MCP-Session-Id 也不是登录凭证或长期记忆数据库。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "MCP Session 和 Agent 对话 Session 是一回事吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM009",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "MCP 2025-11-25 Transports（固定版本）",
          "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/transports",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 589
    },
    {
      "id": "bank-RM010",
      "number": "RM010",
      "question": "MCP 有哪些传输方式？连上 MCP 就有资源访问权限吗？",
      "answer": "1. 以MCP 2025-11-25为基线，标准传输包括stdio和Streamable HTTP。\n\n2. 更早还有旧式HTTP+SSE，不能把新旧机制混说。\n\n3. 连通只表示能通信。HTTP授权验证访问凭据后，工具实现仍必须校验当前用户能否执行该操作、访问该租户和资源。\n\n4. 例如，用户能调用查订单工具，不表示他能查任意订单。userId应来自可信身份上下文，不能直接相信模型给出的userId参数。\n\n5. 不要用会话ID代替授权，也不要把上游令牌原样透传到任意下游。写工具还需审批、幂等和审计；stdio凭据管理与HTTP的授权流不同。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "MCP 有哪些传输方式？连上 MCP 就有资源访问权限吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM010",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "MCP 2025-11-25 Transports（固定版本）",
          "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/transports",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "MCP 2025-11-25 Authorization（固定版本）",
          "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 590
    },
    {
      "id": "bank-RM012",
      "number": "RM012",
      "question": "对话每 N 轮摘要，N 怎么确定？",
      "answer": "1. 不宜只按对话轮数压缩，因为不同轮次的内容长度差别很大，工具返回也可能一次占用大量 token。\n\n2. 先为系统提示、当前输入、工具返回和预期输出预留预算，历史接近预算时再进行摘要或截断。\n\n3. 订单号、金额和权限结论等重要信息保存在结构化状态中，并保留原始记录及检索入口，不能只依赖摘要。\n\n4. 通过关键信息召回率、任务成功率和成本测试压缩阈值。摘要要区分事实、未完成任务和推测，避免反复压缩丢失证据。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "对话每 N 轮摘要，N 怎么确定？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM012",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Anthropic：长任务Agent的运行框架",
          "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 591
    },
    {
      "id": "bank-RM013",
      "number": "RM013",
      "question": "用了 Apache Tika，就能把所有文档正确切成 RAG 片段吗？",
      "answer": "1. 不能。Tika主要负责识别文件类型、提取文本与元数据，解析接口可输出XHTML事件，供上层保留结构。RAG还要处理标题、段落、表格、阅读顺序、噪声和切块。提取出文字不代表原文的关系也被完整保留。\n\n2. 例如，表格里“产品—单价—生效日期”若被抽成无序文字，检索到了也可能答错。应保留表头、行关联、页码与文档版本，再按语义边界切分。\n\n3. 扫描件是否可识别取决于OCR等额外配置，不是Tika默认保证。用代表性文档验收缺字、跨页表格和结构完整性；本例为独立处理设计。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "用了 Apache Tika，就能把所有文档正确切成 RAG 片段吗？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM013",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Apache Tika 3.2 Parser interface",
          "url": "https://tika.apache.org/3.2.0/parser.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 592
    },
    {
      "id": "bank-RM014",
      "number": "RM014",
      "question": "RAG 知识库存在同一文档的多个版本，怎么避免混答？",
      "answer": "1. 每个文档片段都保存文档 ID、版本、有效时间、权限和发布状态，不能只用文件名区分版本。\n\n2. 普通问题默认只检索当前生效版本，历史问题按指定时间检索，避免新旧内容混在一起。\n\n3. 更新时先完成新版本解析和校验，再切换可见版本；旧片段按需要失效或保留为历史。\n\n4. 版本失效还要处理向量索引、检索缓存和已保存摘要，不能只替换原文件。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "RAG 知识库存在同一文档的多个版本，怎么避免混答？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM014",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Spring AI RAG",
          "url": "https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 593
    },
    {
      "id": "bank-RM016",
      "number": "RM016",
      "question": "Agent Harness 和 Hooks 是什么？和模型本身有什么区别？",
      "answer": "1. Harness通常指包围模型的运行框架：上下文管理、工具执行、权限、预算、状态保存、恢复和测试。它不是统一的协议名称。Hooks是框架在工具前后、会话开始结束等时机提供的扩展点，具体名字和语义依产品而异。\n\n2. 例如，工具执行前校验路径和审批，执行后截断超长输出、记录结果；任务切换会话时用进度文件或检查点恢复。这些不是只靠换一个模型完成的。\n\n3. Hook不是天然安全边界：真正执行端仍要鉴权与隔离。面试先用你的实际调用链说明职责，不要只堆Harness、ReAct等名词。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "Agent Harness 和 Hooks 是什么？和模型本身有什么区别？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM016",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Anthropic：长任务Agent的运行框架",
          "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 594
    },
    {
      "id": "bank-RM017",
      "number": "RM017",
      "question": "Agent 如何主动提醒或主动排障，而不是等用户发消息？",
      "answer": "1. 主动不是模型自己凭空醒来，而是外部事件或调度器触发任务。参考链路是：监控事件或定时器→队列→去重与权限检查→收集证据→Agent分析→按条件通知或提交审批。用户授权、打扰频率和成本上限要预先定义。\n\n2. 例如，错误率连续超阈值才创建诊断任务；同一事故只建一个活动任务。只读诊断可以自动执行，重启、删数据等高风险操作必须受控。\n\n3. 重复事件、迟到事件、静默时段、任务失败和误报都要处理。实时通知能力来自整个系统，不来自模型训练参数。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "Agent 如何主动提醒或主动排障，而不是等用户发消息？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM017",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 595
    },
    {
      "id": "bank-RM018",
      "number": "RM018",
      "question": "LangChain、LangGraph、自研 Agent Loop 怎么选择？",
      "answer": "1. 把它们看成不同抽象层。LangChain提供模型、工具和应用编排等集成；LangGraph更强调带状态的图执行、检查点和人机介入；自研Loop适合流程简单或需要强定制的情况，但要自己承担恢复、重试、状态与可观测性。\n\n2. 例如，一个“检索后回答”的短链路不必先搭复杂图；需要跨进程恢复、长任务暂停审批的流程，图状态和持久检查点更值得评估。\n\n3. 它们可以组合使用，不是互斥产品。接口、实现与语言生态会变，回答应说明项目版本；不要把“框架能保存状态”误认为“外部副作用自动只执行一次”。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "LangChain、LangGraph、自研 Agent Loop 怎么选择？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM018",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "LangGraph Overview",
          "url": "https://docs.langchain.com/oss/python/langgraph/overview",
          "origin": "原题附带资料，本次仅整理表述"
        },
        {
          "title": "LangGraph Persistence",
          "url": "https://docs.langchain.com/oss/python/langgraph/persistence",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 596
    },
    {
      "id": "bank-RM019",
      "number": "RM019",
      "question": "开放式 Agent 任务没有唯一标准答案，怎样评测？",
      "answer": "1. 没有唯一措辞，不等于没有验收标准。参考做法是按目标完成度、证据准确性、约束遵守、权限、成本和耗时分别评分。能自动校验的用测试或规则；主观质量用清晰评分量表、成对比较和人工抽检。保留失败轨迹便于定位。\n\n2. 例如，“修复登录Bug”可检查复现用例是否通过、其他用例是否回归、是否改了禁止修改的文件，而不是只看解释文字流畅不流畅。\n\n3. LLM裁判会有偏差，需与人工样本校准；固定测试集、模型配置和预算，不能把一次成功截图当总体成功率。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "开放式 Agent 任务没有唯一标准答案，怎样评测？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 597
    },
    {
      "id": "bank-RM035",
      "number": "RM035",
      "question": "向量检索的 HNSW 是怎么找近邻的？",
      "answer": "1. HNSW把向量组织成分层近邻图。搜索先在稀疏高层快速接近目标，再逐层下降，在底层探索候选并返回近似近邻。它不是每次把全部向量逐一精确比较，速度、召回率和索引内存需要权衡。\n\n2. 例如，可把高层看成跨区域的快速入口，底层做更细的邻居探索。增大搜索候选范围通常更有利于召回，但会增加工作量，要在固定数据集上测。\n\n3. 不能承诺总能找到精确最近邻或所有情况下都是O(log n)。元数据权限过滤、数据更新与索引参数会影响实际效果；图类比不代替数学保证。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "向量检索的 HNSW 是怎么找近邻的？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM035",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "HNSW原始论文（摘要页）",
          "url": "https://arxiv.org/abs/1603.09320",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 598
    },
    {
      "id": "bank-RM036",
      "number": "RM036",
      "question": "模型总参数、激活参数、数值精度和 MoE 有什么关系？",
      "answer": "1. 总参数量是模型全部权重的规模；激活参数量是处理当前 token 时实际参与计算的参数规模。\n\n2. MoE 通过路由选择部分专家，因此激活参数量可能小于总参数量，但其他权重仍需要存储或装载。\n\n3. 数值精度是权重或计算采用的表示格式。总参数、激活参数和精度共同影响显存、计算量和输出质量。\n\n4. 不能只凭总参数判断推理成本，也不能认为降低位宽就会让延迟同比例下降；具体表现还要结合模型、路由和硬件实测。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "模型总参数、激活参数、数值精度和 MoE 有什么关系？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM036",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "Switch Transformers原始论文（摘要页）",
          "url": "https://arxiv.org/abs/2101.03961",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 599
    },
    {
      "id": "bank-RM039",
      "number": "RM039",
      "question": "MySQL 和 PostgreSQL 怎么选？Redis又处在哪一层？",
      "answer": "1. MySQL和PostgreSQL都是关系数据库，先按事务模型、查询复杂度、扩展需求、运维经验和已有生态选择，不要简单排名。\n\n2. PostgreSQL的jsonb及相应索引等能力可作为具体评估项，但不意味着MySQL不能处理JSON。\n\n3. Redis常用于缓存和其他内存数据结构需求，不是默认替代关系库。\n\n4. 例如，团队已有稳定MySQL事务系统，不能为了“技术更新”盲目迁移；需要某些PostgreSQL扩展或复杂检索能力时，拿真实查询和数据验证收益。\n\n5. 不能说MySQL一定快、PG一定慢，或者Redis永不落盘。说明实际使用过哪一个，没有做过生产迁移就把结论标为选型分析。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "MySQL 和 PostgreSQL 怎么选？Redis又处在哪一层？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM039",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [
        {
          "title": "PostgreSQL JSON Types",
          "url": "https://www.postgresql.org/docs/current/datatype-json.html",
          "origin": "原题附带资料，本次仅整理表述"
        }
      ],
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 600
    },
    {
      "id": "bank-Q13-053",
      "number": "Q13-053",
      "question": "数组和链表有什么区别？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 数组按连续下标组织元素，按下标访问通常为 O(1)；中间增删常需要移动后续元素。\n\n2. 链表通过节点引用连接，按下标查找通常为 O(n)；定位到节点后修改链接较快，但定位本身也有成本。\n\n3. 数组通常较紧凑；链表的节点和引用有额外空间开销。\n\n4. 不能只因为插入多就认定链表更快，要结合具体访问方式判断。",
      "sourceIds": [],
      "keywords": [
        "Q13-053",
        "算法与数据结构",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q02-002"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 601,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-054",
      "number": "Q13-054",
      "question": "栈和队列分别是什么？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. 栈： 后进先出，像叠盘子，最后放入的先取出。\n\n2. 队列： 先进先出，像排队，先进入的先处理。\n\n3. 栈的场景： 括号匹配、回退、方法调用。\n\n4. 队列的场景： 任务排队、广度优先搜索。\n\n5. Java 常用： ArrayDeque 可用于普通栈或双端队列；线程间等待交接可考虑 BlockingQueue。",
      "sourceIds": [],
      "keywords": [
        "Q13-054",
        "算法与数据结构",
        "基础补充",
        "基础起步"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q02-022",
          "bank-Q02-023",
          "bank-Q13-017",
          "bank-Q13-025"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 602,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-055",
      "number": "Q13-055",
      "question": "时间复杂度中的 O(1)、O(n)、O(log n) 分别是什么意思？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "1. O(1) 表示操作量不随输入规模按比例增长，例如数组按下标访问。\n\n2. O(n) 表示操作量与规模近似线性增长，例如遍历数组。\n\n3. O(log n) 常见于每次显著缩小问题范围，例如有序数组的二分查找。\n\n4. O(n²) 表示操作量近似按平方增长，例如典型双层完整遍历。\n\n5. 时间复杂度描述增长趋势，不是精确耗时；空间复杂度还要考虑辅助结构和递归栈。",
      "sourceIds": [],
      "keywords": [
        "Q13-055",
        "算法与数据结构",
        "基础补充",
        "基础起步",
        "O",
        "n",
        "log"
      ],
      "sourceFile": "2026-09-20_基础补充.md",
      "isNew": true,
      "studyType": "concept",
      "provenance": {
        "type": "新增常见问法",
        "basedOnQuestionIds": [
          "bank-Q13-001",
          "bank-Q13-008",
          "bank-Q02-002"
        ],
        "reviewedOn": null,
        "answerRewrite": "2026-09-20 无表格短句整理，依据上一版内容"
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 603,
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-001",
      "number": "Q13-001",
      "question": "时间复杂度与空间复杂度怎么分析？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 时间复杂度看输入变大后，主要操作次数怎样增长。\n\n2. 空间复杂度看额外需要多少存储。\n\n3. 先确定 n 是什么，再统计循环和递归。\n\n4. 两层循环不一定 O(n²)，关键看总推进次数。\n\n5. 递归调用栈也要算空间。",
      "sourceIds": [],
      "keywords": [
        "Q13-001",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-001",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 604,
      "originalQuestion": "时间复杂度与空间复杂度怎么分析？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-002",
      "number": "Q13-002",
      "question": "两数之和怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 用哈希表记住前面见过的数字及下标。\n\n2. 扫到 x 时，先找 target-x，找到就返回。\n\n3. 没找到再保存 x。先查后存可避免重复使用当前元素。\n\n4. 平均时间 O(n)，空间 O(n)。\n\n5. 数组 [2,7,11]，目标 9：看到 2 先记下；看到 7 时查 9-7=2，之前有 2，答案就是它们的下标。",
      "sourceIds": [],
      "keywords": [
        "Q13-002",
        "算法与数据结构",
        "O",
        "n"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-002",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] twoSum(int[] a, int target) {\n    Map<Long, Integer> seen = new HashMap<>();\n    for (int i = 0; i < a.length; i++) {\n        Integer j = seen.get((long) target - a[i]);\n        if (j != null) return new int[]{j, i};\n        seen.put((long) a[i], i);\n    }\n    return new int[]{-1, -1};\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 605,
      "originalQuestion": "两数之和怎么做到 O(n)？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-003",
      "number": "Q13-003",
      "question": "三数之和如何去重？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 先排序，再固定一个数，用左右指针找另外两个。\n\n2. 总和小了左指针右移，大了右指针左移，等于目标就记录。\n\n3. 固定数和两端重复值都要跳过。\n\n4. 时间 O(n²)，不要靠最后全部塞 Set 掩盖去重逻辑。",
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
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-003",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<List<Integer>> threeSum(int[] input) {\n    int[] a = input.clone();\n    Arrays.sort(a);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i + 2 < a.length; i++) {\n        if (i > 0 && a[i] == a[i - 1]) continue;\n        int l = i + 1, r = a.length - 1;\n        while (l < r) {\n            long sum = (long) a[i] + a[l] + a[r];\n            if (sum < 0) l++;\n            else if (sum > 0) r--;\n            else {\n                ans.add(Arrays.asList(a[i], a[l], a[r]));\n                int lv = a[l], rv = a[r];\n                while (l < r && a[l] == lv) l++;\n                while (l < r && a[r] == rv) r--;\n            }\n        }\n    }\n    return ans;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 606,
      "originalQuestion": "三数之和如何去重？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-004",
      "number": "Q13-004",
      "question": "最长无重复子串怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 用滑动窗口维护“当前没有重复字符的一段”。\n\n2. 右边不断加入字符，遇到重复，就把左边移到该字符上次位置之后，但左边不能后退。\n\n3. 不断记录最大窗口长度，时间 O(n)。\n\n4. abba：扫到第二个 b，左边移到它前一个 b 后面；最后看到 a 时，不能把左边重新退回开头。",
      "sourceIds": [
        "N013"
      ],
      "keywords": [
        "Q13-004",
        "算法与数据结构",
        "百度"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-004",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int longestUnique(String s) {\n    Map<Character, Integer> last = new HashMap<>();\n    int left = 0, best = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        Integer old = last.put(c, right);\n        if (old != null) left = Math.max(left, old + 1);\n        best = Math.max(best, right - left + 1);\n    }\n    return best;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 607,
      "originalQuestion": "最长无重复子串怎么求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-006",
      "number": "Q13-006",
      "question": "和为 K 的连续子数组怎么数？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 用前缀和把区间求和变成两次累计和相减。\n\n2. 当前累计和是 s，前面每出现一次 s-k，就多一个和为 k 的区间。\n\n3. 用哈希表保存次数。初始化和 0 出现一次，先查询再登记当前和。\n\n4. 平均 O(n)。[1,2,1]，k=3：前缀和走到 3，找到初始 0；走到 4，找到前面的 1，所以有两个区间。",
      "sourceIds": [],
      "keywords": [
        "Q13-006",
        "算法与数据结构",
        "K"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-006",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long subarraySum(int[] a, long k) {\n    Map<Long, Long> freq = new HashMap<>();\n    freq.put(0L, 1L);\n    long sum = 0, answer = 0;\n    for (int x : a) {\n        sum += x;\n        answer += freq.getOrDefault(sum - k, 0L);\n        freq.put(sum, freq.getOrDefault(sum, 0L) + 1);\n    }\n    return answer;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 608,
      "originalQuestion": "和为 K 的连续子数组怎么数？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-007",
      "number": "Q13-007",
      "question": "合并重叠区间怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 先按区间起点排序。每次和结果中最后一个区间比较：重叠就把终点扩到更远，不重叠就另加一个区间。\n\n2. 排序后只需扫一遍，总时间 O(n log n)。\n\n3. 端点相接算不算重叠，要按题目边界定义。\n\n4. 闭区间 [1,3] 和 [2,6] 合成 [1,6]；再遇到 [8,10]，就新开一个区间。",
      "sourceIds": [
        "NI003"
      ],
      "keywords": [
        "Q13-007",
        "算法与数据结构",
        "招银网络科技"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-007",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[][] mergeIntervals(int[][] input) {\n    if (input.length == 0) return new int[0][];\n    int[][] a = new int[input.length][];\n    for (int i = 0; i < input.length; i++) a[i] = input[i].clone();\n    Arrays.sort(a, (x, y) -> Integer.compare(x[0], y[0]));\n    List<int[]> out = new ArrayList<>();\n    for (int[] cur : a) {\n        if (out.isEmpty() || out.get(out.size() - 1)[1] < cur[0]) {\n            out.add(cur);\n        } else {\n            int[] last = out.get(out.size() - 1);\n            last[1] = Math.max(last[1], cur[1]);\n        }\n    }\n    return out.toArray(new int[out.size()][]);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 609,
      "originalQuestion": "合并重叠区间怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-008",
      "number": "Q13-008",
      "question": "二分查找如何避免死循环和越界？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 二分先选定一种边界写法，例如左闭右开 [left,right)。\n\n2. 每轮根据 mid 判断，把不可能的半边排除。\n\n3. 更新必须让区间变小。\n\n4. 普通二分时间 O(log n)、空间 O(1)，不要混用 right=mid 与 right=mid-1 的不同模板。",
      "sourceIds": [],
      "keywords": [
        "Q13-008",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-008",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int lowerBound(int[] a, int x) {\n    int lo = 0, hi = a.length;\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] < x) lo = mid + 1;\n        else hi = mid;\n    }\n    return lo;\n}\nstatic int binarySearch(int[] a, int x) {\n    int p = lowerBound(a, x);\n    return p < a.length && a[p] == x ? p : -1;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 610,
      "originalQuestion": "二分查找如何避免死循环和越界？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-009",
      "number": "Q13-009",
      "question": "怎样用二分查找有序数组中目标值的第一次和最后一次出现位置？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 做两次二分：找第一个大于等于 target 的位置，再找第一个大于 target 的位置。\n\n2. 第二个位置减一就是最后一次出现。\n\n3. 最后检查目标是否存在，不存在返回 [-1,-1]。\n\n4. 时间 O(log n)。\n\n5. [1,2,2,2,3] 查 2：第一个 >=2 在 1，第一个 >2 在 4，所以范围是 [1,3]。",
      "sourceIds": [
        "X01"
      ],
      "keywords": [
        "Q13-009",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-009",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] searchRange(int[] a, int x) {\n    int left = lowerBound(a, x); // 复用代码08\n    if (left == a.length || a[left] != x) return new int[]{-1, -1};\n    int lo = left, hi = a.length;\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] <= x) lo = mid + 1;\n        else hi = mid;\n    }\n    return new int[]{left, lo - 1};\n}\n```",
      "references": [
        {
          "title": "X01 · 腾讯后端暑期实习面试记录",
          "url": "https://www.nowcoder.com/discuss/863532788627116032",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 611,
      "originalQuestion": "怎样用二分查找有序数组中目标值的第一次和最后一次出现位置？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-010",
      "number": "Q13-010",
      "question": "搜索旋转有序数组怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 旋转有序数组没有重复值时，每轮至少有一半仍然有序。\n\n2. 先判断哪半有序，再看 target 是否位于那半的数值范围，决定保留哪边。\n\n3. 时间 O(log n)。\n\n4. 允许重复时，某些情况只能逐步缩边，最坏 O(n)。",
      "sourceIds": [],
      "keywords": [
        "Q13-010",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-010",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int searchRotated(int[] a, int x) { // 元素互异\n    int lo = 0, hi = a.length - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] == x) return mid;\n        if (a[lo] <= a[mid]) {\n            if (a[lo] <= x && x < a[mid]) hi = mid - 1;\n            else lo = mid + 1;\n        } else {\n            if (a[mid] < x && x <= a[hi]) lo = mid + 1;\n            else hi = mid - 1;\n        }\n    }\n    return -1;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 612,
      "originalQuestion": "搜索旋转有序数组怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-011",
      "number": "Q13-011",
      "question": "反转单链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 先保存后续节点： `next = cur.next`。\n\n2. 反转指针： `cur.next = prev`。\n\n3. 向前推进： `prev = cur; cur = next`。\n\n4. 返回新头： 循环结束返回 `prev`。\n\n5. 复杂度： 时间 O(n)，额外空间 O(1)。\n\n6. 先保存 next，再改指向，否则会丢掉后半条链；测试空链表、单节点、多节点。",
      "sourceIds": [
        "N004"
      ],
      "keywords": [
        "Q13-011",
        "算法与数据结构",
        "美团"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q13-011",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode reverse(ListNode head) {\n    ListNode prev = null, cur = head;\n    while (cur != null) {\n        ListNode next = cur.next;\n        cur.next = prev;\n        prev = cur;\n        cur = next;\n    }\n    return prev;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 613,
      "originalQuestion": "反转单链表怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-012",
      "number": "Q13-012",
      "question": "如何判断链表有环并找到入口？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 快指针每次两步，慢指针一步。\n\n2. 有环时会相遇。相遇后让一个回到头，两者都一次走一步，再次相遇的位置就是环入口。\n\n3. 时间 O(n)、空间 O(1)，先做好 fast 和 fast.next 判空。",
      "sourceIds": [],
      "keywords": [
        "Q13-012",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-012",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode cycleEntry(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            ListNode p = head;\n            while (p != slow) {\n                p = p.next;\n                slow = slow.next;\n            }\n            return p;\n        }\n    }\n    return null;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 614,
      "originalQuestion": "如何判断链表有环并找到入口？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-013",
      "number": "Q13-013",
      "question": "删除链表倒数第 N 个节点？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 加一个 dummy 节点。\n\n2. 快指针先从 dummy 走 n 步，再让快慢一起走到快指针位于尾部。\n\n3. 这时慢指针就在待删节点前面，跳过它即可。\n\n4. 时间 O(L)、空间 O(1)，dummy 能统一删除头节点的情况。",
      "sourceIds": [
        "N042",
        "X06",
        "X08"
      ],
      "keywords": [
        "Q13-013",
        "算法与数据结构",
        "美团",
        "好未来",
        "N"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-013",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode removeNthFromEnd(ListNode head, int n) {\n    if (n <= 0) throw new IllegalArgumentException(\"n must be positive\");\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i < n; i++) {\n        fast = fast.next;\n        if (fast == null) throw new IllegalArgumentException(\"n exceeds length\");\n    }\n    while (fast.next != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}\n```",
      "references": [
        {
          "title": "X06 · 好未来Java面经（可见转发内容）",
          "url": "https://www.nowcoder.com/feed/main/detail/740c0c1fcf114d9784c43fc2d0f74664",
          "origin": "原题附带，未逐条重新核查"
        },
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 615,
      "originalQuestion": "删除链表倒数第 N 个节点？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-014",
      "number": "Q13-014",
      "question": "合并两个有序链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 用 dummy 和尾指针，每次比较两条链表当前头，把较小节点接到结果尾部，并推进那条链。\n\n2. 某一条用完，直接接上另一条剩余部分。\n\n3. 时间 O(m+n)，复用节点时额外空间 O(1)。",
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
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-014",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode mergeTwo(ListNode a, ListNode b) {\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (a != null && b != null) {\n        if (a.val <= b.val) { tail.next = a; a = a.next; }\n        else { tail.next = b; b = b.next; }\n        tail = tail.next;\n    }\n    tail.next = a != null ? a : b;\n    return dummy.next;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 616,
      "originalQuestion": "合并两个有序链表怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-015",
      "number": "Q13-015",
      "question": "合并 K 个有序链表？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 把每条链表的头放进小顶堆。\n\n2. 每次取最小节点接到答案，再把它的下一个节点放进堆，直到堆空。\n\n3. 总节点数 N、链表数 k 时，时间 O(N log k)、额外空间 O(k)。\n\n4. 堆里始终只保留每条链当前的候选头，不需要一次放入所有节点。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q13-015",
        "算法与数据结构",
        "拼多多",
        "K"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-015",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode mergeK(ListNode[] lists) {\n    PriorityQueue<ListNode> heap = new PriorityQueue<>(\n        (a, b) -> Integer.compare(a.val, b.val));\n    for (ListNode node : lists) if (node != null) heap.offer(node);\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (!heap.isEmpty()) {\n        ListNode node = heap.poll();\n        if (node.next != null) heap.offer(node.next);\n        tail.next = node;\n        tail = node;\n    }\n    tail.next = null;\n    return dummy.next;\n}\n```",
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 617,
      "originalQuestion": "合并 K 个有序链表？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-016",
      "number": "Q13-016",
      "question": "如何判断两个链表相交？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 两个指针分别走 A、B，走到末尾后切换到另一条链的头。\n\n2. 这样两人走过的总长度一致，最终在相交节点或 null 相遇。\n\n3. 比较节点引用，不是节点值。\n\n4. 无环前提下时间 O(m+n)、空间 O(1)。",
      "sourceIds": [],
      "keywords": [
        "Q13-016",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-016",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode intersection(ListNode a, ListNode b) { // 两链均无环\n    ListNode p = a, q = b;\n    while (p != q) {\n        p = p == null ? b : p.next;\n        q = q == null ? a : q.next;\n    }\n    return p;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 618,
      "originalQuestion": "如何判断两个链表相交？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-017",
      "number": "Q13-017",
      "question": "有效括号如何判断？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 左括号入栈，右括号检查栈顶是否是对应左括号，匹配才弹出。\n\n2. 中途不匹配立即失败，最后栈为空才算合法。\n\n3. 时间 O(n)、空间 O(n)，仅数量相同不能保证顺序正确。\n\n4. ([)] 虽然每种左右括号数量一样，但遇到 ) 时栈顶是 [，所以不合法。",
      "sourceIds": [],
      "keywords": [
        "Q13-017",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-017",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic boolean validBrackets(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '[' || c == '{') stack.push(c);\n        else {\n            if (c != ')' && c != ']' && c != '}') return false;\n            if (stack.isEmpty()) return false;\n            char open = stack.pop();\n            if ((c == ')' && open != '(') ||\n                (c == ']' && open != '[') ||\n                (c == '}' && open != '{')) return false;\n        }\n    }\n    return stack.isEmpty();\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 619,
      "originalQuestion": "有效括号如何判断？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-018",
      "number": "Q13-018",
      "question": "最小栈怎样做到 O(1) 查询最小值？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 一个栈存数据，另一个栈同步存“到这一层为止的最小值”。\n\n2. 入栈时更新最小值，出栈时两个一起弹。\n\n3. 这样 getMin 直接看辅助栈顶，所有基本操作都是 O(1)。\n\n4. 重复最小值也必须处理。\n\n5. 依次压入 3、1、2，辅助栈存 3、1、1；弹出 2 后最小值仍然是 1。",
      "sourceIds": [],
      "keywords": [
        "Q13-018",
        "算法与数据结构",
        "O"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-018",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic class MinStack {\n    private final Deque<Integer> data = new ArrayDeque<>();\n    private final Deque<Integer> mins = new ArrayDeque<>();\n    void push(int x) {\n        data.push(x);\n        mins.push(mins.isEmpty() ? x : Math.min(x, mins.peek()));\n    }\n    int pop() { int x = data.pop(); mins.pop(); return x; }\n    int top() {\n        if (data.isEmpty()) throw new NoSuchElementException();\n        return data.peek();\n    }\n    int getMin() {\n        if (mins.isEmpty()) throw new NoSuchElementException();\n        return mins.peek();\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 620,
      "originalQuestion": "最小栈怎样做到 O(1) 查询最小值？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-020",
      "number": "Q13-020",
      "question": "滑动窗口最大值怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 用双端队列保存可能成为最大值的下标：队头移走已过期的，队尾移走不比新元素大的，剩下按值递减。\n\n2. 队头就是当前窗口最大值。\n\n3. 每个下标最多进出一次，时间 O(n)、空间 O(k)。\n\n4. 存下标而不是只存值，才知道哪个元素已经离开窗口；重复最大值也能正确处理。",
      "sourceIds": [],
      "keywords": [
        "Q13-020",
        "算法与数据结构",
        "O",
        "n"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] windowMax(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    int[] out = new int[a.length - k + 1];\n    Deque<Integer> dq = new ArrayDeque<>();\n    for (int i = 0; i < a.length; i++) {\n        while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();\n        while (!dq.isEmpty() && a[dq.peekLast()] <= a[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) out[i - k + 1] = a[dq.peekFirst()];\n    }\n    return out;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 621,
      "originalQuestion": "滑动窗口最大值怎么做到 O(n)？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-021",
      "number": "Q13-021",
      "question": "手写 LRU 缓存的结构与操作？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. LRU 用哈希表快速找到节点，用双向链表记录最近使用顺序。\n\n2. 访问或更新就移到最新位置，容量满时删最久没用的尾节点，同时删哈希映射。\n\n3. 平均 get/put 都是 O(1)，仅一个普通队列不够快速移动任意节点。",
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
        "阿里",
        "LRU"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-021",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic class LRUCache {\n    private static class Node {\n        int key, value; Node prev, next;\n        Node(int key, int value) { this.key = key; this.value = value; }\n    }\n    private final int capacity;\n    private final Map<Integer, Node> map = new HashMap<>();\n    private final Node head = new Node(0, 0), tail = new Node(0, 0);\n    LRUCache(int capacity) {\n        if (capacity < 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    private void unlink(Node n) {\n        n.prev.next = n.next; n.next.prev = n.prev;\n    }\n    private void addFirst(Node n) {\n        n.next = head.next; n.prev = head;\n        head.next.prev = n; head.next = n;\n    }\n    int get(int key) {\n        Node n = map.get(key);\n        if (n == null) return -1; // 教学约定：-1表示未命中\n        unlink(n); addFirst(n); return n.value;\n    }\n    void put(int key, int value) {\n        Node n = map.get(key);\n        if (n != null) { n.value = value; unlink(n); addFirst(n); return; }\n        n = new Node(key, value); map.put(key, n); addFirst(n);\n        if (map.size() > capacity) {\n            Node old = tail.prev; unlink(old); map.remove(old.key);\n        }\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 622,
      "originalQuestion": "手写 LRU 缓存的结构与操作？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-022",
      "number": "Q13-022",
      "question": "数组中第 K 大元素怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 找第 k 大，可以维护大小 k 的小顶堆，堆里始终留下最大的 k 个，堆顶就是其中最小的，也就是第 k 大。\n\n2. 时间 O(n log k)、空间 O(k)。\n\n3. 快速选择平均 O(n)，但最坏 O(n²)。\n\n4. 找最大的 3 个，用小顶堆便于踢掉“当前保留集合里最小的”；不要和找最小 k 个的大顶堆混淆。",
      "sourceIds": [
        "N002",
        "N005",
        "N054"
      ],
      "keywords": [
        "Q13-022",
        "算法与数据结构",
        "美团",
        "货拉拉",
        "K"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-022",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int kthLargest(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    PriorityQueue<Integer> heap = new PriorityQueue<>();\n    for (int x : a) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    return heap.peek();\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 623,
      "originalQuestion": "数组中第 K 大元素怎么找？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-023",
      "number": "Q13-023",
      "question": "前 K 个高频元素怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 先用哈希表统计每个元素出现次数，再用大小 k 的小顶堆保留频率最高的 k 个，或按频次分桶。\n\n2. 并列频率的输出规则要先说明。\n\n3. 哈希+堆常为平均 O(n+u log k)，u 是不同元素数。",
      "sourceIds": [],
      "keywords": [
        "Q13-023",
        "算法与数据结构",
        "K"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-023",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] topKFrequent(int[] a, int k) {\n    if (k < 0) throw new IllegalArgumentException();\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int x : a) freq.put(x, freq.getOrDefault(x, 0) + 1);\n    PriorityQueue<Integer> heap = new PriorityQueue<>((x, y) -> {\n        int c = Integer.compare(freq.get(x), freq.get(y));\n        return c != 0 ? c : Integer.compare(x, y);\n    });\n    for (int x : freq.keySet()) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    int[] out = new int[heap.size()];\n    for (int i = out.length - 1; i >= 0; i--) out[i] = heap.poll();\n    return out;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 624,
      "originalQuestion": "前 K 个高频元素怎么求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-024",
      "number": "Q13-024",
      "question": "二叉树前中后序遍历怎么写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 前序是根→左→右，中序是左→根→右，后序是左→右→根。\n\n2. 记忆诀窍是看“根”出现在前、中还是后。\n\n3. 递归时间 O(n)、栈空间 O(h)。\n\n4. 迭代可用显式栈，极深树要留意递归溢出。",
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
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-024",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<Integer> inorder(TreeNode root) {\n    List<Integer> out = new ArrayList<>();\n    Deque<TreeNode> stack = new ArrayDeque<>();\n    TreeNode p = root;\n    while (p != null || !stack.isEmpty()) {\n        while (p != null) { stack.push(p); p = p.left; }\n        p = stack.pop(); out.add(p.val); p = p.right;\n    }\n    return out;\n}\n// 前序递归：先out.add(root.val)，再递归left/right；后序：放到两次递归之后。\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 625,
      "originalQuestion": "二叉树前中后序遍历怎么写？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-025",
      "number": "Q13-025",
      "question": "二叉树层序遍历与锯齿遍历？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 层序遍历用队列。每层开始先记住队列大小，只处理这几个节点，并把孩子放进队列留给下一层。\n\n2. 锯齿遍历按层交替记录方向即可。\n\n3. 时间 O(n)，辅助空间与最大层宽有关。\n\n4. 不能一边加入孩子，一边重新拿 queue.size() 当本层次数，否则会把下一层也混进来。",
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
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-025",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<List<Integer>> levels(TreeNode root, boolean zigzag) {\n    List<List<Integer>> out = new ArrayList<>();\n    if (root == null) return out;\n    Queue<TreeNode> q = new ArrayDeque<>(); q.offer(root);\n    boolean reverse = false;\n    while (!q.isEmpty()) {\n        int size = q.size();\n        Deque<Integer> row = new ArrayDeque<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode n = q.poll();\n            if (reverse) row.addFirst(n.val); else row.addLast(n.val);\n            if (n.left != null) q.offer(n.left);\n            if (n.right != null) q.offer(n.right);\n        }\n        out.add(new ArrayList<>(row));\n        if (zigzag) reverse = !reverse;\n    }\n    return out;\n}\n```",
      "references": [
        {
          "title": "X08 · 美团java后端日常实习一二面",
          "url": "https://www.nowcoder.com/feed/main/detail/d27704499b5c41e0bd0019a8d158a052",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 626,
      "originalQuestion": "二叉树层序遍历与锯齿遍历？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-026",
      "number": "Q13-026",
      "question": "二叉树最大深度和直径分别怎么算？直径一定经过根吗？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 最大深度是 1+左右子树深度的较大值。\n\n2. 直径则在求深度时，顺便用“左深度+右深度”更新最大路径边数，最大路径不一定经过根。\n\n3. 一次 DFS 即可 O(n)，辅助空间 O(h)。",
      "sourceIds": [
        "N034"
      ],
      "keywords": [
        "Q13-026",
        "算法与数据结构",
        "小米"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-026",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int maxDepth(TreeNode n) {\n    return n == null ? 0 : 1 + Math.max(maxDepth(n.left), maxDepth(n.right));\n}\nstatic int diameter(TreeNode root) {\n    int[] best = {0};\n    heightForDiameter(root, best);\n    return best[0];\n}\nstatic int heightForDiameter(TreeNode n, int[] best) {\n    if (n == null) return 0;\n    int l = heightForDiameter(n.left, best), r = heightForDiameter(n.right, best);\n    best[0] = Math.max(best[0], l + r);\n    return 1 + Math.max(l, r);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 627,
      "originalQuestion": "二叉树最大深度和直径分别怎么算？直径一定经过根吗？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-027",
      "number": "Q13-027",
      "question": "验证二叉搜索树怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 验证 BST 要检查整棵子树的值域，不只比较父子。\n\n2. 递归传上下界：左子树必须小于当前值，右子树必须大于当前值，同时继承祖先约束。\n\n3. 时间 O(n)，边界可用 long，重复值规则按题意。\n\n4. 根是 10，左孩子是 5，但 5 的右孩子是 12。12 虽然大于 5，仍违反“整棵左子树都小于 10”。",
      "sourceIds": [],
      "keywords": [
        "Q13-027",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-027",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic boolean isBST(TreeNode root) {\n    return bstRange(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nstatic boolean bstRange(TreeNode n, long low, long high) {\n    if (n == null) return true;\n    if (n.val <= low || n.val >= high) return false;\n    return bstRange(n.left, low, n.val) && bstRange(n.right, n.val, high);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 628,
      "originalQuestion": "验证二叉搜索树怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-028",
      "number": "Q13-028",
      "question": "二叉树最近公共祖先怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 递归到 p 或 q 就返回该节点。\n\n2. 左右都找到目标时，当前节点就是公共祖先。\n\n3. 只有一边找到就把那边往上传。\n\n4. 时间 O(n)、空间 O(h)。\n\n5. 通常题目保证两点存在，否则还要额外确认是否真的都找到。",
      "sourceIds": [],
      "keywords": [
        "Q13-028",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-028",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic TreeNode lca(TreeNode root, TreeNode p, TreeNode q) { // 假定p、q都存在\n    if (root == null || root == p || root == q) return root;\n    TreeNode l = lca(root.left, p, q), r = lca(root.right, p, q);\n    if (l != null && r != null) return root;\n    return l != null ? l : r;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 629,
      "originalQuestion": "二叉树最近公共祖先怎么找？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-029",
      "number": "Q13-029",
      "question": "岛屿数量怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 遍历网格，遇到没访问过的陆地就计数加一，再用 DFS/BFS 把它四方向连通的陆地全部标记。\n\n2. 这样每片岛只数一次。\n\n3. 时间 O(mn)，空间最坏 O(mn)，对角相邻通常不算连通。",
      "sourceIds": [],
      "keywords": [
        "Q13-029",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-029",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int islands(char[][] g) { // 矩形网格；会修改输入\n    if (g.length == 0 || g[0].length == 0) return 0;\n    int m = g.length, n = g[0].length, count = 0;\n    int[] dr = {1, -1, 0, 0}, dc = {0, 0, 1, -1};\n    Queue<int[]> q = new ArrayDeque<>();\n    for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {\n        if (g[r][c] != '1') continue;\n        count++; g[r][c] = '0'; q.offer(new int[]{r, c});\n        while (!q.isEmpty()) {\n            int[] p = q.poll();\n            for (int d = 0; d < 4; d++) {\n                int rr = p[0] + dr[d], cc = p[1] + dc[d];\n                if (rr >= 0 && rr < m && cc >= 0 && cc < n && g[rr][cc] == '1') {\n                    g[rr][cc] = '0'; q.offer(new int[]{rr, cc});\n                }\n            }\n        }\n    }\n    return count;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 630,
      "originalQuestion": "岛屿数量怎么求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-032",
      "number": "Q13-032",
      "question": "括号生成如何回溯？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 回溯时记录用了几个左括号、几个右括号。\n\n2. 左括号没到 n 就能放。\n\n3. 右括号只有少于左括号时才能放。\n\n4. 放满 2n 个就保存答案。\n\n5. 这样生成过程本身就不会有非法前缀，复杂度还要计入所有输出。",
      "sourceIds": [
        "X02"
      ],
      "keywords": [
        "Q13-032",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-032",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<String> parentheses(int n) {\n    if (n < 0) throw new IllegalArgumentException();\n    List<String> out = new ArrayList<>();\n    parenDfs(n, 0, 0, new StringBuilder(), out);\n    return out;\n}\nstatic void parenDfs(int n, int left, int right, StringBuilder path, List<String> out) {\n    if (path.length() == 2 * n) { out.add(path.toString()); return; }\n    if (left < n) {\n        path.append('('); parenDfs(n, left + 1, right, path, out);\n        path.deleteCharAt(path.length() - 1);\n    }\n    if (right < left) {\n        path.append(')'); parenDfs(n, left, right + 1, path, out);\n        path.deleteCharAt(path.length() - 1);\n    }\n}\n```",
      "references": [
        {
          "title": "X02 · 拼多多服务端开发秋招面经",
          "url": "https://www.nowcoder.com/discuss/926155090849693696",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 631,
      "originalQuestion": "括号生成如何回溯？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-033",
      "number": "Q13-033",
      "question": "全排列如何回溯？有重复元素怎么办？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 每层选一个还没用过的元素，放入路径，递归后撤销选择。\n\n2. 有重复值时先排序，跳过同层重复选择。\n\n3. 保存答案时复制路径，不能直接存同一个可变 List。\n\n4. 互异 n 个数有 n! 个排列，输出本身就很大。",
      "sourceIds": [],
      "keywords": [
        "Q13-033",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-033",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<List<Integer>> permutations(int[] input) {\n    int[] a = input.clone(); Arrays.sort(a);\n    List<List<Integer>> out = new ArrayList<>();\n    permDfs(a, new boolean[a.length], new ArrayList<>(), out);\n    return out;\n}\nstatic void permDfs(int[] a, boolean[] used, List<Integer> path, List<List<Integer>> out) {\n    if (path.size() == a.length) { out.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < a.length; i++) {\n        if (used[i] || (i > 0 && a[i] == a[i - 1] && !used[i - 1])) continue;\n        used[i] = true; path.add(a[i]); permDfs(a, used, path, out);\n        path.remove(path.size() - 1); used[i] = false;\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 632,
      "originalQuestion": "全排列如何回溯？有重复元素怎么办？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-034",
      "number": "Q13-034",
      "question": "最大子数组和怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 每到一个数，决定“接在前一段后面”还是“从自己重新开始”，取更大的作为以当前结尾的最佳和，再更新全局答案。\n\n2. 时间 O(n)、空间 O(1)。\n\n3. 全负数组应取最大的那个负数，不能默认答案为 0。",
      "sourceIds": [
        "N031"
      ],
      "keywords": [
        "Q13-034",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-034",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long maxSubarray(int[] a) {\n    if (a.length == 0) throw new IllegalArgumentException();\n    long ending = a[0], best = a[0];\n    for (int i = 1; i < a.length; i++) {\n        ending = Math.max((long) a[i], ending + a[i]);\n        best = Math.max(best, ending);\n    }\n    return best;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 633,
      "originalQuestion": "最大子数组和怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-035",
      "number": "Q13-035",
      "question": "最长递增子序列怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 简单 DP 记录以每个位置结尾的最长递增长度，时间 O(n²)。\n\n2. 优化版用 tails 记录“每种长度能达到的最小结尾”，每个数二分第一个 >= 它的位置替换，时间 O(n log n)。\n\n3. tails 不一定就是最终那条实际子序列。",
      "sourceIds": [],
      "keywords": [
        "Q13-035",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-035",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int lisLength(int[] a) {\n    int[] tails = new int[a.length]; int size = 0;\n    for (int x : a) {\n        int lo = 0, hi = size;\n        while (lo < hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (tails[mid] < x) lo = mid + 1; else hi = mid;\n        }\n        tails[lo] = x;\n        if (lo == size) size++;\n    }\n    return size;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 634,
      "originalQuestion": "最长递增子序列怎么求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-036",
      "number": "Q13-036",
      "question": "零钱兑换最少硬币数怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. dp[x] 表示凑出金额 x 的最少硬币数。\n\n2. dp[0]=0，其他先设不可达。\n\n3. 每个金额尝试最后放一种硬币，取 dp[x-coin]+1 的最小值。\n\n4. 凑不出返回 -1，时间 O(金额×面额种类)，面额必须为正。",
      "sourceIds": [],
      "keywords": [
        "Q13-036",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-036",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int coinChange(int[] coins, int amount) {\n    if (amount < 0) throw new IllegalArgumentException();\n    for (int c : coins) if (c <= 0) throw new IllegalArgumentException();\n    int inf = Integer.MAX_VALUE / 2;\n    int[] dp = new int[amount + 1]; Arrays.fill(dp, inf); dp[0] = 0;\n    for (int x = 1; x <= amount; x++)\n        for (int c : coins) if (c <= x) dp[x] = Math.min(dp[x], dp[x - c] + 1);\n    return dp[amount] == inf ? -1 : dp[amount];\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 635,
      "originalQuestion": "零钱兑换最少硬币数怎么求？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-037",
      "number": "Q13-037",
      "question": "最小路径和与0/1背包的状态怎么设计？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 最小路径和：到一格的最小成本等于自身值加“上边或左边较小的成本”。\n\n2. 0/1 背包：每件物品最多一次，一维容量必须倒序更新，防止一轮反复使用同一件。\n\n3. 先说清 dp 的含义，再写转移式。",
      "sourceIds": [
        "X07"
      ],
      "keywords": [
        "Q13-037",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "面经考点改写/延展",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-037",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long minPathSum(int[][] grid) { // 非空矩形，只能向右/下\n    if (grid.length == 0 || grid[0].length == 0) throw new IllegalArgumentException();\n    int n = grid[0].length;\n    long[] dp = new long[n];\n    for (int r = 0; r < grid.length; r++) for (int c = 0; c < n; c++) {\n        if (r == 0 && c == 0) dp[c] = grid[r][c];\n        else if (r == 0) dp[c] = dp[c - 1] + grid[r][c];\n        else if (c == 0) dp[c] += grid[r][c];\n        else dp[c] = Math.min(dp[c], dp[c - 1]) + grid[r][c];\n    }\n    return dp[n - 1];\n}\nstatic long knapsack01(int[] weight, int[] value, int capacity) {\n    if (capacity < 0 || weight.length != value.length) throw new IllegalArgumentException();\n    long[] dp = new long[capacity + 1]; // 容量以内的最大价值，可不装满\n    for (int i = 0; i < weight.length; i++) {\n        if (weight[i] <= 0) throw new IllegalArgumentException();\n        for (int c = capacity; c >= weight[i]; c--)\n            dp[c] = Math.max(dp[c], dp[c - weight[i]] + value[i]);\n    }\n    return dp[capacity];\n}\n```",
      "references": [
        {
          "title": "X07 · 腾讯后端开发岗面经-07",
          "url": "https://www.nowcoder.com/discuss/924809073185300480",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 636,
      "originalQuestion": "最小路径和与0/1背包的状态怎么设计？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-038",
      "number": "Q13-038",
      "question": "快排、归并、堆排序的取舍？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 快排通过分区排序，平均时间 O(n log n)，最坏 O(n²)，通常不稳定；递归栈平均 O(log n)，最坏 O(n)。\n\n2. 数组归并排序通过合并有序段完成，时间 O(n log n)，可以稳定实现，通常需要 O(n) 额外空间。\n\n3. 堆排序反复调整堆并取出堆顶，时间 O(n log n)，通常不稳定，额外空间通常 O(1)。\n\n4. 稳定性指相等元素排序后的相对顺序保持不变。",
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
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题重点重写",
        "sourceQuestionId": "bank-Q13-038",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic void mergeSort(int[] a) { mergeSortRange(a, new int[a.length], 0, a.length); }\nstatic void mergeSortRange(int[] a, int[] temp, int lo, int hi) {\n    if (hi - lo <= 1) return;\n    int mid = lo + (hi - lo) / 2;\n    mergeSortRange(a, temp, lo, mid); mergeSortRange(a, temp, mid, hi);\n    int i = lo, j = mid, k = lo;\n    while (i < mid && j < hi) temp[k++] = a[i] <= a[j] ? a[i++] : a[j++];\n    while (i < mid) temp[k++] = a[i++];\n    while (j < hi) temp[k++] = a[j++];\n    System.arraycopy(temp, lo, a, lo, hi - lo);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 637,
      "originalQuestion": "快排、归并、堆排序的取舍？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-039",
      "number": "Q13-039",
      "question": "接雨水怎么用双指针？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 一格能装多少水，取决于左右最高墙中较低的那个。\n\n2. 双指针维护左右已知最高值，每次处理较低边界一侧，把能确定的水量累加。\n\n3. 每格处理一次，时间 O(n)、额外空间 O(1)。\n\n4. [3,0,2] 中间那格两边最高墙是 3 和 2，所以最多装 2，不是 3。",
      "sourceIds": [
        "N003"
      ],
      "keywords": [
        "Q13-039",
        "算法与数据结构",
        "字节跳动"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-039",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long trap(int[] h) { // 非负高度\n    int l = 0, r = h.length - 1, leftMax = 0, rightMax = 0;\n    long water = 0;\n    while (l <= r) {\n        if (leftMax <= rightMax) {\n            leftMax = Math.max(leftMax, h[l]); water += leftMax - h[l++];\n        } else {\n            rightMax = Math.max(rightMax, h[r]); water += rightMax - h[r--];\n        }\n    }\n    return water;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 638,
      "originalQuestion": "接雨水怎么用双指针？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-040",
      "number": "Q13-040",
      "question": "ACM 输入输出模式怎么写得稳？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. ACM 模式要自己读输入、组织多组测试并输出答案。\n\n2. 先确认第一项是不是测试组数、如何到 EOF、大输入用缓冲。\n\n3. 通常类名为 Main，不输出“请输入”之类提示，多组之间重置状态，最后一行没有换行也要能读。",
      "sourceIds": [],
      "keywords": [
        "Q13-040",
        "算法与数据结构",
        "ACM"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "originalKind": "体系补全",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-Q13-040",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nimport java.io.*;\npublic class Main {\n    static class FastScanner {\n        private final InputStream in = System.in;\n        private final byte[] buffer = new byte[1 << 16];\n        private int ptr = 0, len = 0;\n        private int read() throws IOException {\n            if (ptr >= len) {\n                len = in.read(buffer); ptr = 0;\n                if (len < 0) return -1;\n            }\n            return buffer[ptr++] & 0xff;\n        }\n        Integer nextInt() throws IOException {\n            int c;\n            do { c = read(); } while (c != -1 && c <= ' ');\n            if (c == -1) return null;\n            int sign = 1;\n            if (c == '-') { sign = -1; c = read(); }\n            if (c < '0' || c > '9') throw new IOException(\"invalid integer\");\n            long value = 0;\n            while (c >= '0' && c <= '9') {\n                value = value * 10 + c - '0';\n                if (value > (sign == 1 ? 2147483647L : 2147483648L))\n                    throw new IOException(\"integer overflow\");\n                c = read();\n            }\n            if (c != -1 && c > ' ') throw new IOException(\"invalid delimiter\");\n            return (int) (sign * value);\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        FastScanner fs = new FastScanner();\n        // 演示：读到EOF并求和。实际比赛请替换成题目指定的T/n/m与求解逻辑。\n        long sum = 0;\n        Integer x;\n        while ((x = fs.nextInt()) != null) sum += x;\n        System.out.println(sum);\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 639,
      "originalQuestion": "ACM 输入输出模式怎么写得稳？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-RM030",
      "number": "RM030",
      "question": "有序数组原地去重，每个不同数字只保留一次，怎么做？",
      "answer": "1. 用快慢指针。快指针遍历原数组，慢指针表示下一个写入位置。\n\n2. 当前值与上一个已保留值不同，才写到慢指针位置。\n\n3. 返回新长度，前面这段是答案，后面的旧内容不必清零。\n\n4. 时间O(n)，额外空间O(1)。\n\n5. [1,1,2,2,3]处理后前3个位置为[1,2,3]，返回3。空数组返回0。",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "sourceIds": [
        "NI009"
      ],
      "keywords": [
        "RM030",
        "算法与数据结构",
        "拼多多"
      ],
      "sourceFile": "recent-interviews-study.md",
      "originalKind": "面经具体追问 / 练习",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-RM030",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\n    static int deduplicate(int[] a) {\n        Objects.requireNonNull(a, \"array\");\n        int write = 0;\n        for (int read = 0; read < a.length; read++) {\n            if (write == 0 || a[read] != a[write - 1]) a[write++] = a[read];\n        }\n        return write;\n    }\n```\n\n完整类、节点定义及测试见资料包 code/InterviewPractice.java；单独片段需补齐相应上下文。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 640,
      "originalQuestion": "有序数组原地去重，每个不同数字只保留一次，怎么做？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX019",
      "number": "UX019",
      "question": "最长公共子序列怎么求？和最长公共子串有什么区别？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 子序列可以跳过字符，但不能改变顺序。\n\n2. 子串必须连续。求最长公共子序列时，用 dp[i][j] 表示两个字符串前 i、前 j 个字符能得到的最长长度。\n\n3. 末尾字符相同就接上去。\n\n4. 不同就比较“少看左边一个”与“少看右边一个”的结果。\n\n5. \"adce\" 和 \"ace\" 的最长公共子序列是 \"ace\"，长度 3；在第一个字符串里它并不连续，因此不叫公共子串。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX019",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int longestCommonSubsequence(String a, String b) {\n    java.util.Objects.requireNonNull(a, \"a\");\n    java.util.Objects.requireNonNull(b, \"b\");\n    int m = a.length(), n = b.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (a.charAt(i - 1) == b.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}\n```",
      "references": [
        {
          "title": "LeetCode 1143：Longest Common Subsequence（题意）",
          "url": "https://leetcode.com/problems/longest-common-subsequence/description/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 641,
      "originalQuestion": "最长公共子序列怎么求？和最长公共子串有什么区别？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-UX020",
      "number": "UX020",
      "question": "原地合并两个有序数组，为什么要从后往前写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. 第一个数组末尾有空位时，从后往前比较两个数组最大的剩余元素，把较大的放到最后一个空位。\n\n2. 这样不会覆盖第一个数组里还没处理的数据。\n\n3. 一直处理到第二个数组用完，第一个数组剩余部分原本就在正确位置。\n\n4. a=[1,4,8,0,0]，有效长度 3；b=[2,7]。从尾部依次放 8、7、4、2，结果是 [1,2,4,7,8]。",
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
      "sourceFile": "2026-09-13_补充题.md",
      "originalKind": "本轮补充",
      "studyType": "algorithm",
      "provenance": {
        "type": "原题压缩重排",
        "sourceQuestionId": "bank-UX020",
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic void mergeSorted(int[] a, int m, int[] b, int n) {\n    java.util.Objects.requireNonNull(a, \"a\");\n    java.util.Objects.requireNonNull(b, \"b\");\n    if (a == b || m < 0 || n < 0 || m > a.length ||\n        n > b.length || (long) m + n > a.length) {\n        throw new IllegalArgumentException(\"invalid arrays or lengths\");\n    }\n    int i = m - 1, j = n - 1, k = m + n - 1;\n    while (j >= 0) {\n        if (i >= 0 && a[i] > b[j]) a[k--] = a[i--];\n        else a[k--] = b[j--];\n    }\n}\n```",
      "references": [
        {
          "title": "LeetCode 88：Merge Sorted Array（题意）",
          "url": "https://leetcode.com/problems/merge-sorted-array/description/",
          "origin": "原题附带，未逐条重新核查"
        }
      ],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 642,
      "originalQuestion": "原地合并两个有序数组，为什么要从后往前写？",
      "restoredToMainBank": false,
      "answerFormat": "numbered-paragraphs"
    },
    {
      "id": "bank-Q13-005",
      "number": "Q13-005",
      "question": "最小覆盖子串怎么求？",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 先数目标字符串每个字符需要几个。右边扩窗口直到全部满足，再尽量收左边，同时记录最短答案；一旦少了某个必须字符，再继续扩。比较的是数量，不是仅看是否出现。时间 O(n+m)。\n\n2. 例如，目标 AABC 需要两个 A，窗口 ABC 并不满足，所以只用 Set 判断字符种类不够。",
      "sourceIds": [
        "N044"
      ],
      "keywords": [
        "Q13-005",
        "算法与数据结构",
        "字节跳动"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "isNew": false,
      "originalQuestion": "最小覆盖子串怎么求？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-005",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic String minWindow(String s, String t) {\n    if (t.isEmpty() || s.length() < t.length()) return \"\";\n    int[] need = new int[65536]; // UTF-16代码单元；不是Unicode码点\n    for (int i = 0; i < t.length(); i++) need[t.charAt(i)]++;\n    int missing = t.length(), left = 0, start = 0, len = Integer.MAX_VALUE;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c]-- > 0) missing--;\n        while (missing == 0) {\n            if (right - left + 1 < len) {\n                len = right - left + 1;\n                start = left;\n            }\n            char out = s.charAt(left++);\n            if (++need[out] > 0) missing++;\n        }\n    }\n    return len == Integer.MAX_VALUE ? \"\" : s.substring(start, start + len);\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 643
    },
    {
      "id": "bank-Q13-019",
      "number": "Q13-019",
      "question": "用单调栈解决每日温度？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 用单调栈保存还没等到更高温度的下标。新温度更高时，把栈顶较低温度的下标弹出，答案就是当前下标减它的下标。每个下标最多进出一次，总时间 O(n)，没等到更高温度的保持 0。",
      "sourceIds": [],
      "keywords": [
        "Q13-019",
        "算法与数据结构"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "isNew": false,
      "originalQuestion": "用单调栈解决每日温度？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-019",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic int[] dailyTemperatures(int[] t) {\n    int[] answer = new int[t.length];\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i < t.length; i++) {\n        while (!stack.isEmpty() && t[stack.peek()] < t[i]) {\n            int j = stack.pop();\n            answer[j] = i - j;\n        }\n        stack.push(i);\n    }\n    return answer;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 644
    },
    {
      "id": "bank-Q13-030",
      "number": "Q13-030",
      "question": "课程表如何判断能否学完？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "体系补全",
      "answer": "1. 把先修课关系建成有向图。先把入度为 0 的课程入队，每学完一门就减少后续课的入度，新变 0 的继续入队。能处理全部课程就无环、可以学完，否则有循环依赖。时间 O(V+E)。",
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
      "sourceFile": "13_算法与数据结构.md",
      "isNew": false,
      "originalQuestion": "课程表如何判断能否学完？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-030",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic boolean canFinish(int n, int[][] prerequisites) {\n    List<List<Integer>> graph = new ArrayList<>();\n    for (int i = 0; i < n; i++) graph.add(new ArrayList<>());\n    int[] indegree = new int[n];\n    for (int[] p : prerequisites) { graph.get(p[1]).add(p[0]); indegree[p[0]]++; }\n    Queue<Integer> q = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) if (indegree[i] == 0) q.offer(i);\n    int visited = 0;\n    while (!q.isEmpty()) {\n        int u = q.poll(); visited++;\n        for (int v : graph.get(u)) if (--indegree[v] == 0) q.offer(v);\n    }\n    return visited == n;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 645
    },
    {
      "id": "bank-Q13-031",
      "number": "Q13-031",
      "question": "并查集怎样判断连通性？路径压缩为什么能加速？",
      "category": "算法与数据结构",
      "priority": "P1",
      "kind": "体系补全",
      "answer": "1. 并查集维护“哪些元素属于同一组”。find 找代表，union 合并两组；路径压缩和按大小/秩合并能让多次操作均摊接近常数。它适合判断连通性，不直接给最短路径，也不能随便替代有向图算法。",
      "sourceIds": [
        "N007"
      ],
      "keywords": [
        "Q13-031",
        "算法与数据结构",
        "腾讯"
      ],
      "sourceFile": "13_算法与数据结构.md",
      "isNew": false,
      "originalQuestion": "并查集怎样判断连通性？路径压缩为什么能加速？",
      "originalKind": "体系补全",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic class DSU {\n    final int[] parent, size;\n    int components;\n    DSU(int n) {\n        parent = new int[n]; size = new int[n]; components = n;\n        for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }\n    }\n    int find(int x) {\n        while (x != parent[x]) {\n            parent[x] = parent[parent[x]]; x = parent[x];\n        }\n        return x;\n    }\n    boolean union(int a, int b) {\n        int ra = find(a), rb = find(b);\n        if (ra == rb) return false;\n        if (size[ra] < size[rb]) { int tmp = ra; ra = rb; rb = tmp; }\n        parent[rb] = ra; size[ra] += size[rb]; components--; return true;\n    }\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 646
    },
    {
      "id": "bank-JX020",
      "number": "JX020",
      "question": "最长连续序列如何做到 O(n)？怎么避免重复值和溢出？",
      "answer": "1. 先把数组放进 HashSet 去重，只从“没有前一个数”的位置开始往后数连续长度。这样每段只完整统计一次，平均时间 O(n)。遍历去重集合并注意整数边界，避免重复起点和加减溢出。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "最长连续序列如何做到 O(n)？怎么避免重复值和溢出？",
      "originalKind": "面经考点改写",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-JX020",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic int longestConsecutive(int[] nums) {\n    Set<Long> values = new HashSet<>();\n    for (int n : nums) values.add((long) n);\n    int best = 0;\n    for (long start : values) {\n        if (values.contains(start - 1)) continue;\n        int length = 1;\n        long end = start;\n        while (values.contains(end + 1)) { end++; length++; }\n        best = Math.max(best, length);\n    }\n    return best;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 647
    },
    {
      "id": "bank-Q13-041",
      "number": "Q13-041",
      "question": "下一个排列怎么做？",
      "answer": "1. 从右往左找第一个还能变大的位置，把它换成右侧刚好更大的数，再把后缀反转成最小顺序。若整段都是下降，已是最大排列，整体反转回最小。时间 O(n)、空间 O(1)。\n\n2. 例如，[1,3,2] 中可变大的是 1，换成 2，再把后面降序部分反转，得到 [2,1,3]。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "下一个排列怎么做？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-041",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic void nextPermutation(int[] a) {\n    int i = a.length - 2;\n    while (i >= 0 && a[i] >= a[i + 1]) i--;\n    if (i >= 0) {\n        int j = a.length - 1;\n        while (a[j] <= a[i]) j--;\n        int t = a[i]; a[i] = a[j]; a[j] = t;\n    }\n    for (int l = i + 1, r = a.length - 1; l < r; l++, r--) {\n        int t = a[l]; a[l] = a[r]; a[r] = t;\n    }\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 648
    },
    {
      "id": "bank-Q13-042",
      "number": "Q13-042",
      "question": "132 模式怎么用单调栈判断？",
      "answer": "1. 从右往左扫，用栈维护可能的“3”，用 second 记录找到的最大可用“2”。新数比 second 小，就找到了“1”；新数更大时弹出栈顶并更新“2”。每个数最多进出一次，时间 O(n)。\n\n2. 例如，132 指下标 i<j<k 且 a[i]<a[k]<a[j]，不是要求数字恰好是 1、3、2。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "132 模式怎么用单调栈判断？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-042",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic boolean has132(int[] a) {\n    Deque<Integer> stack = new ArrayDeque<>();\n    long second = Long.MIN_VALUE;\n    for (int i = a.length - 1; i >= 0; i--) {\n        if (a[i] < second) return true;\n        while (!stack.isEmpty() && a[i] > stack.peek()) second = stack.pop();\n        stack.push(a[i]);\n    }\n    return false;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 649
    },
    {
      "id": "bank-Q13-043",
      "number": "Q13-043",
      "question": "LFU 缓存如何同时做到最低频率淘汰与同频率 LRU？",
      "answer": "1. LFU 先淘汰用得最少的，频率相同再淘汰最久没用的。用 key→节点表、频率→双向链表，再记录 minFreq；每次命中提升频率，满容量时删最小频率桶的末尾。平均操作 O(1)。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "LFU 缓存如何同时做到最低频率淘汰与同频率 LRU？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-043",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n// LinkedHashSet 负责同频率下的访问顺序；平均 O(1)，非线程安全。\nstatic class LFU {\n    final int capacity;\n    int minFreq = 0;\n    final Map<Integer, Integer> values = new HashMap<>();\n    final Map<Integer, Integer> freqs = new HashMap<>();\n    final Map<Integer, LinkedHashSet<Integer>> buckets = new HashMap<>();\n    LFU(int capacity) { this.capacity = Math.max(0, capacity); }\n    int get(int key) {\n        if (!values.containsKey(key)) return -1;\n        touch(key); return values.get(key);\n    }\n    void touch(int key) {\n        int f = freqs.get(key);\n        LinkedHashSet<Integer> old = buckets.get(f);\n        old.remove(key);\n        if (old.isEmpty()) {\n            buckets.remove(f);\n            if (minFreq == f) minFreq++;\n        }\n        freqs.put(key, f + 1);\n        buckets.computeIfAbsent(f + 1, x -> new LinkedHashSet<>()).add(key);\n    }\n    void put(int key, int value) {\n        if (capacity == 0) return;\n        if (values.containsKey(key)) { values.put(key, value); touch(key); return; }\n        if (values.size() == capacity) {\n            LinkedHashSet<Integer> old = buckets.get(minFreq);\n            int victim = old.iterator().next();\n            old.remove(victim);\n            if (old.isEmpty()) buckets.remove(minFreq);\n            values.remove(victim); freqs.remove(victim);\n        }\n        values.put(key, value); freqs.put(key, 1); minFreq = 1;\n        buckets.computeIfAbsent(1, x -> new LinkedHashSet<>()).add(key);\n    }\n}\n// 面试题通常不考虑频次整型溢出；长期运行的产品实现需另定衰减策略。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 650
    },
    {
      "id": "bank-Q13-044",
      "number": "Q13-044",
      "question": "从十万个数中找最小的 10 个，用什么堆？",
      "answer": "1. 找最小的 k 个，用大小 k 的大顶堆：堆顶是保留集合里最大的，遇到更小的就替换它。找最大的 k 个反过来用小顶堆。时间 O(n log k)、空间 O(k)，需要最终有序时再排序。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "从十万个数中找最小的 10 个，用什么堆？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-044",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic int[] smallestK(int[] a, int k) {\n    if (k <= 0) return new int[0];\n    k = Math.min(k, a.length);\n    if (k == 0) return new int[0];\n    PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());\n    for (int x : a) {\n        if (heap.size() < k) heap.offer(x);\n        else if (x < heap.peek()) { heap.poll(); heap.offer(x); }\n    }\n    int[] result = new int[k];\n    for (int i = k - 1; i >= 0; i--) result[i] = heap.poll();\n    return result;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 651
    },
    {
      "id": "bank-Q13-045",
      "number": "Q13-045",
      "question": "反转链表指定区间 left 到 right？",
      "answer": "1. 先用 dummy 找到 left 前驱，再在区间内不断把后面的节点摘下来，插到区间最前面。做 right-left 次后，区间反转，其余连接不变。时间 O(n)、空间 O(1)，left=1 也可统一处理。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "反转链表指定区间 left 到 right？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-045",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n// 前提：1 <= left <= right <= 链表长度。\nstatic ListNode reverseBetween(ListNode head, int left, int right) {\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    for (int i = 1; i < left; i++) pre = pre.next;\n    ListNode tail = pre.next;\n    for (int i = 0; i < right - left; i++) {\n        ListNode move = tail.next;\n        tail.next = move.next;\n        move.next = pre.next;\n        pre.next = move;\n    }\n    return dummy.next;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 652
    },
    {
      "id": "bank-Q13-046",
      "number": "Q13-046",
      "question": "从链表尾部开始每 k 个一组反转，怎么做？",
      "answer": "1. 按“尾部每满 k 个一组，头部剩余不足 k 个不动”的题设，先算长度 n，跳过前 n%k 个节点，再从那里按普通 k 组反转。时间 O(n)、空间 O(1)。分组方向要先说清，不是把整个链表反转。\n\n2. 例如，1→2→3→4→5，k=2，按尾部划分后得到 1→3→2→5→4。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "从链表尾部开始每 k 个一组反转，怎么做？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-046",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic ListNode reverseGroupsFromTail(ListNode head, int k) {\n    if (k <= 0) throw new IllegalArgumentException(\"k must be positive\");\n    if (k == 1 || head == null) return head;\n    int n = 0;\n    for (ListNode p = head; p != null; p = p.next) n++;\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    for (int i = 0; i < n % k; i++) pre = pre.next;\n    for (int g = 0; g < n / k; g++) {\n        ListNode tail = pre.next;\n        for (int i = 1; i < k; i++) {\n            ListNode move = tail.next;\n            tail.next = move.next;\n            move.next = pre.next;\n            pre.next = move;\n        }\n        pre = tail;\n    }\n    return dummy.next;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 653
    },
    {
      "id": "bank-Q13-047",
      "number": "Q13-047",
      "question": "两个栈实现队列，怎样扩展成阻塞队列？",
      "answer": "1. 普通两栈队列：新元素进输入栈，输出栈空时把输入栈全部倒过去，均摊 O(1)。阻塞版再加同一把锁和 notEmpty/notFull 条件，空或满时 while 等待，成功操作后通知。两栈结构本身不保证并发安全。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "两个栈实现队列，怎样扩展成阻塞队列？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-047",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n// 需 import java.util.concurrent.locks.*; 不支持 null。\nstatic class TwoStackBlockingQueue<E> {\n    final Deque<E> in = new ArrayDeque<>(), out = new ArrayDeque<>();\n    final java.util.concurrent.locks.ReentrantLock lock =\n        new java.util.concurrent.locks.ReentrantLock();\n    final java.util.concurrent.locks.Condition notEmpty = lock.newCondition();\n    final java.util.concurrent.locks.Condition notFull = lock.newCondition();\n    final int capacity;\n    int size;\n    TwoStackBlockingQueue(int capacity) {\n        if (capacity <= 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n    }\n    void put(E e) throws InterruptedException {\n        Objects.requireNonNull(e);\n        lock.lockInterruptibly();\n        try {\n            while (size == capacity) notFull.await();\n            in.push(e); size++; notEmpty.signal();\n        } finally { lock.unlock(); }\n    }\n    E take() throws InterruptedException {\n        lock.lockInterruptibly();\n        try {\n            while (size == 0) notEmpty.await();\n            if (out.isEmpty()) while (!in.isEmpty()) out.push(in.pop());\n            E e = out.pop(); size--; notFull.signal(); return e;\n        } finally { lock.unlock(); }\n    }\n}\n// 教学实现仅给出 put/take；关闭、超时和公平性需按产品需求补充。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 654
    },
    {
      "id": "bank-Q13-048",
      "number": "Q13-048",
      "question": "有序链表中重复的值全部删除，与保留一个有什么不同？",
      "answer": "1. “保留一个”是删掉每段重复值里的多余节点；“重复值全删”是整段都跳过。后者用 dummy 和前驱，发现相邻相同就一直跳到下一种值，再接回。时间 O(n)、空间 O(1)。\n\n2. 例如，[1,1,2]：保留一个得到 [1,2]；重复值全部删除得到 [2]。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "有序链表中重复的值全部删除，与保留一个有什么不同？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-048",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic ListNode removeAllDuplicates(ListNode head) {\n    ListNode dummy = new ListNode(0); dummy.next = head;\n    ListNode pre = dummy;\n    while (pre.next != null) {\n        ListNode cur = pre.next;\n        if (cur.next != null && cur.val == cur.next.val) {\n            int value = cur.val;\n            while (cur != null && cur.val == value) cur = cur.next;\n            pre.next = cur;\n        } else pre = pre.next;\n    }\n    return dummy.next;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 655
    },
    {
      "id": "bank-Q13-049",
      "number": "Q13-049",
      "question": "一般图的直径能像树一样两次 BFS 得到吗？",
      "answer": "1. 树可以用两次 BFS/DFS 找直径，一般图不能直接套。无权连通图的直径是所有点对最短距离中的最大值，精确方法可对每个点做 BFS，时间 O(V(V+E))。它不是最长简单路径，非连通和带权要另定规则。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "一般图的直径能像树一样两次 BFS 得到吗？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-049",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n// 无向、无权、连通图；空图返回 0，非连通图拒绝输入。\nstatic int graphDiameter(List<List<Integer>> graph) {\n    int n = graph.size(), answer = 0;\n    for (int source = 0; source < n; source++) {\n        int[] dist = new int[n]; Arrays.fill(dist, -1);\n        Deque<Integer> queue = new ArrayDeque<>();\n        queue.offer(source); dist[source] = 0;\n        int visited = 0;\n        while (!queue.isEmpty()) {\n            int u = queue.poll(); visited++;\n            answer = Math.max(answer, dist[u]);\n            for (int v : graph.get(u)) if (dist[v] < 0) {\n                dist[v] = dist[u] + 1; queue.offer(v);\n            }\n        }\n        if (visited != n) throw new IllegalArgumentException(\"disconnected graph\");\n    }\n    return answer;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 656
    },
    {
      "id": "bank-Q13-050",
      "number": "Q13-050",
      "question": "比较版本号，如何避免整数溢出？",
      "answer": "1. 把版本号按点拆成数字段，去掉每段前导零，先比较有效长度，再按字典序比较，缺失段当 0。这样不必把超长数字转 int/long，不会因此溢出。此方法针对纯数字点分版本，不直接覆盖 SemVer 标签。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "比较版本号，如何避免整数溢出？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-050",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n// 前提：输入是非空的纯数字点分版本，各段非空。\nstatic int compareVersion(String a, String b) {\n    String[] x = a.split(\"\\\\.\"), y = b.split(\"\\\\.\");\n    for (int i = 0; i < Math.max(x.length, y.length); i++) {\n        String p = i < x.length ? x[i].replaceFirst(\"^0+\", \"\") : \"\";\n        String q = i < y.length ? y[i].replaceFirst(\"^0+\", \"\") : \"\";\n        if (p.length() != q.length()) return Integer.compare(p.length(), q.length());\n        int cmp = p.compareTo(q);\n        if (cmp != 0) return Integer.signum(cmp);\n    }\n    return 0;\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 657
    },
    {
      "id": "bank-Q13-051",
      "number": "Q13-051",
      "question": "二维字符矩阵中能否走出给定单词？",
      "answer": "1. 从每个可能起点 DFS，按单词顺序走四方向邻格。\n\n2. 同一条路径不能重复用格子，递归回来要恢复访问标记。\n\n3. 先匹配当前字符再走下一步，找到完整单词即成功。\n\n4. 字符频次不足时可提前返回失败。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "二维字符矩阵中能否走出给定单词？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-051",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic boolean wordExists(char[][] board, String word) {\n    if (word.isEmpty()) return true;\n    if (board.length == 0 || board[0].length == 0) return false;\n    boolean[][] used = new boolean[board.length][board[0].length];\n    for (int r = 0; r < board.length; r++)\n        for (int c = 0; c < board[0].length; c++)\n            if (wordDfs(board, used, word, r, c, 0)) return true;\n    return false;\n}\nstatic boolean wordDfs(char[][] b, boolean[][] used, String w, int r, int c, int p) {\n    if (p == w.length()) return true;\n    if (r < 0 || r >= b.length || c < 0 || c >= b[0].length\n        || used[r][c] || b[r][c] != w.charAt(p)) return false;\n    used[r][c] = true;\n    boolean ok = wordDfs(b, used, w, r + 1, c, p + 1)\n        || wordDfs(b, used, w, r - 1, c, p + 1)\n        || wordDfs(b, used, w, r, c + 1, p + 1)\n        || wordDfs(b, used, w, r, c - 1, p + 1);\n    used[r][c] = false;\n    return ok;\n}\n// 前提：矩阵规则、字符按 char 比较；递归深度受目标长度限制。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 658
    },
    {
      "id": "bank-Q13-052",
      "number": "Q13-052",
      "question": "旋转有序数组的最小值怎么找？",
      "answer": "1. 无重复的旋转升序数组，比较中间值和右端值：中间更大，最小值在右边，left=mid+1。\n\n2. 否则保留 mid，right=mid。\n\n3. 最后收敛到最小值，O(log n)。\n\n4. 有重复且相等时可能只能 right--，最坏 O(n)。",
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
      "sourceFile": "公司补充题库_2026-09-08",
      "isNew": false,
      "originalQuestion": "旋转有序数组的最小值怎么找？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-Q13-052",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic int rotatedMinimum(int[] a) {\n    if (a.length == 0) throw new IllegalArgumentException(\"empty array\");\n    int left = 0, right = a.length - 1;\n    while (left < right) {\n        int mid = left + (right - left) / 2;\n        if (a[mid] > a[right]) left = mid + 1;\n        else right = mid;\n    }\n    return a[left];\n}\n// 前提：元素互异。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 659
    },
    {
      "id": "bank-LX001",
      "number": "LX001",
      "question": "两个 0～15、四个 0～200、一个 100～20000 的整数，如何无损编码、去重并按最后字段排序？",
      "answer": "1. 这题不是随便取哈希，而是把七个数按位装进一个 long，保证不同组合不会撞在一起。\n\n2. 两个 0～15 各用 4 位，四个 0～200 各用 8 位，最后一个数减去 100 后用 15 位，共 55 位。\n\n3. 把最后一个字段放高位，排序时就先按它排。\n\n4. 全部编码后排序，相邻相同的编码只保留一份。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "两个 0～15、四个 0～200、一个 100～20000 的整数，如何无损编码、去重并按最后字段排序？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX001",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic long pack(int a, int b, int c, int d, int e, int f, int g) {\n    if (a < 0 || a > 15 || b < 0 || b > 15 ||\n        c < 0 || c > 200 || d < 0 || d > 200 ||\n        e < 0 || e > 200 || f < 0 || f > 200 ||\n        g < 100 || g > 20000) throw new IllegalArgumentException();\n    return ((long)(g - 100) << 40) | ((long)f << 32)\n         | ((long)e << 24) | ((long)d << 16) | ((long)c << 8)\n         | ((long)b << 4) | a;\n}\nstatic int lastTag(long packed) { return (int)(packed >>> 40) + 100; }\n// Arrays.sort(packedGroups); 相邻相等的编码仅保留一个。\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 660
    },
    {
      "id": "bank-LX036",
      "number": "LX036",
      "question": "数组循环右移 k 位怎么做到常数额外空间？",
      "answer": "1. 数组向右旋转 k 位，可以用三次反转：先反转整个数组，再反转前 k 个，最后反转剩余部分。先处理空数组，并把 k 归一化到数组长度以内。整个过程 O(n) 时间、O(1) 额外空间，不需要反复把最后一个数搬到最前面。\n\n2. 例如，[1,2,3,4,5] 右移 2 位：整体反转成 [5,4,3,2,1]，分别反转两段，得到 [4,5,1,2,3]。",
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "isNew": false,
      "originalQuestion": "数组循环右移 k 位怎么做到常数额外空间？",
      "originalKind": "面经考点改写 / 延展",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-LX036",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\nstatic void rotate(int[] a, int k) {\n    if (a == null || a.length < 2) return;\n    k = Math.floorMod(k, a.length);\n    rev(a, 0, a.length - 1);\n    rev(a, 0, k - 1);\n    rev(a, k, a.length - 1);\n}\nstatic void rev(int[] a, int l, int r) {\n    while (l < r) {\n        int v = a[l]; a[l++] = a[r]; a[r--] = v;\n    }\n}\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 661
    },
    {
      "id": "bank-RM031",
      "number": "RM031",
      "question": "从链表头部每 k 个节点反转，最后不足 k 个保留，怎么写？",
      "answer": "1. 每次先检查当前组是否有k个节点；不足就结束。有足够节点时记住下一组起点，在当前组内部反转链接，再把前一组尾接到新组头。使用哑节点统一处理头部变化。时间O(n)，额外空间O(1)。\n\n2. 例如，1→2→3→4→5，k=2，结果2→1→4→3→5。k=1不变，k必须为正数。\n\n3. 这与旧题“从尾部分组反转”不一样。要先确认分组方向与不足k个节点的处理；这里为明确约定的从头版本。",
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
      "sourceFile": "recent-interviews-study.md",
      "isNew": false,
      "originalQuestion": "从链表头部每 k 个节点反转，最后不足 k 个保留，怎么写？",
      "originalKind": "面经具体追问 / 练习",
      "restoredToMainBank": true,
      "isInterviewFocus": false,
      "isStarter": false,
      "provenance": {
        "type": "原题表述整理",
        "sourceQuestionId": "bank-RM031",
        "restoredFromOriginal": true,
        "answerRewrite": "2026-09-20 无表格短句整理，依据原文件及上一版，不新增事实核查声明"
      },
      "references": [],
      "practiceCode": "```java\n    static Node reverseKGroup(Node head, int k) {\n        if (k <= 0) throw new IllegalArgumentException(\"k must be positive\");\n        Node dummy = new Node(0); dummy.next = head;\n        Node before = dummy;\n        while (true) {\n            Node end = before;\n            for (int i = 0; i < k && end != null; i++) end = end.next;\n            if (end == null) return dummy.next;\n            Node after = end.next;\n            Node oldHead = before.next, current = oldHead, previous = after;\n            while (current != after) {\n                Node next = current.next;\n                current.next = previous;\n                previous = current;\n                current = next;\n            }\n            before.next = end;\n            before = oldHead;\n        }\n    }\n```",
      "answerFormat": "numbered-paragraphs",
      "studyOrder": 662
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
        "bank-Q13-009",
        "bank-Q12-035",
        "bank-Q11-035"
      ],
      "type": "interview"
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
        "bank-Q13-032",
        "bank-Q12-035",
        "bank-Q11-035"
      ],
      "type": "interview"
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
        "bank-Q12-032",
        "bank-Q12-035",
        "bank-Q11-035"
      ],
      "type": "interview"
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
        "bank-Q07-017",
        "bank-Q12-035",
        "bank-Q11-035"
      ],
      "type": "interview"
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
        "bank-Q12-016",
        "bank-Q12-035",
        "bank-Q11-035"
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "X09",
      "title": "2025-02-19 Java面试题（美团/快手）汇编",
      "url": "https://www.nowcoder.com/discuss/722397808745033728",
      "description": "转述/AI解答汇编。页面发布2025-02-21，作者说明含AI辅助解答；仅用于追踪原始面经链接，不采用其答案作为技术依据。",
      "company": "美团 / 快手",
      "questionIds": [],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "R004",
      "company": "多益网络",
      "title": "多益网络 · R004（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r004",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX036"
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "R014",
      "company": "维他奶",
      "title": "维他奶 · R014（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r014",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX027"
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "R017",
      "company": "得物",
      "title": "得物 · R017（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r017",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX040"
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "R020",
      "company": "腾讯",
      "title": "腾讯 · R020（附件关联）",
      "url": "./assets/interviews/lx-2026-09-08.html#r020",
      "description": "来自用户提供的问答整理；原始面经文件及来源日期登记未随附件提供，原帖与日期待核验。",
      "questionIds": [
        "bank-LX011"
      ],
      "type": "interview"
    },
    {
      "id": "OPT-S01",
      "title": "Java 21 List API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX001"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S02",
      "title": "Java 21 Collectors API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX002"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S03",
      "title": "Spring @Configuration 与 Bean 方法",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX003"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S04",
      "title": "Java 21 CompletableFuture API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX004"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S05",
      "title": "MySQL 8.4 TRUNCATE TABLE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/truncate-table.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S06",
      "title": "MySQL 8.4 CREATE INDEX：唯一键与 NULL",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/create-index.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX006"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S07",
      "title": "Redis SET：过期设置与 KEEPTTL",
      "url": "https://redis.io/docs/latest/commands/set/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX007"
      ],
      "type": "reference"
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
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S09",
      "title": "Nginx HTTP Proxy：缓冲与读取超时",
      "url": "https://nginx.org/en/docs/http/ngx_http_proxy_module.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX009"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S10",
      "title": "Docker：容器基础",
      "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX010"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S11",
      "title": "Docker：Volumes",
      "url": "https://docs.docker.com/engine/storage/volumes/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX010"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S12",
      "title": "Docker：Networking",
      "url": "https://docs.docker.com/engine/network/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX011"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S13",
      "title": "Flyway：Versioned migrations",
      "url": "https://documentation.red-gate.com/flyway/flyway-concepts/migrations/versioned-migrations",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX012"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S14",
      "title": "Spring AI：AI Concepts",
      "url": "https://docs.spring.io/spring-ai/reference/concepts.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX013"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S15",
      "title": "Spring AI：Embedding Models",
      "url": "https://docs.spring.io/spring-ai/reference/api/embeddings.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX014"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S16",
      "title": "Cohere：Rerank 概念",
      "url": "https://docs.cohere.com/docs/rerank-overview",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX014"
      ],
      "type": "reference"
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
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S18",
      "title": "MCP 2025-06-18：Tools",
      "url": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX016"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S19",
      "title": "Spring AI：Tool Calling",
      "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX016"
      ],
      "type": "reference"
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
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S21",
      "title": "Spring AI：ChatClient",
      "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX018"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S22",
      "title": "LeetCode 1143：Longest Common Subsequence（题意）",
      "url": "https://leetcode.com/problems/longest-common-subsequence/description/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX019"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S23",
      "title": "LeetCode 88：Merge Sorted Array（题意）",
      "url": "https://leetcode.com/problems/merge-sorted-array/description/",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX020"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S24",
      "title": "MySQL 8.4：隐式提交语句",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S25",
      "title": "MySQL 8.4：DELETE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/delete.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX005"
      ],
      "type": "reference"
    },
    {
      "id": "OPT-S26",
      "title": "Spring Configuration API：proxyBeanMethods",
      "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html",
      "description": "本轮补充题查阅的官方/一手资料；查阅日期 2026-09-13。对应 API/协议事实，示例和设计推导另行标明；非公司面经来源。",
      "company": "官方资料（补充题）",
      "questionIds": [
        "bank-UX003"
      ],
      "type": "reference"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
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
      ],
      "type": "interview"
    },
    {
      "id": "REV20-HTTP",
      "title": "RFC 9110：HTTP Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q09-029",
        "bank-Q09-030",
        "bank-Q09-031",
        "bank-Q09-035"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-TX",
      "title": "Spring：Using @Transactional",
      "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-014",
        "bank-Q05-045",
        "bank-Q05-015"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-TXA",
      "title": "Spring：@Transactional API",
      "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-045",
        "bank-Q05-015"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-MVC",
      "title": "Spring MVC：Mapping Requests",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-044",
        "bank-Q05-048"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-BODY",
      "title": "Spring MVC：@ResponseBody",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-044",
        "bank-Q05-047",
        "bank-Q05-048"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-REQBODY",
      "title": "Spring MVC：@RequestBody",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-044",
        "bank-Q05-023",
        "bank-Q09-035"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-JOIN",
      "title": "MySQL 8.4：JOIN Clause",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-039",
        "bank-Q06-032",
        "bank-Q06-040",
        "bank-Q06-051",
        "bank-Q06-052"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-RANGE",
      "title": "MySQL 8.4：Range Optimization",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/range-optimization.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-009"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-CONVERT",
      "title": "MySQL 8.4：Type Conversion",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/type-conversion.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-009"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-ONULL",
      "title": "Oracle 19c：Nulls",
      "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Nulls.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-OISO",
      "title": "Oracle 19c：Data Concurrency and Consistency",
      "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/cncpt/data-concurrency-and-consistency.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-OSELECT",
      "title": "Oracle 19c：SELECT / row_limiting_clause",
      "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/SELECT.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-OCREATE",
      "title": "Oracle 19c：CREATE TABLE / identity_clause",
      "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-TABLE.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-MISO",
      "title": "MySQL 8.4：Transaction Isolation Levels",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-MAUTO",
      "title": "MySQL 8.4：AUTO_INCREMENT",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/example-auto-increment.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-GIT",
      "title": "Git：命令参考",
      "url": "https://git-scm.com/docs/git",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q10-029"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-JLS",
      "title": "JLS 21：Threads and Locks",
      "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q03-038"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-COLLECTIONS",
      "title": "Java 21：Collections API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q02-029"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-NORMAL",
      "title": "Microsoft：Database normalization description",
      "url": "https://learn.microsoft.com/en-us/previous-versions/troubleshoot/microsoft-365/microsoft-365-apps/access/database-normalization-description",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-053"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-THREAD",
      "title": "Java 21：Thread API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q03-004",
        "bank-Q03-043"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-OBJECT",
      "title": "Java 21：Object API",
      "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q03-004",
        "bank-Q03-044",
        "bank-Q03-043"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-PK",
      "title": "MySQL 8.4：CREATE TABLE",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-041",
        "bank-Q06-042",
        "bank-Q06-048"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-SQL",
      "title": "MySQL 8.4：SELECT",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-038",
        "bank-Q06-043",
        "bank-Q06-045",
        "bank-Q06-046",
        "bank-Q06-050"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-UNION",
      "title": "MySQL 8.4：UNION",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/union.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q06-047"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-MAPPER",
      "title": "MyBatis：Mapper XML",
      "url": "https://mybatis.org/mybatis-3/sqlmap-xml.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-043",
        "bank-Q05-054"
      ],
      "type": "reference"
    },
    {
      "id": "REV20-IOC",
      "title": "Spring：IoC Container",
      "url": "https://docs.spring.io/spring-framework/reference/core/beans/introduction.html",
      "company": "官方文档",
      "description": "2026-09-20 本轮技术核对；不是公司面经或面试频率统计。",
      "questionIds": [
        "bank-Q05-046"
      ],
      "type": "reference"
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
    },
    {
      "id": "memorize-2026-09-20",
      "title": "背诵优化与基础补充",
      "companies": 0,
      "sources": 26,
      "companyEntries": 0,
      "uniqueCompanyQuestions": 0,
      "standaloneQuestions": 71,
      "sourceFile": "2026-09-20_基础补充.md",
      "missingQuestionNumbers": [],
      "provenance": "基于用户题库的整理与常见概念补充；不是新增公司面经。",
      "questionIds": [
        "bank-Q09-029",
        "bank-Q05-044",
        "bank-Q05-045",
        "bank-Q06-038",
        "bank-Q06-039",
        "bank-Q06-040",
        "bank-Q01-043",
        "bank-Q01-044",
        "bank-Q01-045",
        "bank-Q01-046",
        "bank-Q01-047",
        "bank-Q01-048",
        "bank-Q01-049",
        "bank-Q01-050",
        "bank-Q01-051",
        "bank-Q02-027",
        "bank-Q02-028",
        "bank-Q02-029",
        "bank-Q03-038",
        "bank-Q03-039",
        "bank-Q03-040",
        "bank-Q03-041",
        "bank-Q03-042",
        "bank-Q03-043",
        "bank-Q03-044",
        "bank-Q04-033",
        "bank-Q04-034",
        "bank-Q05-046",
        "bank-Q05-047",
        "bank-Q05-048",
        "bank-Q05-049",
        "bank-Q05-050",
        "bank-Q05-051",
        "bank-Q05-052",
        "bank-Q05-053",
        "bank-Q05-054",
        "bank-Q05-055",
        "bank-Q06-041",
        "bank-Q06-042",
        "bank-Q06-043",
        "bank-Q06-044",
        "bank-Q06-045",
        "bank-Q06-046",
        "bank-Q06-047",
        "bank-Q06-048",
        "bank-Q06-049",
        "bank-Q06-050",
        "bank-Q06-051",
        "bank-Q06-052",
        "bank-Q06-053",
        "bank-Q06-054",
        "bank-Q07-034",
        "bank-Q07-035",
        "bank-Q07-036",
        "bank-Q07-037",
        "bank-Q08-028",
        "bank-Q08-029",
        "bank-Q09-030",
        "bank-Q09-031",
        "bank-Q09-032",
        "bank-Q09-033",
        "bank-Q09-034",
        "bank-Q09-035",
        "bank-Q10-028",
        "bank-Q10-029",
        "bank-Q10-030",
        "bank-Q11-044",
        "bank-Q11-045",
        "bank-Q13-053",
        "bank-Q13-054",
        "bank-Q13-055"
      ],
      "sourceIds": [
        "REV20-HTTP",
        "REV20-TX",
        "REV20-TXA",
        "REV20-MVC",
        "REV20-BODY",
        "REV20-REQBODY",
        "REV20-JOIN",
        "REV20-RANGE",
        "REV20-CONVERT",
        "REV20-ONULL",
        "REV20-OISO",
        "REV20-OSELECT",
        "REV20-OCREATE",
        "REV20-MISO",
        "REV20-MAUTO",
        "REV20-GIT",
        "REV20-JLS",
        "REV20-COLLECTIONS",
        "REV20-NORMAL",
        "REV20-THREAD",
        "REV20-OBJECT",
        "REV20-PK",
        "REV20-SQL",
        "REV20-UNION",
        "REV20-MAPPER",
        "REV20-IOC"
      ],
      "description": "本轮新增/拆分的常见基础问法，不代表新搜集的公司面经。"
    }
  ],
  "edition": "全量短句背诵版（无表格）",
  "schemaVersion": 1,
  "stats": {
    "originalQuestions": 591,
    "retainedOriginalQuestions": 591,
    "restoredOriginalQuestions": 244,
    "addedQuestions": 71,
    "archivedOriginalQuestions": 0,
    "totalQuestions": 662,
    "interviewFocusQuestions": 9,
    "starterQuestions": 129,
    "byCategory": {
      "Java 基础": 61,
      "Java 集合": 32,
      "多线程 / 并发": 58,
      "JVM": 40,
      "Spring / Spring Boot": 63,
      "MySQL": 63,
      "Redis": 44,
      "消息队列 MQ": 32,
      "计算机网络": 39,
      "操作系统 / Linux": 36,
      "场景题 / 故障排查": 63,
      "项目 / 实习拷打": 69,
      "算法与数据结构": 62
    }
  },
  "studySets": [
    {
      "id": "interview",
      "name": "本次面试 · 9 题",
      "questionIds": [
        "bank-Q09-029",
        "bank-Q05-044",
        "bank-Q05-014",
        "bank-Q05-045",
        "bank-Q06-038",
        "bank-Q06-039",
        "bank-Q06-032",
        "bank-Q06-040",
        "bank-Q06-009"
      ]
    },
    {
      "id": "starter",
      "name": "基础起步",
      "questionIds": [
        "bank-Q09-029",
        "bank-Q05-044",
        "bank-Q05-014",
        "bank-Q05-045",
        "bank-Q06-038",
        "bank-Q06-039",
        "bank-Q06-032",
        "bank-Q06-040",
        "bank-Q06-009",
        "bank-Q01-001",
        "bank-Q01-002",
        "bank-Q01-003",
        "bank-Q01-004",
        "bank-Q01-005",
        "bank-Q01-006",
        "bank-Q01-007",
        "bank-Q01-008",
        "bank-Q01-009",
        "bank-Q01-010",
        "bank-Q01-011",
        "bank-Q01-012",
        "bank-Q01-014",
        "bank-Q01-015",
        "bank-Q01-016",
        "bank-Q01-019",
        "bank-Q01-021",
        "bank-Q01-022",
        "bank-Q01-043",
        "bank-Q01-044",
        "bank-Q01-045",
        "bank-Q01-046",
        "bank-Q01-047",
        "bank-Q01-048",
        "bank-Q01-049",
        "bank-Q01-050",
        "bank-Q02-001",
        "bank-Q02-002",
        "bank-Q02-005",
        "bank-Q02-012",
        "bank-Q02-027",
        "bank-Q02-028",
        "bank-Q02-029",
        "bank-Q03-001",
        "bank-Q03-002",
        "bank-Q03-003",
        "bank-Q03-004",
        "bank-Q03-007",
        "bank-Q03-009",
        "bank-Q03-010",
        "bank-Q03-013",
        "bank-Q03-017",
        "bank-Q03-022",
        "bank-Q03-038",
        "bank-Q03-039",
        "bank-Q03-040",
        "bank-Q03-041",
        "bank-Q03-042",
        "bank-Q03-044",
        "bank-Q04-001",
        "bank-Q04-007",
        "bank-Q04-018",
        "bank-Q04-033",
        "bank-Q04-034",
        "bank-Q05-001",
        "bank-Q05-002",
        "bank-Q05-004",
        "bank-Q05-007",
        "bank-Q05-011",
        "bank-Q05-015",
        "bank-Q05-023",
        "bank-Q05-026",
        "bank-Q05-031",
        "bank-Q05-043",
        "bank-Q05-046",
        "bank-Q05-047",
        "bank-Q05-048",
        "bank-Q05-049",
        "bank-Q05-050",
        "bank-Q05-052",
        "bank-Q05-053",
        "bank-Q05-054",
        "bank-Q05-055",
        "bank-LX018",
        "bank-Q06-003",
        "bank-Q06-013",
        "bank-Q06-014",
        "bank-Q06-029",
        "bank-Q06-041",
        "bank-Q06-042",
        "bank-Q06-043",
        "bank-Q06-044",
        "bank-Q06-045",
        "bank-Q06-046",
        "bank-Q06-047",
        "bank-Q06-048",
        "bank-Q06-049",
        "bank-Q06-050",
        "bank-Q06-051",
        "bank-Q06-054",
        "bank-Q07-002",
        "bank-Q07-015",
        "bank-Q07-016",
        "bank-Q07-017",
        "bank-Q07-034",
        "bank-Q07-035",
        "bank-Q07-036",
        "bank-Q07-037",
        "bank-Q08-001",
        "bank-Q08-028",
        "bank-Q08-029",
        "bank-Q09-003",
        "bank-Q09-010",
        "bank-Q09-011",
        "bank-Q09-017",
        "bank-Q09-030",
        "bank-Q09-031",
        "bank-Q09-032",
        "bank-Q09-033",
        "bank-Q09-035",
        "bank-Q10-018",
        "bank-Q10-019",
        "bank-Q10-028",
        "bank-Q10-029",
        "bank-Q10-030",
        "bank-Q11-044",
        "bank-Q11-045",
        "bank-Q13-053",
        "bank-Q13-054",
        "bank-Q13-055"
      ]
    }
  ],
  "editorialNotes": [
    "原始题库的全部题目与上一版新增题目都在 questions 数组中，没有另行归档或默认隐藏。",
    "答案仅用短段落、编号分点及必要代码，不使用表格和分层答案标题。",
    "本次为基于用户原题库及上一版内容的表述整理，未新增面试频率或外部事实核查声明。",
    "原题来源和参考链接保留在 sources、references 中，不混入需要背诵的答案。",
    "保留原有分类、题目 ID 和 window.QUESTION_BANK_DATA 导出；原网站页面外层样式未修改。"
  ],
  "archivedQuestions": [],
  "curationReleases": [
    {
      "id": "2026-09-20:全量短句背诵版（无表格）",
      "questionIds": [
        "bank-Q01-020",
        "bank-Q01-027",
        "bank-Q01-028",
        "bank-Q01-032",
        "bank-Q01-033",
        "bank-Q01-034",
        "bank-Q01-038",
        "bank-Q01-039",
        "bank-Q02-025",
        "bank-Q03-018",
        "bank-Q03-021",
        "bank-Q03-028",
        "bank-Q03-030",
        "bank-Q03-031",
        "bank-Q03-034",
        "bank-Q04-004",
        "bank-Q04-005",
        "bank-Q04-006",
        "bank-Q04-012",
        "bank-Q04-013",
        "bank-Q04-015",
        "bank-Q04-016",
        "bank-Q04-019",
        "bank-Q04-027",
        "bank-Q04-029",
        "bank-Q04-030",
        "bank-Q05-009",
        "bank-Q05-017",
        "bank-Q05-018",
        "bank-Q05-020",
        "bank-Q05-027",
        "bank-Q05-028",
        "bank-Q05-029",
        "bank-Q05-035",
        "bank-Q05-037",
        "bank-Q05-038",
        "bank-Q05-039",
        "bank-Q05-040",
        "bank-Q06-019",
        "bank-Q06-023",
        "bank-Q06-024",
        "bank-Q06-025",
        "bank-Q06-034",
        "bank-Q06-035",
        "bank-Q07-003",
        "bank-Q07-004",
        "bank-Q07-010",
        "bank-Q07-014",
        "bank-Q07-023",
        "bank-Q07-025",
        "bank-Q07-029",
        "bank-Q07-030",
        "bank-Q08-010",
        "bank-Q08-011",
        "bank-Q08-014",
        "bank-Q08-015",
        "bank-Q08-016",
        "bank-Q08-017",
        "bank-Q08-018",
        "bank-Q08-019",
        "bank-Q08-022",
        "bank-Q08-023",
        "bank-Q08-024",
        "bank-Q08-025",
        "bank-Q09-015",
        "bank-Q09-019",
        "bank-Q09-022",
        "bank-Q09-023",
        "bank-Q10-005",
        "bank-Q10-007",
        "bank-Q10-008",
        "bank-Q10-009",
        "bank-Q10-012",
        "bank-Q10-013",
        "bank-Q10-015",
        "bank-Q10-016",
        "bank-Q11-006",
        "bank-Q11-007",
        "bank-Q11-008",
        "bank-Q11-018",
        "bank-Q11-019",
        "bank-Q11-020",
        "bank-Q11-025",
        "bank-Q11-028",
        "bank-Q11-029",
        "bank-Q11-030",
        "bank-Q11-033",
        "bank-Q11-034",
        "bank-Q11-035",
        "bank-Q12-020",
        "bank-Q12-022",
        "bank-Q12-023",
        "bank-Q12-028",
        "bank-Q12-029",
        "bank-Q13-005",
        "bank-Q13-019",
        "bank-Q13-030",
        "bank-Q13-031",
        "bank-JX001",
        "bank-JX002",
        "bank-JX003",
        "bank-JX004",
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
        "bank-Q01-041",
        "bank-Q01-042",
        "bank-Q02-026",
        "bank-Q03-036",
        "bank-Q03-037",
        "bank-Q04-031",
        "bank-Q04-032",
        "bank-Q07-031",
        "bank-Q07-032",
        "bank-Q07-033",
        "bank-Q08-026",
        "bank-Q08-027",
        "bank-Q09-026",
        "bank-Q09-027",
        "bank-Q09-028",
        "bank-Q10-026",
        "bank-Q10-027",
        "bank-Q11-036",
        "bank-Q11-037",
        "bank-Q11-038",
        "bank-Q11-039",
        "bank-Q11-040",
        "bank-Q11-041",
        "bank-Q11-042",
        "bank-Q11-043",
        "bank-Q12-036",
        "bank-Q12-037",
        "bank-Q12-038",
        "bank-Q12-039",
        "bank-Q12-040",
        "bank-Q12-041",
        "bank-Q12-042",
        "bank-Q12-043",
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
        "bank-Q13-052",
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
        "bank-LX019",
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
        "bank-LX038",
        "bank-LX039",
        "bank-LX040",
        "bank-LX041",
        "bank-LX042",
        "bank-UX003",
        "bank-UX004",
        "bank-UX006",
        "bank-UX008",
        "bank-UX009",
        "bank-UX015",
        "bank-UX017",
        "bank-UX018",
        "bank-RM001",
        "bank-RM002",
        "bank-RM003",
        "bank-RM004",
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
        "bank-RM031",
        "bank-RM032",
        "bank-RM033",
        "bank-RM034",
        "bank-RM035",
        "bank-RM036",
        "bank-RM037",
        "bank-RM039",
        "bank-RM040"
      ]
    }
  ],
  "archiveDate": "2026-09-20",
  "archiveDescription": "移出主背的原题保留在回收站，可恢复；个人笔记和复习记录按原题号继续关联。"
};
