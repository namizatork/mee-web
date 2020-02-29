export default interface State {
  visible: boolean
}

export const state = () => ({
  visible: false
})

export const getters = {
  getVisible (state: State) {
    return state.visible
  }
}

export const mutations = {
  setVisible (state: State, visible: boolean) {
    state.visible = visible
  }
}

export const actions = {
  toggleVisible (store: any) {
    store.commit('setVisible', !store.state.visible)
  }
}
