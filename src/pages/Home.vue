<template>
    <div id="app">
  <vue-particles
        color="#000"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#000"
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
        <cover name="Benjamin Rouquet"></cover>
        <skills></skills>
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
