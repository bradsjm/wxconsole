<script>
import { Line } from "vue-chartjs";
import "chartjs-plugin-streaming";

export default {
  extends: Line,
  name: "LineGraph",
  props: {
    value: Number
  },
  data() {
    return {
      data: {
        datasets: [
          {
            data: [],
            borderColor: "rgb(5,61,108)",
            borderWidth: 2
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          point: {
            backgroundColor: "black",
            radius: 1
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
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: false
        }
      }
    };
  },
  created() {
    // Configure real time data push
    let vm = this;
    this.options.scales.xAxes[0].realtime =
    {
      duration: 10000,
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
