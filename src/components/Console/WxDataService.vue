<script>
export default {
  name: "WxDataService",
  render: () => null,
  created() {
    this.$mqtt.subscribe("weather/#");
  },
  destroyed() {
    this.$mqtt.unsubscribe("weather/#");
  },
  mqtt: {
    "weather/#" (data) {
      try {
        const wx = JSON.parse(data.toString());
        this.$emit('wx', wx);
      } catch (e) {
        // eslint-disable-next-line
        console.error("mqtt: " + e + " (" + data.toString() + ")");
      }
    }
  }
}
</script>