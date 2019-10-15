import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      meta: {
        layout: "main"
      },
      component: Home
    },
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "empty"
      },
      component: () => import("./views/Login.vue")
    }
  ]
});