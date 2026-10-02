# 注解专区实施计划

> **For agentic workers:** Use subagent-driven-development or executing-plans to implement this plan task by task.

**Goal:** 在 Java 面试工作台中创建可系统学习和随时查阅的 Java 后端常用注解专区。

**Architecture:** 沿用独立词典视图模式，数据、纯搜索逻辑和页面分开。专区是可返回的阅读视图，保留底层题库、笔记、抽查和词典状态；桌面顶部与移动端“更多”提供入口。

**Tech Stack:** 原生 JavaScript、HTML details、现有 CSS 主题变量、Node test runner、Playwright CLI。

- [x] 数据：`annotation-data.js`，约 70 个独立注解、9 分类、基础原理和自定义注解教程。每条说明作用、包名、作用位置、处理阶段、参数、示例、误区、面试问答和官方参考。以 Java 17+、Spring Boot 3 / Spring 6 示例为主，注明版本差异。
- [x] 搜索和页面：`annotation-core.js`、`annotation.js`、`annotation.css`。名称优先匹配，支持可选 @ 前缀、中文全文、分类和高频组合筛选。详情默认折叠，支持键盘和中文输入法，空结果可清空筛选。
- [x] 集成：`index.html`、`study-module.js`、`workspace-shell.js`。添加独立模式、正确显示标题、顶部导航、移动“更多”、搜索快捷键，以及返回原视图的筛选、页码和滚动恢复。
- [x] 验证：先测试搜索、数据完整性、安全渲染、状态隔离，再实现；运行全部 Node 测试并检查桌面/手机、深色主题、导航往返、离线重载和控制台。
- [x] 发布资源：统一升级本地发行版本到 54，将新资源纳入 `sw.js` 离线应用壳。检查改动，不自动提交或推送。

文件责任：目录内容 worker 负责数据及其测试；UI worker 负责纯搜索、页面、样式及其测试；主代理负责现有文件集成、往返测试、版本、浏览器验证及独立审查。

验证结果：156 项 Node 测试全部通过；脚本语法与 diff 检查通过。浏览器确认名称优先排序、底层滚动恢复、移动分类与高频筛选、320–1440px 无横向溢出、四种主题以及断网重载后查询和展开详情。
