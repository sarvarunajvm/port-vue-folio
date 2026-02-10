<template>
  <div class="featured-projects">
    <div class="section-header">
      <span class="section-label">Featured Work</span>
      <router-link to="/home/projects" class="view-all-link">
        View All
        <v-icon size="14" class="ml-1">mdi-arrow-right</v-icon>
      </router-link>
    </div>

    <div class="projects-grid">
      <div 
        v-for="(project, index) in featuredProjects" 
        :key="project.id"
        class="project-card"
        :class="{ 'card-featured': project.featured }"
        :style="{ animationDelay: `${index * 0.15}s` }"
        @click="openProject(project)"
      >
        <div class="card-content">
          <div class="card-header">
            <div class="project-icon">
              <v-icon size="24">{{ getProjectIcon(project.category) }}</v-icon>
            </div>
            <div class="project-status" :class="`status-${project.status}`">
              {{ project.status }}
            </div>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-summary">{{ project.summary }}</p>

          <div v-if="project.impact && project.impact.length" class="project-impact">
            <div 
              v-for="(metric, i) in project.impact.slice(0, 2)" 
              :key="i"
              class="impact-badge"
            >
              <v-icon size="12" class="mr-1">mdi-trending-up</v-icon>
              {{ metric }}
            </div>
          </div>

          <div class="project-tags">
            <span 
              v-for="tag in project.tags.slice(0, 4)" 
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div v-if="project.links" class="card-footer">
          <a 
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            class="card-link"
            @click.stop
          >
            <v-icon size="18">mdi-github</v-icon>
          </a>
          <a 
            v-if="project.links.npm"
            :href="project.links.npm"
            target="_blank"
            class="card-link"
            @click.stop
          >
            <v-icon size="18">mdi-npm</v-icon>
          </a>
          <a 
            v-if="project.links.demo"
            :href="project.links.demo"
            target="_blank"
            class="card-link"
            @click.stop
          >
            <v-icon size="18">mdi-open-in-new</v-icon>
          </a>
        </div>

        <!-- Gradient overlay for visual interest -->
        <div class="card-gradient"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import projectsData from '../data/projects.json';

const featuredProjects = computed(() => {
  return projectsData.filter(p => p.featured).slice(0, 3);
});

function getProjectIcon(category) {
  const icons = {
    opensource: 'mdi-source-branch',
    professional: 'mdi-briefcase',
    personal: 'mdi-account-circle'
  };
  return icons[category] || 'mdi-folder';
}

function openProject(project) {
  if (project.links?.github) {
    window.open(project.links.github, '_blank');
  }
}
</script>

<style scoped>
.featured-projects {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 12px 40px rgba(var(--v-theme-primary), 0.1);
}

.project-card:hover .card-gradient {
  opacity: 1;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.03) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
}

.project-status {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.status-active {
  background: rgba(76, 175, 80, 0.15);
  color: #4CAF50;
}

.status-shipped {
  background: rgba(33, 150, 243, 0.15);
  color: #2196F3;
}

.status-contributed {
  background: rgba(156, 39, 176, 0.15);
  color: #9C27B0;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgb(var(--v-theme-accent));
}

.project-summary {
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.75;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-impact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.impact-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(var(--v-theme-success), 0.1);
  color: rgb(var(--v-theme-success));
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(var(--v-theme-secondary), 0.08);
  opacity: 0.7;
}

.card-footer {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
  position: relative;
  z-index: 1;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(var(--v-theme-primary), 0.05);
  color: rgb(var(--v-theme-primary));
  transition: all 0.2s ease;
}

.card-link:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  transform: translateY(-2px);
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

/* Responsive */
@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

