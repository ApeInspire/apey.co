export const meta = {
  title: "知行合一",
  description:
    "用 AI 从零搭了一个网站。以及在这个过程中想明白的一些事——关于编程语言、判断、品味，和王阳明。",
  date: "2026-06-08",
  category: "ai-practice" as const,
  tags: ["ai-development", "claude-code", "web-development", "future-of-coding"],
  lang: "zh" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "logo 告诉我一件事",
  },
  {
    type: "paragraph" as const,
    content:
      "AI 出了五版 logo，我全否了。",
  },
  {
    type: "paragraph" as const,
    content:
      "卡通猿人。太幼稚。线描猿人。像老头。甲骨文「猿」字。太规矩。还有一版我连哪里不对都说不上来，但就是不对。",
  },
  {
    type: "paragraph" as const,
    content:
      "每一版单独看，技术上都没有问题。比例对。留白对。几何关系对。AI 没做错任何事。但我知道，这里面没有一版能代表这个网站。",
  },
  {
    type: "paragraph" as const,
    content:
      "后来我找到甲骨文里的「探」字——一只手伸进洞穴。截下来，交给 AI，让它按我的方向反复调。最后出来的东西：白色线条，深色背景，极简。它支持两种读法——手探入洞穴去抓东西，或者一束光打进了洞穴。",
  },
  {
    type: "paragraph" as const,
    content:
      "我对两种解读完全没有预期。AI 也没有。这件事比 logo 本身更值得记下来：AI 能执行到你没想到的程度，前提是你得先告诉它你要什么。方向是你定的，但不是每一层结果你都预见到了。",
  },
  {
    type: "diagram" as const,
    caption: "Logo：甲骨文风格的「探」字",
  },
  {
    type: "heading" as const,
    content: "没写代码",
  },
  {
    type: "paragraph" as const,
    content:
      "上周末用 Claude Code 搭了 apey.co。中英文博客站，部署在 Cloudflare 上。全程没写一行代码。",
  },
  {
    type: "paragraph" as const,
    content:
      "三个小时。¥5.85——人民币，不是美元。mimo-v2.5-pro，Lite 套餐 ¥39 一个月，这个项目用了 15% 的额度。",
  },
  {
    type: "paragraph" as const,
    content:
      "但这个过程中真正重要的是另外几件事。",
  },
  {
    type: "heading" as const,
    content: "语言是给谁用的",
  },
  {
    type: "paragraph" as const,
    content:
      "编程语言是给人用的——这个前提我们从来没怀疑过。语法清晰、文档齐全、社区活跃，选语言的三个标准都是围着人转的。",
  },
  {
    type: "paragraph" as const,
    content:
      "现在这个前提不成立了。",
  },
  {
    type: "paragraph" as const,
    content:
      "AI 已经是代码的主要生产者。人的位置变了——描述要什么，指出哪里不对，做判断。写代码这个动作本身，已经不在人的手里。",
  },
  {
    type: "paragraph" as const,
    content:
      "那选语言的标准就得反过来。不是人选什么顺手，是 AI 用什么最准。",
  },
  {
    type: "paragraph" as const,
    content:
      "用这个标准重新排一遍主流语言：",
  },
  {
    type: "list" as const,
    items: [
      { strong: "TypeScript / JavaScript：", text: "AI 写得最准。GitHub 上公开代码量最大，训练数据碾压其他语言。React、Tailwind、Node.js 的生态 AI 最熟。浏览器和 CLI 两端都能吃——目前唯一一个做到这一点的语言。" },
      { strong: "Python：", text: "第二准。数据科学和 AI 工具链的默认语言，语料丰富。但没有浏览器端，CLI 生态也比不上 JS。适合后端和数据处理。" },
      { strong: "Go：", text: "中等。语法简单是隐藏优势——语法越简单，AI 出错越少。没有浏览器端。系统层的活比较合适。" },
      { strong: "Rust：", text: "偏弱。训练数据少，语法复杂，AI 经常写出编译不过的代码。纠错成本高。只在确实需要性能和安全保证的场景才值得。" },
      { strong: "Java / C#：", text: "很奇怪的存在。代码量很大，但都是旧的。AI 生成的风格偏保守，样板代码多。啰嗦以前不是问题——代码是写给人读的。但 AI 时代，多出来的每一个 token 都要付费。啰嗦变成了成本。" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript 赢了。不是它最好，是 AI 最会写它。选语言这件事，审美、生态、招聘——这些曾经的第一优先级，现在都得往后排。排第一的问题只有一个：AI 对这门语言的准确率有多高。这是一个数据问题。哪门语言的公开训练数据最大，AI 就最擅长它。",
  },
  {
    type: "heading" as const,
    content: "产品的形态",
  },
  {
    type: "paragraph" as const,
    content:
      "做完这个项目，有一件事变得更清楚了：AI 产品的落脚点，说到底就两个——浏览器，还有终端。",
  },
  {
    type: "paragraph" as const,
    content:
      "浏览器的价值不用多说。终端呢？它轻、快、不需要界面，给 AI 用刚好。一个 AI Agent 要操作你的电脑，最快的方式不是打开网页，是敲命令行。",
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript 巧就巧在这里。一套语言，一个生态，浏览器端的 React 页面它能写，终端里的 CLI 工具它也能出。目前没有第二个语言做到这一点。当然，这不是 TypeScript 设计得有多好——纯粹是因为 Node.js 把 JavaScript 带进了服务器端，历史机缘而已。",
  },
  {
    type: "paragraph" as const,
    content:
      "但这个观察背后还藏着一个更大的判断，这篇先不展开——终端本质上是给 AI 用的，浏览器是留给人的最后一个软件界面。如果人机协作的终极形态就剩两个通道，语音和文字，那过去几十年攒下来的用户体验和界面设计的知识，大部分会失效。这个话题改天单独写。",
  },
  {
    type: "heading" as const,
    content: "不是最好的",
  },
  {
    type: "paragraph" as const,
    content:
      "部署平台比了 Vercel 和其他几家。Vercel 开发体验确实更好——预览部署、Git 集成、边缘函数，每一样都更顺手。",
  },
  {
    type: "paragraph" as const,
    content:
      "我选了 Cloudflare。",
  },
  {
    type: "paragraph" as const,
    content:
      "不是它技术上更好。三个原因：（1）一个控制台装下 Pages、Workers、存储、分析，不用拼厂商；（2）除了域名花了 $100，全免费，我研究过扩容后的阶梯定价，从零到中等规模都消化得了；（3）CLI 工具和 AI 工作流咬合得很好，手动步骤很少。",
  },
  {
    type: "paragraph" as const,
    content:
      "这个决策和选 TypeScript 同一个逻辑：不是在技术层面比谁好，是看哪个选项跟 AI 工作流匹配得更紧。另外，一个没有收入预期的项目，零成本就是一切。",
  },
  {
    type: "heading" as const,
    content: "名字",
  },
  {
    type: "paragraph" as const,
    content:
      "我的网名叫 Ape。猿人。",
  },
  {
    type: "paragraph" as const,
    content:
      "选这个名字，跟喜不喜欢猿猴没关系。猿人身上有两件事，跟今天正在发生的事一模一样。",
  },
  {
    type: "paragraph" as const,
    content:
      "第一件：智力是从语言开始的。猿人先有了语言，然后才有抽象思维，才有文明。大模型走的是同一条路——语言是智力的第一块积木。第二件：猿人学会了直立行走，手就空出来了，手空出来就可以用工具。AI 有了语言，开始有智力。AI 有了工具——Claude Code、Cursor——正在把人的手从代码里解放出来。语言和工具。跟猿人走出森林的时候一模一样。",
  },
  {
    type: "paragraph" as const,
    content:
      "所以域名里得有 ape。从 apehub.io 筛到 apey.co，花了比预计更长的时间。不是查一下有没有，是让 AI 调工具去搜组合、拼写、后缀，看哪个最契合。做决定那一下，AI 只能列一屏选项。apey.co——短、品牌化、.co 带一点商业味但不重——这个判断是我的。AI 能做跑腿的活。它不知道哪个名字对。它不知道你是谁。",
  },
  {
    type: "heading" as const,
    content: "知行合一",
  },
  {
    type: "paragraph" as const,
    content:
      "我告诉 AI：这个站做两件事，把未知经过思考和写作变成已知，把已知变成现实和实现。它回了四个字——知行合一。",
  },
  {
    type: "paragraph" as const,
    content:
      "英文版是我追问出来的。我翻的「To Know Is To Act」总觉得少了点什么。于是问 AI：用「To Know To Act」怎么样？它的回应让我意识到一件事——去掉 is，不再是一个陈述句。变成了循环。知道，行动，再知道，再行动。少了一个词，反而更完整。",
  },
  {
    type: "paragraph" as const,
    content:
      "王阳明是我最喜欢的思想家。他讲知行合一，不是说知道了再去行动，而是知道和行动根本就是同一件事。知道而不行动，等于不知道。这个道理五百年了。",
  },
  {
    type: "paragraph" as const,
    content:
      "我想起王阳明是有原因的。以前 AI 只能知，不能行——你问什么它答什么，但做不了任何事。现在不一样了。你讲清楚要什么，它去写代码，去部署，去搜域名。知和行之间的那条缝，第一次开始合上了。",
  },
  {
    type: "paragraph" as const,
    content:
      "五百年后，另外一个东西正在做到知行合一。离王阳明说的那个地步还有多远——那是下一个问题了。",
  },
  {
    type: "heading" as const,
    content: "洋葱",
  },
  {
    type: "paragraph" as const,
    content:
      "跟 AI 协作很像剥洋葱。你抛一个模糊的想法，它给几种可能，你否掉大部分，它往剩下的方向深挖，你又看到新的角度。几轮下来，模糊的东西慢慢变清楚。",
  },
  {
    type: "paragraph" as const,
    content:
      "前提是：你得知道你要的是洋葱还是苹果。AI 不能替你决定你想要什么。它能做的，是帮你更快地搞清楚自己到底想要什么。你得愿意一层一层剥。",
  },
  {
    type: "paragraph" as const,
    content:
      "技术部分 AI 全包了。搭项目、写组件、响应式、多语言、SEO、部署。我的事就三样：需求、纠错、判断。纠错频率不低——AI 有时候会把简单的东西套上三层抽象，有时候路径写错了。但这些，你指出来，它马上改对。",
  },
  {
    type: "heading" as const,
    content: "账单",
  },
  {
    type: "list" as const,
    items: [
      { strong: "模型：", text: "mimo-v2.5-pro" },
      { strong: "套餐：", text: "Lite，¥39/月，41 亿 credits" },
      { strong: "消耗：", text: "6.15 亿 tokens，占套餐 15%" },
      { strong: "成本：", text: "¥5.85" },
      { strong: "请求：", text: "1,000+ 次" },
      { strong: "时间：", text: "3 小时" },
      { strong: "域名：", text: "$100（唯一额外开销）" },
    ],
  },
  {
    type: "heading" as const,
    content: "还剩下什么",
  },
  {
    type: "paragraph" as const,
    content:
      "写代码这件事正在从人的手里转到 AI 手里。不是以后。现在。",
  },
  {
    type: "paragraph" as const,
    content:
      "代码不再是人最主要的产出之后，程序员还剩下什么？",
  },
  {
    type: "paragraph" as const,
    content:
      "三样东西。判断——什么该做，什么不该做。品味——什么是对的，哪怕你说不出为什么。方向——下一步往哪走。这三样有一个共同点：AI 都做不了。不是 AI 不够聪明。是这三样需要你在乎。AI 不在乎。它只是在运行。",
  },
  {
    type: "paragraph" as const,
    content:
      "这个网站我还会继续搭。不是因为会变成多了不起的产品，而是搭的过程本身就是我想清楚自己在想什么的方式。AI 帮我写代码。方向是我的，判断是我的，什么算好——也是我的。",
  },
  {
    type: "paragraph" as const,
    content:
      "代码可以外包。判断不行。",
  },
  {
    type: "heading" as const,
    content: "这篇东西怎么来的",
  },
  {
    type: "paragraph" as const,
    content:
      "这篇文章也是用 AI 写的。一开始用的 MiMo，小米的模型，写作不是它的强项。换成 DeepSeek V4 Pro——也是人民币计价——让它按凯文·凯利的风格写。",
  },
  {
    type: "paragraph" as const,
    content:
      "整个文章的内容、结构、每一段的逻辑，是我一字一句告诉 AI 的。它帮我丰富了表述、调整了风格、校验了语法。方向是我的，判断是我的。什么该写什么不该写，是我定的。",
  },
  {
    type: "image" as const,
    src: "/cost.png",
    caption: "这篇东西的实际花费",
  },
  {
    type: "paragraph" as const,
    content:
      "这是写这篇文章的费用。",
  },
];
