import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main',
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
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
