<template>
  <div v-if="showNav">
    <v-bottom-navigation
      class="glass-nav-bottom"
      fixed
      hide-on-scroll
      app
      elevation="0"
    >
      <glass-button 
        @click="openDrawer" 
        icon="mdi-menu-up-outline"
        variant="primary"
        size="default"
        rounded
        class="nav-menu-btn"
      />
    </v-bottom-navigation>
  </div>
</template>

<script>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import GlassButton from '@/components/GlassButton.vue'

export default {
  name: 'CoreNavigation',
  components: {
    GlassButton
  },
  setup() {
    const showNav = ref(false)
    const bus = inject('bus')
    
    const openDrawer = () => {
      bus.emit('drawer')
    }
    
    const handleNavToggle = (status) => {
      showNav.value = status
    }
    
    onMounted(() => {
      bus.on('nav', handleNavToggle)
    })
    
    onUnmounted(() => {
      bus.off('nav', handleNavToggle)
    })
    
    return {
      showNav,
      openDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/glass-theme.scss';

.glass-nav-bottom {
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  background: var(--glass-bg-light) !important;
  border-top: 1px solid var(--glass-border-light) !important;
  
  :deep(.v-bottom-navigation) {
    background: transparent !important;
  }
}

:global(.theme-dark) .glass-nav-bottom {
  background: var(--glass-bg-dark) !important;
  border-top-color: var(--glass-border-dark) !important;
}

.nav-menu-btn {
  margin: 8px;
}
</style>