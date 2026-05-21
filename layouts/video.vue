<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-video-layout">
    <img class="mcv-layout-logo" src="/logo-seeed.svg" alt="Seeed Studio">
    <main class="mcv-video-content">
      <slot />
    </main>
  </div>
</template>
