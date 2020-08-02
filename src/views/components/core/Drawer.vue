<template>
  <v-card class="mx-auto">
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      :expand-on-hover="expandOnHover"
      mobile-breakpoint="600"
      app
      bottom
      color="primary"
    >
      <v-list color="secondary">
        <v-list-item class="px-2 mx-1">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Saravanan Kalimuthu</v-list-item-title>
            <v-list-item-subtitle>sarvaruna@outlook.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :link="item.link">
          <v-list-item-icon>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      mini: false,
      expandOnHover: false,
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
      if (this.$vuetify.breakpoint.name === "sm") {
        this.mini = true;
        this.expandOnHover = true;
      } else {
        this.mini = false;
        this.expandOnHover = false;
      }
    },
  },
};
</script>