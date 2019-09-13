import App from "./App.vue"
import Vue from "vue"
import VueAppInsights from "vue-app-insights";
import vueMoment from 'vue-moment';
import VueMqtt from "vue-mqtt"
import vueSmoothScroll from 'vue-smoothscroll';
import VueTimers from "vue-timers"

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(vueMoment);
Vue.use(vueSmoothScroll);
Vue.use(VueTimers)

Vue.use(VueAppInsights, {
  id: "da0e976e-34ce-45c6-969a-054033350567"
});

Vue.use(VueMqtt, "wss://soldier.cloudmqtt.com:35692", {
  username: "wx",
  password: "wx"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
