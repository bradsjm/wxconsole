<template>
  <div id="console">
    <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
      <!-- Indicators -->
      <ForecastIcon
        top="8px"
        left="160px"
      />
      <MoonIcon
        :value="now"
        top="8px"
        left="220px"
      />
      <DateTime
        :value="now"
        top="8px"
        left="275px"
      />
      <!-- Anemometer -->
      <div style="top: 10px; left: 15px; width: 120px; height: 125px;">
        <WindSpeed
          :value="wx.wind_speed_last"
          :decimals="1"
          unit="MPH"
          top="0px"
          left="0px"
        />
        <WindDirection
          :value="wx.wind_dir_at_hi_speed_last_10_min"
          :outline="true"
          top="15px"
          left="12px"
        />
        <WindDirection
          :value="wx.wind_dir_last"
          :outline="false"
          top="15px"
          left="12px"
        />
      </div>
      <!-- Line 1: Temperature and Barometric Pressure -->
      <Metric
        label="TEMP OUT"
        :value="wx.temp"
        top="50px"
        left="160px"
        width="80px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <Metric
        label="HUM OUT"
        :value="wx.hum"
        top="50px"
        left="240px"
        width="80px"
        :sup="true"
        unit="&nbsp;%"
      />
      <Metric
        label="BAROMETER"
        :value="wx.bar_sea_level"
        top="50px"
        left="320px"
        width="105px"
        :decimals="2"
        :sup="false"
        unit="inHg"
        :trend="bar_trend"
      />
      <!-- Line 2: Feels like and Dew Point -->
      <Metric
        label="FEELS LIKE"
        :value="wx.thw_index"
        top="105px"
        left="160px"
        width="80px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <Metric
        label="DEW POINT"
        :value="wx.dew_point"
        top="105px"
        left="320px"
        width="105px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <!-- Line 3: Rain Gauge -->
      <Metric
        label="DAILY RAIN"
        :value="wx.rainfall_daily / 100"
        top="160px"
        left="160px"
        width="80px"
        :decimals="2"
        unit="in"
      />
      <Metric
        label="HOURLY RAIN"
        :value="wx.rainfall_last_60_min / 100"
        top="160px"
        left="240px"
        width="80px"
        :decimals="2"
        unit="in"
      />
      <Metric
        label="RAIN RATE"
        :value="wx.rain_rate_last / 100"
        top="160px"
        left="320px"
        width="105px"
        :decimals="2"
        unit="in"
      />

      <!-- <div style="top: 209px; left: 68px; width: 132px; height: 62px; position: absolute;"> -->
      <!-- <span class="units" style="font-size: 9px;">Last 24 hrs</span>
      <span class="units" style="top: 197px; right: 530px; font-size: 9px;">Every 1 hr</span>-->
      <LineGraph
        class="graph"
        label="Wind Speed"
        :value="wx.wind_speed_last"
        :seconds="60"
      />
      <!-- <span class="units" style="top: 273px; left: 68px; font-size: 8px;">Vertical Scale: 1</span> -->
      <!-- </div> -->

      <div
        class="digital medium antenna"
        style="top: 223px; right: 10px;"
        :class="{ 'antenna-on': antenna, 'antenna-off': !antenna }"
      />

      <Ticker
        top="224px"
        left="13px"
        :messages="messages"
      />
    </div>
    <button
      @click="toggleLight"
      class="button"
      style="top: 28px; left: 600px;"
    />

    <WxDataService @wx="onWxData" />
  </div>
</template>

<script>
import DateTime from "./DateTime.vue";
import ForecastIcon from "./ForecastIcon.vue";
import LineGraph from "./LineGraph.vue";
import Metric from "./Metric.vue";
import MoonIcon from "./MoonIcon.vue";
import Ticker from "./Ticker.vue";
import WindDirection from "./WindDirection.vue";
import WindSpeed from "./WindSpeed.vue";
import WxDataService from "./WxDataService.vue";

export default {
  name: "Console",
  components: {
    DateTime,
    ForecastIcon,
    LineGraph,
    Metric,
    MoonIcon,
    Ticker,
    WindDirection,
    WindSpeed,
    WxDataService
  },
  data() {
    return {
      antenna: false,
      backlight: false,
      messages: ["Hello World", "Testing line 2", "Test 3"],
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
    };
  },
  computed: {
    bar_trend() {
      const value = this.wx.bar_trend || 0;
      if (value >= 0.02) return -16;
      if (value > 0.0 && value < 0.02) return -37;
      if (value < 0.0 && value > -0.02) return 37;
      if (value <= -0.02) return 74;
      return 0;
    },
    now() {
      // Convert to per minute precision to reduce updates
      const ts = this.wx.ts || 0;
      return Math.round(ts / 60) * 60000;
    }
  },
  methods: {
    toggleLight: function() {
      this.backlight = !this.backlight;
    },
    onWxData: function(wx) {
      this.antenna = !this.antenna;
      this.wx = Object.assign({}, this.wx, wx);
    }
  }
};
</script>

<style>
@font-face {
  font-family: Digi;
  src: url("./fonts/digi.woff");
}

#console {
  background: url("./images/vp2console.png") no-repeat;
  width: 684px;
  height: 431px;
  position: absolute;
}

#console div {
  position: absolute;
}

.backlight-on, .backlight-off {
  background: url("./images/console-display.png") no-repeat;
  left: 36px;
  top: 48px;
}

.backlight-on {
  background-position: 0 -250px;
  width: 430px;
  height: 246px;
}

.backlight-off {
  background-position: 0 0;
  width: 430px;
  height: 246px;
}

.antenna {
  background: url("./images/antenna-icons.png") no-repeat;
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

.button {
  background: transparent no-repeat;
  border: none;
  color: transparent;
  cursor: pointer;
  height: 25px;
  position: absolute;
  width: 55px;
}

.label {
  font-family: Arial;
  color: #053d6c;
  font-weight: bold;
}

.digital {
  font-family: Digi;
  color: #053d6c;
  font-variant-numeric: tabular-nums;
}

.center {
  text-align: center;
}

.tiny {
  font-size: 11px;
}

.small {
  font-size: 18px;
}

.medium {
  font-size: 20px;
}

.large {
  font-size: 32px;
}

.graph {
  top: 149px;
  left: 7px;
  width: 143px;
  height: 73px;
}
</style>
