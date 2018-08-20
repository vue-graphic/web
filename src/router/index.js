import Vue from 'vue'
import Router from 'vue-router'
import Flocking from '@/pages/Flocking'
import Fibonacci from '@/pages/Fibonacci'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flocking',
      component: Flocking
    },
    {
      path: '/fibonacci',
      name: 'fibonacci',
      component: Fibonacci
    }
  ]
})
