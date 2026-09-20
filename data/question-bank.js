window.QUESTION_BANK_DATA = {
  "date": "2026-09-20",
  "questions": [
    {
      "id": "bank-Q09-029",
      "number": "Q09-029",
      "question": "GET 和 POST 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "| 对比项 | GET | POST |\n| --- | --- | --- |\n| **语义** | 获取资源的表示，通常用于查询 | 提交数据给目标资源处理 |\n| **安全性语义** | 不应请求修改资源状态 | 可能修改资源状态 |\n| **幂等性** | 按语义应幂等 | 默认不保证，可在业务上实现 |\n| **常见传参** | 查询条件常放 URL 查询串 | 业务数据常放请求体，也可带查询参数 |\n| **缓存** | 常用于缓存 | 满足协议条件也可缓存，不能说绝对不能 |\n\n**例子：** 查询用户用 `GET /users/1`；创建用户常用 `POST /users`。\n\n**注意：** POST 不天然比 GET 更保密，两者都应按需要使用 HTTPS；GET 请求体没有通用语义，不建议依赖；大小限制由客户端、服务器等共同决定，不是“GET 固定 2 KB、POST 无限大”。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 1
    },
    {
      "id": "bank-Q05-044",
      "number": "Q05-044",
      "question": "Spring／Spring MVC 开发接口时，常用的注解有哪些？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**按“注册对象 → 映射请求 → 接收参数 → 返回结果 → 校验与异常”来背。**\n\n| 用途 | 常用注解 | 含义 |\n| --- | --- | --- |\n| 注册组件 | `@Component`、`@Service`、`@Repository` | 把组件交给容器管理，区分角色 |\n| 控制器 | `@Controller`、`@RestController` | 声明 Web 控制器；后者默认按响应体处理返回值 |\n| 注册与注入 | `@Bean`、`@Autowired`、`@Qualifier` | 配置 Bean、注入和选择依赖 |\n| 请求映射 | `@RequestMapping`、`@GetMapping`、`@PostMapping` | 指定路径、请求方法等 |\n| 接收参数 | `@RequestParam`、`@PathVariable`、`@RequestBody` | 查询/表单参数、路径变量、请求体 |\n| 响应体 | `@ResponseBody` | 把返回值经消息转换器写入响应 |\n| 参数校验 | `@Valid`、`@Validated` | 在适用入口触发校验 |\n| 统一异常 | `@RestControllerAdvice`、`@ExceptionHandler` | 集中处理异常并返回统一响应 |\n| 事务 | `@Transactional` | 声明事务边界和回滚规则 |\n\n**注意：** `@RestController` 不等于“只能返回 JSON”，具体格式由转换器和内容协商决定。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 2
    },
    {
      "id": "bank-Q05-014",
      "number": "Q05-014",
      "question": "@Transactional 事务在哪些情况下会失效？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**先区分：事务没有开启，还是已经开启但没有回滚。**\n\n| 原因 | 常见表现 |\n| --- | --- |\n| **对象不受容器管理** | 自己 `new` Service，没走事务代理 |\n| **调用绕过代理** | 同类内部 `this.xxx()`，被调方法的事务注解不生效 |\n| **方法不能被代理拦截** | 如 private 方法；类代理中的 final 方法 |\n| **异常没有触发回滚** | catch 后吞掉；受检异常没配置相应规则 |\n| **线程或资源不一致** | 新线程不继承原 JDBC 事务；数据源/事务管理器不匹配 |\n| **基础设施或传播配置不符** | 未启用事务管理、非事务引擎，或配置为不参与事务 |\n\n**注意：** 同类调用失效的是被调方法的事务增强，不代表已有外层事务消失。不要背“非 public 必失效”：Spring 6+ 类代理默认还可支持 protected / 包可见方法。",
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
        "sourceQuestionId": "bank-Q05-014"
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
      "studyOrder": 3
    },
    {
      "id": "bank-Q05-045",
      "number": "Q05-045",
      "question": "如果要指定某类异常发生时回滚事务，应该怎么配置？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**使用 Spring 的 `@Transactional(rollbackFor = 异常类.class)`。**\n\n```java\n// 配置片段：放在受 Spring 管理的 Service 方法上\n@Transactional(rollbackFor = IOException.class)\npublic void importData() throws IOException {\n    // 执行参与同一事务的数据库操作\n    throw new IOException(\"导入失败\");\n}\n```\n\n- **多个类型：** `rollbackFor = {IOException.class, SQLException.class}`。\n- **所有 Exception：** `rollbackFor = Exception.class`，包含受检异常。\n- **匹配范围：** 指定类型及其子类；不是“只对这一类回滚”，其他异常仍按有效规则处理。\n\n**注意：** 要经过事务代理，异常需传播出去或显式标记回滚；被内部 catch 后吞掉，不能指望这项配置自动感知。导包使用 `org.springframework.transaction.annotation.Transactional`。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 4
    },
    {
      "id": "bank-Q06-038",
      "number": "Q06-038",
      "question": "Oracle 和 MySQL 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**两者都是关系型数据库。开发中重点比较 SQL 写法、字段语义和事务默认值。**\n\n以下以 **Oracle 19c、MySQL 8.4 的 InnoDB** 为例：\n\n| 对比项 | Oracle | MySQL / InnoDB |\n| --- | --- | --- |\n| 默认隔离级别 | 读已提交 RC | 可重复读 RR |\n| 自动生成编号 | 常用序列，也支持 identity 列 | 常用 AUTO_INCREMENT |\n| 分页 | 支持 OFFSET … FETCH；旧代码也常见 ROWNUM | 常用 LIMIT … OFFSET … |\n| 空字符串 | 通常按 NULL 处理 | 空字符串与 NULL 不同 |\n\n**实际注意：** 切换数据库要检查分页、主键生成、空值、函数和驱动，不能认为 SQL 完全通用。\n\n**不要背错：** Oracle 不只是“只能用序列、只能用 ROWNUM”；默认隔离级别也可以被配置改变。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 5
    },
    {
      "id": "bank-Q06-039",
      "number": "Q06-039",
      "question": "两张表的数据需要关联查询时，你会怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**先确认关联字段，再根据是否保留未匹配行选择 JOIN。**\n\n假设 `employee.department_id` 对应 `department.id`，查询员工及部门名称：\n\n```sql\nSELECT e.id, e.name, d.name AS department_name\nFROM employee AS e\nINNER JOIN department AS d\n    ON e.department_id = d.id;\n```\n\n- **`ON`：** 写两张表的关联条件。\n- **`INNER JOIN`：** 只要有匹配部门的员工。\n- **`LEFT JOIN`：** 改用它即可保留没有匹配部门的员工，部门字段补 NULL。\n\n**注意：** 一对多会产生多行；忘记关联条件可能产生笛卡尔积。先说清主表、关联键和期望结果。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 6
    },
    {
      "id": "bank-Q06-032",
      "number": "Q06-032",
      "question": "INNER JOIN、LEFT JOIN 和 RIGHT JOIN 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "| 连接 | 保留哪些数据 | 未匹配部分 |\n| --- | --- | --- |\n| **INNER JOIN** | 两边满足连接条件的组合 | 不展示未匹配行 |\n| **LEFT JOIN** | 左表所有行，以及匹配的右表行 | 右表字段补 NULL |\n| **RIGHT JOIN** | 右表所有行，以及匹配的左表行 | 左表字段补 NULL |\n\n**记住：** INNER 取匹配，LEFT 保左表，RIGHT 保右表。\n\n**注意：** 左右按 SQL 中表的位置区分；一对多可能产生多行。要保留无匹配的主表数据，右表筛选条件通常应放在 `ON`，避免在 `WHERE` 中过滤掉补 NULL 的行。",
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
        "sourceQuestionId": "bank-Q06-032"
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
      "studyOrder": 7
    },
    {
      "id": "bank-Q06-040",
      "number": "Q06-040",
      "question": "主表数据必须全部展示，即使从表没有匹配，也要展示，使用什么连接？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**使用 LEFT JOIN，并把要全部保留的主表放左边。**\n\n例如：展示所有用户，以及他们已经支付的订单：\n\n```sql\nSELECT u.id, u.name, o.id AS order_id\nFROM users AS u\nLEFT JOIN orders AS o\n    ON o.user_id = u.id\n   AND o.status = 'PAID';\n```\n\n- **有已支付订单：** 展示用户和匹配订单。\n- **没有已支付订单：** 用户仍展示，订单字段为 NULL。\n- **关键位置：** 右表的 `o.status = 'PAID'` 放在 `ON`。\n\n**注意：** 放到 `WHERE` 会把补 NULL 的行过滤掉；左连接保留所有主表行，不代表每个用户只返回一行。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 8
    },
    {
      "id": "bank-Q06-009",
      "number": "Q06-009",
      "question": "哪些情况会导致数据库索引失效？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "本次面试",
      "answer": "**面试说“索引失效”，通常指不能利用索引高效定位，不一定完全没访问索引。**\n\n| 常见情况 | 例子或原因 |\n| --- | --- |\n| **索引列做函数或计算** | 普通索引难直接用于 `YEAR(created_at)=2026` |\n| **不合适的隐式转换** | 字符串索引列与数字比较，可能转换列值 |\n| **LIKE 以通配符开头** | `LIKE '%abc'` 通常不能做普通 B+ 树前缀范围定位 |\n| **联合索引跳过最左列** | `(a,b)` 只按 b 查，常规定位能力受影响 |\n| **OR 分支缺少可用索引** | 优化器可能放弃索引访问，需看具体计划 |\n| **匹配行太多** | 大量回表比扫描更贵，优化器可能主动选全表扫描 |\n\n**怎么确认：** 用 `EXPLAIN` 看 `type、key、rows、Extra`，结合真实数据分布。\n\n**不要背错：** `!=`、`IS NULL`、`OR` 不是必然失效；函数索引等也可能支持表达式。",
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
        "sourceQuestionId": "bank-Q06-009"
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
      "studyOrder": 9
    },
    {
      "id": "bank-Q01-001",
      "number": "Q01-001",
      "question": "Java 为什么能跨平台？JDK、JRE、JVM 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **跨平台原理：** Java 源码编译成字节码，由不同平台的 JVM 执行。\n- **JVM：** 执行字节码，负责内存管理、垃圾回收等。\n- **JRE：** 传统意义上的 Java 运行环境，包含 JVM 和运行库。\n- **JDK：** 开发工具包，在运行能力之外提供 `javac` 等开发工具。\n\n**记住：** 开发用 JDK，运行靠 JVM。跨平台的是字节码，不是同一个 JVM 程序。",
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
        "sourceQuestionId": "bank-Q01-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 10
    },
    {
      "id": "bank-Q01-002",
      "number": "Q01-002",
      "question": "面向对象的封装、继承、多态分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 特性 | 含义 | 例子 |\n| --- | --- | --- |\n| **封装** | 隐藏内部状态，通过方法提供受控访问 | 余额设为 `private`，只能通过存取款方法修改 |\n| **继承** | 子类复用并扩展父类的能力 | `Dog extends Animal` |\n| **多态** | 同一个父类型调用，执行实际对象的重写方法 | `Animal a = new Dog(); a.speak();` |\n\n**记住：** 封装管内部，继承做扩展，多态换实现。",
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
        "sourceQuestionId": "bank-Q01-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 11
    },
    {
      "id": "bank-Q01-003",
      "number": "Q01-003",
      "question": "方法重载和方法重写有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | 重载 Overload | 重写 Override |\n| --- | --- | --- |\n| 发生位置 | 同一类或继承关系中 | 父子类之间 |\n| 方法要求 | 同名，参数列表不同 | 可继承的实例方法，签名匹配 |\n| 选择时机 | 编译期按参数选择 | 运行期按实际对象选择 |\n\n**注意：** 只改返回值不算重载；`static` 同名方法属于隐藏，不是重写。",
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
        "sourceQuestionId": "bank-Q01-003"
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
      "studyOrder": 12
    },
    {
      "id": "bank-Q01-004",
      "number": "Q01-004",
      "question": "接口和抽象类怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | 接口 | 抽象类 |\n| --- | --- | --- |\n| 主要作用 | 定义一组能力或规范 | 共享基础实现与状态 |\n| 继承限制 | 一个类可实现多个接口 | 一个类只能直接继承一个类 |\n| 成员特点 | 可有抽象、default、static 等方法；没有普通实例字段 | 可有实例字段、构造器和抽象/具体方法 |\n| 常见场景 | 不同支付方式都实现 PayService | 多种报表复用统一导出流程 |\n\n**记住：** 约定能力用接口，共享基础实现可用抽象类。",
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
        "sourceQuestionId": "bank-Q01-004"
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
      "studyOrder": 13
    },
    {
      "id": "bank-Q01-005",
      "number": "Q01-005",
      "question": "四种访问权限有何区别？“同一包”是不是同一文件？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 权限 | 主要可访问范围 |\n| --- | --- |\n| `private` | 所属类的封装边界 |\n| 默认（不写） | 同一个包 |\n| `protected` | 同包；跨包时遵守子类访问规则 |\n| `public` | 公开访问，仍受类型可见性等约束 |\n\n**注意：** 同包指 `package` 声明相同，不是同一文件；跨包子类不能通过任意父类对象访问其 `protected` 成员。",
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
        "sourceQuestionId": "bank-Q01-005"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 14
    },
    {
      "id": "bank-Q01-006",
      "number": "Q01-006",
      "question": "static 属于类还是对象？this 什么时候能省略？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **`static`：** 修饰类级成员，不依附某个对象，通常用 `类名.成员` 访问。\n- **实例成员：** 属于某个对象，需要通过对象访问。\n- **`this`：** 表示当前对象；静态方法中不能直接使用。\n- **同名时不能省：** `this.name = name` 左边是字段，右边是参数。\n\n```java\nclass User {\n    private String name;\n    User(String name) { this.name = name; }\n}\n```",
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
        "sourceQuestionId": "bank-Q01-006"
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
      "studyOrder": 15
    },
    {
      "id": "bank-Q01-007",
      "number": "Q01-007",
      "question": "final、finally、finalize 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **`final`：** 变量只能赋值一次；方法不能被重写；类不能被继承。\n- **`finally`：** 异常处理中的清理代码块，退出 `try/catch` 时通常执行。\n- **`finalize()`：** 历史对象终结机制，不可靠，不应依赖它释放资源。\n\n**注意：** `final List` 固定的是引用，不禁止 `add()`；释放流和连接优先用 `try-with-resources`。",
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
        "sourceQuestionId": "bank-Q01-007"
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
      "studyOrder": 16
    },
    {
      "id": "bank-Q01-008",
      "number": "Q01-008",
      "question": "八种基本数据类型是什么？包装类有哪些使用注意点？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 分类 | 基本类型 | 对应包装类 |\n| --- | --- | --- |\n| 整数 | `byte / short / int / long` | `Byte / Short / Integer / Long` |\n| 浮点 | `float / double` | `Float / Double` |\n| 字符 | `char` | `Character` |\n| 布尔 | `boolean` | `Boolean` |\n\n- **基本类型：** 直接表示基本值，不能取 `null`。\n- **包装类：** 是对象，可取 `null`，能作为泛型参数。\n\n**注意：** 金额不要依赖 `double` 的十进制精度；`char` 是 UTF-16 代码单元，不保证能单独表示所有字符。",
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
        "sourceQuestionId": "bank-Q01-008"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 17
    },
    {
      "id": "bank-Q01-009",
      "number": "Q01-009",
      "question": "自动装箱、拆箱和 Integer 缓存有什么坑？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **装箱：** 基本类型转包装类型，如 `Integer x = 10`。\n- **拆箱：** 包装类型转基本类型，如 `int y = x`。\n- **缓存：** `Integer.valueOf` 至少缓存 `-128～127`，不能依赖缓存比较业务数值。\n- **比较：** 包装对象通常用 `equals()` 比较值，不用 `==` 猜对象是否相同。\n\n**注意：** `Integer x = null; int y = x;` 会因拆箱抛出空指针异常。",
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
        "sourceQuestionId": "bank-Q01-009"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 18
    },
    {
      "id": "bank-Q01-010",
      "number": "Q01-010",
      "question": "== 和 equals 有什么区别？重写 equals 为什么要重写 hashCode？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 比较方式 | 基本类型 | 引用类型 |\n| --- | --- | --- |\n| `==` | 比较值 | 比较是否指向同一对象 |\n| `equals()` | 不能直接调用 | 默认比较身份；重写后可比较内容 |\n\n- **为什么一起重写：** 哈希容器先按 `hashCode` 定位，再用 `equals` 判断键相等。\n- **必须满足：** `equals` 相等 → `hashCode` 相同；反过来不成立。\n\n**例子：** 两个用户按同一 ID 判等时，也必须按一致规则计算哈希值。",
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
        "sourceQuestionId": "bank-Q01-010"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 19
    },
    {
      "id": "bank-Q01-011",
      "number": "Q01-011",
      "question": "Java 是值传递还是引用传递？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**Java 只有值传递。**\n\n- **传基本类型：** 复制基本值，修改形参不影响外部变量。\n- **传对象：** 复制引用，两个引用仍可指向同一对象。\n- **改对象内容：** 例如 `list.add(...)`，外部能看到变化。\n- **改形参指向：** 例如 `list = new ArrayList<>()`，不会替换外部引用。",
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
        "sourceQuestionId": "bank-Q01-011"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic void change(Person p) {\n    p.name = \"改了原对象\";\n    p = new Person(\"只改变局部引用\");\n}\n// Person p = new Person(\"原名字\"); change(p);\n// p.name 最后为“改了原对象”，不是“只改变局部引用”。\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 20
    },
    {
      "id": "bank-Q01-012",
      "number": "Q01-012",
      "question": "String 为什么不可变？不可变有什么好处？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **不可变的含义：** `String` 创建后，不能通过正常接口修改这个对象原有的字符内容。\n- **实现保障：** 内部数据被封装，不提供原地修改接口；类为 `final`，禁止继承破坏约定。\n- **好处：** 便于字符串共享、哈希缓存、作为 Map 的键和并发读取。\n\n**例子：** `s = s + \"a\"` 改变的是变量 `s` 指向的字符串，不是把旧字符串原地改掉。",
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
        "sourceQuestionId": "bank-Q01-012"
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
      "studyOrder": 21
    },
    {
      "id": "bank-Q01-014",
      "number": "Q01-014",
      "question": "StringBuilder、StringBuffer 和字符串加号怎么选？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 类型 | 内容可变吗 | 并发特点 | 使用场景 |\n| --- | --- | --- | --- |\n| `String` | 不可变 | 对象内容可安全共享 | 常规字符串 |\n| `StringBuilder` | 可变 | 不保证线程安全 | 单线程反复拼接 |\n| `StringBuffer` | 可变 | 常用方法有同步保护 | 共享拼接对象的同步访问 |\n\n**记住：** 少量拼接直接用 `+`；循环大量追加优先 `StringBuilder`。`StringBuffer` 的多步组合操作仍需考虑原子性。",
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
        "sourceQuestionId": "bank-Q01-014"
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
      "studyOrder": 22
    },
    {
      "id": "bank-Q01-015",
      "number": "Q01-015",
      "question": "金额为什么不用 double？BigDecimal 怎么正确使用？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **不用 `double`：** 很多十进制小数不能被二进制浮点数精确表示。\n- **正确创建：** 优先 `new BigDecimal(\"0.1\")` 或 `BigDecimal.valueOf(...)`。\n- **正确运算：** 接收运算返回值；除法明确精度和舍入规则。\n- **正确比较：** 金额大小用 `compareTo()`；`equals()` 还比较小数位数。\n\n**例子：** `1.0` 与 `1.00` 用 `compareTo()` 得到 `0`，用 `equals()` 得到 `false`。",
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
        "sourceQuestionId": "bank-Q01-015"
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
      "studyOrder": 23
    },
    {
      "id": "bank-Q01-016",
      "number": "Q01-016",
      "question": "异常体系、受检异常和运行时异常怎么区分？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **根类型：** `Throwable` 主要分为 `Error` 和 `Exception`。\n- **Error：** 常表示严重的运行环境问题，不宜普遍捕获后继续业务。\n- **受检异常：** 编译器要求捕获或声明，如 `IOException`。\n- **运行时异常：** `RuntimeException` 及其子类，不强制捕获或声明，如 `NullPointerException`。\n\n**注意：** “不强制处理”不等于运行时异常可以不排查。",
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
        "sourceQuestionId": "bank-Q01-016"
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
      "studyOrder": 24
    },
    {
      "id": "bank-Q01-019",
      "number": "Q01-019",
      "question": "泛型解决什么问题？什么是类型擦除？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **泛型：** 用类型参数约束容器或方法，让类型错误尽早在编译期暴露。\n- **好处：** 提高类型安全，减少手工强制转换。\n- **类型擦除：** 编译时把类型参数按上界或 `Object` 处理，并插入必要的类型转换。\n\n**例子：** `List<String>` 不允许直接 `add(123)`；但它与 `List<Integer>` 通常不是两个不同的运行时类。\n\n**注意：** 并非所有泛型声明信息都消失，部分签名仍可通过反射读取。",
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
        "sourceQuestionId": "bank-Q01-019"
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
      "studyOrder": 25
    },
    {
      "id": "bank-Q01-021",
      "number": "Q01-021",
      "question": "反射是什么？有什么代价与限制？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "- **是什么：** 反射是在运行时读取类、字段、方法和构造器信息，并动态操作对象的机制。\n- **能做什么：** 动态创建对象、调用方法、读取或设置字段。\n- **用在哪里：** 依赖注入、对象映射、框架扩展。\n- **代价：** 错误可能推迟到运行时，也要考虑访问权限、模块限制与维护成本。",
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
        "sourceQuestionId": "bank-Q01-021"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 26
    },
    {
      "id": "bank-Q01-022",
      "number": "Q01-022",
      "question": "注解为什么不会自己执行？谁来读取并处理注解？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- **注解是什么：** 附加在类、方法、字段等位置的元数据，不会自己执行业务。\n- **谁处理：** 编译器、注解处理器或运行时框架。\n- **`@Target`：** 规定能标注在哪些位置。\n- **`@Retention`：** 规定保留到源码、字节码还是运行时。\n\n**例子：** 自定义一个权限注解，还必须有切面或拦截器读取它，才会真正检查权限。",
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
        "sourceQuestionId": "bank-Q01-022"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 27
    },
    {
      "id": "bank-Q01-043",
      "number": "Q01-043",
      "question": "类和对象分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **类：** 描述一类事物的数据和行为，是创建对象的模板。\n- **对象：** 类的具体实例，拥有自己的状态。\n- **字段：** 保存对象或类的数据。\n- **方法：** 定义可以执行的操作。\n\n**例子：** `User` 是类；`new User()` 创建一个用户对象。",
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
        "reviewedOn": null
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
      "studyOrder": 28
    },
    {
      "id": "bank-Q01-044",
      "number": "Q01-044",
      "question": "构造方法是什么？和普通方法有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 对比项 | 构造方法 | 普通方法 |\n| --- | --- | --- |\n| 用途 | 初始化新对象 | 执行业务行为 |\n| 名称 | 与类名相同 | 按业务命名 |\n| 返回类型 | 不写返回类型，连 void 也不写 | 必须声明返回类型或 void |\n| 调用 | 创建对象时参与构造过程 | 通过方法调用执行 |\n\n**注意：** 构造方法可以重载，但不能被继承或重写；完全没写构造器时，编译器才会提供默认构造器。",
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
        "reviewedOn": null
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
      "studyOrder": 29
    },
    {
      "id": "bank-Q01-045",
      "number": "Q01-045",
      "question": "成员变量和局部变量有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 对比项 | 成员变量 | 局部变量 |\n| --- | --- | --- |\n| 定义位置 | 类中、方法外 | 方法、代码块或参数列表中 |\n| 生命周期 | 随所属对象或类的状态管理 | 受当前调用和作用域约束 |\n| 默认值 | 字段有默认值 | 使用前必须明确赋值 |\n| 并发 | 共享可变字段可能有竞争 | 局部引用指向的对象仍可能共享 |\n\n**注意：** “局部变量”不代表其引用的整个对象一定在栈上，也不保证对象线程安全。",
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
        "reviewedOn": null
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
      "studyOrder": 30
    },
    {
      "id": "bank-Q01-046",
      "number": "Q01-046",
      "question": "throw 和 throws 有什么区别？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **`throw`：** 写在方法体中，实际抛出一个异常对象。\n- **`throws`：** 写在方法签名中，声明可能抛出的异常类型。\n\n```java\nvoid read() throws IOException {\n    throw new IOException(\"读取失败\");\n}\n```\n\n**记住：** throw 是动作，throws 是声明；受检异常需要捕获或声明。",
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
        "reviewedOn": null
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
      "studyOrder": 31
    },
    {
      "id": "bank-Q01-047",
      "number": "Q01-047",
      "question": "常见的运行时异常有哪些？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 异常 | 典型原因 |\n| --- | --- |\n| NullPointerException | 使用了 null 引用 |\n| IndexOutOfBoundsException | 下标越界 |\n| ClassCastException | 对象不支持目标强制类型转换 |\n| NumberFormatException | 文本不能解析为指定数字 |\n| ArithmeticException | 如整数除以零 |\n| IllegalArgumentException | 参数不满足要求 |\n\n**注意：** 应定位输入与调用链，不要一律 catch 后返回成功。",
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
        "reviewedOn": null
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
      "studyOrder": 32
    },
    {
      "id": "bank-Q01-048",
      "number": "Q01-048",
      "question": "Java 为什么不允许一个类继承多个类？接口可以实现多个吗？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **类继承：** 一个类只能直接继承一个父类，避免多父类状态和实现之间的复杂冲突。\n- **接口实现：** 一个类可以实现多个接口，用于组合多种能力。\n- **默认方法冲突：** 两个接口的 default 方法冲突时，实现类需要显式处理。\n\n**例子：** 一个类可以同时实现“可支付”和“可退款”接口，但不能同时 extends 两个类。",
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
        "reviewedOn": null
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
      "studyOrder": 33
    },
    {
      "id": "bank-Q01-049",
      "number": "Q01-049",
      "question": "字符串比较为什么通常用 equals，而不是 ==？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **`==`：** 判断两个引用是否指向同一对象。\n- **`equals()`：** String 已重写它，用来比较字符串内容。\n- **常量池：** 可能使部分相同字面量共享对象，但不能当作业务判断依据。\n\n```java\nString a = new String(\"java\");\nString b = new String(\"java\");\n// a == b 为 false；a.equals(b) 为 true\n```\n\n**注意：** 接收方可能为 null 时先判空，或使用 `Objects.equals(a, b)`。",
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
        "reviewedOn": null
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
      "studyOrder": 34
    },
    {
      "id": "bank-Q01-050",
      "number": "Q01-050",
      "question": "序列化和反序列化分别是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **序列化：** 把对象状态转换成可传输或可存储的表示。\n- **反序列化：** 从这些数据恢复对象或数据结构。\n- **常见用途：** 接口传输、消息传递、数据保存。\n- **常见形式：** JSON、Protobuf、Java 原生序列化等。\n\n**注意：** 不可信输入不能随意进行 Java 原生反序列化；对象中的密码等敏感信息不应直接输出。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 35
    },
    {
      "id": "bank-Q01-013",
      "number": "Q01-013",
      "question": "字符串常量池、new String 和 intern 怎么理解？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **常量池：** 复用相同内容的字符串。\n- **字面量：** 相同字符串字面量通常使用同一个驻留对象。\n- **new String：** 创建新的 String 对象，不等于取同一个池引用。\n- **intern()：** 返回同内容字符串的规范化池引用。\n\n```java\nString a = \"ab\", b = \"ab\", c = new String(\"ab\");\n// a == b：true；a == c：false；a.equals(c)：true\n```\n\n**注意：** 比较内容用 equals，不要通过创建对象数或常量池猜业务相等。",
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
        "sourceQuestionId": "bank-Q01-013"
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
      "studyOrder": 36
    },
    {
      "id": "bank-Q01-017",
      "number": "Q01-017",
      "question": "try、catch、finally 按什么顺序执行？为什么不建议在 finally 中 return？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **执行 `try`：** 正常执行主逻辑。\n2. **匹配 `catch`：** 发生匹配的异常时执行异常处理。\n3. **执行 `finally`：** 离开上述流程前通常执行清理。\n\n**返回规则：** `try` 中先计算返回值，再执行 `finally`。\n\n```java\ntry { return 1; }\nfinally { return 2; } // 返回 2，不建议这样写\n```\n\n**注意：** `finally` 中 `return` 会覆盖返回值，甚至吞掉异常；进程被强制终止时也不保证执行 `finally`。",
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
        "sourceQuestionId": "bank-Q01-017"
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
      "studyOrder": 37
    },
    {
      "id": "bank-Q01-018",
      "number": "Q01-018",
      "question": "try-with-resources 为什么比手写关闭更可靠？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- try-with-resources 会自动关闭实现 AutoCloseable 的资源，省去容易漏写的 finally。\n\n- 多个资源按“后声明、先关闭”的顺序关闭。\n\n- 业务代码和关闭操作同时报错时，会保留主要异常，并把关闭异常附在 suppressed 中。\n\n**例子：** try (InputStream in = new FileInputStream(path)) { ... } 无论正常结束还是抛异常，离开时都会尝试关闭 in。",
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
        "sourceQuestionId": "bank-Q01-018"
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
      "studyOrder": 38
    },
    {
      "id": "bank-Q01-023",
      "number": "Q01-023",
      "question": "JDK 动态代理和 CGLIB 的基本区别？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "| 对比项 | JDK 动态代理 | CGLIB 类代理 |\n| --- | --- | --- |\n| 实现方式 | 创建实现接口的代理对象 | 创建目标类的子类 |\n| 主要要求 | 围绕接口进行调用 | 目标类可被继承、方法可被重写 |\n| 典型限制 | 代理接口之外的方法不直接暴露 | 不能靠重写增强 final/private 方法 |\n\n**共同点：** 调用要经过代理才会被增强；对象内部的 `this.xxx()` 通常绕过代理。",
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
        "sourceQuestionId": "bank-Q01-023"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 39
    },
    {
      "id": "bank-Q01-024",
      "number": "Q01-024",
      "question": "浅拷贝与深拷贝如何区分？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- 浅拷贝只复制外层对象，里面的引用仍指向原来的对象。\n\n- 深拷贝会把需要独立的内部对象也复制出来。\n\n- 判断关键不是“是否 new 了外层”，而是修改内部对象时，另一份是否跟着变化。\n\n**例子：** 复制 User 后，两份 User 还共用同一个 Address，就是浅拷贝；连 Address 也单独复制，才让地址修改相互独立。",
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
        "sourceQuestionId": "bank-Q01-024"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 40
    },
    {
      "id": "bank-Q01-025",
      "number": "Q01-025",
      "question": "Java 序列化的作用与风险？transient 有什么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- 序列化是把对象状态转换成字节或其他可保存、可传输的格式。\n\n- 反序列化是恢复对象。\n\n- Java 原生序列化中，transient 字段默认不被保存，static 字段也不属于对象状态。\n\n- 不可信数据不能随意做原生反序列化。\n\n**例子：** 保存用户对象时，缓存字段可以不序列化。跨服务传输通常用明确的 DTO 和 JSON/Protobuf，而不是直接暴露内部对象结构。",
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
        "sourceQuestionId": "bank-Q01-025"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 41
    },
    {
      "id": "bank-Q01-026",
      "number": "Q01-026",
      "question": "字节流、字符流与乱码的关系？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 字节流按 byte 处理数据，图片、视频、压缩包都适用。\n\n- 字符流按指定字符集解释字节，适合文本。\n\n- 乱码最常见的原因是“写的时候一种编码，读的时候另一种编码”。\n\n- 读写文本应明确约定编码。\n\n**例子：** 文件按 UTF-8 保存，读取时却按另一种编码解释，中文就可能乱码。图片不能先随意转字符串再写回。",
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
        "sourceQuestionId": "bank-Q01-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 42
    },
    {
      "id": "bank-Q01-029",
      "number": "Q01-029",
      "question": "Lambda、函数式接口、方法引用是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **函数式接口：** 只有一个需要实现的抽象方法。\n- **Lambda：** 该抽象方法的简洁实现，例如 `x -> x > 0`。\n- **方法引用：** 复用现有方法，例如 `String::length`。\n\n| 常用接口 | 用途 |\n| --- | --- |\n| `Predicate` | 判断，返回真假 |\n| `Function` | 把输入转换为输出 |\n| `Consumer` | 接收并处理数据 |\n| `Supplier` | 提供一个结果 |\n\n**注意：** 捕获的局部变量需是 `final` 或事实上不再赋值。",
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
        "sourceQuestionId": "bank-Q01-029"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 43
    },
    {
      "id": "bank-Q01-030",
      "number": "Q01-030",
      "question": "Stream 的 map、flatMap、filter 和惰性执行是什么？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 操作 | 作用 | 例子 |\n| --- | --- | --- |\n| `filter` | 筛选元素 | 留下成年人 |\n| `map` | 逐个转换 | 用户转换为姓名 |\n| `flatMap` | 转换并展开多层数据 | 多个姓名列表合成一个流 |\n| `collect` | 收集结果 | 收集成 List |\n\n**执行特点：** 中间操作通常惰性执行，由 `collect/count` 等终止操作触发；同一条流通常只能消费一次。",
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
        "sourceQuestionId": "bank-Q01-030"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 44
    },
    {
      "id": "bank-Q01-031",
      "number": "Q01-031",
      "question": "Optional 应该怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- Optional 用来明确表示“这个返回值可能不存在”。\n\n- 有值时可以转换，没值时提供默认值或抛业务异常，不要直接 get。\n\n- orElse 会提前计算默认值，orElseGet 只在没有值时调用生成函数。\n\n**例子：** 查不到用户时，orElseGet(() -> loadDefaultUser()) 才会调用备用加载；orElse(loadDefaultUser()) 无论有没有值都会先调用。",
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
        "sourceQuestionId": "bank-Q01-031"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 45
    },
    {
      "id": "bank-Q01-035",
      "number": "Q01-035",
      "question": "常见设计模式怎么在后端落地？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 设计模式是把常见变化点组织好的办法。\n\n- 策略模式替换算法，工厂选择实现，模板方法固定流程，责任链按顺序处理，观察者发布通知。\n\n- 面试要说明“哪里会变、怎么扩展”，而不是只背模式名称。\n\n**例子：** 支付方式新增一种时，增加一个 PayStrategy 实现，再注册到工厂，原来的下单主流程尽量不动。",
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
        "sourceQuestionId": "bank-Q01-035"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 46
    },
    {
      "id": "bank-Q01-036",
      "number": "Q01-036",
      "question": "Object 常见方法有哪些？clone 为什么要小心？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- Object 是 Java 类层次的根类。\n\n- 常问的方法有 equals、hashCode、toString、getClass、wait/notify/notifyAll、clone。\n\n- clone 默认浅拷贝。\n\n- wait/notify 是线程协作方法，必须按对应对象锁的规则调用。\n\n**例子：** getClass() 问“实际是什么类”；instanceof 问“能不能当作这个类型使用”。Dog 对象的精确类是 Dog，也可以 instanceof Animal。",
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
        "sourceQuestionId": "bank-Q01-036"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 47
    },
    {
      "id": "bank-Q01-037",
      "number": "Q01-037",
      "question": "类初始化、实例初始化和构造器的顺序？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 按常见 Java 8/17/21 场景，先完成父类和子类的静态初始化，再创建对象：父类实例字段/代码块、父类构造器、子类实例字段/代码块、子类构造器。\n\n- 字段和代码块按源码顺序。\n\n- 静态初始化通常一次，实例初始化每个新对象都执行。\n\n**例子：** 第一次 new Child() 会涉及静态初始化；第二次再 new，只重新走对象初始化，不会再执行已经成功执行过的静态块。",
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
        "sourceQuestionId": "bank-Q01-037"
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
      "studyOrder": 48
    },
    {
      "id": "bank-Q01-040",
      "number": "Q01-040",
      "question": "枚举有什么优势？switch、单例场景怎么用？",
      "category": "Java 基础",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- 枚举用一个类型表示有限的合法选项，比散落的字符串和数字更不容易写错。\n\n- 枚举还可以带业务 code、说明和方法。\n\n- 持久化保存明确的业务 code，不要保存 ordinal，因为调整枚举顺序会改变 ordinal。\n\n**例子：** 订单状态用 CREATED、PAID、CLOSED 表示。枚举能限制有哪些状态，但“已关闭能否转已支付”仍需要状态机规则。",
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
        "sourceQuestionId": "bank-Q01-040"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 49
    },
    {
      "id": "bank-Q01-051",
      "number": "Q01-051",
      "question": "什么是深拷贝、浅拷贝？为什么只复制引用不算深拷贝？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **复制引用：** 两个变量指向同一个外层对象。\n- **浅拷贝：** 创建新的外层对象，但内部引用仍指向原来的嵌套对象。\n- **深拷贝：** 把需要独立的内部可变对象也复制出来。\n\n**例子：** 复制 User 后仍共享 Address，修改地址会同时影响两份 User，这不是独立的深拷贝。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 50
    },
    {
      "id": "bank-RM038",
      "number": "RM038",
      "question": "单例怎么写？反射和序列化会不会破坏它？",
      "answer": "- 简单场景可用静态内部类或枚举。\n\n- 双重检查写法需要volatile。\n\n- 普通私有构造器主要阻止正常外部new，不自动抵御所有反射访问。\n\n- 实现Serializable的普通单例还要考虑反序列化创建新对象的问题，常用readResolve维护语义。\n\n**例子：** 枚举单例可写enum Registry { INSTANCE }，但实例里的可变Map仍要做并发保护，单例不是“所有操作自动线程安全”。",
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
        "sourceQuestionId": "bank-RM038"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 51
    },
    {
      "id": "bank-UX002",
      "number": "UX002",
      "question": "Stream.collect(toMap) 遇到重复 key 怎么办？",
      "category": "Java 基础",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 只给 key 和 value 两个转换函数时，toMap 遇到重复 key 会抛异常，不会默认替你覆盖。\n\n- 允许重复时，要明确合并规则：保留先来的、保留后来的、数值相加，或者改成 groupingBy 保存一组值。\n\n- 规则要由业务决定。",
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
        "sourceQuestionId": "bank-UX002"
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
      "studyOrder": 52
    },
    {
      "id": "bank-Q02-001",
      "number": "Q02-001",
      "question": "Java 集合体系怎么划分？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**集合分为两条主线：`Collection` 存元素，`Map` 存键值对。**\n\n| 接口 | 主要特点 | 常见实现 |\n| --- | --- | --- |\n| `List` | 有顺序，允许重复 | ArrayList、LinkedList |\n| `Set` | 按相等规则去重 | HashSet、TreeSet |\n| `Queue / Deque` | 队列或双端操作 | ArrayDeque、LinkedList |\n| `Map` | 键不能重复，值可重复 | HashMap、TreeMap |\n\n**注意：** `Map` 不继承 `Collection`；“有顺序”不一定指按大小排序。",
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
        "sourceQuestionId": "bank-Q02-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 53
    },
    {
      "id": "bank-Q02-002",
      "number": "Q02-002",
      "question": "ArrayList 与 LinkedList 的区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | ArrayList | LinkedList |\n| --- | --- | --- |\n| 底层 | 动态数组 | 双向链表 |\n| 按下标访问 | O(1) | O(n) |\n| 中间增删 | 通常需要移动元素 | 先定位节点，再修改链接 |\n| 空间特点 | 较紧凑 | 节点及前后指针有额外开销 |\n| 通常选择 | 普通列表优先考虑 | 明确需要链表或双端操作时评估 |\n\n**注意：** “插入多就一定选 LinkedList”不准确，查找插入位置也有成本。",
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
        "sourceQuestionId": "bank-Q02-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 54
    },
    {
      "id": "bank-Q02-005",
      "number": "Q02-005",
      "question": "HashMap 的底层结构？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **结构：** JDK 8+ 常见实现为数组 + 链表 + 红黑树。\n- **定位：** 先根据键的哈希找到桶，再比较哈希和 `equals()` 找到具体键。\n- **冲突：** 多个键落入同一桶；桶内冲突较多且满足条件时可树化。\n- **特点：** 平均查询较快；不保证迭代顺序，也不保证线程安全。\n\n**注意：** 哈希相同不代表键相等；HashMap 允许一个 `null` 键。",
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
        "sourceQuestionId": "bank-Q02-005"
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
      "studyOrder": 55
    },
    {
      "id": "bank-Q02-012",
      "number": "Q02-012",
      "question": "HashMap、Hashtable、ConcurrentHashMap 怎么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 容器 | 线程安全 | null 键/值 | 特点 |\n| --- | --- | --- | --- |\n| HashMap | 不保证 | 允许 | 普通单线程或外部同步场景 |\n| Hashtable | 单方法有同步保护 | 不允许 | 历史容器，锁粒度较粗 |\n| ConcurrentHashMap | 支持并发安全操作 | 不允许 | 更细粒度并发控制，提供原子复合方法 |\n\n**注意：** 容器安全不等于 `get → 修改 → put` 整段业务自动安全。",
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
        "sourceQuestionId": "bank-Q02-012"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 56
    },
    {
      "id": "bank-Q02-027",
      "number": "Q02-027",
      "question": "List、Set、Map 有什么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 接口 | 存什么 | 重复规则 | 常用场景 |\n| --- | --- | --- | --- |\n| List | 单个元素 | 允许重复，按位置组织 | 返回列表、顺序处理 |\n| Set | 单个元素 | 按相等规则去重 | 唯一 ID 集合 |\n| Map | 键值对 | 键不重复，值可重复 | 按 ID 查对象 |\n\n**记住：** List 看顺序，Set 做去重，Map 按键找值。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 57
    },
    {
      "id": "bank-Q02-028",
      "number": "Q02-028",
      "question": "什么是哈希冲突？HashMap 怎么处理？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **哈希冲突：** 不同的键经过哈希定位后落到同一桶。\n- **判断真正相等：** 不能只看哈希，还要按 `equals()` 等规则比较。\n- **处理方式：** 常见 JDK 8+ HashMap 在桶内使用链表，满足条件时转红黑树。\n- **减少冲突影响：** 合理容量、扩容及良好的键哈希分布。\n\n**注意：** 冲突不等于自动覆盖；只有匹配到同一个键才替换对应值。",
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
        "reviewedOn": null
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
      "studyOrder": 58
    },
    {
      "id": "bank-Q02-029",
      "number": "Q02-029",
      "question": "Collection 和 Collections 有什么区别？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **Collection：** 集合接口，List、Set、Queue 等从它扩展。\n- **Collections：** 工具类，提供排序、反转、只读或同步包装等静态方法。\n- **Map：** 不属于 Collection 的子接口。\n\n**记住：** 少一个 s 是接口，多一个 s 是工具类。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 59
    },
    {
      "id": "bank-Q02-003",
      "number": "Q02-003",
      "question": "ArrayList 如何扩容？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **容量不够：** 申请更大的底层数组。\n2. **复制元素：** 把旧数组中的元素复制过去。\n3. **更新引用：** 后续操作使用新数组。\n\n- 常见 OpenJDK 实现按约 **1.5 倍**增长，必要时满足更大的实际需求。\n- **size** 是元素个数；**capacity** 是数组容量。\n- 已知数据量时可预设容量，减少扩容。",
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
        "sourceQuestionId": "bank-Q02-003"
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
      "studyOrder": 60
    },
    {
      "id": "bank-Q02-004",
      "number": "Q02-004",
      "question": "ArrayList 为什么线程不安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- ArrayList 的 add 不是一个不可分割的动作：要检查容量、写数组、修改 size。\n\n- 多个线程同时做这些步骤可能覆盖数据。\n\n- 需要并发访问时使用合适容器或统一加锁。\n\n- 给 size 加 volatile 也不能把整次 add 变成原子操作。",
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
        "sourceQuestionId": "bank-Q02-004"
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
      "studyOrder": 61
    },
    {
      "id": "bank-Q02-006",
      "number": "Q02-006",
      "question": "HashMap 的 put 流程？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **算位置：** 表未初始化则先初始化，再计算哈希和桶下标。\n2. **看桶：** 空桶直接插入。\n3. **找键：** 已有相同键就替换值，否则新增节点。\n4. **调结构：** 按条件树化、更新大小或扩容。\n\n**记住：** 覆盖旧键不会增加 `size`；`put()` 返回旧值。",
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
        "sourceQuestionId": "bank-Q02-006"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 62
    },
    {
      "id": "bank-Q02-007",
      "number": "Q02-007",
      "question": "HashMap 为什么容量常为 2 的幂？为什么扰动哈希？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 容量取 2 的幂，能用 (n-1)&hash 快速算下标，也方便扩容时拆分桶。\n\n- 哈希扰动把高位信息混入低位，让下标分布更均匀。\n\n- 两者是 HashMap 配套的实现选择，不是所有哈希表必须遵守的规定。\n\n**例子：** 扩容从 16 到 32，元素通常只会留在原位置，或移动到“原位置+16”。",
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
        "sourceQuestionId": "bank-Q02-007"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 63
    },
    {
      "id": "bank-Q02-008",
      "number": "Q02-008",
      "question": "JDK 8 HashMap 的链表什么时候转红黑树？什么时候退化？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "| 数值 | 含义 |\n| --- | --- |\n| **8** | 常见 JDK 8 实现的树化阈值 |\n| **64** | 允许树化的最小数组容量 |\n| **6** | 扩容拆分时的退化阈值 |\n\n**理解：** 桶太长但数组还小，通常先扩容；数组足够大才考虑树化。\n\n**注意：** 不要背“第 8 个元素必定树化、删到 6 个必定退化”；插入、扩容拆分和普通删除的触发路径不同。",
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
        "sourceQuestionId": "bank-Q02-008"
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
      "studyOrder": 64
    },
    {
      "id": "bank-Q02-009",
      "number": "Q02-009",
      "question": "HashMap 如何扩容？负载因子为什么常是 0.75？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **触发：** 新增映射后，大小超过扩容阈值，通常触发扩容。\n- **阈值：** 通常为 `容量 × 负载因子`；默认负载因子 **0.75**。\n- **扩容：** 常见实现扩大为原来的 **2 倍**，重新分布节点。\n- **0.75 的含义：** 空间利用率与冲突成本的折中，并非所有场景的最优值。\n\n**例子：** 容量 16、负载因子 0.75，阈值 12；通常新增第 13 个键时扩容。",
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
        "sourceQuestionId": "bank-Q02-009"
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
      "studyOrder": 65
    },
    {
      "id": "bank-Q02-010",
      "number": "Q02-010",
      "question": "HashMap 在多线程下会发生什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **HashMap 不适合没有同步保护的并发读写：**可能丢数据、读不到更新或出现结构问题。\n\n- JDK 8 修复了旧版本某些扩容风险，也不等于它线程安全。\n\n- 共享可变 Map 通常用 ConcurrentHashMap 或外部统一锁。",
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
        "sourceQuestionId": "bank-Q02-010"
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
      "studyOrder": 66
    },
    {
      "id": "bank-Q02-011",
      "number": "Q02-011",
      "question": "为什么不要用可变对象作 HashMap 键？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- HashMap 先按哈希找桶。\n\n- 如果 key 放进去后，参与 hashCode/equals 的字段变了，再查询就可能去错误的桶，导致“明明在里面却取不到”。\n\n- key 应尽量用稳定 ID 或不可变对象。\n\n**例子：** 用 User.name 计算哈希，放入后把 name 从 A 改成 B，get(user) 也可能找不到原记录。",
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
        "sourceQuestionId": "bank-Q02-011"
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
      "studyOrder": 67
    },
    {
      "id": "bank-Q02-013",
      "number": "Q02-013",
      "question": "ConcurrentHashMap 如何保证并发安全？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **空桶等更新：** 使用 CAS 协调部分并发操作。\n- **冲突桶更新：** 使用 `synchronized` 等机制，不是整张表一把大锁。\n- **读操作：** 配合节点、数组访问等可见性保证，通常不需争抢桶锁。\n- **版本：** JDK 8+ 不应继续套用 JDK 7 的 Segment 分段锁解释。\n\n**注意：** 它不是完全无锁；放进去的可变 `value` 仍需单独保证线程安全。",
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
        "sourceQuestionId": "bank-Q02-013"
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
      "studyOrder": 68
    },
    {
      "id": "bank-Q02-014",
      "number": "Q02-014",
      "question": "ConcurrentHashMap 已经线程安全，为什么先 get 再 put 仍可能出错？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- get 和 put 各自安全，不代表“先 get 再 put”整体安全。\n\n- 需要按旧值更新时，用 merge、compute、replace 或 putIfAbsent 等原子方法。\n\n- 容器只能保护自己的操作，不能自动保护 value 对象内部的修改。\n\n**例子：** 两个线程都读到计数 5，再各自写回 6，结果少加一次。counts.merge(key,1,Integer::sum) 才能对同 key 原子合并。",
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
        "sourceQuestionId": "bank-Q02-014"
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
      "studyOrder": 69
    },
    {
      "id": "bank-Q02-015",
      "number": "Q02-015",
      "question": "HashSet 如何去重？TreeSet 有什么不同？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 容器 | 去重依据 | 顺序 |\n| --- | --- | --- |\n| HashSet | hashCode + equals | 不保证迭代顺序 |\n| TreeSet | 比较器或自然比较结果为 0 | 按排序规则迭代 |\n\n**例子：** `BigDecimal(\"1.0\")` 和 `BigDecimal(\"1.00\")` 在 HashSet 中通常是两个，在自然排序 TreeSet 中是一个。\n\n**注意：** TreeSet 的比较规则最好与 `equals` 一致。",
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
        "sourceQuestionId": "bank-Q02-015"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 70
    },
    {
      "id": "bank-Q02-016",
      "number": "Q02-016",
      "question": "LinkedHashMap 如何保持顺序？如何实现 LRU？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- LinkedHashMap 在 HashMap 上额外维护双向链表，用来记录插入顺序或访问顺序。\n\n- 开启访问顺序后，最近访问的元素会移动。\n\n- 超过容量时删除最久未用的元素，就能实现简单 LRU。\n\n**例子：** 容量 2，先放 A、B，再访问 A，最后放 C；LRU 应淘汰 B，因为它最久没用。这个简单实现仍需另做并发保护。",
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
        "sourceQuestionId": "bank-Q02-016"
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
      "studyOrder": 71
    },
    {
      "id": "bank-Q02-017",
      "number": "Q02-017",
      "question": "TreeMap 的特点和适用场景？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- TreeMap 是按 key 排序的 Map，底层常用红黑树，查找、插入、删除一般是 O(log n)。\n\n- 它适合按键找上下界或查询一个范围。\n\n- 只按 key 精确查询且不要求排序时，HashMap 通常更直接。",
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
        "sourceQuestionId": "bank-Q02-017"
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
      "studyOrder": 72
    },
    {
      "id": "bank-Q02-018",
      "number": "Q02-018",
      "question": "Iterator、增强 for 与 fail-fast 是什么？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **Iterator：** 迭代器，用来依次访问集合元素。\n- **增强 for：** 遍历集合时通常依赖迭代器。\n- **fail-fast：** 发现不符合约定的结构修改时，可能抛出 `ConcurrentModificationException`。\n- **正确删除：** 使用 `Iterator.remove()`，或合适的 `removeIf()`。\n\n**注意：** 单线程边增强 for、边 `list.remove()` 也可能触发；fail-fast 不是线程安全机制。",
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
        "sourceQuestionId": "bank-Q02-018"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 73
    },
    {
      "id": "bank-Q02-019",
      "number": "Q02-019",
      "question": "CopyOnWriteArrayList 的原理与适用范围？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- CopyOnWriteArrayList 是“写时复制，读旧快照”。\n\n- 写入时复制数组、修改新数组，再发布。\n\n- 迭代器继续读创建时拿到的那份数组。\n\n- 适合小集合、读多写少，例如监听器名单。\n\n- 频繁写会产生大量复制和 GC。",
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
        "sourceQuestionId": "bank-Q02-019"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 74
    },
    {
      "id": "bank-Q02-020",
      "number": "Q02-020",
      "question": "Arrays.asList、List.of 和 unmodifiableList 分别能不能修改？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- Arrays.asList 是固定大小列表，可以 set，不能 add/remove，并与原数组关联。\n\n- List.of 返回不可修改且不允许 null 的列表。\n\n- unmodifiableList 只是给原列表套只读视图，别人修改原列表，视图也会变化。\n\n**例子：** Arrays.asList(new int[]{1,2}) 得到的通常是“只有一个 int[] 元素”的列表，不是两个 Integer。",
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
        "sourceQuestionId": "bank-Q02-020"
      },
      "isNew": false,
      "practiceCode": "```java\nString[] array = {\"a\", \"b\"};\nList<String> view = Arrays.asList(array);\nview.set(0, \"x\");  // array[0]也变成x\n// view.add(\"c\"); // UnsupportedOperationException\nList<String> independent = new ArrayList<>(view);\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 75
    },
    {
      "id": "bank-Q02-021",
      "number": "Q02-021",
      "question": "subList 是拷贝还是视图？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- subList 通常是原列表的一段视图，不是独立副本。\n\n- 修改视图会影响关联数据，直接改父列表的结构也可能让视图失效。\n\n- 需要独立处理时，用 new ArrayList<>(list.subList(...)) 复制出来。",
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
        "sourceQuestionId": "bank-Q02-021"
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
      "studyOrder": 76
    },
    {
      "id": "bank-Q02-022",
      "number": "Q02-022",
      "question": "ArrayDeque、Stack、PriorityQueue 怎么选？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- ArrayDeque 适合实现普通栈和双端队列。\n\n- Stack 是较老的栈类。\n\n- PriorityQueue 是优先队列，默认每次取出最小元素。\n\n- PriorityQueue 只保证堆顶优先，不保证直接遍历时整个结果有序。\n\n**例子：** 想从小到大取出全部元素，应反复 poll；不能把 PriorityQueue 的普通 for 遍历当成排序结果。",
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
        "sourceQuestionId": "bank-Q02-022"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 77
    },
    {
      "id": "bank-Q02-023",
      "number": "Q02-023",
      "question": "常见 BlockingQueue 有哪些？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 队列 | 主要特点 |\n| --- | --- |\n| ArrayBlockingQueue | 有界数组队列 |\n| LinkedBlockingQueue | 链表队列，未指定容量时上限很大 |\n| SynchronousQueue | 不存元素，需要生产者与消费者直接交接 |\n\n**方法区别：** `put/take` 可阻塞；`offer/poll` 有立即返回或限时等待版本。\n\n**注意：** “BlockingQueue 会阻塞”要结合调用的方法，不能说所有操作都阻塞。",
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
        "sourceQuestionId": "bank-Q02-023"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 78
    },
    {
      "id": "bank-Q02-024",
      "number": "Q02-024",
      "question": "Comparable 和 Comparator 有什么区别？排序稳定是什么意思？",
      "category": "Java 集合",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "- Comparable 是对象自己定义默认排序规则，Comparator 是外部提供另一套规则。\n\n- 一个员工类可以默认按 ID 排序，也能另传比较器按工资排序。\n\n- 比较整数用 Integer.compare，不要直接相减，以免溢出。\n\n**例子：** Comparator.comparingInt(Employee::getAge) 指定按年龄排序；是否稳定要看所用排序 API，不能概括所有 Java 排序。",
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
        "sourceQuestionId": "bank-Q02-024"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 79
    },
    {
      "id": "bank-UX001",
      "number": "UX001",
      "question": "List<Integer> 的 remove(1) 删除下标还是数值？",
      "category": "Java 集合",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 删除下标 1 的元素，也就是第二个元素。\n\n- **因为 remove 有重载：**remove(int) 按位置删，remove(Object) 按值删。\n\n- 要删除数值 1，写 remove(Integer.valueOf(1))，让编译器选中按值删除的版本。",
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
        "sourceQuestionId": "bank-UX001"
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
      "studyOrder": 80
    },
    {
      "id": "bank-Q03-001",
      "number": "Q03-001",
      "question": "进程、线程、并发、并行分别是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 概念 | 含义 |\n| --- | --- |\n| 进程 | 资源管理与隔离的单位 |\n| 线程 | 进程内的一条执行路径，有自己的调用栈 |\n| 并发 | 多个任务在一段时间内交错推进 |\n| 并行 | 多个任务在同一时刻真正执行 |\n\n**例子：** 一个厨师交替做菜是并发；多个厨师同时做菜是并行。同一进程的线程共享堆等资源。",
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
        "sourceQuestionId": "bank-Q03-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 81
    },
    {
      "id": "bank-Q03-002",
      "number": "Q03-002",
      "question": "创建线程有哪些方式？start 和 run 区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **定义任务：** 可以实现 `Runnable`；有返回值可用 `Callable` 配合 FutureTask 或线程池。\n- **启动执行：** 创建 `Thread` 并调用 `start()`，或把任务交给线程池。\n- **`start()`：** 请求启动新线程，由新线程执行任务。\n- **`run()`：** 直接调用只是当前线程执行普通方法，不会新开线程。\n\n**注意：** 同一个 `Thread` 对象只能 `start()` 一次，结束后也不能再次启动。",
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
        "sourceQuestionId": "bank-Q03-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 82
    },
    {
      "id": "bank-Q03-003",
      "number": "Q03-003",
      "question": "Java 线程有哪些状态？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 状态 | 含义 | 典型情形 |\n| --- | --- | --- |\n| NEW | 新建 | 创建后尚未 start |\n| RUNNABLE | 可运行 | 就绪或正在执行 |\n| BLOCKED | 等待监视器锁 | 竞争 synchronized 未获得锁 |\n| WAITING | 无限期等待 | 无超时的 wait/join 等 |\n| TIMED_WAITING | 限时等待 | sleep、带超时的等待 |\n| TERMINATED | 已结束 | run 执行完毕 |\n\n**注意：** `RUNNABLE` 不代表当时一定在消耗 CPU；状态还要结合线程栈看。",
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
        "sourceQuestionId": "bank-Q03-003"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 83
    },
    {
      "id": "bank-Q03-004",
      "number": "Q03-004",
      "question": "sleep、wait、join、yield 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 方法 | 主要用途 | 要记住的区别 |\n| --- | --- | --- |\n| **`Thread.sleep()`** | 当前线程暂停一段时间 | 不释放已持有的监视器锁 |\n| **`obj.wait()`** | 等待条件变化 | 必须持有 `obj` 的监视器；等待时释放它 |\n| **`t.join()`** | 当前线程等待线程 `t` 结束 | 等的是另一个线程，不是自己睡一会 |\n| **`Thread.yield()`** | 提示调度器让出执行机会 | 只是建议，可能被忽略 |\n\n**记住：** sleep 睡一会，wait 等条件，join 等结束，yield 让机会。\n\n**注意：** `wait()` 只释放对应对象的监视器，返回前要重新拿锁；等待条件用 `while` 检查。不能用 `sleep()` 代替线程同步。",
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
        "sourceQuestionId": "bank-Q03-004"
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
      "studyOrder": 84
    },
    {
      "id": "bank-Q03-007",
      "number": "Q03-007",
      "question": "JMM 是什么？原子性、可见性、有序性分别解决什么问题？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "**JMM（Java 内存模型）规定多线程读写共享变量时的可见性和执行顺序规则。**\n\n| 特性 | 含义 | 典型问题 |\n| --- | --- | --- |\n| 原子性 | 操作不能被其他线程观察为只完成了一部分 | `i++` 的读、改、写发生竞争 |\n| 可见性 | 一个线程的修改按同步规则被另一个线程看到 | 修改停止标记，工作线程仍看不到 |\n| 有序性 | 必要的先后关系不被重排破坏 | 引用已被观察到，初始化结果却没正确发布 |\n\n**注意：** JMM 是并发读写规则，不是 JVM 的堆、栈内存分区。",
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
        "sourceQuestionId": "bank-Q03-007"
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
      "studyOrder": 85
    },
    {
      "id": "bank-Q03-009",
      "number": "Q03-009",
      "question": "volatile 能解决什么，不能解决什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **保证可见性：** 对变量的写入能通过相应同步规则被后续读取看到。\n- **约束重排：** 保证相关操作的必要顺序。\n- **不提供互斥：** 不会让一整段代码只由一个线程执行。\n- **不保证复合操作原子：** `volatile int count` 的 `count++` 仍可能丢更新。\n\n**场景：** 停止标志、状态发布；计数自增用原子类或锁。",
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
        "sourceQuestionId": "bank-Q03-009"
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
      "studyOrder": 86
    },
    {
      "id": "bank-Q03-010",
      "number": "Q03-010",
      "question": "synchronized 锁的是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**`synchronized` 通过同一把监视器锁实现互斥，并提供相应可见性保证。**\n\n| 写法 | 锁的对象 |\n| --- | --- |\n| 实例同步方法 | 当前对象 `this` |\n| 静态同步方法 | 对应的 `Class` 对象 |\n| `synchronized(lock)` | 括号中的 `lock` 对象 |\n\n**记住：** 只有竞争同一把锁才互斥；退出同步区域会自动释放锁，包括异常退出。",
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
        "sourceQuestionId": "bank-Q03-010"
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
      "studyOrder": 87
    },
    {
      "id": "bank-Q03-013",
      "number": "Q03-013",
      "question": "CAS 是什么？ABA 问题怎么处理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **CAS：** 比较并交换；当前值等于预期值才原子更新，否则失败。\n- **常见用法：** 更新失败后重新读取，再按条件重试。\n- **ABA：** A 变成 B 又变回 A，只比较值看不出中间变化。\n- **处理：** 需要识别变化时，把版本号或戳与值一起比较。\n\n**注意：** 高竞争下反复重试会消耗 CPU；CAS 不自动保证多个变量组成的业务规则。",
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
        "sourceQuestionId": "bank-Q03-013"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 88
    },
    {
      "id": "bank-Q03-017",
      "number": "Q03-017",
      "question": "死锁的条件和解决办法？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**死锁：多个线程互相等待对方持有的资源，谁都无法继续。**\n\n- **四个必要条件：** 互斥、持有并等待、不可剥夺、循环等待。\n- **预防：** 统一拿锁顺序；缩短持锁时间；避免持锁执行慢远程调用。\n- **处理：** 必要时使用超时获取锁并回退；结合线程转储定位等待关系。\n\n**例子：** A 拿锁 1 等锁 2，B 拿锁 2 等锁 1。",
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
        "sourceQuestionId": "bank-Q03-017"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 89
    },
    {
      "id": "bank-Q03-022",
      "number": "Q03-022",
      "question": "线程池七个参数是什么？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 参数 | 含义 |\n| --- | --- |\n| `corePoolSize` | 核心线程数 |\n| `maximumPoolSize` | 最大线程数 |\n| `keepAliveTime` | 空闲线程的回收等待时间 |\n| `unit` | 时间单位 |\n| `workQueue` | 等待任务的队列 |\n| `threadFactory` | 线程创建规则，例如名称 |\n| `handler` | 任务无法接收时的拒绝策略 |\n\n**记住：** 两个数量、两个时间、一个队列、一个工厂、一个拒绝策略。核心线程默认不因普通空闲超时回收。",
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
        "sourceQuestionId": "bank-Q03-022"
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
      "studyOrder": 90
    },
    {
      "id": "bank-Q03-038",
      "number": "Q03-038",
      "question": "synchronized 和 volatile 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | synchronized | volatile |\n| --- | --- | --- |\n| 本质 | 监视器锁机制 | 字段修饰符 |\n| 作用范围 | 方法或代码块 | 变量读写 |\n| 可见性 | 有相应保证 | 有相应保证 |\n| 互斥 | 同一把锁下互斥执行 | 不提供互斥 |\n| 复合原子性 | 正确保护整段操作时可保证 | 不能保证 count++ 原子性 |\n| 常用场景 | 多步骤共享状态修改 | 停止标记、状态发布 |\n\n**记住：** volatile 让修改按规则“被看见”；synchronized 还能让操作“排着做”。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 91
    },
    {
      "id": "bank-Q03-039",
      "number": "Q03-039",
      "question": "线程池是什么？为什么要使用线程池？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**线程池管理一组工作线程，让多个任务复用线程执行。**\n\n- **减少开销：** 避免每个任务都创建、销毁线程。\n- **控制资源：** 限制并发线程数，避免无限创建。\n- **统一管理：** 管理排队、拒绝、关闭和运行指标。\n\n**注意：** 线程池和队列都需要容量边界；线程越多不一定越快。",
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
        "reviewedOn": null
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
      "studyOrder": 92
    },
    {
      "id": "bank-Q03-040",
      "number": "Q03-040",
      "question": "Runnable 和 Callable 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | `Runnable` | `Callable<V>` |\n| --- | --- | --- |\n| 核心方法 | run() | call() |\n| 返回值 | void | 返回 V |\n| 受检异常 | run 不声明受检异常 | call 可声明异常 |\n| 执行方式 | Thread 或线程池 | 常配合 FutureTask 或线程池 |\n\n**记住：** 无返回值常用 Runnable，有结果常用 Callable。",
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
        "reviewedOn": null
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
      "studyOrder": 93
    },
    {
      "id": "bank-Q03-041",
      "number": "Q03-041",
      "question": "什么是共享变量？什么情况下需要考虑线程安全？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **共享变量：** 可以被多个线程访问的同一份数据。\n- **风险组合：** 多线程 + 共享数据 + 可变状态。\n- **常见问题：** 丢失更新、读到旧值、多个字段组合状态不一致。\n- **处理方式：** 不共享、使用不可变对象、正确加锁或原子操作。\n\n**例子：** 两个线程都读到库存 1，再分别扣减，会产生竞态，必须保护完整判断和更新。",
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
        "reviewedOn": null
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
      "studyOrder": 94
    },
    {
      "id": "bank-Q03-042",
      "number": "Q03-042",
      "question": "什么是可重入锁？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**可重入：同一线程已经持有某把锁时，可以再次获取这把锁。**\n\n- **典型支持：** synchronized 和 ReentrantLock。\n- **意义：** 同一线程调用另一个使用同一锁的方法，不会因为自己持锁而把自己卡住。\n- **释放规则：** 显式锁重入几次，通常就需要对应释放几次。\n\n**注意：** 可重入不能防止多线程之间按不同顺序拿多把锁造成死锁。",
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
        "reviewedOn": null
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
      "studyOrder": 95
    },
    {
      "id": "bank-Q03-044",
      "number": "Q03-044",
      "question": "notify 和 notifyAll 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **notify：** 从该对象等待集里选择一个等待线程进行通知。\n- **notifyAll：** 通知该对象等待集中的所有线程。\n- **前提：** 调用方必须持有同一个对象的监视器锁。\n- **唤醒后：** 等待线程仍需重新竞争锁，并在 while 中检查条件。\n\n**注意：** 通知不等于立即把锁交出去，也不保证被通知线程立刻运行。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 96
    },
    {
      "id": "bank-JX005",
      "number": "JX005",
      "question": "newFixedThreadPool 和 newCachedThreadPool 各有什么容量风险？",
      "answer": "- newFixedThreadPool 限了线程数，但默认队列可能积压大量任务。\n\n- newCachedThreadPool 直接交接任务，允许线程数量增长得很大。\n\n- 前者容易堆任务，后者容易堆线程。\n\n- 需要显式规划并发、队列和拒绝策略。",
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
        "sourceQuestionId": "bank-JX005"
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
      "studyOrder": 97
    },
    {
      "id": "bank-Q03-005",
      "number": "Q03-005",
      "question": "如何正确停止线程？interrupt 会强制终止吗？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- interrupt 不是强制杀线程，而是发出“请停止”的信号。\n\n- 线程要在循环中检查中断，或响应可中断阻塞方法抛出的异常，再结束工作并释放资源。\n\n- 捕获 InterruptedException 后不能无条件忽略。\n\n**例子：** isInterrupted() 只查看标志；Thread.interrupted() 查看当前线程标志后还会清除它。远程请求仍需配置自身超时。",
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
        "sourceQuestionId": "bank-Q03-005"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 98
    },
    {
      "id": "bank-Q03-006",
      "number": "Q03-006",
      "question": "什么叫线程安全？加锁要保护一个字段还是一整段操作？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- 线程安全就是多个线程一起访问时，业务结果仍然正确。\n\n- 重点保护共享的可变数据和完整业务规则，可以用不共享、不可变、锁或原子操作。\n\n- 不是每个变量都换成原子类，就能保证整个流程安全。\n\n**例子：** 账户 A 扣钱和账户 B 加钱必须一起正确；只把两个余额各自变成 AtomicInteger，并不能保证一笔转账整体成功。",
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
        "sourceQuestionId": "bank-Q03-006"
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
      "studyOrder": 99
    },
    {
      "id": "bank-Q03-008",
      "number": "Q03-008",
      "question": "happens-before 有哪些常见规则？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- happens-before 可以理解为“前面的操作，对后面的操作具有可见性和顺序保证”。\n\n- **常见关系是：**同线程先后顺序、解锁到后续加同一把锁、volatile 写到后续读、start 前到新线程、线程结束到 join 返回，以及这些关系的传递。\n\n**例子：** 线程 A 在同一把锁内改数据并解锁，线程 B 随后加这把锁，就能依赖相应可见性保证；双方各睡一秒没有这种保证。",
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
        "sourceQuestionId": "bank-Q03-008"
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
      "studyOrder": 100
    },
    {
      "id": "bank-Q03-011",
      "number": "Q03-011",
      "question": "synchronized 的底层和锁优化怎么说？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- synchronized 的语义基础是对象监视器：进入时获取锁，退出时释放锁。\n\n- 同步块常对应 monitorenter/monitorexit，同步方法用标记表示。\n\n- JVM 会按版本做轻量级锁、锁消除等优化，不要把旧的“偏向锁一路升级”当成所有版本的固定流程。",
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
        "sourceQuestionId": "bank-Q03-011"
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
      "studyOrder": 101
    },
    {
      "id": "bank-Q03-012",
      "number": "Q03-012",
      "question": "synchronized 与 ReentrantLock 如何选择？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 对比项 | synchronized | ReentrantLock |\n| --- | --- | --- |\n| 类型 | Java 关键字 | JUC 锁类 |\n| 释放 | 退出同步区域自动释放 | 成功加锁后在 finally 中 unlock |\n| 共同能力 | 互斥、可重入、可见性 | 互斥、可重入、可见性 |\n| 额外能力 | 写法简单 | tryLock、超时、可中断等待、公平策略、多个 Condition |\n\n**选择：** 普通互斥可先用 `synchronized`；确实需要超时等能力时使用显式锁。",
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
        "sourceQuestionId": "bank-Q03-012"
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
      "studyOrder": 102
    },
    {
      "id": "bank-Q03-014",
      "number": "Q03-014",
      "question": "AtomicInteger 和 LongAdder 的区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "- AtomicInteger 围绕一个值做原子更新，适合需要精确单次结果的计数或序号。\n\n- LongAdder 把高并发更新分散到多个格子，最后求和，适合统计。\n\n- 它并发求和不是严格瞬时快照，不适合直接控制库存。\n\n**例子：** 统计一秒收到多少请求，可考虑 LongAdder；决定“还剩一件商品，谁能买到”，不能只看 LongAdder.sum()。",
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
        "sourceQuestionId": "bank-Q03-014"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 103
    },
    {
      "id": "bank-Q03-015",
      "number": "Q03-015",
      "question": "AQS 是锁吗？它怎样管理状态、排队和唤醒？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **AQS：** 实现锁和同步器的基础框架，不是一把具体锁。\n- **核心组成：** 同步状态 `state` + 等待队列。\n- **职责分工：** 子类定义如何获取/释放资源；AQS 协调排队、阻塞、唤醒。\n- **常见实现：** ReentrantLock、Semaphore、CountDownLatch。\n\n**例子：** state 在锁中可表示重入次数，在信号量中可表示许可数量。",
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
        "sourceQuestionId": "bank-Q03-015"
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
      "studyOrder": 104
    },
    {
      "id": "bank-Q03-016",
      "number": "Q03-016",
      "question": "Condition 与 wait/notify 有什么联系？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Condition 是和 Lock 配套的“等待条件”。\n\n- 条件不满足就 await，释放关联锁并等待。\n\n- 状态改变后 signal 通知。\n\n- 被唤醒不代表条件一定还成立，所以必须用 while 重新判断，再继续执行。\n\n**例子：** 队列为空时消费者 await；生产者放入数据后 signal。消费者醒来可能发现数据已被别人取走，因此不能只用 if 检查一次。",
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
        "sourceQuestionId": "bank-Q03-016"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 105
    },
    {
      "id": "bank-Q03-019",
      "number": "Q03-019",
      "question": "CountDownLatch、CyclicBarrier、Semaphore 怎么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 工具 | 主要用途 | 特点 |\n| --- | --- | --- |\n| CountDownLatch | 等若干任务完成 | 计数归零后放行，通常一次性 |\n| CyclicBarrier | 若干线程到齐再一起继续 | 可以分轮复用 |\n| Semaphore | 限制同时访问资源的任务数 | 获取许可后必须可靠释放 |\n\n**记住：** Latch 等完成，Barrier 等到齐，Semaphore 控数量。",
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
        "sourceQuestionId": "bank-Q03-019"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 106
    },
    {
      "id": "bank-Q03-020",
      "number": "Q03-020",
      "question": "ThreadLocal 怎样隔离线程数据？为什么在线程池里要清理？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **作用：** 为每个线程提供独立的数据槽位，常保存用户上下文、traceId 等。\n- **原理：** 数据放在当前线程的 ThreadLocalMap 中，以 ThreadLocal 为键。\n- **风险：** 线程池复用线程，旧值可能串到下一个任务；长期持有 value 也可能造成内存问题。\n- **处理：** 不再使用时，在 `finally` 中 `remove()`；嵌套上下文需考虑恢复旧值。\n\n**注意：** 存入同一个可变对象不等于复制出独立对象，也不自动变得线程安全。",
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
        "sourceQuestionId": "bank-Q03-020"
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
      "studyOrder": 107
    },
    {
      "id": "bank-Q03-023",
      "number": "Q03-023",
      "question": "ThreadPoolExecutor 提交任务的执行流程？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**核心线程 → 任务队列 → 最大线程 → 拒绝策略。**\n\n1. 工作线程数小于核心数：**创建线程**执行任务。\n2. 已到核心数：尝试**加入队列**。\n3. 队列满且未到最大数：**继续创建线程**。\n4. 仍无法接收：执行**拒绝策略**。\n\n**例子：** core=2、max=4、队列=3，任务未完成时，先执行 2 个、排队 3 个，再新增最多 2 个工作线程。\n\n**注意：** 关闭等池状态还会影响接收；不是先开到最大数再排队。",
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
        "sourceQuestionId": "bank-Q03-023"
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
      "studyOrder": 108
    },
    {
      "id": "bank-Q03-024",
      "number": "Q03-024",
      "question": "线程池拒绝策略有哪些？怎么选？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 策略 | 行为 |\n| --- | --- |\n| AbortPolicy | 抛出拒绝异常，默认策略 |\n| CallerRunsPolicy | 池未关闭时，由提交线程执行 |\n| DiscardPolicy | 直接丢弃新任务 |\n| DiscardOldestPolicy | 丢弃队头后再尝试提交新任务 |\n\n**注意：** 重要业务不能静默丢弃；CallerRuns 可能阻塞请求线程或事件循环；池关闭时也不会帮你执行任务。",
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
        "sourceQuestionId": "bank-Q03-024"
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
      "studyOrder": 109
    },
    {
      "id": "bank-Q03-025",
      "number": "Q03-025",
      "question": "线程池大小如何设置？为什么不能只套 CPU×2？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先分 CPU 密集还是 IO 等待多，再看 CPU 配额、数据库连接数和下游限额，用压测调整线程数。\n\n- CPU 密集任务通常从可用核心数附近起步。\n\n- IO 密集可适当多开，但不能无限开。\n\n- 公式只是估算起点，不是最终配置。\n\n**例子：** 每秒 100 个请求、每个平均占用线程 0.2 秒，平均约有 20 个在途任务；还需考虑峰值、排队和下游容量。",
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
        "sourceQuestionId": "bank-Q03-025"
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
      "studyOrder": 110
    },
    {
      "id": "bank-Q03-026",
      "number": "Q03-026",
      "question": "execute、submit 和 Future 异常处理有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "| 对比项 | execute | submit |\n| --- | --- | --- |\n| 参数 | Runnable | Runnable 或 Callable |\n| 返回值 | 无 Future | 返回 Future |\n| 任务异常 | 通常进入工作线程未捕获异常处理 | 保存在 Future，get 时暴露 |\n\n**注意：** 忽略 Future 可能漏掉异常；`get()` 会等待，必要时设置超时。",
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
        "sourceQuestionId": "bank-Q03-026"
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
      "studyOrder": 111
    },
    {
      "id": "bank-Q03-027",
      "number": "Q03-027",
      "question": "shutdown 与 shutdownNow 有什么区别？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- shutdown 是“停止收新任务，把已接收的做完”。\n\n- shutdownNow 是“尝试中断正在做的，并返回没开始的”。\n\n- 后者不是强制杀死线程，任务不响应中断时仍可能继续。\n\n- 优雅关闭应先停接流量，再等待任务，最后释放资源。",
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
        "sourceQuestionId": "bank-Q03-027"
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
      "studyOrder": 112
    },
    {
      "id": "bank-Q03-029",
      "number": "Q03-029",
      "question": "CompletableFuture 怎样编排并行调用？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- CompletableFuture 用来组织异步任务的依赖关系。\n\n- thenApply 转换结果，thenCompose 接上另一个异步任务，thenCombine 合并两个结果，allOf 等全部完成。\n\n- 独立调用才适合并行，阻塞 IO 通常要指定合适的独立执行器。\n\n**例子：** 用户信息和积分互不依赖，可以同时查询后合并；必须先拿到订单号才能查物流，就不是直接并行的关系。",
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
        "sourceQuestionId": "bank-Q03-029"
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
      "studyOrder": 113
    },
    {
      "id": "bank-Q03-032",
      "number": "Q03-032",
      "question": "什么是安全发布？双重检查单例为什么用 volatile？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- 安全发布是让另一个线程看到对象引用时，也能看到正确初始化的对象状态。\n\n- 双重检查单例第一次读引用不加锁，因此实例字段需要 volatile，建立必要的发布保证。\n\n- 仅把构造器设成 private，只解决外部不能随便 new。\n\n**例子：** 不能出现“另一个线程已经拿到对象引用，却看到对象内部仍是未完成初始化的状态”。静态内部类也可利用类初始化保证构造发布。",
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
        "sourceQuestionId": "bank-Q03-032"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 114
    },
    {
      "id": "bank-Q03-033",
      "number": "Q03-033",
      "question": "虚拟线程是什么？该不该池化？",
      "category": "多线程 / 并发",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "- 虚拟线程是由 JDK 调度的轻量线程，Java 21 正式引入，主要适合大量等待 IO 的任务。\n\n- 通常一个任务一个虚拟线程，不是建池反复复用。\n\n- 它能降低线程成本，但数据库连接数和下游容量仍要限制。",
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
        "sourceQuestionId": "bank-Q03-033"
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
      "studyOrder": 115
    },
    {
      "id": "bank-Q03-035",
      "number": "Q03-035",
      "question": "怎样让两个线程交替输出，或实现生产者消费者？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 交替输出先定义“现在轮到谁”，用同一把锁保护检查和修改。\n\n- 不轮到自己就 while 等待，输出后切换状态并通知另一方。\n\n- 还要设计结束和中断条件。\n\n- 生产者消费者通常直接用 BlockingQueue 更稳妥。\n\n**例子：** 只让 A sleep(100)、B sleep(200) 不能保证 A、B 交替，因为线程什么时候真正运行由调度决定。",
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
        "sourceQuestionId": "bank-Q03-035"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 116
    },
    {
      "id": "bank-Q03-043",
      "number": "Q03-043",
      "question": "sleep 和 wait 都能让线程等待，为什么不能互相替代？",
      "category": "多线程 / 并发",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **sleep：** 让当前线程暂停一定时间，不释放监视器锁。\n- **wait：** 在持有指定对象监视器时调用，释放该监视器并等待；返回前重新获取。\n- **目的不同：** sleep 主要是时间等待；wait 用于条件协作。\n\n**例子：** 消费者等队列有数据，需要检查条件并等待通知，不能只睡一秒就假设数据准备好了。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 117
    },
    {
      "id": "bank-RM005",
      "number": "RM005",
      "question": "守护线程和普通线程有什么区别？",
      "answer": "- 主要区别是会不会阻止 JVM 正常开始退出。\n\n- 当已启动的非守护线程都结束，JVM 可以进入关闭流程，不会为了守护线程的业务继续等下去。\n\n- 守护线程不是优先级更低，也不是自动负责垃圾回收。\n\n**例子：** 后台统计任务可以考虑守护线程；重要文件写入、订单投递不能仅靠守护线程“应该会执行完”。要有等待退出或持久化保障。",
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
        "sourceQuestionId": "bank-RM005"
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
      "studyOrder": 118
    },
    {
      "id": "bank-Q04-001",
      "number": "Q04-001",
      "question": "JVM 运行时内存区域有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 区域 | 是否线程共享 | 主要内容 |\n| --- | --- | --- |\n| 堆 | 共享 | 对象和数组 |\n| 方法区 | 共享 | 类相关元数据；运行时常量池属于其中 |\n| 虚拟机栈 | 私有 | Java 方法的栈帧 |\n| 本地方法栈 | 私有 | 本地方法调用相关状态 |\n| 程序计数器 | 私有 | 当前线程执行位置相关信息 |\n\n**注意：** 元空间是 HotSpot 的实现相关概念；JMM 讨论并发规则，不是这些内存区域。",
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
        "sourceQuestionId": "bank-Q04-001"
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
      "studyOrder": 119
    },
    {
      "id": "bank-Q04-007",
      "number": "Q04-007",
      "question": "如何判断对象可以被回收？GC Roots 有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **主要方法：** 可达性分析，从 GC Roots 沿引用关系查找对象。\n- **可达对象：** 通常需要保留。\n- **不可达对象：** 可进入垃圾回收判定，不代表马上释放内存。\n- **常见根：** 活跃线程栈中的引用、类相关静态引用、JNI 引用等。\n\n**例子：** A 与 B 互相引用，但从任何根都到不了它们，仍可能一起被回收。",
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
        "sourceQuestionId": "bank-Q04-007"
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
      "studyOrder": 120
    },
    {
      "id": "bank-Q04-018",
      "number": "Q04-018",
      "question": "双亲委派模型是什么？可以打破吗？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**双亲委派：加载类时，通常先委托父加载器，父加载器找不到再由自己尝试。**\n\n1. 先检查是否已经加载。\n2. 未加载则向父加载器委托。\n3. 父加载器无法完成时，当前加载器尝试加载。\n\n**作用：** 复用基础类，减少重复加载和类型冲突。\n\n**注意：** “双亲”是委托关系，不是类继承；自定义加载器可以调整策略。",
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
        "sourceQuestionId": "bank-Q04-018"
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
      "studyOrder": 121
    },
    {
      "id": "bank-Q04-033",
      "number": "Q04-033",
      "question": "JVM 是什么？垃圾回收 GC 又是什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **JVM：** Java 虚拟机，负责执行字节码并提供运行时管理能力。\n- **GC：** 垃圾回收，识别并回收符合条件的、不再需要保留的对象内存。\n- **关系：** GC 是 JVM 内存管理的一部分，不是 JVM 的全部功能。\n\n**注意：** GC 不代表文件、连接等外部资源一定及时关闭，仍需显式管理。",
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
        "reviewedOn": null
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
      "studyOrder": 122
    },
    {
      "id": "bank-Q04-034",
      "number": "Q04-034",
      "question": "堆和栈有什么区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | 堆 | Java 虚拟机栈 |\n| --- | --- | --- |\n| 主要保存 | 对象与数组 | 方法调用的栈帧 |\n| 共享情况 | 线程共享 | 线程私有 |\n| 典型管理 | 对象分配与垃圾回收 | 随方法调用入栈、结束出栈 |\n| 常见错误 | 堆内存不足导致 OOM | 调用过深导致 StackOverflowError |\n\n**注意：** 栈里的局部变量可能保存对象引用，但对象本体通常不因此在栈中。",
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
        "reviewedOn": null
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
      "studyOrder": 123
    },
    {
      "id": "bank-Q04-002",
      "number": "Q04-002",
      "question": "堆、栈、方法区各存什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 堆主要放对象和数组，栈帧放方法的局部变量、操作中间值和返回信息，方法区放类元数据等。\n\n- 局部变量保存对象引用，不等于对象本体就在栈上。\n\n- 先分清“变量里的引用”和“被引用的对象”。\n\n**例子：** void f(){ User u = new User(); } 中，u 是局部引用；new 出来的 User 按通常执行模型在堆上。JIT 还可能优化掉分配。",
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
        "sourceQuestionId": "bank-Q04-002"
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
      "studyOrder": 124
    },
    {
      "id": "bank-Q04-003",
      "number": "Q04-003",
      "question": "一个对象从 new 到可用经历什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **new 对象可以按五步记：**确认类可用、分配内存、赋默认值、设置对象头、执行实例初始化和构造器。\n\n- 分配空间与构造器赋业务值是不同步骤。\n\n- TLAB 等机制用来减少多个线程分配对象时的竞争。",
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
        "sourceQuestionId": "bank-Q04-003"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 125
    },
    {
      "id": "bank-Q04-008",
      "number": "Q04-008",
      "question": "强、软、弱、虚引用的区别？",
      "category": "JVM",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "| 引用 | 主要特点 |\n| --- | --- |\n| 强引用 | 正常强可达时，阻止对象被回收 |\n| 软引用 | 内存敏感，可能在内存紧张时被回收 |\n| 弱引用 | 弱可达性判定时可被清理 |\n| 虚引用 | get 返回 null，配合引用队列跟踪回收相关通知 |\n\n**注意：** 回收时机不能当精确定时器；弱引用也不代表业务状态能即时失效。",
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
        "sourceQuestionId": "bank-Q04-008"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 126
    },
    {
      "id": "bank-Q04-009",
      "number": "Q04-009",
      "question": "常见 GC 算法及各自代价？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 算法 | 做法 | 主要代价 |\n| --- | --- | --- |\n| 标记清除 | 标记存活对象，清理垃圾 | 可能产生碎片 |\n| 复制 | 将存活对象复制到另一块区域 | 需要额外空间 |\n| 标记整理 | 标记后移动存活对象，使其紧凑 | 移动对象有成本 |\n\n**记住：** 清除有碎片，复制要空间，整理要移动；具体收集器可以组合这些思路。",
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
        "sourceQuestionId": "bank-Q04-009"
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
      "studyOrder": 127
    },
    {
      "id": "bank-Q04-010",
      "number": "Q04-010",
      "question": "分代回收依据是什么？对象何时晋升？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **分代回收基于一个现象：**多数对象很快不用，少数对象会活很久。\n\n- 所以把不同寿命对象分开处理。\n\n- 对象晋升与年龄、Survivor 空间和收集器策略有关，不是所有对象都必须经历 15 次 GC。\n\n**例子：** 接口里临时拼接的对象常很快消失；长期缓存里的对象可能一直存活。两类对象用同样频率扫描不一定划算。",
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
        "sourceQuestionId": "bank-Q04-010"
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
      "studyOrder": 128
    },
    {
      "id": "bank-Q04-011",
      "number": "Q04-011",
      "question": "Minor GC、Major GC、Full GC、Mixed GC 怎么区分？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- Young/Minor GC 通常收年轻代。\n\n- Full GC 通常涉及全堆等更大范围。\n\n- G1 的 Mixed GC 收年轻代加选中的老年代 Region。\n\n- Major GC 在不同资料里叫法不统一，面试和排障最好按具体收集器日志说清楚。",
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
        "sourceQuestionId": "bank-Q04-011"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 129
    },
    {
      "id": "bank-Q04-014",
      "number": "Q04-014",
      "question": "G1 的核心思路是什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- G1 把堆分成很多 Region，根据回收收益和暂停目标选择部分区域处理。\n\n- 它保留分代思想，用复制整理存活对象减少碎片，并通过记忆集记录跨区引用。\n\n- 暂停时间是优化目标，不是承诺绝不超时。\n\n**例子：** 像把仓库分成小区，优先清理垃圾多、清理收益高的小区，而不是每次都把整个仓库翻一遍。",
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
        "sourceQuestionId": "bank-Q04-014"
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
      "studyOrder": 130
    },
    {
      "id": "bank-Q04-017",
      "number": "Q04-017",
      "question": "类加载、验证、准备、解析、初始化分别做什么？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 类加载记为“加载、连接、初始化”。\n\n- 连接再分“验证、准备、解析”。\n\n- 加载读入类，验证检查合法性，准备设置必要静态存储和初值，解析处理符号引用，初始化执行静态字段赋值和静态代码块。\n\n**例子：** static int x = 10：普通情况下准备阶段先得到默认值 0，初始化阶段再执行赋 10。编译期常量有专门规则。",
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
        "sourceQuestionId": "bank-Q04-017"
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
      "studyOrder": 131
    },
    {
      "id": "bank-Q04-020",
      "number": "Q04-020",
      "question": "Class.forName、loadClass 和类初始化触发条件？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Class.forName(String) 默认会触发类初始化。\n\n- ClassLoader.loadClass 通常只加载，不主动初始化。\n\n- new、调用类声明的静态方法、访问非编译期常量的静态字段等会涉及初始化。\n\n- 类加载完成，不等于类初始化已经完成。\n\n**例子：** 读取 static final int N=10 这种编译期常量，值可能已编进使用方，不一定触发定义类的初始化。",
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
        "sourceQuestionId": "bank-Q04-020"
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
      "studyOrder": 132
    },
    {
      "id": "bank-Q04-021",
      "number": "Q04-021",
      "question": "OOM 与 StackOverflowError 怎么定位？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- StackOverflowError 重点查调用栈是否过深，例如无限递归。\n\n- OutOfMemoryError 要先看缺哪类内存：堆、元空间、直接内存，还是本地线程资源。\n\n- 容器还可能直接 OOMKill，没有机会输出 Java 异常。\n\n**例子：** 堆还剩空间却无法创建线程，可能是线程栈、本地内存或系统线程限额耗尽，不应只增加 Xmx。",
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
        "sourceQuestionId": "bank-Q04-021"
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
      "studyOrder": 133
    },
    {
      "id": "bank-Q04-022",
      "number": "Q04-022",
      "question": "内存泄漏与内存溢出的区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 内存泄漏是“不再需要的对象仍被引用，回收不了”。\n\n- 内存溢出是“申请内存时已经不够”。\n\n- 泄漏可能导致溢出，但一次性加载太多数据也能直接溢出。\n\n- 定位泄漏要找是谁长期持有这些对象。\n\n**例子：** 缓存从不删除旧用户，会逐渐泄漏；一次把几百万行读进 List，可能没有长期泄漏也会 OOM。",
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
        "sourceQuestionId": "bank-Q04-022"
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
      "studyOrder": 134
    },
    {
      "id": "bank-Q04-023",
      "number": "Q04-023",
      "question": "CPU 飙高如何从进程定位到 Java 代码？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先用 top 等找高 CPU 的进程，再用 top -H -p PID 找热点线程，把线程 ID 转为十六进制，与 jstack/jcmd 里的 nid 对上。\n\n- 连续采样确认它是在死循环、GC、正则还是正常计算，最后定位到代码和输入。\n\n**例子：** 一份线程栈只是瞬间照片；同一线程连续多次停在相同热点，再结合 CPU 数据，判断才更可靠。",
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
        "sourceQuestionId": "bank-Q04-023"
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
      "studyOrder": 135
    },
    {
      "id": "bank-Q04-024",
      "number": "Q04-024",
      "question": "常用 JVM 工具有哪些？",
      "category": "JVM",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- jcmd 看 JVM 信息、线程和诊断命令。\n\n- jstack 看线程栈。\n\n- jstat 看部分运行指标。\n\n- JFR 记录运行事件。\n\n- 堆 dump 配合 MAT 查对象是谁持有。\n\n- 先用轻量信息缩小范围，再决定是否采集成本更高的 dump。",
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
        "sourceQuestionId": "bank-Q04-024"
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
      "studyOrder": 136
    },
    {
      "id": "bank-Q04-025",
      "number": "Q04-025",
      "question": "JVM 调优的正确步骤？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- JVM 调优先定目标、测基线、找瓶颈，再改代码或参数，最后在相同负载下验证。\n\n- 优先减少无意义对象、无限队列和长期引用，再考虑堆大小及收集器。\n\n- 容器内存不能全给 Xmx，要给堆外内存留余量。",
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
        "sourceQuestionId": "bank-Q04-025"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 137
    },
    {
      "id": "bank-Q04-026",
      "number": "Q04-026",
      "question": "解释执行、JIT、AOT 有什么区别？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 解释器按字节码执行。\n\n- JIT 在运行中发现热点后，把它编译成机器码。\n\n- AOT 提前编译。\n\n- JIT 能结合实际运行情况优化，但需要预热。\n\n- AOT 可改善某些启动场景，但动态能力和部署约束要单独考虑。",
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
        "sourceQuestionId": "bank-Q04-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 138
    },
    {
      "id": "bank-Q04-028",
      "number": "Q04-028",
      "question": "频繁 Young GC 和频繁 Full GC 分别如何排查？",
      "category": "JVM",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- Young GC 频繁，先查对象分配太快、临时对象过多和年轻代空间。\n\n- Full GC 频繁，再查长期存活对象、晋升、元空间和收集器回退。\n\n- 要看 GC 后还剩多少、暂停多久、是否影响接口，不是只看次数。\n\n**例子：** Young GC 很多但每次很短、吞吐正常，不一定需要调；Full GC 后堆仍越来越高，更值得查持有链或容量问题。",
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
        "sourceQuestionId": "bank-Q04-028"
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
      "studyOrder": 139
    },
    {
      "id": "bank-Q05-001",
      "number": "Q05-001",
      "question": "Spring、Spring MVC、Spring Boot 的关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 框架 | 定位 | 记忆点 |\n| --- | --- | --- |\n| Spring | 提供 IoC、AOP、事务等基础能力 | 基础框架 |\n| Spring MVC | Spring 中处理 Web 请求的框架 | 接请求、调方法、写响应 |\n| Spring Boot | 简化 Spring 应用的配置和启动 | 自动配置、Starter、运行支持 |\n\n**记住：** Boot 没有替代 Spring，MVC 也不是 Boot 的另一种叫法。",
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
        "sourceQuestionId": "bank-Q05-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 140
    },
    {
      "id": "bank-Q05-002",
      "number": "Q05-002",
      "question": "IoC 和 DI 是什么？为什么不直接 new？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **IoC（控制反转）：** 把对象创建、管理和依赖组织交给容器。\n- **DI（依赖注入）：** 容器把对象需要的依赖通过构造器等方式传进去。\n- **关系：** DI 是实现 IoC 的常见方式。\n- **好处：** 降低实现耦合，方便替换依赖和单元测试。\n\n**例子：** OrderService 接收 PayService，而不是在内部写死某个支付实现。\n\n**注意：** 普通数据对象仍可 `new`；需要容器生命周期或代理的服务由容器管理。",
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
        "sourceQuestionId": "bank-Q05-002"
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
      "studyOrder": 141
    },
    {
      "id": "bank-Q05-004",
      "number": "Q05-004",
      "question": "Bean 注册方式有哪些？@Component 与 @Bean 怎么选？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 方式 | 放置位置 | 常见用途 |\n| --- | --- | --- |\n| @Component / @Service 等 | 类上 | 扫描注册自己编写的业务类 |\n| @Bean | 配置类的方法上 | 把返回的对象注册为 Bean，适合第三方类或定制创建 |\n\n**记住：** 自己的类常用组件扫描；创建过程需要控制时用 `@Bean`。\n\n**例子：** 自己写的 UserService 用 `@Service`；配置第三方客户端常用 `@Bean`。",
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
        "sourceQuestionId": "bank-Q05-004"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 142
    },
    {
      "id": "bank-Q05-007",
      "number": "Q05-007",
      "question": "Bean 的作用域有哪些？单例是否线程安全？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 作用域 | 含义 |\n| --- | --- |\n| singleton（默认） | 同一容器内，一个 Bean 定义通常对应一个实例 |\n| prototype | 每次向容器请求时创建实例 |\n| request / session | Web 请求或会话范围内的实例 |\n\n**单例不等于线程安全。** 多个请求可能共同访问同一个 Service。\n\n**做法：** Service 尽量无状态；用户 ID 等请求数据放参数或合适上下文，不放共享可变字段。",
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
        "sourceQuestionId": "bank-Q05-007"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 143
    },
    {
      "id": "bank-Q05-011",
      "number": "Q05-011",
      "question": "AOP 用来解决什么问题？有哪些通知？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**AOP（面向切面编程）把多处重复的公共逻辑抽出来，围绕业务方法统一执行。**\n\n- **典型用途：** 日志、耗时统计、权限检查、事务。\n- **前置：** 方法调用前执行。\n- **返回后 / 异常后：** 正常返回或抛异常时执行。\n- **最终后置：** 方法结束后执行。\n- **环绕：** 在前后统一控制，通过 `proceed()` 调用原方法。\n\n**注意：** Spring AOP 通常基于代理，自调用可能绕过增强。",
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
        "sourceQuestionId": "bank-Q05-011"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 144
    },
    {
      "id": "bank-Q05-015",
      "number": "Q05-015",
      "question": "Spring 默认哪些异常回滚？checked 异常怎么办？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**未自定义回滚规则时：**\n\n- **RuntimeException 及其子类：** 回滚。\n- **Error 及其子类：** 回滚。\n- **受检异常：** 默认不自动回滚，需要按业务配置 `rollbackFor`。\n\n```java\n@Transactional(rollbackFor = Exception.class)\n```\n\n**注意：** Spring 新版本可配置全局默认规则；方法内部吞异常、没有走代理，不能靠这一行注解补救。",
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
        "sourceQuestionId": "bank-Q05-015"
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
      "studyOrder": 145
    },
    {
      "id": "bank-Q05-023",
      "number": "Q05-023",
      "question": "@RequestParam、@PathVariable、@RequestBody 的区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 注解 | 读取位置 | 例子 |\n| --- | --- | --- |\n| @RequestParam | 查询参数或表单参数 | `/users?page=1` 中的 page |\n| @PathVariable | URL 路径变量 | `/users/123` 中的 123 |\n| @RequestBody | 请求体，由消息转换器解析 | JSON：`{\"name\":\"张三\"}` |\n\n**记住：** Param 取参数，Path 取路径，Body 取请求体。\n\n**注意：** JSON 请求需要匹配 `Content-Type`；不能把多个独立 `@RequestBody` 当成可以重复读取同一请求体。",
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
        "sourceQuestionId": "bank-Q05-023"
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
      "studyOrder": 146
    },
    {
      "id": "bank-Q05-026",
      "number": "Q05-026",
      "question": "@SpringBootApplication 包含什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 组合注解 | 作用 |\n| --- | --- |\n| @SpringBootConfiguration | 声明 Boot 配置类，基于 @Configuration |\n| @EnableAutoConfiguration | 开启自动配置 |\n| @ComponentScan | 扫描组件并注册 Bean |\n\n**记住：** 配置类 + 自动配置 + 组件扫描。\n\n**注意：** 启动类位置影响默认扫描范围，通常放在业务根包。",
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
        "sourceQuestionId": "bank-Q05-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 147
    },
    {
      "id": "bank-Q05-031",
      "number": "Q05-031",
      "question": "MyBatis 的 Mapper 接口为什么不用手写实现？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **MyBatis 的职责：** 将 Java 方法、SQL、参数和结果映射连接起来。\n- **Mapper 不写实现：** 框架创建接口代理，把方法调用转成对应 SQL 执行。\n- **执行步骤：** 找映射语句 → 绑定参数 → 执行 SQL → 映射结果。\n\n**注意：** Mapper 代理不意味着 SQL 自动最优；数据值用 `#{}` 绑定，动态拼接位置必须受控。",
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
        "sourceQuestionId": "bank-Q05-031"
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
      "studyOrder": 148
    },
    {
      "id": "bank-Q05-043",
      "number": "Q05-043",
      "question": "MyBatis 的 #{} 与 ${} 有什么区别？动态排序怎么办？",
      "answer": "| 写法 | 处理方式 | 用途与风险 |\n| --- | --- | --- |\n| `#{value}` | 预编译参数占位并绑定值 | 适合普通数据值，能防止该位置的 SQL 注入 |\n| `${value}` | 把文本直接拼进 SQL | 可用于受控标识符；直接接用户输入有注入风险 |\n\n**例子：** `WHERE name = #{name}` 传值；排序列用服务端白名单映射，不能随意 `${sort}`。\n\n**注意：** `#{}` 不能把参数值当作表名、列名或 SQL 关键字。",
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
        "sourceQuestionId": "bank-Q05-043"
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
      "studyOrder": 149
    },
    {
      "id": "bank-Q05-046",
      "number": "Q05-046",
      "question": "Spring Bean 是什么？普通对象和 Bean 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**Bean 是由 Spring 容器创建、配置或管理的对象。**\n\n- **管理能力：** 可参与依赖注入、生命周期回调和配置装配。\n- **增强能力：** 满足条件时可被事务、AOP 等代理增强。\n- **普通对象：** 手工 new 的对象不会仅因类上有注解就自动参与容器管理。\n\n**注意：** 用 `@Bean` 方法创建对象时也可能用 new；关键不是有没有 new，而是对象是否被交给容器管理。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 150
    },
    {
      "id": "bank-Q05-047",
      "number": "Q05-047",
      "question": "@Controller 和 @RestController 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 注解 | 主要用途 |\n| --- | --- |\n| @Controller | 声明控制器，方法可返回视图，也可配合 @ResponseBody 返回数据 |\n| @RestController | 组合 @Controller 与 @ResponseBody，默认把方法返回值写入响应体 |\n\n**例子：** 普通 Controller 返回字符串可能是视图名；REST 控制器返回对象通常由消息转换器序列化。\n\n**注意：** @RestController 不等于任何返回值都一定是 JSON。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 151
    },
    {
      "id": "bank-Q05-048",
      "number": "Q05-048",
      "question": "@RequestMapping 和 @GetMapping、@PostMapping 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **@RequestMapping：** 通用请求映射，可配置路径、HTTP 方法、媒体类型等。\n- **@GetMapping：** 专门映射 GET 请求，是组合注解。\n- **@PostMapping：** 专门映射 POST 请求，也是组合注解。\n- **常见写法：** 类上写公共路径，方法上写具体路径与方法。\n\n```java\n@RestController\n@RequestMapping(\"/users\")\nclass UserController {\n    @GetMapping(\"/ping\")\n    public String ping() { return \"ok\"; }\n}\n```\n\n**结果：** `GET /users/ping` 返回 `ok`。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 152
    },
    {
      "id": "bank-Q05-049",
      "number": "Q05-049",
      "question": "Controller、Service、Mapper／DAO 三层分别负责什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 层次 | 职责 |\n| --- | --- |\n| Controller | 接收请求、参数绑定与校验、组织响应 |\n| Service | 实现业务规则、协调多个操作、确定事务边界 |\n| Mapper / DAO | 访问数据库，执行查询和更新 |\n\n**调用：** Controller → Service → Mapper / DAO → 数据库。\n\n**注意：** 不要把所有业务都堆在 Controller，也不要让数据库层负责 HTTP 返回格式。",
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
        "reviewedOn": null
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
      "studyOrder": 153
    },
    {
      "id": "bank-Q05-050",
      "number": "Q05-050",
      "question": "DTO、VO、实体类分别是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **实体类：** 通常对应业务持久化结构或数据库记录。\n- **DTO：** 在接口或层之间传输数据，明确输入输出边界。\n- **VO：** 常指面向页面或响应的展示对象；具体命名以团队约定为准。\n\n**例子：** 新增用户 DTO 只接收允许修改的字段，返回 VO 不携带密码等内部字段。\n\n**注意：** 不应直接把数据库实体当成用户可任意赋值的请求参数。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 154
    },
    {
      "id": "bank-Q05-052",
      "number": "Q05-052",
      "question": "什么是本地事务？为什么转账要放在同一个事务里？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**本地事务把同一个资源上的一组操作作为整体提交或回滚。**\n\n- **转账步骤：** A 账户扣钱，B 账户加钱。\n- **不在同一事务：** 可能扣钱成功、加钱失败，留下不一致。\n- **在正确事务中：** 失败按规则回滚，避免只完成一半。\n\n**注意：** 同时涉及不同数据库或远程接口时，单个本地事务不自动覆盖所有副作用。",
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
        "reviewedOn": null
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
      "studyOrder": 155
    },
    {
      "id": "bank-Q05-053",
      "number": "Q05-053",
      "question": "事务传播行为是什么？和隔离级别有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **传播行为：** 一个事务方法调用另一个方法时，如何使用已有事务或创建新事务。\n- **隔离级别：** 多个并发事务之间，能看到彼此哪些修改。\n- **常见默认：** Spring 传播是 REQUIRED；隔离通常沿用数据库默认值。\n\n**记住：** 传播看“方法调用时怎么用事务”，隔离看“并发事务之间怎么看数据”。",
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
        "reviewedOn": null
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
      "studyOrder": 156
    },
    {
      "id": "bank-Q05-054",
      "number": "Q05-054",
      "question": "MyBatis 是什么？它和 JDBC 有什么关系？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **JDBC：** Java 访问关系数据库的标准接口体系。\n- **MyBatis：** 在 JDBC 等能力之上组织 SQL、参数绑定和结果映射的持久层框架。\n- **省掉的工作：** 减少重复的会话、参数和结果处理代码。\n- **仍要负责：** 开发者通常仍需编写或控制 SQL，并处理索引、事务和业务规则。\n\n**注意：** 使用框架不等于可以忽略数据库执行行为。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 157
    },
    {
      "id": "bank-Q05-055",
      "number": "Q05-055",
      "question": "Spring Boot 的 Starter 是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**Starter 是便捷的依赖入口，用来聚合同一类功能所需的依赖。**\n\n- **用途：** 引入一个 Starter，减少手工逐个配依赖。\n- **与自动配置：** Starter 带来依赖，自动配置根据条件装配组件，两者不是同一概念。\n- **例子：** Web 场景使用相应 Web Starter 搭建 Web 应用。\n\n**注意：** 并非引入 Starter 后，所有功能都不需要配置。",
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
        "reviewedOn": null
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
      "studyOrder": 158
    },
    {
      "id": "bank-LX037",
      "number": "LX037",
      "question": "声明式事务和编程式事务有什么区别？什么时候用 TransactionTemplate？",
      "answer": "- 声明式事务是用 @Transactional 告诉框架事务放在哪，编程式事务是用 TransactionTemplate 等在代码里明确圈出范围。\n\n- 前者适合清楚的方法边界，后者适合只让一小段代码进事务。\n\n- 两者都要正确选择事务管理器、处理异常，也都不能自动包住任意远程调用。",
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
        "sourceQuestionId": "bank-LX037"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 159
    },
    {
      "id": "bank-Q05-003",
      "number": "Q05-003",
      "question": "BeanFactory、ApplicationContext、FactoryBean 有什么区别？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "- BeanFactory 是基础 Bean 工厂，负责获取和管理 Bean。\n\n- ApplicationContext 在此基础上增加事件、资源、国际化等应用能力。\n\n- 平时 Spring Boot 用的是更完整的 ApplicationContext。\n\n- 注意 FactoryBean 是“制造其他对象的 Bean”，不是 BeanFactory。",
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
        "sourceQuestionId": "bank-Q05-003"
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
      "studyOrder": 160
    },
    {
      "id": "bank-Q05-005",
      "number": "Q05-005",
      "question": "为什么通常优先构造器注入？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 构造器注入能明确一个类必须依赖什么，方便使用 final 字段，也容易单元测试。\n\n- 字段注入虽然少写几行，但依赖被隐藏，脱离容器时不方便构造。\n\n- 依赖太多时，还要考虑是不是这个类负责的事情太多。\n\n**例子：** new OrderService(fakeMapper) 就能测试业务，不必为了注入一个字段启动整个 Spring。",
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
        "sourceQuestionId": "bank-Q05-005"
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
      "studyOrder": 161
    },
    {
      "id": "bank-Q05-006",
      "number": "Q05-006",
      "question": "@Autowired、@Resource、@Qualifier、@Primary 怎么区分？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 注解 | 主要作用 |\n| --- | --- |\n| @Autowired | 主要按类型解析依赖 |\n| @Qualifier | 进一步指定依赖候选 |\n| @Primary | 多个候选时设置默认优先项 |\n| @Resource | 通常先按名称，再按相应规则考虑类型 |\n\n**例子：** 两个 PayService 实现，用 `@Qualifier(\"wechatPayService\")` 明确选择。\n\n**注意：** 多实现时不要靠变量名碰巧匹配；相关注解包需要匹配项目版本。",
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
        "sourceQuestionId": "bank-Q05-006"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 162
    },
    {
      "id": "bank-Q05-008",
      "number": "Q05-008",
      "question": "Bean 生命周期如何回答？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**主线：实例化 → 注入依赖 → 初始化 → 使用 → 销毁。**\n\n1. **实例化：** 创建 Bean 对象。\n2. **注入：** 填充所需依赖。\n3. **初始化：** 执行相应回调；前后会有后置处理器参与，可能生成代理。\n4. **使用：** 应用通过容器取得对象执行业务。\n5. **销毁：** 容器关闭时，对受其完整管理的 Bean 执行销毁回调。\n\n**注意：** `prototype` 的完整销毁通常不由容器统一管理；构造器执行时，字段注入尚未完成。",
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
        "sourceQuestionId": "bank-Q05-008"
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
      "studyOrder": 163
    },
    {
      "id": "bank-Q05-010",
      "number": "Q05-010",
      "question": "循环依赖怎样形成？三级缓存能解决哪些情况？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**循环依赖：A 需要 B，B 又需要 A。**\n\n| 缓存 | 保存什么 |\n| --- | --- |\n| 一级 | 完整单例对象 |\n| 二级 | 已获取的早期引用 |\n| 三级 | 获取早期引用的工厂，可协调代理 |\n\n**能处理的典型情况：** 部分单例属性注入循环，可以先暴露尚未完全初始化的引用。\n\n**注意：** 构造器循环、prototype 循环不能照搬；应优先拆职责，不能靠打开循环依赖配置掩盖设计问题。",
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
        "sourceQuestionId": "bank-Q05-010"
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
      "studyOrder": 164
    },
    {
      "id": "bank-Q05-012",
      "number": "Q05-012",
      "question": "Spring AOP 代理有哪些限制？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- Spring AOP 的关键限制是“调用必须经过代理”。\n\n- 同一个对象内部 this 调另一个方法，通常绕过代理。\n\n- 类代理还不能通过重写增强 final/private 方法。\n\n- 需要让内部调用生效时，优先拆到另一个 Bean，再从代理调用。",
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
        "sourceQuestionId": "bank-Q05-012"
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
      "studyOrder": 165
    },
    {
      "id": "bank-Q05-013",
      "number": "Q05-013",
      "question": "@Transactional 是怎样实现的？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**常见实现：AOP 代理 + 事务拦截器 + 事务管理器。**\n\n1. **调用进入代理：** 读取 `@Transactional` 的事务配置。\n2. **执行前：** 开启新事务，或按传播规则加入现有事务。\n3. **执行后：** 正常完成则提交；异常按回滚规则处理。\n4. **最后：** 清理事务资源。\n\n**注意：** 一个本地数据库事务不会自动撤销远程接口、Redis 修改或已经发出的短信。",
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
        "sourceQuestionId": "bank-Q05-013"
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
      "studyOrder": 166
    },
    {
      "id": "bank-Q05-016",
      "number": "Q05-016",
      "question": "七种事务传播行为是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 传播行为 | 含义 |\n| --- | --- |\n| REQUIRED（默认） | 有事务就加入，没有就新建 |\n| REQUIRES_NEW | 挂起外层，独立新建事务 |\n| SUPPORTS | 有就加入，没有就不用事务 |\n| NOT_SUPPORTED | 挂起已有事务，以非事务方式执行 |\n| MANDATORY | 必须已有事务，否则报错 |\n| NEVER | 必须没有事务，否则报错 |\n| NESTED | 有事务时通常用保存点实现嵌套范围；没有则新建 |\n\n**重点先背：** REQUIRED、REQUIRES_NEW、NESTED；NESTED 的支持取决于事务管理器和资源。",
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
        "sourceQuestionId": "bank-Q05-016"
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
      "studyOrder": 167
    },
    {
      "id": "bank-Q05-019",
      "number": "Q05-019",
      "question": "事务隔离级别和 readOnly 应怎么理解？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 隔离级别主要由数据库执行，Spring 在创建事务时传递相应设置。\n\n- 加入旧事务时不能想当然地重新指定一套。\n\n- readOnly 主要是提示或优化配置，不是可靠的写权限控制。\n\n- 跨线程也不会自动继承 JDBC 事务。",
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
        "sourceQuestionId": "bank-Q05-019"
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
      "studyOrder": 168
    },
    {
      "id": "bank-Q05-021",
      "number": "Q05-021",
      "question": "Spring MVC 一次请求经过哪些组件？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**请求 → DispatcherServlet → 找到 Controller → 调用方法 → 写回响应。**\n\n1. **接收：** 请求先经过 Servlet Filter，进入 DispatcherServlet。\n2. **找方法：** HandlerMapping 找处理器，HandlerAdapter 负责适配调用。\n3. **绑定参数：** 完成参数解析和相关校验，再执行业务方法。\n4. **处理返回：** REST 接口通常通过消息转换器把对象序列化为 JSON。\n5. **异常处理：** 由异常解析器、ControllerAdvice 等转成合适响应。\n\n**注意：** 拦截器在 MVC 处理链内，不是 Servlet Filter。",
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
        "sourceQuestionId": "bank-Q05-021"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 169
    },
    {
      "id": "bank-Q05-022",
      "number": "Q05-022",
      "question": "Filter、Interceptor、AOP 各适合什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- Filter 在 Servlet 层，适合通用 HTTP 处理。\n\n- Interceptor 在 Spring MVC 里，能知道将执行哪个 handler。\n\n- AOP 围绕代理方法工作，适合业务层公共逻辑。\n\n- 三者拦截位置不同，不是换个名字做同一件事。\n\n**例子：** 请求编码可放 Filter；Controller 级处理可用 Interceptor；Service 耗时统计可用 AOP。完整鉴权还需覆盖所有入口。",
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
        "sourceQuestionId": "bank-Q05-022"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 170
    },
    {
      "id": "bank-Q05-024",
      "number": "Q05-024",
      "question": "参数校验与统一异常处理怎么做？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **声明约束：** DTO 字段上配置非空、长度等校验注解。\n2. **触发校验：** 在适用入口使用 `@Valid` / `@Validated`；嵌套对象要级联校验。\n3. **统一处理：** `@RestControllerAdvice` + `@ExceptionHandler` 转换异常响应。\n4. **记录现场：** 返回稳定错误码和提示，后端记录堆栈与 traceId。\n\n**注意：** 不直接暴露异常堆栈；业务失败与系统错误应区分，不能全部伪装成成功。",
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
        "sourceQuestionId": "bank-Q05-024"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 171
    },
    {
      "id": "bank-Q05-025",
      "number": "Q05-025",
      "question": "Spring Boot 自动配置原理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**自动配置是“条件满足时，提供默认组件”，不是无条件创建所有 Bean。**\n\n1. **发现候选：** 从约定的自动配置元数据中找到配置类。\n2. **判断条件：** 检查类路径、配置属性、已有 Bean 等。\n3. **注册组件：** 满足条件才装配所需 Bean。\n4. **允许覆盖：** 例如 `@ConditionalOnMissingBean` 在用户已有 Bean 时让位。\n\n**注意：** 新旧 Boot 的自动配置注册文件不同，回答时按项目版本说明。",
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
        "sourceQuestionId": "bank-Q05-025"
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
      "studyOrder": 172
    },
    {
      "id": "bank-Q05-030",
      "number": "Q05-030",
      "question": "@Async、@Scheduled 的常见坑？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- @Async 通常通过代理交给执行器，所以自调用可能无效，异常和上下文要另外处理。\n\n- @Scheduled 在多实例部署时，可能每个实例都执行。\n\n- 定时任务要考虑重复、超时和幂等，单机 synchronized 不能锁住整个集群。",
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
        "sourceQuestionId": "bank-Q05-030"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 173
    },
    {
      "id": "bank-Q05-032",
      "number": "Q05-032",
      "question": "MyBatis 一级、二级缓存是什么？",
      "category": "Spring / Spring Boot",
      "priority": "P1",
      "kind": "基础概念",
      "answer": "- 一级缓存通常属于 SqlSession，二级缓存通常按 Mapper namespace 共享，需要相应配置。\n\n- 更新、提交和会话生命周期会影响缓存行为。\n\n- 缓存不能脱离 Spring 的会话管理来理解，也不能直接当成跨服务 Redis 的替代品。",
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
        "sourceQuestionId": "bank-Q05-032"
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
      "studyOrder": 174
    },
    {
      "id": "bank-Q05-033",
      "number": "Q05-033",
      "question": "MyBatis 插件能做什么？分页和 N+1 查询怎样优化？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- N+1 是先查一次列表，再对每条记录各查一次关联数据，N 条就多 N 次 SQL。\n\n- 可改成批量查、合理 join 或批量映射。\n\n- 分页要让数据库只取需要的一页，不能先查全量，再在 Java 内存截取。\n\n**例子：** 查 100 个订单后逐个查客户，会执行约 101 次 SQL；先收集客户 ID，一次批量查，再组装结果，通常能明显减少往返。",
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
        "sourceQuestionId": "bank-Q05-033"
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
      "studyOrder": 175
    },
    {
      "id": "bank-Q05-034",
      "number": "Q05-034",
      "question": "连接池解决什么？为什么连接池满了不能只加容量？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 连接池复用数据库连接，也限制同时打到数据库的请求数。\n\n- 池满可能因为慢 SQL、长事务、连接没归还或流量过大。\n\n- 先看连接被谁占着，再决定是否扩容，盲目加连接可能让数据库更慢。\n\n**例子：** 获取连接超时是“还没轮到你”；SQL 执行超时是“拿到连接后办事太慢”，排查方向不同。",
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
        "sourceQuestionId": "bank-Q05-034"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 176
    },
    {
      "id": "bank-Q05-036",
      "number": "Q05-036",
      "question": "Maven 依赖冲突怎么定位和处理？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先用 mvn dependency:tree 找出冲突依赖从哪里引入，再用 dependencyManagement/BOM 统一版本，必要时排除多余传递依赖。\n\n- 要保证编译和运行时版本一致，不要随机换成最新版试运气。\n\n**例子：** NoSuchMethodError 常见于编译时有这个方法，运行时实际加载的旧 jar 却没有它。",
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
        "sourceQuestionId": "bank-Q05-036"
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
      "studyOrder": 177
    },
    {
      "id": "bank-Q05-041",
      "number": "Q05-041",
      "question": "带事务的方法调用普通方法，普通方法的数据库操作有事务吗？",
      "answer": "- **通常有：**外层已经通过代理开启事务，普通方法在同线程、同受管资源上操作数据库，就会参与已有事务。\n\n- 自调用的限制是“内层注解不会重新被代理处理”，不是“进入普通方法后原事务消失”。\n\n**例子：** 外层有事务时调用普通 mapper 操作能回滚；外层没事务，却用 this 调带 @Transactional 的方法，通常不会因此新开事务。",
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
        "sourceQuestionId": "bank-Q05-041"
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
      "studyOrder": 178
    },
    {
      "id": "bank-Q05-042",
      "number": "Q05-042",
      "question": "异步线程能开启新事务吗？为什么主线程回滚后异步数据还在？",
      "answer": "- 异步线程能开自己的事务，但不会自动继承主线程的 JDBC 事务。\n\n- 它通过事务代理或 TransactionTemplate 开启并提交后，主线程再回滚也不会把它撤销。\n\n- 跨线程一致性需要事件、状态或补偿，不能靠复制 ThreadLocal 共享连接。",
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
        "sourceQuestionId": "bank-Q05-042"
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
      "studyOrder": 179
    },
    {
      "id": "bank-Q05-051",
      "number": "Q05-051",
      "question": "什么是依赖注入？常见的注入方式有哪些？",
      "category": "Spring / Spring Boot",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**依赖注入：由容器把一个对象所需的依赖传给它，而不是在内部写死实现。**\n\n- **构造器注入：** 必需依赖在创建对象时传入，便于 final 字段和测试。\n- **Setter / 方法注入：** 通过方法设置依赖。\n- **字段注入：** 直接向字段注入，写法短，但隐藏依赖、独立测试不便。\n\n**通常优先：** 必需依赖使用构造器注入。",
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
        "reviewedOn": null
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
      "studyOrder": 180
    },
    {
      "id": "bank-LX018",
      "number": "LX018",
      "question": "WHERE、GROUP BY、HAVING 和聚合函数怎么配合？",
      "answer": "**顺序记忆：先筛行 → 再分组 → 后筛组。**\n\n- **WHERE：** 过滤分组前的记录。\n- **GROUP BY：** 按指定字段形成分组。\n- **HAVING：** 根据聚合结果等条件过滤分组。\n\n```sql\nSELECT department_id, COUNT(*) AS employee_count\nFROM employee\nWHERE active = 1\nGROUP BY department_id\nHAVING COUNT(*) > 5;\n```\n\n**意思：** 查询在职人数大于 5 的部门。",
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
        "sourceQuestionId": "bank-LX018"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 181
    },
    {
      "id": "bank-Q06-003",
      "number": "Q06-003",
      "question": "索引是什么？什么时候反而不划算？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**索引是帮助数据库更快定位数据的检索结构，可以类比书的目录。**\n\n- **收益：** 减少扫描；合适时还能帮助排序和覆盖读取。\n- **代价：** 占空间；插入、删除和修改相关字段时要维护。\n- **设计：** 根据查询条件、连接、排序和数据分布选择。\n- **不是越多越好：** 返回大部分记录时，全表扫描可能更划算。",
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
        "sourceQuestionId": "bank-Q06-003"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 182
    },
    {
      "id": "bank-Q06-013",
      "number": "Q06-013",
      "question": "事务 ACID 分别是什么意思？数据库和业务各负责什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 特性 | 含义 | 转账例子 |\n| --- | --- | --- |\n| A 原子性 | 整体成功，或失败撤销 | 扣钱与加钱一起完成 |\n| C 一致性 | 事务前后满足业务和数据库约束 | 总金额不能凭空变化 |\n| I 隔离性 | 并发事务按约定互相隔离 | 不能随意读到别人的未提交修改 |\n| D 持久性 | 提交结果获得相应持久保障 | 重启后能恢复已提交记录 |\n\n**注意：** 数据库不能自动补上漏写的业务规则，转账的两步仍需放入正确事务。",
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
        "sourceQuestionId": "bank-Q06-013"
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
      "studyOrder": 183
    },
    {
      "id": "bank-Q06-014",
      "number": "Q06-014",
      "question": "脏读、不可重复读、幻读有什么区别？四种隔离级别如何对应？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 现象 | 含义 |\n| --- | --- |\n| 脏读 | 读到其他事务尚未提交的数据 |\n| 不可重复读 | 两次读取同一记录，值发生变化 |\n| 幻读 | 同一条件的结果集合发生变化 |\n\n| 隔离级别 | 主要约束 |\n| --- | --- |\n| 读未提交 RU | 可能发生脏读 |\n| 读已提交 RC | 避免脏读 |\n| 可重复读 RR | 加强同一事务重复读取的一致性 |\n| 串行化 | 提供更强的串行化执行约束 |\n\n**注意：** InnoDB 默认 RR，可配置改变；RR 的幻读问题要区分快照读和锁定读，不只背标准异常表。",
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
        "sourceQuestionId": "bank-Q06-014"
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
      "studyOrder": 184
    },
    {
      "id": "bank-Q06-029",
      "number": "Q06-029",
      "question": "count(*)、count(1)、count(列) 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 写法 | 统计对象 |\n| --- | --- |\n| `COUNT(*)` | 结果行数，包括列中有 NULL 的行 |\n| `COUNT(1)` | 每行计数，通常与 COUNT(*) 同义 |\n| `COUNT(列)` | 该列非 NULL 的行数 |\n\n**例子：** 三行值是 `1、NULL、2`，`COUNT(*)=3`，`COUNT(列)=2`。\n\n**注意：** 不要背 `COUNT(1)` 永远更快；只判断存在时不一定要统计全部行。",
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
        "sourceQuestionId": "bank-Q06-029"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 185
    },
    {
      "id": "bank-Q06-041",
      "number": "Q06-041",
      "question": "什么是关系型数据库？表、行、列分别是什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **关系型数据库：** 以关系模型组织数据，业务中通常表现为相互关联的表。\n- **表：** 保存某一类记录，如员工表。\n- **行：** 一条具体记录，如某个员工。\n- **列：** 一个属性，如姓名、部门 ID。\n\n**例子：** 员工表用 department_id 与部门表的 id 建立关联，再通过 JOIN 查询。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 186
    },
    {
      "id": "bank-Q06-042",
      "number": "Q06-042",
      "question": "主键、唯一键、外键有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 概念 | 作用 |\n| --- | --- |\n| 主键 PRIMARY KEY | 唯一标识一行，不能为 NULL；一张表最多一组主键，可包含多列 |\n| 唯一键 UNIQUE | 约束某列或某组列的值不重复；NULL 规则看数据库 |\n| 外键 FOREIGN KEY | 约束表之间的引用关系，避免引用不存在的关联记录 |\n\n**例子：** 员工 id 是主键；员工编号可设唯一键；department_id 可作为关联部门的外键。\n\n**注意：** 写 JOIN 不要求一定声明外键，关联查询与外键约束是两件事。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 187
    },
    {
      "id": "bank-Q06-043",
      "number": "Q06-043",
      "question": "SQL 的增删改查分别怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "```sql\n-- 查\nSELECT id, name FROM users WHERE id = 1;\n-- 增\nINSERT INTO users (id, name) VALUES (1, '张三');\n-- 改\nUPDATE users SET name = '李四' WHERE id = 1;\n-- 删\nDELETE FROM users WHERE id = 1;\n```\n\n**记住：** SELECT 查，INSERT 增，UPDATE 改，DELETE 删。\n\n**注意：** 这些是语法示例，不要照抄到生产；UPDATE / DELETE 先确认 WHERE 和影响范围，应用传值用绑定参数。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 188
    },
    {
      "id": "bank-Q06-044",
      "number": "Q06-044",
      "question": "WHERE 和 HAVING 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **WHERE：** 对输入行进行过滤，逻辑上在分组前。\n- **HAVING：** 对分组结果进行过滤，可使用聚合条件。\n\n```sql\nSELECT department_id, COUNT(*) AS total\nFROM employee\nWHERE active = 1\nGROUP BY department_id\nHAVING COUNT(*) >= 3;\n```\n\n**意思：** 从在职员工中，找出人数至少 3 的部门。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 189
    },
    {
      "id": "bank-Q06-045",
      "number": "Q06-045",
      "question": "GROUP BY 和 ORDER BY 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **GROUP BY：** 把数据分组，通常配合 COUNT、SUM、AVG 等聚合函数。\n- **ORDER BY：** 给结果排序，ASC 升序、DESC 降序。\n- **两者可一起用：** 先得到各部门人数，再按人数排序。\n\n```sql\nSELECT department_id, COUNT(*) AS total\nFROM employee\nGROUP BY department_id\nORDER BY total DESC, department_id ASC;\n```\n\n**注意：** GROUP BY 不应被当作自动保证输出顺序，排序需求要明确写 ORDER BY。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 190
    },
    {
      "id": "bank-Q06-046",
      "number": "Q06-046",
      "question": "SQL 常见聚合函数有哪些？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 函数 | 含义 |\n| --- | --- |\n| COUNT | 计数 |\n| SUM | 求和 |\n| AVG | 平均值 |\n| MAX | 最大值 |\n| MIN | 最小值 |\n\n**常见写法：** `SELECT department_id, AVG(salary) FROM employee GROUP BY department_id;`\n\n**注意：** `COUNT(*)` 数行，`COUNT(列)` 忽略 NULL；其他这些聚合函数通常也忽略 NULL 值。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 191
    },
    {
      "id": "bank-Q06-047",
      "number": "Q06-047",
      "question": "UNION 和 UNION ALL 有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | UNION | UNION ALL |\n| --- | --- | --- |\n| 作用 | 合并多个查询结果 | 合并多个查询结果 |\n| 重复行 | 去除重复行 | 保留重复行 |\n| 成本 | 需要去重，通常有额外开销 | 不执行去重 |\n\n**前提：** 对应查询的列数相同，类型需兼容。\n\n**记住：** JOIN 横向关联列，UNION 纵向合并行；并非所有情况都能随意互换。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 192
    },
    {
      "id": "bank-Q06-048",
      "number": "Q06-048",
      "question": "MySQL 普通索引、唯一索引、主键索引有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 索引 | 约束特点 |\n| --- | --- |\n| 普通索引 | 主要帮助查询，不限制重复值 |\n| 唯一索引 | 约束键值唯一；MySQL 对 NULL 有特殊规则 |\n| 主键索引 | 主键唯一且非空；InnoDB 通常用它组织聚簇索引 |\n\n**注意：** 普通、唯一描述约束；联合索引描述包含几列，分类维度不同。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 193
    },
    {
      "id": "bank-Q06-049",
      "number": "Q06-049",
      "question": "什么是联合索引？什么是覆盖索引？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **联合索引：** 一个索引包含多列，例如 `(user_id, created_at)`。\n- **覆盖索引：** 某次查询需要的字段都能由索引提供，无需再取整行。\n- **区别：** 联合索引看索引的组成；覆盖看索引能否满足这条查询。\n\n**例子：** 索引含 user_id、created_at，查询只需要这些字段时，可能形成覆盖读取。\n\n**注意：** 联合索引不代表任何查询都被覆盖。",
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
        "reviewedOn": null
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
      "studyOrder": 194
    },
    {
      "id": "bank-Q06-050",
      "number": "Q06-050",
      "question": "MySQL 分页查询怎么写？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "```sql\nSELECT id, name\nFROM users\nORDER BY id ASC\nLIMIT 10 OFFSET 20;\n```\n\n- **LIMIT 10：** 最多取 10 行。\n- **OFFSET 20：** 跳过前 20 行，即每页 10 条时查询第 3 页。\n- **计算：** `offset = (page - 1) × pageSize`，并校验页码与上限。\n\n**注意：** 分页要有稳定排序；偏移量很大时可考虑游标分页。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 195
    },
    {
      "id": "bank-Q06-051",
      "number": "Q06-051",
      "question": "如何找出主表中没有对应从表记录的数据？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**可以用 LEFT JOIN 后检查从表的非空主键，也可以用 NOT EXISTS。**\n\n```sql\nSELECT u.id, u.name\nFROM users AS u\nLEFT JOIN orders AS o ON o.user_id = u.id\nWHERE o.id IS NULL;\n```\n\n**意思：** 找出没有任何订单的用户。\n\n**注意：** 假设 `orders.id` 是非空主键；不能随便检查一个本来就允许 NULL 的业务字段，否则可能误判。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 196
    },
    {
      "id": "bank-Q06-054",
      "number": "Q06-054",
      "question": "什么是乐观锁、悲观锁？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 方式 | 思路 | 典型做法 |\n| --- | --- | --- |\n| 悲观锁 | 先控制并发访问，再执行业务 | 事务中 SELECT … FOR UPDATE |\n| 乐观锁 | 更新时校验是否发生冲突 | WHERE 中检查 version，成功后增加版本 |\n\n**乐观锁关键：** 检查更新影响行数，失败后按业务决定重试或返回冲突。\n\n**注意：** 数据库更新本身仍使用必要的锁，“乐观”不是说底层完全不加锁。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 197
    },
    {
      "id": "bank-Q06-001",
      "number": "Q06-001",
      "question": "一条 SELECT 的执行流程？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **一条 SELECT 大致经历：**连接认证→解析 SQL→优化器选执行计划→执行器调用存储引擎取数据→返回结果。\n\n- 接口慢还可能慢在获取连接、网络传输和序列化。\n\n- MySQL 8 已没有旧的查询缓存步骤。",
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
        "sourceQuestionId": "bank-Q06-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 198
    },
    {
      "id": "bank-Q06-002",
      "number": "Q06-002",
      "question": "InnoDB 与 MyISAM 的区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- InnoDB 支持事务、MVCC、行级锁和崩溃恢复，适合常见业务系统。\n\n- MyISAM 是较老的引擎，主要用表级锁，不提供同样的事务保障。\n\n- 讨论 MySQL 的锁和事务前，要先确认表使用什么引擎。",
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
        "sourceQuestionId": "bank-Q06-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 199
    },
    {
      "id": "bank-Q06-004",
      "number": "Q06-004",
      "question": "InnoDB 为什么常用 B+ 树？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **树矮：** 一个节点能放多个键，扇出较高，通常只需访问少量页。\n- **查询稳定：** 记录集中在叶子层，定位路径较稳定。\n- **范围友好：** 叶子按键有序连接，方便区间扫描与顺序访问。\n- **对比：** 二叉树层数通常更多；哈希不擅长按大小查范围。\n\n**例子：** 查价格 100～200，定位起点后顺着叶子扫描。",
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
        "sourceQuestionId": "bank-Q06-004"
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
      "studyOrder": 200
    },
    {
      "id": "bank-Q06-005",
      "number": "Q06-005",
      "question": "聚簇索引和二级索引各存什么？什么情况下需要回表？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 概念 | InnoDB 中的含义 |\n| --- | --- |\n| 聚簇索引 | 通常按主键组织，叶子保存整行 |\n| 二级索引 | 叶子保存索引列和主键值 |\n| 回表 | 先查二级索引拿主键，再去聚簇索引取其他字段 |\n\n**例子：** 手机号索引查姓名：手机号 → 用户主键 → 整行姓名。\n\n**注意：** 主键太长也会增加二级索引开销。",
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
        "sourceQuestionId": "bank-Q06-005"
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
      "studyOrder": 201
    },
    {
      "id": "bank-Q06-006",
      "number": "Q06-006",
      "question": "覆盖索引和索引下推有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 覆盖索引是“查询要的字段，索引里已经全有了，不必再取整行”。\n\n- 索引下推是“先在索引层筛掉不符合条件的记录，少去取整行”。\n\n- 一个减少取整行的必要性，一个减少取整行的次数。\n\n**例子：** Extra 中 Using index 常提示覆盖读取，Using index condition 才对应索引条件下推，不要把它们当成一回事。",
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
        "sourceQuestionId": "bank-Q06-006"
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
      "studyOrder": 202
    },
    {
      "id": "bank-Q06-007",
      "number": "Q06-007",
      "question": "联合索引为什么强调最左前缀？WHERE 条件的书写顺序重要吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**联合索引 `(a,b,c)` 先按 a 排序，同 a 再按 b，同 a、b 再按 c。**\n\n| 查询条件 | 常规前缀定位能力 |\n| --- | --- |\n| `a = ?` | 可利用 a |\n| `a = ? AND b = ?` | 可利用 a、b |\n| `a = ? AND c = ?` | a 可定位；跳过 b 影响 c 连续定位 |\n| 只有 `b = ?` | 通常不能按普通最左前缀高效定位 |\n\n**注意：** 看索引列顺序，不是 WHERE 书写顺序。覆盖扫描、跳跃扫描等可能仍访问索引，最后看执行计划。",
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
        "sourceQuestionId": "bank-Q06-007"
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
      "studyOrder": 203
    },
    {
      "id": "bank-Q06-008",
      "number": "Q06-008",
      "question": "联合索引遇到范围条件后，后面的列就完全没用了吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 范围条件之后的列，通常难继续缩小连续扫描范围，但仍可能用于索引内过滤或覆盖读取。\n\n- 所以不要背“范围后面的索引全失效”，应说“连续定位能力受影响，后续列是否还能发挥作用要看计划”。\n\n**例子：** 索引 (a,b,c)，条件 a=1 AND b>10 AND c=3：a、b 定位范围，c 仍可能先在索引里过滤。",
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
        "sourceQuestionId": "bank-Q06-008"
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
      "studyOrder": 204
    },
    {
      "id": "bank-Q06-010",
      "number": "Q06-010",
      "question": "如何给一个查询设计联合索引？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **设计联合索引先看真实 SQL：**哪些列等值过滤、哪些做范围、按什么排序、返回哪些字段。\n\n- 再选能服务主要查询的列顺序，用实际数据和执行计划验证。\n\n- 不是永远把区分度最高的列放第一，也不是索引越宽越好。",
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
        "sourceQuestionId": "bank-Q06-010"
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
      "studyOrder": 205
    },
    {
      "id": "bank-Q06-011",
      "number": "Q06-011",
      "question": "EXPLAIN 要看哪些字段？ANALYZE 有什么不同？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 字段 | 看什么 |\n| --- | --- |\n| type | 访问方式，例如 const、ref、range、ALL |\n| key | 实际使用的索引 |\n| rows | 估算扫描行数 |\n| filtered | 估算过滤后比例 |\n| Extra | 覆盖、索引条件下推、额外排序等信息 |\n\n**注意：** `EXPLAIN ANALYZE` 会实际执行支持的查询并给出实测数据；不能当作完全无成本的静态检查。",
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
        "sourceQuestionId": "bank-Q06-011"
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
      "studyOrder": 206
    },
    {
      "id": "bank-Q06-012",
      "number": "Q06-012",
      "question": "慢 SQL 排查的完整步骤？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 慢 SQL 先找到“哪条 SQL、什么参数、慢在什么时候”，再区分执行慢、锁等待还是连接等待。\n\n- 然后看执行计划、扫描行数、索引、深分页、N+1 和排序。\n\n- 一次改一个主要问题，在相同数据量下比较效果。",
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
        "sourceQuestionId": "bank-Q06-012"
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
      "studyOrder": 207
    },
    {
      "id": "bank-Q06-015",
      "number": "Q06-015",
      "question": "MVCC 的实现与 Read View 怎么理解？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**MVCC（多版本并发控制）让查询按可见性规则读取合适的历史版本。**\n\n- **版本链：** InnoDB 借助 undo 等保留记录的旧版本。\n- **Read View：** 判断某个版本对当前查询是否可见。\n- **RC：** 通常每次一致性读创建新视图。\n- **RR：** 通常复用首次一致性读建立的视图。\n\n**注意：** MVCC 主要服务一致性非锁定读，不代表更新、删除也都不用锁。",
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
        "sourceQuestionId": "bank-Q06-015"
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
      "studyOrder": 208
    },
    {
      "id": "bank-Q06-016",
      "number": "Q06-016",
      "question": "快照读与当前读有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 快照读按 Read View 读合适的历史版本，常见是普通 SELECT。\n\n- 当前读要读取并约束当前记录，常见有 SELECT FOR UPDATE、UPDATE、DELETE。\n\n- 当前读可能等锁，不能拿快照读规则去解释所有写操作。\n\n**例子：** 事务已经 BEGIN，不代表快照必然已经建立；通常要到首次一致性读，或显式创建一致性快照时才确定。",
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
        "sourceQuestionId": "bank-Q06-016"
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
      "studyOrder": 209
    },
    {
      "id": "bank-Q06-017",
      "number": "Q06-017",
      "question": "InnoDB 的 RR 怎样处理幻读？为什么要区分快照读和当前读？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **InnoDB 的 RR 要分开说：**普通快照读通常复用快照，所以看不到其他事务后插入的新行。\n\n- 合适的范围锁定读通过临键锁等阻止对应范围插入。\n\n- 混用快照读、当前读和自身写入时，不能承诺结果集合永远不变。",
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
        "sourceQuestionId": "bank-Q06-017"
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
      "studyOrder": 210
    },
    {
      "id": "bank-Q06-018",
      "number": "Q06-018",
      "question": "记录锁、间隙锁、临键锁和意向锁分别锁什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 记录锁锁住已有索引记录。\n\n- 间隙锁限制两个记录之间插入。\n\n- 临键锁是“记录+它前面的间隙”。\n\n- 意向锁是表级标记，告诉其他操作这张表里面有人在加细粒度锁。\n\n- 到底锁多大范围，要看索引、条件和隔离级别。\n\n**例子：** 索引里有 10 和 20，间隙锁可以阻止在二者之间插入 15；它和锁住现有的 10 不是同一件事。",
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
        "sourceQuestionId": "bank-Q06-018"
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
      "studyOrder": 211
    },
    {
      "id": "bank-Q06-020",
      "number": "Q06-020",
      "question": "InnoDB 死锁如何形成和处理？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 数据库死锁是事务互相等对方的锁。\n\n- InnoDB 检测到后可能回滚一个事务让另一个继续。\n\n- 应用要在幂等前提下有限重试整笔事务。\n\n- 预防主要靠统一更新顺序、缩短事务和合适索引。\n\n**例子：** A 先改订单 1 再改 2，B 先改 2 再改 1，就可能互相等待。统一按 ID 顺序修改可减少这种情况。",
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
        "sourceQuestionId": "bank-Q06-020"
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
      "studyOrder": 212
    },
    {
      "id": "bank-Q06-021",
      "number": "Q06-021",
      "question": "乐观锁与悲观锁怎样防止库存变负？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 悲观方式先在事务里锁住库存，再检查修改。\n\n- 乐观方式在更新时检查版本或库存条件，成功才扣减。\n\n- 关键是让数据库原子判断，不能先普通 SELECT 再无条件 UPDATE。\n\n- 无论哪种写法，数据库实际更新仍会使用必要的锁。\n\n**例子：** UPDATE stock SET qty=qty-1 WHERE id=? AND qty>0；检查影响行数为 1 才算成功，0 行表示本次没扣成。",
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
        "sourceQuestionId": "bank-Q06-021"
      },
      "isNew": false,
      "practiceCode": "```sql\nUPDATE product_stock\nSET stock = stock - :qty\nWHERE product_id = :product_id\n  AND stock >= :qty;\n```\n\n`:qty` 为展示用绑定参数，不是可直接交给所有MySQL客户端执行的字面SQL。**应用层必须先验证 qty > 0，并检查影响行数恰好为1；和订单落库放在同一个事务中，失败抛异常/回滚。**只写这一条不能处理订单与跨系统结果。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 213
    },
    {
      "id": "bank-Q06-022",
      "number": "Q06-022",
      "question": "redo log、undo log、binlog 各做什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 日志 | 主要作用 | 记忆点 |\n| --- | --- | --- |\n| redo log | 引擎崩溃恢复，重做相关修改 | 重做 |\n| undo log | 事务回滚、旧版本读取 | 撤销 / 历史版本 |\n| binlog | 服务器层变更记录，复制与时间点恢复 | 复制 / 恢复 |\n\n**注意：** 三者不能互相替代；binlog 不是用来做普通事务回滚的 undo。",
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
        "sourceQuestionId": "bank-Q06-022"
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
      "studyOrder": 214
    },
    {
      "id": "bank-Q06-026",
      "number": "Q06-026",
      "question": "主从复制流程与延迟问题？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 主库把变更写入 binlog，副本接收为 relay log，再重放到自己的数据中。\n\n- 复制可能有延迟，所以主库写完立刻读副本，可能看不到新数据。\n\n- 关键的写后读可读主库，或等待达到指定复制进度。",
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
        "sourceQuestionId": "bank-Q06-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 215
    },
    {
      "id": "bank-Q06-027",
      "number": "Q06-027",
      "question": "深分页为什么慢？游标分页怎么做？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 深分页慢在 offset 很大时，数据库通常仍要扫描并跳过前面的记录。\n\n- 连续翻页可改成“从上次最后一条之后继续查”，这叫游标分页。\n\n- 排序必须稳定，常用时间加唯一 ID。\n\n- 它不天然支持高效任意跳页。\n\n**例子：** 不是查第 100 万行后 20 条，而是 WHERE id > 上页最后ID ORDER BY id LIMIT 20；具体索引和过滤条件也要匹配。",
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
        "sourceQuestionId": "bank-Q06-027"
      },
      "isNew": false,
      "practiceCode": "```sql\nSELECT id, created_at, amount\nFROM orders\nWHERE tenant_id = :tenant_id\n  AND (created_at > :last_time\n       OR (created_at = :last_time AND id > :last_id))\nORDER BY created_at ASC, id ASC\nLIMIT 100;\n```\n\n候选索引 `(tenant_id, created_at, id)`，用真实执行计划验证。需要快照式导出时再明确数据截止时间/快照机制。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 216
    },
    {
      "id": "bank-Q06-028",
      "number": "Q06-028",
      "question": "order by、group by 慢怎么优化？",
      "category": "MySQL",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- 排序、分组慢，先减少参与处理的数据，再看能否利用索引顺序，避免不必要的大字段和临时结果。\n\n- 聚合量很大时可考虑预聚合。\n\n- Using filesort 表示额外排序，不代表一定写磁盘。\n\n- 盲目扩大排序缓冲可能撑高内存。",
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
        "sourceQuestionId": "bank-Q06-028"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 217
    },
    {
      "id": "bank-Q06-030",
      "number": "Q06-030",
      "question": "数据库字段类型、字符集和主键怎么选？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **字段类型按业务选：**金额用 DECIMAL 或最小单位整数，文本定义合理长度，时间明确时区语义，字符集和排序规则保持一致。\n\n- 主键要唯一、稳定、尽量紧凑，因为二级索引也会携带主键值。",
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
        "sourceQuestionId": "bank-Q06-030"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 218
    },
    {
      "id": "bank-Q06-031",
      "number": "Q06-031",
      "question": "NULL、索引和 SQL 三值逻辑有哪些坑？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- NULL 表示缺失或未知，不是普通的值。\n\n- 判断它用 IS NULL，不用 =NULL。\n\n- WHERE 只保留判断为真的行。\n\n- NOT IN 的集合含 NULL 时容易出现意外，应根据语义考虑 NOT EXISTS。\n\n- MySQL 唯一键对 NULL 有特殊规则。\n\n**例子：** NULL=NULL 不会得到普通的 true，因为你不知道两边各是什么值；count(列) 也不会把 NULL 数进去。",
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
        "sourceQuestionId": "bank-Q06-031"
      },
      "isNew": false,
      "practiceCode": "```sql\nSELECT u.id\nFROM users AS u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders AS o WHERE o.user_id = u.id\n);\n```\n\n对比 `NOT IN` 含 NULL 的情况，解释为什么不能忽略SQL三值逻辑。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 219
    },
    {
      "id": "bank-Q06-033",
      "number": "Q06-033",
      "question": "怎样查询每个部门薪资前三名？并列和只取三个人怎样区分？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先确认“前三”指三个人，还是前三个不同薪资档位。\n\n- 每部门只取三个人用 ROW_NUMBER，并加稳定排序。\n\n- 允许同薪资并列、取前三档用 DENSE_RANK。\n\n- MySQL 8 可以先用窗口函数排名，再在外层筛选。\n\n**例子：** 工资 100、100、90、80：ROW_NUMBER 取前三行；DENSE_RANK<=3 会把四个人都选中。",
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
        "sourceQuestionId": "bank-Q06-033"
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
      "studyOrder": 220
    },
    {
      "id": "bank-Q06-036",
      "number": "Q06-036",
      "question": "查出选课人数超过 5 人的课程，SQL 怎么写？",
      "answer": "- 先按 course_id 分组，再用 HAVING 过滤人数大于 5 的课程。\n\n- 可能重复选课时用 COUNT(DISTINCT student_id)，已有唯一约束时可考虑 COUNT(*)。\n\n- WHERE 先筛原始行，HAVING 再筛分组结果，退课等状态应先定义。\n\n**例子：** SELECT course_id FROM enrollment GROUP BY course_id HAVING COUNT(DISTINCT student_id) > 5;",
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
        "sourceQuestionId": "bank-Q06-036"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 221
    },
    {
      "id": "bank-Q06-037",
      "number": "Q06-037",
      "question": "按关键词查文本，LIKE 查询怎么优化？",
      "answer": "- LIKE 'abc%' 有明确前缀，普通 B+ 树有机会缩小扫描范围。\n\n- LIKE '%abc%' 通常难直接定位。\n\n- 先加合理业务过滤、减少返回列，再看计划。\n\n- 需要分词和相关性时评估全文检索，但它不等价于任意子串匹配。",
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
        "sourceQuestionId": "bank-Q06-037"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 222
    },
    {
      "id": "bank-Q06-052",
      "number": "Q06-052",
      "question": "LEFT JOIN 的 ON 条件和 WHERE 条件有什么区别？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **ON：** 决定右表哪些记录算匹配；不匹配时仍可保留左表并补 NULL。\n- **WHERE：** 对关联后的结果再次筛选；条件不为真就不保留。\n- **常见坑：** `WHERE o.status = 'PAID'` 会过滤掉无匹配订单的用户。\n\n**正确思路：** 要保留全部用户，又只展示已支付订单，把 `o.status = 'PAID'` 放在 ON；只要有已支付订单的用户，则可明确使用 INNER JOIN。\n\n**注意：** 不是“右表条件一律不能放 WHERE”，而是取决于期望结果。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 223
    },
    {
      "id": "bank-Q06-053",
      "number": "Q06-053",
      "question": "数据库三大范式是什么？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **第一范式：** 每个字段保存关系模型下的单一值，避免在一个字段中塞多个同类属性。\n- **第二范式：** 在第一范式基础上，非主属性完全依赖整个候选键，消除部分依赖。\n- **第三范式：** 在第二范式基础上，消除非主属性对候选键的传递依赖。\n\n**例子：** 员工表保存部门 ID，部门名称放部门表，避免每个员工都重复存一份部门名称。\n\n**注意：** 业务可为性能做有意识的冗余，但要额外处理一致性。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 224
    },
    {
      "id": "bank-RM006",
      "number": "RM006",
      "question": "CHAR 和 VARCHAR 怎么选？长度是字符数还是字节数？",
      "answer": "- CHAR 表达固定长度字符串，VARCHAR 表达可变长度字符串，并需要长度信息。\n\n- 声明中的长度通常按字符数理解，实际存储字节数受字符集影响。\n\n- 固定长度代码可考虑 CHAR。\n\n- 长度变化明显的名称描述通常用 VARCHAR。\n\n**例子：** VARCHAR(20) 不等于永远只占20字节；utf8mb4 下一个字符可能占多个字节。不要为了手机号固定11位，就把它当整数存储。",
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
        "sourceQuestionId": "bank-RM006"
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
      "studyOrder": 225
    },
    {
      "id": "bank-UX005",
      "number": "UX005",
      "question": "MySQL 中 DELETE、TRUNCATE、DROP 有什么区别？能回滚吗？",
      "category": "MySQL",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 操作 | 作用 | MySQL / InnoDB 常见事务语义 |\n| --- | --- | --- |\n| DELETE | 按条件删除记录，保留表 | 显式事务中未提交的修改可回滚 |\n| TRUNCATE | 清空表，不支持 WHERE | 隐式提交，不能按普通 DML 回滚 |\n| DROP TABLE | 删除表及其结构 | 普通 DROP TABLE 隐式提交 |\n\n**注意：** 以上以 MySQL 8.4 为例；已经提交的 DELETE 也不能随意 ROLLBACK。TRUNCATE 可重置自增，外键约束等可能阻止执行。",
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
        "sourceQuestionId": "bank-UX005"
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
      "studyOrder": 226
    },
    {
      "id": "bank-Q07-002",
      "number": "Q07-002",
      "question": "五种常用数据类型如何选择？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 类型 | 适合保存 | 例子 |\n| --- | --- | --- |\n| String | 单值、计数、二进制数据 | 验证码、缓存对象 |\n| Hash | 对象的多个字段 | 用户信息 |\n| List | 有序列表，可重复 | 消息列表 |\n| Set | 不重复成员 | 关注关系、去重 |\n| ZSet | 成员 + 分数，按分数排序 | 积分排行榜 |\n\n**注意：** 外部数据类型与底层编码不是同一回事。",
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
        "sourceQuestionId": "bank-Q07-002"
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
      "studyOrder": 227
    },
    {
      "id": "bank-Q07-015",
      "number": "Q07-015",
      "question": "什么是缓存穿透？一直查不存在的数据怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**缓存穿透：查询的数据本来就不存在，缓存和数据库都查不到。**\n\n- **问题：** 每次都绕过缓存查询数据库。\n- **入口校验：** 拦住明显非法参数。\n- **缓存空值：** 对确认不存在的数据设置较短 TTL。\n- **布隆过滤器：** 先排除明显不存在的键，可能存在时仍查真实数据。\n\n**注意：** 新数据创建后要处理旧的空值缓存，并维护过滤器。",
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
        "sourceQuestionId": "bank-Q07-015"
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
      "studyOrder": 228
    },
    {
      "id": "bank-Q07-016",
      "number": "Q07-016",
      "question": "什么是缓存击穿？一个热点 key 失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**缓存击穿：一个热点 key 失效，很多请求同时回源数据库。**\n\n- **互斥重建：** 让少量请求负责加载，其余限时等待。\n- **二次检查：** 获得重建资格后再次检查缓存，避免重复查询。\n- **提前刷新：** 在到期前更新热点数据。\n- **逻辑过期：** 允许读旧值的业务，可后台刷新。\n\n**注意：** 需要等待上限、失败降级，不能让其他请求无限等锁。",
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
        "sourceQuestionId": "bank-Q07-016"
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
      "studyOrder": 229
    },
    {
      "id": "bank-Q07-017",
      "number": "Q07-017",
      "question": "什么是缓存雪崩？大量缓存同时失效怎么处理？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**缓存雪崩：大量缓存同时失效，或整个缓存服务不可用，数据库承受集中回源。**\n\n- **分散到期：** TTL 加随机扰动，分批预热。\n- **保护数据库：** 限流、熔断、降级，限制回源量。\n- **提高可用性：** 合理部署缓存高可用或多级缓存。\n\n**注意：** 随机 TTL 只能缓解同时到期，不能解决整套 Redis 故障。",
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
        "sourceQuestionId": "bank-Q07-017"
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
      "studyOrder": 230
    },
    {
      "id": "bank-Q07-034",
      "number": "Q07-034",
      "question": "Redis 是什么？和 MySQL 有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | Redis | MySQL |\n| --- | --- | --- |\n| 典型定位 | 内存数据结构存储 | 关系型数据库 |\n| 数据组织 | Key + 多种数据结构 | 表、行、列及关系 |\n| 常见用途 | 缓存、计数、排行榜等 | 业务数据、关联查询、事务处理 |\n| 持久化 | 可配置 RDB、AOF | 存储引擎管理持久数据与恢复 |\n\n**注意：** Redis 不等于只能做缓存，也不能默认代替 MySQL 的关系查询和事务语义。",
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
        "reviewedOn": null
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
      "studyOrder": 231
    },
    {
      "id": "bank-Q07-035",
      "number": "Q07-035",
      "question": "缓存是什么？为什么使用缓存？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**缓存把访问频繁、可复用的数据放在更快的位置，减少重复计算或访问慢数据源。**\n\n- **收益：** 降低延迟，减轻数据库压力。\n- **代价：** 占额外资源，还要维护过期、失效和一致性。\n- **典型流程：** 先查缓存 → 未命中查数据库 → 回填缓存。\n\n**注意：** 不是所有数据都适合容忍陈旧；缓存不可用时仍需限制回源压力。",
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
        "reviewedOn": null
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
      "studyOrder": 232
    },
    {
      "id": "bank-Q07-036",
      "number": "Q07-036",
      "question": "缓存命中、缓存未命中、TTL 分别是什么？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **缓存命中：** 缓存中有可使用的结果。\n- **缓存未命中：** 缓存没有结果或结果已不可用，需要回源等处理。\n- **TTL：** 键的剩余生存时间或有效期设置。\n- **命中率：** 命中请求占缓存查询请求的比例。\n\n**注意：** TTL 到期不代表内存会在同一毫秒被物理释放，也不能当作精确定时器。",
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
        "reviewedOn": null
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
      "studyOrder": 233
    },
    {
      "id": "bank-Q07-037",
      "number": "Q07-037",
      "question": "缓存穿透、击穿、雪崩怎么快速区分？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 问题 | 发生了什么 | 主要处理 |\n| --- | --- | --- |\n| 穿透 | 一直查不存在的数据 | 参数校验、空值缓存、布隆过滤器 |\n| 击穿 | 一个热点 key 失效 | 互斥/合并重建、提前刷新 |\n| 雪崩 | 大量 key 失效或缓存整体故障 | 打散过期、限流降级、保护回源 |\n\n**记住：** 穿透是没有，击穿是一个热点，雪崩是一大片。",
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
        "reviewedOn": null
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
      "studyOrder": 234
    },
    {
      "id": "bank-Q07-001",
      "number": "Q07-001",
      "question": "Redis 为什么快？是不是只有一个线程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **内存读写：** 大部分常见数据访问在内存完成。\n- **结构合适：** 为不同操作提供高效数据结构。\n- **事件驱动：** 高效管理网络连接，减少不必要的等待。\n- **执行路径短：** 核心命令常按主线程串行执行，减少相应竞争。\n\n**注意：** “单线程”不是指整个进程只有一个线程；慢命令、大 key、长脚本仍可能拖慢请求。",
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
        "sourceQuestionId": "bank-Q07-001"
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
      "studyOrder": 235
    },
    {
      "id": "bank-Q07-005",
      "number": "Q07-005",
      "question": "ZSet 为什么同时需要排序结构与哈希索引？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- **大型 ZSet 常用两套结构配合：**哈希索引快速按成员找分数，跳表按分数维护顺序，方便排名和范围查询。\n\n- 小集合可能用紧凑编码。\n\n- 这是为了同时照顾“找一个成员”和“按顺序找一批成员”。",
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
        "sourceQuestionId": "bank-Q07-005"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 236
    },
    {
      "id": "bank-Q07-006",
      "number": "Q07-006",
      "question": "Bitmap、HyperLogLog、布隆过滤器分别适合什么问题？结果精确吗？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "- Bitmap 用每一位记录是否发生。\n\n- HyperLogLog 估算有多少个不同元素。\n\n- Bloom Filter 判断一个值“肯定没有”或“可能有”。\n\n- HLL 有统计误差，布隆过滤器有误判，不能当精确业务去重集合。\n\n**例子：** 签到可用位图；估算独立访客可用 HLL；先拦截明显不存在的商品 ID 可用布隆过滤器，判断可能存在后仍需查真实数据。",
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
        "sourceQuestionId": "bank-Q07-006"
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
      "studyOrder": 237
    },
    {
      "id": "bank-Q07-007",
      "number": "Q07-007",
      "question": "过期删除和内存淘汰有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 过期删除是“时间到了，清理到期 key”。\n\n- 内存淘汰是“内存不够，按策略选 key 删除”。\n\n- 两者触发原因不同。\n\n- 到期不代表内存准点释放，没设 TTL 的 key 也可能被 allkeys 类策略淘汰。",
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
        "sourceQuestionId": "bank-Q07-007"
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
      "studyOrder": 238
    },
    {
      "id": "bank-Q07-008",
      "number": "Q07-008",
      "question": "常见内存淘汰策略有哪些？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- 先记策略范围，再记选谁：allkeys 面向全部可选 key，volatile 只面向设了过期时间的 key。\n\n- LRU 偏向淘汰最近少用的，LFU 偏向淘汰低频的，random 随机，volatile-ttl 偏向更早过期的。\n\n- noeviction 不主动淘汰，相关写入可能报错。",
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
        "sourceQuestionId": "bank-Q07-008"
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
      "studyOrder": 239
    },
    {
      "id": "bank-Q07-009",
      "number": "Q07-009",
      "question": "RDB 与 AOF 的区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 方式 | 保存什么 | 优势 | 代价 |\n| --- | --- | --- | --- |\n| RDB | 某个时刻的数据快照 | 备份、恢复方便 | 快照间的新修改可能丢失 |\n| AOF | 写操作的恢复记录 | 按刷盘策略缩小丢失窗口 | 日志体积、重写和回放有成本 |\n\n**记住：** RDB 像拍照，AOF 像记流水；可组合使用，但都不能脱离故障模型承诺绝不丢数据。",
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
        "sourceQuestionId": "bank-Q07-009"
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
      "studyOrder": 240
    },
    {
      "id": "bank-Q07-011",
      "number": "Q07-011",
      "question": "Redis 主从复制的流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Redis 副本第一次追上主库时，可能需要全量同步。\n\n- 有可用历史偏移和积压缓冲时，可以只补增量。\n\n- 常见主从复制是异步的，主库回复成功时，副本不一定已经收到，因此切主仍可能丢掉已确认的写入。",
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
        "sourceQuestionId": "bank-Q07-011"
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
      "studyOrder": 241
    },
    {
      "id": "bank-Q07-012",
      "number": "Q07-012",
      "question": "Sentinel 的职责是什么？",
      "category": "Redis",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- Sentinel 负责监控主从、判断故障、组织切主，并告诉客户端新主是谁。\n\n- 它解决高可用，不负责把数据分片扩容。\n\n- 哨兵节点数量和主从复制可靠性是两件事，多哨兵不代表数据强一致。",
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
        "sourceQuestionId": "bank-Q07-012"
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
      "studyOrder": 242
    },
    {
      "id": "bank-Q07-013",
      "number": "Q07-013",
      "question": "Redis Cluster 如何分片和路由？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Redis Cluster 把 key 映射到 16384 个槽，再把槽分配给不同节点，实现分片。\n\n- 客户端根据槽找到节点。\n\n- 多 key 操作通常要求同槽，可以用 hash tag 让相关 key 落在一起。\n\n- Cluster 和 Sentinel 的用途不同。\n\n**例子：** order:{123}:info 与 order:{123}:lock 使用相同的 hash tag 123，可方便相关操作落在同一槽。",
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
        "sourceQuestionId": "bank-Q07-013"
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
      "studyOrder": 243
    },
    {
      "id": "bank-Q07-018",
      "number": "Q07-018",
      "question": "Cache Aside 的读取和写入流程？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Cache Aside 的读流程是先查缓存，没命中再查数据库并回填。\n\n- 写流程通常先提交数据库，再删除相关缓存，等下次读重建。\n\n- 它一般追求最终一致，不天然保证每次读都立即拿到最新值。",
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
        "sourceQuestionId": "bank-Q07-018"
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
      "studyOrder": 244
    },
    {
      "id": "bank-Q07-019",
      "number": "Q07-019",
      "question": "先更新数据库再删缓存就绝对一致了吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先更新数据库再删缓存，也存在旧数据回填、删缓存失败等窗口。\n\n- 可用可靠失效事件、重试、TTL、版本比较或按 key 协调减少问题。\n\n- 严格一致的查询要走权威数据源或更强协调，不能只靠延迟双删承诺绝对一致。\n\n**例子：** 读线程刚读到旧值，写线程更新并删除缓存，读线程随后把旧值写回缓存，就又留下旧数据。",
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
        "sourceQuestionId": "bank-Q07-019"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 245
    },
    {
      "id": "bank-Q07-020",
      "number": "Q07-020",
      "question": "如何确定缓存 TTL？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- TTL 按“数据多久变、最多允许旧多久、回源有多贵”来定，而不是全部设半小时。\n\n- 热点可提前刷新，过期时间适度打散，再观察命中率和回源压力调整。\n\n- 余额、权限等准确性要求高的数据不能随便读旧。",
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
        "sourceQuestionId": "bank-Q07-020"
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
      "studyOrder": 246
    },
    {
      "id": "bank-Q07-021",
      "number": "Q07-021",
      "question": "Redis 分布式锁最基本怎么写？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 用 SET key 唯一标识 NX PX 超时 来原子加锁。\n\n- 成功才执行业务。\n\n- 释放时必须原子地判断标识仍是自己的，再删除，通常用 Lua。\n\n- TTL 防止进程死后永久占锁，但也带来业务没做完锁却过期的风险。\n\n**例子：** 锁值不能大家都写 1。A 超时后 B 拿到新锁，A 再直接 DEL 就可能把 B 的锁删掉。",
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
        "sourceQuestionId": "bank-Q07-021"
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
      "studyOrder": 247
    },
    {
      "id": "bank-Q07-022",
      "number": "Q07-022",
      "question": "分布式锁已经过期，业务还在执行怎么办？续期能完全解决吗？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 可在租约到期前按持有者身份续期，但续期可能因网络或长暂停失败。\n\n- 旧任务此时可能仍继续写，所以关键操作还要数据库版本、唯一约束或 fencing token 保护。\n\n- 看门狗降低过期概率，不代表解决所有故障。",
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
        "sourceQuestionId": "bank-Q07-022"
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
      "studyOrder": 248
    },
    {
      "id": "bank-Q07-024",
      "number": "Q07-024",
      "question": "Redis 事务、WATCH 和 Lua 有什么区别？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- MULTI/EXEC 把一组命令排队后执行，WATCH 在执行前检测相关 key 是否变过。\n\n- Lua 把判断和修改放到服务端一起执行。\n\n- **它们都不能简单等同数据库事务回滚：**执行中报错，之前完成的写入可能还在。",
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
        "sourceQuestionId": "bank-Q07-024"
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
      "studyOrder": 249
    },
    {
      "id": "bank-Q07-026",
      "number": "Q07-026",
      "question": "big key 与 hot key 如何排查？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- big key 是“一个 key 的值太大或成员太多”，hot key 是“一个 key 被访问太频繁”。\n\n- 前者重在拆分、限大小和避免重操作，后者重在缓存、请求合并、分摊和限流。\n\n- 先看瓶颈是内存、CPU 还是带宽。\n\n**例子：** 一个几十 MB 的列表是 big key；一个只有十几个字节却每秒访问很多次的计数器，也可以是 hot key。",
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
        "sourceQuestionId": "bank-Q07-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 250
    },
    {
      "id": "bank-Q07-027",
      "number": "Q07-027",
      "question": "SCAN 比 KEYS 好在哪里？UNLINK 呢？",
      "category": "Redis",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- KEYS 一次扫描匹配键，大库上可能长时间阻塞。\n\n- SCAN 分批迭代，单次压力更可控，但可能重复，也不是一致性快照。\n\n- UNLINK 把部分内存释放工作放到后台，降低同步删除大对象的阻塞风险。",
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
        "sourceQuestionId": "bank-Q07-027"
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
      "studyOrder": 251
    },
    {
      "id": "bank-Q07-028",
      "number": "Q07-028",
      "question": "Redis 如何实现限流和排行榜？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 限流时要把计数与过期设置一起原子完成，避免计数成功却没设 TTL。\n\n- 固定窗口可能有边界突刺，更平滑的需求可用滑动窗口或令牌桶。\n\n- 排行榜通常用 ZSet 更新分数、查名次，再明确同分规则和时间窗口。",
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
        "sourceQuestionId": "bank-Q07-028"
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
      "studyOrder": 252
    },
    {
      "id": "bank-UX007",
      "number": "UX007",
      "question": "Redis 的 key 设置过期后，为什么更新值又变成永不过期？",
      "category": "Redis",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 普通 SET 成功覆盖值时，原来的过期时间会被清除。\n\n- 更新时仍要过期，就在 SET 中同时指定 EX/PX。\n\n- 需要保留原来的到期时刻，可用 Redis 6.0 起提供的 KEEPTTL。\n\n- 不要默认“第一次设过 TTL，以后都会自动保留”。",
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
        "sourceQuestionId": "bank-UX007"
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
      "studyOrder": 253
    },
    {
      "id": "bank-Q08-001",
      "number": "Q08-001",
      "question": "为什么使用 MQ？会引入什么代价？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "**MQ（消息队列）让生产者和消费者通过消息异步协作。**\n\n- **异步：** 非关键后续步骤不阻塞主链路。\n- **解耦：** 生产者不需要直接知道所有消费者。\n- **削峰：** 高峰任务先排队，在下游承受范围内处理。\n- **代价：** 要处理消息丢失、重复、顺序、积压和一致性问题。\n\n**注意：** 队列不能无限堆积，也不能凭空提高下游处理能力。",
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
        "sourceQuestionId": "bank-Q08-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 254
    },
    {
      "id": "bank-Q08-028",
      "number": "Q08-028",
      "question": "消息生产者、消费者、队列分别是什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **生产者：** 发送消息的一方。\n- **消息服务：** 接收、保存或分发消息的服务端。\n- **队列 / Topic：** 组织消息的通道；具体模型因产品而异。\n- **消费者：** 接收消息并执行业务的一方。\n\n**例子：** 下单服务发送“订单已支付”，积分服务消费消息后发积分。\n\n**注意：** 接收消息不等于业务已成功完成，确认时机要设计好。",
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
        "reviewedOn": null
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
      "studyOrder": 255
    },
    {
      "id": "bank-Q08-029",
      "number": "Q08-029",
      "question": "同步调用和异步调用有什么区别？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **同步调用：** 调用方通常等待操作完成，再继续处理依赖其结果的逻辑。\n- **异步调用：** 提交后可先处理其他工作，结果由回调、Future 或消息等方式取得。\n- **收益：** 异步可减少阻塞、拆开执行时机。\n- **代价：** 错误处理、状态跟踪、超时和一致性更复杂。\n\n**注意：** 异步不一定更快，也不代表任务一定执行在新线程里。",
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
        "reviewedOn": null
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
      "studyOrder": 256
    },
    {
      "id": "bank-Q08-002",
      "number": "Q08-002",
      "question": "Kafka、RabbitMQ、RocketMQ 怎么选？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- Kafka 更常用于高吞吐事件流和日志回放。\n\n- RabbitMQ 强调灵活路由和工作队列。\n\n- RocketMQ 常用于业务消息、事务消息和延时顺序场景。\n\n- 选型要说清自己的吞吐、延迟、顺序、可靠性和运维需求，而不是只说哪个最快。",
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
        "sourceQuestionId": "bank-Q08-002"
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
      "studyOrder": 257
    },
    {
      "id": "bank-Q08-003",
      "number": "Q08-003",
      "question": "最多一次、至少一次、恰好一次交付分别意味着什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **最多一次：**可能丢，但不靠重投补。\n\n- **至少一次：**会重试，所以可能重复。\n\n- **恰好一次：**必须说明保证到哪个边界。\n\n- 业务常采用“至少一次投递+幂等消费”，让消息可以多收，但同一业务结果只生效一次。\n\n**例子：** 收到两次发货消息不一定有问题，真正要求的是同一个订单不能实际发两次货。",
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
        "sourceQuestionId": "bank-Q08-003"
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
      "studyOrder": 258
    },
    {
      "id": "bank-Q08-004",
      "number": "Q08-004",
      "question": "怎样保证消息尽量不丢？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **生产者：** 确认发送结果，失败使用可追踪的可靠重试。\n2. **消息服务：** 按产品配置持久化、副本和确认机制。\n3. **消费者：** 业务可靠落库后，再 ACK 或提交消费位移。\n4. **兜底：** 监控失败与积压，用对账、补偿发现遗漏。\n\n**注意：** 确认丢失时仍可能重复投递，所以要配合幂等；只开启持久化不能保证整条链路不丢。",
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
        "sourceQuestionId": "bank-Q08-004"
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
      "studyOrder": 259
    },
    {
      "id": "bank-Q08-005",
      "number": "Q08-005",
      "question": "消息重复消费怎样处理？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 给消息一个稳定事件 ID，在同一数据库事务里完成“插入去重记录+业务修改”。\n\n- 重复事件命中唯一约束后，不再重复产生业务效果。\n\n- 数据库提交后再确认消息。\n\n- 不要先用 Redis 标成已消费，再慢慢写库。\n\n**例子：** 扣款已经落库，但 ACK 前崩溃，消息会重来；去重记录和扣款同事务提交，重来时就知道已经处理过。",
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
        "sourceQuestionId": "bank-Q08-005"
      },
      "isNew": false,
      "practiceCode": "```text\nbegin database transaction\n  插入 processed_event(event_id)，event_id有唯一约束\n  若已存在：退出当前尝试，查询/确认已有业务完成状态\n  若首次：执行业务更新\ncommit database transaction\n确认MQ消息或推进连续已完成offset\n```\n\n去重记录和业务修改必须同事务成功。两个关键故障演练：\n\n1. 业务更新中途崩溃：事务回滚，重投后能够重新处理。\n2. 数据库提交后、MQ确认前崩溃：重投但唯一事件记录使业务不会再次生效。\n\n如果副作用是外部接口而不是本数据库，以上事务不能包住它，需要外部幂等键、持久状态和补偿/对账。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 260
    },
    {
      "id": "bank-Q08-006",
      "number": "Q08-006",
      "question": "消息顺序如何保证？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **先确定需要谁的顺序：**通常只要求同一订单或用户内部有序。\n\n- 把相同业务 key 路由到同一分区/队列，再串行处理该 key。\n\n- 不同 key 可以并行。\n\n- 消息拿到的顺序，不等于开多线程后的完成顺序。\n\n**例子：** 订单“创建→支付→发货”不能随意倒序；不同订单之间通常不必为了全局顺序一起排队。",
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
        "sourceQuestionId": "bank-Q08-006"
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
      "studyOrder": 261
    },
    {
      "id": "bank-Q08-007",
      "number": "Q08-007",
      "question": "消息积压怎么排查和恢复？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **先看为什么积压：**生产突然变多、消费变慢、反复失败，还是只有某个分区热点。\n\n- 下游有余量且有并行空间时才扩消费者。\n\n- 被数据库或顺序限制时，要先修瓶颈。\n\n- 恢复要限速、保幂等，不可直接跳过历史消息。",
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
        "sourceQuestionId": "bank-Q08-007"
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
      "studyOrder": 262
    },
    {
      "id": "bank-Q08-008",
      "number": "Q08-008",
      "question": "重试队列与死信队列有什么作用？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 临时故障进入有限重试，采用退避和抖动，别立刻反复轰炸下游。\n\n- 多次失败或确定格式错误的消息，进入死信/异常队列，保留原因并告警。\n\n- 死信队列还需要修复和受控回放，不是丢进去就不管。",
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
        "sourceQuestionId": "bank-Q08-008"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 263
    },
    {
      "id": "bank-Q08-009",
      "number": "Q08-009",
      "question": "延迟消息怎么实现？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 延迟消息是“到指定时间后允许处理”，可用 MQ 的对应功能，或用任务表扫描、时间轮等实现。\n\n- 到期不等于准点执行，消费积压还会延后。\n\n- 订单超时关闭必须重新检查当前状态，并有补偿扫描。",
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
        "sourceQuestionId": "bank-Q08-009"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 264
    },
    {
      "id": "bank-Q08-012",
      "number": "Q08-012",
      "question": "Kafka 的 topic、partition、offset、consumer group 是什么？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- Topic 是消息主题，Partition 是主题下的有序日志分片，Offset 是该分片内的位置，Consumer Group 是一起分工消费的一组消费者。\n\n- 传统组内同一分区通常由一个消费者负责，不同组可以各自消费同一份日志。\n\n**例子：** 一个主题 3 个分区，同组开 5 个消费者，通常有 2 个没有分区可处理；多开消费者不一定继续提速。",
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
        "sourceQuestionId": "bank-Q08-012"
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
      "studyOrder": 265
    },
    {
      "id": "bank-Q08-013",
      "number": "Q08-013",
      "question": "Kafka 为什么吞吐高？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Kafka 高吞吐主要来自顺序追加、批量处理、页缓存、压缩和分区并行，部分路径还有零拷贝优化。\n\n- 不是因为“消息完全不落盘”。\n\n- 批量越大可能吞吐更好，但等攒批也可能增加单条延迟。",
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
        "sourceQuestionId": "bank-Q08-013"
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
      "studyOrder": 266
    },
    {
      "id": "bank-Q08-020",
      "number": "Q08-020",
      "question": "RabbitMQ 的 exchange、queue、binding、routing key？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 生产者先把消息发到 Exchange，交换机按 Binding 和 Routing Key 路由到 Queue，消费者再从队列取。\n\n- Direct 精确匹配，Topic 按模式匹配，Fanout 广播，Headers 按头匹配。\n\n- 发到交换机不代表一定路由进目标队列。",
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
        "sourceQuestionId": "bank-Q08-020"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 267
    },
    {
      "id": "bank-Q08-021",
      "number": "Q08-021",
      "question": "RabbitMQ publisher confirm 与 consumer ACK 的区别？",
      "category": "消息队列 MQ",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- Publisher Confirm 回答生产者“Broker 是否接收处理了发布”。\n\n- Consumer ACK 回答 Broker“消费者是否完成了这次交付”。\n\n- 前者不代表下游业务已经成功。\n\n- 还要单独处理无法路由的消息，不能只看发送调用没报错。",
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
        "sourceQuestionId": "bank-Q08-021"
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
      "studyOrder": 268
    },
    {
      "id": "bank-Q09-003",
      "number": "Q09-003",
      "question": "TCP 与 UDP 的区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 对比项 | TCP | UDP |\n| --- | --- | --- |\n| 连接 | 面向连接 | 无连接 |\n| 可靠性 | 提供可靠、有序的字节流 | 不保证送达和顺序 |\n| 数据边界 | 没有应用消息边界 | 保留报文边界 |\n| 开销与场景 | 连接与可靠性控制有开销；常见于 HTTP 等 | 头部较小，适合允许丢失或自行实现可靠性的应用 |\n\n**注意：** UDP 不等于应用一定不可靠，上层协议仍可自行补充可靠性。",
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
        "sourceQuestionId": "bank-Q09-003"
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
      "studyOrder": 269
    },
    {
      "id": "bank-Q09-010",
      "number": "Q09-010",
      "question": "HTTP 常见方法与幂等性怎么理解？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 方法 | 通常用途 | 是否具有幂等语义 |\n| --- | --- | --- |\n| GET | 读取资源 | 是 |\n| HEAD | 获取响应头，不返回响应内容 | 是 |\n| POST | 提交数据，由资源处理 | 不保证 |\n| PUT | 创建或整体替换目标资源 | 是 |\n| DELETE | 删除目标资源 | 是 |\n| PATCH | 部分修改 | 取决于补丁语义 |\n\n**幂等：** 重复相同请求，预期资源效果相同，不要求状态码每次相同。业务 POST 可另做幂等控制。",
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
        "sourceQuestionId": "bank-Q09-010"
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
      "studyOrder": 270
    },
    {
      "id": "bank-Q09-011",
      "number": "Q09-011",
      "question": "常见 HTTP 状态码是什么意思？401/403、502/504 怎样区分？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 状态码 | 含义 |\n| --- | --- |\n| 200 / 201 / 204 | 成功 / 已创建 / 成功但没有响应内容 |\n| 301 / 302 / 304 | 永久重定向 / 临时重定向 / 协商缓存未修改 |\n| 400 / 404 / 405 | 请求有误 / 资源未找到 / 不支持该方法 |\n| 401 / 403 | 缺少有效认证 / 拒绝访问 |\n| 409 / 415 / 429 | 资源状态冲突 / 媒体类型不支持 / 请求过多 |\n| 500 / 502 / 503 / 504 | 服务内部错误 / 上游响应无效 / 暂不可用 / 上游超时 |\n\n**重点：** 401 不等于 403；502 不等于 504。",
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
        "sourceQuestionId": "bank-Q09-011"
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
      "studyOrder": 271
    },
    {
      "id": "bank-Q09-017",
      "number": "Q09-017",
      "question": "Cookie、Session、Token、JWT 的关系？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 概念 | 作用 | 通常存在哪里 |\n| --- | --- | --- |\n| Cookie | 浏览器保存并按规则携带的数据 | 客户端 |\n| Session | 服务端保存会话状态 | 服务端，客户端常只持有会话 ID |\n| Token | 代表身份或授权的凭证 | 客户端保存，请求时携带 |\n| JWT | 一种令牌格式，不等于所有 Token | 可携带声明，通常有签名保护 |\n\n**注意：** JWT 的载荷通常可解码读取，签名不等于加密；验签通过后仍需检查过期和资源权限。",
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
        "sourceQuestionId": "bank-Q09-017"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 272
    },
    {
      "id": "bank-Q09-030",
      "number": "Q09-030",
      "question": "HTTP 是什么？为什么说 HTTP 是无状态的？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **HTTP：** 应用层的请求—响应协议，用于访问资源和传输表示。\n- **无状态：** 协议语义不要求服务端自动保存前后请求的会话关系。\n- **保存登录态：** 可通过 Cookie、Session、Token 等机制额外实现。\n\n**注意：** 无状态不等于不能登录，也不等于每个请求必须新建 TCP 连接。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 273
    },
    {
      "id": "bank-Q09-031",
      "number": "Q09-031",
      "question": "HTTP 请求和响应通常由哪些部分组成？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**按 HTTP/1.1 的文本形式理解：**\n\n- **请求行：** 请求方法、请求目标、协议版本。\n- **请求头：** Host、Content-Type、Authorization 等元信息。\n- **请求体：** 按请求语义携带数据，例如 JSON。\n- **响应：** 状态行、响应头，以及可选响应内容。\n\n**注意：** HTTP/2、HTTP/3 使用不同的帧和字段表示，不能把 HTTP/1.1 文本格式当成所有版本的线缆格式。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 274
    },
    {
      "id": "bank-Q09-032",
      "number": "Q09-032",
      "question": "HTTP 和 HTTPS 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- **HTTP：** 未加 TLS 的 HTTP 通信不提供传输层加密保护。\n- **HTTPS：** 使用 TLS 保护 HTTP 通信。\n- **主要保障：** 传输机密性、完整性，以及基于证书的服务端身份验证。\n\n**注意：** HTTPS 不替代业务鉴权、输入校验和数据库权限；服务端内部日志也仍需避免泄露敏感信息。",
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
        "reviewedOn": null
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
      "studyOrder": 275
    },
    {
      "id": "bank-Q09-033",
      "number": "Q09-033",
      "question": "什么是接口幂等？GET、POST 和业务幂等有什么关系？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**幂等：重复执行同一请求，产生的预期业务效果与执行一次相同。**\n\n- **HTTP 语义：** GET、PUT、DELETE 等有幂等语义；POST 默认不保证。\n- **业务实现：** POST 也可以通过幂等键、唯一约束等避免重复副作用。\n- **常见场景：** 重复提交订单、重复支付回调、消息重试。\n\n**注意：** 幂等不要求每次状态码或返回文本完全一样；不能只靠前端禁用按钮。",
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
        "reviewedOn": null
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
      "studyOrder": 276
    },
    {
      "id": "bank-Q09-035",
      "number": "Q09-035",
      "question": "Content-Type 有什么作用？常见值有哪些？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "**Content-Type 声明消息内容的媒体类型，帮助接收方选择正确的解析方式。**\n\n| 常见值 | 用途 |\n| --- | --- |\n| application/json | JSON 数据 |\n| application/x-www-form-urlencoded | 常见表单键值 |\n| multipart/form-data | 文件与字段组合上传 |\n| text/plain | 纯文本 |\n\n**注意：** 请求实际是 JSON，但类型或格式不匹配，可能导致参数解析失败或 415。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 277
    },
    {
      "id": "bank-Q09-001",
      "number": "Q09-001",
      "question": "输入 URL 到页面或接口返回发生什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 输入 URL 后，通常先查 DNS 找地址，按需要建立连接，HTTPS 再做 TLS 握手，然后发 HTTP 请求。\n\n- 请求经过代理、网关和应用处理后返回，浏览器再解析渲染。\n\n- 缓存和连接可能复用，HTTP/3 也不走普通 TCP 握手路线。",
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
        "sourceQuestionId": "bank-Q09-001"
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
      "studyOrder": 278
    },
    {
      "id": "bank-Q09-002",
      "number": "Q09-002",
      "question": "OSI 七层与 TCP/IP 怎么对应？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- OSI 七层从下往上是物理、链路、网络、传输、会话、表示、应用。\n\n- TCP/IP 通常简化成链路、网际、传输、应用。\n\n- **记核心职责：**IP 找网络地址，TCP/UDP 做传输，HTTP/DNS 定义应用交互，端口区分传输端点。",
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
        "sourceQuestionId": "bank-Q09-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 279
    },
    {
      "id": "bank-Q09-004",
      "number": "Q09-004",
      "question": "TCP 为什么三次握手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **客户端 → 服务端：** 发送 SYN，发起连接并同步初始序列号。\n2. **服务端 → 客户端：** 返回 SYN + ACK，确认客户端并同步自己的序列号。\n3. **客户端 → 服务端：** 返回 ACK，确认服务端的序列号。\n\n**为什么是三次：** 双方要完成序列号确认，并避免历史连接请求轻易建立无效连接。\n\n**记住：** SYN → SYN+ACK → ACK。",
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
        "sourceQuestionId": "bank-Q09-004"
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
      "studyOrder": 280
    },
    {
      "id": "bank-Q09-005",
      "number": "Q09-005",
      "question": "TCP 为什么通常四次挥手？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- TCP 的两个发送方向可以独立关闭。\n\n- 一方 FIN 表示“我不再发”，对方先 ACK。\n\n- 对方还有数据就继续发，结束后再 FIN，最后得到 ACK，因此通常四次。\n\n- 若合适，ACK 和 FIN 也能合并。\n\n**例子：** A 说“我的话说完了”，不代表 B 也说完了，所以确认对方结束和宣布自己结束可能是两步。",
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
        "sourceQuestionId": "bank-Q09-005"
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
      "studyOrder": 281
    },
    {
      "id": "bank-Q09-006",
      "number": "Q09-006",
      "question": "TIME_WAIT 与 CLOSE_WAIT 有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- TIME_WAIT 通常出现在主动关闭方，用来处理最后 ACK 丢失和旧报文影响。\n\n- CLOSE_WAIT 表示已收到对方 FIN，但本地应用还没关闭。\n\n- 大量 CLOSE_WAIT 先查连接有没有正确关，大量 TIME_WAIT 先看短连接和端口压力。",
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
        "sourceQuestionId": "bank-Q09-006"
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
      "studyOrder": 282
    },
    {
      "id": "bank-Q09-007",
      "number": "Q09-007",
      "question": "TCP 怎么保证可靠和有序？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- TCP 用序号、确认、校验和、重传、重排和去重，尽量保证字节按序可靠到达。\n\n- 但“字节到达”不等于“业务已经成功”，网络超时也不等于服务器没做。\n\n- 应用仍需幂等和结果查询。\n\n**例子：** 订单已保存，只是响应在路上丢了；客户端重试可能重复下单，不能指望 TCP 自动替业务去重。",
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
        "sourceQuestionId": "bank-Q09-007"
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
      "studyOrder": 283
    },
    {
      "id": "bank-Q09-008",
      "number": "Q09-008",
      "question": "TCP 滑动窗口、流量控制、拥塞控制分别防什么问题？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 滑动窗口让发送方不用每发一点就等一次确认。\n\n- 流量控制照顾接收方，别让对方缓冲区装不下。\n\n- 拥塞控制照顾网络，别把传输路径塞满。\n\n- 实际发送量要同时考虑接收窗口和拥塞窗口。",
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
        "sourceQuestionId": "bank-Q09-008"
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
      "studyOrder": 284
    },
    {
      "id": "bank-Q09-009",
      "number": "Q09-009",
      "question": "TCP 粘包和拆包是什么？怎么解决？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- TCP 传的是连续字节，没有“每次 write 就对应一次 read”的保证。\n\n- 一次读取可能只有半条消息，也可能包含多条。\n\n- 应用必须定义消息边界，例如固定长度、分隔符或长度头，并缓存不完整部分。\n\n**例子：** 发送 \"hello\" 和 \"world\" 两次，接收方可能一次读到 \"helloworld\"，也可能分成多次；这是字节流的正常行为。",
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
        "sourceQuestionId": "bank-Q09-009"
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
      "studyOrder": 285
    },
    {
      "id": "bank-Q09-012",
      "number": "Q09-012",
      "question": "HTTP 强缓存与协商缓存是什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- 强缓存是在有效期内直接用本地副本。\n\n- 协商缓存是先问服务器“这份还能用吗”，没变则返回 304。\n\n- 常用 Cache-Control、ETag 和 Last-Modified。\n\n- no-cache 不是不许保存，而是复用前要验证。\n\n- no-store 才是不应存储。",
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
        "sourceQuestionId": "bank-Q09-012"
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
      "studyOrder": 286
    },
    {
      "id": "bank-Q09-013",
      "number": "Q09-013",
      "question": "HTTP/1.1、HTTP/2、HTTP/3 有何变化？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- HTTP/1.1 可以复用连接。\n\n- HTTP/2 加入二进制分帧、多路复用和头压缩，但底层 TCP 丢包仍会影响多个流。\n\n- HTTP/3 基于 QUIC，减少这类跨流传输阻塞。\n\n- 协议更先进，不代表数据库和业务代码就自动变快。",
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
        "sourceQuestionId": "bank-Q09-013"
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
      "studyOrder": 287
    },
    {
      "id": "bank-Q09-014",
      "number": "Q09-014",
      "question": "HTTPS 与 TLS 保护什么？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- HTTPS 是 HTTP 加 TLS。\n\n- TLS 主要保护传输的机密性、完整性和身份认证：证书帮助确认身份，握手建立密钥，正文通常用对称加密。\n\n- 不是所有数据都直接用服务器公钥加密，也不保证网站业务本身可靠。",
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
        "sourceQuestionId": "bank-Q09-014"
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
      "studyOrder": 288
    },
    {
      "id": "bank-Q09-016",
      "number": "Q09-016",
      "question": "DNS、CDN、负载均衡各起什么作用？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- DNS 负责把域名解析成地址等记录，CDN 把内容放到更靠近用户的节点，负载均衡把请求分配给后端实例。\n\n- 四层常按传输连接信息转发，七层能按 HTTP 路径或请求头路由。\n\n- DNS 改动还受缓存影响。",
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
        "sourceQuestionId": "bank-Q09-016"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 289
    },
    {
      "id": "bank-Q09-018",
      "number": "Q09-018",
      "question": "CORS、CSRF、XSS 分别是什么？",
      "category": "计算机网络",
      "priority": "P1",
      "kind": "常见对比",
      "answer": "- CORS 管浏览器是否允许网页跨源读取响应。\n\n- CSRF 是借浏览器自动带凭证来诱导操作。\n\n- XSS 是把不可信内容当脚本执行。\n\n- 防法分别涉及跨源规则、CSRF token/SameSite、输出编码等，不能用“允许跨域”一起解决。",
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
        "sourceQuestionId": "bank-Q09-018"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 290
    },
    {
      "id": "bank-Q09-020",
      "number": "Q09-020",
      "question": "长轮询、SSE 和 WebSocket 有什么区别？流式回答怎么选？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "| 方式 | 通信方向 | 特点 |\n| --- | --- | --- |\n| 长轮询 | 客户端发请求，服务端等待事件后响应 | 返回后需要再次请求 |\n| SSE | 服务端 → 客户端 | 适合文本事件流，如逐步返回答案 |\n| WebSocket | 双向 | 适合持续双向消息，如聊天与实时协作 |\n\n**选择：** 主要单向推送可考虑 SSE；需要频繁双向通信可考虑 WebSocket。",
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
        "sourceQuestionId": "bank-Q09-020"
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
      "studyOrder": 291
    },
    {
      "id": "bank-Q09-021",
      "number": "Q09-021",
      "question": "一次 RPC 与普通 HTTP 调用有什么区别？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- RPC 是“调用远程服务方法”的交互方式，HTTP 是一种应用层协议，RPC 可以基于 HTTP，所以二者不是对立选项。\n\n- RPC 还需要契约、序列化、超时和服务治理。\n\n- 网络调用必须处理结果未知和部分失败。",
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
        "sourceQuestionId": "bank-Q09-021"
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
      "studyOrder": 292
    },
    {
      "id": "bank-Q09-024",
      "number": "Q09-024",
      "question": "连接失败、连接超时、读超时怎么排查？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 连接拒绝，先查服务是否监听正确地址和端口。\n\n- 连接超时，查网络、路由、防火墙及负载。\n\n- 读超时，查连接建立后对方处理或传输为什么慢。\n\n- 结合日志和分阶段耗时，不要只用 ping 通就断言接口正常。",
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
        "sourceQuestionId": "bank-Q09-024"
      },
      "isNew": false,
      "practiceCode": "```bash\ncurl -o /dev/null -sS --connect-timeout 3 --max-time 10 \\\n  -w 'dns=%{time_namelookup} connect=%{time_connect} tls=%{time_appconnect} first_byte=%{time_starttransfer} total=%{time_total}\\n' \\\n  https://example.com\n```\n\n这些多数是**从请求开始算的累计时间点**，不是互相独立的阶段时长。粗略阶段成本需相减，并考虑连接复用、代理、重定向与协议差异。目标域名是演示入口，实际排错替换成已授权的业务接口。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 293
    },
    {
      "id": "bank-Q09-025",
      "number": "Q09-025",
      "question": "重试、超时、熔断怎么配合？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先给整次请求设总时间预算，再分配各层超时。\n\n- 只对可恢复且满足幂等要求的失败做有限重试。\n\n- 连续异常时熔断，恢复时小流量试探。\n\n- 各层都重试会放大流量，必须明确由哪一层负责。\n\n**例子：** 三层每层最多尝试 3 次，最坏可能放大成 27 次下游调用，不是简单多了 3 次。",
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
        "sourceQuestionId": "bank-Q09-025"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 294
    },
    {
      "id": "bank-Q09-034",
      "number": "Q09-034",
      "question": "什么是跨域？后端通常怎么处理？",
      "category": "计算机网络",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **同源：** 浏览器按协议、主机和端口判断是否同源。\n- **跨域问题：** 跨源访问受到浏览器同源策略限制，并非两个服务器之间不能通信。\n- **常见处理：** 后端按受信任来源配置 CORS，或通过同源网关/反向代理访问。\n- **预检：** 某些请求会先发送 OPTIONS 检查是否允许。\n\n**注意：** 不能不加判断地反射任意 Origin；CORS 也不是用户权限校验机制。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 295
    },
    {
      "id": "bank-Q10-018",
      "number": "Q10-018",
      "question": "排查端口占用与网络连接常用什么命令？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 目的 | 常用命令 |\n| --- | --- |\n| 查监听端口和进程 | `ss -lntp` |\n| 查指定端口 | `lsof -i :8080` |\n| 查进程 | `ps -ef`、`ps aux` |\n| 查资源占用 | `top` |\n| 测试 HTTP 接口 | `curl -i http://localhost:8080/health` |\n\n**注意：** 命令是否可用、能否显示进程信息取决于环境和权限；先确认 PID，再决定是否停止进程。",
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
        "sourceQuestionId": "bank-Q10-018"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 296
    },
    {
      "id": "bank-Q10-019",
      "number": "Q10-019",
      "question": "如何看日志并定位某一次失败请求？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "1. **看最近日志：** `tail -n 100 app.log`。\n2. **实时跟踪：** `tail -f app.log`。\n3. **定位关键字：** `grep -n 'ERROR' app.log`。\n4. **查看前后文：** `grep -n -C 5 'traceId值' app.log`。\n5. **串起链路：** 按时间、请求 ID、业务 ID 找到输入、调用和异常原因。\n\n**注意：** 避免打印密码、令牌和客户隐私；别只看到最后一行报错就断定根因。",
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
        "sourceQuestionId": "bank-Q10-019"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 297
    },
    {
      "id": "bank-Q10-028",
      "number": "Q10-028",
      "question": "Linux 中查看目录、切换目录、查看文件的常用命令有哪些？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 目的 | 命令 |\n| --- | --- |\n| 当前目录 | pwd |\n| 列出文件 | ls、ls -al |\n| 切换目录 | cd 目录、cd .. |\n| 新建目录 | mkdir 目录 |\n| 查看短文件 | cat 文件 |\n| 分页查看 | less 文件 |\n| 看首尾 | head、tail |\n\n**注意：** 修改或删除前先确认当前路径；不要在不清楚用途时执行递归删除。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 298
    },
    {
      "id": "bank-Q10-029",
      "number": "Q10-029",
      "question": "Git 的 add、commit、push、pull 分别做什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **add：** 把当前修改加入暂存区。\n- **commit：** 把暂存内容记录为本地提交。\n- **push：** 把本地提交推送到远端分支。\n- **pull：** 获取远端更新并按配置合并或变基。\n\n**记住：** 改文件 → add → commit → push；pull 不等于“无条件覆盖本地”。\n\n**注意：** 冲突需要检查并解决，不要随意丢弃他人的修改。",
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
        "reviewedOn": "2026-09-20"
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
      "studyOrder": 299
    },
    {
      "id": "bank-Q10-030",
      "number": "Q10-030",
      "question": "Maven 是什么？pom.xml 有什么作用？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **Maven：** Java 项目常用的构建与依赖管理工具。\n- **pom.xml：** 描述项目坐标、依赖、插件与构建配置。\n- **依赖管理：** 解析直接依赖及传递依赖，协调版本。\n- **常见命令：** `mvn test` 测试，`mvn package` 打包，`mvn dependency:tree` 查看依赖树。\n\n**注意：** dependencyManagement 管理版本约束，不是声明后就自动引入所有依赖。",
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
        "reviewedOn": null
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
      "studyOrder": 300
    },
    {
      "id": "bank-LX020",
      "number": "LX020",
      "question": "Git 回退用 revert 还是 reset？",
      "answer": "- revert 是“新增一次反向提交”，保留之前的历史，适合已经共享出去的提交。\n\n- reset 是“把当前分支指针挪回去”，适合整理本地历史。\n\n- 不同模式还会影响暂存区和工作区。\n\n- 共享分支通常优先 revert，尤其不要不看状态就 reset --hard。",
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
        "sourceQuestionId": "bank-LX020"
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
      "studyOrder": 301
    },
    {
      "id": "bank-Q10-001",
      "number": "Q10-001",
      "question": "用户态与内核态为什么分开？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 用户态是普通应用运行的受限环境，内核态可以操作内存管理、设备等特权资源。\n\n- 应用通过系统调用受控地请求内核服务。\n\n- 这样能隔离错误和保护系统，但切换和数据处理也会有成本。",
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
        "sourceQuestionId": "bank-Q10-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 302
    },
    {
      "id": "bank-Q10-002",
      "number": "Q10-002",
      "question": "进程与线程共享哪些资源？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 同一进程里的线程通常共享地址空间、堆和打开的文件描述符。\n\n- 每个线程有自己的栈、寄存器和执行状态。\n\n- 不同进程通常有独立地址空间，通信要靠 IPC。\n\n- 线程轻一些，但共享状态出错容易影响整个进程。",
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
        "sourceQuestionId": "bank-Q10-002"
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
      "studyOrder": 303
    },
    {
      "id": "bank-Q10-003",
      "number": "Q10-003",
      "question": "上下文切换保存什么？什么时候代价高？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 上下文切换是让出 CPU 前保存当前执行状态，再恢复另一个任务的状态。\n\n- 要保存寄存器、栈指针等，进程切换还可能影响地址转换缓存。\n\n- 切换太频繁会耗 CPU 和破坏缓存命中，所以线程数并非越多越好。",
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
        "sourceQuestionId": "bank-Q10-003"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 304
    },
    {
      "id": "bank-Q10-004",
      "number": "Q10-004",
      "question": "常见 IPC 方式与选择？",
      "category": "操作系统 / Linux",
      "priority": "P1",
      "kind": "常见应用",
      "answer": "- 进程通信常见有管道、消息队列、共享内存、信号和 socket。\n\n- 共享内存少复制，但必须自己协调并发。\n\n- socket 可以同机或跨机器。\n\n- 信号适合有限通知。\n\n- 选型先看消息边界、数据规模和是否跨主机。",
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
        "sourceQuestionId": "bank-Q10-004"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 305
    },
    {
      "id": "bank-Q10-006",
      "number": "Q10-006",
      "question": "虚拟内存为什么存在？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 虚拟内存让每个进程看到自己的地址空间，操作系统再把虚拟地址映射到物理内存或其他后备存储。\n\n- 它便于隔离和按需分配。\n\n- 申请了很大地址范围，不代表已经占用同样多物理内存，要看驻留量等指标。",
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
        "sourceQuestionId": "bank-Q10-006"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 306
    },
    {
      "id": "bank-Q10-010",
      "number": "Q10-010",
      "question": "阻塞 IO、非阻塞 IO、IO 多路复用如何区分？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 阻塞 IO 没数据时可以等着。\n\n- 非阻塞 IO 没数据时立即返回，让你稍后重试。\n\n- IO 多路复用让一个线程同时等多个描述符，哪个就绪就处理哪个。\n\n- 就绪通知不是读取已经自动完成，应用还得真正 read/write。",
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
        "sourceQuestionId": "bank-Q10-010"
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
      "studyOrder": 307
    },
    {
      "id": "bank-Q10-011",
      "number": "Q10-011",
      "question": "select、poll、epoll 的差异？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- select、poll 每轮都要处理传入的关注集合。\n\n- epoll 在内核维护关注集合，并返回就绪事件，适合连接很多而活跃较少的情况。\n\n- epoll 不是在任何场景都 O(1)、都最快，实际工作量还取决于活跃事件数。",
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
        "sourceQuestionId": "bank-Q10-011"
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
      "studyOrder": 308
    },
    {
      "id": "bank-Q10-014",
      "number": "Q10-014",
      "question": "文件删除后磁盘空间为什么没释放？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 文件被删掉后，如果进程还开着它，磁盘空间可能要等最后一个引用关闭才释放。\n\n- 日志文件最常见。\n\n- 可用 lsof +L1 查谁持有，再让应用正确关闭或重新打开日志，不是多执行几次 rm。\n\n**例子：** 你删了大日志文件，但 Java 进程还在往原打开句柄写，df 看到的空间就可能没有立刻回来。",
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
        "sourceQuestionId": "bank-Q10-014"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 309
    },
    {
      "id": "bank-Q10-017",
      "number": "Q10-017",
      "question": "CPU 使用率、load average、iowait 分别反映什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- CPU 使用率看处理器多忙。\n\n- load average 看可运行和部分不可中断等待任务的负担。\n\n- iowait 反映某些 IO 等待相关时间。\n\n- 高 load 不等于 CPU 一定满，可能许多任务在等磁盘。\n\n- 必须结合多项指标判断。",
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
        "sourceQuestionId": "bank-Q10-017"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 310
    },
    {
      "id": "bank-Q10-020",
      "number": "Q10-020",
      "question": "磁盘满了从哪里查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 磁盘满先看 df -h 的容量，再看 df -i 的 inode。\n\n- 用 du 找大目录，检查日志、临时文件和已删除但仍打开的文件。\n\n- 先确认哪些能清理并保留故障证据，不要盲删数据库或全部日志。",
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
        "sourceQuestionId": "bank-Q10-020"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 311
    },
    {
      "id": "bank-Q10-021",
      "number": "Q10-021",
      "question": "权限 755、644、umask 分别表示什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 权限分属主、组、其他用户三组，r=4、w=2、x=1。\n\n- 755 是属主可读写执行，其他可读执行。\n\n- 644 是属主可读写，其他只读。\n\n- 目录的 x 表示能进入/穿越路径，遇到权限问题不应直接改 777。",
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
        "sourceQuestionId": "bank-Q10-021"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 312
    },
    {
      "id": "bank-Q10-022",
      "number": "Q10-022",
      "question": "kill -15 与 kill -9 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- kill -15 发送 SIGTERM，请应用自行结束，可以做清理。\n\n- kill -9 发送 SIGKILL，应用无法捕获，也来不及执行清理钩子。\n\n- 通常先停止流量并请求优雅关闭，再按明确策略处理超时未退出的进程。",
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
        "sourceQuestionId": "bank-Q10-022"
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
      "studyOrder": 313
    },
    {
      "id": "bank-Q10-023",
      "number": "Q10-023",
      "question": "nohup、后台运行、systemd 有什么区别？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- & 只是放到后台。\n\n- nohup 主要减少终端挂断对进程的影响。\n\n- systemd 才是完整服务管理，能管理启动、停止、重启和日志。\n\n- 长期服务不能只看命令返回，要确认进程、端口、日志和健康接口。",
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
        "sourceQuestionId": "bank-Q10-023"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 314
    },
    {
      "id": "bank-Q10-024",
      "number": "Q10-024",
      "question": "容器与虚拟机的区别？cgroup、namespace 做什么？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 容器通常共享宿主内核，用 namespace 隔离看到的资源，用 cgroup 限制资源用量。\n\n- 虚拟机通常有自己的客户操作系统内核。\n\n- 容器不是一台无限资源的独立机器，Java 的内存和线程池配置要按实际配额评估。",
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
        "sourceQuestionId": "bank-Q10-024"
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
      "studyOrder": 315
    },
    {
      "id": "bank-Q10-025",
      "number": "Q10-025",
      "question": "Linux OOMKill、ulimit、文件句柄不足怎么排查？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 进程突然消失，先看系统/容器事件是否 OOMKill。\n\n- 报 Too many open files，查句柄上限和泄漏。\n\n- 建不了线程，查线程数量、系统限额和本地内存。\n\n- 提高上限只能暂时增加容量，不能修复资源一直不释放。",
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
        "sourceQuestionId": "bank-Q10-025"
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
      "studyOrder": 316
    },
    {
      "id": "bank-UX010",
      "number": "UX010",
      "question": "Docker 镜像、容器、数据卷分别是什么？删容器会丢数据吗？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见对比",
      "answer": "- 镜像是创建运行环境的模板，容器是基于镜像启动的隔离进程及其运行环境，数据卷用来保存需要独立于容器生命周期的数据。\n\n- 容器被删除后，它的可写层数据会丢失。\n\n- 正确挂载且未被删除的数据卷可以继续保留。\n\n- 停止容器和删除容器也不是同一个操作。\n\n**例子：** 应用容器可以删掉重建；MySQL 的数据放在明确管理的数据卷中。重建时挂回同一个卷，而不是无意中创建一个空卷。",
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
        "sourceQuestionId": "bank-UX010"
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
      "studyOrder": 317
    },
    {
      "id": "bank-UX011",
      "number": "UX011",
      "question": "容器里访问 localhost，为什么连不到宿主机或另一个容器？",
      "category": "操作系统 / Linux",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 在普通隔离网络模式下，容器里的 localhost 指这个容器自己，不是宿主机，也不是另一个容器。\n\n- 同一自定义网络内，可按服务名或容器网络别名访问对方。\n\n- 从宿主机访问容器，则通常要使用发布出来的端口。",
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
        "sourceQuestionId": "bank-UX011"
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
      "studyOrder": 318
    },
    {
      "id": "bank-Q11-044",
      "number": "Q11-044",
      "question": "接口返回 400、404、405、415、500，分别先查什么？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "| 状态码 | 优先排查 |\n| --- | --- |\n| 400 | 参数缺失、格式错误、校验失败 |\n| 404 | 路径、部署上下文、资源是否存在 |\n| 405 | GET / POST 等请求方法是否匹配 |\n| 415 | Content-Type 和消息转换器是否匹配 |\n| 500 | 按 traceId 查后端异常堆栈与依赖调用 |\n\n**顺序：** 复现请求 → 核对方法/路径/头/参数 → 查对应日志 → 定位根因。\n\n**注意：** 不要只把状态码改成 200 来掩盖失败。",
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
        "reviewedOn": null
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
      "studyOrder": 319
    },
    {
      "id": "bank-Q11-045",
      "number": "Q11-045",
      "question": "什么是限流、熔断、降级？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 机制 | 主要作用 | 例子 |\n| --- | --- | --- |\n| 限流 | 控制请求进入速度或数量 | 超过配额返回繁忙 |\n| 熔断 | 下游持续故障时暂时停止调用 | 避免继续等待故障服务 |\n| 降级 | 在压力或故障时提供可接受的简化结果 | 暂停非核心推荐，保留下单 |\n\n**注意：** 是否允许返回旧值或简化结果由业务决定，不能把重要失败伪装成成功。",
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
        "reviewedOn": null
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
      "studyOrder": 320
    },
    {
      "id": "bank-Q11-001",
      "number": "Q11-001",
      "question": "接口从100ms变成2s，如何排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先确认从什么时候开始、哪些请求变慢、是否刚发布。\n\n- 再沿 trace 把耗时拆成排队、业务计算、SQL、缓存和第三方调用，找到新增的主要耗时。\n\n- 影响用户时先限流、降级或回滚，同时保留现场，不要一上来加线程。",
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
        "sourceQuestionId": "bank-Q11-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 321
    },
    {
      "id": "bank-Q11-002",
      "number": "Q11-002",
      "question": "CPU 100% 但请求量没涨怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 请求没涨但 CPU 满，说明单个请求变贵了，或后台有额外工作。\n\n- 先定位热点线程，再连续看栈或采样，排查死循环、正则回溯、序列化、GC 和异常重试。\n\n- 区分业务计算与 GC，不能只靠重启判断根因。",
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
        "sourceQuestionId": "bank-Q11-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 322
    },
    {
      "id": "bank-Q11-003",
      "number": "Q11-003",
      "question": "堆内存持续上涨，该如何区分泄漏与正常缓存？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 看多轮 GC 之后的内存最低点，而不是只看使用量往上走。\n\n- 缓存预热通常有容量上限并逐渐稳定。\n\n- 不再需要的对象仍不断累积，就要查持有链。\n\n- 用 dump 找大对象和根引用，修复后在同负载下继续观察。",
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
        "sourceQuestionId": "bank-Q11-003"
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
      "studyOrder": 323
    },
    {
      "id": "bank-Q11-004",
      "number": "Q11-004",
      "question": "线程池队列爆满、请求超时，怎么处理？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 队列满先判断任务来得太快，还是执行太慢。\n\n- 查活跃线程、排队时长、拒绝率和下游容量。\n\n- 已超时的无效任务要有退出机制。\n\n- 先限流和隔离慢依赖，只有 CPU、数据库和第三方都有余量时才扩线程。",
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
        "sourceQuestionId": "bank-Q11-004"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 324
    },
    {
      "id": "bank-Q11-005",
      "number": "Q11-005",
      "question": "一个接口依赖三个第三方接口，如何优化？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 把三个调用分成“有先后依赖”和“互不依赖”。\n\n- 互不依赖的并行执行，非关键结果允许明确降级。\n\n- 整次请求设置总时限，每个调用分配剩余预算。\n\n- 还要独立限并发，避免一个慢服务占满全部线程和连接。\n\n**例子：** 三个互不依赖的调用分别耗时 100、200、300ms，串行约 600ms，并行理想情况下接近最慢的 300ms，加上调度和合并开销。",
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
        "sourceQuestionId": "bank-Q11-005"
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
      "studyOrder": 325
    },
    {
      "id": "bank-Q11-009",
      "number": "Q11-009",
      "question": "秒杀系统如何防超卖和一人多单？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 防超卖靠库存的原子条件更新或受控预占。\n\n- 防一人多单靠活动+用户等业务唯一约束。\n\n- 订单和库存要在明确的事务或补偿边界内协调，入口再做鉴权、活动校验和限流。\n\n- 排队成功只能返回处理中，不等于已下单成功。",
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
        "sourceQuestionId": "bank-Q11-009"
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
      "studyOrder": 326
    },
    {
      "id": "bank-Q11-010",
      "number": "Q11-010",
      "question": "支付回调重复或乱序，如何保证订单正确？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 支付回调先验签、核对商户、订单和金额，再按支付流水去重，用状态条件更新保证只发生合法迁移。\n\n- 业务修改和去重尽量同事务完成。\n\n- 重复通知正常返回已有结果，漏通知靠主动查单和对账补齐。",
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
        "sourceQuestionId": "bank-Q11-010"
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
      "studyOrder": 327
    },
    {
      "id": "bank-Q11-011",
      "number": "Q11-011",
      "question": "提交订单时用户双击，接口怎么幂等？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 前端防双击只改善体验，后端仍需稳定幂等键。\n\n- 把键与用户、操作和参数摘要绑定，用数据库唯一约束防并发重复，保存处理中或成功结果。\n\n- 相同键相同参数复用结果，相同键不同参数拒绝。\n\n**例子：** 用户第一次下单超时，第二次仍带原 requestId，服务器应返回原订单或处理中状态，而不是重新创建订单。",
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
        "sourceQuestionId": "bank-Q11-011"
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
      "studyOrder": 328
    },
    {
      "id": "bank-Q11-012",
      "number": "Q11-012",
      "question": "如何设计一个分布式 ID？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 分布式 ID 先看要不要趋势递增、能否依赖中心服务、吞吐多大。\n\n- 可选数据库号段、雪花或 UUID 等。\n\n- 雪花常由时间、节点号、序列组成，必须保证节点号分配正确，并处理时钟回拨和序列用尽。",
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
        "sourceQuestionId": "bank-Q11-012"
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
      "studyOrder": 329
    },
    {
      "id": "bank-Q11-013",
      "number": "Q11-013",
      "question": "百万行数据导入怎么设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- **百万行导入应做成异步任务：**保存文件、返回任务 ID、流式解析、分批校验和落库，记录进度与失败行。\n\n- 每批内存和事务有上限，重试按业务键幂等，并明确允许部分成功还是必须全部成功。\n\n**例子：** 不能先把整份文件读进一百万行 List，再每次 subList 一千行，那只拆了写入，没有减少读取阶段的内存。",
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
        "sourceQuestionId": "bank-Q11-013"
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
      "studyOrder": 330
    },
    {
      "id": "bank-Q11-014",
      "number": "Q11-014",
      "question": "百万行导出如何避免 OOM 和请求超时？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 百万行导出先创建异步任务，再按稳定游标分批读数据，边读边写文件，完成后提供授权下载。\n\n- 限制并发和磁盘占用，保存失败状态。\n\n- 还要说明数据按哪个时间点导出，避免翻页过程中新增修改导致漏行或重复。",
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
        "sourceQuestionId": "bank-Q11-014"
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
      "studyOrder": 331
    },
    {
      "id": "bank-Q11-015",
      "number": "Q11-015",
      "question": "库存扣了但订单没落库，怎么修？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先按业务 ID 查清楚订单究竟没成功，还是只是响应丢失。\n\n- 库存与订单在同库时优先用事务。\n\n- 跨存储预占则记录预占状态，订单成功后确认，失败后幂等释放。\n\n- 补偿前先核对最终事实，不能看到超时就直接加库存。",
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
        "sourceQuestionId": "bank-Q11-015"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 332
    },
    {
      "id": "bank-Q11-016",
      "number": "Q11-016",
      "question": "订单“掉单”怎么排查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 从请求 ID 一路查到订单、支付流水、待发事件、MQ 和消费结果，定位“断在哪一段”。\n\n- 列表没有不等于数据库没有，也可能是权限、状态筛选或副本延迟。\n\n- 根据持久状态补偿，再建立对账主动发现缺口。",
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
        "sourceQuestionId": "bank-Q11-016"
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
      "studyOrder": 333
    },
    {
      "id": "bank-Q11-017",
      "number": "Q11-017",
      "question": "如何设计限流、熔断、降级、隔离？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 限流是少放请求进来。\n\n- 熔断是下游持续异常时暂时不再调用。\n\n- 降级是改成较简单但可接受的结果。\n\n- 隔离是给不同业务分开资源，防止互相拖垮。\n\n- 阈值应来自容量和时延目标，恢复时小流量试探。\n\n**例子：** 库存主链路要保住，推荐列表可以降级；短信服务变慢时，不应把下单线程池也全部占满。",
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
        "sourceQuestionId": "bank-Q11-017"
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
      "studyOrder": 334
    },
    {
      "id": "bank-Q11-021",
      "number": "Q11-021",
      "question": "定时任务在集群中重复执行怎么办？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 多实例定时任务要有跨实例的领取规则，例如调度平台、分片或数据库条件抢占。\n\n- 领取后记录执行者、状态和心跳，失败可接管。\n\n- 真正业务效果仍需幂等，防止旧实例暂停后恢复继续执行。\n\n- 单机锁无法约束别的进程。",
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
        "sourceQuestionId": "bank-Q11-021"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 335
    },
    {
      "id": "bank-Q11-022",
      "number": "Q11-022",
      "question": "审批回调重复，怎样保证只生成一次台账？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先确认生成台账应该绑在哪个流程事件，再用源单据 ID 加必要业务版本作为稳定键，目标表加唯一约束。\n\n- 生成记录和处理状态尽量同事务完成，重复回调返回已有结果。\n\n- 撤回再审批要另定更新或冲销规则。\n\n**例子：** 两个回调同时“先查都没有”，仍会各插一条；数据库唯一约束才能在并发下守住最后一道门。",
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
        "sourceQuestionId": "bank-Q11-022"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 336
    },
    {
      "id": "bank-Q11-023",
      "number": "Q11-023",
      "question": "跨系统组织、员工数据同步如何设计？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 跨系统同步先统一稳定业务编码，不按姓名猜对应关系。\n\n- 事件带唯一 ID 和版本，重复可重试、旧版本不能覆盖新版本。\n\n- 组织父子关系先处理，再处理人员归属。\n\n- 失败单独记录，增量同步外再加定期全量对账。",
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
        "sourceQuestionId": "bank-Q11-023"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 337
    },
    {
      "id": "bank-Q11-024",
      "number": "Q11-024",
      "question": "合同累计订单数量不能超最大值，怎么保证并发？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 合同额度不能只在前端相加判断。\n\n- 服务端用同一事务中的锁定校验，或数据库条件更新，原子增加已占用数量，再创建订单。\n\n- 修改按差量调整，撤销按状态只释放一次，历史订单统计口径也要统一。\n\n**例子：** 合同剩 100，两个人同时各买 60。各自先查都可能看到 100；原子条件占用应只允许其中一个成功。",
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
        "sourceQuestionId": "bank-Q11-024"
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
      "studyOrder": 338
    },
    {
      "id": "bank-Q11-026",
      "number": "Q11-026",
      "question": "业务数据明明新增过，列表里却看不到怎么查？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 先查数据库有没有这条主键，再查接口是否返回，最后查页面为什么不显示。\n\n- 依次排除回滚、副本延迟、权限、软删、状态筛选、分页和缓存。\n\n- “刚出现又消失”还要查后续回调覆盖，不要先再插一条。",
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
        "sourceQuestionId": "bank-Q11-026"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 339
    },
    {
      "id": "bank-Q11-027",
      "number": "Q11-027",
      "question": "如何做一次可信的接口压测？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 可信压测要固定环境、数据量、请求比例、预热和持续时间，同时看 QPS、延迟分位、错误率及资源占用。\n\n- 比较优化前后必须条件一致，还要验证数据正确、压测机没先到瓶颈，不能用一次最快响应倒推出吞吐。",
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
        "sourceQuestionId": "bank-Q11-027"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 340
    },
    {
      "id": "bank-Q11-031",
      "number": "Q11-031",
      "question": "CAP 与 BASE 怎么用在系统设计里？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- CAP 讨论的是网络发生分区时，不能同时完整保证线性一致性和可用性，不是平时随便三选二。\n\n- BASE 是某些系统接受短暂不一致、最终收敛的设计思路。\n\n- 业务必须明确能旧多久、怎么补偿、什么时候报警。",
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
        "sourceQuestionId": "bank-Q11-031"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 341
    },
    {
      "id": "bank-Q11-032",
      "number": "Q11-032",
      "question": "分布式事务的2PC、TCC、Saga如何比较？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- 2PC 让参与者先准备再统一提交，协调和等待成本较高。\n\n- TCC 把业务拆成预留、确认、取消。\n\n- Saga 是一串本地事务，失败时执行相应补偿。\n\n- 补偿不一定能精确倒回原状，选择要看资源支持和业务能否补偿。",
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
        "sourceQuestionId": "bank-Q11-032"
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
      "studyOrder": 342
    },
    {
      "id": "bank-UX012",
      "number": "UX012",
      "question": "修改建表 SQL 后，为什么同事的数据库不会自动跟着改？",
      "category": "场景题 / 故障排查",
      "priority": "P0",
      "kind": "常见应用",
      "answer": "- Git 更新的是脚本文件，不会替你执行数据库变更。\n\n- 数据库已经建好后，要用新的迁移脚本明确写 ALTER、数据搬迁等步骤，并在目标库执行。\n\n- 使用 Flyway 时，已经应用过的版本迁移应保留，后续变更用新版本脚本追加。\n\n**例子：** V1__create_tables.sql 已执行；现在要新增备注列，就新增 V2__add_remark.sql。只改 V1，不代表同事已有的表会自动多一列。",
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
        "sourceQuestionId": "bank-UX012"
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
      "studyOrder": 343
    },
    {
      "id": "bank-Q12-001",
      "number": "Q12-001",
      "question": "用两分钟介绍你的项目，怎么说？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- **按五句话介绍：**项目给谁用，解决什么问题，主流程是什么，我负责什么，怎么验证效果。\n\n- 技术栈穿插在具体实现中，不要先报一串框架。\n\n- 所有规模和成绩用真实记录，没有压测就直接说未做系统压测。\n\n**例子：** 表达模板：这个项目面向【真实用户】，处理【问题】；核心链路是【输入→处理→结果】；我负责【模块】，解决了【具体难点】，通过【真实测试或记录】验证。",
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
        "sourceQuestionId": "bank-Q12-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 344
    },
    {
      "id": "bank-Q12-002",
      "number": "Q12-002",
      "question": "你在团队里到底负责什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 把团队原有能力和自己新增修改的内容分开说。\n\n- 说明实际负责的接口、表、回调或部署步骤，以及参与了需求、编码、联调、测试中的哪些环节。\n\n- 能讲清一段完整实现，比声称负责整个系统更可信。",
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
        "sourceQuestionId": "bank-Q12-002"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 345
    },
    {
      "id": "bank-Q12-003",
      "number": "Q12-003",
      "question": "为什么采用这套技术栈？有没有替代方案？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- **从业务要求和团队条件解释选型：**现有系统用什么、哪些要求必须满足、引入新组件的成本是什么。\n\n- 再举一个替代方案及没选它的原因。\n\n- 不要只说“大家都这么用”，也不要为了丰富技术栈加没必要的组件。",
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
        "sourceQuestionId": "bank-Q12-003"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 346
    },
    {
      "id": "bank-Q12-004",
      "number": "Q12-004",
      "question": "画出项目架构和一次请求完整链路？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- **沿一次真实请求画：**客户端→入口鉴权→Controller→Service→数据库/缓存/外部系统→响应。\n\n- 每步讲输入输出、失败表现和事务边界。\n\n- 异步任务另画提交、执行和查询状态。\n\n- 没部署的组件不要画成已使用。",
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
        "sourceQuestionId": "bank-Q12-004"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 347
    },
    {
      "id": "bank-Q12-005",
      "number": "Q12-005",
      "question": "你的数据库表怎么设计？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先讲业务实体和它们的关系，再讲主键、业务唯一约束、状态字段和索引。\n\n- 用“哪些数据必须一起成功”和“最常查什么”解释设计，而不是照页面输入框建表。\n\n- 历史记录、软删除和并发规则也要说明。",
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
        "sourceQuestionId": "bank-Q12-005"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 348
    },
    {
      "id": "bank-Q12-006",
      "number": "Q12-006",
      "question": "你如何划分 Controller、Service、DAO 和 DTO？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- Controller 负责接请求和返回响应。\n\n- Service 负责业务规则、流程和事务。\n\n- DAO/Mapper 负责访问数据库。\n\n- DTO 负责传输需要的数据。\n\n- **记住：**入口、业务、存储、传输。\n\n- 分层为了边界清晰，不是类越多越专业。\n\n**例子：** 展示页要“用户名+订单数”，可以用 DTO 组合返回，不必因此给用户表硬加一个订单数字段。",
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
        "sourceQuestionId": "bank-Q12-006"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 349
    },
    {
      "id": "bank-Q12-007",
      "number": "Q12-007",
      "question": "项目最大的难点是什么？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 选一个真实难点，按“现象→约束→定位证据→解决方案→验证”讲。\n\n- 重点说明你为什么判断出根因，以及为什么这个修复有效。\n\n- 第一次配置某个框架很费时间，也可以诚实讲，但别包装成大型架构突破。",
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
        "sourceQuestionId": "bank-Q12-007"
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
      "studyOrder": 350
    },
    {
      "id": "bank-Q12-008",
      "number": "Q12-008",
      "question": "你做过哪些性能优化？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先说原来慢在哪里，再说改动为什么能减少成本，最后给真实测量。\n\n- 比如把逐条查询改批量、把全量加载改分页、给高频 SQL 加合适索引。\n\n- 没有可靠数据就说减少了哪些操作，不编造提升百分比。",
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
        "sourceQuestionId": "bank-Q12-008"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 351
    },
    {
      "id": "bank-Q12-009",
      "number": "Q12-009",
      "question": "项目 QPS、数据量、用户量到底多少？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 把线上监控、本地压测和测试数据量分开回答。\n\n- 没有线上权限就说明不知道峰值，可以讲自己实际测过的环境和结果。\n\n- QPS 必须同时看延迟、错误率和硬件，单次响应快不代表整体吞吐高。",
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
        "sourceQuestionId": "bank-Q12-009"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 352
    },
    {
      "id": "bank-Q12-010",
      "number": "Q12-010",
      "question": "为什么这里需要 Redis？不用行不行？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先讲 Redis 缓存了什么、为何值得缓存、多久失效、出故障怎么办。\n\n- 访问量小或只需单实例缓存时，数据库或本地缓存可能足够。\n\n- 要明确谁是权威数据源，不要把 Redis 当每个项目必须出现的关键词。",
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
        "sourceQuestionId": "bank-Q12-010"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 353
    },
    {
      "id": "bank-Q12-011",
      "number": "Q12-011",
      "question": "项目里的事务边界怎么定？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 事务边界围住必须一起成功的数据库操作，例如订单和库存。\n\n- 尽量缩短事务，不在里面等待慢远程调用。\n\n- 跨系统不能自动一起回滚，就用可靠事件、状态和补偿。\n\n- 还要说明异常怎样触发回滚，并实际测过失败路径。",
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
        "sourceQuestionId": "bank-Q12-011"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 354
    },
    {
      "id": "bank-Q12-012",
      "number": "Q12-012",
      "question": "接口幂等在你的项目里怎么实现？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 选择真实的重复来源来讲，例如双击、请求重试、审批回调或 MQ 重投。\n\n- 再讲稳定业务键、唯一约束、处理状态和事务边界，最后说明重复请求返回什么。\n\n- 只有前端防抖，不等于后端已实现可靠幂等。",
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
        "sourceQuestionId": "bank-Q12-012"
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
      "studyOrder": 355
    },
    {
      "id": "bank-Q12-013",
      "number": "Q12-013",
      "question": "你项目中多线程用在哪里？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 说清哪几个任务能独立执行、为什么要异步或并行、用了什么线程池、队列多大，以及异常和超时怎么收集。\n\n- 没有实际使用就讲同步方案已经够用，不要把建了一个线程池当成已经做过性能优化。",
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
        "sourceQuestionId": "bank-Q12-013"
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
      "studyOrder": 356
    },
    {
      "id": "bank-Q12-014",
      "number": "Q12-014",
      "question": "为什么要加 MQ？不发消息能不能完成？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先指出必须同步完成的核心步骤，再说哪些后续任务能延迟处理。\n\n- 引入 MQ 是为了避免下游耦合、缩短等待或吸收峰值，同时要承担消息可靠性、幂等和排障成本。\n\n- 规模很小时，同库事务可能更简单。",
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
        "sourceQuestionId": "bank-Q12-014"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 357
    },
    {
      "id": "bank-Q12-015",
      "number": "Q12-015",
      "question": "认证、权限与多租户如何保证？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 认证确认你是谁，授权确认你能做什么，多租户隔离确认你能操作哪一家的数据。\n\n- 服务端根据可信身份检查资源归属，查询、导出和缓存都要带隔离维度。\n\n- 隐藏按钮、字段只读都不能替代后端权限检查。",
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
        "sourceQuestionId": "bank-Q12-015"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 358
    },
    {
      "id": "bank-Q12-016",
      "number": "Q12-016",
      "question": "项目日志如何设计和使用？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 日志围绕 traceId、业务单据 ID 和事件 ID 串起关键步骤：收到什么、处理到哪、结果是什么、为什么失败。\n\n- 异常保留根因和堆栈，敏感信息脱敏。\n\n- 指标用来发现异常，日志用来解释细节，别把整个大对象每次都打印。",
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
        "sourceQuestionId": "bank-Q12-016"
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
      "studyOrder": 359
    },
    {
      "id": "bank-Q12-017",
      "number": "Q12-017",
      "question": "你如何测试，而不只是“点了一下页面”？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 测试要覆盖正常、边界、权限、重复、并发、超时和回滚。\n\n- 接口测试不只看返回成功，还要查最终数据库和外部状态。\n\n- 修 Bug 后加原场景回归。\n\n- 按真实做过的测试回答，别把手工验证说成完整自动化体系。",
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
        "sourceQuestionId": "bank-Q12-017"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 360
    },
    {
      "id": "bank-Q12-018",
      "number": "Q12-018",
      "question": "怎么部署、回滚与定位线上问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 按实际流程讲清构建、保存旧版本、注入配置、停止接流量、启动、健康检查和回滚。\n\n- 只做过替换 jar 也可以讲具体命令和验证步骤，不必虚构 CI/CD。\n\n- 进程存在不等于发布成功，还要确认端口和核心接口。",
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
        "sourceQuestionId": "bank-Q12-018"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 361
    },
    {
      "id": "bank-Q12-019",
      "number": "Q12-019",
      "question": "一次 Bug 修复你如何证明是根因？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先能复现或留下清晰证据，找到导致错误的最小条件，再解释代码为什么会在该条件下失败。\n\n- 修复后跑原用例、边界和回归。\n\n- 暂时没再出现只是现象，不足以单独证明根因已经修好。",
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
        "sourceQuestionId": "bank-Q12-019"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 362
    },
    {
      "id": "bank-Q12-021",
      "number": "Q12-021",
      "question": "为什么前端字段只读还要后端校验？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 前端只读只限制页面操作，请求仍可能从其他入口发来或被修改。\n\n- 后端必须重新校验权限、金额、数量和状态，派生字段由可信数据计算。\n\n- 前端负责及时提示，后端和数据库负责守住业务规则。\n\n**例子：** 油卡可用金额应由充值、消费等可信记录计算，不能因为页面字段只读，就直接相信请求提交的余额。",
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
        "sourceQuestionId": "bank-Q12-021"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 363
    },
    {
      "id": "bank-Q12-024",
      "number": "Q12-024",
      "question": "跨系统接口如何处理超时、签名、重试？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 先明确接口契约和鉴权，再设置连接、读取和整体超时。\n\n- 每次业务操作使用稳定请求 ID，超时视为结果未知，按幂等键查询或重试。\n\n- 日志保留脱敏摘要和状态，不要重试一次就换一个新业务 ID。",
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
        "sourceQuestionId": "bank-Q12-024"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 364
    },
    {
      "id": "bank-Q12-025",
      "number": "Q12-025",
      "question": "你如何理解 Agent 与普通问答、固定工作流？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 普通问答主要生成回复，工作流按程序预设步骤走，Agent 会根据目标和工具结果动态决定下一步。\n\n- Agent 的灵活决策外面，仍需程序控制权限、状态、预算和停止条件。\n\n- 一次调用模型的接口，不自动等于完整 Agent。\n\n**例子：** 固定审批是按既定节点流转；Agent 查资料后决定继续搜索还是调用计算工具，才体现根据反馈调整下一步。",
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
        "sourceQuestionId": "bank-Q12-025"
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
      "studyOrder": 365
    },
    {
      "id": "bank-Q12-026",
      "number": "Q12-026",
      "question": "Agent Loop 怎样终止，如何避免无限循环？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- Agent Loop 是“模型决定下一步→校验并执行工具→把结果交回模型→继续或结束”。\n\n- 程序要设置最大轮次、总时间、费用、重复动作和重试上限，不能只盼模型自己说完成。\n\n- 取消和失败也应是明确终态。",
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
        "sourceQuestionId": "bank-Q12-026"
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
      "studyOrder": 366
    },
    {
      "id": "bank-Q12-027",
      "number": "Q12-027",
      "question": "工具调用如何设计协议？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 工具协议要讲清名称、用途、输入参数、输出、错误、权限和超时。\n\n- 模型只提出调用，服务端还要校验参数和授权。\n\n- 有副作用的调用要有稳定 ID 与幂等规则。\n\n- 大结果返回摘要和引用，不把整份日志硬塞给模型。",
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
        "sourceQuestionId": "bank-Q12-027"
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
      "studyOrder": 367
    },
    {
      "id": "bank-Q12-030",
      "number": "Q12-030",
      "question": "Agent 为什么使用 SSE 或 WebSocket？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- Agent 任务耗时长，前端需要边执行边看进度，所以用 SSE 或 WebSocket。\n\n- SSE 适合单向推事件，WebSocket 适合双向实时交互。\n\n- 事件带任务 ID 和序号，结果持久化，断线后查状态或补事件，而不是丢掉全部进度。",
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
        "sourceQuestionId": "bank-Q12-030"
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
      "studyOrder": 368
    },
    {
      "id": "bank-Q12-031",
      "number": "Q12-031",
      "question": "RAG 的完整链路与评估怎么讲？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- RAG 先把文档解析、切块、向量化并建索引。\n\n- 用户提问后检索相关片段，必要时重排，再让模型依据这些材料回答。\n\n- 排错时先查有没有召回正确证据，再查模型是否正确使用证据，不能所有错误都怪生成模型。",
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
        "sourceQuestionId": "bank-Q12-031"
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
      "studyOrder": 369
    },
    {
      "id": "bank-Q12-032",
      "number": "Q12-032",
      "question": "上下文过长、工具结果过大怎么处理？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 上下文先保留当前目标、硬约束、最近相关操作和未完成事项。\n\n- 历史压成结构化摘要，完整记录留在外部按需取。\n\n- 工具大输出先摘要或分页，并给生成答案留预算。\n\n- 订单号和授权等关键状态应单独存储，不能只靠摘要记住。",
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
        "sourceQuestionId": "bank-Q12-032"
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
      "studyOrder": 370
    },
    {
      "id": "bank-Q12-033",
      "number": "Q12-033",
      "question": "Agent 执行代码怎样控制风险？",
      "category": "项目 / 实习拷打",
      "priority": "P1",
      "kind": "项目表达",
      "answer": "- 执行代码要靠隔离环境和最小权限，限制文件路径、网络、CPU、内存、时长及进程数。\n\n- 高影响操作先获得应用层授权，再记录审计。\n\n- 工具输出只能当数据，不能升级成系统指令。\n\n- 提示词里写“不许乱来”不是沙箱。",
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
        "sourceQuestionId": "bank-Q12-033"
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
      "studyOrder": 371
    },
    {
      "id": "bank-Q12-034",
      "number": "Q12-034",
      "question": "如何评价 Agent 的效果和成本？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 评价 Agent 先定义一批真实任务和成功标准，再测完成率、错误副作用、人工介入、步骤、延迟和成本。\n\n- 分析失败是路由、参数、工具还是检索问题。\n\n- 演示成功一次不能证明稳定，降低成本也要同步观察质量。",
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
        "sourceQuestionId": "bank-Q12-034"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 372
    },
    {
      "id": "bank-Q12-035",
      "number": "Q12-035",
      "question": "不会的问题或未做过的技术怎么回答？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 不会或没做过时，先说清经验范围，再讲确定知道的原理和准备如何验证。\n\n- 可以说“这块没有实际落地，我理解是……，放到这个场景会先确认……”。\n\n- 不要编线上事故、流量或个人贡献，能讲透真实细节更重要。",
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
        "sourceQuestionId": "bank-Q12-035"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 373
    },
    {
      "id": "bank-UX013",
      "number": "UX013",
      "question": "提示词、RAG、微调分别解决什么问题？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 提示词告诉模型这次该怎么回答。\n\n- RAG 先从外部资料检索证据，再交给模型回答。\n\n- 微调通过训练调整模型参数，使它更适应某类任务或表达。\n\n- 它们能配合使用，不是三选一。\n\n- 企业资料经常变化时，通常先考虑检索和更新流程，而不是每次都重新训练。",
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
        "sourceQuestionId": "bank-UX013"
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
      "studyOrder": 374
    },
    {
      "id": "bank-UX014",
      "number": "UX014",
      "question": "Embedding 和 Reranker 有什么区别？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- Embedding 把文本变成向量，方便从大量材料中先找出可能相关的一批。\n\n- Reranker 再结合问题和每条候选材料重新评分，把更相关的排前面。\n\n- 可以记成“先广泛找候选，再精细排顺序”。\n\n- 它们判断相关性，不等于证明内容真实。",
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
        "sourceQuestionId": "bank-UX014"
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
      "studyOrder": 375
    },
    {
      "id": "bank-UX016",
      "number": "UX016",
      "question": "模型 Tool Calling 和 MCP 是一回事吗？",
      "category": "项目 / 实习拷打",
      "priority": "P0",
      "kind": "项目表达",
      "answer": "- 不是。\n\n- Tool Calling 是让模型用结构化形式提出工具调用。\n\n- MCP 是应用连接外部工具和资源的一套协议。\n\n- 可以先通过 MCP 发现工具，再把工具描述提供给模型，由应用执行模型提出的合法调用。\n\n- 没有 MCP，也可以调用本地注册的工具。",
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
        "sourceQuestionId": "bank-UX016"
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
      "studyOrder": 376
    },
    {
      "id": "bank-Q13-053",
      "number": "Q13-053",
      "question": "数组和链表有什么区别？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 对比项 | 数组 | 链表 |\n| --- | --- | --- |\n| 组织方式 | 按连续下标组织元素 | 节点通过引用连接 |\n| 按下标访问 | 通常 O(1) | 通常 O(n) |\n| 中间增删 | 常需移动后续元素 | 已定位节点后修改链接，但定位也有成本 |\n| 空间 | 通常较紧凑 | 节点、引用有额外开销 |\n\n**注意：** 链表不是所有插入场景都更快。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 377
    },
    {
      "id": "bank-Q13-054",
      "number": "Q13-054",
      "question": "栈和队列分别是什么？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "- **栈：** 后进先出，像叠盘子，最后放入的先取出。\n- **队列：** 先进先出，像排队，先进入的先处理。\n- **栈的场景：** 括号匹配、回退、方法调用。\n- **队列的场景：** 任务排队、广度优先搜索。\n\n**Java 常用：** ArrayDeque 可用于普通栈或双端队列；线程间等待交接可考虑 BlockingQueue。",
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
        "reviewedOn": null
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
      "studyOrder": 378
    },
    {
      "id": "bank-Q13-055",
      "number": "Q13-055",
      "question": "时间复杂度中的 O(1)、O(n)、O(log n) 分别是什么意思？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "基础概念",
      "answer": "| 复杂度 | 增长趋势 | 例子 |\n| --- | --- | --- |\n| O(1) | 随输入规模增长，操作量不按比例增加 | 数组按下标访问 |\n| O(log n) | 每次显著缩小问题规模 | 有序数组二分查找 |\n| O(n) | 操作量与规模近似线性增长 | 遍历数组 |\n| O(n²) | 操作量近似按平方增长 | 典型双层完整遍历 |\n\n**注意：** 复杂度描述增长阶，不是精确耗时；空间复杂度还要算辅助结构和递归栈。",
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
        "reviewedOn": null
      },
      "references": [],
      "isInterviewFocus": false,
      "isStarter": true,
      "studyOrder": 379
    },
    {
      "id": "bank-Q13-001",
      "number": "Q13-001",
      "question": "时间复杂度与空间复杂度怎么分析？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 时间复杂度看输入变大后，主要操作次数怎样增长。\n\n- 空间复杂度看额外需要多少存储。\n\n- 先确定 n 是什么，再统计循环和递归。\n\n- 两层循环不一定 O(n²)，关键看总推进次数。\n\n- 递归调用栈也要算空间。",
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
        "sourceQuestionId": "bank-Q13-001"
      },
      "isNew": false,
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 380
    },
    {
      "id": "bank-Q13-002",
      "number": "Q13-002",
      "question": "两数之和怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 用哈希表记住前面见过的数字及下标。\n\n- 扫到 x 时，先找 target-x，找到就返回。\n\n- 没找到再保存 x。\n\n- 先查后存可避免重复使用当前元素。\n\n- 平均时间 O(n)，空间 O(n)。\n\n**例子：** 数组 [2,7,11]，目标 9：看到 2 先记下；看到 7 时查 9-7=2，之前有 2，答案就是它们的下标。",
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
        "sourceQuestionId": "bank-Q13-002"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] twoSum(int[] a, int target) {\n    Map<Long, Integer> seen = new HashMap<>();\n    for (int i = 0; i < a.length; i++) {\n        Integer j = seen.get((long) target - a[i]);\n        if (j != null) return new int[]{j, i};\n        seen.put((long) a[i], i);\n    }\n    return new int[]{-1, -1};\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 381
    },
    {
      "id": "bank-Q13-003",
      "number": "Q13-003",
      "question": "三数之和如何去重？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 先排序，再固定一个数，用左右指针找另外两个。\n\n- 总和小了左指针右移，大了右指针左移，等于目标就记录。\n\n- 固定数和两端重复值都要跳过。\n\n- 时间 O(n²)，不要靠最后全部塞 Set 掩盖去重逻辑。",
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
        "sourceQuestionId": "bank-Q13-003"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<List<Integer>> threeSum(int[] input) {\n    int[] a = input.clone();\n    Arrays.sort(a);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i + 2 < a.length; i++) {\n        if (i > 0 && a[i] == a[i - 1]) continue;\n        int l = i + 1, r = a.length - 1;\n        while (l < r) {\n            long sum = (long) a[i] + a[l] + a[r];\n            if (sum < 0) l++;\n            else if (sum > 0) r--;\n            else {\n                ans.add(Arrays.asList(a[i], a[l], a[r]));\n                int lv = a[l], rv = a[r];\n                while (l < r && a[l] == lv) l++;\n                while (l < r && a[r] == rv) r--;\n            }\n        }\n    }\n    return ans;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 382
    },
    {
      "id": "bank-Q13-004",
      "number": "Q13-004",
      "question": "最长无重复子串怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 用滑动窗口维护“当前没有重复字符的一段”。\n\n- 右边不断加入字符，遇到重复，就把左边移到该字符上次位置之后，但左边不能后退。\n\n- 不断记录最大窗口长度，时间 O(n)。\n\n**例子：** abba：扫到第二个 b，左边移到它前一个 b 后面；最后看到 a 时，不能把左边重新退回开头。",
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
        "sourceQuestionId": "bank-Q13-004"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int longestUnique(String s) {\n    Map<Character, Integer> last = new HashMap<>();\n    int left = 0, best = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        Integer old = last.put(c, right);\n        if (old != null) left = Math.max(left, old + 1);\n        best = Math.max(best, right - left + 1);\n    }\n    return best;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 383
    },
    {
      "id": "bank-Q13-006",
      "number": "Q13-006",
      "question": "和为 K 的连续子数组怎么数？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 用前缀和把区间求和变成两次累计和相减。\n\n- 当前累计和是 s，前面每出现一次 s-k，就多一个和为 k 的区间。\n\n- 用哈希表保存次数。\n\n- 初始化和 0 出现一次，先查询再登记当前和。\n\n- 平均 O(n)。\n\n**例子：** [1,2,1]，k=3：前缀和走到 3，找到初始 0；走到 4，找到前面的 1，所以有两个区间。",
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
        "sourceQuestionId": "bank-Q13-006"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long subarraySum(int[] a, long k) {\n    Map<Long, Long> freq = new HashMap<>();\n    freq.put(0L, 1L);\n    long sum = 0, answer = 0;\n    for (int x : a) {\n        sum += x;\n        answer += freq.getOrDefault(sum - k, 0L);\n        freq.put(sum, freq.getOrDefault(sum, 0L) + 1);\n    }\n    return answer;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 384
    },
    {
      "id": "bank-Q13-007",
      "number": "Q13-007",
      "question": "合并重叠区间怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 先按区间起点排序。\n\n- **每次和结果中最后一个区间比较：**重叠就把终点扩到更远，不重叠就另加一个区间。\n\n- 排序后只需扫一遍，总时间 O(n log n)。\n\n- 端点相接算不算重叠，要按题目边界定义。\n\n**例子：** 闭区间 [1,3] 和 [2,6] 合成 [1,6]；再遇到 [8,10]，就新开一个区间。",
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
        "sourceQuestionId": "bank-Q13-007"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[][] mergeIntervals(int[][] input) {\n    if (input.length == 0) return new int[0][];\n    int[][] a = new int[input.length][];\n    for (int i = 0; i < input.length; i++) a[i] = input[i].clone();\n    Arrays.sort(a, (x, y) -> Integer.compare(x[0], y[0]));\n    List<int[]> out = new ArrayList<>();\n    for (int[] cur : a) {\n        if (out.isEmpty() || out.get(out.size() - 1)[1] < cur[0]) {\n            out.add(cur);\n        } else {\n            int[] last = out.get(out.size() - 1);\n            last[1] = Math.max(last[1], cur[1]);\n        }\n    }\n    return out.toArray(new int[out.size()][]);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 385
    },
    {
      "id": "bank-Q13-008",
      "number": "Q13-008",
      "question": "二分查找如何避免死循环和越界？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 二分先选定一种边界写法，例如左闭右开 [left,right)。\n\n- 每轮根据 mid 判断，把不可能的半边排除。\n\n- 更新必须让区间变小。\n\n- 普通二分时间 O(log n)、空间 O(1)，不要混用 right=mid 与 right=mid-1 的不同模板。",
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
        "sourceQuestionId": "bank-Q13-008"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int lowerBound(int[] a, int x) {\n    int lo = 0, hi = a.length;\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] < x) lo = mid + 1;\n        else hi = mid;\n    }\n    return lo;\n}\nstatic int binarySearch(int[] a, int x) {\n    int p = lowerBound(a, x);\n    return p < a.length && a[p] == x ? p : -1;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 386
    },
    {
      "id": "bank-Q13-009",
      "number": "Q13-009",
      "question": "怎样用二分查找有序数组中目标值的第一次和最后一次出现位置？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- **做两次二分：**找第一个大于等于 target 的位置，再找第一个大于 target 的位置。\n\n- 第二个位置减一就是最后一次出现。\n\n- 最后检查目标是否存在，不存在返回 [-1,-1]。\n\n- 时间 O(log n)。\n\n**例子：** [1,2,2,2,3] 查 2：第一个 >=2 在 1，第一个 >2 在 4，所以范围是 [1,3]。",
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
        "sourceQuestionId": "bank-Q13-009"
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
      "studyOrder": 387
    },
    {
      "id": "bank-Q13-010",
      "number": "Q13-010",
      "question": "搜索旋转有序数组怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 旋转有序数组没有重复值时，每轮至少有一半仍然有序。\n\n- 先判断哪半有序，再看 target 是否位于那半的数值范围，决定保留哪边。\n\n- 时间 O(log n)。\n\n- 允许重复时，某些情况只能逐步缩边，最坏 O(n)。",
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
        "sourceQuestionId": "bank-Q13-010"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int searchRotated(int[] a, int x) { // 元素互异\n    int lo = 0, hi = a.length - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] == x) return mid;\n        if (a[lo] <= a[mid]) {\n            if (a[lo] <= x && x < a[mid]) hi = mid - 1;\n            else lo = mid + 1;\n        } else {\n            if (a[mid] < x && x <= a[hi]) lo = mid + 1;\n            else hi = mid - 1;\n        }\n    }\n    return -1;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 388
    },
    {
      "id": "bank-Q13-011",
      "number": "Q13-011",
      "question": "反转单链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "1. **先保存后续节点：** `next = cur.next`。\n2. **反转指针：** `cur.next = prev`。\n3. **向前推进：** `prev = cur; cur = next`。\n4. **返回新头：** 循环结束返回 `prev`。\n\n**复杂度：** 时间 O(n)，额外空间 O(1)。\n\n**注意：** 先保存 next，再改指向，否则会丢掉后半条链；测试空链表、单节点、多节点。",
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
        "sourceQuestionId": "bank-Q13-011"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode reverse(ListNode head) {\n    ListNode prev = null, cur = head;\n    while (cur != null) {\n        ListNode next = cur.next;\n        cur.next = prev;\n        prev = cur;\n        cur = next;\n    }\n    return prev;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 389
    },
    {
      "id": "bank-Q13-012",
      "number": "Q13-012",
      "question": "如何判断链表有环并找到入口？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 快指针每次两步，慢指针一步。\n\n- 有环时会相遇。\n\n- 相遇后让一个回到头，两者都一次走一步，再次相遇的位置就是环入口。\n\n- 时间 O(n)、空间 O(1)，先做好 fast 和 fast.next 判空。",
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
        "sourceQuestionId": "bank-Q13-012"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode cycleEntry(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            ListNode p = head;\n            while (p != slow) {\n                p = p.next;\n                slow = slow.next;\n            }\n            return p;\n        }\n    }\n    return null;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 390
    },
    {
      "id": "bank-Q13-013",
      "number": "Q13-013",
      "question": "删除链表倒数第 N 个节点？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 加一个 dummy 节点。\n\n- 快指针先从 dummy 走 n 步，再让快慢一起走到快指针位于尾部。\n\n- 这时慢指针就在待删节点前面，跳过它即可。\n\n- 时间 O(L)、空间 O(1)，dummy 能统一删除头节点的情况。",
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
        "sourceQuestionId": "bank-Q13-013"
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
      "studyOrder": 391
    },
    {
      "id": "bank-Q13-014",
      "number": "Q13-014",
      "question": "合并两个有序链表怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 用 dummy 和尾指针，每次比较两条链表当前头，把较小节点接到结果尾部，并推进那条链。\n\n- 某一条用完，直接接上另一条剩余部分。\n\n- 时间 O(m+n)，复用节点时额外空间 O(1)。",
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
        "sourceQuestionId": "bank-Q13-014"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode mergeTwo(ListNode a, ListNode b) {\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (a != null && b != null) {\n        if (a.val <= b.val) { tail.next = a; a = a.next; }\n        else { tail.next = b; b = b.next; }\n        tail = tail.next;\n    }\n    tail.next = a != null ? a : b;\n    return dummy.next;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 392
    },
    {
      "id": "bank-Q13-015",
      "number": "Q13-015",
      "question": "合并 K 个有序链表？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 把每条链表的头放进小顶堆。\n\n- 每次取最小节点接到答案，再把它的下一个节点放进堆，直到堆空。\n\n- 总节点数 N、链表数 k 时，时间 O(N log k)、额外空间 O(k)。\n\n**例子：** 堆里始终只保留每条链当前的候选头，不需要一次放入所有节点。",
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
        "sourceQuestionId": "bank-Q13-015"
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
      "studyOrder": 393
    },
    {
      "id": "bank-Q13-016",
      "number": "Q13-016",
      "question": "如何判断两个链表相交？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 两个指针分别走 A、B，走到末尾后切换到另一条链的头。\n\n- 这样两人走过的总长度一致，最终在相交节点或 null 相遇。\n\n- 比较节点引用，不是节点值。\n\n- 无环前提下时间 O(m+n)、空间 O(1)。",
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
        "sourceQuestionId": "bank-Q13-016"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic ListNode intersection(ListNode a, ListNode b) { // 两链均无环\n    ListNode p = a, q = b;\n    while (p != q) {\n        p = p == null ? b : p.next;\n        q = q == null ? a : q.next;\n    }\n    return p;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 394
    },
    {
      "id": "bank-Q13-017",
      "number": "Q13-017",
      "question": "有效括号如何判断？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 左括号入栈，右括号检查栈顶是否是对应左括号，匹配才弹出。\n\n- 中途不匹配立即失败，最后栈为空才算合法。\n\n- 时间 O(n)、空间 O(n)，仅数量相同不能保证顺序正确。\n\n**例子：** ([)] 虽然每种左右括号数量一样，但遇到 ) 时栈顶是 [，所以不合法。",
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
        "sourceQuestionId": "bank-Q13-017"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic boolean validBrackets(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '[' || c == '{') stack.push(c);\n        else {\n            if (c != ')' && c != ']' && c != '}') return false;\n            if (stack.isEmpty()) return false;\n            char open = stack.pop();\n            if ((c == ')' && open != '(') ||\n                (c == ']' && open != '[') ||\n                (c == '}' && open != '{')) return false;\n        }\n    }\n    return stack.isEmpty();\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 395
    },
    {
      "id": "bank-Q13-018",
      "number": "Q13-018",
      "question": "最小栈怎样做到 O(1) 查询最小值？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 一个栈存数据，另一个栈同步存“到这一层为止的最小值”。\n\n- 入栈时更新最小值，出栈时两个一起弹。\n\n- 这样 getMin 直接看辅助栈顶，所有基本操作都是 O(1)。\n\n- 重复最小值也必须处理。\n\n**例子：** 依次压入 3、1、2，辅助栈存 3、1、1；弹出 2 后最小值仍然是 1。",
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
        "sourceQuestionId": "bank-Q13-018"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic class MinStack {\n    private final Deque<Integer> data = new ArrayDeque<>();\n    private final Deque<Integer> mins = new ArrayDeque<>();\n    void push(int x) {\n        data.push(x);\n        mins.push(mins.isEmpty() ? x : Math.min(x, mins.peek()));\n    }\n    int pop() { int x = data.pop(); mins.pop(); return x; }\n    int top() {\n        if (data.isEmpty()) throw new NoSuchElementException();\n        return data.peek();\n    }\n    int getMin() {\n        if (mins.isEmpty()) throw new NoSuchElementException();\n        return mins.peek();\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 396
    },
    {
      "id": "bank-Q13-020",
      "number": "Q13-020",
      "question": "滑动窗口最大值怎么做到 O(n)？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- **用双端队列保存可能成为最大值的下标：**队头移走已过期的，队尾移走不比新元素大的，剩下按值递减。\n\n- 队头就是当前窗口最大值。\n\n- 每个下标最多进出一次，时间 O(n)、空间 O(k)。\n\n**例子：** 存下标而不是只存值，才知道哪个元素已经离开窗口；重复最大值也能正确处理。",
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
        "sourceQuestionId": "bank-Q13-020"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] windowMax(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    int[] out = new int[a.length - k + 1];\n    Deque<Integer> dq = new ArrayDeque<>();\n    for (int i = 0; i < a.length; i++) {\n        while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();\n        while (!dq.isEmpty() && a[dq.peekLast()] <= a[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) out[i - k + 1] = a[dq.peekFirst()];\n    }\n    return out;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 397
    },
    {
      "id": "bank-Q13-021",
      "number": "Q13-021",
      "question": "手写 LRU 缓存的结构与操作？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- LRU 用哈希表快速找到节点，用双向链表记录最近使用顺序。\n\n- 访问或更新就移到最新位置，容量满时删最久没用的尾节点，同时删哈希映射。\n\n- 平均 get/put 都是 O(1)，仅一个普通队列不够快速移动任意节点。",
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
        "sourceQuestionId": "bank-Q13-021"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic class LRUCache {\n    private static class Node {\n        int key, value; Node prev, next;\n        Node(int key, int value) { this.key = key; this.value = value; }\n    }\n    private final int capacity;\n    private final Map<Integer, Node> map = new HashMap<>();\n    private final Node head = new Node(0, 0), tail = new Node(0, 0);\n    LRUCache(int capacity) {\n        if (capacity < 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    private void unlink(Node n) {\n        n.prev.next = n.next; n.next.prev = n.prev;\n    }\n    private void addFirst(Node n) {\n        n.next = head.next; n.prev = head;\n        head.next.prev = n; head.next = n;\n    }\n    int get(int key) {\n        Node n = map.get(key);\n        if (n == null) return -1; // 教学约定：-1表示未命中\n        unlink(n); addFirst(n); return n.value;\n    }\n    void put(int key, int value) {\n        Node n = map.get(key);\n        if (n != null) { n.value = value; unlink(n); addFirst(n); return; }\n        n = new Node(key, value); map.put(key, n); addFirst(n);\n        if (map.size() > capacity) {\n            Node old = tail.prev; unlink(old); map.remove(old.key);\n        }\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 398
    },
    {
      "id": "bank-Q13-022",
      "number": "Q13-022",
      "question": "数组中第 K 大元素怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 找第 k 大，可以维护大小 k 的小顶堆，堆里始终留下最大的 k 个，堆顶就是其中最小的，也就是第 k 大。\n\n- 时间 O(n log k)、空间 O(k)。\n\n- 快速选择平均 O(n)，但最坏 O(n²)。\n\n**例子：** 找最大的 3 个，用小顶堆便于踢掉“当前保留集合里最小的”；不要和找最小 k 个的大顶堆混淆。",
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
        "sourceQuestionId": "bank-Q13-022"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int kthLargest(int[] a, int k) {\n    if (k <= 0 || k > a.length) throw new IllegalArgumentException();\n    PriorityQueue<Integer> heap = new PriorityQueue<>();\n    for (int x : a) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    return heap.peek();\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 399
    },
    {
      "id": "bank-Q13-023",
      "number": "Q13-023",
      "question": "前 K 个高频元素怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 先用哈希表统计每个元素出现次数，再用大小 k 的小顶堆保留频率最高的 k 个，或按频次分桶。\n\n- 并列频率的输出规则要先说明。\n\n- 哈希+堆常为平均 O(n+u log k)，u 是不同元素数。",
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
        "sourceQuestionId": "bank-Q13-023"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int[] topKFrequent(int[] a, int k) {\n    if (k < 0) throw new IllegalArgumentException();\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int x : a) freq.put(x, freq.getOrDefault(x, 0) + 1);\n    PriorityQueue<Integer> heap = new PriorityQueue<>((x, y) -> {\n        int c = Integer.compare(freq.get(x), freq.get(y));\n        return c != 0 ? c : Integer.compare(x, y);\n    });\n    for (int x : freq.keySet()) {\n        heap.offer(x);\n        if (heap.size() > k) heap.poll();\n    }\n    int[] out = new int[heap.size()];\n    for (int i = out.length - 1; i >= 0; i--) out[i] = heap.poll();\n    return out;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 400
    },
    {
      "id": "bank-Q13-024",
      "number": "Q13-024",
      "question": "二叉树前中后序遍历怎么写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 前序是根→左→右，中序是左→根→右，后序是左→右→根。\n\n- 记忆诀窍是看“根”出现在前、中还是后。\n\n- 递归时间 O(n)、栈空间 O(h)。\n\n- 迭代可用显式栈，极深树要留意递归溢出。",
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
        "sourceQuestionId": "bank-Q13-024"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<Integer> inorder(TreeNode root) {\n    List<Integer> out = new ArrayList<>();\n    Deque<TreeNode> stack = new ArrayDeque<>();\n    TreeNode p = root;\n    while (p != null || !stack.isEmpty()) {\n        while (p != null) { stack.push(p); p = p.left; }\n        p = stack.pop(); out.add(p.val); p = p.right;\n    }\n    return out;\n}\n// 前序递归：先out.add(root.val)，再递归left/right；后序：放到两次递归之后。\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 401
    },
    {
      "id": "bank-Q13-025",
      "number": "Q13-025",
      "question": "二叉树层序遍历与锯齿遍历？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 层序遍历用队列。\n\n- 每层开始先记住队列大小，只处理这几个节点，并把孩子放进队列留给下一层。\n\n- 锯齿遍历按层交替记录方向即可。\n\n- 时间 O(n)，辅助空间与最大层宽有关。\n\n**例子：** 不能一边加入孩子，一边重新拿 queue.size() 当本层次数，否则会把下一层也混进来。",
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
        "sourceQuestionId": "bank-Q13-025"
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
      "studyOrder": 402
    },
    {
      "id": "bank-Q13-026",
      "number": "Q13-026",
      "question": "二叉树最大深度和直径分别怎么算？直径一定经过根吗？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 最大深度是 1+左右子树深度的较大值。\n\n- 直径则在求深度时，顺便用“左深度+右深度”更新最大路径边数，最大路径不一定经过根。\n\n- 一次 DFS 即可 O(n)，辅助空间 O(h)。",
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
        "sourceQuestionId": "bank-Q13-026"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int maxDepth(TreeNode n) {\n    return n == null ? 0 : 1 + Math.max(maxDepth(n.left), maxDepth(n.right));\n}\nstatic int diameter(TreeNode root) {\n    int[] best = {0};\n    heightForDiameter(root, best);\n    return best[0];\n}\nstatic int heightForDiameter(TreeNode n, int[] best) {\n    if (n == null) return 0;\n    int l = heightForDiameter(n.left, best), r = heightForDiameter(n.right, best);\n    best[0] = Math.max(best[0], l + r);\n    return 1 + Math.max(l, r);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 403
    },
    {
      "id": "bank-Q13-027",
      "number": "Q13-027",
      "question": "验证二叉搜索树怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 验证 BST 要检查整棵子树的值域，不只比较父子。\n\n- **递归传上下界：**左子树必须小于当前值，右子树必须大于当前值，同时继承祖先约束。\n\n- 时间 O(n)，边界可用 long，重复值规则按题意。\n\n**例子：** 根是 10，左孩子是 5，但 5 的右孩子是 12。12 虽然大于 5，仍违反“整棵左子树都小于 10”。",
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
        "sourceQuestionId": "bank-Q13-027"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic boolean isBST(TreeNode root) {\n    return bstRange(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nstatic boolean bstRange(TreeNode n, long low, long high) {\n    if (n == null) return true;\n    if (n.val <= low || n.val >= high) return false;\n    return bstRange(n.left, low, n.val) && bstRange(n.right, n.val, high);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 404
    },
    {
      "id": "bank-Q13-028",
      "number": "Q13-028",
      "question": "二叉树最近公共祖先怎么找？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 递归到 p 或 q 就返回该节点。\n\n- 左右都找到目标时，当前节点就是公共祖先。\n\n- 只有一边找到就把那边往上传。\n\n- 时间 O(n)、空间 O(h)。\n\n- 通常题目保证两点存在，否则还要额外确认是否真的都找到。",
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
        "sourceQuestionId": "bank-Q13-028"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic TreeNode lca(TreeNode root, TreeNode p, TreeNode q) { // 假定p、q都存在\n    if (root == null || root == p || root == q) return root;\n    TreeNode l = lca(root.left, p, q), r = lca(root.right, p, q);\n    if (l != null && r != null) return root;\n    return l != null ? l : r;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 405
    },
    {
      "id": "bank-Q13-029",
      "number": "Q13-029",
      "question": "岛屿数量怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 遍历网格，遇到没访问过的陆地就计数加一，再用 DFS/BFS 把它四方向连通的陆地全部标记。\n\n- 这样每片岛只数一次。\n\n- 时间 O(mn)，空间最坏 O(mn)，对角相邻通常不算连通。",
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
        "sourceQuestionId": "bank-Q13-029"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int islands(char[][] g) { // 矩形网格；会修改输入\n    if (g.length == 0 || g[0].length == 0) return 0;\n    int m = g.length, n = g[0].length, count = 0;\n    int[] dr = {1, -1, 0, 0}, dc = {0, 0, 1, -1};\n    Queue<int[]> q = new ArrayDeque<>();\n    for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {\n        if (g[r][c] != '1') continue;\n        count++; g[r][c] = '0'; q.offer(new int[]{r, c});\n        while (!q.isEmpty()) {\n            int[] p = q.poll();\n            for (int d = 0; d < 4; d++) {\n                int rr = p[0] + dr[d], cc = p[1] + dc[d];\n                if (rr >= 0 && rr < m && cc >= 0 && cc < n && g[rr][cc] == '1') {\n                    g[rr][cc] = '0'; q.offer(new int[]{rr, cc});\n                }\n            }\n        }\n    }\n    return count;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 406
    },
    {
      "id": "bank-Q13-032",
      "number": "Q13-032",
      "question": "括号生成如何回溯？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 回溯时记录用了几个左括号、几个右括号。\n\n- 左括号没到 n 就能放。\n\n- 右括号只有少于左括号时才能放。\n\n- 放满 2n 个就保存答案。\n\n- 这样生成过程本身就不会有非法前缀，复杂度还要计入所有输出。",
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
        "sourceQuestionId": "bank-Q13-032"
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
      "studyOrder": 407
    },
    {
      "id": "bank-Q13-033",
      "number": "Q13-033",
      "question": "全排列如何回溯？有重复元素怎么办？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 每层选一个还没用过的元素，放入路径，递归后撤销选择。\n\n- 有重复值时先排序，跳过同层重复选择。\n\n- 保存答案时复制路径，不能直接存同一个可变 List。\n\n- 互异 n 个数有 n! 个排列，输出本身就很大。",
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
        "sourceQuestionId": "bank-Q13-033"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic List<List<Integer>> permutations(int[] input) {\n    int[] a = input.clone(); Arrays.sort(a);\n    List<List<Integer>> out = new ArrayList<>();\n    permDfs(a, new boolean[a.length], new ArrayList<>(), out);\n    return out;\n}\nstatic void permDfs(int[] a, boolean[] used, List<Integer> path, List<List<Integer>> out) {\n    if (path.size() == a.length) { out.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < a.length; i++) {\n        if (used[i] || (i > 0 && a[i] == a[i - 1] && !used[i - 1])) continue;\n        used[i] = true; path.add(a[i]); permDfs(a, used, path, out);\n        path.remove(path.size() - 1); used[i] = false;\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 408
    },
    {
      "id": "bank-Q13-034",
      "number": "Q13-034",
      "question": "最大子数组和怎么做？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 每到一个数，决定“接在前一段后面”还是“从自己重新开始”，取更大的作为以当前结尾的最佳和，再更新全局答案。\n\n- 时间 O(n)、空间 O(1)。\n\n- 全负数组应取最大的那个负数，不能默认答案为 0。",
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
        "sourceQuestionId": "bank-Q13-034"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long maxSubarray(int[] a) {\n    if (a.length == 0) throw new IllegalArgumentException();\n    long ending = a[0], best = a[0];\n    for (int i = 1; i < a.length; i++) {\n        ending = Math.max((long) a[i], ending + a[i]);\n        best = Math.max(best, ending);\n    }\n    return best;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 409
    },
    {
      "id": "bank-Q13-035",
      "number": "Q13-035",
      "question": "最长递增子序列怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 简单 DP 记录以每个位置结尾的最长递增长度，时间 O(n²)。\n\n- 优化版用 tails 记录“每种长度能达到的最小结尾”，每个数二分第一个 >= 它的位置替换，时间 O(n log n)。\n\n- tails 不一定就是最终那条实际子序列。",
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
        "sourceQuestionId": "bank-Q13-035"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int lisLength(int[] a) {\n    int[] tails = new int[a.length]; int size = 0;\n    for (int x : a) {\n        int lo = 0, hi = size;\n        while (lo < hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (tails[mid] < x) lo = mid + 1; else hi = mid;\n        }\n        tails[lo] = x;\n        if (lo == size) size++;\n    }\n    return size;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 410
    },
    {
      "id": "bank-Q13-036",
      "number": "Q13-036",
      "question": "零钱兑换最少硬币数怎么求？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- dp[x] 表示凑出金额 x 的最少硬币数。\n\n- dp[0]=0，其他先设不可达。\n\n- 每个金额尝试最后放一种硬币，取 dp[x-coin]+1 的最小值。\n\n- 凑不出返回 -1，时间 O(金额×面额种类)，面额必须为正。",
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
        "sourceQuestionId": "bank-Q13-036"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic int coinChange(int[] coins, int amount) {\n    if (amount < 0) throw new IllegalArgumentException();\n    for (int c : coins) if (c <= 0) throw new IllegalArgumentException();\n    int inf = Integer.MAX_VALUE / 2;\n    int[] dp = new int[amount + 1]; Arrays.fill(dp, inf); dp[0] = 0;\n    for (int x = 1; x <= amount; x++)\n        for (int c : coins) if (c <= x) dp[x] = Math.min(dp[x], dp[x - c] + 1);\n    return dp[amount] == inf ? -1 : dp[amount];\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 411
    },
    {
      "id": "bank-Q13-037",
      "number": "Q13-037",
      "question": "最小路径和与0/1背包的状态怎么设计？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- **最小路径和：**到一格的最小成本等于自身值加“上边或左边较小的成本”。\n\n- **0/1 背包：**每件物品最多一次，一维容量必须倒序更新，防止一轮反复使用同一件。\n\n- 先说清 dp 的含义，再写转移式。",
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
        "sourceQuestionId": "bank-Q13-037"
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
      "studyOrder": 412
    },
    {
      "id": "bank-Q13-038",
      "number": "Q13-038",
      "question": "快排、归并、堆排序的取舍？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "| 排序 | 时间复杂度 | 稳定性 | 额外空间 |\n| --- | --- | --- | --- |\n| 快排 | 平均 O(n log n)，最坏 O(n²) | 通常不稳定 | 递归栈平均 O(log n)，最坏 O(n) |\n| 归并（数组） | O(n log n) | 可稳定 | 通常 O(n) |\n| 堆排序 | O(n log n) | 通常不稳定 | 通常 O(1) |\n\n**记住：** 快排重分区，归并重合并，堆排反复调整堆。稳定表示相等元素的相对顺序保持不变。",
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
        "sourceQuestionId": "bank-Q13-038"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic void mergeSort(int[] a) { mergeSortRange(a, new int[a.length], 0, a.length); }\nstatic void mergeSortRange(int[] a, int[] temp, int lo, int hi) {\n    if (hi - lo <= 1) return;\n    int mid = lo + (hi - lo) / 2;\n    mergeSortRange(a, temp, lo, mid); mergeSortRange(a, temp, mid, hi);\n    int i = lo, j = mid, k = lo;\n    while (i < mid && j < hi) temp[k++] = a[i] <= a[j] ? a[i++] : a[j++];\n    while (i < mid) temp[k++] = a[i++];\n    while (j < hi) temp[k++] = a[j++];\n    System.arraycopy(temp, lo, a, lo, hi - lo);\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 413
    },
    {
      "id": "bank-Q13-039",
      "number": "Q13-039",
      "question": "接雨水怎么用双指针？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 一格能装多少水，取决于左右最高墙中较低的那个。\n\n- 双指针维护左右已知最高值，每次处理较低边界一侧，把能确定的水量累加。\n\n- 每格处理一次，时间 O(n)、额外空间 O(1)。\n\n**例子：** [3,0,2] 中间那格两边最高墙是 3 和 2，所以最多装 2，不是 3。",
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
        "sourceQuestionId": "bank-Q13-039"
      },
      "isNew": false,
      "practiceCode": "```java\nstatic long trap(int[] h) { // 非负高度\n    int l = 0, r = h.length - 1, leftMax = 0, rightMax = 0;\n    long water = 0;\n    while (l <= r) {\n        if (leftMax <= rightMax) {\n            leftMax = Math.max(leftMax, h[l]); water += leftMax - h[l++];\n        } else {\n            rightMax = Math.max(rightMax, h[r]); water += rightMax - h[r--];\n        }\n    }\n    return water;\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 414
    },
    {
      "id": "bank-Q13-040",
      "number": "Q13-040",
      "question": "ACM 输入输出模式怎么写得稳？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- ACM 模式要自己读输入、组织多组测试并输出答案。\n\n- 先确认第一项是不是测试组数、如何到 EOF、大输入用缓冲。\n\n- 通常类名为 Main，不输出“请输入”之类提示，多组之间重置状态，最后一行没有换行也要能读。",
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
        "sourceQuestionId": "bank-Q13-040"
      },
      "isNew": false,
      "practiceCode": "```java\nimport java.io.*;\npublic class Main {\n    static class FastScanner {\n        private final InputStream in = System.in;\n        private final byte[] buffer = new byte[1 << 16];\n        private int ptr = 0, len = 0;\n        private int read() throws IOException {\n            if (ptr >= len) {\n                len = in.read(buffer); ptr = 0;\n                if (len < 0) return -1;\n            }\n            return buffer[ptr++] & 0xff;\n        }\n        Integer nextInt() throws IOException {\n            int c;\n            do { c = read(); } while (c != -1 && c <= ' ');\n            if (c == -1) return null;\n            int sign = 1;\n            if (c == '-') { sign = -1; c = read(); }\n            if (c < '0' || c > '9') throw new IOException(\"invalid integer\");\n            long value = 0;\n            while (c >= '0' && c <= '9') {\n                value = value * 10 + c - '0';\n                if (value > (sign == 1 ? 2147483647L : 2147483648L))\n                    throw new IOException(\"integer overflow\");\n                c = read();\n            }\n            if (c != -1 && c > ' ') throw new IOException(\"invalid delimiter\");\n            return (int) (sign * value);\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        FastScanner fs = new FastScanner();\n        // 演示：读到EOF并求和。实际比赛请替换成题目指定的T/n/m与求解逻辑。\n        long sum = 0;\n        Integer x;\n        while ((x = fs.nextInt()) != null) sum += x;\n        System.out.println(sum);\n    }\n}\n```",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 415
    },
    {
      "id": "bank-RM030",
      "number": "RM030",
      "question": "有序数组原地去重，每个不同数字只保留一次，怎么做？",
      "answer": "- 用快慢指针。\n\n- 快指针遍历原数组，慢指针表示下一个写入位置。\n\n- 当前值与上一个已保留值不同，才写到慢指针位置。\n\n- 返回新长度，前面这段是答案，后面的旧内容不必清零。\n\n- 时间O(n)，额外空间O(1)。\n\n**例子：** [1,1,2,2,3]处理后前3个位置为[1,2,3]，返回3。空数组返回0。",
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
        "sourceQuestionId": "bank-RM030"
      },
      "isNew": false,
      "practiceCode": "```java\n    static int deduplicate(int[] a) {\n        Objects.requireNonNull(a, \"array\");\n        int write = 0;\n        for (int read = 0; read < a.length; read++) {\n            if (write == 0 || a[read] != a[write - 1]) a[write++] = a[read];\n        }\n        return write;\n    }\n```\n\n完整类、节点定义及测试见资料包 code/InterviewPractice.java；单独片段需补齐相应上下文。",
      "references": [],
      "isInterviewFocus": false,
      "isStarter": false,
      "studyOrder": 416
    },
    {
      "id": "bank-UX019",
      "number": "UX019",
      "question": "最长公共子序列怎么求？和最长公共子串有什么区别？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 子序列可以跳过字符，但不能改变顺序。\n\n- 子串必须连续。\n\n- 求最长公共子序列时，用 dp[i][j] 表示两个字符串前 i、前 j 个字符能得到的最长长度。\n\n- 末尾字符相同就接上去。\n\n- 不同就比较“少看左边一个”与“少看右边一个”的结果。\n\n**例子：** \"adce\" 和 \"ace\" 的最长公共子序列是 \"ace\"，长度 3；在第一个字符串里它并不连续，因此不叫公共子串。",
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
        "sourceQuestionId": "bank-UX019"
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
      "studyOrder": 417
    },
    {
      "id": "bank-UX020",
      "number": "UX020",
      "question": "原地合并两个有序数组，为什么要从后往前写？",
      "category": "算法与数据结构",
      "priority": "P0",
      "kind": "算法练习",
      "answer": "- 第一个数组末尾有空位时，从后往前比较两个数组最大的剩余元素，把较大的放到最后一个空位。\n\n- 这样不会覆盖第一个数组里还没处理的数据。\n\n- 一直处理到第二个数组用完，第一个数组剩余部分原本就在正确位置。\n\n**例子：** a=[1,4,8,0,0]，有效长度 3；b=[2,7]。从尾部依次放 8、7、4、2，结果是 [1,2,4,7,8]。",
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
        "sourceQuestionId": "bank-UX020"
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
      "studyOrder": 418
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
  "edition": "memorize-2026-09-20",
  "schemaVersion": 1,
  "stats": {
    "originalQuestions": 591,
    "retainedOriginalQuestions": 347,
    "addedQuestions": 71,
    "archivedOriginalQuestions": 244,
    "totalQuestions": 418,
    "manuallyRewrittenOriginalQuestions": 108,
    "interviewFocusQuestions": 9,
    "starterQuestions": 129,
    "byCategory": {
      "计算机网络": 28,
      "Spring / Spring Boot": 44,
      "MySQL": 51,
      "Java 基础": 43,
      "Java 集合": 28,
      "多线程 / 并发": 38,
      "JVM": 21,
      "Redis": 27,
      "消息队列 MQ": 15,
      "操作系统 / Linux": 23,
      "场景题 / 故障排查": 25,
      "项目 / 实习拷打": 33,
      "算法与数据结构": 42
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
    "原题来自用户上传文件；新增内容在 isNew/provenance 中区分。",
    "精简展示不等于删掉关键前提；版本差异保留在必要的注意项。",
    "主背范围为针对基础面试的编辑选择，不是面试频率统计。",
    "只保留当前题目关联的来源，原题原文及被移出主背的题目保存在归档。"
  ],
  "archivedQuestions": [
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "01_Java基础.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "02_Java集合.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "03_多线程与并发.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "04_JVM.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "05_Spring与SpringBoot.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "06_MySQL.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "07_Redis.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "08_消息队列MQ.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "09_计算机网络.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "09_计算机网络.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "09_计算机网络.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "09_计算机网络.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "10_操作系统与Linux.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "11_场景题与故障排查.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "12_项目与实习拷打.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "12_项目与实习拷打.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "12_项目与实习拷打.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "12_项目与实习拷打.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "12_项目与实习拷打.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "13_算法与数据结构.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "13_算法与数据结构.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "13_算法与数据结构.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "13_算法与数据结构.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "公司补充题库_2026-09-08",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "91_本轮新增41道问法与回答.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "2026-09-13_补充题.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
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
      "sourceFile": "recent-interviews-study.md",
      "archiveReason": "本轮主背范围之外：偏细节、重复追问或专项深挖；不是判定该题没有面试价值。"
    }
  ],
  "archiveDate": "2026-09-13",
  "archiveDescription": "移出主背的原题保留在回收站，可恢复；个人笔记和复习记录按原题号继续关联。"
};
