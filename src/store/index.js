import Vue from 'vue'
import Vuex from 'vuex'
// import userAPI from './../apis/user'
// import tweetsAPI from './../apis/tweets'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: '',
      avatar: '',
      cover: '',
      introduction: '',
      role: '',
      followingCount: 0, 
      followerCount: 0, 
      tweetCount: 0
    },
    isAuthenticated: false,
    token: '',
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      }

      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    },
  },
  actions: {
    // async fetchCurrentUser({ commit }) {
    //   try {
    //     const { data } = await userAPI.getCurrentUSer()
    //     const { id, account, name, email, avatar, cover, role, followingCount, followerCount, tweetCount } = data
    //     commit('setCurrentUser', {
    //       id, account, name, email, avatar, cover, role, followingCount, followerCount, tweetCount
    //     })
    //    return true
    //   } catch(error) {
    //     console.log('error', error)
    //     console.error('can not fetch user information')
    //     commit('revokeAuthentication')
    //     return false
    //   }
    // }
  },

  modules: {},
})
