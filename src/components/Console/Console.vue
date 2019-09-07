<template>
  <div id="console">
    <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
      <!-- Indicators -->
      <ForecastIcon
        top="8px"
        left="160px"
        :icon="forecast.currently ? forecast.currently.icon : ''"
      />
      <MoonIcon
        :ts="now"
        icon="first-quarter"
        top="8px"
        left="220px"
      />
      <DateTime
        :ts="now"
        top="8px"
        left="280px"
      />
      <!-- Anemometer -->
      <div style="top: 10px; left: 15px; width: 120px; height: 125px;">
        <WindSpeed
          :value="wx.wind_speed_last||0"
          :decimals="1"
          unit="MPH"
          top="0px"
          left="0px"
        />
        <WindDirection
          :value="wx.wind_dir_at_hi_speed_last_10_min||0"
          :outline="true"
          top="14px"
          left="11px"
        />
        <WindDirection
          :value="wx.wind_dir_last||0"
          :outline="false"
          top="14px"
          left="11px"
        />
      </div>
      <!-- Line 1: Temperature and Barometric Pressure -->
      <Metric
        label="TEMP OUT"
        :value="wx.temp||0"
        top="50px"
        left="160px"
        width="80px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <Metric
        label="HUM OUT"
        :value="wx.hum||0"
        top="50px"
        left="240px"
        width="80px"
        :sup="true"
        unit="&nbsp;%"
      />
      <Metric
        label="BAROMETER"
        :value="wx.bar_sea_level||0"
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
        :value="wx.thw_index||0"
        top="105px"
        left="160px"
        width="80px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <Metric
        label="DEW POINT"
        :value="wx.dew_point||0"
        top="105px"
        left="240px"
        width="80px"
        :decimals="1"
        :sup="true"
        unit="&nbsp;&deg;F"
      />
      <Metric
        label="STORM WATCH"
        :value="forecast.currently ? forecast.currently.nearestStormDistance : 0"
        top="105px"
        left="320px"
        width="105px"
        :decimals="1"
        :sup="false"
        unit="&nbsp;mi"
      />
      <!-- Line 3: Rain Gauge -->
      <Metric
        label="DAILY RAIN"
        :value="wx.rainfall_daily||0 / 100"
        top="160px"
        left="160px"
        width="80px"
        :decimals="2"
        unit="in"
      />
      <Metric
        label="HOURLY RAIN"
        :value="wx.rainfall_last_60_min||0 / 100"
        top="160px"
        left="240px"
        width="80px"
        :decimals="2"
        unit="in"
      />
      <Metric
        label="RAIN RATE"
        :value="wx.rain_rate_last||0 / 100"
        top="160px"
        left="320px"
        width="105px"
        :decimals="2"
        unit="in"
      />

      <!-- Line Graph -->
      <div
        class="label"
        style="top: 135px; left: 14px; font-size: 9px;"
      >
        Last minute
      </div>
      <div
        class="label"
        style="top: 135px; right: 285px; font-size: 9px;"
      >
        Every 2s
      </div>
      <LineGraph
        class="graph"
        label="Wind Speed"
        :value="wx.wind_speed_last||0"
        :seconds="60"
      />
      <div
        class="label"
        style="top: 211px; left: 14px; font-size: 8px;"
      >
        Vertical Scale: Auto
      </div>
      <div
        class="digital medium antenna"
        style="top: 223px; right: 10px;"
        :class="{ 'antenna-on': antenna, 'antenna-off': !antenna }"
      />
      <Ticker
        top="223px"
        left="13px"
        :forecast="forecast"
        :wx="wx"
      />
    </div>
    <button
      @click="toggleLight"
      class="button"
      style="top: 28px; left: 600px;"
    />

    <WxMqttService
      @forecast="onForecast"
      @weather="onWeather"
    />
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
import WxMqttService from "./WxMqttService.vue";

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
    WxMqttService
  },
  data() {
    return {
      antenna: false,
      backlight: true,
      forecast: {},
      wx: {}
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
    onWeather: function(wx) {
      this.antenna = !this.antenna;
      this.wx = Object.assign({}, this.wx, wx);
    },
    onForecast: function(forecast) {
      this.antenna = !this.antenna;
      this.forecast = forecast;
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
  left: 5px;
  width: 145px;
  height: 73px;
}
</style>
