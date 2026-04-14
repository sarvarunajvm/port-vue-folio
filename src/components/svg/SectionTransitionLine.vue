<template>
  <div class="section-transition reveal" aria-hidden="true">
    <svg class="section-transition-svg" viewBox="0 0 1200 72" preserveAspectRatio="none">
      <path class="section-transition-path" d="M0 50C140 18 270 18 420 42S710 65 905 34S1100 24 1200 44" />
      <circle class="section-transition-node section-transition-node--one" cx="220" cy="36" r="2.3" />
      <circle class="section-transition-node section-transition-node--two" cx="640" cy="50" r="2.3" />
      <circle class="section-transition-node section-transition-node--three" cx="990" cy="32" r="2.3" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.section-transition {
  height: 56px;
  margin: -8px 0;
  pointer-events: none;
}

.section-transition-svg {
  width: 100%;
  height: 100%;
}

.section-transition-path {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.35;
  stroke-linecap: round;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
}

.section-transition.revealed .section-transition-path {
  animation: section-draw 1s var(--mc-ease) forwards;
}

.section-transition-node {
  fill: var(--svg-node);
  opacity: 0;
}

.section-transition.revealed .section-transition-node {
  animation: node-in 0.5s var(--mc-ease) forwards;
}

.section-transition-node--two {
  animation-delay: 0.14s !important;
}

.section-transition-node--three {
  animation-delay: 0.24s !important;
}

@keyframes section-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes node-in {
  from {
    opacity: 0;
    transform: scale(0.3);
    transform-origin: center;
  }

  to {
    opacity: 0.85;
    transform: scale(1);
    transform-origin: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-transition-path,
  .section-transition-node {
    animation: none !important;
    opacity: 0.75;
    stroke-dashoffset: 0;
  }
}
</style>
