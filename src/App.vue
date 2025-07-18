<template>
  <div id="app">
    <!-- Glass Background -->
    <div class="glass-background"></div>
    
    <!-- Theme Toggle -->
    <theme-toggle />
    
    <!-- Main Content -->
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle.vue'

export default {
  name: "App",
  components: {
    ThemeToggle
  },
  mounted() {
    // Apply glass theme styles to body
    document.body.classList.add('glass-theme-transition')
  }
};
</script>
<style lang="scss">
@import '@/assets/styles/glass-theme.scss';

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
#app {
  font-family: "Kanit" !important;
  min-height: 100vh;
  position: relative;
}

/* Glass Background Styles */
.glass-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::before {
    background: var(--gradient-light-1);
    animation-delay: -3s;
  }
  
  &::after {
    background: var(--gradient-light-2);
    animation-delay: -1s;
    opacity: 0.7;
  }
  
  &.dark-mode {
    &::before {
      background: var(--gradient-dark-1);
    }
    
    &::after {
      background: var(--gradient-dark-2);
    }
  }
}

/* Global glass theme transitions */
.glass-theme-transition * {
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.myFont {
  font-family: "Kanit" !important;
}
.h1 {
  font-size: 6rem !important;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.015625em !important;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem !important;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
}
.h3 {
  font-weight: 400;
  font-size: 3rem !important;
  line-height: 3.125rem;
  letter-spacing: normal !important;
}
.h4 {
  font-weight: 400;
  font-size: 2.125rem !important;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
}
.h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
}
.subtitle1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.009375em !important;
}
.subtitle2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em !important;
}
.body1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
}
.body2 {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0178571429em !important;
}
.button {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  text-transform: uppercase !important;
}
.caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
}
.ovrline {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  text-transform: uppercase !important;
}
.hdline {
  font-size: 1.5rem !important;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: initial !important;
}
</style>