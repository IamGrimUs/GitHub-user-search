import Vue from 'vue';
import Vuex from 'vuex';
import UserServices from '@/services/UserServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
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
    }
  }
});
