<script setup>
import Nav from '../components/Nav.vue'
</script>

<template>
    <Nav/>

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