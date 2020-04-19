const mutations = {
    SAVE(state, obj) {
        let param = ''
        let calcObj = obj.item.split('/')
        for (let j = 0; j < calcObj.length; j++) {
            param += '[' + JSON.stringify(calcObj[j]) + ']'  //遍历拼接key
        }
        let data = obj.value  //修改state的值
        for (let key in data) {
            eval("state" + param)[key] = data[key]  //动态取子模块下的state值
        }
    },
    set() {
        console.log('根commit')
    }
}
export default mutations