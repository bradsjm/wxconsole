<template>
  <div style="top: 86px; left: 80px; position: absolute;">
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
  name: "WindDirectionSvg",
  props: {
    value: {
      type: Number,
      required: true
    },
    outline: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    transform () {
      const direction = this.valueTween - 90;
      return "translate(50,50), rotate(" + direction + ",0,0)";
    },
    fill () {
      return this.outline ? "none" : "rgb(5,61,108)";
    }
  },
  mixins: [VueMixinTween("value", 2500)]
    // Filled <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="translate(300,300) rotate(90,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 34 0 L 49 -5 C 45 -2 45 2 49 5 L 34 0"/></g></svg>
    // Outline <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="translate(300,300) rotate(90,0,0)"><path fill="none" stroke="#000000" paint-order="fill stroke markers" d=" M 34 0 L 49 -5 C 45 -2 45 2 49 5 L 34 0" stroke-miterlimit="10" stroke-dasharray=""/></g></svg>
    // Trend 16 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="rotate(-74,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 5 0 L -5 -3 C -3 -1 -3 1 -5 3 L 5 0"/></g></svg>
    // Trend 90 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="rotate(0,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 5 0 L -5 -3 C -3 -1 -3 1 -5 3 L 5 0"/></g></svg>
    // Trend 53 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="rotate(-37,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 5 0 L -5 -3 C -3 -1 -3 1 -5 3 L 5 0"/></g></svg>
    // Trend 127 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="rotate(37.00000000000001,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 5 0 L -5 -3 C -3 -1 -3 1 -5 3 L 5 0"/></g></svg>
    // Trend 164 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600"><defs/><g transform="rotate(74,0,0)"><path fill="rgb(5,61,108)" stroke="none" paint-order="stroke fill markers" d=" M 5 0 L -5 -3 C -3 -1 -3 1 -5 3 L 5 0"/></g></svg>
};
</script>

<style scoped>
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.label {
  font-family: Arial;
  font-size: 11px;
  font-weight: bold;
  text-shadow: none;
  color: #053d6c;
}
</style>
