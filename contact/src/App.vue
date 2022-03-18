<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="ui clearing segment pa-5 inverted">
      <div class="ui left floated header ma-0">
        <img
          alt="Vue logo"
          style="width: 40px; margin-left: 10px"
          src="./assets/logo.png"
        />
        <label class="m-l-20">Contacts</label>
      </div>
      <div class="ui right floated header m-t-10">
        <i class="user icon f-14"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.d-flex {
  display: flex !important;
}
.float-left {
  float: left !important;
}
.login-ribbon {
  position: absolute !important;
  left: -16px !important;
  font-size: 14px !important;
}
.text-l {
  text-align: left !important;
}
.he-70 {
  height: 70px !important;
}
.w-100 {
  width: 100% !important;
}
.custom-ribbon {
  position: absolute !important;
  left: -15px !important;
}
.pa-0 {
  padding: 0px !important;
}
.p-t-0 {
  padding-top: 0px !important;
}
.pa-5 {
  padding: 5px !important;
}
.ma-0 {
  margin: 0px !important;
}
.m-r-5 {
  margin-right: 5px !important;
}
.m-r-10 {
  margin-right: 10px !important;
}
.m-r-15 {
  margin-right: 15px !important;
}
.m-r-20 {
  margin-right: 20px !important;
}
.m-l-10 {
  margin-left: 10px !important;
}
.m-l-15 {
  margin-left: 15px !important;
}
.m-l-20 {
  margin-left: 20px !important;
}
.m-t-0 {
  margin-top: 0px !important;
}
.m-t-10 {
  margin-top: 10px !important;
}
.b-t-3 {
  border-top: 3px solid #00b5ad !important;
}
.m-l-5p {
  margin-left: 5% !important;
}
.f-14 {
  font-size: 14px;
}
</style>


