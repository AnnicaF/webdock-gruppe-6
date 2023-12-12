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
.adminButton {
  color: black;
  font-size: 10px;
  padding: 12px;
  margin: 0px;
  cursor: pointer;
}

.adminButton button {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  background-color: var(--grey-mid);
}
.showDropdown ul {
  position: relative;
  display: inline-block;
}

div ul {
  display: none;
  position: absolute;
  z-index: 1;
  list-style: none;
  margin: 0;
}
</style>
