import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { glowFollow } from './directives/glowFollow'

const app = createApp(App)
app.use(router)
app.directive('glow-follow', glowFollow)
app.mount('#app')
