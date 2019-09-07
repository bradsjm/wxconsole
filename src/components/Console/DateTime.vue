<template>
  <div
    :style="{ top: top, left: left }"
    class="digital small"
  >
    {{ value | format }}
  </div>
</template>

<script>

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
    value: {
      type: Number,
      required: true
    }
  },
  filters: {
    format: function (value) {
      if (!value) return '';
      const date = new Date(value);
      const dateOptions = { day: '2-digit', month: 'numeric', year: 'numeric' };
      const timeOptions = { hour12: true, hour: '2-digit', minute:'2-digit' };
      return date.toLocaleDateString([], dateOptions) + " " +
             date.toLocaleTimeString([], timeOptions);
    }
  }
}
</script>

<style>
</style>
