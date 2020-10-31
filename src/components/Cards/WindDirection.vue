<template>
  <Compass
    style="display: block; margin: auto; padding: 0px;"
    size="201"
    backgroundColor="BEIGE"
    foregroundType="TYPE1"
    frameDesign="TILTED_GRAY"
    pointerColor="RAITH"
    pointerType="TYPE2"
    degreeScale="true"
    rotateFace="true"
    :value="daviswx.wind_dir_last"
  />
</template>

<script>
import { mapState } from "vuex";
import { Compass } from "vue-steelseries";

export default {
  name: "WindDirection",
  components: {
    Compass,
  },
  computed: {
    ...mapState(["daviswx"]),
    humidityTrend() {
      const hum = this.daviswx.hum;
      const avg = this.daviswx.hum_avg_last_15_min;
      if (hum > avg) return "UP";
      if (hum == avg) return "STEADY";
      if (hum < avg) return "DOWN";
      return "OFF";
    },
  },
};
</script>
