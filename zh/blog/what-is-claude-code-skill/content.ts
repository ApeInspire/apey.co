export const meta = {
  title: "Claude Code Skill：从第一性原理拆解",
  description:
    "Claude Code Skill 不是插件，是一段在运行时注入的 Prompt 片段。五层架构拆解它为什么能工作。",
  date: "2026-06-09",
  category: "ai-practice" as const,
  tags: ["claude-code", "skill", "ai-architecture", "prompt-engineering"],
  lang: "zh" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "先给结论",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code Skill 是一个可加载的 Agent 定义文件，用自然语言编写，由 LLM 在运行时解释执行。它用 Prompt 注入替代了插件架构——没有沙箱，没有进程，没有二进制文件。只有一个 Markdown 文件和一个斜杠命令。",
  },
  {
    type: "paragraph" as const,
    content:
      "听起来很简单。但这种简洁来自同时解决了两个架构约束。要理解为什么，我们一层一层拆。",
  },
  {
    type: "heading" as const,
    content: "第一层：Claude Code 是一个 Agent 循环",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code 不是终端里的 ChatGPT。它是一个 Agent 循环：",
  },
  {
    type: "list" as const,
    items: [
      { strong: "观察。", text: " 读取上一个动作的输出。" },
      { strong: "思考。", text: " 决定下一步做什么。" },
      { strong: "行动。", text: " 调用工具——读文件、写代码、执行命令。" },
      { strong: "重复。", text: " 把结果反馈回循环。" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "驱动这个循环的，是一段系统提示词（System Prompt）——Claude 的「操作系统」，定义了行为边界、工具使用规则、输出格式和安全约束。Claude Code 的一切行为都从这段提示词流出。",
  },
  {
    type: "paragraph" as const,
    content:
      "于是问题来了：你怎么扩展一个由提示词驱动的系统？",
  },
  {
    type: "heading" as const,
    content: "第二层：Skill 是运行时的 Prompt 补丁",
  },
  {
    type: "paragraph" as const,
    content:
      "传统软件扩展：写代码 → 编译 → 加载共享库 → 新功能可用。",
  },
  {
    type: "paragraph" as const,
    content:
      "提示词驱动系统的扩展：写一个 Markdown 文件 → Claude Code 启动时扫描到它 → 用户输入 /command，注入到对话上下文中。",
  },
  {
    type: "paragraph" as const,
    content:
      "机制是一次运行时拼接：",
  },
  {
    type: "list" as const,
    items: [
      { strong: "", text: "base_system_prompt + skill_body → effective_system_prompt" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "这个拼接发生在命令触发的瞬间——不是在启动时，不是在安装时。Skill 的内容在磁盘上只是一段死文字，直到用户调用它，它才变成活跃 Prompt 的一部分。",
  },
  {
    type: "paragraph" as const,
    content:
      "这个设计解决了一个根本矛盾：系统提示词必须保持稳定——改动它可能破坏全局行为；但你又需要扩展它——因为新的使用场景需要新的能力。",
  },
  {
    type: "paragraph" as const,
    content:
      "Skill 把这两个关注点分开了。基础系统提示词保持不变，保证 Agent 核心行为稳定。Skill 按需注入，临时改变特定场景下的行为。稳定的核心 + 可插拔的扩展——跟微内核一模一样，只是这里的模块不是二进制，是自然语言指令。",
  },
  {
    type: "heading" as const,
    content: "第三层：运行时与定义的分工",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code 和 Skill 之间有清晰的职责划分：",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Claude Code 提供：", text: "执行循环、工具集（读写/搜索/运行）、对话上下文管理。这些是运行时。" },
      { strong: "Skill 提供：", text: "领域指令、结构化工作流、输出约束。这些是 Agent 定义。" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "Skill 不需要实现工具调用、状态管理或错误处理。它从运行时继承了全部这些能力。它只需要描述：在这个场景下，Agent 应该有什么不同的行为。",
  },
  {
    type: "paragraph" as const,
    content:
      "以 publish-article 为例。它的五步工作流——收集、大纲、撰写、打磨、发布——涉及读取文件、生成文本和写入磁盘。三个不同的工具。但 Skill 从不直接调用它们。它描述工作流，Claude Code 的 Agent 循环执行它，根据需要调用工具。",
  },
  {
    type: "paragraph" as const,
    content:
      "通用 Agent 运行时 + 可加载的领域特定 Agent 定义 = 可组合的 Agent 系统。Skill 在这里的角色，相当于浏览器扩展——浏览器提供渲染引擎、网络栈、DOM，扩展只需要提供领域逻辑。",
  },
  {
    type: "heading" as const,
    content: "第四层：为什么这个设计是第一性原理正确的",
  },
  {
    type: "paragraph" as const,
    content:
      "每个 LLM Agent 系统都面临两个硬约束：",
  },
  {
    type: "list" as const,
    items: [
      { strong: "约束 1——上下文窗口是有限的。", text: " 你不能把所有 Skill 永远挂在系统提示词里。每花一个 token 在未使用的 Skill 上，就少一个 token 用于推理和对话。Skill 必须按需加载。这是空间约束。" },
      { strong: "约束 2——提示词的稳定性决定行为的可预期性。", text: " 每次修改系统提示词，都冒着破坏全局 Agent 行为的风险。扩展不能直接修改核心。这是安全约束。" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "Skill 同时解决了这两个约束。",
  },
  {
    type: "paragraph" as const,
    content:
      "按需注入意味着 Skill 只在被调用时才进入上下文。装 50 个 Skill——上下文成本是零，直到你使用其中一个。这解决了空间约束。",
  },
  {
    type: "paragraph" as const,
    content:
      "不修改核心系统提示词意味着 Agent 的基线行为永远可预期。一个写坏了的 Skill 只影响它自己的调用——它不可能把整个 Agent 弄崩。这解决了安全约束。",
  },
  {
    type: "paragraph" as const,
    content:
      "这个设计之所以正确，不是因为它巧妙，而是因为它承认并遵循了媒介本身的根本约束。它不跟上下文窗口较劲——它服从它。它不绕过提示词——它与它组合。",
  },
  {
    type: "heading" as const,
    content: "第五层：指令就是代码",
  },
  {
    type: "paragraph" as const,
    content:
      "这是最深的一层。一个 SKILL.md 文件是一个 Markdown 文档。没有 import 语句。没有类型注解。没有错误处理。它怎么执行？",
  },
  {
    type: "paragraph" as const,
    content:
      "因为在 LLM 时代，自然语言指令就是代码——LLM 就是解释器。",
  },
  {
    type: "list" as const,
    items: [
      { strong: "传统模型：", text: "代码（文本）→ 编译器 → 机器指令 → CPU 执行。" },
      { strong: "Skill 模型：", text: "Prompt（文本）→ 上下文注入 → LLM 解释 → Agent 执行。" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "编译器被语义理解替代。CPU 被 Agent 循环替代。指令集不再是 ARM 或 x86——而是 Claude Code 暴露的工具目录。",
  },
  {
    type: "paragraph" as const,
    content:
      "Skill 描述的是意图——做什么，按什么顺序，在什么约束下。LLM 把意图翻译成工具调用。指令在意图层操作，工具在执行层操作，LLM 是两者之间的桥梁。",
  },
  {
    type: "paragraph" as const,
    content:
      "这就是为什么 Skill 文件不需要代码。它们是写给一个已经理解自然语言的解释器的指令。加代码反而是多余的——它会在已有的执行路径上再加第二条路径。",
  },
  {
    type: "heading" as const,
    content: "一个限制",
  },
  {
    type: "paragraph" as const,
    content:
      "Skill 的精确度上限是 LLM 对其指令的理解能力。没有编译器来捕捉错误。没有类型系统来拒绝矛盾。一个写得很差的 Skill 产生很差的 Agent 行为，而失败模式是沉默的——Agent 只是做错了事，不会报错。质量的天花板是 Prompt 的清晰度。",
  },
  {
    type: "heading" as const,
    content: "一句话",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code Skill 不是一个功能。它是「怎么扩展一个提示词驱动的系统」这个问题的架构正确解。它之所以能工作，不是因为它发明了新机制，而是因为它把 LLM 自身的能力当作了基础设施。Prompt 是程序。上下文是内存。注入是加载。LLM 是解释器。剩下的只是 Markdown。",
  },
];
