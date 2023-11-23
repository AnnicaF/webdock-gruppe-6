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
          <router-link :to="{ name: '' }">Feature request</router-link>
        </li>
        <li><router-link :to="{ name: '' }">Roadmap</router-link></li>
      </ul>

      <Search />

      <ul class="logsign">
        <button type="button" class="login">Login</button>
        <button type="button" class="signup">Sign up</button>
      </ul>
    </nav>
  </header>
</template>

<script>
import Search from "./Search.vue";

export default {
  components: {
    Search, //  registers the Search component for use in this template
  },
};
</script>

<style>
@import "@/assets/nav.css";
</style>
