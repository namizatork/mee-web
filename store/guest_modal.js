export const state = () => ({
  visible: false
})

export const getters = {
  getVisible (state) {
    return state.visible
  }
}

export const mutations = {
  setVisible (state, visible) {
    state.visible = visible
  }
}

export const actions = {
  toggleVisible ({ commit, state }) {
    commit('setVisible', !state.visible)
  }
}
