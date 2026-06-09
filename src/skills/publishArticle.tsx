import { createRoot } from "react-dom/client";
import { SkillsLayout } from "./SkillsLayout";
import { initAnalytics } from "../shared/analytics";
import { getPublishArticleContent } from "./publishArticleContent";
import type { Lang } from "../i18n";
import type { StepContent } from "./publishArticleContent";
import "../styles/global.css";

initAnalytics();

function detectLang(): Lang {
  return window.location.pathname.startsWith("/zh/") ? "zh" : "en";
}

function StepBody({ content }: { content: StepContent[] }) {
  return (
    <>
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <p key={i}>{block.text}</p>;
          case "subheading":
            return <p key={i}><strong>{block.text}</strong></p>;
          case "list":
            return (
              <ul key={i}>
                {block.items!.map((item, j) => (
                  <li key={j}>{item.startsWith("模板") || item.startsWith("Template")
                    ? <strong>{item.split(" — ")[0]}</strong>
                    : null}{item.startsWith("模板") || item.startsWith("Template")
                    ? ` — ${item.split(" — ").slice(1).join(" — ")}`
                    : item}</li>
                ))}
              </ul>
            );
          case "ordered-list":
            return (
              <ol key={i}>
                {block.items!.map((item, j) => (
                  <li key={j}><code>{item.split(" — ")[0]}</code>{item.includes(" — ") ? ` — ${item.split(" — ").slice(1).join(" — ")}` : ""}</li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

function SkillPage() {
  const lang = detectLang();
  const c = getPublishArticleContent(lang);

  return (
    <SkillsLayout lang={lang}>
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span className="px-2 py-0.5 bg-bg-secondary rounded">{c.categoryLabel}</span>
          <time>2026-06-09</time>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold leading-tight">{c.title}</h1>
        <p className="text-sm text-text-secondary mt-2">{c.description}</p>
      </header>

      <div className="prose prose-sm max-w-none space-y-6">
        <section>
          <h2>{c.whenToUseHeading}</h2>
          <p>{lang === "zh" ? "当用户说以下内容时触发：" : "User says things like:"}</p>
          <ul>
            {c.whenToUseTriggers.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </section>

        <section>
          <h2>{c.workflowHeading}</h2>
          {c.steps.map((step, i) => (
            <div key={i}>
              <h3>{step.heading}</h3>
              <StepBody content={step.content} />
            </div>
          ))}
        </section>

        <section>
          <h2>{c.captureHeading}</h2>
          {c.captureLines.map((line, i) => <p key={i}>{line}</p>)}
        </section>

        <section className="mt-8 p-4 bg-bg-secondary rounded-lg border border-border">
          <h3 className="text-sm font-semibold mb-2">{c.installHeading}</h3>
          <p className="text-xs text-text-secondary mb-2">{c.installDescription}</p>
          <pre className="text-xs bg-bg p-3 rounded overflow-x-auto"><code>{c.installCommands}</code></pre>
          <p className="text-xs text-text-secondary mt-2">
            {c.installUsageNote}
          </p>
        </section>

        <section className="mt-4 text-xs text-text-secondary">
          <p>
            {c.sourceLabel}{" "}
            <a href="https://github.com/ApeInspire/Scout/tree/master/.claude/skills/publish-article" className="text-primary hover:underline">
              Scout/.claude/skills/publish-article
            </a>
          </p>
        </section>
      </div>
    </SkillsLayout>
  );
}

createRoot(document.getElementById("root")!).render(<SkillPage />);
