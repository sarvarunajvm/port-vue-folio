<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import SkillConstellation from '@/components/svg/SkillConstellation.vue'
import MetricWaveform from '@/components/svg/MetricWaveform.vue'

import skillsData from '@/data/skills.json'

const metricsRevealed = ref(false)

const metrics = [
  { value: '9+', numericPart: 9, suffix: '+', label: 'years building distributed systems' },
  { value: '4', numericPart: 4, suffix: '', label: 'companies shipped at' },
  { value: '99.96%', numericPart: 99.96, suffix: '%', label: 'service availability achieved' },
  { value: '1.5x', numericPart: 1.5, suffix: 'x', label: 'API performance improvement' },
]

const strengths = skillsData.map(group => ({
  title: group.title,
  items: group.points.map(p => p.name)
}))

// Scroll-driven count-up
const displayValues = ref(metrics.map(() => '0'))
const metricsRef = ref(null)
const strengthsGridRef = ref(null)
const { progress } = useScrollEntrance(metricsRef, { distance: 400 })
const activeStrengthGroup = ref('')
const strengthsRevealed = ref(false)

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

watchEffect(() => {
  const eased = easeOutCubic(progress.value)
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

  const strengthObs = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      strengthsRevealed.value = true
      strengthObs.disconnect()
    }
  }, { threshold: 0.1 })
  if (strengthsGridRef.value) {
    strengthObs.observe(strengthsGridRef.value)
  }
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

      <h3 class="strengths-heading text-h2 reveal">Technical Strengths</h3>
      <SkillConstellation :active-group="activeStrengthGroup" />

      <div ref="strengthsGridRef" class="strengths-grid">
        <div
          v-for="(group, index) in strengths"
          :key="group.title"
          :class="['strength-group', 'reveal', `reveal-delay-${index + 1}`, { 'is-active': activeStrengthGroup === group.title, 'revealed': strengthsRevealed }]"
          tabindex="0"
          @mouseenter="activeStrengthGroup = group.title"
          @mouseleave="activeStrengthGroup = ''"
          @focus="activeStrengthGroup = group.title"
          @blur="activeStrengthGroup = ''"
        >
          <h4 class="strength-title">{{ group.title }}</h4>
          <div class="strength-items">
            <span v-for="item in group.items" :key="item" class="strength-item">
              {{ item }}
            </span>
          </div>
        </div>
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

.strengths-heading {
  margin-bottom: var(--space-xl);
}

.strengths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.strength-group {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  &.is-active {
    border-color: color-mix(in srgb, var(--svg-stroke-strong) 56%, transparent);
    box-shadow: 0 10px 24px color-mix(in srgb, var(--svg-glow) 45%, transparent);
  }
}

.strength-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border);
}

.strength-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.strength-item {
  font-size: 14px;
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--text-primary);
  }

  &:not(:last-child)::after {
    content: ' ·';
    opacity: 0.4;
    margin-left: var(--space-sm);
  }
}
</style>
