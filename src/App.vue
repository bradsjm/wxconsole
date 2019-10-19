<template>
  <div id="app">
    <Console />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Console: () => import("@/components/Console/Console.vue")
  }
};
</script>

<style>
</style>
