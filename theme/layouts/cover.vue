<script setup lang="ts">
defineProps<{
  image?: string
  align?: 'left' | 'right'
}>()
</script>

<template>
  <div class="slidev-layout mcv-shell mcv-cover-layout" :class="align === 'right' ? 'is-right' : 'is-left'">
    <img v-if="image" class="mcv-cover-photo" :src="image" alt="" aria-hidden="true">
    <div class="mcv-cover-scrim" />
    <main class="mcv-cover-copy">
      <slot />
    </main>
  </div>
</template>
