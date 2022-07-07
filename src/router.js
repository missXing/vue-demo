import Foo from './components/Foo.vue'
import VuexDemo from './components/VuexDemo.vue'
import Child from './components/Child.vue'
export const routes = [{
        path: '/foo/:id',
        component: Foo,
        beforeEnter: (to, from, next) => {
            console.log('beforeEnter-----to', to)
            console.log('beforeEnter-----from', from)
            next()
        },
        children: [{
            path: '/child',
            component: Child,
            children: [{
                path: '/childs',
                component: Child
            }]
        }]
    },
    { path: '/vuex', component: VuexDemo }
]