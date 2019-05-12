import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

        
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueParticles)
