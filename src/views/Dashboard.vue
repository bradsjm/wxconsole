<template>
  <v-container>
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
import { Compass, Radial, WindDirection } from "vue-steelseries";

export default {
  name: "Dashboard",
  components: {
    Compass,
    Radial,
    WindDirection,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
