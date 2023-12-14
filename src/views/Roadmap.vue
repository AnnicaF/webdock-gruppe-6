<script setup>
import NavBar from "../components/NavBar.vue";
import RoadMapPost from "../components/RoadMapPost.vue";
import AdminPanel from "../components/AdminPanel.vue";
import axios from "axios";
import { ref } from "vue";

const requests = ref(null);

axios
    .get("http://localhost:3000/api/v1/request")
    .then((response) => {requests.value = response.data;
      console.log(response)
    })
    .catch((err) => {
      console.log("error: " + err);
    });
</script>

<template>
  <NavBar />
  <AdminPanel />
  <div>
    <RoadMapPost :posts="requests" />
  </div>
</template>

<script>
export default {
  components: {
    RoadMapPost,
  },
  data() {
    return {
      hardcodedPosts: [
        { title: "White label panel", upvoteCount: 1 },
        { title: "Bandwidth usage", upvoteCount: 1 },
        { title: "Support for OpenLiteSpeed in stacks", upvoteCount: 1 },
        { title: "Bitcoin/Monero Payments", upvoteCount: 1 },
        { title: "Support for security keys", upvoteCount: 1 },
        { title: "Pull requests for documentation", upvoteCount: 1 },
        { title: "Object Storage", upvoteCount: 1 },
        { title: "Reset password function for Shell Users", upvoteCount: 1 },
        {
          title: "Ability to remove the default webdock.cloud URL/Alias",
          upvoteCount: 1,
        },
        {
          title: "Purchase Domains at Webdock and easy DNS management",
          upvoteCount: 1,
        },
        {
          title: "Basic Authentication Management to password protect URL's",
          upvoteCount: 1,
        },
        {
          title: "1-click installation of Docker Applications",
          upvoteCount: 1,
        },
      ],
    };
  },
};
</script>
