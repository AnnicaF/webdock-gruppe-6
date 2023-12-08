<script setup>
import { ref, onMounted, getCurrentInstance, defineExpose } from "vue";
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

const doComment = (newComment) => {

  let data = {
    bodyText: newComment,
    userID: localStorage.getItem("userId"),
    requestID: selectedPost.value.id 
  };
  axios.post(`http://localhost:3000/api/v1/request/${selectedPost.value.id }/comment`, data)
    .then(response => {
      // Handle the success response
      console.log('Response:', response.data);
      fetchPostDetails(selectedPost.value.id);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
}

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
      <CommentSection
        :comments="selectedPost.Comments"
        @addComment="doComment"
        @Reply="addReply"
      />
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