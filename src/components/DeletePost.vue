<template>
  <div>
    <button @click="showModal" class="statusButton">
      <font-awesome-icon class="fa-tc" icon="fa-solid fa-trash-can" />Remove
      Post
    </button>

    <!-- Modal -->
    <div
      :class="{ 'modal-overlay': true, active: isModalVisible }"
      v-show="isModalVisible"
    >
      <div class="modal">
        <div class="modal-content">
          <p>Are you sure you want to delete this post?</p>
          <button @click="deletePost">Yes</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deletePost() {
      // Perform the deletion using Axios
      const postId = 1; // Replace with the actual post ID
      axios
        .delete(`/api/posts/${postId}`)
        .then(() => {
          console.log("Post deleted successfully");
          this.closeModal();
          // You might want to emit an event or update some state in AdminPanel
        })
        .catch((error) => {
          console.error("Error deleting post", error);
          // Handle error, e.g., show an error message to the user
        });
    },
  },
};
</script>

<style scoped>
.fa-tc {
  padding-right: 5px;
}

.statusButton {
  color: black;
  font-size: 16px;
  padding: 12px;
  margin: 0px;
  cursor: pointer;
}

button {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  background-color: var(--grey-mid);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style for the modal content */
.modal {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
}

button {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  background-color: var(--grey-mid);
}
</style>
