import Vue from "vue";
import Vuex from "vuex";
import mqttPlugin from "./mqttPlugin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daviswx: {
      bar_sea_level: 0,
      bar_sea_level_max_last_24_hr: 0,
      bar_sea_level_min_last_24_hr: 0,
      bar_trend: 0,
      dew_point: 0,
      hum_avg_last_15_min: 0,
      hum_max_last_24_hr: 0,
      hum_min_last_24_hr: 0,
      hum: 0,
      rain_60_min: 0,
      rain_rate_last: 0,
      rainfall_daily: 0,
      temp_avg_last_15_min: 0,
      temp_max_last_24_hr: 0,
      temp_min_last_24_hr: 0,
      temp: 0,
      thw_index: 0,
      ts: 0,
      wind_dir_at_hi_speed_last_10_min: 0,
      wind_dir_last: 0,
      wind_rose_last_1_hr: [],
      wind_run_last_24_hr: 0,
      wind_speed_avg_last_10_min: 0,
      wind_speed_hi_last_10_min: 0,
      wind_speed_last: 0,
      wind_speed_max_last_24_hr: 0,
    },
    darksky: {
      current: {},
      today: {},
    },
  },
  plugins: [mqttPlugin],
  mutations: {
    daviswx(state, payload) {
      const key = payload.topic.split("/").pop();
      if (key in state.daviswx) {
        const value = isNaN(payload.message)
          ? payload.message
          : Number(payload.message);
        Vue.set(state.daviswx, key, value);
      }
    },
    darksky(state, payload) {
      const darksky = JSON.parse(payload.message);
      switch (payload.topic) {
        case "darksky/currently":
          Vue.set(state.darksky, "current", darksky);
          break;
        case "darksky/today":
          Vue.set(state.darksky, "today", darksky);
          break;
      }
    },
  },
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});
