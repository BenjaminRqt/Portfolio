import Vue from 'vue'
import App from './App'
import router from './router'
import VueThreejs from 'vue-threejs'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueThreejs)
