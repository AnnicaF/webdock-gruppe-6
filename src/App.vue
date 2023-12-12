<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<style>
/* these styles are global */
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100vh; /* Use Viewport Height to ensure the app container fills the screen */
  display: flex;
  flex-direction: column;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
