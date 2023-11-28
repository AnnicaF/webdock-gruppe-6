import { createApp } from "vue";
import App from "./App.vue";
<<<<<<< HEAD
import axios from "axios";
=======
import router from "./router"; // Sørg for at din router-fil er korrekt konfigureret
>>>>>>> 6315ed8fa924d6ae14e1af5f8f79c72d44cc87ae

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

// Brug Vue Router
app.use(router);

// Scroll til toppen ved navigation
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
