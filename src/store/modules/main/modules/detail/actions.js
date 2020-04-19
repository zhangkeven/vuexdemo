const actions = {
    mainfun(store) {
        console.log(store);
        const {commit, getters, dispatch, state, rootState, rootGetters} = store //rootstate 根state rootgetter 根getter
        console.log( state, rootState, rootGetters)
        commit('demo/add', getters['maingetter'], {root: true})  //操作demo模块里mutations方法  需要操作 根action和mutation 需要加root：true
        dispatch('main/demofun', {}, {root: true}) // 调用其他模块的 actions
    }
}
export default actions