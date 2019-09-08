<template>
  <div
    ref="view"
    class="ticker"
    :style="{ top: top, left: left }"
  >
    <li
      v-for="m in messages"
      :key="m"
    >
      {{ m }}
    </li>
  </div>
</template>

<script>
import moment from "moment";

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
    current: {
      type: Object,
      required: true
    },
    now: {
      type: Object,
      required: true
    },
    today: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      messages: [],
      position: 0
    };
  },
  timers: {
    scroll: { time: 4000, autostart: true, repeat: true }
  },
  watch: {
    position: function(oldValue, newValue) {
      const ctx = this.$refs["view"];
      this.$SmoothScroll(newValue * 23, 500, null, ctx, 'y');
    }
  },
  methods: {
    scroll() {
      this.position++;
      if (this.position >= this.messages.length){
        this.position = 0;
        this.build();
      }
    },
    build() {
      var msgs = [];
      if (this.current && this.today) {
        msgs.push(
          "Currently it's " + this.current.summary,
          "Forecast Low today: " +
            this.today.temperatureLow.toFixed() +
            "F at " +
            moment.unix(this.today.temperatureLowTime).format("LT"),
          "Forecast High today: " +
            this.today.temperatureHigh.toFixed() +
            "F at " +
            moment.unix(this.today.temperatureHighTime).format("LT"),
          "Cloud cover: " + this.current.cloudCover.toFixed() * 100 + "%",
          "Visibility: " + this.current.visibility.toFixed(1) + " miles",
          "UV index: " + this.current.uvIndex,
          "Ozone level: " + this.current.ozone
        );

        if (this.current.precipProbability)
          msgs.push(
            "chance of " +
              this.current.precipType +
              ": " +
              this.current.precipProbability.toFixed() * 100 +
              "%"
          );

        if (this.current.nearestStormDistance)
          msgs.push(
            "Nearest storm: " +
              this.current.nearestStormDistance.toFixed(0) +
              " miles (" +
              this.direction(this.current.nearestStormBearing) +
              ")"
          );
      }

      this.messages = msgs;
      this.scroll();
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
    }
  }
};
</script>

<style>
.ticker {
  height: 20px;
  width: 380px;
  overflow: hidden;
  position: absolute;
  list-style: none;
}

.ticker li {
  font-family: Digi, Arial;
  color: #053d6c;
  font-weight: 400;
  font-size: 20px;
  text-shadow: none;
  height: 23px;
}
</style>
