<template>
  <div class="cover">
    <div class="cover_container">
      <div class="cover__my-picture cover__my-picture--round">
                <div class="spin spinner"></div>
      </div>
      <div class="cover__identity">
        <vue-typed-js
          :strings="['<h2>Benjamin Rouquet</h2> <br> 24 ans <br> Développeur Web <br> Freelance']"
          :loop = false
          :typeSpeed = 1
          :showCursor = false
          @onComplete = newShowable()
        >
          <p class="typing"></p>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nextIsShowable: false
    }
  },
  methods: {
    newShowable: function () {
      this.nextIsShowable = true
    }
  }
}
</script>
