import App from "./App.vue"
import Vue from "vue"
import vueSmoothScroll from 'vue-smoothscroll';
import VueTimers from "vue-timers"
import store from './store'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(vueSmoothScroll);
Vue.use(VueTimers)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
