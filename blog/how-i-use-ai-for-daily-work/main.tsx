import { createRoot } from "react-dom/client";
import { BlogLayout } from "../../src/blog/BlogLayout";

import { initAnalytics } from "../../src/shared/analytics";
import "../../src/styles/global.css";

initAnalytics();

function BlogPost() {
  return (
    <BlogLayout>
      <article>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-text-secondary mb-2">
            <span className="px-2 py-0.5 bg-bg-secondary rounded">AI Work Practice</span>
            <span>2026-06-07</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">
            How I Use AI for My Daily Work as an IT Professional
          </h1>
          <p className="text-text-secondary">
            A real-world look at how AI tools have changed my workflow — what works, what doesn't, and what I actually use every day.
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p>
            I've been working in IT for over 20 years. When AI tools started appearing, I was skeptical.
            But after using them daily for the past year, I can say this: AI hasn't replaced my work —
            it's changed how I do it.
          </p>

          <h2>What I Actually Use AI For</h2>

          <p>
            Every morning, I spend about 30 minutes with AI tools. Here's what that looks like:
          </p>

          <ul>
            <li><strong>Text processing:</strong> Cleaning up documents, formatting text, converting between formats.
            Things that used to take 10 minutes now take 10 seconds.</li>
            <li><strong>Code assistance:</strong> Writing boilerplate, debugging, explaining unfamiliar code.
            Not replacing my thinking, but accelerating it.</li>
            <li><strong>Research:</strong> Summarizing long documents, comparing options, finding patterns.
            AI is great at "read this 50-page report and tell me what matters."</li>
          </ul>

          <h2>What Doesn't Work</h2>

          <p>
            AI is not good at everything. Here's what I've learned to avoid:
          </p>

          <ul>
            <li><strong>Complex reasoning:</strong> For decisions that require deep domain knowledge,
            AI gives you options but can't make the call.</li>
            <li><strong>Creative work:</strong> AI can draft, but the final product needs a human touch.</li>
            <li><strong>Anything requiring current information:</strong> AI knowledge has a cutoff date.
            For real-time data, you still need traditional tools.</li>
          </ul>

          <h2>The Real Value: Efficiency</h2>

          <p>
            The biggest change isn't what I do — it's how fast I do it. Tasks that used to eat up
            my afternoon are now done before lunch. That extra time? I spend it on thinking,
            planning, and building things that matter.
          </p>

          <p>
            That's actually why I built apey.co. I was using AI to process text every day,
            and I realized: if I need this, other people do too. So I made simple online tools
            that anyone can use — no installation, no learning curve.
          </p>

          <h2>My Advice</h2>

          <p>
            If you're not using AI tools yet, start small. Pick one task you do repeatedly —
            formatting text, writing emails, organizing data — and find an AI tool that handles it.
            You'll save 10 minutes a day. That's 50 hours a year.
          </p>

          <p>
            The tools are just tools. The real advantage is knowing when and how to use them.
          </p>
        </div>

      </article>
    </BlogLayout>
  );
}

createRoot(document.getElementById("root")!).render(<BlogPost />);
