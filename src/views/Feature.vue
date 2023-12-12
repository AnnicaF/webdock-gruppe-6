<script setup>
import FilterBar from "../components/FilterBar.vue";
import MK from "../components/MakeRequest.vue";
import NavBar from "../components/NavBar.vue";
import FeaturePost from "../components/FeaturePost.vue";
import axios from "axios";
import { ref } from "vue";

const requests = ref(null);
const commentCount = ref(null);

function get() {
  axios
    .get("http://localhost:3000/api/v1/request")
    .then((response) => {requests.value = response.data;
      console.log(response)
    })
    .catch((err) => {
      console.log("error: " + err);
    });
}

get();
</script>

<template>
  <NavBar />
  <FilterBar @callLoad="get" />
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
        :status="request.Status.name"
        :date="request.createdAt"
        :commentCount="request.Comments"
        :user="request.User.name"
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
  flex-direction: column;
  justify-content: center;
}
</style>
