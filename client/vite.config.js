import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // where our Express backend is running
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
