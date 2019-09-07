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
    forecast: {
      type: Object,
      required: true
    },
    wx: {
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
      if (this.forecast.currently) {
        const current = this.forecast.currently;
        msgs.push(
          "Currently it's " + current.summary,
          "The nearest storm: " + current.nearestStormDistance.toFixed(1)
                            + " miles "
                            + this.direction(current.nearestStormBearing),
          "Chance of rain: " + current.precipProbability.toFixed() * 100 + "%",
          "Cloud cover: " + current.cloudCover.toFixed() * 100 + "%",
          "Visibility: " + current.visibility.toFixed(1) + " miles",
          "UV index: " + current.uvIndex,
          "Ozone level: " + current.ozone
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
