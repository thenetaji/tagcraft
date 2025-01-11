import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {},
  },
  server: {
    port: 5173,
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
