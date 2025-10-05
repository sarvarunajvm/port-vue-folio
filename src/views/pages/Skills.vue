<template>
  <v-container
    id="skills"
    class="pa-0 ma-0 background"
    tag="section"
    fluid
    fill-height
  >
    <v-row
      align="center"
      justify="center"
      align-content="center"
    >
      <v-col
        cols="auto"
        align-self="center"
      >
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col
              cols="12"
              class="ma-5"
            >
              <v-row
                align="center"
                justify="center"
              >
                <p class="myFont h2 accent--text pr-4">
                  🤔 LETS SEE WHAT I GOT!
                </p>
              </v-row>
              <v-row
                v-for="skill in skillsList"
                :key="skill.id"
                class="my-5 d-flex flex-column flex-md-row"
              >
                <v-card outlined class="mx-5 my-2 overflow-y-auto" style="width: min(90vw, 900px);">
                  <v-card-title>{{ skill.title }}</v-card-title>
                  <v-card-text>
                    <v-row
                      align="center"
                      justify="center"
                      align-content="center"
                    >
                      <v-col class="ma-5 pa-0 d-flex justify-center">
                        <v-chip
                          v-for="point in skill.points"
                          :key="point.id"
                          class="mx-auto"
                          color="primary"
                        >
                          <v-icon left>
                            {{ point.value }}
                          </v-icon>
                          {{ point.name }}
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import skills from "../../data/skills.json";
export default {
  data: () => ({
    skillsList: skills,
  }),
};
</script>
<style></style>
