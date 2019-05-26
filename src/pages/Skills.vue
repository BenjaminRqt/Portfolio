<template>
    <div class="skills">
        <div class="skills__title">
            Compétences
        </div>
        <div class="radar-chart-js">
            <div class="chart">
                <radar 
                    :datacollection="datacollectionBackEndSkill"
                    :options="optionsBackEnd"
                ></radar>
            </div>

            <div class="chart">
                <radar 
                    :datacollection="datacollectionFrontEndSkill"
                    :options="optionsfrontEnd"
                ></radar>
            </div>
        </div>
    </div>
</template>

<script>

import Radar from './radar'

  export default {
    components: {
      Radar
    },
    data: () => ({
        datacollectionBackEndSkill: {
            labels: ['Symfony', 'Php', 'Html', 'JavaScript', 'Twig'],
            datasets: [
                {
                    label: '',
                    backgroundColor: 'rgba(68, 146, 184, 0.7)',
                    data: [0.8,0.8,0.8,0.8,0.8]
                }
            ]
        },
        datacollectionFrontEndSkill: {
            labels: ['VueJS', 'Javascript', 'Html', 'JavaScript', 'Twig'],
            datasets: [
                {
                    label: '',
                    backgroundColor: 'rgba(68, 146, 184, 0.7)',
                    data: [0.8,0.8,0.8,0.8,0.8]
                }
            ]
        },
        optionsBackEnd: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Compétence Back-end',
                fontSize: 20
            },
            legend: {
                display: false
            },
        },
        optionsfrontEnd: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Compétence Front-end',
                fontSize: 20
            },
            legend: {
                display: false,
            },
        }
    })
  }

</script>