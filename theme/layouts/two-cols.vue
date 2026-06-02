<script setup>
// two-cols.vue — Two column layout
// Usage in markdown:
//   ---
//   layout: two-cols
//   leftWidth: 45
//   ---
//   # Page Title          ← appears in left column, styled as title
//   Left content below
//
//   ::right::
//   Right column content
import logoSeeed from '../public/logo-seeed.svg'

const props = defineProps({
  leftWidth: {
    type: Number,
    default: 50,
  },
})
</script>

<template>
  <div class="slidev-layout two-cols">
    <!-- Seeed logo — top-right -->
    <img
      :src="logoSeeed"
      alt="Seeed Studio"
      style="position: absolute; top: 1.75rem; right: 2rem; height: 1.5rem; z-index: 5;"
    />

    <!-- Two columns: left gets default slot, right gets ::right:: slot -->
    <div class="cols-container" style="flex: 1;">
      <div class="col-left" :style="{ width: `${leftWidth}%`, flexShrink: 0 }">
        <slot />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
