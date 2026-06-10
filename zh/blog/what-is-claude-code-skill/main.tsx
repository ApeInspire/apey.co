import { createRoot } from "react-dom/client";
import { BlogLayout } from "../../../src/blog/BlogLayout";

import { meta, sections } from "./content";
import { initAnalytics } from "../../../src/shared/analytics";
import "../../../src/styles/global.css";

initAnalytics();

function BlogPost() {
  return (
    <BlogLayout lang="zh">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span className="px-2 py-0.5 bg-bg-secondary rounded">{meta.category}</span>
          <time>{meta.date}</time>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold leading-tight">{meta.title}</h1>
      </header>

      <div className="prose-blog">
        {sections.map((section, i) => {
          switch (section.type) {
            case "heading":
              return <h2 key={i}>{section.content}</h2>;
            case "paragraph":
              return <p key={i}>{section.content}</p>;
            case "list":
              return (
                <ul key={i}>
                  {section.items.map((item, j) => (
                    <li key={j}>
                      {item.strong && <strong>{item.strong}</strong>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

    </BlogLayout>
  );
}

createRoot(document.getElementById("root")!).render(<BlogPost />);
