<template>
  <WindRose
    style="display: block; position:relative; margin: auto; padding: 0px;"
    size="201"
    title="Wind Rose"
    backgroundColor="BEIGE"
    foregroundType="TYPE4"
    frameDesign="TILTED_GRAY"
    odometerVisible="true"
    odometerDigits="4"
    :value="daviswx.wind_rose_last_1_hr"
    :odometerValue="daviswx.wind_run_today"
  />
</template>

<script>
import { mapState } from "vuex";
import WindRose from "vue-windrose-graph";

export default {
  name: "WindRose",
  components: {
    WindRose,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
