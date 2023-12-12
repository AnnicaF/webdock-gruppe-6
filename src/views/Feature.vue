<script setup>
import FilterBar from "../components/FilterBar.vue";
import MK from "../components/MakeRequest.vue";
import Nav from "../components/Nav.vue";
import FeaturePost from "../components/FeaturePost.vue";
import Footer from "../components/Footer.vue";

import axios from "axios";
import { ref } from "vue";

const requests = ref(null);

function get() {
  axios
    .get("http://localhost:3000/api/v1/request")
    .then((response) => (requests.value = response.data))
    .then(console.log(requests))

    .catch((err) => {
      console.log("error: " + err);
    });
}

function search(searchQuery) {
  console.log(searchQuery);
  axios
    .get("http://localhost:3000/api/v1/request/search", {
      params: {
        q: searchQuery, // This sends the search term as a query parameter
      },
    })
    .then((response) => (requests.value = response.data))
    .then(console.log(requests))
    .catch((err) => {
      console.log("error: " + err);
    });
}

get();
</script>

<template>
  <div class="main-container">
    <Nav @callsearch="search" />
    <FilterBar />
    <div class="content">
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
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    FeaturePost,
    Footer,
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
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

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
