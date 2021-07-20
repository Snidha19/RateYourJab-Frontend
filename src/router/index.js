import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
         import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/App",
    name: "App",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../App.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//
router.beforeEach(async(to,from,next) => {
  let response = await Vue.axios.get("/api/whoami");
  //response.data is payload
  store.dispatch("setLoggedInUser", response.data);
  let isLoggedIn = store.state.isLoggedIn;
  console.log(store.state.isLoggedIn);
  console.log(store.state.username);
  console.log(store.state.name);
  if(to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Home' && !isLoggedIn) {
    next({name:'Login'})
  } else {
    next()
  }
});

export default router;
