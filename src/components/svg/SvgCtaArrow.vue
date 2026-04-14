<template>
  <svg class="cta-arrow" viewBox="0 0 20 20" role="img" aria-hidden="true">
    <path class="cta-arrow-shaft" d="M3 10H14" />
    <path class="cta-arrow-head" d="M10 6L14 10L10 14" />
    <circle class="cta-arrow-node" cx="15.5" cy="10" r="1.2" />
  </svg>
</template>

<style scoped lang="scss">
.cta-arrow {
  width: 16px;
  height: 16px;
  overflow: visible;
}

.cta-arrow-shaft,
.cta-arrow-head {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  transition: stroke-dashoffset 0.35s var(--mc-ease), transform 0.35s var(--mc-ease);
}

.cta-arrow-node {
  fill: currentColor;
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.35s var(--mc-ease);
  transform-origin: center;
}

:global(.svg-cta:hover) .cta-arrow-shaft,
:global(.svg-cta:hover) .cta-arrow-head,
:global(.svg-cta:focus-visible) .cta-arrow-shaft,
:global(.svg-cta:focus-visible) .cta-arrow-head {
  stroke-dashoffset: 0;
}

:global(.svg-cta:hover) .cta-arrow-head,
:global(.svg-cta:focus-visible) .cta-arrow-head {
  transform: translateX(1px);
}

:global(.svg-cta:hover) .cta-arrow-node,
:global(.svg-cta:focus-visible) .cta-arrow-node {
  opacity: 0.9;
  transform: scale(1.2);
}

@media (prefers-reduced-motion: reduce) {
  .cta-arrow-shaft,
  .cta-arrow-head,
  .cta-arrow-node {
    transition: none;
    stroke-dashoffset: 0;
    opacity: 1;
    transform: none;
  }
}
</style>
