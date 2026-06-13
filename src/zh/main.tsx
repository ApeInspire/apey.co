import { createRoot } from "react-dom/client";
import { Layout } from "../shared/Layout";
import { BlogList } from "../blog/BlogList";
import { getPosts } from "../blog/blogConfig";
import { initAnalytics } from "../shared/analytics";
import "../styles/global.css";

initAnalytics();

const posts = getPosts("zh", true);

createRoot(document.getElementById("root")!).render(
  <Layout lang="zh">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-xl font-bold mb-6">见解</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);
