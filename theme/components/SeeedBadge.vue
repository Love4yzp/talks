<script setup>
// SeeedBadge.vue — Pill-shaped tag for dates, labels, status indicators
// CSS: .seeed-badge (in layout.css)
// Usage:
//   <SeeedBadge>2026.03.14 · Shenzhen</SeeedBadge>
//   <SeeedBadge icon="i-carbon:calendar">2026.03.14</SeeedBadge>

const props = defineProps({
  // Optional Iconify icon class (e.g. 'i-carbon:calendar')
  icon: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <span class="seeed-badge">
    <span v-if="icon" :class="icon" style="font-size: 0.875rem;" />
    <slot />
  </span>
</template>
