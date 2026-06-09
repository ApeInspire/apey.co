import type { Lang } from "../i18n";

export interface StepContent {
  type: "paragraph" | "list" | "ordered-list" | "code" | "subheading";
  text?: string;
  items?: string[];
  code?: string;
}

export interface SkillPageData {
  categoryLabel: string;
  title: string;
  description: string;
  whenToUseHeading: string;
  whenToUseTriggers: string[];
  workflowHeading: string;
  steps: {
    heading: string;
    content: StepContent[];
  }[];
  captureHeading: string;
  captureLines: string[];
  installHeading: string;
  installDescription: string;
  installCommands: string;
  installUsageNote: string;
  sourceLabel: string;
}

const EN: SkillPageData = {
  categoryLabel: "Writing",
  title: "/publish-article",
  description:
    "Transform an AI conversation into a structured article ready for apey.co publication.",
  whenToUseHeading: "When to Use",
  whenToUseTriggers: [
    '"publish this conversation"',
    '"write an article about this"',
    '"整理成文章"',
    '"turn this into a blog post"',
    '"可以把这段对话整理成文章吗"',
  ],
  workflowHeading: "Workflow",
  steps: [
    {
      heading: "Step 1: Gather",
      content: [
        {
          type: "paragraph",
          text: "Read the capture file (if it exists), the conversation context, and the blog config. Identify the central thesis, evidence, narrative arc, and dead ends to discard.",
        },
      ],
    },
    {
      heading: "Step 2: Outline — Pick a Template",
      content: [
        {
          type: "paragraph",
          text: "Present the user with one recommended template and the outline. Three templates are available:",
        },
        {
          type: "list",
          items: [
            "Template A — Insight/Discovery: When the conversation led to a new realization. Structure: conclusion → evidence → implications → caveat → takeaway.",
            "Template B — Process/Learning: When building, learning, or doing something hands-on. Structure: what + why → steps + lessons → surprises → data → key takeaway.",
            "Template C — Analysis/Decision: When comparing tools, approaches, or making a choice. Structure: question → criteria → options → verdict → reflection.",
          ],
        },
      ],
    },
    {
      heading: "Step 3: Write",
      content: [
        {
          type: "paragraph",
          text: "Generate the article as a content.ts file — a TypeScript file exporting meta and sections. Writing style enforced:",
        },
        {
          type: "list",
          items: [
            'First person: "I" not "the author"',
            "Direct voice: state the conclusion, don't build up to it",
            "Short paragraphs. One idea per paragraph.",
            "1000-2000 words. Target ~15 sections.",
            'Data over adjectives: "3 hours, ¥5.85" not "incredibly fast and cheap"',
            "Kevin Kelly tone: observant, specific, slightly wonderous, never preachy",
          ],
        },
      ],
    },
    {
      heading: "Step 4: Polish",
      content: [
        {
          type: "paragraph",
          text: "Display the complete article. Ask the user about structure, flow, missing angles, and tone. Iterate based on feedback.",
        },
      ],
    },
    {
      heading: "Step 5: Publish",
      content: [
        {
          type: "paragraph",
          text: "Write files to apey.co.",
        },
        {
          type: "subheading",
          text: "New files:",
        },
        {
          type: "ordered-list",
          items: [
            "blog/{slug}/index.html — SEO meta",
            "blog/{slug}/main.tsx — renders BlogLayout + sections",
            "blog/{slug}/content.ts — the generated article",
          ],
        },
        {
          type: "subheading",
          text: "Modified files:",
        },
        {
          type: "ordered-list",
          items: [
            "vite.config.ts — add to rollupOptions.input",
            "src/blog/main.tsx — add to posts array",
            "public/sitemap.xml — add URL entry",
          ],
        },
      ],
    },
  ],
  captureHeading: "Capture Mechanism",
  captureLines: [
    "Optional mid-conversation capture. If the user says \"remember this point\", \"save for article\", or \"mark this\", the AI appends to Scout/.claude/article-capture/{topic}.md. Each entry is one line with a timestamp and summary.",
    "If no capture file exists, the AI works from the full conversation context directly.",
  ],
  installHeading: "Install",
  installDescription:
    "Copy the skill file to your Claude Code skills directory:",
  installCommands: `mkdir -p .claude/skills/publish-article/templates
curl -o .claude/skills/publish-article/SKILL.md https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/SKILL.md
curl -o .claude/skills/publish-article/templates/insight.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/insight.ts
curl -o .claude/skills/publish-article/templates/process.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/process.ts
curl -o .claude/skills/publish-article/templates/analysis.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/analysis.ts`,
  installUsageNote:
    'Then use it in any Claude Code session: /publish-article',
  sourceLabel: "Source:",
};

const ZH: SkillPageData = {
  categoryLabel: "写作",
  title: "/publish-article",
  description: "将 AI 对话转化为结构化文章，可直接发布到 apey.co。",
  whenToUseHeading: "何时使用",
  whenToUseTriggers: [
    '"publish this conversation"',
    '"write an article about this"',
    '"整理成文章"',
    '"turn this into a blog post"',
    '"可以把这段对话整理成文章吗"',
  ],
  workflowHeading: "工作流",
  steps: [
    {
      heading: "第 1 步：收集",
      content: [
        {
          type: "paragraph",
          text: "读取捕获文件（如果存在）、对话上下文和博客配置。识别核心论点、证据、叙事弧线和需要丢弃的无关分支。",
        },
      ],
    },
    {
      heading: "第 2 步：大纲 — 选择模板",
      content: [
        {
          type: "paragraph",
          text: "向用户推荐一个模板并展示大纲。三种模板可选：",
        },
        {
          type: "list",
          items: [
            "模板 A — 洞察型：适用于发现新认知的对话。结构：结论→证据→含义→限制→要点。",
            "模板 B — 过程型：适用于构建/学习/实践类对话。结构：做了什么→步骤+教训→惊喜→数据→关键收获。",
            "模板 C — 分析型：适用于比较工具/方案/决策的对话。结构：问题→标准→选项→判断→反思。",
          ],
        },
      ],
    },
    {
      heading: "第 3 步：撰写",
      content: [
        {
          type: "paragraph",
          text: "生成 content.ts 文件——导出 meta 和 sections 的 TypeScript 文件。强制写作风格：",
        },
        {
          type: "list",
          items: [
            '第一人称："我"不用"笔者"',
            "直接陈述：开门见山，不铺垫",
            "短段落。每段一个想法。",
            "1000-2000 字。约 15 个段落。",
            '数据优于形容词："3 小时，¥5.85"而非"又快又便宜"',
            "KK 语调：观察者视角、具体、略带惊奇、不说教",
          ],
        },
      ],
    },
    {
      heading: "第 4 步：打磨",
      content: [
        {
          type: "paragraph",
          text: "展示完整文章。向用户询问结构、流畅度、遗漏的角度和语调。根据反馈迭代。",
        },
      ],
    },
    {
      heading: "第 5 步：发布",
      content: [
        {
          type: "paragraph",
          text: "写入文件到 apey.co。",
        },
        {
          type: "subheading",
          text: "新建文件：",
        },
        {
          type: "ordered-list",
          items: [
            "blog/{slug}/index.html — SEO 元数据",
            "blog/{slug}/main.tsx — 渲染 BlogLayout + sections",
            "blog/{slug}/content.ts — 生成的文章",
          ],
        },
        {
          type: "subheading",
          text: "修改文件：",
        },
        {
          type: "ordered-list",
          items: [
            "vite.config.ts — 添加 rollupOptions.input",
            "src/blog/main.tsx — 添加 posts 数组条目",
            "public/sitemap.xml — 添加 URL",
          ],
        },
      ],
    },
  ],
  captureHeading: "捕获机制",
  captureLines: [
    "对话中可选捕获。当用户说「记住这个点」、「save for article」或「mark this」时，AI 追加到 Scout/.claude/article-capture/{topic}.md。每条一行，含时间戳和摘要。",
    "如果没有捕获文件，AI 直接从完整对话上下文中提取。",
  ],
  installHeading: "安装",
  installDescription:
    "将技能文件复制到你的 Claude Code skills 目录：",
  installCommands: `mkdir -p .claude/skills/publish-article/templates
curl -o .claude/skills/publish-article/SKILL.md https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/SKILL.md
curl -o .claude/skills/publish-article/templates/insight.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/insight.ts
curl -o .claude/skills/publish-article/templates/process.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/process.ts
curl -o .claude/skills/publish-article/templates/analysis.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/analysis.ts`,
  installUsageNote:
    "然后在任意 Claude Code 会话中使用：/publish-article",
  sourceLabel: "源文件：",
};

export function getPublishArticleContent(lang: Lang): SkillPageData {
  return lang === "zh" ? ZH : EN;
}
