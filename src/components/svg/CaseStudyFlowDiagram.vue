<script setup>
import { computed } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
})

function formatLabel(value) {
  if (!value) return 'System'
  return String(value).slice(0, 14)
}

const labels = computed(() => {
  const chosen = props.tags.slice(0, 3).map((tag) => formatLabel(tag))
  while (chosen.length < 3) {
    chosen.push(['Ingress', 'Processing', 'Delivery'][chosen.length])
  }
  return chosen
})
</script>

<template>
  <div class="case-flow reveal reveal-delay-3" aria-hidden="true">
    <svg class="case-flow-svg" viewBox="0 0 760 170">
      <path class="case-flow-wire case-flow-wire--one" d="M210 85H290" />
      <path class="case-flow-wire case-flow-wire--two" d="M470 85H550" />

      <g class="case-flow-node">
        <rect x="24" y="42" width="186" height="86" rx="14" />
        <text x="117" y="89" text-anchor="middle">{{ labels[0] }}</text>
      </g>

      <g class="case-flow-node">
        <rect x="290" y="42" width="180" height="86" rx="14" />
        <text x="380" y="89" text-anchor="middle">{{ labels[1] }}</text>
      </g>

      <g class="case-flow-node">
        <rect x="550" y="42" width="186" height="86" rx="14" />
        <text x="643" y="89" text-anchor="middle">{{ labels[2] }}</text>
      </g>

      <circle class="case-flow-signal case-flow-signal--left" cx="250" cy="85" r="4.2" />
      <circle class="case-flow-signal case-flow-signal--right" cx="510" cy="85" r="4.2" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.case-flow {
  margin-bottom: var(--space-xl);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--surface-elevated) 85%, transparent),
    color-mix(in srgb, var(--surface) 94%, transparent)
  );
  padding: var(--space-sm);
}

.case-flow-svg {
  width: 100%;
  height: auto;
}

.case-flow-wire {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-dasharray: 8 9;
  animation: case-wire-flow 10s linear infinite;
}

.case-flow-wire--two {
  animation-duration: 13s;
}

.case-flow-node rect {
  fill: color-mix(in srgb, var(--surface-elevated) 88%, transparent);
  stroke: color-mix(in srgb, var(--svg-stroke) 72%, transparent);
  stroke-width: 1.3;
}

.case-flow-node text {
  fill: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.case-flow-signal {
  fill: var(--svg-node);
  animation: case-signal-pulse 2s ease-in-out infinite;
}

.case-flow-signal--right {
  animation-delay: 0.3s;
}

@keyframes case-wire-flow {
  to {
    stroke-dashoffset: -180;
  }
}

@keyframes case-signal-pulse {
  0%,
  100% {
    opacity: 0.65;
    transform: scale(0.9);
    transform-origin: center;
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
    transform-origin: center;
  }
}

@media (max-width: 900px) {
  .case-flow-node text {
    font-size: 12px;
  }
}

@media (max-width: 700px) {
  .case-flow {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .case-flow-wire,
  .case-flow-signal {
    animation: none;
  }
}
</style>
