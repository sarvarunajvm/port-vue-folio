import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: [
        // Home
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/pages/Home.vue'),
        },
        //About
        {
          name: 'About',
          path: '/about',
          component: () => import('@/views/pages/About.vue'),
        },
        //Experience
        {
          name: 'Experience',
          path: '/experience',
          component: () => import('@/views/pages/About.vue'),
        },
      ],
    },
  ],
})
