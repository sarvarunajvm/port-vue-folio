<template>
  <v-container class="pa-0 ma-0 background" id="project" tag="section" fluid fill-height>
    <v-row align="center" justify="center" align-content="center">
      <v-col cols="auto" align-self="center">
        <div class="d-flex flex-column justify-center">
          <v-row class="ma-5">
            <v-col cols="12" class="ma-5">
              <v-row align="center" justify="center">
                <p class="myFont h2 accent--text pr-4">Lets See Some Of My 🔨</p>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div>
          <grid-layout
            :layout.sync="layout"
            :col-num="6"
            :row-height="50"
            :is-draggable="draggable"
            :is-resizable="resizable"
            :responsive="responsive"
            :vertical-compact="true"
            :use-css-transforms="true"
          >
            <grid-item
              v-for="item in layout"
              :key="item.i"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
            >
              <gist-card :width="item.w" :height="item.h" :item="item.snip"></gist-card>
            </grid-item>
          </grid-layout>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import GistCard from "../../components/GistCard.vue";
import { GridLayout, GridItem } from "vue-grid-layout";
import axios from "axios";
export default {
  components: {
    GridLayout,
    GridItem,
    GistCard
  },
  data: () => ({
    dialog: false,
    sample: [
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6},
      { x: 2, y: 0, w: 6, h: 6}
    ],
    layout: [],
    draggable: true,
    resizable: true,
    responsive: true,
  }),
  methods: {
    getGistInfos() {
      var self = this;

      axios
        .get("https://api.github.com/users/sarvarunajvm/gists")
        .then(function(response) {
          var ind = 0;
          response.data.forEach(element => {
            if (element.public === true) {
              console.log(element);
              let snip = {};
              let files = element.files[Object.keys(element.files)[0]];

              snip.gistId = element.id;
              snip.description = element.description;
              snip.title = files.filename;
              snip.language = files.language;
              let layoutEle = JSON.parse(
                JSON.stringify(self.sample[Math.floor(Math.random() * 10)])
              );
              console.log(ind, layoutEle);
              layoutEle.y = ind * 5;
              layoutEle.i = ind.toString();
              layoutEle.snip = snip;
              console.log(ind, layoutEle);
              self.layout.push(layoutEle);
              ind++;
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  },
  created() {
    this.getGistInfos();
  }
};
</script>
<style scoped>
.scroll {
  overflow-y: scroll;
}
</style>
