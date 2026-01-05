<template>
  <v-main app>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-main>
</template>

<script setup>
</script>

<style>
/* Ensure the main content area has some breathing room if needed, 
   though individual pages handle their own layout */
.v-main {
  /* optional global padding or background logic */
}
</style>
