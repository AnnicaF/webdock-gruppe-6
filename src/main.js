import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faComment } from "@fortawesome/free-solid-svg-icons";

import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faComment, faCaretUp);

const app = createApp(App);

app.use(router);
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
