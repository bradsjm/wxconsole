import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/console",
  },
  {
    path: "/console",
    name: "Live Console",
    icon: "mdi-radio-tower",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/gauges",
    name: "Live Gauges",
    icon: "mdi-view-dashboard",
    component: () => import("../views/Gauges.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
