<template>
  <div class="skills">
    <h2 class="title">Compétences</h2>
    <div class="radar-chart-js">
      <div v-for="(chart, index) in charts" :key="index" class="chart">
        <radar :datacollection="chart.datacollection" :options="chart.options"></radar>
      </div>
    </div>
  </div>
</template>

<script>
import Radar from '../components/radar'

export default {
  components: {
    Radar
  },
  data: function () {
    return {
      charts: [
        {
          datacollection: {
            labels: ['Symfony', 'Php', 'Html', 'JavaScript', 'Twig'],
            datasets: [
              {
                label: '',
                backgroundColor: [
                  '#3e95cd',
                  '#8e5ea2',
                  '#3cba9f',
                  '#e8c3b9',
                  '#c45850'
                ],
                data: [2, 1.5, 1.2, 1.9, 1.1]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Compétence Back-end',
              fontSize: 20
            },
            legend: {
              display: false
            }
          }
        },
        {
          datacollection: {
            labels: ['Symfony', 'Php', 'Html', 'JavaScript', 'Twig'],
            datasets: [
              {
                label: '',
                backgroundColor: [
                  '#3e95cd',
                  '#8e5ea2',
                  '#3cba9f',
                  '#e8c3b9',
                  '#c45850'
                ],
                data: [2, 1.5, 1.2, 1.9, 1.1]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Compétence Back-end',
              fontSize: 20
            },
            legend: {
              display: false
            }
          }
        }
      ]
    }
  }
}
</script>
