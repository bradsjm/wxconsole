<template>
  <div
    class="ticker"
    :style="{ top: top, left: left }"
  >
    <li
      v-for="m in display"
      :key="m"
    >
      {{ m }}
    </li>
  </div>
</template>

<script>
import moment from 'moment';

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
      messages: []
    }
  },
  computed:
  {
      display: function() { return this.messages.slice(0, 2) }
  },
  timers: {
    scroll: { time: 4000, autostart: true, repeat: true }
  },
  methods: {
    build()
    {
      var msgs = [];
      if (this.current && this.today) {
        msgs.push(
          "Currently it's " + this.current.summary,
          "Forecast Low today: " + this.today.temperatureLow.toFixed() + "F at " + moment.unix(this.today.temperatureLowTime).format("LT"),
          "Forecast High today: " + this.today.temperatureHigh.toFixed() + "F at " + moment.unix(this.today.temperatureHighTime).format("LT"),
          "Cloud cover: " + this.current.cloudCover.toFixed() * 100 + "%",
          "Visibility: " + this.current.visibility.toFixed(1) + " miles",
          "UV index: " + this.current.uvIndex,
          "Ozone level: " + this.current.ozone
        );

        if (this.current.precipProbability)
          msgs.push(
            "chance of " + this.current.precipType + ": " + this.current.precipProbability.toFixed() * 100 + "%"
          );

        if (this.current.nearestStormDistance)
          msgs.push(
            "Nearest storm: " + this.current.nearestStormDistance.toFixed(0)
            + " miles ("
            + this.direction(this.current.nearestStormBearing)
            + ")",
        );
      }

      return msgs;
    },
    direction: function(bearing) {
      const arr = ["NORTH", "NNE", "NE", "ENE", "EAST", "ESE", "SE", "SSE", "SOUTH", "SSW", "SW", "WSW", "WEST", "WNW", "NW", "NNW"];
      const val = Math.floor((bearing / 22.5) + 0.5);
      return arr[(val % 16)];
    },
    scroll() {
      if (this.messages.length) {
        this.messages.shift();
      } else {
        this.messages = this.build();
      }
    }
  }
}
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
  color: #053D6C;
  font-weight: 400;
  font-size: 20px;
  text-shadow: none;
  height: 23px;
}

</style>
