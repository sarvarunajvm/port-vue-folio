<template>
<v-container id="home" tag="section" fluid class="fill-height">
  <v-row class="fill-height" align="center" justify="center" align-content="center">
    <v-col>
      <v-img contain src="../../assets/first.jpg">
        <v-row class="fill-height" align="center" justify="end" align-content="center">
          <v-col cols="8" align-self="center">
            <v-row align="center" justify="center" align-content="center">
              <v-col cols="9">
                <div class="d-flex flex-column py-2">
                  <p class="font-weight-bold text--primary text-h1">OOP'S</p>
                </div>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" align-content="center">
              <v-col cols="9">
                <p class="text--primary">
                  Yup that's right am the person who fix the problem that you don't know you have,
                  in a way you don't understand .
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
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