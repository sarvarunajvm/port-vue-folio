<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
// ========================================
// FONT IMPORT - JetBrains Mono + Outfit
// ========================================
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

// ========================================
// CSS VARIABLES
// ========================================
:root {
  --font-primary: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
}

// ========================================
// GLOBAL RESET & BASE STYLES
// ========================================
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

// ========================================
// CUSTOM SCROLLBAR
// ========================================
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--v-theme-primary), 0.2);
  border-radius: 3px;
  
  &:hover {
    background: rgba(var(--v-theme-primary), 0.35);
  }
}

// Firefox scrollbar
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--v-theme-primary), 0.2) transparent;
}

// ========================================
// APP CONTAINER
// ========================================
#app {
  font-family: var(--font-primary);
  min-height: 100vh;
}

// ========================================
// TYPOGRAPHY SCALE
// ========================================
.subtitle1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
}

.body2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
}

// ========================================
// PAGE TRANSITIONS
// ========================================
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

// Legacy fade transition (for compatibility)
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// ========================================
// INTERACTIVE ELEMENTS
// ========================================
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast), opacity var(--transition-fast);
  
  &:hover {
    opacity: 0.85;
  }
}

button {
  font-family: inherit;
  cursor: pointer;
}

// ========================================
// VUETIFY OVERRIDES
// ========================================
.v-btn {
  font-family: var(--font-primary);
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

.v-card {
  border-radius: var(--border-radius-lg) !important;
}

.v-chip {
  font-family: var(--font-primary);
  font-weight: 500;
}

// Icon hover effect
.v-icon {
  transition: transform var(--transition-fast), color var(--transition-fast);
}

// Interactive icon buttons
.v-btn--icon:hover .v-icon {
  transform: scale(1.15);
}

// List items
.v-list-item {
  font-family: var(--font-primary);
}

// Navigation drawer
.v-navigation-drawer {
  font-family: var(--font-primary);
}

// ========================================
// SELECTION STYLES
// ========================================
::selection {
  background: rgba(var(--v-theme-primary), 0.2);
  color: rgb(var(--v-theme-primary));
}

// ========================================
// FOCUS STYLES (ACCESSIBILITY)
// ========================================
:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

// Remove outline for mouse users
:focus:not(:focus-visible) {
  outline: none;
}

// ========================================
// THEME-SPECIFIC ADJUSTMENTS
// ========================================
.v-theme--light {
  --text-opacity: 0.87;
  --text-secondary-opacity: 0.6;
}

.v-theme--dark {
  --text-opacity: 0.95;
  --text-secondary-opacity: 0.7;
}

// ========================================
// PRINT STYLES
// ========================================
@media print {
  .v-navigation-drawer,
  .v-app-bar {
    display: none !important;
  }
  
  body {
    background: white !important;
    color: black !important;
  }
}
</style>
