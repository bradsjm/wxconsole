<template>
  <div
    ref="view"
    class="tickerbox digital medium"
    :style="{ top: top, left: left }"
  >
    <!-- Special Messages -->
    <li v-if="holdyourhat">
      <b>HOLD ON TO YOUR HAT!</b>
    </li>
    <li v-if="kiteflying">
      <b>IT'S KITE FLYING WEATHER!</b>
    </li>
    <li v-if="windChillAdvisory">
      <b>WIND CHILL ADVISORY!</b>
    </li>
    <li v-if="heatAdvisory">
      <b>HEAT ADVISORY!</b>
    </li>
    <li v-if="rainingCatsAndDogs">
      IT'S RAINING CATS AND DOGS!
    </li>
    <!-- Current Conditions -->
    <li>Currently: {{ current.summary }}</li>
    <li>Cloud cover: {{ (current.cloudCover * 100).toFixed() }}%</li>
    <li>Visibility: {{ current.visibility.toFixed() }} miles</li>
    <li v-if="current.uvIndex">
      UV Index: {{ current.uvIndex }} - {{ uvIndexLevel(current.uvIndex) }}
    </li>
    <li v-if="current.ozone">
      Ozone level: {{ current.ozone.toFixed() }} - {{ ozoneLevel(current.ozone) }}
    </li>
    <!-- Forecasted Conditions -->
    <li>Forecast Low today: {{ today.temperatureLow.toFixed() }}&deg;F at {{ format(today.temperatureLowTime) }}</li>
    <li>Forecast High today: {{ today.temperatureHigh.toFixed() }}&deg;F at {{ format(today.temperatureHighTime) }}</li>
    <li v-if="current.precipProbability">
      Chance of {{ current.precipType }}: {{ (current.precipProbability * 100).toFixed() }}%
    </li>
    <li v-if="current.nearestStormDistance > 0">
      Nearest storm: {{ current.nearestStormDistance }} miles away
    </li>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Ticker",
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 500
    },
    current: {
      type: Object,
      required: true
    },
    today: {
      type: Object,
      required: true
    },
    now: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      position: 0
    };
  },
  computed: {
    holdyourhat() {
      return (
        this.now.wind_speed_avg_last_1_min >= 25 &&
        this.now.wind_speed_avg_last_1_min < 40
      );
    },
    kiteflying() {
      return (
        this.now.wind_speed_avg_last_1_min >= 25 &&
        this.now.wind_speed_avg_last_1_min < 40 &&
        this.now.wind_chill < 80 &&
        this.now.wind_chill > 60 &&
        this.now.rainfall_last_60_min == 0
      );
    },
    windChillAdvisory() {
      return (
        this.now.wind_chill <= -30 && this.now.wind_speed_avg_last_1_min >= 10
      );
    },
    heatAdvisory() {
      return this.now.heat_index >= 105;
    },
    rainingCatsAndDogs() {
      return this.now.rain_rate_last >= 30;
    }
  },
  timers: {
    scroll: { time: 4000, autostart: true, repeat: true }
  },
  watch: {
    position(newValue) {
      const ctx = this.$refs["view"];
      const items = Array.from(ctx.children);
      const height = items
        .slice(0, newValue)
        .reduce((total, item) => total + item.scrollHeight, 0);
      this.$SmoothScroll(height, this.speed, null, ctx, "y");
    }
  },
  methods: {
    format(ts) {
      return moment(ts).format("LT")
    },
    scroll() {
      let pos = this.position + 1;
      let total = this.$refs["view"].children.length;
      if (pos >= total) {
        pos = 0;
      }
      this.position = pos;
    },
    direction: function(bearing) {
      const arr = [
        "NORTH",
        "NNE",
        "NE",
        "ENE",
        "EAST",
        "ESE",
        "SE",
        "SSE",
        "SOUTH",
        "SSW",
        "SW",
        "WSW",
        "WEST",
        "WNW",
        "NW",
        "NNW"
      ];
      const val = Math.floor(bearing / 22.5 + 0.5);
      return arr[val % 16];
    },
    uvIndexLevel: function(level) {
      switch (level) {
        case 0:
          return "";
        case 1:
        case 2:
          return "Low";
        case 3:
        case 4:
        case 5:
          return "Moderate";
        case 6:
        case 7:
          return "High";
        case 8:
        case 9:
        case 10:
          return "Very High";
        default:
          return "Extreme";
      }
    },
    ozoneLevel: function(level) {
      if (level <= 50) return "Good";
      if (level <= 100) return "Moderate";
      if (level <= 150) return "Potentially Unhealthy";
      if (level <= 200) return "Unhealthy";
      if (level <= 300) return "Very Unhealthy";
      return "Hazardous";
    }
  }
};
</script>

<style>
.tickerbox {
  height: 20px;
  width: 380px;
  overflow: hidden;
  position: absolute;
  list-style: none;
}

.tickerbox li {
  height: 23px;
}
</style>
