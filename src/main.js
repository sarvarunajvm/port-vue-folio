import Vue from 'vue'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
import vuetify from './plugins/vuetify';
import router from './router';
import VueTyperPlugin from 'vue-typer'



Vue.config.productionTip = false

export const bus = new Vue();
Vue.use(VuePageTransition)
Vue.use(VueTyperPlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
