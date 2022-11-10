import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    firstName: null as String | null,
    lastName: null as String | null,
    email: null as String | null,
    password: null as String | null,
    token: null as String | null,
  }),
  actions: {
    login(email: String, password: String) {
      this.firstName = "Joe";
      this.lastName = " Doe";
      this.email = email;

      console.log(this.email + " " + this.password);
      this.token = "token";
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
