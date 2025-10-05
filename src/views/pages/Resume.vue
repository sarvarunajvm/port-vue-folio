<template>
  <v-container
    id="Resume"
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
                  📄 Resume
                </p>
              </v-row>
              <v-row
                class="pa-2"
                align="center"
                justify="end"
                align-content="center"
              >
                <v-fab-transition>
                  <v-btn
                    color="primary"
                    elevation="2"
                    fab
                    large
                    bottom
                    right
                    class="v-btn--example"
                    @click="downloadPDf"
                  >
                    <v-icon>mdi-download</v-icon>
                    <a
                      href="../../assets/Resume.pdf"
                      download
                    />
                  </v-btn>
                </v-fab-transition>
              </v-row>
              <v-row>
                <v-img
                  lazy-src="../../assets/Resume.gif"
                  src="../../assets/Resume.gif"
                />
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({}),
  methods: {
    downloadPDf() {
      axios
        .get("/port-vue-folio/files/Resume.pdf", {
          responseType: "blob", //important
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          let fname = "Saravanan Resume.pdf";
          link.href = url;
          link.setAttribute("download", fname);
          document.body.appendChild(link);
          link.click();
        });
    },
  },
};
</script>
<style></style>
