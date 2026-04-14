<script setup>
defineProps({
  title: { type: String, required: true },
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading reveal">
    <span v-if="label" class="section-label text-label">{{ label }}</span>
    <svg class="section-heading-trace" viewBox="0 0 180 18" aria-hidden="true">
      <path class="section-heading-path" d="M2 9H52L74 3H112L132 15H178" />
      <circle class="section-heading-node section-heading-node--one" cx="52" cy="9" r="2" />
      <circle class="section-heading-node section-heading-node--two" cx="112" cy="9" r="2" />
      <circle class="section-heading-node section-heading-node--three" cx="132" cy="15" r="2" />
    </svg>
    <h2 class="section-title text-h1">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.section-heading {
  margin-bottom: var(--space-xl);
}

.section-label {
  display: block;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.section-title {
  color: var(--text-primary);
  position: relative;
}

.section-heading-trace {
  width: 200px;
  height: 18px;
  margin-bottom: var(--space-sm);
}

.section-heading-path {
  fill: none;
  stroke: var(--svg-stroke);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
}

.section-heading-node {
  fill: var(--svg-node);
  opacity: 0;
  filter: drop-shadow(0 0 3px var(--svg-glow));
}

.section-heading.revealed .section-heading-path {
  animation: heading-draw 1s var(--dramatic) forwards;
}

.section-heading.revealed .section-heading-node {
  animation: heading-node 0.5s var(--spring) forwards;
}

.section-heading-node--one {
  animation-delay: 0.3s !important;
}

.section-heading-node--two {
  animation-delay: 0.5s !important;
}

.section-heading-node--three {
  animation-delay: 0.7s !important;
}

@keyframes heading-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes heading-node {
  0% {
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
  }
  60% {
    opacity: 1;
    transform: scale(1.3);
    transform-origin: center;
  }
  100% {
    opacity: 0.9;
    transform: scale(1);
    transform-origin: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-heading-path,
  .section-heading-node {
    animation: none !important;
    opacity: 0.85;
    stroke-dashoffset: 0;
  }
}
</style>
