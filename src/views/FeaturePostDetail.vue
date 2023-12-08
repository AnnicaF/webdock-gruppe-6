<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
import PostDetail from "@/components/PostDetail.vue";
import CommentSection from "@/components/CommentSection.vue";
import Nav from "@/components/Nav.vue";

const { proxy } = getCurrentInstance();
const selectedPost = ref(null);
const loading = ref(true);

const fetchPostDetails = async (requestId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/request/${requestId}`
    );
    selectedPost.value = response.data;
    console.log(selectedPost.value);
  } catch (error) {
    console.error("Error fetching post details:", error);
    // Håndter fejl (f.eks. omdirigere til en 404-side)
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const requestId = proxy.$route.params.requestId;
  fetchPostDetails(requestId);
});
</script>

<template>

  <div>
    <Nav />
    <template v-if="loading">
      <!-- Vis en indlæsningsindikator her -->
      <p>Loading...</p>
    </template>
    <template v-else>
      <!-- Vis PostDetail og CommentSection her -->
      <PostDetail :post="selectedPost" />
      <!-- <CommentSection
        :comments="selectedPost.Comments"
        @addComment="addComment"
        @Reply="addReply"
      /> -->
    </template>
  </div>
</template>

<script>
import PostDetail from "@/components/PostDetail.vue";
import CommentSection from "@/components/CommentSection.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  components: {
    PostDetail,
    CommentSection,
    Nav,
  },

  methods: {
    async handleAddComment(newComment) {
      // Update the comments data in the parent component
      this.selectedPost.Comments.unshift({
        id: this.selectedPost.Comments.length + 1,
        user: "Annica Frederiksen",
        text: newComment,
        date: new Date().toLocaleDateString(),
        replyActive: false,
        replyText: "",
      });
    },
  },
  setup() {
    const selectedPost = ref(null);
    const loading = ref(true);

    const fetchPostDetails = async (requestId) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/request/${requestId}`
        );
        // Sørg for, at 'Comments' er initialiseret som en tom array
        selectedPost.value = {
          ...response.data,
          Comments: response.data.Comments || [],
        };
      } catch (error) {
        console.error("Error fetching post details:", error);
        // Handle error (e.g., redirect to a 404 page)
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      const requestId = proxy.$route.params.requestId;
      fetchPostDetails(requestId);
    });

    const addComment = (newComment) => {
      // Add the comment to the 'Comments' array
      selectedPost.value.Comments.push({
        id: selectedPost.value.Comments.length + 1,
        user: "Current User",
        text: newComment,
        date: new Date().toLocaleDateString(),
        Replies: [],
      });
    };

    const addReply = ({ comment, replyText }) => {
      // Add the reply to the 'Replies' array in the respective comment
      comment.Replies = comment.Replies || [];
      comment.Replies.push({
        id: comment.Replies.length + 1,
        user: "Annica Frederiksen",
        text: replyText,
        date: new Date().toLocaleDateString(),
      });
    };

    return {
      selectedPost,
      loading,
      addComment,
      addReply,
    };
  },
};
</script>