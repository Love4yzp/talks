<script setup lang="ts">
import logoSeeed from '../public/logo-seeed.svg'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-video-layout">
    <img class="mcv-layout-logo" :src="logoSeeed" alt="Seeed Studio">
    <main class="mcv-video-content">
      <slot />
    </main>
  </div>
</template>
