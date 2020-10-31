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
    lcdDecimals="0"
    lcdColor="STANDARD"
    ledVisible="false"
    minValue="0"
    minMeasuredValueVisible="false"
    maxValue="100"
    maxMeasuredValueVisible="false"
    niceScale="true"
    pointerColor="BLUE"
    pointerType="TYPE11"
    title="Humidity"
    thresholdVisible="false"
    trendVisible="true"
    unit="%"
    :trend="humidityTrend"
    :value="daviswx.hum"
  >
    <Area
      :start="daviswx.hum_min_last_24_hr"
      :end="daviswx.hum_max_last_24_hr"
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
    <Section start="90" end="100" color="rgba(236, 45, 45, 0.4)" />
  </Radial>
</template>

<script>
import { mapState } from "vuex";
import { Area, Radial, Section } from "vue-steelseries";

export default {
  name: "HumidityCard",
  components: {
    Area,
    Radial,
    Section,
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
