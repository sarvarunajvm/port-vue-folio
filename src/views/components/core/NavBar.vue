<template>
  <div v-if="showNav">
    <v-app-bar
      color="primary"
      absolute
      dense
      app
      bottom
      elevation="12"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      floating
      fixed
    >

          <v-btn @click="openDrawer" icon color="secondary">
            <v-icon>mdi-menu-up-outline</v-icon>
          </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { bus } from "../../../main";

export default {
  data: () => ({
    showNav: false,
  }),
  beforeMount() {
    bus.$on("nav", (status) => {
      console.log(status);
      this.$data.showNav = status;
    });
  },
  methods: {
    openDrawer() {
      bus.$emit("drawer");
    },
  },
};
</script>