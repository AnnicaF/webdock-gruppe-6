<template>
  <header>
    <nav>
      <div class="branding">
        <img
          src="/src/assets/images/webdock-logo-full-whitebg.png"
          alt="Webdock.io logo"
        />
      </div>

      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link :to="{ name: 'Feature' }">Feature request</router-link>
        </li>
        <li><router-link :to="{ name: 'RoadMap' }">Roadmap</router-link></li>
      </ul>

      <Search />

      <ul class="logsign">
        <LoginButton />
        <button type="button" class="signup">Sign up</button>
      </ul>

      <!--Responsive starts here-->

      <button @click="toggleMobileNav" v-if="mobile">
        <font-awesome-icon class="fa-bars" icon="fa-solid fa-bars" />
      </button>
      <transition name="mobile-nav">
        <div v-show="mobileNav">
          <ul class="dropdown-nav">
            <li>
              <router-link :to="{ name: 'Feature' }"
                >Feature request</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'RoadMap' }">Roadmap</router-link>
            </li>
          </ul>

          <Search />

          <ul class="logsign">
            <LoginButton />
            <button type="button" class="signup">Sign up</button>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import Search from "@/components/Search.vue";

export default {
  components: {
    LoginButton,
    Search,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      mobileWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.mobileWidth = window.innerWidth;
      this.mobile = this.mobileWidth <= 768;
      if (this.mobile) {
        this.mobileNav = false;
      }
    },
  },
};
</script>

<style>
@import "@/assets/nav.css";
</style>
