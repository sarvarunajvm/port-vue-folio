<template>
  <v-container
    id="skills"
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
            Technical Skills <span class="emoji">⚡</span>
          </h2>
          <div class="divider mx-auto primary"></div>
        </div>

        <v-row>
          <v-col
            v-for="(skill, index) in skillsList"
            :key="skill.id"
            cols="12"
            md="6"
            class="slide-up-item"
            :style="{ animationDelay: (index + 2) * 0.1 + 's' }"
          >
            <v-card
              class="h-100 skill-card pa-4"
              variant="outlined"
            >
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-3">mdi-code-braces</v-icon>
                <h3 class="h5 font-weight-bold mb-0 skill-title">
                  {{ skill.title }}
                </h3>
              </div>
              
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="point in skill.points"
                  :key="point.id"
                  color="tertiary"
                  variant="flat"
                  class="standard-chip font-weight-bold skill-chip"
                  size="small"
                >
                  <v-icon start size="small" class="mr-1">
                    {{ point.value }}
                  </v-icon>
                  {{ point.name }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import skills from "../../data/skills.json";
export default {
  data: () => ({
    skillsList: skills,
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
  background-image: radial-gradient(circle at 20% 80%, rgba(var(--v-theme-primary), 0.05) 0%, transparent 40%);
  pointer-events: none;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 2px;
}

.skill-card {
  border-color: rgba(var(--v-theme-primary), 0.2);
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Light mode specific adjustments */
.v-theme--light .skill-card {
  background: rgba(255, 255, 255, 0.95) !important; /* Clean white for better contrast */
  border-color: rgba(var(--v-theme-primary), 0.25) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

/* Dark mode specific adjustments */
.v-theme--dark .skill-card {
  background: rgba(12, 53, 80, 0.6) !important; /* Lighter ocean blue for visibility */
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px -10px rgba(var(--v-theme-primary), 0.25);
  border-color: rgba(var(--v-theme-primary), 0.5);
}

.skill-chip {
  transition: all 0.2s ease;
}

.skill-chip:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.emoji {
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.gap-2 {
  gap: 0.75rem;
}

.skill-title {
  color: rgb(var(--v-theme-on-background)) !important;
}

/* Standardized chip styling */
.standard-chip {
  font-size: 0.75rem !important;
  letter-spacing: 0.02em;
  min-height: 24px !important;
  padding: 4px 12px !important;
}

/* Skill chips now use tertiary color with flat variant - Vuetify handles styling */
/* Hover effect is handled by the .skill-chip:hover rule above */

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
</style>
