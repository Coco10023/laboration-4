import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/laboration-4/", 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        animering: resolve(__dirname, "animering.html"),
      },
    },
  },
});
