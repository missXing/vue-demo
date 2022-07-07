<template>
    <div class="vuex-demo">
      <div>
        hello vuex
      </div>
        <br/>
        <button @click="handleGoFoo">go foo</button>
    </div>
</template>
<script>

export default {
  name: "VuexDemo",
  created() {
    console.log('---')
    console.log(this.$router)
    console.log(this.$route)
  },
  methods: {
    handleGoFoo() {
      this.$router.push('/foo')
    }
  },
};
</script>

<style>
.vuex-demo {
  height: 200px;
  width: 200px;
  background: red;
  margin:auto
}
</style>
