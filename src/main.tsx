import { createRoot } from "react-dom/client";
import { Layout } from "./shared/Layout";
import { ToolCard } from "./shared/ToolCard";
import { TOOLS, SITE_DESCRIPTION } from "./shared/constants";
import { initAnalytics } from "./shared/analytics";
import "./styles/global.css";

initAnalytics();

function HomePage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Free Online Tools</h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            {SITE_DESCRIPTION}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(<HomePage />);
