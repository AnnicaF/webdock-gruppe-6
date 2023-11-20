import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";
import RoadMap from "../views/RoadMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Feature",
      component: Feature,
    },
    {
      path: "/roadmap",
      name: "RoadMap",
      component: RoadMap,
    },
  ],
});

export default router;
