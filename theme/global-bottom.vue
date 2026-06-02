<script setup>
// global-bottom.vue — Seeed footer: logo + page number + green bar
// Hidden on: cover, intro layouts
// Simplified on: end layout (bar only, no logo/page number)
import logoSeeedGray from './public/logo-seeed-gray.svg'
</script>

<template>
  <footer
    class="absolute bottom-0 left-0 right-0"
    style="z-index: 10;"
  >
    <!-- Logo + page number row (hidden on end layout) -->
    <div
      v-if="$nav.currentLayout !== 'end' && $nav.currentLayout !== 'cover' && $nav.currentLayout !== 'intro'"
      class="px-6 flex justify-between items-center"
      style="height: 1.875rem;"
    >
      <img
        :src="logoSeeedGray"
        alt="Seeed Studio"
        style="height: 1rem; opacity: 0.35;"
      />
      <span style="font-size: 0.7rem; opacity: 0.35; color: #003A4A;">
        <SlideCurrentNo /> / <SlidesTotal />
      </span>
    </div>

    <!-- Green accent bar — always visible in footer -->
    <div style="height: 6px; background: #8FC31F; width: 100%;"></div>
  </footer>
</template>
