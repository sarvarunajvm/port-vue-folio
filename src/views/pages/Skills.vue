<template>
  <v-container id="skills" tag="section" fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center" align-content="center">
      <v-col cols="12" align-self="center">
        <v-row no-gutters align="center" justify="center" align-content="center">
          <p class="text--primary text-h2 my-0 py-1 px-3">🤔 LETS SEE WHAT I GOT!</p>
        </v-row>

        <v-row
          v-for="(cardprops,index) in cardList"
          :key="index"
          no-gutters
          class="my-2 py-2"
          align="center"
          justify="center"
          align-content="center"
        >
          <v-col class="mt-6" cols="12" align-self="center">
            <skill-card :title="cardprops.title" :cardItems="cardprops.cardItems"></skill-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: {
    SkillCard: () => import("../../components/SkillCard"),
  },
  data: () => ({
    cardList: [
      {
        title: "FRONTEND",
        cardItems: [
          { title: "HTML", icon: "mdi-language-html5", rating: "6" },
          { title: "CSS", icon: "mdi-language-css3", rating: "5" },
          { title: "JAVASCRIPT", icon: "mdi-language-javascript", rating: "8" },
          { title: "VUE", icon: "mdi-vuejs", rating: "7" },
        ],
      },
      {
        title: "BACKEND",
        cardItems: [
          { title: "JAVA", icon: "mdi-language-java", rating: "8" },
          { title: "SPRING", icon: "mdi-electron-framework", rating: "5" },
          { title: "HIBERNATE", icon: "mdi-database", rating: "6" },
          { title: "PYTHON", icon: "mdi-language-python", rating: "5" },
        ],
      },
      {
        title: "DATABASE",
        cardItems: [
          { title: "POSTGRES", icon: "mdi-evernote", rating: "8" },
          { title: "MYSQL", icon: "mdi-decagram", rating: "6" },
          { title: "ORACLE", icon: "mdi-database-sync", rating: "5" },
        ],
      },
      {
        title: "BUILD TOOLS",
        cardItems: [
          { title: "NPM", icon: "mdi-npm", rating: "7" },
          { title: "GRADLE", icon: "mdi-elephant", rating: "7" },
        ],
      },
      {
        title: "OTHERS",
        cardItems: [
          { title: "GIT", icon: "mdi-git", rating: "8" },
          { title: "GITLAB", icon: "mdi-gitlab", rating: "7" },
          { title: "AZURE", icon: "mdi-microsoft-azure", rating: "6" },
        ],
      },
    ],
  }),
};
</script>
<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>