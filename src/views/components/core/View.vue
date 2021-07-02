<template>
  <v-main app>
    <vue-page-transition name="fade-in-left">
      <router-view></router-view>
    </vue-page-transition>
  </v-main>
</template>

<script>
export default {
  name: "CoreView",
};
</script>