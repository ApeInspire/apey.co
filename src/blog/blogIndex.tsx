import { createRoot } from "react-dom/client";
import { BlogLayout } from "./BlogLayout";
import { BlogList } from "./BlogList";
import { getLangFromPath } from "../i18n";
import { getPosts } from "./blogConfig";
import { initAnalytics } from "../shared/analytics";
import "../styles/global.css";

initAnalytics();

const lang = getLangFromPath(window.location.pathname);
const posts = getPosts(lang, true);
const title = lang === "zh" ? "博客" : "Blog";

createRoot(document.getElementById("root")!).render(
  <BlogLayout lang={lang}>
    <h1 className="text-xl font-bold mb-6">{title}</h1>
    <BlogList posts={posts} />
  </BlogLayout>
);
