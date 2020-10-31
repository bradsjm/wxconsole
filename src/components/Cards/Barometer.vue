<template>
  <Radial
    style="display: block; margin: auto; padding: 0px;"
    size="201"
    backgroundColor="BEIGE"
    foregroundType="TYPE4"
    frameDesign="TILTED_GRAY"
    fractionalScaleDecimals="1"
    fullScaleDeflectionTime="4"
    gaugeType="TYPE4"
    knobStyle="SILVER"
    knobType="STANDARD_KNOB"
    labelNumberFormat="FRACTIONAL"
    labelFormat="STANDARD"
    lcdDecimals="2"
    lcdColor="STANDARD"
    ledVisible="false"
    maxValue="30.5"
    minValue="29.5"
    minMeasuredValueVisible="false"
    maxMeasuredValueVisible="false"
    niceScale="false"
    pointerColor="CYAN"
    pointerType="TYPE11"
    title="Barometer"
    thresholdVisible="false"
    tickLabelOrientation="HORIZONTAL"
    trendVisible="true"
    unit="inHg"
    :value="daviswx.bar_sea_level"
    :trend="barometricTrend"
  >
    <Area
      :start="daviswx.bar_sea_level_min_last_24_hr"
      :end="daviswx.bar_sea_level_max_last_24_hr"
      color="rgba(212,132,134,0.3)"
    />
  </Radial>
</template>

<script>
import { mapState } from "vuex";
import { Area, Radial } from "vue-steelseries";

export default {
  name: "Barometer",
  components: {
    Area,
    Radial,
  },
  computed: {
    ...mapState(["daviswx"]),
    barometricTrend() {
      const trend = this.daviswx.bar_trend;
      if (trend > 0) return "UP";
      if (trend == 0) return "STEADY";
      if (trend < 0) return "DOWN";
      return "OFF";
    },
  },
};
</script>
