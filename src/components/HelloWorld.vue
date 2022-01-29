<template>
  <div class="hello">
    <h1>{{ msg1 + count1 }}</h1>
    <h2>{{computedMsg}}</h2>
    <div class="author-info">
      姓名：{{objData.name}}<br>
      性别：{{objData.gender}}<br>
      测试：{{test}}
    </div>
    <button @click="handleClickData">change msg1</button>
    <button @click="handleClickcomputed">change msg2</button>
    <button @click="handleClick">change test</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg1: "vue2 分享",
      count1: 0,
      msg2: "响应式",
      count2: 0,
      objData: {
        name: "喵星星",
        gender: "女",
      },
    };
  },
  beforeCreate() {
    
    console.log("beforeCreate ----  helloWorld");
  },
  created() {

    console.log("created ----  helloWorld");
  },
  beforeMount() {
    this.test = 1;
    console.log("beforeMount ----  helloWorld");
  },
  mounted() {
    
    console.log("mounted ----  helloWorld");
  },
  beforeUpdate() {
    console.log("beforeUpdate ----  helloWorld");
  },
  updated() {
    console.log("updated ----  helloWorld");
  },
  computed: {
    computedMsg() {
      return this.msg2 + "原理" + this.count2;
    },
  },
  methods: {
    handleClickData() {
      this.count1++;
    },
    handleClickcomputed() {
      this.count2++;
    },
    handleClick() {
      this.test ++
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.author-info {
  margin-bottom: 20px;
}
</style>
