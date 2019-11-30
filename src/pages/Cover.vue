<template>
  <div class="header">
    <div class="header__my-picture header__my-picture--round"></div>
    <div class="header__identity">
      <vue-typed-js
        :strings="[name, '24 ans', 'Développeur Web']"
        :loop="true"
        :typeSpeed= 65
      >
        <p class="typing"></p>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: ''
    }
  },
  props: {
    name: String
  }
}
</script>
