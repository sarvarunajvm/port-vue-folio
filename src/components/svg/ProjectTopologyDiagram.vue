<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const patterns = [
  {
    paths: [
      'M18 60H74L105 36H166L198 18',
      'M74 60V30L122 30',
      'M122 30L154 52H198',
    ],
    nodes: [
      [18, 60, 3.1],
      [74, 60, 3.1],
      [105, 36, 2.8],
      [166, 36, 2.8],
      [198, 18, 3.2],
      [198, 52, 2.9],
    ],
  },
  {
    paths: [
      'M20 26H80L116 54H168L202 32',
      'M20 58H52L88 34H118',
      'M118 34L148 16H202',
    ],
    nodes: [
      [20, 26, 3],
      [20, 58, 3],
      [80, 26, 2.9],
      [116, 54, 2.8],
      [168, 54, 2.8],
      [202, 32, 3.1],
      [202, 16, 2.8],
    ],
  },
  {
    paths: [
      'M18 40H58L92 18H148L202 50',
      'M58 40L90 62H152',
      'M152 62L184 34H202',
    ],
    nodes: [
      [18, 40, 3],
      [58, 40, 3],
      [92, 18, 2.8],
      [148, 18, 2.8],
      [202, 50, 3.2],
      [90, 62, 2.8],
      [152, 62, 2.8],
      [184, 34, 2.7],
    ],
  },
]

const selectedPattern = computed(() => {
  return patterns[Math.abs(props.variant) % patterns.length]
})
</script>

<template>
  <svg class="project-topology" :class="{ active }" viewBox="0 0 220 84" aria-hidden="true">
    <rect class="project-topology-frame" x="1.5" y="1.5" width="217" height="81" rx="12" />
    <path
      v-for="path in selectedPattern.paths"
      :key="path"
      class="project-topology-path"
      :d="path"
    />
    <circle
      v-for="([cx, cy, r], idx) in selectedPattern.nodes"
      :key="`${cx}-${cy}-${idx}`"
      class="project-topology-node"
      :cx="cx"
      :cy="cy"
      :r="r"
    />
  </svg>
</template>

<style scoped lang="scss">
.project-topology {
  width: 148px;
  height: auto;
  flex-shrink: 0;
}

.project-topology-frame {
  fill: color-mix(in srgb, var(--surface-elevated) 84%, transparent);
  stroke: color-mix(in srgb, var(--svg-stroke) 70%, transparent);
  stroke-width: 1;
}

.project-topology-path {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
  animation: topology-draw 0.9s var(--mc-ease) forwards;
}

.project-topology-path:nth-of-type(2) {
  animation-delay: 0.08s;
}

.project-topology-path:nth-of-type(3) {
  animation-delay: 0.16s;
}

.project-topology-node {
  fill: var(--svg-node);
  opacity: 0.72;
  transition: opacity 0.25s ease, transform 0.25s var(--mc-ease);
}

.project-topology.active .project-topology-path {
  stroke: var(--svg-stroke-strong);
  animation: topology-draw 0.45s var(--mc-ease) forwards, topology-flow 14s linear infinite 0.45s;
}

.project-topology.active .project-topology-node {
  opacity: 1;
  animation: topology-node-pulse 1.8s ease-in-out infinite;
}

@keyframes topology-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes topology-flow {
  to {
    stroke-dashoffset: -180;
  }
}

@keyframes topology-node-pulse {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 var(--svg-glow));
  }

  50% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 8px var(--svg-glow));
  }
}

@media (max-width: 560px) {
  .project-topology {
    width: 128px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-topology-path,
  .project-topology.active .project-topology-path,
  .project-topology.active .project-topology-node {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
