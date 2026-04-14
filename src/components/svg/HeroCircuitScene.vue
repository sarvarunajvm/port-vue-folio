<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
})

const reduceMotion = ref(false)

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const sceneStyle = computed(() => {
  const p = Math.max(0, Math.min(1, props.progress))
  if (reduceMotion.value) {
    return { opacity: 0.32, transform: 'none' }
  }

  return {
    opacity: Math.max(0.16, 0.42 - p * 0.18),
    transform: `translate3d(0, ${-16 * p}px, 0) scale(${1 + p * 0.025})`,
  }
})
</script>

<template>
  <div class="hero-circuit" :style="sceneStyle" aria-hidden="true">
    <svg class="hero-circuit-svg" viewBox="0 0 920 420">
      <defs>
        <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="var(--svg-stroke)" />
          <stop offset="50%" stop-color="var(--svg-stroke-strong)" />
          <stop offset="100%" stop-color="var(--svg-stroke)" />
        </linearGradient>
      </defs>

      <g class="hero-grid-layer">
        <rect class="hero-window-frame" x="90" y="52" width="740" height="300" rx="34" />
        <rect class="hero-window-inset" x="108" y="70" width="704" height="264" rx="24" />
        <path class="hero-grid" d="M20 80H900M20 150H900M20 220H900M20 290H900M20 360H900" />
        <path class="hero-grid" d="M100 40V390M220 40V390M340 40V390M460 40V390M580 40V390M700 40V390M820 40V390" />
      </g>

      <g class="hero-wire-layer">
        <path class="hero-wire hero-wire--one" d="M70 300C180 230 240 250 325 200S500 130 610 160S760 230 860 190" />
        <path class="hero-wire hero-wire--two" d="M90 120C210 160 280 110 390 140S560 235 660 215S760 150 850 170" />
        <path class="hero-wire hero-wire--three" d="M70 210C190 170 245 240 340 250S540 190 640 230S760 295 860 285" />
      </g>

      <g class="hero-node-layer">
        <circle class="hero-node hero-node--one" cx="126" cy="280" r="4" />
        <circle class="hero-node hero-node--two" cx="327" cy="200" r="4" />
        <circle class="hero-node hero-node--three" cx="548" cy="148" r="4" />
        <circle class="hero-node hero-node--four" cx="730" cy="220" r="4" />
        <circle class="hero-node hero-node--five" cx="828" cy="188" r="4.5" />
      </g>

      <g class="hero-cloud-layer">
        <path class="hero-cloud" d="M640 102C644 86 661 77 676 84C681 69 700 64 712 76C725 71 740 79 744 92C757 91 768 102 764 116H648C639 116 634 108 640 102Z" />
        <path class="hero-cloud hero-cloud--small" d="M176 132C178 123 188 118 196 122C201 115 212 114 219 121C228 118 237 125 236 134H181C176 134 173 136 176 132Z" />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.hero-circuit {
  position: absolute;
  inset: 8% 0 auto;
  width: min(1000px, 94vw);
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition: transform 0.45s var(--mc-ease), opacity 0.35s ease;
}

.hero-circuit-svg {
  width: 100%;
  height: auto;
}

.hero-grid {
  fill: none;
  stroke: color-mix(in srgb, var(--border) 80%, transparent);
  stroke-width: 0.7;
  opacity: 0.24;
}

.hero-window-frame {
  fill: transparent;
  stroke: color-mix(in srgb, var(--svg-stroke) 72%, transparent);
  stroke-width: 1.2;
  stroke-dasharray: 2200;
  stroke-dashoffset: 2200;
  animation: window-draw 1.1s var(--mc-ease) forwards;
}

.hero-window-inset {
  fill: color-mix(in srgb, var(--surface) 72%, transparent);
  stroke: color-mix(in srgb, var(--svg-stroke) 34%, transparent);
  stroke-width: 0.9;
  opacity: 0.55;
}

.hero-wire {
  fill: none;
  stroke: url(#wireGradient);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-dasharray: 8 10;
  animation: wire-flow 11s linear infinite;
}

.hero-wire--two {
  animation-duration: 14s;
  animation-direction: reverse;
}

.hero-wire--three {
  animation-duration: 17s;
}

.hero-node {
  fill: var(--svg-node);
  filter: drop-shadow(0 0 10px var(--svg-glow));
  animation: hero-node-pulse 2.4s ease-in-out infinite;
}

.hero-cloud {
  fill: color-mix(in srgb, var(--svg-stroke-strong) 16%, transparent);
  stroke: color-mix(in srgb, var(--svg-stroke) 78%, transparent);
  stroke-width: 1;
  animation: cloud-float 8s ease-in-out infinite;
}

.hero-cloud--small {
  animation-duration: 10s;
  animation-delay: 0.6s;
}

.hero-node--two {
  animation-delay: 0.2s;
}

.hero-node--three {
  animation-delay: 0.4s;
}

.hero-node--four {
  animation-delay: 0.6s;
}

.hero-node--five {
  animation-delay: 0.8s;
}

@keyframes wire-flow {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -360;
  }
}

@keyframes window-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes hero-node-pulse {
  0%,
  100% {
    opacity: 0.75;
    transform: scale(0.95);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes cloud-float {
  0%,
  100% {
    transform: translateY(0);
    transform-origin: center;
  }

  50% {
    transform: translateY(-6px);
    transform-origin: center;
  }
}

@media (max-width: 900px) {
  .hero-circuit {
    inset: 12% 0 auto;
    width: 96vw;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-window-frame,
  .hero-wire,
  .hero-node,
  .hero-cloud {
    animation: none;
  }
}
</style>
