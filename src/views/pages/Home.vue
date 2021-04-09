<template>
  <v-container
    class="pa-0 ma-0 background"
    id="home"
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
      <v-col cols="auto" align-self="center">
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col cols="12" class="ma-5">
              <v-row align="center" justify="center" align-content="center">
                <p class="text-h1 accent--text pr-4">Saravanan</p>
                <p class="text-h1 tertiary--text">Kalimuthu</p></v-row
              >
              <v-row align="center" justify="center" align-content="center">
                <p>
                  <vue-typer
                    class="text-h3"
                    :text="[
                      'Java Developer',
                      'Software Engineer',
                      'Code Enthusiast!',
                    ]"
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
                <p class="text-h5 secondary--text pr-5">👽 Martian</p>
                <p class="text-h5 secondary--text pr-5">📱 +91 979-087-0737</p>
                <a
                  class="text-h5 pb-5"
                  href="mailto:sathishdaywalker@outlook.com"
                  >sathishdaywalker@outlook.com</a
                >
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <p class="text-center text-body-2 secondary--text pr-4">
                  4+ years experienced as a Java developer highly skilled in
                  planning, documentation, and testing across the complete
                  development life of a product ensure smooth product
                  development.Adept at identifying bugs and prescribing
                  solutions to increase the efficiency of a product. And an
                  active open-source contributor in github.
                </p>
              </v-row>
              <v-row
                align="center"
                justify="center"
                align-content="center"
                class="mt-8 pr-6"
              >
                <v-col class="ma-5 pa-0 d-flex justify-center">
                  <v-icon class="mx-auto" color="tertiary" x-large>
                    mdi-linkedin
                  </v-icon>
                  <v-icon class="mx-auto" color="tertiary" x-large>
                    mdi-github
                  </v-icon>
                  <v-icon class="mx-auto" color="tertiary" x-large>
                    mdi-stack-overflow
                  </v-icon>
                  <v-icon class="mx-auto" color="tertiary" x-large>
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
<script>
export default {
  data: () => ({}),
};
</script>
<style>
.vue-typer .custom.char {
  color: var(--v-primary-base);
}
</style>
