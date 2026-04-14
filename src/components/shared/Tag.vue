<script setup>
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <span class="tag">{{ text }}</span>
</template>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--accent);
  background: var(--accent-subtle);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}
</style>
