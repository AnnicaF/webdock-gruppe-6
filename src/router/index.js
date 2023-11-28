import { createRouter, createWebHistory } from "vue-router";
import Feature from "../views/Feature.vue";
<<<<<<< HEAD
import Login from "../views/Login.vue";
=======
import FeaturePostDetail from "../views/FeaturePostDetail.vue";
import RoadMap from "../views/RoadMap.vue";
>>>>>>> 6315ed8fa924d6ae14e1af5f8f79c72d44cc87ae

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Feature",
      component: Feature,
    },
    {
<<<<<<< HEAD
      path: "/login",
      name: "login",
      component: Login,
=======
      path: "/featurePostDetail/:requestId",
      name: "featurePostDetail",
      component: FeaturePostDetail,
      props: true,
    },
    {
      path: "/roadmap",
      name: "RoadMap",
      component: RoadMap,
>>>>>>> 6315ed8fa924d6ae14e1af5f8f79c72d44cc87ae
    },
  ],
});

export default router;
