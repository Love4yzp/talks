<script setup>
import logoSeeed from '../public/logo-seeed.svg'
</script>

<template>
  <div class="slidev-layout intro h-full">
    <div v-if="$slidev.themeConfigs.seeedLogo===true">
      <img :src="logoSeeed" alt="Seeed Logo" class="absolute w-32 top-12 left-12 dark:hidden" />
    </div>
    <slot />
  </div>
</template>
