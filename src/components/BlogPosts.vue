<template>
  <div class="blog-posts">
    <div class="section-header">
      <span class="section-label">Latest Articles</span>
      <a 
        :href="`https://dev.to/${username}`" 
        target="_blank" 
        class="view-all-link"
      >
        View All
        <v-icon size="14" class="ml-1">mdi-arrow-right</v-icon>
      </a>
    </div>

    <div v-if="loading" class="loading-state">
      <div v-for="i in 3" :key="i" class="loading-card">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>

    <div v-else-if="posts.length === 0" class="empty-state">
      <v-icon size="32" class="mb-2 opacity-50">mdi-post-outline</v-icon>
      <p>No articles found</p>
    </div>

    <div v-else class="posts-grid">
      <a 
        v-for="(post, index) in posts.slice(0, 3)" 
        :key="post.id"
        :href="post.url"
        target="_blank"
        class="post-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div v-if="post.cover_image" class="post-image">
          <img :src="post.cover_image" :alt="post.title" loading="lazy" />
        </div>
        <div v-else class="post-image placeholder">
          <v-icon size="32">mdi-post</v-icon>
        </div>

        <div class="post-content">
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.published_at) }}</span>
            <span class="post-reading">{{ post.reading_time_minutes }} min read</span>
          </div>

          <h3 class="post-title">{{ post.title }}</h3>

          <p class="post-description">{{ post.description }}</p>

          <div v-if="post.tag_list && post.tag_list.length" class="post-tags">
            <span 
              v-for="tag in post.tag_list.slice(0, 3)" 
              :key="tag"
              class="tag"
            >
              #{{ tag }}
            </span>
          </div>

          <div class="post-stats">
            <span class="stat">
              <v-icon size="14">mdi-heart-outline</v-icon>
              {{ post.positive_reactions_count }}
            </span>
            <span class="stat">
              <v-icon size="14">mdi-comment-outline</v-icon>
              {{ post.comments_count }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  username: {
    type: String,
    required: true
  }
});

const posts = ref([]);
const loading = ref(true);

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

async function fetchPosts() {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${props.username}&per_page=3`);
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error('Failed to fetch dev.to posts:', error);
    posts.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.blog-posts {
  width: 100%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-all-link:hover {
  transform: translateX(4px);
}

.loading-state,
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.loading-card {
  padding: 1rem;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.skeleton {
  background: linear-gradient(
    90deg,
    rgba(var(--v-theme-primary), 0.05) 25%,
    rgba(var(--v-theme-primary), 0.1) 50%,
    rgba(var(--v-theme-primary), 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;
}

.skeleton-image {
  height: 120px;
  margin-bottom: 1rem;
}

.skeleton-title {
  height: 20px;
  width: 80%;
  margin-bottom: 0.5rem;
}

.skeleton-text {
  height: 14px;
  width: 60%;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  opacity: 0.6;
}

.post-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.post-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 12px 40px rgba(var(--v-theme-primary), 0.1);
}

.post-image {
  height: 140px;
  overflow: hidden;
  background: rgba(var(--v-theme-primary), 0.05);
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-image.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--v-theme-primary));
  opacity: 0.3;
}

.post-content {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  opacity: 0.6;
  margin-bottom: 0.75rem;
}

.post-title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  color: rgb(var(--v-theme-accent));
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-description {
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.7rem;
  color: rgb(var(--v-theme-primary));
  opacity: 0.7;
}

.post-stats {
  display: flex;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.6;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Responsive */
@media (max-width: 600px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>

