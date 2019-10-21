import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = ''
    }
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const userId = await dispatch('getUserId')
        const info = (await firebase
          .database()
          .ref(`/users/${userId}/info`)
          .once('value')).val()
        commit('setInfo', info)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async updateInfo({ dispatch, commit, getters }, toUpdate) {
      try {
        const userId = await dispatch('getUserId')
        const updatedData = { ...getters.info, ...toUpdate }
        await firebase
          .database()
          .ref(`/users/${userId}/info`)
          .update(updatedData)
        commit('setInfo', updatedData)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    }
  },
  getters: {
    info: state => state.info
  }
}
