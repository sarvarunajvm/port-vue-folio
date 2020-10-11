import Vue from 'vue'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
import VueAnimated from '@codekraft-studio/vue-animated'
import vuetify from './plugins/vuetify';
import router from './router';


Vue.config.productionTip = false

export const bus = new Vue();
Vue.use(VuePageTransition)
Vue.use(VueAnimated)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
