<template>
  <div id="console">
    <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
      <div style="top: 8px; left: 160px; width: 260px">
        <!-- Indicators -->
        <ForecastIcon
          top="0px"
          left="0px"
          :icon="darksky.current.icon"
          v-if="darksky.current.icon"
        />
        <MoonIcon top="0px" left="60px" :ts="daviswx.ts" v-if="daviswx.ts" />
        <DateTime top="0px" left="110px" :ts="daviswx.ts" v-if="daviswx.ts" />
      </div>
      <!-- Anemometer -->
      <div style="top: 10px; left: 15px; width: 120px; height: 125px">
        <WindSpeed
          unit="MPH"
          top="0px"
          left="0px"
          :value="daviswx.wind_speed_last"
        />
        <WindDirection
          top="14px"
          left="11px"
          :value="daviswx.wind_dir_at_hi_speed_last_10_min"
          :outline="true"
        />
        <WindDirection
          top="14px"
          left="11px"
          :value="daviswx.wind_dir_last"
          :outline="false"
        />
      </div>
      <!-- Metric Display -->
      <CurrentMetrics :now="daviswx" :current="darksky.current" />
      <!-- Line Graph -->
      <div class="label" style="top: 135px; left: 14px; font-size: 9px">
        Last minute
      </div>
      <div class="label" style="top: 135px; right: 285px; font-size: 9px">
        Every 2s
      </div>
      <LineGraph
        class="graph"
        label="Wind Speed"
        :value="daviswx.wind_speed_last"
        :seconds="60"
      />
      <div class="label" style="top: 211px; left: 14px; font-size: 8px">
        Vertical Scale: Auto
      </div>
      <!-- Data Indicator -->
      <div class="antenna" style="top: 223px; right: 10px" />
      <transition name="fade">
        <div
          v-show="indicator"
          class="antenna antenna-on"
          style="top: 223px; right: 10px"
        />
      </transition>
      <!-- Information Ticker -->
      <Ticker
        top="223px"
        left="13px"
        :current="darksky.current"
        :today="darksky.today"
        :now="daviswx"
      />
    </div>
    <button
      @click="toggleLight"
      class="button"
      style="top: 28px; left: 600px"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Console",
  components: {
    CurrentMetrics: () => import("./CurrentMetrics.vue"),
    DateTime: () => import("./DateTime.vue"),
    ForecastIcon: () => import("./ForecastIcon.vue"),
    LineGraph: () => import("./LineGraph.vue"),
    MoonIcon: () => import("./MoonIcon.vue"),
    Ticker: () => import("./Ticker.vue"),
    WindDirection: () => import("./WindDirection.vue"),
    WindSpeed: () => import("./WindSpeed.vue"),
  },
  data() {
    return {
      backlight: true,
      indicator: false,
    };
  },
  computed: {
    ...mapState(["daviswx", "darksky"]),
  },
  mounted() {
    if (localStorage.backlight) {
      this.backlight = localStorage.backlight == "true";
    }
  },
  methods: {
    toggleLight: function() {
      this.backlight = !this.backlight;
    },
    pulse: function() {
      this.indicator = true;
      this.$timer.restart("reset");
    },
    reset: function() {
      this.indicator = false;
    },
  },
  timers: {
    reset: { time: 1500 },
  },
  watch: {
    daviswx: {
      deep: true,
      handler() {
        this.pulse();
      },
    },
    backlight(newState) {
      localStorage.backlight = newState;
    },
  },
};
</script>

<style>
@font-face {
  font-family: Digi;
  src: url("./fonts/digi.woff2");
}

@font-face {
  font-family: DigiMono;
  src: url("./fonts/digi-mono.woff2");
}

#console {
  background: url("./images/vp2console.png") no-repeat;
  width: 684px;
  height: 431px;
  position: absolute;
  line-height: 1;
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
}

.digital-mono {
  font-family: DigiMono;
  color: #053d6c;
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
