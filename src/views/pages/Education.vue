<template>
  <v-container class="pa-0 ma-0 background" id="education" tag="section" fluid fill-height>
    <v-row align="center" justify="center" align-content="center">
      <v-col cols="auto" align-self="center">
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col cols="12" class="ma-5">
              <v-row align="center" justify="center">
                <p class="myFont h2 accent--text pr-4">Education 📚</p>
              </v-row>
              <v-row
                class="my-5 d-flex flex-column flex-md-row"
                v-for="education in educations"
                :key="education.id"
              >
                <div class="mr-auto">
                  <p class="anchor--text myFont h4 pr-4">{{ education.college }}</p>
                  <p class="secondary--text myFont subtitle1">{{ education.degree }}</p>
                  <div
                    class="secondary--text myFont body2"
                    v-for="point in education.points"
                    :key="point.id"
                    v-html="point.value"
                  ></div>
                </div>
                <div class="text-md-right">
                  <p class="tertiary--text pr-5">{{ education.period }}</p>
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
import educations from "../../data/education.json";
export default {
  data: () => ({
    educations: educations,
  }),
};
</script>
<style></style>
