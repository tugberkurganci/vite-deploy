import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://spring-render-ucd3.onrender.com/",

      "/assets": {
        target: "https://spring-render-ucd3.onrender.com/",
        changeOrigin: true,
        rewrite: (path: any) => {
          if (path.includes("checkout")) {
            return path.replace(/^\/checkout/, "");
          }
          if (path.includes("car-detail")) {
            return path.replace(/^\/car-detail/, "");
          }
          return path;
        },
      },
    },
  },
  base:"/vite-deploy/"
  
});
