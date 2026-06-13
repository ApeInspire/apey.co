import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { resolve } from "path";
import { readdirSync, existsSync } from "fs";

function scanEntries(root: string): Record<string, string> {
  const entries: Record<string, string> = {};
  const dirs = ["", "zh/", "blog/", "zh/blog/", "mvp/", "zh/mvp/", "skills/", "zh/skills/"];

  for (const dir of dirs) {
    const base = resolve(root, dir);
    if (!existsSync(base)) continue;

    // Direct index.html
    const indexPath = resolve(base, "index.html");
    if (existsSync(indexPath)) {
      const name = dir ? dir.replace(/\/$/, "").replace(/\//g, "/") : "main";
      entries[name] = indexPath;
    }

    // Subdirectory pages (blog/{slug}/, mvp/{slug}/, skills/{slug}/)
    try {
      for (const entry of readdirSync(base, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const htmlPath = resolve(base, entry.name, "index.html");
        if (existsSync(htmlPath)) {
          const key = dir ? `${dir}${entry.name}`.replace(/\/$/, "") : entry.name;
          entries[key] = htmlPath;
        }
      }
    } catch {
      // Directory may not exist or be empty
    }
  }

  return entries;
}

export default defineConfig({
  plugins: [react(), mdx()],
  build: {
    rollupOptions: {
      input: {
        ...scanEntries(__dirname),
        // Special entries not following the standard pattern
        "blog/index": resolve(__dirname, "blog-index.html"),
        "zh/blog/index": resolve(__dirname, "zh/blog/index.html"),
      },
    },
  },
});
