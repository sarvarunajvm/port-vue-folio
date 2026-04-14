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
    <span class="icon-link-glyph">
      <slot />
    </span>
    <span v-if="$slots.text" class="icon-link-text"><slot name="text" /></span>
    <svg class="icon-link-trace" viewBox="0 0 34 10" aria-hidden="true">
      <path class="icon-link-trace-path" d="M1 8H13L19 3H33" />
      <circle class="icon-link-trace-node" cx="33" cy="3" r="1.3" />
    </svg>
  </a>
</template>

<style lang="scss" scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-secondary);
  transition: color var(--transition-fast), transform var(--transition-fast);
  position: relative;

  &:hover {
    color: var(--accent);
    opacity: 1;
    transform: translateY(-1px);
  }
}

.icon-link-text {
  font-size: 14px;
  font-weight: 500;
}

.icon-link-glyph {
  display: inline-flex;
  align-items: center;
}

.icon-link-trace {
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 34px;
  height: 10px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-3px);
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.icon-link-trace-path {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
}

.icon-link-trace-node {
  fill: var(--svg-node);
}

.icon-link:hover .icon-link-trace {
  opacity: 1;
  transform: translateY(0);
}

.icon-link:hover .icon-link-trace-path {
  animation: trace-draw 0.35s var(--mc-ease) forwards;
}

.icon-link:hover .icon-link-trace-node {
  animation: trace-pulse 0.7s ease-in-out infinite;
}

@keyframes trace-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes trace-pulse {
  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .icon-link-trace,
  .icon-link:hover .icon-link-trace {
    opacity: 0;
    animation: none;
  }
}
</style>
