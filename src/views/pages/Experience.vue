<template>
  <v-container
    class="pa-0 ma-0 background"
    id="experience"
    tag="section"
    fluid
    fill-height
  >
    <v-row align="center" justify="center" align-content="center">
      <v-col cols="auto" align-self="center">
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col cols="12" class="ma-5">
              <v-row align="center" justify="center">
                <p class="text-h2 accent--text pr-4">Work Experience 👨‍💻</p>
              </v-row>
              <v-row
                class="my-5 d-flex flex-column flex-md-row"
                v-for="experience in experiences"
                :key="experience.id"
              >
                <div class="mr-auto">
                  <p class="anchor--text text-h4 pr-4">{{ experience.designation }}</p>
                  <p class="secondary--text text-subtitle-1">{{ experience.company }}</p>
                  <div
                    class="secondary--text text-body-2"
                    v-for="point in experience.points"
                    :key="point.id"
                    v-html="point.value"
                  ></div>
                </div>
                <div class="text-md-right">
                  <p class="tertiary--text pr-5">{{ experience.period }}</p>
                </div>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experiences from "../../data/experience.json";
export default {
  data: () => ({
    experiences: experiences,
  }),
};
</script>
<style></style>
