<template>
  <WeatherData>
    <div
      id="console"
      slot-scope="{ now, current, today, indicator }"
    >
      <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
        <!-- Indicators -->
        <ForecastIcon
          top="8px"
          left="160px"
          v-if="current.loaded"
          :icon="current.icon"
        />
        <MoonIcon
          top="8px"
          left="220px"
          v-if="now.loaded"
          :ts="now.ts"
        />
        <DateTime
          top="8px"
          left="270px"
          v-if="now.loaded"
          :ts="now.ts"
        />
        <!-- Anemometer -->
        <div
          style="top: 10px; left: 15px; width: 120px; height: 125px;"
          v-if="now.loaded"
        >
          <WindSpeed
            unit="MPH"
            top="0px"
            left="0px"
            :value="now.wind_speed_last"
            :decimals="1"
          />
          <WindDirection
            top="14px"
            left="11px"
            :value="now.wind_dir_at_hi_speed_last_10_min"
            :outline="true"
          />
          <WindDirection
            top="14px"
            left="11px"
            :value="now.wind_dir_last"
            :outline="false"
          />
        </div>
        <!-- Line 1: Temperature and Barometric Pressure -->
        <Metric
          top="50px"
          left="160px"
          width="80px"
          label="TEMP OUT"
          unit="&nbsp;&deg;F"
          v-if="now.loaded"
          :value="now.temp"
          :decimals="1"
          :sup="true"
        />
        <Metric
          top="50px"
          left="240px"
          width="80px"
          label="HUM OUT"
          unit="&nbsp;%"
          v-if="now.loaded"
          :value="now.hum"
          :sup="true"
        />
        <Metric
          top="50px"
          left="320px"
          width="105px"
          label="BAROMETER"
          unit="inHg"
          v-if="now.loaded"
          :value="now.bar_sea_level"
          :decimals="2"
          :sup="false"
          :trend="now.bar_trend | trend"
        />
        <!-- Line 2: Feels like and Dew Point -->
        <Metric
          top="105px"
          left="160px"
          width="80px"
          label="FEELS LIKE"
          unit="&nbsp;&deg;F"
          v-if="now.loaded"
          :value="now.thw_index"
          :decimals="1"
          :sup="true"
        />
        <Metric
          top="105px"
          left="242px"
          width="80px"
          label="DEW POINT"
          unit="&nbsp;&deg;F"
          v-if="now.loaded"
          :value="now.dew_point"
          :decimals="1"
          :sup="true"
        />
        <Metric
          top="105px"
          left="320px"
          width="105px"
          label="STORM WATCH"
          unit="&nbsp;mi"
          v-if="current.loaded"
          :value="current.nearestStormDistance"
          :trend="current.nearestStormBearing"
          :decimals="0"
          :sup="false"
        />
        <!-- Line 3: Rain Gauge -->
        <Metric
          top="160px"
          left="160px"
          width="80px"
          label="DAILY RAIN"
          unit="in"
          v-if="now.loaded"
          :value="now.rainfall_daily / 100"
          :decimals="2"
        />
        <Metric
          top="160px"
          left="240px"
          width="80px"
          label="HOURLY RAIN"
          unit="in"
          v-if="now.loaded"
          :value="now.rainfall_last_60_min / 100"
          :decimals="2"
        />
        <Metric
          top="160px"
          left="320px"
          width="105px"
          label="RAIN RATE"
          unit="in"
          v-if="now.loaded"
          :value="now.rain_rate_last / 100"
          :decimals="2"
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
          v-if="now.loaded"
          :value="now.wind_speed_last"
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
          :class="{ 'antenna-on': indicator, 'antenna-off': !indicator }"
        />
        <Ticker
          top="223px"
          left="13px"
          v-if="now.loaded && current.loaded && today.loaded"
          :now="now"
          :current="current"
          :today="today"
        />
      </div>
      <button
        @click="toggleLight"
        class="button"
        style="top: 28px; left: 600px;"
      />
    </div>
  </weatherdata>
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
import WeatherData from "./WeatherData.vue";

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
    WeatherData
  },
  data() {
    return {
      backlight: true
    };
  },
  filters: {
    trend(value) {
      // Trend direction (0 is up, 90 is steady, 180 is down)
      if (value <= -0.02) return 37;
      if (value > -0.02 && value < 0.00) return 74;
      if (value == 0) return 90;
      if (value > 0.00 && value < 0.02) return 127;
      if (value >= 0.02) return 164;
      return 90;
    },
    now(ts) {
      // Convert to per minute precision to reduce updates
      return Math.round(ts / 60) * 60;
    }
  },
  methods: {
    toggleLight: function() {
      this.backlight = !this.backlight;
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

.backlight-on,
.backlight-off {
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
