<template>
  <canvas ref="view"></canvas>
</template>

<script>
import {
  WindDirection,
  BackgroundColor,
  LcdColor,
  ColorDef,
  KnobType,
  KnobStyle,
  FrameDesign,
  PointerType,
  ForegroundType,
} from "steelseries";

export default {
  name: "WindDirection",
  props: {
    // 1-360 are used for directions
    // 0 is used as a special case to indicate 'calm'
    average: {
      default: undefined,
      required: false,
      type: Number,
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
      type: Boolean,
    },
    customLayer: {
      default: undefined,
      required: false,
    },
    degreeScale: {
      default: undefined,
      required: false,
      type: Boolean,
    },
    degreeScaleHalf: {
      default: undefined,
      required: false,
      type: Boolean,
    },
    digitalFont: {
      default: undefined,
      required: false,
      type: Boolean,
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
      type: Boolean,
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
      type: Boolean,
    },
    fullScaleDeflectionTime: {
      default: undefined,
      required: false,
      type: Number,
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
    // BEIGE, BLUE, ORANGE, RED, YELLOW, WHITE, GRAY, BLACK, GREEN, BLUE2, BLUE_BLACK,
    // BLUE_DARKBLUE, BLUE_GRAY, STANDARD, STANDARD_GREEN, BLUE_BLUE, RED_DARKRED, DARKBLUE,
    // LILA, BLACKRED, DARKGREEN, AMBER, LIGHTBLUE, SECTIONS
    lcdColor: {
      default: undefined,
      required: false,
      type: String,
    },
    lcdTitleStrings: {
      default: undefined,
      required: false,
      type: Array,
    },
    lcdVisible: {
      default: undefined,
      required: false,
      type: Boolean,
    },
    pointerColor: {
      default: undefined,
      required: false,
      type: String,
    },
    pointerColorAverage: {
      default: undefined,
      required: false,
      type: String,
    },
    // TYPE1 through TYPE16
    pointerTypeAverage: {
      default: undefined,
      required: false,
      type: String,
    },
    // TYPE1 through TYPE16
    pointerTypeLatest: {
      default: undefined,
      required: false,
      type: String,
    },
    pointSymbols: {
      default: undefined,
      required: false,
      type: Array,
    },
    pointSymbolsVisible: {
      default: undefined,
      required: false,
      type: Boolean,
    },
    roseVisible: {
      default: undefined,
      required: false,
      type: Boolean,
    },
    size: {
      default: undefined,
      required: false,
      type: [Number, String],
      validator: function (value) {
        return !Number.isNaN(value);
      },
    },
    titleString: {
      default: undefined,
      required: false,
      type: String,
    },
    useColorLabels: {
      required: false,
      type: Boolean,
    },
    // 1-360 are used for directions
    // 0 is used as a special case to indicate 'calm'
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
    draw: function () {
      this.gauge = new WindDirection(this.$refs["view"], {
        backgroundColor: BackgroundColor[this.backgroundColor],
        backgroundVisible: this.backgroundVisible,
        customLayer: this.customLayer,
        degreeScale: this.degreeScale,
        degreeScaleHalf: this.degreeScaleHalf,
        digitalFont: this.digitalFont,
        foregroundType: ForegroundType[this.foregroundType],
        foregroundVisible: this.foregroundVisible,
        frameDesign: FrameDesign[this.frameDesign],
        frameVisible: this.frameVisible,
        fullScaleDeflectionTime: this.fullScaleDeflectionTime,
        knobStyle: KnobStyle[this.knobStyle],
        knobType: KnobType[this.knobType],
        lcdColor: LcdColor[this.lcdColor],
        lcdTitleStrings: this.lcdTitleStrings,
        lcdVisible: this.lcdVisible,
        pointerColor: ColorDef[this.pointerColor],
        pointerColorAverage: ColorDef[this.pointerColorAverage],
        pointerTypeAverage: PointerType[this.pointerTypeAverage],
        pointerTypeLatest: PointerType[this.pointerTypeLatest],
        pointSymbols: this.pointSymbols,
        pointSymbolsVisible: this.pointSymbolsVisible,
        roseVisible: this.roseVisible,
        size: Number(this.size),
        titleString: this.titleString,
        useColorLabels: this.useColorLabels,
      });
      this.value && this.gauge.setValueLatest(this.value);
      this.average && this.gauge.setValueAverage(this.average);
    },
  },
  mounted() {
    this.draw();
  },
  watch: {
    average(newValue) {
      this.gauge && this.gauge.setValueAnimatedAverage(newValue);
    },
    backgroundColor(newValue) {
      this.gauge && this.gauge.setBackgroundColor(BackgroundColor[newValue]);
    },
    foregroundType(newValue) {
      this.gauge && this.gauge.setForegroundType(ForegroundType[newValue]);
    },
    frameDesign(newValue) {
      this.gauge && this.gauge.setFrameDesign(FrameDesign[newValue]);
    },
    lcdColor(newValue) {
      this.gauge && this.gauge.setLcdColor(LcdColor[newValue]);
    },
    lcdTitleStrings(newValue) {
      this.gauge && this.gauge.setLcdTitleStrings(newValue);
    },
    pointerColor(newValue) {
      this.gauge && this.gauge.setPointerColor(ColorDef[newValue]);
    },
    pointerColorAverage(newValue) {
      this.gauge && this.gauge.setPointerColorAverage(ColorDef[newValue]);
    },
    pointSymbols(newValue) {
      this.gauge && this.gauge.setPointSymbols(newValue);
    },
    pointerType(newValue) {
      this.gauge && this.gauge.setPointerType(PointerType[newValue]);
    },
    pointerTypeAverage(newValue) {
      this.gauge && this.gauge.setPointerTypeAverage(PointerType[newValue]);
    },
    size() {
      this.draw();
    },
    value(newValue) {
      this.gauge && this.gauge.setValueAnimatedLatest(newValue);
    },
  },
};
</script>
