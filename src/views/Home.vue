<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <Console />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    Console: () => import("@/components/Console/Console.vue"),
  },
};
</script>
