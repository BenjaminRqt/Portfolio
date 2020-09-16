<template>
    <div id="app">
      <cover></cover>

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

      <career></career>
    </div>
</template>

<script>

import Cover from './Cover'

export default {
  components: {
    Cover
  }
}
</script>
