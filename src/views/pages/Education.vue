<template>
  <v-container
    id="education"
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
            Education <span class="title-emoji">🎓</span>
          </h2>
          <p class="page-subtitle">
            Academic background and qualifications
          </p>
          <div class="divider"></div>
        </div>

        <!-- Education Timeline -->
        <div class="education-timeline">
          <div 
            v-for="(education, index) in educations" 
            :key="education.id"
            class="timeline-item slide-up-item"
            :style="{ animationDelay: `${(index + 2) * 0.15}s` }"
          >
            <!-- Timeline Marker -->
            <div class="timeline-marker">
              <div class="marker-icon">
                <v-icon size="24">mdi-school</v-icon>
              </div>
              <div v-if="index < educations.length - 1" class="marker-line"></div>
            </div>

            <!-- Education Card -->
            <div class="education-card">
              <div class="card-header">
                <div class="header-info">
                  <h3 class="degree-title">{{ education.degree }}</h3>
                  <div class="college-name">
                    <v-icon size="16" class="mr-1">mdi-domain</v-icon>
                    {{ education.college }}
                  </div>
                </div>
                <span class="period-badge">{{ education.period }}</span>
              </div>

              <div class="card-content">
                <div 
                  v-for="point in education.points" 
                  :key="point.id"
                  class="achievement-item"
                >
                  <v-icon size="14" class="achievement-icon">mdi-check-decagram</v-icon>
                  <span v-html="formatPoint(point.value)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications Section (if needed in future) -->
        <div class="certifications-section slide-up-item" style="animation-delay: 0.5s">
          <div class="cert-header">
            <v-icon size="20" class="mr-2">mdi-certificate</v-icon>
            <span>Continuous Learning</span>
          </div>
          <p class="cert-text">
            Committed to staying current with emerging technologies through courses, 
            certifications, and hands-on experimentation.
          </p>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import educationJson from "@/data/education.json";

const educations = educationJson;

function formatPoint(value) {
  // Remove the leading "-> " if present and clean up the text
  return value.replace(/^->\s*/, '').replace(/<br\/>/g, ' ');
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
    radial-gradient(circle at 80% 20%, rgba(var(--v-theme-primary), 0.05) 0%, transparent 45%),
    radial-gradient(circle at 20% 80%, rgba(var(--v-theme-tertiary), 0.04) 0%, transparent 45%);
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
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
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
.education-timeline {
  max-width: 700px;
  margin: 0 auto;
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
}

.marker-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--v-theme-primary), 0.1);
  border: 3px solid rgba(var(--v-theme-primary), 0.2);
  color: rgb(var(--v-theme-primary));
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
  min-height: 40px;
}

/* ========================================
   EDUCATION CARD
======================================== */
.education-card {
  flex: 1;
  padding: 1.75rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.education-card:hover {
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
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.header-info {
  flex: 1;
}

.degree-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.college-name {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
}

.period-badge {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 100px;
  color: rgb(var(--v-theme-primary));
  white-space: nowrap;
}

/* Card Content */
.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(var(--v-theme-accent), 0.85);
}

.achievement-icon {
  color: rgb(var(--v-theme-success));
  flex-shrink: 0;
  margin-top: 3px;
}

/* ========================================
   CERTIFICATIONS
======================================== */
.certifications-section {
  max-width: 700px;
  margin: 3rem auto 0;
  padding: 1.5rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.06);
  border-radius: 16px;
  text-align: center;
}

.cert-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 0.75rem;
}

.cert-text {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.7;
  max-width: 500px;
  margin: 0 auto;
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
@media (max-width: 600px) {
  .timeline-marker {
    display: none;
  }
  
  .timeline-item {
    gap: 0;
  }
  
  .card-header {
    flex-direction: column;
  }
  
  .period-badge {
    align-self: flex-start;
  }
}
</style>
