<template>
  <RadialBargraph
    style="display: block; margin: auto; padding: 0px;"
    size="201"
    backgroundColor="BEIGE"
    foregroundType="TYPE4"
    frameDesign="TILTED_GRAY"
    fractionalScaleDecimals="1"
    fullScaleDeflectionTime="4"
    gaugeType="TYPE4"
    labelNumberFormat="FRACTIONAL"
    labelFormat="STANDARD"
    lcdDecimals="2"
    lcdColor="STANDARD"
    ledVisible="false"
    maxValue="4"
    minMeasuredValueVisible="false"
    maxMeasuredValueVisible="true"
    niceScale="false"
    title="Rainfall"
    thresholdVisible="false"
    trendVisible="true"
    unit="inHr"
    :value="daviswx.rain_rate_last / 100"
  >
    <Section start="0" end="0.5" color="rgba(25, 112, 210, 0.4)" />
    <Section start="0.5" end="1" color="rgba(9, 150, 224, 0.4)" />
    <Section start="1" end="1.5" color="rgba(2, 170, 209, 0.4)" />
    <Section start="1.5" end="2" color="rgba(0, 162, 145, 0.4)" />
    <Section start="2" end="2.5" color="rgba(0, 158, 122, 0.4)" />
    <Section start="2.5" end="4" color="rgba(54, 177, 56, 0.4)" />
    <Section start="4" end="5.5" color="rgba(111, 202, 56, 0.4)" />
    <Section start="5.5" end="6" color="rgba(248, 233, 45, 0.4)" />
    <Section start="6" end="6.5" color="rgba(253, 142, 42, 0.4)" />
    <Section start="6.5" end="8" color="rgba(236, 45, 45, 0.4)" />
    <Section start="8" end="100" color="rgba(245, 109, 205, 0.4)" />
  </RadialBargraph>
</template>

<script>
import { mapState } from "vuex";
import { Section, RadialBargraph } from "vue-steelseries";

export default {
  name: "RainfallRateCard",
  components: {
    Section,
    RadialBargraph,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
