<script setup>
import { computed, ref } from 'vue'
import { Download } from 'lucide-vue-next'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import { interpolate, timelineProgress } from '@/composables/useTimelineMotion'
import TimelineSpine from '@/components/svg/TimelineSpine.vue'
import experience from '@/data/experience.json'

const timelineRef = ref(null)
const { progress } = useScrollEntrance(timelineRef, { distance: 760 })

const itemStyles = computed(() => experience.map((_, index) => {
  const p = timelineProgress(progress.value, index * 0.1, index * 0.1 + 0.36)
  const direction = index % 2 === 0 ? -1 : 1

  return {
    opacity: p,
    transform: `translate3d(${interpolate(p, [0, 1], [direction * 28, 0])}px, ${interpolate(p, [0, 1], [20, 0])}px, 0)`,
    filter: `blur(${interpolate(p, [0, 1], [6, 0])}px)`,
    '--milestone-scale': interpolate(p, [0, 1], [0, 1]),
    '--content-line': p,
  }
}))

const resumeStyle = computed(() => {
  const p = timelineProgress(progress.value, 0.62, 1)
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [18, 0])}px)`,
  }
})
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <SectionHeading title="Experience" />

      <div ref="timelineRef" class="timeline">
        <TimelineSpine :milestones="experience.length" />
        <div
          v-for="(job, index) in experience"
          :key="job.id"
          class="timeline-item"
          :style="itemStyles[index]"
        >
          <div class="timeline-period">
            <span class="period-text">{{ job.period }}</span>
          </div>
          <div class="timeline-content">
            <h3 class="job-title">{{ job.designation }}</h3>
            <p class="job-company">{{ job.company }}<span v-if="job.location">, {{ job.location }}</span></p>
            <ul v-if="job.points?.length" class="job-highlights">
              <li v-for="point in job.points.slice(0, 3)" :key="point.id">
                {{ point.value }}
              </li>
            </ul>
            <div class="job-tags">
              <span v-for="tag in job.tags" :key="tag" class="job-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-cta" :style="resumeStyle">
        <a href="/files/Resume.pdf" download class="resume-link">
          <Download :size="16" />
          Download Full Resume (PDF)
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  position: relative;
}

.timeline-item {
  --milestone-scale: 1;
  --content-line: 1;

  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-xl);
  will-change: opacity, filter, transform;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xs);
  }
}

.timeline-period {
  padding-top: 2px;
}

.period-text {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  white-space: nowrap;
}

.timeline-content {
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--border);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.44), transparent);
    transform: scaleX(var(--content-line));
    transform-origin: left;
  }

  &::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    transform: scale(var(--milestone-scale));
    box-shadow: 0 0 0 calc(var(--milestone-scale) * 6px) rgba(var(--accent-rgb), 0.08);

    @media (max-width: 768px) {
      display: none;
    }
  }

  .timeline-item:last-child & {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.job-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.job-company {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.job-highlights {
  margin-bottom: var(--space-md);

  li {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.6;
    padding-left: var(--space-md);
    position: relative;
    margin-bottom: var(--space-xs);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 4px;
      height: 4px;
      background: var(--border);
      border-radius: 50%;
      transition: background-color 0.25s var(--dramatic), transform 0.25s var(--dramatic);
    }

    &:hover::before {
      background: var(--accent);
      transform: scale(1.35);
    }
  }
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.job-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.resume-cta {
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border);
  will-change: opacity, transform;
}

.resume-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 15px;
  font-weight: 500;
  color: var(--accent);
  transition: gap var(--transition-fast);

  &:hover {
    gap: var(--space-md);
    opacity: 1;
  }
}
</style>
