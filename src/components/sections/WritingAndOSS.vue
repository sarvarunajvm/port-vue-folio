<script setup>
import { ArrowUpRight, Github } from 'lucide-vue-next'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { useBlogPosts } from '@/composables/useBlogPosts'
import projects from '@/data/projects.json'
import about from '@/data/about.json'

const { posts, loading } = useBlogPosts()

const ossProjects = projects
  .filter((p) => p.category === 'opensource' && p.links?.github)
  .slice(0, 3)
</script>

<template>
  <section id="writing" class="section">
    <div class="container">
      <SectionHeading title="Writing & Open Source" />

      <div class="writing-grid">
        <!-- Blog Posts -->
        <div class="writing-col reveal">
          <h3 class="col-heading">Latest Articles</h3>

          <div v-if="loading" class="loading-skeleton">
            <div v-for="n in 3" :key="n" class="skeleton-item">
              <div class="skeleton-line skeleton-short" />
              <div class="skeleton-line skeleton-long" />
            </div>
          </div>

          <div v-else class="posts-list">
            <a
              v-for="post in posts"
              :key="post.id"
              :href="post.url"
              target="_blank"
              rel="noopener noreferrer"
              class="post-item"
            >
              <span class="post-meta text-label">Dev.to &middot; {{ post.readingTime }} min read</span>
              <span class="post-title">{{ post.title }}</span>
              <ArrowUpRight :size="14" class="post-arrow" />
            </a>
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
        <div class="writing-col reveal reveal-delay-1">
          <h3 class="col-heading">Open Source</h3>

          <div class="oss-list">
            <a
              v-for="project in ossProjects"
              :key="project.id"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="oss-item"
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
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-md);
  border-radius: var(--radius-md);
  position: relative;
  transition: background-color var(--transition-fast),
              transform 0.2s ease;

  &:hover {
    background: var(--surface);
    opacity: 1;
    transform: translateX(4px);
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

// Open Source
.oss-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.oss-item {
  padding: var(--space-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color 0.3s ease,
              box-shadow 0.3s ease,
              transform 0.2s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.06);
    transform: translateY(-1px);
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
