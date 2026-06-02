<script setup>
// default.vue — Standard content slide (most common layout)
// CSS class: .slidev-layout.default (styles in layout.css)
// Shows: content with h1 styled as page title (green border-bottom via CSS)
// Logo top-right is rendered here (not via global-top.vue)
// Footer visible (handled by global-bottom.vue)
import logoSeeed from '../public/logo-seeed.svg'
</script>

<template>
  <div class="slidev-layout default">
    <!-- Seeed logo — top-right, absolute positioned -->
    <img
      :src="logoSeeed"
      alt="Seeed Studio"
      style="position: absolute; top: 1.75rem; right: 2rem; height: 1.5rem; z-index: 5;"
    />

    <!-- All slide content (h1 + body) flows into slide-content div -->
    <!-- CSS targets .slide-content > h1:first-child to style it as page title -->
    <div class="slide-content">
      <slot />
    </div>
  </div>
</template>
