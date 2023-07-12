import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vite } from "million/compiler";
// import { vite } from "../million/dist/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vite(), react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
});
