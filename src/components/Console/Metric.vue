<template>
  <div
    class="label center tiny"
    :style="{ top: top, left: left, width: width }"
  >
    {{ label }}
    <br>
    <span class="digital large">{{ display }}</span>
    <div
      v-if="trend"
      :style="style"
      class="trend"
    >
      &#8594;
    </div>
    <span
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
.super {
  vertical-align: top;
  line-height: 20px;
}

.trend {
  top: 15px;
  right: 15px;
}
</style>
