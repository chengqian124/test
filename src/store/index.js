import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
    userName: '', //名字
}

const getters = {
    setName(state) {
        return state.userName
    }
}

const mutations = {
    pushName(state, userName) {
        state.userName = userName == 'buzzly' ? 'buzzly' : userName
    }
}


const actions = {
    setNames(context, name) {
        setTimeout(() => {
            context.commit('pushName', name)
        }, 1000)

    }

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions

})