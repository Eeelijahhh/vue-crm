import firebase from "firebase/app";

export default {
  actions: {
    getUserId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userId = await dispatch("getUserId");
        await firebase.database().ref(`/users/${userId}/info`).set({
          bill: 10000,
          name
        })
      } catch (error) {
        commit("setError", error);
        throw error
      }
    },
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("setError", error);
        throw error
      }
    },
    async logout() {
      await firebase.auth().signOut();
    }
  }
}