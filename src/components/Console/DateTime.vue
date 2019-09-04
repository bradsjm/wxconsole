<template>
  <span id="datetime" class="digital-small">{{ value | format }}</span>
</template>

<script>
export default {
  name: "DateTime",
  props: {
    value: Number
  },
  filters: {
    format: function (value) {
      if (!value) return '';
      const date = new Date(value * 1000);
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
#datetime {
  top: 68px;
  right: 260px;
}

.digital-small {
    font-family: Digi, Arial;
    color: #053D6C;
    font-size: 18px;
    font-weight: 400;
    text-shadow: none;
    position: absolute;
}
</style>
