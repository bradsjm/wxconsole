<template>
  <div
    id="console"
  >
    <div :class="{ 'backlight-on': backlight, 'backlight-off': !backlight }">
      <div
        style="top: 8px; left: 160px; width: 260px;"
        v-if="now.ready && current.ready"
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
        v-if="now.ready"
      >
        <WindSpeed
          unit="MPH"
          top="0px"
          left="0px"
          :value="now.wind_speed_last || 0"
        />
        <WindDirection
          top="14px"
          left="11px"
          :value="now.wind_dir_at_hi_speed_last_10_min || 0"
          :outline="true"
        />
        <WindDirection
          v-if="'wind_dir_last' in now"
          top="14px"
          left="11px"
          :value="now.wind_dir_last || 0"
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
        v-if="now.ready"
        :value="now.wind_speed_last || 0"
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
        v-if="current.ready && today.ready && now.ready"
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
</template>

<script>
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
      topics: [
        "daviswx/001D0A710CBF/+", 
        "daviswx/001D0A710CBF/1/+",
        "darksky/#"
      ],
      backlight: true,
      indicator: false,
      current: { ready: false },
      today: { ready: false },
      now: { ready: false }
    };
  },
  mounted() {
    this.$mqtt.subscribe(this.topics);
    if (localStorage.backlight) {
      this.backlight = localStorage.backlight == "true";
    }
  },
  mqtt: {
    "daviswx/#"(data, topic) {
      this.pulse();
      try {
        const key = topic.split("/").pop()
        this.now[key] = /^\d/.test(data) ? Number(data) : data;
        this.now.ready = "ts" in this.now;
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
    },
    "darksky/#"(data, topic) {
      this.pulse();
      try {
        const darksky = JSON.parse(data.toString());
        switch (topic) {
          case "darksky/currently":
            this.current = darksky;
            this.current.ready = "time" in darksky;
            break;
          case "darksky/today":
            this.today = darksky;
            this.today.ready = "time" in darksky;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
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
    }
  },
  timers: {
    reset: { time: 1500 }
  },
  watch: {
    backlight(newState) {
      localStorage.backlight = newState;
    }
  },
  destroyed() {
    this.$mqtt.unsubscribe(this.topics);
  }
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
