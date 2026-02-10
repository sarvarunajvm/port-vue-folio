<template>
  <v-container
    id="experience"
    class="pa-4 pa-md-12 background"
    tag="section"
    fluid
  >
    <!-- Background Pattern -->
    <div class="background-overlay"></div>
    
    <v-row justify="center" class="position-relative" style="z-index: 1;">
      <v-col cols="12" md="10" lg="8">
        
        <!-- Header -->
        <div class="page-header slide-up-item" style="animation-delay: 0.1s">
          <h2 class="page-title">
            Work Experience <span class="title-emoji">💼</span>
          </h2>
          <p class="page-subtitle">
            {{ totalYears }}+ years building reliable systems at scale
          </p>
          <div class="divider"></div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <div 
            v-for="(experience, index) in experiences" 
            :key="experience.id"
            class="timeline-item slide-up-item"
            :style="{ animationDelay: `${(index + 2) * 0.1}s` }"
          >
            <!-- Timeline Marker -->
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div v-if="index < experiences.length - 1" class="marker-line"></div>
            </div>

            <!-- Timeline Content -->
            <div class="timeline-content">
              <div class="experience-card">
                <!-- Card Header -->
                <div class="card-header">
                  <div class="header-left">
                    <div class="company-badge">
                      <v-icon size="20">mdi-office-building</v-icon>
                    </div>
                    <div class="header-info">
                      <h3 class="job-title">{{ experience.designation }}</h3>
                      <div class="company-name">{{ experience.company }}</div>
                    </div>
                  </div>
                  <div class="header-right">
                    <span class="period-badge">{{ experience.period }}</span>
                    <span v-if="experience.location" class="location">
                      <v-icon size="14">mdi-map-marker</v-icon>
                      {{ experience.location }}
                    </span>
                  </div>
                </div>

                <!-- Achievements -->
                <div class="achievements">
                  <div 
                    v-for="point in experience.points" 
                    :key="point.id"
                    class="achievement-item"
                  >
                    <v-icon size="16" class="achievement-icon">mdi-check-circle</v-icon>
                    <span v-html="point.value"></span>
                  </div>
                </div>

                <!-- Tech Stack -->
                <div v-if="experience.tags && experience.tags.length" class="tech-stack">
                  <span 
                    v-for="tag in experience.tags" 
                    :key="tag"
                    class="tech-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import experienceJson from "@/data/experience.json";

const experiences = experienceJson;

const totalYears = computed(() => {
  // Calculate from 2014 to current year
  return new Date().getFullYear() - 2014;
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
    radial-gradient(circle at 10% 20%, rgba(var(--v-theme-primary), 0.05) 0%, transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(var(--v-theme-tertiary), 0.04) 0%, transparent 45%);
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
  animation: swing 2s ease-in-out infinite;
}

@keyframes swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
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
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-tertiary)));
  border-radius: 2px;
  margin: 0 auto;
}

/* ========================================
   TIMELINE
======================================== */
.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Timeline Marker */
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  border: 3px solid rgba(var(--v-theme-primary), 0.2);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(
    to bottom,
    rgba(var(--v-theme-primary), 0.3) 0%,
    rgba(var(--v-theme-primary), 0.1) 100%
  );
  margin-top: 8px;
}

/* Timeline Content */
.timeline-content {
  flex: 1;
  padding-bottom: 1rem;
}

/* ========================================
   EXPERIENCE CARD
======================================== */
.experience-card {
  padding: 1.75rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 16px 40px rgba(var(--v-theme-primary), 0.1);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.header-left {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.company-badge {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  flex-shrink: 0;
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.job-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  line-height: 1.3;
}

.company-name {
  font-size: 1rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.period-badge {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 100px;
  color: rgb(var(--v-theme-primary));
}

.location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  opacity: 0.6;
}

/* Achievements */
.achievements {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(var(--v-theme-accent), 0.85);
}

.achievement-icon {
  color: rgb(var(--v-theme-success));
  flex-shrink: 0;
  margin-top: 2px;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.tech-tag {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  background: rgba(var(--v-theme-tertiary), 0.12);
  color: rgb(var(--v-theme-tertiary));
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
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
  .card-header {
    flex-direction: column;
  }
  
  .header-right {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .timeline-marker {
    display: none;
  }
  
  .timeline-item {
    gap: 0;
  }
  
  .experience-card {
    padding: 1.25rem;
  }
  
  .job-title {
    font-size: 1.1rem;
  }
  
  .company-name {
    font-size: 0.9rem;
  }
  
  .tech-stack {
    gap: 0.4rem;
  }
  
  .tech-tag {
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
  }
}

@media (max-width: 400px) {
  .company-badge {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  
  .company-badge .v-icon {
    font-size: 18px !important;
  }
  
  .header-left {
    gap: 0.75rem;
  }
  
  .job-title {
    font-size: 1rem;
  }
  
  .period-badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
  
  .achievement-item {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
  
  .page-header {
    margin-bottom: 2.5rem;
  }
}
</style>
