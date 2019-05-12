import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
