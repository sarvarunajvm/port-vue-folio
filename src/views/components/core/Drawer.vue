<template>
  <v-card class="mx-auto">
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      mini-variant-width="64"
      :expand-on-hover="expandOnHover"
      mobile-breakpoint="600"
      app
      bottom
      right
      light
      color="primary"
    >
      <v-list color="secondary">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://avatars.dicebear.com/api/avataaars/Saravana.svg?top[]=hat&facialHair[]=fancy&facialHairColor[]=blonde&clothes[]=hoodie&clothesColor[]=red&clothesColor[]=white&eyes[]=happy&eyebrow[]=raised&mouth[]=tongue&skin[]=light"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item class="d-none d-xs-block d-sm-none d-md-flex d-lg-block">
          <v-list-item-content>
            <v-list-item-title class="title">Saravanan Kalimuthu</v-list-item-title>
            <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense rounded>
        <v-list-item-group light v-model="model" active-class="border">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            exact
            exact-active-class="border"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import { bus } from "../../../main";

export default {
  data() {
    return {
      drawer: true,
      mini: false,
      expandOnHover: false,
      model: null,
      items: [
        { title: "About Me", icon: "mdi-account-tie-outline", link: "about" },
        { title: "Experience", icon: "mdi-chart-line", link: "experience" },
        { title: "Projects", icon: "mdi-view-list-outline", link: "projects" },
        { title: "Skills", icon: "mdi-chart-bar", link: "skills" },
        { title: "Education", icon: "mdi-school-outline", link: "education" },
        { title: "Contact", icon: "mdi-contacts-outline", link: "contact" },
        { title: "Resume", icon: "mdi-clipboard-text-outline", link: "resume" },
      ],
      right: null,
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
        this.expandOnHover = true;
      } else if (this.$vuetify.breakpoint.name === "xs") {
        this.mini = false;
        this.expandOnHover = false;
        bus.$emit("nav", true);
      } else {
        this.mini = false;
        this.expandOnHover = false;
        bus.$emit("nav", false);
      }
    },
  },
  beforeMount() {
    bus.$on("drawer", () => {
      this.$data.drawer = !this.$data.drawer;
    });
  },
};
</script>
<style scoped>
.border {
  color: var(--v-primary-base);
  background-color: var(--v-secondary-base);
  /* color: black;
  background-color: coral; */
}
</style>