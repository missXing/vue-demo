import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: "#app",
  render: h => h(App),
})

// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement('div', {
//       attrs: {
//         id: '#app2'
//       }
//     }, [this.message, createElement('h1', {
//       attrs: {
//         id: 'app3'
//       }
//     }, this.test)])
//   },
//   data: {
//     message: 'Hello Vue2!',
//     test: '商业化技术'
//   }
// })