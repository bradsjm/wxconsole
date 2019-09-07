<template>
  <div :style="{ top: top, left: left }">
    <!-- New Moon -->
    <svg
      v-if="icon == 0"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998
        c0-6.627,5.372-11.999,11.999-11.999c6.626,0,11.998,5.372,11.998,11.999C61.998,56.626,56.626,61.998,50,61.998z"
      />
    </svg>
    <!-- waxing-crescent -->
    <svg
      v-if="icon == 1"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.999c6.627,0,11.999-5.373,11.999-11.998c0-6.627-5.372-12-11.999-12
        c-6.626,0-11.998,5.373-11.998,12C38.002,56.626,43.374,61.999,50,61.999z M48.001,42.263c0.64-0.164,1.308-0.262,1.999-0.262
        c4.418,0,7.999,3.582,7.999,8c0,4.416-3.581,7.998-7.999,7.998c-0.691,0-1.359-0.098-1.999-0.262C51.449,56.849,54,53.726,54,50.001
        C54,46.274,51.449,43.153,48.001,42.263z"
      />
    </svg>
    <!-- First Quarter -->
    <svg
      v-if="icon == 2"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c-6.627,0-11.998-5.372-11.998-11.998
        c0-6.627,5.371-11.999,11.998-11.999S61.999,43.373,61.999,50C61.999,56.626,56.627,61.998,50,61.998z M50,57.999
        c4.418,0,7.999-3.582,7.999-7.999c0-4.418-3.581-7.999-7.999-7.999V57.999z"
      />
    </svg>
    <!-- Waxing Gibbous -->
    <svg
      v-if="icon == 3"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c-6.627,0-11.998-5.372-11.998-11.999
        c0-6.626,5.371-11.998,11.998-11.998s11.998,5.372,11.998,11.998C61.998,56.626,56.627,61.998,50,61.998z M50,42.001
        c-2.209,0-4,3.581-4,7.998c0,4.418,1.791,7.999,4,7.999c4.418,0,7.999-3.581,7.999-7.999C57.999,45.582,54.418,42.001,50,42.001z"
      />
    </svg>
    <!-- Full Moon -->
    <svg
      v-if="icon == 4"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c-6.627,0-12-5.372-12-11.999c0-6.626,5.373-11.998,12-11.998
        s11.998,5.372,11.998,11.998C61.998,56.626,56.627,61.998,50,61.998z M50,42.001c-4.418,0-8,3.581-8,7.998
        c0,4.418,3.582,7.999,8,7.999s7.998-3.581,7.998-7.999C57.998,45.582,54.418,42.001,50,42.001z"
      />
    </svg>
    <!-- Waning Gibbous -->
    <svg
      v-if="icon == 5"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c6.625,0,11.998-5.371,11.998-11.998S56.625,38.001,50,38.001
        c-6.627,0-12,5.372-12,11.999S43.373,61.998,50,61.998z M50,42.002c2.209,0,3.998,3.58,3.998,7.998S52.209,57.998,50,57.998
        c-4.418,0-8-3.58-8-7.998S45.582,42.002,50,42.002z"
      />
    </svg>
    <!-- Last Quarter -->
    <svg
      v-if="icon == 6"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c6.625,0,11.998-5.371,11.998-11.999
        c0-6.626-5.373-11.998-11.998-11.998c-6.627,0-12,5.372-12,11.998C38,56.627,43.373,61.998,50,61.998z M50,57.998
        c-4.418,0-8-3.58-8-7.999c0-4.417,3.582-7.998,8-7.998V57.998z"
      />
    </svg>
    <!-- Waning Crescent -->
    <svg
      v-if="icon == 7"
      width="100"
      height="100"
      viewBox="35 35 90 90"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#053d6c"
        d="M50,61.998c-6.626,0-11.999-5.371-11.999-11.998S43.374,38.001,50,38.001
        c6.627,0,11.999,5.372,11.999,11.999S56.627,61.998,50,61.998z M52,42.264c-0.641-0.166-1.308-0.262-2-0.262
        c-4.417,0-7.999,3.58-7.999,7.998s3.582,7.998,7.999,7.998c0.692,0,1.359-0.096,2-0.262c-3.448-0.889-5.999-4.01-5.999-7.736
        S48.552,43.152,52,42.264z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "MoonIcon",
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    ts: {
      type: Number,
      required: true
    },
  },
  computed: {
    icon: function() {
      let date = new Date(this.ts);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      if (month < 3) {
        year--;
        month += 12;
      }
      ++month;
      var jd = (365.25 * year) + (30.6 * month) + day - 694039.09; // jd is total days elapsed
      jd /= 29.5305882; // divide by the moon cycle
      var b = parseInt(jd); // int(jd) -> b, take integer part of jd
      jd -= b; // subtract integer part to leave fractional part of original jd
      b = Math.round(jd * 8); // scale fraction from 0-8 and round
      if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
      return b;
    }
  }
}
</script>