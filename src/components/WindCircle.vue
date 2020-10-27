<template>
  <div style="position: relative;">
    <img
      src="./images/circle-on.png"
      style="max-width: 100%; max-height: 100%;"
      :style="style"
    />
    <transition name="fade">
      <span class="centered" style="font-size: small;">
        {{ direction }}
      </span>
    </transition>
  </div>
</template>

<script>
import VueMixinTween from "vue-mixin-tween";

export default {
  name: "WindCircle",
  props: {
    value: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  computed: {
    style() {
      const direction = this.valueTween;
      return { transform: "rotate(" + direction + "deg)" };
    },
    direction() {
      const arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
      ];
      const val = Math.ceil(this.value / 22.5);
      return arr[val % 16];
    },
  },
  mixins: [VueMixinTween("value", 2500)],
};
</script>

<style>
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
