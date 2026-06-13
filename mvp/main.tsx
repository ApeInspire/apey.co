import { createRoot } from "react-dom/client";
import { Layout } from "../src/shared/Layout";
import { MVPS } from "../src/mvp/mvpConfig";
import { initAnalytics } from "../src/shared/analytics";
import "../src/styles/global.css";

initAnalytics();

const STATUS: Record<string, { label: string; cls: string }> = {
  live: { label: "Live", cls: "bg-green-100 text-green-800" },
  building: { label: "Building", cls: "bg-yellow-100 text-yellow-800" },
  idea: { label: "Idea", cls: "bg-gray-100 text-gray-600" },
  archived: { label: "Archived", cls: "bg-gray-100 text-gray-400" },
};

function MvpIndex() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl font-bold mb-2">MVP</h1>
        <p className="text-sm text-text-secondary mb-8">
          Small experiments shipped fast. Each MVP answers one question.
        </p>

        {MVPS.length === 0 ? (
          <p className="text-sm text-text-secondary">Nothing here yet.</p>
        ) : (
          <div className="space-y-4">
            {MVPS.map((item) => {
              const st = STATUS[item.status] || STATUS.idea;
              return (
                <a
                  key={item.slug}
                  href={`/mvp/${item.slug}/`}
                  className="block p-4 border border-border rounded-lg hover:border-text-secondary transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="font-semibold text-text">{item.title}</h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${st.cls}`}>
                      {st.label}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{item.description}</p>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <time>{item.date}</time>
                    <span className="text-border">|</span>
                    <span>{item.tags.join(", ")}</span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(<MvpIndex />);
