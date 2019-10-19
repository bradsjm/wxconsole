<template>
  <div
    style="width: 100%; height: 100%;"
    :style="{ top: top, left: left }"
  >
    <div class="label tiny">
      WIND
    </div>
    <div
      class="digital-mono center large"
      style="top: 38px; width: 100%;"
    >
      {{ valueTween.toFixed(decimals) }}
    </div>
    <div
      class="label center tiny"
      style="top: 80px; width: 100%;"
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
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: "MPH"
    }
  },
  computed: {
    decimals() {
      return this.valueTween < 9 ? 1 : 0;
    }
  },
  mixins: [
    VueMixinTween('value', 1500, TWEEN.Easing.Exponential.InOut)
  ]
}
</script>

<style>
</style>
