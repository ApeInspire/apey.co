import { createRoot } from "react-dom/client";
import { Layout } from "../../shared/Layout";
import { PromptOptimizer } from "./PromptOptimizer";
import { initAnalytics } from "../../shared/analytics";
import "../../styles/global.css";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <Layout>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <PromptOptimizer />
    </div>
  </Layout>
);
