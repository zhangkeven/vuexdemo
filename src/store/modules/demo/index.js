import getters from './getters'
import actions from './actions'
import state from './state'
import mutations from './mutations'


export default {
    namespaced: true, //模块独立化
    getters,
    actions,
    state,
    mutations,
};