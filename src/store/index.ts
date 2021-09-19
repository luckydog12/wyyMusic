import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    homeBackgroundColor: String,
  },
  mutations: {
    setHomeBackgroundColor: (state, homeBackgroundColor) => {
      state.homeBackgroundColor = homeBackgroundColor
    },
  },
  actions: {
    setHomeBackgroundColor({ commit }, homeBackgroundColor) {
      commit("setHomeBackgroundColor", homeBackgroundColor)
    },
  },
  modules: {},
  // 默认存储在localStorage
  plugins: [createPersistedState()],
})
