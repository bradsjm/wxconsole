<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card elevation="2" outlined>
          <v-card-title>Temperature</v-card-title>
          <v-card-text>
            <Radial
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
              size="221"
              title="Temperature"
              thresholdVisible="false"
              trendVisible="false"
              unit="°F"
              :value="daviswx.temp || 0"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { Radial } from "vue-steelseries";

export default {
  name: "Dashboard",
  components: {
    Radial,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
