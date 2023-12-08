// Vuex store-filen
import { createStore } from "vuex";

// Funktion til at hente og parse data fra localStorage
const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const isAuthenticated = getLocalStorageItem("isAuthenticated") || false;
const userId = getLocalStorageItem("userId") || null;

export default createStore({
  state: {
    isAuthenticated: isAuthenticated,
    userId: userId,
  },
  mutations: {
    setAuthentication(state, { isAuthenticated, userId }) {
      state.isAuthenticated = isAuthenticated;
      state.userId = userId;

      // Opdater local storage
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
      localStorage.setItem("userId", JSON.stringify(userId));
    },
  },
});
