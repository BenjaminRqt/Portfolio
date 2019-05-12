<template>
    <div id="app">
      <cover name="Benjamin Rouquet"></cover>

      <vue-particles
            color="#20364d"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#1b4f6d"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
          >
        </vue-particles>
    </div>
</template>

<script>
  import Cover from '../components/Cover'
  import Skills from '../components/Skills'

  export default {
    components: {
      Cover,
      Skills
    }
  }
</script>
