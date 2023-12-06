<template>
  <div class="admin-section">
    <router-link to="/admin/delete-post" class="admin-link"
      >Remove Post</router-link
    >

    <div class="dropdown">
      <router-link
        to="/admin/change-post-status"
        class="admin-link dropdown-trigger"
      >
        Under Review
      </router-link>
      <div class="dropdown-content">
        <ul>
          <li
            v-for="status in statusOptions"
            :key="status"
            @click="selectStatus(status)"
          >
            {{ status }}
          </li>
        </ul>
      </div>
    </div>

    <router-link to="/admin/merge-posts" class="admin-link">Merge</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    ChangePostStatus,
  },
  data() {
    return {
      statusOptions: ["Under Review", "Planned", "In Progress", "Complete"],
    };
  },
  methods: {
    selectStatus(status) {
      console.log(`Selected status: ${status}`);
      // For example, emit an event or call a method from the ChangePostStatus component
    },
  },
};
</script>

<style scoped>
.admin-section {
  display: flex;
  padding: 10px;
}

.admin-link {
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.admin-link:last-child {
  margin-right: 0;
}
.admin-link:hover {
  background-color: #ccc;
}

.admin-link:hover {
  background-color: #ccc;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1;
}

.dropdown-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-content li {
  padding: 8px;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #f0f0f0;
}

@media screen and (min-width: px) {
  .admin-link {
    margin-bottom: 0;
    margin-right: 10px;
  }
}
</style>
