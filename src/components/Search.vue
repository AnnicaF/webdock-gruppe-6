<template>
  <div class="search-container">
    <div class="search-box">
      <img src="@/assets/search-icon.svg" class="search-icon" alt="Search" />
      <input
        v-model="query"
        @keyup.enter="search"
        placeholder="Search..."
        class="search-input"
      />
    </div>

    <div v-if="results.length">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="result in results" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      results: [],
    };
  },
  methods: {
    search() {
      const mockData = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];

      this.results = mockData.filter((item) => item.name.includes(this.query));
    },
  },
};
</script>

<style>
@import "@/assets/search.css";
</style>
