<template>
  <div class="search-container">
    <div class="search-box">
      <img src="@/assets/search-icon.svg" class="search-icon" alt="Search" />
      <!-- v-model binds input to 'query', updating search in real-time as the user is typing -->
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
// import the debounce function for the search bar
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      query: "",
      results: [],
    };
  },
  created() {
    // "debounce" the search method to limit how often it's called.. (for better performance)
    this.debouncedSearch = debounce(this.search, 500); // Waits for ½sec after the last input
  },
  methods: {
    search() {
      // Log when the search method is called (for testing)
      console.log("Search method called:", this.query);

      // for now it's just mock data, so no debouncing, search() will eventually make an API call
      const mockData = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];

      this.results = mockData.filter((item) =>
        item.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },

  watch: {
    // reacts to changes in user's search input and calls the debounced search method
    query() {
      this.debouncedSearch();
    },
  },
};
</script>

<style>
@import "@/assets/search.css";
</style>
