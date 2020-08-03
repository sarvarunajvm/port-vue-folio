<template>
  <router-view />
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
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>