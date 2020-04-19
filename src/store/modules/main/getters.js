const getters = {
    maingetter(state, getters, rootState, rootGetters) { //state 当前模块state值  getters  当前模块getters rootstate 根state rootgetters 根getter
        console.log('main的gettes', getters, rootState, rootGetters['demo/calc']);
        let total = state.number + rootGetters['demo/calc']  // 4 + 3
        return total
    }
}
export default getters