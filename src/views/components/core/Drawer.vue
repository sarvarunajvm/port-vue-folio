<template>
  <v-navigation-drawer
    id="navigation-drawer"
    v-model="state.drawer"
    color="accent"
    :rail="state.mini"
    :temporary="isMobile"
    app
    height="100vh"
  >
    <div class="d-flex flex-column align-center align-content-center align-self-center justify-center fill-height">
      <v-avatar :size="avatarSize">
        <v-img src="../../../assets/me.jpg" />
      </v-avatar>
      <v-list
        nav
        rounded
      >
        <v-list-item
          v-for="(item, i) in state.items"
          :key="i"
          :to="item.link"
          :title="state.mini ? '' : item.title"
          :prepend-icon="state.mini ? item.icon : undefined"
          active-class="border"
        />
      </v-list>
    </div>

    <template #append>
      <v-row justify="center">
        <v-btn
          icon
          class="pa-5"
          @click="toggleTheme"
        >
          <v-icon
            color="primary"
            size="x-large"
          >
            {{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}
          </v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>
<script setup>
import { inject, onMounted, onBeforeUnmount, reactive, computed } from "vue";
import { useDisplay, useTheme } from "vuetify";

const bus = inject("bus");
const theme = useTheme();
const display = useDisplay();
const avatarSize = computed(() => {
  const bp = display.name.value;
  if (bp === 'xs') return 96;
  if (bp === 'sm') return 128;
  return 164;
});

const state = reactive({
  selected: 0,
  drawer: true,
  mini: false,
  items: [
    { title: "About Me", icon: "mdi-account-tie-outline", link: "home" },
    { title: "Experience", icon: "mdi-chart-line", link: "experience" },
    { title: "Projects", icon: "mdi-view-list-outline", link: "projects" },
    { title: "Skills", icon: "mdi-chart-bar", link: "skills" },
    { title: "Education", icon: "mdi-school-outline", link: "education" },
    { title: "Resume", icon: "mdi-clipboard-text-outline", link: "resume" },
  ],
});

const isMobile = computed(() => display.name.value === 'xs');
const isDark = computed(() => theme.global.current.value.dark);
function applyTheme(name) {
  if (typeof theme.change === "function") theme.change(name);
  else theme.global.name.value = name;
}
function toggleTheme() {
  const next = isDark.value ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch {
    // Ignore storage errors
  }
}

function onResize() {
  const bp = display.name.value;
  if (bp === "sm") {
    state.mini = true;
    state.drawer = true;
    bus?.emit("nav", false);
  } else if (bp === "xs") {
    state.mini = false;
    state.drawer = false;
    bus?.emit("nav", true);
  } else {
    state.mini = false;
    state.drawer = true;
    bus?.emit("nav", false);
  }
}

onMounted(() => {
  // apply saved theme preference
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    }
  } catch {
    // Ignore storage errors
  }
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
  bus?.on("drawer", () => {
    state.drawer = !state.drawer;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize, { passive: true });
});
</script>
<style scoped>
.border {
  color: rgb(var(--v-theme-background));
  background-color: rgb(var(--v-theme-tertiary));
}
</style>
