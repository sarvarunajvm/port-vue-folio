import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollProgress(elementRef, offset = 64) {
  const progress = ref(0)
  let ticking = false
  let removeListener = null

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (prefersReducedMotion || isMobile) {
      progress.value = 0.75
      return
    }

    const update = () => {
      const el = elementRef.value
      if (!el) return

      const rect = el.getBoundingClientRect()
      const scrollHeight = el.scrollHeight || el.offsetHeight
      const viewportH = window.innerHeight

      // Progress: 0 when top of element hits viewport top (minus offset),
      // 1 when bottom of element reaches viewport top
      const totalTravel = scrollHeight - viewportH
      const scrolled = -rect.top + offset

      const p = Math.max(0, Math.min(1, scrolled / totalTravel))
      progress.value = p
      el.style.setProperty('--scroll-progress', p)
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
