<template>
  <v-container id="home" tag="section" fluid class="fill-height">
    <v-row align="center" justify="center" align-content="center" no-gutters>
      <p class="text--primary text-h2 my-0 py-1 px-3">The Code I ✍️</p>
    </v-row>
    <v-row class="fill-height" align="center" justify="center" align-content="center">
      <v-col align-self="center">
        <v-row class="pa-5 mt-6" no-gutters align="center" justify="center" align-content="center">
          <v-col v-for="(snip,index) in snips" cols="12" sm="6" md="3" lg="3" xl="3" :key="index">
            <div
              class="d-block d-flex-column justify-center align-center align-self-center text-center"
            >
              <div>
                <v-icon color="primary" size="120">{{snip.icon}}</v-icon>
              </div>
              <div>
                <p class="text-decoration-overline font-weight-medium">{{snip.message}}</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="pa-5 mt-12" no-gutters align="center" justify="center" align-content="center">
          <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="pa-2">
            <p class="text-h3">👋 I’m Saravanan, nice to meet you. Please take a look around!</p>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    snips: [
      { message: "World Class Apps", icon: "mdi-diamond-stone" },
      { message: "Tailored To Needs", icon: "mdi-format-paint" },
      { message: "Pixel-Perfect Code", icon: "mdi-ruler-square" },
      { message: "Built With Love", icon: "mdi-heart-outline" },
    ],
  }),
};
</script>
<style scoped>
</style>