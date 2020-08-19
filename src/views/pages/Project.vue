<template>
  <v-container id="contact" tag="section" fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center" align-content="center">
      <v-col cols="12" align-self="center">
        <v-row align="center" justify="center" align-content="center" no-gutters>
          <p class="text--primary text-h2 my-0 py-1 px-3">Lets See Some Of My 👨‍💻</p>
        </v-row>
        <v-row v-for="(snip,index) in snips" align="center" justify="center" align-content="center" no-gutters :key="index">
          <v-card outlined width="80vw" max-width="80vw" max-height="30vh" class="mx-auto my-10">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{snip.title}}</v-list-item-title>
                <v-list-item-subtitle>{{snip.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn tile right color="secondary" class="text--primary" @click="openGistDialog(snip)">
                <v-icon left>mdi-open-in-new</v-icon>OPEN
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar color="secondary">
            <v-toolbar-title class="text--primary">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" @click="clearGistInfo">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list subheader>
            <v-subheader>{{description}}</v-subheader>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <vue-embed-gist :gist-id="gistId" :file="fileName" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import VueEmbedGist from "vue-embed-gist";
export default {
  data: () => ({
    dialog: false,
    fileName:"",
    gistId:"",
    title:"",
    description:"",
    snips: [
      {
        title: "Vue Config",
        description: "Vue configuration observation for vue-cli",
        gistId: "f284fdc92dd66f8f16e6dee335ff3cef",
        file: "vue-config.js",
      },
      {
        title: "Vuetify Cheat Sheet",
        description: "This is only having the CSS epl for vuetify.js",
        gistId: "3927a646116cc55aa594e608655e7c58",
        file: "Vuetify.md",
      },
    ],
  }),
  components: {
    VueEmbedGist,
  },
  methods: {
      openGistDialog(gist){
        this.$data.title = gist.title;
        this.$data.description = gist.description;
        this.$data.gistId = gist.gistId;
        this.$data.fileName = gist.file;
        this.$data.dialog = true;
      },
      clearGistInfo(){
        this.$data.title = "";
        this.$data.description = "";
        this.$data.gistId = "";
        this.$data.fileName = "";
        this.$data.dialog = false;
      }
  },
};
</script>
<style scoped>
.scroll {
  overflow-y: scroll;
}
</style>
