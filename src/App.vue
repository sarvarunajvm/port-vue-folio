<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import CommandPalette from '@/components/shared/CommandPalette.vue'
</script>

<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
  <CommandPalette />
  <div class="noise-overlay" aria-hidden="true" />
</template>

<style lang="scss">
@use '@/styles/main.scss';

.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 0.4s var(--dramatic),
    transform 0.4s var(--dramatic),
    filter 0.4s var(--dramatic);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(4px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  filter: blur(2px);
}
</style>
