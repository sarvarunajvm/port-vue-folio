<template>
  <v-container
    id="experience"
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
            Work Experience <span class="emoji">👨‍💻</span>
          </h2>
          <div class="divider mx-auto primary"></div>
        </div>

        <div class="experience-list">
          <v-card
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="mb-6 pa-6 experience-card slide-up-item"
            :style="{ animationDelay: (index + 2) * 0.1 + 's' }"
            elevation="0"
            variant="outlined"
          >
            <div class="d-flex flex-column flex-md-row justify-space-between mb-4">
              <div>
                <h3 class="h4 anchor--text font-weight-medium mb-1">
                  {{ experience.designation }}
                </h3>
                <div class="d-flex align-center text-primary subtitle1 font-weight-medium">
                  <v-icon size="small" class="mr-2">mdi-domain</v-icon>
                  {{ experience.company }}
                </div>
              </div>
              <div class="mt-2 mt-md-0 text-right-md">
                <v-chip
                  color="tertiary"
                  variant="outlined"
                  size="small"
                  class="font-weight-bold"
                >
                  {{ experience.period }}
                </v-chip>
              </div>
            </div>
            
            <div class="experience-content pl-2">
              <div
                v-for="point in experience.points"
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
import experienceJson from "../../data/experience.json";
export default {
  data: () => ({
    experiences: experienceJson,
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
  background-image: radial-gradient(circle at 10% 10%, rgba(61, 169, 252, 0.03) 0%, transparent 40%);
  pointer-events: none;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: var(--v-primary-base);
  border-radius: 2px;
}

.experience-card {
  border-color: rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(61, 169, 252, 0.3);
}

.bullet {
  color: var(--v-tertiary-base);
  font-weight: bold;
}

.emoji {
  display: inline-block;
  animation: wave 2s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
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
</style>
