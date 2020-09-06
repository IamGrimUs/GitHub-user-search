import Vue from 'vue'
import Vuex from 'vuex'
import UserServices from '@/services/UserServices.js'
import router from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInput: '',
    totalUserCount: 0,
    pageOneViewed: false,
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
    SET_PAGEONEVIEWED(state, payload) {
      state.pageOneViewed = payload
    },
  },
  actions: {
    fetchUsers({ commit }, pageNumber) {
      UserServices.getUsers(this.state.searchInput, pageNumber)
        .then(response => {
          commit('SET_TOTALUSERCOUNT', response.data.total_count)
          commit('SET_USERS', response.data.items)
          console.log('users from state: ', this.state.users)
          if (pageNumber === 1 && !this.state.pageOneViewed) {
            commit('SET_PAGEONEVIEWED', true)
            router.push('dashboard')
          }
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
