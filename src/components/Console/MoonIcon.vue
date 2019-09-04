<template>
  <div id="moonIcon" v-bind:class="sprite"></div>
</template>

<script>
export default {
  name: "MoonIcon",
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    sprite: function() { return "m0" }
  },
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
