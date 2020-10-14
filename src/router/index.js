import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/console"
  },
  {
    path: "/console",
    name: "Live Console",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Weather Dashboard",
    component: () => import("../views/Dashboard.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
