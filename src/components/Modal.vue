<template>
  <div class="modal" id="modal">
    <div class="modal_content">
      <div class="modal_header">
        <h1 class="modal_title">Create a Post</h1>
        <span class="modal_close" @click="hide()">&times;</span>
      </div>
      <div class="modal_body">
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" v-model="selectedCategory">
            <option class="option_list" value="">Select a category</option>
            <option
              v-for="(category, index) in categories"
              :value="category"
              :key="index"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="postTitle" />
        </div>
        <div class="form-group">
          <label for="description">Details</label>
          <textarea id="description" v-model="postDescription"></textarea>
        </div>
      </div>
      <div class="modal_footer">
        <button class="post" @click="createPost">Create Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "Dashboard Features",
        "Documentation",
        "Billing Features",
        "Networking",
        "Hardware and products",
        "Perfect Server Stacks",
        "Mobile App",
        "Webdock API",
        "Competition",
        "Uncategorized",
      ],
    };
  },
  name: "Modal",
  methods: {
    show() {
      const modal = document.getElementById("modal");
    },
    hide() {
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, visability 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.modal.show {
  visibility: visible;
  opacity: 1;
}

.modal.show .modal_content {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}

.modal_content {
  min-width: 370px;
  width: 400px;
  background: white;
  margin: auto;
  visibility: hidden;
  opacity: 0;
  color: black;
  transform: scale(0.5);
  transition: opacity 0.4s ease-in-out, visability 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.modal_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid;
}

.modal_title {
  font-weight: normal;
  font-size: 25px;
  align-content: center;
}

.modal_close {
  padding: 5px;
  cursor: pointer;
  font-size: 25px;
}

.modal_body {
  padding: 10px;
  text-align: justify;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

select,
input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: #f8f8f8;
  color: black;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #007bff;
}

.modal_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.post {
  padding: 10px;
  cursor: pointer;
}
</style>

