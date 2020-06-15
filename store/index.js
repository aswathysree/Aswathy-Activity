import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      params: []
    }),
    mutations: {
      params (state, { params }) {
        state.params[state.params.length] = params
      }
    },
  })
}

export default createStore