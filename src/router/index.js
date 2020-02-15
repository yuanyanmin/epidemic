import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '../pages/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myIndex',
      component: myIndex
    }
  ]
})