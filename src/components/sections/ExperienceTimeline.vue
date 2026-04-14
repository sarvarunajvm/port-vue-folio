<script setup>
import { ref } from 'vue'
import { Download } from 'lucide-vue-next'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import TimelineSpine from '@/components/svg/TimelineSpine.vue'
import experience from '@/data/experience.json'

const timelineRef = ref(null)
useScrollEntrance(timelineRef, { distance: 600 })
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
          :class="['timeline-item', 'reveal', `reveal-delay-${index + 1}`]"
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

      <div class="resume-cta reveal">
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
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-xl);

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

  &::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

    .revealed & {
      transform: scale(1);
    }

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
