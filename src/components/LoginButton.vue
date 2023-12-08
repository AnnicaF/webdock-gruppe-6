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
        if (ssoToken == null){
          ssoToken = localStorage.getItem("ssoToken");
        }else{
          localStorage.setItem("ssoToken", ssoToken);
        }

        console.log("Fetching data with ssoToken:", ssoToken);

        // Send et POST request til authenticate med ssoToken til vores backend endpoint
        const response = await fetch("http://localhost:3001/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          // Sender ssoToken som JSON til request body
          body: JSON.stringify({ ssoToken }),
        });

        // Parse the JSON response med user data
        const userData = await response.json();
        console.log("Received userData from backend:", userData);
        localStorage.setItem("userId", userData.id)
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
