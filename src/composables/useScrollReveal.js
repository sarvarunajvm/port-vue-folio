import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  let observer = null
  let mutationObserver = null

  function observeElements() {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('revealed')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    nextTick(() => {
      observeElements()

      // Watch for dynamically added .reveal elements (e.g. async components)
      mutationObserver = new MutationObserver(() => {
        observeElements()
      })
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (mutationObserver) mutationObserver.disconnect()
  })
}
