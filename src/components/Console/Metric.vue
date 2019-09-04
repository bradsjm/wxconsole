<template>
  <div style="position: absolute;" v-bind:style="{ top: top + 'px', left: left + 'px', width: width + 'px' }">
    <div class="label">{{ label }}</div>
    <div class="digital metric">
      <span class="units middle">{{ trend | flag }}</span>
      <span>{{ valueTween.toFixed(decimals) }}</span>
      <span class="units" v-bind:class="{ super: sup }">&nbsp;{{ unit }}</span>
    </div>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "Temperature",
  props: {
    top: Number,
    left: Number,
    width: Number,
    label: String,
    value: Number,
    decimals: Number,
    unit: String,
    sup: Boolean,
    trend: Number
  },
  filters: {
    flag: function(value) {
      if (value > 0) return "\u2197";
      if (value < 0) return "\u2198";
    }
  },
  mixins: [
    VueMixinTween('value', 1000)
  ]
}
</script>

<style>
.label {
  font-family: Arial;
  font-size: 11px;
  font-weight: bold;
  text-shadow: none;
  text-align: center;
  color: #053D6C;
}

.metric {
  text-align: right;
}

.super {
  vertical-align: super;
}

.middle {
  vertical-align: middle
}

.units {
  font-family: Arial;
  font-size: 11px;
  font-weight: normal;
  text-shadow: none;
  color: #053D6C;
}
</style>
