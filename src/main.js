import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);

Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyANiew2FtjFbiQioria3iQrxWbIn4_EwMQ",
  authDomain: "vue-crm-forhome.firebaseapp.com",
  databaseURL: "https://vue-crm-forhome.firebaseio.com",
  projectId: "vue-crm-forhome",
  storageBucket: "vue-crm-forhome.appspot.com",
  messagingSenderId: "938416684695",
  appId: "1:938416684695:web:3108f0e334f4900e0c73d2"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})