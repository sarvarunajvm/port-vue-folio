<template>
  <v-container id="about" tag="section" fluid class="fill-height">
    <v-row class="fill-height mt-0" align="center" justify="center" align-content="center">
      <v-col align-self="center">
        <!-- //Normal screen -->
        <v-img contain src="../../assets/first.jpg">
          <v-row
            class="fill-height d-none d-sm-flex"
            align="end"
            justify="end"
            align-content="center"
          >
            <v-col cols="6" align-self="center">
              <div class="bgcolor">
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
                    <p class="text--primary text-left text-lg-h6 text-md-h6 text-sm-body-2">
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
        <v-row class="d-flex d-sm-none" align="end" justify="end" align-content="center">
          <v-col cols="12" align-self="center">
            <v-card color="secondary">
              <v-row align="center" justify="center" align-content="center">
                <v-col cols="9">
                  <div class="d-flex flex-column pt-2 border-radius">
                    <p class="font-weight-bold text-left text--primary text-h1">OOP'S</p>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" justify="center" align-content="center">
                <v-col cols="9">
                  <p class="text--primary text-left text-h6">
                    Yup that's right am the person who fix the problem that you don't know you have,
                    in a way you don't understand .
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- Planner -->
        <v-row class="mt-12" no-gutters align="center" justify="center" align-content="center">
          <v-col align-self="center" v-for="(snip,index) in snips" cols="12" xl="4" lg="4" md="4" :key="index">
            <v-card tile hover ripple>
              <v-container>
                <v-row no-gutters align="center" justify="center" align-content="center">
                  <v-col align-self="center">
                    <div class="d-flex d-flex-row">
                      <div>
                        <v-icon color="primary">{{snip.icon}}</v-icon>
                      </div>
                      <div>
                        <p class="text-h6 font-weight-medium">{{snip.title}}</p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters align="center" justify="center" align-content="center">
                  <v-col align-self="center">
                    <p>{{snip.message}}</p>
                  </v-col>
                </v-row>
              </v-container>
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
    snips: [
      {
        title: "Research",
        icon: "mdi-nfc-search-variant",
        message:
          "Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.",
      },
      {
        title: "Design",
        icon: "mdi-material-design ",
        message:
          "Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.",
      },
      {
        title: "Develop",
        icon: "mdi-developer-board",
        message:
          "Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer.",
      },
    ],
  }),
};
</script>
<style scoped>
.bgcolor {
  background-color: var(--v-secondary-base);
}
.cardbg {
  background-color: var(--v-secondary-lighten5);
}
</style>