<template>
  <div id="moonIcon" v-bind:class="sprite"></div>
</template>

<script>
export default {
  name: "MoonIcon",
  props: {
     value: Number
  },
  computed: {
    sprite: function() {
      let date = new Date(this.value * 1000);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      if (month < 3) {
        year--;
        month += 12;
      }
      ++month;
      var jd = (365.25 * year) + (30.6 * month) + day - 694039.09; // jd is total days elapsed
      jd /= 29.5305882; // divide by the moon cycle
      var b = parseInt(jd); // int(jd) -> b, take integer part of jd
      jd -= b; // subtract integer part to leave fractional part of original jd
      b = Math.round(jd * 8); // scale fraction from 0-8 and round
      if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
      return "m" + b;
    }
  }
}
</script>

<style>
#moonIcon {
  top: 68px;
  left: 265px;
  position: absolute;
}

.m0, .m1, .m2, .m3, .m4, .m5, .m6, .m7 {
    background: url('./images/moon-icons.png') no-repeat;
}

.m0 {
    background-position: 0 0;
    width: 35px;
    height: 35px;
}

.m1 {
    background-position: -50px 0;
    width: 35px;
    height: 35px;
}

.m2 {
    background-position: -100px 0;
    width: 35px;
    height: 35px;
}

.m3 {
    background-position: -150px 0;
    width: 35px;
    height: 35px;
}

.m4 {
    background-position: -200px 0;
    width: 35px;
    height: 35px;
}

.m5 {
    background-position: -250px 0;
    width: 35px;
    height: 35px;
}

.m6 {
    background-position: -300px 0;
    width: 35px;
    height: 35px;
}

.m7 {
    background-position: -350px 0;
    width: 35px;
    height: 35px;
}
</style>
