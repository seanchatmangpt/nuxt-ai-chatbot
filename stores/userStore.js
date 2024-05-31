import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isAuthenticated: false,
  }),
  actions: {
    login(user) {
      this.currentUser = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.currentUser = null;
      this.isAuthenticated = false;
    },
    register(user) {
      // Logic to register a new user
    },
  }
});
