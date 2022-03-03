import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'

import Login from '../views/Login.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/login',
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/:userId',
        name: 'tweet-list',
        component: () => import('./../components/TweetList.vue'),
      },
      {
        path: '/main/tweets/:tweetId',
        name: 'single-tweet',
        component: () => import('./../components/SingleTweet.vue'),
      },
    ],
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
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue'),
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
    children: [
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
    path: '/user-profile/:userId/follow',
    name: 'followship',
    component: () => import("../views/UserFollowShip.vue"),
    redirect: '/user-profile/:userId/followers',
    children: [
      {
        path: '/user-profile/:userId/followings',
        name: 'following-list',
        component: () => import("../components/UserFollowingList.vue"),
      },
      {
        path: '/user-profile/:userId/followers',
        name: 'follower-list',
        component: () => import("../components/UserFollowerList.vue"),
      },
    ]
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

router.beforeEach(async(to, from, next) => {
  // 從 localStorage 取出 token
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated

  // 有 token 才向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['login', 'register']

  // token 無效，轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }

  // 如果 token 有效，且要去登入和註冊頁，則轉址到首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }

  next()
})

export default router
