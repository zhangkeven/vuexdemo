import globalDataTools from '../util/globalData/globalDataTools'
import baseUrl from "./baseUrl";
// import LocalDataUtil from '../util/LocalDataUtil'

/**
 * @author jm
 * @create 2019-12-11 16:37
 * @desc   系统环境配置
 */
// const EnvTest = document.getElementById("EnvTest").getAttribute('EnvTest')
const EnvTest = 'dev'
export function switchEnvironment(env) {
   env = env || EnvTest
  globalDataTools.setGlobalData('EnvTest', env)
  let urlConfig = null

  switch (env) {
    case 'pro':
      urlConfig = baseUrl.pro
      break
    case 'dev':
      urlConfig = baseUrl.dev
      break
    default:
      urlConfig = baseUrl.other
      break
  }
  // globalDataTools.setGlobalData('urlConfig', urlConfig)
  // LocalDataUtil.callbackFun({
  //   url:'secondScreenAction',
  //   data:{
  //     key1:'getSysConfigCallBack',
  //     key2:{urlConfig: urlConfig}
  //   }
  // })

}
