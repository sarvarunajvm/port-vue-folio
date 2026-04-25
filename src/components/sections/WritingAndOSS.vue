<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Github } from 'lucide-vue-next'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import { interpolate, timelineProgress } from '@/composables/useTimelineMotion'
import projects from '@/data/projects.json'
import about from '@/data/about.json'

const { posts, loading } = useBlogPosts()
const writingRef = ref(null)
const { progress } = useScrollEntrance(writingRef, { distance: 620 })

const ossProjects = projects
  .filter((p) => p.category === 'opensource' && p.links?.github)
  .slice(0, 3)

const columnStyle = (index) => {
  const p = timelineProgress(progress.value, index * 0.14, 0.48 + index * 0.14)
  return {
    opacity: p,
    transform: `translate3d(${interpolate(p, [0, 1], [index === 0 ? -28 : 28, 0])}px, ${interpolate(p, [0, 1], [24, 0])}px, 0)`,
    filter: `blur(${interpolate(p, [0, 1], [7, 0])}px)`,
  }
}

const itemStyle = (index, offset = 0.2) => {
  const p = timelineProgress(progress.value, offset + index * 0.08, offset + 0.34 + index * 0.08)
  return {
    opacity: p,
    '--item-y': `${interpolate(p, [0, 1], [16, 0])}px`,
  }
}
</script>

<template>
  <section id="writing" ref="writingRef" class="section">
    <div class="container">
      <SectionHeading title="Writing & Open Source" />

      <div class="writing-grid">
        <!-- Blog Posts -->
        <div class="writing-col" :style="columnStyle(0)">
          <h3 class="col-heading">Latest Articles</h3>

          <div v-if="loading" class="loading-skeleton">
            <div v-for="n in 3" :key="n" class="skeleton-item">
              <div class="skeleton-line skeleton-short" />
              <div class="skeleton-line skeleton-long" />
            </div>
          </div>

          <div v-else-if="posts.length" class="posts-list">
            <a
              v-for="(post, index) in posts"
              :key="post.id"
              v-glow-follow
              :href="post.url"
              target="_blank"
              rel="noopener noreferrer"
              class="post-item"
              :style="itemStyle(index)"
            >
              <span class="post-meta text-label">Dev.to &middot; {{ post.readingTime }} min read</span>
              <span class="post-title">{{ post.title }}</span>
              <ArrowUpRight :size="14" class="post-arrow" />
            </a>
          </div>

          <div v-else class="posts-empty">
            <p class="posts-empty-text">Articles coming soon. In the meantime, check out my open-source work.</p>
          </div>

          <a
            :href="about.social.devto"
            target="_blank"
            rel="noopener noreferrer"
            class="section-link"
          >
            All articles on Dev.to <ArrowUpRight :size="14" />
          </a>
        </div>

        <!-- Open Source -->
        <div class="writing-col" :style="columnStyle(1)">
          <h3 class="col-heading">Open Source</h3>

          <div class="oss-list">
            <a
              v-for="(project, index) in ossProjects"
              :key="project.id"
              v-glow-follow
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="oss-item"
              :style="itemStyle(index, 0.28)"
            >
              <div class="oss-header">
                <Github :size="16" />
                <span class="oss-name">{{ project.title }}</span>
                <ArrowUpRight :size="12" class="oss-arrow" />
              </div>
              <p class="oss-desc">{{ project.summary }}</p>
              <div class="oss-meta">
                <span v-for="tag in project.tags?.slice(0, 2)" :key="tag" class="oss-tag">{{ tag }}</span>
              </div>
            </a>
          </div>

          <a
            :href="about.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="section-link"
          >
            GitHub Profile <ArrowUpRight :size="14" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.writing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
}

.writing-col {
  will-change: opacity, filter, transform;
}

.col-heading {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border);
}

// Blog posts
.posts-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.post-item {
  --item-y: 0px;

  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-md);
  border-radius: var(--radius-md);
  position: relative;
  transform: translate3d(0, var(--item-y), 0);
  will-change: opacity, transform;
  transition: background-color var(--transition-fast),
              transform 0.2s ease;

  &:hover {
    background: var(--surface);
    opacity: 1;
    transform: translate3d(4px, var(--item-y), 0);
  }
}

.post-arrow {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  color: var(--text-secondary);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity var(--transition-fast),
              transform var(--transition-fast);

  .post-item:hover & {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.post-meta {
  color: var(--text-secondary);
  font-size: 11px;
}

.post-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.4;
  padding-right: var(--space-lg);
}

// Loading skeleton
.loading-skeleton {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.skeleton-item {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.skeleton-line {
  height: 14px;
  background: var(--surface);
  border-radius: var(--radius-sm);
  animation: skeleton-pulse 1.5s ease infinite;
}

.skeleton-short {
  width: 40%;
  height: 10px;
}

.skeleton-long {
  width: 85%;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

.posts-empty {
  padding: var(--space-lg) var(--space-md);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
}

.posts-empty-text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

// Open Source
.oss-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.oss-item {
  --item-y: 0px;

  padding: var(--space-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transform: translate3d(0, var(--item-y), 0);
  will-change: opacity, transform;
  transition: border-color 0.35s var(--dramatic),
              box-shadow 0.35s var(--dramatic),
              transform 0.3s var(--spring);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.4);
    box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.06);
    transform: translate3d(0, calc(var(--item-y) - 2px), 0);
    opacity: 1;
  }
}

.oss-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  color: var(--text-primary);
}

.oss-name {
  font-size: 15px;
  font-weight: 600;
  flex: 1;
}

.oss-arrow {
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity var(--transition-fast),
              transform var(--transition-fast);

  .oss-item:hover & {
    opacity: 0.5;
    transform: translate(0, 0);
  }
}

.oss-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.oss-meta {
  display: flex;
  gap: var(--space-sm);
}

.oss-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
}

// Shared section link
.section-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  transition: gap 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    gap: 8px;
    opacity: 1;
  }
}
</style>
