<template>
  <div id="app">
    <area-chart
      v-for="chart in charts"
      :key="chart.title"
      :title="chart.title"
      :data="chart.data"
      :colors="chart.colors"
    />
  </div>
</template>

<script>
import AreaChart from './components/AreaChart'
import { generateHistogram } from '@/utils'

export default {
  name: 'App',
  components: {
    AreaChart
  },
  data: () => ({
    charts: [
      {
        title: 'Individuals',
        data: generateHistogram(),
        colors: [
          {
            color: '#4effcf',
            stop: 0
          },
          {
            color: '#08a4bc00',
            stop: 1
          }
        ]
      },
      {
        title: 'Companies',
        data: generateHistogram(),
        colors: [
          {
            color: '#ff56ee',
            stop: 0
          },
          {
            color: '#3e57c200',
            stop: 1
          }
        ]
      }
    ]
  })
}
</script>

<style>
@import './css/colors.css';

html {
  font-family: 'Montserrat';
  color: var(--primary-text-color);
  background-color: var(--main-background-color);
}
body {
  margin: 0;
  background-color: var(--sub-background-color);
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
}
</style>
