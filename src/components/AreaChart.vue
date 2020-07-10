<template>
  <div class="area-chart">
    <h2 class="title">{{ title }}</h2>
    <line-chart ref="chart" :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import LineChart from './LineChart'

export default {
  name: 'AreaChart',
  components: {
    LineChart
  },
  props: ['title', 'data', 'colors'],
  data: () => ({
    gradientFill: null
  }),
  computed: {
    chartData() {
      return {
        labels: this.data.map(item => item.date),
        datasets: [
          {
            data: this.data.map(item => item.value),
            pointRadius: 0,
            backgroundColor: this.gradientFill
          }
        ]
      }
    },
    chartOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              gridLines: {
                display: false,
                drawBorder: false
              },
              time: {
                unit: 'month',
                unitStepSize: 1,
                tooltipFormat: 'MMM D',
                displayFormats: {
                  month: 'MMM\'D'
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontFamily: 'Montserrat',
                color: '#849fb4',
                beginAtZero: true,
                maxTicksLimit: 6,
                stepSize: 3,
                suggestedMax: 15
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    const canvasElement = document.getElementsByTagName('canvas')[0]
    if (!canvasElement) {
      return null
    }
    const ctx = canvasElement.getContext('2d')
    this.gradientFill = ctx.createLinearGradient(
      0,
      0,
      0,
      ctx.canvas.clientHeight
    )
    this.colors.forEach(({ color, stop }) =>
      this.gradientFill.addColorStop(stop, color)
    )
  }
}
</script>

<style>
.area-chart {
  width: 100%;
  max-width: 1024px;
  margin: 20px auto;
  padding-top: 20px;
  text-align: center;
  color: var(--secondary-text-color);
  font-weight: bold;
  background-color: #0d101d;
}
</style>
