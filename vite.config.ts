// import million from "million/compiler";
import million from "../million/packages/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [million.vite(), react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
