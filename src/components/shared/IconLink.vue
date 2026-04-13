<script setup>
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="icon-link"
    :aria-label="label"
  >
    <slot />
    <span v-if="$slots.text" class="icon-link-text"><slot name="text" /></span>
  </a>
</template>

<style lang="scss" scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
    opacity: 1;
  }
}

.icon-link-text {
  font-size: 14px;
  font-weight: 500;
}
</style>
