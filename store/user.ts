export const state = () => ({
  user: '',
  userdata: null
})

export const mutations = {
  setUser(state, userId) {
    state.user = userId
  },
  setUserData(state, userdata) {
    state.userdata = userdata
  },
  removeUser(state){
    state.user = ''
    state.userdata = null
  }
}

export const actions = {
  async setLogin({commit}, payload) {
    commit('setUser', payload)
  },
  async setUserData({commit}, payload) {
    commit('setUserData', payload)
  },
  async logoutUser({commit}) {
    commit('removeUser')
  }
}
