<template>
  <div v-if="showNav">
    <v-scale-transition origin="center center">
      <v-btn
        v-show="true"
        class="fab-menu"
        color="primary"
        size="large"
        icon
        elevation="4"
        @click="openDrawer"
      >
        <v-icon size="28">mdi-menu</v-icon>
      </v-btn>
    </v-scale-transition>
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
const bus = inject("bus");
const showNav = ref(false);

onMounted(() => {
  bus?.on("nav", (status) => {
    showNav.value = status;
  });
});

function openDrawer() {
  bus?.emit("drawer");
}
</script>

<style scoped>
.fab-menu {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  /* Glassmorphism for the button itself if desired, or solid color */
  /* For better visibility on mobile, solid primary is usually safer, 
     but let's add a subtle glow */
  box-shadow: 0 4px 14px rgba(var(--v-theme-primary), 0.4);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fab-menu:active {
  transform: scale(0.9);
}
</style>
