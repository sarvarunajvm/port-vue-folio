<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 34,
  },
})
</script>

<template>
  <svg
    class="monogram"
    :style="{ '--monogram-size': typeof size === 'number' ? `${size}px` : size }"
    viewBox="0 0 72 72"
    role="img"
    aria-label="SK monogram"
  >
    <rect class="monogram-frame" x="1.5" y="1.5" width="69" height="69" rx="18" />
    <path
      class="monogram-path monogram-path--s"
      d="M24 21C17 21 14.8 26.7 19.4 30.1C21.7 31.8 24.6 32.4 27.4 33.3C31.8 34.7 33.7 38.6 30.5 42C28.9 43.7 26.3 44.5 24 44.5C19.8 44.5 17 42.5 15.9 39"
    />
    <path class="monogram-path monogram-path--k-stem" d="M36 20V52" />
    <path class="monogram-path monogram-path--k-arm" d="M36 35L54 20" />
    <path class="monogram-path monogram-path--k-leg" d="M36 35L54 52" />
    <circle class="monogram-node monogram-node--one" cx="56" cy="18" r="2" />
    <circle class="monogram-node monogram-node--two" cx="56" cy="54" r="2" />
    <circle class="monogram-node monogram-node--three" cx="17" cy="40" r="1.8" />
  </svg>
</template>

<style scoped lang="scss">
.monogram {
  width: var(--monogram-size);
  height: var(--monogram-size);
  overflow: visible;
}

.monogram-frame {
  fill: transparent;
  stroke: color-mix(in srgb, var(--svg-stroke) 75%, transparent);
  stroke-width: 1.2;
}

.monogram-path {
  fill: none;
  stroke: var(--svg-stroke-strong);
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  filter: drop-shadow(0 0 8px var(--svg-glow));
  animation: logo-draw 1s var(--mc-ease) forwards;
}

.monogram-path--k-stem {
  animation-delay: 0.08s;
}

.monogram-path--k-arm {
  animation-delay: 0.14s;
}

.monogram-path--k-leg {
  animation-delay: 0.2s;
}

.monogram-node {
  fill: var(--svg-node);
  opacity: 0;
  animation: node-pop 0.45s var(--mc-ease) forwards;
}

.monogram-node--one {
  animation-delay: 0.32s;
}

.monogram-node--two {
  animation-delay: 0.42s;
}

.monogram-node--three {
  animation-delay: 0.5s;
}

:global(.nav-logo:hover) .monogram-path {
  stroke: var(--accent-hover);
}

:global(.nav-logo:hover) .monogram-node {
  animation: node-pop 0.25s var(--mc-ease) forwards, node-pulse 1.2s ease-in-out infinite;
}

@keyframes logo-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes node-pop {
  from {
    opacity: 0;
    transform: scale(0.2);
    transform-origin: center;
  }

  to {
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
}

@keyframes node-pulse {
  0%,
  100% {
    filter: drop-shadow(0 0 0 var(--svg-glow));
  }

  50% {
    filter: drop-shadow(0 0 8px var(--svg-glow));
  }
}

@media (prefers-reduced-motion: reduce) {
  .monogram-path,
  .monogram-node {
    animation: none;
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
