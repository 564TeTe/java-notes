# 部署与多端同步

## 1. GitHub Pages

1. 在 GitHub 创建公开仓库 `java-notes`。
2. 将本目录文件提交到仓库的 `main` 分支。
3. 打开仓库 `Settings -> Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. 选择 `main` 和 `/ (root)`，保存。
6. 网站地址为 `https://<用户名>.github.io/java-notes/`。

## 2. Supabase 同步

1. 创建 Supabase 项目。
2. 在 `SQL Editor` 执行 `supabase-schema.sql`。
3. 在项目设置/API 页面复制 Project URL 与 publishable key。
4. 填入 `sync-config.js`，不要使用 `service_role` key。
5. 在 Supabase Auth URL Configuration 中加入 GitHub Pages 网站地址。
6. 重新提交后，电脑和手机使用同一邮箱账号登录即可同步。

没有配置 Supabase 时，应用仍能离线使用，并可通过“更多 -> 数据与同步”导入或导出备份。
