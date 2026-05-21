<script setup lang="ts">
defineProps<{
  bleed?: boolean
}>()
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-media-layout" :class="{ 'is-bleed': bleed }">
    <img class="mcv-layout-logo" src="/logo-seeed.svg" alt="Seeed Studio">
    <main class="mcv-media-content">
      <slot />
    </main>
  </div>
</template>
