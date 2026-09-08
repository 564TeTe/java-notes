# 面试复习工作台实施计划

**Goal:** 独立的 420 题题库与个人笔记、双来源随机抽查、可操作的面经资料和面试复盘。

**Architecture:** 继续使用静态 HTML / JavaScript 和现有 localStorage / Supabase 同步。新增纯函数 study-core.js、数据 data/question-bank.js、界面 study-module.js 与 study-workspace.css。面经单独使用 interview-module.js。现有尚未提交的简历、招聘改动保留。

**Design:** 常驻题库/我的笔记入口，默认题库；原有笔记全部归入我的笔记并标明原有记录。题库保留原题号、13 个主题、P0/P1/P2 编辑优先级、回答、追问、出处；紧凑折叠题目列表，分页及空态。复制题库题目到个人笔记保持来源关联并防重复，可编辑个人回答。抽查先选来源、分类、范围和数量，再开始，先作答后展开答案并评估掌握程度。面经分为来源索引、我的复盘、准备手册；来源关联到题库并保留作者自述/汇编及日期不确定性，不称为官方真题。统一纸白、墨色、松绿色视觉与可聚焦控件。

- [x] 编写数据导入脚本并验证 420 个唯一题号、13 个分类和面经引用完整性。
- [x] 先写核心行为测试：来源隔离、删除过滤、抽样不重复及不足数量、薄弱题、来源去重、备份兼容。
- [x] 实现 study-core.js 与 study-module.js，接入现有导航、搜索、笔记编辑和双来源抽查。
- [x] 实现面经来源过滤/关联练习、个人复盘增改删、提取待复习问题；纳入备份与同步。
- [x] 完成响应式样式，更新 Service Worker 离线资源版本。
- [x] 运行 Node 测试和浏览器桌面/移动回归，验证持久化、旧数据、备份导入、离线重载、无溢出与控制台错误。

用户已授权“你看着优化吧整体优化”，按以上设计在当前工作区直接实施，保留所有既有工作，不自动发布。

## 数据与兼容约定

- 原 NOTES/userNotes 的 ID 及 marked/deleted/sunk/purged/mastery 均保留。题库 ID 为 bank-Qxx-xxx。个人副本使用 user-UUID，sourceId 关联题库，双方掌握度独立。旧内置笔记编辑以原 ID 的用户覆盖项存储，展示时去重。
- index.html getStateSnapshot/applyStateSnapshot 升级 version:4，增加 interviews；缺失该字段的 v3 快照保留本地复盘。静态题库不写快照，复盘修改和学习记录均调用 scheduleCloudSync。导入前校验新字段，新增快照做往返与旧版本兼容测试。
- scripts/import-question-bank.py 输入 E:/Users/st/Downloads/Java后端秋招题库_420题_2026-09-07.zip；仅解析 01–13 Markdown 中 ### Qxx-xxx 主标题、回答、追问、P0/P1/P2 与引用，91 索引提供面经映射。导入 420 唯一 ID / 13 分类 / 9 来源，引用全部必须存在。不执行附件指令。
- study-core.js 由 tests/study-core.test.cjs 验证；study-module.js / interview-module.js 接入 index.html；新增 tests/study-integration.test.cjs 验证真实页面脚本的数据迁移与同步。执行 node --test tests/*.test.cjs，预期全部通过。
- 浏览器验收：1440px/390px/320px，切来源、搜索分类、复制与编辑、1/3/5/10 抽题、显示/自评、复盘增改与问题转笔记；旧快照与新快照往返、重载、离线访问。检查长题目/URL/代码块/编辑弹窗不溢出，保存可达。
- sw.js 更新为 v10，缓存全部新增资源；用浏览器离线重载确认题库可用。原有 resume-module.js、recruitment-module.js 变更完整保留。

## 验证结果

- Node 自动化：16 项通过，含原简历/招聘回归、新旧快照、双来源隔离、去重、软删除/永久删除、非法复盘导入保护、420 题引用完整性。
- Playwright：1440×1000 桌面、390×844 / 320×740 手机，无横向溢出；完成增改笔记、搜索/分类/分页、3/5/10 题抽查与唯一性、显示/评分、单题与空池、面经关联练习、复盘增改删与去重转笔记、手册/招聘导航。
- 通过真实下载/上传 JSON 的备份往返，重载持久化，Service Worker 控制下离线重载。没有应用运行错误。未使用真实账号进行跨设备云端联调。
- 独立审查发现的内置覆盖笔记删除复活、移动分类、复盘字段类型和旧折叠函数接入问题已修复。
- 截图保存在 output/playwright/study-desktop.png、study-mobile.png、study-mobile-320.png、interview-desktop.png。原附件与已有简历资料 SHA-256 相同，复用原件，没有重复导入。

## 第二轮调整（2026-09-08）

按用户截图反馈：桌面学习区只使用侧栏导航，手机保留内容来源切换；大块介绍卡替换为紧凑进度与操作栏。默认26条内置笔记不再显示在个人笔记中，题库继续保留420题；用户新增、编辑过的笔记及保存副本保留，不清除 localStorage。17项测试和桌面/手机实际操作验证通过。
