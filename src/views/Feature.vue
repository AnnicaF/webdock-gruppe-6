<script setup>
import FilterBar from "../components/FilterBar.vue";
import MK from "../components/MakeRequest.vue";
import Nav from "../components/Nav.vue";
import FeaturePost from "../components/FeaturePost.vue";
//import Footer from "../components/Footer.vue";

import axios from "axios";
import { ref } from "vue";

const requests = ref(null);

axios
  .get("http://localhost:3000/api/v1/request")
  .then((response) => (requests.value = response.data))
  .then(console.log(requests))

  .catch((err) => {
    console.log("error: " + err);
  });
</script>

<template>
  <Nav />
  <FilterBar />
  <div class="box">
    <button
      v-for="(request, index) in requests"
      :key="index"
      @click="navigateToDetail(request)"
    >
      <FeaturePost
        :title="request.title"
        :bodyText="request.bodyText"
        :index="index"
      />
    </button>
  </div>
</template>

<script>
export default {
  components: {
    FeaturePost,
  },
  methods: {
    navigateToDetail(request) {
      this.$router.push({
        name: "featurePostDetail",
        params: { requestId: request.id },
      });
    },
  },
};
</script>


<style scoped>
button {
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
}

.box {
  display: flex;
  justify-content: center;
}
</style>