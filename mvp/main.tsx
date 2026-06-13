import { createRoot } from "react-dom/client";
import { Layout } from "../src/shared/Layout";
import { MVPS } from "../src/mvp/mvpConfig";
import { getLangFromPath } from "../src/i18n";
import { initAnalytics } from "../src/shared/analytics";
import "../src/styles/global.css";

initAnalytics();

const lang = getLangFromPath(window.location.pathname);
const isZh = lang === "zh";

const T = {
  heading: isZh ? "MVP" : "MVP",
  subtitle: isZh ? "小实验，快速验证。每个 MVP 回答一个问题。" : "Small experiments shipped fast. Each MVP answers one question.",
  empty: isZh ? "还没有东西。" : "Nothing here yet.",
  status: {
    live: isZh ? "已上线" : "Live",
    building: isZh ? "开发中" : "Building",
    idea: isZh ? "想法" : "Idea",
    archived: isZh ? "已归档" : "Archived",
  } as Record<string, string>,
};

const STATUS_CLS: Record<string, string> = {
  live: "bg-green-100 text-green-800",
  building: "bg-yellow-100 text-yellow-800",
  idea: "bg-gray-100 text-gray-600",
  archived: "bg-gray-100 text-gray-400",
};

function MvpIndex() {
  return (
    <Layout lang={lang}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl font-bold mb-2">{T.heading}</h1>
        <p className="text-sm text-text-secondary mb-8">{T.subtitle}</p>

        {MVPS.length === 0 ? (
          <p className="text-sm text-text-secondary">{T.empty}</p>
        ) : (
          <div className="space-y-4">
            {MVPS.map((item) => {
              const label = T.status[item.status] || item.status;
              const cls = STATUS_CLS[item.status] || STATUS_CLS.idea;
              return (
                <a
                  key={item.slug}
                  href={isZh ? `/zh/mvp/${item.slug}/` : `/mvp/${item.slug}/`}
                  className="block p-4 border border-border rounded-lg hover:border-text-secondary transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="font-semibold text-text">{item.title}</h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cls}`}>
                      {label}
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
