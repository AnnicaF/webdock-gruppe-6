<template>
  <div class="post-container" :class="getIndexClass(index)">
    <div class="vote">
      <div class="upvote-container"  :class="hasLiked()">
        <button class="upvote-button">
          <font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-up" />
          <span class="upvote-count" >{{ upvoteCount.length }}</span>
        </button>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="title">{{ title }}</h2>
        <div class="status-container">
          <div class="status-label" :class="getStatusClass(status)">
            {{ status }}
          </div>
        </div>
        <p class="bodyText">{{ bodyText }}</p>
        <hr />
        <div class="user_date_box">
          <p class="small-text">{{ user }}</p>
          <p class="small-text">
            {{ new Date(date).toLocaleDateString("en-GB") }}
          </p>
          <div class="comment-box">
            <font-awesome-icon
              class="comment_icon"
              icon="fa-solid fa-comment"
            />
            <span class="comment-count">{{ commentCount.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    title: String,
    bodyText: String,
    description: String,
    upvoteCount: Number,
    commentCount: Array,
    user: String,
    status: String,
    date: String,
    index: Number,
  },
  methods: {
    handleUpvote() {
      console.log("+1");
    },
    getStatusClass(status) {
      const statusColorMap = {
        planned: "planned-color",
        "under review": "under-review-color",
        completed: "completed-color",
        "in progress": "in-progress-color",
      };
      return statusColorMap[status.toLowerCase()] || "default-color";
    },

    getIndexClass(index) {
      let i = index % 2;
      return "iswhite-" + i;
    },
    hasLiked(){
      console.log(this.upvoteCount);
      let hl = false;
      this.upvoteCount.forEach(element => {
        if(element.userID == localStorage.getItem("userId")){
          hl = true;
        }
      });
      if(hl){
        return "hasLiked"
      }
    }
  },
};
</script>
<style scoped>
.post-container {
  display: flex;
  background-color: var(--grey-mid);
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.post {
  width: 100%;
}
.iswhite-1 {
  background-color: var(--grey-light);
}

.title {
  font-size: 25px;
  padding-bottom: 5px;
}

.bodyText {
  font-size: 16px;
  font-weight: 100;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

hr {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 170px;
  border: 1px solid var(--green-primary);
  margin-left: 0px;
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
  background: black;
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
  z-index: -10;
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

.hasLiked{
  background-color: var(--green-primary);
  pointer-events: none;
}

.hasLiked .fa-lg{
  color: white;
}

.hasLiked span{
  color: white;
}
</style>
