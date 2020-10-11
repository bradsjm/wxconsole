<script>
const pingMinutes = 10;

export default {
  name: "WeatherData",
  data() {
    return {
      indicator: false,
      map: new Map(),
      current: {
        ready: false
      },
      now: {
        ready: false
      },
      today: {
        ready: false
      }
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
    reset: { time: 1500 }
  },
  methods: {
    ping: function() {
      this.$mqtt.publish("command/real_time");
    },
    pulse: function() {
      this.indicator = true;
      this.$timer.restart("reset");
    },
    reset: function() {
      this.indicator = false;
    }
  },
  mqtt: {
    "vantage/#"(data, topic) {
      try {
        this.pulse();
        const wx = JSON.parse(data.toString());
        this.map.set(wx.data_structure_type, true);
        this.now = Object.assign({}, this.now, wx);
        this.now.ready = this.map.has(1) && this.map.has(3) && this.map.has(4);
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
    },
    "darksky/#"(data, topic) {
      try {
        this.pulse();
        const darksky = JSON.parse(data.toString());
        switch (topic) {
          case "darksky/currently":
            this.current = darksky;
            this.current.ready = "time" in darksky;
            break;
          case "darksky/today":
            this.today = darksky;
            this.today.ready = "time" in darksky;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.warn(topic + ": " + e + " (" + data.toString() + ")");
      }
    }
  }
};
</script>