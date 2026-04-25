import { dramaticEase } from '@/composables/useTimelineMotion'

let activeAnimation = 0

export function smoothScrollTo(targetY, { duration = 760 } = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, targetY)
    return
  }

  const animationId = ++activeAnimation
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  const step = (now) => {
    if (animationId !== activeAnimation) return

    const elapsed = now - startTime
    const progress = Math.min(1, elapsed / duration)
    window.scrollTo(0, startY + distance * dramaticEase(progress))

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export function smoothScrollToElement(selector, { offset = 80, duration = 760 } = {}) {
  const el = document.querySelector(selector)
  if (!el) return

  const targetY = el.getBoundingClientRect().top + window.scrollY - offset
  smoothScrollTo(targetY, { duration })
}
