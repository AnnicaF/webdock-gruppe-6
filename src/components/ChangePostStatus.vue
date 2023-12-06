<template>
  <div>
    <template v-if="isAdminUser">
      <label for="status">Under Review</label>
      <select id="status" v-model="selectedStatus">
        <option value="Planned">Planned</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <button @click="changeStatus">Save</button>
    </template>

    <template v-else>
      <p>You do not have permission to change post status.</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedStatus: "Under Review",
    };
  },
  computed: {
    isAdminUser() {
      return this.$store.state.user && this.$store.state.user.role === "admin";
    },
  },
  methods: {
    async changeStatus() {
      try {
        const postId = this.postId;
        const newStatus = this.selectedStatus;

        const response = await this.$axios.put(`/api/posts/${postId}/status`, {
          status: newStatus,
        });

        // Handle success (e.g., show a success message)
        console.log("Post status updated successfully");
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error updating post status:", error);
      }
    },
  },
};
</script>
