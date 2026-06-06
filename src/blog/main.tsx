import { createRoot } from "react-dom/client";
import { BlogLayout } from "./BlogLayout";
import { BlogList } from "./BlogList";
import { initAnalytics } from "../shared/analytics";
import "../styles/global.css";
import type { BlogPostMeta } from "./blogConfig";

initAnalytics();

const posts: BlogPostMeta[] = [
  {
    slug: "how-i-use-ai-for-daily-work",
    title: "How I Use AI for My Daily Work as an IT Professional",
    description: "A real-world look at how AI tools have changed my workflow — what works, what doesn't, and what I actually use every day.",
    date: "2026-06-07",
    category: "ai-practice",
    tags: ["ai-tools", "productivity", "real-experience"],
    relatedTools: ["paragraph-formatter"],
    author: "Ape",
  },
];

createRoot(document.getElementById("root")!).render(
  <BlogLayout>
    <BlogList posts={posts} />
  </BlogLayout>
);
