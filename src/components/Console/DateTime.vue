<template>
  <div
    v-if="value > 0"
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
      return date.toLocaleDateString(undefined, {
          month: 'numeric',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
      })
    }
  }
}
</script>

<style>
</style>
