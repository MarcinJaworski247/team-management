import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  }),
  actions: {
    login() {
      console.log(this.email + " " + this.password);
    },
    signup() {
      console.log(
        this.firstName +
          " " +
          this.lastName +
          " " +
          this.email +
          " " +
          this.password
      );
    },
  },
});
