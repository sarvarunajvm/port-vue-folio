<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import CommandPalette from '@/components/shared/CommandPalette.vue'

const ambientRef = ref(null)
let removeListeners = null

onMounted(() => {
  const el = ambientRef.value
  if (!el) return

  let ticking = false
  let lastY = window.scrollY

  const updateAmbient = (x, y) => {
    el.style.setProperty('--ambient-x', `${x}px`)
    el.style.setProperty('--ambient-y', `${y}px`)
  }

  const onPointerMove = (event) => {
    updateAmbient(event.clientX, event.clientY)
  }

  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const delta = Math.min(1, Math.abs(window.scrollY - lastY) / 80)
      el.style.setProperty('--scroll-energy', delta.toFixed(2))
      lastY = window.scrollY
      ticking = false
    })
  }

  updateAmbient(window.innerWidth * 0.52, window.innerHeight * 0.42)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  removeListeners = () => {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('scroll', onScroll)
  }
})

onUnmounted(() => {
  removeListeners?.()
})
</script>

<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
  <CommandPalette />
  <div ref="ambientRef" class="ambient-pointer" aria-hidden="true" />
  <div class="noise-overlay" aria-hidden="true" />
</template>

<style lang="scss">
@use '@/styles/main.scss';

.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 0.4s var(--dramatic),
    transform 0.4s var(--dramatic),
    filter 0.4s var(--dramatic);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(4px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  filter: blur(2px);
}

.ambient-pointer {
  --ambient-x: 50vw;
  --ambient-y: 45vh;
  --scroll-energy: 0;

  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      calc(360px + (var(--scroll-energy) * 120px)) circle at var(--ambient-x) var(--ambient-y),
      rgba(var(--accent-rgb), 0.08),
      transparent 58%
    );
  mix-blend-mode: screen;
  opacity: 0.8;
}

#app > :not(.ambient-pointer):not(.noise-overlay) {
  position: relative;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .ambient-pointer {
    display: none;
  }
}
</style>
