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
        mvp: resolve(__dirname, "mvp/index.html"),
        "zh/mvp": resolve(__dirname, "zh/mvp/index.html"),
        skills: resolve(__dirname, "skills/index.html"),
        "skills/publish-article": resolve(
          __dirname,
          "skills/publish-article/index.html"
        ),
        "zh/skills": resolve(__dirname, "zh/skills/index.html"),
        "zh/skills/publish-article": resolve(
          __dirname,
          "zh/skills/publish-article/index.html"
        ),
        "mvp/first-product": resolve(
          __dirname,
          "mvp/first-product/index.html"
        ),
      },
    },
  },
});
