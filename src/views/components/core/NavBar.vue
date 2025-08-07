<template>
  <v-app-bar
    class="glass-navbar"
    id="navbar"
    :extension-height="0"
    density="compact"
    elevation="0"
    flat
    height="64"
  >
    <v-app-bar-nav-icon
      v-if="mobile"
      @click="drawer = !drawer"
      class="nav-toggle-btn"
    >
      <v-icon icon="mdi-menu" />
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <div class="nav-brand">
      <glass-card variant="small" hover>
        <h3 class="glass-text">Portfolio</h3>
      </glass-card>
    </div>

    <v-spacer></v-spacer>

    <!-- Desktop navigation items -->
    <template v-if="!mobile">
      <glass-button
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
        variant="ghost"
        size="small"
        class="nav-item"
      >
        <v-icon :icon="item.icon" size="small" />
        {{ item.title }}
      </glass-button>
    </template>
  </v-app-bar>
</template>

<script>
import { ref, computed, inject, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'
import GlassButton from '@/components/GlassButton.vue'
import GlassCard from '@/components/GlassCard.vue'

export default {
  name: 'CoreNavigation',
  components: {
    GlassButton,
    GlassCard
  },
  setup() {
    const drawer = ref(false)
    const bus = inject('bus')
    const { name: breakpointName } = useDisplay()
    
    const mobile = computed(() => 
      breakpointName.value === 'xs' || breakpointName.value === 'sm'
    )
    
    const items = [
      { title: "About", icon: "mdi-account-tie-outline", link: "home" },
      { title: "Experience", icon: "mdi-chart-line", link: "experience" },
      { title: "Projects", icon: "mdi-view-list-outline", link: "projects" },
      { title: "Skills", icon: "mdi-chart-bar", link: "skills" },
      { title: "Education", icon: "mdi-school-outline", link: "education" },
      { title: "Resume", icon: "mdi-clipboard-text-outline", link: "resume" },
    ]
    
    const handleDrawerChange = () => {
      bus.emit("drawer")
    }
    
    const handleNavToggle = (state) => {
      drawer.value = state
    }
    
    onMounted(() => {
      bus.on("nav", handleNavToggle)
    })
    
    onBeforeUnmount(() => {
      bus.off("nav", handleNavToggle)
    })
    
    return {
      drawer,
      mobile,
      items,
      handleDrawerChange
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/glass-theme.scss' as glass;

.glass-navbar {
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  background: var(--glass-bg-light) !important;
  border-bottom: 1px solid var(--glass-border-light) !important;
  
  :deep(.v-toolbar__content) {
    background: transparent !important;
  }
}

:global(.theme-dark) .glass-navbar {
  background: var(--glass-bg-dark) !important;
  border-bottom-color: var(--glass-border-dark) !important;
}

.nav-toggle-btn {
  @include glass.glass-effect('light');
  border-radius: 12px;
  margin-right: 12px;
  
  &:hover {
    transform: scale(1.05);
  }
}

:global(.theme-dark) .nav-toggle-btn {
  @include glass.glass-effect('dark');
}

.nav-brand {
  .glass-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
}

.nav-item {
  margin: 0 4px;
  
  :deep(.glass-button-content) {
    gap: 6px;
  }
}

// Mobile responsive
@media (max-width: 960px) {
  .nav-brand .glass-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 600px) {
  .nav-brand .glass-text {
    font-size: 1.125rem;
  }
  
  .nav-toggle-btn {
    margin-right: 8px;
  }
}
</style>