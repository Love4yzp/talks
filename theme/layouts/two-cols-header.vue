<script setup>
// two-cols-header.vue — Two column layout with header
// Usage in markdown:
//   ---
//   layout: two-cols-header
//   leftWidth: 45
//   ---
//   ::header::
//   # Page Title          ← appears as header spanning both columns
//
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
  <div class="slidev-layout two-cols-header">
    <!-- Seeed logo — top-right -->
    <img
      :src="logoSeeed"
      alt="Seeed Studio"
      style="position: absolute; top: 1.75rem; right: 2rem; height: 1.5rem; z-index: 5;"
    />

    <!-- Header slot — spans full width -->
    <div class="header-container" style="width: 100%; margin-bottom: 1.5rem;">
      <slot name="header" />
    </div>

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
