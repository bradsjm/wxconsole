<script>
export default {
  name: "WxMqttService",
  render: () => null,
  mounted() {
    this.$mqtt.subscribe([ "weather/#", "darksky/#" ]);
    this.ping();
  },
  destroyed() {
    this.$mqtt.unsubscribe([ "weather/#", "darksky/#" ]);
  },
  timers: {
    ping: { time: 600, autostart: true, repeat: true }
  },
  methods: {
    ping: function() {
      this.$mqtt.publish("command/real_time", { duration: 1200 });
    }
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