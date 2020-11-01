# wxconsole

Virtual Weather Console for Weather Link Live with real-time updates via MQTT pub/sub. Uses Node Red flow to push WLL UDP broadcasts to MQTT.

### Technologies:

- VueJS 2 (https://vuejs.org/)
- Node-Red (https://nodered.org/)
- MQTT (https://mosquitto.org/)
- InfluxDB (https://www.influxdata.com/products/influxdb-overview/)
- WeatherLink Live (https://www.davisinstruments.com/weatherlinklive/)

See demonstration of my current weatherstation at http://wxconsole.nrgup.cloud/

## Installation

### MQTT

1. You can run your own MQTT server or use a hosted solution like CloudMQTT (https://www.cloudmqtt.com/) or similar so you can access the console from anywhere
2. If you run your own instance you will need to configure Websocket support to allow the web application to connect to it

### Node-Red

1. Install Node-Red (I use the docker package)
2. For real-time updates ensure that Node-Red is on the same network as the Davis Weatherlink Live as WLL uses UDP broadcast messages on the local lan
3. Import the Node Red [flow](https://raw.githubusercontent.com/bradsjm/wxconsole/main/node-red/flow.json)
4. Update the configuration to point to your MQTT server and remember to provide the username and password if required
5. If you have a darksky API (no longer available) configure the node with it, if you do not have Darksky remove the nodes
6. If you want to persist the weather data to an InfluxDB configure the Influx node, otherwise, remove it. **At this time it is not used by the web application**
7. Deploy the flow and verify data is flowing to the MQTT server

### VueJS Frontend Project setup

1. Clone the repo locally and build the project:
2. Configure the MQTT authentication information in **/src/store/mqttPlugin.js** with your MQTT hostname and authentication
3. Ensure you have [NPM](https://www.npmjs.com/) installed
4. Build the solution using the commands

```
npm install
npm build
```

5. Deploy the "dist" folder to your web server
