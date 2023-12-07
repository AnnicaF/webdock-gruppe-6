<script setup>
import ChangePostStatus from "./ChangePostStatus.vue";
import DeletePost from "./DeletePost.vue";
import MergePost from "./MergePost.vue";
</script>

<template>
  <div class="adminContainer">
    <MergePost class="adminButton" />
    <DeletePost class="adminButton" />
    <ChangePostStatus class="statusButton" />
  </div>
</template>

<script></script>

<style scoped>
.adminContainer {
  display: flex;
  align-items: center;
}

.adminButton button {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

.adminButton button:hover {
  background-color: var(--grey-mid);
}
</style>
