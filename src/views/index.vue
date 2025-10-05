<template>
  <v-app class="myFont">
    <CoreNavigation />
    <CoreDrawer />
    <CoreView />
  </v-app>
</template>
<script>
import CoreDrawer from "./components/core/Drawer.vue";
import CoreNavigation from "./components/core/NavBar.vue";
import CoreView from "./components/core/View.vue";

export default {
  name: "CoreIndex",
  components: {
    CoreDrawer,
    CoreNavigation,
    CoreView,
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>