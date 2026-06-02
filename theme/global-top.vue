<script setup>
// global-top.vue — Seeed logo in top-right corner
// Only shown on: cover and section layouts
// Other layouts render their own logo in the header row
import logoSeeed from './public/logo-seeed.svg'
</script>

<template>
  <div
    v-if="$nav.currentLayout === 'cover' || $nav.currentLayout === 'section'"
    class="absolute"
    style="top: 1.75rem; right: 2rem; z-index: 10;"
    >
    <img
      :src="logoSeeed"
      alt="Seeed Studio"
      style="height: 1.75rem;"
    />
  </div>
</template>
