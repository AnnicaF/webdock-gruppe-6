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

  .catch((err) => {
    console.log("error: " + err);
  });
</script>

<template>
  <Nav />
  <!--  <Search />  searchbar fjernet & flyttet til nav.vue -->

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
  data() {
    return {
      hardcodedPost: {
        title: "Feature request 1",
        status: "Planned",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        user: "John Doe",
        date: "2023-11-02",
        commentCount: 3,
        upvoteCount: 1,
      },
    };
  },
};
</script>
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
  flex-direction: column;
  justify-content: center;
}
</style>
