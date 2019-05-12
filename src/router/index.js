import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
