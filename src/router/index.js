import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
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

router.beforeEach(async(to, from, next) => {
  // store.dispatch('fetchCurrentUser')
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
