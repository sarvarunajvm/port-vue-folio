<script setup>
defineProps({
  title: { type: String, required: true },
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading reveal">
    <span v-if="label" class="section-label text-label">{{ label }}</span>
    <h2 class="section-title text-h1">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.section-heading {
  margin-bottom: var(--space-xl);
}

.section-label {
  display: block;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.section-title {
  color: var(--text-primary);
}
</style>
