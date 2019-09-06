<template>
  <div
    class="label center"
    style="position: absolute;"
    :style="{ top: top, left: left, width: width }"
  >
    <div>{{ label }}</div>
    <div>
      <div
        v-if="trend"
        :style="style"
        class="trend"
      >
        &#8594;
      </div>
      <span class="digital">{{ valueTween.toFixed(decimals || 0) }}</span>
      <span :class="{ super: sup }">&nbsp;{{ unit }}</span>
    </div>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "Metric",
  props: {
    top: {
      type: [Number, String],
      required: true
    },
    left: {
      type: [Number, String],
      required: true
    },
    width: {
      type: [Number, String],
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
    style () {
      let trend = this.trend;
      return {
        transform: 'rotate(' + trend + 'deg)'
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
    value: function(oldValue, newValue) {
      this.count++;
      const differential = (newValue - this.mean) / this.count;
      this.mean = this.mean + differential;
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}

.right {
  text-align: right;
}

.super {
  vertical-align: top;
  line-height: 20px;
}

.label {
  font-family: Arial;
  font-size: 11px;
  font-weight: bold;
  text-shadow: none;
  color: #053D6C;
}

.trend {
  margin-top: 3px;
  right: 5px;
  position: absolute;
}
</style>
