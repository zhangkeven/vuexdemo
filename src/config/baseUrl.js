/**
 * @author jm
 * @create 2020-01-06 15:41
 * @desc   系统请求url前缀 （API_DOOR：接口前缀，redirect_door：商户后地址前缀，WS_DOOR：websocket地址前缀）
 */

const pro = {
  API_DOOR: 'http://ls.zhonglunnet.com/mt/pos',
  redirect_door: 'http://ls.zhonglunnet.com/',
  WS_DOOR: 'ws://ls.zhonglunnet.com/wsms-web/websocket/',
  log_url:'http://hm.zhonglunnet.com/hm.gif'
}


const dev = {
  API_DOOR: 'http://192.168.1.102:8000',
  redirect_door: 'http://lsdev.cnzhonglunnet.com/',
  log_url:'http://hmdev.cnzhonglunnet.com/hm.gif'
}
const yapi = {
  API_DOOR: 'http://yapi.cnzhonglunnet.com/mock/564/',
}


const other = {
  API_DOOR: '',
  redirect_door: '',
  WS_DOOR: ''
}

export default { dev, pro,other,yapi }
