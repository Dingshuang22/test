import Vue from 'vue'
import Router from 'vue-router'
import { routesList } from './children'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Login'}
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {title: '登录'}
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/Layout.vue'),
      meta: {title: 'Layout'},
      children: routesList
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})
