export const meta = {
  title: "我建了一个 MCP 服务器：从协议到发布",
  description:
    "MCP 是 2026 年增长最快的 AI 开发技能。我花了两周，从零建了一个给 Claude Code 用的开发者上下文 MCP 服务器。这篇文章拆解完整的架构设计、技术决策和踩坑记录。",
  date: "2026-06-10",
  category: "ai-practice" as const,
  tags: ["mcp", "claude-code", "ai-development", "typescript", "open-source"],
  lang: "zh" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "为什么做 MCP 服务器",
  },
  {
    type: "paragraph" as const,
    content:
      "MCP 全称 Model Context Protocol，是 Anthropic 发布的开放协议，让 AI（比如 Claude Code）能调用外部工具。简单说，它是 AI 的'手'——AI 有脑子，但没手就没法碰你的文件系统、你的数据库、你的项目。MCP 给它装上工具。",
  },
  {
    type: "paragraph" as const,
    content:
      "2026 年的招聘市场，MCP 开发者的需求暴涨 938%。Claude Code 从 2025 年底开始成为开发者的主力工具，有些公司的 AI 工程师岗位直接写着'Claude Code experience — non-negotiable'。但你跟面试官说'我天天用 Claude Code'——那只是使用经验。你给他看'我发布过一个 MCP 服务器'——那才是工程能力。",
  },
  {
    type: "paragraph" as const,
    content:
      "大部分 MCP 服务器是调外部 API 的——天气、地图、数据库。我做了一个不一样的：给 Claude Code 用的项目上下文工具。不是帮 AI 上网，是帮 AI 理解它正在开发的项目。",
  },

  {
    type: "heading" as const,
    content: "四个工具的边界是怎么划的",
  },
  {
    type: "paragraph" as const,
    content:
      "用 Claude Code 做开发时，有一个高频场景：AI 开局要先理解项目。它不知道项目结构、不知道最近改了什么、不知道某个文件里有什么。它只能一个一个地用 ls、git log、cat 来探索。这个过程又慢又吃 token。",
  },
  {
    type: "paragraph" as const,
    content:
      "我设计的目标很明确：让 AI 能用一个工具调用就拿到它本来需要 5-10 个 shell 命令才能收集到的上下文。最终定了四个工具：",
  },
  {
    type: "list" as const,
    items: [
      {
        strong: "get_project_structure — ",
        text: "返回项目目录树。理解布局用。",
      },
      {
        strong: "get_git_context — ",
        text: "当前分支、最近提交、工作区变更。理解状态用。",
      },
      {
        strong: "find_files — ",
        text: "按 glob 模式搜索文件。定位文件用。",
      },
      {
        strong: "get_file_summary — ",
        text: "文件元数据、import/export 列表、前 N 行预览。快速浏览用。",
      },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "四个工具覆盖了'我在哪 → 什么状态 → 找什么 → 看一眼'这个认知闭环。不多不少。每个工具返回的内容有严格上限——目录深度不超过 3 层，搜索结果不超过 50 条，文件预览不超过 20 行。不是为了限制功能，是防止 token 爆炸。给 AI 太多信息比给太少更危险。",
  },

  {
    type: "heading" as const,
    content: "技术选型：为什么 TypeScript，为什么 STDIO",
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript。MCP 官方 SDK 的 TypeScript 支持最成熟，AI 行业的主流语言栈也在向 TS 靠。Zod 做参数校验——这也是 MCP 生态的标准搭配，工具参数定义用 Zod schema，SDK 自动处理校验和类型推导。",
  },
  {
    type: "paragraph" as const,
    content:
      "传输层选了 STDIO 而不是 HTTP。原因很实际：这个 MCP 服务器是给本地 Claude Code 用的，不是对外提供 API。STDIO 最简单——没有网络层、没有认证、没有端口冲突。Claude Code 启动时 spawn 一个子进程，通过标准输入输出通信。部署就是一行 npx 命令。",
  },
  {
    type: "paragraph" as const,
    content:
      "但我保留了架构上的灵活性。工具 handler 和 MCP 注册是分离的——每个工具的逻辑在独立的文件里，和 MCP 协议层无关。以后如果要加 HTTP 传输，只需要改入口文件，所有工具 handler 不需要动。",
  },

  {
    type: "heading" as const,
    content: "MCP 协议的实际体验",
  },
  {
    type: "paragraph" as const,
    content:
      "说三个好的和一个槽点。",
  },
  {
    type: "paragraph" as const,
    content:
      "好的。第一，Zod schema 就是工具契约。你定义好了输入参数的类型和描述，SDK 自动生成 JSON Schema 给 AI。AI 不需要猜测参数格式。第二，MCP Inspector 工具很好用——一行命令启动一个 Web 界面，可以手动调用工具、看返回结果、调试参数。比对着终端调试快很多。第三，协议层很薄。核心就是 tools/list 和 tools/call 两个方法。没有复杂的状态机。",
  },
  {
    type: "paragraph" as const,
    content:
      "槽点。SDK 版本升级有不兼容变更。1.24 和 1.26 的 API 有差异，`server.tool()` 的签名变了。这在快速演进的协议上很正常，但意味着你的代码可能半年后需要适配。好在这个项目代码量很少，适配成本低。",
  },

  {
    type: "heading" as const,
    content: "三个关键的工程决策",
  },
  {
    type: "heading" as const,
    content: "1. 只读",
  },
  {
    type: "paragraph" as const,
    content:
      "四个工具全部只读——不改文件、不执行命令、不调网络。这意味着一件事：用户可以在任何项目里放心用，不会有任何副作用。对开源项目来说，'你能信任我'比'我能做很多事情'重要得多。",
  },
  {
    type: "heading" as const,
    content: "2. 优雅降级",
  },
  {
    type: "paragraph" as const,
    content:
      "不在 Git 仓库里调用 get_git_context——不崩溃，返回一个清晰的错误信息'Not a git repository'。文件不存在——返回 null。没有提交记录的仓库——返回空的提交列表。每种失败模式都有对应的降级行为。这不是防御性编程，这是工具的底线：用户不应该因为工具的行为而惊讶。",
  },
  {
    type: "heading" as const,
    content: "3. 尊重 .gitignore",
  },
  {
    type: "paragraph" as const,
    content:
      "目录遍历和文件搜索默认读取项目的 .gitignore。你已经在项目里定义了什么是噪音，工具就应该尊重这个定义。DEFAULT_IGNORE 覆盖 node_modules、.git、dist、build 等常见目录，.gitignore 补充项目特定的规则。两层过滤。",
  },

  {
    type: "heading" as const,
    content: "Glob 匹配的坑",
  },
  {
    type: "paragraph" as const,
    content:
      "find_files 工具支持 glob 模式搜索。实现 glob 到正则的转换时，遇到了一个经典问题：`**/` 和 `**` 的区别。",
  },
  {
    type: "paragraph" as const,
    content:
      "`src/**/*.ts` 应该匹配 src/index.ts（零层目录）和 src/utils/helper.ts（一层目录）。但如果你把 `**/` 直接映射成 `.*/`，前面的 `src/` 和后面的 `*.ts` 之间至少会隔一层 `/`，src/index.ts 就匹配不上了。",
  },
  {
    type: "paragraph" as const,
    content:
      "正确的处理：`**/` 映射成 `(.*/)?`——中间路径段是可选的。`**`（不在斜杠前）映射成 `.*`。这个 bug 是测试发现的——findFiles('src/**/*.ts') 只返回了子目录里的文件，漏掉了根目录的。没有测试的话，这个 bug 可能很久都不会被注意到。",
  },

  {
    type: "heading" as const,
    content: "测试：用文件系统 fixture 隔离",
  },
  {
    type: "paragraph" as const,
    content:
      "这个项目大部分逻辑是文件系统和 Git 操作，不能 mock。我用了一个简单的办法：每个测试套件在 setup 时创建一个临时的文件系统 fixture——有真实的目录、真实的 .ts 文件、模拟 node_modules 和 .git 目录——测试跑完后 teardown 删除。",
  },
  {
    type: "paragraph" as const,
    content:
      "注意：Vitest 默认并行跑测试文件。如果多个测试文件共享同一个 fixture 目录，setup 和 teardown 会互相踩。解决办法很简单——每个测试套件用不同的 fixture 目录名。一行改动就解决了。",
  },
  {
    type: "paragraph" as const,
    content:
      "最终 21 个测试覆盖了：目录树结构验证、隐藏文件过滤、Git 仓库检测、空提交历史的处理、文件搜索的 glob 匹配、文件摘要的 import/export 提取、以及不存在文件和目录的边界情况。",
  },

  {
    type: "heading" as const,
    content: "代码与数据",
  },
  {
    type: "list" as const,
    items: [
      { strong: "GitHub：", text: "github.com/ApeInspire/devcontext-mcp" },
      { strong: "npm：", text: "npmjs.com/package/@apeinspire/devcontext-mcp" },
      { strong: "语言：", text: "TypeScript，ES2022，Node 16+" },
      { strong: "依赖：", text: "只有 @modelcontextprotocol/sdk 和 zod" },
      { strong: "测试：", text: "21 个测试，4 个套件，Vitest" },
      { strong: "时间：", text: "从零到可用 ~8 小时，写测试 ~2 小时" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "安装：npx -y @apeinspire/devcontext-mcp，或 npm install -g @apeinspire/devcontext-mcp。源码：github.com/ApeInspire/devcontext-mcp。",
  },

  {
    type: "heading" as const,
    content: "这不止是一个工具",
  },
  {
    type: "paragraph" as const,
    content:
      "MCP 服务器只是四段代码。但把它写完、测试完、发布到 npm——这件事本身是一个信号。",
  },
  {
    type: "paragraph" as const,
    content:
      "2026 年 AI 行业的招聘逻辑变了。面试官不想听你说'我懂 AI'——每个人都说。他想看你的 GitHub、你的 npm 包、你的技术文章。他想知道你真的做过。发布一个 MCP 服务器，比你写十篇'AI 行业洞察'有用十倍。",
  },
  {
    type: "paragraph" as const,
    content:
      "这篇文章也不是为了这篇文章。它是这个 MCP 服务器的说明书、架构记录、也是我在 AI 领域学习轨迹的一个公开节点。代码开源 + 技术拆解 = 无法伪造的能力证明。这是 apey.co 存在的理由——不是做内容，是做证据。",
  },
];
