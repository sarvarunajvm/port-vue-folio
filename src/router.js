import { createRouter, createWebHistory } from 'vue-router'
import about from '@/data/about.json'
import projects from '@/data/projects.json'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    name: 'CaseStudy',
    path: '/work/:slug',
    component: () => import('@/pages/CaseStudyPage.vue'),
  },
  // Legacy redirects
  { path: '/home', redirect: '/' },
  { path: '/home/experience', redirect: '/' },
  { path: '/home/education', redirect: '/' },
  { path: '/home/projects', redirect: '/' },
  { path: '/home/skills', redirect: '/' },
  { path: '/home/resume', redirect: '/' },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

const fullName = `${about.firstname} ${about.lastname}`

router.afterEach((to) => {
  if (to.name === 'Home') {
    document.title = `${fullName} — ${about.titles[0]}`
    return
  }
  if (to.name === 'CaseStudy') {
    const project = projects.find((p) => p.id === to.params.slug)
    document.title = project ? `${project.title} — ${fullName}` : `Not Found — ${fullName}`
    return
  }
  if (to.name === 'NotFound') {
    document.title = `Page not found — ${fullName}`
  }
})

export default router
