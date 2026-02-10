<template>
  <v-app>
    <CoreNavigation />
    <CoreDrawer />
    <CoreView />
  </v-app>
</template>
<script setup>
import CoreDrawer from "./components/core/Drawer.vue";
import CoreNavigation from "./components/core/NavBar.vue";
import CoreView from "./components/core/View.vue";
</script>
