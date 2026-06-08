import { createRoot } from "react-dom/client";
import { Layout } from "../src/shared/Layout";
import { initAnalytics } from "../src/shared/analytics";
import "../src/styles/global.css";

initAnalytics();

function MvpIndex() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl font-bold mb-4">MVP</h1>
        <p className="text-sm text-text-secondary">Coming Soon</p>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(<MvpIndex />);
