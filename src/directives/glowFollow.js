function updatePointerVars(event, el) {
  const rect = el.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  el.style.setProperty('--glow-x', `${Math.max(0, Math.min(100, x))}%`)
  el.style.setProperty('--glow-y', `${Math.max(0, Math.min(100, y))}%`)
}

export const glowFollow = {
  mounted(el) {
    const onPointerMove = (event) => updatePointerVars(event, el)
    const onPointerEnter = (event) => {
      updatePointerVars(event, el)
      el.classList.add('is-glow-active')
    }
    const onPointerLeave = () => {
      el.classList.remove('is-glow-active')
    }

    el.classList.add('glow-follow')
    el.addEventListener('pointerenter', onPointerEnter)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerleave', onPointerLeave)
    el.__glowFollowCleanup = () => {
      el.removeEventListener('pointerenter', onPointerEnter)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerleave', onPointerLeave)
    }
  },

  unmounted(el) {
    el.__glowFollowCleanup?.()
    delete el.__glowFollowCleanup
  },
}
