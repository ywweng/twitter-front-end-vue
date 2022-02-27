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
    redirect: '/user-profile/:userId/tweets', 
  },
  {
    path: '/user-profile/:userId',
    name: 'user-profile',
    redirect: '/user-profile/:userId/tweets',
    component: () => import("../views/UserProfile.vue"),
    children:[
      {
        path: 'tweets',
        name: 'user-tweets',
        component: () => import("../components/UserTweetList.vue"),
      },
      {
        path: 'replies',
        name: 'user-replies',
        component: () => import("../components/UserReplyList.vue"),
      },
      {
        path: 'likes',
        name: 'user-likes',
        component: () => import("../components/UserLikeList.vue"),
      },
    ]
  },
  {
    path: '/user-profile/:userId/followings',
    name: 'following-list',
    component: () => import("../views/UserFollowingList.vue")
  },
  {
    path: '/user-profile/:userId/followers',
    name: 'follower-list',
    component: () => import("../views/UserFollowerList.vue")
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
