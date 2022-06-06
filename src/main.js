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
//     }, this.message)
//   },
//   data: {
//     message: 'Hello Vue2!',
//   }
// })