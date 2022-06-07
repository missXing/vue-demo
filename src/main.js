import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import RouterDemo from './router.vue'
import { routes } from './router.js'

Vue.use(VueRouter)



const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
    console.log('beforeEach-----to', to)
    console.log('beforeEach------from', from)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve-----to', to)
    console.log('beforeResolve------from', from)
    next()
})

router.afterEach((to, from, a) => {
    console.log('afterEach-----to', to)
    console.log('afterEach------from', from)
    console.log('afterEach------a', a)

})



new Vue({
    el: "#app",
    render: h => h(RouterDemo),
    router
})

// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement('div', {
//       attrs: {
//         id: '#app2'
//       }
//     }, this.message)
//   },
//   data: {
//     message: 'Hello Vue2!',
//   }
// })