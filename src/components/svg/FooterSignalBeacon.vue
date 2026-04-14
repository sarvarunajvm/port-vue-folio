<template>
  <div class="footer-beacon" aria-hidden="true">
    <svg class="footer-beacon-svg" viewBox="0 0 96 96">
      <circle class="footer-beacon-ring footer-beacon-ring--one" cx="48" cy="48" r="14" />
      <circle class="footer-beacon-ring footer-beacon-ring--two" cx="48" cy="48" r="24" />
      <circle class="footer-beacon-ring footer-beacon-ring--three" cx="48" cy="48" r="34" />
      <circle class="footer-beacon-core" cx="48" cy="48" r="5" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.footer-beacon {
  width: 44px;
  height: 44px;
  pointer-events: none;
}

.footer-beacon-svg {
  width: 100%;
  height: 100%;
}

.footer-beacon-ring {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.2;
  opacity: 0;
}

.footer-beacon-ring--one {
  animation: beacon-ring 2.6s ease-out infinite;
}

.footer-beacon-ring--two {
  animation: beacon-ring 2.6s ease-out infinite 0.5s;
}

.footer-beacon-ring--three {
  animation: beacon-ring 2.6s ease-out infinite 1s;
}

.footer-beacon-core {
  fill: var(--svg-node);
  animation: beacon-core 1.8s ease-in-out infinite;
}

@keyframes beacon-ring {
  0% {
    opacity: 0.7;
    transform: scale(0.65);
    transform-origin: center;
  }

  100% {
    opacity: 0;
    transform: scale(1);
    transform-origin: center;
  }
}

@keyframes beacon-core {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(0.9);
    transform-origin: center;
  }

  50% {
    opacity: 1;
    transform: scale(1.12);
    transform-origin: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-beacon-ring,
  .footer-beacon-core {
    animation: none;
    opacity: 0.75;
    transform: none;
  }
}
</style>
