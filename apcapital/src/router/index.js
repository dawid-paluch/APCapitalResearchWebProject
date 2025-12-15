import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/Homepage.vue"
import OurTeamPage from "../views/OurTeam.vue"

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/our-team", name: "OurTeamPage", component: OurTeamPage },
]

const router = createRouter({
  history: createWebHistory("/APCapitalResearchWebProject/"),
  routes,
})

export default router