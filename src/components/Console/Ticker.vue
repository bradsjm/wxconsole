<template>
  <div
    class="ticker"
    :style="{ top: top, left: left }"
  >
    <li
      v-for="m in display"
      :key="m"
    >
      {{ m }}
    </li>
  </div>
</template>

<script>
export default {
  name: "Ticker",
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      display: this.messages.slice(0, 2)
    }
  },
  timers: {
    scroll: { time: 4000, autostart: true, repeat: true }
  },
  methods: {
    scroll() {
      if (this.messages) {
        this.messages.push(this.messages.shift());
        this.display = this.messages.slice(0, 2)
      }
    }
  }
}
</script>

<style>
.ticker {
  height: 20px;
  width: 380px;
  overflow: hidden;
  position: absolute;
  list-style: none;
}

.ticker li {
  font-family: Digi, Arial;
  color: #053D6C;
  font-weight: 400;
  font-size: 20px;
  text-shadow: none;
  height: 23px;
}

</style>
