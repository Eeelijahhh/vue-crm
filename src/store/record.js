import firebase from "firebase/app"

export default {
  actions: {
    async createRecord({ dispatch }, record) {
      try {
        const userId = await dispatch("getUserId");
        await firebase.database().ref(`/users/${userId}/records`).push(record);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
}