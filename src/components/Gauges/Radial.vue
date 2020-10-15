<template>
  <canvas ref="view"></canvas>
</template>

<script>
import {
  Radial,
  BackgroundColor,
  LcdColor,
  ColorDef,
  LedColor,
  GaugeType,
  KnobType,
  KnobStyle,
  FrameDesign,
  PointerType,
  ForegroundType,
  LabelNumberFormat,
  TickLabelOrientation,
} from "steelseries";

function toBoolean(value) {
    if (undefined === value) return value;
    switch(value.toString().toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(value);
    }
}

export default {
  name: "Radial",
  props: {
    alarmSound: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    // DARK_GRAY, SATIN_GRAY, LIGHT_GRAY, WHITE, BLACK, BEIGE, BROWN, RED, GREEN, BLUE, TURNED,
    // ANTHRACITE, MUD, PUNCHED_SHEET, CARBON, STAINLESS, BRUSHED_METAL, BRUSHED_STAINLESS
    backgroundColor: {
      default: undefined,
      required: false,
      type: String,
    },
    backgroundVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    customLayer: {
      default: undefined,
      required: false,
    },
    digitalFont: {
      default: undefined,
      required: false,
      type: String,
    },
    // TYPE1 to TYPE5
    foregroundType: {
      default: undefined,
      required: false,
      type: String,
    },
    foregroundVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    fractionalScaleDecimals: {
      default: undefined,
      required: false,
      type: Number,
    },
    // BLACK_METAL, METAL, SHINY_METAL, BRASS, STEEL, CHROME, GOLD, ANTHRACITE, TILTED_GRAY,
    // TILTED_BLACK, GLOSSY_METAL
    frameDesign: {
      default: undefined,
      required: false,
      type: String,
    },
    frameVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    fullScaleDeflectionTime: {
      default: undefined,
      required: false,
      type: Number,
    },
    // TYPE1 through TYPE5
    gaugeType: {
      default: undefined,
      required: false,
      type: String,
    },
    // BLACK, BRASS, SILVER
    knobStyle: {
      default: undefined,
      required: false,
      type: String,
    },
    // STANDARD_KNOB, METAL_KNOB
    knobType: {
      default: undefined,
      required: false,
      type: String,
    },
    labelNumberFormat: {
      default: undefined,
      required: false,
      type: String,
    },
    lcdColor: {
      default: undefined,
      required: false,
      type: String,
    },
    lcdDecimals: {
      default: undefined,
      required: false,
      type: Number,
    },
    lcdVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    ledColor: {
      default: undefined,
      required: false,
      type: String,
    },
    ledVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    maxMeasuredValueVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    maxValue: {
      default: undefined,
      required: false,
      type: Number,
    },
    minMeasuredValueVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    minValue: {
      default: undefined,
      required: false,
      type: Number,
    },
    niceScale: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    odometerParams: {
      default: undefined,
      required: false,
      type: Object,
    },
    odometerUseValue: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    odometerValue: {
      default: undefined,
      required: false,
      type: Number,
    },
    playAlarm: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    pointerColor: {
      default: undefined,
      required: false,
      type: String,
    },
    // TYPE1 through TYPE16
    pointerType: {
      default: undefined,
      required: false,
      type: String,
    },
    size: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      },
    },
    thresHold: {
      default: undefined,
      required: false,
      type: Number,
    },
    thresholdRising: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    thresholdVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    tickLabelOrientation: {
      default: undefined,
      required: false,
      type: String,
    },
    titleString: {
      default: undefined,
      required: false,
      type: String,
    },
    trendColors: {
      default: undefined,
      required: false,
      type: String,
    },
    trendVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    unitString: {
      default: undefined,
      required: false,
      type: String,
    },
    useOdometer: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    userLedColor: {
      default: undefined,
      required: false,
      type: String,
    },
    userLedVisible: {
      default: undefined,
      required: false,
      type: [Boolean,String],
    },
    value: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      gauge: null,
    };
  },
  methods: {
    draw() {
      this.gauge = new Radial(this.$refs["view"], {
        alarmSound: this.alarmSound,
        backgroundColor: this.backgroundColor,
        backgroundVisible: toBoolean(this.backgroundVisible),
        customLayer: this.customLayer,
        digitalFont: this.digitalFont,
        foregroundType: ForegroundType[this.foregroundType],
        foregroundVisible: toBoolean(this.foregroundVisible),
        fractionalScaleDecimals: this.fractionalScaleDecimals,
        frameDesign: FrameDesign[this.frameDesign],
        frameVisible: toBoolean(this.frameVisible),
        fullScaleDeflectionTime: this.fullScaleDeflectionTime,
        gaugeType: GaugeType[this.gaugeType],
        knobStyle: KnobStyle[this.knobStyle],
        knobType: KnobType[this.knobType],
        labelNumberFormat: LabelNumberFormat[this.labelNumberFormat],
        lcdColor: LcdColor[this.lcdColor],
        lcdDecimals: this.lcdDecimals,
        lcdVisible: toBoolean(this.lcdVisible),
        ledColor: LedColor[this.ledColor],
        ledVisible: toBoolean(this.ledVisible),
        maxMeasuredValueVisible: this.maxMeasuredValueVisible,
        maxValue: this.maxValue,
        minMeasuredValueVisible: this.minMeasuredValueVisible,
        minValue: this.minValue,
        niceScale: this.niceScale,
        odometerParams: this.odometerParams,
        odometerUseValue: this.odometerUseValue,
        playAlarm: this.playAlarm,
        pointerColor: ColorDef[this.pointerColor],
        pointerType: PointerType[this.pointerType],
        size: Number(this.size),
        threshold: this.threshold,
        thresholdRising: this.thresholdRising,
        thresholdVisible: toBoolean(this.thresholdVisible),
        tickLabelOrientation: TickLabelOrientation[this.tickLabelOrientation],
        titleString: this.titleString,
        trendColors: LedColor[this.trendColors],
        trendVisible: toBoolean(this.trendVisible),
        unitString: this.unitString,
        useOdometer: toBoolean(this.useOdometer),
        userLedColor: LedColor[this.userLedColor],
        userLedVisible: toBoolean(this.userLedVisible),
      });
      this.value && this.gauge.setValue(this.value);
      this.odometerValue && this.gauge.setOdoValue(this.odometerValue);
    },
  },
  mounted() {
    this.draw();
  },
  watch: {
    backgroundColor(newValue) {
      this.gauge && this.gauge.setBackgroundColor(BackgroundColor[newValue]);
    },
    fractionalScaleDecimals(newValue) {
      this.gauge && this.gauge.setFractionalScaleDecimals(newValue);
    },
    frameDesign(newValue) {
      this.gauge && this.gauge.setFrameDesign(FrameDesign[newValue]);
    },
    foregroundType(newValue) {
      this.gauge && this.gauge.setForegroundType(ForegroundType[newValue]);
    },
    labelNumberFormat(newValue) {
      this.gauge &&
        this.gauge.setLabelNumberFormat(LabelNumberFormat[newValue]);
    },
    lcdDecimals(newValue) {
      this.gauge && this.gauge.setLcdDecimals(newValue);
    },
    ledColor(newValue) {
      this.gauge && this.gauge.setLedColor(LedColor[newValue]);
    },
    maxMeasuredValue(newValue) {
      this.gauge && this.gauge.setMaxMeasuredValue(newValue);
    },
    maxMeasuredValueVisible(newValue) {
      this.gauge && this.gauge.setMaxMeasuredValueVisible(newValue);
    },
    maxValue(newValue) {
      this.gauge && this.gauge.setMaxValue(newValue);
    },
    minMeasuredValue(newValue) {
      this.gauge && this.gauge.setMinMeasuredValue(newValue);
    },
    minMeasuredValueVisible(newValue) {
      this.gauge && this.gauge.setMinMeasuredValueVisible(newValue);
    },
    minValue(newValue) {
      this.gauge && this.gauge.setMinValue(newValue);
    },
    odometerValue(newValue) {
      this.gauge && this.gauge.setOdoValue(newValue);
    },
    pointerColor(newValue) {
      this.gauge && this.gauge.setPointerColor(ColorDef[newValue]);
    },
    pointerType(newValue) {
      this.gauge && this.gauge.setPointerType(PointerType[newValue]);
    },
    size() {
      this.draw();
    },
    threshold(newValue) {
      this.gauge && this.gauge.setThreshold(newValue);
    },
    thresholdRising(newValue) {
      this.gauge && this.gauge.setThresholdRising(newValue);
    },
    thresholdVisible(newValue) {
      this.gauge && this.gauge.setThresholdVisible(newValue);
    },
    titleString(newValue) {
      this.gauge && this.gauge.setTitleString(newValue);
    },
    trendVisible(newValue) {
      this.gauge && this.gauge.setTrendVisible(toBoolean(newValue));
    },
    unitString(newValue) {
      this.gauge && this.gauge.setUnitString(newValue);
    },
    userLedColor(newValue) {
      this.gauge && this.gauge.setUserLedColor(LedColor[newValue]);
    },
    userLedVisible(newValue) {
      this.gauge && this.gauge.setUserLedVisible(toBoolean(newValue));
    },
    value(newValue) {
      this.gauge && this.gauge.setValueAnimated(newValue);
    },
  },
};
</script>
