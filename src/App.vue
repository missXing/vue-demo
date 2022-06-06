<template>
  <div id="app4">
    <img alt="Vue logo"
         src="./assets/logo.png"/>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log("beforeCreate ----  App");
  },
  created() {
    console.log("created ----  App");
  },
  beforeMount() {
    console.log("beforeMount ----  App");
  },
  mounted() {
    console.log("mounted ----  App");
  },
  beforeUpdate() {
    console.log("beforeUpdate ----  App");
  },
  updated() {
    console.log("updated ----  App");
  },
};
</script>

<style>
#app4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
