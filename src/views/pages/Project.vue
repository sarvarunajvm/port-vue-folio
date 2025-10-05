<template>
  <v-container
    id="project"
    class="pa-4 ma-0 background"
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
                  Lets See Some Of My 🔨
                </p>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div>
          <div class="bento-grid">
            <div
              v-for="item in layout"
              :key="item.i"
              class="bento-item"
              :style="gridStyle(item)"
            >
              <gist-card :item="item.snip" />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  
</template>
<script>
import GistCard from "../../components/GistCard.vue";
import axios from "axios";
import aboutJson from "../../data/about.json";
export default {
  components: {
    GistCard,
  },
  data: () => ({
    about: aboutJson,
    dialog: false,
    sample: [
      { w: 2, h: 2 },
      { w: 2, h: 1 },
      { w: 1, h: 2 },
      { w: 1, h: 1 },
    ],
    layout: [],
  }),
  created() {
    this.getGistInfos();
  },
  methods: {
    gridStyle(item) {
      const col = item.w || 1;
      const row = item.h || 1;
      return { gridColumn: `span ${col}`, gridRow: `span ${row}` };
    },
    getGistInfos() {
      var self = this;

      axios
        .get("https://api.github.com/users/" + self.about.username + "/gists")
        .then(function (response) {
          var ind = 0;
          response.data.forEach((element) => {
            if (element.public === true) {
              let snip = {};
              let files = element.files[Object.keys(element.files)[0]];

              snip.gistId = element.id;
              snip.description = element.description;
              snip.title = files.filename;
              snip.language = files.language;
              const pick = self.sample[Math.floor(Math.random() * self.sample.length)];
              const layoutEle = { w: pick.w, h: pick.h, i: ind.toString(), snip };
              self.layout.push(layoutEle);
              ind++;
            }
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
#project {
  /* Mobile-first padding */
  padding: 16px;
}
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 180px;
  /* Mobile-first spacing */
  gap: 12px;
  margin: 8px;
  padding: 8px;
}

/* Tablet */
@media (min-width: 600px) {
  #project { padding: 24px; }
  .bento-grid {
    gap: 20px;
    margin: 16px;
    padding: 12px;
  }
}

/* Desktop and up */
@media (min-width: 960px) {
  #project { padding: 32px; }
  .bento-grid {
    gap: 32px;
    margin: 24px;
    padding: 16px;
  }
}
.bento-item { width: 100%; height: 100%; }
</style>
