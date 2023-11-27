<template>
  <div>
    <button @click="redirectToWebDock">Redirect</button>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>
  
<script>
export default {
  methods: {
    async redirectToWebDock() {
      const encodedURL = encodeURIComponent("http://localhost:5174/login");
      const redirectURL = `https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=${encodedURL}`;
      window.location.href = redirectURL;
    },
    async fetchData() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const ssoToken = urlParams.get("ssoToken");

        console.log("Fetching data with ssoToken:", ssoToken);

        const response = await fetch("http://localhost:3001/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ssoToken }),
        });

        const userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    // Hent data, når komponenten er monteret
    this.fetchData();
  },
};
</script>
