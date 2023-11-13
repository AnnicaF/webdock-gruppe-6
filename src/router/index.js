import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Feature",
      component: Feature,
    },
  ],
});

export default router;
