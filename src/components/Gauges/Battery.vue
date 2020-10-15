<template>
  <canvas ref="view"></canvas>
</template>

<script>
import {
  Battery,
} from "steelseries";

export default {
  name: "Battery",
  props: {
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
      type: Number
    }
  },
  data() {
    return {
      gauge: null,
    };
  },
  methods: {
    draw: function () {
      this.gauge = new Battery(this.$refs["view"], {
        size: Number(this.size),
        value: this.value
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
      this.gauge && this.gauge.setValue(newValue)
    }
  },
};
</script>
