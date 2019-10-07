<template>
  <div v-if="current.ready && now.ready">
    <!-- Line 1: Temperature and Barometric Pressure -->
    <Metric
      top="43px"
      left="160px"
      width="80px"
      label="TEMP OUT"
      unit="&nbsp;&deg;F"
      :value="now.temp"
      :decimals="1"
      :sup="true"
    />
    <Metric
      top="43px"
      left="240px"
      width="80px"
      label="HUM OUT"
      unit="&nbsp;%"
      :value="now.hum"
      :sup="true"
    />
    <Metric
      top="43px"
      left="320px"
      width="105px"
      label="BAROMETER"
      unit="inHg"
      :value="now.bar_sea_level"
      :decimals="2"
      :sup="false"
      :trend="now.bar_trend | trend"
    />
    <!-- Line 2: Feels like and Dew Point -->
    <Metric
      top="99px"
      left="160px"
      width="80px"
      label="FEELS LIKE"
      unit="&nbsp;&deg;F"
      :value="now.thw_index"
      :decimals="1"
      :sup="true"
    />
    <Metric
      top="99px"
      left="242px"
      width="80px"
      label="DEW POINT"
      unit="&nbsp;&deg;F"
      :value="now.dew_point"
      :decimals="1"
      :sup="true"
    />
    <Metric
      top="99px"
      left="320px"
      width="105px"
      label="STORM WATCH"
      unit="&nbsp;mi"
      :value="current.nearestStormDistance"
      :trend="current.nearestStormBearing"
      :decimals="0"
      :sup="false"
    />
    <!-- Line 3: Rain Gauge -->
    <Metric
      top="155px"
      left="160px"
      width="80px"
      label="DAILY RAIN"
      unit="in"
      :value="now.rainfall_daily / 100"
      :decimals="2"
    />
    <Metric
      top="155px"
      left="245px"
      width="80px"
      label="HOURLY RAIN"
      unit="in"
      :value="now.rain_60_min / 100"
      :decimals="2"
    />
    <Metric
      top="155px"
      left="320px"
      width="105px"
      label="RAIN RATE"
      unit="in"
      :value="now.rain_rate_last / 100"
      :decimals="2"
    />
  </div>
</template>

<script>
import Metric from "./Metric.vue";

export default {
  name: "ConsoleNow",
  components: {
    Metric
  },
  props: {
    now: {
      type: Object,
      required: true
    },
    current: {
      type: Object,
      required: true
    }
  },
  filters: {
    trend(value) {
      // Trend direction (0 is up, 90 is steady, 180 is down)
      if (value <= -0.02) return 16;
      if (value > -0.02 && value < 0.0) return 53;
      if (value == 0) return 90;
      if (value > 0.0 && value < 0.02) return 127;
      if (value >= 0.02) return 164;
      return 90;
    }
  }
};
</script>
