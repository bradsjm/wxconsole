<template>
    <transition name="slide">
      <div class="message" style="top: 284px; left: 70px; position: absolute;"></div>
    </transition>
</template>

<script>
export default {
  name: "Ticker",
  props: {
    messages: Array
  },
  data() {
    return {
    }
  },
  computed: {
  },
}
</script>

<style>

</style>
