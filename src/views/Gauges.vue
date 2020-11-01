<template>
  <v-container>
    <draggable v-model="cards" class="row wrap" @end="save">
      <v-col cols="auto" v-for="card in cards" :key="card.name">
        <v-card>
          <v-card-title :class="card.titleClass">
            {{ card.name }}
            <v-spacer />
            <v-icon>{{ card.icon }}</v-icon>
          </v-card-title>
          <v-card-text>
            <component v-bind:is="card.component"></component>
          </v-card-text>
        </v-card>
      </v-col>
    </draggable>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

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
    draggable,
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
          component: "TemperatureCard",
          titleClass: "primary--text",
        },
        {
          name: "Humidity",
          icon: "mdi-water-percent",
          component: "HumidityCard",
          titleClass: "primary--text",
        },
        {
          name: "Wind Direction",
          icon: "mdi-compass",
          component: "WindDirectionCard",
          titleClass: "primary--text",
        },
        {
          name: "Wind Speed",
          icon: "mdi-weather-windy",
          component: "WindSpeedCard",
          titleClass: "primary--text",
        },
        {
          name: "Wind Rose",
          icon: "mdi-weather-windy-variant",
          component: "WindRoseCard",
          titleClass: "primary--text",
        },
        {
          name: "Barometer",
          icon: "mdi-gauge",
          component: "BarometerCard",
          titleClass: "primary--text",
        },
        {
          name: "Daily Rain",
          icon: "mdi-weather-rainy",
          component: "DailyRainCard",
          titleClass: "blue--text",
        },
        {
          name: "Rainfall Rate",
          icon: "mdi-weather-pouring",
          component: "RainfallRateCard",
          titleClass: "blue--text",
        },
      ],
    };
  },
  methods: {
    load(cards) {
      if (cards.length != this.cards.length) return;
      this.cards = cards
        .map((name) => {
          return this.cards.find((c) => c.name == name);
        })
        .filter((v) => v); // remove any non-matches
    },
    save() {
      localStorage.dashboardCards = JSON.stringify(
        this.cards.map((c) => c.name)
      );
    },
  },
  mounted() {
    if (localStorage.dashboardCards) {
      this.load(JSON.parse(localStorage.dashboardCards));
    }
  },
};
</script>
