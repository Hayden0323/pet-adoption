import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

export default new VueRouter({
  model: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
})
