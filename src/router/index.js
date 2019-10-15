import Vue from 'vue'
import Router from 'vue-router'
import D_Login from '@/components/D_Login'
import D_ChrtRoom from '@/components/D_ChrtRoom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'D_Login',
      component: D_Login
    },
    {
        path: '/chrt',
        name: 'D_ChrtRoom',
        component: D_ChrtRoom
    }
  ]
})
