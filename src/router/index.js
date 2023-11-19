import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";
import FeaturePostDetail from "../views/FeaturePostDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Feature",
      component: Feature,
    },
    {
      path: "/featurePostDetail/:id",
      name: "featurePostDetail",
      component: FeaturePostDetail,
    },
  ],
});

export default router;
