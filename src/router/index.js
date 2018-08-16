import Vue from 'vue'
import Router from 'vue-router'
import Flocking from '@/pages/Flocking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flocking',
      component: Flocking
    }
  ]
})
