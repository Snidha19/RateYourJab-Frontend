import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    name: null,
  },
  mutations: {
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    setLoggedInUser({ commit }, payload) {
      console.log(payload);
      commit("setisLoggedIn", payload.loggedIn);
      commit("setUsername", payload.username);
      commit("setName", payload.name);
    },
    clearUser({ commit }) {
      commit("setisLoggedIn", false);
      commit("setUsername", null);
      commit("setName", null);
    },
  },
  modules: {},
});
