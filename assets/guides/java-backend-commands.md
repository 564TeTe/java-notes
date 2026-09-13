# 程序员必备命令速查表 · Java 后端实战版

> **用途：查命令、看懂结果、按步骤排查，而不是从头背到尾。**  
> 适用：Windows CMD / PowerShell / Linux / WSL / Git / Java / Maven / Gradle / Docker / MySQL / Redis / SSH / Nginx。  
> 修订日期：2026-09-13 · 版本：2.0 · 阅读方式：先看第 0 章，再按问题跳转。

## 关于这次整理

本版以你提供的《程序员必备命令速查表（Java 后端向）》为底稿，保留原来的 25 个主要分类及编号，统一表格、示例和说明。原稿已有命令作通俗化整理；**【补充】**表示新增场景或知识；**【校正】**表示纠正原稿容易误解的表述、环境限制或不够安全的示例。重要校正与补充列出官方文档或上游手册依据，集中见第 28 章。

**这不是可以整段自动执行的脚本。** 每个示例都是独立的，PID、端口、路径、服务名、分支名和数据库名必须按实际情况替换。文中的 `app.jar`、`my-app`、`demo_db`、`12345` 等均为示例，不代表你的真实环境。没有在你的电脑或服务器上运行这些命令；本版核对的是语法、用途和使用边界，不保证所有选项适用于每个旧版本。

**建议入口：** 日常开发看第 1、3、5、7 章；部署排障看第 12～15、21 章；先学少量命令看第 22 章；Windows 与 Ubuntu 混用看第 26 章。

## 目录

| 编号 | 分类 | 编号 | 分类 |
|---|---|---|---|
| 0 | [先分清环境、符号和风险](#c00) | 15 | [Nginx](#c15) |
| 1 | [Windows 基础命令](#c01) | 16 | [压缩与解压](#c16) |
| 2 | [Linux 基础命令](#c02) | 17 | [环境变量](#c17) |
| 3 | [进程、端口与资源排查](#c03) | 18 | [HTTP / REST / SSE 调试](#c18) |
| 4 | [网络排查命令](#c04) | 19 | [常用辅助 CLI](#c19) |
| 5 | [Git 必会命令](#c05) | 20 | [Node / npm / pnpm](#c20) |
| 6 | [Java / JDK / JVM](#c06) | 21 | [问题 → 排查步骤](#c21) |
| 7 | [Maven](#c07) | 22 | [最先学会的 40 条](#c22) |
| 8 | [Gradle](#c08) | 23 | [学习顺序与练习](#c23) |
| 9 | [Docker / Compose](#c09) | 24 | [终端常用命令片段](#c24) |
| 10 | [MySQL](#c10) | 25 | [一句话记忆](#c25) |
| 11 | [Redis](#c11) | 26 | [WSL 与跨系统开发](#c26) |
| 12 | [SSH / SCP / SFTP](#c12) | 27 | [高风险操作清单](#c27) |
| 13 | [systemd 服务管理](#c13) | 28 | [修订记录与核对来源](#c28) |
| 14 | [日志排查](#c14) |  |  |

---

<a id="c00"></a>
## 0. 【补充】先分清环境、符号和风险

### 0.1 终端软件不等于命令环境

Windows Terminal、IDEA 终端、VS Code 终端、Electerm 是你输入命令的“窗口”；真正决定语法的是窗口里运行的 **Shell（命令解释器）**，以及它连接的是本机还是远程服务器。

| 看到的环境 | 本文标记 | 路径示例 | 先记住 |
|---|---|---|---|
| 命令提示符，常见 `C:\Users\...>` | CMD | `D:\project` | 变量是 `%JAVA_HOME%`；跨盘 `cd /d` |
| 常见 `PS C:\Users\...>` | PowerShell | `D:\project` | 变量是 `$env:JAVA_HOME`；用 `curl.exe` 指定原生 curl |
| Ubuntu / Linux / WSL 中的 Bash | Bash | `/opt/app` | 变量是 `$JAVA_HOME`；支持 `grep`、`ss` 等 Linux 工具 |
| Git Bash | Git Bash | `/d/project` | 可以跑 Git 和部分 Unix 工具，不等于完整 Linux 系统 |
| `mysql>` | MySQL 客户端 | 不适用 | 输入 SQL；不能在这里直接运行 `mysqldump` |
| `127.0.0.1:6379>` | Redis 客户端 | 不适用 | 输入 `GET`、`TTL` 等 Redis 命令 |

提示符只是线索，也可能被主题修改；不确定时先确认当前 Shell。**同一条 Linux 命令放到 PowerShell 里，不一定能用。** 本文标为 Bash 的系统管理命令，默认指 Linux/WSL 的 Bash，不保证 Git Bash 或 macOS 支持。

### 0.2 读懂命令里的符号

下表主要针对 **Bash**；CMD / PowerShell 有相似符号，但行为不完全相同。[S01]

| 写法 | 直白理解 | 例子 / 注意 |
|---|---|---|
| `命令 选项 参数` | 做什么、怎么做、对谁做 | `tail -n 100 app.log`：看日志最后 100 行 |
| `.` / `..` / `~` | 当前目录 / 上级目录 / 家目录 | Bash 的 `cd ~` 返回自己的家目录 |
| `\|` | 把左边的输出交给右边处理 | `ps -ef \| grep '[j]ava'` |
| `>` | 输出到文件，通常会覆盖旧内容 | `command > result.txt`；文件可能在命令执行前就被截断 |
| `>>` | 追加到文件末尾 | `command >> app.log` |
| `2>&1` | 把错误输出合到当前标准输出 | `command > app.log 2>&1`；顺序不能随便换 |
| `&&` | 前一条成功才运行后一条 | `mkdir -p demo && cd demo` |
| `;` | 前一条结束就接着执行，不管成功失败 | 不要拿它替代部署中的成功判断 |
| 行尾 `&` | 在当前 Shell 中后台运行 | 不等于守护进程，不保证退出终端后继续运行 |
| `*` | Shell 通配符 | `*.log` 是一组文件，不是一个文件名 |
| 引号 | 把含空格、`&` 等内容当作整体 | 路径、URL 尽量加引号；Bash 单引号内不展开变量 |

**多行续写不同：** Bash 使用行尾反斜杠 `\`，CMD 使用 `^`，PowerShell 使用反引号。本文 Windows 命令尽量单行，避免混用。PowerShell 7 支持 `&&`，Windows PowerShell 5.1 不支持；兼容旧版时一条一条执行。[S01][S02]

### 0.3 风险标记与执行前检查

| 标记 | 意思 | 例子 |
|---|---|---|
| **查询** | 主要读取状态，但仍可能有权限、性能和泄密风险 | 查日志、查进程、看依赖 |
| **变更** | 会修改文件、配置、代码、服务或数据 | `git commit`、`docker stop`、SQL `UPDATE` |
| **高风险** | 可能丢数据、中断业务、扩大访问范围或明显影响性能 | 强制杀进程、删卷、堆转储、清库 |

每次变更前先确认：**哪台机器 → 哪个目录 → 哪个环境 → 哪个对象 → 是否有恢复办法。** 不要默认使用管理员或 root；“权限不足”不等于应该给所有东西加 `sudo`。

### 0.4 不知道怎么退出，也是一种常见卡点

| 正在做什么 | 怎么退出 |
|---|---|
| `tail -f`、`ping`、正在前台运行的程序 | 通常按 `Ctrl+C`；前台程序会收到中断请求 |
| `less`、`man`、`top` | 按 `q` |
| SSH 远程会话 | 输入 `exit`，确认回到本机提示符 |
| MySQL / Redis 客户端 | 输入 `exit` 或 `quit` |
| Vim 编辑器 | `Esc` 后输入 `:q!` 放弃，或 `:wq` 保存退出 |

---

<a id="c01"></a>
## 1. Windows 基础命令

### 1.1 CMD：目录、文件和程序位置

**环境：CMD。** 下面不是 PowerShell 专用语法。[S03]

| 命令 / 示例 | 直白解释 | 注意 |
|---|---|---|
| `cd` | 看当前所在目录 | 不加路径时查询位置 |
| `cd /d "D:\project"` | 切换到 D 盘的项目目录 | **【校正】**跨盘加 `/d`，不能只写 `cd D:\project` |
| `cd ..` | 回上一级 | 先看清当前目录 |
| `dir` / `dir /a` | 看文件 / 包含隐藏文件 | `dir /s /b *.jar` 可递归列出 Jar 路径 |
| `mkdir logs` | 建文件夹 | `md` 是同类写法 |
| `copy app.yml app.yml.bak` | 复制配置做备份 | 已有同名目标时注意覆盖提示 |
| `move app.jar backup\` | 移动文件 | 也可以用于改名 |
| `ren old.txt new.txt` | 给文件改名 | 改名不等于复制 |
| `type application.yml` | 查看文本 | 大日志不适合一次全部输出 |
| `tree /F` | 查看目录树并列出文件 | 大项目输出很多 |
| `where java` | 查 PATH 中能找到的 Java 程序 | 多条结果说明可能装了多个版本 |
| `echo %JAVA_HOME%` | 查看变量值 | 不适用于 PowerShell |
| `set JAVA_HOME` | 列出以 JAVA_HOME 开头的变量 | 不是设置新值 |
| `cls` | 清空显示 | 不会删除文件或清掉命令历史 |
| `del demo.tmp` | 删除指定文件 | **变更**：不要随意配通配符 |
| `rmdir empty-dir` | 删除空目录 | **变更**：非空目录不要直接升级成强删 |

### 1.2 PowerShell：优先使用完整命令名

| 命令 / 示例 | 直白解释 | 注意 |
|---|---|---|
| `Get-Location` | 我现在在哪个目录 | 相当于看当前位置 |
| `Set-Location "D:\project"` | 进入项目目录 | 不需要 CMD 的 `/d` |
| `Get-ChildItem -Force` | 看文件，包含隐藏项 | 相当于“列目录” |
| `New-Item -ItemType Directory -Path .\logs` | 新建日志目录 | 同名目录已存在时可能提示错误 |
| `Copy-Item .\app.yml .\app.yml.bak` | 复制文件 | 覆盖前先确认目标 |
| `Move-Item .\app.jar .\backup\` | 移动文件 | 目标目录应已存在 |
| `Get-Content .\app.log -Tail 100` | 看日志最后 100 行 | 比直接读完整文件更适合大日志 |
| `Get-Content .\app.log -Tail 100 -Wait` | 先看最近 100 行，再继续等新日志 | `Ctrl+C` 退出；文件轮转后可能要重新执行 |
| `Select-String -Path .\app.log -Pattern 'ERROR' -Context 3,5` | 搜错误并显示前 3 行、后 5 行 | 默认按正则匹配 |
| `Get-Command java -All` | 查 Java 命令实际指向哪里 | 可发现别名、脚本或多个可执行程序 |
| `where.exe java` | 调用 Windows 原生 where | **【校正】**PowerShell 的 `where` 通常是 `Where-Object` 别名 |
| `$env:JAVA_HOME` | 看 Java 环境变量 | 与 CMD 的 `%JAVA_HOME%` 区分 |
| `Get-Service '*mysql*'` | 查 MySQL 相关服务 | 先查实际名称，别默认一定叫 MySQL80 |
| `Remove-Item .\demo.tmp -WhatIf` | 预演会删除什么 | 这里只预演；实际删除属于变更 |

**【补充】如何确认 PowerShell 版本：**执行 `$PSVersionTable.PSVersion`。Windows PowerShell 5.1 把 `curl` 别名映射到 `Invoke-WebRequest`，因此本文 HTTP 示例在 Windows 上优先用 `curl.exe`；PowerShell 7 不默认提供这个别名。[S02]

### 1.3 命令找不到：别急着重新安装

PowerShell 中依次看：

```powershell
Get-Command java -All
where.exe java
$env:JAVA_HOME
$env:Path -split ';'
```

判断：找不到可能是未安装、PATH 没配置或终端没重开；找到多个可能是旧版本排在前面。**在 PowerShell 运行当前目录的脚本或程序，通常需要 `./` 或 `.\` 前缀**，例如 `.\mvnw.cmd -v`。涉及环境设置详见第 17 章。[S02][S04]

---

<a id="c02"></a>
## 2. Linux 基础命令

### 2.1 目录与文件

**环境：Linux / WSL 的 Bash。** 原稿的文件类命令保留，补充了备份、权限和使用边界。

| 命令 / 示例 | 直白解释 | 注意 |
|---|---|---|
| `pwd` | 看当前位置 | 删除、复制前先执行一次 |
| `ls -lah` | 详细列出文件，包括隐藏项和易读大小 | `l` 详细、`a` 隐藏、`h` 易读大小 |
| `cd /opt/app` / `cd ..` / `cd -` | 进目录 / 回上级 / 回上次目录 | 路径有空格时加引号 |
| `mkdir -p /opt/app/logs` | 连同缺失的上级目录一起创建 | `/opt` 下创建可能需要授权 |
| `touch app.log` | 文件不存在则创建空文件 | **【校正】**存在时主要更新时间戳，不会清空内容 |
| `cp app.yml app.yml.bak` | 复制文件做备份 | 同名目标可能被覆盖 |
| `cp -r app backup/` | 递归复制目录 | 目标目录是否已存在会影响最终层级 |
| `cp -a app app-backup` | 复制目录，并尽量保留属性和符号链接 | 备份时常用；权限不足可能无法完整保留 |
| `mv app.jar app-old.jar` | 移动或改名 | 注意目标覆盖和路径 |
| `rm -i demo.tmp` | 删除前询问 | **变更**：终端删除通常不进回收站 |
| `rmdir empty-dir` | 只删除空目录 | 比直接递归删除更保守 |
| `cat application.yml` | 查看小文件全文 | 配置中可能有账号、密码 |
| `less app.log` | 分页看大文件 | `/关键词` 搜索，`n` 下一个，`q` 退出 |
| `head -n 50 app.log` | 看开头 50 行 | 通常用来看文件格式 |
| `tail -n 100 app.log` | 看最后 100 行 | 启动报错时常用 |
| `tail -n 100 -F app.log` | 看最近日志并按文件名持续跟踪 | **【补充】**比 `-f` 更适合日志被改名、重建的情况 [S05] |
| `file app.jar` / `stat app.jar` | 看文件类型 / 大小、权限、时间等信息 | 文件扩展名不保证类型正确 |

**不要把 `rm -rf` 当默认删除方式。** 先 `pwd`、再 `ls` 确认目标，必要时先挪到备份目录。`cp` 或 `mv` 成功也不意味着备份一定完整；关键文件可以再核对大小或校验值。

### 2.2 搜文件名、搜文件内容，分开记

| 你要做什么 | 命令 | 看什么 |
|---|---|---|
| 按文件名找 Jar | `find /opt/app -type f -name '*.jar'` | 输出匹配路径；限制搜索范围 |
| 按文件名找配置 | `find . -type f -iname '*application*.yml'` | `-iname` 不区分大小写 |
| 只找大文件，先不删除 | `find /var/log -type f -size +100M -print` | 超过约 100 MiB 的文件 |
| 搜某个词 | `grep -n 'ERROR' app.log` | `-n` 显示行号 |
| 搜固定字符串 | `grep -nF 'orderId=1001' app.log` | `-F` 不把字符当正则 |
| 看匹配前后上下文 | `grep -nC 5 'NullPointerException' app.log` | 原因可能在异常前后 |
| 同时搜多种错误 | `grep -nE 'ERROR\|Exception' app.log` | `-E` 用扩展正则 |
| 在配置目录递归搜 | `grep -rn --include='*.yml' '8080' ./config` | 先收窄目录和文件类型 |
| 查程序来源 | `command -v java` / `type -a java` | 前者看解析位置，后者还能看别名、函数和多处来源 |
| 旧式程序查找 | `which java` / `whereis nginx` | 保留原稿命令；不同工具查找范围不同 |

**【校正】**`find` 找“文件”，`grep` 找“文件里面的内容”。`grep` 没有匹配时通常退出码为 1，不一定是程序故障。[S06]

### 2.3 文本处理：看得懂组合即可

```bash
# 数有多少行
wc -l app.log

# 排序后去重；uniq 本身只合并相邻重复行
sort users.txt | uniq

# 统计每个重复项出现次数，并把次数多的排前面
sort users.txt | uniq -c | sort -nr

# 用冒号分隔，取第一列
cut -d ':' -f 1 /etc/passwd

# 按默认空白分隔，取第一列
awk '{print $1}' access.log

# 仅把替换结果输出到终端，不修改原文件
sed 's/dev/prod/g' app.conf
```

**【补充】**GNU sed 中 `sed -i.bak 's/dev/prod/g' app.conf` 会先备份再原地改文件，属于变更；但全局把 `dev` 替换成 `prod` 可能误改业务值，不应当作生产配置切换方案。

### 2.4 【补充】权限、脚本和帮助

| 命令 | 用途 | 注意 |
|---|---|---|
| `whoami` / `id` | 查当前用户与用户组 | 权限问题先确认身份 |
| `ls -l start.sh` | 看脚本权限 | `x` 代表可执行权限 |
| `chmod u+x start.sh` | 给文件所有者增加执行权限 | **变更**；不要一上来 `chmod -R 777` |
| `bash -n start.sh` | 检查 Bash 脚本语法，不运行脚本 | 不能发现所有逻辑问题 |
| `bash start.sh` | 用 Bash 运行已审查的脚本 | **变更**；不要求脚本本身有执行位 |
| `./start.sh` | 直接执行当前目录脚本 | 依赖执行位和正确的首行解释器声明 |
| `bash -x start.sh` | 边执行边输出执行过程 | **不是预演**，会真实执行且可能泄露密钥 |
| `命令 --help` / `man 命令` | 看用法 | 内建命令可用 `help cd` |

来源：Bash 上游手册 [S01]；`tail`、`grep` 上游手册 [S05][S06]。原稿文件命令的基础用途沿用，新增的流程与风险说明为本次整理。

---

<a id="c03"></a>
## 3. 进程、端口与资源排查

### 3.1 先建立一个概念

**程序**是磁盘上的文件，**进程**是正在运行的一份程序，**PID**是进程编号，**端口**是服务收连接的入口。同一台机器可以有多个 Java 进程，所以查到 `java` 并不等于找对服务。

### 3.2 Windows：查端口 → 确认进程 → 再决定是否结束

优先使用 **Windows PowerShell** 的结构化查询：[S07]

```powershell
# 只看本机 8080 的 TCP 监听，不做模糊文本匹配
Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue |
    Select-Object LocalAddress, LocalPort, State, OwningProcess

# 把 12345 换成上一步的 OwningProcess
Get-Process -Id 12345

# 查看完整启动参数，区分不同 Java 服务；输出可能包含敏感信息
Get-CimInstance Win32_Process -Filter "ProcessId = 12345" |
    Select-Object ProcessId, Name, ExecutablePath, CommandLine
```

无结果不一定代表系统没有相关网络状态：先确认端口、TCP/UDP、权限和查询的是 Windows 还是 WSL。UDP 可用 `Get-NetUDPEndpoint -LocalPort 8080` 查询，不存在 TCP 的 Listen 状态。

CMD 备用方式：

```bat
netstat -ano -p tcp | findstr ":8080"
tasklist /FI "PID eq 12345"
```

**【校正】**`findstr 8080` 只是模糊匹配，可能匹配远端端口或 `18080`。即使用 `:8080`，也必须人工核对 **本地地址列**、完整端口、`LISTENING` 和 PID；不能“见到一行就杀”。

确认是自己的本地开发进程后，先在 IDEA / VS Code / 原终端里停止。确实无法正常停止时，再单独考虑：

```powershell
# 高风险：终止指定进程，先确认 PID
Stop-Process -Id 12345 -Confirm
```

或在 CMD 中使用 `taskkill /PID 12345`；不得不强制时才用 `taskkill /F /PID 12345`。**`Stop-Process` 不是 Java 的优雅停机接口；不加 `-Force` 也不代表会等业务正常收尾。** 系统服务优先使用对应服务管理方式。

### 3.3 Linux：精准查监听端口

```bash
# 查询：-l 监听，-n 数字地址，-t TCP，-p 进程
sudo ss -lntp 'sport = :8080'

# 备用查询：TCP 8080 且处于监听状态
sudo lsof -nP -iTCP:8080 -sTCP:LISTEN

# 核对指定进程身份和启动命令
ps -p 12345 -o pid,ppid,user,%cpu,%mem,etime,args
```

`sudo` 仅在已授权且需要查看其他用户进程时使用。`ss` 的过滤表达式比 `grep 8080` 更明确；UDP 用 `ss -lunp`。容器可能使用不同 PID / 网络命名空间，宿主机与容器里看到的编号不一定相同。[S08]

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `ps -ef` | 看全部进程与启动参数 | 查一次快照 |
| `ps -ef \| grep '[j]ava'` | 找 Java 相关进程，避免把 grep 自己也列出来 | 仍需核对 Jar 和路径 |
| `pgrep -af java` | 按完整命令行查 Java 相关进程 | 不等于只匹配业务 Jar |
| `top` / `htop` | 动态看谁占 CPU / 内存 | `htop` 可能需额外安装 |
| `kill -TERM 12345` | 给进程发送终止请求 | **变更**；应用可以捕获，不保证马上退出 |
| `kill -KILL 12345` | 立即强制结束，等同常见 `kill -9` | **高风险**；不能执行正常清理 |

**【校正】**原稿中的 `pkill java` 不再放进常用操作：它可能同时结束多个 Java 服务。受 systemd 管理的服务，优先 `sudo systemctl stop my-app`，不要绕过管理器乱杀进程。[S09]

### 3.4 资源结果怎么看

| 命令 | 先看哪里 | 不要误判 |
|---|---|---|
| `free -h` | `available`、swap 使用情况 | `free` 很少可能只是系统用了文件缓存 |
| `df -h` | 对应挂载点的 `Use%`、`Avail` | 看的是文件系统剩余空间 |
| `df -i` | inode 剩余量 | 还有容量也可能因小文件太多而写不进去 |
| `du -sh /opt/app` | 指定目录占用 | 不等同于整个磁盘使用量 |
| `uptime` | 运行时间，1/5/15 分钟平均负载 | 负载不是 CPU 使用百分比 |
| `top` | 目标 PID、CPU、RES、系统总体状态 | Linux 多核下单进程 CPU 可以超过 100% [S10] |

---

<a id="c04"></a>
## 4. 网络排查命令

### 4.1 把“网络通”拆成不同层次

**DNS 能解析 → 路由可达 → TCP 端口能连接 → TLS 成功 → HTTP 有响应 → 业务结果正确。** 前一层正常，不代表后一层正常。

| 目标 | Windows | Linux / WSL |
|---|---|---|
| 看本机 IP | `ipconfig /all` | `ip addr` |
| 看路由 | `route print` | `ip route` |
| 测 ICMP | `ping -n 4 192.168.1.10` | `ping -c 4 192.168.1.10` |
| 查 DNS | `nslookup example.com` | `nslookup example.com`；需安装对应工具 |
| PowerShell DNS 查询 | `Resolve-DnsName example.com` | 不适用 |
| 测 TCP 端口 | `Test-NetConnection 192.168.1.10 -Port 8080` | `nc -vz -w 3 192.168.1.10 8080` |
| 路由追踪 | `tracert example.com` | `traceroute example.com`；可能需安装 |
| 发 HTTP 请求 | `curl.exe -i http://127.0.0.1:8080/` | `curl -i http://127.0.0.1:8080/` |

**【校正】**`ping` 失败不一定是服务断了，可能只是 ICMP 被禁；`ping` 成功也不说明 8080 或数据库端口开放。`Test-NetConnection` 的 `TcpTestSucceeded: True` 才代表本次 TCP 连接测试成功，仍不代表接口业务正常。

`telnet 主机 端口` 保留为旧式替代方法，但可能未安装，且交互退出不直观；优先用上表中的 TCP 检测方式。不同 `nc` 实现的选项可能不同，先 `nc -h`。

### 4.2 HTTP 排查建议加超时

Bash：

```bash
curl -v --connect-timeout 3 --max-time 10 http://127.0.0.1:8080/
```

Windows：

```powershell
curl.exe -v --connect-timeout 3 --max-time 10 http://127.0.0.1:8080/
```

`--connect-timeout 3` 限制连接阶段，`--max-time 10` 限制整体传输时间。`-v` 会展示连接和请求细节，含 Token、Cookie 时不要直接把完整输出发给别人。[S11]

### 4.3 监听地址不是随便写的

| 地址 | 意思 |
|---|---|
| `127.0.0.1:8080` | 只在当前网络环境的 IPv4 回环地址监听 |
| `0.0.0.0:8080` | 在所有 IPv4 本地接口监听，但是否能远程访问还受路由和防火墙影响 |
| `[::]:8080` | IPv6 通配监听；是否同时接收 IPv4 取决于系统和程序设置 |
| `localhost` | 解析到本地回环，可能优先 IPv6，也可能 IPv4 |

**【补充】**Docker 容器、WSL 和 Windows 主机并不总共享同一个 `localhost`。本机通、远程不通时，先确认服务运行在哪一层，再查监听地址、端口发布和网络规则。[S08][S21][S36]

---

<a id="c05"></a>
## 5. Git 必会命令

### 5.1 先理解四个位置

**工作区**是你正在改的文件；**暂存区**是准备放进下次提交的内容；**本地仓库**保存提交历史；**远程仓库**是 GitHub / Gitee 等服务器上的仓库。`commit` 不等于 `push`，`fetch` 不等于替换工作区。[S12]

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `git clone 仓库地址` | 第一次把仓库下载到本地 | 在准备放项目的上级目录运行 |
| `git status -sb` | 看分支和改动摘要 | 操作前先看它 |
| `git diff` | 看已跟踪文件中“尚未暂存”的改动 | 不直接显示未跟踪新文件的内容 |
| `git diff --staged` | 看已经暂存、准备提交的内容 | 提交前检查是否混入密钥 |
| `git add src/Main.java` | 只暂存指定文件的变化 | 比盲目加全部更容易检查 |
| `git add .` | 暂存当前目录及其子目录中的改动 | **【校正】**不等于无条件整个仓库；注意当前位置 |
| `git commit -m "fix: correct login validation"` | 保存一个本地提交 | 描述改动，不要只写“更新” |
| `git fetch origin` | 更新对远程分支的认识 | 不会自动合并进当前分支 |
| `git pull --ff-only` | 只允许快进更新，不自动制造合并提交 | 双方都有独立提交时会拒绝，需要再决定策略 |
| `git push` | 把本地提交推上去 | 第一次可能需要设置上游 |
| `git remote -v` | 看远程仓库地址 | 确认没有推错仓库 |
| `git log --oneline --graph --decorate -15` | 简洁看最近提交与分支关系 | 排查“谁改了什么” |

**【校正】**不能把 `git pull` 一概解释为“拉取并合并”。它会先获取远程更新，再依据版本、参数和配置选择整合行为，例如快进、merge 或 rebase。本版日常示例明确写 `--ff-only`，避免隐藏策略。[S13]

### 5.2 分支操作

| 命令 | 用途 | 注意 |
|---|---|---|
| `git branch -vv` | 看本地分支和上游关系 | 能发现没有关联远程分支 |
| `git branch -a` | 看本地与远程跟踪分支 | `origin/x` 不是另一份本地工作目录 |
| `git switch -c feature/demo` | 创建并切换到新分支 | 从当前提交位置创建 |
| `git switch main` | 切到已有分支 | 未提交改动可能阻止切换 |
| `git switch --track origin/feature/demo` | 根据远程跟踪分支创建本地分支 | 本地不能已有同名分支 |
| `git push -u origin feature/demo` | 第一次推分支并设置上游 | 以后可直接 `git push` |
| `git merge origin/main` | 把远程 main 的已获取提交合到当前分支 | 先 `git fetch origin` |
| `git rebase origin/main` | 把当前分支的提交重新接到另一个基点上 | 会改写提交；共享分支按团队规则 |
| `git branch -d feature/demo` | 删除已满足安全检查的本地分支 | 先离开该分支，不等于删远程 |
| `git checkout 分支名` | 旧版切分支写法 | 保留用于读老教程，日常优先 `switch` |

### 5.3 【补充】改 Bug 的完整日常流程

以下以主分支叫 `main` 为例。你的项目若使用 `master`、`develop`、`v3-dev`，需要替换成真实名称。

```bash
# 先确认没有需要保留的未提交改动
git status
git fetch origin
git switch main
git pull --ff-only
git switch -c fix/demo-issue
```

修改、测试以后再执行：

```bash
git diff
git add src/
git diff --staged
git commit -m "fix: resolve demo issue"
git push -u origin fix/demo-issue
```

随后按团队流程提交合并请求。不要未经核对就把“合主分支”和“向共享分支直接推送”混为一谈。

### 5.4 临时保存和撤销：先问自己要撤哪一层

| 情况 | 命令 | 后果 |
|---|---|---|
| 临时收起修改，连未跟踪新文件一起 | `git stash push -u -m "before branch switch"` | 不包含被 `.gitignore` 忽略的文件 |
| 查看暂存的工作 | `git stash list` | 不恢复内容 |
| 恢复但先保留 stash 记录 | `git stash apply` | 有冲突时需要处理 |
| 恢复并在成功后移除记录 | `git stash pop` | 冲突时记录一般保留，仍需检查 |
| 取消某文件暂存，不丢工作区改动 | `git restore --staged src/Main.java` | 文件回到未暂存状态 |
| 放弃某文件未暂存改动 | `git restore -- src/Main.java` | **高风险**：默认从暂存区恢复，未保存改动可能丢失 |
| 撤销上次本地提交，保留改动在暂存区 | `git reset --soft HEAD~1` | 只适合已理解历史关系且确有父提交的场景 |
| 撤销已经共享的普通提交 | `git revert 提交哈希` | 新建反向提交；合并提交需单独判断主线 |
| 看本地引用的历史变动 | `git reflog -15` | 有时可定位误操作前的提交，但不是万能备份 |

**【校正】**裸 `git stash` 默认不收未跟踪新文件；`-u` 收未跟踪文件，但不收忽略文件。[S14] 不把 `reset --hard`、`clean -fdx`、`push --force` 放在一键快捷命令里。[S15]

### 5.5 【补充】遇到冲突怎么做

**合并中：**先 `git status` 确认冲突文件 → 打开文件理解双方修改 → 删除冲突标记并保留正确逻辑 → 测试 → `git add 冲突文件` → `git merge --continue`。决定放弃本次合并时用 `git merge --abort`，但合并前有复杂未提交修改时不应假定能完整还原。

**变基中：**处理冲突后 `git add 冲突文件` → `git rebase --continue`；放弃整个变基用 `git rebase --abort`。不要在没看清当前状态时混用 merge 与 rebase 的继续命令。

**一句话：先 `status` 看正在做什么，再选“继续”还是“取消”。** 发生误删时先停止进一步清理；恢复文件后，在临时分支核对，别立即覆盖远程。

---

<a id="c06"></a>
## 6. Java / JDK / JVM 命令

### 6.1 Java 的基础操作

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `java -version` | 看实际运行 Java 的版本 | 与 IDEA 设置不一定一致 |
| `javac -version` | 看编译器版本 | 只装运行时或 PATH 错时可能找不到 |
| `javac -encoding UTF-8 Main.java` | 把源码编译成字节码 | 示例为无包声明的简单类 |
| `java Main` | 运行类 | 不写 `Main.class`；包和 classpath 另行处理 |
| `java -jar app.jar` | 运行可执行 Jar | 普通依赖 Jar 不一定能这样启动 |
| `jar tf app.jar` | 列出 Jar 内部文件 | 用于核对 class、配置是否打进去 |
| `javap -c Main.class` | 看字节码指令和类结构 | **【校正】**不是还原成完整 Java 源代码 |
| `jps -lv` | 查看当前可见的 Java 进程及部分参数 | 容器、权限和 JVM 配置会影响可见范围 |

### 6.2 【补充】Spring Boot 启动参数怎么放

```bash
java -Xms256m -Xmx512m -Dfile.encoding=UTF-8 -jar app.jar --spring.profiles.active=dev --server.port=8081
```

`-Xms`、`-Xmx`、`-D...` 是 JVM 参数，放在 `-jar` 前；`--spring...`、`--server.port...` 是 Spring Boot 应用参数，放在 Jar 后。这里的堆大小只是说明语法，不是生产推荐值；还需要给元空间、线程栈、直接内存和系统留空间。普通 Java 程序不一定识别这些 Spring 参数。[S16][S17]

### 6.3 JVM 查询和诊断

**先确认目标 PID、同机权限和 JDK 版本。** 尽量使用与目标 JVM 匹配的 JDK 工具；精简运行时或容器里可能没有这些命令。[S18]

| 命令 | 用途 | 影响 / 限制 |
|---|---|---|
| `jcmd 12345 help` | 查目标 JVM 实际支持哪些诊断命令 | 第一步，别假设每个 JDK 一样 |
| `jcmd 12345 VM.version` | 看目标 JVM 版本 | 不是只看当前终端的 Java 版本 |
| `jcmd 12345 VM.command_line` | 看启动命令 | 可能暴露敏感参数 |
| `jcmd 12345 VM.flags` | 看 JVM 参数 | 可核对堆参数等 |
| `jcmd 12345 Thread.print -l` | 打印线程栈和锁信息 | 有诊断开销，大量线程时更明显 |
| `jstack -l 12345` | 线程栈的传统查看方式 | 不同版本可用性有差异 |
| `jstat -gcutil 12345 1000 10` | 每秒采样一次 GC 统计，共 10 次 | 列含义与 GC / JDK 有关，不要只看单次值 |
| `jcmd 12345 GC.heap_info` | 看一般堆信息 | 常见较新 JDK 支持，先用 `help` 确认 |

**【校正】**原稿的 `jmap -heap` 属于旧版本中可见的用法，不能当作 JDK 17 等版本的通用方案。JDK 8 可参考其对应 `jmap` 手册；较新版本优先查 `jcmd PID help` 和 `GC.heap_info`，不要直接套用旧教程。[S18][S19]

### 6.4 【补充】把线程栈保存下来

Linux / WSL，先切到获准保存诊断资料的目录：

```bash
umask 077
jcmd 12345 Thread.print -l > "threads-$(date +%Y%m%d-%H%M%S).txt"
```

这里 `umask 077` 让后续新建文件默认只给当前用户访问权限；它会改变当前 Shell 的创建掩码。文件名加时间是为了避免每次覆盖同一份证据。拿到线程栈以后，结合请求、CPU 和日志解释，不是“导出成功就排查完成”。

### 6.5 高风险诊断：知道，不等于随手执行

`jcmd 12345 GC.heap_dump /secure/heap-12345.hprof` 会生成堆转储；`GC.class_histogram`、某些 `jmap` 模式也可能带来明显停顿。堆文件可能很大，可能包含密码、Token、个人数据。**先确认磁盘、权限、业务窗口和命令影响，不在故障时盲目反复导出。** `GC.heap_dump` 的具体 GC 行为和参数以目标 JVM 手册与 `help` 为准。[S18]

CPU 高的完整定位流程见第 21.5 节；内存问题见第 21.6 节。

---

<a id="c07"></a>
## 7. Maven

### 7.1 先知道各阶段做到哪一步

**环境：装有 Maven 的终端；在项目 `pom.xml` 所在目录执行。** 有 Wrapper 的项目优先用项目自带版本：Bash 用 `./mvnw`，PowerShell 用 `.\mvnw.cmd`，CMD 用 `mvnw.cmd`。[S20]

```text
compile → test → package → verify → install → deploy
编译       测试     打包       验证       本地仓库    远程制品仓库
```

调用后面的阶段，会按生命周期执行前面的阶段及已绑定目标。`clean` 属于另一个生命周期，**不是每次构建必须加**。[S20]

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `mvn -v` | 看 Maven、它使用的 Java 和 Java home | 排查“IDEA 能打包、终端不行”很重要 |
| `mvn compile` | 编译主代码 | 不等于完成全部测试和打包 |
| `mvn test` | 执行默认测试阶段 | 测试范围受插件与项目配置影响 |
| `mvn package` | 生成 Jar / War 等产物 | 输出名看项目配置，不固定叫 app.jar |
| `mvn verify` | 构建并执行已配置的验证 | 配了集成测试时比只 package 更合适 |
| `mvn clean package` | 先删构建产物再重新打包 | 主要清理 `target` 等构建输出，不清 `.m2` |
| `mvn install` | 把产物安装到本机 Maven 仓库 | **【校正】**不是部署到服务器 |
| `mvn deploy` | 上传产物到配置好的远程制品仓库 | **变更**；不是启动 Java 服务 |
| `mvn dependency:tree` | 查一个依赖是怎么引进来的 | 处理版本冲突、重复依赖 |
| `mvn help:effective-pom` | 看继承和 profile 等作用后的 POM | 查“配置到底从哪里来的” |
| `mvn help:active-profiles` | 看激活了哪些 Maven profile | 不等于 Spring profile |
| `mvn spring-boot:run` | 通过 Spring Boot 插件启动应用 | 项目需配置相应插件 |
| `mvn -pl user-service -am package` | 构建指定模块和它需要的反应堆模块 | **【补充】**在聚合项目根目录运行 |

### 7.2 【校正】跳过测试不只有一种含义

| 写法 | 主要效果 |
|---|---|
| `mvn package -DskipTests` | 使用 Surefire 常见配置时，跳过测试执行，但仍编译测试代码 |
| `mvn package -Dmaven.test.skip=true` | 标准 Compiler / Surefire / Failsafe 插件会参考此属性，跳过测试编译和执行 |
| `mvn verify -DskipITs` | 使用 Failsafe 时，跳过其集成测试；不等于跳过单元测试 |

**版本边界：**Failsafe 3.6.0 起不再用 `skipTests` 跳过集成测试；自定义测试插件也可能有自己的规则。不要把 `-DskipTests` 理解成“无论什么项目，所有测试都不跑”。日常提交前优先把测试跑通，临时跳过要说明原因。[S20]

### 7.3 【补充】依赖和构建报错的排查顺序

先 `mvn -v` → 检查 `pom.xml` 和激活的 profile → `mvn dependency:tree` → 看第一处有意义的构建错误。

```bash
# 仅查看指定依赖的引入链路，名称换成实际依赖
mvn dependency:tree -Dincludes=org.slf4j:slf4j-api

# 输出更完整的错误堆栈
mvn -e package
```

`mvn -U package` 会强制检查缺失 release / 更新 snapshot 等，适合怀疑仓库缓存的场景，不会让固定 release 自动升级到新版本。`-X` 调试输出很多，可能包含仓库、路径和凭据信息；共享前脱敏。**不要把删除整个 `.m2/repository` 当默认修复。**

---

<a id="c08"></a>
## 8. Gradle

**优先使用仓库自带 Wrapper，不要随便换成本机全局 Gradle。** Wrapper 让团队使用项目指定的 Gradle 版本；具体 JDK 兼容性仍要看项目。[S23]

| 用途 | Bash | Windows PowerShell |
|---|---|---|
| 看项目使用的版本 | `./gradlew --version` | `.\gradlew.bat --version` |
| 看可用任务 | `./gradlew tasks` | `.\gradlew.bat tasks` |
| 清理构建输出 | `./gradlew clean` | `.\gradlew.bat clean` |
| 构建项目 | `./gradlew build` | `.\gradlew.bat build` |
| 执行测试 | `./gradlew test` | `.\gradlew.bat test` |
| 启动 Spring Boot | `./gradlew bootRun` | `.\gradlew.bat bootRun` |
| 看依赖 | `./gradlew dependencies` | `.\gradlew.bat dependencies` |
| 输出异常栈 | `./gradlew build --stacktrace` | `.\gradlew.bat build --stacktrace` |

`gradle -v` 保留用于查全局安装。**【补充】**`build`、`test`、`bootRun` 等任务是否存在由项目插件决定；先 `tasks` 确认。`build -x test` 会排除名为 test 的任务，但不等于排除所有自定义测试任务。

---

<a id="c09"></a>
## 9. Docker / Docker Compose

### 9.1 四个名词，先弄明白

**镜像**像模板；**容器**是由镜像创建的运行实例；**卷**用于保存容器之外的数据；**端口发布**是把宿主机入口连到容器端口。停止容器、删除容器、删除镜像、删除卷，是四种不同操作。[S21][S22]

先 `docker version` 看客户端和服务端是否能通信；再 `docker context show` 确认连接的 Docker 环境，避免把远程 Docker 当成本机操作。

### 9.2 镜像与容器速查

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `docker images` | 看本地镜像 | 不等于运行中的容器 |
| `docker pull redis:7.4` | 拉取指定系列镜像 | 只是版本示例，部署应使用项目批准的版本或 digest |
| `docker build -t app:dev .` | 用当前构建上下文构建镜像 | 注意 `.dockerignore`，别把密钥打进镜像 |
| `docker ps` / `docker ps -a` | 看运行中的 / 全部容器 | 排查启动就退出一定要用 `-a` |
| `docker start app` | 启动已存在但停止的容器 | 不是新建容器 |
| `docker stop app` | 请求停止容器 | 超时后可能强制终止，仍会中断业务 |
| `docker restart app` | 重启现有容器 | 不会自动应用新镜像和所有 Compose 配置改动 |
| `docker logs --tail 200 app` | 看最近 200 行容器输出 | 应用只写内部文件时可能看不到业务日志 |
| `docker logs --tail 200 -f app` | 先看最近日志，再持续追踪 | `Ctrl+C` 退出追踪，不会停止容器 |
| `docker exec -it app sh` | 进入运行中容器的 shell | **【校正】**容器不一定有 bash；极简镜像也可能没有 sh |
| `docker inspect app` | 看详细配置与状态 | 输出可能含环境变量、挂载路径等敏感信息 |
| `docker port app` | 看已发布端口 | 未发布的端口不会因此开放 |
| `docker stats --no-stream` | 看一次资源快照 | 容器统计不等同宿主机所有资源 |
| `docker cp app:/app/logs/app.log ./app.log` | 从容器取文件到本机 | 目标同名文件覆盖和数据敏感性要注意 |
| `docker rm app` | 删除已停止容器 | **变更**；可写层数据会丢失 |
| `docker rmi app:dev` | 删除镜像引用 / 镜像 | 不等于删除数据库卷 |

### 9.3 【校正】本地 Redis 示例不要默认暴露给整个网络

**前提：仅限个人本机开发；无密码示例不能照搬到共享服务器或生产环境。** 下面只发布到 IPv4 回环地址，并保存数据到命名卷。首次使用会创建 `redis-dev-data` 卷。[S21]

```bash
docker run -d --name redis-dev -p 127.0.0.1:6379:6379 -v redis-dev-data:/data redis:7.4 redis-server --appendonly yes
```

检查：

```bash
docker ps --filter name=redis-dev
docker logs --tail 100 redis-dev
docker exec redis-dev redis-cli PING
```

收到 `PONG` 说明这次容器内 Redis 命令得到响应。`127.0.0.1:6379:6379` 依次是 **宿主机监听地址、宿主机端口、容器端口**。镜像名和版本不是升级建议。容器名已存在时先查 `docker ps -a`，不要为了消除报错就删卷重来。

**版本提醒：**Docker 官方记录，早于 28.0.0 的版本存在局域网同网段可能访问 localhost 发布端口的限制；旧环境不能仅凭“绑定了回环”就当作完整安全隔离。[S21]

### 9.4 Compose：在正确目录、对正确服务操作

**环境：项目有 `compose.yaml` 或其他实际配置文件。** 使用 `docker compose`；旧教程的 `docker-compose` 是另一种入口，是否安装取决于环境。[S22]

| 命令 | 用途 | 注意 |
|---|---|---|
| `docker compose config --quiet` | 检查配置是否能解析 | 查询式检查；配置合法不保证应用能启动 |
| `docker compose config` | 展开实际 Compose 配置 | 可能打印插值后的敏感值 |
| `docker compose up -d` | 创建 / 更新并后台启动服务 | **变更**；可能重建容器 |
| `docker compose up -d --build` | 先构建需要构建的镜像再启动 | 适用于确实有 build 配置的服务 |
| `docker compose ps -a` | 看本项目容器状态 | 区分服务名和容器名 |
| `docker compose logs --tail 200 -f api` | 看 api 服务日志 | `api` 换成真实服务名 |
| `docker compose exec api sh` | 进入 api 服务的运行中容器 | shell 必须存在 |
| `docker compose stop` | 停止项目服务 | 保留容器等资源 |
| `docker compose start` | 启动之前停止的容器 | 不重新应用配置变动 |
| `docker compose restart api` | 重启现有 api 容器 | 改了环境配置通常应重新 `up -d` |
| `docker compose down` | 停止并移除该项目容器及相应网络 | 默认不删除声明的命名卷；容器可写层会丢失 |

**高风险：**`docker compose down -v` 会删除相应命名卷和匿名卷；external 卷例外，但不能据此认为任意数据都安全。匿名卷虽未必被普通 `down` 删除，后续 `up` 也不保证重新挂上原匿名卷。数据库应明确使用命名卷或受控宿主机挂载，并做备份。[S22]

**【补充】**同一 Compose 网络中的服务通常通过 **服务名 + 容器端口**通信，例如 `redis:6379`；应用容器里的 `localhost` 通常不是 Redis 容器，也不是你的 Windows 主机。[S21]

---

<a id="c10"></a>
## 10. MySQL

### 10.1 Shell 命令与 SQL 不能混在一起

在终端连接客户端，用户名使用已经存在且被授权的账号：

```bash
mysql -h 127.0.0.1 -P 3306 -u app_user -p --default-character-set=utf8mb4
```

`-P` 大写是端口，`-p` 小写是不在命令里写密码、改为提示输入。密码输入时通常不显示字符。`app_user` 只是示例名，不会自动创建账号。连接成功后，下面的 SQL 才在 `mysql>` 中运行。[S25]

### 10.2 查询结构和数据

```sql
SELECT VERSION();
SELECT DATABASE();
SELECT CURRENT_USER();
SHOW DATABASES;
USE demo_db;
SHOW TABLES;
SHOW CREATE TABLE demo_user;
DESC demo_user;
SHOW INDEX FROM demo_user;
SELECT id, name FROM demo_user ORDER BY id LIMIT 20;
SELECT id, name FROM demo_user WHERE id = 1;
EXPLAIN SELECT id, name FROM demo_user WHERE id = 1;
```

`demo_db` 和 `demo_user` 必须换成真实且有权限的库、表。**【校正】**浏览数据示例默认带列名和 `LIMIT`，避免一上来 `SELECT *` 扫出整张大表。`EXPLAIN` 用来看执行计划；不要把 `EXPLAIN ANALYZE` 当纯静态预览，它会实际执行受支持的语句。[S25]

### 10.3 写数据：先查询范围，再执行变更

原稿的增删改保留，但明确限定：以下是已存在测试表 `demo_user(id, name)` 的示例，**不要在生产库顺手试命令**。

```sql
-- 变更：插入一条测试数据
INSERT INTO demo_user(name) VALUES ('Tom');
```

**【补充】**测试 InnoDB 表时，可以在同一连接里练习“修改后回滚”：

```sql
START TRANSACTION;
SELECT id, name FROM demo_user WHERE id = 1;
UPDATE demo_user SET name = 'Jerry' WHERE id = 1;
SELECT ROW_COUNT() AS affected_rows;
SELECT id, name FROM demo_user WHERE id = 1;
ROLLBACK;
```

这里最终使用 `ROLLBACK`，不保留本次更新。真正提交时才把最后一步改成 `COMMIT`。**事务不是万能撤销键**：是否可回滚取决于存储引擎、语句和事务状态；许多 DDL 会隐式提交。没有 `WHERE` 的 `UPDATE / DELETE`、`TRUNCATE`、`DROP` 不属于日常演示步骤。`DELETE FROM demo_user WHERE id = 1` 也是实际删除，不要因有条件就不核对对象。[S25]

### 10.4 【补充】连接、慢 SQL 和锁的初步观察

```sql
SHOW FULL PROCESSLIST;
SHOW ENGINE INNODB STATUS\G
```

前者看连接正在做什么，后者看 InnoDB 诊断信息；都可能受权限限制，输出也可能含业务 SQL。`\G` 表示纵向显示结果，不是 Java 字符串转义。不要一看到运行时间长就执行 `KILL`；先分清关键业务事务、空闲连接与真实阻塞。[S25]

### 10.5 导出与恢复：备份成功不等于可恢复

**导出在操作系统终端执行，不在 `mysql>` 中。** 账号需有相应备份权限；以下是以 InnoDB 为主的单库逻辑备份示例：[S24]

```bash
mysqldump -h 127.0.0.1 -P 3306 -u backup_user -p --single-transaction --quick --default-character-set=utf8mb4 --result-file=demo_db-backup.sql demo_db
```

**【校正】**使用 `--result-file` 让 `mysqldump` 自己写文件，避免 Windows PowerShell 5.1 的 `>` 默认文本编码等差异；不能把所有 PowerShell 版本都说成同一种重定向行为。备份文件名应唯一，已有同名文件可能被覆盖。[S24][S32]

`--single-transaction` 主要保障事务表的一致性，不保证 MyISAM 等非事务表的一致快照；备份期间应避免并发改表结构。常规单库转储也不自动构成用户权限、所有事件与存储过程等对象的完整灾备方案。[S24]

**恢复是高风险写操作。** 先审查 SQL，再使用新建且授权的测试库验证；检查文件中是否含 `USE`、`DROP` 或建库语句，不能以为指定了测试库就一定不会影响其他库。

Bash / CMD 可用输入重定向：

```bash
# 仅用于已经准备好的测试恢复库，执行前审查 SQL 文件
mysql -h 127.0.0.1 -P 3306 -u restore_user -p demo_restore < demo_db-backup.sql
```

**PowerShell 不直接套用上述 `<` 写法。** 可以先在 PowerShell 中连接 MySQL：

```powershell
mysql -h 127.0.0.1 -P 3306 -u restore_user -p demo_restore
```

然后在 `mysql>` 中用客户端命令加载文件：

```sql
source D:/backup/demo_db-backup.sql
```

这个路径是在运行 mysql 客户端的机器上，不一定是数据库服务器；某些客户端模式可能限制 `source`。核对导出退出码、文件内容，再做测试恢复才算完成验证。[S24][S25]

---

<a id="c11"></a>
## 11. Redis

### 11.1 连接和退出

终端中运行：

```bash
redis-cli -h 127.0.0.1 -p 6379
```

需要 ACL 账号、密码且客户端支持时，可用 `redis-cli -h 主机 -p 端口 --user 用户名 --askpass` 交互输入密码；TLS 环境按要求加 `--tls` 和相应 CA 配置。不要把真实密码直接写进命令、历史或快捷命令库。[S26]

### 11.2 常用查询与写入

下面在 Redis 客户端内运行。`demo:` 前缀用于区分练习数据；仍应只在测试实例操作。

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `PING` | 确认 Redis 能响应 | 返回 PONG 不代表业务缓存内容正确 |
| `SET demo:user:1 Tom EX 60` | 写一个字符串，同时设置 60 秒过期 | **变更**；会覆盖同名旧值 |
| `GET demo:user:1` | 取字符串 | 不存在时通常返回 nil |
| `EXISTS demo:user:1` | 看键是否存在 | 对一个键返回 0 或 1 |
| `TYPE demo:user:1` | 看键的数据类型 | 类型不对时 GET 等可能报 WRONGTYPE |
| `TTL demo:user:1` | 看剩余过期秒数 | `-1` 存在但不过期；`-2` 不存在 |
| `PTTL demo:user:1` | 看剩余过期毫秒数 | 单位不同 |
| `EXPIRE demo:user:1 60` | 给现有键设置过期时间 | **变更** |
| `DEL demo:user:1` | 删除键 | **变更**；大对象释放可能有开销 |
| `UNLINK demo:user:1` | 从键空间移除，主要内存回收异步进行 | **变更**；仍是删除，不可随手恢复 |
| `HGET demo:profile:1 name` | 只取 Hash 中某个字段 | 比一次取整个大 Hash 更有针对性 |
| `HGETALL demo:profile:1` | 取整个 Hash | 大对象谨慎使用 |
| `LRANGE demo:list 0 19` | 只看列表前 20 项 | **【校正】**默认避免 `0 -1` 全量取 |
| `SMEMBERS demo:set` | 查看整个 Set | 仅适合已知较小的集合 |
| `ZREVRANGE demo:rank 0 9 WITHSCORES` | 按分数从高到低看前 10 项 | 保留旧式兼容写法 |
| `INFO memory` / `INFO stats` | 看内存 / 运行统计 | `INFO` 是全部信息，输出较多 |
| `DBSIZE` | 看当前逻辑数据库的键数量 | 不等于占用字节数 |

### 11.3 【校正】SCAN 不是“执行一次就查完”

```text
SCAN 0 MATCH demo:* COUNT 100
```

返回两部分：**下次游标 + 本批键列表**。下一次把返回的游标放回 `SCAN`；持续执行，直到返回游标为 `0` 才算完成一轮。中途返回空列表也不一定结束，`COUNT` 只是工作量提示，不保证恰好返回 100 个键；扫描期间可能重复返回某些键，不提供静态快照。[S26]

终端中也可让客户端自动迭代：

```bash
redis-cli -h 127.0.0.1 -p 6379 --scan --pattern 'demo:*'
```

**不要把输出直接接到批量删除命令。** SCAN 是渐进扫描，不是零负载；集群还需考虑节点范围。原稿提醒的 `KEYS *`、以及 `FLUSHDB / FLUSHALL`、持续 `MONITOR`，都不能当作生产环境日常快捷查询。

---

<a id="c12"></a>
## 12. SSH / SCP / SFTP

### 12.1 SSH：在本机打开远程终端

```bash
ssh deploy@192.168.1.10
ssh -p 2222 deploy@192.168.1.10
ssh -i ~/.ssh/id_ed25519 deploy@192.168.1.10
```

`deploy` 换成真实账号，示例不默认使用 root。首次连接先通过可信渠道核对服务器指纹；连接以后运行 `hostname`、`whoami`、`pwd` 确认机器、用户和目录。**SSH 登录后输入的命令通常是在远端执行，不是你电脑上。**[S27]

连接失败需要更详细信息时，使用 `ssh -v deploy@192.168.1.10`；日志可能含主机名、用户名和路径，不要公开整个输出。看到主机密钥变化警告时，先确认服务器是否重装或被替换，不要直接删 `known_hosts` 来跳过安全检查。

### 12.2 SCP：传文件，不是登录终端

**下面在你自己的电脑终端执行。**

```bash
# 本机 → 服务器；示例远端目录必须存在且可写
scp app.jar deploy@192.168.1.10:/opt/app/releases/

# 服务器 → 本机当前目录
scp deploy@192.168.1.10:/opt/app/logs/app.log .

# 上传一个目录
scp -r dist deploy@192.168.1.10:/opt/app/releases/

# SSH 使用了非默认端口
scp -P 2222 app.jar deploy@192.168.1.10:/opt/app/releases/
```

**【补充】**SSH 指定端口用小写 `-p`；SCP 指定端口用大写 `-P`。`scp` 可能覆盖同名目标，所以发布时先传到新版本目录，再按发布流程切换，不要直接覆盖正在使用的 Jar。[S27]

### 12.3 【补充】SFTP：交互式上传下载

先在终端登录：

```bash
sftp -P 2222 deploy@192.168.1.10
```

随后在 `sftp>` 中输入以下命令，按实际需要逐条选择：

```text
pwd
lpwd
ls
cd /opt/app/releases
lcd D:/project/target
put app.jar
get app.log
bye
```

`pwd / cd / ls` 针对远端；前面加 `l` 的 `lpwd / lcd` 针对本机。`lcd D:/...` 是 Windows 本机路径示例；Linux 本机应换成 `/home/...`。`get app.log` 需要远端当前目录确实有该文件。

### 12.4 SSH Key：公钥可以配，私钥不能发

```bash
ssh-keygen -t ed25519 -C "dev-laptop"
```

遇到已存在文件的覆盖提示先停下来确认，不要覆盖正在用的密钥；建议给私钥设置口令。`id_ed25519` 是私钥，**不能上传仓库、发同事或粘到公开页面**；`.pub` 是公钥。[S27]

Linux / WSL 若安装了相应工具，可用 `ssh-copy-id -i ~/.ssh/id_ed25519.pub deploy@192.168.1.10` 配置公钥。**【校正】**Windows 原生 OpenSSH 通常不自带 `ssh-copy-id`；按团队方式把公钥加入远程账号的 `authorized_keys`，或在 WSL 中使用，别误以为 SSH 安装失败。

### 12.5 【补充】授权场景下的本地端口转发

数据库只能从服务器本机访问时，经管理员允许可创建 SSH 隧道：

```bash
ssh -N -L 127.0.0.1:13306:127.0.0.1:3306 deploy@192.168.1.10
```

第一个 `127.0.0.1:13306` 是自己电脑的入口；后面的 `127.0.0.1:3306` 从 SSH 服务器一侧理解。之后本地客户端连接 13306。`-N` 不执行远程命令，窗口保持运行维持转发；仍需数据库账号权限，不能用来绕过组织访问策略。[S27]

---

<a id="c13"></a>
## 13. Linux 服务管理 systemd

### 13.1 先确认服务是否真的由 systemd 管

**环境：使用 systemd 的 Linux / 已启用 systemd 的 WSL。** 普通 Docker 容器或部分 WSL 配置不满足这个前提。手动 `nohup java -jar ...` 启动的服务，不会自动变成 `systemctl` 能管理的服务。[S28][S35]

| 命令 | 用途 | 风险 / 区别 |
|---|---|---|
| `systemctl status my-app --no-pager -l` | 看服务状态和近期输出 | `failed` 表示失败，原因还要查日志 |
| `systemctl is-active my-app` | 简单看是否活跃 | 不替代接口健康检查 |
| `systemctl list-units --type=service --all` | 看加载的服务单元 | 查看已安装单元还可用 `list-unit-files` |
| `systemctl cat my-app` | 看服务单元及覆盖配置 | 可能包含环境变量等敏感数据 |
| `sudo systemctl start my-app` | 启动服务 | **变更** |
| `sudo systemctl stop my-app` | 停止服务 | **变更**；影响业务 |
| `sudo systemctl restart my-app` | 先停再启动 | **变更**；不是无损热更新 |
| `sudo systemctl reload nginx` | 请服务重读自身配置 | 服务需支持 reload |
| `sudo systemctl enable my-app` | 配置开机启动 | 不会因此立刻启动 |
| `sudo systemctl enable --now my-app` | 配置开机启动并立即启动 | **变更** |
| `sudo systemctl disable my-app` | 取消开机启动 | 不会因此立刻停止 |
| `sudo systemctl daemon-reload` | 让 systemd 重读单元文件 | 修改 `.service` 后常用，不等于重启应用 |

### 13.2 【补充】分清三种“重新加载”

**改 Nginx 自身配置：**先 `nginx -t`，通过后再 reload。  
**改 `my-app.service`：**先 `daemon-reload`，再视改动安排服务重启。  
**更新应用 Jar：**走发布流程切换新版本，再重启应用；单做 `daemon-reload` 不会加载新 Jar。[S28][S30]

### 13.3 【补充】nohup 只作为简单环境的补充

**前提：服务器未由 systemd / Docker / 其他管理器托管该应用，且已确认没有重复实例。** 在有写权限的应用目录里：

```bash
mkdir -p logs
nohup java -jar app.jar >> logs/console.log 2>&1 < /dev/null &
```

`nohup` 主要避免挂断信号影响；`&` 让它后台运行；`>>` 追加日志；`2>&1` 合并错误；`< /dev/null` 避免读取终端输入。**它不提供自动重启、开机自启、日志轮转或完整进程管理。** 执行完还要查进程、端口和日志，不能把返回一个编号当成启动成功。[S01][S38]

---

<a id="c14"></a>
## 14. 日志排查

### 14.1 不要只盯着最后一行 ERROR

先确定 **时间范围、实际日志文件、请求 ID / 业务 ID**。看到 Java 堆栈时，同时读异常类型、`Caused by` 链和相关业务上下文；只过滤 ERROR 可能把没有日志级别前缀的堆栈续行丢掉。

### 14.2 Linux / WSL 的常用组合

```bash
# 最近 200 行
tail -n 200 app.log

# 先看最近 100 行，再跟踪轮转后同名的新日志文件
tail -n 100 -F app.log

# 找错误并保留上下文
grep -nC 10 'ERROR' app.log

# 按固定请求标识定位
grep -nF 'traceId=demo-123' app.log

# 实时只看含 ERROR 的行，显式减少 grep 输出缓冲
tail -n 100 -F app.log | grep --line-buffered 'ERROR'

# 按指定行范围查看
 sed -n '120,180p' app.log

# 查看压缩归档日志中的错误
 zgrep -n 'ERROR' app.log.1.gz
```

**【校正】**`tail -F` 更适合按文件名跟踪轮转；只过滤错误适合快速观察，不替代完整上下文。`grep --line-buffered` 是 GNU grep 支持的选项，精简容器或其他实现要先确认。[S05][S06]

### 14.3 PowerShell 对应写法

```powershell
Get-Content .\app.log -Tail 200
Select-String -Path .\app.log -Pattern 'ERROR' -Context 10,10
Get-Content .\app.log -Tail 100 -Wait | Select-String -Pattern 'ERROR'
```

`-Wait` 不等于 Linux `tail -F` 的全部行为；日志文件被替换后可能需要重启追踪。

### 14.4 systemd 日志

```bash
journalctl -u my-app -n 200 --no-pager
journalctl -u my-app -f
journalctl -u my-app --since '1 hour ago' --no-pager
journalctl -u my-app --since '2026-09-13 14:00:00' --until '2026-09-13 14:10:00' --no-pager
journalctl -u my-app -b --no-pager
```

`-u` 指服务，`-n` 最近行数，`-f` 持续跟踪，`-b` 限本次启动。具体日期只是示例，时间默认按运行机器的时区理解；排查跨服务器问题先核对时间和时区。[S29]

**资料脱敏：**不要公开原始 Token、Cookie、身份证、手机号、数据库密码；不要为“排查方便”把整个线上日志目录上传到公开仓库。

---

<a id="c15"></a>
## 15. Nginx

### 15.1 日常维护命令

| 命令 | 用途 | 注意 |
|---|---|---|
| `nginx -v` | 看版本 | 输出位置可能是错误输出流 |
| `nginx -V` | 看构建参数等信息 | **补充**：排查编译参数和配置路径 |
| `sudo nginx -t` | 检查配置语法并尝试打开引用文件 | 通过不代表上游应用健康 |
| `sudo nginx -T` | 检查并输出完整配置 | **补充**：可能暴露域名、证书路径和凭据 |
| `sudo systemctl reload nginx` | 对 systemd 管理的 Nginx 重读配置 | 先检查再执行 |
| `nginx -s reload` | 对当前配置对应的 Nginx 发重载信号 | 独立管理时用，不要混淆多个实例 |
| `nginx -s quit` | 请求平滑退出 | **变更**：最终会停止服务 |
| `nginx -s stop` | 快速停止 | **【校正】**不是平滑停止 |

### 15.2 检查成功才重载

Linux / Bash：

```bash
sudo nginx -t && sudo systemctl reload nginx
systemctl status nginx --no-pager -l
```

**不要把第一行的 `&&` 改成分号。** 配置检查失败时，应先修复错误，不继续发重载请求。若 Nginx 在 Docker 内，需用容器对应的配置和管理方式，宿主机 `nginx -t` 不一定检查的是它。[S30]

### 15.3 【补充】看到 502 先查上游

以 Nginx 代理本机 8080 为例，先执行 `curl -v --max-time 10 http://127.0.0.1:8080/` 和 `ss -lntp 'sport = :8080'`，再看 Nginx error log 与应用日志。上游地址、HTTP/HTTPS、路径、网络命名空间或响应格式不匹配都值得检查，**502 本身不能直接证明“Java 没启动”。**[S30][S11]

---

<a id="c16"></a>
## 16. 压缩与解压

### 16.1 Linux / WSL

```bash
# 打包压缩目录
tar -czf app.tar.gz app/

# 先看压缩包里有什么，不解压
tar -tzf app.tar.gz

# 解压到单独的目录，避免把当前项目弄乱
mkdir -p unpacked
tar -xzf app.tar.gz -C unpacked/

# ZIP 格式
zip -r app.zip app/
unzip -l app.zip
unzip app.zip -d unpacked/
```

`c` 创建、`x` 解包、`t` 列清单、`z` gzip、`f` 后面接文件名；`v` 是打印详细过程，可加可不加。**【补充】**解压本身会写文件，先看内容、再用隔离目录；未知来源的包不要以 root 身份直接解到系统路径。列表检查也不能证明压缩包可信。[S31]

### 16.2 Windows PowerShell

```powershell
Compress-Archive -Path .\app -DestinationPath .\app.zip
Expand-Archive -Path .\app.zip -DestinationPath .\unpacked
```

目标已存在时先检查，别习惯性加 `-Force` 覆盖。PowerShell `Compress-Archive` 有实现限制，不应当作完整系统备份工具。[S31]

---

<a id="c17"></a>
## 17. 环境变量

### 17.1 同一个变量，三个环境写法不同

以下设置只影响当前进程环境及后续子进程，不是“永久修改整台机器”；例子中的 JDK 路径必须真实存在。[S01][S04]

| 操作 | CMD | PowerShell | Linux / WSL Bash |
|---|---|---|---|
| 看 JAVA_HOME | `echo %JAVA_HOME%` | `$env:JAVA_HOME` | `echo "$JAVA_HOME"` |
| 看 PATH | `echo %PATH%` | `$env:Path` | `printf '%s\n' "$PATH"` |
| 临时设置 JAVA_HOME | `set "JAVA_HOME=C:\Java\jdk-17"` | `$env:JAVA_HOME='C:\Java\jdk-17'` | `export JAVA_HOME=/opt/jdk-17` |
| 临时优先用该 JDK | `set "PATH=%JAVA_HOME%\bin;%PATH%"` | `$env:Path="$env:JAVA_HOME\bin;$env:Path"` | `export PATH="$JAVA_HOME/bin:$PATH"` |

**【补充】**只改 `JAVA_HOME` 不一定改变直接运行 `java` 时找到的程序；还要核对 PATH。修改后重新执行 `java -version`、`javac -version`、`mvn -v`，并检查程序实际路径。IDEA 项目 SDK、Maven Runner、终端和服务器可能各用不同版本。

### 17.2 持久设置怎么理解

Windows 可在系统“环境变量”界面设置用户变量，随后重新打开终端和相关应用。Linux 的 Bash 配置文件是否生效取决于登录 / 交互方式；systemd 服务通常不自动加载你的 `.bashrc`，应按服务配置传入环境。[S01][S04][S28]

**不要把整条 PATH 覆盖成只有 JDK 的目录。** 也不要在不了解长度、变量展开和作用范围时用 `setx PATH ...` 批量重写 PATH。

### 17.3 【补充】退出码：命令到底成没成功

| 环境 | 上一条命令执行后立即看 |
|---|---|
| Bash | `echo $?` |
| CMD | `echo %ERRORLEVEL%` |
| PowerShell 调用外部程序 | `$LASTEXITCODE` |

多数程序以 0 表示成功，但具体非零含义看该程序文档。要“立即看”，因为后续命令可能覆盖结果。PowerShell 的 `$?` 是另一个成功状态，不等同于外部程序的数值退出码。[S01][S02]

---

<a id="c18"></a>
## 18. HTTP / REST 调试 curl

### 18.1 最常用的选项

| 写法 | 直白解释 | 注意 |
|---|---|---|
| `curl URL` | 默认发 GET 并输出响应体 | 默认不会因为 HTTP 404 就必然返回非零退出码 |
| `curl -i URL` | 响应头和响应体一起显示 | 看接口实际返回很方便 |
| `curl -I URL` | 发送 HEAD 请求，只取头 | **【校正】**不是普通 GET 隐藏响应体；有些接口不支持 HEAD |
| `curl -v URL` | 看连接、请求和响应细节 | 可能包含敏感头 |
| `curl -L URL` | 跟随重定向 | 确认最终目的地，不盲目转发认证信息 |
| `curl -o result.json URL` | 把响应体写到指定文件 | 会覆盖同名文件 |
| `curl -sS URL` | 不显示进度条，但保留错误提示 | 只写 `-s` 可能让错误不显眼 |
| `curl --fail-with-body URL` | HTTP 错误时失败，同时保留响应体 | 较新版本支持；先看 `curl --version` |
| `curl -N URL` | 关闭 curl 输出缓冲 | 观察流式响应时常用 |

所有 curl 示例均需本机有相应功能的版本；Linux 用 `curl`，Windows 优先用 `curl.exe`。[S11][S02]

### 18.2 GET 和 POST JSON

**Bash GET：**

```bash
curl -i --connect-timeout 3 --max-time 10 'http://127.0.0.1:8080/users/1'
```

**Bash POST：**只对获准的测试接口使用，POST 可能真实创建数据。

```bash
curl -i --connect-timeout 3 --max-time 10 'http://127.0.0.1:8080/users' \
  -H 'Content-Type: application/json' \
  --data-raw '{"name":"Tom"}'
```

`--data-raw` 在这种用法下会选择 POST，不必再重复加 `-X POST`。

**【补充】PowerShell：复杂 JSON 优先使用请求文件，减少引号差异。** 先在当前目录建立 UTF-8（无 BOM）的 `request.json`：

```json
{"name":"Tom"}
```

再执行：

```powershell
curl.exe -i --connect-timeout 3 --max-time 10 "http://127.0.0.1:8080/users" -H "Content-Type: application/json" --data-binary "@request.json"
```

也可以用 PowerShell 自己的 HTTP 命令，不混用 curl 参数：

```powershell
$body = @{ name = 'Tom' } | ConvertTo-Json -Compress
Invoke-RestMethod -Method Post -Uri 'http://127.0.0.1:8080/users' -ContentType 'application/json; charset=utf-8' -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
```

### 18.3 带 Token、上传文件和保存响应

Bash，假定环境变量 `TOKEN` 已经通过合规方式注入；未设置时先停止，不把真实值写在共享示例里。

```bash
curl -i --max-time 10 'http://127.0.0.1:8080/api/user' -H "Authorization: Bearer $TOKEN"

# 测试上传：会真正发送文件
curl -i --max-time 30 'http://127.0.0.1:8080/upload' -F 'file=@./demo.txt'

# 保存响应体到文件；不会自动确认它一定是合法 JSON
curl -sS --max-time 10 -o response.json 'http://127.0.0.1:8080/api/user'
```

Windows 使用 `$env:TOKEN` 并调用 `curl.exe`。环境变量避免在示例里硬编码，但展开后的参数仍可能被本机进程观察工具看到；敏感请求不要再配 `-v` 后直接共享日志。[S11]

### 18.4 【补充】SSE / AI 流式接口

假定应用已经提供 `/api/chat/stream`，并在 `request.json` 中按接口文档准备好字段：

```bash
curl -N --connect-timeout 5 --max-time 120 \
  -H 'Accept: text/event-stream' \
  -H 'Content-Type: application/json' \
  --data-binary @request.json \
  'http://127.0.0.1:8080/api/chat/stream'
```

`-N` 只是取消 curl 本地输出缓冲，**不会自动消除应用、Nginx 或上游模型的缓冲与延迟**。SSE 与 WebSocket 也不是同一种协议。这个路径只是示例，不表示你的项目已经有该接口；真实模型接口可能产生费用。[S11]

### 18.5 看结果时的最小判断表

| 现象 | 下一步 |
|---|---|
| 无法解析主机名 | 查 DNS、域名拼写、代理配置 |
| Connection refused | 查目标地址、端口和监听状态；也可能被主动拒绝 |
| 连接或请求超时 | 区分连接阶段与服务处理阶段，再查网络和后端 |
| HTTP 401 / 403 | 查认证、权限或网关规则，不要直接归为网络断了 |
| HTTP 404 / 405 | 查路径、上下文前缀、请求方法，确认请求到了哪个服务 |
| HTTP 500 / 502 / 504 | 同时看网关和应用日志，不能只靠状态码定根因 |
| HTTP 200 但业务 code 报错 | HTTP 层成功不等于业务处理成功 |

**不要拿 `curl -k` 关闭证书验证当长期修复。** 应检查主机名、证书链和系统信任配置。[S11]

---

<a id="c19"></a>
## 19. 常用辅助 CLI

### 19.1 jq：从 JSON 里取东西

**前提：已安装 jq，输入是合法 JSON。** 以下为 Bash 示例；Windows 的 `jq.exe` 参数引号应按 PowerShell / CMD 规则处理。[S33]

```bash
# 排版 JSON
jq . response.json

# 读取一个字符串字段，不带外层双引号
jq -r '.name' response.json

# 取嵌套字段
jq '.data.id' response.json

# 从数组每一项取 name
jq -r '.data.items[].name' response.json
```

`.data.items` 等路径只是示例，需与真实 JSON 对应。收到 HTML 错误页时，jq 会解析失败，先看原始 HTTP 响应，不要只怀疑 jq。

### 19.2 帮助、历史和快速搜索

| 命令 | 用途 | 注意 |
|---|---|---|
| `tldr tar` / `tldr git` | 看少量常见示例 | 需安装；示例不代替完整安全说明 |
| `history` | 看 Bash 当前历史 | 记录范围和是否落盘取决于配置 |
| `history \| grep docker` | 查以前的 Docker 命令 | 历史里可能有密码，不要完整公开 |
| `Get-History` | 看 PowerShell 当前会话历史 | 不等于磁盘里所有历史 |
| `Ctrl+R` | 在支持该快捷键的终端里反向搜历史 | 找到后先看清再回车 |

**【补充】**安装了 ripgrep 时，`rg -n 'TODO' src` 可快速搜索项目；默认通常遵守忽略规则。没有结果也要考虑忽略文件、大小写和搜索范围，不要直接认为代码不存在。[S39]

---

<a id="c20"></a>
## 20. Node / npm / pnpm

### 20.1 先看项目用哪套包管理器

先读 `package.json` 的 `scripts`、`engines`、`packageManager`，再看锁文件。通常 `package-lock.json` 对应 npm，`pnpm-lock.yaml` 对应 pnpm。**不要在同一项目随意轮流跑 npm / pnpm 来“试试看”。**[S34]

| 命令 | 直白解释 | 注意 |
|---|---|---|
| `node -v` / `npm -v` / `pnpm -v` | 看运行时和包管理器版本 | 先与项目要求对照 |
| `npm run` | 看能运行哪些脚本 | **补充**：不是每个项目都有 dev |
| `npm install` | 安装并按规则解析依赖 | 可能改动锁文件 |
| `npm ci` | 按现有锁文件做干净安装 | 需要锁文件；清理现有 node_modules；锁与清单不一致时报错 |
| `npm run dev` | 运行名为 dev 的项目脚本 | 不等于 npm 内置开发服务器 |
| `npm run build` | 运行构建脚本 | 产物位置由项目决定 |
| `npm list --depth=0` | 看顶层依赖 | 更适合快速了解项目 |
| `npm outdated` | 看哪些依赖有更新 | 不代表需要全部升级 |
| `npm install 包名` | 添加依赖 | **变更**；确认是否应为开发依赖 |
| `pnpm install --frozen-lockfile` | 按锁文件安装，不更新锁文件 | 不一致时失败，不要立即删锁文件 |
| `pnpm run dev` / `pnpm run build` | 按项目脚本运行 | 与 package.json 对照 |
| `pnpm --filter designer run start` | 仅对匹配的 workspace 包运行 start | **补充**：designer 必须是实际包名或匹配选择器 |

**【校正】**`npm ci` 不只是另一个拼法的 `npm install`；它不会为你“顺便修复锁文件”。锁定安装有助于重现版本，但运行结果仍会受系统、Node 版本、安装脚本和外部依赖影响。[S34]

### 20.2 【补充】同一个环境变量，不同终端这样传

以项目确实识别的 `CHOKIDAR_USEPOLLING` 为例；这不是所有文件监听库都支持的通用开关。

Bash：

```bash
CHOKIDAR_USEPOLLING=true pnpm --filter designer run start
```

PowerShell，分两步：

```powershell
$env:CHOKIDAR_USEPOLLING='true'
pnpm --filter designer run start
```

CMD，分两步：

```bat
set "CHOKIDAR_USEPOLLING=true"
pnpm --filter designer run start
```

轮询通常意味着更高资源开销，应先确认监听问题与项目实现。不要看到构建失败就自动 `npm audit fix --force`，也不要盲目全局升级 Node 或包管理器。[S01][S04][S34][S39]

---

<a id="c21"></a>
## 21. 常见问题 → 应该想到什么命令

本章是对原稿场景部分的扩展。**命令只是取证步骤，后面的判断是排查建议，不是仅凭一条输出就能确认的根因。** 先看本章确定方向，再回对应章节看参数、权限与风险。

### 21.1 8080 被占用了

**Windows：**`Get-NetTCPConnection -LocalPort 8080 -State Listen` → 记下 `OwningProcess` → `Get-Process -Id 12345` → 查完整启动参数 → 在所属 IDE、终端或服务管理器正常停止 → 再查端口。

**Linux：**`ss -lntp 'sport = :8080'` → `ps -p 12345 -o pid,user,args` → 确认属于哪个服务 → 优先从对应管理器停止 → 再验证。不要直接 `pkill java`，也不要自动把查询出的全部 PID 喂给强制结束命令。

### 21.2 java / mvn / node 提示“不是内部或外部命令”

Windows 先 `Get-Command java -All` 或 `where.exe java`；Linux 先 `command -v java`。然后看安装是否存在、PATH 顺序、当前 Shell、是否刚改环境但没重开。最后核对版本输出；不要同时修改十几处配置，导致不知道哪一步生效。

### 21.3 Java 服务启动失败或一启动就退出

先查现有服务状态和日志，避免再启动第二份。仅在本地或明确没有实例的测试环境，前台运行 `java -jar app.jar` 观察完整异常；并核对：

```bash
java -version
ls -l app.jar
ss -lntp 'sport = :8080'
tail -n 200 logs/app.log
```

Jar 名、日志路径和端口都换成真实配置。常见排查方向：JDK 版本不匹配、端口冲突、配置 profile 不对、数据库连接失败、文件权限或工作目录不对。命令报“文件不存在”时，先解决路径，不要把它当成业务异常。

### 21.4 本机能访问，别人电脑访问不了

**服务器本机**先 `curl -i http://127.0.0.1:8080/` → 查 `ss` 监听地址 → **访问方电脑**测目标服务器 TCP 端口 → 检查 Docker 发布、WSL 模式、系统防火墙、云侧网络规则和正确 IP。[S21][S36]

只监听 `127.0.0.1` 时，远端通常不能直接访问。不要通过“关闭全部防火墙”排查；需要放通时只对获准来源和必要端口变更。确认服务响应是否真的来自你的应用，而不是代理或同端口的另一个程序。

### 21.5 【补充】Java CPU 很高：从进程追到线程

**适用：Linux 上常见 HotSpot 平台线程问题；需要权限和 JDK 工具。** 不直接等同于 Windows、虚拟线程或所有容器部署的完整定位方案。[S10][S18]

```bash
# 1. 在 top 中确定高 CPU 的 Java PID
top

# 2. 假设目标进程是 12345，观察哪个线程持续占 CPU
top -H -p 12345

# 3. 假设高 CPU 的线程 ID 是 12367，转换成十六进制
printf '%x\n' 12367

# 4. 导出同一目标进程的线程栈；文件路径应有权限且避免覆盖
jcmd 12345 Thread.print -l > threads-12345.txt
```

在本例里，12367 转为 `304f`，然后查 `nid=0x304f` 附近的调用栈：

```bash
grep -nA 30 -B 3 'nid=0x304f' threads-12345.txt
```

**看什么：**是不是同一线程持续高、是否出现业务循环 / 序列化 / 锁竞争 / GC 等线索。必要时隔几秒有限次采样并比较，而不是只抓一次就下结论。容器内外线程 ID 可能不一致；先保证取 CPU 与抓栈处在一致的 PID 命名空间。若高 CPU 来自 GC 或原生代码，线程栈未必直接显示最终原因。

### 21.6 Java 内存高 / 经常 GC

先系统和容器层：`free -h`、`top` 或 `docker stats --no-stream`；再 JVM 层：`jcmd PID VM.flags`、目标支持时的 `GC.heap_info`、`jstat -gcutil PID 1000 10`。记录趋势，不要把一次采样当结论。[S18][S22]

**区分：**机器内存、容器限制、Java 进程常驻内存、Java 堆不是同一个指标。`-Xmx` 限制最大 Java 堆大小，并不限制 Java 进程使用的全部内存。不要直接调大堆、手动触发 GC 或无限次抓 heap dump；先确认压力在哪一层。[S16][S18]

### 21.7 磁盘满了，但不知道谁占空间

```bash
# 先看哪个挂载点满、是否 inode 满
df -h
df -i

# 再对已确认的目录逐层查看；-x 限定同一文件系统
sudo du -xhd1 /var 2>/dev/null | sort -h
sudo du -xhd1 /var/log 2>/dev/null | sort -h
```

**【校正】**不默认从 `du -sh /*` 把整台机器扫一遍；先锁定挂载点和目录。这里隐藏的权限错误可能影响完整性，且目录扫描本身会产生 I/O。

`df` 很满、`du` 对不上时，可能存在已删除但仍被进程打开的文件；经授权可用 `sudo lsof +L1` 观察，也可能是权限、挂载、保留空间等原因。不要反复 `rm` 活跃日志或直接清空数据库文件，先确定日志轮转和服务释放方式。

### 21.8 Git 拉不下来 / 出现冲突

先 `git status`、`git branch -vv`、`git remote -v`。有自己要保留的改动时，提交或按第 5.4 节妥善 stash；再 `git fetch origin`，判断分支是否分叉。`--ff-only` 拒绝时代表需要选择整合策略，不是应该马上 `reset --hard`。

已经处于 merge / rebase 中，按当前操作对应的 `--continue` 或 `--abort` 处理；网络认证失败则查凭据和仓库权限，不能靠改历史解决。

### 21.9 【补充】Git 拉了新 SQL，数据库为什么没变

Git 更新的是被版本管理的文件。**仅仅修改或拉取 `.sql` 文件，不会自动把已经存在的数据库表改掉。** 只有项目启动脚本、迁移工具或人工操作确实执行了相应变更，数据库才会改变；也要注意项目是否配置了自动 schema 更新。[S12][S25]

先核对实际连接库和表结构：

```sql
SELECT DATABASE();
SHOW TABLES;
SHOW CREATE TABLE demo_user;
```

然后对照项目的数据库迁移说明和已执行记录。初始化脚本从 25 张表变成 15 张，并不等于现有库会自动删掉另外 10 张。不要为“和 SQL 文件保持一样”而直接删库；明确迁移步骤、备份和回退计划。

### 21.10 Maven 在终端失败，但 IDEA 正常

对比 `mvn -v` / Wrapper 版本、JDK、项目 profile、`settings.xml` 路径和依赖仓库。再看第一处实质错误：编译失败、测试失败、下载失败是不同问题。先用 `mvn -e package` 获取信息，不要一上来跳过测试或清空本地仓库。

### 21.11 Docker 容器一直 Restarting / Exited

```bash
docker ps -a
docker logs --tail 200 app
docker inspect --format '{{json .State}}' app
docker stats --no-stream app
```

看退出码、是否被 OOM 终止、挂载文件是否存在、环境变量是否正确、依赖服务是否能连。`docker exec` 只对正在运行的容器有用，快速退出的容器可能进不去；不断 restart 不会修好错误配置。[S22]

### 21.12 Nginx 502 / 改配置后没生效

先确认查的是正确 Nginx 实例 → `nginx -t` → 看实际加载配置（`-T`，注意脱敏）→ 看 error log → 从代理所在网络环境访问上游。配置修改需要正确的 reload / 重建流程；页面缓存、前端产物和上游版本也需要分别核对。[S30]

### 21.13 【补充】Jar 传上去了，怎么还是旧功能

核对 **传到了哪台机器 → 运行命令指向哪一个 Jar → 修改时间 / 校验值 → 哪个服务实例仍在响应**。手动覆盖某个路径，不等于所有实例已经切换；更不保证在运行的 JVM 正确加载了新版本。

Bash 可 `sha256sum app.jar`；PowerShell 可 `Get-FileHash .\app.jar -Algorithm SHA256`。比较的是两个实际文件的校验值，不是“文件名看起来一样”。按团队发布流程切换、重启并验收接口；不要继续盲目覆盖。[S16]

### 21.14 【补充】SSH 断开后服务也没了

先看服务原本是否前台运行、仅加了 `&`、是否已有 systemd / Docker 管理。正式服务优先沿用已有管理器；简易测试环境再参考第 13.3 节。不要同时用 systemd、nohup 和手动启动托管同一个端口。[S28][S38]

---

<a id="c22"></a>
## 22. 最先学会的 40 条

**本节严格按 40 个编号列出高频命令。** 是入门优先级，不是全部知识；示例对象仍需替换。跨平台工具需要安装，表中“工具终端”表示已安装该工具的 CMD / PowerShell / Bash；复杂参数仍按对应章节的 Shell 版本执行。

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

---

<a id="c23"></a>
## 23. 推荐学习顺序与练习

### 23.1 学一条命令，至少会回答四句话

**它查什么 / 改什么？在哪个终端运行？结果重点看哪一列？做错以后有什么风险？** 能用自己的话讲清楚，比背全部参数更有用。

### 23.2 【补充】一轮练习安排

下面是练习建议，不要求每天完成固定量；全部放在自己的测试目录、测试仓库和测试服务中。

| 轮次 | 练什么 | 完成标准 |
|---|---|---|
| 1 | 目录、文件、日志 | 会进目录、备份文件、查最后 100 行、退出 less / tail |
| 2 | 进程和端口 | 能说出 8080 属于哪个进程，并正常停止自己的服务 |
| 3 | HTTP 与网络 | 能区分 ping、TCP 检测和 curl 业务响应 |
| 4 | Git 工作流 | 新建分支、修改、检查 diff、提交；可不推远程 |
| 5 | Java 与 Maven | 核对 JDK、构建、启动 Jar、说明构建阶段的区别 |
| 6 | SSH 与部署 | 分清本机 / 远端，上传测试文件，验证路径与文件内容 |
| 7 | Docker 与故障复盘 | 看容器日志，知道停止容器不等于删除数据卷 |

### 23.3 一个不会碰生产环境的小练习

Linux / WSL：只在新建的个人练习目录操作。下面使用时间后缀降低与旧目录重名的机会，若仍报已存在就改个名字。

```bash
mkdir "command-lab-$(date +%Y%m%d-%H%M%S)"
```

进入刚创建的目录以后，再逐条执行：

```bash
printf 'INFO start\nERROR demo failure\nINFO end\n' > demo.log
cat demo.log
grep -nC 1 'ERROR' demo.log
tail -n 2 demo.log
cp demo.log demo.log.bak
```

验收：能解释 `>` 为什么有覆盖风险，为什么 `grep -C` 比只搜 ERROR 更有上下文，备份与原文件路径分别在哪里。**不要为了“练删除”去操作真实项目、系统目录或数据库。**

---

<a id="c24"></a>
## 24. 建议在 Electerm 保存的快捷命令

也可放进个人命令笔记或其他终端的片段工具。**这是纯文本片段，不是 Electerm / Windows Terminal 的专用导入格式。** 先按实际 Shell 和本机 / 远端分组，不要把一组 Linux 命令误发到 Windows 或另一台服务器。

### 24.1 Linux / WSL：优先保存查询类片段

| 片段名称 | 内容 |
|---|---|
| 当前机器与目录 | `hostname; whoami; pwd` |
| Java 进程 | `ps -ef \| grep '[j]ava'` |
| TCP 8080 监听 | `ss -lntp 'sport = :8080'` |
| 内存 | `free -h` |
| 磁盘 | `df -h` |
| 最近日志 | `tail -n 200 app.log` |
| 实时日志 | `tail -n 100 -F app.log` |
| 错误上下文 | `grep -nC 5 'ERROR' app.log` |
| Docker 全部容器 | `docker ps -a` |
| Docker 最近日志 | `docker logs --tail 200 app` |
| 服务状态 | `systemctl status my-app --no-pager -l` |
| 服务最近日志 | `journalctl -u my-app -n 100 --no-pager` |
| Nginx 配置检查 | `nginx -t` |

需要权限的查询按团队规则加 `sudo`；所有文件名、服务名和端口先替换。这里不存 `kill -9`、删库、删卷、一键覆盖发布等危险动作。

### 24.2 Windows PowerShell

| 片段名称 | 内容 |
|---|---|
| TCP 8080 监听 | `Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue` |
| Java 命令位置 | `Get-Command java -All` |
| 最近日志 | `Get-Content .\app.log -Tail 200` |
| 实时日志 | `Get-Content .\app.log -Tail 100 -Wait` |
| 指定端口测试 | `Test-NetConnection 192.168.1.10 -Port 8080` |
| WSL 实例 | `wsl --list --verbose` |

---

<a id="c25"></a>
## 25. 一句话记忆

| 碰到的问题 | 先想到什么 |
|---|---|
| 文件找不到 | `pwd / Get-Location → ls / dir → find` |
| 命令找不到 | `Get-Command / where.exe / command -v → PATH → 版本` |
| 内容找不到 | `grep / Select-String → 时间范围和上下文` |
| 端口被占 | `Get-NetTCPConnection / ss → PID → 启动参数` |
| 接口不通 | `curl → 监听地址 → TCP 检测 → 日志和网络规则` |
| Java CPU 高 | `top → top -H → 线程 ID 转十六进制 → 线程栈` |
| Java 内存高 | `系统 / 容器限制 → JVM 参数 → 堆和 GC 趋势` |
| Git 改乱了 | `status → diff → log → 判断该撤哪一层` |
| Docker 启动失败 | `ps -a → logs → inspect → 环境与挂载` |
| 服务启动失败 | `systemctl status → journalctl → 实际配置` |
| 想删除、覆盖、重启 | `确认对象 → 备份 / 回退方案 → 最小范围变更 → 验证` |

**真正要记住的是“问题 → 下一条能缩小范围的命令”，不是“出了问题 → 先重启再说”。**

---

<a id="c26"></a>
## 26. 【补充】WSL 与跨系统开发

### 26.1 在 Windows 终端管理 WSL

| 命令 | 用途 | 注意 |
|---|---|---|
| `wsl --status` | 看默认配置状态 | 不等于发行版内核的全部诊断信息 |
| `wsl --version` | 看 WSL 组件版本 | 旧安装形态可能不支持该选项 |
| `wsl -l -v` | 看安装的发行版、运行状态和 WSL 版本 | 先确认真实发行版名 |
| `wsl -d Ubuntu` | 进入名为 Ubuntu 的发行版 | 名称按上一步替换 |
| `wsl --update` | 更新 WSL 组件 | **变更**；按管理策略执行 |
| `wsl --terminate Ubuntu` | 终止指定发行版 | **高风险**：里面的开发服务会中断 |
| `wsl --shutdown` | 终止运行中的发行版与 WSL 2 虚拟机 | **高风险**：可能影响依赖 WSL 的其他工具 |

这些命令从 Windows CMD / PowerShell 运行；在 Linux 里调用 Windows 的管理入口一般使用 `wsl.exe`。**`wsl --shutdown` 不是“只关当前终端窗口”。** `wsl --unregister` 会删除指定发行版数据，本版不提供为排错而直接执行的示例。[S35]

### 26.2 两套路径、两套运行环境

| 想做什么 | 写法 / 理解 |
|---|---|
| WSL 访问 D 盘项目 | 通常 `cd /mnt/d/project`，前提是默认自动挂载规则 |
| 在 WSL 里打开当前目录的 Windows 文件管理器 | `explorer.exe .` |
| WSL 里查 Linux Java | `command -v java`、`java -version` |
| Windows 里查 Windows Java | `Get-Command java -All`、`java -version` |
| PowerShell 改了 `$env:JAVA_HOME` | 不应假定已经正确配置了 WSL 里的 Linux JDK |

如果主要用 Linux 工具构建，在 WSL 自己的文件系统目录中放项目通常更合适；如果主要用 Windows 工具，就按 Windows 开发环境组织。不要让两套工具同时操作同一套依赖目录而不考虑权限、大小写、符号链接和性能差异。[S37]

### 26.3 localhost 不通先看网络模式

WSL 2 的 NAT 与 mirrored 模式行为不同。Windows 访问 WSL 服务、WSL 访问 Windows 服务，不应套同一个结论。[S36]

在 Windows 查看 Ubuntu 地址：

```powershell
wsl -d Ubuntu hostname -I
```

NAT 模式下，在 WSL 观察默认网关作为排查 Windows 主机地址的线索：

```bash
ip route show default
```

mirrored 模式支持若干不同的 localhost 互访行为，具体仍受系统、WSL 版本、监听地址和防火墙影响。**不要盲目拷贝网上的 IP、固定网关或全端口放行脚本。** 先确定模式和目标服务实际运行位置。

### 26.4 Windows 写的 start.sh 到 Linux 报 `^M` / bad interpreter

先检查：

```bash
file start.sh
head -n 1 start.sh
```

Windows CRLF 换行是一个排查方向，但不是所有脚本错误都由它导致。优先在编辑器把行尾改为 **LF**，确认首行解释器，再保存并 `bash -n start.sh` 检查语法。若使用 `dos2unix start.sh`，它会修改文件，先备份且只对文本脚本使用。

---

<a id="c27"></a>
## 27. 【补充】高风险操作清单

这里列出是为了识别风险，不是让你逐条尝试。即便命令本身合法，也需要授权、对象确认、备份和合适的业务窗口。

| 写法 / 行为 | 为什么危险 | 更合适的起点 |
|---|---|---|
| `rm -rf` 配合宽泛路径或空变量 | 递归永久删除，路径拼错影响范围极大 | `pwd`、`ls`、先备份和缩小对象 |
| `kill -9` / 强制 taskkill | 业务来不及收尾、清理资源 | 查 PID 身份，走服务管理器 |
| `pkill java` | 可能把多个无关 Java 服务一起结束 | 指定已确认的单个服务或 PID |
| `git reset --hard` | 会覆盖已跟踪工作区改动 | `status`、`diff`、先保存工作 |
| `git clean -fdx` | 连未跟踪且被忽略的文件也可能删掉 | 最多先看 `git clean -ndx` 预览，别直接执行删除 |
| `git push --force` | 改写远端历史，可能覆盖同事提交 | 共享分支走审核、普通撤销优先 revert |
| `docker compose down -v` / volume prune | 可能删除数据库真正存储的数据 | 查挂载和备份，不把卷当垃圾缓存 |
| `FLUSHALL / FLUSHDB`、无条件删表删库 | 直接造成数据删除 | 核对实例、库、条件、恢复方案 |
| `GC.heap_dump` / 大型对象统计 | 可能停顿、占满磁盘、泄露敏感数据 | 先低影响查询，评估窗口和空间 |
| `chmod -R 777` | 把权限大范围开放，掩盖实际归属问题 | 查所有者和最小必要权限 |
| `curl ... \| bash` | 下载的内容立即执行，没机会审查 | 可信来源、先保存、审查、验证后再执行 |
| `curl -k` 长期使用 | 跳过证书验证，掩盖信任问题 | 修复证书与信任链 |
| `wsl --unregister` | 会删除发行版与其中的数据 | 先诊断、导出备份，不能当普通重启 |
| 在终端明文写密码或把配置发群 | 历史、日志和进程参数可能泄露 | 交互输入、凭据管理、分享前脱敏 |

**练习时：只在你自己的测试目录、测试仓库、测试实例里练。线上出故障时：先保存关键证据，再做经过确认的最小变更。**

---

<a id="c28"></a>
## 28. 修订记录与核对来源

### 28.1 与原稿相比，本版改了什么

| 类型 | 改动 |
|---|---|
| 结构整理 | 原 25 个主分类及编号保留；新增环境指南、WSL、风险清单和来源说明 |
| 说明优化 | 把单纯“命令 + 用途”改为“命令 + 直白解释 + 适用环境 / 注意事项” |
| Windows 校正 | CMD 跨盘 `cd /d`；区分 PowerShell 命令、别名、curl.exe 与重定向 |
| 进程校正 | 优先精确查本地监听和核对 PID；不把强制终止、pkill java 放成默认步骤 |
| Git 校正 | 明确 pull 策略、stash 对未跟踪文件的范围、restore 的数据风险 |
| Java 校正 | 区分 JDK 版本，说明 jmap -heap 限制；补线程级 CPU 排查与诊断影响 |
| 构建补充 | Wrapper、Maven 生命周期、跳过测试差异、模块构建、Gradle Windows 写法 |
| Docker 校正 | 本地示例限制端口绑定，补充持久化、服务名通信、down 与 down -v 区别 |
| 数据库补充 | SQL 与 Shell 分开；查询范围、事务回滚边界、备份编码与恢复验证；SCAN 游标迭代 |
| 运维补充 | nohup 与 systemd 的区别；reload 与 daemon-reload；日志轮转；SSH/SCP/SFTP |
| 场景扩展 | 14 个常见问题流程，含代码更新不自动迁移数据库、Jar 版本核验和 WSL 排查 |
| 学习优化 | 原稿“40 条”实际列出 51 条；本版重新筛选为 40 个编号，并增加练习标准 |
| 内容边界 | 原稿命令为底稿，新增和实质校正有标记；没有把本机未验证的示例写成实测结论 |

### 28.2 官方文档与上游手册

以下链接用于核对本次实质补充和校正，不是要求你逐篇读完。**按你实际安装的版本查对应页面**；在线 current / latest 文档可能比项目版本新。Linux 工具部分使用 man7 展示的上游手册文本，不采用论坛帖作为技术结论依据。未特别标来源的基础条目主要沿用原稿并改写说明。

<a id="s01"></a>
**S01 · Bash：语法、重定向、启动方式与脚本检查**  
[Bash 上游手册（man7）](https://man7.org/linux/man-pages/man1/bash.1.html)。

<a id="s02"></a>
**S02 · Windows curl 与 PowerShell 命令解析**  
[Windows curl](https://learn.microsoft.com/en-us/windows/curl/)；[命令优先级](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_command_precedence)；[PowerShell 管道链运算符](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipeline_chain_operators)。

<a id="s03"></a>
**S03 · CMD：cd 与跨盘切换**  
[Microsoft cd 文档](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd)。

<a id="s04"></a>
**S04 · PowerShell：环境变量与作用范围**  
[Environment variables](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.5)。

<a id="s05"></a>
**S05 · tail：按描述符或文件名追踪日志**  
[tail 上游手册（man7）](https://man7.org/linux/man-pages/man1/tail.1.html)。

<a id="s06"></a>
**S06 · grep：上下文、固定字符串、缓冲与退出状态**  
[grep 上游手册（man7）](https://man7.org/linux/man-pages/man1/grep.1.html)。

<a id="s07"></a>
**S07 · Windows：TCP 查询、连接测试和进程终止**  
[Get-NetTCPConnection](https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-nettcpconnection)；[Test-NetConnection](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection)；[Stop-Process](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process)。

<a id="s08"></a>
**S08 · Linux：ss 套接字查询与端口过滤**  
[ss 上游手册（man7）](https://man7.org/linux/man-pages/man8/ss.8.html)。

<a id="s09"></a>
**S09 · Linux：kill 与进程信号**  
[kill 上游手册（man7）](https://man7.org/linux/man-pages/man1/kill.1.html)。

<a id="s10"></a>
**S10 · Linux：top 线程观察与内存指标**  
[top 上游手册（man7）](https://man7.org/linux/man-pages/man1/top.1.html)；[free 上游手册（man7）](https://man7.org/linux/man-pages/man1/free.1.html)。

<a id="s11"></a>
**S11 · curl：HTTP、超时、HEAD、JSON、TLS 与输出缓冲**  
[curl 官方选项手册](https://curl.se/docs/manpage.html)。

<a id="s12"></a>
**S12 · Git：基础概念和操作速查**  
[Git 官方速查表](https://git-scm.com/cheat-sheet)。

<a id="s13"></a>
**S13 · Git：pull 与整合策略**  
[git-pull](https://git-scm.com/docs/git-pull)。

<a id="s14"></a>
**S14 · Git：stash 的保存范围与恢复**  
[git-stash](https://git-scm.com/docs/git-stash)；[Pro Git：储藏与清理](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)。

<a id="s15"></a>
**S15 · Git：撤销、清理、合并和变基**  
[git-restore](https://git-scm.com/docs/git-restore)；[git-clean](https://git-scm.com/docs/git-clean)；[git-merge](https://git-scm.com/docs/git-merge)；[git-rebase](https://git-scm.com/docs/git-rebase)。

<a id="s16"></a>
**S16 · Java：启动语法、VM 参数与堆限制**  
[JDK 17 java 手册](https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html)。

<a id="s17"></a>
**S17 · Spring Boot：外部配置和命令行参数**  
[Externalized Configuration](https://docs.spring.io/spring-boot/reference/features/external-config.html)。

<a id="s18"></a>
**S18 · JDK：jcmd、目标 JVM 支持范围和诊断影响**  
[JDK 17 jcmd](https://docs.oracle.com/en/java/javase/17/docs/specs/man/jcmd.html)；[JDK 25 jcmd（对照版本差异）](https://docs.oracle.com/en/java/javase/25/docs/specs/man/jcmd.html)；[JDK 25 诊断工具说明](https://docs.oracle.com/en/java/javase/25/troubleshoot/diagnostic-tools.html)。

<a id="s19"></a>
**S19 · JDK：jmap 8 与 17 的选项差异**  
[JDK 8 jmap](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jmap.html)；[JDK 17 jmap](https://docs.oracle.com/en/java/javase/17/docs/specs/man/jmap.html)。

<a id="s20"></a>
**S20 · Maven：生命周期、Wrapper、单元测试与集成测试跳过规则**  
[Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)；[Maven Wrapper](https://maven.apache.org/tools/wrapper/)；[Surefire：Skipping Tests](https://maven.apache.org/surefire/maven-surefire-plugin/examples/skipping-tests.html)；[Failsafe：Skipping Tests](https://maven.apache.org/surefire/maven-failsafe-plugin/examples/skipping-tests.html)。

<a id="s21"></a>
**S21 · Docker：发布端口、回环绑定与 Compose 网络**  
[Port publishing](https://docs.docker.com/engine/network/port-publishing/)；[Compose networking](https://docs.docker.com/compose/how-tos/networking/)；[Engine networking](https://docs.docker.com/engine/network/)。

<a id="s22"></a>
**S22 · Docker：运行容器与 Compose 生命周期**  
[docker container run](https://docs.docker.com/reference/cli/docker/container/run/)；[docker compose](https://docs.docker.com/reference/cli/docker/compose/)；[docker compose down](https://docs.docker.com/reference/cli/docker/compose/down/)。

<a id="s23"></a>
**S23 · Gradle：项目 Wrapper 与 Windows 调用方式**  
[Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)。

<a id="s24"></a>
**S24 · MySQL：转储、一致性、文件输出与备份边界**  
[MySQL 8.4 mysqldump](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html)。

<a id="s25"></a>
**S25 · MySQL：客户端、事务隐式提交和执行计划**  
[mysql 客户端命令](https://dev.mysql.com/doc/refman/8.4/en/mysql-commands.html)；[隐式提交语句](https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html)；[EXPLAIN](https://dev.mysql.com/doc/refman/8.4/en/explain.html)。

<a id="s26"></a>
**S26 · Redis：扫描游标、过期状态与客户端参数**  
[SCAN](https://redis.io/docs/latest/commands/scan/)；[TTL](https://redis.io/docs/latest/commands/ttl/)；[Redis CLI](https://redis.io/docs/latest/develop/tools/cli/)。

<a id="s27"></a>
**S27 · OpenSSH：连接、传输、密钥与本地转发**  
[ssh](https://man.openbsd.org/ssh)；[scp](https://man.openbsd.org/scp)；[sftp](https://man.openbsd.org/sftp)；[ssh-keygen](https://man.openbsd.org/ssh-keygen)。

<a id="s28"></a>
**S28 · systemd：服务管理、reload 与 daemon-reload**  
[systemctl 上游手册（man7）](https://man7.org/linux/man-pages/man1/systemctl.1.html)。

<a id="s29"></a>
**S29 · systemd：日志查询、时间范围和实时追踪**  
[journalctl 上游手册（man7）](https://man7.org/linux/man-pages/man1/journalctl.1.html)。

<a id="s30"></a>
**S30 · Nginx：配置检查、信号和重载流程**  
[Controlling nginx](https://nginx.org/en/docs/control.html)；[Command-line parameters](https://nginx.org/en/docs/switches.html)。

<a id="s31"></a>
**S31 · 归档：tar 参数与 PowerShell 压缩限制**  
[tar 上游手册（man7）](https://man7.org/linux/man-pages/man1/tar.1.html)；[Compress-Archive](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.5)。

<a id="s32"></a>
**S32 · PowerShell：文本编码和版本差异**  
[Character encoding](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_character_encoding?view=powershell-7.5)。

<a id="s33"></a>
**S33 · jq：JSON 处理语法与原始文本输出**  
[jq 官方手册](https://jqlang.org/manual/)。

<a id="s34"></a>
**S34 · npm / pnpm：锁定安装与 workspace 过滤**  
[npm ci（v11 文档）](https://docs.npmjs.com/cli/v11/commands/npm-ci/)；[pnpm install](https://pnpm.io/cli/install)；[pnpm filtering](https://pnpm.io/filtering)。

<a id="s35"></a>
**S35 · WSL：基本管理命令、停止与注销**  
[WSL basic commands](https://learn.microsoft.com/en-us/windows/wsl/basic-commands)。

<a id="s36"></a>
**S36 · WSL：NAT、镜像模式和 localhost 行为**  
[WSL networking](https://learn.microsoft.com/en-us/windows/wsl/networking)。

<a id="s37"></a>
**S37 · WSL：跨文件系统、路径与工具协作**  
[WSL filesystems](https://learn.microsoft.com/en-us/windows/wsl/filesystems)。

<a id="s38"></a>
**S38 · nohup：挂断信号与输入输出处理**  
[nohup 上游手册（man7）](https://man7.org/linux/man-pages/man1/nohup.1.html)。

<a id="s39"></a>
**S39 · 辅助开发工具：搜索忽略规则与文件监听轮询**  
[ripgrep 上游 README](https://github.com/BurntSushi/ripgrep)；[Chokidar 上游 README](https://github.com/paulmillr/chokidar)。

### 28.3 怎么继续维护这份速查表

遇到新问题时补一条记录：**现象 → 环境和版本 → 执行命令 → 关键输出 → 实际原因 → 修复方式 → 风险 / 回退**。不要只把当时成功的一长串命令贴进来；下一次环境不同，顺序和后果可能不同。

> 最后记住：命令不用全背。看清环境、缩小范围、读懂结果、知道风险，才是真的会用。

[S01]: #s01
[S02]: #s02
[S03]: #s03
[S04]: #s04
[S05]: #s05
[S06]: #s06
[S07]: #s07
[S08]: #s08
[S09]: #s09
[S10]: #s10
[S11]: #s11
[S12]: #s12
[S13]: #s13
[S14]: #s14
[S15]: #s15
[S16]: #s16
[S17]: #s17
[S18]: #s18
[S19]: #s19
[S20]: #s20
[S21]: #s21
[S22]: #s22
[S23]: #s23
[S24]: #s24
[S25]: #s25
[S26]: #s26
[S27]: #s27
[S28]: #s28
[S29]: #s29
[S30]: #s30
[S31]: #s31
[S32]: #s32
[S33]: #s33
[S34]: #s34
[S35]: #s35
[S36]: #s36
[S37]: #s37
[S38]: #s38
[S39]: #s39
