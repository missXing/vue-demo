import Vue from 'vue'

import Vuex from 'vuex'



Vue.use(Vuex)

const moduleB = {
    namespaced: true,
    state: {
        moduleB: 1,
    },
    mutations: {
        increment(state) {
            state.moduleB++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        computedCount(state) {
            return state.moduleB + 1
        }
    }
}

const moduleA = {
    namespaced: true,
    modules: {
        moduleB
    },
    state: {
        moduleA: 1,
    },
    mutations: {
        increment(state) {
            state.moduleA++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        computedCount(state) {
            return state.moduleA + 1
        }
    }
}

export default new Vuex.Store({
    modules: {
        moduleA
    },
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        computedCount(state) {
            return state.count + 1
        }
    }
})