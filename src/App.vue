<template>
  <v-app>
    <!-- <v-navigation-drawer app mini-variant clipped></v-navigation-drawer> -->

    <v-app-bar app dense>
      <v-toolbar-title>Weather Station</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless class="font-weight-small">
      <v-col class="text-right" cols="12">
        <v-icon>mdi-github</v-icon>&nbsp;
        <a
          style="text-decoration: none"
          href="https://github.com/bradsjm/wxconsole"
          >Source Code</a
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
