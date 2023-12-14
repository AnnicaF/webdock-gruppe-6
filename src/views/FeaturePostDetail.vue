<script setup>
import {
  ref,
  onMounted,
  getCurrentInstance,
  defineExpose,
  computed,
} from "vue";
import axios from "axios";
import PostDetail from "@/components/PostDetail.vue";
import CommentSection from "@/components/CommentSection.vue";
import NavBar from "@/components/NavBar.vue";
import AdminPanel from "@/components/AdminPanel.vue";
import { useStore } from "vuex";

const store = useStore();
const isAdmin = computed(() => store.state.roleID === 1);

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
    requestID: selectedPost.value.id,
  };
  axios
    .post(
      `http://localhost:3000/api/v1/request/${selectedPost.value.id}/comment`,
      data
    )
    .then((response) => {
      // Handle the success response
      console.log("Response:", response.data);
      fetchPostDetails(selectedPost.value.id);
    })
    .catch((error) => {
      // Handle the error
      console.error("Error:", error);
    });
};

onMounted(() => {
  const requestId = proxy.$route.params.requestId;
  fetchPostDetails(requestId);
});
</script>

<template>
  <div>
    <NavBar />
    <template v-if="loading">
      <!-- Vis en indlæsningsindikator her -->
      <p>Loading...</p>
    </template>
    <template v-else>
      <!-- Vis PostDetail og CommentSection her -->
      <PostDetail :post="selectedPost" />
      <template v-if="isAdmin && selectedPost">
        <AdminPanel :requestId="selectedPost.id" />
      </template>
      <CommentSection
        :comments="selectedPost.Comments.reverse()"
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
import { ref, onMounted, computed } from "vue";

export default {
  props: {
    roleID: Number,
  },
  components: {
    PostDetail,
    CommentSection,
    NavBar,
    AdminPanel,
  },

  setup() {
    // Brug computed for at overvåge brugerens rolle og bestemme, om de er admin
    const isAdmin = computed(() => store.state.roleID === 1);

    const selectedPost = ref(null);
    const loading = ref(true);

    const fetchPostDetails = async (requestId) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/request/${requestId}`
        );
        console.log("Server response:", response.data);
        selectedPost.value = response.data;
      } catch (error) {
        console.error("Error fetching post details:", error);
        // Handle error (e.g., redirect to a 404 page)
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      try {
        const requestId = proxy.$route.params.requestId;
        await fetchPostDetails(requestId);
      } catch (error) {
        console.error("Error during component initialization:", error);
      }
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
      doComment,
      addReply,
      isAdmin,
    };
  },
};
</script>
