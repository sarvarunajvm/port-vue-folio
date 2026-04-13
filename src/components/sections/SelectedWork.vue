<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import Tag from '@/components/shared/Tag.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import projects from '@/data/projects.json'

const router = useRouter()
const featured = projects.filter((p) => p.featured).slice(0, 4)
const workListRef = ref(null)
const { progress } = useScrollEntrance(workListRef, { distance: 500 })

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

const cardStyle = (index) => {
  return computed(() => {
    const p = clamp((progress.value - index * 0.15) / 0.25, 0, 1)
    return {
      opacity: p,
      transform: `translateY(${(1 - p) * 40}px)`,
    }
  })
}

const cardStyles = featured.map((_, i) => cardStyle(i))

const navigateToCase = (slug) => {
  router.push(`/work/${slug}`)
}
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <SectionHeading title="Selected Work" />

      <div ref="workListRef" class="work-list">
        <article
          v-for="(project, index) in featured"
          :key="project.id"
          class="work-card"
          :style="cardStyles[index].value"
          tabindex="0"
          role="link"
          @click="navigateToCase(project.id)"
          @keydown.enter="navigateToCase(project.id)"
        >
          <div class="work-card-inner">
            <div class="work-card-accent" aria-hidden="true" />

            <div class="work-card-header">
              <span class="work-label text-label">
                {{ project.category === 'professional' ? project.tags?.[0] || 'Professional' : 'Open Source' }}
                &middot; {{ project.year }}
              </span>
            </div>

            <h3 class="work-title text-h3">{{ project.title }}</h3>

            <p class="work-summary">{{ project.summary }}</p>

            <div v-if="project.impact?.length" class="work-impact">
              <span v-for="item in project.impact" :key="item" class="impact-item">
                {{ item }}
              </span>
            </div>

            <div class="work-footer">
              <div class="work-tags">
                <Tag v-for="tag in project.tags?.slice(0, 4)" :key="tag" :text="tag" />
              </div>
              <span class="work-cta">
                Read more <ArrowRight :size="14" />
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.work-card {
  position: relative;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  cursor: pointer;
  overflow: hidden;
  will-change: transform, opacity;
  transition: border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover,
  &:focus-visible {
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08),
                0 0 0 1px rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
    outline: none;
  }

  &:active {
    transform: translateY(0);
    transition-duration: 100ms;
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.work-card-inner {
  padding: var(--space-lg);
  position: relative;

  @media (min-width: 769px) {
    padding: var(--space-xl);
  }
}

// Subtle accent line on left edge, reveals on hover
.work-card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  .work-card:hover & {
    transform: scaleY(1);
    transform-origin: top;
  }
}

.work-label {
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  display: block;
}

.work-title {
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  transition: color var(--transition-fast);

  .work-card:hover & {
    color: var(--accent);
  }
}

.work-summary {
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: var(--space-md);
}

.work-impact {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.impact-item {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  padding: 4px 0;

  &::before {
    content: '↑ ';
    opacity: 0.6;
  }
}

.work-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.work-cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  transition: gap 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  .work-card:hover & {
    gap: 10px;
  }
}
</style>
