import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/user',
    name: 'Conductor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conductor.vue')
  },

  {
    path: '/admin',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue')
  }
  ,

  {
    path: '/equipo',
    name: 'Equipo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipo.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
