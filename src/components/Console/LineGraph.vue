<script>
import { Line } from "vue-chartjs";
import "chartjs-plugin-streaming";

export default {
  extends: Line,
  name: "LineGraph",
  props: {
    value: Number,
    seconds: Number,
    label: String
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
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [
            {
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
  created() {
    // Configure real time data push
    let vm = this;
    this.options.scales.xAxes[0].realtime =
    {
      duration: this.seconds * 1000 || 10000,
      delay: 3000,
      refresh: 2500,
      onRefresh: function(chart) {
        chart.data.datasets[0].data.push({
            x: Date.now(),
            y: vm.value
        })
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>
