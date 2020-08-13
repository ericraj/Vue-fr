import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  { path: "/contact", name: "contact", component: Contact },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
