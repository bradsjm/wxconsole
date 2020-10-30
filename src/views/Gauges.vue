<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Temperature
            <v-spacer />
            <v-icon>mdi-thermometer</v-icon>
          </v-card-title>
          <v-card-text>
            <Radial
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE1"
              frameDesign="TILTED_GRAY"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              knobStyle="SILVER"
              knobType="STANDARD_KNOB"
              labelFormat="STANDARD"
              lcdDecimals="1"
              lcdColor="STANDARD"
              ledVisible="false"
              minValue="0"
              minMeasuredValueVisible="false"
              maxValue="120"
              maxMeasuredValueVisible="false"
              niceScale="true"
              pointerColor="RED"
              pointerType="TYPE8"
              title="Temperature"
              thresholdVisible="false"
              trendVisible="true"
              unit="°F"
              :trend="temperatureTrend"
              :value="daviswx.temp"
            >
              <Area
                :start="daviswx.temp_min_last_24_hr"
                :end="daviswx.temp_max_last_24_hr"
                color="rgba(212,132,134,0.3)"
              />
              <Section start="0" end="15" color="rgba(25, 112, 210, 0.4)" />
              <Section start="15" end="25" color="rgba(9, 150, 224, 0.4)" />
              <Section start="25" end="32" color="rgba(2, 170, 209, 0.4)" />
              <Section start="32" end="40" color="rgba(0, 162, 145, 0.4)" />
              <Section start="40" end="50" color="rgba(0, 158, 122, 0.4)" />
              <Section start="50" end="60" color="rgba(54, 177, 56, 0.4)" />
              <Section start="60" end="70" color="rgba(111, 202, 56, 0.4)" />
              <Section start="70" end="80" color="rgba(248, 233, 45, 0.4)" />
              <Section start="80" end="90" color="rgba(253, 142, 42, 0.4)" />
              <Section start="90" end="110" color="rgba(236, 45, 45, 0.4)" />
              <Section start="110" end="200" color="rgba(245, 109, 205, 0.4)" />
            </Radial>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Humidity
            <v-spacer />
            <v-icon>mdi-water-percent</v-icon>
          </v-card-title>
          <v-card-text>
            <Radial
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              knobStyle="SILVER"
              knobType="STANDARD_KNOB"
              labelFormat="STANDARD"
              lcdDecimals="0"
              lcdColor="STANDARD"
              ledVisible="false"
              minValue="0"
              minMeasuredValueVisible="false"
              maxValue="100"
              maxMeasuredValueVisible="false"
              niceScale="true"
              pointerColor="BLUE"
              pointerType="TYPE11"
              title="Humidity"
              thresholdVisible="false"
              trendVisible="true"
              unit="%"
              :trend="humidityTrend"
              :value="daviswx.hum"
            >
              <Area
                :start="daviswx.hum_min_last_24_hr"
                :end="daviswx.hum_max_last_24_hr"
                color="rgba(212,132,134,0.3)"
              />
              <Section start="0" end="15" color="rgba(25, 112, 210, 0.4)" />
              <Section start="15" end="25" color="rgba(9, 150, 224, 0.4)" />
              <Section start="25" end="32" color="rgba(2, 170, 209, 0.4)" />
              <Section start="32" end="40" color="rgba(0, 162, 145, 0.4)" />
              <Section start="40" end="50" color="rgba(0, 158, 122, 0.4)" />
              <Section start="50" end="60" color="rgba(54, 177, 56, 0.4)" />
              <Section start="60" end="70" color="rgba(111, 202, 56, 0.4)" />
              <Section start="70" end="80" color="rgba(248, 233, 45, 0.4)" />
              <Section start="80" end="90" color="rgba(253, 142, 42, 0.4)" />
              <Section start="90" end="100" color="rgba(236, 45, 45, 0.4)" />
            </Radial>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Direction
            <v-spacer />
            <v-icon>mdi-compass</v-icon>
          </v-card-title>
          <v-card-text>
            <Compass
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE1"
              frameDesign="TILTED_GRAY"
              pointerColor="RAITH"
              pointerType="TYPE2"
              degreeScale="true"
              rotateFace="true"
              :value="daviswx.wind_dir_last"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Speed
            <v-spacer />
            <v-icon>mdi-weather-windy</v-icon>
          </v-card-title>
          <v-card-text>
            <Radial
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              knobStyle="SILVER"
              knobType="STANDARD_KNOB"
              labelFormat="STANDARD"
              lcdDecimals="1"
              lcdColor="STANDARD"
              ledVisible="false"
              minValue="0"
              minMeasuredValueVisible="false"
              maxMeasuredValueVisible="true"
              niceScale="true"
              pointerColor="CYAN"
              pointerType="TYPE7"
              title="Wind Speed"
              thresholdVisible="false"
              trendVisible="false"
              unit="mph"
              :maxMeasuredValue="daviswx.wind_speed_max_last_24_hr"
              :value="daviswx.wind_speed_last"
              :maxValue="Math.max(10, daviswx.wind_speed_max_last_24_hr * 2)"
            >
              <Area
                start="0"
                :end="daviswx.wind_speed_avg_last_10_min"
                color="rgba(132,212,134,0.3)"
              />
              <Area
                :start="daviswx.wind_speed_avg_last_10_min"
                :end="daviswx.wind_speed_hi_last_10_min"
                color="rgba(212,132,134,0.3)"
              />
              <Section start="0" end="20" color="rgba(0, 158, 122, 0.4)" />
              <Section start="20" end="39" color="rgba(54, 177, 56, 0.4)" />
              <Section start="39" end="74" color="rgba(200, 85, 56, 0.4)" />
              <Section start="74" end="94" color="rgba(248, 0, 45, 0.4)" />
              <Section start="94" end="110" color="rgba(200, 0, 0, 0.4)" />
              <Section start="110" end="129" color="rgba(236, 45, 45, 0.4)" />
              <Section start="129" end="200" color="rgba(245, 109, 205, 0.4)" />
            </Radial>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Wind Rose
            <v-spacer />
            <v-icon>mdi-weather-windy-variant</v-icon>
          </v-card-title>
          <v-card-text>
            <WindRose
              style="display: block; position:relative; margin: auto; padding: 0px;"
              size="201"
              title="Wind Rose"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              odometerVisible="true"
              odometerDigits="4"
              :value="daviswx.wind_rose_last_1_hr"
              :odometerValue="daviswx.wind_run_today"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Barometer
            <v-spacer />
            <v-icon>mdi-gauge</v-icon>
          </v-card-title>
          <v-card-text>
            <Radial
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              fractionalScaleDecimals="1"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              knobStyle="SILVER"
              knobType="STANDARD_KNOB"
              labelNumberFormat="FRACTIONAL"
              labelFormat="STANDARD"
              lcdDecimals="2"
              lcdColor="STANDARD"
              ledVisible="false"
              maxValue="30.5"
              minValue="29.5"
              minMeasuredValueVisible="false"
              maxMeasuredValueVisible="false"
              niceScale="false"
              pointerColor="CYAN"
              pointerType="TYPE11"
              title="Barometer"
              thresholdVisible="false"
              tickLabelOrientation="HORIZONTAL"
              trendVisible="true"
              unit="inHg"
              :value="daviswx.bar_sea_level"
              :trend="barometricTrend"
            >
              <Area
                :start="daviswx.bar_sea_level_min_last_24_hr"
                :end="daviswx.bar_sea_level_max_last_24_hr"
                color="rgba(212,132,134,0.3)"
              />
            </Radial>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Daily Rainfall
            <v-spacer />
            <v-icon>mdi-weather-rainy</v-icon>
          </v-card-title>
          <v-card-text>
            <RadialBargraph
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              fractionalScaleDecimals="1"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              labelNumberFormat="FRACTIONAL"
              labelFormat="STANDARD"
              lcdDecimals="2"
              lcdColor="STANDARD"
              ledVisible="false"
              maxValue="4"
              minMeasuredValueVisible="false"
              maxMeasuredValueVisible="false"
              niceScale="false"
              title="Rainfall"
              thresholdVisible="false"
              trendVisible="true"
              unit="in"
              :value="daviswx.rainfall_daily / 100"
            >
              <Section start="0" end="0.5" color="rgba(25, 112, 210, 0.4)" />
              <Section start="0.5" end="1" color="rgba(9, 150, 224, 0.4)" />
              <Section start="1" end="1.5" color="rgba(2, 170, 209, 0.4)" />
              <Section start="1.5" end="2" color="rgba(0, 162, 145, 0.4)" />
              <Section start="2" end="2.5" color="rgba(0, 158, 122, 0.4)" />
              <Section start="2.5" end="4" color="rgba(54, 177, 56, 0.4)" />
              <Section start="4" end="5.5" color="rgba(111, 202, 56, 0.4)" />
              <Section start="5.5" end="6" color="rgba(248, 233, 45, 0.4)" />
              <Section start="6" end="6.5" color="rgba(253, 142, 42, 0.4)" />
              <Section start="6.5" end="8" color="rgba(236, 45, 45, 0.4)" />
              <Section start="8" end="100" color="rgba(245, 109, 205, 0.4)" />
            </RadialBargraph>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card>
          <v-card-title>
            Rainfall Rate
            <v-spacer />
            <v-icon>mdi-weather-pouring</v-icon>
          </v-card-title>
          <v-card-text>
            <RadialBargraph
              style="display: block; margin: auto; padding: 0px;"
              size="201"
              backgroundColor="BEIGE"
              foregroundType="TYPE4"
              frameDesign="TILTED_GRAY"
              fractionalScaleDecimals="1"
              fullScaleDeflectionTime="4"
              gaugeType="TYPE4"
              labelNumberFormat="FRACTIONAL"
              labelFormat="STANDARD"
              lcdDecimals="2"
              lcdColor="STANDARD"
              ledVisible="false"
              maxValue="4"
              minMeasuredValueVisible="false"
              maxMeasuredValueVisible="true"
              niceScale="false"
              title="Rainfall"
              thresholdVisible="false"
              trendVisible="true"
              unit="inHr"
              :value="daviswx.rain_rate_last / 100"
            >
              <Section start="0" end="0.5" color="rgba(25, 112, 210, 0.4)" />
              <Section start="0.5" end="1" color="rgba(9, 150, 224, 0.4)" />
              <Section start="1" end="1.5" color="rgba(2, 170, 209, 0.4)" />
              <Section start="1.5" end="2" color="rgba(0, 162, 145, 0.4)" />
              <Section start="2" end="2.5" color="rgba(0, 158, 122, 0.4)" />
              <Section start="2.5" end="4" color="rgba(54, 177, 56, 0.4)" />
              <Section start="4" end="5.5" color="rgba(111, 202, 56, 0.4)" />
              <Section start="5.5" end="6" color="rgba(248, 233, 45, 0.4)" />
              <Section start="6" end="6.5" color="rgba(253, 142, 42, 0.4)" />
              <Section start="6.5" end="8" color="rgba(236, 45, 45, 0.4)" />
              <Section start="8" end="100" color="rgba(245, 109, 205, 0.4)" />
            </RadialBargraph>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import {
  Area,
  Compass,
  Radial,
  RadialBargraph,
  Section,
} from "vue-steelseries";
import WindRose from "vue-windrose-graph";

export default {
  name: "Dashboard",
  components: {
    Area,
    Compass,
    Radial,
    RadialBargraph,
    Section,
    WindRose,
  },
  computed: {
    ...mapState(["daviswx", "darksky"]),
    temperatureTrend() {
      const temp = this.daviswx.temp;
      const avg = this.daviswx.temp_avg_last_15_min;
      if (temp > avg) return "UP";
      if (temp == avg) return "STEADY";
      if (temp < avg) return "DOWN";
      return "OFF";
    },
    humidityTrend() {
      const hum = this.daviswx.hum;
      const avg = this.daviswx.hum_avg_last_15_min;
      if (hum > avg) return "UP";
      if (hum == avg) return "STEADY";
      if (hum < avg) return "DOWN";
      return "OFF";
    },
    barometricTrend() {
      const trend = this.daviswx.bar_trend;
      if (trend > 0) return "UP";
      if (trend == 0) return "STEADY";
      if (trend < 0) return "DOWN";
      return "OFF";
    },
  },
};
</script>
