<script setup lang="ts">
useSeoMeta({
  title: "Qarpeo Starter — Nuxt 5 & Nuxt UI",
  description:
    "Minimal edge starter template for Nuxt 5, Nuxt UI, and Vite+ on Cloudflare Workers.",
})
</script>

<template>
  <UMain>
    <UPageSection
      :ui="{
        title: 'text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-6xl',
        description: 'text-muted mx-auto max-w-2xl text-lg leading-relaxed sm:text-lg',
      }"
    >
      <template #leading>
        <div
          class="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400"
        >
          <span class="flex h-2 w-2 animate-pulse rounded-full bg-orange-500" />
          <span>Nuxt 5 + Nuxt UI + Vite+</span>
        </div>
      </template>
      <template #title>
        Welcome to
        <span
          class="bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Nuxt 5 Starter
        </span>
      </template>
      <template #description>
        A clean, minimal starting point for building full-stack applications with Nuxt 5, Nuxt UI,
        and Vite+, preconfigured for Cloudflare Workers.
      </template>

      <template #links>
        <!-- Action Buttons -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <UButton
            label="Documentation"
            to="https://qarpeo.com/docs"
            target="_blank"
            size="lg"
            color="primary"
            icon="i-lucide-book-open"
          />
          <UButton
            label="GitHub"
            to="https://github.com/qarpeo/starter"
            target="_blank"
            size="lg"
            variant="outline"
            color="neutral"
            icon="i-lucide-github"
          />
        </div>
      </template>

      <template #footer>
        <UCard variant="subtle" class="mx-auto max-w-md overflow-hidden font-mono text-xs">
          <div class="text-muted mb-3 flex items-center justify-between">
            <span class="font-semibold text-orange-400"># Start developing</span>
            <span class="text-muted text-[11px]">terminal</span>
          </div>
          <div class="text-muted space-y-1.5">
            <p><span class="text-orange-400">$</span> vp i</p>
            <p><span class="text-orange-400">$</span> vpr dev</p>
          </div>
          <template #footer>
            <div class="text-muted text-[11px]">
              Edit <code class="text-orange-400">app/pages/index.vue</code> to start building.
            </div>
          </template>
        </UCard>
      </template>
    </UPageSection>
  </UMain>
</template>
