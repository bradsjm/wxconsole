import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'

Vue.use(VueMqtt, 'wss://soldier.cloudmqtt.com:35692', {
  username: 'jvjicacs',
  password: 'DXKkp3QETwt_',
  clientId: 'WebClient-' + parseInt(Math.random() * 100000)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
