import { createRoot } from "react-dom/client";
import { BlogLayout } from "../../../src/blog/BlogLayout";
import { Diagram } from "../../../src/blog/Diagram";
import { LogoDiagram } from "../../../blog/how-i-built-a-website-with-ai/diagram";
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
                      <strong>{item.strong}</strong>
                      {item.text}
                    </li>
                  ))}
                </ul>
              );
            case "diagram":
              return (
                <Diagram key={i} caption={section.caption}>
                  <LogoDiagram />
                </Diagram>
              );
            case "image":
              return (
                <figure key={i} className="my-6">
                  <img src={section.src} alt={section.caption || ""} className="w-full max-w-md mx-auto rounded-lg border border-border" />
                  {section.caption && (
                    <figcaption className="text-xs text-text-secondary mt-2 text-center">{section.caption}</figcaption>
                  )}
                </figure>
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
