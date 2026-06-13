import { createRoot } from "react-dom/client";
import { Layout } from "../../src/shared/Layout";
import { PromptOptimizer } from "../../src/tools/prompt-optimizer/PromptOptimizer";
import { initAnalytics } from "../../src/shared/analytics";
import "../../src/styles/global.css";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <Layout>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <PromptOptimizer />
    </div>
  </Layout>
);
