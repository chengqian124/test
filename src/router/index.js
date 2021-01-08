import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/basic/home/home'
import Login from '../views/basic/login/login'
import Video from '../views/business/video/video'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/video',
      component: Video
    },

  ]
})
