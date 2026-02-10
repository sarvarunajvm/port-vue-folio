<template>
  <v-container
    id="resume"
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
            Resume <span class="title-emoji">📋</span>
          </h2>
          <p class="page-subtitle">
            Download my resume to learn more about my experience
          </p>
          <div class="divider"></div>
        </div>

        <!-- Resume Content -->
        <div class="resume-container">
          <v-row align="stretch" class="justify-center">
            <!-- Preview Section -->
            <v-col cols="12" md="6" class="slide-up-item" style="animation-delay: 0.2s">
              <div class="preview-card">
                <div class="preview-header">
                  <v-icon size="18">mdi-eye</v-icon>
                  <span>Preview</span>
                </div>
                <div class="preview-content">
                  <v-img
                    src="../../assets/Resume.gif"
                    alt="Resume Preview"
                    cover
                    class="resume-preview"
                  >
                    <template #placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular 
                          indeterminate 
                          color="primary"
                          size="32"
                          width="2"
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
              </div>
            </v-col>

            <!-- Download Section -->
            <v-col cols="12" md="5" class="d-flex slide-up-item" style="animation-delay: 0.3s">
              <div class="download-card">
                <div class="download-icon">
                  <v-icon size="48">mdi-file-document-outline</v-icon>
                </div>

                <h3 class="download-title">Get My Resume</h3>
                <p class="download-description">
                  Download a PDF copy of my resume to review my experience, 
                  skills, and qualifications in detail.
                </p>

                <div class="download-features">
                  <div class="feature-item">
                    <v-icon size="16">mdi-check</v-icon>
                    <span>10+ Years Experience</span>
                  </div>
                  <div class="feature-item">
                    <v-icon size="16">mdi-check</v-icon>
                    <span>Full Stack Development</span>
                  </div>
                  <div class="feature-item">
                    <v-icon size="16">mdi-check</v-icon>
                    <span>Enterprise Scale Systems</span>
                  </div>
                </div>

                <button 
                  class="download-btn"
                  :class="{ loading: loading }"
                  :disabled="loading"
                  @click="downloadPDF"
                >
                  <v-icon size="20" class="btn-icon">
                    {{ loading ? 'mdi-loading' : 'mdi-download' }}
                  </v-icon>
                  <span>{{ loading ? 'Downloading...' : 'Download PDF' }}</span>
                </button>

                <div class="download-meta">
                  <span class="meta-item">
                    <v-icon size="12">mdi-file-pdf-box</v-icon>
                    PDF Format
                  </span>
                  <span class="meta-item">
                    <v-icon size="12">mdi-update</v-icon>
                    Recently Updated
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Quick Stats -->
        <div class="quick-stats slide-up-item" style="animation-delay: 0.4s">
          <div class="stat-item">
            <span class="stat-value">10+</span>
            <span class="stat-label">Years</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">4</span>
            <span class="stat-label">Companies</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">8+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">15+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

function downloadPDF() {
  loading.value = true;
  
  const link = document.createElement("a");
  link.href = "/files/Resume.pdf";
  link.download = "Saravanan_Kalimuthu_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  setTimeout(() => {
    loading.value = false;
  }, 1500);
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
    radial-gradient(circle at 50% 30%, rgba(var(--v-theme-primary), 0.06) 0%, transparent 50%);
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
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
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
   RESUME CONTAINER
======================================== */
.resume-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Preview Card */
.preview-card {
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.preview-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 16px 40px rgba(var(--v-theme-primary), 0.1);
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(var(--v-theme-primary), 0.05);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
}

.preview-content {
  padding: 1rem;
}

.resume-preview {
  border-radius: 12px;
  aspect-ratio: 8.5 / 11;
}

/* Download Card */
.download-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.download-card:hover {
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 16px 40px rgba(var(--v-theme-primary), 0.1);
}

.download-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  margin-bottom: 1.5rem;
}

.download-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.75rem;
}

.download-description {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.7;
  margin-bottom: 1.5rem;
  max-width: 280px;
}

.download-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgb(var(--v-theme-success));
}

/* Download Button */
.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 2rem;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-background));
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.download-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--v-theme-primary), 0.3);
}

.download-btn:active:not(:disabled) {
  transform: translateY(0);
}

.download-btn:disabled {
  opacity: 0.7;
  cursor: wait;
}

.download-btn.loading .btn-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.download-meta {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  opacity: 0.5;
}

/* ========================================
   QUICK STATS
======================================== */
.quick-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 3rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.06);
  border-radius: 16px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(var(--v-theme-primary), 0.1);
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
@media (max-width: 960px) {
  .resume-container {
    padding: 0 1rem;
  }
}

@media (max-width: 600px) {
  .quick-stats {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .stat-divider {
    display: none;
  }
  
  .stat-item {
    flex: 1 1 40%;
  }
  
  .download-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
