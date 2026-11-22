import pkg from "./package.json" with { type: "json" }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-11-22",
  css: ["~/assets/css/main.css"],

  devtools: { enabled: true, timeline: { enabled: true } },

  modules: ["@nuxt/ui", "qarpeo"],

  // Enable Cloudflare edge primitives as you need them:
  qarpeo: {
    workerName: "starter", // 👈 Worker name defined here
  },

  runtimeConfig: { public: { version: pkg.version } },
})
