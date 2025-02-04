// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  // devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.css"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr:false
});
