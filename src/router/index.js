import Vue from 'vue'
import VueRouter from 'vue-router'
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
    name: 'login',
    component: Login,
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
    edirect: '/user-profile/:userId/followers',
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


router.beforeEach((to, from, next) => {
  // console.log('to',to)
  // console.log('from',from)
  // store.dispatch('fetchTweets')
  next()
})

export default router
