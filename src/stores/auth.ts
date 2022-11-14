import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    firstName: null as string | null,
    lastName: null as string | null,
    email: null as string | null,
    password: null as string | null,
    token: null as string | null,
  }),
  actions: {
    login(email: string, password: string) {
      this.firstName = "Joe";
      this.lastName = " Doe";
      this.email = email;

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
