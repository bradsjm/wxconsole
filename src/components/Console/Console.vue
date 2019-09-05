<template>
  <div id="console">
    <div id="backlight" v-bind:class="{ 'backlight-on': backlight, 'backlight-off': !backlight }"></div>
    <DateTime :value=wx.ts></DateTime>
    <MoonIcon :value=wx.ts></MoonIcon>
    <ForecastIcon/>

    <WindDirectionSvg :value=wx.wind_dir_at_hi_speed_last_10_min :outline=true></WindDirectionSvg>
    <WindDirectionSvg :value=wx.wind_dir_last :outline=false></WindDirectionSvg>
    <WindSpeed :value=wx.wind_speed_last :decimals=1 unit="MPH"></WindSpeed>

    <Metric label="TEMP OUT" :top=109 :left=215 :width=80 :value=wx.temp :decimals=1 :sup=true unit="°F"></Metric>
    <Metric label="HUM OUT" :top=109 :left=298 :width=62 :value=wx.hum :sup=true unit="%"></Metric>
    <Metric label="BAROMETER" :top=109 :left=370 :width=105 :value=wx.bar_sea_level :decimals=2 :sup=false unit="inHg" :trend=bar_trend></Metric>

    <Metric label="FEELS LIKE" :top=164 :left=215 :width=80 :value=wx.thw_index :decimals=1 :sup=true unit="°F"></Metric>
    <Metric label="DEW POINT" :top=164 :left=380 :width=80 :value=wx.dew_point :decimals=1 :sup=true unit="°F"></Metric>

    <Metric label="DAILY RAIN" :top=225 :left=215 :width=70 :value="wx.rainfall_daily / 100" :decimals=2 unit="in"></Metric>
    <Metric label="HOURLY RAIN" :top=225 :left=298 :width=80 :value="wx.rainfall_last_60_min / 100" :decimals=2 unit="in"></Metric>
    <Metric label="RAIN RATE" :top=225 :left=400 :width=70 :value="wx.rain_rate_last / 100" :decimals=2 unit="in"></Metric>

    <!-- Data Indicator -->
    <transition name="fade">
      <span class="message" style="top: 284px; right: 250px;">X</span>
    </transition>

    <button v-on:click="toggleLight" class="button" style="top: 48px; left: 620px;"></button>
  </div>
</template>

<script>
import DateTime from "./DateTime.vue"
import ForecastIcon from "./ForecastIcon.vue"
import MoonIcon from "./MoonIcon.vue"
import Metric from "./Metric.vue"
import WindSpeed from "./WindSpeed.vue"
import WindDirectionSvg from "./WindDirectionSvg.vue"

export default {
  name: "Console",
  components: {
    DateTime,
    ForecastIcon,
    MoonIcon,
    Metric,
    WindSpeed,
    WindDirectionSvg
  },
  data() {
    return {
      backlight: false,
      wx: {
        bar_sea_level: 0,
        bar_trend: 0,
        dew_point: 0,
        hum: 0,
        rainfall_daily: 0,
        rainfall_last_60_min: 0,
        rain_rate_last: 0,
        temp: 0,
        ts: 0,
        thw_index: 0,
        wind_dir_last: 0,
        wind_dir_at_hi_speed_last_10_min: 0,
        wind_speed_last: 0
      }
    }
  },
  computed: {
    bar_trend() {
      const value = this.wx.bar_trend || 0;
      if (value >= 0.02) return -16;
      if (value > 0.00 && value < 0.02) return -37;
      if (value < 0.00 && value > -0.02) return 37;
      if (value <= -0.02) return 74;
      return 0;
    }
  },
  mounted() {
    this.$mqtt.subscribe("weather/#")
  },
  methods: {
    toggleLight: function(event) { this.backlight = !this.backlight }
  },
  mqtt: {
    "weather/#" (data, topic) {
      try {
        const wx = JSON.parse(data.toString());
        console.log("mqtt:" + JSON.stringify(wx, null, 2));
        this.wx = Object.assign({}, this.wx, wx);
      } catch (e) {
        console.log("mqtt:" + e + " (" + data.toString() + ")");
      }
    }
  }
}
</script>

<style>
#console {
  background-image: url("./images/vp2background.png");
  width: 726px;
  height: 465px;
  position: relative;
}

#backlight {
  left: 54px;
  top: 62px;
  position: absolute;
}

@font-face {
  font-family: Digi;
  src: url("./fonts/digi.ttf")
}

.digital {
    font-family: Digi, Arial;
    color: #053D6C;
    font-size: 32px;
    font-weight: 400;
    text-shadow: none;
}

.backlight-on, .backlight-off {
  background: url("./images/displaybackground.png") no-repeat;
}

.backlight-off {
	background-position: 0 0;
	width: 430px;
	height: 246px;
}

.backlight-on {
	background-position: 0 -250px ;
	width: 429px;
	height: 245px;
}

.button {
    color: transparent;
    height: 15px;
    width: 55px;
    position: absolute;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.message {
    font-family: Digi, Arial;
    color: #053D6C;
    font-weight: 400;
    font-size: 20px;
    text-shadow: none;
    position: absolute;
}
</style>
