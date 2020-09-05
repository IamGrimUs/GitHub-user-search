import Vue from 'vue';
import Vuex from 'vuex';
import UserServices from '@/services/UserServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
    users: []
  },
  getters: {
    getUsers: state => {
      return state.users;
    },
    getSearchInput: state => {
      return state.searchInput;
    }
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SEARCHINPUT(state, searchInput) {
      state.searchInput = searchInput;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      UserServices.getUsers()
        .then(response => {
          console.log(response);
          commit('SET_USERS', response.data);
        })
        .catch(error => {
          console.log('There was an error:', error.response);
        });
    },
    updateSearchInput({ commit }, searchInput) {
      commit('SET_SEARCHINPUT', searchInput);
    }
  }
});
