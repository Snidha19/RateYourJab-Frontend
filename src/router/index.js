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
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import( "../views/Register.vue"),
  },
  {
    path: "/review",
    name: "Review",
    component: () =>
      import( "../views/Review.vue"),
  },
  {
    path: "/addreview",
    name: "AddReview",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/AddReview.vue"),
  },
  {
    path: "/App",
    name: "App",
    component: () => import("../App.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//
router.beforeEach(async (to, from, next) => {
  let response = await Vue.axios.get("/api/whoami");
  //response.data is payload
  await store.dispatch("setLoggedInUser", response.data);
  let isLoggedIn = store.state.isLoggedIn;
  console.log(store.state.isLoggedIn);
  console.log(store.state.username);
  console.log(store.state.name);

  if ((to.name === "Login" || to.name === "Register" || to.name === "Home") && isLoggedIn) {
    next({ name: "Review" });
  }
  if (
    to.name !== "Login" &&
    to.name !== "Register" &&
    to.name !== "Home" &&
    !isLoggedIn
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
