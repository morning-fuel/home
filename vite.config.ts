import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => ({
  base: "/home/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: "dist/index.html",
          dest: ".", // this copies index.html → dist/404.html
          rename: "404.html",
        },
      ],
      watch: {
        reloadPageOnChange: true, // ✅ fixed typo here
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
