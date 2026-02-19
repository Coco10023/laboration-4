import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/pages/index.html"),
        animering: resolve(__dirname, "src/pages/animering.html"),
        base: "/laboration-4/"
      },
    },
  },
});
