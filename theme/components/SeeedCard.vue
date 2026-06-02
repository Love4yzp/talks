<script setup>
// SeeedCard.vue — Brand card with optional icon and title
// CSS: .seeed-card, .seeed-card-icon, .seeed-card-title, .seeed-card-body (in layout.css)
// Usage:
//   <SeeedCard icon="i-carbon:chip" title="硬件支持" color="green">
//     内容描述文字
//   </SeeedCard>

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  // 'green' (default, light green bg) | 'navy' (dark navy bg) | 'white' (white bg)
  color: {
    type: String,
    default: 'green',
  },
})
</script>

<template>
  <div :class="['seeed-card', color === 'navy' ? 'navy' : color === 'white' ? 'white' : '']">
    <!-- Icon (Iconify class, e.g. i-carbon:chip) -->
    <div v-if="icon" :class="['seeed-card-icon', icon]" />

    <!-- Title -->
    <div v-if="title" class="seeed-card-title">{{ title }}</div>

    <!-- Body content (slot) -->
    <div class="seeed-card-body">
      <slot />
    </div>
  </div>
</template>
