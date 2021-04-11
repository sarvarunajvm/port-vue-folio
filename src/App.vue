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
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
#app{
  font-family: "Kanit" !important;
}
.myFont {
  font-family: "Kanit" !important;
}
.h1 {
  font-size: 6rem !important;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.015625em !important;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem !important;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
}
.h3 {
  font-weight: 400;
  font-size: 3rem !important;
  line-height: 3.125rem;
  letter-spacing: normal !important;
}
.h4 {
  font-weight: 400;
  font-size: 2.125rem !important;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
}
.h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
}
.subtitle1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.009375em !important;
}
.subtitle2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em !important;
}
.body1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
}
.body2 {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0178571429em !important;
}
.button {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  text-transform: uppercase !important;
}
.caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
}
.ovrline {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  text-transform: uppercase !important;
}
</style>