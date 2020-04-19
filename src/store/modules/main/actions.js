const actions = {
    mainfun(store) {
        console.log(store);
        const {commit, getters, dispatch, state, rootState, rootGetters} = store
        console.log( dispatch, state, rootState, rootGetters)
        commit('demo/add', getters['maingetter'], {root: true})  //操作demo模块里mutations方法
    },
    demofun(){
        console.log('子模块中调用的此方法');
    }
}
export default actions