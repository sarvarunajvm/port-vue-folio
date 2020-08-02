<template>
  <v-app>
    <core-drawer />
    <core-view />
  </v-app>
</template>
<script>
export default {
  name: "CoreIndex",

  components: {
    CoreDrawer: () => import("./components/core/Drawer"),
    CoreView: () => import("./components/core/View"),
  },

  data: () => ({
    
  }),
};
</script>