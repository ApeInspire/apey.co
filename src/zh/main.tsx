import { createRoot } from "react-dom/client";
import { Layout } from "../shared/Layout";
import { BlogList } from "../blog/BlogList";
import { initAnalytics } from "../shared/analytics";
import "../styles/global.css";
import type { BlogPostMeta } from "../blog/blogConfig";

initAnalytics();

const posts: BlogPostMeta[] = [
  {
    slug: "how-i-built-a-website-with-ai",
    title: "我跟 AI 对话建了一个网站",
    description:
      "一个 20 年 IT 老兵通过对话建了整个网站，3 小时，¥5.85。",
    date: "2026-06-07",
    category: "ai-practice",
    tags: ["ai-development", "claude-code", "web-development"],
    author: "Ape",
    lang: "zh",
  },
];

createRoot(document.getElementById("root")!).render(
  <Layout lang="zh">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <BlogList posts={posts} />
    </div>
  </Layout>
);
