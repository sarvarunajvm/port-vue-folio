<template>
  <v-container
    id="home"
    class="pa-0 ma-0"
    tag="section"
    fluid
  >
    <!-- Animated Background -->
    <div class="background-canvas">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="grid-pattern"></div>
    </div>

    <!-- Main Content -->
    <v-row class="ma-0" justify="center">
      <v-col cols="12" md="10" lg="8" xl="7" class="px-4 px-md-8">
        
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-content">
            <!-- Greeting & Status -->
            <div class="status-badge slide-up" style="animation-delay: 0.1s">
              <span class="status-dot"></span>
              <span>Available for opportunities</span>
            </div>

            <!-- Name -->
            <h1 class="hero-name slide-up" style="animation-delay: 0.2s">
              <span class="name-first">{{ about.firstname }}</span>
              <span class="name-last">{{ about.lastname }}</span>
            </h1>

            <!-- Animated Title -->
            <div class="hero-title slide-up" style="animation-delay: 0.3s">
              <Typer
                class="title-typer"
                :text="about.titles"
                :repeat="Infinity"
                :pre-type-delay="100"
                :type-delay="80"
                :pre-erase-delay="3000"
                :erase-delay="50"
              />
            </div>

            <!-- Summary -->
            <p class="hero-summary slide-up" style="animation-delay: 0.4s">
              {{ about.summary }}
            </p>

            <!-- Quick Info -->
            <div class="hero-info slide-up" style="animation-delay: 0.5s">
              <div class="info-item">
                <v-icon size="18">mdi-map-marker-outline</v-icon>
                <span>{{ about.location }}</span>
              </div>
              <div class="info-divider"></div>
              <div class="info-item">
                <v-icon size="18">mdi-briefcase-outline</v-icon>
                <span>{{ about.company }}</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="hero-actions slide-up" style="animation-delay: 0.6s">
              <router-link to="/home/resume" class="cta-primary">
                <span>View Resume</span>
                <v-icon size="18" class="ml-2">mdi-arrow-right</v-icon>
              </router-link>
              <a :href="mailto" class="cta-secondary">
                <v-icon size="18" class="mr-2">mdi-email-outline</v-icon>
                <span>Get in Touch</span>
              </a>
            </div>

            <!-- Social Links -->
            <div class="hero-social slide-up" style="animation-delay: 0.7s">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="social-link"
                :aria-label="social.name"
              >
                <v-icon size="22">{{ social.icon }}</v-icon>
              </a>
            </div>
          </div>
        </section>

        <!-- Impact Metrics -->
        <section class="metrics-section slide-up" style="animation-delay: 0.8s">
          <ImpactMetrics />
        </section>

        <!-- Featured Projects -->
        <section class="projects-section slide-up" style="animation-delay: 0.9s">
          <FeaturedProjects />
        </section>

        <!-- Two Column: GitHub Stats + Blog -->
        <section class="split-section">
          <v-row>
            <v-col cols="12" md="5" class="slide-up" style="animation-delay: 1s">
              <GitHubStats :username="about.username" />
            </v-col>
            <v-col cols="12" md="7" class="slide-up" style="animation-delay: 1.1s">
              <BlogPosts :username="about.username" />
            </v-col>
          </v-row>
        </section>

        <!-- Footer -->
        <footer class="page-footer slide-up" style="animation-delay: 1.2s">
          <p class="footer-text">
            Crafted with 
            <v-icon size="16" color="error" class="mx-1">mdi-heart</v-icon> 
            using Vue.js & Vuetify
          </p>
        </footer>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import Typer from "@/components/Typer.vue";
import ImpactMetrics from "@/components/ImpactMetrics.vue";
import FeaturedProjects from "@/components/FeaturedProjects.vue";
import GitHubStats from "@/components/GitHubStats.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import aboutJson from "@/data/about.json";

const about = aboutJson;
const mailto = computed(() => `mailto:${about.email}`);

const socialLinks = computed(() => [
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: about.social.linkedin },
  { name: 'GitHub', icon: 'mdi-github', url: about.social.github },
  { name: 'Stack Overflow', icon: 'mdi-stack-overflow', url: about.social.stackoverflow },
  { name: 'Dev.to', icon: 'mdi-dev-to', url: about.social.devto },
]);
</script>

<style scoped>
/* ========================================
   BACKGROUND & CANVAS
======================================== */
.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(var(--v-theme-primary), 0.3) 0%, transparent 70%);
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(var(--v-theme-tertiary), 0.25) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
  animation-delay: -10s;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(var(--v-theme-primary), 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--v-theme-primary), 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 10px) scale(1.02); }
}

/* ========================================
   HERO SECTION
======================================== */
.hero-section {
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 4rem 0 2rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 720px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(var(--v-theme-success), 0.1);
  border: 1px solid rgba(var(--v-theme-success), 0.2);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(var(--v-theme-success));
  margin-bottom: 2rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: rgb(var(--v-theme-success));
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.hero-name {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.name-first {
  display: block;
  color: rgb(var(--v-theme-accent));
}

.name-last {
  display: block;
  color: rgb(var(--v-theme-primary));
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-typer {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 400;
  color: rgb(var(--v-theme-tertiary));
}

/* Override Typer cursor styles if needed */
:deep(.typed-cursor) {
  color: rgb(var(--v-theme-primary));
}

.hero-summary {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(var(--v-theme-accent), 0.7);
  max-width: 560px;
  margin-bottom: 1.5rem;
}

.hero-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
}

.info-divider {
  width: 4px;
  height: 4px;
  background: rgba(var(--v-theme-accent), 0.3);
  border-radius: 50%;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.75rem;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-background));
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(var(--v-theme-primary), 0.3);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.75rem;
  background: transparent;
  color: rgb(var(--v-theme-accent));
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  border-color: rgb(var(--v-theme-primary));
  background: rgba(var(--v-theme-primary), 0.05);
}

.hero-social {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.05);
  color: rgb(var(--v-theme-accent));
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  color: rgb(var(--v-theme-primary));
  transform: translateY(-3px);
}

/* ========================================
   SECTIONS
======================================== */
.metrics-section,
.projects-section,
.split-section {
  position: relative;
  z-index: 1;
  margin-bottom: 4rem;
}

.metrics-section {
  padding: 2rem 0;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.08);
}

/* ========================================
   FOOTER
======================================== */
.page-footer {
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.08);
  position: relative;
  z-index: 1;
}

.footer-text {
  font-size: 0.85rem;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
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

.slide-up {
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 960px) {
  .hero-section {
    min-height: auto;
    padding: 3rem 0 2rem;
  }
  
  .hero-name {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
}

@media (max-width: 600px) {
  .hero-actions {
    flex-direction: column;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .hero-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .info-divider {
    display: none;
  }
}
</style>
