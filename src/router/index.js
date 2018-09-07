import Vue from 'vue'
import Router from 'vue-router'
import Flocking from '@/pages/Flocking'
import Fibonacci from '@/pages/Fibonacci'
import Beehive from '@/pages/Beehive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flocking',
      component: Flocking
    },
    {
      path: '/bee',
      name: 'bee',
      component: Beehive
    },
    {
      path: '/fibonacci',
      name: 'fibonacci',
      component: Fibonacci
    }
  ]
})
