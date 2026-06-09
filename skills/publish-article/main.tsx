import { createRoot } from "react-dom/client";
import { SkillsLayout } from "../../src/skills/SkillsLayout";
import { initAnalytics } from "../../src/shared/analytics";
import "../../src/styles/global.css";

initAnalytics();

function SkillPage() {
  return (
    <SkillsLayout>
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span className="px-2 py-0.5 bg-bg-secondary rounded">Writing</span>
          <time>2026-06-09</time>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold leading-tight">/publish-article</h1>
        <p className="text-sm text-text-secondary mt-2">
          Transform an AI conversation into a structured article ready for apey.co publication.
        </p>
      </header>

      <div className="prose prose-sm max-w-none space-y-6">
        <section>
          <h2>When to Use</h2>
          <p>User says things like:</p>
          <ul>
            <li>"publish this conversation"</li>
            <li>"write an article about this"</li>
            <li>"整理成文章"</li>
            <li>"turn this into a blog post"</li>
            <li>"可以把这段对话整理成文章吗"</li>
          </ul>
        </section>

        <section>
          <h2>Workflow</h2>

          <h3>Step 1: Gather</h3>
          <p>Read the capture file (if it exists), the conversation context, and the blog config. Identify the central thesis, evidence, narrative arc, and dead ends to discard.</p>

          <h3>Step 2: Outline — Pick a Template</h3>
          <p>Present the user with one recommended template and the outline. Three templates are available:</p>
          <ul>
            <li><strong>Template A — Insight/Discovery:</strong> When the conversation led to a new realization. Structure: conclusion → evidence → implications → caveat → takeaway.</li>
            <li><strong>Template B — Process/Learning:</strong> When building, learning, or doing something hands-on. Structure: what + why → steps + lessons → surprises → data → key takeaway.</li>
            <li><strong>Template C — Analysis/Decision:</strong> When comparing tools, approaches, or making a choice. Structure: question → criteria → options → verdict → reflection.</li>
          </ul>

          <h3>Step 3: Write</h3>
          <p>Generate the article as a <code>content.ts</code> file — a TypeScript file exporting <code>meta</code> and <code>sections</code>. Writing style enforced:</p>
          <ul>
            <li>First person: "I" not "the author"</li>
            <li>Direct voice: state the conclusion, don't build up to it</li>
            <li>Short paragraphs. One idea per paragraph.</li>
            <li>1000-2000 words. Target ~15 sections.</li>
            <li>Data over adjectives: "3 hours, ¥5.85" not "incredibly fast and cheap"</li>
            <li>Kevin Kelly tone: observant, specific, slightly wonderous, never preachy</li>
          </ul>

          <h3>Step 4: Polish</h3>
          <p>Display the complete article. Ask the user about structure, flow, missing angles, and tone. Iterate based on feedback.</p>

          <h3>Step 5: Publish</h3>
          <p>Write files to apey.co.</p>
          <p><strong>New files:</strong></p>
          <ol>
            <li><code>blog/{'{slug}'}/index.html</code> — SEO meta</li>
            <li><code>blog/{'{slug}'}/main.tsx</code> — renders BlogLayout + sections</li>
            <li><code>blog/{'{slug}'}/content.ts</code> — the generated article</li>
          </ol>
          <p><strong>Modified files:</strong></p>
          <ol>
            <li><code>vite.config.ts</code> — add to rollupOptions.input</li>
            <li><code>src/blog/main.tsx</code> — add to posts array</li>
            <li><code>public/sitemap.xml</code> — add URL entry</li>
          </ol>
        </section>

        <section>
          <h2>Capture Mechanism</h2>
          <p>Optional mid-conversation capture. If the user says "remember this point", "save for article", or "mark this", the AI appends to <code>Scout/.claude/article-capture/{'{topic}'}.md</code>. Each entry is one line with a timestamp and summary.</p>
          <p>If no capture file exists, the AI works from the full conversation context directly.</p>
        </section>

        <section className="mt-8 p-4 bg-bg-secondary rounded-lg border border-border">
          <h3 className="text-sm font-semibold mb-2">Install</h3>
          <p className="text-xs text-text-secondary mb-2">
            Copy the skill file to your Claude Code skills directory:
          </p>
          <pre className="text-xs bg-bg p-3 rounded overflow-x-auto"><code>mkdir -p .claude/skills/publish-article/templates
curl -o .claude/skills/publish-article/SKILL.md https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/SKILL.md
curl -o .claude/skills/publish-article/templates/insight.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/insight.ts
curl -o .claude/skills/publish-article/templates/process.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/process.ts
curl -o .claude/skills/publish-article/templates/analysis.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/analysis.ts</code></pre>
          <p className="text-xs text-text-secondary mt-2">
            Then use it in any Claude Code session: <code className="text-text">/publish-article</code>
          </p>
        </section>

        <section className="mt-4 text-xs text-text-secondary">
          <p>
            Source:{" "}
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
