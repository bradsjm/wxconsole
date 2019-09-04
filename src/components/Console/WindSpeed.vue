<template>
  <div style="position: absolute; top: 75px; left: 60px; width: 140px;">
    <div class="label left">WIND</div>
    <div class="digital center" style="padding-top: 30px;">{{ valueTween.toFixed(decimals) }}</div>
    <div class="label center" style="padding-top: 7px;">{{ unit }}</div>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "WindSpeed",
  props: {
    label: String,
    value: Number,
    decimals: Number,
    unit: String
  },
  mixins: [
    VueMixinTween('value', 1000)
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

</style>
