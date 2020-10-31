<template>
  <v-container fluid>
    <v-row>
      <div v-for="card in cards" :key="card.name">
        <v-col cols="auto">
          <v-card>
            <v-card-title>
              {{ card.name }}
              <v-spacer />
              <v-icon>{{ card.icon }}</v-icon>
            </v-card-title>
            <v-card-text>
              <component v-bind:is="card.component"></component>
            </v-card-text>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import TemperatureCard from "@/components/Cards/TemperatureCard";
import HumidityCard from "@/components/Cards/HumidityCard";
import WindDirectionCard from "@/components/Cards/WindDirectionCard";
import WindSpeedCard from "@/components/Cards/WindSpeedCard";
import WindRoseCard from "@/components/Cards/WindRoseCard";
import BarometerCard from "@/components/Cards/BarometerCard";
import DailyRainCard from "@/components/Cards/DailyRainCard";
import RainfallRateCard from "@/components/Cards/RainfallRateCard";

export default {
  name: "Dashboard",
  components: {
    BarometerCard,
    DailyRainCard,
    HumidityCard,
    RainfallRateCard,
    TemperatureCard,
    WindDirectionCard,
    WindRoseCard,
    WindSpeedCard,
  },
  data() {
    return {
      cards: [
        {
          name: "Temperature",
          icon: "mdi-thermometer",
          component: TemperatureCard,
        },
        {
          name: "Humidity",
          icon: "mdi-water-percent",
          component: HumidityCard,
        },
        {
          name: "Wind Direction",
          icon: "mdi-compass",
          component: WindDirectionCard,
        },
        {
          name: "Wind Speed",
          icon: "mdi-weather-windy",
          component: WindSpeedCard,
        },
        {
          name: "Wind Rose",
          icon: "mdi-weather-windy-variant",
          component: WindRoseCard,
        },
        { name: "Barometer", icon: "mdi-gauge", component: BarometerCard },
        {
          name: "Daily Rain",
          icon: "mdi-weather-rainy",
          component: DailyRainCard,
        },
        {
          name: "Rainfall Rate",
          icon: "mdi-weather-pouring",
          component: RainfallRateCard,
        },
      ],
    };
  },
};
</script>
