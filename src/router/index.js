import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'HomeLogin',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeLogin.vue')
      },
      ,

      {
        path: 'equipo',
        name: 'Equipo',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeEquipo.vue')
      }
    ]
  },

  {
    path: '/conductor',
    name: 'Conductor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conductor.vue'),
    redirect: '/conductor/formpre',
    children: [
      {
        path: 'formpre',
        name: 'FormPre',
        component: () => import(/* webpackChunkName: "about" */ '../views/FormPre.vue')
      },
      ,

      {
        path: 'listapre',
        name: 'ListaPre',
        component: () => import(/* webpackChunkName: "about" */ '../views/ListaPre.vue')
      }
    ]
  },

  {
    path: '/administrador',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue'),
    redirect: '/administrador/listapre',
    children: [
      {
        path: 'listapre',
        name: 'ListaPreAd',
        component: () => import(/* webpackChunkName: "about" */ '../views/ListaPre.vue')
      },
      {
        path: 'adminvehiculo',
        name: 'AdminVehiculo',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdminVehiculo.vue')
      },
      ,
      {
        path: 'adminconductor',
        name: 'AdminConductor',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdminConductor.vue')
      }
      ,
      {
        path: 'adminadmin',
        name: 'AdminAdmin',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdminAdmin.vue')
      }
    ]
  },
  {
    path: '/superadmin',
    name: 'SuperAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuperAdmin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
