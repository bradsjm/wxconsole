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
      default: 60
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
        responsive: true,
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
            frameRate: 15,
            duration: this.seconds * 1000,
            delay: 2500
          }
        }
      }
    };
  },
  watch:
  {
    value(newValue){
      this.data.datasets[0].data.push({
        x: Date.now(),
        y: newValue
      })
    }
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
