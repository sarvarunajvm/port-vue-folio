<template>
  <v-container
    id="skills"
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
            Technical Skills <span class="title-emoji">⚡</span>
          </h2>
          <p class="page-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
          <div class="divider"></div>
        </div>

        <!-- Skills Grid -->
        <div class="skills-grid">
          <div 
            v-for="(category, index) in skillsList" 
            :key="category.id"
            class="skill-category slide-up-item"
            :style="{ animationDelay: `${(index + 2) * 0.1}s` }"
          >
            <div class="category-header">
              <div class="category-icon">
                <v-icon size="24">{{ getCategoryIcon(category.title) }}</v-icon>
              </div>
              <h3 class="category-title">{{ category.title }}</h3>
              <span class="skill-count">{{ category.points.length }}</span>
            </div>

            <div class="skills-list">
              <div 
                v-for="skill in category.points" 
                :key="skill.id"
                class="skill-item"
              >
                <v-icon size="20" class="skill-icon">{{ skill.value }}</v-icon>
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Proficiency Legend -->
        <div class="legend slide-up-item" style="animation-delay: 0.8s">
          <div class="legend-item">
            <div class="legend-bar bar-expert"></div>
            <span>Primary Stack</span>
          </div>
          <div class="legend-item">
            <div class="legend-bar bar-proficient"></div>
            <span>Proficient</span>
          </div>
          <div class="legend-item">
            <div class="legend-bar bar-learning"></div>
            <span>Exploring</span>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import skillsJson from "@/data/skills.json";

const skillsList = skillsJson;

function getCategoryIcon(title) {
  const icons = {
    'Backend': 'mdi-server',
    'Frontend': 'mdi-monitor-dashboard',
    'Databases': 'mdi-database',
    'AI & ML': 'mdi-robot',
    'DevOps': 'mdi-cloud-cog',
    'Practices': 'mdi-puzzle'
  };
  return icons[title] || 'mdi-code-braces';
}
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
    radial-gradient(circle at 80% 20%, rgba(var(--v-theme-primary), 0.06) 0%, transparent 45%),
    radial-gradient(circle at 20% 80%, rgba(var(--v-theme-warning), 0.04) 0%, transparent 45%);
  pointer-events: none;
  z-index: 0;
}

/* ========================================
   HEADER
======================================== */
.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.75rem;
}

.title-emoji {
  display: inline-block;
  animation: zap 1.5s ease-in-out infinite;
}

@keyframes zap {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2) rotate(5deg); }
}

.page-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  max-width: 400px;
  margin: 0 auto 1.5rem;
}

.divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-warning)));
  border-radius: 2px;
  margin: 0 auto;
}

/* ========================================
   SKILLS GRID
======================================== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.skill-category {
  padding: 1.75rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-category:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 16px 40px rgba(var(--v-theme-primary), 0.1);
}

/* Category Header */
.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.category-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  flex: 1;
}

.skill-count {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  background: rgba(var(--v-theme-tertiary), 0.12);
  color: rgb(var(--v-theme-tertiary));
  border-radius: 100px;
}

/* Skills List */
.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  background: rgba(var(--v-theme-primary), 0.03);
  border-radius: 10px;
  transition: all 0.2s ease;
  cursor: default;
}

.skill-item:hover {
  background: rgba(var(--v-theme-primary), 0.08);
  transform: translateX(4px);
}

.skill-icon {
  color: rgb(var(--v-theme-primary));
  opacity: 0.8;
}

.skill-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(var(--v-theme-accent), 0.85);
}

/* ========================================
   LEGEND
======================================== */
.legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border-radius: 16px;
  border: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

.legend-bar {
  width: 24px;
  height: 6px;
  border-radius: 3px;
}

.bar-expert {
  background: rgb(var(--v-theme-primary));
}

.bar-proficient {
  background: rgba(var(--v-theme-primary), 0.5);
}

.bar-learning {
  background: rgba(var(--v-theme-primary), 0.25);
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

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-list {
    grid-template-columns: 1fr;
  }
  
  .legend {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .skill-category {
    padding: 1.25rem;
  }
  
  .category-icon {
    width: 38px;
    height: 38px;
  }
  
  .category-title {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .page-header {
    margin-bottom: 2.5rem;
  }
  
  .skill-item {
    padding: 0.5rem 0.6rem;
  }
  
  .skill-name {
    font-size: 0.8rem;
  }
  
  .skill-icon {
    font-size: 18px !important;
  }
  
  .legend-item {
    font-size: 0.75rem;
  }
}
</style>
