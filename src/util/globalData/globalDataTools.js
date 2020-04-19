/**
 * @Description:
 * @author RainGorr
 * @date 2019/12/7
*/

class globalDataTools {
  constructor(){}
  // 存入globalData
  static setGlobalData(key, value){
    console.log(key,value);
    window.globalData[key] = value
  }
  // 取出
  static getGlobalData(key){
    for(let item in window.globalData){
      if(item == key){
        return window.globalData[key]
      }
    }
  }
}

export default globalDataTools
