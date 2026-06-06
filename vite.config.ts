import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "tools/paragraph-formatter": resolve(
          __dirname,
          "tools/paragraph-formatter/index.html"
        ),
      },
    },
  },
});
