<template>
  <div>
    <button @click="redirectToWebDock">Login</button>
  </div>
</template>
    
  <script>
export default {
  methods: {
    async redirectToWebDock() {
      const encodedURL = encodeURIComponent("http://localhost:5173");
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
        console.log("Received userData from backend:", userData);

        userData.roleID = userData.email === "abfr31852@edu.ucl.dk" ? 1 : 2;

        console.log("Modified userData with roleID:", userData);

        await fetch("http://localhost:3001/insertUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        });

        console.log("User data sent successfully.");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    try {
      this.fetchData();
    } catch (error) {
      console.error("Error in mounted:", error);
    }
  },
};
</script>
  