import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";
import FeaturePostDetail from "../views/FeaturePostDetail.vue";
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
      path: "/featurePostDetail/:requestId",
      name: "featurePostDetail",
      component: FeaturePostDetail,
      props: true,
     },
    {
      path: "/roadmap",
      name: "RoadMap",
      component: RoadMap,
    },
  ],
});

export default router;
