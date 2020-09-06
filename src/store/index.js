import Vue from 'vue'
import Vuex from 'vuex'
import UserServices from '@/services/UserServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInput: '',
    totalUserCount: 0,
    users: [],
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    getTotalUserCount: state => {
      return state.totalUserCount
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_TOTALUSERCOUNT(state, totalUserCount) {
      state.totalUserCount = totalUserCount
    },
    SET_SEARCHINPUT(state, searchInput) {
      state.searchInput = searchInput
    },
  },
  actions: {
    fetchUsers({ commit }, pageNumber) {
      UserServices.getUsers(this.state.searchInput, pageNumber)
        .then(response => {
          commit('SET_TOTALUSERCOUNT', response.data.total_count)
          return response
        })
        .then(async res => {
          let users = []
          for (let user of res.data.items) {
            let userDetails = await UserServices.getUserDetails(user.url)
            users.push(userDetails.data)
            console.log(users)
          }
          commit('SET_USERS', users)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    updateSearchInput({ commit }, searchInput) {
      commit('SET_SEARCHINPUT', searchInput)
    },
  },
})
