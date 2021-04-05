<template>
  <vue-page-transition name="fade-in-up">
    <router-view />
  </vue-page-transition>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
html {
  overflow: scroll;
  overflow-x: hidden;
  font-family: "Rubik" !important;
}
#app {
  font-family: "Rubik" !important;
}
.v-application {
  font-family: "Rubik" !important;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
.background {
  background-color: var(--v-background-base) !important;
}
</style>