<template>
  <v-navigation-drawer
    color="accent"
    id="navigation-drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    mini-variant-width="64"
    mobile-breakpoint="600"
    app
    bottom
    light
    height="100vh"
  >
    <v-layout
      fill-height
      class="d-flex flex-column align-center align-content-center align-self-center justify-center"
    >
      <v-avatar size="164">
        <v-img src="../../../assets/me.jpg"></v-img>
      </v-avatar>
      <v-list rounded>
        <v-list-item-group light v-model="selected" active-class="border">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            exact
            exact-active-class="border"
          >
            <v-list-item-icon v-if="mini">
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content v-else>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-layout>

    <template v-slot:append>
      <v-row justify="center">
        <v-icon
          class="pa-5"
          color="primary"
          x-large
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          {{
            $vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night"
          }}
        </v-icon>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { bus } from "../../../main";

export default {
  data() {
    return {
      selected: 0,
      drawer: true,
      mini: false,
      items: [
        { title: "About Me", icon: "mdi-account-tie-outline", link: "home" },
        { title: "Experience", icon: "mdi-chart-line", link: "experience" },
        { title: "Projects", icon: "mdi-view-list-outline", link: "projects" },
        { title: "Skills", icon: "mdi-chart-bar", link: "skills" },
        { title: "Education", icon: "mdi-school-outline", link: "education" },
        { title: "Resume", icon: "mdi-clipboard-text-outline", link: "resume" }
      ],
      right: null
    };
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      console.log(this.$vuetify);
      if (this.$vuetify.breakpoint.name === "sm") {
        this.mini = true;
      } else if (this.$vuetify.breakpoint.name === "xs") {
        this.mini = false;
        bus.$emit("nav", true);
      } else {
        this.mini = false;
        bus.$emit("nav", false);
      }
    }
  },
  beforeMount() {
    bus.$on("drawer", () => {
      this.$data.drawer = !this.$data.drawer;
    });
  }
};
</script>
<style scoped>
.border {
  color: var(--v-primary-base);
  background-color: var(--v-secondary-base);
}
</style>