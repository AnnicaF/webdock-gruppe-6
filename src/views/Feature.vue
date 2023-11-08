<script setup>
import Nav           from '../components/Nav.vue'
import FilterBar     from '../components/FilterBar.vue'
import Post          from '../components/Post.vue'

</script>

<template>
    <Nav/>
    <FilterBar/>
    <div>
    <Post :post="hardcodedPost" />
  </div>
   
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
        description: "Dette er en beskrivelse af min post.",
        user: "John Doe",
        date: "2023-11-02",
      },
    };
  },
};
</script>