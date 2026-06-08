import { createRoot } from "react-dom/client";
import { Layout } from "../../src/shared/Layout";
import { initAnalytics } from "../../src/shared/analytics";
import "../../src/styles/global.css";

initAnalytics();

function ComingSoon() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl font-bold">Coming Soon</h1>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(<ComingSoon />);
