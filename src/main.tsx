import { createRoot } from "react-dom/client";
import { Layout } from "./shared/Layout";
import { BlogList } from "./blog/BlogList";
import { getLangFromPath } from "./i18n";
import { initAnalytics } from "./shared/analytics";
import "./styles/global.css";
import type { BlogPostMeta } from "./blog/blogConfig";

initAnalytics();

const lang = getLangFromPath(window.location.pathname);
const isZh = lang === "zh";

const posts: BlogPostMeta[] = [
  {
    slug: "big-must-fall",
    title: "Big Must Fall",
    description:
      "Dinosaurs went extinct, cockroaches survived. In the AI era, bigness is a liability.",
    date: "2026-06-13",
    category: "industry",
    tags: ["AI", "enterprise", "industry-change"],
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
];

createRoot(document.getElementById("root")!).render(
  <Layout lang={lang}>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-xl font-bold mb-6">{isZh ? "见解" : "Insights"}</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);
