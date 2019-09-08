<template>
  <div :style="{ top: top, left: left }">
    <svg
      width="100"
      height="100"
    >
      <g :transform="transform">
        <path
          :fill="fill"
          stroke="#000000"
          d="M 34 0 L 49 -5 C 45 -2 45 2 49 5 L 34 0"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import VueMixinTween from "vue-mixin-tween";

export default {
  name: "WindDirection",
  props: {
    value: {
      type: Number,
      required: true
    },
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    transform() {
      const direction = this.valueTween - 90;
      return "translate(50,50), rotate(" + direction + ",0,0)";
    },
    fill() {
      return this.outline ? "none" : "rgb(5,61,108)";
    }
  },
  mixins: [
    VueMixinTween("value", 2500)
  ]
};
</script>

<style>
</style>
