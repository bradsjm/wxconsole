<template>
  <div style="position: absolute;" v-bind:style="{ top: top + 'px', left: left + 'px', width: width + 'px' }">
    <div class="label">{{ label }}</div>
    <div class="digital metric">
      <span v-if="trend" style="margin-top: 5px; right: 5px; display: block; position: absolute;" :style="style" class="units middle">&#8594;</span>
      <span>{{ valueTween.toFixed(decimals) }}</span>
      <span class="units" v-bind:class="{ super: sup }">&nbsp;{{ unit }}</span>
    </div>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "Metric",
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
  computed: {
    style () {
      return {
        transform: 'rotate(' + this.trend + 'deg)'
      }
    }
  },
  data() {
    return {
      count: 0,
      mean: 0
    }
  },
  mixins: [
    VueMixinTween('value', 250)
  ],
  watch: {
    value: function(val) {
      this.count++;
      const differential = (newValue - this.mean) / this.count;
      this.mean = this.mean + differential;
    }
  }
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
