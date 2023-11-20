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
        <button type="button" class="login">Login</button>
        <button type="button" class="signup">Sign up</button>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style>
@import "@/assets/nav.css";
</style>
