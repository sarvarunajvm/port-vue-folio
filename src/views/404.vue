<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row class="fill-height">
          <v-col cols="12" align-self="center">
            <v-row align="center" justify="center" align-content="center">
              <v-col cols="10">
                <div>
                  <p class="text-h3 text-center my-0 py-0">Comming Soon...</p>
                  <p class="text-overline text-center my-0 py-0">
                    Website is currently undergoing development.Should be up
                    shortly.
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" align-content="center">
              <v-img src="../assets/UC.svg" contain max-width="70vw" max-height="70vh"></v-img>
            </v-row>
            <v-row justify="center" align="center" align-content="center">
              <v-col cols="6" sm="6" md="4" lg="4" xl="3" align-self="center">
                <div class="my-5 text-center">
                  <v-btn
                    tile
                    block
                    color="secondary"
                    class="text--primary"
                    max-height="36px"
                    @click="loadAndMove"
                  >
                    <v-icon color="primary" left>mdi-eye</v-icon>Take a Peek.
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-dialog persistent v-model="dialog" max-width="50vw" width="300">
          <v-card tile hover height="300" width="300" max-height="90vh" max-width="50vw">
            <waiter />
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    Waiter: () => import("../components/Waiter"),
  },
  methods: {
    loadAndMove() {
      this.$data.dialog = true;
      setTimeout(() => {
        this.$data.dialog = false;
        this.$router.push("home");
      }, 5000);
    },
  },
};
</script>
<style lang="scss" scoped></style>
