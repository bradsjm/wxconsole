<template>
  <Radial
    style="display: block; margin: auto; padding: 0px;"
    size="201"
    backgroundColor="BEIGE"
    foregroundType="TYPE1"
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
    maxValue="120"
    maxMeasuredValueVisible="false"
    niceScale="true"
    pointerColor="RED"
    pointerType="TYPE8"
    title="Temperature"
    thresholdVisible="false"
    trendVisible="true"
    unit="°F"
    :trend="temperatureTrend"
    :value="daviswx.temp"
  >
    <Area
      :start="daviswx.temp_min_last_24_hr"
      :end="daviswx.temp_max_last_24_hr"
      color="rgba(212,132,134,0.3)"
    />
    <Section start="0" end="15" color="rgba(25, 112, 210, 0.4)" />
    <Section start="15" end="25" color="rgba(9, 150, 224, 0.4)" />
    <Section start="25" end="32" color="rgba(2, 170, 209, 0.4)" />
    <Section start="32" end="40" color="rgba(0, 162, 145, 0.4)" />
    <Section start="40" end="50" color="rgba(0, 158, 122, 0.4)" />
    <Section start="50" end="60" color="rgba(54, 177, 56, 0.4)" />
    <Section start="60" end="70" color="rgba(111, 202, 56, 0.4)" />
    <Section start="70" end="80" color="rgba(248, 233, 45, 0.4)" />
    <Section start="80" end="90" color="rgba(253, 142, 42, 0.4)" />
    <Section start="90" end="110" color="rgba(236, 45, 45, 0.4)" />
    <Section start="110" end="200" color="rgba(245, 109, 205, 0.4)" />
  </Radial>
</template>

<script>
import { mapState } from "vuex";
import { Area, Radial, Section } from "vue-steelseries";

export default {
  name: "TemperatureCard",
  components: {
    Area,
    Radial,
    Section,
  },
  computed: {
    ...mapState(["daviswx"]),
    temperatureTrend() {
      const temp = this.daviswx.temp;
      const avg = this.daviswx.temp_avg_last_15_min;
      if (temp > avg) return "UP";
      if (temp == avg) return "STEADY";
      if (temp < avg) return "DOWN";
      return "OFF";
    },
  },
};
</script>
