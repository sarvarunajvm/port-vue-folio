<template>
  <div v-if="showNav">
    <v-bottom-navigation
    fixed
    background-color="primary"
    color="secondary"
    hide-on-scroll
    light
    app
  >
    <v-btn @click="openDrawer" class="mx-2" fab dark small>
      <v-icon>mdi-menu-up-outline</v-icon>
    </v-btn>

  </v-bottom-navigation>
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