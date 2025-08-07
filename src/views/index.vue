<template>
  <v-app class="myFont">
    <core-navigation />
    <core-drawer />
    <core-view />
  </v-app>
</template>
<script>
export default {
  name: "CoreIndex",

  components: {
    CoreDrawer: () => import("./components/core/Drawer.vue"),
    CoreNavigation: () => import("./components/core/NavBar.vue"),
    CoreView: () => import("./components/core/View.vue"),
  },

  data: () => ({}),
};
</script>
<style>
</style>