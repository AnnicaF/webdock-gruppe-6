<template>
  <div>
    <button @click="mergePost" class="mergeButton">
      <font-awesome-icon class="fa-cm" icon="fa-solid fa-code-merge" />Merge
      Post
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post1: {},
      post2: {},
      mergedPost: null,
    };
  },
  methods: {
    async mergePosts() {
      // Fetch posts from your API or provide post data here
      const post1Response = await this.fetchPost(1);
      const post2Response = await this.fetchPost(2);

      // Handle errors or loading state as needed
      if (post1Response.error || post2Response.error) {
        console.error("Failed to fetch posts");
        return;
      }

      // Merge posts
      this.mergedPost = this.mergeData(post1Response.data, post2Response.data);
    },
    async fetchPost(postId) {
      try {
        const response = await this.$axios.get(`/api/posts/${postId}`);
        return { data: response.data };
      } catch (error) {
        return { error: error.message };
      }
    },
    mergeData(post1, post2) {
      // Your custom logic to merge two posts
      // For example, you can merge fields, concatenate content, etc.
      return {
        id: post1.id, // Keep the ID of the first post
        title: `${post1.title} - ${post2.title}`, // Concatenate titles
        content: `${post1.content}\n\n${post2.content}`, // Concatenate content
      };
    },
  },
};
</script>

<style scoped>
.fa-cm {
  padding-right: 5px;
}

.statusButton {
  color: black;
  padding: 12px;
  margin: 0px;
  cursor: pointer;
}

button {
  background: white;
  border: 1px solid rgb(50, 22, 22);
  border-radius: 5px;
}

button:hover {
  background-color: var(--grey-mid);
}
</style>
