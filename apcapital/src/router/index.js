import { createRouter, createWebHistory } from "vue-router"
import Homepage from "../views/Homepage.vue"
import OurTeam from "../views/OurTeam.vue"
import Alumni from "../views/Alumni.vue"
import ResearchCategory from "../views/ResearchCategory.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/our-team",
      name: "our-team",
      component: OurTeam,
    },
    {
      path: "/alumni",
      name: "alumni",
      component: Alumni,
    },
    {
      path: "/research/:slug",
      name: "research-category",
      component: ResearchCategory,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: "smooth",
      }
    }

    return { top: 0 }
  },
})

export default router