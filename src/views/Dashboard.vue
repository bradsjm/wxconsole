<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Temperature</v-card-title>
          <v-card-text class="text-h3"
            >{{ daviswx.temp || "" }}&deg;F</v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Wind Speed</v-card-title>
          <v-card-text class="text-h3"
            >{{ daviswx.wind_speed_last || "" }} mph</v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="2" outlined>
          <v-card-title>Wind Direction</v-card-title>
          <v-card-text class="text-h3"
            >{{ daviswx.wind_dir_last || "" }}&deg;</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {},
  computed: {
    ...mapState(["daviswx"]),
  },
};
</script>
