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
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue'),
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
