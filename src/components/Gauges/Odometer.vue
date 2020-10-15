<template>
  <canvas ref="view"></canvas>
</template>

<script>
import {
  Odometer,
} from "steelseries";

function toNumber(value) {
    if (undefined === value) return value;
    return Number(value)
}

export default {
  name: "Odometer",
  props: {
    backColor: {
      default: undefined,
      required: false,
      type: String
    },
    digits: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      }
    },
    decimal: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      }
    },
    foreColor: {
      default: undefined,
      required: false,
      type: String
    },
    font: {
      default: undefined,
      required: false,
      type: String
    },
    size: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      }
    },
    value: {
      required: true,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      }
    },
    valueBackColor: {
      default: undefined,
      required: false,
      type: String
    },
    valueForeColor: {
      default: undefined,
      required: false,
      type: String
    },
    wobbleFactor: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      }
    },
  },
  data() {
    return {
      gauge: null,
    };
  },
  methods: {
    draw: function () {
      this.gauge = new Odometer(this.$refs["view"], {
        height: toNumber(this.size),
        digits: toNumber(this.digits),
        decimals: toNumber(this.decimals),
        decimalBackColor: this.backgroundColor,
        decimalForeColor: this.foreColor,
        font: this.font,
        value: toNumber(this.value),
        valueBackColor: this.valueBackColor,
        valueForeColor: this.valueForeColor,
        wobbleFactor: toNumber(this.wobbleFactor)
      });
    },
  },
  mounted() {
    this.draw();
  },
  watch: {
    size() {
      this.draw();
    },
    value(newValue) {
      this.gauge && this.gauge.setValueAnimated(Number(newValue))
    },
  },
};
</script>
