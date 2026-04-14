<script setup>
import { computed } from 'vue'

const props = defineProps({
  milestones: {
    type: Number,
    default: 4,
  },
})

const points = computed(() => {
  if (props.milestones <= 1) return [0]
  return Array.from({ length: props.milestones }, (_, index) => {
    const ratio = index / (props.milestones - 1)
    return Math.round(ratio * 1000)
  })
})
</script>

<template>
  <svg class="timeline-spine" viewBox="0 0 24 1000" preserveAspectRatio="none" aria-hidden="true">
    <path class="timeline-spine-line" d="M12 12V988" pathLength="100" />
    <circle
      v-for="point in points"
      :key="point"
      class="timeline-spine-node"
      cx="12"
      :cy="12 + point * 0.976"
      r="3.1"
    />
  </svg>
</template>

<style scoped lang="scss">
.timeline-spine {
  position: absolute;
  left: 172px;
  top: 0;
  width: 24px;
  height: 100%;
  pointer-events: none;
}

.timeline-spine-line {
  fill: none;
  stroke: color-mix(in srgb, var(--svg-stroke) 72%, transparent);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: calc(100 - (var(--entrance-progress, 0) * 100));
  transition: stroke-dashoffset 0.2s linear;
}

.timeline-spine-node {
  fill: var(--svg-node);
  opacity: calc(0.15 + (var(--entrance-progress, 0) * 0.7));
  transition: opacity 0.35s ease;
}

@media (max-width: 768px) {
  .timeline-spine {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .timeline-spine-line {
    stroke-dashoffset: 0;
    transition: none;
  }

  .timeline-spine-node {
    opacity: 0.75;
  }
}
</style>
