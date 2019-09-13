<template>
  <WeatherData>
    <div
      id="console"
      slot-scope="{ now, current, today, indicator }"
    >
      <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
        <div
          style="top: 8px; left: 160px; width: 260px;"
          v-if="now.loaded && current.loaded"
        >
          <!-- Indicators -->
          <ForecastIcon
            top="0px"
            left="0px"
            :icon="current.icon"
          />
          <MoonIcon
            top="0px"
            left="60px"
            :ts="now.ts"
          />
          <DateTime
            top="0px"
            left="110px"
            :ts="now.ts"
          />
        </div>
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
        <!-- Metric Display -->
        <CurrentMetrics
          :now="now"
          :current="current"
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
        <!-- Data Indicator -->
        <div
          class="antenna"
          style="top: 223px; right: 10px;"
        />
        <transition name="fade">
          <div
            v-show="indicator"
            class="antenna antenna-on"
            style="top: 223px; right: 10px;"
          />
        </transition>
        <!-- Information Ticker -->
        <Ticker
          top="223px"
          left="13px"
          v-if="current.loaded && today.loaded && now.loaded"
          :current="current"
          :today="today"
          :now="now"
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
import CurrentMetrics from "./CurrentMetrics.vue";
import DateTime from "./DateTime.vue";
import ForecastIcon from "./ForecastIcon.vue";
import LineGraph from "./LineGraph.vue";
import MoonIcon from "./MoonIcon.vue";
import Ticker from "./Ticker.vue";
import WindDirection from "./WindDirection.vue";
import WindSpeed from "./WindSpeed.vue";
import WeatherData from "./WeatherData.vue";

export default {
  name: "Console",
  components: {
    CurrentMetrics,
    DateTime,
    ForecastIcon,
    LineGraph,
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
  width: 19px;
  height: 20px;
  background-position: -5px -5px;
}

.antenna-on {
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
