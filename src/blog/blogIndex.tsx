import { createRoot } from "react-dom/client";
import { BlogLayout } from "./BlogLayout";
import { BlogList } from "./BlogList";
import { getLangFromPath } from "../i18n";
import { initAnalytics } from "../shared/analytics";
import type { BlogPostMeta } from "./blogConfig";
import "../styles/global.css";

initAnalytics();

const lang = getLangFromPath(window.location.pathname);

const enPosts: BlogPostMeta[] = [
  {
    slug: "big-must-fall",
    title: "Big Must Fall",
    description:
      "Dinosaurs went extinct, cockroaches survived. In the AI era, bigness is not an advantage — it's the problem. Why companies that guard against AI will die.",
    date: "2026-06-13",
    category: "industry",
    tags: ["AI", "enterprise", "industry-change", "dinosaur-theory"],
    author: "Ape",
    lang: "zh",
  },
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
      "Claude Code Skill is not a plug-in. It is a prompt fragment loaded at runtime. The five-layer architecture that makes it work.",
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

const zhPosts: BlogPostMeta[] = [
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
  {
    slug: "building-an-mcp-server",
    title: "我建了一个 MCP 服务器：从协议到发布",
    description:
      "MCP 是 2026 年增长最快的 AI 开发技能。从协议到发布，拆解架构设计、技术决策和踩坑记录。",
    date: "2026-06-10",
    category: "ai-practice",
    tags: ["mcp", "claude-code", "ai-development", "typescript", "open-source"],
    author: "Ape",
    lang: "zh",
  },
  {
    slug: "what-is-claude-code-skill",
    title: "Claude Code Skill：从第一性原理拆解",
    description:
      "Claude Code Skill 不是插件，是一段在运行时注入的 Prompt 片段。五层架构拆解。",
    date: "2026-06-09",
    category: "ai-practice",
    tags: ["claude-code", "skill", "ai-architecture", "prompt-engineering"],
    author: "Ape",
    lang: "zh",
  },
  {
    slug: "how-i-built-a-website-with-ai",
    title: "知行合一",
    description:
      "用 AI 从零搭了一个网站。关于编程语言、判断、品味，和王阳明。",
    date: "2026-06-08",
    category: "ai-practice",
    tags: ["ai-development", "claude-code", "web-development"],
    author: "Ape",
    lang: "zh",
  },
];

const posts = lang === "zh" ? zhPosts : enPosts;
const title = lang === "zh" ? "博客" : "Blog";

createRoot(document.getElementById("root")!).render(
  <BlogLayout lang={lang}>
    <h1 className="text-xl font-bold mb-6">{title}</h1>
    <BlogList posts={posts} />
  </BlogLayout>
);
