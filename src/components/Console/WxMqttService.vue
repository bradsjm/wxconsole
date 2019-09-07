<script>
export default {
  name: "WxMqttService",
  render: () => null,
  mounted() {
    this.$mqtt.subscribe([ "weather/#", "darksky/#" ]);
  },
  destroyed() {
    this.$mqtt.unsubscribe([ "weather/#", "darksky/#" ]);
  },
  mqtt: {
    "weather/#" (data, topic) {
      try {
        const wx = JSON.parse(data.toString());
        this.$emit('weather', wx);
      } catch (e) {
        // eslint-disable-next-line
        console.error(topic + ": " + e + " (" + data.toString() + ")");
      }
    },
    "darksky/#" (data, topic) {
      try {
        const forecast = JSON.parse(data.toString());
        this.$emit('forecast', forecast);
      } catch (e) {
        // eslint-disable-next-line
        console.error(topic + ": " + e + " (" + data.toString() + ")");
      }
    }
  }
}
</script>