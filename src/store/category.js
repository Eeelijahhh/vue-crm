import firebase from 'firebase/app'

export default {
  actions: {
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const userId = await dispatch('getUserId')
        const category = await firebase
          .database()
          .ref(`/users/${userId}/categories`)
          .push({ title, limit })
        return { title, limit, id: category.key }
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async updateCategory({ commit, dispatch }, { title, limit, id }) {
      try {
        const userId = await dispatch('getUserId')
        await firebase
          .database()
          .ref(`/users/${userId}/categories`)
          .child(id)
          .update({ title, limit })
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async deleteCategory({ commit, dispatch }, id) {
      try {
        const userId = await dispatch('getUserId')
        await firebase
          .database()
          .ref(`/users/${userId}/categories`)
          .child(id)
          .remove()
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async fetchCategories({ commit, dispatch }) {
      try {
        const userId = await dispatch('getUserId')
        const categories =
          (await firebase
            .database()
            .ref(`/users/${userId}/categories`)
            .once('value')).val() || {}
        // tranform categories array
        return Object.keys(categories).map(key => ({
          ...categories[key],
          id: key
        }))
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async fetchCategoryById({ commit, dispatch }, id) {
      try {
        const userId = await dispatch('getUserId')
        const category =
          (await firebase
            .database()
            .ref(`/users/${userId}/categories`)
            .child(id)
            .once('value')).val() || {}
        return { ...category, id }
      } catch (error) {
        commit('setError', error)
        throw error
      }
    }
  }
}
