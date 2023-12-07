<template>
  <header>
    <nav>
      <div class="branding">
        <img
          src="/src/assets/images/webdock-logo-full-whitebg.png"
          alt="Webdock.io logo"
        />
      </div>
      <ul class="navigation">
        <li>
          <router-link :to="{ name: 'Feature' }">Feature request</router-link>
        </li>
        <li><router-link :to="{ name: 'RoadMap' }">Roadmap</router-link></li>
      </ul>
      <ul class="logsign">
        <LoginButton />
        <button type="button" class="signup">Sign up</button>
      </ul>
    </nav>
  </header>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";

export default {
  components: {
    LoginButton,
  },
};
</script>

<style>
@import "@/assets/nav.css";
</style>
