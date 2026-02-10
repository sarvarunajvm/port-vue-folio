<template>
  <v-container
    id="project"
    class="pa-4 pa-md-12 background"
    tag="section"
    fluid
  >
    <!-- Background Pattern -->
    <div class="background-overlay"></div>
    
    <v-row justify="center" class="position-relative" style="z-index: 1;">
      <v-col cols="12" md="10" lg="9">
        
        <!-- Header -->
        <div class="page-header slide-up-item" style="animation-delay: 0.1s">
          <h2 class="page-title">
            Projects <span class="title-emoji">🚀</span>
          </h2>
          <p class="page-subtitle">
            A collection of professional work and open source contributions
          </p>
          <div class="divider"></div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs slide-up-item" style="animation-delay: 0.2s">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            class="filter-btn"
            :class="{ active: activeFilter === filter.value }"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
            <span class="count">{{ getFilterCount(filter.value) }}</span>
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <TransitionGroup name="project-list">
            <div 
              v-for="(project, index) in filteredProjects" 
              :key="project.id"
              class="project-card slide-up-item"
              :class="{ 
                'card-featured': project.featured,
                [`category-${project.category}`]: true 
              }"
              :style="{ animationDelay: `${(index + 3) * 0.08}s` }"
            >
              <!-- Card Header -->
              <div class="card-header">
                <div class="project-icon">
                  <v-icon size="28">{{ getCategoryIcon(project.category) }}</v-icon>
                </div>
                <div class="card-badges">
                  <span v-if="project.featured" class="badge badge-featured">
                    <v-icon size="12">mdi-star</v-icon>
                    Featured
                  </span>
                  <span class="badge" :class="`badge-${project.status}`">
                    {{ project.status }}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="card-content">
                <div class="project-year">{{ project.year }}</div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-summary">{{ project.summary }}</p>
                
                <!-- Description (shown on hover/focus) -->
                <p class="project-description">{{ project.description }}</p>

                <!-- Impact Metrics -->
                <div v-if="project.impact && project.impact.length" class="impact-list">
                  <div 
                    v-for="(impact, i) in project.impact" 
                    :key="i"
                    class="impact-item"
                  >
                    <v-icon size="14" class="impact-icon">mdi-check-circle</v-icon>
                    <span>{{ impact }}</span>
                  </div>
                </div>

                <!-- Tech Tags -->
                <div class="tech-tags">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="tech-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Card Footer -->
              <div v-if="project.links" class="card-footer">
                <a 
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  class="link-btn"
                  @click.stop
                >
                  <v-icon size="18">mdi-github</v-icon>
                  <span>Code</span>
                </a>
                <a 
                  v-if="project.links.npm"
                  :href="project.links.npm"
                  target="_blank"
                  class="link-btn"
                  @click.stop
                >
                  <v-icon size="18">mdi-npm</v-icon>
                  <span>Package</span>
                </a>
                <a 
                  v-if="project.links.demo"
                  :href="project.links.demo"
                  target="_blank"
                  class="link-btn link-primary"
                  @click.stop
                >
                  <v-icon size="18">mdi-open-in-new</v-icon>
                  <span>Demo</span>
                </a>
              </div>

              <!-- Hover Gradient -->
              <div class="card-gradient"></div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Gists Section -->
        <div class="gists-section slide-up-item" style="animation-delay: 0.5s">
          <div class="section-header">
            <h3 class="section-title">
              <v-icon size="24" class="mr-2">mdi-code-braces</v-icon>
              Code Snippets & Gists
            </h3>
            <a 
              :href="`https://gist.github.com/${about.username}`" 
              target="_blank" 
              class="view-all-link"
            >
              View All Gists
              <v-icon size="14" class="ml-1">mdi-arrow-top-right</v-icon>
            </a>
          </div>

          <div v-if="gists.length" class="gists-grid">
            <gist-card 
              v-for="(gist, index) in gists.slice(0, 6)" 
              :key="gist.gistId"
              :item="gist"
              class="slide-up-item"
              :style="{ animationDelay: `${(index + 8) * 0.08}s` }"
            />
          </div>
          <div v-else class="gists-loading">
            <v-progress-circular indeterminate size="24" width="2"></v-progress-circular>
            <span>Loading gists...</span>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GistCard from "@/components/GistCard.vue";
import projectsData from "@/data/projects.json";
import aboutJson from "@/data/about.json";
import axios from "axios";

const about = aboutJson;

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Professional', value: 'professional' },
  { label: 'Open Source', value: 'opensource' },
];

const activeFilter = ref('all');
const gists = ref([]);

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projectsData;
  }
  return projectsData.filter(p => p.category === activeFilter.value);
});

function getFilterCount(filter) {
  if (filter === 'all') return projectsData.length;
  return projectsData.filter(p => p.category === filter).length;
}

function getCategoryIcon(category) {
  const icons = {
    professional: 'mdi-briefcase-outline',
    opensource: 'mdi-source-branch',
    personal: 'mdi-account-circle-outline'
  };
  return icons[category] || 'mdi-folder-outline';
}

async function fetchGists() {
  try {
    const response = await axios.get(`https://api.github.com/users/${about.username}/gists`);
    gists.value = response.data
      .filter(g => g.public)
      .map(element => {
        const files = element.files[Object.keys(element.files)[0]];
        return {
          gistId: element.id,
          description: element.description,
          title: files.filename,
          language: files.language,
        };
      });
  } catch (error) {
    console.error('Failed to fetch gists:', error);
  }
}

onMounted(() => {
  fetchGists();
});
</script>

<style scoped>
/* ========================================
   BACKGROUND
======================================== */
.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 85% 15%, rgba(var(--v-theme-primary), 0.06) 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, rgba(var(--v-theme-tertiary), 0.04) 0%, transparent 45%);
  pointer-events: none;
  z-index: 0;
}

/* ========================================
   HEADER
======================================== */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.75rem;
}

.title-emoji {
  display: inline-block;
  animation: rocket 2s ease-in-out infinite;
}

@keyframes rocket {
  0%, 100% { transform: translateY(0) rotate(-10deg); }
  50% { transform: translateY(-5px) rotate(10deg); }
}

.page-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  max-width: 480px;
  margin: 0 auto 1.5rem;
}

.divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-tertiary)));
  border-radius: 2px;
  margin: 0 auto;
}

/* ========================================
   FILTER TABS
======================================== */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(var(--v-theme-primary), 0.05);
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-accent));
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  background: rgba(var(--v-theme-primary), 0.1);
  border-color: rgba(var(--v-theme-primary), 0.2);
}

.filter-btn.active {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-background));
  border-color: transparent;
}

.filter-btn .count {
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 100px;
}

.filter-btn.active .count {
  background: rgba(255, 255, 255, 0.25);
}

/* ========================================
   PROJECTS GRID
======================================== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 20px 50px rgba(var(--v-theme-primary), 0.12);
}

.project-card:hover .card-gradient {
  opacity: 1;
}

.project-card:hover .project-description {
  max-height: 100px;
  opacity: 1;
  margin-bottom: 1rem;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.04) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-featured {
  border-color: rgba(var(--v-theme-primary), 0.2);
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-warning)));
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(var(--v-theme-primary), 0.08);
  color: rgb(var(--v-theme-primary));
}

.card-badges {
  display: flex;
  gap: 0.5rem;
}

.badge {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.badge-featured {
  background: rgba(var(--v-theme-warning), 0.15);
  color: rgb(var(--v-theme-warning));
}

.badge-active {
  background: rgba(76, 175, 80, 0.12);
  color: #4CAF50;
}

.badge-shipped {
  background: rgba(33, 150, 243, 0.12);
  color: #2196F3;
}

.badge-contributed {
  background: rgba(156, 39, 176, 0.12);
  color: #9C27B0;
}

/* Card Content */
.card-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.project-year {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.project-summary {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 0.85rem;
  line-height: 1.6;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  color: rgba(var(--v-theme-accent), 0.65);
}

.impact-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(var(--v-theme-success));
}

.impact-icon {
  color: rgb(var(--v-theme-success));
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.6rem;
  background: rgba(var(--v-theme-secondary), 0.08);
  border-radius: 6px;
  opacity: 0.75;
}

/* Card Footer */
.card-footer {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
  position: relative;
  z-index: 1;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.875rem;
  background: rgba(var(--v-theme-primary), 0.06);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(var(--v-theme-accent));
  text-decoration: none;
  transition: all 0.2s ease;
}

.link-btn:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  transform: translateY(-2px);
}

.link-primary {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-background));
}

.link-primary:hover {
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 4px 15px rgba(var(--v-theme-primary), 0.3);
}

/* ========================================
   GISTS SECTION
======================================== */
.gists-section {
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.08);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-accent));
  display: flex;
  align-items: center;
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

.gists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.gists-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  opacity: 0.6;
}

/* ========================================
   ANIMATIONS
======================================== */
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-item {
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

/* Transition Group */
.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.4s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.project-list-leave-active {
  position: absolute;
}

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
