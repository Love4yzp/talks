<script setup>
import logoSeeed from '../public/logo-seeed.svg'
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-end-layout">
    <main class="mcv-end-copy">
      <slot />
    </main>
    <div class="mcv-end-brand">
      <img :src="logoSeeed" alt="Seeed Studio">
      <span>The AI Hardware Partner</span>
    </div>
  </div>
</template>
