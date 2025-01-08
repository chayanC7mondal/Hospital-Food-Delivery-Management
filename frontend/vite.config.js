import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disables the error overlay for HMR
    },
    port: 3000, // Customize the development server port if needed
  },
});
