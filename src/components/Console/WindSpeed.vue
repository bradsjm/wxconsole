<template>
  <div style="position: absolute; top: 75px; left: 60px; width: 140px;">
    <div class="label left">
      WIND
    </div>
    <div
      class="digital center"
      style="padding-top: 25px;"
    >
      {{ valueTween.toFixed(decimals) }}
    </div>
    <div
      class="line"
      :style="{ width: Math.min(60, valueTween) + 'px' }"
    />
    <div
      class="label center"
      style="padding-top: 7px;"
    >
      {{ unit }}
    </div>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';
import TWEEN from '@tweenjs/tween.js';

export default {
  name: "WindSpeed",
  props: {
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
      default: "MPH"
    }
  },
  mixins: [
    VueMixinTween('value', 1500, TWEEN.Easing.Exponential.InOut)
  ]
}
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
  color: #053D6C;
}

.line {
  border-bottom: 2px dotted black;
  margin-left: 40px;
}
</style>
