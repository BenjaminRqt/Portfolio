/* eslint-disable */

import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueParticles)
Vue.use(BootstrapVue)
Vue.use(VueTypedJs)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
