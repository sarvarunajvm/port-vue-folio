<template>
  <glass-button
    :icon="currentIcon"
    variant="ghost"
    size="default"
    rounded
    @click="toggleTheme"
    class="theme-toggle"
  >
    <span class="sr-only">Toggle theme</span>
  </glass-button>
</template>

<script>
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import GlassButton from './GlassButton.vue'

export default {
  name: 'ThemeToggle',
  components: {
    GlassButton
  },
  setup() {
    const theme = useTheme()
    const isTransitioning = ref(false)
    
    const currentIcon = computed(() => {
      const currentTheme = theme.global.name.value
      if (currentTheme.includes('Dark') || currentTheme === 'dark') {
        return 'mdi-white-balance-sunny'
      }
      return 'mdi-moon-waning-crescent'
    })
    
    const toggleTheme = async () => {
      if (isTransitioning.value) return
      
      isTransitioning.value = true
      
      // Add transition class to body
      document.body.classList.add('glass-theme-transition')
      
      const currentTheme = theme.global.name.value
      
      // Toggle between glass themes
      if (currentTheme === 'glassLight' || currentTheme === 'light') {
        theme.global.name.value = 'glassDark'
      } else {
        theme.global.name.value = 'glassLight'
      }
      
      // Update background class
      updateBackgroundTheme()
      
      // Remove transition class after animation
      setTimeout(() => {
        document.body.classList.remove('glass-theme-transition')
        isTransitioning.value = false
      }, 500)
      
      // Store theme preference
      localStorage.setItem('theme', theme.global.name.value)
    }
    
    const updateBackgroundTheme = () => {
      const background = document.querySelector('.glass-background')
      if (background) {
        const isDark = theme.global.name.value.includes('Dark')
        background.classList.toggle('dark-mode', isDark)
      }
    }
    
    // Initialize theme from localStorage
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme && ['glassLight', 'glassDark', 'light', 'dark'].includes(savedTheme)) {
        theme.global.name.value = savedTheme
      }
      updateBackgroundTheme()
    }
    
    // Initialize on mount
    initializeTheme()
    
    return {
      currentIcon,
      toggleTheme
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.1) rotate(15deg);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 10px;
    right: 10px;
  }
}
</style>