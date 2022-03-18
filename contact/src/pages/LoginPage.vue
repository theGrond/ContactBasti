<template>
  <div class="ui raised very text container segment">
    <div class="column">
      <div class="ui raised segment b-t-3 he-70">
        <a class="ui teal ribbon label login-ribbon">Login</a>
      </div>
    </div>
    <div class="">
      <h2 class="ui header left aligned">Dogs Roles with Humans</h2>
      <form class="ui form">
        <div class="field">
          <label class="float-left">User Account</label>
          <input
            type="text"
            v-model="username"
            name="first-name"
            placeholder="User Account"
          />
        </div>
        <div class="field">
          <label class="float-left">Password</label>
          <input
            type="password"
            v-model="password"
            name="last-name"
            placeholder="Password"
          />
        </div>
        <div class="d-flex">
          <button class="ui button" @click="login" type="button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  props: {
    msg: String,
  },
  methods: {
    async login() {
      if (this.username == "" || this.password == "") {
        alert("All field required");
      } else {
        try {
          await axios.post("http://localhost:3000/user/login", {
            username: this.username,
            password: this.password,
          });
          window.isAuthenticated = true;
          this.$router.push("/home");
        } catch (e) {
          console.error(e);
          alert("username or passwor wrong");
        }
      }
    },
  },
};
</script>
