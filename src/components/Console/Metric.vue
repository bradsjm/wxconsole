<template>
  <div
    class="center"
    :style="{ top: top, left: left, width: width }"
  >
    <span class="label tiny">{{ label }}<br></span>
    <span class="digital large">{{ display }}</span>
    <div
      v-if="trend"
      :style="rotate"
      class="digital trend"
    >
      &#x21E1;
    </div>
    <span
      class="label tiny"
      :class="{ super: sup }"
      v-html="unit"
    />
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "Metric",
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    sup: {
      type: Boolean,
      required: false
    },
    trend: {
      type: Number,
      default: 0
    }
  },
  computed: {
    display() {
      var m = this.valueTween.toFixed(this.decimals || 0);
      if (!this.value)
        m = m.replace(/0/g, "-");
      return m;
    },
    rotate () {
      return {
        transform: 'rotate(' + this.trendTween + 'deg)'
      }
    }
  },
  data() {
    return {}
  },
  mixins: [
    VueMixinTween('value', 250),
    VueMixinTween('trend', 1000)
  ]
}
</script>

<style>
.super {
  vertical-align: top;
  line-height: 20px;
}

.trend {
  top: 20px;
  right: 15px;
  font-size: 12px;
  font-weight: bolder;
}
</style>
