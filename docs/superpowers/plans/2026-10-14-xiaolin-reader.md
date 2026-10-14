# 小林java Implementation Plan

> **For agentic workers:** Execute this plan task by task; review the spec and implementation before completion.

**Goal:** 将已采集资料整理为与题库隔离、适合连续学习的阅读模块。

**Architecture:** 静态构建转换原始 Markdown 为安全 HTML，生成独立索引及分专题数据。阅读核心管理检索和状态，视图管理书架和连续正文，模块负责数据加载、事件和本地持久化；网站只增加导航、渲染入口和备份字段。

**Tech Stack:** 原生 JavaScript/CSS、Node 测试、构建期 markdown-it + cheerio（复用爬虫的依赖）、静态 JSON、现有 Service Worker。

## Task 1 — 数据转换及核心
- [x] 添加 `tests/xiaolin-core.test.cjs` 与 `tests/xiaolin-build.test.cjs`，验证所有原小节与答案完整、稳定 ID、检索和状态边界。先运行确认缺少模块导致失败。
- [x] 创建 `scripts/build-xiaolin.cjs`，生成 `data/xiaolin/catalog.js` 与 17 个专题 JSON。白名单清洗 HTML，保留图表/嵌套列表，来源 URL 限制为 HTTP(S)。保留原始 Markdown 作为内容核对依据。
- [x] 创建 `xiaolin-core.js`：索引、检索、状态规范化、进度统计；运行新测试。

## Task 2 — 学习阅读体验
- [x] 创建 `xiaolin-view.js`、`xiaolin-module.js`、`xiaolin.css`：专题书架、目录、连续章节、字号/专注、阅读位置、收藏/笔记/已读。
- [x] 添加 `tests/xiaolin-module.test.cjs` 覆盖持久化、备份和保存失败；加载使用请求序号隔离并发，失败可重试。
- [x] 修改 `workspace-shell.js`、`study-module.js`、`index.html` 接入导航/渲染及备份。旧备份不覆盖新状态；新字段先校验。保持旧模块行为。

## Task 3 — 验证与交付
- [x] 更新 `sw.js`、`version.json`、`app-updates.js` 和 index 资源版本为 70，新增文本资源离线缓存；更新 DEPLOY 说明。
- [x] `node --test tests/*.test.cjs` 验证全套测试，检查 `git diff --check`。
- [x] 本地 HTTP 服务和浏览器实际验证书架、章节、图文、笔记、书签、进度与手机无横向溢出；验证题库隔离和离线恢复。
- [x] 请求独立代码审查，修复实质问题，展示本地预览并交付。

## 验证结果（2026-10-15）

- 全套 Node 测试：306/306 通过；`git diff --check` 通过。
- 独立逐字核对：945 个原答案 Markdown 全部一致；生成 17 专题、91 章节，保留 491 代码块、30 表格。
- 浏览器：桌面 1440px、手机 390px/320px，无整页横向溢出；字号、专注、笔记刷新恢复、收藏、搜索、原图、夜间配色与断点切换通过。
- 实际离线：Docker 22 小节读取成功；模拟消息队列专题缓存缺失后，失败提示与联网重试通过。
- 题库隔离：阅读操作前后题库集合、掌握程度、收藏与已背记录完全一致。
- 独立代码审查发现并修复 3 项边界问题，复审通过：坏 entries 拒绝、导图和阅读记录联合导入失败回滚、跨手机断点目录同步。
- 本地预览：`http://127.0.0.1:8768/?view=xiaolin`。远程未发布。
