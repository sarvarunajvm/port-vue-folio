import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollEntrance(elementRef, { distance = 300 } = {}) {
  const progress = ref(0)
  let ticking = false
  let removeListener = null

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (prefersReducedMotion || isMobile) {
      progress.value = 1
      return
    }

    const update = () => {
      const el = elementRef.value
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight

      // Progress: 0 when element top is at/below viewport bottom
      // 1 when element top has scrolled `distance` px above viewport bottom
      const distanceIntoView = viewportH - rect.top
      const p = Math.max(0, Math.min(1, distanceIntoView / distance))

      progress.value = p
      el.style.setProperty('--entrance-progress', p)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    removeListener = () => window.removeEventListener('scroll', onScroll)

    // Initial calculation
    update()
  })

  onUnmounted(() => {
    if (removeListener) removeListener()
  })

  return { progress }
}
