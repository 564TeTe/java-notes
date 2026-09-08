# 移动端控件优化实施计划

目标：让手机上的选择、筛选和分页紧凑易用，并统一图标。

1. 修改 `study-module.js` 和 `interview-module.js`：紧凑共享分页、单一答案开关、删除冗余文案，保留原有过滤与分页语义。
2. 新增 `workspace-controls.js` 和 `workspace-controls.css`：为移动端 select 提供页面内选项及题数分段按钮，搜索长列表，保留原生 change/form 行为；移动端表单面板和焦点管理。
3. 修改 `workspace-shell.js`：统一 SVG 导航图标，接入渲染增强。更新 `workspace-shell.css` 中相应图标和移动端间距。
4. 更新 `icon.svg`、`icon-192.png`、`icon-512.png`、`manifest.webmanifest`、`index.html` 和 `sw.js`，确保新资源与缓存版本一致。
5. 在浏览器验证 390px、360px、桌面宽度，检查题库、公司面经、抽查与表单。运行 `node --test tests/*.test.cjs`，检查 diff 后记录验证结果。
