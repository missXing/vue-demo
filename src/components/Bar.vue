<template>
    <div class="bar">
      <div>
        hello bar
      </div>
        <br/>
        <button @click="handleGoFoo">go foo</button>
    </div>
</template>
<script>

export default {
  name: "Bar",
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
.bar {
  height: 200px;
  width: 200px;
  background: red;
  margin:auto
}
</style>
