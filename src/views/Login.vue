<template>
  <div>
    <button @click="redirectToWebDock">Redirect</button>
  </div>
</template>
  
  <script>
export default {
  methods: {
    async redirectToWebDock() {
      const encodedURL = encodeURIComponent("http://localhost:5173/login");
      const redirectURL = `https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=${encodedURL}`;
      window.location.href = redirectURL;
    },
    async fetchData() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const ssoToken = urlParams.get("ssoToken");

        const response = await fetch("http://localhost:3000/verify", {
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
  