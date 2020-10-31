<template>
  <Radial
    style="display: block; margin: auto; padding: 0px;"
    size="201"
    backgroundColor="BEIGE"
    foregroundType="TYPE4"
    frameDesign="TILTED_GRAY"
    fullScaleDeflectionTime="4"
    gaugeType="TYPE4"
    knobStyle="SILVER"
    knobType="STANDARD_KNOB"
    labelFormat="STANDARD"
    lcdDecimals="1"
    lcdColor="STANDARD"
    ledVisible="false"
    minValue="0"
    minMeasuredValueVisible="false"
    maxMeasuredValueVisible="true"
    niceScale="true"
    pointerColor="CYAN"
    pointerType="TYPE7"
    title="Wind Speed"
    thresholdVisible="false"
    trendVisible="false"
    unit="mph"
    :maxMeasuredValue="daviswx.wind_speed_max_last_24_hr"
    :value="daviswx.wind_speed_last"
    :maxValue="Math.max(10, daviswx.wind_speed_max_last_24_hr * 2)"
  >
    <Area
      start="0"
      :end="daviswx.wind_speed_avg_last_10_min"
      color="rgba(132,212,134,0.3)"
    />
    <Area
      :start="daviswx.wind_speed_avg_last_10_min"
      :end="daviswx.wind_speed_hi_last_10_min"
      color="rgba(212,132,134,0.3)"
    />
    <Section start="0" end="20" color="rgba(0, 158, 122, 0.4)" />
    <Section start="20" end="39" color="rgba(54, 177, 56, 0.4)" />
    <Section start="39" end="74" color="rgba(200, 85, 56, 0.4)" />
    <Section start="74" end="94" color="rgba(248, 0, 45, 0.4)" />
    <Section start="94" end="110" color="rgba(200, 0, 0, 0.4)" />
    <Section start="110" end="129" color="rgba(236, 45, 45, 0.4)" />
    <Section start="129" end="200" color="rgba(245, 109, 205, 0.4)" />
  </Radial>
</template>

<script>
import { mapState } from "vuex";
import { Area, Radial, Section } from "vue-steelseries";

export default {
  name: "WindSpeed",
  components: {
    Area,
    Radial,
    Section,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
