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
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
