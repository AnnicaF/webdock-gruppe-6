import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Feature",
      component: Feature,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
