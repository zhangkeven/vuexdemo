import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import main from './modules/main/index' //主页vuex模块
import demo from './modules/demo/index' //demo页vuex模块
Vue.use(Vuex)

export default new Vuex.Store({
    getters, //根getters
    actions, //根actions
    mutations,//根mutations
    modules: { //根modules
        main,
        demo
    }
})
