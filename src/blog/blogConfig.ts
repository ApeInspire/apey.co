export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  series?: string;
  seriesOrder?: number;
  relatedTools?: string[];
  author: string;
  slug: string;
  lang?: "en" | "zh";
}

export type BlogCategory = "ai-practice" | "tool-review" | "industry" | "efficiency";

export const CATEGORIES: Record<BlogCategory, { en: string; zh: string }> = {
  "ai-practice": { en: "AI Practice", zh: "AI 实践" },
  "tool-review": { en: "Tool Reviews", zh: "工具评测" },
  industry: { en: "Industry", zh: "行业见解" },
  efficiency: { en: "Efficiency", zh: "效率技巧" },
};

// Single source of truth for all blog posts.
// Each post is listed in its primary language.
// Cross-listing (e.g. zh post on EN page) is handled by consumers via `lang` field.
export const ALL_POSTS: BlogPostMeta[] = [
  // ── Primary: ZH ──────────────────────────
  {
    slug: "big-must-fall",
    title: "大而必倒",
    description:
      "恐龙灭绝了，蟑螂活了下来。在 AI 时代，大不是优势，大本身就是问题。从恐龙到企业再到人，谁在拒绝 AI，谁就在走向灭亡。",
    date: "2026-06-13",
    category: "industry",
    tags: ["AI", "企业转型", "行业变革", "恐龙理论"],
    author: "Ape",
    lang: "zh",
  },
  // ── Primary: EN ──────────────────────────
  {
    slug: "building-an-mcp-server",
    title: "I Built an MCP Server: From Protocol to Production",
    description:
      "MCP is the fastest-growing AI dev skill in 2026. Architecture, technical decisions, and lessons from building a developer-context MCP server for Claude Code.",
    date: "2026-06-10",
    category: "ai-practice",
    tags: ["mcp", "claude-code", "ai-development", "typescript", "open-source"],
    author: "Ape",
    lang: "en",
  },
  {
    slug: "what-is-claude-code-skill",
    title: "Claude Code Skill: From First Principles",
    description:
      "Claude Code Skill is not a plug-in. It is a prompt fragment loaded at runtime. From Agent Loop to prompt patching to \"instructions are code\" — the five-layer architecture.",
    date: "2026-06-09",
    category: "ai-practice",
    tags: ["claude-code", "skill", "ai-architecture", "prompt-engineering"],
    author: "Ape",
    lang: "en",
  },
  {
    slug: "how-i-built-a-website-with-ai",
    title: "To Know To Act",
    description:
      "Notes from building a site entirely with AI. On programming languages, judgment, taste, and Wang Yangming.",
    date: "2026-06-08",
    category: "ai-practice",
    tags: ["ai-development", "claude-code", "web-development"],
    author: "Ape",
    lang: "en",
  },
  {
    slug: "how-i-use-ai-for-daily-work",
    title: "How I Use AI for My Daily Work as an IT Professional",
    description:
      "A real-world look at how AI tools have changed my workflow — what works, what doesn't, and what I actually use every day.",
    date: "2026-06-07",
    category: "ai-practice",
    tags: ["ai-tools", "productivity", "real-experience"],
    author: "Ape",
    lang: "en",
  },
];

// Translations for cross-listing: slug → localized override
export const TRANSLATIONS: Record<string, { title: string; description: string; lang: "zh" | "en" }> = {
  "big-must-fall": {
    title: "Big Must Fall",
    description:
      "Dinosaurs went extinct, cockroaches survived. In the AI era, bigness is a liability.",
    lang: "en",
  },
  "building-an-mcp-server": {
    title: "我建了一个 MCP 服务器：从协议到发布",
    description:
      "MCP 是 2026 年增长最快的 AI 开发技能。从协议到发布，拆解架构设计、技术决策和踩坑记录。",
    lang: "zh",
  },
  "what-is-claude-code-skill": {
    title: "Claude Code Skill：从第一性原理拆解",
    description:
      "Claude Code Skill 不是插件，是一段在运行时注入的 Prompt 片段。五层架构拆解它为什么能工作。",
    lang: "zh",
  },
  "how-i-built-a-website-with-ai": {
    title: "知行合一",
    description:
      "用 AI 从零搭了一个网站。关于编程语言、判断、品味，和王阳明。",
    lang: "zh",
  },
};

// Get posts for a page, optionally including translations for cross-listing
export function getPosts(displayLang: "en" | "zh", includeTranslations = false): BlogPostMeta[] {
  const posts = ALL_POSTS.filter((p) => (p.lang || "en") === displayLang);
  if (!includeTranslations) return posts;

  // Add translated versions of posts from the other language
  const otherLang = displayLang === "zh" ? "en" : "zh";
  const otherPosts = ALL_POSTS.filter((p) => (p.lang || "en") === otherLang);
  const translated = otherPosts
    .filter((p) => TRANSLATIONS[p.slug] && TRANSLATIONS[p.slug].lang === displayLang)
    .map((p) => {
      const t = TRANSLATIONS[p.slug];
      // en→zh: link to zh version (exists at /zh/blog/). zh→en: keep zh lang (no en version exists).
      const useZhLink = displayLang === "zh";
      return { ...p, title: t.title, description: t.description, lang: useZhLink ? "zh" : p.lang };
    });
  return [...posts, ...translated];
}
