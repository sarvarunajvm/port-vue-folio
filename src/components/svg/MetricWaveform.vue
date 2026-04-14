<script setup>
const props = defineProps({
  variant: {
    type: Number,
    default: 0,
  },
  revealed: {
    type: Boolean,
    default: false,
  },
})

const wavePaths = [
  'M6 46C14 38 24 52 34 42S52 36 62 44S82 52 94 40S112 30 122 40',
  'M6 44C16 48 24 30 34 34S52 50 62 44S82 30 92 34S112 46 122 42',
  'M6 43C18 35 22 56 34 46S52 28 62 34S80 54 92 46S112 32 122 40',
  'M6 44C14 40 26 44 34 40S52 30 62 40S82 56 92 44S112 36 122 38',
]

const selectedPath = wavePaths[Math.abs(props.variant) % wavePaths.length]
</script>

<template>
  <svg class="metric-wave" viewBox="0 0 128 64" aria-hidden="true">
    <rect class="metric-wave-frame" x="1.5" y="1.5" width="125" height="61" rx="10" />
    <path class="metric-wave-grid" d="M8 20H120M8 32H120M8 44H120" />
    <path :class="['metric-wave-path', { 'is-revealed': revealed }]" :d="selectedPath" />
    <circle :class="['metric-wave-node', { 'is-revealed': revealed }]" cx="122" cy="40" r="2.6" />
  </svg>
</template>

<style scoped lang="scss">
.metric-wave {
  position: absolute;
  inset: 12px 12px auto auto;
  width: 124px;
  height: auto;
  opacity: 0.3;
  pointer-events: none;
}

.metric-wave-frame {
  fill: color-mix(in srgb, var(--surface-elevated) 86%, transparent);
  stroke: color-mix(in srgb, var(--svg-stroke) 65%, transparent);
  stroke-width: 1;
}

.metric-wave-grid {
  fill: none;
  stroke: color-mix(in srgb, var(--border) 78%, transparent);
  stroke-width: 0.8;
}

.metric-wave-path {
  fill: none;
  stroke: var(--svg-stroke-strong);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 170;
  stroke-dashoffset: 170;
}

.metric-wave-node {
  fill: var(--svg-node);
  opacity: 0;
}

.metric-wave-path.is-revealed {
  animation: metric-wave-draw 0.8s var(--mc-ease) forwards, metric-wave-flow 8s linear infinite 0.8s;
}

.metric-wave-node.is-revealed {
  animation: metric-wave-node 0.4s var(--mc-ease) forwards 0.4s, metric-wave-pulse 1.7s ease-in-out infinite 0.8s;
}

@keyframes metric-wave-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes metric-wave-flow {
  to {
    stroke-dashoffset: -170;
  }
}

@keyframes metric-wave-node {
  from {
    opacity: 0;
    transform: scale(0.4);
    transform-origin: center;
  }

  to {
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
}

@keyframes metric-wave-pulse {
  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

@media (max-width: 560px) {
  .metric-wave {
    width: 110px;
    inset: 10px 10px auto auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .metric-wave-path,
  .metric-wave-node {
    animation: none !important;
    stroke-dashoffset: 0;
    opacity: 0.75;
  }
}
</style>
