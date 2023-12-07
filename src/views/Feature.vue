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
  <div>
    <button @click="sendEmail">Send Email</button>
  </div>
</template>

<script>
import axios from "axios";

async function sendEmail() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/send-email"
    );

    // Log JSON-responsen i konsollen
    console.log(response.data);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
}
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