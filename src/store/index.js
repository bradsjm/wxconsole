import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mqttPlugin = store => {
  const mqtt = require("mqtt")
  const client = mqtt.connect("wss://soldier.cloudmqtt.com:35692", {
    username: "wx",
    password: "wx"
  })

  client.on("connect", () => {
    client.subscribe([
      "daviswx/001D0A710CBF/+",
      "daviswx/001D0A710CBF/1/+",
      "darksky/#"
    ])
  })

  client.on("message", (topic, data) => {
    const prefix = topic.split("/")[0]
    store.commit(prefix, {
      topic: topic,
      message: data.toString()
    })
    client.end()
  })
}

export default new Vuex.Store({
  state: {
    daviswx: {},
    darksky: {
      current: {},
      today: {}
    }
  },
  plugins: [mqttPlugin],
  mutations: {
    daviswx(state, payload) {
      const key = payload.topic.split("/").pop()
      const value = /^\d/.test(payload.message) ? Number(payload.message) : payload.message
      state.daviswx[key] = value
    },
    darksky(state, payload) {
      const darksky = JSON.parse(payload.message)
      switch (payload.topic) {
        case "darksky/currently":
          state.darksky.current = darksky
          break
        case "darksky/today":
          state.darksky.today = darksky
          break
      }
    }
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== "production"
})