<template>
  <v-app>
    <v-app-bar app height="67">
      <v-toolbar-title
        class="hidden-sm-and-down font-weight-bold"
        v-text="$route.name"
      />
      <v-spacer />
      <WindCircle
        :value="daviswx.wind_dir_last"
        style="width: 50px; height: 50px;"
      />
    </v-app-bar>

    <v-navigation-drawer app permanent width="200">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Weather Station</v-list-item-title>
          <v-list-item-subtitle
            >Oldsmar, FL ({{ daviswx.temp }}&deg;F)</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item link v-for="(item, i) in routes" :key="i" :to="item.path">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 text-center">
          <v-icon>mdi-github</v-icon>&nbsp;
          <a
            style="text-decoration: none"
            href="https://github.com/bradsjm/wxconsole"
            >Source Code</a
          >
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <!-- <transition name="fade"> -->
      <router-view :key="$route.path" />
      <!-- </transition> -->
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import WindCircle from "@/components/WindCircle.vue";

export default {
  name: "App",
  components: {
    WindCircle,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["daviswx"]),
    routes() {
      let routes = [];
      this.$router.options.routes.forEach((route) => {
        if ("icon" in route) {
          routes.push(route);
        }
      });
      return routes;
    },
  },
};
</script>
