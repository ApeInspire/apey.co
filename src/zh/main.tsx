import { createRoot } from "react-dom/client";
import { Layout } from "../shared/Layout";
import { BlogList } from "../blog/BlogList";
import { initAnalytics } from "../shared/analytics";
import "../styles/global.css";
import type { BlogPostMeta } from "../blog/blogConfig";

initAnalytics();

const posts: BlogPostMeta[] = [
  {
    slug: "what-is-claude-code-skill",
    title: "Claude Code Skill：从第一性原理拆解",
    description:
      "Claude Code Skill 不是插件，是一段在运行时注入的 Prompt 片段。五层架构拆解它为什么能工作。",
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

createRoot(document.getElementById("root")!).render(
  <Layout lang="zh">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-xl font-bold mb-6">见解</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);
