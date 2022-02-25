import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
