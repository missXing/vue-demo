<template>
    <div id="router">
        <h1>hello router</h1>
        <p>
            <router-link to="/foo/1">go to foo111</router-link>
            <router-link to="/foo/2">go to foo222</router-link>
            <router-link to="/bar">go to bar333</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
  name: "RouterDemo",
};
</script>

<style>
#router {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>