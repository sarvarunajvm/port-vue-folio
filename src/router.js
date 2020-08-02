import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: [
        // // Home
        // {
        //   name: 'Home',
        //   path: '',
        //   component: () => import('@/views/Home'),
        // },
        // Pages
        // {
        //   name: 'User Profile',
        //   path: 'pages/user',
        //   component: () => import('@/views/dashboard/pages/UserProfile'),
        // },
      ],
    },
  ],
})
