<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Tag from '@/components/shared/Tag.vue'
import CaseStudyFlowDiagram from '@/components/svg/CaseStudyFlowDiagram.vue'
import SvgCtaArrow from '@/components/svg/SvgCtaArrow.vue'
import projects from '@/data/projects.json'

useScrollReveal()

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find((p) => p.id === route.params.slug)
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <main v-if="project" class="case-study">
    <div class="container">
      <!-- Back link -->
      <button class="back-link reveal" @click="goBack">
        <ArrowLeft :size="16" class="back-icon" />
        Back to home
      </button>

      <!-- Header -->
      <header class="case-header reveal reveal-delay-1">
        <span class="case-label text-label">
          {{ project.category === 'professional' ? project.tags?.[0] || 'Professional' : 'Open Source' }}
          &middot; {{ project.year }}
        </span>
        <h1 class="case-title text-h1">{{ project.title }}</h1>
        <p class="case-subtitle">{{ project.summary }}</p>
      </header>

      <!-- Overview quick-scan -->
      <div class="case-overview reveal reveal-delay-2">
        <div class="overview-grid">
          <div v-if="project.category === 'professional'" class="overview-item">
            <span class="overview-label text-label">Role</span>
            <span class="overview-value">Senior Software Engineer</span>
          </div>
          <div class="overview-item">
            <span class="overview-label text-label">Status</span>
            <span class="overview-value">{{ project.status }}</span>
          </div>
          <div v-if="project.impact?.length" class="overview-item">
            <span class="overview-label text-label">Impact</span>
            <span v-for="item in project.impact" :key="item" class="overview-value">{{ item }}</span>
          </div>
          <div class="overview-item">
            <span class="overview-label text-label">Stack</span>
            <div class="overview-tags">
              <Tag v-for="tag in project.tags" :key="tag" :text="tag" />
            </div>
          </div>
        </div>
      </div>

      <CaseStudyFlowDiagram :tags="project.tags || []" />

      <!-- Description -->
      <div class="case-body reveal reveal-delay-3">
        <h2 class="text-h2">About this project</h2>
        <p>{{ project.description }}</p>

        <div v-if="project.impact?.length" class="impact-section">
          <h3 class="text-h3">Key Outcomes</h3>
          <ul class="impact-list">
            <li v-for="item in project.impact" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Links -->
      <div v-if="project.links" class="case-links reveal reveal-delay-4">
        <a
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="case-link-btn svg-cta"
        >
          View on GitHub <SvgCtaArrow />
        </a>
        <a
          v-if="project.links.npm"
          :href="project.links.npm"
          target="_blank"
          rel="noopener noreferrer"
          class="case-link-btn svg-cta"
        >
          View on npm <SvgCtaArrow />
        </a>
        <a
          v-if="project.links.demo"
          :href="project.links.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="case-link-btn svg-cta"
        >
          Live Demo <SvgCtaArrow />
        </a>
      </div>
    </div>
  </main>

  <!-- 404 fallback -->
  <main v-else class="case-study">
    <div class="container">
      <button class="back-link" @click="goBack">
        <ArrowLeft :size="16" class="back-icon" />
        Back to home
      </button>
      <h1 class="text-h1" style="margin-top: var(--space-xl)">Project not found</h1>
      <p class="text-secondary" style="margin-top: var(--space-md)">
        The case study you're looking for doesn't exist.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.case-study {
  padding-top: calc(var(--nav-height) + var(--space-xl));
  padding-bottom: var(--space-3xl);
  min-height: 100vh;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  transition: color var(--transition-fast), gap 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    color: var(--accent);
    gap: var(--space-md);
  }
}

.back-icon {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  .back-link:hover & {
    transform: translateX(-3px);
  }
}

.case-header {
  margin-bottom: var(--space-xl);
}

.case-label {
  display: block;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.case-title {
  margin-bottom: var(--space-md);
}

.case-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 640px;
  line-height: 1.6;
}

// Overview
.case-overview {
  padding: var(--space-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-xl);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.overview-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.overview-label {
  color: var(--text-secondary);
}

.overview-value {
  font-size: 15px;
  color: var(--text-primary);
  text-transform: capitalize;
}

.overview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

// Body
.case-body {
  max-width: 720px;
  margin-bottom: var(--space-xl);

  h2 {
    margin-bottom: var(--space-lg);
  }

  h3 {
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-lg);
  }
}

.impact-list {
  li {
    font-size: 16px;
    color: var(--text-secondary);
    padding: var(--space-sm) 0;
    padding-left: var(--space-lg);
    position: relative;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--text-primary);
    }

    &::before {
      content: '↑';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 14px;
    }
  }
}

// Links
.case-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.case-link-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition: all 0.35s var(--dramatic);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.5);
    color: var(--accent);
    box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.1);
    transform: translateY(-2px);
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
    transition-duration: 100ms;
  }
}
</style>
