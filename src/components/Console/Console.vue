<template>
  <div id="console">
    <div id="backlight" v-bind:class="{ 'backlight-on': backlight, 'backlight-off': !backlight }"></div>
    <DateTime v-if="wx.ts !== undefined" :value=wx.ts></DateTime>
    <ForecastIcon/>
    <MoonIcon/>

    <WindDirection v-if="wx.wind_dir_at_hi_speed_last_10_min !== undefined" :value=wx.wind_dir_at_hi_speed_last_10_min :outline=true></WindDirection>
    <WindDirection v-if="wx.wind_dir_last !== undefined" :value=wx.wind_dir_last :outline=false></WindDirection>
    <WindSpeed v-if="wx.wind_speed_last !== undefined" :value=wx.wind_speed_last :decimals=1 unit="MPH"></WindSpeed>

    <Metric v-if="wx.temp !== undefined" label="TEMP OUT" :top=109 :left=215 :width=80 :value=wx.temp :decimals=1 :sup=true unit="°F" :trend=1></Metric>
    <Metric v-if="wx.hum !== undefined" label="HUM OUT" :top=109 :left=298 :width=62 :value=wx.hum :sup=true unit="%" :trend=0></Metric>
    <Metric v-if="wx.bar_sea_level !== undefined" label="BAROMETER" :top=109 :left=370 :width=105 :value=wx.bar_sea_level :decimals=2 :sup=false unit="inHg" :trend=wx.bar_trend></Metric>

    <Metric v-if="wx.thw_index !== undefined" label="FEELS LIKE" :top=164 :left=215 :width=80 :value=wx.thw_index :decimals=1 :sup=true unit="°F" :trend=-1></Metric>
    <Metric v-if="wx.dew_point !== undefined" label="DEW POINT" :top=164 :left=380 :width=80 :value=wx.dew_point :decimals=1 :sup=true unit="°F" :trend=-1></Metric>

    <Metric v-if="wx.rainfall_daily !== undefined" label="DAILY RAIN" :top=225 :left=215 :width=70 :value="wx.rainfall_daily / 100" :decimals=2 unit="in"></Metric>
    <Metric v-if="wx.rainfall_last_60_min !== undefined" label="HOURLY RAIN" :top=225 :left=298 :width=80 :value="wx.rainfall_last_60_min / 100" :decimals=2 unit="in"></Metric>
    <Metric v-if="wx.rain_rate_last !== undefined" label="RAIN RATE" :top=225 :left=400 :width=70 :value="wx.rain_rate_last / 100" :decimals=2 unit="in"></Metric>

    <button v-on:click="toggleLight" class="button" style="top: 48px; left: 620px;"></button>
  </div>
</template>

<script>
import DateTime from "./DateTime.vue"
import ForecastIcon from "./ForecastIcon.vue"
import MoonIcon from "./MoonIcon.vue"
import Metric from "./Metric.vue"
import WindSpeed from "./WindSpeed.vue"
import WindDirection from "./WindDirection.vue"

export default {
  name: "Console",
  components: {
    DateTime,
    ForecastIcon,
    MoonIcon,
    Metric,
    WindSpeed,
    WindDirection
  },
  data() {
    return {
      backlight: false,
      wx: {}
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
        var wx = JSON.parse(data.toString());
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
</style>
