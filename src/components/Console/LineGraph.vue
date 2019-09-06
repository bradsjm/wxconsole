<script>
import { Line } from "vue-chartjs";
import "chartjs-plugin-streaming";

export default {
  extends: Line,
  name: "LineGraph",
  props: {
    value: {
      type: Number,
      required: true
    },
    seconds: {
      type: Number,
      default: 10000
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data: {
        datasets: [
          {
            data: [],
            borderColor: "rgb(5,61,108)",
            borderWidth: 2,
            spanGaps: true,
            label: this.label
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          point: {
            borderColor: "black",
            radius: 0,
            hitRadius: 3
          }
        },
        layout: {
          padding: {
            top: 3,
            right: 3,
            bottom: 3
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: "realtime",
              time: {
                tooltipFormat: 'LTS'
              },
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ]
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          displayColors: false,
          titleFontSize: 10,
          bodyFontSize: 10
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        plugins: {
          streaming: {
            frameRate: 15
          }
        }
      }
    };
  },
  watch:
  {
    value: function(oldValue, newValue){
      this.data.datasets[0].data.push({
        x: Date.now(),
        y: newValue
      })
    }
  },
  created() {
    // Configure real time data push
    //let vm = this;
    this.options.scales.xAxes[0].realtime =
    {
      duration: this.seconds * 1000 || 10000,
      delay: 3000,
      // refresh: 2500,
      // onRefresh: function(chart) {
      //   chart.data.datasets[0].data.push({
      //       x: Date.now(),
      //       y: vm.value
      //   })
      //}
    }
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
