<script setup>
import { computed, ref, watchEffect, onMounted } from 'vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import { interpolate, timelineProgress, dramaticEase } from '@/composables/useTimelineMotion'
import MetricWaveform from '@/components/svg/MetricWaveform.vue'

const metricsRevealed = ref(false)

const metrics = [
  { value: '9+', numericPart: 9, suffix: '+', label: 'years building distributed systems' },
  { value: '4', numericPart: 4, suffix: '', label: 'companies shipped at' },
  { value: '99.96%', numericPart: 99.96, suffix: '%', label: 'service availability achieved' },
  { value: '1.5x', numericPart: 1.5, suffix: 'x', label: 'API performance improvement' },
]

const impactSequence = [
  {
    label: 'Reliability',
    title: 'Moved availability from 99.56% to 99.96%',
    detail: 'Automated the daily operational digest for error rates, FCIs, and DLQ depth so triage moved from manual checks to a predictable review loop.',
    proof: '~20 hours recovered annually',
  },
  {
    label: 'Delivery Control',
    title: 'Shipped high-risk changes with phased rollouts',
    detail: 'Designed feature flags, rollback triggers, DLQ alerts, and progressive access gates for merchant-facing invoicing and API workflows.',
    proof: 'Zero P1 incidents on invoice aggregation',
  },
  {
    label: 'Merchant Outcomes',
    title: 'Connected architecture decisions to adoption',
    detail: 'Improved webhook delivery with at-least-once guarantees, deduplication, fan-out, and p99 latency work that removed scaling friction.',
    proof: '10% merchant adoption',
  },
]

// Scroll-driven count-up
const displayValues = ref(metrics.map(() => '0'))
const metricsRef = ref(null)
const reelRef = ref(null)
const { progress } = useScrollEntrance(metricsRef, { distance: 400 })
const { progress: reelProgress } = useScrollEntrance(reelRef, { distance: 620 })

const cardStyles = computed(() => impactSequence.map((_, index) => {
  const start = index * 0.16
  const frameProgress = timelineProgress(reelProgress.value, start, start + 0.42, dramaticEase)
  const direction = index % 2 === 0 ? -1 : 1

  return {
    '--frame-opacity': frameProgress,
    '--frame-x': `${interpolate(frameProgress, [0, 1], [direction * 34, 0])}px`,
    '--frame-y': `${interpolate(frameProgress, [0, 1], [30, 0])}px`,
    '--frame-blur': `${interpolate(frameProgress, [0, 1], [7, 0])}px`,
    '--frame-line-scale': frameProgress,
  }
}))

watchEffect(() => {
  const eased = dramaticEase(progress.value)
  displayValues.value = metrics.map((m) => {
    const current = eased * m.numericPart
    const decimals = (m.numericPart.toString().split('.')[1] || '').length
    const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
    return formatted + m.suffix
  })
})

onMounted(() => {
  const watchReveal = (elRef, flagRef) => {
    const obs = new MutationObserver(() => {
      if (elRef.value?.classList.contains('revealed')) {
        flagRef.value = true
        obs.disconnect()
      }
    })
    if (elRef.value) {
      if (elRef.value.classList.contains('revealed')) {
        flagRef.value = true
      } else {
        obs.observe(elRef.value, { attributes: true, attributeFilter: ['class'] })
      }
    }
  }

  watchReveal(metricsRef, metricsRevealed)
})
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading title="Engineering Impact" />

      <div ref="metricsRef" class="metrics reveal">
        <div
          v-for="(metric, i) in metrics"
          :key="metric.label"
          :class="['metric', 'reveal', `reveal-delay-${i + 1}`]"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <MetricWaveform :variant="i" :revealed="metricsRevealed" />
          <span class="metric-value">{{ displayValues[i] }}</span>
          <span class="metric-label">{{ metric.label }}</span>
        </div>
      </div>

      <div ref="reelRef" class="impact-reel" aria-label="Engineering impact highlights">
        <article
          v-for="(item, index) in impactSequence"
          :key="item.label"
          v-glow-follow
          class="impact-frame"
          :style="cardStyles[index]"
        >
          <span class="impact-frame__index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="impact-frame__copy">
            <span class="impact-frame__label">{{ item.label }}</span>
            <h3 class="impact-frame__title">{{ item.title }}</h3>
            <p class="impact-frame__detail">{{ item.detail }}</p>
          </div>
          <strong class="impact-frame__proof">{{ item.proof }}</strong>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.metric {
  text-align: center;
  padding: var(--space-lg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.4s var(--dramatic),
    box-shadow 0.4s var(--dramatic),
    transform 0.35s var(--spring);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.35);
    box-shadow:
      0 8px 28px rgba(var(--accent-rgb), 0.08),
      0 0 0 1px rgba(var(--accent-rgb), 0.06);
    transform: translateY(-3px);
  }
}

.metric-value {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-xs);
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.metric-label {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.impact-reel {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.impact-frame {
  --frame-opacity: 0;
  --frame-x: 0px;
  --frame-y: 30px;
  --frame-blur: 7px;
  --frame-line-scale: 0;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr) minmax(160px, auto);
  align-items: center;
  gap: var(--space-lg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  background:
    linear-gradient(90deg, rgba(var(--accent-rgb), 0.08), transparent 36%),
    var(--surface);
  overflow: hidden;
  position: relative;
  opacity: var(--frame-opacity);
  filter: blur(var(--frame-blur));
  transform: translate3d(var(--frame-x), var(--frame-y), 0);
  will-change: opacity, filter, transform;
  transition:
    border-color 0.35s var(--dramatic),
    box-shadow 0.35s var(--dramatic),
    transform 0.35s var(--spring);

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.45), transparent);
    transform: scaleX(var(--frame-line-scale));
    transform-origin: left;
    transition: transform 0.7s var(--dramatic);
  }

  &:hover,
  &:focus-within {
    border-color: rgba(var(--accent-rgb), 0.32);
    box-shadow:
      0 12px 34px rgba(var(--accent-rgb), 0.08),
      0 0 0 1px rgba(var(--accent-rgb), 0.08);
    transform: translate3d(var(--frame-x), calc(var(--frame-y) - 2px), 0);

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }
}

.impact-frame__index {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  align-self: flex-start;
}

.impact-frame__copy {
  min-width: 0;
}

.impact-frame__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
}

.impact-frame__title {
  font-size: clamp(18px, 2vw, 24px);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.2;
}

.impact-frame__detail {
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 720px;
}

.impact-frame__proof {
  justify-self: end;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  text-align: right;

  @media (max-width: 760px) {
    justify-self: start;
    text-align: left;
  }
}
</style>
