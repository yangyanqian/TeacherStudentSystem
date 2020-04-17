import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'normal',
      component: () => import('@/components/login')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/roleStudent',
      name: 'roleStudent',
      component: () => import('@/components/roleStudent')
    },
    {
      path: '/roleTeacher',
      name: 'roleTeacher',
      component: () => import('@/components/roleTeacher')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('@/showAe')
    }
  ]
})
