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
      role: '',
    },
    isAuthenticated: false,
    token: '',
    newTweets: [],
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
    setNewTweet(state,newTweet) {
      state.newTweets.push(newTweet)
    },
    resetNewTweet(state) {
      // console.log('delete',newTweet)
      state.newTweets = []
    }
  },
  actions: {
    // async fetchTweets({ commit }) {
    //   try {
    //     const { data } = await tweetsAPI.getTweets()
    //     commit('setTweets', data)
    //     return true
    //   } catch (error) {
    //     console.log(error.message)
    //     return false
    //   }
    // },
  },
  modules: {},
})
