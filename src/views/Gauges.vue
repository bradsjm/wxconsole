<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Temperature
            <v-spacer />
            <v-icon>mdi-thermometer</v-icon>
          </v-card-title>
          <v-card-text>
            <Temperature />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Humidity
            <v-spacer />
            <v-icon>mdi-water-percent</v-icon>
          </v-card-title>
          <v-card-text>
            <Humidity />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Direction
            <v-spacer />
            <v-icon>mdi-compass</v-icon>
          </v-card-title>
          <v-card-text>
            <WindDirection />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Speed
            <v-spacer />
            <v-icon>mdi-weather-windy</v-icon>
          </v-card-title>
          <v-card-text>
            <WindSpeed />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Rose
            <v-spacer />
            <v-icon>mdi-weather-windy-variant</v-icon>
          </v-card-title>
          <v-card-text>
            <WindRose />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Barometer
            <v-spacer />
            <v-icon>mdi-gauge</v-icon>
          </v-card-title>
          <v-card-text>
            <Barometer />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Daily Rainfall
            <v-spacer />
            <v-icon>mdi-weather-rainy</v-icon>
          </v-card-title>
          <v-card-text>
            <DailyRain />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Rainfall Rate
            <v-spacer />
            <v-icon>mdi-weather-pouring</v-icon>
          </v-card-title>
          <v-card-text>
            <RainfallRate />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Temperature from "@/components/Cards/Temperature";
import Humidity from "@/components/Cards/Humidity";
import WindDirection from "@/components/Cards/WindDirection";
import WindSpeed from "@/components/Cards/WindSpeed";
import WindRose from "@/components/Cards/WindRose";
import Barometer from "@/components/Cards/Barometer";
import DailyRain from "@/components/Cards/DailyRain";
import RainfallRate from "@/components/Cards/RainfallRate";

export default {
  name: "Dashboard",
  components: {
    Barometer,
    DailyRain,
    Humidity,
    RainfallRate,
    Temperature,
    WindDirection,
    WindRose,
    WindSpeed,
  },
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
