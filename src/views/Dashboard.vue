<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Led</v-card-title>
          <v-card-text>
            <Led size="80" value="false" blink="true" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Odometer</v-card-title>
          <v-card-text>
            <Odometer size="80" digits="3" value="50" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Traffic Light</v-card-title>
          <v-card-text>
            <TrafficLight width="80" height="80" green="1" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Clock</v-card-title>
          <v-card-text>
            <Clock size="200" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>StopWatch</v-card-title>
          <v-card-text>
            <StopWatch size="200" run="1" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Lightbulb</v-card-title>
          <v-card-text>
            <LightBulb height="200" width="200" value="0" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Level</v-card-title>
          <v-card-text>
            <Level size="200" value="45" rotateFace="1" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Horizon</v-card-title>
          <v-card-text>
            <Horizon size="200" roll="45" pitch="10" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Altimeter</v-card-title>
          <v-card-text>
            <Altimeter size="200" :value="daviswx.bar_sea_level || 0" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Battery</v-card-title>
          <v-card-text>
            <Battery size="200" :value="5" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Temperature</v-card-title>
          <v-card-text>
            <Radial size="200" :value="daviswx.temp || 0" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Compass</v-card-title>
          <v-card-text>
            <Compass
              :size="200"
              :value="daviswx.wind_dir_last + 1 || 0"
              :rotateFace="true"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Wind Direction</v-card-title>
          <v-card-text>
            <WindDirection
              :size="200"
              frameDesign="GOLD"
              :value="daviswx.wind_dir_last + 1 || 0"
              :average="daviswx.wind_dir_at_hi_speed_last_10_min + 1 || 0"
              :lcdVisible="true"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import {
  Altimeter,
  Battery,
  Clock,
  Compass,
  Horizon,
  Led,
  Level,
  LightBulb,
  Odometer,
  Radial,
  StopWatch,
  TrafficLight,
  WindDirection,
} from "vue-steelseries";

export default {
  name: "Dashboard",
  components: {
    Altimeter,
    Battery,
    Clock,
    Compass,
    Horizon,
    Led,
    Level,
    LightBulb,
    Odometer,
    Radial,
    StopWatch,
    TrafficLight,
    WindDirection,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
