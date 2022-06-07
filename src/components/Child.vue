<template>
    <div class="child">
        <div>
             hello child 
        </div>
        <br/>
        <button @click="handleGoBar">go bar</button>

         <router-link to="/childs">go to childs</router-link>
        <br/>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
  name: "Child",
  created() {
    console.log('child--------')
    console.log(this.$router)
    console.log(this.$route)
  },
  beforeRouteEnter(to, from, next) {
    console.log('child-----beforeRouteEnter-----to', to)
    console.log('child-----beforeRouteEnter-----from', from)
    console.log('child-----beforeRouteEnter-----this', this)
    next(vm => console.log('child-----beforeRouteEnter-----vm', vm))
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from, next) {
    console.log('child-----beforeRouteUpdate-----to', to)
    console.log('child-----beforeRouteUpdate-----from', from)
    console.log('child-----beforeRouteUpdate-----this', this)
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log('child-----beforeRouteLeave-----to', to)
    console.log('child-----beforeRouteLeave-----from', from)
    console.log('child-----beforeRouteLeave-----this', this)
    next()
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
  methods: {
    handleGoBar() {
      this.$router.push('/bar')
    }
  },
};
</script>

<style>
.child {
  height: 200px;
  width: 200px;
  background: rgb(51, 0, 255);
  margin:auto
}
</style>
