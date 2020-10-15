import App from "./App.vue";
import Vue from "vue";
import VueTimers from "vue-timers";
import vueSmoothScroll from "vue-smoothscroll";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

require("vue2-animate/dist/vue2-animate.min.css");

Vue.use(vueSmoothScroll);
Vue.use(VueTimers);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
