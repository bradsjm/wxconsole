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
  {
    path: "/radar",
    name: "Radar Map",
    icon: "mdi-radar",
    component: () => import("../views/Radar.vue"),
  },
  {
    path: "/lightning",
    name: "Lightning Map",
    icon: "mdi-weather-lightning",
    component: () => import("../views/Lightning.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
