<script setup>
import ChangePostStatus from "./ChangePostStatus.vue";
import DeletePost from "./DeletePost.vue";
</script>

<template>
  <div class="adminContainer">
    <ChangePostStatus class="statusButton" />
    <DeletePost />
  </div>
</template>

<script></script>

<style scoped>
.adminContainer {
  display: flex;
  align-items: center;
}
</style>
