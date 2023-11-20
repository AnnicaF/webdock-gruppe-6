<template></template>
<!--<template>
  <div>
    <PostDetail :post="selectedPost" />
    <CommentSection
      :comments="selectedPost.comments"
      @addComment="addComment"
      @Reply="addReply"
    />
  </div>
</template>

<script>
import PostDetail from "@/components/PostDetail.vue";
import CommentSection from "@/components/CommentSection.vue";

export default {
  components: {
    PostDetail,
    CommentSection,
  },
  data() {
    return {
      selectedPost: null,
    };
  },
  created() {
    const postId = this.$route.params.postId;
    this.fetchPostDetails(postId);
  },
  methods: {
    fetchPostDetails(postId) {
      this.selectedPost = {
        id: postId,
        title: "Feature request 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        user: "John Doe",
        date: "02-11-2023",
        commentCount: 3,
        upvoteCount: 1,
        comments: [
          {
            id: 1,
            user: "Jane Doe",
            text: "Great idea!",
            date: "02-11-2023",
          },
          {
            id: 2,
            user: "Bob Smith",
            text: "I agree!",
            date: "05-11-2023",
          },
        ],
      };
    },
    addComment(newComment) {
      this.selectedPost.comments.push({
        id: this.selectedPost.comments.length + 1,
        user: "Current User",
        text: newComment,
        date: new Date().toLocaleDateString(),
      });
    },
    addReply({ comment, replyText }) {
      comment.replies = comment.replies || [];
      comment.replies.push({
        id: comment.replies.length + 1,
        user: "Annica Frederiksen",
        text: replyText,
        date: new Date().toLocaleDateString(),
      });
    },
  },
};
</script>

-->