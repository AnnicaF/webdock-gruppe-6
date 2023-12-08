<script setup>
import FilterBar from "../components/FilterBar.vue";
import Nav from "../components/Nav.vue";
import axios from "axios";
import { ref } from "vue";

const requests = ref(null);

function get() {
  axios
    .get("http://localhost:3000/api/v1/request")
    .then((response) => (requests.value = response.data))
    .catch((err) => {
      console.log("error: " + err);
    });
}

get();
</script>

<template>
  <Nav />
  <FilterBar @callLoad="get" />

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
