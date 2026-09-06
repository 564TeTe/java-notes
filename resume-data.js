window.RESUME_PREP_DATA = {
    sources: [
        {
            id: "resume",
            icon: "📄",
            name: "个人简历",
            shortName: "简历总览",
            role: "Java 后端开发 · 27 届本科生 · AI 应用后端方向",
            summary: "用两段实习和一个 AI Agent 编排项目串起完整经历，先建立面试官对你的整体认知。",
            highlights: ["用友：企业系统集成", "北软：Flowable 工作流", "知枢：AI Agent 编排"],
            file: "./assets/resume/sun-te-resume.pdf",
            fileType: "PDF"
        },
        {
            id: "zhishu",
            icon: "🧠",
            name: "知枢项目",
            shortName: "知枢",
            role: "AI 研发协作与 Coding Agent 编排平台",
            summary: "重点准备控制面与执行面、Task/Attempt、人工审批、可靠事件、SSE、Artifact 和 Worktree。",
            highlights: ["Control / Execution Plane", "Persistent Outbox", "Tool 审批与执行隔离"],
            file: "./assets/resume/zhishu-interview-guide.docx",
            fileType: "DOCX"
        },
        {
            id: "yonyou",
            icon: "🏢",
            name: "用友实习",
            shortName: "用友",
            role: "企业应用后端与 NCC / YonBIP 系统集成",
            summary: "重点准备业务事件、JAX-RS / OpenAPI、聚合 VO 映射、三方 HTTP 调用和 SQL 联调排障。",
            highlights: ["EHR / OA 系统集成", "OpenAPI 与 AggVO", "部门层级同步"],
            file: "./assets/resume/yonyou-interview-guide.docx",
            fileType: "DOCX"
        },
        {
            id: "beiruan",
            icon: "🔄",
            name: "北软实习",
            shortName: "北软",
            role: "低代码平台工作流模块与 Flowable 运行时",
            summary: "重点准备 BPMN 模型、Task / Execution、并行流程、协办回退、消息通知和系统字段解析。",
            highlights: ["Flowable 运行时排障", "协办与回退", "17 项相关回归"],
            file: "./assets/resume/beiruan-interview-guide.docx",
            fileType: "DOCX"
        }
    ],

    pitches: [
        {
            id: "self-60",
            source: "resume",
            duration: "60 秒",
            title: "技术面自我介绍",
            content: "面试官您好，我叫孙特，是合肥大学软件工程专业 27 届本科生，方向是 Java 后端和 AI 应用后端。我有两段后端实习经历：在用友主要做 NCC / YonBIP 客户化与系统集成，接触了业务事件、OpenAPI、聚合 VO 映射、三方接口和 Oracle SQL 联调；在北软主要参与低代码平台工作流模块，处理过 Flowable 并行流程、撤回后 execution 残留、协办回退和通知字段解析。项目方面，我基于开源 CloudCLI 二次开发了知枢 Coding Agent 编排平台，新增 Spring Boot 控制面，重点解决任务状态、工具审批、跨进程可靠事件和结果验收。我希望继续做 Java 后端，把复杂业务状态、工程可靠性和 AI Agent 场景结合起来。"
        },
        {
            id: "self-30",
            source: "resume",
            duration: "30 秒",
            title: "HR 快速介绍",
            content: "我叫孙特，是合肥大学软件工程专业 27 届学生，主要方向是 Java 后端。我在用友做过企业系统集成与 OpenAPI，在北软参与过基于 Flowable 的低代码工作流后端；同时做了知枢 AI Agent 编排项目，负责 Spring Boot 控制面、状态机、审批和可靠事件。我希望寻找能继续深入 Java 后端与 AI 应用工程的岗位。"
        },
        {
            id: "zhishu-15",
            source: "zhishu",
            duration: "15 秒",
            title: "知枢一句话版本",
            content: "知枢是一个 Coding Agent 编排平台。我基于 CloudCLI 保留 Node 执行层，新增 Spring Boot 控制面，重点解决正式研发任务的状态机、工具审批、跨进程幂等、可靠事件和结果验收。"
        },
        {
            id: "zhishu-60",
            source: "zhishu",
            duration: "1 分钟",
            title: "知枢技术面版本",
            content: "原始 Agent 调用更像即时聊天：失败后历史容易混在一起，高风险 Edit / Bash 缺少业务审批，跨进程事件可能因网络失败丢失，模型说完成也缺少系统证据。我的设计是把 Control Plane 和 Execution Plane 分开：Spring Boot 管 Task / Attempt 状态机、审批、取消重试、事件投影和产物；Node 管 Prompt Assembly、Capability 到 Tool 映射和真实 Agent 执行。Start、Cancel、Decision 使用持久化幂等，事件先写 SQLite Outbox，再至少一次投递到 Spring，由 PostgreSQL 双唯一约束去重。前端通过 SSE 和 Last-Event-ID 展示可恢复时间线。固定隔离仓库连续执行两轮，共 8/8 个真实任务成功，写文件和测试都经过真实审批。"
        },
        {
            id: "yonyou-30",
            source: "yonyou",
            duration: "30 秒",
            title: "用友快速版本",
            content: "我在用友做 Java 后端客户化开发，主要基于 NCC / YonBIP 做企业系统集成。工作中写过业务事件监听插件、JAX-RS / OpenAPI 接口和三方系统调用，接触了 EHR 与 OA、钉钉、263 邮箱的集成。代表工作包括组织部门同步、离职与入职 OpenAPI、异常考勤钉钉提醒，涉及 JSON 到聚合 VO 的映射、HTTP 鉴权调用、Oracle SQL 核验和异常处理。"
        },
        {
            id: "yonyou-60",
            source: "yonyou",
            duration: "1 分钟",
            title: "用友技术面版本",
            content: "这段实习主要是 NCC / YonBIP 的 Java 后端客户化和系统集成。第一类工作是平台业务扩展，例如监听组织部门新增、修改和启停事件，再把业务对象转换成 OA 所需报文；第二类是 OpenAPI 开发，我做过离职办理和入职登记，包括唯一性校验、参照解析、平台单据保存，以及多页签 JSON 到 AggVO 和子表 VO 的映射；第三类是三方系统对接，例如异常考勤提醒，需要查询人员、转换 userid / unionid、创建钉钉待办并做批量异常隔离。平时会结合 Oracle SQL、请求响应日志和接口文档做联调排障。"
        },
        {
            id: "beiruan-60",
            source: "beiruan",
            duration: "1 分钟",
            title: "北软技术面版本",
            content: "在北软实习期间，我主要参与无域低代码平台的工作流模块，后端以 Spring Boot 和 Flowable 为主。重点不是普通增删改查，而是流程模型与运行时状态问题，例如空条件分支、多级并行汇聚，以及撤回后 execution 残留导致重新提交后主流程无法结束。我还参与了多人协办和流程回退逻辑，处理过历史流程变量导致的错误自动审批，并完善待办、催办、抄送、流程完成等通知字段解析和 PC / 移动端系统字段取值。排查时一般结合日志、接口调用链和数据库运行时状态，再用最小改动修复并回归验证。"
        }
    ],

    stories: [
        {
            id: "story-zhishu-outbox",
            source: "zhishu",
            title: "跨进程事件可靠性",
            tags: ["Persistent Outbox", "幂等", "SSE"],
            situation: "Node 执行 Agent，Spring 管任务状态；网络抖动或 Spring 重启可能导致事件丢失、重复或乱序。",
            task: "保证终态、审批和产物最终可达，同时让重复投递不会破坏状态。",
            action: "Node 先写 SQLite Outbox，同一 Run 使用 sequence 保序，失败时指数退避；Spring 通过 PostgreSQL 双唯一约束和事务幂等消费；SSE 只发送已提交事件并支持断线补历史。",
            result: "固定真实 Demo 两轮中，事件序号严格递增，8/8 个任务形成终态和 Summary，网络重试不会产生重复投影。",
            boundary: "准确表述为 At-Least-Once + 幂等消费，不要说实现了 Exactly-Once。"
        },
        {
            id: "story-zhishu-approval",
            source: "zhishu",
            title: "真实工具审批闭环",
            tags: ["Permission Hook", "竞态", "安全"],
            situation: "Agent 可以调用 Edit / Write / Bash，仅在界面显示警告无法真正阻止工具执行。",
            task: "在工具执行前实现跨 Node、Spring 和浏览器的可持久化审批。",
            action: "Permission Hook 创建 pending Promise，Node 发出 APPROVAL_REQUIRED，Spring 持久化 Approval 并投影 WAITING_APPROVAL，用户决策再回调 Runtime，同时处理 Cancel / Decision 竞态和迟到批准。",
            result: "真实 Demo 中写文件和测试命令会先暂停，批准后恢复；取消后的迟到批准不会复活操作。",
            boundary: "强调真实阻断发生在 Tool 执行前，不只是前端弹窗。"
        },
        {
            id: "story-yonyou-parent",
            source: "yonyou",
            title: "组织同步父部门匹配异常",
            tags: ["SQL 排查", "业务唯一键", "系统集成"],
            situation: "部门同步联调时，部分非顶级部门返回“上级部门不存在或存在多个”。",
            task: "判断问题来自 OA 接口还是本地父部门解析，并保证新增、修改都能正确同步层级。",
            action: "从事件对象和查询条件入手，用日志与 SQL 核对父部门匹配结果，发现查询必须结合组织范围；同时补充修改场景的父部门字段。",
            result: "顶级和子部门的新增、修改、停用场景均能正确同步，父子层级链路完成联调。",
            boundary: "不要把团队完整系统说成自己独立负责，重点讲你参与的查询、字段和联调链路。"
        },
        {
            id: "story-yonyou-openapi",
            source: "yonyou",
            title: "多页签 JSON 到 NCC 聚合 VO",
            tags: ["JAX-RS", "AggVO", "平台保存"],
            situation: "外部 EHR 通过 OpenAPI 提交入职或离职业务数据，参数包含主表和多个子页签。",
            task: "完成校验、参照解析、对象映射并通过 NCC 标准业务能力保存单据。",
            action: "先做必填、唯一性和参照合法性校验，再把主表字段映射为主 VO、子页签数组映射为子表 VO，组装 AggVO 后调用平台保存服务，统一处理响应与日志。",
            result: "接口可以稳定接收外部多页签数据并落入正确业务对象，便于后续联调和 SQL 核验。",
            boundary: "不能说成收到 JSON 后直接 insert；平台保存还承担业务校验、默认值和事件链路。"
        },
        {
            id: "story-beiruan-execution",
            source: "beiruan",
            title: "撤回后 Execution 残留",
            tags: ["Flowable", "并行流程", "运行时状态"],
            situation: "并行审批撤回后重新提交，当前任务能够继续，但最终主流程无法结束，业务状态长期停留在审批中。",
            task: "确认是前端显示、业务表还是 Flowable 运行时问题，并恢复流程一致性。",
            action: "构造最小复现，对比正常与异常流程的任务和 execution tree，发现旧分支 execution 未完全清理；将修改限制在撤回 / 回退清理链路，并回归普通并行和撤回重提场景。",
            result: "重新提交后主流程能够正常汇聚和结束，业务状态同步，运行时不再保留异常分支。",
            boundary: "不要只修改业务表状态掩盖现象，Task 完成也不等于所有 Execution 已结束。"
        },
        {
            id: "story-beiruan-dept",
            source: "beiruan",
            title: "多部门用户创建部门取值错误",
            tags: ["字段解析", "最小修改", "回归验证"],
            situation: "多部门用户在表单中选择项目部，通知标题却显示账号查询出的另一个部门。",
            task: "修正通知与系统字段取值，同时避免影响公共用户部门查询。",
            action: "沿表单值、通知上下文和账号兜底链路对比，定位到解析优先级错误；在字段解析层让表单实际部门优先，账号部门仅作为兜底。",
            result: "PC / 移动端相关系统字段和通知场景完成 17 项相关回归验证。",
            boundary: "17 项是相关字段与通知回归，不要说成全平台端到端测试。"
        }
    ],

    questions: [
        { id: "q-general-1", source: "resume", question: "请用 1 分钟介绍一下你自己。", answer: "按“身份与方向 → 两段实习 → 一个核心项目 → 求职动机”组织。用友突出系统集成与 OpenAPI，北软突出 Flowable 运行时排障，知枢突出控制面、可靠性和 AI Agent 工程，最后落到希望继续深入 Java 后端与 AI 应用后端。", followup: "追问准备：为什么选择 Java 后端？三段经历哪一段最能代表你？" },
        { id: "q-general-2", source: "resume", question: "为什么想继续做 Java 后端？", answer: "两段实习让我发现自己更喜欢复杂业务状态、流程可靠性和跨系统集成，而不是只做页面配置。Java 和 Spring 生态适合承载这类长期演进的企业后端，我也希望把数据库、并发、可靠消息等能力继续补深，并和 AI Agent 场景结合。", followup: "避免只回答“Java 岗位多”或“学校教过 Java”。" },
        { id: "q-general-3", source: "resume", question: "用友和北软两段实习最大的区别是什么？", answer: "用友更偏企业平台客户化和跨系统集成，核心是业务事件、OpenAPI、VO 映射、三方接口与 Oracle SQL 联调；北软更偏工作流平台内部复杂状态，核心是 BPMN 模型、Flowable Runtime、协办回退、通知字段和回归验证。两段经历共同训练了业务建模和问题定位。", followup: "进一步准备：各选一个最有代表性的 Bug。" },
        { id: "q-general-4", source: "resume", question: "你的项目和实习中，哪件事最有技术含量？", answer: "根据面试方向选择：AI 应用后端岗位优先讲知枢的 Outbox + 幂等消费或真实工具审批；传统 Java 后端可讲北软 execution 残留；企业应用集成岗位可讲用友多页签 JSON 到 AggVO。先给结论，再用背景、约束、方案和验证展开。", followup: "不要同时摊开三件事，选一件讲深。" },

        { id: "q-zhishu-1", source: "zhishu", question: "知枢是从零开发的吗？你与 CloudCLI 的边界是什么？", answer: "不是从零实现 Claude Code。我保留了 CloudCLI 的 React、Node.js 和 Provider 执行底座，核心新增是 Spring Boot Control Plane，以及围绕 Task / Attempt、审批、取消重试、可靠事件、Artifact 验收和 Worktree 隔离的一整套治理链路。", followup: "准备说清保留了什么、新增了什么、为什么这样拆。" },
        { id: "q-zhishu-2", source: "zhishu", question: "为什么要分 Control Plane 和 Execution Plane？", answer: "控制面负责稳定业务事实和治理：任务、执行尝试、审批、状态机、事件与产物；执行面负责 Provider、工具和工作区操作。两者变化频率、运行环境和故障模式不同，通过版本化 Runtime Protocol 解耦后，可以替换执行器而不破坏业务状态模型。", followup: "追问：为什么 Java 与 Node 不共享数据库？" },
        { id: "q-zhishu-3", source: "zhishu", question: "Task 和 Attempt 为什么不能合并？", answer: "Task 表示稳定业务目标，Attempt 表示某一次具体执行。重试不应该覆盖上一次执行历史，因此 Retry 创建新的 Attempt，并冻结执行器、模型、能力和权限快照。这样同一 Task 可以保留多轮执行证据，也便于审计和比较。", followup: "类比：订单与支付尝试、作业与执行批次。" },
        { id: "q-zhishu-4", source: "zhishu", question: "你实现了 Exactly-Once 吗？", answer: "没有，准确语义是 At-Least-Once + 幂等消费。Node 的 Outbox 可能重试投递，Spring 通过 eventId 与 runId + sequence 等唯一约束去重，并在事务里完成事件保存和状态投影，最终让重复投递表现为一次业务效果。", followup: "面试中主动纠正术语，比夸大更可信。" },
        { id: "q-zhishu-5", source: "zhishu", question: "Approval 如何真正阻止 Tool 执行？", answer: "阻断点在 Node 的 Permission Hook。Hook 创建 pending Promise，事件传到 Spring 持久化审批并通过 SSE 展示；用户批准或拒绝后，决策回调 Runtime 才 resolve。取消、迟到批准和重复决策都有明确竞态保护。", followup: "重点说明不是前端弹窗，而是工具执行前真正暂停。" },
        { id: "q-zhishu-6", source: "zhishu", question: "为什么使用 SSE，而不是全部使用 WebSocket？", answer: "这里主要是服务端向浏览器持续推送任务事件，SSE 的单向语义、HTTP 兼容和自动重连更贴合；配合事件 ID 和 Last-Event-ID 可以断线续传。审批决策等客户端写操作仍通过普通 HTTP，职责更清楚。", followup: "如果被问双向高频交互，再说明 WebSocket 的适用场景。" },
        { id: "q-zhishu-7", source: "zhishu", question: "多 Agent 为什么使用 Git Worktree？", answer: "多个 Agent 共用主工作区会覆盖彼此修改，也可能污染用户未提交内容。每个 Worker 绑定独立 Worktree 和 Lease，候选修改先形成 commit 并经过固定 build / test，再由 Integration Worktree 顺序应用，最终只允许满足所有权与祖先关系校验的 fast-forward。", followup: "追问：两个 Agent 修改同一文件时如何处理冲突？" },
        { id: "q-zhishu-8", source: "zhishu", question: "如果知枢要上线生产，你会优先补什么？", answer: "优先补 OS 级沙箱与资源、网络、目录限制，其次是审批超时与 Outbox 死信处置、Secret 管理和细粒度审计，再做真实负载下的 Worker Registry、调度与限流。只有吞吐证明需要时才引入 MQ。", followup: "不要把当前 Demo 能力说成生产级沙箱。" },

        { id: "q-yonyou-1", source: "yonyou", question: "为什么简历里没有 Spring Boot？", answer: "实习项目基于用友 NCC / YonBIP 企业平台，接口资源主要使用平台扩展机制和 JAX-RS，而不是 Spring Boot。后端能力仍包含服务分层、HTTP / JSON、SQL、业务对象、异常处理和跨系统联调，不需要为了迎合技术栈硬包装。", followup: "可以补充 JAX-RS 与 Spring MVC 的区别。" },
        { id: "q-yonyou-2", source: "yonyou", question: "为什么外部 JSON 不能直接写数据库？", answer: "NCC 单据通常包含业务校验、默认值、参照对象、主子表关系和平台事件。直接 insert 会绕过平台业务层，可能造成数据不完整或后续流程异常。正确做法是校验并映射成主 VO、子表 VO 和 AggVO，再调用标准单据保存能力。", followup: "追问准备：唯一性校验和业务参照怎么处理？" },
        { id: "q-yonyou-3", source: "yonyou", question: "上级部门为什么可能查出多个？", answer: "企业系统里同名或同编码部门可能存在于不同组织，仅按名称或编码查询不足以形成业务唯一键。排查时要结合组织范围、有效状态和层级上下文，用 SQL 验证实际匹配结果。修改事件还要同步新的父节点，避免外部层级失真。", followup: "用 STAR 结构讲完整排查过程。" },
        { id: "q-yonyou-4", source: "yonyou", question: "接口联调一般怎么排查？", answer: "先确认 URL、HTTP 方法与鉴权，再核对请求 JSON 和字段映射；通过请求响应日志判断第三方返回，同时用 SQL 核验源数据、参照主键和单据状态。把问题定位到源数据、转换逻辑、网络调用或对方系统中的具体一层。", followup: "日志注意业务主键、异常栈和敏感信息脱敏。" },
        { id: "q-yonyou-5", source: "yonyou", question: "批量提醒为什么不能只用一个大 try-catch？", answer: "一个大 try-catch 可能让单条失败直接中断整个批次。按人员或业务项建立单条异常边界，可以继续处理后续数据，并记录精确业务主键和失败原因；是否重试仍取决于接口幂等性与错误类型。", followup: "追问：为什么第三方接口不能无限重试？" },
        { id: "q-yonyou-6", source: "yonyou", question: "怎么保证跨系统数据一致性？", answer: "先明确业务唯一键和字段语义；创建类调用要有幂等查询或约束；失败必须留下可定位日志，并按业务要求设计重试或补偿。不能仅凭 HTTP 成功判断业务成功，还要解析响应并用 SQL 或对端结果核验。", followup: "不要泛泛回答“加事务”，本地事务无法覆盖外部系统。" },

        { id: "q-beiruan-1", source: "beiruan", question: "Task 和 Execution 有什么区别？", answer: "Task 是等待某个用户处理的业务操作点；Execution 是 Flowable 内部描述流程执行路径或 token 的运行时对象。并行流程里，一个流程实例可能同时存在多个 Execution。Task 完成并不代表所有执行路径都已结束。", followup: "这题要自然连接到 execution 残留案例。" },
        { id: "q-beiruan-2", source: "beiruan", question: "为什么 Execution 残留会让流程无法结束？", answer: "并行流程的汇聚和结束依赖运行时 token 状态。撤回后旧分支 Execution 没有清理，新一轮又产生执行路径，引擎可能认为仍有分支未到达 join 或 end，因此当前 Task 虽已完成，父流程仍不满足结束条件。", followup: "准备说明如何对比正常与异常 execution tree。" },
        { id: "q-beiruan-3", source: "beiruan", question: "模型生成问题和运行时问题怎样区分？", answer: "空条件和多级并行可能在低代码配置转 BPMN 时就出现缺边、条件或网关关系错误；Execution 残留则发生在流程运行之后。先用最小复现检查生成模型是否与设计器一致，再决定查模型转换还是 Runtime 状态。", followup: "不要把所有 Flowable Bug 混成一个故事。" },
        { id: "q-beiruan-4", source: "beiruan", question: "历史流程变量为什么会导致错误自动审批？", answer: "流程变量的生命周期可能跨越多个任务。流程退回或重复进入同一节点时，如果影响自动审批判断的历史变量没有重新初始化，新一轮就可能沿用旧状态，从而错误跳过人工处理。修复要隔离历史状态与当前轮次。", followup: "追问：为什么不每次新建完整流程实例？" },
        { id: "q-beiruan-5", source: "beiruan", question: "多部门用户的创建部门为什么显示错误？", answer: "表单中保存的实际创建部门是正确的，但通知和系统字段解析优先取了账号默认部门。最小修复是在解析层调整优先级：表单实际部门优先，账号部门只作兜底，而不是修改影响范围更大的公共部门查询 SQL。", followup: "突出“定位层次”和“最小修改”原则。" },
        { id: "q-beiruan-6", source: "beiruan", question: "你说的 17 项回归验证了什么？", answer: "它是与 PC / 移动端系统字段、消息通知和流程中心字段相关的回归项，验证字段配置、取值优先级及关联场景没有被修改破坏。不能表述成全平台 17 个端到端测试。", followup: "如果面试官问清单，按真实保存的测试记录回答。" },
        { id: "q-beiruan-7", source: "beiruan", question: "如何控制公共工作流模块的修改风险？", answer: "先用最小流程复现并判断问题属于配置、模型还是运行时；修改只落在必要链路；增加定向测试并回归关联流程；提交前检查精确 diff、依赖和构建产物，测试环境验证后再推进。", followup: "准备一个“为什么没有大规模重构”的回答。" }
    ],

    checklist: [
        { id: "check-self-30", group: "简历总览", text: "能在 30 秒内完成 HR 版自我介绍" },
        { id: "check-self-60", group: "简历总览", text: "能在 60 秒内完成技术面自我介绍" },
        { id: "check-compare", group: "简历总览", text: "能说清用友、北软、知枢三段经历的差异和联系" },
        { id: "check-java", group: "简历总览", text: "能结合真实经历回答为什么选择 Java 后端" },
        { id: "check-zs-pitch", group: "知枢项目", text: "熟练口述知枢 15 秒和 1 分钟版本" },
        { id: "check-zs-arch", group: "知枢项目", text: "能画出 Control Plane / Execution Plane 主链路" },
        { id: "check-zs-model", group: "知枢项目", text: "能解释 Task / Attempt、Outbox、审批和 Artifact" },
        { id: "check-zs-metrics", group: "知枢项目", text: "能准确解释 24 suites / 103 tests、347 pass 和 8/8 的口径" },
        { id: "check-zs-boundary", group: "知枢项目", text: "能诚实说明开源边界和生产化缺口" },
        { id: "check-yy-pitch", group: "用友实习", text: "能在 1 分钟内介绍用友实习" },
        { id: "check-yy-parent", group: "用友实习", text: "能用 STAR 深讲父部门匹配问题" },
        { id: "check-yy-openapi", group: "用友实习", text: "能画出 JSON → VO → AggVO → 平台保存链路" },
        { id: "check-yy-stack", group: "用友实习", text: "能解释 JAX-RS、NCC / YonBIP 与 Spring Boot 的边界" },
        { id: "check-br-pitch", group: "北软实习", text: "能在 1 分钟内介绍北软实习" },
        { id: "check-br-runtime", group: "北软实习", text: "能解释 Task / Execution 和撤回残留案例" },
        { id: "check-br-collab", group: "北软实习", text: "能解释多人顺序协办、回退和历史变量污染" },
        { id: "check-br-regression", group: "北软实习", text: "能准确说明 17 项相关回归的边界" },
        { id: "check-br-boundary", group: "北软实习", text: "对 Redis、Docker 和未进入 test 的功能不夸大" },
        { id: "check-star", group: "面试冲刺", text: "准备至少 2 个能连续讲 3 分钟的 STAR 故事" },
        { id: "check-mock", group: "面试冲刺", text: "完成一轮随机模拟问答并复习所有“不会/模糊”项" },
        { id: "check-question", group: "面试冲刺", text: "准备 2 个向面试官提问的问题" }
    ]
};
