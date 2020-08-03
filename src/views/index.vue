<template>
  <v-app>
    <core-navigation />
    <core-drawer />
    <core-view />
  </v-app>
</template>
<script>
export default {
  name: "CoreIndex",

  components: {
    CoreDrawer: () => import("./components/core/Drawer"),
    CoreNavigation:()=>import("./components/core/NavBar"),
    CoreView: () => import("./components/core/View"),
  },

  data: () => ({
    
  }),
};
</script>