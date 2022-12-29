import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 's1mple'
  },
  getters: {
    myName: (state) => state.userName
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
