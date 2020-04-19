import getters from './getters'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import detail from './modules/detail/index' //main模块下的detail模块
export default {
    namespaced: true, //模块独立化
    getters,
    actions,
    state,
    mutations,
    modules:{
        detail
    }
};