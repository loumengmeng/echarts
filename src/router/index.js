import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/yqdt',
    component:()=>import(/* webpackChunkName: "INDEX" */ '../views/index.vue'),
    children: [
      {
        path: '/yqdt',
        name: 'yqdt',
        meta:{
          til:"疫情动态"
        },
        component: () => import(/* webpackChunkName: "yqdt" */ '../components/yqdt')
      },
      {
        path: '/qxmap',
        name: 'qx',
        meta:{
          til:"迁徙地图"
        },
        component: () => import(/* webpackChunkName: "qx" */ '../components/qxmap')
      },
      {
        path: '/hotsearch',
        name: 'hotsearch',
        meta:{
          til:"全民热搜"
        },
        component: () => import(/* webpackChunkName: "hotsearch" */ '../components/hotsearch')
      },
      {
        path: '/news',
        name: 'news',
        meta:{
          til:"实时直播"
        },
        component: () => import(/* webpackChunkName: "news" */ '../components/news')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import(/* webpackChunkName: "LOGIN" */ '../views/login.vue')
  },
  {
    path: '*',
    redirect: "/yqdt"
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
