<template>
  <div style="top: 86px; left: 80px; width: 100px; height: 100px; position: absolute;">
    <canvas ref="compass" width="100px" height="100px"></canvas>
  </div>
</template>

<script>
import VueMixinTween from 'vue-mixin-tween';

export default {
  name: "WindDirection",
  props: {
    value: Number,
    outline: Boolean
  },
  data() {
    return {
      ctx: null,
      centerLeft: null,
      centerTop: null
    }
  },
  mixins: [
    VueMixinTween('value', 2500)
  ],
  mounted () {
    const canvas = this.$refs['compass'];
    this.ctx = canvas.getContext('2d')
    this.ctx.width = canvas.width;
    this.ctx.height = canvas.height;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2;
    this.centerTop = (canvas.height / 2);
    this.centerLeft = (canvas.width / 2);
    if (this.centerLeft < maxRadius)
      this.centerLeft = maxRadius;
    else if (this.centerLeft > canvas.width - maxRadius)
      this.centerLeft = this.ctx.width - maxRadius;
    this.ctx.fillStyle = "rgb(5,61,108)";
  },
  watch: {
    valueTween: function (newValue, oldValue) {
      if (!this.ctx || newValue == oldValue) return;
      const wdir = Math.PI * (-0.5 + newValue * 2 / 360);
      this.ctx.save();
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
      this.ctx.translate(this.centerLeft, this.centerTop);
      this.ctx.rotate(wdir);
      this.ctx.beginPath();
      this.ctx.moveTo(34, 0);
      this.ctx.lineTo(49, -5);
      this.ctx.bezierCurveTo(45, -2, 45, 2, 49, 5);
      this.ctx.lineTo(34, 0);
      if (this.outline) this.ctx.stroke(); else this.ctx.fill();
      this.ctx.restore();
    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.label {
  font-family: Arial;
  font-size: 11px;
  font-weight: bold;
  text-shadow: none;
  color: #053D6C;
}

</style>
