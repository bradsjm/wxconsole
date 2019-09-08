<template>
  <div
    v-if="ts"
    :style="{ top: top, left: left }"
    class="digital small"
  >
    {{ ts | formatDate(format) }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "DateTime",
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    ts: {
      type: Number,
      required: true
    },
    format: {
      type: String,
      default: "L LT"
    }
  },
  filters: {
    formatDate: function (value, format) {
      return moment.unix(value).format(format);
    }
  }
}
</script>

<style>
</style>
