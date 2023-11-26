<template>
  <div class="section">
    <div class="comment-box">
      <textarea v-model="newComment" placeholder="Leave a comment"></textarea>
      <div class="button-container">
        <button @click="addComment">Submit</button>
      </div>
    </div>
    <div class="container">
      <ul v-if="sortedComments.length > 0">
        <li v-for="comment in sortedComments" :key="comment.id">
          <div class="comment-content">
            <p>
              <strong>{{ comment.user }}</strong>
            </p>
            <p>{{ comment.text }}</p>
            <hr />
            <p class="comment-date">{{ comment.date }}</p>
            <span @click="toggleReply(comment)" class="reply-text">Reply</span>
          </div>

          <div v-if="comment.replyActive" class="reply-box">
            <textarea
              v-model="comment.replyText"
              placeholder="Add a comment"
            ></textarea>
            <button @click="sendReply(comment)">Reply</button>
          </div>

          <ul v-if="comment.Replies && comment.Replies.length > 0">
            <li v-for="reply in comment.Replies" :key="reply.id">
              <div class="comment-content">
                <p>
                  <strong>{{ reply.user }}</strong>
                </p>
                <p>{{ reply.text }}</p>
                <hr />
                <p class="comment-date">{{ reply.date }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <p v-else>No comments yet.</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comments: Array,
  },
  data() {
    return {
      newComment: "",
    };
  },
  computed: {
    sortedComments() {
      return this.comments
        ? [...this.comments].sort((a, b) => new Date(b.date) - new Date(a.date))
        : [];
    },
  },

  methods: {
    addComment() {
      this.$emit("addComment", this.newComment);

      // Clear the input field
      this.newComment = "";
    },
    toggleReply(comment) {
      comment.replyActive = !comment.replyActive;
      if (!comment.replyActive) {
        comment.replyText = "";
      }
    },
    sendReply(comment) {
      this.$emit("Reply", { comment, replyText: comment.replyText });
      comment.replyText = "";
      comment.replyActive = false;
    },
    async handleAddComment() {
      const postId = this.selectedPost.id; // Juster dette baseret på din datastruktur
      try {
        const response = await axios.post(
          `http://localhost:3000/api/v1/request/${requestId}/comments`,
          {
            text: this.newComment,
          }
        );

        // Opret en ny kopi af kommentarerne for at bevare reaktivitet
        this.$emit("addComment", response.data); // Dette emitter en begivenhed til forælderen
        this.newComment = ""; // Nulstil inputfeltet
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    },
  },
};
</script>