import App from "./App.vue"
import Vue from "vue"
import VueMqtt from "vue-mqtt"
import vueSmoothScroll from 'vue-smoothscroll';
import VueTimers from "vue-timers"

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(vueSmoothScroll);
Vue.use(VueTimers)

Vue.use(VueMqtt, "wss://soldier.cloudmqtt.com:35692", {
  username: "wx",
  password: "wx"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
