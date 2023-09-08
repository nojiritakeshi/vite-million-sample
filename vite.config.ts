// import million from "../million/packages/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import million from "million/compiler";
// import million from "../million/packages/compiler";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
