<script setup>
import { ref, watchEffect } from 'vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'

const metrics = [
  { value: '10+', numericPart: 10, suffix: '+', label: 'years building production systems' },
  { value: '4', numericPart: 4, suffix: '', label: 'companies shipped at' },
  { value: '95%', numericPart: 95, suffix: '%', label: 'on-time delivery rate' },
  { value: '1.5x', numericPart: 1.5, suffix: 'x', label: 'API performance improvement' },
]

const strengths = [
  {
    title: 'Backend & Systems',
    items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Elixir', 'Phoenix', 'Kafka', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Frontend & Tools',
    items: ['Vue.js', 'React', 'TypeScript', 'Node.js', 'Electron', 'LiveView', 'HTML5/CSS3'],
  },
  {
    title: 'Data & Infrastructure',
    items: ['PostgreSQL', 'Redis', 'BigQuery', 'SQLite', 'Oracle', 'Docker', 'GCP', 'AWS', 'Datadog'],
  },
  {
    title: 'Practices',
    items: ['Microservices', 'TDD', 'System Design', 'Event-Driven', 'CI/CD', 'Agile/Scrum', 'Code Review'],
  },
]

// Scroll-driven count-up
const displayValues = ref(metrics.map(() => '0'))
const metricsRef = ref(null)
const { progress } = useScrollEntrance(metricsRef, { distance: 400 })

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

watchEffect(() => {
  const eased = easeOutCubic(progress.value)
  displayValues.value = metrics.map((m) => {
    const current = eased * m.numericPart
    const isFloat = m.numericPart % 1 !== 0
    const formatted = isFloat ? current.toFixed(1) : Math.round(current).toString()
    return formatted + m.suffix
  })
})
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading title="Engineering Impact" />

      <div ref="metricsRef" class="metrics reveal">
        <div v-for="(metric, i) in metrics" :key="metric.label" class="metric" :style="{ transitionDelay: `${i * 0.1}s` }">
          <span class="metric-value">{{ displayValues[i] }}</span>
          <span class="metric-label">{{ metric.label }}</span>
        </div>
      </div>

      <h3 class="strengths-heading text-h2 reveal">Technical Strengths</h3>

      <div class="strengths-grid">
        <div
          v-for="(group, index) in strengths"
          :key="group.title"
          :class="['strength-group', 'reveal', `reveal-delay-${index + 1}`]"
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
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.06);
    transform: translateY(-2px);
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
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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
