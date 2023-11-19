<script setup>
import FilterBar from "../components/FilterBar.vue";
import MK from "../components/MakeRequest.vue";
import Nav from "../components/Nav.vue";
import FeaturePost from "../components/FeaturePost.vue";
</script>

<template>
  <Nav />
  <FilterBar />
  <div class="box">
    <button @click="navigateToDetail">
      <FeaturePost :post="hardcodedPost" />
    </button>
  </div>
</template>

<script>
export default {
  components: {
    FeaturePost,
  },
  data() {
    return {
      hardcodedPost: {
        id: 1,
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
  methods: {
    navigateToDetail() {
      this.$router.push({
        name: "featurePostDetail",
        params: { id: this.hardcodedPost.id },
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