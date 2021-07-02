<template>
  <v-container class="pa-0 ma-0 background" id="home" tag="section" fluid fill-height>
    <v-row style="height: 100vh" align="center" justify="center" align-content="center">
      <v-col cols="auto" align-self="center">
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col cols="12" class="ma-5">
              <v-row align="center" justify="center" align-content="center">
                <p class="myFont h1 accent--text pr-4">{{about.firstname}}</p>
                <p class="myFont h1 tertiary--text">{{about.lastname}}</p>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <p>
                  <vue-typer
                    class="myFont h3"
                    :text="about.titles"
                    :repeat="Infinity"
                    :shuffle="true"
                    initial-action="erasing"
                    :pre-type-delay="100"
                    :type-delay="100"
                    :pre-erase-delay="3000"
                    :erase-delay="300"
                    erase-style="backspace"
                    :erase-on-complete="false"
                    caret-animation="expand"
                  ></vue-typer>
                </p>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <p class="myFont h5 secondary--text pr-5">{{about.nickname}}</p>
                <p class="myFont h5 secondary--text pr-5">{{about.phone}}</p>
                <a class="myFont h5 pb-5" :href="mailto">{{about.email}}</a>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <v-col cols="12" sm="12" md="9" lg="8" xl="8">
                  <p class="text-center myFont body2 secondary--text pr-4">{{about.summary}}</p>
                </v-col>
              </v-row>
              <v-row align="center" justify="center" align-content="center" class="mt-8 pr-6">
                <v-col class="ma-5 pa-0 d-flex justify-center">
                  <v-icon
                    @click="popup(about.social.linkedin)"
                    class="mx-auto"
                    color="tertiary"
                    x-large
                  >mdi-linkedin</v-icon>
                  <v-icon
                    @click="popup(about.social.github)"
                    class="mx-auto"
                    color="tertiary"
                    x-large
                  >mdi-github</v-icon>
                  <v-icon
                    @click="popup(about.social.stackoverflow)"
                    class="mx-auto"
                    color="tertiary"
                    x-large
                  >mdi-stack-overflow</v-icon>
                  <v-icon
                    @click="popup(about.social.devto)"
                    class="mx-auto"
                    color="tertiary"
                    x-large
                  >mdi-dev-to</v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import aboutJson from "../../data/about.json";
export default {
  data: () => ({
    about: aboutJson,
  }),
  computed: {
    mailto() {
      return "mailto:" + this.about.email;
    },
  },
  methods: {
    popup(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style>
.vue-typer .custom.char {
  color: var(--v-primary-base);
}
</style>
