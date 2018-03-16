import Router from 'vue-router'
import home from '@/components/home'
import home1 from '@/components/home/home-1'
import home2 from '@/components/home/home-2'
import all from '@/components/all'
import login from '@/components/login'
import Set from '@/components/login/set'
import Register from '@/components/login/register'


import test from '@/components/test'

Vue.use(Router)

module.exports = new Router({
  routes: [{path: '/test', component: test},
    {path: '/', component: home,
      children:[{
        path:'/',component:home1},
        {path:'/home2',component:home2}
      ]
    },
    {path: '/all', component: all},
    {path: '/login', component: login},
    {path:'/set', component:Set},
    {path:'/register', component:Register}
  ]

})
