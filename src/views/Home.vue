<template>
  <Console />
</template>

<script>
export default {
  name: "Home",
  components: {
    Console: () => import("@/components/Console/Console.vue"),
  },
};
</script>
