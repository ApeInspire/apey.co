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
        blog: resolve(__dirname, "blog-index.html"),
        "blog/how-i-use-ai-for-daily-work": resolve(
          __dirname,
          "blog/how-i-use-ai-for-daily-work/index.html"
        ),
        "tools/paragraph-formatter": resolve(
          __dirname,
          "tools/paragraph-formatter/index.html"
        ),
      },
    },
  },
});
