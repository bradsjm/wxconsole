<template>
  <div
    id="forecastIcon"
    :class="sprite"
  />
</template>

<script>
export default {
  name: "ForecastIcon",
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    sprite: function() { return "d2" }
  },
}
</script>

<style>
#forecastIcon {
  top: 68px;
  left: 205px;
  position: absolute;
}

.d2, .d3, .d5, .d6, .d7, .umbrella {
  background: url('./images/weather-icons.png') no-repeat;
}

/* sunny */
.d2 {
  background-position: 0 0;
  width: 35px;
  height: 35px;
}

.d3 {
  background-position: -50px 0;
  width: 50px;
  height: 32px;
}

.d5 {
  background-position: -100px 0;
  width: 50px;
  height: 27px;
}

.d6 {
  background-position: -150px 0;
  width: 37px;
  height: 38px;
}

.d7 {
  background-position: -200px 0;
  width: 50px;
  height: 43px;
}

.umbrella {
  background-position: -250px 0;
  width: 35px;
  height: 35px;
}
</style>
