<template>
  <div>
    <template v-if="isAdmin">
      <p>You have the permission to remove posts.</p>
      <button @click="openModal">
        <font-awesome-icon class="fa-tc" icon="fa-solid fa-trash-can" />Remove
        Post
      </button>
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <p>Are you sure you want to remove this post?</p>
          <button @click="confirmDelete">Yes</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </template>

    <template v-else>
      <p>You do not have permission to remove posts.</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
      showModal: false,
    };
  },
  created() {
    // requires admin user role
    this.isAdmin =
      this.$store.state.user && this.$store.state.user.role === "admin";
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    confirmDelete() {
      // Make an Axios request to your backend to delete the post
      this.$axios
        .delete(`/api/posts/${postId}`)
        .then((response) => {
          // Handle success (e.g., show a success message)
          console.log("Post removed");
          this.closeModal();
        })
        .catch((error) => {
          // Handle error (e.g., show an error message)
          console.error("Error removing post:", error);
          this.closeModal();
        });
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
