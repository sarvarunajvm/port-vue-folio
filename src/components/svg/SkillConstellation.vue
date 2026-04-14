<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  activeGroup: {
    type: String,
    default: '',
  },
})

const revealed = ref(false)
const rootRef = ref(null)

onMounted(() => {
  const observer = new MutationObserver(() => {
    if (rootRef.value?.classList.contains('revealed')) {
      revealed.value = true
      observer.disconnect()
    }
  })
  if (rootRef.value) {
    if (rootRef.value.classList.contains('revealed')) {
      revealed.value = true
    } else {
      observer.observe(rootRef.value, { attributes: true, attributeFilter: ['class'] })
    }
  }
})

// Six clusters share one pentagon geometry, stepped horizontally so all sit on the
// same row (the old layout wrapped "Practices & Security" onto a second row).
const pentagon = (ox) => ({
  nodes: [
    [52 + ox, 58, 3.5],
    [102 + ox, 42, 3],
    [148 + ox, 74, 3.2],
    [108 + ox, 116, 3.1],
    [58 + ox, 104, 2.8],
  ],
  links: [
    `M${52 + ox} 58L${102 + ox} 42L${148 + ox} 74L${108 + ox} 116L${58 + ox} 104Z`,
    `M${52 + ox} 58L${108 + ox} 116`,
    `M${58 + ox} 104L${102 + ox} 42`,
  ],
})

const steps = [0, 128, 256, 384, 512, 640]

const groups = [
  { id: 'Back-end', className: 'cluster-backend', ...pentagon(steps[0]) },
  { id: 'Front-end', className: 'cluster-frontend', ...pentagon(steps[1]) },
  { id: 'Data & Messaging', className: 'cluster-data', ...pentagon(steps[2]) },
  { id: 'Cloud & DevOps', className: 'cluster-cloud', ...pentagon(steps[3]) },
  { id: 'AI & ML', className: 'cluster-ai', ...pentagon(steps[4]) },
  { id: 'Practices & Security', className: 'cluster-practices', ...pentagon(steps[5]) },
]
</script>

<template>
  <div ref="rootRef" class="skill-constellation reveal" aria-hidden="true">
    <svg class="skill-constellation-svg" viewBox="0 0 812 175">
      <rect class="skill-constellation-bg" x="1.5" y="1.5" width="809" height="172" rx="18" />
      <path class="skill-constellation-spine" d="M32 88H780" />

      <g
        v-for="group in groups"
        :key="group.id"
        class="skill-cluster"
        :class="[group.className, { active: activeGroup === group.id }]"
      >
        <path
          v-for="(link, index) in group.links"
          :key="`${group.id}-link-${index}`"
          :class="['skill-cluster-link', { 'is-revealed': revealed }]"
          :d="link"
        />
        <circle
          v-for="([cx, cy, r], index) in group.nodes"
          :key="`${group.id}-node-${index}`"
          :class="['skill-cluster-node', { 'is-revealed': revealed }]"
          :cx="cx"
          :cy="cy"
          :r="r"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.skill-constellation {
  margin-bottom: var(--space-xl);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--surface-elevated) 86%, transparent),
    color-mix(in srgb, var(--surface) 93%, transparent)
  );
  overflow: hidden;
}

.skill-constellation-svg {
  width: 100%;
  height: auto;
}

.skill-constellation-bg {
  fill: transparent;
}

.skill-constellation-spine {
  fill: none;
  stroke: color-mix(in srgb, var(--svg-stroke) 58%, transparent);
  stroke-width: 1.1;
  stroke-dasharray: 8 8;
  animation: constellation-spine 16s linear infinite;
}

.skill-cluster-link {
  fill: none;
  stroke: color-mix(in srgb, var(--svg-stroke) 74%, transparent);
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
}

.skill-cluster-node {
  fill: var(--svg-node);
  opacity: 0.68;
}

.skill-cluster-link.is-revealed {
  animation: constellation-link-draw 0.75s var(--mc-ease) forwards;
}

.skill-cluster-node.is-revealed {
  animation: constellation-node-in 0.42s var(--mc-ease) forwards;
}

.cluster-frontend .skill-cluster-link,
.cluster-frontend .skill-cluster-node {
  animation-delay: 0.08s !important;
}

.cluster-data .skill-cluster-link,
.cluster-data .skill-cluster-node {
  animation-delay: 0.16s !important;
}

.cluster-cloud .skill-cluster-link,
.cluster-cloud .skill-cluster-node {
  animation-delay: 0.24s !important;
}

.cluster-ai .skill-cluster-link,
.cluster-ai .skill-cluster-node {
  animation-delay: 0.32s !important;
}

.cluster-practices .skill-cluster-link,
.cluster-practices .skill-cluster-node {
  animation-delay: 0.4s !important;
}

.skill-cluster.active .skill-cluster-link {
  stroke: var(--svg-stroke-strong);
  animation: constellation-link-draw 0.35s var(--mc-ease) forwards, constellation-link-flow 11s linear infinite 0.35s;
}

.skill-cluster.active .skill-cluster-node {
  opacity: 1;
  animation: constellation-node-glow 1.6s ease-in-out infinite;
}

@keyframes constellation-spine {
  to {
    stroke-dashoffset: -120;
  }
}

@keyframes constellation-link-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes constellation-link-flow {
  to {
    stroke-dashoffset: -220;
  }
}

@keyframes constellation-node-in {
  from {
    opacity: 0;
    transform: scale(0.4);
    transform-origin: center;
  }

  to {
    opacity: 0.72;
    transform: scale(1);
    transform-origin: center;
  }
}

@keyframes constellation-node-glow {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 var(--svg-glow));
  }

  50% {
    transform: scale(1.18);
    filter: drop-shadow(0 0 9px var(--svg-glow));
  }
}

@media (max-width: 900px) {
  .skill-constellation {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-constellation-spine,
  .skill-cluster-link,
  .skill-cluster-node,
  .skill-cluster.active .skill-cluster-link,
  .skill-cluster.active .skill-cluster-node {
    animation: none !important;
    stroke-dashoffset: 0;
    opacity: 0.8;
    transform: none;
    filter: none;
  }
}
</style>
