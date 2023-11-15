<script setup>
import FilterBar from "../components/FilterBar.vue";
import MK from '../components/MakeRequest.vue'
import Nav from "../components/Nav.vue";
import Post from "../components/Post.vue";
import Footer from "../components/Footer.vue";

import axios from "axios";
import {ref} from "vue";

const requests = ref(null);

axios.get('http://localhost:3000/api/v1/request')
    .then(response => requests.value = response.data)
    .then(console.log(requests))

    .catch(err => {
        console.log("error: " + err);
    });

</script>

<template>
  <Nav />
  <FilterBar />
  <div>
    <Post v-for="request in requests" 
        :postTitle = "request.title"
        :postDescription = "request.bodyText" />
  </div>
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
        title: "Feature Request 1",
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