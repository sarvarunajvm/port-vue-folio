import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: () => import("@/views/index.vue"),
      children: [
        // Home
        {
          name: "Home",
          path: "",
          component: () => import("@/views/pages/Home.vue"),
        },
        //Experience
        {
          name: "Experience",
          path: "/experience",
          component: () => import("@/views/pages/Experience.vue"),
        },
        //Education
        {
          name: "Education",
          path: "/education",
          component: () => import("@/views/pages/Education.vue"),
        },
        //Projects
        {
          name: "Projects",
          path: "/projects",
          component: () => import("@/views/pages/Project.vue"),
        },
        //Skills
        {
          name: "Skills",
          path: "/skills",
          component: () => import("@/views/pages/Skills.vue"),
        },
        //Resume
        {
          name: "Resume",
          path: "/resume",
          component: () => import("@/views/pages/Resume.vue"),
        },
      ],
    },
    {
      name: "UnderConstruction",
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/404.vue"),
    },
    {
      name: "Start",
      path: "/",
      component: () => import("@/views/Start.vue"),
    },
  ],
});
