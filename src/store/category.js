import firebase from "firebase/app";

export default {
  actions: {
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const userId = await dispatch("getUserId");
        const category = await firebase.database().ref(`/users/${userId}/categories`).push({ title, limit });
        return { title, limit, id: category.key }
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
}