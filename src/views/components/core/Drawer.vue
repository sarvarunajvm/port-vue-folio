<template>
  <v-navigation-drawer
    class="glass-drawer"
    id="navigation-drawer"
    v-model="drawer"
    :rail="mini"
    rail-width="64"
    mobile-breakpoint="600"
    app
    elevation="0"
    height="100vh"
  >
    <div class="glass-drawer-content">
      <div class="drawer-header">
        <glass-card variant="floating" class="avatar-card">
          <v-avatar size="120">
            <v-img src="../../../assets/me.jpg" alt="Profile Picture"></v-img>
          </v-avatar>
        </glass-card>
      </div>

      <v-list class="glass-nav-list">
        <v-list-item-group v-model="selected">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            class="glass-nav-item"
            exact
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon" class="nav-icon"></v-icon>
            </template>
            
            <v-list-item-title v-if="!mini" class="nav-title">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    <!-- Removed theme toggle as it's now in the top-right corner -->
  </v-navigation-drawer>
</template>

<script>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'
import GlassCard from '@/components/GlassCard.vue'

export default {
  name: 'CoreDrawer',
  components: {
    GlassCard
  },
  setup() {
    const selected = ref(0)
    const drawer = ref(true)
    const mini = ref(false)
    const bus = inject('bus')
    const { name: breakpointName } = useDisplay()
    
    const items = [
      { title: "About Me", icon: "mdi-account-tie-outline", link: "home" },
      { title: "Experience", icon: "mdi-chart-line", link: "experience" },
      { title: "Projects", icon: "mdi-view-list-outline", link: "projects" },
      { title: "Skills", icon: "mdi-chart-bar", link: "skills" },
      { title: "Education", icon: "mdi-school-outline", link: "education" },
      { title: "Resume", icon: "mdi-clipboard-text-outline", link: "resume" },
    ]
    
    const onResize = () => {
      if (breakpointName.value === "sm") {
        mini.value = true
      } else if (breakpointName.value === "xs") {
        mini.value = false
        bus.emit("nav", true)
      } else {
        mini.value = false
        bus.emit("nav", false)
      }
    }
    
    const handleDrawerToggle = () => {
      drawer.value = !drawer.value
    }
    
    onMounted(() => {
      onResize()
      window.addEventListener("resize", onResize, { passive: true })
      bus.on("drawer", handleDrawerToggle)
    })
    
    onBeforeUnmount(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onResize, { passive: true })
      }
      bus.off("drawer", handleDrawerToggle)
    })
    
    return {
      selected,
      drawer,
      mini,
      items
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/glass-theme.scss';

.glass-drawer {
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  background: var(--glass-bg-light) !important;
  border-right: 1px solid var(--glass-border-light) !important;
  
  :deep(.v-navigation-drawer__content) {
    background: transparent !important;
  }
}

:global(.theme-dark) .glass-drawer {
  background: var(--glass-bg-dark) !important;
  border-right-color: var(--glass-border-dark) !important;
}

.glass-drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}

.drawer-header {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  
  .avatar-card {
    text-align: center;
  }
}

.glass-nav-list {
  background: transparent !important;
  
  .glass-nav-item {
    @include glass-effect('light');
    margin: 8px 0;
    border-radius: 12px;
    padding: 12px 16px;
    transition: all var(--glass-animation-duration) var(--glass-animation-easing);
    
    &:hover {
      transform: translateX(4px);
    }
    
    &.v-list-item--active {
      background: rgba(102, 126, 234, 0.2) !important;
      border-color: rgba(102, 126, 234, 0.4) !important;
      color: #667eea !important;
      
      .nav-icon,
      .nav-title {
        color: #667eea !important;
      }
    }
  }
}

:global(.theme-dark) .glass-nav-list .glass-nav-item {
  @include glass-effect('dark');
  
  &.v-list-item--active {
    background: rgba(127, 90, 240, 0.2) !important;
    border-color: rgba(127, 90, 240, 0.4) !important;
    color: #7f5af0 !important;
    
    .nav-icon,
    .nav-title {
      color: #7f5af0 !important;
    }
  }
}

.nav-icon {
  margin-right: 16px;
}

.nav-title {
  font-weight: 500;
}

// Mobile responsive
@media (max-width: 600px) {
  .glass-drawer-content {
    padding: 16px 12px;
  }
  
  .drawer-header {
    margin-bottom: 24px;
    
    .avatar-card :deep(.v-avatar) {
      width: 80px !important;
      height: 80px !important;
    }
  }
}
</style>
<style scoped>
.border {
  color: var(--v-background-base);
  background-color: var(--v-tertiary-base);
}
</style>