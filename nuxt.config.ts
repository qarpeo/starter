import pkg from "./package.json" with { type: "json" }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-10",
  css: ["~/assets/css/main.css"],

  devtools: { enabled: true, timeline: { enabled: true } },

  modules: ["@nuxt/ui", "qarpeo"],

  // Enable Cloudflare edge primitives as you need them:
  qarpeo: {
    workerName: "starter", // 👈 Worker name defined here
    // db: true, // Cloudflare D1 + Bundled Drizzle ORM
    // auth: true, // Passkeys, OAuth, KV Sessions (No Clerk/Auth0)
    // kv: true, // Cloudflare KV distributed cache
    // blob: true, // Cloudflare R2 object storage ($0 egress)
    // realtime: true, // WebSockets with DO hibernation
    // cms: true, // Hybrid Edge CMS (Git markdown + D1)
    // agents: true, // Workers AI + Stateful Agents
  },

  runtimeConfig: { public: { version: pkg.version } },
  vue: { vapor: true },
})
