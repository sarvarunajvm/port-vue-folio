<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="fill-height"
      >
        <v-dialog
          v-model="dialog"
          persistent
          max-width="50vw"
          width="300"
        >
          <v-card
            hover
            height="300"
            width="300"
            max-height="90vh"
            max-width="50vw"
          >
            <Waiter />
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Waiter from "../components/Waiter.vue";

export default {
  components: {
    Waiter,
  },
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    this.loadAndMove();
  },
  methods: {
    loadAndMove() {
      this.dialog = true;
      setTimeout(() => {
        this.dialog = false;
        this.$router.push("/home");
      }, 5000);
    },
  },
};
</script>
<style lang="scss" scoped></style>
