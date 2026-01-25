<template>
  <v-container
    id="education"
    class="pa-4 pa-md-12 background"
    tag="section"
    fluid
    fill-height
  >
    <div class="background-overlay"></div>
    <v-row
      justify="center"
      class="fill-height position-relative"
      style="z-index: 1;"
    >
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12 slide-up-item" style="animation-delay: 0.1s">
          <h2 class="h2 accent--text mb-4">
            Education <span class="emoji">📚</span>
          </h2>
          <div class="divider mx-auto primary"></div>
        </div>

        <div class="timeline-container">
          <v-card
            v-for="(education, index) in educations"
            :key="education.id"
            class="mb-6 pa-6 education-card slide-up-item"
            :style="{ animationDelay: (index + 2) * 0.1 + 's' }"
            elevation="0"
            variant="outlined"
          >
            <div class="d-flex flex-column flex-md-row justify-space-between mb-4">
              <div>
                <h3 class="h4 anchor--text font-weight-bold mb-1">
                  {{ education.college }}
                </h3>
                <div class="d-flex align-center text-primary subtitle1 font-weight-medium">
                  <v-icon size="small" class="mr-2">mdi-school</v-icon>
                  {{ education.degree }}
                </div>
              </div>
              <div class="mt-2 mt-md-0 text-right-md">
                <v-chip
                  color="tertiary"
                  variant="flat"
                  size="small"
                  class="standard-chip font-weight-bold"
                >
                  {{ education.period }}
                </v-chip>
              </div>
            </div>
            
            <div class="education-content pl-2">
              <div
                v-for="point in education.points"
                :key="point.id"
                class="body2 secondary--text mb-2 d-flex align-start"
              >
                <span class="mr-2 mt-1 bullet">•</span>
                <span v-html="point.value"></span>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import educationJson from "../../data/education.json";
export default {
  data: () => ({
    educations: educationJson,
  }),
};
</script>

<style scoped>
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 80% 20%, rgba(var(--v-theme-tertiary), 0.05) 0%, transparent 40%);
  pointer-events: none;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 2px;
}

.education-card {
  border-color: rgba(var(--v-theme-primary), 0.2);
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Light mode specific adjustments */
.v-theme--light .education-card {
  background: rgba(255, 255, 255, 0.95) !important; /* Clean white for better contrast */
  border-color: rgba(var(--v-theme-primary), 0.25) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

/* Dark mode specific adjustments */
.v-theme--dark .education-card {
  background: rgba(12, 53, 80, 0.6) !important; /* Lighter ocean blue for visibility */
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -10px rgba(var(--v-theme-primary), 0.25) !important;
  border-color: rgba(var(--v-theme-primary), 0.5);
}

/* Ensure text is readable in light mode */
.v-theme--light .secondary--text {
  color: rgba(var(--v-theme-secondary), 0.85) !important;
}

/* Ensure text is readable in dark mode */
.v-theme--dark .secondary--text {
  color: rgba(var(--v-theme-accent), 0.9) !important;
}

.bullet {
  color: var(--v-tertiary-base);
  font-weight: bold;
}

.emoji {
  display: inline-block;
  animation: bounce 2s infinite;
  transform-origin: center bottom;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

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

/* Standardized chip styling */
.standard-chip {
  font-size: 0.75rem !important;
  letter-spacing: 0.02em;
  min-height: 24px !important;
  padding: 4px 12px !important;
}
</style>
