import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
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
        //Projects
        {
          name: 'Projects',
          path: '/projects',
          component: () => import('@/views/pages/Project.vue'),
        },
        //Skills
        {
          name: 'Skills',
          path: '/skills',
          component: () => import('@/views/pages/Skills.vue'),
        },
        //Contact
        {
          name: 'Contact',
          path: '/contact',
          component: () => import('@/views/pages/Contact.vue'),
        },
      ],
    },
    {
      name: 'UnderConstruction',
      path: '/',
      component: () => import('@/views/404.vue'),
    },
  ],
})