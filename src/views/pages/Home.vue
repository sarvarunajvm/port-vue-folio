<template>
  <v-container
    id="home"
    class="pa-0 ma-0 background"
    tag="section"
    fluid
    fill-height
  >
    <v-row
      style="height: 100vh"
      align="center"
      justify="center"
      align-content="center"
    >
      <v-col
        cols="auto"
        align-self="center"
      >
        <div class="d-flex flex-column justify-center">
      <v-row class="ma-5" no-gutters>
            <v-col
              cols="12"
              class="ma-5"
            >
              <v-row align="center" justify="center" align-content="center">
                <p class="myFont h1 accent--text pr-4" style="font-size: clamp(2rem, 6vw, 6rem)">
                  {{ about.firstname }}
                </p>
                <p class="myFont h1 tertiary--text" style="font-size: clamp(2rem, 6vw, 6rem)">
                  {{ about.lastname }}
                </p>
              </v-row>
              <v-row
                align="center"
                justify="center"
                align-content="center"
              >
                <p class="text-center">
                  <Typer
                    class="myFont h3"
                    :text="about.titles"
                    :repeat="Infinity"
                    :pre-type-delay="100"
                    :type-delay="100"
                    :pre-erase-delay="3000"
                    :erase-delay="300"
                  />
                </p>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <p class="myFont h5 secondary--text pr-2" style="font-size: clamp(1rem, 3vw, 1.5rem)">
                  {{ about.nickname }}
                </p>
                <p class="myFont h5 secondary--text pr-2" style="font-size: clamp(1rem, 3vw, 1.5rem)">
                  {{ about.phone }}
                </p>
                <a class="myFont h5 pb-5" :href="mailto" style="font-size: clamp(1rem, 3vw, 1.5rem)">{{ about.email }}</a>
              </v-row>
              <v-row
                align="center"
                justify="center"
                align-content="center"
              >
                <v-col
                  cols="12"
                  sm="12"
                  md="9"
                  lg="8"
                  xl="8"
                >
                  <p class="text-center myFont body2 secondary--text pr-4">
                    {{ about.summary }}
                  </p>
                </v-col>
              </v-row>
              <v-row
                align="center"
                justify="center"
                align-content="center"
                class="mt-8 pr-6"
              >
                <v-col class="ma-5 pa-0 d-flex justify-center">
                  <v-icon
                    class="mx-auto"
                    color="tertiary"
                    x-large
                    @click="popup(about.social.linkedin)"
                  >
                    mdi-linkedin
                  </v-icon>
                  <v-icon
                    class="mx-auto"
                    color="tertiary"
                    x-large
                    @click="popup(about.social.github)"
                  >
                    mdi-github
                  </v-icon>
                  <v-icon
                    class="mx-auto"
                    color="tertiary"
                    x-large
                    @click="popup(about.social.stackoverflow)"
                  >
                    mdi-stack-overflow
                  </v-icon>
                  <v-icon
                    class="mx-auto"
                    color="tertiary"
                    x-large
                    @click="popup(about.social.devto)"
                  >
                    mdi-dev-to
                  </v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Typer from "../../components/Typer.vue";
import aboutJson from "../../data/about.json";
import { computed } from "vue";
const about = aboutJson;
const mailto = computed(() => "mailto:" + about.email);
function popup(url) {
  window.open(url);
}
</script>
<style>
.vue-typer .custom.char {
  color: var(--v-primary-base);
}
</style>
