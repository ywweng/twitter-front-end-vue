import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Main,
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import("../views/AdminLogin.vue")
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import("../views/AdminTweetList.vue")
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import("../views/AdminUserList.vue")
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
