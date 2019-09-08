import Vue from "vue"
import App from "./App.vue"
import VueMqtt from "vue-mqtt"
import VueTimers from "vue-timers"
import VueAppInsights from "vue-app-insights";

Vue.use(VueMqtt, "wss://soldier.cloudmqtt.com:35692", {
  username: "wx",
  password: "wx"
})

Vue.use(VueAppInsights, {
  id: "da0e976e-34ce-45c6-969a-054033350567"
});

Vue.use(VueTimers)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
