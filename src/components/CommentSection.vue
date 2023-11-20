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

          <ul v-if="comment.replies && comment.replies.length > 0">
            <li v-for="reply in comment.replies" :key="reply.id">
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
      return [...this.comments].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },
  methods: {
    addComment() {
      this.comments.unshift({
        id: this.comments.length + 1,
        user: "Annica Frederiksen",
        text: this.newComment,
        date: new Date().toLocaleDateString(),
        replyActive: false,
        replyText: "",
      });

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
  },
};
</script>


<style scoped>
.section {
  max-width: 600px;
  margin: 0 auto;
}
textarea {
  margin-bottom: 10px;
  padding: 5px;
  resize: vertical;
}

.button-container {
  align-self: flex-end;
}

.comment-box {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

button {
  background-color: var(--green-primary);
  color: var(--white);
  border-radius: 10px;
  font-size: 16px;
  padding: 8px 18px;
  border: none;
  cursor: pointer;
}

.button-container {
  margin-left: auto;
}

.comment-date {
  font-size: 12px;
  color: #666;
}

.reply-text {
  cursor: pointer;
  color: black;
  padding-left: 10px;
  text-decoration: underline;
}

.comment-content {
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #ddd;
  margin: 0;
}

li:nth-child(even) {
  background-color: #f0f0f0;
}

.reply-box {
  margin-top: 10px;
}

.comment-content hr {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100px;
  border: 1px solid var(--green-primary);
  margin-left: 0;
}
</style>
