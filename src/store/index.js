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
    //     const { id, name, email, image, isAdmin } = data
    //     commit('setCurrentUser', {
    //       id, name, email, image, isAdmin
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
