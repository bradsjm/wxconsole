<script>
const pingMinutes = 10;

export default {
  name: "WeatherData",
  data() {
    return {
      indicator: false,
      current: {},
      now: {},
      today: {}
    };
  },
  render() {
    return this.$scopedSlots.default({
      indicator: this.indicator,
      current: this.current,
      today: this.today,
      now: this.now
    });
  },
  mounted() {
    this.$mqtt.subscribe(["vantage/#", "darksky/#"]);
    this.ping();
  },
  destroyed() {
    this.$mqtt.unsubscribe(["vantage/#", "darksky/#"]);
  },
  timers: {
    ping: { time: pingMinutes * 60000, autostart: true, repeat: true },
    reset: { time: 2000 }
  },
  methods: {
    ping: function() {
      this.$mqtt.publish("command/real_time");
    },
    reset: function() {
      this.indicator = false;
    }
  },
  mqtt: {
    "vantage/#"(data, topic) {
      try {
        this.indicator = true;
        this.$timer.restart("reset");
        const wx = JSON.parse(data.toString());
        this.now = Object.assign({}, this.now, wx);
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
    },
    "darksky/#"(data, topic) {
      try {
        this.indicator = true;
        this.$timer.restart("reset");
        const darksky = JSON.parse(data.toString());
        switch (topic)
        {
          case "darksky/currently":
            this.current = darksky;
            break;
          case "darksky/today":
            this.today = darksky;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
    }
  }
};
</script>