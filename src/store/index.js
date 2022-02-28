import Vue from 'vue'
import Vuex from 'vuex'
// import userAPI from './../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
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
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        const { id, account, name, email, role, avatar } = data.user
        commit('setCurrentUser', {
          id,
          account,
          name,
          email,
          role,
          avatar,
        })
        return true
      } catch (error) {
        console.error(error.message)
        commit('revokeAuthentication')
        return false
      }
    },
  },
  modules: {},
  */
})
