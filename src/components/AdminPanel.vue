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
  font-size: 16px;
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
div > .showDropdown ul {
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

.fa-cd {
  padding-left: 5px;
  margin: 0px;
}
.dropdown-container {
  position: relative;
  display: inline-block;
  margin: 0px;
}

.dropdown-content {
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.dropdown-content ul {
  padding: 0;
}

.dropdown-content li {
  list-style: none;
  text-decoration: none;
  padding: 18px;
  margin: 0px;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #f1f1f1; /* Grey background on hover */
}
</style>
