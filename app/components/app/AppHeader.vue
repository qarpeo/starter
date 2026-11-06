<script setup lang="ts">
// App Header for Qarpeo Starter
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <UColorModeImage
          light="/logo-light.svg"
          dark="/logo.svg"
          alt="Qarpeo"
          class="h-7 w-7 transition-transform hover:scale-105"
        />
        <span class="text-base font-extrabold tracking-tight">Qarpeo</span>
        <UBadge color="primary" variant="subtle" size="xs">Starter</UBadge>
      </NuxtLink>
    </template>

    <template #right>
      <UButton
        label="Documentation"
        to="https://qarpeo.com/docs"
        target="_blank"
        variant="ghost"
        color="neutral"
        size="sm"
        icon="i-lucide-book-open"
      />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
