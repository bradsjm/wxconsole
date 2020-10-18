<template>
  <v-app>
    <v-app-bar app height="67">
      <v-toolbar-title
        class="hidden-sm-and-down font-weight-bold"
        v-text="$route.name"
      />
    </v-app-bar>

    <v-navigation-drawer app permanent width="200">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Weather Station</v-list-item-title>
          <v-list-item-subtitle>Oldsmar, FL</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item link v-for="(item, i) in items" :key="i" :to="item.route">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <transition name="fade"> -->
      <router-view :key="$route.path" />
      <!-- </transition> -->
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
  data() {
    return {
      items: [
        { text: "Live Console", icon: "mdi-radio-tower", route: "/console" },
        { text: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
      ],
    };
  },
};
</script>
