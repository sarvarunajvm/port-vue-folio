<template>
  <v-card color="accent" class="mx-auto" :width="getWidth" :height="getHeight" outlined>
    <v-card-text>
      <v-card-title class="background--text h6 myFont mb-1">{{item.title}}</v-card-title>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="tertiary--text ovrline mb-4">{{item.language}}</div>
          <v-list-item-subtitle class="background--text myFont body2">{{item.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>

    <v-card-actions>
      <v-row align="center" justify="end" align-content="center">
        <v-btn class="mr-5" color="primary" @click="dialog = true">OPEN</v-btn>
      </v-row>
    </v-card-actions>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar color="secondary">
          <v-toolbar-title class="text--primary">{{item.title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon color="primary" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>{{item.description}}</v-subheader>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <vue-embed-gist :gist-id="item.gistId" :file="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import VueEmbedGist from "vue-embed-gist";
export default {
  props: {
    item: Object,
    height: Number,
    width: Number,
  },
  components: {
    VueEmbedGist,
  },
  computed: {
    getWidth() {
      return this.width * 180;
    },
    getHeight() {
      return this.height * 50;
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>