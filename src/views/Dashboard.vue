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
            <Odometer size="80" digits="3" value="50"/>
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
          <v-card-title>Wind Direction</v-card-title>
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

export default {
  name: "Dashboard",
  components: {
    Altimeter: () => import("@/components/Gauges/Altimeter.vue"),
    Battery: () => import("@/components/Gauges/Battery.vue"),
    Clock: () => import("@/components/Gauges/Clock.vue"),
    Compass: () => import("@/components/Gauges/Compass.vue"),
    Led: () => import("@/components/Gauges/Led.vue"),
    Odometer: () => import("@/components/Gauges/Odometer.vue"),
    Radial: () => import("@/components/Gauges/Radial.vue"),
    WindDirection: () => import("@/components/Gauges/WindDirection.vue"),
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
