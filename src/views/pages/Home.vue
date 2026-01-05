<template>
  <v-container
    id="home"
    class="pa-0 ma-0 fill-height"
    tag="section"
    fluid
  >
    <div class="background-overlay"></div>
    <v-row
      class="fill-height ma-0"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="10"
        lg="8"
        class="text-center position-relative"
        style="z-index: 1;"
      >
        <div class="home-content">
          <!-- Name Section -->
          <div class="d-flex flex-wrap justify-center align-center mb-6 slide-up-enter-active" style="animation-delay: 0.1s">
            <h1 class="h1 accent--text mr-3 mb-0">
              {{ about.firstname }}
            </h1>
            <h1 class="h1 tertiary--text mb-0">
              {{ about.lastname }}
            </h1>
          </div>

          <!-- Typer Section -->
          <div class="mb-8 slide-up-enter-active" style="animation-delay: 0.2s">
            <Typer
              class="h3 font-weight-light"
              :text="about.titles"
              :repeat="Infinity"
              :pre-type-delay="100"
              :type-delay="100"
              :pre-erase-delay="3000"
              :erase-delay="300"
            />
          </div>

          <!-- Contact Info -->
          <div class="d-flex flex-wrap justify-center align-center gap-6 mb-8 slide-up-enter-active" style="animation-delay: 0.3s">
            <span class="subtitle1 secondary--text">
              {{ about.nickname }}
            </span>
            <span class="secondary--text hidden-xs-only">•</span>
            <span class="subtitle1 secondary--text">
              {{ about.phone }}
            </span>
            <span class="secondary--text hidden-xs-only">•</span>
            <a :href="mailto" class="subtitle1 primary--text text-decoration-none hover-underline">
              {{ about.email }}
            </a>
          </div>

          <!-- Summary -->
          <div class="d-flex justify-center mb-10 slide-up-enter-active" style="animation-delay: 0.4s">
            <p class="body1 secondary--text text-center max-w-prose mx-auto">
              {{ about.summary }}
            </p>
          </div>

          <!-- Social Icons -->
          <div class="d-flex justify-center gap-6 slide-up-enter-active" style="animation-delay: 0.5s">
            <v-btn
              icon
              variant="text"
              color="tertiary"
              class="social-btn"
              @click="popup(about.social.linkedin)"
            >
              <v-icon size="large">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="tertiary"
              class="social-btn"
              @click="popup(about.social.github)"
            >
              <v-icon size="large">mdi-github</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="tertiary"
              class="social-btn"
              @click="popup(about.social.stackoverflow)"
            >
              <v-icon size="large">mdi-stack-overflow</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="tertiary"
              class="social-btn"
              @click="popup(about.social.devto)"
            >
              <v-icon size="large">mdi-dev-to</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Typer from "../../components/Typer.vue";
import aboutJson from "../../data/about.json";
import { computed } from "vue";

const about = aboutJson;
const mailto = computed(() => "mailto:" + about.email);

function popup(url) {
  window.open(url, '_blank');
}
</script>

<style scoped>
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 20%, rgba(61, 169, 252, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(239, 69, 101, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.max-w-prose {
  max-width: 65ch;
}

.gap-6 {
  gap: 1.5rem;
}

.social-btn {
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
  background-color: rgba(var(--v-theme-tertiary), 0.1);
}

/* Animations are handled by global classes, but we trigger them on mount 
   using the class names directly if we want them to run once on load.
   Since this component is mounted by router, the router transition handles the page fade.
   The inner elements use slide-up-enter-active with delays for a stagger effect.
*/

/* We need to define the animation keyframes locally if not global, 
   or use the global class but ensure it triggers. 
   Usually standard CSS animations are better for "on load" stagger.
*/

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-enter-active {
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0; /* Start hidden */
}
</style>
