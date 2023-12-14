// Vuex store-filen
// Vuex store-filen
import { createStore } from "vuex";

// Funktion til at hente og parse data fra localStorage
const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? false : null;
};

const isAuthenticated =  false;
const userId = getLocalStorageItem("userId") || null;
const roleID = getLocalStorageItem("roleID") || null;

export default createStore({
  state: {
    isAuthenticated: isAuthenticated,
    userId: userId,
    roleID: roleID,
  },
  mutations: {
    setAuthentication(state, { isAuthenticated, userId }) {
      state.isAuthenticated = isAuthenticated;
      state.userId = userId;

      // Opdater local storage
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
      localStorage.setItem("userId", JSON.stringify(userId));
    },
    setUserRole(state, roleID) {
      state.roleID = roleID;

      // Opdater local storage
      localStorage.setItem("roleID", JSON.stringify(roleID));
    },
  },
});
