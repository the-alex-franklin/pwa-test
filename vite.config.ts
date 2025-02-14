import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "npm:vite-plugin-pwa@latest";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    vue(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update the service worker
      manifest: {
        name: "My Deno/Vite/Vue App",
        short_name: "DenoVue",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#42b983",
        icons: [
          {
            src: "/icons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
