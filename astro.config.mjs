import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lbyache.github.io",
  base: "/portfolio",
  output: "static",
  compressHTML: true,
  server: {
    host: "127.0.0.1"
  },
  preview: {
    host: "127.0.0.1"
  },
  build: {
    format: "directory"
  }
});
