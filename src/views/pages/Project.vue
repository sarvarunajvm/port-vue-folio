<template>
  <v-container
    id="project"
    class="pa-4 pa-md-12 background"
    tag="section"
    fluid
    fill-height
  >
    <div class="background-overlay"></div>
    <v-row
      justify="center"
      class="fill-height position-relative"
      style="z-index: 1;"
    >
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12 slide-up-item" style="animation-delay: 0.1s">
          <h2 class="h2 accent--text mb-4">
            Projects <span class="emoji">🔨</span>
          </h2>
          <div class="divider mx-auto primary"></div>
        </div>
        
        <div class="bento-grid">
          <div
            v-for="(item, index) in layout"
            :key="item.i"
            class="bento-item slide-up-item"
            :style="{ ...gridStyle(item), animationDelay: (index + 2) * 0.1 + 's' }"
          >
            <gist-card :item="item.snip" />
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
        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 90% 10%, rgba(var(--v-theme-primary), 0.05) 0%, transparent 40%);
  pointer-events: none;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 2px;
}

.emoji {
  display: inline-block;
  animation: hammer 2s infinite;
  transform-origin: 50% 100%;
}

@keyframes hammer {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-20deg); }
  20% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
  gap: 24px;
}

.bento-item {
  width: 100%;
  height: 100%;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-item {
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
</style>
