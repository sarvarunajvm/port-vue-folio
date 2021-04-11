<template>
  <v-container
    class="pa-0 ma-0 background"
    id="Resume"
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
                <p class="myFont h2 accent--text pr-4">📄 Resume</p>
              </v-row>
              <v-row>
                <v-img
                  lazy-src="../../assets/1.jpg"
                  src="../../assets/1.jpg"
                ></v-img>
                <v-img
                  lazy-src="../../assets/2.jpg"
                  src="../../assets/2.jpg"
                ></v-img>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>
<style></style>
