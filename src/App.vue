<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap');

:root {
  --primary-font: 'Kanit', sans-serif;
  --transition-speed: 0.3s;
}

html {
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--v-theme-secondary), 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--v-theme-primary), 0.3);
  border-radius: 4px;
  
  &:hover {
    background: rgba(var(--v-theme-primary), 0.5);
  }
}

#app {
  font-family: var(--primary-font) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography Improvements */
.myFont {
  font-family: var(--primary-font) !important;
}

// fluid typography mixin could be used here, but keeping it simple with clamp
.h1 {
  font-size: clamp(3rem, 5vw, 6rem) !important;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.h2 {
  font-size: clamp(2.5rem, 4vw, 3.75rem) !important;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.01em !important;
}

.h3 {
  font-size: clamp(2rem, 3vw, 3rem) !important;
  font-weight: 400;
  line-height: 1.25;
}

.h4 {
  font-size: clamp(1.5rem, 2.5vw, 2.125rem) !important;
  font-weight: 400;
  line-height: 1.4;
}

.h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 1.5;
}

.subtitle1 {
  font-size: 1.125rem !important;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.9;
}

.subtitle2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0.8;
}

.body1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
}

.body2 {
  font-size: 0.95rem !important;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.85;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Up Utility */
.slide-up-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Utility Classes */
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }

/* Interactive Elements */
a {
  transition: color 0.2s ease;
  text-decoration: none;
  
  &:hover {
    opacity: 0.8;
  }
}

.v-icon {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: scale(1.2);
  }
}
</style>
