import Vue from 'vue'
import Vuex from 'vuex'
import headerAPI from './../apis/header.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: []
  },
  mutations: {
    setHeader(state, header) {
      state.header = header
    }
  },
  actions: {
    async fetchHeader({ commit }) {
        try {
          const { data } = await headerAPI.getHeader()

          commit('setHeader', data)
          return data
        } catch (error) {
          console.log(error.message)
          return false
        }
    }
  },
  modules: {
  }
})
