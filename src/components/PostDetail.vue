<template>
  <div class="post-container">
    <div class="vote">
      <div class="upvote-container">
        <button @click="handleUpvote" class="upvote-button">
          <font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-up" />
        </button>
        <span class="upvote-count"> upvoteCount </span>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ post.bodyText }}</p>
        <hr />
        <div class="user_date_box">
          <p class="small-text">{{ post.User.name }}</p>
          <p class="small-text">{{ post.createdAt }}</p>
          <div class="comment-box">
            <font-awesome-icon
              class="comment_icon"
              icon="fa-solid fa-comment"
            />
            <span class="comment-count" @load="countComments(post.comments)">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    upvotePost() {
      console.log("Upvoting post:", this.post.id);
    },
    countComments(com) {
      console.log("bob");
      document.getElementById("comment-count").innerHTML = com.length;
    },
  },
};
</script>

<style scoped>
.post-container {
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.post {
  max-height: 200px;
}

.post-content {
  padding: 20px;
}

.title {
  font-size: 25px;
  padding-bottom: 5px;
}

.description {
  font-size: 16px;
}

hr {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 170px;
  border: 1px solid var(--green-primary);
  margin-left: 0;
}

.user_date_box {
  display: flex;
  flex-direction: row;
}

.small-text {
  font-size: 12px;
  padding-right: 20px;
}
.planned-color {
  background: #ffa500;
}

.under-review-color {
  background: #808080;
}

.completed-color {
  background: #008000;
}

.in-progress-color {
  background: #0000ff;
}

.default-color {
  background: #000000;
}
.comment_icon {
  color: grey;
}
.status-label {
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-weight: 300;
  font-size: 12px;
  display: inline-block;
}

.status-container {
  margin-bottom: 20px;
}

.comment-box {
  display: flex;
  align-items: center;
}

.comment-count {
  margin-left: 5px;
  font-size: 12px;
}
.vote {
  margin-top: 25px;
  margin-right: 20px;
}
.upvote-container {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 35px;
  height: 45px;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.upvote-button {
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  align-self: center;
}

.upvote-count {
  color: black;
  align-self: center;
  font-size: 16px;
}

.fa-lg {
  color: grey;
}
</style>
