import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    baseUrl: 'http://mock.studyinghome.com/mock/5e8e882c301a4f07a0c8a862',//easy-mock
    // baseUrl: 'http://rap2.taobao.org:38080/app/mock/250393',//RAP2 - 没实现
    token: ''
}   
const mutations = {
    loginSuccess(state, val){
        state.token = val;
    }
}

export default new Vuex.Store({
    state,
    mutations
})