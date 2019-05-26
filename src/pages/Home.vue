<template>
    <div id="app">
      <cover name="Benjamin Rouquet"></cover>

      <vue-particles
            color="#20364d"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#1b4f6d"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="1.5"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
          >
        </vue-particles>

        <skills></skills>
        <projects></projects>
        <about-me></about-me>
    </div>
</template>

<script>
  import Cover from './Cover'
  import Skills from './Skills'
  import Projects from './Projects'
  import AboutMe from './AboutMe'

  export default {
    components: {
      Cover,
      Skills,
      Projects,
      AboutMe,
    }
  }
</script>
