import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@designcodeio/threeui/style.css": fileURLToPath(new URL("./src/shaders/threeui.css", import.meta.url)),
      "@designcodeio/threeui": fileURLToPath(new URL("./src/shaders/index.ts", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    entries: ["index.html"],
  },
  server: {
    port: 8000,
    open: false,
  },
});
