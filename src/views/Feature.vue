
<script setup>
import MK from '../components/MakeRequest.vue'
import Nav from "../components/Nav.vue";
import Post from "../components/Post.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Nav />
  <FilterBar />
  <div>
    <Post :post="hardcodedPost" />
  </div>
      <MK/>
  <Footer />
</template>




<script>
export default {
  components: {
    Post,
  },
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