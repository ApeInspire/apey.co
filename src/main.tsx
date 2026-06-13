import { createRoot } from "react-dom/client";
import { Layout } from "./shared/Layout";
import { BlogList } from "./blog/BlogList";
import { getLangFromPath } from "./i18n";
import { getPosts } from "./blog/blogConfig";
import { initAnalytics } from "./shared/analytics";
import "./styles/global.css";

initAnalytics();

const lang = getLangFromPath(window.location.pathname);
const isZh = lang === "zh";
const posts = getPosts(lang, true);

createRoot(document.getElementById("root")!).render(
  <Layout lang={lang}>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-xl font-bold mb-6">{isZh ? "见解" : "Insights"}</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);
