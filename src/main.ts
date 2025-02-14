import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";

if ("serviceWorker" in navigator) {
  addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
  });
}

createApp(App).mount("#app");
