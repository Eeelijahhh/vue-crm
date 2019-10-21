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
    },
    async fetchRecords({ commit, dispatch }) {
      try {
        const userId = await dispatch("getUserId");
        const records = (await firebase.database().ref(`/users/${userId}/records`).once("value")).val() || {};
        // tranform records array
        return Object.keys(records).map(key => ({ ...records[key], id: key }))
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async fetchRecordById({ commit, dispatch }, id) {
      try {
        const userId = await dispatch("getUserId");
        const record = (await firebase.database().ref(`/users/${userId}/records`).child(id).once("value")).val() || {};
        return { ...record, id }
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  }
}