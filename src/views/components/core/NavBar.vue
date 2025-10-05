<template>
  <div v-if="showNav">
    <v-bottom-navigation
      fixed
      bg-color="secondary"
      color="primary"
      height="72"
      class="nav-bar"
    >
    </v-bottom-navigation>
    <v-fab-transition>
      <v-btn
        class="fab-floating"
        color="primary"
        size="large"
        rounded="circle"
        elevation="8"
        @click="openDrawer"
      >
        <v-icon>mdi-menu-up-outline</v-icon>
      </v-btn>
    </v-fab-transition>
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
.nav-bar {
  z-index: 1000;
  overflow: visible;
  bottom: env(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  /* Expose height to position floating FAB just above */
  --nav-height: 72px;
}
.fab-floating {
  position: fixed;
  right: 16px;
  bottom: calc(env(safe-area-inset-bottom) + var(--nav-height) + 12px);
  z-index: 1100;
}
</style>
