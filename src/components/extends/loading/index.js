import Vue from 'vue'
import vuezlLoading from './index.vue'
let Loading = Vue.extend(vuezlLoading)
let instance
let timer = null
//创建构造器
let zlLoading = (options) => {
  if (!instance) {
    instance = new Loading()
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.show = true
  }else{
    instance.show = true
  }
  if (typeof options === 'string') {
    instance.loadingText = options
  } else if (typeof options === 'object') {
    let {loadingText, time} = options
    instance.loadingText = loadingText
  } else {
    return
  }
}
//关闭loading模态层
zlLoading.close = () => {
    instance.show = false
    instance.loadingText = ''
}
//注册组件全局
zlLoading.install = (Vue) => {
  Vue.prototype.$zlLoading = zlLoading
}
export default zlLoading
