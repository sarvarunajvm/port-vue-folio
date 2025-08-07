<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-dialog persistent v-model="dialog" max-width="50vw" width="300">
          <v-card tile hover height="300" width="300" max-height="90vh" max-width="50vw">
            <waiter />
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    Waiter: () => import("../components/Waiter.vue"),
  },
  methods: {
    loadAndMove() {
      this.$data.dialog = true;
      setTimeout(() => {
        this.$data.dialog = false;
        this.$router.push("home");
      }, 5000);
    },
  },
  mounted() {
    this.loadAndMove();
  },
};
</script>
<style lang="scss" scoped></style>
