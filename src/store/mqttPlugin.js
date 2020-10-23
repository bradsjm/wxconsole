export default (store) => {
  const mqtt = require("mqtt");
  const client = mqtt.connect("wss://soldier.cloudmqtt.com:35692", {
    username: "wx",
    password: "wx",
  });

  client.on("connect", () => {
    client.subscribe([
      "daviswx/001D0A710CBF/+",
      "daviswx/001D0A710CBF/1/+",
      "darksky/#",
    ]);
  });

  client.on("message", (topic, data) => {
    const prefix = topic.split("/")[0];
    store.commit(prefix, {
      topic: topic,
      message: data.toString(),
    });
  });
};
