# 最先学会的 40 条

> Java 后端命令速查表 · 入门随手查 · 2026-09-13  
> 从优化完整版第 22 章提取。PID、路径、地址、服务名均为示例，先替换再执行；这是命令参考，不是一整段脚本。


**本节严格按 40 个编号列出高频命令。** 是入门优先级，不是全部知识；示例对象仍需替换。跨平台工具需要安装，表中“工具终端”表示已安装该工具的 CMD / PowerShell / Bash；复杂参数仍按对应章节的 Shell 版本执行。

**环境提醒：**CMD、PowerShell 与 Bash 不是同一套语法。查询端口后必须核对进程身份；不要把强制终止、删库或删卷作为第一步。Git 提交、文件复制、安装、构建和启动服务会修改状态，不是只读查询。复制命令前先看当前机器和目录。

| 编号 | 环境 | 命令 | 你要解决的问题 |
|---|---|---|---|
| 01 | PowerShell | `Get-Location` | 我在哪个目录 |
| 02 | PowerShell | `Set-Location 'D:\project'` | 进入项目 |
| 03 | PowerShell | `Get-ChildItem -Force` | 看文件，包括隐藏项 |
| 04 | PowerShell | `Get-Content .\app.log -Tail 100 -Wait` | 看 Windows 实时日志 |
| 05 | PowerShell | `Get-Command java -All` | Java 实际指向哪里 |
| 06 | PowerShell | `Get-NetTCPConnection -LocalPort 8080 -State Listen` | 谁监听 8080 |
| 07 | PowerShell | `Get-Process -Id 12345` | 查这个 PID 是谁 |
| 08 | PowerShell | `Test-NetConnection 192.168.1.10 -Port 8080` | 远端 TCP 端口能连吗 |
| 09 | Linux Bash | `pwd` | 看 Linux 当前位置 |
| 10 | Linux Bash | `ls -lah` | 看文件和权限 |
| 11 | Linux Bash | `cd /opt/app` | 进入服务目录 |
| 12 | Linux Bash | `mkdir -p logs` | 建目录 |
| 13 | Linux Bash | `cp app.yml app.yml.bak` | 修改前备份配置 |
| 14 | Linux Bash | `less app.log` | 分页看大日志 |
| 15 | Linux Bash | `tail -n 100 -F app.log` | 跟踪实时及轮转日志 |
| 16 | Linux Bash | `grep -nC 5 'ERROR' app.log` | 找报错并保留上下文 |
| 17 | Linux Bash | `find . -type f -name '*.jar'` | 找构建产物 |
| 18 | Linux Bash | `ps -ef` | 看运行进程 |
| 19 | Linux Bash | `ss -lntp 'sport = :8080'` | 精确查 TCP 监听 |
| 20 | Linux Bash | `top` | 谁在吃 CPU / 内存 |
| 21 | Linux Bash | `free -h` | 看机器可用内存 |
| 22 | Linux Bash | `df -h` | 看磁盘剩余空间 |
| 23 | Linux Bash | `curl -i --max-time 10 http://127.0.0.1:8080/` | 测接口；Windows 用 curl.exe |
| 24 | 工具终端 | `ssh deploy@192.168.1.10` | 连远程服务器 |
| 25 | 工具终端 | `scp app.jar deploy@192.168.1.10:/opt/app/releases/` | 上传 Jar |
| 26 | 工具终端 | `git status -sb` | 当前分支和改动 |
| 27 | 工具终端 | `git diff` | 看未暂存改动 |
| 28 | 工具终端 | `git add src/` | 暂存指定目录修改 |
| 29 | 工具终端 | `git commit -m "fix: correct validation"` | 本地提交 |
| 30 | 工具终端 | `git fetch origin` | 获取远端最新状态 |
| 31 | 工具终端 | `git pull --ff-only` | 保守地更新当前分支 |
| 32 | 工具终端 | `git push` | 推送已提交内容 |
| 33 | 工具终端 | `git switch -c fix/demo` | 新建自己的工作分支 |
| 34 | 工具终端 | `git log --oneline -10` | 看最近历史 |
| 35 | 工具终端 | `git stash push -u -m "wip"` | 临时保留修改和未跟踪文件 |
| 36 | JDK 终端 | `java -version` | 看运行版本 |
| 37 | JDK 终端 | `java -jar app.jar` | 启动可执行 Jar |
| 38 | Maven 终端 | `mvn clean verify` | 构建并执行已配置验证 |
| 39 | Docker 终端 | `docker ps -a` | 看运行和已退出容器 |
| 40 | Docker 终端 | `docker logs --tail 200 -f app` | 看容器日志 |

学会以后补上 `jcmd`、`mvn dependency:tree`、`systemctl`、`journalctl`、MySQL 和 Redis 查询；**不要求第一天记住所有工具，也不把强制删除列为入门必练。**