<template>
  <v-container id="home" tag="section" fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center" align-content="center">
      <v-col align-self="center">
        <!-- //Normal screen -->
        <v-img contain src="../../assets/first.jpg">
          <v-row
            class="fill-height d-none d-sm-flex"
            align="end"
            justify="end"
            align-content="center"
          >
            <v-col cols="8" align-self="center">
              <div>
                <v-row align="center" justify="center" align-content="center">
                  <v-col cols="9">
                    <div class="d-flex flex-column pt-2 border-radius">
                      <p
                        class="font-weight-bold text-left text--primary text-lg-h1 text-md-h1"
                      >OOP'S</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center" align-content="center">
                  <v-col cols="9">
                    <p
                      class="text--primary text-left text-lg-h6 text-md-h6 text-sm-body-2"
                    >
                      Yup that's right am the person who fix the problem that you don't know you have,
                      in a way you don't understand .
                    </p>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-img>
        <!-- mobile Only -->
        <v-row
          class="d-flex d-sm-none"
          align="end"
          justify="end"
          align-content="center"
        >
          <v-col cols="12" align-self="center">
            <v-card color="secondary">
              <v-row align="center" justify="center" align-content="center">
                <v-col cols="9">
                  <div class="d-flex flex-column pt-2 border-radius">
                    <p
                      class="font-weight-bold text-left text--primary text-h1"
                    >OOP'S</p>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <v-col cols="9">
                  <p
                    class="text--primary text-left text-h6"
                  >
                    Yup that's right am the person who fix the problem that you don't know you have,
                    in a way you don't understand .
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    showNav: false,
  }),
};
</script>
<style scoped>
</style>