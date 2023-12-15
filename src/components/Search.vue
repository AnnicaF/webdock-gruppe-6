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
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      query: "",
      results: [],
    };
  },
  created() {
    this.debouncedSearch = debounce(this.search, 500);
  },
  methods: {
    search() {
      console.log("Search method called:", this.query);
      this.$parent.$emit("callsearch", this.query.toLowerCase());
    },
  },

  watch: {
    query() {
      this.debouncedSearch();
    },
  },
};
</script>

<style>
@import "@/assets/search.css";
</style>
