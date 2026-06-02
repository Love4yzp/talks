<script setup lang="ts">
import logoSeeed from '../public/logo-seeed.svg'

defineProps<{
  bleed?: boolean
}>()
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-media-layout" :class="{ 'is-bleed': bleed }">
    <img class="mcv-layout-logo" :src="logoSeeed" alt="Seeed Studio">
    <main class="mcv-media-content">
      <slot />
    </main>
  </div>
</template>
