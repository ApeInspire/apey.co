import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), mdx()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        zh: resolve(__dirname, "zh/index.html"),
        "blog/index": resolve(__dirname, "blog-index.html"),
        "zh/blog/index": resolve(__dirname, "zh/blog/index.html"),
        "blog/how-i-use-ai-for-daily-work": resolve(
          __dirname,
          "blog/how-i-use-ai-for-daily-work/index.html"
        ),
        "blog/how-i-built-a-website-with-ai": resolve(
          __dirname,
          "blog/how-i-built-a-website-with-ai/index.html"
        ),
        "zh/blog/how-i-built-a-website-with-ai": resolve(
          __dirname,
          "zh/blog/how-i-built-a-website-with-ai/index.html"
        ),
        "zh/blog/what-is-claude-code-skill": resolve(
          __dirname,
          "zh/blog/what-is-claude-code-skill/index.html"
        ),
        mvp: resolve(__dirname, "mvp/index.html"),
        "zh/mvp": resolve(__dirname, "zh/mvp/index.html"),
        skills: resolve(__dirname, "skills/index.html"),
        "skills/publish-article": resolve(
          __dirname,
          "skills/publish-article/index.html"
        ),
        "blog/what-is-claude-code-skill": resolve(
          __dirname,
          "blog/what-is-claude-code-skill/index.html"
        ),
        "zh/skills": resolve(__dirname, "zh/skills/index.html"),
        "zh/skills/publish-article": resolve(
          __dirname,
          "zh/skills/publish-article/index.html"
        ),
        "blog/building-an-mcp-server": resolve(
          __dirname,
          "blog/building-an-mcp-server/index.html"
        ),
        "zh/blog/building-an-mcp-server": resolve(
          __dirname,
          "zh/blog/building-an-mcp-server/index.html"
        ),
        "blog/big-must-fall": resolve(
          __dirname,
          "blog/big-must-fall/index.html"
        ),
        "zh/blog/big-must-fall": resolve(
          __dirname,
          "zh/blog/big-must-fall/index.html"
        ),
        "mvp/first-product": resolve(
          __dirname,
          "mvp/first-product/index.html"
        ),
        "mvp/prompt-optimizer": resolve(
          __dirname,
          "mvp/prompt-optimizer/index.html"
        ),
        "zh/mvp/prompt-optimizer": resolve(
          __dirname,
          "zh/mvp/prompt-optimizer/index.html"
        ),
      },
    },
  },
});
