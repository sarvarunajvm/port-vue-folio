export function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

export function interpolate(value, inputRange, outputRange) {
  const [inputMin, inputMax] = inputRange
  const [outputMin, outputMax] = outputRange
  const progress = clamp((value - inputMin) / (inputMax - inputMin))

  return outputMin + (outputMax - outputMin) * progress
}

export function dramaticEase(value) {
  const t = clamp(value)
  return 1 - Math.pow(1 - t, 3)
}

export function timelineProgress(progress, start, end, easing = dramaticEase) {
  return easing(interpolate(progress, [start, end], [0, 1]))
}
