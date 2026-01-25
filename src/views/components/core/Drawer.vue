<template>
  <v-navigation-drawer
    id="navigation-drawer"
    v-model="state.drawer"
    :rail="state.mini"
    :temporary="isMobile"
    app
    color="primary"
    class="glass-drawer"
    width="260"
    :elevation="isMobile ? 10 : 0"
  >
    <!-- Background Gradient/Pattern -->
    <div class="drawer-bg"></div>

    <div class="d-flex flex-column fill-height pa-4 position-relative" style="z-index: 1;">
      <!-- Profile Section -->
      <div class="d-flex flex-column align-center my-8">
        <v-avatar 
          :size="state.mini ? 64 : 160" 
          class="profile-avatar mb-4"
          :class="{ 'avatar-mini': state.mini }"
        >
          <v-img 
            src="../../../assets/me.png" 
            alt="Profile Picture"
            cover
          ></v-img>
        </v-avatar>
        
        <div v-if="!state.mini" class="text-center fade-transition">

        </div>
      </div>

      <v-divider class="mb-4 opacity-20"></v-divider>

      <!-- Navigation Links -->
      <v-list nav density="compact" class="flex-grow-1 bg-transparent">
        <v-list-item
          v-for="(item, i) in state.items"
          :key="i"
          :to="{ name: item.routeName }"
          :value="item.routeName"
          :exact="item.routeName === 'Home'"
          rounded="lg"
          class="mb-2 nav-item"
          active-class="nav-item-active"
        >
          <template #prepend>
            <v-icon :icon="item.icon" class="nav-icon"></v-icon>
          </template>
          <v-list-item-title class="font-weight-medium nav-title">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- Footer / Theme Toggle -->
      <div class="mt-auto pt-4 d-flex justify-center">
        <v-btn
          icon
          variant="text"
          class="theme-toggle-btn"
          size="large"
          @click="toggleTheme"
        >
          <v-icon
            size="24"
            color="white"
          >
            {{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}
          </v-icon>
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { inject, onMounted, reactive, computed, watch } from "vue";
import { useDisplay, useTheme } from "vuetify";

const bus = inject("bus");
const theme = useTheme();
const display = useDisplay();

const state = reactive({
  drawer: true,
  mini: false,
  items: [
    { title: "About Me", icon: "mdi-account-tie-outline", routeName: "Home" },
    { title: "Experience", icon: "mdi-briefcase-outline", routeName: "Experience" },
    { title: "Projects", icon: "mdi-rocket-launch-outline", routeName: "Projects" },
    { title: "Skills", icon: "mdi-lightning-bolt-outline", routeName: "Skills" },
    { title: "Education", icon: "mdi-school-outline", routeName: "Education" },
    { title: "Resume", icon: "mdi-file-document-outline", routeName: "Resume" },
  ],
});

const isMobile = computed(() => display.mobile.value);
const isDark = computed(() => theme.global.current.value.dark);

function applyTheme(name) {
  theme.global.name.value = name;
}

function toggleTheme() {
  const next = isDark.value ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch { /* ignore */ }
}

function updateLayout() {
  if (display.mdAndDown.value) {
    state.mini = false;
    // On mobile/tablet, drawer is temporary and hidden by default unless toggled
    // We rely on the bus event or initial state
  } else {
    // Desktop
    state.drawer = true;
    state.mini = false; // or true if you want mini sidebar on desktop
  }
  
  // Update bus so NavBar knows if it should show the toggle button
  bus?.emit("nav", isMobile.value);
}

// Watch for breakpoint changes
watch(display.name, updateLayout);

onMounted(() => {
  // Theme init
  try {
    const saved = localStorage.getItem("theme");
    if (saved) applyTheme(saved);
  } catch { /* ignore */ }

  // Initial layout set
  updateLayout();
  
  // If mobile, start closed
  if (isMobile.value) {
    state.drawer = false;
  }

  bus?.on("drawer", () => {
    state.drawer = !state.drawer;
  });
});
</script>

<style scoped>
.glass-drawer {
  /* We override the background prop slightly to add backdrop filter if supported, 
     but keeping the base color */
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.drawer-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
}

.profile-avatar {
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 2px;
  background-clip: content-box;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.profile-avatar:hover {
  border-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.02);
}

.avatar-mini {
  border-width: 1px;
  padding: 1px;
}

.title-text {
  color: white;
  letter-spacing: -0.5px;
}

.subtitle-text {
  color: rgba(255, 255, 255, 0.9);
}

.nav-item {
  transition: all 0.2s ease;
  color: rgba(255, 255, 255, 0.8) !important;
}

.nav-item:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
}

.nav-item-active {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  font-weight: 600;
}

.nav-item-active .nav-icon {
  color: white !important;
}

.theme-toggle-btn {
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  min-width: 48px !important;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s;
}

.theme-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  color: white;
  transform: scale(1.1);
}

.opacity-80 { opacity: 0.8; }
.opacity-20 { opacity: 0.2; }
.fade-transition { transition: opacity 0.2s ease; }

/* Override list background since we are setting it on drawer */
.bg-transparent {
  background: transparent !important;
}
</style>
