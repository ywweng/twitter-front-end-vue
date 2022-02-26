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
  },
  {
    path: '/user-profile',
    name: 'user-page',
    redirect: '/user-profile/:userId', //TODO:到時候要換回來
  },
  {
    path: '/user-profile/:userId',
    name: 'user-profile',
    component: () => import("../views/UserProfile.vue"),
    children:[
      {
        path: 'tweets',
        name: 'user-tweets',
        // component: () => import("../views/UserProfile.vue"),
      },
      {
        path: 'replies',
        name: 'user-replies',
        // component: () => import("../views/UserProfile.vue"),
      },
      {
        path: 'likes',
        name: 'user-likes',
        // component: () => import("../views/UserProfile.vue"),
      },
    ]
    

  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
