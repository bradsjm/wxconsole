<template>
  <div id="console">
    <div id="backlight" v-bind:class="{ 'backlight-on': backlight, 'backlight-off': !backlight }"></div>

    <DateTime :value=time></DateTime>
    <MoonIcon :value=time></MoonIcon>
    <ForecastIcon/>

    <WindDirectionSvg :value=wx.wind_dir_at_hi_speed_last_10_min :outline=true></WindDirectionSvg>
    <WindDirectionSvg :value=wx.wind_dir_last :outline=false></WindDirectionSvg>
    <WindSpeed :value=wx.wind_speed_last :decimals=1 unit="MPH"></WindSpeed>

    <Metric label="TEMP OUT" :value=wx.temp :top=109 :left=215 :width=80 :decimals=1 :sup=true unit="°F"></Metric>
    <Metric label="HUM OUT" :value=wx.hum :top=109 :left=298 :width=62 :sup=true unit="%"></Metric>
    <Metric label="BAROMETER" :value=wx.bar_sea_level :top=109 :left=370 :width=105 :decimals=2 :sup=false unit="inHg" :trend=bar_trend></Metric>

    <Metric label="FEELS LIKE" :value=wx.thw_index :top=164 :left=215 :width=80 :decimals=1 :sup=true unit="°F"></Metric>
    <Metric label="DEW POINT" :value=wx.dew_point :top=164 :left=380 :width=80 :decimals=1 :sup=true unit="°F"></Metric>

    <Metric label="DAILY RAIN" :value="wx.rainfall_daily / 100" :top=225 :left=215 :width=70 :decimals=2 unit="in"></Metric>
    <Metric label="HOURLY RAIN" :value="wx.rainfall_last_60_min / 100" :top=225 :left=298 :width=80 :decimals=2 unit="in"></Metric>
    <Metric label="RAIN RATE" :value="wx.rain_rate_last / 100" :top=225 :left=400 :width=70 :decimals=2 unit="in"></Metric>

    <!-- <div style="top: 209px; left: 68px; width: 132px; height: 62px; position: absolute;"> -->
      <!-- <span class="units" style="font-size: 9px;">Last 24 hrs</span>
      <span class="units" style="top: 197px; right: 530px; font-size: 9px;">Every 1 hr</span> -->
      <LineGraph class="graph" label="Wind Speed" :value=wx.wind_speed_last :seconds=60 />
      <!-- <span class="units" style="top: 273px; left: 68px; font-size: 8px;">Vertical Scale: 1</span> -->
    <!-- </div> -->

    <span class="message" style="top: 286px; right: 250px; position: absolute;"><i class="antenna" :class="{ 'antenna-on': antenna, 'antenna-off': !antenna }"></i></span>

    <Ticker :messages="messages"/>

    <button v-on:click="toggleLight" class="button" style="top: 48px; left: 620px;"></button>
    <WxDataService @wx="onWxData"/>
  </div>
</template>

<script>
import DateTime from "./DateTime.vue"
import ForecastIcon from "./ForecastIcon.vue"
import LineGraph from "./LineGraph.vue"
import Metric from "./Metric.vue"
import MoonIcon from "./MoonIcon.vue"
import Ticker from "./Ticker.vue"
import WindDirectionSvg from "./WindDirectionSvg.vue"
import WindSpeed from "./WindSpeed.vue"
import WxDataService from "./WxDataService.vue"

export default {
  name: "Console",
  components: {
    DateTime,
    ForecastIcon,
    LineGraph,
    Metric,
    MoonIcon,
    Ticker,
    WindDirectionSvg,
    WindSpeed,
    WxDataService,
  },
  data() {
    return {
      antenna: false,
      backlight: false,
      messages: ["Hello World"],
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
    },
    time() {
      // Convert to per minute precision to reduce updates
      let ts = this.wx.ts || 0;
      return (Math.round(ts / 60) * 60) * 1000;
    }
  },
  methods: {
    toggleLight: function() { this.backlight = !this.backlight },
    onWxData: function(wx) {
        this.antenna = !this.antenna;
        this.wx = Object.assign({}, this.wx, wx);
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

.antenna {
    background-image: url("./images/antenna-icons.png");
    background-repeat: no-repeat;
    display: block;
}

.antenna-off {
    width: 19px;
    height: 20px;
    background-position: -5px -5px;
}

.antenna-on {
    width: 19px;
    height: 20px;
    background-position: -34px -5px;
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

.digital {
    font-family: Digi, Arial;
    color: #053D6C;
    font-size: 32px;
    font-weight: 400;
    text-shadow: none;
}

.slide-enter-active, .slide-leave-active  {
  transition: all .6s ease;
}

.slide-enter, .slide-leave-to
{
  transform: translateY(-100%);
  opacity: 0;
}

.graph {
  position: relative;
  top: 210px;
  left: 60px;
  width: 142px;
  height: 73px;
}

.message {
    font-family: Digi, Arial;
    color: #053D6C;
    font-size: 20px;
    font-weight: 400;
    text-shadow: none;
}
</style>
