import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("@/views/index.vue"),
    children: [
      {
        name: "Home",
        path: "",
        component: () => import("@/views/pages/Home.vue"),
      },
      {
        name: "Experience",
        path: "experience",
        component: () => import("@/views/pages/Experience.vue"),
      },
      {
        name: "Education",
        path: "education",
        component: () => import("@/views/pages/Education.vue"),
      },
      {
        name: "Projects",
        path: "projects",
        component: () => import("@/views/pages/Project.vue"),
      },
      {
        name: "Skills",
        path: "skills",
        component: () => import("@/views/pages/Skills.vue"),
      },
      {
        name: "Resume",
        path: "resume",
        component: () => import("@/views/pages/Resume.vue"),
      },
    ],
  },
  // Redirect legacy top-level paths to nested layout paths
  { path: "/projects", redirect: "/home/projects" },
  { path: "/experience", redirect: "/home/experience" },
  { path: "/education", redirect: "/home/education" },
  { path: "/skills", redirect: "/home/skills" },
  { path: "/resume", redirect: "/home/resume" },
  {
    name: "Start",
    path: "/",
    component: () => import("@/views/Start.vue"),
  },
  {
    name: "UnderConstruction",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
