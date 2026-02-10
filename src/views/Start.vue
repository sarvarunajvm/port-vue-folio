<template>
  <v-app>
    <v-main class="start-page">
      <!-- Background -->
      <div class="background-canvas">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>

      <v-container fluid class="fill-height d-flex align-center justify-center">
        <div class="loader-content">
          <!-- Logo/Avatar -->
          <div class="loader-avatar" :class="{ 'animate-in': mounted }">
            <div class="avatar-ring">
              <div class="avatar-inner">
                <span class="avatar-text">SK</span>
              </div>
            </div>
          </div>

          <!-- Name -->
          <h1 class="loader-name" :class="{ 'animate-in': mounted }">
            <span class="name-line">Saravanan</span>
            <span class="name-line accent">Kalimuthu</span>
          </h1>

          <!-- Subtitle -->
          <p class="loader-subtitle" :class="{ 'animate-in': mounted }">
            Senior Software Engineer
          </p>

          <!-- Loading Indicator -->
          <div class="loader-progress" :class="{ 'animate-in': mounted }">
            <div class="progress-track">
              <div class="progress-fill" :style="{ width: progress + '%' }"></div>
            </div>
            <span class="progress-text">{{ statusText }}</span>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mounted = ref(false);
const progress = ref(0);

const loadingSteps = [
  'Initializing...',
  'Loading assets...',
  'Preparing experience...',
  'Almost ready...',
  'Welcome!'
];

const currentStep = ref(0);
const statusText = computed(() => loadingSteps[currentStep.value]);

onMounted(() => {
  // Trigger animations after mount
  setTimeout(() => {
    mounted.value = true;
  }, 100);

  // Animate progress
  const duration = 2500;
  const interval = 50;
  const steps = duration / interval;
  const increment = 100 / steps;
  
  let current = 0;
  const progressInterval = setInterval(() => {
    current += increment;
    progress.value = Math.min(current, 100);
    
    // Update status text based on progress
    if (current >= 80) currentStep.value = 4;
    else if (current >= 60) currentStep.value = 3;
    else if (current >= 40) currentStep.value = 2;
    else if (current >= 20) currentStep.value = 1;
    
    if (current >= 100) {
      clearInterval(progressInterval);
      // Navigate after a small delay for the final animation
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }
  }, interval);
});
</script>

<style scoped>
/* ========================================
   PAGE SETUP
======================================== */
.start-page {
  min-height: 100vh;
  background: rgb(var(--v-theme-background));
  overflow: hidden;
  position: relative;
}

/* ========================================
   BACKGROUND
======================================== */
.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: float 15s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(var(--v-theme-primary), 0.4) 0%, transparent 70%);
  top: -150px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(var(--v-theme-tertiary), 0.3) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
  animation-delay: -5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(var(--v-theme-warning), 0.2) 0%, transparent 70%);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -20px) scale(1.05); }
  50% { transform: translate(-15px, 15px) scale(0.95); }
  75% { transform: translate(15px, 10px) scale(1.02); }
}

/* ========================================
   LOADER CONTENT
======================================== */
.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
}

/* Avatar */
.loader-avatar {
  margin-bottom: 2rem;
  opacity: 0;
  transform: scale(0.8) translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.loader-avatar.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.avatar-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(
    from 0deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-tertiary)),
    rgb(var(--v-theme-warning)),
    rgb(var(--v-theme-primary))
  );
  animation: spin 3s linear infinite;
}

.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgb(var(--v-theme-background));
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-text {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  letter-spacing: -0.02em;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Name */
.loader-name {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.2s;
}

.loader-name.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.name-line {
  display: block;
  color: rgb(var(--v-theme-accent));
}

.name-line.accent {
  color: rgb(var(--v-theme-primary));
}

/* Subtitle */
.loader-subtitle {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.4s;
  color: rgba(var(--v-theme-accent), 0.6);
  margin-bottom: 3rem;
}

.loader-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Progress */
.loader-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 200px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.6s;
}

.loader-progress.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.progress-track {
  width: 100%;
  height: 4px;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-tertiary))
  );
  border-radius: 2px;
  transition: width 0.1s ease;
}

.progress-text {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.5;
}
</style>
