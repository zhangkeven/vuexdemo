import axios from 'axios'
import qs from 'qs'
import apiDoors from '../config/apiDoors'
import globalDataTools from './globalData/globalDataTools'
import baseUrl from '../config/baseUrl'
import zlToast from '../components/extends/zlToast'
import Storage from '@/util/setStorage'
import CommonUtil from '@/util/commonUtil';

/**
 * @author jm
 * @create
 * @desc   Promise封装ajax
 */
class AxiosUtil {
    // 基本ajax请求(post请求类型)
    static post(options) {
        const start_time = new Date().getTime()

        const params = this.chooseBaseUrl(options)
        let filter = CommonUtil.extend({method: 'post'}, params)
        return new Promise((resolve, reject) => {
            axios(filter).then(response => {

                let mdType = 'failed'
                if (response.status === 200) {
                    let res = response.data
                    resolve(res)
                    mdType = 'success'
                } else {
                    reject(response.data)
                    mdType = 'failed'
                }
            }).catch(err => {
                reject(err)
            })
        })
    }

    // get请求
    static get(options) {
        const start_time = new Date().getTime()

        const params = this.chooseBaseUrl(options)
        let filter = CommonUtil.extend({method: 'get'}, params)
        return new Promise((resolve, reject) => {
            axios(filter).then(response => {
                const end_time = new Date().getTime()
                let mdType = 'failed'
                if (response.status === 200) {
                    let res = response.data
                    resolve(res)
                    mdType = 'success'
                } else {
                    zlToast({message: res.errormsg})
                    mdType = 'failed'
                }
            }).catch(err => {
                reject(err)
            })
        })
    }

    // 选择请求路径前缀
    static chooseBaseUrl(options) {
        const urlConfig = {
            API_DOOR: "http://posuat.cnzhonglunnet.com/",
            WS_DOOR: "ws://192.168.1.41:8080/wsms-web/websocket/",
            log_url: "http://hmuat.cnzhonglunnet.com/hm.gif",
            redirect_door: "http://lsuat.cnzhonglunnet.com/"
        }
        const EnvTest = globalDataTools.getGlobalData('EnvTest')
        // const EnvTest = 'dev'
        let env = options.env || EnvTest
        let storage = new Storage();
        const Token = storage.getItem('Token')
        // options.data.Token = Token || ''
        let result = {
            url: apiDoors[options.url],
            timeout: options.timeout || 20000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',//设置请求头请求格式为JSON
                'Token': Token ? Token : '',
                // 'access_token': this.token //设置token 其中K名要和后端协调好
            },
        }
        if (EnvTest == 'pro') {
            return {
                ...result,
                baseURL: urlConfig.API_DOOR,
                data: qs.stringify(options.data)
            }
        }
        if (env == 'yapi') {
            return {
                ...result,
                baseURL: baseUrl[env].API_DOOR,
                params: options.data
            }
        } else {
            return {
                ...result,
                baseURL: baseUrl[env].API_DOOR,
                data: JSON.stringify(options.data)
            }
        }
    }
}

export default AxiosUtil
