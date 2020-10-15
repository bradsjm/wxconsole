<template>
  <canvas ref="view"></canvas>
</template>

<script>
import {
  Compass,
  BackgroundColor,
  ColorDef,
  KnobType,
  KnobStyle,
  FrameDesign,
  PointerType,
  ForegroundType,
} from "steelseries";

export default {
  name: "Compass",
  props: {
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
    rotateFace: {
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
      this.gauge = new Compass(this.$refs["view"], {
        backgroundColor: BackgroundColor[this.backgroundColor],
        backgroundVisible: this.backgroundVisible,
        customLayer: this.customLayer,
        degreeScale: this.degreeScale,
        foregroundType: ForegroundType[this.foregroundType],
        foregroundVisible: this.foregroundVisible,
        frameDesign: FrameDesign[this.frameDesign],
        frameVisible: this.frameVisible,
        knobStyle: KnobStyle[this.knobStyle],
        knobType: KnobType[this.knobType],
        pointerColor: ColorDef[this.pointerColor],
        pointerType: PointerType[this.pointerTypeLatest],
        pointSymbols: this.pointSymbols,
        pointSymbolsVisible: this.pointSymbolsVisible,
        roseVisible: this.roseVisible,
        rotateFace: this.rotateFace,
        size: Number(this.size),
      });
      this.value && this.gauge.setValue(this.value);
    },
  },
  mounted() {
    this.draw();
  },
  watch: {
    backgroundColor(newValue) {
      this.gauge && this.gauge.setBackgroundColor(BackgroundColor[newValue]);
    },
    foregroundType(newValue) {
      this.gauge && this.gauge.setForegroundType(ForegroundType[newValue]);
    },
    frameDesign(newValue) {
      this.gauge && this.gauge.setFrameDesign(FrameDesign[newValue]);
    },
    pointSymbols(newValue) {
      this.gauge && this.gauge.setPointSymbols(newValue);
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
    value(newValue) {
      this.gauge && this.gauge.setValueAnimated(newValue);
    },
  },
};
</script>
